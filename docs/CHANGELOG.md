# Freshwater Fishing Companion

**Document:** CHANGELOG.md  
**Version:** 1.4.0  
**Status:** Active  
**Last Updated:** 2026-08-05

# Unreleased

## Next

- Select the next feature from the approved roadmap.

---

# Version 0.2.5 — Lightweight Tackle Readiness

**Date:** 2026-08-05  
**Milestone:** MS2.5

## Added

- Check My Tackle action on Rig detail pages
- Dedicated Rig readiness route
- Per-Rig tackle checklist
- Required and optional component display
- Ready to Fish status
- Missing-required-item count
- Missing-required-item names
- Local persistence using `localStorage`
- Independent saved readiness state for each Rig
- Safe fallback for unavailable or malformed stored data
- Return navigation to the selected Rig

## Changed

- `script.js` now coordinates tackle-readiness state and routing.
- `view-renderer.js` now renders readiness checklists and status.
- `forest-journal.css` now styles readiness controls, states, and selected items.
- Rig detail pages now provide a direct readiness action.

## Storage

Readiness data uses:

    freshwaterFishingCompanion.tackleReadiness.v1

Selections are keyed by stable Rig ID and stable component ID.

## Validation

- Confirmed Check My Tackle opens from Rig detail.
- Confirmed all Rig components display.
- Confirmed optional components do not block readiness.
- Confirmed all required components produce Ready to Fish.
- Confirmed missing required components are listed.
- Confirmed selections persist after refresh.
- Confirmed each Rig maintains independent selections.
- Confirmed parent and Home navigation.
- Confirmed Fish Search remains functional.
- Confirmed Rig browsing remains functional.
- Confirmed expected runtime identifiers.
- Confirmed zero Console errors.

---

# Version 0.2.4 — Functional Rig Guide

## Added

- Canonical Rig data
- Browse All Rigs
- Searchable Rig list
- Instructional Rig detail pages
- Component and assembly guidance

---

# Version 0.2.3 — Functional Fish Search

## Added

- Functional Fish Search workflow
- Live search
- Reusable result cards
