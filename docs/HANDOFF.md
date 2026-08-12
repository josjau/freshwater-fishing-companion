# Freshwater Fishing Companion — Handoff

**Document:** HANDOFF.md  
**Document Revision:** 0.7.2  
**Document Status:** Approved  
**Repository State Reference:** GitHub `main` is authoritative.  
**Active Workstream:** `docs/workstreams/RIG-GUIDE-COMPLETION.md` revision 0.3.1  
**Session Environment:** Windows Desktop, Brave Browser, Mobile Browser, GitHub Desktop  
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

# 2. Active Milestone — Complete Rig Guide

**Implementation Status: Functional 20-Rig Build Present — Media + Tutorial Corrections Required Before Runtime Closeout**

The full approved initial Rig library is functionally present on `main`.

Production state:

- 20 active Rigs,
- 6 learning tiers active,
- tier counts: 6 Beginner / 3 Beginner+ / 4 Intermediate / 4 Intermediate+ / 2 Advanced / 1 Expert,
- 6 Core Rigs unchanged,
- 29 active canonical Tackle concepts,
- 29 active Tackle recognition-media records.

New final-tier Rigs:

1. Neko Rig
2. Shaky Head Rig
3. Free Rig
4. Double-Jig Crappie Rig
5. Jika Rig
6. Punch / Pegged Texas Rig
7. Bottom-Bouncer / Spinner Rig

New canonical Tackle:

1. Nail Weight
2. Shaky Head Jighead
3. Ringed Sinker
4. Split Ring
5. Bottom Bouncer
6. Spinner Harness

# 3. Session Workflow Safeguards — Effective 2026-08-12

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

Status messages should be informative without becoming noisy; report actual progress, blockers, or the next active step.

# 4. Current Rig Guide Blockers — Must Be Addressed First

The user explicitly reported two blocking defects before closing the 2026-08-11 session.

## A. Recognition media failed the approved visual standard

The six newly added Tackle images reverted to an older vector/flat illustration appearance.

Affected assets:

- `images/tackle/nail-weight-reference.webp`
- `images/tackle/shaky-head-jighead-reference.webp`
- `images/tackle/ringed-sinker-reference.webp`
- `images/tackle/split-ring-reference.webp`
- `images/tackle/bottom-bouncer-reference.webp`
- `images/tackle/spinner-harness-reference.webp`

These assets are **not approved** and must be replaced before Rig Guide closeout.

Next-session requirement:

- use the existing `MEDIA_GUIDE.md` production standard,
- do not default to flat/vector/clip-art treatment,
- prefer legally reusable real photography when accurate and practical,
- otherwise use the approved semi-photorealistic catalog-style recognition treatment anchored to verified geometry,
- retain exact `#f4f0e8` production canvas and current 640 × 440 WebP standard,
- review every replacement visually in chat before it is included in any production package.

Do **not** treat the mechanically justified illustration exception as blanket approval for these six current assets; the user rejected their visual result.

## B. Seven new Rigs need YouTube tutorials

The seven new Rig records currently rely on external reference-site links rather than embedded YouTube tutorials.

The user explicitly wants YouTube tutorials consistent with the already established Rig tutorial standard.

Required next-session workflow:

- source a build-first YouTube tutorial for each of the seven new Rigs,
- prioritize physical assembly/configuration over fishing technique,
- prefer concise/direct sources when technically complete,
- verify exact creator/title/video ID/external URL,
- use the established lazy `youtube-nocookie.com` embed behavior,
- no autoplay,
- retain separate `Watch on YouTube ↗` fallback,
- include all approved `data/rigs.js` tutorial changes in a user-applied update package,
- runtime-test every new tutorial after the user pushes the package.

The external technical references may remain as supplemental references, but they are **not the intended final substitute for tutorial videos** for these seven Rigs.

# 5. Existing Rig Completion Commits

These commits are already present on `main` and remain part of the current baseline:

- `b0292798bd628fe80ba3297a94454efd6c1ff364` — activate remaining Rig tiers
- `e8326c030c68dc3b962ca0410301ed2aee5fb20d` — add final six Tackle concepts
- `c0216dffbe48e9f6094ef8c312ee9c962f1fc96e` — complete 20-Rig library
- `cc87e84069f74df488f0435a98e4a9b46fa87404` — add final six recognition-media assets; **current visual treatment rejected and pending replacement**
- `184d2a24d442e5557b456beb371031b5603d3f84` — connect final Tackle media IDs
- `e083ca3d8cefc87f7872aa6f970ce1c10a7c1644` — register final media records
- `09235f0095bde25f8e508ff7f6676d177944cd3a` — record implementation-complete state before user visual/tutorial review exposed the two blockers above

# 6. Tutorial Standard

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

# 7. Tackle Recognition Media Standard

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

# 8. Remaining Gate

Do **not** run the final consolidated Rig Guide runtime closeout yet.

Required order this session:

1. Review the current six rejected media records/geometry sources and replace the images one at a time, with each candidate shown separately in chat for approval.
2. Select seven build-first YouTube tutorials for the seven new Rigs and present the selections for review.
3. Fetch the latest affected production files from GitHub and build one complete update package containing only the approved changes.
4. Provide the update package to the user for application through GitHub Desktop.
5. Re-fetch GitHub after the user pushes the package and verify exact production contents.
6. Run one consolidated runtime closeout covering counts, tier routing, seven new Rig pages, six new media references, seven tutorial embeds, readiness persistence, desktop/mobile layout, and console health.
7. Only after that PASS mark the Rig Guide Validated / Finalized and reconcile `MILESTONES.md`, `CHANGELOG.md`, and this handoff.

# 9. Previously Finalized Work

The following remain Validated / Finalized:

- Application Foundation
- Fish Data Foundation
- Shared Search and Rendering Utilities
- Functional Fish Search
- Functional Rig Guide foundation
- Current-State UX Repairs
- Rig/Tackle Data Integrity — Batch 1
- Core Rigs / Beginner + Beginner+ / Rig UX Finalization
- Beginner/Beginner+ Media Completion + Intermediate Rig Expansion

# 10. Known Temporary Bridge

Rig readiness remains transitional local state under:

`freshwaterFishingCompanion.tackleReadiness.v1`

It must not be treated as permanent My Tackle ownership. Persistent inventory remains a later milestone.

# 11. Next Milestone

There is no next feature milestone yet.

The first task this session is to correct and fully close the current **Complete Rig Guide** milestone.

Do not start My Tackle, Knots, Recommendations, or another feature until the two blockers in Section 4 are corrected and the Rig Guide runtime closeout passes.

# 12. Governing Documents

- Current-state entrypoint: `HANDOFF.md`
- Active Rig completion workstream: `workstreams/RIG-GUIDE-COMPLETION.md`
- Long-term decisions: `DECISIONS.md`
- Architecture: `ARCHITECTURE.md`
- Workflow / closeout rules: `DEVELOPMENT_WORKFLOW.md`
- UI/coding conventions: `STYLE_GUIDE.md`
- Media/tutorial standards: `MEDIA_GUIDE.md`
- Rig sources: `RIG_REFERENCE_SOURCES.md`
- Milestones/history: `MILESTONES.md` / `CHANGELOG.md`
