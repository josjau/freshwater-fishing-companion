# Freshwater Fishing Companion — Working State

**Document:** WORKING_STATE.md  
**Document Revision:** 1.4.7  
**Document Status:** Approved — Active Repository Continuity Record  
**Workstream Status:** Fish Guide — Sunfish & Crappie planning active / production not started  
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

**Production Wave 4 — Sunfish & Crappie is in planning. Production has not started.**

Active planning record:

- `docs/workstreams/FISH-WAVE-4-SUNFISH-CRAPPIE.md`

The proposed Wave 4 package contains nine Fish and five deterministic identification relationships. The Fish identity/versioning/comparison package has been reviewed for structural fit but is **not yet explicitly user-locked**.

The selected media direction is now a nine-illustration set. Seven Fish use individually verified Duane Raver / USFWS Public Domain illustrations. For Ozark Bass and Northern Rock Bass, the user gave explicit **one-time exceptions** on 2026-08-24 authorizing the two specifically approved generated images despite the standing `MEDIA_GUIDE.md` prohibition on AI-generated/approximate photorealistic Fish as primary identification evidence. These exceptions apply only to those two exact assets and do not change the general Fish media standard or create precedent for any other Fish.

Approved generated assets:

- **Ozark Bass:** 1535 × 1024 PNG; SHA-256 `d67c5933f43381a243659e5031d87dbe3d2db460af002fa5898de03a1598073f`.
- **Northern Rock Bass:** 1535 × 1024 PNG; SHA-256 `43060979c0fc6035f66540c1d13eedc7c60449b9911008f1aca5c2232cd83a47`.

The Northern Rock Bass generated asset was created after visual comparison with the user-supplied/onWater Rock Bass reference and specifically adjusted toward the darker dorsal coloration, gold sides, reddish eye, and small rectangular scale/black-beading pattern the user approved. The prior unverified Raver Rock Bass file is no longer the selected production candidate.

The Wave 4 primary-media source-selection dispute is therefore closed. Production processing/attachment of the selected media set has not yet occurred.

# Open Cross-Domain Finding

The Rig `useCases[]` species-specific wording remains a semantic-owner/data-quality defect under D056. Fish applicability belongs to `FISH_RIG_GUIDANCE`, not duplicated species lists inside Rig `useCases[]`. The finding remains recorded in `V1-DESIGN-AUDIT.md` for the planned site-wide audit unless it directly blocks an earlier active workstream.

# Recovery / Synchronization Status

- Wave 3 GitHub source and closeout documentation commits: present on `main` and post-push verified.
- No user-facing uncommitted Wave 3 package remains active.
- Wave 4 planning documentation is now on GitHub; no Wave 4 production source/data/media changes have been written.
- Documentation-only workflow/planning updates have advanced GitHub beyond the stored Drive working package.
- Drive `Working Source/Current` must be refreshed from the then-current GitHub `main` before any Wave 4 user-facing source/data/media work begins.

# Current Validation State

- Wave 3 JavaScript/repository-integrity/package-fidelity/media-hash/browser/mobile/search/attribution checks: PASS.
- Final user review of Wave 3 presentation and navigation-arrow normalization: APPROVED.
- Wave 4 planning/media research: documented; Ozark Bass and Northern Rock Bass generated-image one-time exceptions explicitly approved; production validation not applicable yet.

# Commit / Validation Documentation Closure Gate

Every user-facing commit candidate requires full-tree mechanical verification plus the repository-wide documentation impact sweep. Every documentation-only commit requires the same documentation impact sweep plus direct GitHub post-write verification. Every durable repository documentation file receives an explicit disposition: **UPDATED** or **VERIFIED — NO CHANGE REQUIRED**. Durable truth must not remain only in chat or Working State.

# Exact Resume Point

1. Verify current GitHub `main` and read `HANDOFF.md`, `ACTIVE-CHANGE-LEDGER.md`, `DEVELOPMENT_WORKFLOW.md`, `docs/workstreams/FISH-WAVE-4-SUNFISH-CRAPPIE.md`, and the governing Fish/evidence/media/relationship documents.
2. Treat the user-approved generated Ozark Bass and Northern Rock Bass images as the selected Wave 4 media sources under the documented one-time exceptions; do not generalize either exception to other Fish.
3. Perform the routine exact-source/rights verification for the seven selected Raver/USFWS Public Domain files as part of media processing; there is no remaining image-selection dispute.
4. Obtain explicit user lock of the proposed nine-Fish Wave 4 data/versioning package, five comparison relationships, and final media-source direction.
5. Refresh/reconcile Drive `Working Source/Current` to the then-current GitHub `main` before any user-facing Wave 4 write.
6. After those gates close, process the selected nine-Fish media set and use the normal Drive working package → review ZIP → local/browser validation → explicit commit/push authorization → GitHub verification workflow for production implementation.
