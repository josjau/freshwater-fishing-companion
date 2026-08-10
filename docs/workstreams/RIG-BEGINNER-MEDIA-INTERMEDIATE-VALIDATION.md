# Freshwater Fishing Companion

**Document:** RIG-BEGINNER-MEDIA-INTERMEDIATE-VALIDATION.md  
**Document Revision:** 0.1.3  
**Document Status:** Approved  
**Implementation Status:** Implemented / Unvalidated — Ready for Validation  
**Implementation Baseline:** `main` at `e4b61aea052f4ad843be0f6d54231af87d574905` (`Rigs - Intermediate Build`)  
**Latest Verified Media Update:** `eed8929cb1859aef653168884e1e71244d1dd80e` (`Tackle Image Updates`)  
**Last Updated:** 2026-08-10

# Purpose

Validation plan and live validation record for the combined Beginner/Beginner+ media-completion pass and full Intermediate Rig expansion.

Preflight confirms package integrity only. GitHub inspection and runtime review are required before the segment is Validated.

# Current Validation State

The Intermediate implementation is present on `main`, and the reviewed seven-image Tackle correction package has now been uploaded by the user. The planned post-push Intermediate source/data/runtime/tutorial/regression validation sequence has **not yet begun**.

Recognition-media correction state:

- **Initial six-image visual-quality gate: FAILED.**
- Failure reason: the six assets introduced in `e4b61ae` used an older flat/vector-style treatment and did not meet the approved current catalog/semi-photorealistic Tackle recognition standard.
- A first partial correction replaced four files in `601b741f368f7e1ae9e5b2963935673901b76674`.
- The user subsequently reviewed and uploaded the complete current correction set in `eed8929cb1859aef653168884e1e71244d1dd80e` (`Tackle Image Updates`).
- GitHub inspection confirms that commit replaced exactly:
  - `bobber-stop-reference.webp`,
  - `drop-shot-weight-reference.webp`,
  - `fixed-sinker-reference.webp`,
  - `ned-jighead-reference.webp`,
  - `three-way-swivel-reference.webp`,
  - `wacky-hook-reference.webp`,
  - `wacky-o-ring-reference.webp`.
- The approved Bobber Stop recognition image uses a rubber/silicone variant, which is valid under the canonical Tackle definition.
- The current Media Guide requires exact `#f4f0e8` canvas matching and normal viewer-facing J orientation for hook-bearing recognition assets unless a reviewed technical exception applies.
- No Intermediate source/data/runtime/tutorial/regression item below should be interpreted as passed merely because the implementation and corrected media are present on `main`.

# Package / Source Integrity

**Status: Not Yet Validated**

Confirm against the final corrected `main` baseline before runtime validation:

- the four implementation JavaScript files remain syntactically valid,
- no unrelated routing, Fish, Dashboard, readiness-storage, search, or renderer changes were introduced by the Intermediate implementation or recognition-media correction,
- all intended permanent repository files are present,
- no package README, manifest, staging note, validation TXT, scripts, contact sheets, or temporary artifacts were committed,
- the seven current recognition-media replacements are present at the expected canonical paths,
- the media upload did not unintentionally alter application source/data files.

# Canonical Data Counts

**Status: Not Yet Validated**

Confirm:

- exactly 13 active Rigs,
- exactly 6 Beginner Rigs,
- exactly 3 Beginner+ Rigs,
- exactly 4 Intermediate Rigs,
- exactly 6 unique `CORE_RIG_IDS`, unchanged from the validated baseline,
- exactly 23 active canonical Tackle records,
- exactly 23 active Tackle recognition-media records,
- every active Rig `tackleId` resolves to active canonical Tackle,
- every active Tackle `mediaIds` entry resolves to active media,
- every active media `ownerId` resolves to active canonical Tackle,
- every active canonical Tackle concept has at least one recognition-media reference.

# Intermediate Membership

**Status: Not Yet Validated**

The Intermediate collection must contain exactly:

1. Drop Shot Rig
2. Carolina Rig
3. Live-Bait Slip-Sinker Rig
4. Three-Way Rig

No Beginner, Beginner+, Intermediate+, Advanced, or Expert record may appear in the scoped Intermediate collection.

Intermediate+, Advanced, and Expert cards remain clearly unavailable under D030.

# Intermediate Routing / Search

**Status: Not Yet Validated**

Runtime confirm:

- Intermediate card is actionable,
- Intermediate page opens at the top,
- Parent/Home sticky navigation follows D051,
- empty Intermediate search displays all four records in normal collection order,
- scoped search returns only Intermediate records,
- clear control restores all four records and returns focus to the field,
- global Rig search can find every new Intermediate Rig,
- All Rigs now contains exactly 13 active records,
- All Rigs remains alphabetized when its query is empty,
- Core membership/order remains unchanged.

# Drop Shot Rig

**Status: Not Yet Validated**

Confirm:

- detail opens with `Intermediate` difficulty,
- Wacky/Finesse/Drop Shot hook, Soft Plastic Bait, and Drop Shot Weight render from canonical Tackle,
- no unresolved or duplicate component name is stored on the Rig,
- standard hook rides point-up,
- weight is below the hook on the tag end,
- standard open-water setup leaves the hook point exposed,
- hook-to-weight spacing is presented as adjustable,
- readiness updates/persists,
- Tackle `Used In` derives the new relationships,
- `Name ⓘ` recognition help works for Drop Shot Weight and the shared finesse hook.

# Carolina Rig

**Status: Not Yet Validated**

Confirm:

- detail opens with `Intermediate` difficulty,
- component order is Sliding Sinker → Protective Bead → Barrel Swivel → Leader → Offset Worm Hook + Soft Plastic,
- weight slides on the main line rather than the leader,
- bead is below the weight and above the swivel,
- leader begins after the swivel,
- soft plastic is rigged straight on the offset hook,
- readiness updates/persists,
- Basic Bottom Rig's `carolina-rig` forward variation now resolves to a real active canonical Rig,
- Carolina links back to Basic Bottom/Texas as defined by the canonical variation metadata.

# Live-Bait Slip-Sinker Rig

**Status: Not Yet Validated**

Confirm:

- detail opens with `Intermediate` difficulty,
- Sliding Sinker, optional Protective Bead, Barrel Swivel, Leader Line, Fishing Hook, and Bait render,
- walking sinker terminology is handled as a Sliding Sinker alias/variant rather than a duplicate canonical Tackle type,
- main line can slide through the sinker,
- leader begins after the swivel,
- readiness updates/persists,
- `Used In` derives the new relationships.

# Three-Way Rig

**Status: Not Yet Validated**

Confirm:

- detail opens with `Intermediate` difficulty,
- Three-Way Swivel, Leader Line, Fishing Hook, Bait, and Fixed Sinker render,
- a true three-eye swivel is shown in recognition media,
- instructions create one hook leader and one shorter sinker dropper,
- sinker remains below the hook leader,
- readiness updates/persists,
- `Used In` derives the new relationships.

# Recognition Media

**Status: CORRECTED ON MAIN / NOT YET RUNTIME VALIDATED**

Current user-uploaded correction set from `eed8929cb1859aef653168884e1e71244d1dd80e`:

- `wacky-hook-reference.webp`,
- `wacky-o-ring-reference.webp`,
- `ned-jighead-reference.webp`,
- `drop-shot-weight-reference.webp`,
- `three-way-swivel-reference.webp`,
- `fixed-sinker-reference.webp`,
- `bobber-stop-reference.webp`.

Runtime phone/desktop confirm:

- Wacky Hook reads clearly as an open-gap finesse/wacky hook rather than a closed loop,
- Wacky Hook uses the normal viewer-facing J presentation expected by the current media standard,
- Wacky O-Ring reads as a flexible ring,
- Ned Jighead clearly reads as a Ned-style mushroom/cylindrical jighead integrated with an open hook rather than a generic ball jighead,
- Drop Shot Weight clearly shows a terminal weight with a recognizable line-attachment/quick-change clip relationship,
- Three-Way Swivel clearly shows exactly three separate eyes,
- Fixed Sinker clearly shows a terminal tie eye and does not look like a through-hole sliding sinker,
- Bobber Stop reads clearly as an accepted rubber/silicone stop variant,
- image canvases visually merge with the reference panel rather than appearing as darker rectangles,
- images remain useful at contextual-popover phone width,
- no clipping, fringe, horizontal overflow, misleading scale, or misleading geometry appears.

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

Only after the runtime checks pass does this section become **Validated**.

# Tutorial Audit — Existing Rigs

**Status: Not Yet Validated**

Runtime test each configured tutorial by pressing **Load tutorial** and confirming playback/player initialization plus external fallback:

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

**Status: Not Yet Validated**

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

**Status: Not Yet Validated**

Confirm the previously validated behavior remains intact:

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

**Status: CORRECTED MEDIA UPLOAD VERIFIED / REMAINING SOURCE-RUNTIME VALIDATION PENDING**

Verified corrective checkpoint:

- `eed8929cb1859aef653168884e1e71244d1dd80e` (`Tackle Image Updates`) contains exactly the seven expected recognition-media binary replacements listed above.
- `main` subsequently advanced through merge commit `f75374a34abad52c2df5c525ff366c70db0706ec`.
- The current repository also contains the approved `MEDIA_GUIDE.md` rules for exact canvas matching and hook orientation.
- No runtime validation result is implied by those GitHub checks.

At the start of the next session:

1. re-fetch actual current `main`,
2. confirm the current head/parent and changed-file state since this handoff,
3. validate the implementation JavaScript/data integrity and canonical counts,
4. validate routing/search and each Intermediate Rig,
5. validate the seven corrected recognition assets on phone and desktop,
6. complete the tutorial and regression audit,
7. update this file after each meaningful validation block.

# Validation Order From Current State

Proceed in this order so failures are isolated and documented immediately:

1. GitHub/source/package integrity.
2. Canonical data counts and relationships.
3. Intermediate membership, routing, and search.
4. Drop Shot Rig.
5. Carolina Rig.
6. Live-Bait Slip-Sinker Rig.
7. Three-Way Rig.
8. Corrected recognition-media phone/desktop review.
9. Existing and Intermediate tutorial audit.
10. Beginner/Beginner+/Core and application regression pass.
11. Documentation reconciliation/final closeout.

Update this file after each meaningful validation block. A failed block must remain visibly failed/pending until corrected and re-tested.

# Closeout

After all source, GitHub, runtime, tutorial, recognition-media, and regression checks pass:

- promote the segment's durable D053/D054 decisions into `DECISIONS.md`,
- reconcile the post-Texas rollout language in `MEDIA_GUIDE.md`,
- update `RIG_REFERENCE_SOURCES.md`,
- update `HANDOFF.md`, `MILESTONES.md`, and `CHANGELOG.md`,
- update this workstream and validation document to `Validated`,
- push and re-fetch the closeout package,
- mark the segment `Finalized` only after that repository state is verified,
- only then begin Intermediate+ under D039/D040.
