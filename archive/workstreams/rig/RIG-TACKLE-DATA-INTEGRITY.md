# Freshwater Fishing Companion

**Document:** RIG-TACKLE-DATA-INTEGRITY.md  
**Document Revision:** 0.1.2  
**Document Status:** Approved  
**Implementation Status:** Validated  
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

# Corrective Documentation Action

The first Batch 1 documentation package over-condensed `ARCHITECTURE.md`, `03-RIGS.md`, and `09-RELATIONSHIPS.md`, removing unrelated baseline content. That documentation state was not accepted as final.

The corrective package restored those three files from their exact pre-change GitHub baselines and reapplied only the authorized Rig/Tackle changes. A permanent replacement-integrity gate was added to `DEVELOPMENT_WORKFLOW.md` together with `tools/validate_replacement_integrity.py` so accidental truncation is mechanically blocked or flagged before future package delivery.

The corrective GitHub state was revalidated before runtime testing continued.

# Validation Result

**Result: Passed**

Completed checks:

1. Complete implementation/correction packages were pushed.
2. GitHub files were re-fetched and inspected.
3. Source/data-integrity checks passed.
4. All four current Rig detail/readiness flows passed.
5. Tackle popovers and derived `Used In` relationships passed.
6. Readiness persistence and canonical missing-name rendering passed.
7. Fish Search, Rig browse/search, external Rig references, related Tackle navigation, console health, and phone/desktop layout regressions passed.
8. Documentation correction and replacement-integrity safeguard passed repository inspection.

Detailed results are recorded in `RIG-TACKLE-DATA-INTEGRITY-VALIDATION.md`.

# Completion

The implementation and runtime/regression requirements for this workstream are complete and **Validated**.

Repository-final closeout requires this status documentation package to be pushed and re-fetched from GitHub. No new build segment should begin until that final documentation verification is complete.
