# Freshwater Fishing Companion — Working State

**Document:** WORKING_STATE.md  
**Document Revision:** 1.6.1  
**Document Status:** Approved — Active Repository Continuity Record  
**Workstream Status:** Regulations Phase 0 — READY TO BEGIN; Workflow Performance Refactor CLOSED  
**Wave 4 Source Baseline:** `fb951a18bdd4c33681644d188a45f2926114158d`  
**Last Updated:** 2026-08-25

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

**Regulations — U.S. State Fishing Resource Gateway** is the current next product milestone.

- D066 owns the nationwide resource-gateway/geographic-exception decision.
- D067 preserves the later User Data architecture sequencing.
- `workstreams/REGULATIONS-PHASE-0.md` is the active planning owner.
- Phase 0 begins with research, architecture, information design, representative-state evidence, and production-wave planning.
- No production Regulations source/data is authorized until the Phase 0 completion gate is explicitly approved.

# Open Cross-Domain Carry-Forward

- UX-001: site-wide context-preserving Parent navigation remains approved/pending implementation under D051 / `UI_STANDARD.md`.
- UX-002: scoped-search helper/example alignment remains pending when affected search source is deliberately reopened.
- Rig `useCases[]` species-specific wording remains parked in `V1-DESIGN-AUDIT.md` under D056.
- UX-009 required final Version 1 site-wide design/mobile audit remains open.
- REG-001 / GATE-014 own Regulations Phase 0 planning.

# Exact Resume Point

1. Verify GitHub `main` is at the latest validated documentation closeout commit and Drive Current/Live Working State are reconciled to it.
2. Begin **Regulations Phase 0 — Discovery, Architecture & Information Design** from `workstreams/REGULATIONS-PHASE-0.md`.
3. Start with representative-state official-resource research: Oklahoma, Kansas, Missouri, Arkansas, plus structurally different states sufficient to test the normalized taxonomy/UX model.
4. Keep work research/architecture-only until the Phase 0 completion gate is approved; do not create production Regulations source/data yet.
5. Keep Fish Guide Version 1 closed and preserve all named cross-domain carry-forward items in the Active Change Ledger.
