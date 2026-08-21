# Freshwater Fishing Companion — Handoff

**Document:** HANDOFF.md  
**Document Revision:** 2.0.0  
**Document Status:** Approved  
**Role:** Compact formal GitHub recovery/continuation entrypoint  
**Package Baseline:** `2f7c6ea41157ca68142575f8696525dc993f19f9`  
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
| What happened during a bounded workstream? | active/closed workstream record while retained |

`SPECIFICATION.md` is retired from active maintenance and remains only as a supersession/retirement pointer after its unique requirements were reconciled.

# Current Product Milestone

**Fish Guide — Phase 0 In Progress / PAUSED behind Repository Audit Cleanup Gate**

Fish production must not begin until the Repository Audit Cleanup Gate is formally closed.

The Fish Phase 0 design already includes locked/approved architecture such as the 30-Fish Version 1 library, Four-State scope, pairwise identification relationships, Fish-owned intrinsic habitat/waterbody facts, shared Media attachment, category registry/lifecycle ownership, Northern Rock Bass identity, and hierarchical scoped Search.

Remaining Fish Phase 0 actions are tracked only in `ACTIVE-CHANGE-LEDGER.md` and the Fish workstream documents; they are not duplicated here.

# Current Maintenance Workstream

**Repository Audit Section 14 — Documentation Maintenance Safeguards**

Current Section 14 implementation record:

`docs/workstreams/REPOSITORY-AUDIT-SECTION-14-IMPLEMENTATION.md`

The Sections 1–13 carry-forward reconciliation and six-block user review are complete and approved.

The reduced living-document role model is approved.

This package implements the documentation-reconciliation portion of Section 14:

- compact Handoff,
- dedicated persistent Active Change Ledger,
- Roadmap narrowed to product order/future direction,
- Milestones frozen as history,
- Changelog narrowed to curated landed changes,
- Specification retired after no-loss uniqueness review,
- approved SPEC-U01/SPEC-U02 promotion into Architecture,
- approved SPEC-U03 promotion into Roadmap.

The deterministic documentation-integrity extension is deliberately the **next** step after this package is applied and GitHub-verified so its checks target the actual landed structures.

# Exact Resume Point

After this package is applied to the repository:

1. Re-fetch authoritative GitHub `main`.
2. Verify every package file matches the intended full-file replacement.
3. Confirm `ACTIVE-CHANGE-LEDGER.md` is the single formal owner of non-closed carry-forward items.
4. Confirm ROADMAP/MILESTONES/CHANGELOG no longer act as competing exact-current-state dashboards.
5. Confirm `SPECIFICATION.md` is retired and SPEC-U01/U02/U03 are preserved in their approved owners.
6. Extend `tools/validate_repository_integrity.js` with narrow deterministic documentation checks against the landed structure; do not create a competing validator.
7. Run/verify the existing repository-integrity workflow.
8. Continue external-reference/media freshness work.
9. Run the required final read-only repository re-audit.
10. Hold the mandatory Repository Integrity and Drift Prevention approval gate.
11. Close Repository Audit Cleanup only after all required findings/gates have terminal dispositions and GitHub verification passes.
12. Resume Fish Guide Phase 0 only after the cleanup gate closes.

# Non-Negotiable Working Rules

- GitHub `main` is authoritative for existing repository files.
- Fetch the latest GitHub version before changing an existing source file.
- Make targeted semantic edits unless a broader replacement/consolidation has been explicitly approved.
- After all planned edits to an existing source file are complete, provide a full-file validation copy.
- Do not assume a previously proposed file version was implemented.
- Finish/validate the active segment or deliberately park it before moving to a dependent segment.
- Material decisions, confirmed defects, parked/deferred/rejected outcomes, and implementation/validation state must not exist only in chat.
- During long active sessions, update Working State at material boundaries; at formal checkpoints promote durable truth to the correct GitHub owner and update the Active Change Ledger.
- Historical/closed records do not override current governing documents.

# Historical References

For repository-audit provenance:

- `docs/workstreams/REPOSITORY-AUDIT-CLEANUP.md`
- `docs/workstreams/REPOSITORY-AUDIT-DECISIONS.md`
- `docs/workstreams/REPOSITORY-AUDIT-SECTION-14-CHECKPOINT.md`
- `docs/workstreams/REPOSITORY-AUDIT-SECTION-14-IMPLEMENTATION.md`

For completed Knot/Rig details, use their governing docs and retained closeout/archive/Git history rather than expanding this Handoff.
