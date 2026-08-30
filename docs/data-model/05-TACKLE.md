# Freshwater Fishing Companion

**Document:** 05-TACKLE.md  
**Document Revision:** 0.5.0  
**Document Status:** Approved  
**Implementation Status:** IMPLEMENTED / VALIDATED CURRENT — 31 active canonical Tackle concepts with recognition-media coverage  
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

Current `main` contains 31 active canonical Tackle concepts. The completed Recommendation Prerequisites Foundation added **Weighted Swimbait Hook** and **Tube Jighead** plus approved recognition Media for both concepts, bringing active Tackle recognition-media coverage to 31/31. Weighted Swimbait Hook geometry is anchored to the approved Mustad Power Lock Plus reference; the selected Tube Jighead production asset is anchored to the reviewed Tackle Warehouse Tube Jig Heads category plus supporting manufacturer geometry references.

Repository Audit Section 4 is **implemented / runtime-validated / closed**:

- Tackle `mediaIds[]` were removed,
- Media owns Tackle attachment through `ownerType` + `ownerId`,
- runtime lookup derives Media from that owner relationship,
- active Tackle Media owner IDs were validated against canonical Tackle IDs,
- recognition popovers and related-component behavior passed Edge runtime validation.

---

# Lure/Bait Boundary — Implemented

D069 approves a separate canonical **Lure/Bait** Reference domain, governed by `03C-LURES-BAIT.md`.

The semantic boundary is:

- **Tackle** owns functional fishing equipment and Rig-building components such as hooks, weights, swivels, bobbers, jigheads, leader, and bottom-bouncer hardware.
- **Lure/Bait** owns canonical lure and bait identities intentionally presented to Fish, such as Stick Worm, Craw, Paddle-tail Swimbait, Spinnerbait, Crankbait, Inline Spinner, Spoon, Minnow, or Nightcrawler.

The Lure/Bait foundation is implemented on current `main`. Existing lure-like Tackle records are not silently deleted or renamed merely because a corresponding Lure/Bait identity exists; the Direct-Tie configuration model references canonical Lure/Bait identities for presented lures while preserving existing Tackle records unless a distinct approved component disposition requires change.

Complete-lure terminal setups may still exist as Rigs where physical connection/setup has distinct semantic ownership. Under the implemented prerequisite architecture, legacy Inline Spinner Setup is generalized to Direct-Tie Lure Setup while Inline Spinner is a canonical Lure/Bait identity.

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

# Recommendation Prerequisites Tackle Changes — COMPLETE / VALIDATED

The completed Foundation added exactly two physical Tackle concepts required by the approved new Rigs: **Weighted Swimbait Hook** and **Tube Jighead**. Existing `bait` and `soft-plastic` concepts remain valid generic physical component requirements. Existing Split Ring and Barrel Swivel concepts may be optional components in approved Direct-Tie configurations where appropriate. No snap/snap-swivel concept was added solely for Inline Spinner quick-change use.

Both additions and their recognition Media are production behavior on current `main`, bringing the canonical library to 31 active Tackle concepts with 31/31 active recognition-media coverage. Runtime popover/media review and Repository Integrity passed before Foundation closeout; detailed review chronology belongs in the closed Foundation workstream and Git history.
