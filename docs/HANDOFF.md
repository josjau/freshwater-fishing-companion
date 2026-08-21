# Freshwater Fishing Companion — Handoff

**Document:** HANDOFF.md  
**Document Revision:** 2.0.2  
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

**Fish Guide — Phase 0 In Progress / PAUSED behind Repository Audit Cleanup Gate**

Fish production must not begin until the Repository Audit Cleanup Gate is formally closed.

Remaining Fish Phase 0 actions are tracked in `ACTIVE-CHANGE-LEDGER.md` and the Fish workstream documents.

# Current Maintenance Workstream

**Repository Audit Section 14 — Documentation Maintenance Safeguards**

Completed and GitHub-verified:

- reduced living-document role model,
- persistent `ACTIVE-CHANGE-LEDGER.md`,
- deterministic documentation-governance checks in the existing repository-integrity validator,
- external-reference/media freshness policy and report-only quarterly/manual checker,
- first final read-only re-audit cleanup,
- post-cleanup Architecture source-tree drift correction,
- final read-only repository re-audit — **PASS**.

The final re-audit found no remaining unexplained duplicate current sources or known current-state status contradictions after the Architecture correction.

# Exact Resume Point

1. Re-fetch authoritative GitHub `main`.
2. Hold the mandatory **Repository Integrity and Drift Prevention** review and explicit user approval gate tracked as GOV-007.
3. Classify the proposed safeguards as mandatory, optional, rejected, or parked.
4. Promote approved durable safeguards to the correct governing owner(s), including `DEVELOPMENT_WORKFLOW.md` and any explicitly approved dedicated integrity standard.
5. Update Handoff to reference the approved final process.
6. Close Repository Audit Cleanup only after the GOV-007 promotion and final GitHub verification pass.
7. Resume Fish Guide Phase 0 only after the cleanup gate closes.

# Non-Negotiable Working Rules

- GitHub `main` is authoritative for existing repository files.
- Fetch the latest GitHub version before changing an existing source file.
- Make targeted semantic edits unless a broader replacement/consolidation has been explicitly approved.
- After all planned edits to an existing source file are complete, provide a full-file validation copy.
- Do not assume a previously proposed file version was implemented.
- Finish/validate the active segment or deliberately park it before moving to a dependent segment.
- Material decisions, confirmed defects, parked/deferred/rejected outcomes, and implementation/validation state must not exist only in chat.
- During long active sessions, update Working State at material boundaries; at formal checkpoints promote durable truth to the correct GitHub owner and reconcile the Active Change Ledger.
- Historical/closed records do not override current governing documents.

# Historical References

For repository-audit provenance:

- `docs/workstreams/REPOSITORY-AUDIT-CLEANUP.md`
- `docs/workstreams/REPOSITORY-AUDIT-DECISIONS.md`
- `docs/workstreams/REPOSITORY-AUDIT-SECTION-14-CHECKPOINT.md`
- `docs/workstreams/REPOSITORY-AUDIT-SECTION-14-IMPLEMENTATION.md`

For completed Knot/Rig details, use governing docs plus retained archive/Git history rather than expanding this Handoff.
