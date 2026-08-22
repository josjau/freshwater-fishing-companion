# Freshwater Fishing Companion — Handoff

**Document:** HANDOFF.md  
**Document Revision:** 2.2.0  
**Document Status:** Approved  
**Role:** Compact formal GitHub recovery/continuation entrypoint  
**Last Updated:** 2026-08-22

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
| What happened during a bounded closed workstream? | retained archive/Git history after durable truth is promoted |

`SPECIFICATION.md` is retired from active maintenance and remains only as a supersession/retirement pointer after its unique requirements were reconciled.

# Current Product Milestone

**Fish Guide — Production Build Ready**

Repository Audit Cleanup is closed. Fish Guide Phase 0 is also **CLOSED** after explicit user approval of FISH-007 on 2026-08-22.

FISH-001 through FISH-006 were resolved during Phase 0 and their durable production contract is now owned by the current Fish data-model, relationship, media/source, and search/navigation standards. FISH-007 released the production gate.

The next active Fish work is:

- **FISH-008 — approved Fish production architecture implementation**
- **FISH-009 — approved Fish UX implementation**

Current production source still reflects the pre-Fish-production state until those implementation packages land and validate. Phase 0 closure authorizes production work; it does not pretend that the target Fish schema or UX is already implemented.

# Fish Production Contract

Before editing Fish production source, read at minimum:

- `docs/data-model/02-FISH.md`
- `docs/data-model/09-RELATIONSHIPS.md`
- `docs/FISH_REFERENCE_SOURCES.md`
- `docs/MEDIA_GUIDE.md`
- `docs/DECISIONS.md` D057–D061
- `docs/DEVELOPMENT_WORKFLOW.md`

The completed Phase 0 design record is retained under:

- `archive/workstreams/fish-guide/FISH-GUIDE-PHASE-0.md`
- `archive/workstreams/fish-guide/FISH-GUIDE-PHASE-0-AUDIT-REVISIONS.md`

Historical OPEN/PENDING wording inside those archived records reflects the state at the time and does not override current governing documents.

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

1. Read the Google Drive Working State and re-fetch authoritative GitHub `main`.
2. Confirm Fish Guide Phase 0/FISH-007 remains closed; do not repeat FISH-001–007 design work without new verified evidence or an explicit scope change.
3. Read the current Fish production contract listed above and `ACTIVE-CHANGE-LEDGER.md`.
4. Begin **FISH-008 / FISH-009 production implementation** using staged, dependency-safe packages. Before proposing an edit to any existing source file, re-fetch that exact file from current GitHub `main`.
5. Preserve FISH-003 staged activation: intermediate packages do not need all 30 Fish active, but every active Fish must satisfy its complete readiness contract.
6. Keep UX-002 visible as **APPROVED / PENDING IMPLEMENTATION**. When the affected search source is deliberately opened, replace the rejected scope-only helper wording with curated, beginner-useful examples that are mechanically proven to return results inside the exact selected collection; there is no hard example-count limit.
7. Continue required static/post-push validation and the mandatory live-site validation gate for runtime/user-visible changes before final closure.

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
- Do not introduce newly discovered semantic/content/source changes inside an implementation package without explicit user approval.

# Historical References

Repository Audit provenance is retained under:

- `archive/workstreams/repository-audit/`

Fish Guide Phase 0 provenance is retained under:

- `archive/workstreams/fish-guide/`

Archives preserve historical workstream state and evidence. Older OPEN/PENDING/PASS wording inside those records reflects the state at the time and does not override current governing documents or this Handoff.
