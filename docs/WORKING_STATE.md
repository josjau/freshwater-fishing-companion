# Freshwater Fishing Companion — Working State

**Document:** WORKING_STATE.md  
**Document Revision:** 1.8.1  
**Document Status:** Approved — Active Repository Continuity Record  
**Workstream Status:** Regulations Phase 0 — CLOSED / PASS; Production Wave 1 — CLOSED / PASS; Production Wave 2 — READY FOR RESEARCH / DATA LOCK  
**Wave 4 Source Baseline:** `fb951a18bdd4c33681644d188a45f2926114158d`  
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
- The approved candidate adds the internal Regulations route, 8 State records, 30 StateResource records, 1 active Arkansas StateNotice, deterministic Regulations validation, Regulations external-reference checking, and the monthly Regulations maintenance workflow.
- Wave 1 desktop/browser and real-mobile review passed. Approved UX includes state selection, outbound official-resource destinations, consolidated resource sections, shared multi-accent card treatment, Safety/Caution Special Alert treatment, responsibility-notice hierarchy, descriptive resource actions, Regulations as the first Important Dashboard card, and the retained divider/grid treatment.
- **Regulations Search is retained after Wave 1 review.** It accepts state name or two-letter abbreviation and remains useful as the selector grows; re-evaluate Search after a larger state set exists rather than removing it before Wave 2.
- Wave 1 source validation is complete: the real checkout passed all 9 repository-integrity validation groups, GitHub Repository Integrity run #71 passed, and GitHub Pages deployment passed for the source commit. Wave 1 is closed; no Wave 1 defect remains open.

# Open Cross-Domain Carry-Forward

- UX-001: site-wide context-preserving Parent navigation remains approved/pending implementation under D051 / `UI_STANDARD.md`.
- UX-002: scoped-search helper/example alignment remains pending when affected search source is deliberately reopened.
- Rig `useCases[]` species-specific wording remains parked in `V1-DESIGN-AUDIT.md` under D056.
- UX-009 required final Version 1 site-wide design/mobile audit remains open.
- REG-001 / GATE-014 continue to own the approved nationwide Regulations rollout. Wave 1 is closed; Wave 2 is the next active production segment.

# Exact Resume Point

1. Treat Regulations Production Wave 1 as **CLOSED / PASS** at source commit `7621d6172bed803558b206dbfca8784540346085`; do not reopen its approved UX unless a later state exposes a genuine structural defect.
2. Begin **Production Wave 2 research/data lock** for Alabama, Arizona, Colorado, Connecticut, Delaware, Florida, Georgia, and Idaho.
3. Follow the established per-wave path: research official sources -> propose the Wave 2 data lock -> obtain approval -> write Drive Current -> cumulative validation/health check -> review only where needed -> commit/verify.
4. Keep Regulations Search retained; re-evaluate only after a larger state set exists.
5. Keep Fish Guide Version 1 closed and preserve all other named cross-domain carry-forward items in the Active Change Ledger.
