# Freshwater Fishing Companion

**Document:** 03-RIGS.md  
**Version:** 0.1.0  
**Status:** Draft  
**Decision Baseline:** D002

---

# Purpose

This document defines the canonical Rig entity for Freshwater Fishing Companion.

A Rig represents a complete fishing setup used to present bait or lures to fish.

The Rig entity supports:

- Rig Guide
- Fish recommendations
- Catch Log
- Learning Articles
- What Should I Throw?
- Inventory comparison

Each rig shall exist once within the Companion.

---

# Design Philosophy

A rig defines **what** the setup is.

A Technique defines **how** it is fished.

This separation minimizes duplicated instructional content and improves long-term maintainability.

---

# Canonical Entity

Every Rig inherits the Foundation entity.

Required base fields:

- id
- name
- summary
- createdVersion
- lastModifiedVersion
- isActive

---

# Rig Fields

## difficulty

Purpose

Recommended experience level.

Allowed values:

- Beginner
- Intermediate
- Advanced

Ownership

Application.

---

## targetFishIds

Purpose

Fish commonly targeted.

Ownership

Application.

---

## conditionTags

Purpose

Fishing conditions where the rig performs well.

Examples:

- Heavy Cover
- Sparse Cover
- Open Water
- Deep Water
- Shallow Water
- Clear Water
- Stained Water
- Muddy Water

Ownership

Application.

---

## componentRequirements

Purpose

References required tackle.

Examples

- Hook
- Weight
- Soft Plastic
- Swivel
- Leader
- Bead

Ownership

Application.

---

## techniqueIds

Purpose

References one or more canonical fishing techniques.

Ownership

Application.

---

## variationIds

Purpose

Related rigs.

Example:

Texas Rig

↓

Weightless Texas Rig

Ownership

Application.

---

## imageIds

Purpose

Rig diagrams.

Ownership

Application.

---

# Rig Components

Every required component references canonical tackle definitions.

Example

Texas Rig

Requires

- EWG Hook
- Bullet Weight
- Soft Plastic

The Companion shall compare these requirements against the user's inventory.

---

# Inventory Integration

Each rig may display:

Owned

Need to Buy

Ordered

Unavailable

based on the user's inventory.

The rig itself never stores ownership information.

---

# Recommendations

Rig recommendations may consider:

- Target fish
- Water clarity
- Cover
- Season
- Experience level
- Inventory availability

---

# Canonical Techniques

Fishing instructions belong to Technique records rather than Rig records.

Examples include:

- Drag
- Hop
- Shake
- Swim
- Burn
- Twitch
- Pause
- Deadstick
- Lift and Drop

Multiple rigs may reference the same technique.

---

# Future Enhancements

Possible future additions:

- Rigging animations
- Interactive assembly
- Video demonstrations
- Regional recommendations
- Confidence scoring

These require separate architectural approval.

---

# Related Documents

- 01-FOUNDATION.md
- 02-FISH.md
- 04-KNOTS.md
- 05-TACKLE.md
- 06-LURES.md
- 09-RELATIONSHIPS.md
