# Freshwater Fishing Companion

**Document:** 05-TACKLE.md  
**Document Revision:** 0.2.1  
**Document Status:** Approved  
**Implementation Status:** Validated  
**Decision Baseline:** D019, D025, D026, D028, D037, D043, D056, D067

---

# Purpose

This document defines current canonical Tackle Reference Knowledge for Freshwater Fishing Companion.

Canonical Tackle describes **what functional tackle type an item is**. It does not describe a user's exact possession and does not require a commercial Product Definition.

---

# Current Production Schema

`data/tackle.js` currently stores canonical Tackle records with exactly these fields:

```text
id
name
aliases[]
category
summary
purpose
recognitionNotes[]
commonVariants[]
relatedTackleIds[]
createdVersion
lastModifiedVersion
isActive
```

`purpose` is part of the validated current schema and describes the practical function of the Tackle concept.

Current production does **not** store:

```text
rigIds[]
mediaIds[]
```

---

# Field Ownership

## id / name
Canonical Tackle identity and user-facing display name.

## aliases[]
Approved alternate names and beginner terminology for the same Tackle concept.

## category
Current functional Tackle grouping used by the production library.

## summary
Concise explanation of what the item is.

## purpose
Practical explanation of what the item does in fishing use.

## recognitionNotes[]
Observable characteristics that help a user recognize the functional item type.

## commonVariants[]
Common functional variants of the canonical concept. These are not a commercial product catalog.

## relatedTackleIds[]
Tackle-owned related-component relationships where the relationship is intrinsically meaningful to the Tackle concept. IDs must resolve to canonical Tackle records.

## createdVersion / lastModifiedVersion / isActive
Canonical lifecycle metadata.

---

# Rig Relationships

Rigs reference canonical Tackle through:

```text
Rig.componentRequirements[].tackleId
```

`Rig.componentRequirements[]` is the authoritative Rig-to-Tackle usage relationship.

The inverse UI:

```text
Tackle
    -> Used In
    -> matching active Rigs
```

is derived from Rig data. Tackle does not store `rigIds[]` merely for reverse navigation.

The Rig owns setup-specific context such as required/optional status, quantity, order, size/configuration guidance, assembly role, and notes. Tackle owns the reusable component identity and definition.

Canonical functional types should be specific enough for truthful Rig readiness. Current examples include `wacky-hook` and `ned-jighead` where a generic component would incorrectly imply buildability.

---

# Media Ownership

Canonical Tackle does not store `mediaIds[]`.

Media owns attachment through:

```text
ownerType: "tackle"
ownerId: canonical Tackle ID
```

Runtime presentation derives matching active Media records from the Media registry.

Repository Audit Section 4 removed the former duplicate Tackle `mediaIds[]` storage and validated the Media-owned relationship in Microsoft Edge. Removed fields remain available through Git history only.

Current recognition imagery is used contextually rather than being required inline in every Rig component display.

---

# Search and Connected Knowledge

Canonical Tackle may be discovered through deliberate canonical fields such as name, aliases, category, and other approved searchable metadata.

After identification, connected knowledge may expose:

- definition and recognition help,
- related Tackle,
- Rigs that use the item,
- future Fish/Condition/Technique relationships when approved,
- future My Tackle ownership context.

Search must not create duplicate canonical relationship ownership merely for discoverability.

---

# My Tackle Boundary

Canonical Tackle belongs to Reference Knowledge.

My Tackle belongs to User Knowledge and will record actual owned items when its detailed schema is implemented. Persistent user ownership must not be stored on canonical Tackle records.

Under D067, owned-item records must belong to the stable user/profile ownership model selected by the Settings / User Data Architecture gate. Canonical Tackle remains one application-owned catalog shared across users/profiles. The Roadmap therefore places the User Data gate before material Tackle Reference expansion so connected ownership context is designed against a settled persistence/identity foundation.

A future Product Definition may describe an exact commercial product if an approved feature demonstrates that need. Product Definitions are not required for basic canonical Tackle, My Tackle MVP, or Rig readiness.

---

# Current Implementation

`data/tackle.js` owns the production canonical Tackle records and stable IDs.

Current `main` contains 29 active canonical Tackle concepts. Current Media data provides the validated recognition-media ownership for those concepts.

Repository Audit Section 4 is **implemented / runtime-validated / closed**:

- Tackle `mediaIds[]` were removed,
- Media owns Tackle attachment through `ownerType` + `ownerId`,
- runtime lookup derives Media from that owner relationship,
- active Tackle Media owner IDs were validated against canonical Tackle IDs,
- recognition popovers and related-component behavior passed Edge runtime validation.

---

# Deferred Separate Lure Domain Gate

A separate canonical **Lure** domain is **not currently implemented or approved for implementation**. Some lure-like concepts correctly exist in canonical Tackle today because Tackle supports Rig requirements, recognition, search, and readiness.

If future Recommendation/Lure workflows demonstrate that a separate reusable artificial-bait entity is needed, the Lure/Tackle architecture gate must settle before production data is created:

1. whether a separate Lure entity provides demonstrated value beyond canonical Tackle;
2. the exact semantic boundary between Lure and current Tackle;
3. the canonical Lure field set, with purpose/ownership/validation for each field;
4. Fish/Rig/Technique/Condition relationship ownership under D056;
5. ProductDefinition relationships if commercial-product identity enters scope;
6. My Tackle mapping/ownership behavior;
7. media attachment requirements beyond the shared `ownerType` + `ownerId` model, if any;
8. referential-integrity/migration requirements.

Candidate concepts such as lure family/type, typical size/weight, common colors, action, beginner guidance, or common mistakes remain **design inputs, not approved production fields**.

Do not add placeholder relationship arrays such as `targetFishIds[]`, `compatibleRigIds[]`, or `compatibleTechniqueIds[]`. Contextual lure suitability/ranking/rationale may belong to Decision Knowledge rather than intrinsic bidirectional Reference Knowledge.

A manufacturer's commercial product and a reusable lure concept are different semantic entities. ProductDefinition modeling remains deferred until an approved product-specific feature requires it. Actual user-owned lure items belong to My Tackle/User Knowledge, not the canonical Lure/Tackle definition.

# Future / Deferred

Deferred until demonstrated by approved features:

- commercial Product Definition entities,
- exhaustive manufacturer/product catalogs,
- SKU/UPC/retailer modeling,
- advanced subtype/variant inheritance,
- precomputed relationship indexes solely for scale,
- Media role/order metadata before an actual multi-media need,
- persistent user ownership fields on Reference Tackle.

---

# Related Documents

- `01-FOUNDATION.md`
- `03-RIGS.md`
- `05A-INVENTORY.md`
- `09-RELATIONSHIPS.md`
- `../ARCHITECTURE.md`
- `../DECISIONS.md`
