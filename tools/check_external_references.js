"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const REQUEST_TIMEOUT_MS = 12000;
const CONCURRENCY = 6;
const REGULATIONS_MODE = process.argv.includes("--regulations");
const REGULATIONS_REPORT_PATH = path.join(ROOT, "regulations-maintenance-report.md");

function read(relativePath) {
    return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

function extractFieldUrls(text, fieldName) {
    const pattern = new RegExp(`\\b${fieldName}\\s*:\\s*["'](https?:\\/\\/[^"']+)["']`, "g");
    return [...text.matchAll(pattern)].map((match) => match[1]);
}

function dedupeTargets(targets) {
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

function collectGeneralTargets() {
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

    return dedupeTargets(targets);
}

function collectRegulationsTargets() {
    const regulations = read("data/regulations.js");
    const targets = [];

    for (const url of extractFieldUrls(regulations, "agencyUrl")) {
        targets.push({ source: "data/regulations.js State agencyUrl", url });
    }
    for (const url of extractFieldUrls(regulations, "url")) {
        targets.push({ source: "data/regulations.js StateResource/StateNotice url", url });
    }
    for (const url of extractFieldUrls(regulations, "designationUrl")) {
        targets.push({ source: "data/regulations.js designationUrl", url });
    }

    return dedupeTargets(targets);
}

function collectTargets() {
    return REGULATIONS_MODE ? collectRegulationsTargets() : collectGeneralTargets();
}

function normalizeComparableUrl(value) {
    try {
        const url = new URL(value);
        const pathname = url.pathname.replace(/\/$/, "") || "/";
        return `${url.protocol}//${url.host}${pathname}${url.search}`;
    } catch {
        return value;
    }
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
        const accessLimited = [401, 403, 405, 429].includes(status);
        const reachable = status >= 200 && status < 400;
        const redirected = reachable && normalizeComparableUrl(response.url) !== normalizeComparableUrl(target.url);
        const classification = redirected ? "REDIRECT" : reachable ? "OK" : accessLimited ? "ACCESS-LIMITED" : "WARNING";
        const detail = redirected
            ? `redirected to ${response.url}`
            : reachable
                ? "reachable"
                : accessLimited
                    ? "provider may block automated checks"
                    : `HTTP ${status}`;

        return { ...target, status, finalUrl: response.url, classification, detail };
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

function writeGithubOutput(concernCount) {
    if (!process.env.GITHUB_OUTPUT) return;
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `concerns=${concernCount}\n`);
}

function writeRegulationsReport(results, concerns) {
    const lines = [
        "# Regulations Maintenance Review Queue",
        "",
        `Automated check: ${new Date().toISOString()}`,
        `Targets checked: ${results.length}`,
        `Items requiring human review: ${concerns.length}`,
        "",
        "Automated reachability and redirects are not authority decisions. Review each concern against the responsible state authority before changing Regulations source data."
    ];

    if (concerns.length) {
        lines.push("", "## Items requiring review", "");
        for (const result of concerns) {
            lines.push(`- **${result.classification}** - ${result.url} - ${result.detail} - ${result.sources.join(", ")}`);
        }
    } else {
        lines.push("", "No technical reachability or redirect concerns were detected in this run.");
    }

    fs.writeFileSync(REGULATIONS_REPORT_PATH, `${lines.join("\n")}\n`);
}

function writeSummary(results) {
    const counts = results.reduce((acc, result) => {
        acc[result.classification] = (acc[result.classification] || 0) + 1;
        return acc;
    }, {});
    const concerns = results.filter((result) => result.classification !== "OK");
    const title = REGULATIONS_MODE ? "REGULATIONS EXTERNAL REFERENCE HEALTH - REPORT ONLY" : "EXTERNAL REFERENCE HEALTH - REPORT ONLY";

    console.log(title);
    console.log(`Targets: ${results.length}`);
    console.log(`OK: ${counts.OK || 0}`);
    console.log(`Redirects: ${counts.REDIRECT || 0}`);
    console.log(`Access-limited: ${counts["ACCESS-LIMITED"] || 0}`);
    console.log(`Warnings: ${counts.WARNING || 0}`);

    for (const result of concerns) {
        const sourceText = result.sources.join(", ");
        console.log(`[${result.classification}] ${result.url} - ${result.detail} - ${sourceText}`);
        if (process.env.GITHUB_ACTIONS) {
            console.log(`::warning::External reference check: ${result.url} - ${result.detail} - ${sourceText}`);
        }
    }

    if (REGULATIONS_MODE) {
        writeRegulationsReport(results, concerns);
        writeGithubOutput(concerns.length);
    }

    const summaryPath = process.env.GITHUB_STEP_SUMMARY;
    if (summaryPath) {
        const lines = [
            REGULATIONS_MODE ? "## Regulations External Reference Health - Report Only" : "## External Reference Health - Report Only",
            "",
            `- Targets: ${results.length}`,
            `- OK: ${counts.OK || 0}`,
            `- Redirects: ${counts.REDIRECT || 0}`,
            `- Access-limited: ${counts["ACCESS-LIMITED"] || 0}`,
            `- Warnings: ${counts.WARNING || 0}`,
            "",
            REGULATIONS_MODE
                ? "Network results never change Regulations data. Redirects and failures require human review against the responsible authority."
                : "Automated reachability is not authoritative for technical correctness, source suitability, embed behavior, or rights. Human review remains required."
        ];
        if (concerns.length) {
            lines.push("", "### Items to review", "");
            for (const result of concerns) {
                lines.push(`- **${result.classification}** - ${result.url} - ${result.detail}`);
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

    // Deliberately report-only. Network results never mutate or block source data.
    process.exitCode = 0;
}

main().catch((error) => {
    console.error(`Unexpected checker warning: ${error.stack || error}`);
    process.exitCode = 0;
});
