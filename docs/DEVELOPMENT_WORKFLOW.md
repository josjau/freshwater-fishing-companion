# Freshwater Fishing Companion

**Document:** DEVELOPMENT_WORKFLOW.md  
**Document Revision:** 2.3.8  
**Document Status:** Approved  
**Role:** Compact canonical workflow entrypoint  
**Decision Baseline:** D014, D038-D041, D055, D068  
**Last Updated:** 2026-09-18

# Purpose

This file is the canonical entrypoint for Freshwater Fishing Companion workflow rules. It owns authority, startup/preflight, review-cycle identity, invalidation rules, and universal change control. Detailed task procedures live in the two files under `docs/workflow/`.

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
4. Apply the Live Working State hard gate. It must reflect the latest material decision/state transition and be consistent with `WORKING_STATE.md`, applicable `ACTIVE-CHANGE-LEDGER.md` entries, and actual GitHub/Drive lineage. A stale, missing, or contradictory Live Working State blocks normal progression until reconciled.
5. Load only the workflow, decision, domain, media, UI, source, or workstream owners material to the requested scope.
6. Compare the recorded resume point and lineage with actual GitHub/Drive state.
7. **Verify prior approval-gate closure before substantive work.** Confirm the latest applicable approval/disposition is CLOSED / PASS in its canonical owners and Live Working State and, when transcript preservation applies, confirm the latest canonical Chat Log checkpoint/tail proves the required append/readback completed. If the prior session ended with a required write/readback still outstanding or the expected transcript checkpoint is missing, startup is recovery-only until that gap is reconciled.
8. If the authority/lineage and prior-gate checks pass, continue with targeted work. Broaden reconstruction only when an invalidation condition below applies.

# Live Working State Hard Gate

The Live Working State is the active operational ledger for the current project-chat/review cycle. It must stay current **during** the work; it is not a deferred closeout artifact.

Update it immediately after any material transition that changes what is approved, implemented, defective, validated, landed, or next. This includes at minimum:

- user approval, rejection, data lock, or scope change that controls the next action;
- implementation start/completion or an approved uncommitted source/data change;
- review defect discovery, disposition, or approved correction;
- validation, browser/mobile review, Repository Integrity, Pages, or other result that changes a gate;
- review-build approval;
- commit/push and resulting GitHub SHA;
- wave/workstream close, open, park, or exact-resume transition.

A checkpoint is complete only after the Live Working State write succeeds **and a readback confirms the intended state is present**. Do not execute a dependent next action until that readback passes.

Keep each checkpoint compact but sufficient to recover the cycle without chat reconstruction: active workstream/wave, GitHub baseline/landed SHA as applicable, Drive Current status, latest material approval/decision, validation/review state, open defects/risks, and exact next action.

The Live Working State is a **current-state manifest, not an append-only event log**. Each material update must replace or compact superseded operational detail after durable facts are reconciled to their canonical owners. Do not preserve numbered historical checkpoint chains in Live Working State merely because they once controlled execution; landed history belongs in `CHANGELOG.md`/Git history, durable reasoning in decision/domain/workstream owners, and closed execution evidence in the applicable closed workstream/archive.

If the Live Working State is stale, missing, or contradictory, stop normal progression and perform the smallest authoritative reconciliation needed from GitHub, Drive Current, repository current-state owners, and current-session facts. Do not create another mirror document, external synchronization service, or other process layer to compensate.

# Approval-to-Owner Closure Hard Gate

Every explicit approval, rejection, deferment, scope lock, or other durable disposition is incomplete until its canonical-owner reconciliation passes. This gate applies **before the next dependent checkpoint and before any discussion block/session/module/section is described as closed, complete, a clean boundary, or ready for the next chat/workstream**, even when no Git commit is expected in that session.

For each material outcome since the previous passed gate:

1. enumerate the finite set of canonical repository owners whose semantics may be affected;
2. classify each owner as `UPDATE REQUIRED`, `VERIFIED — NO CHANGE REQUIRED`, or `NOT APPLICABLE`;
3. perform every `UPDATE REQUIRED` edit against the latest verified Drive Current file and read back each changed owner;
4. treat any missing owner, failed write, failed readback, or unresolved ownership question as **BLOCKING**; do not continue dependent work and do not claim closure;
5. verify that no durable fact exists only in chat, Live Working State, `WORKING_STATE.md`, `ACTIVE-CHANGE-LEDGER.md`, or the consolidated Chat Log when a decision/domain/relationship/architecture/workflow owner should contain it;
6. after semantic-owner capture passes, update/read back the Live Working State and other required continuity surfaces for the material transition;
7. when the consolidated Chat Log policy applies, **fresh-fetch the latest Chat Log, append the conversation since the prior transcript checkpoint verbatim, replace the same file object, and tail-read back the appended transcript** before the approval gate may pass. Verbatim means preserve the actual user and assistant message text, ordering, and material formatting; do not substitute a summary, decision digest, reconstructed paraphrase, or approval-checkpoint synopsis for the conversation itself. Tool payloads/results and hidden reasoning are not transcript content. A separately labeled checkpoint/metadata note may be added after the verbatim transcript when useful, but it never replaces it. A Chat Log write/readback failure is **BLOCKING** and may not be deferred to session closeout, staging, or a later approval;
8. after the gate passes, provide a **concise user-facing gate receipt** that states the approved/closed outcome, material owner/continuity/log readbacks completed, whether production/commit/CI changed, and the exact next checkpoint/resume point. The assistant must not begin dependent substantive discussion before this receipt is delivered.
9. after every approval-gate receipt, provide a **brief status update** and then identify the **next logical section** plus whether a **fresh chat is required/recommended**. Do **not** automatically launch into that next section. Stop at the boundary and wait for the user to continue or start the new chat. This conservative stop rule applies because remaining chat-capacity cannot be guaranteed reliably; avoiding a mid-section cutoff takes priority over auto-advance.

The owner-disposition matrix is an execution check, not a new permanent document. Keep it bounded to the current outcomes and existing canonical owners. A successful state/log write never proves semantic-owner capture; conversely, successful semantic-owner capture does not waive a required transcript append/readback. An applicable approval gate passes only when both requirements are satisfied.

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
- the Live Working State is stale, missing, or contradictory relative to the latest material transition or current GitHub/Drive/repository state;
- review revision/package/hash/changed-file/deletion-set lineage is contradictory or unprovable;
- unexplained local repository changes appear during a local review cycle;
- expected files are missing, unexpected files appear, or authority between GitHub/Drive is ambiguous;
- validation exposes structural corruption, stale ownership/pathing, or a scope expansion that invalidates prior checks.

Absent an invalidation condition, do not repeat whole-project reconstruction merely as routine process.

# Planning-to-Build Hard Gate

When a planning phase or planning subphase is declared complete, **production/build implementation is blocked until planning documentation closeout passes**. Live Working State capture alone is not sufficient. This closeout is a verification/convergence gate; it must not be the first time approval-stage owner documentation catches up.

Before the build phase may start:

1. verify that every approved planning decision, discussion outcome, vocabulary, authored scope, schema/relationship contract, and project-direction change was already reconciled at its approval gate into every applicable repository documentation owner in Drive Working Source/Current; if not, treat that as a workflow defect and reconcile it before continuing;
2. reconcile only aggregate phase-level status/resume transitions that arise from declaring the planning phase complete, and remove or correct superseded planning language;
3. update the active workstream, `WORKING_STATE.md`, and `ACTIVE-CHANGE-LEDGER.md` for the phase transition as applicable;
4. give every applicable durable owner an `UPDATED` or `VERIFIED — NO CHANGE REQUIRED` disposition;
5. run targeted documentation consistency/structural-readability validation and reconcile repository validators when the documentation change affects validator expectations;
6. verify the bounded changed-file scope and read back the resulting Drive Current files;
7. update and read back Live Working State with documentation-closeout PASS and the first authorized build action.

Only then may production implementation begin.

# Procedure Index

- [`workflow/PRODUCTION-CHANGES.md`](workflow/PRODUCTION-CHANGES.md) — production write authorization, review revisions, packages/deletion manifests, preservation, local/live validation, and production commit gate.
- [`workflow/DOCUMENTATION-AND-CLOSEOUT.md`](workflow/DOCUMENTATION-AND-CLOSEOUT.md) — durable decision capture, documentation impact reconciliation, session continuity, GitHub verification, and closeout.

# Core Change-Control Rules

1. Use latest verified file contents before editing. During an active review cycle, the complete Drive Current tree is the working version; GitHub `main` remains the committed comparison baseline.
   **Existing raw Drive files (including Markdown) use same-file-ID replacement.** Fresh-fetch/materialize the exact current Drive object; make the targeted edit; when the connector requires a `file_uri`, upload one temporary Drive transport/staging object containing the edited bytes; fetch that temporary object as raw bytes/file reference; call Drive `files.update` / `update_file` on the **original file ID**; read back the original ID; then delete the temporary object. Do not use Library/path `overwrite=true`, rename/swap replacement, duplicate canonical files, or chat/base64 reconstruction. The temporary object is transport only, not working truth, and must not survive the operation.
2. Never assume a proposed, staged, downloaded, or previously generated version was implemented.
3. Make targeted edits and preserve unrelated content unless broader replacement/consolidation is explicitly approved.
4. Production source/data/media/configuration writes require explicit scoped authorization.
5. Production/user-facing commit/push requires explicit authorization.
6. Documentation-only commits retain standing authority, but documentation normally follows the same Drive-first path and must be reconciled with Drive/Git state after direct emergency/integrity corrections.
7. One write-authorized project-chat cycle owns edits to the active Drive working tree at a time.
8. Use review-cycle identity, changed/deletion sets, package hashes when applicable, and targeted validation instead of routine full-state reconstruction.
9. Every applicable durable documentation owner receives `UPDATED`, `VERIFIED — NO CHANGE REQUIRED`, or `NOT APPLICABLE` disposition before any logical block/session closure and again before commit when the commit scope is broader than the last approval gate.
10. **Every explicit approval gate is a Drive Current canonical-owner gate.** Immediately reconcile the approved decision, discussion outcome, or project-direction change into **every applicable owner document whose owned semantics changed**, not only the primary decision owner or minimum continuity files. Applicable owners can include decision bodies, domain/data-model owners, relationship/architecture/roadmap/workstream owners, `WORKING_STATE.md`, and `ACTIVE-CHANGE-LEDGER.md`. All required owner writes and targeted readback must finish **before moving to the next approval/dependent checkpoint or claiming a closed/complete/clean session boundary**. A successful Live Working State, `WORKING_STATE.md`, ledger, or Chat Log update does not satisfy a missing semantic-owner write. Do not defer owner updates to planning closeout, staging, ZIP creation, local review, commit, or session end. Git commits may be intentionally batched; Drive canonical-owner capture may not.
11. **Canonical-owner closure proof is mandatory before any discussion boundary is declared closed.** For every material approval/outcome since the prior verified closure checkpoint, explicitly disposition every applicable durable owner as `UPDATED`, `VERIFIED — NO CHANGE REQUIRED`, or `NOT APPLICABLE`. Every `UPDATED` owner must have successful Drive Current write + targeted readback. If any required owner is missing, stale, unread back, or represented only in chat/state/log, the boundary is **NOT CLOSED** and dependent work is blocked.
12. Drive Current accumulates the complete approved uncommitted working state—source plus documentation. The local repository review/package path must carry that complete approved state forward; after local validation and commit/push, GitHub `main` becomes the committed authoritative version of those accumulated Drive changes.
13. Post-write GitHub verification is mandatory.
14. Before any dependent next action, the applicable canonical-owner gate, Live Working State readback, and—when transcript preservation applies—the consolidated Chat Log append + tail readback for the authorizing material transition must all have passed.
15. Do not begin a dependent build segment until the current segment is finalized or deliberately parked with an exact resume point.

# Performance Standard

> Workflow safety should be achieved through deterministic lineage, bounded ownership, targeted validation, and mechanical checks—not repeated full-state reconstruction.

Normal targets are generally <=10 minutes for small documentation reconciliation, routine review correction, and routine closeout. If a task exceeds the target, report the concrete blocker; never weaken validation to meet a target.

# Critical Constraints

- GitHub remains authoritative for **committed** state.
- Drive is authoritative for **all approved uncommitted repository work**.
- ChatGPT Work is not part of the supported Freshwater Fishing Companion workflow.
- Do not make project procedures dependent on Work-mode filesystem, shell, repository checkout, or persistent workspace behavior.
- Prefer connector-native Google Drive and GitHub operations that can be completed entirely within the current project chat.
- For existing raw Drive files, preserve object identity with the canonical same-file-ID replacement path described above; do not substitute path-overwrite semantics.
- Do not rely on chat memory as source content.
- Do not renumber decision IDs.
- Do not split production source solely for tool convenience.
- Do not create unnecessary temporary GitHub workflows.
- Preserve full-file validation/comparison requirements where applicable.
