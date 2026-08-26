# Freshwater Fishing Companion — Working State

**Document:** WORKING_STATE.md  
**Document Revision:** 1.9.1  
**Document Status:** Approved — Active Repository Continuity Record  
**Workstream Status:** Regulations Phase 0 — CLOSED / PASS; Production Waves 1–2 — CLOSED / PASS; Production Wave 3 — IMPLEMENTED / APPROVED / PENDING POST-COMMIT VERIFICATION  
**Current GitHub Baseline:** `a6a03b202a5561a05a55a681883eaac5f45dc4a2`  
**Last Updated:** 2026-08-26

# Purpose

This file is the single compact repository current-state and exact-resume entrypoint. It owns the active/next workstream, synchronization/validation state, unresolved gates, and exact resume point. Durable history and decision reasoning belong in their canonical owners.

# Authority Model

1. GitHub `main` is authoritative for committed production source, committed documentation, and formal history.
2. Google Drive `Working Source/Current` is the **complete editable repository working tree** and is authoritative for all approved uncommitted repository changes.
3. The Live Working State records active decisions, review-cycle identity, validation/approval status, defects, and detailed resume context.
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
- **Production Wave 3 Review Build 1 is IMPLEMENTED / APPROVED** for Illinois, Indiana, Iowa, Kentucky, Louisiana, Maine, Maryland, and Massachusetts. It adds 8 State records and 31 StateResource records with no new StateNotice records, bringing cumulative coverage to **24 states / 90 resources / 2 active notices**.
- Wave 3 also moves the explanatory text beginning “Freshwater Fishing Companion links to official…” below the selector/action controls so actionable controls remain above the fold on mobile. The user approved the resulting state set and Review Build 1.
- Wave 3 source landed in commit `7e53d1ae83a6e60674cac4b99c202993cc30f8ef` (`Regulations - Phase 1 - Wave 3 - Review 1`) and is present on current GitHub `main` through merge commit `a6a03b202a5561a05a55a681883eaac5f45dc4a2`. Final Wave 3 closeout still requires post-commit Repository Integrity / GitHub Pages verification.
- **Regulations Search remains retained.** It accepts state name or two-letter abbreviation and continues to provide value as the selector grows.
- **Wave 4 carry-forward UX adjustment:** add a little more vertical spacing/padding above the moved explanatory text block. Do not reopen Wave 3 solely for this spacing adjustment; include it with Wave 4.
- **Wave 4 carry-forward navigation-state fix:** Home navigation must clear transient Regulations state, including search text, selected state, and any opened state-page selection. Returning to Regulations after Home should start from the default selector state rather than restoring the prior Regulations session.

# Open Cross-Domain Carry-Forward

- UX-001: site-wide context-preserving Parent navigation remains approved/pending implementation under D051 / `UI_STANDARD.md`.
- UX-002: scoped-search helper/example alignment remains pending when affected search source is deliberately reopened.
- Rig `useCases[]` species-specific wording remains parked in `V1-DESIGN-AUDIT.md` under D056.
- UX-009 required final Version 1 site-wide design/mobile audit remains open.
- REG-001 / GATE-014 continue to own the approved nationwide Regulations rollout. Waves 1–2 are closed; Wave 3 is implemented/approved and pending post-commit verification before Wave 4 begins.

# Exact Resume Point

1. Treat Wave 3 Review Build 1 as **approved and landed**: Illinois, Indiana, Iowa, Kentucky, Louisiana, Maine, Maryland, and Massachusetts; cumulative Regulations coverage is 24 states / 90 resources / 2 active notices.
2. Re-verify current GitHub `main` (expected close-session baseline `a6a03b202a5561a05a55a681883eaac5f45dc4a2`) and confirm required Repository Integrity and GitHub Pages checks for the landed Wave 3 source.
3. If those checks pass, close **Regulations Production Wave 3** without reopening its approved data/UX.
4. Begin **Production Wave 4 research/data lock** for Michigan, Mississippi, Montana, Nebraska, Nevada, New Hampshire, New Jersey, and New Mexico.
5. As part of Wave 4, add a little more spacing/padding above the explanatory text block beginning “Freshwater Fishing Companion links to official…”; the actionable selector controls already fit above the fold, so this is a presentation refinement only.
6. As part of Wave 4, make Home navigation reset transient Regulations state: clear the Regulations search text, selected state, and any opened state-page selection so a later return to Regulations starts from the default selector state.
7. Keep Regulations Search retained unless a later deliberate UX review changes that decision. Preserve Fish Guide Version 1 and all other named cross-domain carry-forward items.
