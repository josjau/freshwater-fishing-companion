# Freshwater Fishing Companion

**Document:** RIG-GUIDE-COMPLETION.md  
**Document Revision:** 0.3.1  
**Document Status:** Approved  
**Implementation Status:** Functional Build Present — Recognition Media + Tutorial Corrections Required Before Runtime Closeout  
**Last Updated:** 2026-08-11

# Purpose

Complete the approved 20-Rig regional library and finish the Rig Guide as one coordinated implementation milestone.

This milestone builds on the fully validated Beginner, Beginner+, and Intermediate foundation. The established Rig/Tackle, search, readiness, tutorial, media, navigation, responsive, and validation patterns are reused rather than redesigned.

# Current Implementation State

The functional 20-Rig implementation is present on GitHub `main`.

Implemented production state:

- 20 active Rigs,
- 6 learning tiers active,
- tier counts 6 / 3 / 4 / 4 / 2 / 1,
- 6 Core Rigs unchanged,
- 29 canonical Tackle concepts,
- 29 registered recognition-media records.

Functional implementation commits:

- `b0292798bd628fe80ba3297a94454efd6c1ff364` — activate Intermediate+, Advanced, and Expert in `script.js`
- `e8326c030c68dc3b962ca0410301ed2aee5fb20d` — add six canonical Tackle concepts in `data/tackle.js`
- `c0216dffbe48e9f6094ef8c312ee9c962f1fc96e` — add the seven remaining Rig records in `data/rigs.js`
- `cc87e84069f74df488f0435a98e4a9b46fa87404` — add six final recognition-media assets; current visual treatment rejected by user
- `184d2a24d442e5557b456beb371031b5603d3f84` — connect six new Tackle records to media IDs
- `e083ca3d8cefc87f7872aa6f970ce1c10a7c1644` — register six recognition-media records in `data/media.js`

No renderer, CSS, Fish data, Core membership, readiness-storage key, or unrelated route was changed for the functional Rig completion build.

# Final 20-Rig Library

1. Fixed Bobber Rig
2. Basic Bottom Rig
3. Jighead + Soft Plastic
4. Slip Bobber Rig
5. Inline Spinner Setup
6. Texas Rig
7. Weightless Soft-Plastic Rig
8. Wacky Rig
9. Ned Rig
10. Drop Shot Rig
11. Carolina Rig
12. Live-Bait Slip-Sinker Rig
13. Three-Way Rig
14. Neko Rig
15. Shaky Head Rig
16. Free Rig
17. Jika Rig
18. Punch / Pegged Texas Rig
19. Double-Jig Crappie Rig
20. Bottom-Bouncer / Spinner Rig

# Final Learning-Tier Membership

- Beginner — 6
- Beginner+ — 3
- Intermediate — 4
- Intermediate+ — 4
  - Neko Rig
  - Shaky Head Rig
  - Free Rig
  - Double-Jig Crappie Rig
- Advanced — 2
  - Jika Rig
  - Punch / Pegged Texas Rig
- Expert — 1
  - Bottom-Bouncer / Spinner Rig

# Core Rigs

`CORE_RIG_IDS` remains unchanged:

1. Fixed Bobber Rig
2. Basic Bottom Rig
3. Jighead + Soft Plastic
4. Inline Spinner Setup
5. Texas Rig
6. Slip Bobber Rig

# Canonical Tackle

The canonical Tackle library contains 29 active concepts.

New concepts:

1. Nail Weight — `nail-weight`
2. Shaky Head Jighead — `shaky-head-jighead`
3. Ringed Sinker — `ringed-sinker`
4. Split Ring — `split-ring`
5. Bottom Bouncer — `bottom-bouncer`
6. Spinner Harness — `spinner-harness`

# BLOCKER 1 — Recognition Media Rejected

The six new production recognition assets were reviewed by the user and rejected because they returned to the old vector/flat illustration style.

Affected files:

- `images/tackle/nail-weight-reference.webp`
- `images/tackle/shaky-head-jighead-reference.webp`
- `images/tackle/ringed-sinker-reference.webp`
- `images/tackle/split-ring-reference.webp`
- `images/tackle/bottom-bouncer-reference.webp`
- `images/tackle/spinner-harness-reference.webp`

These are not accepted final production media.

Required replacement standard:

- real-photo-first when technically correct and legally reusable,
- otherwise original semi-photorealistic catalog-style recognition media anchored to verified real-world geometry,
- do not use flat/vector/cartoon/clip-art styling,
- 640 × 440 RGB WebP,
- exact `#f4f0e8` canvas,
- no alpha,
- no artificial cast shadow,
- clear recognition at realistic phone contextual-popover size.

The previously invoked precise-illustration exception does not override the user's visual rejection. Replace all six as a coherent media batch before closeout.

# BLOCKER 2 — Seven New Rigs Require YouTube Tutorials

The seven new Rigs currently contain authoritative build instructions and external technical-reference links but do not yet have the intended embedded YouTube tutorials.

Affected Rigs:

1. Neko Rig
2. Shaky Head Rig
3. Free Rig
4. Double-Jig Crappie Rig
5. Jika Rig
6. Punch / Pegged Texas Rig
7. Bottom-Bouncer / Spinner Rig

The user explicitly requires YouTube tutorials under the already established build-first tutorial standard.

Required tutorial standard:

- primary purpose is physical build/assembly/configuration,
- concise/direct videos preferred when technically complete,
- component order, knots/connections, leader/weight/bait placement, and final configuration must be clear,
- technique/retrieve/presentation content may be secondary but must not dominate,
- exact creator/title/video ID/external URL must be verified,
- production embed must use the existing lazy `youtube-nocookie.com` implementation,
- no autoplay,
- separate `Watch on YouTube ↗` fallback remains available,
- each tutorial must receive runtime playback validation after implementation.

External reference links may remain as supplemental sources, but they are not the final tutorial substitute for these seven Rigs.

# Application State

`script.js` currently:

- activates all six learning tiers,
- maps Intermediate+, Advanced, and Expert cards to their collections,
- filters each collection by canonical `difficulty`,
- preserves All Rigs behavior,
- preserves the six-member Core registry and order.

The existing renderer continues to provide:

- Rig search,
- tier-scoped search,
- Rig detail rendering,
- canonical component lookup,
- readiness persistence,
- derived Tackle `Used In`,
- contextual `Name ⓘ` references,
- lazy embedded tutorial support,
- external reference links.

# Required Next-Session Order

Do not run final runtime closeout yet.

1. Replace all six rejected recognition-media assets with compliant semi-photorealistic/real-photo-first production media.
2. Select and verify one build-first YouTube tutorial for each of the seven new Rigs.
3. Update `data/rigs.js` with the seven approved `tutorialVideo` records.
4. Verify all changed production files from GitHub.
5. Run one consolidated runtime closeout covering:
   - All Rigs = 20,
   - tier counts = 6 / 3 / 4 / 4 / 2 / 1,
   - Core six/order unchanged,
   - all seven new Rig detail pages,
   - all six corrected `Name ⓘ` recognition images,
   - all seven YouTube tutorials,
   - readiness persistence,
   - desktop/mobile layout,
   - console health and horizontal overflow.
6. Only after PASS mark the Rig Guide Validated / Finalized and reconcile `MILESTONES.md`, `CHANGELOG.md`, and `HANDOFF.md`.

# Explicit Non-Scope

- My Tackle persistent inventory
- Recommendations implementation
- Knots implementation
- Technique implementation
- Dashboard cross-domain search
- Fish feature expansion
- Core membership changes
- Rig-detail redesign
- generated completed-Rig/build-step imagery
