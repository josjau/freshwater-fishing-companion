# Freshwater Fishing Companion — Fish Reference Sources

**Document:** FISH_REFERENCE_SOURCES.md  
**Document Revision:** 1.0.3  
**Document Status:** Approved — Production Authoring Standard  
**Implementation Status:** Standard active; per-Fish evidence population proceeds with Fish production authoring  
**Decision Baseline:** D056–D061, FISH-006, FISH-007  
**Last Updated:** 2026-08-22

# Purpose

This document is the canonical Fish authoring/provenance ledger for factual Fish content used by Freshwater Fishing Companion.

It records **why the project trusts the Fish facts it publishes** without placing editorial source URLs or provenance fields into runtime `FISH_DATA` records.

This document is not a duplicate runtime external-link registry. It supports authoring, review, auditability, taxonomy conflict handling, and deterministic evidence-completeness checks.

Fish Guide Phase 0 is closed. Per-Fish evidence entries are populated as the approved 30-Fish production library is authored. The absence of target-library evidence entries before the corresponding production data is authored does not mean the current pre-migration Fish source has already satisfied the target production contract.

# Governing Principles

1. Runtime Fish records contain canonical application facts, not citation plumbing.
2. Source evidence is organized by **factual category**, not by forcing one citation beside every field/value.
3. One authoritative source may support multiple categories or multiple related facts.
4. Critical Fish identity, field-identification, and regional-inclusion claims must not rely solely on ordinary secondary fishing websites.
5. Conflicting authoritative sources are documented and reviewed explicitly; they are never silently resolved.
6. Deterministic validation checks evidence structure/reference resolution. Human review determines scientific adequacy, source authority, and freshness.
7. The evidence model is provisionally approved and deliberately adjustable if real production authoring demonstrates a better practical burden/structure. Any adjustment requires an explicit documented decision; no silent drift.

# Required Evidence Categories

Each Version 1 Fish evidence entry must cover the following categories.

## Regional Inclusion

Evidence that the Fish legitimately belongs within at least one approved Four-State target region:

- Northeast Oklahoma
- Southeast Kansas
- Southwest Missouri
- Northwest Arkansas

A Fish does **not** need separate proof for all four states.

Acceptable evidence may include:

- authoritative distribution/occurrence information that clearly covers the target region,
- statewide occurrence language when it genuinely establishes the target region,
- named target-region waterbody/locality records,
- stocking/collection/fisheries evidence tied to the target region.

A species merely appearing on a state regulation/list page is not automatically sufficient regional-occurrence evidence when that page does not establish presence in the target region.

## Taxonomy / Family

Evidence supporting:

- canonical scientific identity,
- biological family,
- any documented taxonomic conflict or former scientific nomenclature relevant to the production record.

For North American Fish common/scientific naming, the Companion follows the **current American Fisheries Society Names of Fishes standard** unless a documented project-specific reason requires an exception.

## Identification

Evidence supporting the Fish-owned `identificationTraits[]` values used for beginner field recognition.

A source may support multiple traits. A citation beside every individual trait is not required when the relationship between source and evidence category is clear.

Pairwise comparison relationships require evidence supporting the distinctions used for **both** Fish in the relationship.

## Habitat / Waterbody

Evidence supporting the general associations represented by:

- `habitatTags[]`
- `waterbodyTypes[]`

Evidence should support the set at a useful authoring level; repetitive per-tag citation is not required when one source clearly supports multiple values.

## Aliases

Required only when canonical `aliases[]` is nonempty.

Aliases must be legitimate established alternate common names or regional terminology. Do not use arbitrary search phrases. Scientific synonyms/former nomenclature are documented in provenance/taxonomy notes rather than common-name `aliases[]`.

Legitimate shared aliases are allowed when evidence supports them.

# Fish Category Evidence Boundary

`FISH_CATEGORY_DATA` is project-owned beginner navigation taxonomy.

External evidence is **not** required merely to assign a Fish to the project category registry. Biological family and scientific identity remain evidence-backed separately.

# Preferred Source Hierarchy

Use the strongest practical source available for the fact being authored.

Preferred order:

1. **Current recognized taxonomy/fisheries authorities and official state/federal wildlife/fisheries agencies**
2. **University, museum, peer-reviewed, and extension sources**
3. **Other technically credible secondary sources as supplemental evidence**

Ordinary fishing websites may provide useful supplemental context, but they should not be the sole authority for:

- canonical taxonomy,
- critical field-identification traits,
- Four-State regional inclusion.

Authority is claim-specific. A state agency may be strongest for local occurrence while AFS is the canonical naming authority; no single organization must own every evidence category.

# Taxonomy Authority and Conflict Handling

## North American naming rule

Canonical North American Fish common/scientific naming follows the current American Fisheries Society **Names of Fishes** standard unless a documented project-specific reason requires an exception.

Use current state/federal sources as corroboration where practical.

When recognized authorities disagree:

1. record the conflict,
2. identify the authority selected for the canonical application value,
3. preserve material former/synonymous nomenclature in provenance notes,
4. do not silently push scientific synonyms into common-name `aliases[]`,
5. reopen the canonical value only when new evidence or a deliberate project exception justifies it.

## Largemouth Bass approved taxonomy decision

Canonical production identity:

```text
Common name: Largemouth Bass
Scientific name: Micropterus nigricans
```

Former/synonymous nomenclature retained in provenance:

```text
Micropterus salmoides
```

This does **not** add Florida Bass as a separate Version 1 Fish and does not reopen the locked 30-Fish library.

Initial supporting authority catalog entries are listed below.

# Source Catalog Structure

Each reusable source receives a stable source ID.

Recommended entry shape:

```text
SOURCE-ID
Authority / publisher:
Title:
URL:
Source type:
Reviewed date:
Notes:
```

Rules:

- source IDs are stable within this document,
- do not create duplicate catalog entries for the same source merely because multiple Fish use it,
- reviewed date records the project's human source review date, not necessarily the source publication date,
- record enough title/authority context that a future reviewer can identify the source even if a URL later changes,
- source URLs used only for authoring/provenance are not automatically added to the quarterly runtime external-reference checker.

# Per-Fish Evidence Structure

Recommended entry shape:

```text
## <Canonical Fish Name> (`<fish-id>`)

Regional Inclusion
- <SOURCE-ID> — short scope note when useful

Taxonomy / Family
- <SOURCE-ID>

Identification
- <SOURCE-ID>

Habitat / Waterbody
- <SOURCE-ID>

Aliases
- <SOURCE-ID>  # only when aliases[] is nonempty

Taxonomy / Evidence Notes
- optional conflict, synonym, or interpretation note
```

The same source ID may appear under multiple categories.

# Identification Relationship Evidence

Each implemented `FISH_IDENTIFICATION_RELATIONSHIPS` record must have adequate evidence for the distinctions assigned to both Fish.

Recommended relationship evidence shape:

```text
## <relationship-id>

Fish A distinction evidence
- <SOURCE-ID>

Fish B distinction evidence
- <SOURCE-ID>

Notes
- optional clarification/conflict note
```

This relationship evidence may reference the same catalog sources already used by the two Fish records.

# Freshness / Re-Review Boundary

Human source review remains authoritative.

Recheck evidence when:

- the Fish is first authored for production,
- a material Fish factual field is changed,
- identification relationship wording materially changes,
- release review finds the evidence stale or uncertain,
- a contradictory authoritative source appears,
- taxonomy authority publishes a material nomenclature change.

Do **not** automatically feed every provenance URL into the runtime external-reference health checker. Authoring provenance and runtime external-resource health are different concerns.

# Deterministic Validation Boundary

The existing canonical validator:

```text
tools/validate_repository_integrity.js
```

may validate deterministic source-ledger structure such as:

- each applicable Version 1 Fish has one evidence entry,
- required evidence categories are represented,
- referenced source IDs exist,
- source IDs are unique,
- relationship evidence references valid relationship/Fish/source identities when mechanically represented,
- no duplicate/invalid structural references exist.

The validator does **not** decide:

- whether a biological statement is scientifically true,
- whether a source is authoritative enough for a disputed claim,
- whether a habitat tag is ecologically correct,
- whether identification wording is sufficiently diagnostic,
- whether a source is fresh enough for a particular release.

Those remain human review responsibilities.

# Source Catalog — Initial Entries

These entries document the approved Phase 0 taxonomy decision and provide the initial catalog baseline. Production authoring will expand this catalog as the 30 Fish are researched.

## AFS-NAMES-8

**Authority / publisher:** American Fisheries Society  
**Title:** Common and Scientific Names of Fishes from the United States, Canada, and Mexico — 8th Edition / table of names  
**URL:** https://fisheries.org/wp-content/uploads/2024/06/Names-of-Fishes-8-Table1.pdf  
**Source type:** Current North American fish naming authority  
**Reviewed date:** 2026-08-22  
**Notes:** Governing project authority for canonical North American common/scientific naming unless a documented exception is approved. Lists Largemouth Bass as `Micropterus nigricans` and Florida Bass as `Micropterus salmoides`.

## AFS-LARGEMOUTH-2026

**Authority / publisher:** American Fisheries Society / Fisheries  
**Title:** 2026 clarification/discussion of Largemouth Bass nomenclature following the 8th edition names standard  
**URL:** https://academic.oup.com/fisheries/article/51/5/230/8659372  
**Source type:** Professional fisheries/taxonomy clarification  
**Reviewed date:** 2026-08-22  
**Notes:** Corroborates the 8th-edition change of Largemouth Bass usage from `Micropterus salmoides` to `Micropterus nigricans`.

## MDC-LARGEMOUTH

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Largemouth Bass — Missouri field guide  
**URL:** https://mdc.mo.gov/discover-nature/field-guide/largemouth-bass  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-22  
**Notes:** Uses `Micropterus nigricans` and records `M. salmoides` as former/synonymous nomenclature; useful corroboration for the approved project taxonomy rule.

## MDC-RAINBOW-TROUT

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Rainbow Trout — Missouri field guide  
**URL:** https://mdc.mo.gov/discover-nature/field-guide/rainbow-trout  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-22  
**Notes:** Supports Salmonidae family, field-identification traits, cold-water habitat, Ozark spring/stream occurrence, Lake Taneycomo occurrence, and stocked game-fish context.

## MDC-BROWN-TROUT

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Brown Trout — Missouri field guide  
**URL:** https://mdc.mo.gov/discover-nature/field-guide/brown-trout  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-22  
**Notes:** Supports Salmonidae family, `German Brown Trout` alternate common name, field-identification traits, cold-water habitat, Ozark stream/Lake Taneycomo occurrence, and cover/deep-water associations.

## ODWC-RAINBOW-TROUT

**Authority / publisher:** Oklahoma Department of Wildlife Conservation  
**Title:** Trout, Rainbow — Oklahoma Field Guide  
**URL:** https://www.wildlifedepartment.com/wildlife/field-guide/fish/trout-rainbow  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-22  
**Notes:** Corroborates Rainbow-versus-Brown identification using side iridescence, black tail spotting, and white belly; also documents Oklahoma trout occurrence and current-oriented fishing context.

## ODWC-BROWN-TROUT

**Authority / publisher:** Oklahoma Department of Wildlife Conservation  
**Title:** Trout, Brown — Oklahoma Field Guide  
**URL:** https://www.wildlifedepartment.com/wildlife/field-guide/fish/trout-brown  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-22  
**Notes:** Corroborates `German brown trout` terminology and Brown-versus-Rainbow identification using orange/red side spots, few or no black tail spots, and cream belly.

## MDC-LONGNOSE-GAR

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Longnose Gar — Missouri field guide  
**URL:** https://mdc.mo.gov/discover-nature/field-guide/longnose-gar  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-22  
**Notes:** Supports `Lepisosteus osseus`, Lepisosteidae family, Needlenose Gar/Billfish/Billy Gar aliases, very long narrow snout identification, Ozark regional occurrence, reservoir/stream habitat, aquatic vegetation/deeper-pool associations, specialized-hooking context, and gar-roe toxicity.

## MDC-SPOTTED-GAR

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Spotted Gar — Missouri field guide  
**URL:** https://mdc.mo.gov/discover-nature/field-guide/spotted-gar  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-22  
**Notes:** Supports `Lepisosteus oculatus`, Lepisosteidae family, diagnostic head/snout/fin spotting, southeast-Kansas Neosho River occurrence, aquatic-vegetation/standing-timber habitat, specialized-hooking context, and gar-roe toxicity.

## USFWS-LONGNOSE-GAR-RAVER

**Authority / publisher:** U.S. Fish and Wildlife Service  
**Title:** Longnose gar — Duane Raver illustration  
**URL:** https://www.fws.gov/media/longnose-gar-7  
**Source type:** Official federal public-domain scientific illustration / media provenance  
**Reviewed date:** 2026-08-22  
**Notes:** Duane Raver artwork commissioned by the U.S. Fish and Wildlife Service; original 1200 x 769 JPEG; Public Domain; species identified as `Lepisosteus osseus`.

## USFWS-SPOTTED-GAR-RAVER

**Authority / publisher:** U.S. Fish and Wildlife Service  
**Title:** Spotted gar — Duane Raver illustration  
**URL:** https://www.fws.gov/media/spotted-gar  
**Source type:** Official federal public-domain scientific illustration / media provenance  
**Reviewed date:** 2026-08-22  
**Notes:** Duane Raver artwork commissioned by the U.S. Fish and Wildlife Service; original 1200 x 799 JPEG; Public Domain; species identified as `Lepisosteus oculatus`.

## MDC-COMMON-CARP

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Common Carp — Missouri field guide  
**URL:** https://mdc.mo.gov/discover-nature/field-guide/common-carp  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-22  
**Notes:** Supports `Cyprinus carpio`, Cyprinidae family, statewide Missouri occurrence, large-stream/lake/impoundment habitat, shallow feeding and deeper-pool use, two pairs of upper-jaw barbels, long dorsal fin, stout saw-toothed dorsal/anal front spine, crosshatched dark-edged scales, and brassy-olive coloration.

## USGS-COMMON-CARP

**Authority / publisher:** U.S. Geological Survey — Nonindigenous Aquatic Species  
**Title:** Common Carp (`Cyprinus carpio`) — Species Profile  
**URL:** https://nas.er.usgs.gov/queries/factsheet.aspx?speciesID=4  
**Source type:** Official federal species profile  
**Reviewed date:** 2026-08-22  
**Notes:** Corroborates `Cyprinus carpio` identity and documents European carp and German carp as established alternate names.

## USFWS-COMMON-CARP-RAVER

**Authority / publisher:** U.S. Fish and Wildlife Service  
**Title:** Common carp — Duane Raver illustration  
**URL:** https://www.fws.gov/media/common-carp-9  
**Source type:** Official federal public-domain scientific illustration / media provenance  
**Reviewed date:** 2026-08-22  
**Notes:** Duane Raver artwork commissioned by the U.S. Fish and Wildlife Service; original 1200 x 835 JPEG; Public Domain; species identified as `Cyprinus carpio`.

## MDC-FRESHWATER-DRUM

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Freshwater Drum — Missouri field guide  
**URL:** https://mdc.mo.gov/discover-nature/field-guide/freshwater-drum  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-22  
**Notes:** Supports `Aplodinotus grunniens`, Sciaenidae family, Sheepshead/Sheephead alternate names, statewide Missouri occurrence, large-river/lake/impoundment habitat, deep pools and mixed mud/sand bottom associations, and the approved humpbacked profile, two-part dorsal fin, milky-white lips, and pelvic-fin identification traits.

## USFWS-FRESHWATER-DRUM-RAVER

**Authority / publisher:** U.S. Fish and Wildlife Service  
**Title:** Freshwater drum — Duane Raver illustration  
**URL:** https://www.fws.gov/media/freshwater-drum-2  
**Source type:** Official federal public-domain scientific illustration / media provenance  
**Reviewed date:** 2026-08-22  
**Notes:** Duane Raver artwork commissioned by the U.S. Fish and Wildlife Service; supplied original is 1200 x 731 JPEG; Public Domain; species identified as `Aplodinotus grunniens`.

## MDC-PADDLEFISH

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Paddlefish — Missouri field guide  
**URL:** https://mdc.mo.gov/discover-nature/field-guide/paddlefish  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-22  
**Notes:** Supports `Polyodon spathula`, Polyodontidae family, Spoonbill alternate name, paddle-shaped snout, toothless adult mouth, small forward/downward-directed eyes, unequal-lobed forked tail, filter-feeding biology, big-river/open-water habitat, and reservoir populations.

## MDC-PADDLEFISH-SEASON

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Paddlefish — Missouri fishing season and regulations  
**URL:** https://mdc.mo.gov/fishing/seasons/paddlefish  
**Source type:** Official state fishing regulations / regional occurrence evidence  
**Reviewed date:** 2026-08-22  
**Notes:** Establishes regulated Paddlefish snagging in Table Rock Lake, providing direct occurrence/angling evidence within the approved Southwest Missouri target region; also documents water-specific season and length-limit rules.

## MDC-PADDLEFISH-TIPS

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Paddlefish: Tips For Fishing  
**URL:** https://mdc.mo.gov/fishing/species/paddlefish/paddlefish-tips-fishing  
**Source type:** Official state fisheries targeting and safety guidance  
**Reviewed date:** 2026-08-22  
**Notes:** Supports snagging as the dependable targeting method for filter-feeding Paddlefish, heavy-line/large-sinker/large-treble-hook equipment, sweeping snagging motion, regulation checks, and explicit caution around heavy line, large hooks, balance, landing, and handling.

## USFWS-PADDLEFISH-RAVER

**Authority / publisher:** U.S. Fish and Wildlife Service  
**Title:** Paddlefish — Duane Raver illustration  
**URL:** https://www.fws.gov/media/paddlefish-32  
**Source type:** Official federal public-domain scientific illustration / media provenance  
**Reviewed date:** 2026-08-22  
**Notes:** Duane Raver artwork commissioned by the U.S. Fish and Wildlife Service; original 1200 x 762 JPEG; Public Domain; species identified as `Polyodon spathula`.

# Evidence Entries — Production Population Status

Per-Fish and pairwise evidence population begins with FISH-008/FISH-009 production authoring. Do not fabricate empty “complete” evidence records merely to satisfy documentation appearance before the corresponding canonical Fish content is researched.

Every Fish activated under the new production contract must satisfy the evidence/readiness rules in this document before activation.

## Rainbow Trout (`rainbow-trout`)

Regional Inclusion
- MDC-RAINBOW-TROUT — Ozark spring branches, spring-fed streams, and Lake Taneycomo establish occurrence in the approved Southwest Missouri target region.

Taxonomy / Family
- AFS-NAMES-8
- MDC-RAINBOW-TROUT

Identification
- MDC-RAINBOW-TROUT
- ODWC-RAINBOW-TROUT

Habitat / Waterbody
- MDC-RAINBOW-TROUT

Taxonomy / Evidence Notes
- AFS-NAMES-8 lists `Oncorhynchus mykiss` as Rainbow Trout; MDC independently uses the same scientific identity and places it in Salmonidae.

## Brown Trout (`brown-trout`)

Regional Inclusion
- MDC-BROWN-TROUT — Ozark streams and Lake Taneycomo establish occurrence in the approved Southwest Missouri target region.

Taxonomy / Family
- AFS-NAMES-8
- MDC-BROWN-TROUT

Identification
- MDC-BROWN-TROUT
- ODWC-BROWN-TROUT

Habitat / Waterbody
- MDC-BROWN-TROUT

Aliases
- MDC-BROWN-TROUT
- ODWC-BROWN-TROUT

Taxonomy / Evidence Notes
- AFS-NAMES-8 lists `Salmo trutta` as Brown Trout; MDC independently uses the same scientific identity and places it in Salmonidae.

## brown-trout-vs-rainbow-trout

Brown Trout distinction evidence
- MDC-BROWN-TROUT
- ODWC-BROWN-TROUT

Rainbow Trout distinction evidence
- MDC-RAINBOW-TROUT
- ODWC-RAINBOW-TROUT

Notes
- Pairwise wording is limited to visible side coloration/spotting, tail spotting/shape, and belly-color distinctions supported by the two official state field guides.

## Longnose Gar (`longnose-gar`)

Regional Inclusion
- MDC-LONGNOSE-GAR — Clear, high-gradient Ozark streams and large Ozark reservoirs establish occurrence within the approved Southwest Missouri target region.

Taxonomy / Family
- AFS-NAMES-8
- MDC-LONGNOSE-GAR

Identification
- MDC-LONGNOSE-GAR

Habitat / Waterbody
- MDC-LONGNOSE-GAR

Aliases
- MDC-LONGNOSE-GAR

Taxonomy / Evidence Notes
- MDC uses `Lepisosteus osseus`, places the species in Lepisosteidae, and documents the approved alternate common names Needlenose Gar, Billfish, and Billy Gar.

## Spotted Gar (`spotted-gar`)

Regional Inclusion
- MDC-SPOTTED-GAR — Neosho River occurrence in southeast Kansas establishes occurrence within the approved Southeast Kansas target region.

Taxonomy / Family
- AFS-NAMES-8
- MDC-SPOTTED-GAR

Identification
- MDC-SPOTTED-GAR

Habitat / Waterbody
- MDC-SPOTTED-GAR

Taxonomy / Evidence Notes
- MDC uses `Lepisosteus oculatus`, places the species in Lepisosteidae, and documents the approved diagnostic spotting pattern.

## longnose-gar-vs-spotted-gar

Longnose Gar distinction evidence
- MDC-LONGNOSE-GAR

Spotted Gar distinction evidence
- MDC-SPOTTED-GAR

Notes
- Pairwise wording is limited to the beginner-useful snout-proportion and head/fin spotting distinctions explicitly described in the official MDC field guides.

## Common Carp (`common-carp`)

Regional Inclusion
- MDC-COMMON-CARP — Statewide Missouri occurrence establishes presence within the approved Southwest Missouri target region.

Taxonomy / Family
- AFS-NAMES-8
- MDC-COMMON-CARP

Identification
- MDC-COMMON-CARP

Habitat / Waterbody
- MDC-COMMON-CARP

Aliases
- USGS-COMMON-CARP

Media Provenance
- USFWS-COMMON-CARP-RAVER

Taxonomy / Evidence Notes
- The production aliases are limited to European Carp and German Carp even though USGS documents additional established alternate names.

## Freshwater Drum (`freshwater-drum`)

Regional Inclusion
- MDC-FRESHWATER-DRUM — Statewide Missouri occurrence establishes presence within the approved Southwest Missouri target region.

Taxonomy / Family
- AFS-NAMES-8
- MDC-FRESHWATER-DRUM

Identification
- MDC-FRESHWATER-DRUM

Habitat / Waterbody
- MDC-FRESHWATER-DRUM

Aliases
- MDC-FRESHWATER-DRUM

Media Provenance
- USFWS-FRESHWATER-DRUM-RAVER

Taxonomy / Evidence Notes
- The approved aliases preserve both Sheepshead and Sheephead because the official MDC field guide documents both forms.

## Paddlefish (`paddlefish`)

Regional Inclusion
- MDC-PADDLEFISH-SEASON — Table Rock Lake establishes occurrence and regulated angling within the approved Southwest Missouri target region.

Taxonomy / Family
- AFS-NAMES-8
- MDC-PADDLEFISH

Identification
- MDC-PADDLEFISH

Habitat / Waterbody
- MDC-PADDLEFISH

Aliases
- MDC-PADDLEFISH

Media Provenance
- USFWS-PADDLEFISH-RAVER

Targeting / Regulation / Safety Notes
- MDC-PADDLEFISH-TIPS — Supports the approved Specialized Targeting guidance, heavy snagging tackle context, and safety language.
- MDC-PADDLEFISH-SEASON — Supports the instruction to verify current water-specific seasons, methods, and size limits.

Taxonomy / Evidence Notes
- No Fish-to-Rig guidance record is created because the documented dependable targeting method relies on specialized snagging equipment outside the Companion's current canonical Rig library.

# Related Documents

- `data-model/02-FISH.md`
- `data-model/09-RELATIONSHIPS.md`
- `MEDIA_GUIDE.md`
- `DECISIONS.md`
- `DEVELOPMENT_WORKFLOW.md`
- `EXTERNAL_REFERENCE_MAINTENANCE.md`
- `../archive/workstreams/fish-guide/FISH-GUIDE-PHASE-0.md`
- `../archive/workstreams/fish-guide/FISH-GUIDE-PHASE-0-AUDIT-REVISIONS.md`
