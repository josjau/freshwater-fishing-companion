# Freshwater Fishing Companion

**Document:** ROADMAP.md  
**Document Revision:** 0.3.1  
**Document Status:** Approved  
**Last Updated:** 2026-08-12

# Purpose

This document defines the canonical planned development direction for Freshwater Fishing Companion. It does not override `DECISIONS.md`, `ARCHITECTURE.md`, or the current-state map in `HANDOFF.md`.

Features may move only through an explicit project decision. A new build segment does not begin until the current segment is finalized and validated.

# Development Philosophy

- Develop in coherent, testable segments.
- Plan twice and write/build once.
- Correctness before polish.
- Actual need before theoretical scale.
- One source of truth.
- Finish and validate the current segment before beginning the next.
- Resolve foundational User Knowledge storage questions before building features that depend on persistent user data.
- Prioritize practical first-time-angler blockers before advanced fishing specializations.

# Current Project State

## Complete Rig Guide

**Implementation Status: Validated / Finalized**

The approved initial 20-Rig regional library is complete and validated.

Current validated Rig/Tackle state:

- 20 active Rigs,
- 6 learning tiers,
- tier counts 6 / 3 / 4 / 4 / 2 / 1,
- unchanged six-member Core registry and order,
- 29 active canonical Tackle concepts,
- 29 active Tackle recognition-media records,
- final-tier tutorials, recognition media, readiness persistence, desktop layout, mobile-width layout, and console health validated.

Final workstream:

`workstreams/RIG-GUIDE-COMPLETION.md` revision 1.0.0

# Canonical Build Sequence After Rig Guide

The approved order is:

1. **Knots**
2. **Fish Guide**
3. **What Should I Throw**
4. **Tackle Reference / Find Tackle**
5. **Settings / User Data Architecture Gate**
6. **My Tackle**
7. **Catch Log**
8. **Global Search**
9. **Favorites final decision**

This sequence is deliberate. Do not skip forward into a later persistent-user-data feature before its architectural dependencies have been resolved.

# 1. Knots

**Next Selected Milestone**

Build the canonical Knot reference library and Knot Guide before expanding recommendation or persistent User Knowledge features.

The Knot milestone should establish:

- practical Version 1 knot library,
- beginner-oriented instructions,
- knot purpose and compatible line types,
- appropriate instructional media/tutorial strategy,
- search and navigation,
- connected relationships to Rigs and later Techniques/Recommendations,
- responsive/runtime validation,
- a first-time-angler **Reel & Line Setup** learning workflow that explains how to get an empty reel ready to fish.

The Reel & Line Setup workflow should cover the practical sequence, not just isolated knot definitions:

- choosing/confirming the main line,
- determining whether backing is needed,
- attaching line or backing to the reel spool with the Arbor Knot,
- connecting backing to braided main line with an approved beginner line-to-line knot such as the Double Uni,
- filling the spool appropriately,
- identifying when a leader connection is needed,
- linking directly into the relevant canonical Knot instructions.

The Version 1 knot discussion currently includes the Arbor Knot as a Core Knot because reel-spool attachment is a prerequisite to fishing, not an optional specialty task.

Fly fishing and fly-line-specific knot systems are **Parking Lot** for the initial build. Do not expand the first Knot milestone with Albright/Nail/fly-line workflows solely to cover advanced fly-fishing use cases.

Existing `data-model/04-KNOTS.md` is the starting design reference and must be reviewed against the current application architecture before production implementation begins.

# 2. Fish Guide

After Knots is finalized, expand the Fish Guide into a complete field-reference experience rather than only search/data foundation.

The Fish Guide milestone should deliberately review:

- supported regional Fish library and scope,
- identification-safe media,
- practical identification traits,
- similar-species navigation,
- habitat/waterbody/seasonal information,
- connected Rigs and later lure/recommendation relationships,
- regulation-resource pathways,
- current search behavior and detail-page UX.

Fish identification accuracy remains governed by the identification-safe media policy.

# 3. What Should I Throw

After the Fish Guide is finalized, build the primary Decision Knowledge recommendation experience.

The feature should answer the angler's practical question: **What should I throw here and now, and why?**

Recommendation outputs should connect canonical entities rather than duplicate their instructional content.

## Usage Tutorial Direction

Approved instructional ownership:

- **How to Rig It** links to the applicable canonical Rig and its validated build tutorial/instructions.
- **How to Fish It** links to the applicable canonical Technique and its reusable presentation/retrieve tutorial or instructions.
- Recommendation records select, rank, and explain; they do not duplicate Rig assembly or Technique presentation instructions.

This preserves the existing Rig/Technique ownership boundary while allowing What Should I Throw to provide a complete practical path from recommendation to setup to presentation.

Exact recommendation inputs, scoring, explanation format, Technique implementation requirements, and tutorial coverage will be finalized during the What Should I Throw design segment.

# 4. Tackle Reference / Find Tackle

Build a lightweight canonical Tackle discovery/reference experience after What Should I Throw.

This is **Reference Knowledge**, not My Tackle ownership and not a child feature owned exclusively by Rigs.

A user should be able to find a component without remembering which Rig uses it.

## Search Scope

Canonical Tackle search should support deliberate identity fields such as:

- canonical name,
- approved aliases,
- beginner/common terminology,
- category,
- approved search keywords.

## Tackle Result as a Knowledge Gateway

After identifying a Tackle concept, expose pertinent connected knowledge progressively, including where available:

- what the component is,
- recognition image/help,
- common variants,
- related Tackle,
- **Used In** Rigs derived from canonical Rig component requirements,
- compatible Fish/Conditions/Techniques when canonical relationships exist,
- later My Tackle ownership context.

Rig Guide, What Should I Throw, My Tackle, and future Global Search should all link to the same canonical Tackle identity/detail experience rather than create separate competing Tackle definitions.

# 5. Settings / User Data Architecture Gate

Before My Tackle or Catch Log implementation begins, conduct a dedicated architecture/design segment for persistent User Knowledge and Settings.

This gate must resolve at minimum:

- local persistence/storage technology,
- data retention behavior,
- behavior when browser/site data is cleared,
- application-update and schema-migration strategy,
- backup/export format,
- restore/import validation and rollback behavior,
- device-transfer expectations,
- user/profile identity model,
- single-user vs future multi-user boundaries,
- whether any synchronization/account model is required or explicitly deferred,
- which settings are device-local versus user-profile data,
- theme architecture and supported themes,
- other user preferences and their backup/restore behavior.

Current local-first architecture remains the baseline until an explicit architecture decision changes it.

Do not implement My Tackle or Catch Log against an assumed persistence model before this gate is closed.

# 6. My Tackle

Build My Tackle after the Settings/User Data architecture gate.

The existing approved principles remain:

- canonical Tackle defines functional type,
- My Tackle defines actual owned items,
- My Tackle becomes the only persistent ownership source of truth,
- Rig Readiness reads My Tackle,
- temporary availability never silently creates ownership,
- persistent ownership changes only through explicit My Tackle workflows,
- readiness answers buildability first; optimization comes later.

The detailed owned-item schema and storage implementation are intentionally deferred to the dedicated My Tackle design segment after the User Data architecture gate.

# 7. Catch Log

Build Catch Log after My Tackle so it can use the settled User Knowledge persistence architecture and stable relationships.

Catch records should reference canonical entities rather than duplicate Reference Knowledge wherever practical.

The Catch Log design segment must review:

- Fish/Rig/Lure/Technique references,
- optional My Tackle/Fishing Setup relationships,
- date/time and measurements,
- location/privacy model,
- notes,
- photo handling and storage implications,
- backup/restore behavior,
- migration/versioning requirements.

# 8. Global Search

Global Search is deliberately deferred until the major searchable domains and their canonical entity models are established.

The design should build on the existing relevance-first/connected-knowledge architecture rather than create an undifferentiated cross-domain result dump.

Expected searchable domains may include:

- Fish,
- Rigs,
- Knots,
- canonical Tackle,
- Lures,
- Techniques,
- What Should I Throw/recommendation entry points where appropriate.

Exact grouping, ranking across entity types, ambiguity handling, and Dashboard presentation remain a dedicated design discussion for this milestone.

# 9. Favorites Final Decision

Favorites remains **parked** rather than automatically implemented.

Near project completion, review whether a generic Favorites domain provides enough value after Search, recent/history behavior, My Tackle, Catch Log, connected knowledge, and recommendations exist.

Possible outcomes include:

- keep a generic Favorites feature,
- replace it with narrower saved concepts such as Saved Rigs, Go-To Lures, or Saved Recommendations,
- remove the feature if other workflows make it redundant.

Do not build Favorites solely because a placeholder currently exists in the application structure.

# Parking Lot

Intentionally deferred until demonstrated by actual need or a later milestone:

- fly fishing and fly-line-specific setup/knot systems,
- heavy fuzzy Search and advanced natural-language intent parsing,
- commercial ProductDefinition architecture,
- exhaustive manufacturer/product catalogs,
- SKU/UPC/retailer modeling,
- advanced size/style-aware readiness,
- cloud synchronization unless the User Data architecture gate explicitly approves it,
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
- achievement system.

# Out of Scope for Version 1

- Social networking
- Competitive leaderboards
- Marketplace functionality
- Subscription features
- Advertising

# Release / Segment Completion

A feature or segment is not complete merely because files were generated or staged.

Closeout requires, as applicable:

- Decisions finalized
- Implementation completed
- Testing/preflight completed
- Files pushed to GitHub
- Actual GitHub state verified
- Runtime/deployment validated
- All relevant documentation updated and validated

See `DEVELOPMENT_WORKFLOW.md`.

# Related Documents

- `HANDOFF.md`
- `MILESTONES.md`
- `PROJECT.md`
- `SPECIFICATION.md`
- `ARCHITECTURE.md`
- `DECISIONS.md`
- `DEVELOPMENT_WORKFLOW.md`
- `data-model/04-KNOTS.md`
- `data-model/02-FISH.md`
- `data-model/05-TACKLE.md`
- `data-model/07-USER-DATA.md`
- `data-model/08-BACKUP.md`
