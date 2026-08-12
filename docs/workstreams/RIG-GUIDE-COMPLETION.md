# Freshwater Fishing Companion

**Document:** RIG-GUIDE-COMPLETION.md  
**Document Revision:** 0.1.0  
**Document Status:** Approved  
**Implementation Status:** In Progress  
**Last Updated:** 2026-08-11

# Purpose

Complete the approved 20-Rig regional library and finish the Rig Guide as one coordinated implementation milestone.

This milestone builds on the fully validated Beginner, Beginner+, and Intermediate foundation. The established Rig/Tackle, search, readiness, tutorial, media, navigation, responsive, and validation patterns are reused rather than redesigned.

# Starting Baseline

Validated starting state:

- 13 active Rigs,
- 6 Beginner,
- 3 Beginner+,
- 4 Intermediate,
- 6 Core Rigs in the existing curated order,
- 23 active canonical Tackle concepts,
- 23 active Tackle recognition-media records,
- Rig Guide search and scoped collection search validated,
- canonical `Rig.componentRequirements[].tackleId` relationships validated,
- readiness persistence validated,
- derived Tackle `Used In` validated,
- contextual `Name ⓘ` references validated,
- build-first lazy tutorial pattern validated,
- desktop/mobile Rig application regression validated.

The previous segment is finalized in:

- `workstreams/RIG-BEGINNER-MEDIA-INTERMEDIATE.md`
- `workstreams/RIG-BEGINNER-MEDIA-INTERMEDIATE-VALIDATION.md`

# Final 20-Rig Library

The completed regional library remains the D027-approved set:

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

These add additional component orientation, weight placement, specialized finesse hardware, or multi-lure spacing while remaining manageable after the Intermediate foundation.

## Advanced — 2

1. Jika Rig
2. Punch / Pegged Texas Rig

These require more specialized terminal topology or deliberate heavy-cover configuration and are less forgiving of setup errors.

## Expert — 1

1. Bottom-Bouncer / Spinner Rig

This is the most system-oriented remaining Rig because correct use depends on a bottom-bouncer, trailing spinner harness, leader/harness length, weight selection, and controlled trolling/drifting geometry.

# Core Rigs

`CORE_RIG_IDS` remains unchanged:

1. Fixed Bobber Rig
2. Basic Bottom Rig
3. Jighead + Soft Plastic
4. Inline Spinner Setup
5. Texas Rig
6. Slip Bobber Rig

No new Rig is added to Core in this milestone.

# Canonical Tackle Expansion

The existing 23 concepts are reused wherever they correctly answer readiness.

Six new concepts are required because the existing records do not represent these functional components accurately enough:

1. **Nail Weight** — `nail-weight`
   - inserted into a soft-plastic end for the Neko Rig.
2. **Shaky Head Jighead** — `shaky-head-jighead`
   - dedicated finesse jighead/keeper geometry used by the Shaky Head Rig.
3. **Ringed Sinker** — `ringed-sinker`
   - closed-eye/loop weight that can slide freely on the line in a Free Rig or hang independently from a ring in a Jika Rig.
4. **Split Ring** — `split-ring`
   - small metal connector ring used to build the standard Jika Rig topology.
5. **Bottom Bouncer** — `bottom-bouncer`
   - weighted wire component used to maintain controlled bottom contact while a harness trails behind it.
6. **Spinner Harness** — `spinner-harness`
   - pre-tied spinner/crawler harness treated as one readiness component for the Bottom-Bouncer / Spinner Rig.

Target canonical Tackle count after implementation: **29**.

# Rig Component Strategy

## Neko Rig

- Nail Weight — required
- Wacky Hook — required
- Soft Plastic Bait — required
- Wacky O-Ring — optional

## Shaky Head Rig

- Shaky Head Jighead — required
- Soft Plastic Bait — required

## Free Rig

- Ringed Sinker — required
- Offset Worm Hook — required
- Soft Plastic Bait — required

The Ringed Sinker eye remains free on the main line above the hook knot; the weight is not tied to the line.

## Jika Rig

- Split Ring — required
- Ringed Sinker — required
- Offset Worm Hook — required
- Soft Plastic Bait — required

The weight hangs from the split-ring connection rather than sliding on the main line.

## Punch / Pegged Texas Rig

- Weight Peg — required
- Bullet Weight — required
- Offset Worm Hook — required
- Soft Plastic Bait — required

No duplicate Punch-specific weight or hook concept is introduced.

## Double-Jig Crappie Rig

- Jighead — quantity 2, required
- Soft Plastic Bait — quantity 2, required

No duplicate double-jig-specific Tackle concept is introduced.

## Bottom-Bouncer / Spinner Rig

- Bottom Bouncer — required
- Spinner Harness — required
- Bait — required when a baited crawler/minnow harness is used

The standard learning configuration treats the bouncer and harness as distinct functional components rather than decomposing every bead, blade, clevis, hook, and wire segment into separate readiness requirements.

# Recognition Media Scope

D053 requires newly introduced canonical Tackle concepts to receive recognition help in the same completed tier build.

New production assets required:

- `images/tackle/nail-weight-reference.webp`
- `images/tackle/shaky-head-jighead-reference.webp`
- `images/tackle/ringed-sinker-reference.webp`
- `images/tackle/split-ring-reference.webp`
- `images/tackle/bottom-bouncer-reference.webp`
- `images/tackle/spinner-harness-reference.webp`

All must follow the current `MEDIA_GUIDE.md` gate:

- real-photo-first when technically correct and legally reusable,
- otherwise original semi-photorealistic catalog reference anchored to verified geometry,
- 640 × 440 RGB WebP,
- exact `#f4f0e8` canvas,
- no alpha in the final production file,
- no artificial cast shadow,
- mobile recognition check,
- mechanically sensitive geometry independently checked.

# Tutorial / Reference Scope

Every new Rig receives a tutorial-source audit under D053.

A tutorial is embedded only when its exact public source, metadata, technical correctness, and build-first suitability are independently verified. A weak, technique-dominant, unavailable, or unverifiable tutorial is not inserted merely for coverage.

If no suitable embed is verified, the Rig ships with authoritative text assembly plus the next trustworthy D049 external reference fallback.

# Application Changes

`script.js` will:

- activate Intermediate+, Advanced, and Expert cards,
- add collection definitions for those three tiers,
- map their card IDs to collection keys,
- filter each collection by its canonical `difficulty`,
- preserve All Rigs, Core, Beginner, Beginner+, and Intermediate behavior,
- preserve Core membership/order exactly.

No renderer or CSS redesign is planned because the current collection/detail/search/readiness components already support the completed library.

# Source Scope

Planned production source/data files:

- `data/rigs.js`
- `data/tackle.js`
- `data/media.js`
- `script.js`
- six new `images/tackle/*.webp` assets

Governing/current-state documentation will be reconciled throughout implementation and closeout.

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

The Rig Guide is complete when:

- exactly 20 active Rigs exist,
- final tier counts are 6 / 3 / 4 / 4 / 2 / 1,
- all seven new Rig definitions are technically validated,
- exactly 29 active canonical Tackle concepts exist,
- every new Tackle ID resolves from its Rig requirements,
- all six new recognition-media records/assets pass the production media gate,
- Intermediate+, Advanced, and Expert collection cards are actionable,
- All Rigs contains 20 records,
- Core remains the same six records/order,
- search/readiness/references/derived `Used In` remain functional,
- every new Rig has a validated build-first tutorial or verified D049 fallback,
- desktop/mobile regression passes,
- governing/current-state documentation is reconciled and re-fetched from GitHub.
