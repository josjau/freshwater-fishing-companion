/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: availability-attention.js
   PURPOSE: Derives capability-scoped Needs Attention diagnostics
   from already-established authoritative conditions.
   ========================================================== */

"use strict";

const AVAILABILITY_ATTENTION_BUILD_INFO = Object.freeze({
    file: "availability-attention.js",
    milestone: "GATE-007 — My Tackle Availability Foundation"
});

const ATTENTION_CLASS = Object.freeze({
    ADVISORY: "advisory",
    AUTOMATION_BLOCKER: "automation-blocker",
    CONFLICT: "conflict"
});

const ATTENTION_CAPABILITY = Object.freeze({
    ORGANIZATION: "organization",
    CANONICAL_AUTOMATION: "canonical-automation",
    FAMILY_VALIDATION: "family-validation",
    FISHING_SETUP_AUTOMATION: "fishing-setup-automation",
    ALLOCATION_INTEGRITY: "allocation-integrity",
    CURRENT_CONTEXT_INTEGRITY: "current-context-integrity"
});

const ATTENTION_CONDITION = Object.freeze({
    UNASSIGNED_OWNERSHIP: "unassigned-ownership",
    CANONICAL_MAPPING_MISSING: "canonical-mapping-missing",
    CANONICAL_MAPPING_INVALID: "canonical-mapping-invalid",
    REQUIRED_STRUCTURE_INVALID: "required-structure-invalid",
    SETUP_REFERENCE_MISSING: "setup-reference-missing",
    SETUP_REQUIRED_EQUIPMENT_EXCLUDED: "setup-required-equipment-excluded",
    SETUP_KNOWN_INCOMPATIBILITY: "setup-known-incompatibility",
    SETUP_HARD_CONFIGURATION_CONFLICT: "setup-hard-configuration-conflict",
    LOCATION_ALLOCATIONS_EXCEED_OWNED_QUANTITY: "location-allocations-exceed-owned-quantity",
    DEPLETED_POOL_WITH_POSITIVE_ALLOCATION: "depleted-pool-with-positive-allocation",
    CURRENT_CONTEXT_CONFIGURATION_CONFLICT: "current-context-configuration-conflict"
});

const FORBIDDEN_PERSISTED_ATTENTION_FIELDS = Object.freeze([
    "needsAttention",
    "attentionStatus",
    "isBroken",
    "automationReady"
]);

const ATTENTION_RULES = Object.freeze({
    [ATTENTION_CONDITION.UNASSIGNED_OWNERSHIP]: Object.freeze({
        attentionClass: ATTENTION_CLASS.ADVISORY,
        capability: ATTENTION_CAPABILITY.ORGANIZATION,
        reason: "Owned tackle is valid but currently unassigned to an Inventory Location.",
        impact: "Organization only; direct My Tackle current-availability selection remains valid.",
        repairDirection: "Assign the item or pool to a Location if organization is desired."
    }),
    [ATTENTION_CONDITION.CANONICAL_MAPPING_MISSING]: Object.freeze({
        attentionClass: ATTENTION_CLASS.AUTOMATION_BLOCKER,
        capability: ATTENTION_CAPABILITY.CANONICAL_AUTOMATION,
        reason: "No explicit valid FCC Reference Knowledge mapping is available for the required canonical capability.",
        impact: "Canonical Rig or Recommendation satisfaction cannot be established through this record.",
        repairDirection: "Explicitly confirm a valid canonical mapping when one is known."
    }),
    [ATTENTION_CONDITION.CANONICAL_MAPPING_INVALID]: Object.freeze({
        attentionClass: ATTENTION_CLASS.AUTOMATION_BLOCKER,
        capability: ATTENTION_CAPABILITY.CANONICAL_AUTOMATION,
        reason: "The explicit FCC Reference Knowledge mapping does not resolve to an active automation-valid target.",
        impact: "Canonical Rig or Recommendation satisfaction cannot be established through the invalid mapping.",
        repairDirection: "Reconcile or explicitly replace the stale/invalid mapping; G7-REFS owns repair mechanics."
    }),
    [ATTENTION_CONDITION.REQUIRED_STRUCTURE_INVALID]: Object.freeze({
        attentionClass: ATTENTION_CLASS.AUTOMATION_BLOCKER,
        capability: ATTENTION_CAPABILITY.FAMILY_VALIDATION,
        reason: "Required family-contract structure is missing, malformed, or invalid.",
        impact: "The affected automated capability cannot rely on this record until required structure is valid.",
        repairDirection: "Repair the required family-contract structure without converting permitted Unknown values into invented facts."
    }),
    [ATTENTION_CONDITION.SETUP_REFERENCE_MISSING]: Object.freeze({
        attentionClass: ATTENTION_CLASS.AUTOMATION_BLOCKER,
        capability: ATTENTION_CAPABILITY.FISHING_SETUP_AUTOMATION,
        reason: "The Fishing Setup references required equipment that is missing or no longer resolves.",
        impact: "Setup-level automation cannot establish a usable Setup.",
        repairDirection: "Repair the missing Rod/Reel/equipment reference or intentionally revise the Setup."
    }),
    [ATTENTION_CONDITION.SETUP_REQUIRED_EQUIPMENT_EXCLUDED]: Object.freeze({
        attentionClass: ATTENTION_CLASS.AUTOMATION_BLOCKER,
        capability: ATTENTION_CAPABILITY.FISHING_SETUP_AUTOMATION,
        reason: "Required Setup equipment is explicitly excluded from the current availability context.",
        impact: "The selected Setup cannot be used for current-context automation while required equipment is excluded.",
        repairDirection: "Change the current-context exclusion or select a Setup whose required equipment is actually available."
    }),
    [ATTENTION_CONDITION.SETUP_KNOWN_INCOMPATIBILITY]: Object.freeze({
        attentionClass: ATTENTION_CLASS.AUTOMATION_BLOCKER,
        capability: ATTENTION_CAPABILITY.FISHING_SETUP_AUTOMATION,
        reason: "Known Fishing Setup equipment is hard-incompatible.",
        impact: "Setup-level automation cannot treat the Setup as usable.",
        repairDirection: "Revise the Setup equipment/configuration so the known hard incompatibility is resolved."
    }),
    [ATTENTION_CONDITION.SETUP_HARD_CONFIGURATION_CONFLICT]: Object.freeze({
        attentionClass: ATTENTION_CLASS.AUTOMATION_BLOCKER,
        capability: ATTENTION_CAPABILITY.FISHING_SETUP_AUTOMATION,
        reason: "The Fishing Setup contains a known hard configuration conflict.",
        impact: "Setup-level automation cannot establish a usable Setup.",
        repairDirection: "Resolve the conflicting Setup configuration while preserving truthful equipment knowledge."
    }),
    [ATTENTION_CONDITION.LOCATION_ALLOCATIONS_EXCEED_OWNED_QUANTITY]: Object.freeze({
        attentionClass: ATTENTION_CLASS.CONFLICT,
        capability: ATTENTION_CAPABILITY.ALLOCATION_INTEGRITY,
        reason: "Known active Location allocations exceed the known owned quantity.",
        impact: "The authoritative allocation and ownership facts cannot simultaneously be true.",
        repairDirection: "Explicitly reconcile owned quantity and Location allocations; do not manufacture a remainder or silently choose a value."
    }),
    [ATTENTION_CONDITION.DEPLETED_POOL_WITH_POSITIVE_ALLOCATION]: Object.freeze({
        attentionClass: ATTENTION_CLASS.CONFLICT,
        capability: ATTENTION_CAPABILITY.ALLOCATION_INTEGRITY,
        reason: "A known depleted functional pool has positive active Location allocation.",
        impact: "The authoritative depletion and allocation facts contradict one another.",
        repairDirection: "Explicitly reconcile stock and Location allocation; do not silently restock or remove allocation."
    }),
    [ATTENTION_CONDITION.CURRENT_CONTEXT_CONFIGURATION_CONFLICT]: Object.freeze({
        attentionClass: ATTENTION_CLASS.CONFLICT,
        capability: ATTENTION_CAPABILITY.CURRENT_CONTEXT_INTEGRITY,
        reason: "Known current-context configuration facts are mutually contradictory.",
        impact: "Current-context automation cannot safely determine one truthful configuration.",
        repairDirection: "Explicitly resolve the contradictory current-context configuration facts."
    })
});

function requireNonEmptyText(value, label) {
    if (typeof value !== "string" || value.trim() === "") {
        throw new TypeError(`${label} must be non-empty text.`);
    }
    return value.trim();
}

function normalizeAttentionSubject(subject) {
    if (!subject || typeof subject !== "object" || Array.isArray(subject)) {
        throw new TypeError("subject must be an object.");
    }
    return Object.freeze({
        type: requireNonEmptyText(subject.type, "subject.type"),
        id: requireNonEmptyText(subject.id, "subject.id")
    });
}

function assertNoPersistedAttentionAuthority(record) {
    if (!record || typeof record !== "object" || Array.isArray(record)) {
        throw new TypeError("record must be an object.");
    }
    for (const field of FORBIDDEN_PERSISTED_ATTENTION_FIELDS) {
        if (Object.prototype.hasOwnProperty.call(record, field)) {
            throw new TypeError(`${field} must not be persisted as an authoritative status field.`);
        }
    }
    return true;
}

function deriveAttentionDiagnostic(observation) {
    if (!observation || typeof observation !== "object" || Array.isArray(observation)) {
        throw new TypeError("attention observation must be an object.");
    }
    if (observation.active === false) {
        return null;
    }
    if (observation.active !== true) {
        throw new TypeError("attention observation active must be Boolean true/false.");
    }

    const rule = ATTENTION_RULES[observation.condition];
    if (!rule) {
        throw new TypeError(`Unsupported attention condition: ${JSON.stringify(observation.condition)}`);
    }

    const details = observation.details === undefined
        ? Object.freeze({})
        : (() => {
            if (!observation.details || typeof observation.details !== "object" || Array.isArray(observation.details)) {
                throw new TypeError("attention observation details must be an object when supplied.");
            }
            return Object.freeze({ ...observation.details });
        })();

    return Object.freeze({
        subject: normalizeAttentionSubject(observation.subject),
        condition: observation.condition,
        reason: rule.reason,
        impact: rule.impact,
        attentionClass: rule.attentionClass,
        capability: rule.capability,
        repairDirection: rule.repairDirection,
        details
    });
}

/*
 * Callers must establish each condition from authoritative inputs before
 * passing it here. Legitimate Unknown, Map Later, Assign Later, unassigned,
 * quantity-unknown, Sufficiency Unknown, depletion, optional uncaptured data,
 * and Unverified states do not become defects merely by existing. A condition
 * is active only when the governing capability has established the approved
 * Advisory/Blocker/Conflict case represented by ATTENTION_CONDITION.
 */
function deriveNeedsAttentionDiagnostics(observations) {
    if (!Array.isArray(observations)) {
        throw new TypeError("observations must be an array.");
    }

    const diagnostics = [];
    for (const observation of observations) {
        const diagnostic = deriveAttentionDiagnostic(observation);
        if (diagnostic !== null) diagnostics.push(diagnostic);
    }
    return Object.freeze(diagnostics);
}

function hasAttentionClass(diagnostics, attentionClass) {
    if (!Array.isArray(diagnostics)) {
        throw new TypeError("diagnostics must be an array.");
    }
    if (!Object.values(ATTENTION_CLASS).includes(attentionClass)) {
        throw new TypeError(`Unsupported attention class: ${JSON.stringify(attentionClass)}`);
    }
    return diagnostics.some((diagnostic) => diagnostic?.attentionClass === attentionClass);
}

console.info(`[Loaded] ${AVAILABILITY_ATTENTION_BUILD_INFO.file} | ${AVAILABILITY_ATTENTION_BUILD_INFO.milestone}`);
