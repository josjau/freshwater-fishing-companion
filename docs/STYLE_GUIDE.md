# Freshwater Fishing Companion

**Document:** STYLE_GUIDE.md  
**Version:** 1.0.0  
**Status:** Approved

---

# Purpose

This document defines the coding, documentation, and user interface standards for Freshwater Fishing Companion.

All project contributions should follow these standards unless an approved architectural decision documents an exception.

The goals are:

- Consistency
- Readability
- Maintainability
- Simplicity

---

# General Principles

The project follows these guiding principles.

- Plan twice. Build once.
- Keep solutions simple.
- Prefer readability over cleverness.
- One source of truth.
- Facts before features.
- Mobile-first design.
- Offline-first architecture.
- Local-first data storage.

---

# HTML Standards

## General

- Use semantic HTML whenever practical.
- Minimize unnecessary nesting.
- Prefer readability over reducing line count.
- Avoid inline styles.
- Avoid inline JavaScript.

---

## Semantic Elements

Prefer:

- header
- nav
- main
- section
- article
- aside
- footer

Use generic `div` elements only when no semantic element is appropriate.

---

## Naming

IDs should be used only when uniqueness is required.

Classes should describe purpose rather than appearance.

Good

```html
catch-card
inventory-grid
fish-details
```

Avoid

```html
green-box
left-column
large-text
```

---

# CSS Standards

## Philosophy

CSS should be:

- Mobile-first
- Responsive
- Simple
- Reusable

---

## Variables

Application colors, spacing, and sizing should use CSS custom properties.

Example

```css
:root {
    --background: #0f1713;
    --surface: #18231d;
    --text: #f1f5f2;
    --accent: #72ad86;
    --border: #314038;
    --radius: 14px;
}
```

Hardcoded values should be avoided whenever practical.

---

## Organization

Order rules consistently.

1. Variables
2. Reset
3. Layout
4. Components
5. Utilities
6. Responsive rules

---

## Class Naming

Use lowercase.

Separate words with hyphens.

Examples

```text
fish-card
inventory-table
primary-button
```

Avoid abbreviations unless universally understood.

---

# JavaScript Standards

## Philosophy

JavaScript should prioritize clarity.

Small, focused functions are preferred over large multi-purpose functions.

---

## Naming

Variables

```javascript
selectedFish
inventoryItems
userPreferences
```

Constants

```javascript
MAX_RESULTS
DEFAULT_THEME
```

Functions

```javascript
loadInventory()
savePreferences()
filterFish()
```

Boolean variables should clearly express a true/false state.

Examples

```javascript
isFavorite
hasInventory
showBeginnerTips
```

---

## Functions

Functions should perform one primary task.

Avoid deeply nested logic whenever practical.

Return early when appropriate.

---

## Comments

Comments should explain **why**, not **what**.

Good

```javascript
// Preserve the user's selected region between sessions.
```

Poor

```javascript
// Increment counter.
counter++;
```

---

# JSON Standards

Use consistent property names.

Examples

```json
{
  "id": "largemouth-bass",
  "name": "Largemouth Bass",
  "summary": "...",
  "isActive": true
}
```

Use camelCase for property names.

Stable identifiers use lowercase with hyphens.

---

# File Naming

Documentation

```text
PROJECT.md
STYLE_GUIDE.md
ROADMAP.md
```

Data Model

```text
02-FISH.md
03-RIGS.md
```

JavaScript

```text
search.js
storage.js
recommendations.js
```

CSS

```text
main.css
layout.css
components.css
themes.css
```

---

# User Interface Standards

## Design Goals

The interface should be:

- Clean
- Calm
- Beginner friendly
- Fast
- Easy to navigate

Avoid visual clutter.

---

## Theme

Version 1 uses the approved dark theme.

Dark green is the primary accent color.

Future versions may support additional themes without changing component structure.

---

## Cards

Cards should be used consistently throughout the application.

Typical card contents:

- Title
- Summary
- Key actions
- Optional image

---

## Buttons

Primary actions should be visually distinct.

Avoid placing destructive actions next to primary actions.

---

## Icons

Icons should support text, not replace it.

Every important action should remain understandable without relying solely on icons.

---

# Accessibility

The Companion should:

- Support keyboard navigation.
- Maintain sufficient color contrast.
- Use descriptive labels.
- Avoid conveying meaning through color alone.
- Scale correctly on phones, tablets, and desktops.

Accessibility improvements should not significantly increase interface complexity.

---

# Default Theme

The Version 1 default theme is **Forest Journal**.

Forest Journal uses muted forest greens, warm earth tones, and copper/gold accents to create the appearance of a modern outdoor field guide.

Alternative themes may be added in future releases, but all themes must preserve the same layout, spacing, typography, accessibility, and component behavior.

---

# Documentation Standards

Every document should include:

- Title
- Version
- Status
- Purpose

When applicable, include:

- Design Notes
- Related Documents
- Future Enhancements

Documentation should describe the current implementation, not speculative ideas.

---

# Commit Messages

Use concise, descriptive commit messages.

Examples

```text
Create fish guide

Add inventory search

Implement backup validation

Fix navigation layout
```

Avoid vague messages such as:

```text
Update

Fix stuff

Changes
```

---

# Testing Philosophy

Implement features in small increments.

Each completed feature should be:

- Functional
- Tested
- Documented

Avoid combining unrelated changes into a single commit.

---

# Version 1 Priorities

Priority order:

1. Correctness
2. Simplicity
3. Maintainability
4. Performance
5. Visual polish

Premature optimization should be avoided.

---

# Related Documents

- PROJECT.md
- SPECIFICATION.md
- ARCHITECTURE.md
- ROADMAP.md
- DECISIONS.md
- CHANGELOG.md
