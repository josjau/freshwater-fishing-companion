# Freshwater Fishing Companion — Repository Audit Section 5 Decision

**Document Revision:** 1.0.0  
**Document Status:** Approved  
**Implementation Status:** Approved / Production Implementation Pending  
**Recorded:** 2026-08-19

# Scope

Section 5 — Rig Empty Schema Fields.

# Decision

The current universally empty Rig fields:

```text
techniqueIds[]
imageIds[]
```

are approved for removal from all 20 production Rig records.

`variationIds[]` remains part of the current Rig schema because it stores real canonical Rig relationships on many records; an empty array on a specific Rig means that Rig currently has no approved related variation.

The documentation-only `targetFishIds[]` proposal is not added to production during this cleanup.

# Reason

## `imageIds[]`

D056 assigns canonical entity-to-Media attachment to Media through `ownerType` + `ownerId`. A Rig-owned inverse media-ID array would duplicate the same semantic relationship and recreate the ownership defect corrected in Section 4.

Future local Rig media, when technically verified and legally reusable, will attach from Media using:

```text
ownerType: "rig"
ownerId: canonical Rig ID
```

## `techniqueIds[]`

All 20 current Rig records contain an empty `techniqueIds[]` array, no canonical Technique production dataset exists, and no runtime consumer uses the field. Keeping the field solely for a possible future feature violates the no-"just in case" schema rule.

Technique remains a valid future domain, but the Rig↔Technique relationship owner is deliberately unresolved. The previous Technique Draft proposed `compatibleRigIds[]`; populating both that field and Rig `techniqueIds[]` would violate D056.

When the Technique architecture gate opens, the project must select exactly one semantic owner for Rig↔Technique compatibility, or use a Decision Knowledge relationship if contextual recommendation/suitability semantics make that more accurate.

# Current Implementation Status

Current authoritative `data/rigs.js` baseline before implementation:

`fb21d9f449195c37a4ff1886b3c46373e30d6784`

Current production state before the approved package is pushed:

- 20 active canonical Rigs,
- 20 empty `techniqueIds[]` arrays,
- 20 empty `imageIds[]` arrays,
- `variationIds[]` contains real relationships on applicable Rigs,
- no production `data/techniques.js`,
- no runtime consumer of `techniqueIds` or `imageIds`,
- no current Rig-owned Media records.

The production source correction is intentionally limited to `data/rigs.js` and must remove only the two approved empty fields while preserving all unrelated Rig data and `variationIds[]`.

# Deferred / Future Trigger

Reopen Rig↔Technique relationship design only when canonical Technique implementation begins and concrete feature requirements exist.

At that gate, apply D056 to determine whether compatibility belongs to:

- Technique,
- Rig,
- or a Decision Knowledge relationship.

Do not pre-populate empty future relationship arrays in production records.

Future Rig media must continue to use Media ownership unless a later explicit architectural decision supersedes D056.

# Retirement Classification

Removed `techniqueIds[]` and `imageIds[]` production fields:

**GIT HISTORY ONLY**

They are ordinary superseded schema fields and have no independent archive value.

# Canonical Owners

- D056 site-wide ownership rule: `docs/DECISIONS.md`
- Rig schema and Section 5 field interpretation: `docs/data-model/03-RIGS.md`
- future Technique Draft and architecture gate: `docs/data-model/03A-TECHNIQUES.md`
- relationship semantics: `docs/data-model/09-RELATIONSHIPS.md`
- this file: Section 5 audit disposition and implementation gate

# Closeout Gate

Section 5 remains open until:

1. the one-file `data/rigs.js` production package is applied through GitHub Desktop,
2. pushed source is re-fetched from authoritative GitHub `main`,
3. verification confirms zero `techniqueIds` and zero `imageIds` fields,
4. all 20 Rig records, `variationIds[]`, Knot applications, Tackle requirements, tutorials, and unrelated data remain intact,
5. JavaScript syntax/integrity passes,
6. runtime regression is performed if the source diff affects observable behavior or validation indicates a risk,
7. Handoff/audit closeout documentation is updated.

Do not begin the next repository-audit section until this gate is satisfied.
