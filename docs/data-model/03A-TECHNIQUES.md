# Freshwater Fishing Companion

**Document:** 03A-TECHNIQUES.md  
**Document Revision:** 0.3.0  
**Document Status:** Approved  
**Implementation Status:** Approved / Not Implemented  
**Decision Baseline:** D003, D024, D056, D069

---

# Purpose

This document defines the approved architectural boundary for the future canonical Technique domain in Freshwater Fishing Companion.

A Technique describes **how** a lure, Rig, or other compatible setup is presented to fish. Technique is Reference Knowledge and owns reusable presentation behavior rather than physical assembly.

No canonical Technique production dataset is implemented on current `main`. D069 now approves the V1 semantic contract and bounded optional instructional concepts below; exact vocabulary and optional field selection remain production-pilot refinements rather than implemented schema.

---

# Current Status

**Approved / Not Implemented.**

The Technique domain is approved by D003. D024 assigns reusable presentation behavior to Technique and physical assembly/configuration to Rig. D056 requires every future Technique fact and relationship to have one semantic owner.

Current production Rigs do not store `techniqueIds[]`, and Technique will not gain inverse compatibility arrays merely for navigation. D069 assigns intrinsic Rig↔Technique and Lure/Bait↔Technique compatibility to the external typed Compatibility Relationship domain; Fish/Condition-specific suitability remains Recommendation Decision Knowledge.

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

# Approved V1 Instructional Contract — Not Yet Implemented Schema

Technique records inherit the Foundation fields and may add only demonstrated reusable instructional attributes such as:

- movement type,
- cadence,
- rod action,
- reel action,
- ordered presentation instructions,
- strike cues,
- common mistakes,
- beginner tips.

Not every Technique requires every optional field. Exact field names and canonical Technique vocabulary may be refined during the production pilot without reopening the semantic boundary. No category hierarchy is required for V1 unless production/search evidence demonstrates a concrete need.

Context-specific adjustments such as “slow the cadence in cold water” belong to Recommendation Decision Knowledge; the reusable Technique owns how the behavior is generally performed.

# Relationship Ownership — Approved

Intrinsic compatibility is stored once outside Technique under the typed Compatibility Relationship architecture in `09-RELATIONSHIPS.md`:

- Rig ↔ Technique,
- Lure/Bait ↔ Technique.

Technique does not store `compatibleRigIds[]`, `compatibleLureIds[]`, `targetFishIds[]`, or `recommendedConditionIds[]` as inverse/contextual convenience arrays. Reverse navigation is derived.

Fish/Condition-specific Technique selection, ranking, rationale, and contextual cadence/presentation adjustments belong to Recommendation Decision Knowledge.

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

Before Technique production data is activated, the Technique production foundation must settle and validate:

1. the exact canonical Technique vocabulary;
2. which optional instructional fields are demonstrated by the production set;
3. Foundation/lifecycle validation;
4. Rig↔Technique and Lure/Bait↔Technique compatibility records needed for the authored scope;
5. referential integrity and staged-completeness behavior under `09-RELATIONSHIPS.md`;
6. Media attachment requirements beyond the existing owner model, if any;
7. search/index fields without duplicating canonical relationship knowledge.

No empty future relationship arrays or contextual recommendation fields should be pre-populated as placeholders.

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
- ../../archive/workstreams/repository-audit/REPOSITORY-AUDIT-SECTION-5-DECISION.md
