# Knot Landing Page Approval

**Status:** Approved / Runtime Refinement  
**Date:** 2026-08-13

# Purpose

This document records the approved Knot Guide landing-page hierarchy after Production Package 2 runtime review.

The landing page should prioritize the angler's practical job before the Knot taxonomy so beginner task-first discovery remains visible as the library grows.

# Approved Landing Hierarchy

The Version 1 Knot landing order is:

1. **Search all Knots**.
2. **What are you trying to do?**
3. **Core Knots — Learn These First**.
4. **All Knots**.

The four task-first entries remain:

1. **Attach Line to a Reel**.
2. **Tie On a Hook, Swivel, or Lure**.
3. **Connect Two Lines / Add a Leader**.
4. **Make a Loop Connection**.

Task-first discovery stays above Core and All Knots. Future Knot categories or collections should not be inserted above **What are you trying to do?** unless a later approved design decision explicitly changes this priority.

This approval supersedes older Knot planning/handoff text that shows **Get Your Reel Ready** as a separate landing card or places **What are you trying to do?** below Core Knots. Those older documents remain useful for other approved decisions but no longer control the landing-page order.

# Reel-Readiness Integration

The former standalone **Get Your Reel Ready** landing card is removed.

**Attach Line to a Reel** is the single Knot-landing entry point for the reel-readiness workflow.

Approved transition:

```text
Knot Guide
    -> What are you trying to do?
        -> Attach Line to a Reel
            -> Get Your Reel Ready
```

During Production Package 2 Revision, selecting **Attach Line to a Reel** opens a transitional **Get Your Reel Ready** task page containing the currently relevant curated Knot choices:

1. Arbor Knot — primary.
2. Uni Knot — alternative where appropriate.

Production Package 3 upgrades this same entry point into the full guided Reel & Line Setup workflow. It should not reintroduce a separate competing **Get Your Reel Ready** card on the Knot landing page.

# Rationale

Beginner users generally know the connection they need before they know the Knot name. The task-first section therefore has higher navigational priority than Knot collections.

Keeping **Get Your Reel Ready** behind **Attach Line to a Reel** also avoids presenting one concept twice at the same hierarchy level. The task is the user-facing entry point; the guided workflow is the destination.

# Ownership

- Task definitions remain Decision Knowledge in `data/knot-guidance.js`.
- Canonical Knot records remain Reference Knowledge in `data/knots.js`.
- Reel & Line Setup remains a guided workflow owned by the Knots milestone.
- No canonical Knot schema change is required for this landing-page revision.

# Related Guidance

- `KNOT-DETAIL-PAGE-APPROVAL.md`
- `KNOT-SEARCH-APPROVAL.md`
- `KNOT-PRODUCTION-PACKAGE-2.md`
- `KNOT-IMPLEMENTATION-HANDOFF.md`
- `../DETAIL-PAGE-STANDARD.md`
