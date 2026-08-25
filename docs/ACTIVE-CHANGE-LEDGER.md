# Freshwater Fishing Companion — Active Change Ledger

**Document:** ACTIVE-CHANGE-LEDGER.md  
**Document Revision:** 1.3.6  
**Document Status:** Approved  
**Role:** Single formal GitHub owner of material non-closed carry-forward items  
**Reconciliation Baseline:** `ee0149a81bab06c1f7650482ed30ffcc5111bfcd`  
**Last Updated:** 2026-08-25

# Purpose

This ledger keeps every material non-closed project item visible until it receives an explicit terminal disposition.

It does not duplicate full design reasoning. Each entry identifies the current status, the controlling detailed owner/gate, and the required next action.

GitHub `main` owns committed formal state. Google Drive `Working Source/Current` owns the exact approved uncommitted working tree; `WORKING_STATE.md` owns compact live workstream/resume context. The former large Google Working State is retired as active authority.

# Status Vocabulary

- **OPEN** — unresolved decision/action requires discussion or work.
- **APPROVED / PENDING IMPLEMENTATION** — direction is settled; implementation remains.
- **IMPLEMENTED / PENDING VALIDATION** — change landed but required validation/closeout remains.
- **DEFERRED TO NAMED GATE** — intentionally waits for a specific architecture/product gate.
- **PARKED** — valid possible future item; not required now.
- **REQUIRED** — applicable gate cannot pass without it.
- **BLOCKED** — dependent work may not proceed until named conditions close.

Closed, superseded, rejected, and deliberate non-action items are not maintained here unless temporarily needed to explain an active dependency. Their provenance remains in decisions, closed workstreams, archive, Changelog, Milestones, and Git history.

# Workflow Transition

No active transition item remains. WF-001 closed after repository continuity parity, GitHub verification, and retirement of Google as an active continuity source. Closure history is retained in `CHANGELOG.md`, D062, and Git history; receiving-computer onboarding is an operating rule rather than an active project gate.

# Cross-Domain UX / Source Follow-Ups

| ID | Status | Item | Canonical detail / gate | Next action |
|---|---|---|---|---|
| UX-001 | APPROVED / PENDING IMPLEMENTATION | Site-wide context-preserving Parent navigation (D051) | D051, `NAVIGATION-PAGE-STANDARD.md` | Implement/reconcile broader routing; validate nested navigation, restored view/query/filter/scroll, Reel Setup interactions, narrow viewport, keyboard/focus. |
| UX-002 | APPROVED / PENDING IMPLEMENTATION | Scoped search helper/example alignment | D061 + approved scoped-helper implementation standard | Replace the currently rejected scope-only Rig/Knot helper wording with curated beginner-useful examples that are mechanically validated to return at least one result in the exact collection where shown. No hard example-count limit. Implement when the affected search source is deliberately reopened. |
| UX-004 | DEFERRED TO NAMED GATE | Dashboard / Global Search entry point | Roadmap Global Search milestone | Define cross-domain scope, grouping, ranking/ambiguity, and presentation; avoid indiscriminate result dump. |
| UX-005 | DEFERRED TO NAMED GATE | Compact detail density outside Rigs | Domain-specific review | Reuse only after the target domain demonstrates the Rig density pattern fits. |
| UX-006 | PARKED | Technically verified local Rig visual library | Rig/media future quality gate | Use licensed/verified/manual/reference-grounded media only; generated finished/build-step Rig imagery remains prohibited. |
| UX-008 | DEFERRED TO NAMED GATE | Package-era source headers such as `REPLACEMENT` | Next deliberate edit to an affected permanent source file | Remove obsolete package-era header language when that file is next intentionally edited; do not create unrelated source churn solely for comments. |
| UX-009 | REQUIRED | Version 1 full site-wide design/mobile audit | `V1-DESIGN-AUDIT.md` | After Version 1 functional scope is sufficiently stable, execute the component-first site-wide audit, including the recorded Rig `useCases[]` species-applicability ownership defect under D056. Treat the approved native directional-glyph grammar and shared `font-weight: 800` navigation-arrow rule as established standards to verify, not redesign. Reconcile remaining inconsistent visual/link/container semantics and duplicated relationship semantics, then require PASS on an actual mobile device before Version 1 design is complete. |

# Regulations / Tackle Open Design

| ID | Status | Item | Canonical detail / gate | Next action |
|---|---|---|---|---|
| REG-001 | APPROVED / PENDING PLANNING | Contiguous-U.S. Regulations resource gateway | D066 + `workstreams/REGULATIONS-PHASE-0.md` | Execute Phase 0: validate state/resource taxonomy, official-resource/provenance/freshness model, selector/state-page UX, representative-state sample, and production-wave plan before source implementation. |
| TACKLE-004 | OPEN | Tackle-root `Check Rig Readiness` placeholder | D020 + Tackle/My Tackle milestone | Remove, rename/redefine as a secondary aggregate view, or explicitly approve; do not auto-build a separate primary readiness page. |

# Fish Guide — Production

Fish Guide Phase 0 and the Version 1 Fish production milestone are **CLOSED**. FISH-001 through FISH-009 are terminal historical items and are no longer active ledger entries. All 30 locked Version 1 Fish now use the approved production model with primary-identification media and complete source evidence; the approved 20-pair identification graph is complete.

| ID | Status | Item | Canonical detail / gate | Next action |
|---|---|---|---|---|
| FISH-010 | DEFERRED TO NAMED GATE | Fish-to-Lure / advanced recommendation detail | What Should I Throw | Keep contextual lure/color/retrieve/weather/season/clarity/cover/depth optimization out of canonical Fish; implement through the next Decision Knowledge milestone rather than duplicating it into Fish. |
| FISH-011 | DEFERRED / NOT AUTOMATIC IMPLEMENTATION | Deferred Fish candidates outside V1 | Future explicit scope/evidence | Do not treat excluded candidates as unfinished Version 1 Fish work. |

**Closed Wave 2 checkpoint:** Wave 2 source landed at `8399ae0cee0f5c4b9301041c904707430352bbd1` (`Fish - Walleye Sauger Refinement`). The final Compare Fish anatomical-alignment refinement landed at `d55cf21d7de0099c259de70ad5b113a4d78ea91d` (`Fish - Compare Card Refinement`) and was merged into `main` at `f47ece0d243457d90a8b980855130af043d98a05`. Final review approved the main Compare Fish page on desktop and mobile. Post-push verification confirmed the two refinement files match the approved review package, JavaScript syntax passes, CSS structure passes, and no source drift was detected. Wave 2 is **CLOSED**.

**Closed Wave 3 checkpoint:** Wave 3 source and user-facing implementation landed at `0b982bbbe10b0b2758759869e6682d6b6734475e` (`Fish - Wave 3 - Bass Final`). Final closeout documentation landed at `19b91b6303b3a3369f0c0a9dd6ac1018457d9b7f` (`Fish - Wave 3 - Closeout Documentation`). GitHub `main` was re-fetched and verified at that closeout baseline. All six processed images, 12 Fish-to-Rig recommendations, six Fish records, six deterministic comparison pairs, rights/provenance treatment, framing/centering, native Unicode `→`, and shared `font-weight: 800` navigation-arrow treatment are closed/validated. The historical workstream is retained under `../archive/workstreams/fish-guide/FISH-WAVE-3-BASS.md`. UX-008 remains active for other affected permanent source files when they are deliberately reopened.

**Closed Wave 4 / Fish Guide checkpoint:** Wave 4 source landed at `fb951a18bdd4c33681644d188a45f2926114158d` (`Fish - Wave 4 - Sunfish & Crappie Final`). The nine Sunfish & Crappie Fish, nine primary-identification assets, five deterministic comparison pairs, 9 Fish-to-Rig guidance records / 20 recommendations, Fish image-framing corrections, Compare Fish size/alignment corrections, and site-wide multi-accent comparison-card correction passed desktop and actual-mobile user review. GitHub Repository Integrity passed all 8 validation groups for the source commit. Wave 4 closes the locked 30-Fish Version 1 production migration and 20-pair identification graph. The historical package record is retained at `../archive/workstreams/fish-guide/FISH-WAVE-4-SUNFISH-CRAPPIE.md`. FISH-008/FISH-009 are terminal and removed from the active table.

# Named Future Architecture / Product Gates

| ID | Status | Item | Trigger / owner |
|---|---|---|---|
| GATE-001 | DEFERRED TO NAMED GATE | Technique architecture and Rig↔Technique relationship ownership | Technique implementation gate; D003/D024/D056. |
| GATE-002 | APPROVED / PENDING IMPLEMENTATION | Conditions domain | Revalidate before What Should I Throw. |
| GATE-003 | DEFERRED TO NAMED GATE | Separate Lures domain | Revalidate at Lure/Tackle/Recommendation architecture gate. |
| GATE-004 | APPROVED / PENDING IMPLEMENTATION | What Should I Throw | Roadmap milestone after Regulations closes. |
| GATE-005 | DEFERRED TO NAMED GATE | Tackle Reference / Find Tackle | Roadmap milestone after Settings / User Data Architecture closes under D067. |
| GATE-006 | REQUIRED | Settings / User Data Architecture | After What Should I Throw and before material Tackle Reference expansion, My Tackle, or Catch Log; must settle user/profile identity, retention, persistence, migration, backup/restore, device transfer, and preference ownership under D067. |
| GATE-007 | DEFERRED TO NAMED GATE | My Tackle | After User Data gate. |
| GATE-008 | DEFERRED TO NAMED GATE | Catch Log | After User Data gate / My Tackle. |
| GATE-009 | DEFERRED TO NAMED GATE | Global Search | After major searchable domains are stable. |
| GATE-010 | PARKED | Favorites final keep/replace/remove decision | Near project completion. |
| GATE-011 | DEFERRED TO NAMED GATE | Multi-theme support | Settings / User Preferences gate. |
| GATE-012 | REQUIRED | Repository Disaster Recovery / Reconstruction | D064; implement and validate before major Version 1 release or before irreplaceable User Knowledge enters scope, whichever comes first. Not a current Fish blocker. |
| GATE-013 | DEFERRED TO NAMED GATE | Reusable Rig alternate-terminal configuration modeling | D065 + `data-model/03-RIGS.md`; revisit when a user workflow requires mutually exclusive component/assembly/readiness branches within one Rig or another Rig demonstrates the same reusable need. |
| GATE-014 | APPROVED / PENDING PLANNING | Regulations — U.S. State Fishing Resource Gateway | Current next product milestone after Fish Guide closure; D066 / REG-001 / `workstreams/REGULATIONS-PHASE-0.md`. |

# Parking Lot — Deliberate Future Items

These items are not current blockers and must not be promoted merely because they remain visible:

- PARK-001 — Fly reels, fly-line setup, and fly-line-specific knot systems.
- PARK-002 — Detailed baitcaster brake/spool-tension/backlash/lure-weight/casting instruction.
- PARK-003 — Project-owned Knot diagrams/controlled animations as a quality improvement.
- PARK-004 — Heavy fuzzy Search, advanced typo tolerance, natural-language intent parsing.
- PARK-005 — Commercial ProductDefinition architecture, exhaustive manufacturer/product catalogs, SKU/UPC/retailer modeling, advanced size/style-aware readiness.
- PARK-006 — Cloud synchronization unless approved at User Data gate; automatic cloud backup providers.
- PARK-007 — AI fish identification, actual-size lure calibration, container hierarchy, trip planning, smart packing, online pricing, live weather, live regulation updates, family sharing, achievements.
- PARK-008 — Advanced Knots placeholder does not authorize a new canonical Advanced Knot build.
- PARK-009 — Optional barcode scanning.
- PARK-010 — More sophisticated analytics; telemetry requires separate explicit value/privacy approval.
- PARK-011 — Automatic shopping/retailer integration; revisit only with demonstrated need and explicit approval.

# Maintenance Rules

1. Every material non-closed item has one entry here until terminal disposition.
2. Detailed reasoning belongs in the canonical decision/domain/workstream owner; link/reference it here rather than duplicating it.
3. When an item closes, update the proper historical/landed-change owner as applicable and remove it from the active ledger only after closeout is validated.
4. PARKED/DEFERRED entries must retain a meaningful trigger/gate.
5. Placeholder UI does not create an implementation requirement.
6. Historical PASS/CLOSED records do not override later approved architecture.
7. Working State may record current-session delta first, but formal checkpointing must reconcile material non-closed items here and durable truth into the correct canonical owner.
8. Before every commit, every durable repository documentation file receives an explicit UPDATED or VERIFIED — NO CHANGE REQUIRED disposition; no applicable document may be silently skipped.
