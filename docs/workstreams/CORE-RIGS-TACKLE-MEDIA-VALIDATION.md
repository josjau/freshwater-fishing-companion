# Freshwater Fishing Companion

**Document:** CORE-RIGS-TACKLE-MEDIA-VALIDATION.md  
**Document Revision:** 0.5.0  
**Document Status:** Approved  
**Implementation Status:** Validated  
**Last Updated:** 2026-08-10

# Purpose

Validation checklist for the Core Rigs, Beginner-tier expansion, Rig Guide navigation, and Tackle media correction.

# Preflight

Confirm before delivery:

- JavaScript syntax passes for all changed JS files.
- Exactly six unique `CORE_RIG_IDS` resolve to active Rigs.
- Exactly nine active Rig records exist.
- Exactly six Rigs have `Beginner` difficulty.
- Exactly three Rigs have `Beginner+` difficulty.
- Exactly 20 active canonical Tackle records exist after finalization.
- All Rig `tackleId` values resolve to active canonical Tackle.
- Wacky Rig requires `wacky-hook` + `soft-plastic`; `wacky-o-ring` is optional.
- Ned Rig requires `ned-jighead` + `soft-plastic`.
- Weightless Soft-Plastic Rig still requires `offset-worm-hook` + `soft-plastic` and no Bullet Weight.
- Existing readiness storage key remains unchanged.
- Parent/Home view transitions do not use remembered-scroll restoration and open the destination at the top.
- No obsolete `viewScrollPositions` routing state remains.
- Main Rig Guide global search uses active canonical Rig data and shared search helpers.
- Fish Guide exposes the same standard inline landing-page search field and no longer requires a dedicated Search Fish card/page.
- Shared search fields expose an explicit one-click `Clear search` control when text is present.
- Search results use deterministic relevance ordering; a `Ned` Rig query places **Ned Rig** first.
- Subset search remains scoped.
- `All Rigs` logic includes every active Rig.
- Core membership remains separate from `difficulty`.
- No **Master These First** UI string remains in changed runtime source.
- Intermediate through Expert cards are unavailable and use normal `Coming Soon` semantics.
- Rig Guide navigation cards do not share a forced single Rig accent.
- Texas tutorial metadata resolves to Wired2Fish video ID `cIraWgiR6u0` with an external YouTube fallback.
- Tutorial iframe is created only after explicit user action and does not request autoplay.
- Worm-bait image exists at 640 × 440 WebP with no alpha channel and no cast shadow.
- Existing Markdown replacements preserve unrelated headings/content.
- The replacement-integrity gate passes for every existing Markdown replacement.
- ZIP contains only intended permanent repository files.

# GitHub Validation

After push, confirm all changed source, documentation, and worm-bait image files are present on `main`, with no package-only root artifacts.

For this finalization, the worm-bait image is a presence/regression check rather than a newly changed asset.

# Rig Guide Landing Page

Confirm the top-level order:

1. All Rigs
2. Core Rigs
3. Beginner
4. Beginner+
5. Intermediate
6. Intermediate+
7. Advanced
8. Expert

Confirm:

- a visible global search field appears on the main Rig Guide above the cards,
- an empty search shows the normal card grid,
- entering search text hides/replaces the card grid with matching Rig results,
- the explicit `×` clear control appears when text is present and restores the card grid in one click while retaining field focus,
- clearing search restores the card grid,
- global search can find Rigs without first entering a subset,
- searching `Ned` places **Ned Rig** first rather than alphabetizing weaker matches ahead of it,
- a Rig opened from main search returns to **Rig Guide** through its parent control,
- adjacent navigation cards use varied Dashboard-derived accent/left-line colors rather than one repeated Rig accent,
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

Each Core result should retain a visible non-color `Core Rig` badge and open the correct detail page. Core status remains independent of difficulty/category.

# Beginner

Confirm six Beginner Rigs:

- Fixed Bobber Rig
- Inline Spinner Setup
- Jighead + Soft Plastic
- Basic Bottom Rig
- Wacky Rig
- Ned Rig

Search inside the group must not return Beginner+ Rigs. Main Rig Guide global search may return these Beginner Rigs regardless of Core membership.

# Beginner+

Confirm three Beginner+ Rigs:

- Slip Bobber Rig
- Texas Rig
- Weightless Soft-Plastic Rig

Search inside the group must not return Beginner Rigs. Main Rig Guide global search may return these Beginner+ Rigs regardless of Core membership.

# All Rigs

Confirm exactly nine active Rigs display when the query is empty.

Core Rigs remain present inside All Rigs as ordinary results with Core badges; All Rigs must not contain a second dedicated Core section.

All Rigs remains scoped to every active implemented Rig and its search can return any of the nine active records.

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

- Wacky Rig → Wacky Hook + Soft Plastic Bait; Wacky O-Ring optional.
- Ned Rig → Ned Jighead + Soft Plastic Bait.
- Weightless Soft-Plastic Rig → Offset Worm Hook + Soft Plastic Bait; no Bullet Weight.

Additional Wacky checks:

- midpoint is pierced once rather than threaded up the hook shank,
- both worm ends hang freely,
- hook point/gap remain exposed,
- Mustad primary reference opens correctly,
- Wacky Hook and Wacky O-Ring `ⓘ` render useful text-only recognition help without a misleading generic image.

Additional Ned checks:

- small mushroom-style head/keeper relationship is clear,
- standard hook point remains exposed,
- weedless Ned heads are treated as variations,
- Z-Man Ned and Finesse ShroomZ references open correctly,
- Ned Jighead `ⓘ` renders useful text-only recognition help without a misleading generic image.

# Worm-Bait Media

Open Bait `ⓘ` and confirm:

- the worm is intact and immediately recognizable,
- the full object is visible,
- no missing/eaten-looking body sections appear,
- warm-neutral background matches the current Tackle library,
- no transparency fringe exists,
- no artificial cast shadow exists,
- image remains useful at phone width.

# Texas Rig Tutorial Trial

Confirm:

- Texas Rig shows **Rig Tutorial** in primary presentation,
- unloaded state shows title/creator, **Load tutorial**, and **Watch on YouTube ↗**,
- no YouTube iframe exists before explicit load,
- loading creates a responsive 16:9 `youtube-nocookie.com` iframe,
- playback does not autoplay,
- deployed playback does not fail with YouTube error 153,
- platform controls/branding remain unobscured,
- external fallback remains usable if embedding is unavailable.

Do not roll the embed pattern to other Rigs until this trial passes.

# Compact Rig Detail Trial

Validate at phone width first, then desktop:

- the page is materially shorter without becoming visually crowded,
- Best For and Good Conditions share one compact at-a-glance card,
- tags remain readable with no horizontal overflow,
- What You Need uses compact component rows while retaining name + `ⓘ`, Required/Optional, notes, and ownership controls,
- narrow-phone component content stacks rather than crowding long notes beside the ownership control,
- ownership controls retain practical touch targets,
- Ready/Missing remains legible and functional,
- How to Build remains easy to scan and is not over-compressed,
- Setup Notes, Common Mistakes, and Safety use lighter supporting spacing,
- Safety stays visible by default,
- no dense table or accordion-heavy interaction is introduced,
- no text requires pinch zoom.

The compact treatment passed user runtime approval for Rig detail pages. It remains Rig-specific and is not automatically promoted to non-Rig detail pages.

# Cross-App Search and Navigation Corrections

Confirm after the correction package is pushed:

- Fish Guide shows its search field directly on the landing page above the remaining Fish browse cards,
- no actionable **Search Fish** navigation card is required for primary Fish search,
- Fish search still matches common name, scientific name, and category,
- Rig Guide, Fish Guide, and scoped Rig searches show an explicit `×` clear control only while text is present,
- one click on clear empties the field, immediately restores the unfiltered/default view, and returns focus to the field,
- `Ned` ranks **Ned Rig** first in main Rig search,
- exact/prefix canonical-name matches consistently outrank lower-priority metadata-only matches,
- empty scoped Rig search preserves the intended collection browse order,
- Parent/Home controls remain available in a compact sticky surface while scrolling long subset/detail views,
- Parent returns to the parent page at the top,
- Home returns to the Dashboard at the top,
- forward navigation still opens new views at the top,
- sticky controls do not obscure page content and retain visible keyboard focus and practical touch interaction,
- no Dashboard search field is introduced by this package.

# Regression

Confirm:

- Existing six Core Rig details remain intact.
- Fish Guide landing-page search works by common name, scientific name, and category.
- Related Tackle navigation and focus restoration work.
- Derived `Used In` now includes the three new Rig relationships where applicable.
- Dashboard and unavailable-card semantics remain intact.
- Dashboard itself retains its current larger-card hierarchy; no Dashboard density change is included.
- Other section/subset card navigation retains the shared Dashboard card system.
- Normal navigation produces no console errors.
- Phone and desktop layouts remain usable.
- Keyboard focus remains visible.

# Validation Outcome

**Implementation/runtime result: Passed.**

GitHub source/package inspection passed on `main` commit `7208edfb2240e6cc2c8a7ac3b2fbf11785ef59f0`. The correction commit was exactly one commit ahead of the verified package baseline and contained only the ten intended source/governing/workstream files. GitHub blob comparison matched every delivered correction-package file byte-for-byte.

Runtime validation passed for the full Rig finalization scope, including:

- All Rigs / Core / Beginner / Beginner+ membership, ordering, and scoped/global search,
- Wacky Rig, Ned Rig, and Weightless Soft-Plastic Rig assembly/readiness behavior,
- canonical component help and derived `Used In`,
- intact worm-bait recognition media,
- Texas Rig tutorial playback in Brave,
- compact Rig detail layout at phone and desktop widths,
- Fish search by common name, scientific name, and category,
- Fish Guide inline landing-page search,
- one-click Clear search,
- `Ned` ranking **Ned Rig** first,
- sticky Parent/Home navigation while scrolling,
- Parent returning to the parent top,
- Home returning to the Dashboard top.

No Dashboard search field was introduced. The compact-detail standard remains Rig-specific.

# Closeout

This implementation/runtime checklist is complete and Validated. The final documentation set consists of this file, the workstream, `RIG-UX-RUNTIME-FOLLOWUP.md`, `HANDOFF.md`, `MILESTONES.md`, and `CHANGELOG.md`.

Push the formal closeout documentation package, re-fetch actual GitHub `main`, and confirm those six files match the validated package with no unrelated files or truncation. Only after that repository closeout verification may the Intermediate Rig segment begin under D039/D040.
