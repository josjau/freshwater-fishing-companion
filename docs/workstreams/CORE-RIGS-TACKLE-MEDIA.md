# Freshwater Fishing Companion

**Document:** CORE-RIGS-TACKLE-MEDIA.md  
**Document Revision:** 0.2.0  
**Document Status:** Approved  
**Implementation Status:** In Progress  
**Last Updated:** 2026-08-09

# Purpose

Complete the approved Core Rig foundation, finish the Beginner and Beginner+ Rig tiers, and keep the Tackle recognition-media set aligned with the approved neutral-background recognition standard in one coherent build segment.

# Decisions Implemented

- D019 — Tackle Reference Production Format
- D027 — Regional Rig Library and Core Rigs
- D042 — Core Learning Path Visual Emphasis
- D043 — Ready-to-Fish Terminal Setups in the Rig Guide
- D044 — Single-Owner Core Rig Membership
- D045 — No Generated Rig Assembly Imagery
- D046 — Rig Guide Learning-Tier Navigation

# Current Update Scope

Source changes:

- add Wacky Rig,
- add Ned Rig,
- add Weightless Soft-Plastic Rig,
- classify Slip Bobber Rig and Texas Rig as `Beginner+`,
- expose Core, Beginner, Beginner+, Intermediate, Intermediate+, Advanced, Expert, and All Rigs at the top level of the Rig Guide,
- keep only implemented groups actionable,
- remove the dedicated Core section from All Rigs,
- remove **Master These First** from current UI copy,
- keep Core membership and order owned by `CORE_RIG_IDS`,
- preserve existing readiness, Tackle-reference, search, and external-reference behavior.

Media correction:

- replace `images/tackle/bait-reference.webp` with a clearly intact, immediately recognizable worm-bait illustration,
- preserve the approved 640 × 440 warm-neutral, no-alpha, no-cast-shadow treatment.

# Source Scope

- `data/rigs.js`
- `script.js`
- `view-renderer.js`
- `forest-journal.css`
- `images/tackle/bait-reference.webp`

# Documentation Scope

- `DECISIONS.md`
- `HANDOFF.md`
- `CHANGELOG.md`
- `RIG_REFERENCE_SOURCES.md`
- `data-model/03-RIGS.md`
- this workstream
- `CORE-RIGS-TACKLE-MEDIA-VALIDATION.md`

# Rig Learning Groups

## Core Rigs

1. Fixed Bobber Rig
2. Basic Bottom Rig
3. Jighead + Soft Plastic
4. Inline Spinner Setup
5. Texas Rig
6. Slip Bobber Rig

## Beginner

1. Fixed Bobber Rig
2. Inline Spinner Setup
3. Jighead + Soft Plastic
4. Basic Bottom Rig
5. Wacky Rig
6. Ned Rig

## Beginner+

1. Slip Bobber Rig
2. Texas Rig
3. Weightless Soft-Plastic Rig

Core overlaps the difficulty tiers by design. Core is curated learning membership; difficulty is intrinsic Rig metadata.

# Rig Guide UI

Top-level cards:

1. Core Rigs
2. Beginner
3. Beginner+
4. Intermediate
5. Intermediate+
6. Advanced
7. Expert
8. All Rigs

Core, Beginner, Beginner+, and All Rigs are implemented in this package.

Intermediate, Intermediate+, Advanced, and Expert remain visible only as unavailable `Coming Soon` cards until their canonical Rig records are built.

All Rigs displays all nine implemented Rigs and does not contain a second Core section.

Core retains restrained additional Forest Journal emphasis through the primary-card treatment and Core badges on individual Rig results/details.

# Reference Scope for New Rigs

Wacky Rig:

- Take Me Fishing — Bass Fishing Rigs
- Yamamoto — Senko Rigging Options

Ned Rig:

- Z-Man — Ned Rig
- Take Me Fishing — How to Set Up a Ned Rig

Weightless Soft-Plastic Rig:

- Yamamoto — Senko Rigging Options
- Take Me Fishing — Bass Fishing Rigs

# Explicit Non-Scope

- Intermediate, Intermediate+, Advanced, and Expert Rig records
- My Tackle ownership implementation
- Knot implementation
- Generated finished-Rig or build-step imagery
- New Technique records
- ProductDefinition/commercial product catalog

# Completion Rule

This segment remains In Progress until source, media, documentation, GitHub state, and runtime/regression behavior are validated and the final closeout documentation is revalidated on GitHub.
