# Freshwater Fishing Companion — Handoff

**Document:** HANDOFF.md  
**Document Revision:** 2.2.5  
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

**Fish Guide — Gar Production Package Review**

Repository Audit Cleanup and Fish Guide Phase 0 are closed. Trout Production Package 1 is also **CLOSED** after GitHub verification, static validation, and user-confirmed fresh-session live validation on 2026-08-22. Its closure baseline is `0ea38b53cde8f1390cc84ea2ccd135acd3ee4431` (`Fish - Search Fix`). The broader prepared Hotfix 2 was not applied and is superseded unless a fresh-load regression later proves it necessary.

FISH-001 through FISH-007 are terminal Phase 0 history. The active Fish work remains:

- **FISH-008 — approved Fish production architecture implementation**
- **FISH-009 — approved Fish UX implementation**

The next staged category is **Gar**, using the validated Trout Fish presentation as the baseline. The approved review scope is Longnose Gar + Spotted Gar, their pairwise identification relationship, verified USFWS Duane Raver primary-identification media, no Fish-to-Rig guidance, and the approved Specialized Targeting / Safety presentation. Gar Review 1 cropping/simple enlargement and Review 2 zoom/pan enlargement were rejected after live review. The current review uses the uncropped canonical media with presentation-only subject framing where excessive source whitespace reduces visibility. Compact selection/comparison framing and the taller Fish Detail framing are evaluated separately. Gar Specialized Targeting also provides short external-search research topics so anglers can continue into specialized tackle, techniques, and current regulations without expanding the Companion's canonical Rig/Technique scope.

Gar remains review-stage work until the review package is approved, applied/pushed, re-verified from GitHub, and passes mandatory live-site validation.

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

## Established Fish Detail Pattern

The approved Trout implementation establishes the working Fish presentation baseline for the next Fish categories:

- Fish selection cards mirror the Fish identity/detail hierarchy.
- Fish identity order is Category → Name → primary identification image → scientific name → summary → family → aliases when present.
- The primary identification image does not repeat the Fish name as an extra visible caption.
- Compare Similar Fish follows the identity card, uses compact media-backed comparison choices, and supports up to two choices side-by-side at normal widths.
- How to Identify It remains Fish-owned identification content.
- Habitat & Water uses the established Rig at-a-glance visual grammar.
- Rigs to Start With uses the connected-knowledge pattern and links to canonical Rig detail instead of restating Rig instructions.
- Fish artwork with excessive built-in whitespace may use presentation-only, per-Fish subject framing; compact and Fish Detail contexts are tuned independently, natural proportions and diagnostic extremities must be preserved, and canonical media files remain unchanged.
- Fish that genuinely require specialized equipment, tactics, techniques, or regulation-sensitive methods may use Specialized Targeting with concise safety/context guidance plus a few useful external-search research topics. Paddlefish and future specialized Fish use this same pattern when their production packages are built.

This is a Fish-domain application of the existing Rig-detail baseline, not a separate site-wide design language.

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

1. Read the Google Drive Working State and re-fetch authoritative GitHub `main`; current verified baseline is `0ea38b53cde8f1390cc84ea2ccd135acd3ee4431` unless newer verified work exists.
2. Treat Trout Production Package 1 as CLOSED. Do not apply the superseded Hotfix 2 unless a fresh-load regression explicitly reopens it.
3. Continue Gar Production Package review with Longnose Gar + Spotted Gar using the validated Trout layout/interaction baseline. Current review work includes final image-framing refinement plus Specialized Targeting research-topic presentation.
4. Preserve the approved Gar boundary: no Gar-specific canonical Rig, rope-lure construction, specialized tackle, or specialized targeting Technique/Lure implementation in Version 1. Specialized Targeting may provide concise external-search research topics for anglers who want to pursue those methods outside the Companion.
5. Preserve FISH-003 staged activation: every active migrated Fish must satisfy complete record/category/evidence/media/relationship readiness; legacy Fish remain available until deliberately migrated.
6. After Gar review approval, prepare the final repo-relative package from freshly verified GitHub source, run integrated deterministic validation, then require post-push and live-site validation before Gar closure.
7. Keep UX-002 visible as **APPROVED / PENDING IMPLEMENTATION** for the still-affected Rig/Knot scoped helpers; Fish helper examples must remain beginner-useful and mechanically valid for their exact active scope.

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
