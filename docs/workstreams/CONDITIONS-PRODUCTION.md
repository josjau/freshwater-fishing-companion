# Freshwater Fishing Companion — Conditions Production Foundation

**Document:** workstreams/CONDITIONS-PRODUCTION.md  
**Document Status:** Approved — Next Workstream / Not Started  
**GitHub Baseline:** `2f645d9040d43445cabf5e6e043c08a30af72bd6` at workstream handoff  
**Decision Baseline:** D004, D056, D069  
**Created:** 2026-08-27

# Purpose

Implement the canonical Conditions production foundation required before Lure/Bait, Techniques, User Data/My Tackle availability, and What Should I Throw production. This workstream does not authorize recommendation-engine production.

# Governing Contract

`docs/data-model/03B-CONDITIONS.md` owns the approved V1 domain contract. `docs/data-model/09-RELATIONSHIPS.md` and D069 own the relationship boundary. Existing Fish intrinsic habitat/waterbody facts remain Fish-owned. Contextual suitability belongs to Recommendation Decision Knowledge.

# In Scope

- finalize exact production Condition IDs/labels within the approved groups;
- finalize minimal runtime/file shape using Foundation + `category`;
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

# Rig conditionTags[] Migration Gate

For each current Rig tag, classify the semantic fact as one of:

1. retain elsewhere as a genuinely intrinsic Rig-owned fact;
2. map to canonical Condition vocabulary only for a legitimate non-suitability purpose;
3. move the contextual “works well in” meaning to future Recommendation Decision Knowledge;
4. retire as obsolete/redundant.

Do not mechanically convert free-text tags into Rig↔Condition IDs. Do not preserve duplicate contextual truth in both Rig and Recommendation data.

# Validation / Exit Criteria

The workstream may close only when:

- the Condition source/schema and canonical records validate;
- every active canonical Condition ID/category/lifecycle field is valid;
- the approved V1 group coverage is complete for the authored scope;
- Rig `conditionTags[]` have an explicit reviewed disposition;
- no contextual recommendation weights or entity-specific suitability arrays were introduced into Conditions;
- documentation/ledger/Working State are reconciled;
- local review/commit and required GitHub CI/Pages verification pass under the normal workflow.

# Exact Resume Point

1. Start a new Conditions production session.
2. Re-verify current GitHub `main`, Drive Working Source/Current, and Live Working State.
3. Read only `WORKING_STATE.md`, this workstream, `03B-CONDITIONS.md`, `09-RELATIONSHIPS.md`, `03-RIGS.md`, D069, and directly relevant validation/source files.
4. Begin read-only by inventorying current Rig `conditionTags[]` vocabulary and the minimal source/load/validator changes required for a Condition registry.
5. Propose the bounded production schema/file/ID convention and Rig-tag disposition plan before writing production source.
