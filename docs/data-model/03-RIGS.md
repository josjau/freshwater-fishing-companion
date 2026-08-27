# Freshwater Fishing Companion

**Document:** 03-RIGS.md  
**Document Revision:** 0.3.2  
**Document Status:** Approved  
**Implementation Status:** Validated — 21 active canonical Rigs  
**Decision Baseline:** D024, D025, D026, D027, D028, D042-D049, D056, D057, D065

---

# Purpose

This document defines the current canonical Rig entity for Freshwater Fishing Companion.

A Rig represents a complete ready-to-fish terminal setup. Rig owns physical assembly, component requirements, real tied-connection context, and Rig-specific configuration. Reusable presentation behavior belongs to the future Technique domain when it generalizes across setups.

---

# Current Production Schema

Every current Rig contains the Foundation fields plus:

```text
difficulty
conditionTags[]
componentRequirements[]
knotApplications[]
assemblySteps[]
setupNotes[]
variationIds[]
tutorialVideo
```

Current production does **not** contain:

```text
targetFishIds[]
techniqueIds[]
imageIds[]
```

Those fields must not be described as current Rig schema.

---

# Field Definitions

## difficulty

Recommended experience level for assembling and fishing the Rig correctly.

Allowed values:

- Beginner
- Beginner+
- Intermediate
- Intermediate+
- Advanced
- Expert

Core is not a difficulty value. Core membership is owned separately by `CORE_RIG_IDS`.

## conditionTags[]

Current Rig-owned text metadata describing conditions where the Rig performs well. This remains part of the validated production schema until any future Condition-domain migration is explicitly approved and implemented.

## componentRequirements[]

Authoritative Rig-to-Tackle usage relationship. Each requirement references canonical Tackle through `tackleId` and carries only Rig-specific usage context such as quantity, required/optional status, order, configuration guidance, assembly role, and notes.

Canonical Tackle owns component identity and display name. Tackle does not store inverse `rigIds[]` solely for **Used In** navigation.

A separate requirement-level ID is not required by the current feature set.

### Alternate-terminal configurations — Deferred / Not Implemented

Current `componentRequirements[]` describes one coherent ready-to-fish setup. It does not model mutually exclusive terminal branches inside one Rig.

The canonical Slip Bobber Rig currently owns the hook-plus-live/natural-bait configuration. A jig is a legitimate alternate presentation, but it is not a simultaneous `bait` value and must not be added as an ad hoc optional requirement that makes assembly/readiness ambiguous.

Before one Rig can offer hook+bait **or** jig terminal choices, approve a reusable model for component substitution, assembly steps, readiness, knots, and setup/presentation consequences—or approve a separate Rig when the configurations should remain distinct. This is deferred under D065 and does not block the current 21-Rig library.

## knotApplications[]

Authoritative Rig-owned descriptions of real tied connections required by the setup.

Each application contains exactly:

```text
label
connectionType
recommendedKnotIds[]
notes
```

Rules:

- only real tied connections receive an entry,
- hardware-only joins are excluded,
- Knot IDs resolve to active canonical Knots,
- general tying instructions remain with Knot,
- reverse Knot **Where You'll Use It** navigation is derived from active Rig records,
- runtime code does not infer Knot relationships by parsing assembly prose.

The validated 21-Rig library contains 32 real tied connection points.

## assemblySteps[]

Authoritative ordered instructions for physically constructing the Rig.

## setupNotes[]

Rig-specific setup/configuration guidance that does not generalize cleanly to reusable Technique instruction.

## variationIds[]

References existing related canonical Rigs. Empty arrays are valid when no approved variation exists. Ordinary relationship IDs are not planning placeholders; populated IDs must resolve.

## tutorialVideo

Optional verified third-party tutorial metadata for an officially permitted external/embed workflow. It does not authorize downloading, rehosting, editing, or extracting third-party video content.

---

# Relationships Not Stored on Rig

## Fish applicability

Current production has no `targetFishIds[]` field. Future Fish-to-Rig recommendation/applicability knowledge requires an approved semantic owner under D056 and must not be added to Rig merely for convenience.

## Technique compatibility

Current production has no `techniqueIds[]`. Repository Audit Section 5 removed the universally empty placeholder from all 20 Rigs.

Rig owns physical assembly and Rig-specific configuration. Technique owns reusable presentation behavior. The future Rig ↔ Technique compatibility owner remains **Deferred / Not Implemented** until the Technique architecture gate.

## Media attachment

Current production has no Rig `imageIds[]`. Media owns attachment through:

```text
Media.ownerType
Media.ownerId
```

The former universally empty `imageIds[]` field was removed during Repository Audit Section 5 and remains available only through Git history.

---

# Rig Components and Tackle Ownership

`Rig.componentRequirements[]` is the canonical Rig-to-Tackle owner.

Derived inverse navigation:

```text
Tackle
    -> Used In
    -> active Rigs whose componentRequirements contain the Tackle ID
```

Canonical functional Tackle concepts must be specific enough for truthful readiness. Current examples include `wacky-hook` and `ned-jighead` rather than overly generic substitutes.

---

# Core Rig Membership and Order

Core membership and teaching order are owned once by the ordered `CORE_RIG_IDS` registry in `data/rigs.js`.

Individual Rig records do not duplicate `isCore`, `coreOrder`, or equivalent display flags.

The six Core Rigs are:

1. Fixed Bobber Rig
2. Basic Bottom Rig
3. Jighead + Soft Plastic
4. Inline Spinner Setup
5. Texas Rig
6. Slip Bobber Rig

---

# Rig Guide Learning Tiers — Implemented

The current 21-Rig library implements all six difficulty tiers:

- Beginner
- Beginner+
- Intermediate
- Intermediate+
- Advanced
- Expert

Current tier counts are 7 Beginner / 3 Beginner+ / 4 Intermediate / 4 Intermediate+ / 2 Advanced / 1 Expert.

The Rig Guide exposes All Rigs, Core Rigs, and each implemented difficulty tier. Earlier documentation describing Intermediate through Expert as future tier expansion is obsolete.

---

# Current Canonical Rig Library

The current production library contains 21 active Rigs:

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
21. Split-Shot Bait Rig

The original 20-Rig library remains validated and canonical. The completed Four-State adequacy audit added Split-Shot Bait Rig as an additive Beginner Rig without removing or reclassifying any existing Rig.

Carolina Rig and the later difficulty tiers are implemented production entities, not unresolved near-term expansion placeholders.

---

# Assembly vs Presentation

Rig owns physical component sequence, connections, orientation, setup measurements, optional/required configuration, assembly mistakes, and setup-specific guidance.

Future Technique owns reusable presentation behavior such as retrieve cadence, rod/reel movement, dragging, hopping, swimming, twitching, pausing, strike detection, and similar instruction when it generalizes across compatible setups.

This content boundary does not decide future Rig ↔ Technique relationship storage. That relationship remains deferred under D056.

---

# My Tackle and Rig Readiness

Rig never owns persistent user inventory.

Current application behavior uses transitional per-Rig local readiness selections keyed by canonical Tackle ID strings.

**Approved / Not Implemented:** My Tackle will become the sole persistent ownership source. Rig Readiness may read ownership and temporary availability but must not silently write persistent ownership.

Basic readiness answers whether required component types are available to build the Rig; optimization is a separate concern.

---

# Future / Deferred

The FISH-005 Four-State Rig adequacy audit is complete. It preserved the original 20 Rigs, added Split-Shot Bait Rig as canonical Rig #21, and identified no other material ordinary-Rig method gap for the approved Four-State Version 1 scope. Reopen regional Rig adequacy only when later scope or verified method evidence demonstrates a new material gap.

Potential future capabilities include additional regional Rigs, richer interactive assembly, approved instructional media, and contextual recommendation systems. Any new canonical fields or relationships require demonstrated feature need and D056 ownership review.

---

# Related Documents

- 01-FOUNDATION.md
- 02-FISH.md
- 03A-TECHNIQUES.md
- 03B-CONDITIONS.md
- 04-KNOTS.md
- 05-TACKLE.md
- 05A-INVENTORY.md
- 09-RELATIONSHIPS.md
- ../DECISIONS.md
- ../../archive/workstreams/repository-audit/REPOSITORY-AUDIT-SECTION-5-DECISION.md
- ../../archive/workstreams/repository-audit/REPOSITORY-AUDIT-SECTION-5-CLOSEOUT.md
- ../../archive/workstreams/knots/KNOT-RELATIONSHIP-APPROVAL.md
