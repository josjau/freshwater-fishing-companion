/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: search.js
   PURPOSE: Provides reusable record lookup/search plus deterministic,
   beginner-oriented Knot relevance ranking and task-intent matching.
   ========================================================== */

"use strict";

const SEARCH_BUILD_INFO = Object.freeze({
    file: "search.js",
    milestone: "Knot Guide — Production Package 2",
    replacement: "Shared Search + Deterministic Knot Search"
});

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

const FISH_SEARCH_HELPERS = Object.freeze({
    all: Object.freeze(["bass", "bluegill", "rainbow", "brown"]),
    trout: Object.freeze(["rainbow", "brown", "German Brown"])
});

function getFishCategoryName(record, categoryData = [], legacyCategoryMap = {}) {
    if (!record || !Array.isArray(categoryData)) return "";
    const categoryId = record.categoryId ?? legacyCategoryMap?.[record.category] ?? null;
    if (!categoryId) return "";
    return categoryData.find((category) => category.id === categoryId)?.name ?? "";
}

function getFishSearchMatch(record, normalizedQuery, categoryData, legacyCategoryMap) {
    const normalizedName = normalizeSearchText(record.name);
    const normalizedScientificName = normalizeSearchText(record.scientificName);
    const normalizedAliases = (record.aliases ?? []).map(normalizeSearchText);
    const normalizedCategory = normalizeSearchText(getFishCategoryName(record, categoryData, legacyCategoryMap));
    const normalizedFamily = normalizeSearchText(record.family);

    if (normalizedName === normalizedQuery) return 1000;
    if (normalizedName.startsWith(normalizedQuery)) return 900;
    if (normalizedAliases.includes(normalizedQuery)) return 850;
    if (normalizedAliases.some((alias) => alias.startsWith(normalizedQuery))) return 800;
    if (
        normalizedName.includes(normalizedQuery) ||
        normalizedScientificName.includes(normalizedQuery)
    ) {
        return 700;
    }
    if (normalizedCategory && normalizedCategory.includes(normalizedQuery)) return 600;
    if (normalizedFamily && normalizedFamily.includes(normalizedQuery)) return 500;
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

function getKnotTaskDefinitions(taskDefinitions) {
    return Array.isArray(taskDefinitions) ? taskDefinitions : [];
}

function getKnotTaskSearchTerms(taskDefinitions) {
    return new Set(
        getKnotTaskDefinitions(taskDefinitions)
            .flatMap((task) => [task.title, ...(task.searchTerms ?? [])])
            .map(normalizeKnotSearchText)
            .filter(Boolean)
    );
}

function getKnotTaskMatch(recordId, normalizedQuery, taskDefinitions) {
    let bestMatch = null;

    getKnotTaskDefinitions(taskDefinitions).forEach((task, taskIndex) => {
        const knotIndex = task.knotIds?.indexOf(recordId) ?? -1;
        if (knotIndex < 0) return;

        const terms = [task.title, ...(task.searchTerms ?? [])]
            .map(normalizeKnotSearchText)
            .filter(Boolean);
        const exactMatch = terms.some((term) => term === normalizedQuery);
        const phraseMatch = !exactMatch && terms.some((term) =>
            term.includes(normalizedQuery) || normalizedQuery.includes(term)
        );
        if (!exactMatch && !phraseMatch) return;

        const score = exactMatch ? 700 : 650;
        const candidate = { score, taskIndex, knotIndex };
        if (!bestMatch || candidate.score > bestMatch.score) {
            bestMatch = candidate;
        }
    });

    return bestMatch;
}

function getKnotSearchMatch(record, normalizedQuery, taskDefinitions) {
    const normalizedName = normalizeKnotSearchText(record.name);
    const normalizedAliases = (record.aliases ?? []).map(normalizeKnotSearchText);
    const sharedTaskTerms = getKnotTaskSearchTerms(taskDefinitions);
    const normalizedKeywords = (record.keywords ?? [])
        .map(normalizeKnotSearchText)
        .filter((keyword) => keyword && !sharedTaskTerms.has(keyword));

    if (normalizedName === normalizedQuery) return { score: 1000, taskIndex: 999, knotIndex: 999 };
    if (normalizedAliases.includes(normalizedQuery)) return { score: 950, taskIndex: 999, knotIndex: 999 };
    if (normalizedName.startsWith(normalizedQuery)) return { score: 900, taskIndex: 999, knotIndex: 999 };
    if (normalizedAliases.some((alias) => alias.startsWith(normalizedQuery))) return { score: 850, taskIndex: 999, knotIndex: 999 };
    if (normalizedKeywords.includes(normalizedQuery)) return { score: 800, taskIndex: 999, knotIndex: 999 };

    const taskMatch = getKnotTaskMatch(record.id, normalizedQuery, taskDefinitions);
    if (taskMatch) return taskMatch;

    if (
        normalizedName.includes(normalizedQuery) ||
        normalizedAliases.some((alias) => alias.includes(normalizedQuery)) ||
        normalizedKeywords.some((keyword) => keyword.includes(normalizedQuery) || normalizedQuery.includes(keyword))
    ) {
        return { score: 600, taskIndex: 999, knotIndex: 999 };
    }

    const lineMatch = (record.compatibleLineTypes ?? []).some(
        (lineType) => normalizeKnotSearchText(lineType) === normalizedQuery
    );
    const difficultyMatch = normalizeKnotSearchText(record.difficulty) === normalizedQuery;
    if (lineMatch || difficultyMatch) return { score: 400, taskIndex: 999, knotIndex: 999 };

    return { score: 0, taskIndex: 999, knotIndex: 999 };
}

function searchKnotRecords(records, query, taskDefinitions = []) {
    if (!Array.isArray(records)) return [];

    const normalizedQuery = normalizeKnotSearchText(query);
    if (!normalizedQuery) return [...records];

    return records
        .map((record, originalIndex) => ({
            record,
            originalIndex,
            ...getKnotSearchMatch(record, normalizedQuery, taskDefinitions)
        }))
        .filter((match) => match.score > 0)
        .sort((first, second) =>
            second.score - first.score ||
            first.taskIndex - second.taskIndex ||
            first.knotIndex - second.knotIndex ||
            first.originalIndex - second.originalIndex
        )
        .map((match) => match.record);
}

function filterRecordsByValue(records, field, expectedValue) {
    if (!Array.isArray(records)) {
        return [];
    }

    const normalizedExpectedValue =
        normalizeSearchText(expectedValue);

    return records.filter((record) => {
        const fieldValue = record[field];

        if (Array.isArray(fieldValue)) {
            return fieldValue.some(
                (value) =>
                    normalizeSearchText(value) ===
                    normalizedExpectedValue
            );
        }

        return (
            normalizeSearchText(fieldValue) ===
            normalizedExpectedValue
        );
    });
}

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
    `${SEARCH_BUILD_INFO.milestone} | ` +
    `${SEARCH_BUILD_INFO.replacement}`
);
