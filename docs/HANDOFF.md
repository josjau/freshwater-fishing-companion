# Freshwater Fishing Companion — Handoff

**Document:** HANDOFF.md  
**Document Revision:** 1.0.0  
**Document Status:** Approved  
**Repository State Reference:** GitHub `main` is authoritative.  
**Latest Finalized Workstream:** `docs/workstreams/RIG-GUIDE-COMPLETION.md` revision 1.0.0  
**Next Selected Milestone:** Knots  
**Canonical Roadmap:** `docs/ROADMAP.md` revision 0.3.0  
**Session Environment:** Windows Desktop, Edge Browser, GitHub Desktop  
**Session Status:** Clean milestone boundary — Knots selected as next milestone.  
**Last Updated:** 2026-08-12

# 1. Start Here

GitHub `main` is authoritative for all existing project files.

Permanent rules:

> Fetch the latest GitHub file before changing an existing source file.

> Do not begin a new build segment while the current segment remains unfinalized.

> Finish cleanly or deliberately park; do not leave half-finalized project areas behind.

> The assistant must not write production source, data, image, configuration, CSS, HTML, JavaScript, or other non-Markdown project files directly to GitHub.

> The assistant may write only project-progress Markdown files directly to GitHub, such as handoff, milestone, changelog, validation, roadmap, and workstream status documents.

> Production updates are delivered as user-reviewable update packages for the user to apply through GitHub Desktop unless the user explicitly changes this rule later.

# 2. Current Milestone State — Complete Rig Guide

**Implementation Status: Validated / Finalized**

The approved initial Rig Guide is complete on `main`.

Final validated production state:

- 20 active Rigs,
- 6 learning tiers active,
- tier counts: 6 Beginner / 3 Beginner+ / 4 Intermediate / 4 Intermediate+ / 2 Advanced / 1 Expert,
- 6 Core Rigs unchanged and in the approved order,
- 29 active canonical Tackle concepts,
- 29 active Tackle recognition-media records,
- all seven final-tier build-first YouTube tutorial records integrated and runtime-validated,
- all six final-tier replacement recognition images integrated and runtime-validated.

Final production correction commit:

`4375ca3e05cfbfef6ab0a3e4662c2afd19b86f42` — `Rig Updates Images and tutorials`

GitHub Pages deployed that production commit successfully in workflow run `31646572910`.

Final workstream record:

`docs/workstreams/RIG-GUIDE-COMPLETION.md` revision `1.0.0`

# 3. Canonical Upcoming Build Sequence

The approved order is:

1. **Knots**
2. **Fish Guide**
3. **What Should I Throw**
4. **Tackle Reference / Find Tackle**
5. **Settings / User Data Architecture Gate**
6. **My Tackle**
7. **Catch Log**
8. **Global Search**
9. **Favorites final decision**

This order is canonical until explicitly revised.

`ROADMAP.md` revision 0.3.0 is the detailed planning record. `MILESTONES.md` revision 2.1.0 records the same upcoming sequence.

# 4. Next Milestone — Knots

Knots is the next selected milestone.

Before production implementation begins:

- review `docs/data-model/04-KNOTS.md` against the current architecture,
- settle the practical Version 1 knot library,
- define beginner-oriented Knot detail content,
- decide the Knot instructional-media/tutorial approach,
- define Knot search/navigation and connected relationships,
- create the active Knot workstream and validation plan.

Do not begin the Fish Guide implementation until the Knots milestone is completed and validated unless the roadmap is explicitly revised.

# 5. What Should I Throw — Canonical Instruction Direction

When the What Should I Throw milestone begins, recommendations should connect canonical knowledge rather than duplicate instructions.

Approved distinction:

- **How to Rig It** → applicable canonical Rig build instructions/tutorial.
- **How to Fish It** → applicable canonical Technique presentation/retrieve instructions/tutorial.

Recommendations own selection, ranking, rationale, and context. Rig owns physical assembly/configuration. Technique owns reusable presentation behavior.

Exact recommendation inputs, scoring, explanation format, Technique implementation scope, and usage-tutorial coverage remain design work for that milestone.

# 6. Tackle Reference / Find Tackle — Canonical Direction

Canonical Tackle must be discoverable independently of Rigs.

A user must not need to remember which Rig contains a component in order to find or learn about that component.

The future Tackle Reference / Find Tackle milestone will provide searchable canonical Tackle Reference Knowledge using deliberate fields such as canonical name, aliases, beginner/common terminology, category, and approved keywords.

A Tackle result should act as a connected-knowledge gateway and may expose:

- definition and recognition help,
- common variants,
- related Tackle,
- derived **Used In** Rigs from `Rig.componentRequirements`,
- Fish/Conditions/Techniques where canonical relationships exist,
- later My Tackle ownership context.

Rig Guide, What Should I Throw, My Tackle, and Global Search should link to the same canonical Tackle identity/detail experience rather than create competing definitions.

# 7. Settings / User Data Architecture Gate

Before My Tackle or Catch Log implementation begins, a dedicated architecture/design segment must resolve persistent User Knowledge and Settings.

Required topics include:

- local persistence/storage technology,
- data retention and browser/site-data clearing behavior,
- application-update/schema migration,
- backup/export,
- restore/import validation and rollback,
- device transfer,
- user/profile identity,
- single-user versus future multi-user boundaries,
- synchronization/account expectations,
- device-local versus profile-owned settings,
- supported themes/theme architecture,
- user preference storage and backup behavior.

Current local-first architecture remains the baseline unless explicitly changed.

Do not implement My Tackle or Catch Log against an assumed persistence architecture before this gate is closed.

# 8. My Tackle / Catch Log Order

My Tackle follows the User Data architecture gate and precedes Catch Log.

My Tackle must establish persistent ownership behavior on the settled User Knowledge storage architecture.

Catch Log then uses that same persistence architecture and references canonical Fish/Rig/Lure/Technique entities rather than duplicating Reference Knowledge wherever practical.

# 9. Global Search

Global Search is intentionally deferred until the major searchable domains and canonical entity models are established.

It must build on the existing relevance-first/connected-knowledge approach and must not become an undifferentiated cross-domain result dump.

Exact cross-domain grouping, ranking, ambiguity handling, and Dashboard presentation remain a dedicated design discussion for that milestone.

# 10. Favorites

Favorites is parked until near project completion.

At that point, decide from actual workflow value whether to:

- keep a generic Favorites feature,
- replace it with narrower saved concepts,
- or remove it if Search, history, My Tackle, Catch Log, and recommendations make it redundant.

Do not implement Favorites simply because the current application structure contains a placeholder.

# 11. Session Workflow Safeguards — Effective 2026-08-12

## A. GitHub write authority

The assistant is **not authorized to write production files directly to GitHub**.

Allowed direct GitHub writes are limited to project-progress Markdown documents, including:

- `docs/HANDOFF.md`
- `docs/ROADMAP.md`
- active workstream/status Markdown files
- validation Markdown files
- `docs/MILESTONES.md`
- `docs/CHANGELOG.md`
- other project-progress Markdown records when needed for continuity

For production changes:

1. fetch the latest authoritative files from GitHub,
2. prepare the complete reviewed update locally,
3. package the changed files into a ZIP or equivalent user-reviewable update package,
4. provide the package to the user,
5. the user applies/pushes the package through GitHub Desktop,
6. re-fetch GitHub afterward to verify the applied production state.

Do not silently switch back to direct production GitHub writes.

## B. Image review before site integration

No newly created or replacement image may be added to a production update package before the user has visually reviewed and approved it.

Required workflow:

1. create one candidate image at a time,
2. show the candidate directly in this chat as its own separate image,
3. inspect the candidate for geometry, composition, and style against the established media standard,
4. wait for explicit user approval or revision request,
5. only after approval prepare the production-format asset,
6. after all affected images are approved, include them in the update package for GitHub Desktop.

Do not generate an unseen batch and place it directly into the site.

## C. Long-process status updates

During long or multi-step work, the assistant must post concise visible progress updates at meaningful checkpoints rather than remaining silent through many tool calls.

# 12. Rig Tutorial Standard

Primary embedded Rig tutorials are build-first:

- correct physical assembly/configuration is the primary purpose,
- concise/direct videos are preferred when technically complete,
- prioritize component order, knots/connections, leader placement, weight placement, bait/hook placement, and final configuration,
- technique/retrieve/presentation/strategy may appear but must not dominate,
- no arbitrary hard duration threshold is required,
- authoritative text assembly remains mandatory,
- use the established lazy privacy-enhanced YouTube embed and separate external fallback.

Permanent working principle:

> Tutorial preferred, trustworthy external visual/reference as backup, authoritative text always required.

# 13. Tackle Recognition Media Standard

Current production rules:

- real-photo-first when technically correct and legally reusable,
- otherwise original semi-photorealistic catalog-style recognition media anchored to verified geometry,
- precise illustration is only an explicitly reviewed mechanical exception and may not be used to justify a visually rejected flat/vector result,
- normal production assets must not use flat/vector/cartoon/clip-art treatment,
- current Tackle references use 640 × 440 RGB WebP,
- exact canonical reference-media canvas is `#f4f0e8`,
- no baked artificial cast shadow,
- final assets must be checked at realistic phone contextual-popover size,
- every new/replacement asset must be shown separately in chat and explicitly approved before production packaging.

# 14. Previously Finalized Work

The following are Validated / Finalized:

- Application Foundation
- Fish Data Foundation
- Shared Search and Rendering Utilities
- Functional Fish Search
- Functional Rig Guide foundation
- Current-State UX Repairs
- Rig/Tackle Data Integrity — Batch 1
- Core Rigs / Beginner + Beginner+ / Rig UX Finalization
- Beginner/Beginner+ Media Completion + Intermediate Rig Expansion
- Complete Rig Guide

# 15. Known Temporary Bridge

Rig readiness remains transitional local state under:

`freshwaterFishingCompanion.tackleReadiness.v1`

It must not be treated as permanent My Tackle ownership.

When My Tackle becomes authoritative:

- owned canonical Tackle types satisfy requirements automatically,
- temporary per-build/session availability must not write permanent ownership,
- only explicit My Tackle ownership-management actions modify persistent ownership,
- existing transitional readiness checkmarks must not be automatically treated as permanent inventory ownership without an approved migration decision.

# 16. Governing Documents

- Current-state entrypoint: `HANDOFF.md`
- Canonical development sequence: `ROADMAP.md`
- Final Rig completion workstream: `workstreams/RIG-GUIDE-COMPLETION.md`
- Long-term decisions: `DECISIONS.md`
- Architecture: `ARCHITECTURE.md`
- Workflow / closeout rules: `DEVELOPMENT_WORKFLOW.md`
- UI/coding conventions: `STYLE_GUIDE.md`
- Media/tutorial standards: `MEDIA_GUIDE.md`
- Rig sources: `RIG_REFERENCE_SOURCES.md`
- Milestones/history: `MILESTONES.md` / `CHANGELOG.md`
