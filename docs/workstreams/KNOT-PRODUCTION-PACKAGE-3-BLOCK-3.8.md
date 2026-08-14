# Knot Production Package 3 — Block 3.8

**Status:** OPEN / ARCHITECTURE DEFINED / IMPLEMENTATION NOT STARTED  
**Milestone:** Knots  
**Package:** Production Package 3  
**Block:** 3.8 — Leader Setup  
**Opening Date:** 2026-08-14  
**Target Runtime Environment:** Windows Desktop + Microsoft Edge + GitHub Desktop

# Purpose

Block 3.8 extends the validated internal **Get Your Reel Ready** workflow from **Spool the Reel** into an optional leader decision and leader-connection setup.

The block must help a beginner answer three questions without over-optimizing for a Rig or technique that has not been selected yet:

1. Do I want a leader on this line system?
2. If yes, should the beginner starting choice be fluorocarbon or monofilament leader material?
3. How do I connect that leader to the selected main line while preserving canonical Knot ownership?

Block 3.8 does not complete the Reel Setup workflow. The final **Reel Ready** checkpoint / Rig Guide handoff remains a later Package 3 capability.

# Authoritative Base

Block 3.8 opens from verified GitHub `main` after the Block 3.7 closeout.

Base commit:

`d00c33e07172b0d54cdcad605846e87f309576c2`

Verified current production / validation blobs:

```text
356ac9ce0451ef6b9b82e010f998e03feed6aac3  script.js
499e0416830e9615873c3950b2bad7b08da7ca1f  data/reel-guidance.js
07de0a2d71ac14dae3a5752a999dd97c27632360  forest-journal.css
04dcdf7a6c07575f43bbb4d5fb711383910d6496  tools/validate_knot_package_3.py
```

Block 3.7 documentation is closed as **PASS / VALIDATED**.

# Architecture Decision

Block 3.8 preserves the existing Package 3 ownership model:

- `data/reel-guidance.js` owns Leader Setup Decision Knowledge.
- `script.js` owns Reel Setup state, rendering, navigation, and canonical Knot handoffs.
- `data/knots.js` remains the sole owner of canonical Knot tying instructions.
- `tools/validate_knot_package_3.py` will extend Package 3 regression coverage through Leader Setup.

No new canonical Leader entity is introduced.

Leader Setup remains Decision Knowledge inside the guided Reel Setup workflow.

# New Transient Selection

Block 3.8 will add one persistent session-only selection field:

```text
leaderChoice
```

Approved values:

```text
none
fluorocarbon-leader
monofilament-leader
```

`leaderChoice` records both whether a leader is used and, when applicable, the selected leader material. A separate `leaderMaterial` field would duplicate the same decision and is not approved.

The field is added after `backingChoice` in Reel Setup state.

`leaderChoice` must appear in **SELECTED CHOICES** after a leader decision is made.

# New Workflow Steps

Block 3.8 will add exactly two Reel Setup steps:

```text
LEADER_DECISION = "leader-decision"
LEADER_SETUP = "leader-setup"
```

Approved flow:

```text
Spool the Reel
    ↓
Next — Leader Setup
    ↓
Do You Want a Leader?
    ├─ No Leader
    │    ↓
    │  Leader Setup
    │
    ├─ Fluorocarbon Leader
    │    ↓
    │  Leader Setup
    │
    └─ Monofilament Leader
         ↓
       Leader Setup
```

The existing disabled **Next — Leader Setup** card on **Spool the Reel** becomes enabled and transitions to `LEADER_DECISION`.

`LEADER_SETUP` ends at a disabled **Next — Reel Ready Check** progression card. That identifies the next Package 3 capability without implementing it in Block 3.8.

# Leader Decision Model

## No Leader

**Title:** `No Leader — Keep the Main Line`

Purpose:

- preserve the simplest beginner path,
- make clear that a separate leader is optional rather than universally required,
- remain available for monofilament, fluorocarbon, and braid main line.

For braid, the description must make the tradeoff explicit: braid is highly visible compared with mono/fluoro, so a leader may be useful when reduced visibility or abrasion resistance matters, but Block 3.8 must not claim a leader is universally mandatory.

## Fluorocarbon Leader

**Title:** `Fluorocarbon Leader`

Beginner rationale:

- low underwater visibility,
- strong abrasion resistance,
- useful when a less-visible leader is desired,
- common pairing with braided main line.

Tradeoff:

- fluorocarbon sinks more readily than monofilament and is not the universal choice for every presentation, especially where line buoyancy matters.

## Monofilament Leader

**Title:** `Monofilament Leader`

Beginner rationale:

- easy knot handling,
- more stretch / shock absorption than fluorocarbon or braid,
- higher buoyancy than fluorocarbon,
- useful when the user wants a separate leader without automatically choosing sinking fluorocarbon.

Tradeoff:

- more visible than fluorocarbon in situations where leader visibility is a concern.

# Contextual Beginner Recommendation

The decision page may provide contextual guidance but must not silently select a leader.

Approved direction:

- **Braid main line:** fluorocarbon leader is the preferred general beginner recommendation when reduced visibility / abrasion resistance is useful; monofilament remains a valid alternative when stretch or buoyancy is more appropriate.
- **Monofilament main line:** No Leader is the simplest general starting point; fluorocarbon or monofilament leader remains optional when the user deliberately wants a separate leader section.
- **Fluorocarbon main line:** No Leader is the simplest general starting point; a separate leader is optional rather than assumed.

This is a starting recommendation only. Final technique-specific optimization belongs later in Decision Knowledge after the user selects a Rig / presentation.

# Leader Length Guidance

Block 3.8 will use a conservative beginner starting reference:

**About 3–4 feet**

Required wording boundary:

- present `3–4 feet` as a practical starting point, not a universal or required leader length,
- state that clearer water, wary fish, species, cover, and presentation can justify a different length,
- do not add a `leaderLength` selection field in Block 3.8.

The goal is to get the beginner to a usable general leader without pretending Package 3 already knows the later Rig / technique context.

# Leader Strength Guidance

Block 3.8 must **not invent a precise leader pound-test selection**.

Current Package 3 state stores:

- line type,
- target-fish profile,
- equipment compatibility confirmation,

but it does not store the actual pound-test ultimately placed on the reel.

Therefore:

- do not add `leaderStrength`, `leaderPoundTest`, or similar persistent state,
- reuse the already-approved target-fish **Easy beginner choice** as a clearly labeled **starting strength reference**,
- explicitly tell the user that actual leader strength must fit the real main line, target fish, cover, and presentation,
- do not present the target-fish reference as a measured property of the user's actual spool.

# Canonical Knot Handoff

Block 3.8 uses the existing canonical **Double Uni Knot** as the beginner line-to-line handoff.

Canonical record rationale already established in `data/knots.js`:

- Beginner difficulty,
- `line-to-line` connection type,
- compatible with monofilament, fluorocarbon, and braid,
- specifically supports connecting braided main line to monofilament or fluorocarbon leader,
- appropriate for lines of similar or moderately different diameters.

Leader Setup must not duplicate Double Uni tying instructions.

When a leader is selected, the Leader Setup page provides a **View Double Uni Knot** reference action that opens canonical Knot detail and restores the exact `LEADER_SETUP` state on return.

If the actual lines differ dramatically in diameter, the UI should caution that a more specialized line-to-line connection may be preferable rather than claiming Double Uni is universal.

Block 3.8 does not automatically introduce a second line-to-line Knot card merely to provide alternatives. Avoid recreating the scroll-heavy option problem corrected in Block 3.7.

# Leader Setup Page

## No Leader path

The page confirms:

- no separate leader will be added,
- the spooled main line remains the working line for the later Rig connection,
- leader choice can still be revisited through step-aware previous navigation.

No Knot handoff is shown.

## Leader selected path

The page shows:

- selected leader material,
- why that material is useful,
- `3–4 feet` as a beginner starting-length reference,
- the existing target-fish Easy beginner choice as a starting leader-strength reference,
- a warning that actual strength / length can change with the real line, fish, cover, water clarity, and presentation,
- **View Double Uni Knot** as the canonical main-line-to-leader connection handoff.

Key instructions should use the structured selective-bold treatment established in Block 3.7 rather than bolding full paragraphs.

# Navigation / State Rules

Approved previous-step behavior:

```text
Leader Decision → Spool the Reel
Leader Setup    → Leader Decision
```

Rules:

- Back for review preserves `leaderChoice`.
- Choosing a different leader option replaces only `leaderChoice` because no later Package 3 selection exists yet.
- Start Over clears the full Reel Setup state.
- Home clears the full Reel Setup state.
- Return to Knots clears the full Reel Setup state.
- Opening canonical Double Uni detail from Leader Setup stores the exact Reel Setup snapshot and returns to `LEADER_SETUP`.

# Existing UX Standards That Remain Mandatory

Block 3.8 inherits all validated Block 3.7 UX rules:

- sticky/floating step-aware navigation,
- flat **SELECTED CHOICES** summary,
- compact progression/branch card treatment,
- inherited Forest Journal multi-color card palette,
- ordinary help/reference/reset/exit cards remain visually secondary,
- avoid redundant upstream-change cards when sticky previous navigation already covers review,
- progression card first when a page has a clear next action,
- selective strong-text emphasis for high-attention instructions.

No CSS change is expected unless runtime testing demonstrates a genuine presentation defect.

# Out of Scope — Block 3.8

Do not add:

- final Reel Ready checkpoint,
- Rig Guide handoff,
- production wiring of the normal **Attach Line to a Reel** landing entry,
- lure-specific leader selection,
- technique-specific leader length,
- heavy pike/musky wire or bite-leader systems,
- fly leaders / tippets,
- saltwater leader systems,
- swivels as a generic substitute for the line-to-line connection,
- leader brand/product recommendations,
- precise leader pound-test state that the application cannot support from the current inputs.

# Technical Source Basis

Primary manufacturer education used to define the Block 3.8 decision boundaries:

- Berkley — Freshwater Line Guide  
  `https://www.berkley-fishing.com/blogs/news/berkley-freshwater-line-guide`
- Berkley — Freshwater Line Guide: Braid  
  `https://www.berkley-fishing.com/blogs/news/berkley-freshwater-line-guide-braid`
- Berkley — Why Use Fluorocarbon  
  `https://www.berkley-fishing.com/blogs/news/why-use-fluorocarbon`
- Berkley — Fishing Knots 101  
  `https://www.berkley-fishing.com/blogs/news/fishing-knots-101`
- Seaguar — leader-length / leader-material guidance  
  `https://seaguar.com/blogs/media-center/seaguar-adds-50-yard-spool-size-for-gold-label%C2%AE-100-fluorocarbon-leader`

These external sources support general leader-material and starting-length behavior. Canonical Knot selection and tying instructions remain controlled by the project's existing canonical Knot records.

# Planned Source Scope

Expected Block 3.8 implementation files:

```text
script.js
data/reel-guidance.js
tools/validate_knot_package_3.py
docs/workstreams/KNOT-PRODUCTION-PACKAGE-3-BLOCK-3.8.md
```

`forest-journal.css` is not expected to change because Block 3.8 should reuse the validated Block 3.7 card and guidance treatments.

The aggregate `docs/workstreams/KNOT-PRODUCTION-PACKAGE-3.md` should be reconciled after Block 3.8 runtime validation, not preemptively marked as validated.

# Planned Static Validation

The Package 3 validator should add guards for:

- `LEADER_DECISION` and `LEADER_SETUP` step registration,
- `leaderChoice` as the only new persistent selection field,
- exact three leader choices,
- enabled **Next — Leader Setup** transition,
- leader-decision previous-step mapping to Spool the Reel,
- leader-setup previous-step mapping to Leader Decision,
- Selected Choices inclusion of the selected leader choice,
- no leader-strength or leader-length persistent state,
- 3–4 ft wording is explicitly a starting reference,
- target-fish Easy beginner choice reused as a starting strength reference,
- Double Uni canonical handoff only when a leader is selected,
- no Knot handoff on No Leader,
- exact return-context restoration to Leader Setup,
- disabled **Next — Reel Ready Check** checkpoint,
- no CSS requirement introduced,
- all Block 3.7 regression guards remain intact,
- JavaScript syntax passes.

# Planned Runtime Validation

## Step 1 — Block 3.7 Regression Boundary

Confirm:

- Spool the Reel content and selective bolding remain correct,
- workflow cards retain multi-color palette treatment,
- sticky navigation and Selected Choices remain intact,
- previous Knot handoffs / return context still work.

## Step 2 — Leader Entry

Confirm:

- **Next — Leader Setup** is enabled,
- it opens **Do You Want a Leader?**,
- three leader choices render with compact workflow treatment,
- Back returns to Spool the Reel without clearing prior selections.

## Step 3 — No Leader

Confirm:

- No Leader reaches Leader Setup,
- no Double Uni handoff is shown,
- Selected Choices includes `No Leader — Keep the Main Line`,
- **Next — Reel Ready Check** remains unavailable.

## Step 4 — Fluorocarbon Leader

Confirm:

- fluorocarbon rationale / tradeoff renders,
- 3–4 ft is presented as a starting point rather than a requirement,
- target-fish strength is labeled as a starting reference,
- View Double Uni Knot opens canonical detail,
- return restores exact Leader Setup state.

## Step 5 — Monofilament Leader

Confirm:

- monofilament rationale / tradeoff renders,
- length / strength boundaries match Fluorocarbon Leader behavior,
- Double Uni handoff and exact return work.

## Step 6 — State / Navigation / Regression

Confirm:

- leaderChoice can be changed without disturbing earlier valid selections,
- Back for review preserves leaderChoice,
- Start Over clears leaderChoice with the full state,
- Home clears the full state,
- Return to Knots clears the full state,
- normal Knot landing remains intentionally unwired,
- no application-source JavaScript errors appear.

# Exact Start Point

Block 3.8 is now formally opened.

**Block 3.7 — PASS / VALIDATED / CLOSED**  
**Block 3.8 — OPEN / ARCHITECTURE DEFINED / IMPLEMENTATION NOT STARTED**

Implementation must begin from current GitHub `main` commit:

`d00c33e07172b0d54cdcad605846e87f309576c2`

Before editing an existing production source file, retrieve its complete authoritative current contents from GitHub. Do not reconstruct production files from partial snippets.

Carry forward the deferred Rig/Knot scoped-search UX issue unchanged; it remains a later global/deeper-search Parking Lot item.
