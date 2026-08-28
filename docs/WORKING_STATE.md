# Freshwater Fishing Companion — Working State

**Document:** WORKING_STATE.md  
**Document Revision:** 1.15.0  
**Document Status:** Approved — Active Repository Continuity Record  
**Workstream Status:** What Should I Throw Phase 0 — PLANNING COMPLETE / PRODUCTION DEFERRED; Conditions Production Foundation — NEXT  
**Cleanup Implementation Commit:** `0ea6420f2ac203281c5bab33b96ab5fcc6409947`  
**Last Updated:** 2026-08-27

# Purpose

This file is the single compact repository current-state and exact-resume entrypoint. It owns the active/next workstream, synchronization/validation state, unresolved gates, and exact resume point. Durable history and decision reasoning belong in their canonical owners.

# Authority Model

1. GitHub `main` is authoritative for committed production source, committed documentation, and formal history.
2. Google Drive `Working Source/Current` is the **complete editable repository working tree** and is authoritative for all approved uncommitted repository changes.
3. The Live Working State records active decisions, review-cycle identity, validation/approval status, defects, and detailed resume context; it is a hard operational gate and must be updated/read back after every material transition before dependent work continues.
4. Drive `Working Source/Packages` owns generated review/checkpoint/transport artifacts only; ZIPs are not working truth.
5. The local Git repository is the user validation/approval and final-commit surface when local review is required; it is not the cross-session authoritative uncommitted owner.
6. `ACTIVE-CHANGE-LEDGER.md` owns material non-closed carry-forward across workstreams.
7. ChatGPT Work is not part of the supported FCC workflow.
8. Chat history is context only.

# Workflow Performance Refactor — Closed

The workflow/documentation performance refactor is **CLOSED**.

- D068 owns the complete Drive working-tree model and normal-project-chat workflow.
- D062 remains preserved as superseded historical rationale only.
- `DECISIONS.md` is a compact index with six domain decision-body files under `docs/decisions/`.
- `DEVELOPMENT_WORKFLOW.md` owns authority/startup/general workflow and routes to two task procedures under `docs/workflow/`; review/staging is consolidated into `PRODUCTION-CHANGES.md`.
- `UI_STANDARD.md` is the single cross-domain UI/navigation/card/detail/search-interaction standard.
- `WORKING_STATE.md` is the single repository continuation entrypoint; separate Handoff documentation is no longer active.
- Retired glossary/Lure/Backup placeholder documents were consolidated into surviving data-model owners.
- R2 documentation consolidation landed at GitHub commit `4e982d84ab6207efacfafe4fa92682046c6240cb` with documentation/governance changes only and no production application files.
- Post-commit integrity review identified stale references/status text left by the consolidation; the bounded documentation correction that includes this file removes those references and completes closeout.
- Routine documentation/review/closeout targets remain generally <=10 minutes without weakening validation.

# Fish Guide Version 1 — Closed

Fish Guide Version 1 remains **PASS / FINALIZED / CLOSED** with 30 active Fish, 30 primary-identification media attachments, 20 identification comparison pairs, and the closed Wave 4 baseline. No Fish/product behavior changed during the workflow refactor.

# Current Product Work

**Regulations — U.S. State Fishing Resource Gateway is CLOSED / PASS.**

- Final production commit: `fffe2ef518f13fd5d50e5d45af9d9ead7c11045c` (`Regulations - Final Wave`).
- Nationwide coverage is **48 contiguous states / 180 StateResource records / 2 active StateNotice records**.
- Search is retained for state name / two-letter abbreviation filtering. Normal typing selects the alphabetical first match; returning from an opened state preserves the prior query and selected state when that state remains in the filtered set.
- Home clears transient Regulations query/selection/open-state context; re-entering Regulations from Home starts from the default state.
- The final changed-file scope from Wave 4 baseline `82e7e6ca22e1a0992113aee92d73e48e7277bc89` is exactly `data/regulations.js` and `view-renderer.js`.
- Repository Integrity #90 and GitHub Pages #578 passed on the final production SHA.
- Regulations remains governed by D066, `ARCHITECTURE.md`, `UI_STANDARD.md`, and `EXTERNAL_REFERENCE_MAINTENANCE.md`; its closed workstream record is retained under `archive/workstreams/regulations/REGULATIONS-PHASE-0.md`. Future link changes are maintenance and do not reopen the milestone automatically.

**What Should I Throw Phase 0 planning is COMPLETE / PRODUCTION DEFERRED.** D069 owns the locked product/output/input/prerequisite contract. The cross-domain architecture gate is closed: Conditions, Lure/Bait, Technique, and typed intrinsic Compatibility Relationship boundaries are approved for prerequisite production. The active prerequisite sequence is Conditions → Lure/Bait Reference → Techniques → Settings / User Data Architecture → scoped My Tackle Availability Foundation → What Should I Throw recommendation engine + UX pilot. Full Tackle Reference / Find Tackle, Catch Log, Global Search, and Favorites remain later unless a direct dependency is demonstrated.

# Open Cross-Domain Carry-Forward

- UX-001: site-wide context-preserving Parent navigation remains approved/pending implementation under D051 / `UI_STANDARD.md`.
- UX-002: scoped-search helper/example alignment remains pending when affected search source is deliberately reopened.
- Rig `useCases[]` species-specific wording remains parked in `V1-DESIGN-AUDIT.md` under D056.
- UX-009 required final Version 1 site-wide design/mobile audit remains open.

# Exact Resume Point

1. GitHub `main` is authoritative at `0079e663044007beb23409bb1b16b50ed44925fc` after the What Should I Throw Phase 0 documentation closeout merge. The user-authored closeout commit is `fd7d3cdd195611164bab371b5aa895467561133c` (`WSIT Decision Closeout`).
2. What Should I Throw Phase 0 Decisions 1–10 are LOCKED and landed in canonical repository documentation. D069 is the durable product/architecture decision; `03B-CONDITIONS.md`, `03C-LURES-BAIT.md`, `03A-TECHNIQUES.md`, and `09-RELATIONSHIPS.md` own the prerequisite domain contracts.
3. What Should I Throw Phase 0 is **PLANNING COMPLETE / PRODUCTION DEFERRED**. No recommendation-engine production source/data implementation is authorized by this closeout.
4. Documentation closeout is complete. Local Repository Integrity passed with 11 validation groups and no repository content modified. GitHub Repository Integrity run #95 PASS and GitHub Pages run #583 PASS on `0079e663044007beb23409bb1b16b50ed44925fc`. No production application/data/media/config files were changed by this closeout.
5. Exact next product workstream is **Conditions Production Foundation**. Start from `docs/workstreams/CONDITIONS-PRODUCTION.md`, `docs/data-model/03B-CONDITIONS.md`, `docs/data-model/09-RELATIONSHIPS.md`, current Rigs, and the current Live Working State. First production task: finalize the bounded Conditions implementation contract and explicitly disposition existing Rig `conditionTags[]` without blind migration.
