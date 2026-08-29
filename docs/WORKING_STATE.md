# Freshwater Fishing Companion — Working State

**Document:** WORKING_STATE.md  
**Document Revision:** 1.17.9  
**Document Status:** Approved — Active Repository Continuity Record  
**Workstream Status:** What Should I Throw Phase 0 — PLANNING COMPLETE / PRODUCTION DEFERRED; Recommendation Prerequisites Foundation — PRODUCTION ACTIVE / SUBPHASE B REPAIR STAGED / TARGETED PASS / RUNTIME RE-REVIEW PENDING / TECHNIQUES-COMPATIBILITY BLOCKED  
**Cleanup Implementation Commit:** `0ea6420f2ac203281c5bab33b96ab5fcc6409947`  
**Last Updated:** 2026-08-29

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

### Bounded Regulations Maintenance Repair — CLOSED / PASS

The four approved Regulations maintenance link corrections are implemented on GitHub `main` in commit `d53caf84c5f22f00aef92f2c6cd21557c4c57ce1` (`Correct Regulations maintenance links`). The commit changed only `data/regulations.js` (15 additions / 15 deletions); committed blob `e7042e915bde6c0e991c21178d1f95572141bc2c`. Repository Integrity #99 and GitHub Pages #587 passed. This maintenance repair does not reopen the closed Regulations milestone.

**What Should I Throw Phase 0 planning is COMPLETE / PRODUCTION DEFERRED.** D069 owns the locked product/output/input/prerequisite contract. Conditions, Lure/Bait, Technique, and typed intrinsic Compatibility Relationship boundaries remain distinct approved domains, but their production work is now grouped into one active **Recommendation Prerequisites Foundation** workstream with gated subphases in the preserved order Conditions → Lure/Bait Reference → Techniques/Compatibility. Settings / User Data Architecture, scoped My Tackle Availability Foundation, and What Should I Throw recommendation production remain subsequent separate milestones. Full Tackle Reference / Find Tackle, Catch Log, Global Search, and Favorites remain later unless a direct dependency is demonstrated.

Recommendation Prerequisites Foundation production is **ACTIVE**. Planning remains COMPLETE / DOCUMENTATION-CLOSED with RP-A1–RP-A4, RP-B1, RP-B2A–RP-B2D, B-01–B-13, and RP-C1–RP-C4 LOCKED. **Subphase A — Conditions remains data/schema/static targeted PASS.** The previously failed Good Conditions runtime presentation has now been repaired in Drive Current with supported legacy tags rendered as contextual Condition-reference controls backed by canonical `CONDITION_DATA`; this is a presentation bridge only and does not add Rig `conditionIds[]` or a Rig↔Condition relationship. **Subphase B repair is now STAGED in Drive Current with targeted data/static validation PASS and runtime re-review pending.** The repair restores the existing component-card grammar for required Lure/Bait (checkbox, Missing count, `ⓘ` recognition/detail popover), removes the oversized primary-lure page image, adds approved Paddle-tail Swimbait and Tube recognition Media, expands beginner tie-point instructions, refines the Direct-Tie selector, and alphabetizes Core Rig cards. Fish guidance opening Direct-Tie with Inline Spinner selected must remain unchanged. Local-file YouTube failures are still treated as an environment limitation; tutorial playback must be revalidated from a served/GitHub environment. Jerkbait and Spoon tutorial selection remains open while the user researches suitable tying/setup videos. **Subphase C Techniques/Compatibility remains BLOCKED until the second browser review passes.**

# Open Cross-Domain Carry-Forward

- UX-001: site-wide context-preserving Parent navigation remains approved/pending implementation under D051 / `UI_STANDARD.md`.
- UX-002: scoped-search helper/example alignment remains pending when affected search source is deliberately reopened.
- Rig `useCases[]` species-specific wording remains parked in `V1-DESIGN-AUDIT.md` under D056.
- UX-009 required final Version 1 site-wide design/mobile audit remains open.

# Exact Resume Point

1. GitHub `main` is authoritative at `301acd22cc016a1a94d87504bcc785fcada7506c` (`Delete SHA256SUMS.txt`). This housekeeping commit removes only the transient root `SHA256SUMS.txt`; Drive Working Source/Current already has no matching file, so the editable working tree remains aligned.
2. What Should I Throw Phase 0 is **PLANNING COMPLETE / PRODUCTION DEFERRED / CLOSED-PASS** under D069.
3. Recommendation Prerequisites Foundation planning is **COMPLETE / DOCUMENTATION-CLOSED**. RP-A1–RP-A4, RP-B1, RP-B2A–RP-B2D, B-01–B-13, and RP-C1–RP-C4 remain locked and reconciled into their canonical Drive Current owners.
4. **Subphase A — Conditions:** implementation is staged in Drive Current and targeted validation is **PASS**. The bounded checks confirm the exact 33-record/8-category registry, exact field shape/lifecycle, frozen 17-value Rig legacy-tag vocabulary, no Rig `conditionIds[]`, valid production script order, JS syntax, and static shared-popover wiring. Full Repository Integrity and final combined review/commit/CI remain pending at the Foundation closeout boundary.
5. **Subphase B checkpoint:** the bounded repair is staged in Drive Current and targeted static/data checks PASS for exact 13 Lure/Bait / 31 Tackle / 23 Rig counts, 7/7 required Rig-facing Lure/Bait recognition Media records, the two new 640×440 approved assets, alphabetized Core IDs, repaired Lure/Bait readiness/popover wiring, expanded tie-point instructions, and Good Conditions contextual controls. Browser/runtime acceptance is still pending.
6. **Documentation checkpoint:** the repair implementation state is reconciled into `WORKING_STATE.md`, `ACTIVE-CHANGE-LEDGER.md`, `workstreams/RECOMMENDATION-PREREQUISITES-FOUNDATION.md`, `data-model/03-RIGS.md`, `03C-LURES-BAIT.md`, and `03B-CONDITIONS.md`. The next review ZIP must contain Git-bound repository files only.
7. **Exact resume:** issue the clean Git-bound repaired Subphase B review overlay and perform the second browser review. Review the Lure/Bait component-card/readiness/popovers, Paddle-tail/Tube media, tie instructions, selector styling, alphabetized Core cards, Good Conditions popovers, preserved Fish→Direct-Tie Inline Spinner navigation, and tutorial playback from a served/GitHub environment. **Do not begin Subphase C** until this runtime checkpoint passes. No commit/push is authorized.

# Subphase B Runtime Review — 2026-08-28 — FAIL

User browser review of the staged A+B overlay found material runtime/UX defects. This remains a **blocking product/source review failure**, with one important environment distinction: YouTube embed errors observed only from the local file copy are not yet classified as production tutorial defects because existing committed Rig tutorials show the same local failure while loading correctly from the GitHub-served application.

## Corrected recorded defects / required repairs

1. **Lure/Bait requirement card formatting is wrong.** This is not a new readiness model. The existing Rig behavior is the model: each required component has a checkbox, unchecked required components contribute to the Missing count, and the status changes to Tackle Ready only when every required item is checked. Required Lure/Bait must participate in that same transitional component-availability check.
2. **Primary Lure/Bait recognition and details belong in the component popover.** The Lure/Bait requirement card needs a clickable `ⓘ`, matching unaffected Rig components such as Bobber Stop / Clip-on Bobber. The popover should contain the approved recognition image plus useful component/reference details.
3. **Remove the oversized primary-lure image from the Rig page.** The full-width Inline Spinner/Crankbait-style image is the wrong presentation. That image belongs inside the Lure/Bait `ⓘ` popover described above; these are one combined UI defect, not separate image and popover features.
4. **At review time, Paddle-tail Swimbait had no recognition Media.** This finding required a canonical Lure/Bait reference image/Media attachment for Weighted Swimbait Hook Rig; the 2026-08-29 repair now supplies the approved asset.
5. **At review time, Tube had no recognition Media.** This finding required a canonical Lure/Bait reference image/Media attachment for Tube Jig Rig; the 2026-08-29 repair now supplies the approved asset.
6. **Tie instructions need beginner-specific attachment detail.** For Direct-Tie and the two new Rigs, identify exactly where line/leader attaches and how the angler recognizes that point: R-bend/line-tie eye, lure eye or retained split ring, hook eye, exposed tube-jig eye, etc. State optional-hardware disposition explicitly.
7. **Setup Type / Lure Type selector needs visual refinement.** Keep the five locked Direct-Tie configurations and keyboard accessibility, but restyle the selector to fit the established FCC Rig UI rather than the raw/native-looking control.
8. **Core Rig cards must be alphabetized.** Core is not a special teaching-order exception. Render the six Core Rig cards alphabetically, consistent with the other Rig card groups.
9. **Good Conditions contextual help is missing at runtime.** Each supported Good Conditions tag must open the shared lightweight Condition detail popover backed by canonical `CONDITION_DATA`; retain RP-A4 boundaries (no Conditions route and no Rig↔Condition relationship).
10. **Fish → configured lure navigation passed.** Preserve Fish guidance opening Direct-Tie with Inline Spinner already selected.
11. **YouTube local-file failures require served-environment revalidation, not immediate video replacement.** Spinnerbait/Crankbait/Weighted Swimbait Hook/Tube tutorial errors 153/15 were seen from the local file copy. Existing committed Rig videos also fail locally but load from the GitHub-served site. Do not classify those selected videos as defective solely from local playback; validate all tutorial embeds on a served/GitHub build during the next runtime pass.
12. **Jerkbait and Spoon tutorial selection remains open.** The user will continue looking for tying/setup videos. Do not lock the previously mentioned candidates or silently fall back to manufacturer/reference pages as the final tutorial presentation.

## Repair implementation checkpoint — 2026-08-29

The bounded repair is now **STAGED / TARGETED STATIC+DATA PASS / RUNTIME RE-REVIEW PENDING**.

- Lure/Bait requirements now use the existing Rig component-card availability grammar: checkbox, Missing-count participation, and clickable `ⓘ` recognition/detail popover.
- The oversized full-width primary-lure image has been removed from Rig Detail; recognition imagery is shown in the popover.
- User-approved Paddle-tail Swimbait and Tube recognition assets are attached as canonical `ownerType: "lure-bait"` Media.
- Direct-Tie and the two new Rigs now identify exact beginner tie points and optional-hardware disposition more explicitly.
- The Setup Type / Lure Type selector is restyled within the FCC control grammar while retaining the five locked configurations and native keyboard behavior.
- Core Rig cards are alphabetized.
- Supported frozen Good Conditions tags now expose canonical Condition explanations through the shared popover; no Conditions route, Rig `conditionIds[]`, or Rig↔Condition relationship was added.
- Fish→Direct-Tie Inline Spinner behavior remains a preserve/pass target.
- Tutorial playback remains a served/GitHub-environment acceptance check; local `file://` failures are not accepted as video-source failures.
- Jerkbait and Spoon tutorial selection remains open.

**Gate:** Subphase C remains BLOCKED until the repaired browser/runtime review passes. No commit/push is authorized.