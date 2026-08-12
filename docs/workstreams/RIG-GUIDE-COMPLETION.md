# Freshwater Fishing Companion

**Document:** RIG-GUIDE-COMPLETION.md  
**Document Revision:** 0.2.0  
**Document Status:** Approved  
**Implementation Status:** In Progress — Functional Source/Data Implemented; Recognition Media + Runtime Validation Pending  
**Last Updated:** 2026-08-11

# Purpose

Complete the approved 20-Rig regional library and finish the Rig Guide as one coordinated implementation milestone.

This milestone builds on the fully validated Beginner, Beginner+, and Intermediate foundation. The established Rig/Tackle, search, readiness, tutorial, media, navigation, responsive, and validation patterns are reused rather than redesigned.

# Starting Baseline

The finalized starting state contained:

- 13 active Rigs,
- 6 Beginner,
- 3 Beginner+,
- 4 Intermediate,
- 6 Core Rigs in the existing curated order,
- 23 active canonical Tackle concepts,
- 23 active Tackle recognition-media records,
- validated Rig Guide search and scoped collection search,
- validated canonical `Rig.componentRequirements[].tackleId` relationships,
- validated readiness persistence,
- validated derived Tackle `Used In`,
- validated contextual `Name ⓘ` references,
- validated build-first lazy tutorial pattern,
- validated desktop/mobile Rig application behavior.

The previous segment is finalized in:

- `workstreams/RIG-BEGINNER-MEDIA-INTERMEDIATE.md`
- `workstreams/RIG-BEGINNER-MEDIA-INTERMEDIATE-VALIDATION.md`

# Current Implementation State

Functional source/data implementation is present on GitHub `main`.

Implementation commits:

- `b0292798bd628fe80ba3297a94454efd6c1ff364` — activate remaining Rig Guide tiers in `script.js`
- `e8326c030c68dc3b962ca0410301ed2aee5fb20d` — add six canonical Tackle concepts in `data/tackle.js`
- `c0216dffbe48e9f6094ef8c312ee9c962f1fc96e` — add the seven remaining Rig records in `data/rigs.js`

GitHub compare checks confirm the source edits are targeted:

- `script.js`: 31 additions / 4 deletions,
- `data/tackle.js`: 91 additions / 1 deletion,
- `data/rigs.js`: 546 additions / 1 deletion.

The single deletion in `data/tackle.js` and `data/rigs.js` is the build-info milestone label change from the previous segment to `Rig Guide Completion`; the remaining changes are additive implementation for this milestone.

No renderer, CSS, HTML, Fish data, Core membership, readiness storage key, or unrelated application route was changed.

# Final 20-Rig Library

The canonical regional library is now implemented as the D027-approved set:

1. Fixed Bobber Rig
2. Basic Bottom Rig
3. Jighead + Soft Plastic
4. Slip Bobber Rig
5. Inline Spinner Setup
6. Texas Rig
7. Weightless Soft-Plastic Rig
8. Wacky Rig
9. Ned Rig
10. Drop Shot Rig
11. Carolina Rig
12. Live-Bait Slip-Sinker Rig
13. Three-Way Rig
14. Neko Rig
15. Shaky Head Rig
16. Free Rig
17. Jika Rig
18. Punch / Pegged Texas Rig
19. Double-Jig Crappie Rig
20. Bottom-Bouncer / Spinner Rig

# Final Learning-Tier Membership

## Beginner — 6

Unchanged.

## Beginner+ — 3

Unchanged.

## Intermediate — 4

Unchanged under D054.

## Intermediate+ — 4

1. Neko Rig
2. Shaky Head Rig
3. Free Rig
4. Double-Jig Crappie Rig

These add component orientation, weight placement, specialized finesse hardware, or multi-lure spacing while remaining manageable after the Intermediate foundation.

## Advanced — 2

1. Jika Rig
2. Punch / Pegged Texas Rig

These require specialized terminal topology or deliberate heavy-cover configuration and are less forgiving of setup errors.

## Expert — 1

1. Bottom-Bouncer / Spinner Rig

This is the most system-oriented Rig in the initial library because correct setup depends on the bottom-bouncer connection, trailing spinner harness, bait/harness geometry, weight selection, and controlled trolling/drifting relationship.

# Core Rigs

`CORE_RIG_IDS` remains unchanged:

1. Fixed Bobber Rig
2. Basic Bottom Rig
3. Jighead + Soft Plastic
4. Inline Spinner Setup
5. Texas Rig
6. Slip Bobber Rig

No new Rig is added to Core in this milestone.

# New Canonical Tackle

The existing 23 concepts are reused wherever they correctly answer readiness. Six new concepts are implemented, bringing the functional canonical target to 29:

1. **Nail Weight** — `nail-weight`
2. **Shaky Head Jighead** — `shaky-head-jighead`
3. **Ringed Sinker** — `ringed-sinker`
4. **Split Ring** — `split-ring`
5. **Bottom Bouncer** — `bottom-bouncer`
6. **Spinner Harness** — `spinner-harness`

These concepts currently have `mediaIds: []` deliberately. Recognition-media IDs will be added only when the corresponding reviewed production assets and `data/media.js` records are ready, avoiding broken or dangling media references during the in-progress build.

# New Rig Component Relationships

## Neko Rig

- Nail Weight — required
- Wacky Hook — required
- Soft Plastic Bait — required
- Wacky O-Ring — optional

The weighted nose points down; the hook point faces toward the unweighted tail.

## Shaky Head Rig

- Shaky Head Jighead — required
- Soft Plastic Bait — required

The bait nose is secured to the head/keeper and the body remains straight on the hook.

## Free Rig

- Ringed Sinker — required
- Offset Worm Hook — required
- Soft Plastic Bait — required

The main line passes freely through the sinker's external eye. The weight is neither tied nor pegged.

## Double-Jig Crappie Rig

- Jighead — quantity 2, required
- Soft Plastic Bait — quantity 2, required

The standard learning setup places the second jig on a short upper loop roughly 12–18 inches above the terminal jig.

## Jika Rig

- Split Ring — required
- Ringed Sinker — required
- Offset Worm Hook — required
- Soft Plastic Bait — required

The hook and weight share a compact ring junction. The weight hangs below the hook and does not slide on the main line.

## Punch / Pegged Texas Rig

- Weight Peg — required
- Bullet Weight — required
- Offset Worm Hook — required
- Soft Plastic Bait — required

The peg is intentionally required because keeping the heavy-cover weight tight to the bait is the defining configuration.

## Bottom-Bouncer / Spinner Rig

- Bottom Bouncer — required
- Spinner Harness — required
- Bait — required

The standard learning configuration treats the bouncer and harness as distinct readiness components rather than decomposing every blade, bead, clevis, hook, swivel, and leader segment into separate canonical requirements.

# References / Tutorial Policy

Every new Rig includes authoritative text assembly and verified external references.

No new `tutorialVideo` record was added merely for coverage. The tutorial audit did not yet establish exact public video metadata and build-first suitability strongly enough for all seven records to justify embeds. Under D049/D053, verified external references are therefore the current fallback while text assembly remains authoritative.

Current primary references include:

- Wired2Fish / Z-Man for Neko and Shaky Head,
- Bassmaster / Outdoor Life for Free Rig,
- FishUSA / Missouri Department of Conservation for Double-Jig Crappie,
- Bass Pro Shops / BassResource for Jika,
- Wired2Fish for Punch / Pegged Texas,
- FishUSA / Northland Fishing Tackle for Bottom-Bouncer / Spinner.

Tutorial embeds may be added later only when an exact source passes the established build-first selection and runtime rules.

# Recognition Media — Remaining Production Work

D053 requires recognition help for the six newly introduced Tackle concepts before this milestone can be finalized.

Required production assets:

- `images/tackle/nail-weight-reference.webp`
- `images/tackle/shaky-head-jighead-reference.webp`
- `images/tackle/ringed-sinker-reference.webp`
- `images/tackle/split-ring-reference.webp`
- `images/tackle/bottom-bouncer-reference.webp`
- `images/tackle/spinner-harness-reference.webp`

Each asset must pass the current `MEDIA_GUIDE.md` gate:

- accurate real-world geometry,
- real-photo-first when technically correct and legally reusable,
- otherwise original semi-photorealistic catalog treatment,
- 640 × 440 RGB WebP,
- exact `#f4f0e8` canvas,
- no final alpha,
- no artificial cast shadow,
- clear recognition at contextual-popover mobile size,
- current approved production library used as the visual baseline.

No third-party product photograph will be copied into the repository without verified redistribution/modification rights.

# Application Changes

`script.js` now:

- activates Intermediate+, Advanced, and Expert,
- defines all three collection records,
- maps all three card IDs to their collections,
- filters all three collections by canonical `difficulty`,
- preserves All Rigs, Core, Beginner, Beginner+, and Intermediate behavior,
- preserves Core membership/order exactly.

No renderer or CSS redesign was required because the existing collection/detail/search/readiness components already support the completed library.

# Source Scope

Implemented:

- `data/rigs.js`
- `data/tackle.js`
- `script.js`

Still required:

- `data/media.js`
- six new `images/tackle/*.webp` assets
- validation/current-state documentation as the remaining media and runtime work is completed

# Explicit Non-Scope

- My Tackle persistent inventory
- Recommendations
- Knots implementation
- Technique implementation
- Dashboard search
- Fish feature expansion
- Core membership changes
- Rig-detail redesign
- generated completed-Rig/build-step imagery

# Completion Target

The Rig Guide will be complete when:

- exactly 20 active Rigs are confirmed at runtime,
- final tier counts are confirmed as 6 / 3 / 4 / 4 / 2 / 1,
- all seven new Rig definitions pass technical/runtime validation,
- exactly 29 active canonical Tackle concepts are confirmed,
- every new Tackle ID resolves from its Rig requirements,
- all six new recognition-media records/assets pass the production media gate,
- Intermediate+, Advanced, and Expert collection cards are actionable,
- All Rigs contains 20 records,
- Core remains the same six records/order,
- search/readiness/references/derived `Used In` remain functional,
- every new Rig retains authoritative text plus a validated build-first tutorial or verified D049 fallback,
- desktop/mobile regression passes,
- governing/current-state documentation is reconciled and re-fetched from GitHub.
