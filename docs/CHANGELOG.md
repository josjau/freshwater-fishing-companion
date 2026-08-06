# Freshwater Fishing Companion

**Document:** CHANGELOG.md  
**Version:** 1.3.0  
**Status:** Active  
**Last Updated:** 2026-08-05

# Unreleased

## In Progress

### MS2.5 — Lightweight Tackle Readiness

- Compare Rig component requirements with a lightweight local checklist.
- Show ready and missing component states.
- Support field preparation without implementing the full inventory system.

---

# Version 0.2.4 — Functional Rig Guide

**Date:** 2026-08-05  
**Milestone:** MS2.4

## Added

- `data/rigs.js`
- Four beginner-focused canonical Rig records
- Browse All Rigs workflow
- Searchable Rig list
- Rig search by name, difficulty, use case, and condition
- Stable `data-result-id` selection
- Instructional Rig detail renderer
- Required and optional component lists
- Ordered assembly steps
- Setup notes
- Common mistakes
- Safety guidance
- Return to All Rigs navigation

## Changed

- `index.html` now loads `data/rigs.js`.
- `script.js` now coordinates Rig browsing and Rig detail routes.
- `view-renderer.js` now renders reusable instructional detail pages.
- `forest-journal.css` now styles Rig result cards and detail sections.
- The project priority temporarily shifted from Fish Detail to a field-ready Rig and Tackle MVP.

## Validation

- Confirmed all four rigs display.
- Confirmed Browse All Rigs opens from the Rig Guide.
- Confirmed Rig search behavior.
- Confirmed each Rig opens an instructional detail page.
- Confirmed components, steps, notes, mistakes, and safety guidance display.
- Confirmed All Rigs navigation.
- Confirmed Home navigation.
- Confirmed Fish Search remains functional.
- Confirmed expected runtime identifiers.
- Confirmed zero Console errors.

---

# Version 0.2.3 — Functional Fish Search

## Added

- Functional Fish Search workflow
- Live search
- Reusable search results
- Stable Fish result IDs
- Parent and Home navigation

## Validation

- Common-name search validated.
- Scientific-name search validated.
- Category search validated.
- No-results behavior validated.

---

# Version 0.2.2 — Shared Application Utilities

## Added

- `search.js`
- `view-renderer.js`
- Shared search utilities
- Shared rendering utilities

---

# Version 0.2.1 — Fish Data Foundation

## Added

- Canonical Fish data
- `data/fish.js`
- Stable Fish identifiers
