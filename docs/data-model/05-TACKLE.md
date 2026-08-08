# Freshwater Fishing Companion

**Document:** 05-TACKLE.md  
**Document Revision:** 0.1.0  
**Document Status:** Approved  
**Implementation Status:** Current  
**Decision Baseline:** D026, D028, D037

# Purpose

This document defines canonical Tackle Reference Knowledge for Freshwater Fishing Companion.

Canonical Tackle describes **what functional tackle type an item is**. It does not describe a specific user's exact possession and does not require a commercial ProductDefinition.

Examples include:

- Offset Hook
- Bullet Weight
- Jighead
- Slip Float
- Barrel Swivel
- Spinnerbait
- Crankbait
- Soft Plastic Worm
- Inline Spinner

# Knowledge Ownership

Canonical Tackle belongs to Reference Knowledge.

My Tackle/Inventory belongs to User Knowledge and records actual owned items. See `05A-INVENTORY.md`.

A future ProductDefinition may describe an exact commercial product if an approved product-specific feature demonstrates the need. ProductDefinition is not required for basic canonical Tackle, My Tackle MVP, or Rig readiness.

# Canonical Identity

Canonical Tackle owns its own identity and display name. A Rig that references a Tackle ID must resolve the user-facing Tackle name from the canonical Tackle record rather than maintain an independent display-name source.

Core fields should follow `01-FOUNDATION.md` and may include, where required by approved features:

```text
id
name
summary
aliases
category
recognitionNotes
commonVariants
relatedTackleIds
imageIds
createdVersion
lastModifiedVersion
isActive
```

Exact field shape remains governed by the current production data and future approved schema work; fields must not be added speculatively.

# Rig Relationships

Rigs act as recipes and reference canonical Tackle through `Rig.componentRequirements`.

`Rig.componentRequirements` is the authoritative source for Rig-to-Tackle usage. Tackle does not independently maintain an inverse `rigIds` source of truth.

The UI may still show:

```text
Tackle
    -> Used In
    -> matching Rigs
```

but that inverse is derived from canonical Rig data.

# Rig-Specific Context

Canonical Tackle owns identity. The Rig owns context specific to its use of that component, including where approved:

- required/optional status
- quantity
- component order
- size or configuration guidance
- assembly role
- setup-specific notes

Context-specific display labels are not added unless a demonstrated UX need justifies them.

# Search and Connected Knowledge

Canonical Tackle may be searchable by deliberate fields such as canonical name, approved aliases, beginner terminology, category, and approved keywords. Incidental descriptive text alone should not create weak Search results.

After a Tackle entity is identified, connected knowledge may expose:

- definition and recognition help
- related Tackle
- Rigs that use it
- Fish/Conditions/Techniques where relationships exist
- My Tackle ownership context

# Media

Canonical Tackle recognition imagery follows `../MEDIA_GUIDE.md`. Current approved reference media is intended for recognition help through contextual `Name ⓘ` rather than default inline display in every Rig requirement.

# Current Implementation

`data/tackle.js` currently owns the production canonical Tackle records and stable IDs.

Some current records still contain manually maintained inverse Rig relationships. Removing that duplication and deriving `Used In` from Rig requirements is **Approved / Not Implemented** until the deliberate Rig/Tackle cleanup is completed and validated.

# Future / Deferred

Deferred until demonstrated by approved features:

- commercial ProductDefinition entities
- exhaustive manufacturer/product catalogs
- SKU/UPC/retailer modeling
- advanced subtype/variant inheritance
- precomputed relationship indexes solely for scale

# Related Documents

- `00-GLOSSARY.md`
- `01-FOUNDATION.md`
- `03-RIGS.md`
- `05A-INVENTORY.md`
- `06-LURES.md`
- `09-RELATIONSHIPS.md`
- `../ARCHITECTURE.md`
- `../DECISIONS.md`
