# Freshwater Fishing Companion — Handoff

**Document:** HANDOFF.md  
**Document Revision:** 0.4.1  
**Document Status:** Approved  
**Repository Baseline Reviewed:** `main` at `cf4f8bfa4974d06ada35650dd4e27f9371ee034f`  
**Last Updated:** 2026-08-07

# 1. Start Here

GitHub `main` is authoritative for existing project files. This document is the repository current-state map, not a duplicate specification. Follow the governing documents linked below before proposing changes.

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

The repository baseline reviewed for this handoff is commit:

`cf4f8bfa4974d06ada35650dd4e27f9371ee034f`

Commit message:

`Updating UX files to repair drift`

The Batch 1–3 documentation/governance package and cleanup were previously pushed, inspected, and validated.

Validated governance state retained from the prior segment:

- `HANDOFF.md` is present.
- Decisions D022–D041 are present in `DECISIONS.md`.
- The canonical Tackle data-model document is present.
- `docs/data-model/05A-INVENTORY.md` is the active Inventory/My Tackle model document.
- Obsolete `docs/data-model/05-INVENTORY.md` has been removed.
- Historical package artifacts and obsolete design-board/preview assets remain preserved in archive paths.

## Active Build Segment — Current-State UX Repairs

**Implementation Status: In Progress**

The UX source implementation was pushed in commit `cf4f8bfa4974d06ada35650dd4e27f9371ee034f` and repository inspection confirms the intended D030–D032 source changes are present:

- inert child cards render with visible `Coming Soon` unavailable semantics,
- Fish Guide `Search Fish` and Rig Guide `Browse All Rigs` remain actionable,
- the Dashboard Regulations CTA reads `Go to ODWC Regulations ↗`,
- the approved Forest Journal Dashboard primary-card styling has been restored.

The segment is **not yet finalized** because the same push introduced documentation-preservation defects and two package-specific root artifacts. Those defects must be corrected and GitHub revalidated before runtime closeout and before any new build segment begins.

Required corrective cleanup:

1. Restore the full historical content of `docs/CHANGELOG.md` while retaining the new UX repair entry.
2. Restore the full repository-handoff content of `docs/HANDOFF.md` while retaining the current UX-repair state.
3. Remove root `PACKAGE-MANIFEST.txt`.
4. Remove root `README-PACKAGE.txt`.
5. Re-fetch GitHub after the corrective push.
6. Complete runtime/regression validation under `docs/workstreams/UX-REPAIRS-VALIDATION.md`.
7. Only then update the active UX repair segment from In Progress to Validated.

The exact current source implementation must always be re-fetched from GitHub before edits. Do not assume any proposed or locally staged change has been implemented until it appears on `main`.

`MILESTONES.md` preserves historical milestone detail while current architecture in `ARCHITECTURE.md` and structural decisions in `DECISIONS.md` govern present and planned behavior.

# 3. Current Production Architecture

**Implementation Status: Current**

- Three knowledge layers: Reference Knowledge, Decision Knowledge, User Knowledge.
- Forest Journal is the only production-supported Version 1 theme.
- Fish Guide/Search exists with lightweight shared search helpers.
- Rig Guide exists with canonical Rig data, searchable/browsable Rig records, text-authoritative assembly, contextual Tackle `Name ⓘ` recognition help, verified external Rig references, and inline readiness.
- Canonical Tackle Reference Knowledge exists in `data/tackle.js`.
- Current Rig readiness uses the transitional local readiness state.
- Current Search uses lightweight normalized substring matching; it is not the permanent relevance-quality ceiling.
- Historical Copper, Gold, and Legacy Dark CSS files are retained as inactive design concepts and are not part of the supported production theme matrix.
- Completed package artifacts and obsolete design-board/preview assets have been moved out of active production locations into archive paths.

See `ARCHITECTURE.md` for source ownership and exact current-vs-planned distinctions.

# 4. Approved Product Direction

**Decision Status: Approved**

- Search is relevance-first; connected knowledge is breadth-first.
- Recommendation tiers are:
  - Best of the Best
  - Best Bang for the Buck
  - Best Budget
  - Best of the Rest
  - Avoid
- Rig owns physical assembly and rig-specific configuration.
- Technique owns reusable presentation behavior.
- `Rig.componentRequirements` owns Rig-to-Tackle usage; reverse `Used In` relationships are derived.
- Canonical Tackle owns Tackle identity/display name.
- Initial regional Rig target is 20 Rigs for northeast Oklahoma and southwest Kansas.
- Core Rigs — Master These First contains six confidence-building Rigs.
- Canonical Tackle defines functional type; My Tackle defines actual owned items.
- Rig Readiness answers buildability first; optimization comes later.
- My Tackle will be the only persistent ownership source of truth.
- Nothing outside explicit My Tackle ownership-management workflows may silently create or modify persistent ownership.
- User Knowledge is untrusted text by default and must be rendered safely.
- Unimplemented UI controls must clearly communicate that they are unavailable.
- External CTAs must identify their destination and use `↗`.
- Forest Journal Dashboard regressions are approved for narrow restoration rather than redesign.
- Document status, implementation status, decision status, and application version are separate concepts.
- Repository handoff and continuous decision documentation are mandatory project-governance requirements.

See `DECISIONS.md` D022–D041 and the governing data-model documents.

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

The D030–D032 UX repairs are no longer in this list because their source implementation has been pushed. They remain **In Progress** until corrective documentation cleanup and runtime validation complete.

These items are settled direction but must not be described as current implementation until they are built, pushed, and validated.

# 6. Known Temporary Bridges

## Rig readiness

Current storage key:

    freshwaterFishingCompanion.tackleReadiness.v1

This is a temporary bridge.

It does not become permanent My Tackle ownership, and existing readiness checkmarks are not automatically migrated into Inventory.

When My Tackle becomes authoritative:

- owned canonical Tackle types satisfy Rig requirements automatically,
- missing components may be temporarily marked available for the current build/session,
- temporary availability never writes My Tackle,
- only explicit My Tackle ownership-management actions write persistent ownership.

# 7. Open Decisions

The following remain intentionally unresolved:

- Detailed My Tackle owned-item schema:
  - brand
  - model
  - size
  - color
  - quantity
  - condition
  - notes
  - durable-vs-consumable MVP treatment
  - custom/unmapped items
  - exact compatibility constraints
- Commercial/branded name resolution such as `Rooster Tail` between a canonical lure/tackle concept and any future commercial ProductDefinition.
- Exact Recommendation model schema; a dedicated Recommendations model document remains deferred until mature.
- ProductDefinition architecture beyond the approved rule that it is not required for My Tackle MVP/readiness.
- Whether some entries in the planned 20-Rig library, especially items such as Inline Spinner Setup or Jighead + Soft Plastic, are best modeled permanently as canonical Rigs versus lure/setup combinations.
- Future automated relationship, asset, document-link, and other repository validators.
- Other audit findings not yet discussed to completion must remain visible and must not be silently treated as decided.

# 8. Next Recommended Work

The active Current-State UX Repairs segment must be corrected and fully validated before another segment begins.

After UX repair validation, recommended sequence:

1. Rig/Tackle data-integrity cleanup:
   - canonical component display names
   - derived inverse relationships
2. Regional 20-Rig expansion:
   - Carolina Rig
   - Core Rigs organization
3. Dedicated My Tackle schema discussion before My Tackle implementation

Re-evaluate this sequence after each finalized and validated segment.

# 9. Governing Documents

| Topic | Governing document |
|---|---|
| Repository current-state entrypoint | `HANDOFF.md` |
| Long-term structural decisions | `DECISIONS.md` |
| Current source ownership / architecture | `ARCHITECTURE.md` |
| Editing, validation, closeout, scope control | `DEVELOPMENT_WORKFLOW.md` |
| UI, coding, and documentation conventions | `STYLE_GUIDE.md` |
| Media requirements | `MEDIA_GUIDE.md` |
| Project direction | `PROJECT.md` / `ROADMAP.md` |
| Functional requirements | `SPECIFICATION.md` |
| Milestone/history status | `MILESTONES.md` / `CHANGELOG.md` |
| UX repair scope | `workstreams/UX-REPAIRS.md` |
| UX repair validation | `workstreams/UX-REPAIRS-VALIDATION.md` |
| Data-model index | `data-model/README.md` |
| Data-model terminology | `data-model/00-GLOSSARY.md` |
| Global data rules | `data-model/01-FOUNDATION.md` |
| Rig model | `data-model/03-RIGS.md` |
| Technique model | `data-model/03A-TECHNIQUES.md` |
| Conditions model | `data-model/03B-CONDITIONS.md` |
| Canonical Tackle | `data-model/05-TACKLE.md` |
| My Tackle / Inventory | `data-model/05A-INVENTORY.md` |
| User Knowledge | `data-model/07-USER-DATA.md` |
| Relationships | `data-model/09-RELATIONSHIPS.md` |

# 10. Source-of-Truth / Editing Rules

- GitHub `main` is authoritative for existing project files.
- Fetch latest GitHub contents before proposing edits to an existing source file.
- Do not assume a prior proposal, package, or staged file was implemented.
- Make targeted edits by default.
- Full-file replacement is the default final artifact.
- A replacement file must be derived from the latest verified GitHub file, not reconstructed from memory, an old package, or a template.
- Make only authorized changes.
- Diff the completed replacement against the fetched source.
- Any unrelated diff is a failure unless explicitly authorized.
- Preserve mature approved UI behaviors as regression targets.
- User normally commits and pushes through GitHub Desktop.
- Preflight is not validation.
- After push, inspect the actual GitHub commit/files and validate runtime behavior where applicable.
- Permanent project knowledge belongs in repository documentation, not only in chat history.
- Meaningful design, architecture, workflow, data-model, UI, deferment, or rejection decisions must be documented even if the discussion occurs outside the active build segment.
- If a substantial off-segment discussion would disrupt clean completion of the current segment, deliberately park it until a coherent stopping point and preserve enough context that it cannot be lost.
- No session, module, section, or build segment is finalized until all relevant documentation is updated and validated in GitHub.
- Do not move into a new build segment while the current one remains unfinalized.

# 11. Decision-Making Operating Model

New ideas do not override established architecture merely because they are newer.

Evaluate meaningful changes against:

- existing architecture,
- established standards,
- validated workflows,
- current milestone,
- implementation cost,
- regression risk,
- affected files/modules,
- simpler alternatives,
- expected benefit versus rework.

Classify proposals as:

- **Build Now** — required for correctness/current implementation, foundational architecture/data, prevention of foreseeable rework, or material simplification/value.
- **Parking Lot** — valuable, preserved, but not required by the current milestone.
- **Reject** — conflicts with the mission/architecture, duplicates capability, or adds disproportionate complexity.

Before materially disruptive change, document:

- old approach,
- proposed approach,
- expected gain,
- rework required,
- affected flows,
- regression risk,
- simpler alternatives.

Permanent principle:

> Plan twice and write once.

# 12. Session / Module Closeout Rule

At the end of every meaningful session, module, section, or build segment:

1. Identify decisions made.
2. Identify files and documentation affected.
3. Record approved but unimplemented work explicitly.
4. Record unresolved questions explicitly.
5. Record rejected/deferred ideas when forgetting them would cause repeated re-discussion.
6. Update the correct governing documents.
7. Update `HANDOFF.md` if project state, open work, or next steps changed.
8. Push through GitHub.
9. Inspect the actual repository state.
10. Validate runtime behavior where applicable.
11. Only then declare the area finalized and move on.

Permanent principle:

> Finish cleanly or deliberately park; do not leave half-finalized project areas behind.
