# Freshwater Fishing Companion — Repository Agent Instructions

These instructions apply to the entire repository. They define hard invariants and route execution to the canonical workflow; they are not a second procedure manual.

## Hard invariants

1. **Authority:** GitHub `main` is committed authority. Google Drive `Working Source/Current` is the complete editable working tree and owns approved uncommitted repository changes.
2. **Continuity:** `docs/WORKING_STATE.md` is the compact repository current-state/exact-resume entrypoint. The Live Working State is the compact active operational manifest and must be updated + read back after each material transition before dependent work continues. It is **not** an append-only history log: superseded checkpoint detail must be removed/compacted after durable facts move to their canonical owners. `docs/ACTIVE-CHANGE-LEDGER.md` owns material non-closed carry-forward.
3. **Source edits:** Before editing an existing repository file, verify current GitHub `main`, locate the matching Drive Current file, and edit Drive Current. Never reconstruct current source from chat, memory, old ZIPs, or prior proposals.
   **Raw-file write method:** For existing non-native Drive files such as Markdown, use the established same-file-ID replacement path: fresh-fetch/materialize the exact current file, make the targeted local edit, create only a temporary Drive transport/staging copy if the connector needs a `file_uri`, then raw-fetch that Drive transport object. Pass the raw-fetch result's exact `file_uri.file_id` value — the literal `sediment://...` string — as the `file_uri` argument to Drive `files.update` / `update_file` against the **original file ID**. Do **not** pass the local/runtime `file_...` handle, the full `file_uri` object, or the signed `download_url`. Read back the original ID, then delete the temporary transport object. Do **not** use Library/path `overwrite=true`, rename/swap replacement, duplicate canonical files, or reconstruct content through chat/base64. The temporary object is transport only and never authority.
4. **Bounded scope:** Questions/findings/proposals do not authorize writes. Production/data/media/configuration writes require explicit scope approval. Preserve unrelated changes and use targeted edits by default.
5. **Commit authority:** Production/user-facing commit or push requires explicit user authorization. Documentation-only commits retain standing authority after Drive-first edit and applicable validation.
6. **Validation:** Use validation proportional to the change. Structural/documentation changes must pass repository/documentation consistency validation before commit; user-facing changes also require the applicable browser/device review gate.
7. **Approval-owner gate:** Every explicit approval or durable disposition must be reconciled to a finite set of canonical owners before dependent work or any discussion/session boundary is declared closed. Each applicable owner is classified `UPDATE REQUIRED`, `VERIFIED — NO CHANGE REQUIRED`, or `NOT APPLICABLE`; every `UPDATE REQUIRED` Drive Current write must succeed and be read back, and the Live Working State transition must be written/read back. Any missing/failed owner, Live Working State write, or required readback keeps the gate open and blocks dependent work. The Chat Log is user-managed and is not part of this gate.
   After the gate passes, issue a concise user-facing **gate receipt** covering the closed outcome, material owner/state readbacks, production/commit/CI disposition, and exact resume point before starting dependent substantive work.
8. **Closeout:** A discussion/session boundary may be called closed only after the approval-owner gate passes for every material outcome since the prior boundary. A milestone/workstream is not `CLOSED / PASS` until approved source is committed, required CI passes, documentation converges, current-state owners agree, retired paths are disposed, and the final Live Working State readback passes.
9. **Process:** Routine staging/closeout target is <=10 minutes. The single temporary Drive transport object required by the established same-file-ID raw-file replacement method is allowed and must be deleted after readback; it is not an alternate working-state workflow. If a simple task starts requiring any additional custom transport, base64 reconstruction, temporary workflow machinery, manual Git objects, repeated rebuilding, or workaround commits, stop and return to the normal GitHub -> Drive Current -> review/validation -> GitHub path.
10. **Environment:** ChatGPT Work is not part of the FCC workflow. Never suggest, invoke, request, or redirect FCC work to ChatGPT Work. Keep repository, Drive, package, review, commit-verification, and closeout execution in the normal project chat using the established GitHub → Drive Current → review/package → GitHub path.
11. **Review ZIP transport:** The review ZIP is the standard Drive Current → local repository handoff. Include every changed/new repository file needed for the intended review/commit, including repository documentation; preserve repository-relative paths. Never include manifests, Chat Logs, the external Live Working State, assistant notes/reports, deletion-instruction files, or other non-repository transport artifacts inside the ZIP. A changed tracked repository file such as `docs/WORKING_STATE.md` is repository documentation and is included when it belongs to the intended commit. Supply required deletions as explicit user-facing cleanup steps outside the ZIP. Do not make the user manually copy required repository files from Drive one-by-one.

## Startup

Before substantive work:

1. Verify current GitHub `main` SHA.
2. Read `docs/WORKING_STATE.md`; read `docs/ACTIVE-CHANGE-LEDGER.md` only when the requested scope can intersect open carry-forward.
3. Verify Drive Current and read the Live Working State. If continuity sources are stale or contradictory, reconcile them before substantive work.
4. Verify the **prior material approval gate actually closed** in the applicable canonical owners and Live Working State. If a required owner/state write or readback is still outstanding, perform recovery only; do not begin substantive dependent work.
5. Read `docs/DEVELOPMENT_WORKFLOW.md` and only the workflow/decision/domain owners required by the requested scope. Read `docs/UI_STANDARD.md` when UI/navigation/card/detail/search behavior is in scope.

## Procedure routing

- Production/source/data/media changes and review packages: `docs/workflow/PRODUCTION-CHANGES.md`.
- Durable documentation, impact reconciliation, session end, artifact retirement, GitHub verification, and closeout: `docs/workflow/DOCUMENTATION-AND-CLOSEOUT.md`.
- Archives are historical evidence only and never override current governing documents.

## Completion rule

Do not describe a discussion block, session, module, section, or workstream as **closed**, **complete**, a **clean boundary**, or **ready for the next chat/workstream** until the applicable approval-owner reconciliation has passed. Do not begin dependent work until the current work is finalized or deliberately parked with an explicit resume point. The exact mechanical closeout requirements are owned by `docs/workflow/DOCUMENTATION-AND-CLOSEOUT.md` and the repository validators; do not invent a parallel checklist.
