# Freshwater Fishing Companion

**Document:** ARCHITECTURE.md  
**Version:** 0.2.3  
**Status:** Active  
**Last Updated:** 2026-08-05

> NOTE: This file reflects the validated MS2.5 lightweight tackle-readiness implementation.

## Current Source Structure

    index.html
    forest-journal.css
    forest-copper.css
    forest-gold.css
    legacy-dark-theme.css

    data/
        fish.js
        rigs.js

    search.js
    view-renderer.js
    script.js

    docs/
        project documentation

The application uses a three-layer architecture:

1. Reference Knowledge
2. Decision Knowledge
3. User Knowledge

GitHub is the authoritative source for project files.

The required JavaScript load order is:

    data/fish.js
    data/rigs.js
    search.js
    view-renderer.js
    script.js

## Source Ownership

### `data/fish.js`

Owns canonical Fish reference records and stable Fish IDs.

### `data/rigs.js`

Owns canonical Rig records, stable Rig IDs, component requirements, assembly steps, setup notes, common mistakes, and safety notes.

### `search.js`

Owns reusable, non-mutating lookup, search, filter, and sort operations.

### `view-renderer.js`

Owns reusable page rendering and navigation.

Validated MS2.5 responsibilities include:

- Top-level child-card rendering
- Search-page rendering
- Generic result rendering
- Instructional Rig detail rendering
- Tackle-readiness checklist rendering
- Required-item readiness status
- Parent navigation
- Home navigation

### `script.js`

Coordinates:

- Application routes
- View registration
- Dashboard restoration
- Fish search
- Rig browsing and Rig detail
- Tackle-readiness routing
- Local readiness-state loading
- Local readiness-state persistence
- Per-Rig component selection

## Rig Guide Architecture

The validated Rig Guide flow is:

    Dashboard
    → Rig Guide
    → Browse All Rigs
    → Select a Rig
    → Instructional Rig Detail
    → Check My Tackle
    → Tackle Readiness

## Lightweight Tackle Readiness

The lightweight readiness feature uses each Rig record's `componentRequirements` as the canonical checklist source.

The application stores user selections under:

    freshwaterFishingCompanion.tackleReadiness.v1

Storage is implemented with `localStorage`.

Saved readiness data is organized by:

- Stable Rig ID
- Stable component ID
- Boolean availability state

Readiness evaluation:

- Optional components do not block readiness.
- All required components must be selected for `Ready to Fish`.
- Missing required components are listed by name.
- Each Rig maintains an independent checklist.
- Invalid or malformed stored data falls back safely to an empty state.

This storage layer is intentionally lightweight. A future inventory system may replace the lookup source without changing the Rig detail or readiness interfaces.

## Current Validated Baseline

The current validated baseline includes:

- Dashboard
- Eight application views
- Shared view renderer
- Shared search utilities
- Canonical Fish data
- Canonical Rig data
- Functional Fish search
- Functional Rig browsing
- Instructional Rig detail pages
- Check My Tackle action
- Per-Rig readiness checklists
- Required and optional component handling
- Persistent local selections
- Ready and missing-item status
- Parent and Home navigation
- Runtime build identifiers
- GitHub Pages deployment validation

## Active Priority

The field-ready Rig and Tackle MVP is complete.

The next feature should be selected based on immediate field needs or the approved roadmap.
