# Freshwater Fishing Companion

**Document:** STYLE_GUIDE.md  
**Document Revision:** 1.3.5
**Document Status:** Approved
**Last Updated:** 2026-08-23

# Purpose

This document defines coding, documentation, and interface standards for Freshwater Fishing Companion.

Detailed workflow rules are in `DEVELOPMENT_WORKFLOW.md`.

Detailed media rules are in `MEDIA_GUIDE.md`.

# General Principles

- Plan twice. Build once.
- Keep solutions simple.
- Prefer readability over cleverness.
- One source of truth.
- Facts before features.
- Mobile-first design.
- Offline-first architecture.
- Local-first data storage.
- Documentation is part of the product.
- Permanent standards belong in GitHub documentation, not only in chat history.

# HTML Standards

- Use semantic HTML whenever practical.
- Minimize unnecessary nesting.
- Avoid inline styles.
- Avoid inline JavaScript.
- Prefer purpose-based class names.

Prefer semantic elements such as `header`, `nav`, `main`, `section`, `article`, `aside`, and `footer`.

# CSS Standards

CSS should be:

- Mobile-first
- Responsive
- Simple
- Reusable

Use CSS custom properties for colors, spacing, and sizing when practical.

Order rules consistently:

1. Variables
2. Reset
3. Layout
4. Components
5. Utilities
6. Responsive rules

Use lowercase hyphenated class names.

# JavaScript Standards

JavaScript should prioritize clarity.

- Use small focused functions.
- Use descriptive names.
- Use clear boolean names.
- Return early where practical.
- Avoid deeply nested logic.
- Comments should explain why, not restate what code does.

# Data Standards

Use camelCase property names.

Stable IDs use lowercase hyphenated strings.

Every canonical field must have a documented purpose.

Do not add fields "just in case."

# File Naming

Documentation:

    PROJECT.md
    ARCHITECTURE.md
    STYLE_GUIDE.md
    DEVELOPMENT_WORKFLOW.md
    MEDIA_GUIDE.md
    DECISIONS.md
    ROADMAP.md

JavaScript:

    search.js
    storage.js
    recommendations.js

CSS:

    main.css
    layout.css
    components.css
    themes.css

# User Interface Standards

The interface should be:

- Clean
- Calm
- Beginner friendly
- Fast
- Easy to navigate
- Readable outdoors
- Compact enough for field use

Avoid visual clutter and duplicated instructional content.

When a section has searchable reference or instructional content, provide the standard inline search field on the main section landing page as well as on relevant scoped subset/browse pages. Main-section search covers the implemented section library; subset search respects the selected scope. Do not require a separate navigation card merely to enter primary Search.

Anything that looks actionable must either perform an action or clearly communicate that it is unavailable.

Unimplemented child cards may remain visible when they help communicate application structure, but they must be clearly marked `Coming Soon` or equivalent. Unavailable cards must not retain hover, pointer, click, or other affordances that imply working navigation and should use appropriate accessible disabled/unavailable semantics.

# Search Controls and Result Ordering

Search uses one shared interaction pattern across searchable sections and subsets:

- show an inline search field at the section entry point,
- keep subset search scoped to the selected subset,
- use the same canonical records and shared search helpers,
- allow live input updates while retaining an explicit Search submit action,
- show a one-click `×` clear control whenever the field contains text,
- give the clear control the accessible name `Clear search`,
- clearing the query immediately restores the unfiltered/default view and keeps focus in the search field,
- suppress browser-specific duplicate native cancel controls when the explicit application clear control is shown.

Do not use a `Search` navigation card when its only function would be to open a separate primary search page. Fish Guide and Rig Guide use the inline section-search pattern.

Search results are relevance ordered. Canonical-name exact/prefix matches outrank lower-priority metadata matches; scientific/secondary identity fields may rank strongly where applicable; category, difficulty, use-case, and condition metadata are weaker signals. Alphabetical ordering is appropriate for unfiltered browse lists or as an explicitly chosen browse order, not as a replacement for search relevance.

A future Dashboard search field is approved direction but remains outside the current implementation until cross-domain scope and result presentation are deliberately defined.

# Forest Journal

Forest Journal is the Version 1 default theme and the current visual/reference baseline.

It uses muted forest greens, warm earth tones, and copper/gold accents to create a modern outdoor field-guide feel.

Forest Journal is the only production-supported Version 1 theme.

Forest Copper, Forest Gold, and Legacy Dark are intentionally retained **deferred/inactive theme candidates** from earlier theme exploration. They are not abandoned historical artifacts, do not need to maintain current component parity while deferred, and are not part of the supported production validation matrix.

Multi-theme implementation is deliberately postponed while the application remains under active functional development. Maintaining multiple complete production themes during ongoing component, navigation, media, accessibility, and responsive-layout changes would create duplicated maintenance and regression risk before the shared UI structure is stable.

The final theme architecture belongs to the Settings / User Preferences architecture gate. When that gate opens, shared base/layout/component behavior should be centralized once where practical, and individual theme files should primarily own theme-specific design tokens and deliberate overrides rather than duplicate the full application stylesheet.

The absence of a final theme directory/tree today is a deliberate deferral, not evidence that theme support was forgotten or rejected. Existing deferred candidates may be reorganized into a clearly labeled theme-concept location before that later implementation, but their presence does not guarantee that every concept will become a supported theme.

Any future production-supported alternative theme may change appearance but must preserve:

- Layout
- Typography
- Behavior
- Accessibility
- Responsive design
- User experience
- The canonical reference-media panel color `#f4f0e8` / RGB `244, 240, 232`

The reference-media surface is a cross-theme invariant, not a theme token. Future themes must be designed around that fixed surface rather than recoloring it. Surrounding page/card colors, borders, text, controls, focus states, and accents must remain visually compatible with `#f4f0e8` and maintain sufficient contrast. A theme concept that materially clashes with the fixed reference-media surface must be redesigned rather than changing the media surface.

Previously approved Forest Journal behavior should not be altered by unrelated full-file replacements. Confirmed regressions should be restored narrowly without redesign or unrelated cleanup.

# Core Learning Path Visual Emphasis

Curated `Core` content is intentional priority learning/reference material and should receive stronger visual hierarchy than ordinary peer cards.

Core is cross-cutting rather than a difficulty or category. A Core item may coexist with Beginner, Intermediate, Advanced, Expert, or other domain-specific classifications.

Examples include:

- **Core Rigs**
- **Core Knots**
- Other explicitly approved `Core` learning/reference groups.

Use restrained Forest Journal design flairs rather than a separate visual system. Appropriate treatments include:

- stronger accent or border hierarchy,
- a visible `Core`, `Start Here`, or equivalent badge/eyebrow,
- modestly stronger title emphasis,
- subtle surface/inset treatment,
- section framing or grouping,
- concise supporting copy explaining the recommended learning path.

Rules:

- Do not rely on color alone to communicate Core status.
- Preserve contrast, keyboard focus, touch targets, and responsive behavior.
- Avoid excessive animation, glow, ornamental effects, or novelty styling.
- Keep the treatment reusable across domains so Core Rigs and Core Knots feel related.
- Do not add canonical data fields solely for presentation unless a real cross-feature data requirement exists.
- Core styling indicates instructional priority; it does not imply ownership, completion, recommendation ranking, or feature availability.
- Unavailable Core items, if ever shown, must still follow the unavailable-feature rules and cannot masquerade as actionable.

The goal is immediate recognition of the recommended starting path while preserving the calm field-guide character of Forest Journal.

# Section and Subset Card Navigation

The main Dashboard is the visual reference for card-based section and subset navigation.

Card grids on section and subset/navigation pages should preserve the same shared grammar:

- varied adjacent accent colors rather than one repeated domain accent,
- the corresponding left-edge accent line,
- consistent spacing, proportions, hover, active, focus, and responsive behavior,
- stronger primary treatment only for deliberately prioritized cards,
- D030 unavailable-card behavior for unimplemented destinations.

Domain identity may still appear in headings, search/results, detail-page accents, and badges. Do not override the entire navigation-card grid to a single domain color.

Core cards may add the approved Core emphasis on top of the shared Dashboard-derived palette.

An **Important Card** is a deliberately elevated navigation card for a destination that is foundational, required to begin the activity, or otherwise materially more important than peer destinations. Use the shared primary-card hierarchy rather than inventing a separate visual system. Important treatment is selective:

- preserve the card's varied accent-bar position/palette unless a separately approved Core/domain treatment requires otherwise,
- elevate the individual card rather than automatically accenting its entire surrounding section,
- do not mark every card in a group as Important,
- use Important treatment for genuine workflow priority, not decoration.

For detailed landing-page hierarchy, collection-card grouping, and special-navigation rules, follow `NAVIGATION-PAGE-STANDARD.md`.

# Persistent Parent Navigation

Nested subset/detail views keep Parent/Home controls available while the page scrolls. Use the shared compact sticky navigation group rather than requiring the user to return to the top just to leave a long detail page.

Requirements:

- keep Parent and Home controls visible while scrolling,
- preserve keyboard focus and practical touch interaction,
- keep the floating surface compact and visually subordinate to page content,
- avoid covering important content or creating a large mobile toolbar.

Canonical navigation behavior for standard application views:

```text
Forward
-> newly opened destination starts at top

Parent
-> restores the immediately preceding standard application view
-> restores applicable prior UI state
-> restores that view's prior scroll position

Home
-> Dashboard starts at top
-> contextual return state is cleared
```

A saved scroll position belongs only to the source context being restored and must never transfer into a newly opened destination.

Specialized workflows may use separately approved navigation semantics where workflow state requires them. Reel Setup is an approved example of a specialized step-aware navigation context. Such exceptions must be deliberate and documented and do not redefine standard Parent behavior.

# Rig Detail Density

The compact Rig-detail treatment is approved for Rigs. It should reduce scrolling primarily through tighter section spacing and compact component rows rather than by shrinking readable text or hiding instructions.

Keep `How to Build It` comparatively spacious, preserve visible Safety content, maintain practical ownership controls, and stack component content cleanly at narrow phone widths.

Do not automatically apply the Rig density treatment to non-Rig detail pages without separate domain review.

# Unified Field-Guide Presentation

Reference and instructional pages should share:

- Information hierarchy
- Spacing
- Label conventions
- Media surfaces
- Contextual actions
- Related-knowledge patterns

Do not force Fish photos, Rig diagrams, Tackle illustrations, Knot diagrams, and Lure media into the same technical format.

Follow `MEDIA_GUIDE.md`.

# Contextual Information

Permanent convention:

    Name ⓘ

Meaning:

> Open contextual information without leaving the current page.

Expected behavior:

- Desktop may use a centered modal.
- Mobile may use a bottom sheet.
- Current page remains underneath.
- Closing restores focus to the original trigger.
- Related references may open contextually.

# Reference-Link Semantics

- `Name ⓘ` opens contextual information without leaving the page.
- External verified references use `↗` and open in a new tab.
- Internal directional navigation uses `→` when an arrow cue is appropriate.
- Directional icons stay immediately adjacent to the destination text rather than being detached at the far edge of a row.
- Internal `→` and external `↗` must have enough visual size/weight to remain legible beside bold destination text; icon treatment may be drawn independently of the text glyph when needed for consistent weight.
- External CTA labels should name the destination when practical instead of using generic wording such as `Browse` or `Learn More`.
- The approved Dashboard Regulations CTA is `Go to ODWC Regulations ↗`.
- `↗` indicates that the user is leaving the application for an external destination.
- `→` indicates movement to another destination inside Freshwater Fishing Companion when a directional arrow is shown.
- Do not use `ⓘ` for an external-navigation action.

The final Version 1 design audit still owns broader cross-domain decisions about internal/external color families and when a destination should use a card, pill/chip, compact text row, or ordinary inline link. The arrow semantics above remain constant across those density variants.

# Mobile-First Standards

- Important text must remain readable without pinch zoom.
- Touch targets must remain practical.
- Media must be legible at phone widths.
- Do not shrink wide desktop infographics into unreadable phone images.
- Desktop multi-column layouts must collapse cleanly.
- Avoid unnecessary page length caused by repeated content.
- Keep common field workflows within approximately three intentional interactions from a relevant entry point when practical.
- Prefer completing a task in the current context over adding an intermediate page that provides no distinct value.

# Actionable and Unavailable UI

Anything that looks actionable must either perform an action or clearly communicate that it is unavailable.

Unimplemented child cards may remain visible when they help explain application structure, but they must be clearly marked `Coming Soon` or equivalent, must not use misleading hover/pointer/click affordances, and should expose appropriate accessible unavailable/disabled semantics.

# Accessibility

The Companion should:

- Support keyboard navigation.
- Maintain sufficient contrast.
- Use descriptive labels.
- Avoid meaning conveyed by color alone.
- Scale on phones, tablets, and desktops.
- Provide useful alt text.
- Ensure unavailable controls or cards are communicated programmatically and do not masquerade as active controls.

# Documentation Standards

Every governing document should include:

- Title
- Document Revision
- Document Status
- Purpose

When relevant, include:

- Last Updated
- Design Notes
- Related Documents
- Implementation Status

Document Status uses `Draft`, `Approved`, `Superseded`, or `Archived`. Detailed implementation-state terminology and transitions are governed by `DEVELOPMENT_WORKFLOW.md`; this Style Guide does not maintain a competing status vocabulary. `Document Revision` and `Application Version`/`Application Baseline` are separate concepts.

Documentation must distinguish current implementation from approved future work. Do not describe a future design as already implemented. `Validated` is used only after actual repository/runtime verification where applicable.

Material durable decisions must also preserve enough context to recover the decision without chat history: the decision itself, its reason, current implementation status, future/revisit trigger, and canonical owner/document. `DEVELOPMENT_WORKFLOW.md` defines the permanent Durable Decision Context standard.

# Source Replacement Standard

Complete-file replacement is the default project delivery method. Complete-file replacement describes the delivery artifact; it does not authorize broad or unrelated edits.

For an existing source file:

1. Fetch the latest GitHub version.
2. Make only the approved changes.
3. Return the complete resulting file.
4. Preserve unrelated current behavior.
5. Diff the finished replacement against the fetched source; any unrelated diff is a failure unless explicitly authorized.
6. Package coherent multi-file updates together when practical.

An unrelated diff in a full-file replacement is a failure unless the unrelated change was explicitly authorized.

Coherent repository changes should follow the commit, delivery, and session-closeout rules in `DEVELOPMENT_WORKFLOW.md`.

See `DEVELOPMENT_WORKFLOW.md`.

# Commit Messages

Use concise descriptive messages, for example:

    Create fish guide
    Add inventory search
    Fix navigation layout
    Document development and media standards

Avoid vague messages such as `Update` or `Fix stuff`.

# Testing

A completed feature should be:

- Functional
- Tested
- Documented
- Verified on GitHub

Avoid unrelated changes in one commit.

A coherent module may include several related source files and media assets in one commit.

# Version 1 Priorities

1. Correctness
2. Simplicity
3. Maintainability
4. Performance
5. Visual polish

# Related Documents

- `PROJECT.md`
- `SPECIFICATION.md`
- `ARCHITECTURE.md`
- `ROADMAP.md`
- `DECISIONS.md`
- `DEVELOPMENT_WORKFLOW.md`
- `MEDIA_GUIDE.md`
- `NAVIGATION-PAGE-STANDARD.md`
- `CHANGELOG.md`
