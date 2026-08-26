# Freshwater Fishing Companion — Changelog

**Document:** CHANGELOG.md  
**Document Revision:** 3.1.0  
**Document Status:** Approved  
**Role:** Curated meaningful landed-change history  
**Last Updated:** 2026-08-26

# Purpose

This is a curated project changelog, not a second Working State, decision log, or workstream archive. Git history and `archive/` retain detailed historical evidence. Current continuation belongs to `WORKING_STATE.md`; non-closed carry-forward belongs to `ACTIVE-CHANGE-LEDGER.md`.

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
- Established `docs/workstreams/REGULATIONS-PHASE-0.md` as the planning owner; no production Regulations source/data is authorized until its completion gate is approved.

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
