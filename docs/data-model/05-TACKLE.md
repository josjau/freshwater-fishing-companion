# Freshwater Fishing Companion

**Document:** 05-TACKLE.md  
**Document Revision:** 0.1.3  
**Document Status:** Approved  
**Implementation Status:** In Progress  
**Decision Baseline:** D019, D025, D026, D028, D037, D043

# Purpose

This document defines canonical Tackle Reference Knowledge for Freshwater Fishing Companion.

Canonical Tackle describes **what functional tackle type an item is**. It does not describe a specific user's exact possession and does not require a commercial ProductDefinition.

Examples include:

- Offset Hook
- Bullet Weight
- Jighead
- Ned Jighead
- Wacky Hook
- Wacky O-Ring
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

Canonical Tackle owns its own identity and display name.

A Rig requirement references a canonical Tackle record through:

```text
tackleId
```

The user-facing component name is resolved from the referenced canonical Tackle record.

Core fields follow `01-FOUNDATION.md` and may include:

```text
id
name
summary
aliases
category
recognitionNotes
commonVariants
relatedTackleIds
mediaIds
createdVersion
lastModifiedVersion
isActive
```

`rigIds` is not part of the canonical Tackle ownership model for Rig usage.

# Rig Relationships

Rigs act as recipes and reference canonical Tackle through `Rig.componentRequirements[].tackleId`.

`Rig.componentRequirements` is the authoritative source for Rig-to-Tackle usage.

The UI may show:

```text
Tackle
    -> Used In
    -> matching Rigs
```

That inverse is derived by scanning active Rig component requirements.

# Rig-Specific Context

Canonical Tackle owns identity.

The Rig owns context specific to its use of the component, including where approved:

- required/optional status
- quantity
- component order
- size or configuration guidance
- assembly role
- setup-specific notes

Context-specific display labels are not added unless a demonstrated UX need justifies them.

Canonical functional types should be specific enough for truthful Rig buildability. When a generic component category would incorrectly mark a Rig as buildable, use a narrower canonical Tackle concept rather than relying only on explanatory notes. Current examples are `wacky-hook` and `ned-jighead`.

# Search and Connected Knowledge

Canonical Tackle may be searchable by deliberate fields such as canonical name, approved aliases, beginner terminology, category, and approved keywords.

After a Tackle entity is identified, connected knowledge may expose:

- definition and recognition help
- related Tackle
- Rigs that use it
- Fish/Conditions/Techniques where relationships exist
- My Tackle ownership context

# Media

Canonical Tackle recognition imagery follows `../MEDIA_GUIDE.md`.

Current reference media is intended for recognition help through contextual `Name ⓘ` rather than default inline display in every Rig requirement.

The current production standard uses optimized 640 × 440 WebP assets on a restrained warm-neutral background. Alpha transparency and artificial baked-in drop shadows are not used in the active set.

# Current Implementation

`data/tackle.js` owns the production canonical Tackle records and stable IDs.

Current `main` contains 17 active canonical Tackle concepts and 17 neutral-background recognition-media assets from the Core Rigs/Tackle Media implementation.

The current Rig UX corrective package adds three narrower canonical concepts:

- `wacky-hook`
- `wacky-o-ring`
- `ned-jighead`

This produces 20 active canonical Tackle concepts while keeping the active recognition-media set at 17 assets. The three newly narrowed concepts intentionally use text recognition guidance until technically accurate dedicated recognition media is separately approved; no generic image is reused when it could misidentify the component.

This corrective expansion remains **In Progress** until pushed and runtime/regression validation passes.

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
