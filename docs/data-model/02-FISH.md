# Freshwater Fishing Companion

**Document:** 02-FISH.md  
**Document Revision:** 0.3.0  
**Document Status:** Draft — Production Baseline + Approved Phase 0 Target  
**Implementation Status:** Current schema implemented; Phase 0 expansion not implemented  
**Decision Baseline:** D002, D009, D010, D016, D022, D047, D050, D056, Fish Guide Phase 0  
**Last Updated:** 2026-08-19

---

# Purpose

This document distinguishes the Fish schema that exists on current production `main` from the approved Fish Guide Phase 0 target model.

Fish owns facts intrinsic to the species. Recommendations, pairwise identification guidance, Media attachment, regulations, and User Knowledge belong to their respective owners rather than being duplicated into Fish.

No production Fish source change is authorized by this documentation synchronization.

---

# Current Production Schema — Implemented

`data/fish.js` currently stores canonical Fish records with exactly these fields:

```text
id
name
summary
createdVersion
lastModifiedVersion
isActive
scientificName
category
family
habitatTags[]
waterbodyTypes[]
```

Current production therefore uses the text field `category`. It does **not** yet implement `categoryId`, `aliases[]`, or `identificationTraits[]`.

The existing production fields remain authoritative until the approved Fish Guide implementation deliberately migrates the schema.

---

# Current Production Field Ownership

## id
Stable canonical Fish identity used by current routing and relationships.

## name
Canonical user-facing common name.

## summary
Concise species/reference description.

## createdVersion / lastModifiedVersion / isActive
Canonical lifecycle metadata.

## scientificName
Application-maintained verified scientific identity.

## category
Current production browse/category text. This is a transitional current field, not the approved long-term Phase 0 category relationship.

## family
Biological family/reference metadata.

## habitatTags[]
Stable species habitat associations owned by Fish. These are not transient fishing Conditions.

## waterbodyTypes[]
General waterbody environments commonly associated with the species.

---

# Approved Fish Guide Phase 0 Target — Not Implemented

The approved Phase 0 target schema is:

```text
id
name
summary
createdVersion
lastModifiedVersion
isActive
scientificName
categoryId
family
aliases[]
identificationTraits[]
habitatTags[]
waterbodyTypes[]
```

Target-model changes relative to current production:

- replace current `category` text with canonical `categoryId`,
- add legitimate alternate names through `aliases[]`,
- add intrinsic observable identification guidance through `identificationTraits[]`,
- preserve Fish-owned `habitatTags[]` and `waterbodyTypes[]`.

These target fields are **Approved / Not Implemented**. Documentation must not describe them as current production until the corresponding source migration is implemented and validated.

---

# Approved Target Category Registry — Not Implemented

Phase 0 approves a Fish-domain category registry conceptually named `FISH_CATEGORY_DATA` with:

```text
id
name
summary
```

Fish would own membership through `categoryId`; the registry would own category identity and presentation. `All Fish` remains a browse mode rather than a category.

This registry is not present in current production and must not be assumed by runtime code before implementation.

---

# Fish Identification Relationships — Approved / Not Implemented

Pairwise field-identification knowledge belongs outside Fish in a future `FISH_IDENTIFICATION_RELATIONSHIPS` registry.

Conceptual relationship shape remains:

```text
id
fishIds[]
createdVersion
lastModifiedVersion
isActive
distinctions[]
```

Each distinction identifies one Fish and the text that differentiates it from the paired Fish.

Rules:

- exactly two Fish per relationship,
- one stored relationship supports both UI directions,
- intrinsic appearance belongs to Fish `identificationTraits[]`,
- pairwise distinction wording belongs to the relationship owner.

This registry is not implemented on current `main`.

---

# Fish-to-Rig Guidance — Approved / Not Implemented

Fish-to-Rig recommendations are Decision Knowledge, not Fish or Rig fields.

The approved conceptual owner is `FISH_RIG_GUIDANCE`, with recommendation items that may reference canonical Rig IDs and carry recommendation-specific priority/reason semantics.

Current Fish records do not store `recommendedRigIds[]`, and current Rig records do not store `targetFishIds[]`.

Exact implementation details remain subject to the Fish Guide architecture gate and D056 single-owner review.

---

# Media Ownership

Fish records do not store inverse `imageIds[]`.

Media owns canonical attachment through:

```text
ownerType: "fish"
ownerId: canonical Fish ID
```

Future pairwise comparison media may use the approved Fish-identification owner type once that relationship domain is implemented.

Media provenance, role, ordering, and technical metadata belong to Media rather than Fish.

---

# Search

## Current production

Current search consumes the fields that actually exist in `data/fish.js`.

## Approved Phase 0 target

Future Fish search may use canonical name, approved aliases, scientific name, category identity, and family according to the approved Phase 0 ranking rules.

Search must consume canonical facts rather than creating duplicate Fish relationship fields solely for discoverability.

---

# Explicitly Excluded Canonical Fish Fields

Do not add the following merely for UI convenience or speculative future use:

```text
recommendedRigIds
recommendedLureIds
regulationResourceIds
imageIds
searchKeywords
similarFishIds
```

Jurisdiction-specific occurrence/regulation facts, recommendations, Media attachment, and User Knowledge require their own semantic owners.

---

# Version 1 Target Library

Fish Guide Phase 0 approves a 30-Fish target library and the Northern Rock Bass naming correction. Those records and naming changes are not declared production-complete by this document; implementation status must be determined from the actual source files and Fish Guide workstream.

---

# Implementation Gate

Before the Phase 0 target replaces the current production Fish schema, implementation must deliberately resolve and validate:

1. `category` → `categoryId` migration,
2. category registry creation and referential integrity,
3. `aliases[]` and `identificationTraits[]` authoring,
4. Fish-identification relationship IDs and references,
5. Fish-to-Rig Decision Knowledge ownership and identifiers,
6. Fish Media coverage/requiredness standards,
7. source documentation and integrity validation,
8. staged activation/release-readiness semantics.

Until that work is implemented, the **Current Production Schema** section above remains authoritative for runtime source shape.

---

# Related Documents

- `00-GLOSSARY.md`
- `01-FOUNDATION.md`
- `03-RIGS.md`
- `03B-CONDITIONS.md`
- `06-LURES.md`
- `07-USER-DATA.md`
- `09-RELATIONSHIPS.md`
- `../ARCHITECTURE.md`
- `../DECISIONS.md`
- `../NAVIGATION-PAGE-STANDARD.md`
- `../MEDIA_GUIDE.md`
- `../workstreams/FISH-GUIDE-PHASE-0.md`
- `../workstreams/FISH-GUIDE-PHASE-0-AUDIT-REVISIONS.md`
