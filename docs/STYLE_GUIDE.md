# Freshwater Fishing Companion

**Document:** STYLE_GUIDE.md  
**Version:** 1.1.0  
**Status:** Approved  
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

# Forest Journal

Forest Journal is the Version 1 default theme.

It uses muted forest greens, warm earth tones, and copper/gold accents to create a modern outdoor field-guide feel.

Alternative themes may change appearance but must preserve:

- Layout
- Typography
- Behavior
- Accessibility
- Responsive design
- User experience

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

# Accessibility

The Companion should:

- Support keyboard navigation.
- Maintain sufficient contrast.
- Use descriptive labels.
- Avoid meaning conveyed by color alone.
- Scale on phones, tablets, and desktops.
- Provide useful alt text.

# Documentation Standards

Every document should include:

- Title
- Version
- Status
- Purpose

When relevant, include:

- Last Updated
- Design Notes
- Related Documents
- Implementation Status

Documentation must distinguish between:

- Current implementation
- Approved standards
- Future implementation work

Do not describe a future design as already implemented.

# Source Replacement Standard

Complete-file replacement is the default project delivery method.

For an existing source file:

1. Fetch the latest GitHub version.
2. Make only the approved changes.
3. Return the complete resulting file.
4. Preserve unrelated current behavior.
5. Package coherent multi-file updates together when practical.

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
