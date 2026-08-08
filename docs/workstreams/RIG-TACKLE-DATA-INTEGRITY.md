# Freshwater Fishing Companion

**Document:** RIG-TACKLE-DATA-INTEGRITY.md  
**Document Revision:** 0.1.0  
**Document Status:** Approved  
**Implementation Status:** In Progress  
**Last Updated:** 2026-08-08

# Purpose

This workstream implements the approved Rig/Tackle relationship cleanup before the Core-6 Rig expansion.

# Scope

Batch 1 changes:

- Replace ambiguous Rig requirement `id` with explicit `tackleId`.
- Remove duplicated Rig requirement `name`.
- Resolve Rig component display names from canonical Tackle.
- Remove manual Tackle `rigIds`.
- Derive Tackle `Used In` from active Rig component requirements.
- Keep transitional readiness storage compatible by preserving the same Tackle ID string keys.
- Use `tackleId` naming consistently at the readiness callback boundary.
- Remove package-specific `REPLACEMENT` source-header/build-info language from deliberately edited source files under D036.

# Source Files

- `data/rigs.js`
- `data/tackle.js`
- `view-renderer.js`
- `script.js`

# Governing Documentation

- `ARCHITECTURE.md`
- `DECISIONS.md`
- `DEVELOPMENT_WORKFLOW.md`
- `HANDOFF.md`
- `STYLE_GUIDE.md`
- `data-model/03-RIGS.md`
- `data-model/05-TACKLE.md`
- `data-model/09-RELATIONSHIPS.md`

# Explicit Non-Scope

This batch does not:

- add new Core Rig records,
- implement Core-card visual styling,
- replace Tackle images,
- implement My Tackle ownership,
- migrate prior readiness selections,
- add knot content or knot illustrations,
- resolve the Inline Spinner / Jighead modeling question,
- add Carolina Rig yet.

# Compatibility Requirement

The existing storage key remains:

```text
freshwaterFishingCompanion.tackleReadiness.v1
```

Existing per-Rig stored keys such as `bullet-weight`, `hook`, or `split-shot` remain valid because they already contain canonical Tackle ID strings.

# Completion Rule

This workstream remains In Progress until:

1. the complete package is pushed,
2. GitHub files are re-fetched and inspected,
3. source syntax/data integrity checks pass,
4. Rig browse/detail regressions pass,
5. Tackle popovers and derived `Used In` pass,
6. readiness persistence and missing-name rendering pass,
7. documentation is verified on GitHub.

Only then may the segment be marked Validated and the project proceed to the Tackle-image audit / Core-6 modeling discussion.
