# Knot Production Package 3 — Get Your Reel Ready

**Status:** In Progress — Blocks 3.2 through 3.6 PASS / VALIDATED; Next Block 3.7  
**Milestone:** Knots  
**Package:** Production Package 3  
**Build Phase Started:** 2026-08-13  
**Documentation Reconciled Through:** 2026-08-14  
**Runtime Environment:** Windows Desktop + Microsoft Edge + GitHub Desktop

# Purpose

Production Package 3 implements the beginner-oriented **Get Your Reel Ready / Reel & Line Setup** workflow behind the approved **Attach Line to a Reel** Knot task.

The workflow goal is:

> Take a reel that needs line and get the beginner to a correctly spooled, usable line system ready to connect to a Rig.

GitHub `main` remains authoritative for all source files. Production source changes are delivered through user-reviewable ZIP packages and applied through GitHub Desktop before repository verification and runtime validation.

# Approved Package 3 Architecture

Architecture Block 3.1 was approved before implementation.

Package 3 uses a dedicated Decision Knowledge source:

`data/reel-guidance.js`

Ownership boundary:

- `data/knots.js` owns canonical Knot Reference Knowledge.
- `data/knot-guidance.js` owns task-first Knot discovery vocabulary and task-to-Knot ordering.
- `data/reel-guidance.js` owns Reel & Line Setup Decision Knowledge.
- Reel Setup workflow progress is transient session-only JavaScript state and is not persisted to `localStorage`.

This separation avoids introducing premature canonical Reel, Line, or Species entities and preserves the approved three-layer Reference / Decision / User Knowledge architecture.

# Incremental Refinement Workflow — Effective 2026-08-13

For non-final build blocks, minor UX, presentation, or targeted code refinements identified during validation should **not** create a separate stop/upload/commit cycle when they can safely travel with the next planned build block.

Required workflow:

1. Record the refinement in the active workstream documentation at the earliest opportunity.
2. Implement the refinement in the working source used to construct the next block.
3. Include the refinement in the next normal production ZIP alongside that block's planned changes.
4. Make validation of the carried-forward refinement **Step 1** of the next block's runtime validation before validating the new functionality.
5. Keep the previous block's already-passed functional validation intact; do not falsely mark an unuploaded refinement as validated.
6. Prefer this roll-forward approach to reduce unnecessary GitHub Desktop uploads and commits.

Exception:

- If the refinement is discovered during the final build block for a full section/workstream, resolve and validate it before closing that section rather than rolling it into an unrelated future section.
- A genuine defect that blocks continued implementation, corrupts state, breaks established behavior, or makes the next block unsafe may also require immediate correction.

This workflow was used successfully for the Selected Choices refinements carried from Blocks 3.3 → 3.4 → 3.5. The Block 3.6 sticky-navigation defect was corrected within Block 3.6 because Block 3.6 could not be closed accurately while the defect remained open.

# Approved V1 Workflow Scope

Package 3 will support:

- new/empty reel setup,
- replacement-line setup,
- Spinning reels,
- Spincast reels,
- Baitcasting reels,
- **I'm Not Sure** reel-identification help,
- Monofilament / Fluorocarbon / Braid guidance,
- **I'm Not Sure** and **Help Me Choose** line guidance,
- beginner target-fish starting recommendations,
- reel/rod compatibility checks,
- **How to Read Your Reel** guidance,
- reel-type-aware backing decisions,
- canonical Knot handoffs for spool and line-to-line connections,
- reel-specific line routing, winding tension, and spool-fill guidance,
- optional leader setup,
- context-preserving return from Knot detail to the exact Reel Setup step,
- final **Reel Ready** checkpoint and Rig Guide handoff.

Excluded from V1:

- fly reels and fly-line systems,
- detailed baitcaster brake/spool-tension tuning,
- backlash-prevention instruction,
- casting instruction,
- lure-specific fishing optimization.

# Current Reel Setup UX Standards

## Persistent Selected Choices — IMPLEMENTED / VALIDATED

The selected-choice treatment is a workflow-wide Reel Setup context pattern.

Once the user has made the first persistent Reel Setup choice, every subsequent Reel Setup screen displays a dedicated **SELECTED CHOICES** summary near the top of the view, visually separate from descriptive/help prose.

The initial **Get Your Reel Ready** screen does not show the summary because no choice exists yet.

Implementation rules:

- one reusable `renderReelSetupSelectedChoices()` helper owns the treatment,
- only persistent workflow selections are displayed,
- temporary help/navigation actions are excluded,
- changing an upstream persistent selection clears dependent downstream state,
- Start Over clears the summary because it clears transient Reel Setup state,
- dynamic values are written with `textContent`,
- cumulative values wrap rather than overflow.

Current approved visual baseline:

- `SELECTED CHOICES` heading and selected values use the same `.78rem` font size,
- heading uses `--text-subtle`,
- selected values retain the established Knot accent mix and stronger weight,
- flat top/bottom divider treatment,
- no elevated/tinted card background,
- no rounded-card treatment,
- no card-style left accent,
- cumulative wrapping protection.

Treat this as the baseline for later Package 3 blocks unless runtime testing identifies a genuine usability issue.

## Reel Setup Navigation — IMPLEMENTED / VALIDATED

Final navigation behavior through Block 3.6:

- first Reel Setup screen: `← Knots` plus `Home`,
- later screens: step-aware previous destination plus `Home`,
- moving backward only to review preserves current transient selections,
- changing an upstream selection clears dependent downstream state,
- Home exits Reel Setup and clears transient state,
- navigation remains floating/sticky while scrolling,
- the navigation remains separate from Selected Choices,
- desktop and narrow/mobile layouts remain usable without content obstruction.

# Block 3.2 — Foundation

**Status:** PASS / VALIDATED

Delivered artifact:

`Freshwater-Fishing-Companion-Knot-Production-Package-3-Foundation-Block-3.2.zip`

SHA-256:

`339c15e9da8c489f774dd59af01ae1399f6781ae5d6010070f69dee0a53b5e73`

Block 3.2 added:

- `data/reel-guidance.js`,
- internal `reel-setup` route,
- session-only Reel Setup state,
- initial setup-mode selection,
- reel-type selection,
- foundation checkpoint,
- `openReelSetup()` internal runtime entry,
- `tools/validate_knot_package_3.py`,
- required `data/reel-guidance.js` load in `index.html`.

Runtime validation confirmed the two setup modes, four reel-type choices, transient-state reset behavior, return to the validated Knot landing, and no application-source JavaScript errors.

# Block 3.3 — Line Selection / Beginner Line Guidance

**Status:** Functional Runtime PASS / Follow-On UX Refinements Completed in Blocks 3.4–3.5

Implemented physical line types:

1. `monofilament` — Monofilament
2. `fluorocarbon` — Fluorocarbon
3. `braid` — Braid

Implemented guidance actions:

1. `help-me-choose` — Help Me Choose
2. `not-sure-line` — I'm Not Sure

Key validated behavior:

- Monofilament is presented as an **Easy beginner choice**, not a universal requirement,
- Help / Not Sure are navigation/guidance actions rather than stored physical line types,
- line-property tradeoffs remain explicit,
- Spincast + Braid receives a model-specific compatibility warning,
- changing Reel Type or Line Type clears dependent downstream state,
- no production wiring of Attach Line to a Reel occurs yet.

The Persistent Selected Choices requirement first identified during Block 3.3 was implemented in Block 3.4 and visually finalized in Block 3.5.

# Block 3.4 — Target Fish / Starting Pound-Test Guidance

**Status:** PASS / VALIDATED

Block 3.4 added six beginner target profiles and starting line-strength reference guidance:

1. **All-Around Freshwater** — `6–12 lb`; Easy beginner choice `8 lb`.
2. **Panfish — Bluegill & Crappie** — `4–6 lb`; Easy beginner choice `6 lb`.
3. **Trout** — `2–4 lb`; Easy beginner choice `4 lb`.
4. **Bass** — `6–8 lb`; Easy beginner choice `8 lb`.
5. **Walleye** — `6–10 lb`; Easy beginner choice `8 lb`.
6. **Catfish** — `17–20 lb`; Easy beginner choice `20 lb` for a heavier general setup.

Validated boundaries:

- values are beginner starting references rather than universal requirements,
- Braid uses a fish-strength reference instead of pretending the species recommendation is the final braid purchase size,
- final line compatibility is deferred to the reel/rod equipment check,
- persistent Selected Choices accumulates correctly,
- upstream changes clear dependent state,
- normal Knot landing remains intentionally unwired.

Authoritative block record:

`docs/workstreams/KNOT-PRODUCTION-PACKAGE-3-BLOCK-3.4.md`

# Block 3.5 — Reel/Rod Compatibility + How to Read Your Reel

**Status:** PASS / VALIDATED

Block 3.5 implemented:

- final flat Selected Choices visual treatment,
- actual Reel Type **I'm Not Sure** recognition flow,
- **How to Read Your Reel** guidance,
- **How to Read Your Rod** guidance,
- equipment compatibility checkpoint,
- pause/mismatch branch,
- compatible-equipment gate into backing decisions.

Validated behavior includes:

- Reel capacity order/unit interpretation,
- separate Mono/Braid capacity awareness,
- rod line-rating versus lure-rating distinction,
- unresolved reel type is not stored as a resolved selection,
- compatible and mismatch branches route correctly,
- upstream changes clear compatibility state,
- Spincast + Braid warning remains intact,
- Braid fish-strength-reference boundary remains intact,
- no application-source JavaScript errors.

Validation record:

`docs/workstreams/KNOT-PRODUCTION-PACKAGE-3-BLOCK-3.5-VALIDATION.md`

# Block 3.6 — Backing Decision + Spool Connection Knot Handoffs

**Status:** PASS / VALIDATED

Block 3.6 added:

- `backingChoice` transient Reel Setup state,
- No Separate Backing path for Monofilament/Fluorocarbon,
- Monofilament Backing path,
- guarded Direct Braid — Reel Approved path,
- Review Reel Markings First branch,
- Spool Connection Plan,
- canonical Arbor Knot handoff,
- canonical Double Uni Knot handoff,
- exact Reel Setup return-context restoration from Knot detail,
- step-aware Reel Setup previous navigation,
- floating/sticky Reel Setup navigation.

Validated backing behavior:

```text
Monofilament / Fluorocarbon
No Separate Backing  → Spool Connection Plan
Monofilament Backing → Spool Connection Plan

Braid
Monofilament Backing        → Spool Connection Plan
Direct Braid — Reel Approved → Spool Connection Plan
Review Reel Markings First  → Reel guidance
```

Braid does not receive a generic No Separate Backing choice.

Validated Knot handoffs:

```text
No Separate Backing
→ Arbor Knot

Monofilament Backing
→ Arbor Knot
→ Double Uni Knot

Direct Braid — Reel Approved
→ no generic Arbor Knot direct-braid handoff
```

Validated return context:

```text
Spool Connection Plan
→ canonical Knot detail
→ ← Spool Connection Plan
→ exact prior Reel Setup state restored
```

## Block 3.6 Navigation Correction

The initial Block 3.6 runtime review found that step-aware navigation worked but did not remain floating/sticky while scrolling.

A targeted correction reused the established application navigation CSS treatment for `[data-reel-setup-navigation]` without changing Reel Setup JavaScript semantics.

Verified GitHub `main` correction commit:

`9b58d0342bcbe620cd3e140e0a6ab2ffe67aa3e0`

Verified corrected blobs:

```text
812af1d17f44154cb716f41e3490fb3738cd8f09  forest-journal.css
986c2991d7682ab2529393aea50ee7422cafb9e1  tools/validate_knot_package_3.py
```

Unchanged Block 3.6 JavaScript/data blobs:

```text
8e891108cbb5848ad9dfdc00d61cb5fecd7f4961  script.js
43801c4a23786d6eb0940ef6f593d31a97d518bc  data/reel-guidance.js
```

Microsoft Edge validation on 2026-08-14 confirmed:

- sticky/floating navigation on first and later Reel Setup screens,
- useful step-aware previous destinations,
- preserved review-state behavior,
- dependent-state clearing when upstream choices actually change,
- Home reset behavior,
- no desktop or mobile-emulation obstruction,
- backing-decision paths,
- canonical Knot handoffs,
- exact Spool Connection Plan return context,
- Block 3.5 equipment compatibility regression safety,
- Selected Choices visual baseline,
- Spincast + Braid warning,
- Braid strength-reference boundary,
- normal Knot landing remains intentionally unwired,
- no application-source JavaScript errors.

Authoritative block closeout record:

`docs/workstreams/KNOT-PRODUCTION-PACKAGE-3-BLOCK-3.6.md`

# Current Transient Reel Setup State

Through Block 3.6, Reel Setup transient state includes:

```text
entryMode
reelType
lineType
targetFish
equipmentCheck
backingChoice
```

The state remains session-only JavaScript state.

State-clearing principle:

- moving backward only to review does not clear current selections,
- changing an upstream persistent choice clears only dependent downstream state,
- Home / Start Over clear the Reel Setup state as designed.

# Canonical Knowledge Boundary

Package 3 continues to preserve the approved ownership model:

- canonical Knot tying instructions remain in canonical Knot Reference Knowledge,
- Reel Setup owns contextual sequence and recommendation logic only,
- no duplicate Arbor Knot or Double Uni Knot instructions are embedded in Reel Setup Decision Knowledge,
- direct braid remains equipment/manufacturer specific,
- target-fish line strength remains a beginner reference until checked against actual equipment.

# Current Integration Boundary

The normal Knot landing remains intentionally unwired to Reel Setup through Block 3.6.

Do not wire **Attach Line to a Reel** to the internal Reel Setup workflow until the approved later Package 3 integration block.

# Next Build Block — 3.7

**Block 3.7 — Reel-Specific Spooling Instructions**

Block 3.7 should begin from the latest verified GitHub `main` state and preserve every validated behavior through Block 3.6.

Planned scope:

- reel-specific line routing,
- winding direction where relevant,
- winding tension,
- spool-fill guidance.

Block 3.7 should not duplicate canonical Knot instructions or broaden into casting, backlash training, lure-specific optimization, or other excluded V1 scope.

# Exact Resume Point

Production Package 3 is active.

**Block 3.2 — PASS / VALIDATED**  
**Block 3.3 — Functional PASS; follow-on Selected Choices refinements completed and validated**  
**Block 3.4 — PASS / VALIDATED**  
**Block 3.5 — PASS / VALIDATED**  
**Block 3.6 — PASS / VALIDATED**

Next:

**Begin Block 3.7 — Reel-Specific Spooling Instructions.**

Before editing any existing production source file for Block 3.7, re-fetch its latest authoritative GitHub `main` contents.

Do not begin Production Package 4 Knot media or Fish Guide while Package 3 remains open.
