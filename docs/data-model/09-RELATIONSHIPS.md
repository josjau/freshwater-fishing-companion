# Freshwater Fishing Companion

**Document:** 09-RELATIONSHIPS.md  
**Document Revision:** 0.5.6  
**Document Status:** Approved  
**Implementation Status:** Fish Version 1 relationships COMPLETE / VALIDATED / CLOSED — 20 identification pairs; 27 Fish guidance records currently active  
**Decision Baseline:** D003, D024, D025, D026, D037, D043, D044, D056, D057–D061, FISH-001–FISH-007  
**Last Updated:** 2026-08-24

---

# Purpose

This document defines how canonical entities, Decision Knowledge, and User Knowledge relate within Freshwater Fishing Companion.

Relationships use stable identifiers and follow the site's semantic single-owner rule. The Fish Version 1 production relationship milestone is complete: the approved 20-pair identification graph is fully implemented and Fish-to-Rig guidance is populated for the 27 Fish with approved guidance records. Other future relationship domains/gates remain governed separately below.

---

# Knowledge Layers

## Layer 1 — Reference Knowledge

Curated facts and reusable fishing concepts, including implemented Fish, Rigs, Knots, Tackle, and Media plus approved future domains such as Techniques, Conditions, and a possible separate Lure domain.

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

Canonical Fish, Rig, Knot, Tackle, and future Technique/Condition/Lure records must not maintain inverse media-ID arrays solely to locate Media that already identifies its owner.

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

# Rig ↔ Technique — Deferred

Rig owns physical assembly and Rig-specific configuration. Technique owns reusable presentation behavior.

The canonical storage owner for future Rig ↔ Technique compatibility is **not yet approved**. Current production Rigs do not store `techniqueIds[]`, and the future Technique model does not have an approved `compatibleRigIds[]` field.

At the Technique architecture gate, determine whether compatibility is:

- an intrinsic Reference Knowledge fact owned by one side, or
- contextual Decision Knowledge involving Fish, Conditions, or other factors.

Do not populate both directions. Rig `assemblySteps[]` remain authoritative for physical construction regardless of the eventual compatibility model.

---

# Other Future Relationships — Deferred

The following relationship families remain unresolved until their respective architecture gates:

- Fish ↔ Technique,
- Condition ↔ Fish/Rig/Technique/Lure,
- separate Lure ↔ Fish/Rig/Technique relationships,
- Product Definition relationships,
- My Tackle owned-item mappings beyond the approved ownership boundary.

Fish ↔ Rig curated starting guidance is **not** part of this deferred list; its owner/shape is implemented as `FISH_RIG_GUIDANCE` above.

Search or UI needs do not authorize speculative canonical relationship fields.

---

# Search Relationships

Search should identify the strongest intended entity first. Connected knowledge can then expose pertinent breadth.

Search metadata must not become a second canonical owner of relationship facts. Search consumes canonical owners, Decision Knowledge, or deliberately derived indexes.

A weak or incidental relationship is not by itself a reason for an entity to appear as a primary search result.

D061 requires scope filtering before relevance ranking. Helper/examples shown inside scoped searches must likewise remain valid for that exact eligible set; they may not imply cross-domain or broader-scope relationships that the current search cannot return.

---

# My Tackle and Rig Readiness

Canonical Tackle defines functional tackle concepts. Future My Tackle defines actual persistent user ownership.

When My Tackle becomes authoritative, Rig Readiness will derive buildability from:

```text
Rig.componentRequirements[].tackleId
    -> canonical Tackle
    -> My Tackle owned-item mapping
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

The current production Rig library contains 21 active Rigs, including Split-Shot Bait Rig.

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
- deferred domains do not introduce placeholder relationship arrays,
- User Knowledge references do not mutate canonical Reference Knowledge.

---

# Future Enhancements

Potential future relationship infrastructure includes runtime indexes when scale justifies them, automated repository-wide relationship validation, and more sophisticated graph/cache infrastructure.

Any future cache remains derived and non-authoritative unless an explicit later architecture decision changes ownership.

---

# Related Documents

- `01-FOUNDATION.md`
- `02-FISH.md`
- `03-RIGS.md`
- `03A-TECHNIQUES.md`
- `03B-CONDITIONS.md`
- `04-KNOTS.md`
- `05-TACKLE.md`
- `05A-INVENTORY.md`
- `07-USER-DATA.md`
- `../ARCHITECTURE.md`
- `../DECISIONS.md`
- `../FISH_REFERENCE_SOURCES.md`
- `../../archive/workstreams/fish-guide/FISH-GUIDE-PHASE-0.md`
- `../../archive/workstreams/fish-guide/FISH-GUIDE-PHASE-0-AUDIT-REVISIONS.md`