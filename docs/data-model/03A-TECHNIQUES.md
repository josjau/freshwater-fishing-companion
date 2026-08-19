# Freshwater Fishing Companion

**Document:** 03A-TECHNIQUES.md  
**Version:** 0.1.1  
**Status:** Draft  
**Decision Baseline:** D004, D056

---

# Purpose

This document defines the future canonical Technique entity for Freshwater Fishing Companion.

A Technique describes **how** a lure or rig is presented to fish.

Techniques are independent reusable concepts and may apply to multiple Rigs.

Separating techniques from rigs eliminates duplicated instructional content and supports a more intelligent recommendation engine.

No canonical Technique production dataset is implemented yet.

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

Each Technique should exist once when the Technique domain is implemented.

D056 requires every future Technique relationship to have one semantic owner. This Draft must not be interpreted as approval to store the same Rig↔Technique relationship in both Rig and Technique records.

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

Additional Technique fields extend the base entity only after the Technique architecture is deliberately implemented.

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

Potential future relationship to Fish commonly associated with the Technique.

Ownership

**Unresolved in this Draft.** Apply D056 before implementation; do not populate a relationship here if another canonical/Decision Knowledge owner is approved.

---

## recommendedConditionIds

Purpose

Potential future relationship to canonical Conditions where the Technique performs well.

Ownership

**Unresolved in this Draft.** Apply D056 before implementation.

---

## Rig compatibility — ownership deferred

A Technique may be compatible with one or more canonical Rigs, but the storage owner for that relationship is **not yet approved**.

The earlier Draft field:

```text
compatibleRigIds[]
```

is therefore a design candidate, not an approved schema field.

Repository Audit Section 5 also removes universally empty `techniqueIds[]` from current production Rig records. The project must not later populate both directions as duplicate canonical storage.

When Technique implementation begins, decide whether compatibility is best owned by:

- Technique,
- Rig,
- or a Decision Knowledge relationship that carries contextual recommendation/suitability semantics.

The chosen design must have one semantic owner under D056, and every inverse view must be derived unless a separately justified relationship exists.

Current status: **Deferred / Not Implemented**.

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

## Media ownership

Technique media must follow the shared D056 Media ownership model when this domain is implemented.

Technique records should not own inverse `imageIds[]` solely to locate Media. Canonical attachment belongs to Media through:

```text
ownerType: "technique"
ownerId: canonical Technique ID
```

Any media role/order semantics belong to Media or an explicitly justified relationship entity when a demonstrated feature requires them.

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

Techniques may eventually participate in recommendations based upon:

- Conditions
- Target fish
- Experience level
- Season
- Water clarity
- Cover
- Water depth

Recommendations own recommendation-specific ranking/rationale/context rather than forcing those semantics into the canonical Technique entity merely for convenience.

Techniques should never recommend specific commercial products directly unless a later approved architecture explicitly assigns that responsibility.

---

# Implementation Gate

Before creating canonical Technique production data, the Technique architecture gate must settle at least:

1. canonical Technique field set,
2. Rig↔Technique relationship ownership,
3. Fish↔Technique relationship ownership,
4. Condition↔Technique relationship ownership,
5. which relationships are Reference Knowledge versus Decision Knowledge,
6. Media attachment and any role/order requirements,
7. referential-integrity validation,
8. search/index fields without duplicating relationship knowledge.

No empty future relationship arrays should be pre-populated in production records merely as placeholders.

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
- ../DECISIONS.md
- ../workstreams/REPOSITORY-AUDIT-SECTION-5-DECISION.md
