# Knot Production Package 3 — Block 3.8

**Status:** IMPLEMENTED / STATIC VALIDATION PASS / RUNTIME UNVALIDATED  
**Milestone:** Knots  
**Package:** Production Package 3  
**Block:** 3.8 — Leader Setup  
**Opening Date:** 2026-08-14  
**Implementation Date:** 2026-08-14  
**Target Runtime Environment:** Windows Desktop + Microsoft Edge + GitHub Desktop

# Purpose

Block 3.8 extends the validated internal **Get Your Reel Ready** workflow from **Spool the Reel** into an optional leader decision and leader-connection setup.

The beginner workflow answers two separate questions in sequence:

1. **Do I need a leader?**
2. **If yes, what leader material should I use?**

That two-stage decision avoids forcing `No Leader`, `Fluorocarbon`, and `Monofilament` into one mixed choice screen.

Block 3.8 does not complete Reel Setup. The final **Reel Ready Check / Rig Guide handoff** remains the next Package 3 capability.

# Authoritative Base

Block 3.8 production implementation was built from GitHub `main` after the opening workstream record was added.

Verified base commit:

`9e68e9e2c5f8e3953d028c650755be49c83deeaf`

The production sources were still the Block 3.7 validated blobs:

```text
356ac9ce0451ef6b9b82e010f998e03feed6aac3  script.js
499e0416830e9615873c3950b2bad7b08da7ca1f  data/reel-guidance.js
07de0a2d71ac14dae3a5752a999dd97c27632360  forest-journal.css
04dcdf7a6c07575f43bbb4d5fb711383910d6496  tools/validate_knot_package_3.py
```

The opening Block 3.8 document blob was:

`5c9921d1bd4c22a9da2ca8dc06d173761690d3f8`

# Approved Architecture Change After Opening

The initial opening document described three peer choices on the first Leader screen. Before production implementation, the approved design was refined.

## Old opening design

```text
Do You Need a Leader?
├─ No Leader
├─ Fluorocarbon Leader
└─ Monofilament Leader
```

## Implemented design

```text
Spool the Reel
    ↓
Next — Leader Setup
    ↓
Do You Need a Leader?
├─ No Leader
│    ↓
│  Leader Setup
│
└─ Add a Leader
     ↓
   What Leader Material?
   ├─ Fluorocarbon Leader
   └─ Monofilament Leader
          ↓
       Leader Setup
          ↓
   Next — Reel Ready Check
```

The design now contains three workflow steps rather than the two proposed in the opening record:

```text
LEADER_DECISION = "leader-decision"
LEADER_MATERIAL = "leader-material"
LEADER_SETUP = "leader-setup"
```

`Add a Leader` is a navigation branch only. It is not stored as a persistent choice.

# Ownership

Block 3.8 preserves the Package 3 architecture:

- `data/reel-guidance.js` owns leader Decision Knowledge.
- `script.js` owns state, rendering, transitions, Selected Choices, and canonical Knot handoffs.
- `data/knots.js` remains the sole owner of canonical Knot tying instructions.
- `tools/validate_knot_package_3.py` retains Block 3.7 regression guards and adds Block 3.8 coverage.

No canonical Leader entity is introduced.

# Transient State

Block 3.8 adds one and only one new persistent session-only selection:

```text
leaderChoice
```

Approved final values:

```text
none
fluorocarbon-leader
monofilament-leader
```

The Reel Setup selection state is now:

```text
entryMode
reelType
lineType
targetFish
equipmentCheck
backingChoice
leaderChoice
```

Workflow position remains in `stepId`.

No `leaderMaterial`, `leaderLength`, `leaderStrength`, or `leaderPoundTest` field is added.

# Leader Decision

## No Leader — Keep the Main Line

This is the simplest direct-main-line path.

- available for monofilament, fluorocarbon, and braid,
- stores `leaderChoice = "none"`,
- moves directly to **Leader Setup**,
- shows no line-to-line Knot handoff.

For braid, the decision page explicitly explains that a mono or fluorocarbon leader can reduce terminal-section visibility and provide different abrasion, stretch, or buoyancy behavior without claiming a leader is universally mandatory.

## Add a Leader

`Add a Leader` does not persist a value. It clears any previously stored `leaderChoice` and opens **What Leader Material?**.

This avoids stale `No Leader` or old material values in **SELECTED CHOICES** while the user is actively choosing a new material.

# Leader Material

The material screen contains exactly two persistent outcomes.

## Fluorocarbon Leader

Guidance emphasizes:

- lower underwater visibility,
- abrasion resistance,
- sinks more readily than monofilament,
- useful with braid and other main-line systems when those properties are desired,
- not a universal choice for every presentation.

## Monofilament Leader

Guidance emphasizes:

- easy knot handling,
- stretch and shock absorption,
- greater buoyancy than fluorocarbon,
- generally more underwater visibility than fluorocarbon.

# Leader Length Boundary

For either leader material, the page states:

> Start with about **3–4 feet** of leader as a practical beginner reference.

This is not stored state and is not presented as a requirement.

The guidance explicitly says water clarity, wary fish, cover, species, and the later Rig or presentation can justify a different length.

# Leader Strength Boundary

Block 3.8 does not invent an exact leader pound-test.

Current Reel Setup knows the selected line type and the approved target-fish beginner reference, but not the actual pound-test ultimately loaded on the reel.

The page therefore displays:

`Starting strength reference: <target profile Easy beginner choice>`

and immediately clarifies that this value:

- reuses the existing target-fish beginner reference,
- is not a measured property of the actual line on the reel,
- must be adjusted to the actual main line, target fish, cover, and later Rig / presentation.

# Canonical Knot Handoff

When a leader material is selected, **Leader Setup** provides one secondary reference card:

**View Double Uni Knot**

The canonical Double Uni remains appropriate because the existing Knot record is:

- Beginner,
- `line-to-line`,
- compatible with monofilament, fluorocarbon, and braid,
- explicitly suitable for braid-to-mono / braid-to-fluoro leader connections,
- intended for similar or moderately different line diameters.

Block 3.8 does not duplicate Double Uni tying instructions.

The Leader Setup guidance warns that a more specialized connection can be preferable if the two lines differ dramatically in diameter.

The Knot handoff captures the exact Reel Setup state and uses **Leader Setup** as the return label. Existing Spool Connection Plan Knot handoffs retain their existing return label through the new default parameter.

# No Leader Path

When `leaderChoice = "none"`:

- Leader Setup confirms that no separate leader will be added,
- the spooled main line remains the working line for the later Rig connection,
- no Double Uni card is rendered,
- **Next — Reel Ready Check** remains visible but disabled,
- previous navigation returns to **Leader Decision**.

# Selected Choices

`leaderChoice` is appended to the existing flat **SELECTED CHOICES** summary only after a final leader outcome exists.

Examples:

```text
... · No Leader — Keep the Main Line
... · Fluorocarbon Leader
... · Monofilament Leader
```

The intermediate `Add a Leader` branch is never displayed as a stored selection.

# Navigation

Approved previous-step behavior:

```text
Leader Decision → Spool the Reel
Leader Material → Leader Decision
Leader Setup + No Leader → Leader Decision
Leader Setup + selected material → Leader Material
```

Back navigation only reviews state and does not clear selections.

Changing an upstream Reel Setup choice clears downstream `leaderChoice` whenever backing/downstream state is invalidated.

Changing the backing choice directly also clears `leaderChoice`.

Home, Start Over, and Return to Knots continue to clear the full Reel Setup state as previously validated.

# Workflow Card / Presentation Rules

Block 3.8 reuses the validated Block 3.7 presentation system without CSS changes:

- compact workflow emphasis for progression and branch cards,
- inherited Forest Journal positional color palette,
- progression card first when a page has a clear next action,
- reference/reset/exit cards remain visually secondary,
- sticky/floating step-aware navigation,
- flat Selected Choices treatment,
- structured selective bolding for high-attention guidance.

The disabled **Next — Reel Ready Check** card is first on Leader Setup so the future progression boundary remains obvious without becoming active early.

# Technical Source Basis

Block 3.8 Decision Knowledge was checked against current manufacturer education.

Primary sources:

- Berkley — Freshwater Line Guide  
  `https://www.berkley-fishing.com/blogs/news/berkley-freshwater-line-guide`
- Berkley — Braid: A Complete Fishing Line Guide  
  `https://www.berkley-fishing.com/blogs/news/berkley-freshwater-line-guide-braid`
- Berkley — Fluorocarbon: A Complete Fishing Line Guide  
  `https://www.berkley-fishing.com/blogs/news/berkley-freshwater-line-guide-fluorocarbon`
- Berkley — Why Use Fluorocarbon  
  `https://www.berkley-fishing.com/blogs/news/why-use-fluorocarbon`
- Seaguar — Gold Label leader-length discussion  
  `https://seaguar.com/blogs/media-center/seaguar-adds-50-yard-spool-size-for-gold-label%C2%AE-100-fluorocarbon-leader`

Manufacturer guidance supports the key boundaries used here: braid can be paired with fluorocarbon or monofilament leaders to reduce visibility; fluorocarbon is commonly used where lower visibility and abrasion resistance are desired; and 3–4 feet is a historical/common leader baseline that may be lengthened for clearer or more pressured conditions.

Canonical Knot instructions remain controlled by project Knot Reference Knowledge rather than manufacturer prose.

# Files Changed

Block 3.8 changes exactly these repository files:

```text
script.js
data/reel-guidance.js
tools/validate_knot_package_3.py
docs/workstreams/KNOT-PRODUCTION-PACKAGE-3-BLOCK-3.8.md
docs/workstreams/KNOT-PRODUCTION-PACKAGE-3.md
```

No change is required to:

```text
forest-journal.css
index.html
data/knots.js
```

# Static Validation Scope

The Package 3 validator must confirm:

- all Block 3.7 regression protections remain,
- three Block 3.8 step IDs exist,
- `leaderChoice` is the only new selection field,
- exactly three final leader outcomes exist,
- the first decision presents only `No Leader` and `Add a Leader` as workflow branches,
- the material page presents only Fluorocarbon and Monofilament persistent outcomes,
- `Add a Leader` is not persisted,
- **Next — Leader Setup** is enabled and transitions to Leader Decision,
- Selected Choices includes final `leaderChoice`,
- `leaderLength` / `leaderStrength` / `leaderPoundTest` state is absent,
- 3–4 ft wording is explicitly a starting reference,
- target-fish `easyChoice` is reused as a starting strength reference,
- no-leader setup has no Double Uni card,
- selected-leader setup has exactly one Double Uni reference card,
- the Double Uni return label is **Leader Setup**,
- **Next — Reel Ready Check** remains disabled,
- navigation destinations match the approved two-stage flow,
- no normal Knot landing wiring occurs,
- JavaScript syntax passes.

# Static Validation — PASS

The Block 3.8 implementation passes the Package 3 static validator and JavaScript syntax checks.

Validated Block 3.8 source / validator blobs before runtime validation:

```text
08cc5fa37738a429a4f1b75e251337075cf1016d  script.js
ba3cc052e863916d7cc75422ff3c28abf977d222  data/reel-guidance.js
bb00971da052a94fc1ba5f8a1d1f5718a5badd59  tools/validate_knot_package_3.py
```

Unchanged supporting blobs used during validation:

```text
07de0a2d71ac14dae3a5752a999dd97c27632360  forest-journal.css
e942e2a217266255d79290084022316bdd5f2546  index.html
```

Validator output:

```text
Production Package 3 Block 3.8 validation passed.
Backing choices: 3
Spooling profiles: 3
Leader outcomes: 3
Reel Setup navigation: step-aware and sticky/floating.
Workflow cards: redundant upstream-change cards removed; compact emphasis inherits the existing card palette.
Spooling instructions: key actions receive structured strong-text emphasis.
Leader Setup: two-stage decision, material guidance, and canonical Double Uni handoff enabled.
Reel-specific spooling: spinning, spincast, baitcasting.
Canonical Knot handoffs: Arbor Knot and Double Uni Knot.
Reel Setup Knot return context: exact step/state restoration enabled.
Normal Knot landing remains intentionally unwired to Reel Setup.
```

# Runtime Validation Plan

## Step 1 — Block 3.7 Regression Boundary

Confirm the validated spooling content, selective bolding, workflow palette, sticky navigation, Selected Choices, and spool-connection Knot return paths remain intact.

## Step 2 — Leader Decision

Confirm:

- **Next — Leader Setup** is enabled,
- **Do You Need a Leader?** opens,
- only **No Leader — Keep the Main Line** and **Add a Leader** are progression/branch choices,
- Back returns to Spool the Reel without clearing prior selections.

## Step 3 — No Leader

Confirm:

- No Leader opens Leader Setup,
- Selected Choices adds `No Leader — Keep the Main Line`,
- no Double Uni card appears,
- **Next — Reel Ready Check** is unavailable,
- Back returns to Leader Decision.

## Step 4 — Fluorocarbon Leader

Confirm:

- Add a Leader opens What Leader Material?,
- Fluorocarbon Leader opens Leader Setup,
- 3–4 ft wording is clearly a starting point,
- target-fish strength is clearly a starting reference rather than actual spool strength,
- selective emphasis is readable,
- Double Uni opens canonical Knot detail,
- return restores exact Leader Setup state,
- Back returns to Leader Material.

## Step 5 — Monofilament Leader

Confirm the same state/length/strength/Knot-return behavior plus the monofilament-specific stretch, knot-handling, buoyancy, and visibility tradeoffs.

## Step 6 — State / Navigation / Regression

Confirm:

- Add a Leader does not appear in Selected Choices,
- changing leader outcome replaces only `leaderChoice`,
- changing backing/upstream choices clears leaderChoice,
- Start Over / Home / Return to Knots clear Reel Setup,
- workflow cards retain the approved palette hierarchy,
- normal Knot landing remains intentionally unwired,
- no application-source JavaScript errors occur.

# Deferred Search UX Issue — Parking Lot

The existing Rig/Knot scoped-search issue remains deferred and unchanged:

- collection-level search is correctly scoped,
- generic examples can imply globally valid terms should work inside that scope,
- future work should use collection-aware examples plus an explicit scope cue and route to broader/global search.

Do not fold this issue into Block 3.8.

# Exact Resume Point

Block 3.8 production implementation is complete when the five changed files pass static validation and are packaged for GitHub Desktop.

After upload:

1. verify GitHub `main` and exact Block 3.8 blobs,
2. run the six-step Microsoft Edge runtime checklist above,
3. correct genuine defects before closeout,
4. only after runtime PASS mark Block 3.8 **PASS / VALIDATED**,
5. then formally open the next Package 3 capability: **Reel Ready Check / Rig Guide handoff**.
