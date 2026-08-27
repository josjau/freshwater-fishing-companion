# Freshwater Fishing Companion

**Document:** 01-FOUNDATION.md  
**Document Revision:** 0.4.0
**Document Status:** Approved
**Decision Baseline:** D029, D056

---

# Purpose

This document establishes the foundational data standards governing every canonical entity in Freshwater Fishing Companion.

All other data-model documents inherit these rules.

No entity or field shall violate these standards unless an approved architectural decision explicitly documents the exception.

---

# Design Philosophy

Freshwater Fishing Companion is built around reusable knowledge rather than individual screens.

Application pages are different views of the same underlying information.

Every fact should have one authoritative source.

Canonical entities represent reusable fishing knowledge. User records represent what an angler owns, prefers, or records.

---

# Knowledge Layers

The Companion uses three distinct knowledge layers.

## Layer 1 — Reference Knowledge

Curated information maintained by the application.

Examples:

- Fish
- Rigs
- Techniques
- Conditions
- Knots
- Tackle concepts
- Lure families
- Product definitions when explicitly approved
- Sources
- Taxonomies

Reference Knowledge answers:

> What is this?

---

## Layer 2 — Decision Knowledge

Guidance produced from Reference Knowledge and user context.

Examples:

- Lure recommendations
- Product recommendations
- Suggested alternatives
- Inventory compatibility
- Learning guidance
- Search-result relationships

Decision Knowledge answers:

> What should I do?

---

## Layer 3 — User Knowledge

Information created or maintained by the angler.

Examples:

- Profiles
- Preferences
- Favorites
- Equipment
- Consumables
- Custom tackle
- Catch records
- Backup history

User Knowledge answers:

> What do I own, prefer, or record?

---

# Canonical Terminology

The former standalone data-model glossary is consolidated here so foundational architecture terms have one owner.

## User/Profile Identity

The stable owner/context to which persistent User Knowledge belongs. The exact Version 1 representation remains unresolved until the Settings / User Data Architecture gate. A user-aware model does not require authentication or multiple profiles; it prevents a browser/device storage bucket from becoming an undocumented implicit identity.

## Canonical Entity

A reusable application-owned entity with a stable ID and one authoritative definition.

## Semantic Owner

The entity or domain for which a fact or relationship is intrinsically meaningful. Under D056, every canonical fact or relationship has exactly one authoritative semantic owner.

## Derived Inverse

A reverse relationship computed from its canonical owner rather than stored as a second authoritative copy. Current examples include Tackle **Used In** derived from Rig component requirements and Knot **Where You'll Use It** derived from Rig Knot applications.

## Deferred Relationship

An approved/plausible relationship whose semantic owner or storage shape has not yet been approved. Deferred relationships must not be represented by speculative production fields or empty placeholder arrays.

## Canonical Tackle

Reference Knowledge describing a reusable functional tackle type. It does not represent a user's exact owned item.

## My Tackle

Future authoritative User Knowledge containing actual fishing items owned by the applicable user/profile. Its detailed owned-item schema remains unresolved. Once authoritative, ownership changes only through explicit ownership-management workflows.

## Product Definition

A possible future Reference Knowledge entity describing a specific commercial product. It is not required for My Tackle MVP or basic Rig readiness and remains deferred until a demonstrated product-specific feature requires it.

## Rig

A canonical ready-to-fish setup/recipe that owns physical assembly, component requirements, real tied-connection context, and Rig-specific configuration.

## Technique

An approved future Reference Knowledge domain for reusable presentation behavior after a setup is built. No canonical Technique production dataset is implemented, and Rig↔Technique relationship ownership remains deferred.

## Condition

An approved future Reference Knowledge domain for reusable environmental/situational fishing context. No canonical Condition production dataset is implemented.

## Lure

A possible future separate canonical artificial-bait concept. A dedicated Lure production dataset is not currently implemented or approved; its boundary with current canonical Tackle is owned by the deferred Lure/Tackle architecture gate documented in `05-TACKLE.md`.

## Media Ownership

Canonical entity attachment is owned by Media through `ownerType` + `ownerId`; canonical entities do not maintain inverse media-ID arrays solely to locate Media that already identifies its owner.

## Search

The relevance-first process of finding the entity the user actually means. Search is an entry point, not the full destination.

## Browse

Category/collection-oriented exploration when the user does not necessarily know the exact entity name. Browse is distinct from Search.

## Recommendation

Decision Knowledge that helps choose among valid options for a goal/context. Recommendations are distinct from factual Search results.

## Connected Knowledge

Pertinent relationships exposed after an entity is identified, allowing movement to adjacent knowledge without duplicating canonical relationship storage.

## Rig Readiness

A derived buildability view answering: **Can I build this Rig with what I own or have available for this build/session?** Current local readiness state is transitional. When My Tackle becomes authoritative, Readiness reads ownership but does not write it.

## Core Rigs

The approved six-Rig confidence-building subset: Fixed Bobber Rig, Basic Bottom Rig, Jighead + Soft Plastic, Inline Spinner Setup, Texas Rig, and Slip Bobber Rig. Membership/order are owned by the curated `CORE_RIG_IDS` registry.

# Core Principles

The data model shall follow these principles:

- One authoritative definition for every canonical entity.
- Stable identifiers shall not change after release.
- Reference Knowledge and User Knowledge shall remain separate.
- User records shall reference canonical entities whenever practical.
- Canonical Tackle represents reusable functional fishing concepts/types.
- My Tackle represents the actual items the angler owns.
- Custom tackle represents user-owned items that are not yet mapped to the canonical library when that workflow is implemented.
- Rigs act as recipes that reference Tackle; Tackle is not required to belong to a Rig.
- Inverse relationships should be derived when one canonical owner can express the relationship completely.
- Fields shall only exist when they support an approved feature.
- Derived values should not be stored unless storage provides a documented benefit.
- Invalid data shall never be silently discarded.
- Schema changes shall preserve user data whenever practical.
- User Knowledge and imported content shall be treated as untrusted text by rendering code.

---

# Canonical Entity Standard

Whenever practical, every canonical reference entity shall include the following fields:

```text
id
name
summary
createdVersion
lastModifiedVersion
isActive
```

Entities may add fields required by their domain.

Exceptions shall be documented in the entity’s data-model document.

---

# Core Field Definitions

## id

**Purpose**

Uniquely identifies the entity throughout the application.

**Ownership**

Application.

**Dependencies**

All relationships, search, favorites, recommendations, migrations, and user references.

**Rules**

- Required.
- Lowercase.
- Words separated by hyphens.
- Never reused.
- Never changed after release.
- Must not contain display formatting.

Example:

```text
extra-wide-gap-hook
```

---

## name

**Purpose**

Provides the primary user-facing name.

**Ownership**

Application.

**Dependencies**

Navigation, search, lists, detail pages, favorites, and recommendations.

**Rules**

- Required.
- Human-readable.
- May be corrected or clarified without changing `id`.
- Should use the most broadly understood term.
- The canonical entity owns its display name; referencing entities should not independently duplicate that name for ordinary display.

---

## summary

**Purpose**

Provides a concise beginner-oriented explanation.

**Ownership**

Application.

**Dependencies**

Cards, search results, overview pages, and related-knowledge sections.

**Rules**

- Required when the entity is presented directly to users.
- Short and practical.
- Should explain what the entity is, not provide full instruction.
- Should avoid promotional language.

---

## createdVersion

**Purpose**

Records the application version in which the entity was introduced.

**Ownership**

Application.

**Dependencies**

Migration, troubleshooting, documentation, and release history.

**Rules**

- Required.
- Set once.
- Never changed after creation.

---

## lastModifiedVersion

**Purpose**

Records the most recent application version that materially changed the entity.

**Ownership**

Application.

**Dependencies**

Migration, troubleshooting, content review, and documentation.

**Rules**

- Required.
- Updated when the canonical definition changes.
- Not updated for display-only changes.

---

## isActive

**Purpose**

Controls whether the entity is available during normal application use.

**Ownership**

Application.

**Dependencies**

Search, navigation, filters, recommendations, and compatibility.

**Rules**

- Required.
- Inactive entities remain available for migrations and historical references.
- Inactive entities are hidden from normal browsing unless explicitly requested.

---

# Field Governance

Every field added to an entity shall document:

1. **Purpose** — Why the field exists.
2. **Ownership** — Who maintains it.
3. **Dependencies** — Which features use it.
4. **Validation** — What values are acceptable, when applicable.

No field shall exist solely because it might be useful someday.

A proposed field that does not support an approved feature shall be rejected or placed in the Parking Lot.

---

# Field Ownership

Every field shall use one of these ownership classifications.

## Application

Maintained by the Companion or its curated reference data.

Examples:

- `id`
- `name`
- `createdVersion`
- `sourceIds`

---

## User

Entered or changed by the angler.

Examples:

- Quantity
- Notes
- Ownership records
- Custom item name
- Preferences

---

## Derived

Calculated from existing data.

Examples:

- Inventory completeness
- Recommendation score
- Low-stock status
- Search confidence
- Reverse relationship lookups
- Backup age

Derived values should normally be calculated when needed rather than stored.

---

## External Verified

Obtained from an authoritative external source and maintained by the application.

Examples:

- Manufacturer product code
- Scientific fish name
- Official regulation URL
- Published lure dimensions

The supporting source shall be recorded when practical.

---

# Identifier Standards

Canonical identifiers shall:

- Use lowercase letters.
- Use hyphens between words.
- Avoid spaces.
- Avoid punctuation other than hyphens.
- Be descriptive.
- Remain stable.
- Avoid brand names unless identifying a specific commercial product.

Examples:

```text
largemouth-bass
texas-rig
extra-wide-gap-hook
green-pumpkin
improved-clinch-knot
```

User-generated records shall use application-generated identifiers rather than names.

Canonical relationship IDs shall resolve to existing canonical entities once production data is considered complete for the relevant implementation. Ordinary relationship fields must not silently double as planning placeholders.

---

# Canonical Tackle Scope

Canonical Tackle defines the functional type of fishing item rather than the exact commercial item a user owns.

Examples include:

```text
Offset Hook
Spinnerbait
Crankbait
Bullet Weight
Jighead
Slip Float
Barrel Swivel
Soft Plastic Worm
Inline Spinner
```

The canonical Tackle library shall be curated rather than exhaustive.

Canonical Tackle should include:

- Common tackle concepts.
- Common terminal tackle.
- Items referenced by supported rigs.
- Items used by recommendations.
- Items valuable for beginner education.
- Functional lure/tackle types relevant to supported workflows.
- Items relevant to the initial fishing regions.

The canonical library shall not attempt to include:

- Every brand.
- Every color variation.
- Every package size.
- Every retailer SKU.
- Every discontinued product.
- Every item owned by an individual user.

Commercial Product Definitions may be added later when exact product identity supports an approved feature. They are not required for My Tackle MVP or basic Rig readiness.

---

# Custom Tackle

Users may eventually record tackle that is not present in or not yet mapped to the canonical library.

A custom tackle record belongs to User Knowledge.

Potential owned-item details may include fields such as user-defined name, brand, size, weight, color, quantity, notes, and photo reference, but the exact My Tackle owned-item schema remains open for a dedicated design discussion.

A user owning an item does not automatically justify adding it to the canonical library.

---

# Canonical Promotion Standard

A custom or proposed tackle item may be promoted into Reference Knowledge when it has broader value.

Valid reasons include:

- It represents a reusable fishing concept.
- It is required by a supported rig.
- It is used in recommendations.
- It fills a meaningful educational gap.
- It is commonly encountered by the target audience.
- Verified specifications are available when specifications are relevant.
- Multiple users or features would benefit from it.

Promotion requires review and documentation.

---

# Rig Relationship Standard

Reference Tackle items are not required to belong to a Rig.

Rigs act as recipes that reference existing canonical Tackle concepts through `componentRequirements`.

`Rig.componentRequirements` is the authoritative source for Rig-to-Tackle usage. Tackle shall not independently maintain the inverse Rig membership solely for `Used In` navigation; that reverse relationship is derived from Rig data.

A Tackle item may exist independently for:

- Identification
- Learning
- Inventory
- Purchase recommendations
- Search
- General fishing use

A Rig may reference:

- Required components
- Optional components
- Compatible substitutes
- Recommended sizes
- Recommended capabilities

A Rig component references the canonical Tackle ID. Canonical Tackle owns identity and display name. The Rig owns only usage context such as required/optional status, quantity, order, size/configuration guidance, assembly role, and setup-specific notes.

The Rig shall not duplicate the full Tackle definition.

---

# Rig and Technique Ownership Standard

Rig owns physical assembly and Rig-specific configuration.

Technique owns reusable presentation behavior after the setup is built.

Rig `assemblySteps` are authoritative for construction. Shared instructions about retrieve, cadence, rod movement, reel movement, strike detection, dragging, hopping, swimming, twitching, or similar presentation behavior should live in Technique when they generalize across compatible Rigs.

A Rig-specific usage or setup note may remain with the Rig when it does not generalize cleanly to a reusable Technique.

The storage owner for future Rig ↔ Technique compatibility is not yet approved. Current production Rigs do not store `techniqueIds[]`; future Technique records must not add an inverse compatibility array until the Technique architecture gate assigns one semantic owner under D056.

---

# Search Metadata Standard

Searchable reference entities may include deliberately maintained discovery fields such as:

```text
aliases
keywords
categoryIds
```

Scientific names and other entity-specific fields may also be searchable where they are meaningful to the entity.

These are examples of possible domain-owned search metadata, not universal required fields. A domain document and implemented feature must approve a field before production use.

## aliases

Common alternative names or beginner terminology.

Example:

```text
bobber
float
```

---

## keywords

Deliberately indexed terms that describe function, use, or context and are strong enough to make the entity a relevant result.

---

## categoryIds

Canonical taxonomy references used for meaningful grouping and filtering when the relevant domain implements a canonical category relationship.

---

# Search Result Principle

**Search is relevance-first, while connected knowledge is breadth-first.**

A record should appear as a primary Search result because it meaningfully matches the user's intent, not merely because related wording appears incidentally in descriptive text.

Strong signals generally include:

1. Exact canonical name
2. Exact approved alias or accepted beginner term
3. Canonical name beginning with the query
4. Approved alias beginning with or containing the query
5. Deliberately indexed category or keyword
6. Other entity-specific fields explicitly approved as searchable

Search should favor a small set of strong results over a long list of weak possibilities.

After selection, connected relationships provide breadth. A result should make it easy to move into pertinent Fish, Rigs, Conditions, Lures, Techniques, Tackle, Regulations, ownership context, or other adjacent knowledge without overwhelming the user.

The current substring implementation is acceptable as a temporary small-dataset implementation but is not the permanent relevance standard.

Deferred until demonstrated by actual need:

- Heavy fuzzy search
- Advanced typo tolerance
- Complex confidence scoring
- Sophisticated low-confidence suppression
- Natural-language intent parsing
- Global cross-domain result dumps

Branded/commercial-name resolution remains a separate future product-model decision.

---

# Recommendation Tier Standard

Product recommendations shall use these approved tiers:

## Best of the Best

Strongest overall choice; top quality/performance for the intended use.

## Best Bang for the Buck

Best balance of performance, durability, usability, and price. It is not necessarily the cheapest option.

## Best Budget

Lowest-cost option that remains worth recommending confidently.

## Best of the Rest

Legitimate, usable options that meet the need but are clearly outclassed by the preferred tiers because of meaningful compromises in performance, durability, ergonomics, versatility, or value.

## Avoid

Reserved for products or product designs with strong evidence of recurring material defects, meaningful failure modes, safety concerns, or materially unreliable performance.

Negative sentiment, isolated complaints, ordinary preference differences, mediocre value, or simply ranking below better options are not enough to justify `Avoid`.

An `Avoid` recommendation shall require stronger evidence than a positive recommendation.

---

# Recommendation Fields

A future product recommendation model may include fields such as:

```text
tier
productDefinitionId
justification
advantages
limitations
confidence
sourceIds
lastReviewed
```

Exact commercial Product Definition modeling remains deferred until an approved product-specific feature requires it.

Each recommendation shall explain why the product earned its tier.

Live pricing and retailer availability are outside the initial recommendation model.

---

# My Tackle and Rig Readiness Standard

Canonical Tackle answers what functional tackle type an item is. My Tackle answers what the user actually owns.

When My Tackle becomes authoritative:

- My Tackle is the only persistent ownership source of truth.
- Persistent ownership changes occur only through explicit My Tackle ownership-management workflows.
- Rig Readiness reads My Tackle but does not write ownership.
- Required Tackle types already owned are automatically satisfied.
- A missing requirement may be marked temporarily available for the current build/session without becoming owned inventory.
- Prior readiness checkmarks, Search, Recommendations, borrowed gear, and inferred usage may not silently create or modify My Tackle ownership.

Permanent principle: **Readiness answers buildability first; optimization comes later.**

The detailed My Tackle owned-item schema remains open.

---

# User Knowledge Rendering Standard

Canonical project data may be treated as trusted application content.

User-entered and imported content is untrusted by default.

User Knowledge should render through safe DOM APIs such as `textContent`. User-controlled strings shall not be concatenated directly into `innerHTML`.

If formatted User Knowledge is later required, sanitization shall use one centrally owned and explicitly approved path rather than scattered ad hoc escaping.

Permanent principle: **User Knowledge is data, not markup.**

---

# Reference Sources

Reference facts and recommendations should cite reliable sources when practical.

Preferred source types include:

1. Government agencies
2. Manufacturer specifications
3. Scientific or fisheries organizations
4. Independent testing
5. Multiple credible expert sources
6. Broad community consensus
7. Companion editorial synthesis

Manufacturer sources are authoritative for specifications but not necessarily for comparative quality claims.

---

# Taxonomies

Reusable classifications should reference canonical taxonomy values when a domain has implemented an approved taxonomy rather than accumulating inconsistent free-form variants.

Examples may include:

- Fish category
- Tackle category
- Lure family
- Condition type
- Capability type
- Recommendation tier

A future taxonomy concept is not automatically an implemented registry or ID field. Each domain controls its current production shape until an explicit migration is approved.

---

# Relationships

Canonical entities shall reference one another using stable identifiers.

Canonical entities shall not embed duplicate copies of related entities.

When a relationship has one natural canonical owner, store it once and derive the inverse for navigation unless a separately meaningful inverse relationship has been explicitly approved.

Current validated examples include:

```text
Rig.componentRequirements[].tackleId
    -> canonical Tackle

Rig.knotApplications[].recommendedKnotIds[]
    -> canonical Knot

Media.ownerType + Media.ownerId
    -> canonical entity attachment

CORE_RIG_IDS[]
    -> ordered Core Rig membership
```

Deferred relationships such as Rig ↔ Technique and future Fish-to-Rig guidance must not be represented by speculative production fields before their semantic owner is approved.

User records may store limited historical snapshots only when a documented feature requires preserving the original state.

---

# Validation Standard

Data shall be validated before storage or import.

Validation may include:

- Required fields
- Valid identifiers
- Supported enumerated values
- Existing references
- Nonnegative quantities
- Valid dates
- Reasonable text lengths
- Valid product-code formats when product codes are supported
- Schema compatibility

Validation failures shall:

- Explain the problem clearly.
- Preserve existing data.
- Avoid partial writes.
- Never silently remove information.

---

# Versioning

Every stored-data change shall be evaluated for:

- Schema impact
- Migration requirements
- Backup compatibility
- Validation changes
- Documentation updates

Display-only changes do not require a schema-version update.

Canonical content changes may update `lastModifiedVersion` without changing the user-data schema.

---

# Simplicity Standard

When two designs satisfy the same approved requirement, the simpler design shall be preferred.

New concepts shall be classified as:

- **Build Now** — Foundational and required.
- **Parking Lot** — Valuable but not required now.
- **Reject** — Outside the mission or unnecessarily complex.

The approved architecture shall be completed before adding new foundational concepts.

---

# Documentation Structure Principle

Data-model documentation must reflect actual domain ownership and distinguish implemented schemas from approved future architecture. Nonexistent or speculative documents, fields, or relationships must not be presented as current production sources.

Canonical Tackle and My Tackle/Inventory are documented separately.

# Guiding Principle

> Plan twice. Build once.

The data model shall evolve through deliberate decisions, verified requirements, and documented revisions rather than incremental accumulation.

---

# Related Documents

- README.md
- 02-FISH.md
- 03-RIGS.md
- 03A-TECHNIQUES.md
- 03B-CONDITIONS.md
- 04-KNOTS.md
- 05-TACKLE.md
- 05A-INVENTORY.md
- 07-USER-DATA.md
- 09-RELATIONSHIPS.md
- ../PROJECT.md
- ../ARCHITECTURE.md
- ../DECISIONS.md