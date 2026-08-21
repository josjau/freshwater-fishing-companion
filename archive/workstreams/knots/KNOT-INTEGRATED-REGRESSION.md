# Freshwater Fishing Companion — Knot Integrated Regression

**Document Status:** Approved  
**Implementation Status:** PASS / VALIDATED / CLOSED  
**Milestone:** Knots  
**Recorded:** 2026-08-17  
**Runtime Environment:** Windows Desktop + Microsoft Edge + GitHub Desktop

# Purpose

This workstream records the integrated source-level and runtime regression closeout after completion of Knot Production Packages 1–4, the site-wide floating-navigation correction work, the connected-knowledge navigation work, and the final Dashboard/Tackle information-architecture refinements.

The goal was to verify that the authoritative GitHub `main` contains the approved Knot data, media, routing, renderer integration, navigation behavior, and connected-knowledge behavior before formally closing the Knots milestone.

# Authoritative Baseline

GitHub `main` is authoritative.

Historical shared-navigation source baseline:

`05dc0b46cede3b47d82d869493d154564156ac7a` — `Site-wide Floating Nav Fix`

Targeted Reel Setup navigation correction:

`82f37285ff978eca1a92edfd129cebb9aff5105c` — `Site-Wide Navigation Fix - Reel Setup Fix`

Connected-knowledge / Dashboard source merge baseline:

`f94bdae6620db70b5c95495004fecd78a9d5a8f6` — merge containing the approved connected-knowledge navigation and Dashboard/Tackle source changes.

Final validation refinements:

- `3e7cb0364325da8941b0917b8c2237f1ce19097f` — `Dashboard - prioritize primary guide cards`
- `e7a00db6936eba2aa11277a1a4d923d5f2e7cb32` — `Knots - compact connected knowledge pills`

**Final validated production source baseline:**

`e7a00db6936eba2aa11277a1a4d923d5f2e7cb32`

The final two validation refinements changed only:

- `index.html` — Dashboard priority-card ordering,
- `forest-journal.css` — compact connected-knowledge pill sizing/content-width behavior.

No JavaScript, renderer, canonical data, or routing files changed during those final two corrections.

# Integrated Source Regression

## Canonical Knot Data

**Status:** PASS

Verified canonical `data/knots.js` content remained unchanged through the final source corrections.

Confirmed:

- ten canonical Knot records remain present,
- approved Core Knot IDs remain unchanged,
- Dropper Loop retains the approved **about six wraps** method,
- Snell retains the approved traditional loop-wrapped **seven-to-eight-wrap** method,
- Alberto retains the approved seven-up / seven-back routing,
- canonical tying steps remain authoritative.

## Knot Instructional Media Registry

**Status:** PASS

Confirmed all ten approved Knot instructional-media records remain present:

1. Arbor — Animated Knots by Grog
2. Improved Clinch — Animated Knots by Grog
3. Palomar — Animated Knots by Grog
4. Double Uni — Bass Pro Shops / Pro-Knot
5. Uni — Animated Knots by Grog
6. Double Surgeon’s — Animated Knots by Grog
7. Non-Slip Loop — Animated Knots by Grog
8. Dropper Loop — Animated Knots by Grog
9. Snell — Animated Knots by Grog
10. Alberto — Knots 3D

The rights boundary remains external-link-only unless a record explicitly states otherwise. No third-party Knot instructional media is copied, rehosted, or bundled into the repository.

## Knot Media Renderer

**Status:** PASS

Confirmed:

- media resolves by `ownerType: "knot"` and canonical `ownerId`,
- only active records with valid external destinations are rendered,
- the Visual Guide is inserted immediately before the canonical tying section,
- canonical numbered in-app steps remain explicitly identified as authoritative.

## Shared Renderer and Application Coordinator

**Regression Status:** PASS  
**Shared Navigation Appearance Status:** PASS  
**Reel Setup Navigation Correction Status:** PASS  
**Connected-Knowledge Navigation Status:** PASS  
**Narrow Viewport Status:** PASS  
**Keyboard Navigation Status:** PASS  
**Extended Runtime Status:** PASS

The shared-navigation correction centralized standard Root and Nested navigation markup through `buildPageNavigationMarkup()`.

The shared helper defines:

- root view navigation — one `← Home` control inside `.page-navigation-group`,
- nested view navigation — `← Parent` + `Home` inside the same `.page-navigation-group`,
- one shared visual/structural component for future standard renderer-based views.

Validation Block 2 found one integration defect in the specialized Reel Setup conversion path. `renderReelSetupNavigation()` still replaced only the generic Home button after `renderView()` began wrapping that button in `.page-navigation-group`. The remaining standard group then wrapped Reel Setup's dedicated `[data-reel-setup-navigation]` container, producing a second larger floating shell.

The targeted `script.js` correction replaced the entire standard `.page-navigation-group` with Reel Setup's dedicated navigation container. Routing logic and state transitions were preserved.

The later connected-knowledge source update added:

- clickable Knot **Common Tasks** links,
- compact **Rigs that use this Knot** links,
- clickable **Line Compatibility** links,
- minimal Line Type reference/detail pages,
- context-preserving Knot → Rig → Knot navigation,
- context-preserving Knot → task/Reel Setup → Knot navigation,
- preserved Rig → Knot → Rig navigation,
- preserved Reel Setup → Knot → Reel Setup navigation.

Final validated current blobs after the connected-knowledge source merge and validation refinements include:

- `script.js` — `e781ba9d86eff1565d1f4a8d7f9b811f3636f11c`
- `view-renderer.js` — `5cc7911573654671bf0556995cdaeb6117d2fdfc`
- `index.html` — `b0c07a971d37cc6f4d08397ea873d8f458b67871`
- `forest-journal.css` — `5e0f51e10f9c6bc496fbe08826563c4c2e3f1cbc`

## Load Order

**Status:** PASS

The required load order remains:

1. canonical data,
2. search utilities,
3. `view-renderer.js`,
4. `knot-media-renderer.js`,
5. `script.js`.

The final Dashboard ordering correction did not alter script load order.

# Site-Wide Floating Navigation Correction

**Source Status:** PASS  
**Shared Appearance Runtime Status:** PASS  
**Reel Setup Runtime Status:** PASS  
**Narrow Viewport Status:** PASS  
**Keyboard Navigation Status:** PASS  
**Extended Runtime Status:** PASS

The first root-navigation correction made bare root Home buttons sticky. Runtime review found that the Root treatment was materially less visible than the Nested `.page-navigation-group` treatment.

The shared-component correction then:

- added shared `buildPageNavigationMarkup()` generation to `view-renderer.js`,
- used the same `.page-navigation-group` container for standard Root and Nested renderer-based views,
- kept a single non-duplicative `← Home` control on Root pages,
- preserved Parent + Home controls on Nested pages,
- removed the temporary root-specific sticky selector from `forest-journal.css`,
- retained Reel Setup's specialized navigation behavior,
- established the shared container as the required visual pattern for future Root and Nested pages.

## Runtime Result — Shared Appearance

**Status:** PASS

Confirmed:

- Rig Guide root uses the shared floating Home container,
- Knot Guide root uses the same treatment,
- Fish Guide root uses the same treatment,
- an additional root view uses the same treatment,
- representative nested Rig and Knot pages retain Parent + Home inside the same visual component.

The prior Root-versus-Nested visibility mismatch is resolved.

# Validation Block 2

## Block 2A — Rig Nested Navigation

**Status:** PASS

Confirmed:

- Rig browse/detail Parent + Home controls remain floating,
- no duplicate navigation appears,
- Parent returns to the Rig browse/collection page at the top,
- Home returns to the Dashboard at the top.

## Block 2B — Knot Nested Navigation

**Status:** PASS

Confirmed:

- Knot browse/detail Parent + Home controls remain floating,
- no duplicate navigation appears,
- Parent returns to the Knot browse/collection page at the top,
- Home returns to the Dashboard at the top.

## Block 2C — Reel Setup Navigation

**Status:** PASS AFTER CORRECTION

Initial runtime review found an extra larger outer floating bubble around Reel Setup's Previous/Home controls beginning on **Get Your Reel Ready** and continuing throughout Reel Setup.

Root cause:

- `renderView()` created the shared `.page-navigation-group`,
- `renderReelSetupNavigation()` replaced only `[data-home-navigation]`,
- the shared group remained in the DOM,
- Reel Setup's dedicated `[data-reel-setup-navigation]` container was inserted inside that remaining shared shell,
- both containers received the approved floating-container styling.

Targeted correction:

- resolve `genericNavigationGroup` from the generic Home button with `.closest(".page-navigation-group")`,
- require the standard group before conversion,
- replace `genericNavigationGroup` with the Reel Setup navigation container instead of replacing only the Home button,
- preserve all existing Previous/Home behavior and Reel Setup state transitions,
- make no CSS change.

Runtime retest confirmed:

- exactly one Reel Setup floating navigation container,
- no duplicate outer shell,
- Previous remains functional,
- Home remains functional,
- Previous and Home destinations open at the top.

## Block 2D — Narrow Viewport

**Status:** PASS

Microsoft Edge runtime validation confirmed:

- no horizontal page overflow,
- floating navigation remains within the viewport,
- controls fit or wrap cleanly,
- no navigation controls are clipped,
- essential content remains unobscured,
- Reel Setup and representative nested Knot Detail views remain usable.

## Block 2E — Keyboard Navigation

**Status:** PASS

Microsoft Edge keyboard-only validation confirmed:

- Reel Setup floating-navigation controls receive visible focus,
- focus order remains sensible,
- Previous and Home are keyboard-operable,
- representative Knot Detail Parent and Home controls receive visible focus,
- Parent and Home are keyboard-operable,
- no keyboard trap or hidden/ambiguous navigation focus was observed.

# Extended Runtime Validation

**Status:** PASS

The final integrated runtime review used the current connected-knowledge/Dashboard source and validated the following.

## Dashboard Priority Information Architecture

**Status:** PASS

The four emphasized Dashboard cards are now the first four cards, in this exact order:

1. Fish Guide
2. Knots
3. Rig Guide
4. Tackle

**What Should I Throw?** remains standard/non-emphasized.

The Dashboard root label is **Tackle**, not **My Tackle**.

## Tackle Root

**Status:** PASS

The Tackle root presents:

- **Tackle Reference / Find Tackle**,
- **My Tackle**,
- **Check Rig Readiness**.

The Tackle domain is therefore the root knowledge/ownership gateway while **My Tackle** remains the inventory child concept.

## Knot Connected Knowledge — Visible Treatment

**Status:** PASS AFTER FINAL UI REFINEMENT

Validated on Palomar Knot:

- Common Tasks are clickable,
- Rig relationships are clickable,
- Line Compatibility items are clickable,
- the obsolete `View Rig →` treatment is removed.

Runtime review identified two visual refinements:

1. connected-knowledge pills were too large,
2. a Rig relationship pill stretched across its CSS Grid row rather than fitting its text.

Final CSS correction reduced connected-link minimum height/padding/font sizing and added content-width alignment through `width: fit-content` and `justify-self: start` while retaining `max-width: 100%` for narrow screens.

The corrected compact treatment passed runtime validation.

## Connected Link Destinations and Contextual Return

**Status:** PASS

Validated:

- Knot Common Task links open the expected task/workflow,
- Knot Rig links open the expected Rig detail,
- Knot Line Compatibility links open the expected minimal Line Type reference/detail view,
- Rig opened from a Knot returns to the originating Knot,
- Line Type opened from a Knot returns to the originating Knot,
- Common Task/Reel Setup opened from a Knot returns to the originating Knot when applicable.

## Existing Navigation Regressions

**Status:** PASS

Confirmed:

- Rig → Knot → originating Rig remains functional,
- Reel Setup → Knot → originating Reel Setup context remains functional.

## Line Type Reference View

**Status:** PASS

Confirmed:

- selected line type is clearly identified,
- the view contains usable minimal reference content rather than an empty placeholder,
- Parent returns to the originating Knot,
- Home returns to the Dashboard,
- no broken/blank layout or visible application error text was observed.

## Connected-Knowledge Keyboard Interaction

**Status:** PASS

Confirmed:

- Common Tasks, Rig relationship links, and Line Compatibility links receive visible keyboard focus,
- Enter activates the same destination as pointer interaction,
- contextual Parent navigation remains functional.

## Normal-Navigation Console Health

**Status:** PASS

The final Microsoft Edge console-health pass covered normal traversal through:

- Dashboard → Knots,
- Palomar Knot,
- related Rig,
- return to Palomar,
- Line Compatibility,
- return to Palomar,
- Attach Line to a Reel / Reel Setup.

No red application JavaScript errors were generated by normal navigation.

# Current Result

**INTEGRATED KNOT SOURCE REGRESSION: PASS**

**SHARED NAVIGATION APPEARANCE: PASS**

**RIG NESTED NAVIGATION: PASS**

**KNOT NESTED NAVIGATION: PASS**

**REEL SETUP NAVIGATION: PASS AFTER CORRECTION**

**NARROW VIEWPORT: PASS**

**KEYBOARD NAVIGATION: PASS**

**CONNECTED-KNOWLEDGE NAVIGATION: PASS**

**DASHBOARD / TACKLE IA: PASS**

**NORMAL-NAVIGATION CONSOLE HEALTH: PASS**

**EXTENDED RUNTIME VALIDATION: PASS**

**KNOTS MILESTONE: PASS / VALIDATED / FINALIZED / CLOSED**

No integrated Knot data, media, route, instructional-content, navigation, connected-knowledge, or console-health regression remains open.

# Next Step

The Knots milestone is closed.

The next approved milestone is **Fish Guide**.

At the start of the next session:

1. Re-fetch current GitHub `main` before proposing any source edits.
2. Review the canonical Fish Guide scope against the current architecture and existing Fish data/search implementation.
3. Select the first Fish Guide planning/build segment deliberately rather than carrying forward an assumed implementation plan.
4. Preserve the validated site-wide navigation, Dashboard priority order, connected-knowledge navigation, and Knot/Reel Setup behavior unless a later approved requirement explicitly changes them.
