# Freshwater Fishing Companion

**Document:** ARCHITECTURE.md  
**Document Revision:** 0.3.1
**Document Status:** Approved
**Last Updated:** 2026-08-08

# Purpose

This document defines the current application architecture and approved near-term source ownership for Freshwater Fishing Companion.

GitHub `main` is authoritative for existing project files.

Where this document distinguishes **Current** from **Approved / Not Implemented**, the Current state describes code that exists in `main`; Approved / Not Implemented describes settled architecture that must not be mistaken for deployed functionality.

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
        HANDOFF.md
        CHANGELOG.md
        DECISIONS.md
        DEVELOPMENT_WORKFLOW.md
        MEDIA_GUIDE.md
        MILESTONES.md
        PROJECT.md
        ROADMAP.md
        SPECIFICATION.md
        STYLE_GUIDE.md
        archive/
        data-model/
        workstreams/

Required JavaScript load order:

    data/fish.js
    data/rigs.js
    data/tackle.js
    data/media.js
    search.js
    view-renderer.js
    script.js

# Theme Support

**Current:** Forest Journal is the only production-supported Version 1 theme.

`forest-copper.css`, `forest-gold.css`, and `legacy-dark-theme.css` are historical/inactive design concepts. They are not required to maintain parity with current production components and are not part of the supported production validation matrix.

**Approved / Not Implemented:** a future shared CSS architecture may centralize base/layout/component behavior and limit theme files primarily to tokens and theme-specific visual overrides before additional themes are promoted to supported status.

# Archive Architecture

Completed package artifacts and historical design/reference assets are preserved outside active production roots when they retain audit or design value. Archived files are historical and do not override current governing documents or production assets.

Active production asset directories should contain only currently referenced or explicitly approved reusable production assets.

# Knowledge Architecture

The application uses three layers:

1. Reference Knowledge
2. Decision Knowledge
3. User Knowledge

Reference Knowledge owns canonical facts. Decision Knowledge owns recommendations and derived guidance. User Knowledge owns inventory, favorites, catches, preferences, and other user-specific state.

Do not blur these layers without an explicit architectural decision.

# Search and Connected-Knowledge Architecture

Search is relevance-first, while connected knowledge is breadth-first.

Search should identify the strongest intended entity rather than produce a broad list of records that merely could match. Canonical names, approved aliases, beginner terminology, scientific names where applicable, category, and deliberately indexed search metadata are strong signals. Incidental description text is not sufficient by itself to justify a primary result.

The common interaction pattern is:

    Find
    -> Confirm the entity
    -> Expose pertinent relationships
    -> Move into related knowledge quickly

A primary entity or search result should act as a gateway to useful adjacent knowledge.

Examples:

- Fish → Rigs, lures, conditions, knots, regulations, techniques
- Rig → target Fish, conditions, components, alternatives, assembly, techniques, readiness
- Tackle → definition, recognition, compatible Rigs, alternatives, related components, ownership context
- Knot → purpose, line compatibility, Rigs, instructions
- Lure → Fish, conditions, rigging, retrieve, color guidance, alternatives, ownership context

Avoid information overload. Related knowledge should be progressively disclosed.

**Current:** `search.js` uses lightweight normalized substring matching and reusable lookup/filter/sort helpers.

**Approved / Not Implemented:** before dataset growth makes Search noisy, introduce lightweight deterministic relevance ranking. Heavy fuzzy search, advanced typo-tolerance, sophisticated confidence systems, natural-language intent parsing, and a global cross-domain result dump remain deferred until demonstrated by actual use.

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

Rig owns physical assembly and rig-specific configuration. Reusable presentation behavior belongs to canonical Technique records.

Rig `componentRequirements` is the authoritative source for Rig-to-Tackle usage relationships.

Each requirement references canonical Tackle through:

    componentRequirements[].tackleId

Canonical Tackle owns the user-facing display name. Rig data owns only Rig-specific usage context such as required/optional status, quantity, order, size/configuration guidance, assembly role, and setup notes. Rig requirements do not duplicate canonical Tackle display names.

Reverse Tackle-to-Rig `Used In` navigation is derived from active Rig requirements rather than stored independently on Tackle.

Rig `referenceLinks` point to verified external fishing references used to visually confirm completed rigs. They are not production-media copies and do not transfer ownership of external content into the project.

Historical `imageIds` fields may remain empty while older media records/assets are retained for cleanup or audit history.

## `data/tackle.js`

Owns the current canonical Tackle reference records and stable Tackle IDs.

Canonical Tackle represents functional tackle types rather than a user's exact commercial possession. Examples include Offset Hook, Bullet Weight, Slip Float, Spinnerbait, Crankbait, and Inline Spinner.

Tackle may exist independently of a Rig.

Tackle does not store manual inverse `rigIds` for Rig usage. Reverse Rig usage is derived from `Rig.componentRequirements[].tackleId`.

## `data/media.js`

Owns reusable canonical media metadata and stable media IDs.

Approved Tackle reference imagery is displayed only when contextual `Name ⓘ` help is opened.

The exact Tackle asset treatment is under a separate planned quality cleanup. Clean edges and recognition quality take priority over mandatory transparency, and artificial baked-in drop shadows are not approved.

## `search.js`

Owns reusable, non-mutating lookup, search, filter, and sort helpers.

The current helper implementation is intentionally lightweight. It is not the permanent relevance-quality ceiling defined by D022.

## `view-renderer.js`

Owns reusable rendering and UI interactions, including:

- Child-card views
- Search pages and result cards
- Rig detail rendering
- Rig external-reference links
- My Tackle inventory-domain rendering
- Contextual `Name ⓘ` Tackle reference rendering
- Canonical Tackle name resolution for Rig requirements
- Derived Tackle `Used In` Rig names
- Related-component popover navigation
- Combined Rig requirements/readiness rendering
- Parent/Home navigation
- Modal close behavior and focus restoration

Any future rendering path that receives User Knowledge or imported content must treat it as untrusted text and render it through safe DOM APIs such as `textContent`, unless a centrally owned sanitization path is explicitly approved.

## `script.js`

Coordinates:

- Application routes
- Dashboard restoration
- Fish Guide and Fish Search
- Rig Guide, Rig browsing, Rig details
- My Tackle
- Current local readiness-state loading/persistence
- Current per-Rig Tackle availability selections

The transitional readiness state continues to store the same canonical Tackle ID string keys. The data-model field rename from requirement `id` to `tackleId` does not require readiness-state migration.

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
        → What You Need + Readiness
            → canonical Tackle name
            → Mark current availability inline
            → Tackle Reference Popover ⓘ
            → Ready / missing-required status
        → How to Build It
        → Setup Notes
        → Common Mistakes
        → Safety

Rig pages intentionally use authoritative text instructions rather than generated Rig build diagrams.

Completed-Rig visual confirmation uses a technically verified and legally reusable local image when approved; otherwise the most direct stable verified external visual destination available.

## Approved Rig Library Expansion — Not Implemented

The initial canonical target is a 20-rig regional library for practical use in northeast Oklahoma and southwest Kansas:

1. Fixed Bobber Rig
2. Basic Bottom Rig
3. Jighead + Soft Plastic
4. Slip Bobber Rig
5. Inline Spinner Setup
6. Texas Rig
7. Weightless Soft-Plastic Rig
8. Wacky Rig
9. Ned Rig
10. Drop Shot Rig
11. Carolina Rig
12. Live-Bait Slip-Sinker Rig
13. Three-Way Rig
14. Neko Rig
15. Shaky Head Rig
16. Free Rig
17. Jika Rig
18. Punch / Pegged Texas Rig
19. Double-Jig Crappie Rig
20. Bottom-Bouncer / Spinner Rig

The confidence-building subset **Core Rigs — Master These First** contains:

- Fixed Bobber Rig
- Basic Bottom Rig — especially useful for catfish
- Jighead + Soft Plastic
- Inline Spinner Setup
- Texas Rig
- Slip Bobber Rig

The Core 6 are the first Rig-expansion milestone and must be complete, accurate, beginner-ready, and validated before expansion to the remaining fourteen Rigs.

Per D042, Core learning groups receive additional restrained Forest Journal hierarchy so the recommended starting path is immediately recognizable.

Before adding the two currently absent Core entries, resolve whether Inline Spinner Setup and Jighead + Soft Plastic are correctly modeled as canonical Rigs or should be represented as lure/setup combinations.

Carolina Rig remains approved for the later regional expansion and resolves the current forward relationship when its canonical record is implemented.

# My Tackle Architecture

`My Tackle` is User Knowledge. Its purpose is to catalog the actual equipment and consumable tackle the angler owns.

Canonical Tackle definitions remain Reference Knowledge in `data/tackle.js`. Canonical Tackle defines the functional type; My Tackle defines the user's actual possessions.

Rig `What You Need` lists remain text-first and do not display images by default.

## Current

The application uses the transitional local readiness key:

    freshwaterFishingCompanion.tackleReadiness.v1

Each Rig maintains independent availability selections keyed by canonical Tackle ID.

## Approved / Not Implemented

When My Tackle inventory is implemented:

- My Tackle becomes the only persistent ownership source of truth.
- Rig Readiness reads My Tackle and automatically satisfies required canonical Tackle types the user owns.
- Missing items may be temporarily marked available for the current build/session without changing ownership.
- Temporary availability may represent borrowed gear, newly purchased gear not yet entered, or another item available for that session.
- Persistent ownership may only be changed through explicit My Tackle ownership-management workflows such as Add Tackle, Edit Tackle, or Remove Tackle.
- Rig Readiness, Search, Recommendations, usage inference, and prior readiness checkmarks may not silently create or modify My Tackle ownership.
- Existing readiness checkmarks are not automatically migrated into My Tackle.
- Basic readiness answers whether the Rig can be built; product/brand optimization is separate and deferred.

A commercial `ProductDefinition` layer is not required for the My Tackle MVP. The detailed owned-item schema remains open for the dedicated My Tackle design discussion.

Permanent principle: **Readiness answers buildability first; optimization comes later.**

# User Knowledge Trust Boundary

Canonical project data may be treated as trusted application content.

User-entered or imported content is untrusted by default and should render as text through safe DOM APIs such as `textContent`. User-controlled strings must not be concatenated directly into `innerHTML`.

If formatted User Knowledge is later required, the application must use one centrally owned sanitization path rather than scattered ad hoc escaping.

Permanent principle: **User Knowledge is data, not markup.**

# Unavailable Feature Affordance

Current unavailable child cards use `Coming Soon` semantics and do not retain misleading hover/pointer/click affordances.

Permanent rule: **Anything that looks actionable must either perform an action or clearly communicate that it is unavailable.**

# Interaction Depth

Common field workflows should stay within approximately three intentional interactions from a relevant entry point whenever practical. Do not add a separate page when the same task can be completed clearly in context.

# Link Semantics

## Contextual information

    Name ⓘ

Meaning: open contextual information without leaving the current page.

## External verified reference

    Reference Name ↗

Meaning: open an external source in a new tab.

External CTA labels should name the destination when practical rather than use generic wording.

# Media Architecture

Detailed media rules are authoritative in `MEDIA_GUIDE.md`.

Preferred formats:

- Optimized WebP for photographic/semi-photorealistic Tackle reference media
- SVG for technically safe diagrams, line art, knot instruction, and other genuine vector instructional graphics

Entity rules:

- Fish: verified real photographs/scientific illustrations for identification
- Rigs: verified local completed image only when licensing and technical accuracy are established; otherwise external verified reference links
- Tackle: recognition-first semi-photorealistic or vector illustration anchored to real geometry
- Knots: step-by-step diagrams
- Lures: photography or accurate illustration according to recognition requirements
- Techniques: instructional media only when it improves understanding

# Inline Rig Readiness

Rig readiness is integrated into the `What You Need` section.

Current transitional storage key:

    freshwaterFishingCompanion.tackleReadiness.v1

Rules:

- Optional components do not block readiness.
- All required components must be selected for `Ready to Fish`.
- Missing required components are listed using canonical Tackle names.
- Each Rig maintains independent state.
- Malformed stored data falls back safely.

# Repository Handoff and Closeout

`docs/HANDOFF.md` is the first-read current-state map.

A session, module, or section is not finalized until all relevant implementation and documentation are updated, pushed, inspected on GitHub, and validated.

Meaningful cross-segment discussions receive the same documentation treatment as in-segment decisions.

# Development Architecture

`DEVELOPMENT_WORKFLOW.md` is authoritative for implementation procedure.

Permanent rules include:

- Fetch latest GitHub source before editing.
- Complete-file replacement is the default delivery method.
- Prefer one coherent ZIP for a coherent multi-file segment whenever practical.
- Include required documentation with the implementation rather than creating avoidable extra pushes.
- Do not put temporary package-only artifacts inside the repository ZIP.
- User normally reviews and commits through GitHub Desktop.
- Verify GitHub after push.
- Documentation closeout is mandatory.
- Do not begin a new build segment while the current one is unfinalized.
