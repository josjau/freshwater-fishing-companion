# Freshwater Fishing Companion

**Document:** 09-RELATIONSHIPS.md  
**Document Revision:** 0.3.3
**Document Status:** Draft
**Decision Baseline:** D025, D026, D037, D043, D044

---

# Purpose

This document defines how canonical entities, decision knowledge, and user-owned data relate within Freshwater Fishing Companion.

The relationship model supports:

- Search
- Related knowledge
- Recommendations
- Inventory matching
- Rig readiness
- Catch logging
- Learning paths
- Navigation
- Data validation

Relationships connect entities through stable identifiers rather than duplicated content.

---

# Design Philosophy

The Companion is built around connected knowledge.

A search result or detail page should not operate as an isolated record. It should help the user understand:

- What the item is
- How it is used
- What works with it
- What conditions suit it
- Whether the user owns it
- What to learn next

Search is relevance-first; connected knowledge is breadth-first.

Relationships should provide useful next steps without overwhelming the user.

---

# Knowledge Layers

The relationship model follows the approved three-layer architecture.

## Layer 1 — Reference Knowledge

Curated facts and reusable fishing concepts.

Examples:

- Fish
- Rigs
- Techniques
- Conditions
- Knots
- Tackle
- Lures
- Products when explicitly modeled
- Taxonomies
- Sources

---

## Layer 2 — Decision Knowledge

Guidance derived from Reference Knowledge and user context.

Examples:

- Lure recommendations
- Product recommendations
- Suggested alternatives
- Inventory compatibility
- Search ranking
- Learning guidance

---

## Layer 3 — User Knowledge

Information owned or maintained by the angler.

Examples:

- Profiles
- Preferences
- Favorites
- Equipment
- Consumables
- Custom tackle
- Fishing setups
- Catch records

---

# Relationship Principles

The Companion shall follow these relationship rules:

- Relationships use stable identifiers.
- Canonical entities are referenced rather than copied.
- User records reference canonical entities whenever practical.
- Tackle items are not required to belong to a Rig.
- Rigs act as recipes that reference existing canonical Tackle concepts.
- The canonical owner of a relationship stores it once when that direction is sufficient.
- Inverse navigation should be derived rather than independently maintained when it represents the same relationship.
- Relationships should support related knowledge without forcing every possible connection.
- Required relationships must be validated.
- Ordinary production relationship IDs should resolve to existing canonical records once the relevant implementation is complete.
- Optional relationships must not block use of an otherwise valid entity.
- Inactive canonical entities remain available for historical references.
- Circular stored relationships should be limited and documented when necessary.
- Search and recommendation relationships should be explainable.

---

# Relationship Classifications

Every relationship should be understood by its semantic need rather than duplicated for UI convenience.

## Required

The source entity cannot function correctly without the relationship.

Example:

```text
Rig component requirement
    -> Canonical Tackle
```

A missing required relationship is a data defect.

## Optional

The relationship adds useful context but the source entity remains valid without it.

Example:

```text
Rig
    -> related variation
```

## Derived Inverse

The UI needs reverse navigation, but the canonical relationship is stored in only one direction.

Example:

```text
Canonical storage:
Rig.componentRequirements[].tackleId
    -> Offset Hook

Derived UI navigation:
Offset Hook
    -> Used In
    -> matching Rigs
```

Derived inverse relationships should not be stored as a second manually maintained source of truth without an explicit semantic reason.

---

# Rig-to-Tackle Relationship Ownership

`Rig.componentRequirements` is the authoritative source for Rig-to-Tackle usage. Each requirement identifies the referenced canonical Tackle concept through `tackleId`.

Tackle records do not independently maintain inverse `rigIds` solely to answer which Rigs use the item.

`Used In` is derived by finding active Rigs whose component requirements contain the matching `tackleId`.

Tackle may still own genuine Tackle-domain relationships such as related components or future explicitly approved substitute relationships.

Bidirectional UI navigation does not imply bidirectional canonical storage.

---

# Rig-to-Knot Relationship Ownership

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
- `recommendedKnotIds[]` is selective and nonempty, not an exhaustive list of every theoretically usable Knot.
- Referenced Knot IDs must resolve to active canonical Knot records.
- General tying instructions remain with Knot; `notes` contains only Rig-specific context.
- No Version 1 application ID or assembly-step index is stored.
- Runtime code must not infer the relationship by parsing `assemblySteps` prose.

Derived inverse navigation:

```text
Canonical storage:
Rig.knotApplications[].recommendedKnotIds[]
    -> canonical Knot IDs

Derived Knot detail:
Knot
    -> Where You'll Use It
    -> matching active Rigs / connection labels
```

Production Package 1 audits all 20 active Rigs and records 31 real tied connection points. The final audited count is authoritative.

---

# Canonical Identity Across Relationships

A relationship references another entity by stable ID.

The referenced canonical entity owns its identity and display name.

For Rig components:

```text
Rig requirement
    -> tackleId
    -> canonical Tackle name
```

The Rig owns only the context of that component inside the Rig, such as required/optional status, quantity, order, recommended size/configuration, assembly role, and setup note.

A second display-name field in the Rig must not become an independent source of truth.

A separate requirement-level `id` is not introduced unless independent requirement identity becomes necessary for a demonstrated feature.

---


# Core Learning-Path Relationship

Core membership is a curated relationship from the Core learning group to canonical Rig IDs.

Canonical storage:

```text
CORE_RIG_IDS
    -> ordered canonical Rig IDs
```

Derived presentation:

```text
Core Rigs — Master These First
    -> ordered cards
    -> Core badges
    -> Core detail emphasis
```

Individual Rig records do not store duplicate Core membership/order fields solely for UI convenience.

---

# Rig and Technique Relationship

Rig owns physical assembly and Rig-specific configuration.

Technique owns reusable presentation behavior.

A Rig may reference compatible Techniques, but shared presentation instructions should live in Technique rather than being copied into every compatible Rig.

Rig `assemblySteps` remain authoritative for physical construction.

---

# Search Relationships

Search should first identify the strongest intended entity.

After an entity is selected, relationships expose relevant breadth.

Examples:

```text
Fish
    -> Rigs
    -> Conditions
    -> Lures
    -> Techniques

Rig
    -> Fish
    -> Conditions
    -> Tackle requirements
    -> Knots
    -> Techniques
    -> Readiness

Lure or Tackle
    -> Fish
    -> Conditions
    -> compatible uses
    -> ownership context
```

A weak or incidental relationship is not automatically a reason for an entity to appear as a primary Search result.

---

# My Tackle and Readiness Relationships

Canonical Tackle defines the functional type.

My Tackle defines actual user ownership.

Rig Readiness derives buildability from:

```text
Rig.componentRequirements[].tackleId
    -> canonical Tackle type
    -> My Tackle owned-item mapping
```

The current transitional readiness state already stores canonical Tackle ID string values, so renaming the Rig requirement property to `tackleId` does not require a storage migration.

When My Tackle becomes authoritative:

- Owned required types are automatically satisfied.
- Temporary session availability may satisfy a missing item without becoming ownership.
- Rig Readiness reads My Tackle but never writes persistent ownership.
- Persistent ownership changes are made only through explicit My Tackle ownership-management workflows.
- Prior readiness checkmarks are not silently promoted into inventory.

---

# Referential Integrity

Stable canonical relationship IDs should resolve to real canonical records when production data for the relevant implementation is complete.

Forward planning belongs in project documentation rather than unresolved ordinary relationship IDs.

For the approved 20-Rig expansion, Carolina Rig is an approved near-term canonical entity. The current `carolina-rig` relationship is therefore resolved by implementing the Carolina Rig record as part of that expansion rather than treating the concept as unwanted.

For every Rig component requirement, `tackleId` must be present and resolve to canonical Tackle. Validation should detect unresolved canonical IDs as data defects.

---

# User Knowledge Trust Boundary

User Knowledge is data, not markup.

User-entered and imported relationship labels, notes, names, or other text must be treated as untrusted by rendering code.

Use safe DOM text rendering by default. Any future formatted User Knowledge requires a centrally owned sanitization path.

---

# Validation

Relationship validation should include, where applicable:

- Referenced ID exists.
- Referenced entity is of the expected type.
- Required relationships are present.
- A stored inverse does not create a second source of truth without an approved reason.
- No manual Tackle `rigIds` inverse exists solely for Rig usage.
- Every current Rig component `tackleId` resolves.
- Derived `Used In` output matches active Rig requirements.
- Every `CORE_RIG_IDS` entry resolves to one active canonical Rig and appears only once.
- Core presentation order matches the registry order.
- Every active Rig has a deliberate `knotApplications[]` audit result.
- Every Rig Knot application has exactly `label`, `connectionType`, `recommendedKnotIds[]`, and `notes`.
- Every `recommendedKnotIds[]` entry resolves to an active canonical Knot.
- Rig-to-Knot reverse navigation is derived rather than stored again on Knot.
- Hardware-only joins are not represented as Knot applications.
- Inactive entities remain resolvable for historical or migration needs.
- User-owned references do not mutate canonical Reference Knowledge.

---

# Future Enhancements

Potential future relationship infrastructure includes:

- Runtime indexes when dataset scale justifies them
- Automated repository-wide relationship validation
- More sophisticated graph/cache infrastructure
- ProductDefinition relationships when an approved commercial-product feature requires them

These are deferred until demonstrated by actual need.

---

# Related Documents

- 01-FOUNDATION.md
- 02-FISH.md
- 03-RIGS.md
- 03A-TECHNIQUES.md
- 03B-CONDITIONS.md
- 05-TACKLE.md
- 05A-INVENTORY.md
- 06-LURES.md
- 07-USER-DATA.md
- 08-BACKUP.md
- ../ARCHITECTURE.md
- ../DECISIONS.md
- ../workstreams/KNOT-RELATIONSHIP-APPROVAL.md