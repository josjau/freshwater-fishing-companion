# Knot Production Package 3 — Block 3.7

**Status:** PASS / VALIDATED  
**Milestone:** Knots  
**Package:** Production Package 3  
**Block:** 3.7 — Reel-Specific Spooling Instructions  
**Implementation Date:** 2026-08-14  
**Validation Date:** 2026-08-14  
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

The original Block 3.7 implementation did not modify `forest-journal.css`, `index.html`, canonical Knot data, or the normal Knot landing. The later workflow-card hierarchy correction adds a targeted `forest-journal.css` treatment only; `index.html`, canonical Knot data, and the normal Knot landing remain unchanged.

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
- removal of redundant upstream-change cards on the six approved Package 3 screens,
- primary placement of **My Reel & Rod Support This Setup** on Check Your Reel & Rod,
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
Workflow cards: redundant upstream-change cards removed; compact progression/branch emphasis inherits the existing card palette.
Reel-specific spooling: spinning, spincast, baitcasting.
Canonical Knot handoffs: Arbor Knot and Double Uni Knot.
Reel Setup Knot return context: exact step/state restoration enabled.
Normal Knot landing remains intentionally unwired to Reel Setup.
```

`node --check` passes for the Block 3.7 versions of:

- `script.js`
- `data/reel-guidance.js`

# Runtime Validation Progress — 2026-08-14

Microsoft Edge runtime validation sequence completed across the Block 3.7 implementation and correction cycles:

- **Step 1 — Block 3.6 Regression Boundary: PASS**
- **Step 2 — Spinning Reel: PASS**
- **Step 3 — Spincast Reel: PASS**
- **Step 4 — Baitcasting Reel: PASS**

Runtime Steps 1–4 are PASS. Step 5 functional/state/navigation checks are PASS. The final workflow-card palette correction was uploaded, GitHub-integrity verified, and visually confirmed in Microsoft Edge: emphasized workflow cards retain the approved compact hierarchy while inheriting the existing multi-color Forest Journal palette.

# Package 3 Workflow-Card Cleanup — Implemented

Runtime review found that several Reel Setup screens duplicated upstream-change navigation as full-size cards even after the workflow gained a persistent sticky previous-step control. The duplicate cards created unnecessary vertical scrolling and made secondary navigation compete visually with the actual workflow actions.

The approved correction removes redundant upstream-change cards rather than shrinking them. The sticky previous-step control owns normal backtracking/review; cards remain for forward progress, help/mismatch branches, Start Over, Return to Knots, and other genuinely distinct actions.

Implemented changes:

- **Line Choice Check** — remove `Change Line Choice` and `Change Reel Type`.
- **Starting Line Strength** — remove `Change Target Fish` and `Change Line Choice`.
- **Check Your Reel & Rod** — move `My Reel & Rod Support This Setup` to the first card position; keep the two reading-help cards and mismatch branch.
- **Equipment Compatibility Check** — remove `Review Reel Markings`, `Review Rod Markings`, `Change Target Fish`, `Change Line Choice`, and `Change Reel Type`.
- **Spool Connection Plan** — remove `Change Backing Choice`.
- **Spool the Reel** — remove `Change Backing Choice`.

`Start Over` and `Return to Knots` remain available where currently implemented. No state schema, Decision Knowledge, canonical Knot handoff, or sticky-navigation semantics change.

The Package 3 validator enforces these screen-specific removals and the primary-action-first order on **Check Your Reel & Rod**.

# Deferred Search UX Issue — Parking Lot

Preserve this issue for the later deeper/global-search work. Do not fold it into the Block 3.7 production correction.

Observed behavior:

- top-level Rig and Knot search suggestions work against the full corresponding library,
- after drilling into a scoped collection such as **Core Rigs** or **Core Knots**, the search correctly searches only records in that collection,
- however, the search-box placeholder/help examples remain generic and can suggest terms that have no possible match inside the active collection,
- this makes valid global terms appear broken even though the scoped search itself is functioning as designed.

Future search UX requirement:

1. make collection-level placeholder/example terms collection-aware, and
2. add an explicit scope cue so the user can tell that the current search is limited to the selected Rig/Knot collection, with a clear route back to broader search when appropriate.

This affects both **Rigs** and **Knots** and should be carried into the future global/deeper-search workstream.

# Workflow Card Hierarchy / Instruction Emphasis — Implemented

Runtime review after **Step 4 — Baitcasting Reel: PASS** identified two additional presentation improvements before the final Block 3.7 regression.

This correction was built from verified GitHub `main` commit:

`527acbc5ac228a6fba24fda1fc9a214caf24d4c9`


## Compact Progression / Branch Card Treatment

Reel Setup now distinguishes workflow decisions from secondary utility cards without increasing card height or padding.

- progression and genuine branch-choice cards receive the compact `dashboard-card--workflow` treatment,
- the treatment inherits the existing positional Forest Journal card palette while adding stronger border/surface emphasis and stronger title weight,
- it intentionally does **not** reuse `dashboard-card--primary`, because that treatment increases card height and would work against the Package 3 scroll-reduction cleanup,
- help, reset, exit, and ordinary reference cards keep the standard card treatment unless they are themselves a genuine workflow branch.

Examples include entry-mode choices, reel/line/target branches, the equipment-confirmation progression, backing choices, and **Next — Spool the Reel**.

On **Spool Connection Plan**, **Next — Spool the Reel** is now the first option so the primary progression is visible before the optional Arbor Knot / Double Uni Knot reference handoffs.

The disabled **Next — Leader Setup** checkpoint also receives the workflow treatment so the future progression boundary remains visually clear while still unavailable.

## Workflow Card Palette Correction

Final Step 5 visual review found that the compact workflow treatment correctly distinguished progression/branch cards, but every emphasized card shared the Knot accent because `dashboard-card--workflow` overrode `--card-accent`.

The targeted correction:

- removes the workflow-level `--card-accent` override,
- keeps the compact emphasized border, side rails, surface treatment, title weight, hover state, and unavailable state,
- changes those workflow styles to consume the inherited `--card-accent`,
- therefore preserves the existing positional Forest Journal card palette instead of making every workflow card the same color,
- does not alter card height, padding, JavaScript workflow markers, Reel Setup state, or Decision Knowledge.

The Package 3 validator rejects a workflow-level forced accent and verifies that all nine existing positional palette assignments remain available. Final Microsoft Edge validation confirmed that emphasized workflow cards visibly vary across the established palette while retaining the approved hierarchy.

## Spooling Instruction Emphasis

The three **Spool Your … Reel** guidance profiles now carry structured emphasis metadata for key phrases. The renderer uses real `<strong>` elements rather than embedding HTML in Decision Knowledge strings.

Emphasis calls attention to items such as:

- required guide / bail / front-cover routing before attachment,
- spinning-reel twist checks,
- spincast braid compatibility,
- incoming-line winding tension,
- the baitcaster winding-tension vs casting-control distinction,
- the approximately `1/8 inch` fill boundary,
- exact manufacturer/model instructions when they differ.

Equipment-reading guidance remains compatible with the same renderer and continues to use plain text where no explicit emphasis metadata is defined.

Runtime validation is complete. The final Step 5 pass confirmed the new card hierarchy, palette behavior, and selective spooling-instruction emphasis with no regression of the previously validated workflow behavior.

# Runtime Validation Order

Block 3.7 is **PASS / VALIDATED**. All five runtime steps passed in Microsoft Edge, including the final workflow-card hierarchy, multi-color palette, and selective instruction-emphasis checks.

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

## Step 5 — State / Navigation / Regression — PASS

Microsoft Edge validation confirmed:

- no new selection appears in `SELECTED CHOICES` merely for viewing spooling instructions,
- Back returns to Spool Connection Plan without clearing selections,
- the redundant upstream-change cards listed in the Package 3 cleanup are absent,
- **My Reel & Rod Support This Setup** is the first option on Check Your Reel & Rod,
- **Next — Spool the Reel** is the first option on Spool Connection Plan,
- progression/branch cards receive the approved compact special treatment without increased card height,
- emphasized workflow cards inherit the existing multi-color Forest Journal palette rather than sharing one forced accent,
- key Spool Your … Reel phrases receive selective bold emphasis without bolding entire paragraphs,
- Start Over clears Reel Setup state,
- Home clears Reel Setup state,
- **Next — Leader Setup** is visibly unavailable,
- normal Knot landing remains unchanged/unwired,
- no application-source JavaScript errors appear.

# Final GitHub / Runtime Evidence

Final runtime-validated GitHub `main` commit before documentation closeout:

`074400b2826da6f2f788b66cdfd8c1fb28f910eb`

Final runtime-validated production / validation blobs:

```text
356ac9ce0451ef6b9b82e010f998e03feed6aac3  script.js
499e0416830e9615873c3950b2bad7b08da7ca1f  data/reel-guidance.js
07de0a2d71ac14dae3a5752a999dd97c27632360  forest-journal.css
04dcdf7a6c07575f43bbb4d5fb711383910d6496  tools/validate_knot_package_3.py
```

Microsoft Edge runtime validation on 2026-08-14 passed Steps 1–5, including the final workflow-card palette check.

# Exact Resume Point

Block 3.7 — **PASS / VALIDATED**.

The deferred scoped-search UX issue in this workstream remains a **Parking Lot** item for the later global/deeper-search work; it is not resolved by Block 3.7.

The next approved Package 3 capability is **optional Leader Setup**. The current approved records do not assign that capability a block number, so the block number should be assigned only when the next Package 3 block is formally opened from the latest verified documentation. After Leader Setup, Package 3 still requires the final **Reel Ready** checkpoint / Rig Guide handoff and later integration of the normal **Attach Line to a Reel** entry.

Do not begin the next Package 3 implementation block until this Block 3.7 documentation closeout is uploaded and GitHub-integrity verified.
