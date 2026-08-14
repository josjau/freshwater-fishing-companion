# Knot Production Package 3 — Get Your Reel Ready

**Status:** In Progress — Block 3.3 Runtime PASS / UX Revision 1 Implemented / Awaiting Upload  
**Milestone:** Knots  
**Package:** Production Package 3  
**Build Phase Started:** 2026-08-13  
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
- the required `data/reel-guidance.js` load in `index.html`.

The normal Knot landing remains intentionally unwired to Reel Setup at this stage so the validated Production Package 2 behavior remains unchanged while Package 3 is constructed incrementally.

## Foundation Controlled Options

Setup modes:

1. `new-empty-reel` — New or Empty Reel
2. `replace-existing-line` — Replace Existing Line

Reel types:

1. `spinning` — Spinning Reel
2. `spincast` — Spincast Reel
3. `baitcasting` — Baitcasting Reel
4. `not-sure` — I'm Not Sure

# GitHub Integrity — Block 3.2

After the user applied the Block 3.2 ZIP through GitHub Desktop, the four package files were re-fetched from GitHub `main` and matched the delivered package by Git blob SHA:

```text
e942e2a217266255d79290084022316bdd5f2546  index.html
1ca1ebea859ef893b0696921b7a828dd462560a9  script.js
b09258790691d1a308a72ea59e0baf0f491390f7  data/reel-guidance.js
e22447dacc4c28bf9b6faa59145343dee57cba85  tools/validate_knot_package_3.py
```

Static Package 3 foundation validation passed:

```text
Production Package 3 foundation validation passed.
Entry options: 2
Reel types: 4
Normal Knot landing remains intentionally unwired to Reel Setup.
```

# Runtime Validation — Block 3.2

**Result:** PASS

Validated in Microsoft Edge through the internal `openReelSetup()` entry.

Confirmed:

- initial **Get Your Reel Ready** page presents the two approved setup modes,
- setup mode advances to **What Kind of Reel Do You Have?**,
- all four approved reel-type choices render,
- reel type advances to the foundation checkpoint,
- checkpoint summary preserves setup mode and reel type,
- **Change Reel Type** preserves the selected setup mode,
- **Start Over** clears transient Reel Setup selections,
- **Return to Knots** returns to the validated Knot landing,
- existing **Attach Line to a Reel** production behavior remains unchanged,
- no project-source JavaScript error was reported.

# Block 3.3 — Line Selection / Beginner Line Guidance

**Status:** Implemented / Unvalidated

Block 3.3 extends the validated transient Reel Setup state with line selection while keeping the workflow behind the internal `openReelSetup()` entry.

Implemented physical line types:

1. `monofilament` — Monofilament
2. `fluorocarbon` — Fluorocarbon
3. `braid` — Braid

Implemented guidance actions:

1. `help-me-choose` — Help Me Choose
2. `not-sure-line` — I'm Not Sure

The Reel Setup session state now owns `lineType` only after the user deliberately identifies or selects a physical line type. The Help and Not Sure choices are workflow actions, not stored line types.

## Beginner Guidance Behavior

For all four current reel-type states, **Help Me Choose** begins with Monofilament as the project-defined **Easy beginner choice**. This is a starting recommendation rather than a requirement.

The recommendation language explicitly preserves the approved boundary:

- line type guidance gets the beginner to a practical starting point,
- exact pound-test selection is deferred to the target-fish / line-strength block,
- reel and rod ratings still govern final compatibility,
- no line type is presented as universally required.

Line summaries explain the practical beginner tradeoffs:

- Monofilament — manageable, knot-friendly, forgiving stretch; lower sensitivity is the primary tradeoff.
- Fluorocarbon — low visibility, sinking behavior, sensitivity, and abrasion resistance; greater stiffness/manageability demands are the primary beginner tradeoff.
- Braid — small diameter, very low stretch, high sensitivity; visibility and equipment-specific backing/leader/spool considerations are the primary tradeoffs.

Spincast + Braid receives an explicit compatibility warning because some spincast reels do not handle braided line properly. The workflow instructs the user to check the actual reel markings or manufacturer guidance before continuing.

## I'm Not Sure Line Identification

The line-identification path uses simple physical cues rather than pretending visual identification is infallible:

- Monofilament — smooth single strand, generally softer/stretchier.
- Fluorocarbon — smooth single strand, generally clearer and stiffer/wirier.
- Braid — visibly woven/fibrous construction.

If those cues are not sufficient, the workflow directs the user to **Help Me Choose** instead of forcing a guess.

## Technical Source Basis

Block 3.3 guidance is original Freshwater Fishing Companion synthesis checked against current manufacturer education sources:

- Berkley — Freshwater Line Guide: `https://www.berkley-fishing.com/blogs/news/berkley-freshwater-line-guide`
- Berkley — Why Use Monofilament: `https://www.berkley-fishing.com/blogs/news/why-use-monofilament`
- Berkley — Braid Complete Fishing Line Guide: `https://www.berkley-fishing.com/blogs/news/berkley-freshwater-line-guide-braid`
- Zebco — Spincast Reel Troubleshooting: `https://www.zebco.com/en/troubleshooting/spincast-reels`

These sources support the general line-property descriptions, Monofilament beginner-manageability direction, Braid visibility/low-stretch tradeoffs, and the spincast Braid compatibility warning. The default **Easy beginner choice** presentation is project-defined Decision Knowledge and is intentionally labeled as a starting point rather than a universal technical rule.

## Block 3.3 Navigation / State Rules

The block preserves:

- selected setup mode while changing reel type or line type,
- selected reel type while changing line type,
- session-only state,
- **Start Over** clearing setup mode, reel type, and line type,
- **Return to Knots** clearing transient Reel Setup state,
- app-wide no-auto-focus behavior,
- Production Package 2 Knot navigation/search/detail behavior,
- the intentionally unwired **Attach Line to a Reel** production destination.

The old temporary **Reel Setup Foundation Check** is replaced by the real line-selection sequence. It was a Block 3.2 validation checkpoint, not an intended final workflow step.

## Block 3.3 Static Validation

Package validation requires:

- exactly 2 setup-mode options,
- exactly 4 reel-type options,
- exactly 3 physical line types,
- exactly 2 line-guidance actions,
- exactly 4 beginner reel-type recommendations,
- Monofilament as the current project-defined beginner starting recommendation for each supported/unknown reel state,
- an explicit Spincast + Braid compatibility warning,
- valid JavaScript syntax,
- no production wiring from the Knot landing into Reel Setup yet.

Runtime validation remains required after the package is applied and GitHub integrity is verified.

## Block 3.3 Runtime / UX Refinement Status

The initial Block 3.3 Microsoft Edge runtime validation passed functionally. During visual review, one required refinement was identified before closing the block: the selected setup choices on **Line Choice Check** were embedded at the beginning of the normal guidance paragraph and did not stand out sufficiently.

UX Revision 1 separates the selected values from the guidance paragraph and presents them as a dedicated **Selected choices** summary:

```text
Selected choices
New or Empty Reel · Spinning Reel · Monofilament.
```

The summary uses the established Knot palette rather than introducing a new theme color:

- left accent border: `--accent-knots`,
- soft background tint derived from `--accent-knots`,
- selected-value text: the same `72% --accent-knots / 28% white` mix already used by Knot metadata,
- small uppercase muted label to distinguish the summary from prose.

The normal beginner guidance, tradeoff, and compatibility warning remain separate description text below the selected-choice summary. The UI uses safe DOM creation and `textContent` for the summary values.

UX Revision 1 artifact:

`Freshwater-Fishing-Companion-Knot-Production-Package-3-Block-3.3-UX-Revision-1.zip`

SHA-256:

`92205960c945ce54afe30909111850eab1e4918f4167e2deabc402d2057bea97`

Changed production/validation files:

- `script.js`,
- `forest-journal.css`,
- `tools/validate_knot_package_3.py`.

Static validation passed:

```text
Production Package 3 Block 3.3 UX Revision 1 validation passed.
Entry options: 2
Reel types: 4
Physical line types: 3
Line guidance actions: 2
Beginner reel recommendations: 4
Normal Knot landing remains intentionally unwired to Reel Setup.
```

UX Revision 1 still requires GitHub blob verification and a focused Microsoft Edge visual/runtime confirmation before Block 3.3 can be closed.

# Next Build Block — 3.4

After Block 3.3 passes runtime validation, Block 3.4 will add **Target Fish / Starting Pound-Test Guidance**.

Block 3.4 should:

- ask for a beginner-relevant target-fish group or all-around freshwater choice,
- provide a **Recommended starting range** rather than false precision,
- provide an **Easy beginner choice** where appropriate,
- preserve the selected line type,
- avoid lure/cover/technique optimization that belongs to later Decision Knowledge,
- defer the final equipment-capacity check to the dedicated compatibility / **How to Read Your Reel** block.

# Exact Resume Point

Production Package 3 is active.

**Block 3.2 is PASS / VALIDATED. Block 3.3 functional runtime validation passed; UX Revision 1 is implemented and awaiting upload, GitHub blob verification, and focused Microsoft Edge confirmation.**

Do not begin Block 3.4 until UX Revision 1 passes validation and Block 3.3 is formally closed.

Do not wire **Attach Line to a Reel** to the new workflow until the guided sequence is sufficiently complete and explicitly reaches its integration block.

Do not begin Production Package 4 Knot media or Fish Guide while Package 3 remains open.
