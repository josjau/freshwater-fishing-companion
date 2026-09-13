/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: my-tackle-reconciliation.js
   PURPOSE: Provides bounded G7-REFS reconciliation primitives
   for My Tackle Merge/Split and dependent stable references.
   ========================================================== */

"use strict";

const MY_TACKLE_RECONCILIATION_BUILD_INFO = Object.freeze({
    file: "my-tackle-reconciliation.js",
    milestone: "GATE-007 — My Tackle Availability Foundation"
});

const RECONCILIATION_STATUS = Object.freeze({
    READY: "ready",
    REQUIRES_EXPLICIT_RESOLUTION: "requires-explicit-resolution",
    STALE: "stale"
});

const RECONCILIATION_ISSUE = Object.freeze({
    MERGE_MAPPING_CONFIRMATION_REQUIRED: "merge-mapping-confirmation-required",
    MERGE_MAPPING_CONFLICT: "merge-mapping-conflict",
    MERGE_RESTRICTION_BROADENING_RISK: "merge-restriction-broadening-risk",
    SPLIT_QUANTITY_DISTRIBUTION_REQUIRED: "split-quantity-distribution-required",
    SPLIT_QUANTITY_CONSERVATION_FAILED: "split-quantity-conservation-failed",
    SPLIT_LOCATION_DISTRIBUTION_REQUIRED: "split-location-distribution-required",
    SPLIT_LOCATION_CONSERVATION_FAILED: "split-location-conservation-failed",
    SPLIT_CURRENT_AVAILABILITY_ASSIGNMENT_REQUIRED: "split-current-availability-assignment-required",
    STALE_RECONCILIATION_PLAN: "stale-reconciliation-plan",
    RETIRED_REFERENCE_AMBIGUOUS: "retired-reference-ambiguous",
    CANONICAL_MIGRATION_TARGET_UNAVAILABLE: "canonical-migration-target-unavailable"
});

const CANONICAL_REFERENCE_MIGRATIONS = Object.freeze([
    Object.freeze({
        migrationId: "tackle-fixed-sinker-to-external-eye-sinker",
        migrationVersion: 1,
        referenceDomain: "tackle",
        fromReferenceId: "fixed-sinker",
        toReferenceId: "external-eye-sinker"
    }),
    Object.freeze({
        migrationId: "tackle-offset-worm-hook-to-worm-hook",
        migrationVersion: 1,
        referenceDomain: "tackle",
        fromReferenceId: "offset-worm-hook",
        toReferenceId: "worm-hook"
    }),
    Object.freeze({
        migrationId: "tackle-ringed-sinker-to-external-eye-sinker",
        migrationVersion: 1,
        referenceDomain: "tackle",
        fromReferenceId: "ringed-sinker",
        toReferenceId: "external-eye-sinker"
    }),
    Object.freeze({
        migrationId: "tackle-split-shot-to-line-mounted-sinker",
        migrationVersion: 1,
        referenceDomain: "tackle",
        fromReferenceId: "split-shot",
        toReferenceId: "line-mounted-sinker"
    })
]);

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

function normalizeKnownOrUnknownQuantity(value, label) {
    if (value === undefined || value === null) {
        return null;
    }
    if (!Number.isInteger(value) || value < 0) {
        throw new TypeError(`${label} must be a non-negative whole number or Unknown.`);
    }
    return value;
}

function freezeIssue(issue, details = {}) {
    return Object.freeze({
        issue,
        details: Object.freeze({ ...details })
    });
}

function freezeResult(status, fields = {}) {
    return Object.freeze({ status, ...fields });
}

function normalizeUniqueTextList(values, label) {
    if (!Array.isArray(values)) {
        throw new TypeError(`${label} must be an array.`);
    }
    const normalized = values.map((value, index) => requireNonEmptyText(value, `${label}[${index}]`));
    if (new Set(normalized).size !== normalized.length) {
        throw new TypeError(`${label} must not contain duplicate values.`);
    }
    return normalized;
}

function normalizeReferenceMappings(mappings, label) {
    if (!Array.isArray(mappings)) {
        throw new TypeError(`${label} must be an array.`);
    }

    const seenDomains = new Set();
    const normalized = mappings.map((mapping, index) => {
        requireObject(mapping, `${label}[${index}]`);
        const referenceDomain = requireNonEmptyText(mapping.referenceDomain, `${label}[${index}].referenceDomain`);
        const referenceId = requireNonEmptyText(mapping.referenceId, `${label}[${index}].referenceId`);
        if (seenDomains.has(referenceDomain)) {
            throw new TypeError(`${label} must contain at most one mapping per referenceDomain.`);
        }
        seenDomains.add(referenceDomain);
        return Object.freeze({ referenceDomain, referenceId });
    });

    return Object.freeze(normalized.sort((a, b) => a.referenceDomain.localeCompare(b.referenceDomain)));
}

function combineKnownOrUnknownQuantities(leftQuantity, rightQuantity) {
    const left = normalizeKnownOrUnknownQuantity(leftQuantity, "leftQuantity");
    const right = normalizeKnownOrUnknownQuantity(rightQuantity, "rightQuantity");
    if (left === null || right === null) {
        return null;
    }
    return left + right;
}

function normalizeLocationAllocations(allocations, label) {
    if (!Array.isArray(allocations)) {
        throw new TypeError(`${label} must be an array.`);
    }
    const seen = new Set();
    const normalized = allocations.map((allocation, index) => {
        requireObject(allocation, `${label}[${index}]`);
        const locationId = requireNonEmptyText(allocation.locationId, `${label}[${index}].locationId`);
        if (seen.has(locationId)) {
            throw new TypeError(`${label} must contain at most one allocation per locationId.`);
        }
        seen.add(locationId);
        return Object.freeze({
            locationId,
            quantity: normalizeKnownOrUnknownQuantity(allocation.quantity, `${label}[${index}].quantity`)
        });
    });
    return Object.freeze(normalized.sort((a, b) => a.locationId.localeCompare(b.locationId)));
}

function mergeLocationAllocations(leftAllocations, rightAllocations) {
    const left = normalizeLocationAllocations(leftAllocations, "leftAllocations");
    const right = normalizeLocationAllocations(rightAllocations, "rightAllocations");
    const merged = new Map();

    for (const allocation of left) {
        merged.set(allocation.locationId, { ...allocation });
    }
    for (const allocation of right) {
        const existing = merged.get(allocation.locationId);
        if (!existing) {
            merged.set(allocation.locationId, { ...allocation });
            continue;
        }
        merged.set(allocation.locationId, {
            locationId: allocation.locationId,
            quantity: combineKnownOrUnknownQuantities(existing.quantity, allocation.quantity)
        });
    }

    return Object.freeze(
        [...merged.values()]
            .sort((a, b) => a.locationId.localeCompare(b.locationId))
            .map((allocation) => Object.freeze(allocation))
    );
}

function normalizeDirectAvailability(value, label) {
    if (value === undefined || value === null) {
        return null;
    }
    requireObject(value, label);
    return Object.freeze({
        quantity: normalizeKnownOrUnknownQuantity(value.quantity, `${label}.quantity`)
    });
}

function mergeDirectCurrentAvailability(leftValue, rightValue) {
    const left = normalizeDirectAvailability(leftValue, "leftValue");
    const right = normalizeDirectAvailability(rightValue, "rightValue");
    if (left === null && right === null) return null;
    if (left === null) return right;
    if (right === null) return left;
    return Object.freeze({
        quantity: combineKnownOrUnknownQuantities(left.quantity, right.quantity)
    });
}

function planMergeIdentity(survivorId, absorbedIds) {
    const survivor = requireNonEmptyText(survivorId, "survivorId");
    const absorbed = normalizeUniqueTextList(absorbedIds, "absorbedIds");
    if (absorbed.length < 1) {
        throw new TypeError("absorbedIds must contain at least one retired record ID.");
    }
    if (absorbed.includes(survivor)) {
        throw new TypeError("survivorId must not also appear in absorbedIds.");
    }

    return freezeResult(RECONCILIATION_STATUS.READY, {
        survivorId: survivor,
        retiredRecords: Object.freeze(absorbed.map((retiredId) => Object.freeze({
            retiredId,
            replacementId: survivor
        })))
    });
}

function rebindMergedReference(referenceId, mergeIdentityPlan) {
    const id = requireNonEmptyText(referenceId, "referenceId");
    requireObject(mergeIdentityPlan, "mergeIdentityPlan");
    const survivorId = requireNonEmptyText(mergeIdentityPlan.survivorId, "mergeIdentityPlan.survivorId");
    const retiredRecords = Array.isArray(mergeIdentityPlan.retiredRecords) ? mergeIdentityPlan.retiredRecords : [];
    const retired = retiredRecords.find((entry) => entry?.retiredId === id);
    return Object.freeze({
        referenceId: retired ? survivorId : id,
        redirected: Boolean(retired)
    });
}

function assertRetiredIdNotRecreated(candidateId, retiredIds) {
    const id = requireNonEmptyText(candidateId, "candidateId");
    const retired = new Set(normalizeUniqueTextList(retiredIds, "retiredIds"));
    if (retired.has(id)) {
        throw new TypeError(`retired My Tackle ID ${id} must not be reused for ordinary creation.`);
    }
    return true;
}

function planMergeReferenceMappings(leftMappings, rightMappings) {
    const left = normalizeReferenceMappings(leftMappings, "leftMappings");
    const right = normalizeReferenceMappings(rightMappings, "rightMappings");
    const leftByDomain = new Map(left.map((mapping) => [mapping.referenceDomain, mapping]));
    const rightByDomain = new Map(right.map((mapping) => [mapping.referenceDomain, mapping]));
    const domains = [...new Set([...leftByDomain.keys(), ...rightByDomain.keys()])].sort();
    const mappings = [];
    const issues = [];

    for (const domain of domains) {
        const leftMapping = leftByDomain.get(domain) ?? null;
        const rightMapping = rightByDomain.get(domain) ?? null;
        if (leftMapping && rightMapping) {
            if (leftMapping.referenceId === rightMapping.referenceId) {
                mappings.push(leftMapping);
            } else {
                issues.push(freezeIssue(RECONCILIATION_ISSUE.MERGE_MAPPING_CONFLICT, {
                    referenceDomain: domain,
                    leftReferenceId: leftMapping.referenceId,
                    rightReferenceId: rightMapping.referenceId
                }));
            }
            continue;
        }

        const mapped = leftMapping ?? rightMapping;
        issues.push(freezeIssue(RECONCILIATION_ISSUE.MERGE_MAPPING_CONFIRMATION_REQUIRED, {
            referenceDomain: domain,
            mappedReferenceId: mapped.referenceId
        }));
    }

    return freezeResult(
        issues.length === 0 ? RECONCILIATION_STATUS.READY : RECONCILIATION_STATUS.REQUIRES_EXPLICIT_RESOLUTION,
        {
            mappings: Object.freeze(mappings),
            issues: Object.freeze(issues)
        }
    );
}

function planMergeScopedRestrictions(leftRestrictionKeys, rightRestrictionKeys) {
    const left = new Set(normalizeUniqueTextList(leftRestrictionKeys, "leftRestrictionKeys"));
    const right = new Set(normalizeUniqueTextList(rightRestrictionKeys, "rightRestrictionKeys"));
    const preserved = [...left].filter((key) => right.has(key)).sort();
    const unilateral = [...new Set([
        ...[...left].filter((key) => !right.has(key)),
        ...[...right].filter((key) => !left.has(key))
    ])].sort();
    const issues = unilateral.map((restrictionKey) => freezeIssue(
        RECONCILIATION_ISSUE.MERGE_RESTRICTION_BROADENING_RISK,
        { restrictionKey }
    ));

    return freezeResult(
        issues.length === 0 ? RECONCILIATION_STATUS.READY : RECONCILIATION_STATUS.REQUIRES_EXPLICIT_RESOLUTION,
        {
            preservedRestrictionKeys: Object.freeze(preserved),
            issues: Object.freeze(issues)
        }
    );
}

function normalizeResultIds(resultIds) {
    const normalized = normalizeUniqueTextList(resultIds, "resultIds");
    if (normalized.length < 2) {
        throw new TypeError("Split must produce at least two result IDs.");
    }
    return normalized;
}

function validateSplitQuantityDistribution(originalQuantity, resultQuantities, options = {}) {
    const original = normalizeKnownOrUnknownQuantity(originalQuantity, "originalQuantity");
    if (!Array.isArray(resultQuantities) || resultQuantities.length < 2) {
        throw new TypeError("resultQuantities must contain at least two Split result quantities.");
    }
    const normalized = resultQuantities.map((quantity, index) =>
        normalizeKnownOrUnknownQuantity(quantity, `resultQuantities[${index}]`)
    );
    const issues = [];

    if (original === null) {
        if (options.explicitlyConfirmedUnknownDistribution !== true) {
            issues.push(freezeIssue(RECONCILIATION_ISSUE.SPLIT_QUANTITY_DISTRIBUTION_REQUIRED));
        }
    } else if (normalized.some((quantity) => quantity === null)) {
        issues.push(freezeIssue(RECONCILIATION_ISSUE.SPLIT_QUANTITY_CONSERVATION_FAILED, {
            originalQuantity: original,
            reason: "known original quantity requires known result quantities to prove conservation"
        }));
    } else {
        const total = normalized.reduce((sum, quantity) => sum + quantity, 0);
        if (total !== original) {
            issues.push(freezeIssue(RECONCILIATION_ISSUE.SPLIT_QUANTITY_CONSERVATION_FAILED, {
                originalQuantity: original,
                resultQuantityTotal: total
            }));
        }
    }

    return freezeResult(
        issues.length === 0 ? RECONCILIATION_STATUS.READY : RECONCILIATION_STATUS.REQUIRES_EXPLICIT_RESOLUTION,
        {
            originalQuantity: original,
            resultQuantities: Object.freeze(normalized),
            issues: Object.freeze(issues)
        }
    );
}

function validateSplitLocationDistribution(originalAllocationQuantity, resultAllocations, options = {}) {
    const original = normalizeKnownOrUnknownQuantity(originalAllocationQuantity, "originalAllocationQuantity");
    if (!Array.isArray(resultAllocations)) {
        throw new TypeError("resultAllocations must be an array.");
    }
    const seen = new Set();
    const normalized = resultAllocations.map((allocation, index) => {
        requireObject(allocation, `resultAllocations[${index}]`);
        const resultId = requireNonEmptyText(allocation.resultId, `resultAllocations[${index}].resultId`);
        if (seen.has(resultId)) {
            throw new TypeError("resultAllocations must contain at most one entry per resultId.");
        }
        seen.add(resultId);
        return Object.freeze({
            resultId,
            quantity: normalizeKnownOrUnknownQuantity(allocation.quantity, `resultAllocations[${index}].quantity`)
        });
    });
    const issues = [];

    if (original === null) {
        if (options.explicitlyConfirmedUnknownPresence !== true) {
            issues.push(freezeIssue(RECONCILIATION_ISSUE.SPLIT_LOCATION_DISTRIBUTION_REQUIRED));
        }
    } else if (normalized.some((allocation) => allocation.quantity === null)) {
        issues.push(freezeIssue(RECONCILIATION_ISSUE.SPLIT_LOCATION_CONSERVATION_FAILED, {
            originalAllocationQuantity: original,
            reason: "known original Location allocation requires known result allocations"
        }));
    } else {
        const total = normalized.reduce((sum, allocation) => sum + allocation.quantity, 0);
        if (total !== original) {
            issues.push(freezeIssue(RECONCILIATION_ISSUE.SPLIT_LOCATION_CONSERVATION_FAILED, {
                originalAllocationQuantity: original,
                resultAllocationTotal: total
            }));
        }
    }

    return freezeResult(
        issues.length === 0 ? RECONCILIATION_STATUS.READY : RECONCILIATION_STATUS.REQUIRES_EXPLICIT_RESOLUTION,
        {
            originalAllocationQuantity: original,
            resultAllocations: Object.freeze(normalized),
            issues: Object.freeze(issues)
        }
    );
}

function planSplitReferenceMappings(originalMappings, resultIds, overrides = {}) {
    const original = normalizeReferenceMappings(originalMappings, "originalMappings");
    const results = normalizeResultIds(resultIds);
    requireObject(overrides, "overrides");

    for (const overrideId of Object.keys(overrides)) {
        if (!results.includes(overrideId)) {
            throw new TypeError(`mapping override references unknown Split result ID ${overrideId}.`);
        }
    }

    return Object.freeze(results.map((resultId) => Object.freeze({
        resultId,
        mappings: Object.prototype.hasOwnProperty.call(overrides, resultId)
            ? normalizeReferenceMappings(overrides[resultId], `overrides.${resultId}`)
            : Object.freeze(original.map((mapping) => Object.freeze({ ...mapping })))
    })));
}

function normalizeSourceExceptions(exceptions) {
    if (!Array.isArray(exceptions)) {
        throw new TypeError("sourceExceptions must be an array.");
    }
    return exceptions.map((exception, index) => {
        requireObject(exception, `sourceExceptions[${index}]`);
        return Object.freeze({
            sourceId: requireNonEmptyText(exception.sourceId, `sourceExceptions[${index}].sourceId`),
            removesEntireOriginalContribution: exception.removesEntireOriginalContribution === true
        });
    });
}

function planSplitCurrentAvailability({
    resultIds,
    wholeItemExcluded = false,
    sourceExceptions = [],
    directAvailability = null
}) {
    const results = normalizeResultIds(resultIds);
    const exceptions = normalizeSourceExceptions(sourceExceptions);
    const direct = normalizeDirectAvailability(directAvailability, "directAvailability");
    const issues = [];

    const propagatedWholeItemExclusions = wholeItemExcluded
        ? results.map((resultId) => Object.freeze({ resultId }))
        : [];

    const propagatedSourceExceptions = [];
    for (const exception of exceptions) {
        if (!exception.removesEntireOriginalContribution) {
            issues.push(freezeIssue(RECONCILIATION_ISSUE.SPLIT_CURRENT_AVAILABILITY_ASSIGNMENT_REQUIRED, {
                sourceId: exception.sourceId,
                reason: "partial source exception cannot be safely copied across Split results"
            }));
            continue;
        }
        for (const resultId of results) {
            propagatedSourceExceptions.push(Object.freeze({
                resultId,
                sourceId: exception.sourceId
            }));
        }
    }

    if (direct !== null) {
        issues.push(freezeIssue(RECONCILIATION_ISSUE.SPLIT_CURRENT_AVAILABILITY_ASSIGNMENT_REQUIRED, {
            reason: "positive direct current availability must be explicitly reassigned after Split"
        }));
    }

    return freezeResult(
        issues.length === 0 ? RECONCILIATION_STATUS.READY : RECONCILIATION_STATUS.REQUIRES_EXPLICIT_RESOLUTION,
        {
            propagatedWholeItemExclusions: Object.freeze(propagatedWholeItemExclusions),
            propagatedSourceExceptions: Object.freeze(propagatedSourceExceptions),
            directAvailabilityAssignments: Object.freeze([]),
            issues: Object.freeze(issues)
        }
    );
}

function evaluateReconciliationRevisionPreconditions(expectedRevisionTokens, currentRevisionTokens) {
    requireObject(expectedRevisionTokens, "expectedRevisionTokens");
    requireObject(currentRevisionTokens, "currentRevisionTokens");
    const touchedIds = Object.keys(expectedRevisionTokens).sort();
    const changedIds = touchedIds.filter((id) => currentRevisionTokens[id] !== expectedRevisionTokens[id]);
    const issues = changedIds.length === 0
        ? []
        : [freezeIssue(RECONCILIATION_ISSUE.STALE_RECONCILIATION_PLAN, { changedIds: Object.freeze(changedIds) })];

    return freezeResult(
        changedIds.length === 0 ? RECONCILIATION_STATUS.READY : RECONCILIATION_STATUS.STALE,
        {
            changedIds: Object.freeze(changedIds),
            issues: Object.freeze(issues)
        }
    );
}

function resolveRetiredMyTackleReference(referenceId, redirects) {
    const id = requireNonEmptyText(referenceId, "referenceId");
    requireObject(redirects, "redirects");
    const redirect = redirects[id];
    if (redirect === undefined) {
        return freezeResult(RECONCILIATION_STATUS.READY, {
            referenceId: id,
            redirected: false,
            issues: Object.freeze([])
        });
    }

    requireObject(redirect, `redirects.${id}`);
    const survivorId = requireNonEmptyText(redirect.survivorId, `redirects.${id}.survivorId`);
    if (redirect.lossless === true) {
        return freezeResult(RECONCILIATION_STATUS.READY, {
            referenceId: survivorId,
            redirected: true,
            issues: Object.freeze([])
        });
    }

    return freezeResult(RECONCILIATION_STATUS.REQUIRES_EXPLICIT_RESOLUTION, {
        referenceId: id,
        redirected: false,
        issues: Object.freeze([
            freezeIssue(RECONCILIATION_ISSUE.RETIRED_REFERENCE_AMBIGUOUS, {
                retiredReferenceId: id,
                candidateSurvivorId: survivorId
            })
        ])
    });
}

function findApprovedCanonicalReferenceMigration(mapping) {
    const normalized = normalizeReferenceMappings([mapping], "mapping")[0];
    return CANONICAL_REFERENCE_MIGRATIONS.find((migration) =>
        migration.referenceDomain === normalized.referenceDomain &&
        migration.fromReferenceId === normalized.referenceId
    ) ?? null;
}

function reconcileCanonicalReferenceMapping(mapping, isReferenceActive) {
    const normalized = normalizeReferenceMappings([mapping], "mapping")[0];
    if (typeof isReferenceActive !== "function") {
        throw new TypeError("isReferenceActive must be a function.");
    }

    if (isReferenceActive(normalized.referenceDomain, normalized.referenceId) === true) {
        return freezeResult(RECONCILIATION_STATUS.READY, {
            mapping: normalized,
            migrated: false,
            migrationId: null,
            issues: Object.freeze([])
        });
    }

    const migration = findApprovedCanonicalReferenceMigration(normalized);
    if (!migration) {
        return freezeResult(RECONCILIATION_STATUS.REQUIRES_EXPLICIT_RESOLUTION, {
            mapping: normalized,
            migrated: false,
            migrationId: null,
            issues: Object.freeze([
                freezeIssue(RECONCILIATION_ISSUE.RETIRED_REFERENCE_AMBIGUOUS, {
                    referenceDomain: normalized.referenceDomain,
                    referenceId: normalized.referenceId
                })
            ])
        });
    }

    if (isReferenceActive(migration.referenceDomain, migration.toReferenceId) !== true) {
        return freezeResult(RECONCILIATION_STATUS.REQUIRES_EXPLICIT_RESOLUTION, {
            mapping: normalized,
            migrated: false,
            migrationId: migration.migrationId,
            issues: Object.freeze([
                freezeIssue(RECONCILIATION_ISSUE.CANONICAL_MIGRATION_TARGET_UNAVAILABLE, {
                    referenceDomain: migration.referenceDomain,
                    fromReferenceId: migration.fromReferenceId,
                    toReferenceId: migration.toReferenceId
                })
            ])
        });
    }

    return freezeResult(RECONCILIATION_STATUS.READY, {
        mapping: Object.freeze({
            referenceDomain: migration.referenceDomain,
            referenceId: migration.toReferenceId
        }),
        migrated: true,
        migrationId: migration.migrationId,
        issues: Object.freeze([])
    });
}

/*
 * These helpers produce immutable reconciliation plans/results only. Callers
 * remain responsible for validating current authoritative revisions and for
 * committing the entire Merge/Split + dependent-reference change atomically.
 * A result that is not READY must not be published as authoritative state.
 */

console.info(`[Loaded] ${MY_TACKLE_RECONCILIATION_BUILD_INFO.file} | ${
    MY_TACKLE_RECONCILIATION_BUILD_INFO.milestone
}`);
