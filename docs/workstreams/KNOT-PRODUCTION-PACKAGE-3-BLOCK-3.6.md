# Knot Production Package 3 — Block 3.6

**Status:** Uploaded / GitHub Integrity PASS / Runtime Validation Partially Started / Navigation Refinement Pending  
**Milestone:** Knots  
**Package:** Production Package 3  
**Block:** 3.6 — Backing Decision + Spool Attachment / Line-to-Line Knot Handoff Foundation  
**Date:** 2026-08-13

# Purpose

Block 3.6 extends the internal **Get Your Reel Ready** workflow from verified reel/rod compatibility into backing selection and canonical Knot handoffs for the spool connection plan.

It also carries forward the Reel Setup navigation correction identified after Block 3.5 validation.

The normal Knot landing remains intentionally unwired to Reel Setup until the later Package 3 integration block.

# Delivered Artifact

`Freshwater-Fishing-Companion-Knot-Production-PACKAGE-3-BLOCK-3.6.zip`

SHA-256:

`b6966b9b817c9d238b588cfb2f5b5bb4ffd66bb91d0bf2a5ff2bfd3cd6aa3e31`

# GitHub Integrity — PASS

The user applied the Block 3.6 package through GitHub Desktop before closing the session.

Post-upload GitHub `main` exactly matched the delivered package:

```text
8e891108cbb5848ad9dfdc00d61cb5fecd7f4961  script.js
43801c4a23786d6eb0940ef6f593d31a97d518bc  data/reel-guidance.js
1249d8fa88a25ea2e527954ddc01146ed753e1bb  tools/validate_knot_package_3.py
```

# Runtime Observation — Navigation Partially PASS / Refinement Required

Runtime validation began before session close.

The new step-aware Reel Setup navigation is functionally working: the previous-step control changes with workflow position and navigation is useful rather than static.

However, the user observed that the navigation row **does not remain floating/sticky while the page scrolls**.

The earlier Block 3.6 design intentionally made the Reel Setup navigation non-sticky to avoid inheriting the generic breadcrumb behavior. Runtime review shows that this went too far: Reel Setup needs the new **step-aware** behavior **and** the convenient floating/sticky access of the established navigation control.

Required next-session refinement:

- preserve the current step-aware previous destination,
- preserve the explicit Home control,
- keep the controls visually separate from `SELECTED CHOICES`,
- make the Reel Setup navigation remain accessible while scrolling,
- use the established application sticky/floating navigation language where practical,
- do not revert to the old generic static behavior,
- verify that the floating treatment does not obstruct headings, Selected Choices, cards, or narrow/mobile layouts.

This refinement must be completed before Block 3.6 is closed as PASS / VALIDATED.

Under the incremental-refinement workflow, this should be addressed at the start of the next session and validated before continuing the remaining Block 3.6 checklist. Because Block 3.6 itself is still open, do **not** roll this defect into Block 3.7.

# Navigation Target Behavior

The intended final Reel Setup navigation behavior is now:

- first Reel Setup screen: `← Knots` plus `Home`,
- later Reel Setup screens: step-aware previous destination plus `Home`,
- previous destination changes as the workflow advances,
- moving backward to review preserves current transient selections,
- downstream state is cleared only when the user actually changes an upstream selection,
- Home exits Reel Setup and clears transient state,
- navigation remains visible/accessible while scrolling,
- navigation remains separate from the persistent `SELECTED CHOICES` context summary.

# Backing Decision

Block 3.6 adds transient Reel Setup state:

`backingChoice`

Controlled backing choices:

1. `none` — **No Separate Backing**
2. `monofilament-backing` — **Monofilament Backing**
3. `direct-braid-approved` — **Direct Braid — Reel Approved**

The selected backing choice is appended to the persistent `SELECTED CHOICES` summary once confirmed.

## Monofilament / Fluorocarbon Main Line

The beginner paths are:

- **No Separate Backing** — simplest direct spool attachment path,
- **Monofilament Backing** — optional when the user deliberately wants to reduce the amount of main line required to fill the spool.

## Braid Main Line

Braid does not receive a generic **No Separate Backing** option.

The beginner paths are:

- **Monofilament Backing** — general safer path when braid could slip on a smooth spool,
- **Direct Braid — Reel Approved** — only when the exact reel/spool explicitly provides a braid-ready attachment surface or manufacturer-approved direct-braid method,
- **Review Reel Markings First** — returns to the existing reel guidance when compatibility cannot be verified.

The application does not infer braid-readiness from reel size, reel type, or brand alone.

# Spool Connection Plan

After backing selection, Reel Setup presents a **Spool Connection Plan**.

## No Separate Backing

For Monofilament or Fluorocarbon:

- canonical **Arbor Knot** is used for main line → reel spool,
- Reel Setup does not duplicate Arbor Knot tying instructions.

## Monofilament Backing

The plan uses:

1. canonical **Arbor Knot** for monofilament backing → reel spool,
2. canonical **Double Uni Knot** for monofilament backing → selected main line.

Reel Setup owns only the contextual recommendation and sequence. Canonical Knot records continue to own the tying instructions.

## Direct Braid — Reel Approved

No generic spool Knot is prescribed.

The workflow explicitly tells the user to follow the exact reel manufacturer's approved direct-braid attachment method. The generic Arbor Knot is not presented as a direct-braid spool knot.

# Knot Detail Context Handoff

Block 3.6 extends the existing detail-navigation stack to support Reel Setup.

Flow:

```text
Spool Connection Plan
→ View Arbor Knot / View Double Uni Knot
→ canonical Knot detail
→ ← Spool Connection Plan
→ exact prior Reel Setup state restored
```

The Reel Setup state snapshot is stored only in transient JavaScript navigation context.

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

# Next Checkpoint

The Spool Connection Plan ends at:

**Next — Spool the Reel — Coming Soon**

The next Package 3 block will add reel-specific:

- line routing,
- winding direction where relevant,
- winding tension,
- spool-fill guidance.

# Static Validation

The original Block 3.6 static validator passed for the uploaded package:

```text
Production Package 3 Block 3.6 validation passed.
Backing choices: 3
Reel Setup navigation: step-aware and non-sticky.
Canonical Knot handoffs: Arbor Knot and Double Uni Knot.
Reel Setup Knot return context: exact step/state restoration enabled.
Normal Knot landing remains intentionally unwired to Reel Setup.
```

The phrase `step-aware and non-sticky` is now superseded by the runtime refinement above. The validator must be updated with the navigation correction so the final Block 3.6 validation requires **step-aware and floating/sticky** behavior instead.

`node --check` passed for the uploaded Block 3.6 versions of:

- `script.js`
- `data/reel-guidance.js`

# Runtime Validation Order — NEXT SESSION

Block 3.6 runtime validation is **partially started but not complete**.

At the next session, begin here.

## Step 1A — Fix Floating Reel Setup Navigation

Before completing validation:

1. re-fetch current GitHub `main` versions of `script.js`, the relevant stylesheet, and the Package 3 validator,
2. implement floating/sticky behavior for the existing step-aware Reel Setup navigation,
3. keep current previous-step semantics and Home behavior unchanged,
4. update static validation so non-sticky navigation is no longer considered correct,
5. package the targeted production correction through the normal ZIP/GitHub Desktop workflow.

## Step 1B — Validate Reel Setup Navigation

After the correction is uploaded and GitHub-integrity verified, validate:

- first screen shows `← Knots` and `Home`,
- later screens show a useful previous-step label plus `Home`,
- previous navigation actually changes the Reel Setup step,
- selections remain visible when moving backward only to review,
- changing an upstream choice still clears dependent state,
- navigation remains floating/sticky and accessible while scrolling,
- navigation does not obstruct content on desktop or mobile emulation,
- Home exits and clears transient Reel Setup state.

## Step 2 — Backing Decision

Validate Monofilament and Braid paths, including the guarded direct-braid option.

## Step 3 — Canonical Knot Handoffs

Validate:

- No Separate Backing → Arbor Knot,
- Monofilament Backing → Arbor Knot + Double Uni Knot,
- direct braid → no generic Arbor handoff.

## Step 4 — Exact Return Context

Open each canonical Knot from Reel Setup and use the parent control to confirm return to **Spool Connection Plan** with all Reel Setup selections intact.

## Step 5 — Regression

Confirm:

- Block 3.5 equipment compatibility remains intact,
- Selected Choices retains the approved flat treatment,
- Spincast+Braid warning remains intact,
- Braid fish-strength-reference boundary remains intact,
- normal Knot landing remains intentionally unwired,
- no application-source JavaScript errors appear.

# Exact Resume Point

**Block 3.5 is PASS / VALIDATED.**

**Block 3.6 is uploaded and GitHub-integrity verified. Runtime validation began and confirmed that step-aware navigation works, but floating/sticky behavior is still required. Block 3.6 remains OPEN.**

Next session:

1. fix Reel Setup floating/sticky navigation first,
2. upload and verify that targeted Block 3.6 correction,
3. resume the Block 3.6 Microsoft Edge runtime checklist,
4. if all steps PASS, close Block 3.6 as PASS / VALIDATED,
5. only then begin **Block 3.7 — Reel-Specific Spooling Instructions**.

Do not begin Block 3.7 before Block 3.6 runtime validation passes.
