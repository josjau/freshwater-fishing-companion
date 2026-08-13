# Freshwater Fishing Companion — Knot Guide

**Document:** KNOT-GUIDE.md  
**Document Revision:** 0.3.0  
**Document Status:** Approved Planning / In Progress  
**Milestone:** Knots  
**Last Updated:** 2026-08-13

# Purpose

This workstream records the approved planning direction, implementation scope, and validation expectations for the Version 1 Knot Guide milestone.

GitHub `main` remains authoritative for all existing project files. Production source, data, image, configuration, CSS, HTML, JavaScript, and other non-Markdown implementation files are not written directly to GitHub by the assistant; production changes will be delivered through the approved user-reviewable package workflow.

# Product Goal

The Knot Guide must help a first-time or new freshwater angler solve practical connection and reel-readiness problems without requiring prior knowledge of knot names or fishing terminology.

The milestone should get the user from questions such as:

- How do I put line on this reel?
- What line should I start with for the fish I want to catch?
- How do I read the line-capacity numbers on my reel?
- How do I tie on a hook, swivel, or lure?
- How do I connect backing, main line, or leader?
- Which knot should I learn first?

into a clear, technically correct, beginner-oriented workflow.

# Approved Design-Flexibility Rule

The approved information architecture and interaction flow establish the Version 1 design direction, but they are not intended to force a poor user experience during implementation.

During build and runtime validation, layout, ordering, labels, card treatment, and navigation mechanics may be refined when the actual interface demonstrates that the approved concept does not flow naturally.

Such refinements may be made without reopening the entire Knot milestone when they preserve the approved functional intent, beginner-first behavior, data ownership, and feature scope.

Any proposed change that alters architecture, canonical data ownership, Version 1 scope, or the meaning of an approved workflow still requires explicit approval before implementation.

# Approved Version 1 Knot Library

Version 1 contains **10 canonical Knots**.

## Core Knots — Learn These First

The Core set is intentionally small. Core means a first-time angler should learn these broadly useful connections before being asked to choose among many alternatives.

1. **Arbor Knot** — primary reel-spool attachment knot; required by Reel & Line Setup.
2. **Improved Clinch Knot** — primary simple general-purpose terminal connection for hooks, swivels, and many lures.
3. **Palomar Knot** — simple strong terminal alternative, especially useful across common freshwater applications and braid-capable setups.
4. **Double Uni Knot** — primary beginner line-to-line connection for backing/main-line and leader applications.

## Additional Beginner / General Knots

5. **Uni Knot** — versatile terminal knot with additional legitimate uses, including some spool-attachment applications.
6. **Double Surgeon’s Knot** — simple line-to-line / leader connection option.
7. **Non-Slip Loop Knot** — terminal loop connection for applications where lure or bait movement benefits from a free loop.
8. **Dropper Loop Knot** — branch/dropper connection for multi-hook or multi-jig arrangements; directly relevant to the canonical Double-Jig Crappie Rig.

## Specialized / Intermediate Knots

9. **Snell Knot** — specialized hook connection for applications where a snelled hook is appropriate.
10. **Alberto Knot** — more specialized braid-to-mono/fluorocarbon connection, especially where line materials or diameters differ substantially.

# Canonical Knot-Library Rule

Minor variations do not automatically become separate canonical Knot records.

A new canonical Knot should require either:

- a meaningfully different tying process, or
- a distinct practical fishing job not adequately covered by the existing library.

Named variations may be documented within the parent Knot when that is clearer for a beginner and does not create a second source of truth.

# Deferred / Parking Lot Knots

Version 1 deliberately does not expand into a knot encyclopedia.

Deferred examples include:

- FG Knot,
- Blood Knot,
- Albright Knot,
- Nail Knot,
- Trilene Knot,
- Perfection Loop,
- Bimini Twist,
- Double Palomar as a separate canonical entity,
- fly-fishing and fly-line-specific knot systems.

These may be reconsidered later when a demonstrated feature, Rig, Technique, or fishing method requires them.

# Approved Knot Guide Navigation

The Knot Guide uses **task-first discovery** rather than requiring a beginner to understand knot taxonomy before finding the correct connection.

The planned landing-page hierarchy is:

1. **Search all Knots**
2. prominent **Get Your Reel Ready** beginner workflow
3. **Core Knots — Learn These First**
4. **What are you trying to do?** task-first discovery
5. **All Knots**

Technical classifications such as terminal, line-to-line, loop, reel-spool, or specialized connection remain useful metadata and filtering concepts, but they are not the primary entry point for a first-time angler.

## Task-First Discovery Order

The task-first discovery area must lead with **Attach Line to a Reel**.

Approved task order:

1. **Attach Line to a Reel**
   - primary Knot: Arbor Knot,
   - Uni Knot may appear as an appropriate documented alternative,
   - prominently links into **Get Your Reel Ready** when the user needs the complete spooling workflow rather than only the attachment knot.

2. **Tie On a Hook, Swivel, or Lure**
   - Improved Clinch Knot,
   - Palomar Knot,
   - Uni Knot,
   - Snell Knot when the application specifically calls for a snelled hook connection.

3. **Connect Two Lines / Add a Leader**
   - Double Uni Knot,
   - Double Surgeon’s Knot,
   - Alberto Knot.

4. **Make a Loop Connection**
   - Non-Slip Loop Knot for a free-moving terminal loop,
   - Dropper Loop Knot for a branch/dropper connection in the line.

The UI should explain the practical difference between candidate knots instead of presenting several names without context.

## Search Position and Intent

Search remains immediately available near the top of the Knot Guide.

Search must support both canonical Knot names and beginner/task language. Exact search vocabulary and ranking rules remain a separate planning decision.

## Core Presentation

Core Knots are a recommended starter set, not a mandatory course sequence.

Core presentation should explain what each Knot unlocks:

- Arbor Knot — get line onto the reel,
- Improved Clinch Knot — tie on hooks, swivels, and many lures,
- Palomar Knot — another simple terminal connection across common freshwater setups,
- Double Uni Knot — connect backing, main line, and leaders.

The interface should not imply that the user must master all four in a fixed numerical order before fishing.

## All Knots

All 10 active Version 1 Knot cards should be available in the **All Knots** view.

Every active Knot card must visibly display its difficulty level.

Cards should remain compact and should primarily answer:

- what the Knot is,
- what practical connection it solves,
- whether it is appropriate for the user’s current task,
- its difficulty level.

Detailed instructional content belongs on the Knot detail view rather than the browse card.

## Advanced Placeholder

Version 1 contains no active Advanced-difficulty Knot records, but the interface should include an **Advanced Knots** placeholder card using language such as **Coming Soon**.

This placeholder is a presentation affordance only:

- it is not a canonical Knot entity,
- it is not counted in the 10-knot Version 1 library,
- it must not appear as an active Knot search result,
- it must not imply that Advanced knots are already available,
- its exact visual placement may be adjusted during implementation if another placement produces a clearer flow.

The placeholder communicates planned future growth without fabricating content.

# Approved Knot Difficulty Taxonomy

Knot difficulty uses exactly three allowed values:

- **Beginner**
- **Intermediate**
- **Advanced**

The Knot Guide does not use the Rig Guide’s `Beginner+` or `Intermediate+` levels.

Difficulty means:

> How difficult the Knot is to learn and reliably tie correctly.

Difficulty does **not** represent knot strength, species difficulty, technique sophistication, or how specialized the Knot’s use may be.

Core membership and difficulty are independent concepts. A Knot may be easy to tie without being Core, and a future Core use case would not automatically redefine tying difficulty.

## Version 1 Difficulty Assignments

### Beginner — 6

- Arbor Knot
- Improved Clinch Knot
- Palomar Knot
- Double Uni Knot
- Uni Knot
- Double Surgeon’s Knot

### Intermediate — 4

- Non-Slip Loop Knot
- Dropper Loop Knot
- Snell Knot
- Alberto Knot

### Advanced — 0 Active Knots

No Version 1 canonical Knot is artificially promoted to Advanced merely to populate the tier.

The Advanced taxonomy remains valid for future knots whose tying process genuinely warrants it, while the Version 1 interface uses the approved **Advanced Knots — Coming Soon** placeholder to represent that future expansion.

# Approved Canonical Knot Schema

The Version 1 canonical Knot entity extends the Foundation entity with only fields that support approved Knot Guide features.

Approved schema:

```text
id
name
summary
createdVersion
lastModifiedVersion
isActive

difficulty
connectionTypes[]
compatibleLineTypes[]

aliases[]
keywords[]

bestFor[]
limitations[]

tyingSteps[]
commonMistakes[]
finalChecks[]

referenceLinks[]
```

Core membership is not stored as an `isCore` field on individual Knot records. It is owned by the curated Core registry:

```text
CORE_KNOT_IDS[]
```

Approved ordered Core registry:

```text
arbor-knot
improved-clinch-knot
palomar-knot
double-uni-knot
```

## Schema Changes from the Original Draft

The original `docs/data-model/04-KNOTS.md` Draft predates the current architecture and must later be reconciled with these approved decisions.

Approved changes:

- replace singular `purpose` with `connectionTypes[]`,
- remove `strengthRating`,
- remove stored `stepCount`,
- remove Knot-owned `imageIds`,
- remove `relatedRigIds`,
- remove `relatedTechniqueIds` for Version 1,
- add `aliases[]`,
- add `keywords[]`,
- add `bestFor[]`,
- add `limitations[]`,
- add authoritative ordered `tyingSteps[]`,
- add `commonMistakes[]`,
- add `finalChecks[]`,
- add `referenceLinks[]`.

No production Knot data exists yet, so these are planning/schema corrections rather than migrations.

# Approved Controlled Vocabularies

## difficulty

Allowed values:

```text
Beginner
Intermediate
Advanced
```

These are stored as the same user-facing values displayed by the application.

## connectionTypes[]

Approved stored values:

```text
reel-spool-attachment
terminal-attachment
line-to-line
terminal-loop
dropper-loop
```

Approved meanings:

- `reel-spool-attachment` — Attach Line to a Reel
- `terminal-attachment` — Hook, Swivel, or Lure Attachment
- `line-to-line` — Connect Two Lines / Add a Leader
- `terminal-loop` — Free-Moving Terminal Loop
- `dropper-loop` — Branch / Dropper Loop

Do not create separate structural taxonomy values solely for hook attachment, swivel attachment, lure attachment, leader connection, backing connection, or Snell hook connection when those are application contexts of the approved connection types.

## compatibleLineTypes[]

Approved stored values:

```text
monofilament
fluorocarbon
braid
```

The field identifies line materials for which the Knot is reasonably appropriate in supported applications. It does not imply that every possible pairing of listed materials is equally recommended.

A separate machine-readable line-pairing matrix is not part of Version 1 unless implementation demonstrates a concrete need for it.

# Approved Search Metadata Semantics

## aliases[]

`aliases[]` contains legitimate alternative names or accepted naming/spelling variants for the Knot.

Task phrases do not belong in aliases.

## keywords[]

`keywords[]` contains deliberate beginner/task search-intent terms such as:

```text
tie hook
connect two lines
braid to leader
backing to braid
add a leader
```

The approved field name is `keywords[]`, not the earlier working name `searchTerms[]`, so the Knot model follows the Foundation Search Metadata Standard.

# Approved Instructional Context Fields

## bestFor[]

Curated beginner-oriented statements explaining situations in which the Knot is particularly useful.

This field may also support comparison when a task returns several candidate Knots.

## limitations[]

Curated statements explaining practical drawbacks, constraints, or situations where another Knot may be a better choice.

This field should use neutral instructional language rather than labels such as `cons`, `weaknesses`, or `avoidWhen`.

# Approved Tying-Step Model

`tyingSteps[]` is the authoritative ordered non-video tying sequence.

Version 1 stores the steps as an ordered array of instruction strings.

Rules:

- array order is authoritative,
- the UI always presents visible numbered steps,
- display numbering starts at 1,
- step numbers are derived from array position and are not stored as separate data,
- step numbers are not embedded manually in the instruction text,
- `stepCount` is derived from `tyingSteps.length` and is not stored,
- the visual presentation should align with the established Rig Guide **How to Build It** numbered-step pattern.

If animation implementation later proves that individual instructional steps require persistent independent identity, `tyingSteps[]` may evolve to step objects with stable step IDs. Even in that case, display step numbers remain derived rather than stored.

# Approved Teaching-Support Fields

## commonMistakes[]

Authoritative beginner-oriented mistakes that help explain why a Knot may fail or be tied incorrectly.

## finalChecks[]

Authoritative checks that help the angler determine whether the Knot is dressed, seated, and completed correctly.

This field remains separate from `commonMistakes[]` because it answers a different beginner question: **Did I tie this correctly?**

# Approved Source Field

## referenceLinks[]

Version 1 uses the established simple reference-link structure:

```text
referenceLinks: [
    {
        label: "...",
        url: "..."
    }
]
```

The exact research/source-validation standard remains a separate planning decision.

# Approved Knot Media Ownership

Knot records do not store `imageIds[]` or `animationIds[]` for the same relationship already owned by canonical Media records.

Instructional media should use the established media ownership pattern conceptually as:

```text
Media
    ownerType: "knot"
    ownerId: "palomar-knot"
```

Knot instructional media is then derived from active Media records associated with that canonical Knot.

This preserves one relationship owner and avoids storing both `Knot.imageIds` and `Media.ownerId` as duplicate sources of truth.

The exact animation media vocabulary/implementation remains to be finalized during the diagram/animation planning topic.

# Explicitly Excluded Version 1 Knot Fields

Do not store the following on canonical Knot records unless a later approved requirement demonstrates a need:

```text
isCore
stepCount
strengthRating
relatedRigIds
relatedTechniqueIds
imageIds
animationIds
taskIds
primaryPurpose
recommendedSpecies
```

Knot records describe the connection itself. Rig, Technique, Reel Setup, and future Decision Knowledge provide fishing context.

# Approved Knot Instructional Media Direction

For Knots, project-owned diagrams and controlled animations are preferred over video.

Preferred order:

1. project-owned instructional diagram,
2. project-owned user-controlled step-through animation,
3. diagram and animation together when motion materially improves understanding,
4. external video only when the knot cannot be taught adequately with diagram/animation,
5. supplemental video may be approved as an exception for more advanced knots when hand position, tensioning, or motion is materially clearer in video.

Core Knots must have a complete non-video instructional path.

Animations must:

- be user-controlled,
- not autoplay,
- remain understandable when motion is disabled,
- support reduced-motion preferences,
- preserve a clear static final-knot state.

# Approved Reel & Line Setup Direction

Reel & Line Setup is a first-class beginner workflow inside the Knots milestone, not merely an Arbor Knot article.

Version 1 supports:

- new/empty reel setup,
- replacement-line setup,
- Spinning reels,
- Spincast reels,
- Baitcasting reels,
- an **I'm not sure** reel-identification path,
- simple reel-recognition help,
- Monofilament, Fluorocarbon, and Braid selection/identification,
- an **I'm not sure** line-identification path,
- beginner species-based line type and pound-test guidance,
- an all-around beginner recommendation for multiple common freshwater targets,
- reel/rod compatibility checks,
- reel-type-aware backing decisions,
- Arbor Knot integration for spool attachment,
- Double Uni or other approved canonical line-to-line Knot integration when backing or leader connections require it,
- line-routing and reel-specific spooling instruction,
- winding-tension and spool-fill guidance,
- optional leader connection,
- context-preserving navigation into Knot instruction and back into Reel Setup,
- a final **Reel Ready** checkpoint with direct handoff to the Rig Guide.

# Beginner Line Guidance Boundary

Reel & Line Setup owns enough line-selection guidance to get a beginner fishable.

It may provide:

- target-species starting line type,
- starting pound-test range,
- a simple beginner choice where appropriate,
- concise reasoning,
- limitations and situations where heavier/lighter line may be needed.

It does not own full fishing optimization by lure, cover, technique, abrasion, sensitivity, depth, or presentation. Those decisions remain future recommendation/Technique knowledge.

# How to Read Your Reel

Version 1 includes a small beginner section explaining how to interpret reel line-capacity markings.

It should teach:

- where line-capacity markings are commonly found,
- how to identify `lb`, `yd`, `m`, `mm`, Mono, and Braid labels,
- that pound-test indicates line strength while yards/meters indicate approximate capacity for the corresponding diameter,
- that manufacturer label order may vary and printed units must be read rather than assumed,
- that model/size numbers such as 1000, 2500, 3000, or 4000 are not direct pound-test ratings,
- how to compare a species-based beginner line recommendation with actual reel/rod compatibility,
- what to do when the chosen line and equipment are not compatible.

A simple labeled reel/spool diagram should support this explanation.

# Reel-Specific Scope Boundary

Spinning, Spincast, and Baitcasting receive complete line-installation/replacement guidance appropriate to their design.

Baitcasting scope covers correct spooling only. Detailed brake tuning, spool-tension tuning, backlash prevention, lure-weight configuration, and casting instruction are outside this workflow.

Fly reels and fly-line-specific setup remain Parking Lot for Version 1.

# Approved Backing Model

Backing guidance is reel-type-aware rather than a universal braid rule.

The line system should be taught visually as:

- without backing: Reel spool → Main line → optional leader → Rig,
- with backing: Reel spool → Backing → Main line → optional leader → Rig.

When backing is appropriate, the workflow should explain what it is, why it is being used, how it attaches to the spool, how it connects to main line, and how the user returns to Reel Setup after viewing the applicable canonical Knot instructions.

# Relationship Direction Still to Finalize

The current recommended architecture is that Knot records do **not** manually store inverse Rig relationships.

A Rig should own the contextual connection recommendation required by that Rig, and Knot → Used With should be derived from those Rig-owned references.

The exact production field name and schema are not yet approved.

A 20-Rig connection audit is expected during this milestone so existing generic `Tie...` assembly instructions can be associated with appropriate canonical Knot recommendations without embedding IDs into instructional strings.

# Remaining Planning Decisions Before Production

The following still require explicit approval before implementation begins:

1. exact Rig → Knot relationship field/schema and 20-Rig audit rules,
2. Knot detail-page information hierarchy,
3. exact search behavior and beginner search vocabulary,
4. research/source-validation standard for canonical Knot instructions,
5. diagram/animation production and technical validation workflow,
6. final milestone validation checklist and implementation sequence.

# Production Gate

No production Knot data, JavaScript, CSS, HTML, or instructional media should be implemented until the planning decisions above are settled sufficiently to avoid redesigning the feature during implementation.

# Related Documents

- `../PROJECT.md`
- `../ROADMAP.md`
- `../HANDOFF.md`
- `../ARCHITECTURE.md`
- `../DECISIONS.md`
- `../MEDIA_GUIDE.md`
- `../data-model/04-KNOTS.md`
- `../data-model/09-RELATIONSHIPS.md`
