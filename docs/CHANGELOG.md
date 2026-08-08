# Freshwater Fishing Companion

**Document:** CHANGELOG.md  
**Document Revision:** 1.10.4  
**Document Status:** Approved  
**Last Updated:** 2026-08-08

# Unreleased

## Core Rigs and Tackle Media

**Implementation Status: In Progress**

### Added

- `CORE_RIG_IDS` as the single canonical Core-membership/order registry.
- Jighead + Soft Plastic and Inline Spinner Setup, completing the approved Core 6 dataset.
- Canonical Jighead and Inline Spinner Tackle records.
- Dedicated **Core Rigs — Master These First** browse presentation and Core detail-page emphasis.
- New Jighead and Inline Spinner contextual recognition images.
- Workstream and validation documentation.

### Changed

- Replaced all 15 prior transparent/shadowed Tackle images with 640 × 440 neutral-background WebP assets.
- Tackle media metadata now records the approved neutral-background production status.
- Rig modeling now explicitly includes complete ready-to-fish terminal setups, including a lure tied directly to line.
- Core membership is derived from one ordered registry instead of duplicated record flags.
- Generated finished-Rig and build-step imagery is explicitly prohibited after failed mechanical-accuracy tests.

### Validation Status

- Static source/data/media preflight: completed before package delivery.
- GitHub inspection and runtime/regression validation: required after push.

See `workstreams/CORE-RIGS-TACKLE-MEDIA.md` and `workstreams/CORE-RIGS-TACKLE-MEDIA-VALIDATION.md`.

## Rig/Tackle Data Integrity — Batch 1

**Implementation Status: Validated**

### Changed

- Rig component requirements now reference canonical Tackle explicitly through `tackleId`.
- Removed duplicated Rig-side component display names.
- Removed manually maintained Tackle `rigIds`.
- Tackle `Used In` is derived from active Rig component requirements.
- Rig component and readiness missing-item labels resolve canonical Tackle names.
- `script.js` uses `tackleId` consistently at the readiness callback boundary.
- Existing readiness storage remains compatible because stored keys already use canonical Tackle ID strings.

### Documentation Integrity

- Corrected an initial documentation replacement that over-condensed `ARCHITECTURE.md`, `03-RIGS.md`, and `09-RELATIONSHIPS.md`.
- Restored those documents from their exact pre-change GitHub baselines and reapplied only authorized changes.
- Added `tools/validate_replacement_integrity.py` and a permanent workflow gate to detect suspicious documentation truncation before future delivery.

### Validation

- GitHub source/data-model inspection: passed.
- Documentation correction/revalidation: passed.
- All four current Rig detail/readiness flows: passed.
- Canonical component-name rendering: passed.
- Tackle `Name ⓘ` references: passed.
- Required/optional readiness behavior: passed.
- Readiness persistence: passed.
- Derived `Used In` relationships: passed.
- Fish Search regression: passed.
- Rig browse/search regression: passed.
- External Rig references: passed.
- Related Tackle navigation: passed.
- Normal-navigation console health: passed.
- Phone and desktop layout checks: passed.

See `workstreams/RIG-TACKLE-DATA-INTEGRITY.md` and `workstreams/RIG-TACKLE-DATA-INTEGRITY-VALIDATION.md`.

## Current-State UX Repairs

**Implementation Status: Validated**

The source implementation was pushed in commit `cf4f8bfa4974d06ada35650dd4e27f9371ee034f`. Repository inspection confirmed the intended source changes are present. Documentation-preservation defects from the initial package were corrected, package-specific root artifacts were removed, and runtime/regression validation passed.

### Changed

- Inert child cards render as non-actionable unavailable cards with a visible `Coming Soon` status.
- Fish Guide `Search Fish` and Rig Guide `Browse All Rigs` remain interactive.
- Dashboard Regulations CTA changed from generic `Browse →` to `Go to ODWC Regulations ↗`.
- Forest Journal Dashboard restored the approved primary-card right accent, stronger primary title, primary vertical spacing, gradient hover treatment, active treatment, and card overflow containment.
- Package-specific `REPLACEMENT` source labels were removed from deliberately edited source files under the approved status/version cleanup rule.

### Preserved

- Dashboard card order and route architecture.
- Current pill CTA styling.
- Fish Search.
- Rig browse/detail behavior.
- Tackle contextual `Name ⓘ` interaction.
- Inline Rig readiness and persistence.
- Current data/media.
- Dormant theme files remain untouched.

### Validation

- Repository source inspection: passed.
- Documentation preservation and root cleanup: passed.
- Dashboard runtime validation: passed.
- Fish Guide unavailable-card validation: passed.
- Rig Guide unavailable-card validation: passed.
- Recommendations, My Tackle, Knots, Catch Log, Favorites, and Settings unavailable-card validation: passed.
- Regulations external-link behavior: passed.
- Fish Search, Rig browse/detail, Tackle popovers, related-component navigation, and readiness persistence regressions: passed.
- Responsive/accessibility checks at phone and desktop widths: passed.
- Normal-navigation console health and external Rig reference behavior: passed.

See `workstreams/UX-REPAIRS.md` and `workstreams/UX-REPAIRS-VALIDATION.md`.

## Architecture, Data-Model, UX, and Handoff Decisions

### Added / Approved

- Relevance-first Search and connected-knowledge contract.
- Five recommendation tiers: Best of the Best, Best Bang for the Buck, Best Budget, Best of the Rest, Avoid.
- Rig assembly vs Technique presentation ownership boundary.
- Single-owner Rig-to-Tackle relationship architecture and canonical Tackle display-name ownership.
- Initial 20-Rig regional library plus six Core Rigs.
- My Tackle ownership/readiness authority and buildability-first readiness principle.
- User Knowledge safe-rendering trust boundary.
- Coming Soon/unavailable child-card semantics.
- Explicit `Go to ODWC Regulations ↗` external CTA semantics.
- Narrow Dashboard CSS regression restoration plan.
- Archive rules for completed package artifacts and historical design assets.
- Forest Journal as the only production-supported Version 1 theme.
- Separate document-status, implementation-status, document-revision, and application-version semantics.
- Dedicated `00-GLOSSARY.md`, `05-TACKLE.md`, and `05A-INVENTORY.md` documentation structure.
- `HANDOFF.md` as the repository current-state entrypoint.
- Documentation-validated closeout, no-unvalidated-transition, and cross-segment decision-capture rules.

### Documentation Reconciliation

- Historical MS2.5/MS2.6 milestone descriptions are retained as history but explicitly marked as superseded where later approved architecture changed readiness or Rig-media behavior.
- Detailed Recommendation and ProductDefinition model documents remain deferred until their schemas are mature/required.

## Rig and Tackle Reference Refresh

### Added

- My Tackle remains the ownership/inventory domain; no standalone image-library Tackle Guide is introduced
- Approved lightweight semi-photorealistic Tackle reference images for contextual help
- Verified external Rig reference links for all four current Rigs
- `Best For` and `Good Conditions` summary blocks on Rig detail pages
- Integrated `What You Need` ownership/readiness controls on Rig detail pages
- External-reference `↗` convention
- Permanent command-copy/paste documentation standard

### Changed

- Removed obsolete generated Rig overview and assembly-step assets from the active repository state.
- Removed superseded Tackle SVG reference assets after replacement with approved WebP references.
- Rig pages now contain no local Rig imagery; completed-rig visual confirmation uses verified external links.
- `What You Need` remains text-first; Tackle WebP images appear only after selecting `Name ⓘ`.
- `What You Need` and the lightweight readiness check are combined so ownership can be marked without leaving the Rig detail page.
- Removed the separate Rig readiness page/action from the primary Rig workflow.
- Normalized spacing around `Best For` and `Good Conditions` to match the standard section rhythm.
- Dashboard remains `My Tackle`; it is the user-owned inventory domain.
- Rig detail pages use authoritative text build instructions instead of generated Rig overview/assembly imagery.
- Tackle contextual popovers display the approved recognition image on demand.
- Tackle WebP reference images now use transparent backgrounds so they blend with the active card/modal surface without a visible white rectangle.
- Texas Rig assembly wording now explicitly seats the bait nose against the hook offset before measuring the re-entry point.
- Rig reference imagery policy now prioritizes licensed verified images or authoritative external references over generated diagrams.

### Preserved

- Fish Search
- Rig browsing
- `Name ⓘ` contextual Tackle interaction
- Related-component popover navigation
- Per-Rig readiness persistence
- Inline Ready/Missing status

---

# Version 0.2.6 — Tackle References and Rig Visual Guides

**Date:** 2026-08-06  
**Milestone:** MS2.6

This release history is retained as a historical implementation record. Later Unreleased architecture supersedes generated Rig media and the dedicated-readiness workflow where noted above and in `MILESTONES.md`.

## Added

- Canonical `data/tackle.js`
- 15 stable Tackle reference records
- Centralized `data/media.js`
- Stable media IDs and licensing metadata
- Local `images/tackle/` asset library
- Local `images/rigs/` asset library
- 15 active Tackle SVG reference illustrations
- Contextual `Name ⓘ` Tackle reference links
- In-place Tackle reference modal / bottom-sheet interaction
- Related-component links inside reference popovers
- Recognition guidance, aliases, variants, and related-Rig information
- Completed-Rig overview illustration support
- Completed-Rig overview illustrations for all four current Rigs
- Generic Rig media roles: `overview`, `assembly-step`
- Sequence-based Rig assembly media ordering
- Four-step Texas Rig visual assembly guide
- 23 active media records total

## Validation

- Tackle data and media counts validated at the time of this historical release.
- Reference popovers validated.
- Related Tackle navigation validated.
- Rig overview sections validated.
- Four Texas Rig steps validated.
- Tackle Readiness validated.
- GitHub and live deployment validated.

---

# Version 0.2.5 — Lightweight Tackle Readiness

**Date:** 2026-08-05  
**Milestone:** MS2.5

Historical release that introduced the local per-Rig readiness checklist and persistence key `freshwaterFishingCompanion.tackleReadiness.v1`. Later architecture integrates readiness into the Rig page and treats this storage as transitional.

---

# Version 0.2.4 — Functional Rig Guide

- Canonical Rig data
- Browse All Rigs
- Searchable Rig list
- Rig detail pages
- Component and assembly guidance

---

# Version 0.2.3 — Functional Fish Search

- Functional Fish Search
- Live search
- Reusable result cards
- Parent/Home navigation
