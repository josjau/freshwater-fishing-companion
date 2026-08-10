# Freshwater Fishing Companion

**Document:** RIG-UX-RUNTIME-FOLLOWUP.md  
**Document Revision:** 0.1.0  
**Document Status:** Approved  
**Implementation Status:** In Progress  
**Recorded Against:** `main` at `0f34fcc1a4230beecb9f85eb3fc03ff5289a322a`  
**Last Updated:** 2026-08-09

# Purpose

Preserve the remaining runtime findings from the Rig UX Finalization session so the next session can resume without relying on chat history.

The current Core Rigs / Rig Learning Tiers segment remains **In Progress**. Do not mark it Validated or begin the Intermediate Rig segment until these runtime items are resolved or deliberately dispositioned and the normal closeout documentation is completed.

# Runtime Validation Passed This Session

The Rig Guide landing page passed user runtime review for:

- `All Rigs` in the first card position,
- global Rig search on the main Rig Guide,
- varied Dashboard-derived card accents / left-edge lines,
- restrained Core Rigs visual emphasis.

# Open Runtime Issue 1 — YouTube Tutorial Console Errors

**Status:** Open — investigate next session before approving tutorial embeds for additional Rigs.

When the Texas Rig embedded YouTube tutorial was loaded/played, the user observed browser-console errors.

The supplied console logs show:

- repeated `net::ERR_BLOCKED_BY_CLIENT` requests to Google/YouTube advertising or interaction endpoints,
- requests involving `tpc.googlesyndication.com` and `youtube.com/pagead/...`,
- a separate `favicon.ico` 404,
- no explicit YouTube playback error `153` in the supplied console text.

Next-session investigation must distinguish between:

1. playback actually failing,
2. playback succeeding while an ad/privacy blocker rejects ad or tracking requests,
3. an embed configuration problem that requires source changes.

Do not roll the embedded tutorial pattern out to additional Rigs until this is understood and the Texas Rig trial is explicitly approved.

# Open Runtime Issue 2 — Scroll Position Carries Across Nested Views

**Status:** Open — treat as an application-wide nested-navigation behavior, not a Rig-only defect.

Observed behavior:

- scrolling down the Dashboard and opening a section can leave the new section at the previous vertical scroll position,
- scrolling down the Rig Guide or a Rig subset and opening the next nested view can likewise open that view partway down the page,
- opening an individual Rig can therefore begin below the top of the detail page.

The behavior appears common across nested single-page-application views because route rendering replaces view content without deliberately resetting or managing document scroll position.

Next session should define and implement one shared navigation rule rather than patching individual Rig pages.

Recommended question to settle before implementation:

- Forward navigation to a newly selected section/subset/detail should almost certainly start at the top.
- Decide deliberately whether explicit Back/parent navigation should restore the prior page's scroll position or also return to the top.

# Parking / Next Session Order

1. Re-fetch current GitHub `main` before proposing source edits.
2. Reproduce and classify the Texas Rig YouTube console behavior with extensions/privacy blockers considered.
3. Decide whether the current embed implementation is acceptable, requires adjustment, or should remain external-link-only.
4. Define the application-wide scroll-position rule for forward and parent/back navigation.
5. Implement the smallest shared routing fix rather than page-specific scroll patches.
6. Re-run Rig runtime validation, including compact detail-page approval.
7. Complete the existing Core Rigs / Rig Learning Tiers closeout docs and GitHub validation.
8. Only then begin the Intermediate Rig segment.

# Session Closeout Classification

## DECIDED

- The Rig Guide landing-page order, global search, Dashboard-derived card accents, and Core emphasis passed runtime review.
- The compact Rig-detail treatment remains a Rig trial until full runtime approval.
- Tutorial embeds remain a Texas Rig trial only.

## DOCUMENT

- This file records the unresolved runtime findings for the next session.
- Existing workstream and validation documents remain authoritative for the broader segment and intentionally remain `In Progress`.

## OPEN

- YouTube embed console-error classification and final tutorial-embed approval.
- Shared nested-view scroll-position behavior, including whether parent/back navigation restores prior scroll position.
- Remaining Rig runtime/regression checks and final documentation closeout.

## IMPLEMENTATION

- Current Rig UX source is pushed on `main`.
- Segment is **In Progress**, not Validated.
- Intermediate Rig implementation is blocked by D040 until this segment is finalized.
