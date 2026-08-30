# Freshwater Fishing Companion — Active Change Ledger

**Document:** ACTIVE-CHANGE-LEDGER.md  
**Document Revision:** 1.10.9  
**Document Status:** Approved  
**Role:** Single formal GitHub owner of material non-closed carry-forward items  
**Reconciliation Baseline:** `38a974ce00560ac575ef0ebb9b706510d549b43c`  
**Last Updated:** 2026-08-29

# Purpose

This ledger keeps every material non-closed project item visible until it receives an explicit terminal disposition.

It does not duplicate full design reasoning. Each entry identifies the current status, the controlling detailed owner/gate, and the required next action.

GitHub `main` owns committed formal state. Google Drive `Working Source/Current` owns all approved uncommitted repository changes against its recorded GitHub baseline; `WORKING_STATE.md` owns compact live workstream/resume context. The former large Google Working State is retired as source authority.

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

# Tackle Open Design

| ID | Status | Item | Canonical detail / gate | Next action |
|---|---|---|---|---|
| TACKLE-004 | OPEN | Tackle-root `Check Rig Readiness` placeholder | D020 + Tackle/My Tackle milestone | Remove, rename/redefine as a secondary aggregate view, or explicitly approve; do not auto-build a separate primary readiness page. |

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
| GATE-001 | BLOCKED — B FOLLOW-UP REPAIR / RUNTIME RE-REVIEW PENDING | Technique domain + intrinsic compatibility participation | The second B browser review is PARTIAL PASS. Conditions/Direct-Tie/Fish/popover follow-up repair is staged and targeted PASS; served tutorial playback mechanism is confirmed. Tube Jig tutorial replacement is implemented using the user-preferred Arcasting video `FqlK7rqk5E4`. Do not begin C until the repaired runtime re-review passes. After PASS, implement RP-C1–RP-C4. Canonical owners: D003/D024/D056/D069 + `data-model/03A-TECHNIQUES.md` / `09-RELATIONSHIPS.md`. |
| GATE-002 | REQUIRED / BLOCKED ON B RUNTIME RE-REVIEW | Recommendation Prerequisites Foundation | Production is active on committed baseline `38a974ce`. The follow-up Conditions pilot now stages 35 canonical records, Direct-Tie configuration-specific Best For/Good Conditions, Fish Condition reference presentation, Light/Heavy Cover support, validated Beginner+ placement for the two new Rigs, and shared popover scroll containment/centering. Targeted checks pass. Tube Jig tutorial replacement is complete; browser re-review remains before C. Full Repository Integrity/final combined closeout remain pending. Umbrella owner: `workstreams/RECOMMENDATION-PREREQUISITES-FOUNDATION.md` + D069. |
| GATE-003 | BLOCKED — FOLLOW-UP REPAIR STAGED / RUNTIME RE-REVIEW PENDING | Lure/Bait Reference domain | The second browser review accepted the repaired Lure/Bait component UI and all seven affected Rig presentations. Follow-up staging now differentiates Direct-Tie Best For/Good Conditions per lure and repairs shared popover behavior. Served GitHub playback confirms embeds work; the Tube Jig tutorial content defect is repaired with the user-preferred Arcasting physical-rigging tutorial (`FqlK7rqk5E4`). Fish→Direct-Tie Inline Spinner remains a preserve target. Full Repository Integrity/final combined closeout remains pending. |
| GATE-004 | BLOCKED | What Should I Throw production | Phase 0 planning complete under D069; resume recommendation engine/UX only after Recommendation Prerequisites Foundation (Conditions → Lure/Bait → Techniques/Compatibility) → User Data → scoped My Tackle Availability gates. |
| GATE-005 | DEFERRED TO NAMED GATE | Tackle Reference / Find Tackle | Later roadmap milestone after the recommendation prerequisite path unless a direct dependency is demonstrated. |
| GATE-006 | REQUIRED | Settings / User Data Architecture | After Recommendation Prerequisites Foundation and before authoritative My Tackle; settle user/profile identity, retention, persistence, migration, backup/restore, device transfer, preference ownership, and ownership-vs-current-availability semantics under D067/D069. |
| GATE-007 | REQUIRED | My Tackle Availability Foundation | After User Data gate and before What Should I Throw production; implement only the authoritative ownership/current-availability and recommendation-matching scope required by D069. |
| GATE-008 | DEFERRED TO NAMED GATE | Catch Log | After the settled User Data/My Tackle foundation and later roadmap progression. |
| GATE-009 | DEFERRED TO NAMED GATE | Global Search | After major searchable domains are stable. |
| GATE-010 | PARKED | Favorites final keep/replace/remove decision | Near project completion. |
| GATE-011 | DEFERRED TO NAMED GATE | Multi-theme support | Settings / User Preferences gate. |
| GATE-012 | REQUIRED | Repository Disaster Recovery / Reconstruction | D064; implement and validate before major Version 1 release or before irreplaceable User Knowledge enters scope, whichever comes first. Not a current Fish blocker. |
| GATE-013 | DEFERRED TO NAMED GATE | Reusable Rig alternate-terminal configuration modeling | D065 + `data-model/03-RIGS.md`; revisit when a user workflow requires mutually exclusive component/assembly/readiness branches within one Rig or another Rig demonstrates the same reusable need. |

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

# Recommendation Prerequisites — Active Runtime Repair

| ID | Status | Item | Canonical detail / gate | Next action |
|---|---|---|---|---|
| RP-B-RUNTIME-001 | BLOCKED / REPAIR STAGED — RE-REVIEW REQUIRED | Subphase B user runtime review defects | `workstreams/RECOMMENDATION-PREREQUISITES-FOUNDATION.md`, `data-model/03-RIGS.md`, `03C-LURES-BAIT.md`, `03B-CONDITIONS.md` | Bounded repair staged 2026-08-29; targeted static/data validation PASS. Run the second browser review and do not start C before runtime PASS. |


## Recommendation Prerequisites Foundation — Second Runtime Review Carry-Forward (2026-08-29)

Status: **OPEN / BLOCKING SUBPHASE C**.

Second browser review accepted the refined Direct-Tie selector and reported Inline Spinner, Spinnerbait, Crankbait, Jerkbait, Spoon, Weighted Swimbait Hook Rig, and Tube Jig Rig as looking good. The bounded follow-up repair is now **STAGED / TARGETED PASS**:

- Rig **Best For** labels are tightened for Direct-Tie configurations and the two new Rigs;
- Direct-Tie Good Conditions are configuration-specific rather than repeated;
- canonical Light Cover and Heavy Cover were added within the approved Cover / Structure category, bringing Conditions to 35 records;
- supported Fish habitat/waterbody labels now open the shared Condition reference without creating Fish↔Condition relationships; ambiguous/non-equivalent Fish labels remain plain;
- Condition/reference popovers now center in the viewport, contain their own scrolling, lock the underlying page, and restore the prior page position on close;
- Weighted Swimbait Hook Rig and Tube Jig Rig were validated and remain **Beginner+**;
- served GitHub playback confirms the current Weighted Swimbait Hook and Tube Jig embeds load;
- **Tube Jig tutorial content is REPAIRED** with *How to use a tube jig* by Arcasting (`FqlK7rqk5E4`), selected by the user as the preferred generic physical-rigging tutorial;
- preserve passing Direct-Tie/Fish navigation and accepted Rig presentations.
