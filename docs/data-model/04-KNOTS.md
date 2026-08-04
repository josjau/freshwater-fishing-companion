# Freshwater Fishing Companion

**Document:** 04-KNOTS.md  
**Version:** 0.1.0  
**Status:** Draft  
**Decision Baseline:** D013

---

# Purpose

This document defines the canonical Knot entity for Freshwater Fishing Companion.

A Knot represents a method of connecting fishing line to terminal tackle, lures, or other lines.

The Knot entity supports:

- Knot Guide
- Rig Guide
- Learning Center
- Recommendations

Each knot shall exist once within the Companion.

---

# Design Philosophy

A knot is independent of rigs and tackle.

Many rigs use the same knot, and one knot may be appropriate for many different applications.

The Companion shall reference canonical Knot records rather than duplicate knot instructions.

---

# Canonical Entity

Every Knot inherits the Foundation entity.

Required base fields:

```text
id
name
summary
createdVersion
lastModifiedVersion
isActive
```

Additional Knot fields extend the base entity.

---

# Knot Fields

## difficulty

Purpose

Recommended experience level.

Ownership

Application.

Allowed Values

- Beginner
- Intermediate
- Advanced

---

## purpose

Purpose

Describes the primary use of the knot.

Examples

- Hook Attachment
- Lure Attachment
- Line to Line
- Loop Knot
- Leader Connection

Ownership

Application.

---

## compatibleLineTypes

Purpose

Lists the fishing line types best suited for the knot.

Examples

- Monofilament
- Fluorocarbon
- Braided Line

Ownership

Application.

---

## strengthRating

Purpose

General indication of knot reliability when tied correctly.

Ownership

Application.

Allowed Values

- Excellent
- Very Good
- Good

---

## stepCount

Purpose

Approximate number of tying steps.

Ownership

Application.

---

## imageIds

Purpose

References instructional diagrams.

Ownership

Application.

---

## relatedRigIds

Purpose

References rigs commonly using the knot.

Ownership

Application.

---

## relatedTechniqueIds

Purpose

References techniques where the knot is commonly used.

Ownership

Application.

---

# Teaching Philosophy

Knot instructions should be written for beginners.

Each knot should explain:

- When to use it.
- Why it is recommended.
- Common mistakes.
- How to recognize a properly tied knot.
- When another knot may be a better choice.

---

# Recommendation Guidelines

The Companion may recommend knots based on:

- Line type
- Target species
- Rig
- Technique
- Angler experience

Recommendations should explain *why* a knot is suggested.

---

# Initial Knot Library

Version 1 should focus on a practical collection of commonly used knots.

Examples include:

- Improved Clinch Knot
- Palomar Knot
- Uni Knot
- Double Uni Knot
- Loop Knot
- Trilene Knot

Additional knots may be added in future releases.

---

# Design Notes

Knot records describe the knot itself.

They do not duplicate:

- Rig instructions
- Technique instructions
- Product information

Those entities reference Knot records when needed.

---

# Future Enhancements

Potential future additions include:

- Animated tying instructions
- Slow-motion demonstrations
- Practice mode
- Left-handed tying instructions

These enhancements are outside the scope of Version 1.

---

# Related Documents

- 01-FOUNDATION.md
- 03-RIGS.md
- 03A-TECHNIQUES.md
- 05-INVENTORY.md
- 09-RELATIONSHIPS.md
