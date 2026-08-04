# Freshwater Fishing Companion

**Document:** 03A-TECHNIQUES.md  
**Version:** 0.1.0  
**Status:** Draft  
**Decision Baseline:** D004

---

# Purpose

This document defines the canonical Technique entity for Freshwater Fishing Companion.

A Technique describes **how** a lure or rig is presented to fish.

Techniques are independent of rigs and may be shared by multiple rigs.

Separating techniques from rigs eliminates duplicated instructional content and supports a more intelligent recommendation engine.

---

# Design Philosophy

A Technique represents presentation rather than equipment.

The same presentation can often be performed with many different rigs.

Examples:

- Drag
- Hop
- Shake
- Swim
- Twitch
- Deadstick

Each Technique exists once and is referenced by any applicable rig.

---

# Canonical Entity

Every Technique inherits the Foundation entity.

Required base fields:

```text
id
name
summary
createdVersion
lastModifiedVersion
isActive
```

Additional Technique fields extend the base entity.

---

# Technique Fields

## difficulty

Purpose

Recommended experience level.

Ownership

Application.

Allowed values

- Beginner
- Intermediate
- Advanced

---

## movementType

Purpose

Describes the primary rod or lure movement.

Examples

- Drag
- Hop
- Shake
- Swim
- Twitch
- Pop
- Walk
- Lift
- Drop

Ownership

Application.

---

## cadence

Purpose

Describes the recommended rhythm of the presentation.

Examples

- Slow
- Moderate
- Fast
- Variable

Ownership

Application.

---

## rodAction

Purpose

Describes the primary rod movement used.

Examples

- Sweep
- Lift
- Twitch
- Snap
- Steady Retrieve

Ownership

Application.

---

## reelAction

Purpose

Describes reel usage.

Examples

- Constant
- Pause
- Stop-and-Go
- Minimal

Ownership

Application.

---

## targetFishIds

Purpose

References fish commonly associated with the technique.

Ownership

Application.

---

## recommendedConditionIds

Purpose

References canonical Conditions where the technique performs well.

Ownership

Application.

---

## compatibleRigIds

Purpose

References rigs commonly using this presentation.

Ownership

Application.

---

## beginnerTips

Purpose

Simple guidance to improve success.

Ownership

Application.

---

## commonMistakes

Purpose

Common errors made while using the technique.

Ownership

Application.

---

## imageIds

Purpose

Illustrations demonstrating the presentation.

Ownership

Application.

---

# Teaching Philosophy

Techniques should be written for anglers with little or no experience.

Instructions should emphasize:

- What to do
- What to look for
- What a strike may feel like
- Common beginner mistakes
- When to change presentations

The goal is to teach understanding rather than memorization.

---

# Recommendation Integration

Techniques may be recommended based upon:

- Conditions
- Target fish
- Experience level
- Season
- Water clarity
- Cover
- Water depth

Techniques should never recommend specific commercial products.

---

# Future Enhancements

Potential future additions include:

- Animated demonstrations
- Video instruction
- Practice mode
- Haptic timing assistance
- Adaptive recommendations based on catch history

These features require separate architectural approval.

---

# Related Documents

- 01-FOUNDATION.md
- 02-FISH.md
- 03-RIGS.md
- 03B-CONDITIONS.md
- 05-TACKLE.md
- 09-RELATIONSHIPS.md
