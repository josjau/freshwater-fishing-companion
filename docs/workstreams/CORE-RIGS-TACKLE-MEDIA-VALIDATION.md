# Freshwater Fishing Companion

**Document:** CORE-RIGS-TACKLE-MEDIA-VALIDATION.md  
**Document Revision:** 0.1.1  
**Document Status:** Approved  
**Implementation Status:** In Progress  
**Last Updated:** 2026-08-08

# Purpose

Validation checklist for the Core Rigs and Tackle Media segment.

# Preflight

Confirm before delivery:

- JavaScript syntax passes for all changed JS files.
- Exactly six unique `CORE_RIG_IDS` resolve to active Rigs.
- Exactly six active Core Rig records are presented in registry order.
- All Rig `tackleId` values resolve to active canonical Tackle.
- All active Tackle `mediaIds` resolve to active media.
- Final counts are 6 active Rigs, 17 active Tackle records, and 17 active Tackle media records.
- All 17 WebP files exist, are 640 × 440, have no alpha channel, and remain under the approved size ceiling.
- A complete contact-sheet review confirms that every item is discernible without relying on its label.
- Standard Hook, Offset Worm Hook, and Jighead Hook retain open-`J` geometry rather than a circular/closed silhouette.
- Small accessories such as Bobber Stop, Bobber Stop Bead, and Weight Peg are shown in identifiable use/configuration forms.
- Existing Markdown replacements pass the replacement-integrity gate.
- ZIP contains only intended permanent repository files.

# GitHub Validation

After push, confirm all source, documentation, and 17 image files are present on `main`, with no package-only root artifacts.

# Core Browse

At empty query:

- **Core Rigs — Master These First** is visible.
- All six Core cards appear in approved order.
- Each card has non-color Core/Start Here labeling.
- Each card opens the correct Rig detail.
- No duplicate Core card appears in the ordinary result area.

With search text:

- Core section hides.
- Matching Rigs render through normal results.
- Core results retain their Core badge.
- No-match behavior remains correct.

# Rig Detail and Readiness

Validate all six Rigs:

- detail page opens,
- Core badge/header displays,
- Best For and Good Conditions render,
- verified external references open in a new tab,
- canonical component names render,
- `Name ⓘ` opens the correct reference,
- required/optional behavior is correct,
- Ready/Missing updates correctly,
- selections persist across navigation/reload,
- build steps, setup notes, mistakes, and safety render.

New Rig specifics:

- Jighead + Soft Plastic requires Jighead and Soft Plastic Bait.
- Inline Spinner Setup requires Inline Spinner only.

# Tackle Media

Open all 17 contextual references and confirm:

- image loads,
- neutral background fills cleanly,
- no transparency fringe,
- no artificial cast shadow,
- object is recognizable at phone width without relying on the caption,
- geometry and visual treatment match the approved product-reference examples,
- standard, offset, and Jighead hooks show a clear open gap and identifiable eye, shank, bend, point, and barb,
- alt text and caption match the concept,
- related Tackle and derived `Used In` remain correct.

# Regression

Confirm:

- Fish Search still works by common name, scientific name, and category.
- Existing four Rig details remain unchanged except approved Core emphasis/media.
- Related Tackle navigation and focus restoration work.
- Dashboard and unavailable-card semantics remain intact.
- Normal navigation produces no console errors.
- Phone and desktop layouts remain usable.
- Keyboard focus is visible and Core status is not conveyed by color alone.

# Closeout

When all checks pass, update this document, the workstream, `HANDOFF.md`, `MILESTONES.md`, and `CHANGELOG.md` to Validated; push; re-fetch GitHub; and only then begin another segment.
