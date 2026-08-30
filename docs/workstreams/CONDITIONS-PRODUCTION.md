# Freshwater Fishing Companion — Conditions Production Foundation — Subphase A

**Document:** workstreams/CONDITIONS-PRODUCTION.md  
**Document Status:** Closed — PASS / Historical Subphase A Record  
**GitHub Baseline:** `d53caf84c5f22f00aef92f2c6cd21557c4c57ce1` (`Correct Regulations maintenance links`)  
**Decision Baseline:** D004, D056, D069  
**Created:** 2026-08-27

# Purpose

This file preserves the completed Conditions **Subphase A** production contract and execution record within the now-closed Recommendation Prerequisites Foundation. Conditions production is implemented, validated, committed, and closed; this file is no longer an active resume owner.

# Governing Contract

`docs/data-model/03B-CONDITIONS.md` owns the approved V1 domain contract. `docs/data-model/09-RELATIONSHIPS.md` and D069 own the relationship boundary. Existing Fish intrinsic habitat/waterbody facts remain Fish-owned. Contextual suitability belongs to Recommendation Decision Knowledge.

# In Scope

- implement the locked production Condition IDs/labels within the approved groups;
- implement the locked minimal runtime/file shape using Foundation + `category`;
- author the bounded V1 canonical Condition set;
- determine source/load/render/search changes actually required for the foundation;
- explicitly review every existing Rig `conditionTags[]` value and disposition it without blind migration;
- add/update deterministic validation proportional to the implemented source;
- validate any affected UI/navigation/mobile behavior if Conditions receive user-facing Reference presentation in this segment;
- reconcile documentation/state at closeout.

# Approved V1 Groups

- Waterbody
- Access / Position
- Depth / Zone
- Cover / Structure
- Water Clarity
- Current
- Season
- Light / Sky

`Not sure` remains input absence; numeric water temperature remains optional Recommendation context. Wind, precipitation, barometric pressure, fronts, air temperature, and Fishing Pressure are outside V1 unless explicit later approval demonstrates value.

# Rig conditionTags[] Migration Gate — RP-A1 LOCKED

The current 21-Rig inventory was reviewed before production writes. RP-A1 is approved and locked:

- retain existing `Rig.conditionTags[]` temporarily because current Rig Search and Rig Detail **Good Conditions** still depend on the field;
- freeze the existing vocabulary immediately — no new `conditionTags[]` values may be authored;
- do **not** create `conditionIds[]` on Rig;
- do **not** create a Rig↔Condition relationship;
- do **not** mechanically map legacy strings to canonical Condition IDs;
- contextual “works well in” suitability moves later to Recommendation Decision Knowledge;
- remove the legacy field only after its replacement owner and dependent search/presentation behavior are implemented and validated.

This is a transitional compatibility rule, not a new permanent Rig relationship architecture.


# RP-A2 — Conditions Production Contract — LOCKED

RP-A2 is approved and locked:

- implement `data/conditions.js`;
- export/use canonical registry `CONDITION_DATA`;
- each Condition uses Foundation fields plus `category`;
- category literals: `waterbody`, `access-position`, `depth-zone`, `cover-structure`, `water-clarity`, `current`, `season`, `light-sky`;
- author the approved 35-record V1 vocabulary;
- IDs are lowercase kebab-case with systematic category qualification where ambiguity exists, such as `water-clarity-clear` and `current-light`; globally unambiguous concepts remain concise, such as `pond`, `bank`, `shallow`, and `spring`;
- no `sortOrder`, hierarchy, recommendation weights, suitability arrays, or cross-domain recommendation fields are introduced in this subphase.

RP-A2 does not authorize production writes by itself beyond the approved Conditions foundation scope.

# RP-A3 — Implementation / Load / Validation Contract — LOCKED

RP-A3 is approved and locked:

- load `data/conditions.js` through the normal `index.html` production script graph;
- expose `CONDITION_DATA` as a loaded canonical registry even though Conditions has no standalone UI yet;
- add no Dashboard card, route, browse/detail page, search surface, renderer, or navigation entry for Conditions in this subphase;
- Repository Integrity must validate the exact 35-record V1 set, Foundation + `category`, unique/expected IDs, the eight approved categories and their expected membership, lifecycle fields, and absence of unauthorized fields;
- validator logic must reject `sortOrder`, relationship arrays, recommendation weights, suitability/ranking fields, and unexpected Condition IDs/categories;
- enforce RP-A1 mechanically by allowing Rig `conditionTags[]` values only from the frozen current 17-value legacy vocabulary, without requiring all 17 values to remain present forever;
- do not create any runtime legacy-tag-to-Condition mapping table;
- current Rig Search and **Good Conditions** behavior remain unchanged until Recommendation Decision Knowledge replaces their semantic source.

RP-A3 completes the Conditions runtime/load/validation contract.

# RP-A4 — Condition User-Knowledge Presentation — LOCKED

RP-A4 is approved and locked:

- Conditions are user-facing contextual Reference Knowledge but do not require Dashboard cards, category tiles, browse pages, or individual detail routes;
- appropriate Condition references may open a lightweight informational popover using the established contextual-reference interaction pattern;
- `CONDITION_DATA` is the single canonical source for Condition identity and explanatory text; referencing domains store/reference the Condition ID rather than duplicating definitions or popover copy;
- one shared Condition-popover renderer resolves `Condition ID → CONDITION_DATA → popover`;
- the Foundation `summary` field supplies initial popover content; add no separate description/details field unless the authored 33-record set demonstrates a real need;
- popover content explains the Condition itself and must not contain Fish/Rig/Lure-Bait/Technique suitability, ranking, or recommendation advice;
- Condition references are interactive only where the interaction improves understanding without unnecessary clutter.

RP-A4 completes the Conditions presentation contract. The approved Conditions implementation is production behavior on current `main`: `data/conditions.js` / `CONDITION_DATA`, normal production script loading, frozen legacy Rig-tag enforcement, deterministic validator coverage, and shared Condition popover infrastructure are present and validated. The Foundation combined closeout passed Repository Integrity, runtime review, commit verification, and CI/Pages.

# Validation / Exit Criteria

The workstream may close only when:

- the Condition source/schema and canonical records validate;
- every active canonical Condition ID/category/lifecycle field is valid;
- the approved V1 group coverage is complete for the authored scope;
- RP-A1 remains enforced: legacy Rig `conditionTags[]` is frozen, no Rig↔Condition relationship exists, and no new legacy vocabulary is introduced;
- no contextual recommendation weights or entity-specific suitability arrays were introduced into Conditions;
- documentation/ledger/Working State are reconciled;
- local review/commit and required GitHub CI/Pages verification pass under the normal workflow.

# Final Status / Resume

- Subphase A Conditions is **CLOSED / PASS** as part of the closed Recommendation Prerequisites Foundation.
- Current production uses the exact 35-record `CONDITION_DATA` set across eight groups.
- RP-A1 remains active as a transitional boundary: Rig `conditionTags[]` is frozen; no Rig `conditionIds[]` or Rig↔Condition relationship exists; contextual suitability remains future Recommendation Decision Knowledge.
- Runtime Condition reference/popover behavior was repaired and accepted before Foundation closeout.
- This historical subphase file does not authorize or control current execution.

**Current project resume:** use `WORKING_STATE.md` and `workstreams/SETTINGS-USER-DATA-ARCHITECTURE.md`. Do not reopen Conditions absent a regression or explicit approved dependency.
