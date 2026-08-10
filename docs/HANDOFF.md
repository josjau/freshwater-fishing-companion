# Freshwater Fishing Companion — Handoff

**Document:** HANDOFF.md  
**Document Revision:** 0.5.3  
**Document Status:** Approved  
**Repository State Reference:** GitHub `main` is authoritative; do not rely on a self-referential handoff commit SHA.  
**Intermediate Implementation Baseline:** `e4b61aea052f4ad843be0f6d54231af87d574905` (`Rigs - Intermediate Build`)  
**Latest Verified Tackle Image Update:** `eed8929cb1859aef653168884e1e71244d1dd80e` (`Tackle Image Updates`)  
**Last Updated:** 2026-08-10

# 1. Start Here

GitHub `main` is authoritative for existing project files. This document is the repository current-state map, not a duplicate specification. Follow the governing documents linked below before proposing project changes.

Recommended first-read order:

1. `HANDOFF.md`
2. active workstream and validation documents
3. `DECISIONS.md`
4. `ARCHITECTURE.md`
5. `DEVELOPMENT_WORKFLOW.md`
6. `STYLE_GUIDE.md`
7. relevant `data-model/` documents
8. `MEDIA_GUIDE.md` when media is involved

Permanent operating rules:

> Do not begin a new build segment while the current segment is unfinalized.

> Repository documentation must describe what is actually true on `main` after the most recent meaningful repository action. Implementation, validation failures, corrective work, and next actions are documented continuously rather than reconstructed later from chat history.

> Markdown documentation may be updated directly when needed to keep repository state current. Images, JavaScript, CSS, HTML, application data, configuration, and other non-Markdown production files require user review and explicit approval before the assistant writes them directly to GitHub.

# 2. Current Repository / Milestone State

## Current Active Segment

**Beginner/Beginner+ Media Completion + Intermediate Rig Expansion**

**Implementation Status: Implemented / Unvalidated — Ready for Intermediate Validation**

The Intermediate implementation package is present on `main` from commit:

`e4b61aea052f4ad843be0f6d54231af87d574905`

Commit message:

`Rigs - Intermediate Build`

The initial recognition-media package did not meet the approved Tackle image standard. That correction work has now advanced to a new reviewed seven-image package uploaded by the user in commit:

`eed8929cb1859aef653168884e1e71244d1dd80e`

Commit message:

`Tackle Image Updates`

GitHub inspection confirms that commit replaced exactly these seven production images:

- `images/tackle/bobber-stop-reference.webp`
- `images/tackle/drop-shot-weight-reference.webp`
- `images/tackle/fixed-sinker-reference.webp`
- `images/tackle/ned-jighead-reference.webp`
- `images/tackle/three-way-swivel-reference.webp`
- `images/tackle/wacky-hook-reference.webp`
- `images/tackle/wacky-o-ring-reference.webp`

`main` subsequently advanced through merge commit `f75374a34abad52c2df5c525ff366c70db0706ec`, which also contains the approved `MEDIA_GUIDE.md` update for the exact `#f4f0e8` reference canvas and conventional viewer-facing J hook orientation.

Current known state:

- 13 active Rigs are intended by the implementation:
  - 6 Beginner,
  - 3 Beginner+,
  - 4 Intermediate,
- Intermediate membership is:
  1. Drop Shot Rig
  2. Carolina Rig
  3. Live-Bait Slip-Sinker Rig
  4. Three-Way Rig
- 23 canonical Tackle concepts are intended by the implementation,
- the six-member `CORE_RIG_IDS` registry remains unchanged,
- Intermediate+, Advanced, and Expert have not started,
- the seven-image correction package is now present on `main`,
- no Intermediate source/data/runtime/tutorial/regression validation has yet been completed,
- before the main Intermediate validation sequence begins, four older recognition assets must be reviewed against the current media standard:
  - `images/tackle/hook-reference.webp`,
  - `images/tackle/jighead-reference.webp`,
  - `images/tackle/offset-worm-hook-reference.webp`,
  - `images/tackle/weight-peg-reference.webp`,
- the next session should begin with that four-asset review, then proceed into the documented Intermediate validation sequence.

The approved Tackle media rules now include:

- real-photo-first sourcing when technically correct and legally reusable,
- original semi-photorealistic catalog treatment when suitable reusable photography is unavailable,
- mandatory pre-delivery visual/mechanical review,
- exact 640 × 440 `#f4f0e8` production canvas for current Tackle references,
- conventional viewer-facing capital-J hook orientation unless a reviewed technical exception applies,
- rejection of normal-production vector/flat/clip-art treatment.

The active source of truth for this segment is:

- `workstreams/RIG-BEGINNER-MEDIA-INTERMEDIATE.md`
- `workstreams/RIG-BEGINNER-MEDIA-INTERMEDIATE-VALIDATION.md`

Do not describe the Intermediate tier as Validated or Finalized until the required checks actually pass and those documents are reconciled.

## Previously Finalized Work

### Current-State UX Repairs

**Implementation Status: Validated / Finalized**

The validated UX repair state preserves:

- visible `Coming Soon` semantics for unavailable child cards,
- actionable implemented Fish/Rig flows,
- `Go to ODWC Regulations ↗`,
- the approved Forest Journal Dashboard primary-card styling,
- validated Dashboard/Fish/Rig navigation behavior,
- external-link behavior,
- Tackle contextual help,
- Rig readiness persistence,
- responsive/accessibility behavior,
- normal-navigation console health.

See `workstreams/UX-REPAIRS.md` and `workstreams/UX-REPAIRS-VALIDATION.md`.

### Rig/Tackle Data Integrity — Batch 1

**Implementation Status: Validated / Finalized**

The approved relationship cleanup remains current:

- `Rig.componentRequirements[].tackleId` references canonical Tackle,
- duplicated Rig-side component display names are removed,
- Tackle `rigIds` inverse arrays are removed,
- Tackle `Used In` is derived from active Rig requirements,
- visible component names and readiness labels resolve from canonical Tackle,
- transitional readiness storage retains the same Tackle-ID keys,
- `script.js` uses `tackleId` naming at the readiness callback boundary.

See `workstreams/RIG-TACKLE-DATA-INTEGRITY.md` and `workstreams/RIG-TACKLE-DATA-INTEGRITY-VALIDATION.md`.

### Core Rigs / Beginner + Beginner+ / Rig UX Finalization

**Implementation Status: Validated / Finalized**

The validated pre-Intermediate foundation includes:

- nine validated Beginner/Beginner+ Rigs,
- six Beginner and three Beginner+ records,
- six Core Rigs as a cross-cutting curated registry,
- Rig Guide order: All Rigs, Core Rigs, Beginner, Beginner+, Intermediate, Intermediate+, Advanced, Expert,
- global Rig search and scoped subset search,
- Fish Guide inline search,
- lightweight deterministic relevance ranking,
- explicit one-click search clear,
- Dashboard-derived varied section-card accents with restrained Core emphasis,
- corrected Wacky/Ned/Weightless assembly/readiness behavior,
- the validated Texas Rig lazy-loaded tutorial pilot,
- approved compact Rig-detail density,
- sticky Parent/Home controls,
- top-reset forward/Parent/Home transitions.

The compact-detail treatment remains approved for Rigs only. Dashboard search remains parked pending deliberate cross-domain scope/grouping/result design.

See `workstreams/CORE-RIGS-TACKLE-MEDIA.md`, `workstreams/CORE-RIGS-TACKLE-MEDIA-VALIDATION.md`, and `workstreams/RIG-UX-RUNTIME-FOLLOWUP.md`.

# 3. Current Production Architecture

**Implementation Status: Current, with Intermediate additions present but unvalidated**

- Three knowledge layers: Reference Knowledge, Decision Knowledge, User Knowledge.
- Forest Journal is the only production-supported Version 1 theme.
- Fish Guide exposes inline landing-page search with shared deterministic relevance ranking and explicit one-click clear behavior.
- Rig Guide has the validated nine-Rig Beginner/Beginner+ foundation plus four implemented Intermediate records awaiting validation.
- Canonical Tackle Reference Knowledge exists in `data/tackle.js`; the Intermediate implementation expands the intended current set to 23 concepts pending validation.
- Rig component requirements reference canonical Tackle through `tackleId`.
- Reverse Tackle `Used In` relationships are derived from active Rig requirements.
- Current Rig readiness uses the transitional local readiness state.
- Search uses lightweight deterministic relevance ranking; canonical identity matches outrank lower-priority metadata while heavy fuzzy/intent systems remain deferred.
- Nested Parent/Home controls remain available through compact sticky navigation, and explicit application transitions open their destination at the top.
- Historical Copper, Gold, and Legacy Dark CSS files remain inactive design concepts and are not part of the supported production theme matrix.
- Completed package artifacts and obsolete design-board/preview assets remain outside active production locations.

See `ARCHITECTURE.md` for source ownership and exact current-vs-planned distinctions.

# 4. Approved Product Direction

**Decision Status: Approved**

- Search is relevance-first; connected knowledge is breadth-first.
- Searchable sections provide search on the main section landing page and relevant scoped subset/browse pages through shared canonical helpers.
- Search is a direct inline field interaction with an explicit one-click clear control.
- Lightweight deterministic relevance ranking places strong canonical identity matches ahead of lower-priority metadata matches.
- Section/subset cards follow the Dashboard visual grammar with varied adjacent accents/left-edge lines.
- Nested Parent/Home navigation remains available while scrolling; explicit application transitions open at the destination top.
- Compact Rig-detail density is approved for Rigs only.
- Recommendation tiers are:
  - Best of the Best
  - Best Bang for the Buck
  - Best Budget
  - Best of the Rest
  - Avoid
- Rig owns physical assembly and rig-specific configuration.
- Technique owns reusable presentation behavior.
- `Rig.componentRequirements` owns Rig-to-Tackle usage; reverse `Used In` is derived.
- Canonical Tackle owns Tackle identity/display name.
- Initial regional Rig target is 20 Rigs for northeast Oklahoma and southwest Kansas.
- Core Rigs contains six curated confidence-building Rigs.
- Core is cross-cutting, not a difficulty/category/rank.
- Rig expansion proceeds one completed learning tier at a time.
- Tackle recognition media is recognition-first and must meet the current `MEDIA_GUIDE.md` visual/geometry/licensing gate before packaging.
- For Tackle recognition assets, use an accurate legally reusable real photograph when practical; otherwise use an original semi-photorealistic catalog-style reference anchored to verified real-world geometry.
- Current Tackle reference images use exact `#f4f0e8` canvas matching and normal viewer-facing J hook orientation.
- Vector/flat/clip-art appearance is not an acceptable normal Tackle production shortcut.
- Completed-Rig visual confirmation follows the D049 hierarchy: trustworthy reusable local media when available, verified permitted tutorial embed, direct verified external visual/reference, authoritative article/reference, then authoritative text-only instructions.
- Tutorial preferred, trustworthy external visual/reference as backup, authoritative text always required.
- Generated finished-Rig/build-step instructional imagery remains prohibited under D045.
- Canonical Tackle defines functional type; My Tackle defines actual owned items.
- Rig Readiness answers buildability first; optimization comes later.
- My Tackle will be the only persistent ownership source of truth.
- Nothing outside explicit My Tackle ownership workflows may silently modify persistent ownership.
- User Knowledge is untrusted text by default and must be rendered safely.
- Unimplemented UI controls must clearly communicate that they are unavailable.
- External CTAs identify their destination and use `↗`.
- Repository handoff and continuous current-state documentation are mandatory governance requirements.

See `DECISIONS.md`, `MEDIA_GUIDE.md`, and the governing data-model documents.

# 5. Approved but Not Yet Implemented

**Implementation Status: Approved / Not Implemented**

- Intermediate+ Rig tier.
- Advanced Rig tier.
- Expert Rig tier.
- Reusable Core learning-path emphasis for future Core Knots and other explicitly approved starting-path groups.
- Direct/shortest-path finished-Rig visual references where trustworthy sources permit.
- Common fishing-knot step illustrations as a later Knots workstream.
- My Tackle as the persistent ownership source for Rig Readiness.
- Temporary per-build/session availability that does not write ownership.
- Explicit My Tackle Add/Edit/Remove write authority.
- Safe User Knowledge rendering rules across future user-entered/imported features.
- Dashboard search and cross-domain result experience after scope, grouping, and ranking behavior are deliberately designed.

The Intermediate tier itself is **implemented but unvalidated**, so it must not be listed as Approved / Not Implemented.

# 6. Known Temporary Bridges

## Rig readiness

Current storage key:

    freshwaterFishingCompanion.tackleReadiness.v1

This is a temporary bridge.

It does not become permanent My Tackle ownership, and existing readiness checkmarks are not automatically migrated into Inventory.

When My Tackle becomes authoritative:

- owned canonical Tackle types satisfy Rig requirements automatically,
- missing components may be temporarily marked available for the current build/session,
- temporary availability never writes My Tackle,
- only explicit My Tackle ownership-management actions write persistent ownership.

# 7. Open Decisions

The following remain intentionally unresolved:

- Detailed My Tackle owned-item schema:
  - brand
  - model
  - size
  - color
  - quantity
  - condition
  - notes
  - durable-vs-consumable MVP treatment
  - custom/unmapped items
  - exact compatibility constraints
- Commercial/branded name resolution such as `Rooster Tail` between a canonical lure/tackle concept and any future ProductDefinition.
- Exact Recommendation model schema.
- ProductDefinition architecture beyond the approved rule that it is not required for My Tackle MVP/readiness.
- Exact source/licensing choices for future finished-Rig visual references.
- Exact initial common-knot set and future Rig-to-Knot relationship model.
- Future automated relationship, asset, document-link, and other repository validators.
- Whether any non-Rig domain should adopt the Rig-specific compact-detail density treatment after separate review.
- Exact Dashboard-search cross-domain scope, grouping, and result presentation.
- Future conservative Dashboard density review.
- Next-session Tackle recognition-media review is explicitly required for:
  - `images/tackle/hook-reference.webp`,
  - `images/tackle/jighead-reference.webp`,
  - `images/tackle/offset-worm-hook-reference.webp`,
  - `images/tackle/weight-peg-reference.webp`.
  Review them against the current exact-canvas, semi-photorealistic catalog-quality, geometry, and hook-orientation standards before deciding whether replacement is required. Any proposed replacements remain subject to the Production Write Approval Gate.
- Other audit findings not yet discussed to completion remain visible until explicitly decided.

# 8. Next Recommended Work

The immediate work is **Intermediate validation**, not Intermediate+ and not another implementation tier.

Start the next session by re-reading actual GitHub `main`, then perform this pre-validation media review before the main validation sequence:

1. Review `hook-reference.webp`.
2. Review `jighead-reference.webp`.
3. Review `offset-worm-hook-reference.webp`.
4. Review `weight-peg-reference.webp`.
5. If any replacement is recommended, prepare it for user review; do not write production media directly to GitHub without explicit approval.

After that review, execute the validation sequence documented in `workstreams/RIG-BEGINNER-MEDIA-INTERMEDIATE-VALIDATION.md`:

1. GitHub/source/package integrity.
2. Canonical Rig/Tackle/media counts and relationships.
3. Intermediate membership, routing, and search.
4. Drop Shot Rig.
5. Carolina Rig.
6. Live-Bait Slip-Sinker Rig.
7. Three-Way Rig.
8. Corrected recognition-media phone/desktop review, including the seven user-uploaded replacements.
9. Existing and Intermediate tutorial audit.
10. Beginner/Beginner+/Core and application regression pass.
11. Documentation reconciliation/final closeout.

Update validation/current-state documentation after each meaningful validation result. Only after all required checks pass should the Intermediate segment be finalized and the next milestone selected.

Dashboard search remains parked.

# 9. Governing Documents

| Topic | Governing document |
|---|---|
| Repository current-state entrypoint | `HANDOFF.md` |
| Active Intermediate scope | `workstreams/RIG-BEGINNER-MEDIA-INTERMEDIATE.md` |
| Active Intermediate validation/live status | `workstreams/RIG-BEGINNER-MEDIA-INTERMEDIATE-VALIDATION.md` |
| Long-term structural decisions | `DECISIONS.md` |
| Current source ownership / architecture | `ARCHITECTURE.md` |
| Editing, validation, continuous documentation, closeout, scope control | `DEVELOPMENT_WORKFLOW.md` |
| UI, coding, and documentation conventions | `STYLE_GUIDE.md` |
| Media requirements and Tackle Media Generation Gate | `MEDIA_GUIDE.md` |
| Project direction | `PROJECT.md` / `ROADMAP.md` |
| Functional requirements | `SPECIFICATION.md` |
| Milestone/history status | `MILESTONES.md` / `CHANGELOG.md` |
| UX repair scope | `workstreams/UX-REPAIRS.md` |
| UX repair validation | `workstreams/UX-REPAIRS-VALIDATION.md` |
| Rig/Tackle integrity scope | `workstreams/RIG-TACKLE-DATA-INTEGRITY.md` |
| Rig/Tackle integrity validation | `workstreams/RIG-TACKLE-DATA-INTEGRITY-VALIDATION.md` |
| Core Rigs/Tackle Media scope | `workstreams/CORE-RIGS-TACKLE-MEDIA.md` |
| Core Rigs/Tackle Media validation | `workstreams/CORE-RIGS-TACKLE-MEDIA-VALIDATION.md` |
| Data-model index | `data-model/README.md` |
| Data-model terminology | `data-model/00-GLOSSARY.md` |
| Global data rules | `data-model/01-FOUNDATION.md` |
| Rig model | `data-model/03-RIGS.md` |
| Technique model | `data-model/03A-TECHNIQUES.md` |
| Conditions model | `data-model/03B-CONDITIONS.md` |
| Canonical Tackle | `data-model/05-TACKLE.md` |
| My Tackle / Inventory | `data-model/05A-INVENTORY.md` |
| User Knowledge | `data-model/07-USER-DATA.md` |
| Relationships | `data-model/09-RELATIONSHIPS.md` |

# 10. Source-of-Truth / Editing Rules

- GitHub `main` is authoritative for existing project files.
- Fetch latest GitHub contents before proposing edits to an existing source file.
- Do not assume a prior proposal, package, staged file, or chat statement was implemented.
- Make targeted edits by default.
- Full-file replacement is the default final artifact when files are delivered manually.
- Replacement files derive from the latest verified GitHub file.
- Make only authorized changes and protect mature validated behavior from regression.
- Preflight is not runtime validation.
- After push, inspect actual repository state.
- Documentation must be updated continuously to match meaningful implementation/correction/validation state changes.
- Markdown documentation may be updated directly to keep repository state current.
- Images, JavaScript, CSS, HTML, application data, configuration, and other non-Markdown production files require user review and explicit approval before assistant direct-write to GitHub.
- Known validation failures are recorded immediately.
- Permanent project knowledge belongs in repository documentation, not only chat history.
- Do not move into a new build segment while the current one remains unfinalized.

# 11. Decision-Making Operating Model

New ideas do not override established architecture merely because they are newer.

Evaluate meaningful changes against:

- existing architecture,
- established standards,
- validated workflows,
- current milestone,
- implementation cost,
- regression risk,
- affected files/modules,
- simpler alternatives,
- expected benefit versus rework.

Classify proposals as:

- **Build Now** — required for correctness/current implementation, foundational architecture/data, prevention of foreseeable rework, or material simplification/value.
- **Parking Lot** — valuable and preserved, but not required by the current milestone.
- **Reject** — conflicts with mission/architecture, duplicates capability, or adds disproportionate complexity.
- **Open** — meaningful unresolved issue that must remain visible.

Permanent principle:

> Plan twice and write once.

# 12. Session / Module Closeout Rule

At every meaningful implementation, correction, validation, session, module, or segment boundary:

1. Identify what changed on `main`.
2. Identify what is implemented but still unvalidated.
3. Record validation passes/failures immediately.
4. Identify decisions and documentation affected.
5. Record approved but unimplemented work explicitly.
6. Record unresolved/deferred/rejected items when forgetting them would cause rework.
7. Update the active workstream/validation documents.
8. Update `HANDOFF.md` whenever current state or next action materially changed.
9. Update governing documents when a permanent standard changed.
10. Verify the actual GitHub state.
11. Only mark a segment Finalized after implementation, validation, documentation reconciliation, push, and re-fetch all pass.

Permanent principle:

> Finish cleanly or deliberately park; do not leave half-finalized project areas behind.