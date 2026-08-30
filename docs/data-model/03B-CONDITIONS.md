# Freshwater Fishing Companion

**Document:** 03B-CONDITIONS.md  
**Document Revision:** 0.5.0  
**Document Status:** Approved  
**Implementation Status:** IMPLEMENTED / VALIDATED / CLOSED — 35 active Condition records across 8 groups  
**Decision Baseline:** D004, D056, D069

---

# Purpose

This document defines the implemented canonical Condition domain in Freshwater Fishing Companion.

Conditions describe reusable environmental, seasonal, habitat, water, weather, time, and situational factors that may influence fishing decisions.

Current `main` implements the approved V1 Condition domain in `data/conditions.js` / `CONDITION_DATA`. D069 and RP-A1 through RP-A4 lock the V1 vocabulary, minimal schema, transitional Rig-tag disposition, runtime/validation contract, and user-facing presentation contract below.

---

# Current Status

**Implemented / Validated / Closed.**

D004 owns Conditions as shared canonical Reference Knowledge. D056 requires every Condition fact and relationship to have one semantic owner and prohibits inverse or convenience duplication.

Current production uses condition-like text metadata in some existing domains, including Rig `conditionTags[]` and Fish habitat/waterbody fields. Those fields remain owned by their current domains until an explicitly approved migration replaces or maps them. The existence of the Condition domain does not silently convert current text fields into Condition IDs.

**RP-A1 is locked:** Rig `conditionTags[]` is frozen as transitional legacy metadata. Existing values remain temporarily to preserve current Rig Search and Rig Detail **Good Conditions** behavior, but no new values may be authored. No `conditionIds[]` field and no Rig↔Condition relationship will be created. Contextual Rig suitability migrates later to Recommendation Decision Knowledge, after which the legacy field and its dependent behavior may be removed through an explicit validated migration.

---

# Design Philosophy

Conditions answer questions such as:

> What environmental or situational context is relevant right now?

They are reusable context, not recommendations by themselves.

Decision Knowledge may combine Conditions with Fish, Rigs, Techniques, inventory, and other context to produce recommendations. Recommendation-specific ranking, confidence, and weighting belong to Decision Knowledge unless a later decision assigns a narrowly defined intrinsic Condition property.

---

# Foundation Fields

The production Condition data uses the Foundation entity standard:

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

The 35-record V1 vocabulary above is locked for this production pass. No parent hierarchy is required in V1.

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

Do not add recommendation weights, Fish/Rig/Lure/Technique suitability arrays, hierarchy fields, or `sortOrder` to V1 Condition records.

`Not sure` is input-state absence, not a canonical Condition. Water temperature is optional numeric recommendation context rather than a V1 Condition band.

Initial input cardinality is: exactly one Waterbody and Access/Position; zero-or-one Depth/Zone, Water Clarity, Current, Season, and Light/Sky; zero-to-two Cover/Structure values; optional numeric water temperature.

Wind, precipitation, barometric pressure, fronts, air temperature, and Fishing Pressure are intentionally omitted from V1 until demonstrated recommendation value justifies them.


## RP-A2 — Production Contract — LOCKED

The Conditions production contract is locked for V1:

- canonical source file: `data/conditions.js`;
- canonical registry: `CONDITION_DATA`;
- record shape: Foundation fields plus `category` only;
- no `sortOrder`;
- no hierarchy;
- no recommendation/suitability fields;
- category literals are machine-stable lowercase kebab-case: `waterbody`, `access-position`, `depth-zone`, `cover-structure`, `water-clarity`, `current`, `season`, `light-sky`;
- the current pilot vocabulary contains 35 canonical Condition records;
- Condition IDs use lowercase kebab-case and are systematically category-qualified where ambiguity exists (for example `water-clarity-clear`, `current-light`) while remaining concise where globally unambiguous (for example `pond`, `bank`, `shallow`, `spring`).

This hybrid ID convention is the canonical V1 rule: qualify when semantic ambiguity is plausible; do not mechanically prefix every ID with the category.

## RP-A3 — Implementation / Load / Validation Contract — LOCKED

The Conditions implementation contract is locked for V1:

- `data/conditions.js` is loaded through the normal `index.html` production script graph;
- `CONDITION_DATA` is available as canonical Reference Knowledge without creating a standalone Conditions UI;
- no Conditions Dashboard card, route, browse/detail page, search surface, renderer, or navigation entry is introduced in this subphase;
- Repository Integrity validates the exact approved 35-record set, Foundation + `category`, unique/expected IDs, eight approved category literals and membership, lifecycle fields, and absence of unauthorized fields;
- validator logic rejects `sortOrder`, relationship arrays, recommendation weights, suitability/ranking fields, unexpected Condition IDs, and unexpected categories;
- RP-A1 is enforced mechanically by restricting existing Rig `conditionTags[]` values to the frozen current 17-value legacy vocabulary without requiring every legacy value to remain present forever;
- no runtime legacy-tag-to-Condition mapping table is created;
- Rig Search and **Good Conditions** remain on the transitional legacy field until Recommendation Decision Knowledge provides the replacement semantic owner.

## RP-A4 — Condition User-Knowledge Presentation — LOCKED

Conditions are user-facing contextual Reference Knowledge without requiring a standalone Conditions destination. The V1 presentation contract is:

- Conditions do not receive Dashboard cards, category tiles, browse pages, or individual detail routes solely to expose their definitions;
- when a Condition appears on an appropriate user-facing Rig, Recommendation, or other knowledge surface, it may open a lightweight informational popover using the established contextual-reference interaction pattern;
- `CONDITION_DATA` is the single canonical source for Condition identity and explanatory text; referencing domains must not duplicate Condition definitions or popover copy;
- references resolve by canonical Condition ID into `CONDITION_DATA`, then through one shared Condition-popover renderer;
- the Foundation `summary` field is the initial popover content source; no additional `description`, `details`, or popover-specific field is added unless the authored 35-record set demonstrates that `summary` is insufficient;
- the popover explains the Condition itself only and must not own Fish, Rig, Lure/Bait, or Technique suitability, ranking, or recommendation advice;
- Condition references need not be interactive everywhere; enable the popover only where it improves understanding without creating UI clutter.

This makes Conditions accessible as user-facing Reference Knowledge while preserving their compact contextual role and keeping Recommendation Decision Knowledge as the owner of what to use under those Conditions.

# Current Domain Boundaries

Condition implementation must preserve existing ownership until an explicit migration is approved.

Examples:

- Fish `habitatTags[]` describes stable species habitat associations owned by Fish.
- Fish `waterbodyTypes[]` describes typical species waterbody associations owned by Fish.
- Rig `conditionTags[]` is a validated transitional field frozen under RP-A1. Existing values remain temporarily for current search/presentation compatibility; no new vocabulary may be added. Contextual “works well in” semantics move to Recommendation Decision Knowledge, and no Rig↔Condition relationship or `conditionIds[]` migration is permitted.
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

# Production Implementation Status — COMPLETE / VALIDATED / CLOSED

Current production satisfies the locked Conditions contract:

1. `data/conditions.js` / `CONDITION_DATA` contains the exact 35-record vocabulary across the eight approved category literals;
2. records use Foundation fields plus `category` only;
3. RP-A1 remains enforced: existing Rig `conditionTags[]` is frozen transitional metadata, no new values are authored, and no Rig `conditionIds[]` or Rig↔Condition relationship exists;
4. no blind legacy-string-to-ID migration or contextual suitability arrays were introduced;
5. Repository Integrity enforces the exact Condition set/schema/category membership plus the frozen legacy Rig-tag boundary;
6. supported user-facing Condition references use the shared contextual popover backed by canonical `CONDITION_DATA` / `summary`;
7. Fish-owned labels without semantically exact Condition equivalents remain Fish-owned rather than being forced into the Condition vocabulary.

The runtime presentation defects discovered during the Foundation review were repaired and accepted before the Foundation closed. Detailed review chronology remains in `workstreams/RECOMMENDATION-PREREQUISITES-FOUNDATION.md` and Git history rather than this canonical domain owner.

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
