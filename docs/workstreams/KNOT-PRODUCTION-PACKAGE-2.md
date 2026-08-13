# Knot Production Package 2

**Status:** Production Package 2 / Awaiting Post-Upload Validation  
**Milestone:** Knots  
**Implementation Version:** 0.6.0  
**Date:** 2026-08-13

# Purpose

Production Package 2 turns the Package 1 Knot data foundation into the first complete user-facing Knot Guide experience.

This package implements:

- Knot Guide landing hierarchy,
- direct Core Knot access,
- task-first discovery,
- deterministic beginner-oriented search,
- All Knots browsing,
- text-based Knot detail pages,
- derived Rig-to-Knot usage context,
- verified-reference links colocated with tying instructions.

It does **not** implement Reel & Line Setup or Knot instructional SVG/animation media. Those remain Production Packages 3 and 4 respectively.

# Production Scope

## New Decision-Knowledge file

Adds `data/knot-guidance.js`.

This file owns the four task-first discovery definitions and their search vocabulary:

1. Attach Line to a Reel.
2. Tie On a Hook, Swivel, or Lure.
3. Connect Two Lines / Add a Leader.
4. Make a Loop Connection.

Task definitions own curated task-to-Knot order and shared task vocabulary. Canonical Knot records remain unchanged.

## Routes

Adds:

```text
knot-browse
knot-detail
```

The existing `knots` route remains the Knot Guide landing page.

## Knot Guide landing

The landing flow is:

1. Search all Knots.
2. Get Your Reel Ready — visible but unavailable until Production Package 3.
3. Core Knots — Learn These First — all four Core Knots open directly.
4. What are you trying to do? — four task-first choices.
5. All Knots — opens the complete active library.

Empty search restores the normal landing page rather than dumping all 10 Knots into the search region.

## Search

Knot search uses dedicated deterministic ranking without changing existing Fish/Rig generic search behavior.

Ranking follows the approved order:

1. exact canonical name,
2. exact alias,
3. canonical-name prefix,
4. alias prefix,
5. exact Knot-specific keyword,
6. strong shared task intent,
7. partial name/alias/Knot-specific keyword,
8. line type or difficulty.

Normalization includes:

- case and punctuation normalization,
- `mono` → `monofilament`,
- `fluoro` → `fluorocarbon`,
- selected singular/plural normalization,
- limited filler-word removal.

Shared task phrases are deliberately excluded from the Knot-specific keyword score so task searches preserve the curated task order rather than being distorted by duplicated broad phrases in individual records.

## Knot detail page

Each active Knot detail page presents:

1. Core status where applicable, difficulty, name, summary, and accepted alias where present.
2. **Best For** plus line compatibility.
3. **Where You'll Use It**, derived at runtime from task-first definitions plus Rig-owned `knotApplications[]`.
4. **How to Tie It** using the locked ordered `tyingSteps[]`.
5. **Verified References** inside the How to Tie It section.
6. **Check Your Knot** from `finalChecks[]`.
7. **Common Mistakes**.
8. **When to Choose Another Knot** from `limitations[]`.

Task/workflow context is derived from Decision Knowledge and Rig context is derived from Rig-owned relationships. No reverse Knot-to-Rig IDs are stored in canonical Knot data.

# Explicit Source Changes

## `script.js`

**Old build milestone:** `Rig Guide Completion`  
**New build milestone:** `Knot Guide — Production Package 2`

Reason: the application coordinator now owns active Knot Guide routes and navigation state.

Existing Rig/Fish/Tackle behavior is preserved.

## `search.js`

**Old build role:** shared generic search utilities only.  
**New build role:** shared generic utilities plus dedicated deterministic Knot search.

Reason: Knot search has approved domain-specific normalization, task-intent vocabulary, and ranking that should not change the already-finalized Fish/Rig search behavior.

## `view-renderer.js`

**Old build role:** reusable views, search results, Rig details, Tackle references/readiness.  
**New build role:** adds Knot landing/result/detail rendering while preserving existing renderers.

## `forest-journal.css`

Adds Knot-specific visual hierarchy using the existing `--accent-knots` token and the approved cross-domain detail-page grammar. Rig-specific density rules remain Rig-specific.

## `index.html`

Loads `data/knot-guidance.js` immediately after `data/knots.js` and before `search.js`/application logic.

# No Canonical Knot Data Change

Production Package 2 does not modify `data/knots.js`.

The 10 locked canonical records from Package 1 remain authoritative and unchanged.

# Static Validation Gate

`tools/validate_knot_package_2.py` validates:

- required Package 2 files exist,
- all modified JavaScript passes `node --check`,
- exactly four task definitions exist in approved order,
- every task Knot ID resolves to an active canonical Knot,
- Core IDs remain unchanged,
- Package 1 retains 10 active Knots and 31 Rig relationships,
- `index.html` load order is correct,
- dedicated Knot routes are registered,
- approved detail headings are present,
- old Compare Knots / strength-based placeholder UI is removed,
- existing generic `searchRecords()` remains present for Fish/Rig regression safety,
- Knot search ranking behavior passes representative queries.

# Brave Runtime Validation After Upload

After upload and GitHub integrity verification:

1. Hard refresh the deployed app in Brave with DevTools Console open.
2. Confirm `data/knot-guidance.js`, `search.js`, `view-renderer.js`, and `script.js` load without project JavaScript errors.
3. Open **Knots** from Home.
4. Confirm the landing order and all four Core cards.
5. Search `palomar`, `tie hook`, `add leader`, `braid`, `mono`, and a no-result term.
6. Confirm clear-search restores the landing content.
7. Open each task-first collection and verify curated Knot order.
8. Open at least one Core and one Intermediate Knot detail.
9. Confirm Parent/Home navigation works and explicit navigation opens at the top.
10. Confirm Where You'll Use It contains derived Rig relationships.
11. Confirm Verified References appear inside How to Tie It.
12. Recheck Fish search, Rig Guide/search/detail, and Tackle reference/readiness for regressions.

# Exact Resume Point

If this file is present on GitHub `main` and Package 2 has not yet passed runtime validation, resume with **Production Package 2 GitHub/static/Brave validation**.

After Package 2 passes, proceed to **Production Package 3 — Get Your Reel Ready**.

Do not begin static Knot SVG production until Production Package 4.
