# Freshwater Fishing Companion

**Document:** ROADMAP.md  
**Document Revision:** 0.5.0  
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
3. **Regulations — U.S. State Fishing Resource Gateway**.
4. **What Should I Throw?**.
5. **Settings / User Data Architecture Gate**.
6. **Tackle Reference / Find Tackle**.
7. **My Tackle**.
8. **Catch Log**.
9. **Global Search**.
10. **Favorites final decision**.

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

# 3. Regulations — U.S. State Fishing Resource Gateway — Next Milestone

Build a state-first in-app gateway that helps anglers reach authoritative fishing regulations and other high-value official state resources without making Freshwater Fishing Companion a nationwide legal-regulation database.

Approved initial planning direction:

- cover the **48 contiguous U.S. states**;
- keep the Dashboard label **Regulations**;
- route the Dashboard card into an internal state-selection experience rather than directly to Oklahoma;
- present an A–Z state selector with lightweight search/filtering as the baseline to evaluate during Phase 0;
- open a state landing page that organizes useful **official** destinations rather than reproducing the state's legal rules;
- distinguish higher-priority **Before You Fish** resources from secondary trip-planning/convenience resources;
- normalize a reusable resource taxonomy while allowing each state to expose only the categories its agency actually provides;
- store authoritative link/provenance/freshness metadata, not the changing legal values behind those links;
- keep all states available even after later user preference features can prioritize preferred states;
- avoid automatic location/GPS behavior and persistent preferred-state storage until the User Data architecture provides a deliberate ownership/privacy model;
- design the state model without a hard-coded 48-state rendering assumption so Alaska, Hawaii, or other jurisdictions can be added later without structural redesign.

Candidate resource categories to validate during Phase 0 include:

**Before You Fish**

- Fishing Regulations
- Licenses & Permits
- Seasons / Size / Bag-Limit resources
- Special Regulations / Special Waters
- Species-Specific Regulations
- Special Permits / Tags / Stamps

**Plan Your Trip**

- Where to Fish / Public Access
- Stocking Information
- Official Fishing Reports / Forecasts
- Aquatic Invasive Species information
- Other Official Resources

These categories are an approved starting taxonomy, not a requirement that every state expose an identical agency structure.

The application does **not** own or interpret daily limits, possession limits, minimum lengths, open/closed dates, legal methods, waterbody exceptions, or similar changing legal facts during this milestone. The responsible state authority remains the source of truth.

Phase 0 should validate the model against the Four-State region plus several structurally different states before the nationwide production pattern is locked.

D066 owns the durable rationale and boundary. `docs/workstreams/REGULATIONS-PHASE-0.md` owns the active planning package and exact planning questions.

# 4. What Should I Throw?

Build the primary Decision Knowledge recommendation experience after Regulations.

The feature should answer:

> What should I throw here and now, and why?

Recommendations select/rank/explain canonical entities rather than duplicate their instructions.

Approved instructional ownership:

- **How to Rig It** → canonical Rig build instructions/tutorial/reference.
- **How to Fish It** → canonical Technique presentation/retrieve guidance.
- Recommendation data owns contextual selection/rationale, not duplicate Rig or Technique prose.

Exact inputs, scoring, explanation model, Technique dependencies, and tutorial coverage are finalized during this milestone.

The initial recommendation engine must remain useful without My Tackle. Once authoritative user inventory exists, My Tackle may become an optional personalization/filtering signal rather than a prerequisite for basic recommendations.

# 5. Settings / User Data Architecture Gate

This is an architecture milestone, not merely a Settings-screen build.

It must close **before Tackle Reference / Find Tackle is materially expanded and before persistent My Tackle or Catch Log implementation** so user identity, ownership, retention, and migration assumptions are not invented independently by later features.

It must resolve at minimum:

- local persistence/storage technology,
- retention behavior and browser/site-data clearing,
- stable local user/profile identity and ownership relationships,
- Version 1 single-user versus future multi-profile boundaries,
- authentication/account requirements or explicit non-requirement,
- application-update/schema-migration strategy,
- backup/export scope and format,
- restore/import validation and rollback,
- device-transfer expectations,
- synchronization/account decision or explicit deferral,
- device-local versus profile-owned settings,
- theme architecture/supported themes,
- preferred-state settings for Regulations and their persistence/ownership behavior,
- other user preferences and backup/restore behavior.

Canonical Tackle remains application-owned Reference Knowledge. Actual owned tackle is User Knowledge and must be associated with the user/profile model selected by this gate. Catch Log and later saved/favorite state must follow the same User Knowledge ownership architecture rather than create separate storage islands.

Current local-first architecture remains baseline until explicit architecture changes it. A user-aware schema does not require a login system; Version 1 may remain one local profile while preserving clean ownership semantics and a migration path.

D067 owns the durable rationale for moving this gate ahead of Tackle Reference / Find Tackle.

# 6. Tackle Reference / Find Tackle

Build a lightweight canonical Tackle discovery/reference experience after the User Data Architecture gate.

This is Reference Knowledge, distinct from My Tackle ownership. The sequencing does not make canonical Tackle user-specific; it ensures that ownership context and future My Tackle relationships are designed against an already-settled User Knowledge architecture.

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

# 7. My Tackle

Build after the Settings/User Data gate and the Tackle Reference milestone.

Approved principles:

- canonical Tackle defines functional type,
- My Tackle defines actual owned items associated with the applicable user/profile,
- My Tackle becomes the only persistent ownership source of truth,
- Rig Readiness reads My Tackle,
- temporary availability never silently creates ownership,
- persistent ownership changes only through explicit My Tackle workflows,
- readiness answers buildability first; optimization comes later.

Detailed owned-item schema remains deferred to the My Tackle design segment after the User Data gate has established persistence and ownership foundations.

# 8. Catch Log

Build after My Tackle on the settled User Knowledge persistence/identity architecture.

Catch Log design must review:

- user/profile ownership,
- Fish/Rig/Lure/Technique references,
- optional My Tackle/Fishing Setup relationships,
- date/time and measurements,
- location/privacy model,
- notes,
- photo handling/storage implications,
- backup/restore behavior,
- migration/versioning requirements.

Candidate fields remain design inputs until explicitly approved; a historical Specification `shall` does not pre-lock the location schema.

# 9. Global Search

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

# 10. Favorites Final Decision

Favorites remains parked until near project completion.

Evaluate actual workflow value after Search, history/recent behavior, My Tackle, Catch Log, connected knowledge, and recommendations exist.

Possible outcomes:

- keep generic Favorites,
- replace with narrower saved concepts,
- remove it if other workflows make it redundant.

Do not build Favorites solely because a placeholder exists.

# Regulations Product Boundary

The Regulations gateway is deliberately broader geographically than the rest of the current curated application.

It provides **official-resource navigation**, not legal interpretation or a normalized nationwide regulation database. Freshwater Fishing Companion may normalize labels, categories, state identity, agency identity, link metadata, and verification metadata, while the state authority owns the underlying current legal requirements.

Later Settings/User Preferences may allow a user to identify preferred states. The preferred behavior is to prioritize those states while preserving access to the complete supported state list; a preference should not make other supported states appear unavailable.

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
- `HANDOFF.md`
- `ACTIVE-CHANGE-LEDGER.md`
- `NAVIGATION-PAGE-STANDARD.md`
- applicable data-model/domain documents
