# Freshwater Fishing Companion — Handoff

**Document:** HANDOFF.md  
**Document Revision:** 0.1.0  
**Document Status:** Approved  
**Repository Baseline Reviewed:** `main` at `0da997303bb3c3eb1b37905a484d03ca36e4058c`  
**Last Updated:** 2026-08-07

# 1. Start Here

GitHub `main` is authoritative for existing project files. This document is the current-state map, not a duplicate specification. Follow the governing documents linked below before proposing changes.

Recommended first-read order:

1. `HANDOFF.md`
2. `DECISIONS.md`
3. `ARCHITECTURE.md`
4. `DEVELOPMENT_WORKFLOW.md`
5. `STYLE_GUIDE.md`
6. Relevant `data-model/` documents
7. `MEDIA_GUIDE.md` when media is involved

# 2. Current Repository / Milestone State

The repository baseline reviewed for this handoff is commit `0da997303bb3c3eb1b37905a484d03ca36e4058c`.

The exact current source implementation must always be re-fetched from GitHub before edits. Do not assume any locally staged package described here has already been pushed.

`MILESTONES.md` preserves historical milestone detail while explicitly identifying where later approved architecture superseded the old MS2.5/MS2.6 readiness and Rig-media workflows. Current architecture in `ARCHITECTURE.md` and structural decisions in `DECISIONS.md` govern the current state.

# 3. Current Production Architecture

**Implementation Status: Current**

- Three knowledge layers: Reference Knowledge, Decision Knowledge, User Knowledge.
- Forest Journal is the active production theme.
- Fish Guide/Search exists with lightweight shared search helpers.
- Rig Guide exists with canonical Rig data, searchable/browsable Rig records, text-authoritative assembly, contextual Tackle `Name ⓘ` recognition help, verified external Rig references, and inline readiness.
- Canonical Tackle Reference Knowledge exists in `data/tackle.js`.
- Current Rig readiness uses the transitional local readiness state.
- Current Search is lightweight normalized substring matching; it is not the permanent relevance-quality ceiling.

See `ARCHITECTURE.md` for source ownership and exact current-vs-planned distinctions.

# 4. Approved Product Direction

**Decision Status: Approved**

- Search is relevance-first; connected knowledge is breadth-first.
- Recommendation tiers: Best of the Best, Best Bang for the Buck, Best Budget, Best of the Rest, Avoid.
- Rig owns physical assembly; Technique owns reusable presentation behavior.
- `Rig.componentRequirements` owns Rig-to-Tackle usage; reverse `Used In` is derived.
- Canonical Tackle owns Tackle identity/display name.
- Initial regional Rig target is 20 Rigs for northeast Oklahoma/southwest Kansas.
- Core Rigs — Master These First contains six confidence-building Rigs.
- Canonical Tackle defines functional type; My Tackle defines actual owned items.
- Readiness answers buildability first; optimization comes later.
- User Knowledge is untrusted text by default and must be rendered safely.

See `DECISIONS.md` D022–D029 and the governing data-model documents.

# 5. Approved but Not Yet Implemented

**Implementation Status: Approved / Not Implemented**

- Lightweight deterministic relevance ranking before Search becomes noisy.
- 20-Rig canonical regional library and Core-6 presentation.
- Canonical Carolina Rig record to resolve the approved relationship.
- Remove duplicate Tackle `rigIds`; derive reverse Rig usage.
- Resolve Rig component display names from canonical Tackle.
- My Tackle as the persistent ownership source for Rig Readiness.
- Temporary per-build/session availability that does not write ownership.
- Explicit My Tackle Add/Edit/Remove write authority.
- Safe User Knowledge rendering rules across future user-entered/imported features.
- `Coming Soon`/unavailable semantics for currently inert child cards.
- Dashboard Regulations CTA `Go to ODWC Regulations ↗`.
- Narrow restoration of the approved Forest Journal Dashboard styling regression.
- Archive completed package artifacts and obsolete design-board/preview assets.
- Treat dormant Copper/Gold/Legacy Dark CSS files as historical/inactive concepts, not supported themes.

# 6. Known Temporary Bridges

## Rig readiness

Current storage key:

    freshwaterFishingCompanion.tackleReadiness.v1

This is a temporary bridge. It does not become permanent My Tackle ownership and old checkmarks are not automatically migrated into Inventory.

# 7. Open Decisions

The following remain intentionally unresolved:

- Detailed My Tackle owned-item schema: brand/model/size/color/quantity/condition/notes, durable-vs-consumable MVP treatment, custom/unmapped items, and exact compatibility constraints.
- Commercial/branded name resolution such as `Rooster Tail` between a canonical lure/tackle concept and any future commercial ProductDefinition.
- Exact Recommendation model schema; a dedicated Recommendations model document is deferred until mature.
- ProductDefinition architecture beyond the approved rule that it is not required for My Tackle MVP/readiness.
- Broader audit items not yet finalized, including future automated relationship/asset/document validators and other audit findings not yet discussed to completion.

# 8. Next Recommended Work

Before a new build segment begins, the current documentation/governance segment must be pushed and validated in GitHub.

After documentation validation, the next implementation work should be chosen from the already approved Build Now repairs rather than opening another build area prematurely. Likely implementation sequence:

1. Current-state UX repairs: Coming Soon affordances, ODWC Regulations CTA, Dashboard CSS regression restoration.
2. Rig/Tackle data-integrity cleanup: canonical names and derived inverse relationships.
3. Regional 20-Rig expansion, including Carolina Rig and Core Rigs organization.
4. Dedicated My Tackle schema discussion before My Tackle implementation.

Re-evaluate this order after each finalized/validated segment.

# 9. Governing Documents

| Topic | Governing document |
|---|---|
| Long-term structural decisions | `DECISIONS.md` |
| Current source ownership / architecture | `ARCHITECTURE.md` |
| Editing, validation, closeout, scope control | `DEVELOPMENT_WORKFLOW.md` |
| UI/coding/document conventions | `STYLE_GUIDE.md` |
| Media requirements | `MEDIA_GUIDE.md` |
| Project direction | `PROJECT.md` / `ROADMAP.md` |
| Data-model terminology | `data-model/00-GLOSSARY.md` |
| Global data rules | `data-model/01-FOUNDATION.md` |
| Rig model | `data-model/03-RIGS.md` |
| Technique model | `data-model/03A-TECHNIQUES.md` |
| Canonical Tackle | `data-model/05-TACKLE.md` |
| My Tackle / Inventory | `data-model/05A-INVENTORY.md` |
| Relationships | `data-model/09-RELATIONSHIPS.md` |

# 10. Source-of-Truth / Editing Rules

- Fetch latest GitHub contents before proposing edits to an existing source file.
- Do not assume a prior proposal/staged package was implemented.
- Make targeted edits by default.
- Full-file replacement is the default final artifact.
- Diff the replacement against the fetched source; unrelated diffs are failures unless authorized.
- User normally commits/pushes through GitHub Desktop.
- Preflight is not validation.
- After push, inspect actual GitHub files and validate deployed/runtime behavior where applicable.
- No session/module/section is finalized until all relevant documentation is updated and validated in GitHub.
- Do not begin a new build segment while the current one is unfinalized.
- Meaningful cross-segment decisions must be documented; deliberately park substantial off-segment discussion when that preserves a cleaner stopping point.
