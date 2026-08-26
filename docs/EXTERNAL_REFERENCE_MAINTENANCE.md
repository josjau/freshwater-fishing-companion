# Freshwater Fishing Companion — External Reference Maintenance

**Document:** EXTERNAL_REFERENCE_MAINTENANCE.md  
**Document Revision:** 1.3.0  
**Document Status:** Approved  
**Role:** Permanent maintenance standard for external references and externally hosted instructional media  
**Last Updated:** 2026-08-26

# Purpose

This standard defines how Freshwater Fishing Companion detects stale external references without treating network reachability as proof of technical correctness, source authority, media suitability, or licensing validity.

# Scope

Recurring automated checks currently cover active external destinations used by:

- canonical Rig `referenceLinks`,
- canonical Rig tutorial external URLs,
- active external instructional Media destinations in `data/media.js`.

**Current Regulations implementation:** canonical Regulations maintenance covers active State agency URLs, StateResource destinations, officially-designated-external `designationUrl` evidence, and active StateNotice destinations. Regulations uses a separate monthly maintenance workflow because its freshness/authority requirements are stricter than the existing Rig/Media cadence.

Geometry/provenance URLs used only as evidence for an already-approved local project asset are not recurring link-check targets. Recheck those sources when the local asset is edited/replaced or when its provenance is questioned.

# Automated Health Check

## General Rig / Media references

Run the existing non-destructive external-reference checker:

- quarterly (approximately every 90 days), and
- manually before a formal release.

The checker may report HTTP failures, redirects, timeouts, DNS/network errors, access challenges, rate limits, or other reachability concerns.

The checker is **report-only and non-blocking**:

- it must not automatically remove, replace, disable, or rewrite a reference;
- a failed automated request is not sufficient evidence that a source is unusable;
- bot challenges, rate limiting, embed restrictions, and provider-specific behavior may create false alarms;
- human review remains authoritative.

## Regulations maintenance

Regulations uses a separate monthly maintenance workflow. It combines two different kinds of automation without conflating them:

1. **Technical reachability/redirect reporting** — report-only and non-authoritative for legal/source meaning.
2. **Deterministic freshness enforcement** — may fail when the project is objectively outside its approved human-review interval.

The Regulations checker may report success, redirects, 404/410, server errors, timeout/DNS, 401/403/405/429, and final URL. A changed redirect destination is surfaced for human redirect review even when the final response succeeds.

Network findings must never automatically replace a URL, disable/remove a resource, change authority/category/capabilities, create/deactivate a notice, or interpret legal meaning.

Detected technical concerns produce clear GitHub Actions warnings/run summaries and create or update one persistent Regulations maintenance issue as the authoritative human review queue. GitHub Actions email notifications are the approved initial external alert channel. A separate mail service is not required unless GitHub-native notification behavior later proves insufficient.

The Regulations maintenance workflow should require only `contents: read` and `issues: write`; it must not receive source-write authority.

# Human Freshness Review

For general Rig/Media external references, perform a complete human freshness review at least every 180 days, before a formal release when the existing review is stale, or whenever an affected domain is deliberately edited in a way that depends on external references.

A human review confirms, as applicable:

- the destination remains available to a normal user;
- the source still teaches or depicts the intended canonical method/content;
- tutorial/embed behavior still matches the production experience;
- the provider remains an appropriate source for the intended use;
- rights/linking/reuse assumptions remain valid;
- the reference has not drifted into a materially different method, product, or subject.

HTTP success alone does not satisfy human review.

For Regulations:

- complete State/StateResource human freshness review at least every **90 days**;
- active StateNotice human review at least every **30 days**;
- perform a formal pre-release review whenever the existing review is stale or otherwise insufficient;
- review user-reported concerns as received.

Regulations human review confirms destination existence, responsible authority, intended purpose, canonical URL/redirect legitimacy, title/description accuracy, current PDF/tool behavior, provenance chain, and whether a materially better official replacement exists.

State and active/temporarily-unavailable StateResource records older than 90 days fail freshness validation. Active StateNotice records older than 30 days fail. Retired resources are excluded from recurring freshness enforcement. A known passed official notice expiry prevents rendering and should surface cleanup if the record remains active.

# Review-Date Ownership

Existing per-record `reviewedDate` values in `data/media.js` remain valid provenance/review metadata and are not mass-rewritten merely because a scheduled checker ran.

After a **complete human review** of the applicable external-reference set, record the corresponding file/build-level review date:

```text
RIG_DATA_BUILD_INFO.externalReferenceReviewedDate
MEDIA_DATA_BUILD_INFO.externalReferenceReviewedDate
REGULATIONS_DATA_BUILD_INFO.externalReferenceReviewedDate
```

Do not add or advance these dates after an automated-only check or a partial spot check. For Regulations, `externalReferenceReviewedDate` advances only after the entire maintained nationwide set has completed the applicable human review; 47 of 48 states is still a partial review.

Individual Regulations `verifiedDate` fields remain human-controlled. Automated operational results such as HTTP status, final redirect URL, or checker timestamp are report/run data and should not create routine source-data churn.

# Local Asset Provenance

A dead or moved geometry/reference URL does not by itself invalidate an already-approved original local project asset. The local asset remains governed by its prior technical, visual, licensing, and provenance approval unless new evidence calls that approval into question.

When such an asset is intentionally edited or replaced, re-establish the necessary reference evidence under the current media-generation and technical-validation standards.

# Tooling

Current:

- `tools/check_external_references.js` — report-only external destination health check. Its default mode preserves the existing Rig/Media surface; `--regulations` checks Regulations State agency URLs, StateResource/StateNotice destinations, and `designationUrl` evidence, reports changed redirects/access limits/failures for human review, and emits the Regulations maintenance report/concern count.
- `.github/workflows/external-reference-health.yml` — unchanged quarterly/manual GitHub Actions wrapper for the general Rig/Media surface.
- `.github/workflows/regulations-maintenance.yml` — separate monthly/manual Regulations workflow. It runs repository/freshness validation plus `check_external_references.js --regulations`, writes run warnings/summary output, and creates or updates the single persistent `[Maintenance] Regulations resource review` issue when human attention is required. It does not auto-close the issue on a clean run.
- `tools/validate_repository_integrity.js` — deterministic repository-integrity validator, including Regulations schema/provenance/relationship and approved 90-day State/StateResource / 30-day active StateNotice freshness enforcement.

The Regulations workflow requires only `contents: read` and `issues: write`. GitHub Actions email notifications remain the approved initial external alert channel; setup guidance must ensure the user has repository/Actions notification settings configured to receive maintenance activity.

Automation remains report/alert infrastructure. Humans remain authoritative for source qualification, legal-resource meaning, replacement/deactivation, and freshness confirmation.
