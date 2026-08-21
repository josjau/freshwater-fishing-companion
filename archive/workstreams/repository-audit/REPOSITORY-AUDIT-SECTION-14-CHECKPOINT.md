# Freshwater Fishing Companion — Repository Audit Section 14 Checkpoint

**Document Revision:** 1.0.0  
**Document Status:** Approved  
**Section:** 14 — Documentation Maintenance Safeguards  
**Section Status:** IN PROGRESS / SESSION CHECKPOINT  
**Date:** 2026-08-20  
**Authoritative Baseline at Section Start:** `68a5bb6d5b984417056ccaee7e62333d43ad25b3`

# Purpose

This checkpoint preserves the approved Section 14 direction before the session ends. It exists so the revised documentation-maintenance design, identified drift risks, and exact continuation point do not depend on chat history.

Section 14 is **not closed**. No governing-document consolidation, retirement, validator change, or documentation deletion has been implemented yet.

# Confirmed Problem

The project has accumulated substantial documentation rules intended to prevent drift, but two repository audits have demonstrated that the current model is still vulnerable.

The primary failure mode is not a lack of rules. It is duplicated ownership of current-state information across multiple documents.

At Section 14 preflight:

- `HANDOFF.md` correctly identified Sections 1–13 as complete and Section 14 as next.
- `ROADMAP.md`, `MILESTONES.md`, and `CHANGELOG.md` still contained older Repository Audit status stating that Sections 1–5 were complete and Section 6 was active.
- `DEVELOPMENT_WORKFLOW.md` already required documentation to reflect current `main`, demonstrating that prose workflow rules alone have not prevented status drift.

This establishes that adding more synchronization rules without reducing duplicate current-state ownership is not an adequate safeguard.

# Approved Revised Direction — Consolidation First

The earlier Section 14 proposal to add a broader reconciliation checklist across the existing document set is superseded by this consolidation-first direction.

The project will first reduce duplicated documentation ownership and create one reliable carry-forward mechanism before adding further maintenance rules.

Permanent design intent to evaluate and implement during Section 14:

1. Apply single-owner semantics to documentation just as D056 applies single-owner semantics to application data.
2. `HANDOFF.md` should become the sole owner of the exact current continuation point, active work, unresolved carry-forward items, and resume instructions.
3. Durable architectural/product decisions belong in `DECISIONS.md` rather than being restated as current-state truth across multiple documents.
4. Current technical/source ownership belongs in `ARCHITECTURE.md`.
5. Product milestone ordering and future direction belong in `ROADMAP.md`; Roadmap should not duplicate exact audit/workstream continuation status.
6. Domain schema and relationship ownership belong in the relevant data-model document.
7. Historical completion evidence belongs in closed workstreams, archive, or Git history and must not compete with current continuation state.
8. `CHANGELOG.md`, if retained, should record meaningful landed changes rather than act as another live project-status dashboard.
9. `MILESTONES.md` is a candidate to freeze/retire from active maintenance because its current-state role substantially overlaps Roadmap, Handoff, workstream closeouts, and Git history.
10. `SPECIFICATION.md` requires an overlap/value review before deciding whether it remains a separately maintained living document.

No document will be deleted, archived, frozen, or materially reduced until the carry-forward reconciliation below is complete.

# Approved Active Change Ledger Direction

Section 14 will design one authoritative **Active Change Ledger**, expected to live in `HANDOFF.md` unless the reconciliation demonstrates a better single owner.

The ledger must contain every material item that is not fully closed, including:

- confirmed defects requiring correction,
- approved but not yet implemented changes,
- open decisions,
- deliberately parked improvements,
- items deferred to a named future architecture gate,
- pending validation,
- future reconciliation requirements discovered during audits or implementation.

The ledger must keep an item visible until it receives an explicit terminal disposition.

Expected status vocabulary to refine during implementation:

- OPEN
- APPROVED / PENDING IMPLEMENTATION
- PARKED
- DEFERRED TO NAMED GATE
- IMPLEMENTED / PENDING VALIDATION
- CLOSED
- REJECTED

The purpose is not to duplicate complete design reasoning. Each ledger entry should identify the item, status, and canonical document/workstream containing the detailed context.

# Long Planning Session Safeguard

The existing Session-End Documentation Gate is necessary but insufficient because a session can end unexpectedly after a long design discussion.

Approved direction:

> Once a material design/architecture/UX/workflow decision has been approved, or a material defect has been confirmed, it must be checkpointed to GitHub at a logical planning boundary before too much unrelated substantive discussion proceeds, even if implementation has not started.

This does not require committing every speculative idea or conversational detail. It applies to meaningful approved decisions, confirmed defects, and durable defer/park/reject outcomes.

Recoverability takes priority over commit minimization when the alternative is leaving substantial approved planning only in chat history.

# Mandatory Carry-Forward Reconciliation Before Consolidation

The next Section 14 task is a read-only **Sections 1–13 Carry-Forward Reconciliation**.

Before simplifying or retiring any documentation, inspect authoritative GitHub records and identify every item from Repository Audit Sections 1–13 that is not fully closed.

The reconciliation must include, at minimum:

- the parent audit snapshot,
- `REPOSITORY-AUDIT-DECISIONS.md`,
- Section closeout/decision records,
- current `HANDOFF.md`,
- Fish Guide Phase 0 workstreams and open clarification items,
- durable decisions promoted to `DECISIONS.md`,
- parked/deferred improvements created during cleanup.

For each discovered item classify it as:

- CLOSED,
- OPEN,
- APPROVED / PENDING IMPLEMENTATION,
- PARKED,
- DEFERRED TO NAMED GATE,
- REJECTED,
- or another explicitly justified status if needed.

Every non-closed item must then be represented in the proposed Active Change Ledger or explicitly linked to another single authoritative active owner.

Known examples that must be reconciled rather than assumed exhaustive include:

- broader production implementation of approved context-preserving Parent navigation,
- parked technically verified local Rig visual library,
- future additive Four-State Rig adequacy review,
- remaining Fish Guide Phase 0 identification/guidance/activation/media/source-validation decisions,
- later external-reference/media freshness maintenance,
- mandatory final Repository Integrity and Drift Prevention review before audit closeout.

The purpose of the reconciliation is specifically to catch anything else that may have been documented but buried during the long audit sequence.

# Mechanical Safeguard Direction

After consolidation decisions are settled, extend the existing repository integrity validator rather than creating a separate documentation validator.

Mechanical checks should cover only deterministic structure, for example:

- required current governing documents exist,
- current governing documents use valid lifecycle metadata where practical,
- structured revision references in Handoff match their targets when retained,
- exact current continuation has one designated owner,
- obvious stale-status patterns can be detected when they have structured metadata.

The validator must not attempt to decide whether narrative prose is semantically correct.

The Section 13 GitHub Actions workflow should remain the stable automation wrapper and should automatically run any new Section 14 integrity checks added to `tools/validate_repository_integrity.js`.

# Freshness Metadata Direction

Do not add mandatory `Reconciled Through Commit: <sha>` metadata to every living document unless later evidence overturns this decision.

Reason: updating the document itself creates another commit and produces self-referential maintenance churn.

Exact baseline commits remain useful at workstream/section start and in closeout evidence; Git history remains authoritative for file-level provenance.

# Exact Resume Point

Resume Section 14 with the **Sections 1–13 Carry-Forward Reconciliation** before making any documentation-consolidation or retirement changes.

Required next sequence:

1. Re-fetch authoritative GitHub `main` and confirm the latest baseline.
2. Read this checkpoint first.
3. Inventory every non-closed item from Repository Audit Sections 1–13 and current Fish Phase 0 records.
4. Produce one explicit carry-forward table with item, status, canonical detailed owner, and required future action/gate.
5. Compare that table against current `HANDOFF.md` and identify anything currently missing or buried.
6. Only after the carry-forward list is verified, propose the exact reduced living-document set and the treatment of `MILESTONES.md`, `CHANGELOG.md`, `SPECIFICATION.md`, closed workstreams, and the oversized current Handoff.
7. Do not delete/archive/reduce documents until the user approves the consolidation plan and the carry-forward reconciliation proves no unresolved context would be lost.
8. Then design/implement the Active Change Ledger and narrow mechanical documentation checks.
9. Section 14 remains open until those safeguards are implemented, validated, documented, and GitHub-verified.
10. Fish Guide Phase 0 remains paused behind the Repository Audit Cleanup Gate.

# Session Close State

**Section 14 remains IN PROGRESS.**

The session may end safely after this checkpoint is verified on authoritative GitHub. The next session does not need prior chat history to recover the approved Section 14 direction or exact first task.