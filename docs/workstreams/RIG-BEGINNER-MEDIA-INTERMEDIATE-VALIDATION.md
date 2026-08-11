# Freshwater Fishing Companion

**Document:** RIG-BEGINNER-MEDIA-INTERMEDIATE-VALIDATION.md  
**Document Revision:** 0.1.11  
**Document Status:** Approved  
**Implementation Status:** Partially Validated — Intermediate Rigs + Recognition Media Passed; Tutorials / Regression / Metadata Pending  
**Implementation Baseline:** `main` at `e4b61aea052f4ad843be0f6d54231af87d574905` (`Rigs - Intermediate Build`)  
**Latest Verified Media Update:** `630beb13fe7519dac6993b6f3776dd3b6bfca7bf` (`Rig Image Updates`)  
**Validation Baseline Before This Documentation Update:** `7e21f61946284b56256ce97aebc81f960fec59db`  
**Last Updated:** 2026-08-10

# Purpose

Validation plan and live validation record for the combined Beginner/Beginner+ media-completion pass and full Intermediate Rig expansion.

Preflight confirms package integrity only. GitHub inspection and runtime review are required before the segment is Validated.

# Current Validation State

The Intermediate implementation is present on `main`. Repository/source-integrity, canonical-data validation, Intermediate membership, Intermediate routing/search, all four Intermediate Rig runtime blocks, and recognition-media runtime validation have passed:

- Drop Shot Rig — PASSED
- Carolina Rig — PASSED
- Live-Bait Slip-Sinker Rig — PASSED
- Three-Way Rig — PASSED
- Recognition Media — PASSED

The nine-image correction upload is verified on `main` in commit `630beb13fe7519dac6993b6f3776dd3b6bfca7bf` (`Rig Image Updates`). That commit changes exactly the nine intended recognition assets, and every current GitHub blob SHA/byte size matches the approved local package.

Runtime review then confirmed the corrected assets render cleanly in their contextual reference panels without the previously observed background-color mismatch or baked/uneven shadow defect.

Remaining validation work is now limited to tutorial playback, Beginner/Beginner+/Core and application regression, the known Bobber Stop alt-text metadata correction, and documentation/final closeout.

Recognition-media correction history:

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
- **Runtime media defect identified during Carolina validation:** nine older recognition assets showed visible background-color mismatch and/or baked/uneven shadow treatment against the fixed reference-media surface:
  - `barrel-swivel-reference.webp`,
  - `bead-reference.webp`,
  - `bait-reference.webp`,
  - `bullet-weight-reference.webp`,
  - `fixed-bobber-reference.webp`,
  - `sliding-sinker-reference.webp`,
  - `slip-float-reference.webp`,
  - `split-shot-reference.webp`,
  - `stop-bead-reference.webp`.
- **Nine-image correction package review: PASSED — 2026-08-10.** Each replacement was individually reviewed and approved, then deterministically packaged as a 640 × 440 RGB WebP on the fixed `#f4f0e8` canvas without further generative changes to the approved object version.
- **Nine-image GitHub upload/package verification: PASSED — 2026-08-10.** Commit `630beb13fe7519dac6993b6f3776dd3b6bfca7bf` changes exactly the intended nine files, and all current GitHub blobs match the approved package by SHA and byte size.
- **Nine-image runtime contextual-popover review: PASSED — 2026-08-10.** The corrected panels now blend correctly with the fixed reference-media surface and no clipping, distortion, or misleading geometry was reported.

# Package / Source Integrity

**Status: PASSED — 2026-08-10**

Validated against the Intermediate implementation baseline and subsequent corrective-media/documentation state:

- the Intermediate implementation remains rooted in `e4b61aea052f4ad843be0f6d54231af87d574905`,
- subsequent production application changes relevant to this segment are Tackle recognition-media replacements only,
- `data/rigs.js`, `data/tackle.js`, `data/media.js`, `script.js`, and `view-renderer.js` remain the Intermediate implementation source/data baseline; corrective media uploads did not alter application source/data,
- `5704da6b9cde20bf90edfa8205e9811fba4114ab` contains exactly the four intended legacy Tackle image replacements,
- `630beb13fe7519dac6993b6f3776dd3b6bfca7bf` contains exactly the nine intended background/shadow correction replacements,
- no package README, manifest, staging note, validation TXT, contact sheet, or other review-only artifact appears in the production Tackle image directory,
- current `script.js` statically defines Intermediate as an available Rig collection and keeps Intermediate+, Advanced, and Expert unavailable,
- current renderer source retains canonical-Tackle lookup, derived `Used In`, readiness persistence, contextual `Name ⓘ` references, lazy tutorial creation, `youtube-nocookie.com`, no autoplay parameter, and external YouTube fallback behavior.

Runtime/console execution remains required for the remaining tutorial/regression blocks before final source behavior is considered fully validated.

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

The separate recognition-media review performed during this Rig exposed background/shadow inconsistencies on older shared Tackle assets. Those defects have now been corrected and revalidated under Recognition Media.

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

The previously logged background/shadow defects on Sliding Sinker and Bait were shared recognition-media issues and are now corrected/revalidated.

# Three-Way Rig

**Status: PASSED — 2026-08-10**

Static canonical definition confirms:

- difficulty is `Intermediate`,
- components are Three-Way Swivel, Leader Line, Fishing Hook, Bait, and Fixed Sinker,
- instructions create one hook leader and one shorter sinker dropper,
- the fixed sinker remains below the hook leader,
- the canonical Tackle definition requires a true three-eye swivel and the Rig explicitly warns against substituting a two-eye barrel swivel.

Runtime validation in Chrome confirmed:

- detail opens with `Intermediate` difficulty,
- Three-Way Swivel, Leader Line, Fishing Hook, Bait, and Fixed Sinker render as canonical components,
- the main line connects to one swivel eye, the hook leader to a second eye, and the shorter sinker dropper to the third eye,
- the Fishing Hook is presented on the hook leader and the Fixed Sinker on the shorter dropper below the hook leader,
- the Rig clearly uses a true three-eye swivel rather than a two-eye Barrel Swivel,
- readiness selection updates and persists after leaving and returning to the Rig,
- Three-Way Swivel, Fixed Sinker, and Fishing Hook contextual references load correctly and derived `Used In` relationships function,
- the Three-Way Swivel recognition image reads as a true three-eye swivel,
- the Fixed Sinker recognition image reads as a terminal tie-eye sinker rather than a sliding through-hole sinker,
- Parent/Home navigation remains normal.

# Recognition Media

**Status: PASSED — 2026-08-10**

Reviewed/corrected production media currently includes:

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

From `630beb13fe7519dac6993b6f3776dd3b6bfca7bf`:

- `barrel-swivel-reference.webp`,
- `bead-reference.webp`,
- `bait-reference.webp`,
- `bullet-weight-reference.webp`,
- `fixed-bobber-reference.webp`,
- `sliding-sinker-reference.webp`,
- `slip-float-reference.webp`,
- `split-shot-reference.webp`,
- `stop-bead-reference.webp`.

Validation confirmed:

- commit `630beb13fe7519dac6993b6f3776dd3b6bfca7bf` changes exactly the nine intended correction files,
- every current GitHub blob SHA and byte size for those nine files matches the approved local package,
- contextual reference panels now visually merge with the fixed `#f4f0e8` media surface,
- the previously identified background-color mismatch and baked/uneven shadow issue is no longer visible,
- corrected objects remain unclipped and undistorted,
- corrected objects remain recognizable at runtime display size,
- previously corrected Fishing Hook, Jighead, Offset Worm Hook, Weight Peg, Wacky Hook, Wacky O-Ring, Ned Jighead, Drop Shot Weight, Three-Way Swivel, Fixed Sinker, and Bobber Stop remain accepted.

Known metadata correction still required before closeout:

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

**Status: INTERMEDIATE RIGS + RECOGNITION MEDIA PASSED / TUTORIAL + REGRESSION + METADATA OPEN**

Verified checkpoints:

- Intermediate implementation baseline: `e4b61aea052f4ad843be0f6d54231af87d574905`.
- Seven-image correction: `eed8929cb1859aef653168884e1e71244d1dd80e`.
- Four-image legacy correction: `5704da6b9cde20bf90edfa8205e9811fba4114ab`.
- Nine-image correction: `630beb13fe7519dac6993b6f3776dd3b6bfca7bf`.
- Validation documentation baseline immediately before this update: `7e21f61946284b56256ce97aebc81f960fec59db`.
- Runtime Intermediate collection membership, routing, scoped/global search, All Rigs count/order, and Core count/order passed in Chrome on 2026-08-10.
- Drop Shot Rig detail, component rendering, readiness persistence, derived relationships, recognition popovers, fixed-surface blending, and navigation passed in Chrome on 2026-08-10.
- Carolina Rig detail, component order/relationships, readiness, derived relationships, and navigation passed in Chrome on 2026-08-10.
- Live-Bait Slip-Sinker Rig detail, canonical component handling, sliding-sinker relationship, readiness, derived relationships, and navigation passed in Chrome on 2026-08-10.
- Three-Way Rig detail, three-eye swivel topology, leader/dropper relationships, readiness, derived relationships, recognition references, and navigation passed in Chrome on 2026-08-10.
- The nine-image correction package passed user review, GitHub blob/package verification, and runtime contextual-popover validation on 2026-08-10.

# Validation Order From Current State

Completed:

1. **GitHub/source/package integrity — PASSED.**
2. **Canonical data counts and relationships — PASSED.**
3. **Intermediate membership, routing, and search — PASSED.**
4. **Drop Shot Rig — PASSED.**
5. **Carolina Rig — PASSED.**
6. **Live-Bait Slip-Sinker Rig — PASSED.**
7. **Three-Way Rig — PASSED.**
8. **Recognition-media correction package review — PASSED.**
9. **Recognition-media GitHub upload/package verification — PASSED.**
10. **Recognition-media phone/desktop runtime re-validation — PASSED.**

Open work:

11. Intermediate tutorial playback audit.
12. Existing tutorial playback regression audit.
13. Beginner/Beginner+/Core and application regression pass.
14. Correct known Bobber Stop alt-text metadata defect in a user-reviewed production-data package and re-test the affected reference popover.
15. Documentation reconciliation/final closeout.

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
