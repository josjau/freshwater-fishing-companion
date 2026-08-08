# Freshwater Fishing Companion

**Document:** 03-RIGS.md  
**Document Revision:** 0.2.1
**Document Status:** Draft
**Decision Baseline:** D025, D026, D027, D028, D042

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
- Rig readiness

Each Rig shall exist once within the Companion.

---

# Design Philosophy

A Rig defines the physical setup, assembly, and Rig-specific configuration.

A Technique defines reusable presentation behavior used to fish a compatible setup.

This separation minimizes duplicated instructional content and improves long-term maintainability.

Rig is also the canonical owner of its component requirements. Tackle does not independently restate which Rigs use it solely to support inverse navigation.

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

Recommended experience level for assembling and fishing the Rig correctly.

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

Fishing conditions where the Rig performs well.

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

Authoritative references to canonical Tackle required or optionally used to build the Rig.

Each requirement references Tackle explicitly through `tackleId`.

Example:

```js
{
    tackleId: "bullet-weight",
    quantity: 1,
    required: true,
    notes: "Use the lightest weight that reaches the target depth."
}
```

The requirement remains a component requirement; `tackleId` identifies the canonical Tackle concept that satisfies it.

Canonical Tackle owns component identity and display name. The Rig owns only context that is specific to this setup, such as:

- Required or optional status
- Quantity
- Component order
- Recommended size or configuration
- Assembly role
- Setup-specific notes

A Rig requirement shall not duplicate the full Tackle definition or canonical Tackle `name`.

A separate requirement-level `id` is not added unless a demonstrated editing, migration, annotation, or persistence need requires independent requirement identity.

Ownership

Application.

---

## assemblySteps

Purpose

Authoritative ordered instructions for physically constructing the Rig.

Ownership

Application.

Assembly instructions belong to Rig rather than Technique.

---

## setupNotes

Purpose

Rig-specific configuration or usage guidance that does not generalize cleanly to a reusable Technique.

Ownership

Application.

---

## techniqueIds

Purpose

References one or more canonical fishing Techniques that describe reusable presentation behavior compatible with the Rig.

Ownership

Application.

---

## variationIds

Purpose

References existing related canonical Rigs.

Example:

Texas Rig

↓

Weightless Texas Rig

Ordinary relationship fields are not planning placeholders. Once the relevant production dataset is complete for a planned expansion, referenced Rig IDs must resolve to canonical Rig records.

Ownership

Application.

---

## imageIds

Purpose

References approved Rig media when technically verified and legally reusable media exists.

Current Rig pages may leave this field empty and use authoritative text instructions plus verified external references.

Ownership

Application.

---

# Rig Components and Tackle Ownership

Every required component references canonical Tackle through `tackleId`.

Example:

Texas Rig

Requires

- Offset Hook
- Bullet Weight
- Soft Plastic

`Rig.componentRequirements` is the authoritative Rig-to-Tackle relationship.

The inverse question — for example, which Rigs use an Offset Hook — is derived by scanning Rig requirements. Tackle records should not separately maintain manual `rigIds` solely to answer `Used In`.

The displayed component name is resolved from canonical Tackle. Duplicated component names are not stored inside Rig requirements. The inverse `Used In` relationship is derived from active Rig requirements by matching `tackleId`.

---

# Assembly vs Presentation

Rig owns:

- Physical component sequence
- Connections
- Orientation
- Setup measurements
- Optional/required configuration
- Assembly mistakes
- Rig-specific setup guidance

Technique owns reusable presentation behavior such as:

- Drag
- Hop
- Shake
- Swim
- Burn
- Twitch
- Pause
- Deadstick
- Lift and Drop
- Retrieve cadence
- Rod and reel movement
- Strike guidance

Shared presentation instructions should not be copied into multiple Rigs.

Practical ownership test:

> If the instruction would still make sense with a different compatible Rig, it probably belongs to Technique. If it depends on the physical configuration of this Rig, it belongs to Rig.

---

# Approved Initial Rig Library — Not Yet Fully Implemented

The approved initial canonical target is 20 Rigs selected for practical freshwater fishing in northeast Oklahoma and southwest Kansas:

1. Fixed Bobber Rig
2. Basic Bottom Rig
3. Jighead + Soft Plastic
4. Slip Bobber Rig
5. Inline Spinner Setup
6. Texas Rig
7. Weightless Soft-Plastic Rig
8. Wacky Rig
9. Ned Rig
10. Drop Shot Rig
11. Carolina Rig
12. Live-Bait Slip-Sinker Rig
13. Three-Way Rig
14. Neko Rig
15. Shaky Head Rig
16. Free Rig
17. Jika Rig
18. Punch / Pegged Texas Rig
19. Double-Jig Crappie Rig
20. Bottom-Bouncer / Spinner Rig

The list is an approved implementation target, not a claim that all 20 records currently exist in `data/rigs.js`.

Carolina Rig is specifically approved for this near-term expansion. The existing `carolina-rig` relationship should be resolved by adding the canonical Carolina Rig record during the expansion.

---

# Core Rigs — Master These First

The approved confidence-building subset contains six Rigs:

1. Fixed Bobber Rig
2. Basic Bottom Rig — especially useful for catfish
3. Jighead + Soft Plastic
4. Inline Spinner Setup
5. Texas Rig
6. Slip Bobber Rig

The Core 6 are the first Rig-expansion milestone and must be complete, accurate, beginner-ready, and validated before expansion proceeds to the remaining fourteen Rigs.

Before adding the two currently absent Core entries, resolve whether Inline Spinner Setup and Jighead + Soft Plastic are correctly modeled as canonical Rigs or should be represented as lure/setup combinations.

Core learning-path presentation follows D042 and `STYLE_GUIDE.md`: important curated starting paths receive additional restrained Forest Journal hierarchy.

Purpose:

- Give a newer angler a small set of broadly successful rigs.
- Cover multiple common species and water-column situations.
- Build confidence before encouraging a larger fishing arsenal.
- Teach progressively useful skills such as bite detection, depth control, cast-and-retrieve, bottom contact, and fishing cover.

Rigs beyond the approved initial 20, specialized sonar-driven rigs, and niche tournament presentations remain deferred.

---

# My Tackle and Rig Readiness

A Rig itself never stores persistent ownership information.

**Current:** the application uses transitional per-Rig local readiness selections keyed by canonical Tackle ID strings. The change from requirement `id` to `tackleId` does not change those stored key values and does not require a readiness-state migration.

**Approved / Not Implemented:** My Tackle becomes the only persistent ownership source of truth.

Rig Readiness will:

- Read My Tackle.
- Automatically satisfy required canonical Tackle types the user owns.
- Allow a missing item to be marked temporarily available for the current build/session.
- Never write temporary availability back into My Tackle.
- Determine whether all required component types are available so the user knows whether the Rig can be built.

Basic readiness answers buildability, not whether the user owns the ideal brand/model combination.

Persistent ownership may only be changed through explicit My Tackle ownership-management workflows such as Add Tackle, Edit Tackle, or Remove Tackle.

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

# Future Enhancements

Possible future additions:

- Rigging animations
- Interactive assembly
- Video demonstrations
- Additional regional rigs beyond the initial 20
- Advanced confidence scoring

These require separate architectural approval.

---

# Related Documents

- 01-FOUNDATION.md
- 02-FISH.md
- 03A-TECHNIQUES.md
- 04-KNOTS.md
- 05-TACKLE.md
- 05A-INVENTORY.md
- 06-LURES.md
- 09-RELATIONSHIPS.md