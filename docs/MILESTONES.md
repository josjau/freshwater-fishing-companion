# Freshwater Fishing Companion

**Document:** MILESTONES.md  
**Document Revision:** 1.7.3  
**Document Status:** Approved  
**Last Updated:** 2026-08-08

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

**Current note:** the lightweight substring implementation remains current, while D022 establishes relevance-first Search as the permanent quality standard.

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

**Current note:** D027 approves a 20-Rig regional library. The six-Rig Core milestone is In Progress in the Core Rigs and Tackle Media segment; the remaining fourteen Rigs are Approved / Not Implemented.

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


# In Progress

## Core Rigs and Tackle Media

**Implementation Status: In Progress**

Prepared scope:

- complete the Core 6 with Jighead + Soft Plastic and Inline Spinner Setup,
- add canonical Jighead and Inline Spinner Tackle concepts,
- implement the ordered Core learning-path section and Core card/detail emphasis,
- replace the 15 prior Tackle assets and add two new assets using the approved neutral-background standard,
- preserve text-authoritative Rig assembly and verified external visual references,
- prohibit generated finished-Rig/build-step instruction media.

The milestone is not complete until GitHub and runtime/regression validation pass and closeout documentation is revalidated.

# Next Segment

Complete and validate the active Core Rigs and Tackle Media segment before beginning the remaining fourteen regional Rigs or another module.
