# Freshwater Fishing Companion

**Document:** MILESTONES.md  
**Document Revision:** 1.6.0  
**Document Status:** Approved  
**Last Updated:** 2026-08-07

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

**Current note:** the lightweight substring implementation remains current, but D022 establishes relevance-first Search as the permanent quality standard and approves lightweight deterministic ranking before dataset growth makes Search noisy.

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

**Superseding current architecture:** D020 moved readiness into the Rig `What You Need` section and removed the separate readiness page from the primary workflow. D028 further establishes that future persistent ownership comes only from My Tackle; the current local readiness storage is transitional.

## MS2.6 — Tackle References and Rig Visual Guides

Historical MS2.6 validated canonical Tackle/media infrastructure, contextual reference popovers, generated Rig overview/assembly imagery, and a 23-record media catalog.

**Superseding current architecture:** D017–D019 replaced generated completed-Rig/build-step imagery with authoritative text assembly plus verified external Rig references. Current active Tackle recognition media uses approved transparent WebP assets in contextual `Name ⓘ` help. Generated Rig imagery from MS2.6 is historical, not current production guidance.

# Current / Next Milestone

No new build segment should be declared active until the current documentation/governance closeout is pushed and validated in GitHub. See D039–D041 and `DEVELOPMENT_WORKFLOW.md`.

After closeout, `HANDOFF.md` identifies the recommended next work and must be updated as the active segment changes.
