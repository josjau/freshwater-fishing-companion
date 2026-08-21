# Freshwater Fishing Companion

**Document:** 09-RELATIONSHIPS.md  
**Document Revision:** 0.4.0  
**Document Status:** Draft  
**Implementation Status:** Mixed — validated relationships and deferred future relationships  
**Decision Baseline:** D003, D024, D025, D026, D037, D043, D044, D056

---

# Purpose

This document defines how canonical entities, Decision Knowledge, and User Knowledge relate within Freshwater Fishing Companion.

Relationships use stable identifiers and follow the site's semantic single-owner rule. This document distinguishes relationships already implemented and validated from future relationships whose ownership remains deliberately unresolved.

---

# Knowledge Layers

## Layer 1 — Reference Knowledge

Curated facts and reusable fishing concepts, including implemented Fish, Rigs, Knots, Tackle, and Media plus approved future domains such as Techniques, Conditions, and a possible separate Lure domain.

## Layer 2 — Decision Knowledge

Guidance derived from Reference Knowledge and context. Current examples include Knot task guidance and Reel & Line Setup guidance. Future examples may include recommendation ranking, contextual suitability, alternatives, and inventory compatibility.

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

Example:

```text
Rig.variationIds[]
    -> related Rig
```

## Derived Inverse

The canonical relationship is stored once and reverse navigation is computed.

Example:

```text
Canonical:
Rig.componentRequirements[].tackleId

Derived:
Tackle -> Used In -> matching active Rigs
```

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

The audited 20-Rig library contains 31 real tied connection points.

---

## Core Learning Group → Rig

Core membership and order are owned by the curated registry:

```text
CORE_RIG_IDS
    -> ordered canonical Rig IDs
```

Individual Rig records do not store duplicate Core membership/order fields solely for presentation.

---

# Decision Knowledge Relationships

Decision Knowledge may reference canonical entities without changing their schemas.

Current examples:

- Knot task guidance owns task-first discovery vocabulary and curated task-to-Knot ordering.
- Reel & Line Setup guidance owns its guided decision paths and references canonical Knot IDs where tying instruction is required.

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

- Fish ↔ Rig applicability beyond currently implemented domain metadata,
- Fish ↔ Technique,
- Condition ↔ Fish/Rig/Technique/Lure,
- separate Lure ↔ Fish/Rig/Technique relationships,
- Product Definition relationships,
- My Tackle owned-item mappings beyond the approved ownership boundary.

Search or UI needs do not authorize speculative canonical relationship fields.

---

# Search Relationships

Search should identify the strongest intended entity first. Connected knowledge can then expose pertinent breadth.

Search metadata must not become a second canonical owner of relationship facts. Search consumes canonical owners, Decision Knowledge, or deliberately derived indexes.

A weak or incidental relationship is not by itself a reason for an entity to appear as a primary search result.

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

For implemented relationship domains:

- every Rig component `tackleId` must resolve to canonical Tackle,
- every Rig `recommendedKnotIds[]` entry must resolve to active canonical Knot,
- every `CORE_RIG_IDS` entry must resolve to one active canonical Rig and appear once,
- every active Media entity attachment must resolve according to the owning domain's lifecycle rules,
- ordinary production relationship IDs must not be used as forward-planning placeholders.

The approved 20-Rig library is fully implemented, including Carolina Rig. Earlier documentation describing Carolina Rig as a near-term unresolved expansion target is obsolete.

---

# User Knowledge Trust Boundary

User Knowledge is data, not markup.

User-entered and imported relationship labels, notes, names, or other text are untrusted by rendering code. Safe DOM text rendering is the default. Any future formatted User Knowledge requires one centrally owned sanitization path.

---

# Validation

Relationship validation should verify, where applicable:

- referenced IDs exist and are of the expected type,
- required relationships are present,
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
- deferred domains do not introduce placeholder relationship arrays,
- User Knowledge references do not mutate canonical Reference Knowledge.

---

# Future Enhancements

Potential future relationship infrastructure includes runtime indexes when scale justifies them, automated repository-wide relationship validation, and more sophisticated graph/cache infrastructure.

Any future cache remains derived and non-authoritative unless an explicit later architecture decision changes ownership.

---

# Related Documents

- 01-FOUNDATION.md
- 02-FISH.md
- 03-RIGS.md
- 03A-TECHNIQUES.md
- 03B-CONDITIONS.md
- 04-KNOTS.md
- 05-TACKLE.md
- 05A-INVENTORY.md
- 06-LURES.md
- 07-USER-DATA.md
- 08-BACKUP.md
- ../ARCHITECTURE.md
- ../DECISIONS.md
- ../workstreams/KNOT-RELATIONSHIP-APPROVAL.md
