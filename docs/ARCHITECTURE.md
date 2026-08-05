# Freshwater Fishing Companion

**Document:** ARCHITECTURE.md  
**Version:** 0.2.0  
**Status:** Active  
**Last Updated:** 2026-08-05

> NOTE: This file supersedes the previous architecture documentation and reflects the validated MS2.2 implementation.

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

The current validated baseline includes:
- Dashboard
- Eight application views
- Shared view renderer
- Shared search utilities
- Canonical Fish data
- Runtime build identifiers
- GitHub Pages deployment validation

Next milestone:
MS2.3 — Functional Fish Search
