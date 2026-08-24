# Freshwater Fishing Companion — Working State

**Document:** WORKING_STATE.md  
**Document Revision:** 1.4.4  
**Document Status:** Approved — Active Repository Continuity Record  
**Workstream Status:** Fish Guide — Sunfish & Crappie next planned production package / NOT STARTED  
**Wave 3 Closeout Baseline:** `19b91b6303b3a3369f0c0a9dd6ac1018457d9b7f`  
**Last Updated:** 2026-08-24

# Purpose

This file is intentionally a **compact current-work record only**. It owns the active/next repository workstream, current validation/synchronization state, unresolved gates, and exact resume point. Completed history and durable decisions belong in their canonical repository owners or archive records.

# Authority Model

1. GitHub `main` is authoritative for committed production source and formally reconciled documentation.
2. Google Drive `Working Source/Current` owns approved uncommitted **user-facing application work** as an atomic full-tree ZIP + manifest and may intentionally be ahead of GitHub while that work is under review.
3. The local repository is the user-facing application/browser-validation copy of the Drive working package. Local-only application edits are not durable working truth.
4. Documentation-only changes may be updated directly on GitHub from the latest verified file contents; they do not require local browser/user validation and are reconciled into Drive after the GitHub write.
5. `HANDOFF.md` is the compact repository recovery entrypoint; `ACTIVE-CHANGE-LEDGER.md` owns material non-closed carry-forward items.
6. Chat history is context only. The Google Drive Chat Logs file is disaster-recovery evidence only and is not an operational authority.

# Current Workstream

**Production Wave 3 — Bass is CLOSED.**

- User-facing/source implementation: `0b982bbbe10b0b2758759869e6682d6b6734475e` — `Fish - Wave 3 - Bass Final`.
- Final closeout documentation: `19b91b6303b3a3369f0c0a9dd6ac1018457d9b7f` — `Fish - Wave 3 - Closeout Documentation`.
- Post-push GitHub verification: PASS.
- Historical package/evidence record: `archive/workstreams/fish-guide/FISH-WAVE-3-BASS.md`.

The next planned Fish production package is **Sunfish & Crappie** unless a genuine evidence/media/relationship/product issue requires a smaller boundary. Production work for that package has not started.

# Open Cross-Domain Finding

The Rig `useCases[]` species-specific wording remains a semantic-owner/data-quality defect under D056. Fish applicability belongs to `FISH_RIG_GUIDANCE`, not duplicated species lists inside Rig `useCases[]`. The finding remains recorded in `V1-DESIGN-AUDIT.md` for the planned site-wide audit unless it directly blocks an earlier active workstream.

# Recovery / Synchronization Status

- Wave 3 GitHub source and closeout documentation commits: present on `main` and post-push verified.
- No user-facing uncommitted Wave 3 package remains active.
- Documentation-only workflow updates may advance GitHub beyond the Wave 3 closeout SHA; startup must always verify current `main`.
- After any direct documentation commit, reconcile Drive `Working Source/Current` to the new committed tree before using it as the base for new user-facing work.

# Current Validation State

- Wave 3 JavaScript/repository-integrity/package-fidelity/media-hash/browser/mobile/search/attribution checks: PASS.
- Final user review of Wave 3 presentation and navigation-arrow normalization: APPROVED.

# Commit / Validation Documentation Closure Gate

Every user-facing commit candidate requires full-tree mechanical verification plus the repository-wide documentation impact sweep. Every documentation-only commit requires the same documentation impact sweep plus direct GitHub post-write verification. Every durable repository documentation file receives an explicit disposition: **UPDATED** or **VERIFIED — NO CHANGE REQUIRED**. Durable truth must not remain only in chat or Working State.

# Exact Resume Point

1. Verify current GitHub `main` and read `HANDOFF.md`, `ACTIVE-CHANGE-LEDGER.md`, `DEVELOPMENT_WORKFLOW.md`, and the governing Fish/evidence/media/relationship documents.
2. Confirm Drive `Working Source/Current` matches the current committed tree before starting new user-facing application work.
3. Create/lock the Sunfish & Crappie production workstream before production edits.
4. For user-facing files: Drive working package → review ZIP → local user/browser validation → explicit commit/push authorization → GitHub verification.
5. For documentation-only changes: direct GitHub update from the latest verified file → documentation impact/preservation checks → post-write GitHub verification → Drive reconciliation.
