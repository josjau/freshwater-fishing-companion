# Freshwater Fishing Companion — Active Change Ledger

**Document:** ACTIVE-CHANGE-LEDGER.md  
**Document Revision:** 1.10.14  
**Document Status:** Approved  
**Role:** Single formal GitHub owner of material non-closed carry-forward items  
**Reconciliation Baseline:** `3b5e77f0772b306977edb0252d5f9004069318f7`  
**Last Updated:** 2026-08-30

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
| GATE-001 | IMPLEMENTED / APPROVED / PENDING COMMIT | Technique domain + intrinsic compatibility participation | Exact 16-Technique / 177-Compatibility implementation is staged in Drive Current; targeted validation and representative runtime review PASS, including Direct-Tie configuration-aware Technique intersection. Full local Repository Integrity and exact diff/scope review remain before commit. Canonical owners: D003/D024/D056/D069 + `data-model/03A-TECHNIQUES.md` / `09-RELATIONSHIPS.md` + active prerequisite workstream. |
| GATE-002 | REQUIRED / PRE-COMMIT CLOSEOUT | Recommendation Prerequisites Foundation | Subphase C implementation and representative runtime review PASS. Remaining gates are full local Repository Integrity, exact changed-file diff/scope approval, commit/push, and required GitHub CI/Pages verification before Foundation closeout. Umbrella owner: `workstreams/RECOMMENDATION-PREREQUISITES-FOUNDATION.md` + D069. |
| GATE-003 | CLOSED / PASS | Lure/Bait Reference domain | Subphase B is complete, committed on GitHub `3b5e77f…`, and Repository Integrity #104 / Pages #592 PASS. Preserve accepted Direct-Tie, Fish→Inline Spinner, knowledge-reference, and tutorial behavior while Subphase C is implemented. |
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
- **Tube Jig tutorial content was initially repaired** with the Arcasting candidate, then superseded after external-site playback was disabled; current Tube Jig tutorial is BassResource `EibSWhI6nbM`;
- preserve passing Direct-Tie/Fish navigation and accepted Rig presentations.


## Recommendation Prerequisites — Third Runtime Repair

**Status:** STAGED / TARGETED PASS / RUNTIME RE-REVIEW PENDING. Fish reference chips are now fully live without falsely promoting Fish-owned `Cold Water`, generic `Current`, or `Mud` into Conditions; Rig Good Conditions suppresses non-Condition legacy tags at presentation; chip spacing and Best For wording are compacted; Jerkbait tutorial remains intentionally absent; Spoon tutorial is `pLsX7nhM1qk`; Tube Jig tutorial is `EibSWhI6nbM`. Subphase C remains blocked pending browser acceptance.


## Recommendation Prerequisites Foundation — Third Runtime Review Carry-Forward (2026-08-29)

Status: **OPEN / BLOCKING SUBPHASE C**.

Accepted in the latest browser review:

- Condition/reference popover centering: **PASS**;
- popover internal scrolling/background-page lock: **PASS**;
- Tube Jig replacement tutorial `EibSWhI6nbM` (BassResource): **PASS / loads correctly**.

Remaining bounded UX blocker:

- Condition/Fish clickable knowledge-reference chips are too large; use the compact density demonstrated by `Use these knots for:` as the geometry reference;
- clickable knowledge chips require a distinct accent/background so they do not look like passive labels;
- static **Best For** labels remain neutral/non-interactive and visually distinct;
- tighten only residual Best For text that remains awkwardly long after the styling split.

The separate Version 1 Design Audit now carries the cross-Rig **Knots You'll Tie** attachment/application wording and grouping inconsistency.

**Next action:** bounded fourth Subphase B UX repair → targeted validation → browser re-review. Do not begin Subphase C.


## Recommendation Prerequisites Foundation — Subphase B Review 4 Acceptance (2026-08-30)

**Status:** PASS / SUBPHASE C NEXT.

- Review 4 knowledge-chip presentation repair approved.
- Clickable Condition/Fish knowledge-reference chips are visually distinct from passive Best For labels and use the accepted compact density.
- Previously accepted popover placement/scroll containment and Tube Jig served playback remain PASS.
- Subphase B is complete; next Foundation work is Subphase C — Techniques + Compatibility.
- New Version 1 UX Design Audit carry-forward: inventory every recurring element inside knowledge/reference cards and standardize formatting/interaction for semantically equivalent elements across card types. Preserve intentional semantic distinctions and document any justified differences.
- Existing Knots You'll Tie attachment/application consistency item remains open within the same UX audit.


## Recommendation Prerequisites Foundation — Subphase C Planning Closeout (2026-08-30)

**Status:** PLANNING CLOSED / PRODUCTION AUTHORIZED.

- C1–C3 approved; exact production scope is six source/runtime files.
- Technique scope is exactly 16 records with exact approved instructional copy in `03A-TECHNIQUES.md`.
- Compatibility scope is exactly 177 records: 54 Rig↔Lure/Bait, 69 Rig↔Technique, 54 Lure/Bait↔Technique, with exact pair sets in `09-RELATIONSHIPS.md`.
- B-01–B-05 count-only documentation defect is resolved by explicit exact 31-pair re-lock.
- C2 exact-content preservation defect is resolved by explicit replacement-content re-lock.
- Next action: Subphase C production implementation → targeted validation → representative six-Rig browser review → approval/commit/CI closeout.
