/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: availability-quantity.js
   PURPOSE: Derives quantity sufficiency and functional-pool
   depletion from effective confirmed current availability.
   ========================================================== */

"use strict";

const AVAILABILITY_QUANTITY_BUILD_INFO = Object.freeze({
    file: "availability-quantity.js",
    milestone: "GATE-007 — My Tackle Availability Foundation"
});

const QUANTITY_SUFFICIENCY_STATUS = Object.freeze({
    KNOWN_SUFFICIENT: "known-sufficient",
    KNOWN_INSUFFICIENT: "known-insufficient",
    SUFFICIENCY_UNKNOWN: "sufficiency-unknown"
});

const FUNCTIONAL_POOL_QUANTITY_STATUS = Object.freeze({
    KNOWN_POSITIVE: "known-positive",
    DEPLETED: "depleted",
    QUANTITY_UNKNOWN: "quantity-unknown"
});

const QUANTITY_EVIDENCE_TYPE = Object.freeze({
    PHYSICAL_ITEM: "physical-item",
    KNOWN_QUANTITY: "known-quantity",
    AT_LEAST: "at-least",
    UNKNOWN_PRESENT: "unknown-present"
});

function requirePositiveWholeNumber(value, label) {
    if (!Number.isInteger(value) || value < 1) {
        throw new TypeError(`${label} must be a positive whole number.`);
    }
    return value;
}

function requireNonNegativeWholeNumber(value, label) {
    if (!Number.isInteger(value) || value < 0) {
        throw new TypeError(`${label} must be a non-negative whole number.`);
    }
    return value;
}

function deriveFunctionalPoolQuantityStatus(ownedQuantity) {
    if (ownedQuantity === undefined || ownedQuantity === null) {
        return FUNCTIONAL_POOL_QUANTITY_STATUS.QUANTITY_UNKNOWN;
    }

    requireNonNegativeWholeNumber(ownedQuantity, "ownedQuantity");
    return ownedQuantity === 0
        ? FUNCTIONAL_POOL_QUANTITY_STATUS.DEPLETED
        : FUNCTIONAL_POOL_QUANTITY_STATUS.KNOWN_POSITIVE;
}

function getQuantityContributionBounds(contribution) {
    if (!contribution || typeof contribution !== "object" || Array.isArray(contribution)) {
        throw new TypeError("Quantity contribution must be an object.");
    }

    switch (contribution.type) {
        case QUANTITY_EVIDENCE_TYPE.PHYSICAL_ITEM:
            return { minimum: 1, exact: 1 };

        case QUANTITY_EVIDENCE_TYPE.KNOWN_QUANTITY: {
            const quantity = requireNonNegativeWholeNumber(contribution.quantity, "known quantity");
            return { minimum: quantity, exact: quantity };
        }

        case QUANTITY_EVIDENCE_TYPE.AT_LEAST: {
            const quantity = requirePositiveWholeNumber(contribution.quantity, "at-least quantity");
            return { minimum: quantity, exact: null };
        }

        case QUANTITY_EVIDENCE_TYPE.UNKNOWN_PRESENT:
            return { minimum: 1, exact: null };

        default:
            throw new TypeError(`Unsupported quantity evidence type: ${JSON.stringify(contribution.type)}`);
    }
}

/*
 * Contributions must already represent distinct, compatible, effectively
 * available sources after CA-2 source resolution/deduplication. This resolver
 * derives quantity proof only; it does not infer identity, availability,
 * compatibility, allocation, or canonical mapping.
 */
function resolveQuantitySufficiency(requiredQuantity, contributions) {
    const required = requirePositiveWholeNumber(requiredQuantity, "requiredQuantity");
    if (!Array.isArray(contributions)) {
        throw new TypeError("contributions must be an array.");
    }

    let confirmedMinimum = 0;
    let exactAvailableQuantity = 0;
    let allEvidenceExact = true;

    for (const contribution of contributions) {
        const bounds = getQuantityContributionBounds(contribution);
        confirmedMinimum += bounds.minimum;
        if (bounds.exact === null) {
            allEvidenceExact = false;
        } else {
            exactAvailableQuantity += bounds.exact;
        }
    }

    const status = confirmedMinimum >= required
        ? QUANTITY_SUFFICIENCY_STATUS.KNOWN_SUFFICIENT
        : allEvidenceExact
            ? QUANTITY_SUFFICIENCY_STATUS.KNOWN_INSUFFICIENT
            : QUANTITY_SUFFICIENCY_STATUS.SUFFICIENCY_UNKNOWN;

    return Object.freeze({
        status,
        requiredQuantity: required,
        confirmedMinimum,
        exactAvailableQuantity: allEvidenceExact ? exactAvailableQuantity : null
    });
}

console.info(`[Loaded] ${AVAILABILITY_QUANTITY_BUILD_INFO.file} | ${AVAILABILITY_QUANTITY_BUILD_INFO.milestone}`);
