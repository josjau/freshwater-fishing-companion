# Freshwater Fishing Companion


**Document:** ROADMAP.md  
**Document Revision:** 0.12.7  
**Document Status:** Approved  
**Role:** Product milestone order and future direction  
**Last Updated:** 2026-09-28


# Purpose


This document defines the canonical planned product-development direction for Freshwater Fishing Companion.


It deliberately does **not** own exact active workstream status, current commit baselines, validation package state, or session resume instructions. Operational continuity and exact resume belong to the external Live Working State; material non-closed cross-workstream carry-forward belongs to `ACTIVE-CHANGE-LEDGER.md`; detailed active scope belongs to the active workstream.


It does not override `DECISIONS.md` or `ARCHITECTURE.md`.


# Development Philosophy


- Develop in coherent, testable segments.
- Plan twice and build once.
- Correctness before polish.
- Actual demonstrated need before theoretical scale.
- One source of truth per semantic fact/relationship.
- Finish/validate the current segment before beginning a dependent segment.
- Resolve foundational User Knowledge storage questions before persistent user-data features and before materially expanding Tackle architecture.
- Prioritize practical first-time-angler blockers before advanced specializations.


# Regional Content Direction


Forward Version 1 curated-content focus:


- Northeast Oklahoma
- Southeast Kansas
- Southwest Missouri
- Northwest Arkansas


Existing validated domains retain their original selection/validation context until deliberately reconciled.


Regional reconciliation is progressive/additive by default: important missing regional coverage may be added when a domain is audited or materially modified, but valid existing content is not automatically removed or invalidated merely because geographic focus expanded.


The original validated 20-Rig library remains canonical. The additive Four-State adequacy audit is complete and added Split-Shot Bait Rig as canonical Rig #21; no other material ordinary-Rig gap remains open from that audit.


**Regulations is the deliberate geographic exception.** Its approved resource-navigation coverage is the 48 contiguous U.S. states. That does not expand Fish, Rig, recommendation, or other curated-content scope beyond separately approved regional boundaries.


# FCC 46C — Approved Dependency Constraints


FCC 46C is **CLOSED / APPROVED WITH REVISIONS ALLOWED** and defines the dependency model that must constrain the next roadmap-resequencing gate. This checkpoint classifies relationships as **Hard — Functional**, **Hard — Completion**, **Conditional Hard**, **Soft**, **Independent / Parallel**, or **Optional / Triggered**. These classifications describe actual prerequisite relationships rather than inherited milestone numbering.


Approved constraints:


- **What Should I Throw / Best Overall:** requires the canonical Fish/Rig/Lure-Bait/Technique/Condition foundations, Intrinsic Rig–Lure–Technique Compatibility, Recommendation Decision Knowledge, and candidate/context/ranking behavior. Fish↔Rig Suitability plus required input migrations are completion-hard for authoritative candidate generation but do not block Decision Knowledge authoring. Universal legal caution + official-resource routing is completion-hard. Structured OK/KS/MO/AR Recommendation Legality is conditional-hard, not a universal functional prerequisite. My Tackle, the User Knowledge Platform, Tackle Reference, and commercial SKU guidance are not hard prerequisites for Best Overall.
- **Best Currently Available / full approved WSIT closure:** Best Overall is a prerequisite, and authoritative persistent My Tackle + Current Availability + the G4-EQUIP executability contract require the minimum operational User Knowledge substrate. My Tackle is therefore hard for Best Currently Available and for full approved WSIT closure, but not for Best Overall. My Tackle portability/backup and full-profile recovery are not computational prerequisites for Recommendation ranking.
- **User Knowledge Platform:** do not treat the complete platform as one giant front-loaded gate. Stable identity/authentication and secure persistence are hard for authoritative synchronized User Knowledge; record identity/revision/write semantics become hard when records are editable; sync/conflict protection is completion-hard for the approved synchronized model. Full recovery/Data Management surfaces are completion/release requirements rather than prerequisites for the first My Tackle/Catch Log CRUD slice.
- **Choose a Setup / Start Here:** hard inputs are the approved Rod/Reel/Line functional specification and the commercial guidance required by the purchasing portion. Authentication, synchronized User Knowledge, My Tackle, Tackle Reference, and WSIT are not hard prerequisites. Saved plans may persist device-locally; explicit Add/Mark Owned is the later ownership handoff.
- **Starter Tackle Box:** the final functional package/Core-Rig coverage is functionally hard; exact sizes/masses/strengths/variants plus the required commercial guidance are completion-hard. Authentication/User Knowledge is not required. My Tackle ownership handoff and Tackle Reference are soft integrations; WSIT is independent.
- **Persistent My Tackle:** requires the minimum User Knowledge identity/persistence substrate, canonical ownership mappings, and management UX. Bulk import plus XLSX/CSV/TSV/JSON portability and My-Tackle-specific backup/restore are hard for the complete Version 1 My Tackle package under TACKLE-005, but Recommendation may consume manually entered ownership before those portability surfaces close. Full-profile UD-9 recovery remains a release/data-safety requirement rather than a first-CRUD prerequisite.
- **Tackle Reference:** is largely independent and may proceed in parallel once its canonical Tackle model/relationships and UX contract are sufficient. It does not require WSIT, User Knowledge, My Tackle, Catch Log, Appearance, or Global Search.
- **Conditions, Lure/Bait, and Techniques:** their semantic/data foundations are already complete and they do not become new standalone roadmap blockers solely because every possible standalone UX surface is not equally mature. Required presentation may be completed with the consuming feature unless a separate dedicated feature is approved.
- **Recommendation → commercial product guidance handoff:** is soft for Recommendation core and becomes hard only for a Recommendation UX that explicitly promises commercial purchasing suggestions. D069 continues to own fishing selection/ranking/context while D023 owns commercial guidance.
- **Profile / Preferences:** consume the User Knowledge substrate but are not global prerequisites for every User Knowledge feature. Full Profile/Preferences UI is hard only where a specific implemented behavior depends on it.
- **Catch Log:** requires the minimum User Knowledge substrate but has no hard dependency on WSIT, My Tackle, Tackle Reference, Global Search, Favorites, or Appearance. Its historically late placement is primarily prioritization, not a technical prerequisite chain.
- **Global Search:** requires the entity/routes it intends to search to be sufficiently stable, not every Version 1 feature to be complete. Personal/workflow domains are not implicitly in scope.
- **Appearance — Theme + Color Scheme:** is externally independent from Recommendation, My Tackle, Catch Log, Search, and similar functional capabilities, but has an internal hard dependency: a production Theme may expose only intentionally designed and validated Light/Dark variants. System selects among supported validated variants; it is not a generic transformation. Forest Journal is already dark-oriented, so its Dark variant should preserve the current readable visual range rather than simply become darker. Appearance must be stabilized before the final UX/mobile audit.
- **Favorites:** remains an optional/evidence-triggered final decision. No other Version 1 capability waits on Favorites; if retained, its own implementation remains work.
- **Control / release gates:** V1-REPO-AUDIT, GATE-012 disaster recovery/reconstruction, and UX-009 are completion/release controls rather than front-loaded feature prerequisites. GATE-012 must close before major Version 1 release or earlier before irreplaceable User Knowledge enters scope. UX-009 closes after functional scope and supported Appearance variants are stable; Knot local visual instruction remains conditional within that audit. Regulations maintenance follow-up remains non-blocking.


**Roadmap status:** FCC 47 has now resequenced the remaining Version 1 work from this dependency model. The historical milestone sections below remain useful domain records, but their old numbering is not the current dependency or execution order.


# FCC 47 — Knowledge-First Roadmap Foundation — Historical / Superseded Sequencing


FCC 47 is **CLOSED / APPROVED WITH REVISIONS ALLOWED** and remains the durable origin of the knowledge-first principle: Freshwater Fishing Companion should establish a coherent, polished, cross-linked Reference Knowledge experience before persistent User Knowledge becomes the primary product focus. Its former detailed Phase 1–5 execution ordering is superseded by FCC 49J-K below. Git history preserves the prior ordering; this document now maintains only the current active sequence.


**Conditions remains supporting/contextual Reference Knowledge rather than a top-level Guide.** Present Condition explanations through consuming surfaces such as Recommendation inputs, Rig/Technique context, rationale, and contextual help rather than creating a standalone Conditions Guide.


### Reference Knowledge visual rule


The Guides should look like members of the same application family without forcing unlike information into one universal card template. Equivalent elements across Guides should match in appearance and behavior; domain-specific information may use intentional Guide-specific visual language. Fish Guide establishes the starting baseline only after its recurring elements have been deliberately reviewed and the relevant section has passed approval/validation. That validated rule set is then carried forward and challenged as each later Guide is reviewed.


# FCC 49J-K — Approved Remaining Version 1 Build Order


FCC 49J-K is **APPROVED WITH REVISIONS ALLOWED**. The order below is the canonical remaining Version 1 execution target. It is deliberately dependency-aware rather than a claim that every earlier item is a technical prerequisite for every later item. The sequence balances hard prerequisites, product completeness, avoidance of temporary/duplicate persistence, downstream-unlock value, and the goal of making FCC feel progressively usable rather than perpetually unfinished.


The user explicitly reserves the right to revise this sequence. A future reorder is valid when a concrete dependency, implementation constraint, safety/recovery requirement, or materially better product-value reason is demonstrated and the roadmap is explicitly revised. Do not reopen the order merely because an older milestone number or historical phase placed work differently.


## Canonical Build Order


1. **Rig Guide — Full Guide Audit & Refinement** — complete the existing high-value Rig surface first. It already helps anglers fish now, and its audit exposes downstream Tackle, Technique, Reel Setup, relationship, semantic-ownership, navigation, density, and RIG-001 issues while those dependencies can still be corrected cleanly.
2. **Technique — Knowledge/Data Audit + Technique Guide Build** — audit the existing canonical Technique knowledge/relationships/source organization, then build the user-facing reusable **How to Fish It** Guide in the same domain workstream. This closes a major instructional gap and prevents Recommendation from depending on a domain whose user-facing teaching surface is unfinished.
3. **Regulations — Full Guide Audit & Refinement** — refine the already-usable 48-state official-resource gateway so the major existing Reference Knowledge surfaces are polished before attention shifts toward mostly new features. Preserve its approved legal-resource/provenance boundary.
4. **Tackle Guide — Knowledge Audit + Guide Build** — finish the remaining major Reference Knowledge destination. Canonical Tackle is already an important dependency of Rig **What You Need**; the Guide gives those concepts a proper browse/search/recognition/learning destination while remaining distinct from My Tackle ownership and commercial catalog scope.
5. **Reference Knowledge Cohesion Review** — after Fish, Knots, Rig, Technique, Regulations, and Tackle are established, verify equivalent-element consistency, cross-guide navigation, terminology, search/browse behavior, responsive presentation, and missing destinations as one connected learning system. This is intentionally before the primary Recommendation/User Knowledge expansion so later features consume a stable Reference Knowledge layer.
6. **What Should I Throw? — Recommendation Decision Knowledge + Best Overall** — build the inventory-independent recommendation path while its Reference Knowledge inputs are stable. Best Overall does not require authentication or My Tackle; building it here provides a major useful capability before account-dependent work and establishes the ranking/context engine later reused by Best Currently Available.
7. **User Account, Profile & Sync Foundation** — build the real Version 1 account platform, not a temporary/minimal substitute: Firebase Authentication, approved email/password + Google Sign-In, the deliberately small FCC Profile surface, Cloud Firestore profile-scoped persistence, authenticated security rules, FCC repository/data-access abstraction, supported offline/sync behavior, record/schema/revision/conflict/deletion foundations, and required auth/sync status handling. Authentication is not a technical prerequisite for every remaining independent feature, but after Best Overall it becomes the next dependency-critical foundation for nearly every remaining persistent or personalized workflow. **GATE-012 repository disaster-recovery/reconstruction must close before the project proceeds into meaningful irreplaceable User Knowledge.**
8. **Persistent My Tackle** — make My Tackle the sole authoritative persistent ownership source on the real profile/sync substrate. Complete the applicable Version 1 management, canonical mapping, quantity/variant, import/export, and My-Tackle-specific protection requirements so later tools derive ownership rather than inventing parallel checklists or local-only ownership state.
9. **Choose a Setup / Start Here** — the advisor may technically run anonymously, but the complete Version 1 experience is intentionally scheduled after account/My Tackle persistence. A selected Fishing Setup can then be saved to the profile and explicit owned rod/reel/line can hand off directly to My Tackle instead of creating temporary local persistence that later requires migration/re-entry.
10. **Starter Tackle Box** — likewise, anonymous guidance is technically possible, but durable progress should use canonical ownership. Build it after My Tackle so **Owned / Still Need / Acquired** can be derived from or explicitly written to My Tackle rather than maintained as a second inventory system. This also lets the feature behave as a purposeful Core-Rig coverage workflow instead of an isolated checklist.
11. **Current Availability + Best Currently Available** — build after both required sides exist: the Best Overall recommendation engine and authoritative My Tackle/current-availability semantics. This closes the personalized Recommendation path without conflating ownership with temporary availability.
12. **Catch Log** — implement on the now-proven User Knowledge substrate. Catch Log technically requires the profile/persistence foundation but not My Tackle or Recommendation; it is intentionally later because it records history rather than unlocking the primary learn → rig → choose → fish workflow.
13. **Global Search** — implement once the major searchable Reference Knowledge and principal destinations are stable. Global Search is not account-dependent, but it is intentionally later because it does not unlock downstream persistence/recommendation capabilities and benefits from a stable route/entity universe.
14. **Appearance — Themes / Light / Dark / System** — finish supported production Theme/Color Scheme variants after functional surfaces are largely stable to avoid repeated styling rework. Appearance remains device-local and independent of account state, but it must be stabilized before the final UX/mobile audit.
15. **Favorites — Final Keep / Change / Remove Decision** — decide only after Search, Recommendation, My Tackle, Catch Log/history, and connected knowledge exist. Those real workflows provide evidence for whether Favorites adds value, should be narrowed/replaced, or should be removed.
16. **Repository / Source Quality Audit** — perform the late engineering/convergence audit after most functional source has stabilized so it can address actual final ownership boundaries, obsolete code/docs, JavaScript organization, module boundaries, validation coverage, and maintainability without repeated re-auditing during active feature construction.
17. **Final Version 1 UX / Desktop / Mobile / Design Audit** — final release-oriented experience pass after functional scope and supported Appearance variants are stable. Verify cross-site consistency, responsive/mobile behavior, accessibility, visual identity/flair, Dashboard/header/brand treatment, and the remaining UX-009 requirements, including actual-mobile validation. Also verify subsection separation: any section that contains multiple subsections must provide a clear visual divider between adjacent subsection groups, with the final treatment validated across desktop and mobile.


## Why Authentication Is Not Immediately After the Guides


It is **not** correct to state that nothing after the Guides is reasonably usable without authentication. **What Should I Throw? — Best Overall** remains deliberately inventory-independent and is useful without an account. Global Search and Appearance are also technically account-independent.


The controlling product rule is narrower: **after Reference Knowledge and Best Overall are complete, User Account/Profile/Sync becomes the next dependency-critical foundation for the remaining persistent and personalized product path.** Building it at that point avoids disposable browser-only ownership/progress models, duplicate persistence authorities, and later user re-entry/migration for Choose a Setup and Starter Tackle Box.


The existing architecture permission for anonymous/device-local planning remains valid; this roadmap intentionally chooses not to rely on that permission as the primary Version 1 persistence path for Setup/Tackle Box completion. Reference Knowledge and anonymous guidance remain usable while signed out. Durable profile-owned User Knowledge requires the approved authenticated profile.


## Cross-Cutting Completion Constraints


- **GATE-012 disaster recovery/reconstruction** is not postponed to the final release if meaningful irreplaceable User Knowledge would begin earlier. It must close before Persistent My Tackle begins storing such data.
- **Full-profile backup/restore and Data Management** remain Version 1 completion requirements under the approved User Data architecture. They should be implemented/validated against real persistent domain schemas when those exist rather than as speculative empty infrastructure, and must close before final Version 1 release.
- **My Tackle portability/import/export/backup-restore** remains part of the complete Version 1 My Tackle package under its existing requirements.
- Independent work may move earlier only through an explicit roadmap revision when doing so has a concrete benefit and does not violate the dependency/safety rationale above.


# Canonical Product Sequence


The canonical **remaining Version 1 execution order** is FCC 49J-K above. Historical milestone/domain sections below remain useful for scope and domain-specific planning context; they do not independently define current execution order.


# 1. Knots Guide — Completed Core Milestone / Targeted V1 Completion Pass Approved


The completed core Knots milestone established the canonical Knot library, task-first Knots Guide, deterministic search, canonical text instructions, verified instructional-media coverage, Reel & Line Setup, and validated connected navigation. FCC 47 reopens only the targeted Reference Knowledge presentation/instructional-media completion pass, not the approved Knot facts or core functionality by default.


Version 1 canonical scope includes 10 Knots, four Core IDs, and Reel & Line Setup for Spinning, Spincast, and Baitcasting.


Version 1 Knot tying guidance now uses FCC canonical numbered instructions plus the approved standardized external **101Knots Visual Guide** destinations. Those third-party visuals are linked rather than copied or rehosted. Locally hosted/project-owned Knot visuals remain a future conditional UX-009 evaluation: search for rights-compatible reuse and/or prototype project-owned media only if accuracy, rights, accessibility, phone readability, and instructional quality can all be satisfied. Failure to qualify local media does not reopen or block the completed Knots Version 1 milestone.


Fly reels/fly-line-specific setup and advanced baitcaster tuning/casting remain outside the completed workflow unless later approved.


# 2. Fish Guide — Completed Milestone


Build the complete Fish field-reference experience from the approved Phase 0 architecture after the Repository Audit Cleanup gate releases it.


The milestone deliberately covers:


- Four-State supported Fish library,
- identification-safe media,
- practical identification traits,
- similar-species comparison/navigation,
- habitat/waterbody/seasonal reference information,
- connected Rig guidance,
- regulation-resource pathways,
- scoped Search and Fish detail UX.


Identification accuracy remains dominant.


Fish-to-Lure and advanced lure/color/retrieve/weather/season/clarity/cover/depth optimization belong to later Decision Knowledge rather than canonical Fish.


The Fish Guide milestone closed with Production Wave 4 — Sunfish & Crappie after desktop/mobile approval and post-push repository-integrity validation. Future Fish additions or evidence corrections are maintenance/new-scope work and do not reopen the completed Version 1 milestone automatically.


# 3. Regulations — U.S. State Fishing Resource Gateway — Completed Milestone


Regulations is **completed / validated / closed** for the 48 contiguous U.S. states.


Final production closed at `fffe2ef518f13fd5d50e5d45af9d9ead7c11045c` (`Regulations - Final Wave`) with **48 State / 180 StateResource / 2 active StateNotice** records. The internal Dashboard route, A-Z state selector, retained state-name/two-letter-abbreviation Search, state resource pages, authority/provenance model, monthly maintenance workflow, freshness validation, and external-reference maintenance path are production behavior.


The gateway remains an official-resource navigation surface rather than a project-owned nationwide legal-rule database. State authorities own current legal requirements. Future link/resource changes follow maintenance rules and do not reopen the milestone automatically.


D066 owns the durable geographic/legal-resource boundary. `archive/workstreams/regulations/REGULATIONS-PHASE-0.md` is the retained closed design/evidence/production record.


# 4. What Should I Throw? Phase 0 Planning — Complete / Production Deferred


Phase 0 established the Decision Knowledge contract for answering:


> What should I throw here and now, and why?


D069 owns the durable locked direction. The result model provides **Best Overall** guidance independent of inventory and **Best Currently Available** guidance based on what the angler can actually execute. Strong unavailable options remain visible with missing requirements rather than being silently filtered out. If one recommendation wins both states, presentation combines them rather than duplicating the recommendation.


V1 requires a target Fish plus access/position and waterbody context. Observable context includes depth/zone, cover/structure, water clarity, and current where relevant; season, light/sky, numeric water temperature, and bait preference are optional refiners. Unknown values degrade gracefully.


Recommendation data composes canonical Rig, Lure/Bait, Technique, and contextual parameters/rationale without duplicating their instructions. **How to Rig It** remains Rig-owned; **How to Fish It** remains Technique-owned.


Production is intentionally deferred until the prerequisite sequence below is satisfied.


# 5. Recommendation Prerequisites Foundation — Completed Milestone


The combined prerequisite workstream is **CLOSED / PASS / FINAL**. It implemented the three approved Reference Knowledge prerequisites while preserving their separate canonical owners: 35 Conditions, 13 Lure/Bait identities, 16 Techniques, and 177 intrinsic Compatibility relationships (54 Rig↔Lure/Bait, 69 Rig↔Technique, 54 Lure/Bait↔Technique). The final source/runtime commit is `cdf8f408011c5137d0351cec9f350d0a6eee66c2`; the final documentation closeout is `584f97caa4874075f745834145813ac9bdcf78b3`, with Repository Integrity #106 and GitHub Pages #594 PASS.


`workstreams/RECOMMENDATION-PREREQUISITES-FOUNDATION.md` preserves the closed production record. Conditions, Lure/Bait, Technique, and Compatibility remain distinct semantic owners; the combined execution workstream never merged their schemas.


## Subphase A — Conditions — Complete


Implemented the approved flat canonical Condition vocabulary from `data-model/03B-CONDITIONS.md`. V1 groups are Waterbody, Access/Position, Depth/Zone, Cover/Structure, Water Clarity, Current, Season, and Light/Sky. `Not sure` is input absence rather than a Condition entity; water temperature is optional numeric context.


Existing Rig `conditionTags[]` was explicitly reviewed and frozen as transitional legacy metadata; contextual “works well in” meaning remains assigned to Recommendation Decision Knowledge rather than being mechanically converted into canonical Condition relationships.


## Subphase B — Lure/Bait Reference — Complete


Implemented the distinct canonical Lure/Bait Reference domain in `data-model/03C-LURES-BAIT.md`. It owns fishing-relevant lure/bait identities presented to Fish, not commercial products. Tackle continues to own functional equipment and Rig-building components.


Exact context-specific size, weight, color/pattern, and presentation selections remain Recommendation Decision Knowledge. Commercial brand/model/SKU enumeration is outside the canonical V1 domain.


## Subphase C — Techniques and Compatibility — Complete


Implemented reusable presentation behavior from `data-model/03A-TECHNIQUES.md`. Technique owns reusable movement/cadence/rod/reel action and instructional guidance; Rig owns physical assembly/configuration. Fish/Condition-specific selection and contextual adjustments remain Recommendation Decision Knowledge.


Intrinsic Rig↔Lure/Bait, Rig↔Technique, and Lure/Bait↔Technique compatibility is implemented and stored once under the typed Compatibility Relationship architecture in `data-model/09-RELATIONSHIPS.md`; reverse navigation is derived.


The workstream closed after all three subphases passed source/schema/relationship validation, runtime review, Repository Integrity, exact-scope commit verification, and required CI/Pages.


# 6. Settings / User Data Architecture Gate — Completed / Closed


This gate is **CLOSED / PASS**. The settled architecture covers stable user/profile identity, authentication/account linking, synchronization, local persistence, retention, migration, backup/restore, device transfer, profile/preference ownership, Settings UX boundaries, and the boundary between persistent ownership and temporary/current availability.


D067 remains the durable User Knowledge ownership rule; D069 refines its sequencing trigger. UD-1 through UD-10 are **LOCKED / refinement allowed**, including Firebase Authentication + Cloud Firestore under final UD-2; UD-11 and UD-12 are **CLOSED / PASS / refinement allowed**. Closeout landed at `ec6ef2e43573400ca25811a48f801565bcc16902` with Repository Integrity #117 and GitHub Pages #605 PASS. The final planning record is retained at `archive/workstreams/settings-user-data/SETTINGS-USER-DATA-ARCHITECTURE.md`; GATE-007 My Tackle Availability Foundation is now CLOSED / PASS and GATE-004 What Should I Throw is active.


# 7. My Tackle Availability Foundation — Completed / Closed


GATE-007 is **CLOSED / PASS** for the scoped Recommendation-facing My Tackle/current-availability foundation. It settled authoritative ownership/current-availability semantics, item-family coverage, explicit canonical mapping and satisfaction, quantity sufficiency, derived Needs Attention diagnostics, Merge/Split dependent-reference reconciliation, and current-context source-change visibility. The final G7-CTX production landing is `7aab1bbbbfb6837efbb175d715f55f9146fdad39`, with Repository Integrity #123 and GitHub Pages #611 PASS.


Persistent My Tackle product UI/storage breadth remains separate from this completed foundation. The closed gate means Recommendation now has the bounded semantics/runtime helpers it requires; it does not imply every future My Tackle management surface is already implemented.


# 8. What Should I Throw? Recommendation Engine + UX Pilot — Required / Paused Behind Reference Knowledge Completion


GATE-004 remains required and all five Recommendation-side semantic handoff checkpoints are COMPLETE / APPROVED WITH REVISION ALLOWED: G4-CAND candidate identity, G4-EQUIP executability, G4-SIMPLE bounded simplicity treatment, G4-LEGAL legality boundary, and G4-CTX Recommendation Context freshness/session lifecycle. FCC 47 deliberately moves the primary execution focus to Reference Knowledge Completion before returning to Recommendation production.


Production begins with the Recommendation Decision Knowledge model/runtime boundary, then engine integration and validator coverage, followed by the UX pilot. The implementation must preserve the locked Best Overall / Best Currently Available distinction, compact V1 input flow, canonical-domain ownership boundaries, explainability, and the five G4 contracts. Material changes to the locked Phase 0 or G4 semantic boundaries require explicit reapproval and durable documentation update.


# 9. Tackle Guide — Required V1 / Top-Level Guide Not Yet Built


Build the top-level Dashboard learning/reference Guide for the canonical Tackle concepts already used by Rig Guide **What You Need**. The existing canonical Tackle library remains the single identity/definition owner; **Tackle Guide** gives those concepts a place to be learned, recognized, browsed, searched, and reached outside the Rig domain without duplicating records or relationship ownership.


**Tackle Guide** is the user-facing feature name. The canonical domain may continue to be described internally as Tackle / Tackle Reference where appropriate. **Tackle Index** remains the planned primary browse/index surface inside the Guide. Search is an internal discovery behavior rather than a separate Find Tackle domain. Canonical Tackle remains Reference Knowledge distinct from My Tackle ownership and from the separate Lure/Bait domain.


Version 1 may expose recognition help, purpose/summary, common variants, related Tackle, and **Used In** Rig connections derived from authoritative Rig component requirements. Search and connected-knowledge behavior continue to follow the established relevance-first and single-owner relationship rules. Exact browse taxonomy, search behavior, detail layout, and navigation polish belong to the GATE-005 implementation. Commercial ProductDefinition, manufacturer catalogs, pricing, retailer integration, and exact-product shopping recommendations remain deferred unless separately approved.


## Technique Guide — Required V1 / Top-Level Guide Surface


**Technique Guide** is the approved user-facing top-level Guide for the existing canonical Technique domain. It should expose reusable **How to Fish It** knowledge such as movement/cadence/rod/reel action plus authoritative Compatibility-derived connections to applicable Rigs and Lure/Bait. It remains Reference Knowledge, not Recommendation ranking or context-specific Decision Knowledge. Exact Technique Guide card/detail presentation is completed during FCC 47 Phase 1 and follows the shared Guide-family rule while preserving Technique-specific instructional needs.


# 10. Global Search


Defer until major searchable domains and canonical entity models are stable. Build on relevance-first/connected-knowledge architecture rather than an undifferentiated cross-domain dump.


# 11. Catch Log — Required V1 / Deliberately Late


Catch Log remains a required Version 1 User Knowledge feature, but it is intentionally scheduled near the end of functional development because it is useful history rather than a prerequisite for learning the app, using its reference content, or receiving Recommendations. Complete it after the core learning/reference/recommendation path is stable and before the final site-wide UX/release audit.


Version 1 provides durable synchronized catch create/view/edit/delete history using a deliberately compact domain centered on date/time, Fish, optional measurements, optional canonical Rig/Lure-Bait/Technique references, optional non-precise location information, and notes. Exact record fields, serialization, validation, and UX remain for the Catch Log build.


Catch Log inherits the approved User Knowledge identity, synchronization, schema-versioning/migration, conflict, deletion, safe-rendering, and backup/restore architecture. Exact owned-item or Fishing Setup references remain optional and should be added only if the implemented My Tackle workflow demonstrates clear value.


Version 1 does not require catch-photo storage, precise GPS/location tracking, advanced statistics/analytics, Recommendation learning from catch history, social sharing, automatic weather capture, regulations snapshots, or map/history visualization. Those capabilities require separate later approval rather than being implied by the Catch Log milestone.


# 12. Favorites Final Decision


Favorites remains parked until near project completion. Evaluate actual workflow value after Search, history/recent behavior, My Tackle, Catch Log, connected knowledge, and recommendations exist. Keep, narrow, replace, or remove based on demonstrated value rather than placeholder existence.


# Regulations Product Boundary


The Regulations gateway is deliberately broader geographically than the rest of the current curated application.


It provides **official-resource navigation**, not legal interpretation or a normalized nationwide regulation database. Freshwater Fishing Companion may normalize labels, categories, state identity, agency identity, link metadata, and verification metadata, while the state authority owns the underlying current legal requirements.


UD-7 already locks preferred Regulations states as a synchronized profile-owned preference. The behavior remains prioritization/pinning while preserving access to the complete supported state list; preferred states never make other supported states appear unavailable. UD-11 Preferences owns the Settings presentation/interaction for this choice, while exact field names and provider layout remain implementation details.


# Parking Lot


Intentionally deferred until demonstrated need or a later named gate:


- fly fishing and fly-line-specific setup/knot systems,
- detailed baitcaster brake/spool-tension/backlash/lure-weight/casting instruction,
- heavy fuzzy Search and advanced natural-language intent parsing,
- commercial ProductDefinition architecture,
- exhaustive manufacturer/product catalogs,
- SKU/UPC/retailer modeling,
- advanced size/style-aware readiness,
- automatic cloud-backup provider/service integration beyond the approved profile synchronization boundary,
- AI fish identification,
- actual-size lure calibration,
- container hierarchy,
- trip planning,
- smart packing lists,
- online product pricing,
- live weather integration,
- live regulation updates or project-owned nationwide legal-rule synchronization,
- automatic location/GPS selection for Regulations unless a later privacy/product decision demonstrates need,
- family sharing,
- achievement system,
- optional barcode scanning,
- more sophisticated analytics,
- **automatic shopping/retailer integration** — revisit only when a concrete workflow demonstrates sufficient value and explicit approval resolves architecture/privacy/maintenance implications.


# Out of Scope for Version 1


- Social networking.
- Competitive leaderboards.
- Marketplace functionality.
- Subscription features.
- Advertising.


These are rejected/out of scope for Version 1 rather than automatic future backlog items. A future explicit product-scope decision is required to reverse one.


# Release / Segment Completion


Feature/segment completion requires the applicable implementation, testing, GitHub verification, runtime validation, and documentation closeout defined by `PROJECT-RULES.md`.


## Repository Disaster Recovery / Reconstruction Gate


Before a major Version 1 release—or earlier if irreplaceable User Knowledge or other non-reconstructible artifacts enter scope—the project must implement and validate D064/GATE-012. That gate requires independent recovery coverage beyond the active checkout, a defined restoration/reconstruction procedure, integrity validation, and explicit recovery-point/retention expectations.


# Related Documents


- `PROJECT.md`
- `ARCHITECTURE.md`
- `DECISIONS.md`
- `PROJECT-RULES.md`
- `ACTIVE-CHANGE-LEDGER.md`
- `UI_STANDARD.md`
- applicable data-model/domain documents