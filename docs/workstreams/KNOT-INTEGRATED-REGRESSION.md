# Freshwater Fishing Companion — Knot Integrated Regression

**Document Status:** Approved  
**Implementation Status:** Source Regression PASS / Shared Navigation Appearance PASS / Reel Setup Correction Validated / Extended Runtime Validation Pending  
**Milestone:** Knots  
**Recorded:** 2026-08-17  
**Runtime Environment:** Windows Desktop + Microsoft Edge + GitHub Desktop

# Purpose

This workstream records the integrated source-level regression pass after completion of Knot Production Packages 1–4 and the site-wide floating-navigation correction work.

The goal is to verify that the current GitHub `main` still contains the approved Knot data, media, routing, renderer integration, and navigation behavior before final milestone runtime closeout.

# Authoritative Baseline

GitHub `main` is authoritative.

Current shared-navigation source baseline under runtime validation:

`05dc0b46cede3b47d82d869493d154564156ac7a` — `Site-wide Floating Nav Fix`

GitHub Pages successfully deployed that commit before runtime validation began.

The targeted Reel Setup navigation correction was deployed in:

`82f37285ff978eca1a92edfd129cebb9aff5105c` — `Site-Wide Navigation Fix - Reel Setup Fix`

# Integrated Source Regression

## Canonical Knot Data

**Status:** PASS

Verified current `data/knots.js` blob:

`7a71071e1cc016d1608db6be25c4ca0928fb1d13`

Confirmed:

- ten canonical Knot records remain present,
- approved Core Knot IDs remain unchanged,
- Dropper Loop retains the approved **about six wraps** method,
- Snell retains the approved traditional loop-wrapped **seven-to-eight-wrap** method,
- Alberto retains the approved seven-up / seven-back routing,
- canonical tying steps remain authoritative.

## Knot Instructional Media Registry

**Status:** PASS

Verified current `data/media.js` blob:

`42b3765e44416144ffdd9c245124f6311bf46a6a`

Confirmed all ten Knot instructional-media records remain present:

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

The current rights boundary remains external-link-only unless a record explicitly states otherwise. No third-party Knot instructional media is copied, rehosted, or bundled into the repository.

## Knot Media Renderer

**Status:** PASS

Verified current `knot-media-renderer.js` blob:

`09ba08ac82e9040caee90185c32a559ba414a689`

Confirmed:

- media resolves by `ownerType: "knot"` and canonical `ownerId`,
- only active records with valid external destinations are rendered,
- the Visual Guide is inserted immediately before the canonical tying section,
- canonical numbered in-app steps remain explicitly identified as authoritative.

## Shared Renderer and Application Coordinator

**Regression Status:** PASS  
**Shared Navigation Appearance Status:** PASS  
**Reel Setup Navigation Correction Status:** PASS  
**Extended Runtime Status:** PENDING

The shared-navigation correction intentionally changed `view-renderer.js` to centralize standard Root and Nested navigation markup through `buildPageNavigationMarkup()`.

The shared helper defines:

- root view navigation — one `← Home` control inside `.page-navigation-group`,
- nested view navigation — `← Parent` + `Home` inside the same `.page-navigation-group`,
- one shared visual/structural component for future standard renderer-based views.

Validation Block 2 found one integration defect in the specialized Reel Setup conversion path. `renderReelSetupNavigation()` still replaced only the generic Home button after `renderView()` began wrapping that button in `.page-navigation-group`. The remaining standard group then wrapped Reel Setup's dedicated `[data-reel-setup-navigation]` container, producing a second larger floating shell.

The targeted `script.js` correction now replaces the entire standard `.page-navigation-group` with Reel Setup's dedicated navigation container. No routing logic, CSS, standard Root navigation, or standard Nested navigation is changed by this correction.

The correction was successfully retested in Microsoft Edge on Windows Desktop.

## Load Order

**Status:** PASS

Verified current `index.html` blob:

`dc63b6d33fc4bcdb71ee0d4c9a7f1a42ae8db9e4`

The required load order remains:

1. canonical data,
2. search utilities,
3. `view-renderer.js`,
4. `knot-media-renderer.js`,
5. `script.js`.

This preserves the intentional Knot media renderer integration layer.

# Site-Wide Floating Navigation Correction

**Source Status:** PASS  
**Shared Appearance Runtime Status:** PASS  
**Reel Setup Runtime Status:** PASS  
**Extended Runtime Status:** PENDING

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

The deployed correction passed the first Brave runtime validation block on 2026-08-17.

Confirmed:

- Rig Guide root uses the shared floating Home container,
- Knot Guide root uses the same treatment,
- Fish Guide root uses the same treatment,
- an additional root view uses the same treatment,
- a representative nested Rig or Knot page retains Parent + Home inside the same visual component.

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

# Remaining Extended Runtime Validation

The following checks still remain before final navigation and Knots milestone closeout:

1. Narrow viewport — no horizontal overflow or content obstruction.
2. Keyboard navigation — visible focus and operable controls.
3. Representative Knot landing → collection → detail → related Rig / Reel Setup traversal.
4. Normal-navigation console health.

# Current Result

**INTEGRATED KNOT SOURCE REGRESSION: PASS**

**SHARED NAVIGATION APPEARANCE: PASS**

**RIG NESTED NAVIGATION: PASS**

**KNOT NESTED NAVIGATION: PASS**

**REEL SETUP NAVIGATION: PASS AFTER CORRECTION**

**EXTENDED RUNTIME VALIDATION: PENDING**

No integrated Knot data, media, route, or instructional-content regression was found.

The Knots implementation remains functionally complete through Production Package 4. Final milestone closeout remains pending the remaining extended runtime validation and final global documentation reconciliation.

# Next Step

1. Complete narrow-viewport validation.
2. Complete keyboard navigation validation.
3. Complete representative Knot → related Rig / Reel Setup traversal.
4. Confirm normal-navigation console health.
5. Reconcile final milestone-level records.
6. Formally close the Knots milestone before beginning Fish Guide implementation.
