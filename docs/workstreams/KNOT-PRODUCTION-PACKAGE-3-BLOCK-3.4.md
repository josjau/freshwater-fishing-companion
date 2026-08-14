# Knot Production Package 3 — Block 3.4

**Status:** Runtime PASS / Selected-Choices Visual Refinement Staged for Next Block  
**Milestone:** Knots  
**Package:** Production Package 3  
**Block:** 3.4 — Target Fish / Starting Pound-Test Guidance  
**Date:** 2026-08-13

# Purpose

Block 3.4 extends the internal **Get Your Reel Ready** workflow with beginner target-fish guidance and a starting line-strength reference while carrying forward the approved persistent **SELECTED CHOICES** context treatment.

The production **Attach Line to a Reel** Knot entry remains intentionally unwired until the later Package 3 integration block.

# Block 3.4 Runtime Result

**Result:** PASS

Microsoft Edge runtime validation confirmed:

- the persistent Selected Choices summary appears only after the first persistent selection,
- setup mode, reel type, line type, and target fish accumulate correctly,
- Help / Not Sure actions do not become persistent selections,
- all six target-fish profiles render,
- all approved starting ranges and Easy beginner choices render correctly,
- Braid uses a fish-strength reference rather than pretending the species value is a final braid purchase size,
- upstream selection changes clear dependent downstream state correctly,
- Start Over clears the complete transient Reel Setup state,
- the normal Knot landing remains intentionally unwired to Reel Setup,
- no application-source JavaScript error was reported.

# Persistent Selected Choices — Current Behavior

The selected-choice summary applies across the Reel Setup workflow after the first persistent choice.

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

Implementation rules remain:

- one reusable `renderReelSetupSelectedChoices()` helper owns the treatment,
- `renderReelSetupStep()` applies it consistently to existing and future Reel Setup steps,
- only persistent workflow selections are displayed,
- temporary help/navigation actions are excluded,
- **Start Over** clears the summary because it clears the transient Reel Setup state,
- dynamic values are written with `textContent`,
- selected values may wrap rather than overflow.

# Selected-Choices Visual Refinement — Staged for Next Block

Desktop and Edge mobile-emulation review found the current selected-value typography too large and the current container too card-like.

The next production block must carry the following refinement before adding further Reel Setup decisions.

## Typography

- Reduce the selected-values text from `1.03rem` to the **same font size used by the `SELECTED CHOICES` heading**.
- The heading and selected values must **not use the same color**.
- Keep `SELECTED CHOICES` as the quieter structural label using the existing subtle/muted theme text treatment.
- Keep the selected values visually stronger through the established Knot accent color treatment and/or font weight rather than larger type.
- Preserve wrapping for long cumulative selections.

## Structure / Visual Treatment

The Selected Choices region must **not look like a dashboard card or nested card**.

Use the established Knot detail **Best For / Where You'll Use It** area as the visual reference. The authoritative implementation uses:

- one section-level treatment,
- flat internal content groups,
- spacing and divider lines for structure,
- no separate rounded card around each internal group.

For Reel Setup Selected Choices, the intended direction is therefore:

- flat contextual section,
- no separate elevated background fill,
- no rounded card-style container,
- no shadow,
- no dashboard-card treatment,
- modest vertical spacing,
- a simple divider/border treatment consistent with the application's at-a-glance sections,
- Knot accent reserved for the actual selected-value text or a restrained accent detail,
- heading remains visually distinct from values by color rather than size.

Do not duplicate the full Knot detail component or make Reel Setup depend on Knot detail markup. Reuse the **visual language**, not the component ownership.

## Validation Requirement

This refinement is rolled into the next Package 3 production block under the Incremental Refinement Workflow.

Runtime validation for the next block must begin with:

**Step 1 — Selected Choices Visual Refinement**

Confirm in both normal desktop width and Edge device emulation:

1. `SELECTED CHOICES` and the selected-value text use the same font size.
2. Heading and values use clearly different colors.
3. Selected values remain more prominent through color/weight, not larger type.
4. The region reads like a flat at-a-glance/context section rather than a card.
5. No shadow, rounded-card appearance, or elevated-card background remains.
6. Cumulative values wrap cleanly as additional Reel Setup selections are added.
7. The selected-choice summary remains present on every applicable Reel Setup step after the first persistent selection.

Only after Step 1 passes should the new functionality in the next block be validated.

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

The Package 3 validator checks:

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

Validated output:

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

# Next Build Block

Begin the next Package 3 block:

**Reel/Rod Compatibility + How to Read Your Reel**

The block must include the staged Selected Choices visual refinement described above in the same production package.

# Exact Resume Point

Block 3.4 is **PASS / VALIDATED**.

The next Package 3 block should:

1. apply the staged Selected Choices visual refinement,
2. implement Reel/Rod Compatibility + How to Read Your Reel,
3. keep the production Knot landing unwired until the later integration block,
4. validate the selected-choice visual refinement first,
5. then validate the new compatibility guidance.
