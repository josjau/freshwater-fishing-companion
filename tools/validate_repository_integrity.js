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


function validateExactFieldOrder(record, expectedFields, label) {
    if (!isPlainObject(record)) return;
    const actualFields = Object.keys(record);
    if (JSON.stringify(actualFields) !== JSON.stringify(expectedFields)) {
        fail(
            label,
            `${record.id || record.fishId || "<unknown>"}: fields must be exactly ${expectedFields.join(", ")} in canonical order; found ${actualFields.join(", ")}`
        );
    }
}

function validateTextArray(values, label, allowEmpty = true) {
    const items = requireArray(values, label);
    if (!allowEmpty && items.length === 0) {
        fail(label, "must contain at least one value");
    }
    const seen = new Set();
    for (const value of items) {
        if (typeof value !== "string" || value.trim() === "") {
            fail(label, `contains invalid text value ${JSON.stringify(value)}`);
            continue;
        }
        const normalized = value.trim().toLocaleLowerCase();
        if (seen.has(normalized)) {
            fail(label, `duplicate value ${JSON.stringify(value)}`);
        }
        seen.add(normalized);
    }
    return items;
}

function expectedFishIdentificationId(fishIds) {
    return [...fishIds].sort().join("-vs-");
}

function isFishTargetProductionRecord(record) {
    return isPlainObject(record) &&
        typeof record.categoryId === "string" &&
        Array.isArray(record.aliases) &&
        Array.isArray(record.identificationTraits);
}

function validateFishProductionData(fish, categories, relationships, guidance, rigs, legacyCategoryMap) {
    const expectedCategoryIds = [
        "bass",
        "catfish",
        "sunfish-crappie",
        "trout",
        "walleye-sauger",
        "carp",
        "drum",
        "gar",
        "paddlefish"
    ];
    const categoryFields = ["id", "name", "summary"];
    const fishFields = [
        "id",
        "name",
        "summary",
        "createdVersion",
        "lastModifiedVersion",
        "isActive",
        "scientificName",
        "categoryId",
        "family",
        "aliases",
        "identificationTraits",
        "habitatTags",
        "waterbodyTypes"
    ];
    const legacyFishFields = [
        "id",
        "name",
        "summary",
        "createdVersion",
        "lastModifiedVersion",
        "isActive",
        "scientificName",
        "category",
        "family",
        "habitatTags",
        "waterbodyTypes"
    ];
    const relationshipFields = [
        "id",
        "fishIds",
        "createdVersion",
        "lastModifiedVersion",
        "isActive",
        "distinctions"
    ];
    const distinctionFields = ["fishId", "text"];
    const guidanceFields = [
        "fishId",
        "createdVersion",
        "lastModifiedVersion",
        "isActive",
        "rigRecommendations"
    ];
    const recommendationFields = ["rigId", "priority", "reason"];
    const configuredRecommendationFields = ["rigId", "lureBaitId", "priority", "reason"];
    const habitatValues = new Set([
        "Grass",
        "Timber",
        "Brush",
        "Rock",
        "Current",
        "Open Water",
        "Shallow Water",
        "Deep Water",
        "Cold Water",
        "Mud",
        "Channel"
    ]);
    const waterbodyValues = new Set(["Pond", "Lake", "Reservoir", "River", "Creek"]);
    const guidancePriorities = new Set(["Primary", "Alternative"]);

    const categoryIds = validateUniqueIds(categories, "Fish category registry");
    const actualCategoryIds = categories.map((category) => category?.id);
    if (JSON.stringify(actualCategoryIds) !== JSON.stringify(expectedCategoryIds)) {
        fail(
            "Fish category registry",
            `category order/IDs must be ${expectedCategoryIds.join(", ")}; found ${actualCategoryIds.join(", ")}`
        );
    }
    for (const category of categories) {
        if (!isPlainObject(category)) continue;
        validateExactFieldOrder(category, categoryFields, "Fish category registry");
        for (const field of ["name", "summary"]) {
            if (typeof category[field] !== "string" || category[field].trim() === "") {
                fail("Fish category registry", `${category.id}: ${field} must be non-empty text`);
            }
        }
        if (Object.prototype.hasOwnProperty.call(category, "isActive")) {
            fail("Fish category registry", `${category.id}: category must not own isActive`);
        }
    }

    const fishById = indexById(fish);
    const forbiddenFishFields = [
        "regionTags",
        "activityPeriods",
        "seasonalPatterns",
        "recommendedRigIds",
        "recommendedLureIds",
        "regulationResourceIds",
        "imageIds",
        "mediaIds",
        "similarFishIds",
        "searchKeywords",
        "isV1",
        "isReady",
        "releaseStatus",
        "publicationStatus",
        "isOklahomaFish",
        "isKansasFish",
        "isMissouriFish",
        "isArkansasFish"
    ];
    validateNoForbiddenFields(fish, forbiddenFishFields, "Fish production ownership");

    for (const record of fish) {
        if (!isPlainObject(record)) continue;
        const isTargetRecord = isFishTargetProductionRecord(record);
        if (isTargetRecord) {
            validateExactFieldOrder(record, fishFields, "Fish production schema");
            if (Object.prototype.hasOwnProperty.call(record, "category")) {
                fail("Fish production schema", `${record.id}: target Fish must not retain legacy category`);
            }
            if (typeof record.categoryId !== "string" || !categoryIds.has(record.categoryId)) {
                fail("Fish category relationship", `${record.id}: unresolved categoryId ${JSON.stringify(record.categoryId)}`);
            }
            validateTextArray(record.aliases, `Fish ${record.id} aliases`);
            validateTextArray(
                record.identificationTraits,
                `Fish ${record.id} identificationTraits`,
                record.isActive !== true
            );
        } else {
            validateExactFieldOrder(record, legacyFishFields, "Fish transitional legacy schema");
            if (typeof record.category !== "string" || !legacyCategoryMap?.[record.category]) {
                fail("Fish transitional category", `${record.id}: unresolved legacy category ${JSON.stringify(record.category)}`);
            } else if (!categoryIds.has(legacyCategoryMap[record.category])) {
                fail("Fish transitional category", `${record.id}: legacy category maps to unresolved categoryId ${legacyCategoryMap[record.category]}`);
            }
        }
        if (typeof record.scientificName !== "string" || record.scientificName.trim() === "") {
            fail("Fish production schema", `${record.id}: scientificName must be non-empty text`);
        }
        if (typeof record.family !== "string" || record.family.trim() === "") {
            fail("Fish production schema", `${record.id}: family must be non-empty text`);
        }
        validateControlledArray(record.habitatTags, habitatValues, `Fish ${record.id} habitatTags`);
        validateControlledArray(record.waterbodyTypes, waterbodyValues, `Fish ${record.id} waterbodyTypes`);
    }

    validateUniqueIds(relationships, "Fish identification relationships");
    const pairKeys = new Set();
    for (const relationship of relationships) {
        if (!isPlainObject(relationship)) continue;
        validateExactFieldOrder(relationship, relationshipFields, "Fish identification relationships");
        const ids = requireArray(relationship.fishIds, `Fish identification ${relationship.id} fishIds`);
        if (ids.length !== 2) {
            fail("Fish identification relationships", `${relationship.id}: fishIds must contain exactly two Fish IDs`);
            continue;
        }
        if (ids[0] === ids[1]) {
            fail("Fish identification relationships", `${relationship.id}: self-pairs are not allowed`);
        }
        const sorted = [...ids].sort();
        if (JSON.stringify(ids) !== JSON.stringify(sorted)) {
            fail("Fish identification relationships", `${relationship.id}: fishIds are not in canonical lexicographic order`);
        }
        const expectedId = expectedFishIdentificationId(ids);
        if (relationship.id !== expectedId) {
            fail("Fish identification relationships", `${relationship.id}: expected deterministic ID ${expectedId}`);
        }
        const pairKey = sorted.join("|");
        if (pairKeys.has(pairKey)) {
            fail("Fish identification relationships", `${relationship.id}: duplicate unordered Fish pair`);
        }
        pairKeys.add(pairKey);

        for (const fishId of ids) {
            const participant = fishById.get(fishId);
            if (!participant) {
                fail("Fish identification relationships", `${relationship.id}: unresolved Fish ID ${fishId}`);
            } else if (relationship.isActive === true && participant.isActive !== true) {
                fail("Fish identification relationships", `${relationship.id}: active relationship references inactive Fish ${fishId}`);
            }
        }

        const distinctions = requireArray(
            relationship.distinctions,
            `Fish identification ${relationship.id} distinctions`
        );
        const distinctionCounts = new Map(ids.map((fishId) => [fishId, 0]));
        for (const distinction of distinctions) {
            if (!isPlainObject(distinction)) {
                fail("Fish identification relationships", `${relationship.id}: distinction is not an object`);
                continue;
            }
            validateExactFieldOrder(distinction, distinctionFields, `Fish identification ${relationship.id} distinction`);
            if (!ids.includes(distinction.fishId)) {
                fail("Fish identification relationships", `${relationship.id}: distinction references nonparticipant ${distinction.fishId}`);
            } else {
                distinctionCounts.set(distinction.fishId, distinctionCounts.get(distinction.fishId) + 1);
            }
            if (typeof distinction.text !== "string" || distinction.text.trim() === "") {
                fail("Fish identification relationships", `${relationship.id}: distinction text must be non-empty`);
            }
        }
        for (const fishId of ids) {
            if ((distinctionCounts.get(fishId) ?? 0) === 0) {
                fail("Fish identification relationships", `${relationship.id}: no distinction supplied for ${fishId}`);
            }
        }
    }

    const rigById = indexById(rigs);
    const guidanceFishIds = new Set();
    for (const record of guidance) {
        if (!isPlainObject(record)) {
            fail("Fish-to-Rig guidance", "guidance registry contains a non-object record");
            continue;
        }
        validateExactFieldOrder(record, guidanceFields, "Fish-to-Rig guidance");
        if (typeof record.fishId !== "string" || !fishById.has(record.fishId)) {
            fail("Fish-to-Rig guidance", `unresolved fishId ${JSON.stringify(record.fishId)}`);
        }
        if (guidanceFishIds.has(record.fishId)) {
            fail("Fish-to-Rig guidance", `duplicate guidance record for ${record.fishId}`);
        }
        guidanceFishIds.add(record.fishId);
        const fishRecord = fishById.get(record.fishId);
        if (record.isActive === true && fishRecord?.isActive !== true) {
            fail("Fish-to-Rig guidance", `${record.fishId}: active guidance references inactive Fish`);
        }
        if (typeof record.isActive !== "boolean") {
            fail("Fish-to-Rig guidance", `${record.fishId}: isActive must be Boolean`);
        }

        const recommendations = requireArray(
            record.rigRecommendations,
            `Fish-to-Rig guidance ${record.fishId} recommendations`
        );
        if (recommendations.length === 0) {
            fail("Fish-to-Rig guidance", `${record.fishId}: empty guidance record is not allowed`);
        }
        const seenRigIds = new Set();
        let primaryCount = 0;
        let alternativeCount = 0;
        for (const recommendation of recommendations) {
            if (!isPlainObject(recommendation)) {
                fail("Fish-to-Rig guidance", `${record.fishId}: recommendation is not an object`);
                continue;
            }
            const recommendationShape = Object.prototype.hasOwnProperty.call(recommendation, "lureBaitId")
                ? configuredRecommendationFields
                : recommendationFields;
            validateExactFieldOrder(recommendation, recommendationShape, `Fish-to-Rig guidance ${record.fishId}`);
            if (!guidancePriorities.has(recommendation.priority)) {
                fail("Fish-to-Rig guidance", `${record.fishId}: invalid priority ${JSON.stringify(recommendation.priority)}`);
            }
            if (recommendation.priority === "Primary") primaryCount += 1;
            if (recommendation.priority === "Alternative") alternativeCount += 1;
            if (typeof recommendation.reason !== "string" || recommendation.reason.trim() === "") {
                fail("Fish-to-Rig guidance", `${record.fishId}: recommendation reason must be non-empty`);
            }
            if (seenRigIds.has(recommendation.rigId)) {
                fail("Fish-to-Rig guidance", `${record.fishId}: duplicate Rig recommendation ${recommendation.rigId}`);
            }
            seenRigIds.add(recommendation.rigId);
            const rig = rigById.get(recommendation.rigId);
            if (!rig) {
                fail("Fish-to-Rig guidance", `${record.fishId}: unresolved Rig ${recommendation.rigId}`);
            } else if (record.isActive === true && rig.isActive !== true) {
                fail("Fish-to-Rig guidance", `${record.fishId}: active guidance references inactive Rig ${recommendation.rigId}`);
            }
        }
        if (record.isActive === true && (primaryCount < 1 || primaryCount > 3)) {
            fail("Fish-to-Rig guidance", `${record.fishId}: active guidance must have 1-3 Primary recommendations`);
        }
        if (alternativeCount > 3) {
            fail("Fish-to-Rig guidance", `${record.fishId}: guidance exceeds 3 Alternative recommendations`);
        }
    }
}

function getMarkdownHeadingSection(text, heading) {
    const marker = `## ${heading}`;
    const start = text.indexOf(marker);
    if (start < 0) return null;
    const bodyStart = start + marker.length;
    const nextHeading = text.indexOf("\n## ", bodyStart);
    return text.slice(bodyStart, nextHeading < 0 ? text.length : nextHeading);
}

function collectEvidenceSourceIds(section, label) {
    if (typeof section !== "string") return [];
    const lines = section.split(/\r?\n/);
    const start = lines.findIndex((line) => line.trim() === label);
    if (start < 0) return [];
    const ids = [];
    for (let index = start + 1; index < lines.length; index += 1) {
        const line = lines[index].trim();
        if (line === "") continue;
        if (!line.startsWith("- ")) break;
        const match = line.match(/^- ([A-Z][A-Z0-9-]+)/);
        if (match) ids.push(match[1]);
    }
    return ids;
}

function validateFishEvidence(fish, relationships) {
    recordCheck("Fish production evidence and relationship provenance");
    const sourceText = readText("docs/FISH_REFERENCE_SOURCES.md");
    if (sourceText === null) return;

    const sourceIds = new Set(
        [...sourceText.matchAll(/^## ([A-Z][A-Z0-9-]+)\s*$/gm)].map((match) => match[1])
    );

    const authoredFish = fish.filter(
        (record) => isPlainObject(record) && Array.isArray(record.identificationTraits) && record.identificationTraits.length > 0
    );
    for (const record of authoredFish) {
        const section = getMarkdownHeadingSection(sourceText, `${record.name} (\`${record.id}\`)`);
        if (section === null) {
            fail("Fish evidence", `${record.id}: missing per-Fish evidence section`);
            continue;
        }
        const labels = ["Regional Inclusion", "Taxonomy / Family", "Identification", "Habitat / Waterbody"];
        if (Array.isArray(record.aliases) && record.aliases.length > 0) labels.push("Aliases");
        for (const label of labels) {
            const ids = collectEvidenceSourceIds(section, label);
            if (ids.length === 0) {
                fail("Fish evidence", `${record.id}: ${label} has no source reference`);
            }
            for (const sourceId of ids) {
                if (!sourceIds.has(sourceId)) {
                    fail("Fish evidence", `${record.id}: ${label} references unknown source ID ${sourceId}`);
                }
            }
        }
    }

    for (const relationship of relationships) {
        if (!isPlainObject(relationship) || !Array.isArray(relationship.fishIds)) continue;
        const section = getMarkdownHeadingSection(sourceText, relationship.id);
        if (section === null) {
            fail("Fish relationship evidence", `${relationship.id}: missing relationship evidence section`);
            continue;
        }
        for (const fishId of relationship.fishIds) {
            const fishRecord = fish.find((record) => record.id === fishId);
            if (!fishRecord) continue;
            const label = `${fishRecord.name} distinction evidence`;
            const ids = collectEvidenceSourceIds(section, label);
            if (ids.length === 0) {
                fail("Fish relationship evidence", `${relationship.id}: ${label} has no source reference`);
            }
            for (const sourceId of ids) {
                if (!sourceIds.has(sourceId)) {
                    fail("Fish relationship evidence", `${relationship.id}: ${label} references unknown source ID ${sourceId}`);
                }
            }
        }
    }
}

function validateFishSearchHelpers(canonicalData) {
    recordCheck("Fish scoped-search helper validity");
    const bindings = loadBindings("search.js", ["FISH_SEARCH_HELPERS", "searchFishRecords"]);
    const helpers = bindings.FISH_SEARCH_HELPERS;
    const searchFishRecords = bindings.searchFishRecords;
    if (!isPlainObject(helpers) || typeof searchFishRecords !== "function") {
        fail("Fish search helpers", "FISH_SEARCH_HELPERS and searchFishRecords must be available");
        return;
    }

    const activeFish = canonicalData.fish.filter((record) => record.isActive === true);
    for (const [scopeKey, terms] of Object.entries(helpers)) {
        const eligible = scopeKey === "all"
            ? activeFish
            : activeFish.filter((record) => {
                const categoryId = record.categoryId ?? canonicalData.legacyCategoryMap?.[record.category] ?? null;
                return categoryId === scopeKey;
            });
        if (eligible.length === 0) {
            continue;
        }
        if (!Array.isArray(terms) || terms.length === 0) {
            fail("Fish search helpers", `${scopeKey}: helper scope has no curated terms`);
            continue;
        }
        for (const term of terms) {
            if (typeof term !== "string" || term.trim() === "") {
                fail("Fish search helpers", `${scopeKey}: invalid helper term ${JSON.stringify(term)}`);
                continue;
            }
            const matches = searchFishRecords(eligible, term, canonicalData.categories, canonicalData.legacyCategoryMap);
            if (!Array.isArray(matches) || matches.length === 0) {
                fail("Fish search helpers", `${scopeKey}: helper term ${JSON.stringify(term)} returns zero scoped results`);
            }
        }
    }
}


function validateRegulationsData(buildInfo, states, resources, notices) {
    recordCheck("Regulations state/resource/notice schema, provenance, relationships, and freshness");

    const stateFields = ["id", "name", "abbreviation", "agencyName", "agencyUrl", "verifiedDate", "active"];
    const resourceFields = ["id", "stateId", "section", "primaryCategory", "capabilities", "title", "description", "url", "experienceType", "status", "authorityName", "authorityUrl", "sourceRelationship", "designationUrl", "verifiedDate"];
    const noticeFields = ["id", "stateId", "title", "summary", "url", "authorityName", "authorityUrl", "sourceRelationship", "designationUrl", "createdDate", "verifiedDate", "expiresDate", "active"];
    const sections = new Set(["before-you-fish", "plan-your-trip"]);
    const categories = new Set(["regulations", "licenses-permits", "special-regulations", "where-to-fish", "public-access", "stocking", "reports-forecasts", "other-official-resource"]);
    const capabilities = new Set(["statewide-regulations", "waterbody-regulations", "species-regulations", "seasons", "size-limits", "bag-limits", "legal-methods", "special-permits", "license-information", "license-purchase", "where-to-fish", "public-access", "interactive-map", "stocking", "fishing-reports", "fishing-forecasts", "lake-information", "fish-surveys"]);
    const experienceTypes = new Set(["web-page", "pdf", "interactive-tool", "interactive-map", "external-portal"]);
    const statuses = new Set(["active", "temporarily-unavailable", "retired"]);
    const sourceRelationships = new Set(["direct", "officially-designated-external"]);
    const urlPattern = /^https:\/\//i;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const parseDate = (value, label, required = true) => {
        if ((value === null || value === "") && !required) return null;
        if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
            fail(label, `invalid date ${JSON.stringify(value)}`);
            return null;
        }
        const parsed = new Date(`${value}T00:00:00`);
        if (Number.isNaN(parsed.getTime())) {
            fail(label, `invalid date ${JSON.stringify(value)}`);
            return null;
        }
        if (parsed > today) fail(label, `verification date is in the future: ${value}`);
        return parsed;
    };

    const requireText = (value, label) => {
        if (typeof value !== "string" || value.trim() === "") fail(label, "must be non-empty text");
    };

    const requireUrl = (value, label, required = true) => {
        if ((value === null || value === "") && !required) return;
        if (typeof value !== "string" || !urlPattern.test(value)) fail(label, `must be an https URL; found ${JSON.stringify(value)}`);
    };

    if (!isPlainObject(buildInfo)) fail("Regulations build info", "expected an object");
    if (buildInfo && buildInfo.externalReferenceReviewedDate !== null) {
        parseDate(buildInfo.externalReferenceReviewedDate, "Regulations externalReferenceReviewedDate");
    }

    validateUniqueIds(states, "State registry");
    validateUniqueIds(resources, "StateResource registry");
    validateUniqueIds(notices, "StateNotice registry");
    const stateById = indexById(states);

    for (const state of states) {
        if (!isPlainObject(state)) continue;
        validateExactFieldOrder(state, stateFields, "State registry");
        requireText(state.name, `State ${state.id} name`);
        if (typeof state.abbreviation !== "string" || !/^[A-Z]{2}$/.test(state.abbreviation)) fail("State registry", `${state.id}: abbreviation must be two uppercase letters`);
        requireText(state.agencyName, `State ${state.id} agencyName`);
        requireUrl(state.agencyUrl, `State ${state.id} agencyUrl`);
        const verified = parseDate(state.verifiedDate, `State ${state.id} verifiedDate`);
        if (typeof state.active !== "boolean") fail("State registry", `${state.id}: active must be Boolean`);
        if (state.active === true && verified && (today - verified) / 86400000 > 90) fail("Regulations freshness", `${state.id}: State verification is older than 90 days`);
    }

    const resourcesByState = new Map();
    const duplicateUrls = new Map();
    for (const resource of resources) {
        if (!isPlainObject(resource)) continue;
        validateExactFieldOrder(resource, resourceFields, "StateResource registry");
        if (!stateById.has(resource.stateId)) fail("StateResource relationships", `${resource.id}: orphan stateId ${resource.stateId}`);
        if (!sections.has(resource.section)) fail("StateResource controlled values", `${resource.id}: invalid section ${JSON.stringify(resource.section)}`);
        if (!categories.has(resource.primaryCategory)) fail("StateResource controlled values", `${resource.id}: invalid primaryCategory ${JSON.stringify(resource.primaryCategory)}`);
        validateControlledArray(resource.capabilities, capabilities, `StateResource ${resource.id} capabilities`);
        if (resource.capabilities.length === 0) fail("StateResource registry", `${resource.id}: capabilities must not be empty`);
        requireText(resource.title, `StateResource ${resource.id} title`);
        requireText(resource.description, `StateResource ${resource.id} description`);
        requireUrl(resource.url, `StateResource ${resource.id} url`);
        if (!experienceTypes.has(resource.experienceType)) fail("StateResource controlled values", `${resource.id}: invalid experienceType ${JSON.stringify(resource.experienceType)}`);
        if (!statuses.has(resource.status)) fail("StateResource controlled values", `${resource.id}: invalid status ${JSON.stringify(resource.status)}`);
        if (!sourceRelationships.has(resource.sourceRelationship)) fail("StateResource controlled values", `${resource.id}: invalid sourceRelationship ${JSON.stringify(resource.sourceRelationship)}`);
        const hasAuthorityName = typeof resource.authorityName === "string" && resource.authorityName.trim() !== "";
        const hasAuthorityUrl = typeof resource.authorityUrl === "string" && resource.authorityUrl.trim() !== "";
        if (hasAuthorityName !== hasAuthorityUrl) fail("StateResource authority", `${resource.id}: authorityName and authorityUrl must be supplied together`);
        if (hasAuthorityUrl) requireUrl(resource.authorityUrl, `StateResource ${resource.id} authorityUrl`);
        if (resource.sourceRelationship === "officially-designated-external") requireUrl(resource.designationUrl, `StateResource ${resource.id} designationUrl`);
        else if (resource.designationUrl !== null) fail("StateResource provenance", `${resource.id}: direct resource must use null designationUrl`);
        const verified = parseDate(resource.verifiedDate, `StateResource ${resource.id} verifiedDate`);
        if (["active", "temporarily-unavailable"].includes(resource.status) && verified && (today - verified) / 86400000 > 90) fail("Regulations freshness", `${resource.id}: resource verification is older than 90 days`);

        if (!resourcesByState.has(resource.stateId)) resourcesByState.set(resource.stateId, []);
        resourcesByState.get(resource.stateId).push(resource);
        const duplicateKey = `${resource.stateId}|${resource.url}`;
        if (duplicateUrls.has(duplicateKey)) console.warn(`[Regulations review warning] same-state duplicate destination: ${resource.stateId} ${resource.url}`);
        duplicateUrls.set(duplicateKey, resource.id);
    }

    for (const state of states.filter((item) => item.active === true)) {
        const stateResources = (resourcesByState.get(state.id) || []).filter((resource) => resource.status !== "retired");
        const capabilitySet = new Set(stateResources.flatMap((resource) => resource.capabilities));
        if (!capabilitySet.has("statewide-regulations")) fail("Regulations required capabilities", `${state.id}: missing statewide-regulations`);
        if (!capabilitySet.has("license-information") && !capabilitySet.has("license-purchase")) fail("Regulations required capabilities", `${state.id}: missing license-information/license-purchase`);
    }

    for (const notice of notices) {
        if (!isPlainObject(notice)) continue;
        validateExactFieldOrder(notice, noticeFields, "StateNotice registry");
        if (!stateById.has(notice.stateId)) fail("StateNotice relationships", `${notice.id}: orphan stateId ${notice.stateId}`);
        requireText(notice.title, `StateNotice ${notice.id} title`);
        requireText(notice.summary, `StateNotice ${notice.id} summary`);
        requireUrl(notice.url, `StateNotice ${notice.id} url`);
        if (!sourceRelationships.has(notice.sourceRelationship)) fail("StateNotice controlled values", `${notice.id}: invalid sourceRelationship ${JSON.stringify(notice.sourceRelationship)}`);
        const hasAuthorityName = typeof notice.authorityName === "string" && notice.authorityName.trim() !== "";
        const hasAuthorityUrl = typeof notice.authorityUrl === "string" && notice.authorityUrl.trim() !== "";
        if (hasAuthorityName !== hasAuthorityUrl) fail("StateNotice authority", `${notice.id}: authorityName and authorityUrl must be supplied together`);
        if (hasAuthorityUrl) requireUrl(notice.authorityUrl, `StateNotice ${notice.id} authorityUrl`);
        if (notice.sourceRelationship === "officially-designated-external") requireUrl(notice.designationUrl, `StateNotice ${notice.id} designationUrl`);
        else if (notice.designationUrl !== null) fail("StateNotice provenance", `${notice.id}: direct notice must use null designationUrl`);
        parseDate(notice.createdDate, `StateNotice ${notice.id} createdDate`);
        const verified = parseDate(notice.verifiedDate, `StateNotice ${notice.id} verifiedDate`);
        const expires = parseDate(notice.expiresDate, `StateNotice ${notice.id} expiresDate`, false);
        if (typeof notice.active !== "boolean") fail("StateNotice registry", `${notice.id}: active must be Boolean`);
        if (notice.active === true && verified && (today - verified) / 86400000 > 30) fail("Regulations freshness", `${notice.id}: active notice verification is older than 30 days`);
        if (notice.active === true && expires && expires < today) fail("Regulations notice expiry", `${notice.id}: known expiry has passed while notice remains active`);
    }
}

function validateConditionsData(conditions, rigs) {
    const expectedByCategory = new Map([
        ["waterbody", ["pond", "lake", "reservoir", "river", "creek-stream"]],
        ["access-position", ["bank", "access-dock", "boat", "kayak"]],
        ["depth-zone", ["shallow", "mid-depth", "deep"]],
        ["cover-structure", ["open-water", "light-cover", "heavy-cover", "vegetation", "wood-brush", "rock", "cover-dock-man-made", "drop-off-channel-deep-structure"]],
        ["water-clarity", ["water-clarity-clear", "water-clarity-stained", "water-clarity-muddy"]],
        ["current", ["current-none", "current-light", "current-moderate", "current-strong"]],
        ["season", ["spring", "summer", "fall", "winter"]],
        ["light-sky", ["bright-sunny", "overcast", "low-light", "night"]]
    ]);
    const expectedIds = new Set([...expectedByCategory.values()].flat());
    const expectedFields = ["id", "name", "category", "summary", "createdVersion", "lastModifiedVersion", "isActive"];

    if (conditions.length !== 35) {
        fail("Condition registry", `expected exactly 35 records; found ${conditions.length}`);
    }

    const seenByCategory = new Map([...expectedByCategory.keys()].map((category) => [category, new Set()]));
    for (const condition of conditions) {
        if (!isPlainObject(condition)) continue;
        validateExactFieldOrder(condition, expectedFields, "Condition registry");
        if (!expectedIds.has(condition.id)) {
            fail("Condition registry", `${condition.id || "<unknown>"}: unexpected Condition ID`);
        }
        if (!expectedByCategory.has(condition.category)) {
            fail("Condition registry", `${condition.id || "<unknown>"}: unexpected category ${JSON.stringify(condition.category)}`);
            continue;
        }
        seenByCategory.get(condition.category).add(condition.id);
    }

    for (const [category, expectedCategoryIds] of expectedByCategory.entries()) {
        const actual = seenByCategory.get(category);
        const missing = expectedCategoryIds.filter((id) => !actual.has(id));
        const extras = [...actual].filter((id) => !expectedCategoryIds.includes(id));
        if (missing.length > 0) {
            fail("Condition category membership", `${category}: missing ${missing.join(", ")}`);
        }
        if (extras.length > 0) {
            fail("Condition category membership", `${category}: unexpected ${extras.join(", ")}`);
        }
    }

    const frozenLegacyConditionTags = new Set([
        "Bottom Fishing",
        "Clear Water",
        "Current",
        "Deep Water",
        "Docks",
        "Heavy Cover",
        "Light Cover",
        "Light Current",
        "Open Water",
        "Rock",
        "Shallow Water",
        "Sparse Cover",
        "Stained Water",
        "Suspended Fish",
        "Trolling",
        "Vegetation",
        "Wind"
    ]);

    for (const rig of rigs) {
        if (!isPlainObject(rig)) continue;
        if (Object.prototype.hasOwnProperty.call(rig, "conditionIds")) {
            fail("Rig Condition migration", `${rig.id}: conditionIds is forbidden by RP-A1`);
        }
        const tags = requireArray(rig.conditionTags, `Rig ${rig.id} conditionTags`);
        for (const tag of tags) {
            if (!frozenLegacyConditionTags.has(tag)) {
                fail("Rig legacy conditionTags", `${rig.id}: unapproved frozen legacy value ${JSON.stringify(tag)}`);
            }
        }
    }
}


function validateLureBaitAndRigFoundation(lureBait, rigs, tackle, fishGuidance, knots) {
    const expectedLureBait = [
        ["stick-worm", "artificial", "soft-plastic"],
        ["craw", "artificial", "soft-plastic"],
        ["creature-bait", "artificial", "soft-plastic"],
        ["paddle-tail-swimbait", "artificial", "soft-plastic"],
        ["tube", "artificial", "soft-plastic"],
        ["spinnerbait", "artificial", "wire-bait"],
        ["crankbait", "artificial", "hard-bait"],
        ["jerkbait", "artificial", "hard-bait"],
        ["inline-spinner", "artificial", "metal-lure"],
        ["spoon", "artificial", "metal-lure"],
        ["minnow", "natural-bait", "baitfish"],
        ["nightcrawler", "natural-bait", "worm"],
        ["cricket", "natural-bait", "insect"]
    ];
    const expectedFields = ["id", "name", "summary", "createdVersion", "lastModifiedVersion", "isActive", "presentationType", "category"];
    if (lureBait.length !== expectedLureBait.length) {
        fail("Lure/Bait registry", `expected exactly ${expectedLureBait.length} records; found ${lureBait.length}`);
    }
    const lureById = indexById(lureBait);
    for (const [id, presentationType, category] of expectedLureBait) {
        const record = lureById.get(id);
        if (!record) {
            fail("Lure/Bait registry", `missing approved V1 identity ${id}`);
            continue;
        }
        validateExactFieldOrder(record, expectedFields, "Lure/Bait registry");
        if (record.presentationType !== presentationType) fail("Lure/Bait registry", `${id}: expected presentationType ${presentationType}`);
        if (record.category !== category) fail("Lure/Bait registry", `${id}: expected category ${category}`);
        if (record.isActive !== true) fail("Lure/Bait registry", `${id}: V1 identity must be active`);
    }
    const unexpectedLureIds = lureBait.map((item) => item?.id).filter((id) => !expectedLureBait.some(([expectedId]) => expectedId === id));
    if (unexpectedLureIds.length > 0) fail("Lure/Bait registry", `unexpected V1 identities: ${unexpectedLureIds.join(", ")}`);

    const tackleById = indexById(tackle);
    for (const id of ["weighted-swimbait-hook", "tube-jighead"]) {
        if (tackleById.get(id)?.isActive !== true) fail("Lure/Bait Tackle dependencies", `missing active Tackle ${id}`);
    }
    if (tackle.length !== 31) fail("Lure/Bait Tackle dependencies", `expected 31 Tackle records after two approved additions; found ${tackle.length}`);

    const rigById = indexById(rigs);
    if (rigs.length !== 23) fail("Lure/Bait Rig dependencies", `expected 23 Rig records after Subphase B additions; found ${rigs.length}`);
    if (rigById.has("inline-spinner-setup")) fail("Direct-Tie Rig migration", "legacy inline-spinner-setup must be migrated");
    for (const id of ["direct-tie-lure-setup", "weighted-swimbait-hook-rig", "tube-jig-rig"]) {
        if (rigById.get(id)?.isActive !== true) fail("Lure/Bait Rig dependencies", `missing active Rig ${id}`);
    }

    const knotById = indexById(knots);
    const validateTackleRequirements = (requirements, label) => {
        for (const requirement of requireArray(requirements, `${label} componentRequirements`)) {
            if (!isPlainObject(requirement) || typeof requirement.tackleId !== "string") {
                fail("Rig → Tackle", `${label}: invalid component requirement`);
                continue;
            }
            if (tackleById.get(requirement.tackleId)?.isActive !== true) fail("Rig → Tackle", `${label}: unresolved/inactive Tackle ${requirement.tackleId}`);
        }
    };
    const validateLureRequirements = (requirements, label) => {
        for (const requirement of requireArray(requirements, `${label} lureBaitRequirements`)) {
            if (!isPlainObject(requirement) || typeof requirement.lureBaitId !== "string") {
                fail("Rig → Lure/Bait requirement", `${label}: invalid Lure/Bait requirement`);
                continue;
            }
            if (lureById.get(requirement.lureBaitId)?.isActive !== true) fail("Rig → Lure/Bait requirement", `${label}: unresolved/inactive Lure/Bait ${requirement.lureBaitId}`);
        }
    };
    const validateKnotApplications = (applications, label) => {
        for (const application of requireArray(applications, `${label} knotApplications`)) {
            for (const knotId of requireArray(application?.recommendedKnotIds, `${label} recommendedKnotIds`)) {
                if (knotById.get(knotId)?.isActive !== true) fail("Rig → Knot", `${label}: unresolved/inactive Knot ${knotId}`);
            }
        }
    };

    for (const rig of rigs) {
        if (!isPlainObject(rig)) continue;
        if (Object.prototype.hasOwnProperty.call(rig, "lureBaitRequirements")) validateLureRequirements(rig.lureBaitRequirements, `Rig ${rig.id}`);
        if (!Object.prototype.hasOwnProperty.call(rig, "configurations")) continue;
        if (rig.id !== "direct-tie-lure-setup") fail("Rig configuration ownership", `${rig.id}: configurations are not approved in Subphase B`);
        const configs = requireArray(rig.configurations, `Rig ${rig.id} configurations`);
        const expectedConfigIds = ["inline-spinner", "spinnerbait", "crankbait", "jerkbait", "spoon"];
        const actualConfigIds = configs.map((item) => item?.id);
        if (JSON.stringify(actualConfigIds) !== JSON.stringify(expectedConfigIds)) fail("Direct-Tie Rig migration", `configuration order/IDs must be ${expectedConfigIds.join(", ")}; found ${actualConfigIds.join(", ")}`);
        const expectedTutorialVideoIds = {
            "spinnerbait": "0Or166Uo8VU",
            "crankbait": "-kHoA2RJX1M"
        };
        const fallbackOnlyIds = new Set(["inline-spinner", "jerkbait", "spoon"]);
        const validateTutorialVideo = (tutorial, label, expectedVideoId = null) => {
            if (!isPlainObject(tutorial)) {
                fail("Rig tutorial coverage", `${label}: tutorialVideo must be an object`);
                return;
            }
            const tutorialFields = ["platform", "title", "creator", "videoId", "externalUrl"];
            validateExactFieldOrder(tutorial, tutorialFields, `${label} tutorialVideo`);
            if (tutorial.platform !== "youtube") fail("Rig tutorial coverage", `${label}: tutorial platform must be youtube`);
            for (const field of ["title", "creator", "videoId", "externalUrl"]) {
                if (typeof tutorial[field] !== "string" || tutorial[field].trim() === "") fail("Rig tutorial coverage", `${label}: ${field} must be non-empty text`);
            }
            if (expectedVideoId && tutorial.videoId !== expectedVideoId) fail("Rig tutorial coverage", `${label}: expected approved videoId ${expectedVideoId}; found ${tutorial.videoId}`);
            if (typeof tutorial.externalUrl === "string" && !tutorial.externalUrl.includes(tutorial.videoId)) fail("Rig tutorial coverage", `${label}: externalUrl must identify the approved videoId`);
        };
        for (const config of configs) {
            const configFields = ["id", "name", "lureBaitId", "referenceLinks", "tutorialVideo", "useCases", "conditionTags", "componentRequirements", "lureBaitRequirements", "knotApplications", "assemblySteps", "setupNotes", "commonMistakes"];
            validateExactFieldOrder(config, configFields, `Direct-Tie configuration ${config?.id}`);
            if (config.lureBaitId !== config.id || lureById.get(config.lureBaitId)?.isActive !== true) fail("Direct-Tie Rig migration", `${config?.id}: configuration must resolve its matching active Lure/Bait identity`);
            validateTackleRequirements(config.componentRequirements, `Direct-Tie ${config.id}`);
            validateLureRequirements(config.lureBaitRequirements, `Direct-Tie ${config.id}`);
            validateKnotApplications(config.knotApplications, `Direct-Tie ${config.id}`);
            for (const field of ["useCases", "conditionTags", "assemblySteps", "setupNotes", "commonMistakes"]) validateTextArray(config[field], `Direct-Tie ${config.id} ${field}`);
            if (Object.prototype.hasOwnProperty.call(expectedTutorialVideoIds, config.id)) {
                validateTutorialVideo(config.tutorialVideo, `Direct-Tie ${config.id}`, expectedTutorialVideoIds[config.id]);
            } else if (fallbackOnlyIds.has(config.id)) {
                if (config.tutorialVideo !== null) fail("Rig tutorial coverage", `Direct-Tie ${config.id}: fallback-only configuration must keep tutorialVideo null`);
                if (!Array.isArray(config.referenceLinks) || config.referenceLinks.length === 0) fail("Rig tutorial coverage", `Direct-Tie ${config.id}: fallback-only configuration requires at least one verified reference`);
            }
        }
        validateTutorialVideo(rigById.get("weighted-swimbait-hook-rig")?.tutorialVideo, "Weighted Swimbait Hook Rig", "32Fw4vimHWQ");
        validateTutorialVideo(rigById.get("tube-jig-rig")?.tutorialVideo, "Tube Jig Rig", "FqlK7rqk5E4");
    }

    const configuredGuidance = [];
    for (const guidance of fishGuidance) {
        for (const recommendation of requireArray(guidance?.rigRecommendations, `Fish guidance ${guidance?.fishId}`)) {
            if (!Object.prototype.hasOwnProperty.call(recommendation, "lureBaitId")) continue;
            configuredGuidance.push([guidance.fishId, recommendation.rigId, recommendation.lureBaitId]);
            if (lureById.get(recommendation.lureBaitId)?.isActive !== true) fail("Configured Fish guidance", `${guidance.fishId}: unresolved Lure/Bait ${recommendation.lureBaitId}`);
            const rig = rigById.get(recommendation.rigId);
            const configurationIds = new Set(Array.isArray(rig?.configurations) ? rig.configurations.map((item) => item.lureBaitId) : []);
            if (!configurationIds.has(recommendation.lureBaitId)) fail("Configured Fish guidance", `${guidance.fishId}: ${recommendation.rigId} does not expose ${recommendation.lureBaitId} configuration`);
        }
    }
    const expectedGuidance = [
        ["largemouth-bass", "direct-tie-lure-setup", "inline-spinner"],
        ["white-bass", "direct-tie-lure-setup", "inline-spinner"],
        ["longear-sunfish", "direct-tie-lure-setup", "inline-spinner"]
    ];
    if (JSON.stringify(configuredGuidance) !== JSON.stringify(expectedGuidance)) {
        fail("Configured Fish guidance", `expected only locked Inline Spinner migrations; found ${JSON.stringify(configuredGuidance)}`);
    }
}

function validateCanonicalData() {
    recordCheck("Canonical registries, controlled values, Core registries, and relationships");

    const categoryBindings = loadBindings("data/fish-categories.js", ["FISH_CATEGORY_DATA", "FISH_LEGACY_CATEGORY_ID_MAP"]);
    const fishBindings = loadBindings("data/fish.js", ["FISH_DATA"]);
    const fishIdentificationBindings = loadBindings(
        "data/fish-identification.js",
        ["FISH_IDENTIFICATION_RELATIONSHIPS"]
    );
    const fishRigGuidanceBindings = loadBindings("data/fish-rig-guidance.js", ["FISH_RIG_GUIDANCE"]);
    const rigBindings = loadBindings("data/rigs.js", ["RIG_DATA", "CORE_RIG_IDS"]);
    const conditionBindings = loadBindings("data/conditions.js", ["CONDITION_DATA"]);
    const lureBaitBindings = loadBindings("data/lure-bait.js", ["LURE_BAIT_DATA"]);
    const knotBindings = loadBindings("data/knots.js", ["KNOT_DATA", "CORE_KNOT_IDS"]);
    const tackleBindings = loadBindings("data/tackle.js", ["TACKLE_DATA"]);
    const guidanceBindings = loadBindings("data/knot-guidance.js", ["KNOT_TASK_DEFINITIONS"]);
    const regulationsBindings = loadBindings("data/regulations.js", ["REGULATIONS_DATA_BUILD_INFO", "STATE_DATA", "STATE_RESOURCE_DATA", "STATE_NOTICE_DATA"]);

    const categories = requireArray(categoryBindings.FISH_CATEGORY_DATA, "Fish category registry");
    const legacyCategoryMap = isPlainObject(categoryBindings.FISH_LEGACY_CATEGORY_ID_MAP)
        ? categoryBindings.FISH_LEGACY_CATEGORY_ID_MAP
        : {};
    const fish = requireArray(fishBindings.FISH_DATA, "Fish registry");
    const fishIdentification = requireArray(
        fishIdentificationBindings.FISH_IDENTIFICATION_RELATIONSHIPS,
        "Fish identification relationships"
    );
    const fishRigGuidance = requireArray(
        fishRigGuidanceBindings.FISH_RIG_GUIDANCE,
        "Fish-to-Rig guidance"
    );
    const rigs = requireArray(rigBindings.RIG_DATA, "Rig registry");
    const conditions = requireArray(conditionBindings.CONDITION_DATA, "Condition registry");
    const lureBait = requireArray(lureBaitBindings.LURE_BAIT_DATA, "Lure/Bait registry");
    const knots = requireArray(knotBindings.KNOT_DATA, "Knot registry");
    const tackle = requireArray(tackleBindings.TACKLE_DATA, "Tackle registry");
    const knotTasks = requireArray(guidanceBindings.KNOT_TASK_DEFINITIONS, "Knot task guidance");
    const states = requireArray(regulationsBindings.STATE_DATA, "State registry");
    const stateResources = requireArray(regulationsBindings.STATE_RESOURCE_DATA, "StateResource registry");
    const stateNotices = requireArray(regulationsBindings.STATE_NOTICE_DATA, "StateNotice registry");

    validateCanonicalRecords(fish, "Fish registry");
    validateCanonicalRecords(rigs, "Rig registry");
    validateCanonicalRecords(conditions, "Condition registry");
    validateCanonicalRecords(lureBait, "Lure/Bait registry");
    validateCanonicalRecords(knots, "Knot registry");
    validateCanonicalRecords(tackle, "Tackle registry");

    validateCoreRegistry(rigBindings.CORE_RIG_IDS, rigs, "Core Rig registry");
    validateCoreRegistry(knotBindings.CORE_KNOT_IDS, knots, "Core Knot registry");
    validateFishProductionData(fish, categories, fishIdentification, fishRigGuidance, rigs, legacyCategoryMap);
    validateRegulationsData(regulationsBindings.REGULATIONS_DATA_BUILD_INFO, states, stateResources, stateNotices);
    validateConditionsData(conditions, rigs);
    validateLureBaitAndRigFoundation(lureBait, rigs, tackle, fishRigGuidance, knots);

    validateNoForbiddenFields(fish, ["imageIds", "mediaIds"], "Fish ownership");
    validateNoForbiddenFields(
        rigs,
        ["imageIds", "mediaIds", "techniqueIds", "targetFishIds", "conditionIds", "isCore", "coreOrder"],
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

    return {
        categories,
        legacyCategoryMap,
        fish,
        fishIdentification,
        fishRigGuidance,
        rigs,
        conditions,
        lureBait,
        knots,
        tackle,
        states,
        stateResources,
        stateNotices
    };
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
        "fish-identification": indexById(canonicalData.fishIdentification),
        rig: indexById(canonicalData.rigs),
        knot: indexById(canonicalData.knots),
        tackle: indexById(canonicalData.tackle),
        "lure-bait": indexById(canonicalData.lureBait)
    };

    const referencedLocalFiles = new Set();
    const activeFishPrimaryCounts = new Map(
        canonicalData.fish.map((record) => [record.id, 0])
    );
    const activeTackleRecognitionCounts = new Map(
        canonicalData.tackle.map((record) => [record.id, 0])
    );
    const requiredLureBaitRecognitionIds = new Set([
        "inline-spinner", "spinnerbait", "crankbait", "jerkbait", "spoon",
        "paddle-tail-swimbait", "tube"
    ]);
    const activeRequiredLureMediaCounts = new Map(
        canonicalData.lureBait
            .filter((record) => requiredLureBaitRecognitionIds.has(record.id))
            .map((record) => [record.id, 0])
    );

    function validateFishLicense(item) {
        if (!isPlainObject(item.license)) {
            fail("Fish media license", `${item.id}: license must be an object`);
            return;
        }
        if (typeof item.license.attributionRequired !== "boolean") {
            fail("Fish media license", `${item.id}: attributionRequired must be Boolean`);
        }
        if (!Object.prototype.hasOwnProperty.call(item.license, "attributionText")) {
            fail("Fish media license", `${item.id}: attributionText field is required`);
        } else if (item.license.attributionRequired === true) {
            if (typeof item.license.attributionText !== "string" || item.license.attributionText.trim() === "") {
                fail("Fish media license", `${item.id}: attributionText must be non-empty when attribution is required`);
            }
        } else if (item.license.attributionText !== null) {
            fail("Fish media license", `${item.id}: attributionText must be null when attribution is not required`);
        }
        if (typeof item.license.changesMade !== "string" || item.license.changesMade.trim() === "") {
            fail("Fish media license", `${item.id}: local Fish media must state changesMade or "None"`);
        }
    }

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

        let localFile = null;
        if (typeof item.file === "string" && item.file.trim() !== "") {
            localFile = normalizeLocalReference(item.file);
            if (!localFile) {
                fail("Local media", `${item.id}: file must be a repository-local path`);
            } else {
                referencedLocalFiles.add(localFile);
                if (!fileExists(localFile)) {
                    fail("Local media", `${item.id}: missing local media file ${localFile}`);
                }
            }
        }

        if (item.ownerType === "fish") {
            const allowedRoles = new Set(["primary-identification", "supplemental-identification"]);
            if (!allowedRoles.has(item.role)) {
                fail("Fish media", `${item.id}: unsupported Fish role ${JSON.stringify(item.role)}`);
            }
            if (item.type !== "image") {
                fail("Fish media", `${item.id}: Fish identification media type must be image`);
            }
            if (!localFile || !localFile.startsWith("images/fish/")) {
                fail("Fish media", `${item.id}: Fish image must be local under images/fish/`);
            }
            if (typeof item.alt !== "string" || item.alt.trim() === "") {
                fail("Fish media", `${item.id}: identification alt text must be non-empty`);
            }
            if (item.role === "primary-identification") {
                const expectedId = `${item.ownerId}-primary-identification`;
                if (item.id !== expectedId) {
                    fail("Fish media", `${item.id}: expected primary Media ID ${expectedId}`);
                }
                if (item.isActive === true && activeFishPrimaryCounts.has(item.ownerId)) {
                    activeFishPrimaryCounts.set(
                        item.ownerId,
                        activeFishPrimaryCounts.get(item.ownerId) + 1
                    );
                }
            } else if (item.role === "supplemental-identification") {
                const prefix = `${item.ownerId}-supplemental-identification-`;
                if (!item.id.startsWith(prefix) || item.id.length <= prefix.length) {
                    fail("Fish media", `${item.id}: supplemental Media ID must use ${prefix}<purpose>`);
                }
            }
            validateFishLicense(item);
        }

        if (item.ownerType === "fish-identification") {
            if (item.role !== "comparison") {
                fail("Fish comparison media", `${item.id}: Fish-identification role must be comparison`);
            }
            if (item.type !== "image") {
                fail("Fish comparison media", `${item.id}: comparison media type must be image`);
            }
            if (!localFile || !localFile.startsWith("images/fish-identification/")) {
                fail("Fish comparison media", `${item.id}: comparison image must be local under images/fish-identification/`);
            }
            const prefix = `${item.ownerId}-comparison-`;
            if (!item.id.startsWith(prefix) || item.id.length <= prefix.length) {
                fail("Fish comparison media", `${item.id}: comparison Media ID must use ${prefix}<purpose>`);
            }
            if (typeof item.alt !== "string" || item.alt.trim() === "") {
                fail("Fish comparison media", `${item.id}: comparison alt text must be non-empty`);
            }
            validateFishLicense(item);
        }

        if (item.ownerType === "tackle" && item.isActive === true && item.type === "image") {
            if (!localFile || !localFile.startsWith("images/tackle/")) fail("Tackle media readiness", `${item.id}: Tackle recognition image must be local under images/tackle/`);
            if (typeof item.alt !== "string" || item.alt.trim() === "") fail("Tackle media readiness", `${item.id}: recognition alt text must be non-empty`);
            if (activeTackleRecognitionCounts.has(item.ownerId)) activeTackleRecognitionCounts.set(item.ownerId, activeTackleRecognitionCounts.get(item.ownerId) + 1);
        }

        if (item.ownerType === "lure-bait" && item.isActive === true && item.type === "image") {
            if (typeof item.alt !== "string" || item.alt.trim() === "") fail("Lure/Bait media readiness", `${item.id}: recognition alt text must be non-empty`);
            if (activeRequiredLureMediaCounts.has(item.ownerId)) activeRequiredLureMediaCounts.set(item.ownerId, activeRequiredLureMediaCounts.get(item.ownerId) + 1);
        }
    }

    for (const fish of canonicalData.fish) {
        if (!isFishTargetProductionRecord(fish) || fish.isActive !== true) continue;
        const count = activeFishPrimaryCounts.get(fish.id) ?? 0;
        if (count !== 1) {
            fail("Fish media readiness", `${fish.id}: active Fish must have exactly one active primary-identification Media; found ${count}`);
        }
    }

    for (const tackleRecord of canonicalData.tackle) {
        if (!isPlainObject(tackleRecord) || tackleRecord.isActive !== true) continue;
        const count = activeTackleRecognitionCounts.get(tackleRecord.id) ?? 0;
        if (count !== 1) fail("Tackle media readiness", `${tackleRecord.id}: active Tackle must have exactly one active recognition image; found ${count}`);
    }

    for (const lureBaitId of requiredLureBaitRecognitionIds) {
        const count = activeRequiredLureMediaCounts.get(lureBaitId) ?? 0;
        if (count !== 1) fail("Lure/Bait media readiness", `${lureBaitId}: required Rig-facing Lure/Bait must have exactly one active recognition image; found ${count}`);
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
        "docs/STYLE_GUIDE.md",
        "docs/UI_STANDARD.md",
        "docs/WORKING_STATE.md",
        "docs/ACTIVE-CHANGE-LEDGER.md",
        "docs/CHANGELOG.md",
        "docs/data-model/README.md",
        "docs/decisions/architecture.md",
        "docs/decisions/data-model.md",
        "docs/decisions/media.md",
        "docs/decisions/product.md",
        "docs/decisions/ux-navigation.md",
        "docs/decisions/workflow.md",
        "docs/workflow/PRODUCTION-CHANGES.md",
        "docs/workflow/DOCUMENTATION-AND-CLOSEOUT.md"
    ];

    const retiredDocs = [
        "docs/HANDOFF.md",
        "docs/MILESTONES.md",
        "docs/SPECIFICATION.md",
        "docs/CARD_PAGE_STANDARD.md",
        "docs/NAVIGATION-PAGE-STANDARD.md",
        "docs/DETAIL-PAGE-STANDARD.md",
        "docs/data-model/00-GLOSSARY.md",
        "docs/data-model/06-LURES.md",
        "docs/data-model/08-BACKUP.md",
        "docs/decisions/README.md",
        "docs/workflow/README.md",
        "docs/workflow/AUTHORITY-AND-SYNC.md",
        "docs/workflow/STARTUP.md",
        "docs/workflow/DOCUMENTATION.md",
        "docs/workflow/CLOSEOUT.md",
        "docs/workflow/SESSION-HANDOFF.md",
        "docs/workflow/REVIEW-AND-STAGING.md"
    ];

    const docs = new Map();
    for (const relativePath of requiredDocs) {
        const text = readText(relativePath);
        if (text !== null) {
            docs.set(relativePath, text);
        }
    }

    for (const relativePath of retiredDocs) {
        if (fileExists(relativePath)) {
            fail("Documentation governance", `retired documentation path must remain absent: ${relativePath}`);
        }
    }

    const requiredMarkers = new Map([
        [
            "docs/ARCHITECTURE.md",
            [
                "**Role:** Current technical/source architecture and durable ownership boundaries",
                "`docs/WORKING_STATE.md` is the single compact repository current-state/exact-resume entrypoint"
            ]
        ],
        [
            "docs/DECISIONS.md",
            [
                "**Role:** Compact canonical decision index",
                "# Decision Files",
                "[`decisions/workflow.md`](decisions/workflow.md)"
            ]
        ],
        [
            "docs/DEVELOPMENT_WORKFLOW.md",
            [
                "**Role:** Compact canonical workflow entrypoint",
                "# Procedure Index",
                "workflow/DOCUMENTATION-AND-CLOSEOUT.md"
            ]
        ],
        [
            "docs/ROADMAP.md",
            [
                "**Role:** Product milestone order and future direction",
                "does **not** own exact active workstream status"
            ]
        ],
        [
            "docs/STYLE_GUIDE.md",
            [
                "**Role:** Code, data, file, and documentation conventions",
                "those belong to `UI_STANDARD.md`"
            ]
        ],
        [
            "docs/UI_STANDARD.md",
            [
                "**Role:** Canonical Version 1 visual, navigation, card, detail-page, search-interaction, mobile, and accessibility standard",
                "# Card System",
                "# Persistent Navigation Component"
            ]
        ],
        [
            "docs/WORKING_STATE.md",
            [
                "**Document Status:** Approved — Active Repository Continuity Record",
                "# Exact Resume Point"
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
            "docs/CHANGELOG.md",
            [
                "**Role:** Curated meaningful landed-change history",
                "curated project changelog, not a second Working State"
            ]
        ],
        [
            "docs/data-model/README.md",
            [
                "**Role:** Canonical data-model ownership map",
                "# Canonical Files and Status"
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

    const activeMechanicsFiles = [
        "README.md",
        "AGENTS.md",
        "docs/PROJECT.md",
        "docs/DECISIONS.md",
        "docs/DEVELOPMENT_WORKFLOW.md",
        "docs/ROADMAP.md",
        "docs/WORKING_STATE.md"
    ];
    const retiredReferenceNames = retiredDocs.map((relativePath) => relativePath.replace(/^docs\//, ""));

    for (const relativePath of activeMechanicsFiles) {
        const text = ["README.md", "AGENTS.md"].includes(relativePath) ? readText(relativePath) : docs.get(relativePath);
        if (text === null || text === undefined) {
            continue;
        }
        for (const retiredReference of retiredReferenceNames) {
            const matchingLines = text.split(/\r?\n/).filter((line) => line.includes(retiredReference));
            for (const line of matchingLines) {
                if (/\b(?:GIT HISTORY ONLY|ARCHIVE|retir(?:e|ed|ement)|delete|deletion|remove|removal|move|moved|former active path|planned repository disposition)\b/i.test(line)) continue;
                fail(
                    "Documentation governance",
                    `${relativePath}: active mechanics still reference retired documentation path ${retiredReference}`
                );
            }
        }
    }

    recordCheck("Active documentation path/reference integrity");

    const activeTextFiles = listTrackedRepositoryFiles().filter((repoPath) =>
        /\.md$/i.test(repoPath) &&
        !repoPath.startsWith("archive/") &&
        fileExists(repoPath)
    );

    function resolveDocReference(fromPath, reference) {
        const clean = reference.split(/[?#]/, 1)[0].trim();
        if (!clean || /^(?:https?:|mailto:|tel:|data:|#)/i.test(clean)) return null;
        if (clean.startsWith("/")) return clean.slice(1);
        if (clean.startsWith("docs/") || clean.startsWith("archive/") || clean === "AGENTS.md" || clean === "README.md") {
            return path.posix.normalize(clean);
        }
        return path.posix.normalize(path.posix.join(path.posix.dirname(fromPath), clean));
    }

    function isExplicitRetirementLine(line) {
        return /\b(?:GIT HISTORY ONLY|ARCHIVE|retir(?:e|ed|ement)|delete|deletion|remove|removal|move|moved|former active path|planned repository disposition)\b/i.test(line);
    }

    for (const relativePath of activeTextFiles) {
        const text = readText(relativePath);
        if (text === null) continue;
        const lines = text.split(/\r?\n/);
        lines.forEach((line, index) => {
            const references = [];
            for (const match of line.matchAll(/\]\(([^)]+\.md(?:[?#][^)]*)?)\)/gi)) references.push(match[1]);
            for (const match of line.matchAll(/`((?:docs\/|archive\/|\.\.?\/)[A-Za-z0-9_.\/-]+\.md)`/g)) references.push(match[1]);
            const plain = line.match(/^\s*[-*]\s+((?:docs\/|archive\/|\.\.?\/)[A-Za-z0-9_.\/-]+\.md)\s*$/i);
            if (plain) references.push(plain[1]);

            for (const reference of references) {
                const resolved = resolveDocReference(relativePath, reference);
                if (!resolved) continue;
                if (!fileExists(resolved) && !directoryExists(resolved) && !isExplicitRetirementLine(line)) {
                    fail("Documentation path", `${relativePath}:${index + 1}: local documentation reference does not resolve: ${reference} -> ${resolved}`);
                }
            }
        });
    }

    recordCheck("Decision index/body identity integrity");
    const decisionIndex = docs.get("docs/DECISIONS.md");
    if (decisionIndex !== undefined) {
        const indexedIds = [...decisionIndex.matchAll(/\bD\d{3}\b/g)].map((m) => m[0]);
        const uniqueIndexed = new Set(indexedIds);
        const bodyFiles = [
            "docs/decisions/architecture.md",
            "docs/decisions/data-model.md",
            "docs/decisions/media.md",
            "docs/decisions/product.md",
            "docs/decisions/ux-navigation.md",
            "docs/decisions/workflow.md"
        ];
        const bodyOwners = new Map();
        for (const bodyPath of bodyFiles) {
            const body = docs.get(bodyPath);
            if (body === undefined) continue;
            const headingIds = [...body.matchAll(/^#\s+(D\d{3})\b/gm)].map((m) => m[1]);
            for (const id of headingIds) {
                const owners = bodyOwners.get(id) ?? [];
                owners.push(bodyPath);
                bodyOwners.set(id, owners);
            }
        }
        for (const id of uniqueIndexed) {
            const owners = bodyOwners.get(id) ?? [];
            if (owners.length !== 1) fail("Decision identity", `${id}: expected exactly one decision body owner; found ${owners.length}${owners.length ? ` (${owners.join(", ")})` : ""}`);
        }
        for (const [id, owners] of bodyOwners.entries()) {
            if (!uniqueIndexed.has(id)) fail("Decision identity", `${id}: decision body exists but is missing from docs/DECISIONS.md`);
            if (owners.length > 1) fail("Decision identity", `${id}: duplicate decision body owners: ${owners.join(", ")}`);
        }
    }

    const foundation = readText("docs/data-model/01-FOUNDATION.md");
    if (foundation !== null && !foundation.includes("**Document Status:** Approved")) {
        fail("Documentation governance", "docs/data-model/01-FOUNDATION.md: canonical inherited foundation must have Approved document status");
    }

    const staleCurrentStatePatterns = [
        /^##\s+Current Repository State\b/im,
        /^\*\*Implementation Status:\*\*\s*Repository Audit Section\s+\d+\b/im,
        /^\*\*Current Audit Section:\*\*\s*\d+\b/im
    ];

    for (const relativePath of ["docs/ROADMAP.md", "docs/CHANGELOG.md"]) {
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
    validateFishEvidence(canonicalData.fish, canonicalData.fishIdentification);
    validateFishSearchHelpers(canonicalData);
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
