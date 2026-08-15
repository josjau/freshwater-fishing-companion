# Knot Implementation Plan

**Document Status:** Approved  
**Implementation Status:** Validated  
**Original Date:** 2026-08-13  
**Revised:** 2026-08-14

The approved Version 1 Knot build plan is complete through Production Package 4.

# Completed Implementation Order

1. Documentation reconciliation — complete.
2. Research and canonical content lock for all 10 Version 1 Knots — complete.
3. Production Package 1: canonical Knot data, Core registry, and Rig-owned `knotApplications[]` relationships — complete.
4. Production Package 2: Knot Guide landing, task-first navigation, deterministic beginner search, and text-based Knot detail pages — complete.
5. Production Package 3: Get Your Reel Ready workflow with context-preserving Knot handoffs — complete.
6. Production Package 4: 10-Knot Visual Source Audit and cross-entity Media integration — complete.
7. Microsoft Edge runtime validation for the Package 4 media presentation — passed.
8. Package 4 documentation reconciliation and closeout — complete.

# Production Package 4 — Final Media Strategy

The former requirement for ten project-owned static instructional SVGs is superseded.

The durable media-selection hierarchy is:

1. verified diagram,
2. verified animation,
3. verified video,
4. custom project diagram only when the first three categories do not provide an acceptable candidate.

A candidate must match the locked Version 1 canonical method. A legitimate alternate Knot variation is rejected when it conflicts with the canonical method used by the application unless the canonical method is explicitly reopened and documented first.

Canonical in-app text remains authoritative regardless of media type.

Third-party media may be bundled only when reuse rights explicitly permit it. Otherwise, the application uses an authorized embed or an external destination rather than copying or rehosting media.

The authoritative detailed workflow remains:

`docs/workstreams/KNOT-MEDIA-WORKFLOW-APPROVAL.md`

# Final Version 1 Instructional Destinations

- **Arbor Knot:** Animated Knots
- **Improved Clinch Knot:** Animated Knots
- **Palomar Knot:** Animated Knots
- **Double Uni Knot:** Bass Pro Shops / Pro-Knot — selected because it matches the locked five ordinary / eight braid wrap standard
- **Uni Knot:** Animated Knots
- **Double Surgeon’s Knot:** Animated Knots — Surgeon’s Join
- **Non-Slip Loop Knot:** Animated Knots — Non-Slip Mono
- **Dropper Loop Knot:** Animated Knots — canonical page reconciled to about six wraps
- **Snell Knot:** Animated Knots — approved traditional loop-wrapped seven-to-eight-wrap method
- **Alberto Knot:** Knots 3D — interactive 3D source matching the locked seven-up / seven-down method

Current implementation uses external Visual Guide links. No third-party Knot artwork, animation, or 3D content is copied or rehosted in the repository.

# Package 4 Production Boundary

Production Package 4 delivered:

- canonical Dropper Loop and Snell reconciliation in `data/knots.js`,
- ten Knot instructional-media records in the cross-entity `data/media.js` registry,
- dedicated Knot Visual Guide presentation,
- external-source type/provider/action labeling,
- Microsoft Edge runtime validation,
- source-rights documentation and canonical-content reconciliation.

Relevant production files:

- `data/knots.js`
- `data/media.js`
- `index.html`
- `forest-journal.css`
- `knot-media-renderer.js`

# Package 4 Runtime Result

Microsoft Edge validation passed for:

- an Animated Knots-backed Knot,
- Double Uni → Bass Pro / Pro-Knot,
- Alberto → Knots 3D,
- Visual Guide placement above **How to Tie It**,
- acceptable visual presentation in the tested application layout.

# Deferred / Parking Lot

The following are deliberately outside Package 4 closeout:

## Connected-Knowledge Relationship Navigation

A later cross-application UX pass will make meaningful relationship chips/bubbles actionable where a canonical destination exists.

Examples:

- Knot line-compatibility chips → line/reference knowledge,
- Knot task chips such as **Connect Two Lines** or **Add a Leader** → relevant task/knowledge destination,
- Fish → recommended Rig,
- Rig → Knot instructions,
- Rig/Knot → related Tackle or Technique where useful.

This extends D022 **Relevance-First Search and Connected Knowledge**. It does not change canonical ownership merely to make the UI navigable.

## Scoped Search UX

The previously parked Rig/Knot collection-search issue remains deferred:

- collection search remains correctly scoped,
- placeholders/examples should eventually become collection-aware,
- a clearer route to broader/global search should be added in the later search UX pass.

## Additional Local Knot Media

The Public Domain USFWS Improved Clinch and Palomar diagrams remain valid future local-media options. They are not required for Version 1 because the approved external instructional destinations are already implemented and validated.

## Lottie

Lottie remains a possible future playback layer only when driven by independently verified Knot states/topology. It is not a geometry authority and is not part of the Version 1 Package 4 implementation.

# Current Status

**Production Packages 1–4: COMPLETE / GITHUB-VERIFIED / RUNTIME-VALIDATED**

The Knot instructional-media package is complete. The next Knots step is milestone-level closeout/regression review before transitioning to the next application milestone.

The earlier generated Knot review drawings remain rejected exploratory artifacts and are not approved production assets.
