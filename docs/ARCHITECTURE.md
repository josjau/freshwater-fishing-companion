# Freshwater Fishing Companion

**Document:** ARCHITECTURE.md  
**Document Revision:** 0.3.3
**Document Status:** Approved
**Last Updated:** 2026-08-09

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
- Optional verified tutorial-video metadata
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

Rig `componentRequirements` is the authoritative source for Rig-to-Tackle usage relationships. Reverse Tackle-to-Rig `Used In` navigation is derived from active Rig requirements rather than stored independently on Tackle.

A Rig component requirement references canonical Tackle explicitly through `tackleId`. Canonical Tackle owns the display name; Rig data owns only Rig-specific usage context such as required/optional status, quantity, order, size/configuration guidance, assembly role, and setup notes. Rig requirements do not duplicate canonical Tackle display names.

`CORE_RIG_IDS` is the single canonical owner of Core Rig membership and order. Core status is derived from this registry rather than duplicated inside individual Rig records.

Rig `referenceLinks` point to verified external fishing references used for technical cross-checking and visual confirmation. They are not production-media copies and do not transfer ownership of external content into the project.

Optional `tutorialVideo` metadata may identify a verified platform-hosted tutorial. The renderer may load that tutorial through the platform's official permitted embed player without downloading or rehosting the video. Texas Rig is the first approved implementation trial.

Historical `imageIds` fields may remain empty while older media records/assets are retained for cleanup or audit history.

## `data/tackle.js`

Owns the current canonical Tackle reference records and stable Tackle IDs.

Canonical Tackle represents functional tackle types rather than a user's exact commercial possession. Examples include Offset Hook, Bullet Weight, Slip Float, Spinnerbait, Crankbait, and Inline Spinner.

Tackle may exist independently of a Rig.

Rigs reference Tackle records through `componentRequirements[].tackleId`.

Manual inverse `rigIds` have been removed from canonical Tackle records. Reverse Rig usage is derived from `Rig.componentRequirements`.

The Core-Rig build expanded canonical Tackle from 15 to 17 active concepts by adding `jighead` and `inline-spinner`.

The current Rig UX finalization package adds `wacky-hook`, `wacky-o-ring`, and `ned-jighead`, producing 20 active canonical concepts. These narrower types keep buildability checks from treating an unsuitable generic hook or jighead as sufficient. Dedicated media for these three concepts is deferred rather than reusing a potentially misleading generic image.

## `data/media.js`

Owns reusable canonical media metadata and stable media IDs.

The active media catalog contains contextual Tackle reference media only.

The Core-Rig build expands the catalog from 15 to 17 optimized 640 × 440 WebP assets. Current production Tackle media uses a restrained neutral background with no alpha transparency and no artificial cast shadow. Images remain on-demand through contextual `Name ⓘ` help.

## `search.js`

Owns reusable, non-mutating lookup, search, filter, and sort helpers.

The current helper implementation is intentionally lightweight. It is not the permanent relevance-quality ceiling defined by D022.

## `view-renderer.js`

Owns reusable rendering and UI interactions, including:

- Child-card views
- Search pages and result cards
- Optional main-section landing-page search UI
- Rig detail rendering
- Rig external-reference links and lazy-loaded tutorial player
- My Tackle inventory-domain rendering
- Contextual `Name ⓘ` Tackle reference rendering
- Canonical Tackle name resolution for Rig requirements
- Derived Tackle `Used In` Rig navigation
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
- Rig Guide browsing/subset search and Rig details; the current package adds main-page global search
- My Tackle
- Current local readiness-state loading/persistence
- Current per-Rig Tackle availability selections

# Rig Guide Architecture

Current package target Rig flow (current `main` already provides the nine-Rig library and scoped browse search; landing-page global search/tutorial/compact-detail changes are In Progress until pushed and validated):

    Dashboard
    → Rig Guide
        → Search all active Rigs directly
        → All Rigs
        → Core Rigs
        → Beginner
        → Beginner+
        → future implemented tiers
    → Select a Rig
    → Rig Detail
        → Best For + Good Conditions (compact at-a-glance trial)
        → Verified tutorial when approved for that Rig
            → lazy-load official platform player
            → external source fallback ↗
        → otherwise Verified References ↗
        → What You Need + Readiness
            → Mark current availability inline
            → Tackle Reference Popover ⓘ
            → Ready / missing-required status
        → How to Build It
        → Setup Notes
        → Common Mistakes
        → Safety

Main Rig Guide search queries the full active implemented Rig set. Search within an implemented subset remains scoped to that subset. Both paths use the same canonical Rig data and shared search helpers.

Card-based Rig Guide navigation uses the same Dashboard-derived varied accent/left-line grammar as other section/subset navigation. Core adds a separate priority treatment rather than forcing the whole Rig page to one accent.

Rig pages intentionally use authoritative text instructions rather than generated Rig build diagrams.

Completed-Rig visual confirmation prefers verified licensed local media, then a verified officially permitted embedded tutorial, then direct external visual/reference paths. Texas Rig is the first embedded-tutorial trial.

The compact Rig-detail layout is an In Progress Rig-only trial and is not yet a permanent cross-domain density standard.

## Approved Rig Library Expansion — Not Implemented

**Status clarification:** nine Rigs are implemented on current `main`: the six Core Rigs plus Wacky Rig, Ned Rig, and Weightless Soft-Plastic Rig. Intermediate, Intermediate+, Advanced, and Expert expansion remains Approved / Not Implemented.

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

The implemented curated **Core Rigs** subset contains:

- Fixed Bobber Rig
- Basic Bottom Rig — especially useful for catfish
- Jighead + Soft Plastic
- Inline Spinner Setup
- Texas Rig
- Slip Bobber Rig

The Core 6 are the first Rig-expansion milestone and must be complete, accurate, beginner-ready, and validated before expansion to the remaining fourteen Rigs.

Per D042/D044/D048, Core membership/order derives from `CORE_RIG_IDS`, Core may overlap any difficulty/category, and Core receives restrained additional hierarchy while Rig Guide navigation cards retain the shared Dashboard-derived palette. All Rigs contains Core records normally rather than owning a separate Core section.

D043 resolves the former modeling question: Jighead + Soft Plastic and Inline Spinner Setup are ready-to-fish terminal setups in the Rig Guide. Reusable presentation behavior remains owned by Technique.

The teaching strategy is to build success and confidence with these broadly useful rigs before expanding the user's fishing arsenal.

Carolina Rig is approved for the near-term canonical library. The existing `carolina-rig` relationship should be resolved by implementing the canonical Rig during the expansion rather than treating Carolina Rig as an unwanted concept.


# Core Rigs and Tackle Media Build

**Implementation Status: In Progress**

The active Rig segment now contains nine implemented Rigs, the single-owner `CORE_RIG_IDS` registry, learning-tier navigation, 17 neutral-background Tackle images, and the finalization work described above.

The source and documentation package must be pushed, inspected on GitHub, and runtime/regression validated before this segment may be marked Validated.

Generated completed-Rig or build-step imagery remains prohibited under D045; Rig assembly continues to use authoritative text plus verified external visual references.

# My Tackle Architecture

`My Tackle` is User Knowledge. Its purpose is to catalog the actual equipment and consumable tackle the angler owns.

Canonical Tackle definitions remain Reference Knowledge in `data/tackle.js`. Canonical Tackle defines the functional type; My Tackle defines the user's actual possessions.

Approved Tackle WebP imagery is shown only through contextual `Name ⓘ` help when the user needs recognition assistance.

Rig `What You Need` lists remain text-first and do not display images by default.

## Current

The application uses the transitional local readiness key `freshwaterFishingCompanion.tackleReadiness.v1`. Each Rig maintains independent selections keyed by canonical Tackle ID strings. The requirement-field change from `id` to `tackleId` does not change those stored values and does not require a readiness-state migration.

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

**Approved / Not Implemented:** child cards for planned features may remain visible when they help communicate application structure, but unavailable cards must be clearly marked `Coming Soon` or equivalent. They must not retain hover, pointer, click, or other affordances that imply working navigation, and should use accessible disabled/unavailable semantics.

Permanent rule: **Anything that looks actionable must either perform an action or clearly communicate that it is unavailable.**

# Interaction Depth

Common field workflows should stay within approximately three intentional interactions from a relevant entry point whenever practical. Do not add a separate page when the same task can be completed clearly in context. The combined Rig requirements/readiness section follows this rule by keeping identification help, availability, and readiness feedback on the Rig detail page.

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

External CTA labels should name the destination when practical rather than use generic wording. The approved Dashboard Regulations label is:

    Go to ODWC Regulations ↗

The `↗` marker indicates that the user is leaving the application for an external destination. Do not use `ⓘ` for external navigation.

# Dashboard Regression Restoration

**Current:** the production Forest Journal Dashboard is missing portions of the previously approved card hierarchy and interaction styling because an unrelated replacement removed approved Dashboard rules.

**Approved / Not Implemented:** restore the previously validated Dashboard behavior without redesign. The repair restores the stronger primary-card treatment, 6px left accent, 2px right accent, primary title emphasis, approved vertical spacing, gradient hover treatment, active behavior, and `overflow: hidden`. Preserve the current pill CTA and all newer Rig/Tackle styling.

The repair must not change card order, labels, navigation, Dashboard content, theme direction, dormant themes, or unrelated CSS.

# Media Architecture

Detailed media rules are authoritative in `MEDIA_GUIDE.md`.

Preferred formats:

- Optimized WebP for catalog-style Tackle reference media, including rasterized vector-style or semi-photorealistic assets
- SVG for technically safe diagrams, line art, and instructional graphics

Entity rules:

- Fish: verified real photographs/scientific illustrations for identification
- Rigs: verified local completed image only when licensing and technical accuracy are established; otherwise external verified reference links
- Tackle: recognition-first vector-style or semi-photorealistic illustration anchored to approved real-world geometry
- Knots: step-by-step diagrams
- Lures: photography or accurate illustration according to recognition requirements
- Techniques: instructional media only when it improves understanding

# Storage Strategy

GitHub Pages footprint is a design constraint.

General targets:

- Contextual Tackle reference imagery: aggressively optimized; avoid unnecessary source resolution
- Individual Tackle raster imagery: normally below approximately 150 KB
- Fish identification photos: approximately 150–300 KB when diagnostic detail requires it
- SVG: keep compact and avoid unnecessary embedded raster data

Current Tackle reference assets are stored as optimized WebP files. Future replacements may use clean alpha transparency or a restrained neutral background according to the approved recognition-quality standard.

# Inline Rig Readiness

Rig readiness is integrated into the `What You Need` section so a user can identify a component and see readiness without navigating to a separate page.

## Current transitional implementation

Storage key:

    freshwaterFishingCompanion.tackleReadiness.v1

Rules:

- Optional components do not block readiness.
- All required components must be selected for `Ready to Fish`.
- Missing required components are listed using canonical Tackle names.
- Each Rig maintains independent state.
- Malformed stored data falls back safely.

## Approved ownership implementation — Not Implemented

My Tackle will replace the persistent lookup source while preserving the inline Rig Readiness interface. Owned required items are automatically satisfied; a separate temporary session-availability state may satisfy borrowed or newly acquired items without writing ownership back to My Tackle.


# Repository Handoff and Closeout

`docs/HANDOFF.md` is the first-read current-state map for future sessions and contributors. It links to governing documents rather than duplicating them.

A session, module, or section is not finalized until all relevant documentation is updated, pushed, inspected on GitHub, and validated. The project does not begin a new build segment while the current segment remains unfinalized.

Meaningful cross-segment discussions receive the same documentation treatment as in-segment decisions. They may be deliberately parked at a clean stopping point when they do not materially change the active work, but the parked context must be preserved.

# Development Architecture

`DEVELOPMENT_WORKFLOW.md` is authoritative for implementation procedure.

Permanent rules include:

- Fetch latest GitHub source before editing.
- Complete-file replacement is the default delivery method.
- Coherent multi-file modules should be delivered as one ZIP package whenever practical, including required documentation in the same coherent push.
- Documentation replacements must pass the replacement-integrity gate defined in `DEVELOPMENT_WORKFLOW.md` before packaging.
- User normally reviews and commits through GitHub Desktop.
- Verify GitHub after push.
- Documentation closeout is mandatory and must be validated in GitHub before a segment is finalized.
- Do not begin a new build segment while the current one is unfinalized.
- Capture meaningful cross-segment decisions even when they arise outside the active module.
- Commands intended for user copy/paste are placed in fenced code blocks.

# Current Reference-Refresh Scope

The current deployed reference-refresh package changed the presentation layer without changing the canonical 15-item Tackle catalog or the transitional Tackle Readiness storage contract.

Implemented changes include:

- My Tackle remains the user-owned inventory domain
- Historical transparent Tackle recognition media used only in contextual help; the active Core-Rig package supersedes those assets with neutral-background references
- Text-first Tackle contextual popovers
- Verified external completed-Rig reference links
- Text-first Rig assembly instructions
- Texas Rig wording corrected for bait seating, rotation, re-entry measurement, and skin-hook finish
- Dashboard `My Tackle` label
- Existing Fish Search and transitional readiness workflows preserved

Rig/Tackle Data Integrity Batch 1 is Validated. The Core Rigs and Tackle Media workstream is In Progress pending GitHub and runtime validation.