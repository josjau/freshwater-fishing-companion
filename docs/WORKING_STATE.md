# Freshwater Fishing Companion — Working State

**Document:** WORKING_STATE.md  
**Document Revision:** 1.4.8  
**Document Status:** Approved — Active Repository Continuity Record  
**Workstream Status:** Fish Guide — Sunfish & Crappie package locked / production review preparation pending  
**Wave 3 Closeout Baseline:** `19b91b6303b3a3369f0c0a9dd6ac1018457d9b7f`  
**Last Updated:** 2026-08-25

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

**Production Wave 4 — Sunfish & Crappie is LOCKED. Production source/data/media implementation has not yet started.**

Active workstream record:

- `docs/workstreams/FISH-WAVE-4-SUNFISH-CRAPPIE.md`

On 2026-08-25 the user explicitly approved and locked the complete Wave 4 package after the prior Fish-content and media review. The lock covers:

- the nine-Fish identity/content package,
- the approved version treatment,
- the five deterministic Compare Fish relationships,
- the final nine-image media direction.

The user explicitly allowed the lock to be reopened if the production review ZIP reveals a genuine issue. Until such an issue is found, the locked package is the implementation baseline and must not be reopened merely for preference re-review.

The selected media direction is a nine-illustration set. Seven Fish use individually verified Duane Raver / USFWS Public Domain illustrations. For Ozark Bass and Northern Rock Bass, the user gave explicit **one-time exceptions** on 2026-08-24 authorizing the two specifically approved generated images despite the standing `MEDIA_GUIDE.md` prohibition on AI-generated/approximate photorealistic Fish as primary identification evidence. These exceptions apply only to those two exact assets and do not change the general Fish media standard or create precedent for any other Fish.

Approved generated assets:

- **Ozark Bass:** 1535 × 1024 PNG; SHA-256 `d67c5933f43381a243659e5031d87dbe3d2db460af002fa5898de03a1598073f`.
- **Northern Rock Bass:** 1535 × 1024 PNG; SHA-256 `43060979c0fc6035f66540c1d13eedc7c60449b9911008f1aca5c2232cd83a47`.

The Northern Rock Bass generated asset was created after visual comparison with the user-supplied/onWater Rock Bass reference and specifically adjusted toward the darker dorsal coloration, gold sides, reddish eye, and small rectangular scale/black-beading pattern the user approved. The prior unverified Raver Rock Bass file is no longer the selected production candidate.

The Wave 4 primary-media source-selection dispute is closed. Production processing/attachment of the selected media set has not yet occurred.

# Open Cross-Domain Findings

The Rig `useCases[]` species-specific wording remains a semantic-owner/data-quality defect under D056. Fish applicability belongs to `FISH_RIG_GUIDANCE`, not duplicated species lists inside Rig `useCases[]`. The finding remains recorded in `V1-DESIGN-AUDIT.md` for the planned site-wide audit unless it directly blocks an earlier active workstream.

The Compare Similar Fish catalog currently uses valid comparison-specific internal markup but assigns the same Fish accent to every peer comparison card. This conflicts with D048, which already requires varied adjacent card accents. The user approved a site-wide card-page implementation rule on 2026-08-25: all present and future peer card pages must preserve the Dashboard-derived multi-accent treatment even when specialized internal card markup is required. `CARD_PAGE_STANDARD.md` is the operational owner of this rule. The current Compare Fish color behavior is a confirmed implementation defect and should be corrected in the next user-facing review package without changing its pair-image layout.

# Recovery / Synchronization Status

- Wave 3 GitHub source and closeout documentation commits: present on `main` and post-push verified.
- No user-facing uncommitted Wave 3 package remains active.
- Wave 4 package lock is approved; no Wave 4 production source/data/media changes have yet been written.
- Documentation-only workflow/planning updates have advanced GitHub beyond the stored Drive working package.
- Drive `Working Source/Current` must be refreshed from the then-current GitHub `main` before Wave 4 user-facing source/data/media implementation begins.

# Current Validation State

- Wave 3 JavaScript/repository-integrity/package-fidelity/media-hash/browser/mobile/search/attribution checks: PASS.
- Final user review of Wave 3 presentation and navigation-arrow normalization: APPROVED.
- Wave 4 Fish/content/version/comparison/media decision package: LOCKED by explicit user approval on 2026-08-25.
- Wave 4 production validation: not yet performed; intended next validation surface is the real repository-overlay review ZIP applied to the local checkout.
- Compare Fish site-wide card-accent correction: APPROVED / PENDING IMPLEMENTATION and browser validation.

# Commit / Validation Documentation Closure Gate

Every user-facing commit candidate requires full-tree mechanical verification plus the repository-wide documentation impact sweep. Every documentation-only commit requires the same documentation impact sweep plus direct GitHub post-write verification. Every durable repository documentation file receives an explicit disposition: **UPDATED** or **VERIFIED — NO CHANGE REQUIRED**. Durable truth must not remain only in chat or Working State.

# Exact Resume Point

1. Verify current GitHub `main` and read `HANDOFF.md`, `ACTIVE-CHANGE-LEDGER.md`, `DEVELOPMENT_WORKFLOW.md`, `CARD_PAGE_STANDARD.md`, `docs/workstreams/FISH-WAVE-4-SUNFISH-CRAPPIE.md`, and the governing Fish/evidence/media/relationship documents.
2. Treat the nine-Fish data/versioning package, five comparison relationships, and nine-image media direction as LOCKED unless review reveals a genuine issue.
3. Treat the exact approved generated Ozark Bass and Northern Rock Bass images as the selected Wave 4 media sources under the documented one-time exceptions; do not generalize either exception to other Fish.
4. Perform routine exact-source/rights verification for the seven selected Raver/USFWS Public Domain files as part of media processing; there is no remaining image-selection dispute.
5. Refresh/reconcile Drive `Working Source/Current` to the then-current GitHub `main` before any user-facing Wave 4 write.
6. Prepare the actual repository-overlay Wave 4 review package, including the locked nine Fish/media/comparison implementation and the approved site-wide card-accent correction for peer card pages, with Compare Fish preserving its specialized pair-image internals.
7. Deliver the review ZIP for local/browser validation. Do not commit or push production/user-facing source until the user explicitly approves the reviewed implementation and authorizes commit/push.
