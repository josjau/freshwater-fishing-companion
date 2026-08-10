# Freshwater Fishing Companion

**Document:** MILESTONES.md  
**Document Revision:** 1.8.0  
**Document Status:** Approved  
**Last Updated:** 2026-08-10

# Purpose

This document preserves milestone history. Historical milestone completion records describe what was validated at that time; later approved architecture may supersede the workflow or media approach without rewriting history.

When a historical milestone conflicts with current architecture, `DECISIONS.md`, `ARCHITECTURE.md`, and `HANDOFF.md` govern the current state.

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

**Current note:** D027 approves a 20-Rig regional library. Current `main` contains nine active Rigs: the six Core Rigs plus Wacky Rig, Ned Rig, and Weightless Soft-Plastic Rig, completing the Beginner and Beginner+ difficulty tiers. The Rig UX finalization segment below is validated; Intermediate is the next Rig expansion tier.

## MS2.5 — Lightweight Tackle Readiness

Historical MS2.5 validated a dedicated readiness route and per-Rig local checklist.

**Superseding current architecture:** D020 moved readiness into the Rig `What You Need` section. D028 establishes future My Tackle ownership authority.

## MS2.6 — Tackle References and Rig Visual Guides

Historical MS2.6 validated canonical Tackle/media infrastructure, contextual reference popovers, generated Rig imagery, and a 23-record media catalog.

**Superseding current architecture:** D017–D019 replaced generated completed-Rig/build-step imagery with authoritative text assembly plus verified external Rig references.

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

- all four current Rigs,
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
- phone and desktop layouts.

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
- 20 active canonical Tackle concepts with Wacky Hook, Wacky O-Ring, and Ned Jighead,
- intact warm-neutral worm-bait recognition media,
- Texas Rig lazy-loaded Wired2Fish tutorial pilot through `youtube-nocookie.com` with external fallback,
- compact Rig-detail density approved for Rigs,
- shared inline search fields with explicit one-click clear control,
- deterministic relevance ranking with canonical-name confidence ahead of lower-priority metadata,
- compact sticky Parent/Home navigation,
- top-reset behavior for forward, Parent, and Home transitions.

Validated runtime/regression coverage included mobile and desktop Rig detail presentation, Core/Beginner/Beginner+/All membership and search scope, Wacky/Ned/Weightless component/readiness behavior, worm recognition media, Texas tutorial playback in Brave, Fish landing-page search, clear controls, `Ned` ranking Ned Rig first, sticky navigation, Parent/Home top reset, Fish common/scientific/category search, and derived Tackle `Used In` relationships.

GitHub source/package verification passed on `main` commit `7208edfb2240e6cc2c8a7ac3b2fbf11785ef59f0` before formal closeout documentation was prepared.

The compact-detail standard remains Rig-specific. Dashboard search is approved future direction but remains deferred pending deliberate cross-domain scope and result-presentation design. Dashboard card density remains unchanged.

See:

- `workstreams/CORE-RIGS-TACKLE-MEDIA.md`
- `workstreams/CORE-RIGS-TACKLE-MEDIA-VALIDATION.md`
- `workstreams/RIG-UX-RUNTIME-FOLLOWUP.md`

# In Progress

No active build segment remains after this closeout is confirmed on GitHub `main`.

# Next Segment

Begin the **Intermediate Rig tier** after the formal closeout documentation commit is pushed, re-fetched, and validated on actual GitHub `main` under D039/D040.
