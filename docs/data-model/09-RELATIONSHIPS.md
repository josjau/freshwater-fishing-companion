# Freshwater Fishing Companion

**Document:** 09-RELATIONSHIPS.md  
**Version:** 0.2.0  
**Status:** Draft  
**Decision Baseline:** D013

---

# Purpose

This document defines how canonical entities, decision knowledge, and user-owned data relate within Freshwater Fishing Companion.

The relationship model supports:

- Search
- Related knowledge
- Recommendations
- Inventory matching
- Catch logging
- Learning paths
- Navigation
- Data validation

Relationships connect entities through stable identifiers rather than duplicated content.

---

# Design Philosophy

The Companion is built around connected knowledge.

A search result or detail page should not operate as an isolated record. It should help the user understand:

- What the item is
- How it is used
- What works with it
- What conditions suit it
- Whether the user owns it
- Which products are recommended
- What to learn next

Relationships should provide useful next steps without overwhelming the user.

---

# Knowledge Layers

The relationship model follows the approved three-layer architecture.

## Layer 1 — Reference Knowledge

Curated facts and reusable fishing concepts.

Examples:

- Fish
- Rigs
- Techniques
- Conditions
- Knots
- Tackle
- Lures
- Products
- Taxonomies
- Sources

---

## Layer 2 — Decision Knowledge

Guidance derived from reference knowledge and user context.

Examples:

- Lure recommendations
- Product recommendations
- Suggested alternatives
- Inventory compatibility
- Search ranking
- Learning guidance

---

## Layer 3 — User Knowledge

Information owned or maintained by the angler.

Examples:

- Profiles
- Preferences
- Favorites
- Equipment
- Consumables
- Custom tackle
- Fishing setups
- Catch records

---

# Relationship Principles

The Companion shall follow these relationship rules:

- Relationships use stable identifiers.
- Canonical entities are referenced rather than copied.
- User records reference canonical entities whenever practical.
- Tackle items are not required to belong to a rig.
- Rigs act as recipes that reference existing tackle concepts.
- Relationships should support related knowledge without forcing every possible connection.
- Required relationships must be validated.
- Optional relationships must not block use of an otherwise valid entity.
- Inactive canonical entities remain available for historical references.
- Circular relationships should be limited and documented when necessary.
- Search and recommendation relationships should be explainable.

---

# Relationship Classifications

Every relationship shall use one of the following classifications.

## Required

The source entity cannot function correctly without the relationship.

Example:

```text
Product Recommendation
    -> Product Definition
