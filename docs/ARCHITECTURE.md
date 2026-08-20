# Freshwater Fishing Companion

**Document:** ARCHITECTURE.md  
**Document Revision:** 0.4.4
**Document Status:** Approved
**Last Updated:** 2026-08-19

# Purpose

This document defines the current application architecture and approved near-term source ownership for Freshwater Fishing Companion.

GitHub `main` is authoritative for existing project files.

Where this document distinguishes **Current** from **Approved / Not Implemented**, the Current state describes code that exists in `main`; Approved / Not Implemented describes settled architecture that must not be mistaken for deployed functionality.

# Current Source Structure

    index.html
    forest-journal.css

    archive/
        README.md
        packages/

    themes/
        README.md
        concepts/
            forest-copper.css
            forest-gold.css
            legacy-dark-theme.css

    data/
        fish.js
        rigs.js
        knots.js
        knot-guidance.js
        reel-guidance.js
        tackle.js
        media.js

    images/
        tackle/
        rigs/

    search.js
    view-renderer.js
    knot-media-renderer.js
    script.js

    tools/

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
        data-model/
        workstreams/

Required production JavaScript load order from `index.html`:

    data/fish.js
    data/rigs.js
    data/knots.js
    data/knot-guidance.js
    data/reel-guidance.js
    data/tackle.js
    data/media.js
    search.js
    view-renderer.js
    knot-media-renderer.js
    script.js

The production entrypoint and loaded-source reachability were re-audited on 2026-08-19 and passed. All files listed in the production load order exist on authoritative GitHub `main`. Deferred themes, repository archives, project documentation, development tools, and the reserved Rig-image directory are intentionally outside the browser runtime entrypoint.

# Regional Content Architecture

The Companion's forward Version 1 regional content focus is:

- Northeast Oklahoma
- Southeast Kansas
- Southwest Missouri
- Northwest Arkansas

Existing validated domains retain their original selection/validation context and are progressively reconciled against the Four-State focus when audited or materially modified. Regional reconciliation is additive by default.

The existing 20-Rig library was originally selected and validated for Northeast Oklahoma and Southwest Kansas. It remains canonical and validated. A later Four-State adequacy audit will determine whether any materially important regional Rig or specialized fishing setup is missing; existing valid Rigs are not removed solely because the regional focus expanded.

# Theme Support

**Current:** Forest Journal is the only production-supported Version 1 theme and remains the active visual/reference baseline.

`themes/concepts/forest-copper.css`, `themes/concepts/forest-gold.css`, and `themes/concepts/legacy-dark-theme.css` are intentionally retained **deferred theme candidates** from earlier theme exploration. They are not abandoned historical artifacts, are not currently loaded as supported production themes, are not required to maintain parity with current Forest Journal components, and are not part of the supported production validation matrix.

Multi-theme implementation was deliberately deferred while the application remains under active functional development. Maintaining several complete theme implementations during rapid component, navigation, media, accessibility, and responsive-layout changes would multiply synchronization work and regression risk before the shared UI structure is stable.

**Current repository organization:** the deferred candidates are grouped under `themes/concepts/`, with `themes/README.md` documenting their purpose and deferred status. `forest-journal.css` remains at repository root because it is the active production stylesheet. This organizational structure may be modified later if the final theme architecture requires it.

**Approved / Not Implemented:** the final theme architecture will be designed during the Settings / User Preferences architecture gate. That work should centralize shared base/layout/component behavior once where practical and limit individual theme files primarily to theme-specific design tokens and intentional visual overrides. Forest Journal remains the reference implementation for future parity requirements.

Theme selection, persistence, device/profile ownership, backup/restore behavior, and the final set of supported themes are all deferred to that Settings / User Preferences gate. Existing candidate files do not guarantee that every candidate will ultimately ship.

The canonical reference-media surface `#f4f0e8` / RGB `244, 240, 232` remains a cross-theme invariant.

# Archive Architecture

`archive/` at repository root is the single canonical archive root. It owns deliberately retained historical repository artifacts with independent audit, provenance, reconstruction, design-lineage, or implementation-history value.

Normal prior revisions of tracked source and documentation files remain in Git history and are not copied into `archive/` merely because a file was edited or replaced wholesale. Retired artifacts are explicitly classified as **GIT HISTORY ONLY**, **ARCHIVE**, or **DELETE** according to `archive/README.md` and the repository-audit decision record.

Archived files are historical evidence and do not override current governing documents, production assets, current data models, or active workstreams. Additional archive subdirectories are created only when a real retained artifact class requires them.

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

**Current:** `search.js` uses lightweight normalized matching with deterministic relevance ranking plus reusable lookup/filter/sort helpers. Primary canonical identity fields receive the strongest weight; exact/prefix/name matches outrank lower-priority metadata matches, and equal-confidence results retain stable source order.

**Approved / Not Implemented:** heavy fuzzy search, advanced typo-tolerance, sophisticated confidence systems, natural-language intent parsing, and a global cross-domain result dump remain deferred until demonstrated by actual use. A future Dashboard search field is approved direction, but its cross-domain scope and result presentation remain intentionally unresolved.

Search scope is hierarchical where domain navigation defines a narrower eligible universe. Scope is applied before relevance ranking; deeper navigation narrows rather than silently broadens results.

# Source Ownership

## `data/fish.js`

Owns canonical Fish records and stable Fish IDs.

Fish identification media is accuracy-critical and follows `MEDIA_GUIDE.md`.

## `data/rigs.js`

Owns 20 active canonical Rig records and the Rig facts intrinsically tied to physical setup, including:

- Stable Rig ID
- Name and summary
- Difficulty
- Use cases
- Condition tags
- Component requirements
- Assembly steps
- Setup notes
- Common mistakes
- Safety notes
- `variationIds[]`
- `knotApplications[]`
- Verified external reference links
- Optional verified tutorial-video metadata
- Version metadata
- Active state

The text in `assemblySteps` is the authoritative in-app build sequence.

Rig owns physical assembly and Rig-specific configuration. Reusable presentation behavior belongs to canonical Technique knowledge, but current production does not assign canonical Rig↔Technique compatibility storage to Rig. The relationship owner/shape remains deferred until the Technique architecture gate under D056.

Rig `componentRequirements` is the authoritative source for Rig-to-Tackle usage relationships. Reverse Tackle-to-Rig `Used In` navigation is derived from active Rig requirements rather than stored independently on Tackle.

A Rig component requirement references canonical Tackle explicitly through `tackleId`. Canonical Tackle owns the display name; Rig data owns only Rig-specific usage context such as required/optional status, quantity, order, size/configuration guidance, assembly role, and setup notes. Rig requirements do not duplicate canonical Tackle display names.

`CORE_RIG_IDS` is the single canonical owner of Core Rig membership and order. Core status is derived from this registry rather than duplicated inside individual Rig records.

Rig `referenceLinks` point to verified external fishing references used for technical cross-checking and visual confirmation. They are not production-media copies and do not transfer ownership of external content into the project.

Optional `tutorialVideo` metadata may identify a verified platform-hosted tutorial. The renderer may load that tutorial through the platform's official permitted embed player without downloading or rehosting the video.

Rig does not own inverse Media IDs. Future Rig media attaches from the shared Media registry through `ownerType: "rig"` + the canonical Rig ID.

## `data/tackle.js`

Owns 29 active canonical functional Tackle concepts and stable Tackle identity.

Canonical Tackle represents functional tackle types rather than a user's exact commercial possession. Tackle may exist independently of a Rig.

Rigs reference Tackle records through `componentRequirements[].tackleId`. `Rig.componentRequirements` owns Rig-to-Tackle usage; reverse `Used In` navigation is derived rather than stored on Tackle.

Tackle records do not maintain inverse `rigIds` or `mediaIds` merely for reverse navigation or Media lookup. Persistent user ownership belongs later to My Tackle/User Knowledge, not canonical Tackle.

## `data/media.js`

Owns reusable cross-entity Media metadata and stable media IDs.

Canonical entity attachment is owned by Media through:

    ownerType
    ownerId

Entity records do not maintain inverse media-ID arrays merely to find attached Media.

Current production Media includes:

- 29 canonical Tackle recognition-media attachments,
- approved external instructional-media records for all 10 Version 1 Knots.

Future Fish, Rig, Lure, Technique, and other entity media should use the same ownership model unless an explicit later architecture decision establishes a genuinely different semantic relationship.

Current Tackle production media uses 640 × 440 WebP assets on the fixed `#f4f0e8` reference surface. Knot external instructional records retain provider/rights metadata rather than copying third-party assets into the repository.

## `data/knots.js`

Owns canonical Knot identity and reusable Knot facts, including stable IDs, names, summaries, difficulty/core-related canonical metadata where applicable, connection/line compatibility facts, authoritative tying instructions, common mistakes, final checks, and lifecycle/version metadata.

Knot does not own inverse Rig usage relationships. Rig-owned `knotApplications[]` provides the physical connection context, and reverse Knot usage is derived.

## `data/knot-guidance.js`

Owns task-oriented Knot guidance and selection behavior that is distinct from canonical Knot identity and tying instructions.

It may support task-first navigation and guidance without duplicating the canonical Knot record. Broader data-model ownership details remain subject to the later data-model documentation audit.

## `data/reel-guidance.js`

Owns canonical Reel & Line Setup guidance/workflow data for the completed beginner workflow within the Knots milestone.

It covers the approved Spinning, Spincast, and Baitcasting line-setup journey, including beginner selection/compatibility/backing/spooling guidance and canonical Knot handoffs. It is not a general reel-product catalog or full Technique domain.

## `search.js`

Owns reusable, non-mutating lookup, relevance-ranked search, filter, and sort helpers.

The current search helper remains intentionally lightweight and deterministic. It ranks stronger canonical identity matches ahead of lower-priority searchable metadata without introducing a parallel search index. More sophisticated fuzzy/intent systems remain deferred under D022.

## `view-renderer.js`

Owns reusable rendering and UI interactions, including:

- Child-card views
- Search/result UI with shared inline field, explicit clear control, and result cards
- Main-section landing-page and scoped subset search presentation
- Rig detail rendering
- Rig external-reference links and lazy-loaded tutorial player
- My Tackle inventory-domain rendering
- Contextual `Name ⓘ` Tackle reference rendering
- Canonical Tackle name resolution for Rig requirements
- Derived Tackle `Used In` Rig navigation
- Related-component popover navigation
- Combined Rig requirements/readiness rendering
- Compact sticky Parent/Home navigation
- Modal close behavior and focus restoration

Tackle recognition Media lookup derives active Media from `ownerType === "tackle"` and `ownerId === tackle.id` rather than consuming a Tackle-owned media ID array.

Any future rendering path that receives User Knowledge or imported content must treat it as untrusted text and render it through safe DOM APIs such as `textContent`, unless a centrally owned sanitization path is explicitly approved.

## `knot-media-renderer.js`

Owns Knot instructional-media rendering behavior. It consumes canonical Knot/Media facts but does not own Knot identity, tying facts, or Media attachment.

## `script.js`

Coordinates application routing and major view transitions, including Dashboard restoration, Fish Guide, Rig Guide, Knot Guide/Reel Setup integration, My Tackle transitional behavior, and current readiness-state loading/persistence.

# Rig Guide Architecture

**Current validated state:** the Rig Guide contains 20 active canonical Rigs across six learning tiers and uses the completed connected-knowledge/navigation architecture.

Current landing/browse flow:

    Dashboard
    → Rig Guide
        → Search all active Rigs directly
        → All Rigs
        → Core Rigs
        → Beginner
        → Beginner+
        → Intermediate
        → Intermediate+
        → Advanced
        → Expert
    → Select a Rig
    → Rig Detail
        → Best For + Good Conditions
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
        → Connected Knot/Tackle knowledge where implemented

Main Rig Guide search queries the full active implemented Rig set. Search within an implemented subset remains scoped to that subset. Both paths use the same canonical Rig data and shared search helpers.

Card-based Rig Guide navigation uses the same Dashboard-derived varied accent/left-line grammar as other section/subset navigation. Core adds a separate priority treatment rather than forcing the whole Rig page to one accent.

Rig pages intentionally use authoritative text instructions rather than generated Rig build diagrams.

Completed-Rig visual confirmation prefers verified licensed local media, then a verified officially permitted embedded tutorial, then direct external visual/reference paths.

The compact Rig-detail layout is runtime-approved for Rigs. It remains a Rig-specific density standard and is not automatically promoted to other domain detail pages.

The existing 20-Rig library is complete. Further Rig additions are enhancement/regional-reconciliation scope rather than completion of the original library.

The curated **Core Rigs** subset remains:

- Fixed Bobber Rig
- Basic Bottom Rig — especially useful for catfish
- Jighead + Soft Plastic
- Inline Spinner Setup
- Texas Rig
- Slip Bobber Rig

Per D042/D044/D048, Core membership/order derives from `CORE_RIG_IDS`, Core may overlap any difficulty/category, and Core receives restrained additional hierarchy while Rig Guide navigation cards retain the shared Dashboard-derived palette. All Rigs contains Core records normally rather than owning a separate Core section.

D043 resolves the modeling question: Jighead + Soft Plastic and Inline Spinner Setup are ready-to-fish terminal setups in the Rig Guide. Reusable presentation behavior remains owned by Technique knowledge.

# Knots and Reel & Line Setup Architecture

The Knots milestone is **PASS / VALIDATED / FINALIZED / CLOSED**.

Current production includes:

- 10 active canonical Knots,
- four Core Knot IDs,
- task-first Knot Guide navigation,
- deterministic Knot search,
- canonical in-app tying instructions,
- all 20 Rigs audited with 31 real `knotApplications` tied connections,
- verified instructional-media coverage for all 10 Knots,
- completed Reel & Line Setup for Spinning, Spincast, and Baitcasting,
- context-preserving connected navigation among Rigs, Knots, Line Type references, and Reel Setup.

Reel & Line Setup is a specialized guided workflow. It may use documented step-aware navigation semantics when workflow state requires them without redefining the standard Parent behavior for ordinary application views.

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

Child cards for planned features may remain visible when they help communicate application structure, but unavailable cards must be clearly marked `Coming Soon` or equivalent. They must not retain hover, pointer, click, or other affordances that imply working navigation, and should use accessible disabled/unavailable semantics.

Permanent rule: **Anything that looks actionable must either perform an action or clearly communicate that it is unavailable.**

# Interaction Depth

Common field workflows should stay within approximately three intentional interactions from a relevant entry point whenever practical. Do not add a separate page when the same task can be completed clearly in context. The combined Rig requirements/readiness section follows this rule by keeping identification help, availability, and readiness feedback on the Rig detail page.

# Navigation and Scroll Architecture

Persistent/floating Parent/Home controls remain the shared visual standard for nested standard application views.

Canonical behavior for standard application views:

    Forward -> newly opened destination starts at top
    Parent -> immediately preceding standard application context, applicable UI state, and prior scroll position
    Home -> Dashboard starts at top and contextual return state is cleared

A saved scroll position belongs only to the source context being restored and must never be transferred into a newly opened destination.

Specialized workflows may use separately approved navigation semantics when workflow state requires them. Reel Setup is an approved specialized example. Such exceptions must be deliberate/documented and do not redefine standard Parent behavior.

**Current implementation note:** some broader production routing still contains the older all-transitions top-reset behavior. The revised standard is approved architecture but requires a later deliberate production source package and runtime validation where not already implemented.

Browser-native history behavior is separate from these explicit in-application controls.

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

# Media Architecture

Detailed media rules are authoritative in `MEDIA_GUIDE.md`.

Entity rules:

- Fish: verified real photographs/scientific illustrations for identification.
- Rigs: verified local completed image only when licensing and technical accuracy are established; otherwise external verified reference/tutorial paths plus authoritative text.
- Tackle: recognition-first real-photo/semi-photorealistic catalog references anchored to approved real-world geometry.
- Knots: canonical text instructions plus approved instructional Media; current Version 1 uses verified external instructional destinations.
- Lures: photography or accurate illustration according to recognition requirements.
- Techniques: instructional media only when it improves understanding.

Media owns entity attachment through `ownerType` + `ownerId` under D056.

# Storage Strategy

GitHub Pages footprint is a design constraint.

General targets:

- Contextual Tackle reference imagery: aggressively optimized; avoid unnecessary source resolution
- Individual Tackle raster imagery: normally below approximately 150 KB
- Fish identification photos: approximately 150–300 KB when diagnostic detail requires it
- SVG: keep compact and avoid unnecessary embedded raster data

Current Tackle reference assets are stored as optimized WebP files on the fixed `#f4f0e8` reference-media surface.

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

`docs/HANDOFF.md` is the first-read current-state map for future sessions and contributors. It links to governing documents rather than duplicating them unnecessarily.

A session, module, or section is not finalized until all relevant documentation is updated, pushed, inspected on GitHub, and validated. The project does not begin a new build segment while the current segment remains unfinalized.

Meaningful cross-segment discussions receive the same documentation treatment as in-segment decisions. They may be deliberately parked at a clean stopping point when they do not materially change the active work, but the parked context must be preserved.

# Development Architecture

`DEVELOPMENT_WORKFLOW.md` is authoritative for implementation procedure.

Permanent rules include:

- Fetch latest GitHub source before editing.
- Complete-file replacement is the default delivery method while authorized semantic change scope remains targeted.
- Coherent multi-file modules should be delivered/committed together whenever practical.
- Documentation replacements must pass the replacement-integrity and post-write validation gates.
- User normally reviews production updates through GitHub Desktop unless a current session explicitly authorizes another direct-write workflow.
- Assistant direct GitHub writes are limited by default to Markdown documentation; production direct writes require explicit action-specific authorization.
- Verify GitHub after every write/push.
- Documentation closeout is mandatory and must be validated in GitHub before a segment is finalized.
- Do not begin a new build segment while the current one is unfinalized.
- Capture meaningful cross-segment decisions even when they arise outside the active module.
- Apply the Session-End Documentation Gate when a session ends before a section closes.
