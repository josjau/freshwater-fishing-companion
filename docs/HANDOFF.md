# Freshwater Fishing Companion — Handoff

**Document:** HANDOFF.md  
**Document Revision:** 2.1.2  
**Document Status:** Approved  
**Role:** Compact formal GitHub recovery/continuation entrypoint  
**Last Updated:** 2026-08-21

# Purpose

This file is the formal GitHub recovery entrypoint for Freshwater Fishing Companion.

It intentionally does **not** duplicate complete milestone history, domain architecture, detailed open-item reasoning, or implementation evidence. Those facts belong to their canonical owners.

GitHub `main` remains authoritative for production source and formally reconciled documentation.

The Google Drive **Freshwater Fishing Companion — Working State** remains the high-frequency cross-chat in-progress delta between formal GitHub checkpoints:

https://docs.google.com/document/d/1Eg_ipGeTGjBiRF3V2CIOtWuuouRxPOh0TMuLcxRj0MU

# Start Here

For a new project session:

1. Read the Working State document.
2. Re-fetch authoritative GitHub `main`.
3. Read this Handoff.
4. Read `ACTIVE-CHANGE-LEDGER.md` for every material non-closed item.
5. Read the governing document for the specific work being resumed.
6. Never assume a prior proposed file version was implemented; verify GitHub first.

# Formal Authority Map

| Question | Canonical owner |
|---|---|
| What is this project and who is it for? | `PROJECT.md` |
| What is the current technical/source architecture? | `ARCHITECTURE.md` |
| What durable decisions govern the project? | `DECISIONS.md` |
| How must implementation/documentation work be performed? | `DEVELOPMENT_WORKFLOW.md` |
| What is the product milestone order and future direction? | `ROADMAP.md` |
| What non-closed work must remain visible? | `ACTIVE-CHANGE-LEDGER.md` |
| What is the latest formal continuation point? | `HANDOFF.md` |
| What changed materially over time? | `CHANGELOG.md` |
| What historical milestones were completed? | frozen `MILESTONES.md` |
| What does a domain own? | the applicable data-model/domain standard |
| What happened during a bounded workstream? | active workstream record while active; archive/Git history after closeout |

`SPECIFICATION.md` is retired from active maintenance and remains only as a supersession/retirement pointer after its unique requirements were reconciled.

# Current Product Milestone

**Fish Guide — Phase 0 In Progress**

The Repository Audit Cleanup gate is closed. Fish Guide Phase 0 is active.

FISH-005 Four-State reconciliation is **CLOSED** after Rig #21 implementation, post-push/static validation, user-confirmed live-site validation PASS, formal documentation reconciliation, and explicit user closure approval. **FISH-006 is the current Phase 0 continuation point.**

Fish **production implementation remains blocked by FISH-007** until the remaining Phase 0 items are resolved or deliberately parked, Phase 0 is reconciled, and the Phase 0 closeout gate passes.

# Repository Integrity Baseline

The Repository Audit Cleanup is **PASS / FINALIZED / CLOSED**.

Durable safeguards are owned by the **Repository Integrity and Drift Prevention Standard** in `DEVELOPMENT_WORKFLOW.md`, including:

- GitHub-authoritative repository preflight,
- governing-document/decision precedence,
- bounded exact baseline tracking,
- dependency/change-impact review,
- explicit supersession/retirement handling,
- documentation closeout and post-write verification,
- stale-status/cross-reference review,
- deterministic mechanical checks with human semantic review,
- event-based broader repository reconciliation,
- containment of Draft/planning/history authority,
- current-hierarchy interpretation of old PASS/CLOSED records.

The existing repository-integrity validator remains the single deterministic validator. Existing GitHub Actions checks remain non-blocking. Branch protection/required checks remain deliberately not required for the current workflow.

# Exact Resume Point

1. Re-fetch authoritative GitHub `main`.
2. Read `docs/workstreams/FISH-GUIDE-PHASE-0.md` and the Fish entries in `ACTIVE-CHANGE-LEDGER.md`.
3. Treat **FISH-005 as CLOSED**; do not repeat the completed Four-State Rig adequacy audit without new evidence or changed scope.
4. Continue Fish Phase 0 at **FISH-006**, while preserving any newer user-approved Working State delta for FISH-001–004 until its separate formal promotion/closeout.
5. Satisfy **FISH-007** before any Fish production source implementation begins.

# Non-Negotiable Working Rules

- GitHub `main` is authoritative for existing repository files.
- Fetch the latest GitHub version before changing an existing source file.
- Follow the Repository Integrity and Drift Prevention Standard in `DEVELOPMENT_WORKFLOW.md` before substantive work and at closeout.
- Make targeted semantic edits unless a broader replacement/consolidation has been explicitly approved.
- After all planned edits to an existing source file are complete, provide a full-file validation copy.
- Do not assume a previously proposed file version was implemented.
- Finish/validate the active segment or deliberately park it before moving to a dependent segment.
- Material decisions, confirmed defects, parked/deferred/rejected outcomes, and implementation/validation state must not exist only in chat.
- During long active sessions, update Working State at material boundaries; at formal checkpoints promote durable truth to the correct GitHub owner and reconcile the Active Change Ledger.
- Historical/closed records do not override current governing documents.

# Historical References

Repository Audit provenance is retained under:

- `archive/workstreams/repository-audit/`

The archive preserves historical workstream states and evidence. Older OPEN/PENDING/PASS wording inside those records reflects the state at the time and does not override current governing documents or this Handoff.

For completed Knot/Rig details, use governing docs plus retained archive/Git history rather than expanding this Handoff.
