# Freshwater Fishing Companion — Handoff

**Document:** HANDOFF.md  
**Document Revision:** 2.6.6  
**Document Status:** Approved  
**Role:** Compact formal GitHub recovery/continuation entrypoint  
**Last Updated:** 2026-08-25

# Purpose

This file is the formal GitHub recovery entrypoint. It intentionally does not duplicate full milestone history or detailed evidence. GitHub `main` is authoritative for committed production source and formally reconciled documentation.

`WORKING_STATE.md` (**Freshwater Fishing Companion — Working State**) owns current state/exact resume. Google Drive `Working Source/Current` owns the authoritative uncommitted user-facing working tree as a full-tree ZIP + manifest. `ACTIVE-CHANGE-LEDGER.md` owns material non-closed carry-forward items.

# Start Here

1. Confirm repository root, branch, working-tree status, local `HEAD`, local `origin/main`, and remote.
2. Read `WORKING_STATE.md`; verify Drive `Working Source/Current` when unreconciled user-facing work exists.
3. Read this Handoff and `ACTIVE-CHANGE-LEDGER.md`.
4. Read `DEVELOPMENT_WORKFLOW.md`, `ROADMAP.md`, and the governing documents for the specific next scope.
5. Never assume a prior proposed/local/review-package file version was implemented; verify actual GitHub/Drive state.

# Formal Authority Map

| Question | Canonical owner |
|---|---|
| Mission/product scope | `PROJECT.md` |
| Technical/source architecture | `ARCHITECTURE.md` |
| Durable decisions | `DECISIONS.md` |
| Development/review/closeout procedure | `DEVELOPMENT_WORKFLOW.md` |
| Product milestone order | `ROADMAP.md` |
| Non-closed carry-forward | `ACTIVE-CHANGE-LEDGER.md` |
| Active/current state and exact resume | `WORKING_STATE.md` |
| Uncommitted user-facing working tree | Drive `Working Source/Current` ZIP + manifest |
| Meaningful landed history | `CHANGELOG.md` |
| Domain ownership | applicable data-model/domain standard |
| Closed workstream evidence | `archive/workstreams/` + Git history |
| Required final Version 1 design/mobile audit | `V1-DESIGN-AUDIT.md` |

# Current Product State

**Fish Guide Version 1 — PASS / FINALIZED / CLOSED.**

Production Wave 4 source landed at `fb951a18bdd4c33681644d188a45f2926114158d` (`Fish - Wave 4 - Sunfish & Crappie Final`). Final desktop and actual-mobile review approved the nine Wave 4 Fish, media/framing, five Compare Fish relationships, Compare Fish sizing/alignment, 9 Fish-to-Rig guidance records / 20 recommendations, and the site-wide multi-accent comparison-card correction. GitHub Repository Integrity passed all 8 validation groups.

The completed Version 1 Fish baseline is 30 active production-schema Fish, 30 primary-identification media attachments, and 20 deterministic identification pairs. Wave 3 and Wave 4 package/evidence records are archived under `archive/workstreams/fish-guide/`. FISH-008/FISH-009 are closed.

# Next Product Milestone

**What Should I Throw** is next.

Before implementation:

- revalidate the Conditions domain/gate,
- read the Recommendation/Technique/Conditions ownership decisions,
- define milestone inputs, scoring/ranking, explanation model, and Technique dependencies without duplicating canonical Fish/Rig/Technique instructions,
- preserve closed Fish Guide content unless a new evidence/content defect is discovered.

# Review Workflow Baseline

The first review ZIP in a production cycle performs the full baseline verification. Subsequent R2/R3 corrections may use the cumulative delta-review path only while the Git SHA and package lineage remain unchanged. `DEVELOPMENT_WORKFLOW.md` is the canonical procedural owner.

# Non-Negotiable Continuity Rules

- GitHub `main` owns committed truth.
- Drive `Working Source/Current` owns approved uncommitted user-facing work.
- Production source/data/media writes and production commit/push remain explicitly gated.
- Documentation-only reconciliation may land directly on GitHub from latest verified contents.
- One write-authorized session per working package/checkout.
- Durable decisions and defects must not exist only in chat.
- Completed workstreams do not remain in active `docs/workstreams/`; archive/Git history preserves historical evidence.
- A receiving computer must fetch/pull a clean matching checkpoint before becoming write-authorized.
