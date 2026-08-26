# Freshwater Fishing Companion — Working State

**Document:** WORKING_STATE.md  
**Document Revision:** 1.8.0  
**Document Status:** Approved — Active Repository Continuity Record  
**Workstream Status:** Regulations Phase 0 — CLOSED / PASS; Production Wave 1 — R3 APPROVED / COMMIT PREP  
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
- **Production Wave 1 — Architecture/UX Pilot R3** is implemented and user-approved in Drive Current for Oklahoma, Kansas, Missouri, Arkansas, California, Minnesota, Pennsylvania, and Texas.
- The approved candidate adds the internal Regulations route, 8 State records, 30 StateResource records, 1 active Arkansas StateNotice, deterministic Regulations validation, Regulations external-reference checking, and the monthly Regulations maintenance workflow.
- Wave 1 browser review passed state selection and outbound resource destinations. R3 visual review is approved, including the consolidated resource sections, shared multi-accent card treatment, Safety/Caution Special Alert treatment, responsibility-notice hierarchy, descriptive resource actions, Regulations as the first Important Dashboard card, and the retained divider/grid treatment.
- **Regulations Search is retained after Wave 1 review.** It accepts state name or two-letter abbreviation and remains useful as the selector grows; re-evaluate Search after a larger state set exists rather than removing it before Wave 2.
- Production commit/push remains a separate explicit authorization gate. GitHub `main` is still unchanged at the recorded baseline until that authorization is granted and the local commit is verified.

# Open Cross-Domain Carry-Forward

- UX-001: site-wide context-preserving Parent navigation remains approved/pending implementation under D051 / `UI_STANDARD.md`.
- UX-002: scoped-search helper/example alignment remains pending when affected search source is deliberately reopened.
- Rig `useCases[]` species-specific wording remains parked in `V1-DESIGN-AUDIT.md` under D056.
- UX-009 required final Version 1 site-wide design/mobile audit remains open.
- REG-001 / GATE-014 own the approved Regulations rollout; Wave 1 R3 is implemented/approved and awaiting final commit validation/authorization before Wave 2 begins.

# Exact Resume Point

1. Apply the final Wave 1 commit-prep ZIP over the verified local checkout based on GitHub `0949e7c8034ea5810ea9834470160c02f1fa56ed`.
2. Confirm the local diff contains only the approved Wave 1 production scope plus the targeted documentation reconciliation from this closeout step; no unrelated changes or deletions.
3. Run `node tools/validate_repository_integrity.js` in the real checkout and require PASS before commit.
4. Treat Wave 1 UX review as approved: state selection PASS, official resource destinations PASS, R3 visual/layout changes approved, divider/grid treatment retained, and Regulations Search retained for re-evaluation after a larger state set exists.
5. Obtain separate explicit production commit/push authorization before committing or pushing.
6. After authorization, commit locally, push to GitHub, verify the resulting GitHub SHA and required CI/workflow results, then perform only the minimum post-commit state/Changelog reconciliation.
7. After Wave 1 closeout, begin Wave 2 research/data lock for Alabama, Arizona, Colorado, Connecticut, Delaware, Florida, Georgia, and Idaho; do not reopen approved Wave 1 UX unless a later state exposes a genuine structural defect.
8. Keep Fish Guide Version 1 closed and preserve all other named cross-domain carry-forward items in the Active Change Ledger.
