# Freshwater Fishing Companion

**Document:** CHANGELOG.md  
**Version:** 1.7.0  
**Status:** Active  
**Last Updated:** 2026-08-07

# Unreleased

## Rig and Tackle Reference Refresh

### Added

- Functional searchable Tackle Guide using the 15 canonical Tackle records
- Approved lightweight semi-photorealistic Tackle reference board
- Verified external Rig reference links for all four current Rigs
- `Best For` and `Good Conditions` summary blocks on Rig detail pages
- External-reference `↗` convention
- Permanent command-copy/paste documentation standard

### Changed

- Dashboard `My Tackle` entry becomes `Tackle Guide`.
- Rig detail pages use authoritative text build instructions instead of generated Rig overview/assembly imagery.
- Tackle contextual popovers are text-first so obsolete illustration styles do not appear beside the approved reference board.
- Texas Rig assembly wording now explicitly seats the bait nose against the hook offset before measuring the re-entry point.
- Rig reference imagery policy now prioritizes licensed verified images or authoritative external references over generated diagrams.

### Preserved

- Fish Search
- Rig browsing
- `Name ⓘ` contextual Tackle interaction
- Related-component popover navigation
- Check My Tackle
- Per-Rig readiness persistence

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

- `index.html` loads `data/tackle.js` and `data/media.js` before shared utilities and coordination.
- `data/rigs.js` links Rig records to stable media IDs.
- `view-renderer.js` renders contextual references, Rig overview media, and ordered assembly media.
- `forest-journal.css` styles reference popovers and Rig visual guides.
- Rig component names use `Name ⓘ`.
- Media resolves through stable IDs.

## Texas Rig Technical Correction

The initial Texas Rig illustrations were corrected after live validation found incorrect hook orientation and bait relationship.

Corrected assets:

- `images/rigs/texas-rig-overview.svg`
- `images/rigs/texas-rig-step-1.svg`
- `images/rigs/texas-rig-step-2.svg`
- `images/rigs/texas-rig-step-3.svg`
- `images/rigs/texas-rig-step-4.svg`

## Validation

- Tackle data and media counts validated.
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

## Added

- Check My Tackle action
- Per-Rig readiness checklist
- Required/optional handling
- Ready/missing status
- Local persistence
- Safe malformed-state fallback

Storage key:

    freshwaterFishingCompanion.tackleReadiness.v1

---

# Version 0.2.4 — Functional Rig Guide

## Added

- Canonical Rig data
- Browse All Rigs
- Searchable Rig list
- Rig detail pages
- Component and assembly guidance

---

# Version 0.2.3 — Functional Fish Search

## Added

- Functional Fish Search
- Live search
- Reusable result cards
