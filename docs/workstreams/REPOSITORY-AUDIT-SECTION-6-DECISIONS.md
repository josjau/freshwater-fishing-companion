# Freshwater Fishing Companion — Repository Audit Section 6 Decisions

**Document Revision:** 1.0.2  
**Document Status:** Approved  
**Implementation Status:** Governing Synchronization In Progress  
**Recorded:** 2026-08-19  
**Last Updated:** 2026-08-19

# Scope

Section 6 — Governing Documents Comprehensive Synchronization.

This record captures approved governing decisions made during the Section 6 discussion before and during the broader governing-document reconciliation pass.

# Decision 1 — Preserve Full-File Delivery and Clarify Targeted Scope

## Decision

Full-file replacement remains the standard final delivery method for changed production files.

The project distinguishes **change scope** from **delivery format**:

- changes remain narrowly targeted to the approved work,
- unrelated changes inside a replacement file are failures,
- the final implementation artifact for each changed production file is the complete resulting file,
- coherent multi-file production changes should normally be delivered as a repository-relative ZIP containing only repository files/folders,
- the user reviews, applies, commits, and pushes production packages through GitHub Desktop unless a current session explicitly authorizes a different reviewed direct-write workflow,
- assistant direct GitHub writes remain limited by default to project documentation (`.md`) unless the user explicitly authorizes a specific production-file write.

A complete full-file validation copy remains required after all planned edits to a source file are complete.

## Reason

Targeted patch-style editing previously produced repeated truncation/preservation problems. Full-file replacement provides a stable validation artifact while narrow authorized scope and diff checks prevent unrelated changes from entering the replacement.

Production ZIP delivery normally keeps the user in control of non-documentation repository changes and preserves GitHub Desktop review before commit.

## Current Implementation Status

**Approved / Current Workflow.**

D014 and `docs/DEVELOPMENT_WORKFLOW.md` own the permanent rule. Section 6 clarifies the distinction between targeted scope and full-file delivery without reverting to patch-style final delivery.

## Future Trigger

Revisit only if the repository adopts a materially safer delivery mechanism that preserves complete-file validation, user review, integrity checking, and rollback clarity without recreating prior truncation risk.

## Canonical Owner

- `docs/DECISIONS.md` — D014
- `docs/DEVELOPMENT_WORKFLOW.md` — operating procedure

# Decision 2 — Commit Economy and Documentation Freshness

## Decision

The project should use as few commits as practical for a coherent section while preserving reviewability, validation boundaries, rollback safety, and accurate current-state documentation.

The preferred pattern is:

1. avoid commits during discussion/planning unless a durable decision must be preserved before implementation,
2. use one coherent implementation commit when practical, including documentation that can truthfully describe that repository state,
3. use a separate validation/closeout documentation commit only when later runtime, deployment, user validation, or correction changes the implementation status,
4. avoid separate commits for every small file or documentation adjustment when those changes can safely be grouped,
5. never reduce commit count by leaving governing/current-state documentation stale.

A third or additional commit within one section should have a concrete reason such as a discovered defect, required correction, validation-driven state change, or session-preservation need rather than convenience alone.

Permanent priority:

> Preserve correct recoverable project state first; minimize commit count second.

## Reason

Too many small commits create repository noise and make short-window review harder. Conversely, overly broad commits reduce reviewability and rollback clarity. Documentation also needs timely updates to prevent future drift.

## Current Implementation Status

**Approved / governing synchronization in progress.**

Section 6 itself follows this rule by consolidating governing-document reconciliation and reserving a separate closeout commit for post-write validation state.

## Future Trigger

Revisit if repository collaboration, branching, CI, release tooling, or contributor count creates a materially different commit/merge requirement.

## Canonical Owner

- `docs/DEVELOPMENT_WORKFLOW.md`
- supporting summary in D014

# Decision 3 — Four-State Region Is the Forward Content Focus

## Decision

The Companion's forward regional content focus is:

- Northeast Oklahoma
- Southeast Kansas
- Southwest Missouri
- Northwest Arkansas

Existing validated content is not automatically invalidated because some domains were originally selected under a narrower regional scope.

Regional reconciliation is progressive:

- preserve the original validation context of existing content,
- evaluate each domain against the Four-State focus when that domain is already being audited or deliberately modified,
- prefer additive corrections where important regional content is missing,
- do not remove an existing valid item merely because it is less regionally important under the broader focus,
- if a regional finding would require significant architecture, data-model, or UI rewiring, stop and discuss that change explicitly before implementation.

## Reason

The user expects to fish primarily in the Four-State region in the near future. The target Fish populations and practical freshwater methods overlap substantially with the earlier Northeast Oklahoma / Southwest Kansas focus, so incremental reconciliation is lower-risk and more maintainable than invalidating completed domains or performing a whole-project rewrite.

## Current Implementation Status

**Approved regional direction / progressive reconciliation.**

Fish Guide Phase 0 already uses the Four-State scope. Other domains retain their validated current content until audited against the broader region.

## Future Trigger

Each domain audit or material content revision should evaluate Four-State adequacy. Project-wide wording can be normalized progressively as the major domains are reconciled.

## Canonical Owner

- `docs/DECISIONS.md` — D057 plus domain-specific decisions such as D027
- `docs/PROJECT.md`
- `docs/ROADMAP.md`
- relevant domain/workstream records

# Decision 4 — D027 Rig Library Historical Scope and Four-State Adequacy Audit

## Decision

D027 preserves this historical/current fact:

> The initial 20-Rig library was selected and validated using Northeast Oklahoma and Southwest Kansas as its original regional-practicality scope.

The existing 20 Rigs remain canonical and validated.

The Rig library will also be audited against the Four-State regional focus. That audit is additive by default:

- do not reopen or remove existing valid Rigs solely because the regional focus expanded,
- determine whether important Four-State fishing methods are materially absent,
- propose additional canonical Rigs only when they provide demonstrated practical regional value,
- preserve the existing 20-Rig library unchanged if the broader review identifies no meaningful gap.

## Reason

The Four-State expansion is not expected to make the existing library materially wrong because target species and common freshwater methods overlap heavily across the two scopes. The main risk is omission of an important regional method, not the presence of currently valid Rigs.

## Current Implementation Status

**Existing 20-Rig library: Validated / Finalized.**  
**Four-State Rig adequacy audit: Approved / Not Yet Performed.**

## Future Trigger

Perform the Four-State Rig adequacy audit during regional reconciliation, preferably when Rig/Fish relationships or other relevant domain work is already being reviewed.

## Canonical Owner

- `docs/DECISIONS.md` — D027
- `docs/data-model/03-RIGS.md` — Rig-domain interpretation
- relevant future regional-audit workstream/closeout record

# Specialized Regional Methods

A regional finding does not automatically become another ordinary Rig.

Paddlefish snagging is the current example to preserve for later architectural review. It commonly involves a substantially different rod/reel/line/tackle system and species-specific method/regulatory context compared with ordinary Rig Guide setups.

When such a case is audited, determine whether it belongs in:

- the ordinary Rig library,
- a specialized species/method setup,
- a Decision Knowledge relationship or guided workflow,
- or another deliberately approved structure.

Do not force a specialized fishing system into the Rig model merely to achieve regional completeness.

# Decision 5 — D051 Context-Preserving Parent Navigation

## Decision

Retire the former site-wide Parent-to-top transition rule. The canonical standard for standard application views is now:

```text
Forward navigation
-> newly opened destination starts at top

Parent navigation
-> restores the immediately preceding standard application view
-> restores that view's applicable UI state
-> restores that view's prior scroll position

Home navigation
-> Dashboard starts at top
-> contextual return state is cleared
```

A saved scroll position belongs only to the source context being restored and must never be transferred to a newly opened destination.

Persistent/floating navigation controls remain the site-wide visual standard.

Specialized workflows may use separately approved navigation semantics when workflow state requires them. Reel Setup is an approved example of a specialized navigation context. Such exceptions must remain deliberate and documented and do not redefine the standard Parent behavior for ordinary application views.

## Reason

Parent is a contextual return action, not merely another forward transition to a parent route. Restoring the prior standard application context reduces unnecessary re-navigation and preserves the user's place while still preventing the earlier defect where a new destination inherited the source page's scroll position.

## Current Implementation Status

**Approved architecture / broader production implementation pending where older routing remains.**

`docs/NAVIGATION-PAGE-STANDARD.md` and `docs/DETAIL-PAGE-STANDARD.md` already record the newer standard. Section 6 changes documentation only; remaining production implementation is a later deliberate source package and validation task.

## Future Trigger

Implement and validate remaining site-wide production routing when navigation source is deliberately reopened. Any new specialized workflow must document its exception rather than silently diverging.

## Canonical Owner

- `docs/DECISIONS.md` — D051
- `docs/NAVIGATION-PAGE-STANDARD.md`
- `docs/STYLE_GUIDE.md`
- specialized workflow records where an approved exception exists

# Decision 6 — D003 / D056 Rig↔Technique Relationship Ownership

## Decision

Technique remains an independent canonical Reference Knowledge entity that owns reusable presentation behavior. D003 must not imply that Rig identity itself makes Rig the canonical owner of Rig↔Technique compatibility.

Rig owns physical assembly/configuration. Technique owns reusable presentation/retrieve/cadence/rod/reel behavior.

The canonical storage owner and exact structure of Rig↔Technique compatibility remain deliberately deferred until the Technique architecture gate.

Never store the same semantic relationship in both:

```text
Rig.techniqueIds[]
Technique.compatibleRigIds[]
```

If future compatibility is simple intrinsic applicability, assign one Reference Knowledge owner. If the relationship answers which Technique should be used with a Rig under Fish/Condition context, a Decision Knowledge relationship may be more accurate.

## Reason

Prematurely choosing a relationship owner without concrete Technique requirements would recreate speculative schema and can violate D056 by producing mirrored inverse arrays.

## Current Implementation Status

**Approved / relationship ownership deferred.**

Repository Audit Section 5 removed empty Rig `techniqueIds[]` placeholders. No production Technique dataset exists.

## Future Trigger

Reopen only at the Technique architecture gate with concrete relationship/use-case requirements.

## Canonical Owner

- `docs/DECISIONS.md` — D003, D024, D056
- Technique/relationship data-model documents when their detailed synchronization occurs

# Decision 7 — ARCHITECTURE.md Is a Current Architecture Document

## Decision

`ARCHITECTURE.md` describes current architecture and approved future boundaries rather than maintaining milestone progression as current-state prose.

Section 6 removes stale current claims such as nine Rigs, incomplete later Rig tiers, 15→17→20 Tackle as current state, Tackle-only Media, Texas Rig as only tutorial trial, Core Rigs/Tackle Media still In Progress, or Rig `imageIds` remaining.

Current architecture must reflect:

- 20 active canonical Rigs,
- 29 active canonical Tackle concepts,
- 29 Tackle recognition-media attachments,
- 10 canonical Knots,
- completed Reel & Line Setup,
- cross-entity Media ownership,
- current connected-knowledge/navigation architecture,
- deferred Rig↔Technique ownership,
- Four-State forward focus with original Rig validation history preserved.

Historical progression belongs in `MILESTONES.md`, `CHANGELOG.md`, and workstream records.

## Current Implementation Status

**Approved / Section 6 synchronization in progress.**

## Canonical Owner

`docs/ARCHITECTURE.md`.

# Decision 8 — DEVELOPMENT_WORKFLOW.md and STYLE_GUIDE.md Reconciliation

## Decision

`DEVELOPMENT_WORKFLOW.md` remains the canonical operating procedure and preserves GitHub authority, full-file replacement, replacement-integrity, post-write verification, archive classification, D055, production-write approval, and documentation closeout.

Section 6 additionally requires:

- explicit full-file-delivery versus targeted-scope wording,
- Commit Economy,
- default `.md`-only assistant direct-write boundary for GitHub unless specifically authorized otherwise,
- mandatory Session-End Documentation Gate.

`STYLE_GUIDE.md` summarizes the revised D051 navigation standard, allows deliberate specialized workflow navigation such as Reel Setup, preserves source-scroll isolation for new destinations, changes `Future Core Knots` to current `Core Knots`, and delegates implementation-status terminology to `DEVELOPMENT_WORKFLOW.md` rather than maintaining a competing enum.

## Current Implementation Status

**Approved / Section 6 synchronization in progress.**

## Canonical Owners

- `docs/DEVELOPMENT_WORKFLOW.md`
- `docs/STYLE_GUIDE.md`

# Decision 9 — CHANGELOG / MILESTONES / ROADMAP Historical vs Current-State Roles

## Decision

Historical records remain historically accurate; current-state sections are corrected rather than rewriting old events.

`CHANGELOG.md` current Unreleased state must show Knots Packages 1–4 complete, Reel Setup complete, Repository Audit Sections 1–5 complete, and Section 6 active. Old package snapshots remain history with current supersession notes where needed.

`MILESTONES.md` preserves historical validation facts, including former top-reset behavior that passed at that time, while adding a current D051 supersession note. Fish is the next product milestone; Repository Audit Cleanup is the current maintenance workstream.

`ROADMAP.md` keeps the numbered product sequence unchanged. Repository Audit Cleanup is a maintenance/governance gate, not a numbered product milestone. Fish remains next but paused behind the gate. Four-State forward direction and the additive 20-Rig adequacy audit are recorded at planning level.

## Current Implementation Status

**Approved / Section 6 synchronization in progress.**

## Canonical Owners

- `docs/CHANGELOG.md`
- `docs/MILESTONES.md`
- `docs/ROADMAP.md`

# Decision 10 — PROJECT.md and SPECIFICATION.md Regional / Requirement Reconciliation

## Decision

`PROJECT.md` establishes the Four-State region as forward Version 1 content focus while preserving Northeast Oklahoma + Southwest Kansas as the original 20-Rig selection/validation context.

`SPECIFICATION.md` remains Draft and is reconciled to current/approved boundaries:

- Four-State regional scope,
- no implied Rig ownership of Technique compatibility,
- current Knot/Reel Setup functional requirements,
- deterministic hierarchical scoped Search,
- Favorites as a deferred final decision rather than mandatory `shall`,
- Backup/Restore design behind the Settings/User Data architecture gate,
- explicit My Tackle/Catch Log dependency order,
- offline-local behavior distinguished from external regulation/media/video resources.

## Current Implementation Status

**Approved / Section 6 synchronization in progress.**

## Canonical Owners

- `docs/PROJECT.md`
- `docs/SPECIFICATION.md`

# Decision 11 — MEDIA_GUIDE.md Current Knot State and D056 Media Ownership

## Decision

`MEDIA_GUIDE.md` must describe Media as cross-entity attachment owner through `ownerType` + `ownerId` and must not describe Knot instructional media as future/unstarted.

Current Version 1 has approved instructional-media coverage for all 10 canonical Knots. Canonical in-app `tyingSteps[]` remain authoritative; external instructional Media supplements rather than replaces canonical Knot facts.

The guide distinguishes locally bundled production assets from external instructional Media records. External records do not imply redistribution rights.

Future project-owned Knot diagrams/user-controlled animations remain a preferred enhancement where they materially improve clarity and can be produced accurately.

Rig/Tackle records do not regain inverse media-ID arrays solely to find Media.

## Current Implementation Status

**Approved / Section 6 synchronization in progress.**

## Canonical Owner

`docs/MEDIA_GUIDE.md` with D056 in `docs/DECISIONS.md`.

# Decision 12 — Audit Status Continuity Reconciliation

## Decision

Current audit/status documents must reflect actual closed production state without erasing pre-implementation rationale.

- `REPOSITORY-AUDIT-DECISIONS.md` marks Sections 4 and 5 complete/validated/implemented and Section 6 active while preserving earlier reasoning.
- `REPOSITORY-AUDIT-SECTION-5-DECISION.md` preserves its pre-implementation baseline/gate as historical evidence but points to the closeout as current implementation authority.
- `docs/data-model/03-RIGS.md` receives Section 5 status correction only; broader data-model reconciliation remains Section 7.
- `HANDOFF.md` records Sections 1–5 complete and Section 6 active, replacing obsolete Section 5 resume instructions while preserving useful project context.

## Current Implementation Status

**Approved / Section 6 synchronization in progress.**

## Canonical Owners

The respective audit/status/current-state documents listed above.

# Decision 13 — Mandatory Session-End Documentation Gate

## Decision

When the user indicates that a work session is ending, normal implementation/audit progression stops and repository documentation is reconciled before the session is treated as closed, even if the active section remains unfinished.

Before session end, preserve as applicable:

1. approved decisions made during the session,
2. approved changes/fixes not yet implemented,
3. relevant rejected/deferred alternatives whose rationale matters later,
4. new defects, contradictions, risks, or audit findings,
5. actual implementation/validation state,
6. unresolved decisions clearly marked unresolved,
7. exact continuation point and next intended action.

Handoff is the first-read continuation map but must not become the sole owner of durable decisions. Facts are recorded in their correct governing/domain/workstream owners.

If decisions are already clear and approved, the session-end reconciliation may be performed automatically. If documentation would require converting unresolved discussion into an approved decision, provide a concise reconciliation summary or obtain the minimum necessary clarification.

Permanent principle:

> Never guess merely to finish session documentation, but never leave clearly approved material only in chat history because the section is unfinished.

A session-preservation documentation commit is a justified exception to normal commit minimization.

## Reason

The project must not depend on chat history to recover material decisions or implementation state across session boundaries. This gate directly prevents chat-to-repository drift.

## Current Implementation Status

**Approved / preserved in the Section 6 session-end record / permanent workflow synchronization in progress.**

## Future Trigger

Apply automatically whenever a session-ending signal occurs before current work is fully closed.

## Canonical Owner

`docs/DEVELOPMENT_WORKFLOW.md`.

# Decision 14 — Fish Phase 0 Durable Decisions Must Be Recoverable from Governing Documentation

## Decision

The locked Fish Phase 0 architectural revisions are durable project decisions and must not remain recoverable only from the Fish workstream.

Section 6 promotes them into `docs/DECISIONS.md` as:

- D057 — Fish Guide Four-State Version 1 Scope,
- D058 — Fish Habitat and Waterbody Ownership,
- D059 — Fish Category Registry and Lifecycle Ownership,
- D060 — Northern Rock Bass Identity and Shared Aliases,
- D061 — Hierarchical Scoped Search.

D051 separately owns the context-preserving Parent rule.

## Reason

These decisions affect future source/data/search/navigation architecture and therefore need durable governing ownership independent of a paused milestone workstream.

## Current Implementation Status

**Approved / governing synchronization in progress.** Fish production remains unchanged during Phase 0.

## Canonical Owner

`docs/DECISIONS.md`, with Fish workstream/data-model documents carrying domain detail.

# Section 6 Synchronization Rule

The broader Section 6 governing-document reconciliation is consolidated to minimize commits while preserving repository integrity and current-state accuracy.

No production source, data, media, CSS, HTML, JavaScript, or configuration change is authorized by this decision record.

Section 6 remains open until the approved governing documents are committed, re-fetched, integrity-verified, and a separate closeout records PASS / VALIDATED / CLOSED and advances Handoff to Section 7 — Data-Model Documentation Synchronization.
