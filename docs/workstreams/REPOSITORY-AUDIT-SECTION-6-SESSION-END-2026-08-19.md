# Freshwater Fishing Companion — Repository Audit Section 6 Session-End Record

**Document Revision:** 1.0.0  
**Document Status:** Approved  
**Section Status:** Section 6 OPEN / Governing Synchronization Discussion In Progress  
**Session End:** 2026-08-19  

# Purpose

This record preserves every material decision and approved reconciliation direction from the current Section 6 discussion before the session ends.

It exists to prevent chat-to-repository drift while Section 6 remains unfinished. Items below are authoritative approved direction for the open Section 6 workstream unless a later explicit decision changes them.

This document does **not** mark the affected governing documents synchronized merely because the decision is recorded here. Each canonical target must still be re-fetched from GitHub `main`, reconciled by complete-file replacement, written, and post-write verified during Section 6 implementation.

# Repository State

Repository Audit Sections 1–5 are complete.

Section 6 — Governing Documents Comprehensive Synchronization — remains OPEN.

Fish Guide Phase 0 remains paused behind the Repository Audit Cleanup Gate.

No production JavaScript, CSS, HTML, application data, media, image, configuration, or other non-Markdown production file was changed during this Section 6 discussion.

# Approved Decision A — Full-File Delivery, Narrow Change Scope, and Production Write Boundary

Full-file replacement remains the standard final delivery method for changed production files.

The project distinguishes **authorized edit scope** from **delivery format**:

- semantic changes remain narrowly limited to approved work,
- unrelated diffs are failures,
- the final artifact for each changed production file is the complete resulting file,
- coherent production changes should normally be delivered as a repository-relative ZIP containing only repository files/folders,
- the user reviews/applies production packages through GitHub Desktop,
- assistant direct GitHub writes are limited by default to Markdown documentation (`.md`),
- any assistant direct write of production source/data/media/configuration requires explicit authorization for that specific action,
- a complete full-file validation copy remains required after planned source-file edits are complete.

Reason: patch-style/small-edit workflows previously created truncation/preservation risk. Full-file delivery plus narrow authorized scope provides a stable validation artifact without authorizing unrelated rewrites.

**Canonical synchronization targets:**

- `docs/DECISIONS.md` — D014
- `docs/DEVELOPMENT_WORKFLOW.md`
- concise supporting wording in `docs/STYLE_GUIDE.md`

**Status:** Approved / canonical synchronization pending.

# Approved Decision B — Commit Economy and Documentation Freshness

A coherent section should use as few commits as practical while preserving reviewability, validation boundaries, rollback safety, and accurate documentation.

Preferred behavior:

1. Avoid discussion/planning commits unless durable context must be preserved before implementation.
2. Prefer one coherent implementation commit when implementation and truthful documentation can safely travel together.
3. Use a later validation/closeout documentation commit when runtime/deployment/user validation changes the implementation state.
4. Do not create a commit for every small file or documentation adjustment when changes can safely be grouped.
5. Additional commits should have a concrete reason such as a defect, correction, validation-driven state change, or session-preservation need.
6. Never reduce commit count by allowing current-state/governing documentation to become stale.
7. Never make a commit so broad that reviewability, rollback clarity, or validation boundaries are materially weakened.

Permanent priority when the two goals conflict:

> Preserve correct recoverable project state first; minimize commit count second.

**Canonical synchronization target:** `docs/DEVELOPMENT_WORKFLOW.md`, with D014 supporting summary as appropriate.

**Status:** Approved / canonical synchronization pending.

# Approved Decision C — Mandatory Session-End Documentation Gate

When the user indicates that a work session is ending — including wording such as `end session`, `stop here`, `continue tomorrow`, or an equivalent clear ending signal — normal implementation/audit progression stops and a mandatory documentation reconciliation occurs before the session is treated as closed.

The gate applies even when the current section or milestone is unfinished.

Before session end, repository documentation must preserve, as applicable:

1. approved decisions made during the session,
2. approved changes/fixes that have not yet been implemented,
3. relevant rejected or deferred alternatives when the reason matters later,
4. newly discovered defects, contradictions, risks, or audit findings,
5. actual implementation/validation state — distinguishing what is on `main`, what is approved only, what remains unvalidated, and what has not started,
6. unresolved decisions clearly marked unresolved rather than silently decided,
7. the exact continuation point and next intended action.

Ownership rule:

- durable architecture/product/workflow decisions belong in `DECISIONS.md` when canonical synchronization occurs,
- operational workflow rules belong in `DEVELOPMENT_WORKFLOW.md`,
- domain decisions belong in their relevant data-model/governing documents,
- active section/audit state belongs in the active workstream record,
- `HANDOFF.md` owns the first-read continuation map and must be reconciled before final section closeout and at session end whenever practical/safe,
- Handoff must not become the sole canonical owner of durable decisions.

If approved decisions are clear, session-end documentation may be performed automatically without another approval round. If documentation would require interpreting an unresolved discussion as a decision, provide a concise decision summary or obtain the minimum necessary clarification before recording it as approved.

Permanent principle:

> Never guess merely to finish session documentation, but never leave clearly approved material only in chat history because the section is unfinished.

A session-preservation documentation commit is an explicit justified exception to normal commit minimization.

**Canonical synchronization target:** `docs/DEVELOPMENT_WORKFLOW.md` — permanent Session-End Documentation Gate.

**Status:** Approved / preserved by this session-end record / canonical workflow synchronization pending.

# Approved Decision D — Four-State Forward Regional Focus

The Companion's forward regional content focus is:

- Northeast Oklahoma
- Southeast Kansas
- Southwest Missouri
- Northwest Arkansas

Existing validated content is not automatically invalidated because a domain was originally selected under a narrower regional scope.

Regional reconciliation is progressive and additive by default:

- preserve original validation context,
- evaluate a domain against the Four-State focus when that domain is already being audited or materially modified,
- add important missing regional coverage where justified,
- do not remove valid existing content merely because its relative regional importance changes,
- if a regional finding would require significant architecture/data-model/UI rewiring, discuss that change explicitly before implementation.

Fish Guide Phase 0 already uses the Four-State scope.

**Canonical synchronization targets:** `DECISIONS.md`, `ARCHITECTURE.md`, `ROADMAP.md`, `PROJECT.md`, `SPECIFICATION.md`, relevant domain/workstream docs.

**Status:** Approved regional direction / progressive reconciliation.

# Approved Decision E — D027 Historical Rig Scope + Four-State Rig Adequacy Audit

Preserve this historical/current fact:

> The initial 20-Rig library was selected and validated using Northeast Oklahoma and Southwest Kansas as its original regional-practicality scope.

The existing 20 Rigs remain canonical and validated.

The library will receive an additive Four-State adequacy audit:

- do not reopen/remove existing valid Rigs solely because geography expanded,
- determine whether important Four-State fishing methods are materially absent,
- propose additions only when practical regional value is demonstrated,
- leave the 20-Rig library unchanged if no meaningful gap exists.

Specialized methods must not automatically become ordinary Rigs merely for regional completeness. Paddlefish snagging is the current example requiring later architectural review because it may involve a substantially different rod/reel/line/tackle system plus species-specific method/regulatory context.

**Canonical synchronization targets:**

- `docs/DECISIONS.md` — D027
- `docs/data-model/03-RIGS.md` — status/domain interpretation when Section 7 reconciles the model
- relevant later regional audit record

**Status:** Existing 20-Rig library Validated / Finalized; Four-State adequacy audit Approved / Not Yet Performed.

# Approved Decision F — D051 Context-Preserving Parent Navigation

Retire the former site-wide Parent-to-top rule.

Canonical standard for ordinary application views:

```text
Forward
-> new destination starts at top

Parent
-> immediately preceding standard application view
-> applicable prior UI state
-> prior scroll position

Home
-> Dashboard starts at top
-> contextual return state is cleared
```

A saved source scroll position must never transfer into a newly opened destination.

Persistent/floating navigation controls remain the visual standard.

Specialized workflows may use separately approved navigation semantics when workflow state requires them. Reel Setup is an approved example of a specialized step-aware navigation context. A specialized workflow does not redefine ordinary site-wide Parent behavior.

Current broader production routing still contains older top-reset behavior in places. Section 6 is documentation-only; the general source implementation remains a later deliberate production package/validation task.

**Canonical synchronization targets:**

- `docs/DECISIONS.md` — revise D051 rather than creating a duplicate decision
- `docs/STYLE_GUIDE.md`
- `docs/ARCHITECTURE.md`
- `docs/NAVIGATION-PAGE-STANDARD.md` remains the correct operational target and does not need semantic redesign

**Status:** Approved architecture / broader production implementation pending.

# Approved Decision G — D003 + D056 + Rig↔Technique Ownership

Preserve Technique as an independent canonical Reference Knowledge entity that owns reusable presentation behavior.

D003 must no longer state or imply that Rigs canonically reference Techniques.

Rig continues to own physical assembly/configuration. Technique continues to own reusable presentation/retrieve/cadence/rod/reel behavior.

The canonical storage owner and exact structure of Rig↔Technique compatibility remain deliberately deferred until the Technique architecture gate.

Do not later store the same semantic relationship in both:

```text
Rig.techniqueIds[]
```

and

```text
Technique.compatibleRigIds[]
```

unless a later explicit decision proves they represent genuinely different semantics.

The Technique architecture gate must first determine whether the needed relationship is:

- simple Reference Knowledge compatibility owned by one side, or
- contextual Decision Knowledge carrying suitability/conditions/species/priority/rationale.

Bidirectional UI navigation may be derived from one canonical owner.

D056 implementation status must also be corrected to current facts:

- Section 4 removed Tackle `mediaIds[]`,
- Media `ownerType` + `ownerId` owns Tackle attachment,
- renderer derives the lookup,
- Section 4 is validated,
- Section 5 applied D056 by removing Rig `imageIds[]` and speculative empty `techniqueIds[]`,
- Rig↔Technique ownership remains deferred.

**Canonical synchronization targets:**

- `docs/DECISIONS.md` — D003 and D056
- `docs/data-model/09-RELATIONSHIPS.md` — remove wording implying Rig owns compatibility
- `docs/data-model/03A-TECHNIQUES.md` is already directionally correct; broader future-model audit remains later

**Status:** Approved / canonical synchronization pending.

# Approved Decision H — `ARCHITECTURE.md` Reconciliation

`ARCHITECTURE.md` should remain a current-architecture document, not an implementation-history ledger.

Preserve its structural skeleton, source tree/load order, theme/archive/three-layer/search architecture, My Tackle future model, and User Knowledge trust boundary.

Remove stale current-state narration such as:

- nine active Rigs,
- later Rig tiers not implemented,
- 15→17→20 Tackle progression as current architecture,
- Tackle-only Media catalog,
- Texas Rig as merely the first tutorial trial,
- Core Rigs/Tackle Media build still In Progress,
- Rig `imageIds` potentially remaining.

Current architecture should reflect:

- 20 active canonical Rigs,
- 29 active canonical Tackle concepts,
- 29 current Tackle recognition-media attachments,
- 10 canonical Knots,
- completed Reel & Line Setup,
- Media as cross-entity attachment owner through `ownerType` + `ownerId`,
- Rig does not own inverse media IDs,
- Rig↔Technique storage ownership remains deferred,
- explicit source ownership summaries for `data/knots.js`, `data/knot-guidance.js`, `data/reel-guidance.js`, and `knot-media-renderer.js`,
- current validated Rig Guide rather than the old nine-Rig expansion state,
- Four-State forward focus plus preserved original Rig validation context/additive audit,
- revised D051 navigation architecture plus specialized-workflow exception.

Historical progression belongs in `MILESTONES.md`, `CHANGELOG.md`, and workstream records.

**Status:** Approved / canonical synchronization pending.

# Approved Decision I — `DEVELOPMENT_WORKFLOW.md` + `STYLE_GUIDE.md` Reconciliation

## `DEVELOPMENT_WORKFLOW.md`

Preserve existing GitHub authority, full-file replacement, replacement-integrity gate, post-write verification, archive classification, D055, production-write gate, and documentation closeout safeguards.

Add/clarify:

- full-file replacement is delivery format, not authorization for broad edits,
- explicit commit-economy rule,
- explicit `.md`-only assistant direct-write default for GitHub,
- mandatory Session-End Documentation Gate defined above.

## `STYLE_GUIDE.md`

Reconcile:

- old Parent-to-top wording -> context-preserving Parent standard,
- allow documented specialized workflow navigation such as Reel Setup,
- preserve source-scroll isolation for new destinations,
- full-file replacement remains delivery standard while semantic scope remains targeted,
- `DEVELOPMENT_WORKFLOW.md` owns Implementation Status vocabulary rather than maintaining a second incomplete enum,
- change `Future Core Knots` to current `Core Knots`,
- do not duplicate detailed commit/session workflow rules in Style Guide.

**Status:** Approved / canonical synchronization pending.

# Approved Decision J — `CHANGELOG.md` + `MILESTONES.md` + `ROADMAP.md` Reconciliation

## `CHANGELOG.md`

Preserve historical chronological entries.

Reconcile the current `Unreleased` state so it no longer says Knot Packages 3/4 are unstarted. Current summary must reflect:

- Knot Packages 1–4 complete,
- Knots validated/finalized/closed,
- Reel & Line Setup complete,
- Repository Audit Sections 1–5 complete,
- Section 4 Tackle↔Media ownership cleanup implemented/validated,
- Section 5 Rig schema cleanup implemented/validated,
- Section 6 governing-document synchronization active.

Where an old entry contains behavior that was true then but later superseded, preserve the historical entry and add a concise supersession/current note where needed rather than rewriting history.

## `MILESTONES.md`

Preserve historical milestone validation facts, including the fact that top-reset Parent behavior passed at the time of the historical Core Rig milestone.

Add a current supersession note pointing to revised D051 rather than altering historical validation.

Correct Roadmap revision reference from `0.3.3` to current `0.3.4`.

Distinguish:

- next product milestone = Fish Guide,
- current active workstream = Repository Audit Cleanup.

Fish remains next in the product sequence but paused until the audit gate closes.

## `ROADMAP.md`

Keep the numbered product sequence unchanged:

1. Knots
2. Fish Guide
3. What Should I Throw
4. Tackle Reference / Find Tackle
5. Settings / User Data Architecture Gate
6. My Tackle
7. Catch Log
8. Global Search
9. Favorites final decision

Repository Audit Cleanup is a maintenance/governance gate, not a numbered product milestone.

Update current status so Fish is not described as the immediate next-session start while the audit remains open.

Add concise Four-State forward-focus policy and preserve the existing 20-Rig original validation context plus additive Four-State adequacy audit.

**Status:** Approved / canonical synchronization pending.

# Previously Recorded Section 6 Decisions

The earlier Section 6 decision record remains controlling for the detailed approved wording already committed before this session-end record:

- `docs/workstreams/REPOSITORY-AUDIT-SECTION-6-DECISIONS.md` revision 1.0.1

It already records:

- full-file delivery / targeted scope,
- commit economy foundation,
- Four-State forward focus,
- D027 historical Rig scope / Four-State audit,
- D051 context-preserving navigation.

This session-end record extends that approved set with D003/D056/Rig↔Technique, Architecture reconciliation, Workflow/Style reconciliation, planning/history trio reconciliation, and the mandatory Session-End Documentation Gate.

# Section 6 Documents Still Requiring Discussion / Reconciliation

Approved discussion has now covered:

- D014 / workflow delivery and commit economy,
- Four-State direction / D027,
- D051 navigation,
- D003 + D056 + Rig↔Technique ownership,
- `ARCHITECTURE.md`,
- `DEVELOPMENT_WORKFLOW.md`,
- `STYLE_GUIDE.md`,
- `CHANGELOG.md`,
- `MILESTONES.md`,
- `ROADMAP.md`.

Still to discuss/reconcile before Section 6 closeout:

1. `docs/PROJECT.md` — regional-scope wording and current project framing.
2. `docs/SPECIFICATION.md` — stale requirements/current capability boundaries, including search, Knots, Favorites, backup/restore, and Technique wording.
3. `docs/MEDIA_GUIDE.md` — current Knot instructional-media state and D056 Media ownership.
4. `docs/workstreams/REPOSITORY-AUDIT-DECISIONS.md` — synchronize Sections 4–5 actual closeouts and current Section 6 state.
5. `docs/workstreams/REPOSITORY-AUDIT-SECTION-5-DECISION.md` — narrow status/supersession correction.
6. `docs/data-model/03-RIGS.md` — Section 5 implementation-status correction only during Section 6; broader data-model reconciliation belongs Section 7.
7. `docs/HANDOFF.md` — current cleanup status/resume reconciliation without aggressive condensation.
8. Section 6 closeout record and post-write integrity verification.

Documents currently expected to require no Section 6 semantic redesign:

- `docs/NAVIGATION-PAGE-STANDARD.md`
- `docs/DETAIL-PAGE-STANDARD.md`
- `README.md`

# Exact Resume Point — Next Session

Section 6 remains OPEN.

Do not resume Fish Guide Phase 0.

At the next session:

1. Re-fetch GitHub `main` before changing or relying on any governing document.
2. Read:
   - `docs/workstreams/REPOSITORY-AUDIT-SECTION-6-DECISIONS.md`
   - this session-end record,
   - `docs/HANDOFF.md`,
   - `docs/workstreams/REPOSITORY-AUDIT-CLEANUP.md`.
3. Preserve all approvals in this record as **Approved / Canonical Synchronization Pending** unless explicitly reopened.
4. Resume Section 6 discussion at:

> **`PROJECT.md` + `SPECIFICATION.md` regional/current-requirement reconciliation**

5. Then discuss `MEDIA_GUIDE.md` current Knot/media ownership reconciliation.
6. Then reconcile audit-status continuity documents (`REPOSITORY-AUDIT-DECISIONS.md`, Section 5 decision status, `03-RIGS.md` status-only, `HANDOFF.md`).
7. Only after all Section 6 approved changes are implemented, re-fetched, integrity-verified, and closed should continuation advance to Section 7 — Data-Model Documentation Synchronization.

# Session-End Validation

This record intentionally preserves approved decisions without claiming the target governing files are already synchronized.

No unfinished discussion was silently converted into a new decision beyond the approvals explicitly given during this session.

No production behavior change is authorized by this record.
