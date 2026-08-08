# Freshwater Fishing Companion

**Document:** CORE-RIGS-TACKLE-MEDIA.md  
**Document Revision:** 0.1.1  
**Document Status:** Approved  
**Implementation Status:** In Progress  
**Last Updated:** 2026-08-08

# Purpose

Complete the approved six-Rig confidence-building library and replace the active Tackle recognition-media set with the approved neutral-background standard in one coherent build segment.

# Decisions Implemented

- D019 — Tackle Reference Production Format
- D027 — Regional Rig Library and Core Rigs
- D042 — Core Learning Path Visual Emphasis
- D043 — Ready-to-Fish Terminal Setups in the Rig Guide
- D044 — Single-Owner Core Rig Membership
- D045 — No Generated Rig Assembly Imagery

# Source Scope

- `data/rigs.js`
- `data/tackle.js`
- `data/media.js`
- `script.js`
- `view-renderer.js`
- `forest-journal.css`

# Media Scope

Replace the 15 active Tackle WebP assets and add:

- `jighead-reference.webp`
- `inline-spinner-reference.webp`

Final active set: 17 images.

Production treatment:

- 640 × 440 WebP
- restrained warm-neutral background
- no alpha transparency
- no artificial cast shadow
- clean mobile edges
- consistent framing and scale
- real-reference geometry for mechanically sensitive items
- approved product-reference visual style rather than simplified icon/cartoon treatment
- open-`J` hook geometry with visible eye, shank, bend, gap, point, and barb
- individual review of all 17 assets for immediate recognizability and useful scale


# Corrective Image Rebuild

The first prepared 17-image set did not sufficiently match the approved product-reference examples. Several assets were too icon-like, some objects were difficult to identify, and the hook silhouettes were too circular.

Before delivery, all 17 assets were re-evaluated and rebuilt. The corrected set uses the approved warm-neutral catalog treatment, larger and more discernible objects, and mechanically correct open-`J` geometry for the standard hook, offset worm hook, and Jighead hook.

The rejected image set is not part of the repository package.

# Core Rig Scope

Ordered registry:

1. Fixed Bobber Rig
2. Basic Bottom Rig
3. Jighead + Soft Plastic
4. Inline Spinner Setup
5. Texas Rig
6. Slip Bobber Rig

New canonical records:

- `jighead-soft-plastic`
- `inline-spinner-setup`

New canonical Tackle concepts:

- `jighead`
- `inline-spinner`

# UI Scope

- Dedicated **Core Rigs — Master These First** section on empty-query Rig browse.
- Core cards ordered by `CORE_RIG_IDS`.
- Core badges in search results.
- Core detail-page header treatment.
- Forest Journal visual continuity, keyboard focus, responsive behavior, and no color-only meaning.

# Explicit Non-Scope

- Remaining fourteen regional Rigs
- My Tackle ownership implementation
- Knot implementation
- Generated finished-Rig or build-step imagery
- New Technique records
- ProductDefinition/commercial product catalog

# Completion Rule

This segment remains In Progress until source, media, documentation, GitHub state, and runtime/regression behavior are validated and the final closeout documentation is revalidated on GitHub.
