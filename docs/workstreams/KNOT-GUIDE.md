# Freshwater Fishing Companion — Knot Guide

**Document:** KNOT-GUIDE.md  
**Document Revision:** 0.1.0  
**Document Status:** Approved Planning / In Progress  
**Milestone:** Knots  
**Last Updated:** 2026-08-12

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

# Knot Data Model Still to Finalize

The existing `docs/data-model/04-KNOTS.md` remains a Draft and must be reconciled before production implementation.

Current recommended direction includes:

- `aliases[]`,
- controlled connection/purpose taxonomy,
- `compatibleLineTypes[]`,
- beginner-oriented search terms,
- `bestFor[]`,
- `limitations[]`,
- authoritative `tyingSteps[]`,
- `commonMistakes[]`,
- `finalChecks[]`,
- verified references,
- instructional media references,
- optional tutorial metadata only when the media policy justifies video.

The current draft concepts `strengthRating`, stored `stepCount`, singular `purpose`, and manually stored `relatedRigIds` require review before adoption.

# Remaining Planning Decisions Before Production

The following still require explicit approval before implementation begins:

1. final Knot Guide landing-page/task-first navigation,
2. exact Knot difficulty taxonomy,
3. exact canonical Knot schema and controlled vocabularies,
4. exact Rig → Knot relationship field/schema and 20-Rig audit rules,
5. Knot detail-page information hierarchy,
6. exact search behavior and beginner search vocabulary,
7. research/source-validation standard for canonical Knot instructions,
8. diagram/animation production and technical validation workflow,
9. final milestone validation checklist and implementation sequence.

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
