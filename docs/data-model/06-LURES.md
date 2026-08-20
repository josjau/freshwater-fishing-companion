# Freshwater Fishing Companion

**Document:** 06-LURES.md  
**Document Revision:** 0.2.0  
**Document Status:** Draft  
**Implementation Status:** Approved Domain / Schema Not Implemented  
**Decision Baseline:** D009, D015, D056

---

# Purpose

This document defines the architectural boundary for a future canonical Lure domain in Freshwater Fishing Companion.

A Lure represents a reusable artificial-bait concept rather than an individual commercial product or a user-owned item.

No separate canonical Lure production dataset is implemented on current `main`. Some lure-like functional concepts currently exist in canonical Tackle because Tackle supports Rig requirements, recognition, search, and readiness. Section 7 does not split or migrate those records.

---

# Current Status

**Approved domain concept; production schema not implemented.**

The three-layer architecture supports a future canonical Lure domain as Reference Knowledge, but its exact field set and its boundary with canonical Tackle require a dedicated implementation gate before production data is created.

Commercial Product Definitions remain separately deferred. User-owned lure items belong to User Knowledge/My Tackle when that schema is implemented.

---

# Design Philosophy

A future canonical Lure definition should describe a reusable lure family or fishing concept, not duplicate:

- a manufacturer-specific commercial product,
- a user-owned item,
- a Rig component requirement,
- or recommendation-specific rationale.

The Lure/Tackle boundary must be explicit before implementation because current canonical Tackle already contains functional lure and bait concepts used by supported workflows.

---

# Foundation Fields

If a separate canonical Lure dataset is implemented, each Lure will inherit the Foundation entity standard:

```text
id
name
summary
createdVersion
lastModifiedVersion
isActive
```

Additional fields require approval at the Lure architecture gate and must document purpose, ownership, dependencies, and validation.

---

# Candidate Lure Concepts — Not Yet Schema

Earlier planning identified potentially useful concepts such as:

- lure type or family,
- typical lengths,
- typical weights,
- common colors,
- primary actions,
- beginner guidance,
- and common mistakes.

These are design inputs, **not approved production fields**. Their final representation depends on the demonstrated Lure features and on the boundary with canonical Tackle and future Product Definitions.

---

# Relationship Ownership — Deferred

Earlier candidate relationship fields included concepts equivalent to:

```text
targetFishIds[]
compatibleRigIds[]
compatibleTechniqueIds[]
```

These are **not approved schema fields**.

Before implementation, each relationship must be assigned one semantic owner under D056. Contextual answers such as which lure should be used for a Fish, Rig, Technique, or Condition may belong to Decision Knowledge rather than being stored as intrinsic bidirectional Reference Knowledge.

Reverse navigation must normally be derived from the canonical owner.

---

# Media Ownership

Future Lure records must not own inverse `imageIds[]` solely to locate Media.

Canonical attachment belongs to Media through:

```text
ownerType: "lure"
ownerId: canonical Lure ID
```

Any media role or ordering semantics belong to Media or an explicitly justified relationship entity when a demonstrated feature requires them.

---

# Product Boundary

A canonical Lure concept may eventually relate to multiple commercial products, but Product Definition modeling is not yet implemented.

For example, a reusable stick-worm concept and manufacturer-specific products are different semantic entities. The project must not create product records or product relationships until a product-specific feature establishes the required schema and ownership.

---

# User Knowledge Boundary

A user's actual lure ownership belongs to My Tackle/User Knowledge, not to the canonical Lure definition.

Persistent ownership must be created or changed only through explicit ownership-management workflows when My Tackle becomes authoritative.

---

# Recommendation Boundary

Future lure recommendations may consider Fish, Conditions, Technique, season, user inventory, and other context.

Recommendation ranking, rationale, confidence, alternatives, and situational suitability are Decision Knowledge. They must not be copied into canonical Lure records merely to simplify rendering.

---

# Implementation Gate

Before a separate canonical Lure production dataset is created, the Lure architecture gate must settle at least:

1. whether a separate Lure entity is required by demonstrated features,
2. the boundary between Lure and current canonical Tackle,
3. the canonical Lure field set,
4. Fish/Rig/Technique/Condition relationship ownership,
5. Product Definition relationship ownership if commercial products are in scope,
6. My Tackle mapping behavior,
7. Media attachment requirements beyond the existing owner model, if any,
8. referential-integrity validation and migration requirements.

No placeholder relationship arrays or speculative product fields should be added before that gate.

---

# Future Enhancements

Potential later capabilities include manufacturer comparisons, expanded visual galleries, user ratings, and catch statistics by lure concept. These are feature candidates rather than current schema requirements.

---

# Related Documents

- 01-FOUNDATION.md
- 02-FISH.md
- 03-RIGS.md
- 03A-TECHNIQUES.md
- 05-TACKLE.md
- 05A-INVENTORY.md
- 07-USER-DATA.md
- 09-RELATIONSHIPS.md
- ../DECISIONS.md
