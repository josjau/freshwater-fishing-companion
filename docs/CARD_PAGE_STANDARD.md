# Freshwater Fishing Companion — Card Page Standard

**Document:** CARD_PAGE_STANDARD.md  
**Document Revision:** 1.0.0  
**Document Status:** Approved  
**Decision Baseline:** D015, D030, D042, D048  
**Last Updated:** 2026-08-25

# Purpose

This standard defines the site-wide implementation contract for pages that present peer navigation, browse, catalog, collection, task, comparison, or similar choices as cards.

The Dashboard is the visual reference implementation. D048 remains the governing architectural decision; this document makes that decision operational for new and modified card pages.

# Scope

This standard applies to all current and future card grids whose cards represent peer choices, including but not limited to:

- Dashboard cards,
- section landing cards,
- browse/category cards,
- collection and learning-tier cards,
- task/action cards,
- catalog cards,
- comparison-pair cards,
- other peer-choice card panels added later.

It applies across Fish, Rigs, Knots, Tackle, Recommendations, Catch Log, Favorites, Settings, and future domains.

A page does not leave this standard merely because its cards use specialized internal content such as two images, badges, status indicators, counts, or domain-specific metadata.

# Required Shared Card Treatment

Peer card grids must preserve the Dashboard-derived visual grammar:

1. Adjacent peer cards use differing accent colors from the approved shared accent palette rather than one repeated domain color.
2. Each card's left-edge accent, subtle background/bloom treatment, action affordance, hover state, focus state, and other accent-coupled styling use that card's assigned accent consistently.
3. Card spacing, radius, proportions, interaction feedback, keyboard focus visibility, and responsive behavior remain aligned with the shared application card system unless a documented functional requirement needs a targeted variation.
4. Color rotation is deterministic and stable for a given rendered order. A specialized renderer may assign accents through shared classes, variables, or an equivalent reusable mechanism, but it must not silently collapse the grid to one color.
5. Domain identity may still appear in headings, search/results, badges, detail pages, semantic warnings, or other appropriate surfaces. Domain identity does not replace multi-accent peer-card treatment.
6. Primary/Core/workflow cards may add approved D042 or other deliberate hierarchy on top of the shared card grammar. Hierarchy is additive; it does not create an unrelated card system.
7. Unavailable cards follow D030 and preserve the same visual family while removing misleading action affordances.

# Specialized Card Markup

Specialized internal card structure is allowed when the content requires it.

Examples include:

- a Compare Fish card containing two Fish images,
- a card with a status/readiness indicator,
- a card with a Core badge,
- a card with compact relationship metadata.

The implementation may use a specialized component class or renderer for those internal needs. However, specialized markup must reuse or explicitly reproduce the shared card-shell behavior and accent rotation.

**A custom card class is not an exception to D048.**

# Exception Rule

A card page may intentionally diverge from the shared treatment only when a real functional, semantic, accessibility, or safety requirement makes the shared treatment inappropriate.

Any exception must be:

1. deliberate,
2. documented in the applicable decision/workstream/standard,
3. bounded to the necessary behavior,
4. validated on desktop and narrow/mobile layouts.

Convenience, domain membership, a bespoke renderer, or implementation history are not sufficient reasons for an exception.

# Current Compare Fish Finding

The existing Compare Similar Fish catalog uses specialized `fish-comparison-catalog-card` markup because each card presents a pair of Fish images and comparison-specific content. That specialized internal structure is valid.

However, the current implementation assigns `var(--accent-fish)` to every comparison card instead of rotating through the shared card palette. That behavior conflicts with D048 and this standard and is a confirmed implementation defect, not an approved Fish-specific design exception.

The correction should preserve the comparison-specific image layout while bringing the outer card shell, accent rotation, and accent-coupled interaction states into the shared site-wide card system.

# Implementation Guidance

Prefer one reusable accent-assignment mechanism for all peer card grids rather than maintaining separate hard-coded color sequences per domain.

A compliant implementation may use:

- the shared `.dashboard-card` shell where practical,
- a reusable card-shell class shared by Dashboard and specialized cards,
- shared CSS custom properties/classes that assign the same accent rotation to specialized card components.

The chosen mechanism should minimize duplicate styling and reduce the chance that a new card page silently bypasses the standard.

# Validation Requirement

Any new or materially modified card page must be checked for:

- differing adjacent accents,
- correct left-edge accent behavior,
- accent-consistent action/hover/focus treatment,
- desktop layout,
- narrow/mobile layout,
- keyboard focus visibility,
- unavailable/primary/Core semantics where applicable.

A card page is not visually complete merely because its content and navigation work.

# Permanent Principle

**Every peer card page belongs to the same Dashboard-derived card system unless a documented functional exception requires otherwise. Specialized content may change the inside of the card; it does not silently change the site's card language.**
