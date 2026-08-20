# Freshwater Fishing Companion

**Document:** 03B-CONDITIONS.md  
**Document Revision:** 0.2.0  
**Document Status:** Draft  
**Implementation Status:** Approved / Not Implemented  
**Decision Baseline:** D004, D056

---

# Purpose

This document defines the approved architectural boundary for the future canonical Condition domain in Freshwater Fishing Companion.

Conditions describe reusable environmental, seasonal, habitat, water, weather, time, and situational factors that may influence fishing decisions.

No canonical Condition production dataset is implemented on current `main`. This document therefore preserves domain intent without treating earlier candidate fields or taxonomies as settled production schema.

---

# Current Status

**Approved / Not Implemented.**

D004 approves Conditions as shared canonical Reference Knowledge. D056 requires every future Condition fact and relationship to have one semantic owner and prohibits inverse or convenience duplication.

Current production uses condition-like text metadata in some existing domains, including Rig `conditionTags[]` and Fish habitat/waterbody fields. Those fields remain owned by their current domains until a later approved migration explicitly replaces or maps them. The existence of the future Condition domain does not silently convert current text fields into Condition IDs.

---

# Design Philosophy

Conditions answer questions such as:

> What environmental or situational context is relevant right now?

They are reusable context, not recommendations by themselves.

Decision Knowledge may combine Conditions with Fish, Rigs, Techniques, inventory, and other context to produce recommendations. Recommendation-specific ranking, confidence, and weighting belong to Decision Knowledge unless a later decision assigns a narrowly defined intrinsic Condition property.

---

# Foundation Fields

When Condition production data is implemented, every canonical Condition will inherit the Foundation entity standard:

```text
id
name
summary
createdVersion
lastModifiedVersion
isActive
```

Additional fields require approval at the Condition architecture gate and must document purpose, ownership, dependencies, and validation.

---

# Candidate Condition Concepts — Not Yet Schema

Earlier planning identified useful groupings and relationship concepts. These remain design inputs rather than approved production fields.

Possible groupings include:

- Water
- Weather
- Season
- Time
- Habitat
- Structure
- Waterbody
- Fishing Pressure

Possible hierarchical or related-condition concepts may also be useful, but exact storage is unresolved.

Earlier candidate fields such as:

```text
category
parentConditionId
recommendationWeight
relatedConditionIds[]
```

are **not approved production schema fields**.

`recommendationWeight` is especially deferred because recommendation influence is Decision Knowledge unless a later design demonstrates a stable intrinsic Condition property that belongs in Reference Knowledge.

---

# Current Domain Boundaries

Condition implementation must preserve existing ownership until an explicit migration is approved.

Examples:

- Fish `habitatTags[]` describes stable species habitat associations owned by Fish.
- Fish `waterbodyTypes[]` describes typical species waterbody associations owned by Fish.
- Rig `conditionTags[]` currently describes where a Rig performs well and remains part of the validated Rig schema.
- Reel and Knot guidance may use situational context inside their own Decision Knowledge registries.

A future Condition registry may normalize or reference some of these concepts, but Section 7 does not authorize production schema changes.

---

# Relationship Ownership — Deferred

Future relationships involving Conditions must be resolved under D056 before production implementation, including:

- Condition ↔ Fish
- Condition ↔ Rig
- Condition ↔ Technique
- Condition ↔ Lure
- Condition ↔ recommendation guidance

Do not store the same semantic relationship on both sides merely to support navigation or search.

Contextual suitability may belong to Decision Knowledge rather than either canonical entity.

---

# Media Ownership

Condition records must not own inverse `imageIds[]` merely to locate illustrations or photographs.

If Condition media is implemented, canonical attachment belongs to Media through:

```text
ownerType: "condition"
ownerId: canonical Condition ID
```

Any media-specific role or ordering semantics belong to Media or an explicitly justified relationship entity.

---

# Implementation Gate

Before canonical Condition production data is created, the Condition architecture gate must settle at least:

1. the canonical Condition field set,
2. the approved taxonomy/grouping structure,
3. any hierarchy semantics,
4. relationship ownership with Fish, Rig, Technique, and Lure,
5. which suitability relationships are Reference Knowledge versus Decision Knowledge,
6. migration or mapping rules for existing Fish/Rig text metadata, if any,
7. Media attachment requirements beyond the existing owner model, if any,
8. referential-integrity validation.

No placeholder relationship arrays or recommendation weights should be pre-populated before that gate.

---

# Future Enhancements

Potential later capabilities include live weather integration, automatic seasonal context, water-temperature services, and more advanced recommendation logic. These are feature candidates rather than current schema requirements and require separate approval when pursued.

---

# Related Documents

- 01-FOUNDATION.md
- 02-FISH.md
- 03-RIGS.md
- 03A-TECHNIQUES.md
- 05-TACKLE.md
- 09-RELATIONSHIPS.md
- ../DECISIONS.md
