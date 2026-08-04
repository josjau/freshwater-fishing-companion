# Freshwater Fishing Companion

**Document:** 06-LURES.md  
**Version:** 0.1.0  
**Status:** Draft  
**Decision Baseline:** D013

---

# Purpose

This document defines the canonical Lure entity for Freshwater Fishing Companion.

A Lure represents an artificial bait used to attract fish.

The Lure entity supports:

- Fish Recommendations
- Rig Recommendations
- Inventory
- Learning Center
- Product Lookup
- Catch Log

Each lure definition shall exist once within the Companion.

---

# Design Philosophy

A lure describes the characteristics of an artificial bait, not an individual product owned by the user.

The Companion separates:

- Canonical Lure definitions
- Commercial Product definitions
- User Inventory

This avoids duplicated information while allowing many commercial products to reference the same lure concept.

---

# Canonical Entity

Every Lure inherits the Foundation entity.

Required base fields:

```text
id
name
summary
createdVersion
lastModifiedVersion
isActive
```

Additional Lure fields extend the base entity.

---

# Lure Fields

## lureTypeId

Purpose

References the canonical lure taxonomy.

Ownership

Application.

Examples

- Soft Plastic
- Crankbait
- Jerkbait
- Spinnerbait
- Buzzbait
- Jig
- Spoon
- Inline Spinner
- Topwater
- Swimbait

---

## typicalLengths

Purpose

Common lengths available for this lure.

Ownership

Application.

Examples

- 2"
- 3"
- 5"
- 7"

---

## typicalWeights

Purpose

Common weights available for this lure.

Ownership

Application.

Examples

- 1/16 oz
- 1/8 oz
- 1/4 oz
- 3/8 oz

---

## commonColors

Purpose

References common color patterns.

Ownership

Application.

Examples

- Green Pumpkin
- Black Blue
- White
- Chartreuse
- Silver
- Gold

---

## primaryActions

Purpose

Describes the lure's intended action.

Ownership

Application.

Examples

- Wobble
- Dart
- Glide
- Vibrate
- Pop
- Walk
- Swim

---

## targetFishIds

Purpose

References fish commonly targeted.

Ownership

Application.

---

## compatibleRigIds

Purpose

References compatible rigs.

Ownership

Application.

---

## compatibleTechniqueIds

Purpose

References recommended fishing techniques.

Ownership

Application.

---

## imageIds

Purpose

References approved illustrations or photographs.

Ownership

Application.

---

# Product Relationships

A single lure definition may be represented by many commercial products.

Example

Canonical Lure

- Stick Worm

Commercial Products

- Yamamoto Senko
- Yum Dinger
- Strike King Ocho

The Companion stores the lure once while allowing multiple product definitions.

---

# Learning Philosophy

Each lure should help the angler understand:

- What it imitates
- When it performs well
- Typical retrieves
- Common mistakes
- Beginner tips

The goal is to build confidence through understanding rather than memorization.

---

# Recommendations

The Companion may recommend lures based on:

- Target fish
- Conditions
- Technique
- Season
- User inventory

Recommendations should include a brief explanation whenever practical.

---

# Design Notes

Lure definitions describe lure families.

Commercial product information belongs in Product Definitions.

User-owned lures belong in Inventory.

The same lure definition may be used by many manufacturers.

---

# Future Enhancements

Potential future additions include:

- Actual-size image calibration
- Manufacturer comparisons
- Expanded color galleries
- User ratings
- Catch statistics by lure

These enhancements are outside the scope of Version 1.

---

# Related Documents

- 01-FOUNDATION.md
- 02-FISH.md
- 03-RIGS.md
- 03A-TECHNIQUES.md
- 05-INVENTORY.md
- 07-USER-DATA.md
- 09-RELATIONSHIPS.md
