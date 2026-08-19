# Freshwater Fishing Companion

**Document:** 03-RIGS.md  
**Document Revision:** 0.2.6
**Document Status:** Draft
**Decision Baseline:** D025, D026, D027, D028, D042-D049, D056

---

# Purpose

This document defines the canonical Rig entity for Freshwater Fishing Companion.

A Rig represents a complete ready-to-fish terminal setup used to present bait or lures to fish. A setup may use several components, a weighted hook plus soft plastic, or a complete lure tied directly to line.

The Rig entity supports:

- Rig Guide
- Fish recommendations
- Catch Log
- Learning Articles
- What Should I Throw?
- Inventory comparison
- Rig readiness

Each Rig shall exist once within the Companion.

---

# Design Philosophy

A Rig defines the physical setup, assembly, and Rig-specific configuration.

A Technique defines reusable presentation behavior used to fish a compatible setup.

This separation minimizes duplicated instructional content and improves long-term maintainability.

Rig is also the canonical owner of its component requirements. Tackle does not independently restate which Rigs use it solely to support inverse navigation.

D056 applies to every Rig relationship: a relationship is stored only by its approved semantic owner, and inverse/navigation convenience does not justify a second canonical copy.

---

# Canonical Entity

Every Rig inherits the Foundation entity.

Required base fields:

- id
- name
- summary
- createdVersion
- lastModifiedVersion
- isActive

---

# Rig Fields

## difficulty

Purpose

Recommended experience level for assembling and fishing the Rig correctly.

Allowed values:

- Beginner
- Beginner+
- Intermediate
- Intermediate+
- Advanced
- Expert

Core is not a difficulty value. Core membership is a separate curated learning-path relationship owned by `CORE_RIG_IDS`.

Ownership

Application.

---

## targetFishIds

Purpose

Fish commonly targeted.

Ownership

Application.

---

## conditionTags

Purpose

Fishing conditions where the Rig performs well.

Examples:

- Heavy Cover
- Sparse Cover
- Open Water
- Deep Water
- Shallow Water
- Clear Water
- Stained Water
- Muddy Water

Ownership

Application.

---

## componentRequirements

Purpose

Authoritative references to canonical Tackle required or optionally used to build the Rig.

Each requirement references Tackle explicitly through `tackleId`.

Example:

```js
{
    tackleId: "bullet-weight",
    quantity: 1,
    required: true,
    notes: "Use the lightest weight that reaches the target depth."
}
```

The requirement remains a component requirement; `tackleId` identifies the canonical Tackle concept that satisfies it.

Canonical Tackle owns component identity and display name. The Rig owns only context that is specific to this setup, such as:

- Required or optional status
- Quantity
- Component order
- Recommended size or configuration
- Assembly role
- Setup-specific notes

A Rig requirement shall not duplicate the full Tackle definition or canonical Tackle `name`.

A separate requirement-level `id` is not added unless a demonstrated editing, migration, annotation, or persistence need requires independent requirement identity.

Ownership

Application.

---

## knotApplications

Purpose

Authoritative Rig-owned descriptions of real tied connections required by the physical setup, with curated recommendations to active canonical Knot records.

Each application uses exactly:

```js
{
    label: "Main line to hook",
    connectionType: "terminal-attachment",
    recommendedKnotIds: [
        "improved-clinch-knot",
        "palomar-knot",
        "uni-knot"
    ],
    notes: null
}
```

Field purposes:

- `label` — human-readable Rig-specific connection context.
- `connectionType` — one approved Knot connection-type value.
- `recommendedKnotIds[]` — nonempty curated references to active canonical Knots.
- `notes` — optional context that matters for this Rig connection but does not duplicate general Knot instructions.

Ownership

Application / Rig.

Rules:

- Store only real tied connections. Hardware-only joins do not receive a Knot application.
- Do not store an application ID or assembly-step index in Version 1.
- Do not infer connections by parsing `assemblySteps`.
- Reverse Knot **Where You'll Use It** navigation is derived from active Rig records rather than stored again on Knot.
- General tying instructions remain canonical Knot content.

---

## assemblySteps

Purpose

Authoritative ordered instructions for physically constructing the Rig.

Ownership

Application.

Assembly instructions belong to Rig rather than Technique.

---

## setupNotes

Purpose

Rig-specific configuration or usage guidance that does not generalize cleanly to a reusable Technique.

Ownership

Application.

---

## Rig ↔ Technique relationship — deferred

Technique remains a valid future canonical concept for reusable presentation behavior, but current production does not implement canonical Technique data or a Rig-to-Technique runtime feature.

The previous production placeholder field:

```text
techniqueIds[]
```

is approved for removal from all current Rig records because all 20 arrays are empty, no production consumer exists, and keeping a future relationship field in every current record violates the project's no-"just in case" schema rule.

The previous Technique draft also proposed `compatibleRigIds[]`. D056 prohibits populating both directions as competing canonical storage.

When Technique implementation begins, the Rig↔Technique relationship must be designed deliberately and given exactly one semantic owner before production relationship data is added. If the relationship requires contextual recommendation data rather than simple compatibility, a Decision Knowledge relationship may be more appropriate than either entity owning a direct inverse array.

Current status: **Deferred / Not Implemented**.

---

## variationIds

Purpose

References existing related canonical Rigs.

Example:

Texas Rig

↓

Weightless Soft-Plastic Rig

Ordinary relationship fields are not planning placeholders. Once the relevant production dataset is complete for a planned expansion, referenced Rig IDs must resolve to canonical Rig records.

Empty `variationIds[]` on an individual Rig means that Rig currently has no approved related variation; it does not make the field itself obsolete.

Ownership

Application / Rig.

---

## Media ownership

Rig media attachment is not stored through Rig-owned `imageIds[]`.

D056 assigns canonical entity-to-Media attachment to Media through:

```text
Media.ownerType
Media.ownerId
```

Future technically verified and legally reusable Rig media therefore attaches to a Rig from the Media registry using `ownerType: "rig"` and the canonical Rig ID. Rig records do not maintain an inverse media-ID array solely to locate Media that already identifies its owner.

The former empty `imageIds[]` production field is approved for removal from all 20 Rig records and classified **GIT HISTORY ONLY**.

---

## tutorialVideo

Purpose

Optional metadata for a verified platform-hosted Rig tutorial that may be loaded through an official permitted embed player.

A tutorial record may include:

- platform
- title
- creator
- platform video ID
- external fallback URL

The video remains third-party hosted content. This field does not authorize downloading, rehosting, editing, or extracting frames from the video.

Ownership

Application.

---

# Rig Components and Tackle Ownership

Every required component references canonical Tackle through `tackleId`.

Example:

Texas Rig

Requires

- Offset Hook
- Bullet Weight
- Soft Plastic

`Rig.componentRequirements` is the authoritative Rig-to-Tackle relationship.

The inverse question — for example, which Rigs use an Offset Hook — is derived by scanning Rig requirements. Tackle records should not separately maintain manual `rigIds` solely to answer `Used In`.

The displayed component name is resolved from canonical Tackle. Duplicated component names are not stored inside Rig requirements. The inverse `Used In` relationship is derived from active Rig requirements by matching `tackleId`.

---

# Core Rig Membership and Order

Core membership is curated learning-path metadata owned once by the ordered `CORE_RIG_IDS` registry in `data/rigs.js`.

The registry controls:

- membership in **Core Rigs**,
- teaching order,
- Core-filter ordering,
- Core badges and detail-page emphasis.

Individual Rig records do not duplicate `isCore`, `coreOrder`, or equivalent display flags solely for this presentation.

Core status is independent of `difficulty` and may overlap any canonical difficulty or other classification. Core is a curated designation, not a difficulty value.

---

# Rig Guide Learning-Tier Navigation

The Rig Guide landing page exposes both the complete library and progression directly through top-level cards:

1. All Rigs
2. Core Rigs
3. Beginner
4. Beginner+
5. Intermediate
6. Intermediate+
7. Advanced
8. Expert

Implemented tiers are actionable. Future tiers may remain visible with `Coming Soon` semantics until canonical records exist.

`All Rigs` always includes every implemented active Rig, including Core Rigs. It does not own a second Core section.

The main Rig Guide page searches all active implemented Rigs. Each implemented subset/browse page retains scoped search within that collection.

The intended expansion sequence is tier-by-tier:

```text
Core + Beginner + Beginner+
→ Intermediate
→ Intermediate+
→ Advanced
→ Expert
```

This keeps each learning level coherent and validated before the library expands further.

---

# Assembly vs Presentation

Rig owns:

- Physical component sequence
- Connections
- Orientation
- Setup measurements
- Optional/required configuration
- Assembly mistakes
- Rig-specific setup guidance

Technique owns reusable presentation behavior such as:

- Drag
- Hop
- Shake
- Swim
- Burn
- Twitch
- Pause
- Deadstick
- Lift and Drop
- Retrieve cadence
- Rod and reel movement
- Strike guidance

Shared presentation instructions should not be copied into multiple Rigs.

Practical ownership test:

> If the instruction would still make sense with a different compatible Rig, it probably belongs to Technique. If it depends on the physical configuration of this Rig, it belongs to Rig.

This content-ownership distinction does not by itself decide which future entity or Decision Knowledge registry will own Rig↔Technique compatibility. That relationship remains deferred until Technique implementation.

---

# Approved Initial Rig Library — Implemented

The approved initial canonical library contains 20 active Rigs selected for practical freshwater fishing in northeast Oklahoma and southwest Kansas:

1. Fixed Bobber Rig
2. Basic Bottom Rig
3. Jighead + Soft Plastic
4. Slip Bobber Rig
5. Inline Spinner Setup
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

All 20 records are implemented in `data/rigs.js` across the finalized Beginner, Beginner+, Intermediate, Intermediate+, Advanced, and Expert tiers.

The validated corrective implementation uses `wacky-hook` (plus optional `wacky-o-ring`) for the Wacky Rig and `ned-jighead` for the Ned Rig so readiness does not treat an unsuitable generic hook or general-purpose jighead as sufficient for those standard setups.

Production Package 1 of the Knots milestone adds a deliberate `knotApplications[]` audit across all 20 active Rigs. The audit contains 31 real tied connection points. Hardware-only joins remain excluded.

---

# Current Section 5 Cleanup State

Repository Audit Section 5 approved the following targeted production cleanup:

- remove universally empty `techniqueIds[]` from all 20 Rig records,
- remove universally empty `imageIds[]` from all 20 Rig records,
- preserve `variationIds[]`, including empty arrays where a specific Rig has no approved variation,
- do not add the documentation-only `targetFishIds[]` proposal to production during this cleanup,
- defer Rig↔Technique relationship ownership until the Technique architecture gate,
- keep future Rig media attachment under Media ownership through `ownerType` + `ownerId`,
- classify removed `techniqueIds[]` and `imageIds[]` fields **GIT HISTORY ONLY**.

Production source implementation remains pending until the approved `data/rigs.js` package is pushed and verified.

---

# Core Rigs

The Core set contains six Rigs:

1. Fixed Bobber Rig
2. Basic Bottom Rig — especially useful for catfish
3. Jighead + Soft Plastic
4. Inline Spinner Setup
5. Texas Rig
6. Slip Bobber Rig

Core learning-path presentation follows D042 and `STYLE_GUIDE.md`: the Core card and Core Rig identity receive additional restrained Forest Journal hierarchy without adding the removed **Master These First** wording.

Purpose:

- Give a newer angler a small set of broadly successful rigs.
- Cover multiple common species and water-column situations.
- Build confidence before encouraging a larger fishing arsenal.
- Teach progressively useful skills such as bite detection, depth control, cast-and-retrieve, bottom contact, and fishing cover.

Jighead + Soft Plastic and Inline Spinner Setup are valid Rig Guide records under D043 because each teaches a complete ready-to-fish terminal setup.

Rigs beyond the approved initial 20, specialized sonar-driven rigs, and niche tournament presentations remain deferred.

---

# My Tackle and Rig Readiness

A Rig itself never stores persistent ownership information.

**Current:** the application uses transitional per-Rig local readiness selections keyed by canonical Tackle ID strings. The change from requirement `id` to `tackleId` does not change those stored key values and does not require a readiness-state migration.

**Approved / Not Implemented:** My Tackle becomes the only persistent ownership source of truth.

Rig Readiness will:

- Read My Tackle.
- Automatically satisfy required canonical Tackle types the user owns.
- Allow a missing item to be marked temporarily available for the current build/session.
- Never write temporary availability back into My Tackle.
- Determine whether all required component types are available so the user knows whether the Rig can be built.

Basic readiness answers buildability, not whether the user owns the ideal brand/model combination.

Persistent ownership may only be changed through explicit My Tackle ownership-management workflows such as Add Tackle, Edit Tackle, or Remove Tackle.

---

# Recommendations

Rig recommendations may consider:

- Target fish
- Water clarity
- Cover
- Season
- Experience level
- Inventory availability

---

# Future Enhancements

Possible future additions:

- Rigging animations
- Interactive assembly
- Video demonstrations
- Additional regional rigs beyond the initial 20
- Advanced confidence scoring

These require separate architectural approval.

---

# Related Documents

- 01-FOUNDATION.md
- 02-FISH.md
- 03A-TECHNIQUES.md
- 04-KNOTS.md
- 05-TACKLE.md
- 05A-INVENTORY.md
- 06-LURES.md
- 09-RELATIONSHIPS.md
- ../DECISIONS.md
- ../workstreams/REPOSITORY-AUDIT-SECTION-5-DECISION.md
- ../workstreams/KNOT-RELATIONSHIP-APPROVAL.md
