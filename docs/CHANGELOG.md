# Freshwater Fishing Companion

**Document:** CHANGELOG.md  
**Document Revision:** 1.13.2  
**Document Status:** Approved  
**Last Updated:** 2026-08-13

# Unreleased

## Knots — Production Packages 1 and 2

**Implementation Status: In Progress / Package 2 Implemented / Unvalidated**

### Added / Changed

- Added and validated Production Package 1 with 10 active canonical Knots, four approved Core Knot IDs, 6 Beginner / 4 Intermediate difficulty distribution, and all 20 active Rigs audited for 31 real tied `knotApplications` connections.
- Added Production Package 2 Knot task guidance, deterministic Knot search, Knot browse/detail routes, text-based Knot instruction pages, and verified-reference placement inside **How to Tie It**.
- Added derived **Where You'll Use It** Rig relationships and context-preserving Rig ↔ Knot navigation without storing reverse Knot-to-Rig IDs.
- Runtime Revision 2 corrected long Rig relationship lists with **See all N rigs** / **Show fewer** and changed the Knot landing to Rig-style collection cards.
- Runtime Revision 3 restored the established varied navigation-card accent bars and added the approved Core Knots priority treatment.
- Added the canonical cross-domain `NAVIGATION-PAGE-STANDARD.md`: navigation pages use the Rig Guide baseline with Search first, optional special navigation second, and collection/category cards afterward.
- Runtime Revision 4 removes section-level accent/priority framing from **What are you trying to do?**, applies Important Card treatment to **Attach Line to a Reel** and **Tie On a Hook, Swivel, or Lure**, keeps the other two task cards normal, preserves varied accent bars and Core Knots emphasis, and reduces collapsed **Where You'll Use It** Rig relationships from four visible items to two.
- Runtime Revision 5 adds collapse-context restoration so **Show fewer** returns the viewport to **Where You'll Use It** after a long Rig list contracts, while preserving disclosure-control focus and reduced-motion preferences.
- Runtime Revision 5 removes automatic search-field focus on view render application-wide. Search fields now receive focus only through deliberate user interaction, preventing navigation from automatically opening mobile software keyboards.

### Validation Status

- Production Package 1 repository/static/runtime validation: passed.
- Production Package 2 Revision 4 GitHub blob integrity: passed.
- Production Package 2 Revision 4 Microsoft Edge functional/regression blocks: passed; two UX remediation items were identified during review and promoted to Revision 5 before package closeout.
- Production Package 2 Revision 5 local static preflight: passed.
- Production Package 2 Revision 5 GitHub blob verification and targeted Edge remediation validation: **pending post-push**.
- Production Package 2 Microsoft Edge runtime validation: **not complete**.
- Production Package 3 (**Get Your Reel Ready**) and Package 4 (static Knot SVG/media integration): not started.

See `workstreams/KNOT-PRODUCTION-PACKAGE-2.md`, `workstreams/KNOT-LANDING-PAGE-APPROVAL.md`, `NAVIGATION-PAGE-STANDARD.md`, `MILESTONES.md`, and `HANDOFF.md`.


## Complete Rig Guide

**Implementation Status: Validated / Finalized**

### Added / Changed

- Completed the approved 20-Rig regional library across all six learning tiers.
- Final active Rig counts are 6 Beginner / 3 Beginner+ / 4 Intermediate / 4 Intermediate+ / 2 Advanced / 1 Expert.
- Core remains the approved six-member cross-cutting registry in the established order.
- Canonical Tackle and Tackle recognition-media registries are now 29 active records each.
- Added the final seven Rigs: Neko Rig, Shaky Head Rig, Free Rig, Double-Jig Crappie Rig, Jika Rig, Punch / Pegged Texas Rig, and Bottom-Bouncer / Spinner Rig.
- Added six final canonical Tackle concepts: Nail Weight, Shaky Head Jighead, Ringed Sinker, Split Ring, Bottom Bouncer, and Spinner Harness.
- Replaced the six initially rejected flat/vector final-tier recognition assets with user-approved production images.
- Added and validated seven final-tier build-first YouTube tutorials:
  - Neko Rig — Wired2Fish — `yxGJLTxa_B0`
  - Shaky Head Rig — Bass Utopia — `zwcZSE3DVAU`
  - Free Rig — Fishin With GRAMPS — `_SyrQJ1i0RA`
  - Double-Jig Crappie Rig — Kansas Angling Experience — `7EVa28J9y-Y`
  - Jika Rig — Mike Iaconelli Fishing — `uSmbuf-q2xg`
  - Punch / Pegged Texas Rig — Wired2Fish — `HzIMkN_xTtM`
  - Bottom-Bouncer / Spinner Rig — Fishing 411 TV — `xRXzhffsHGM`
- Final production correction commit: `4375ca3e05cfbfef6ab0a3e4662c2afd19b86f42` (`Rig Updates Images and tutorials`).
- GitHub Pages deployed the final production correction successfully.

### Validation Status

- GitHub source/blob verification: passed.
- Deployed-artifact Rig/Tackle/media counts and relationships: passed.
- All Rigs = 20: passed.
- Tier counts 6 / 3 / 4 / 4 / 2 / 1: passed.
- Core six/order: passed.
- All seven final-tier Rig detail pages: passed.
- All six final-tier Tackle `Name ⓘ` recognition panels/images: passed.
- All seven final-tier YouTube embeds and external fallbacks: passed in Microsoft Edge.
- No-autoplay behavior: passed.
- Representative readiness persistence: passed.
- Desktop Edge layout/horizontal-overflow check: passed.
- Desktop normal-navigation console health: passed.
- Mobile-width Edge device emulation at approximately 375 px, including dense Rig content, recognition image, tutorial player, Parent/Home navigation, and horizontal-overflow check: passed.
- Segment is **Validated / Finalized**.

See `workstreams/RIG-GUIDE-COMPLETION.md`, `MEDIA_GUIDE.md`, `RIG_REFERENCE_SOURCES.md`, `MILESTONES.md`, and `HANDOFF.md`.

## Beginner/Beginner+ Media Completion + Intermediate Rig Expansion

**Implementation Status: Validated / Finalized**

### Added / Changed

- Added and validated the complete four-Rig Intermediate tier: Drop Shot Rig, Carolina Rig, Live-Bait Slip-Sinker Rig, and Three-Way Rig.
- Active Rig library is now 13 records: 6 Beginner, 3 Beginner+, and 4 Intermediate.
- Canonical Tackle and Tackle recognition-media registries are now 23 active records each.
- Completed the Rig tutorial audit under the build-first standard and implemented final tutorial replacements:
  - Slip Bobber — Sportsman's Journal TV `0V-gaboIlD0`
  - Wacky Rig — Kevin VanDam `EbHzUCM4o7Y`
  - Ned Rig — Mystery Tackle Box `COFdRET28cY`
  - Weightless Soft-Plastic — Reaction Tackle `EFORJFsycJQ`
  - Carolina Rig — ShakespeareFishingUS `iYngOOMQCC0`
  - Live-Bait Slip-Sinker — Castaway Fishing Kits `IbV0yG3sRms`
- Retained validated tutorials for Fixed Bobber, Basic Bottom, Jighead + Soft Plastic, Texas Rig, Drop Shot, and Three-Way Rig.
- Inline Spinner remains intentionally without an embedded tutorial; Mepps is retained as the validated instructional fallback and Panther Martin was removed because the destination was more marketing-oriented than instructional.
- Corrected Bobber Stop alt text so the metadata matches the approved rubber/silicone stop image.
- Finalized the corrected Tackle recognition-media library using the permanent exact 640 × 440 `#f4f0e8` production canvas and current catalog/semi-photorealistic visual standard.
- Added D053 — Rig Media Completeness and Tutorial Audit.
- Added D054 — Intermediate Rig Tier Membership.
- `MEDIA_GUIDE.md` now codifies the permanent build-first tutorial-selection standard: assembly/configuration is primary, concise/direct sources are preferred when technically complete, technique content is secondary, and no arbitrary hard duration threshold is imposed.
- `RIG_REFERENCE_SOURCES.md` now records the final validated tutorial/fallback sources for all 13 active Rigs.
- `DEVELOPMENT_WORKFLOW.md` continues to permit direct Markdown documentation updates while requiring explicit user approval before assistant direct-write of images, JavaScript, CSS, HTML, application data, configuration, or other non-Markdown production files.

### Validation Status

- Canonical Rig/Tackle/media counts and relationships: passed.
- Intermediate membership, routing, search, detail, readiness, reverse `Used In`, and navigation: passed.
- Recognition-media package/GitHub verification and desktop/mobile contextual-popover validation: passed.
- Retained tutorial runtime regression: passed.
- All six changed tutorial embeds: passed final runtime closeout.
- Inline Spinner Mepps-only fallback: passed.
- Bobber Stop corrected metadata and contextual reference: passed.
- Beginner/Beginner+/Core, Fish Guide/search, Dashboard, desktop navigation/console/focus/layout, and mobile responsive regressions: passed.
- Segment is **Validated / Finalized**.

See `workstreams/RIG-BEGINNER-MEDIA-INTERMEDIATE.md`, `workstreams/RIG-BEGINNER-MEDIA-INTERMEDIATE-VALIDATION.md`, `MEDIA_GUIDE.md`, `RIG_REFERENCE_SOURCES.md`, and `HANDOFF.md`.

## Core Rigs and Tackle Media / Rig Learning Tiers

**Implementation Status: Validated**

### Added

- Global Rig search directly on the main Rig Guide landing page while retaining scoped subset search.
- Fish Guide inline landing-page search using the same shared search interaction instead of a dedicated Search Fish card as the primary workflow.
- Explicit one-click `×` / `Clear search` control for shared main-section and scoped search fields.
- Lightweight deterministic relevance ranking so strong canonical-name matches lead weaker metadata matches.
- Compact sticky Parent/Home navigation on nested views.
- D047 — Section and Subset Search Availability.
- D048 — Dashboard-Derived Section Card Design.
- D049 — Verified Rig Tutorial Embed Policy.
- D050 — Standard Search Field and Clear Control.
- D051 — Persistent Parent Navigation and Top-Reset View Transitions.
- D052 — Rig Detail Compact Density.
- Canonical Wacky Hook, Wacky O-Ring, and Ned Jighead Tackle concepts.
- Texas Rig lazy-loaded Wired2Fish YouTube tutorial pilot using privacy-enhanced embedding and an external fallback.
- Compact mobile-first Rig-detail treatment, now approved for Rigs.

### Changed

- Rig Guide card order is All Rigs, Core Rigs, Beginner, Beginner+, Intermediate, Intermediate+, Advanced, Expert.
- Removed the Rig Guide CSS override that forced every navigation card to the same Rig accent; section navigation follows the Dashboard-derived varied accent/left-line system.
- Core remains visually emphasized but is explicitly cross-cutting rather than tied to Beginner difficulty.
- Wacky Rig uses a dedicated Wacky Hook, optional Wacky O-Ring, one-time midpoint piercing, freely hanging worm ends, and an exposed hook point/gap.
- Ned Rig uses a dedicated small mushroom-style Ned Jighead and explicitly preserves the exposed-hook standard beginner configuration.
- Canonical Tackle expands from 17 to 20 active concepts; the three narrowed concepts remain text-recognition-only until dedicated accurate media is approved.
- Texas Rig primary visual/reference experience uses the embedded tutorial pilot rather than broad article links as the primary visual path.
- Rig detail cards and What You Need use the approved compact Rig-specific treatment while retaining readable text and practical touch targets.
- Search results no longer alphabetize all substring matches; exact/prefix/name confidence outranks lower-priority metadata, with stable ordering as the tie-break.
- Parent/Home controls stay available while scrolling, and forward/Parent/Home transitions open the destination at the top rather than restoring remembered parent scroll position.

### Preserved

- Nine active Rig records: six Beginner and three Beginner+.
- Six-member `CORE_RIG_IDS` single-owner registry and current Core teaching order.
- All Rigs complete-library behavior and Core badges.
- Existing readiness persistence key and buildability behavior.
- Existing 17-image neutral-background Tackle recognition-media set.
- Text-authoritative Rig assembly and prohibition on generated Rig assembly imagery.
- Dashboard larger-card treatment; Dashboard density review remains parked.
- Dashboard search remains unimplemented pending deliberate cross-domain scope/grouping/result design.

### Validation Status

- Source/package integrity on actual GitHub `main` commit `7208edfb2240e6cc2c8a7ac3b2fbf11785ef59f0`: passed.
- Rig Guide All-Rigs-first ordering, Core emphasis, subset membership/search scope, and card-grid restoration: passed.
- Wacky, Ned, and Weightless Soft-Plastic component/readiness behavior: passed.
- Intact worm-bait recognition media: passed.
- Texas Rig tutorial playback in Brave: passed; earlier Edge `ERR_BLOCKED_BY_CLIENT` messages remain classified as blocker/ad-request noise rather than a reproduced application playback defect.
- Compact Rig-detail presentation at about 375 px and desktop widths: passed and approved for Rigs.
- Fish search by common name, scientific name, and category: passed.
- Derived Tackle `Used In` relationships: passed.
- Fish Guide inline search: passed.
- One-click Clear search: passed.
- `Ned` ranking **Ned Rig** first: passed.
- Sticky Parent/Home controls: passed.
- Parent navigation returning to parent top: passed.
- Home navigation returning to Dashboard top: passed.

The implementation/runtime segment is validated. The formal closeout documentation package must still be pushed and re-fetched before the repository is declared finalized and Intermediate work begins under D039/D040.

See `workstreams/CORE-RIGS-TACKLE-MEDIA.md`, `workstreams/CORE-RIGS-TACKLE-MEDIA-VALIDATION.md`, and `workstreams/RIG-UX-RUNTIME-FOLLOWUP.md`.

## Rig/Tackle Data Integrity — Batch 1

**Implementation Status: Validated**

### Changed

- Rig component requirements now reference canonical Tackle explicitly through `tackleId`.
- Removed duplicated Rig-side component display names.
- Removed manually maintained Tackle `rigIds`.
- Tackle `Used In` is derived from active Rig component requirements.
- Rig component and readiness missing-item labels resolve canonical Tackle names.
- `script.js` uses `tackleId` consistently at the readiness callback boundary.
- Existing readiness storage remains compatible because stored keys already use canonical Tackle ID strings.

### Documentation Integrity

- Corrected an initial documentation replacement that over-condensed `ARCHITECTURE.md`, `03-RIGS.md`, and `09-RELATIONSHIPS.md`.
- Restored those documents from their exact pre-change GitHub baselines and reapplied only authorized changes.
- Added `tools/validate_replacement_integrity.py` and a permanent workflow gate to detect suspicious documentation truncation before future delivery.

### Validation

- GitHub source/data-model inspection: passed.
- Documentation correction/revalidation: passed.
- All four current Rig detail/readiness flows: passed.
- Canonical component-name rendering: passed.
- Tackle `Name ⓘ` references: passed.
- Required/optional readiness behavior: passed.
- Readiness persistence: passed.
- Derived `Used In` relationships: passed.
- Fish Search regression: passed.
- Rig browse/search regression: passed.
- External Rig references: passed.
- Related Tackle navigation: passed.
- Normal-navigation console health: passed.
- Phone and desktop layout checks: passed.

See `workstreams/RIG-TACKLE-DATA-INTEGRITY.md` and `workstreams/RIG-TACKLE-DATA-INTEGRITY-VALIDATION.md`.

## Current-State UX Repairs

**Implementation Status: Validated**

The source implementation was pushed in commit `cf4f8bfa4974d06ada35650dd4e27f9371ee034f`. Repository inspection confirmed the intended source changes are present. Documentation-preservation defects from the initial package were corrected, package-specific root artifacts were removed, and runtime/regression validation passed.

### Changed

- Inert child cards render as non-actionable unavailable cards with a visible `Coming Soon` status.
- Fish Guide `Search Fish` and Rig Guide `Browse All Rigs` remain interactive.
- Dashboard Regulations CTA changed from generic `Browse →` to `Go to ODWC Regulations ↗`.
- Forest Journal Dashboard restored the approved primary-card right accent, stronger primary title, primary vertical spacing, gradient hover treatment, active treatment, and card overflow containment.
- Package-specific `REPLACEMENT` source labels were removed from deliberately edited source files under the approved status/version cleanup rule.

### Preserved

- Dashboard card order and route architecture.
- Current pill CTA styling.
- Fish Search.
- Rig browse/detail behavior.
- Tackle contextual `Name ⓘ` interaction.
- Inline Rig readiness and persistence.
- Current data/media.
- Dormant theme files remain untouched.

### Validation

- Repository source inspection: passed.
- Documentation preservation and root cleanup: passed.
- Dashboard runtime validation: passed.
- Fish Guide unavailable-card validation: passed.
- Rig Guide unavailable-card validation: passed.
- Recommendations, My Tackle, Knots, Catch Log, Favorites, and Settings unavailable-card validation: passed.
- Regulations external-link behavior: passed.
- Fish Search, Rig browse/detail, Tackle popovers, related-component navigation, and readiness persistence regressions: passed.
- Responsive/accessibility checks at phone and desktop widths: passed.
- Normal-navigation console health and external Rig reference behavior: passed.

See `workstreams/UX-REPAIRS.md` and `workstreams/UX-REPAIRS-VALIDATION.md`.

## Architecture, Data-Model, UX, and Handoff Decisions

### Added / Approved

- Relevance-first Search and connected-knowledge contract.
- Five recommendation tiers: Best of the Best, Best Bang for the Buck, Best Budget, Best of the Rest, Avoid.
- Rig assembly vs Technique presentation ownership boundary.
- Single-owner Rig-to-Tackle relationship architecture and canonical Tackle display-name ownership.
- Initial 20-Rig regional library plus six Core Rigs.
- My Tackle ownership/readiness authority and buildability-first readiness principle.
- User Knowledge safe-rendering trust boundary.
- Coming Soon/unavailable child-card semantics.
- Explicit `Go to ODWC Regulations ↗` external CTA semantics.
- Narrow Dashboard CSS regression restoration plan.
- Archive rules for completed package artifacts and historical design assets.
- Forest Journal as the only production-supported Version 1 theme.
- Separate document-status, implementation-status, document-revision, and application-version semantics.
- Dedicated `00-GLOSSARY.md`, `05-TACKLE.md`, and `05A-INVENTORY.md` documentation structure.
- `HANDOFF.md` as the repository current-state entrypoint.
- Documentation-validated closeout, no-unvalidated-transition, and cross-segment decision-capture rules.

### Documentation Reconciliation

- Historical MS2.5/MS2.6 milestone descriptions are retained as history but explicitly marked as superseded where later approved architecture changed readiness or Rig-media behavior.
- Detailed Recommendation and ProductDefinition model documents remain deferred until their schemas are mature/required.

## Rig and Tackle Reference Refresh

### Added

- My Tackle remains the ownership/inventory domain; no standalone image-library Tackle Guide is introduced
- Approved lightweight semi-photorealistic Tackle reference images for contextual help
- Verified external Rig reference links for all four current Rigs
- `Best For` and `Good Conditions` summary blocks on Rig detail pages
- Integrated `What You Need` ownership/readiness controls on Rig detail pages
- External-reference `↗` convention
- Permanent command-copy/paste documentation standard

### Changed

- Removed obsolete generated Rig overview and assembly-step assets from the active repository state.
- Removed superseded Tackle SVG reference assets after replacement with approved WebP references.
- Rig pages now contain no local Rig imagery; completed-rig visual confirmation uses verified external links.
- `What You Need` remains text-first; Tackle WebP images appear only after selecting `Name ⓘ`.
- `What You Need` and the lightweight readiness check are combined so ownership can be marked without leaving the Rig detail page.
- Removed the separate Rig readiness page/action from the primary Rig workflow.
- Normalized spacing around `Best For` and `Good Conditions` to match the standard section rhythm.
- Dashboard remains `My Tackle`; it is the user-owned inventory domain.
- Rig detail pages use authoritative text build instructions instead of generated Rig overview/assembly imagery.
- Tackle contextual popovers display the approved recognition image on demand.
- Tackle WebP reference images now use transparent backgrounds so they blend with the active card/modal surface without a visible white rectangle.
- Texas Rig assembly wording now explicitly seats the bait nose against the hook offset before measuring the re-entry point.
- Rig reference imagery policy now prioritizes licensed verified images or authoritative external references over generated diagrams.

### Preserved

- Fish Search
- Rig browsing
- `Name ⓘ` contextual Tackle interaction
- Related-component popover navigation
- Per-Rig readiness persistence
- Inline Ready/Missing status

---

# Version 0.2.6 — Tackle References and Rig Visual Guides

**Date:** 2026-08-06  
**Milestone:** MS2.6

This release history is retained as a historical implementation record. Later Unreleased architecture supersedes generated Rig media and the dedicated-readiness workflow where noted above and in `MILESTONES.md`.

## Added

- Canonical `data/tackle.js`
- 15 stable Tackle reference records
- Centralized `data/media.js`
- Stable media IDs and licensing metadata
- Local `images/tackle/` asset library
- Local `images/rigs/` asset library
- 15 active Tackle SVG reference illustrations
- Contextual `Name ⓘ` Tackle reference links
- In-place Tackle reference modal / bottom-sheet interaction
- Related-component links inside reference popovers
- Recognition guidance, aliases, variants, and related-Rig information
- Completed-Rig overview illustration support
- Completed-Rig overview illustrations for all four current Rigs
- Generic Rig media roles: `overview`, `assembly-step`
- Sequence-based Rig assembly media ordering
- Four-step Texas Rig visual assembly guide
- 23 active media records total

## Validation

- Tackle data and media counts validated at the time of this historical release.
- Reference popovers validated.
- Related Tackle navigation validated.
- Rig overview sections validated.
- Four Texas Rig steps validated.
- Tackle Readiness validated.
- GitHub and live deployment validated.

---

# Version 0.2.5 — Lightweight Tackle Readiness

**Date:** 2026-08-05  
**Milestone:** MS2.5

Historical release that introduced the local per-Rig readiness checklist and persistence key `freshwaterFishingCompanion.tackleReadiness.v1`. Later architecture integrates readiness into the Rig page and treats this storage as transitional.

---

# Version 0.2.4 — Functional Rig Guide

- Canonical Rig data
- Browse All Rigs
- Searchable Rig list
- Rig detail pages
- Component and assembly guidance

---

# Version 0.2.3 — Functional Fish Search

- Functional Fish Search
- Live search
- Reusable result cards
- Parent/Home navigation
