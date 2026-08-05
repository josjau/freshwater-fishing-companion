# Freshwater Fishing Companion

**Document:** 01-FOUNDATION.md  
**Version:** 0.2.0  
**Status:** Draft  
**Decision Baseline:** D013

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
- Product definitions
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

# Core Principles

The data model shall follow these principles:

- One authoritative definition for every canonical entity.
- Stable identifiers shall not change after release.
- Reference Knowledge and User Knowledge shall remain separate.
- User records shall reference canonical entities whenever practical.
- Canonical tackle represents reusable fishing concepts.
- Custom tackle represents items owned by the user that are not in the canonical library.
- Rigs act as recipes that reference tackle; tackle is not required to belong to a rig.
- Fields shall only exist when they support an approved feature.
- Derived values should not be stored unless storage provides a documented benefit.
- Invalid data shall never be silently discarded.
- Schema changes shall preserve user data whenever practical.

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
- Ownership status
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

---

# Canonical Tackle Scope

The canonical tackle library shall be curated rather than exhaustive.

Canonical tackle should include:

- Common tackle concepts.
- Common terminal tackle.
- Items referenced by supported rigs.
- Items used by recommendations.
- Items valuable for beginner education.
- Representative products deliberately selected for purchase guidance.
- Items relevant to the initial fishing regions.

The canonical library shall not attempt to include:

- Every brand.
- Every color variation.
- Every package size.
- Every retailer SKU.
- Every discontinued product.
- Every item owned by an individual user.

---

# Custom Tackle

Users may record tackle that is not present in the canonical library.

A custom tackle record belongs to User Knowledge.

It may include:

- User-defined name
- Category
- Brand
- Size
- Weight
- Color
- Quantity
- Ownership status
- Product code
- Notes
- Photo reference when photo support is implemented

Custom tackle may later be linked to a canonical concept without deleting the user’s original information.

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
- Verified specifications are available.
- Multiple users or features would benefit from it.

Promotion requires review and documentation.

---

# Rig Relationship Standard

Reference tackle items are not required to belong to a rig.

Rigs act as recipes that reference existing tackle concepts.

A tackle item may exist independently for:

- Identification
- Learning
- Inventory
- Purchase recommendations
- Search
- General fishing use

A rig may reference:

- Required components
- Optional components
- Compatible substitutes
- Recommended sizes
- Recommended capabilities

The rig shall not duplicate the full tackle definition.

---

# Search Metadata Standard

Searchable reference entities may include:

```text
aliases
keywords
commonMisspellings
categoryIds
relatedEntityIds
```

## aliases

Common alternative names or beginner terminology.

Example:

```text
bobber
float
```

---

## keywords

Terms that describe function, use, or context.

Example:

```text
soft plastic
texas rig
weedless
```

---

## commonMisspellings

Known misspellings that should resolve silently.

Example:

```text
flouro
fluorocarbon
```

---

## categoryIds

Canonical taxonomy references used for grouping and filtering.

---

## relatedEntityIds

References used to present connected knowledge after a match is found.

Search metadata shall improve discovery without replacing canonical entity relationships.

---

# Search Result Principle

Search results shall be ranked by confidence rather than alphabetically.

Priority order should generally be:

1. Exact canonical name
2. Exact alias
3. Name beginning with the query
4. Alias containing the query
5. Keyword
6. Category
7. Description text
8. Related entity

Low-confidence results should be hidden until the user requests additional results.

Every search result should act as a gateway to related knowledge.

A result page should help answer:

- What is it?
- How is it used?
- What works with it?
- Do I own it?
- What purchase options are recommended?
- What should I learn next?

Related knowledge shall be progressively disclosed to avoid overwhelming the user.

---

# Recommendation Tier Standard

Product recommendations shall use these approved tiers:

## Best of the Best

Highest overall quality when cost is not the primary concern.

## Best Value

Best balance of performance, durability, quality, and cost.

## Best Budget

Lowest-cost product that remains worth purchasing.

## Avoid

Products or product classes with documented, recurring concerns.

An `Avoid` recommendation shall require stronger evidence than a positive recommendation.

Recommendations shall not be based solely on personal preference or one isolated review.

---

# Recommendation Fields

A product recommendation should include:

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

Each recommendation shall explain why the product earned its tier.

Live pricing and retailer availability are outside the initial recommendation model.

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

Reusable classifications shall reference canonical taxonomy values rather than free-form category text.

Examples include:

- Fish category
- Tackle category
- Lure family
- Condition type
- Capability type
- Recommendation tier

This prevents category drift and inconsistent spelling.

---

# Relationships

Canonical entities shall reference one another using stable identifiers.

Canonical entities shall not embed duplicate copies of related entities.

Example:

```text
Rig
    -> requiredTackleIds
    -> techniqueIds
    -> targetFishIds
```

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
- Valid product-code formats
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

# Guiding Principle

> Plan twice. Build once.

The data model shall evolve through deliberate decisions, verified requirements, and documented revisions rather than incremental accumulation.

---

# Related Documents

- README.md
- 00-GLOSSARY.md
- 02-FISH.md
- 03-RIGS.md
- 03A-TECHNIQUES.md
- 03B-CONDITIONS.md
- 03C-RECOMMENDATIONS.md
- 04-KNOTS.md
- 05-INVENTORY.md
- 06-LURES.md
- 07-USER-DATA.md
- 08-BACKUP.md
- 09-RELATIONSHIPS.md
- ../PROJECT.md
- ../SPECIFICATION.md
- ../ARCHITECTURE.md
- ../DECISIONS.md
