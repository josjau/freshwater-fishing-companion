# Freshwater Fishing Companion — Decisions: Product and Domain Direction

**Document:** decisions/product.md  
**Document Status:** Approved  
**Role:** Canonical durable decision bodies for this ownership domain  
**Migration Baseline:** `af3bffb9995d56f8b9e47236bbadfa481d88cc34`  
**Last Updated:** 2026-08-27

# Purpose

This file owns the full decision bodies listed below. Decision IDs are permanent and remain stable across the documentation decomposition. `../DECISIONS.md` is the compact canonical index.

# D023 – Five Recommendation Tiers

Product recommendations use five approved tiers:

1. **Best of the Best** — strongest overall choice; top quality/performance for the intended use.
2. **Best Bang for the Buck** — best balance of performance, durability, usability, and price; not necessarily the cheapest option.
3. **Best Budget** — lowest-cost option still worth recommending confidently.
4. **Best of the Rest** — legitimate, usable options that meet the need but are clearly outclassed by the preferred tiers because of meaningful compromises in performance, durability, ergonomics, versatility, or value.
5. **Avoid** — reserved for products or product designs with strong evidence of recurring material defects, meaningful failure modes, safety concerns, or materially unreliable performance.

Negative sentiment, isolated complaints, ordinary preference differences, mediocre value, or simply ranking below better options are not enough to justify `Avoid`.
# D027 – Regional Rig Library and Core Rigs

The initial 20-Rig library was selected and validated using Northeast Oklahoma and Southwest Kansas as its original regional-practicality scope.

The approved initial library is:

1. Fixed Bobber Rig
2. Basic Bottom Rig
3. Jighead + Soft Plastic
4. Slip Bobber Rig
5. Inline Spinner Setup
6. Texas Rig
7. Weightless Soft-Plastic Rig
8. Wacky Rig
9. Ned Rig
10. Drop Shot Rig
11. Carolina Rig
12. Live-Bait Slip-Sinker Rig
13. Three-Way Rig
14. Neko Rig
15. Shaky Head Rig
16. Free Rig
17. Jika Rig
18. Punch / Pegged Texas Rig
19. Double-Jig Crappie Rig
20. Bottom-Bouncer / Spinner Rig

The existing 20 Rigs are **Validated / Finalized** and remain canonical.

A six-rig confidence-building Core subset is presented in the approved order:

- Fixed Bobber Rig
- Basic Bottom Rig — especially useful for catfish
- Jighead + Soft Plastic
- Inline Spinner Setup
- Texas Rig
- Slip Bobber Rig

The product teaching principle remains to help a newer angler become successful with a small set of broadly productive Rigs before expanding the fishing arsenal.

D043 confirms Jighead + Soft Plastic and Inline Spinner Setup are canonical ready-to-fish terminal setups within the Rig Guide. D046 owns the current learning-tier navigation and current Core presentation wording.

The Companion's forward content focus expanded to the Four-State region under D057. The additive Four-State Rig adequacy audit was completed during FISH-005 using the approved rule that valid existing Rigs remain canonical unless verified evidence demonstrates a true gap.

Audit result:

- all original 20 Rigs remain valid and canonical,
- one material beginner setup gap was identified,
- **Split-Shot Bait Rig** was approved and implemented as canonical Rig #21,
- the six-rig Core subset remains unchanged,
- no other material ordinary-Rig method gap remains open from the completed Four-State audit.

Split-Shot Bait Rig is a simple live/natural-bait setup using fixed split shot above the hook without a float, sliding sinker, swivel, or required leader system. Its purpose is beginner bait presentation for drifting, tight-lining, or lightly weighting bait near the bottom; it is not a generic bass-finesse catch-all.

Specialized targeting methods do not automatically become ordinary canonical Rigs. Gar rope-lure targeting and Paddlefish snagging remain outside the ordinary Version 1 Rig library unless a later explicit specialist-method decision reopens them.

**Current implementation status:** 21-Rig library Validated; Four-State Rig adequacy audit Complete; Split-Shot Bait Rig implemented.

**Future trigger:** reopen Rig adequacy only when later regional scope or verified method evidence demonstrates a materially missing ready-to-fish setup. Do not routinely repeat the completed FISH-005 audit.

**Canonical owners:** D027, D057, `data-model/03-RIGS.md`, and `workstreams/FISH-GUIDE-PHASE-0.md`.
# D043 – Ready-to-Fish Terminal Setups in the Rig Guide

The Rig Guide teaches complete, ready-to-fish terminal setups.

A canonical Rig may therefore be:

- an assembly of several terminal-tackle components,
- a weighted hook paired with a soft plastic,
- or a complete lure tied directly to the main line or leader.

The defining test is whether the record teaches a complete terminal configuration the angler can assemble or connect and then fish. The number of component records does not determine whether it belongs in the Rig Guide.

Under this rule:

- **Jighead + Soft Plastic** is a canonical Rig Guide record referencing `jighead` and `soft-plastic`.
- **Inline Spinner Setup** is a canonical Rig Guide record referencing `inline-spinner`.

Reusable retrieve and presentation behavior still belongs to Technique under D024. The Rig record owns physical setup, connection, component selection, setup-specific mistakes, and safety.
# D054 – Intermediate Rig Tier Membership

The complete Intermediate tier is:

1. Drop Shot Rig
2. Carolina Rig
3. Live-Bait Slip-Sinker Rig
4. Three-Way Rig

This tier is the deliberate difficulty step after Beginner+ because these Rigs introduce more precise leader management, bottom-contact tuning, multi-component relationships, or multi-branch rigging while remaining broadly practical for the approved regional library.

This historical tier decision remains part of the finalized 20-Rig library.
# D057 – Fish Guide Four-State Version 1 Scope

**Decision:** The Fish Guide Version 1 regional scope is Northeast Oklahoma, Southeast Kansas, Southwest Missouri, and Northwest Arkansas.

This Four-State direction is also the Companion's forward regional content focus. Existing validated domains retain their original validation context and are progressively reconciled rather than retroactively rewritten.

**Reason:** The region reflects the user's near-term fishing focus and has substantial freshwater species/method overlap with the earlier Northeast Oklahoma / Southwest Kansas scope, making progressive reconciliation more accurate and lower-risk than project-wide invalidation.

**Current implementation status:** Approved and active. The Fish Guide Version 1 milestone is closed: all 30 locked Fish have completed the Four-State production direction through Wave 4, with desktop/mobile approval and post-push repository-integrity validation.

**Future trigger:** apply Four-State adequacy as each domain is audited or materially modified. Significant rewiring requires explicit discussion before implementation.

**Canonical owners:** D057, Fish Phase 0 workstream, `PROJECT.md`, `ROADMAP.md`, and Fish data-model documentation.
# D066 – Nationwide Regulations Resource Gateway and Coverage Exception

**Decision:** Regulations becomes the next product milestone after the closed Fish Guide. The feature expands from the current Oklahoma-only external link into an in-app, state-first **U.S. State Fishing Resource Gateway** covering the **48 contiguous U.S. states** as its initial geographic scope.

The broader Regulations coverage is an explicit exception to the application's Four-State curated-content focus. It does not automatically expand Fish, Rig, recommendation, Technique, Tackle, or other curated knowledge domains beyond their separately approved regional scope.

The approved initial information architecture is:

```text
Dashboard
-> Regulations
-> Choose a State
-> State Fishing Regulations & Resources
-> official state destinations
```

The Dashboard name remains **Regulations**. The state landing page may organize official resources using a reusable taxonomy such as:

**Before You Fish**

- Fishing Regulations
- Licenses & Permits
- Seasons / Size / Bag-Limit resources
- Special Regulations / Special Waters
- Species-Specific Regulations
- Special Permits / Tags / Stamps

**Plan Your Trip**

- Where to Fish / Public Access
- Stocking Information
- Official Fishing Reports / Forecasts
- Aquatic Invasive Species information
- Other Official Resources

The taxonomy is normalized for user navigation, but individual states are not forced into identical agency structures. A state exposes only the official resources that actually exist and materially help an angler.

Freshwater Fishing Companion stores the **resource directory**, not the changing legal rule itself. The future state/resource model may own state identity, agency identity, resource category, title/description, authoritative URL, active state, and human verification/freshness metadata. It must not make the application the authoritative owner of daily limits, possession limits, minimum lengths, season dates, legal methods, waterbody exceptions, or comparable legal requirements during this milestone.

Regulatory/legal links must resolve to the responsible state authority or another clearly authoritative official government destination. The application does not provide its own legal interpretation. It may explain what a link is for, but the linked authority owns the actual rule.

No automatic GPS/location detection or persistent preferred-state selection is part of this milestone. State selection is manual. After D067's User Data architecture is implemented, a later preference may identify preferred states and prioritize them in the selector while preserving access to the full supported list.

The data/navigation design must not hard-code a 48-state structural ceiling; Alaska, Hawaii, territories, or other jurisdictions may be evaluated later as additive content without requiring a model rewrite.

**Reason:** The application's geographic focus expanded beyond Oklahoma, making a direct ODWC-only Regulations card inconsistent with the product. A nationwide official-resource gateway provides high practical value to anglers without requiring the Companion to maintain volatile legal data across dozens of jurisdictions. Linking to official authorities preserves freshness and legal ownership, dramatically reduces maintenance risk, and avoids creating false confidence from stale copied rules. Because this domain is resource navigation rather than curated fishing knowledge, nationwide coverage can expand without implying nationwide Fish/recommendation completeness.

The state-first design also creates a clean future personalization point: preferred states can later improve ordering without hiding other states or coupling Regulations to GPS/location privacy decisions prematurely.

**Implementation history:** D066 was implemented and the 48-state Regulations production milestone closed on 2026-08-27. Current implementation status belongs to `WORKING_STATE.md` / `ROADMAP.md`; this decision preserves the durable product boundary rather than acting as a mutable status owner.

**Future trigger:** reopen D066 only if the supported-jurisdiction scope, legal-resource ownership boundary, or state-first gateway architecture materially changes. Routine link/resource maintenance follows `EXTERNAL_REFERENCE_MAINTENANCE.md` and does not reopen this decision.

**Canonical owners:** D066 owns the durable product/architecture boundary; `ROADMAP.md` owns milestone order; `PROJECT.md` owns the geographic-scope exception; `ARCHITECTURE.md` owns source/knowledge boundaries; `EXTERNAL_REFERENCE_MAINTENANCE.md` owns ongoing link-maintenance policy; the closed Regulations workstream is retained under `archive/workstreams/regulations/`.

Permanent principle: **normalize navigation to official state resources; do not become the source of changing fishing law.**

# D069 – What Should I Throw Prerequisite Architecture and Phase 0 Handoff

**Decision:** What Should I Throw Phase 0 planning is complete. The feature will eventually answer what the angler should throw now using dual guidance: **Best Overall** is contextually strongest independent of availability, while **Best Currently Available** is the strongest executable recommendation from tackle actually available to the angler. Unavailable strong options remain visible with missing requirements; if one recommendation wins both states, the UI combines the states rather than duplicating the recommendation.

V1 requires a target Fish. Required current-context inputs are access/position and waterbody; observable context includes depth/zone, cover/structure, water clarity, and current where relevant. Season, light/sky, numeric water temperature, and bait preference are optional refiners. Unknown/Not sure is valid input absence and must degrade gracefully rather than block recommendations.

The feature composes canonical knowledge without duplicating it:

- Rig owns physical terminal assembly/configuration and **How to Rig It**.
- Lure/Bait owns canonical fishing-relevant lure/bait identity presented to Fish.
- Technique owns reusable presentation/retrieve/cadence/movement/strike guidance and **How to Fish It**.
- Conditions owns reusable environmental/situational vocabulary.
- Fish retains intrinsic species facts, including stable habitat/waterbody associations.
- Recommendation Decision Knowledge owns contextual selection, ranking, rationale, exact context-dependent parameters, and Fish/Condition-specific suitability.
- My Tackle/User Knowledge owns authoritative persistent ownership once implemented; temporary/current availability must not silently create ownership.

A distinct Lure/Bait Reference domain is approved. Tackle remains the owner of functional fishing equipment and Rig-building components; Lure/Bait owns bait/lure identities such as Stick Worm, Craw, Paddle-tail Swimbait, Spinnerbait, Crankbait, Jerkbait, Inline Spinner, Spoon, Minnow, Nightcrawler, and Cricket. Commercial brand/model/SKU identity is not canonical Lure/Bait Reference Knowledge. Exact recommended size, weight, color/pattern, and presentation remain Recommendation Decision Knowledge; sparse intrinsic subtype attributes may be added only when demonstrated by recommendation, compatibility, or inventory matching.

Conditions V1 uses a flat canonical vocabulary grouped by Waterbody, Access/Position, Depth/Zone, Cover/Structure, Water Clarity, Current, Season, and Light/Sky. `Not sure` is not a Condition entity. Water temperature remains optional numeric context. Fish intrinsic habitat/waterbody facts remain Fish-owned. Existing Rig `conditionTags[]` require explicit migration review; contextual “works well in” semantics move to Recommendation Decision Knowledge rather than being blindly converted into Condition relationships.

Technique V1 owns canonical reusable presentation behaviors rather than equipment setup, broad strategy, or Fish/Condition-specific advice. Reusable instructional attributes may include movement type, cadence, rod action, reel action, ordered instructions, strike cues, common mistakes, and beginner tips where demonstrated. Exact Technique vocabulary and optional fields may be refined during the production pilot without changing the semantic boundary.

Intrinsic compatibility is Reference Knowledge stored once in a typed Compatibility Relationship domain supporting Rig↔Lure/Bait, Rig↔Technique, and Lure/Bait↔Technique. Records identify relationship type and both canonical participants, use deterministic IDs, and contain lifecycle metadata but no ranking, weighting, confidence, Fish applicability, Condition applicability, or contextual suitability. Reverse navigation is derived. Missing compatibility during staged authoring is not automatically incompatibility until the relevant authored scope is declared complete. Three-way Rig/Lure/Technique combinations are derived from pairwise compatibility unless future evidence proves pairwise modeling insufficient.

**Prerequisite sequence:** The approved dependency order remains:

1. Conditions Production Foundation;
2. Lure/Bait Reference Production Foundation;
3. Techniques Production Foundation;
4. Settings / User Data Architecture Gate;
5. scoped My Tackle Availability Foundation;
6. What Should I Throw recommendation engine + UX pilot.

Steps 1-3 are **IMPLEMENTED / VALIDATED / CLOSED** through the completed Recommendation Prerequisites Foundation. Step 4, **Settings / User Data Architecture**, is the active gate. Steps 5-6 remain blocked until their predecessor gates close. Full Tackle Reference / Find Tackle, Catch Log, Global Search, and Favorites are not prerequisites unless later evidence demonstrates a direct dependency.

D069 refines the roadmap trigger in D067 without changing D067's permanent ownership principle: stable User Knowledge identity/persistence architecture precedes authoritative My Tackle, follows the completed Reference Knowledge prerequisites, and precedes What Should I Throw production.

**Phase 0 handoff history:** What Should I Throw Phase 0 closed as **PLANNING COMPLETE / PRODUCTION DEFERRED** and handed off first to Conditions Production Foundation. That handoff and the complete Conditions → Lure/Bait → Techniques prerequisite sequence are now complete. Exact ownership-versus-temporary/current-availability semantics remain for the active User Data/My Tackle gates.

**Current implementation status:** Steps 1-3 are complete on current production. The Settings / User Data Architecture gate is active under D067; UD-1 (persistent cross-device profile identity with record-oriented synchronization and refinement allowance) is locked, while the detailed identity/linking, synchronization-service, persistence, conflict, and lifecycle decisions remain under the active User Data workstream.

**Material-change rule:** implementation/pilot findings may refine labels and optional fields only where the governing domain contract explicitly allows it. A material change to these semantic boundaries or prerequisite order requires explicit reapproval and durable documentation update.

**Canonical owners:** D069; `ROADMAP.md`; `ARCHITECTURE.md`; `data-model/03B-CONDITIONS.md`; `data-model/03C-LURES-BAIT.md`; `data-model/03A-TECHNIQUES.md`; `data-model/09-RELATIONSHIPS.md`; `data-model/07-USER-DATA.md`; `data-model/05A-INVENTORY.md`; active state in `WORKING_STATE.md` / `ACTIVE-CHANGE-LEDGER.md`.
