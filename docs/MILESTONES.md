# Freshwater Fishing Companion

**Document:** MILESTONES.md  
**Document Revision:** 3.0.0  
**Document Status:** Approved  
**Maintenance Status:** FROZEN HISTORICAL RECORD  
**Frozen:** 2026-08-21  
**Last Updated:** 2026-08-21

# Purpose

This document preserves historical milestone completion context.

It is **not** a current-state owner and is no longer maintained as the project advances.

For current product direction use `ROADMAP.md`. For the exact formal continuation point use `HANDOFF.md`. For material non-closed work use `ACTIVE-CHANGE-LEDGER.md`. For current architecture and durable decisions use `ARCHITECTURE.md` and `DECISIONS.md`.

Historical milestone descriptions record what was validated at that time. Later architecture may supersede historical workflow, media, navigation, schema, or counts without rewriting the historical event.

Detailed package-level evidence remains in retained workstreams/archive/Git history.

# Historical Milestones

## Milestone 1 — Application Foundation

Completed foundation included:

- Dashboard,
- navigation,
- shared page renderer,
- initial application views,
- Forest Journal theme,
- runtime validation.

## MS2.1 — Fish Data Foundation

Historical completion included:

- canonical Fish data foundation,
- stable Fish IDs,
- initial Fish records,
- runtime data validation.

The later Fish Guide Phase 0 architecture substantially expands/supersedes the original seed scope. Historical seed completion does not mean the future Fish Guide milestone is complete.

## MS2.2 — Shared Search and Rendering Utilities

Historical completion included:

- shared search utilities,
- shared rendering utilities,
- application coordinator,
- console validation.

Later D022/D047/D050/D061 decisions govern current Search behavior.

## MS2.3 — Functional Fish Search

Historical completion included:

- Fish Search route,
- common/scientific/category search,
- reusable result cards,
- Parent/Home navigation,
- responsive validation.

Later architecture moved primary Fish Search to the Fish Guide landing page, adopted deterministic relevance ranking, and approved hierarchical scoped Search for the future Fish milestone.

## MS2.4 — Functional Rig Guide

Historical completion began with the initial Rig Guide foundation:

- canonical Rig data,
- beginner-focused Rig records,
- browse/search,
- Rig detail,
- component requirements,
- ordered assembly instructions,
- setup notes,
- mistakes/safety,
- navigation/error handling.

The later Complete Rig Guide milestone supersedes the initial library count while preserving this historical foundation.

## MS2.5 — Lightweight Tackle Readiness

Historical MS2.5 validated a dedicated local per-Rig readiness workflow.

Later architecture superseded the dedicated primary readiness route:

- D020 integrates readiness into Rig `What You Need`,
- D028 establishes future My Tackle as persistent ownership authority.

The transitional local readiness state remains implementation history rather than authoritative future ownership architecture.

## MS2.6 — Tackle References and Rig Visual Guides

Historical MS2.6 validated the early canonical Tackle/media infrastructure, contextual reference behavior, and generated Rig visual support.

Later architecture superseded generated finished/build-step Rig imagery:

- D017/D018/D045 make authoritative text the build source,
- D049/D053 govern verified tutorial/reference hierarchy,
- current Tackle recognition media follows `MEDIA_GUIDE.md`.

Historical generated media remains evidence of what existed then, not a current production requirement.

# Later Validated Workstreams / Milestones

## Current-State UX Repairs — Historical Completion

Validated changes included:

- clear `Coming Soon` unavailable-card semantics,
- explicit `Go to ODWC Regulations ↗` external destination semantics,
- restoration of approved Forest Journal Dashboard hierarchy/interaction behavior,
- regression checks for Fish Search, Rig browsing/detail, Tackle references, readiness, responsive/accessibility, and console health.

See historical workstream records and Git history for package-level evidence.

## Rig/Tackle Data Integrity — Batch 1 — Historical Completion

Validated architecture/implementation included:

- explicit `Rig.componentRequirements[].tackleId`,
- canonical Tackle display-name ownership,
- removal of duplicated Rig-side component names,
- removal of manual Tackle inverse `rigIds`,
- derived Tackle `Used In`,
- readiness compatibility with canonical Tackle IDs,
- documentation replacement-integrity safeguards.

## Core Rigs / Tackle Media / Rig Learning Tiers — Historical Completion

Validated evolution included:

- Rig Guide landing/global search plus scoped subset search,
- deterministic relevance ranking,
- explicit Search clear control,
- Core learning-path emphasis,
- Dashboard-derived section-card system,
- compact Rig detail treatment,
- sticky Parent/Home visual treatment,
- Texas Rig permitted tutorial pilot,
- expanded canonical Tackle concepts/media.

Historical Parent-to-top behavior from this period is superseded by later D051 context-preserving Parent architecture for standard application views.

## Beginner/Beginner+ Media Completion + Intermediate Rig Expansion — Historical Completion

Validated final state at this stage included:

- 13 active Rigs,
- 6 Beginner / 3 Beginner+ / 4 Intermediate,
- 23 canonical Tackle concepts/media records,
- completed Intermediate tier,
- build-first tutorial audit and corrections,
- Bobber Stop metadata correction,
- D053 Rig media completeness/tutorial audit,
- D054 Intermediate Rig membership.

## Complete Rig Guide — Validated / Finalized

The approved initial Rig Guide reached its final validated scope:

- 20 active canonical Rigs,
- 6 learning tiers,
- tier counts 6 / 3 / 4 / 4 / 2 / 1,
- unchanged six-member Core Rig registry/order,
- 29 active canonical Tackle concepts,
- 29 active Tackle recognition-media records,
- seven final-tier Rigs integrated,
- final-tier recognition media/tutorials validated,
- readiness persistence validated,
- desktop/mobile layout and console health validated,
- GitHub Pages deployed-artifact integrity validated.

Final Rig production correction commit preserved in Git history:

`4375ca3e05cfbfef6ab0a3e4662c2afd19b86f42` — `Rig Updates Images and tutorials`

The initial 20-Rig milestone is closed. Future Rig additions are enhancement/regional adequacy scope, not completion of the initial library.

## Knots — PASS / VALIDATED / FINALIZED / CLOSED

The completed Knots milestone includes:

- 10 active canonical Version 1 Knots,
- 6 Beginner / 4 Intermediate,
- four Core Knot IDs,
- all 20 active Rigs audited with 31 real tied `knotApplications` connections,
- task-first Knot Guide navigation,
- deterministic Knot search,
- canonical text tying instructions,
- verified instructional-media coverage for all 10 Knots,
- complete Reel & Line Setup for Spinning, Spincast, and Baitcasting,
- shared floating navigation,
- validated Rig ↔ Knot and Reel Setup ↔ Knot contextual paths,
- clickable Common Tasks, Rig usage, and Line Compatibility connected knowledge,
- minimal Line Type reference/detail routing,
- Dashboard priority order validated as Fish Guide, Knots, Rig Guide, Tackle,
- Tackle root/hub presentation validated,
- keyboard, narrow-viewport, and normal-navigation console validation.

Final validated production source baseline preserved in Git history:

`e7a00db6936eba2aa11277a1a4d923d5f2e7cb32` — `Knots - compact connected knowledge pills`

The Knots milestone is closed. Further Knot work is enhancement/defect scope unless a later milestone explicitly extends it.

# Historical Sequence at Freeze

At the time this record was frozen, the approved product ordering was:

1. Knots — completed/validated/closed.
2. Fish Guide.
3. What Should I Throw.
4. Tackle Reference / Find Tackle.
5. Settings / User Data Architecture Gate.
6. My Tackle.
7. Catch Log.
8. Global Search.
9. Favorites final decision.

This list is retained only as historical context at freeze. `ROADMAP.md` is the canonical current/future sequence owner.

# Historical Navigation Supersession

Some older milestone evidence validates Parent/Home top-reset behavior because that was the approved behavior at that time.

Later D051 governs current architecture for standard application views:

- Forward opens the destination at top.
- Parent restores the immediately preceding standard app context, applicable UI state, and prior scroll.
- Home opens Dashboard at top and clears contextual return state.

Specialized workflows such as Reel Setup may retain separately approved semantics.

# Freeze Rule

Do not append current workstream status, exact audit section, latest commit, resume instructions, or new milestone completion detail to this file.

New landed history belongs in `CHANGELOG.md`; formal current continuation belongs in `HANDOFF.md`; open work belongs in `ACTIVE-CHANGE-LEDGER.md`; detailed closeout evidence belongs in the applicable workstream/archive/Git history.
