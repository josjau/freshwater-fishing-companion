# Freshwater Fishing Companion

**Document:** ARCHITECTURE.md  
**Document Revision:** 0.7.1  
**Document Status:** Approved  
**Last Updated:** 2026-08-24

# Purpose

This document defines the current application architecture and approved near-term source ownership for Freshwater Fishing Companion.

GitHub `main` is authoritative for existing project files.

Where this document distinguishes **Current** from **Approved / Not Implemented**, Current describes code/data that exists on authoritative `main`; Approved / Not Implemented describes settled architecture that must not be mistaken for deployed functionality.

# Current Source Structure

```text
AGENTS.md

.github/
    workflows/
        external-reference-health.yml
        repository-integrity.yml

index.html
forest-journal.css

archive/
    README.md
    packages/
    workstreams/

themes/
    README.md
    concepts/
        forest-copper.css
        forest-gold.css
        legacy-dark-theme.css

data/
    fish-categories.js
    fish.js
    rigs.js
    fish-identification.js
    fish-rig-guidance.js
    knots.js
    knot-guidance.js
    reel-guidance.js
    tackle.js
    media.js

images/
    fish/
    tackle/
    rigs/

search.js
view-renderer.js
knot-media-renderer.js
script.js

tools/
    check_external_references.js
    validate_repository_integrity.js
    validate_replacement_integrity.py

docs/
    ACTIVE-CHANGE-LEDGER.md
    ARCHITECTURE.md
    CHANGELOG.md
    DECISIONS.md
    DEVELOPMENT_WORKFLOW.md
    EXTERNAL_REFERENCE_MAINTENANCE.md
    FISH_REFERENCE_SOURCES.md
    HANDOFF.md
    MEDIA_GUIDE.md
    MILESTONES.md
    PROJECT.md
    ROADMAP.md
    SPECIFICATION.md
    STYLE_GUIDE.md
    V1-DESIGN-AUDIT.md
    WORKING_STATE.md
    data-model/
    workstreams/
        FISH-WAVE-3-BASS.md
```

`SPECIFICATION.md` remains in the repository as a superseded retirement pointer and is not an active governing source.

Required production JavaScript load order from `index.html` remains:

```text
data/fish-categories.js
data/fish.js
data/rigs.js
data/fish-identification.js
data/fish-rig-guidance.js
data/knots.js
data/knot-guidance.js
data/reel-guidance.js
data/tackle.js
data/media.js
search.js
view-renderer.js
knot-media-renderer.js
script.js
```

The production entrypoint and loaded-source reachability were re-audited on 2026-08-19 and passed. Deferred themes, repository archives, project documentation, development tools, and the reserved Rig-image directory are intentionally outside the browser runtime entrypoint.

# Base Architecture Constraints

The application remains local-first and offline-first for supported local functions.

## Core recurring-service-cost boundary

The core/base local application architecture should not require recurring paid services in order to provide its supported local functionality.

A future feature may use an external or recurring-cost service only after explicit architectural/product approval establishes the value, dependency, failure mode, privacy implications, and maintenance burden.

This requirement does not prohibit optional external references, hosted instructional media, future optional synchronization providers, or other separately approved integrations. It prohibits making the base local application dependent on an unapproved recurring paid service.

## External dependency degradation boundary

External sites, embeds, instructional media, regulation destinations, and other third-party resources are optional dependencies around the local application core.

If an external resource is unavailable, blocked, removed, offline, or otherwise cannot load:

- otherwise-supported local navigation and canonical local reference content must continue to operate,
- the failure must degrade gracefully rather than break the surrounding workflow,
- a clear fallback should be provided when an approved fallback exists,
- the application must not silently treat third-party availability as proof of content correctness or freshness.

This general rule complements the more specific media/reference fallback rules in `MEDIA_GUIDE.md` and the external CTA semantics in D031.

# Regional Content Architecture

The forward Version 1 regional content focus is:

- Northeast Oklahoma
- Southeast Kansas
- Southwest Missouri
- Northwest Arkansas

Existing validated domains retain their original selection/validation context and are progressively reconciled against the Four-State focus when audited or materially modified.

Regional reconciliation is additive by default. Existing valid content is not removed or invalidated merely because the geographic focus expanded.

The original 20-Rig library was selected and validated for Northeast Oklahoma and Southwest Kansas. It remains canonical and validated. The completed additive Four-State adequacy audit added Split-Shot Bait Rig as canonical Rig #21 and found no other material ordinary-Rig gap.

# Theme Architecture

**Current:** Forest Journal is the only production-supported Version 1 theme and remains the active visual/reference baseline.

`themes/concepts/forest-copper.css`, `themes/concepts/forest-gold.css`, and `themes/concepts/legacy-dark-theme.css` are retained deferred theme candidates. They are not current production themes, do not require current component parity, and are outside the supported production validation matrix.

**Approved / Not Implemented:** final multi-theme architecture belongs to the Settings / User Preferences architecture gate. Shared base/layout/component behavior should be centralized where practical; individual theme files should primarily own design tokens and deliberate visual overrides.

Theme selection, persistence, device/profile ownership, backup/restore behavior, final supported-theme list, and final directory structure remain deferred to that gate.

The reference-media surface `#f4f0e8` / RGB `244, 240, 232` remains a cross-theme invariant.

# Archive Architecture

`archive/` at repository root is the single canonical archive root.

Ordinary prior revisions of tracked files stay in Git history. They are not copied into `archive/` merely because a file changed.

Retired artifacts are explicitly classified:

1. **GIT HISTORY ONLY** — ordinary prior revision or execution artifact whose only continuing value is historical recovery.
2. **ARCHIVE** — independently useful audit/provenance/reconstruction/design-lineage evidence retained under `archive/`.
3. **DELETE** — no continuing repository value beyond Git history.

Archived material is historical evidence and does not override current governing documents, current data models, production assets, or active workstreams.

Completed workstreams leave the active `docs/workstreams/` directory after closeout. Durable current truth is promoted first. Only independently valuable evidence is archived; ordinary execution history remains in Git history.

# Documentation / Continuity Architecture

Documentation uses single-owner semantics just as application data uses D056 single-owner semantics.

Canonical roles:

- `PROJECT.md` — mission, target user, product scope, high-level boundaries.
- `ARCHITECTURE.md` — current technical/source architecture and approved near-term source ownership.
- `DECISIONS.md` — durable approved architectural/product/UX decisions.
- `DEVELOPMENT_WORKFLOW.md` — implementation, validation, documentation, and closeout procedure.
- `ROADMAP.md` — product milestone order and future product direction.
- `ACTIVE-CHANGE-LEDGER.md` — material non-closed carry-forward items.
- `WORKING_STATE.md` — live local current-state and exact-resume record.
- `HANDOFF.md` — compact formal GitHub recovery/continuation entrypoint.
- `CHANGELOG.md` — curated meaningful landed-change history.
- frozen `MILESTONES.md` — historical milestone record only.
- domain/data-model standards — canonical domain-specific ownership.

`SPECIFICATION.md` is retired from active maintenance. Root `AGENTS.md` is a concise agent startup/change-control pointer and does not own project state.

GitHub `main` is the formal cross-computer authority. `WORKING_STATE.md` is the high-frequency state/resume layer; durable content is promoted to the correct GitHub owner, the Active Change Ledger is reconciled, and Handoff remains compact. The repository is the complete active continuity system. The former Google Working State is retired and preserved only as historical migration evidence.

# Knowledge Architecture

The application uses three knowledge layers:

1. **Reference Knowledge** — canonical facts and identities.
2. **Decision Knowledge** — recommendations, rankings, and contextual derived guidance.
3. **User Knowledge** — inventory, catches, preferences, saved/user-created state.

Do not blur these layers without an explicit architecture decision.

The Dashboard exposes four foundational connected-knowledge domains: Fish Guide, Knots, Rig Guide, and Tackle. Tackle is the root domain, while **Tackle Reference / Find Tackle** and **My Tackle** remain distinct capabilities on opposite sides of the Reference Knowledge/User Knowledge boundary. D063 owns this durable product boundary; D020/D028 own readiness and My Tackle authority.

# Search and Connected-Knowledge Architecture

Search is relevance-first; connected knowledge is breadth-first.

Search should identify the strongest intended entity rather than return every record that could match incidentally.

Strong signals include canonical names, approved aliases, beginner terminology, scientific names where applicable, category, and deliberately indexed search metadata. Incidental description text is not sufficient by itself to justify a primary result.

Interaction pattern:

```text
Find
-> Confirm the entity
-> Expose pertinent relationships
-> Move into related knowledge quickly
```

Examples:

- Fish → Rigs, lures, conditions, knots, regulations, techniques.
- Rig → target Fish, conditions, components, alternatives, assembly, techniques, readiness.
- Tackle → definition, recognition, compatible Rigs, alternatives, related components, ownership context.
- Knot → purpose, line compatibility, Rigs, instructions.
- Lure → Fish, conditions, rigging, retrieve, color guidance, alternatives, ownership context.

Avoid information overload; related knowledge is progressively disclosed.

**Current:** `search.js` uses lightweight normalized matching with deterministic relevance ranking plus reusable lookup/filter/sort helpers. Strong canonical identity matches outrank lower-priority metadata; equal-confidence results retain stable source order.

Search scope is hierarchical where navigation defines a narrower eligible universe. Scope is applied before ranking; deeper navigation narrows rather than silently broadens results.

**Approved / Not Implemented:** heavy fuzzy search, advanced typo tolerance, sophisticated confidence systems, natural-language intent parsing, and a global undifferentiated cross-domain result dump remain deferred until demonstrated need. Dashboard/Global Search is approved future direction but its final cross-domain result architecture is unresolved.

# Source Ownership

## `data/fish.js`

Owns canonical Fish records and stable Fish IDs.

Current production is in a deliberate staged migration. Trout, Gar, Production Wave 1, and Production Wave 2 Fish use the approved production schema. The local uncommitted Wave 3 Bass review set migrates/adds its six approved Fish to that schema; remaining locked-library Fish may retain the legacy seed shape until their production package lands. `data-model/02-FISH.md` owns the exact current contract/status.

Fish identification media is accuracy-critical and follows `MEDIA_GUIDE.md`.

## `data/rigs.js`

Owns 21 active canonical Rig records and facts intrinsic to physical setup, including:

- stable Rig ID,
- name and summary,
- difficulty,
- use cases,
- condition tags,
- component requirements,
- assembly steps,
- setup notes,
- common mistakes,
- safety notes,
- `variationIds[]`,
- `knotApplications[]`,
- verified external reference links,
- optional verified tutorial-video metadata,
- version metadata,
- active state.

`assemblySteps` is the authoritative in-app build sequence.

Rig owns physical assembly/configuration. Reusable presentation behavior belongs to Technique; the future canonical Rig↔Technique relationship owner/shape remains deferred under D003/D024/D056 until the Technique gate.

`componentRequirements` is the authoritative Rig→Tackle usage owner. Reverse Tackle `Used In` navigation is derived from active Rig requirements.

A requirement references canonical Tackle through `tackleId`. Canonical Tackle owns display identity; Rig owns only Rig-specific usage context such as required/optional status, quantity, order, size/configuration guidance, assembly role, and setup notes.

`CORE_RIG_IDS` is the single owner of Core membership/order.

Rig records do not own inverse Media IDs. Future Rig media attaches through shared Media `ownerType: "rig"` + canonical Rig ID.

## `data/tackle.js`

Owns 29 active canonical functional Tackle concepts and stable Tackle identity.

Canonical Tackle represents functional types, not the user's exact commercial possessions.

Tackle records do not maintain inverse `rigIds` or `mediaIds` merely for reverse navigation or lookup. Persistent user ownership belongs to future My Tackle/User Knowledge.

## `data/media.js`

Owns reusable cross-entity Media metadata and stable media IDs.

Canonical attachment is owned by Media through:

```text
ownerType
ownerId
```

Entity records do not maintain inverse media-ID arrays solely to locate attached Media.

Current production includes:

- 29 canonical Tackle recognition-media attachments,
- 21 active primary Fish identification-media attachments in the local Wave 3 review state,
- approved external instructional-media records for all 10 Version 1 Knots.

Future Fish, Rig, Lure, Technique, and other entity media use the same owner model unless a later explicit decision establishes a genuinely different semantic relationship.

## `data/knots.js`

Owns canonical Knot identity and reusable Knot facts including stable IDs, names, summaries, difficulty/core-related metadata where applicable, connection/line compatibility facts, authoritative tying instructions, common mistakes, final checks, and lifecycle/version metadata.

Knot does not own inverse Rig usage. Rig-owned `knotApplications[]` supplies physical connection context; reverse usage is derived.

## `data/knot-guidance.js`

Owns task-oriented Knot guidance/selection behavior distinct from canonical Knot identity and tying instructions.

## `data/reel-guidance.js`

Owns canonical Reel & Line Setup guidance/workflow data for the completed beginner workflow within the Knots milestone.

It covers Spinning, Spincast, and Baitcasting line setup, beginner selection/compatibility/backing/spooling guidance, and canonical Knot handoffs. It is not a commercial reel catalog or general Technique domain.

## `search.js`

Owns reusable non-mutating lookup, relevance-ranked search, filter, and sort helpers.

It intentionally remains lightweight/deterministic; more sophisticated fuzzy/intent systems are deferred under D022.

## `view-renderer.js`

Owns reusable rendering and UI interactions including:

- child-card views,
- shared search/result UI,
- section landing/scoped subset search presentation,
- Rig detail rendering,
- external Rig references/tutorial player,
- current My Tackle transitional rendering,
- contextual `Name ⓘ` Tackle reference rendering,
- canonical Tackle name resolution,
- derived Tackle `Used In` navigation,
- related-component popover navigation,
- combined Rig requirements/readiness,
- compact sticky Parent/Home navigation,
- modal close/focus restoration.

Any future rendering path receiving User Knowledge/imported content treats it as untrusted text and uses safe DOM APIs unless a centrally owned sanitization path is explicitly approved.

## `knot-media-renderer.js`

Owns Knot instructional-media rendering behavior. It consumes canonical Knot/Media facts but does not own Knot identity, tying facts, or Media attachment.

## `script.js`

Coordinates application routing and major view transitions including Dashboard restoration, Fish Guide, Rig Guide, Knot Guide/Reel Setup integration, My Tackle transitional behavior, and current readiness-state loading/persistence.

# Rig Guide Architecture

**Current validated state:** 21 active canonical Rigs across six learning tiers using the completed connected-knowledge/navigation architecture. The original 20-Rig milestone is closed; Split-Shot Bait Rig is the validated Four-State addition.

Current landing/browse flow:

```text
Dashboard
-> Rig Guide
   -> Search all active Rigs
   -> All Rigs
   -> Core Rigs
   -> Beginner
   -> Beginner+
   -> Intermediate
   -> Intermediate+
   -> Advanced
   -> Expert
-> Rig Detail
   -> Best For + Good Conditions
   -> verified tutorial where approved / verified reference fallback
   -> What You Need + Readiness
   -> How to Build It
   -> Setup Notes
   -> Common Mistakes
   -> Safety
   -> connected Knot/Tackle knowledge where implemented
```

The compact Rig-detail layout is validated for Rigs only and is not automatically a cross-domain standard.

The initial 20-Rig library is complete; future additions are enhancement/regional-reconciliation scope.

Core Rigs remain, in order:

- Fixed Bobber Rig
- Basic Bottom Rig
- Jighead + Soft Plastic
- Inline Spinner Setup
- Texas Rig
- Slip Bobber Rig

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
- validated connected/contextual navigation among Rigs, Knots, Line Type references, and Reel Setup.

Reel & Line Setup is a specialized guided workflow and may use separately documented step-aware navigation semantics without redefining ordinary Parent behavior.

# My Tackle / Readiness Architecture

My Tackle is User Knowledge for actual equipment/consumable tackle owned by the angler.

Canonical Tackle remains Reference Knowledge.

## Current transitional readiness

Storage key:

```text
freshwaterFishingCompanion.tackleReadiness.v1
```

Each Rig maintains independent current availability selections keyed by canonical Tackle IDs.

Rules:

- optional components do not block readiness,
- all required components must be selected for Ready to Fish,
- missing required components use canonical Tackle names,
- malformed stored data falls back safely.

## Approved / Not Implemented ownership model

When My Tackle becomes authoritative:

- My Tackle is the only persistent ownership source of truth,
- Rig Readiness reads My Tackle,
- owned required canonical Tackle types are automatically satisfied,
- missing items may be marked temporarily available for the current build/session without changing ownership,
- persistent ownership changes only through explicit My Tackle management,
- Search/Readiness/Recommendations/usage inference/prior checkmarks may not silently create ownership,
- existing transitional checkmarks do not automatically migrate into ownership,
- basic readiness answers buildability; brand/product optimization is separate.

A commercial ProductDefinition layer is not required for My Tackle MVP.

# User Knowledge Trust Boundary

Canonical project data is trusted application content.

User-entered/imported content is untrusted by default:

- render through safe DOM text APIs such as `textContent`,
- do not concatenate user strings directly into `innerHTML`,
- imported data follows the same trust boundary,
- formatted user content, if later required, uses one centrally owned approved sanitization path.

Permanent principle: **User Knowledge is data, not markup.**

# Unavailable Feature Affordance

Planned child cards may remain visible when they help communicate structure, but unavailable cards must be clearly marked `Coming Soon` or equivalent and must not retain hover/pointer/click affordances that imply working navigation.

Permanent rule: **Anything that looks actionable must either perform an action or clearly communicate that it is unavailable.**

# Interaction Depth

Common field workflows should stay within approximately three intentional interactions from a relevant entry point whenever practical. Intermediate pages should exist only when they provide distinct value.

# Navigation and Scroll Architecture

Persistent/floating Parent/Home controls remain the shared visual standard for nested standard application views.

Canonical standard behavior:

```text
Forward -> newly opened destination starts at top
Parent  -> restores immediately preceding standard app context, applicable UI state, and prior scroll
Home    -> Dashboard starts at top and contextual return state is cleared
```

A saved source scroll belongs only to the source context and must never transfer into a newly opened destination.

Specialized workflows may use separately approved semantics. Reel Setup is an approved specialized example.

**Current implementation note:** broader production routing still contains older all-transitions top-reset behavior in places. D051 is approved architecture but requires later deliberate source implementation/runtime validation where not already implemented.

# Link Semantics

## Contextual information

`Name ⓘ` opens in-app contextual information without leaving the current page/context. Close restores focus to the original trigger.

## External destination

External verified references use `↗`, open in a new tab/window as supported, and should name the destination when practical.

Current Dashboard regulations label:

```text
Go to ODWC Regulations ↗
```

Do not use `ⓘ` to imply external navigation.

# Media Architecture

`MEDIA_GUIDE.md` is authoritative for detailed media rules.

Summary:

- Fish — verified real photographs/scientific illustrations for identification.
- Rigs — authoritative text assembly; verified licensed local media when available; otherwise permitted tutorial/external verified reference hierarchy.
- Tackle — recognition-first real/semi-photorealistic catalog references anchored to real geometry.
- Knots — canonical text instructions plus approved instructional Media; current V1 external instructional coverage is complete.
- Lures — photography/accurate illustration according to recognition requirements.
- Techniques — instructional media only where it improves understanding.

Media owns entity attachment via `ownerType` + `ownerId`.

# Storage Strategy

GitHub Pages footprint remains a design constraint.

General media targets:

- contextual Tackle raster references: aggressively optimized, normally below ~150 KB,
- Fish identification photos: roughly 150–300 KB when diagnostic detail requires it,
- SVG: compact, avoid unnecessary embedded raster data.

Current Tackle reference assets use optimized WebP on fixed `#f4f0e8`.

# Repository Handoff and Closeout

`HANDOFF.md` is the compact formal GitHub recovery/continuation entrypoint.

`WORKING_STATE.md` is the live local workstream and exact-resume record.

`ACTIVE-CHANGE-LEDGER.md` is the single formal GitHub owner of material non-closed carry-forward items.

A session/module/section is not finalized until relevant documentation is updated, pushed/applied, inspected on authoritative GitHub, and validated.

Meaningful cross-segment decisions receive the same documentation discipline as in-segment decisions.

# Development Architecture

`DEVELOPMENT_WORKFLOW.md` is authoritative for implementation procedure.

Permanent rules include:

- verify the local checkout against GitHub `main` before editing,
- read local Working State, Handoff, the Active Change Ledger, and applicable governing documents before substantive work,
- use one write-authorized chat per checkout/workstream,
- commit/push a reviewed checkpoint before cross-computer handoff,
- keep semantic change scope targeted unless broader replacement/consolidation is approved,
- review coherent local changes through the complete GitHub Desktop diff by default,
- verify GitHub after every write/push,
- complete documentation closeout before declaring a segment finalized,
- do not begin a dependent build segment while the current one remains unfinalized,
- preserve meaningful cross-segment decisions/defers/parks/rejects,
- apply the local Working State / formal checkpoint model during active sessions.
