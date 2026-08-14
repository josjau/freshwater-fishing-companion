# Knot Production Package 3 — Block 3.7

**Status:** Implemented / Static Validation PASS / Runtime Unvalidated  
**Milestone:** Knots  
**Package:** Production Package 3  
**Block:** 3.7 — Reel-Specific Spooling Instructions  
**Implementation Date:** 2026-08-14  
**Target Runtime Environment:** Windows Desktop + Microsoft Edge + GitHub Desktop

# Purpose

Block 3.7 extends the validated internal **Get Your Reel Ready** workflow from **Spool Connection Plan** into reel-specific instructions for physically loading line onto the reel.

The block covers:

- line routing before winding,
- winding direction where the reel type and line behavior require it,
- incoming-line tension while winding,
- spool-fill guidance,
- manufacturer-specific override guidance when an exact reel requires a different procedure.

The normal Knot landing remains intentionally unwired to Reel Setup. Canonical Knot instructions remain owned by canonical Knot Reference Knowledge.

# Authoritative Base

Block 3.7 was built from GitHub `main` after the Block 3.6 closeout.

Base commit:

`748b64ea40990c2d9160530c354ea72e0e1bf944`

Base source blobs:

```text
8e891108cbb5848ad9dfdc00d61cb5fecd7f4961  script.js
43801c4a23786d6eb0940ef6f593d31a97d518bc  data/reel-guidance.js
986c2991d7682ab2529393aea50ee7422cafb9e1  tools/validate_knot_package_3.py
```

Block 3.7 does not modify `forest-journal.css`, `index.html`, canonical Knot data, or the normal Knot landing.

# Architecture

The existing Package 3 architecture is preserved.

- `data/reel-guidance.js` owns reel-specific spooling Decision Knowledge.
- `script.js` owns Reel Setup rendering, navigation, and transitions.
- `tools/validate_knot_package_3.py` validates the new Block 3.7 behavior while retaining the Block 3.6 regression guards.

No new Reel Setup selection field is added for spooling instructions.

The transient state remains:

```text
stepId
entryMode
reelType
lineType
targetFish
equipmentCheck
backingChoice
```

Spooling is instructional workflow state, not an additional user choice.

# Workflow Extension

Block 3.7 adds:

`SPOOLING_INSTRUCTIONS = "spooling-instructions"`

The validated Block 3.6 flow now continues:

```text
Do You Need Backing?
    ↓
Spool Connection Plan
    ↓
Next — Spool the Reel
    ↓
Spool the Reel
```

The existing **Next — Spool the Reel** action is enabled.

The new spooling step uses the existing:

- sticky/floating Reel Setup navigation,
- step-aware previous destination,
- persistent `SELECTED CHOICES` summary,
- Home reset behavior,
- Start Over behavior.

Its previous-step navigation returns to:

`← Spool Connection Plan`

# Physical Sequence Boundary

**Spool Connection Plan** remains the connection-planning step. Block 3.7 explicitly prevents the new physical instructions from implying an unsafe or impossible order.

Before making a spool connection that would trap the line, the user is told to route the line through the required reel-specific path first. Depending on reel type, that can include:

- the first rod guide and open bail on a spinning reel,
- the front-cover opening on a spincast reel,
- the reel line guide on a baitcasting reel.

The canonical Arbor Knot / Double Uni Knot handoffs remain unchanged. Block 3.7 does not duplicate their tying instructions.

# Reel-Specific Spooling Decision Knowledge

Block 3.7 adds `REEL_SPOOLING_GUIDANCE` with exactly three V1 profiles.

## Spinning Reel

The Spinning profile instructs the user to:

- route line through the first rod guide before final spool attachment,
- open the bail before securing line to the spool and close it before winding,
- for monofilament/fluorocarbon, begin with the filler spool oriented so line comes off counterclockwise,
- pause after roughly 15 handle turns and reverse the filler spool if line twist appears,
- recognize that braid does not use the same memory-direction check,
- maintain steady incoming-line pressure,
- stop around `1/8 inch` below the spool lip,
- follow exact model instructions if the reel manufacturer specifies a different method or fill level.

## Spincast Reel

The Spincast profile instructs the user to:

- remove the front cover using the method appropriate to the exact reel,
- pass line through the front-cover opening before final spool attachment,
- reinstall the cover for normal winding,
- preserve the existing warning that braid may not work correctly on some spincast reels,
- wind slowly under light, steady incoming-line tension,
- periodically remove the cover to inspect the hidden spool,
- stop around `1/8 inch` below the top of the spool,
- defer to exact model-specific cover/routing/fill instructions when they differ.

## Baitcasting Reel

The Baitcasting profile instructs the user to:

- route line through the rod guides and the reel's line guide before spool attachment,
- keep the filler spool upright so line feeds from the top toward the reel,
- apply constant, firm pressure so line packs tightly and evenly,
- use a soft cloth/towel when more pressure is required, particularly with braid,
- distinguish **incoming-line winding tension** from the reel's **casting spool-tension knob / braking system**,
- stop around `1/8 inch` below the spool edge or at the exact manufacturer's fill mark,
- defer to model-specific attachment/feed/fill instructions when required.

Block 3.7 does not add baitcaster brake setup, casting instruction, backlash training, or lure-specific optimization.

# Replacement-Line Path

When `entryMode = replace-existing-line`, the new page adds a reminder to remove the old line completely before beginning the fresh line system.

This is presentation logic only. It does not create another state field.

# Next Checkpoint

The Block 3.7 page ends at a disabled checkpoint:

**Next — Leader Setup**

This only identifies the next planned Package 3 capability from the approved V1 scope. It does not assign a later block number or implement leader decisions in Block 3.7.

# Technical Source Basis

Block 3.7 spooling guidance is Freshwater Fishing Companion Decision Knowledge checked against current manufacturer education/support material.

Primary references:

- Zebco — How to Set up a Spinning Combo  
  `https://www.zebco.com/en/academy/getting-started/how-to-set-up-a-spinning-combo`
- Lew's — How to Spool a Spinning Reel  
  `https://www.lews.com/en/learn/tips/setup-guides/how-to-spool-a-spinning-reel`
- Zebco — Spincast Reels troubleshooting / line replacement  
  `https://www.zebco.com/en/troubleshooting/spincast-reels`
- Lew's — How to Spool a Baitcast Reel  
  `https://www.lews.com/learn/tips/setup-guides/how-to-spool-a-baitcast-reel`

The application intentionally retains its existing canonical Knot choices and backing rules rather than importing manufacturer-specific knot preferences from general educational articles.

# Static Validation — PASS

The Block 3.7 Package 3 validator retains all existing Block 3.6 checks and adds validation for:

- `SPOOLING_INSTRUCTIONS` step registration,
- the spooling renderer and Decision Knowledge lookup,
- exactly three spooling profiles: Spinning, Spincast, Baitcasting,
- spinning bail order and mono/fluoro twist check,
- spincast front-cover routing and braid guard,
- baitcasting reel line-guide routing,
- baitcasting incoming-line tension vs casting spool-tension boundary,
- a conservative fill reference in all three profiles,
- manufacturer/model-specific override language,
- enabled **Next — Spool the Reel** transition,
- step-aware return to **Spool Connection Plan**,
- disabled **Next — Leader Setup** checkpoint,
- unchanged Reel Setup selection-state schema,
- sticky/floating navigation regression safety,
- Selected Choices regression safety,
- canonical Arbor Knot / Double Uni Knot handoffs,
- exact Reel Setup Knot-detail return context,
- intentionally unwired normal Knot landing,
- JavaScript syntax for `script.js` and `data/reel-guidance.js`.

Validated output:

```text
Production Package 3 Block 3.7 validation passed.
Backing choices: 3
Spooling profiles: 3
Reel Setup navigation: step-aware and sticky/floating.
Reel-specific spooling: spinning, spincast, baitcasting.
Canonical Knot handoffs: Arbor Knot and Double Uni Knot.
Reel Setup Knot return context: exact step/state restoration enabled.
Normal Knot landing remains intentionally unwired to Reel Setup.
```

`node --check` passes for the Block 3.7 versions of:

- `script.js`
- `data/reel-guidance.js`

# Runtime Validation Order

Block 3.7 remains **Runtime Unvalidated** until the uploaded GitHub package is integrity-verified and tested in Microsoft Edge.

## Step 1 — Block 3.6 Regression Boundary

Confirm:

- Spool Connection Plan still shows the correct Arbor Knot / Double Uni Knot handoffs,
- Direct Braid — Reel Approved still avoids a generic Arbor Knot direct-braid handoff,
- sticky step-aware navigation remains intact,
- Selected Choices remains intact.

## Step 2 — Spinning Reel

Confirm:

- **Next — Spool the Reel** opens the spooling step,
- `Spool Your Spinning Reel` guidance renders,
- guide/bail order is understandable,
- mono/fluoro twist check is present,
- incoming-line tension and `1/8 inch` fill guidance are present,
- previous navigation returns to Spool Connection Plan with selections intact.

## Step 3 — Spincast Reel

Confirm:

- front-cover routing instructions render,
- braid compatibility warning remains visible in the workflow,
- slow/light-tension winding guidance renders,
- periodic hidden-spool inspection and `1/8 inch` fill guidance render.

## Step 4 — Baitcasting Reel

Confirm:

- reel line-guide routing renders,
- upright/top-feed filler-spool guidance renders,
- firm even line-packing guidance renders,
- winding tension is clearly distinguished from casting spool-tension/braking controls,
- fill guidance renders.

## Step 5 — State / Navigation / Regression

Confirm:

- no new selection appears in `SELECTED CHOICES` merely for viewing spooling instructions,
- Back returns to Spool Connection Plan without clearing selections,
- Change Backing Choice clears only `backingChoice` and returns to the backing decision,
- Start Over clears Reel Setup state,
- Home clears Reel Setup state,
- **Next — Leader Setup** is visibly unavailable,
- normal Knot landing remains unchanged/unwired,
- no application-source JavaScript errors appear.

# Exact Resume Point

Block 3.7 is **Implemented / Static Validation PASS / Runtime Unvalidated**.

Next actions:

1. apply the Block 3.7 ZIP through GitHub Desktop,
2. commit and push,
3. re-fetch GitHub `main` and verify the delivered Block 3.7 blobs,
4. run the Microsoft Edge Block 3.7 runtime checklist above,
5. only after runtime PASS close Block 3.7 as **PASS / VALIDATED** and reconcile aggregate Package 3 documentation.
