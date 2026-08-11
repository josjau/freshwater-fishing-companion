# Freshwater Fishing Companion

**Document:** RIG-BEGINNER-MEDIA-INTERMEDIATE-VALIDATION.md  
**Document Revision:** 0.1.8  
**Document Status:** Approved  
**Implementation Status:** Partially Validated — Static + Routing/Search + Drop Shot + Carolina + Live-Bait Passed; Media Corrections Required  
**Implementation Baseline:** `main` at `e4b61aea052f4ad843be0f6d54231af87d574905` (`Rigs - Intermediate Build`)  
**Latest Verified Media Update:** `5704da6b9cde20bf90edfa8205e9811fba4114ab` (`Hook fixes`)  
**Current Validation Head:** `67eea13d623067186171a68be6778cf99ebf5456`  
**Last Updated:** 2026-08-10

# Purpose

Validation plan and live validation record for the combined Beginner/Beginner+ media-completion pass and full Intermediate Rig expansion.

Preflight confirms package integrity only. GitHub inspection and runtime review are required before the segment is Validated.

# Current Validation State

The Intermediate implementation is present on `main`. Repository/source-integrity, canonical-data validation, Intermediate membership, Intermediate routing/search, Drop Shot Rig, Carolina Rig, and Live-Bait Slip-Sinker Rig runtime validation have passed.

Three-Way Rig, tutorial playback, regression validation, and final recognition-media validation remain pending.

The recognition-media gate is currently **FAILED / CORRECTION REQUIRED** because runtime review exposed visible background-color and baked/uneven shadow inconsistencies on nine older Tackle reference assets. These media defects do not invalidate the passed Intermediate Rig logic/runtime blocks, but they block final media validation and segment closeout.

Recognition-media correction state:

- **Initial six-image visual-quality gate: FAILED.**
- Failure reason: the six assets introduced in `e4b61ae` used an older flat/vector-style treatment and did not meet the approved current catalog/semi-photorealistic Tackle recognition standard.
- A first partial correction replaced four files in `601b741f368f7e1ae9e5b2963935673901b76674`.
- The user subsequently reviewed and uploaded the seven-image correction set in `eed8929cb1859aef653168884e1e71244d1dd80e` (`Tackle Image Updates`).
- The user then reviewed and uploaded four additional legacy recognition-media replacements in `5704da6b9cde20bf90edfa8205e9811fba4114ab` (`Hook fixes`):
  - `hook-reference.webp`,
  - `jighead-reference.webp`,
  - `offset-worm-hook-reference.webp`,
  - `weight-peg-reference.webp`.
- GitHub blob SHAs and byte sizes for those four files exactly match the final reviewed local upload package.
- Those four reviewed files are 640 × 440 lossless WebPs built on exact `#f4f0e8` production canvas corners.
- The approved Bobber Stop recognition image uses a rubber/silicone variant, which is valid under the canonical Tackle definition.
- **Known metadata defect:** `data/media.js` still describes `bobber-stop-reference.webp` in alt text as a thread-style stop wrapped around fishing line. The current image is the approved rubber/silicone stop variant, so that alt text is inaccurate and must be corrected in a reviewed data-file package before final closeout.
- The current Media Guide requires exact `#f4f0e8` canvas matching and normal viewer-facing J orientation for hook-bearing recognition assets unless a reviewed technical exception applies.
- **Runtime media defect identified during Carolina validation:** nine older recognition assets show visible background-color mismatch and/or baked/uneven shadow treatment against the fixed reference-media surface and require review/correction:
  - `barrel-swivel-reference.webp`,
  - `bead-reference.webp`,
  - `bait-reference.webp`,
  - `bullet-weight-reference.webp`,
  - `fixed-bobber-reference.webp`,
  - `sliding-sinker-reference.webp`,
  - `slip-float-reference.webp`,
  - `split-shot-reference.webp`,
  - `stop-bead-reference.webp`.

# Package / Source Integrity

**Status: PASSED — 2026-08-10**

Validated against current head `67eea13d623067186171a68be6778cf99ebf5456`:

- `main` is 24 commits ahead of the Intermediate implementation baseline and not behind it.
- Comparing `e4b61aea052f4ad843be0f6d54231af87d574905` to current head shows only Markdown documentation and Tackle image files changed after the Intermediate implementation.
- `data/rigs.js`, `data/tackle.js`, `data/media.js`, `script.js`, and `view-renderer.js` remain the Intermediate implementation source/data baseline; no later corrective media upload altered application source/data.
- `5704da6b9cde20bf90edfa8205e9811fba4114ab` contains exactly the four intended legacy Tackle image replacements.
- No package README, manifest, staging note, validation TXT, contact sheet, or other review-only artifact appears in the production Tackle image directory.
- Current `script.js` statically defines Intermediate as an available Rig collection and keeps Intermediate+, Advanced, and Expert unavailable.
- Current renderer source retains canonical-Tackle lookup, derived `Used In`, readiness persistence, contextual `Name ⓘ` references, lazy tutorial creation, `youtube-nocookie.com`, no autoplay parameter, and external YouTube fallback behavior.

Runtime/console execution remains required before final source behavior is considered fully validated.

# Canonical Data Counts

**Status: PASSED — 2026-08-10**

Validated from current canonical source plus the previously validated Beginner/Beginner+ baseline:

- exactly 13 active Rigs,
- exactly 6 Beginner Rigs,
- exactly 3 Beginner+ Rigs,
- exactly 4 Intermediate Rigs,
- exactly 6 unique `CORE_RIG_IDS`, unchanged from the validated baseline,
- exactly 23 active canonical Tackle records,
- exactly 23 active Tackle recognition-media records,
- the four Intermediate Rig component requirements resolve to active canonical Tackle records,
- the three Intermediate-added Tackle concepts (`drop-shot-weight`, `three-way-swivel`, `fixed-sinker`) each resolve to active recognition-media records,
- all previously validated Beginner/Beginner+ Rig-to-Tackle relationships remain unchanged after the Intermediate baseline,
- every current canonical Tackle record has a corresponding media ID and the current media registry contains the matching active owner record.

The known Bobber Stop alt-text mismatch is a metadata/accessibility defect, not an ID-resolution defect.

# Intermediate Membership

**Status: PASSED — 2026-08-10**

Runtime validation confirmed the Intermediate collection contains exactly these four records:

1. Carolina Rig
2. Drop Shot Rig
3. Live-Bait Slip-Sinker Rig
4. Three-Way Rig

The collection renders alphabetically with no Beginner, Beginner+, Intermediate+, Advanced, or Expert record present. Intermediate+, Advanced, and Expert remain unavailable from the Rig Guide.

# Intermediate Routing / Search

**Status: PASSED — 2026-08-10**

Runtime validation in Chrome confirmed:

- Intermediate card is actionable,
- Intermediate page opens at the top,
- Parent/Home navigation returns to the expected destination at the top,
- empty Intermediate search displays all four records in alphabetical collection order,
- scoped `drop` search returns only Drop Shot Rig,
- clear control restores all four records and returns focus to the field,
- global Rig Guide search finds Carolina Rig, Drop Shot Rig, Live-Bait Slip-Sinker Rig, and Three-Way Rig individually,
- All Rigs contains exactly 13 active records and remains alphabetized with an empty query,
- Core Rigs remains exactly six records in the validated curated order:
  1. Fixed Bobber Rig
  2. Basic Bottom Rig
  3. Jighead + Soft Plastic
  4. Inline Spinner Setup
  5. Texas Rig
  6. Slip Bobber Rig

# Drop Shot Rig

**Status: PASSED — 2026-08-10**

Static canonical definition confirms:

- difficulty is `Intermediate`,
- components are Wacky Hook, Soft Plastic Bait, and Drop Shot Weight through canonical `tackleId` references,
- hook is instructed to ride point-up,
- weight attaches below the hook on the tag end,
- standard open-water setup leaves the hook point exposed,
- starting hook-to-weight spacing is 12–18 inches and explicitly adjustable.

Runtime validation in Chrome confirmed:

- detail opens with `Intermediate` difficulty,
- Wacky Hook, Soft Plastic Bait, and Drop Shot Weight render from canonical Tackle,
- no unresolved, duplicated, or raw-ID component name appears,
- the instructions preserve point-up hook orientation, tag-end weight placement below the hook, exposed-point open-water setup, and adjustable 12–18 inch starting spacing,
- readiness selection updates and persists after leaving and returning to the Rig,
- Wacky Hook `Name ⓘ` recognition help loads correctly and derived `Used In` includes Drop Shot Rig,
- Drop Shot Weight `Name ⓘ` recognition help loads the corrected terminal/quick-change weight image and derived `Used In` includes Drop Shot Rig,
- the tested recognition panels visually merge with the fixed `#f4f0e8` reference surface without a darker rectangle,
- Parent/Home navigation continues to work normally from the Drop Shot detail flow.

# Carolina Rig

**Status: PASSED — 2026-08-10**

Static canonical definition confirms:

- difficulty is `Intermediate`,
- component order is Sliding Sinker → Protective Bead → Barrel Swivel → Leader Line → Offset Worm Hook → Soft Plastic Bait,
- sinker and bead remain on the main-line side of the swivel,
- leader begins after the swivel,
- soft plastic is instructed to remain straight on the offset hook,
- Basic Bottom Rig forwards to `carolina-rig`,
- Carolina variation metadata links to `texas-rig` and `basic-bottom-rig`.

Runtime validation in Chrome confirmed the Carolina Rig itself passes:

- detail opens with `Intermediate` difficulty,
- all canonical components render in the intended order,
- sinker/bead/swivel/leader relationships are presented correctly,
- the soft plastic/Offset Worm Hook setup is presented correctly,
- readiness updates and persists,
- canonical reference popovers and derived `Used In` relationships function,
- Parent/Home navigation remains normal.

The separate recognition-media review performed during this Rig exposed background/shadow inconsistencies on older shared Tackle assets. Those media defects are tracked under Recognition Media and do not change the Carolina Rig status from **PASSED**.

# Live-Bait Slip-Sinker Rig

**Status: PASSED — 2026-08-10**

Static canonical definition confirms:

- difficulty is `Intermediate`,
- components are Sliding Sinker, optional Protective Bead, Barrel Swivel, Leader Line, Fishing Hook, and Bait,
- `Walking Sinker` remains an alias/variant of canonical Sliding Sinker rather than a duplicate Tackle record,
- the main line is instructed to slide through the sinker,
- the leader begins after the swivel.

Runtime validation in Chrome confirmed:

- detail opens with `Intermediate` difficulty,
- Sliding Sinker, optional Protective Bead, Barrel Swivel, Leader Line, Fishing Hook, and Bait render as canonical components,
- the Sliding Sinker remains on the main line and the instructions clearly allow the line to move freely through it,
- the optional bead is positioned between the sinker and swivel,
- the leader begins after the Barrel Swivel and the Fishing Hook is tied to the leader's free end,
- Walking Sinker is handled as a Sliding Sinker alias/variant rather than a duplicate component,
- readiness selection updates and persists after leaving and returning to the Rig,
- Sliding Sinker, Fishing Hook, and Bait contextual reference information and derived `Used In` relationships function,
- Parent/Home navigation remains normal.

The previously logged background/shadow defects on Sliding Sinker and Bait are shared recognition-media issues and do not change the Live-Bait Slip-Sinker Rig status from **PASSED**.

# Three-Way Rig

**Status: STATIC DEFINITION PASSED / RUNTIME PENDING**

Static canonical definition confirms:

- difficulty is `Intermediate`,
- components are Three-Way Swivel, Leader Line, Fishing Hook, Bait, and Fixed Sinker,
- instructions create one hook leader and one shorter sinker dropper,
- the fixed sinker remains below the hook leader,
- the canonical Tackle definition requires a true three-eye swivel and the Rig explicitly warns against substituting a two-eye barrel swivel.

Runtime confirm rendering, readiness persistence, derived relationships, and recognition-media presentation.

# Recognition Media

**Status: FAILED / CORRECTION REQUIRED — 2026-08-10**

Current reviewed correction sets on `main` include:

From `eed8929cb1859aef653168884e1e71244d1dd80e`:

- `wacky-hook-reference.webp`,
- `wacky-o-ring-reference.webp`,
- `ned-jighead-reference.webp`,
- `drop-shot-weight-reference.webp`,
- `three-way-swivel-reference.webp`,
- `fixed-sinker-reference.webp`,
- `bobber-stop-reference.webp`.

From `5704da6b9cde20bf90edfa8205e9811fba4114ab`:

- `hook-reference.webp`,
- `jighead-reference.webp`,
- `offset-worm-hook-reference.webp`,
- `weight-peg-reference.webp`.

The four newest GitHub blobs exactly match the final reviewed local upload package by Git blob SHA and byte size.

Drop Shot runtime validation confirmed Wacky Hook and Drop Shot Weight recognition popovers load correctly and their tested panels visually merge with the `#f4f0e8` surface.

Carolina runtime review identified nine older assets that require correction because their background/shadow treatment visibly differs from the fixed production reference-media surface:

1. `barrel-swivel-reference.webp`
2. `bead-reference.webp`
3. `bait-reference.webp`
4. `bullet-weight-reference.webp`
5. `fixed-bobber-reference.webp`
6. `sliding-sinker-reference.webp`
7. `slip-float-reference.webp`
8. `split-shot-reference.webp`
9. `stop-bead-reference.webp`

Required correction standard for those nine assets:

- preserve the approved/canonical object geometry unless a separate geometry defect is identified during review,
- final production size 640 × 440,
- exact fixed canvas `#f4f0e8` / RGB 244, 240, 232,
- no visible darker/lighter background rectangle,
- remove baked artificial cast-shadow treatment,
- retain realistic material depth without detached drop-shadow styling,
- maintain clean catalog-style recognition presentation,
- remain recognizable at contextual-popover phone width.

Remaining runtime confirmation after correction:

- all corrected backgrounds visually merge with the reference panel,
- no clipping, fringe, horizontal overflow, misleading scale, or misleading geometry appears,
- Fishing Hook, Jighead, Offset Worm Hook, Weight Peg, Wacky Hook, Wacky O-Ring, Ned Jighead, Drop Shot Weight, Three-Way Swivel, Fixed Sinker, and Bobber Stop remain visually correct after the correction pass.

Known metadata correction required before closeout:

- update `bobber-stop-reference` alt text in `data/media.js` so it accurately describes the approved rubber/silicone stop image rather than the superseded thread-style image.

For future replacement work, pre-delivery confirm under the `MEDIA_GUIDE.md` Tackle Media Generation Gate:

- an accurate legally reusable real photograph was searched for first,
- any real photograph selected has clear local redistribution/modification rights and represents the canonical concept accurately,
- if no suitable reusable photograph exists, the replacement is an original semi-photorealistic catalog-style reference anchored to verified real-world geometry,
- vector/flat/cartoon/icon/clip-art appearance is rejected unless an explicit mechanically justified illustration exception was approved before packaging,
- the replacement was compared visually against representative current approved production Tackle assets,
- the replacement remains recognizable at realistic contextual-popover phone size,
- WebP,
- normally exactly 640 × 440 for the current Tackle production system,
- exact production canvas `#f4f0e8`,
- no baked-in artificial cast shadow treatment,
- single-object recognition composition,
- hook-bearing media follows the conventional viewer-facing J presentation unless an approved exception applies,
- media metadata uses the correct canonical Tackle owner,
- source/reference geometry and license/provenance are recorded accurately.

# Tutorial Audit — Existing Rigs

**Status: STATIC PLAYER PATTERN PASSED / PLAYBACK NOT YET VALIDATED**

Static renderer validation confirms:

- no iframe is emitted by the initial tutorial markup,
- iframe creation occurs only after **Load tutorial** activation,
- player source uses `https://www.youtube-nocookie.com/embed/`,
- no autoplay parameter is requested,
- `Watch on YouTube ↗` remains present independently of the embedded player,
- iframe uses `strict-origin-when-cross-origin` referrer policy and allows fullscreen.

Runtime test each configured tutorial:

- Fixed Bobber — NYSDEC (`LlzvkVUvYBs`)
- Basic Bottom — Catfish Edge (`O6pEc6Y_44U`)
- Jighead + Soft Plastic — Tackle Tactics TV (`wv1e53YZuBo`)
- Slip Bobber — Wired2Fish (`foSgzdjLZyk`)
- Texas — Wired2Fish (`cIraWgiR6u0`)
- Wacky — Vermont Fish & Wildlife Department (`u8N--D8C--4`)
- Ned — Bass University (`ajJz8pH0Jig`)
- Weightless Soft-Plastic — Wired2Fish (`Bld_-8GBsco`)

Inline Spinner intentionally has no embedded tutorial in this package because no suitable candidate was independently verified during sourcing. Confirm the existing Mepps/Panther Martin external references remain available as the D049 fallback.

# Tutorial Audit — Intermediate

**Status: STATIC PLAYER PATTERN PASSED / PLAYBACK NOT YET VALIDATED**

Runtime test:

- Drop Shot — Mystery Tackle Box (`xuqaAq98BDA`)
- Carolina — John Crews (`4nU1QncQ0QM`)
- Live-Bait Slip-Sinker — Nick Lindner (`61mG-xGi-I0`)
- Three-Way — Catfish Edge (`8SONykmBFxA`)

For every tutorial:

- no iframe exists before user activation,
- load action creates a responsive `youtube-nocookie.com` iframe,
- no autoplay request is made,
- source/player branding and controls remain unobscured,
- `Watch on YouTube ↗` remains available,
- a disabled/unavailable embed does not make the Rig unusable,
- blocker-related `ERR_BLOCKED_BY_CLIENT` requests are distinguished from actual playback/player failure.

If a video has been removed, made private, or has embedding disabled, remove the in-app tutorial record in a reviewed correction package and retain the next D049 fallback rather than substituting an unverified video.

# Beginner / Beginner+ Regression

**Status: STATIC SOURCE UNCHANGED / RUNTIME PENDING**

GitHub comparison confirms no application source/data file changed after the Intermediate implementation baseline; subsequent changes are documentation and Tackle media only.

Runtime confirm the previously validated behavior remains intact:

- Beginner exact six,
- Beginner+ exact three,
- Core exact six and order unchanged,
- Wacky geometry/readiness unchanged except addition of recognition media/tutorial,
- Ned geometry/readiness unchanged except addition of recognition media/tutorial,
- Weightless remains weightless and does not gain Bullet Weight,
- Texas tutorial still lazy-loads through the approved pattern,
- all existing readiness selections remain compatible with the unchanged storage key,
- Fish Guide/search remains unchanged,
- Dashboard remains unchanged,
- normal navigation produces no new console errors,
- phone and desktop layouts remain usable,
- keyboard focus remains visible.

# GitHub Validation

**Status: STATIC REPOSITORY + ROUTING/SEARCH + DROP SHOT + CAROLINA + LIVE-BAIT PASSED / MEDIA CORRECTION OPEN**

Verified checkpoints:

- Intermediate implementation baseline: `e4b61aea052f4ad843be0f6d54231af87d574905`.
- Seven-image correction: `eed8929cb1859aef653168884e1e71244d1dd80e`.
- Four-image legacy correction: `5704da6b9cde20bf90edfa8205e9811fba4114ab`.
- Static validation baseline before documentation updates: `67eea13d623067186171a68be6778cf99ebf5456`.
- Comparison from the implementation baseline to that static validation head showed no post-implementation JavaScript/data/CSS/HTML changes; only documentation and Tackle recognition-media files changed.
- Runtime Intermediate collection membership, routing, scoped/global search, All Rigs count/order, and Core count/order passed in Chrome on 2026-08-10.
- Drop Shot Rig detail, component rendering, readiness persistence, derived relationships, recognition popovers, fixed-surface blending, and navigation passed in Chrome on 2026-08-10.
- Carolina Rig detail, component order/relationships, readiness, derived relationships, and navigation passed in Chrome on 2026-08-10.
- Live-Bait Slip-Sinker Rig detail, canonical component handling, sliding-sinker relationship, readiness, derived relationships, and navigation passed in Chrome on 2026-08-10.
- Recognition-media validation remains open because nine older assets require fixed-surface/background/shadow correction.

# Validation Order From Current State

Completed:

1. **GitHub/source/package integrity — PASSED.**
2. **Canonical data counts and relationships — PASSED.**
3. **Intermediate membership, routing, and search — PASSED.**
4. **Drop Shot Rig — PASSED.**
5. **Carolina Rig — PASSED.**
6. **Live-Bait Slip-Sinker Rig — PASSED.**

Open work:

7. Three-Way Rig — runtime.
8. Review/correct the nine identified legacy recognition-media assets.
9. Corrected recognition-media phone/desktop re-validation.
10. Existing and Intermediate tutorial playback audit.
11. Beginner/Beginner+/Core and application regression pass.
12. Correct known Bobber Stop alt-text metadata defect in a user-reviewed production-data package and re-test the affected reference popover.
13. Documentation reconciliation/final closeout.

A failed block must remain visibly failed/pending until corrected and re-tested.

# Closeout

After all source, GitHub, runtime, tutorial, recognition-media, metadata/accessibility, and regression checks pass:

- promote the segment's durable D053/D054 decisions into `DECISIONS.md`,
- reconcile the post-Texas rollout language in `MEDIA_GUIDE.md`,
- update `RIG_REFERENCE_SOURCES.md`,
- update `HANDOFF.md`, `MILESTONES.md`, and `CHANGELOG.md`,
- update this workstream and validation document to `Validated`,
- push and re-fetch the closeout package,
- mark the segment `Finalized` only after that repository state is verified,
- only then begin Intermediate+ under D039/D040.
