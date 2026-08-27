# Freshwater Fishing Companion — UI Standard

**Document:** UI_STANDARD.md  
**Document Revision:** 1.1.0  
**Document Status:** Approved  
**Role:** Canonical Version 1 visual, navigation, card, detail-page, search-interaction, mobile, and accessibility standard  
**Decision Baseline:** D015, D020-D022, D030-D032, D042, D046-D048, D050-D052, D061, D063  
**Last Updated:** 2026-08-26

# Purpose

This is the single cross-domain UI/interaction owner for Freshwater Fishing Companion. It consolidates the former `NAVIGATION-PAGE-STANDARD.md`, `CARD_PAGE_STANDARD.md`, `DETAIL-PAGE-STANDARD.md`, and the UI-specific portions of `STYLE_GUIDE.md`.

Domain workstreams may define justified local behavior, but they must not silently create a competing site-wide standard.

# General Interface Principles

The interface should be clean, calm, beginner friendly, fast, field-usable, mobile-first, and readable outdoors.

- Prefer completing a task in the current context over adding an intermediate page with no distinct value.
- Keep common field workflows within approximately three intentional interactions from a relevant entry point when practical.
- Avoid visual clutter and duplicated instructional content.
- Anything that looks actionable must either work or clearly communicate that it is unavailable.
- Use one canonical data/relationship owner; UI convenience does not justify duplicate semantic storage.

# Forest Journal and Theme Boundary

Forest Journal is the only production-supported Version 1 theme and the current visual reference baseline.

Forest Copper, Forest Gold, and Legacy Dark remain deferred/inactive theme candidates. They do not require current component parity and are outside the production validation matrix until the Settings/User Preferences gate deliberately defines multi-theme architecture.

The reference-media surface `#f4f0e8` / RGB `244, 240, 232` is a cross-theme invariant. Future themes must remain visually compatible with it rather than recolor that media surface.

# Shared Field-Guide Presentation

Reference and instructional pages should share recognizable information hierarchy, spacing, label conventions, media surfaces, contextual actions, related-knowledge patterns, navigation behavior, and mobile readability.

Do **not** force Fish photos, Rig diagrams, Tackle illustrations, Knot instructional media, and other domain media into one technical format; `MEDIA_GUIDE.md` owns media-specific rules.

# Landing / Navigation Page Hierarchy

The Rig Guide is the baseline navigation-page model. Where applicable, a section landing page uses:

1. page identity — concise heading/introduction;
2. Search — first functional navigation element;
3. special/task navigation — only when it materially improves a real workflow;
4. category/collection cards — broader grouped destinations.

Permanent principle:

> Landing pages navigate to useful groups; browse/detail pages display individual records.

Do not let a landing page grow linearly with record count when useful collections can preserve a concise hierarchy.

# Search Interaction and Scope

Search uses one shared interaction pattern across searchable sections/subsets:

- inline search at the relevant section entry point;
- domain search covers that implemented domain library;
- subset/browse search searches **only** records eligible for the selected subset;
- live input updates may coexist with an explicit Search submit action;
- show a one-click `×` clear control whenever the field contains text;
- accessible clear label = `Clear search`;
- clearing restores the default/unfiltered state for the **current scope** and may retain focus in the same search field;
- do not auto-focus Search merely because a page/collection renders, especially on mobile;
- helper text/examples/empty states must accurately describe the active scope;
- manually maintained examples must be validated against the exact eligible collection or replaced by scope-descriptive wording;
- search never silently broadens upward from a subset to a parent/global scope.

Conceptual hierarchy:

```text
Global Search (future)
→ all implemented searchable domains

Domain Search
→ all active records in one domain

Collection / Subset Search
→ only records eligible for the selected collection

Related-Knowledge Search (future, only if useful)
→ only entities reachable through the approved relationship set
```

Search is relevance-first. Exact canonical names/approved aliases and strong identity signals outrank weaker metadata. Browse lists may remain alphabetical or use an explicitly approved curated order.

# Special / Task Navigation

Special navigation is optional and appears **after Search and before collection cards** when it materially helps a beginner accomplish a task without first knowing a canonical record name/category.

- Keep task navigation compact and task-oriented.
- Do not duplicate the same destination at the same hierarchy under several labels.
- A task may open a workflow, curated collection, or appropriate destination without exposing that implementation distinction to the user.
- Priority belongs to individual important tasks, not automatically to an entire surrounding section.

Current Knot examples: **Attach Line to a Reel** and **Tie On a Hook, Swivel, or Lure** are Important tasks; Connect Two Lines/Add a Leader and Make a Loop Connection are normal task cards.

# Card System

The Dashboard is the visual reference for peer-choice card grids. D048 applies to Dashboard, section landing, browse/category, collection, task, catalog, comparison, and other peer-card panels.

## Required shared treatment

1. Adjacent peer cards use differing accents from the approved shared palette rather than one repeated domain color.
2. The card's left-edge accent, accent-coupled surface/action/hover/focus treatment, spacing, radius, proportions, and responsive behavior remain in the shared application family.
3. Color rotation is deterministic/stable for a rendered order.
4. Domain identity may appear in headings, badges, search/results, or detail accents; it does not replace shared multi-accent peer-card behavior.
5. Primary/Core/Important hierarchy is additive to the shared card system rather than a separate design language.
6. Unavailable cards stay in the same visual family while removing misleading actionable affordances.

Specialized card internals are allowed when content requires them (for example Compare Fish pair imagery, readiness state, compact relationship metadata). **A custom internal card renderer is not an exception to D048.**

Compare Fish is the current reference example: specialized pair-image internals participate in the shared deterministic multi-accent outer-card language.

## Important and Core treatment

Use restrained stronger hierarchy only for genuinely prioritized destinations/material.

- Do not rely on color alone.
- Preserve focus, touch targets, contrast, and responsive behavior.
- Avoid glow, novelty animation, or decorative excess.
- `Core` indicates instructional priority, not ownership/completion/recommendation ranking.
- Important treatment is selective; elevating every peer destroys hierarchy.

# Collections and Browse Pages

Typical collection order when applicable:

1. All;
2. Core;
3. domain categories/classifications/difficulty groups;
4. approved future groups shown unavailable only when that helps communicate structure.

A collection card opens the grouped browse view. Do not duplicate all of the collection's individual records on the landing page unless a separately approved use case requires it.

Browse pages should identify the collection, provide correctly scoped Search when useful, display eligible records in a predictable order, preserve Parent/Home behavior, preserve applicable source UI state/scroll when Parent returns, and open selected detail destinations at the top.

Navigation architecture is designed for the mature library, not merely the current small record count. Prefer one meaningful collection over an expanding wall of individual landing-page cards.

# Unavailable UI

Unimplemented destinations may remain visible when they communicate application structure, but they must be clearly marked `Coming Soon` or equivalent and must not retain hover, pointer, click, keyboard, or other affordances that imply available navigation. Use appropriate accessible unavailable/disabled semantics.

# Persistent Navigation Component

Every non-Dashboard standard application view uses the shared floating navigation system.

The canonical shell is `.page-navigation-group`; renderer-based views should use `buildPageNavigationMarkup()` when practical.

- Root section pages use one non-duplicative `← Home` control.
- Nested browse/search/detail pages use `← Parent` + `Home` in the same floating container.
- Bare sticky `.page-navigation` buttons are not the normal site-wide pattern.
- Specialized workflows may replace the standard group when workflow state genuinely requires it, but should reuse the established floating-container visual language unless an explicit exception is approved.
- Keep navigation keyboard accessible, touch usable, compact, responsive, and non-obscuring.

Canonical standard-view transition semantics:

```text
Forward
→ newly selected destination starts at top

Parent
→ restores the immediately preceding standard application view
→ restores applicable prior UI state
→ restores that view's prior scroll position

Home
→ Dashboard starts at top
→ contextual return state is cleared
```

A saved scroll position belongs only to the source context being restored; it must never transfer into a newly opened destination.

**Implementation status:** shared floating-navigation appearance is implemented/validated. D051 context-restoring Parent behavior is approved architecture, but some broader production routing still uses the older all-transitions top reset until a dedicated implementation package changes and validates it. Do not describe that future behavior as already deployed.

# Detail Page Standard

The Rig detail page is the baseline for instructional/informational detail flow, not a rigid template.

Where applicable, detail pages use:

- shared persistent Parent/Home navigation;
- a familiar identity-header hierarchy;
- concise practical-context sections;
- a visually dominant primary instruction/information section;
- instructional media/references near the content they support;
- completion/verification checks when the domain has a meaningful completion state;
- familiar mistakes/notes/limitations/safety treatment;
- useful connected knowledge rather than a generic relationship dump;
- mobile-first readability.

Typical identity hierarchy:

```text
Priority / Core designation
Difficulty or equivalent classification
Canonical title
Concise description
```

Do not overload the identity header with technical metadata.

A domain may omit, rename, combine, or add sections when its information genuinely requires a different treatment. Material changes to architecture/ownership/workflow meaning still require explicit approval.

# Related Knowledge / Contextual Navigation

Related canonical knowledge should behave as a useful gateway.

- Make a related entity actionable when inspecting it materially helps the current task.
- Open a selected related destination at the top.
- Preserve the immediately preceding detail context so Parent can restore it.
- Allow nested related-detail movement when useful.
- Home clears contextual return state.
- Do not duplicate relationship ownership to enable navigation; derive reverse paths from the canonical owner when architecture defines one.

For high-cardinality lists, progressive disclosure may reduce default scrolling. The current Knot **Where You'll Use It** rule initially shows up to two Rig relationships and exposes the remainder using **See all N rigs** / **Show fewer**.

Collapsed related items must be removed from visual layout. Expansion reveals them and changes the control label; collapsing restores the initial limit/label, keeps keyboard focus on the disclosure control, and restores the viewport to the relationship group after layout shortens. Respect reduced-motion preference when repositioning.

That two-item threshold is a Knot relationship rule, not a universal list limit.

# Rig Detail Density

The compact Rig-detail treatment is approved for Rigs. Reduce scrolling primarily through tighter spacing and compact component rows, not by shrinking readable text or hiding required instructions. Keep `How to Build It` comparatively spacious, keep Safety visible, preserve practical ownership controls, and stack component content cleanly on narrow phones.

Do not automatically apply Rig density to other domains without review.

# Contextual Information and Link Semantics

Permanent contextual-information convention:

```text
Name ⓘ
```

This opens information without leaving the current page; desktop may use a centered modal and mobile may use a bottom sheet. Closing restores focus to the original trigger.

Directional/navigation semantics:

- external verified destination → `↗`, opens externally, label names destination when practical;
- internal directional navigation → `→` when an arrow cue is appropriate;
- contextual information → `ⓘ`, never an external-navigation marker;
- directional glyphs remain immediately adjacent to destination text rather than detached at row edge;
- use native Unicode glyphs rather than CSS-drawn arrows;
- navigation-arrow glyph weight is `800` for established `←`, `→`, `↗`, and compact-row `›`; wrap glyphs separately so label weight need not change.

Current production Dashboard **Regulations** is internal navigation to the state gateway. Official state-resource destinations remain external `↗` actions.

# Regulations State Selection and State Page

**Current — implemented and validated nationwide.** Regulations uses a state-first internal navigation flow before opening authoritative external resources.

## State selection

- The State selector is the canonical navigation control and exposes all supported states A-Z.
- Search accepts a state name or 2-letter abbreviation and live-filters/accelerates the State selector rather than creating a separate result-navigation model.
- Matching states remain alphabetical; normal typing selects the alphabetically first match. Typing alone does not navigate.
- Returning from an opened state preserves the prior query and selected/opened state when that state remains in the filtered result set; subsequent typing resumes normal first-match behavior.
- Home clears transient Regulations query, selected state, and opened-state context; re-entering Regulations after Home starts from the default selector state.
- Desktop uses the native selector; mobile uses the approved compact selector trigger with contained vertical-only wheel popover and Done/Cancel interaction.
- Search is retained after 48-state review.
- No automatic GPS/location selection is part of the initial milestone.
- No persisted preferred-state ordering is implemented before the D067 User Data architecture gate.

## State page

Use this hierarchy:

```text
← Regulations

STATE NAME
Fishing Regulations & Resources
Official resources from Responsible State Agency

[ optional active notice ]

BEFORE YOU FISH
  dynamic official resource cards

PLAN YOUR TRIP
  dynamic official resource cards
```

- State name is the primary heading; `Fishing Regulations & Resources` is secondary.
- Agency attribution is visible near the top.
- Current notices are optional and appear only when human-curated/active.
- Resource cards are dynamic; do not render empty categories or fixed placeholder slots.
- `Fishing Regulations` appears first and `Licenses & Permits` second where applicable.
- One multi-purpose official tool should normally be represented once with multiple capabilities rather than duplicated into fake peer cards.
- PDFs and online/interactive tools may both be shown when materially distinct.
- Subtle delivery metadata may identify PDF, online regulations, interactive tool/map, fishing report, or license portal.
- Official destinations use the standard external `↗` semantics; do not add a routine “leaving FCC” confirmation.
- Primary-card emphasis may be refined during Wave 1, but peer-card treatment must remain consistent with the shared card system and D048.

The nationwide implementation has validated the selector/search relationship, state-page hierarchy, narrow/mobile selector behavior, external-link affordances, and Regulations-specific Back/Home state behavior. Broader site-wide Parent-context implementation remains governed separately by D051/UX-001.

# Mobile-First Requirements

- Important text remains readable without pinch zoom.
- Touch targets remain practical.
- Media remains legible at phone widths.
- Desktop multi-column layouts collapse cleanly.
- Do not shrink wide infographics into unreadable phone images.
- Avoid unnecessary page length caused by repeated content.
- Keep common field tasks within approximately three intentional interactions when practical.

# Accessibility

The Companion should support keyboard navigation, visible focus, sufficient contrast, descriptive labels, useful alt text, responsive text/layout, and semantics that do not rely on color alone. Unavailable controls/cards must be communicated programmatically and must not masquerade as active controls.

# Exception Rule

A page/component may diverge from this standard only when a real functional, semantic, accessibility, safety, or domain requirement makes the shared treatment inappropriate. The exception must be deliberate, documented, bounded to the necessary behavior, and validated on desktop and narrow/mobile layouts.

Convenience, domain membership, bespoke markup, or implementation history are not sufficient exceptions.

# Validation Requirement

New or materially modified UI should validate the changed surface plus directly affected regression paths, including as applicable:

- correct hierarchy/scope;
- shared card accents/interactions;
- navigation semantics/context;
- search scope/helper/clear behavior;
- desktop and narrow/mobile layout;
- keyboard focus and touch usability;
- actionable/unavailable semantics;
- domain-specific media/readability requirements.

The final Version 1 cross-domain audit remains owned by `V1-DESIGN-AUDIT.md` / UX-009.

# Related Documents

- `STYLE_GUIDE.md`
- `MEDIA_GUIDE.md`
- `ARCHITECTURE.md`
- `DECISIONS.md`
- `V1-DESIGN-AUDIT.md`
