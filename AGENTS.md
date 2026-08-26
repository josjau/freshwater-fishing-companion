# Freshwater Fishing Companion — Repository Agent Instructions

These instructions apply to the entire repository.

## Startup

Before substantive work:

1. Verify current GitHub `main` SHA.
2. Read `docs/WORKING_STATE.md`; read `docs/ACTIVE-CHANGE-LEDGER.md` when the requested scope can intersect open carry-forward.
3. Verify Google Drive `Working Source/Current` is the complete editable repository working tree and read the Live Working State for the active review-cycle identity/resume point.
4. Read `docs/DEVELOPMENT_WORKFLOW.md` plus only the workflow/decision/domain owners material to the requested scope. When UI/navigation/card/detail/search behavior is in scope, also read `docs/UI_STANDARD.md`.
5. Compare the recorded resume point with GitHub and Drive state. Do not rely on chat history as authority.
6. Use broader baseline reconstruction only when the invalidation conditions in `docs/DEVELOPMENT_WORKFLOW.md` apply.

## Authority

- GitHub `main` is authoritative for committed production source and formally reconciled documentation.
- Google Drive `Working Source/Current` is the complete editable repository working tree and is authoritative for **all approved uncommitted repository changes**. It may intentionally be ahead of GitHub during an active review cycle.
- `docs/WORKING_STATE.md` is the compact current-state and exact-resume record; it must not become a historical journal.
- `docs/ACTIVE-CHANGE-LEDGER.md` is the formal owner of material non-closed carry-forward items.
- Governing documents and current approved decisions outrank plans, archives, historical records, and old chat conclusions.
- The former large Google Working State is retired as source authority. The current Live Working State is the compact operational decision/review-cycle/resume record; the separate Chat Logs file is disaster-recovery evidence only and must not be used as source authority.

## Change control

- Only one chat may be write-authorized against this checkout at a time.
- Questions, findings, proposals, and review comments do not authorize repository changes.
- Do not change production source, data, media, configuration, or dependencies without explicit approval for that scope.
- Preserve unrelated user changes and keep edits bounded to the approved workstream.
- Do not commit or push production/user-facing source unless the user explicitly authorizes that action.
- Documentation-only commits are standing-authorized when needed to keep durable project state current, but the documentation change must exist in the authoritative Drive working tree first and applicable impact/preservation/post-write checks must pass.
- New or modified peer card grids must comply with D048 and `docs/UI_STANDARD.md`. Specialized internal card markup does not waive the shared Dashboard-derived multi-accent, interaction, and responsive behavior contract.

## Continuity and closeout

- Keep `docs/WORKING_STATE.md` limited to active work, unresolved gates, synchronization/validation status, and the exact resume point.
- Promote durable rules, decisions, completed package results, and closed defects to their canonical governing documents before commit; remove completed history from Working State after reconciliation.
- Represent every approved uncommitted repository change directly in the complete Drive `Working Source/Current` tree. Local-only files/packages are not cross-session working truth.
- There is no documentation-only bypass edit path; documentation follows Drive edit → validation → standing-authorized GitHub commit → verification → Drive/Git synchronization confirmation.
- Packages/ZIPs are generated only when transport, review, local/browser validation, checkpointing, or recovery requires them.
- ChatGPT Work is not part of the supported FCC workflow. Do not make project procedures dependent on Work-mode filesystem, shell, repository checkout, or persistent workspace behavior; prefer connector-native Drive/GitHub operations in the current project chat.
- A new or previously unverified computer may not become the local review/validation target until it has pulled the expected GitHub checkpoint, confirmed a clean matching tree, and demonstrated recovery of the current review-cycle state and exact resume point from repository documentation plus the Live Working State.
- At closeout, validate the complete diff and full tree, perform the repository-wide documentation impact sweep (every durable doc = UPDATED or VERIFIED — NO CHANGE REQUIRED), reconcile Working State and the Active Change Ledger, and verify the resulting GitHub state.
- Do not begin a dependent workstream until the current one is finalized or deliberately parked with an explicit resume point.
