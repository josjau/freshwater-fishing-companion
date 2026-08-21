#!/usr/bin/env node
"use strict";

const childProcess = require("child_process");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const FAILURES = [];
const CHECKS = [];
let TRACKED_FILES = null;

function absolutePath(relativePath) {
    return path.join(ROOT, ...relativePath.split("/"));
}

function recordCheck(name) {
    CHECKS.push(name);
}

function fail(group, message) {
    FAILURES.push(`[${group}] ${message}`);
}

function isPlainObject(value) {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function fileExists(relativePath) {
    try {
        return fs.statSync(absolutePath(relativePath)).isFile();
    } catch {
        return false;
    }
}

function directoryExists(relativePath) {
    try {
        return fs.statSync(absolutePath(relativePath)).isDirectory();
    } catch {
        return false;
    }
}

function readText(relativePath) {
    if (!fileExists(relativePath)) {
        fail("Required file", `missing ${relativePath}`);
        return null;
    }

    try {
        return fs.readFileSync(absolutePath(relativePath), "utf8");
    } catch (error) {
        fail("Required file", `could not read ${relativePath}: ${error.message}`);
        return null;
    }
}

function gitExecutableCandidates() {
    const candidates = ["git"];

    if (process.platform === "win32") {
        const localAppData = process.env.LOCALAPPDATA;
        if (localAppData) {
            const desktopRoot = path.join(localAppData, "GitHubDesktop");
            try {
                const appDirectories = fs
                    .readdirSync(desktopRoot, { withFileTypes: true })
                    .filter((entry) => entry.isDirectory() && entry.name.startsWith("app-"))
                    .map((entry) => entry.name)
                    .sort()
                    .reverse();

                for (const appDirectory of appDirectories) {
                    candidates.push(
                        path.join(desktopRoot, appDirectory, "resources", "app", "git", "cmd", "git.exe"),
                        path.join(desktopRoot, appDirectory, "resources", "app", "git", "bin", "git.exe")
                    );
                }
            } catch {
                // GitHub Desktop may not be installed in the default per-user location.
            }
        }

        for (const programFiles of [process.env.ProgramFiles, process.env["ProgramFiles(x86)"]]) {
            if (programFiles) {
                candidates.push(path.join(programFiles, "Git", "cmd", "git.exe"));
            }
        }
    }

    return [...new Set(candidates)];
}

function listTrackedRepositoryFiles() {
    if (TRACKED_FILES !== null) {
        return TRACKED_FILES;
    }

    let lastError = null;

    for (const executable of gitExecutableCandidates()) {
        try {
            const output = childProcess.execFileSync(
                executable,
                ["-C", ROOT, "ls-files", "-z"],
                { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }
            );
            TRACKED_FILES = output
                .split("\0")
                .filter((item) => item !== "")
                .map((item) => item.replace(/\\/g, "/"))
                .sort();
            return TRACKED_FILES;
        } catch (error) {
            lastError = error;
            if (error && error.code !== "ENOENT") {
                break;
            }
        }
    }

    const detail = lastError && lastError.code === "ENOENT"
        ? "Git could not be located, including the normal GitHub Desktop installation path"
        : "git ls-files failed for this repository";
    fail(
        "Git tracking",
        `${detail}; tracked-file integrity checks require a valid Git checkout`
    );
    TRACKED_FILES = [];
    return TRACKED_FILES;
}

function normalizeLocalReference(reference) {
    if (typeof reference !== "string") {
        return null;
    }

    const trimmed = reference.trim();
    if (
        trimmed === "" ||
        trimmed.startsWith("http://") ||
        trimmed.startsWith("https://") ||
        trimmed.startsWith("//") ||
        trimmed.startsWith("data:") ||
        trimmed.startsWith("mailto:") ||
        trimmed.startsWith("tel:") ||
        trimmed.startsWith("#")
    ) {
        return null;
    }

    const withoutQuery = trimmed.split(/[?#]/, 1)[0];
    return withoutQuery.replace(/^\.\//, "").replace(/^\//, "");
}

function extractEntrypointReferences(indexHtml) {
    const stylesheetRefs = [];
    const scriptRefs = [];

    for (const match of indexHtml.matchAll(/<link\b[^>]*\bhref=["']([^"']+)["'][^>]*>/gi)) {
        const tag = match[0];
        if (!/\brel=["'][^"']*stylesheet[^"']*["']/i.test(tag)) {
            continue;
        }
        const local = normalizeLocalReference(match[1]);
        if (local) {
            stylesheetRefs.push(local);
        }
    }

    for (const match of indexHtml.matchAll(/<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi)) {
        const local = normalizeLocalReference(match[1]);
        if (local) {
            scriptRefs.push(local);
        }
    }

    return { stylesheetRefs, scriptRefs };
}

function validateEntrypoint() {
    recordCheck("Entrypoint and active JavaScript syntax");

    const indexHtml = readText("index.html");
    if (indexHtml === null) {
        return { stylesheetRefs: [], scriptRefs: [] };
    }

    const refs = extractEntrypointReferences(indexHtml);
    const duplicates = [...refs.stylesheetRefs, ...refs.scriptRefs].filter(
        (item, index, array) => array.indexOf(item) !== index
    );
    for (const duplicate of [...new Set(duplicates)]) {
        fail("Entrypoint", `duplicate local asset reference: ${duplicate}`);
    }

    for (const relativePath of [...refs.stylesheetRefs, ...refs.scriptRefs]) {
        if (!fileExists(relativePath)) {
            fail("Entrypoint", `local asset does not exist: ${relativePath}`);
        }
    }

    for (const relativePath of refs.scriptRefs.filter((item) => item.endsWith(".js"))) {
        const source = readText(relativePath);
        if (source === null) {
            continue;
        }
        try {
            new vm.Script(source, { filename: relativePath });
        } catch (error) {
            fail("JavaScript syntax", `${relativePath}: ${error.message}`);
        }
    }

    if (directoryExists("data")) {
        const directDataFiles = fs
            .readdirSync(absolutePath("data"), { withFileTypes: true })
            .filter((entry) => entry.isFile() && entry.name.endsWith(".js"))
            .map((entry) => `data/${entry.name}`)
            .sort();
        const loadedDataFiles = refs.scriptRefs.filter((item) => /^data\/[^/]+\.js$/.test(item)).sort();

        for (const dataFile of directDataFiles) {
            if (!loadedDataFiles.includes(dataFile)) {
                fail("Entrypoint", `production data source is not loaded by index.html: ${dataFile}`);
            }
        }
    }

    return refs;
}

function loadBindings(relativePath, names) {
    const source = readText(relativePath);
    if (source === null) {
        return {};
    }

    const context = vm.createContext({
        console: Object.freeze({
            info() {},
            log() {},
            warn() {},
            error() {}
        })
    });

    const exportSource = `${source}\n;globalThis.__REPOSITORY_VALIDATOR_EXPORTS__ = { ${names.join(", ")} };`;

    try {
        const script = new vm.Script(exportSource, { filename: relativePath });
        script.runInContext(context, { timeout: 2000 });
        return context.__REPOSITORY_VALIDATOR_EXPORTS__ || {};
    } catch (error) {
        fail("Data loading", `${relativePath}: ${error.message}`);
        return {};
    }
}

function requireArray(value, label) {
    if (!Array.isArray(value)) {
        fail(label, "expected an array");
        return [];
    }
    return value;
}

function validateId(value, label) {
    if (typeof value !== "string" || !ID_PATTERN.test(value)) {
        fail(label, `invalid canonical ID: ${JSON.stringify(value)}`);
        return false;
    }
    return true;
}

function validateUniqueIds(records, label) {
    const seen = new Set();
    for (const record of records) {
        if (!isPlainObject(record)) {
            fail(label, "registry contains a non-object record");
            continue;
        }
        if (!validateId(record.id, label)) {
            continue;
        }
        if (seen.has(record.id)) {
            fail(label, `duplicate ID: ${record.id}`);
        }
        seen.add(record.id);
    }
    return seen;
}

function validateCanonicalRecords(records, label) {
    const requiredFields = ["id", "name", "summary", "createdVersion", "lastModifiedVersion", "isActive"];
    validateUniqueIds(records, label);

    for (const record of records) {
        if (!isPlainObject(record)) {
            continue;
        }
        for (const field of requiredFields) {
            if (!Object.prototype.hasOwnProperty.call(record, field)) {
                fail(label, `${record.id || "<unknown>"}: missing required field ${field}`);
            }
        }
        for (const field of ["name", "summary", "createdVersion", "lastModifiedVersion"]) {
            if (typeof record[field] !== "string" || record[field].trim() === "") {
                fail(label, `${record.id || "<unknown>"}: ${field} must be non-empty text`);
            }
        }
        if (typeof record.isActive !== "boolean") {
            fail(label, `${record.id || "<unknown>"}: isActive must be Boolean`);
        }
    }
}

function indexById(records) {
    return new Map(
        records
            .filter((record) => isPlainObject(record) && typeof record.id === "string")
            .map((record) => [record.id, record])
    );
}

function validateCoreRegistry(coreIds, registry, label) {
    const ids = requireArray(coreIds, label);
    const registryById = indexById(registry);
    const seen = new Set();

    for (const id of ids) {
        if (!validateId(id, label)) {
            continue;
        }
        if (seen.has(id)) {
            fail(label, `duplicate Core ID: ${id}`);
        }
        seen.add(id);

        const record = registryById.get(id);
        if (!record) {
            fail(label, `Core ID does not resolve: ${id}`);
        } else if (record.isActive !== true) {
            fail(label, `Core ID resolves to an inactive record: ${id}`);
        }
    }
}

function validateNoForbiddenFields(records, fields, label) {
    for (const record of records) {
        if (!isPlainObject(record)) {
            continue;
        }
        for (const field of fields) {
            if (Object.prototype.hasOwnProperty.call(record, field)) {
                fail(label, `${record.id || "<unknown>"}: forbidden duplicate/speculative field present: ${field}`);
            }
        }
    }
}

function validateControlledArray(values, allowed, label) {
    if (!Array.isArray(values)) {
        fail(label, "expected an array");
        return;
    }
    const seen = new Set();
    for (const value of values) {
        if (!allowed.has(value)) {
            fail(label, `unapproved value: ${JSON.stringify(value)}`);
        }
        if (seen.has(value)) {
            fail(label, `duplicate value: ${JSON.stringify(value)}`);
        }
        seen.add(value);
    }
}

function validateCanonicalData() {
    recordCheck("Canonical registries, controlled values, Core registries, and relationships");

    const fishBindings = loadBindings("data/fish.js", ["FISH_DATA"]);
    const rigBindings = loadBindings("data/rigs.js", ["RIG_DATA", "CORE_RIG_IDS"]);
    const knotBindings = loadBindings("data/knots.js", ["KNOT_DATA", "CORE_KNOT_IDS"]);
    const tackleBindings = loadBindings("data/tackle.js", ["TACKLE_DATA"]);
    const guidanceBindings = loadBindings("data/knot-guidance.js", ["KNOT_TASK_DEFINITIONS"]);

    const fish = requireArray(fishBindings.FISH_DATA, "Fish registry");
    const rigs = requireArray(rigBindings.RIG_DATA, "Rig registry");
    const knots = requireArray(knotBindings.KNOT_DATA, "Knot registry");
    const tackle = requireArray(tackleBindings.TACKLE_DATA, "Tackle registry");
    const knotTasks = requireArray(guidanceBindings.KNOT_TASK_DEFINITIONS, "Knot task guidance");

    validateCanonicalRecords(fish, "Fish registry");
    validateCanonicalRecords(rigs, "Rig registry");
    validateCanonicalRecords(knots, "Knot registry");
    validateCanonicalRecords(tackle, "Tackle registry");

    validateCoreRegistry(rigBindings.CORE_RIG_IDS, rigs, "Core Rig registry");
    validateCoreRegistry(knotBindings.CORE_KNOT_IDS, knots, "Core Knot registry");

    validateNoForbiddenFields(fish, ["imageIds", "mediaIds"], "Fish ownership");
    validateNoForbiddenFields(
        rigs,
        ["imageIds", "mediaIds", "techniqueIds", "targetFishIds", "isCore", "coreOrder"],
        "Rig ownership"
    );
    validateNoForbiddenFields(tackle, ["mediaIds", "rigIds"], "Tackle ownership");
    validateNoForbiddenFields(
        knots,
        [
            "relatedRigIds",
            "relatedTechniqueIds",
            "imageIds",
            "mediaIds",
            "animationIds",
            "isCore",
            "coreOrder",
            "stepCount",
            "strengthRating"
        ],
        "Knot ownership"
    );

    const rigDifficultyValues = new Set([
        "Beginner",
        "Beginner+",
        "Intermediate",
        "Intermediate+",
        "Advanced",
        "Expert"
    ]);
    const knotDifficultyValues = new Set(["Beginner", "Intermediate", "Advanced"]);
    const knotConnectionTypes = new Set([
        "reel-spool-attachment",
        "terminal-attachment",
        "line-to-line",
        "terminal-loop",
        "dropper-loop"
    ]);
    const knotLineTypes = new Set(["monofilament", "fluorocarbon", "braid"]);

    const rigById = indexById(rigs);
    const knotById = indexById(knots);
    const tackleById = indexById(tackle);

    for (const rig of rigs) {
        if (!isPlainObject(rig)) {
            continue;
        }

        if (!rigDifficultyValues.has(rig.difficulty)) {
            fail("Rig controlled values", `${rig.id}: unapproved difficulty ${JSON.stringify(rig.difficulty)}`);
        }

        const requirements = requireArray(rig.componentRequirements, `Rig ${rig.id} componentRequirements`);
        for (const requirement of requirements) {
            if (!isPlainObject(requirement) || typeof requirement.tackleId !== "string") {
                fail("Rig → Tackle", `${rig.id}: component requirement is missing tackleId`);
                continue;
            }
            const target = tackleById.get(requirement.tackleId);
            if (!target) {
                fail("Rig → Tackle", `${rig.id}: unresolved tackleId ${requirement.tackleId}`);
            } else if (rig.isActive === true && target.isActive !== true) {
                fail("Rig → Tackle", `${rig.id}: active Rig references inactive Tackle ${requirement.tackleId}`);
            }
        }

        const applications = requireArray(rig.knotApplications, `Rig ${rig.id} knotApplications`);
        for (const application of applications) {
            if (!isPlainObject(application)) {
                fail("Rig → Knot", `${rig.id}: knot application is not an object`);
                continue;
            }

            const expectedFields = ["connectionType", "label", "notes", "recommendedKnotIds"];
            const actualFields = Object.keys(application).sort();
            if (JSON.stringify(actualFields) !== JSON.stringify(expectedFields)) {
                fail(
                    "Rig → Knot",
                    `${rig.id}: knot application fields must be exactly label, connectionType, recommendedKnotIds, notes; found ${actualFields.join(", ")}`
                );
            }

            if (!knotConnectionTypes.has(application.connectionType)) {
                fail(
                    "Rig → Knot",
                    `${rig.id}: unapproved connectionType ${JSON.stringify(application.connectionType)}`
                );
            }

            const recommendedIds = requireArray(
                application.recommendedKnotIds,
                `Rig ${rig.id} recommendedKnotIds`
            );
            if (recommendedIds.length === 0) {
                fail("Rig → Knot", `${rig.id}: knot application has no recommended Knot IDs`);
            }

            const seenRecommended = new Set();
            for (const knotId of recommendedIds) {
                if (seenRecommended.has(knotId)) {
                    fail("Rig → Knot", `${rig.id}: duplicate recommended Knot ID ${knotId}`);
                }
                seenRecommended.add(knotId);

                const knot = knotById.get(knotId);
                if (!knot) {
                    fail("Rig → Knot", `${rig.id}: unresolved recommended Knot ID ${knotId}`);
                    continue;
                }
                if (rig.isActive === true && knot.isActive !== true) {
                    fail("Rig → Knot", `${rig.id}: active Rig references inactive Knot ${knotId}`);
                }
                if (
                    typeof application.connectionType === "string" &&
                    Array.isArray(knot.connectionTypes) &&
                    !knot.connectionTypes.includes(application.connectionType)
                ) {
                    fail(
                        "Rig → Knot",
                        `${rig.id}: ${knotId} does not declare connection type ${application.connectionType}`
                    );
                }
            }
        }

        const variationIds = requireArray(rig.variationIds, `Rig ${rig.id} variationIds`);
        const seenVariations = new Set();
        for (const variationId of variationIds) {
            if (variationId === rig.id) {
                fail("Rig variations", `${rig.id}: Rig cannot reference itself as a variation`);
            }
            if (seenVariations.has(variationId)) {
                fail("Rig variations", `${rig.id}: duplicate variation ID ${variationId}`);
            }
            seenVariations.add(variationId);

            const variation = rigById.get(variationId);
            if (!variation) {
                fail("Rig variations", `${rig.id}: unresolved variation ID ${variationId}`);
            } else if (rig.isActive === true && variation.isActive !== true) {
                fail("Rig variations", `${rig.id}: active Rig references inactive variation ${variationId}`);
            }
        }
    }

    for (const knot of knots) {
        if (!isPlainObject(knot)) {
            continue;
        }
        if (!knotDifficultyValues.has(knot.difficulty)) {
            fail("Knot controlled values", `${knot.id}: unapproved difficulty ${JSON.stringify(knot.difficulty)}`);
        }
        validateControlledArray(
            knot.connectionTypes,
            knotConnectionTypes,
            `Knot ${knot.id} connectionTypes`
        );
        validateControlledArray(
            knot.compatibleLineTypes,
            knotLineTypes,
            `Knot ${knot.id} compatibleLineTypes`
        );
    }

    for (const item of tackle) {
        if (!isPlainObject(item)) {
            continue;
        }
        const related = requireArray(item.relatedTackleIds, `Tackle ${item.id} relatedTackleIds`);
        const seenRelated = new Set();
        for (const relatedId of related) {
            if (relatedId === item.id) {
                fail("Tackle relationships", `${item.id}: cannot relate to itself`);
            }
            if (seenRelated.has(relatedId)) {
                fail("Tackle relationships", `${item.id}: duplicate related Tackle ID ${relatedId}`);
            }
            seenRelated.add(relatedId);

            const target = tackleById.get(relatedId);
            if (!target) {
                fail("Tackle relationships", `${item.id}: unresolved related Tackle ID ${relatedId}`);
            }
        }
    }

    validateUniqueIds(knotTasks, "Knot task guidance");
    for (const task of knotTasks) {
        if (!isPlainObject(task)) {
            continue;
        }
        const ids = requireArray(task.knotIds, `Knot task ${task.id} knotIds`);
        if (ids.length === 0) {
            fail("Knot task guidance", `${task.id}: task has no Knot IDs`);
        }
        const seen = new Set();
        for (const knotId of ids) {
            if (seen.has(knotId)) {
                fail("Knot task guidance", `${task.id}: duplicate Knot ID ${knotId}`);
            }
            seen.add(knotId);
            const knot = knotById.get(knotId);
            if (!knot) {
                fail("Knot task guidance", `${task.id}: unresolved Knot ID ${knotId}`);
            } else if (knot.isActive !== true) {
                fail("Knot task guidance", `${task.id}: references inactive Knot ${knotId}`);
            }
        }
    }

    return { fish, rigs, knots, tackle };
}

function validateOptionArray(records, label) {
    const array = requireArray(records, label);
    validateUniqueIds(array, label);
    return new Set(
        array
            .filter((item) => isPlainObject(item) && typeof item.id === "string")
            .map((item) => item.id)
    );
}

function validateObjectRegistry(registry, label) {
    if (!isPlainObject(registry)) {
        fail(label, "expected an object registry");
        return new Set();
    }

    const ids = new Set();
    for (const [key, value] of Object.entries(registry)) {
        validateId(key, label);
        ids.add(key);
        if (isPlainObject(value) && Object.prototype.hasOwnProperty.call(value, "id") && value.id !== key) {
            fail(label, `registry key ${key} does not match record id ${JSON.stringify(value.id)}`);
        }
    }
    return ids;
}

function validateReelGuidance() {
    recordCheck("Reel & Line Setup Decision Knowledge references");

    const names = [
        "REEL_SETUP_STEP_IDS",
        "REEL_SETUP_ENTRY_OPTIONS",
        "REEL_TYPE_OPTIONS",
        "REEL_LINE_TYPE_GUIDANCE",
        "REEL_LINE_GUIDANCE_ACTIONS",
        "REEL_BEGINNER_LINE_RECOMMENDATIONS",
        "REEL_LINE_COMPATIBILITY_NOTES",
        "REEL_TARGET_FISH_PROFILES",
        "REEL_BACKING_CHOICES",
        "REEL_SPOOLING_GUIDANCE",
        "REEL_LEADER_CHOICES",
        "REEL_LEADER_DECISION_GUIDANCE",
        "REEL_LEADER_SETUP_GUIDANCE",
        "REEL_READY_CHECK_GUIDANCE",
        "REEL_EQUIPMENT_GUIDANCE"
    ];
    const bindings = loadBindings("data/reel-guidance.js", names);

    const entryIds = validateOptionArray(bindings.REEL_SETUP_ENTRY_OPTIONS, "Reel setup entry options");
    const reelTypeIds = validateOptionArray(bindings.REEL_TYPE_OPTIONS, "Reel type options");
    const actionIds = validateOptionArray(bindings.REEL_LINE_GUIDANCE_ACTIONS, "Reel line guidance actions");
    const targetIds = validateOptionArray(bindings.REEL_TARGET_FISH_PROFILES, "Reel target profiles");
    const lineTypeIds = validateObjectRegistry(bindings.REEL_LINE_TYPE_GUIDANCE, "Reel line types");
    const backingIds = validateObjectRegistry(bindings.REEL_BACKING_CHOICES, "Reel backing choices");
    const leaderIds = validateObjectRegistry(bindings.REEL_LEADER_CHOICES, "Reel leader choices");

    void entryIds;
    void actionIds;
    void targetIds;
    void backingIds;

    if (!isPlainObject(bindings.REEL_SETUP_STEP_IDS)) {
        fail("Reel setup steps", "expected REEL_SETUP_STEP_IDS object");
    } else {
        const seenSteps = new Set();
        for (const [key, value] of Object.entries(bindings.REEL_SETUP_STEP_IDS)) {
            if (!validateId(value, "Reel setup steps")) {
                continue;
            }
            if (seenSteps.has(value)) {
                fail("Reel setup steps", `duplicate step ID ${value}`);
            }
            seenSteps.add(value);
            if (!/^[A-Z0-9_]+$/.test(key)) {
                fail("Reel setup steps", `unexpected step key format ${key}`);
            }
        }
    }

    if (isPlainObject(bindings.REEL_BEGINNER_LINE_RECOMMENDATIONS)) {
        for (const [reelTypeId, recommendation] of Object.entries(bindings.REEL_BEGINNER_LINE_RECOMMENDATIONS)) {
            if (!reelTypeIds.has(reelTypeId)) {
                fail("Reel line recommendations", `unknown reel type key ${reelTypeId}`);
            }
            if (!isPlainObject(recommendation) || !lineTypeIds.has(recommendation.lineTypeId)) {
                fail(
                    "Reel line recommendations",
                    `${reelTypeId}: unresolved lineTypeId ${JSON.stringify(recommendation && recommendation.lineTypeId)}`
                );
            }
        }
    } else {
        fail("Reel line recommendations", "expected recommendation registry");
    }

    if (isPlainObject(bindings.REEL_LINE_COMPATIBILITY_NOTES)) {
        for (const [reelTypeId, notes] of Object.entries(bindings.REEL_LINE_COMPATIBILITY_NOTES)) {
            if (!reelTypeIds.has(reelTypeId)) {
                fail("Reel compatibility notes", `unknown reel type key ${reelTypeId}`);
            }
            if (!isPlainObject(notes)) {
                fail("Reel compatibility notes", `${reelTypeId}: expected line-type note object`);
                continue;
            }
            for (const lineTypeId of Object.keys(notes)) {
                if (!lineTypeIds.has(lineTypeId)) {
                    fail("Reel compatibility notes", `${reelTypeId}: unknown line type ${lineTypeId}`);
                }
            }
        }
    } else {
        fail("Reel compatibility notes", "expected compatibility registry");
    }

    if (isPlainObject(bindings.REEL_SPOOLING_GUIDANCE)) {
        for (const reelTypeId of Object.keys(bindings.REEL_SPOOLING_GUIDANCE)) {
            if (!reelTypeIds.has(reelTypeId)) {
                fail("Reel spooling guidance", `unknown reel type key ${reelTypeId}`);
            }
        }
    } else {
        fail("Reel spooling guidance", "expected spooling registry");
    }

    if (isPlainObject(bindings.REEL_LEADER_DECISION_GUIDANCE)) {
        for (const lineTypeId of Object.keys(bindings.REEL_LEADER_DECISION_GUIDANCE)) {
            if (!lineTypeIds.has(lineTypeId)) {
                fail("Reel leader guidance", `unknown line type key ${lineTypeId}`);
            }
        }
    } else {
        fail("Reel leader guidance", "expected leader-decision registry");
    }

    if (isPlainObject(bindings.REEL_LEADER_SETUP_GUIDANCE)) {
        for (const leaderId of Object.keys(bindings.REEL_LEADER_SETUP_GUIDANCE)) {
            if (!leaderIds.has(leaderId)) {
                fail("Reel leader setup", `unknown leader choice key ${leaderId}`);
            }
        }
    } else {
        fail("Reel leader setup", "expected leader-setup registry");
    }
}

function validateMedia(canonicalData) {
    recordCheck("Media ownership, local assets, and orphan image detection");

    const bindings = loadBindings("data/media.js", ["MEDIA_DATA"]);
    const media = requireArray(bindings.MEDIA_DATA, "Media registry");
    validateUniqueIds(media, "Media registry");

    const ownerRegistries = {
        fish: indexById(canonicalData.fish),
        rig: indexById(canonicalData.rigs),
        knot: indexById(canonicalData.knots),
        tackle: indexById(canonicalData.tackle)
    };

    const referencedLocalFiles = new Set();

    for (const item of media) {
        if (!isPlainObject(item)) {
            continue;
        }
        if (typeof item.isActive !== "boolean") {
            fail("Media registry", `${item.id || "<unknown>"}: isActive must be Boolean`);
        }
        if (typeof item.ownerType !== "string" || !Object.prototype.hasOwnProperty.call(ownerRegistries, item.ownerType)) {
            fail("Media ownership", `${item.id}: unsupported ownerType ${JSON.stringify(item.ownerType)}`);
        } else if (typeof item.ownerId !== "string") {
            fail("Media ownership", `${item.id}: ownerId must be text`);
        } else {
            const owner = ownerRegistries[item.ownerType].get(item.ownerId);
            if (!owner) {
                fail("Media ownership", `${item.id}: unresolved ${item.ownerType} ownerId ${item.ownerId}`);
            } else if (item.isActive === true && owner.isActive !== true) {
                fail("Media ownership", `${item.id}: active Media references inactive ${item.ownerType} ${item.ownerId}`);
            }
        }

        if (typeof item.file === "string" && item.file.trim() !== "") {
            const localFile = normalizeLocalReference(item.file);
            if (!localFile) {
                fail("Local media", `${item.id}: file must be a repository-local path`);
            } else {
                referencedLocalFiles.add(localFile);
                if (!fileExists(localFile)) {
                    fail("Local media", `${item.id}: missing local media file ${localFile}`);
                }
            }
        }
    }

    const allowlistedImageFiles = new Set(["images/rigs/.gitkeep"]);
    const trackedImageFiles = listTrackedRepositoryFiles().filter((repoPath) => repoPath.startsWith("images/"));
    for (const imagePath of trackedImageFiles) {
        if (allowlistedImageFiles.has(imagePath)) {
            continue;
        }
        if (!referencedLocalFiles.has(imagePath)) {
            fail("Orphan images", `committed image-area file is not referenced by MEDIA_DATA: ${imagePath}`);
        }
    }
}

function validateRepositoryHygiene() {
    recordCheck("Repository hygiene and Section 11 ignore safeguards");

    const trackedFiles = listTrackedRepositoryFiles();

    if (trackedFiles.some((repoPath) => repoPath.startsWith("docs/docs/"))) {
        fail("Repository hygiene", "unexpected tracked duplicate documentation subtree exists: docs/docs/");
    }

    for (const repoPath of trackedFiles) {
        const lower = repoPath.toLowerCase();
        const basename = path.posix.basename(repoPath);
        const parts = repoPath.split("/");

        if (lower.endsWith(".tmp") || lower.endsWith(".bak")) {
            fail("Repository hygiene", `committed temporary/backup artifact: ${repoPath}`);
        }
        if (basename === "Thumbs.db" || basename === "Desktop.ini") {
            fail("Repository hygiene", `committed Windows metadata artifact: ${repoPath}`);
        }
        if (/\.py[cod]$/i.test(repoPath) || parts.includes("__pycache__")) {
            fail("Repository hygiene", `committed Python cache/bytecode artifact: ${repoPath}`);
        }
    }

    const gitignore = readText(".gitignore");
    if (gitignore !== null) {
        const rules = new Set(
            gitignore
                .split(/\r?\n/)
                .map((line) => line.trim())
                .filter((line) => line !== "" && !line.startsWith("#"))
        );
        for (const requiredRule of ["*.tmp", "*.bak", "Thumbs.db", "Desktop.ini", "__pycache__/", "*.py[cod]"]) {
            if (!rules.has(requiredRule)) {
                fail(".gitignore", `missing approved Section 11 rule: ${requiredRule}`);
            }
        }
    }
}


function validateDocumentationGovernance() {
    recordCheck("Documentation governance roles and lifecycle markers");

    const requiredDocs = [
        "docs/PROJECT.md",
        "docs/ARCHITECTURE.md",
        "docs/DECISIONS.md",
        "docs/DEVELOPMENT_WORKFLOW.md",
        "docs/ROADMAP.md",
        "docs/HANDOFF.md",
        "docs/ACTIVE-CHANGE-LEDGER.md",
        "docs/CHANGELOG.md",
        "docs/MILESTONES.md",
        "docs/SPECIFICATION.md"
    ];

    const docs = new Map();
    for (const relativePath of requiredDocs) {
        const text = readText(relativePath);
        if (text !== null) {
            docs.set(relativePath, text);
        }
    }

    const requiredMarkers = new Map([
        [
            "docs/HANDOFF.md",
            [
                "**Role:** Compact formal GitHub recovery/continuation entrypoint",
                "`ACTIVE-CHANGE-LEDGER.md`",
                "Freshwater Fishing Companion — Working State"
            ]
        ],
        [
            "docs/ACTIVE-CHANGE-LEDGER.md",
            [
                "**Role:** Single formal GitHub owner of material non-closed carry-forward items",
                "# Status Vocabulary",
                "# Maintenance Rules"
            ]
        ],
        [
            "docs/ROADMAP.md",
            [
                "**Role:** Product milestone order and future direction",
                "does **not** own exact active Repository Audit/workstream status"
            ]
        ],
        [
            "docs/MILESTONES.md",
            [
                "**Maintenance Status:** FROZEN HISTORICAL RECORD",
                "It is **not** a current-state owner"
            ]
        ],
        [
            "docs/CHANGELOG.md",
            [
                "**Role:** Curated meaningful landed-change history",
                "It is **not** a current project-status dashboard"
            ]
        ],
        [
            "docs/SPECIFICATION.md",
            [
                "**Document Status:** Superseded",
                "**Maintenance Status:** Retired from active maintenance",
                "`SPECIFICATION.md` is no longer an active governing source"
            ]
        ]
    ]);

    for (const [relativePath, markers] of requiredMarkers.entries()) {
        const text = docs.get(relativePath);
        if (text === undefined) {
            continue;
        }
        for (const marker of markers) {
            if (!text.includes(marker)) {
                fail("Documentation governance", `${relativePath}: missing required role/lifecycle marker: ${marker}`);
            }
        }
    }

    const staleCurrentStatePatterns = [
        /^##\s+Current Repository State\b/im,
        /^\*\*Implementation Status:\*\*\s*Repository Audit Section\s+\d+\b/im,
        /^\*\*Current Audit Section:\*\*\s*\d+\b/im
    ];

    for (const relativePath of ["docs/ROADMAP.md", "docs/MILESTONES.md", "docs/CHANGELOG.md"]) {
        const text = docs.get(relativePath);
        if (text === undefined) {
            continue;
        }
        for (const pattern of staleCurrentStatePatterns) {
            if (pattern.test(text)) {
                fail(
                    "Documentation governance",
                    `${relativePath}: contains a prohibited exact-current-state/audit-status structure`
                );
            }
        }
    }
}

function main() {
    console.log("REPOSITORY INTEGRITY VALIDATION");
    console.log(`Root: ${ROOT}`);

    validateEntrypoint();
    const canonicalData = validateCanonicalData();
    validateReelGuidance();
    validateMedia(canonicalData);
    validateRepositoryHygiene();
    validateDocumentationGovernance();

    if (FAILURES.length > 0) {
        console.error("\nREPOSITORY INTEGRITY: FAIL");
        for (const failure of FAILURES) {
            console.error(`- ${failure}`);
        }
        console.error(`\n${FAILURES.length} defect(s) detected across ${CHECKS.length} validation groups.`);
        return 1;
    }

    console.log("\nREPOSITORY INTEGRITY: PASS");
    console.log(`- ${CHECKS.length} validation groups passed`);
    console.log("- no repository content was modified");
    return 0;
}

process.exitCode = main();
