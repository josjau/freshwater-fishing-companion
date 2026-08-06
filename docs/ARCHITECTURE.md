# Freshwater Fishing Companion

**Document:** ARCHITECTURE.md  
**Version:** 0.2.2  
**Status:** Active  
**Last Updated:** 2026-08-05

> NOTE: This file reflects the validated MS2.4 functional Rig Guide implementation.

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

Owns canonical Rig records and stable Rig IDs.

Validated Rig fields include:

- Foundation metadata
- Difficulty
- Use cases
- Condition tags
- Component requirements
- Assembly steps
- Setup notes
- Common mistakes
- Safety notes
- Technique references
- Variation references
- Image references

Rig records do not store user ownership information.

### `search.js`

Owns reusable, non-mutating lookup, search, filter, and sort operations.

### `view-renderer.js`

Owns reusable page rendering and navigation.

Validated MS2.4 responsibilities include:

- Top-level child-card rendering
- Stable `data-card-id` attributes
- Search-page rendering
- Generic result rendering
- Stable `data-result-id` attributes
- Instructional detail rendering
- Parent navigation
- Home navigation

### `script.js`

Coordinates:

- Application routes
- View registration
- Dashboard restoration
- Fish Guide actions
- Fish search
- Rig Guide actions
- Rig browse and search
- Rig detail selection
- Application initialization

## Rig Guide Architecture

The validated Rig Guide flow is:

    Dashboard
    → Rig Guide
    → Browse All Rigs
    → Select a Rig
    → Instructional Rig Detail

Rig browsing supports:

- Empty-query display of all active rigs
- Rig-name search
- Difficulty search
- Use-case search
- Condition-tag search
- Alphabetical sorting
- Stable Rig selection by ID
- Clear no-results messaging

Rig detail pages display:

- Difficulty
- Summary
- Required and optional components
- Ordered assembly steps
- Setup notes
- Common mistakes
- Safety guidance
- Return to All Rigs
- Home navigation

Invalid or missing Rig IDs return safely to the Rig browse view.

## Stable Identifiers

Top-level child cards use:

    data-card-id="stable-action-id"

Search result cards use:

    data-result-id="stable-record-id"

Visible wording may change without changing behavior, provided the stable identifier remains unchanged.

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
- Searchable Rig list
- Instructional Rig detail pages
- Parent and Home navigation
- Runtime build identifiers
- GitHub Pages deployment validation

## Active Priority

The active implementation priority is the field-ready Rig and Tackle MVP.

The next recommended build is lightweight tackle readiness using Rig component requirements.
