# Freshwater Fishing Companion

**Document:** 05-TACKLE.md  
**Document Revision:** 0.5.11  
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

# Tackle Reference — Version 1 Surface

**Status:** APPROVED / REQUIRED IN V1 / IMPLEMENTATION PENDING

Tackle Reference is the standalone user-facing Reference Knowledge home for canonical Tackle concepts. It gives the same canonical Tackle identities already referenced by **Rig Guide -> Rig -> What You Need** a durable learning and discovery surface outside the Rig domain. It does not create duplicate Tackle records or move relationship ownership away from the canonical owners defined in this document.

The approved Version 1 naming and surface boundary is:

- **Tackle Reference** — the overall user-facing Reference Knowledge feature/domain.
- **Tackle Index** — the primary browse/index view inside Tackle Reference.
- **Search** — discovery behavior inside Tackle Reference; historical **Find Tackle** wording does not define a separate feature or knowledge domain.
- **Tackle Detail** — the learning view for one canonical Tackle concept using the existing `data/tackle.js` identity and Media-owned recognition imagery.

Where canonical data exists, the Tackle Detail experience may expose identity/name, aliases, recognition imagery and notes, summary/purpose, common variants, related Tackle, and **Used In** Rig connections derived from `Rig.componentRequirements[].tackleId`. Connected navigation may expose other approved canonical knowledge without duplicating relationship ownership.

Exact browse taxonomy, category presentation, search fields/ranking, and detail-page layout remain implementation/refinement work for the Tackle Reference build.

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

# V1 Completion Audit - 2A.1 / 2A.3 Hardware Carry-Forward

**Status:** 2A.3 CLOSED / APPROVED / NO ADDITIONAL HARDWARE GAP / PRODUCTION MIGRATION PENDING LATER DEPENDENCY-COMPLETE IMPLEMENTATION

The FCC 37 Blade Bait cross-domain review established **Snap** as a required canonical Tackle dependency for a dependency-complete Direct-Tie Blade Bait configuration. **2A.3.1 is now CLOSED / APPROVED:** Version 1 adds **Snap** as a pending canonical Tackle concept with proposed stable ID `snap`.

Snap is a small reusable wire terminal connector that opens and closes to attach a lure or other compatible terminal item without incorporating a rotating swivel. Its purpose is to provide a secure removable connection that supports efficient lure changes and appropriate movement at the attachment point. Common closure forms such as Duo-Lock, Cross-Lock/Coastlock-style, and similar locking snap forms remain variants of the one Snap concept rather than separate canonical Tackle identities.

Snap is explicitly distinct from **Split Ring**, **Barrel Swivel**, and the approved separate **Snap Swivel** concept. Beginner recognition guidance/media should make the no-swivel boundary visible: a plain Snap is the opening/closing wire connector itself; a Snap Swivel combines a snap with a rotating swivel body. The approved Blade Bait configuration requires Snap. No new Rig is created by this hardware addition.

This audit approval does not add Snap to the current production source yet. The current implementation remains exactly 31 active canonical Tackle concepts until dependency-complete implementation is explicitly authorized.

**2A.3.2 Snap Swivel is CLOSED / APPROVED:** Version 1 adds **Snap Swivel** as a distinct pending canonical Tackle concept with proposed stable ID `snap-swivel`. Snap Swivel is one integrated terminal component combining a rotating swivel body with an opening-and-closing snap. It is not a variant of plain Snap, is not a variant of standalone Barrel Swivel, and must not be represented as two separate Rig component requirements. Common combinations of swivel construction and snap closure remain variants of the one Snap Swivel concept rather than separate canonical identities. No current or pending Rig is changed to require Snap Swivel by this decision.

Snap Swivel does not automatically satisfy a canonical Snap requirement or a standalone Barrel Swivel requirement. Any future substitution, optional Rig use, or satisfaction rule must be explicitly authored for the applicable setup rather than inferred from overlapping function.

**2A.3.3 Circle Hook is CLOSED / APPROVED — NO NEW CANONICAL TACKLE IDENTITY:** Circle Hook remains a standard Hook Style / common variant under the existing canonical **Fishing Hook** (`hook`) concept. The approved My Tackle Hook-family contract already represents `Circle` as a standard Hook Style and already maps that style to generic `hook` when the user explicitly confirms canonical mapping; selecting the style itself never silently creates that mapping. No current Rig requires a Circle-Hook-specific component for truthful buildability, so a separate `circle-hook` Reference Knowledge identity would duplicate the existing Hook-style taxonomy without a demonstrated readiness need. Tackle Reference may teach Circle Hook as a recognizable/common Fishing Hook variant, including variant-recognition imagery where useful, without creating a separate canonical record. Any regulation-aware requirement for Circle Hook characteristics remains owned by authoritative regulatory constraints and Recommendation legality rather than by Tackle taxonomy. Reopen this boundary only if a later Rig, readiness, or regulation-aware executability requirement demonstrates that generic `hook` is insufficient. No new Rig or production migration is authorized by this disposition.

**2A.3.4 Treble Hook is CLOSED / APPROVED — INCLUDED, NO NEW CANONICAL TACKLE IDENTITY:** Treble Hook remains a standard Hook Style / recognizable common variant under canonical **Fishing Hook** (`hook`). The approved Hook-family contract already includes `Treble` as a standard Hook Style and identifies generic `hook` as its normal explicit canonical mapping candidate; selecting Treble style itself never silently creates or changes canonical mapping. No current Version 1 Rig requires a Treble-specific component for truthful buildability. Where a bait presentation or Recommendation requires or prefers a treble hook, that distinction belongs to the Hook Style constraint rather than a separate `treble-hook` Reference Knowledge identity. Treble hooks incorporated into complete Lure/Bait identities remain constituent lure hardware for ordinary Rig readiness and do not create a separate Rig component requirement merely because they are replaceable. Regulation-aware restrictions remain owned by authoritative regulatory constraints / Recommendation legality. Dependency-complete implementation should broaden the existing Fishing Hook reference copy, common-variant coverage, and recognition help so Treble is represented truthfully, including variant-recognition imagery where appropriate. Reopen this canonical boundary only if a later Rig, replacement-hook/maintenance workflow, Recommendation, or regulatory-executability requirement demonstrates that generic `hook` plus Hook Style is insufficient. No new Rig or immediate production migration is authorized by this disposition.

**2A.3.5 Weighted Swimbait Hook canonical boundary is CLOSED / APPROVED — RETAIN CANONICAL NAME + ID, BROADEN APPLICATION:** The existing canonical **Weighted Swimbait Hook** identity and stable ID `weighted-swimbait-hook` remain the Version 1 canonical Tackle concept. Do not rename it to Weighted Soft-Plastic Hook, Weighted Hook, or Weighted Bait Hook. The industry-familiar swimbait wording remains the primary display name because it is recognizable on manufacturer/retailer labeling and supports low-friction My Tackle identification, while the canonical definition, purpose, aliases, common variants, and recognition guidance must make clear that this integrated-weight wide-gap/offset keeper-hook architecture may also be used with other compatible soft plastics such as frogs/toads, jerkbait-style plastics, worms, craws, and similar baits when explicitly supported. **Weighted Hook** remains useful search/alias language but is too broad to own the canonical identity because unrelated weighted hook architectures exist; **Weighted Bait Hook** is rejected as ambiguous with ordinary bait-hook terminology. The approved Rig-level generalization to **Weighted Soft-Plastic Hook Rig** does not require the underlying Tackle display name to match the Rig family name. The hardware remains distinct from ordinary unweighted Worm/EWG Hooks, Jigheads, and separate sinker-plus-hook architectures; Integrated Weight remains fishing-relevant for truthful mapping/readiness. No duplicate weighted-frog or generalized second weighted-hook canonical record is created. Current production source remains unchanged until dependency-complete implementation is explicitly authorized.

The final 2A.3 hardware dispositions are:

- **Snap - CLOSED / APPROVED:** required canonical Tackle dependency for Blade Bait; canonical name **Snap**, proposed ID `snap`, no integrated swivel;
- **Snap Swivel - CLOSED / APPROVED:** distinct pending canonical Tackle concept, proposed ID `snap-swivel`; integrated swivel + opening/closing snap; no current Rig requirement and no automatic Snap/Barrel Swivel satisfaction;
- **Circle Hook - CLOSED / APPROVED / NO NEW CANONICAL IDENTITY:** standard Hook Style/common variant under Fishing Hook (`hook`); no current Rig requires Circle-Hook-specific hardware; legality remains separate;
- **Treble Hook - CLOSED / APPROVED / NO NEW CANONICAL IDENTITY:** included as standard Hook Style/common variant under Fishing Hook (`hook`); may be required/preferred through Hook Style when applicable, but no separate `treble-hook` Reference record is created;
- **Weighted Swimbait Hook canonical boundary - CLOSED / APPROVED:** retain canonical name **Weighted Swimbait Hook** and stable ID `weighted-swimbait-hook`; broaden purpose/aliases/recognition to cover compatible non-swimbait soft-plastic applications; retain integrated-weight readiness boundary; do not create a duplicate generalized or weighted-frog canonical Tackle identity;
- 2A.2 is now closed; no additional physical hardware candidate was exposed by Fish Eggs / Roe or the final Rig Completeness closeout.

The earlier Foundation decision not to add Snap/Snap Swivel solely for Inline Spinner quick-change use remains historically correct. FCC 37 establishes a different requirement: dependency-complete Blade Bait support.

The Soft Frog / Toad challenge does **not** add a new production Tackle concept by itself. The carried 2A.3 boundary review is now closed: existing `weighted-swimbait-hook` remains the canonical Tackle identity while its future application and recognition guidance broadens to support the approved generalized Rig truthfully without duplication or misleading paddle-tail-only wording.

**Prepared Bait hardware disposition — CLOSED / NO NEW 2A.3 CANDIDATE.** FCC 38 determined that dedicated dip-bait worms, tubes, sponges, springs, holders, and similar carriers are legitimate specialized delivery hardware but are outside the required Version 1 beginner teachable Tackle path. Do not add a canonical **Dip-Bait Holder / Prepared-Bait Holder** concept merely for completeness and do not treat specialized thin dip-bait delivery as a required Rig-readiness dependency. A later Prepared Bait reference surface may acknowledge the specialized method through a small set of vetted external further-reading links without creating canonical Tackle identity or a new schema requirement. **Treble Hook** was reviewed independently in 2A.3.4 and remains Hook Style `Treble` / a recognizable common variant under generic Fishing Hook (`hook`); Prepared Bait does not establish a Treble-specific dependency.

**Fish Eggs / Roe hardware disposition — CLOSED / NO NEW 2A.3 CANDIDATE.** The ordinary Version 1 path uses existing Hook, Split Shot, and generic Bait concepts within Split-Shot Bait Rig. No specialized Salmon-Egg Hook / Egg Hook or other new canonical Tackle identity is required. Treble Hook was reviewed independently in 2A.3.4 and remains Hook Style `Treble` / a recognizable common variant under generic Fishing Hook (`hook`); Fish Eggs / Roe does not make it mandatory.

**2A.3 Tackle Hardware Completeness - CLOSED / APPROVED.** The complete proposed Version 1 30-identity Lure/Bait scope and approved 23-Rig architecture expose no additional ordinary physical-hardware gap beyond the resolved 2A.3 set. Version 1 adds pending canonical **Snap** (`snap`) and **Snap Swivel** (`snap-swivel`) concepts. Circle Hook and Treble Hook remain standard Hook Styles / recognizable variants under canonical Fishing Hook (`hook`) rather than separate canonical Tackle identities. Existing **Weighted Swimbait Hook** (`weighted-swimbait-hook`) retains its industry-familiar canonical name and stable ID while future purpose, aliases, common variants, and recognition guidance broaden to compatible non-swimbait soft-plastic applications. Dip-Bait Holder / Prepared-Bait Holder and Egg Hook remain deliberate non-additions. No Rig #24 or additional canonical Tackle identity is justified by this closeout.

Pending Direct-Tie and Weighted Soft-Plastic Hook Rig configurations, intrinsic Compatibility, Canonical Requirement Satisfaction, Technique/Fish relationship authoring, recognition Media, and validators remain dependency-complete implementation work rather than unresolved 2A.3 scope. Current production remains exactly 31 active canonical Tackle concepts until explicit implementation authorization.

**Exact next action:** **2B - Tiered Suggestions**.

---

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
