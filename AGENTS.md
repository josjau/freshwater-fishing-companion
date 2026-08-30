# Freshwater Fishing Companion — Repository Agent Instructions

These instructions apply to the entire repository. They define hard invariants and route execution to the canonical workflow; they are not a second procedure manual.

## Hard invariants

1. **Authority:** GitHub `main` is committed authority. Google Drive `Working Source/Current` is the complete editable working tree and owns approved uncommitted repository changes.
2. **Continuity:** `docs/WORKING_STATE.md` is the compact repository current-state/exact-resume entrypoint. The Live Working State is the compact active operational manifest and must be updated + read back after each material transition before dependent work continues. It is **not** an append-only history log: superseded checkpoint detail must be removed/compacted after durable facts move to their canonical owners. `docs/ACTIVE-CHANGE-LEDGER.md` owns material non-closed carry-forward.
3. **Source edits:** Before editing an existing repository file, verify current GitHub `main`, locate the matching Drive Current file, and edit Drive Current. Never reconstruct current source from chat, memory, old ZIPs, or prior proposals.
4. **Bounded scope:** Questions/findings/proposals do not authorize writes. Production/data/media/configuration writes require explicit scope approval. Preserve unrelated changes and use targeted edits by default.
5. **Commit authority:** Production/user-facing commit or push requires explicit user authorization. Documentation-only commits retain standing authority after Drive-first edit and applicable validation.
6. **Validation:** Use validation proportional to the change. Structural/documentation changes must pass repository/documentation consistency validation before commit; user-facing changes also require the applicable browser/device review gate.
7. **Closeout:** A workstream is not `CLOSED / PASS` until approved source is committed, required CI passes, documentation converges, current-state owners agree, retired paths are disposed, and the final Live Working State readback passes.
8. **Process:** Routine staging/closeout target is <=10 minutes. If a simple task starts requiring custom transport, base64 reconstruction, temporary workflows, manual Git objects, repeated rebuilding, or workaround commits, stop and return to the normal GitHub -> Drive Current -> review/validation -> GitHub path.
9. **Environment:** ChatGPT Work is not part of the FCC workflow. Do not make project execution depend on Work-mode filesystem, browser, shell, or persistent workspace behavior.

## Startup

Before substantive work:

1. Verify current GitHub `main` SHA.
2. Read `docs/WORKING_STATE.md`; read `docs/ACTIVE-CHANGE-LEDGER.md` only when the requested scope can intersect open carry-forward.
3. Verify Drive Current and read the Live Working State. If continuity sources are stale or contradictory, reconcile them before substantive work.
4. Read `docs/DEVELOPMENT_WORKFLOW.md` and only the workflow/decision/domain owners required by the requested scope. Read `docs/UI_STANDARD.md` when UI/navigation/card/detail/search behavior is in scope.

## Procedure routing

- Production/source/data/media changes and review packages: `docs/workflow/PRODUCTION-CHANGES.md`.
- Durable documentation, impact reconciliation, session end, artifact retirement, GitHub verification, and closeout: `docs/workflow/DOCUMENTATION-AND-CLOSEOUT.md`.
- Archives are historical evidence only and never override current governing documents.

## Completion rule

Do not begin a dependent workstream until the current work is finalized or deliberately parked with an explicit resume point. The exact mechanical closeout requirements are owned by `docs/workflow/DOCUMENTATION-AND-CLOSEOUT.md` and the repository validators; do not invent a parallel checklist.
