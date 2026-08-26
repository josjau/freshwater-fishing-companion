# Freshwater Fishing Companion

**Document:** DEVELOPMENT_WORKFLOW.md  
**Document Revision:** 2.0.0  
**Document Status:** Approved  
**Role:** Compact canonical workflow entrypoint  
**Decision Baseline:** D014, D038-D041, D055, D068  
**Last Updated:** 2026-08-25

# Purpose

This file is the canonical entrypoint for Freshwater Fishing Companion workflow rules. Detailed procedures are decomposed under `docs/workflow/` so routine work reads only the owner relevant to the task.

# Supported Execution Environment

Freshwater Fishing Companion is designed to operate in the **normal ChatGPT project/chat workflow** using connected Google Drive and GitHub capabilities.

**ChatGPT Work is not a supported project execution environment.** Do not make routine repository inspection, documentation editing, Drive working-state maintenance, staging/package preparation, GitHub reconciliation, closeout, or continuity dependent on Work-mode filesystem/shell/persistent-workspace behavior.

# Authority Chain

```text
Normal ChatGPT project chat
        ↓
Google Drive Working Source/Current
        ↓
GitHub main
```

- GitHub `main` owns committed truth/history.
- Drive `Working Source/Current` is the complete editable repository working tree and owns all approved uncommitted repository changes.
- Drive `Working Source/Packages` owns review/checkpoint/transport artifacts only.
- Documentation has no separate direct-to-GitHub working path.
- Chat history is context only.

# Procedure Index

- [`workflow/AUTHORITY-AND-SYNC.md`](workflow/AUTHORITY-AND-SYNC.md) — authority, Drive/Git sync, lineage, baseline invalidation, Work-mode constraint.
- [`workflow/STARTUP.md`](workflow/STARTUP.md) — bounded startup/preflight and review-cycle continuation.
- [`workflow/PRODUCTION-CHANGES.md`](workflow/PRODUCTION-CHANGES.md) — production write authorization, preservation, local/live validation, production commit gate.
- [`workflow/REVIEW-AND-STAGING.md`](workflow/REVIEW-AND-STAGING.md) — review identity, iterative Drive-tree edits, packages and targeted validation.
- [`workflow/DOCUMENTATION.md`](workflow/DOCUMENTATION.md) — durable decision capture, documentation impact matrix, standing documentation commit authority.
- [`workflow/CLOSEOUT.md`](workflow/CLOSEOUT.md) — final validation, GitHub verification, retirement/archive, and Drive/Git reconciliation.
- [`workflow/SESSION-HANDOFF.md`](workflow/SESSION-HANDOFF.md) — session-end, cross-session, receiving-computer continuity.
- [`workflow/README.md`](workflow/README.md) — ownership/migration map and performance principle.

# Core Change-Control Rules

1. Use latest verified file contents before editing. During an active review cycle, the complete Drive `Current` tree is the working version; GitHub `main` remains the committed comparison baseline.
2. Never assume a proposed/staged/downloaded prior version was implemented.
3. Make targeted edits and preserve unrelated content.
4. Production source/data/media/configuration writes require explicit scoped authorization.
5. Production/user-facing commit/push requires explicit authorization.
6. Documentation-only commits retain standing authority, but documentation must be written to Drive first and committed in the same bounded reconciliation once validation passes.
7. One write-authorized project-chat cycle owns edits to the active Drive working tree at a time.
8. Use review-cycle identity, package hashes/changed-file sets, and targeted validation instead of routine full-state reconstruction.
9. Every applicable durable documentation owner receives `UPDATED` or `VERIFIED — NO CHANGE REQUIRED` disposition before commit.
10. Post-write GitHub verification is mandatory.
11. Do not begin a dependent build segment until the current segment is finalized or deliberately parked with an exact resume point.

# Performance Standard

> Workflow safety should be achieved through deterministic lineage, bounded ownership, targeted validation, and mechanical checks—not repeated full-state reconstruction.

Normal targets are generally ≤10 minutes for small documentation reconciliation, routine review correction, and routine closeout. If a task exceeds the target, report the concrete blocker; never weaken validation to meet a target.

# Critical Constraints

- GitHub remains authoritative for **committed** state.
- Drive is authoritative for **all approved uncommitted repository work**.
- ChatGPT Work is not part of the supported Freshwater Fishing Companion workflow.
- Do not make project procedures dependent on Work-mode filesystem, shell, repository checkout, or persistent workspace behavior.
- Prefer connector-native Google Drive and GitHub operations that can be completed entirely within the current project chat.
- Do not repeatedly suggest switching to Work when the task can be completed through the established Drive/GitHub workflow.
- Do not rely on chat memory as source content.
- Do not renumber decision IDs.
- Do not split production source solely for tool convenience.
- Do not create unnecessary temporary GitHub workflows.
- Preserve full-file validation/comparison requirements where applicable.
