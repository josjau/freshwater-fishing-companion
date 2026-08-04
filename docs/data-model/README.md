# Freshwater Fishing Companion

**Document:** DATA MODEL INDEX  
**Version:** 0.1.0  
**Status:** Draft  
**Decision Baseline:** D002

---

# Purpose

This directory contains the canonical data model for Freshwater Fishing Companion.

Rather than storing the entire data model in a single document, it is divided into focused sections. This improves readability, simplifies maintenance, avoids unnecessary duplication, and allows each section to evolve independently while remaining part of one cohesive architecture.

This directory is considered the authoritative source for all application data structures.

---

# Data Model Philosophy

The Companion is built around **knowledge**, not screens.

Every object exists exactly once.

Application pages, search results, recommendations, inventories, catch records, learning articles, and future features reference the same canonical objects rather than maintaining duplicate information.

This philosophy minimizes maintenance while improving consistency and long-term scalability.

---

# Design Principles

The data model follows these principles.

- One authoritative definition for every entity.
- Stable identifiers that never change.
- Reference data separated from user data.
- User records reference canonical entities.
- Local-first storage.
- Offline-first operation.
- Versioned backup and restore.
- Long-term maintainability over short-term convenience.
- Simplicity before complexity.

---

# Document Organization

## 01 - FOUNDATION

Defines the global rules governing every data structure.

Includes:

- Naming standards
- Identifier standards
- Versioning
- General architecture
- Shared conventions

---

## 02 - FISH

Defines:

- Fish species
- Hybrids
- Identification traits
- Habitats
- Species relationships
- Regional availability

---

## 03 - RIGS

Defines:

- Rig records
- Components
- Assembly
- Fishing techniques
- Required tackle
- Variations

---

## 04 - KNOTS

Defines:

- Knot records
- Instructions
- Line compatibility
- Difficulty
- Best uses

---

## 05 - TACKLE

Defines:

- Tackle types
- Product definitions
- Product codes
- Inventory relationships
- Ownership
- Purchase lookup

---

## 06 - LURES

Defines:

- Artificial lure definitions
- Colors
- Dimensions
- Actions
- Presentations
- Actual-size image support
- Product relationships

---

## 07 - USER DATA

Defines:

- Profiles
- Preferences
- Favorites
- Inventory
- Catch log
- Display calibration

---

## 08 - BACKUP

Defines:

- Backup format
- Restore workflow
- Validation
- Schema versioning
- Migration

---

## 09 - RELATIONSHIPS

Defines:

- Entity relationships
- Reference rules
- Validation rules
- Deferred design decisions

---

# Reading Order

For new contributors:

1. Foundation
2. Fish
3. Rigs
4. Knots
5. Tackle
6. Lures
7. User Data
8. Backup
9. Relationships

The documents build upon one another and should generally be read in this order.

---

# Maintenance Policy

Each document is independently versioned as necessary.

Changes to one document should not require rewriting unrelated documents.

Structural changes shall be recorded in DECISIONS.md and summarized in CHANGELOG.md.

---

# Related Documents

- PROJECT.md
- SPECIFICATION.md
- ARCHITECTURE.md
- STYLE_GUIDE.md
- ROADMAP.md
- DECISIONS.md
- CHANGELOG.md
