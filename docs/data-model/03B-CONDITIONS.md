# Freshwater Fishing Companion

**Document:** 03B-CONDITIONS.md  
**Document Revision:** 0.3.0  
**Document Status:** Approved  
**Implementation Status:** Approved / Not Implemented  
**Decision Baseline:** D004, D056, D069

---

# Purpose

This document defines the approved architectural boundary for the future canonical Condition domain in Freshwater Fishing Companion.

Conditions describe reusable environmental, seasonal, habitat, water, weather, time, and situational factors that may influence fishing decisions.

No canonical Condition production dataset is implemented on current `main`. D069 now approves the V1 grouped vocabulary and minimal schema contract below; exact labels may be refined during the production pilot while preserving the approved groups and ownership boundaries.

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

`category` is approved by D069 as the V1 grouping field. Any additional field still requires demonstrated purpose, ownership, dependencies, and validation.

---

# Approved V1 Vocabulary and Schema Contract

Conditions V1 uses a flat canonical vocabulary grouped by:

- **Waterbody:** Pond, Lake, Reservoir, River, Creek / Stream.
- **Access / Position:** Bank, Dock, Boat, Kayak.
- **Depth / Zone:** Shallow, Mid-depth, Deep.
- **Cover / Structure:** Open Water, Vegetation, Wood / Brush, Rock, Dock / Man-made Cover, Drop-off / Channel / Deep Structure.
- **Water Clarity:** Clear, Stained, Muddy.
- **Current:** None / Negligible, Light, Moderate, Strong.
- **Season:** Spring, Summer, Fall, Winter.
- **Light / Sky:** Bright / Sunny, Overcast, Low Light, Night.

Exact user-facing labels may be refined during the pilot without reopening the architecture if the groups and ownership boundaries remain unchanged. No parent hierarchy is required for V1 unless implementation evidence demonstrates a concrete need.

Every canonical Condition inherits Foundation fields plus `category`:

```text
id
name
category
summary
createdVersion
lastModifiedVersion
isActive
```

Do not add recommendation weights or Fish/Rig/Lure/Technique suitability arrays to Condition records. `sortOrder` is added only if presentation evidence demonstrates a real need.

`Not sure` is input-state absence, not a canonical Condition. Water temperature is optional numeric recommendation context rather than a V1 Condition band.

Initial input cardinality is: exactly one Waterbody and Access/Position; zero-or-one Depth/Zone, Water Clarity, Current, Season, and Light/Sky; zero-to-two Cover/Structure values; optional numeric water temperature.

Wind, precipitation, barometric pressure, fronts, air temperature, and Fishing Pressure are intentionally omitted from V1 until demonstrated recommendation value justifies them.

# Current Domain Boundaries

Condition implementation must preserve existing ownership until an explicit migration is approved.

Examples:

- Fish `habitatTags[]` describes stable species habitat associations owned by Fish.
- Fish `waterbodyTypes[]` describes typical species waterbody associations owned by Fish.
- Rig `conditionTags[]` is a validated current field but must receive explicit disposition during Conditions production. Contextual “works well in” semantics move to Recommendation Decision Knowledge; do not mechanically convert old free-text tags into Rig↔Condition relationships.
- Reel and Knot guidance may use situational context inside their own Decision Knowledge registries.

The Conditions production workstream may normalize approved Condition vocabulary while preserving these ownership boundaries; no matching label by itself authorizes a new cross-domain relationship.

---

# Relationship Ownership — Approved

Conditions describe context and do not own recommendation lists. D069 resolves the major relationship boundary:

- Fish intrinsic habitat/waterbody associations remain Fish-owned.
- Condition-specific Fish/Rig/Lure/Bait/Technique suitability, ranking, weighting, and rationale belong to Recommendation Decision Knowledge.
- Conditions do not store `fishIds[]`, `rigIds[]`, `lureIds[]`, `techniqueIds[]`, recommendation weights, or inverse suitability arrays.
- The intrinsic Compatibility Relationship domain does not include Condition relationships in V1.

The same vocabulary label may appear in Fish or Rig contexts without changing semantic ownership; matching words do not automatically create a canonical cross-domain relationship.

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

The Conditions Production Foundation must:

1. finalize exact production labels/IDs and the file/runtime shape within the approved groups;
2. implement and validate the minimal Foundation + `category` schema;
3. author the bounded V1 canonical Condition set;
4. explicitly review every existing Rig `conditionTags[]` value and classify it as retained intrinsic Rig fact, mapped for a legitimate non-suitability purpose, migrated to Recommendation Decision Knowledge, or retired;
5. avoid blind string-to-ID migration and avoid adding contextual Condition relationship arrays to Reference entities;
6. add referential/schema validation proportional to the implemented source;
7. validate any UI/search exposure without creating duplicate relationship ownership.

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
