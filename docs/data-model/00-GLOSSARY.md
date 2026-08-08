# Freshwater Fishing Companion

**Document:** 00-GLOSSARY.md  
**Document Revision:** 0.1.0  
**Document Status:** Approved  
**Last Updated:** 2026-08-07

# Purpose

This glossary defines project architecture and domain terms whose meaning must remain consistent across documentation, implementation, and future sessions. It is not intended to be a general fishing glossary.

# Terms

## Reference Knowledge

Curated application-owned facts and canonical entities. Examples include Fish, Rigs, Techniques, Conditions, Knots, canonical Tackle, and Lure families. Answers: **What is this?**

## Decision Knowledge

Guidance derived from Reference Knowledge and context. Examples include recommendations, related alternatives, inventory compatibility, and future relevance ranking. Answers: **What should I do?**

## User Knowledge

Information created, maintained, or owned by the angler. Examples include My Tackle, catches, favorites, preferences, and notes. Answers: **What do I own, prefer, or record?**

## Canonical Entity

A reusable application-owned entity with a stable ID and one authoritative definition.

## Canonical Tackle

A Reference Knowledge concept describing a functional tackle type, such as Offset Hook, Bullet Weight, Spinnerbait, Crankbait, Slip Float, or Inline Spinner. Canonical Tackle does not represent a specific user's exact owned item.

## My Tackle

The User Knowledge inventory domain containing the actual fishing items owned by the user. Persistent ownership may only be changed through explicit My Tackle ownership-management workflows.

## ProductDefinition

A possible future Reference Knowledge entity describing a specific commercial product. It is not required for My Tackle MVP or basic Rig readiness and remains deferred until an approved feature demonstrates the need.

## Rig

A canonical setup/recipe that owns physical assembly, component requirements, and Rig-specific configuration.

## Technique

A reusable presentation method describing how compatible Rigs or lures are fished, including retrieve, cadence, rod/reel action, and strike guidance.

## Search

The relevance-first process of finding the entity the user actually means. Search is an entry point, not the full destination.

## Browse

Category-oriented exploration when the user does not necessarily know the exact entity name. Browse is distinct from Search.

## Recommendation

Decision Knowledge that helps choose among valid options for a goal or context. Recommendations are distinct from factual Search results.

## Connected Knowledge

Pertinent relationships exposed after an entity is identified, allowing rapid movement to adjacent Fish, Rigs, Conditions, Lures, Techniques, Tackle, Regulations, ownership, or other relevant knowledge.

## Rig Readiness

A derived buildability view answering: **Can I build this Rig with what I own or have available for this build/session?** Readiness reads My Tackle when My Tackle becomes authoritative and does not write persistent ownership.

## Core Rigs

The approved six-rig confidence-building subset of the initial regional Rig library: Fixed Bobber Rig, Basic Bottom Rig, Jighead + Soft Plastic, Inline Spinner Setup, Texas Rig, and Slip Bobber Rig.

## Document Status

Governance state of a document: `Draft`, `Approved`, `Superseded`, or `Archived`.

## Implementation Status

State of implementation: `Current`, `Approved / Not Implemented`, `In Progress`, or `Validated`.

## Validated

Implementation or repository state that has been verified after the relevant push and runtime/repository checks. Preflight, local files, and staged changes are not validated.

## Build Now

Foundational or required work for the active module or safe continuation of the project.

## Parking Lot

Valuable work intentionally deferred because it is not required for the active module or current milestone.

## Reject

An idea intentionally excluded because it conflicts with the mission, duplicates capability without sufficient benefit, or adds disproportionate complexity.

## Open

A meaningful unresolved issue that must remain visible with enough context to resume later.

# Related Documents

- `01-FOUNDATION.md`
- `09-RELATIONSHIPS.md`
- `../ARCHITECTURE.md`
- `../DECISIONS.md`
- `../HANDOFF.md`
