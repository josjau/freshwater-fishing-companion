# Freshwater Fishing Companion — Repository Agent Instructions

These instructions apply to the entire repository.

## Startup

Before substantive work:

1. Verify current GitHub `main`. For user-facing work that uses a local checkout, also confirm repository root, current branch, working-tree status, local `HEAD`, local `origin/main`, and remote URL.
2. Read `docs/WORKING_STATE.md`, `docs/HANDOFF.md`, and `docs/ACTIVE-CHANGE-LEDGER.md`, then verify the current Google Drive `Working Source/Current` package when work depends on uncommitted state.
3. Read `docs/DEVELOPMENT_WORKFLOW.md` plus the governing architecture, decision, data-model, media, or workstream documents for the requested scope. When card-based navigation or catalog UI is in scope, also read `docs/CARD_PAGE_STANDARD.md`.
4. Compare the recorded resume point with the actual repository state. Do not rely on chat history as authority.

## Authority

- GitHub `main` is authoritative for committed production source and formally reconciled documentation.
- Google Drive `Working Source/Current` is the authoritative working-tree package for approved uncommitted **user-facing application work** and may be ahead of GitHub.
- `docs/WORKING_STATE.md` is the compact current-state and exact-resume record; it must not become a historical journal.
- `docs/HANDOFF.md` is the compact formal recovery entrypoint.
- `docs/ACTIVE-CHANGE-LEDGER.md` is the formal owner of material non-closed carry-forward items.
- Governing documents and current approved decisions outrank plans, archives, historical records, and old chat conclusions.
- The former large Google Working State is retired as active authority. The current Drive working package is operational state; the separate Chat Logs file is disaster-recovery evidence only and must not be used as source authority.

## Change control

- Only one chat may be write-authorized against this checkout at a time.
- Questions, findings, proposals, and review comments do not authorize repository changes.
- Do not change production source, data, media, configuration, or dependencies without explicit approval for that scope.
- Preserve unrelated user changes and keep edits bounded to the approved workstream.
- Do not commit or push production/user-facing source unless the user explicitly authorizes that action.
- Documentation-only commits are standing-authorized when needed to keep durable project state current, provided the latest GitHub file is verified first and documentation impact/preservation/post-write checks pass.
- New or modified peer card grids must comply with D048 and `docs/CARD_PAGE_STANDARD.md`. Specialized internal card markup does not waive the shared dashboard-derived multi-accent, interaction, and responsive behavior contract.

## Continuity and closeout

- Keep `docs/WORKING_STATE.md` limited to active work, unresolved gates, synchronization/validation status, and the exact resume point.
- Promote durable rules, decisions, completed package results, and closed defects to their canonical governing documents before commit; remove completed history from Working State after reconciliation.
- Represent every approved uncommitted working change in the Drive `Working Source/Current` full-tree package. Local-only files are not a cross-session checkpoint.
- Exception: documentation-only changes may land directly on GitHub from the latest verified file contents and must then be reconciled into Drive. User-facing application changes remain subject to the Drive/local-validation path.
- A new or previously unverified computer may not become the write-authorized checkout until it has pulled the expected GitHub checkpoint, confirmed a clean matching tree, and demonstrated repository-documentation-only recovery of the current state and exact resume point.
- At closeout, validate the complete diff and full tree, perform the repository-wide documentation impact sweep (every durable doc = UPDATED or VERIFIED — NO CHANGE REQUIRED), reconcile Working State and the Active Change Ledger, and verify the resulting GitHub state.
- Do not begin a dependent workstream until the current one is finalized or deliberately parked with an explicit resume point.
