# Freshwater Fishing Companion

**Document:** 04-KNOTS.md  
**Document Revision:** 0.2.0  
**Document Status:** Approved  
**Implementation Baseline:** Knot Production Package 1 / Version 0.5.0

---

# Purpose

This document defines the canonical Knot entity for Freshwater Fishing Companion.

A Knot represents one reusable fishing-line connection method. Canonical Knot records own identity, practical compatibility, authoritative tying instructions, limitations, mistakes, completion checks, and user-facing technical references.

The Knot entity supports:

- Knot Guide
- Rig Guide relationship navigation
- Reel & Line Setup
- Search and task-first discovery
- later recommendations and connected knowledge

Each canonical Knot exists once. Rigs and workflows reference Knot IDs rather than duplicating general tying instructions.

---

# Canonical Entity

Every Knot extends the Foundation entity.

Required base fields:

```text
id
name
summary
createdVersion
lastModifiedVersion
isActive
```

Version 1 additional fields:

```text
difficulty
connectionTypes[]
compatibleLineTypes[]

aliases[]
keywords[]

bestFor[]
limitations[]

tyingSteps[]
commonMistakes[]
finalChecks[]

referenceLinks[]
```

---

# Field Definitions

## difficulty

Purpose

Editorial learning difficulty: how difficult the Knot is to learn and tie reliably.

Ownership

Application.

Feature dependencies

Browse cards, search metadata, learning hierarchy.

Allowed values:

- Beginner
- Intermediate
- Advanced

Core membership is independent of difficulty.

---

## connectionTypes[]

Purpose

Machine-readable practical connection jobs that the Knot can perform.

Ownership

Application / Knot.

Feature dependencies

Task-first Knot discovery, Reel & Line Setup, relationship validation.

Allowed values:

```text
reel-spool-attachment
terminal-attachment
line-to-line
terminal-loop
dropper-loop
```

Do not create separate taxonomy values solely for hook, lure, swivel, backing, or leader context when those are applications of the approved connection types.

---

## compatibleLineTypes[]

Purpose

Identifies line materials for which the Knot is reasonably appropriate in the supported Version 1 applications.

Ownership

Application / Knot.

Feature dependencies

Knot detail guidance, search, Reel & Line Setup.

Allowed values:

```text
monofilament
fluorocarbon
braid
```

Listing several materials does not imply that every possible pairing or application of those materials is equally recommended. Equipment-specific exceptions remain workflow guidance rather than false universal compatibility.

---

## aliases[]

Purpose

Legitimate alternate names or accepted naming/spelling variants for the Knot.

Ownership

Application / Knot.

Feature dependencies

Search and identity confirmation.

Task phrases are not aliases.

---

## keywords[]

Purpose

Deliberate Knot-specific beginner/search vocabulary that helps users find a connection without knowing its canonical name.

Ownership

Application.

Feature dependencies

Deterministic Knot search.

Broad shared task phrases should remain in task-first guidance rather than being duplicated into every record.

---

## bestFor[]

Purpose

Beginner-oriented situations where the Knot is particularly useful.

Ownership

Application / Knot.

Feature dependencies

Knot detail **Best For**, task comparison, guidance.

---

## limitations[]

Purpose

Practical constraints or situations where another Knot or workflow may be more appropriate.

Ownership

Application / Knot.

Feature dependencies

Knot detail **When to Choose Another Knot** and comparison guidance.

Limitations must be technically supported; they are not invented merely to balance a record.

---

## tyingSteps[]

Purpose

Authoritative ordered non-video tying instructions.

Ownership

Application / Knot.

Feature dependencies

Knot detail **How to Tie It**, static instructional diagrams, optional controlled animation.

Rules:

- Store an ordered array of instruction strings.
- Array order is authoritative.
- Display numbering begins at 1 and is derived from array position.
- Do not store `stepCount`.
- Do not embed manual step numbers in instruction strings.
- Diagram labels must mirror the canonical step wording wherever practical; shortened labels may only be concise derivatives that preserve the same action, sequence, direction, and meaning.
- Persistent step IDs are not introduced unless real animation implementation later demonstrates a need.

---

## commonMistakes[]

Purpose

Concrete mechanical or procedural failure modes for the verified Knot method.

Ownership

Application / Knot.

Feature dependencies

Knot detail **Common Mistakes**.

---

## finalChecks[]

Purpose

Observable checks that help an angler determine whether the completed Knot is correctly formed, seated, and secure.

Ownership

Application / Knot.

Feature dependencies

Knot detail **Check Your Knot**.

---

## referenceLinks[]

Purpose

User-facing credible technical references associated with the canonical Knot.

Ownership

Application / Knot.

Feature dependencies

Verified References colocated with **How to Tie It**.

Structure:

```js
referenceLinks: [
    {
        label: "...",
        url: "https://..."
    }
]
```

Technical research provenance is separately maintained in `../KNOT_REFERENCE_SOURCES.md`.

---

# Core Knot Membership

Core membership and teaching order are owned once by the ordered `CORE_KNOT_IDS` registry in `data/knots.js`.

Approved Version 1 order:

```text
arbor-knot
improved-clinch-knot
palomar-knot
double-uni-knot
```

Individual Knot records do not store `isCore`, `coreOrder`, or equivalent duplicate flags.

---

# Version 1 Library

Version 1 contains exactly 10 active canonical Knots.

## Beginner

1. Arbor Knot
2. Improved Clinch Knot
3. Palomar Knot
4. Double Uni Knot
5. Uni Knot
6. Double Surgeon’s Knot

## Intermediate

7. Non-Slip Loop Knot
8. Dropper Loop Knot
9. Snell Knot
10. Alberto Knot

## Advanced

No active Version 1 records. The **Advanced Knots — Coming Soon** UI treatment is a presentation placeholder, not a canonical entity.

Minor named variations do not automatically become separate canonical records. A separate record requires a meaningfully different tying process or a distinct practical fishing job.

---

# Relationship Ownership

Rig owns contextual Rig-to-Knot recommendations through `Rig.knotApplications[]`.

Knot does not store `relatedRigIds[]`.

Knot detail **Where You'll Use It** is derived by scanning active Rig `knotApplications[]` entries for the current Knot ID.

General tying instructions stay with Knot. Rig relationship notes contain only context specific to that Rig connection.

---

# Media Ownership

Knot does not store `imageIds[]` or `animationIds[]` for canonical instructional media.

Media owns the association through the approved cross-entity ownership concept:

```text
ownerType: "knot"
ownerId: canonical Knot ID
```

Static instructional SVG integration occurs in a later production package after each diagram passes technical and user review.

---

# Research Standard

Every production Knot requires at least two independent credible technical sources. Specialized material compatibility, applications, limitations, or disputed variations require additional claim-specific evidence when the base two sources are insufficient.

Canonical Knot wording is original Freshwater Fishing Companion editorial synthesis verified against the approved sources.

Research provenance: `../KNOT_REFERENCE_SOURCES.md`.

---

# Explicitly Excluded Version 1 Fields

Do not store these on canonical Knot records without a later approved demonstrated requirement:

```text
isCore
stepCount
strengthRating
relatedRigIds
relatedTechniqueIds
imageIds
animationIds
taskIds
primaryPurpose
recommendedSpecies
```

---

# Related Documents

- 01-FOUNDATION.md
- 03-RIGS.md
- 03A-TECHNIQUES.md
- 09-RELATIONSHIPS.md
- ../KNOT_REFERENCE_SOURCES.md
- ../workstreams/KNOT-RELATIONSHIP-APPROVAL.md
- ../workstreams/KNOT-RESEARCH-VALIDATION-APPROVAL.md
- ../workstreams/KNOT-MEDIA-WORKFLOW-APPROVAL.md
- ../workstreams/KNOT-CANONICAL-CONTENT-LOCK.md
