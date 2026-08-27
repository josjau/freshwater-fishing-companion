# Freshwater Fishing Companion — Working State

**Document:** WORKING_STATE.md  
**Document Revision:** 1.10.0  
**Document Status:** Approved — Active Repository Continuity Record  
**Workstream Status:** Regulations Phase 0 — CLOSED / PASS; Production Waves 1–3 — CLOSED / PASS; Production Wave 4 — RESEARCH/DATA-LOCK PROPOSAL PREPARED / PENDING USER APPROVAL  
**Starting GitHub Baseline:** `aa8228fa00a2e977aba0b2667127c367d7d606df`  
**Last Updated:** 2026-08-26

# Purpose

This file is the single compact repository current-state and exact-resume entrypoint. It owns the active/next workstream, synchronization/validation state, unresolved gates, and exact resume point. Durable history and decision reasoning belong in their canonical owners.

# Authority Model

1. GitHub `main` is authoritative for committed production source, committed documentation, and formal history.
2. Google Drive `Working Source/Current` is the **complete editable repository working tree** and is authoritative for all approved uncommitted repository changes.
3. The Live Working State records active decisions, review-cycle identity, validation/approval status, defects, and detailed resume context; it is a hard operational gate and must be updated/read back after every material transition before dependent work continues.
4. Drive `Working Source/Packages` owns generated review/checkpoint/transport artifacts only; ZIPs are not working truth.
5. The local Git repository is the user validation/approval and final-commit surface when local review is required; it is not the cross-session authoritative uncommitted owner.
6. `ACTIVE-CHANGE-LEDGER.md` owns material non-closed carry-forward across workstreams.
7. ChatGPT Work is not part of the supported FCC workflow.
8. Chat history is context only.

# Workflow Performance Refactor — Closed

The workflow/documentation performance refactor is **CLOSED**.

- D068 owns the complete Drive working-tree model and normal-project-chat workflow.
- D062 remains preserved as superseded historical rationale only.
- `DECISIONS.md` is a compact index with six domain decision-body files under `docs/decisions/`.
- `DEVELOPMENT_WORKFLOW.md` owns authority/startup/general workflow and routes to three task procedures under `docs/workflow/`.
- `UI_STANDARD.md` is the single cross-domain UI/navigation/card/detail/search-interaction standard.
- `WORKING_STATE.md` is the single repository continuation entrypoint; separate Handoff documentation is no longer active.
- Retired glossary/Lure/Backup placeholder documents were consolidated into surviving data-model owners.
- R2 documentation consolidation landed at GitHub commit `4e982d84ab6207efacfafe4fa92682046c6240cb` with documentation/governance changes only and no production application files.
- Post-commit integrity review identified stale references/status text left by the consolidation; the bounded documentation correction that includes this file removes those references and completes closeout.
- Routine documentation/review/closeout targets remain generally <=10 minutes without weakening validation.

# Fish Guide Version 1 — Closed

Fish Guide Version 1 remains **PASS / FINALIZED / CLOSED** with 30 active Fish, 30 primary-identification media attachments, 20 identification comparison pairs, and the closed Wave 4 baseline. No Fish/product behavior changed during the workflow refactor.

# Current Product Work

**Regulations — U.S. State Fishing Resource Gateway** remains the current product milestone.

- D066 owns the nationwide resource-gateway/geographic-exception decision.
- D067 preserves the later User Data architecture sequencing.
- `workstreams/REGULATIONS-PHASE-0.md` is now **CLOSED / PASS** and owns the completed Phase 0 design/evidence/validation/wave baseline.
- Phase 0 approved the state-selector/state-page UX, normalized resource model, authority/provenance rules, freshness/maintenance/alerting architecture, representative-state evidence, validation gates, and six-wave 48-state production strategy.
- **Production Wave 1 — Architecture/UX Pilot R3** is **CLOSED / PASS** for Oklahoma, Kansas, Missouri, Arkansas, California, Minnesota, Pennsylvania, and Texas. Source commit: `7621d6172bed803558b206dbfca8784540346085` (`Regulations - Wave 1 Final`).
- **Production Wave 2** is **CLOSED / PASS** for Alabama, Arizona, Colorado, Connecticut, Delaware, Florida, Georgia, and Idaho. Cumulative coverage after Wave 2 is 16 states, 59 StateResource records, and 2 active StateNotice records. Wave 2 also established the approved mobile selector interaction: compact selector trigger -> contained vertical-only wheel popover -> Done/Cancel, while desktop retains the native selector.
- **Production Wave 3 is CLOSED / PASS** for Illinois, Indiana, Iowa, Kentucky, Louisiana, Maine, Maryland, and Massachusetts. It added 8 State records and 31 StateResource records with no new StateNotice records, bringing cumulative coverage to **24 states / 90 resources / 2 active notices**.
- Wave 3 moved the explanatory text beginning “Freshwater Fishing Companion links to official…” below the selector/action controls so actionable controls remain above the fold on mobile. The user approved the resulting state set and Review Build 1.
- Wave 3 source landed in commit `7e53d1ae83a6e60674cac4b99c202993cc30f8ef` and is present through merge commit `a6a03b202a5561a05a55a681883eaac5f45dc4a2`; Repository Integrity run #79 and GitHub Pages run #567 both passed. Subsequent closeout documentation advanced `main` to `aa8228fa00a2e977aba0b2667127c367d7d606df`.
- **Production Wave 4 research/data-lock proposal is prepared and awaiting user approval** for Michigan, Mississippi, Montana, Nebraska, Nevada, New Hampshire, New Jersey, and New Mexico. Proposed scope is 8 State records, 31 StateResource records, and 0 new StateNotice records; if approved, cumulative coverage becomes 32 states / 121 resources / 2 active notices. No Wave 4 production source/data write has occurred.
- Wave 4 startup exposed a continuity-control defect: the Google Live Working State had stopped at Wave 1 while repository state had advanced through Waves 2–3. The workflow guardrail is now being hardened so Live Working State update + readback is mandatory after material transitions and before dependent progression.
- **Regulations Search remains retained.** It accepts state name or two-letter abbreviation and continues to provide value as the selector grows.
- **Wave 4 carry-forward UX adjustment:** add a little more vertical spacing/padding above the moved explanatory text block. Do not reopen Wave 3 solely for this spacing adjustment; include it with Wave 4.
- **Wave 4 carry-forward navigation-state fix:** Home navigation must clear transient Regulations state, including search text, selected state, and any opened state-page selection. Returning to Regulations after Home should start from the default selector state rather than restoring the prior Regulations session.

# Open Cross-Domain Carry-Forward

- UX-001: site-wide context-preserving Parent navigation remains approved/pending implementation under D051 / `UI_STANDARD.md`.
- UX-002: scoped-search helper/example alignment remains pending when affected search source is deliberately reopened.
- Rig `useCases[]` species-specific wording remains parked in `V1-DESIGN-AUDIT.md` under D056.
- UX-009 required final Version 1 site-wide design/mobile audit remains open.
- REG-001 / GATE-014 continue to own the approved nationwide Regulations rollout. Waves 1–3 are CLOSED / PASS; Wave 4 data-lock approval is the next product gate.

# Exact Resume Point

1. Treat Regulations Production Wave 3 as **CLOSED / PASS**. Repository Integrity #79 and GitHub Pages #567 passed for the landed Wave 3 source; current GitHub `main` at this checkpoint is `aa8228fa00a2e977aba0b2667127c367d7d606df`.
2. The Wave 4 research/data-lock proposal is awaiting explicit user approval: Michigan, Mississippi, Montana, Nebraska, Nevada, New Hampshire, New Jersey, and New Mexico; proposed additions are 8 State records / 31 StateResource records / 0 StateNotice records.
3. The Live Working State continuity guardrail is approved: every material transition must be written to Live Working State and verified by readback before a dependent next action. Startup/session-end/closeout must block on stale or contradictory Live Working State.
4. After Wave 4 data-lock approval, checkpoint that approval in Live Working State and verify readback **before** production writing. Then implement the approved Wave 4 data plus the already-approved explanatory-text spacing refinement and REG-002 Home-navigation transient-state reset in Drive Current.
5. Validate Wave 4 cumulatively against the existing Regulations schema/provenance/freshness rules and affected navigation/rendering paths. Keep Regulations Search retained unless a later deliberate UX review changes that decision.
6. Preserve Fish Guide Version 1 and all other named cross-domain carry-forward items.
