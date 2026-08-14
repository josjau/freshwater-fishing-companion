# Knot Production Package 2

**Status:** Production Package 2 / Runtime Revision 5 Implemented / Unvalidated  
**Milestone:** Knots  
**Implementation Version:** 0.6.5  
**Date:** 2026-08-13

# Purpose

Production Package 2 turns the Package 1 Knot data foundation into the first complete user-facing Knot Guide experience.

This package implements:

- Knot Guide landing hierarchy,
- Rig-style Knot collection cards for All/Core/Beginner/Intermediate/Advanced,
- shared varied navigation-card accent bars, Important Card treatment for the two foundational task entries, and Core Knots priority treatment,
- task-first discovery,
- deterministic beginner-oriented search,
- All Knots browsing,
- text-based Knot detail pages,
- derived Rig-to-Knot usage context,
- progressive disclosure for long Rig-usage lists,
- bidirectional Rig <-> Knot related-detail navigation with context-preserving return,
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

The revised landing flow is:

1. Search all Knots.
2. **What are you trying to do?** — four task-first choices.
3. Collection cards:
   - **All Knots**.
   - **Core Knots**.
   - **Beginner Knots**.
   - **Intermediate Knots**.
   - **Advanced Knots** — Coming Soon while no active Advanced records exist.

The landing no longer renders the four Core Knot records directly. Core is a collection card, matching the Rig Guide's collection-card interaction model and keeping the landing page compact as the library grows.

The former standalone **Get Your Reel Ready** landing card is removed. **Attach Line to a Reel** is the single Knot-landing entry point for reel readiness. Selecting that task opens a transitional **Get Your Reel Ready** task page with Arbor Knot and Uni Knot. Production Package 3 upgrades the same entry into the full guided reel-setup workflow rather than adding a second competing landing card.

Task-first discovery remains above Knot collections so it stays prominent as the Knot library expands.

`KNOT-LANDING-PAGE-APPROVAL.md` is the controlling landing-page guidance and supersedes older planning/handoff text that used the previous standalone reel-readiness card/order.

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
   - Task context remains compact and visible.
   - Up to two Rig relationships display initially.
   - More than two Rigs adds **See all N rigs** / **Show fewer**.
   - Runtime Revision 2 fixed the hidden-state CSS defect; Runtime Revision 4 keeps that fix and reduces the collapsed visible limit to two Rigs.
   - Initial Rig ordering prioritizes Core status, lower difficulty, then canonical Rig order.
   - Each Rig is an internal navigation link to that Rig detail page.
4. **How to Tie It** using the locked ordered `tyingSteps[]`.
5. **Verified References** inside the How to Tie It section.
6. **Check Your Knot** from `finalChecks[]`.
7. **Common Mistakes**.
8. **When to Choose Another Knot** from `limitations[]`.

Task/workflow context is derived from Decision Knowledge and Rig context is derived from Rig-owned relationships. No reverse Knot-to-Rig IDs are stored in canonical Knot data.

## Runtime refinements

## Related-detail density and navigation

Runtime review exposed an excessive-scroll problem on high-cardinality Knot relationships such as Palomar, which currently resolves to 20 active Rigs.

Approved correction:

- Rig relationships above two entries are progressively disclosed rather than fully expanded by default.
- Rig names in **Where You'll Use It** are actionable and open the selected Rig detail at the top.
- Rig detail pages expose a **Knots You'll Tie** section derived directly from that Rig's canonical `knotApplications[]`.
- Selecting a Knot from a Rig opens the Knot detail at the top.
- A related-detail navigation stack preserves the immediately preceding detail context so Parent can move back through Rig <-> Knot instructional exploration.
- Home clears the related-detail return stack.
- Relationship ownership is unchanged; the UI derives both directions from the existing canonical owner.

## Task-first landing hierarchy

Runtime review also showed that the task-first section would become easier to miss as Knot collections grow if it remained below Core and a separate reel-readiness card.

Approved revision:

- **What are you trying to do?** stays directly below Search and above Knot collections.
- The standalone **Get Your Reel Ready** landing card remains removed.
- **Attach Line to a Reel** remains the single landing entry for reel readiness.
- During Package 2, that entry opens a transitional **Get Your Reel Ready** page with the curated Arbor/Uni Knot choices.
- Production Package 3 upgrades that same task entry into the guided reel workflow.
- Individual Core Knot records are removed from the landing page.
- Knot browsing now uses Rig-style collection cards in this order: **All Knots**, **Core Knots**, **Beginner Knots**, **Intermediate Knots**, **Advanced Knots**.
- **Advanced Knots** is visible as Coming Soon because Version 1 contains zero active Advanced Knot records.
- Peer task/collection cards use the shared varied accent-bar palette rather than a repeated Knot accent.
- Runtime Revision 4 removes the rejected section-level priority framing from **What are you trying to do?**.
- **Attach Line to a Reel** and **Tie On a Hook, Swivel, or Lure** receive the shared Important Card treatment because both are foundational prerequisites to fishing.
- **Connect Two Lines / Add a Leader** and **Make a Loop Connection** remain normal task cards.
- **Core Knots** retains the approved primary/Core card treatment with the Knot-domain accent.

This keeps the beginner's practical job ahead of the taxonomy, keeps the landing page compact as the library grows, and aligns Knot browsing with the established Rig Guide collection model.

# Explicit Source Changes

## `script.js`

**Original Package 2 build milestone:** `Knot Guide — Production Package 2`  
**Revision 2 build milestone:** `Knot Guide — Production Package 2 Revision 2`

Reason: the application coordinator owns cross-detail Rig <-> Knot navigation state and the five Knot collection routes used by the compact landing-page card model.

**Navigation state change:** hard-coded detail Parent destinations -> context-preserving related-detail return stack.

Reason: users need to move from a Knot into a related Rig and from a Rig into a recommended Knot without losing the instructional context they came from.

Existing ordinary Rig/Fish/Tackle navigation remains unchanged.

## `search.js`

**Old build role:** shared generic search utilities only.  
**New build role:** shared generic utilities plus dedicated deterministic Knot search.

Reason: Knot search has approved domain-specific normalization, task-intent vocabulary, and ranking that should not change the already-finalized Fish/Rig search behavior.

## `view-renderer.js`

**Original Package 2 role:** Knot landing/result/detail rendering plus existing Rig/Tackle renderers.  
**Revision 4 build milestone:** `Knot Guide — Production Package 2 Revision 4`  
**Revision 4 role:** preserves the compact task-first/collection landing model, removes section-level priority treatment from **What are you trying to do?**, applies the shared Important Card treatment to **Attach Line to a Reel** and **Tie On a Hook, Swivel, or Lure**, retains the primary/Core treatment for **Core Knots**, and reduces the collapsed **Where You'll Use It** Rig list from four items to two.  
**Revision 5 build milestone:** `Knot Guide — Production Package 2 Revision 5`  
**Revision 5 role:** preserves Revision 4 behavior while restoring the viewport to the **Where You'll Use It** relationship group after **Show fewer** collapses an expanded list and removing automatic search-field focus when shared browse/search views render. The search-focus correction applies application-wide through the shared renderer; deliberate user-initiated focus behavior remains intact.

## `forest-journal.css`

Preserves the shared navigation-card palette and **Core Knots** treatment. Runtime Revision 4 removes the section-level accent frame from **What are you trying to do?**; the two foundational task cards use the existing shared primary-card hierarchy instead of a new Knot-specific visual system. Existing hidden-state, related-entity, and Rig Knot-link treatments remain unchanged. Rig-specific density rules remain Rig-specific.

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
- Knot search ranking behavior passes representative queries,
- the Knot relationship disclosure threshold is two,
- Palomar retains 20 derived Rig relationships and the approved first-two ordering,
- related Rig/Knot navigation hooks and context-stack functions are present,
- governing detail-page guidance documents contain the approved progressive-disclosure and return-context rules,
- the Knot landing contains no standalone Get Your Reel Ready card,
- **What are you trying to do?** renders before all Knot collection cards,
- **Attach Line to a Reel** is the single reel-readiness landing entry and maps to the transitional Get Your Reel Ready task page.
- navigation cards do not use a Knot-wide repeated accent override,
- **What are you trying to do?** does not carry a section-level priority hook/treatment,
- **Attach Line to a Reel** and **Tie On a Hook, Swivel, or Lure** carry the shared Important Card hook/treatment,
- **Core Knots** continues to carry both the shared primary-card and Knot Core hooks,
- `NAVIGATION-PAGE-STANDARD.md` records the cross-domain Search -> special navigation -> collection-card hierarchy and varied-accent/priority rules,
- shared browse/search views do not auto-focus search fields on render,
- **Show fewer** includes context restoration to the **Where You'll Use It** relationship group and respects reduced-motion preference.

# Edge Runtime Validation After Upload

After upload and GitHub integrity verification:

1. Hard refresh the deployed app in Microsoft Edge with DevTools Console open.
2. Confirm `data/knot-guidance.js`, `search.js`, `view-renderer.js`, and `script.js` load without project JavaScript errors.
3. Open **Knots** from Home.
4. Confirm the landing order is Search -> **What are you trying to do?** -> collection cards.
5. Confirm the collection cards are **All Knots**, **Core Knots**, **Beginner Knots**, **Intermediate Knots**, and **Advanced Knots** (Coming Soon). Confirm there is no separate **Get Your Reel Ready** landing card.
6. Confirm task and collection cards use varied accent bars; **What are you trying to do?** has no section-level accent frame; **Attach Line to a Reel** and **Tie On a Hook, Swivel, or Lure** have Important Card treatment; and **Core Knots** retains the stronger Core treatment.
7. Select **Attach Line to a Reel** and confirm the transitional page title is **Get Your Reel Ready** with Arbor Knot first and Uni Knot second; Parent returns to Knots.
8. Search `palomar`, `tie hook`, `add leader`, `braid`, `mono`, and a no-result term.
9. Confirm clear-search restores the landing content.
10. Open the other task-first collections and verify curated Knot order.
11. Open at least one Core and one Intermediate Knot detail.
12. Confirm Parent/Home navigation works and explicit navigation opens at the top.
13. On Palomar, confirm **Where You'll Use It** initially shows two Rigs and **See all 20 rigs**.
14. Expand the Palomar Rig list, scroll deep in the expanded list, then select **Show fewer**. Confirm the two-item view is restored and the viewport returns to the **Where You'll Use It** relationship group while keyboard focus remains on the disclosure control.
15. Open Fish, Rig, Knot, and scoped browse/search views and confirm no search input receives focus merely because the view rendered.
16. Open a Rig from Palomar and confirm the Rig opens at the top with Parent labeled for Palomar.
17. Confirm that Rig shows **Knots You'll Tie**; open a Knot from there and use Parent to return to the Rig, then Parent again to return to the originating Knot.
18. Confirm Verified References appear inside How to Tie It.
19. Recheck Fish search, Rig Guide/search/detail, and Tackle reference/readiness for regressions.

# Exact Resume Point

If this file is present on GitHub `main`, confirm the deployed/source state is Runtime Revision 5 (`0.6.5`). Package 2 has **not** passed final remediation validation.

Runtime Revision 4 completed the broader Microsoft Edge functional/regression checklist. The exact next action is to verify the Revision 5 GitHub blobs and static validator results, then run the two targeted remediation checks: **Show fewer** viewport restoration and application-wide no-auto-focus search behavior. If those checks pass with no project-source console errors, mark Production Package 2 **PASS / VALIDATED**.

After Package 2 passes, proceed to **Production Package 3 — Get Your Reel Ready**.

Do not begin static Knot SVG production until Production Package 4.
