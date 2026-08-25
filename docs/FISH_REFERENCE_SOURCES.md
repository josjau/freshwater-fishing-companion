# Freshwater Fishing Companion — Fish Reference Sources

**Document:** FISH_REFERENCE_SOURCES.md  
**Document Revision:** 1.2.1  
**Document Status:** Approved — Production Authoring Standard  
**Implementation Status:** Standard active; evidence populated through the Wave 4 Sunfish & Crappie review package, including approved Fish-to-Rig guidance, pending user validation and production commit  
**Decision Baseline:** D056–D061, FISH-006, FISH-007  
**Last Updated:** 2026-08-25

# Purpose

This document is the canonical Fish authoring/provenance ledger for factual Fish content used by Freshwater Fishing Companion.

It records **why the project trusts the Fish facts it publishes** without placing editorial source URLs or provenance fields into runtime `FISH_DATA` records.

This document is not a duplicate runtime external-link registry. It supports authoring, review, auditability, taxonomy conflict handling, and deterministic evidence-completeness checks.

Fish Guide Phase 0 is closed. Per-Fish evidence entries are populated as the approved 30-Fish production library is authored. The absence of target-library evidence entries before the corresponding production data is authored does not mean the current pre-migration Fish source has already satisfied the target production contract.

The approved evidence/media package for Production Wave 3 — Bass is preserved at `../archive/workstreams/fish-guide/FISH-WAVE-3-BASS.md`. Its authoritative source anchors are promoted into the per-Fish and per-relationship structures in this ledger; Wave 3 is closed.

# Governing Principles

1. Runtime Fish records contain canonical application facts, not citation plumbing.
2. Source evidence is organized by **factual category**, not by forcing one citation beside every field/value.
3. One authoritative source may support multiple categories or multiple related facts.
4. Critical Fish identity, field-identification, and regional-inclusion claims must not rely solely on ordinary secondary fishing websites.
5. Conflicting authoritative sources are documented and reviewed explicitly; they are never silently resolved.
6. Deterministic validation checks evidence structure/reference resolution. Human review determines scientific adequacy, source authority, and freshness.
7. The evidence model is provisionally approved and deliberately adjustable if real production authoring demonstrates a better practical burden/structure. Any adjustment requires an explicit documented decision; no silent drift.
8. Production Fish identification media uses a transparent Fish layer over the same shared neutral reference-media surface used for Tackle components when the source rights permit modification. Background removal must preserve all Fish anatomy and diagnostic detail; if clean isolation cannot be achieved without risking detail loss, retain the source background until a better asset is available.

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

## MDC-WALLEYE

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Walleye — Missouri field guide  
**URL:** https://mdc.mo.gov/discover-nature/field-guide/walleye  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-23  
**Notes:** Supports `Sander vitreus`, Percidae family, reflective-eye identification, large-stream/lake/reservoir occurrence, open-water/deep-pool/rock associations, and Missouri regional inclusion.

## MDC-SAUGER

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Sauger — Missouri field guide  
**URL:** https://mdc.mo.gov/discover-nature/field-guide/sauger  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-23  
**Notes:** Supports `Sander canadensis`, Percidae family, Sand Pike alternate name, distinct spiny-dorsal spots, scaled cheeks, dark saddle marks, flowing-water/current habitat, and bottom-oriented minnow fishing in swift rocky water.

## ODWC-SAUGER

**Authority / publisher:** Oklahoma Department of Wildlife Conservation  
**Title:** Sauger — Oklahoma Field Guide  
**URL:** https://www.wildlifedepartment.com/wildlife/field-guide/fish/sauger  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-23  
**Notes:** Establishes Oklahoma occurrence including the Neosho River, supports Percidae family context, river/stream habitat, and the Walleye/Sauger/Saugeye spiny-dorsal identification framework.

## ODWC-SAUGEYE

**Authority / publisher:** Oklahoma Department of Wildlife Conservation  
**Title:** Saugeye — Oklahoma Field Guide  
**URL:** https://www.wildlifedepartment.com/wildlife/field-guide/fish/saugeye  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-23  
**Notes:** Supports Saugeye as the Walleye-Sauger hybrid, spots-and-bars spiny-dorsal identification, scaled-cheek context, reservoir occurrence, near-bottom ledge/drop-off habitat, and jig/crankbait/live-bait targeting context.

## ODWC-WALLEYE-SAUGER-SAUGEYE-ID

**Authority / publisher:** Oklahoma Department of Wildlife Conservation  
**Title:** Statewide Daily & Size Limits — Walleye, Sauger & Saugeye identification  
**URL:** https://www.wildlifedepartment.com/fishing/regs/statewide-daily-size-limits  
**Source type:** Official state fishing regulations / identification reference  
**Reviewed date:** 2026-08-23  
**Notes:** Provides concise current diagnostic distinctions: Walleye has no spots on the spiny dorsal fin and few or no cheek scales; Sauger has distinct dorsal spots and scaled cheeks; Saugeye has spots and bars in the dorsal webbing and scaled cheeks.

## KDWP-WALLEYE-SAUGER-SAUGEYE-ID

**Authority / publisher:** Kansas Department of Wildlife and Parks  
**Title:** Identification of Walleye, Sauger, and Saugeye  
**URL:** https://ksoutdoors.com/content/download/7063/34347/file/Poster%20Fish%20ID%20Perch.pdf  
**Source type:** Official state fisheries identification reference  
**Reviewed date:** 2026-08-23  
**Notes:** Corroborates cheek scaling and first-dorsal distinctions among all three taxa, including circular Sauger spots and Saugeye streaks/rows of spots.

## AFS-SAUGEYE-NOTATION

**Authority / publisher:** American Fisheries Society / Fisheries  
**Title:** Creating a Digital Repository of Calcified Structures from Known-Age Fishes, a Century in the Making  
**URL:** https://academic.oup.com/fisheries/article/47/8/357/7816507  
**Source type:** Professional fisheries publication / hybrid-name corroboration  
**Reviewed date:** 2026-08-23  
**Notes:** Uses `Saugeye Sander vitreus × S. canadensis`, corroborating the project’s AFS-first parent-order notation alongside AFS-NAMES-8 parent-species names.

## KDWP-SOUTHEAST-SAUGEYE

**Authority / publisher:** Kansas Department of Wildlife and Parks  
**Title:** Southeast Region Fishing Reports — Bone Creek Reservoir Saugeye  
**URL:** https://ksoutdoors.com/Fishing/Fishing-Reports/Southeast-Region  
**Source type:** Official state fisheries report / regional occurrence evidence  
**Reviewed date:** 2026-08-23  
**Notes:** Documents a managed Saugeye fishery at Bone Creek Reservoir in southeast Kansas and supports flats/deep-water/structure associations plus jighead-and-plastic targeting.

## MNDNR-WALLEYE-TACTICS

**Authority / publisher:** Minnesota Department of Natural Resources  
**Title:** How to catch a walleye  
**URL:** https://www.dnr.state.mn.us/gofishing/how-catch-walleye.html  
**Source type:** Official state fisheries angling guidance  
**Reviewed date:** 2026-08-23  
**Notes:** Supports jigging, slip-sinker/Lindy-style live bait, and bobber fishing above reefs/humps as standard Walleye presentations.

## ODWC-WALLEYE-SAUGEYE-TACTICS

**Authority / publisher:** Oklahoma Department of Wildlife Conservation  
**Title:** Perch vs. Percidae: How-To Catch Walleye & Saugeye  
**URL:** https://www.wildlifedepartment.com/outdoorok/ooj/perch-vs-percidae-how-catch-walleye-saugeye  
**Source type:** Official state fisheries angling guidance  
**Reviewed date:** 2026-08-23  
**Notes:** Supports bottom contact, Lindy-style natural-bait rigs, jigheads with live bait or soft plastics, and bottom-bouncing spinner-harness presentations for Walleye/Saugeye.

## MDC-CHANNEL-CATFISH

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Channel Catfish — Missouri field guide  
**URL:** https://mdc.mo.gov/discover-nature/field-guide/channel-catfish  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-23  
**Notes:** Supports `Ictalurus punctatus`, Ictaluridae family, statewide Missouri occurrence, deeply forked tail, rounded/convex anal-fin edge, variable dark spotting, barbels, impoundment/stream habitat, deep pools, timber/cover, and still-fishing context.

## MDC-BLUE-CATFISH

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Blue Catfish — Missouri field guide  
**URL:** https://mdc.mo.gov/discover-nature/field-guide/blue-catfish  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-23  
**Notes:** Supports `Ictalurus furcatus`, Ictaluridae family, forked tail, straight-edged long anal fin, unspotted blue-silver body, big-river/current habitat, sand/gravel/rubble substrate, and Missouri occurrence.

## ODWC-OOLOGAH-BLUE-CATFISH

**Authority / publisher:** Oklahoma Department of Wildlife Conservation  
**Title:** Oologah Lake  
**URL:** https://www.wildlifedepartment.com/fishing/wheretofish/northeast/oologah-lake  
**Source type:** Official state fisheries waterbody profile / regional occurrence evidence  
**Reviewed date:** 2026-08-23  
**Notes:** Lists Blue Catfish among Fish Species of Interest at Oologah Lake in northeast Oklahoma, directly establishing occurrence inside the project’s target region.

## MDC-FLATHEAD-CATFISH

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Flathead Catfish — Missouri field guide  
**URL:** https://mdc.mo.gov/discover-nature/field-guide/flathead-catfish  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-23  
**Notes:** Supports `Pylodictis olivaris`, Ictaluridae family, broad flattened head, projecting lower jaw, tail not deeply forked, large-stream/reservoir occurrence, deep pools, submerged logs, drift and cover associations.

## MDC-BLACK-BULLHEAD

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Black Bullhead — Missouri field guide  
**URL:** https://mdc.mo.gov/discover-nature/field-guide/black-bullhead  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-23  
**Notes:** Supports `Ameiurus melas`, Ictaluridae family, statewide Missouri occurrence, dark chin barbels, slightly notched unforked tail, turbid/silty low-current habitat, muddy backwaters, and small-creek pools.

## MDC-YELLOW-BULLHEAD

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Yellow Bullhead — Missouri field guide  
**URL:** https://mdc.mo.gov/discover-nature/field-guide/yellow-bullhead  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-23  
**Notes:** Supports `Ameiurus natalis`, Ictaluridae family, statewide Missouri/Ozark occurrence, white chin barbels, nearly straight unforked tail, quiet vegetated backwater/stream habitat, and bottom-oriented angling context.

## ODWC-BLACK-BULLHEAD

**Authority / publisher:** Oklahoma Department of Wildlife Conservation  
**Title:** Black Bullhead Catfish — Oklahoma Field Guide  
**URL:** https://www.wildlifedepartment.com/wildlife/field-guide/fish/black-bullhead-catfish  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-23  
**Notes:** Corroborates `Ameiurus melas`, black barbels, squared/unforked bullhead tail form, muddy slow-water habitat, and lake/pond/reservoir/slow-river associations.

## ODWC-YELLOW-BULLHEAD

**Authority / publisher:** Oklahoma Department of Wildlife Conservation  
**Title:** Yellow Bullhead Catfish — Oklahoma Field Guide  
**URL:** https://www.wildlifedepartment.com/wildlife/field-guide/fish/yellow-bullhead-catfish  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-23  
**Notes:** Corroborates `Ameiurus natalis`, white/yellow barbels, squared/unforked bullhead tail form, and quiet vegetated stream/backwater habitat.

## MNDNR-CATFISH-BIOLOGY

**Authority / publisher:** Minnesota Department of Natural Resources  
**Title:** Catfish biology and identification  
**URL:** https://www.dnr.state.mn.us/fish/catfish/biology.html  
**Source type:** Official state fisheries biology reference  
**Reviewed date:** 2026-08-23  
**Notes:** Supports Yellow Bullhead use of clear, weedy ponds/lakes and slow streams, and corroborates pale lower barbels; also provides general bullhead pond/lake/creek context.

## MDC-CATFISH-BIG-RIVER

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Big River Catfishing  
**URL:** https://mdc.mo.gov/fishing/species/catfish/big-river-catfishing  
**Source type:** Official state fisheries angling guidance  
**Reviewed date:** 2026-08-23  
**Notes:** Documents the sliding slip-sinker/swivel/leader/hook bottom setup for Blue and Flathead Catfish and states the same basic setup works for Channel Catfish when downsized.

## ODWC-CHANNEL-CATFISH-RIG

**Authority / publisher:** Oklahoma Department of Wildlife Conservation  
**Title:** Fishing Fun in the Sun!  
**URL:** https://www.wildlifedepartment.com/outdoorok/ooj/fishing-fun-sun  
**Source type:** Official state fisheries beginner angling guidance  
**Reviewed date:** 2026-08-23  
**Notes:** Explicitly identifies a simple bobber with baited hook as the most basic Channel Catfish rig and also describes a sliding-sinker deeper-water setup.

## USFWS-WALLEYE-RAVER

**Authority / publisher:** U.S. Fish and Wildlife Service  
**Title:** Walleye — Duane Raver illustration  
**URL:** https://www.fws.gov/media/walleye-1  
**Source type:** Official federal public-domain scientific illustration / media provenance  
**Reviewed date:** 2026-08-23  
**Notes:** Duane Raver artwork commissioned by the U.S. Fish and Wildlife Service; supplied original is 1200 x 740 JPEG; Public Domain.

## USFWS-SAUGER-RAVER

**Authority / publisher:** U.S. Fish and Wildlife Service  
**Title:** Sauger — Duane Raver illustration  
**URL:** https://www.fws.gov/media/sauger-2  
**Source type:** Official federal public-domain scientific illustration / media provenance  
**Reviewed date:** 2026-08-23  
**Notes:** Duane Raver artwork commissioned by the U.S. Fish and Wildlife Service; supplied original is 1200 x 781 JPEG; Public Domain.

## VADWR-SAUGEYE-RAVER

**Authority / publisher:** Virginia Department of Wildlife Resources / eRegulations  
**Title:** Fish Identification — Saugeye / Duane Raver-USFWS illustration attribution  
**URL:** https://www.eregulations.com/virginia/fishing/fish-identification  
**Source type:** Official state Fish identification and exact artwork attribution  
**Reviewed date:** 2026-08-23  
**Notes:** The page contains the Saugeye illustration and states that all Fish illustrations other than the separately named exceptions are Duane Raver/USFWS, establishing the exact Saugeye artwork as part of that Raver/USFWS set. ODWC independently identifies its matching Saugeye Sportfish ID artwork as Duane Raver. U.S. Fish and Wildlife Service media pages for the commissioned Raver Fish-art series explicitly mark those works Public Domain; a dedicated FWS Saugeye media landing page was not located, so this provenance chain is recorded explicitly.

## USFWS-CHANNEL-CATFISH-RAVER

**Authority / publisher:** U.S. Fish and Wildlife Service  
**Title:** Channel catfish — Duane Raver illustration  
**URL:** https://www.fws.gov/media/chanel-catfish  
**Source type:** Official federal public-domain scientific illustration / media provenance  
**Reviewed date:** 2026-08-23  
**Notes:** Duane Raver artwork commissioned by the U.S. Fish and Wildlife Service; supplied original is 1200 x 765 JPEG; Public Domain.

## USFWS-BLUE-CATFISH-RAVER

**Authority / publisher:** U.S. Fish and Wildlife Service  
**Title:** Blue catfish — Duane Raver illustration  
**URL:** https://www.fws.gov/media/blue-catfish  
**Source type:** Official federal public-domain scientific illustration / media provenance  
**Reviewed date:** 2026-08-23  
**Notes:** Duane Raver artwork commissioned by the U.S. Fish and Wildlife Service; supplied original is 1200 x 798 JPEG; Public Domain.

## USFWS-FLATHEAD-CATFISH-RAVER

**Authority / publisher:** U.S. Fish and Wildlife Service  
**Title:** Flathead catfish — Duane Raver illustration  
**URL:** https://www.fws.gov/media/flathead-catfish  
**Source type:** Official federal public-domain scientific illustration / media provenance  
**Reviewed date:** 2026-08-23  
**Notes:** Duane Raver artwork commissioned by the U.S. Fish and Wildlife Service; supplied original is 1200 x 814 JPEG; Public Domain.

## USFWS-BLACK-BULLHEAD-RAVER

**Authority / publisher:** U.S. Fish and Wildlife Service  
**Title:** Black bullhead — Duane Raver illustration  
**URL:** https://www.fws.gov/media/black-bullhead  
**Source type:** Official federal public-domain scientific illustration / media provenance  
**Reviewed date:** 2026-08-23  
**Notes:** Duane Raver artwork commissioned by the U.S. Fish and Wildlife Service; supplied original is 1200 x 778 JPEG; Public Domain.

## USFWS-YELLOW-BULLHEAD-RAVER

**Authority / publisher:** U.S. Fish and Wildlife Service  
**Title:** Yellow bullhead — Duane Raver illustration  
**URL:** https://www.fws.gov/media/yellow-bullhead-10  
**Source type:** Official federal public-domain scientific illustration / media provenance  
**Reviewed date:** 2026-08-23  
**Notes:** Duane Raver artwork commissioned by the U.S. Fish and Wildlife Service; supplied original is 1200 x 813 JPEG; Public Domain.

## ODWC-LARGEMOUTH-BASS

**Authority / publisher:** Oklahoma Department of Wildlife Conservation  
**Title:** Bass, Largemouth — Oklahoma Field Guide  
**URL:** https://www.wildlifedepartment.com/wildlife/field-guide/fish/bass-largemouth  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-24  
**Notes:** Supports Oklahoma occurrence, Centrarchidae context, shallow cover and reservoir/river habitat, mouth-hinge and dorsal-notch identification, horizontal side stripe, tongue-patch context, and soft-plastic targeting around cover.

## ODWC-SMALLMOUTH-BASS

**Authority / publisher:** Oklahoma Department of Wildlife Conservation  
**Title:** Bass, Smallmouth — Oklahoma Field Guide  
**URL:** https://www.wildlifedepartment.com/wildlife/field-guide/fish/bass-smallmouth  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-24  
**Notes:** Supports Oklahoma occurrence, `Micropterus dolomieu`, Centrarchidae, Bronzeback terminology, rock/current habitat, mouth-hinge and connected-dorsal identification, vertical side bars, tongue-patch context, and compact lure/jig targeting.

## ODWC-SPOTTED-BASS

**Authority / publisher:** Oklahoma Department of Wildlife Conservation  
**Title:** Bass, Spotted — Oklahoma Field Guide  
**URL:** https://www.wildlifedepartment.com/wildlife/field-guide/fish/bass-spotted  
**Source type:** Official state wildlife/fisheries field guide and approved media source record  
**Reviewed date:** 2026-08-24  
**Notes:** Supports Oklahoma occurrence, `Micropterus punctulatus`, Centrarchidae, Kentucky Bass terminology, rock/current/channel/deep-water associations, mouth-hinge, spot-row, connected-dorsal and tongue-patch identification, and jig targeting. The page credits the selected illustration to Duane Raver. The exact ODWC-hosted file is not independently verified Public Domain and the host footer states All Rights Reserved; the production Media record preserves this caveat and does not overstate the license.

## ODWC-WHITE-BASS

**Authority / publisher:** Oklahoma Department of Wildlife Conservation  
**Title:** Bass, White — Oklahoma Field Guide  
**URL:** https://www.wildlifedepartment.com/wildlife/field-guide/fish/bass-white  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-24  
**Notes:** Supports Oklahoma occurrence, `Morone chrysops`, Moronidae, Sand Bass terminology, open-water/current habitat, deep body and arched-back identification, single tongue-patch context, and jig, spinner, and live-bait targeting.

## ODWC-STRIPED-BASS

**Authority / publisher:** Oklahoma Department of Wildlife Conservation  
**Title:** Bass, Striped — Oklahoma Field Guide  
**URL:** https://www.wildlifedepartment.com/wildlife/field-guide/fish/bass-striped  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-24  
**Notes:** Supports Oklahoma occurrence, `Morone saxatilis`, Moronidae, Striper terminology, open/deep-water and current associations, slender body, mostly continuous stripe pattern, two tongue patches, and jig/live-bait targeting.

## ODWC-HYBRID-STRIPED-BASS

**Authority / publisher:** Oklahoma Department of Wildlife Conservation  
**Title:** Bass, Striped Hybrid — Oklahoma Field Guide  
**URL:** https://www.wildlifedepartment.com/wildlife/field-guide/fish/bass-striped-hybrid  
**Source type:** Official state wildlife/fisheries field guide and approved media source record  
**Reviewed date:** 2026-08-24  
**Notes:** Supports Oklahoma occurrence, White Bass–Striped Bass hybrid identity, Moronidae context, Wiper and Whiterock Bass terminology, open/deep-water and current associations, intermediate body depth, broken stripe identification, variable tongue-patch context, and jig/live-bait targeting. The page credits the selected illustration to Duane Raver. The exact ODWC-hosted file is not independently verified Public Domain and the host footer states All Rights Reserved; the production Media record preserves this caveat and does not overstate the license.

## USFWS-LARGEMOUTH-BASS-RAVER

**Authority / publisher:** U.S. Fish and Wildlife Service  
**Title:** Largemouth bass — Duane Raver illustration  
**URL:** https://www.fws.gov/media/largemouth-bass-5  
**Source type:** Official federal public-domain scientific illustration / media provenance  
**Reviewed date:** 2026-08-24  
**Notes:** Duane Raver artwork commissioned by the U.S. Fish and Wildlife Service; verified original is 1200 x 778 JPEG; Public Domain. Historical media naming does not override the project's AFS-governed canonical scientific identity.

## USFWS-SMALLMOUTH-BASS-RAVER

**Authority / publisher:** U.S. Fish and Wildlife Service  
**Title:** Smallmouth bass — Duane Raver illustration  
**URL:** https://www.fws.gov/media/smallmouth-bass-19  
**Source type:** Official federal public-domain scientific illustration / media provenance  
**Reviewed date:** 2026-08-24  
**Notes:** Duane Raver artwork commissioned by the U.S. Fish and Wildlife Service; verified original is 1200 x 742 JPEG; Public Domain.

## USFWS-WHITE-BASS-RAVER

**Authority / publisher:** U.S. Fish and Wildlife Service  
**Title:** White bass — Duane Raver illustration  
**URL:** https://www.fws.gov/media/white-bass-1  
**Source type:** Official federal public-domain scientific illustration / media provenance  
**Reviewed date:** 2026-08-24  
**Notes:** Duane Raver artwork commissioned by the U.S. Fish and Wildlife Service; verified original is 1200 x 734 JPEG; Public Domain.

## USFWS-STRIPED-BASS-RAVER

**Authority / publisher:** U.S. Fish and Wildlife Service  
**Title:** Striped bass — Duane Raver illustration  
**URL:** https://www.fws.gov/media/striped-bass-12  
**Source type:** Official federal public-domain scientific illustration / media provenance  
**Reviewed date:** 2026-08-24  
**Notes:** Duane Raver artwork commissioned by the U.S. Fish and Wildlife Service; verified original is 1200 x 772 JPEG; Public Domain.

## MDC-BLUEGILL

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Bluegill — Missouri field guide  
**URL:** https://mdc.mo.gov/discover-nature/field-guide/bluegill  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-25  
**Notes:** Supports `Lepomis macrochirus`, Centrarchidae, statewide Missouri occurrence, small-mouth identity, long pointed pectoral fin, black opercular flap, rear soft-dorsal blotch, blue chin/lower gill-cover coloration, and pond/reservoir/stream habitat with aquatic plants or other cover.

## MDC-REDEAR-SUNFISH

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Redear Sunfish — Missouri field guide  
**URL:** https://mdc.mo.gov/discover-nature/field-guide/redear-sunfish  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-25  
**Notes:** Supports `Lepomis microlophus`, Centrarchidae, Shellcracker terminology, southern-Missouri natural occurrence plus pond/reservoir stocking, small mouth, deep body, golden/light-olive sides with vertical bars, and the black opercular flap with a prominent orange/red rear spot. Also supports warm clear vegetated water and protected backwater habitat.

## MDC-GREEN-SUNFISH

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Green Sunfish — Missouri field guide  
**URL:** https://mdc.mo.gov/discover-nature/field-guide/green-sunfish  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-25  
**Notes:** Supports `Lepomis cyanellus`, Centrarchidae, Black Perch terminology, statewide Missouri occurrence, thick body, large mouth, blue head markings, pale/salmon fin margins, dark rear dorsal splotch, rounded pectoral fin, and use of ponds, lakes, streams, pools, and backwaters. The field guide also specifically identifies still-fishing with a cane pole and bobber using worms, grubs, or grasshoppers as an effective method.

## MDC-LONGEAR-SUNFISH

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Longear Sunfish — Missouri field guide  
**URL:** https://mdc.mo.gov/discover-nature/field-guide/longear-sunfish  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-25  
**Notes:** Supports `Lepomis megalotis`, Centrarchidae, Creek Perch terminology, southern-Missouri/Ozark occurrence, moderate mouth, elongated black often white-bordered opercular flap, rounded pectoral fin, and reservoir/pond/stream-pool habitat with rocky or sandy bottoms and aquatic vegetation.

## MDC-NORTHERN-ROCK-BASS

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Northern Rock Bass — Missouri field guide  
**URL:** https://mdc.mo.gov/discover-nature/field-guide/northern-rock-bass  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-25  
**Notes:** Supports `Ambloplites rupestris`, Centrarchidae, Goggle-Eye terminology, northern/southwestern Ozark occurrence, thick body, large mouth and eyes, 12 dorsal spines, 6 anal spines, parallel rows of dark side spots, and deeper-pool use around boulders, logs, and vegetation.

## MDC-GOGGLE-EYE-RULE

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Goggle-eye (Ozark Bass, Rock Bass and Shadow Bass) and Warmouth — Missouri regulation terminology  
**URL:** https://mdc.mo.gov/about-us/about-regulations/wildlife-code-missouri/3-csr-10-6530-goggle-eye-ozark-bass-rock-bass  
**Source type:** Official state fisheries regulation / common-name terminology  
**Reviewed date:** 2026-08-25  
**Notes:** Establishes Missouri's use of `goggle-eye` as the regulatory umbrella/common terminology encompassing Ozark bass, rock bass, and shadow bass. Used only to support the approved shared Goggle-Eye alias context, not to collapse the three biological species.

## MDC-WARMOUTH

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Warmouth — Missouri field guide  
**URL:** https://mdc.mo.gov/discover-nature/field-guide/warmouth  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-25  
**Notes:** Supports `Lepomis gulosus`, Centrarchidae, southern/eastern Missouri occurrence, thick body, large mouth, dark/reddish-brown lines radiating behind the eye, 10 dorsal spines, and the 3-anal-spine distinction from the Northern Rock Bass's 6. Also supports vegetated low-current lakes, sloughs, overflows, and large impoundments.

## MDC-BLACK-CRAPPIE

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Black Crappie — Missouri field guide  
**URL:** https://mdc.mo.gov/discover-nature/field-guide/black-crappie  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-25  
**Notes:** Supports `Pomoxis nigromaculatus`, Centrarchidae, widespread Missouri occurrence including large Ozark reservoirs, irregular dark speckles/blotches rather than vertical bars, 7–8 dorsal spines, and open-water habitat with submerged timber or vegetation in standing waters and slow backwaters.

## MDC-WHITE-CRAPPIE

**Authority / publisher:** Missouri Department of Conservation  
**Title:** White Crappie — Missouri field guide  
**URL:** https://mdc.mo.gov/discover-nature/field-guide/white-crappie  
**Source type:** Official state wildlife/fisheries field guide  
**Reviewed date:** 2026-08-25  
**Notes:** Supports `Pomoxis annularis`, Centrarchidae, Papermouth and Bachelor Perch terminology, near-statewide Missouri occurrence, 5–10 vertical side bars, usually 6 dorsal spines, and open-water/cover use in ponds, lakes, reservoirs, and slow-flowing river backwaters.

## FWS-OZARK-BASS

**Authority / publisher:** U.S. Fish and Wildlife Service  
**Title:** Ozark Bass (`Ambloplites constellatus`) species profile / taxonomic tree  
**URL:** https://www.fws.gov/species/ozark-bass-ambloplites-constellatus  
**Source type:** Official federal species/taxonomy record  
**Reviewed date:** 2026-08-25  
**Notes:** Supports the canonical Ozark Bass common/scientific identity; the linked FWS taxonomic tree places the species in Centrarchidae.

## USGS-OZARK-BASS

**Authority / publisher:** U.S. Geological Survey — Nonindigenous Aquatic Species Database  
**Title:** Ozark Bass (`Ambloplites constellatus`) — Species Profile  
**URL:** https://nas.er.usgs.gov/queries/factsheet.aspx?speciesid=372  
**Source type:** Federal species profile / distribution and taxonomy evidence  
**Reviewed date:** 2026-08-25  
**Notes:** Supports `Ambloplites constellatus`, its distinction from former `A. rupestris` treatment, and native upper White River drainage occurrence in Arkansas and Missouri. This range directly includes the project's Southwest Missouri/Northwest Arkansas Four-State scope.

## USFS-CENTRARCHID-IDENTIFICATION

**Authority / publisher:** U.S. Forest Service Research and Development / Wiley-Blackwell  
**Title:** Centrarchid identification and natural history — M. L. Warren, Jr.  
**URL:** https://research.fs.usda.gov/treesearch/33889  
**Source type:** Federal research publication / technical species-identification and habitat synthesis  
**Reviewed date:** 2026-08-25  
**Notes:** Supports Ozark Bass as an elongate/slender `Ambloplites`, the irregular/freckled dark-spot pattern versus the lined/row pattern of Northern Rock Bass, upper White River Ozark occurrence, and clear rocky pool/creek/small-to-medium-river habitat with boulder/log/bank cover. Also supports the comparative body-depth distinction used in the pairwise relationship.

## MDC-BLUEGILL-TACTICS

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Sunfish: Tips For Bluegill Fishing  
**URL:** https://mdc.mo.gov/fishing/species/sunfish/sunfish-tips-bluegill-fishing  
**Source type:** Official state fisheries angling guidance  
**Reviewed date:** 2026-08-25  
**Notes:** Explicitly supports bobber-and-worm fishing as the most popular Bluegill technique, lightly weighted bottom fishing, tiny jigs/spinners, and slow presentations. Used to support Fixed Bobber Rig as Primary and Split-Shot Bait Rig as Alternative.

## MDC-LONGEAR-TACTICS

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Ask MDC — Longear Sunfish angling guidance  
**URL:** https://mdc.mo.gov/magazines/missouri-conservationist/2022-10/ask-mdc  
**Source type:** Official state conservation/fisheries angling guidance  
**Reviewed date:** 2026-08-25  
**Notes:** Supports worms and other small natural baits plus small spinners for Longear Sunfish on light tackle. Used to support Fixed Bobber Rig as Primary and Inline Spinner Setup as Alternative.

## MDC-GOGGLE-EYE-TACTICS

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Niangua River fishing prospects  
**URL:** https://mdc.mo.gov/fishing/fishing-prospects/areas/niangua-river  
**Source type:** Official state fisheries prospect / angling guidance  
**Reviewed date:** 2026-08-25  
**Notes:** Supports plastic grubs and worms/earthworms fished close to woody cover and boulders for goggle-eye. Combined with the species-specific Rock Bass/Ozark Bass habitat evidence, this supports Jighead + Soft Plastic as Primary and Split-Shot Bait Rig as Alternative for the two `Ambloplites` Wave 4 Fish.

## MDC-PANFISH-TACTICS-JAMES-REED

**Authority / publisher:** Missouri Department of Conservation  
**Title:** James A. Reed Memorial Wildlife Area Prospect Report  
**URL:** https://mdc.mo.gov/fishing/fishing-prospects/reports/james-reed-memorial-wildlife-area-prospect-report  
**Source type:** Official state fisheries prospect / angling guidance  
**Reviewed date:** 2026-08-25  
**Notes:** Supports Redear presentations near bottom/cover with worms or small jigs and Crappie presentations using minnows or jigs under a bobber near woody/rocky cover. Used with the canonical Rig library to support the approved Redear and Crappie starting guidance.

## MDC-CRAPPIE-JIG-BOBBER

**Authority / publisher:** Missouri Department of Conservation  
**Title:** Why Go to Wappapello?  
**URL:** https://mdc.mo.gov/magazines/conservationist/2006-03/why-go-wappapello  
**Source type:** Official state conservation/fisheries angling feature  
**Reviewed date:** 2026-08-25  
**Notes:** Documents single-jig tightlining around cover and jig-below-float presentations for Crappie. Supports Jighead + Soft Plastic and Slip Bobber Rig as Primary starting choices; Double-Jig Crappie Rig remains a curated Alternative from the canonical Rig library.

## USFWS-BLUEGILL-RAVER

**Authority / publisher:** U.S. Fish and Wildlife Service  
**Title:** Bluegill — Duane Raver illustration  
**URL:** https://www.fws.gov/media/bluegill-7  
**Source type:** Official federal public-domain scientific illustration / media provenance  
**Reviewed date:** 2026-08-25  
**Notes:** Duane Raver artwork commissioned by the U.S. Fish and Wildlife Service; verified user-supplied original is 1200 x 791 JPEG, SHA-256 `47549c1ed908523d2f46befcde66ade4a6541efea676535bee74fb1c094c41af`; Public Domain.

## USFWS-REDEAR-SUNFISH-RAVER

**Authority / publisher:** U.S. Fish and Wildlife Service  
**Title:** Redear Sunfish — Duane Raver illustration  
**URL:** https://www.fws.gov/media/redear-sunfish-5  
**Source type:** Official federal public-domain scientific illustration / media provenance  
**Reviewed date:** 2026-08-25  
**Notes:** Duane Raver artwork commissioned by the U.S. Fish and Wildlife Service; verified user-supplied original is 1200 x 751 JPEG, SHA-256 `acf6b5c112ca9dc3ca8c3c2d51ada830704185072170bdab6c3b3616df1e14bb`; Public Domain.

## USFWS-GREEN-SUNFISH-RAVER

**Authority / publisher:** U.S. Fish and Wildlife Service  
**Title:** Green Sunfish — Duane Raver illustration  
**URL:** https://www.fws.gov/media/green-sunfish  
**Source type:** Official federal public-domain scientific illustration / media provenance  
**Reviewed date:** 2026-08-25  
**Notes:** Duane Raver artwork commissioned by the U.S. Fish and Wildlife Service; verified user-supplied original is 1200 x 789 JPEG, SHA-256 `f54acc33200e16a158357677da52a26f0abfaf821914fa60c95ef5d6ce406e00`; Public Domain.

## USFWS-LONGEAR-SUNFISH-RAVER

**Authority / publisher:** U.S. Fish and Wildlife Service  
**Title:** Longear Sunfish — Duane Raver illustration  
**URL:** https://www.fws.gov/media/longear-sunfish  
**Source type:** Official federal public-domain scientific illustration / media provenance  
**Reviewed date:** 2026-08-25  
**Notes:** Duane Raver artwork commissioned by the U.S. Fish and Wildlife Service; verified user-supplied original is 1200 x 729 JPEG, SHA-256 `64082d75527142ca15f03a828f946800b8991c7623fe117459112ee88efbd505`; Public Domain.

## USFWS-WARMOUTH-RAVER

**Authority / publisher:** U.S. Fish and Wildlife Service  
**Title:** Warmouth — Duane Raver illustration  
**URL:** https://www.fws.gov/media/warmouth  
**Source type:** Official federal public-domain scientific illustration / media provenance  
**Reviewed date:** 2026-08-25  
**Notes:** Duane Raver artwork commissioned by the U.S. Fish and Wildlife Service; verified user-supplied original is 1200 x 701 JPEG, SHA-256 `fb7866701c329d72e54b2f9a6751f5d3a3ef4c5897386dad84983dff2fca0af5`; Public Domain.

## USFWS-BLACK-CRAPPIE-RAVER

**Authority / publisher:** U.S. Fish and Wildlife Service  
**Title:** Black Crappie — Duane Raver illustration  
**URL:** https://www.fws.gov/media/black-crappie-1  
**Source type:** Official federal public-domain scientific illustration / media provenance  
**Reviewed date:** 2026-08-25  
**Notes:** Duane Raver artwork commissioned by the U.S. Fish and Wildlife Service; verified user-supplied original is 1200 x 783 JPEG, SHA-256 `426e84f5c5a4caee0d1de0dc0a6bd6a4df0c646102cd99c346134e98a3867b49`; Public Domain.

## USFWS-WHITE-CRAPPIE-RAVER

**Authority / publisher:** U.S. Fish and Wildlife Service  
**Title:** White Crappie — Duane Raver illustration  
**URL:** https://www.fws.gov/media/white-crappie  
**Source type:** Official federal public-domain scientific illustration / media provenance  
**Reviewed date:** 2026-08-25  
**Notes:** Duane Raver artwork commissioned by the U.S. Fish and Wildlife Service; verified user-supplied original is 1200 x 765 JPEG, SHA-256 `f4d1211090cd8dc71fb06591f8572d8020a3ae097fef030fbc0f54cbdd9daa53`; Public Domain.

## PROJECT-NORTHERN-ROCK-BASS-GENERATED

**Authority / publisher:** Freshwater Fishing Companion — user-approved project media decision  
**Title:** Northern Rock Bass generated primary-identification illustration  
**URL:** N/A — project-controlled generated asset supplied directly by the user  
**Source type:** Project media provenance / documented one-time exception  
**Reviewed date:** 2026-08-25  
**Notes:** The one-time generated-media exception remains bounded to Northern Rock Bass. Historical approval recorded SHA-256 `43060979c0fc6035f66540c1d13eedc7c60449b9911008f1aca5c2232cd83a47`. The user supplied the selected visual again for this review package as a 1535 x 1024 PNG with transfer SHA-256 `a0f008be8c1fe8bdd8d6e200c8aec4243bb9edb6670ab1fff5c7dc07491656c5`; transfer-byte mismatch is preserved rather than misrepresented as hash equality. This generated asset is not labeled Public Domain.

## PROJECT-OZARK-BASS-GENERATED

**Authority / publisher:** Freshwater Fishing Companion — user-approved project media decision  
**Title:** Ozark Bass generated primary-identification illustration  
**URL:** N/A — project-controlled generated asset supplied directly by the user  
**Source type:** Project media provenance / documented one-time exception  
**Reviewed date:** 2026-08-25  
**Notes:** The one-time generated-media exception remains bounded to Ozark Bass. Historical approval recorded SHA-256 `d67c5933f43381a243659e5031d87dbe3d2db460af002fa5898de03a1598073f`. The user supplied the selected visual again for this review package as a 1535 x 1024 PNG with transfer SHA-256 `ccc895f312f33d3957f3041680e9e8e7b123d2d9084c60fa304636ecbb514167`; transfer-byte mismatch is preserved rather than misrepresented as hash equality. This generated asset is not labeled Public Domain.
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

## Walleye (`walleye`)

Regional Inclusion
- MDC-WALLEYE — Large streams throughout Missouri and stocked reservoir occurrence establish presence within the approved Southwest Missouri target region.

Taxonomy / Family
- AFS-NAMES-8
- MDC-WALLEYE

Identification
- ODWC-WALLEYE-SAUGER-SAUGEYE-ID
- KDWP-WALLEYE-SAUGER-SAUGEYE-ID
- MDC-WALLEYE

Habitat / Waterbody
- MDC-WALLEYE

Media Provenance
- USFWS-WALLEYE-RAVER

Rig Guidance / Targeting
- MNDNR-WALLEYE-TACTICS — Supports jig, slip-sinker live bait, and bobber presentations.
- ODWC-WALLEYE-SAUGEYE-TACTICS — Corroborates bottom-oriented Lindy-style, jighead, and bottom-bouncing spinner-harness presentations.

Taxonomy / Evidence Notes
- AFS-NAMES-8 and MDC use `Sander vitreus` in Percidae.

## Sauger (`sauger`)

Regional Inclusion
- ODWC-SAUGER — Neosho River occurrence establishes presence within the approved Northeast Oklahoma target region.

Taxonomy / Family
- AFS-NAMES-8
- MDC-SAUGER

Identification
- ODWC-WALLEYE-SAUGER-SAUGEYE-ID
- KDWP-WALLEYE-SAUGER-SAUGEYE-ID
- MDC-SAUGER

Habitat / Waterbody
- ODWC-SAUGER
- MDC-SAUGER

Aliases
- MDC-SAUGER

Media Provenance
- USFWS-SAUGER-RAVER

Rig Guidance / Targeting
- MDC-SAUGER — Supports slowly trolled minnows near bottom in swift rocky areas and establishes the strong current/bottom-contact context behind the approved guidance.
- ODWC-WALLEYE-SAUGEYE-TACTICS — Corroborates bottom-oriented jighead and live-bait presentation patterns within the Walleye/Sauger/Saugeye group.

Taxonomy / Evidence Notes
- Production aliases deliberately retain only `Sand Pike` even though MDC documents additional regional common names.

## Saugeye (`saugeye`)

Regional Inclusion
- KDWP-SOUTHEAST-SAUGEYE — Bone Creek Reservoir establishes a managed Saugeye fishery within the approved Southeast Kansas target region.

Taxonomy / Family
- AFS-NAMES-8 — Supports the canonical parent-species names.
- AFS-SAUGEYE-NOTATION — Corroborates `Sander vitreus × S. canadensis` parent order and hybrid notation.
- ODWC-SAUGEYE — Confirms Saugeye as a Walleye-Sauger hybrid in Percidae context.

Identification
- ODWC-WALLEYE-SAUGER-SAUGEYE-ID
- KDWP-WALLEYE-SAUGER-SAUGEYE-ID

Habitat / Waterbody
- ODWC-SAUGEYE
- KDWP-SOUTHEAST-SAUGEYE

Media Provenance
- VADWR-SAUGEYE-RAVER — Exact Saugeye artwork attribution to Duane Raver/USFWS.
- ODWC-SAUGEYE — Independently credits the matching Saugeye identification artwork to Duane Raver.

Rig Guidance / Targeting
- ODWC-WALLEYE-SAUGEYE-TACTICS — Supports bottom contact, jighead/soft-plastic, Lindy-style live bait, and bottom-bouncing spinner-harness presentations.
- KDWP-SOUTHEAST-SAUGEYE — Corroborates jigheads with plastics, deeper flats, and structure-oriented presentation.

Taxonomy / Evidence Notes
- Parent order follows the approved AFS-first project convention: `Sander vitreus × Sander canadensis`.
- Production primary uses the user-supplied transparent Duane Raver/USFWS Saugeye illustration. Virginia DWR/eRegulations establishes exact-artwork Raver/USFWS attribution and ODWC independently corroborates the artist. A dedicated FWS Saugeye media page was not located, so the source ledger preserves the full provenance chain rather than overstating a direct FWS landing-page record.
- The source already carries transparency, so no background removal is applied to the Saugeye illustration. Presentation consistency is provided by the same shared neutral reference-media surface used for Tackle components and the other production Fish.

## sauger-vs-walleye

Sauger distinction evidence
- ODWC-WALLEYE-SAUGER-SAUGEYE-ID
- KDWP-WALLEYE-SAUGER-SAUGEYE-ID
- MDC-SAUGER

Walleye distinction evidence
- ODWC-WALLEYE-SAUGER-SAUGEYE-ID
- KDWP-WALLEYE-SAUGER-SAUGEYE-ID

Notes
- The comparison leads with spiny-dorsal spotting and cheek scaling; body saddles are supporting evidence rather than a sole identifier.

## saugeye-vs-walleye

Saugeye distinction evidence
- ODWC-WALLEYE-SAUGER-SAUGEYE-ID
- KDWP-WALLEYE-SAUGER-SAUGEYE-ID

Walleye distinction evidence
- ODWC-WALLEYE-SAUGER-SAUGEYE-ID
- KDWP-WALLEYE-SAUGER-SAUGEYE-ID

Notes
- The comparison leads with dorsal-webbing spots/bars and cheek scaling rather than relying on color alone.

## sauger-vs-saugeye

Sauger distinction evidence
- ODWC-WALLEYE-SAUGER-SAUGEYE-ID
- KDWP-WALLEYE-SAUGER-SAUGEYE-ID
- MDC-SAUGER

Saugeye distinction evidence
- ODWC-WALLEYE-SAUGER-SAUGEYE-ID
- KDWP-WALLEYE-SAUGER-SAUGEYE-ID

Notes
- Both Fish have scaled cheeks, so the first diagnostic split is individual round Sauger dorsal spots versus the Saugeye combination of spots with bars/streaks in the webbing.

## Channel Catfish (`channel-catfish`)

Regional Inclusion
- MDC-CHANNEL-CATFISH — Statewide Missouri occurrence establishes presence within the approved Southwest Missouri target region.

Taxonomy / Family
- AFS-NAMES-8
- MDC-CHANNEL-CATFISH

Identification
- MDC-CHANNEL-CATFISH

Habitat / Waterbody
- MDC-CHANNEL-CATFISH

Media Provenance
- USFWS-CHANNEL-CATFISH-RAVER

Rig Guidance / Targeting
- MDC-CATFISH-BIG-RIVER — Supports the approved sliding-sinker bottom setup and explicitly says the same basic setup works for Channel Catfish when downsized.
- ODWC-CHANNEL-CATFISH-RIG — Supports the approved simple fixed-bobber starting presentation.

## Blue Catfish (`blue-catfish`)

Regional Inclusion
- ODWC-OOLOGAH-BLUE-CATFISH — Oologah Lake in northeast Oklahoma lists Blue Catfish among Fish Species of Interest, directly supporting target-region inclusion.

Taxonomy / Family
- AFS-NAMES-8
- MDC-BLUE-CATFISH

Identification
- MDC-BLUE-CATFISH

Habitat / Waterbody
- MDC-BLUE-CATFISH

Media Provenance
- USFWS-BLUE-CATFISH-RAVER

Rig Guidance / Targeting
- MDC-CATFISH-BIG-RIVER — Directly supports the sliding-sinker bottom presentation used by the canonical Basic Bottom Rig.

## Flathead Catfish (`flathead-catfish`)

Regional Inclusion
- MDC-FLATHEAD-CATFISH — Statewide appropriate-habitat occurrence, including reservoirs and large streams, establishes presence within the approved Southwest Missouri target region.

Taxonomy / Family
- AFS-NAMES-8
- MDC-FLATHEAD-CATFISH

Identification
- MDC-FLATHEAD-CATFISH

Habitat / Waterbody
- MDC-FLATHEAD-CATFISH

Media Provenance
- USFWS-FLATHEAD-CATFISH-RAVER

Rig Guidance / Targeting
- MDC-CATFISH-BIG-RIVER — Directly supports the sliding-sinker bottom presentation used by the canonical Basic Bottom Rig.

## Black Bullhead (`black-bullhead`)

Regional Inclusion
- MDC-BLACK-BULLHEAD — Nearly statewide Missouri distribution establishes presence within the approved Southwest Missouri target region.

Taxonomy / Family
- AFS-NAMES-8
- MDC-BLACK-BULLHEAD

Identification
- MDC-BLACK-BULLHEAD
- ODWC-BLACK-BULLHEAD

Habitat / Waterbody
- MDC-BLACK-BULLHEAD
- ODWC-BLACK-BULLHEAD

Media Provenance
- USFWS-BLACK-BULLHEAD-RAVER

Rig Guidance / Targeting
- MDC-BLACK-BULLHEAD — Documents bottom feeding and the quiet/muddy-water context behind the approved Basic Bottom Rig starting guidance.

## Yellow Bullhead (`yellow-bullhead`)

Regional Inclusion
- MDC-YELLOW-BULLHEAD — Widespread Missouri occurrence and strong Ozark representation establish presence within the approved Southwest Missouri target region.

Taxonomy / Family
- AFS-NAMES-8
- MDC-YELLOW-BULLHEAD

Identification
- MDC-YELLOW-BULLHEAD
- ODWC-YELLOW-BULLHEAD

Habitat / Waterbody
- MDC-YELLOW-BULLHEAD
- ODWC-YELLOW-BULLHEAD
- MNDNR-CATFISH-BIOLOGY — Corroborates clear weedy pond/lake and slow-stream use.

Media Provenance
- USFWS-YELLOW-BULLHEAD-RAVER

Rig Guidance / Targeting
- MDC-YELLOW-BULLHEAD — Supports close-to-bottom bait fishing in quiet vegetated habitats.

## blue-catfish-vs-channel-catfish

Blue Catfish distinction evidence
- MDC-BLUE-CATFISH

Channel Catfish distinction evidence
- MDC-CHANNEL-CATFISH

Notes
- The comparison leads with straight-versus-curved anal-fin edge; tail shape is explicitly not treated as diagnostic because both species have deeply forked tails.

## black-bullhead-vs-yellow-bullhead

Black Bullhead distinction evidence
- MDC-BLACK-BULLHEAD
- ODWC-BLACK-BULLHEAD

Yellow Bullhead distinction evidence
- MDC-YELLOW-BULLHEAD
- ODWC-YELLOW-BULLHEAD

Notes
- Chin-barbel color is the primary beginner diagnostic; tail-edge shape is supporting evidence.

## black-bullhead-vs-flathead-catfish

Black Bullhead distinction evidence
- MDC-BLACK-BULLHEAD

Flathead Catfish distinction evidence
- MDC-FLATHEAD-CATFISH

Notes
- The comparison leads with the Flathead Catfish's broad flattened head and projecting lower jaw versus the compact bullhead profile.

## flathead-catfish-vs-yellow-bullhead

Flathead Catfish distinction evidence
- MDC-FLATHEAD-CATFISH

Yellow Bullhead distinction evidence
- MDC-YELLOW-BULLHEAD

Notes
- The comparison leads with Flathead head/jaw shape; pale Yellow Bullhead chin barbels are supporting evidence.

## Largemouth Bass (`largemouth-bass`)

Regional Inclusion
- ODWC-LARGEMOUTH-BASS — Oklahoma occurrence establishes presence within the approved Northeast Oklahoma target region.

Taxonomy / Family
- AFS-NAMES-8
- AFS-LARGEMOUTH-2026
- MDC-LARGEMOUTH

Identification
- ODWC-LARGEMOUTH-BASS

Habitat / Waterbody
- ODWC-LARGEMOUTH-BASS

Media Provenance
- USFWS-LARGEMOUTH-BASS-RAVER

Rig Guidance / Targeting
- ODWC-LARGEMOUTH-BASS — Supports soft-plastic targeting around shallow vegetation and cover behind the approved Texas Rig starting guidance.

Taxonomy / Evidence Notes
- Canonical production identity follows AFS-NAMES-8: `Micropterus nigricans`. Former/synonymous `Micropterus salmoides` is retained here as provenance rather than as a common-name alias.

## Smallmouth Bass (`smallmouth-bass`)

Regional Inclusion
- ODWC-SMALLMOUTH-BASS — Oklahoma occurrence establishes presence within the approved Northeast Oklahoma target region.

Taxonomy / Family
- AFS-NAMES-8
- ODWC-SMALLMOUTH-BASS

Identification
- ODWC-SMALLMOUTH-BASS

Habitat / Waterbody
- ODWC-SMALLMOUTH-BASS

Aliases
- ODWC-SMALLMOUTH-BASS

Media Provenance
- USFWS-SMALLMOUTH-BASS-RAVER

Rig Guidance / Targeting
- ODWC-SMALLMOUTH-BASS — Supports compact lure/jig targeting in rock and current behind the approved Jighead + Soft Plastic guidance.

## Spotted Bass (`spotted-bass`)

Regional Inclusion
- ODWC-SPOTTED-BASS — Oklahoma occurrence establishes presence within the approved Northeast Oklahoma target region.

Taxonomy / Family
- AFS-NAMES-8
- ODWC-SPOTTED-BASS

Identification
- ODWC-SPOTTED-BASS

Habitat / Waterbody
- ODWC-SPOTTED-BASS

Aliases
- ODWC-SPOTTED-BASS

Media Provenance
- ODWC-SPOTTED-BASS

Rig Guidance / Targeting
- ODWC-SPOTTED-BASS — Supports jig targeting around rock, channel, current, and deeper structure.

Rights / Evidence Notes
- The selected ODWC illustration carries the exact-file rights caveat documented in the source catalog, Media registry, and Wave 3 workstream. It is not labeled independently verified Public Domain.

## White Bass (`white-bass`)

Regional Inclusion
- ODWC-WHITE-BASS — Oklahoma occurrence establishes presence within the approved Northeast Oklahoma target region.

Taxonomy / Family
- AFS-NAMES-8
- ODWC-WHITE-BASS

Identification
- ODWC-WHITE-BASS

Habitat / Waterbody
- ODWC-WHITE-BASS

Aliases
- ODWC-WHITE-BASS

Media Provenance
- USFWS-WHITE-BASS-RAVER

Rig Guidance / Targeting
- ODWC-WHITE-BASS — Supports jig, inline-spinner, and live-bait approaches for open-water schools and current.

## Striped Bass (`striped-bass`)

Regional Inclusion
- ODWC-STRIPED-BASS — Oklahoma occurrence establishes presence within the approved Northeast Oklahoma target region.

Taxonomy / Family
- AFS-NAMES-8
- ODWC-STRIPED-BASS

Identification
- ODWC-STRIPED-BASS

Habitat / Waterbody
- ODWC-STRIPED-BASS

Aliases
- ODWC-STRIPED-BASS

Media Provenance
- USFWS-STRIPED-BASS-RAVER

Rig Guidance / Targeting
- ODWC-STRIPED-BASS — Supports jig and live-bait approaches for open/deep water and current.

## Hybrid Striped Bass (`hybrid-striped-bass`)

Regional Inclusion
- ODWC-HYBRID-STRIPED-BASS — Oklahoma occurrence establishes presence within the approved Northeast Oklahoma target region.

Taxonomy / Family
- AFS-NAMES-8 — Supports the canonical parent-species names used in the hybrid notation.
- ODWC-HYBRID-STRIPED-BASS

Identification
- ODWC-HYBRID-STRIPED-BASS

Habitat / Waterbody
- ODWC-HYBRID-STRIPED-BASS

Aliases
- ODWC-HYBRID-STRIPED-BASS

Media Provenance
- ODWC-HYBRID-STRIPED-BASS

Rig Guidance / Targeting
- ODWC-HYBRID-STRIPED-BASS — Supports jig and live-bait approaches for schooling fish in open water and current.

Rights / Evidence Notes
- The selected ODWC illustration carries the exact-file rights caveat documented in the source catalog, Media registry, and Wave 3 workstream. It is not labeled independently verified Public Domain.

## largemouth-bass-vs-smallmouth-bass

Largemouth Bass distinction evidence
- ODWC-LARGEMOUTH-BASS

Smallmouth Bass distinction evidence
- ODWC-SMALLMOUTH-BASS

Notes
- The comparison leads with mouth-hinge position and dorsal connection; side markings support the identification, and color alone is not decisive.

## largemouth-bass-vs-spotted-bass

Largemouth Bass distinction evidence
- ODWC-LARGEMOUTH-BASS

Spotted Bass distinction evidence
- ODWC-SPOTTED-BASS

Notes
- The comparison leads with mouth-hinge position and the deep-versus-connected dorsal split; rows of spots below the lateral stripe support Spotted Bass identification.

## smallmouth-bass-vs-spotted-bass

Smallmouth Bass distinction evidence
- ODWC-SMALLMOUTH-BASS

Spotted Bass distinction evidence
- ODWC-SPOTTED-BASS

Notes
- The comparison leads with mouth-hinge position and vertical bars versus a lateral stripe with rows of spots below it.

## striped-bass-vs-white-bass

Striped Bass distinction evidence
- ODWC-STRIPED-BASS

White Bass distinction evidence
- ODWC-WHITE-BASS

Notes
- Body profile and one-versus-two tongue-patch structure lead the comparison; horizontal stripes are supporting evidence.

## hybrid-striped-bass-vs-white-bass

Hybrid Striped Bass distinction evidence
- ODWC-HYBRID-STRIPED-BASS

White Bass distinction evidence
- ODWC-WHITE-BASS

Notes
- Intermediate body depth and broken stripe pattern separate the hybrid from the deeper, arched White Bass. Hybrid tongue-patch presentation is not treated as solely deterministic.

## hybrid-striped-bass-vs-striped-bass

Hybrid Striped Bass distinction evidence
- ODWC-HYBRID-STRIPED-BASS

Striped Bass distinction evidence
- ODWC-STRIPED-BASS

Notes
- The hybrid's deeper intermediate body and broken stripes contrast with the Striped Bass's slender profile, mostly continuous stripes, and two distinct parallel tongue patches.

## Bluegill (`bluegill`)

Regional Inclusion
- MDC-BLUEGILL — Statewide Missouri occurrence establishes presence within the approved Southwest Missouri target region.

Taxonomy / Family
- AFS-NAMES-8
- MDC-BLUEGILL

Identification
- MDC-BLUEGILL

Habitat / Waterbody
- MDC-BLUEGILL

Media Provenance
- USFWS-BLUEGILL-RAVER

## Redear Sunfish (`redear-sunfish`)

Regional Inclusion
- MDC-REDEAR-SUNFISH — Natural southern-Missouri occurrence and widespread pond/reservoir stocking establish presence within the approved Southwest Missouri target region.

Taxonomy / Family
- AFS-NAMES-8
- MDC-REDEAR-SUNFISH

Identification
- MDC-REDEAR-SUNFISH

Habitat / Waterbody
- MDC-REDEAR-SUNFISH

Aliases
- MDC-REDEAR-SUNFISH

Media Provenance
- USFWS-REDEAR-SUNFISH-RAVER

## Green Sunfish (`green-sunfish`)

Regional Inclusion
- MDC-GREEN-SUNFISH — Statewide Missouri occurrence establishes presence within the approved Southwest Missouri target region.

Taxonomy / Family
- AFS-NAMES-8
- MDC-GREEN-SUNFISH

Identification
- MDC-GREEN-SUNFISH

Habitat / Waterbody
- MDC-GREEN-SUNFISH

Aliases
- MDC-GREEN-SUNFISH

Media Provenance
- USFWS-GREEN-SUNFISH-RAVER

## Longear Sunfish (`longear-sunfish`)

Regional Inclusion
- MDC-LONGEAR-SUNFISH — Southern-Missouri and Ozark-stream occurrence establishes presence within the approved Southwest Missouri target region.

Taxonomy / Family
- AFS-NAMES-8
- MDC-LONGEAR-SUNFISH

Identification
- MDC-LONGEAR-SUNFISH

Habitat / Waterbody
- MDC-LONGEAR-SUNFISH

Aliases
- MDC-LONGEAR-SUNFISH

Media Provenance
- USFWS-LONGEAR-SUNFISH-RAVER

## Northern Rock Bass (`northern-rock-bass`)

Regional Inclusion
- MDC-NORTHERN-ROCK-BASS — Southwestern Ozark occurrence establishes presence within the approved Southwest Missouri target region.

Taxonomy / Family
- AFS-NAMES-8
- MDC-NORTHERN-ROCK-BASS

Identification
- MDC-NORTHERN-ROCK-BASS

Habitat / Waterbody
- MDC-NORTHERN-ROCK-BASS

Aliases
- MDC-NORTHERN-ROCK-BASS
- MDC-GOGGLE-EYE-RULE

Media Provenance
- PROJECT-NORTHERN-ROCK-BASS-GENERATED

## Warmouth (`warmouth`)

Regional Inclusion
- MDC-WARMOUTH — Southern/eastern Missouri occurrence establishes presence within the approved Southwest Missouri target region.

Taxonomy / Family
- AFS-NAMES-8
- MDC-WARMOUTH

Identification
- MDC-WARMOUTH

Habitat / Waterbody
- MDC-WARMOUTH

Media Provenance
- USFWS-WARMOUTH-RAVER

## Ozark Bass (`ozark-bass`)

Regional Inclusion
- USGS-OZARK-BASS — Native upper White River drainage occurrence in Missouri and Arkansas directly covers the approved Southwest Missouri/Northwest Arkansas target region.

Taxonomy / Family
- FWS-OZARK-BASS
- USGS-OZARK-BASS

Identification
- USFS-CENTRARCHID-IDENTIFICATION

Habitat / Waterbody
- USFS-CENTRARCHID-IDENTIFICATION

Aliases
- MDC-GOGGLE-EYE-RULE

Media Provenance
- PROJECT-OZARK-BASS-GENERATED

Taxonomy / Evidence Notes
- USGS records that Ozark Bass was formerly treated as `A. rupestris`; the current canonical application identity remains `Ambloplites constellatus`.

## Black Crappie (`black-crappie`)

Regional Inclusion
- MDC-BLACK-CRAPPIE — Large Ozark reservoir occurrence establishes presence within the approved Southwest Missouri target region.

Taxonomy / Family
- AFS-NAMES-8
- MDC-BLACK-CRAPPIE

Identification
- MDC-BLACK-CRAPPIE

Habitat / Waterbody
- MDC-BLACK-CRAPPIE

Media Provenance
- USFWS-BLACK-CRAPPIE-RAVER

## White Crappie (`white-crappie`)

Regional Inclusion
- MDC-WHITE-CRAPPIE — Near-statewide Missouri occurrence establishes presence within the approved Southwest Missouri target region.

Taxonomy / Family
- AFS-NAMES-8
- MDC-WHITE-CRAPPIE

Identification
- MDC-WHITE-CRAPPIE

Habitat / Waterbody
- MDC-WHITE-CRAPPIE

Aliases
- MDC-WHITE-CRAPPIE

Media Provenance
- USFWS-WHITE-CRAPPIE-RAVER

## bluegill-vs-redear-sunfish

Bluegill distinction evidence
- MDC-BLUEGILL

Redear Sunfish distinction evidence
- MDC-REDEAR-SUNFISH

Notes
- The comparison leads with the Redear's orange/red opercular-flap spot versus the Bluegill's unspotted black flap, then uses pectoral shape, blue chin coloration, dorsal blotch, and body pattern as supporting field cues.

## bluegill-vs-green-sunfish

Bluegill distinction evidence
- MDC-BLUEGILL

Green Sunfish distinction evidence
- MDC-GREEN-SUNFISH

Notes
- The comparison leads with small-versus-large mouth and deeper-versus-thicker/elongated body profile, then uses pectoral shape, facial markings, and fin margins as supporting cues.

## northern-rock-bass-vs-warmouth

Northern Rock Bass distinction evidence
- MDC-NORTHERN-ROCK-BASS

Warmouth distinction evidence
- MDC-WARMOUTH

Notes
- The strongest structural distinction is 6 versus 3 anal spines; 12 versus 10 dorsal spines, Northern Rock Bass eye size/parallel spot rows, and Warmouth cheek lines provide supporting cues.

## northern-rock-bass-vs-ozark-bass

Northern Rock Bass distinction evidence
- MDC-NORTHERN-ROCK-BASS
- USFS-CENTRARCHID-IDENTIFICATION

Ozark Bass distinction evidence
- USFS-CENTRARCHID-IDENTIFICATION

Notes
- The comparison leads with Northern Rock Bass's regular parallel side-spot rows versus Ozark Bass's irregular freckling, with the thicker-versus-more-elongate body profile as supporting evidence.

## black-crappie-vs-white-crappie

Black Crappie distinction evidence
- MDC-BLACK-CRAPPIE

White Crappie distinction evidence
- MDC-WHITE-CRAPPIE

Notes
- The comparison uses the official irregular-speckle versus vertical-bar pattern and the 7–8 versus usual-6 dorsal-spine distinction.

# Related Documents

- `data-model/02-FISH.md`
- `data-model/09-RELATIONSHIPS.md`
- `MEDIA_GUIDE.md`
- `DECISIONS.md`
- `DEVELOPMENT_WORKFLOW.md`
- `EXTERNAL_REFERENCE_MAINTENANCE.md`
- `../archive/workstreams/fish-guide/FISH-GUIDE-PHASE-0.md`
- `../archive/workstreams/fish-guide/FISH-GUIDE-PHASE-0-AUDIT-REVISIONS.md`
# Wave 4 Fish-to-Rig Guidance Review — 2026-08-25

The Wave 4 review adds curated `FISH_RIG_GUIDANCE` records for all nine Sunfish & Crappie Fish after browser review revealed that the Fish Detail `Rigs to Start With` section was absent. Guidance remains Decision Knowledge; it does not alter canonical Rig `useCases[]` or add inverse Fish lists to Rig records.

Approved guidance:

- Bluegill — Primary: Fixed Bobber Rig; Alternative: Split-Shot Bait Rig. Source anchors: `MDC-BLUEGILL-TACTICS`, `MDC-BLUEGILL`.
- Redear Sunfish — Primary: Split-Shot Bait Rig; Alternative: Fixed Bobber Rig. Source anchors: `MDC-PANFISH-TACTICS-JAMES-REED`, `MDC-REDEAR-SUNFISH`.
- Green Sunfish — Primary: Fixed Bobber Rig; Alternative: Jighead + Soft Plastic. Source anchor: `MDC-GREEN-SUNFISH`; the jighead option is a curated compact-lure alternative derived from the species' cover-oriented habitat and the canonical Rig's presentation role.
- Longear Sunfish — Primary: Fixed Bobber Rig; Alternative: Inline Spinner Setup. Source anchors: `MDC-LONGEAR-TACTICS`, `MDC-LONGEAR-SUNFISH`.
- Northern Rock Bass — Primary: Jighead + Soft Plastic; Alternative: Split-Shot Bait Rig. Source anchors: `MDC-GOGGLE-EYE-TACTICS`, `MDC-NORTHERN-ROCK-BASS`.
- Warmouth — Primary: Jighead + Soft Plastic; Alternative: Fixed Bobber Rig. Source anchor: `MDC-WARMOUTH`; recommendation is a curated mapping to the species' low-current vegetation/stump-cover habitat and predatory diet, not a claim that the source prescribes those FCC Rig names.
- Ozark Bass — Primary: Jighead + Soft Plastic; Alternative: Split-Shot Bait Rig. Source anchors: `MDC-GOGGLE-EYE-TACTICS`, `USGS-OZARK-BASS`, `USFS-CENTRARCHID-IDENTIFICATION`; the tactic mapping uses the documented close behavioral/habitat relationship to other goggle-eye plus Ozark Bass rocky-cover habitat.
- Black Crappie — Primary: Jighead + Soft Plastic and Slip Bobber Rig; Alternative: Double-Jig Crappie Rig. Source anchors: `MDC-PANFISH-TACTICS-JAMES-REED`, `MDC-CRAPPIE-JIG-BOBBER`, `MDC-BLACK-CRAPPIE`.
- White Crappie — Primary: Jighead + Soft Plastic and Slip Bobber Rig; Alternative: Double-Jig Crappie Rig. Source anchors: `MDC-PANFISH-TACTICS-JAMES-REED`, `MDC-CRAPPIE-JIG-BOBBER`, `MDC-WHITE-CRAPPIE`.

The recommendation set respects the provisional relationship maxima in `data-model/09-RELATIONSHIPS.md` and every referenced Rig resolves to an active canonical Rig.

