# Freshwater Fishing Companion — Working State

**Document:** WORKING_STATE.md  
**Document Revision:** 1.6.0  
**Document Status:** Approved — Active Repository Continuity Record  
**Workstream Status:** Workflow Performance Refactor — DRIVE IMPLEMENTATION COMPLETE / REVIEW PENDING; Regulations Phase 0 parked  
**Wave 4 Source Baseline:** `fb951a18bdd4c33681644d188a45f2926114158d`  
**Last Updated:** 2026-08-25

# Purpose

This file is a compact current-work record only. It owns the active/next repository workstream, synchronization/validation state, unresolved gates, and exact resume point. Durable history/decisions belong in their canonical owners.

# Authority Model

1. GitHub `main` is authoritative for committed production source, committed documentation, and formal history.
2. Google Drive `Working Source/Current` is the **complete editable repository working tree** and is authoritative for all approved uncommitted repository changes.
3. The Live Working State records active decisions, review-cycle identity, validation/approval status, and the exact resume point.
4. Drive `Working Source/Packages` owns generated review/checkpoint/transport artifacts only; ZIPs are not working truth.
5. Documentation has no direct-to-GitHub bypass path. Documentation-only commits retain standing authority after Drive-first edit/validation.
6. The local Git repository is the user validation/approval surface for review ZIPs; it is not the cross-session authoritative uncommitted owner.
7. ChatGPT Work is not part of the supported FCC workflow.
8. `HANDOFF.md` is the compact recovery entrypoint; `ACTIVE-CHANGE-LEDGER.md` owns material non-closed carry-forward. Chat history is context only.

# Workflow Performance Refactor — Drive Implementation Complete / Review Pending

The approved Drive working-tree implementation and documentation reconciliation are complete. The refactor remains open for review-package/local validation, approval, GitHub commit, and closeout.

- D068 owns the normal-project-chat workflow and performance standard and now reflects the complete Drive working-tree model.
- D062 remains preserved as the superseded ZIP-era operating model.
- `DECISIONS.md` is now a compact index with full decision bodies grouped under `docs/decisions/`; D001–D068 validate exactly once in both index and canonical bodies.
- `DEVELOPMENT_WORKFLOW.md` is now a compact entrypoint with task-specific procedures under `docs/workflow/`.
- Drive `Working Source/Current` is the persistent complete editable repository tree. The rejected GitHub-baseline-plus-Drive-delta model is not part of the workflow.
- Review ZIPs are generated from Drive `Current`, extracted over the user's local Git repo, reviewed, and iterated until approved.
- Review findings return to chat/Live Working State, then are reconciled into Drive before the next review ZIP.
- At final approval the local repository should already contain the approved source and documentation state except genuinely post-commit closeout statements.
- Routine documentation/review/closeout targets remain generally ≤10 minutes without weakening validation.

# Fish Guide Version 1 — Closed

Fish Guide Version 1 remains **PASS / FINALIZED / CLOSED** with 30 active Fish, 30 primary-identification media attachments, 20 identification comparison pairs, and the closed Wave 4 baseline. No Fish/product behavior changed during the workflow refactor.

# Durable Product Decisions Preserved

- **D066 — Nationwide Regulations Resource Gateway and Coverage Exception:** Regulations remains the next product milestone; initial scope is a state-first official-resource gateway for the 48 contiguous U.S. states without project-owned legal-rule interpretation.
- **D067 — User-Aware User Knowledge Architecture Before Tackle Expansion:** Settings / User Data Architecture remains ahead of Tackle Reference / Find Tackle after What Should I Throw.

# Open Cross-Domain Carry-Forward

- Rig `useCases[]` species-specific wording remains parked in `V1-DESIGN-AUDIT.md` under D056.
- UX-009 required final Version 1 site-wide design/mobile audit remains open.
- REG-001 / GATE-014 own Regulations Phase 0 planning.

# Exact Resume Point

1. Verify GitHub `main` remains `af3bffb9995d56f8b9e47236bbadfa481d88cc34` until the workflow documentation reconciliation is intentionally committed.
2. Treat Drive `Working Source/Current` as the complete editable repository working tree; the obsolete interim delta structure is archived.
3. Create the R1 workflow-refactor review ZIP from the 23-file documentation/workflow change set, preserving repository-relative paths and excluding `.git`.
4. Apply R1 to the clean local Git repository and review/validate the documentation changes. Iterate through Drive and cumulative review packages if corrections are required.
5. On approval, commit the reviewed local state to GitHub, verify the resulting SHA and exact changed-file set, then perform only genuinely post-commit closeout reconciliation.
6. Keep **Regulations Phase 0 — Discovery, Architecture & Information Design** parked until workflow-refactor closeout is complete.
