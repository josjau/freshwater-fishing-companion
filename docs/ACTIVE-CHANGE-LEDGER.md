# Freshwater Fishing Companion — Active Change Ledger

**Document:** ACTIVE-CHANGE-LEDGER.md  
**Document Revision:** 1.3.8  
**Document Status:** Approved  
**Role:** Single formal GitHub owner of material non-closed carry-forward items  
**Reconciliation Baseline:** `4e982d84ab6207efacfafe4fa92682046c6240cb`  
**Last Updated:** 2026-08-25

# Purpose

This ledger keeps every material non-closed project item visible until it receives an explicit terminal disposition.

It does not duplicate full design reasoning. Each entry identifies the current status, the controlling detailed owner/gate, and the required next action.

GitHub `main` owns committed formal state. Google Drive `Working Source/Current` owns all approved uncommitted repository changes against its recorded GitHub baseline; `WORKING_STATE.md` owns compact live workstream/resume context. The former large Google Working State is retired as source authority.

# Status Vocabulary

- **OPEN** — unresolved decision/action requires discussion or work.
- **APPROVED / PENDING IMPLEMENTATION** — direction is settled; implementation remains.
- **IMPLEMENTED / PENDING VALIDATION** — change landed but required validation/closeout remains.
- **DEFERRED TO NAMED GATE** — intentionally waits for a specific architecture/product gate.
- **PARKED** — valid possible future item; not required now.
- **REQUIRED** — applicable gate cannot pass without it.
- **BLOCKED** — dependent work may not proceed until named conditions close.

Closed, superseded, rejected, and deliberate non-action items are not maintained here unless temporarily needed to explain an active dependency. Their provenance remains in decisions, closed workstreams, archive, Changelog, and Git history.

# Workflow Transition

No active workflow-transition item remains. The 2026-08-25 Workflow Performance Refactor is closed; D068 and the current workflow documents own the settled operating model. Closure history remains in `CHANGELOG.md`, D068, and Git history.

# Cross-Domain UX / Source Follow-Ups

| ID | Status | Item | Canonical detail / gate | Next action |
|---|---|---|---|---|
| UX-001 | APPROVED / PENDING IMPLEMENTATION | Site-wide context-preserving Parent navigation (D051) | D051, `UI_STANDARD.md` | Implement/reconcile broader routing; validate nested navigation, restored view/query/filter/scroll, Reel Setup interactions, narrow viewport, keyboard/focus. |
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
7. Live Working State may record active-cycle detail first, but durable checkpointing must reconcile material non-closed items here and durable truth into the correct canonical owner.
8. Before every commit, every durable repository documentation file receives an explicit UPDATED or VERIFIED — NO CHANGE REQUIRED disposition; no applicable document may be silently skipped.
