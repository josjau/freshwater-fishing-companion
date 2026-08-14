# Knot Production Package 3 — Block 3.5

**Status:** Implemented / Unvalidated  
**Milestone:** Knots  
**Package:** Production Package 3  
**Block:** 3.5 — Reel/Rod Compatibility + How to Read Your Reel  
**Date:** 2026-08-13

# Purpose

Block 3.5 extends the internal **Get Your Reel Ready** workflow from target-fish line-strength guidance into an equipment compatibility checkpoint.

The block also carries forward and implements the Selected Choices visual refinement identified after Block 3.4 runtime validation.

The production **Attach Line to a Reel** Knot entry remains intentionally unwired until the later Package 3 integration block.

# Delivered Artifact

`Freshwater-Fishing-Companion-Knot-Production-Package-3-Block-3.5.zip`

SHA-256:

`980abc8d0d309b79992e8455b9896e29d3319f2163feb36d5755f41690a9d482`

Expected post-upload Git blobs:

```text
c30e051284aa22eb773159f958cfd7255de64e43  script.js
5f03e44039ffc92b823250ad77e997d246c6a8da  data/reel-guidance.js
4ee67c575ad2a1d34f8951cce65ce55581914aea  tools/validate_knot_package_3.py
```

# Carried-Forward Selected Choices Refinement

The Block 3.4 runtime review found the Selected Choices values too large and the summary container too card-like, especially under mobile emulation.

Block 3.5 changes the treatment to a flatter at-a-glance visual language modeled on the established Knot **Best For / Where You'll Use It** section rather than on dashboard cards.

Implemented changes:

- `SELECTED CHOICES` heading remains `.78rem`.
- selected-value text is reduced from `1.03rem` to `.78rem` so heading and values use the same font size.
- heading remains `--text-subtle`.
- selected values retain the Knot accent mix and stronger weight, so heading and values do not share the same coloration.
- the elevated/tinted background is removed.
- rounded-card styling is removed.
- left card-accent border is removed.
- the region now uses simple top and bottom divider lines with flat vertical spacing.
- cumulative values retain `overflow-wrap: anywhere` protection.

This remains one reusable `renderReelSetupSelectedChoices()` implementation across the workflow.

# Reel Type — I'm Not Sure Completion

The earlier Reel Type **I'm Not Sure** choice is now completed as an actual recognition path instead of storing `not-sure` as if it were a resolved reel type.

Selecting **I'm Not Sure** now opens:

**Which Reel Matches Yours?**

The user is shown the established physical cues for:

- Spinning Reel,
- Spincast Reel,
- Baitcasting Reel.

The unresolved help action is not added to the persistent Selected Choices summary. Once the user identifies an actual reel type, that resolved reel type becomes the persistent selection and downstream line/target/equipment state is rebuilt from it.

# Equipment Compatibility Flow

Block 3.5 enables the previously unavailable transition from **Starting Line Strength**:

```text
Starting Line Strength
    ↓
Next — Check Reel & Rod Compatibility
    ↓
Check Your Reel & Rod
```

The Equipment Check page provides four paths:

1. **How to Read Your Reel**
2. **How to Read Your Rod**
3. **My Reel & Rod Support This Setup**
4. **Something Doesn't Match / I'm Not Sure**

The workflow does not attempt to infer compatibility from a generic reel-size number or from the target-fish recommendation alone. The user confirms compatibility against the markings or official specifications for the actual reel and rod.

# How to Read Your Reel

The Reel guide explains:

- capacity markings pair a line size with the approximate line length the spool holds,
- a format such as `8 lb / 140 yd` or `8-140` represents a strength/capacity pairing when the heading is pounds/yards,
- manufacturer order can differ; `120 yd / 10 lb` is a valid yards-first / pounds-second format,
- metric capacity can be shown as line diameter and length, for example `0.25 mm / 160 m`,
- separate Mono and Braid capacity listings must be interpreted using the selected line type,
- reel numbers such as `1000`, `2500`, or `3000` are reel size/model families rather than direct pound-test ratings.

# How to Read Your Rod

The Rod guide explains:

- look for **Line Wt**, **Line**, or **Line Rating** on the rod or official model specification,
- a marking such as `6-12 lb` is the rod model's line-strength range,
- do not confuse line rating with **Lure Wt**, which may appear separately as a range such as `1/4-5/8 oz`,
- the final line system should fit both the rod's line rating and the reel's capacity guidance,
- if markings are missing or unreadable, use the exact model number and official manufacturer specification before spooling.

# Mismatch Behavior

If the reel or rod guidance does not support the intended line system, the workflow goes to **Pause Before Spooling** rather than allowing the user to continue by assumption.

The adjustment path supports:

- reviewing reel markings,
- reviewing rod markings,
- changing target fish,
- changing line type,
- changing reel type,
- returning to the compatibility check,
- starting over.

Changing an upstream selection clears dependent downstream compatibility state.

# Compatible Behavior

When the user confirms that the actual reel and rod support the intended line system, session state records:

`equipmentCheck = "compatible"`

The workflow advances to **Equipment Compatibility Check** and stops at the next Package 3 checkpoint:

**Next — Decide on Backing** — Coming Soon

The compatibility result is not appended to Selected Choices because it is a validation outcome rather than a user-selected setup attribute.

# Technical Source Basis

Block 3.5 guidance is original Freshwater Fishing Companion Decision Knowledge checked against current manufacturer specifications and support material.

Primary references:

- Shimano — Sahara FJ: reel sizes are listed independently from Mono and PowerPro line-capacity columns; for example the 2500 model lists Mono `8-140, 10-120` and PowerPro `10-150, 15-145, 30-100`.  
  `https://fish.shimano.com/en-US/product/reels/spinning/frontdrag/a075f00003iili7qam.html`
- Shimano — Sustain FK: official specifications show both `LB-YD` and `MM-M` capacity formats.  
  `https://fish.shimano.com/en-GB/product/reels/spinning/frontdrag/a075f00003slwyhqac.html`
- Zebco — 33 Platinum Spincast Reel: official specifications label Mono capacity as **Yards/Lbs** and show `120/10`, while Braid capacity is separately listed as `110/30`.  
  `https://www.zebco.com/en/shop/reels/33pltreel`
- Zebco — Spincast Reels troubleshooting: braided line may not work with some spincast reels, reinforcing the need to use model-specific guidance.  
  `https://www.zebco.com/en/troubleshooting/spincast-reels`
- St. Croix — X-Trek Freshwater: official rod specifications separately list **Line Weight (lb.)** and **Lure Weight (oz.)**, including examples such as `6-12` line weight and `1/4-5/8` lure weight.  
  `https://stcroixrods.com/collections/freshwater/products/x-trek-freshwater`

The statement that size identifiers such as `1000` or `2500` are not direct pound-test ratings is a project inference from manufacturer specification tables that list the reel size/model separately from line-capacity values.

# State Ownership

Reel Setup transient state now includes:

```text
entryMode
reelType
lineType
targetFish
equipmentCheck
```

State rules:

- unresolved **I'm Not Sure** reel help does not become a stored reel type,
- selecting a resolved Reel Type clears downstream Line Type, Target Fish, and Equipment Check state,
- changing Line Type clears Target Fish and Equipment Check state,
- changing Target Fish clears Equipment Check state,
- compatibility confirmation sets `equipmentCheck = "compatible"`,
- Start Over clears all Reel Setup state.

# Static Validation

Validated output:

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

`node --check` passes for:

- `script.js`
- `data/reel-guidance.js`

# Runtime Validation Order

After GitHub integrity verification, Microsoft Edge validation should run in this order.

## Step 1 — Carried-Forward Selected Choices Visual Refinement

Check normal desktop width and mobile device emulation.

Confirm:

- heading and values use the same font size,
- heading and values use different colors,
- values remain the stronger visual element through color/weight,
- no tinted/elevated card background remains,
- no rounded-card appearance remains,
- the simple divider treatment reads like an at-a-glance/context section,
- cumulative selections wrap cleanly.

## Step 2 — Reel Type I'm Not Sure

Confirm **I'm Not Sure** opens **Which Reel Matches Yours?**, preserves setup mode, does not add unresolved `I'm Not Sure` to Selected Choices, and requires one of the three actual reel types before line selection continues.

## Step 3 — Equipment Reading Guides

Validate **How to Read Your Reel** and **How to Read Your Rod**, including the capacity/order/unit examples and the distinction between rod line weight and lure weight.

## Step 4 — Compatibility Branches

Validate both:

- **My Reel & Rod Support This Setup** → Equipment Compatibility Check,
- **Something Doesn't Match / I'm Not Sure** → Pause Before Spooling.

Confirm upstream changes clear dependent compatibility state correctly.

## Step 5 — Braid Boundary / Regression

Confirm the existing Braid fish-strength-reference behavior remains intact, Spincast+Braid compatibility warning remains intact, Package 2 Knot behavior is unchanged, and no application-source JavaScript errors appear.

# Exact Resume Point

Block 3.5 is **Implemented / Unvalidated**.

After upload:

1. verify the three package blobs against GitHub `main`,
2. run Block 3.5 runtime validation beginning with the Selected Choices visual refinement,
3. if passed, document Block 3.5 as PASS / VALIDATED,
4. then begin the next Package 3 block: **Backing Decision + Spool Attachment / Line-to-Line Knot Handoff foundation**.
