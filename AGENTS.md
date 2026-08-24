# Freshwater Fishing Companion — Repository Agent Instructions

These instructions apply to the entire repository.

## Startup

Before substantive work:

1. Confirm the repository root, current branch, working-tree status, local `HEAD`, local `origin/main`, and remote URL.
2. Read `docs/WORKING_STATE.md`, `docs/HANDOFF.md`, and `docs/ACTIVE-CHANGE-LEDGER.md`.
3. Read `docs/DEVELOPMENT_WORKFLOW.md` plus the governing architecture, decision, data-model, media, or workstream documents for the requested scope.
4. Compare the recorded resume point with the actual repository state. Do not rely on chat history as authority.

## Authority

- GitHub `main` is authoritative for committed production source and formally reconciled documentation.
- `docs/WORKING_STATE.md` is the live local current-state and exact-resume record.
- `docs/HANDOFF.md` is the compact formal recovery entrypoint.
- `docs/ACTIVE-CHANGE-LEDGER.md` is the formal owner of material non-closed carry-forward items.
- Governing documents and current approved decisions outrank plans, archives, historical records, and old chat conclusions.
- The former Google Working State is retired as an active continuity source. It may be consulted only as historical migration evidence and never overrides GitHub `main` or current repository documentation.

## Change control

- Only one chat may be write-authorized against this checkout at a time.
- Questions, findings, proposals, and review comments do not authorize repository changes.
- Do not change production source, data, media, configuration, or dependencies without explicit approval for that scope.
- Preserve unrelated user changes and keep edits bounded to the approved workstream.
- Do not commit or push unless the user explicitly authorizes that action.

## Continuity and closeout

- Update `docs/WORKING_STATE.md` at material decision, scope, implementation, validation, deferment, and resume-point boundaries.
- Promote durable rules and decisions to their canonical governing documents; do not make Working State a duplicate specification.
- Before moving work to another computer, commit and push the reviewed checkpoint. Never rely on uncommitted files to synchronize computers.
- A new or previously unverified computer may not become the write-authorized checkout until it has pulled the expected GitHub checkpoint, confirmed a clean matching tree, and demonstrated repository-documentation-only recovery of the current state and exact resume point.
- At closeout, validate the complete diff, reconcile Working State and the Active Change Ledger, and verify the resulting GitHub state.
- Do not begin a dependent workstream until the current one is finalized or deliberately parked with an explicit resume point.
