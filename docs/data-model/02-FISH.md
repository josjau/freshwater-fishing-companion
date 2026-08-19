# Freshwater Fishing Companion

**Document:** 02-FISH.md  
**Document Revision:** 0.2.0  
**Document Status:** Draft — Phase 0 Audit Reconciled / Remaining Audit Items Open  
**Decision Baseline:** D002, D009, D010, D016, D022, D047, D050, Fish Guide Phase 0  
**Last Updated:** 2026-08-18

# Purpose

This document defines the current approved canonical Fish entity direction for Freshwater Fishing Companion.

The Fish model supports:

- Fish identification/reference,
- Fish Guide browse and search,
- Catch Log references,
- connected Fish-to-Rig guidance owned outside Fish,
- connected identification relationships owned outside Fish,
- Media relationships owned by the shared Media registry,
- future Decision Knowledge and User Knowledge without duplicating Fish facts.

The current controlling Phase 0 records are:

- `../workstreams/FISH-GUIDE-PHASE-0.md`
- `../workstreams/FISH-GUIDE-PHASE-0-AUDIT-REVISIONS.md`

No production Fish source change is authorized solely by this document.

# Ownership Principle

Fish owns facts intrinsic to the species.

Fish does **not** own instructions, recommendations, media provenance, regulations, or user-specific information merely because those items are displayed from Fish Detail.

Permanent ownership boundary:

```text
Fish
→ intrinsic species/reference facts

FISH_IDENTIFICATION_RELATIONSHIPS
→ pairwise identification distinctions

FISH_RIG_GUIDANCE
→ Fish-to-Rig Decision Knowledge

MEDIA_DATA
→ Fish/comparison media and provenance

Future Regulation Knowledge
→ jurisdiction/time-sensitive regulation guidance

User Knowledge
→ catches, favorites, observations, preferences, ownership
```

Do not duplicate inverse relationships or display names into Fish for UI convenience when another canonical owner already exists.

# Canonical Fish Schema

Current approved Version 1 field order:

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

Revision note:

- the earlier `category` text field is superseded by `categoryId`,
- `habitatTags[]` and `waterbodyTypes[]` remain Fish-owned reference fields and are **not** replaced by a generic `typicalConditionIds[]` array.

# Field Definitions

## id

**Purpose**

Stable canonical identifier used by relationships, Media ownership, search/routing state, and future User Knowledge references.

**Ownership**

Application / Fish Reference Knowledge.

**Rules**

- required,
- lowercase kebab-case,
- unique,
- descriptive,
- never reused,
- do not change after the identity has entered production references/user data unless an explicit migration is approved.

Approved pre-production correction:

```text
northern-rock-bass
```

supersedes the earlier planning identifier `rock-bass` before production implementation.

## name

**Purpose**

Canonical beginner-facing common display name.

**Ownership**

Application / Fish Reference Knowledge.

Approved example:

```text
Northern Rock Bass
```

## summary

**Purpose**

Concise beginner-oriented species/reference description used on cards, search results, and Fish Detail.

**Ownership**

Application / Fish Reference Knowledge.

**Rules**

- normally one concise sentence,
- practical and neutral,
- may mention a high-value recognition/context fact,
- must not absorb regulations, Rig/Lure recommendations, state-specific occurrence prose, seasonal advice, or fishing instruction.

## createdVersion

**Purpose**

Records the application version in which the canonical Fish entered production data.

**Ownership**

Application.

**Rules**

- set once,
- existing seed Fish retain truthful introduction history,
- newly added Fish receive their actual production introduction version.

## lastModifiedVersion

**Purpose**

Records the latest substantive canonical Fish revision.

**Ownership**

Application.

## isActive

**Purpose**

Controls whether the Fish participates in normal current application use.

**Ownership**

Individual Fish record.

**Rules**

- category membership does not control Fish lifecycle,
- Fish category definitions do not currently have their own `isActive`,
- exact staged-implementation activation/readiness semantics remain an open Phase 0 audit item.

## scientificName

**Purpose**

Accepted scientific identity and strong Fish search signal.

**Ownership**

Application-maintained External Verified Reference Knowledge.

**Rules**

- verify against authoritative/current taxonomic sources during record authoring,
- use a consistent hybrid-name convention once finalized for Hybrid Striped Bass and Saugeye.

## categoryId

**Purpose**

References the Fish-owned beginner-facing browse category.

**Ownership**

Fish record owns membership; the Fish category registry owns category identity/presentation.

**Dependencies**

Fish landing/browse navigation, scoped search, result metadata.

**Rules**

- required,
- must resolve to exactly one approved Fish category definition,
- do not duplicate `categoryName` inside Fish.

## family

**Purpose**

Biological family/reference metadata.

**Ownership**

Application-maintained External Verified Reference Knowledge.

**Rules**

- use the accepted Latin biological family name consistently,
- family does not drive the primary beginner browse hierarchy in Version 1.

## aliases[]

**Purpose**

Legitimate established alternate common names or useful regional terminology.

**Ownership**

Application / Fish Reference Knowledge.

**Rules**

- zero or more values,
- exclude arbitrary search phrases, misspellings, SEO terms, scientific names, and duplicated canonical names,
- aliases are not required to be globally unique,
- legitimate ambiguous regional terminology may resolve to multiple Fish.

Approved examples:

```text
Northern Rock Bass
→ Rock Bass
→ Goggle-Eye

Ozark Bass
→ Goggle-Eye

Hybrid Striped Bass
→ Wiper
→ Whiterock Bass
```

## identificationTraits[]

**Purpose**

Observable, beginner-readable traits describing what the Fish itself looks like.

**Ownership**

Fish Reference Knowledge.

**Rules**

- simple authoritative text, not references to separate trait entities in Version 1,
- order strongest/useful field discriminators first,
- prefer reliable structural characteristics over variable coloration when possible,
- do not pad to an arbitrary count,
- pairwise "how these two differ" wording belongs to `FISH_IDENTIFICATION_RELATIONSHIPS`, not this array.

## habitatTags[]

**Purpose**

Typical physical habitat/water-characteristic associations for the species.

**Ownership**

Fish Reference Knowledge.

**Rules**

- controlled Fish vocabulary,
- describe stable species associations rather than transient current fishing conditions,
- assign the smallest useful set of characteristic associations rather than every place the species could occur.

Approved starting Version 1 vocabulary:

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

Do not create spelling/capitalization variants.

## waterbodyTypes[]

**Purpose**

General waterbody environments where the species is commonly found.

**Ownership**

Fish Reference Knowledge.

**Rules**

- controlled Fish vocabulary,
- include meaningful/common environments rather than every isolated occurrence,
- keep separate from `habitatTags[]` because waterbody type and habitat characteristic answer different questions.

Approved Version 1 vocabulary:

```text
Pond
Lake
Reservoir
River
Creek
```

# Fish Category Registry

Fish browse-category identity is owned once by a Fish-domain registry conceptually named:

```text
FISH_CATEGORY_DATA
```

Approved registry fields:

```text
id
name
summary
```

Canonical array order owns browse-card order. Do not add a separate `displayOrder` field unless a concrete future editing/persistence requirement justifies it.

Do not add category-level `isActive` at this stage.

Category visibility is derived from active Fish membership:

```text
show category
→ at least one active Fish references categoryId
```

Approved Version 1 category IDs:

```text
bass              → Bass
catfish           → Catfish
sunfish-crappie   → Sunfish & Crappie
walleye-sauger    → Walleye & Sauger
trout             → Trout
gar               → Gar
carp              → Carp
drum              → Drum
paddlefish        → Paddlefish
```

`All Fish` is a browse mode and must not be modeled as a category.

Category is intentionally different from biological `family`.

# Fish Identification Relationships

Pairwise field-confusion knowledge is owned outside Fish in future:

```text
data/fish-identification.js
FISH_IDENTIFICATION_RELATIONSHIPS
```

Relationship schema remains:

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

Rules:

- exactly two Fish per relationship,
- one canonical stored relationship supports both UI directions,
- relationship exists only for genuine field-identification confusion,
- Fish `identificationTraits[]` answers what the species looks like,
- relationship `distinctions[]` answers how the supported pair differs,
- stable relationship-ID convention remains an open Phase 0 audit item.

Approved Northern Rock Bass relationship references use:

```text
warmouth ↔ northern-rock-bass
northern-rock-bass ↔ ozark-bass
```

# Fish-to-Rig Guidance

Fish-to-Rig recommendations are not Fish fields.

Future Decision Knowledge owner:

```text
FISH_RIG_GUIDANCE
```

Current approved conceptual schema:

```text
id
fishId
createdVersion
lastModifiedVersion
isActive

rigRecommendations[]
```

Recommendation item:

```text
rigId
priority
reason
```

Approved priority vocabulary:

```text
Primary
Alternative
```

Rules:

- Fish and Rig do not duplicate this relationship,
- inverse Rig-to-Fish presentation is derived,
- `reason` explains why the Rig is useful for the Fish and does not duplicate Rig assembly,
- exact guidance optionality, source filename, and record-ID convention remain open Phase 0 audit items.

# Media Ownership

Fish records do not store `imageIds[]`.

Media owns the association through the shared Media registry.

Species media:

```text
ownerType: "fish"
ownerId: <Fish.id>
```

Pairwise comparison media:

```text
ownerType: "fish-identification"
ownerId: <relationship id>
```

Fish-related roles approved in Phase 0:

```text
primary-identification
supplemental-identification
comparison
```

Every active Version 1 Fish ultimately requires exactly one active primary identification asset under the approved media coverage standard.

Exact Fish media field requiredness, null semantics, ID/file naming, and alt-text conventions remain open Phase 0 audit items.

# Search Architecture

Fish Search consumes canonical Fish/category data but does not own duplicate search facts.

Searchable Fish identity inputs:

```text
Fish.name
Fish.aliases[]
Fish.scientificName
Fish.categoryId → FISH_CATEGORY_DATA.name
Fish.family
```

Do not search by default:

```text
summary
identificationTraits[]
habitatTags[]
waterbodyTypes[]
```

Do not add Fish `searchKeywords[]` solely for ranking/discovery.

## Hierarchical Scope

Search scope is resolved before ranking.

```text
Fish Guide
→ all active Fish

Fish category browse
→ only active Fish in that category
```

A narrower search never silently widens itself because the query has no match.

Search labels/helper text/examples/empty states must accurately reflect the active scope. Do not suggest terms that cannot produce eligible results in that scope.

## Fish Ranking Within Scope

Approved conceptual ranking:

1. exact canonical name,
2. exact alias,
3. exact scientific name,
4. canonical-name prefix,
5. alias prefix,
6. scientific-name prefix,
7. canonical/alias/scientific contains,
8. category-name match,
9. family match,
10. canonical Fish-name A–Z tie-break.

Shared exact aliases may produce multiple equally valid results.

Future Global Search may orchestrate Fish and other domain-specific search providers and consume canonical relationship registries. It must not require duplicated relationship terms inside Fish, Rig, Knot, or other canonical entities.

# Navigation Context

Standard Fish navigation follows the revised shared navigation standard:

```text
Forward
→ new destination top

Parent
→ restore prior view state + prior scroll position

Home
→ Dashboard top + clear contextual return stack
```

A source view's scroll position must never transfer to a newly opened Fish, comparison, Rig, Knot, or other destination.

Fish browse restoration may include selected category, active query, filtered result state, and prior scroll position.

# Explicitly Excluded Fish Fields

Do not add these to canonical Fish Version 1 unless Phase 0 is formally reopened:

```text
regionTags
activityPeriods
seasonalPatterns
recommendedRigIds
recommendedLureIds
regulationResourceIds
imageIds
isOklahomaFish
isKansasFish
isMissouriFish
isArkansasFish
searchKeywords
averageWeight
maximumWeight
averageLength
recordWeight
preferredTemperature
spawnTemperature
diet
forage
conservationStatus
similarFishIds
```

# Version 1 Library

Version 1 remains locked at 30 canonical Fish.

The approved canonical name now uses **Northern Rock Bass** rather than the earlier planning display name Rock Bass.

The full locked library and 20 approved pairwise identification relationships remain controlled by `../workstreams/FISH-GUIDE-PHASE-0.md` plus the audit-revision addendum.

# Unknown Fish / Identification Confidence

The earlier draft proposed an `Unknown Fish` canonical state and generic confidence values. These are **not** part of the approved Version 1 canonical Fish schema.

If a future Catch Log or identification-assistance workflow needs uncertain identification, that state belongs to the appropriate workflow/User Knowledge model rather than creating a fake canonical Fish species.

# Validation Requirements

At minimum, future Fish implementation validation must enforce approved field shape and ownership boundaries.

Exact Fish integrity-validator scope remains open for final Phase 0 approval, including possible validation of:

- unique/resolvable Fish IDs,
- category IDs,
- controlled habitat/waterbody values,
- relationship references,
- Fish media coverage/ownership,
- Fish-to-Rig guidance references,
- aliases and canonical naming constraints.

# Remaining Phase 0 Audit Items

Before production Fish implementation begins, resolve or deliberately park the open items in:

`../workstreams/FISH-GUIDE-PHASE-0-AUDIT-REVISIONS.md`

They currently include:

1. identification relationship ID convention,
2. Fish-to-Rig guidance optionality/source filename/ID convention,
3. staged Fish activation/release-readiness semantics,
4. Fish media requiredness/naming/null/alt-text standards,
5. project-wide Four-State scope reconciliation outside Fish,
6. Fish source-documentation and integrity-validation standard.

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
