# Freshwater Fishing Companion

**Document:** 01-FOUNDATION.md  
**Version:** 0.1.0  
**Status:** Draft  
**Decision Baseline:** D002

---

# Purpose

This document establishes the foundational standards that govern every canonical entity within Freshwater Fishing Companion.

All subsequent data model documents inherit the principles defined here.

No entity shall violate these standards unless an approved architectural decision explicitly documents the exception.

---

# Design Philosophy

The Companion is built around **knowledge**, not screens.

Application pages are simply different views of the same underlying data.

Every piece of information should exist once and only once.

All modules reference canonical entities rather than maintaining duplicate information.

---

# Core Principles

The data model shall follow these principles.

- One authoritative definition for every canonical entity.
- Stable identifiers that never change after release.
- Reference data separated from user-generated data.
- User data references canonical entities.
- Local-first architecture.
- Offline-first operation.
- Versioned backup and restore.
- Long-term maintainability over short-term convenience.
- Simplicity before complexity.

---

# Canonical Entity Standard

Whenever practical, every canonical entity shall inherit the same core structure.

Minimum fields:

```text
id
name
summary
createdVersion
lastModifiedVersion
isActive
```

Additional fields may be added only when they support an approved feature.

---

# Core Field Definitions

## id

Purpose

Uniquely identifies the canonical entity.

Ownership

Application.

Dependencies

All application modules.

Rules

- Stable.
- Never reused.
- Never changed after release.

---

## name

Purpose

Primary display name presented to the user.

Ownership

Application.

Dependencies

User interface, search, favorites, learning content, recommendations.

Rules

- Human readable.
- May change to improve clarity.
- Does not affect the entity identifier.

---

## summary

Purpose

Provides a concise beginner-friendly description.

Ownership

Application.

Dependencies

Lists, cards, search results, overview screens.

Rules

- Short.
- Clear.
- Educational.

---

## createdVersion

Purpose

Records the application version in which the entity first appeared.

Ownership

Application.

Dependencies

Migration, documentation, troubleshooting.

Rules

Never modified after creation.

---

## lastModifiedVersion

Purpose

Records the most recent application version that modified the entity.

Ownership

Application.

Dependencies

Migration, troubleshooting, documentation.

Rules

Updated only when the canonical definition changes.

---

## isActive

Purpose

Controls whether the entity is available for normal application use.

Ownership

Application.

Dependencies

Navigation, search, recommendations, filtering.

Rules

Inactive records remain available for migration and compatibility but are hidden from normal users.

---

# Field Governance

Every field introduced into the data model shall document:

1. Purpose
2. Ownership
3. Feature Dependencies

Fields shall never exist "just in case."

Every field must support one or more approved application features.

---

# Ownership Types

Field ownership shall be one of the following.

## Application

Maintained automatically by the Companion.

Examples

- id
- createdVersion
- lastModifiedVersion

---

## User

Entered or modified directly by the user.

Examples

- Notes
- Quantity
- Preferences

---

## Derived

Calculated by the Companion using existing data.

Examples

- Inventory completeness
- Recommendation score
- Backup age

Derived values should not normally be stored unless doing so provides a measurable performance benefit.

---

# Identifier Standard

Canonical identifiers shall:

- Use lowercase letters.
- Use hyphens between words.
- Avoid spaces.
- Avoid punctuation other than hyphens.
- Be descriptive.
- Never be reused.
- Never change after release.

Examples

```text
largemouth-bass
texas-rig
green-pumpkin
ewg-hook
improved-clinch-knot
```

---

# Reference Data

Reference data is maintained by the application.

Examples include:

- Fish
- Rigs
- Knots
- Tackle Types
- Product Definitions
- Lure Colors
- Learning Articles
- Regulation Resources

Users do not directly edit reference data.

---

# User Data

User data is maintained by the angler.

Examples include:

- Profiles
- Preferences
- Inventory
- Favorites
- Catch Log

User data references canonical entities by identifier.

---

# Data Relationships

Canonical entities shall reference one another using stable identifiers.

Canonical entities shall not contain duplicate copies of other canonical entities.

Example

```text
Fish
    └── recommendedRigIds

Rig
    └── targetFishIds
```

The complete relationship model is documented separately.

---

# Versioning

Every data model change shall be evaluated for:

- Schema impact
- Backup compatibility
- Migration requirements
- Documentation updates

Display-only changes do not require schema review.

---

# Validation Philosophy

Validation shall occur before data is stored.

Validation failures shall:

- Explain the problem.
- Preserve existing data.
- Never silently discard information.

---

# Performance Philosophy

The data model should remain:

- Lightweight
- Readable
- Predictable
- Easy to maintain

Fields shall not be added until they support an approved feature.

---

# Guiding Principle

> Plan twice. Build once.

The Companion's data model is expected to evolve through deliberate architectural decisions rather than incremental accumulation of fields.

---

# Related Documents

- README.md
- 02-FISH.md
- 03-RIGS.md
- 04-KNOTS.md
- 05-TACKLE.md
- 06-LURES.md
- 07-USER-DATA.md
- 08-BACKUP.md
- 09-RELATIONSHIPS.md
- ../PROJECT.md
- ../SPECIFICATION.md
- ../ARCHITECTURE.md
