"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const REQUEST_TIMEOUT_MS = 12000;
const CONCURRENCY = 6;

function read(relativePath) {
    return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

function extractFieldUrls(text, fieldName) {
    const pattern = new RegExp(`\\b${fieldName}\\s*:\\s*["'](https?:\\/\\/[^"']+)["']`, "g");
    return [...text.matchAll(pattern)].map((match) => match[1]);
}

function collectTargets() {
    const rigs = read("data/rigs.js");
    const media = read("data/media.js");
    const targets = [];

    for (const url of extractFieldUrls(rigs, "url")) {
        targets.push({ source: "data/rigs.js referenceLinks", url });
    }
    for (const url of extractFieldUrls(rigs, "externalUrl")) {
        targets.push({ source: "data/rigs.js tutorialVideo", url });
    }
    for (const url of extractFieldUrls(media, "externalUrl")) {
        targets.push({ source: "data/media.js external Media", url });
    }

    const deduped = new Map();
    for (const target of targets) {
        const prior = deduped.get(target.url);
        if (prior) {
            if (!prior.sources.includes(target.source)) prior.sources.push(target.source);
        } else {
            deduped.set(target.url, { url: target.url, sources: [target.source] });
        }
    }
    return [...deduped.values()];
}

async function checkTarget(target) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
        const response = await fetch(target.url, {
            method: "GET",
            redirect: "follow",
            signal: controller.signal,
            headers: {
                "user-agent": "Freshwater-Fishing-Companion-Link-Health/1.0",
                accept: "text/html,application/xhtml+xml,application/json;q=0.9,*/*;q=0.8"
            }
        });
        if (response.body) {
            try { await response.body.cancel(); } catch (_) { /* no-op */ }
        }

        const status = response.status;
        const ok = status >= 200 && status < 400;
        const accessLimited = [401, 403, 405, 429].includes(status);
        return {
            ...target,
            status,
            finalUrl: response.url,
            classification: ok ? "OK" : accessLimited ? "ACCESS-LIMITED" : "WARNING",
            detail: ok ? "reachable" : accessLimited ? "provider may block automated checks" : `HTTP ${status}`
        };
    } catch (error) {
        const detail = error && error.name === "AbortError" ? "request timeout" : String(error.message || error);
        return { ...target, status: null, finalUrl: null, classification: "WARNING", detail };
    } finally {
        clearTimeout(timer);
    }
}

async function mapConcurrent(items, worker, limit) {
    const results = new Array(items.length);
    let next = 0;

    async function run() {
        while (true) {
            const index = next++;
            if (index >= items.length) return;
            results[index] = await worker(items[index]);
        }
    }

    await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
    return results;
}

function writeSummary(results) {
    const counts = results.reduce((acc, result) => {
        acc[result.classification] = (acc[result.classification] || 0) + 1;
        return acc;
    }, {});

    console.log("EXTERNAL REFERENCE HEALTH — REPORT ONLY");
    console.log(`Targets: ${results.length}`);
    console.log(`OK: ${counts.OK || 0}`);
    console.log(`Access-limited: ${counts["ACCESS-LIMITED"] || 0}`);
    console.log(`Warnings: ${counts.WARNING || 0}`);

    for (const result of results) {
        if (result.classification === "OK") continue;
        const sourceText = result.sources.join(", ");
        console.log(`[${result.classification}] ${result.url} — ${result.detail} — ${sourceText}`);
        if (process.env.GITHUB_ACTIONS) {
            console.log(`::warning::External reference check: ${result.url} — ${result.detail} — ${sourceText}`);
        }
    }

    const summaryPath = process.env.GITHUB_STEP_SUMMARY;
    if (summaryPath) {
        const lines = [
            "## External Reference Health — Report Only",
            "",
            `- Targets: ${results.length}`,
            `- OK: ${counts.OK || 0}`,
            `- Access-limited: ${counts["ACCESS-LIMITED"] || 0}`,
            `- Warnings: ${counts.WARNING || 0}`,
            "",
            "Automated reachability is not authoritative for technical correctness, source suitability, embed behavior, or rights. Human review remains required."
        ];
        const concerns = results.filter((result) => result.classification !== "OK");
        if (concerns.length) {
            lines.push("", "### Items to review", "");
            for (const result of concerns) {
                lines.push(`- **${result.classification}** — ${result.url} — ${result.detail}`);
            }
        }
        fs.appendFileSync(summaryPath, `${lines.join("\n")}\n`);
    }
}

async function main() {
    let targets;
    try {
        targets = collectTargets();
    } catch (error) {
        console.error(`Checker setup warning: ${error.message || error}`);
        process.exitCode = 0;
        return;
    }

    const results = await mapConcurrent(targets, checkTarget, CONCURRENCY);
    writeSummary(results);

    // Deliberately report-only. Network results never block the repository.
    process.exitCode = 0;
}

main().catch((error) => {
    console.error(`Unexpected checker warning: ${error.stack || error}`);
    process.exitCode = 0;
});
