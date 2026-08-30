# Freshwater Fishing Companion

**Document:** 03B-CONDITIONS.md  
**Document Revision:** 0.4.5  
**Document Status:** Approved  
**Implementation Status:** GitHub review baseline committed / 35-record pilot refinement + cross-Rig/Fish presentation repair staged / targeted PASS / runtime re-review pending / Combined Closeout Pending  
**Decision Baseline:** D004, D056, D069

---

# Purpose

This document defines the approved architectural boundary for the future canonical Condition domain in Freshwater Fishing Companion.

Conditions describe reusable environmental, seasonal, habitat, water, weather, time, and situational factors that may influence fishing decisions.

No canonical Condition production dataset is committed on current `main`. The approved V1 implementation is staged in Drive Working Source/Current. D069 and RP-A1 through RP-A4 lock the V1 vocabulary, minimal schema, transitional Rig-tag disposition, runtime/validation contract, and user-facing presentation contract below.

---

# Current Status

**Drive Current Staged / Targeted Validation PASS / Combined Closeout Pending.**

D004 approves Conditions as shared canonical Reference Knowledge. D056 requires every future Condition fact and relationship to have one semantic owner and prohibits inverse or convenience duplication.

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

The staged Condition production data uses the Foundation entity standard:

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

This makes Conditions part of User Knowledge while preserving their compact contextual role and keeping Recommendation Decision Knowledge as the owner of what to use under those Conditions.

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

# Implementation Checkpoint — STAGED / TARGETED PASS

The Conditions Production Foundation must:

1. implement `data/conditions.js` / `CONDITION_DATA` with the locked 35-record vocabulary and eight category literals;
2. implement and validate the minimal Foundation + `category` schema;
3. preserve RP-A1: freeze existing Rig `conditionTags[]`, add no new values, create no Rig↔Condition relationship or `conditionIds[]`, and carry contextual suitability forward for later Recommendation Decision Knowledge migration;
4. avoid blind string-to-ID migration and contextual Condition relationship arrays on Reference entities;
5. implement the locked RP-A3 normal script loading and exact deterministic validator contract;
6. preserve RP-A4: one shared lightweight Condition popover backed by `CONDITION_DATA` / `summary`, with no standalone Conditions route/browse/search surface and no recommendation advice;
7. validate that existing Rig Search / **Good Conditions** behavior remains unchanged until its later semantic replacement is implemented.

The staged Drive Current implementation satisfies the bounded Subphase A data/schema/static contract and targeted checks. The 2026-08-28 browser review demonstrated that RP-A4 Good Conditions presentation was not functioning; the 2026-08-29 repair now renders supported frozen legacy tags as contextual controls that open the shared canonical Condition popover. This bridge is presentation-only and does not create Rig `conditionIds[]`, a Rig↔Condition relationship, or a permanent semantic migration. Runtime revalidation is still required before the Conditions user-facing checkpoint can pass. Final Repository Integrity, final approval, commit/push, and CI remain pending at the combined Recommendation Prerequisites Foundation closeout boundary.

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

# Runtime Presentation Defect — 2026-08-28

The first user browser review found **no working Good Conditions popover** on Rig Detail. Static wiring checks therefore do not satisfy RP-A4 runtime acceptance.

Required repair remains bounded by the locked Conditions contract:

- existing Rig **Good Conditions** values remain the frozen legacy `conditionTags[]` vocabulary;
- clicking/tapping a displayed Good Condition must open the shared lightweight contextual Condition popover and show the canonical explanation from `CONDITION_DATA` / `summary`;
- no standalone Conditions route, browse page, Dashboard card, or search surface is introduced;
- no Rig `conditionIds[]`, Rig↔Condition relationship, or permanent legacy-string mapping architecture is introduced merely to fix presentation;
- keyboard/focus and narrow/mobile interaction must be verified in the repaired browser review.

Subphase A data/schema remains targeted PASS. The RP-A4 repair is staged, but the user-facing presentation checkpoint remains **RUNTIME RE-REVIEW REQUIRED** until browser validation passes.


# Second Runtime Review / Reconciliation Gate — 2026-08-29

The second browser review confirmed that Condition contextual help is still not complete enough for acceptance. New findings supersede the narrower first-review presentation defect:

- the Condition popover can render too low on the page; its presentation should anchor to a stable top/middle viewport location rather than depend on the source element's page depth;
- **Light Cover** currently has no working popover;
- Direct-Tie configuration Good Conditions require semantic validation per lure rather than assuming one repeated condition set is correct;
- Fish should receive the same lightweight Condition-reference popover where a displayed label corresponds to canonical Condition knowledge;
- a bounded reconciliation is required between canonical `CONDITION_DATA` and Condition-like labels currently present in both Rigs and Fish.

Reconciliation rules:

1. inventory current Rig `conditionTags[]` and Fish habitat/waterbody-facing labels used for contextual display;
2. compare them to the exact 35 canonical Condition records and categories;
3. identify exact canonical matches, legitimate presentation aliases/mappings, legacy-only labels, and labels with no valid canonical Condition;
4. correct runtime labels/mappings only after semantic review;
5. do **not** create Rig↔Condition or Fish↔Condition recommendation relationships from label similarity; Fish-owned habitat/waterbody facts and transitional Rig tags retain their existing owners;
6. validator coverage should ensure every interactive Condition-reference control resolves to an active canonical Condition record.

Subphase A remains data/schema targeted PASS, but the Conditions runtime/reference checkpoint is **OPEN / BLOCKING** until this reconciliation and browser re-review pass.


# 2026-08-29/30 Pilot Vocabulary + Presentation Reconciliation

The second runtime review demonstrated two missing reusable Cover / Structure labels and several presentation mismatches. Under the already-approved pilot-refinement allowance, the canonical registry expands from 33 to **35** Conditions by adding:

- `light-cover` — **Light Cover**
- `heavy-cover` — **Heavy Cover**

Both remain flat Cover / Structure records. No hierarchy, recommendation weight, Rig `conditionIds[]`, Fish `conditionIds[]`, Rig↔Condition relationship, or Fish↔Condition relationship is introduced. `Sparse Cover` may resolve presentation help to Light Cover rather than creating another near-duplicate Condition.

Presentation mapping is deliberately semantic rather than string-only. Fish labels such as Grass→Vegetation, Brush/Timber→Wood / Brush, Channel→Drop-off / Channel / Deep Structure, Shallow Water→Shallow, Deep Water→Deep, and the direct waterbody equivalents may open the shared Condition reference. `Cold Water`, generic `Current`, and `Mud` remain plain because mapping them to the current vocabulary would change meaning or invent specificity.

The shared Condition/reference popover is also staged to center in the viewport, contain its own scrolling, lock the underlying page while open, and restore the prior page scroll position on close. Targeted syntax/data/static validation passes; browser re-review remains required.
