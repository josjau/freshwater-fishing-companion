/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: search.js
   REPLACEMENT: MS2.2 - SHARED SEARCH UTILITIES
   PURPOSE: Provides reusable record lookup, text search,
   filtering, relevance ranking, and alphabetical sorting for canonical data.
   ========================================================== */

"use strict";

const SEARCH_BUILD_INFO = Object.freeze({
    file: "search.js",
    milestone: "MS2.2",
    replacement: "Shared Search Utilities"
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
