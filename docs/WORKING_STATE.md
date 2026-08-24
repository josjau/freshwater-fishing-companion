# Freshwater Fishing Companion — Working State

**Document:** WORKING_STATE.md  
**Document Revision:** 1.0.0  
**Document Status:** Approved  
**Role:** Live local current-state and exact-resume record  
**Workstream Status:** Workflow Transition — In Progress  
**Transition Baseline:** `ee0149a81bab06c1f7650482ed30ffcc5111bfcd`  
**Last Updated:** 2026-08-24

# Purpose

This file is the repository-backed continuity record for active work that has not yet reached final closeout. It records the current workstream, actual implementation/validation state, unresolved gates, and exact resume point.

It does not replace durable owners such as `ARCHITECTURE.md`, `DECISIONS.md`, `DEVELOPMENT_WORKFLOW.md`, domain/data-model documents, or the formal Active Change Ledger. Durable truth must be promoted to the correct owner at a logical checkpoint.

# Authority During the Workflow Transition

1. GitHub `main` is authoritative for committed production source and formally reconciled documentation.
2. This file is the live local current-state and exact-resume record for the checkout on the active computer.
3. Uncommitted local changes exist only on that computer and are not a cross-computer checkpoint.
4. Until the transition closure criteria below pass, the Google document **Freshwater Fishing Companion — Working State** remains authoritative for migration delta not yet reconciled into GitHub:

   https://docs.google.com/document/d/1Eg_ipGeTGjBiRF3V2CIOtWuuouRxPOh0TMuLcxRj0MU

5. `HANDOFF.md` remains the compact formal repository entrypoint and points here for the live resume state.

# Current Workstream

**Workflow Transition only. Fish work is paused.**

The approved transition moves normal project work from the cloud-chat/ZIP/Google Working State model to direct work in a local GitHub Desktop checkout with repository-backed continuity.

This repository state represents the first-computer documentation transition checkpoint. The documentation-only package includes:

- this local Working State,
- root `AGENTS.md` startup/change-control instructions,
- local repository and cross-computer workflow rules,
- formal Handoff and Active Change Ledger reconciliation,
- current architecture/source-tree corrections,
- stale Fish implementation-status corrections in governing documentation.

No Fish production source, Fish media, or Wave 3 staging asset is part of this workstream.

# Verified Starting Baseline

- Repository root: `C:\Users\joshua.jauert\OneDrive - Northeast Oklahoma Electric Coop\Desktop\Personal\Fishing Companion\freshwater-fishing-companion`
- Branch: `main`
- Starting local `HEAD`: `ee0149a81bab06c1f7650482ed30ffcc5111bfcd`
- Starting local `origin/main`: `ee0149a81bab06c1f7650482ed30ffcc5111bfcd`
- Remote: `https://github.com/josjau/freshwater-fishing-companion.git`
- Starting working tree: clean
- Starting commit: `Reconcile Fish relationship implementation state`

# Approved Local Operating Model

- Each computer has its own GitHub Desktop checkout.
- GitHub `origin/main` is the cross-computer synchronization point.
- Codex works directly in the local repository on the active computer.
- Continue on `main` for now; no Wave-specific branch is required.
- Use one chat per coherent outcome/workstream.
- Only one chat may be write-authorized against the same checkout at a time.
- Other chats may perform bounded read-only research or analysis without creating competing project state.
- At startup, verify repository root, branch, status, local `HEAD`, local `origin/main`, and remote before substantive work.
- Read this file, Handoff, the Active Change Ledger, and applicable governing documents before editing.
- Record approved decisions locally before substantive work proceeds from them.
- Review the complete local diff in GitHub Desktop before a deliberate commit/push.
- Do not commit every discussion or individual decision. Reconcile the coherent session state, then use one deliberate closeout or required handoff commit when practical.
- Never move work to another computer while required state exists only as uncommitted files on the first.
- Use a localhost development server for local runtime/browser validation; do not rely on `file://` as the normal validation path.
- ZIP delivery is an exceptional fallback, not the normal local workflow.

# Transition Validation Still Required

The transition is **not closed**. These gates remain:

1. The first-computer documentation change set must pass complete diff review and local validation.
2. The commit containing this file is the deliberate documentation-only transition checkpoint; it must be pushed and verified on GitHub `main`.
3. Any resume on the first computer must confirm that local `HEAD`, local `origin/main`, and the verified GitHub checkpoint match with a clean working tree.
4. When the second computer is available, pull the same checkpoint and confirm a clean checkout whose `HEAD` matches `origin/main` and the verified GitHub commit.
5. With the new ChatGPT client ready on that computer, start a fresh chat rooted at that checkout.
6. Have the fresh chat recover the current workstream, authority model, transition status, and exact resume point from repository documentation alone, without using prior chat history or the Google Working State.
7. Only after that test passes, explicitly close the workflow transition and retire/freeze the Google Working State as the active continuity source.
8. Begin Wave 3 Bass in a separate task only after transition closure.

Second-computer verification and the fresh-chat recovery test are deliberately deferred to a later session because the second computer is not currently available. This is a pending validation gate, not permission to close the transition early.

# Local Validation

- Existing repository-integrity validator: **PASS** — all 8 validation groups passed; no repository content was modified by the validator.
- Documentation preservation review: **PASS with approved structural exceptions**. Unchanged-heading documents passed the repository replacement-integrity validator. The validator's remaining findings are limited to the deliberately approved workflow heading replacements in D014, `DEVELOPMENT_WORKFLOW.md`, and `STYLE_GUIDE.md`; manual diff review confirms no unrelated heading/content loss.
- Complete changed-file review: documentation-only; no production source, data, media, configuration, dependency, or Fish staging file is changed.
- Checkpoint identity: the GitHub commit containing this file is the first-computer transition checkpoint. Git history owns its exact SHA; do not attempt to embed a commit's own SHA in this file.

# Protected Fish State

- Fish Guide Phase 0 is closed.
- Trout Production Package 1, Gar Production Package, Production Wave 1, and Production Wave 2 are closed.
- Wave 3 Bass semantic, evidence, identification, Rig-guidance, and primary-media selection work is complete and locked in the migration record.
- No Wave 3 production source implementation has begun.
- No Fish work may resume before the workflow transition is verified on both computers and explicitly closed.
- After transition closure, the next separate Wave 3 task begins with acquisition and verification of the six locked originals, processing of six transparent production WebP assets, creation/verification of the media manifest and contact sheet, user approval of processed media, current repository-pattern verification, and separate production source implementation authorization.

# Exact Resume Point

On the current work computer:

1. Determine whether the commit containing this file is already present and verified on GitHub `main`.
2. If it is not, finish review/validation, obtain explicit commit/push authorization, push the checkpoint, and verify the resulting GitHub state.
3. If it is present, confirm the local checkout is clean and local `HEAD` matches `origin/main` and the verified GitHub checkpoint.
4. Stop with the transition open until the user states that the second computer and new ChatGPT client are available.

When the user later opens a session on the second computer and states that it is ready:

1. Perform a read-only repository preflight.
2. Pull the verified transition checkpoint if needed.
3. Confirm a clean checkout and matching `HEAD`/`origin/main`.
4. Run the repository-documentation-only fresh-chat recovery test.
5. Do not resume Fish work or retire the Google Working State until the user confirms the recovery test passed and authorizes transition closure.
