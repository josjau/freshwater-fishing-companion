# Freshwater Fishing Companion — Handoff

**Document:** HANDOFF.md  
**Document Revision:** 1.3.2  
**Document Status:** Approved  
**Repository State Reference:** GitHub `main` is authoritative.  
**Latest Finalized Workstream:** `docs/workstreams/RIG-GUIDE-COMPLETION.md` revision 1.0.0  
**Active Workstream:** `docs/workstreams/KNOT-PRODUCTION-PACKAGE-2.md` — Runtime Revision 5 (`0.6.5`) implemented / unvalidated  
**Active Milestone:** Knots  
**Canonical Roadmap:** `docs/ROADMAP.md` revision 0.3.3  
**Session Environment:** Windows Desktop, Microsoft Edge, GitHub Desktop  
**Session Status:** Knots implementation in progress. Production Package 1 is validated. Production Package 2 Runtime Revision 4 completed the Microsoft Edge functional/regression checklist, which exposed two final UX remediation items. Runtime Revision 5 (`0.6.5`) is the current coherent update: collapsing an expanded `Where You'll Use It` list restores the viewport to that relationship group, and search fields no longer auto-focus on view render anywhere in the application. GitHub blob verification, static validation on `main`, and targeted Microsoft Edge confirmation of these two fixes remain required.  
**Last Updated:** 2026-08-13

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

`ROADMAP.md` revision 0.3.3 remains the canonical sequence. Current implementation state is recorded in this handoff, `MILESTONES.md` revision 2.2.0, and the active Knot workstream records.

# 4. Active Milestone — Knots

**Implementation Status: In Progress**

Planning, research, and canonical content lock are complete.

Current production state:

- Production Package 1 — **Validated**: 10 canonical Knots, four Core IDs, all 20 Rigs audited, 31 real tied connections.
- Production Package 2 Runtime Revision 5 (`0.6.5`) — **Implemented / Unvalidated** in the current coherent update; Revision 4 functional/regression checks passed and the two final UX remediation items are implemented here.
- Post-push GitHub blob verification and Microsoft Edge runtime/regression validation are still required before Package 2 can be validated.

Controlling records:

- `docs/workstreams/KNOT-PRODUCTION-PACKAGE-2.md`
- `docs/workstreams/KNOT-LANDING-PAGE-APPROVAL.md`
- `docs/workstreams/KNOT-DETAIL-PAGE-APPROVAL.md`
- `docs/NAVIGATION-PAGE-STANDARD.md`

## Approved Version 1 Knot Library

Version 1 contains 10 canonical Knots.

Core 4:

1. Arbor Knot
2. Improved Clinch Knot
3. Palomar Knot
4. Double Uni Knot

Additional Beginner / General:

5. Uni Knot
6. Double Surgeon’s Knot
7. Non-Slip Loop Knot
8. Dropper Loop Knot

Specialized / Intermediate:

9. Snell Knot
10. Alberto Knot

Minor named variations do not automatically become separate canonical Knot records. A separate record requires a meaningfully different tying process or a distinct practical fishing job.

## Approved Difficulty Taxonomy

Allowed values:

- Beginner
- Intermediate
- Advanced

Version 1 assignments:

- Beginner: 6
- Intermediate: 4
- Advanced: 0 active Knots

The UI should include an **Advanced Knots — Coming Soon** placeholder, but that placeholder is not a canonical Knot entity and is not part of the 10-knot count.

Every active Knot card in **All Knots** should visibly display its difficulty.

Core membership and difficulty are independent concepts.

## Approved Navigation Direction

The Knot Guide is task-first, concise, and uses the Rig Guide as the navigation baseline.

Canonical landing hierarchy:

1. **Search all Knots**.
2. **What are you trying to do?**
   - **Attach Line to a Reel** — Important Card.
   - **Tie On a Hook, Swivel, or Lure** — Important Card.
   - Connect Two Lines / Add a Leader — normal task card.
   - Make a Loop Connection — normal task card.
3. Collection cards:
   - All Knots.
   - **Core Knots** — approved Core/Important treatment.
   - Beginner Knots.
   - Intermediate Knots.
   - Advanced Knots — Coming Soon.

The `What are you trying to do?` section itself remains visually neutral. Important emphasis belongs to deliberately prioritized cards, not to the entire section.

All peer navigation cards retain the established varied accent-bar palette. Individual Core Knot records do not appear directly on the landing page; Core is a collection card that opens the Core browse view.

`Attach Line to a Reel` is the single landing entry to the Reel & Line Setup workflow. The separate `Get Your Reel Ready` landing card is retired; Package 3 upgrades the task destination into the full guided workflow.

## Approved Canonical Knot Schema

Canonical Knot records use:

```text
id
name
summary
createdVersion
lastModifiedVersion
isActive

difficulty
connectionTypes[]
compatibleLineTypes[]

aliases[]
keywords[]

bestFor[]
limitations[]

tyingSteps[]
commonMistakes[]
finalChecks[]

referenceLinks[]
```

Core membership is owned separately by ordered `CORE_KNOT_IDS[]` rather than an `isCore` field.

Approved Core IDs:

```text
arbor-knot
improved-clinch-knot
palomar-knot
double-uni-knot
```

Approved `connectionTypes[]` values:

```text
reel-spool-attachment
terminal-attachment
line-to-line
terminal-loop
dropper-loop
```

Approved `compatibleLineTypes[]` values:

```text
monofilament
fluorocarbon
braid
```

`aliases[]` contains legitimate alternative Knot names. `keywords[]` contains deliberate beginner/task search phrases.

Do not store `strengthRating`, `stepCount`, `relatedRigIds`, `relatedTechniqueIds`, Knot-owned `imageIds`, Knot-owned `animationIds`, `taskIds`, `primaryPurpose`, `recommendedSpecies`, or individual `isCore` flags in Version 1.

## Approved Tying-Step Rule

`tyingSteps[]` is an ordered array of authoritative instruction strings.

- array position owns step order,
- the UI must display numbered steps beginning at 1,
- the visual treatment should match the established Rig Guide **How to Build It** numbered-step pattern,
- step numbers are derived and not stored,
- `stepCount` is derived from `tyingSteps.length`,
- step numbers are not embedded in the instruction strings.

If future animation work requires persistent step identity, step objects with stable IDs may be introduced, but display numbers remain derived.

## Approved Knot Media Ownership

Knot records do not store inverse `imageIds[]` / `animationIds[]` when Media owns the association.

Conceptual ownership:

```text
Media
    ownerType: "knot"
    ownerId: canonical Knot ID
```

The exact animation media implementation remains a later planning topic.

## Approved Reel & Line Setup Direction

Reel & Line Setup is a first-class guided workflow inside the Knots milestone.

Version 1 includes:

- new/empty reel and replacement-line workflows,
- Spinning, Spincast, and Baitcasting reels,
- reel identification including **I'm not sure**,
- Monofilament, Fluorocarbon, and Braid guidance including **I'm not sure**,
- beginner species-based line type and pound-test recommendations,
- all-around beginner recommendations where appropriate,
- reel/rod compatibility checks,
- a small **How to Read Your Reel** section explaining line-capacity markings and reel-size numbers,
- reel-type-aware backing logic,
- Arbor Knot spool attachment,
- canonical line-to-line Knot handoffs where required,
- reel-specific line routing, winding tension, and spool-fill guidance,
- optional leader connection,
- context-preserving return from Knot instruction to Reel Setup,
- a final **Reel Ready** checkpoint and Rig Guide handoff.

Fly reels and fly-line-specific setup remain Parking Lot for Version 1.

Baitcasting scope covers correct spooling only; detailed brake tuning, backlash prevention, lure-weight configuration, and casting instruction are outside this workflow.

## Approved Knot Media Direction

Knot instruction is diagram/animation-first.

Preferred hierarchy:

1. project-owned instructional diagram,
2. project-owned user-controlled step-through animation,
3. diagram and animation together where motion materially improves understanding,
4. video only when the knot cannot be taught adequately with diagram/animation,
5. supplemental video exception may be approved for more advanced knots where hand position, tensioning, or motion materially benefits from video.

Core Knots require a complete non-video instructional path.

Animations should be user-controlled, non-autoplaying, reduced-motion aware, and understandable when motion is disabled.

## Exact Stopping Point — Resume Here

**Do not begin Package 3 or Fish Guide. Production Package 2 remains open.**

The current coherent update is Runtime Revision 5 (`0.6.5`). Production Package 2 remains unvalidated until the final remediation checks pass.

Resume in this order:

1. Re-fetch the Revision 5 production/documentation files from GitHub `main` and verify their exact blobs against the delivered package.
2. Run `tools/validate_knot_package_2.py` against the verified repository state.
3. Hard-refresh the deployed app in Microsoft Edge with DevTools Console open.
4. On Palomar, expand **Where You'll Use It** to all 20 Rigs, scroll deep in the expanded list, then select **Show fewer**. Confirm the list returns to two and the viewport returns to the **Where You'll Use It** relationship group without moving keyboard focus away from the disclosure control.
5. Open Fish, Rig, Knot, and scoped browse/search views. Confirm no search input receives focus merely because the view opened and no mobile software keyboard would be triggered without deliberate search interaction.
6. If those targeted checks and the console pass, record Production Package 2 as **PASS / VALIDATED** and proceed to Package 3.

Only after Package 2 passes runtime validation should Production Package 3 — **Get Your Reel Ready** — begin.

Do not begin Fish Guide until the Knots milestone is finalized and validated.

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
- Active Knot production/status workstream: `workstreams/KNOT-PRODUCTION-PACKAGE-2.md`
- Knot landing/navigation approval: `workstreams/KNOT-LANDING-PAGE-APPROVAL.md`
- Cross-domain navigation standard: `NAVIGATION-PAGE-STANDARD.md`
- Current Knot session closeout: `workstreams/KNOT-SESSION-CLOSEOUT-2026-08-13.md`
- Final Rig completion workstream: `workstreams/RIG-GUIDE-COMPLETION.md`
- Long-term decisions: `DECISIONS.md`
- Architecture: `ARCHITECTURE.md`
- Workflow / closeout rules: `DEVELOPMENT_WORKFLOW.md`
- UI/coding conventions: `STYLE_GUIDE.md`
- Media/tutorial standards: `MEDIA_GUIDE.md`
- Rig sources: `RIG_REFERENCE_SOURCES.md`
- Milestones/history: `MILESTONES.md` / `CHANGELOG.md`
