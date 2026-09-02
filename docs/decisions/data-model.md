# Freshwater Fishing Companion — Decisions: Data Model and Knowledge Ownership

**Document:** decisions/data-model.md  
**Document Status:** Approved  
**Role:** Canonical durable decision bodies for this ownership domain  
**Migration Baseline:** `af3bffb9995d56f8b9e47236bbadfa481d88cc34`  
**Last Updated:** 2026-09-02

# Purpose

This file owns the full decision bodies listed below. Decision IDs are permanent and remain stable across the documentation decomposition. `../DECISIONS.md` is the compact canonical index.

# D002 – Modular Data Model Documentation

The data model is divided into focused documents instead of one large specification.
# D003 – Canonical Fishing Techniques

Fishing Techniques are independent canonical Reference Knowledge entities that own reusable presentation behavior. A Technique may apply to multiple Rigs or other compatible fishing setups.

Rig continues to own physical assembly/configuration. Technique owns reusable retrieve/cadence, rod/reel movement, presentation steps, strike cues, common mistakes, and beginner guidance when reusable across compatible setups.

D069 resolved intrinsic Technique compatibility ownership: Rig↔Technique and Lure/Bait↔Technique pairs are stored once in the typed Compatibility Relationship domain rather than on Rig or Technique records. Fish/Condition-specific Technique selection, ranking, rationale, and contextual adjustments remain Recommendation Decision Knowledge.

Do not mirror the same semantic relationship in both `Rig.techniqueIds[]` and `Technique.compatibleRigIds[]`.

**Current implementation status:** Implemented and validated. `data/techniques.js` contains 16 active canonical Technique records. `data/compatibility.js` contains the approved intrinsic Rig↔Technique and Lure/Bait↔Technique relationships as part of the exact 177-record Compatibility set.

**Future trigger:** Revisit only if a demonstrated use case requires a new Technique, a materially different relationship family, or a relationship that cannot be represented truthfully by the current pairwise intrinsic Compatibility model.

**Canonical owners:** D003/D024/D056/D069 are indexed by `DECISIONS.md`; `data-model/03A-TECHNIQUES.md` owns the Technique contract and `data-model/09-RELATIONSHIPS.md` owns Compatibility semantics.
# D004 – Canonical Conditions

Environmental and situational conditions are canonical shared entities.
# D005 – Canonical Capabilities

Capabilities describe what an item can do, enabling functional recommendations.
# D006 – Separate Equipment and Consumables

Durable equipment and consumable tackle are modeled separately while presented together as "My Tackle."
# D007 – Canonical Recommendation Engine

Recommendations are separate from factual reference data and include rationale.
# D008 – Canonical Source Registry

Reference information should be traceable to documented sources where appropriate.
# D010 – Canonical Taxonomies

Controlled vocabularies are managed centrally.
# D011 – Canonical Terminology

Architectural/data-model terminology is defined once and reused consistently. The former standalone `data-model/00-GLOSSARY.md` is consolidated into `data-model/01-FOUNDATION.md`, which now owns foundational terms such as Reference/Decision/User Knowledge, semantic owner, derived inverse, deferred relationship, canonical Tackle/My Tackle, and related domain terminology.

Workflow/document-status vocabulary remains owned by workflow documentation rather than the data-model terminology section.
# D012 – Inventory-Centric Architecture

Inventory is the parent domain for equipment, consumables, setups, and related inventory features.
# D013 – Canonical Inventory Locations

Inventory locations use reusable location records.
# D024 – Rig Assembly and Technique Presentation Ownership

Rigs own physical assembly and rig-specific configuration. Rig `assemblySteps` are authoritative for constructing the Rig.

Techniques own reusable fishing presentation behavior such as drag, hop, shake, swim, twitch, cadence, rod action, reel action, and strike guidance.

Shared presentation instructions should live in Technique rather than being duplicated across Rigs. Rig-specific setup or usage notes may remain with the Rig when they do not generalize cleanly to a reusable Technique.

A practical ownership test is: if an instruction still makes sense with a different compatible Rig, it probably belongs to Technique; if it depends on the physical configuration of this Rig, it belongs to the Rig.

This content boundary does not place compatibility on either participating entity. Under D069, intrinsic Rig↔Technique compatibility is owned by the typed Compatibility Relationship domain; contextual Technique selection remains Recommendation Decision Knowledge.
# D025 – Single-Owner Rig-to-Tackle Relationships

Rig `componentRequirements` is the authoritative source for Rig-to-Tackle usage relationships.

Tackle records do not independently maintain the inverse `rigIds` relationship. `Used In` and similar reverse navigation should be derived by scanning canonical Rig requirements.

Tackle may still own genuine Tackle-domain relationships such as related components. Bidirectional UI navigation does not require bidirectional canonical storage.
# D026 – Canonical Tackle Identity and Display Names

Canonical Tackle data owns Tackle identity and display name.

Rig component requirements reference canonical Tackle explicitly through `tackleId`. The requirement remains a component requirement, while `tackleId` identifies the canonical Tackle concept that satisfies it.

Rig component requirements own only Rig-specific usage context such as required/optional status, quantity, order, size/configuration guidance, assembly role, and setup notes.

Duplicated Rig component `name` values are non-authoritative and are removed by the Rig/Tackle data-integrity implementation. The UI resolves the component display name from canonical Tackle.

A separate requirement-level `id` is not added unless a demonstrated editing, migration, annotation, or persistence need requires independent requirement identity.

Context-specific display labels are deferred unless a demonstrated UX need appears.
# D028 – My Tackle Ownership and Rig Readiness Authority

Canonical Tackle defines the functional tackle type, such as Offset Hook, Spinnerbait, Crankbait, Bullet Weight, Jighead, Slip Float, Barrel Swivel, Soft Plastic Worm, or Inline Spinner.

My Tackle records the actual items owned by the user. The detailed owned-item schema remains an open design topic and will be decided in a dedicated My Tackle discussion.

Rig readiness answers buildability first: **Can I build this rig with what I own?** It does not require the ideal brand/model combination.

When My Tackle is implemented as the authoritative source:

- Rig Readiness reads ownership from My Tackle.
- Required canonical Tackle types already owned are automatically satisfied.
- Missing components may be marked temporarily available for the current build/session when they were borrowed, just purchased, or otherwise available without being recorded as owned.
- Temporary session availability never writes to My Tackle.
- My Tackle is the only persistent ownership source of truth.
- Persistent My Tackle state may only be changed through explicit My Tackle ownership-management workflows such as Add Tackle, Edit Tackle, or Remove Tackle.
- Search, Rig Readiness, Recommendations, prior readiness checkmarks, usage inference, and other features may not silently create or modify ownership.
- Existing readiness checkmarks are not automatically migrated into permanent My Tackle inventory.

A separate commercial `ProductDefinition` layer is not required for My Tackle MVP or basic Rig readiness. It remains a deferred option for exact commercial-product recommendations, comparisons, identification, or other demonstrated product-specific needs.

Permanent principle: **Readiness answers buildability first; optimization comes later.**
# D029 – User Knowledge Rendering Trust Boundary

Canonical project data may be treated as trusted application content. User-entered and imported content is untrusted by default.

User Knowledge should render through safe DOM APIs such as `textContent`. User-controlled strings must not be concatenated directly into `innerHTML`.

If formatted user content is later required, sanitization must use one centrally owned and explicitly approved path rather than scattered ad hoc escaping.

Imported data follows the same trust rules as manually entered User Knowledge.

Permanent principle: **User Knowledge is data, not markup.**
# D037 – Data-Model Documentation Structure

Data-model documentation must match actual semantic ownership and must not create standalone documents merely to reserve speculative/deferred domains.

Approved active structure:

```text
README.md
01-FOUNDATION.md
02-FISH.md
03-RIGS.md
03A-TECHNIQUES.md
03B-CONDITIONS.md
03C-LURES-BAIT.md
04-KNOTS.md
05-TACKLE.md
05A-INVENTORY.md
07-USER-DATA.md
09-RELATIONSHIPS.md
```

- Foundational terminology is owned by `01-FOUNDATION.md`; a separate glossary file is unnecessary.
- `03C-LURES-BAIT.md` is the approved and implemented canonical Lure/Bait Reference owner established by D069; it is distinct from functional Tackle.
- Backup/restore remains part of the User Data architecture gate and is owned by `07-USER-DATA.md` until implementation demonstrates a need for a separate detailed contract.
- Canonical Tackle and My Tackle/Inventory remain separate semantic domains.
- A dedicated Recommendation model is deferred until its schema is mature.
- ProductDefinition remains deferred until a demonstrated commercial-product feature requires it.

Prior standalone glossary/Lure/Backup documents remain recoverable in Git history but are not active governing files.
# D044 – Single-Owner Core Rig Membership

Core Rig membership and order are stored once in `data/rigs.js` through the canonical `CORE_RIG_IDS` registry.

Rig records do not duplicate `isCore`, `coreOrder`, or equivalent presentation flags solely to support the Core learning-path UI.

The ordered registry owns:

- membership in **Core Rigs**,
- teaching sequence,
- Core-filter ordering,
- Core badges and detail-page emphasis.

The renderer derives Core presentation from that registry. This keeps curated learning-path membership separate from each Rig's intrinsic identity and prevents duplicated order metadata.
# D056 – Semantic Single-Owner Data and Relationship Ownership

**Decision:** Every canonical fact or relationship has exactly one authoritative owner across the application. Ownership is assigned to the entity or domain for which the information is intrinsically meaningful, not to whichever record is most convenient for a current UI, lookup, search path, reverse navigation, or implementation shortcut.

**Reason:** Duplicating the same semantic fact in multiple records creates competing sources of truth, synchronization work, avoidable validators, and ambiguity when the copies disagree.

Ownership decisions use this test:

1. What does the fact or relationship actually describe?
2. Which entity/domain would still logically own it if the current UI disappeared?
3. Can that owner explain why the information belongs there without referring to presentation convenience?
4. Can other required views reference or derive the information from that owner rather than storing another canonical copy?

Bidirectional navigation does not require bidirectional canonical storage. Search, UI presentation, reporting, recommendations, and reverse lookup consume or derive from canonical owners rather than becoming independent owners of the same fact.

A second stored representation is allowed only when it represents a genuinely different semantic relationship or when an explicit architectural decision documents why duplication is required. A performance cache/index may exist when scale demonstrates the need, but it remains non-authoritative and must be reproducible from the canonical owner.

For entity-to-Media attachment, Media owns the relationship through `ownerType` + `ownerId`. Canonical entity records do not store inverse media-ID arrays solely to locate Media records that already identify their owner.

**Current implementation status:** Approved and active site-wide rule.

Section 4 is **PASS / VALIDATED / PRODUCTION IMPLEMENTED**:

- all Tackle `mediaIds[]` were removed,
- `MEDIA_DATA.ownerType` + `ownerId` is canonical attachment,
- runtime Tackle lookup derives active Media using `ownerType === "tackle"` and `ownerId === tackle.id`,
- no separate Tackle-Media registry or speculative Media role/order fields were added,
- removed fields are GIT HISTORY ONLY.

Section 5 applied D056 to Rig cleanup and is **PASS / VALIDATED / PRODUCTION IMPLEMENTED**:

- universally empty Rig `imageIds[]` were removed because future Rig media belongs to Media ownership,
- universally empty speculative Rig `techniqueIds[]` were removed,
- `variationIds[]` remains because it owns real Rig-to-Rig relationships,
- no speculative `targetFishIds[]` was added during cleanup.

D069 resolved the previously deferred prerequisite compatibility families. Intrinsic Rig↔Lure/Bait, Rig↔Technique, and Lure/Bait↔Technique relationships are stored once in the typed Compatibility Relationship domain and are implemented in `data/compatibility.js`; contextual Fish/Condition suitability remains Recommendation Decision Knowledge. Participating entity records do not receive inverse compatibility arrays.

**Future trigger:** Every new field, relationship, inverse navigation path, cache/index, search metadata proposal, and schema refactor must apply this ownership test during design. Existing domains are reconciled when audited or actively modified. Any exception requires a deliberate documented architecture decision explaining why one canonical owner is insufficient.

**Canonical owners:** `decisions/data-model.md` owns this permanent architectural rule and `DECISIONS.md` indexes it. `data-model/09-RELATIONSHIPS.md` owns operational relationship semantics when synchronized. Each domain data-model document identifies the owner of its own fields and domain-specific relationships.

Permanent principle: **ownership follows meaning, not convenience.**
# D058 – Fish Habitat and Waterbody Ownership

**Decision:** Fish-owned `habitatTags[]` and `waterbodyTypes[]` remain intrinsic Fish Reference Knowledge and are not collapsed into Current Conditions.

Approved Version 1 waterbody vocabulary:

- Pond
- Lake
- Reservoir
- River
- Creek

Approved Version 1 habitat vocabulary:

- Grass
- Timber
- Brush
- Rock
- Current
- Open Water
- Shallow Water
- Deep Water
- Cold Water
- Mud
- Channel

Current Conditions remains a separate semantic domain. Recommendation suitability under current conditions belongs to Decision Knowledge rather than duplicating intrinsic Fish habitat facts.

**Reason:** where a Fish characteristically lives is intrinsic species Reference Knowledge; whether today's conditions make a place/approach suitable is a different fact.

**Current implementation status:** Approved and fully implemented across the closed 30-Fish Version 1 production library.

**Future trigger:** revisit only if a second real domain demonstrates a reusable taxonomy/ownership need that cannot be served without changing this model.

**Canonical owners:** Fish data-model/workstream plus D058.
# D059 – Fish Category Registry and Lifecycle Ownership

**Decision:** Fish records store `categoryId` rather than duplicated category display text. A Fish-domain `FISH_CATEGORY_DATA` registry owns category identity, display name, summary, and array order.

Version 1 categories:

- `bass` — Bass
- `catfish` — Catfish
- `sunfish-crappie` — Sunfish & Crappie
- `walleye-sauger` — Walleye & Sauger
- `trout` — Trout
- `gar` — Gar
- `carp` — Carp
- `drum` — Drum
- `paddlefish` — Paddlefish

`All Fish` is a browse mode, not a category entity. `categoryId` and biological family remain distinct concepts.

Category records do not own `isActive`. Individual `Fish.isActive` is the sole Fish lifecycle owner; category visibility/counts are derived from active member Fish.

**Reason:** category identity/presentation/order is reusable Fish-domain Reference Knowledge, while activation belongs to the actual Fish entities. A second category lifecycle flag would create conflicting state.

**Current implementation status:** Fully implemented across all 30 Version 1 Fish. Every production Fish uses canonical `categoryId`; the legacy duplicated `category` field is retired from active Fish data.

**Future trigger:** revisit only when actual Fish taxonomy/navigation requirements demonstrate a need beyond the current registry.

**Canonical owners:** Fish data-model/workstream plus D059.
# D060 – Northern Rock Bass Identity and Shared Aliases

**Decision:** The canonical Version 1 identity is:

```text
id: northern-rock-bass
name: Northern Rock Bass
scientificName: Ambloplites rupestris
aliases: Rock Bass, Goggle-Eye
```

Regionally legitimate aliases may be shared by multiple canonical Fish. `Goggle-Eye` may therefore also apply to another appropriate Ozark species such as Ozark Bass; Search must preserve ambiguity instead of forcing an alias into one false exclusive owner.

All relationships use the stable canonical ID `northern-rock-bass` rather than display/alias text.

**Reason:** the canonical identity is scientifically specific while common regional names can be ambiguous. Modeling the alias honestly is safer for identification than artificially making it unique.

**Current implementation status:** Implemented, desktop/mobile validated, and closed in Production Wave 4 — Sunfish & Crappie using canonical ID `northern-rock-bass` and the approved shared-alias behavior.

**Future trigger:** update only if authoritative taxonomic/regional naming evidence requires a canonical identity correction.

**Canonical owners:** Fish data-model/source documentation and D060.
# D065 – Slip Bobber Alternate-Terminal Modeling Gate

**Decision:** The current canonical Slip Bobber Rig remains the hook-plus-live/natural-bait setup represented by its existing `componentRequirements[]` and assembly. A jig presentation is a legitimate alternate terminal configuration, but it must not be represented by casually relabeling canonical `bait`, adding an ad hoc optional jig field, or making the current ready-to-fish component list internally contradictory.

If the product later needs both hook+bait and jig terminal choices in one Rig experience, first define a reusable alternate-terminal/variant model that can truthfully express component substitution, assembly, readiness, knot, and presentation consequences. A separate canonical Rig is also an option if evidence shows the setups should not share one record.

**Reason:** Canonical component requirements drive assembly and readiness. Treating mutually exclusive terminal choices as simultaneous required/optional components would make ownership/readiness and instructions misleading. The current wording correction accurately describes bait without prematurely creating a one-off schema.

**Current implementation status:** The current bait note is corrected and validated in production. Alternate-terminal modeling is Deferred / Not Implemented and does not block current Rig or Fish work.

**Future trigger:** Revisit when an approved user workflow requires choosing between mutually exclusive terminal configurations within one canonical Rig, or when another Rig demonstrates the need for the same reusable model.

**Canonical owners:** D065 and `data-model/03-RIGS.md` own the durable boundary. `ACTIVE-CHANGE-LEDGER.md` keeps GATE-013 visible until a future explicit gate resolves it.
# D067 – User-Aware User Knowledge Architecture Before Tackle Expansion

**Decision:** The **Settings / User Data Architecture Gate** precedes authoritative My Tackle, Catch Log, and material Tackle Reference expansion. The gate must settle persistence/ownership foundations before durable User Knowledge features become authoritative.

Canonical Tackle remains application-owned **Reference Knowledge** and is not duplicated per user. Actual owned tackle belongs to **My Tackle User Knowledge** associated with the persistent user/profile model. Catch Log, Preferences, future saved/favorite state, and other persistent User Knowledge use the same ownership foundation rather than independent storage islands.

The gate must deliberately resolve at minimum:

- stable user/profile identity and account/device-linking behavior;
- synchronization-service boundary and offline reconciliation;
- local persistence/storage technology;
- retention behavior, including browser/site-data clearing;
- schema versioning and migration;
- backup/export and restore/import;
- device-transfer expectations;
- conflict-resolution and deletion/tombstone semantics where synchronization requires them;
- device-local versus profile-owned settings;
- preference ownership, including future preferred states for Regulations;
- theme/preferences persistence where applicable;
- persistent ownership versus temporary/current availability.

**UD-1 refinement — LOCKED 2026-08-30, refinement allowed:** FCC targets one persistent user identity/profile that may span multiple devices. Each device may maintain a local offline-capable copy of supported User Knowledge, while durable profile-owned records synchronize through a shared profile-scoped service when connectivity is available. Devices are replicas of the same semantic profile rather than independent users. Cross-device synchronization requires secure authentication or an equivalent approved account/device-linking mechanism. Synchronization is record-oriented rather than whole-profile replacement. Manual export/restore remains backup, portability, and disaster recovery rather than routine multi-device synchronization. Multi-profile/family sharing remains deferred.

UD-1 remains refinement-allowed without weakening the approved cross-device product goal. The Settings / User Data Architecture planning work subsequently locked the Version 1 implementation foundation: Firebase Authentication with Firebase UID-scoped profiles; email/password plus Google Sign-In as the initial sign-in mechanisms subject to implementation/security refinement; Cloud Firestore as the profile-scoped synchronized authority; supported browser persistence as the local/offline replica; FCC-owned repository/data-access abstraction; record-scoped schema versioning; explicit retention/deletion, backup/restore, conflict/tombstone/anti-resurrection, and profile-generation restore semantics; synchronized Profile/Preferences ownership boundaries; and independent persistent ownership versus current availability.

D069 refines sequencing while preserving this ownership rule. Conditions, Lure/Bait, and Techniques/Compatibility are implemented and closed. The Settings / User Data Architecture is architecture-complete through UD-12 canonical reconciliation and remains blocked only on required repository closeout validation/commit/final convergence before authoritative My Tackle. A scoped My Tackle Availability Foundation remains the next prerequisite for What Should I Throw production so the feature can distinguish Best Overall from Best Currently Available without treating transitional readiness state as ownership.

**Reason:** My Tackle and Catch Log are durable user-owned data. A purely local browser-bucket design makes multi-device use cumbersome and makes divergent inventories difficult to reconcile; whole-profile backup/restore is insufficient once multiple devices can make legitimate edits. Defining synchronized profile ownership before feature-specific schemas prevents incompatible storage islands and avoids baking one-device assumptions into durable User Knowledge.

**Current implementation status:** Shared User Knowledge architecture is approved/locked but production User Data is not implemented. UD-12 documentation closeout must land and pass before GATE-007 begins. Current Rig-readiness persistence remains transitional local availability state and is not authoritative ownership.

**Next gate:** GATE-007 — My Tackle Availability Foundation after GATE-006 closeout PASS. Its first bounded production action is the shared authenticated User Knowledge repository/access foundation plus minimum authoritative My Tackle ownership/current-availability contracts required by D069.

**Canonical owners:** D067; `ROADMAP.md`; `ARCHITECTURE.md`; `data-model/01-FOUNDATION.md`; `05-TACKLE.md`; `05A-INVENTORY.md`; `07-USER-DATA.md`. The retired detailed planning record is retained under `../../archive/workstreams/settings-user-data/SETTINGS-USER-DATA-ARCHITECTURE.md` as historical architecture evidence, not a current owner.

Permanent principle: **define who owns persistent User Knowledge, how the same user is recognized across devices, and how durable records survive/synchronize before building authoritative ownership/history features.**
