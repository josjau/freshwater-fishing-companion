# Freshwater Fishing Companion

**Document:** CHANGELOG.md  
**Document Revision:** 2.1.2  
**Document Status:** Approved  
**Role:** Curated meaningful landed-change history  
**Last Updated:** 2026-08-22

# Purpose

This file records meaningful changes that actually landed in the product/repository: design changes, implementation changes, fixes, architecture corrections, and other durable repository changes.

It is **not** a current project-status dashboard.

Do not record exact active audit section, exact session resume point, current blocking state, speculative/open planning, or parked ideas here merely because they are currently being discussed.

For current formal continuation use `HANDOFF.md`. For material non-closed items use `ACTIVE-CHANGE-LEDGER.md`.

# Unreleased

## Fish Guide — Trout Production Package 1

### Added

- Added the canonical Fish category registry and activated the Trout category through the first fully migrated Fish package.
- Added Brown Trout and migrated Rainbow Trout to the approved Fish production schema/readiness contract.
- Added the deterministic Brown Trout ↔ Rainbow Trout identification relationship with evidence-backed field distinctions.
- Added approved USFWS public-domain primary identification media for Rainbow Trout and Brown Trout.
- Added approved Fish-to-Rig guidance linking both Trout to the canonical Split-Shot Bait Rig.

### Changed

- Implemented Fish Guide landing search, category browse, Fish detail, Similar Fish comparison, comparison catalog, and context-preserving Fish navigation.
- Preserved the other existing live Fish during the staged mixed-schema migration instead of taking unmigrated records offline.
- Established the approved Fish identity layout: Category → Name → identification image → scientific name → summary → family → aliases, with no redundant visible Fish-name caption under the image.
- Made Fish selection cards mirror the Fish identity/detail hierarchy.
- Applied the Rig-detail baseline to Fish supporting sections: compact media-backed Similar Fish choices, Rig-style Habitat & Water at-a-glance treatment, and canonical Rig links instead of duplicated Rig instructions.
- Expanded deterministic repository validation for Fish categories, migrated Fish readiness, Fish identification relationships, Fish-to-Rig references, source evidence, search helpers, and Fish media requirements.

### Sources

- Reconciled Trout taxonomy, identification, habitat/waterbody, aliases, pairwise distinctions, and media provenance in `FISH_REFERENCE_SOURCES.md`.

## Rig Guide — Four-State Adequacy Reconciliation

### Added

- Added **Split-Shot Bait Rig** as canonical Beginner Rig #21 after the FISH-005 Four-State method-family adequacy audit identified one material beginner bait-presentation gap.
- Preserved all original 20 canonical Rigs and the existing six-rig Core subset.

### Changed

- Updated the Beginner Rig collection count from six to seven.
- Updated scoped Rig/Knot browse Search labels and placeholders so the helper text reflects the active subset rather than examples that may not exist in that subset.
- Updated Rig build metadata to identify the Four-State adequacy reconciliation milestone.

### Corrected

- Corrected the Slip Bobber `bait` component note so canonical live/natural bait is not described as including a jig. This wording correction did not change Slip Bobber components, assembly, difficulty, knots, or runtime behavior.

### Validated

- Post-push verification confirmed GitHub commit `4785b72cdd8509db198c9cfd48327f4724bf1bcd` with exactly `data/rigs.js` and `script.js` changed.
- Verified 21 active Rigs, 7 Beginner Rigs, six unchanged Core Rigs, 32 Rig-to-Knot connection points, valid new Tackle/Knot references, JavaScript syntax, and repository integrity.

## Repository Audit Cleanup — Finalized

### Added

- Promoted the approved **Repository Integrity and Drift Prevention Standard** into `DEVELOPMENT_WORKFLOW.md` as the single permanent workflow owner.
- Added mandatory repository preflight, bounded baseline tracking, dependency/change-impact review, stale-status scanning, event-based broader reconciliation, and explicit PASS/CLOSED precedence controls.

### Changed

- Closed the Repository Audit Cleanup gate after the final read-only re-audit passed and GOV-007 safeguards were explicitly user-approved and promoted.
- Released the audit-level pause on Fish Guide Phase 0 architecture work; Fish production remains gated by the existing FISH-007 Phase 0 closeout requirement.
- Kept `tools/validate_repository_integrity.js` as the single deterministic repository-integrity validator.
- Retained current GitHub Actions checks as non-blocking repository-health alarms; branch protection/required checks remain deliberately not required for the current workflow.
- Moved completed Repository Audit workstream/provenance records out of active `docs/workstreams/` into `archive/workstreams/repository-audit/`.

### Corrected

- Restored the existing `No-Churn Rule` and manual-edit validation checkpoint immediately after post-write validation detected their accidental omission during the workflow promotion.

## External Reference Freshness Maintenance

### Added

- Added a permanent external-reference maintenance standard with quarterly report-only reachability checks and 180-day human freshness review.
- Added a non-destructive external-reference health checker and quarterly/manual GitHub Actions wrapper.

### Changed

- Clarified that human review remains authoritative for technical correctness, source suitability, embed behavior, and rights assumptions.
- Established file-level `externalReferenceReviewedDate` metadata for Rig and Media build information only after a complete human review; automated or partial checks do not advance that date.
- Excluded geometry/provenance-only URLs for already-approved local assets from recurring automated checks unless the asset is edited/replaced or provenance is questioned.

## Documentation Governance — Section 14 Reconciliation

### Changed

- Reduced documentation ownership to single-purpose canonical roles.
- Added `ACTIVE-CHANGE-LEDGER.md` as the single formal GitHub owner of material non-closed carry-forward items.
- Reduced `HANDOFF.md` to a compact formal recovery/continuation entrypoint.
- Narrowed `ROADMAP.md` to product milestone ordering and future direction rather than exact current Repository Audit status.
- Froze `MILESTONES.md` as a historical milestone record rather than a living current-state owner.
- Retained `CHANGELOG.md` only as curated meaningful landed-change history.
- Retired `SPECIFICATION.md` from active maintenance after a targeted no-loss uniqueness review.
- Promoted the base recurring-service-cost boundary and external-resource graceful-degradation boundary into `ARCHITECTURE.md`.
- Parked automatic shopping/retailer integration explicitly in `ROADMAP.md`.
- Corrected `ARCHITECTURE.md` source structure to include the repository-integrity GitHub Actions workflow and formal Active Change Ledger.

### Preserved

- GitHub `main` remains authoritative for formal source/documentation.
- Google Drive Working State remains the high-frequency in-progress delta between formal GitHub checkpoints.
- Durable decisions remain in `DECISIONS.md`.
- Domain ownership remains in canonical architecture/data-model owners.
- Existing production application behavior is unchanged by this documentation package.

# Curated Landed History

## Knots — Finalized / Closed

Meaningful landed results:

- 10 canonical Version 1 Knots with four Core IDs.
- Task-first Knot Guide navigation and deterministic Knot search.
- Canonical in-app tying instructions.
- All 20 Rigs audited for 31 real tied `knotApplications` connections.
- Verified instructional-media coverage for all 10 Knots.
- Completed Reel & Line Setup for Spinning, Spincast, and Baitcasting.
- Contextual Rig ↔ Knot and Reel Setup ↔ Knot navigation paths.
- Clickable Common Tasks, Rig usage, and Line Compatibility connected knowledge.
- Minimal Line Type reference/detail routing.
- Dashboard/Tackle information architecture refinements and compact connected-knowledge pills.
- Keyboard, narrow-viewport, and normal-navigation runtime validation.

Historical package-level detail remains in the Knot workstream/archive records and Git history.

## Complete Rig Guide — Finalized

Meaningful landed results:

- Completed the approved 20-Rig library across six learning tiers.
- Final tier counts: 6 Beginner / 3 Beginner+ / 4 Intermediate / 4 Intermediate+ / 2 Advanced / 1 Expert.
- Preserved six-member Core Rig registry/order.
- Expanded canonical Tackle and recognition-media registries to 29 records each.
- Integrated final seven Rigs and six final canonical Tackle concepts.
- Implemented/validated build-first tutorial coverage/fallbacks for final tiers.
- Validated recognition media, readiness persistence, desktop/mobile presentation, console health, and deployed artifact integrity.

Final correction commit:

`4375ca3e05cfbfef6ab0a3e4662c2afd19b86f42` — `Rig Updates Images and tutorials`

## Beginner/Beginner+ Media Completion + Intermediate Expansion

Meaningful landed results:

- Expanded active Rig library to 13 at that stage with complete Intermediate tier.
- Expanded Tackle/media foundation to 23 canonical concepts/records.
- Completed build-first Rig tutorial audit and replacement pass.
- Corrected Bobber Stop media metadata.
- Added D053 Rig Media Completeness and Tutorial Audit.
- Added D054 Intermediate Rig Tier Membership.

## Core Rigs / Tackle Media / Rig UX Finalization

Meaningful landed changes:

- Added global Rig search at the Rig Guide landing page while retaining scoped subset Search.
- Added Fish Guide inline landing-page Search.
- Added explicit one-click Search clear control.
- Added deterministic relevance ranking.
- Added Dashboard-derived shared section/subset card treatment and Core priority emphasis.
- Added compact sticky Parent/Home visual treatment.
- Added compact mobile-first Rig detail treatment.
- Added initial verified/published Rig tutorial embed pattern with external fallback.
- Expanded canonical Tackle concepts for narrowed Rig component needs.

Historical Parent-to-top behavior recorded during this period was later superseded by revised D051 architecture for standard application Parent behavior.

## Rig/Tackle Data Integrity — Batch 1

Meaningful landed changes:

- Rig component requirements reference canonical Tackle through `tackleId`.
- Removed duplicated Rig-side component display names.
- Removed manually maintained Tackle inverse `rigIds`.
- Derived Tackle `Used In` from canonical Rig requirements.
- Preserved readiness storage compatibility.
- Added replacement-integrity safeguards after correcting an over-condensed documentation replacement.

## Current-State UX Repairs

Meaningful landed changes:

- `Coming Soon` cards became clearly unavailable/non-actionable.
- Dashboard Regulations CTA became `Go to ODWC Regulations ↗`.
- Restored approved Forest Journal Dashboard primary-card hierarchy/interaction behavior after regression.
- Removed package-era `REPLACEMENT` labels from deliberately edited source files.

## Architecture / Product Decisions Consolidation

Meaningful durable decisions established across the build history include:

- three-layer Reference / Decision / User Knowledge architecture,
- relevance-first Search + connected-knowledge behavior,
- five recommendation tiers,
- Rig physical assembly vs Technique reusable presentation ownership,
- single-owner Rig→Tackle relationships,
- canonical Tackle identity/display ownership,
- My Tackle persistent ownership/readiness authority,
- User Knowledge trust boundary,
- unavailable-feature affordance,
- explicit external destination semantics,
- Forest Journal as the sole production-supported V1 theme,
- documentation-validated closeout and no-unvalidated-transition rules,
- single-owner semantic relationship architecture under D056,
- Four-State Fish/project direction and later Fish category/lifecycle/identity/Search decisions.

`DECISIONS.md` remains authoritative for the exact durable rules.

# Historical Releases

## Version 0.2.6 — Tackle References and Rig Visual Guides

Historical release introduced canonical Tackle/media infrastructure, local Tackle/Rig asset libraries, contextual Tackle references, related-component navigation, and early Rig visual support.

Later architecture superseded generated Rig overview/build-step media and narrowed production Tackle media format. Git history preserves the exact historical implementation.

## Version 0.2.5 — Lightweight Tackle Readiness

Historical release introduced local per-Rig readiness state and persistence key:

`freshwaterFishingCompanion.tackleReadiness.v1`

Later D020/D028 architecture integrates readiness into Rig detail and defines future My Tackle as persistent ownership authority.

## Version 0.2.4 — Functional Rig Guide

Historical release established canonical Rig data, browse/search, Rig detail, component/assembly guidance, setup notes, common mistakes, and safety guidance.

## Version 0.2.3 — Functional Fish Search

Historical release established functional Fish Search, reusable result cards, and Parent/Home navigation.

Later Fish/Search architecture supersedes the original primary interaction model where applicable.

# Changelog Maintenance Rule

Add an entry only when a meaningful change lands.

Appropriate examples:

- new or materially changed product capability,
- architecture/schema/ownership change,
- significant UX behavior change,
- meaningful defect correction,
- canonical data-library expansion/correction,
- repository governance/tooling change that changes how the project is maintained.

Do not add entries solely for:

- exact current workstream status,
- session continuation notes,
- speculative/open discussions,
- parked ideas,
- routine synchronization edits with no meaningful repository/product effect.
