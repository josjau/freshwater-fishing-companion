# Freshwater Fishing Companion — Knot Integrated Regression

**Document Status:** Approved  
**Implementation Status:** Source Regression PASS / Shared Navigation Correction Built / Runtime Validation Pending  
**Milestone:** Knots  
**Recorded:** 2026-08-17  
**Runtime Environment:** Windows Desktop + Brave Browser + GitHub Desktop

# Purpose

This workstream records the integrated source-level regression pass after completion of Knot Production Packages 1–4 and the site-wide floating-navigation correction work.

The goal is to verify that the current GitHub `main` still contains the approved Knot data, media, routing, renderer integration, and navigation behavior before final milestone runtime closeout.

# Authoritative Baseline

GitHub `main` is authoritative.

Current package baseline:

`1105ce62cb092041cc632674a422034eec857337` — `Knots - Integrated Regression Source Pass`

The Knot source/data/media baseline remained unchanged through that commit. The navigation correction package built from this baseline changes only the shared renderer navigation markup, the temporary root-navigation CSS exception, and the documentation that governs the site-wide navigation standard.

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
**Navigation Correction Status:** BUILT / RUNTIME PENDING

Baseline blobs before the new shared-navigation package:

- `view-renderer.js` — `793d8563ae338de0aa59335fcac1c520df3eb4e6`
- `script.js` — `d23c05a879fc6b27e0e6c53905e126f34efbce6b`

The new navigation package intentionally changes `view-renderer.js` to centralize standard root and nested navigation markup through `buildPageNavigationMarkup()`.

The shared helper now defines:

- root view navigation — one `← Home` control inside `.page-navigation-group`,
- nested view navigation — `← Parent` + `Home` inside the same `.page-navigation-group`,
- one shared visual/structural component for future standard renderer-based views.

The application coordinator and route behavior are not changed by this correction.

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

**Source Status:** CORRECTION BUILT  
**Runtime Status:** PENDING

The first root-navigation correction made bare root Home buttons sticky. Runtime review on 2026-08-17 confirmed that the root control was reachable, but its presentation was less visible than nested navigation because the root button did not receive the nested `.page-navigation-group` container treatment.

That finding is treated as a validation failure requiring correction before closeout.

The newest correction:

- adds shared `buildPageNavigationMarkup()` generation to `view-renderer.js`,
- uses the same `.page-navigation-group` container for standard root and nested renderer-based views,
- keeps a single non-duplicative `← Home` control on root pages,
- preserves Parent + Home controls on nested pages,
- removes the temporary root-specific sticky selector from `forest-journal.css`,
- leaves Reel Setup's specialized navigation behavior unchanged,
- establishes the shared container as the required visual pattern for future root and nested pages.

Required Brave runtime validation remains:

- Rig Guide root — shared floating Home container,
- Knot Guide root — shared floating Home container,
- Fish Guide root — shared floating Home container,
- one additional root view such as My Tackle or Settings — shared floating Home container,
- representative nested Rig or Knot view — existing Parent + Home controls remain correct,
- Reel Setup navigation remains correct,
- no horizontal overflow or content obstruction at narrow widths,
- keyboard focus remains visible and usable.

# GitHub Pages Deployment Note

The earlier GitHub Pages service incident is no longer blocking validation. GitHub Pages successfully deployed commit `1105ce62cb092041cc632674a422034eec857337` in workflow run `32061454791`.

The new shared-navigation correction must be pushed and successfully deployed before its runtime validation begins.

# Current Result

**INTEGRATED KNOT SOURCE REGRESSION: PASS**

**SITE-WIDE SHARED NAVIGATION CORRECTION: BUILT / NOT YET RUNTIME-VALIDATED**

No integrated Knot data, media, route, or instructional-content regression was found.

The Knots implementation remains functionally complete through Production Package 4. Final milestone closeout remains pending the corrected shared-navigation deployment/runtime pass and subsequent global documentation reconciliation.

# Next Step

After the shared-navigation correction is pushed and GitHub-verified:

1. confirm a successful GitHub Pages deployment,
2. rerun the Brave floating-navigation validation block,
3. run a representative Knot landing → collection → detail → related Rig / Reel Setup regression,
4. confirm normal-navigation console health,
5. reconcile final milestone-level records,
6. formally close the Knots milestone before beginning Fish Guide implementation.
