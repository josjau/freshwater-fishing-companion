# Freshwater Fishing Companion

**Document:** 00-GLOSSARY.md  
**Document Revision:** 0.2.1  
**Document Status:** Approved  
**Last Updated:** 2026-08-25

---

# Purpose

This glossary defines project architecture and domain terms whose meaning must remain consistent across documentation, implementation, and future sessions. It is not a general fishing glossary.

---

# Terms

## Reference Knowledge

Curated application-owned facts and canonical entities. Current implemented examples include Fish, Rigs, Knots, Tackle, and Media. Approved future examples include Techniques, Conditions, and potentially a separate Lure domain after its architecture gate.

Answers: **What is this?**

## Decision Knowledge

Guidance that combines Reference Knowledge and context without changing canonical entity definitions. Current examples include Knot task guidance and Reel & Line Setup guidance. Future examples include contextual recommendations, ranking, rationale, and inventory compatibility.

Answers: **What should I do?**

## User Knowledge

Information created, maintained, or owned by the angler. Future authoritative examples include My Tackle, catches, favorites, preferences, and notes. Current lightweight Rig-readiness local state is transitional availability state rather than authoritative My Tackle ownership. Under D067, authoritative persistent User Knowledge must belong to the stable user/profile ownership model selected by the User Data Architecture gate.

Answers: **What do I own, prefer, or record?**

## User/Profile Identity

The stable owner/context to which persistent User Knowledge belongs. The exact Version 1 representation is intentionally unresolved until the Settings / User Data Architecture gate. A user-aware model does not require authentication or multiple profiles; it prevents a browser storage bucket from being treated as an implicit identity with no documented ownership/migration boundary.

## Canonical Entity

A reusable application-owned entity with a stable ID and one authoritative definition.

## Semantic Owner

The entity or domain for which a fact or relationship is intrinsically meaningful. Under D056, every canonical fact or relationship has exactly one authoritative semantic owner.

## Derived Inverse

A reverse relationship computed from its canonical owner rather than stored as a second authoritative copy. Examples include Tackle **Used In** derived from Rig component requirements and Knot **Where You'll Use It** derived from Rig Knot applications.

## Deferred Relationship

An approved or plausible relationship whose semantic owner or storage shape has not yet been approved. Deferred relationships must not be represented by speculative production fields or empty placeholder arrays.

## Canonical Tackle

Reference Knowledge describing a functional tackle type, such as Offset Hook, Bullet Weight, Spinnerbait, Crankbait, Slip Float, or Inline Spinner. Canonical Tackle does not represent a user's exact owned item.

## My Tackle

The approved future User Knowledge inventory domain containing actual fishing items owned by the user/profile. Its detailed owned-item schema is not implemented. Once authoritative, persistent ownership may only be changed through explicit My Tackle ownership-management workflows.

## Product Definition

A possible future Reference Knowledge entity describing a specific commercial product. It is not required for My Tackle MVP or basic Rig readiness and remains deferred until an approved feature demonstrates the need.

## Rig

A canonical ready-to-fish setup/recipe that owns physical assembly, component requirements, real tied-connection context, and Rig-specific configuration.

## Technique

An approved future Reference Knowledge domain for reusable presentation behavior after a setup is built. No canonical Technique production dataset is currently implemented, and Rig↔Technique relationship ownership remains deferred.

## Condition

An approved future Reference Knowledge domain for reusable environmental or situational fishing context. No canonical Condition production dataset is currently implemented.

## Lure

A potential separate canonical artificial-bait concept. A dedicated Lure production dataset is not currently implemented; its boundary with current canonical Tackle must be resolved before implementation.

## Media Ownership

Canonical entity attachment is owned by Media through `ownerType` + `ownerId`. Canonical entities do not maintain inverse media-ID arrays solely to locate Media that already identifies its owner.

## Search

The relevance-first process of finding the entity the user actually means. Search is an entry point, not the full destination.

## Browse

Category-oriented exploration when the user does not necessarily know the exact entity name. Browse is distinct from Search.

## Recommendation

Decision Knowledge that helps choose among valid options for a goal or context. Recommendations are distinct from factual Search results.

## Connected Knowledge

Pertinent relationships exposed after an entity is identified, allowing movement to adjacent knowledge without requiring duplicate canonical relationship storage.

## Rig Readiness

A derived buildability view answering: **Can I build this Rig with what I own or have available for this build/session?** Current local readiness state is transitional. When My Tackle becomes authoritative, Readiness reads ownership but does not write it.

## Core Rigs

The approved six-Rig confidence-building subset: Fixed Bobber Rig, Basic Bottom Rig, Jighead + Soft Plastic, Inline Spinner Setup, Texas Rig, and Slip Bobber Rig. Membership/order are owned by the curated `CORE_RIG_IDS` registry.

## Document Status

Governance state of a document, such as `Draft`, `Approved`, `Superseded`, or `Archived`.

## Implementation Status

State of implementation. Common values include `Current`, `Approved / Not Implemented`, `In Progress`, `Validated`, and explicit mixed/deferred wording when one document covers both current and future architecture.

## Validated

Implementation or repository state verified after the relevant source update and required repository/runtime checks. A proposal or documentation target is not validated production merely because it is approved.

## Build Now

Foundational or required work for the active module or safe continuation of the project.

## Parking Lot

Valuable work intentionally deferred because it is not required for the active module or current milestone.

## Reject

An idea intentionally excluded because it conflicts with the mission, duplicates capability without sufficient benefit, or adds disproportionate complexity.

## Open

A meaningful unresolved issue that must remain visible with enough context to resume later.

---

# Related Documents

- `01-FOUNDATION.md`
- `09-RELATIONSHIPS.md`
- `../ARCHITECTURE.md`
- `../DECISIONS.md`
- `../HANDOFF.md`
