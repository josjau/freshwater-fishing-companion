# Freshwater Fishing Companion

**Document:** RIG-BEGINNER-MEDIA-INTERMEDIATE.md  
**Document Revision:** 0.1.0  
**Document Status:** Approved  
**Implementation Status:** In Progress  
**Repository Baseline:** `main` at `73ec8e2ec86c390b0580979cfe975b411b35f7d6` (`Beginner Rig Finalization`)  
**Last Updated:** 2026-08-10

# Purpose

Complete the recognition/tutorial-media coverage of the validated nine-Rig Beginner and Beginner+ foundation and implement the complete Intermediate Rig tier as one coherent Rig-domain build segment.

This segment keeps D046's tier-by-tier expansion discipline: it adds exactly one new learning tier, Intermediate, while completing deferred media work for the already validated Beginner/Beginner+ library.

# Segment Decisions

The following decisions are approved for this segment and must be promoted into the governing decision/media documentation at formal closeout.

## Draft D053 — Rig Media Completeness and Tutorial Audit

Every Rig that enters a completed learning tier receives a media-completeness audit as part of the same build segment.

The audit requires:

- authoritative text assembly remains mandatory and authoritative,
- every Rig receives a tutorial-source search,
- a technically correct YouTube tutorial is included when a suitable public source can be independently verified and is compatible with D049,
- tutorial players remain lazy-loaded, use `youtube-nocookie.com`, do not autoplay, preserve platform attribution/controls, and retain a `Watch on YouTube ↗` fallback,
- if no suitable tutorial is found, the Rig uses the next trustworthy D049 fallback instead of adding a weak or technically mismatched video,
- every canonical Tackle concept used by a completed Rig must provide accurate recognition help and normally has an approved recognition-media asset,
- newly introduced canonical Tackle concepts ship with their recognition media in the same tier build,
- generated completed-Rig/build-step imagery remains prohibited under D045.

Permanent working principle for the Rig workstream:

> Tutorial preferred, trustworthy external visual/reference as backup, authoritative text always required.

## Draft D054 — Intermediate Rig Tier Membership

The complete Intermediate tier is:

1. Drop Shot Rig
2. Carolina Rig
3. Live-Bait Slip-Sinker Rig
4. Three-Way Rig

This is a deliberate difficulty step after Beginner+ because these Rigs introduce more precise leader management, bottom-contact tuning, multi-component relationships, or multi-branch rigging while remaining broadly practical for the approved regional library.

Intermediate+, Advanced, and Expert membership remain outside this segment and are not silently assigned here.

# Existing Rig Media Completion Scope

The validated nine-Rig library receives a tutorial audit:

| Rig | Tutorial result |
|---|---|
| Fixed Bobber Rig | NYSDEC — `How To Rig a Bobber and Worm for Fishing` (`LlzvkVUvYBs`) |
| Basic Bottom Rig | Catfish Edge — `How To Tie A Slip Sinker Rig For Catfish` (`O6pEc6Y_44U`) |
| Jighead + Soft Plastic | Tackle Tactics TV — `Soft Plastics 101 - Chapter 6 - Soft Plastic Rigging on a Standard Jighead` (`wv1e53YZuBo`) |
| Slip Bobber Rig | Wired2Fish — `How to Rig and Fish Slip Bobbers for Crappie in Timber` (`foSgzdjLZyk`) |
| Inline Spinner Setup | No suitable independently verified YouTube tutorial selected in this build; retain the verified Mepps/Panther Martin external-reference fallback. |
| Texas Rig | Existing validated Wired2Fish tutorial (`cIraWgiR6u0`) retained. |
| Wacky Rig | Vermont Fish & Wildlife Department — `Wacky Rigging a Senko with an O-Ring, Fishing Lure Tutorial` (`u8N--D8C--4`) |
| Ned Rig | Bass University — `How to Rig & Fish the Ned Rig` (`ajJz8pH0Jig`) |
| Weightless Soft-Plastic Rig | Wired2Fish — `Weightless Soft Plastics for Springtime Bass` (`Bld_-8GBsco`) |

Video records are source candidates until the post-push runtime test confirms that the current public video remains playable through the approved embed path. A source that disables embedding or fails compatibility testing falls back to its external destination/reference rather than blocking the Rig page.

# Recognition-Media Completion Scope

The pre-segment state contains 20 active canonical Tackle concepts and 17 active Tackle recognition images. The known Beginner/Beginner+ gaps are completed with:

- Wacky Hook → `images/tackle/wacky-hook-reference.webp`
- Wacky O-Ring → `images/tackle/wacky-o-ring-reference.webp`
- Ned Jighead → `images/tackle/ned-jighead-reference.webp`

These assets use the current 640 × 440 warm-neutral WebP production treatment and are mechanically anchored to verified real-world product/reference geometry.

# Intermediate Rig Scope

## Drop Shot Rig

Canonical configuration:

- compact finesse/Wacky/Drop Shot hook,
- soft-plastic bait,
- Drop Shot Weight below the hook.

Standard learning configuration keeps the hook point exposed and point-up, with the weight attached to the tag end below the hook. Hook-to-weight spacing is adjustable to bottom cover and fish position.

New canonical Tackle:

- Drop Shot Weight

New recognition media:

- `images/tackle/drop-shot-weight-reference.webp`

Tutorial:

- Mystery Tackle Box — `Drop Shot Rig: How To Rig the Drop Shot (Tutorial)` (`xuqaAq98BDA`)

## Carolina Rig

Canonical configuration:

- Sliding Sinker,
- Protective Bead,
- Barrel Swivel,
- Leader Line,
- Offset Worm Hook,
- Soft Plastic Bait.

No duplicate Carolina-only sinker, bead, swivel, hook, or line concept is introduced when an existing canonical Tackle concept already answers readiness correctly.

Tutorial:

- John Crews — `HOW TO FISH A CAROLINA RIG` (`4nU1QncQ0QM`)

The new canonical `carolina-rig` record resolves the previously approved Basic Bottom Rig forward variation relationship.

## Live-Bait Slip-Sinker Rig

Canonical configuration:

- Sliding Sinker,
- optional Protective Bead,
- Barrel Swivel,
- Leader Line,
- Fishing Hook,
- Bait.

A walking sinker is modeled as a recognized Sliding Sinker variant rather than creating a duplicate canonical weight concept.

Tutorial:

- Nick Lindner — `Lindy Rigging Walleyes (The Complete Guide)` (`61mG-xGi-I0`)

## Three-Way Rig

Canonical configuration:

- Three-Way Swivel,
- Leader Line material for hook leader and sinker dropper,
- Fishing Hook,
- Bait,
- Fixed Sinker on the short dropper.

New canonical Tackle:

- Three-Way Swivel
- Fixed Sinker

New recognition media:

- `images/tackle/three-way-swivel-reference.webp`
- `images/tackle/fixed-sinker-reference.webp`

Tutorial:

- Catfish Edge — `3 Way Rig - Three Way Rig Catfish Rigs` (`8SONykmBFxA`)

# Canonical Tackle Result

After this package:

- active canonical Tackle concepts: 23,
- active Tackle recognition-media records: 23,
- every active canonical Tackle concept has at least one recognition-media reference,
- Rig requirements remain the single owner of Rig-to-Tackle usage relationships,
- derived Tackle `Used In` continues to be computed from active Rig requirements.

New canonical Tackle concepts are limited to concepts that are functionally distinct for readiness:

1. Drop Shot Weight
2. Three-Way Swivel
3. Fixed Sinker

# Rig Guide Result

After implementation:

- 13 active Rigs,
- Beginner: 6,
- Beginner+: 3,
- Intermediate: 4,
- Core remains the existing six-member cross-cutting curated registry,
- Intermediate becomes actionable on the Rig Guide,
- Intermediate search is scoped to the four Intermediate records,
- All Rigs includes all 13 active Rigs,
- Intermediate+, Advanced, and Expert remain unavailable `Coming Soon` cards.

# Source Scope

Existing files changed:

- `data/rigs.js`
- `data/tackle.js`
- `data/media.js`
- `script.js`

New production media:

- `images/tackle/wacky-hook-reference.webp`
- `images/tackle/wacky-o-ring-reference.webp`
- `images/tackle/ned-jighead-reference.webp`
- `images/tackle/drop-shot-weight-reference.webp`
- `images/tackle/three-way-swivel-reference.webp`
- `images/tackle/fixed-sinker-reference.webp`

Documentation introduced in this implementation package:

- `docs/workstreams/RIG-BEGINNER-MEDIA-INTERMEDIATE.md`
- `docs/workstreams/RIG-BEGINNER-MEDIA-INTERMEDIATE-VALIDATION.md`

Formal closeout will reconcile the durable decisions/current state into the governing files including `DECISIONS.md`, `MEDIA_GUIDE.md`, `RIG_REFERENCE_SOURCES.md`, `HANDOFF.md`, `MILESTONES.md`, and `CHANGELOG.md` after source and runtime validation passes.

# Explicit Non-Scope

- Intermediate+ Rig records
- Advanced Rig records
- Expert Rig records
- Dashboard search
- My Tackle persistent ownership implementation
- Knots implementation
- Recommendations
- generated completed-Rig or assembly-step imagery
- unrelated shared CSS or renderer redesign
- replacement of already validated recognition assets solely for stylistic uniformity

# Completion Rule

This segment remains **In Progress** until:

1. the implementation package is pushed,
2. actual GitHub `main` is re-fetched and file/package integrity is confirmed,
3. Intermediate navigation/search/detail/readiness/media pass runtime validation,
4. all tutorial candidates are tested for current lazy-load playback and fallback behavior,
5. the six new recognition assets pass phone/desktop recognition review,
6. Beginner/Beginner+ regressions pass,
7. governing and closeout documentation is updated, pushed, re-fetched, and validated under D039/D040.
