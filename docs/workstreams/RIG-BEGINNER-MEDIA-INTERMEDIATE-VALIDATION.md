# Freshwater Fishing Companion

**Document:** RIG-BEGINNER-MEDIA-INTERMEDIATE-VALIDATION.md  
**Document Revision:** 0.1.0  
**Document Status:** Approved  
**Implementation Status:** In Progress  
**Repository Baseline:** `main` at `73ec8e2ec86c390b0580979cfe975b411b35f7d6` (`Beginner Rig Finalization`)  
**Last Updated:** 2026-08-10

# Purpose

Validation plan for the combined Beginner/Beginner+ media-completion pass and full Intermediate Rig expansion.

Preflight confirms package integrity only. GitHub inspection and runtime review are required before the segment is Validated.

# Package / Source Integrity

Confirm before delivery:

- all four changed JavaScript files pass syntax validation,
- each existing source replacement is derived from the exact GitHub baseline at `73ec8e2ec86c390b0580979cfe975b411b35f7d6`,
- no unrelated routing, Fish, Dashboard, readiness-storage, search, or renderer changes are introduced,
- the ZIP contains only intended permanent repository files,
- no package README, manifest, staging note, validation TXT, scripts, contact sheets, or temporary artifacts appear in the ZIP.

# Canonical Data Counts

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

The Intermediate collection must contain exactly:

1. Drop Shot Rig
2. Carolina Rig
3. Live-Bait Slip-Sinker Rig
4. Three-Way Rig

No Beginner, Beginner+, Intermediate+, Advanced, or Expert record may appear in the scoped Intermediate collection.

Intermediate+, Advanced, and Expert cards remain clearly unavailable under D030.

# Intermediate Routing / Search

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

Confirm:

- detail opens with `Intermediate` difficulty,
- Sliding Sinker, optional Protective Bead, Barrel Swivel, Leader Line, Fishing Hook, and Bait render,
- walking sinker terminology is handled as a Sliding Sinker alias/variant rather than a duplicate canonical Tackle type,
- main line can slide through the sinker,
- leader begins after the swivel,
- readiness updates/persists,
- `Used In` derives the new relationships.

# Three-Way Rig

Confirm:

- detail opens with `Intermediate` difficulty,
- Three-Way Swivel, Leader Line, Fishing Hook, Bait, and Fixed Sinker render,
- a true three-eye swivel is shown in recognition media,
- instructions create one hook leader and one shorter sinker dropper,
- sinker remains below the hook leader,
- readiness updates/persists,
- `Used In` derives the new relationships.

# Recognition Media

New media files:

- `wacky-hook-reference.webp`
- `wacky-o-ring-reference.webp`
- `ned-jighead-reference.webp`
- `drop-shot-weight-reference.webp`
- `three-way-swivel-reference.webp`
- `fixed-sinker-reference.webp`

Static confirm for every new image:

- WebP,
- exactly 640 × 440,
- RGB/no alpha,
- restrained warm-neutral background,
- no baked-in cast shadow,
- single-object recognition composition,
- media metadata uses the correct canonical Tackle owner,
- source/reference geometry is recorded.

Runtime phone/desktop confirm:

- Wacky Hook reads clearly as an open-gap hook rather than a closed loop,
- Wacky O-Ring reads as a flexible ring,
- Ned Jighead clearly shows the mushroom-style head, keeper, and open hook,
- Drop Shot Weight clearly shows a terminal weight with quick-change line clip,
- Three-Way Swivel clearly shows three separate eyes,
- Fixed Sinker clearly shows a terminal tie eye and does not look like a through-hole sliding sinker,
- images remain useful at contextual-popover phone width,
- no clipping, fringe, horizontal overflow, or misleading scale/geometry appears.

# Tutorial Audit — Existing Rigs

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

If a video has been removed, made private, or has embedding disabled, remove the in-app tutorial record in a correction package and retain the next D049 fallback rather than substituting an unverified video.

# Beginner / Beginner+ Regression

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

After push:

1. verify actual `main` commit and parent,
2. inspect exact changed-file inventory,
3. confirm every delivered source/doc/image file is present,
4. compare source/document text blobs to the delivered package,
5. compare new binary media blob SHAs to the delivered package,
6. confirm no package-only artifacts were committed,
7. only then begin runtime validation.

# Closeout

After all source, GitHub, runtime, tutorial, recognition-media, and regression checks pass:

- promote the segment's durable D053/D054 decisions into `DECISIONS.md`,
- update the post-Texas rollout language in `MEDIA_GUIDE.md`,
- update `RIG_REFERENCE_SOURCES.md`,
- update `HANDOFF.md`, `MILESTONES.md`, and `CHANGELOG.md`,
- update this workstream and validation document to `Validated`,
- push and re-fetch the closeout package,
- only then begin Intermediate+ under D039/D040.
