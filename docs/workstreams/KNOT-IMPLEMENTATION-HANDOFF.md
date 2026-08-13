# Knot Implementation Handoff

**Status:** Approved / Ready to Resume  
**Date:** 2026-08-13  
**Repository:** `josjau/freshwater-fishing-companion`  
**Branch:** `main`  
**Runtime Validation Environment:** Windows Desktop + Brave Browser + GitHub Desktop

# Start Here

GitHub `main` is authoritative for all source files.

Before proposing any edit to an existing source file, fetch the latest GitHub contents. Do not assume a previously proposed version was implemented.

Production source/data/media/CSS/HTML/JavaScript/configuration changes are not written directly to GitHub by the assistant. They are delivered as user-reviewable ZIP packages for manual application through GitHub Desktop, then re-fetched and validated.

Project-progress Markdown may be written directly. If an authorized direct documentation write fails, immediately package the exact intended change as a ZIP, provide it to the user, and verify GitHub after upload.

No new feature milestone begins until Knots is fully implemented, validated, and closed out.

# Current Project Boundary

The Complete Rig Guide milestone is finalized.

Validated Rig/Tackle baseline:

- 20 active Rigs.
- Tier counts: 6 Beginner / 3 Beginner+ / 4 Intermediate / 4 Intermediate+ / 2 Advanced / 1 Expert.
- 6 Core Rigs in the approved order.
- 29 active canonical Tackle records.
- 29 active Tackle recognition-media records.
- Final Rig production correction commit: `4375ca3e05cfbfef6ab0a3e4662c2afd19b86f42`.

The active milestone is **Knots**.

Knots planning is complete. Production Knot implementation has **not** begun.

# Canonical Post-Rig Roadmap

1. Knots — active milestone.
2. Fish Guide.
3. What Should I Throw.
4. Tackle Reference / Find Tackle.
5. Settings / User Data Architecture Gate.
6. My Tackle.
7. Catch Log.
8. Global Search.
9. Favorites final decision.

Do not skip ahead unless the roadmap is explicitly revised.

# Approved Version 1 Knot Library

Exactly 10 canonical Knots:

## Core 4

1. Arbor Knot — `arbor-knot`
2. Improved Clinch Knot — `improved-clinch-knot`
3. Palomar Knot — `palomar-knot`
4. Double Uni Knot — `double-uni-knot`

## Additional Beginner / General

5. Uni Knot — `uni-knot`
6. Double Surgeon’s Knot — `double-surgeons-knot`
7. Non-Slip Loop Knot — `non-slip-loop-knot`
8. Dropper Loop Knot — `dropper-loop-knot`

## Specialized / Intermediate

9. Snell Knot — `snell-knot`
10. Alberto Knot — `alberto-knot`

Minor variations do not automatically become separate canonical entities. A new record requires a meaningfully different tying process or distinct practical fishing job.

Deferred examples include FG, Blood, Albright, Nail, Trilene, Perfection Loop, Bimini Twist, Double Palomar as a separate entity, and fly-specific systems.

# Difficulty

Allowed values:

- Beginner
- Intermediate
- Advanced

Version 1:

- Beginner: Arbor, Improved Clinch, Palomar, Double Uni, Uni, Double Surgeon’s.
- Intermediate: Non-Slip Loop, Dropper Loop, Snell, Alberto.
- Advanced: 0 active canonical Knots.

UI may show **Advanced Knots — Coming Soon**, but that placeholder is not a canonical entity and must not appear in search results.

# Canonical Knot Schema

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

Core membership is owned separately by ordered `CORE_KNOT_IDS[]`:

```text
arbor-knot
improved-clinch-knot
palomar-knot
double-uni-knot
```

Do not store:

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

# Controlled Vocabularies

`connectionTypes[]`:

```text
reel-spool-attachment
terminal-attachment
line-to-line
terminal-loop
dropper-loop
```

`compatibleLineTypes[]`:

```text
monofilament
fluorocarbon
braid
```

Aliases are legitimate alternate Knot names/spellings. Broad beginner task phrases belong in shared task vocabulary or `keywords[]`, not aliases.

# Tying-Step Model

`tyingSteps[]` is an ordered array of authoritative instruction strings.

- Array order is authoritative.
- Display numbering starts at 1 and is derived.
- Do not embed numbers inside instruction strings.
- `stepCount` is derived from array length.
- Do not introduce persistent step IDs unless actual animation implementation demonstrates a need.

# Rig → Knot Relationship Model

Rig owns contextual connection recommendations through:

```js
knotApplications: [
    {
        label: "Main line to hook",
        connectionType: "terminal-attachment",
        recommendedKnotIds: [
            "palomar-knot",
            "improved-clinch-knot",
            "uni-knot"
        ],
        notes: null
    }
]
```

Each entry has exactly:

- `label`
- `connectionType`
- `recommendedKnotIds[]`
- `notes`

Rules:

- Rig owns the physical connection context.
- Reverse Knot → Rig usage is derived.
- No application ID.
- No assembly-step index.
- No prose parsing.
- Only real tied connections are modeled; hardware-only joins are excluded.
- Referenced Knot IDs must resolve to active canonical Knot records.
- Recommendations are curated/selective, usually 1–3, not exhaustive.
- General tying instructions remain with the Knot; Rig notes are contextual only.
- All 20 active Rigs must be audited before release.
- Preliminary estimate was about 31 real tied connection points; final audited count is authoritative.

Special audit cases already identified:

- Drop Shot likely requires Palomar-specific contextual treatment because the long tag is routed back through the eye; verify during research.
- Double-Jig Crappie has an upper Dropper Loop plus lower terminal connection.
- Three-Way Rig contains five tied connection points.
- Bottom-Bouncer trailing harness hardware join is not a Knot application.
- Jika hardware joins through split rings are excluded; line-to-split-ring connection is tied.

# Knot Guide Navigation

Landing hierarchy:

1. Search all Knots.
2. Get Your Reel Ready.
3. Core Knots — Learn These First.
4. What are you trying to do?
5. All Knots.

Task-first order:

1. Attach Line to a Reel.
2. Tie On a Hook, Swivel, or Lure.
3. Connect Two Lines / Add a Leader.
4. Make a Loop Connection.

Core is a recommended starter set, not a mandatory course sequence.

# Knot Detail Page

Follow the approved cross-domain detail-page flow, using Rigs as the baseline where practical:

1. Identity header: Core status when applicable, difficulty, name, concise summary.
2. Paired **Best For | Where You'll Use It**.
3. **How to Tie It** with numbered authoritative steps and project-owned diagram/controlled animation where approved.
4. **Check Your Knot**.
5. **Common Mistakes**.
6. **When to Choose Another Knot**.

Verified external references are colocated with **How to Tie It**, not relegated to a detached bottom Sources block.

Persistent Parent/Home behavior remains. Entry from Reel Setup or another workflow must preserve return context.

# Search Standard

Version 1 search is deterministic and beginner-oriented.

Search sources:

1. canonical `name`,
2. verified `aliases[]`,
3. Knot-specific `keywords[]`,
4. shared task vocabulary from the same task-first definitions used by the Guide,
5. `difficulty`,
6. `compatibleLineTypes[]`.

Ranking direction:

1. exact name,
2. exact alias,
3. name prefix,
4. alias prefix,
5. exact Knot-specific keyword,
6. strong task-intent match,
7. partial name/alias/keyword,
8. structured line-type/difficulty match.

Approved normalization includes case/punctuation handling, selected filler-word removal, simple plural normalization, and common fishing shorthand such as `mono` → `monofilament` and `fluoro` → `fluorocarbon`.

Do not ordinary-search large instructional prose fields merely because incidental terms appear there.

Reel-spooling intent may surface contextual **Get Your Reel Ready** guidance in addition to Knot results.

Future advanced search remains explicitly allowed when demonstrated need justifies it.

# Research / Source Validation Standard

Every canonical Knot requires at least two independent credible technical sources before production:

- Source A anchors tying method and completed geometry.
- Source B independently verifies the method and practical use.

Additional claim-specific evidence is required when the base sources do not sufficiently establish line compatibility, specialized application, limitation, or disputed variation.

Preferred source hierarchy:

1. Government/public outdoor education.
2. Established angler-education, conservation, or fisheries organizations.
3. Reputable manufacturer technical education.
4. Established technical fishing publishers.
5. Recognized expert educators/guides/instructional channels.
6. Community/discovery sources only as leads, not sole canonical authorities.

Do not merge conflicting variations into a hybrid method. Unresolved technical disagreement requires another source, narrowing the claim, or deferring publication.

Canonical text is original Freshwater Fishing Companion editorial synthesis, not copied source prose.

Create and maintain:

`docs/KNOT_REFERENCE_SOURCES.md`

For each Knot record primary source, independent cross-check, additional claim-specific sources, claims validated, and variation-resolution notes.

# Knot Media Standard

Every active V1 Knot receives one manually constructed project-owned static instructional SVG.

Static is mandatory. Animation is optional and must earn inclusion by materially improving comprehension.

Preferred V1 baseline:

`images/knots/<knot-id>-instruction.svg`

Diagram requirements:

- mobile-first,
- visible derived step numbers,
- verified standing-line/tag-end paths,
- clear over/under crossings,
- arrows/direction where needed,
- hardware relationship where applicable,
- clear final completed state,
- color never the sole distinction.

Diagram labeling rule:

> Match canonical `tyingSteps[]` wording wherever practical. If the full step is too long for the diagram, use a concise derivative of that exact step without changing action, sequence, direction, or technical meaning.

Do not use generated imagery to invent Knot topology.

Animation:

- prototype only one first,
- no autoplay,
- no looping GIF behavior,
- Previous/Next,
- visible Step X of Y,
- keyboard accessible,
- practical touch targets,
- reduced-motion support,
- static path always remains complete,
- use verified discrete states rather than freeform path morphing that may create false topology.

Double Uni is a good prototype candidate but is not mandatory if another Knot better tests the mechanism.

# Media Registry Change

Implementation must explicitly broaden `data/media.js`:

**Old scope:** Tackle recognition-only registry.  
**New scope:** canonical cross-entity media registry for supported reference and instructional entities.

Existing Tackle records retain their meaning.

Knot media concept:

```text
ownerType: "knot"
ownerId: canonical Knot ID
type: "diagram"
```

Final animation media representation remains open until the prototype demonstrates the technical requirement.

# Reel & Line Setup — V1

First-class workflow inside Knots. Goal:

> Take a reel that needs line and get the beginner to a correctly spooled, usable line system ready to connect to a Rig.

Supported:

- new/empty reel,
- replacement line,
- Spinning,
- Spincast,
- Baitcasting spooling,
- I’m not sure reel identification,
- Monofilament / Fluorocarbon / Braid / I’m not sure,
- Help me choose,
- beginner species-based line type and pound-test guidance,
- rod/reel compatibility check,
- How to Read Your Reel,
- reel-type-aware backing logic,
- Arbor attachment,
- line-to-line Knot handoffs where needed,
- winding tension/spool-fill guidance,
- optional leader,
- context-preserving Knot instruction handoff/return,
- final **Reel Ready** checkpoint and Rig Guide handoff.

Default beginner setup is usually monofilament when appropriate.

Line guidance uses wording such as **Recommended starting range** and **Easy beginner choice**, never false precision or “Required line.”

Fly reels are excluded. Detailed baitcaster brake/casting tuning is excluded. Full optimization belongs later to Decision Knowledge.

# Approved Implementation Sequence

1. Documentation reconciliation / continuity records.
2. Research and canonical content lock for all 10 Knots.
3. Production Package 1 — `data/knots.js`, Core registry, Rig `knotApplications[]`, and required loading/integrity changes.
4. Production Package 2 — Knot landing/navigation/search/text detail pages.
5. Production Package 3 — Get Your Reel Ready.
6. Production Package 4 — ten approved static SVGs and Media registry integration.
7. Optional one-animation prototype gate.
8. Integrated regression/runtime validation.
9. Closeout documentation and transition to Fish Guide.

Recommended architecture during implementation:

- `data/knots.js` owns canonical Knot Reference Knowledge and `CORE_KNOT_IDS`.
- Broad task-first/reel guidance should be separated from canonical Knot records; a file such as `data/knot-guidance.js` is the preferred direction if implementation confirms it is useful.
- Do not implement heavy fuzzy/NLP search for V1.

# Final Release Gates

Before Knots can be finalized:

- exactly 10 active canonical V1 Knots,
- 6 Beginner / 4 Intermediate / 0 active Advanced,
- four unique valid Core IDs in approved order,
- all required Knot fields/enums valid,
- no excluded legacy Knot fields,
- two-source minimum satisfied for each Knot,
- all 20 active Rigs deliberately audited for `knotApplications[]`,
- every recommended Knot ID resolves,
- reverse Where You'll Use It output derives correctly,
- approved landing/task navigation works,
- search ranking/normalization/task vocabulary works,
- all ten detail pages follow approved hierarchy,
- all ten static instructional SVGs technically verified and user-approved,
- diagram labels remain aligned with canonical steps,
- Reel & Line Setup completes supported workflows and returns from Knot instruction to the correct place,
- Parent/Home and keyboard/mobile/accessibility behavior pass,
- Fish/Rig/Tackle/readiness/shared-search regressions pass,
- external references still load and remain relevant,
- GitHub Pages deployed state matches intended files,
- documentation matches deployed implementation.

Animation is optional. Failure to justify animation means defer it; it does not block Version 1 completion.

Blocking defects include technical instructional errors, unresolved canonical IDs, broken required workflow/navigation state, missing static instructional path for any V1 Knot, or regression of an already-finalized feature.

# Existing Approval Records

Treat these as approved project state:

- `docs/workstreams/KNOT-RELATIONSHIP-APPROVAL.md`
- `docs/workstreams/KNOT-DETAIL-PAGE-APPROVAL.md`
- `docs/workstreams/KNOT-SEARCH-APPROVAL.md`
- `docs/workstreams/KNOT-RESEARCH-VALIDATION-APPROVAL.md`
- `docs/workstreams/KNOT-MEDIA-WORKFLOW-APPROVAL.md`
- `docs/workstreams/KNOT-IMPLEMENTATION-PLAN.md`
- `docs/workstreams/DELIVERY-FALLBACK-RULE.md`
- `docs/DETAIL-PAGE-STANDARD.md`

The older `docs/workstreams/KNOT-GUIDE.md` revision 0.3.0 predates several later approvals. Do not use its stale “Exact Stopping Point” as the current resume point.

# Known Stale Documentation

The following older documents contain stale pre-Knots-planning statements and must not override the approval records above:

- `docs/HANDOFF.md` revision 1.2.0 — stale resume point.
- `docs/workstreams/KNOT-GUIDE.md` revision 0.3.0 — stale remaining-planning statements.
- `docs/data-model/04-KNOTS.md` revision 0.1.0 — stale Knot schema.
- `docs/data-model/03-RIGS.md` revision 0.2.4 — stale implementation-count language and lacks approved `knotApplications[]` documentation.
- `docs/data-model/09-RELATIONSHIPS.md` revision 0.3.2 — lacks approved Rig → Knot relationship section.
- `docs/MILESTONES.md` revision 2.1.0 — still describes Knots as pre-planning.
- `docs/ROADMAP.md` revision 0.3.2 — broad Knots direction is valid but does not contain all later approvals.

Do not make a destructive shortened replacement of these long documents. Re-fetch each immediately before targeted reconciliation, preserve unrelated content, and use the project replacement-integrity safeguards.

# Exact Resume Point

**Planning is complete.**

Do not reopen library/schema/navigation/search/source/media decisions unless implementation or research exposes a genuine defect.

The next work is:

## Research and Canonical Content Lock

1. Re-fetch current authoritative documentation/source as needed.
2. Create `docs/KNOT_REFERENCE_SOURCES.md`.
3. Research the ten canonical Knots under the two-source standard.
4. Resolve naming/variation/line-compatibility/application questions.
5. Draft the complete canonical content for all ten Knot records.
6. Cross-check all claims and tying sequences.
7. Only after content lock, prepare Production Package 1.

Do not start SVG production before each Knot's canonical method is locked.

Do not begin Fish Guide until the Knots milestone is finalized and validated.
