# Freshwater Fishing Companion — Handoff

**Document:** HANDOFF.md  
**Document Revision:** 0.4.0  
**Document Status:** Approved  
**Repository Baseline Reviewed:** `main` at `e1447e67b082d67640298829e120a034014dd44e`  
**Last Updated:** 2026-08-07

# 1. Start Here

GitHub `main` is authoritative for existing project files. This document is the repository current-state map, not a duplicate specification.

Recommended first-read order:

1. `HANDOFF.md`
2. `DECISIONS.md`
3. `ARCHITECTURE.md`
4. `DEVELOPMENT_WORKFLOW.md`
5. `STYLE_GUIDE.md`
6. Relevant `data-model/` documents
7. `MEDIA_GUIDE.md` when media is involved

Permanent operating rule:

> Do not begin a new build segment while the current segment is unfinalized. A session, module, section, or build segment is not finalized until all relevant implementation and documentation work has been pushed, inspected, and validated in GitHub.

# 2. Current Repository / Milestone State

The last fully validated governance baseline is `main` at:

`e1447e67b082d67640298829e120a034014dd44e`

The Batch 1–3 documentation/governance segment is validated and closed.

## Active Build Segment

**Current-State UX Repairs**

**Implementation Status: In Progress**

This coherent segment contains three previously approved repairs:

1. Clear `Coming Soon` semantics for inert child cards.
2. Dashboard Regulations CTA: `Go to ODWC Regulations ↗`.
3. Narrow restoration of the approved Forest Journal Dashboard styling regression.

The implementation package is prepared from the latest verified GitHub source files. It is not considered validated until the source and documentation package is pushed, GitHub is re-fetched, and runtime behavior is checked.

See `workstreams/UX-REPAIRS.md` and `workstreams/UX-REPAIRS-VALIDATION.md`.

# 3. Current Production Architecture

- Three knowledge layers: Reference Knowledge, Decision Knowledge, User Knowledge.
- Forest Journal is the only production-supported Version 1 theme.
- Fish Guide/Search and Rig Guide are current implemented reference workflows.
- Current Rig readiness remains the transitional local readiness state.
- Canonical Tackle Reference Knowledge exists in `data/tackle.js`.
- Current Search remains lightweight normalized substring matching.
- Historical Copper, Gold, and Legacy Dark CSS files are inactive design concepts, not supported production themes.

# 4. Approved Product Direction

See `DECISIONS.md` D022–D041.

Key settled direction includes relevance-first Search, the five recommendation tiers, Rig/Technique ownership boundaries, single-owner Rig-to-Tackle relationships, canonical Tackle naming, the 20-Rig regional target, My Tackle ownership authority, safe User Knowledge rendering, unavailable-feature affordances, external CTA semantics, and Dashboard regression restoration.

# 5. Approved but Not Yet Implemented

Outside the active UX-repair segment:

- Lightweight deterministic Search ranking.
- 20-Rig canonical regional library and Core-6 presentation.
- Canonical Carolina Rig record.
- Remove duplicate Tackle `rigIds`; derive reverse Rig usage.
- Resolve Rig component display names from canonical Tackle.
- My Tackle as persistent Rig Readiness ownership source.
- Temporary per-build/session availability separate from ownership.
- Explicit My Tackle Add/Edit/Remove write authority.
- Safe User Knowledge rendering across future user-entered/imported features.

# 6. Known Temporary Bridges

Current Rig readiness storage key:

    freshwaterFishingCompanion.tackleReadiness.v1

This is temporary. Existing readiness checkmarks do not become My Tackle ownership.

# 7. Open Decisions

- Detailed My Tackle owned-item schema.
- Commercial/branded name resolution such as `Rooster Tail`.
- Exact Recommendation model schema.
- ProductDefinition architecture beyond MVP readiness needs.
- Whether some planned 20-Rig entries are permanently Rigs versus lure/setup combinations.
- Future automated relationship, asset, and documentation validators.
- Other audit findings not yet discussed to completion.

# 8. Active UX Repair Boundaries

The active segment may change only what is required to implement D030–D032 and the already-approved source-header cleanup triggered by deliberate edits.

Protected behavior includes:

- Dashboard order and parent navigation.
- Fish Search behavior.
- Rig browse/detail behavior.
- Tackle `Name ⓘ` popovers.
- Inline Rig readiness.
- Current data and media.
- Forest Journal as the sole supported production theme.
- No dormant-theme parity work.

# 9. Next Recommended Work After UX Repair Validation

1. Rig/Tackle data-integrity cleanup.
2. Regional 20-Rig expansion.
3. Dedicated My Tackle schema discussion before implementation.

Do not begin item 1 until this UX-repair segment is fully documented and validated.

# 10. Governing Documents

| Topic | Governing document |
|---|---|
| Current-state entrypoint | `HANDOFF.md` |
| Structural decisions | `DECISIONS.md` |
| Architecture | `ARCHITECTURE.md` |
| Workflow / closeout | `DEVELOPMENT_WORKFLOW.md` |
| UI and code conventions | `STYLE_GUIDE.md` |
| Media | `MEDIA_GUIDE.md` |
| UX repair scope | `workstreams/UX-REPAIRS.md` |
| UX repair validation | `workstreams/UX-REPAIRS-VALIDATION.md` |

# 11. Source-of-Truth / Editing Rules

- GitHub `main` is authoritative.
- Fetch latest GitHub source before edits.
- Make targeted edits.
- Full-file replacements are the default delivery artifact.
- Diff replacements against fetched source; unrelated diffs are failures unless authorized.
- Preflight is not validation.
- After push, inspect GitHub and validate runtime behavior where applicable.
- Meaningful cross-segment decisions must be documented.
- Do not move into a new build segment while the current one remains unfinalized.
