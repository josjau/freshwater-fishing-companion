/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: search.js
   PURPOSE: Owns shared record lookup/search primitives plus clearly
   bounded Fish and Knot scoped-search behavior.
   ========================================================== */

"use strict";

const SEARCH_BUILD_INFO = Object.freeze({
    file: "search.js",
    scope: "Shared Search + Fish Guide + Knot Guide",
    replacement: "Shared Search + Guide-Owned Scoped Search"
});

/* ==========================================================
   SHARED SEARCH — GENERIC LOOKUP + RANKING
   ========================================================== */

function normalizeSearchText(value) {
    return String(value ?? "")
        .trim()
        .toLocaleLowerCase();
}

function findRecordById(records, recordId) {
    if (!Array.isArray(records)) {
        return null;
    }

    const normalizedId = normalizeSearchText(recordId);

    return (
        records.find(
            (record) =>
                normalizeSearchText(record.id) === normalizedId
        ) ?? null
    );
}

function getSearchValueScore(value, normalizedQuery) {
    const normalizedValue = normalizeSearchText(value);
    if (!normalizedValue || !normalizedQuery) return 0;

    if (normalizedValue === normalizedQuery) return 400;
    if (normalizedValue.startsWith(normalizedQuery)) return 350;

    const words = normalizedValue.split(/[^a-z0-9]+/).filter(Boolean);
    if (words.some((word) => word === normalizedQuery)) return 325;
    if (words.some((word) => word.startsWith(normalizedQuery))) return 300;
    if (normalizedValue.includes(normalizedQuery)) return 250;

    return 0;
}

function getSearchRecordScore(record, normalizedQuery, fields) {
    return fields.reduce((bestScore, field, fieldIndex) => {
        const fieldValue = record[field];
        const values = Array.isArray(fieldValue) ? fieldValue : [fieldValue];
        const valueScore = values.reduce(
            (bestValueScore, value) => Math.max(
                bestValueScore,
                getSearchValueScore(value, normalizedQuery)
            ),
            0
        );

        if (valueScore === 0) return bestScore;

        const fieldPriority = Math.max(0, fields.length - fieldIndex) * 1000;
        return Math.max(bestScore, fieldPriority + valueScore);
    }, 0);
}

function searchRecords(records, query, fields = ["name"]) {
    if (!Array.isArray(records)) {
        return [];
    }

    const normalizedQuery = normalizeSearchText(query);

    if (!normalizedQuery) {
        return [...records];
    }

    return records
        .map((record, originalIndex) => ({
            record,
            originalIndex,
            score: getSearchRecordScore(record, normalizedQuery, fields)
        }))
        .filter((match) => match.score > 0)
        .sort((matchA, matchB) =>
            matchB.score - matchA.score ||
            matchA.originalIndex - matchB.originalIndex
        )
        .map((match) => match.record);
}

/* ==========================================================
   FISH GUIDE — SCOPED SEARCH
   ========================================================== */

const FISH_SEARCH_HELPERS = Object.freeze({
    all: Object.freeze(["bass", "bluegill", "rainbow", "brown"]),
    trout: Object.freeze(["rainbow", "brown", "German Brown"]),
    gar: Object.freeze(["longnose", "spotted", "Needlenose"])
});

function getFishCategoryName(record, categoryData = [], legacyCategoryMap = {}) {
    if (!record || !Array.isArray(categoryData)) return "";
    const categoryId = record.categoryId ?? legacyCategoryMap?.[record.category] ?? null;
    if (!categoryId) return "";
    return categoryData.find((category) => category.id === categoryId)?.name ?? "";
}

function getFishSearchMatch(record, normalizedQuery, categoryData, legacyCategoryMap) {
    const normalizedName = normalizeSearchText(record.name);
    const normalizedAliases = (record.aliases ?? []).map(normalizeSearchText);
    const normalizedCategory = normalizeSearchText(getFishCategoryName(record, categoryData, legacyCategoryMap));

    if (normalizedName === normalizedQuery) return 1000;
    if (normalizedName.startsWith(normalizedQuery)) return 900;
    if (normalizedAliases.includes(normalizedQuery)) return 850;
    if (normalizedAliases.some((alias) => alias.startsWith(normalizedQuery))) return 800;
    if (normalizedName.includes(normalizedQuery)) return 700;
    if (normalizedCategory && normalizedCategory.includes(normalizedQuery)) return 600;
    if (normalizedAliases.some((alias) => alias.includes(normalizedQuery))) return 450;

    return 0;
}

function searchFishRecords(records, query, categoryData = [], legacyCategoryMap = {}) {
    if (!Array.isArray(records)) return [];

    const normalizedQuery = normalizeSearchText(query);
    if (!normalizedQuery) return sortRecordsAlphabetically(records);

    return records
        .map((record) => ({
            record,
            score: getFishSearchMatch(record, normalizedQuery, categoryData, legacyCategoryMap)
        }))
        .filter((match) => match.score > 0)
        .sort((first, second) =>
            second.score - first.score ||
            String(first.record.name ?? "").localeCompare(
                String(second.record.name ?? ""),
                undefined,
                { sensitivity: "base" }
            )
        )
        .map((match) => match.record);
}

function getFishSearchPlaceholder(scopeKey, fallbackLabel = "Fish") {
    const terms = FISH_SEARCH_HELPERS[scopeKey];
    if (!Array.isArray(terms) || terms.length === 0) {
        return `Search ${fallbackLabel}`;
    }

    if (terms.length === 1) return `Try ${terms[0]}`;
    if (terms.length === 2) return `Try ${terms[0]} or ${terms[1]}`;
    return `Try ${terms.slice(0, -1).join(", ")}, or ${terms[terms.length - 1]}`;
}

/* ==========================================================
   KNOT GUIDE — DETERMINISTIC SCOPED SEARCH
   ========================================================== */

const KNOT_SEARCH_REPLACEMENTS = Object.freeze({
    mono: "monofilament",
    fluoro: "fluorocarbon",
    lines: "line",
    hooks: "hook",
    lures: "lure",
    swivels: "swivel",
    leaders: "leader",
    reels: "reel",
    spools: "spool",
    knots: "knot"
});

const KNOT_SEARCH_FILLER_WORDS = Object.freeze([
    "a",
    "an",
    "the",
    "for",
    "my",
    "please"
]);

function normalizeKnotSearchText(value) {
    return normalizeSearchText(value)
        .replace(/[’']/g, "")
        .replace(/[^a-z0-9]+/g, " ")
        .split(/\s+/)
        .filter(Boolean)
        .map((token) => KNOT_SEARCH_REPLACEMENTS[token] ?? token)
        .filter((token) => !KNOT_SEARCH_FILLER_WORDS.includes(token))
        .join(" ");
}

function getKnotSearchIntents(searchIntents) {
    return Array.isArray(searchIntents) ? searchIntents : [];
}

function getKnotIntentMatch(recordId, normalizedQuery, searchIntents, kind) {
    let bestMatch = null;

    getKnotSearchIntents(searchIntents).forEach((intent, intentIndex) => {
        if (intent.kind !== kind) return;

        const knotIndex = intent.knotIds?.indexOf(recordId) ?? -1;
        if (knotIndex < 0) return;

        const terms = (intent.terms ?? [])
            .map(normalizeKnotSearchText)
            .filter(Boolean);
        const exactMatch = terms.some((term) => term === normalizedQuery);
        const phraseMatch = !exactMatch && terms.some((term) =>
            term.includes(normalizedQuery) || normalizedQuery.includes(term)
        );
        if (!exactMatch && !phraseMatch) return;

        const score = kind === "specific"
            ? (exactMatch ? 800 : 600)
            : (exactMatch ? 700 : 650);
        const candidate = { score, intentIndex, knotIndex };
        if (
            !bestMatch ||
            candidate.score > bestMatch.score ||
            (
                candidate.score === bestMatch.score &&
                (
                    candidate.intentIndex < bestMatch.intentIndex ||
                    (
                        candidate.intentIndex === bestMatch.intentIndex &&
                        candidate.knotIndex < bestMatch.knotIndex
                    )
                )
            )
        ) {
            bestMatch = candidate;
        }
    });

    return bestMatch;
}

function getKnotSearchMatch(record, normalizedQuery, searchIntents) {
    const normalizedName = normalizeKnotSearchText(record.name);
    const normalizedAliases = (record.aliases ?? []).map(normalizeKnotSearchText);

    if (normalizedName === normalizedQuery) return { score: 1000, intentIndex: 999, knotIndex: 999 };
    if (normalizedAliases.includes(normalizedQuery)) return { score: 950, intentIndex: 999, knotIndex: 999 };
    if (normalizedName.startsWith(normalizedQuery)) return { score: 900, intentIndex: 999, knotIndex: 999 };
    if (normalizedAliases.some((alias) => alias.startsWith(normalizedQuery))) return { score: 850, intentIndex: 999, knotIndex: 999 };

    const specificIntentMatch = getKnotIntentMatch(
        record.id,
        normalizedQuery,
        searchIntents,
        "specific"
    );
    if (specificIntentMatch?.score === 800) return specificIntentMatch;

    const practicalIntentMatch = getKnotIntentMatch(
        record.id,
        normalizedQuery,
        searchIntents,
        "practical"
    );
    if (practicalIntentMatch) return practicalIntentMatch;

    if (
        normalizedName.includes(normalizedQuery) ||
        normalizedAliases.some((alias) => alias.includes(normalizedQuery))
    ) {
        return { score: 600, intentIndex: -1, knotIndex: -1 };
    }
    if (specificIntentMatch) return specificIntentMatch;

    const lineMatch = (record.compatibleLineTypes ?? []).some(
        (lineType) => normalizeKnotSearchText(lineType) === normalizedQuery
    );
    const difficultyMatch = normalizeKnotSearchText(record.difficulty) === normalizedQuery;
    if (lineMatch || difficultyMatch) return { score: 400, intentIndex: 999, knotIndex: 999 };

    return { score: 0, intentIndex: 999, knotIndex: 999 };
}

function searchKnotRecords(records, query, searchIntents = []) {
    if (!Array.isArray(records)) return [];

    const normalizedQuery = normalizeKnotSearchText(query);
    if (!normalizedQuery) return [...records];

    return records
        .map((record, originalIndex) => ({
            record,
            originalIndex,
            ...getKnotSearchMatch(record, normalizedQuery, searchIntents)
        }))
        .filter((match) => match.score > 0)
        .sort((first, second) =>
            second.score - first.score ||
            first.intentIndex - second.intentIndex ||
            first.knotIndex - second.knotIndex ||
            first.originalIndex - second.originalIndex
        )
        .map((match) => match.record);
}

/* ==========================================================
   SHARED SEARCH — GENERIC FILTER + SORT HELPERS
   ========================================================== */

function sortRecordsAlphabetically(records, field = "name") {
    if (!Array.isArray(records)) {
        return [];
    }

    return [...records].sort((recordA, recordB) =>
        String(recordA[field] ?? "").localeCompare(
            String(recordB[field] ?? ""),
            undefined,
            {
                sensitivity: "base"
            }
        )
    );
}

console.info(
    `[Loaded] ${SEARCH_BUILD_INFO.file} | ` +
    `${SEARCH_BUILD_INFO.scope} | ` +
    `${SEARCH_BUILD_INFO.replacement}`
);
