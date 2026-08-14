# Knot Production Package 3 — Block 3.5 Validation

**Status:** PASS / VALIDATED  
**Milestone:** Knots  
**Package:** Production Package 3  
**Block:** 3.5 — Reel/Rod Compatibility + How to Read Your Reel  
**Runtime Validation:** Microsoft Edge, user-run  
**Date:** 2026-08-13

# Delivered Artifact

`Freshwater-Fishing-Companion-Knot-Production-Package-3-Block-3.5.zip`

SHA-256:

`980abc8d0d309b79992e8455b9896e29d3319f2163feb36d5755f41690a9d482`

# GitHub Integrity

Post-upload GitHub `main` exactly matched the validated package:

```text
c30e051284aa22eb773159f958cfd7255de64e43  script.js
5f03e44039ffc92b823250ad77e997d246c6a8da  data/reel-guidance.js
4ee67c575ad2a1d34f8951cce65ce55581914aea  tools/validate_knot_package_3.py
```

# Static Validation

PASS.

```text
Production Package 3 Block 3.5 validation passed.
Entry options: 2
Reel types: 4
Physical line types: 3
Line guidance actions: 2
Beginner reel recommendations: 4
Target-fish profiles: 6
Equipment guidance groups: 3
Selected Choices: flat treatment with matched text sizing and distinct colors.
Reel/Rod compatibility checkpoint: enabled.
Normal Knot landing remains intentionally unwired to Reel Setup.
```

`node --check` passed for:

- `script.js`
- `data/reel-guidance.js`

# Runtime Validation Result

**PASS**

Confirmed by the user in Microsoft Edge after GitHub integrity verification.

Validated areas:

- Selected Choices uses the approved flat at-a-glance treatment on desktop and mobile emulation,
- Selected Choices heading and values use matched font sizing with distinct colors,
- cumulative selections wrap correctly,
- Reel Type **I'm Not Sure** opens the recognition path and does not persist an unresolved reel type,
- **How to Read Your Reel** guidance renders and explains capacity/order/unit interpretation,
- **How to Read Your Rod** guidance renders and distinguishes line rating from lure rating,
- compatible equipment advances to **Equipment Compatibility Check**,
- mismatch/uncertainty advances to **Pause Before Spooling**,
- upstream selection changes clear dependent state correctly,
- Spincast + Braid warning remains intact,
- Braid strength-reference boundary remains intact,
- the normal Knot landing remains intentionally unwired to Reel Setup,
- no application-source JavaScript error was reported.

# Selected Choices Standard — Current Approved State

The approved Reel Setup context summary now uses:

- the same `.78rem` font size for heading and selected values,
- `--text-subtle` for the `SELECTED CHOICES` heading,
- the established Knot accent mix for selected values,
- stronger value weight rather than larger type,
- flat top/bottom divider treatment,
- no elevated/tinted card background,
- no rounded-card treatment,
- no card-style left accent,
- cumulative wrapping protection,
- one reusable renderer across applicable Reel Setup steps.

Treat this as the current visual baseline for later Package 3 blocks unless runtime testing identifies a genuine usability issue.

# Exact Resume Point

Production Package 3 remains active.

**Block 3.5 is PASS / VALIDATED.**

Next build block:

**Block 3.6 — Backing Decision + Spool Attachment / Line-to-Line Knot Handoff Foundation**

Block 3.6 should begin from the latest verified GitHub `main` versions of:

- `script.js`
- `data/reel-guidance.js`
- `tools/validate_knot_package_3.py`

The next block should preserve:

- session-only Reel Setup state,
- persistent Selected Choices behavior,
- equipment compatibility gate,
- canonical Knot ownership of tying instructions,
- no duplicated Knot instructions inside Reel Setup,
- no production wiring of **Attach Line to a Reel** until the later integration block.

The aggregate Package 3 workstream document should be reconciled during the next consolidated documentation pass rather than creating additional documentation-only commits for every minor status change.
