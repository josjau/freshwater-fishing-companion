# Freshwater Fishing Companion

**Document:** 03C-LURES-BAIT.md  
**Document Revision:** 0.1.0  
**Document Status:** Approved  
**Implementation Status:** Approved / Not Implemented  
**Decision Baseline:** D043, D056, D069

---

# Purpose

This document defines the approved canonical Lure/Bait Reference Knowledge boundary required by What Should I Throw and future My Tackle matching. No canonical Lure/Bait production dataset exists on current `main`.

Lure/Bait describes the fishing-relevant lure or bait identity intentionally presented to Fish. It is distinct from functional Tackle components, Rig assembly, reusable Technique behavior, contextual Recommendation selection, and commercial product identity.

---

# Semantic Boundary

- **Tackle** owns functional fishing equipment and Rig-building components.
- **Lure/Bait** owns canonical presented lure/bait identities.
- **Rig** owns the ready-to-fish physical terminal configuration.
- **Technique** owns reusable presentation/retrieve/cadence/movement behavior.
- **Recommendation Decision Knowledge** owns Fish/Condition-specific selection, ranking, rationale, exact recommended size/weight/color/pattern, and contextual presentation adjustments.
- **My Tackle/User Knowledge** owns actual user possessions and fishing-relevant variants once implemented.

A complete lure may therefore have both a Lure/Bait identity and a Rig setup when the identity and physical connection/setup have distinct meanings. Inline Spinner and Inline Spinner Setup are the canonical edge-case pattern.

---

# Canonical Identity

V1 canonical entities are fishing-relevant lure/bait types rather than brands, models, SKUs, or exhaustive commercial variants. Examples include Stick Worm, Craw, Creature Bait, Paddle-tail Swimbait, Tube, Spinnerbait, Crankbait, Jerkbait, Inline Spinner, Spoon, Minnow, Nightcrawler, and Cricket.

Each record distinguishes at minimum:

```text
presentationType: artificial | natural-bait
```

A broader functional `category` and fishing-specific `profile` may be used where they add demonstrated value, but excessive taxonomy depth is not required.

---

# Foundation and Optional Intrinsic Attributes

Every Lure/Bait record inherits Foundation fields:

```text
id
name
summary
createdVersion
lastModifiedVersion
isActive
```

The production pilot may add demonstrated reusable fields such as:

```text
aliases[]
presentationType
category
profile
sizeRange?
weightRange?
actionCharacteristics[]?
```

Not every optional field applies to every lure/bait. Sparse subtype-specific attributes are preferred over a universal all-lure schema. Size/weight ranges belong here only when evidence demonstrates they are genuinely reusable intrinsic/reference information; exact context-specific recommendations remain Decision Knowledge.

Natural bait records must not be forced to carry meaningless artificial-lure fields.

---

# Color / Pattern

Do not enumerate manufacturer/commercial color names as canonical Lure/Bait data. A normalized fishing-semantic color/pattern vocabulary may be introduced when demonstrated by recommendation and My Tackle matching. Exact vocabulary remains a production-pilot subdecision under D069.

Recommendation owns “use this color/pattern here.” My Tackle may retain the user's exact commercial/free-text variant while also mapping to any approved normalized vocabulary.

---

# Commercial Product Boundary

Brand, model, SKU/UPC, retailer identity, and exhaustive product-catalog data are not canonical Lure/Bait Reference Knowledge and are not required for V1. Future ProductDefinition architecture requires a separate demonstrated commercial-product use case.

---

# Compatibility

Intrinsic compatibility is stored once under the typed Compatibility Relationship domain in `09-RELATIONSHIPS.md`:

- Rig ↔ Lure/Bait;
- Lure/Bait ↔ Technique.

Lure/Bait records do not store inverse `compatibleRigIds[]`, `compatibleTechniqueIds[]`, Fish recommendation arrays, Condition suitability arrays, scores, or rankings. Reverse navigation is derived.

Fish/Condition-specific lure suitability is Recommendation Decision Knowledge.

---

# My Tackle Mapping

Future owned items may reference a canonical Lure/Bait identity while preserving user-specific/commercial attributes such as brand/model, exact size/weight, color text or normalized family, quantity, condition, and notes. Exact owned-item fields remain governed by `05A-INVENTORY.md` and the User Data/My Tackle gate.

Persistent ownership and temporary/current availability must remain distinct.

---

# Media Ownership

Lure/Bait does not own inverse media-ID arrays. If media is implemented, attachment follows the shared Media ownership model:

```text
ownerType: "lure-bait"
ownerId: canonical Lure/Bait ID
```

Exact `ownerType` literal may be finalized with implementation, but Media remains the canonical attachment owner.

---

# Production Gate

Before Lure/Bait production activation:

1. finalize the canonical V1 entity vocabulary against real Rig/Recommendation needs;
2. finalize only demonstrated optional intrinsic fields;
3. deliberately disposition current lure-like Tackle records without duplicate canonical ownership;
4. implement Rig↔Lure/Bait compatibility for the authored scope;
5. define any normalized color/pattern vocabulary only if recommendation/My Tackle matching requires it;
6. validate IDs, lifecycle, references, compatibility, and staged completeness;
7. preserve the commercial-product and contextual-Recommendation boundaries above.

---

# Related Documents

- `01-FOUNDATION.md`
- `03-RIGS.md`
- `03A-TECHNIQUES.md`
- `03B-CONDITIONS.md`
- `05-TACKLE.md`
- `05A-INVENTORY.md`
- `07-USER-DATA.md`
- `09-RELATIONSHIPS.md`
- `../ARCHITECTURE.md`
- `../DECISIONS.md`
