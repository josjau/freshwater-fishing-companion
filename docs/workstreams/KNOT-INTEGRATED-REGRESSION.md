# Freshwater Fishing Companion — Knot Integrated Regression

**Document Status:** Approved  
**Implementation Status:** Source Regression PASS / Runtime Navigation Validation Pending  
**Milestone:** Knots  
**Recorded:** 2026-08-17  
**Runtime Environment:** Windows Desktop + Brave Browser + GitHub Desktop

# Purpose

This workstream records the integrated source-level regression pass after completion of Knot Production Packages 1–4 and after the site-wide floating-navigation correction.

The goal is to verify that the current GitHub `main` still contains the approved Knot data, media, routing, renderer integration, and navigation behavior before final milestone runtime closeout.

# Authoritative Baseline

GitHub `main` is authoritative.

Source baseline inspected during this pass:

`d01d8c2aaf45fe12c07663d5b6625d762faf83a1` — `Sticky Home Navigation Fix - Site-wide`

The commit changes only `forest-journal.css` and adds sticky positioning to the existing root-view Home control.

No Knot, Reel Setup, Rig, data, renderer, route, or media source file changed in that commit.

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

**Status:** PASS

Verified current blobs:

- `view-renderer.js` — `793d8563ae338de0aa59335fcac1c520df3eb4e6`
- `script.js` — `d23c05a879fc6b27e0e6c53905e126f34efbce6b`

These remain unchanged from the validated Knot implementation baseline.

Confirmed source architecture still supports:

- Knot landing search and task navigation,
- Knot collection browse views,
- Knot detail routing,
- Rig ↔ Knot contextual navigation,
- Reel Setup context preservation,
- Parent/Home nested navigation,
- top-reset view transitions.

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
**Runtime Status:** PENDING

The current root-view correction is contained only in `forest-journal.css` and applies sticky positioning to the existing direct child Home navigation control used by root application views.

Nested browse/detail views continue to use the existing `.page-navigation-group` sticky behavior.

Reel Setup continues to use its existing dedicated sticky navigation container.

Required Brave runtime validation remains:

- Rig Guide root — floating Home,
- Knot Guide root — floating Home,
- Fish Guide root — floating Home,
- one additional root view such as My Tackle or Settings — floating Home,
- representative nested Rig or Knot view — existing Parent + Home controls remain correct,
- no horizontal overflow or content obstruction at narrow widths.

# GitHub Pages Deployment Note

The first Pages deployment attempt for commit `d01d8c2aaf45fe12c07663d5b6625d762faf83a1` encountered a GitHub-side deployment-service failure and subsequently remained queued before job creation.

This is tracked as an infrastructure/runtime-validation blocker only. No production-source defect has been identified from that Pages failure.

The next legitimate repository update should be allowed to trigger a fresh Pages deployment. Once a successful deployment is available, complete the pending Brave runtime navigation checks before final Knots milestone closeout.

# Current Result

**SOURCE REGRESSION: PASS**

No integrated Knot source regression was found.

The Knots implementation remains functionally complete through Production Package 4. Final milestone closeout is blocked only by the pending deployed-site navigation/runtime validation and subsequent global documentation reconciliation.

# Next Step

After the next successful GitHub Pages deployment:

1. run the pending Brave floating-navigation checks,
2. run a representative Knot landing → collection → detail → related Rig / Reel Setup regression,
3. confirm normal-navigation console health,
4. reconcile `CHANGELOG.md`, `HANDOFF.md`, `MILESTONES.md`, and other milestone-level records,
5. formally close the Knots milestone before beginning Fish Guide implementation.
