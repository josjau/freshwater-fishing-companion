/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: search.js
   PURPOSE: Owns shared record lookup, scoring, filtering and
   sorting. Guide-scoped search belongs to its Guide controller.
   ========================================================== */

"use strict";

const SEARCH_BUILD_INFO = Object.freeze({
    file: "search.js",
    scope: "Shared Search Services",
    replacement: "Guide-Owned Scoped Search"
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
