# Freshwater Fishing Companion — Navigation Page Standard

**Document Revision:** 1.0.0  
**Document Status:** Approved  
**Implementation Status:** Current  
**Last Updated:** 2026-08-13

# Purpose

This document establishes the canonical cross-domain standard for section landing pages, navigation pages, and collection-entry pages in Freshwater Fishing Companion.

The goal is to keep navigation concise, predictable, beginner friendly, and scalable as each reference library grows.

# Baseline

The **Rig Guide** is the baseline navigation-page model.

Future navigation pages should follow the Rig Guide's information hierarchy and card-based collection pattern unless a documented domain-specific requirement justifies a deviation.

The governing principle is:

> **Landing pages navigate to useful groups; browse and detail pages display the individual records.**

Do not allow a landing page to grow linearly with the number of canonical records when those records can be reached through useful collection cards.

# Canonical Navigation Hierarchy

A section landing/navigation page should use this order whenever the domain supports the corresponding element:

1. **Page identity** — concise heading and introduction.
2. **Search** — the first functional navigation element.
3. **Special navigation** — task-first or workflow-first navigation when the domain genuinely benefits from it.
4. **Category / collection cards** — broad destinations that lead to grouped records.

The hierarchy should remain concise and visually uncluttered. New record categories or features should not be inserted above Search or approved special-navigation sections without an explicit design decision.

# Search

Search leads the page.

Requirements:

- Place the standard inline section search immediately after the page identity/intro.
- Main-section search covers the implemented domain library.
- Do not create a separate Search card when the inline search already provides primary search access.
- Search results may expose individual records directly because the user has expressed a specific retrieval intent.
- Clearing search restores the normal landing-page hierarchy.

Search behavior continues to follow `STYLE_GUIDE.md`.

# Special Navigation

Special navigation is optional and should exist only when it materially improves the user's ability to accomplish a real task.

Examples include task-first discovery, setup workflows, or other domain-specific entry points that are more useful than asking a beginner to know a canonical record name or category first.

Rules:

- Place approved special navigation **after Search and before collection cards**.
- Keep it compact and task oriented.
- Do not duplicate the same destination at the same hierarchy level under multiple labels.
- A task entry may open a guided workflow, a curated collection, or another appropriate destination without exposing that implementation distinction to the user.
- Special navigation should remain stable and prominent even as the underlying reference library grows.

Current Knot example:

- Attach Line to a Reel
- Tie On a Hook, Swivel, or Lure
- Connect Two Lines / Add a Leader
- Make a Loop Connection

# Category and Collection Cards

Cards are the default mechanism for broader navigation destinations.

Use cards to lead to meaningful grouped content rather than rendering many individual records directly on the landing page.

## Card Accent and Priority Treatment

Navigation-card grids inherit the shared Dashboard/Rig Guide visual grammar.

- Use the established **varied adjacent accent-bar palette** across peer navigation cards. Do not recolor an entire domain's navigation grid to one repeated domain accent.
- Domain identity may remain in headings, search/result styling, badges, and detail-page accents without flattening the navigation-card palette.
- A deliberately prioritized collection such as **Core** uses the approved primary/Core treatment in addition to the shared card palette. The Core card may use the domain accent to make the recommended learning path immediately recognizable.
- Approved special-navigation blocks that represent a primary beginner workflow, such as Knot **What are you trying to do?**, should receive restrained priority framing or accent treatment so they remain visually prominent above ordinary collection navigation.
- Priority treatment must remain calm, accessible, and subordinate to page identity. Do not use animation, glow, or novelty styling.

These rules are visual hierarchy, not data semantics. Do not add canonical fields solely to drive presentation.

Typical collection hierarchy:

1. **All** — first collection card when a complete browse view exists.
2. **Core** — when the domain has an approved curated Core set.
3. Domain-specific categories, classifications, or difficulty groups.
4. Approved future groups may remain visible as unavailable cards when useful for communicating structure.

Examples:

- All Rigs -> complete Rig browse view.
- Core Rigs -> curated Core Rig browse view.
- All Knots -> complete Knot browse view.
- Core Knots -> curated Core Knot browse view.
- Beginner Knots -> Beginner Knot browse view.

A collection card opens the grouped browse view; the landing page should not also duplicate every member of that collection unless a separately approved use case requires direct record exposure.

# Browse Pages

Browse/subset pages are where individual records should normally appear.

A browse page should:

- clearly identify the selected collection,
- provide scoped Search when useful,
- display the collection's individual records,
- preserve the established Parent/Home navigation pattern,
- use a predictable sort or approved curated order,
- open selected records into their detail views.

This separation keeps the landing page useful as the library expands while allowing browse pages to carry the record-level density.

# Unavailable Collections

An approved collection may appear before implementation when showing it helps users understand the intended information architecture.

Unavailable collection cards must:

- be clearly marked `Coming Soon` or equivalent,
- use the established unavailable-card treatment,
- avoid hover, pointer, click, or other affordances that imply the destination currently works,
- remain visually subordinate to available navigation.

# Core Collections

`Core` is a curated learning/reference path, not a replacement for the domain's normal categories.

When a Core collection exists:

- expose it as a collection card rather than dumping all Core records directly onto the landing page,
- retain the approved Core visual emphasis,
- preserve the canonical Core ordering inside the Core browse view.

Core presentation continues to follow `STYLE_GUIDE.md`.

# Scalability Rule

Navigation architecture must be designed for the expected mature library, not only the current small dataset.

When adding records, first determine whether they belong inside an existing collection or require a justified new collection. Do not add more individual landing-page items merely because the current record count is still manageable.

Prefer one additional meaningful collection card over a growing wall of record cards.

# Domain-Specific Exceptions

The Rig Guide is the baseline, not an inflexible template.

A domain may deviate when a materially better user workflow exists, but the exception must preserve:

- Search-first discovery,
- concise navigation,
- beginner-first usability,
- scalable grouping,
- accessible actionable/unavailable behavior,
- predictable Parent/Home navigation.

Material deviations from this standard should be documented in the relevant workstream approval before production implementation.

# Current Knot Application

The approved Knot Guide follows this hierarchy:

1. Search all Knots.
2. **What are you trying to do?**
3. Collection cards:
   - All Knots.
   - Core Knots.
   - Beginner Knots.
   - Intermediate Knots.
   - Advanced Knots — Coming Soon while unavailable.

Selecting a Knot collection opens the corresponding grouped browse page. Individual Core Knots are not duplicated directly on the landing page.

The Knot-specific implementation details remain controlled by `workstreams/KNOT-LANDING-PAGE-APPROVAL.md`.

# Related Documents

- `STYLE_GUIDE.md`
- `DETAIL-PAGE-STANDARD.md`
- `workstreams/KNOT-LANDING-PAGE-APPROVAL.md`
- `workstreams/KNOT-SEARCH-APPROVAL.md`
- `workstreams/KNOT-PRODUCTION-PACKAGE-2.md`
