# Freshwater Fishing Companion

**Document:** ARCHITECTURE.md  
**Version:** 0.2.6  
**Status:** Active  
**Last Updated:** 2026-08-06

> NOTE: This file reflects the validated MS2.6 tackle-reference and Rig visual-guide implementation.

## Current Source Structure

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
        project documentation

The application uses a three-layer architecture:

1. Reference Knowledge
2. Decision Knowledge
3. User Knowledge

GitHub is the authoritative source for project files.

The required JavaScript load order is:

    data/fish.js
    data/rigs.js
    data/tackle.js
    data/media.js
    search.js
    view-renderer.js
    script.js

## Knowledge-System Principle

Every primary entity or result should act as a gateway to adjacent knowledge that helps the user understand the current item and make the next decision.

Examples:

- Fish → suitable Rigs, lures, conditions, knots, and regulations
- Rig → target Fish, conditions, components, knots, alternatives, assembly, and tackle readiness
- Tackle component → definition, recognition guidance, compatible Rigs, alternatives, and related components
- Knot → purpose, compatible line types, relevant Rigs, and instructional sequence
- Lure → target Fish, conditions, rigging, retrieval, color guidance, and alternatives

This principle should be implemented without overwhelming the user with unrelated information.

## Source Ownership

### `data/fish.js`

Owns canonical Fish reference records and stable Fish IDs.

### `data/rigs.js`

Owns canonical Rig records, stable Rig IDs, component requirements, assembly steps, setup notes, common mistakes, safety notes, and Rig media references.

Current MS2.6 Rig media support includes:

- One completed-Rig overview media reference for each of the four current Rigs
- Four ordered Texas Rig assembly-step media references

### `data/tackle.js`

Owns canonical Tackle reference records and stable Tackle IDs.

The current catalog contains 15 active reference records.

Each record may include:

- Stable ID
- Display name
- Aliases
- Category
- Summary
- Purpose
- Recognition notes
- Common variants
- Related Rig IDs
- Related Tackle IDs
- Media IDs
- Version metadata
- Active state

Tackle items may exist independently of a Rig. Rig records reference Tackle items; Tackle items do not require Rig membership.

### `data/media.js`

Owns centralized media metadata and stable media IDs.

The current MS2.6 catalog contains 23 active media records:

- 15 Tackle reference illustrations
- 4 completed-Rig overview illustrations
- 4 Texas Rig assembly-step illustrations

Media records may include:

- Stable media ID
- Owner type
- Owner ID
- Media role where applicable
- Sequence where applicable
- Media type
- Local file path
- Alternative text
- Caption
- Licensing metadata
- Replacement status
- Version metadata
- Active state

Current Rig media roles are:

- `overview`
- `assembly-step`

Assembly-step media uses `sequence` for deterministic ordering.

### `search.js`

Owns reusable, non-mutating lookup, search, filter, and sort operations.

### `view-renderer.js`

Owns reusable page rendering and navigation.

Validated MS2.6 responsibilities include:

- Top-level child-card rendering
- Search-page rendering
- Generic result rendering
- Instructional Rig detail rendering
- Completed-Rig media rendering
- Ordered visual assembly-guide rendering
- Contextual Tackle reference popovers
- Related-component links inside reference popovers
- Tackle-readiness checklist rendering
- Required-item readiness status
- Parent navigation
- Home navigation
- Modal close behavior and focus restoration

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

Reference-popover behavior remains owned by `view-renderer.js`.

## Rig Guide Architecture

The validated Rig Guide flow is:

    Dashboard
    → Rig Guide
    → Browse All Rigs
    → Select a Rig
    → Instructional Rig Detail
        → Completed Rig
        → What You Need
            → Tackle Reference Popover
        → Visual Assembly Guide, when available
        → How to Rig It
        → Setup Notes
        → Common Mistakes
        → Safety
        → Check My Tackle
    → Tackle Readiness

## Contextual Reference Popovers

Inline contextual references use the permanent interaction convention:

    Name ⓘ

Examples:

    Bullet Weight ⓘ
    Offset Worm Hook ⓘ

The entire name and information symbol are interactive.

Behavior:

- Desktop uses a centered modal.
- Mobile may present the same interaction as a bottom sheet.
- The current page remains underneath.
- Closing returns focus to the original `Name ⓘ` trigger.
- Related Tackle references can be opened from inside the popover.
- The interaction is contextual and does not navigate away from the current page.

The `ⓘ` symbol should consistently mean: open contextual information without leaving the current page.

## Media Strategy

Media is bundled locally. Third-party hotlinking is not part of the production architecture.

Preferred formats:

- SVG for diagrams, line art, and recognition-focused illustrations
- Optimized WebP for photographic media when required

Current MS2.6 Tackle and Rig illustrations are SVG assets to minimize storage and preserve sharp rendering.

Recommended storage targets:

- Tackle reference images: generally 30–100 KB, normal ceiling approximately 150 KB
- Accuracy-critical Fish images: approximately 150–300 KB when diagnostic detail requires it
- SVG diagrams: favor compact vector assets whenever practical

Media should be loaded only when needed:

- Reference-popover images are created only when the contextual popover opens.
- Rig assembly-step images use browser lazy loading.
- Completed-Rig overview images load with the selected Rig detail page.

## Media Accuracy Standard

Media requirements depend on entity type.

### Fish

Fish identification is accuracy-critical.

Use verified authoritative photographs or scientific illustrations. Do not use approximate look-alike imagery for identification.

### Tackle

Recognition is the priority.

A photograph, diagram, or illustration is acceptable when a beginner can reliably recognize the item in a store or tackle box.

### Rigs

Rig diagrams must accurately represent:

- Component order
- Hook orientation
- Weight orientation
- Leader placement
- Bait placement
- Assembly sequence

A technically inaccurate Rig diagram must be corrected even if it is visually polished.

The Texas Rig overview and four assembly-step illustrations were technically corrected during MS2.6 after live validation identified incorrect hook orientation.

### Knots

Prefer step-by-step instructional diagrams first. Animation may be added later when practical.

## Licensing Metadata

Every reusable media record should retain licensing metadata even when attribution is not required.

Current metadata fields support:

- License status
- License type
- Creator
- Source URL
- License URL
- Attribution requirement
- Commercial-use permission
- Modification permission
- Review date

Current MS2.6 Tackle and Rig SVG illustrations are recorded as original Freshwater Fishing Companion project assets.

If an external licensed asset is introduced later, its stable media ID should remain independent of the external filename so the underlying asset can be replaced without changing consuming records.

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
- Canonical Tackle reference data
- Centralized media catalog
- Functional Fish search
- Functional Rig browsing
- Instructional Rig detail pages
- Contextual `Name ⓘ` Tackle reference popovers
- Tackle reference illustrations
- Related-component popover navigation
- Completed-Rig overview illustrations for all four current Rigs
- Four-step Texas Rig visual assembly guide
- Corrected Texas Rig technical geometry
- Check My Tackle action
- Per-Rig readiness checklists
- Required and optional component handling
- Persistent local selections
- Ready and missing-item status
- Parent and Home navigation
- Runtime build identifiers
- GitHub Pages deployment validation

## Active Priority

MS2.6 is complete.

The next feature should be selected from the approved roadmap based on the next highest-value field workflow while preserving the connected-knowledge architecture.
