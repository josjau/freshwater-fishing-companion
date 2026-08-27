# Freshwater Fishing Companion — Decisions: UX, Navigation, and Search

**Document:** decisions/ux-navigation.md  
**Document Status:** Approved  
**Role:** Canonical durable decision bodies for this ownership domain  
**Migration Baseline:** `af3bffb9995d56f8b9e47236bbadfa481d88cc34`  
**Last Updated:** 2026-08-25

# Purpose

This file owns the full decision bodies listed below. Decision IDs are permanent and remain stable across the documentation decomposition. `../DECISIONS.md` is the compact canonical index.

# D020 – Integrated Rig Requirements and Readiness

A Rig's component requirements and current ownership/readiness state are presented in one `What You Need` section. Each component remains text-first, uses `Name ⓘ` for identification help, and includes an inline availability control. The page calculates Ready/Missing status from the same component list. A separate Rig readiness page is not part of the primary workflow.

The existing lightweight local readiness state is transitional. D028 defines the approved My Tackle ownership model that will replace it.
# D021 – Three-Interaction Field Workflow Target

Common field workflows should remain within approximately three intentional interactions from a relevant entry point whenever practical. Intermediate pages should exist only when they provide distinct value. Contextual popovers are preferred for recognition help, and readiness should remain on the Rig detail page rather than requiring a separate navigation step.
# D022 – Relevance-First Search and Connected Knowledge

Search is relevance-first, while connected knowledge is breadth-first.

Search should identify the entity the user actually means rather than return every record that could contain or imply a text match. Strong search signals include canonical names, approved aliases, beginner terminology, scientific names where applicable, category, and deliberately indexed keywords or metadata. Incidental description text is not sufficient by itself to justify a primary result.

The interaction pattern is entity-agnostic:

```text
Find
-> Confirm the entity
-> Expose pertinent relationships
-> Move into related knowledge quickly
```

Major entities should act as gateways to useful adjacent knowledge. Examples include Fish to Rigs/Conditions/Lures/Techniques, Rig to Fish/Conditions/Components/Techniques, and Lure/Tackle to compatible uses and ownership context.

The lightweight search implementation uses deterministic relevance ranking rather than alphabetizing all substring matches. Canonical identity fields are strongest; exact and prefix/name matches outrank word/contains matches and lower-priority metadata. Secondary identity fields such as scientific name may still rank strongly, while category, difficulty, use-case, and condition metadata remain weaker signals. Equal-confidence results retain stable source order.

A direct canonical-name query should therefore place the intended entity first when it is present; for example, `Ned` should rank **Ned Rig** ahead of Rigs that only mention Ned-related terms in lower-priority searchable metadata.

Heavy fuzzy search, advanced typo tolerance, natural-language intent parsing, sophisticated confidence systems, and global cross-domain result dumps remain deferred until demonstrated by actual need.

Branded or commercial names such as `Rooster Tail` require a later product/concept-resolution decision and are not resolved by this decision alone.

D061 adds the scope-before-ranking rule for hierarchical domain search.
# D030 – Clear Unavailable-Feature Affordance

Anything that looks actionable must either perform an action or clearly communicate that it is unavailable.

Unimplemented child cards may remain visible when they help communicate intended application structure, but they must be clearly marked `Coming Soon` or equivalent. They must not use hover, pointer, click, or other affordances that imply working navigation, and they should use appropriate accessible disabled/unavailable semantics.

Implemented cards remain fully interactive. Feature-preview pages, notification behavior, and roadmap detail inside unavailable cards are deferred.
# D031 – Explicit External Destination CTA Semantics

External actions must clearly identify the destination and use `↗` to indicate navigation outside the application. Generic labels such as `Browse` or `Learn More` should be avoided when a specific destination can be named.

Under D066, the Dashboard **Regulations** card uses internal-navigation semantics to open the state selector. Official destinations exposed on each state page remain external actions and use `↗` with destination-specific labels.

External links open outside the application in a new tab/window as supported by the platform. `ⓘ` remains reserved for in-app contextual information.
# D032 – Dashboard Regression Restoration

The current Forest Journal Dashboard styling lost previously approved hierarchy and interaction behavior during an unrelated full-file replacement. This is a confirmed regression, not a redesign opportunity.

The approved repair restores the previously validated Dashboard behavior, including the stronger primary-card treatment, 6px left accent, 2px right accent, primary title emphasis, approved vertical spacing, gradient hover treatment, active behavior, and `overflow: hidden`, while preserving the current pill CTA and all newer Rig/Tackle styling.

The repair must not change Dashboard card order, labels, navigation architecture, content, theme direction, dormant themes, or unrelated CSS.

This decision reinforces the replacement-integrity rule: full-file replacements must preserve unrelated approved behavior; an unrelated diff is a failure unless explicitly authorized.
# D042 – Core Learning Path Visual Emphasis

Curated `Core` content that the application explicitly identifies as high-priority learning or reference material receives additional visual hierarchy within the Forest Journal design system.

Examples include:

- **Core Rigs**
- **Core Knots**
- Other future curated `Core` groups only when they have been deliberately approved as priority learning/reference sets.

Core is a cross-cutting designation, not a difficulty, category, ownership state, or recommendation tier. A Core item may coexist with Beginner, Intermediate, Advanced, Expert, or other domain-specific classifications.

The purpose of the additional treatment is instructional prioritization, not decoration. A user should be able to identify curated priority content quickly without reading every peer card equally.

Approved treatment may include restrained combinations of:

- stronger accent/border treatment,
- a `Core`, `Start Here`, or equivalent badge/eyebrow,
- slightly stronger title hierarchy,
- subtle surface or inset accent treatment,
- grouping or section framing,
- concise supporting copy that explains why the group is important.

Core emphasis must:

- remain consistent with Forest Journal,
- preserve mobile readability,
- preserve keyboard/focus behavior,
- maintain sufficient contrast,
- avoid meaning conveyed by color alone,
- avoid excessive animation or decorative clutter,
- remain visually subordinate to page-level navigation and safety-critical information,
- not change canonical data ownership merely to create a visual effect.

The same visual language should be reusable across domains rather than inventing unrelated styling for Core Rigs, Core Knots, and future curated learning groups.

Permanent principle: **important recommended learning paths should look important, but still belong to the same field guide.**
# D046 – Rig Guide Learning-Tier Navigation

The Rig Guide landing page is the primary navigation hub for Rigs and exposes both the complete implemented library and the learning progression.

Top-level Rig Guide cards are:

1. All Rigs
2. Core Rigs
3. Beginner
4. Beginner+
5. Intermediate
6. Intermediate+
7. Advanced
8. Expert

Core is a curated learning collection, not a difficulty value. Core membership remains owned once by `CORE_RIG_IDS`; every Rig separately owns exactly one canonical `difficulty` tier.

The approved difficulty vocabulary is:

- `Beginner`
- `Beginner+`
- `Intermediate`
- `Intermediate+`
- `Advanced`
- `Expert`

The phrase **Master These First** is removed from current Rig Guide presentation. D046 supersedes only the presentation wording and browse-section placement implied by D027, D042, and D044; their Core membership, ordering, and visual-emphasis principles remain in force.

Implemented learning tiers are actionable. Tiers without implemented Rigs remain visible only when useful for orientation and must follow D030 `Coming Soon` unavailable semantics.

`All Rigs` always displays every currently implemented active Rig, including Core Rigs. It does not own a second dedicated Core section.

The initial 20-Rig learning-tier expansion is complete. Future additions are enhancement/regional-reconciliation scope and require their own deliberate placement.

Permanent principle: **All Rigs is the universal library entry point; the remaining Rig Guide cards expose curated learning paths and difficulty progression.**
# D047 – Section and Subset Search Availability

When a section contains searchable reference or instructional content, search is available from both the main section landing page and the relevant searchable subset/browse pages.

Main-section search queries the complete implemented content set for that section. Subset search is scoped to the selected subset. A user who already knows what they want should not be forced to enter an `All`, category, family, difficulty, or other intermediate page before searching.

Main-section and subset search must reuse the same canonical records and shared search helpers rather than maintaining parallel indexes or duplicated source-of-truth data.

For the Rig Guide, the landing-page search queries all active implemented Rigs. Core, Beginner, Beginner+, All Rigs, and implemented tier pages may retain their scoped search fields.

Permanent principle: **search should be available at the section entry point and remain available when the user intentionally narrows the scope.**
# D048 – Dashboard-Derived Section Card Design

The main Dashboard is the visual reference standard for card-based section and subset navigation throughout the application.

Section and subset card grids should preserve the Dashboard's shared visual grammar, including:

- varied adjacent card accent colors,
- a corresponding left-edge accent line,
- shared card spacing and proportions,
- consistent hover, active, focus, and responsive behavior,
- stronger primary treatment only where a card has deliberate hierarchy,
- unavailable-card semantics from D030.

A domain page must not flatten every navigation card to one domain color merely because all cards belong to the same section. Domain identity may still appear in headings, search/result styling, detail pages, badges, or other appropriate context.

Curated Core cards may add the D042 primary emphasis on top of the shared card palette. Core styling does not replace the shared navigation-card system.

This decision applies to card-based main section and subset/navigation pages across Fish, Rigs, Tackle, Knots, Recommendations, Catch Log, Favorites, Settings, and future domains.

Permanent principle: **subset navigation should feel like the same application as the Dashboard, not a visually separate card system.**
# D050 – Standard Search Field and Clear Control

Searchable sections use an inline search field at the section entry point rather than requiring a navigation card whose only purpose is to open a separate Search page.

The standard search interaction is:

- the main section landing page exposes search above its navigation cards,
- searchable subset/browse pages retain scoped search,
- the same canonical records and shared search helpers power both,
- typing may update results immediately while the Search submit action remains available,
- when text is present, an explicit one-click `×` control clears the query,
- clearing immediately restores the section's unfiltered/default state and returns focus to the search field,
- the clear control has an accessible `Clear search` name and must not depend on browser-specific native search-input controls.

Fish Guide adopts the same landing-page search pattern as Rig Guide; a dedicated **Search Fish** navigation card/page is not required for the primary workflow.

A search field near the top of the Dashboard is approved future direction, but it is not implemented by this decision. Its cross-domain scope, grouping, and result presentation remain deferred so Dashboard search does not become an indiscriminate global result dump.

Permanent principle: **search is a direct field interaction, not an extra navigation destination.**
# D051 – Context-Preserving Parent Navigation

Persistent/floating navigation controls remain the site-wide visual standard for non-Dashboard application views.

Canonical behavior for standard application views is:

```text
Forward navigation
-> newly opened destination starts at top

Parent navigation
-> restores the immediately preceding standard application view
-> restores that view's applicable UI state
-> restores that view's prior scroll position

Home navigation
-> Dashboard starts at top
-> contextual return state is cleared
```

A saved scroll position belongs only to the source context being restored and must never be transferred into a newly opened destination.

Parent is a contextual return action, not an ordinary forward route to a logical parent. Restoring prior state avoids unnecessary re-navigation while still preventing the older defect in which a newly opened destination inherited source-page scroll.

Specialized workflows may use separately approved navigation semantics when workflow state requires them. Reel Setup is an approved example of a specialized step-aware navigation context. Such exceptions must be deliberate/documented and do not redefine standard Parent behavior.

**Current implementation status:** Approved architecture. `UI_STANDARD.md` records the target behavior. Some broader production routing still uses the older all-transitions top-reset implementation and requires a later deliberate source package/runtime validation.

**Future trigger:** implement/reconcile the remaining production routing when navigation source is deliberately reopened. New specialized workflow exceptions require explicit documentation.

**Canonical owners:** D051, `UI_STANDARD.md`, and specialized workflow records where applicable.

Permanent principle: **new destinations start at top; Parent restores the prior standard application context; Home resets to Dashboard.**
# D052 – Rig Detail Compact Density

The compact Rig-detail treatment is approved for Rig detail pages after runtime review at phone and desktop widths.

The approved Rig treatment prioritizes information density without visual crowding:

- compact At a Glance presentation,
- especially compact `What You Need` component rows,
- practical touch controls and readable component notes,
- comparatively generous `How to Build It` spacing,
- lighter supporting sections for Setup Notes and Common Mistakes,
- Safety remains visible by default,
- narrow-phone content stacks instead of compressing into crowded multi-column rows.

This approval is Rig-specific. It does not automatically establish the same density for Fish, Tackle, Knots, or other future detail pages; cross-domain adoption requires separate review when those detail experiences are actively developed.

Permanent principle: **Rig details are information-dense, not visually dense.**
# D061 – Hierarchical Scoped Search

**Decision:** Search scope is determined before relevance ranking.

Navigation context defines the eligible search universe:

- broader/domain entry points search the approved domain scope,
- collection/category/subset navigation narrows eligible records,
- deeper navigation never silently broadens search back to the full domain,
- future related-knowledge search scopes may be narrower still,
- future Global Search is a deliberate separate scope rather than an implicit fallback.

Search helper text, examples, placeholders, result labels, and empty-state messages must describe the actual eligible scope.

For Fish Version 1, deliberate searchable identity fields are:

- `name`
- `aliases[]`
- `scientificName`
- `categoryId` resolved through the category registry display name
- `family`

Do not add `searchKeywords[]` solely to make Fish search work when the same meaning can be derived from canonical identity fields.

Relevance ranking operates only after scope filtering. Scope outranks ranking.

**Reason:** a search performed after the user intentionally narrowed context should respect that choice. Silently returning out-of-scope records makes navigation hierarchy untrustworthy and encourages duplicated search metadata.

**Current implementation status:** Approved/locked architecture. Existing Rig/Knot subset searches already follow scoped-record behavior; Fish helper/empty-state alignment is part of Fish implementation. Global Search remains deferred.

**Future trigger:** apply the same principle to new searchable domains and to future Global Search provider orchestration.

**Canonical owners:** D061, search/navigation standards, and domain-specific search documentation.
