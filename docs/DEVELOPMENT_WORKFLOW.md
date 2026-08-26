# Freshwater Fishing Companion

**Document:** DEVELOPMENT_WORKFLOW.md  
**Document Revision:** 2.0.1  
**Document Status:** Approved  
**Role:** Compact canonical workflow entrypoint  
**Decision Baseline:** D014, D038-D041, D055, D068  
**Last Updated:** 2026-08-25

# Purpose

This file is the canonical entrypoint for Freshwater Fishing Companion workflow rules. It owns authority, startup/preflight, review-cycle identity, invalidation rules, and universal change control. Detailed task procedures live in the three files under `docs/workflow/`.

# Supported Execution Environment

Freshwater Fishing Companion operates in the **normal ChatGPT project/chat workflow** using connected Google Drive and GitHub capabilities.

**ChatGPT Work is not a supported project execution environment.** Do not make routine repository inspection, documentation editing, Drive working-state maintenance, staging/package preparation, GitHub reconciliation, closeout, or continuity dependent on Work-mode filesystem/shell/persistent-workspace behavior.

# Authority Chain

```text
Normal ChatGPT project chat
        ↓
Google Drive Working Source/Current
        ↓
GitHub main
```

- GitHub `main` owns committed truth and formal history.
- Drive `Working Source/Current` is the complete editable repository working tree and owns all approved uncommitted repository changes.
- The Live Working State owns active review-cycle identity, approvals/defects, validation state, and detailed resume context.
- `WORKING_STATE.md` is the single compact repository current-state/exact-resume entrypoint.
- `ACTIVE-CHANGE-LEDGER.md` owns material non-closed carry-forward across workstreams.
- Drive `Working Source/Packages` owns review/checkpoint/transport artifacts only; packages are not working truth.
- Chat history is context only.

# Startup / Preflight

Before substantive work:

1. Verify current GitHub `main` SHA.
2. Read `WORKING_STATE.md`; consult `ACTIVE-CHANGE-LEDGER.md` when open/deferred carry-forward may affect scope.
3. Verify Drive `Working Source/Current` is the complete working tree and read the Live Working State for active review-cycle identity/resume detail.
4. Load only the workflow, decision, domain, media, UI, source, or workstream owners material to the requested scope.
5. Compare the recorded resume point and lineage with actual GitHub/Drive state.
6. If the authority/lineage checks pass, continue with targeted work. Broaden reconstruction only when an invalidation condition below applies.

# Review-Cycle Identity

Track only the lineage needed to prove what state is under review:

- workstream;
- starting GitHub SHA;
- review revision;
- package identity/hash when a package exists;
- cumulative changed-file set;
- deletion set;
- validation state;
- approval state;
- production-write/commit authorization state where applicable;
- final GitHub SHA after landing.

A review ZIP is a transport/review snapshot generated from Drive Current, not a second authority layer.

# Baseline Invalidation

Broader baseline reconstruction/reconciliation is required when one or more of these occurs:

- GitHub `main` changed unexpectedly relative to the recorded starting SHA;
- Drive Current is missing, incomplete, or no longer proves the expected full-tree state;
- review revision/package/hash/changed-file/deletion-set lineage is contradictory or unprovable;
- unexplained local repository changes appear during a local review cycle;
- expected files are missing, unexpected files appear, or authority between GitHub/Drive is ambiguous;
- validation exposes structural corruption, stale ownership/pathing, or a scope expansion that invalidates prior checks.

Absent an invalidation condition, do not repeat whole-project reconstruction merely as routine process.

# Procedure Index

- [`workflow/PRODUCTION-CHANGES.md`](workflow/PRODUCTION-CHANGES.md) — production write authorization, preservation, local/live validation, and production commit gate.
- [`workflow/REVIEW-AND-STAGING.md`](workflow/REVIEW-AND-STAGING.md) — review revisions, packages/deletion manifests, and targeted validation.
- [`workflow/DOCUMENTATION-AND-CLOSEOUT.md`](workflow/DOCUMENTATION-AND-CLOSEOUT.md) — durable decision capture, documentation impact reconciliation, session continuity, GitHub verification, and closeout.

# Core Change-Control Rules

1. Use latest verified file contents before editing. During an active review cycle, the complete Drive Current tree is the working version; GitHub `main` remains the committed comparison baseline.
2. Never assume a proposed, staged, downloaded, or previously generated version was implemented.
3. Make targeted edits and preserve unrelated content unless broader replacement/consolidation is explicitly approved.
4. Production source/data/media/configuration writes require explicit scoped authorization.
5. Production/user-facing commit/push requires explicit authorization.
6. Documentation-only commits retain standing authority, but documentation normally follows the same Drive-first path and must be reconciled with Drive/Git state after direct emergency/integrity corrections.
7. One write-authorized project-chat cycle owns edits to the active Drive working tree at a time.
8. Use review-cycle identity, changed/deletion sets, package hashes when applicable, and targeted validation instead of routine full-state reconstruction.
9. Every applicable durable documentation owner receives `UPDATED` or `VERIFIED — NO CHANGE REQUIRED` disposition before commit.
10. Post-write GitHub verification is mandatory.
11. Do not begin a dependent build segment until the current segment is finalized or deliberately parked with an exact resume point.

# Performance Standard

> Workflow safety should be achieved through deterministic lineage, bounded ownership, targeted validation, and mechanical checks—not repeated full-state reconstruction.

Normal targets are generally <=10 minutes for small documentation reconciliation, routine review correction, and routine closeout. If a task exceeds the target, report the concrete blocker; never weaken validation to meet a target.

# Critical Constraints

- GitHub remains authoritative for **committed** state.
- Drive is authoritative for **all approved uncommitted repository work**.
- ChatGPT Work is not part of the supported Freshwater Fishing Companion workflow.
- Do not make project procedures dependent on Work-mode filesystem, shell, repository checkout, or persistent workspace behavior.
- Prefer connector-native Google Drive and GitHub operations that can be completed entirely within the current project chat.
- Do not rely on chat memory as source content.
- Do not renumber decision IDs.
- Do not split production source solely for tool convenience.
- Do not create unnecessary temporary GitHub workflows.
- Preserve full-file validation/comparison requirements where applicable.
