# Freshwater Fishing Companion

**Document:** RIG-BEGINNER-MEDIA-INTERMEDIATE-VALIDATION.md  
**Document Revision:** 0.1.4  
**Document Status:** Approved  
**Implementation Status:** Partially Validated — Static Source/Data Passed; Runtime Pending  
**Implementation Baseline:** `main` at `e4b61aea052f4ad843be0f6d54231af87d574905` (`Rigs - Intermediate Build`)  
**Latest Verified Media Update:** `5704da6b9cde20bf90edfa8205e9811fba4114ab` (`Hook fixes`)  
**Current Validation Head:** `67eea13d623067186171a68be6778cf99ebf5456`  
**Last Updated:** 2026-08-10

# Purpose

Validation plan and live validation record for the combined Beginner/Beginner+ media-completion pass and full Intermediate Rig expansion.

Preflight confirms package integrity only. GitHub inspection and runtime review are required before the segment is Validated.

# Current Validation State

The Intermediate implementation is present on `main`. Repository/source-integrity and canonical-data validation have now passed against current head `67eea13d623067186171a68be6778cf99ebf5456`. Runtime routing/search, Rig-detail behavior, recognition-media presentation, tutorial playback, and regression validation remain pending.

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

**Status: STATIC DATA PASSED / RUNTIME PENDING**

Current canonical Intermediate records are exactly:

1. Drop Shot Rig
2. Carolina Rig
3. Live-Bait Slip-Sinker Rig
4. Three-Way Rig

Source filtering uses `rig.difficulty === "Intermediate"` for the Intermediate collection. No Intermediate+, Advanced, or Expert canonical Rig record exists in the active implementation.

Runtime collection rendering remains to be confirmed.

# Intermediate Routing / Search

**Status: STATIC SOURCE PASSED / RUNTIME PENDING**

Static source confirms:

- Intermediate card is marked available,
- `browse-intermediate-rigs` maps to collection key `intermediate`,
- Intermediate filtering selects only `difficulty === "Intermediate"`,
- empty scoped collections are alphabetically sorted except Core, which preserves curated Core order,
- scoped search searches only the selected collection,
- global Rig search searches all active Rigs,
- clear-search behavior empties the query, updates results, and restores input focus,
- explicit view transitions reset scroll position to the top,
- Core membership/order remains driven by the unchanged six-member `CORE_RIG_IDS` registry.

Runtime confirm:

- Intermediate card is actionable,
- Intermediate page opens at the top,
- Parent/Home sticky navigation follows D051,
- empty Intermediate search displays all four records in normal collection order,
- scoped search returns only Intermediate records,
- clear control restores all four records and returns focus to the field,
- global Rig search can find every new Intermediate Rig,
- All Rigs contains exactly 13 active records,
- All Rigs remains alphabetized when its query is empty,
- Core membership/order remains unchanged.

# Drop Shot Rig

**Status: STATIC DEFINITION PASSED / RUNTIME PENDING**

Static canonical definition confirms:

- difficulty is `Intermediate`,
- components are Wacky Hook, Soft Plastic Bait, and Drop Shot Weight through canonical `tackleId` references,
- hook is instructed to ride point-up,
- weight attaches below the hook on the tag end,
- standard open-water setup leaves the hook point exposed,
- starting hook-to-weight spacing is 12–18 inches and explicitly adjustable.

Runtime confirm:

- detail opens with `Intermediate` difficulty,
- Wacky/Finesse/Drop Shot hook, Soft Plastic Bait, and Drop Shot Weight render from canonical Tackle,
- no unresolved or duplicate component name appears,
- readiness updates/persists,
- Tackle `Used In` derives the new relationships,
- `Name ⓘ` recognition help works for Drop Shot Weight and the shared finesse hook.

# Carolina Rig

**Status: STATIC DEFINITION PASSED / RUNTIME PENDING**

Static canonical definition confirms:

- difficulty is `Intermediate`,
- component order is Sliding Sinker → Protective Bead → Barrel Swivel → Leader Line → Offset Worm Hook → Soft Plastic Bait,
- sinker and bead remain on the main-line side of the swivel,
- leader begins after the swivel,
- soft plastic is instructed to remain straight on the offset hook,
- Basic Bottom Rig forwards to `carolina-rig`,
- Carolina variation metadata links to `texas-rig` and `basic-bottom-rig`.

Runtime confirm rendering, readiness persistence, and relationship presentation.

# Live-Bait Slip-Sinker Rig

**Status: STATIC DEFINITION PASSED / RUNTIME PENDING**

Static canonical definition confirms:

- difficulty is `Intermediate`,
- components are Sliding Sinker, optional Protective Bead, Barrel Swivel, Leader Line, Fishing Hook, and Bait,
- `Walking Sinker` remains an alias/variant of canonical Sliding Sinker rather than a duplicate Tackle record,
- the main line is instructed to slide through the sinker,
- the leader begins after the swivel.

Runtime confirm rendering, readiness persistence, and derived `Used In` relationships.

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

**Status: BINARY UPLOADS VERIFIED / RUNTIME + METADATA CORRECTION PENDING**

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

Runtime phone/desktop confirm:

- Fishing Hook reads as the approved simple J-style hook with a straight shank,
- Jighead reads as a generic round Jighead with visible line eye, keeper, and exposed hook,
- Offset Worm Hook reads clearly with its offset geometry and conventional J presentation,
- Weight Peg reads clearly as the approved rubber/silicone stop on its threading wire,
- Wacky Hook reads clearly as an open-gap finesse/wacky hook rather than a closed loop,
- Wacky O-Ring reads as a flexible ring,
- Ned Jighead clearly reads as a Ned-style mushroom/cylindrical jighead integrated with an open hook rather than a generic ball jighead,
- Drop Shot Weight clearly shows a terminal weight with a recognizable line-attachment/quick-change clip relationship,
- Three-Way Swivel clearly shows exactly three separate eyes,
- Fixed Sinker clearly shows a terminal tie eye and does not look like a through-hole sliding sinker,
- Bobber Stop reads clearly as an accepted rubber/silicone stop variant,
- image canvases visually merge with the reference panel rather than appearing as darker rectangles,
- images remain useful at contextual-popover phone width,
- no clipping, fringe, horizontal overflow, misleading scale, or misleading geometry appears.

Known correction required before closeout:

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

**Status: STATIC REPOSITORY VALIDATION PASSED / RUNTIME PENDING**

Verified checkpoints:

- Intermediate implementation baseline: `e4b61aea052f4ad843be0f6d54231af87d574905`.
- Seven-image correction: `eed8929cb1859aef653168884e1e71244d1dd80e`.
- Four-image legacy correction: `5704da6b9cde20bf90edfa8205e9811fba4114ab`.
- Current validation head: `67eea13d623067186171a68be6778cf99ebf5456`.
- Comparison from the implementation baseline to current head shows no post-implementation JavaScript/data/CSS/HTML changes; only documentation and Tackle recognition-media files changed.
- The current repository contains the permanent `#f4f0e8` media-surface and hook-orientation standards.
- No runtime result is implied by these GitHub checks.

# Validation Order From Current State

Completed:

1. **GitHub/source/package integrity — PASSED.**
2. **Canonical data counts and relationships — PASSED.**

Proceed next in this order:

3. Intermediate membership, routing, and search — runtime.
4. Drop Shot Rig — runtime.
5. Carolina Rig — runtime.
6. Live-Bait Slip-Sinker Rig — runtime.
7. Three-Way Rig — runtime.
8. Corrected recognition-media phone/desktop review.
9. Existing and Intermediate tutorial playback audit.
10. Beginner/Beginner+/Core and application regression pass.
11. Correct known Bobber Stop alt-text metadata defect in a user-reviewed production-data package and re-test the affected reference popover.
12. Documentation reconciliation/final closeout.

Update this file after each meaningful validation block. A failed block must remain visibly failed/pending until corrected and re-tested.

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
