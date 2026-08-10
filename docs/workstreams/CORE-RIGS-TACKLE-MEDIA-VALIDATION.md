# Freshwater Fishing Companion

**Document:** CORE-RIGS-TACKLE-MEDIA-VALIDATION.md  
**Document Revision:** 0.2.0  
**Document Status:** Approved  
**Implementation Status:** In Progress  
**Last Updated:** 2026-08-09

# Purpose

Validation checklist for the Core Rigs, Beginner-tier expansion, Rig Guide navigation, and Tackle media correction.

# Preflight

Confirm before delivery:

- JavaScript syntax passes for all changed JS files.
- Exactly six unique `CORE_RIG_IDS` resolve to active Rigs.
- Exactly nine active Rig records exist.
- Exactly six Rigs have `Beginner` difficulty.
- Exactly three Rigs have `Beginner+` difficulty.
- All Rig `tackleId` values resolve to active canonical Tackle.
- Existing readiness storage key remains unchanged.
- `All Rigs` logic includes every active Rig.
- Core membership remains separate from `difficulty`.
- No **Master These First** UI string remains in changed runtime source.
- Intermediate through Expert cards are unavailable and use normal `Coming Soon` semantics.
- Worm-bait image exists at 640 × 440 WebP with no alpha channel and no cast shadow.
- Existing Markdown replacements preserve unrelated headings/content.
- ZIP contains only intended permanent repository files.

# GitHub Validation

After push, confirm all changed source, documentation, and worm-bait image files are present on `main`, with no package-only root artifacts.

# Rig Guide Landing Page

Confirm the top-level order:

1. Core Rigs
2. Beginner
3. Beginner+
4. Intermediate
5. Intermediate+
6. Advanced
7. Expert
8. All Rigs

Confirm:

- Core Rigs is visually emphasized without decorative clutter.
- Core Rigs is actionable.
- Beginner is actionable.
- Beginner+ is actionable.
- All Rigs is actionable.
- Intermediate, Intermediate+, Advanced, and Expert clearly show `Coming Soon` and are not interactive.
- **Master These First** is not displayed.

# Core Rigs

Confirm six Core Rigs appear in `CORE_RIG_IDS` order:

1. Fixed Bobber Rig
2. Basic Bottom Rig
3. Jighead + Soft Plastic
4. Inline Spinner Setup
5. Texas Rig
6. Slip Bobber Rig

Each Core result should retain a visible non-color `Core Rig` badge and open the correct detail page.

# Beginner

Confirm six Beginner Rigs:

- Fixed Bobber Rig
- Inline Spinner Setup
- Jighead + Soft Plastic
- Basic Bottom Rig
- Wacky Rig
- Ned Rig

Search inside the group must not return Beginner+ Rigs.

# Beginner+

Confirm three Beginner+ Rigs:

- Slip Bobber Rig
- Texas Rig
- Weightless Soft-Plastic Rig

Search inside the group must not return Beginner Rigs.

# All Rigs

Confirm exactly nine active Rigs display when the query is empty.

Core Rigs remain present inside All Rigs as ordinary results with Core badges; All Rigs must not contain a second dedicated Core section.

# New Rig Detail and Readiness

Validate Wacky Rig, Ned Rig, and Weightless Soft-Plastic Rig:

- detail opens,
- Best For and Good Conditions render,
- verified external references open in a new tab,
- canonical component names render,
- `Name ⓘ` opens the correct Tackle reference,
- required/optional behavior is correct,
- Ready/Missing updates correctly,
- selections persist across navigation/reload,
- build steps, setup notes, mistakes, and safety render.

Specific component expectations:

- Wacky Rig → Fishing Hook + Soft Plastic Bait.
- Ned Rig → Jighead + Soft Plastic Bait.
- Weightless Soft-Plastic Rig → Offset Worm Hook + Soft Plastic Bait; no Bullet Weight.

# Worm-Bait Media

Open Bait `ⓘ` and confirm:

- the worm is intact and immediately recognizable,
- the full object is visible,
- no missing/eaten-looking body sections appear,
- warm-neutral background matches the current Tackle library,
- no transparency fringe exists,
- no artificial cast shadow exists,
- image remains useful at phone width.

# Regression

Confirm:

- Existing six Core Rig details remain intact.
- Fish Search still works by common name, scientific name, and category.
- Related Tackle navigation and focus restoration work.
- Derived `Used In` now includes the three new Rig relationships where applicable.
- Dashboard and unavailable-card semantics remain intact.
- Normal navigation produces no console errors.
- Phone and desktop layouts remain usable.
- Keyboard focus remains visible.

# Closeout

When all checks pass, update this document, the workstream, `HANDOFF.md`, `MILESTONES.md`, and `CHANGELOG.md` to Validated; push; re-fetch GitHub; and only then begin the Intermediate Rig segment.
