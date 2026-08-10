# Freshwater Fishing Companion

**Document:** CORE-RIGS-TACKLE-MEDIA.md  
**Document Revision:** 0.3.0  
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
- D047 — Section and Subset Search Availability
- D048 — Dashboard-Derived Section Card Design
- D049 — Verified Rig Tutorial Embed Policy

# Current Update Scope

The source/media bullets immediately below describe the learning-tier baseline already established on current `main` at `07e8f712ef507349a273ca21610145612e941bf5`. The finalization additions in this same active segment follow afterward.

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

Finalization additions:

- move **All Rigs** to the first Rig Guide card,
- add global Rig search to the main Rig Guide page while retaining scoped subset search,
- restore Dashboard-derived varied accents/left-edge lines on Rig Guide navigation cards,
- keep Core as a cross-cutting curated designation separate from difficulty/category,
- correct Wacky Rig to use Wacky Hook + Soft Plastic Bait with optional Wacky O-Ring and one-time midpoint piercing,
- correct Ned Rig to use a dedicated small mushroom-style Ned Jighead + compact Soft Plastic Bait with the standard hook point exposed,
- expand canonical Tackle from 17 to 20 concepts without assigning misleading generic media to the three new narrowed concepts,
- add the first lazy-loaded official-platform tutorial trial on Texas Rig using Wired2Fish/YouTube privacy-enhanced embedding plus external fallback,
- trial a more compact mobile-first Rig detail layout, especially `What You Need`, without shrinking practical touch targets or hiding build/safety content.

Media correction:

- replace `images/tackle/bait-reference.webp` with a clearly intact, immediately recognizable worm-bait illustration,
- preserve the approved 640 × 440 warm-neutral, no-alpha, no-cast-shadow treatment.

# Source Scope

- `data/rigs.js`
- `data/tackle.js`
- `script.js`
- `view-renderer.js`
- `forest-journal.css`
- `images/tackle/bait-reference.webp`

# Documentation Scope

- `ARCHITECTURE.md`
- `DECISIONS.md`
- `STYLE_GUIDE.md`
- `MEDIA_GUIDE.md`
- `HANDOFF.md`
- `CHANGELOG.md`
- `MILESTONES.md`
- `RIG_REFERENCE_SOURCES.md`
- `data-model/03-RIGS.md`
- `data-model/05-TACKLE.md`
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

1. All Rigs
2. Core Rigs
3. Beginner
4. Beginner+
5. Intermediate
6. Intermediate+
7. Advanced
8. Expert

Core, Beginner, Beginner+, and All Rigs are implemented on current `main`.

Intermediate, Intermediate+, Advanced, and Expert remain visible only as unavailable `Coming Soon` cards until their canonical Rig records are built.

All Rigs displays all nine implemented Rigs and does not contain a second Core section.

Core retains restrained additional Forest Journal emphasis through the primary-card treatment and Core badges on individual Rig results/details.

The main Rig Guide additionally gains global search across all active Rigs. Implemented subset pages retain scoped search. Navigation cards follow the shared Dashboard-derived varied accent/left-line grammar rather than one repeated Rig accent.

# Reference Scope for New Rigs

Wacky Rig:

- Take Me Fishing — Bass Fishing Rigs
- Yamamoto — Senko Rigging Options
- Mustad — Weedless TitanX Wacky / Neko / Dropshot Hook (primary finalization geometry/O-ring reference)

Ned Rig:

- Z-Man — Ned Rig
- Take Me Fishing — How to Set Up a Ned Rig
- Z-Man — Finesse ShroomZ (primary finalization mushroom-head/keeper reference)

Weightless Soft-Plastic Rig:

- Yamamoto — Senko Rigging Options
- Take Me Fishing — Bass Fishing Rigs

Texas Rig tutorial trial:

- Wired2Fish — How to Rig the Texas Rig (YouTube video ID `cIraWgiR6u0`)
- official privacy-enhanced `youtube-nocookie.com` embed loaded only on explicit user request
- normal external `Watch on YouTube ↗` fallback remains available

# Explicit Non-Scope

- Intermediate, Intermediate+, Advanced, and Expert Rig records
- My Tackle ownership implementation
- Knot implementation
- Generated finished-Rig or build-step imagery
- New Technique records
- ProductDefinition/commercial product catalog
- tutorial rollout beyond Texas before the trial is validated
- dedicated images for Wacky Hook, Wacky O-Ring, or Ned Jighead until accurate media is produced and validated
- promotion of the compact Rig-detail trial to a permanent cross-domain standard before user runtime approval
- Dashboard density reduction; current larger Dashboard cards remain unchanged in this segment

# Completion Rule

This segment remains In Progress until source, media, documentation, GitHub state, and runtime/regression behavior are validated and the final closeout documentation is revalidated on GitHub.
