# Freshwater Fishing Companion

**Document:** 09-RELATIONSHIPS.md  
**Document Revision:** 0.9.13  
**Document Status:** Approved  
**Implementation Status:** VALIDATED CURRENT RELATIONSHIPS + G7-XMAP IMPLEMENTED / APPROVED / VERIFIED — 20 Fish identification pairs; 27 Fish guidance records; 177 intrinsic Compatibility relationships (54/69/54) + 13 Canonical Requirement Satisfaction rules  
**Decision Baseline:** D003, D024, D025, D026, D037, D043, D044, D056, D057–D061, D069, FISH-001–FISH-007  
**Last Updated:** 2026-09-16

---

# Purpose

This document defines how canonical entities, Decision Knowledge, and User Knowledge relate within Freshwater Fishing Companion.

Relationships use stable identifiers and follow the site's semantic single-owner rule. The Fish Version 1 relationship milestone is complete, and the Recommendation Prerequisites Foundation implemented the typed intrinsic Compatibility domain. The approved 20-pair Fish identification graph is fully implemented, Fish-to-Rig guidance is populated for the 27 Fish with approved guidance records, and `data/compatibility.js` contains exactly 177 active intrinsic Compatibility relationships.

---

# Knowledge Layers

## Layer 1 — Reference Knowledge

Curated facts and reusable fishing concepts, including implemented Fish, Rigs, Knots, Tackle, Media, Techniques, Conditions, Lure/Bait, and intrinsic Compatibility Relationships.

Fish pairwise field-identification relationships are Reference Knowledge owned by `FISH_IDENTIFICATION_RELATIONSHIPS`. The registry is implemented and expands with each approved Fish production package.

## Layer 2 — Decision Knowledge

Guidance derived from Reference Knowledge and context. Current examples include Knot task guidance, Reel & Line Setup guidance, and curated Fish-to-Rig recommendations owned by `FISH_RIG_GUIDANCE`. The Fish guidance registry is implemented and expands through deliberate per-Fish evaluation.

## Layer 3 — User Knowledge

Information owned or maintained by the angler, including future profiles, preferences, favorites, My Tackle, fishing setups, and catch records. The current lightweight Rig-readiness local state is transitional and is not authoritative My Tackle ownership.

---

# Site-Wide Semantic Ownership Rule

D056 establishes the permanent rule:

> Every canonical fact or relationship has exactly one authoritative owner, and that owner must be the entity or domain for which the information is intrinsically meaningful.

Ownership follows meaning, not rendering, search, reverse navigation, caching, or implementation convenience.

When the UI needs the inverse of an existing canonical relationship, derive it unless a separately meaningful relationship or explicit architecture decision justifies additional storage.

A future cache or index may duplicate derived values for performance only when it remains non-authoritative and reproducible from the canonical owner.

---

# Relationship Classifications

## Required

The source record cannot function correctly without the relationship.

Example:

```text
Rig.componentRequirements[].tackleId
    -> canonical Tackle
```

## Optional

The relationship adds context while the source entity remains valid without it.

Examples:

```text
Rig.variationIds[]
    -> related Rig
```

and Fish-to-Rig guidance, which may be absent when no defensible curated recommendation exists.

## Derived Inverse

The canonical relationship is stored once and reverse navigation is computed.

Example:

```text
Canonical:
Rig.componentRequirements[].tackleId

Derived:
Tackle -> Used In -> matching active Rigs
```

The same principle applies to Fish relationships: reverse Fish-to-Fish comparison access derives from one stored identification relationship, and any future Rig-to-Fish presentation derives from Fish-to-Rig guidance.

## Deferred

The domain or relationship is approved conceptually, but its semantic owner or storage shape is not yet approved. Deferred relationships must not be represented by empty production arrays or speculative IDs.

---

# Validated Current Relationships

## Rig → Tackle

`Rig.componentRequirements[]` is the authoritative source for Rig-to-Tackle usage. Each requirement references canonical Tackle through `tackleId`.

Tackle does not store inverse `rigIds[]` solely for `Used In`. Reverse navigation is derived from active Rig requirements.

Canonical Tackle owns identity and display name. A Rig requirement owns only Rig-specific usage context such as required/optional status, quantity, order, recommended size/configuration, assembly role, and setup note.

A separate requirement-level identifier is not required by the current feature set.

---

## Media → Entity Attachment

Media owns canonical entity attachment through:

```text
Media.ownerType
Media.ownerId
```

Canonical Fish, Rig, Knot, Tackle, Technique, Condition, and Lure/Bait records must not maintain inverse media-ID arrays solely to locate Media that already identifies its owner.

The Repository Audit Section 4 Tackle cleanup is **implemented, validated, and closed**: transitional Tackle `mediaIds[]` duplicate storage was removed from production. Historical versions remain available through Git history.

Multiple Media records may share an owner when a demonstrated feature requires multiple assets. Any role, ordering, or presentation-priority semantics belong to Media or an explicitly justified relationship entity.

For Fish production, relationship-owned comparison Media uses:

```text
ownerType: "fish-identification"
ownerId: <FISH_IDENTIFICATION_RELATIONSHIPS.id>
role: "comparison"
```

Species-specific primary/supplemental Fish Media remains owned by `ownerType: "fish"` + canonical Fish ID.

---

## Rig → Knot

`Rig.knotApplications[]` is the authoritative source for contextual Rig-to-Knot recommendations.

Each real tied connection contains exactly:

```text
label
connectionType
recommendedKnotIds[]
notes
```

Rules:

- Rig owns the physical connection context.
- Only real tied connections receive an entry; hardware-only joins do not.
- `recommendedKnotIds[]` is selective and nonempty.
- Referenced Knot IDs resolve to active canonical Knot records.
- Knot owns reusable tying instructions.
- Rig `notes` contains only Rig-specific connection context.
- Runtime code does not infer Knot relationships by parsing `assemblySteps` prose.

Reverse Knot detail navigation such as **Where You'll Use It** is derived from active Rig Knot applications rather than stored again on Knot.

The current 21-Rig library contains 32 real tied connection points.

---

## Core Learning Group → Rig

Core membership and order are owned by the curated registry:

```text
CORE_RIG_IDS
    -> ordered canonical Rig IDs
```

Individual Rig records do not store duplicate Core membership/order fields solely for presentation.

---

# Fish Production Relationships — Version 1 Complete

Fish Guide Phase 0 and Version 1 production are closed. `FISH_IDENTIFICATION_RELATIONSHIPS` contains the complete approved 20-pair Version 1 graph. `FISH_RIG_GUIDANCE` contains 27 active Fish guidance records, including all 9 Wave 4 Fish and their 20 approved recommendations. Fish-to-Rig guidance remains optional per Fish and continues to be owned here rather than duplicated into Fish or Rig records.

## Fish Identification / Confusion Relationships

Canonical owner:

```text
data/fish-identification.js
FISH_IDENTIFICATION_RELATIONSHIPS
```

Knowledge layer: **Reference Knowledge**.

Record shape:

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

### Cardinality / meaning

- exactly two distinct Fish per relationship,
- relationships exist only for genuine beginner field-identification confusion,
- relationship semantics are unordered/bidirectional,
- one stored relationship supports navigation and presentation from either Fish,
- intrinsic single-Fish traits remain on `Fish.identificationTraits[]`,
- pairwise “how do I tell these apart?” wording belongs only to the relationship.

### Deterministic relationship ID — FISH-001

The relationship ID is derived from its two canonical Fish IDs:

1. sort the lowercase ASCII canonical Fish IDs in ascending lexicographic order,
2. store `fishIds[]` in exactly that same order,
3. join the two IDs using `-vs-`.

Runtime consumers must read `fishIds[]`; they must not parse the relationship ID to recover participants.

### Identification validation

Reject:

- invalid or unresolved Fish IDs,
- self-pairs,
- duplicate relationship IDs,
- duplicate unordered Fish pairs,
- reversed/noncanonical `fishIds[]` ordering,
- relationship ID / participant mismatch,
- empty distinctions,
- any distinction whose `fishId` is not one of the two participants,
- any relationship lacking at least one nonempty distinction for each participant.

Multiple distinction entries per Fish are allowed when useful.

Relationship runtime activation requires both referenced Fish to be active and the relationship itself to pass integrity validation.

---

## Fish → Rig Guidance

Canonical owner:

```text
data/fish-rig-guidance.js
FISH_RIG_GUIDANCE
```

Knowledge layer: **Decision Knowledge**.

Guidance is optional per Fish. A Fish does not require a guidance record merely to be valid or active.

There is **no separate guidance record ID**. `fishId` identifies the record for the canonical Fish.

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

Approved priority vocabulary:

```text
Primary
Alternative
```

### Guidance rules

- at most one active guidance record per Fish,
- active guidance requires at least one Primary recommendation,
- every referenced `fishId` resolves,
- every referenced `rigId` resolves to an active canonical Rig,
- each Rig may appear only once in a Fish guidance record,
- the same Rig may not appear in both priorities,
- every recommendation uses exactly `Primary` or `Alternative`,
- every recommendation requires a meaningful nonempty reason,
- Fish and Rig records do not duplicate the relationship,
- if future Rig detail needs reverse “Fish this Rig can start with” presentation, derive it from `FISH_RIG_GUIDANCE` rather than adding `Rig.fishIds[]`.

### Provisional recommendation maxima

Current working validator limits:

```text
Primary:     1–3
Alternative: 0–3
```

These limits are **provisionally approved** and should be enforced while they remain the project standard. They may be deliberately revised if real production authoring demonstrates that a different limit materially improves the model. Do not silently exceed them.

## Fish ↔ Rig Suitability — G4-RIF-1B.1 / 1B.2 APPROVED

Knowledge layer: **Reference Knowledge**.

Fish↔Rig Suitability is distinct from `FISH_RIG_GUIDANCE`. A positive suitability edge means the Rig is a defensible ordinary method for intentionally targeting the Fish under at least one plausible Version 1 fishing context, assuming an appropriate compatible Lure/Bait and Technique are selected. It does not encode current-context suitability, preference, ranking, score, reason, confidence, availability, legality, or simplicity.

`FISH_RIG_GUIDANCE` remains the narrower curated Fish Guide teaching subset. Every active Fish Guide Rig recommendation must ultimately resolve to a positive Fish↔Rig Suitability relationship, but most suitability relationships need not appear in Fish Guide guidance.

Suitability must be configuration-aware where one canonical Rig family contains materially distinct configurations. A positive edge for one Direct-Tie Lure Setup configuration does not authorize any other Direct-Tie configuration for that Fish. Exact configuration reference shape and exact record identity are deferred to G4-RIF-1B.2.

No inverse `fishIds[]` array is added to Rig and no suitability list is duplicated into Fish merely for convenience. Reverse navigation or indexing derives from the canonical suitability owner.

Authored-scope semantics follow the established completeness rule: before the complete Version 1 Fish↔Rig suitability scope is declared complete, a missing relationship is not authoritative exclusion. After completeness, presence admits the Rig/configuration to the Fish-specific Version 1 candidate pool; absence means unsupported as an ordinary Version 1 targeting method for that Fish, not physically impossible or incapable of catching that Fish.

**G4-RIF-1B.1 status: COMPLETE / APPROVED WITH REVISION ALLOWED.**

### G4-RIF-1B.2 — Exact relationship granularity + record contract — APPROVED

Working production owner:

```text
data/fish-rig-suitability.js
FISH_RIG_SUITABILITY_RELATIONSHIPS
```

Knowledge layer: **Reference Knowledge**.

One positive record represents one **Fish + Rig + optional canonical Rig configuration** tuple. The exact Version 1 field order is:

```text
id
fishId
rigId
rigConfigurationId
createdVersion
lastModifiedVersion
isActive
```

Granularity rules:

- an ordinary Rig with no `configurations[]` uses `rigConfigurationId: null`;
- a Rig with materially distinct canonical configurations requires an exact non-null `rigConfigurationId`;
- configured Rigs do not permit a null all-configurations edge;
- configuration identity is scoped to the referenced parent Rig;
- suitability does not duplicate `lureBaitId`; applicable Lure/Bait identity resolves through the canonical Rig/configuration contract;
- suitability does not carry `relationshipType`, participant-type fields, priority, reason, score, strength, rank, confidence, Conditions, Habitat, Techniques, difficulty, availability, legality, or other Recommendation fields.

Deterministic IDs are:

```text
fish-rig-suitability-<fishId>-to-<rigId>
fish-rig-suitability-<fishId>-to-<rigId>-config-<rigConfigurationId>
```

Runtime consumers read participant fields and must not parse record IDs. Reverse Rig→Fish views derive from the canonical registry rather than adding inverse Fish arrays to Rig.

Repository-integrity validation must reject unresolved/inactive active participants, duplicate IDs, duplicate semantic tuples, ID/participant mismatch, a non-null configuration on a non-configured Rig, a null configuration on a configured Rig, or a configuration that does not resolve inside the referenced Rig.

Every active Fish Guide recommendation must resolve to a positive suitability relationship. For configured Rigs, validation resolves the guidance's explicit Lure/Bait reference through the Rig's canonical configuration and requires that exact configuration edge. Existing `FISH_RIG_GUIDANCE` remains Decision Knowledge and is not migrated merely to replace its meaningful Lure/Bait reference with a configuration ID.

Zero positive relationships for a Fish are valid if the completed Version 1 evidence audit supports that result. No negative relationship registry is approved. Missing-edge exclusion becomes authoritative only after the complete Version 1 Fish↔Rig authored scope is explicitly declared complete.

**G4-RIF-1B.2 status: COMPLETE / APPROVED WITH REVISION ALLOWED.** Exact next action: **G4-RIF-1B.3 — 30-Fish Fish↔Rig Suitability authored-set audit**.

### G4-RIF-1B.3 — 30-Fish Fish↔Rig Suitability Authored-Set Audit — COMPLETE / APPROVED WITH REVISION ALLOWED

Batch 1 — **Bass (6 Fish)** is **APPROVED WITH ALLOWED REVISIONS**. The approved batch contains exactly **92 positive Fish↔Rig suitability edges**. Direct-Tie Lure Setup edges are configuration-specific; no configurationless Direct-Tie edge is authorized. The approved Batch 1 sets are:

- **Largemouth Bass — 22:** Fixed Bobber Rig; Slip Bobber Rig; Texas Rig; Jighead + Soft Plastic; Direct-Tie / Inline Spinner; Direct-Tie / Spinnerbait; Direct-Tie / Crankbait; Direct-Tie / Jerkbait; Direct-Tie / Spoon; Wacky Rig; Ned Rig; Weightless Soft-Plastic Rig; Drop Shot Rig; Carolina Rig; Neko Rig; Shaky Head Rig; Free Rig; Jika Rig; Split-Shot Bait Rig; Weighted Swimbait Hook Rig; Tube Jig Rig; Punch / Pegged Texas Rig.
- **Smallmouth Bass — 20:** Texas Rig; Jighead + Soft Plastic; Direct-Tie / Inline Spinner; Direct-Tie / Spinnerbait; Direct-Tie / Crankbait; Direct-Tie / Jerkbait; Direct-Tie / Spoon; Wacky Rig; Ned Rig; Weightless Soft-Plastic Rig; Drop Shot Rig; Carolina Rig; Neko Rig; Shaky Head Rig; Free Rig; Jika Rig; Split-Shot Bait Rig; Weighted Swimbait Hook Rig; Tube Jig Rig; Live-Bait Slip-Sinker Rig.
- **Spotted Bass — 19:** Texas Rig; Jighead + Soft Plastic; Direct-Tie / Inline Spinner; Direct-Tie / Spinnerbait; Direct-Tie / Crankbait; Direct-Tie / Jerkbait; Direct-Tie / Spoon; Wacky Rig; Ned Rig; Weightless Soft-Plastic Rig; Drop Shot Rig; Carolina Rig; Neko Rig; Shaky Head Rig; Free Rig; Jika Rig; Split-Shot Bait Rig; Weighted Swimbait Hook Rig; Tube Jig Rig.
- **White Bass — 11:** Slip Bobber Rig; Basic Bottom Rig; Jighead + Soft Plastic; Direct-Tie / Inline Spinner; Direct-Tie / Crankbait; Direct-Tie / Jerkbait; Direct-Tie / Spoon; Live-Bait Slip-Sinker Rig; Double-Jig Crappie Rig; Split-Shot Bait Rig; Weighted Swimbait Hook Rig.
- **Striped Bass — 11:** Slip Bobber Rig; Basic Bottom Rig; Jighead + Soft Plastic; Direct-Tie / Crankbait; Direct-Tie / Jerkbait; Direct-Tie / Spoon; Live-Bait Slip-Sinker Rig; Three-Way Rig; Double-Jig Crappie Rig; Split-Shot Bait Rig; Weighted Swimbait Hook Rig.
- **Hybrid Striped Bass — 9:** Slip Bobber Rig; Basic Bottom Rig; Jighead + Soft Plastic; Direct-Tie / Crankbait; Direct-Tie / Jerkbait; Direct-Tie / Spoon; Live-Bait Slip-Sinker Rig; Split-Shot Bait Rig; Weighted Swimbait Hook Rig.

Deliberate Batch 1 boundaries remain: Bottom-Bouncer / Spinner Rig is excluded for all six Bass; Three-Way Rig is positive only for Striped Bass; Punch / Pegged Texas Rig is positive only for Largemouth Bass; Double-Jig Crappie Rig is positive only for White Bass and Striped Bass. All existing Bass Fish Guide Rig recommendations are contained in the approved suitability sets. These 92 edges remain revision-allowed until the complete 30-Fish authored scope is closed.

Batch 2 — **Sunfish & Crappie (9 Fish)** is **APPROVED WITH ALLOWED REVISIONS**. The approved batch contains exactly **64 positive Fish↔Rig suitability edges**. Direct-Tie Lure Setup edges are configuration-specific; no configurationless Direct-Tie edge is authorized. The approved Batch 2 sets are:

- **Bluegill — 6:** Fixed Bobber Rig; Slip Bobber Rig; Jighead + Soft Plastic; Direct-Tie / Inline Spinner; Split-Shot Bait Rig; Tube Jig Rig.
- **Redear Sunfish — 7:** Fixed Bobber Rig; Slip Bobber Rig; Basic Bottom Rig; Jighead + Soft Plastic; Direct-Tie / Inline Spinner; Split-Shot Bait Rig; Tube Jig Rig.
- **Green Sunfish — 6:** Fixed Bobber Rig; Slip Bobber Rig; Jighead + Soft Plastic; Direct-Tie / Inline Spinner; Split-Shot Bait Rig; Tube Jig Rig.
- **Longear Sunfish — 6:** Fixed Bobber Rig; Jighead + Soft Plastic; Direct-Tie / Inline Spinner; Direct-Tie / Spinnerbait; Split-Shot Bait Rig; Tube Jig Rig.
- **Northern Rock Bass — 6:** Texas Rig; Jighead + Soft Plastic; Direct-Tie / Spinnerbait; Direct-Tie / Crankbait; Split-Shot Bait Rig; Tube Jig Rig.
- **Warmouth — 9:** Fixed Bobber Rig; Slip Bobber Rig; Basic Bottom Rig; Jighead + Soft Plastic; Direct-Tie / Inline Spinner; Direct-Tie / Crankbait; Direct-Tie / Spoon; Split-Shot Bait Rig; Tube Jig Rig.
- **Ozark Bass — 6:** Texas Rig; Jighead + Soft Plastic; Direct-Tie / Spinnerbait; Direct-Tie / Crankbait; Split-Shot Bait Rig; Tube Jig Rig.
- **Black Crappie — 9:** Fixed Bobber Rig; Slip Bobber Rig; Jighead + Soft Plastic; Direct-Tie / Inline Spinner; Direct-Tie / Crankbait; Direct-Tie / Spoon; Double-Jig Crappie Rig; Split-Shot Bait Rig; Tube Jig Rig.
- **White Crappie — 9:** Fixed Bobber Rig; Slip Bobber Rig; Jighead + Soft Plastic; Direct-Tie / Inline Spinner; Direct-Tie / Crankbait; Direct-Tie / Spoon; Double-Jig Crappie Rig; Split-Shot Bait Rig; Tube Jig Rig.

Deliberate Batch 2 boundaries remain: Longear does not inherit Slip Bobber merely because it is mechanically usable; Northern Rock Bass and Ozark Bass remain a tighter goggle-eye set rather than inheriting the full black-bass catalog; Inline Spinner is not added to the goggle-eye set; Warmouth does not inherit the broader bass finesse family; Crappie does not inherit Jerkbait, Live-Bait Slip-Sinker, Three-Way, Bottom-Bouncer / Spinner, Weighted Swimbait Hook, or bass-oriented finesse/cover rigs. All existing Fish Guide Rig recommendations for these nine Fish are contained in the approved suitability sets.

Batch 3 — **Catfish + Walleye/Sauger (8 Fish)** is **APPROVED WITH ALLOWED REVISIONS**. The approved batch contains exactly **35 positive Fish↔Rig suitability edges**. Direct-Tie Lure Setup edges are configuration-specific; no configurationless Direct-Tie edge is authorized. The approved Batch 3 sets are:

- **Channel Catfish — 4:** Fixed Bobber Rig; Basic Bottom Rig; Three-Way Rig; Split-Shot Bait Rig.
- **Blue Catfish — 4:** Fixed Bobber Rig; Basic Bottom Rig; Direct-Tie / Crankbait; Three-Way Rig.
- **Flathead Catfish — 1:** Basic Bottom Rig.
- **Black Bullhead — 2:** Basic Bottom Rig; Split-Shot Bait Rig.
- **Yellow Bullhead — 2:** Basic Bottom Rig; Split-Shot Bait Rig.
- **Walleye — 9:** Slip Bobber Rig; Jighead + Soft Plastic; Direct-Tie / Crankbait; Direct-Tie / Jerkbait; Direct-Tie / Spoon; Live-Bait Slip-Sinker Rig; Three-Way Rig; Bottom-Bouncer / Spinner Rig; Weighted Swimbait Hook Rig.
- **Saugeye — 6:** Jighead + Soft Plastic; Direct-Tie / Crankbait; Direct-Tie / Jerkbait; Live-Bait Slip-Sinker Rig; Bottom-Bouncer / Spinner Rig; Weighted Swimbait Hook Rig.
- **Sauger — 7:** Jighead + Soft Plastic; Direct-Tie / Crankbait; Direct-Tie / Jerkbait; Live-Bait Slip-Sinker Rig; Three-Way Rig; Bottom-Bouncer / Spinner Rig; Weighted Swimbait Hook Rig.

Deliberate Batch 3 boundaries remain: Flathead Catfish does not receive Three-Way merely because it can occasionally take a drifting presentation; bullheads are not expanded into the broader catfish catalog; and Texas, Carolina, Drop Shot, and Weightless Soft-Plastic are not admitted to the Walleye/Saugeye/Sauger sets merely because soft swimbaits can be rigged multiple ways. All existing Fish Guide Rig recommendations for these eight Fish are contained in the approved suitability sets.

Batch 4 — **Trout + Remaining Species (7 Fish)** is **APPROVED WITH ALLOWED REVISIONS**. The approved batch contains exactly **18 positive Fish↔Rig suitability edges**. Direct-Tie Lure Setup edges are configuration-specific; no configurationless Direct-Tie edge is authorized. The approved Batch 4 sets are:

- **Rainbow Trout — 7:** Fixed Bobber Rig; Jighead + Soft Plastic; Direct-Tie / Inline Spinner; Direct-Tie / Crankbait; Direct-Tie / Jerkbait; Direct-Tie / Spoon; Split-Shot Bait Rig.
- **Brown Trout — 7:** Fixed Bobber Rig; Jighead + Soft Plastic; Direct-Tie / Inline Spinner; Direct-Tie / Crankbait; Direct-Tie / Jerkbait; Direct-Tie / Spoon; Split-Shot Bait Rig.
- **Common Carp — 2:** Basic Bottom Rig; Split-Shot Bait Rig.
- **Freshwater Drum — 2:** Basic Bottom Rig; Split-Shot Bait Rig.
- **Paddlefish — 0:** no current canonical Rig is admitted. Paddlefish ordinarily requires a specialized targeting setup not represented by the current Version 1 Rig library.
- **Longnose Gar — 0:** no current canonical Rig is admitted. Longnose Gar ordinarily requires a specialized targeting setup not represented by the current Version 1 Rig library.
- **Spotted Gar — 0:** no current canonical Rig is admitted. Spotted Gar ordinarily requires a specialized targeting setup not represented by the current Version 1 Rig library.

Deliberate Batch 4 boundaries remain: Trout does not inherit Slip Bobber or Basic Bottom merely because those methods are mechanically possible; Carp and Freshwater Drum are not expanded into broad artificial-lure catalogs; and Paddlefish, Longnose Gar, and Spotted Gar are deliberate zero-edge results because their ordinary intentional targeting often depends on specialized rigs/methods outside the current canonical Rig library. These zero-edge results are not audit failures and do not authorize forced substitution with an existing Rig. They are explicit input to the next Rig Input Adequacy review, which must decide whether Version 1 needs additional specialized canonical Rigs or should preserve those Fish as unsupported by the current Rig candidate library.

All existing Fish Guide Rig recommendations across the 30-Fish scope are contained in the approved suitability sets. Batch totals are Bass **92**, Sunfish & Crappie **64**, Catfish + Walleye/Sauger **35**, and Trout + Remaining Species **18**, for exactly **209 positive Fish↔Rig suitability edges** across all **30 Version 1 Fish**.

**G4-RIF-1B.3 status:** COMPLETE / APPROVED WITH REVISION ALLOWED — **30 of 30 Fish / exactly 209 positive edges approved**. The complete Version 1 authored scope is now explicitly declared complete. For this scope, a missing edge is authoritative exclusion from ordinary Version 1 Fish-specific Rig eligibility; it does not mean the Rig could never catch the Fish or that a specialized method outside the current Rig library is invalid.

**G4-RIF-1B Fish↔Rig Suitability Adequacy: CLOSED / PASS.** Exact next action: **G4-RIF-1C — Rig Input Adequacy**. G4-DK-1A remains HELD until Rig Input Adequacy and the combined adequacy test complete.

### Optionality / activation

Every Version 1 Fish is deliberately evaluated for guidance during authoring. If no defensible curated recommendation exists, omit the guidance record and omit `Rigs to Start With` from Fish Detail.

Missing guidance does not block Fish activation. Any guidance record that does exist must validate.

---

# Fish Media Relationships

Fish-specific Media role/readiness rules are implemented for migrated production Fish:

```text
ownerType: "fish"
ownerId: <canonical Fish ID>
role: "primary-identification" | "supplemental-identification"
```

and relationship comparison Media:

```text
ownerType: "fish-identification"
ownerId: <identification relationship ID>
role: "comparison"
```

Every production-ready active Fish must resolve to exactly one active `primary-identification` Media record. Supplemental Fish Media and relationship comparison Media are optional.

Runtime ownership derives from `ownerType` / `ownerId` / `role`; do not parse Media IDs or filenames to infer ownership.

---

# Decision Knowledge Relationships

Decision Knowledge may reference canonical entities without changing their schemas.

Current examples:

- Knot task guidance owns task-first discovery vocabulary and curated task-to-Knot ordering.
- Reel & Line Setup guidance owns its guided decision paths and references canonical Knot IDs where tying instruction is required.
- `FISH_RIG_GUIDANCE` owns Fish-to-Rig curated recommendation priority and reason for Fish whose production packages provide guidance.

These registries do not make their workflow fields part of canonical Knot, Rig, Fish, or Tackle entities.

Future recommendation relationships should follow the same ownership test: contextual ranking, rationale, confidence, and suitability belong to Decision Knowledge when they answer **what should I do in this context?** rather than an intrinsic canonical fact.

---

# G4-RIF Habitat / Waterbody Correspondence — APPROVED / PENDING IMPLEMENTATION

G4-RIF-1A approves explicit authored correspondence between stable Fish-owned environmental Reference Knowledge and current-context Conditions. These correspondence relationships are **not** Intrinsic Compatibility and carry no Fish preference, candidate eligibility, contextual suitability, weighting, ranking, confidence, or Recommendation score. Missing correspondence means only that no equivalence is authored; it is not incompatibility.

The exact Habitat↔Condition correspondence set is:

| Habitat | Condition ID(s) |
|---|---|
| Aquatic Vegetation | `vegetation` |
| Wood / Brush | `wood-brush` |
| Open Water | `open-water` |
| Shallow Water | `shallow` |
| Deep Water | `deep` |
| Still / Slow Water | `current-none`; `current-light` |
| Flowing Water | `current-light`; `current-moderate`; `current-strong` |
| Rock / Boulder Structure | `rock-boulder` |
| Channel | `channel` |
| Pool / Deep Hole | `pool-deep-hole` |
| Rocky / Gravel Bottom | `bottom-rocky-gravel` |
| Sandy Bottom | `bottom-sandy` |
| Muddy / Silty Bottom | `bottom-muddy-silty` |

`current-light` intentionally corresponds to both **Still / Slow Water** and **Flowing Water**. The overlap expresses a semantic transition zone only; downstream Recommendation ranking must not treat the duplicate correspondence as double evidence or extra weight.

No Habitat counterpart is authored for Light Cover, Heavy Cover, Dock / Man-made Cover, Drop-off / Deep Structure, Access/Position, Water Clarity, Season, Light/Sky, or other situational Conditions merely because those Conditions exist.

Fish waterbody correspondence is stored/treated separately from Habitat correspondence because Fish waterbody association remains a separate Fish fact. The exact bridge is:

| Fish waterbody value | Waterbody Condition ID |
|---|---|
| Pond | `pond` |
| Lake | `lake` |
| Reservoir | `reservoir` |
| River | `river` |
| Creek / Stream | `creek-stream` |

Fish `Creek` normalizes to **Creek / Stream** during the later migration. This bridge also conveys environmental equivalence only and must not create preference, ranking, weighting, eligibility, or score.

These approved correspondence sets are pending production implementation. Their physical storage shape and validator mechanics may be refined during migration so long as the exact semantics and stable IDs above are preserved. No runtime mapping by label, string similarity, or fuzzy inference is authorized.

---

# Intrinsic Compatibility Relationships — IMPLEMENTED / VALIDATED

D069 approves one typed Compatibility Relationship domain for intrinsic pairwise compatibility among:

- Rig ↔ Lure/Bait,
- Rig ↔ Technique,
- Lure/Bait ↔ Technique.

Compatibility means the two canonical concepts are legitimately usable together under normal use. It does **not** mean they are best for a Fish/Condition, that the angler owns the required items, or that the combination is executable now.

Locked V1 record shape:

```text
id
relationshipType
sourceType
sourceId
targetType
targetId
createdVersion
lastModifiedVersion
isActive
```

RP-C4 locks canonical ordering and deterministic IDs by relationship family:

- `rig-lure-bait`: Rig first, Lure/Bait second;
- `rig-technique`: Rig first, Technique second;
- `lure-bait-technique`: Lure/Bait first, Technique second.

Deterministic record ID format is exactly `<relationship-type>-<source-id>-<target-id>`. Examples: `rig-lure-bait-texas-rig-stick-worm`, `rig-technique-texas-rig-hop`, and `lure-bait-technique-stick-worm-deadstick`.

The semantic and production contract is locked:

- deterministic relationship IDs;
- exactly one stored record per intrinsic pair;
- reverse navigation derived rather than duplicated;
- active runtime compatibility requires the relationship and both referenced entities to be active;
- no `score`, `strength`, `priority`, `rank`, `confidence`, Fish applicability, Condition applicability, or contextual recommendation weighting;
- missing compatibility during staged authoring is not automatically incompatibility until the applicable authored scope is declared complete;
- three-way Rig + Lure/Bait + Technique validity is derived from active pairwise Compatibility intersection; no canonical compound compatibility record is created in V1.

Fish ↔ Technique, Fish ↔ Lure/Bait, and Condition-specific Fish/Rig/Lure/Bait/Technique suitability are contextual Recommendation Decision Knowledge under D069 rather than intrinsic Compatibility Relationship records. Fish intrinsic habitat/waterbody facts remain Fish-owned.

My Tackle owned-item mappings and current-availability state are User Knowledge and remain separate from Reference compatibility. Search or UI needs do not authorize inverse compatibility arrays on participating entities.


## Locked authored scope — 177 exact V1 records

The complete V1 Compatibility production set is exactly **177 active intrinsic relationships**: **54 `rig-lure-bait` + 69 `rig-technique` + 54 `lure-bait-technique`**. `data/compatibility.js` implements that exact set; this document owns the canonical relationship contract.

### Rig ↔ Lure/Bait — exactly 54

- Stick Worm → Texas Rig; Jighead Soft-Plastic Rig; Wacky Rig; Ned Rig; Weightless Soft-Plastic Rig; Drop Shot Rig; Carolina Rig; Neko Rig; Shaky Head Rig; Free Rig; Jika Rig; Punch / Pegged Texas Rig.
- Craw → Texas Rig; Jighead Soft-Plastic Rig; Carolina Rig; Free Rig; Jika Rig; Punch / Pegged Texas Rig.
- Creature Bait → Texas Rig; Carolina Rig; Free Rig; Jika Rig; Punch / Pegged Texas Rig.
- Paddle-tail Swimbait → Texas Rig; Jighead Soft-Plastic Rig; Weightless Soft-Plastic Rig; Weighted Swimbait Hook Rig.
- Tube → Texas Rig; Weightless Soft-Plastic Rig; Drop Shot Rig; Tube Jig Rig.
- Spinnerbait → Direct-Tie Lure Setup.
- Crankbait → Direct-Tie Lure Setup.
- Jerkbait → Direct-Tie Lure Setup.
- Inline Spinner → Direct-Tie Lure Setup.
- Spoon → Direct-Tie Lure Setup.
- Minnow → Fixed Bobber Rig; Slip Bobber Rig; Basic Bottom Rig; Live-Bait Slip-Sinker Rig; Three-Way Rig; Bottom-Bouncer / Spinner Rig; Split-Shot Bait Rig.
- Nightcrawler → Fixed Bobber Rig; Slip Bobber Rig; Basic Bottom Rig; Live-Bait Slip-Sinker Rig; Three-Way Rig; Bottom-Bouncer / Spinner Rig; Split-Shot Bait Rig.
- Cricket → Fixed Bobber Rig; Slip Bobber Rig; Basic Bottom Rig; Split-Shot Bait Rig.

### Rig ↔ Technique — exactly 69

- Fixed Bobber Rig → Float Presentation; Natural Drift.
- Slip Bobber Rig → Float Presentation; Natural Drift.
- Basic Bottom Rig → Bottom Presentation; Tight-Line Presentation.
- Texas Rig → Hop; Drag; Shake; Deadstick.
- Jighead Soft-Plastic Rig → Swim; Hop; Lift and Fall; Vertical Jig.
- Direct-Tie Lure Setup → Steady Retrieve; Stop-and-Go Retrieve; Twitch and Pause; Lift and Fall; Vertical Jig; Troll.
- Wacky Rig → Shake; Deadstick.
- Ned Rig → Drag; Hop; Shake; Deadstick; Swim.
- Weightless Soft-Plastic Rig → Swim; Twitch and Pause; Deadstick.
- Drop Shot Rig → Shake; Deadstick.
- Carolina Rig → Drag.
- Live-Bait Slip-Sinker Rig → Bottom Presentation; Drift; Troll; Tight-Line Presentation.
- Three-Way Rig → Bottom Presentation; Natural Drift.
- Neko Rig → Hop; Drag; Shake; Deadstick.
- Shaky Head Rig → Shake; Drag; Hop; Deadstick.
- Free Rig → Lift and Fall; Hop; Drag.
- Double-Jig Crappie Rig → Vertical Jig; Lift and Fall.
- Jika Rig → Hop; Drag; Lift and Fall.
- Punch / Pegged Texas Rig → Lift and Fall.
- Bottom-Bouncer / Spinner Rig → Troll; Drift.
- Split-Shot Bait Rig → Natural Drift; Tight-Line Presentation; Bottom Presentation.
- Weighted Swimbait Hook Rig → Swim; Steady Retrieve; Stop-and-Go Retrieve.
- Tube Jig Rig → Hop; Drag; Lift and Fall; Vertical Jig; Swim.

### Lure/Bait ↔ Technique — exactly 54

- Stick Worm → Deadstick; Shake; Hop; Drag; Swim; Twitch and Pause.
- Craw → Hop; Drag; Shake; Deadstick; Lift and Fall.
- Creature Bait → Hop; Drag; Shake; Deadstick; Lift and Fall.
- Paddle-tail Swimbait → Swim; Steady Retrieve; Stop-and-Go Retrieve.
- Tube → Hop; Drag; Lift and Fall; Vertical Jig; Swim.
- Spinnerbait → Steady Retrieve; Stop-and-Go Retrieve.
- Crankbait → Steady Retrieve; Stop-and-Go Retrieve; Troll.
- Jerkbait → Twitch and Pause; Steady Retrieve.
- Inline Spinner → Steady Retrieve; Troll.
- Spoon → Steady Retrieve; Stop-and-Go Retrieve; Lift and Fall; Vertical Jig; Troll.
- Minnow → Natural Drift; Float Presentation; Tight-Line Presentation; Bottom Presentation; Drift; Troll.
- Nightcrawler → Natural Drift; Float Presentation; Tight-Line Presentation; Bottom Presentation; Drift; Troll.
- Cricket → Natural Drift; Float Presentation; Tight-Line Presentation; Bottom Presentation.

These scopes represent normal reusable compatibility, not all mechanically possible manipulation.

A relationship family/scope becomes authoritative for absence only after all approved records are present and validation declares that authored scope complete. Before completeness, a missing record is not automatically incompatibility. After completeness, a missing record is unsupported intrinsic compatibility for V1.

Production validation hard-fails on orphan references, invalid relationship/participant types, duplicate IDs, duplicate semantic pairs, reversed duplicates, inactive referenced entities attached to active Compatibility, missing approved authored relationships, unapproved extras, and contextual Recommendation fields leaking into Compatibility.

Direct-Tie Lure Setup may carry the union of Techniques supported across its approved configurations. That Rig-level union does not make every Direct-Tie Lure/Bait configuration compatible with every Direct-Tie Technique; valid three-part combinations require all applicable pairwise relationships.

# Canonical Requirement Satisfaction Relationships — APPROVED CONTRACT / NOT IMPLEMENTED

G7-XMAP-1A establishes **Canonical Requirement Satisfaction** as a distinct Layer-1 Reference Knowledge relationship family owned here under D056. It answers whether an item already carrying an explicit valid canonical source mapping may truthfully fulfill another canonical requirement without adding a redundant User Knowledge mapping. This relationship is distinct from intrinsic Compatibility: Compatibility says two concepts may be used together, while Requirement Satisfaction says one canonical concept may fulfill the requirement for another.

Approved Version 1 rule semantics:

- satisfaction rules are explicit positive allow-rules; absence of a rule cannot establish substitution,
- rules are directional and do not imply the reverse,
- rules are not transitively chained by default; every automated source-to-target satisfaction edge must be explicitly approved,
- rules may be unconditional canonical-to-canonical relationships or qualified relationships whose truth also requires an approved fishing-relevant My Tackle family characteristic,
- the universal rule remains Reference Knowledge while the actual qualifying owned-item characteristic remains User Knowledge,
- an owned or temporary/current-availability item must first have an explicit valid MT-1C/D canonical source mapping before a rule can apply,
- applying a rule does not create, change, or persist another My Tackle mapping and does not revise MT-1D's at-most-one-mapping-per-canonical-domain boundary,
- satisfaction establishes functional eligibility only; CA-4 hard family constraints and later Recommendation Exact/Preferred versus Usable classification and ranking remain separate derived behavior,
- names, aliases, categories, `relatedTackleIds[]`, item-family labels, commercial metadata, free text, and superficial physical similarity are never satisfaction rules.

Qualified rules are specifically permitted for cases such as a Convertible Fixed-or-Slip Float satisfying an alternate canonical float requirement when the owned Float's approved Operating Mode characteristic proves that capability. This avoids inventing duplicate canonical identities or requiring duplicate Tackle-domain mappings.

## G7-XMAP-1B — Approved Version 1 Edge Inventory

G7-XMAP-1B approves exactly **13 positive directional satisfaction rules**. Each rule requires the effectively available owned/temporary item to carry the explicit valid source mapping identified below before the bridge may establish the target requirement.

### Unconditional Lure/Bait -> broader Tackle — exactly 8

- `lure-bait:stick-worm` -> `tackle:soft-plastic`
- `lure-bait:craw` -> `tackle:soft-plastic`
- `lure-bait:creature-bait` -> `tackle:soft-plastic`
- `lure-bait:paddle-tail-swimbait` -> `tackle:soft-plastic`
- `lure-bait:tube` -> `tackle:soft-plastic`
- `lure-bait:minnow` -> `tackle:bait`
- `lure-bait:nightcrawler` -> `tackle:bait`
- `lure-bait:cricket` -> `tackle:bait`

These are explicit identity rules. The `soft-plastic` Lure/Bait category does not itself create satisfaction, and other present or future Lure/Bait records do not inherit these edges by category, name, family, or similarity.

### Unconditional specific Tackle -> broader Tackle — exactly 3

- `tackle:ned-jighead` -> `tackle:jighead`
- `tackle:shaky-head-jighead` -> `tackle:jighead`
- `tackle:tube-jighead` -> `tackle:jighead`

These rules are one-way. Generic `tackle:jighead` never satisfies a specialized Jighead requirement solely through this bridge. Applicable Jighead-family hard constraints still apply under CA-4.

### Qualified Convertible Float satisfaction — exactly 2

- `tackle:fixed-bobber` -> `tackle:slip-float` **only when** the effectively available item is governed by the approved Float family and its Operating Mode is **Convertible Fixed-or-Slip**.
- `tackle:slip-float` -> `tackle:fixed-bobber` **only when** the effectively available item is governed by the approved Float family and its Operating Mode is **Convertible Fixed-or-Slip**.

The two Float directions are separate rules rather than inferred symmetry. Fixed-only and Slip-only Floats do not gain alternate satisfaction, and Pattern/Form does not prove Operating Mode. Serialized qualification semantics are now settled by G7-XMAP-1C; exact routine implementation property naming remains refinement allowed.

### Deliberate Version 1 non-substitution boundaries

The following are deliberate absence/guardrail semantics, not negative-edge records:

- `tackle:bait` and `tackle:soft-plastic` remain sibling requirement meanings. The five approved soft-plastic Lure/Bait identities do **not** also satisfy `tackle:bait`, despite the current legacy `bait` description being broad enough to mention artificial material. Any later Reference copy reconciliation must preserve this approved requirement boundary unless G7-XMAP is explicitly revised.
- Spinnerbait, Crankbait, Jerkbait, Inline Spinner, and Spoon do not satisfy generic `bait` or `soft-plastic`. `lure-bait:inline-spinner` does not satisfy legacy `tackle:inline-spinner` merely because the labels match; those domains own different semantic roles.
- Version 1 approves no specialized-Hook -> generic-`hook` bridge rules. `worm-hook`, `wacky-hook`, and `weighted-swimbait-hook` do not automatically broaden to `hook`; existing `worm-hook` / `weighted-swimbait-hook` non-substitution remains controlling.
- Shared My Tackle family membership never creates substitution by itself. In particular, Bobber Stop and Weight Peg remain distinct; Stop Bead does not automatically satisfy generic Bead; Snap Swivel or Duo-Lock Snap does not automatically satisfy Barrel Swivel; and distinct ordinary Weight concepts do not substitute merely because their mechanics overlap.
- Integrated/subordinate constituents do not decompose into separate requirement satisfaction. Jigheads do not separately satisfy Hook or ordinary Weight; Spinner Harnesses do not separately satisfy their embedded Hook/Leader/Bead/Connector/Float parts; weighted Floats do not separately satisfy ordinary Weight; and Bottom Bouncers do not separately satisfy ordinary Weight.
- Planned canonical reconciliations `offset-worm-hook` -> `worm-hook`, `split-shot` -> `line-mounted-sinker`, and `fixed-sinker` + `ringed-sinker` -> `external-eye-sinker` are Reference migrations and must not be implemented as enduring satisfaction edges.

No negative-edge registry is approved. For bridge evaluation, absence of an approved positive rule means the bridge cannot establish the additional target requirement.

**G7-XMAP-1B status: COMPLETE / APPROVED WITH REVISION ALLOWED.** The Version 1 positive edge inventory is frozen at exactly 13 rules.

## G7-XMAP-1C — Approved Serialization + Validation Contract

G7-XMAP-1C approves the production serialization and validation boundary for exactly the G7-XMAP-1B edge set. Exact release-version strings and routine implementation naming refinements remain allowed; they must not change the approved semantic shape, edge inventory, or evaluation behavior.

### Production owner

Canonical Requirement Satisfaction remains separate from intrinsic Compatibility. The working production owner is:

```text
data/canonical-requirement-satisfaction.js
CANONICAL_REQUIREMENT_SATISFACTION_RELATIONSHIPS
```

No inverse arrays or duplicate My Tackle relationship storage are authorized. The Reference registry is the canonical runtime owner; validator expected-ID assertions are validation fixtures rather than a second semantic owner.

### Version 1 record shape

Every record uses this canonical field order:

```text
id
relationshipType
sourceType
sourceId
targetType
targetId
qualification
createdVersion
lastModifiedVersion
isActive
```

Version 1 constraints:

- `relationshipType` is `canonical-requirement-satisfaction`;
- `sourceType` is `lure-bait` or `tackle`;
- `targetType` is `tackle`;
- the 11 unconditional rules use `qualification: null`;
- the 2 Convertible Float rules use the single approved qualification form below;
- lifecycle/version fields follow established Reference relationship conventions.

Representative unconditional record, with release-version strings illustrative until implementation:

```js
{
    id: "canonical-requirement-satisfaction-lure-bait-stick-worm-to-tackle-soft-plastic",
    relationshipType: "canonical-requirement-satisfaction",
    sourceType: "lure-bait",
    sourceId: "stick-worm",
    targetType: "tackle",
    targetId: "soft-plastic",
    qualification: null,
    createdVersion: "<production-version>",
    lastModifiedVersion: "<production-version>",
    isActive: true
}
```

### Qualified-rule representation

Version 1 supports only this bounded qualifier semantic for the two approved Convertible Float directions:

```js
qualification: {
    type: "item-family-characteristic-equals",
    itemFamily: "float",
    characteristic: "operating-mode",
    value: "convertible-fixed-or-slip"
}
```

`characteristic` is a semantic characteristic identifier, not an arbitrary application-object property path. G7-XMAP-1C does not authorize a generalized predicate/operator language. Future ranges, set membership, compound predicates, additional item families, or additional qualifier types require explicit architecture approval. Custom, Unknown, missing, descriptive, or inferred characteristic data cannot establish the qualifier.

### Deterministic directional identity and ordering

The deterministic relationship ID is:

```text
canonical-requirement-satisfaction-<sourceType>-<sourceId>-to-<targetType>-<targetId>
```

Qualification is not part of relationship identity. Version 1 permits at most one stored record for an exact directional source/target tuple. A reverse-direction record is not a duplicate when independently approved; therefore both Convertible Float directions are valid authored records and neither implies the other. Runtime consumers read participant fields and must not parse the ID to recover participants.

The production registry is sorted in ascending lexicographic `id` order. Stored order has no priority, preference, strength, ranking, or Recommendation meaning.

### Runtime evaluation

For an effectively available owned or temporary item and an availability-bearing canonical requirement:

1. Resolve the item's explicit valid MT-1C/D FCC Reference mapping.
2. If that mapping directly equals the requested canonical requirement, direct canonical satisfaction applies without the bridge.
3. Otherwise inspect active Canonical Requirement Satisfaction records matching that explicit mapping as source and the requested requirement as target.
4. An unconditional record may establish bridge eligibility when lifecycle/reference checks pass.
5. A qualified record additionally requires the actual effective item to positively establish the approved family characteristic.
6. Bridge evaluation is strictly one-hop and stops after that single edge. A bridge-derived target never becomes a new source mapping, so no recursive or transitive closure occurs.
7. Applicable CA-4 hard family constraints still apply. Exact/Preferred versus Usable Functional classification and later Recommendation ranking remain separate derived behavior.

The bridge does not create, alter, or persist My Tackle mappings.

### Runtime activation

A satisfaction rule may participate in runtime matching only when:

- the relationship has `isActive: true`;
- source and target references resolve to active canonical entities of their declared types;
- the effective item has the explicit valid source mapping;
- any qualification is positively established from approved family User Knowledge;
- applicable CA-4 hard constraints pass.

Inactive/unresolved Reference targets preserve the underlying owned User Knowledge but cannot establish automated requirement satisfaction.

### Repository-integrity validation

Validation is added to the existing canonical validator:

```text
tools/validate_repository_integrity.js
```

No second relationship validator is approved. For the Version 1 production set, integrity validation hard-fails on:

- any relationship count other than exactly 13;
- a missing approved deterministic relationship ID;
- any unapproved extra relationship;
- duplicate IDs or duplicate directional source/target tuples;
- malformed deterministic IDs or ID/participant mismatch;
- incorrect exact field order or invalid relationship/participant types;
- unresolved source or target references;
- active rules referencing inactive participants;
- inactive records within the locked Version 1 authored set;
- source-to-itself satisfaction;
- non-null qualification on one of the 11 unconditional rules;
- absent/malformed qualification on either Convertible Float rule;
- any Version 1 qualifier other than Float + Operating Mode = Convertible Fixed-or-Slip under the approved equality qualifier type;
- score, strength, priority, rank, confidence, or other Recommendation fields;
- negative/prohibition relationship records;
- specialized-Hook -> generic-`hook`, soft-plastic -> generic-`bait`, embedded-constituent, same-family heuristic, or migration-as-satisfaction edges not present in the approved 13-rule set.

The validator may carry the exact expected 13 deterministic IDs to enforce authored-set completeness. That expected set is a structural assertion; the production Reference registry remains the sole runtime relationship owner.

**G7-XMAP-1C status: COMPLETE / APPROVED WITH REVISION ALLOWED / PRODUCTION IMPLEMENTED / APPROVED / VERIFIED.** The 13-rule Canonical Requirement Satisfaction registry and one-hop runtime bridge landed at `31547b18f8576f0a94631cd65ffddd4113c9a6b6`; Repository Integrity #119 and GitHub Pages #607 passed. No generalized rule engine, arbitrary property-path evaluation, inferred symmetry, transitive closure, negative rules, or Recommendation scoring is approved.

# Search Relationships

Search should identify the strongest intended entity first. Connected knowledge can then expose pertinent breadth.

Search metadata must not become a second canonical owner of relationship facts. Search consumes canonical owners, Decision Knowledge, or deliberately derived indexes.

A weak or incidental relationship is not by itself a reason for an entity to appear as a primary search result.

D061 requires scope filtering before relevance ranking. Helper/examples shown inside scoped searches must likewise remain valid for that exact eligible set; they may not imply cross-domain or broader-scope relationships that the current search cannot return.

---

# My Tackle and Rig Readiness

Canonical Tackle defines functional tackle concepts. Future My Tackle defines actual persistent user ownership.

When My Tackle becomes authoritative, Rig Readiness will derive buildability from the requirement plus effective current availability. A directly mapped item may satisfy the requirement itself; an approved Canonical Requirement Satisfaction rule may establish an additional target requirement without duplicating that universal relationship into User Knowledge:

```text
Effective available My Tackle / temporary item
    -> explicit valid FCC source mapping
    -> optional approved Canonical Requirement Satisfaction rule
    -> Rig.componentRequirements[].tackleId
```

Until then, the existing lightweight local readiness state is transitional.

Permanent rules:

- Rig Readiness may read ownership but may not silently create it.
- Temporary availability may satisfy a current build without becoming persistent ownership.
- Search, Recommendations, borrowed tackle, inferred usage, and prior readiness checkmarks do not create My Tackle records.
- Persistent ownership changes require explicit My Tackle ownership-management workflows.

---

# Referential Integrity

For implemented and approved production relationship domains, validate as applicable:

- every Rig component `tackleId` resolves to canonical Tackle,
- every Rig `recommendedKnotIds[]` entry resolves to active canonical Knot,
- every `CORE_RIG_IDS` entry resolves to one active canonical Rig and appears once,
- every active Media entity attachment resolves according to the owning domain's lifecycle rules,
- Fish identification relationship participants/distinctions resolve and obey FISH-001 deterministic pair rules,
- Fish-to-Rig guidance Fish/Rig references resolve and obey optionality/cardinality/priority/reason rules,
- every production-ready migrated Fish has exactly one active primary-identification Media relationship,
- ordinary production relationship IDs are not used as forward-planning placeholders.

For the implemented Compatibility Relationship domain, validation additionally enforces valid relationship types, deterministic IDs, correct participant entity types, duplicate-pair prevention, active-participant runtime gating, exact authored-set coverage, and the absence of contextual recommendation fields. During any future staged expansion, the affected compatibility family/scope must be explicitly declared complete before absence is treated as authoritative incompatibility.

The current production Rig library contains 23 active Rigs, including Direct-Tie Lure Setup, Weighted Swimbait Hook Rig, Tube Jig Rig, and Split-Shot Bait Rig.

---

# Fish Production Staging

Do not require every approved Fish relationship to be active on every intermediate production commit.

FISH-003 permits staged activation. Each migrated/additive Fish or dependency-safe group must satisfy the applicable relationship/media/source/readiness contract for that package.

Closed Fish relationship packages include Trout, Gar, Production Wave 1, Production Wave 2, Production Wave 3 — Bass, and Production Wave 4 — Sunfish & Crappie. Wave 3 provenance is preserved in `../../archive/workstreams/fish-guide/FISH-WAVE-3-BASS.md`; Wave 4 provenance is preserved in `../../archive/workstreams/fish-guide/FISH-WAVE-4-SUNFISH-CRAPPIE.md`. The complete 20-pair Version 1 graph is committed, desktop/mobile validated, post-push repository-integrity verified, and closed.

Final Fish Version 1 completion separately requires:

- the locked 30-Fish library,
- the approved 20-pair identification graph,
- required primary-identification Media coverage,
- complete Fish source evidence,
- all applicable repository-integrity checks.

---

# User Knowledge Trust Boundary

User Knowledge is data, not markup.

User-entered and imported relationship labels, notes, names, or other text are untrusted by rendering code. Safe DOM text rendering is the default. Any future formatted User Knowledge requires one centrally owned sanitization path.

---

# Validation

The canonical deterministic validator remains:

```text
tools/validate_repository_integrity.js
```

Do not create a competing Fish/relationship validator.

Relationship validation should verify, where applicable:

- referenced IDs exist and are of the expected type,
- required relationships are present for completed production packages,
- every stored canonical relationship has an identifiable semantic owner,
- inverse storage is not duplicated merely for UI, search, reporting, or convenience,
- any derived cache/index can be regenerated from its canonical owner,
- no Tackle `rigIds[]` inverse exists solely for Rig usage,
- every current Rig component `tackleId` resolves,
- derived Tackle `Used In` output matches active Rig requirements,
- canonical entities do not store inverse media-ID arrays solely to locate Media,
- Media owner references resolve appropriately,
- Core registry membership and order resolve correctly,
- every active Rig has a deliberate `knotApplications[]` audit result,
- every Knot application has exactly the approved four fields,
- Knot IDs resolve and hardware-only joins are excluded,
- Rig-to-Knot reverse navigation is derived,
- Fish identification relationships obey deterministic ID/order, pair uniqueness, participant resolution, and distinction coverage,
- Fish-to-Rig guidance obeys Fish/Rig resolution, one-record-per-Fish, recommendation uniqueness, valid priority/reason, Primary requirement, and current provisional maxima,
- Fish Media relationships satisfy approved owner/role/readiness rules,
- approved/not-yet-implemented domains do not introduce placeholder inverse relationship arrays,
- User Knowledge references do not mutate canonical Reference Knowledge.

---

# Future Enhancements

Potential future relationship infrastructure includes runtime indexes when scale justifies them, automated repository-wide relationship validation, and more sophisticated graph/cache infrastructure.

Any future cache remains derived and non-authoritative unless an explicit later architecture decision changes ownership.

---

# V1 Completion Audit 2A.1 - Approved Pending Compatibility Expansion

**Status:** APPROVED / NOT YET IMPLEMENTED

FCC 37 approved the following intrinsic Compatibility additions for dependency-complete production authoring. They are **pending relationships** and are not included in the current validated production total of 177 intrinsic Compatibility relationships:

- Direct-Tie Lure Setup <-> Buzzbait
- Buzzbait <-> Steady Retrieve
- Direct-Tie Lure Setup <-> Bladed Jig
- Bladed Jig <-> Steady Retrieve
- Bladed Jig <-> Stop-and-Go Retrieve
- Direct-Tie Lure Setup <-> Blade Bait
- Blade Bait <-> Lift and Fall
- Blade Bait <-> Vertical Jig
- Blade Bait <-> Steady Retrieve

Exact stable IDs, Direct-Tie configuration IDs, file order, and production serialization remain production-authoring details governed by the existing relationship contract and validators. No pending relationship becomes active until its canonical participants and all required dependencies are implemented and validated.

The bounded Fish re-evaluations associated with Buzzbait, Bladed Jig, and Blade Bait are **not intrinsic Compatibility**. Fish-specific ordinary-method admission remains Fish<->Rig Suitability / Recommendation work and must be reviewed separately rather than inferred from these pairs.

## V1 Completion Audit 2A.2B.2 - Soft Frog / Toad Pending Compatibility

**Status:** APPROVED / NOT YET IMPLEMENTED

FCC 38 approved two intrinsic Rig↔Lure/Bait paths required by the Soft Frog / Toad architecture disposition. These remain **pending relationships** and do not change the current validated production total of 177 intrinsic Compatibility relationships:

- Weightless Soft-Plastic Rig <-> Soft Frog / Toad
- Weighted Soft-Plastic Hook Rig <-> Soft Frog / Toad

`Weighted Soft-Plastic Hook Rig` is the approved audit-stage generalization of the current production `Weighted Swimbait Hook Rig`. The existing Paddle-tail Swimbait weighted-hook compatibility migrates with that Rig family; it is not counted here as a second new architecture relationship. The generalized Rig will use lure-specific configurations for at least Paddle-tail Swimbait and Soft Frog / Toad. Exact production Rig ID migration, configuration IDs, deterministic relationship IDs, file order, and serialization remain dependency-complete production-authoring work.

No Soft Frog / Toad Technique pair is locked by this checkpoint. Technique compatibility and Fish-specific suitability remain separate later authoring tasks.

## V1 Completion Audit 2A.2B.4 - Fish Eggs / Roe Pending Relationships

**Status:** APPROVED / NOT YET IMPLEMENTED

FCC 38 approved **Split-Shot Bait Rig <-> Fish Eggs / Roe** as the primary pending Rig↔Lure/Bait path for the final 2A.2B architecture disposition. Existing Fixed Bobber Rig and Slip Bobber Rig may also support Fish Eggs / Roe, but those secondary intrinsic Compatibility edges are not pre-authorized by the architecture challenge and must be explicitly dispositioned during dependency-complete relationship authoring.

Moving-water drift remains presentation behavior owned by the existing **Natural Drift** Technique. The 2A.2 closeout does not create a new Technique identity and does not by itself pre-author a Fish Eggs / Roe <-> Natural Drift intrinsic Compatibility edge; that pair must be authored explicitly if the later dependency pass confirms it under the existing Technique compatibility rules.

Canonical Requirement Satisfaction remains explicit rather than inferred. The dependency-completeness pass must explicitly disposition a **Fish Eggs / Roe -> generic `bait`** satisfaction rule so the specific Lure/Bait identity can truthfully satisfy Rigs that require generic Bait without adding redundant User Knowledge mapping. This checkpoint does not increment the current validated production total of 13 Canonical Requirement Satisfaction rules.

**2A.2 Rig Completeness relationship closeout:** CLOSED / APPROVED. No production Compatibility or Satisfaction record is activated by this documentation checkpoint; current production remains 177 intrinsic Compatibility relationships and 13 Canonical Requirement Satisfaction rules until explicit implementation and validation.

---

# Related Documents

- `01-FOUNDATION.md`
- `02-FISH.md`
- `03-RIGS.md`
- `03A-TECHNIQUES.md`
- `03B-CONDITIONS.md`
- `03C-LURES-BAIT.md`
- `04-KNOTS.md`
- `05-TACKLE.md`
- `05A-INVENTORY.md`
- `07-USER-DATA.md`
- `../ARCHITECTURE.md`
- `../DECISIONS.md`
- `../FISH_REFERENCE_SOURCES.md`
- `../../archive/workstreams/fish-guide/FISH-GUIDE-PHASE-0.md`
- `../../archive/workstreams/fish-guide/FISH-GUIDE-PHASE-0-AUDIT-REVISIONS.md`
# RP-B2A — Rig↔Technique Eligibility Boundary — LOCKED

For Rig↔Technique Compatibility, "compatible" means more than mechanical possibility. A pair is authored only when the Technique is genuinely usable within the Rig's normal intended use envelope represented by the Rig's general **Best For** and **Good Conditions** guidance.

The stored compatibility graph establishes the **eligible Technique set** for a Rig. It must not contain Fish-specific, Condition-specific, ranking, weighting, or preferred-Technique semantics.

Recommendation Decision Knowledge owns the later contextual intersection of Fish, Conditions, Rig, Lure/Bait, and eligible Techniques and determines the **contextually viable/recommended subset**.

# RP-B2B — Dependency-Complete Expansion and Bounded Guidance Review — LOCKED

Recommendation Prerequisites Foundation uses a dependency-complete expansion rule. Before a candidate Lure/Bait is admitted to the Version 1 vocabulary, evaluate any required Rig, Tackle, Technique, and intrinsic Compatibility dependencies. New Rigs must not be activated with unresolved required Tackle components or missing applicable Technique/Compatibility coverage for the authored scope.

Because `FISH_RIG_GUIDANCE` is curated Decision Knowledge, adding a new canonical Rig triggers a bounded re-evaluation only for Fish that could plausibly benefit from the new Rig. This does not reopen all Fish automatically. Existing Primary/Alternative guidance changes only when the bounded review demonstrates that the expanded Rig catalog provides a better fit.

