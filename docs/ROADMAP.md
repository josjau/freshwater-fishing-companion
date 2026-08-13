# Freshwater Fishing Companion

**Document:** ROADMAP.md  
**Document Revision:** 0.3.2  
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

**Next Selected Milestone — Planning In Progress**

Build the canonical Knot reference library and Knot Guide before expanding recommendation or persistent User Knowledge features.

The Knot milestone should establish:

- practical Version 1 knot library,
- beginner-oriented instructions,
- knot purpose and compatible line types,
- task-first beginner navigation,
- diagram/animation-first instructional media,
- search and navigation,
- connected relationships to Rigs and later Techniques/Recommendations,
- responsive/runtime validation,
- a first-time-angler **Reel & Line Setup** learning workflow that gets a conventional freshwater reel from unlined or replacement-line state to a fishable line system.

## Knot Instructional Media Direction

For Knots, project-owned diagrams and controlled animations are preferred over video.

Preferred order:

1. project-owned instructional diagram,
2. project-owned user-controlled step-through animation,
3. diagram and animation together when motion materially improves understanding,
4. external video only when the knot cannot be taught adequately with diagram/animation,
5. supplemental video may be approved as an exception for more advanced knots when hand position, tensioning, or motion is materially clearer in video.

Core Knots should have a complete non-video instructional path.

Animations should be user-controlled, should not autoplay, should remain understandable with motion disabled, and should support reduced-motion preferences.

## Reel & Line Setup — Approved V1 Direction

Reel & Line Setup is a first-class beginner workflow inside the Knots milestone, not merely an Arbor Knot article.

The endpoint is practical: take a reel that needs line and get the angler to a correctly spooled, usable line system ready to connect to a Rig.

Version 1 should support:

- new/empty reel setup,
- replacement-line setup,
- Spinning reels,
- Spincast reels,
- Baitcasting reels,
- an **I'm not sure** reel-identification path,
- simple reel-recognition help,
- Monofilament, Fluorocarbon, and Braid selection/identification,
- an **I'm not sure** line-identification path,
- basic beginner line-selection guidance when the angler does not already have line,
- species-based starting pound-test guidance,
- an all-around beginner recommendation when the user targets multiple common freshwater species,
- reel/rod compatibility checks,
- reel-type-aware backing decisions,
- Arbor Knot integration for spool attachment,
- approved beginner line-to-line Knot integration such as Double Uni where backing or leader connections require it,
- line-routing and reel-specific spooling instruction,
- proper winding tension and spool-fill guidance,
- optional leader connection,
- context-preserving navigation into canonical Knot instructions and back into Reel Setup,
- a final **Reel Ready** checkpoint with direct handoff to the Rig Guide.

The workflow should not require the angler to know technical fishing vocabulary before beginning.

### Beginner Line Guidance

When the angler does not already have line, Reel & Line Setup should provide enough guidance to make a confident first purchase or starting choice.

The beginner path may use target species and reel type to provide:

- recommended starting line type,
- recommended starting pound-test range,
- a simple beginner choice where appropriate,
- short plain-English reasoning,
- limitations or situations where heavier/lighter line may be needed.

This guidance is for **readiness**, not full fishing optimization.

Future What Should I Throw / Recommendation knowledge may later optimize line choices for cover, lure type, technique, abrasion, sensitivity, depth, presentation, and other conditions.

### How to Read Your Reel

Reel & Line Setup should include a small **How to Read Your Reel** section.

It should teach a beginner how to interpret line-capacity markings without assuming one manufacturer format.

The section should explain:

- how to find line-capacity markings on the reel/spool or manufacturer specifications,
- how to identify `lb`, `yd`, `m`, `mm`, Mono, and Braid labels,
- that pound-test values identify line strength while yard/meter values indicate approximate capacity for that line diameter,
- that manufacturer label order may vary and the printed units must be read rather than assumed,
- that reel/model-size numbers such as 1000, 2500, 3000, or 4000 are not themselves direct pound-test ratings,
- how to compare a beginner species-based line recommendation with the reel's actual capacity/rating,
- that an incompatible reel/line combination should trigger guidance to choose a compatible line or setup rather than silently proceed.

A simple labeled reel/spool diagram should support this explanation.

### Reel-Specific Scope Boundary

Spinning, Spincast, and Baitcasting should each receive complete line-installation/replacement guidance appropriate to their design.

Baitcasting Reel & Line Setup should cover correct spooling only. Detailed brake tuning, spool-tension tuning, backlash prevention, lure-weight configuration, and casting instruction remain outside this workflow and belong to later learning/Technique content.

Fly reels are not part of Version 1.

### Backing and Line-System Guidance

Backing guidance must be reel-type-aware rather than reduced to a universal braid rule.

The workflow should explain the line system visually:

- without backing: Reel spool → Main line → optional leader → Rig,
- with backing: Reel spool → Backing → Main line → optional leader → Rig.

When backing is appropriate, the workflow should explain what backing is, why it is being used, how it attaches to the spool, how it connects to the main line, and how the user returns to the Reel Setup workflow after viewing the relevant canonical Knot instructions.

### Approved Scope Boundary

Reel & Line Setup owns enough line-selection guidance to get a beginner fishable.

It does not own full fishing optimization.

Excluded from this workflow:

- fly reels and fly-line-specific setup,
- detailed baitcaster brake/casting instruction,
- advanced reel maintenance or repair,
- exhaustive line-selection optimization by technique/cover/lure,
- product-specific setup beyond directing the user to manufacturer guidance when reel design requires it.

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
