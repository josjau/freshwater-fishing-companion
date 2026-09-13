# Freshwater Fishing Companion — Active Change Ledger

**Document:** ACTIVE-CHANGE-LEDGER.md  
**Document Revision:** 1.10.48  
**Document Status:** Approved  
**Role:** Single formal GitHub owner of material non-closed carry-forward items  
**Reconciliation Baseline:** GitHub `main` commit `6ee6917bba43ec6c0fa70f15528d750d34354d6a`  
**Last Updated:** 2026-09-13

# Purpose

This ledger keeps every material non-closed project item visible until it receives an explicit terminal disposition.

It does not duplicate full design reasoning. Each entry identifies the current status, the controlling detailed owner/gate, and the required next action.

GitHub `main` owns committed formal state. Google Drive `Working Source/Current` owns all approved uncommitted repository changes against its recorded GitHub baseline; `WORKING_STATE.md` owns compact repository workstream/resume context. The Live Working State is a compact operational manifest, not a source-authority mirror or historical journal.

# Status Vocabulary

- **OPEN** — unresolved decision/action requires discussion or work.
- **APPROVED / PENDING IMPLEMENTATION** — direction is settled; implementation remains.
- **IMPLEMENTED / APPROVED / PENDING COMMIT** — approved uncommitted implementation exists in Drive Current; final local validation and explicit commit/push authorization remain.
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
| UX-010 | DEFERRED TO NAMED GATE | My Tackle / Recommendation visual recognition examples | `V1-DESIGN-AUDIT.md` Section 15; settled GATE-007 + What Should I Throw / Recommendation UX | After My Tackle and Recommendation UX are sufficiently settled, define representative visual recognition for the approved Hook and Weight style vocabularies and evaluate whether the same shared pattern should extend to Lure/Bait or other My Tackle families. Do not turn the requirement into a commercial tackle catalog; no presentation mechanism is preselected. |

# Tackle Open Design

| ID | Status | Item | Canonical detail / gate | Next action |
|---|---|---|---|---|
| TACKLE-004 | OPEN | Tackle-root `Check Rig Readiness` placeholder | D020 + Tackle/My Tackle milestone | Remove, rename/redefine as a secondary aggregate view, or explicitly approve; do not auto-build a separate primary readiness page. |

# My Tackle / Recommendation Cross-Boundary Audit — 2026-09-07

The detailed issue owner is `data-model/05A-INVENTORY.md` under the 2026-09-07 cross-boundary gap-audit section. The rows below keep each material non-closed finding visible and assign the gate that must disposition it. These rows do not themselves approve the unresolved semantic choice.

| ID | Status | Item | Canonical detail / gate | Next action |
|---|---|---|---|---|
| G4-CAND | APPROVED / PENDING IMPLEMENTATION | Exact Recommendation candidate identity | GATE-004 / D069 | Implement the approved composite candidate identity: Rig + applicable configuration + applicable Lure/Bait + Technique + material normalized Recommendation parameters; keep context/rank/availability/legality/simplicity outside identity. |
| G4-EQUIP | APPROVED / PENDING IMPLEMENTATION | Candidate executability boundary | GATE-004 / D069; completed CA/G7-QTY/SETUP contracts | Implement Executable / Not Currently Executable / Executability Unconfirmed from effective confirmed availability; only Executable may compete for Best Currently Available. |
| G4-SIMPLE | APPROVED / PENDING IMPLEMENTATION | Beginner simplicity / experience behavior | GATE-004 / D069; canonical Rig `difficulty` + Core membership | Implement simplicity as a bounded near-tie ranking modifier after contextual suitability; do not infer Technique difficulty or create a user skill profile. |
| G4-LEGAL | APPROVED / PENDING IMPLEMENTATION | Legal/regulatory recommendation boundary | GATE-004 / D066/D069 | Implement Not Evaluated / No Known Blocking Constraint / Blocked by Known Constraint / Compliance Unconfirmed; current Regulations links remain resource navigation, not machine-readable legality authority. |
| G4-CTX | APPROVED / PENDING IMPLEMENTATION | Recommendation context freshness/session lifecycle | GATE-004 / D069 | Implement temporary device/session-local Recommendation Context with explicit activation/reuse, deterministic stale-result invalidation, same-session preservation, reset/reconfirmation boundaries, and no cross-device environmental-context synchronization. |

# Fish Guide — Production

Fish Guide Phase 0 and the Version 1 Fish production milestone are **CLOSED**. FISH-001 through FISH-009 are terminal historical items and are no longer active ledger entries. All 30 locked Version 1 Fish now use the approved production model with primary-identification media and complete source evidence; the approved 20-pair identification graph is complete.

| ID | Status | Item | Canonical detail / gate | Next action |
|---|---|---|---|---|
| FISH-010 | DEFERRED TO NAMED GATE | Fish-to-Lure / advanced recommendation detail | What Should I Throw production after prerequisite gates | Keep contextual lure/color/retrieve/weather/season/clarity/cover/depth optimization out of canonical Fish; implement through the next Decision Knowledge milestone rather than duplicating it into Fish. |
| FISH-011 | DEFERRED / NOT AUTOMATIC IMPLEMENTATION | Deferred Fish candidates outside V1 | Future explicit scope/evidence | Do not treat excluded candidates as unfinished Version 1 Fish work. |

# Regulations Maintenance

| ID | Status | Item | Canonical detail / gate | Next action |
|---|---|---|---|---|

# Named Future Architecture / Product Gates

| ID | Status | Item | Trigger / owner |
|---|---|---|---|
| GATE-004 | ACTIVE / REQUIRED | What Should I Throw production | Recommendation Prerequisites Foundation, GATE-006, and GATE-007 are CLOSED / PASS. GitHub `main` is `6ee6917bba43ec6c0fa70f15528d750d34354d6a`; all five G4 semantic checkpoints and planning-to-build documentation closeout are complete. The bounded Recommendation runtime foundation is LANDED / VERIFIED; Repository Integrity #124 and GitHub Pages #612 passed. Continue with authored Recommendation Decision Knowledge and ranking integration; G4 items remain APPROVED / PENDING IMPLEMENTATION until that integration completes. |
| GATE-005 | DEFERRED TO NAMED GATE | Tackle Reference / Find Tackle | Later roadmap milestone after the recommendation prerequisite path unless a direct dependency is demonstrated. |

| GATE-008 | DEFERRED TO NAMED GATE | Catch Log | After the settled User Data/My Tackle foundation and later roadmap progression. |
| GATE-009 | DEFERRED TO NAMED GATE | Global Search | After major searchable domains are stable. |
| GATE-010 | PARKED | Favorites final keep/replace/remove decision | Near project completion. |
| GATE-011 | APPROVED / PENDING IMPLEMENTATION | Multi-theme support | UD-11 Appearance is LOCKED / refinement allowed: Theme and Color Scheme are separate device-local settings; only production-approved/validated themes may be selectable. Forest Journal remains the current production baseline; Forest Copper/Gold/Legacy Dark remain candidates. Final Version 1 theme set and candidate promotion remain implementation/validation work. |
| GATE-012 | REQUIRED | Repository Disaster Recovery / Reconstruction | D064; implement and validate before major Version 1 release or before irreplaceable User Knowledge enters scope, whichever comes first. Not a current Fish blocker. |
| GATE-013 | DEFERRED TO NAMED GATE | Reusable Rig alternate-terminal configuration modeling | D065 + `data-model/03-RIGS.md`; revisit when a user workflow requires mutually exclusive component/assembly/readiness branches within one Rig or another Rig demonstrates the same reusable need. |

# Parking Lot — Deliberate Future Items

These items are not current blockers and must not be promoted merely because they remain visible:

- PARK-001 — Fly reels, fly-line setup, and fly-line-specific knot systems.
- PARK-002 — Detailed baitcaster brake/spool-tension/backlash/lure-weight/casting instruction.
- PARK-003 — Project-owned Knot diagrams/controlled animations as a quality improvement.
- PARK-004 — Heavy fuzzy Search, advanced typo tolerance, natural-language intent parsing.
- PARK-005 — Commercial ProductDefinition architecture, exhaustive manufacturer/product catalogs, SKU/UPC/retailer modeling, advanced size/style-aware readiness.
- PARK-006 — Automatic cloud-backup provider/service integration beyond the approved profile synchronization boundary; revisit only if recovery value justifies separate provider/privacy/maintenance scope.
- PARK-007 — AI fish identification, actual-size lure calibration, advanced/deep container hierarchy beyond the minimum GATE-007 Location-containment decision, trip planning, smart packing, online pricing, live weather, live regulation updates, family sharing, achievements.
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
