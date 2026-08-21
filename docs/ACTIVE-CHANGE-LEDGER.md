# Freshwater Fishing Companion — Active Change Ledger

**Document:** ACTIVE-CHANGE-LEDGER.md  
**Document Revision:** 1.0.4  
**Document Status:** Approved  
**Role:** Single formal GitHub owner of material non-closed carry-forward items  
**Reconciliation Baseline:** `2f7c6ea41157ca68142575f8696525dc993f19f9`  
**Last Updated:** 2026-08-21

# Purpose

This ledger keeps every material non-closed project item visible until it receives an explicit terminal disposition.

It does not duplicate full design reasoning. Each entry identifies the current status, the controlling detailed owner/gate, and the required next action.

GitHub `main` owns formal state. The Google Drive Working State may contain newer in-progress delta between formal GitHub checkpoints; durable changes must be reconciled back here at the next formal checkpoint.

# Status Vocabulary

- **OPEN** — unresolved decision/action requires discussion or work.
- **APPROVED / PENDING IMPLEMENTATION** — direction is settled; implementation remains.
- **IMPLEMENTED / PENDING VALIDATION** — change landed but required validation/closeout remains.
- **DEFERRED TO NAMED GATE** — intentionally waits for a specific architecture/product gate.
- **PARKED** — valid possible future item; not required now.
- **REQUIRED** — applicable gate cannot pass without it.
- **BLOCKED** — dependent work may not proceed until named conditions close.

Closed, superseded, rejected, and deliberate non-action items are not maintained here unless temporarily needed to explain an active dependency. Their provenance remains in decisions, closed workstreams, archive, Changelog, Milestones, and Git history.

# Cross-Domain UX / Source Follow-Ups

| ID | Status | Item | Canonical detail / gate | Next action |
|---|---|---|---|---|
| UX-001 | APPROVED / PENDING IMPLEMENTATION | Site-wide context-preserving Parent navigation (D051) | D051, `NAVIGATION-PAGE-STANDARD.md` | Implement/reconcile broader routing; validate nested navigation, restored view/query/filter/scroll, Reel Setup interactions, narrow viewport, keyboard/focus. |
| UX-002 | DEFERRED TO NAMED GATE | Scoped search helper/example alignment | Next deliberate Rig/Knot search-presentation edit | Align helper/example text with eligible subset; do not open unrelated source solely for this wording fix. |
| UX-004 | DEFERRED TO NAMED GATE | Dashboard / Global Search entry point | Roadmap Global Search milestone | Define cross-domain scope, grouping, ranking/ambiguity, and presentation; avoid indiscriminate result dump. |
| UX-005 | DEFERRED TO NAMED GATE | Compact detail density outside Rigs | Domain-specific review | Reuse only after the target domain demonstrates the Rig density pattern fits. |
| UX-006 | PARKED | Technically verified local Rig visual library | Rig/media future quality gate | Use licensed/verified/manual/reference-grounded media only; generated finished/build-step Rig imagery remains prohibited. |
| UX-007 | APPROVED / PENDING IMPLEMENTATION | Four-State Rig adequacy audit | D027 + future regional audit | At relevant Rig/Fish review, identify materially missing Four-State methods without invalidating existing 20 Rigs. |
| UX-008 | DEFERRED TO NAMED GATE | Package-era source headers such as `REPLACEMENT` | Next deliberate edit to an affected permanent source file | Remove obsolete package-era header language when that file is next intentionally edited; do not create unrelated source churn solely for comments. |

# Regulations / Tackle Open Design

| ID | Status | Item | Canonical detail / gate | Next action |
|---|---|---|---|---|
| REG-001 | OPEN | Four-State Regulations entry strategy | Regulations product/design gate | Decide external multi-state gateway vs in-app hub, state selection/saved region, official OK/KS/MO/AR destinations, freshness, Fish Detail gateway, and privacy/location assumptions. |
| TACKLE-004 | OPEN | Tackle-root `Check Rig Readiness` placeholder | D020 + Tackle/My Tackle milestone | Remove, rename/redefine as a secondary aggregate view, or explicitly approve; do not auto-build a separate primary readiness page. |

# Fish Guide Phase 0 — Active

| ID | Status | Item | Canonical detail / gate | Next action |
|---|---|---|---|---|
| FISH-001 | OPEN | Identification relationship ID convention | Fish Phase 0 | Approve deterministic stable IDs plus duplicate/reversed-pair validation. |
| FISH-002 | OPEN | Fish-to-Rig guidance optionality/source/IDs | Fish Phase 0 | Decide requiredness, source file name, and guidance-record ID convention. |
| FISH-003 | OPEN | Fish activation / staged-release readiness | Fish Phase 0 | Decide whether V1 inclusion and runtime `isActive` need separate readiness semantics. |
| FISH-004 | OPEN | Fish media implementation contract | Fish Phase 0 + MEDIA_GUIDE | Decide role requiredness, attribution null/absence semantics, stable media/file naming, alt text, derivatives. |
| FISH-005 | APPROVED / PENDING IMPLEMENTATION | Four-State reconciliation outside Fish | D057 + domain-specific gates | Do additive adequacy review when each downstream domain is deliberately reviewed; do not re-decide project-wide Four-State principle. |
| FISH-006 | OPEN | Fish reference-source documentation + integrity validation | Fish Phase 0 | Define source evidence, regional inclusion evidence, taxonomy/ID/habitat sourcing, and repeatable Fish integrity checks. |
| FISH-007 | REQUIRED | Close Fish Block 0.7 / Phase 0 | Fish Phase 0 | Resolve/park FISH-001–006, reconcile docs, close Phase 0 before production. |
| FISH-008 | APPROVED / PENDING IMPLEMENTATION | Locked Fish production architecture | D057–D061 + Fish workstream | Implement only after Phase 0 closes. |
| FISH-009 | APPROVED / PENDING IMPLEMENTATION | Locked Fish UX | Fish workstream + D051 | Implement landing/search/compare/browse/detail identification-first UX after Phase 0 closes. |
| FISH-010 | DEFERRED TO NAMED GATE | Fish-to-Lure / advanced recommendation detail | What Should I Throw | Keep contextual lure/color/retrieve/weather/season/clarity/cover/depth optimization out of canonical Fish. |
| FISH-011 | DEFERRED / NOT AUTOMATIC IMPLEMENTATION | Deferred Fish candidates outside V1 | Future explicit scope/evidence | Do not treat excluded candidates as unfinished V1 work. |

# Named Future Architecture / Product Gates

| ID | Status | Item | Trigger / owner |
|---|---|---|---|
| GATE-001 | DEFERRED TO NAMED GATE | Technique architecture and Rig↔Technique relationship ownership | Technique implementation gate; D003/D024/D056. |
| GATE-002 | APPROVED / PENDING IMPLEMENTATION | Conditions domain | Revalidate before What Should I Throw. |
| GATE-003 | DEFERRED TO NAMED GATE | Separate Lures domain | Revalidate at Lure/Tackle/Recommendation architecture gate. |
| GATE-004 | DEFERRED TO NAMED GATE | What Should I Throw | Roadmap milestone after Fish. |
| GATE-005 | DEFERRED TO NAMED GATE | Tackle Reference / Find Tackle | Roadmap milestone after recommendations. |
| GATE-006 | REQUIRED | Settings / User Data Architecture | Before persistent My Tackle or Catch Log. |
| GATE-007 | DEFERRED TO NAMED GATE | My Tackle | After User Data gate. |
| GATE-008 | DEFERRED TO NAMED GATE | Catch Log | After User Data gate / My Tackle. |
| GATE-009 | DEFERRED TO NAMED GATE | Global Search | After major searchable domains are stable. |
| GATE-010 | PARKED | Favorites final keep/replace/remove decision | Near project completion. |
| GATE-011 | DEFERRED TO NAMED GATE | Multi-theme support | Settings / User Preferences gate. |

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
7. Working State updates may precede this file during an active session, but formal checkpointing must reconcile material delta back into this ledger.
