# Freshwater Fishing Companion — Fish Guide Phase 0

**Document Status:** Approved  
**Implementation Status:** Phase 0 In Progress  
**Milestone:** Fish Guide  
**Recorded:** 2026-08-18  
**Runtime Environment:** Windows Desktop + Microsoft Edge + GitHub Desktop

# Purpose

This workstream records the approved Phase 0 architecture, canonical-data, relationship-ownership, and Version 1 species-scope decisions for the Fish Guide milestone before any production source changes begin.

GitHub `main` remains authoritative for all existing project files.

# Phase 0 Scope

Phase 0 is a design-lock exercise. It must establish the Version 1 Fish library, canonical Fish schema, identification-safe media direction, relationship ownership, browse/detail information architecture, and connected-knowledge boundaries before production implementation begins.

No production Fish source changes are authorized by this workstream alone.

# Block 0.1 — Version 1 Regional Scope Boundary

**Status:** APPROVED

Version 1 content prioritization covers the union of three primary regions:

- Northeast Oklahoma
- Southwest Kansas
- Northwest Arkansas

Approved inclusion rule:

> Version 1 Fish Guide includes freshwater fish that a new angler is reasonably likely to catch, intentionally target, or commonly confuse with another supported species in northeast Oklahoma, southwest Kansas, or northwest Arkansas.

A species may qualify through any one of the three regions. It does not need to be common in all three.

Inclusion is based on practical field value rather than exhaustive biological coverage.

A Fish belongs in Version 1 when one or more of the following apply:

1. Common angling relevance.
2. Beginner identification value.
3. Confusion/identification value relative to another supported Fish.
4. Regional importance.
5. Connected-knowledge value for Rig, recommendation, habitat, or future Catch Log workflows.

The canonical Fish entity remains geographically neutral. Do not add state-specific Boolean fields such as `isOklahomaFish`, `isKansasFish`, or `isArkansasFish`.

The existing 12 Fish records are seed data subject to audit and are not automatically grandfathered into the final Version 1 library.

# Block 0.2A — Fish Entity and Relationship Ownership

**Status:** APPROVED

Permanent ownership principle:

> Fish owns facts about the species. Other domains own instructions, recommendations, media, regulatory resources, and user-specific information.

Approved ownership decisions:

- Fish owns intrinsic species/reference facts.
- `identificationTraits[]` remains simple Fish-owned observable text in Version 1.
- Similar/confusable Fish relationships use a separate single-owner identification relationship registry.
- Fish-to-Rig guidance lives outside canonical Fish as Decision Knowledge.
- Fish-to-Lure guidance is deferred to the later What Should I Throw milestone.
- Fish media is owned by the Media registry through `ownerType: "fish"` and `ownerId`.
- Regulation resources remain outside Fish because regulation guidance is jurisdictional and time-sensitive.
- Regional scope does not become canonical Fish fields.

Fields explicitly rejected from canonical Fish ownership include:

- `recommendedRigIds[]`
- `recommendedLureIds[]`
- `regulationResourceIds[]`
- `imageIds[]`
- state-specific region Boolean fields

# Block 0.2B — Canonical Version 1 Fish Schema

**Status:** APPROVED / LOCKED

Canonical field order:

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
aliases[]

identificationTraits[]
habitatTags[]
waterbodyTypes[]
```

Field rules:

- `id` — stable canonical identifier.
- `name` — canonical common display name.
- `summary` — short beginner-friendly species description.
- `createdVersion` — version when the entity entered canonical data.
- `lastModifiedVersion` — latest substantive canonical-data revision.
- `isActive` — controls normal current UI/search participation.
- `scientificName` — accepted scientific name and search identity.
- `category` — beginner-oriented grouping used by browse/navigation/search.
- `family` — biological family used for reference and family browsing.
- `aliases[]` — legitimate established alternate common names or regional terminology; not arbitrary search phrases.
- `identificationTraits[]` — observable beginner-readable field-identification traits.
- `habitatTags[]` — general physical habitat/water-characteristic associations.
- `waterbodyTypes[]` — general waterbody environments.

Approved Version 1 `waterbodyTypes[]` vocabulary:

```text
Pond
Lake
Reservoir
River
Creek
```

The existing `habitatTags[]` vocabulary is the starting controlled set and will be normalized during the species audit.

Explicitly excluded from canonical Fish Version 1 unless Phase 0 is formally reopened:

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
```

# Block 0.2C-1 — Fish Identification / Confusion Relationships

**Status:** APPROVED / LOCKED

Approved future source ownership:

```text
data/fish-identification.js
FISH_IDENTIFICATION_RELATIONSHIPS
```

This registry is Reference Knowledge.

Version 1 relationship schema:

```text
id
fishIds[]
createdVersion
lastModifiedVersion
isActive

distinctions[]
```

Each `distinctions[]` item contains:

```text
fishId
text
```

Version 1 constraints:

- Exactly two Fish per comparison relationship.
- Relationship IDs are stable canonical IDs.
- Each distinction explicitly identifies the Fish it describes.
- Relationships exist only for genuine field-identification confusion, not merely because Fish share a family, category, habitat, or taxonomy.
- Similar-Fish navigation is derived bidirectionally from one stored relationship.
- `identificationTraits[]` answers "What does this Fish look like?"
- `FISH_IDENTIFICATION_RELATIONSHIPS` answers "How do I tell these two Fish apart?"

# Block 0.2C-2 — Fish-to-Rig Guidance

**Status:** APPROVED / LOCKED

Approved future source ownership:

```text
data/fish-guidance.js
FISH_RIG_GUIDANCE
```

Fish-to-Rig guidance is Decision Knowledge.

Approved guidance-record schema:

```text
id
fishId
createdVersion
lastModifiedVersion
isActive

rigRecommendations[]
```

Each `rigRecommendations[]` item contains:

```text
rigId
priority
reason
```

Approved Version 1 priority vocabulary:

```text
Primary
Alternative
```

Guidance rules:

- Fish and Rig canonical records do not duplicate the relationship.
- Each Fish receives a small curated set rather than exhaustive compatibility.
- Normally use 1–3 Primary choices and optionally 1–3 Alternatives.
- `reason` explains why the Rig makes sense for the Fish; it does not repeat Rig assembly instructions.
- Full lure/color/retrieve/weather/season/clarity/cover/depth optimization remains deferred to What Should I Throw.
- Inverse Rig-to-Fish presentation may later be derived from `FISH_RIG_GUIDANCE`; no duplicate Rig `fishIds[]` field is required.

# Block 0.3A — Version 1 Species-Library Audit Framework

**Status:** APPROVED / LOCKED

Species count is an output of the audit, not a target.

Every candidate Fish receives one of three Phase 0 classifications:

- **Include V1** — clearly satisfies the practical regional-angling or identification standard.
- **Evaluate** — regionally relevant but needs deliberate beginner-value, identification-value, or scope discussion.
- **Defer** — legitimate regional Fish but too specialized, uncommon, or low-value for the initial Companion.

## Current 12 Seed Records

Strong retain candidates entering detailed audit:

1. Largemouth Bass
2. Smallmouth Bass
3. Spotted Bass
4. Bluegill
5. Redear Sunfish
6. Black Crappie
7. White Crappie
8. Channel Catfish
9. Walleye
10. Rainbow Trout

Evaluate rather than automatically retain/remove:

11. Common Carp
12. Freshwater Drum

## High-Priority Missing Candidates

The seed library is missing several species with strong Version 1 claims that require detailed audit:

- Blue Catfish
- Flathead Catfish
- White Bass
- Striped Bass
- Hybrid Striped Bass / Wiper
- Green Sunfish
- Brown Trout
- Saugeye

## Secondary Candidates for Deliberate Discussion

Examples include:

- Sauger
- Paddlefish
- Yellow Perch
- Rock Bass
- Warmouth
- Bullheads
- Alligator Gar
- other locally occurring nongame species

Official state species lists do not automatically become the Companion's Version 1 library.

# Exact Stopping Point — Resume Here

**Fish Guide Phase 0 remains OPEN.**

Approved blocks:

- Block 0.1 — regional scope boundary
- Block 0.2A — Fish entity and relationship ownership
- Block 0.2B — canonical Version 1 Fish schema
- Block 0.2C-1 — Fish identification/confusion relationship architecture
- Block 0.2C-2 — Fish-to-Rig guidance architecture
- Block 0.3A — species-library audit framework

## Next Block

**Block 0.3B — Catfish Group Audit**

Begin with:

- Channel Catfish
- Blue Catfish
- Flathead Catfish
- Bullhead scope

The goal is to determine Version 1 inclusion and identify the pairwise confusion relationships needed under `FISH_IDENTIFICATION_RELATIONSHIPS`.

Do not begin production Fish source edits before Phase 0 design lock is complete.
