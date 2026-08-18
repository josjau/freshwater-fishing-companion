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

**Status:** APPROVED / CORRECTED / LOCKED

Version 1 content prioritization covers the union of four primary regions forming the project's Four-State Ozark focus:

- Northeast Oklahoma
- Southeast Kansas
- Southwest Missouri
- Northwest Arkansas

This four-state scope supersedes the earlier three-region wording that incorrectly identified Southwest Kansas and omitted Southwest Missouri.

Approved inclusion rule:

> Version 1 Fish Guide includes freshwater fish that a new angler is reasonably likely to catch, intentionally target, or commonly confuse with another supported species in northeast Oklahoma, southeast Kansas, southwest Missouri, or northwest Arkansas.

A species may qualify through any one of the four regions. It does not need to be common in all four.

The four-state scope reflects shared Ozark-region fishing environments and adjoining watershed systems, but species inclusion must still be based on verified regional occurrence and practical angling value. Do not assume every river or fish population is hydrologically connected across the entire four-state area.

Inclusion is based on practical field value rather than exhaustive biological coverage.

A Fish belongs in Version 1 when one or more of the following apply:

1. Common angling relevance.
2. Beginner identification value.
3. Confusion/identification value relative to another supported Fish.
4. Regional importance.
5. Connected-knowledge value for Rig, recommendation, habitat, or future Catch Log workflows.

The canonical Fish entity remains geographically neutral. Do not add state-specific Boolean fields such as `isOklahomaFish`, `isKansasFish`, `isMissouriFish`, or `isArkansasFish`.

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

## Four-State Scope Correction Checkpoint

The Block 0.1 correction from Southwest Kansas to Southeast Kansas and the addition of Southwest Missouri occurred after Blocks 0.3B and 0.3C were approved.

Therefore:

- Blocks 0.3B and 0.3C remain approved and are not automatically reopened.
- Their inclusion and identification outcomes must receive a targeted four-state geography revalidation before the final Version 1 species library is locked.
- Revalidation should change an approved decision only if authoritative Southeast Kansas or Southwest Missouri evidence exposes a genuine omission, conflict, or identification requirement.
- Block 0.3D and all subsequent species audits use the corrected four-state scope immediately.
- Before final Version 1 library lock, perform a four-state gap audit to catch species whose importance becomes apparent only after adding Southeast Kansas or Southwest Missouri.

# Block 0.3B — Catfish Group Audit

**Status:** APPROVED / LOCKED / COMPLETE — FOUR-STATE GEOGRAPHY REVALIDATION REQUIRED BEFORE FINAL LIBRARY LOCK

## Version 1 Inclusion

Include in Version 1:

1. Channel Catfish
2. Blue Catfish
3. Flathead Catfish
4. Black Bullhead
5. Yellow Bullhead

Brown Bullhead is **deferred, not rejected**.

Brown Bullhead is a Parking Lot item that must be deliberately revisited before the final Version 1 Fish library is closed. Its current exclusion is not permanent.

Do not create a generic `bullhead` canonical Fish record. Black Bullhead and Yellow Bullhead remain separate species records.

## Approved Catfish Identification / Confusion Relationships

Create exactly these four Version 1 pairwise relationships under `FISH_IDENTIFICATION_RELATIONSHIPS`:

```text
channel-catfish ↔ blue-catfish
black-bullhead ↔ yellow-bullhead
flathead-catfish ↔ black-bullhead
flathead-catfish ↔ yellow-bullhead
```

Do not create an exhaustive catfish comparison matrix.

The approved relationships are limited to pairs with genuine beginner field-identification value.

Primary identification direction:

- Channel Catfish vs Blue Catfish — emphasize the curved versus straighter anal-fin edge as the primary beginner discriminator, with other verified traits added only when useful.
- Black Bullhead vs Yellow Bullhead — emphasize lower-jaw barbel color rather than relying on variable overall body color.
- Flathead Catfish vs Black Bullhead — emphasize the Flathead's broad flattened head and projecting lower jaw versus the bullhead body/jaw profile.
- Flathead Catfish vs Yellow Bullhead — use the same Flathead jaw/head distinction plus the Yellow Bullhead's light lower-jaw barbels where useful.

No Version 1 pairwise relationship is currently required for:

```text
channel-catfish ↔ flathead-catfish
blue-catfish ↔ flathead-catfish
channel-catfish ↔ black-bullhead
channel-catfish ↔ yellow-bullhead
blue-catfish ↔ black-bullhead
blue-catfish ↔ yellow-bullhead
```

If Brown Bullhead is later promoted into Version 1, the bullhead comparison set must be re-audited before implementation.

# Block 0.3C — Black Bass Group Audit

**Status:** APPROVED / LOCKED / COMPLETE — FOUR-STATE GEOGRAPHY REVALIDATION REQUIRED BEFORE FINAL LIBRARY LOCK

## Version 1 Inclusion

Include in Version 1:

1. Largemouth Bass
2. Smallmouth Bass
3. Spotted Bass

No Black Bass candidate is classified Evaluate or Defer in Version 1.

Do not create separate Version 1 canonical Fish records for Florida-strain Largemouth Bass, other black-bass strains, or hybrids unless a later demonstrated identification or regulatory requirement explicitly reopens this decision.

## Approved Black Bass Identification / Confusion Relationships

Create exactly these three Version 1 pairwise relationships under `FISH_IDENTIFICATION_RELATIONSHIPS`:

```text
largemouth-bass ↔ spotted-bass
largemouth-bass ↔ smallmouth-bass
smallmouth-bass ↔ spotted-bass
```

All three relationships are justified because the species overlap regionally and are genuinely confusable to beginner anglers.

## Approved Primary Identification Standard

For the Black Bass group, use mouth-hinge position relative to the rear edge of the eye as the primary beginner-facing structural discriminator:

```text
Largemouth Bass → mouth hinge extends behind the rear edge of the eye
Spotted Bass    → mouth hinge aligns approximately with the rear edge of the eye
Smallmouth Bass → mouth hinge ends in front of the rear edge of the eye
```

Supporting rules:

- Body color is supporting information, not the primary identification criterion, because coloration can vary with water conditions and individual fish.
- Tongue tooth patch may be used as secondary confirmation where useful, but it is not sufficient by itself to separate Smallmouth Bass from Spotted Bass.
- Habitat may support identification context but must not replace physical identification traits.
- Prefer authoritative structural traits over variable coloration when a reliable structural discriminator exists.

# Block 0.3D — Sunfish Group Audit

**Status:** APPROVED / LOCKED / COMPLETE

All Block 0.3D decisions use the corrected Four-State Ozark scope:

- Northeast Oklahoma
- Southeast Kansas
- Southwest Missouri
- Northwest Arkansas

## Version 1 Inclusion

Include in Version 1:

1. Bluegill
2. Redear Sunfish
3. Green Sunfish
4. Longear Sunfish
5. Rock Bass
6. Warmouth
7. Ozark Bass

Canonical identity rule:

- Rock Bass and Ozark Bass are separate canonical Fish species.
- `Ozark Bass` must not be stored as an alias of `Rock Bass`.

Shadow Bass is not silently rejected. It remains unresolved and is assigned to the required Four-State Gap Audit before final Version 1 library lock.

## Approved Sunfish Identification / Confusion Relationships

Create exactly these four Version 1 pairwise relationships under `FISH_IDENTIFICATION_RELATIONSHIPS`:

```text
bluegill ↔ redear-sunfish
bluegill ↔ green-sunfish
warmouth ↔ rock-bass
rock-bass ↔ ozark-bass
```

Approved identification direction:

- Bluegill vs Redear Sunfish — use the Bluegill's black ear flap and rear soft-dorsal blotch versus the Redear's red/orange-edged ear flap and supporting fin/body traits.
- Bluegill vs Green Sunfish — emphasize the Bluegill's deeper body and smaller mouth versus the Green Sunfish's noticeably larger mouth and blue-green facial markings.
- Warmouth vs Rock Bass — use structural traits, including the Warmouth's three anal-fin spines versus the Rock Bass's higher anal-fin spine count, rather than relying primarily on coloration.
- Rock Bass vs Ozark Bass — retain a dedicated pairwise comparison because they are close relatives and common-name/regulatory grouping can obscure the species distinction; exact final distinction text must use verified authoritative species-level traits.

Do not create an exhaustive Sunfish comparison matrix.

No additional Version 1 pairwise relationship is initially required for:

```text
longear-sunfish ↔ bluegill
longear-sunfish ↔ green-sunfish
longear-sunfish ↔ redear-sunfish
green-sunfish ↔ warmouth
green-sunfish ↔ rock-bass
warmouth ↔ ozark-bass
```

These species should first rely on their Fish-owned `identificationTraits[]` plus the approved comparison relationships. Add another relationship only if later detailed content work or usability testing demonstrates genuine beginner field confusion not adequately handled by the existing graph.

## Rock Bass Canonical-Name Decision

The Version 1 species inclusion is locked, but the beginner-facing canonical display name remains a later data-content decision:

```text
Rock Bass
```

versus:

```text
Northern Rock Bass
```

Do not silently rename the established project species during implementation. Resolve the display-name choice when canonical Fish records are authored, preserving the alternate legitimate common name in `aliases[]` as appropriate.

# Block 0.3E — Crappie Group Audit

**Status:** APPROVED / LOCKED / COMPLETE

All Block 0.3E decisions use the corrected Four-State Ozark scope.

## Version 1 Inclusion

Include in Version 1:

1. Black Crappie
2. White Crappie

Do not create a separate Version 1 canonical Fish record for Black Crappie × White Crappie hybrids. Hybrid crappie may be reconsidered later only if the Four-State Gap Audit or subsequent usability work demonstrates a practical identification requirement.

## Approved Crappie Identification / Confusion Relationship

Create this Version 1 pairwise relationship under `FISH_IDENTIFICATION_RELATIONSHIPS`:

```text
black-crappie ↔ white-crappie
```

Approved beginner identification direction:

- Black Crappie — irregular/scattered dark spotting without an organized vertical-bar pattern.
- White Crappie — dark markings organized into distinct vertical bars or bands.
- When markings are unclear, use dorsal-spine count as the structural confirmation: Black Crappie generally have 7–8 dorsal spines; White Crappie generally have 5–6.
- Use the visible marking pattern as the first beginner-facing cue and spine count as confirmation rather than requiring spine counting as the first identification step.
- Water clarity and habitat preference may support species context but must not be used as the identifying characteristic because the two species can occupy the same fishery.

# Exact Stopping Point — Resume Here

**Fish Guide Phase 0 remains OPEN.**

Approved blocks:

- Block 0.1 — Four-State Ozark regional scope boundary (corrected)
- Block 0.2A — Fish entity and relationship ownership
- Block 0.2B — canonical Version 1 Fish schema
- Block 0.2C-1 — Fish identification/confusion relationship architecture
- Block 0.2C-2 — Fish-to-Rig guidance architecture
- Block 0.3A — species-library audit framework
- Block 0.3B — Catfish group audit, pending final four-state geography revalidation
- Block 0.3C — Black Bass group audit, pending final four-state geography revalidation
- Block 0.3D — Sunfish group audit
- Block 0.3E — Crappie group audit

## Next Block

**Block 0.3F — Temperate Bass Group Audit**

Begin with:

- White Bass
- Striped Bass
- Hybrid Striped Bass / Wiper

The goal is to confirm Version 1 inclusion and determine the minimum genuine pairwise identification/confusion relationships required among the supported temperate-bass species under the Four-State Ozark scope.

Do not begin production Fish source edits before Phase 0 design lock is complete.
