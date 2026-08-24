# Freshwater Fishing Companion

**Document:** CHANGELOG.md  
**Document Revision:** 2.3.2  
**Document Status:** Approved  
**Role:** Curated meaningful landed-change history  
**Last Updated:** 2026-08-24

# Purpose

This file records meaningful changes that actually landed in the product/repository: design changes, implementation changes, fixes, architecture corrections, and other durable repository changes.

It is **not** a current project-status dashboard.

Do not record exact active audit section, exact session resume point, current blocking state, speculative/open planning, or parked ideas here merely because they are currently being discussed.

For current formal continuation use `HANDOFF.md`. For material non-closed items use `ACTIVE-CHANGE-LEDGER.md`.

# Unreleased

## Workflow / Continuity Recovery

### Changed

- Restored the Drive-working-package → local-validation → GitHub-commit operating model after the repository-only transition proved vulnerable to working-state drift.
- Replaced the manually maintained exploded Drive working mirror with an atomic full-tree ZIP + manifest model.
- Made repository Working State current-only and added a mandatory per-commit documentation impact sweep in which every durable documentation file is explicitly UPDATED or VERIFIED — NO CHANGE REQUIRED.

## Fish Guide — Production Wave 3: Bass

### Changed

- Completed explicit Fish-to-Rig review: added Largemouth Inline Spinner Setup as Alternative, added Smallmouth Ned Rig as Alternative, and changed Live-Bait Slip-Sinker Rig from Primary to Alternative for Striped and Hybrid Striped Bass.
- Recorded the Rig `useCases[]` species-applicability ownership defect for the Version 1 UX Design Audit rather than duplicating more Fish applicability inside Rig records.
- First Wave 3 browser review confirmed the Compare Similar Fish centering rules and the standardized Selection/Fish ID image blocks; no centering defects were found.
- Reverted internal navigation arrows from the CSS-drawn shaft/head treatment to the native `→` glyph; the user approved the corrected treatment. Standardized all application navigation-arrow glyphs on shared `font-weight: 800` while preserving `←` back, `→` internal, `↗` external, and existing compact-row `›` semantics.

## Local Repository Workflow Transition — Closed

### Added

- Added `docs/WORKING_STATE.md` as the live local current-state and exact-resume record.
- Added root `AGENTS.md` with concise repository startup, authority, change-control, and closeout instructions for Codex.
- Added D062 for the approved local repository Work/Codex operating model.
- Added `docs/workstreams/FISH-WAVE-3-BASS.md` as the complete locked six-Fish package, evidence/media, rights, implementation-boundary, and resume owner.
- Added D063 for the foundational Dashboard/Tackle knowledge-hub boundary, D064 for the required future Repository Disaster Recovery / Reconstruction gate, and D065 for deferred Slip Bobber alternate-terminal modeling.
- Added the affected-file audit/fix cycle and Fish original-acquisition/verification gate to their permanent workflow/media owners.

### Changed

- Made direct edits in a verified local GitHub Desktop checkout the normal workflow, with the complete local diff as the review surface and ZIP delivery retained only as an exceptional fallback.
- Defined GitHub `origin/main` as the cross-computer synchronization point and prohibited transferring required state through uncommitted files.
- Established one coherent task per workstream and one write-authorized task per checkout at a time.
- Reconciled every valid current decision, implementation state, open gate, source/media selection, rights caveat, and exact resume instruction from the migration record into the appropriate repository owner.
- Closed WF-001 and removed it from the active ledger. A second computer now has a receiving-device onboarding check rather than being a project-wide blocker.
- Retired the former Google Working State as an active continuity source while preserving it as historical migration evidence.

### Validation Status

- Repository documentation now recovers the authority model, current status, material open gates, exact Wave 3 scope, media provenance/rights state, and exact resume point without chat history or Google.
- The transition closeout passed repository integrity, complete-diff, stale-reference, and GitHub post-push verification before the former Google Working State was marked retired.
- Wave 3 Bass is ready for a separate task; production Fish source/media implementation remains not started and requires scope-specific authorization.

## Local Repository Workflow Transition — First-Computer Checkpoint

- The initial repository continuity package landed at `0051c60741137c80087fc1276f495e9e37c497b7` (`Transition to repository-backed workflow`).
- That checkpoint added Working State, root agent instructions, D062, direct-local workflow rules, and the original WF-001 validation gate.
- The later transition-closeout entry above supersedes its temporary second-computer/project-blocking and Google-active-authority state while preserving the checkpoint as landed history.

## Fish Guide — Production Wave 2: Walleye / Sauger + Catfish

### Added

- Migrated Walleye and Channel Catfish to the approved production Fish schema and added Sauger, Saugeye, Blue Catfish, Flathead Catfish, Black Bullhead, and Yellow Bullhead as active production Fish.
- Added seven Fish-identification relationships covering Walleye/Sauger/Saugeye and the approved Catfish comparison pairs.
- Added eight Fish-to-Rig guidance records for the Wave 2 Fish, referencing only active canonical Rigs.
- Added verified primary-identification media and provenance for all eight Wave 2 Fish, including the approved Duane Raver Saugeye illustration.
- Expanded `FISH_REFERENCE_SOURCES.md` with Wave 2 taxonomy, regional inclusion, identification, habitat/waterbody, comparison, guidance, and media evidence.

### Changed

- Standardized current Fish primary media presentation around isolated/transparent Fish displayed over the canonical `#f4f0e8` reference-media surface while preserving source identity and diagnostic anatomy.
- Standardized Fish Selection image blocks at 2.4:1 and Fish Detail identity image blocks at 2.2:1, with independent per-Fish scale/position tuning rather than per-species frame sizes.
- Standardized Compare Fish presentation blocks and added compare-specific per-Fish fit tuning while preserving natural proportions and anatomy clearance.
- Kept Compare Similar Fish thumbnails at 84 × 56, vertically centered them against the complete text group, restored two-up desktop behavior, and retained one tile per row on mobile/narrow layouts.
- Removed redundant `Rigs to Start With` helper copy.
- Increased external `↗` prominence and replaced thin-font internal `→` rendering with a heavier directional-arrow treatment while preserving internal/external destination semantics.
- Added compare-specific vertical Fish offsets so dedicated Compare Fish cards can align Fish on a shared anatomical body-axis baseline instead of relying on raw image bounding-box centering.

### Corrected / Validated

- Corrected Common Carp Selection framing so the dorsal fin retains safe clearance.
- Background-isolation QA verified transparent Fish edges against light, dark, and canonical reference surfaces, with explicit attention to fins/spines, translucent fin edges, catfish barbels, gar snouts/jaws, Paddlefish rostrum, tails, and pale body edges.
- Wave 2 Review v3 landed in GitHub commit `8399ae0cee0f5c4b9301041c904707430352bbd1` (`Fish - Walleye Sauger Refinement`) as exactly 22 changed files.
- Desktop/mobile review approved Fish Selection cards, Fish ID image framing, transparency/background treatment, Fish-edge quality, Compare Similar Fish responsive behavior, and the external/internal arrow treatments.
- Final Compare Fish alignment refinement landed at `d55cf21d7de0099c259de70ad5b113a4d78ea91d` (`Fish - Compare Card Refinement`) and was merged into `main` at `f47ece0d243457d90a8b980855130af043d98a05`.
- Final desktop/mobile review approved the corrected main Compare Fish page. Post-push verification confirmed the two refinement files match the approved review package, JavaScript syntax passes, CSS structure passes, and no source drift was detected.
- Fish Guide Production Wave 2 is **CLOSED**.

## Fish Guide — Production Wave 1: Carp + Drum + Paddlefish

### Added

- Migrated Common Carp and Freshwater Drum to the approved production Fish schema and added Paddlefish as an active production Fish.
- Added verified U.S. Fish and Wildlife Service Duane Raver public-domain primary-identification media for Common Carp, Freshwater Drum, and Paddlefish with local WebP production assets and recorded provenance.
- Added Primary Basic Bottom Rig guidance for Common Carp and Freshwater Drum after deliberate Fish-to-Rig evaluation.
- Added Paddlefish Specialized Targeting guidance instead of forcing a normal Fish-to-Rig recommendation for a species commonly targeted through specialized, regulation-sensitive snagging methods.
- Added supporting Fish reference-source evidence for the three Wave 1 Fish.

### Changed

- Reordered Fish Guide categories using the approved angler-priority tiers with alphabetical ordering inside each tier.
- Corrected compact selection-card framing for Common Carp, Freshwater Drum, and Paddlefish while preserving the canonical source media files and diagnostic extremities.
- Refined Fish detail hierarchy so identity metadata remains in the Fish identity area while the concise identification summary leads **How to Identify It**, eliminating duplicated descriptive information.
- Standardized normal Fish information sections on the clean plain-border treatment validated during Paddlefish review.
- Standardized Safety as a semantic warning treatment rather than ordinary information-card emphasis.
- Standardized **Compare Similar Fish** as a workflow/action card using the approved workflow treatment.
- Corrected the shared Specialized Targeting sequence to description → research guidance → regulation/source note → prominent Safety, including regression application to Gar.
- Simplified repeated Basic Bottom Rig Knot recommendations by grouping identical applications under one recommended Knot set while preserving each connection purpose.
- Reordered Rig detail flow so `What You Need`, `How to Build It`, `Rig Tutorial`, and `Knots You'll Tie` follow a more natural task sequence.
- Reordered Knot instructional flow so the Visual Guide sits with `How to Tie It`, supporting references no longer interrupt primary tying instruction, and Rig relationship presentation avoids repeating Rig descriptions.
- Added compact contextual-navigation trials for Tackle component Used In / Related Components and reduced repeated component-description content in Rig readiness tiles.

### Corrected / Validated

- Corrected Fish selection framing after review identified top/bottom clearance, right-edge clipping, and Paddlefish dorsal-fin cropping.
- Corrected Specialized Targeting research-note spacing and preserved explicit Safety prominence.
- Corrected Rig readiness visual cues so missing requirements use a clear red semantic state and complete requirements use a distinct ready green.
- Review 5 package source/assets were confirmed on GitHub source commit `be8b2164f62770ef30a4a3cac8238aa5f4f004f7` (`Fish - UX tweaks - Visibility fixes`); package JavaScript syntax, CSS brace structure, and ZIP integrity passed.
- User mobile-device validation approved the Fish-specific Wave 1 result: all three new Fish image frames, Fish identity/identification separation, plain-border information sections, Safety treatment, and Compare Similar Fish workflow treatment.
- Cross-domain Rig/Knot/link/detail inconsistencies observed during mobile review were deliberately carried into `V1-DESIGN-AUDIT.md` rather than keeping validated Fish production open or applying unreviewed site-wide styling changes.

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
- Established the initial Fish identity layout and made Fish selection cards mirror the Fish detail hierarchy; later Wave 1 review refined descriptive summary placement into **How to Identify It** to avoid duplication.
- Applied the Rig-detail baseline to Fish supporting sections: compact media-backed Similar Fish choices, Rig-style Habitat & Water at-a-glance treatment, and canonical Rig links instead of duplicated Rig instructions.
- Expanded deterministic repository validation for Fish categories, migrated Fish readiness, Fish identification relationships, Fish-to-Rig references, source evidence, search helpers, and Fish media requirements.

### Sources

- Reconciled Trout taxonomy, identification, habitat/waterbody, aliases, pairwise distinctions, and media provenance in `FISH_REFERENCE_SOURCES.md`.

### Corrected / Validated

- Corrected Fish Guide Home behavior so returning to Dashboard clears the Fish Guide landing query/scroll state before re-entry.
- Post-push verification and user fresh-session/incognito validation confirmed expected Trout landing/search/browse/detail/compare/navigation behavior; Trout Production Package 1 is closed at `0ea38b53cde8f1390cc84ea2ccd135acd3ee4431`.
- A broader follow-up Hotfix 2 was prepared during diagnosis but was not applied and is superseded unless a fresh-load regression later proves it necessary.

## Fish Guide — Gar Production Package

### Added

- Added Longnose Gar and Spotted Gar as production-schema Fish records.
- Added the deterministic Longnose Gar ↔ Spotted Gar identification relationship with evidence-backed snout and spotting distinctions.
- Added verified USFWS Duane Raver public-domain primary-identification media for both Gar species.
- Added reusable Specialized Targeting presentation support with species-specific external research topics for specialized tackle, techniques, hookset approaches, and current regulations.

### Changed

- Extended the Fish image presentation system with opt-in, per-Fish subject framing for whitespace-heavy identification artwork without altering canonical media files.
- Added separate compact/comparison and Fish Detail framing contexts, evaluating both horizontal and vertical subject occupancy, centering, and diagnostic-feature clearance.
- Applied the subject-framing approach to Trout where justified and corrected Rainbow Trout vertical placement to preserve dorsal-fin clearance.
- Rewrote affected user-facing Fish/Rig/Knot/Reel Setup copy to remove internal release/build terminology and use angler-facing production wording.
- Preserved the approved Gar boundary: no Gar Fish-to-Rig guidance, no Gar-specific canonical Rig, no rope-lure construction, and no interactive crop/zoom viewer.

### Sources

- Reconciled Gar taxonomy, identification, habitat/waterbody, aliases, pairwise distinctions, regional evidence, and media provenance in `FISH_REFERENCE_SOURCES.md`.

### Corrected / Validated

- Rejected and removed the earlier Gar tight-crop/simple-enlargement and zoom/pan experiments after review showed they did not materially improve identification.
- Post-push verification confirmed every changed GitHub blob matched the approved Gar Review 9 package, including both binary Gar media assets.
- Deterministic validation passed JavaScript syntax, all 8 repository-integrity groups, CSS brace balance, and source whitespace checks.
- User confirmed the deployed Gar/Trout review PASS; Gar Production Package is closed at source commit `cc7840c6ae96bc488e3f443be7e6e5f737508e38` (`Fish - Gar Final`).

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
- Expanded canonical Tackle/media foundation to 29 records at the completed Rig-guide milestone.
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
