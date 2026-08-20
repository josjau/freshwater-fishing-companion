# Freshwater Fishing Companion

**Document:** 04-KNOTS.md  
**Document Revision:** 0.3.0  
**Document Status:** Approved  
**Implementation Status:** Validated — Knot Packages 1–4 and Reel & Line Setup integration  
**Decision Baseline:** D037, D044, D056

---

# Purpose

This document defines the current canonical Knot entity for Freshwater Fishing Companion.

A Knot represents one reusable fishing-line connection method. Knot owns identity, practical compatibility, authoritative tying instructions, limitations, mistakes, completion checks, and user-facing technical references.

Rigs and Decision Knowledge workflows reference canonical Knot IDs rather than duplicating general tying instructions.

---

# Current Production Schema

Every current Knot contains Foundation fields plus:

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

Editorial learning difficulty.

Allowed values:

- Beginner
- Intermediate
- Advanced

Core membership is independent of difficulty.

## connectionTypes[]

Machine-readable practical connection jobs supported by the Knot.

Approved values:

```text
reel-spool-attachment
terminal-attachment
line-to-line
terminal-loop
dropper-loop
```

Equipment-specific application context belongs to the relevant workflow rather than requiring false universal connection taxonomies.

## compatibleLineTypes[]

Line materials for which the Knot is reasonably appropriate in supported applications.

Approved values:

```text
monofilament
fluorocarbon
braid
```

This does not imply every pairing/application is equally recommended.

## aliases[]

Legitimate alternate names or accepted naming/spelling variants. Task phrases are not aliases.

## keywords[]

Deliberate Knot-specific discovery vocabulary. Broad shared task phrases belong to task-first Decision Knowledge rather than being copied into every Knot.

## bestFor[]

Beginner-oriented situations where the Knot is particularly useful.

## limitations[]

Technically supported constraints or situations where another Knot/workflow may be preferable.

## tyingSteps[]

Authoritative ordered non-video tying instructions. Array order is authoritative; display numbering is derived.

Do not store manual step numbers, `stepCount`, or persistent step IDs without a demonstrated future requirement.

## commonMistakes[]

Concrete mechanical or procedural failure modes.

## finalChecks[]

Observable checks that help confirm the completed Knot is correctly formed, seated, and secure.

## referenceLinks[]

User-facing credible technical references. Research provenance is maintained separately in `../KNOT_REFERENCE_SOURCES.md`.

---

# Core Knot Membership

Core membership and teaching order are owned once by `CORE_KNOT_IDS` in `data/knots.js`.

Current order:

```text
arbor-knot
improved-clinch-knot
palomar-knot
double-uni-knot
```

Individual Knot records do not duplicate Core flags/order.

---

# Current Knot Library

Version 1 contains 10 active canonical Knots:

1. Arbor Knot
2. Improved Clinch Knot
3. Palomar Knot
4. Double Uni Knot
5. Uni Knot
6. Double Surgeon’s Knot
7. Non-Slip Loop Knot
8. Dropper Loop Knot
9. Snell Knot
10. Alberto Knot

Advanced currently has no active Version 1 records. Any **Coming Soon** treatment is presentation state rather than a canonical Knot entity.

---

# Rig Relationship Ownership

Rig owns contextual Rig-to-Knot recommendations through `Rig.knotApplications[]`.

Knot does not store `relatedRigIds[]`.

Knot detail **Where You'll Use It** is derived by scanning active Rig Knot applications for the current Knot ID.

General tying instructions remain canonical Knot content. Rig notes contain only connection-specific context.

---

# Decision Knowledge Integration

Current Knot-related Decision Knowledge is implemented separately from canonical Knot records.

## Knot task guidance

`data/knot-guidance.js` owns task-first discovery vocabulary and curated task-to-Knot ordering. Its workflow fields are not canonical Knot fields.

## Reel & Line Setup guidance

`data/reel-guidance.js` owns the guided Reel & Line Setup decision workflow and references canonical Knot IDs where tying instruction is required.

Reel-specific questions, choices, recommendations, and navigation context do not become fields on Knot merely because the workflow links to Knot detail.

This separation preserves the three-layer architecture: Knot remains Reference Knowledge while contextual workflow guidance remains Decision Knowledge.

---

# Media Ownership

Knot does not store inverse `imageIds[]` or `animationIds[]` solely to locate canonical instructional media.

Media owns canonical attachment through:

```text
ownerType: "knot"
ownerId: canonical Knot ID
```

Current production includes Media-owned Knot instructional/reference records where implemented. Any future additional static diagrams, animation, role, or ordering semantics must remain Media-owned unless an explicitly justified relationship entity is approved.

---

# Research Standard

Every production Knot requires credible technical sourcing. Specialized compatibility, applications, limitations, or disputed variations require claim-specific support when general sources are insufficient.

Canonical wording is original Freshwater Fishing Companion editorial synthesis verified against approved sources.

---

# Explicitly Excluded Current Knot Fields

Do not store these on canonical Knot records without a later demonstrated and approved requirement:

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

# Implementation Baseline

The Knot milestone has progressed beyond the earlier Package 1-only documentation baseline.

Current integrated state includes:

- canonical Knot library and task-first discovery,
- audited Rig → Knot contextual relationships,
- derived Knot → Rig **Where You'll Use It** navigation,
- Line Compatibility reference behavior,
- Reel & Line Setup guidance integration,
- contextual parent navigation between Reel Setup/Rig contexts and Knot detail,
- Media-owned instructional/reference relationships where present.

Canonical Knot schema remains separate from those Decision Knowledge and navigation layers.

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
