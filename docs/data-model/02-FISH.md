# Freshwater Fishing Companion

**Document:** 02-FISH.md  
**Version:** 0.1.0  
**Status:** Draft  
**Decision Baseline:** D002

---

# Purpose

This document defines the canonical Fish entity for Freshwater Fishing Companion.

The Fish entity is the foundation for:

- Fish Identification
- Catch Log
- Rig Recommendations
- Learning Articles
- Regulation Resources
- Search
- Favorites

Each supported fish species or approved hybrid shall exist once within the Companion.

---

# Design Philosophy

The Fish model is designed to answer practical questions for anglers.

Examples include:

- What fish did I catch?
- How do I identify it?
- What fish does it resemble?
- What rigs work well?
- Where is it commonly found?
- Where can I verify the regulations?

The model favors practical field identification over biological completeness.

---

# Canonical Entity

Every Fish record inherits the Foundation entity fields.

Required fields:

```text
id
name
summary
createdVersion
lastModifiedVersion
isActive
```

Additional Fish fields extend the base entity.

---

# Fish Fields

## scientificName

Purpose

Stores the accepted scientific name.

Ownership

Application.

Dependencies

Learning articles and reference information.

---

## category

Purpose

User-friendly grouping.

Examples:

- Bass
- Sunfish
- Catfish
- Trout
- Crappie
- Perch
- Walleye
- Gar
- Paddlefish

Ownership

Application.

Dependencies

Navigation, search, filters.

---

## family

Purpose

Biological family.

Ownership

Application.

Dependencies

Reference information.

---

## identificationTraits

Purpose

References canonical Identification Trait records.

Ownership

Application.

Dependencies

Fish Identification.

---

## similarFishIds

Purpose

References species commonly confused with this fish.

Ownership

Application.

Dependencies

Fish Identification.

---

## habitatTags

Purpose

Typical habitat.

Examples:

- Rock
- Timber
- Grass
- Open Water
- Creek
- River
- Pond
- Reservoir
- Brush

Ownership

Application.

Dependencies

Recommendations.

---

## waterbodyTypes

Purpose

General locations where the fish is commonly found.

Examples:

- Pond
- Lake
- River
- Creek
- Reservoir

Ownership

Application.

Dependencies

Search and recommendations.

---

## regionTags

Purpose

Geographic relevance.

Examples:

- Northeast Oklahoma
- Southeast Kansas

Ownership

Application.

Dependencies

Regional filtering.

---

## activityPeriods

Purpose

General periods when the fish is most active.

Examples:

- Dawn
- Morning
- Midday
- Evening
- Night

Ownership

Application.

Dependencies

Recommendations.

---

## seasonalPatterns

Purpose

General seasonal activity.

Examples:

- Spring Spawn
- Summer
- Fall Feed
- Winter

Ownership

Application.

Dependencies

Recommendations.

---

## recommendedRigIds

Purpose

Canonical rigs commonly used.

Ownership

Application.

Dependencies

Rig Guide.

---

## recommendedLureIds

Purpose

Canonical lure definitions.

Ownership

Application.

Dependencies

Recommendations.

---

## regulationResourceIds

Purpose

Official regulation references.

Ownership

Application.

Dependencies

Regulations.

---

## imageIds

Purpose

Approved images.

Ownership

Application.

Dependencies

Fish pages and identification.

---

# Fish Identification

Identification should prioritize visible characteristics that a beginner can observe.

Examples include:

- Mouth size
- Eye position
- Body shape
- Tail shape
- Dorsal fin
- Color pattern
- Lateral stripe
- Spots
- Bars
- Opercular flap
- Scale appearance

Scientific measurements should be avoided unless necessary.

---

# Hybrids

Hybrids receive canonical records only when they provide practical value to anglers.

Examples:

- Bluegill × Redear Hybrid

Hybrid records shall clearly indicate uncertainty where appropriate.

---

# Unknown Fish

The application shall support an Unknown Fish state.

Users should never be forced to identify a fish with certainty.

Possible confidence values include:

- Confirmed
- Likely
- Uncertain
- Unknown

---

# Relationships

A Fish may reference:

- Identification Traits
- Similar Fish
- Recommended Rigs
- Recommended Lures
- Learning Articles
- Regulation Resources
- Images

Fish records shall reference other canonical entities by identifier.

---

# Design Notes

Fish records describe species.

Individual catches belong in the Catch Log.

User observations belong in Catch Records, not Fish definitions.

The Companion shall never duplicate species information inside Catch Records.

---

# Future Enhancements

Potential future additions include:

- AI-assisted identification
- Image comparison
- Seasonal movement
- Preferred forage
- Water temperature preferences
- Conservation status
- Trophy information

These features require separate architectural approval.

---

# Related Documents

- 01-FOUNDATION.md
- 03-RIGS.md
- 06-LURES.md
- 07-USER-DATA.md
- 09-RELATIONSHIPS.md
