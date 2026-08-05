# Freshwater Fishing Companion

**Document:** CHANGELOG.md  
**Version:** 1.2.0  
**Status:** Active  
**Last Updated:** 2026-08-05

# Unreleased

## In Progress

### MS2.4 — Fish Detail View

- Open a Fish detail page from a search result.
- Resolve Fish records by stable ID.
- Display canonical Fish reference information.

---

# Version 0.2.3 — Functional Fish Search

**Date:** 2026-08-05  
**Milestone:** MS2.3

## Added

- Functional Search Fish workflow
- Dedicated Fish Search route
- Reusable search-page renderer
- Reusable search-result renderer
- Live search while typing
- Search form submission
- Search result counts
- No-results state
- Stable `data-result-id` attributes
- Parent navigation back to Fish Guide
- Direct Home navigation from Fish Search
- Responsive Fish result cards
- Keyboard-visible search and result focus states

## Changed

- Fish Guide now handles child-card actions.
- Search Fish now opens a functional search page.
- `view-renderer.js` now owns reusable search interfaces and result rendering.
- `script.js` now coordinates Fish search configuration and execution.
- `forest-journal.css` now includes search form and result-card components.

## Search Behavior

Fish search supports:

- Common names
- Scientific names
- Categories
- Active Fish records only
- Alphabetical sorting
- Empty-query display of all active Fish

## Validation

- Confirmed all 12 active Fish appear for an empty query.
- Confirmed `bass` returns Largemouth Bass, Smallmouth Bass, and Spotted Bass.
- Confirmed `Micropterus` returns the three supported black bass records.
- Confirmed `Sunfish` returns Bluegill and Redear Sunfish.
- Confirmed invalid searches display a no-results message.
- Confirmed Fish Guide return navigation.
- Confirmed Home navigation.
- Confirmed responsive result layout.
- Confirmed expected runtime build identifiers.
- Confirmed zero Console errors.

---

# Version 0.2.2 — Shared Application Utilities

## Added

- `search.js`
- `view-renderer.js`
- Shared search utilities
- Shared rendering utilities

## Changed

- `script.js` now coordinates the application.
- JavaScript responsibilities were separated into focused modules.

## Validation

- All dashboard views validated.
- Home navigation validated.
- Search utilities validated.

---

# Version 0.2.1 — Fish Data Foundation

## Added

- Canonical Fish data
- `data/fish.js`
- Stable Fish identifiers

---

# Version 0.1.7 — Complete Application Shell

## Added

- Complete application shell
- Eight dashboard destinations
