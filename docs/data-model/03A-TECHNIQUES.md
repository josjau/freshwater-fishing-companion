# Freshwater Fishing Companion

**Document:** 03A-TECHNIQUES.md  
**Document Revision:** 0.2.0  
**Document Status:** Draft  
**Implementation Status:** Approved / Not Implemented  
**Decision Baseline:** D003, D024, D056

---

# Purpose

This document defines the approved architectural boundary for the future canonical Technique domain in Freshwater Fishing Companion.

A Technique describes **how** a lure, Rig, or other compatible setup is presented to fish. Technique is Reference Knowledge and owns reusable presentation behavior rather than physical assembly.

No canonical Technique production dataset is implemented on current `main`. Accordingly, this document does **not** approve a production Technique field schema beyond the Foundation entity standard.

---

# Current Status

**Approved / Not Implemented.**

The Technique domain is approved by D003. D024 assigns reusable presentation behavior to Technique and physical assembly/configuration to Rig. D056 requires every future Technique fact and relationship to have one semantic owner.

Current production Rigs do not store `techniqueIds[]`, and no `Technique.compatibleRigIds[]` relationship is approved. Repository Audit Section 5 removed the universally empty Rig-side placeholder rather than promoting an unresolved relationship into production.

---

# Design Philosophy

Technique represents presentation rather than equipment.

Reusable examples include concepts such as:

- Drag
- Hop
- Shake
- Swim
- Twitch
- Deadstick

A presentation instruction that remains meaningful across different compatible setups generally belongs to Technique. An instruction that depends on the physical construction or configuration of one Rig belongs to Rig.

The same semantic relationship must not be stored in both directions merely for navigation, search, or rendering convenience.

---

# Foundation Fields

When Technique production data is implemented, every canonical Technique will inherit the Foundation entity standard:

```text
id
name
summary
createdVersion
lastModifiedVersion
isActive
```

Additional fields require approval at the Technique architecture gate and must document purpose, ownership, dependencies, and validation.

---

# Candidate Presentation Concepts — Not Yet Schema

Earlier planning identified several useful presentation concepts. They remain design inputs, **not approved production fields**:

- learning difficulty
- movement type
- cadence
- rod action
- reel action
- beginner tips
- common mistakes

The architecture gate may retain, rename, combine, normalize, or reject these concepts based on demonstrated feature requirements. Production records must not be created with placeholder fields merely because a concept appears in this Draft.

---

# Relationship Ownership — Deferred

The following relationships are intentionally unresolved until Technique implementation:

- Rig ↔ Technique compatibility
- Fish ↔ Technique applicability
- Condition ↔ Technique applicability

Earlier candidate fields such as:

```text
compatibleRigIds[]
targetFishIds[]
recommendedConditionIds[]
```

are **not approved schema fields**.

When the Technique architecture gate opens, each relationship must be classified under D056. A simple intrinsic compatibility fact may belong to one Reference Knowledge owner. A contextual answer such as which Technique should be used with a Rig for particular Fish or Conditions may instead belong to Decision Knowledge.

Only one authoritative semantic owner may store a given relationship. Reverse navigation must normally be derived.

---

# Media Ownership

Technique media must follow the shared D056 Media ownership model when the domain is implemented.

Technique records must not own inverse `imageIds[]` solely to locate Media. Canonical attachment belongs to Media through:

```text
ownerType: "technique"
ownerId: canonical Technique ID
```

Media-specific role or ordering fields are added only when a demonstrated multi-media requirement justifies them.

---

# Teaching Philosophy

Technique instruction should help an angler understand:

- what to do,
- what to observe,
- what a strike may feel like,
- common mistakes,
- and when to change presentation.

The goal is reusable understanding rather than duplicated Rig-specific prose.

---

# Recommendation Integration

Technique may eventually participate in recommendations involving Fish, Conditions, season, water clarity, cover, depth, experience, and available tackle.

Recommendation-specific ranking, rationale, confidence, and situational context belong to Decision Knowledge rather than being forced into the canonical Technique entity for convenience.

Commercial-product recommendations remain outside Technique unless a later approved architecture explicitly assigns a Technique-domain responsibility.

---

# Implementation Gate

Before canonical Technique production data is created, the Technique architecture gate must settle at least:

1. the canonical Technique field set,
2. Rig ↔ Technique relationship ownership,
3. Fish ↔ Technique relationship ownership,
4. Condition ↔ Technique relationship ownership,
5. which relationships are Reference Knowledge versus Decision Knowledge,
6. Media attachment requirements beyond the existing owner model, if any,
7. referential-integrity validation,
8. search/index fields without duplicating canonical relationship knowledge.

No empty future relationship arrays or speculative fields should be pre-populated as placeholders.

---

# Future Enhancements

Potential later capabilities include animated demonstrations, video instruction, practice assistance, and adaptive recommendations. These are feature candidates rather than current schema requirements and require separate approval when pursued.

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
