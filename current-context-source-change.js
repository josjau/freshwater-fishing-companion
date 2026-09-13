/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: current-context-source-change.js
   PURPOSE: Provides bounded G7-CTX source-change visibility for
   confirmed What I Have With Me Today context sources.
   ========================================================== */

"use strict";

const CURRENT_CONTEXT_SOURCE_CHANGE_BUILD_INFO = Object.freeze({
    file: "current-context-source-change.js",
    milestone: "GATE-007 — My Tackle Availability Foundation"
});

const SOURCE_CHANGE_STATUS = Object.freeze({
    UNCHANGED: "unchanged",
    CHANGED_SINCE_CONFIRMATION: "changed-since-confirmation",
    REQUIRES_EXPLICIT_RESOLUTION: "requires-explicit-resolution"
});

const SOURCE_ACKNOWLEDGEMENT_STATUS = Object.freeze({
    ADVANCED: "advanced",
    STALE: "stale"
});

const CONTEXT_INTENT_STATUS = Object.freeze({
    PRESERVED: "preserved",
    REQUIRES_EXPLICIT_RESOLUTION: "requires-explicit-resolution"
});

const MATERIAL_FACT_DIMENSION = Object.freeze({
    EFFECTIVE_AVAILABILITY: "effective-availability",
    QUANTITY_SUFFICIENCY: "quantity-sufficiency",
    CANONICAL_SATISFACTION: "canonical-satisfaction",
    SETUP_USABILITY: "setup-usability",
    SOURCE_PROVENANCE: "source-provenance",
    OTHER_AUTOMATION_RELEVANT: "other-automation-relevant"
});

const SOURCE_ACKNOWLEDGEMENT_STALE_REASON = Object.freeze({
    CONTEXT_REVISION_CHANGED: "context-revision-changed",
    SOURCE_REVISION_CHANGED: "source-revision-changed"
});

const MATERIAL_FACT_DIMENSIONS = Object.freeze(Object.values(MATERIAL_FACT_DIMENSION));

function requireObject(value, label) {
    if (!value || typeof value !== "object" || Array.isArray(value)) {
        throw new TypeError(`${label} must be an object.`);
    }
    return value;
}

function requireNonEmptyText(value, label) {
    if (typeof value !== "string" || value.trim() === "") {
        throw new TypeError(`${label} must be non-empty text.`);
    }
    return value.trim();
}

function requireRevisionToken(value, label) {
    if (typeof value === "string" && value.trim() !== "") {
        return value.trim();
    }
    if (Number.isInteger(value) && value >= 0) {
        return value;
    }
    throw new TypeError(`${label} must be a non-empty text token or non-negative whole number.`);
}

function stableSerialize(value, seen = new Set()) {
    if (value === null) return "null";
    if (typeof value === "string") return JSON.stringify(value);
    if (typeof value === "boolean") return value ? "true" : "false";
    if (typeof value === "number") {
        if (!Number.isFinite(value)) {
            throw new TypeError("Material facts may contain only finite numbers.");
        }
        return Object.is(value, -0) ? "0" : String(value);
    }
    if (Array.isArray(value)) {
        if (seen.has(value)) throw new TypeError("Material facts must not contain circular references.");
        seen.add(value);
        const serialized = `[${value.map((item) => stableSerialize(item, seen)).join(",")}]`;
        seen.delete(value);
        return serialized;
    }
    if (typeof value === "object") {
        if (seen.has(value)) throw new TypeError("Material facts must not contain circular references.");
        if (Object.prototype.toString.call(value) !== "[object Object]") {
            throw new TypeError("Material facts may contain only plain objects, arrays, and scalar values.");
        }
        seen.add(value);
        const keys = Object.keys(value).sort();
        const serialized = `{${keys.map((key) => `${JSON.stringify(key)}:${stableSerialize(value[key], seen)}`).join(",")}}`;
        seen.delete(value);
        return serialized;
    }
    throw new TypeError("Material facts may contain only JSON-compatible scalar, array, and plain-object values.");
}

function hashMaterialValue(value) {
    const serialized = stableSerialize(value);
    let hash = 0xcbf29ce484222325n;
    const prime = 0x100000001b3n;
    for (let index = 0; index < serialized.length; index += 1) {
        hash ^= BigInt(serialized.charCodeAt(index));
        hash = BigInt.asUintN(64, hash * prime);
    }
    return hash.toString(16).padStart(16, "0");
}

function normalizeMaterialFacts(materialFacts) {
    requireObject(materialFacts, "materialFacts");
    const actualKeys = Object.keys(materialFacts).sort();
    const expectedKeys = [...MATERIAL_FACT_DIMENSIONS].sort();
    if (JSON.stringify(actualKeys) !== JSON.stringify(expectedKeys)) {
        throw new TypeError(`materialFacts must contain exactly: ${expectedKeys.join(", ")}.`);
    }

    const fingerprints = {};
    for (const dimension of MATERIAL_FACT_DIMENSIONS) {
        fingerprints[dimension] = hashMaterialValue(materialFacts[dimension]);
    }
    return Object.freeze(fingerprints);
}

function captureSourceObservation({ sourceType, sourceId, sourceRevision, materialFacts }) {
    return Object.freeze({
        sourceType: requireNonEmptyText(sourceType, "sourceType"),
        sourceId: requireNonEmptyText(sourceId, "sourceId"),
        sourceRevision: requireRevisionToken(sourceRevision, "sourceRevision"),
        materialFingerprints: normalizeMaterialFacts(materialFacts)
    });
}

function normalizeSourceObservation(observation, label) {
    requireObject(observation, label);
    const sourceType = requireNonEmptyText(observation.sourceType, `${label}.sourceType`);
    const sourceId = requireNonEmptyText(observation.sourceId, `${label}.sourceId`);
    const sourceRevision = requireRevisionToken(observation.sourceRevision, `${label}.sourceRevision`);
    requireObject(observation.materialFingerprints, `${label}.materialFingerprints`);

    const actualKeys = Object.keys(observation.materialFingerprints).sort();
    const expectedKeys = [...MATERIAL_FACT_DIMENSIONS].sort();
    if (JSON.stringify(actualKeys) !== JSON.stringify(expectedKeys)) {
        throw new TypeError(`${label}.materialFingerprints must contain exactly the approved material dimensions.`);
    }

    const materialFingerprints = {};
    for (const dimension of MATERIAL_FACT_DIMENSIONS) {
        materialFingerprints[dimension] = requireNonEmptyText(
            observation.materialFingerprints[dimension],
            `${label}.materialFingerprints.${dimension}`
        );
    }

    return Object.freeze({
        sourceType,
        sourceId,
        sourceRevision,
        materialFingerprints: Object.freeze(materialFingerprints)
    });
}

function deriveChangedMaterialDimensions(baseline, currentObservation) {
    const baselineObservation = normalizeSourceObservation(baseline, "baseline");
    const current = normalizeSourceObservation(currentObservation, "currentObservation");
    if (baselineObservation.sourceType !== current.sourceType || baselineObservation.sourceId !== current.sourceId) {
        throw new TypeError("baseline and currentObservation must identify the same persistent source.");
    }

    return Object.freeze(
        MATERIAL_FACT_DIMENSIONS.filter(
            (dimension) => baselineObservation.materialFingerprints[dimension] !== current.materialFingerprints[dimension]
        )
    );
}

function normalizeDeltaDetails(deltaDetails) {
    if (!Array.isArray(deltaDetails)) {
        throw new TypeError("deltaDetails must be an array.");
    }
    return Object.freeze(
        deltaDetails.map((delta, index) => {
            requireObject(delta, `deltaDetails[${index}]`);
            const dimension = requireNonEmptyText(delta.dimension, `deltaDetails[${index}].dimension`);
            if (!MATERIAL_FACT_DIMENSIONS.includes(dimension)) {
                throw new TypeError(`deltaDetails[${index}].dimension is not an approved material dimension.`);
            }
            return Object.freeze({
                dimension,
                summary: requireNonEmptyText(delta.summary, `deltaDetails[${index}].summary`)
            });
        })
    );
}

function evaluateSourceChange(
    baseline,
    currentObservation,
    { intentStatus = CONTEXT_INTENT_STATUS.PRESERVED, deltaDetails = [] } = {}
) {
    const baselineObservation = normalizeSourceObservation(baseline, "baseline");
    const current = normalizeSourceObservation(currentObservation, "currentObservation");
    if (baselineObservation.sourceType !== current.sourceType || baselineObservation.sourceId !== current.sourceId) {
        throw new TypeError("baseline and currentObservation must identify the same persistent source.");
    }
    if (!Object.values(CONTEXT_INTENT_STATUS).includes(intentStatus)) {
        throw new TypeError(`Unsupported intentStatus: ${JSON.stringify(intentStatus)}.`);
    }

    const changedDimensions = deriveChangedMaterialDimensions(baselineObservation, current);
    const materialChanged = changedDimensions.length > 0;
    const sourceRevisionChanged = !Object.is(baselineObservation.sourceRevision, current.sourceRevision);
    const explicitResolutionRequired = intentStatus === CONTEXT_INTENT_STATUS.REQUIRES_EXPLICIT_RESOLUTION;
    const status = explicitResolutionRequired
        ? SOURCE_CHANGE_STATUS.REQUIRES_EXPLICIT_RESOLUTION
        : materialChanged
            ? SOURCE_CHANGE_STATUS.CHANGED_SINCE_CONFIRMATION
            : SOURCE_CHANGE_STATUS.UNCHANGED;

    return Object.freeze({
        status,
        source: Object.freeze({ sourceType: current.sourceType, sourceId: current.sourceId }),
        baselineSourceRevision: baselineObservation.sourceRevision,
        currentSourceRevision: current.sourceRevision,
        sourceRevisionChanged,
        materialChanged,
        descriptiveOnlyChange: sourceRevisionChanged && !materialChanged && !explicitResolutionRequired,
        changedDimensions,
        deltaDetails: normalizeDeltaDetails(deltaDetails),
        useCurrentTruth: true,
        dependentDerivedResultsStale: materialChanged || explicitResolutionRequired,
        explicitResolutionRequired,
        confirmationRemainsValid: !explicitResolutionRequired
    });
}

function advanceSourceObservationBaseline({
    expectedContextRevision,
    currentContextRevision,
    expectedSourceRevision,
    currentObservation
}) {
    const expectedContext = requireRevisionToken(expectedContextRevision, "expectedContextRevision");
    const currentContext = requireRevisionToken(currentContextRevision, "currentContextRevision");
    const expectedSource = requireRevisionToken(expectedSourceRevision, "expectedSourceRevision");
    const current = normalizeSourceObservation(currentObservation, "currentObservation");
    const staleReasons = [];

    if (!Object.is(expectedContext, currentContext)) {
        staleReasons.push(SOURCE_ACKNOWLEDGEMENT_STALE_REASON.CONTEXT_REVISION_CHANGED);
    }
    if (!Object.is(expectedSource, current.sourceRevision)) {
        staleReasons.push(SOURCE_ACKNOWLEDGEMENT_STALE_REASON.SOURCE_REVISION_CHANGED);
    }

    if (staleReasons.length > 0) {
        return Object.freeze({
            status: SOURCE_ACKNOWLEDGEMENT_STATUS.STALE,
            baseline: null,
            staleReasons: Object.freeze(staleReasons)
        });
    }

    return Object.freeze({
        status: SOURCE_ACKNOWLEDGEMENT_STATUS.ADVANCED,
        baseline: current,
        staleReasons: Object.freeze([])
    });
}
