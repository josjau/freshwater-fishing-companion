# Freshwater Fishing Companion — Fish Guide Phase 0

**Document Status:** Approved  
**Implementation Status:** Phase 0 In Progress  
**Species-Library Status:** Version 1 LOCKED  
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

**Status:** APPROVED / LOCKED / COMPLETE — FOUR-STATE REVALIDATION PASSED

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

**Status:** APPROVED / LOCKED / COMPLETE — FOUR-STATE REVALIDATION PASSED

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

# Block 0.3F — Temperate Bass Group Audit

**Status:** APPROVED / LOCKED / COMPLETE

All Block 0.3F decisions use the corrected Four-State Ozark scope.

## Version 1 Inclusion

Include in Version 1:

1. White Bass
2. Striped Bass
3. Hybrid Striped Bass

`Wiper` and `Whiterock Bass` are legitimate regional/common-name candidates for `Hybrid Striped Bass.aliases[]`; the exact canonical display-name/alias set will be finalized when the canonical Fish records are authored.

Yellow Bass is **deferred** for Version 1. It has legitimate Four-State Ozark occurrence, including southwest-Missouri occurrence, but current evidence does not establish enough common angling or identification value to justify inclusion in the initial Fish Guide. It does not require mandatory reconsideration unless the Four-State Gap Audit finds materially stronger local evidence.

## Approved Temperate Bass Identification / Confusion Relationships

Create exactly these three Version 1 pairwise relationships under `FISH_IDENTIFICATION_RELATIONSHIPS`:

```text
white-bass ↔ striped-bass
white-bass ↔ hybrid-striped-bass
striped-bass ↔ hybrid-striped-bass
```

A complete three-way comparison set is justified for this group because all three are practical regional angling species with similar overall appearance and genuine beginner field-identification overlap.

Approved identification direction:

- White Bass — emphasize the deeper/arched body, comparatively weaker striping, and a single tongue tooth patch.
- Striped Bass — emphasize the more elongated/slender body, strong mostly continuous horizontal stripes, and two distinct parallel tongue tooth patches.
- Hybrid Striped Bass — emphasize the intermediate/deeper body and characteristically broken or discontinuous horizontal stripes.
- Do not use a universal `Hybrid Striped Bass = two tongue patches` rule. Agency descriptions within the Four-State region indicate variation in hybrid tongue-patch configuration, so tongue patches are supporting evidence rather than the single decisive hybrid identifier.
- Use multiple physical traits when distinguishing the hybrid from either parent rather than relying on one inherited characteristic.

# Block 0.3G — Walleye / Sauger Group Audit

**Status:** APPROVED / LOCKED / COMPLETE

All Block 0.3G decisions use the corrected Four-State Ozark scope.

## Version 1 Inclusion

Include in Version 1:

1. Walleye
2. Saugeye
3. Sauger

Saugeye remains a distinct canonical Fish even though it is a managed Walleye × Sauger hybrid. Sauger independently qualifies through regional angling and identification value and is not included merely because it is a parent species of Saugeye.

## Approved Walleye / Sauger Identification / Confusion Relationships

Create exactly these three Version 1 pairwise relationships under `FISH_IDENTIFICATION_RELATIONSHIPS`:

```text
walleye ↔ sauger
walleye ↔ saugeye
sauger ↔ saugeye
```

A complete three-way comparison set is justified because all three have similar overall appearance, overlap in practical regional fishing contexts, and Saugeye combines parental traits.

Approved group identification direction:

- Walleye — first/spiny dorsal fin lacks distinct individual dark spots; cheeks have few or no scales.
- Sauger — first/spiny dorsal fin has distinct individual dark spots; cheeks are scaled; pronounced dark body saddles are supporting evidence.
- Saugeye — first/spiny dorsal webbing shows spots plus bars or streaks; cheeks are scaled; intermediate gold/brown hybrid markings are supporting evidence.
- Inspect the spiny dorsal fin first, then use cheek scaling as the second structural check.
- Body coloration, blotching, and Walleye tail-tip markings are supporting evidence rather than sole identification criteria.
- Habitat/current may support context but must not be used as the identifying characteristic.

No additional Walleye/Sauger-family canonical Fish is required for this block. Yellow Perch remains outside this identification cluster and may be evaluated independently if the Four-State Gap Audit finds sufficient regional significance.

# Block 0.3H — Trout Group Audit

**Status:** APPROVED / LOCKED / COMPLETE

All Block 0.3H decisions use the corrected Four-State Ozark scope.

## Version 1 Inclusion

Include in Version 1:

1. Rainbow Trout
2. Brown Trout

Brook Trout, Cutthroat Trout, and Tiger Trout are not silently rejected. They remain assigned to the required Four-State Gap Audit before final Version 1 library lock so any practical northwest-Arkansas significance can be explicitly confirmed or dismissed.

## Approved Trout Identification / Confusion Relationship

Create this Version 1 pairwise relationship under `FISH_IDENTIFICATION_RELATIONSHIPS`:

```text
rainbow-trout ↔ brown-trout
```

Approved beginner identification direction:

- Rainbow Trout — emphasize the pink/red or iridescent lateral band, numerous black spots, and black spotting that continues onto the tail.
- Brown Trout — emphasize the golden/brown body, red/orange side spots often mixed with darker spots, and few or no black spots on the tail.
- Use body and spot pattern as the first beginner-facing identification cue, then use tail spotting as confirmation.
- Habitat, stocking location, and water temperature may support context but must not replace physical identification traits.

If Brook Trout, Cutthroat Trout, or Tiger Trout is later promoted during the Four-State Gap Audit, re-audit the trout identification graph rather than automatically creating a complete pairwise matrix.

# Block 0.3I — Common Carp / Freshwater Drum Group Audit

**Status:** APPROVED / LOCKED / COMPLETE

All Block 0.3I decisions use the corrected Four-State Ozark scope.

Common Carp and Freshwater Drum are evaluated independently as practical regional Fish rather than as a biological group.

## Version 1 Inclusion

Include in Version 1:

1. Common Carp
2. Freshwater Drum

Both existing seed records independently satisfy the Version 1 practical-value threshold and are not retained merely because they were present in the seed library.

## Identification / Confusion Relationships

No Version 1 pairwise identification relationship is required for either Common Carp or Freshwater Drum at this stage.

This is intentional. `FISH_IDENTIFICATION_RELATIONSHIPS` is confusion-driven and optional per Fish; canonical Fish do not need manufactured relationship records when their own `identificationTraits[]` provide sufficient field-identification value.

Approved Fish-owned identification direction:

- Common Carp — emphasize the heavy/deep body, long dorsal fin, large dark-edged scales that can create a crosshatched appearance, and barbels/whiskers at the corners of the mouth.
- Freshwater Drum — emphasize the silvery deep body, pronounced hump behind the head, blunt snout, pale lips, and long dorsal fin divided into distinct portions.
- A Freshwater Drum's croaking/drumming sound may be useful supporting information but must not be treated as a required or primary identification trait.

Do not create a `common-carp ↔ freshwater-drum` relationship. They are not a genuine beginner field-confusion pair.

## Four-State Carp / Buffalo Gap-Audit Cluster

Common Carp exposes a legitimate regional identification issue with other carp-like and sucker-family fishes. Do not expand Version 1 automatically during this block.

Add the following cluster to the required Four-State Gap Audit:

- Grass Carp
- Smallmouth Buffalo
- Bigmouth Buffalo
- Quillback
- additional carp/buffalo counterparts only when authoritative Four-State evidence demonstrates practical regional angling or beginner-identification value

If a counterpart is later promoted into Version 1, add only the specific Common Carp comparison relationship or relationships justified by genuine field confusion rather than creating an exhaustive matrix.

# Block 0.3J — Remaining Regional Candidate Audit

**Status:** APPROVED / LOCKED / COMPLETE

## Version 1 Inclusion

Include in Version 1:

1. Paddlefish

Paddlefish independently satisfies the Four-State Ozark threshold through major regional fisheries and practical angling importance.

No Version 1 pairwise identification relationship is required for Paddlefish. Its long paddle-shaped snout, smooth/scaleless body, large mouth, and strongly forked tail provide sufficient Fish-owned identification value.

## Deferred Candidates

Defer from Version 1:

- Alligator Gar
- Yellow Perch

Alligator Gar is a legitimate regional species in the broader four-state area but its practical fishery is not centered strongly enough inside the approved Four-State Ozark footprint to justify initial-library inclusion.

Yellow Perch is a legitimate species but does not demonstrate enough practical Four-State Ozark beginner-angling or identification value to justify Version 1 inclusion.

# Block 0.3K — Four-State Geography Revalidation

**Status:** APPROVED / LOCKED / COMPLETE

The targeted revalidation required by the Block 0.1 geographic correction is complete.

## Catfish Revalidation

**Result:** PASS / NO CHANGE

Retain the Block 0.3B Version 1 set:

- Channel Catfish
- Blue Catfish
- Flathead Catfish
- Black Bullhead
- Yellow Bullhead

Retain the four approved Catfish identification relationships without expansion.

No authoritative Southeast Kansas or Southwest Missouri evidence exposed a missing V1 Catfish species or a required additional comparison relationship.

## Black Bass Revalidation

**Result:** PASS / NO CHANGE

Retain the Block 0.3C Version 1 set:

- Largemouth Bass
- Smallmouth Bass
- Spotted Bass

Retain the complete three-way Black Bass identification graph without expansion.

No authoritative Southeast Kansas or Southwest Missouri evidence exposed a missing V1 Black Bass species or a required additional comparison relationship.

The revalidation requirement attached to Blocks 0.3B and 0.3C is satisfied and closed.

# Block 0.3L — Final Four-State Gap Audit

**Status:** APPROVED / LOCKED / COMPLETE

This final gap audit supersedes earlier pending/unresolved language in Blocks 0.3D, 0.3G, 0.3H, and 0.3I where a candidate was explicitly assigned to the Four-State Gap Audit.

## Promoted to Version 1

Add:

1. Longnose Gar
2. Spotted Gar

These species provide sufficient Four-State Ozark occurrence and beginner-identification value to justify Version 1 inclusion.

Create this Version 1 pairwise identification relationship:

```text
longnose-gar ↔ spotted-gar
```

Approved beginner identification direction:

- Longnose Gar — emphasize the extremely long, narrow snout.
- Spotted Gar — emphasize the shorter/broader snout plus conspicuous round dark spots on the top of the head and paired fins.

## Final Deferred Gap-Audit Candidates

The mandatory revisit is complete for the following candidates. They remain outside Version 1:

- Brown Bullhead
- Shadow Bass
- Brook Trout
- Cutthroat Trout
- Tiger Trout
- Grass Carp
- Smallmouth Buffalo
- Bigmouth Buffalo
- Quillback
- Bighead Carp
- Shortnose Gar

Earlier independently deferred candidates also remain outside Version 1:

- Yellow Bass
- Alligator Gar
- Yellow Perch

No additional carp/buffalo or trout comparison matrix is created because no additional species from those clusters is promoted into Version 1.

# Final Version 1 Species-Library Lock

**Status:** APPROVED / LOCKED

The Fish Guide Version 1 species library contains **30 canonical Fish**:

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
13. Rock Bass
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

The approved Version 1 identification graph contains **20 pairwise relationships**.

Species-library lock does not silently resolve later canonical-content choices already identified in this workstream. In particular:

- the beginner-facing `Rock Bass` versus `Northern Rock Bass` display-name choice remains a canonical record-authoring decision;
- `Hybrid Striped Bass` alias choices such as `Wiper` and `Whiterock Bass` remain to be finalized when canonical records are authored.

No production `data/fish.js`, identification-registry, guidance-registry, media, HTML, CSS, or JavaScript changes are authorized merely by locking the species library.

# Block 0.4A — Fish Media Coverage Standard

**Status:** APPROVED / LOCKED — ADJUSTABLE WHEN VERIFIED SPECIES NEEDS REQUIRE IT

Every Version 1 Fish must have at least one primary identification image.

Primary media rules:

- Prefer a trustworthy real photograph whenever a technically suitable and legally usable photograph is available.
- The primary image should show a representative fish clearly enough to support the approved Fish-owned `identificationTraits[]` and normal beginner recognition.
- Primary identification evidence must remain technically accurate and must not alter, stylize, invent, or obscure diagnostic features.
- AI-generated or approximate photorealistic Fish imagery must not serve as primary identification evidence.

Supplemental diagnostic media is added only when it materially improves identification or comparison value. It is not required uniformly for all 30 Fish.

Supplemental media may include:

- additional verified photographs,
- close-up photographs of diagnostic features,
- accurate drawings or scientific illustrations,
- focused diagrams or comparison graphics showing key distinguishing features.

Examples of features that may justify supplemental media include mouth position, fin markings, tongue patches, cheek scaling, tail markings, opercular/ear-flap details, dorsal-spine patterns, and other approved pairwise distinctions that are difficult to see in a normal side-view photograph.

Media roles:

```text
Primary identification media
→ Required for every Version 1 Fish
→ Prefer real photographs where possible

Supplemental diagnostic media
→ Optional per Fish or comparison
→ Use photographs, drawings, scientific illustrations, or focused diagrams when they clarify key distinguishing features

Decorative Fish media
→ Not required for Version 1
```

This coverage standard is intentionally adaptable. During source acquisition, canonical record authoring, implementation, or runtime review, a Fish may receive a different or expanded media treatment when verified identification needs demonstrate that the default treatment is insufficient. Any material exception must preserve identification accuracy, licensing/provenance requirements, and the established Media registry ownership model.

# Block 0.4B — Fish Media Source, Licensing, Provenance, and Diagnostic-Media Rules

**Status:** APPROVED / LOCKED

Fish media must be both technically verified and rights-verified. Technical authority and reuse permission are separate checks; an authoritative website does not automatically make every hosted image reusable.

## Source Hierarchy

For primary Fish identification media, use this preferred acquisition order:

1. Confirmed public-domain photograph from an authoritative or otherwise trustworthy source.
2. CC0 photograph.
3. CC BY photograph with all required attribution preserved.
4. Photograph with explicit documented permission sufficient for local project bundling and intended use.
5. CC BY-SA photograph only when the project deliberately accepts and can satisfy the applicable ShareAlike obligations.
6. When no suitable photograph can be legally bundled, use a verified scientific illustration or an original project identification illustration built from independently verified anatomical references.

Verify rights on the individual asset, not merely the site, agency, repository, or organization hosting it.

Wikimedia Commons is a discovery/repository source rather than a license category. For any Commons asset, record and comply with the individual file's actual creator, license, attribution, and reuse requirements.

## Normally Accepted Local-Bundling Rights

Preferred production-friendly rights categories are:

```text
Public Domain
CC0
CC BY
Explicit project-compatible permission
```

CC BY-SA is conditional rather than preferred because modified or derivative assets may carry ShareAlike obligations.

Do not normally bundle Fish media under:

```text
CC BY-NC
CC BY-NC-SA
CC BY-ND
CC BY-NC-ND
All Rights Reserved without explicit permission
Unknown or ambiguous licensing
```

A source that is unsuitable for repository bundling may still be used as technical identification/reference evidence where lawful, but it must not be copied into the production repository without suitable rights.

## Local Bundling and External References

Primary Fish identification media should be locally bundled whenever reuse rights permit.

Rules:

- A remotely hotlinked third-party image does not satisfy the required primary-media coverage standard.
- Third-party imagery with unclear or insufficient reuse rights must not be copied into the repository.
- Third-party images must not be hotlinked as normal production imagery merely to avoid licensing or storage work.
- When a trustworthy authoritative visual is useful but local reuse rights are unavailable, the application may link to the authoritative source page or dedicated media page as a supplemental external reference.
- If no reusable primary photograph can be acquired, prefer a verified reusable scientific illustration or validated original project identification illustration rather than weakening the licensing standard.

## Media Provenance

Fish media reuses the existing `data/media.js` Media registry and existing `license` object rather than creating a separate Fish-specific provenance system.

Retain the existing license fields:

```text
status
type
creator
sourceUrl
licenseUrl
attributionRequired
commercialUseAllowed
modificationAllowed
reviewedDate
```

Add these fields to the Media license/provenance model when Fish media implementation begins:

```text
attributionText
changesMade
```

`attributionText` stores the exact approved credit line when attribution is required.

`changesMade` records material processing or adaptation relevant to licensing and provenance, such as cropping, resizing, format conversion, or annotation. Use `None` when no meaningful change was made.

Do not add additional provenance fields unless implementation demonstrates a concrete requirement.

## Media Role

Add a Media-level semantic field:

```text
role
```

Fish-related Version 1 values are:

```text
primary-identification
supplemental-identification
comparison
```

Rules:

- Every active Version 1 Fish has exactly one active `primary-identification` media record.
- A Fish may have zero or more `supplemental-identification` records.
- An identification relationship may have zero or more `comparison` media records.
- Do not infer primary/supporting meaning from file order, filenames, or `productionStatus`.

## Diagnostic-Media Ownership

Species-specific diagnostic media belongs to the Fish:

```text
ownerType: "fish"
ownerId: <canonical Fish ID>
role: "supplemental-identification"
```

Pairwise comparison media belongs to the identification relationship rather than arbitrarily to one Fish:

```text
ownerType: "fish-identification"
ownerId: <FISH_IDENTIFICATION_RELATIONSHIPS.id>
role: "comparison"
```

This preserves single-owner relationship architecture and allows both Fish detail pages to derive the same comparison media from the one canonical relationship record.

## Canonical Text Remains Authoritative

Diagnostic media illustrates canonical identification facts; it does not independently define them.

- `Fish.identificationTraits[]` remains the source for what a Fish looks like.
- `FISH_IDENTIFICATION_RELATIONSHIPS.distinctions[]` remains the source for how a supported pair differs.
- A photo, illustration, annotation, or comparison diagram must not silently introduce a new identification rule that is absent from or conflicts with the canonical text.
- If verified research requires a different distinction, correct the canonical identification data first and then update the associated media.

## Original Diagnostic Drawings and Diagrams

Original project drawings, scientific-style illustrations, and focused diagnostic diagrams are allowed when they improve understanding of features that a normal photograph does not show clearly.

Likely use cases include:

- mouth-hinge position,
- anal-fin shape,
- dorsal-spine count or pattern,
- tongue tooth patches,
- cheek scaling,
- opercular/ear-flap details,
- tail markings,
- other approved diagnostic structures.

Original diagnostic artwork must be built from verified anatomical/reference evidence. Do not trace or closely reproduce copyrighted artwork unless the source license explicitly permits that derivative use.

For difficult anatomy, validate the project graphic against more than one authoritative reference whenever practical.

## Identification-Photo Processing Limits

Permitted normal production processing includes:

- crop,
- resize,
- compression,
- format conversion,
- minor exposure or color correction when needed for faithful reproduction.

Do not use edits that can alter diagnostic evidence, including:

- generative fill on the Fish,
- changing markings,
- changing fin shape,
- changing body proportions,
- adding or removing spots/bars,
- changing mouth position,
- artificially recoloring diagnostic areas.

Arrows, circles, reference lines, or similar annotations are acceptable when they are clearly overlays and the underlying diagnostic Fish pixels remain intact. When substantial annotation is needed, prefer a separate diagnostic diagram rather than heavily modifying the primary photograph.

# Block 0.5 — Fish Landing / Browse / Search Information Architecture

**Status:** APPROVED / LOCKED

## Landing-Page Hierarchy

The Fish Guide landing page follows the shared Navigation Page Standard in this order:

```text
Fish Guide
Intro

Search all Fish

Compare Similar Fish

Browse Fish
- All Fish
- category-derived collection cards
```

Search remains the first functional navigation element.

`Compare Similar Fish` is the single approved Fish-specific special-navigation entry. It opens the catalog of approved pairwise identification relationships and must not be labeled as an automated Fish-identification workflow.

## Primary Browse Navigation

Remove these current landing-page cards:

```text
Browse by Family
Browse by Habitat
Browse Alphabetically
```

`Browse Alphabetically` is replaced by `All Fish`, whose default ordering is canonical Fish name A–Z.

`family` remains canonical reference metadata but does not drive primary beginner navigation.

`habitatTags[]` and `waterbodyTypes[]` remain Fish/reference context and potential later refinement inputs; they do not drive the Version 1 landing-page hierarchy.

Do not create a `Core Fish` collection in Version 1.

## Category-Derived Collections

The Fish landing page uses beginner-facing category/group collection cards derived from the canonical Fish `category` vocabulary.

Exact Version 1 category labels are deliberately deferred to Block 0.7 canonical record-authoring rules.

Do not maintain a separate landing-page taxonomy that can drift from canonical Fish categories.

## Browse-Page Architecture

Use one reusable Fish browse view rather than separate page renderers for All Fish and each category.

Conceptual routes:

```text
FISH
FISH_BROWSE
FISH_DETAIL
```

A dedicated comparison route may be added only if the approved comparison presentation requires it.

The selected collection/category is browse state; it does not require a separate renderer.

Every Fish browse page uses:

1. shared floating `Parent` + `Home` navigation,
2. collection title,
3. concise collection description,
4. collection-scoped search when useful,
5. visual Fish cards,
6. canonical Fish-name A–Z ordering when no search query is active.

No Version 1 Family/Habitat filter drawer or pagination is required for the 30-Fish library. Revisit only if actual library growth or runtime usability demonstrates a need.

Do not duplicate category-navigation cards inside the browse page; collection selection belongs on the Fish Guide landing page.

## Browse-State Preservation

Opening a Fish from a browse view must preserve the immediately preceding browse context so Parent returns the user to the same working state.

Preserve, where technically practical:

- selected collection,
- active scoped-search query,
- filtered result state,
- prior scroll position.

This applies to All Fish and category browse views.

A Parent return from Fish Detail must not silently reset the user to an unfiltered browse page or the top of the collection when the previous browse context can be restored.

## Browse Fish Card Content

Fish browse cards are visual identification/reference gateways.

Each Fish card normally contains:

```text
Primary identification image
Common name
Scientific name
Short summary
View Fish →
```

Category may appear as compact metadata in mixed collections such as All Fish.

Family does not need prominent browse-card placement.

The card uses the Fish's existing `primary-identification` Media record; do not create a separate thumbnail-ownership model.

The normal Fish browse card has one primary action: open Fish Detail. Do not overload it with a second comparison action.

## Fish Search Scope

Version 1 Fish identity search covers:

```text
name
scientificName
aliases[]
category
family
```

Do not include these fields in default identity search:

```text
summary
identificationTraits[]
habitatTags[]
waterbodyTypes[]
```

This preserves relevance-first identity retrieval and avoids noisy results from broad descriptive/context terms.

This search-field set is approved as the Version 1 baseline but may be refined during canonical-data/runtime validation if real retrieval behavior demonstrates a concrete usability need. Such refinement must not silently expand the canonical Fish schema.

## Search Ranking

Use relevance-first ordering rather than equal-weight field matching.

Conceptual priority:

1. exact canonical-name match,
2. canonical name starts with query,
3. exact alias match,
4. alias starts with query,
5. canonical/scientific name contains query,
6. category match,
7. family match,
8. alphabetical tie-break.

Do not add canonical `searchKeywords` merely to implement search ranking.

## Search-Result Presentation

Fish search-result cards normally contain:

```text
Primary identification image
Common name
Scientific name
Category
Short summary
View Fish →
```

Family remains searchable/reference metadata but does not need prominent search-result placement.

Selecting a search result opens Fish Detail.

Search results do not inline-expand identification comparisons, Rig guidance, or other connected knowledge; those belong to the destination Fish page.

## Compare Similar Fish Catalog

`Compare Similar Fish` derives directly from active `FISH_IDENTIFICATION_RELATIONSHIPS` records.

Each canonical pair appears once in the comparison catalog.

Do not store a separate hand-maintained comparison list or duplicate relationship ownership.

## Comparison Access from Fish Detail

When a Fish participates in one or more approved identification relationships, Fish Detail surfaces those comparisons as connected knowledge.

Conceptual behavior:

```text
Fish Detail
→ Similar Fish / Compare
→ relevant canonical pairwise comparison
```

A Fish with multiple approved relationships exposes each relevant comparison derived from the relationship registry.

The same canonical comparison may therefore be reached through two legitimate paths:

```text
Fish Guide
→ Compare Similar Fish
→ choose pair

Fish Detail
→ Similar Fish / Compare
→ relevant pair
```

This mirrors the project's connected-knowledge navigation principle used by related Rigs and Knots without duplicating the underlying relationship.

Opening a comparison from Fish Detail preserves Fish Detail as the immediate Parent context; returning from the comparison restores that Fish Detail state.

# Block 0.6 — Fish Detail Page + Connected Knowledge

**Status:** APPROVED / LOCKED — PRESENTATION ADJUSTABLE DURING IMPLEMENTATION/RUNTIME REVIEW

The Fish Detail architecture follows the shared Detail Page Standard while adapting the page around recognition and field identification rather than Rig-style instruction.

Exact spacing, density, column behavior, section grouping, card proportions, and responsive presentation may be refined when the real interface demonstrates a clearer fit with the rest of the Companion. Such refinements must preserve the approved information hierarchy, canonical ownership, connected-knowledge meaning, accessibility, mobile-first behavior, and navigation semantics. Material changes to architecture, data ownership, or workflow meaning require explicit reopening of this block.

## 0.6A — Detail Information Hierarchy

Default Version 1 order:

```text
Floating Parent / Home

Identity
Primary Identification Media

How to Identify It

Similar Fish / Compare        ← only when relationships exist

Habitat & Water

Rigs to Start With

Future connected knowledge only when its owning domain exists
```

Identification remains the dominant purpose of the Fish page. Decision Knowledge such as Rig guidance is useful connected knowledge but must not displace identification/reference content.

## 0.6B — Identity Header

Fish adapts the shared identity-header hierarchy because Fish has no meaningful equivalent of Rig difficulty or Core designation.

Default presentation:

```text
Category
Canonical common name
Scientific name
Concise beginner-friendly summary
```

Rules:

- `category` may appear as the compact classification label/badge.
- `scientificName` is visually subordinate to the common name but readily visible.
- `family` appears as compact reference metadata rather than a headline.
- `aliases[]` appears only when nonempty, using beginner-readable wording such as `Also known as` where appropriate.
- Do not display implementation metadata such as IDs, version fields, or `isActive`.
- Do not add state/geographic badges because canonical Fish remains geographically neutral.

## 0.6C — Primary Identification Media

Primary identification media appears high on Fish Detail, immediately after or visually integrated with the identity section.

Mobile-first flow normally stacks:

```text
Identity
↓
Primary image
↓
Identification content
```

Desktop may use a balanced identity/image composition when it remains readable and consistent with the field-guide visual system.

When attribution is required, display the approved `attributionText` with or immediately below the relevant asset. Complete provenance remains in the Media registry; the visible interface exposes the attribution/license information that the asset's rights actually require rather than forcing a long license paragraph under every image.

## 0.6D — How to Identify It

`How to Identify It` is the dominant informational section and is sourced from:

```text
Fish.identificationTraits[]
```

Traits are:

- observable,
- concise,
- beginner-readable,
- species-specific,
- ordered with the most useful diagnostic traits first.

Supplemental diagnostic photographs, drawings, illustrations, or diagrams appear near the trait or group of traits they clarify rather than in an unrelated generic gallery.

Do not require one supplemental asset per trait. Add supplemental media only when it materially improves recognition or understanding.

## 0.6E — Similar Fish / Compare

This section appears only when the current Fish participates in one or more active approved `FISH_IDENTIFICATION_RELATIONSHIPS` records.

Each related comparison gateway normally includes:

```text
Related Fish primary identification image
Related Fish name
Compare →
```

The Fish Detail gateway does not reproduce the full pairwise distinction record. Its purpose is to identify a genuinely confusable Fish and provide a direct path to the focused comparison.

A Fish with zero approved identification relationships omits the section entirely; do not display an empty placeholder.

## 0.6F — Fish Comparison Page

Use a dedicated focused comparison presentation. A conceptual route may be:

```text
FISH_COMPARE
```

Default information structure:

```text
Parent / Home

Fish A
vs
Fish B

Fish A primary image
Fish B primary image

Key Differences

Fish A distinctions
Fish B distinctions

Optional relationship-owned comparison media

View Fish A →
View Fish B →
```

Desktop may place the Fish side by side when legible. Mobile should stack cleanly rather than forcing narrow comparison columns.

Canonical sources remain:

```text
Fish images
→ MEDIA_DATA

Pairwise distinction text
→ FISH_IDENTIFICATION_RELATIONSHIPS.distinctions[]

Comparison diagnostic media
→ MEDIA_DATA
  ownerType: "fish-identification"
  role: "comparison"
```

Do not create a second comparison-data model in rendering code.

## 0.6G — Context-Preserving Connected Navigation

Fish comparison and other related-detail navigation use the established connected-knowledge context stack.

Example:

```text
Fish Browse
→ Fish Detail A
→ Fish Comparison
→ Fish Detail B
```

Parent returns through the immediately preceding context:

```text
Fish Detail B
← Fish Comparison
← Fish Detail A
← original Fish Browse/Search state
```

Nested connected knowledge may continue when useful, for example:

```text
Fish Detail
→ Rig Detail
→ Knot Detail
```

Parent then restores:

```text
Knot Detail
← Rig Detail
← Fish Detail
← original Fish browse/search context
```

Home intentionally clears the connected-detail return stack.

## 0.6H — Habitat & Water

Present `habitatTags[]` and `waterbodyTypes[]` as compact reference context rather than generated narrative prose.

Default concept:

```text
Habitat & Water

Common Habitat
Rock · Current · Open Water

Common Waters
Lake · River · Reservoir
```

Do not make these tags/chips actionable in Version 1 unless a later approved navigation/filter design explicitly introduces that capability.

This prevents the detail page from silently reintroducing Habitat browsing that Block 0.5 intentionally removed from primary navigation.

## 0.6I — Rigs to Start With

Fish Detail surfaces curated Fish-to-Rig Decision Knowledge from:

```text
FISH_RIG_GUIDANCE
```

Default presentation separates approved priorities:

```text
Rigs to Start With

PRIMARY
Rig name
Reason
View Rig →

ALTERNATIVES
Rig name
Reason
View Rig →
```

Each gateway contains the canonical Rig name, its `Primary` or `Alternative` guidance priority, the approved relationship `reason`, and a direct `View Rig →` action.

Display the complete approved Version 1 set by default because the guidance model is intentionally small—normally 1–3 Primary and optionally 1–3 Alternative recommendations. Do not add progressive disclosure unless actual runtime density demonstrates a need.

Selecting a Rig opens normal Rig Detail with Fish Detail preserved as Parent. Do not duplicate Rig assembly/instruction content inside Fish Detail.

## 0.6J — Broken or Unavailable Rig References

A Fish guidance record referencing a missing/nonexistent Rig is a validation defect rather than acceptable silently degraded canonical data.

Normal rendering must not create broken navigation controls. Validation/debug tooling should explicitly report invalid guidance references so the underlying canonical relationship can be corrected.

Do not normalize bad relationship data by silently ignoring it as the permanent behavior.

## 0.6K — Regulations

Version 1 Fish Detail does not contain hardcoded regulation guidance.

Regulations are jurisdiction-specific, time-sensitive knowledge and are not Fish-owned. Until an approved Regulation Knowledge layer exists:

```text
Fish Detail
→ no hardcoded regulation summaries
→ no state-specific possession/size-limit fields
→ no stale state-by-state regulation blocks
```

A future Regulation layer may be surfaced as connected knowledge without altering canonical Fish ownership.

## 0.6L — Future Domains

Do not reserve empty or disabled Fish Detail sections for future domains that do not yet exist.

Examples include:

```text
Best Lures
Best Time to Fish
Seasonal Patterns
Local Regulations
My Catches
I Own This
Favorite
```

Those features belong to their later Decision Knowledge or User Knowledge milestones. Add them as contextual gateways only when their owning domains are approved and implemented. Avoid repeating `Coming Soon` placeholders on every Fish page.

# Exact Stopping Point — Resume Here

**Fish Guide Phase 0 remains OPEN.**

Completed and locked Phase 0 work:

- Block 0.1 — Four-State Ozark regional scope boundary
- Block 0.2A — Fish entity and relationship ownership
- Block 0.2B — canonical Version 1 Fish schema
- Block 0.2C-1 — Fish identification/confusion relationship architecture
- Block 0.2C-2 — Fish-to-Rig guidance architecture
- Blocks 0.3A–0.3J — species-library audits
- Block 0.3K — Four-State Catfish/Black Bass geography revalidation
- Block 0.3L — final Four-State gap audit
- Final Version 1 species library — **30 Fish / LOCKED**
- Version 1 identification graph — **20 pairwise relationships / LOCKED**
- Block 0.4A — Fish Media Coverage Standard
- Block 0.4B — Fish Media Source, Licensing, Provenance, and Diagnostic-Media Rules
- Block 0.5 — Fish Landing / Browse / Search Information Architecture
- Block 0.6 — Fish Detail Page + Connected Knowledge

## Next Discussion

**Block 0.7 — Canonical Fish Record-Authoring Rules**

Do not begin production Fish source edits yet.

At the next discussion:

1. Finalize the Version 1 `category` vocabulary that drives Fish landing/browse collections.
2. Resolve `Rock Bass` versus `Northern Rock Bass` canonical display naming and alias handling.
3. Finalize `Hybrid Striped Bass` aliases, including whether `Wiper` and `Whiterock Bass` belong in `aliases[]`.
4. Define canonical `family` formatting/naming rules.
5. Define the exact `aliases[]` inclusion standard.
6. Normalize the controlled `habitatTags[]` vocabulary across all 30 Fish.
7. Confirm `waterbodyTypes[]` usage against the already approved controlled vocabulary.
8. Define authoring limits/standards for `summary` and `identificationTraits[]` so all 30 records are consistent before production data is written.
