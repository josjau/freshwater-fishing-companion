# Knot Production Package 1

**Status:** Production Package 1 / Awaiting Post-Upload Validation  
**Milestone:** Knots  
**Implementation Version:** 0.5.0  
**Date:** 2026-08-13

# Purpose

Production Package 1 establishes the canonical Knot data foundation and the authoritative Rig-to-Knot relationship layer. It does **not** implement the full Knot Guide UI, Reel & Line Setup, instructional SVGs, or animation.

# Production Scope

- Adds `data/knots.js`.
- Adds exactly 10 active canonical Version 1 Knot records from the approved content lock.
- Adds ordered `CORE_KNOT_IDS` with Arbor, Improved Clinch, Palomar, and Double Uni.
- Adds `knotApplications[]` to all 20 active Rig records.
- Final Rig audit count: **31 real tied connection points**.
- Adds `data/knots.js` to `index.html` after `data/rigs.js`.
- Updates all 20 Rig `lastModifiedVersion` values to `0.5.0` because the canonical Rig records gain a new relationship field.
- Reconciles `03-RIGS.md`, `04-KNOTS.md`, and `09-RELATIONSHIPS.md` with the approved production model.
- Reconciles `docs/KNOT_REFERENCE_SOURCES.md` and the canonical content-lock status with the approved Version 0.5.0 implementation.
- Adds `tools/validate_knot_package_1.py` for static package/source integrity checks.

# Rig Audit

| Rig | Knot Applications |
|---|---:|
| Fixed Bobber Rig | 1 |
| Slip Bobber Rig | 1 |
| Basic Bottom Rig | 3 |
| Texas Rig | 1 |
| Jighead + Soft Plastic | 1 |
| Inline Spinner Setup | 1 |
| Wacky Rig | 1 |
| Ned Rig | 1 |
| Weightless Soft-Plastic Rig | 1 |
| Drop Shot Rig | 1 |
| Carolina Rig | 3 |
| Live-Bait Slip-Sinker Rig | 3 |
| Three-Way Rig | 5 |
| Neko Rig | 1 |
| Shaky Head Rig | 1 |
| Free Rig | 1 |
| Double-Jig Crappie Rig | 2 |
| Jika Rig | 1 |
| Punch / Pegged Texas Rig | 1 |
| Bottom-Bouncer / Spinner Rig | 1 |
| **Total** | **31** |

Special handling:

- Drop Shot uses Palomar as the sole curated recommendation and records the long-tag / point-up routing context.
- Double-Jig Crappie records the lower terminal tie plus the upper Dropper Loop.
- Three-Way Rig records five separate tied connection points.
- Jika split-ring hardware joins are excluded; only line-to-split-ring is a Knot application.
- Bottom-Bouncer trailing harness hardware join is excluded; main-line-to-bouncer remains a tied connection.

# Validation Before Package 2

After the user uploads this package:

1. Re-fetch every changed file from GitHub `main`.
2. Confirm package/GitHub blob integrity.
3. Run or reproduce the static checks in `tools/validate_knot_package_1.py`.
4. Confirm 10 unique active Knot IDs, 6 Beginner / 4 Intermediate, and 4 unique valid Core IDs in approved order.
5. Confirm 20 active Rigs and exactly 31 Knot applications.
6. Confirm every recommended Knot ID resolves to an active canonical Knot.
7. Confirm every connection type is from the approved controlled vocabulary.
8. Confirm `index.html` loads `data/knots.js` after `data/rigs.js` and before application logic.
9. Load the deployed app in Brave and confirm normal Dashboard, Fish, Rig, Tackle reference/readiness, and existing search behavior remain healthy with no new console error caused by the new dataset.
10. Do **not** begin Production Package 2 until Package 1 is validated.

# Exact Resume Point

If this file is present on GitHub `main` and Package 1 has not yet been validated, resume with **Production Package 1 GitHub/static/runtime validation**.

If Package 1 is already validated, resume with **Production Package 2 — Knot Guide landing, task-first navigation, deterministic beginner search, and text-based Knot detail pages**.
