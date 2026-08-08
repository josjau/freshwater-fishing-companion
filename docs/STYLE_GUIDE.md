# Freshwater Fishing Companion

**Document:** STYLE_GUIDE.md  
**Document Revision:** 1.2.0
**Document Status:** Approved
**Last Updated:** 2026-08-07

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

Anything that looks actionable must either perform an action or clearly communicate that it is unavailable.

Unimplemented child cards may remain visible when they help communicate application structure, but they must be clearly marked `Coming Soon` or equivalent. Unavailable cards must not retain hover, pointer, click, or other affordances that imply working navigation and should use appropriate accessible disabled/unavailable semantics.

# Forest Journal

Forest Journal is the Version 1 default theme.

It uses muted forest greens, warm earth tones, and copper/gold accents to create a modern outdoor field-guide feel.

Forest Journal is the only production-supported Version 1 theme. Forest Copper, Forest Gold, and Legacy Dark are historical/inactive concepts until a shared theme architecture is approved.

Any future production-supported alternative theme may change appearance but must preserve:

- Layout
- Typography
- Behavior
- Accessibility
- Responsive design
- User experience

Previously approved Forest Journal behavior should not be altered by unrelated full-file replacements. Confirmed regressions should be restored narrowly without redesign or unrelated cleanup.

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
- External CTA labels should name the destination when practical instead of using generic wording such as `Browse` or `Learn More`.
- The approved Dashboard Regulations CTA is `Go to ODWC Regulations ↗`.
- `↗` indicates that the user is leaving the application for an external destination.
- Do not use `ⓘ` for an external-navigation action.

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

Document Status uses `Draft`, `Approved`, `Superseded`, or `Archived`. Implementation Status uses `Current`, `Approved / Not Implemented`, `In Progress`, or `Validated`. `Document Revision` and `Application Version`/`Application Baseline` are separate concepts.

Documentation must distinguish current implementation from approved future work. Do not describe a future design as already implemented. `Validated` is used only after actual repository/runtime verification where applicable.

# Source Replacement Standard

Complete-file replacement is the default project delivery method.

For an existing source file:

1. Fetch the latest GitHub version.
2. Make only the approved changes.
3. Return the complete resulting file.
4. Preserve unrelated current behavior.
5. Diff the finished replacement against the fetched source; any unrelated diff is a failure unless explicitly authorized.
6. Package coherent multi-file updates together when practical.

An unrelated diff in a full-file replacement is a failure unless the unrelated change was explicitly authorized.

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
- `CHANGELOG.md`
