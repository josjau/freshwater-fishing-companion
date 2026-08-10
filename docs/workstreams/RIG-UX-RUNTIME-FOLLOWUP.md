# Freshwater Fishing Companion

**Document:** RIG-UX-RUNTIME-FOLLOWUP.md  
**Document Revision:** 0.3.0  
**Document Status:** Approved  
**Implementation Status:** In Progress  
**Recorded Against:** `main` at `f2fee384a9bc44d7f481b7c9b1072112cbe6571f`  
**Last Updated:** 2026-08-10

# Purpose

Preserve the remaining runtime findings from the Rig UX Finalization session so the current Core Rigs / Rig Learning Tiers segment can be closed without relying on chat history.

The current segment remains **In Progress** until the remaining Rig runtime checks and normal closeout documentation are completed. Intermediate Rig work remains blocked by D040 until this segment is finalized.

# Runtime Validation Passed

The Rig Guide landing page passed user runtime review for:

- `All Rigs` in the first card position,
- global Rig search on the main Rig Guide,
- varied Dashboard-derived card accents / left-edge lines,
- restrained Core Rigs visual emphasis.

The shared nested-view scroll behavior also passed runtime validation after the application-wide routing fix. **Historical note:** the remembered-parent-position behavior documented immediately below was later superseded during final UX review; the superseding behavior is recorded in the Final Runtime Review section at the end of this document.

- forward navigation opens the newly selected section/subset/detail at the top,
- parent navigation restores the previous page's remembered scroll position,
- Dashboard -> Rig Guide passed,
- Rig Guide -> All Rigs passed,
- All Rigs -> Rig detail passed,
- Rig detail -> All Rigs restored the prior subset scroll position,
- the same behavior passed outside Rigs using Fish Guide / Search Fish.

# Resolved Runtime Issue 1 — YouTube Tutorial Console Errors

**Status:** Resolved for the Texas Rig pilot; no source change currently required.

During the previous session, the Texas Rig embedded YouTube tutorial produced browser-console errors while Edge was being used with ad blockers enabled.

The supplied console logs showed:

- repeated `net::ERR_BLOCKED_BY_CLIENT` requests to Google/YouTube advertising or interaction endpoints,
- requests involving `tpc.googlesyndication.com` and `youtube.com/pagead/...`,
- a separate `favicon.ico` 404,
- no explicit YouTube playback error `153` in the supplied console text.

During the current session, the Texas Rig tutorial was re-tested in Brave with the browser's normal/default protections. The user confirmed that the video loaded and played normally.

Current interpretation:

- the prior console messages are consistent with ad/privacy-blocking interference rather than a demonstrated application embed failure,
- the current `youtube-nocookie.com` lazy-load implementation is acceptable for the Texas Rig pilot,
- no embed source change is justified from the observed behavior alone.

The normal external YouTube fallback remains appropriate. If future browsers or privacy tools cause actual playback failure, treat that as a compatibility investigation rather than automatically changing the embed policy.

# Resolved Runtime Issue 2 — Scroll Position Carries Across Nested Views

**Status:** Resolved and runtime-validated.

Observed defect before the fix:

- scrolling down the Dashboard and opening a section could leave the new section at the previous vertical position,
- scrolling down the Rig Guide or a Rig subset and opening the next nested view could likewise open that view partway down the page,
- opening an individual Rig could therefore begin below the top of the detail page.

The shared routing behavior was changed in `script.js` rather than patching individual pages.

Approved behavior:

- **Forward navigation:** start the destination view at the top.
- **Parent/back navigation:** restore the remembered scroll position for the destination parent view.
- Rig collection scroll positions are keyed separately by collection.
- Rig detail scroll positions are keyed separately by Rig.

The user validated the behavior in Brave across both Rig and Fish navigation paths.

# Remaining Runtime / Closeout Work

1. Complete any remaining Rig runtime/regression checks from the existing validation plan.
2. Explicitly approve or reject the compact Rig-detail density trial.
3. If the compact treatment is approved as a broader standard, document that decision separately rather than silently generalizing the trial.
4. Re-fetch the exact latest GitHub files before closeout documentation edits.
5. Update the existing workstream, validation, HANDOFF, MILESTONES, CHANGELOG, and any other required closeout documents.
6. Push/verify the closeout state on actual GitHub `main`.
7. Only then begin the Intermediate Rig segment.

# Session Classification

## DECIDED

The bullets in this existing section preserve the earlier runtime state. Where a later final-review decision differs, the later **Final Runtime Review — Superseding Decisions** section below is authoritative.

- The Rig Guide landing-page order, global search, Dashboard-derived card accents, and Core emphasis passed runtime review.
- Forward navigation starts at the top; explicit parent navigation restores the previous parent-view scroll position.
- The shared scroll-position fix is application-wide rather than Rig-specific.
- The Texas Rig YouTube tutorial pilot plays normally in Brave and currently requires no source change.
- The earlier `ERR_BLOCKED_BY_CLIENT` messages are treated as browser/ad-blocking behavior unless an actual playback failure is reproduced.
- Tutorial embeds remain governed by D049 and should still be rolled out deliberately rather than indiscriminately.
- The compact Rig-detail treatment remains a Rig trial until explicit final approval.

## DOCUMENT

- This file records the resolved runtime findings and remaining closeout work.
- Existing workstream and validation documents remain authoritative for the broader segment and intentionally remain `In Progress` until final closeout.

## OPEN

- Final approval/rejection of the compact Rig-detail density trial.
- Remaining Rig regression checks, if any, from the existing validation checklist.
- Final documentation closeout and post-push GitHub validation.

## IMPLEMENTATION

- Shared scroll-position behavior is implemented in `script.js` and runtime-validated.
- Texas Rig tutorial playback is runtime-validated in Brave under normal/default protections.
- Current Rig UX source is pushed on `main`.
- Segment is **In Progress**, not yet Validated.
- Intermediate Rig implementation remains blocked by D040 until final closeout.

# Final Runtime Review — Superseding Decisions

The final Rig approval pass completed the remaining functional checks and then identified a small cross-app UX correction package that must be built and validated before closeout.

Additional runtime checks passed for:

- compact Rig detail presentation at about 375 px and desktop widths,
- Wacky Rig components and assembly geometry,
- Ned Rig components, exposed-hook baseline, and recognition help,
- Weightless Soft-Plastic Rig component/readiness behavior,
- intact worm-bait recognition media,
- Core, Beginner, Beginner+, and All Rigs membership/order/search scope,
- main Rig Guide search and card-grid restoration,
- Texas Rig tutorial playback in Brave,
- Fish search by common name, scientific name, and category,
- derived Tackle `Used In` relationships for Wacky Hook and Ned Jighead.

The compact Rig-detail treatment is approved for Rigs. It is not automatically generalized to other domain detail pages.

The final review supersedes the earlier remembered-parent-scroll behavior with these decisions:

1. Searchable section entry uses an inline search field; Fish Guide adopts the Rig Guide pattern instead of a dedicated Search Fish card/page.
2. Shared search fields provide an explicit one-click `×` control with accessible name `Clear search`.
3. Search results use lightweight deterministic relevance ranking; canonical-name confidence outranks lower-priority metadata, and `Ned` must rank **Ned Rig** first.
4. Parent/Home controls remain reachable while scrolling through a compact sticky navigation surface.
5. Every explicit application view transition opens the destination at the top, including Parent and Home. Remembered parent-scroll restoration is no longer the approved behavior.

A future search field near the top of the Dashboard is approved direction but remains parked until cross-domain scope, grouping, and result presentation are deliberately designed.

## Final Review Documentation

- D022 is updated to reflect deterministic relevance ranking.
- D050 records the standard inline search field and explicit clear control.
- D051 records sticky Parent/Home navigation and top-reset view transitions.
- D052 records the approved Rig-specific compact-detail density.
- The active workstream and validation checklist include the required correction-package checks.

## Final Review Open Items

- Push the coherent correction package and re-fetch actual GitHub `main`.
- Runtime-validate Fish landing search, clear controls, Ned-first ranking, sticky Parent/Home controls, and top-reset Parent/Home behavior.
- Re-run affected Rig/Fish regressions and console/focus checks.
- Complete `HANDOFF`, `MILESTONES`, `CHANGELOG`, workstream, and validation closeout only after the correction package passes.
- Resolve exact Dashboard-search scope later; it is not part of this package.

## Final Review Implementation Status

- The correction package updates `script.js`, `search.js`, `view-renderer.js`, and `forest-journal.css` plus governing/workstream documentation.
- The package is based on verified GitHub `main` at `f2fee384a9bc44d7f481b7c9b1072112cbe6571f` and is not current until pushed and verified.
- Segment remains **In Progress**, not yet Validated.
- Intermediate Rig implementation remains blocked by D040 until final closeout.
