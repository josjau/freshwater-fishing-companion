# Freshwater Fishing Companion — Working State

**Document:** WORKING_STATE.md  
**Document Revision:** 1.17.18  
**Document Status:** Approved — Active Repository Continuity Record  
**Workstream Status:** What Should I Throw Phase 0 — PLANNING COMPLETE / PRODUCTION DEFERRED; Recommendation Prerequisites Foundation — PRODUCTION ACTIVE / SUBPHASE C IMPLEMENTED / USER RUNTIME PASS / PRE-COMMIT VALIDATION PENDING  
**Cleanup Implementation Commit:** `0ea6420f2ac203281c5bab33b96ab5fcc6409947`  
**Last Updated:** 2026-08-30

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

Recommendation Prerequisites Foundation production is **ACTIVE** on GitHub main `3b5e77f0772b306977edb0252d5f9004069318f7` (`Lure/Bait UX fixes`). Subphase B is **PASS / committed / CI-PASS** with Repository Integrity #104 and GitHub Pages #592 passing. Subphase C planning/build closeout, implementation, targeted validation, and representative runtime/browser review are **PASS**. Drive Current contains the exact 16-Technique production dataset and exactly 177 Compatibility relationships (54 Rig↔Lure/Bait, 69 Rig↔Technique, 54 Lure/Bait↔Technique), plus the approved Direct-Tie configuration-aware Technique intersection repair. The remaining pre-commit gates are full local Repository Integrity and exact changed-file diff/scope review. The separate Version 1 Design Audit carries the cross-Rig **Knots You'll Tie** attachment/application consistency item, the site-wide knowledge-card element standardization pass, and the non-blocking Technique-chip layout refinement.

# Open Cross-Domain Carry-Forward

- UX-001: site-wide context-preserving Parent navigation remains approved/pending implementation under D051 / `UI_STANDARD.md`.
- UX-002: scoped-search helper/example alignment remains pending when affected search source is deliberately reopened.
- Rig `useCases[]` species-specific wording remains parked in `V1-DESIGN-AUDIT.md` under D056.
- UX-009 required final Version 1 site-wide design/mobile audit remains open.

# Exact Resume Point

1. GitHub `main` is authoritative at `3b5e77f0772b306977edb0252d5f9004069318f7` (`Lure/Bait UX fixes`), parent `577fdb0f9b86990ede1258ae526de59d663cbf82`. Repository Integrity #104 and GitHub Pages #592 passed.
2. What Should I Throw Phase 0 is **PLANNING COMPLETE / PRODUCTION DEFERRED / CLOSED-PASS** under D069.
3. Recommendation Prerequisites Foundation Subphase A and Subphase B are complete for their approved current scope; Subphase B is committed/CI-PASS.
4. Subphase C C1–C3 planning, planning-to-build documentation closeout, implementation, targeted validation, and representative browser review are **PASS**.
5. `03A-TECHNIQUES.md` owns the exact 16-Technique production content. `09-RELATIONSHIPS.md` owns the exact 54 Rig↔Lure/Bait, 69 Rig↔Technique, and 54 Lure/Bait↔Technique scopes, for exactly 177 Compatibility relationships.
6. The approved source/runtime implementation scope is exactly: new `data/techniques.js`, new `data/compatibility.js`, plus `index.html`, `view-renderer.js`, `forest-journal.css`, and `tools/validate_repository_integrity.js`. Direct-Tie display now intersects its Rig↔Technique set with the selected Lure/Bait↔Technique set; the relationship registry itself remains unchanged.
7. **Exact resume:** run full local Repository Integrity and exact local changed-file diff/scope review against GitHub baseline `3b5e77f0772b306977edb0252d5f9004069318f7`. Do not commit/push until both gates PASS.

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

# Subphase B Third Runtime Repair — 2026-08-29

Third browser review accepted Condition popover centering and scroll containment but found inconsistent Fish chip affordance/padding, overly long Best For chips, and tutorial-media issues. The bounded repair is staged and targeted PASS. All 16 current Fish Common Habitat/Common Waters labels now have a live reference path: 13 use canonical Condition popovers and Fish-owned `Cold Water`, `Current`, and `Mud` use explicit Fish Habitat explanations because converting them into Conditions would violate semantics. Rig Good Conditions now renders only labels with canonical Condition mappings while preserving frozen legacy `conditionTags[]` in source. Condition/Fish chips use the compact 32px / 3px 9px control treatment. Direct-Tie plus the two new Rig Best For values are shortened. Jerkbait remains without an embedded tutorial pending an approved hard-jerkbait video. Spoon uses `pLsX7nhM1qk` (*You're Doing It Wrong: How to Rig a Spoon Lure for Beginners* — Anglers). Tube Jig uses `EibSWhI6nbM` (*How To Rig A Tube Bait The Right Way* — BassResource - The Ultimate Bass Fishing Resource) because the previous Arcasting embed blocks playback on other sites. JavaScript syntax and targeted Fish-label/tutorial/mapping checks pass. Runtime re-review remains required before Subphase C.


# Subphase B Third Runtime Review Closeout — 2026-08-29

Session closeout records the latest browser review without making additional production-source changes after that review. Popover centering/scroll containment and Tube Jig served playback are accepted. The remaining bounded repair is the knowledge-chip/Best For visual-semantic distinction and compact density described above; the separate Knots You'll Tie attachment/application consistency issue is parked in the Version 1 Design Audit. Subphase C remains blocked. No commit or push was performed or authorized during this closeout.


# Subphase B Fourth Runtime Review — 2026-08-30 — PASS

User approved Review 4. The bounded UX repair is accepted: clickable Condition/Fish knowledge-reference chips now use a distinct interactive accent/background and compact density, while static Best For labels remain visually neutral/distinct. Previously accepted centered reference popovers, internal-scroll/background lock behavior, Direct-Tie/Rig behavior, Fish→configured Inline Spinner navigation, and the BassResource Tube Jig tutorial remain accepted.

**Subphase B — Lure/Bait Reference plus required Rig/Tackle changes is PASS.** The user committed and pushed the approved Review 4 CSS as GitHub main `3b5e77f0772b306977edb0252d5f9004069318f7` (`Lure/Bait UX fixes`), parent `577fdb0f9b86990ede1258ae526de59d663cbf82`. Changed-file scope is exactly `forest-journal.css` (9 additions / 3 deletions). Repository Integrity #104 PASS and GitHub Pages #592 PASS. Subphase C — Techniques + Compatibility is now the next active Foundation subphase.

**UX Design Audit carry-forward:** perform a site-wide knowledge-card element audit. Inventory every recurring element inside knowledge/reference cards and standardize equivalent formatting/interaction across card types, including headings, chips/labels, links, popover triggers, metadata, controls, media, spacing, states, typography, and mobile density. Preserve semantic distinctions such as clickable knowledge chips versus passive Best For labels. The existing Knots You'll Tie attachment/application consistency audit remains part of the same future UX Design Audit.

**Exact resume:** Recommendation Prerequisites Foundation Subphase B is complete/PASS and committed on GitHub main `3b5e77f0772b306977edb0252d5f9004069318f7`. Repository Integrity #104 and GitHub Pages #592 passed. Next substantive product work is **Subphase C — Techniques + Compatibility**, following the locked RP-C1–RP-C4 plan. Begin with the Subphase C planning/build gate against current GitHub main and Drive Current; do not reopen Subphase B unless a regression is found.


# Subphase C Planning-to-Build Closeout — 2026-08-30 — PASS

Subphase B is PASS / committed / CI-PASS on GitHub `3b5e77f0772b306977edb0252d5f9004069318f7`; Repository Integrity #104 and GitHub Pages #592 passed. Subphase C C1–C3 planning is approved and documentation-closeout PASS.

The B-01–B-05 count-only Compatibility defect is resolved by explicit approval of the exact 31-pair set. The complete Rig↔Lure/Bait scope is exactly 54. The C2 exact-content preservation defect is resolved by explicit approval of the replacement 16-Technique production copy, now owned by `03A-TECHNIQUES.md`. `09-RELATIONSHIPS.md` owns exact 54 Rig↔Lure/Bait, 69 Rig↔Technique, and 54 Lure/Bait↔Technique scopes, for exactly 177 Compatibility relationships.

Authorized implementation scope is exactly six source/runtime files: new `data/techniques.js`, new `data/compatibility.js`, plus `index.html`, `view-renderer.js`, `forest-journal.css`, and `tools/validate_repository_integrity.js`. Rig/Lure/Fish guidance, `script.js`, `search.js`, and media are outside the authorized C build scope.

**Exact resume:** begin Subphase C production implementation. Re-verify GitHub `main` at `3b5e77f0772b306977edb0252d5f9004069318f7`, fetch the matching Drive Current source files, then implement the approved six-file scope. Targeted validation must prove exact 16 Technique records, exact 54/69/54 Compatibility family sets / 177 total, deterministic IDs, participant integrity, script order, renderer/popover wiring, three-column desktop Rig At-a-Glance with stacked mobile behavior, and representative six-Rig runtime review before approval/commit.
