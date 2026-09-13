/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: recommendation-engine.js
   PURPOSE: Owns bounded What Should I Throw runtime semantics
   for Recommendation candidate identity, executability,
   simplicity, legal evaluation, and context freshness.
   ========================================================== */

"use strict";

const RECOMMENDATION_ENGINE_BUILD_INFO = Object.freeze({
    file: "recommendation-engine.js",
    milestone: "GATE-004 — What Should I Throw"
});

const RECOMMENDATION_EXECUTABILITY_STATUS = Object.freeze({
    EXECUTABLE: "executable",
    NOT_CURRENTLY_EXECUTABLE: "not-currently-executable",
    EXECUTABILITY_UNCONFIRMED: "executability-unconfirmed"
});

const RECOMMENDATION_REQUIREMENT_PROOF_STATUS = Object.freeze({
    PROVEN: "proven",
    KNOWN_FAILURE: "known-failure",
    UNCONFIRMED: "unconfirmed"
});

const RECOMMENDATION_LEGAL_STATUS = Object.freeze({
    NOT_EVALUATED: "not-evaluated",
    NO_KNOWN_BLOCKING_CONSTRAINT: "no-known-blocking-constraint",
    BLOCKED_BY_KNOWN_CONSTRAINT: "blocked-by-known-constraint",
    COMPLIANCE_UNCONFIRMED: "compliance-unconfirmed"
});

const RECOMMENDATION_SIMPLICITY_PREFERENCE = Object.freeze({
    FIRST: "first",
    SECOND: "second",
    NONE: "none"
});

const CANONICAL_ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function requirePlainObject(value, label) {
    if (!value || typeof value !== "object" || Array.isArray(value) || Object.prototype.toString.call(value) !== "[object Object]") {
        throw new TypeError(`${label} must be a plain object.`);
    }
    return value;
}

function requireExactObjectKeys(value, expectedKeys, label) {
    requirePlainObject(value, label);
    const actualKeys = Object.keys(value).sort();
    const normalizedExpected = [...expectedKeys].sort();
    if (JSON.stringify(actualKeys) !== JSON.stringify(normalizedExpected)) {
        throw new TypeError(`${label} must contain exactly: ${normalizedExpected.join(", ")}.`);
    }
    return value;
}

function requireCanonicalId(value, label) {
    if (typeof value !== "string" || !CANONICAL_ID_PATTERN.test(value)) {
        throw new TypeError(`${label} must be a canonical ID.`);
    }
    return value;
}

function requireOptionalCanonicalId(value, label) {
    return value === null ? null : requireCanonicalId(value, label);
}

function requireBoolean(value, label) {
    if (typeof value !== "boolean") {
        throw new TypeError(`${label} must be Boolean.`);
    }
    return value;
}

function requireNonNegativeWholeNumber(value, label) {
    if (!Number.isInteger(value) || value < 0) {
        throw new TypeError(`${label} must be a non-negative whole number.`);
    }
    return value;
}

function normalizeJsonValue(value, label, seen = new Set()) {
    if (value === null || typeof value === "string" || typeof value === "boolean") {
        return value;
    }
    if (typeof value === "number") {
        if (!Number.isFinite(value)) {
            throw new TypeError(`${label} may contain only finite numbers.`);
        }
        return Object.is(value, -0) ? 0 : value;
    }
    if (Array.isArray(value)) {
        if (seen.has(value)) throw new TypeError(`${label} must not contain circular references.`);
        seen.add(value);
        const normalized = Object.freeze(
            value.map((item, index) => normalizeJsonValue(item, `${label}[${index}]`, seen))
        );
        seen.delete(value);
        return normalized;
    }
    if (value && typeof value === "object" && Object.prototype.toString.call(value) === "[object Object]") {
        if (seen.has(value)) throw new TypeError(`${label} must not contain circular references.`);
        seen.add(value);
        const normalized = {};
        for (const key of Object.keys(value).sort()) {
            if (key.trim() === "") {
                throw new TypeError(`${label} contains an empty object key.`);
            }
            normalized[key] = normalizeJsonValue(value[key], `${label}.${key}`, seen);
        }
        seen.delete(value);
        return Object.freeze(normalized);
    }
    throw new TypeError(`${label} may contain only JSON-compatible scalar, array, and plain-object values.`);
}

function stableSerialize(value) {
    if (value === null) return "null";
    if (typeof value === "string") return JSON.stringify(value);
    if (typeof value === "boolean") return value ? "true" : "false";
    if (typeof value === "number") return String(value);
    if (Array.isArray(value)) return `[${value.map(stableSerialize).join(",")}]`;
    const keys = Object.keys(value).sort();
    return `{${keys.map((key) => `${JSON.stringify(key)}:${stableSerialize(value[key])}`).join(",")}}`;
}

function hashStableValue(value) {
    const serialized = stableSerialize(value);
    let hash = 0xcbf29ce484222325n;
    const prime = 0x100000001b3n;
    for (let index = 0; index < serialized.length; index += 1) {
        hash ^= BigInt(serialized.charCodeAt(index));
        hash = BigInt.asUintN(64, hash * prime);
    }
    return hash.toString(16).padStart(16, "0");
}

function createRecommendationCandidateIdentity(input) {
    const candidate = requireExactObjectKeys(
        input,
        ["rigId", "rigConfigurationId", "lureBaitId", "techniqueId", "parameters"],
        "candidate"
    );
    const identity = Object.freeze({
        rigId: requireCanonicalId(candidate.rigId, "candidate.rigId"),
        rigConfigurationId: requireOptionalCanonicalId(candidate.rigConfigurationId, "candidate.rigConfigurationId"),
        lureBaitId: requireOptionalCanonicalId(candidate.lureBaitId, "candidate.lureBaitId"),
        techniqueId: requireCanonicalId(candidate.techniqueId, "candidate.techniqueId"),
        parameters: normalizeJsonValue(requirePlainObject(candidate.parameters, "candidate.parameters"), "candidate.parameters")
    });
    return Object.freeze({
        ...identity,
        candidateKey: `candidate-${hashStableValue(identity)}`
    });
}

function deriveRecommendationExecutability(input) {
    const value = requireExactObjectKeys(
        input,
        ["hasConfirmedAvailabilityContext", "requirementProofs"],
        "executability input"
    );
    const hasConfirmedAvailabilityContext = requireBoolean(
        value.hasConfirmedAvailabilityContext,
        "executability input.hasConfirmedAvailabilityContext"
    );
    if (!Array.isArray(value.requirementProofs)) {
        throw new TypeError("executability input.requirementProofs must be an array.");
    }

    const allowedProofs = Object.values(RECOMMENDATION_REQUIREMENT_PROOF_STATUS);
    const requirementProofs = value.requirementProofs.map((proof, index) => {
        if (!allowedProofs.includes(proof)) {
            throw new TypeError(`executability input.requirementProofs[${index}] is unsupported.`);
        }
        return proof;
    });

    let status = RECOMMENDATION_EXECUTABILITY_STATUS.EXECUTABLE;
    if (!hasConfirmedAvailabilityContext) {
        status = RECOMMENDATION_EXECUTABILITY_STATUS.EXECUTABILITY_UNCONFIRMED;
    } else if (requirementProofs.includes(RECOMMENDATION_REQUIREMENT_PROOF_STATUS.KNOWN_FAILURE)) {
        status = RECOMMENDATION_EXECUTABILITY_STATUS.NOT_CURRENTLY_EXECUTABLE;
    } else if (requirementProofs.includes(RECOMMENDATION_REQUIREMENT_PROOF_STATUS.UNCONFIRMED)) {
        status = RECOMMENDATION_EXECUTABILITY_STATUS.EXECUTABILITY_UNCONFIRMED;
    }

    return Object.freeze({
        status,
        hasConfirmedAvailabilityContext,
        requirementCount: requirementProofs.length,
        eligibleForBestCurrentlyAvailable: status === RECOMMENDATION_EXECUTABILITY_STATUS.EXECUTABLE
    });
}

function deriveRecommendationLegalEvaluation(input) {
    const value = requireExactObjectKeys(input, ["status"], "legal evaluation input");
    const allowedStatuses = Object.values(RECOMMENDATION_LEGAL_STATUS);
    if (!allowedStatuses.includes(value.status)) {
        throw new TypeError(`Unsupported Recommendation legal status: ${JSON.stringify(value.status)}.`);
    }

    const blockedByKnownConstraint = value.status === RECOMMENDATION_LEGAL_STATUS.BLOCKED_BY_KNOWN_CONSTRAINT;
    return Object.freeze({
        status: value.status,
        blockedByKnownConstraint,
        eligibleForRecommendationRanking: !blockedByKnownConstraint,
        claimsLegalCompliance: false
    });
}

function deriveSimplicityPreference(input) {
    const value = requireExactObjectKeys(
        input,
        ["isNearTie", "firstDifficultyRank", "secondDifficultyRank", "firstIsCore", "secondIsCore"],
        "simplicity input"
    );
    const isNearTie = requireBoolean(value.isNearTie, "simplicity input.isNearTie");
    const firstDifficultyRank = requireNonNegativeWholeNumber(value.firstDifficultyRank, "simplicity input.firstDifficultyRank");
    const secondDifficultyRank = requireNonNegativeWholeNumber(value.secondDifficultyRank, "simplicity input.secondDifficultyRank");
    const firstIsCore = requireBoolean(value.firstIsCore, "simplicity input.firstIsCore");
    const secondIsCore = requireBoolean(value.secondIsCore, "simplicity input.secondIsCore");

    if (!isNearTie) return RECOMMENDATION_SIMPLICITY_PREFERENCE.NONE;
    if (firstDifficultyRank < secondDifficultyRank) return RECOMMENDATION_SIMPLICITY_PREFERENCE.FIRST;
    if (secondDifficultyRank < firstDifficultyRank) return RECOMMENDATION_SIMPLICITY_PREFERENCE.SECOND;
    if (firstIsCore !== secondIsCore) {
        return firstIsCore
            ? RECOMMENDATION_SIMPLICITY_PREFERENCE.FIRST
            : RECOMMENDATION_SIMPLICITY_PREFERENCE.SECOND;
    }
    return RECOMMENDATION_SIMPLICITY_PREFERENCE.NONE;
}

function evaluateRecommendationContextFreshness(input) {
    const value = requireExactObjectKeys(
        input,
        [
            "wasExplicitlyActivated",
            "sameSession",
            "sameCalendarDay",
            "materialBaseContextChanged",
            "explicitReset",
            "sessionLost"
        ],
        "context freshness input"
    );
    const wasExplicitlyActivated = requireBoolean(value.wasExplicitlyActivated, "context freshness input.wasExplicitlyActivated");
    const sameSession = requireBoolean(value.sameSession, "context freshness input.sameSession");
    const sameCalendarDay = requireBoolean(value.sameCalendarDay, "context freshness input.sameCalendarDay");
    const materialBaseContextChanged = requireBoolean(value.materialBaseContextChanged, "context freshness input.materialBaseContextChanged");
    const explicitReset = requireBoolean(value.explicitReset, "context freshness input.explicitReset");
    const sessionLost = requireBoolean(value.sessionLost, "context freshness input.sessionLost");

    if (sameSession && sessionLost) {
        throw new TypeError("context freshness input cannot be both sameSession and sessionLost.");
    }

    if (explicitReset) {
        return Object.freeze({
            current: false,
            resultsStale: true,
            explicitReuseRequired: false,
            retainedValuesMayBeOffered: false
        });
    }

    if (!wasExplicitlyActivated) {
        return Object.freeze({
            current: false,
            resultsStale: true,
            explicitReuseRequired: false,
            retainedValuesMayBeOffered: true
        });
    }

    const explicitReuseRequired = !sameCalendarDay || sessionLost || !sameSession || materialBaseContextChanged;
    return Object.freeze({
        current: !explicitReuseRequired,
        resultsStale: explicitReuseRequired,
        explicitReuseRequired,
        retainedValuesMayBeOffered: explicitReuseRequired
    });
}

function deriveRecommendationResultInvalidation(input) {
    const value = requireExactObjectKeys(
        input,
        [
            "contextChanged",
            "referenceKnowledgeChanged",
            "decisionKnowledgeChanged",
            "legalConstraintsChanged",
            "availabilityChanged"
        ],
        "result invalidation input"
    );
    const contextChanged = requireBoolean(value.contextChanged, "result invalidation input.contextChanged");
    const referenceKnowledgeChanged = requireBoolean(value.referenceKnowledgeChanged, "result invalidation input.referenceKnowledgeChanged");
    const decisionKnowledgeChanged = requireBoolean(value.decisionKnowledgeChanged, "result invalidation input.decisionKnowledgeChanged");
    const legalConstraintsChanged = requireBoolean(value.legalConstraintsChanged, "result invalidation input.legalConstraintsChanged");
    const availabilityChanged = requireBoolean(value.availabilityChanged, "result invalidation input.availabilityChanged");

    const bestOverallStale = contextChanged || referenceKnowledgeChanged || decisionKnowledgeChanged || legalConstraintsChanged;
    return Object.freeze({
        bestOverallStale,
        bestCurrentlyAvailableStale: bestOverallStale || availabilityChanged
    });
}
