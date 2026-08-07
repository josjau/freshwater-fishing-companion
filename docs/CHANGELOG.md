# Freshwater Fishing Companion

**Document:** CHANGELOG.md  
**Version:** 1.5.0  
**Status:** Active  
**Last Updated:** 2026-08-06

# Unreleased

## Next

- Select the next feature from the approved roadmap.

---

# Version 0.2.6 — Tackle References and Rig Visual Guides

**Date:** 2026-08-06  
**Milestone:** MS2.6

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
- Generic Rig media roles:
  - `overview`
  - `assembly-step`
- Sequence-based Rig assembly media ordering
- Four-step Texas Rig visual assembly guide
- 23 active media records total

## Changed

- `index.html` now loads `data/tackle.js` and `data/media.js` before shared utilities and application coordination.
- `data/rigs.js` now links Rig records to stable media IDs.
- `view-renderer.js` now renders contextual Tackle references, completed-Rig media, and ordered visual assembly media.
- `forest-journal.css` now styles reference popovers and Rig visual guides.
- Rig component names now use the permanent `Name ⓘ` contextual-information convention.
- Reference images are resolved from the centralized media catalog instead of being hard-coded into component records.
- Rig visual assets use stable media IDs so future asset replacements do not require renderer changes.

## Media

Current media catalog:

- 15 Tackle reference SVGs
- 4 completed-Rig overview SVGs
- 4 Texas Rig assembly-step SVGs

Current total:

    23 active media records

Current MS2.6 Tackle and Rig illustrations are bundled local SVG assets recorded as original Freshwater Fishing Companion project assets.

Reference-popover images are created when the popover opens. Rig assembly-step images use browser lazy loading.

## Texas Rig Technical Correction

The initial Texas Rig illustrations were rejected during live validation because the hook orientation and bait relationship were technically incorrect.

The five Texas Rig assets were replaced:

- `images/rigs/texas-rig-overview.svg`
- `images/rigs/texas-rig-step-1.svg`
- `images/rigs/texas-rig-step-2.svg`
- `images/rigs/texas-rig-step-3.svg`
- `images/rigs/texas-rig-step-4.svg`

The corrected set better represents:

- Sliding bullet-weight orientation
- Offset worm-hook orientation
- Soft-plastic placement
- Hook bend below the bait
- Hook point returning toward / into the bait for a weed-resistant presentation

## Validation

- Confirmed `TACKLE_DATA.length` reports 15.
- Confirmed initial `MEDIA_DATA.length` reports 15 before Rig media expansion.
- Confirmed Tackle reference popovers open from Rig component names.
- Confirmed Bullet Weight reference illustration renders in the live application.
- Confirmed Offset Worm Hook reference illustration renders in the live application.
- Confirmed Soft Plastic reference illustration renders in the live application.
- Confirmed popover close behavior and focus restoration.
- Confirmed related Tackle references open from inside the popover.
- Confirmed completed-Rig visual sections render.
- Confirmed Texas Rig Visual Assembly Guide renders four ordered steps.
- Confirmed corrected Texas Rig overview and assembly-step assets render in the live application.
- Confirmed component popovers remain functional after Rig visual-guide changes.
- Confirmed Tackle Readiness remains available from Rig detail.
- Confirmed GitHub commits and live deployment after each completed MS2.6 implementation block.

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
