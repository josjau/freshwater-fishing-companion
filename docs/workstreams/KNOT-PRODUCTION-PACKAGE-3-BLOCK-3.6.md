# Knot Production Package 3 — Block 3.6

**Status:** PASS / VALIDATED  
**Milestone:** Knots  
**Package:** Production Package 3  
**Block:** 3.6 — Backing Decision + Spool Attachment / Line-to-Line Knot Handoff Foundation  
**Implementation Date:** 2026-08-13  
**Validation Closeout Date:** 2026-08-14  
**Runtime Environment:** Windows Desktop + Microsoft Edge + GitHub Desktop

# Purpose

Block 3.6 extends the internal **Get Your Reel Ready** workflow from verified reel/rod compatibility into backing selection and canonical Knot handoffs for the spool connection plan.

The block also finalizes Reel Setup navigation so the workflow keeps step-aware previous destinations while using the established floating/sticky application navigation treatment.

The normal Knot landing remains intentionally unwired to Reel Setup until the later Package 3 integration block.

# Delivered Artifacts

Original Block 3.6 package:

`Freshwater-Fishing-Companion-Knot-Production-PACKAGE-3-BLOCK-3.6.zip`

SHA-256:

`b6966b9b817c9d238b588cfb2f5b5bb4ffd66bb91d0bf2a5ff2bfd3cd6aa3e31`

Targeted navigation correction:

`Freshwater-Fishing-Companion-Knot-Production-PACKAGE-3-BLOCK-3.6-NAV-CORRECTION.zip`

SHA-256:

`762f41a54b9f76a5c8bc1ceb1b55d2ca3b1f48fe01811ffc516695e2928147d0`

The correction package contained only:

```text
forest-journal.css
tools/validate_knot_package_3.py
```

No wrapper folder or non-repository package artifact was included.

# GitHub Integrity — PASS

The targeted navigation correction was applied through GitHub Desktop and verified against authoritative GitHub `main`.

Verified `main` commit:

`9b58d0342bcbe620cd3e140e0a6ab2ffe67aa3e0`

Commit message:

`Knots - Production Package 3 - Navigation Fix 3.6`

The commit changed only the two intended files:

```text
812af1d17f44154cb716f41e3490fb3738cd8f09  forest-journal.css
986c2991d7682ab2529393aea50ee7422cafb9e1  tools/validate_knot_package_3.py
```

The Block 3.6 JavaScript and Decision Knowledge remained unchanged during the correction:

```text
8e891108cbb5848ad9dfdc00d61cb5fecd7f4961  script.js
43801c4a23786d6eb0940ef6f593d31a97d518bc  data/reel-guidance.js
```

GitHub commit inspection confirmed no unrelated source changes were included in the navigation correction.

# Reel Setup Navigation — PASS / VALIDATED

The final Reel Setup navigation behavior is:

- first Reel Setup screen: `← Knots` plus `Home`,
- later Reel Setup screens: step-aware previous destination plus `Home`,
- previous destination changes as the workflow advances,
- moving backward only to review preserves current transient selections,
- changing an upstream selection clears dependent downstream state,
- Home exits Reel Setup and clears transient state,
- navigation remains floating/sticky and accessible while scrolling,
- navigation remains separate from the persistent `SELECTED CHOICES` context summary,
- the floating treatment does not obstruct headings, Selected Choices, or cards,
- narrow/mobile emulation keeps the navigation inside the viewport and allows wrapping when needed.

The production correction reuses the existing application navigation treatment by attaching `[data-reel-setup-navigation]` to the same sticky/floating CSS container rules used by `.page-navigation-group`.

No Reel Setup JavaScript navigation semantics were changed by the correction.

# Backing Decision

Block 3.6 adds transient Reel Setup state:

`backingChoice`

Controlled backing choices:

1. `none` — **No Separate Backing**
2. `monofilament-backing` — **Monofilament Backing**
3. `direct-braid-approved` — **Direct Braid — Reel Approved**

The selected backing choice is appended to the persistent `SELECTED CHOICES` summary once confirmed.

## Monofilament / Fluorocarbon Main Line

Validated beginner paths:

- **No Separate Backing** — direct spool attachment path,
- **Monofilament Backing** — optional backing path.

Both advance to **Spool Connection Plan**.

## Braid Main Line

Braid does not receive a generic **No Separate Backing** option.

Validated paths:

- **Monofilament Backing** — advances to Spool Connection Plan,
- **Direct Braid — Reel Approved** — advances only under the explicit braid-ready/manufacturer-approved equipment guard,
- **Review Reel Markings First** — returns to the reel-capacity guidance when braid-ready attachment cannot be confirmed.

The application does not infer braid-readiness from reel size, reel type, or brand alone.

# Spool Connection Plan

After backing selection, Reel Setup presents a **Spool Connection Plan**.

## No Separate Backing

For Monofilament or Fluorocarbon:

- canonical **Arbor Knot** is used for main line → reel spool,
- Reel Setup does not duplicate Arbor Knot tying instructions.

Runtime result: **PASS**.

## Monofilament Backing

The plan uses:

1. canonical **Arbor Knot** for monofilament backing → reel spool,
2. canonical **Double Uni Knot** for monofilament backing → selected main line.

Reel Setup owns only the contextual recommendation and sequence. Canonical Knot records continue to own the tying instructions.

Runtime result: **PASS**.

## Direct Braid — Reel Approved

No generic spool Knot is prescribed.

The workflow tells the user to follow the exact reel manufacturer's approved direct-braid attachment method. The generic Arbor Knot is not presented as a direct-braid spool knot.

Runtime result: **PASS**.

# Knot Detail Context Handoff — PASS

Block 3.6 extends the existing detail-navigation stack to support Reel Setup.

Validated flow:

```text
Spool Connection Plan
→ View Arbor Knot / View Double Uni Knot
→ canonical Knot detail
→ ← Spool Connection Plan
→ exact prior Reel Setup state restored
```

The Reel Setup state snapshot is stored only in transient JavaScript navigation context.

Runtime validation confirmed the exact **Spool Connection Plan** return destination and preserved Selected Choices for both Arbor Knot and Double Uni Knot handoffs.

No canonical Knot content is duplicated into `data/reel-guidance.js`.

# Technical Source Basis

Block 3.6 guidance is original Freshwater Fishing Companion Decision Knowledge checked against current manufacturer material.

Primary references:

- Daiwa — 2026 BG SW Spinning: official product guidance describes a gasket-lined braid-ready spool that provides secure braid attachment and eliminates the need for monofilament backing on that equipment.  
  `https://daiwa.us/collections/spin-reels/products/2026-bg-lt-spinning-copy`
- Daiwa — 2026 BG LT Spinning: official product guidance describes a braid-ready gasket that eliminates the need for braid backing while also supporting monofilament or fluorocarbon attachment.  
  `https://daiwa.us/collections/spin-reels/products/bg-copy`
- Shimano — Setting Up A Light Soft Plastic Outfit: Shimano describes using a short length of monofilament backing before braid to pad/fill a spool in a light spinning setup.  
  `https://fish.shimano.com/en-AU/content/c/Articles/squidgies-articles/setting-up-a-light-soft-plastic-outfit.html`
- Canonical Freshwater Fishing Companion Arbor Knot record: limits generic direct braid on a smooth spool and directs the user to manufacturer spool guidance or an appropriate backing system.
- Canonical Freshwater Fishing Companion Double Uni Knot record: owns the approved line-to-line tying instructions used when monofilament backing is joined to the selected main line.

The app therefore treats direct braid as **equipment-specific**, while monofilament backing remains the safer generic beginner recommendation when braid attachment cannot be verified.

# Static Validation — PASS

The final Block 3.6 validator requires the Reel Setup navigation to be step-aware and sticky/floating.

Validated output target:

```text
Production Package 3 Block 3.6 validation passed.
Backing choices: 3
Reel Setup navigation: step-aware and sticky/floating.
Canonical Knot handoffs: Arbor Knot and Double Uni Knot.
Reel Setup Knot return context: exact step/state restoration enabled.
Normal Knot landing remains intentionally unwired to Reel Setup.
```

The validator also retains the existing semantic checks for:

- backing decision knowledge,
- canonical Arbor Knot and Double Uni Knot handoffs,
- no generic Arbor Knot direct-braid handoff,
- Selected Choices flat treatment,
- exact Reel Setup return context,
- intentionally unwired normal Knot landing,
- JavaScript syntax for `script.js` and `data/reel-guidance.js`.

# Runtime Validation — PASS

Microsoft Edge runtime validation was completed on 2026-08-14.

## Step 1 — Reel Setup Navigation

**PASS**

Confirmed:

- first screen `← Knots` + `Home`,
- step-aware later-screen previous destinations,
- previous navigation changes the workflow step,
- review navigation preserves current selections,
- changing upstream choices clears dependent downstream state,
- sticky/floating behavior while scrolling,
- no content obstruction on desktop,
- narrow/mobile emulation remains usable,
- Home clears transient Reel Setup state.

## Step 2 — Backing Decision

**PASS**

Confirmed Monofilament/Fluorocarbon and Braid paths, including the direct-braid equipment guard and Review Reel Markings First branch.

## Step 3 — Canonical Knot Handoffs

**PASS**

Confirmed:

- No Separate Backing → Arbor Knot,
- Monofilament Backing → Arbor Knot + Double Uni Knot,
- Direct Braid — Reel Approved → no generic Arbor Knot direct-braid handoff.

## Step 4 — Exact Return Context

**PASS**

Confirmed canonical Knot detail returns to **Spool Connection Plan** with all Reel Setup selections intact.

## Step 5 — Regression

**PASS**

Confirmed:

- Block 3.5 equipment compatibility remains intact,
- Selected Choices retains the approved flat treatment,
- Spincast + Braid warning remains intact,
- Braid fish-strength-reference boundary remains intact,
- normal Knot landing remains intentionally unwired,
- no application-source JavaScript errors were reported.

# Next Checkpoint

The Spool Connection Plan ends at:

**Next — Spool the Reel — Coming Soon**

The next Package 3 block is:

**Block 3.7 — Reel-Specific Spooling Instructions**

Block 3.7 will add reel-specific guidance for:

- line routing,
- winding direction where relevant,
- winding tension,
- spool-fill guidance.

Block 3.7 must begin from the latest verified GitHub `main` source state and preserve all Block 3.6 validation results.

# Exact Resume Point

**Block 3.5 is PASS / VALIDATED.**

**Block 3.6 is PASS / VALIDATED.**

Production Package 3 remains active.

Next build block:

**Block 3.7 — Reel-Specific Spooling Instructions**.
