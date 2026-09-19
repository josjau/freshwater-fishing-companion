# Freshwater Fishing Companion

**Document:** 03-RIGS.md  
**Document Revision:** 0.5.13  
**Document Status:** Approved  
**Implementation Status:** IMPLEMENTED / VALIDATED CURRENT — 23 active canonical Rigs including Direct-Tie Lure Setup, Weighted Swimbait Hook Rig, and Tube Jig Rig  
**Decision Baseline:** D024, D025, D026, D027, D028, D042-D049, D056, D057, D065

---

# Purpose

This document defines the current canonical Rig entity for Freshwater Fishing Companion.

A Rig represents a complete ready-to-fish terminal setup. Rig owns physical assembly, component requirements, real tied-connection context, and Rig-specific configuration. Reusable presentation behavior belongs to the approved Technique domain when it generalizes across setups.

---

# Current Production Schema

Every current Rig contains the Foundation fields plus:

```text
difficulty
conditionTags[]
componentRequirements[]
knotApplications[]
assemblySteps[]
setupNotes[]
variationIds[]
tutorialVideo
```

Current production does **not** contain:

```text
targetFishIds[]
techniqueIds[]
imageIds[]
```

Those fields must not be described as current Rig schema.

Current production includes two bounded optional structures without changing Rig ownership:

```text
lureBaitRequirements[]   # specific canonical Lure/Bait required by a Rig when applicable
configurations[]         # only when one Rig family has materially shared terminal architecture with lure-specific setup variants
```

`Direct-Tie Lure Setup` uses `configurations[]`; its configuration records own the applicable Lure/Bait requirement, Tackle requirements, knot applications, assembly steps, setup notes, mistakes, configuration-specific references, and optional configuration-specific `tutorialVideo`. Weighted Swimbait Hook Rig and Tube Jig Rig use top-level `lureBaitRequirements[]` and top-level `tutorialVideo`. These fields express physical/setup requirements only; contextual recommendation suitability remains outside Rig.

---

# Field Definitions

## difficulty

Recommended experience level for assembling and fishing the Rig correctly.

Allowed values:

- Beginner
- Beginner+
- Intermediate
- Intermediate+
- Advanced
- Expert

Core is not a difficulty value. Core membership is owned separately by `CORE_RIG_IDS`.

## conditionTags[]

Current transitional Rig-owned text metadata describing conditions where the Rig performs well. RP-A1 locks this field as **frozen legacy metadata** during Recommendation Prerequisites Foundation Subphase A. Existing values remain temporarily because current Rig Search and the Rig Detail **Good Conditions** presentation still consume them, but no new `conditionTags[]` vocabulary may be introduced.

RP-A1 explicitly prohibits converting these strings into `conditionIds[]` or creating a Rig↔Condition relationship. Contextual “works well in” suitability belongs to future Recommendation Decision Knowledge. The field is removed only after the replacement Recommendation owner and dependent search/presentation behavior are implemented and validated.

## componentRequirements[]

Authoritative Rig-to-Tackle usage relationship. Each requirement references canonical Tackle through `tackleId` and carries only Rig-specific usage context such as quantity, required/optional status, order, configuration guidance, assembly role, and notes.

Canonical Tackle owns component identity and display name. Tackle does not store inverse `rigIds[]` solely for **Used In** navigation.

A separate requirement-level ID is not required by the current feature set.

### Alternate-terminal configurations — Deferred / Not Implemented

Current `componentRequirements[]` describes one coherent ready-to-fish setup. It does not model mutually exclusive terminal branches inside one Rig.

The canonical Slip Bobber Rig currently owns the hook-plus-live/natural-bait configuration. A jig is a legitimate alternate presentation, but it is not a simultaneous `bait` value and must not be added as an ad hoc optional requirement that makes assembly/readiness ambiguous.

Before one Rig can offer hook+bait **or** jig terminal choices, approve a reusable model for component substitution, assembly steps, readiness, knots, and setup/presentation consequences—or approve a separate Rig when the configurations should remain distinct. This is deferred under D065 and does not block the current 21-Rig library.

## knotApplications[]

Authoritative Rig-owned descriptions of real tied connections required by the setup.

Each application contains exactly:

```text
label
connectionType
recommendedKnotIds[]
notes
```

Rules:

- only real tied connections receive an entry,
- hardware-only joins are excluded,
- Knot IDs resolve to active canonical Knots,
- general tying instructions remain with Knot,
- reverse Knot **Where You'll Use It** navigation is derived from active Rig records,
- runtime code does not infer Knot relationships by parsing assembly prose.

The validated 21-Rig library contains 32 real tied connection points.

## assemblySteps[]

Authoritative ordered instructions for physically constructing the Rig.

## setupNotes[]

Rig-specific setup/configuration guidance that does not generalize cleanly to reusable Technique instruction.

## variationIds[]

References existing related canonical Rigs. Empty arrays are valid when no approved variation exists. Ordinary relationship IDs are not planning placeholders; populated IDs must resolve.

## tutorialVideo

Optional verified third-party tutorial metadata for an officially permitted external/embed workflow. It does not authorize downloading, rehosting, editing, or extracting third-party video content.

A top-level Rig may own one tutorial when the build is uniform. `Direct-Tie Lure Setup` may instead place `tutorialVideo` on an individual configuration because Spinnerbait, Crankbait, Inline Spinner, Jerkbait, and Spoon do not share one universal build-first tutorial. When no suitable build-first tutorial exists, the configuration uses trustworthy `referenceLinks[]` fallback coverage rather than a weak or mismatched video. Runtime must preserve an external-source fallback for embedded tutorials.

---

# Relationships Not Stored on Rig

## Fish applicability

Current production has no `targetFishIds[]` field. Fish-to-Rig recommendation/applicability knowledge is owned by `data/fish-rig-guidance.js` as Decision Knowledge under D056 and must not be duplicated onto Rig merely for convenience.

## Technique compatibility

Current production has no `techniqueIds[]`. Repository Audit Section 5 removed the universally empty placeholder from the legacy 20-Rig baseline, and no inverse Technique array was reintroduced as the Rig library expanded.

Rig owns physical assembly and Rig-specific configuration. Technique owns reusable presentation behavior. Intrinsic Rig↔Technique compatibility is implemented once in the typed `data/compatibility.js` relationship registry; Rig derives applicable Technique references rather than storing duplicate inverse IDs.

## Media attachment

Current production has no Rig `imageIds[]`. Media owns attachment through:

```text
Media.ownerType
Media.ownerId
```

The former universally empty `imageIds[]` field was removed during Repository Audit Section 5 and remains available only through Git history.

---

# Rig Components and Tackle Ownership

`Rig.componentRequirements[]` is the canonical Rig-to-Tackle owner.

Derived inverse navigation:

```text
Tackle
    -> Used In
    -> active Rigs whose componentRequirements contain the Tackle ID
```

Canonical functional Tackle concepts must be specific enough for truthful readiness. Current examples include `wacky-hook` and `ned-jighead` rather than overly generic substitutes.

---

# Core Rig Membership and Order

Core membership and teaching order are owned once by the ordered `CORE_RIG_IDS` registry in `data/rigs.js`.

Individual Rig records do not duplicate `isCore`, `coreOrder`, or equivalent display flags.

The six Core Rigs, in the current canonical `CORE_RIG_IDS` teaching order, are:

1. Basic Bottom Rig
2. Direct-Tie Lure Setup
3. Fixed Bobber Rig
4. Jighead + Soft Plastic
5. Slip Bobber Rig
6. Texas Rig

---

# Rig Guide Learning Tiers — Implemented

The current 21-Rig library implements all six difficulty tiers:

- Beginner
- Beginner+
- Intermediate
- Intermediate+
- Advanced
- Expert

Current tier counts are 7 Beginner / 3 Beginner+ / 4 Intermediate / 4 Intermediate+ / 2 Advanced / 1 Expert.

The Rig Guide exposes All Rigs, Core Rigs, and each implemented difficulty tier. Earlier documentation describing Intermediate through Expert as future tier expansion is obsolete.

---

# Current Canonical Rig Library

Current GitHub `main` contains 23 active Rigs:

1. Fixed Bobber Rig
2. Basic Bottom Rig
3. Jighead + Soft Plastic
4. Slip Bobber Rig
5. Direct-Tie Lure Setup
6. Texas Rig
7. Weightless Soft-Plastic Rig
8. Wacky Rig
9. Ned Rig
10. Drop Shot Rig
11. Carolina Rig
12. Live-Bait Slip-Sinker Rig
13. Three-Way Rig
14. Neko Rig
15. Shaky Head Rig
16. Free Rig
17. Jika Rig
18. Punch / Pegged Texas Rig
19. Double-Jig Crappie Rig
20. Bottom-Bouncer / Spinner Rig
21. Split-Shot Bait Rig
22. Weighted Swimbait Hook Rig
23. Tube Jig Rig

The original 20-Rig library plus Split-Shot Bait Rig formed the pre-Foundation 21-Rig baseline. The completed Foundation generalized Inline Spinner Setup into Direct-Tie Lure Setup without a net top-level Rig increase for that conversion, then added Weighted Swimbait Hook Rig and Tube Jig Rig for the current 23-Rig library.

Carolina Rig and the later difficulty tiers are implemented production entities, not unresolved near-term expansion placeholders.

---

# Assembly vs Presentation

Rig owns physical component sequence, connections, orientation, setup measurements, optional/required configuration, assembly mistakes, and setup-specific guidance.

Technique owns reusable presentation behavior such as retrieve cadence, rod/reel movement, dragging, hopping, swimming, twitching, pausing, strike detection, and similar instruction when it generalizes across compatible setups.

D069 and RP-C4 now assign intrinsic Rig↔Technique compatibility to the typed Compatibility Relationship domain in `09-RELATIONSHIPS.md`; Rig does not store inverse Technique IDs.

---

# My Tackle and Rig Readiness

Rig never owns persistent user inventory.

Current application behavior uses transitional per-Rig local readiness selections keyed by canonical Tackle ID strings.

**Approved / Not Implemented:** My Tackle will become the sole persistent ownership source. Rig Readiness may read ownership and temporary availability but must not silently write persistent ownership.

Basic readiness answers whether required component types are available to build the Rig; optimization is a separate concern.

---

# V1 Completion Audit 2A.1 - Direct-Tie Dispositions

**Status:** APPROVED / PENDING DEPENDENCY-COMPLETE EXPANSION

The FCC 37 Lure/Bait completeness audit approved three complete-lure additions that do **not** justify new top-level Rigs:

- Buzzbait -> Direct-Tie Lure Setup configuration.
- Bladed Jig -> Direct-Tie Lure Setup configuration.
- Blade Bait -> Direct-Tie Lure Setup configuration.

These decisions preserve the existing rule that a new Lure/Bait identity does not automatically create a new Rig. A new canonical Rig is justified only when the ready-to-fish physical terminal architecture or component relationships are materially distinct and cannot be represented truthfully by an existing Rig or legitimate configuration.

**2A.3.1 resolved the Blade Bait hardware dependency:** **Snap** is approved as the required canonical Tackle concept for the pending Direct-Tie / Blade Bait configuration. This does not create a new Rig and does not authorize the production configuration by itself. The current production Rig library remains exactly 23.

This bounded disposition does **not** close 2A.2. The next audit step must test the entire expanded 30-identity Lure/Bait scope against the current 23 Rigs and determine whether any other materially distinct physical Rig architecture is missing.


---

# V1 Completion Audit 2A.2A — 30-Identity Rig Architecture Coverage Matrix

**Status:** CLOSED / APPROVED / 2A.2B CHALLENGE REQUIRED

FCC 38 screened the complete approved audit-stage set of 30 proposed Version 1 Lure/Bait identities against the current 23 canonical Rigs. This checkpoint tests only whether an existing ready-to-fish physical terminal architecture can represent each identity truthfully. It does **not** by itself authorize production configuration records, intrinsic Compatibility edges, Tackle additions, Technique additions, Fish↔Rig suitability changes, or Recommendation migration.

| Lure/Bait identity | Approved 2A.2A architecture disposition |
|---|---|
| Stick Worm | Covered by existing soft-plastic Rig architectures including Texas, Weightless, Wacky, Neko, and other applicable current Rigs. |
| Craw | Covered by existing Texas / Carolina / Jighead and other applicable soft-plastic architectures. |
| Creature Bait | Covered by existing Texas / Carolina / Punch and other applicable soft-plastic architectures. |
| Paddle-tail Swimbait | Covered by Weighted Swimbait Hook Rig and Jighead + Soft Plastic architecture. |
| Tube | Covered by Tube Jig Rig. |
| Spinnerbait | Covered by the existing Direct-Tie Lure Setup configuration model. |
| Crankbait | Covered by the existing Direct-Tie Lure Setup configuration model. |
| Jerkbait | Covered by the existing Direct-Tie Lure Setup configuration model. |
| Inline Spinner | Covered by the existing Direct-Tie Lure Setup configuration model. |
| Spoon | Covered by the existing Direct-Tie Lure Setup configuration model. |
| Minnow | Covered by existing float, bottom, slip-sinker, three-way, bottom-bouncer, and split-shot bait architectures as applicable. |
| Nightcrawler | Covered by existing float, bottom, slip-sinker, three-way, bottom-bouncer, and split-shot bait architectures as applicable. |
| Cricket | Covered by existing float, bottom, and split-shot bait architectures as applicable. |
| Curly-tail Grub | Covered by Jighead + Soft Plastic architecture. |
| Finesse / Straight-tail Worm | Covered by existing Drop Shot / Shaky Head / Texas / Weightless / Neko / Wacky and other applicable soft-plastic architectures. |
| Soft Jerkbait | Architecture covered by existing Weightless Soft-Plastic / Texas-style soft-plastic setup; exact dependency and compatibility authoring remains later work. |
| Soft Minnow / Shad | Covered by Jighead + Soft Plastic / Weighted Swimbait Hook / Drop Shot architecture as applicable. |
| Soft Frog / Toad | **2A.2B challenge candidate.** Existing weightless/weighted soft-plastic architecture may be sufficient, but the terminal-component boundary requires explicit challenge before closure. |
| Skirted Jig | **2A.2B challenge candidate.** Direct-Tie configuration may be sufficient, including trailer/setup guidance, but it is the strongest remaining test of configuration versus new-Rig ownership. |
| Topwater Plug | Covered by the existing Direct-Tie Lure Setup configuration model. |
| Buzzbait | Covered by Direct-Tie Lure Setup; this disposition was already locked in 2A.1. |
| Bladed Jig | Covered by Direct-Tie Lure Setup; this disposition was already locked in 2A.1. |
| Blade Bait | Covered by Direct-Tie Lure Setup; this disposition was already locked in 2A.1, with Snap carried to 2A.3 as a required Tackle dependency. |
| Cut Bait | Covered by existing bottom / live-bait slip-sinker / three-way / float bait architectures as applicable. |
| Prepared Bait | **2A.2B challenge candidate.** Existing bottom/bait architectures may be sufficient; specialized hook/holder hardware belongs to explicit challenge and 2A.3 rather than automatically creating a Rig. |
| Hollow-Body Frog | Covered by the existing Direct-Tie Lure Setup configuration model. |
| Crayfish | Covered by existing float / split-shot / bottom / live-bait architectures as applicable. |
| Leech | Covered by existing float / split-shot / bottom bait architectures as applicable. |
| Insect Larva | Covered by existing fixed/slip-bobber and split-shot bait architectures as applicable. |
| Fish Eggs / Roe | **2A.2B challenge candidate.** Existing split-shot/float architecture may be sufficient, but any materially distinct drift architecture must be explicitly tested before closure. |

**2A.2A disposition:** 26 of the 30 proposed Lure/Bait identities have no demonstrated top-level Rig architecture gap at this screening stage. Four identities remain for deliberate 2A.2B challenge: **Skirted Jig, Soft Frog / Toad, Prepared Bait, and Fish Eggs / Roe**. No 24th canonical Rig is approved or justified by 2A.2A alone; the production Rig library remains exactly 23.

**Exact next action:** **2A.2B — Challenge Candidates**, beginning with **Skirted Jig**. For each candidate, decide whether the truthful Version 1 representation is an existing Rig as-is, an existing Rig plus a legitimate configuration, or a genuinely new canonical Rig. Any hardware exposed by that review carries forward to 2A.3.

---

# V1 Completion Audit 2A.2B.1 — Skirted Jig Challenge

**Status:** CLOSED / APPROVED / EXISTING RIG + NEW CONFIGURATION

FCC 38 challenged Skirted Jig as the first 2A.2B candidate and approved that it does **not** expose a new top-level Rig architecture. A skirted jig is already a substantially complete terminal lure: line or leader attaches to the jig line tie, while the weighted head, hook, and skirt are integrated into the lure. An optional soft-plastic trailer attaches to the jig's existing hook and changes profile/presentation rather than creating a materially distinct terminal assembly.

**Approved Version 1 representation:**

- Skirted Jig remains a distinct proposed canonical Lure/Bait identity.
- Use **Direct-Tie Lure Setup** with a new **Skirted Jig configuration** rather than creating a 24th canonical Rig.
- The configuration may own direct attachment guidance, optional trailer rigging/setup notes, configuration-specific mistakes/references, and other lure-specific setup knowledge.
- Football, flipping/pitching, swim, finesse, casting, and similar skirted-jig forms remain Skirted Jig variants/configuration guidance unless a later demonstrated architecture gap requires a separate decision.
- The optional trailer does not by itself create a new Rig or a new canonical Tackle dependency.
- Exact intrinsic Compatibility, Technique coverage, and affected Fish suitability remain for the later dependency-completeness authoring pass; this checkpoint does not pre-author those relationships.
- Current production remains exactly **23 canonical Rigs**.

**Remaining 2A.2B challenge set:** **Soft Frog / Toad, Prepared Bait, and Fish Eggs / Roe**.

**Exact next action:** challenge **Soft Frog / Toad** under the same existing-Rig / configuration / genuinely-new-Rig test.

---

# V1 Completion Audit 2A.2B.2 — Soft Frog / Toad Challenge

**Status:** CLOSED / APPROVED / EXISTING RIG AS-IS + EXISTING RIG FAMILY GENERALIZATION

FCC 38 challenged Soft Frog / Toad as the second 2A.2B candidate and approved that it does **not** justify a 24th canonical Rig. The ordinary weightless weed-resistant presentation is already truthfully represented by **Weightless Soft-Plastic Rig**: line or leader ties directly to an offset/EWG-style worm hook, the soft-plastic body is rigged straight and weed-resistant, and no separate sinker is required. Surface use is presentation/Technique behavior rather than a distinct terminal architecture.

The weighted-hook presentation exposes an over-constrained existing Rig family rather than a new architecture. Current production names the family **Weighted Swimbait Hook Rig** and requires Paddle-tail Swimbait, but the physical terminal architecture is broader: line/leader -> integrated belly-weighted wide-gap soft-plastic hook -> compatible soft-plastic body, commonly using the same keeper/screw-lock and weed-resistant hook path. The approved audit-stage direction is therefore to **generalize that existing Rig family to Weighted Soft-Plastic Hook Rig** and use the already-approved `configurations[]` model for lure-specific setup knowledge.

**Approved Version 1 representation:**

- Soft Frog / Toad remains a distinct proposed canonical Lure/Bait identity.
- **Weightless Soft-Plastic Rig** remains the primary weightless Soft Frog / Toad architecture as-is; no new configuration is required merely to make the standard weedless weightless presentation truthful.
- Generalize the existing production **Weighted Swimbait Hook Rig** into the audit-stage **Weighted Soft-Plastic Hook Rig** family rather than creating a new Rig.
- The generalized family initially supports at least two lure-specific configurations: **Paddle-tail Swimbait** and **Soft Frog / Toad**.
- Configuration-specific lure requirements, assembly wording, setup notes, mistakes, references/media, and other lure-specific setup guidance may differ while the shared weighted-hook terminal architecture remains one Rig family.
- The current production Rig remains named Weighted Swimbait Hook Rig until an explicitly authorized dependency-complete migration changes source/data; this approval is an audit-stage canonical direction, not a production write authorization.
- **2A.3.5 resolves the carried Tackle boundary:** retain the existing canonical **Weighted Swimbait Hook** display name and stable ID `weighted-swimbait-hook`, while broadening its purpose/aliases/recognition to make compatible non-swimbait soft-plastic uses explicit. The generalized Rig family remains **Weighted Soft-Plastic Hook Rig**; Rig-family naming and canonical Tackle display naming do not need to match. No duplicate generalized weighted-hook or weighted-frog Tackle identity is created.
- Ordinary unweighted EWG/offset hooks must not silently satisfy an integrated-weight requirement; the weighted hardware boundary remains explicit.
- No new Technique identity is required by this challenge. Exact intrinsic Technique coverage and affected Fish suitability remain for later dependency-completeness authoring.
- Current production remains exactly **23 canonical Rigs**.

**Approved pending Rig↔Lure/Bait paths:** Weightless Soft-Plastic Rig ↔ Soft Frog / Toad, plus the generalized Weighted Soft-Plastic Hook Rig ↔ Soft Frog / Toad. The existing Paddle-tail Swimbait weighted-hook relationship migrates with the generalized Rig family rather than creating a second architecture. Exact production IDs/serialization remain implementation work.

**Remaining 2A.2B challenge set:** **Prepared Bait and Fish Eggs / Roe**.

**Exact next action:** challenge **Prepared Bait** under the same existing-Rig / configuration / genuinely-new-Rig test.

---

# V1 Completion Audit 2A.2B.3 — Prepared Bait Challenge

**Status:** CLOSED / APPROVED / EXISTING RIG ARCHITECTURE + SPECIALIZED DELIVERY OUTSIDE REQUIRED V1 TEACHING SCOPE

FCC 38 challenged Prepared Bait as the third 2A.2B candidate and approved that it does **not** expose a new Version 1 Rig architecture. The normal beginner-teachable path for dough, paste, punch-style, and other prepared baits that can be retained on an ordinary appropriate hook is already truthfully represented by existing bait Rig architectures, principally **Basic Bottom Rig**. Exact secondary Rig compatibility remains for the later dependency-completeness authoring pass rather than being pre-authored here.

Thin dip/stink preparations that require a dedicated dip worm, perforated tube, sponge, spring, holder, or similar bait-retention device are legitimate fishing methods but are a **specialized delivery method**, not a missing general-purpose Rig. Version 1 follows the same product principle used for specialized Paddlefish/Gar targeting equipment: acknowledge that the method/equipment exists without promoting it into the normal beginner teachable Rig/Tackle system solely for completeness.

**Approved Version 1 representation:**

- Prepared Bait remains a distinct proposed canonical Lure/Bait identity; dough/paste and stink/dip remain variants within that identity.
- Existing bait Rig architecture, principally **Basic Bottom Rig**, is sufficient for the ordinary beginner-teachable Prepared Bait path.
- No new canonical Rig or Prepared-Bait-specific top-level Rig is justified.
- Specialized dip-bait holders/carriers are **not required Version 1 canonical Tackle dependencies** and do not enter 2A.3 merely because specialized thin dip bait can use them.
- Do not add mutually exclusive ordinary-hook versus dip-holder requirements to Basic Bottom Rig; D065/GATE-013 continues to govern reusable alternate-terminal modeling if a future workflow materially requires it.
- A future Prepared Bait learning/reference surface may optionally provide a small set of vetted external **Further Reading** links for specialized dip-bait delivery, similar in purpose to the beginner handoff used for specialized Paddlefish/Gar targeting. Such links acknowledge the method without converting it into a canonical teachable Rig/Tackle path and do not require a new schema field at this checkpoint.
- Treble Hook was reviewed independently in 2A.3.4 and remains Hook Style `Treble` under generic Fishing Hook (`hook`); this Prepared Bait decision does not create a Treble-specific dependency.
- Exact intrinsic Rig↔Lure/Bait Compatibility, Technique coverage, and affected Fish suitability remain for later dependency-completeness authoring.
- Current production remains exactly **23 canonical Rigs**.

**Remaining 2A.2B challenge set:** **Fish Eggs / Roe**.

**Exact next action:** challenge **Fish Eggs / Roe** under the same existing-Rig / configuration / genuinely-new-Rig test.

---

# V1 Completion Audit 2A.2B.4 — Fish Eggs / Roe Challenge

**Status:** CLOSED / APPROVED / EXISTING RIG ARCHITECTURE + EXISTING TECHNIQUE

FCC 38 challenged Fish Eggs / Roe as the final 2A.2B candidate and approved that it does **not** expose a new Version 1 Rig architecture. The ordinary beginner-teachable setup is already represented by the existing **Split-Shot Bait Rig**: a small appropriate hook carries the eggs/roe while split shot above the hook provides light fixed weight. Existing Fixed Bobber and Slip Bobber architectures may also support Fish Eggs / Roe where later intrinsic Compatibility authoring establishes those relationships.

Moving-water drift does not create a separate Drift Rig. The ready-to-fish physical setup remains the same while **Natural Drift** owns the reusable presentation behavior of allowing current to carry the presentation with line control. This preserves the approved Rig-versus-Technique ownership boundary.

**Approved Version 1 representation:**

- Fish Eggs / Roe remains a distinct proposed canonical Lure/Bait identity.
- **Split-Shot Bait Rig** is the primary beginner-teachable Version 1 Rig architecture.
- Existing **Fixed Bobber Rig** and **Slip Bobber Rig** remain possible secondary compatibility paths for later explicit relationship authoring; this checkpoint does not pre-author those edges.
- Existing **Natural Drift** Technique owns moving-water drift presentation; no separate Drift Rig and no new Technique identity are justified.
- Existing generic Hook, Split Shot, and Bait Tackle concepts are sufficient for the ordinary Version 1 path; no specialized egg hook or other new canonical Tackle dependency is required.
- **Treble Hook** was reviewed independently in 2A.3.4 and remains Hook Style `Treble` under generic Fishing Hook (`hook`); Fish Eggs / Roe does not make it mandatory.
- Because FCC does not infer canonical requirement satisfaction, the dependency-completeness pass must explicitly disposition the Fish Eggs / Roe -> generic `bait` satisfaction relationship rather than relying on implicit category knowledge.
- Exact intrinsic Rig↔Lure/Bait Compatibility, Lure/Bait↔Technique Compatibility, and affected Fish suitability remain for later dependency-completeness authoring.
- Current production remains exactly **23 canonical Rigs**.

---

# V1 Completion Audit 2A.2 — Rig Completeness Closeout

**Status:** CLOSED / APPROVED

The complete audit-stage set of **30 proposed Version 1 Lure/Bait identities** now has a defensible Version 1 Rig architecture within the existing **23 top-level canonical Rig library**. The four deliberate challenge candidates are closed: Skirted Jig uses a Direct-Tie configuration; Soft Frog / Toad uses Weightless Soft-Plastic plus generalization of the existing weighted-hook Rig family; Prepared Bait uses existing bait Rig architecture with specialized dip delivery outside required V1 teaching scope; Fish Eggs / Roe uses Split-Shot Bait Rig with drift owned by Natural Drift Technique.

No 24th top-level Rig is justified by 2A.2. This closeout does not itself authorize production migration, create pending Compatibility records in runtime data, change Fish↔Rig suitability, or increment production counts. Current production remains 23 Rigs and the approved 209 Fish↔Rig positive suitability edges remain unchanged until explicit dependency-complete implementation.

**2A.3.1 Snap dependency — CLOSED / APPROVED.** The pending **Direct-Tie Lure Setup / Blade Bait** configuration requires the approved canonical **Snap** Tackle concept. Snap is terminal connector hardware, not a separate Rig architecture; no Rig #24 is created. Production remains 23 Rigs until the dependency-complete migration is explicitly authorized.

**2A.3 Tackle Hardware Completeness - CLOSED / APPROVED.** The hardware closeout confirms that the complete 30-identity proposed Version 1 Lure/Bait scope remains truthfully representable within the approved 23-Rig architecture with no Rig #24. Snap (`snap`) and Snap Swivel (`snap-swivel`) are the only pending new canonical Tackle concepts from 2A.3; Circle Hook and Treble Hook remain Hook Styles under generic Fishing Hook (`hook`); and Weighted Swimbait Hook retains stable canonical ID `weighted-swimbait-hook` while the Rig family independently generalizes to **Weighted Soft-Plastic Hook Rig**. No additional ordinary hardware gap is demonstrated.

Pending configuration migration, Compatibility, Canonical Requirement Satisfaction, Technique/Fish relationship authoring, Media, and validators remain later dependency-complete implementation work rather than unresolved Rig or hardware scope. Production remains 23 canonical Rigs until explicit migration authorization.

**Exact audit resume:** **2B - Tiered Suggestions**.

---

# Future / Deferred

The FISH-005 Four-State Rig adequacy audit is complete. It preserved the original 20 Rigs, added Split-Shot Bait Rig as canonical Rig #21, and identified no other material ordinary-Rig method gap for the approved Four-State Version 1 scope. Reopen regional Rig adequacy only when later scope or verified method evidence demonstrates a new material gap.

## G4-RIF-1C.1 — Rig Adequacy Review Boundary — APPROVED WITH REVISION ALLOWED

Rig adequacy reopens only when evidence demonstrates a material Version 1 targeting gap. A new canonical Rig is justified only when all of the following are true:

- an ordinary, defensible intentional targeting method for an in-scope Fish is not truthfully represented by the current 23-Rig library;
- the method has meaningfully distinct ready-to-fish terminal setup architecture or component relationships, rather than merely a different lure, retrieve, or Technique;
- no current Rig or legitimate current Rig configuration can represent the method without distorting canonical semantics;
- omission would materially weaken Version 1 Recommendation coverage rather than merely leave an exhaustive, obscure, or edge-case method unmodeled;
- any new Rig can be dependency-complete before activation, including truthful canonical Tackle/Lure-Bait requirements plus applicable Technique and intrinsic Compatibility coverage;
- legal restrictions remain separate from Rig identity and are evaluated through the approved regulatory/Recommendation legality boundary; and
- sparse Fish↔Rig suitability coverage alone is not evidence of a Rig gap. One or two truthful ordinary targeting Rigs may be adequate for a Fish.

Review order is specialized zero-edge cases first — Paddlefish, Longnose Gar, and Spotted Gar — followed by a bounded confirmation sweep of thin-coverage Fish such as Flathead Catfish, Black Bullhead, Yellow Bullhead, Common Carp, and Freshwater Drum. The second group is not presumed to require new Rigs.

If a new canonical Rig is approved, RP-B2B still controls dependency completeness and triggers only a bounded re-evaluation of Fish that could plausibly benefit from the new Rig; it does not automatically reopen all 30 Fish.

**G4-RIF-1C.1 continuation:** completed by the approved G4-RIF-1C.2 disposition below.

## G4-RIF-1C.2 — Specialized Rig Gap Disposition — APPROVED WITH REVISION ALLOWED

Paddlefish, Longnose Gar, and Spotted Gar are deliberate specialized-targeting exceptions, not Version 1 Rig-library deficiencies. Their zero-edge Fish↔Rig suitability state is an adequate Version 1 outcome because FCC can truthfully determine that no ordinary Version 1 Rig recommendation applies while the existing Fish Detail **Specialized Targeting** content provides the beginner-facing handoff.

- Do not add a Paddlefish Snagging Rig, Gar Rope Rig, or separate Longnose/Spotted Gar specialist Rig to Version 1.
- Keep the current canonical Rig library at 23 Rigs and the approved Fish↔Rig suitability authored set at exactly 209 positive edges.
- Existing Fish-owned Specialized Targeting guidance remains the detailed owner for the out-of-scope method/equipment explanation, research direction, and applicable safety/regulatory cautions. Recommendation may surface a concise specialized-targeting/no-standard-V1-Rig outcome and route the user to that existing Fish guidance rather than duplicate the explanation as parallel Decision Knowledge.
- A zero-edge Fish is not an input-adequacy failure when the absence of an ordinary Version 1 Rig recommendation is itself the truthful result and an appropriate beginner-facing handoff exists.
- This disposition does not reopen G4-CAND-1A and does not require new Lure/Bait, Technique, Tackle, Compatibility, or Rig dependencies for the specialized methods.
- Specialist-method expansion remains outside current Version 1 scope unless a later explicit product-scope decision reopens it; specialized method existence alone is not sufficient reason to expand the Rig Guide toward encyclopedic coverage.

**G4-RIF-1C.2 continuation:** completed by the approved G4-RIF-1C.3 disposition below.

## G4-RIF-1C.3 — Thin-Coverage Rig Adequacy Confirmation — APPROVED WITH REVISION ALLOWED

The existing 23-Rig library is adequate for Flathead Catfish, Black Bullhead, Yellow Bullhead, Common Carp, and Freshwater Drum. Their relatively small Fish↔Rig suitability sets are intentional bounded Version 1 coverage, not Rig-library deficiencies.

- Flathead Catfish remains adequately represented by Basic Bottom Rig as its one ordinary Version 1 suitability edge.
- Black Bullhead, Yellow Bullhead, Common Carp, and Freshwater Drum remain adequately represented by Basic Bottom Rig plus Split-Shot Bait Rig.
- Each of the five Fish already has Basic Bottom Rig as a truthful beginner-facing Primary Fish Guide recommendation, so Recommendation has a standard starting method without requiring specialist expansion.
- Sparse suitability count does not justify species-specific or specialist methods merely for completeness; Version 1 prioritizes a useful beginner starting path over encyclopedic coverage.
- No new canonical Rig, Fish↔Rig suitability edge, Fish Guide guidance expansion, or dependent Lure/Bait, Technique, Tackle, or Compatibility work is required by this confirmation.
- The canonical Rig library therefore remains 23 Rigs and the approved Fish↔Rig suitability authored set remains exactly 209 positive edges.

**G4-RIF-1C — Rig Input Adequacy: CLOSED / PASS.** The specialized zero-edge cases and the bounded thin-coverage cases are both adequately dispositioned for Version 1.

**Exact next action:** G4-RIF-1D — Combined Recommendation Input Adequacy Test.

Potential future capabilities include additional regional Rigs, richer interactive assembly, approved instructional media, and contextual recommendation systems. Any new canonical fields or relationships require demonstrated feature need and D056 ownership review.

---

# Related Documents

- 01-FOUNDATION.md
- 02-FISH.md
- 03A-TECHNIQUES.md
- 03B-CONDITIONS.md
- 04-KNOTS.md
- 05-TACKLE.md
- 05A-INVENTORY.md
- 09-RELATIONSHIPS.md
- ../DECISIONS.md
- ../../archive/workstreams/repository-audit/REPOSITORY-AUDIT-SECTION-5-DECISION.md
- ../../archive/workstreams/repository-audit/REPOSITORY-AUDIT-SECTION-5-CLOSEOUT.md
- ../../archive/workstreams/knots/KNOT-RELATIONSHIP-APPROVAL.md

# RP-B2A — Rig Use-Envelope and Technique Presentation — LOCKED

Rig Detail presents **Best For**, **Good Conditions**, and **Techniques** as a unified use-guidance section.

A Rig↔Technique Compatibility relationship is authored only when the Technique is genuinely usable within the Rig's normal intended use envelope, not merely mechanically possible. The Rig page shows the broadly eligible Technique set for that Rig; it does not decide which Technique is best for a particular Fish/Condition context.

Technique entries are canonical Reference Knowledge links and open the corresponding Technique knowledge surface. Rig owns generic setup/assembly. Technique owns reusable presentation, retrieve, cadence, and movement instruction. Recommendation Decision Knowledge later intersects Fish, Conditions, Rig, Lure/Bait, and compatible Techniques to determine the contextually viable/recommended Technique subset.

Intrinsic Compatibility therefore establishes the **eligible Technique set**; Recommendation Decision Knowledge establishes the **contextually viable/recommended subset**.

# RP-B2B — New-Rig Dependency and Guidance Re-evaluation Rule — LOCKED

During Recommendation Prerequisites Foundation planning, a new Lure/Bait identity may justify a new Rig only when meaningful setup/assembly knowledge is required and no existing Rig adequately teaches it. Any approved new Rig must be dependency-complete: all required canonical Tackle components must exist, applicable Technique coverage must be authored under RP-B2A, and applicable intrinsic Compatibility relationships must be included for the approved scope.

Adding a new Rig changes the recommendation candidate set and therefore triggers a bounded re-evaluation of only those Fish whose existing Fish-to-Rig guidance could plausibly benefit from that Rig. The full 30-Fish guidance set is not reopened automatically, and existing recommendations are changed only when the bounded review demonstrates a better fit.


# Recommendation Prerequisites Rig Changes — COMPLETE / VALIDATED

The completed Foundation made these bounded production changes:

- generalized legacy **Inline Spinner Setup** into the **Direct-Tie Lure Setup** Rig family; Inline Spinner, Spinnerbait, Crankbait, Jerkbait, and Spoon are lure-specific configurations when the terminal architecture remains direct-tie;
- added **Weighted Swimbait Hook Rig** for Paddle-tail Swimbait;
- added **Tube Jig Rig** for Tube;
- implemented lure-specific Rig configurations that may switch required Lure/Bait, component/media visualization, attachment point, assembly instructions, setup notes, mistakes, configuration-specific references, and optional configuration-specific tutorial behavior without creating separate top-level Rigs when terminal architecture is materially the same;
- implemented Lure/Bait requirements in Rig rendering in addition to true Tackle component requirements;
- preserved Fish guidance semantics under RP-B2D: legacy inline-spinner guidance migrated to Direct-Tie Lure Setup + Inline Spinner without priority/rationale changes, and new compatible configurations did not inherit Fish guidance automatically;
- added accepted configuration-aware Technique presentation for Direct-Tie by intersecting the Rig-level compatible Technique set with the selected Lure/Bait-compatible Technique set.

Current production contains 23 active Rigs and preserves the six Core Rig slots with Direct-Tie Lure Setup replacing the legacy Inline Spinner Setup identity. Runtime defects discovered during Foundation review were repaired and accepted before closeout; detailed review chronology belongs in `workstreams/RECOMMENDATION-PREREQUISITES-FOUNDATION.md` and Git history.
