# Freshwater Fishing Companion

**Document:** 02-FISH.md  
**Document Revision:** 0.4.5  
**Document Status:** Approved — Production Baseline + Fish Production Contract  
**Implementation Status:** Staged production implementation active; Trout, Gar, Wave 1, Wave 2, and Wave 3 Bass validated/closed; remaining locked library pending  
**Decision Baseline:** D002, D009, D010, D016, D022, D047, D050, D056–D061, FISH-001–FISH-007  
**Last Updated:** 2026-08-24

---

# Purpose

This document defines the approved Fish production contract and records the staged migration state currently present on production `main`.

Fish owns facts intrinsic to the species. Recommendations, pairwise identification guidance, Media attachment, regulations, source provenance, and User Knowledge belong to their respective owners rather than being duplicated into Fish.

Fish Guide Phase 0 is closed. Production implementation proceeds in staged, validated packages. Fish already migrated by a closed production package use the approved target schema; Fish not yet migrated may temporarily retain the legacy seed shape until their approved production package lands. The mixed migration state is deliberate and temporary.

---

# Current Production Schema — Staged Migration

`data/fish.js` currently contains a deliberate mixed-schema migration state.

Fish completed through the closed Trout, Gar, Production Wave 1, Production Wave 2, and Production Wave 3 Bass packages use the approved production shape:

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

Fish whose production package has not yet landed may temporarily retain the legacy seed shape:

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

The canonical Fish category registry, Fish-identification relationship registry, Fish-to-Rig guidance registry, Fish Media readiness contract, and per-Fish source-evidence ledger are implemented and expand incrementally as each production package closes.

Do not infer that a legacy-shaped Fish has satisfied the production contract merely because it remains active during staged migration. Its package must still complete the target schema, evidence, primary Media, applicable identification relationships, and validation requirements below.

---

# Approved Fish Production Target

The approved canonical Fish record field order is:

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

Target-model changes relative to the legacy seed shape:

- replace legacy `category` text with canonical `categoryId`,
- add legitimate alternate common names through `aliases[]`,
- add intrinsic observable identification guidance through `identificationTraits[]`,
- preserve Fish-owned `habitatTags[]` and `waterbodyTypes[]`,
- keep relationship, recommendation, Media, regulation, and source-provenance data outside canonical Fish.

## Field ownership

### `id`
Stable canonical Fish identity used by routing and relationships.

### `name`
Canonical beginner-facing common name.

### `summary`
Concise beginner-friendly species/reference description.

### `createdVersion` / `lastModifiedVersion`
Canonical lifecycle/version metadata.

### `isActive`
Sole Fish runtime lifecycle authority. No parallel `isV1`, `isReady`, `releaseStatus`, or `publicationStatus` field is allowed.

### `scientificName`
Canonical scientific identity. For North American Fish naming, use the current American Fisheries Society **Names of Fishes** standard unless a documented project-specific reason requires an exception. Scientific synonyms/former nomenclature belong in `FISH_REFERENCE_SOURCES.md`, not `aliases[]`.

Approved Largemouth Bass production identity:

```text
name: Largemouth Bass
scientificName: Micropterus nigricans
```

`Micropterus salmoides` is retained in source provenance as former/synonymous nomenclature and does not create a separate Version 1 Florida Bass record.

### `categoryId`
Reference to one Fish-domain category in `FISH_CATEGORY_DATA`.

### `family`
Biological family/reference metadata.

### `aliases[]`
Legitimate established alternate common names or regional terminology. Do not use arbitrary search phrases or scientific synonyms here. Shared legitimate aliases are allowed when evidence supports them.

### `identificationTraits[]`
Observable, beginner-readable, species-specific field-identification traits. Put the strongest useful diagnostic traits first. Pairwise distinctions belong to the identification-relationship owner rather than being duplicated here.

### `habitatTags[]`
Stable intrinsic habitat associations owned by Fish. Approved Version 1 vocabulary:

```text
Grass
Timber
Brush
Rock
Current
Open Water
Shallow Water
Deep Water
Cold Water
Mud
Channel
```

### `waterbodyTypes[]`
General waterbody environments owned by Fish. Approved Version 1 vocabulary:

```text
Pond
Lake
Reservoir
River
Creek
```

---

# Fish Category Registry

Implemented source:

```text
FISH_CATEGORY_DATA
```

Category record shape:

```text
id
name
summary
```

Approved Version 1 categories:

```text
bass             — Bass
catfish          — Catfish
sunfish-crappie  — Sunfish & Crappie
walleye-sauger   — Walleye & Sauger
trout            — Trout
gar              — Gar
carp             — Carp
drum             — Drum
paddlefish       — Paddlefish
```

Rules:

- `All Fish` is a browse mode, not a category record.
- Category order is owned by the category registry.
- Category records do not own `isActive`.
- Category visibility/counts are derived from active member Fish.
- every migrated Fish `categoryId` must resolve to exactly one canonical category.
- category assignment is project-owned beginner navigation taxonomy and does not require external biological evidence.

---

# Version 1 Library

The locked Version 1 target contains 30 canonical Fish:

1. Channel Catfish
2. Blue Catfish
3. Flathead Catfish
4. Black Bullhead
5. Yellow Bullhead
6. Largemouth Bass
7. Smallmouth Bass
8. Spotted Bass
9. Bluegill
10. Redear Sunfish
11. Green Sunfish
12. Longear Sunfish
13. Northern Rock Bass
14. Warmouth
15. Ozark Bass
16. Black Crappie
17. White Crappie
18. White Bass
19. Striped Bass
20. Hybrid Striped Bass
21. Walleye
22. Saugeye
23. Sauger
24. Rainbow Trout
25. Brown Trout
26. Common Carp
27. Freshwater Drum
28. Paddlefish
29. Longnose Gar
30. Spotted Gar

Northern Rock Bass is the canonical identity from D060:

```text
id: northern-rock-bass
name: Northern Rock Bass
scientificName: Ambloplites rupestris
aliases: Rock Bass, Goggle-Eye
```

Deferred/non-Version-1 candidates are not inserted as inactive placeholders merely to preserve future possibilities.

---

# Activation and Staged Production

Version 1 membership and runtime activation are separate concepts.

An approved Version 1 Fish may exist temporarily with `isActive: false` while its production package is authored or validated. Staged activation of individual Fish or dependency-safe groups is allowed. During the active migration, legacy seed Fish may also remain active until their package deliberately replaces them; legacy activation does not waive target-production readiness.

Before a newly migrated/additive Fish may be considered production-ready, it must have:

1. a complete valid canonical Fish record,
2. a valid `categoryId`,
3. required source/evidence coverage under `FISH_REFERENCE_SOURCES.md`,
4. applicable deterministic integrity checks passing,
5. exactly one valid active Fish Media record with `role: "primary-identification"`,
6. any approved Version 1 identification relationship records needed for its completed package implemented and structurally valid.

Fish-to-Rig guidance is optional and does not block Fish activation. If an active guidance record exists, that record must validate independently.

Supplemental-identification and comparison Media remain optional and do not block activation.

Intermediate production validation must **not** hardcode “30 active Fish.” Final Version 1 completion separately requires the full locked 30-Fish library, the approved 20-pair identification graph, required primary Media coverage, complete source evidence, and all applicable integrity checks.

---

# Fish Identification Relationships

Pairwise field-identification knowledge belongs outside Fish in:

```text
data/fish-identification.js
FISH_IDENTIFICATION_RELATIONSHIPS
```

This registry is implemented and expands as production packages land.

Relationship shape:

```text
id
fishIds[]
createdVersion
lastModifiedVersion
isActive
distinctions[]
```

Each distinction contains:

```text
fishId
text
```

## Deterministic ID convention — FISH-001

For exactly two participant Fish IDs:

1. sort the canonical lowercase ASCII Fish IDs in ascending lexicographic order,
2. store `fishIds[]` in that same order,
3. join them with `-vs-` to create the relationship `id`.

Example concept:

```text
fish-a-vs-fish-b
```

The relationship remains semantically unordered/bidirectional. Runtime consumers use `relationship.fishIds`; they must never parse the relationship ID to determine participants.

Validation rejects:

- duplicate relationship IDs,
- duplicate unordered Fish pairs,
- reversed/noncanonical `fishIds[]` order,
- self-pairs,
- unresolved Fish IDs,
- relationship IDs that do not equal the deterministic pair-derived value,
- distinction references to a third Fish,
- relationships lacking at least one nonempty distinction for each participant.

Multiple distinction entries for one participant are allowed when useful.

---

# Fish-to-Rig Guidance

Fish-to-Rig recommendation Decision Knowledge belongs outside Fish and Rig in:

```text
data/fish-rig-guidance.js
FISH_RIG_GUIDANCE
```

This registry is implemented and expands through deliberate per-Fish evaluation during production authoring.

There is **no separate guidance-record `id`**. `fishId` uniquely identifies the record for its Fish.

Record shape:

```text
fishId
createdVersion
lastModifiedVersion
isActive
rigRecommendations[]
```

Each recommendation contains:

```text
rigId
priority
reason
```

Approved priority values:

```text
Primary
Alternative
```

Rules:

- guidance is optional per Fish,
- every Version 1 Fish is deliberately evaluated for guidance during authoring/validation,
- no empty placeholder record is created when there is no defensible recommendation set,
- at most one active guidance record may exist per Fish,
- an active guidance record requires at least one Primary recommendation,
- no Rig may appear more than once or appear in both priority groups,
- every referenced Rig must resolve to an active canonical Rig,
- every recommendation requires a meaningful nonempty `reason`,
- Fish and Rig do not duplicate this relationship,
- reverse Rig-to-Fish presentation, if needed, is derived from `FISH_RIG_GUIDANCE`.

## Provisional recommendation maxima

Current approved working validator limits are:

```text
Primary:     1–3
Alternative: 0–3
```

These are **provisionally approved**, not immutable architecture. Production validation should enforce them while they remain the working standard. If real Fish authoring demonstrates that the maxima are materially unsuitable, revise the rule only through an explicit documented decision; do not silently exceed it.

---

# Fish Media Readiness

Canonical Fish records do not store `imageIds[]` or `mediaIds[]`.

Media owns attachment through:

```text
ownerType
ownerId
role
```

Fish-related role rules:

```text
ownerType: fish
role: primary-identification | supplemental-identification

ownerType: fish-identification
role: comparison
```

Every production-ready active Fish requires exactly one active `primary-identification` Media record. Supplemental and comparison Media are optional.

Fish Media naming, path, alt-text, attribution, `changesMade`, licensing/provenance, and technical rules are governed by `MEDIA_GUIDE.md` and the FISH-004 contract released by Phase 0.

---

# Fish Source / Evidence

Editorial/scientific provenance is not stored in runtime Fish records.

Canonical owner:

```text
docs/FISH_REFERENCE_SOURCES.md
```

The current provisionally approved evidence model requires each Version 1 Fish to document support for:

- Regional Inclusion,
- Taxonomy / Family,
- Identification,
- Habitat / Waterbody,
- Aliases when `aliases[]` is nonempty.

One authoritative source may support multiple evidence categories. Citation-per-field is not required. The evidence burden/structure may be deliberately adjusted if real authoring demonstrates a better practical model, but such changes must be documented rather than silently drifting.

The deterministic repository validator checks structural evidence completeness/reference resolution for migrated production Fish. Scientific truth, source quality, and freshness remain human-reviewed.

---

# Search

## Current production

Current search supports the deliberate staged migration and consumes whichever approved/legacy identity fields are actually present for each Fish until the 30-Fish migration is complete.

## Approved Fish production search identity

Migrated Version 1 Fish identity search uses:

```text
name
aliases[]
scientificName
categoryId -> FISH_CATEGORY_DATA.name
family
```

Do not add `searchKeywords[]` solely to make Fish search work when the same meaning can be derived from canonical identity fields.

Scope is resolved before ranking under D061. Search performed inside a category/collection must never silently broaden to the whole domain.

Search helper text/examples shown in a scoped collection must likewise be valid for that exact eligible result set. Curated helper terms may be used for beginner usefulness, but every suggested term must be mechanically proven to return at least one result in the collection where it appears. There is no hard helper-example count.

---

# Explicitly Excluded Canonical Fish Fields

Do not add the following merely for UI convenience or speculative future use:

```text
regionTags
activityPeriods
seasonalPatterns
recommendedRigIds
recommendedLureIds
regulationResourceIds
imageIds
mediaIds
similarFishIds
searchKeywords
isOklahomaFish
isKansasFish
isMissouriFish
isArkansasFish
isV1
isReady
releaseStatus
publicationStatus
averageWeight
maximumWeight
averageLength
recordWeight
preferredTemperature
spawnTemperature
diet
forage
conservationStatus
```

Jurisdiction-specific occurrence/regulation facts, recommendation relationships, Media attachment, source provenance, and User Knowledge require their own semantic owners.

---

# Production Validation Contract

The existing validator is:

```text
tools/validate_repository_integrity.js
```

Do not create a competing Fish validator.

As Fish production data lands, deterministic validation must cover, as applicable:

- Fish category IDs/required fields and absence of category `isActive`,
- migrated Fish exact approved fields and controlled vocabularies,
- deliberate temporary legacy-record handling during staged migration,
- duplicate values inside Fish arrays,
- rejection of legacy `category` after the migration is complete,
- rejection of forbidden speculative/duplicate-owner fields,
- deterministic identification relationship IDs/order and valid distinctions,
- optional Fish-to-Rig guidance structure/references/priorities/reasons and current provisional maxima,
- Fish Media ownership/role/ID/path/alt/license readiness requirements,
- source-evidence entry/category/source-reference completeness,
- staged activation without falsely requiring all 30 Fish active on every intermediate commit.

Final Version 1 closeout separately verifies the complete 30-Fish/20-pair/media/source-evidence target.

---

# Current Production Package Status

Closed Fish production packages:

- Trout Production Package 1 — Rainbow Trout + Brown Trout
- Gar Production Package — Longnose Gar + Spotted Gar
- Production Wave 1 — Common Carp + Freshwater Drum + Paddlefish
- Production Wave 2 — Walleye / Sauger + Catfish
- Production Wave 3 — Bass — closed six-Fish package retained at `../../archive/workstreams/fish-guide/FISH-WAVE-3-BASS.md`; production source/media/evidence implementation is committed, validated, post-push verified, and closed

The planned next package is Sunfish & Crappie unless a genuine evidence/media/relationship/product issue requires a smaller boundary.

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
- `../FISH_REFERENCE_SOURCES.md`
- `../../archive/workstreams/fish-guide/FISH-GUIDE-PHASE-0.md`
- `../../archive/workstreams/fish-guide/FISH-GUIDE-PHASE-0-AUDIT-REVISIONS.md`