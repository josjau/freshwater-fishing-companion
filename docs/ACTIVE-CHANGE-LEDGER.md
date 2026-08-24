# Freshwater Fishing Companion — Active Change Ledger

**Document:** ACTIVE-CHANGE-LEDGER.md  
**Document Revision:** 1.1.0  
**Document Status:** Approved  
**Role:** Single formal GitHub owner of material non-closed carry-forward items  
**Reconciliation Baseline:** `ee0149a81bab06c1f7650482ed30ffcc5111bfcd`  
**Last Updated:** 2026-08-24

# Purpose

This ledger keeps every material non-closed project item visible until it receives an explicit terminal disposition.

It does not duplicate full design reasoning. Each entry identifies the current status, the controlling detailed owner/gate, and the required next action.

GitHub `main` owns formal state. Local `WORKING_STATE.md` owns the live local workstream/resume state. During the open workflow migration, the Google Drive Working State may contain newer migration delta; durable changes must be reconciled into the correct GitHub owner at the next formal checkpoint.

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

| ID | Status | Item | Canonical detail / gate | Next action |
|---|---|---|---|---|
| WF-001 | IMPLEMENTED / PENDING VALIDATION | Local repository Work/Codex continuity and cross-computer workflow transition | `WORKING_STATE.md`, `HANDOFF.md`, D062, `DEVELOPMENT_WORKFLOW.md` | Confirm the first-computer checkpoint—the commit containing `WORKING_STATE.md`—is verified on GitHub `main`; then, when the second computer is available, pull that checkpoint, confirm a clean matching checkout, and pass a fresh-chat repository-documentation-only recovery test. Only then close the transition and retire/freeze the Google Working State as the active continuity source. |

# Cross-Domain UX / Source Follow-Ups

| ID | Status | Item | Canonical detail / gate | Next action |
|---|---|---|---|---|
| UX-001 | APPROVED / PENDING IMPLEMENTATION | Site-wide context-preserving Parent navigation (D051) | D051, `NAVIGATION-PAGE-STANDARD.md` | Implement/reconcile broader routing; validate nested navigation, restored view/query/filter/scroll, Reel Setup interactions, narrow viewport, keyboard/focus. |
| UX-002 | APPROVED / PENDING IMPLEMENTATION | Scoped search helper/example alignment | D061 + approved scoped-helper implementation standard | Replace the currently rejected scope-only Rig/Knot helper wording with curated beginner-useful examples that are mechanically validated to return at least one result in the exact collection where shown. No hard example-count limit. Implement when the affected search source is deliberately reopened. |
| UX-004 | DEFERRED TO NAMED GATE | Dashboard / Global Search entry point | Roadmap Global Search milestone | Define cross-domain scope, grouping, ranking/ambiguity, and presentation; avoid indiscriminate result dump. |
| UX-005 | DEFERRED TO NAMED GATE | Compact detail density outside Rigs | Domain-specific review | Reuse only after the target domain demonstrates the Rig density pattern fits. |
| UX-006 | PARKED | Technically verified local Rig visual library | Rig/media future quality gate | Use licensed/verified/manual/reference-grounded media only; generated finished/build-step Rig imagery remains prohibited. |
| UX-008 | DEFERRED TO NAMED GATE | Package-era source headers such as `REPLACEMENT` | Next deliberate edit to an affected permanent source file | Remove obsolete package-era header language when that file is next intentionally edited; do not create unrelated source churn solely for comments. |
| UX-009 | REQUIRED | Version 1 full site-wide design/mobile audit | `V1-DESIGN-AUDIT.md` | After Version 1 functional scope is sufficiently stable, execute the component-first site-wide audit, reconcile inconsistent visual/link/container semantics, and require PASS on an actual mobile device before Version 1 design is considered complete. Continue recording cross-domain findings there during active builds rather than resolving them opportunistically. |

# Regulations / Tackle Open Design

| ID | Status | Item | Canonical detail / gate | Next action |
|---|---|---|---|---|
| REG-001 | OPEN | Four-State Regulations entry strategy | Regulations product/design gate | Decide external multi-state gateway vs in-app hub, state selection/saved region, official OK/KS/MO/AR destinations, freshness, Fish Detail gateway, and privacy/location assumptions. |
| TACKLE-004 | OPEN | Tackle-root `Check Rig Readiness` placeholder | D020 + Tackle/My Tackle milestone | Remove, rename/redefine as a secondary aggregate view, or explicitly approve; do not auto-build a separate primary readiness page. |

# Fish Guide — Production

Fish Guide Phase 0 is closed. FISH-001 through FISH-007 are terminal historical items and are no longer active ledger entries. Trout Production Package 1, Gar Production Package, Production Wave 1 (Common Carp + Freshwater Drum + Paddlefish), and Production Wave 2 (Walleye / Sauger + Catfish) are closed. Production Wave 3 — Bass is the next Fish package, but Fish work is paused until WF-001 closes.

| ID | Status | Item | Canonical detail / gate | Next action |
|---|---|---|---|---|
| FISH-008 | APPROVED / PENDING IMPLEMENTATION | Locked Fish production architecture — remaining library | D057–D061 + `data-model/02-FISH.md` + `data-model/09-RELATIONSHIPS.md` + `FISH_REFERENCE_SOURCES.md` | Begin Production Wave 3 — Bass. Re-fetch the current Bass records and governing Fish documents, verify Four-State inclusion/evidence, define the exact Bass package boundary, primary-identification media, pairwise identification relationships, and Fish-to-Rig guidance, then implement using the closed Wave 2 production pattern. After Bass, proceed with Sunfish & Crappie unless a genuine evidence/media/relationship/product decision requires a smaller boundary. |
| FISH-009 | APPROVED / PENDING IMPLEMENTATION | Locked Fish UX — remaining library | Fish Phase 0 archive + D051/D061 + validated Trout/Gar/Wave 1/Wave 2 presentation | Reuse the closed Wave 2 Fish presentation baseline for Bass: standardized Selection/Fish ID framing, transparent eligible Fish over `#f4f0e8`, responsive Compare Similar Fish behavior, anatomical body-axis alignment for dedicated Compare Fish, approved internal/external arrow treatments, plain-border information sections, and semantic Safety treatment. Mobile review remains part of the acceptance gate. |
| FISH-010 | DEFERRED TO NAMED GATE | Fish-to-Lure / advanced recommendation detail | What Should I Throw | Keep contextual lure/color/retrieve/weather/season/clarity/cover/depth optimization out of canonical Fish. |
| FISH-011 | DEFERRED / NOT AUTOMATIC IMPLEMENTATION | Deferred Fish candidates outside V1 | Future explicit scope/evidence | Do not treat excluded candidates as unfinished V1 work. |

**Closed Wave 2 checkpoint:** Wave 2 source landed at `8399ae0cee0f5c4b9301041c904707430352bbd1` (`Fish - Walleye Sauger Refinement`). The final Compare Fish anatomical-alignment refinement landed at `d55cf21d7de0099c259de70ad5b113a4d78ea91d` (`Fish - Compare Card Refinement`) and was merged into `main` at `f47ece0d243457d90a8b980855130af043d98a05`. Final review approved the main Compare Fish page on desktop and mobile. Post-push verification confirmed the two refinement files match the approved review package, JavaScript syntax passes, CSS structure passes, and no source drift was detected. Wave 2 is **CLOSED**. The active Fish production wave is **Wave 3 — Bass**.

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
7. Local Working State updates may precede this file during an active session, but formal checkpointing must reconcile material non-closed delta back into this ledger.
