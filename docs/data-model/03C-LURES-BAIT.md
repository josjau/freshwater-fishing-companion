# Freshwater Fishing Companion

**Document:** 03C-LURES-BAIT.md  
**Document Revision:** 0.3.8  
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

# V1 Completion Audit - 2A.1 Approved Planned Expansion

**Status:** CLOSED / APPROVED FOR AUDIT STAGE / NOT YET IMPLEMENTED

FCC 37 reopened the bounded RP-B2B dependency gate for Version 1 completeness without changing the current production library. The audit-stage Version 1 scope is now **30 proposed canonical Lure/Bait identities**: the 13 currently implemented identities plus these 17 approved additions:

1. Curly-tail Grub
2. Finesse / Straight-tail Worm
3. Soft Jerkbait
4. Soft Minnow / Shad
5. Soft Frog / Toad
6. Skirted Jig
7. Topwater Plug
8. Buzzbait
9. Bladed Jig
10. Blade Bait
11. Cut Bait
12. Prepared Bait
13. Hollow-Body Frog
14. Crayfish
15. Leech
16. Insect Larva
17. Fish Eggs / Roe

Approved boundary and variant dispositions are:

- Ribbon / Curly-tail Worm remains variant/profile guidance rather than a separate canonical identity.
- Lizard remains a Creature Bait variant.
- Ned-style plastic remains variant / Recommendation detail.
- Popper, Walking Bait, and Prop Bait remain Topwater Plug variants.
- Dough/paste and stink/dip bait remain Prepared Bait variants.
- Corn is not canonicalized.
- Chicken liver is not separately canonicalized.
- No additional generic live-baitfish identity is added beyond Minnow unless a later dependency review demonstrates a concrete gap.

Three complete-lure decisions are additionally locked for the pending dependency-complete expansion:

- **Buzzbait:** distinct canonical Lure/Bait; use Direct-Tie Lure Setup rather than a new top-level Rig; no new canonical Tackle dependency; intrinsic Technique set is Steady Retrieve; bounded Fish review begins with Largemouth Bass, Smallmouth Bass, and Spotted Bass.
- **Bladed Jig:** distinct canonical Lure/Bait; use Direct-Tie Lure Setup rather than a new top-level Rig; no new canonical Tackle dependency; intrinsic Techniques are Steady Retrieve and Stop-and-Go Retrieve; bounded Fish review begins with Largemouth Bass, Smallmouth Bass, Spotted Bass, and Walleye.
- **Blade Bait:** distinct canonical Lure/Bait; use Direct-Tie Lure Setup rather than a new top-level Rig; intrinsic Techniques are Lift and Fall, Vertical Jig, and Steady Retrieve; **Snap is the required canonical Tackle dependency; 2A.3.1 is CLOSED / APPROVED with canonical name Snap and proposed ID `snap`.** Bounded Fish review begins with Walleye, Smallmouth Bass, Largemouth Bass, and Spotted Bass; Sauger, Saugeye, White Bass, Striped Bass, Hybrid Striped Bass, and Crappie remain investigation candidates rather than assumed suitability.

The corresponding pending intrinsic Compatibility ownership is recorded in `09-RELATIONSHIPS.md`; Direct-Tie setup ownership is recorded in `03-RIGS.md`; the Snap dependency is recorded in `05-TACKLE.md`. Current production remains exactly 13 active Lure/Bait identities until dependency-complete production authoring, validation, and explicit implementation authorization occur.

**2A.2A Rig architecture coverage checkpoint — CLOSED / APPROVED.** FCC 38 screened all 30 proposed Version 1 Lure/Bait identities against the current 23-Rig library. The exact architecture matrix is owned by `03-RIGS.md`. Twenty-six identities show no demonstrated top-level Rig architecture gap at this screening stage. Four identities require deliberate 2A.2B challenge before Rig Completeness can close: **Skirted Jig, Soft Frog / Toad, Prepared Bait, and Fish Eggs / Roe**. This checkpoint does not change the 30-identity Lure/Bait scope, does not authorize production records, and does not itself author Rig↔Lure/Bait Compatibility.

**2A.2B.1 Skirted Jig challenge — CLOSED / APPROVED.** Skirted Jig remains a distinct proposed Version 1 Lure/Bait identity but does not require a new top-level Rig. The approved representation is a new **Skirted Jig configuration of Direct-Tie Lure Setup**. Optional soft-plastic trailer setup and common skirted-jig forms such as football, flipping/pitching, swim, finesse, and casting jigs remain configuration/variant guidance rather than separate Rig identities. No new canonical Tackle dependency was demonstrated by this challenge. Exact intrinsic Compatibility, Technique, and Fish-suitability authoring remains deferred to the dependency-completeness pass. Current production remains 13 active Lure/Bait identities and 23 canonical Rigs.

**2A.2B.2 Soft Frog / Toad challenge — CLOSED / APPROVED.** Soft Frog / Toad remains a distinct proposed Version 1 Lure/Bait identity and does not require a new top-level Rig. Its ordinary weightless presentation is represented by the existing **Weightless Soft-Plastic Rig**. For the legitimate weighted-hook presentation, FCC approved generalizing the existing production **Weighted Swimbait Hook Rig** into the audit-stage **Weighted Soft-Plastic Hook Rig** family and using `configurations[]` for lure-specific setup knowledge, initially including **Paddle-tail Swimbait** and **Soft Frog / Toad** configurations. This is a generalization of an existing Rig architecture, not Rig #24. 2A.3.5 resolved the carried Tackle boundary: retain canonical **Weighted Swimbait Hook** with stable ID `weighted-swimbait-hook`, broaden future purpose/aliases/recognition for compatible non-swimbait soft-plastic applications, and do not create a duplicate generalized or weighted-frog Tackle identity. Pending intrinsic Rig↔Lure/Bait ownership is recorded in `09-RELATIONSHIPS.md`; exact Technique and Fish-suitability authoring remains later work. Current production remains 13 active Lure/Bait identities and 23 canonical Rigs until explicit production migration is authorized.

**2A.2B.3 Prepared Bait challenge — CLOSED / APPROVED.** Prepared Bait remains a distinct proposed Version 1 Lure/Bait identity and does not require a new top-level Rig. Dough/paste and stink/dip remain variants of the same Prepared Bait identity, but Version 1 teaches the ordinary beginner path using prepared bait that can be retained on an appropriate ordinary hook within existing bait Rig architecture, principally Basic Bottom Rig. Thin dip-bait delivery that requires a specialized worm/tube/sponge/holder is acknowledged as a legitimate specialized method but is outside the required Version 1 teachable Rig/Tackle path; no Dip-Bait Holder canonical Tackle requirement is created. If useful when the Prepared Bait reference surface is implemented, FCC may provide a small set of vetted external **Further Reading** links for specialized dip-bait methods without treating those methods or components as canonical teachable Rig/Tackle content and without adding a new schema field solely for that purpose. Exact intrinsic Compatibility, Technique, and Fish-suitability authoring remains later work. Current production remains 13 active Lure/Bait identities and 23 canonical Rigs until explicit production migration is authorized.

**2A.2B.4 Fish Eggs / Roe challenge — CLOSED / APPROVED.** Fish Eggs / Roe remains a distinct proposed Version 1 Lure/Bait identity and does not require a new top-level Rig. The primary beginner-teachable architecture is the existing **Split-Shot Bait Rig**. Existing Fixed Bobber and Slip Bobber architectures may also become explicit compatibility paths where later relationship authoring establishes them. Moving-water drift is owned by the existing **Natural Drift** Technique rather than a separate Drift Rig. Existing Hook, Split Shot, and generic Bait Tackle are sufficient for the ordinary path; no specialized egg hook or other new canonical Tackle dependency is required. Treble Hook was reviewed independently in 2A.3.4 and remains Hook Style `Treble` under generic Fishing Hook (`hook`) rather than a Fish Eggs / Roe requirement. Because requirement satisfaction is explicit rather than inferred, the later dependency-completeness pass must explicitly disposition Fish Eggs / Roe -> generic `bait` satisfaction.

**2A.2 Rig Completeness — CLOSED / APPROVED.** All 30 proposed Version 1 Lure/Bait identities now have a defensible architecture within the existing 23 top-level Rig library. No Rig #24 is justified. Exact pending configuration records, generalized weighted-hook Rig migration, intrinsic Compatibility, canonical requirement satisfaction, Technique edges, and Fish suitability remain for later dependency-complete authoring; this audit closeout does not change current production counts.

**2A.3 Tackle Hardware Completeness - CLOSED / APPROVED.** The completed hardware sweep adds exactly two pending canonical Tackle concepts: **Snap** (`snap`) and **Snap Swivel** (`snap-swivel`). Circle Hook and Treble Hook remain Hook Styles / recognizable variants under generic Fishing Hook (`hook`), and existing **Weighted Swimbait Hook** retains stable canonical ID `weighted-swimbait-hook` while future reference/application guidance broadens to compatible non-swimbait soft plastics. Dip-Bait Holder / Prepared-Bait Holder and Egg Hook remain deliberate non-additions. No additional physical-hardware gap or Rig #24 is justified by the 30-identity proposed Version 1 Lure/Bait scope.

Pending configuration records, intrinsic Compatibility, Canonical Requirement Satisfaction, Technique/Fish relationship authoring, Media, and validators remain dependency-complete implementation work; current production remains exactly 13 active Lure/Bait identities until explicit migration authorization.

**Exact audit resume:** **2B - Tiered Suggestions**.


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
