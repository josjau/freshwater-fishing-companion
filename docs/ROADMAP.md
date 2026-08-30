# Freshwater Fishing Companion

**Document:** ROADMAP.md  
**Document Revision:** 0.9.0  
**Document Status:** Approved  
**Role:** Product milestone order and future direction  
**Last Updated:** 2026-08-30

# Purpose

This document defines the canonical planned product-development direction for Freshwater Fishing Companion.

It deliberately does **not** own exact active workstream status, current commit baselines, validation package state, or session resume instructions. Those belong to `WORKING_STATE.md`, `ACTIVE-CHANGE-LEDGER.md`, the Live Working State, and active workstreams.

It does not override `DECISIONS.md` or `ARCHITECTURE.md`.

# Development Philosophy

- Develop in coherent, testable segments.
- Plan twice and build once.
- Correctness before polish.
- Actual demonstrated need before theoretical scale.
- One source of truth per semantic fact/relationship.
- Finish/validate the current segment before beginning a dependent segment.
- Resolve foundational User Knowledge storage questions before persistent user-data features and before materially expanding Tackle architecture.
- Prioritize practical first-time-angler blockers before advanced specializations.

# Regional Content Direction

Forward Version 1 curated-content focus:

- Northeast Oklahoma
- Southeast Kansas
- Southwest Missouri
- Northwest Arkansas

Existing validated domains retain their original selection/validation context until deliberately reconciled.

Regional reconciliation is progressive/additive by default: important missing regional coverage may be added when a domain is audited or materially modified, but valid existing content is not automatically removed or invalidated merely because geographic focus expanded.

The original validated 20-Rig library remains canonical. The additive Four-State adequacy audit is complete and added Split-Shot Bait Rig as canonical Rig #21; no other material ordinary-Rig gap remains open from that audit.

**Regulations is the deliberate geographic exception.** Its approved resource-navigation coverage is the 48 contiguous U.S. states. That does not expand Fish, Rig, recommendation, or other curated-content scope beyond separately approved regional boundaries.

# Canonical Product Sequence

1. **Knots** — completed / validated / closed.
2. **Fish Guide** — completed / validated / closed; all 30 locked Version 1 Fish, 30 primary-identification media attachments, and the approved 20-pair identification graph are complete.
3. **Regulations — U.S. State Fishing Resource Gateway** — completed / validated / closed.
4. **What Should I Throw? Phase 0 Planning** — complete; production deferred behind the approved prerequisites below.
5. **Recommendation Prerequisites Foundation** — completed / validated / closed: Conditions → Lure/Bait Reference → Techniques/Compatibility.
6. **Settings / User Data Architecture Gate** — active architecture-planning milestone.
7. **My Tackle Availability Foundation** — scoped to authoritative ownership/availability and recommendation matching.
8. **What Should I Throw? Recommendation Engine + UX Pilot**.
9. **Tackle Reference / Find Tackle** — later unless prerequisite implementation demonstrates a direct dependency.
10. **Catch Log**.
11. **Global Search**.
12. **Favorites final decision**.

Repository Audit Cleanup is a maintenance/governance gate, not a numbered product milestone and does not change this sequence.

# 1. Knots — Completed Milestone

The completed Knots milestone established the canonical Knot library, task-first Knot Guide, deterministic search, canonical text instructions, verified instructional-media coverage, Reel & Line Setup, and validated connected navigation.

Version 1 canonical scope includes 10 Knots, four Core IDs, and Reel & Line Setup for Spinning, Spincast, and Baitcasting.

Future Knot quality improvements may add project-owned diagrams/controlled animations, but the completed Version 1 milestone does not reopen automatically.

Fly reels/fly-line-specific setup and advanced baitcaster tuning/casting remain outside the completed workflow unless later approved.

# 2. Fish Guide — Completed Milestone

Build the complete Fish field-reference experience from the approved Phase 0 architecture after the Repository Audit Cleanup gate releases it.

The milestone deliberately covers:

- Four-State supported Fish library,
- identification-safe media,
- practical identification traits,
- similar-species comparison/navigation,
- habitat/waterbody/seasonal reference information,
- connected Rig guidance,
- regulation-resource pathways,
- scoped Search and Fish detail UX.

Identification accuracy remains dominant.

Fish-to-Lure and advanced lure/color/retrieve/weather/season/clarity/cover/depth optimization belong to later Decision Knowledge rather than canonical Fish.

The Fish Guide milestone closed with Production Wave 4 — Sunfish & Crappie after desktop/mobile approval and post-push repository-integrity validation. Future Fish additions or evidence corrections are maintenance/new-scope work and do not reopen the completed Version 1 milestone automatically.

# 3. Regulations — U.S. State Fishing Resource Gateway — Completed Milestone

Regulations is **completed / validated / closed** for the 48 contiguous U.S. states.

Final production closed at `fffe2ef518f13fd5d50e5d45af9d9ead7c11045c` (`Regulations - Final Wave`) with **48 State / 180 StateResource / 2 active StateNotice** records. The internal Dashboard route, A-Z state selector, retained state-name/two-letter-abbreviation Search, state resource pages, authority/provenance model, monthly maintenance workflow, freshness validation, and external-reference maintenance path are production behavior.

The gateway remains an official-resource navigation surface rather than a project-owned nationwide legal-rule database. State authorities own current legal requirements. Future link/resource changes follow maintenance rules and do not reopen the milestone automatically.

D066 owns the durable geographic/legal-resource boundary. `archive/workstreams/regulations/REGULATIONS-PHASE-0.md` is the retained closed design/evidence/production record.

# 4. What Should I Throw? Phase 0 Planning — Complete / Production Deferred

Phase 0 established the Decision Knowledge contract for answering:

> What should I throw here and now, and why?

D069 owns the durable locked direction. The result model provides **Best Overall** guidance independent of inventory and **Best Currently Available** guidance based on what the angler can actually execute. Strong unavailable options remain visible with missing requirements rather than being silently filtered out. If one recommendation wins both states, presentation combines them rather than duplicating the recommendation.

V1 requires a target Fish plus access/position and waterbody context. Observable context includes depth/zone, cover/structure, water clarity, and current where relevant; season, light/sky, numeric water temperature, and bait preference are optional refiners. Unknown values degrade gracefully.

Recommendation data composes canonical Rig, Lure/Bait, Technique, and contextual parameters/rationale without duplicating their instructions. **How to Rig It** remains Rig-owned; **How to Fish It** remains Technique-owned.

Production is intentionally deferred until the prerequisite sequence below is satisfied.

# 5. Recommendation Prerequisites Foundation — Completed Milestone

The combined prerequisite workstream is **CLOSED / PASS / FINAL**. It implemented the three approved Reference Knowledge prerequisites while preserving their separate canonical owners: 35 Conditions, 13 Lure/Bait identities, 16 Techniques, and 177 intrinsic Compatibility relationships (54 Rig↔Lure/Bait, 69 Rig↔Technique, 54 Lure/Bait↔Technique). The final source/runtime commit is `cdf8f408011c5137d0351cec9f350d0a6eee66c2`; the final documentation closeout is `584f97caa4874075f745834145813ac9bdcf78b3`, with Repository Integrity #106 and GitHub Pages #594 PASS.

`workstreams/RECOMMENDATION-PREREQUISITES-FOUNDATION.md` preserves the closed production record. Conditions, Lure/Bait, Technique, and Compatibility remain distinct semantic owners; the combined execution workstream never merged their schemas.

## Subphase A — Conditions — Complete

Implemented the approved flat canonical Condition vocabulary from `data-model/03B-CONDITIONS.md`. V1 groups are Waterbody, Access/Position, Depth/Zone, Cover/Structure, Water Clarity, Current, Season, and Light/Sky. `Not sure` is input absence rather than a Condition entity; water temperature is optional numeric context.

Existing Rig `conditionTags[]` was explicitly reviewed and frozen as transitional legacy metadata; contextual “works well in” meaning remains assigned to Recommendation Decision Knowledge rather than being mechanically converted into canonical Condition relationships.

## Subphase B — Lure/Bait Reference — Complete

Implemented the distinct canonical Lure/Bait Reference domain in `data-model/03C-LURES-BAIT.md`. It owns fishing-relevant lure/bait identities presented to Fish, not commercial products. Tackle continues to own functional equipment and Rig-building components.

Exact context-specific size, weight, color/pattern, and presentation selections remain Recommendation Decision Knowledge. Commercial brand/model/SKU enumeration is outside the canonical V1 domain.

## Subphase C — Techniques and Compatibility — Complete

Implemented reusable presentation behavior from `data-model/03A-TECHNIQUES.md`. Technique owns reusable movement/cadence/rod/reel action and instructional guidance; Rig owns physical assembly/configuration. Fish/Condition-specific selection and contextual adjustments remain Recommendation Decision Knowledge.

Intrinsic Rig↔Lure/Bait, Rig↔Technique, and Lure/Bait↔Technique compatibility is implemented and stored once under the typed Compatibility Relationship architecture in `data-model/09-RELATIONSHIPS.md`; reverse navigation is derived.

The workstream closed after all three subphases passed source/schema/relationship validation, runtime review, Repository Integrity, exact-scope commit verification, and required CI/Pages.

# 6. Settings / User Data Architecture Gate — Active

This gate is now the active architecture-planning milestone and must close before authoritative My Tackle. It resolves stable user/profile identity, authentication/account linking, synchronization, local persistence, retention, migration, backup/restore, device transfer, preference ownership, and the boundary between persistent ownership and temporary/current availability.

D067 remains the durable User Knowledge ownership rule; D069 refines its sequencing trigger. **UD-1 is locked with refinement allowed:** FCC targets one persistent profile that may span multiple devices through local offline-capable copies plus shared profile-scoped record-level synchronization. Cross-device synchronization requires secure authentication or an equivalent approved account/device-linking mechanism. Manual export/restore is backup/portability/recovery rather than routine synchronization. Multi-profile/family sharing remains deferred. Exact authentication provider, sync service, persistence technology, and conflict semantics remain for the active gate.

# 7. My Tackle Availability Foundation

Implement only the User Knowledge foundation required to make ownership and recommendation availability authoritative. The initial goal is to answer which canonical Tackle/Lure/Bait items the angler owns and which relevant variants are available for the current recommendation workflow.

Persistent ownership and temporary/current availability must remain semantically distinguishable. The exact V1 representation is settled at the User Data/My Tackle gate; temporary availability must never silently create ownership. Full inventory-management breadth is not a prerequisite.

# 8. What Should I Throw? Recommendation Engine + UX Pilot

Resume recommendation production only after the required prerequisite gates above are satisfied. The pilot implements the locked Best Overall / Best Currently Available output, compact V1 input flow, contextual Recommendation Decision Knowledge, and explanation model against real canonical Conditions, Lure/Bait, Techniques, compatibility, and availability data.

Material changes to the locked Phase 0 semantic boundaries require explicit reapproval. Recommendation Prerequisites planning is now locked through RP-A1–RP-A4, RP-B1/RP-B2A–RP-B2D/B-01–B-13, and RP-C1–RP-C4; changes to those locked vocabularies, authored scopes, or production contracts require reopening the relevant bounded gate.

# 9. Tackle Reference / Find Tackle

Build the broader canonical Tackle discovery/reference experience after the prerequisite path unless a direct dependency is demonstrated earlier. Canonical Tackle remains Reference Knowledge distinct from My Tackle ownership and from the separate Lure/Bait domain.

Search and connected-knowledge behavior continue to follow the established relevance-first and single-owner relationship rules.

# 10. Catch Log

Build after the settled User Knowledge/My Tackle foundation. Catch Log design must review user/profile ownership, canonical Fish/Rig/Lure/Bait/Technique references, date/time and measurements, location/privacy, notes, media, backup/restore, and migration/versioning. Candidate fields remain unapproved until that segment.

# 11. Global Search

Defer until major searchable domains and canonical entity models are stable. Build on relevance-first/connected-knowledge architecture rather than an undifferentiated cross-domain dump.

# 12. Favorites Final Decision

Favorites remains parked until near project completion. Evaluate actual workflow value after Search, history/recent behavior, My Tackle, Catch Log, connected knowledge, and recommendations exist. Keep, narrow, replace, or remove based on demonstrated value rather than placeholder existence.

# Regulations Product Boundary

The Regulations gateway is deliberately broader geographically than the rest of the current curated application.

It provides **official-resource navigation**, not legal interpretation or a normalized nationwide regulation database. Freshwater Fishing Companion may normalize labels, categories, state identity, agency identity, link metadata, and verification metadata, while the state authority owns the underlying current legal requirements.

The active Settings / User Data Architecture gate may define a future user preference for preferred states. The preferred behavior is to prioritize those states while preserving access to the complete supported state list; a preference should not make other supported states appear unavailable.

# Parking Lot

Intentionally deferred until demonstrated need or a later named gate:

- fly fishing and fly-line-specific setup/knot systems,
- detailed baitcaster brake/spool-tension/backlash/lure-weight/casting instruction,
- project-owned Knot diagrams/controlled animations,
- heavy fuzzy Search and advanced natural-language intent parsing,
- commercial ProductDefinition architecture,
- exhaustive manufacturer/product catalogs,
- SKU/UPC/retailer modeling,
- advanced size/style-aware readiness,
- automatic cloud-backup provider/service integration beyond the approved profile synchronization boundary,
- AI fish identification,
- actual-size lure calibration,
- container hierarchy,
- trip planning,
- smart packing lists,
- online product pricing,
- live weather integration,
- live regulation updates or project-owned nationwide legal-rule synchronization,
- automatic location/GPS selection for Regulations unless a later privacy/product decision demonstrates need,
- family sharing,
- achievement system,
- optional barcode scanning,
- more sophisticated analytics,
- **automatic shopping/retailer integration** — revisit only when a concrete workflow demonstrates sufficient value and explicit approval resolves architecture/privacy/maintenance implications.

# Out of Scope for Version 1

- Social networking.
- Competitive leaderboards.
- Marketplace functionality.
- Subscription features.
- Advertising.

These are rejected/out of scope for Version 1 rather than automatic future backlog items. A future explicit product-scope decision is required to reverse one.

# Release / Segment Completion

Feature/segment completion requires the applicable implementation, testing, GitHub verification, runtime validation, and documentation closeout defined by `DEVELOPMENT_WORKFLOW.md`.

## Repository Disaster Recovery / Reconstruction Gate

Before a major Version 1 release—or earlier if irreplaceable User Knowledge or other non-reconstructible artifacts enter scope—the project must implement and validate D064/GATE-012. That gate requires independent recovery coverage beyond the active checkout, a defined restoration/reconstruction procedure, integrity validation, and explicit recovery-point/retention expectations.

# Related Documents

- `PROJECT.md`
- `ARCHITECTURE.md`
- `DECISIONS.md`
- `DEVELOPMENT_WORKFLOW.md`
- `WORKING_STATE.md`
- `ACTIVE-CHANGE-LEDGER.md`
- `UI_STANDARD.md`
- applicable data-model/domain documents
