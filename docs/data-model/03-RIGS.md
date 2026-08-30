# Freshwater Fishing Companion

**Document:** 03-RIGS.md  
**Document Revision:** 0.5.0  
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

The six Core Rigs are:

1. Fixed Bobber Rig
2. Basic Bottom Rig
3. Jighead + Soft Plastic
4. Inline Spinner Setup
5. Texas Rig
6. Slip Bobber Rig

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

# Future / Deferred

The FISH-005 Four-State Rig adequacy audit is complete. It preserved the original 20 Rigs, added Split-Shot Bait Rig as canonical Rig #21, and identified no other material ordinary-Rig method gap for the approved Four-State Version 1 scope. Reopen regional Rig adequacy only when later scope or verified method evidence demonstrates a new material gap.

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
