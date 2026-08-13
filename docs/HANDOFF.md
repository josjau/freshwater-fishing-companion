# Freshwater Fishing Companion — Handoff

**Document:** HANDOFF.md  
**Document Revision:** 0.9.0  
**Document Status:** Approved  
**Repository State Reference:** GitHub `main` is authoritative.  
**Latest Finalized Workstream:** `docs/workstreams/RIG-GUIDE-COMPLETION.md` revision 1.0.0  
**Session Environment:** Windows Desktop, Edge Browser, GitHub Desktop  
**Session Status:** Clean milestone boundary — Complete Rig Guide is Validated / Finalized.  
**Last Updated:** 2026-08-12

# 1. Start Here

GitHub `main` is authoritative for all existing project files.

Permanent rules:

> Fetch the latest GitHub file before changing an existing source file.

> Do not begin a new build segment while the current segment remains unfinalized.

> Finish cleanly or deliberately park; do not leave half-finalized project areas behind.

> The assistant must not write production source, data, image, configuration, CSS, HTML, JavaScript, or other non-Markdown project files directly to GitHub.

> The assistant may write only project-progress Markdown files directly to GitHub, such as handoff, milestone, changelog, validation, and workstream status documents.

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

# 3. Final Rig Guide Runtime Validation

Validated in Microsoft Edge on Windows Desktop.

Passed:

- All Rigs = 20,
- tier counts = 6 / 3 / 4 / 4 / 2 / 1,
- Core = approved six in approved order,
- all seven final-tier Rig detail pages open normally,
- all six final-tier Tackle `Name ⓘ` reference panels display the approved replacement images,
- all seven final-tier tutorials load and play normally,
- no autoplay occurs before user initiation,
- all seven `Watch on YouTube ↗` fallbacks work,
- representative readiness selections persist after leaving and reopening Rigs,
- desktop layout has no horizontal overflow or unusable content,
- no new application console errors were observed during normal validation navigation.

Mobile-width validation was performed using Edge device emulation at approximately 375 px.

Passed:

- dense Rig detail content remains usable,
- no horizontal overflow,
- no clipped text or controls,
- recognition image remains contained,
- tutorial player fits the viewport,
- Parent/Home navigation remains usable,
- normal vertical scrolling works correctly.

The Rig Guide requires no additional completion work before another milestone begins.

# 4. Session Workflow Safeguards — Effective 2026-08-12

## A. GitHub write authority

The assistant is **not authorized to write production files directly to GitHub**.

Allowed direct GitHub writes are limited to project-progress Markdown documents, including:

- `docs/HANDOFF.md`
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

Expected checkpoint pattern:

- source/audit started,
- research or candidate selection complete,
- image candidate ready for review,
- update package built,
- GitHub Desktop application ready for user action,
- post-push verification complete.

Status messages should report actual progress, blockers, or the next active step without becoming noisy.

# 5. Tutorial Standard

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

# 6. Tackle Recognition Media Standard

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

# 7. Previously Finalized Work

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

# 8. Known Temporary Bridge

Rig readiness remains transitional local state under:

`freshwaterFishingCompanion.tackleReadiness.v1`

It must not be treated as permanent My Tackle ownership. Persistent inventory remains a later milestone.

When My Tackle becomes authoritative:

- owned canonical Tackle types satisfy requirements automatically,
- temporary per-build/session availability must not write permanent ownership,
- only explicit My Tackle ownership-management actions modify persistent ownership,
- existing transitional readiness checkmarks must not be automatically treated as permanent inventory ownership without an approved migration decision.

# 9. Next Milestone

No build segment is currently active.

The project is at a clean milestone boundary.

Select the next milestone deliberately before implementation begins. Current candidates include:

1. My Tackle / persistent ownership foundation
2. Knots foundation
3. Recommendations foundation
4. another explicitly selected project priority

Do not automatically begin one of these solely because it appears next in a prior sequence.

# 10. Governing Documents

- Current-state entrypoint: `HANDOFF.md`
- Final Rig completion workstream: `workstreams/RIG-GUIDE-COMPLETION.md`
- Long-term decisions: `DECISIONS.md`
- Architecture: `ARCHITECTURE.md`
- Workflow / closeout rules: `DEVELOPMENT_WORKFLOW.md`
- UI/coding conventions: `STYLE_GUIDE.md`
- Media/tutorial standards: `MEDIA_GUIDE.md`
- Rig sources: `RIG_REFERENCE_SOURCES.md`
- Milestones/history: `MILESTONES.md` / `CHANGELOG.md`
