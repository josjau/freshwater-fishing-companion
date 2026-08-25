# Freshwater Fishing Companion — Working State

**Document:** WORKING_STATE.md  
**Document Revision:** 1.4.9  
**Document Status:** Approved — Active Repository Continuity Record  
**Workstream Status:** Fish Guide Version 1 — PASS / FINALIZED / CLOSED; What Should I Throw is next  
**Wave 4 Source Baseline:** `fb951a18bdd4c33681644d188a45f2926114158d`  
**Last Updated:** 2026-08-25

# Purpose

This file is intentionally a **compact current-work record only**. It owns the active/next repository workstream, current validation/synchronization state, unresolved gates, and exact resume point. Completed history and durable decisions belong in their canonical repository owners or archive records.

# Authority Model

1. GitHub `main` is authoritative for committed production source and formally reconciled documentation.
2. Google Drive `Working Source/Current` owns approved uncommitted **user-facing application work** as an atomic full-tree ZIP + manifest and may intentionally be ahead of GitHub while that work is under review.
3. The local repository is the application/browser-validation copy of the Drive working package.
4. Documentation-only changes may be updated directly on GitHub from the latest verified file contents and reconciled into Drive afterward.
5. `HANDOFF.md` is the compact recovery entrypoint; `ACTIVE-CHANGE-LEDGER.md` owns material non-closed carry-forward items.
6. Chat history is context only.

# Fish Guide Version 1 — Closed

Production Wave 4 — Sunfish & Crappie is **PASS / FINALIZED / CLOSED**.

- Production source commit: `fb951a18bdd4c33681644d188a45f2926114158d` — `Fish - Wave 4 - Sunfish & Crappie Final`.
- Wave 4 scope: 9 Fish, 9 primary-identification media attachments, 5 deterministic comparison pairs, 9 Fish-to-Rig guidance records / 20 recommendations.
- Final R2 desktop review: APPROVED.
- Actual-mobile upload/review: APPROVED.
- GitHub Repository Integrity: PASS — all 8 validation groups.
- GitHub Pages build/deployment for the source commit: PASS.
- Compare Fish multi-accent card correction and screenshot-driven Fish/Compare image framing: APPROVED / VALIDATED.
- Historical Wave 4 package record: `archive/workstreams/fish-guide/FISH-WAVE-4-SUNFISH-CRAPPIE.md`.

Wave 4 completes the locked Version 1 Fish production milestone:

- 30 active Fish on the approved production schema,
- 30 primary-identification media attachments,
- 20 active deterministic Fish-identification comparison pairs,
- 27 active Fish-to-Rig guidance records overall.

FISH-008 and FISH-009 are terminal/closed and have been removed from the active ledger.

# Durable Workflow Decision Closed With Wave 4

`DEVELOPMENT_WORKFLOW.md` now owns the approved review-cycle correction rule. The first review package establishes the full trusted baseline. R2/R3 corrections within the same unchanged review cycle use the latest cumulative Drive/review package, targeted file inspection, and affected validation rather than repeating a full Git/document reconstruction. The full baseline path resumes whenever Git, package lineage, working state, scope, or closeout conditions invalidate the delta path.

# Open Cross-Domain Carry-Forward

- The Rig `useCases[]` species-specific wording defect remains parked in `V1-DESIGN-AUDIT.md` under D056. Fish applicability belongs to `FISH_RIG_GUIDANCE`.
- The required final Version 1 site-wide design/mobile audit remains open under UX-009.
- Compare Fish's former single-accent peer-card defect is CLOSED; `CARD_PAGE_STANDARD.md` owns the permanent site-wide rule.

# Next Product Milestone

**What Should I Throw** is next in `ROADMAP.md`. Before implementation, revalidate the Conditions/Technique/recommendation dependencies and settle the milestone-specific inputs/scoring/explanation architecture. Do not reopen closed Fish facts, media, relationships, or guidance without a new evidence/content defect or explicit new scope.

# Exact Resume Point

1. Verify current GitHub `main` and confirm Drive `Working Source/Current` is reconciled to the latest committed baseline before new user-facing writes.
2. Read `HANDOFF.md`, `ACTIVE-CHANGE-LEDGER.md`, `DEVELOPMENT_WORKFLOW.md`, `ROADMAP.md`, and the governing Recommendation/Conditions/Technique documents for **What Should I Throw**.
3. Treat Fish Guide Version 1 and Wave 4 as closed. Use the archived Wave 4 record only for historical package/evidence provenance.
4. Begin What Should I Throw planning/architecture from the closed 30-Fish / 21-Rig / canonical relationship baseline; do not duplicate canonical Fish/Rig/Technique knowledge into recommendation records.
