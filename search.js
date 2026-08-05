/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: search.js
   REPLACEMENT: MS2.2 - SHARED SEARCH UTILITIES
   PURPOSE: Provides reusable record lookup, text search,
   filtering, and alphabetical sorting for canonical data.
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

function searchRecords(records, query, fields = ["name"]) {
    if (!Array.isArray(records)) {
        return [];
    }

    const normalizedQuery = normalizeSearchText(query);

    if (!normalizedQuery) {
        return [...records];
    }

    return records.filter((record) =>
        fields.some((field) => {
            const fieldValue = record[field];

            if (Array.isArray(fieldValue)) {
                return fieldValue.some((value) =>
                    normalizeSearchText(value).includes(normalizedQuery)
                );
            }

            return normalizeSearchText(fieldValue).includes(
                normalizedQuery
            );
        })
    );
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
