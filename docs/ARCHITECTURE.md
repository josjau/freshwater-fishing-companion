# Freshwater Fishing Companion

**Document:** ARCHITECTURE.md  
**Version:** 0.2.7  
**Status:** Active  
**Last Updated:** 2026-08-07

# Purpose

This document defines the current application architecture and source ownership for Freshwater Fishing Companion.

GitHub `main` is authoritative for existing project files.

# Current Source Structure

    index.html
    forest-journal.css
    forest-copper.css
    forest-gold.css
    legacy-dark-theme.css

    data/
        fish.js
        rigs.js
        tackle.js
        media.js

    images/
        tackle/
        rigs/

    search.js
    view-renderer.js
    script.js

    docs/
        ARCHITECTURE.md
        CHANGELOG.md
        DECISIONS.md
        DEVELOPMENT_WORKFLOW.md
        MEDIA_GUIDE.md
        MILESTONES.md
        PROJECT.md
        ROADMAP.md
        SPECIFICATION.md
        STYLE_GUIDE.md
        data-model/

Required JavaScript load order:

    data/fish.js
    data/rigs.js
    data/tackle.js
    data/media.js
    search.js
    view-renderer.js
    script.js

# Knowledge Architecture

The application uses three layers:

1. Reference Knowledge
2. Decision Knowledge
3. User Knowledge

Reference Knowledge owns canonical facts. Decision Knowledge owns recommendations and derived guidance. User Knowledge owns inventory, favorites, catches, preferences, and other user-specific state.

Do not blur these layers without an explicit architectural decision.

# Connected-Knowledge Principle

A primary entity or search result should act as a gateway to useful adjacent knowledge.

Examples:

- Fish → Rigs, lures, conditions, knots, regulations, techniques
- Rig → target Fish, conditions, components, alternatives, assembly, readiness
- Tackle → definition, recognition, compatible Rigs, alternatives, related components
- Knot → purpose, line compatibility, Rigs, instructions
- Lure → Fish, conditions, rigging, retrieve, color guidance, alternatives

Avoid information overload.

# Source Ownership

## `data/fish.js`

Owns canonical Fish records and stable Fish IDs.

Fish identification media is accuracy-critical and follows `MEDIA_GUIDE.md`.

## `data/rigs.js`

Owns canonical Rig records, including:

- Stable Rig ID
- Name and summary
- Difficulty
- Use cases
- Condition tags
- Verified external reference links
- Component requirements
- Assembly steps
- Setup notes
- Common mistakes
- Safety notes
- Relationship IDs
- Version metadata
- Active state

The text in `assemblySteps` is the authoritative in-app build sequence.

Rig `referenceLinks` point to verified external fishing references used to visually confirm completed rigs. They are not production-media copies and do not transfer ownership of external content into the project.

Historical `imageIds` fields may remain empty while older media records/assets are retained for cleanup or audit history.

## `data/tackle.js`

Owns the 15 canonical Tackle reference records and stable Tackle IDs.

Tackle may exist independently of a Rig.

Rigs reference Tackle records through component IDs.

## `data/media.js`

Owns reusable canonical media metadata and stable media IDs.

Older MS2.6 Rig/Tackle media records may remain in the repository for historical continuity until a separate cleanup is approved. The current Rig page does not render those historical Rig images, and current Tackle contextual popovers are text-first.

Page-specific presentation media, such as the approved Tackle reference board, may be configured by the owning view when it is not intended to represent one canonical entity.

## `search.js`

Owns reusable, non-mutating lookup, search, filter, and sort helpers.

## `view-renderer.js`

Owns reusable rendering and UI interactions, including:

- Child-card views
- Search pages and result cards
- Rig detail rendering
- Rig external-reference links
- Tackle Guide rendering
- Tackle search result cards
- Contextual `Name ⓘ` Tackle popovers
- Related-component popover navigation
- Tackle-readiness rendering
- Parent/Home navigation
- Modal close behavior and focus restoration

## `script.js`

Coordinates:

- Application routes
- Dashboard restoration
- Fish Guide and Fish Search
- Rig Guide, Rig browsing, Rig details
- Tackle Guide
- Tackle-readiness routing
- Local readiness-state loading/persistence
- Per-Rig component selections

# Rig Guide Architecture

Current Rig flow:

    Dashboard
    → Rig Guide
    → Browse All Rigs
    → Select a Rig
    → Rig Detail
        → Best For
        → Good Conditions
        → Verified Rig Examples ↗
        → What You Need
            → Tackle Reference Popover ⓘ
        → How to Build It
        → Setup Notes
        → Common Mistakes
        → Safety
        → Check My Tackle
    → Tackle Readiness

Rig pages intentionally use authoritative text instructions rather than generated Rig build diagrams.

Completed-Rig visual confirmation uses verified external references unless a clearly licensed, technically verified local asset is approved.

# Tackle Guide Architecture

Current Tackle flow:

    Dashboard
    → Tackle Guide
        → Approved Tackle reference board
        → Search/filter canonical Tackle records
        → Select Details ⓘ
            → Contextual Tackle popover
            → Related Rigs
            → Related components

The approved Tackle reference board is a lightweight WebP presentation asset. It supports recognition but does not replace canonical text in `data/tackle.js`.

# Link Semantics

## Contextual information

    Name ⓘ

Meaning: open contextual information without leaving the current page.

Behavior:

- Desktop centered modal
- Mobile bottom-sheet style when appropriate
- Underlying page remains
- Close restores focus to the original trigger
- Related references may open contextually

## External verified reference

    Reference Name ↗

Meaning: open an external source in a new tab.

Do not use `ⓘ` for external navigation.

# Media Architecture

Detailed media rules are authoritative in `MEDIA_GUIDE.md`.

Preferred formats:

- Optimized WebP for photographic/semi-photorealistic boards
- SVG for technically safe diagrams, line art, and instructional graphics

Entity rules:

- Fish: verified real photographs/scientific illustrations for identification
- Rigs: verified local completed image only when licensing and technical accuracy are established; otherwise external verified reference links
- Tackle: recognition-first semi-photorealistic or vector illustration anchored to real geometry
- Knots: step-by-step diagrams
- Lures: photography or accurate illustration according to recognition requirements
- Techniques: instructional media only when it improves understanding

# Storage Strategy

GitHub Pages footprint is a design constraint.

General targets:

- Tackle board/reference imagery: aggressively optimized; avoid unnecessary source resolution
- Individual Tackle raster imagery: normally below approximately 150 KB
- Fish identification photos: approximately 150–300 KB when diagnostic detail requires it
- SVG: keep compact and avoid unnecessary embedded raster data

The current approved Tackle board is stored as an optimized WebP.

# Tackle Readiness

Storage key:

    freshwaterFishingCompanion.tackleReadiness.v1

Rules:

- Optional components do not block readiness.
- All required components must be selected for `Ready to Fish`.
- Missing required components are listed by name.
- Each Rig maintains independent state.
- Malformed stored data falls back safely.

A future inventory system may replace the lookup source without changing the Rig readiness interface.

# Development Architecture

`DEVELOPMENT_WORKFLOW.md` is authoritative for implementation procedure.

Permanent rules include:

- Fetch latest GitHub source before editing.
- Complete-file replacement is the default delivery method.
- Coherent multi-file modules may be delivered as ZIP packages.
- User normally reviews and commits through GitHub Desktop.
- Verify GitHub after push.
- Documentation closeout is mandatory.
- Commands intended for user copy/paste are placed in fenced code blocks.

# Current Reference-Refresh Scope

The current package changes the presentation layer without changing the canonical 15-item Tackle catalog or Tackle Readiness storage contract.

Implemented changes include:

- Functional searchable Tackle Guide
- Approved Tackle reference board
- Text-first Tackle contextual popovers
- Verified external completed-Rig reference links
- Text-first Rig assembly instructions
- Texas Rig wording corrected for bait seating, rotation, re-entry measurement, and skin-hook finish
- Dashboard `Tackle Guide` label
- Existing Fish Search and readiness workflows preserved

Historical MS2.6 media files are intentionally not deleted in this refresh so source cleanup can be handled separately after live validation.
