# Freshwater Fishing Companion — Changelog

**Document:** CHANGELOG.md  
**Document Revision:** 3.8.3  
**Document Status:** Approved  
**Role:** Curated meaningful landed-change history  
**Last Updated:** 2026-09-24

# Purpose

This is a curated project changelog, not a second Working State, current-state/resume surface, decision log, or workstream archive. Git history and `archive/` retain detailed historical evidence. Current continuation belongs to the external Live Working State; non-closed carry-forward belongs to `ACTIVE-CHANGE-LEDGER.md`.

# 2026-09-21 — FCC 48 Fish Guide Baseline/UX + Compare Similar Fish — Closed

Implementation commit `9f448d8dbbf92aaa420b361f63f14d4a340bedf4` — `FCC 48I.5 - Compare Similar Fish`  
Final approval-state commit `db5d664c918fe83ce8c9142440573de85395c4c0` — `FCC 48I.5 - Compare Similar Fish`

- Landed the browser-approved Compare Similar Fish workflow: relationship-derived grouped catalog covering all 20 active canonical comparison pairs exactly once, scoped current-Fish chooser behavior, origin-first/left pair ordering, responsive shared comparison composition, contextual Parent/Home routing, and scroll/focus/detail-state restoration.
- Preserved the closed R2 Fish Landing/Search/Browse and R3 Fish Detail baselines; no canonical Fish, relationship, Search, primary-media, or specialized-guidance data owner changed in the Compare implementation.
- Final cumulative diff from `22914354373de6934e1a18e9442699bf8e412b02` is exactly **6 modified paths / 0 deletions**: three production owners (`script.js`, `view-renderer.js`, `forest-journal.css`) plus the then-active repository Working State, `docs/ACTIVE-CHANGE-LEDGER.md`, and `docs/CHANGELOG.md`.
- Repository Integrity run `35682651782` and Pages build/deployment run `35682650788` both passed on final `main` `db5d664c918fe83ce8c9142440573de85395c4c0`. Drive Current pre-closeout bytes matched all six landed GitHub blobs exactly.
- FCC 48 — Fish Guide targeted baseline/UX review + implementation is **CLOSED / PASS / refinement allowed**. The next Reference Knowledge Completion block is the **Knots Guide** targeted baseline/UX review.

# 2026-09-21 — FCC 48J Fish Detail Refinement + Repository Handoff Correction — Closed

Source refinement commit `0303a358680e04efdeedb54f87001a9f121cec56` — `FCC 48J — Fish Guide — R3 Detail Refinements + Review`  
Corrective closeout commit `22914354373de6934e1a18e9442699bf8e412b02` — `FCC 48J - Correct repository handoff and workflow governance`

- Closed the R3 Fish Detail browser-review refinements: single-Rig Fish pages omit redundant Primary/Alternative headings; the Compare Similar Fish arrow uses normal row text color with heavier/larger treatment while preserving the approved row structure; expanded ABOUT THIS FISH content keeps modest top spacing; Fish identity upper spacing is tighter; full-desktop Habitat & Water remains two columns and mobile remains stacked.
- Corrected the repository handoff after the first R3 push: removed the accidentally committed root `CHANGELOG.md` and two FCC 48J manifest files, restored the authoritative repository documentation under `docs/`, and landed the durable FCC package/environment rules.
- The durable workflow now explicitly prohibits ChatGPT Work for FCC and defines review ZIPs as the normal Drive Current → local-repository transfer, including changed repository documentation while excluding manifests, Chat Logs, the external Live Working State, assistant/package reports, and other transport-only artifacts.
- Final corrective commit scope was exactly **11 paths: 8 modified repository documentation/governance files + 3 deletions**, with no production runtime/source change in that corrective commit.
- Repository Integrity run `35678094115` and Pages run `35678093501` passed for the source-refinement commit. Repository Integrity run `35679775720` and Pages run `35679775552` passed for the corrective closeout commit.
- FCC 48J is **CLOSED / PASS**. Exact next Fish implementation block is **FCC 48I.5 — Compare Similar Fish implementation + browser review**.

# 2026-09-21 — FCC 48I Fish Guide Baseline / R3 Checkpoint — Landed

Commit `d243f452a65e969a617941d38a5e3e27a0e26222` — `FCC 48I - Fish Guide Build Edits`

- Landed the cumulative FCC 48I Fish Guide implementation checkpoint across **19 files: 12 locked production owners plus 7 documentation owners, with no deletions**.
- Added the dedicated `data/fish-specialized-guidance.js` owner, strengthened Fish data/source ownership boundaries, reorganized shared Fish JavaScript sections, and expanded repository-integrity validation for the new owner.
- Landed the browser-approved R2 Fish Landing/Search/Browse baseline, including the two-column maximum Fish result layout, deterministic Common Name + `View Fish →` heading treatment, alias-below-image placement, constrained desktop Fish Search width, and application-wide removal of accent bloom from card surfaces.
- Landed the R3 Fish Detail checkpoint with the approved identity/media hierarchy, independent ABOUT THIS FISH disclosures, structured Fish-to-Rig guidance, Safety & Handling / specialized Fish guidance, contextual return-state restoration, and the minimum scoped comparison chooser dependency required by Fish Detail.
- GitHub Repository Integrity run `35657754739` and Pages build/deployment run `35657754169` both passed after push.
- This is a **landed continuity checkpoint, not FCC 48I closeout**. R3 browser review leaves a small Fish Detail refinement pass: suppress Primary/Alternative group labels for a single Rig recommendation and strengthen/neutralize only the Compare Similar Fish arrow. The full-desktop two-column Habitat & Water layout is retained.

# 2026-09-13 — Recommendation Runtime Foundation — Landed

Source/runtime + documentation commit `6ee6917bba43ec6c0fa70f15528d750d34354d6a` — `Recommendation runtime foundation R1`

- Landed the bounded GATE-004 Recommendation runtime foundation after the cumulative 13-file R2 review state passed exact-scope validation and Repository Integrity with 18 validation groups.
- Added `recommendation-engine.js`, wired the runtime through `index.html`, and expanded repository integrity coverage for the Recommendation foundation while preserving the already-approved G4 semantic boundaries.
- The R2 production/runtime bytes were identical to the already-passed R1 browser review, so repeat browser validation was not required.
- Repository Integrity #124 and GitHub Pages #612 passed after push.
- GATE-004 remains ACTIVE / REQUIRED. Exact next production work is authored Recommendation Decision Knowledge and ranking integration; the G4 candidate/executability/simplicity/legality/context items remain pending implementation until that integration is complete.

# 2026-09-02 — Settings / User Data Architecture — Closed

Documentation closeout `ec6ef2e43573400ca25811a48f801565bcc16902` — `Close Settings/User Data architecture`

- Closed GATE-006 after UD-1 through UD-10 were locked / refinement allowed, UD-11 Settings UX Boundary closed / pass, and UD-12 canonical-owner reconciliation retired the former active workstream path.
- Locked Version 1 User Knowledge architecture includes Firebase Authentication + Cloud Firestore, one profile across devices, Firestore offline replication behind an FCC repository boundary, record-scoped schema migration, explicit retention/deletion semantics, profile/device preference ownership, independent My Tackle ownership versus current availability, provider-independent backup/restore, and application-level multi-device conflict/reconciliation rules.
- Archived the final Settings planning record at `archive/workstreams/settings-user-data/SETTINGS-USER-DATA-ARCHITECTURE.md` for reconstruction/design-lineage value.
- Repository Integrity #117 and GitHub Pages #605 passed on the closeout SHA.
- Activated GATE-007 — My Tackle Availability Foundation. What Should I Throw production remains blocked until GATE-007 closes.

# 2026-08-30 — Recommendation Prerequisites Foundation — Closed

Source/runtime commit `cdf8f408011c5137d0351cec9f350d0a6eee66c2` — `Techniques to Rig - Final`  
Documentation closeout `584f97caa4874075f745834145813ac9bdcf78b3` — `Close Recommendation Prerequisites Foundation`

- Closed the combined Recommendation Prerequisites Foundation after Conditions, Lure/Bait Reference, and Techniques/Compatibility passed implementation, runtime review, Repository Integrity, commit-scope verification, and GitHub CI/Pages.
- Current production includes 35 canonical Conditions, 13 canonical Lure/Bait identities, 16 canonical Techniques, and exactly 177 intrinsic Compatibility relationships: 54 Rig↔Lure/Bait, 69 Rig↔Technique, and 54 Lure/Bait↔Technique.
- Preserved Reference/Decision/User Knowledge ownership boundaries; current Rig readiness remains transitional availability rather than My Tackle ownership.
- Repository Integrity #106 and GitHub Pages #594 passed on the final documentation-closeout SHA.
- The next product gate is Settings / User Data Architecture under D067/D069; What Should I Throw production remains deferred behind that gate and the scoped My Tackle Availability Foundation.

# 2026-08-30 — Documentation Current-State Enforcement Repair

- Reconciled active documentation after the Foundation closeout so current-state, architecture, roadmap, data-model, relationship, and active-ledger owners no longer report superseded Foundation staging/blocking states.
- Re-established Live Working State as a compact current operational manifest rather than an append-only checkpoint history; superseded execution history remains in workstream/Changelog/Git evidence.
- Hardened workflow wording so canonical-owner reconciliation plus Live Working State compaction/readback are enforced as execution gates rather than optional closeout hygiene.
- Opened `workstreams/SETTINGS-USER-DATA-ARCHITECTURE.md` as the active planning owner and moved the locked UD-1 synced-profile architecture into the proper User Data/decision/current-state owners.

# 2026-08-27 — Regulations Nationwide Production — Closed

Source commit `fffe2ef518f13fd5d50e5d45af9d9ead7c11045c` — `Regulations - Final Wave`

- Completed the contiguous-U.S. Regulations gateway at **48 states / 180 StateResource records / 2 active StateNotice records**.
- Final user review refined official regulation, licensing, where-to-fish, stocking, and report/forecast destinations while preserving provenance requirements and avoiding redundant cards.
- Texas uses the TPWD HTML Fishing Regulations landing page as the primary Regulations destination; North Carolina retains NC Wildlife freshwater licensing rather than the marine-fisheries DEQ license path.
- Retained state Search after nationwide scaling. Back from an opened state preserves the prior filtered query/selected state when eligible; Home clears transient Regulations query/selection/open-state context.
- Final production diff from Wave 4 baseline contains exactly `data/regulations.js` and `view-renderer.js`.
- Repository Integrity #90 and GitHub Pages #578 passed on the final production SHA.
- Closed REG-001, REG-002, and GATE-014 as terminal Regulations implementation items. The next product milestone is **What Should I Throw?**
- Reconciled the canonical current-state, active-ledger, roadmap, architecture, UI, workstream, and changelog owners so future startup reads do not report pre-closeout Regulations state.

# 2026-08-26 — Live Working State Continuity Guardrail

- Wave 4 startup exposed that the Google Live Working State had stopped at the Wave 1 checkpoint while repository/Drive state had advanced through Waves 2–3.
- Hardened `AGENTS.md`, `DEVELOPMENT_WORKFLOW.md`, and `workflow/DOCUMENTATION-AND-CLOSEOUT.md` so Live Working State is an inline operational ledger: material approvals/state transitions require an immediate write plus readback before dependent work may continue.
- Startup, session-end, and closeout now treat stale/missing/contradictory Live Working State as a blocking continuity defect that must be reconciled from GitHub, Drive Current, repository current-state owners, and current-session facts before progression.
- Reconciled `WORKING_STATE.md` and `ACTIVE-CHANGE-LEDGER.md` to Wave 3 CLOSED / PASS and the Wave 4 data-lock approval gate. No production source/data changed in this continuity correction.

# 2026-08-26 — Regulations Production Waves 2–3

- **Wave 2** expanded Regulations to Alabama, Arizona, Colorado, Connecticut, Delaware, Florida, Georgia, and Idaho, bringing cumulative coverage to 16 states / 59 StateResource records / 2 active StateNotice records.
- Wave 2 mobile review replaced the inline/native mobile state-selection experience with the approved compact selector trigger and contained vertical-only wheel popover while preserving the desktop native selector and existing Search behavior.
- **Wave 3 Review Build 1** added Illinois, Indiana, Iowa, Kentucky, Louisiana, Maine, Maryland, and Massachusetts: 8 new State records, 31 new StateResource records, and 0 new StateNotice records. Cumulative coverage is now **24 states / 90 resources / 2 active notices**.
- Wave 3 moved the explanatory text beginning “Freshwater Fishing Companion links to official…” below the selector/action controls so the actionable state controls remain above the fold on mobile. The user approved the Wave 3 state set and Review Build 1.
- Wave 3 source landed in `7e53d1ae83a6e60674cac4b99c202993cc30f8ef` (`Regulations - Phase 1 - Wave 3 - Review 1`) and is present through merge commit `a6a03b202a5561a05a55a681883eaac5f45dc4a2`; Repository Integrity #79 and GitHub Pages #567 passed, closing Wave 3 PASS.
- A minor spacing increase above the moved explanatory text is deliberately deferred to Wave 4; it does not reopen the approved Wave 3 build.

# 2026-08-26 — Regulations Production Wave 1 — Closed

Source commit `7621d6172bed803558b206dbfca8784540346085` — `Regulations - Wave 1 Final`

- Completed the Regulations Architecture/UX Pilot for Oklahoma, Kansas, Missouri, Arkansas, California, Minnesota, Pennsylvania, and Texas: 8 State records, 30 StateResource records, and 1 active Arkansas StateNotice.
- Added the internal Regulations route, A-Z state selector with retained state-name/two-letter-abbreviation Search, state resource pages, responsibility notice, Safety/Caution Special Alert treatment, consolidated multi-accent resource sections, descriptive official-resource actions, and Regulations as the first Important Dashboard card.
- Added deterministic Regulations schema/provenance/freshness validation, Regulations external-reference checking, and the separate monthly Regulations Maintenance workflow with report-only human-review issue alerting.
- Retained Search after Wave 1 review because it reduces selector scrolling as coverage grows; re-evaluate after a larger state set exists.
- Real-checkout repository integrity passed all 9 validation groups; GitHub Repository Integrity run #71 passed; GitHub Pages deployment passed; desktop/browser and real-mobile review passed.
- Wave 1 is CLOSED / PASS. Wave 2 is next: Alabama, Arizona, Colorado, Connecticut, Delaware, Florida, Georgia, and Idaho.

# 2026-08-25 — Workflow / Documentation Performance Refactor — Closed

- Adopted D068: GitHub `main` owns committed truth; Drive `Working Source/Current` is the complete editable approved-uncommitted repository tree; Live Working State owns active review-cycle context; review ZIPs are transport only; ChatGPT Work is not part of the supported FCC workflow.
- Decomposed the monolithic decision log into `DECISIONS.md` plus six domain decision-body files while preserving D001-D068 identities.
- Consolidated workflow documentation into `DEVELOPMENT_WORKFLOW.md` plus three task procedures: Production Changes, Review and Staging, and Documentation and Closeout.
- Consolidated overlapping UI/card/detail/navigation standards into `UI_STANDARD.md`; `STYLE_GUIDE.md` now owns code/data/file/document conventions only.
- Retired redundant `HANDOFF.md`, `MILESTONES.md`, `SPECIFICATION.md`, separate UI-standard files, workflow helper files, and deferred glossary/Lure/Backup placeholders only after their active content was migrated to surviving owners. Ordinary prior revisions remain recoverable in Git history.
- R2 consolidation landed at `4e982d84ab6207efacfafe4fa92682046c6240cb` (`Consolidate project documentation and workflow`) with 36 documentation/governance paths and no production application changes.
- Post-commit integrity validation caught stale references/status text left by R2. The bounded direct documentation correction closed those defects, restored link/anchor integrity, and released Regulations Phase 0 as the next active workstream.

# 2026-08-25 — Regulations / User Data Sequencing

Commit `af3bffb9995d56f8b9e47236bbadfa481d88cc34` — `Document nationwide Regulations milestone and user-data sequencing`

- Approved D066: Regulations becomes a state-first official-resource gateway for the 48 contiguous U.S. states as a deliberate geographic exception to the Four-State curated-content scope.
- Approved D067: Settings / User Data Architecture must precede material Tackle Reference expansion, My Tackle, and Catch Log so user identity/persistence/retention/migration/backup ownership is settled first.
- Established `docs/workstreams/REGULATIONS-PHASE-0.md` as the planning owner; that closed workstream record is now ARCHIVED at `archive/workstreams/regulations/REGULATIONS-PHASE-0.md`.

# 2026-08-25 — Fish Guide Version 1 / Wave 4 — Closed

Source commit `fb951a18bdd4c33681644d188a45f2926114158d` — `Fish - Wave 4 - Sunfish & Crappie Final`

- Completed the locked 30-Fish Version 1 production library.
- Completed 30 primary Fish identification-media attachments and the approved 20-pair deterministic comparison graph.
- Completed Wave 4 Sunfish & Crappie production data/media/guidance and site-wide comparison-card multi-accent correction.
- Desktop and actual-mobile review passed; repository integrity passed for the source commit.
- Fish Guide Version 1 is PASS / FINALIZED / CLOSED. Future Fish additions/corrections are maintenance/new scope and do not reopen the milestone automatically.

# 2026-08-24 — Fish Guide Wave 3 — Bass — Closed

Source commit `0b982bbbe10b0b2758759869e6682d6b6734475e` — `Fish - Wave 3 - Bass Final`  
Documentation closeout `19b91b6303b3a3369f0c0a9dd6ac1018457d9b7f` — `Fish - Wave 3 - Closeout Documentation`

- Added the six approved Bass records, primary media, deterministic comparison pairs, and Fish-to-Rig guidance.
- Preserved D056 single-owner relationship semantics; species applicability belongs in Fish-to-Rig guidance rather than Rig intrinsic data.
- Closed Wave 3 after desktop/mobile and post-push validation.

# 2026-08-22 — Fish Guide Wave 2 — Walleye / Sauger / Catfish — Closed

Source commit `8399ae0cee0f5c4b9301041c904707430352bbd1` — `Fish - Walleye Sauger Refinement`  
Comparison refinement `d55cf21d7de0099c259de70ad5b113a4d78ea91d`; merged baseline `f47ece0d243457d90a8b980855130af043d98a05`

- Completed the Wave 2 Fish records/media/guidance/comparison refinements.
- Final Compare Fish desktop/mobile review passed.

# Knots Milestone — Closed

- Established the canonical 10-Knot library and four Core Knots.
- Added deterministic task-first Knot search/navigation and canonical in-app tying instructions.
- Completed verified instructional-media coverage for all Version 1 Knots.
- Completed Reel & Line Setup guidance for Spinning, Spincast, and Baitcasting with connected Knot handoffs.
- Closed the milestone after repository/runtime validation.

# Rig Guide / Tackle Foundation — Closed Baseline

- Established the canonical Rig library and connected Rig -> Tackle component ownership model.
- Completed the Four-State adequacy audit; Split-Shot Bait Rig became canonical Rig #21 and no other material ordinary-Rig gap remained.
- Established 29 canonical functional Tackle concepts with reusable recognition media.
- Established D056 semantic single-owner relationship rules and derived reverse navigation.
- Current My Tackle/readiness behavior remains transitional until the User Data architecture gate.

# Earlier Project History

Earlier incremental implementation, audit, UI restoration, media/source validation, repository workflow transition, and documentation changes remain fully recoverable in Git history and, where independently useful, under `archive/`. They are intentionally not duplicated here line-by-line.

This changelog should remain curated. Add entries for meaningful landed milestones, architectural transitions, significant fixes, and closeouts—not every mechanical edit.
