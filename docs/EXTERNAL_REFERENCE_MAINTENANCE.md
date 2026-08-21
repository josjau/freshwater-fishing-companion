# Freshwater Fishing Companion — External Reference Maintenance

**Document:** EXTERNAL_REFERENCE_MAINTENANCE.md  
**Document Revision:** 1.0.0  
**Document Status:** Approved  
**Role:** Permanent maintenance standard for external references and externally hosted instructional media  
**Last Updated:** 2026-08-21

# Purpose

This standard defines how Freshwater Fishing Companion detects stale external references without treating network reachability as proof of technical correctness, source authority, media suitability, or licensing validity.

# Scope

Recurring automated checks cover active external destinations used by:

- canonical Rig `referenceLinks`,
- canonical Rig tutorial external URLs,
- active external instructional Media destinations in `data/media.js`.

Geometry/provenance URLs used only as evidence for an already-approved local project asset are not recurring link-check targets. Recheck those sources when the local asset is edited/replaced or when its provenance is questioned.

# Automated Health Check

Run the non-destructive external-reference checker:

- quarterly (approximately every 90 days), and
- manually before a formal release.

The checker may report HTTP failures, redirects, timeouts, DNS/network errors, access challenges, rate limits, or other reachability concerns.

The checker is **report-only and non-blocking**:

- it must not automatically remove, replace, disable, or rewrite a reference;
- a failed automated request is not sufficient evidence that a source is unusable;
- bot challenges, rate limiting, embed restrictions, and provider-specific behavior may create false alarms;
- human review remains authoritative.

# Human Freshness Review

Perform a complete human freshness review at least every 180 days, before a formal release when the existing review is stale, or whenever an affected domain is deliberately edited in a way that depends on external references.

A human review confirms, as applicable:

- the destination remains available to a normal user;
- the source still teaches or depicts the intended canonical method/content;
- tutorial/embed behavior still matches the production experience;
- the provider remains an appropriate source for the intended use;
- rights/linking/reuse assumptions remain valid;
- the reference has not drifted into a materially different method, product, or subject.

HTTP success alone does not satisfy human review.

# Review-Date Ownership

Existing per-record `reviewedDate` values in `data/media.js` remain valid provenance/review metadata and are not mass-rewritten merely because a scheduled checker ran.

After a **complete human review** of the applicable external-reference set, record one file-level review date:

```text
RIG_DATA_BUILD_INFO.externalReferenceReviewedDate
MEDIA_DATA_BUILD_INFO.externalReferenceReviewedDate
```

Do not add or advance these file-level dates after an automated-only check or a partial spot check.

# Local Asset Provenance

A dead or moved geometry/reference URL does not by itself invalidate an already-approved original local project asset. The local asset remains governed by its prior technical, visual, licensing, and provenance approval unless new evidence calls that approval into question.

When such an asset is intentionally edited or replaced, re-establish the necessary reference evidence under the current media-generation and technical-validation standards.

# Tooling

- `tools/check_external_references.js` — report-only external destination health check.
- `.github/workflows/external-reference-health.yml` — quarterly/manual GitHub Actions wrapper.
- `tools/validate_repository_integrity.js` remains the deterministic repository-integrity validator and does not attempt to make human freshness judgments.
