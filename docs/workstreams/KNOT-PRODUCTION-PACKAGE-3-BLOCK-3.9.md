# Knot Production Package 3 — Block 3.9

**Status:** OPEN / ARCHITECTURE DEFINED / IMPLEMENTATION NOT STARTED  
**Milestone:** Knots  
**Package:** Production Package 3  
**Block:** 3.9 — Reel Ready Check / Rig Guide Handoff + Production Entry Integration  
**Opening Date:** 2026-08-14  
**Target Runtime Environment:** Windows Desktop + Microsoft Edge + GitHub Desktop

# Purpose

Block 3.9 is the **final Production Package 3 integration block** for **Get Your Reel Ready / Reel & Line Setup**.

It has three required product outcomes:

1. complete the internal Reel Setup workflow with a final **Reel Ready Check**,
2. hand the completed user into the existing **Rig Guide**, and
3. make the existing Knot Guide task **Attach Line to a Reel** the normal production entry to Reel Setup so DevTools is no longer required.

Package 3 is not complete if any one of these outcomes is missing.

# Authoritative Base

Block 3.9 opens from verified GitHub `main` after the Block 3.8 closeout.

Base commit:

`df297129bd5031d5bd03e468e7508c6b2d6556d8`

Current runtime-validated source / validator blobs:

```text
08cc5fa37738a429a4f1b75e251337075cf1016d  script.js
ba3cc052e863916d7cc75422ff3c28abf977d222  data/reel-guidance.js
bb00971da052a94fc1ba5f8a1d1f5718a5badd59  tools/validate_knot_package_3.py
07de0a2d71ac14dae3a5752a999dd97c27632360  forest-journal.css
e942e2a217266255d79290084022316bdd5f2546  index.html
7823799e6a98cea6920ad2fd964f11e99904c121  data/knot-guidance.js
```

Blocks 3.2 through 3.8 are **PASS / VALIDATED** and remain the regression baseline.

# Final Version 1 User Flow

After Block 3.9, the required Package 3 path is:

```text
Dashboard
→ Knots
→ Attach Line to a Reel
→ Get Your Reel Ready
→ Setup Mode
→ Reel Type
→ Line Choice
→ Target Fish / Starting Strength
→ Reel & Rod Compatibility
→ Backing
→ Spool Connection Plan
→ Spool the Reel
→ Leader Setup
→ Reel Ready Check
→ My Reel Is Ready — Choose a Rig
→ Rig Guide
```

A normal user must be able to complete this path without running `openReelSetup()` manually in DevTools.

# 1. Reel Ready Check

## Workflow Step

Add the final Reel Setup step:

```text
REEL_READY_CHECK = "reel-ready-check"
```

The existing **Next — Reel Ready Check** card on Leader Setup becomes enabled and transitions to this step.

Previous navigation:

```text
Reel Ready Check → Leader Setup
```

Back navigation is review-only and preserves existing selections.

## Setup Summary

Do not create a second competing setup-summary component.

The validated **SELECTED CHOICES** treatment remains the final summary of:

```text
Setup Mode
Reel Type
Line Type
Target Fish
Backing Choice
Leader Choice
```

## Final Physical Checklist

The application cannot physically inspect the reel. The Reel Ready Check is therefore a **user confirmation checklist**, not an automated certification.

Required checklist concepts:

1. line follows the correct reel and rod routing path,
2. line is packed evenly and the spool is not overfilled,
3. spool / backing / main-line connections are secure where applicable,
4. the leader connection is secure when a separate leader was selected,
5. the completed line system still respects the reel and rod limits checked earlier.

Do not duplicate canonical Knot tying instructions.

## No Completion State

Do not add fields such as:

```text
reelReady
setupComplete
reelReadyConfirmed
```

There is no persistent Reel or saved line-system entity in Version 1 to own such a flag. Reaching the final workflow step is sufficient session state.

# 2. Rig Guide Handoff

The first / primary workflow card on Reel Ready Check is:

**My Reel Is Ready — Choose a Rig**

Selecting it must:

1. clear transient Reel Setup state,
2. clear stale detail-navigation context if required by the existing routing implementation,
3. open the normal Rig Guide landing at `ROUTES.RIGS`.

Do not auto-select or recommend a Rig from Reel Setup selections. That would prematurely introduce later recommendation logic such as **What Should I Throw**.

The final screen may retain the established secondary exits:

- **Start Over**,
- **Return to Knots**.

The sticky Previous control remains the normal way to review Leader Setup; do not add redundant upstream-change cards.

# 3. Production Entry Integration

## Approved Entry Point

The existing Knot Guide task:

**Attach Line to a Reel**

is the single production landing entry to Reel Setup. There is no separate **Get Your Reel Ready** Knot landing card.

The exact task ID is:

```text
attach-line-to-reel
```

Required routing:

```text
Knot Guide
→ Attach Line to a Reel
→ openReelSetup()
→ ROUTES.REEL_SETUP
→ Get Your Reel Ready
```

Only `attach-line-to-reel` is intercepted. Every other Knot task keeps the existing task-browse behavior.

Conceptual boundary:

```js
if (taskId === "attach-line-to-reel") {
    openReelSetup();
    return;
}

// Existing Knot task-browse behavior for all other tasks.
```

This is architecture guidance. Implementation must still begin from the latest authoritative `script.js` on GitHub.

## Remove Temporary Browse Placeholder

The current temporary `attach-line-to-reel` task-browse path displays **Get Your Reel Ready** while still showing Knot records and placeholder text that the full guided workflow will arrive later.

Block 3.9 removes that obsolete production behavior.

After Block 3.9:

- clicking **Attach Line to a Reel** opens Reel Setup directly,
- the temporary Arbor/Uni browse page is not shown first,
- placeholder language saying the guided workflow arrives later is removed,
- no separate **Get Your Reel Ready** landing card is added,
- `data/knot-guidance.js` keeps the existing task definition/search vocabulary unless implementation proves a genuine correction is required.

# Architecture / State Boundary

Ownership remains:

- `data/reel-guidance.js` — final Reel Ready step/checklist Decision Knowledge,
- `script.js` — state, rendering, transitions, task interception, state reset, Rig Guide routing,
- `data/knot-guidance.js` — task vocabulary,
- `data/knots.js` — canonical Knot Reference Knowledge,
- `tools/validate_knot_package_3.py` — static/regression coverage.

Reel Setup session state remains exactly:

```text
stepId
entryMode
reelType
lineType
targetFish
equipmentCheck
backingChoice
leaderChoice
```

Block 3.9 adds no new selection field and no localStorage persistence.

# Existing UX Standards Remain Mandatory

Preserve:

- sticky/floating Previous + Home navigation,
- flat **SELECTED CHOICES** summary,
- compact workflow-card hierarchy,
- inherited Forest Journal multi-color palette,
- progression action first when a page has a clear next action,
- secondary reset/exit/reference treatment,
- selective strong-text emphasis where useful,
- desktop and narrow/mobile usability.

No CSS change is expected unless runtime testing exposes a genuine defect.

# Out of Scope

Do not add:

- automatic Rig recommendation,
- **What Should I Throw** logic,
- lure/presentation optimization,
- casting instruction,
- baitcaster brake/tension tuning,
- persisted Reel Setup history,
- My Tackle integration,
- saved Reel/Rod/Line entities,
- Package 4 Knot media,
- Fish Guide work,
- deferred global/deeper search changes.

# Deferred Search UX Issue — Parking Lot

Carry forward unchanged: scoped Rig/Knot collection searches correctly search only the active collection, but generic examples can suggest terms unavailable inside that scope. Future work should use collection-aware examples, explicit scope cues, and a route to broader/global search.

This affects both Rigs and Knots and is not part of Block 3.9.

# Planned Production Files

Expected changed files:

```text
script.js
data/reel-guidance.js
tools/validate_knot_package_3.py
docs/workstreams/KNOT-PRODUCTION-PACKAGE-3-BLOCK-3.9.md
docs/workstreams/KNOT-PRODUCTION-PACKAGE-3.md
```

Expected unchanged unless implementation proves otherwise:

```text
forest-journal.css
index.html
data/knots.js
data/knot-guidance.js
```

Any change to an expected-unchanged file must be justified before implementation.

# Required Static Validation

The Package 3 validator must guard:

- `REEL_READY_CHECK` registration,
- enabled **Next — Reel Ready Check** transition,
- previous navigation to Leader Setup,
- no new completion/selection state,
- required final checklist concepts,
- Selected Choices remains the setup summary,
- **My Reel Is Ready — Choose a Rig** is available and routes to `ROUTES.RIGS`,
- completion clears Reel Setup state,
- **Attach Line to a Reel** routes directly to `openReelSetup()`,
- other Knot tasks still use Knot Browse,
- obsolete temporary attach-line browse placeholder behavior is removed,
- no separate **Get Your Reel Ready** landing card is introduced,
- Blocks 3.2–3.8 remain regression-safe,
- JavaScript syntax passes.

# Required Runtime Validation

## Step 1 — Blocks 3.2–3.8 Regression

Confirm the full internal Reel Setup path through Leader Setup still behaves exactly as validated.

## Step 2 — Production Entry

From a normal application launch without DevTools:

1. open **Knots**,
2. select **Attach Line to a Reel**,
3. confirm **Get Your Reel Ready** opens directly,
4. confirm the temporary Knot browse placeholder does not appear,
5. confirm other Knot task cards still use their existing browse flows.

## Step 3 — Reel Ready Entry

Complete a valid Reel Setup path and confirm **Next — Reel Ready Check** opens the final step, Back returns to Leader Setup, and Selected Choices remains correct.

## Step 4 — Final Checklist

Validate No Leader and selected-leader paths. Confirm the checklist covers routing, fill/line lay, applicable connection security, conditional leader confirmation, and reel/rod limits without claiming automated certification or duplicating Knot instructions.

## Step 5 — Rig Guide Handoff

Select **My Reel Is Ready — Choose a Rig** and confirm the normal Rig Guide opens, no Rig is auto-selected, Reel Setup state is cleared, and a later Reel Setup entry starts fresh.

## Step 6 — Exit / Navigation Regression

Confirm Start Over, Return to Knots, and Home clear Reel Setup appropriately; workflow-card presentation remains correct; and no application-source JavaScript errors occur.

# Completion Gate

Block 3.9 is complete only when:

1. Reel Ready Check is implemented and runtime validated,
2. Rig Guide handoff is implemented and runtime validated,
3. **Attach Line to a Reel** is the production UI entry to Reel Setup,
4. normal use no longer requires DevTools,
5. all prior Package 3 behavior remains regression-safe,
6. documentation is reconciled and GitHub-integrity verified.

When Block 3.9 closes **PASS / VALIDATED**, Production Package 3 **Get Your Reel Ready** is functionally complete.

Package 4 Knot instructional media remains separate and must not be mixed into Block 3.9.

# Exact Resume Point

**Block 3.9 — OPEN / ARCHITECTURE DEFINED / IMPLEMENTATION NOT STARTED.**

Next session must implement Block 3.9 as one final Package 3 integration block containing all three required behaviors:

1. **Reel Ready Check**,
2. **Rig Guide Handoff**,
3. **Production Entry Integration: Knots → Attach Line to a Reel → `openReelSetup()`**.

Do not split Production Entry Integration into an unspecified later task.

Do not consider Package 3 complete until normal users can enter, complete, and exit the entire Reel Setup workflow through the application UI without DevTools.
