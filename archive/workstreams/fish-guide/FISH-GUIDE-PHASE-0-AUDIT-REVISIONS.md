# Freshwater Fishing Companion — Fish Guide Phase 0 Audit Revisions

**Document Revision:** 1.0.0  
**Document Status:** Approved  
**Implementation Status:** Phase 0 In Progress / Documentation Lock Only  
**Recorded:** 2026-08-18  
**Controlling Workstream:** `docs/workstreams/FISH-GUIDE-PHASE-0.md`

# Purpose

This addendum records architecture-audit revisions approved after Blocks 0.5–0.7 discussion and before any Fish production source implementation.

It does not authorize production source changes by itself. GitHub `main` remains authoritative for all source files.

The audit exists to correct decisions that are inexpensive to change during Phase 0 but would become expensive after Fish, Rig guidance, Media, Search, Catch Log, Favorites, and other User Knowledge begin referencing the new Fish records.

# Permanent Ownership Principle

Each domain owns only the data it should own.

- Fish owns intrinsic species/reference facts.
- Rig owns physical Rig assembly/configuration.
- Knot owns canonical Knot identity and tying instruction.
- Media owns reusable media/provenance records.
- Decision Knowledge owns recommendations and cross-domain guidance.
- User Knowledge owns catches, favorites, inventory, preferences, and other user-maintained state.
- Inverse relationships are derived when one canonical owner can express the relationship completely.
- Search may consume canonical facts and relationships, but Search must not become a second owner of those facts.
- UI convenience never justifies duplicating canonical ownership.

# Revision 1 — Context-Preserving Parent Navigation

**Status:** APPROVED / LOCKED

The earlier D051 top-reset behavior is revised for standard application views.

Approved behavior:

```text
Forward navigation
→ newly opened destination starts at top

Parent navigation
→ restores the immediately preceding view
→ restores that view's applicable UI state
→ restores that view's prior scroll position

Home navigation
→ Dashboard starts at top
→ contextual return stack is cleared
```

Critical safeguard:

> A saved scroll position belongs to the page/context being restored. It must never be transferred to a newly opened destination.

This explicitly prevents the earlier defect where a user scrolled partway down Page A, opened Page B, and Page B inherited Page A's scroll position.

Standard Parent restoration may include, as applicable:

- route,
- selected collection/subset,
- active search query,
- filtered result state,
- selected record/context,
- prior scroll position.

Specialized step-based workflows such as Reel Setup may retain separately approved workflow semantics where appropriate.

The revised site-wide standard is recorded in `docs/NAVIGATION-PAGE-STANDARD.md` revision 1.0.5. Production source still uses the earlier top-reset implementation until a deliberate source package implements and validates this revision.

# Revision 2 — Fish Habitat / Water Ownership

**Status:** APPROVED / LOCKED

Do **not** replace Fish `habitatTags[]` and `waterbodyTypes[]` with a generic `typicalConditionIds[]` field.

Retain:

```text
habitatTags[]
waterbodyTypes[]
```

Reason:

- these fields describe stable species/reference associations and therefore belong to Fish,
- generic current/situational Conditions answer a different semantic question,
- collapsing both into one generic relationship would weaken domain ownership clarity.

Approved ownership distinction:

```text
Fish habitat/waterbody associations
→ species Reference Knowledge

Current fishing conditions
→ contextual/Condition knowledge

Recommendation output
→ Decision Knowledge combining the relevant owners
```

Both Fish fields must use exact controlled vocabularies. No free-form spelling variants are allowed.

Approved Version 1 `waterbodyTypes[]` values remain:

```text
Pond
Lake
Reservoir
River
Creek
```

Approved starting `habitatTags[]` controlled vocabulary remains:

```text
Grass
Timber
Brush
Rock
Current
Open Water
Shallow Water
Deep Water
Cold Water
Mud
Channel
```

Do not build a generalized taxonomy framework solely for Fish. Promote vocabulary ownership into a shared taxonomy source only when a second implemented domain demonstrates a genuine shared-owner requirement.

# Revision 3 — Fish Category Registry and Lifecycle Ownership

**Status:** APPROVED / LOCKED

Replace the Fish field:

```text
category
```

with:

```text
categoryId
```

Create a Fish-domain category registry conceptually named:

```text
FISH_CATEGORY_DATA
```

The category registry owns only Fish browse-category identity/presentation:

```text
id
name
summary
canonical array order
```

Do **not** add category-level `isActive` at this stage.

Individual Fish remain the sole authority over Fish lifecycle:

```text
Fish.isActive
```

Category visibility is derived from whether one or more active Fish reference that category ID.

This prevents ambiguous states where a category could be inactive while its Fish remain active.

Approved Version 1 category IDs / display names:

```text
bass              → Bass
catfish           → Catfish
sunfish-crappie   → Sunfish & Crappie
walleye-sauger    → Walleye & Sauger
trout             → Trout
gar               → Gar
carp              → Carp
drum              → Drum
paddlefish        → Paddlefish
```

`All Fish` is a browse mode, not a canonical Fish category.

`categoryId` and `family` remain deliberately distinct:

- `categoryId` = beginner-oriented Fish Guide navigation grouping,
- `family` = biological family/reference metadata.

Search and rendering resolve category display text through the category registry. Do not duplicate `categoryName` inside each Fish merely for UI or Search convenience.

# Revision 4 — Northern Rock Bass Canonical Identity and Shared Aliases

**Status:** APPROVED / LOCKED

Canonical identity is revised before production implementation:

```text
id: "northern-rock-bass"
name: "Northern Rock Bass"
scientificName: "Ambloplites rupestris"
```

Approved aliases include:

```text
Rock Bass
Goggle-Eye
```

`Goggle-Eye` is allowed as a shared regional alias. It is not required to identify one Fish uniquely.

`Ozark Bass.aliases[]` may also include:

```text
Goggle-Eye
```

Search must preserve legitimate ambiguity when an alias applies to multiple supported Fish rather than falsely assigning the term to one species.

Approved identification relationships are unchanged semantically, but references use the new stable ID:

```text
warmouth ↔ northern-rock-bass
northern-rock-bass ↔ ozark-bass
```

Because this entity has not yet entered production Fish data or User Knowledge, Phase 0 is the correct time to establish the more precise stable ID. After release/reference adoption, stable IDs should not be renamed merely because display wording changes.

# Revision 5 — Hierarchical Scoped Search

**Status:** APPROVED / LOCKED

Search scope is determined **before** matching/ranking.

Permanent rule:

> Navigation determines the eligible search universe. Going deeper may narrow search scope, but Search must never silently broaden beyond the user's current scope.

Approved hierarchy:

```text
Global Search (future)
→ all implemented searchable domains

Domain Search
→ all active records in one domain

Collection / Subset Search
→ only active records in the selected collection/subset

Related-Knowledge Search (future, only if justified)
→ only entities reachable through the approved relationship set being searched
```

Examples:

```text
Fish Guide
→ Search all active Fish

Fish Guide → Bass
→ Search active Fish whose categoryId = "bass" only
```

Searching `bluegill` from the Bass collection must not silently return Bluegill or widen the user back to all Fish.

A broader search requires deliberate user navigation/action.

## Context-Correct Search Presentation

Search labels, helper text, placeholders, examples, and empty states must accurately describe the current eligible scope.

For example, the Bass browse search must not suggest Bluegill, panfish, Catfish, or any other term that cannot produce an eligible result in the Bass collection.

Prefer descriptive helper text such as:

```text
Search Bass by name, alias, or scientific name
```

rather than manually maintained example terms that duplicate canonical Fish data.

If examples are used, derive or validate them from the currently eligible record set.

The current Rig/Knot browse implementations already scope returned records correctly, but their static helper/example text predates this contextual-helper rule and should be aligned when those search presentations are next deliberately edited.

## Fish Search Fields

Fish identity search may use canonical owners only:

```text
Fish.name
Fish.aliases[]
Fish.scientificName
Fish.categoryId → FISH_CATEGORY_DATA.name
Fish.family
```

Do not add `searchKeywords[]`, duplicated `categoryName`, duplicated relationship terms, or other parallel search data solely to improve Fish discovery.

## Fish Ranking Within the Active Scope

Approved conceptual priority:

1. exact canonical name,
2. exact alias,
3. exact scientific name,
4. canonical-name prefix,
5. alias prefix,
6. scientific-name prefix,
7. canonical name / alias / scientific name contains query,
8. category-name match,
9. family match,
10. canonical Fish-name A–Z tie-break.

Shared exact aliases may legitimately produce multiple equal-strength results. Resolve equal-strength Fish results deterministically rather than falsely privileging one alias owner.

The active scope always outranks search ranking; ranking may never reintroduce out-of-scope records.

## Future Global / Relationship-Aware Search

Do not duplicate cross-domain relationship knowledge into canonical records merely so future Search can find it.

Examples:

- Fish-to-Rig guidance remains owned by its Decision Knowledge registry.
- Rig-to-Knot recommendations remain owned by Rig `knotApplications[]`.
- Future global/relationship-aware Search may consume those canonical relationships to expose related results.

Conceptual long-term direction:

```text
Fish search provider
Rig search provider
Knot search provider
Tackle search provider
...

Future Global Search
→ orchestrates the domain providers
→ may consume canonical relationship owners
→ does not replace domain-scoped search
```

This architecture must allow future Global Search and connected discovery without rewiring local domain search or mixing canonical ownership.

# Block 0.7 — Canonical Fish Record-Authoring Rules

**Status:** PARTIALLY APPROVED / AUDIT REVISIONS RECORDED / STILL OPEN

Approved record-authoring direction already discussed this session:

- Fish records follow the established canonical base metadata pattern.
- Existing seed entities retain truthful `createdVersion`; new Fish receive their actual introduction version when authored.
- Deferred species are not inserted as inactive placeholder Fish.
- `family` uses the accepted Latin biological family name consistently.
- `aliases[]` contains legitimate established alternate/regional names, not arbitrary search phrases.
- aliases are not required to be globally unique.
- `habitatTags[]` and `waterbodyTypes[]` remain controlled Fish-owned reference fields per Revision 2.
- `summary` remains concise, beginner-oriented species/reference text and must not absorb regulations, fishing recommendations, seasonal advice, or state-specific occurrence prose.
- `identificationTraits[]` contains observable species-specific identification characteristics, ordered by field usefulness; pairwise comparison wording remains owned by `FISH_IDENTIFICATION_RELATIONSHIPS`.
- Hybrid Striped Bass canonical name remains `Hybrid Striped Bass`; `Wiper` and `Whiterock Bass` are approved aliases.
- Fish category storage is superseded by Revision 3: use `categoryId` plus the Fish-owned category registry.
- Northern Rock Bass identity is superseded by Revision 4.
- Fish Search behavior is superseded/refined by Revision 5.

Do not mark Block 0.7 fully closed until the remaining audit points below are discussed and explicitly resolved.

# Remaining Audit / Clarification Items

The following were identified during the Phase 0 architecture audit but were **not approved yet**. Resume these point by point in the next session.

## A. Identification Relationship ID Convention

Need to decide the stable `FISH_IDENTIFICATION_RELATIONSHIPS.id` convention before media/routes/reference data depend on those IDs.

Candidate direction discussed but not approved:

```text
<fish-id-a>-vs-<fish-id-b>
```

with deterministic ordering and validation preventing duplicate reversed pairs.

## B. Fish-to-Rig Guidance Optionality and Filename

Need to decide:

- whether every Fish must have a guidance record or whether `Rigs to Start With` is conditional when valid guidance exists,
- whether future source should remain `data/fish-guidance.js` or use the more explicit `data/fish-rig-guidance.js`,
- guidance-record ID convention if IDs remain part of that model.

No change is approved yet.

## C. Fish Activation / Release Readiness

Need to clarify how `Fish.isActive` behaves during staged implementation of the 30-Fish library.

Question to resolve:

- should V1 approval and runtime activation be separate so incomplete Fish/media packages cannot appear in normal Browse/Search before their required production content passes validation?

No change is approved yet.

## D. Fish Media Field Requiredness and Naming

Need to decide:

- whether Fish-only `role` is conditionally required rather than retroactively required for all Media,
- exact null/absence semantics for `license.attributionText` and `license.changesMade`,
- stable Fish primary/supplemental/comparison media ID and file-naming conventions,
- Fish-specific alt-text standards,
- whether any responsive derivative strategy is required initially.

No change is approved yet.

## E. Four-State Scope Reconciliation Outside Fish

Fish Phase 0 uses the locked Four-State Ozark scope:

- Northeast Oklahoma,
- Southeast Kansas,
- Southwest Missouri,
- Northwest Arkansas.

Other governing project/Rig documents still contain older Northeast Oklahoma + Southwest Kansas wording.

Need to decide whether to establish a project-wide Four-State V1 content-scope decision and then perform targeted revalidation of already-approved Rig coverage rather than silently changing the Rig library.

No project-wide scope change is approved yet.

## F. Fish Source Documentation and Integrity Validation

Need to decide the implementation standard for:

- dedicated `docs/FISH_REFERENCE_SOURCES.md`,
- regional-inclusion evidence per Fish,
- scientific/taxonomic/identification/habitat source tracking,
- an automated or repeatable Fish data-integrity validator covering Fish/category IDs, media coverage, relationship pairs/distinctions, guidance references, controlled vocabularies, and other canonical requirements.

The general need for auditable source verification is consistent with project standards, but exact Fish implementation requirements remain to be approved.

# Production Gate

Do not begin production Fish data/UI/media implementation until:

1. the remaining audit items above are explicitly resolved or deliberately parked,
2. Block 0.7 is closed,
3. the Fish data-model/governing documentation reconciliation pass is complete,
4. the final Phase 0 workstream is marked closed,
5. the latest authoritative production files are re-fetched from GitHub before any source edits are proposed.
