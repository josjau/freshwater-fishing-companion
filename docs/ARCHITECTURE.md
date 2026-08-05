# Freshwater Fishing Companion

**Document:** ARCHITECTURE.md  
**Version:** 0.2.1  
**Status:** Active  
**Last Updated:** 2026-08-05

> NOTE: This file supersedes the previous architecture documentation and reflects the validated MS2.3 implementation.

## Current Source Structure

    index.html
    forest-journal.css
    forest-copper.css
    forest-gold.css
    legacy-dark-theme.css

    data/
        fish.js

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
    search.js
    view-renderer.js
    script.js

## Source Ownership

### `data/fish.js`

Owns canonical Fish reference records and stable Fish IDs.

### `search.js`

Owns reusable, non-mutating lookup, search, filter, and sort operations.

### `view-renderer.js`

Owns reusable page rendering and navigation.

Validated MS2.3 responsibilities include:

- Top-level child-card rendering
- Stable `data-card-id` attributes
- Child-card click handling
- Search-page rendering
- Search form behavior
- Live input search
- Search result rendering
- Stable `data-result-id` attributes
- Result-count and no-results status
- Parent-page navigation
- Home navigation

### `script.js`

Coordinates:

- Application routes
- View registration
- Dashboard restoration
- Fish Guide actions
- Fish search configuration
- Fish search execution
- Application initialization

Feature-specific view behavior remains in the application coordinator until it becomes large enough to justify a focused feature module.

## Fish Search Architecture

The validated Fish search flow is:

    Dashboard
    → Fish Guide
    → Search Fish
    → Fish result selection

Fish search currently supports:

- Common-name matching
- Scientific-name matching
- Category matching
- Live filtering while typing
- Form submission
- Active-record filtering
- Alphabetical result sorting
- Empty-query display of all active Fish
- Clear no-results messaging
- Responsive result cards
- Keyboard-visible focus states
- Stable Fish selection by ID

Search result selection currently logs the stable Fish ID. Fish Detail will replace that temporary behavior.

## Navigation Pattern

The Fish Search page provides:

- `← Fish Guide`
- `Home`

The parent navigation returns to Fish Guide.

Home returns directly to the dashboard.

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
- Functional Fish search
- Live search behavior
- Reusable Fish result cards
- Parent and Home navigation
- Runtime build identifiers
- GitHub Pages deployment validation

## Next Milestone

MS2.4 — Fish Detail View

MS2.4 will use the stable Fish ID selected from search results to render a Fish detail page.
