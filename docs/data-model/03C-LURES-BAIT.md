# Freshwater Fishing Companion

**Document:** 03C-LURES-BAIT.md  
**Document Revision:** 0.3.0  
**Document Status:** Approved  
**Implementation Status:** IMPLEMENTED / VALIDATED / CLOSED — 13 active Lure/Bait identities  
**Decision Baseline:** D043, D056, D069

---

# Purpose

This document defines the implemented canonical Lure/Bait Reference Knowledge boundary required by What Should I Throw and future My Tackle matching. Current `main` implements the locked V1 domain in `data/lure-bait.js` / `LURE_BAIT_DATA`.

Lure/Bait describes the fishing-relevant lure or bait identity intentionally presented to Fish. It is distinct from functional Tackle components, Rig assembly, reusable Technique behavior, contextual Recommendation selection, and commercial product identity.

---

# Semantic Boundary

- **Tackle** owns functional fishing equipment and Rig-building components.
- **Lure/Bait** owns canonical presented lure/bait identities.
- **Rig** owns the ready-to-fish physical terminal configuration.
- **Technique** owns reusable presentation/retrieve/cadence/movement behavior.
- **Recommendation Decision Knowledge** owns Fish/Condition-specific selection, ranking, rationale, exact recommended size/weight/color/pattern, and contextual presentation adjustments.
- **My Tackle/User Knowledge** owns actual user possessions and fishing-relevant variants once implemented.

A complete lure may therefore have both a Lure/Bait identity and a Rig setup when the identity and physical connection/setup have distinct meanings. Inline Spinner and the Inline Spinner configuration of Direct-Tie Lure Setup are the implemented edge-case pattern.

---

# Canonical Identity

RP-B1 through RP-B2D and B-01 through B-13 lock the V1 canonical identities to exactly:

1. `stick-worm` — Stick Worm
2. `craw` — Craw
3. `creature-bait` — Creature Bait
4. `paddle-tail-swimbait` — Paddle-tail Swimbait
5. `tube` — Tube
6. `spinnerbait` — Spinnerbait
7. `crankbait` — Crankbait
8. `jerkbait` — Jerkbait
9. `inline-spinner` — Inline Spinner
10. `spoon` — Spoon
11. `minnow` — Minnow
12. `nightcrawler` — Nightcrawler
13. `cricket` — Cricket

No additional identity enters this production pass without reopening the bounded dependency gate.

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

The locked V1 record contract is:

```text
id
name
summary
createdVersion
lastModifiedVersion
isActive
presentationType
category
profile?
aliases[]?
```

`presentationType` and broad functional `category` are required. `profile` and aliases are used only when meaningful. Sparse subtype-specific intrinsic fields may be added only when the authored record demonstrates reusable reference value. Do not add universal `sizeRange`, `weightRange`, or `actionCharacteristics[]` fields in V1. Exact context-specific size, weight, color/pattern, action, and presentation remain Recommendation Decision Knowledge.

Natural bait records must not be forced to carry meaningless artificial-lure fields.

---

# Color / Pattern

Do not enumerate manufacturer/commercial color names as canonical Lure/Bait data. No normalized color/pattern vocabulary is introduced in Subphase B. A future normalized vocabulary requires a demonstrated Recommendation/My Tackle need and a separate approved gate.

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

Lure/Bait does not own inverse media-ID arrays. Production recognition Media now follows the shared Media ownership model:

```text
ownerType: "lure-bait"
ownerId: canonical Lure/Bait ID
```

Media remains the canonical attachment owner. Production implements recognition Media for the five Direct-Tie Lure/Bait identities plus the Paddle-tail Swimbait and Tube identities required by the two new Rigs. Spinnerbait, Crankbait, Jerkbait, and Spoon use approved original generic FCC recognition assets; Inline Spinner reuses the previously approved FCC artwork under a separate `ownerType: "lure-bait"` attachment while preserving the existing legacy Tackle attachment.

These recognition assets identify the generic lure category, not an exact commercial product. They follow the approved Lure Media production treatment in `MEDIA_GUIDE.md`: single-object, unbranded, reference-grounded imagery on the canonical `#f4f0e8` reference surface.

---

# Production Implementation Status — COMPLETE / VALIDATED / CLOSED

Current production implements the locked 13-identity vocabulary with Foundation fields plus `presentationType` and `category`; no color/pattern normalization or commercial product identity was introduced. The accepted Foundation implementation also includes the Direct-Tie Lure Setup configuration model, Weighted Swimbait Hook and Tube Jig dependencies, configured Inline Spinner Fish-guidance migration, and canonical recognition Media for the Rig-facing Lure/Bait identities.

The typed Rig↔Lure/Bait Compatibility relationships are implemented in `data/compatibility.js` under the canonical relationship contract in `09-RELATIONSHIPS.md`; Lure/Bait does not maintain a parallel or inverse compatibility registry. Runtime availability/media presentation defects discovered during Subphase B were repaired and accepted before Foundation closeout. Detailed review chronology remains in the closed Foundation workstream and Git history.

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


# RP-B1 — Cross-Domain Semantic Roles — LOCKED

Rig, Tackle, and Lure/Bait may intentionally represent related fishing concepts when each owns a distinct semantic role.

- **Rig** owns generic ready-to-fish assembly/configuration and component order.
- **Tackle** owns reusable physical component requirements.
- **Lure/Bait** owns the fishing identity presented to the Fish.
- **Recommendation Decision Knowledge** resolves those generic identities into context-specific choices and exact build parameters.

Context-specific builds such as **Texas Rig for Bass in Shallow Water** are recommendation outputs/configurations, not new canonical Rig entities. They may select exact Lure/Bait identities and exact component parameters while following the canonical Rig build order.

Existing overlapping records such as `bait`, `soft-plastic`, and `inline-spinner` are therefore not presumed duplicate or migration debt merely because a corresponding Lure/Bait identity exists. Each remains valid when it owns an independent semantic role. Future lure-like Rigs such as crankbait or swimbait setups may likewise coexist with Crankbait or Swimbait Lure/Bait identities when the Rig teaches the generic setup and the Lure/Bait record owns the presented fishing identity.

The single-owner rule is violated only when two records attempt to own the same semantic fact for the same purpose.


# RP-B2A — Technique Dependency Rule — LOCKED

Lure/Bait scope planning must account for the Technique knowledge required by the Rigs and lure/bait identities introduced in the same dependency-complete foundation. Rig Detail presents **Best For / Good Conditions / Techniques**, with Technique links backed by canonical Rig↔Technique intrinsic Compatibility.

A Technique is not added merely because it is mechanically possible with a Rig. Compatibility requires that it be genuinely usable within the Rig's normal intended use envelope. Recommendation Decision Knowledge later determines which eligible Technique is appropriate for a particular Fish and Conditions context.

# RP-B2B — Dependency-Complete Expansion Rule — LOCKED

A candidate Lure/Bait is not approved for Version 1 in isolation. Before it enters the canonical vocabulary, evaluate the complete usable knowledge path across Lure/Bait, Rig, Tackle, Technique, intrinsic Compatibility, and affected Fish↔Rig recommendations.

- A new Lure/Bait does not automatically require a new Rig. Create a Rig only when meaningful setup/assembly knowledge is required and no existing Rig adequately teaches it.
- Any new Rig must be dependency-complete: all required canonical Tackle components must already exist or be added in the same approved scope.
- Any new Rig must receive the genuinely viable Technique set governed by RP-B2A; mechanical possibility alone is insufficient.
- Any new Lure/Bait must receive all applicable intrinsic Compatibility coverage required for the authored scope so the canonical identity does not become a dangling knowledge node.
- Adding a new Rig triggers bounded re-evaluation only of Fish whose recommendation set could plausibly be affected by that Rig. It does not automatically reopen all 30 Fish.
- Existing Primary/Alternative Fish↔Rig recommendations remain unchanged unless the expanded Rig candidate set provides evidence that another Rig is a better fit.
- The dependency sweep is completed before the final Lure/Bait vocabulary is locked.


# Final Subphase B Dependency Lock — B-01 through B-13

- Paddle-tail Swimbait adds Weighted Swimbait Hook Rig + Weighted Swimbait Hook Tackle.
- Tube adds Tube Jig Rig + Tube Jighead Tackle.
- Spinnerbait, Crankbait, Jerkbait, Inline Spinner, and Spoon use approved configurations of Direct-Tie Lure Setup; legacy Inline Spinner Setup migrates to that Rig family.
- Minnow and Nightcrawler are compatible with Fixed Bobber, Slip Bobber, Basic Bottom, Live-Bait Slip-Sinker, Three-Way, Bottom-Bouncer / Spinner, and Split-Shot Bait Rigs.
- Cricket is compatible with Fixed Bobber, Slip Bobber, Basic Bottom, and Split-Shot Bait Rigs.
- Generic `bait` / `soft-plastic` Tackle remain physical component concepts; Lure/Bait owns the specific presented identity.
- Existing Inline Spinner Fish guidance migrates to Direct-Tie Lure Setup + Inline Spinner without priority/rationale changes; new Rig/configuration compatibility does not inherit Fish guidance automatically.
