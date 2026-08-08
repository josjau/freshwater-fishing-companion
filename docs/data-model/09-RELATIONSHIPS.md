# Freshwater Fishing Companion

**Document:** 09-RELATIONSHIPS.md  
**Document Revision:** 0.3.1
**Document Status:** Draft
**Decision Baseline:** D025, D026, D037

---

# Purpose

This document defines how canonical entities, decision knowledge, and user-owned data relate within Freshwater Fishing Companion.

Relationships connect entities through stable identifiers rather than duplicated content.

---

# Design Philosophy

The Companion is built around connected knowledge.

Search is relevance-first; connected knowledge is breadth-first.

The canonical owner of a relationship stores it once when one direction is sufficient. Inverse navigation is derived rather than independently maintained when it represents the same relationship.

---

# Knowledge Layers

## Layer 1 — Reference Knowledge

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

## Layer 2 — Decision Knowledge

Examples:

- Lure recommendations
- Product recommendations
- Suggested alternatives
- Inventory compatibility
- Search ranking
- Learning guidance

## Layer 3 — User Knowledge

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

- Relationships use stable identifiers.
- Canonical entities are referenced rather than copied.
- User records reference canonical entities whenever practical.
- Tackle items are not required to belong to a Rig.
- Rigs act as recipes that reference existing canonical Tackle concepts.
- The canonical owner of a relationship stores it once when that direction is sufficient.
- Inverse navigation should be derived rather than independently maintained when it represents the same relationship.
- Required relationships must be validated.
- Ordinary production relationship IDs should resolve to existing canonical records once the relevant implementation is complete.
- Optional relationships must not block use of an otherwise valid entity.
- Inactive canonical entities remain available for historical references.

---

# Relationship Classifications

## Required

Example:

```text
Rig component requirement
    -> Canonical Tackle
```

A missing required relationship is a data defect.

## Optional

Example:

```text
Rig
    -> related variation
```

## Derived Inverse

Canonical storage:

```text
Rig.componentRequirements[].tackleId
    -> Offset Worm Hook
```

Derived UI navigation:

```text
Offset Worm Hook
    -> Used In
    -> matching active Rigs
```

Derived inverse relationships are not stored as a second manually maintained source of truth without an explicit semantic reason.

---

# Rig-to-Tackle Relationship Ownership

`Rig.componentRequirements` is the authoritative source for Rig-to-Tackle usage.

Each requirement identifies the referenced canonical Tackle concept through:

```text
tackleId
```

Tackle records do not independently maintain inverse `rigIds` solely to answer which Rigs use the item.

`Used In` is derived by finding active Rigs whose component requirements contain the matching `tackleId`.

Tackle may still own genuine Tackle-domain relationships such as related components or future explicitly approved substitute relationships.

---

# Canonical Identity Across Relationships

A relationship references another entity by stable ID.

For Rig components:

```text
Rig requirement
    -> tackleId
    -> canonical Tackle record
    -> canonical Tackle name
```

The Rig owns only the context of that component inside the Rig, such as required/optional status, quantity, order, recommended size/configuration, assembly role, and setup note.

A duplicated component display-name field is not stored in the Rig.

A separate requirement-level `id` is not introduced unless an independent requirement identity becomes necessary for a demonstrated feature.

---

# Rig and Technique Relationship

Rig owns physical assembly and Rig-specific configuration.

Technique owns reusable presentation behavior.

Rig `assemblySteps` remain authoritative for physical construction.

---

# Search Relationships

Search first identifies the strongest intended entity.

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
    -> Techniques
    -> Readiness

Lure or Tackle
    -> Fish
    -> Conditions
    -> compatible uses
    -> ownership context
```

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

The current transitional readiness implementation stores the same canonical Tackle ID string values. Renaming the Rig requirement property to `tackleId` does not require a storage migration.

When My Tackle becomes authoritative:

- Owned required types are automatically satisfied.
- Temporary session availability may satisfy a missing item without becoming ownership.
- Rig Readiness reads My Tackle but never writes persistent ownership.
- Persistent ownership changes are made only through explicit My Tackle ownership-management workflows.
- Prior readiness checkmarks are not silently promoted into inventory.

---

# Referential Integrity

Stable canonical relationship IDs should resolve to real canonical records when production data for the relevant implementation is complete.

For every Rig component requirement:

- `tackleId` must be present.
- `tackleId` must resolve to canonical Tackle.
- the referenced Tackle record must be of the expected domain type.

For the approved 20-Rig expansion, Carolina Rig is an approved near-term canonical entity. The current `carolina-rig` relationship is resolved by implementing the Carolina Rig record during that later expansion.

---

# User Knowledge Trust Boundary

User Knowledge is data, not markup.

User-entered and imported relationship labels, notes, names, or other text must be treated as untrusted by rendering code.

---

# Validation

Relationship validation should include:

- Referenced ID exists.
- Referenced entity is of the expected type.
- Required relationships are present.
- No manual Tackle `rigIds` inverse exists for Rig usage.
- Every current Rig component `tackleId` resolves.
- Canonical Tackle display names render correctly in Rig `What You Need`.
- Derived `Used In` output matches the active Rig requirements.
- Inactive entities remain resolvable for historical or migration needs.
- User-owned references do not mutate canonical Reference Knowledge.

---

# Future Enhancements

Potential future relationship infrastructure includes:

- Runtime indexes when dataset scale justifies them
- Automated repository-wide relationship validation
- More sophisticated graph/cache infrastructure
- ProductDefinition relationships when an approved commercial-product feature requires them

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
