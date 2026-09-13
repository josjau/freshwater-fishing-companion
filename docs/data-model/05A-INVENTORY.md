# Freshwater Fishing Companion

**Document:** 05A-INVENTORY.md  
**Document Revision:** 0.4.73  
**Document Status:** Draft  
**Implementation Status:** Approved / Not Implemented  
**Decision Baseline:** D028, D056, D067, D069

---

# Purpose

This document defines the approved architectural boundary for future My Tackle/Inventory User Knowledge.

My Tackle represents actual fishing equipment and consumable tackle owned by the angler. No authoritative My Tackle production dataset or owned-item schema is implemented on current `main`.

---

# Current Status

**Approved / Not Implemented.**

The application currently has lightweight per-Rig local readiness selections. Those selections are transitional availability state, not authoritative persistent ownership records and must not be migrated automatically into My Tackle.

Canonical Tackle and the approved future Lure/Bait domain remain Reference Knowledge. My Tackle will become the persistent ownership source of truth only after its dedicated schema and workflows are implemented and validated.

---

# Ownership Boundary

Canonical Tackle answers:

> What functional tackle/equipment type is this?

Canonical Lure/Bait answers:

> What lure or bait identity is presented to the Fish?

My Tackle answers:

> What fishing items do I actually own, and what relevant variants do I have?

Under D067 and the locked UD-1 through UD-10 architecture, those owned items belong to the persistent authenticated user/profile that may span multiple devices. Canonical Tackle remains global application Reference Knowledge rather than being duplicated per user. Record-oriented synchronization, conflict/deletion semantics, and ownership-versus-current-availability architecture are settled. GATE-007 still owns the exact My Tackle production record fields, variant/pool identity, quantity behavior, canonical mapping, location/setup mechanics, and recommendation-facing matching rules.

A commercial Product Definition layer is not required for My Tackle MVP or basic Rig readiness. Product Definition remains deferred until an approved product-specific feature demonstrates a need.

---

# Owned-Item Schema — Unresolved

The detailed owned-item schema is intentionally open.

Earlier planning identified possible concepts such as:

- canonical Tackle and/or canonical Lure/Bait mapping as applicable,
- user-defined name,
- brand/model,
- size or variant,
- color,
- quantity,
- condition,
- notes,
- photo references,
- durable-versus-consumable behavior.

These are design inputs, **not approved production fields**. The My Tackle architecture gate may retain, rename, combine, normalize, or reject them based on demonstrated features.

No placeholder fields should be added before that gate.

## GATE-007 MT-1 Record Contract Checkpoint — APPROVED / REVISION ALLOWED

The following record-contract decisions are approved for GATE-007 production design, with revision allowed where implementation or later family-specific findings demonstrate a better shape without changing the approved semantics:

- **MT-1A — Common record identity:** authoritative My Tackle records require a stable record identity and record-level `schemaVersion`. The current common-envelope direction also includes lifecycle/change metadata needed by the shared User Knowledge repository; exact field names and UD-10 revision metadata remain implementation details rather than independently locked semantics.
- **MT-1B — Physical versus pooled inventory:** My Tackle supports two ownership-record behaviors: `physicalItem` for individually owned durable equipment and `functionalPool` for functionally interchangeable owned inventory where pooling is appropriate. Item-family contracts determine which behavior applies; Lure/Bait must not be assumed universally pooled.
- **MT-1C — Canonical Reference Knowledge mapping requirement:** authoritative My Tackle ownership does not require every owned record to map to canonical FCC Reference Knowledge. Legitimate owned items may remain unmapped when FCC does not currently provide an applicable canonical identity. Canonical mapping is required before a My Tackle record may automatically satisfy a canonical Rig, Lure/Bait, Recommendation, or other Reference-Knowledge requirement. FCC must not infer or silently assign canonical identity from descriptive text, commercial identity, custom values, prior usage, Recommendation behavior, or other indirect evidence. Custom or unmapped User Knowledge does not automatically create or expand canonical Reference Knowledge. GATE-007 need only implement the mapped-item capabilities required for authoritative Recommendation executability; allowing unmapped ownership records does not expand this gate into comprehensive inventory management.
- **MT-1D — Canonical mapping representation:** My Tackle represents canonical Reference Knowledge mappings as a typed collection of stable references owned by the My Tackle record. Version 1 supports `tackle` and `lure-bait` targets. A record may have zero mappings or mappings to multiple canonical domains when those domains own genuinely distinct semantic roles, with at most one mapping per canonical domain on a single owned record in Version 1. Mappings store references only and do not duplicate canonical names, definitions, categories, or other Reference Knowledge. Invalid or inactive targets do not invalidate or delete ownership but cannot satisfy automated canonical matching. Mapping remains subordinate to the owned item rather than an independent persistent relationship record, and MT-1C's prohibition on silent canonical inference remains controlling. **Production parameter names are not locked by MT-1D.** Earlier shorthand such as `canonicalMappings`, `canonicalType`, and `canonicalId` describes semantics only; final names should be self-describing and must not imply a Tackle-only target when the mapping may also target Lure/Bait.
- **MT-1F — Fishing-relevant variant attributes:** each supported My Tackle family owns a defined set of fishing-relevant attributes used for functional identity and matching. Exact serialization remains family-specific implementation work.
- **MT-1G — Quantity:** quantity is supported for `functionalPool` records where meaningful and is not used as the identity mechanism for individually owned `physicalItem` records. Recommendation executability must not depend on perfectly maintained stock counts. **G7-QTY-1A refines this contract:** omitted/unknown quantity means exact stock is unknown, positive quantity means known remaining stock, zero means explicitly known depleted, depletion is derived rather than separately persisted, and Recommendation quantity sufficiency is derived from effective confirmed current availability.
- **MT-1H — Descriptive versus fishing-relevant attributes:** descriptive information may help identify, search, organize, or understand an owned item, but it does not affect Rig buildability, Recommendation executability, or functional equivalence unless the applicable item-family contract explicitly defines that characteristic as fishing-relevant. Manufacturer, brand, and model are descriptive by default. An attribute must not become part of functional matching merely because the information is available.

- **MT-1E — Explicit item-family discriminator:** every authoritative My Tackle record carries an explicit item-family discriminator identifying the My Tackle family contract governing that owned record. The discriminator is User Knowledge schema/behavior metadata, not canonical Reference Knowledge identity. It governs applicable family-specific validation, fishing-relevant attributes, permitted/expected ownership or pooling behavior, functional-equivalence rules, and family-specific authoring behavior. The item-family discriminator, the MT-1B ownership behavior, and MT-1D canonical mappings are independent dimensions. An unmapped record retains its family contract under MT-1C, and FCC must not infer canonical identity solely from the family value. The complete Version 1 family vocabulary is established as production family contracts are approved rather than being exhaustively locked by MT-1E. **The field name itself remains refinement allowed; `itemFamily` is design shorthand rather than a required production name.**

**MT-1 checkpoint status: COMPLETE / APPROVED WITH REVISION ALLOWED.** MT-1A through MT-1H are approved at the semantic-contract level. Exact production field names and family-specific serialization remain refinement work.

**Production naming direction:** prefer descriptive, self-identifying parameter names over terse generic names. Current working candidates include `tackleItemFamily` for the MT-1E family discriminator, `tackleInventoryKind` for the MT-1B ownership behavior, and `fccReferenceMappings` containing `referenceDomain` + `referenceId` for MT-1D mappings. These are naming candidates, not locks. Names such as `tackleCanonicalType` should be avoided if they could misleadingly imply that every canonical mapping targets only the Tackle domain.

## GATE-007 CA Current-Availability Contract Checkpoint

- **CA-1 — Authoritative Current-Availability Context: APPROVED / revision allowed.** Version 1 maintains at most one authoritative current tackle-availability context per authenticated FCC profile. The context represents the user's confirmed **What I Have With Me Today** state as one semantic, revision-controlled User Knowledge object. It references selected persistent My Tackle, Inventory Location, and Fishing Setup User Knowledge where applicable and separately represents temporary/non-owned additions and explicit availability exceptions. It does not duplicate persistent ownership or store frozen copies of selected Location/Setup contents. Unconfirmed edits remain local drafts and do not change the authoritative context. Confirmation and Reset operate on the context as revision-controlled semantic operations under UD-10. The context is temporary current state, not a persistent ownership source and not a Version 1 durable Loadout/Trip entity.
- **CA-2 — Current-Availability Context Contents: APPROVED / revision allowed; refined by LOCATION-1A.** The authoritative current-availability context stores the user's confirmed availability inputs and overrides rather than a flattened authoritative copy of effective available tackle. Version 1 supports selected Inventory Location references, selected Fishing Setup references, directly available owned My Tackle references, temporary/non-owned additions, whole-owned-item exclusions, and source-specific current-context exceptions where a selected Location/descendant contribution must be removed without excluding the same owned pool from another selected source. Selected Locations resolve their current descendant tree and persistent memberships; selected Setups resolve their current persistent equipment references. `physicalItem` direct selection means that physical item is present. Direct selection of an owned `functionalPool` means some amount/presence is currently available and may carry a known current amount or quantity-unknown presence; it never silently means the entire persistent owned quantity is with the user. During effective-availability resolution, source contributions retain provenance long enough to apply source-specific exceptions before equivalent owned contributions aggregate/deduplicate by stable My Tackle identity; whole-item exclusions may then remove the owned item globally for the current context. Per-Location functional-pool quantity/presence constrains that Location's contribution and persistent `ownedQuantity` is never silently substituted for a Location/current amount. Temporary/non-owned tackle is added separately. A resolved/flattened effective-availability list may be computed or cached for performance but is reproducible and non-authoritative. Changes to persistent Location contents, containment, Fishing Setup relationships, or My Tackle ownership are not copied into the availability context. Exact production parameter names and derived contribution-cache shapes remain refinement allowed and should favor descriptive, self-identifying names.
- **CA-3 — Temporary / Non-Owned Availability Representation: APPROVED / revision allowed.** Borrowed, shared, rented, loaned, or otherwise non-owned tackle is represented as subordinate entries inside the authoritative current-availability context rather than as My Tackle ownership records or independent durable inventory records. Each temporary entry has a context-local stable identity sufficient for editing/reconciliation during the context lifecycle, uses an explicit My Tackle item-family contract, carries explicit typed FCC Reference Knowledge mappings when automated matching is intended, and carries only the applicable family-specific fishing-relevant attributes needed for Recommendation executability. Temporary entries may remain unmapped, but an unmapped entry cannot automatically satisfy canonical Rig/Recommendation requirements and FCC must not infer canonical identity from descriptive text, commercial identity, source, or other indirect evidence. Descriptive identification/source metadata may be retained but does not affect functional matching unless a family contract explicitly makes it fishing-relevant. Temporary entries do not create or modify My Tackle ownership, do not inherit persistent Inventory Location or Fishing Setup ownership relationships, and do not require an independent record-level schema/revision lifecycle in Version 1; the parent context owns confirmation, revision, synchronization, freshness, and Reset. MT-1B `physicalItem` / `functionalPool` ownership representation does not automatically apply to temporary entries. Any later conversion to My Tackle requires a separate explicit ownership workflow that creates and validates a new authoritative owned record. Exact production parameter names remain refinement allowed and should remain descriptive/self-identifying.
- **CA-4 — Recommendation-Facing Availability Matching: APPROVED / revision allowed.** Recommendation availability matching is derived from effective confirmed current availability and does not create a second ownership, availability, compatibility, or Recommendation authority. An effectively available owned or temporary/non-owned entry may satisfy an availability-bearing canonical requirement only through an explicit valid FCC Reference Knowledge mapping plus any applicable hard fishing-relevant constraints defined by its governing item-family contract; silent canonical inference remains prohibited. Matching distinguishes **Exact/Preferred Match**, **Usable Functional Match**, and **No Usable Match**. Exact/Preferred satisfies the canonical requirement, all hard functional constraints, and applicable Recommendation-specific preferred refinements. Usable Functional satisfies the canonical requirement and all hard functional constraints but differs from or lacks one or more preferred refinements. No Usable Match means the requirement cannot be established from effective current availability. Unknown descriptive or preferred information never silently qualifies as Exact/Preferred; unknown fishing-relevant information may remain Usable Functional only when the applicable family contract does not require that information to establish functional compatibility. A Recommendation is currently executable only when every required availability-bearing requirement has at least one Exact/Preferred or Usable Functional match; preferred or optional refinements alone do not block executability. One available entry may satisfy multiple semantic requirements when its explicit mappings and applicable family attributes validly satisfy each requirement. Match classifications/diagnostics are derived and non-authoritative; they may inform What Should I Throw ranking and missing-requirement presentation, while contextual optimization/ranking remains Recommendation Decision Knowledge under D069. Exact production field names, match-result labels, and ranking weights remain refinement allowed.

**CA checkpoint status: COMPLETE / APPROVED WITH REVISION ALLOWED.** CA-1 through CA-4 are approved at the semantic-contract level. The next GATE-007 action is to translate the approved MT-1 and CA contracts into exact production item-family contracts/serialization, beginning with **Hooks**. Define the first family only as far as required for authoritative My Tackle ownership, canonical mapping, Rig buildability, and Recommendation availability matching; preserve descriptive self-identifying production naming and do not expand this gate into comprehensive inventory management.

## GATE-007 Hook Production Contract Checkpoint

- **HOOK-1A — Hook Core Record Shape: APPROVED / revision allowed.** Version 1 represents owned Hooks as My Tackle `functionalPool` records governed by the explicit Hook item-family contract. The minimum Hook-family contract requires common My Tackle identity/version/lifecycle metadata plus the Hook family discriminator, `functionalPool` ownership behavior, optional typed FCC Reference Knowledge mappings, Hook style, Hook size, and optional owned quantity. Hook records may map to one canonical `tackle` identity when automated canonical matching is intended; Hooks do not use a Lure/Bait mapping merely because they may hold or present bait. Canonical mapping remains optional for ownership but required before the Hook record may automatically satisfy a canonical Rig or Recommendation requirement. Hook style and Hook size are fishing-relevant family attributes and may be FCC-controlled, custom, or unknown without creating new Reference Knowledge. Commercial manufacturer/brand/model identity is excluded from minimum required Hook identity, but manufacturer/brand/model are explicitly supported as optional descriptive metadata. Functionally equivalent Hook inventory may aggregate across commercial products, and commercial/descriptive identity must not fragment functional equivalence. `ownedQuantity` is optional; when present it is a non-negative whole-number known remaining-stock value, omission means ownership is known but the exact count is not, and zero means explicitly known depleted under G7-QTY-1A. Automatic functional-equivalence/pool merging requires sufficient matching Hook-family identity information and must never be inferred from commercial/descriptive information; unknown or insufficient identity must not trigger aggressive automatic merging. Exact production parameter names remain refinement allowed and should remain descriptive/self-identifying.
- **HOOK-1B — Hook Selector/Value Representation: APPROVED / revision allowed.** Hook style and Hook size explicitly distinguish three semantic states: **standard**, **custom**, and **unknown**. A standard value means the user selected an FCC-defined Hook-family value that FCC understands and may use for exact family-level matching. A custom value preserves explicit user-entered User Knowledge but does not create a standard Hook-family value, canonical Tackle identity, or automatic semantic equivalence; FCC may offer an apparent standard match for explicit user confirmation but may not silently convert it. Unknown is a valid explicit state meaning ownership is known while the applicable style or size is not known; it must remain distinguishable from missing/corrupt schema data. Standard values may establish attribute-level functional equality. Custom values may support bounded duplicate-candidate comparison without gaining standard FCC semantics. Unknown values cannot prove attribute-level equality. Under CA-4, custom or unknown values cannot silently satisfy a hard standard family requirement or qualify as Exact/Preferred for that attribute, but they may coexist with a Usable Functional Match when that attribute is not required to establish functional compatibility. The production enum/property names remain refinement allowed; **standard/custom/unknown** are the approved semantic distinctions and may later serialize under equivalent implementation labels.
- **HOOK-1C — Hook Taxonomy + Low-Friction Authoring: APPROVED / revision allowed.** Version 1 Hook User Knowledge may represent independent fishing-relevant dimensions for **Hook Style, Hook Size, Wire Class, Point Alignment, Barb Configuration, and Guard Configuration**. These are Hook-family attributes, not separate canonical Tackle identities, and FCC must not create Reference Knowledge records for every attribute combination. Recommendation and regulation matching evaluate only dimensions relevant to the applicable decision: a characteristic may be required, preferred, or not relevant; unknown information on an irrelevant dimension must not reduce match quality. HOOK-1B standard/custom/unknown semantics continue to govern applicable values. Detailed schema support must not make routine inventory entry onerous: the default beginner-facing Add Hook flow should normally request only Hook Style, Hook Size, and optional Quantity, with secondary characteristics exposed contextually or through progressive disclosure and permitted to remain unknown. A common Hook entry should target roughly 15–30 seconds, and efficient repeat entry of related sizes/styles is a design requirement. Shank length, exact gap, eye orientation/angle, bait-keeper type, detailed point shape, material, forging/construction method, and coating/finish/color remain deferred until a demonstrated feature requires them. Jigheads remain a separate Tackle/My Tackle family rather than a Hook Style; specialized bare jig hooks may remain Custom unless later functionality demonstrates a standardization need. Exact production field names, vocabularies, applicability rules, and UI presentation remain refinement allowed.
- **HOOK-1D — Standard Hook Style Vocabulary: APPROVED / revision allowed.** Version 1 standard Hook Styles are **Plain/J Hook, Baitholder, Aberdeen, Octopus, Circle, Kahle, Treble, Offset Round Bend, Extra-Wide Gap (EWG), Straight-Shank Worm Hook, and Finesse/Wacky/Drop-Shot Hook**. Hook Style represents the Hook-family pattern and remains independent of Hook Size, Wire Class, Point Alignment, Barb Configuration, Guard Configuration, and canonical FCC Tackle identity; independent characteristics must not be encoded by multiplying Hook Style values. Standard styles may align with applicable canonical Tackle identities, but selecting a Style must never silently create or change canonical mapping. In particular, **Straight-Shank Worm Hook must not be silently mapped to the current `offset-worm-hook` Reference Knowledge identity**; that canonical boundary requires separate reconciliation because a true straight-shank worm hook is not structurally an offset hook. Custom and Unknown remain valid under HOOK-1B. The standard Style vocabulary is deliberately bounded to demonstrated FCC freshwater use and is not a commercial hook catalog. Exact production IDs, labels, applicability rules, canonical-alignment refinements, and later vocabulary expansion remain revision allowed.

**Schema review presentation requirement:** beginning with HOOK-1B and continuing for later GATE-007 schema decisions, each proposed schema summary must include a complete representative record showing what an actual persisted/application record would look like, not only a field list or isolated fragments. Fields whose exact shared repository metadata names remain unlocked must be clearly identified as working candidates rather than silently treated as locks.

- **HOOK-1E — Standard Hook Size Vocabulary + Notation: APPROVED / revision allowed.** Version 1 standard Hook Size values use established nominal fishing-hook notation and initially support numbered sizes **`#16` through `#1`** and aught sizes **`1/0` through `14/0`**. Hook Size is represented as canonical text rather than a physical measurement and is not converted by Measurement System preferences. Standard Hook Size equality means normalized nominal-label equality, not guaranteed identical physical dimensions across manufacturers or Hook patterns. Standard ordering is derived rather than stored per owned record: numbered sizes increase physically as their number decreases through `#1`, followed by aught sizes increasing from `1/0` through `14/0`; no `#0` or `0/0` transition value is introduced. Custom and Unknown remain valid under HOOK-1B, and out-of-range sizes remain valid Custom User Knowledge until demonstrated functionality justifies expanding the standard vocabulary. Size matching remains context-sensitive under CA-4: a different or unknown size blocks usability only when the applicable Rig/Recommendation establishes size as a hard requirement; preferred-size differences may remain Usable Functional where explicitly allowed. Default Hook authoring should preserve the HOOK-1C low-friction requirement. **UX preference:** use a selector interaction analogous to the Regulations state selector: for the selected Hook Style, present a small FCC-defined group of common sizes at the top for quick access while still listing the complete standard Hook Size vocabulary below/within the same selector. This is analogous to Preferred Regulation States as an interaction pattern only; common Hook sizes are presentation guidance, not persistent user preference or ownership semantics. Exact production IDs, UI grouping, common-size sets, range expansion, and comparison implementation remain refinement allowed.

- **HOOK-1F — Secondary Hook Attribute Vocabularies + Applicability: APPROVED / revision allowed.** Version 1 standard secondary Hook values are **Wire Class = Light / Standard / Heavy; Point Alignment = Inline / Offset; Barb Configuration = Barbed / Barbless; Guard Configuration = Unguarded / Guarded**. HOOK-1B Standard/Custom/Unknown semantics remain controlling. Applicability is separate from value: Unknown means an applicable characteristic is not known, while a characteristic the Hook family/style contract defines as non-applicable is omitted rather than represented by a user-selectable Not Applicable value. Inline means non-offset point alignment. Barbless means no functional barb remains for FCC inventory/matching purposes, while the authoritative regulation remains the owner of any more specific legal wording. Guarded means a physical Hook guard is present and must not be inferred merely because an assembled Rig is weedless. Secondary attributes remain progressive-disclosure / just-in-time fields; the normal Add Hook flow remains Style + Size + optional Quantity. Matching evaluates only attributes relevant to the applicable decision, so unknown irrelevant information does not reduce match quality. Known conflicting secondary fishing-relevant values must not be silently pooled; Unknown does not prove equality, and exact duplicate/merge/split behavior remains HOOK-1G. A secondary characteristic may become a hard requirement only when explicit applicable logic establishes it. **Legal applicability must come from an authoritative upstream regulatory constraint; Recommendation Decision Knowledge must not independently infer legal requirements from state, species, resource capabilities, descriptive Regulations links, or similar indirect evidence.** The current Regulations feature remains an official-resource gateway and does not itself provide machine-readable legal constraints. Regulation-aware Recommendation / Regulatory Constraints integration is a deferred architecture requirement outside this Hook-family lock and does not expand GATE-007. Exact field names, applicability matrices, contextual prompts, UI labels, and later vocabulary expansion remain refinement allowed.

- **HOOK-1G — Hook Functional-Pool Identity, Duplicate Detection, Merge + Split: APPROVED / revision allowed.** Hook Style + Hook Size establish the baseline duplicate-candidate boundary; applicable known fishing-relevant secondary Hook characteristics further distinguish functional pools, and known conflicting values must remain separate. Duplicate detection is distinct from semantic equivalence: FCC may identify strong or possible existing-pool candidates, but Version 1 does not silently merge authoritative My Tackle records. Add/Import requires explicit user confirmation before combining ownership. Standard matching values may establish attribute equality; Unknown is not a wildcard and does not prove equality; Custom values do not silently gain Standard semantics, though Unknown/Custom may support a possible candidate for explicit confirmation. Canonical mappings participate in safe merge evaluation: matching mappings are compatible; mapped + unmapped records require explicit confirmation of the resulting mapping; conflicting mappings require resolution rather than a simple quantity merge. Known quantities sum on confirmed merge; if either quantity is unknown, the result remains unknown unless the user explicitly supplies a valid total. An Edit applies to the whole functional pool; if only a subset differs in a fishing-relevant characteristic, FCC uses an explicit Split operation. A split retains the original stable ID for one resulting pool and creates new stable IDs for additional pools; quantity and descriptive information must be explicitly allocated or preserved without invented values. A merge retains one authoritative record and retires the other through normal UD-10 deletion/anti-resurrection semantics. Descriptive/commercial metadata never establishes or fragments functional equivalence. Derived duplicate/pool signatures may be used for lookup/performance but remain reproducible and non-authoritative. Exact candidate-scoring thresholds, surviving-record choice, dependent-reference reconciliation, descriptive-metadata serialization, and Merge/Split UI remain refinement allowed.

- **HOOK-1H — Hook Canonical Tackle Mapping + Reference Knowledge Alignment: APPROVED / revision allowed.** The current canonical `offset-worm-hook` identity is semantically broader than its offset-only name because existing Reference Knowledge already includes Straight-Shank as a variant and multiple Rigs use the identity as their general worm-hook requirement. Before authoritative My Tackle implementation, FCC should correct that canonical identity to **`worm-hook` / Worm Hook** and update current stable internal references accordingly rather than preserve an inaccurate offset-only boundary. Version 1 normal Hook mapping candidates are Plain/J, Baitholder, Aberdeen, Octopus, Circle, Kahle, and Treble -> generic `hook`; Offset Round Bend, EWG, and Straight-Shank Worm Hook -> `worm-hook`; and Finesse/Wacky/Drop-Shot Hook -> `wacky-hook`. These are mapping candidates, not automatic consequences of Hook Style; canonical mapping remains explicit User Knowledge confirmation under MT-1C/D and HOOK-1D, and a clearly displayed candidate may be confirmed as part of the normal Add action without requiring a separate mapping workflow. The existing `weighted-swimbait-hook` remains a distinct canonical Tackle identity because current Rig buildability explicitly requires a Hook with integrated weight. Weighted Swimbait Hooks remain in the Hook My Tackle family rather than creating a new family. **Integrated Weight** is added as a demonstrated conditional fishing-relevant Hook attribute; it is omitted when not applicable and participates in functional-pool distinction when applicable. An ordinary EWG mapped to `worm-hook` does not automatically satisfy `weighted-swimbait-hook`, and a Weighted Swimbait Hook does not automatically satisfy `worm-hook`; canonical mapping plus applicable Hook-family constraints remain controlling. No additional Hook-specific canonical identities are created without demonstrated Rig/Recommendation/buildability need. Exact Reference Knowledge migration mechanics, labels/aliases, visible mapping-confirmation UX, and Integrated Weight measurement serialization remain refinement work.

- **HOOK-1I — Integrated Weight Measurement + Final Hook-Family Serialization/Validation Boundary: APPROVED / revision allowed.** Integrated Weight is a conditional fishing-relevant physical mass measurement for Hooks with weight physically integrated into the Hook. Unlike nominal Hook Size notation, Integrated Weight participates in the Measurement System display preference. Version 1 stores one authoritative positive amount plus one explicit mass unit rather than duplicating U.S. Customary and Metric values; supported units are `oz` and `g`, and alternate-system display plus normalized comparison are derived non-destructively. When Integrated Weight does not apply, the attribute is omitted. When integrated weight is known to apply but the amount is unknown, the attribute is present with an explicit Unknown state; zero must not represent an unweighted Hook. Physical measurement values use Known/Unknown applicability semantics rather than Standard/Custom controlled-vocabulary semantics. Fractional-ounce notation may be accepted/displayed naturally while the stored amount remains numeric, and common values may be prioritized in selectors without creating an exhaustive standard-weight vocabulary. Exact normalized mass equality may establish measurement equality; approximate cross-unit values may support duplicate/merge candidacy but do not silently prove functional-pool equality. Integrated Weight participates in functional-pool identity whenever applicable. A Hook mapped to canonical `weighted-swimbait-hook` requires Integrated Weight to be applicable, though the exact amount may remain Unknown unless a Recommendation makes it a hard requirement. A Hook with applicable Integrated Weight must not silently receive the ordinary `worm-hook` mapping; unresolved mapping may remain unmapped under MT-1C. The completed Version 1 Hook-family contract requires common authoritative My Tackle identity/version/lifecycle semantics, Hook family discriminator, `functionalPool`, Hook Style, and Hook Size; it conditionally supports explicit FCC Reference mappings, Wire Class, Point Alignment, Barb Configuration, Guard Configuration, Integrated Weight, owned Quantity, and optional descriptive/commercial metadata. Missing required family structure is invalid; explicit Unknown family values remain valid User Knowledge; non-applicable attributes are omitted; known Integrated Weight values must be finite positive supported measurements; incompatible/inactive canonical mappings cannot satisfy automation; and descriptive metadata does not establish functional equivalence or canonical identity. Exact shared measurement-object property names, fractional display formatting, normalized-comparison implementation, descriptive-metadata serialization, and reusable measurement utilities remain revision allowed.

**Hook item-family checkpoint status: COMPLETE / APPROVED WITH REVISION ALLOWED.** HOOK-1A through HOOK-1I settle the Version 1 Hook semantic contract required for authoritative ownership, current-availability matching, Rig buildability, and Recommendation executability. Exact production field names and implementation mechanics remain refinement work.

## GATE-007 Weight Production Contract Checkpoint

- **WEIGHT-1A — Weight Core Record Shape: APPROVED / revision allowed.** Version 1 represents standalone fishing Weights as My Tackle `functionalPool` records governed by the explicit Weight item-family contract. The Weight family covers standalone tackle whose primary function is adding mass to a Rig, including current canonical examples such as Split Shot, Sliding Sinker, and Bullet Weight. Weighted Hooks, Jigheads, weighted Floats, and other components that integrate mass while serving another primary function remain governed by their applicable item families rather than becoming Weight records solely because they contain weight. The minimum Weight-family contract requires common authoritative My Tackle identity/version/lifecycle semantics, a Weight family discriminator, `functionalPool` ownership behavior, and an applicable fishing-relevant Weight Mass characteristic. Weight Mass is always applicable to a standalone Weight and must be present as either Known or explicit Unknown; omission does not mean non-applicable. Known mass reuses the approved physical-mass measurement semantics established by HOOK-1I: one finite positive authoritative amount plus an explicit `oz` or `g` unit, with Measurement System display conversion and normalized comparison derived non-destructively. Zero is invalid as an unweighted sentinel. Weight records may additionally contain explicit typed FCC Reference Knowledge mapping, optional owned Quantity, later-approved subtype/style or material characteristics, and optional descriptive/commercial metadata. Weight mappings target canonical Tackle rather than Lure/Bait; mapping is optional for ownership but required for automatic canonical Rig/Recommendation satisfaction, and Weight characteristics must not silently create canonical identity. Unknown exact Weight Mass may still support a broad canonical match when exact mass is not a hard functional constraint, but it cannot establish an Exact/Preferred numeric mass match when a Recommendation requires one. Quantity remains optional under MT-1G. Split-shot or other family-specific nominal size/rating notation, subtype vocabularies, and material semantics remain deferred to subsequent Weight-family decisions so the reusable physical-mass representation is not overloaded with manufacturer/fishing notation. Exact field names, shared measurement-object property names, descriptive-metadata serialization, and UI mechanics remain revision allowed. **WEIGHT-1C refinement:** the final Version 1 minimum Weight-family contract also requires Weight Style as Standard, Custom, or Unknown family data; the WEIGHT-1C representative record supersedes the earlier WEIGHT-1A example where Style was not yet present.

**Representative WEIGHT-1A record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    tackleItemId: "mt-weight-0001",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-05T11:15:00-05:00",
    updatedAt: "2026-09-05T11:15:00-05:00",

    tackleItemFamily: "weight",
    tackleInventoryKind: "functionalPool",

    fccReferenceMappings: [
        {
            referenceDomain: "tackle",
            referenceId: "bullet-weight"
        }
    ],

    weightMass: {
        valueStatus: "known",
        amount: 0.25,
        unit: "oz"
    },

    ownedQuantity: 8,

    descriptiveMetadata: {
        brand: "Strike King",
        manufacturer: null,
        productName: null,
        modelNumber: null,
        notes: null
    }
}
```

- **WEIGHT-1B — Weight Size/Rating Representation + Measurement/Notation Semantics: APPROVED / revision allowed.** Version 1 distinguishes physical **Weight Mass** from any conditional **nominal Weight Size/Rating designation**. Weight Mass remains the always-applicable physical measurement approved in WEIGHT-1A and uses Known/Unknown physical-mass semantics. A nominal designation is a separate conditional fishing/product-notation characteristic for Weight types that use notation independent from physical mass, including Split Shot. Nominal designations preserve source/user notation and, when applicable, may be Known with a literal label or explicitly Unknown; when no independent nominal designation applies and the Weight is identified directly by physical mass, the nominal-designation characteristic is omitted. Measurement System preference may convert/display physical mass but does not convert or destructively rewrite nominal fishing notation. Version 1 does not create a universal Split Shot designation-to-mass conversion table; labels such as `BB`, `3/0`, `#4`, `AAA`, and similar do not silently imply a physical mass. FCC may offer common notation values as authoring suggestions without creating a universal Reference Knowledge vocabulary. When a package/source provides both nominal designation and physical mass, both may be retained because they own distinct facts. Recommendation/Rig matching evaluates only the semantic dimension explicitly required: physical-mass requirements use Weight Mass, nominal-designation requirements use the designation, and broad canonical buildability may remain usable when exact mass is not hard-required. Known conflicting physical masses prevent silent functional equivalence. Matching nominal labels with unknown mass may support a strong duplicate candidate but do not independently prove physical equality; differing nominal labels likewise do not prove mathematical mass inequality. Known compatible physical mass may support functional equivalence even when nominal labels differ, subject to explicit user-confirmed merge. FCC must not persist inferred physical mass from nominal designation, commercial identity, lookup data, or other indirect evidence without explicit confirmation. Exact nominal-label normalization, common-value selector contents, Recommendation requirement serialization, and UI labels remain revision allowed.

**Representative WEIGHT-1B record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    tackleItemId: "mt-weight-0003",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-06T13:15:00-05:00",
    updatedAt: "2026-09-06T13:15:00-05:00",

    tackleItemFamily: "weight",
    tackleInventoryKind: "functionalPool",

    fccReferenceMappings: [
        {
            referenceDomain: "tackle",
            referenceId: "split-shot"
        }
    ],

    // Always applicable to standalone Weights.
    weightMass: {
        valueStatus: "known",
        amount: 0.4,
        unit: "g"
    },

    // Conditional source/user fishing notation.
    weightNominalDesignation: {
        valueStatus: "known",
        label: "#BB"
    },

    ownedQuantity: 30,

    descriptiveMetadata: {
        brand: "Orvis",
        manufacturer: null,
        productName: "Non-Toxic Split Shot",
        modelNumber: null,
        notes: null
    }
}
```

- **WEIGHT-1C — Standard Weight Style Vocabulary + Low-Friction Authoring: APPROVED / revision allowed.** Version 1 makes **Weight Style** a required Weight-family characteristic in addition to the always-applicable Weight Mass established by WEIGHT-1A. Weight Style uses the same Standard / Custom / Unknown semantic distinction approved for controlled Hook-family values: Standard means an FCC-defined Weight-family style that FCC understands for family-level matching; Custom preserves legitimate long-tail User Knowledge without silently expanding canonical Reference Knowledge; Unknown is a valid explicit state distinct from missing/corrupt schema data. The bounded Version 1 standard Weight Style vocabulary is **Split Shot; Rubber-Core / Rubber-Grip; Bullet / Worm Weight; Flipping / Punch Weight; Egg / Carolina Sinker; No-Roll Sinker; Walking Sinker; Drop-Shot Weight; Nail / Neko Insert Weight; Bank Sinker; Casting / Dipsey / Bell Sinker; and Pyramid Sinker**. The vocabulary is deliberately broad enough for common freshwater Recommendation/buildability coverage without becoming a commercial sinker catalog. Cannonball, keel/trolling, torpedo, disc, spider/storm, slinky/drift, mojo, lead-wire, specialized fly/nymph, proprietary snag-resistant, and similar uncommon or specialized Weight forms remain valid Custom values until demonstrated FCC functionality requires standard semantics. Bottom Bouncer remains outside the ordinary standalone Weight Style vocabulary because its wire-based bottom-contact function is more than a simple molded standalone sinker and should retain/reconcile its own functional Tackle treatment. Weight Style may be required, preferred, or not relevant to a particular Recommendation; unknown or custom Style cannot silently prove a hard Standard style requirement but may remain usable where the Recommendation only requires a broader compatible canonical function. Normal authoring must remain low-friction: Type/Style + Weight/Mass + optional Quantity are the primary fields, with nominal Size/Rating shown when applicable; common choices may be surfaced first while the full bounded list plus Custom/Unknown remain available. Selecting a Weight Style does not silently create canonical Tackle identity. Canonical alignment and any Reference Knowledge expansion are explicitly deferred to WEIGHT-1D. Exact style IDs/labels, quick-pick ordering, aliases, UI wording, and later vocabulary expansion remain revision allowed.

**Representative WEIGHT-1C record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    tackleItemId: "mt-weight-0005",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-06T14:18:00-05:00",
    updatedAt: "2026-09-06T14:18:00-05:00",

    tackleItemFamily: "weight",
    tackleInventoryKind: "functionalPool",

    // Canonical mapping remains explicit and is not implied by Style.
    // This example intentionally remains unmapped pending WEIGHT-1D.
    fccReferenceMappings: [],

    weightStyle: {
        valueType: "standard",
        value: "nail-neko-insert-weight"
    },

    // Always applicable to standalone Weights.
    weightMass: {
        valueStatus: "known",
        amount: 0.0625,
        unit: "oz"
    },

    // No independent nominal rating is known/applicable here.
    // weightNominalDesignation omitted.

    ownedQuantity: 6,

    descriptiveMetadata: {
        brand: null,
        manufacturer: null,
        productName: null,
        modelNumber: null,
        notes: null
    }
}
```

- **WEIGHT-1D — Canonical Tackle Alignment + Reference Knowledge Expansion: APPROVED / revision allowed.** The approved twelve Weight Styles map to a deliberately smaller set of canonical functional Tackle concepts; canonical Tackle owns broad physical/buildability identity while Weight Style owns the finer actual owned variant, and Version 1 must not create one canonical Tackle record per Weight Style. Existing `split-shot` is broadened/reconciled to the working canonical identity **`line-mounted-sinker` / Line-Mounted Sinker**, covering Split Shot and Rubber-Core / Rubber-Grip Styles. Existing `bullet-weight` remains the canonical owner for Bullet / Worm Weight and Flipping / Punch Weight. Existing `sliding-sinker` remains the canonical owner for Egg / Carolina, No-Roll, and Walking Sinker. Existing `drop-shot-weight` remains the owner for Drop-Shot Weight, and existing `nail-weight` remains the owner for Nail / Neko Insert Weight. Existing `fixed-sinker` and `ringed-sinker` are reconciled into one broader physical functional identity, working candidate **`external-eye-sinker` / External-Eye Sinker**, covering Bank, Casting / Dipsey / Bell, and Pyramid Styles; Rig records continue to own whether the eye is tied to a dropper, used as a sliding line path, attached to a split ring, or otherwise assembled. Existing `bottom-bouncer` remains a distinct canonical Tackle concept outside the ordinary twelve-style standalone Weight vocabulary. Weight Style does not silently create canonical mapping; Standard Styles may provide a clearly displayed mapping candidate for explicit confirmation during Add/Edit, while Custom/Unknown may remain unmapped. Exact canonical IDs/names, aliases, Reference migration mechanics, Media-owner migrations, Rig-reference updates, recognition copy, validator reconciliation, and implementation sequencing remain revision allowed; implemented Reference changes must update affected internal references and pass structural validation/CI before completion.

**Representative WEIGHT-1D record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    tackleItemId: "mt-weight-0006",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-06T14:25:00-05:00",
    updatedAt: "2026-09-06T14:25:00-05:00",

    tackleItemFamily: "weight",
    tackleInventoryKind: "functionalPool",

    // Explicit user-confirmed canonical mapping.
    fccReferenceMappings: [
        {
            referenceDomain: "tackle",
            referenceId: "line-mounted-sinker"
        }
    ],

    weightStyle: {
        valueType: "standard",
        value: "rubber-core-rubber-grip"
    },

    weightMass: {
        valueStatus: "known",
        amount: 0.125,
        unit: "oz"
    },

    // No independent nominal rating applies here.
    // weightNominalDesignation omitted.

    ownedQuantity: 4,

    descriptiveMetadata: {
        brand: null,
        manufacturer: null,
        productName: null,
        modelNumber: null,
        notes: null
    }
}
```

- **WEIGHT-1E — Secondary Attributes + Material: APPROVED / revision allowed.** Version 1 supports **Weight Material** as an optional fishing-relevant secondary characteristic using Standard / Custom / Unknown semantics. Initial Standard materials are **Lead, Tungsten, Steel, Tin, Bismuth, Brass, and Zinc**; `Lead-free` is not a Material identity. Material does not create or change canonical Tackle identity and does not by itself block broad Rig buildability; when known, it is preserved as User Knowledge and may support explicit Recommendation refinements or authoritative upstream regulatory constraints. Material is not required in the normal Add Weight flow. For **Drop-Shot Weight**, Version 1 conditionally supports **Drop-Shot Shape = Round / Ball, Teardrop, Skinny / Cylinder, Custom, or Unknown**; Shape is omitted for other Weight Styles and ordinarily acts as a Recommendation refinement rather than a broad buildability requirement. For **Nail / Neko Insert Weight**, Version 1 conditionally supports **Insert Retention Form = Plain Insert / Nail, Ribbed / Barbed Insert, Screw-In, Custom, or Unknown**; it is omitted for other styles and does not imply soft-plastic compatibility without explicit Recommendation/compatibility knowledge. Secondary Weight characteristics remain progressive-disclosure / just-in-time fields. Normal Add Weight remains Style + Mass + optional Quantity, with nominal Size/Rating where applicable. Coating/color, removable Split Shot construction, exact line-hole/eye geometry, density/hardness values, detailed alloy composition, commercial finish, and similar engineering characteristics remain deferred until demonstrated functionality requires them. Legal material restrictions must come from an authoritative upstream regulatory constraint; FCC does not infer legality from state/species or the current Regulations resource gateway. Exact field names, applicability/UI, later vocabulary expansion, and final pool/merge consequences remain revision allowed.

**Representative WEIGHT-1E record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    tackleItemId: "mt-weight-0007",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-06T15:05:00-05:00",
    updatedAt: "2026-09-06T15:05:00-05:00",

    tackleItemFamily: "weight",
    tackleInventoryKind: "functionalPool",

    fccReferenceMappings: [
        {
            referenceDomain: "tackle",
            referenceId: "drop-shot-weight"
        }
    ],

    weightStyle: {
        valueType: "standard",
        value: "drop-shot-weight"
    },

    weightMass: {
        valueStatus: "known",
        amount: 0.375,
        unit: "oz"
    },

    weightMaterial: {
        valueType: "standard",
        value: "tungsten"
    },

    weightDropShotShape: {
        valueType: "standard",
        value: "teardrop"
    },

    // weightNominalDesignation omitted: no independent nominal rating applies.
    // Nail/Neko retention form omitted: non-applicable to this Style.

    ownedQuantity: 4,

    descriptiveMetadata: {
        brand: "VMC",
        manufacturer: null,
        productName: null,
        modelNumber: null,
        notes: null
    }
}
```

- **WEIGHT-1F — Functional Pool + Final Validation Boundary: APPROVED / revision allowed.** Version 1 standalone Weight ownership uses My Tackle `functionalPool` semantics. Weight Style plus Weight Mass form the primary family-level functional identity when sufficiently known. A Standard Style plus exact normalized known Mass is the strongest duplicate-candidate basis; Unknown is not a wildcard, Custom does not gain Standard semantics, and duplicate detection never silently merges authoritative ownership. Conditional nominal Size/Rating may strengthen duplicate detection where applicable, especially for Split Shot when exact Mass is Unknown, but nominal notation does not establish universal physical equality and known conflicting notation must not be silently discarded. Material, Drop-Shot Shape, and Nail/Neko Retention Form are not baseline duplicate keys, but once known they remain authoritative fishing-relevant User Knowledge; conflicting known secondary values prevent silent pooling because one single-valued pool could not truthfully represent both. Separate pools may nevertheless satisfy the same broad canonical requirement, with CA-4 determining Exact/Preferred, Usable Functional, or No Usable Match for the specific decision. Canonical mapping participates in merge safety: matching compatible mappings may coexist; mapped + unmapped requires explicit confirmation of the resulting mapping; conflicting mappings require resolution. Mapping remains optional for ownership and required for automated canonical satisfaction, and Weight Style never silently creates mapping. Add/Import never silently merges into an existing pool. Confirmed merges combine known quantities; if any contributing quantity is Unknown, the resulting quantity remains Unknown unless the user explicitly supplies a valid total. Whole-pool Edit is distinct from subset Split; Split retains one original stable identity and creates new identities for additional pools, while Merge retains one surviving authoritative identity and retires the other under UD-10 deletion/anti-resurrection semantics. FCC does not invent or silently discard known fishing-relevant information during Merge/Split. The completed Version 1 standalone Weight-family validation boundary requires shared authoritative My Tackle identity/version/lifecycle semantics, Weight family discriminator, `functionalPool`, Weight Style, and Weight Mass; it conditionally supports explicit FCC Reference mappings, nominal Size/Rating, Material, Drop-Shot Shape, Nail/Neko Retention Form, Quantity, and optional descriptive metadata. Missing required structure is invalid; allowed explicit Unknown values remain valid User Knowledge; non-applicable characteristics are omitted; known Mass must be finite, positive, and use an approved mass unit; controlled Standard values must belong to their applicable vocabulary; descriptive/commercial metadata does not establish canonical identity or functional equivalence. Structurally valid ownership and automated-match eligibility remain distinct: unmapped, Custom, or partially Unknown Weight records may remain legitimate owned User Knowledge but cannot automatically satisfy requirements their explicit mapping or known hard family attributes cannot establish. Bottom Bouncer remains outside the ordinary standalone Weight Style contract and requires its own applicable My Tackle treatment before GATE-007 closes where automated availability matching requires it. Exact duplicate scoring, normalized-mass tolerance mechanics, Merge/Split UX, surviving-record choice, field names, measurement utilities, dependent-reference reconciliation, and serialization mechanics remain revision allowed.

**Representative WEIGHT-1F record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    tackleItemId: "mt-weight-0008",
    schemaVersion: 1,
    recordRevision: 3,
    createdAt: "2026-09-06T15:30:00-05:00",
    updatedAt: "2026-09-06T15:45:00-05:00",

    tackleItemFamily: "weight",
    tackleInventoryKind: "functionalPool",

    // Explicit user-confirmed canonical mapping.
    fccReferenceMappings: [
        {
            referenceDomain: "tackle",
            referenceId: "drop-shot-weight"
        }
    ],

    weightStyle: {
        valueType: "standard",
        value: "drop-shot-weight"
    },

    weightMass: {
        valueStatus: "known",
        amount: 0.375,
        unit: "oz"
    },

    weightMaterial: {
        valueType: "standard",
        value: "tungsten"
    },

    weightDropShotShape: {
        valueType: "standard",
        value: "teardrop"
    },

    // weightNominalDesignation omitted: no independent nominal rating applies.
    // Nail/Neko retention form omitted: non-applicable to this Style.

    ownedQuantity: 4,

    descriptiveMetadata: {
        brand: "VMC",
        manufacturer: null,
        productName: null,
        modelNumber: null,
        notes: null
    }
}
```

**Weight item-family checkpoint status: COMPLETE / APPROVED WITH REVISION ALLOWED.** WEIGHT-1A through WEIGHT-1F settle the Version 1 ordinary standalone Weight semantic contract required for authoritative ownership, current-availability matching, Rig buildability, and Recommendation executability. The previously recorded Hook/Weight visual-recognition UX requirement remains deferred to `V1-DESIGN-AUDIT.md` / UX-010 and does not block this family-contract closeout. Bottom Bouncer remains a distinct canonical component outside this ordinary Weight-family checkpoint and must receive its applicable My Tackle treatment separately before GATE-007 closes if needed for automated availability matching.

## GATE-007 Lure/Bait Production Contract Checkpoint

- **LURE-1A — Lure/Bait Ownership Behavior + Core Record Shape: APPROVED / revision allowed.** Version 1 normally represents owned Lure/Bait as My Tackle `functionalPool` records, including when the current quantity is one. Quantity therefore does not determine record identity or force a later `physicalItem` -> `functionalPool` conversion. Additional owned items that are functionally equivalent under the applicable Lure/Bait family attributes may increase the same pool quantity after normal duplicate/merge confirmation. A known fishing-relevant difference creates or preserves a separate functional pool. `physicalItem` remains supported as an exception when a specific lure must be independently distinguished because of user intent or fishing-relevant characteristics that should not be pooled. Later modification of only part of a pool uses explicit Split semantics rather than mutating the whole pool or silently changing inventory kind. Canonical Lure/Bait identity is represented through the existing typed FCC Reference Knowledge mapping rather than duplicated in a second standardized My Tackle lure-type field. An owned Lure/Bait record may remain unmapped under MT-1C, but automated canonical Rig/Recommendation satisfaction requires an explicit valid `lure-bait` mapping. Quantity is optional for functional pools and exact stock maintenance must not be required for Recommendation executability. Exact production field names and UI mechanics remain revision allowed.

**Representative LURE-1A record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    tackleItemId: "mt-lure-bait-0001",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-06T16:20:00-05:00",
    updatedAt: "2026-09-06T16:20:00-05:00",

    tackleItemFamily: "lureBait",
    tackleInventoryKind: "functionalPool",

    fccReferenceMappings: [
        { referenceDomain: "lure-bait", referenceId: "inline-spinner" }
    ],

    lureBaitVariant: {
        // Family-specific attributes are settled by later LURE checkpoints.
    },

    ownedQuantity: 1
}
```

- **LURE-1B — Size / Length Applicability: APPROVED / revision allowed.** Physical length is not a universal Lure/Bait attribute. It is required/supported only where a stable physical length is a normal fishing-relevant selector for that canonical identity. Version 1 treats measured length as a primary applicable attribute for **Stick Worm, Craw, Creature Bait, Paddle-tail Swimbait, Tube, and Jerkbait**; a known fishing-relevant size difference may therefore distinguish functional pools for those identities. **Crankbait** supports fishing-relevant measured length when known but does not require it merely to establish ownership or broad canonical availability. **Spinnerbait** and **Inline Spinner** normally omit overall physical length because weight/blade or other family characteristics are more decision-relevant. **Spoon** length remains conditional pending the later Weight/Profile decisions rather than being prematurely required or prohibited. **Minnow** uses a categorical Version 1 size-class model — **Small / Medium / Large / Unknown** — instead of requiring exact physical measurement; exact numeric boundaries remain deferred until Recommendation evidence demonstrates a need. **Nightcrawler** and **Cricket** require no Version 1 size attribute; presence/availability is sufficient, with optional quantity handled independently. Where measured length applies, a known value uses one finite positive authoritative amount plus an explicit `in` or `cm` unit; alternate-system display and normalized comparison are derived non-destructively. Explicit Unknown remains valid where length is applicable but unknown, while non-applicable length is omitted. Manufacturer/model size notation such as spinner numbers or commercial model sizes must not be coerced into physical length unless it actually expresses a physical measurement. Exact field names, selector ordering, Minnow class labels/thresholds, Spoon applicability, and later Recommendation-specific preferred ranges remain revision allowed.

**Representative LURE-1B record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    tackleItemId: "mt-lure-bait-0002",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-06T16:42:00-05:00",
    updatedAt: "2026-09-06T16:42:00-05:00",

    tackleItemFamily: "lureBait",
    tackleInventoryKind: "functionalPool",

    fccReferenceMappings: [
        { referenceDomain: "lure-bait", referenceId: "stick-worm" }
    ],

    lureBaitVariant: {
        length: {
            valueStatus: "known",
            amount: 5,
            unit: "in"
        }
    },

    ownedQuantity: 8
}
```

- **LURE-1C — Weight / Mass Applicability: APPROVED / revision allowed.** Intrinsic lure/bait mass is not a universal Lure/Bait attribute and is included only where it represents useful fishing knowledge rather than merely commercial/package specification. Version 1 does **not** include intrinsic mass as a fishing-relevant attribute for **Stick Worm, Craw, Creature Bait, Paddle-tail Swimbait, or Tube**; for these soft-plastic identities, length/profile and the separately modeled Rig/Tackle configuration own the useful fishing decisions, and intrinsic plastic mass does not participate in functional-pool identity, Recommendation matching, or pool splitting. Any future product-oriented need for soft-plastic package/intrinsic mass would be descriptive/commercial metadata unless a later demonstrated fishing feature explicitly revises this contract. **Minnow, Nightcrawler, and Cricket** likewise omit intrinsic mass in Version 1. **Spinnerbait, Inline Spinner, and Spoon** treat intrinsic lure mass as a primary fishing-relevant characteristic because lure weight is a normal angler selection dimension for those identities. **Crankbait and Jerkbait** support intrinsic lure mass as fishing-relevant when known, but Unknown is valid and exact mass is not required merely to establish ownership or broad canonical availability. Known applicable lure mass reuses the approved physical-mass semantics from HOOK-1I/WEIGHT-1A: one finite positive authoritative amount plus explicit `oz` or `g`, with Measurement System display conversion and normalized comparison derived non-destructively; zero is invalid. Non-applicable mass is omitted. A known conflicting applicable mass may distinguish functional pools and may affect Recommendation matching where mass is an explicit hard or preferred requirement. Exact field names, common-value selectors, and later Recommendation-specific mass ranges remain revision allowed.

**Representative LURE-1C record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    tackleItemId: "mt-lure-bait-0003",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-06T16:55:00-05:00",
    updatedAt: "2026-09-06T16:55:00-05:00",

    tackleItemFamily: "lureBait",
    tackleInventoryKind: "functionalPool",

    fccReferenceMappings: [
        { referenceDomain: "lure-bait", referenceId: "inline-spinner" }
    ],

    lureBaitVariant: {
        lureMass: { valueStatus: "known", amount: 0.125, unit: "oz" }
    },

    ownedQuantity: 3
}
```

- **LURE-1D — Color / Pattern Fishing-Use Normalization: APPROVED / revision allowed.** Version 1 preserves the user's exact artificial-lure color/pattern description separately from FCC-normalized fishing-use characteristics. Exact commercial/free-text color or pattern is valid descriptive User Knowledge and does not itself establish Recommendation semantics, canonical identity, or functional equivalence. Normalization is intentionally small and is justified only where it improves Recommendation matching; FCC must not build or require a comprehensive commercial color catalog. The Version 1 artificial-lure normalization model uses three independent dimensions: **Visual Presentation**, **Forage Impression**, and **Reflective Flash**. **Visual Presentation** supports **Natural / Subtle, Bright / High-Visibility, Dark / Silhouette, High-Contrast, and Unknown**; multiple known Visual Presentation characteristics may apply to one lure because visibility, silhouette, and internal contrast are not mutually exclusive. **Forage Impression** supports **Baitfish, Crawfish, Sunfish / Perch, Generic / Non-specific, and Unknown**. **Reflective Flash** is represented separately as **Present, Absent, or Unknown** rather than being treated as a color family. These normalized characteristics may inform Recommendation Exact/Preferred or Usable matching when the Recommendation explicitly uses the dimension, but they are not required to establish ownership. Arbitrary commercial/free-text names must never be silently normalized; FCC may suggest an apparent mapping for explicit user confirmation, and Unknown normalization remains valid. Selecting an FCC-provided standard color/pattern option may carry its explicitly defined normalized semantics as part of that user selection, but free-text inference remains prohibited. Normalized color/pattern characteristics apply to artificial Lure/Bait identities in Version 1; **Minnow, Nightcrawler, and Cricket** do not use this artificial-lure color/pattern contract. Known conflicting normalized fishing-use characteristics may distinguish functional pools where the characteristic materially affects Recommendation matching, while descriptive color-name differences alone must not fragment otherwise equivalent pools. Exact production field names, FCC-provided common color/pattern quick-picks, suggestion mechanics, and later vocabulary expansion remain revision allowed.

**Representative LURE-1D record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    tackleItemId: "mt-lure-bait-0004",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-06T17:15:00-05:00",
    updatedAt: "2026-09-06T17:15:00-05:00",

    tackleItemFamily: "lureBait",
    tackleInventoryKind: "functionalPool",

    fccReferenceMappings: [
        { referenceDomain: "lure-bait", referenceId: "crankbait" }
    ],

    lureBaitVariant: {
        length: {
            valueStatus: "known",
            amount: 2.5,
            unit: "in"
        },

        lureMass: {
            valueStatus: "known",
            amount: 0.375,
            unit: "oz"
        },

        exactColorPattern: "Firetiger",

        visualPresentation: [
            "bright-high-visibility",
            "high-contrast"
        ],

        forageImpression: "sunfish-perch",
        reflectiveFlash: "present"
    },

    ownedQuantity: 2
}
```

- **LURE-1E — Depth / Running Behavior Applicability: APPROVED / revision allowed.** Version 1 persists intrinsic running-depth behavior only where the owned lure itself has a meaningful designed/rated running-depth characteristic rather than merely being capable of being fished at different depths. **Crankbait** and **Jerkbait** support a conditional **Nominal Running Depth** characteristic plus a separate **Buoyancy Behavior** characteristic. Other current Version 1 Lure/Bait identities — **Stick Worm, Craw, Creature Bait, Paddle-tail Swimbait, Tube, Spinnerbait, Inline Spinner, Spoon, Minnow, Nightcrawler, and Cricket** — do not receive a persistent running-depth attribute because their fishing depth is primarily determined by Rig configuration, added weight, sink time, retrieve, presentation, or Technique rather than a single intrinsic designed running range. Crankbait running depth remains conditional rather than universal: a crankbait with a defined diving/running range may retain that range, while a sinking/lipless or otherwise user-controlled-depth crankbait with no fixed designed range omits the attribute rather than inventing one. Where Nominal Running Depth applies, Known data uses a positive single depth or minimum/maximum range plus explicit `ft` or `m`; Measurement System display conversion and normalized comparison are derived non-destructively. If the characteristic is applicable but the exact rating is unknown, explicit Unknown is valid; if no fixed designed running range applies, the characteristic is omitted. Nominal running depth is a rated/design fishing specification, not a guarantee of actual achieved depth under every line, cast, trolling, rod-position, or retrieve configuration. **Buoyancy Behavior** is independent of running depth and uses the bounded Version 1 Standard values **Floating, Suspending, Sinking, or Unknown** for applicable Crankbait/Jerkbait records. FCC must not infer either running depth or buoyancy silently from product/commercial names. Known conflicting applicable running-depth or buoyancy characteristics may distinguish functional pools and may affect Recommendation matching where the applicable decision uses them. A later demonstrated need for **sink rate** would be a separate characteristic and must not be overloaded into Nominal Running Depth. Exact production field names, single-value versus equal-bound serialization, range comparison semantics, quick-pick presentation, and later Recommendation-specific preferred depth ranges remain revision allowed.

**Representative LURE-1E record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    tackleItemId: "mt-lure-bait-0005",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-06T17:30:00-05:00",
    updatedAt: "2026-09-06T17:30:00-05:00",

    tackleItemFamily: "lureBait",
    tackleInventoryKind: "functionalPool",

    fccReferenceMappings: [
        { referenceDomain: "lure-bait", referenceId: "crankbait" }
    ],

    lureBaitVariant: {
        length: {
            valueStatus: "known",
            amount: 2.5,
            unit: "in"
        },

        lureMass: {
            valueStatus: "known",
            amount: 0.375,
            unit: "oz"
        },

        exactColorPattern: "Firetiger",
        visualPresentation: [
            "bright-high-visibility",
            "high-contrast"
        ],
        forageImpression: "sunfish-perch",
        reflectiveFlash: "present",

        // Working candidate field/object names.
        nominalRunningDepth: {
            valueStatus: "known",
            minimum: 4,
            maximum: 8,
            unit: "ft"
        },

        buoyancyBehavior: {
            valueType: "standard",
            value: "floating"
        }
    },

    ownedQuantity: 1
}
```

- **LURE-1F — Action / Movement Applicability + Normalization Boundary: APPROVED / revision allowed.** Version 1 does **not** create one universal normalized Lure/Bait `Action`, `Movement`, or `Action Intensity` characteristic. Angler-imposed presentation behavior remains owned by the canonical Technique domain and Recommendation Decision Knowledge rather than being duplicated into My Tackle Lure/Bait variants. Baseline intrinsic lure behavior that is inherent in the canonical Lure/Bait identity likewise does not require a redundant owned-item field merely to restate that a Paddle-tail Swimbait kicks, an Inline Spinner spins, a Spoon wobbles/flutters, or a Crankbait wobbles. Generic cross-family labels such as **Subtle / Moderate / Aggressive** are rejected for Version 1 because they conflate distinct physical effects including wobble width, vibration, water displacement, appendage activity, blade thump, dart/glide response, and similar characteristics. Family-specific intrinsic-action characteristics may be introduced later only when demonstrated Recommendation value shows that two owned variants of the same canonical Lure/Bait must be distinguished for automated matching; examples may include Crankbait wobble character, Craw/Creature appendage activity, Spinnerbait blade/vibration characteristics, Inline Spinner blade characteristics, Spoon flutter/wobble profile, or Jerkbait dart/glide response. Such future characteristics must remain bounded to the applicable Lure/Bait identity/family rather than creating a universal action taxonomy. Free-text commercial/action descriptions may be preserved as descriptive User Knowledge but do not establish Recommendation semantics, canonical identity, functional equivalence, or automated match quality. FCC must not infer family-specific action semantics silently from product names, marketing text, or descriptive notes. Exact future family-specific vocabularies, applicability rules, and Recommendation thresholds remain revision allowed and require separate demonstrated need before implementation.

**Representative LURE-1F record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    tackleItemId: "mt-lure-bait-0006",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-06T17:40:00-05:00",
    updatedAt: "2026-09-06T17:40:00-05:00",

    tackleItemFamily: "lureBait",
    tackleInventoryKind: "functionalPool",

    fccReferenceMappings: [
        { referenceDomain: "lure-bait", referenceId: "crankbait" }
    ],

    lureBaitVariant: {
        length: {
            valueStatus: "known",
            amount: 2.5,
            unit: "in"
        },

        lureMass: {
            valueStatus: "known",
            amount: 0.375,
            unit: "oz"
        },

        exactColorPattern: "Firetiger",
        visualPresentation: [
            "bright-high-visibility",
            "high-contrast"
        ],
        forageImpression: "sunfish-perch",
        reflectiveFlash: "present",

        nominalRunningDepth: {
            valueStatus: "known",
            minimum: 4,
            maximum: 8,
            unit: "ft"
        },

        buoyancyBehavior: {
            valueType: "standard",
            value: "floating"
        }

        // No universal lureAction/actionIntensity field.
        // Any future action characteristic must be family-specific
        // and justified by demonstrated Recommendation value.
    },

    ownedQuantity: 1,

    descriptiveMetadata: {
        brand: null,
        manufacturer: null,
        productName: null,
        modelNumber: null,
        notes: "Wide wobble crankbait"
    }
}
```

- **LURE-1G — Functional-Pool Identity + Duplicate/Merge/Split + Low-Friction Authoring + Final Validation Boundary: APPROVED / revision allowed.** Version 1 Lure/Bait ownership normally uses `functionalPool`, with `physicalItem` retained as the explicit exception established by LURE-1A when one particular lure must remain independently distinguished. There is no universal fixed pool key such as Lure Type + Size + Weight + Color + Depth; functional identity is derived from the explicit canonical Lure/Bait mapping plus all applicable sufficiently known fishing-relevant characteristics defined by LURE-1B through LURE-1F for that identity. Known conflicting fishing-relevant values preserve separate pools even when the records can satisfy the same broad canonical requirement. Unknown is never a wildcard and does not prove equality; Custom/free-text/descriptive values do not silently gain Standard or normalized semantics. Exact commercial color/pattern text is retained for identification but does not by itself fragment otherwise functionally equivalent pools; user-confirmed normalized fishing-use characteristics control Recommendation-facing color semantics. Duplicate detection is distinct from authoritative Merge: Add/Import may surface strong or possible duplicate candidates, but Version 1 never silently merges ownership. Confirmed Merge requires compatible/resolved canonical mappings, preserves known fishing-relevant and descriptive information without invention or silent discard, sums known quantities, and leaves quantity Unknown if any contributing quantity is Unknown unless the user explicitly supplies a valid total. Whole-pool Edit is distinct from explicit subset Split. Split retains one original stable identity and creates additional stable identities as needed; a newly distinguished single lure may remain a one-item `functionalPool` or become `physicalItem` when the user intends to track that particular lure independently. A `physicalItem` returns to pooling only through explicit user action. Normal authoring is identity-sensitive and progressive-disclosure: ask only the primary applicable characteristic(s), artificial-lure Color/Pattern where useful, and optional Quantity, with secondary characteristics exposed as needed. Common-item entry should preserve the existing roughly 15–30 second low-friction target, and normalization should normally come from FCC quick-picks or explicit confirmation rather than forcing manual semantic classification. **Spoon physical length is omitted from the Version 1 fishing-relevant contract**; demonstrated Recommendation need is required before adding it later. **Natural-bait state such as Live / Preserved / Frozen / Dead is also not added in Version 1** until demonstrated Recommendation value requires a bounded characteristic. The completed Version 1 Lure/Bait validation boundary requires shared authoritative My Tackle identity/version/lifecycle semantics, the Lure/Bait family discriminator, a permitted inventory kind, and family-valid applicable attributes; it conditionally supports explicit `lure-bait` FCC Reference mapping, measured Length, Minnow Size Class, Lure Mass, exact Color/Pattern plus normalized Visual Presentation / Forage Impression / Reflective Flash, Nominal Running Depth, Buoyancy Behavior, Quantity, and optional descriptive/commercial metadata according to the approved applicability rules. Non-applicable attributes are omitted. Structurally valid unmapped or partially Unknown ownership remains valid User Knowledge but cannot automatically satisfy canonical or hard Recommendation requirements that the missing mapping/attribute cannot establish. No universal Action/Movement field is permitted. Exact field names, pool-signature/scoring mechanics, tolerance rules, Merge/Split UX, quick-pick content, and serialization details remain revision allowed.

**Representative LURE-1G record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    tackleItemId: "mt-lure-bait-0007",
    schemaVersion: 1,
    recordRevision: 2,
    createdAt: "2026-09-06T17:50:00-05:00",
    updatedAt: "2026-09-06T18:00:00-05:00",

    tackleItemFamily: "lureBait",
    tackleInventoryKind: "functionalPool",

    fccReferenceMappings: [
        { referenceDomain: "lure-bait", referenceId: "stick-worm" }
    ],

    lureBaitVariant: {
        length: {
            valueStatus: "known",
            amount: 5,
            unit: "in"
        },

        exactColorPattern: "Green Pumpkin",
        visualPresentation: ["natural-subtle"],
        forageImpression: "generic-non-specific",
        reflectiveFlash: "absent"
    },

    ownedQuantity: 12,

    descriptiveMetadata: {
        brand: null,
        manufacturer: null,
        productName: null,
        modelNumber: null,
        notes: null
    }
}
```

**Lure/Bait item-family checkpoint status: COMPLETE / APPROVED WITH REVISION ALLOWED.** LURE-1A through LURE-1G settle the Version 1 Lure/Bait semantic contract required for authoritative ownership, current-availability matching, Rig/Recommendation executability, and low-friction authoring. Exact production field names and implementation mechanics remain refinement work.

## GATE-007 Rod/Reel Production Contract Checkpoint

- **RODREEL-1A — Family Separation + Physical Ownership + Core Record Boundary: APPROVED / revision allowed.** Version 1 uses separate `rod` and `reel` My Tackle family contracts. Every owned Rod and Reel is an independently identified `physicalItem`; functionally identical specifications may establish derived compatibility for Recommendation or Fishing Setup purposes but never quantity pooling or automatic ownership merging. Rod/Reel records do not use `ownedQuantity`; owning multiple identical units requires multiple stable My Tackle records. A rod/reel pairing belongs to Fishing Setup and references the independently owned physical items rather than duplicating ownership, and removing or changing a pairing does not create, delete, or otherwise alter either ownership record. Factory rod/reel combos likewise remain one independently addressable Rod plus one independently addressable Reel rather than a third Combo ownership entity; commercial combo identity may remain descriptive if later useful. A Rod or Reel may exist without a Fishing Setup. Persistent Inventory Location and current availability remain separate from ownership and setup membership. Canonical FCC Reference mapping remains independent and optional for ownership under MT-1C/D; commercial identity, matching specifications, or setup pairing must not silently create canonical mapping. Exact Rod/Reel fishing-relevant attribute vocabularies, measurement serialization, setup compatibility algorithm, Fishing Setup schema, accidental-duplicate correction UX, and implementation field names remain for subsequent RODREEL checkpoints and are revision allowed.

**Representative RODREEL-1A Rod record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    tackleItemId: "mt-rod-0001",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-06T18:35:00-05:00",
    updatedAt: "2026-09-06T18:35:00-05:00",

    tackleItemFamily: "rod",
    tackleInventoryKind: "physicalItem",

    // No canonical mapping is assumed by RODREEL-1A.
    fccReferenceMappings: [],

    // Exact serialization/vocabularies remain later checkpoints.
    rodCharacteristics: {
        rodType: {
            valueType: "standard",
            value: "spinning"
        },
        length: {
            valueStatus: "known",
            amount: 7,
            unit: "ft"
        },
        power: {
            valueType: "standard",
            value: "medium"
        },
        action: {
            valueType: "standard",
            value: "fast"
        }
    },

    descriptiveMetadata: {
        brand: "Daiwa",
        manufacturer: null,
        productName: "Tatula XT",
        modelNumber: "TATULAXT702MFS",
        notes: null
    }

    // No ownedQuantity: this record represents one physical Rod.
}
```

**Representative RODREEL-1A Reel record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    tackleItemId: "mt-reel-0001",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-06T18:35:00-05:00",
    updatedAt: "2026-09-06T18:35:00-05:00",

    tackleItemFamily: "reel",
    tackleInventoryKind: "physicalItem",

    // No canonical mapping is assumed by RODREEL-1A.
    fccReferenceMappings: [],

    // Exact serialization/vocabularies remain later checkpoints.
    reelCharacteristics: {
        reelType: {
            valueType: "standard",
            value: "spinning"
        },
        sizeClass: {
            valueType: "standard",
            value: "3000"
        }
    },

    descriptiveMetadata: {
        brand: "Daiwa",
        manufacturer: null,
        productName: "Exceler LT",
        modelNumber: "EXELT3000D-C",
        notes: null
    }

    // No ownedQuantity: this record represents one physical Reel.
}
```

- **RODREEL-1B — Rod Fishing-Relevant Attribute Contract: APPROVED / revision allowed.** Version 1 Rod User Knowledge represents **Rod Type, Rod Length, Rod Power, and Rod Action** as independent fishing-relevant characteristics rather than one combined commercial description. Standard Rod Type values are **Spinning** and **Casting**, with Custom and Unknown supported under the established controlled-value semantics; **spincast remains a Reel distinction rather than a separate standard Rod Type**. Rod Length uses Known/Unknown physical-measurement semantics. A known length is one finite positive authoritative amount using `in` or `cm`; alternate-system display and normalized comparison are derived non-destructively. FCC may accept familiar feet-and-inches authoring/display, but authoritative comparison may normalize that value without storing `ft` as a separate production unit. Unknown length remains valid ownership. Standard Rod Power values are **Ultralight, Light, Medium-Light, Medium, Medium-Heavy, Heavy, and Extra-Heavy**. Standard Rod Action values are **Slow, Moderate, Moderate-Fast, Fast, and Extra-Fast**. Power and Action are nominal fishing classifications rather than guaranteed cross-manufacturer physical measurements; Standard equality means FCC understands the same nominal class, not that two blanks are physically identical. Custom and Unknown remain valid for long-tail or proprietary manufacturer terminology. These characteristics affect Recommendation or Fishing Setup matching only when the applicable decision explicitly defines the characteristic as required or preferred under CA-4; Unknown on an irrelevant dimension does not reduce usability and Unknown never silently qualifies as Exact/Preferred. Normal beginner-facing Add Rod authoring centers on Type + Length + Power + Action, with Unknown available rather than requiring commercial specifications; manufacturer/brand/product/model/notes remain optional descriptive metadata by default. Rod Line Rating and Rod Lure-Weight Rating are intentionally deferred to **RODREEL-1C** because current FCC Reel Setup behavior already demonstrates a separate equipment-validation need for rod line-rating knowledge. Selecting or matching Rod characteristics must not silently create canonical FCC Reference mapping. Exact production field names, UI ordering, feet/inches entry mechanics, normalization precision, later Recommendation ranges, and expanded vocabularies remain revision allowed. **RODREEL-1B supersedes the provisional RODREEL-1A representative length serialization; the RODREEL-1A `ft` example was explicitly pending this checkpoint.**

**Representative RODREEL-1B Rod record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    tackleItemId: "mt-rod-0002",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-06T18:55:00-05:00",
    updatedAt: "2026-09-06T18:55:00-05:00",

    tackleItemFamily: "rod",
    tackleInventoryKind: "physicalItem",

    // No canonical Rod mapping is assumed.
    fccReferenceMappings: [],

    rodCharacteristics: {
        rodType: {
            valueType: "standard",
            value: "spinning"
        },

        rodLength: {
            valueStatus: "known",
            amount: 84,
            unit: "in"
        },

        rodPower: {
            valueType: "standard",
            value: "medium"
        },

        rodAction: {
            valueType: "standard",
            value: "fast"
        }
    },

    descriptiveMetadata: {
        brand: "Daiwa",
        manufacturer: null,
        productName: "Tatula XT",
        modelNumber: "TATULAXT702MFS",
        notes: null
    }

    // No ownedQuantity: this record represents one physical Rod.
}
```

- **RODREEL-1C — Rod Line Rating + Lure-Weight Rating: APPROVED / revision allowed.** Version 1 supports **Rod Line Rating** and **Rod Lure-Weight Rating** as optional secondary fishing-relevant Rod characteristics rather than required core ownership fields. Normal Add Rod remains centered on Type + Length + Power + Action, while either rating may be captured progressively or just in time when equipment validation needs it. A known Rod Line Rating stores one finite positive minimum/maximum range with an explicit `lb` or `kg` unit; a known Rod Lure-Weight Rating stores one finite positive minimum/maximum range with an explicit `oz` or `g` unit. In both cases `minimum <= maximum`; alternate-system display and normalized comparison are derived non-destructively rather than rewriting the authoritative value. Omission means the optional rating has not been captured; explicit Unknown means the characteristic has been addressed but the value is not known. Neither omission nor Unknown proves compatibility, and neither silently creates incompatibility. Unsupported/proprietary manufacturer notation must not be silently converted into the normalized numeric ranges; it may remain descriptive until a demonstrated need justifies normalized support. Rod Line Rating may directly validate a selected line system when both values are known and comparable: inside the range is rating-compatible, outside is a rating conflict, and missing/Unknown/non-comparable data is unverified. Reel capacity remains an independent constraint. Rod Lure-Weight Rating represents the manufacturer's nominal casting-load envelope, not merely the intrinsic mass of the presented lure; FCC must not claim a pass by comparing only Lure/Bait intrinsic mass when the completed Rig adds meaningful casting mass through weights, Jigheads, weighted Hooks, or other components. Automatic lure-weight validation therefore requires a defensible total applicable casting load; until such a calculation is established, the rating remains valid User Knowledge without false automatic validation. Under CA-4 either rating may be required, preferred, or irrelevant for a particular compatibility/Recommendation decision; missing/Unknown data cannot qualify as Exact/Preferred when the rating matters. Ratings do not create canonical Reference mapping, and commercial identity must not silently populate authoritative rating values. Exact field names, unit/display formatting, unsupported notation handling, range comparison precision, and total-casting-load calculation remain revision allowed.

**Representative RODREEL-1C Rod record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    tackleItemId: "mt-rod-0003",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-06T19:15:00-05:00",
    updatedAt: "2026-09-06T19:15:00-05:00",

    tackleItemFamily: "rod",
    tackleInventoryKind: "physicalItem",

    fccReferenceMappings: [],

    rodCharacteristics: {
        rodType: { valueType: "standard", value: "spinning" },
        rodLength: { valueStatus: "known", amount: 84, unit: "in" },
        rodPower: { valueType: "standard", value: "medium" },
        rodAction: { valueType: "standard", value: "fast" },
        rodLineRating: { valueStatus: "known", minimum: 6, maximum: 12, unit: "lb" },
        rodLureWeightRating: { valueStatus: "known", minimum: 0.25, maximum: 0.625, unit: "oz" }
    },

    descriptiveMetadata: {
        brand: "Daiwa",
        manufacturer: null,
        productName: "Tatula XT",
        modelNumber: "TATULAXT702MFS",
        notes: null
    }

    // No ownedQuantity: this record represents one physical Rod.
}
```

- **RODREEL-1D — Reel Fishing-Relevant Attribute Contract: APPROVED / revision allowed.** Version 1 Reel User Knowledge uses **Reel Type** as a core normalized fishing-relevant characteristic with Standard values **Spinning, Spincast, and Baitcasting**, plus Custom and Unknown under the established controlled-value semantics. Reel Type may establish hard Fishing Setup or Recommendation compatibility where the applicable decision explicitly requires it, but pairing rules remain owned by the later Fishing Setup/compatibility contract rather than being embedded as hidden ownership semantics. **Reel Size / Class is intentionally not a closed FCC Standard vocabulary and is not a physical measurement.** Where useful, the user may enter the nominal manufacturer/user designation manually as literal text such as `2500`, `C3000`, `150`, `200`, or another legitimate designation. Known Size/Class preserves that entered/source label; explicit Unknown is valid when the characteristic applies but is not known; the field may be omitted where no meaningful independent designation applies or the user elects not to record it. FCC must not silently parse model numbers or manufacturer suffixes into Reel Size/Class, Gear Ratio, handedness, spool depth, or other normalized semantics. Measurement System conversion does not apply to nominal Size/Class. Version 1 does not present or maintain a universal reel-size list; UI may show non-authoritative common examples or suggestions for convenience, but those suggestions are not FCC Standard values and do not create normalized equivalence. A manual Size/Class label is Recommendation-readable identification/context User Knowledge, but **does not independently establish canonical mapping, cross-manufacturer functional equivalence, or Exact/Preferred canonical Recommendation matching** merely because the literal value resembles another reel's designation. A later demonstrated need for normalized Reel Size semantics would require a separate explicitly confirmed FCC characteristic rather than silently converting the literal label. Recommendation and setup decisions should prefer functional characteristics with defensible cross-product meaning, such as Reel Type and later-approved Reel Line Capacity, over manufacturer size numbers. Normal Add Reel authoring centers on Reel Type plus optional manually entered Size/Class, with manufacturer/brand/product/model/notes remaining optional descriptive metadata. **Reel Line Capacity is deferred specifically to RODREEL-1E** because current FCC Reel Setup behavior demonstrates its independent validation value; Gear Ratio/retrieve behavior remains a separate later Recommendation-value decision. Exact field names, literal-input validation, suggestion examples, UI wording, future normalized-size semantics if ever justified, and compatibility implementation remain revision allowed.

**Representative RODREEL-1D Reel record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    tackleItemId: "mt-reel-0002",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-06T19:30:00-05:00",
    updatedAt: "2026-09-06T19:30:00-05:00",

    tackleItemFamily: "reel",
    tackleInventoryKind: "physicalItem",

    // Canonical mapping remains independent and explicit.
    fccReferenceMappings: [],

    reelCharacteristics: {
        reelType: {
            valueType: "standard",
            value: "spinning"
        },

        // Literal nominal designation entered/confirmed by the user.
        // This is not a universal FCC Standard size class.
        reelSizeDesignation: {
            valueStatus: "known",
            label: "3000"
        }
    },

    descriptiveMetadata: {
        brand: null,
        manufacturer: null,
        productName: null,
        modelNumber: null,
        notes: null
    }

    // No ownedQuantity: this record represents one physical Reel.
}
```

- **RODREEL-1E — Reel Line Capacity Representation + Validation: APPROVED / revision allowed.** Version 1 supports **Reel Line Capacity** as optional secondary fishing-relevant User Knowledge represented by one or more explicitly confirmed capacity observations rather than a fabricated minimum/maximum line-rating range. Each known capacity entry pairs one line-size observation with one approximate spool-capacity length. The line-size observation uses either **breaking strength** or **physical diameter** as its explicit basis; FCC must not silently convert diameter to breaking strength because strength at a given diameter varies by line construction/product. A capacity entry may additionally state the line type or line types to which the source specification explicitly applies, including Monofilament, Fluorocarbon, Braid, or Unspecified. FCC must not silently transfer a Mono entry to Fluorocarbon/Braid or otherwise infer cross-line-type applicability. Known breaking-strength amounts use positive `lb` or `kg`; known diameter uses positive `mm` or `in`; known capacity length uses positive `yd` or `m`. Measurement System conversion/display is derived non-destructively and does not rewrite the source/user-confirmed authoritative values. The stored collection may be partial: one confirmed row such as `8 lb / 140 yd` is valid User Knowledge and does not claim that FCC stores the complete manufacturer capacity table. Omitted Line Capacity means the optional characteristic has not been captured; explicit Unknown means it has been addressed but cannot currently be determined. Neither state invalidates Reel ownership. A directly comparable confirmed capacity entry establishes that published/user-confirmed capacity guidance exists for that line configuration and may supply the approximate supported spool length. Missing a comparable row is **unverified**, not incompatible; Version 1 does not silently interpolate/extrapolate missing capacity entries or derive hard incompatibility from an incomplete table. Explicit Reel/line incompatibility requires separate applicable knowledge or a later-approved compatibility rule. FCC does not derive capacity from nominal Reel Size/Class, commercial model codes, product naming, or other indirect evidence. Reel Line Capacity remains progressive-disclosure / just-in-time knowledge rather than a required Add Reel field. Exact field names, line-type applicability representation, multi-entry authoring UI, measurement precision, duplicate-entry handling, and any future validated interpolation mechanics remain revision allowed.

**Representative RODREEL-1E Reel record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    tackleItemId: "mt-reel-0003",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-06T19:33:00-05:00",
    updatedAt: "2026-09-06T19:33:00-05:00",

    tackleItemFamily: "reel",
    tackleInventoryKind: "physicalItem",

    fccReferenceMappings: [],

    reelCharacteristics: {
        reelType: {
            valueType: "standard",
            value: "spinning"
        },

        // Literal nominal designation from RODREEL-1D.
        reelSizeDesignation: {
            valueStatus: "known",
            label: "3000"
        },

        // Working candidate serialization. The entries are confirmed
        // capacity observations, not one fabricated supported range.
        reelLineCapacity: {
            valueStatus: "known",
            entries: [
                {
                    appliesToLineTypes: ["monofilament"],
                    lineSize: {
                        basis: "breakingStrength",
                        amount: 8,
                        unit: "lb"
                    },
                    capacityLength: {
                        amount: 140,
                        unit: "yd"
                    }
                },
                {
                    appliesToLineTypes: ["braid"],
                    lineSize: {
                        basis: "breakingStrength",
                        amount: 15,
                        unit: "lb"
                    },
                    capacityLength: {
                        amount: 180,
                        unit: "yd"
                    }
                }
            ]
        }
    },

    descriptiveMetadata: {
        brand: null,
        manufacturer: null,
        productName: null,
        modelNumber: null,
        notes: null
    }

    // No ownedQuantity: this record represents one physical Reel.
}
```

The capacity values in the representative record are illustrative schema values, not asserted specifications for a named commercial Reel.

- **RODREEL-1F — Reel Gear Ratio + Retrieve Behavior Applicability: APPROVED / revision allowed.** Version 1 supports **Gear Ratio** and **Line Retrieve Per Handle Turn** as independent optional secondary fishing-relevant Reel characteristics. Gear Ratio stores one finite positive numeric ratio and displays conventionally as `x:1`; it does not use an FCC Standard/Custom speed-class vocabulary. For low-friction authoring, FCC should present a **small Reel-Type-specific set of common Gear Ratio quick picks plus Manual Entry and Unknown**. Quick picks are authoring conveniences only, do not form a closed FCC Standard vocabulary, and must store the exact selected ratio rather than rounding or normalizing nearby manufacturer values; the exact quick-pick contents/order remain revision allowed. **Line Retrieve Per Handle Turn** stores one finite positive nominal line-pickup amount using `in` or `cm`; alternate Measurement System display is derived non-destructively. The beginner-facing control uses a numeric amount text field plus a compact `in` / `cm` picker, while **per handle turn** is intrinsic FCC field semantics rather than user-entered text. FCC may display normalized compact output such as `26 in/turn` and may use recognition/help aliases such as **IPT**, inches per crank, retrieve per crank, or line pickup, but those labels do not create different stored semantics. FCC does not provide a fixed exact-value quick-pick list for Line Retrieve because published values vary materially by reel design/size; the user enters the actual confirmed amount. Omission means the optional characteristic has not been captured and explicit Unknown remains valid ownership. FCC must not calculate Retrieve from Gear Ratio or Gear Ratio from Retrieve. Neither characteristic is required for Add Reel, broad Reel ownership, Rod/Reel pairing, or canonical mapping. Either participates in CA-4 matching only when explicit Recommendation or compatibility knowledge declares it required or preferred; otherwise it is ignored. Where a decision specifically concerns line-recovery behavior and both values are known, Line Retrieve Per Handle Turn is the more direct specification rather than treating Gear Ratio as an automatic proxy. Exact field names, quick-pick values/order, numeric precision, UI placement, terminology/help copy, and later Recommendation thresholds remain revision allowed.

**Representative RODREEL-1F Reel record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    tackleItemId: "mt-reel-0004",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-06T19:45:00-05:00",
    updatedAt: "2026-09-06T19:45:00-05:00",

    tackleItemFamily: "reel",
    tackleInventoryKind: "physicalItem",

    fccReferenceMappings: [],

    reelCharacteristics: {
        reelType: {
            valueType: "standard",
            value: "spinning"
        },

        reelSizeDesignation: {
            valueStatus: "known",
            label: "3000"
        },

        reelLineCapacity: {
            valueStatus: "known",
            entries: [
                {
                    appliesToLineTypes: ["monofilament"],
                    lineSize: {
                        basis: "breakingStrength",
                        amount: 8,
                        unit: "lb"
                    },
                    capacityLength: {
                        amount: 140,
                        unit: "yd"
                    }
                }
            ]
        },

        // Optional secondary fishing-relevant specification.
        reelGearRatio: {
            valueStatus: "known",
            ratio: 6.2
        },

        // "Per handle turn" is intrinsic to this field's semantics.
        reelLineRetrievePerHandleTurn: {
            valueStatus: "known",
            amount: 26,
            unit: "in"
        }
    },

    descriptiveMetadata: {
        brand: null,
        manufacturer: null,
        productName: null,
        modelNumber: null,
        notes: null
    }

    // No ownedQuantity: this record represents one physical Reel.
}
```

The Gear Ratio, Line Capacity, and Line Retrieve values in the representative record are illustrative schema values, not asserted specifications for a named commercial Reel.

- **RODREEL-1G — Rod/Reel Final Validation + Secondary-Spec Closure: APPROVED / revision allowed.** Version 1 closes the Rod/Reel family contract with separate independently owned `physicalItem` Rod and Reel records and no quantity pooling. A structurally valid Rod requires the shared authoritative My Tackle envelope plus Rod family/inventory-kind semantics and the four applicable core Rod characteristics: Rod Type, Rod Length, Rod Power, and Rod Action. Rod Line Rating and Rod Lure-Weight Rating remain optional secondary fishing-relevant User Knowledge. A structurally valid Reel requires the shared envelope plus Reel family/inventory-kind semantics and Reel Type. Literal Reel Size/Class, Reel Line Capacity, Gear Ratio, and Line Retrieve Per Handle Turn remain optional secondary User Knowledge; RODREEL-1D supersedes earlier design-review shorthand by making Size/Class optional rather than a minimum structural requirement. Omission of an optional characteristic, or an approved explicit Unknown state where applicable, does not invalidate ownership. Structural validity is distinct from automated-match eligibility: unmapped or partially known/unknown records remain legitimate ownership but cannot establish canonical or hard Recommendation/compatibility requirements that the missing mapping or fishing-relevant information cannot prove. Normal Add Rod centers on Type + Length + Power + Action; normal Add Reel centers on Type + optional manually entered Size/Class, with ratings/capacity/gear/retrieve captured progressively or just in time. Optional FCC Reference mappings remain independent and are required only where canonical automated satisfaction needs them. Matching Rod/Reel specifications may support compatibility or accidental-duplicate recognition but never auto-merge physical ownership; accidental duplicate records require explicit correction. Version 1 adds no further normalized Reel characteristics such as Maximum Drag, bearing count, reel mass, body/spool dimensions, handle configuration, or construction materials without demonstrated Recommendation or Fishing Setup value. Exact field names, input ordering, validation messaging, accidental-duplicate UX, and future demonstrated secondary characteristics remain revision allowed.

**Representative RODREEL-1G final Rod record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    tackleItemId: "mt-rod-0004",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-06T19:55:00-05:00",
    updatedAt: "2026-09-06T19:55:00-05:00",

    tackleItemFamily: "rod",
    tackleInventoryKind: "physicalItem",

    // Mapping remains independent and explicit.
    fccReferenceMappings: [],

    rodCharacteristics: {
        // Required Rod-family characteristics.
        rodType: {
            valueType: "standard",
            value: "spinning"
        },

        rodLength: {
            valueStatus: "known",
            amount: 84,
            unit: "in"
        },

        rodPower: {
            valueType: "standard",
            value: "medium"
        },

        rodAction: {
            valueType: "standard",
            value: "fast"
        },

        // Optional secondary characteristics.
        rodLineRating: {
            valueStatus: "known",
            minimum: 6,
            maximum: 12,
            unit: "lb"
        },

        rodLureWeightRating: {
            valueStatus: "known",
            minimum: 0.25,
            maximum: 0.625,
            unit: "oz"
        }
    },

    descriptiveMetadata: {
        brand: null,
        manufacturer: null,
        productName: null,
        modelNumber: null,
        notes: null
    }

    // No ownedQuantity: this record represents one physical Rod.
}
```

**Representative RODREEL-1G final Reel record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    tackleItemId: "mt-reel-0005",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-06T19:55:00-05:00",
    updatedAt: "2026-09-06T19:55:00-05:00",

    tackleItemFamily: "reel",
    tackleInventoryKind: "physicalItem",

    // Mapping remains independent and explicit.
    fccReferenceMappings: [],

    reelCharacteristics: {
        // Required Reel-family characteristic.
        reelType: {
            valueType: "standard",
            value: "spinning"
        },

        // All following characteristics are optional.
        reelSizeDesignation: {
            valueStatus: "known",
            label: "3000"
        },

        reelLineCapacity: {
            valueStatus: "known",
            entries: [
                {
                    appliesToLineTypes: ["monofilament"],
                    lineSize: {
                        basis: "breakingStrength",
                        amount: 8,
                        unit: "lb"
                    },
                    capacityLength: {
                        amount: 140,
                        unit: "yd"
                    }
                }
            ]
        },

        reelGearRatio: {
            valueStatus: "known",
            ratio: 6.2
        },

        reelLineRetrievePerHandleTurn: {
            valueStatus: "known",
            amount: 26,
            unit: "in"
        }
    },

    descriptiveMetadata: {
        brand: null,
        manufacturer: null,
        productName: null,
        modelNumber: null,
        notes: null
    }

    // No ownedQuantity: this record represents one physical Reel.
}
```

The numeric values in the representative records are illustrative schema values, not asserted specifications for named commercial equipment.

**Rod/Reel item-family checkpoint status: COMPLETE / APPROVED WITH REVISION ALLOWED.** RODREEL-1A through RODREEL-1G settle the Version 1 Rod/Reel semantic contract required for authoritative ownership, current-availability matching, and later Fishing Setup / Recommendation compatibility work. No additional normalized Rod/Reel specification is added without demonstrated value.

**Rod/Reel item-family closeout:** the Rod/Reel family checkpoint is complete. The next GATE-007 production domain is Fishing Setup. Preserve RODREEL-1A through RODREEL-1G unless later findings demonstrate a specific revision need.

## GATE-007 Fishing Setup Production Contract Checkpoint

- **SETUP-1A — Fishing Setup Core Record + Stable Rod/Reel References: APPROVED / revision allowed.** Version 1 Fishing Setup is an independently persisted profile-owned User Knowledge record with stable Setup identity, record-level schema/revision/lifecycle metadata, a required user-facing Setup name, exactly one stable reference to an independently owned Rod My Tackle record, and exactly one stable reference to an independently owned Reel My Tackle record, plus optional notes. Setup names need not be unique and are descriptive rather than compatibility identity. Fishing Setup does not own, duplicate, snapshot, or alter Rod/Reel ownership or fishing-relevant specifications; current My Tackle records remain authoritative and Setup-derived compatibility is recalculated from current referenced knowledge. New authoritative Setups must reference active same-profile My Tackle records of the correct Rod/Reel families; intentionally partial persisted Setups are not supported because unpaired Rod/Reel ownership already exists independently in My Tackle. A later deletion of referenced ownership does not cascade-delete or silently rewrite the Setup; the unresolved stable reference is preserved and the Setup becomes broken/incomplete until explicitly repaired or deleted, and it cannot qualify as a complete usable Setup while broken. Deleting a Setup never deletes its referenced equipment. A Rod or Reel may participate in multiple Fishing Setups because Setup membership is a reusable relationship, not exclusive ownership allocation. Temporary/non-owned current-availability entries cannot become persistent Setup references. Inventory Location, current availability, line-system configuration, normalized purpose/species labels, compatibility evaluation, and exact production field names/UI remain separate later decisions or revision work.

**Representative SETUP-1A record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    fishingSetupId: "setup-0001",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-06T21:26:00-05:00",
    updatedAt: "2026-09-06T21:26:00-05:00",

    // Required user-facing descriptive label; not required to be unique.
    setupName: "Bass Spinning Setup",

    // Stable references to independently owned same-profile My Tackle records.
    rodTackleItemId: "mt-rod-0004",
    reelTackleItemId: "mt-reel-0005",

    notes: null

    // No copied Rod/Reel specifications or ownership data.
    // No current-availability state or Inventory Location membership.
}
```

- **SETUP-1B — Rod/Reel Pairing Compatibility: APPROVED / revision allowed.** Version 1 derives Rod/Reel pairing compatibility from the current authoritative Rod Type and Reel Type of the two SETUP-1A references rather than persisting a frozen compatibility fact on the Fishing Setup. Standard type-compatible pairs are **Spinning Rod + Spinning Reel**, **Casting Rod + Spincast Reel**, and **Casting Rod + Baitcasting Reel**. The other combinations of Standard Rod/Reel Types are **Incompatible**. If either applicable Rod Type or Reel Type is Custom or Unknown, the pairing result is **Unverified** rather than silently Compatible or Incompatible; Custom/Unknown do not gain Standard semantics. An unresolved/deleted Rod or Reel reference remains a broken/incomplete Setup under SETUP-1A and is not treated as an Unverified compatibility result. Compatible Setups save normally. Unverified Setups may be saved with visible unverified status. A known Incompatible pairing receives a clear warning and requires explicit **Save Anyway** confirmation; the authoritative Setup may preserve the user's real configuration but cannot qualify as a type-compatible usable Setup for automated Recommendation/current-availability purposes while the incompatibility remains. FCC must not infer, repair, or override pairing compatibility from brand, manufacturer, product/model data, Reel Size/Class, Gear Ratio, Line Retrieve, notes, or other descriptive/secondary specifications. Rod Length/Power/Action, Rod ratings, Reel Size/Class, Reel Line Capacity, Gear Ratio, and Line Retrieve do not participate in the base type-pairing matrix. Line-system, capacity/rating, spooled-line, and broader Recommendation suitability validation remain separate later Setup decisions. Compatibility status is derived/non-authoritative and may be recalculated whenever referenced equipment knowledge changes. Exact derived-status names, warning/override UX, caching mechanics, and production field names remain revision allowed.

**Representative SETUP-1B persisted record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    fishingSetupId: "setup-0002",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-06T21:40:00-05:00",
    updatedAt: "2026-09-06T21:40:00-05:00",

    setupName: "Bass Casting Setup",

    // Assume these current referenced records resolve to:
    // Rod Type = Casting; Reel Type = Baitcasting.
    rodTackleItemId: "mt-rod-0007",
    reelTackleItemId: "mt-reel-0008",

    notes: null

    // Pairing compatibility is intentionally not persisted.
}
```

**Representative derived SETUP-1B compatibility view — non-authoritative:**

```js
{
    fishingSetupId: "setup-0002",
    pairingCompatibility: {
        status: "compatible",
        basis: "rod-reel-type"
    }
}
```

- **SETUP-1C — Fishing Setup Line-System Configuration + Validation Boundary: APPROVED / revision allowed.** Version 1 Fishing Setup may optionally persist its saved/configured main-line configuration as durable Setup configuration rather than Reel ownership or current-availability state. **SETUP-1D refines the original “actually spooled on the referenced Reel” wording:** because one physical Reel may participate in multiple saved Setups, this persistent line configuration is not by itself an unconditional global assertion of that Reel's instantaneous physical spool state. When the line-system object is present, it explicitly represents Line Type using Standard **Monofilament / Fluorocarbon / Braid** plus Custom / Unknown semantics. It may additionally represent positive **Breaking Strength** in `lb` or `kg` and optional positive physical **Diameter** in `mm` or `in`; Measurement System display conversion is derived non-destructively. Breaking Strength and Diameter are independent facts and FCC must not derive one from the other. Missing or Unknown optional line knowledge does not invalidate the Setup. Version 1 does not require tracking the amount of line currently remaining/on-spool, does not persist backing configuration as part of the core Setup line record, and does not persist a leader as Setup identity; backing remains procedural Reel Setup guidance, while leader requirements remain owned by applicable Rig/Tackle knowledge unless later demonstrated functionality requires persistent Setup configuration. Rod Line Rating validation is derived only when main-line Breaking Strength and the referenced Rod's rating are directly comparable: an in-range value is **Compatible**, an out-of-range value is a **Conflict**, and missing/Unknown/non-comparable knowledge is **Unverified**. A known Rod Line Rating conflict receives a clear warning and requires explicit **Save Anyway** if the user chooses to preserve the truthful real-world configuration; the conflict does not erase User Knowledge. Reel Line Capacity evaluation uses only directly comparable confirmed RODREEL-1E observations and may report that applicable capacity guidance exists, including the approximate supported length from the matching observation. Absence of a comparable capacity row is **Unverified**, not Incompatible; FCC does not interpolate/extrapolate missing observations, transfer Mono/Fluoro/Braid applicability, or convert diameter to breaking strength. **Spincast Reel + Braid** is not a universal incompatibility: without explicit applicable knowledge for the exact Reel it remains equipment-specific **Unverified / verification required**. Derived line-system validation is non-authoritative and recalculated from current Setup and referenced Rod/Reel knowledge; it is not persisted as frozen compatibility state. FCC must not infer installed line from Reel Size/Class, Rod Power, brand/model, target fish, prior Reel Setup guidance, Recommendation history, or other indirect evidence. Exact field names, UI controls, display terminology, warning mechanics, comparison tolerance, and later demonstrated backing/leader persistence remain revision allowed.

**Representative SETUP-1C persisted record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    fishingSetupId: "setup-0003",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-06T22:00:00-05:00",
    updatedAt: "2026-09-06T22:00:00-05:00",

    setupName: "Bass Spinning Setup",

    rodTackleItemId: "mt-rod-0004",
    reelTackleItemId: "mt-reel-0005",

    // Optional durable saved/configured main-line configuration for this Setup.
    // Working candidate name refined by SETUP-1D.
    configuredMainLine: {
        lineType: {
            valueType: "standard",
            value: "braid"
        },

        breakingStrength: {
            valueStatus: "known",
            amount: 15,
            unit: "lb"
        },

        diameter: {
            valueStatus: "known",
            amount: 0.20,
            unit: "mm"
        }
    },

    notes: null

    // No persisted pairing or line-system validation result.
    // No persistent backing, leader, or tracked remaining spool length in Version 1.
}
```

**Representative derived SETUP-1C line-system view — non-authoritative:**

```js
{
    fishingSetupId: "setup-0003",
    lineSystemValidation: {
        rodLineRating: { status: "compatible" },
        reelLineCapacity: {
            status: "guidanceAvailable",
            approximateCapacity: { amount: 180, unit: "yd" }
        },
        reelLineTypeSupport: { status: "unverified" }
    }
}
```

The representative line values are illustrative schema values and are not asserted specifications for named commercial equipment.

- **SETUP-1D — Fishing Setup Recommendation / Current-Availability Usability + Final Validation Boundary: APPROVED / revision allowed.** Version 1 refines SETUP-1C so persistent main-line data represents the **saved/configured main-line configuration for that Fishing Setup**, not an unconditional global assertion of the referenced physical Reel's current spool state. The current working field-name candidate is `configuredMainLine`; exact naming remains revision allowed. When a Fishing Setup is selected and confirmed inside **What I Have With Me Today**, that saved line configuration may participate as the current configuration for the selected Setup. A selected Setup contributes its currently resolvable active owned Rod and Reel references to effective current availability; duplicate contributions collapse by stable My Tackle identity and CA-2 exclusions apply afterward. Configured main line remains Setup configuration rather than a separate owned Line record and does not automatically satisfy a separate canonical leader/line tackle requirement. Missing, broken, or context-excluded equipment makes the selected Setup **Incomplete** without modifying the persistent Setup, while surviving non-excluded physical equipment may remain individually available. Recommendation-facing Setup usability is derived/non-authoritative and distinguishes **Complete Usable, Unverified, Not Usable for Automation, and Incomplete**. Known Rod/Reel incompatibility or another hard line-system/configuration conflict prevents the Setup from automatically qualifying as a usable Recommendation Setup but does not make the physical equipment itself unavailable. Missing optional knowledge, including absence of a comparable Reel Line Capacity observation, does not create incompatibility; a Recommendation-specific hard requirement may still require proof on the dimension it uses. Multiple selected Setups may reference the same physical equipment, which contributes only once. If multiple selected Setups share one physical Reel and contain known contradictory configured-line claims, FCC treats that as a current-context configuration conflict requiring explicit resolution rather than silently choosing or merging values; missing/Unknown line information does not itself create a conflict. Selecting a Setup never creates ownership, canonical mappings, compatibility facts, substitute equipment, or Recommendation scores. Version 1 adds no normalized Setup Purpose, Target Species, Technique, Primary/Current status, availability status, compatibility status, Recommendation score, or Last Used fields without demonstrated need. Exact field names, derived-status labels, current-context conflict-resolution UX, and implementation mechanics remain revision allowed.

**Representative SETUP-1D final persisted record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    fishingSetupId: "setup-0003",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-06T22:00:00-05:00",
    updatedAt: "2026-09-06T22:00:00-05:00",

    setupName: "Bass Spinning Setup",

    rodTackleItemId: "mt-rod-0004",
    reelTackleItemId: "mt-reel-0005",

    // Optional Setup-specific saved line configuration. This does not, by
    // itself, globally assert the shared Reel's instantaneous spool state.
    configuredMainLine: {
        lineType: {
            valueType: "standard",
            value: "braid"
        },

        breakingStrength: {
            valueStatus: "known",
            amount: 15,
            unit: "lb"
        },

        diameter: {
            valueStatus: "known",
            amount: 0.20,
            unit: "mm"
        }
    },

    notes: null

    // No persisted compatibility/usability result.
    // No persisted current-availability state or Recommendation score.
}
```

**Representative derived SETUP-1D current-context view — non-authoritative:**

```js
{
    fishingSetupId: "setup-0003",

    availabilityContribution: {
        tackleItemIds: [
            "mt-rod-0004",
            "mt-reel-0005"
        ]
    },

    setupUsability: {
        status: "completeUsable",
        pairingCompatibility: "compatible",
        lineSystem: {
            rodLineRating: "compatible",
            reelLineCapacity: "guidanceAvailable",
            reelLineTypeSupport: "unverified"
        }
    }
}
```

The representative values and derived labels are illustrative schema/application values. The derived view is reproducible and is not persisted authority.

**Fishing Setup checkpoint status: COMPLETE / APPROVED WITH REVISION ALLOWED.** SETUP-1A through SETUP-1D settle the Version 1 Fishing Setup semantic contract: stable independently persisted Setup identity and owned Rod/Reel references, derived type pairing, optional Setup-specific configured main line with bounded rating/capacity checks, current-availability contribution, Recommendation-facing usability, and final validation boundaries. Preserve this completed checkpoint unless later implementation or demonstrated Recommendation findings require a specific revision.

## GATE-007 Inventory Location Production Contract Checkpoint

- **LOCATION-1A — Inventory Location Core Record + Membership Boundary: APPROVED / revision allowed.** Version 1 Inventory Location is persistent profile-owned User Knowledge representing a physical storage place or container. Each active Location has stable identity, common record-level schema/revision/lifecycle semantics, a required user-facing name, an optional parent Location reference, and optional notes. Active names must be unique among siblings; exact normalization/case-comparison mechanics remain refinement allowed. A Location may be top-level or have exactly one parent; containment forms an acyclic tree with no semantic hard depth limit in Version 1. Selecting a Location for confirmed current availability recursively contributes its current descendant Locations and memberships; selecting a child contributes only that child subtree, and overlapping parent/child selections never double-count the same contribution. Advanced smart-packing, capacity, or deep hierarchy management remains outside this checkpoint.
- **LOCATION-1A membership semantics: APPROVED / revision allowed.** Location membership is a persistent storage relationship to an authoritative My Tackle record and never creates, copies, or changes ownership. An owned `physicalItem` may be unassigned or assigned to at most one active physical Location and carries no per-Location quantity because the owned record represents one physical object. One owned `functionalPool` may have memberships in multiple Locations without creating duplicate ownership pools. Each functional-pool membership may state a positive known quantity or valid quantity-unknown presence; a zero amount is represented by absence/removal of that membership rather than a zero-presence row. Persistent My Tackle `ownedQuantity` and per-Location/current-availability amount are distinct facts and may not be silently substituted for each other.
- **LOCATION-1A direct current-availability semantics: APPROVED / revision allowed.** Directly adding an owned `physicalItem` to **What I Have With Me Today** means that physical item is present. Directly adding an owned `functionalPool` means some amount/presence is with the user, using a known current amount when supplied or quantity-unknown presence otherwise; direct selection never silently asserts that all owned units are present. The low-friction default may therefore remain presence-known / quantity-unknown until the user supplies a count.
- **LOCATION-1A source provenance + contained exceptions: APPROVED / revision allowed.** Effective availability preserves source provenance during resolution so a source-specific exception can remove one Location/descendant contribution without globally removing the same My Tackle pool contributed by another source. Selecting a parent Location includes descendants, while a current-context exception may remove a child Location or specific contributed content for that context without changing persistent containment or Location membership. Equivalent owned contributions aggregate/deduplicate only after source-specific exceptions are applied. CA-2 is refined accordingly; this does not create a second ownership or availability authority.
- **LOCATION-1A deletion protection + unassigned ownership: APPROVED / revision allowed.** Unassigned My Tackle ownership is valid User Knowledge and must remain visible as an unlocated/unassigned derived storage state rather than being treated as corrupt or as a fake Location. Only an empty, childless Inventory Location may be deleted. A Location with direct memberships or child Locations must have those relationships explicitly moved/removed first; deletion must not silently de-locate contents or descendants. If the Location is referenced by the confirmed current-availability context, that current-context reference/exception state must be explicitly reconciled before deletion rather than silently changing the confirmed context. Deleting a Location never deletes My Tackle ownership.

**Representative LOCATION-1A Location record — working candidate field names:**

```js
{
    inventoryLocationId: "location-main-bag",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-08T09:00:00-05:00",
    updatedAt: "2026-09-08T09:00:00-05:00",

    locationName: "Main Tackle Bag",
    parentInventoryLocationId: null,
    notes: null
}
```

**Representative LOCATION-1A functional-pool membership — working candidate field names:**

```js
{
    inventoryLocationMembershipId: "locmem-0042",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-08T09:05:00-05:00",
    updatedAt: "2026-09-08T09:05:00-05:00",

    inventoryLocationId: "location-bass-box",
    tackleItemId: "mt-weight-0042",

    locationQuantity: {
        valueStatus: "known",
        amount: 10
    }
}
```

**Representative LOCATION-1A physical-item membership — working candidate field names:**

```js
{
    inventoryLocationMembershipId: "locmem-0043",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-08T09:06:00-05:00",
    updatedAt: "2026-09-08T09:06:00-05:00",

    inventoryLocationId: "location-main-bag",
    tackleItemId: "mt-reel-0005"

    // No location quantity: this membership points to one physicalItem.
}
```

**LOCATION-1A checkpoint status: COMPLETE / APPROVED WITH REVISION ALLOWED.** The core Location identity, sibling naming, minimum containment, physical-item membership, distributed functional-pool membership, per-Location quantity/presence, direct-pool current-availability amount boundary, source-aware availability, contained current-context exceptions, deletion protection, and legitimate unassigned ownership are settled. Exact field names, persistence layout, normalization mechanics, and UI remain revision allowed.

- **LOCATION-1B — Allocation Reconciliation + Movement Semantics: APPROVED / revision allowed.** Location allocation arithmetic is derived only from known quantities. When persistent `ownedQuantity` is known and every active Location allocation for that functional pool is known, FCC may derive the positive remainder as Unassigned. If any active Location allocation is quantity-unknown, FCC must not invent a residual count and allocation completeness is indeterminate. If `ownedQuantity` itself is unknown, FCC likewise cannot derive a complete allocation or Unassigned quantity. If the sum of known Location allocations exceeds a known owned total, FCC surfaces an allocation conflict rather than silently changing ownership or Location values; that conflict is eligible for the derived Needs Attention surface under G7-ATTN. A zero derived remainder means no quantitatively unassigned remainder is established; Unassigned remains a derived storage condition rather than a fake Location.
- **LOCATION-1B move/reallocation boundary: APPROVED / revision allowed.** Moving a `physicalItem` explicitly replaces its zero/one active Location membership. Moving a `functionalPool` is an explicit reallocation operation rather than ownership mutation. A known source allocation may be moved in whole or in a positive known subset; the source and destination allocations update together, and a source membership is removed when no quantity remains there. A quantity-unknown source presence may be relocated as quantity-unknown presence, but FCC may not subtract an invented known subset from an unknown source. To move a known subset from a quantity-unknown source, the user must first provide/confirm enough source quantity knowledge to make that reallocation truthful. Movement never silently changes persistent owned quantity.
- **LOCATION-1B persistence/derivation boundary: APPROVED / revision allowed.** LOCATION-1B introduces no second ownership record and no new authoritative derived-allocation record type. My Tackle remains ownership authority; Location memberships remain storage relationships; Unassigned remainder, allocation completeness/indeterminacy, and allocation conflict are reproducible derived views. Exact transaction mechanics, persistence batching, conflict UI labels, and production field names remain revision allowed. Merge/Split dependent-reference reconciliation remains G7-REFS, while Recommendation quantity sufficiency/depletion remains G7-QTY.

**LOCATION-1B checkpoint status: COMPLETE / APPROVED WITH REVISION ALLOWED.** Allocation reconciliation and movement semantics are settled without reopening LOCATION-1A.

## GATE-007 G7-COVERAGE Family Boundary Checkpoint

- **G7-COVERAGE-1A — Terminal Tackle decomposition: APPROVED / revision allowed.** A broad **Terminal Tackle / Terminal Hardware** concept may remain useful for user-facing organization, but Version 1 must not force all remaining small terminal components into one `terminalHardware` My Tackle schema family. Barrel swivels, three-way swivels, split rings, bobber stops, weight pegs, beads, and wacky O-rings have materially different fishing-relevant size, strength, fit, and applicability semantics; one universal hardware-size/strength schema would create misleading conditional fields. Actual My Tackle families must therefore be narrower and attribute-coherent. Current working family candidates are **Connector** for barrel swivel / three-way swivel / split ring (and only later-demonstrated connector hardware), **Line Stop** for bobber stop / weight peg, and **Bead** for stop bead / protective bead, with wacky O-ring and any other small accessory receiving an explicit later family disposition rather than being forced into a catch-all. These candidate family names/boundaries remain refinement work; the approved semantic lock is that broad Terminal Tackle is an organizational concept, not one universal My Tackle family. Explicit canonical mapping remains the component identity authority and family attributes must not conflate incompatible sizing systems.
- **G7-COVERAGE-1A — Leader Material boundary: APPROVED / revision allowed.** The current canonical `leader-line` Rig requirement is represented in My Tackle as owned **Leader Material**, not by default as an inventory of individually pre-cut or pre-made leaders. The owned record represents material available to fabricate a leader segment as needed; exact leader length remains Rig assembly/Decision Knowledge unless later functionality demonstrates a need to persist a particular prepared leader. Version 1 does not require tracking exact remaining spool footage, count of producible leaders, pre-made-versus-hand-tied state, knots already tied, or continuous decrement as leaders are cut. Specialized pre-tied assemblies such as Spinner Harness remain distinct from Leader Material. The minimum later family contract should center on line material/type and breaking strength, with optional diameter where useful; availability may remain presence-known / quantity-unknown when exact consumption is not a hard buildability requirement. `leaderMaterial` is a working production-family naming candidate, not a locked field name.

**G7-COVERAGE-1A checkpoint status: COMPLETE / APPROVED WITH REVISION ALLOWED.** The single-terminal-hardware-family proposal is rejected, and Leader Material is the approved representation boundary for ordinary leader inventory.

- **G7-COVERAGE-1B — Connector Family Boundary + Minimum Contract: APPROVED / revision allowed.** Version 1 uses one **Connector** My Tackle `functionalPool` family for small terminal connection hardware whose ownership/pooling behavior is coherent even when its commercial sizing notation differs. The initial Standard Connector Styles are **Barrel Swivel, Three-Way Swivel, Snap Swivel, Duo-Lock Snap, Split Ring, and Swivel — Unspecified**, plus Custom and Unknown. Snap Swivel and Duo-Lock Snap are explicitly included because ordinary terminal-tackle inventory demonstrates a real cataloging need; they must not be forced into Barrel Swivel identity merely because they contain or resemble a swivel. Connector Style is family-level User Knowledge and remains independent from canonical Reference Knowledge mapping, so an owned Connector may remain legitimately unmapped under MT-1C. Selecting or recognizing a Connector Style never silently creates canonical mapping.
- **G7-COVERAGE-1B sizing/strength boundary: APPROVED / revision allowed.** Connector size preserves the basis actually used for the owned component rather than creating a universal cross-style size scale. A Connector may carry a literal nominal designation such as `#6` / `#7`, or a physical overall-length measurement such as `0.5 in` / `12 mm`; supported physical-length units may include `in`, `cm`, and `mm`, with alternate display derived non-destructively. FCC must not infer or persist equivalence between a nominal designation and a physical length, or between the same nominal label on different Connector Styles, without explicit applicable Reference Knowledge. Rated Strength is optional fishing-relevant User Knowledge represented by a positive `lb` or `kg` amount when known; omission/Unknown remains valid and the user is not required to research a load rating merely to catalog the item.
- **G7-COVERAGE-1B pooling/matching boundary: APPROVED / revision allowed.** Connector Style plus applicable known size information forms the baseline family-level pool distinction; known Rated Strength differences also preserve separate truthful pools when captured. Unknown is not a wildcard and Custom does not gain Standard semantics. Canonical mappings participate separately in merge/match safety and remain required for automatic canonical Rig/Recommendation satisfaction. A Snap Swivel must not silently satisfy Barrel Swivel, and a Duo-Lock Snap must not silently satisfy another Connector requirement solely because the components are in the same My Tackle family; any substitution/compatibility fact belongs to explicit Reference/Decision Knowledge. Quantity remains optional `functionalPool` knowledge under MT-1G as refined by G7-QTY-1A: positive values are known remaining stock, omission is exact-stock unknown, and zero is explicitly depleted. No universal Connector size vocabulary, engineering-dimension catalog, swivel-construction taxonomy, or commercial-product catalog is introduced in Version 1.

**Representative G7-COVERAGE-1B Snap Swivel record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    tackleItemId: "mt-connector-0002",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-08T11:20:00-05:00",
    updatedAt: "2026-09-08T11:20:00-05:00",

    tackleItemFamily: "connector",
    tackleInventoryKind: "functionalPool",

    // This owned Snap Swivel remains valid even if no applicable canonical
    // Connector identity has yet been explicitly confirmed.
    fccReferenceMappings: [],

    connectorCharacteristics: {
        connectorStyle: {
            valueType: "standard",
            value: "snap-swivel"
        },

        connectorSize: {
            basis: "nominalDesignation",
            label: "#7"
        }

        // ratedStrength omitted because it is not known.
    },

    ownedQuantity: 10,

    descriptiveMetadata: {
        brand: null,
        manufacturer: null,
        productName: null,
        modelNumber: null,
        notes: null
    }
}
```

**G7-COVERAGE-1B checkpoint status: COMPLETE / APPROVED WITH REVISION ALLOWED.** Connector is now an approved Version 1 family boundary with Snap Swivel and Duo-Lock Snap included. Exact production property names, Standard IDs/labels, mapping-confirmation UX, and later demonstrated Connector expansion remain refinement allowed.

- **G7-COVERAGE-1C — Remaining Small Terminal Component Disposition: APPROVED / revision allowed.** Version 1 settles four additional bounded My Tackle `functionalPool` family homes rather than recreating a miscellaneous Terminal Hardware schema. **Line Stop** covers Bobber Stop and Weight Peg as Standard family styles plus Custom/Unknown; both interact directly with line to constrain another Rig component and share coherent pooling/authoring behavior. **Bead** covers Stop Bead, Protective / Buffer Bead, and General Rigging / Attractor Bead as Standard family roles plus Custom/Unknown. **Soft-Plastic Retainer** covers Wacky O-Ring and Wacky Worm Band as Standard family styles plus Custom/Unknown. **Sinker Slide** remains a narrow specialized family because its primary function is allowing a sinker/weight attachment to slide on the line and it does not truthfully fit Connector, Line Stop, Bead, or ordinary Weight. A small one-purpose family is acceptable when semantic coherence would otherwise be lost.
- **G7-COVERAGE-1C sizing/fit + authoring boundary: APPROVED / revision allowed.** All four families use low-friction cataloging. Exact quantity is optional `functionalPool` knowledge under MT-1G as refined by G7-QTY-1A; known values may be positive or zero, omission means exact stock unknown, and zero means depleted. Detailed sizing is not required merely to record ownership. Family-specific fit/size information such as line-size compatibility, physical/hole diameter, soft-plastic fit diameter, or nominal component size may be captured later only where known and demonstrated useful; the user is not required to research those values. Missing/Unknown optional fit data remains valid ownership and cannot prove a hard fit constraint if a later Rig/Recommendation explicitly requires one. Known conflicting family-relevant fit data must not be silently merged when captured. Color is descriptive by default for Beads unless a later Recommendation explicitly promotes a bounded fishing-use characteristic.
- **G7-COVERAGE-1C canonical-mapping boundary: APPROVED / revision allowed.** Family/style or role selection does not silently create canonical Reference Knowledge mapping. Existing applicable canonical Rig/Tackle identities may be explicitly mapped under MT-1C/D when automated satisfaction is intended. Sinker Slide ownership does not by itself authorize creation of a new canonical Reference Knowledge identity; an owned Sinker Slide may remain valid unmapped User Knowledge until an applicable canonical requirement is deliberately established. Sharing one My Tackle family never creates substitution semantics between different styles/roles; any functional substitution belongs to explicit Reference/Decision Knowledge.

**Representative G7-COVERAGE-1C Line Stop record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    tackleItemId: "mt-line-stop-0001",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-08T11:45:00-05:00",
    updatedAt: "2026-09-08T11:45:00-05:00",

    tackleItemFamily: "lineStop",
    tackleInventoryKind: "functionalPool",

    // Explicit canonical mapping may be added/confirmed when applicable.
    fccReferenceMappings: [],

    lineStopCharacteristics: {
        lineStopStyle: {
            valueType: "standard",
            value: "bobber-stop"
        }
        // Optional fit/size knowledge omitted because it is not known/required.
    },

    ownedQuantity: 5,

    descriptiveMetadata: {
        brand: null,
        manufacturer: null,
        productName: null,
        modelNumber: null,
        notes: null
    }
}
```

**Representative G7-COVERAGE-1C Bead record — working candidate field names:**

```js
{
    tackleItemId: "mt-bead-0001",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-08T11:46:00-05:00",
    updatedAt: "2026-09-08T11:46:00-05:00",

    tackleItemFamily: "bead",
    tackleInventoryKind: "functionalPool",
    fccReferenceMappings: [],

    beadCharacteristics: {
        beadRole: {
            valueType: "standard",
            value: "general-rigging-attractor"
        }
        // Optional diameter/hole-diameter knowledge omitted.
    },

    ownedQuantity: 30,

    descriptiveMetadata: {
        brand: null,
        manufacturer: null,
        productName: null,
        modelNumber: null,
        notes: "Assorted colors"
    }
}
```

**Representative G7-COVERAGE-1C Soft-Plastic Retainer record — working candidate field names:**

```js
{
    tackleItemId: "mt-soft-plastic-retainer-0001",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-08T11:47:00-05:00",
    updatedAt: "2026-09-08T11:47:00-05:00",

    tackleItemFamily: "softPlasticRetainer",
    tackleInventoryKind: "functionalPool",
    fccReferenceMappings: [],

    softPlasticRetainerCharacteristics: {
        retainerStyle: {
            valueType: "standard",
            value: "wacky-o-ring"
        }
        // Optional bait-fit/diameter knowledge omitted.
    },

    ownedQuantity: 6,

    descriptiveMetadata: {
        brand: null,
        manufacturer: null,
        productName: null,
        modelNumber: null,
        notes: null
    }
}
```

**Representative G7-COVERAGE-1C Sinker Slide record — working candidate field names:**

```js
{
    tackleItemId: "mt-sinker-slide-0001",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-08T11:48:00-05:00",
    updatedAt: "2026-09-08T11:48:00-05:00",

    tackleItemFamily: "sinkerSlide",
    tackleInventoryKind: "functionalPool",

    // Valid cataloged ownership may remain unmapped until an applicable
    // canonical Reference Knowledge identity is explicitly established.
    fccReferenceMappings: [],

    sinkerSlideCharacteristics: {
        // No required subtype taxonomy in Version 1.
        // Optional fit/size knowledge may be added only when demonstrated useful.
    },

    ownedQuantity: 7,

    descriptiveMetadata: {
        brand: null,
        manufacturer: null,
        productName: null,
        modelNumber: null,
        notes: null
    }
}
```

**G7-COVERAGE-1C checkpoint status: COMPLETE / APPROVED WITH REVISION ALLOWED.** Line Stop, Bead, Soft-Plastic Retainer, and Sinker Slide now have explicit Version 1 My Tackle family homes. Exact production property names, Standard IDs/labels, optional fit/size serialization, and mapping-confirmation UX remain refinement allowed.

- **G7-COVERAGE-1D — Float Family Boundary + Minimum Contract: APPROVED / revision allowed.** Version 1 uses one **Float** My Tackle `functionalPool` family for freshwater floats/bobbers. Float ownership separates **Operating Mode** from **Pattern / Form** because those are independent fishing characteristics: a pencil/cigar/other form may be fixed, sliding, or otherwise configured, so form must not be used as a proxy for line/depth-control behavior. Standard Operating Mode values are **Fixed**, **Slip / Sliding**, and **Convertible Fixed-or-Slip**, plus Custom/Unknown. Standard Pattern / Form values are **Round / Ball, Oval, Cigar, Pencil, Waggler, Stick, Avon, and Casting / Bubble**, plus Custom/Unknown. Pattern/Form is required family knowledge using Standard/Custom/Unknown semantics; Operating Mode is likewise required. The bounded vocabulary deliberately covers common freshwater inventory without expanding into popping corks, ice-specific indicators, specialized pole-fishing forms, or other demonstrated-out-of-scope designs, which may remain Custom until FCC functionality requires standard semantics.
- **G7-COVERAGE-1D — Float sizing + load/capacity boundary: APPROVED / revision allowed.** Float size is fishing-relevant but optional because products and anglers express it through different bases. Version 1 may preserve optional overall length, maximum body diameter, and/or a literal nominal size designation without inventing equivalence among values such as `Medium`, `1 in`, `#2`, length, or diameter. Physical dimensions use positive length measurements with explicit units and Measurement System display conversion where applicable; nominal designations remain literal fishing/product notation. Float load/buoyancy capacity is also optional fishing-relevant User Knowledge because current Rig guidance requires appropriate balance but does not define universal numeric capacity requirements. A load rating preserves its actual basis, including a physical mass-capacity amount when directly known or literal shot/manufacturer notation such as `4BB` or `3+2g`; FCC must not silently convert or reinterpret nominal shot/manufacturer notation into a physical mass capacity. Missing/Unknown optional size or load knowledge remains valid ownership and cannot prove a later hard numeric requirement.
- **G7-COVERAGE-1D — Loading / integrated-ballast boundary: APPROVED / revision allowed.** Float **Loading Mode** is optional fishing-relevant knowledge with Standard values **Unweighted, Fixed Integrated, Adjustable Integrated, and Water-Fillable**, plus Custom/Unknown where applicable. When fixed or adjustable physical ballast mass is known, the Float may carry an optional positive integrated-ballast mass using the established `oz` / `g` physical-mass semantics. Integrated ballast remains part of the Float record and never creates a duplicate ordinary Weight ownership record. Water-Fillable means the Float may use temporary water ballast for casting/presentation; Version 1 does not track the momentary amount of water inside the Float as persistent ownership identity. Float material, exact color/tip color, antenna dimensions, displacement volume, glow/light features, and detailed construction remain descriptive by default unless later Recommendation evidence demonstrates a bounded fishing-relevant need.
- **G7-COVERAGE-1D — Pooling / mapping / authoring boundary: APPROVED / revision allowed.** Operating Mode + Pattern/Form form the baseline Float-family identity; applicable known dimensions, known load rating, Loading Mode, and known integrated-ballast mass preserve separate truthful pools when they materially differ. Unknown is not a wildcard and Custom does not gain Standard semantics. Family characteristics never silently create canonical Reference Knowledge mapping or cross-type substitution. Existing `fixed-bobber` and `slip-float` canonical mappings remain explicit under MT-1C/D and are required for automatic satisfaction of those current Rig requirements. Quantity remains optional `functionalPool` knowledge under G7-QTY-1A; positive is known remaining stock, omission is exact-stock unknown, and zero is depleted. Normal beginner-facing Add Float should center on Operating Mode + Pattern/Form + optional Quantity, exposing dimensions, load rating, and loading details progressively or just in time rather than requiring package research merely to catalog ownership.

**Representative G7-COVERAGE-1D Float record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    tackleItemId: "mt-float-0001",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-09T09:30:00-05:00",
    updatedAt: "2026-09-09T09:30:00-05:00",

    tackleItemFamily: "float",
    tackleInventoryKind: "functionalPool",

    fccReferenceMappings: [
        {
            referenceDomain: "tackle",
            referenceId: "slip-float"
        }
    ],

    floatCharacteristics: {
        floatOperatingMode: {
            valueType: "standard",
            value: "slip-sliding"
        },

        floatPattern: {
            valueType: "standard",
            value: "pencil"
        },

        floatLoadingMode: {
            valueType: "standard",
            value: "fixed-integrated"
        },

        integratedBallastMass: {
            valueStatus: "known",
            amount: 0.125,
            unit: "oz"
        },

        floatDimensions: {
            overallLength: {
                valueStatus: "known",
                amount: 5,
                unit: "in"
            },
            maximumBodyDiameter: {
                valueStatus: "known",
                amount: 0.5,
                unit: "in"
            }
        },

        floatLoadRating: {
            basis: "physicalMassCapacity",
            amount: 0.25,
            unit: "oz"
        }
    },

    ownedQuantity: 3,

    descriptiveMetadata: {
        brand: null,
        manufacturer: null,
        productName: null,
        modelNumber: null,
        notes: null
    }
}
```

**G7-COVERAGE-1D checkpoint status: COMPLETE / APPROVED WITH REVISION ALLOWED.** Float is now an approved Version 1 `functionalPool` family with independent Operating Mode and Pattern/Form semantics, optional size/dimensions and load/capacity knowledge, optional Loading Mode/integrated ballast, and explicit canonical mapping. Exact production property names, enum IDs/labels, compound rating parsing/display, and later demonstrated Float expansion remain refinement allowed.

- **G7-COVERAGE-1E — Leader Material Core Contract: APPROVED / revision allowed.** Version 1 represents ordinary leader inventory as one **Leader Material** My Tackle `functionalPool` family: material available to fabricate leader segments as needed rather than default inventory of individually cut or pre-tied leaders. Required family knowledge is **Material Type** plus always-applicable **Breaking Strength**, with Breaking Strength permitted to be explicit Unknown. Standard Material Type values are **Monofilament, Fluorocarbon, Braid, and Wire**, plus Custom/Unknown. Wire subtypes such as steel/titanium, single-strand/multi-strand, coated/uncoated, and similar engineering distinctions remain deferred until demonstrated Recommendation or Rig value requires them.
- **G7-COVERAGE-1E — Strength + diameter boundary: APPROVED / revision allowed.** Known Breaking Strength is a finite positive amount using `lb` or `kg`; Measurement System display conversion is derived non-destructively. Leader Material may additionally preserve optional positive physical **Diameter** in `mm` or `in`. Breaking Strength and Diameter are independent fishing-relevant facts: FCC must not infer one from the other, from commercial identity, or from indirect lookup data. Unknown Breaking Strength or omitted/Unknown Diameter remains valid ownership but cannot prove a later hard numeric requirement on that dimension.
- **G7-COVERAGE-1E — Pooling + quantity boundary: APPROVED / revision allowed.** Leader Material uses presence-oriented `functionalPool` semantics rather than continuous consumable footage accounting. Material Type plus sufficiently known Breaking Strength and Diameter preserve truthful family-level pool distinction; known conflicts remain separate, Unknown is not a wildcard, and commercial brand/product differences do not by themselves fragment functional equivalence. Version 1 does not require `ownedQuantity`, remaining spool length, original spool capacity, percent remaining, package count, prepared-leader count, or calculated producible-leader count. Multiple commercially separate but functionally equivalent spools may remain one pool when the user does not need them distinguished. Exact stock maintenance must not be required for Recommendation executability; G7-QTY-1A now owns the derived Known Sufficient / Known Insufficient / Sufficiency Unknown semantics and the zero-versus-unknown depletion boundary.
- **G7-COVERAGE-1E — Mapping + Setup + authoring boundary: APPROVED / revision allowed.** Canonical `leader-line` satisfaction requires an explicit valid `tackle` mapping under MT-1C/D; Material Type or other family characteristics never silently create that mapping. Current Rig instructions own the amount/length of leader to cut and do not require persistent per-segment ownership records. SETUP-1D remains controlling: a Fishing Setup's configured main line is Setup configuration and does not automatically create or satisfy separate Leader Material ownership/availability. Specialized pre-tied assemblies such as Spinner Harness remain distinct. Normal Add Leader Material should center on Material Type + Breaking Strength, with optional Diameter and descriptive metadata; the user is not required to enter spool footage, number of leaders, knots, package count, or pre-cut state merely to catalog ownership.

**Representative G7-COVERAGE-1E Leader Material record — working candidate field names:**

```js
{
    // Shared User Knowledge envelope names remain working candidates.
    tackleItemId: "mt-leader-material-0001",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-09T10:00:00-05:00",
    updatedAt: "2026-09-09T10:00:00-05:00",

    tackleItemFamily: "leaderMaterial",
    tackleInventoryKind: "functionalPool",

    fccReferenceMappings: [
        {
            referenceDomain: "tackle",
            referenceId: "leader-line"
        }
    ],

    leaderMaterialCharacteristics: {
        materialType: {
            valueType: "standard",
            value: "fluorocarbon"
        },

        breakingStrength: {
            valueStatus: "known",
            amount: 12,
            unit: "lb"
        },

        diameter: {
            valueStatus: "known",
            amount: 0.28,
            unit: "mm"
        }
    },

    descriptiveMetadata: {
        brand: null,
        manufacturer: null,
        productName: null,
        modelNumber: null,
        notes: null
    }

    // No ownedQuantity.
    // No remaining spool length or prepared-leader count.
}
```

**G7-COVERAGE-1E checkpoint status: COMPLETE / APPROVED WITH REVISION ALLOWED.** Leader Material now has a complete Version 1 `functionalPool` contract centered on Material Type + Breaking Strength with optional Diameter, presence-oriented quantity behavior, explicit `leader-line` mapping, and low-friction authoring. Exact production property names, Wire subtype expansion, measurement precision, duplicate-candidate UX, and later demonstrated prepared-leader support remain refinement allowed.

- **G7-COVERAGE-1F — Jighead Core Contract: APPROVED / revision allowed.** Version 1 represents Jigheads as one My Tackle `functionalPool` family for an integrated weighted head + hook. The integrated hook and nominal jighead weight remain characteristics of the Jighead record and never create duplicate Hook or ordinary Weight ownership records. Core family knowledge is **Jighead Type**, always-applicable **Jighead Mass**, and always-applicable **Embedded Hook Size**; Mass and Hook Size may remain explicitly Unknown so incomplete package knowledge does not prevent truthful ownership. Initial Standard Jighead Types are **General Purpose, Ned, Shaky Head, Tube/Internal, Swim/Swimbait, Football, and Darter**, plus Custom/Unknown. Selecting a family Type never silently creates a canonical mapping.
- **G7-COVERAGE-1F — Mass + embedded-hook boundary: APPROVED / revision allowed.** Known Jighead Mass is a finite positive nominal fishing weight using `oz` or `g`, with Measurement System display conversion derived non-destructively. It represents the package/manufacturer jighead weight used for fishing selection rather than total completed-rig mass. Embedded Hook Size reuses the approved Hook-size Standard/Custom/Unknown semantics rather than creating a Jighead-only sizing system. Known mass or hook-size conflicts preserve separate truthful pools; neither value is inferred from commercial identity or from the other.
- **G7-COVERAGE-1F — Type versus Head Form + secondary characteristics: APPROVED / revision allowed.** Functional Jighead Type and physical **Head Form** are independent dimensions because the same functional type may use materially different geometry. Optional fishing-relevant Standard Head Forms are **Round/Ball, Mushroom, Flat/Stand-Up, Football, Minnow/Fish, Bullet, Darter, and Internal Tube**, plus Custom/Unknown. Optional **Guard Configuration** and **Hook Wire Class** reuse the approved Hook-family semantic vocabularies where applicable. Detailed bait-keeper taxonomy, eye angle/orientation, construction material, finish/color, mold/manufacturer geometry catalogs, and similar commercial/construction detail remain descriptive or deferred until demonstrated Recommendation/Rig value requires them.
- **G7-COVERAGE-1F — Tube fit + pooling + quantity + authoring boundary: APPROVED / revision allowed.** Tube/Internal Jigheads have a genuine bait-fit concern, but exact dimensional compatibility is not required until comparable authoritative Tube/Jighead size constraints exist; current assembly remains a real-world fit check rather than false numeric certainty. Baseline functional-pool distinction is Jighead Type + known Jighead Mass + known Embedded Hook Size, with captured conflicting Head Form, Guard Configuration, Hook Wire Class, or canonical mapping also preventing unsafe silent merges. Brand/model/color alone do not fragment functional equivalence. `ownedQuantity` remains optional under MT-1G; current Rig data already demonstrates quantity greater than one, while known-sufficient/known-insufficient/quantity-unknown/depleted behavior remains G7-QTY. Normal Add Jighead centers on Type + Mass + Hook Size + optional Quantity, with secondary characteristics progressively disclosed.
- **G7-COVERAGE-1F — Canonical mapping + requirement-satisfaction dependency: APPROVED / revision allowed.** The current canonical `jighead`, `ned-jighead`, `shaky-head-jighead`, and `tube-jighead` identities remain distinct Reference Knowledge and My Tackle mapping remains explicit under MT-1C/D. MT-1D is not revised to permit redundant same-domain user mappings. G7-XMAP is broadened into a later **Canonical Requirement Satisfaction Bridge** that must own universal Reference-Knowledge facts for both valid Lure/Bait -> generic Tackle satisfaction and valid specific-Tackle -> broader-Tackle satisfaction (for example where a specialized Jighead may truthfully satisfy a generic `jighead` requirement). Such satisfaction is explicit Reference/Decision Knowledge and is never inferred merely from family Type, free text, or superficial physical similarity; not every specialized Tackle identity must satisfy its broader category.

**Representative G7-COVERAGE-1F Jighead record — working candidate field names:**

```js
{
    tackleItemId: "mt-jighead-0001",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-10T13:45:00-05:00",
    updatedAt: "2026-09-10T13:45:00-05:00",

    tackleItemFamily: "jighead",
    tackleInventoryKind: "functionalPool",

    fccReferenceMappings: [
        {
            referenceDomain: "tackle",
            referenceId: "ned-jighead"
        }
    ],

    jigheadCharacteristics: {
        jigheadType: {
            valueType: "standard",
            value: "ned"
        },

        jigheadMass: {
            valueStatus: "known",
            amount: 0.125,
            unit: "oz"
        },

        embeddedHookSize: {
            valueType: "standard",
            value: "1"
        },

        headForm: {
            valueType: "standard",
            value: "mushroom"
        },

        hookWireClass: {
            valueType: "standard",
            value: "light"
        },

        guardConfiguration: {
            valueType: "standard",
            value: "unguarded"
        }
    },

    ownedQuantity: 5,

    descriptiveMetadata: {
        brand: null,
        manufacturer: null,
        productName: null,
        modelNumber: null,
        notes: null
    }
}
```

**G7-COVERAGE-1F checkpoint status: COMPLETE / APPROVED WITH REVISION ALLOWED.** Jighead now has one bounded Version 1 `functionalPool` contract with independent Type and Head Form, integrated nominal Mass + Embedded Hook Size, optional Guard Configuration/Hook Wire Class, explicit canonical mapping, ordinary optional quantity, and no duplicate Hook/Weight ownership. Exact production property names, enum IDs/labels, dimensional fit support, and later demonstrated Jighead expansion remain refinement allowed. G7-XMAP now explicitly owns the unresolved canonical requirement-satisfaction bridge for both cross-domain and valid specific-to-broader canonical satisfaction.

- **G7-COVERAGE-1G — Spinner Harness Core Contract: APPROVED / revision allowed.** Version 1 represents Spinner Harness as one My Tackle `functionalPool` family for a complete ready-to-use pre-tied spinner-harness assembly. The constituent leader, spinner blade, beads, hooks, connectors, and optional flotation remain subordinate assembly characteristics/components and never create duplicate Hook, Leader Material, Bead, Connector, or Float ownership. Conversely, loose constituent components do not automatically establish an available `spinner-harness`; purchased or user-tied completed harness ownership requires an explicit My Tackle action. Core family knowledge is **Spinner Blade Style** and always-applicable **Embedded Hook Count**, with explicit Unknown permitted so incomplete package knowledge does not prevent truthful ownership. Initial Standard Spinner Blade Styles are **Colorado, Indiana, Willowleaf, and Smile Blade**, plus Custom/Unknown. Selecting Blade Style never silently creates canonical mapping.
- **G7-COVERAGE-1G — Blade + embedded-hook characteristics: APPROVED / revision allowed.** Optional fishing-relevant blade knowledge may preserve literal nominal **Blade Size/Designation** such as `#4` without inventing universal physical equivalence, plus positive whole-number **Blade Count** when known. Embedded Hook Count is a positive whole number when known and may remain explicit Unknown. Optional ordered **Embedded Hook Sizes** reuse the approved Hook Size Standard/Custom/Unknown semantics; order is front-to-rear where multiple hook sizes are captured. Version 1 does not normalize embedded Hook Style, wire class, barb configuration, hook spacing, hook color, or coatings without demonstrated Recommendation/Rig need.
- **G7-COVERAGE-1G — Integrated leader + flotation boundary: APPROVED / revision allowed.** The harness leader is subordinate to the complete assembly and does not create or satisfy separate Leader Material ownership while committed to the harness. Optional fishing-relevant leader knowledge may preserve Leader Material Type using the approved Monofilament / Fluorocarbon / Braid / Wire plus Custom/Unknown semantics, positive nominal Leader/Snell Length in `in` or `cm`, and positive Breaking Strength in `lb` or `kg`; Diameter is not required for Spinner Harness Version 1. Optional **Integrated Float** presence may be represented as Present / Absent / Unknown. Integrated flotation remains part of the harness and does not create separate Float ownership. Exact blade/bead color or pattern remains descriptive User Knowledge during GATE-007 rather than importing Lure/Bait color normalization; bead count/diameter, clevis type, and similar construction detail remain deferred.
- **G7-COVERAGE-1G — Pooling + mapping + quantity + authoring boundary: APPROVED / revision allowed.** Baseline functional-pool distinction is Spinner Blade Style + Embedded Hook Count. Captured conflicting fishing-relevant Blade Size, Blade Count, Embedded Hook Sizes, Leader Material/Length/Strength, Integrated Float state, or canonical mapping preserve separate truthful pools; Unknown is not a wildcard and commercial brand/model/color alone do not fragment functional equivalence. Explicit canonical mapping to `spinner-harness` remains required for automated canonical satisfaction under MT-1C/D. Constituent components committed to the assembly do not separately satisfy `hook`, `leader-line`, `bead`, `connector`, or `float` requirements, and loose components do not automatically synthesize Spinner Harness availability. `ownedQuantity` remains optional under MT-1G, with sufficiency/depletion owned by G7-QTY. Normal Add Spinner Harness centers on Blade Style + Hook Count + optional Quantity, with Blade Size, Hook Sizes, leader details, Blade Count, and Integrated Float progressively disclosed.

**Representative G7-COVERAGE-1G Spinner Harness record — working candidate field names:**

```js
{
    tackleItemId: "mt-spinner-harness-0001",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-10T14:30:00-05:00",
    updatedAt: "2026-09-10T14:30:00-05:00",

    tackleItemFamily: "spinnerHarness",
    tackleInventoryKind: "functionalPool",

    fccReferenceMappings: [
        {
            referenceDomain: "tackle",
            referenceId: "spinner-harness"
        }
    ],

    spinnerHarnessCharacteristics: {
        spinnerBladeStyle: {
            valueType: "standard",
            value: "colorado"
        },

        spinnerBladeSize: {
            valueStatus: "known",
            label: "#4"
        },

        spinnerBladeCount: {
            valueStatus: "known",
            amount: 1
        },

        embeddedHookCount: {
            valueStatus: "known",
            amount: 2
        },

        embeddedHookSizes: [
            {
                valueType: "standard",
                value: "#4"
            },
            {
                valueType: "standard",
                value: "#4"
            }
        ],

        harnessLeader: {
            materialType: {
                valueType: "standard",
                value: "monofilament"
            },

            nominalLength: {
                valueStatus: "known",
                amount: 60,
                unit: "in"
            },

            breakingStrength: {
                valueStatus: "known",
                amount: 14,
                unit: "lb"
            }
        },

        integratedFloat: {
            valueStatus: "known",
            value: "absent"
        }
    },

    ownedQuantity: 3,

    descriptiveMetadata: {
        brand: null,
        manufacturer: null,
        productName: null,
        modelNumber: null,
        exactBladeColorPattern: null,
        notes: null
    }
}
```

**G7-COVERAGE-1G checkpoint status: COMPLETE / APPROVED WITH REVISION ALLOWED.** Spinner Harness now has one bounded Version 1 `functionalPool` contract for the complete pre-tied assembly, with Blade Style + Hook Count core knowledge, optional blade/hook/leader/flotation characteristics, explicit canonical mapping, ordinary optional quantity, no duplicate constituent ownership, and no automatic assembly synthesis from loose components. Exact production property names, enum IDs/labels, later color normalization if demonstrated, and more detailed construction support remain refinement allowed.

- **G7-COVERAGE-1H — Bottom Bouncer Core Contract: APPROVED / revision allowed.** Version 1 represents Bottom Bouncer as one My Tackle `functionalPool` family for a complete usable weighted rigid-wire bottom-contact component. **Nominal Bottom Bouncer Mass** is the core always-applicable family characteristic and may be Known or explicit Unknown. Known values use one finite positive physical-mass amount in `oz` or `g`; Measurement System display conversion/comparison is derived non-destructively and zero is invalid. Bottom Bouncer remains a distinct family/canonical function outside ordinary standalone Weight ownership because the integrated mass is subordinate to the wire-frame trolling component's primary function.
- **G7-COVERAGE-1H — Integrated-mass + ordinary-Weight boundary: APPROVED / revision allowed.** A Bottom Bouncer's integrated mass never creates duplicate ordinary Weight ownership and does not separately satisfy another Rig's standalone Weight/sinker requirement. Conversely, owning a standalone Weight does not automatically satisfy canonical `bottom-bouncer`. Canonical satisfaction remains explicit under MT-1C/D; selecting the Bottom Bouncer family or entering a mass never silently creates the `bottom-bouncer` mapping.
- **G7-COVERAGE-1H — Frame/attachment + modular-product boundary: APPROVED / revision allowed.** Version 1 does not normalize wire-frame geometry, wire/arm dimensions, snap/swivel arrangement, attachment-eye geometry, construction material, finish/color, or fixed-versus-quick-change commercial design because current Rig/Recommendation knowledge demonstrates no hard requirement for those details. A My Tackle record represents a complete usable Bottom Bouncer configuration at its recorded nominal mass. Version 1 does not decompose a removable-weight product into a separate frame plus owned Weight, nor synthesize additional Bottom Bouncer configurations from loose frames/weights. A later demonstrated modular-inventory workflow may revisit that boundary explicitly.
- **G7-COVERAGE-1H — Pooling + mapping + quantity + authoring boundary: APPROVED / revision allowed.** Baseline functional-pool distinction is known Bottom Bouncer Mass plus canonical mapping. Known differing masses remain separate truthful pools; Unknown is not a wildcard. Commercial brand/model, paint, wire dimensions, snap construction, and similar descriptive differences do not independently fragment functional equivalence. `ownedQuantity` remains optional under MT-1G, with known-sufficient/known-insufficient/quantity-unknown and depletion behavior owned by G7-QTY. Normal Add Bottom Bouncer centers on Mass + optional Quantity; commercial identification and notes remain optional descriptive metadata.

**Representative G7-COVERAGE-1H Bottom Bouncer record — working candidate field names:**

```js
{
    tackleItemId: "mt-bottom-bouncer-0001",
    schemaVersion: 1,
    recordRevision: 1,
    createdAt: "2026-09-10T14:55:00-05:00",
    updatedAt: "2026-09-10T14:55:00-05:00",

    tackleItemFamily: "bottomBouncer",
    tackleInventoryKind: "functionalPool",

    fccReferenceMappings: [
        {
            referenceDomain: "tackle",
            referenceId: "bottom-bouncer"
        }
    ],

    bottomBouncerCharacteristics: {
        bottomBouncerMass: {
            valueStatus: "known",
            amount: 2,
            unit: "oz"
        }
    },

    ownedQuantity: 2,

    descriptiveMetadata: {
        brand: null,
        manufacturer: null,
        productName: null,
        modelNumber: null,
        notes: null
    }
}
```

**G7-COVERAGE-1H checkpoint status: COMPLETE / APPROVED WITH REVISION ALLOWED.** Bottom Bouncer now has one bounded Version 1 `functionalPool` contract centered on nominal integrated Mass, explicit canonical mapping, ordinary optional quantity, no duplicate ordinary Weight ownership, and no speculative frame/modular-component schema. Exact production property names, modular-product support if later demonstrated, and any later fishing-relevant frame characteristic remain refinement allowed.

- **G7-COVERAGE-1I — Final Rig-Requirement Coverage Sweep: APPROVED / revision allowed.** The complete current Rig dataset was reconciled against the approved My Tackle family contracts and explicit mapping paths. The sweep found **29 distinct `tackleId` identities that are required by at least one current Rig**, and every one has a truthful Version 1 persistent My Tackle / temporary-non-owned representation path. Direct family coverage is: Float -> `fixed-bobber`, `slip-float`; Line Stop -> `bobber-stop`, `weight-peg`; Bead -> `stop-bead`, `bead`; Connector -> `barrel-swivel`, `three-way-swivel`, `split-ring`; Leader Material -> `leader-line`; Hook -> `hook`, `offset-worm-hook`, `wacky-hook`, `weighted-swimbait-hook`; ordinary Weight -> `split-shot`, `sliding-sinker`, `bullet-weight`, `drop-shot-weight`, `nail-weight`, `fixed-sinker`, `ringed-sinker`; Jighead -> `jighead`, `ned-jighead`, `shaky-head-jighead`, `tube-jighead`; Spinner Harness -> `spinner-harness`; Bottom Bouncer -> `bottom-bouncer`. The remaining generic requirements `bait` and `soft-plastic` are truthfully represented through the approved Lure/Bait family and require the separately assigned G7-XMAP Canonical Requirement Satisfaction Bridge for automatic broader-Tackle satisfaction rather than new duplicate My Tackle families.
- **G7-COVERAGE-1I — Migration/substitution disposition: APPROVED / revision allowed.** Planned canonical Reference Knowledge reconciliations `offset-worm-hook` -> `worm-hook`, `split-shot` -> `line-mounted-sinker`, and `fixed-sinker` + `ringed-sinker` -> `external-eye-sinker` do not create inventory-family gaps because the current requirements already have truthful family homes. A Convertible Fixed-or-Slip Float likewise remains a valid Float-family owned record; satisfying both `fixed-bobber` and `slip-float` without violating MT-1D's one-mapping-per-domain rule is a G7-XMAP bridge/substitution issue, not a new family requirement. No additional catch-all Terminal Hardware, generic Bait, generic Soft-Plastic, or other My Tackle family is justified by the current Rig requirement set.

**G7-COVERAGE checkpoint status: COMPLETE / APPROVED WITH REVISION ALLOWED.** G7-COVERAGE-1A through G7-COVERAGE-1I now provide complete Version 1 family coverage for every current required availability-bearing Rig `tackleId`. Preserve the completed family contracts unless a later specific dependency demonstrates a revision need.

## GATE-007 G7-XMAP Canonical Requirement Satisfaction Bridge Checkpoint

- **G7-XMAP-1A — Bridge authority + rule semantics: APPROVED / revision allowed.** Canonical requirement-satisfaction facts are Layer-1 Reference Knowledge owned by the cross-domain relationship architecture under D056 rather than by My Tackle/User Knowledge or Recommendation ranking. The relationship answers whether an explicitly mapped canonical source concept may truthfully fulfill another canonical requirement. `09-RELATIONSHIPS.md` is the semantic owner for this relationship family; it remains distinct from intrinsic Compatibility because Compatibility means two concepts may be used together, while Requirement Satisfaction means one concept may fulfill another requirement.
- **G7-XMAP-1A — Source-mapping boundary: APPROVED / revision allowed.** An owned or temporary/current-availability entry must first carry an explicit valid MT-1C/D canonical source mapping. The bridge may then establish an additional canonical requirement without forcing redundant user-authored mappings. MT-1D remains unchanged at most one mapping per canonical domain per owned record, and no bridge rule creates, changes, or persists a My Tackle mapping.
- **G7-XMAP-1A — Directionality + closure semantics: APPROVED / revision allowed.** Requirement-satisfaction rules are positive, directional allow-rules. A source -> target rule does not imply the reverse, and Version 1 does not infer transitive closure from chains of rules. Every satisfaction edge used by automation must therefore be explicitly approved. Absence of a rule means the bridge cannot establish satisfaction; Version 1 does not require a combinatorial registry of negative pairs.
- **G7-XMAP-1A — Qualified-rule support: APPROVED / revision allowed.** Version 1 supports both unconditional canonical-to-canonical satisfaction and qualified satisfaction where an approved fishing-relevant My Tackle family characteristic is required in addition to the explicit canonical source mapping. The universal rule remains Reference Knowledge while the actual characteristic value remains User Knowledge. This is the approved mechanism for cases such as a Convertible Fixed-or-Slip Float satisfying the alternate float requirement without adding a second Tackle-domain mapping or inventing a duplicate canonical identity.
- **G7-XMAP-1A — Matching/ranking boundary: APPROVED / revision allowed.** The bridge establishes canonical functional eligibility only. Applicable hard family constraints still apply under CA-4, and Exact/Preferred versus Usable Functional classification plus later Recommendation ranking/optimization remain derived Recommendation behavior rather than properties of the satisfaction relationship. A bridge edge therefore never guarantees preferred status.
- **G7-XMAP-1A — No heuristic inference: APPROVED / revision allowed.** FCC must never derive satisfaction from names, aliases, category, `relatedTackleIds[]`, item-family labels, commercial metadata, free text, or superficial physical similarity. Existing related-component/reference metadata may inform human evaluation of a proposed edge but is not itself a satisfaction rule. Selected ambiguous non-substitution guardrails may remain explicit in governing family contracts/validation without creating universal negative-edge storage.

**G7-XMAP-1A checkpoint status: COMPLETE / APPROVED WITH REVISION ALLOWED.** Bridge ownership and rule semantics are settled without changing MT-1D or duplicating universal semantics into User Knowledge.

- **G7-XMAP-1B — Cross-domain Lure/Bait -> broader Tackle edge set: APPROVED / revision allowed.** Version 1 approves exactly eight unconditional cross-domain satisfaction rules: `lure-bait:stick-worm` -> `tackle:soft-plastic`; `lure-bait:craw` -> `tackle:soft-plastic`; `lure-bait:creature-bait` -> `tackle:soft-plastic`; `lure-bait:paddle-tail-swimbait` -> `tackle:soft-plastic`; `lure-bait:tube` -> `tackle:soft-plastic`; `lure-bait:minnow` -> `tackle:bait`; `lure-bait:nightcrawler` -> `tackle:bait`; and `lure-bait:cricket` -> `tackle:bait`. These are eight explicit identity-to-identity allow-rules, not category inference.
- **G7-XMAP-1B — Specific Tackle -> broader Tackle edge set: APPROVED / revision allowed.** Version 1 approves exactly three unconditional same-domain rules: `tackle:ned-jighead` -> `tackle:jighead`; `tackle:shaky-head-jighead` -> `tackle:jighead`; and `tackle:tube-jighead` -> `tackle:jighead`. The reverse direction is not implied, and the edge establishes functional eligibility only; applicable family constraints remain controlling under CA-4.
- **G7-XMAP-1B — Qualified Convertible Float edge set: APPROVED / revision allowed.** Version 1 approves two separately stored directional rules: `tackle:fixed-bobber` -> `tackle:slip-float` when the effectively available owned/temporary item is governed by the Float family and its approved Operating Mode is **Convertible Fixed-or-Slip**; and `tackle:slip-float` -> `tackle:fixed-bobber` under that same qualifying family characteristic. Fixed-only or Slip-only Floats do not gain alternate satisfaction, and Pattern/Form never proves Operating Mode. Serialized qualification semantics are now settled by G7-XMAP-1C; exact routine implementation property naming remains refinement allowed.
- **G7-XMAP-1B — Deliberate non-substitution boundaries: APPROVED / revision allowed.** `tackle:bait` and `tackle:soft-plastic` remain sibling requirement semantics for Version 1 despite the current legacy `bait` description being broader than the approved bridge behavior; the five approved soft-plastic Lure/Bait identities therefore do **not** also satisfy `tackle:bait`. Spinnerbait, Crankbait, Jerkbait, Inline Spinner, and Spoon do not satisfy generic `bait` or `soft-plastic`; `lure-bait:inline-spinner` does not satisfy legacy `tackle:inline-spinner` merely because the names match. Version 1 deliberately approves **no** specialized-Hook -> generic-`hook` satisfaction edges: `worm-hook`, `wacky-hook`, and `weighted-swimbait-hook` do not automatically broaden to generic `hook`, and the existing worm-hook/weighted-swimbait-hook non-substitution remains controlling. Same-family identity also does not imply substitution for Bobber Stop/Weight Peg, Stop Bead/general Bead, Snap Swivel or Duo-Lock Snap/Barrel Swivel, or distinct Weight concepts. Integrated Hook/Jighead/Float/Bottom-Bouncer/Spinner-Harness constituents never decompose into separate satisfaction of embedded Hook, ordinary Weight, Bead, Connector, Leader, or Float requirements. Planned canonical reconciliations `offset-worm-hook` -> `worm-hook`, `split-shot` -> `line-mounted-sinker`, and `fixed-sinker` + `ringed-sinker` -> `external-eye-sinker` remain Reference migrations, not permanent satisfaction edges. No negative-edge registry is created.

**G7-XMAP-1B checkpoint status: COMPLETE / APPROVED WITH REVISION ALLOWED.** The approved Version 1 bridge inventory is exactly **13 positive directional rules: 8 unconditional Lure/Bait -> Tackle + 3 unconditional specialized-Jighead -> generic-Jighead + 2 qualified Convertible-Float directions**. There are no Hook -> generic-Hook rules, no soft-plastic -> generic-bait broadening, no heuristic/category/family inference, no transitive closure, and no migration-as-satisfaction rules.

- **G7-XMAP-1C — Production registry + record shape: APPROVED / revision allowed.** Canonical Requirement Satisfaction remains a separate Layer-1 Reference Knowledge registry from intrinsic Compatibility. The working production owner is `data/canonical-requirement-satisfaction.js` with exported collection `CANONICAL_REQUIREMENT_SATISFACTION_RELATIONSHIPS`. Every Version 1 record uses the common ordered fields `id`, `relationshipType`, `sourceType`, `sourceId`, `targetType`, `targetId`, `qualification`, `createdVersion`, `lastModifiedVersion`, and `isActive`. `relationshipType` is `canonical-requirement-satisfaction`; Version 1 source types are `lure-bait` or `tackle`, and the target type is `tackle`. Exact release-version strings and routine implementation naming refinements remain allowed without changing these semantics.
- **G7-XMAP-1C — Qualified-rule serialization: APPROVED / revision allowed.** The 11 unconditional records carry `qualification: null`. The two Convertible Float records use one deliberately bounded qualification form equivalent to `{ type: "item-family-characteristic-equals", itemFamily: "float", characteristic: "operating-mode", value: "convertible-fixed-or-slip" }`. The characteristic token is a semantic identifier, not an arbitrary JavaScript/property path. Version 1 does not create a generalized predicate/operator rules engine; future ranges, set-membership, compound predicates, or other qualifier types require explicit architecture approval.
- **G7-XMAP-1C — Deterministic identity + ordering: APPROVED / revision allowed.** Relationship IDs are directional and deterministically encode the participant tuple as `canonical-requirement-satisfaction-<sourceType>-<sourceId>-to-<targetType>-<targetId>`. Qualification is not part of relationship identity. At most one record may exist for an exact directional source/target tuple. Reverse-direction records are valid only when independently authored, so the two approved Convertible Float directions coexist without implying symmetry. Registry order is lexicographic by `id` and carries no Recommendation priority or ranking meaning.
- **G7-XMAP-1C — Runtime application: APPROVED / revision allowed.** Matching first evaluates the available item's explicit valid MT-1C/D canonical mapping directly. The bridge is consulted only for an additional target requirement. Bridge evaluation is strictly one hop: a bridge-derived target never becomes a new source mapping and rules never recurse or form transitive closure. An unconditional edge may establish bridge eligibility when source/target/reference lifecycle checks pass. A qualified edge additionally requires the actual effective owned/temporary item to positively establish the approved family characteristic. Custom, Unknown, missing, descriptive, or inferred characteristic data cannot prove the qualifier. CA-4 hard family constraints and downstream Exact/Preferred versus Usable classification remain separate.
- **G7-XMAP-1C — Activation + integrity validation: APPROVED / revision allowed.** A rule is runtime-eligible only when the relationship is active, its source and target resolve to active canonical entities of the declared types, the available item carries the explicit valid source mapping, any qualification is positively established, and applicable CA-4 hard constraints pass. Validation is integrated into the existing `tools/validate_repository_integrity.js`; no competing relationship validator is created. Version 1 integrity validation hard-fails on any count other than 13, missing approved IDs, unapproved extras, duplicate IDs or directional tuples, malformed deterministic IDs, incorrect field order/types, unresolved or inactive participants, inactive records in the locked V1 set, self-satisfaction, invalid/misplaced qualification, Recommendation scoring/ranking fields, negative-edge records, prohibited Hook/general-bait broadening, or migration-as-satisfaction edges. The validator's expected 13-ID set is a validation assertion; the runtime registry remains the canonical owner.

**G7-XMAP-1C checkpoint status: COMPLETE / APPROVED WITH REVISION ALLOWED. G7-XMAP semantic design is COMPLETE; production implementation is IMPLEMENTED / APPROVED / VERIFIED at `31547b18f8576f0a94631cd65ffddd4113c9a6b6`; Repository Integrity #119 and GitHub Pages #607 passed.** The approved contract is one separate deterministic Reference registry, exactly 13 Version 1 directional rules, one bounded Float qualification form, one-hop runtime evaluation, and exact authored-set enforcement in the existing repository-integrity validator. No generalized rule engine, arbitrary property-path evaluation, inferred symmetry, transitive closure, negative rules, or Recommendation scoring is approved.

## GATE-007 G7-QTY Quantity Sufficiency + Depletion Checkpoint

- **G7-QTY-1A — Quantity sufficiency states: APPROVED / revision allowed.** Quantity sufficiency is derived from **effective confirmed current availability**, not automatically from persistent `ownedQuantity`. Each availability-bearing required quantity resolves to exactly one derived result: **Known Sufficient**, **Known Insufficient**, or **Sufficiency Unknown**. Known Insufficient is non-executable. Sufficiency Unknown is distinct from missing tackle and means matching tackle is present but quantity still requires confirmation.
- **G7-QTY-1A — Unknown presence + bounded minimum confirmation: APPROVED / revision allowed.** Confirmed quantity-unknown presence establishes at least one usable unit/presence. Therefore required quantity 1 with confirmed unknown presence is Known Sufficient; required quantity greater than one with only unknown presence is Sufficiency Unknown. The user may explicitly confirm **at least N available** without maintaining an exact stock total; that bounded minimum evidence may establish Known Sufficient.
- **G7-QTY-1A — Physical-item and presence-oriented contribution: APPROVED / revision allowed.** Each effectively available `physicalItem` contributes exactly one, and multiple distinct compatible physical records may jointly satisfy a requirement greater than one. Presence-oriented families such as Leader Material may satisfy quantity 1 through usable presence without spool-footage, material-length, or continuous-consumption accounting.
- **G7-QTY-1A — Functional-pool depletion semantics: APPROVED / revision allowed.** For quantity-bearing `functionalPool` records, omitted/unknown quantity means exact stock is unknown, a positive quantity means known remaining stock, and **zero means explicitly known depleted**. Zero is not Unknown. Depletion is derived from zero rather than stored as a duplicate boolean/status authority. A depleted pool contributes no effective availability, remains retained for mapping/family characteristics/organization/restock unless explicitly deleted, and may later be restocked to positive-known or unknown-but-present state.
- **G7-QTY-1A — No silent decrement or invented arithmetic: APPROVED / revision allowed.** FCC never silently decrements inventory because a Rig was selected/built, a Recommendation was used, a Catch was logged, or fishing activity occurred. Quantity changes require an explicit inventory/current-availability action. Known arithmetic may be used; unknown arithmetic stays unknown; contradictory evidence surfaces as conflict. Unknown quantities are never invented for allocation, matching, or Recommendation.
- **G7-QTY-1A — Allocation contradiction boundary: APPROVED / revision allowed.** A persistent functional pool known at zero cannot truthfully coexist with positive active Location allocations without reconciliation. This is a derived conflict eligible for G7-ATTN diagnostics rather than silent repair.

**G7-QTY-1A checkpoint status: COMPLETE / APPROVED WITH REVISION ALLOWED. G7-QTY semantic design is COMPLETE; production implementation is IMPLEMENTED / APPROVED / VERIFIED at `7d8ef686d7363cdbf9d40e94344edfbd2648a38d`; Repository Integrity #120 and GitHub Pages #608 passed.** The production runtime is `availability-quantity.js`, loaded from `index.html`, with G7-QTY contract enforcement integrated into `tools/validate_repository_integrity.js`.

## GATE-007 G7-ATTN Derived Needs Attention Diagnostic Checkpoint

- **G7-ATTN-1A — Derived authority + no parallel status: APPROVED / revision allowed.** `Needs Attention` is a reproducible derived diagnostic surface, not a persisted My Tackle/Setup/current-context status authority. FCC does not persist duplicate fields such as `needsAttention`, `attentionStatus`, `isBroken`, or `automationReady`. A performance cache is allowed only when it remains reproducible from authoritative inputs and is invalidated when those inputs change.
- **G7-ATTN-1A — Diagnostic scope: APPROVED / revision allowed.** Each diagnostic identifies the affected subject, the reason the condition exists, its automation/organization impact, its derived attention class, and an applicable repair direction. A diagnostic applies only to the capability affected by the underlying condition and must not silently label an otherwise legitimate ownership record globally bad.
- **G7-ATTN-1A — Attention classes: APPROVED / revision allowed.** Version 1 uses three derived classes: **Advisory** for valid states worth surfacing but not inherently broken; **Automation Blocker** for valid or preserved User Knowledge that cannot establish proof required by a specific automated capability; and **Conflict** where authoritative inputs contradict one another or cannot simultaneously be true. These classes are derived presentation/decision aids, not persisted record statuses.
- **G7-ATTN-1A — Unassigned ownership: APPROVED / revision allowed.** Valid unassigned ownership or a known unassigned pool remainder may be surfaced as an **Advisory** organizational prompt. Unassigned ownership remains legitimate under LOCATION-1A and does not independently block direct My Tackle current-availability selection.
- **G7-ATTN-1A — Unmapped or unavailable canonical mapping: APPROVED / revision allowed.** Legitimate unmapped ownership may remain intentionally `Map Later`, but it is an **Automation Blocker** for canonical Rig/Recommendation matching until an explicit valid mapping exists. A mapping to missing, inactive, retired, or otherwise automation-invalid Reference Knowledge likewise preserves ownership but blocks automated satisfaction through that mapping. G7-REFS owns actual reference migration/reconciliation mechanics; G7-ATTN diagnoses and explains the condition.
- **G7-ATTN-1A — Required structure versus valid Unknown: APPROVED / revision allowed.** Missing, malformed, or invalid structure that an approved family contract actually requires is an **Automation Blocker / data-integrity defect**. An explicit `Unknown` value that the family contract permits remains valid User Knowledge and must not be reclassified as structural corruption merely because more information would improve matching.
- **G7-ATTN-1A — Fishing Setup diagnostics: APPROVED / revision allowed.** Missing/broken Rod or Reel references, context-excluded required equipment, known incompatible Rod/Reel pairing, or another known hard Setup/configuration conflict are **Automation Blockers** for Setup-level automation while the underlying truthful Setup/equipment knowledge is preserved. An **Unverified** Setup is not automatically a defect merely because optional knowledge is absent; it matters only where a specific automated decision requires proof that is unavailable.
- **G7-ATTN-1A — Allocation/quantity contradictions: APPROVED / revision allowed.** Known Location allocations exceeding known owned quantity, a known-zero/depleted pool coexisting with positive active Location allocations, or equivalent quantity/allocation contradictions are **Conflicts**. FCC must not alter ownership, Location quantities, manufacture a remainder, or silently choose which value is correct.
- **G7-ATTN-1A — Current-context configuration contradiction: APPROVED / revision allowed.** Mutually contradictory known current-context facts, such as selected Setups sharing one physical Reel while asserting conflicting known configured-main-line states, are **Conflicts** requiring explicit resolution. G7-ATTN diagnoses the contradiction; G7-CTX separately owns visibility when selected persistent sources materially change after confirmation.
- **G7-ATTN-1A — Legitimate states excluded from automatic Needs Attention: APPROVED / revision allowed.** Explicit `Unknown`, deliberate `Map Later`, deliberate `Assign Later`, valid unassigned ownership, quantity-unknown presence, **Sufficiency Unknown**, known depleted/zero inventory, uncaptured optional information, and an Unverified Setup with no currently required proof are not automatically defects. A depleted state may support later restock UX but becomes a G7-ATTN Conflict only when another authoritative fact contradicts it.
- **G7-ATTN-1A — Authoring + lifecycle boundary: APPROVED / revision allowed.** Add/import authoring must make deliberate `Assign Later` and `Map Later` outcomes explicit rather than producing silent omissions. Derived diagnostics automatically clear or change class when the underlying authoritative cause resolves; users do not separately edit a diagnostic status. A consolidated Needs Attention view/badge may aggregate current diagnostics, but it remains a view over derived results.
- **G7-ATTN-1A — Ownership boundaries: APPROVED / revision allowed.** G7-ATTN owns detection, derived classification, explanation, affected capability, and repair direction. It does not own Merge/Split/reference-migration repair mechanics (G7-REFS), post-confirmation selected-source change visibility (G7-CTX), Recommendation ranking/optimization (GATE-004/D069), or a second persistent ownership/readiness authority.

**G7-ATTN-1A checkpoint status: COMPLETE / APPROVED WITH REVISION ALLOWED / PRODUCTION IMPLEMENTED / APPROVED / VERIFIED. Production landed at `841047202d19977af6a1af28f98245ca861f67b1`; Repository Integrity #121 and GitHub Pages #609 passed.**

## GATE-007 G7-REFS Merge/Split + Dependent-Reference Reconciliation Checkpoint

- **G7-REFS-1A — Reconciliation is part of the authoritative operation: APPROVED / revision allowed.** A Merge or Split is incomplete until every implemented dependent stable-ID relationship to the affected My Tackle record has been reconciled and validated, including Inventory Location membership/allocation, direct current-availability references, whole-item exclusions, source-specific current-context exceptions, explicit FCC Reference Knowledge mappings, and any later implemented User Knowledge dependency. FCC must not publish a partially reconciled authoritative state; provider transaction/batch mechanics remain implementation details.
- **G7-REFS-1A — Merge survivor + retirement: APPROVED / revision allowed.** A confirmed Merge designates one surviving authoritative My Tackle record. Absorbed records retire under UD-10 deletion/anti-resurrection semantics and retain only the minimum reconciliation metadata needed to identify the surviving replacement. Losslessly reconcilable dependent references rebind to the survivor. Stale edits to an absorbed record are not silently replayed onto the survivor.
- **G7-REFS-1A — Merge Location reconciliation: APPROVED / revision allowed.** Distinct Location memberships from merged pools are preserved under the survivor. When both pools occupy the same Location, known + known quantities sum; unknown + unknown remains quantity-unknown presence; known + unknown becomes quantity unknown unless the user explicitly confirms a truthful total. Normal LOCATION-1B reconciliation then reruns, and any contradiction surfaces through G7-ATTN rather than silent correction.
- **G7-REFS-1A — Merge current availability: APPROVED / revision allowed.** Direct current-availability references to either merged pool may rebind to the survivor. Duplicate surviving references collapse; known + known current amounts may sum, while any unknown contributing amount makes the merged current amount quantity-unknown unless explicitly confirmed. This does not mutate persistent ownership quantity.
- **G7-REFS-1A — Merge exclusions/exceptions: APPROVED / revision allowed.** Identical whole-item exclusions or source-specific exceptions may deduplicate when their meaning remains unchanged. An exclusion/exception that previously applied to only one absorbed pool must not silently expand to the survivor when that would newly affect inventory from the other pool; such ambiguity requires explicit reconciliation before Merge commits.
- **G7-REFS-1A — Split identity + quantity conservation: APPROVED / revision allowed.** One Split result retains the original stable My Tackle ID and additional results receive new IDs. Known owned quantity allocated among results must conserve the original known total. Unknown quantity remains unknown unless the user supplies truthful knowledge; FCC never clones, invents, or discards quantity merely to complete a Split.
- **G7-REFS-1A — Split Location reconciliation: APPROVED / revision allowed.** Known Location allocations must be explicitly distributed among resulting pools and conserve the original known membership quantity. Quantity-unknown Location presence is not automatically copied to every result; the Split workflow must explicitly determine which result or results remain present, which become Unassigned, or obtain sufficient quantity knowledge for truthful allocation.
- **G7-REFS-1A — Split current-availability reconciliation: APPROVED / revision allowed.** A whole-item exclusion of the original pool may propagate to every Split result, and a source-specific exception that removed the entire original contribution from a source may propagate to all applicable results for that same source. Positive direct current-availability presence/quantity cannot be copied across results because the prior fact does not identify which new subset is with the user; it must be explicitly reassigned/allocated before the Split commits.
- **G7-REFS-1A — Mapping reconciliation on Merge: APPROVED / revision allowed.** Same-domain/same-target mappings deduplicate. Mapped + unmapped requires explicit confirmation of the resulting mapping. Conflicting targets in the same domain require resolution before Merge. Different permitted domains may coexist only when the resulting record remains valid under MT-1D. FCC never silently chooses between conflicting canonical identities.
- **G7-REFS-1A — Mapping preservation on Split: APPROVED / revision allowed.** An explicit mapping asserted for the original pool may normally be inherited by each Split result as preservation of existing User Knowledge rather than new inference. If the Split purpose or resulting characteristics make a child mapping invalid/inappropriate, authoring must allow explicit change/removal before commit. FCC does not infer a replacement mapping from the new child attributes.
- **G7-REFS-1A — Canonical Reference migration: APPROVED / revision allowed.** Approved deterministic one-to-one or many-to-one Reference migrations may automatically rewrite explicit User Knowledge mappings because they preserve the user's mapping intent. Migrations must be versioned, deterministic, idempotent, handled behind the User Knowledge repository/migration boundary, and compatible with supported backup/restore migration. The planned `offset-worm-hook` -> `worm-hook`, `split-shot` -> `line-mounted-sinker`, and `fixed-sinker` / `ringed-sinker` -> `external-eye-sinker` changes are migrations, not G7-XMAP satisfaction relationships.
- **G7-REFS-1A — Ambiguous/retired mapping boundary: APPROVED / revision allowed.** A one-to-many migration, missing approved replacement, or otherwise ambiguous retired target is not guessed. FCC preserves ownership and enough stale mapping information to explain the issue, then surfaces a G7-ATTN Automation Blocker requiring explicit remapping. A mapping is not silently deleted merely because its Reference target retired.
- **G7-REFS-1A — UD-10 concurrency + anti-resurrection: APPROVED / revision allowed.** Reconciliation plans operate against current authoritative revisions. If any touched record or dependency changes before commit, a stale plan does not overwrite it; FCC reloads/re-evaluates and contradictory intentions require explicit resolution. Stale devices cannot recreate an absorbed record. A later stale reference to an absorbed ID may redirect to the survivor only when the redirect is lossless; otherwise it becomes a reconciliation conflict.
- **G7-REFS-1A — G7-ATTN boundary: APPROVED / revision allowed.** G7-REFS owns the repair/reconciliation mechanics. G7-ATTN owns the derived diagnostic for unresolved stale mappings, Split allocation ambiguity, unsafe current-context transfer, stale references to retired merged records, and post-reconciliation contradictions. Once the authoritative cause is resolved, the diagnostic clears derivatively.

**G7-REFS-1A checkpoint status: COMPLETE / APPROVED WITH REVISION ALLOWED / PRODUCTION IMPLEMENTED / APPROVED / VERIFIED. Production landed at `e4195431588b96f3785f84fa54beea490fdd15c8`; Repository Integrity #122 and GitHub Pages #610 passed.**

## GATE-007 G7-CTX Current-Context Source-Change Visibility Checkpoint

- **G7-CTX-1A — Live authoritative resolution remains controlling: APPROVED / revision allowed.** A confirmed **What I Have With Me Today** context continues resolving selected Inventory Locations, Fishing Setups, directly selected owned records, and their applicable dependencies against current authoritative User Knowledge. FCC does not freeze a second authoritative availability snapshot merely because the context was confirmed.
- **G7-CTX-1A — Bounded confirmation baseline: APPROVED / revision allowed.** At confirmation, FCC may retain enough source-observation metadata to determine whether a selected persistent source has materially changed afterward, such as stable source identity plus revision/change tokens. This metadata is provenance/change-detection support only; it does not copy Location contents, Setup contents, quantities, mappings, or flattened effective availability into a second authority.
- **G7-CTX-1A — Material-change boundary: APPROVED / revision allowed.** Source-change visibility is required only when a post-confirmation authoritative change can affect effective current availability, quantity sufficiency, canonical requirement satisfaction, Fishing Setup usability, source contribution/provenance, or another approved automation-relevant fact. Purely descriptive changes such as renaming a container, editing notes, or changing brand/model metadata do not independently trigger a current-context material-change notice.
- **G7-CTX-1A — Current truth applies immediately: APPROVED / revision allowed.** FCC recalculates effective availability from current authoritative inputs rather than continuing to use a stale confirmation-time result. When the result materially differs from the confirmation baseline, FCC surfaces a derived **changed since confirmation** notice that identifies the affected source and the meaningful consequence where derivable.
- **G7-CTX-1A — Explainable delta: APPROVED / revision allowed.** Source-change presentation should explain the material delta when the current data supports it, such as items added/removed, quantity becoming known/unknown/depleted, a selected Setup becoming incomplete/unusable, or a mapping change gaining/losing canonical satisfaction. The delta is derived/non-authoritative and may be recomputed.
- **G7-CTX-1A — No blanket reconfirmation: APPROVED / revision allowed.** A normal material source change does not invalidate the entire confirmed context when the user's selected Locations, Setups, direct additions, temporary additions, exclusions, and exceptions still preserve unambiguous intent. The user may explicitly acknowledge/review the updated source state, conceptually **Review Changes / Use Updated Contents**, which advances the source-change baseline without recreating the selections.
- **G7-CTX-1A — Reconfirmation/repair only when intent cannot be preserved safely: APPROVED / revision allowed.** Explicit resolution is required when a source/reference cannot be reconciled losslessly, Merge/Split leaves current-context allocation ambiguous, an exclusion/exception can no longer retain the same meaning, or contradictory current-context facts require resolution. Routine additions/removals inside a selected Location do not by themselves force blanket reconfirmation.
- **G7-CTX-1A — G7-REFS boundary: APPROVED / revision allowed.** G7-REFS owns lossless Merge/Split/reference-reconciliation mechanics. G7-CTX owns visibility that the confirmed context's resolved result changed; it does not duplicate repair logic.
- **G7-CTX-1A — G7-ATTN boundary: APPROVED / revision allowed.** A harmless source change is not automatically `Needs Attention`. If the change creates an actual Automation Blocker or Conflict, G7-ATTN supplies that derived diagnostic independently.
- **G7-CTX-1A — Recommendation-facing freshness: APPROVED / revision allowed.** Material source changes invalidate stale derived availability/Recommendation results that depended on the prior source state. FCC recomputes from current truth and may explain that the result changed because confirmed availability sources changed. Recommendation ranking/optimization remains GATE-004 / D069.
- **G7-CTX-1A — UD-10 cross-device behavior: APPROVED / revision allowed.** Source-change baseline/acknowledgment behavior participates in the shared revision-controlled current-context semantics. A stale device cannot silently acknowledge or overwrite newer context/source-change handling; normal UD-10 reconciliation applies.
- **G7-CTX-1A — Day-boundary freshness remains separate: APPROVED / revision allowed.** G7-CTX does not weaken the existing rule that prior-day availability is only a reusable candidate until explicitly reconfirmed.

**G7-CTX-1A checkpoint status: COMPLETE / APPROVED WITH REVISION ALLOWED / PRODUCTION IMPLEMENTED / APPROVED / VERIFIED.** Production landed at `7aab1bbbbfb6837efbb175d715f55f9146fdad39`; Repository Integrity #123 and GitHub Pages #611 passed.

**Exact GATE-007 resume:** continue production implementation with **G7-CTX — Current-Context Source-Change Visibility**.

## 2026-09-07 My Tackle / Recommendation Cross-Boundary Gap Audit — SEMANTIC GAP SET COMPLETE / IMPLEMENTATION CARRY-FORWARD

**Status:** This audit records requirements discovered while reviewing the approved My Tackle, Current Availability, Fishing Setup, Rig, Tackle, Lure/Bait, Compatibility, Conditions, and Technique contracts together. Every GATE-007 semantic row now has an approved disposition; the remaining carry-forward is production implementation. The audit itself did not create authority outside the explicit checkpoints below. Existing approved contracts remain controlling unless an assigned checkpoint explicitly revises them.

### GATE-007 — REQUIRED BEFORE MY TACKLE AVAILABILITY FOUNDATION MAY CLOSE

1. **Inventory Location containment + functional-pool allocation/source provenance — RESOLVED BY LOCATION-1A + LOCATION-1B / revision allowed.** LOCATION-1A approves acyclic parent/child containment, recursive selected-Location contribution, sibling-unique active names, distributed functional-pool membership, known or quantity-unknown per-Location presence, source-provenance during effective-availability resolution, source-specific current-context exceptions, protected deletion, and legitimate unassigned ownership. LOCATION-1B adds truthful allocation-total reconciliation plus physical-item movement and functional-pool reallocation semantics, including derived Unassigned remainder only when arithmetic is fully known, indeterminate completeness when quantities are unknown, and explicit allocation-conflict handling. Broader trip-planning/smart-packing hierarchy remains outside this gate.
2. **Direct functional-pool current-availability amount semantics — RESOLVED BY LOCATION-1A / revision allowed.** Directly selecting an owned `functionalPool` means known current amount when supplied or quantity-unknown presence otherwise; it never silently asserts that the entire persistent owned quantity is physically present. CA-2 is refined to preserve that distinction.
3. **Complete Rig-requirement inventory-family coverage — RESOLVED BY G7-COVERAGE-1I / revision allowed.** Every current required availability-bearing Rig `tackleId` now has a truthful Version 1 representation path. G7-COVERAGE-1A through G7-COVERAGE-1H establish the bounded family contracts, and G7-COVERAGE-1I confirms complete coverage across **29 distinct required `tackleId` identities**. `bait` and `soft-plastic` are represented through Lure/Bait and intentionally depend on G7-XMAP for broader-Tackle satisfaction rather than duplicate inventory families. Planned `worm-hook`, `line-mounted-sinker`, and `external-eye-sinker` Reference migrations, and Convertible Float multi-requirement behavior, are mapping/bridge concerns rather than family-coverage gaps. G7-COVERAGE is COMPLETE / APPROVED WITH REVISION ALLOWED.
4. **Canonical requirement satisfaction bridge — RESOLVED BY G7-XMAP-1A + G7-XMAP-1B + G7-XMAP-1C / IMPLEMENTED / APPROVED / VERIFIED.** G7-XMAP-1A assigns the bridge to Layer-1 Reference Knowledge and locks positive/directional/non-transitive semantics with explicit valid source mapping required. G7-XMAP-1B locks the exact Version 1 edge inventory at 13 rules with the approved bait/soft-plastic, Hook, embedded-constituent, and migration guardrails. G7-XMAP-1C locks a separate deterministic production registry, uniform record shape, one bounded Convertible-Float qualifier form, directional IDs, lexicographic non-ranking order, one-hop runtime evaluation, active-participant gating, and exact 13-rule enforcement in the existing repository-integrity validator. No semantic G7-XMAP decision remains open; production implementation landed at `31547b18f8576f0a94631cd65ffddd4113c9a6b6` with Repository Integrity #119 and GitHub Pages #607 passing.
5. **Quantity sufficiency + depletion — RESOLVED BY G7-QTY-1A / IMPLEMENTED / APPROVED / VERIFIED.** Effective confirmed availability resolves each required quantity as Known Sufficient, Known Insufficient, or Sufficiency Unknown. Confirmed quantity-unknown presence proves at least one; explicit at-least-N confirmation may prove sufficiency without exact stock totals. `physicalItem` records contribute one each. Presence-oriented families may satisfy quantity 1 without continuous consumption accounting. Positive pool quantity is known stock, omitted/unknown is exact-stock unknown, and zero is explicitly depleted; depletion is derived rather than a duplicate persisted status. Known insufficient and depleted inventory are non-executable. FCC never silently decrements inventory from normal fishing/recommendation activity and never invents unknown arithmetic; contradictions are surfaced for G7-ATTN rather than silently repaired.
6. **Derived My Tackle Needs Attention diagnostics — RESOLVED BY G7-ATTN-1A / IMPLEMENTED / APPROVED / VERIFIED.** Needs Attention is derived/non-authoritative and uses Advisory, Automation Blocker, and Conflict classifications scoped to the affected capability. Version 1 surfaces legitimate unassigned ownership as advisory; unmapped or unavailable canonical mappings, missing required family structure, and incomplete/hard-conflict Setups as bounded automation blockers; and allocation/quantity/current-context contradictions as conflicts. Valid explicit Unknown, Assign Later, Map Later, Sufficiency Unknown, known depletion, and uncaptured optional information are not automatically defects. Diagnostics clear when their authoritative cause resolves; no persisted parallel ownership/readiness status is created. Production implementation landed at `841047202d19977af6a1af28f98245ca861f67b1`; Repository Integrity #121 and GitHub Pages #609 passed.
7. **Merge/Split + dependent-reference reconciliation — RESOLVED BY G7-REFS-1A / IMPLEMENTED / APPROVED / VERIFIED.** Merge/Split reconciliation is part of the authoritative operation and covers Location membership/allocation, direct current availability, exclusions/exceptions, explicit Reference mappings, and other implemented stable-ID dependencies. Merge preserves one survivor and retires absorbed IDs under UD-10; Split preserves one original ID and creates new IDs without invented quantity/allocation. Lossless current-context/reference rewrites are allowed, semantic ambiguity requires explicit reconciliation, deterministic canonical-ID migrations preserve mapping intent, ambiguous retired targets become G7-ATTN blockers, and stale-device writes cannot resurrect retired records. Production implementation landed at `e4195431588b96f3785f84fa54beea490fdd15c8`; Repository Integrity #122 and GitHub Pages #610 passed.
8. **Current-context source-change visibility — RESOLVED BY G7-CTX-1A / IMPLEMENTED / APPROVED / VERIFIED.** Confirmed contexts continue live resolution against current authoritative sources. FCC records only bounded source-observation metadata needed to detect material post-confirmation changes, recomputes effective availability from current truth, and surfaces an explainable derived change notice when automation-relevant results differ. Routine material source changes do not force blanket reconfirmation when user intent remains unambiguous; explicit repair/reconfirmation is required only when intent cannot be preserved safely. G7-REFS retains reconciliation ownership, G7-ATTN retains blocker/conflict diagnostics, UD-10 governs cross-device revision behavior, and the existing prior-day reconfirmation rule remains unchanged. Production landed at `7aab1bbbbfb6837efbb175d715f55f9146fdad39`; Repository Integrity #123 and GitHub Pages #611 passed.

### GATE-004 — RECOMMENDATION SEMANTIC HANDOFF COMPLETE / APPROVED WITH REVISION ALLOWED

1. **G4-CAND-1A — Exact Recommendation candidate identity: RESOLVED / APPROVED.** Candidate identity is derived Decision Knowledge: active Rig + applicable Rig configuration + applicable canonical Lure/Bait + one compatible Technique + only normalized material Recommendation parameters. Fish/Condition context, rank/score/rationale, availability, My Tackle fulfillment, saved Setup identity, legality, and simplicity remain outside identity; three-way validity derives from pairwise Compatibility.
2. **G4-EQUIP-1A — Candidate executability boundary: RESOLVED / APPROVED.** Executability derives from effective confirmed current availability as Executable / Not Currently Executable / Executability Unconfirmed. Every required availability-bearing requirement needs a valid canonical satisfaction path, hard family constraints, and Known Sufficient quantity; overlapping specific Lure/Bait refines generic Rig demand rather than duplicating it. Only Executable candidates compete for Best Currently Available, and no confirmed availability means Best Overall only.
3. **G4-SIMPLE-1A — Beginner simplicity / experience behavior: RESOLVED / APPROVED.** Simplicity is a bounded near-tie ranking modifier after contextual suitability, using canonical Rig `difficulty` primarily and Core membership secondarily. It is not compatibility/eligibility, cannot rescue a materially weaker contextual candidate, does not infer Technique difficulty or hidden complexity from structure counts, and does not create a user skill profile.
4. **G4-LEGAL-1A — Legal/regulatory boundary: RESOLVED / APPROVED.** Recommendation consumes only authoritative structured regulatory constraints and never infers law from state/species/resource links or indirect context. Candidate legal states are Not Evaluated / No Known Blocking Constraint / Blocked by Known Constraint / Compliance Unconfirmed; current Regulations remains an official-resource gateway. Known prohibitions hard-block; known legal requirements may become hard candidate parameters whose current-equipment proof remains G4-EQUIP.
5. **G4-CTX-1A — Recommendation context freshness/session lifecycle: RESOLVED / APPROVED.** Recommendation Context is temporary device/session-local Decision-input state, not durable User Knowledge or a Trip/Outing. A run requires target Fish + waterbody + access/position; optional/Unknown refiners degrade gracefully. Draft edits require explicit Recommendation/update activation. Results are derived and stale when relevant context, knowledge, legal constraints, or availability changes. Same-session navigation preserves context; Fish changes retain environmental context and recompute. Material waterbody/access changes, explicit new-outing/reset, session loss, and calendar-day transition prevent silent carry-forward. Retained values may be explicitly reused/reconfirmed. Recommendation Context remains independent from What I Have With Me Today and is not cross-device synchronized in Version 1.

### UX-010 — EXISTING DEFERRED VISUAL-RECOGNITION OWNER

Hook/Weight style recognition remains assigned to **UX-010 / Version 1 Design Audit** after My Tackle and Recommendation UX are sufficiently settled. The 2026-09-07 semantic gap audit does not reopen that visual requirement or move it into GATE-007 production semantics.

### Closure / Resume Consequence

Every GATE-007 semantic gap item above has an explicit approved disposition. **LOCATION-1A, LOCATION-1B, G7-COVERAGE-1A through G7-COVERAGE-1I, G7-XMAP-1A through G7-XMAP-1C, G7-QTY-1A, G7-ATTN-1A, G7-REFS-1A, and G7-CTX-1A are COMPLETE / APPROVED WITH REVISION ALLOWED; G7-COVERAGE is CLOSED / PASS and the cross-boundary semantic gap set is COMPLETE. G7-XMAP production is implemented / approved / verified at `31547b18f8576f0a94631cd65ffddd4113c9a6b6`; G7-QTY at `7d8ef686d7363cdbf9d40e94344edfbd2648a38d`; G7-ATTN at `841047202d19977af6a1af28f98245ca861f67b1`; G7-REFS at `e4195431588b96f3785f84fa54beea490fdd15c8`; and G7-CTX at `7aab1bbbbfb6837efbb175d715f55f9146fdad39`. Repository Integrity #123 and GitHub Pages #611 passed for the final G7-CTX landing, and Drive Current is reconciled to the committed source. GATE-007 — My Tackle Availability Foundation is CLOSED / PASS. The five GATE-004 semantic handoff checkpoints G4-CAND-1A, G4-EQUIP-1A, G4-SIMPLE-1A, G4-LEGAL-1A, and G4-CTX-1A are now COMPLETE / APPROVED WITH REVISION ALLOWED. Exact resume after planning documentation closeout is the **Recommendation Decision Knowledge production model/runtime boundary**.**


## My Tackle Review Direction - APPROVED FOR REVIEW / NOT LOCKED

The 2026-08-31 planning discussion establishes the following direction for detailed My Tackle review. These points are approved for review and continuity, not as a production field schema.

**Terminology continuity:** `WSIT` means **What Should I Throw**. **What I Have With Me Today** is a current-availability input that What Should I Throw may consume and should be written out in full when ambiguity is possible.

- My Tackle should optimize first for simple beginner inventories while scaling to more complex organization.
- Functionally interchangeable owned items should resolve to a shared logical inventory pool for Recommendation and readiness purposes when their decision-relevant attributes match. Optional manufacturer/brand/model metadata must not fragment that functional identity.
- The review explicitly distinguishes **decision identity** from **descriptive identity**. For example, a candidate Hook pool may use `EWG + 3/0` as its fishing-decision identity while manufacturer, model, and notes remain descriptive. The exact Hook key is not locked until the family review.
- Add/Import flows should detect an equivalent existing functional pool and present the match before creating another pool. Where quantity applies, the leading review behavior is to offer adding the new quantity to the existing pool rather than silently creating a duplicate. Exact merge and confirmation semantics remain open.
- Each item family should define the minimum normalized fishing attributes that determine its pool identity. The exact keys must be reviewed family by family rather than imposed through one universal owned-item schema.
- Fast entry is a product requirement. Item-specific forms should prefer controlled values/dropdowns for decision-relevant attributes and allow `Other` / `Custom` when the canonical vocabulary is insufficient.
- Manufacturer/brand/model and similar commercial details are optional unless a demonstrated feature later requires them for a decision.
- Quantity is an optional but supported inventory attribute, especially for consumables. Accurate Recommendation matching must not depend on the user continuously decrementing every lost or consumed item. Quick `-` / `+` adjustment and optional low-stock thresholds were discussed as convenience candidates; zero-stock meaning, low-stock behavior, and notification behavior remain open.
- Reusable Inventory Locations under D013 are part of the review direction. Simple physical containers such as `My Tackle Box` may group owned pools and may later provide a low-friction current-availability input when the user brings that container. A default `My Tackle Box` plus a lightweight `New Location` flow were discussed as candidates, not locked UX.
- The beginner continuity test is one owned rod/reel plus one tackle box containing hooks, weights, floats, soft plastics, hard baits, and terminal tackle. FCC should test whether selecting the rod/reel and physical tackle box/location can establish **What I Have With Me Today** with only individual exceptions and temporary/borrowed additions. This test does not create a separate inventory authority or pre-approve a Loadout domain.
- Bulk import is a supported design goal. Structured imports should normalize values, detect/match existing pools, present the proposed merge/new-item result, and require explicit user approval before creating or changing persistent ownership. Screenshot/image extraction may feed candidate rows as a separate convenience layer but is not itself ownership authority.

## Approved Item-Family Review Decisions

The following are approved design constraints, not final production record schemas.

### Hooks

- Canonical Tackle remains the small reusable functional owner for truthful Rig/buildability semantics; finer hook style/size may remain My Tackle variant data.
- The same functional identity may contribute inventory from multiple physical locations; exact persistence shape is deferred.
- Selectors must allow custom/user-added styles and sizes without automatically creating canonical Reference Knowledge.
- Family-specific attributes govern identity; exact Hook vocabulary and custom-to-canonical mapping behavior remain deferred.

### Weights

- Canonical Tackle owns the broad functional type; My Tackle may retain subtype/style.
- Weight/size normally participates in functional matching and should accept the notation actually used for that weight family.
- Subtype is conditional. Material may be retained as fishing-relevant metadata but does not split functional identity by default.
- Custom types/values are valid User Knowledge. Equivalent weights may aggregate functionally across multiple locations.
- Rig buildability may accept a broad functional match while Recommendation separately prefers a more exact subtype/weight/material variant.

### Lure/Bait

- Canonical Lure/Bait remains broad; owned variants do not create canonical identities.
- My Tackle uses only family-meaningful attributes such as size, weight, color/pattern, depth, or action.
- Recommendation may reason at finer precision than canonical identity. Exact commercial color text may be retained while mapping separately to a future normalized fishing-use meaning.
- Unknown colors and custom lure/bait identities remain valid inventory even when Recommendation cannot yet interpret them.
- Normalization is justified only by demonstrated Recommendation value, not commercial-catalog completeness.
- Matching may distinguish exact/preferred match, usable functional match, and no usable match.

### Rod/Reel

- Rods and reels are independently owned durable items. A rod/reel pairing is a Fishing Setup relationship that references owned items rather than duplicating ownership.
- Functionally identical rods/reels remain distinct physical owned items; durable equipment is not quantity-pooled like consumable hooks or weights.
- Rod fishing identity should minimally support type, length, power, and action. Reel fishing identity should minimally support type and size/class.
- Secondary specifications such as rod line/lure ratings and reel gear ratio may be retained where useful but are not automatically required. Manufacturer/model remain optional descriptive identity.
- Setup compatibility should derive from fishing-relevant equipment attributes rather than commercial product pairings. A rod or reel may exist without a Fishing Setup, and setup membership does not change ownership.
- Persistent storage location and current availability are separate. Factory rod/reel combos do not require a separate ownership entity; the rod and reel remain independently addressable.
- Custom field values remain valid User Knowledge without automatically expanding Reference Knowledge.
- Exact Fishing Setup schema, compatibility algorithm, secondary-spec requirements, and location mechanics remain deferred.

Hooks, Weights, Lure/Bait, and Rod/Reel are now complete at the design-review level.

### Beginner Current-Availability Model — APPROVED

- Current availability is temporary derived state and never a second ownership authority.
- Selecting an Inventory Location contributes its currently assigned owned contents to the active availability context.
- Selecting a Fishing Setup contributes its referenced owned equipment without duplicating ownership.
- Loose owned items may be added individually; temporary/borrowed/shared/rented/loaned items may be added without creating ownership.
- Explicit availability exceptions may remove otherwise derived items for the current context without editing My Tackle or persistent storage location.
- Effective current availability = selected owned equipment/Setups + selected Inventory Location contents + loose owned additions + temporary additions - explicit exceptions.
- Persistent storage/location and current availability are separate dimensions.
- A separate durable Loadout domain is not justified for Version 1 at this point.
- Without a current-availability context, What Should I Throw may provide **Best Overall** but not **Best Currently Available**.
- Availability lifetime, reset/reuse behavior, and cross-device synchronization are settled at architecture level by UD-8/UD-10: explicit confirmation creates authoritative current context, same-day reuse is visible, prior-day state requires reconfirmation, Reset is revision-controlled, and authenticated devices share one semantic profile context. GATE-007 subsequently settled the Recommendation-facing source/reference/quantity/Setup/reconciliation/freshness mechanics recorded in the production contracts above.

Broader My Tackle product UI/persistence/import mechanics and non-Recommendation inventory conveniences remain later implementation work; they are not reopened merely because GATE-007 closed.

---

# Equipment and Consumables

The architecture recognizes that owned fishing items may have different lifecycle behavior.

Durable equipment may include rods, reels, nets, pliers, scales, tackle boxes, or watercraft. Consumables may include hooks, weights, line, soft plastics, jigheads, swivels, snaps, bobber stops, or beads.

These examples do not establish separate production schemas or require every owned item to use the same fields. Exact lifecycle modeling remains unresolved.

---

# Canonical Tackle Mapping

For owned items that satisfy supported Rig requirements, My Tackle should map to canonical Tackle whenever practical.

Conceptually:

```text
User/Profile
    -> Owned Item
        -> canonical Tackle concept
```

The exact field name and cardinality are not approved until the My Tackle schema gate.

This relationship must follow D056 single-owner semantics and must not duplicate canonical Tackle identity or Rig requirement data into the owned item unnecessarily.

---

# Ownership vs Current Availability

D069 requires the My Tackle prerequisite to support recommendation availability without collapsing **owned** into **currently available**. Persistent ownership remains authoritative User Knowledge changed only through explicit My Tackle workflows. Temporary/current availability may include owned tackle, selected Inventory Location contents, selected Fishing Setup equipment, loose owned additions, explicit exceptions, and temporary/non-owned tackle without changing ownership.

The approved UD-8 lifecycle treats **What I Have With Me Today** as temporary profile-scoped state with explicit freshness. It becomes authoritative only after user confirmation; prior-day state may be retained only as a reusable candidate until reconfirmed. The active authenticated context may synchronize across devices as one semantic profile context. Clearing/resetting the context never changes My Tackle ownership, Inventory Location organization, or Fishing Setup relationships. Availability derived from selected Locations/Setups resolves against their current persistent references rather than a frozen duplicate inventory snapshot. Exact conflict behavior belongs to UD-10, and the lifecycle remains refinement-allowed.

The scoped My Tackle Availability Foundation is complete when the application can authoritatively match the relevant canonical Tackle/Lure/Bait and fishing-relevant variants needed to determine recommendation executability. Full inventory-management breadth is not a prerequisite for What Should I Throw production.

# My Tackle Write Authority

Once implemented, My Tackle is the only persistent ownership source of truth.

Persistent ownership may be created or changed only through explicit ownership-management workflows such as Add Tackle, Edit Tackle, or Remove Tackle.

Other features may read ownership but may not silently create or modify it. This includes:

- Rig Readiness,
- Search,
- Recommendations,
- prior readiness checkmarks,
- borrowed tackle,
- inferred usage,
- background inference.

---

# Rig Readiness Integration

Rig Readiness answers whether the current Rig can be built with owned or temporarily available tackle.

When My Tackle becomes authoritative:

```text
Rig.componentRequirements[].tackleId
    -> canonical Tackle
    -> My Tackle owned-item mapping
```

Owned required types may satisfy the Rig automatically. A missing item may be marked temporarily available for the current build/session without creating persistent ownership.

Permanent principle:

> **Readiness answers buildability first; optimization comes later.**

---

# Transitional Readiness State

Current local readiness selections remain transitional application state.

They do not prove maintained ownership and therefore must not be treated as My Tackle records. A future implementation may preserve temporary availability separately if needed, but it must not become a second persistent ownership database.

---

# Fishing Setups — Production Contract Complete

Fishing Setup is a completed GATE-007 production semantic contract. **SETUP-1A through SETUP-1D are COMPLETE / APPROVED WITH REVISION ALLOWED.** SETUP-1A establishes one independently persisted profile-owned Setup record with stable identity, required descriptive Setup name, exactly one stable owned-Rod reference, exactly one stable owned-Reel reference, optional notes, no copied ownership/specification data, and no intentionally partial persisted Setup. Referenced ownership deletion leaves an unresolved/broken Setup until explicit repair or deletion rather than cascading or silently substituting equipment. SETUP-1B derives base Rod/Reel type compatibility from current referenced Rod/Reel Type knowledge, permits Compatible/Incompatible/Unverified results, requires explicit Save Anyway for known incompatible pairings, and does not persist derived compatibility or infer it from commercial/secondary metadata. SETUP-1C supports optional Setup-specific configured main-line knowledge with Line Type plus optional Breaking Strength/Diameter, keeps strength and diameter independent, derives Rod Line Rating checks and directly comparable Reel capacity guidance without treating missing information as incompatibility, and leaves backing/leader/remaining-spool-length tracking outside the Version 1 core Setup line record. SETUP-1D clarifies that this is saved Setup configuration rather than a global instantaneous spool assertion, derives selected-Setup availability/usability without duplicating ownership, requires explicit resolution of contradictory same-Reel configured-line claims, and adds no speculative purpose/species/technique/status fields.

Exact field names, derived labels, and conflict-resolution UI remain revision allowed. Inventory Location and the remaining GATE-007 contracts were subsequently completed in the same closed foundation; this sentence no longer defines an active next step.

---

# Inventory Matching

Inventory matching should use canonical functional relationships when exact commercial-product identity is unnecessary.

The approved-for-review direction is to match owned inventory through logical functional pools whose identity is defined by the minimum normalized fishing attributes that materially affect FCC decisions. Descriptive commercial metadata may coexist with a pool but must not create a separate Recommendation identity by itself.

Size/style/variant-aware compatibility should be introduced where it materially determines buildability or Recommendation executability. Exact pool identity keys remain unresolved until each item family is reviewed.

---

# Shopping Boundary

Future shopping support may consume missing ownership/readiness information. It does not own persistent inventory and may not silently add purchases to My Tackle.

Any future purchase-to-inventory workflow must require an explicit user ownership action.

---

# User Data Safety

My Tackle is User Knowledge.

User-entered and imported text is untrusted by default and should render through safe DOM APIs such as `textContent`. User-controlled strings must not be concatenated directly into `innerHTML`.

---

# Implementation Gate

GATE-006 Settings / User Data Architecture and GATE-007 My Tackle Availability Foundation are CLOSED / PASS. The closed GATE-007 foundation settled the Recommendation-facing contracts required by D069: My Tackle family semantics, explicit canonical mapping/satisfaction, current-availability composition, quantity sufficiency, Fishing Setup contribution/usability, Inventory Location allocation semantics, derived diagnostics, dependent-reference reconciliation, and source-change freshness. GATE-004 What Should I Throw is now the active product gate.

Broader authoritative My Tackle product persistence/UI, ownership-management workflows, import/export UX, and non-Recommendation inventory conveniences remain later scoped implementation work and must continue to obey the settled User Knowledge architecture and family contracts. GATE-004 must consume the closed foundation without creating a second ownership, availability, compatibility, or inventory authority.

---

# Future Enhancements

Potential later capabilities include commercial Product Definitions, barcode scanning, purchase history, warranty/maintenance tracking, size-aware readiness, user-owned imagery, and restocking assistance. These are feature candidates rather than current schema requirements.

---

# Related Documents

- 01-FOUNDATION.md
- 03-RIGS.md
- 05-TACKLE.md
- 07-USER-DATA.md
- 09-RELATIONSHIPS.md
- ../DECISIONS.md
