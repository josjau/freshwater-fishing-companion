# Knot Production Package 3 — Block 3.4

**Status:** Implemented / Unvalidated  
**Milestone:** Knots  
**Package:** Production Package 3  
**Block:** 3.4 — Target Fish / Starting Pound-Test Guidance  
**Date:** 2026-08-13

# Purpose

Block 3.4 extends the internal **Get Your Reel Ready** workflow with beginner target-fish guidance and a starting line-strength reference while carrying forward the approved persistent **SELECTED CHOICES** context treatment.

The production **Attach Line to a Reel** Knot entry remains intentionally unwired until the later Package 3 integration block.

# Carried-Forward UX — Persistent Selected Choices

The selected-choice summary now applies across the Reel Setup workflow after the first persistent choice rather than appearing only at **Line Choice Check**.

Expected progression:

```text
Get Your Reel Ready
(no selected-choice summary yet)

What Kind of Reel Do You Have?
SELECTED CHOICES
New or Empty Reel

What Line Are You Using?
SELECTED CHOICES
New or Empty Reel · Spinning Reel

Line Choice Check
SELECTED CHOICES
New or Empty Reel · Spinning Reel · Monofilament

Starting Line Strength
SELECTED CHOICES
New or Empty Reel · Spinning Reel · Monofilament · Bass
```

Implementation rules:

- one reusable `renderReelSetupSelectedChoices()` helper owns the treatment,
- `renderReelSetupStep()` applies it consistently to existing and future Reel Setup steps,
- only persistent workflow selections are displayed,
- temporary help/navigation actions are excluded,
- **Start Over** clears the summary because it clears the transient Reel Setup state,
- dynamic values are written with `textContent`,
- selected values may wrap rather than overflow.

## UI Scaling Watch

The selected-value text currently retains the approved `1.03rem` presentation from the first UX revision and uses `overflow-wrap: anywhere` as a safety guard.

As additional selections accumulate in later Package 3 blocks, evaluate the summary on desktop and mobile. If the summary becomes visually dominant or wraps poorly, adjust the value typography or layout using the existing theme palette. Do not reduce readability preemptively; make the adjustment from observed runtime behavior.

# Block 3.4 Target Profiles

Six beginner target profiles are implemented:

1. **All-Around Freshwater** — Recommended starting range `6–12 lb`; Easy beginner choice `8 lb`.
2. **Panfish — Bluegill & Crappie** — Recommended starting range `4–6 lb`; Easy beginner choice `6 lb`.
3. **Trout** — Recommended starting range `2–4 lb`; Easy beginner choice `4 lb`.
4. **Bass** — Recommended starting range `6–8 lb`; Easy beginner choice `8 lb`.
5. **Walleye** — Recommended starting range `6–10 lb`; Easy beginner choice `8 lb`.
6. **Catfish** — Recommended starting range `17–20 lb`; Easy beginner choice `20 lb` for a heavier general rod-and-reel path.

These are beginner starting references, not universal requirements. Cover, current, technique, fish size, and specialized tackle can require materially different line strengths.

# Braid Handling Rule

Block 3.4 does not pretend that a mono/fluoro-style pound-test recommendation translates directly into the best braid purchase size.

When Braid is the selected line type:

- the target profile is presented as a **Recommended fish-strength reference**,
- the numeric **Easy beginner choice** is not presented as the final braid purchase size,
- the workflow explains that braid has a substantially smaller diameter at a given breaking strength,
- final braid test is deferred to the next reel/rod compatibility step.

This prevents false precision before the actual equipment markings are considered.

# Technical Source Basis

Block 3.4 is original Freshwater Fishing Companion Decision Knowledge synthesized from authoritative freshwater-fishing guidance.

Primary references:

- Missouri Department of Conservation — Fishing Gear: all-around medium-light equipment and 8-pound monofilament beginner starting point.  
  `https://mdc.mo.gov/fishing/get-started-fishing/fishing-gear`
- Missouri Department of Conservation — Sunfish: Tips for Bluegill Fishing: 2- to 6-pound line guidance.  
  `https://mdc.mo.gov/fishing/species/sunfish/sunfish-tips-bluegill-fishing`
- Missouri Department of Conservation — Crappie: King of Spring: 4- to 6-pound line guidance.  
  `https://mdc.mo.gov/magazines/conservationist/2014-04/crappie-king-spring`
- Missouri Department of Conservation — Missouri Trout Fishing: 2- to 4-pound line guidance.  
  `https://mdc.mo.gov/magazines/conservationist/2014-03/missouri-trout-fishing-its-easy-get-hooked`
- Missouri Department of Conservation — Learning About Largemouth: 6- to 8-pound beginner bass setup guidance.  
  `https://mdc.mo.gov/magazines/conservationist/2015-07/learning-about-largemouth`
- Minnesota Department of Natural Resources — How to Catch a Walleye: 6- to 10-pound line guidance.  
  `https://www.dnr.state.mn.us/gofishing/how-catch-walleye.html`
- Missouri Department of Conservation — Get the Drift: 17- to 20-pound rod-and-reel catfish guidance for a heavier setup.  
  `https://mdc.mo.gov/magazines/conservationist/2012-08/get-drift`
- Berkley — Freshwater Line Guide: line-strength context, line/reel system compatibility, and braid diameter/break-strength differences.  
  `https://www.berkley-fishing.com/blogs/news/berkley-freshwater-line-guide`

The Panfish `4–6 lb` range is a deliberate overlap of the authoritative Bluegill and Crappie guidance rather than a claim that every panfish situation requires that range.

The All-Around `6–12 lb` range is project-defined beginner Decision Knowledge within the broader official beginner equipment guidance, with `8 lb` retained as the easy starting reference.

# Runtime Flow Added

After **Line Choice Check**:

```text
Continue — Choose Target Fish
    ↓
What Are You Fishing For?
    ↓
Starting Line Strength
```

The **Starting Line Strength** checkpoint intentionally stops before equipment compatibility. The next Package 3 block will implement the actual reel/rod compatibility and **How to Read Your Reel** guidance.

# State Ownership

Reel Setup transient state now includes:

```text
entryMode
reelType
lineType
targetFish
```

Changing an upstream persistent selection clears dependent downstream state:

- changing Reel Type clears Line Type and Target Fish,
- changing Line Type clears Target Fish,
- changing Target Fish preserves Reel and Line selections,
- Start Over clears all Reel Setup selections.

# Static Validation

The Package 3 validator now checks:

- 2 setup modes,
- 4 reel types,
- 3 physical line types,
- 2 line-guidance actions,
- 4 reel-type beginner line recommendations,
- 6 target-fish profiles,
- all six approved starting ranges,
- persistent Selected Choices helper behavior and theme treatment,
- safe wrapping protection for accumulating selections,
- target-fish and Starting Line Strength renderers,
- separate braid strength-reference wording,
- the next-block equipment compatibility checkpoint,
- JavaScript syntax,
- no public Knot landing wiring to Reel Setup yet.

Expected validator output:

```text
Production Package 3 Block 3.4 validation passed.
Entry options: 2
Reel types: 4
Physical line types: 3
Line guidance actions: 2
Beginner reel recommendations: 4
Target-fish profiles: 6
Persistent Selected Choices summary: enabled after first persistent choice.
Normal Knot landing remains intentionally unwired to Reel Setup.
```

# Runtime Validation Order

After GitHub integrity verification, Microsoft Edge validation should run in this order:

## Step 1 — Carried-Forward Persistent Context

Validate the cumulative **SELECTED CHOICES** summary from setup mode through target fish, including Help / Not Sure screens, change-selection behavior, Start Over, wrapping/readability, and visual prominence.

## Step 2 — Target-Fish Guidance

Validate all six target cards, their starting ranges, Easy beginner choice wording, and target-selection state behavior.

## Step 3 — Braid Boundary

Validate that Braid uses **Recommended fish-strength reference** wording and explicitly defers the final braid test until equipment compatibility rather than treating the species-based Easy beginner choice as a final purchase size.

## Step 4 — Regression

Confirm existing Package 3 line-selection behavior and validated Package 2 Knot behavior remain intact with no application-source JavaScript errors.

# Exact Resume Point

Block 3.4 is **Implemented / Unvalidated**.

After upload:

1. verify package blobs against GitHub `main`,
2. run Block 3.4 runtime validation beginning with persistent Selected Choices,
3. if passed, document Block 3.4 as PASS / VALIDATED,
4. then begin the next Package 3 block: **Reel/Rod Compatibility + How to Read Your Reel**.
