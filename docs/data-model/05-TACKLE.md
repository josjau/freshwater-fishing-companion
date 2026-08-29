# Freshwater Fishing Companion

**Document:** 05-TACKLE.md  
**Document Revision:** 0.4.2  
**Document Status:** Approved  
**Implementation Status:** GitHub main validated — 29 / Drive Current staged — 31 / Subphase B targeted PASS  
**Decision Baseline:** D019, D025, D026, D028, D037, D043, D056, D067, D069

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

Current `main` contains 29 active canonical Tackle concepts. Drive Working Source/Current stages 31 active concepts by adding the approved **Weighted Swimbait Hook** and **Tube Jighead** records. Subphase B now also stages approved recognition Media for both new concepts, bringing active Tackle recognition-media coverage to 31/31. Weighted Swimbait Hook geometry is anchored to the approved Mustad Power Lock Plus reference; the selected Tube Jighead production asset is the second reviewed variant and is anchored to the user-supplied Tackle Warehouse Tube Jig Heads category plus supporting manufacturer geometry references.

Repository Audit Section 4 is **implemented / runtime-validated / closed**:

- Tackle `mediaIds[]` were removed,
- Media owns Tackle attachment through `ownerType` + `ownerId`,
- runtime lookup derives Media from that owner relationship,
- active Tackle Media owner IDs were validated against canonical Tackle IDs,
- recognition popovers and related-component behavior passed Edge runtime validation.

---

# Lure/Bait Boundary — Staged in Drive Current

D069 approves a separate canonical **Lure/Bait** Reference domain, governed by `03C-LURES-BAIT.md`.

The semantic boundary is:

- **Tackle** owns functional fishing equipment and Rig-building components such as hooks, weights, swivels, bobbers, jigheads, leader, and bottom-bouncer hardware.
- **Lure/Bait** owns canonical lure and bait identities intentionally presented to Fish, such as Stick Worm, Craw, Paddle-tail Swimbait, Spinnerbait, Crankbait, Inline Spinner, Spoon, Minnow, or Nightcrawler.

The deliberate Lure/Bait foundation is now staged in Drive Current. Existing lure-like Tackle records are not silently deleted or renamed merely because a corresponding Lure/Bait identity exists; the Direct-Tie configuration model references canonical Lure/Bait identities for presented lures while preserving existing Tackle records unless a distinct approved component disposition requires change.

Complete-lure terminal setups may still exist as Rigs where physical connection/setup has distinct semantic ownership. Under the staged prerequisite implementation, legacy Inline Spinner Setup is generalized to Direct-Tie Lure Setup while Inline Spinner is a canonical Lure/Bait identity.

Commercial product identity, manufacturer catalogs, SKU/UPC/retailer modeling, and commercial color-name enumeration remain outside the canonical Lure/Bait V1 domain. User-owned brand/model/variant details belong to My Tackle/User Knowledge when that schema is implemented.

Intrinsic Rig↔Lure/Bait compatibility is stored once under `09-RELATIONSHIPS.md`; contextual Fish/Condition-specific lure selection, exact recommended size/weight/color/pattern, and rationale belong to Recommendation Decision Knowledge.

Do not add inverse `compatibleRigIds[]`, `targetFishIds[]`, or `compatibleTechniqueIds[]` merely for navigation.

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

# Recommendation Prerequisites Tackle Changes — STAGED / TARGETED PASS

Subphase B adds exactly two new physical Tackle concepts required by approved new Rigs: **Weighted Swimbait Hook** and **Tube Jighead**. Existing `bait` and `soft-plastic` concepts remain valid generic physical component requirements. Existing Split Ring and Barrel Swivel concepts may be optional components in approved Direct-Tie configurations where appropriate. No snap/snap-swivel concept is added solely for Inline Spinner quick-change use.

These two additions and their recognition Media are staged in Drive Current, bringing the working candidate to 31 active canonical Tackle concepts while current GitHub `main` remains at 29. Targeted reference/shape/media validation is PASS, including 31/31 active Tackle recognition-media coverage. Browser review must confirm both new contextual Tackle popovers display the approved images correctly before Subphase B can advance. Final Repository Integrity, combined review, commit/push, and CI remain pending.
