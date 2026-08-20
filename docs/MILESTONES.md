# Freshwater Fishing Companion

**Document:** MILESTONES.md  
**Document Revision:** 2.3.1  
**Document Status:** Approved  
**Last Updated:** 2026-08-19

# Purpose

This document preserves milestone history. Historical milestone completion records describe what was validated at that time; later approved architecture may supersede the workflow or media approach without rewriting history.

When a historical milestone conflicts with current architecture, `DECISIONS.md`, `ARCHITECTURE.md`, `ROADMAP.md`, and `HANDOFF.md` govern the current state.

**Current navigation supersession note:** historical milestone entries that record Parent/Home top-reset behavior remain valid evidence of what passed at that time. D051 has since been revised for standard application views: Forward opens the new destination at top, Parent restores the immediately preceding standard application context including applicable UI state and prior scroll position, and Home opens Dashboard at top and clears contextual return state. Specialized workflows such as Reel Setup may use separately approved navigation semantics.

# Completed

## Milestone 1 — Application Foundation

- Dashboard
- Navigation
- Shared page renderer
- Eight application views
- Forest Journal theme
- Runtime validation

## MS2.1 — Fish Data Foundation

- Canonical Fish data
- Stable Fish IDs
- Initial Fish records
- Runtime data validation

## MS2.2 — Shared Search and Rendering Utilities

- Shared search utilities
- Shared rendering utilities
- Application coordinator
- Console validation

## MS2.3 — Functional Fish Search

- Functional Fish Search route
- Common-name search
- Scientific-name search
- Category search
- Reusable result cards
- Parent/Home navigation
- Responsive validation

**Current note:** the primary Fish workflow now exposes the shared inline search field directly on the Fish Guide landing page. Search uses lightweight deterministic relevance ranking under D022/D050 instead of alphabetizing all substring matches, while the historical standalone Fish Search route remains part of milestone history rather than the current primary interaction.

## MS2.4 — Functional Rig Guide

- Canonical Rig data
- Four beginner-focused Rig records
- Browse All Rigs
- Rig search
- Rig instructional detail pages
- Component requirements
- Ordered assembly steps
- Setup notes
- Common mistakes
- Safety guidance
- Navigation and error handling

**Current note:** D027's approved 20-Rig regional library is now fully implemented and validated through Beginner, Beginner+, Intermediate, Intermediate+, Advanced, and Expert. See **Complete Rig Guide** below for the final current state.

## MS2.5 — Lightweight Tackle Readiness

Historical MS2.5 validated a dedicated readiness route and per-Rig local checklist.

**Superseding current architecture:** D020 moved readiness into the Rig `What You Need` section. D028 establishes future My Tackle ownership authority.

## MS2.6 — Tackle References and Rig Visual Guides

Historical MS2.6 validated canonical Tackle/media infrastructure, contextual reference popovers, generated Rig imagery, and a 23-record media catalog.

**Superseding current architecture:** D017–D019 and D045 replaced generated completed-Rig/build-step imagery with authoritative text assembly plus verified tutorial/external-reference paths. Current Tackle recognition media follows the later `MEDIA_GUIDE.md` catalog-reference standard.

## Current-State UX Repairs

**Implementation Status: Validated**

Validated scope:

- D030: inert child cards use clear `Coming Soon` unavailable semantics.
- D031: Dashboard Regulations CTA uses `Go to ODWC Regulations ↗`.
- D032: restored the previously approved Forest Journal Dashboard hierarchy and interaction behavior without redesign.

Validated regressions:

- Fish Search
- Rig browsing/detail
- Tackle contextual popovers
- Inline Rig readiness
- Dashboard card order and parent routes
- Current data/media architecture
- Responsive/accessibility behavior
- Normal-navigation console health

Repository cleanup and documentation-preservation corrections were also completed before closeout.

See:

- `workstreams/UX-REPAIRS.md`
- `workstreams/UX-REPAIRS-VALIDATION.md`

## Rig/Tackle Data Integrity — Batch 1

**Implementation Status: Validated**

Validated scope:

- explicit `Rig.componentRequirements[].tackleId`,
- canonical Tackle display-name ownership,
- removal of duplicated Rig-side component names,
- removal of manual Tackle `rigIds`,
- derived Tackle `Used In` relationships,
- readiness storage compatibility,
- consistent `tackleId` readiness parameter naming.

Validated runtime/regression coverage:

- canonical `What You Need` names,
- contextual Tackle references,
- required/optional readiness behavior,
- readiness persistence,
- derived `Used In`,
- Fish Search,
- Rig browse/search,
- external Rig references,
- related Tackle navigation,
- normal-navigation console health,
- phone and desktop layout checks.

The initial documentation over-condensation defect was corrected before closeout, and a repository-side replacement-integrity safeguard was added.

See:

- `workstreams/RIG-TACKLE-DATA-INTEGRITY.md`
- `workstreams/RIG-TACKLE-DATA-INTEGRITY-VALIDATION.md`

## Core Rigs and Tackle Media

### Rig Learning Tiers — Rig UX Finalization

**Implementation Status: Validated**

Validated source/data/media scope:

- nine active Rigs with six Beginner and three Beginner+ records,
- six-member single-owner `CORE_RIG_IDS` registry,
- All Rigs first in the Rig Guide, followed by Core, Beginner, Beginner+, and unavailable later tiers,
- global Rig Guide search plus scoped subset search,
- Dashboard-derived varied navigation-card accents with restrained Core emphasis,
- corrected Wacky Rig, Ned Rig, and Weightless Soft-Plastic Rig assembly/readiness behavior,
- 20 active canonical Tackle concepts,
- intact warm-neutral worm-bait recognition media,
- Texas Rig lazy-loaded Wired2Fish tutorial pilot through `youtube-nocookie.com` with external fallback,
- compact Rig-detail density approved for Rigs,
- shared inline search fields with explicit one-click clear control,
- deterministic relevance ranking with canonical-name confidence ahead of lower-priority metadata,
- compact sticky Parent/Home navigation,
- top-reset behavior for forward, Parent, and Home transitions.

Validated runtime/regression coverage included mobile and desktop Rig detail presentation, Core/Beginner/Beginner+/All membership and search scope, Wacky/Ned/Weightless component/readiness behavior, worm recognition media, Texas tutorial playback in Brave, Fish landing-page search, clear controls, `Ned` ranking Ned Rig first, sticky navigation, Parent/Home top reset, Fish common/scientific/category search, and derived Tackle `Used In` relationships.

**Current note:** the top-reset Parent behavior above is preserved as historical validation evidence. Revised D051 now governs standard application Parent behavior and supersedes that historical navigation rule for future/current architecture.

The compact-detail standard remains Rig-specific. Dashboard search is approved future direction but remains deferred pending deliberate cross-domain scope and result-presentation design. Dashboard card density remains unchanged.

See:

- `workstreams/CORE-RIGS-TACKLE-MEDIA.md`
- `workstreams/CORE-RIGS-TACKLE-MEDIA-VALIDATION.md`
- `workstreams/RIG-UX-RUNTIME-FOLLOWUP.md`

## Beginner/Beginner+ Media Completion + Intermediate Rig Expansion

**Implementation Status: Validated / Finalized**

Implementation baseline:

`e4b61aea052f4ad843be0f6d54231af87d574905` — `Rigs - Intermediate Build`

Final production-data corrections:

- `80b8ef0ba2b0734429b29a5b02c318e02c81bc55` — final Rig tutorial/reference corrections
- `291967ed4eb19eb9b1f7f83837c59133c949a333` — Bobber Stop alt-text correction

Validated final scope:

- 13 active Rigs total,
  - 6 Beginner,
  - 3 Beginner+,
  - 4 Intermediate,
- Intermediate tier:
  1. Drop Shot Rig
  2. Carolina Rig
  3. Live-Bait Slip-Sinker Rig
  4. Three-Way Rig
- 23 active canonical Tackle concepts,
- 23 active Tackle recognition-media records,
- unchanged six-member Core registry,
- all Intermediate membership/routing/search/detail/readiness behavior passed,
- recognition-media package and phone/desktop contextual-popover validation passed,
- retained tutorial regression passed,
- six approved tutorial replacements were implemented and passed final runtime validation,
- Inline Spinner Mepps-only external fallback passed after Panther Martin removal,
- Bobber Stop metadata was corrected for the approved rubber/silicone stop and re-tested,
- Beginner/Beginner+/Core, Fish Guide/search, Dashboard, desktop console/focus/layout, and mobile responsive regressions passed.

Permanent decisions promoted at closeout:

- D053 — Rig Media Completeness and Tutorial Audit
- D054 — Intermediate Rig Tier Membership

The validated tutorial standard is build-first: correct Rig assembly/configuration is the primary purpose; concise/direct sources are preferred when technically complete; technique/retrieve/presentation content is secondary; no arbitrary fixed duration threshold is required.

See:

- `workstreams/RIG-BEGINNER-MEDIA-INTERMEDIATE.md`
- `workstreams/RIG-BEGINNER-MEDIA-INTERMEDIATE-VALIDATION.md`
- `MEDIA_GUIDE.md`
- `RIG_REFERENCE_SOURCES.md`

## Complete Rig Guide

**Implementation Status: Validated / Finalized**

Final production correction commit:

`4375ca3e05cfbfef6ab0a3e4662c2afd19b86f42` — `Rig Updates Images and tutorials`

Validated final scope:

- 20 active Rigs,
- 6 learning tiers,
- final tier counts: 6 Beginner / 3 Beginner+ / 4 Intermediate / 4 Intermediate+ / 2 Advanced / 1 Expert,
- unchanged six-member Core registry and order,
- 29 active canonical Tackle concepts,
- 29 active Tackle recognition-media records,
- seven final-tier Rigs fully integrated:
  1. Neko Rig
  2. Shaky Head Rig
  3. Free Rig
  4. Double-Jig Crappie Rig
  5. Jika Rig
  6. Punch / Pegged Texas Rig
  7. Bottom-Bouncer / Spinner Rig
- six final canonical Tackle concepts integrated with approved recognition media:
  1. Nail Weight
  2. Shaky Head Jighead
  3. Ringed Sinker
  4. Split Ring
  5. Bottom Bouncer
  6. Spinner Harness
- seven approved build-first YouTube tutorials integrated and runtime-validated,
- all seven final-tier detail pages passed runtime validation,
- all six new `Name ⓘ` reference panels passed runtime image validation,
- representative readiness persistence passed,
- desktop Edge layout and console health passed,
- mobile-width Edge device emulation at approximately 375 px passed with no horizontal overflow or clipped controls,
- GitHub Pages deployment and deployed-artifact integrity passed.

Final workstream record:

`workstreams/RIG-GUIDE-COMPLETION.md` revision 1.0.0

The approved initial Rig Guide is complete. Further Rig work is enhancement scope rather than completion of the initial library.

## Knots

**Implementation Status: PASS / VALIDATED / FINALIZED / CLOSED**

Final validated production source baseline:

`e7a00db6936eba2aa11277a1a4d923d5f2e7cb32` — `Knots - compact connected knowledge pills`

Validated final scope:

- 10 active canonical Knots,
- 6 Beginner / 4 Intermediate,
- four approved Core Knot IDs,
- all 20 active Rigs audited with 31 real tied `knotApplications` connections,
- task-first Knot Guide navigation,
- deterministic Knot search,
- canonical text instruction pages,
- verified instructional-media coverage for all 10 Version 1 Knots,
- Production Package 3 **Get Your Reel Ready** complete and validated,
- site-wide shared floating Root/Nested navigation complete and validated,
- specialized Reel Setup floating navigation corrected and validated,
- context-preserving Rig ↔ Knot and Reel Setup ↔ Knot navigation validated,
- clickable Common Tasks, Rig usage links, and Line Compatibility connected-knowledge paths validated,
- minimal Line Type reference/detail view validated,
- Dashboard priority order validated as **Fish Guide, Knots, Rig Guide, Tackle**,
- Tackle root validated with **Tackle Reference / Find Tackle**, **My Tackle**, and **Check Rig Readiness**,
- connected-knowledge pills finalized at compact content-width sizing,
- keyboard navigation passed,
- narrow-viewport behavior passed,
- normal-navigation console health passed.

Final closeout workstream:

`workstreams/KNOT-INTEGRATED-REGRESSION.md`

Production Package records:

- `workstreams/KNOT-PRODUCTION-PACKAGE-1.md`
- `workstreams/KNOT-PRODUCTION-PACKAGE-2.md`
- `workstreams/KNOT-PRODUCTION-PACKAGE-3.md`
- `workstreams/KNOT-PRODUCTION-PACKAGE-4.md`

The Knots milestone is closed. Further Knot work is enhancement/defect scope unless a later approved milestone explicitly extends it.

# Canonical Upcoming Milestone Sequence

The approved development order remains:

1. **Knots** — completed / validated / closed.
2. **Fish Guide** — next approved product milestone; currently paused behind Repository Audit Cleanup.
3. **What Should I Throw** — recommendation/Decision Knowledge milestone, including the approved `How to Rig It` versus `How to Fish It` instructional split.
4. **Tackle Reference / Find Tackle** — searchable canonical Tackle discovery independent of remembering a Rig; results expose derived `Used In` Rig relationships and other connected knowledge.
5. **Settings / User Data Architecture Gate** — settle persistence, retention, backup/restore, schema migration, user/profile model, themes, and preference ownership before persistent User Knowledge features.
6. **My Tackle** — implement persistent ownership only after the User Data architecture gate.
7. **Catch Log** — implement after My Tackle on the settled User Knowledge persistence architecture.
8. **Global Search** — design after the major searchable domains and entity models are established; preserve relevance-first behavior and avoid an undifferentiated result dump.
9. **Favorites final decision** — defer implementation until near project completion and decide whether to keep, narrow, replace, or remove it based on actual workflow value.

`ROADMAP.md` revision 0.3.4 or later remains the canonical planning sequence; the ordering itself has not changed.

# Current Active Workstream and Next Product Milestone

**Current active workstream:** Repository Audit Cleanup. Sections 1–5 are complete; Section 6 — Governing Documents Comprehensive Synchronization — is active.

**Next product milestone:** Fish Guide. Fish Guide remains the next approved product milestone but is temporarily paused until the Repository Audit Cleanup Gate and final re-audit are closed.

When the cleanup gate closes, resume Fish Guide from the current Phase 0 architecture state rather than treating it as a new milestone restart.
