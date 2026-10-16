# Freshwater Fishing Companion — Source File Map

**Status:** D071 Option B implemented source-file ownership map. This document describes the locally reviewed implementation; deployment and actual-device validation are separate operational states.

**Purpose:** Descriptive map of production runtime responsibilities, interfaces, dependencies, and verification surfaces. It is not an alternative workflow authority, content owner, or substitute for `docs/ARCHITECTURE.md`, `docs/decisions/architecture.md` D071, or `docs/PROJECT-RULES.md`.

## Application entrypoint and platform

| Path | Responsibility | Depends on / consumed by |
| --- | --- | --- |
| `index.html` | Dashboard shell, stylesheet, ordered classic-script loading (44 scripts); local `file://` entrypoint. | Loads all active `data/*.js`, foundation services, shared services, Guide/feature owners, and last `script.js`. No module loader or bundler. |
| `app-core.js` | `FCC_APP` route definitions, atomic provider registration, route ownership, current-route dispatch, cross-Guide origin/return stack. | Providers registered by Guide/feature controllers; `script.js` calls public registry methods. Does not own Guide-private state. |
| `script.js` | App bootstrap, Dashboard/home and retained placeholder screens, common navigation entrypoint and registration orchestration. | `FCC_APP`, Guide/feature owner registration/reset methods, shared `renderView`; loaded last. |
| `forest-journal.css` | The sole production-supported Forest Journal theme, shared responsive layout, Guides, Reference modals, Reel Setup and semantic token aliases. | HTML and renderer-generated class names; no theme switching or new production theme. Fixed reference-media surface is `#f4f0e8`. |
| `search.js` | Shared text normalization, generic record lookup, ranking and alphabetical sorting; no Fish/Knot-specific search ownership. | Called by Fish/Knot Guide-specific search controllers and shared rendering. |
| `view-renderer.js` | Shared search/navigation/card rendering and setup primitives, including one sticky `.page-navigation-group`. | Consumed by Guide and placeholder renderers; no Guide-specific content ownership. |
| `reference-popovers.js` | Shared Reference popover lifecycle, body-scroll/focus lock, paged references, Tackle, Condition, Lure/Bait, Technique, Line, media, related-entity semantics. | Uses canonical `data/*.js` records and shared search primitives; called by Guide/feature renderers. Uses `showReferencePopoverDialog` for simple dialog lifecycle. |
| `knot-media-renderer.js` | Canonical Knot animation and tutorial media presentation. | Knots Guide/Rigs use it; specifically VERIFY-ONLY during D071. |

## Guide and feature owners

| Controller | Renderer | State and route scope | Important cross-Guide contracts |
| --- | --- | --- | --- |
| `guides/fish-guide-controller.js` | `guides/fish-guide-renderer.js` | Fish landing, browse, detail, chooser and comparison; Fish-specific search and category/relationship ownership; six Fish routes. | Fish-to-Rig navigation, Regulations handoff, Fish habitat/reference popovers and Fish Detail return/focus. Registers `fish-guide` routes through `registerFishGuideRoutes()`. |
| `guides/rig-guide-controller.js` | `guides/rig-guide-renderer.js` | Rig landing, browse, detail, readiness/session state, active configuration, navigation; three Rig routes. | Rig-to-Knot handoff, shared Reel Setup completed summary, Direct-Tie selected Lure/Bait Technique intersection, Tackle/Reference links, deliberate Core Rig membership. Registers `rig-guide` routes. |
| `guides/techniques-guide-controller.js` | `guides/techniques-guide-renderer.js` | Techniques Guide live search, Core/All collection browse, detailed How to Fish It learning, canonical usage references and origin-state-preserving navigation; three Technique routes. | Consumes 16 `data/techniques.js` records and curated `data/technique-guidance.js`; obtains Rig/Bait validity from `data/compatibility.js` instead of copying relationships. Registers `techniques-guide` routes. |
| `guides/knots-guide-controller.js` | `guides/knots-guide-renderer.js` | Knot landing, browse, detail and curated Knot-specific search; three Knot routes. | Rig-used-in relationships, Reel Setup workflow handoff and return, knot-media renderer; preserved source-owned `data/knot-guidance.js` intents. Registers `knot-guide` routes. |
| `features/reel-setup-controller.js` | `features/reel-setup-renderer.js` | Reel Setup step state, draft vs completed device-local context, Reel/Line/Equipment/Spool/Ready flow, route, clear/reload and origin return; one route. | One retained completed setup context (`freshwaterFishingCompanion.completedReelSetup.v1`), independent of My Tackle readiness; Rigs/Knots full workflow entry, Fish/Rig Details passive context only, no Knot Detail passive context. Registers `reel-setup` route. |
| `features/regulations-controller.js` | `features/regulations-renderer.js` | Regulation gateway and state resource navigation; two routes. | Official agency links/state notices from immutable `data/regulations.js`; Fish-origin return. Registers `regulations` routes. |

The shared app also owns routes for Dashboard, What Should I Throw, Tackle, Catch Log, Favorites, and Settings. These are present routes, not claims that deferred capability content is implemented.

## Canonical data and independent foundation services

The D071 source-architecture migration preserved its then-current 20 canonical data files. FCC 53A now adds the independent `data/technique-guidance.js` curriculum owner (21 active data files) and extends already-approved Technique, Lure/Bait and Compatibility Reference Knowledge in their existing owners. Neither feature controller nor renderer owns canonical relationships or duplicated persistent content.

| Data path(s) | Authority / consumers |
| --- | --- |
| `data/fish-categories.js`, `data/fish.js`, `data/fish-identification.js`, `data/fish-habitat.js`, `data/fish-rig-guidance.js`, `data/fish-specialized-guidance.js` | Fish identity, taxonomy, pairwise identification, habitats, curated Rig guidance, specialized safety; consumed by Fish owner and related Reference links. |
| `data/rigs.js`, `data/knots.js`, `data/knot-guidance.js`, `data/tackle.js`, `data/lure-bait.js`, `data/techniques.js`, `data/compatibility.js`, `data/canonical-requirement-satisfaction.js` | Rig/Knot/Tackle/Lure-Bait/Technique identity, steps, knots, intrinsic compatibility and canonical satisfaction; used by Guide owners, Reference, and independent services. |
| `data/conditions.js`, `data/habitats.js`, `data/environment-correspondence.js` | Environment and Fish habitat references; not Recommendation suitability or ranking. |
| `data/technique-guidance.js` | FCC 53A instructional curriculum: seven Core Techniques; Rig-specific Learn First / bait-specific why text for 23 Rigs; does not own intrinsic Compatibility or ranked Recommendations. |
| `data/reel-guidance.js` | Reel Setup phase, choice, line/backing and stage-specific guidance; used by Reel feature. |
| `data/media.js` | Cross-entity owned media and provenance; renderer paths resolve to image files under `images/`. |
| `data/regulations.js` | Official state resource metadata, status/notices; consumed by Regulations feature. |

| Root foundation service | Contract |
| --- | --- |
| `availability-quantity.js` | Confirmed-quantity evidence and sufficiency diagnostics; local private number helpers isolated. |
| `availability-attention.js` | Derived needs-attention diagnostics, never persisted authority; private helpers isolated. |
| `my-tackle-reconciliation.js` | Stable-identity Merge/Split and canonical reference reconciliation; private helpers isolated. |
| `current-context-source-change.js` | Source material-change hashing, acknowledgement and current-context freshness; `stableSerialize` isolated to prevent global collisions. |
| `recommendation-engine.js` | Bounded Recommendation candidate identity, executability, legal and simplicity semantics; `stableSerialize` isolated to prevent overriding Current Context's nonfinite guard. |

Public service functions maintain their pre-migration call contracts. Internal helper implementations are local, not shared globals. No changes to persisted user data or canonical data schema are part of D071.

## Runtime dependency and interaction map

1. `index.html` loads all 21 `data/*.js` files first, including the new FCC 53A editorial curriculum.
2. `app-core.js` establishes the route registry.
3. Five independent root foundation services load in their existing relative order.
4. Generic `search.js` and `view-renderer.js`, then independent media and shared Reference owners load.
5. Guide/feature renderers and controllers, including the separate Techniques Guide pair, load before `script.js` (44 total). They may reference other classic-script top-level APIs at interaction time, after startup; no ES modules or dynamic network fetches are used.
6. `script.js` initializes once at `DOMContentLoaded`, registers all owner route providers and the shared routes, loads the independently retained completed Reel context, captures the Dashboard and wires click navigation.
7. `FCC_APP` dispatches routes to the owning provider; Home calls Guide-owned reset contracts rather than writing Guide-private state directly. Cross-Guide origin return goes through the common stack with owner restoration callbacks.

**Cross-file coupling still worth watching during review:** Classic scripts share a browser global lexical environment, so deliberate public function names remain globally callable. The authority boundary is defined by ownership and registered interfaces; this is not an ES-module encapsulation migration. Future refinements must not introduce implicit private globals or duplicate declarations.

## Validation and current acceptance boundary

`tools/validate_repository_integrity.js` now owns 30 validation groups covering editor and canonical data, media, source integrity, repository hygiene, and documentation. It is updated to inspect the extracted owner files without reintroducing Guide logic into shared files. Full candidate validator execution requires a suitable Git-aware repository and all required non-runtime documentation; a standalone browser-review ZIP excludes `.git` and routine documents and is **not** itself proof of full-repository 30/30 validation.

Candidate acceptance must also cover 44 unique classic scripts, unknown/duplicate provider negative cases, deterministic finite hashes and rejection of nonfinite values, route and origin-state restoration, Fish/Rig/Knot/Regulations navigation, Reel Setup lifecycle, Reference dialog cleanup, CSS appearance parity, and real desktop/mobile review. The approved amended Planning-to-Build gate requires a complete actual candidate 30/30 PASS **before commit/push**, while browser review and FINAL-LOCAL approval remain separate.

**Deployment boundary:** A review ZIP is not a committed repository revision or a deployed application. The source ownership map describes the Option B implementation in this Build Unit; actual GitHub `main` content, CI, deployment, and mobile-device acceptance are verified through their separate gates.
