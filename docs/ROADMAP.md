# Freshwater Fishing Companion

**Document:** ROADMAP.md  
**Document Revision:** 0.4.5  
**Document Status:** Approved  
**Role:** Product milestone order and future direction  
**Last Updated:** 2026-08-25

# Purpose

This document defines the canonical planned product-development direction for Freshwater Fishing Companion.

It deliberately does **not** own exact active Repository Audit/workstream status, current commit baselines, validation package state, or session resume instructions. Those belong to `HANDOFF.md`, `ACTIVE-CHANGE-LEDGER.md`, and active workstreams.

It does not override `DECISIONS.md` or `ARCHITECTURE.md`.

# Development Philosophy

- Develop in coherent, testable segments.
- Plan twice and build once.
- Correctness before polish.
- Actual demonstrated need before theoretical scale.
- One source of truth per semantic fact/relationship.
- Finish/validate the current segment before beginning a dependent segment.
- Resolve foundational User Knowledge storage questions before persistent user-data features.
- Prioritize practical first-time-angler blockers before advanced specializations.

# Regional Content Direction

Forward Version 1 regional content focus:

- Northeast Oklahoma
- Southeast Kansas
- Southwest Missouri
- Northwest Arkansas

Existing validated domains retain their original selection/validation context until deliberately reconciled.

Regional reconciliation is progressive/additive by default: important missing regional coverage may be added when a domain is audited or materially modified, but valid existing content is not automatically removed or invalidated merely because geographic focus expanded.

The original validated 20-Rig library remains canonical. The additive Four-State adequacy audit is complete and added Split-Shot Bait Rig as canonical Rig #21; no other material ordinary-Rig gap remains open from that audit.

# Canonical Product Sequence

1. **Knots** — completed / validated / closed.
2. **Fish Guide** — completed / validated / closed; all 30 locked Version 1 Fish, 30 primary-identification media attachments, and the approved 20-pair identification graph are complete.
3. **What Should I Throw**.
4. **Tackle Reference / Find Tackle**.
5. **Settings / User Data Architecture Gate**.
6. **My Tackle**.
7. **Catch Log**.
8. **Global Search**.
9. **Favorites final decision**.

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

# 3. What Should I Throw — Next Milestone

Build the primary Decision Knowledge recommendation experience after Fish.

The feature should answer:

> What should I throw here and now, and why?

Recommendations select/rank/explain canonical entities rather than duplicate their instructions.

Approved instructional ownership:

- **How to Rig It** → canonical Rig build instructions/tutorial/reference.
- **How to Fish It** → canonical Technique presentation/retrieve guidance.
- Recommendation data owns contextual selection/rationale, not duplicate Rig or Technique prose.

Exact inputs, scoring, explanation model, Technique dependencies, and tutorial coverage are finalized during this milestone.

# 4. Tackle Reference / Find Tackle

Build a lightweight canonical Tackle discovery/reference experience independent of remembering a Rig.

This is Reference Knowledge, distinct from My Tackle ownership.

Search should support canonical identity fields such as:

- name,
- approved aliases,
- beginner/common terminology,
- category,
- deliberate search keywords.

A Tackle result should progressively expose pertinent connected knowledge where available:

- definition/recognition,
- common variants,
- related Tackle,
- derived `Used In` Rigs,
- compatible Fish/Conditions/Techniques when canonical relationships exist,
- later My Tackle ownership context.

All features should link to the same canonical Tackle identity/detail experience rather than create competing definitions.

# 5. Settings / User Data Architecture Gate

This gate must close before persistent My Tackle or Catch Log implementation.

It must resolve at minimum:

- local persistence/storage technology,
- retention behavior and browser/site-data clearing,
- application-update/schema-migration strategy,
- backup/export scope and format,
- restore/import validation and rollback,
- device-transfer expectations,
- user/profile identity,
- single-user vs future multi-user boundaries,
- synchronization/account decision or explicit deferral,
- device-local vs profile settings,
- theme architecture/supported themes,
- other user preferences and backup/restore behavior.

Current local-first architecture remains baseline until explicit architecture changes it.

Do not implement persistent My Tackle/Catch Log against an assumed storage model before this gate closes.

# 6. My Tackle

Build after the Settings/User Data gate.

Approved principles:

- canonical Tackle defines functional type,
- My Tackle defines actual owned items,
- My Tackle becomes the only persistent ownership source of truth,
- Rig Readiness reads My Tackle,
- temporary availability never silently creates ownership,
- persistent ownership changes only through explicit My Tackle workflows,
- readiness answers buildability first; optimization comes later.

Detailed owned-item schema remains deferred to the My Tackle design segment.

# 7. Catch Log

Build after My Tackle on the settled User Knowledge persistence architecture.

Catch Log design must review:

- Fish/Rig/Lure/Technique references,
- optional My Tackle/Fishing Setup relationships,
- date/time and measurements,
- location/privacy model,
- notes,
- photo handling/storage implications,
- backup/restore behavior,
- migration/versioning requirements.

Candidate fields remain design inputs until explicitly approved; a historical Specification `shall` does not pre-lock the location schema.

# 8. Global Search

Defer until major searchable domains and canonical entity models are established.

Build on relevance-first/connected-knowledge architecture rather than an undifferentiated cross-domain dump.

Potential searchable domains include:

- Fish,
- Rigs,
- Knots,
- canonical Tackle,
- Lures,
- Techniques,
- recommendation entry points where appropriate.

Grouping, cross-entity ranking, ambiguity handling, and Dashboard presentation belong to this milestone.

# 9. Favorites Final Decision

Favorites remains parked until near project completion.

Evaluate actual workflow value after Search, history/recent behavior, My Tackle, Catch Log, connected knowledge, and recommendations exist.

Possible outcomes:

- keep generic Favorites,
- replace with narrower saved concepts,
- remove it if other workflows make it redundant.

Do not build Favorites solely because a placeholder exists.

# Four-State Regulations Direction

Current official Oklahoma external regulation navigation is valid.

Before a Four-State release depends on Regulations, deliberately decide the future OK/KS/MO/AR resource strategy, including whether it is a simple multi-state official-resource gateway or a richer in-app hub, state selection/saved-region behavior, freshness, Fish Detail entry points, and location/privacy assumptions.

This remains an active product/design item in `ACTIVE-CHANGE-LEDGER.md` rather than exact current-state prose here.

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
- cloud synchronization unless the User Data gate explicitly approves it,
- automatic cloud backup providers,
- AI fish identification,
- actual-size lure calibration,
- container hierarchy,
- trip planning,
- smart packing lists,
- online product pricing,
- live weather integration,
- live regulation updates,
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

Before a major Version 1 release—or earlier if irreplaceable User Knowledge or other non-reconstructible artifacts enter scope—the project must implement and validate D064/GATE-012. That gate requires independent recovery coverage beyond the active checkout, a defined restoration/reconstruction procedure, integrity validation, and explicit recovery-point/retention expectations. It is not a blocker to the current Fish production milestone.

# Related Documents

- `PROJECT.md`
- `ARCHITECTURE.md`
- `DECISIONS.md`
- `DEVELOPMENT_WORKFLOW.md`
- `HANDOFF.md`
- `ACTIVE-CHANGE-LEDGER.md`
- `NAVIGATION-PAGE-STANDARD.md`
- applicable data-model/domain documents
