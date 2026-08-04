# Freshwater Fishing Companion

**Document:** 09-RELATIONSHIPS.md  
**Version:** 0.1.0  
**Status:** Draft  
**Decision Baseline:** D013

---

# Purpose

This document defines how the canonical entities within Freshwater Fishing Companion relate to one another.

The goal is to maintain a normalized, maintainable data model that minimizes duplication while supporting future expansion.

---

# Design Philosophy

Relationships connect entities without duplicating information.

Whenever practical, entities reference one another using stable identifiers.

Reference Knowledge, Decision Knowledge, and User Knowledge remain independent while working together through these relationships.

---

# Relationship Principles

The Companion follows these principles.

- One source of truth for every fact.
- Stable identifiers are used for all relationships.
- Canonical entities are referenced rather than copied.
- Circular dependencies should be avoided whenever practical.
- User records reference canonical entities.
- Relationships should support future expansion without requiring schema redesign.

---

# Relationship Types

## One-to-One (1:1)

One entity references one related entity.

Example

Equipment

↓

Product Definition

---

## One-to-Many (1:N)

One entity references multiple related entities.

Example

Fish

↓

Recommended Rigs

---

## Many-to-Many (N:N)

Multiple entities reference one another.

Examples

Fish ↔ Techniques

Rigs ↔ Techniques

Fish ↔ Lures

Recommendations ↔ Products

---

# Reference Knowledge Relationships

## Fish

May reference:

- Taxonomy
- Conditions
- Techniques
- Rigs
- Lures
- Sources
- Recommendations

---

## Rigs

May reference:

- Techniques
- Lures
- Conditions
- Knots
- Products
- Recommendations

---

## Techniques

May reference:

- Conditions
- Fish
- Rigs
- Recommendations

---

## Knots

May reference:

- Rigs
- Techniques
- Products

---

## Lures

May reference:

- Fish
- Rigs
- Techniques
- Conditions
- Products
- Recommendations

---

## Products

May reference:

- Lures
- Capabilities
- Sources
- Recommendations

---

## Conditions

May reference:

- Fish
- Techniques
- Rigs
- Recommendations

---

## Capabilities

May reference:

- Products
- Lures
- Equipment
- Consumables

---

## Recommendations

May reference:

- Fish
- Rigs
- Techniques
- Lures
- Products
- Sources

---

## Sources

May support:

- Fish
- Rigs
- Techniques
- Knots
- Products
- Recommendations
- Learning Articles

---

# User Knowledge Relationships

## Equipment

References:

- Product Definition
- Inventory Location

---

## Consumables

References:

- Product Definition
- Inventory Location

---

## Fishing Setups

References:

- Equipment
- Consumables

---

## Favorites

References canonical entities.

Examples:

- Fish
- Rigs
- Knots
- Techniques
- Lures

---

## Catch Log

May reference:

- Fish
- Technique
- Rig
- Lure
- Fishing Setup

---

# Relationship Rules

Relationships shall reference identifiers.

Relationships shall not duplicate:

- Fish descriptions
- Rig instructions
- Technique guidance
- Product specifications
- Source information

Updates to a canonical entity should automatically benefit every entity that references it.

---

# Data Integrity

The Companion should validate that:

- Referenced identifiers exist.
- Relationships remain valid after updates.
- Removed reference entities are handled safely.
- User data is preserved whenever practical.

---

# Version Compatibility

Schema changes affecting relationships shall be evaluated for:

- Backup compatibility
- Migration requirements
- Validation updates
- Documentation updates

---

# Design Notes

The relationship model is intended to keep the Companion normalized and maintainable.

Whenever new features are introduced, they should reuse existing relationships before introducing new ones.

---

# Future Enhancements

Potential future additions include:

- Relationship visualization
- Dependency analysis
- Schema validation tools
- Automated integrity reporting

These enhancements are outside the scope of Version 1.

---

# Related Documents

- README.md
- 00-GLOSSARY.md
- 01-FOUNDATION.md
- 02-FISH.md
- 03-RIGS.md
- 03A-TECHNIQUES.md
- 03B-CONDITIONS.md
- 04-KNOTS.md
- 05-INVENTORY.md
- 06-LURES.md
- 07-USER-DATA.md
- 08-BACKUP.md
