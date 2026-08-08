# Freshwater Fishing Companion

**Document:** MILESTONES.md  
**Document Revision:** 1.7.2  
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

**Current note:** D027 approves expansion to a 20-Rig regional library with six Core Rigs; that expansion is Approved / Not Implemented.

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

# Next Segment

After the Rig/Tackle closeout documentation is pushed and revalidated on GitHub, the recommended next segment is the Tackle recognition-image quality audit, followed by resolution of the Core-6 Rig-vs-setup modeling question.
