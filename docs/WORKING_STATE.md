# Freshwater Fishing Companion — Working State

**Document:** WORKING_STATE.md  
**Document Revision:** 1.5.0  
**Document Status:** Approved — Active Repository Continuity Record  
**Workstream Status:** Fish Guide Version 1 — PASS / FINALIZED / CLOSED; Regulations Phase 0 is next  
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

# Durable Decisions Since Fish Closeout

- **D066 — Nationwide Regulations Resource Gateway and Coverage Exception:** Regulations is now the next milestone. Initial scope is a state-first official-resource gateway for the 48 contiguous U.S. states. The gateway indexes official resources and verification metadata; it does not own or interpret changing legal limits/rules. This is a geographic exception and does not expand the rest of the Four-State curated-content scope.
- **D067 — User-Aware User Knowledge Architecture Before Tackle Expansion:** Settings / User Data Architecture moves ahead of Tackle Reference / Find Tackle. The gate must settle user/profile identity, persistence, retention, migration, backup/restore, and preference ownership before material Tackle expansion and before authoritative My Tackle/Catch Log persistence.

# Open Cross-Domain Carry-Forward

- The Rig `useCases[]` species-specific wording defect remains parked in `V1-DESIGN-AUDIT.md` under D056. Fish applicability belongs to `FISH_RIG_GUIDANCE`.
- The required final Version 1 site-wide design/mobile audit remains open under UX-009.
- Compare Fish's former single-accent peer-card defect is CLOSED; `CARD_PAGE_STANDARD.md` owns the permanent site-wide rule.
- REG-001 / GATE-014 now own the next Regulations Phase 0 planning work.

# Next Product Milestone

**Regulations — U.S. State Fishing Resource Gateway** is next in `ROADMAP.md`.

The approved starting concept is state selection followed by a state landing page of authoritative links for regulations, licensing/permits, limits/seasons resources, special rules, special permits/tags, public fishing/access, stocking, agency fishing reports/forecasts, aquatic-invasive-species information, and other high-value official resources when available.

These are planning inputs, not a locked production schema/UI. Phase 0 may refine the taxonomy, navigation, data model, state-page layout, and production waves while preserving D066's official-resource/legal-ownership boundary.

# Exact Resume Point

1. Verify current GitHub `main` and confirm Drive `Working Source/Current` is reconciled to the latest committed baseline before new user-facing writes.
2. Read `HANDOFF.md`, `ACTIVE-CHANGE-LEDGER.md`, `DEVELOPMENT_WORKFLOW.md`, `ROADMAP.md`, D066/D067 in `DECISIONS.md`, `EXTERNAL_REFERENCE_MAINTENANCE.md`, and `workstreams/REGULATIONS-PHASE-0.md`.
3. Treat Fish Guide Version 1 and Wave 4 as closed. Use the archived Wave 4 record only for historical package/evidence provenance.
4. Begin **Regulations Phase 0 — Discovery, Architecture & Information Design** read-only/research-first. Validate the Four-State states plus structurally different states before locking the nationwide model.
5. Do not implement Regulations source/data until the Phase 0 model, resource taxonomy, provenance/freshness standard, state-selector behavior, and state-page information architecture are explicitly approved.
6. After Regulations closes, resume the canonical sequence with **What Should I Throw?**, then the **Settings / User Data Architecture Gate** before Tackle Reference / Find Tackle.
