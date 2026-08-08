# Freshwater Fishing Companion

**Document:** DECISIONS.md  
**Version:** 0.2.0  
**Status:** Active  
**Last Updated:** 2026-08-07

# Purpose

This document records long-term architectural decisions.

# Decision Index

| ID | Title | Status |
|----|-------|--------|
| D001 | Local-First Architecture | Approved |
| D002 | Modular Data Model Documentation | Approved |
| D003 | Canonical Fishing Techniques | Approved |
| D004 | Canonical Conditions | Approved |
| D005 | Canonical Capabilities | Approved |
| D006 | Separate Equipment and Consumables | Approved |
| D007 | Canonical Recommendation Engine | Approved |
| D008 | Canonical Source Registry | Approved |
| D009 | Three-Layer Knowledge Architecture | Approved |
| D010 | Canonical Taxonomies | Approved |
| D011 | Canonical Glossary | Approved |
| D012 | Inventory-Centric Architecture | Approved |
| D013 | Canonical Inventory Locations | Approved |
| D014 | GitHub-Authoritative Replacement Workflow | Approved |
| D015 | Unified Field-Guide Visual System | Approved |
| D016 | Identification-Safe Fish Media | Approved |
| D017 | Verified Rig References and Text Instructions | Approved |
| D018 | Current Rig Media Policy | Approved |
| D019 | Tackle Reference Production Format | Approved |
| D020 | Integrated Rig Requirements and Readiness | Approved |
| D021 | Three-Interaction Field Workflow Target | Approved |
| D022 | Relevance-First Search and Connected Knowledge | Approved |
| D023 | Five Recommendation Tiers | Approved |
| D024 | Rig Assembly and Technique Presentation Ownership | Approved |
| D025 | Single-Owner Rig-to-Tackle Relationships | Approved |
| D026 | Canonical Tackle Identity and Display Names | Approved |
| D027 | Regional Rig Library and Core Rigs | Approved |
| D028 | My Tackle Ownership and Rig Readiness Authority | Approved |
| D029 | User Knowledge Rendering Trust Boundary | Approved |

# D001 – Local-First Architecture

The Companion stores user data locally and functions without requiring a cloud account.

# D002 – Modular Data Model Documentation

The data model is divided into focused documents instead of one large specification.

# D003 – Canonical Fishing Techniques

Fishing techniques are independent canonical entities referenced by rigs.

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

# D009 – Three-Layer Knowledge Architecture

The application is organized into Reference Knowledge, Decision Knowledge, and User Knowledge.

# D010 – Canonical Taxonomies

Controlled vocabularies are managed centrally.

# D011 – Canonical Glossary

Architectural terminology is defined once and reused consistently.

# D012 – Inventory-Centric Architecture

Inventory is the parent domain for equipment, consumables, setups, and related inventory features.

# D013 – Canonical Inventory Locations

Inventory locations use reusable location records.

# D014 – GitHub-Authoritative Replacement Workflow

GitHub `main` is authoritative for existing project files.

The latest GitHub version must be fetched before changing an existing source file.

Complete-file replacement is the default delivery method.

Coherent multi-file changes may be delivered as ZIP packages.

The user normally reviews and commits through GitHub Desktop.

GitHub must be verified after push.

Detailed procedure: `DEVELOPMENT_WORKFLOW.md`.

# D015 – Unified Field-Guide Visual System

Fish, Rigs, Tackle, Knots, Lures, and Techniques should share one modern field-guide visual language while using media formats appropriate to their accuracy requirements.

Detailed standards: `MEDIA_GUIDE.md`.

# D016 – Identification-Safe Fish Media

Fish identification is accuracy-critical.

Primary Fish identification media must use verified photography or verified scientific illustration.

AI-generated or approximate photorealistic Fish imagery must not be used as primary identification evidence.

# D017 – Verified Rig References and Text Instructions

Rig accuracy takes priority over having locally generated completed-rig imagery.

Rig detail pages use text build instructions as the authoritative assembly method. Completed-rig visuals are provided only when a technically verified image can be reused legally; otherwise the page links to verified external fishing references using `↗`.

Generated completed-rig images are not used by default because small orientation and connection errors can teach incorrect assembly.

The contextual `ⓘ` convention remains reserved for in-app information and must not be reused to imply external navigation.

# Reference-Link Semantics

External verified reference links use `↗` and open in a new tab. Contextual `ⓘ` remains in-app only.

# D018 – Current Rig Media Policy

Current Rig detail pages do not bundle generated completed-Rig or build-step imagery. Assembly is taught with canonical text steps. `What You Need` is text-first; selecting `Name ⓘ` opens the approved Tackle recognition image and contextual reference. Completed-Rig visual confirmation is provided by verified external references until a technically verified and legally reusable local Rig image is approved.

# D019 – Tackle Reference Production Format

The approved semi-photorealistic Tackle reference style uses optimized WebP with alpha transparency for production assets because it preserves realistic materials, highlights, and shading at very small file sizes while blending with application surfaces. Tackle reference assets must not bake a white or cream rectangular background into the image. SVG remains preferred for genuine vector diagrams, knots, icons, and instructional line art.

# D020 – Integrated Rig Requirements and Readiness

A Rig's component requirements and current ownership/readiness state are presented in one `What You Need` section. Each component remains text-first, uses `Name ⓘ` for identification help, and includes an inline availability control. The page calculates Ready/Missing status from the same component list. A separate Rig readiness page is not part of the primary workflow.

The existing lightweight local readiness state is transitional. D028 defines the approved My Tackle ownership model that will replace it.

# D021 – Three-Interaction Field Workflow Target

Common field workflows should remain within approximately three intentional interactions from a relevant entry point whenever practical. Intermediate pages should exist only when they provide distinct value. Contextual popovers are preferred for recognition help, and readiness should remain on the Rig detail page rather than requiring a separate navigation step.

# D022 – Relevance-First Search and Connected Knowledge

Search is relevance-first, while connected knowledge is breadth-first.

Search should identify the entity the user actually means rather than return every record that could contain or imply a text match. Strong search signals include canonical names, approved aliases, beginner terminology, scientific names where applicable, category, and deliberately indexed keywords or metadata. Incidental description text is not sufficient by itself to justify a primary result.

The interaction pattern is entity-agnostic:

```text
Find
-> Confirm the entity
-> Expose pertinent relationships
-> Move into related knowledge quickly
```

Major entities should act as gateways to useful adjacent knowledge. Examples include Fish to Rigs/Conditions/Lures/Techniques, Rig to Fish/Conditions/Components/Techniques, and Lure/Tackle to compatible uses and ownership context.

The current lowercase substring search is an acceptable temporary implementation for the small dataset, but it is not the permanent relevance standard. Lightweight deterministic relevance ranking should be introduced before dataset growth makes search noisy. Heavy fuzzy search, advanced typo tolerance, natural-language intent parsing, sophisticated confidence systems, and global cross-domain result dumps remain deferred until demonstrated by actual need.

Branded or commercial names such as `Rooster Tail` require a later product/concept-resolution decision and are not resolved by this decision alone.

# D023 – Five Recommendation Tiers

Product recommendations use five approved tiers:

1. **Best of the Best** — strongest overall choice; top quality/performance for the intended use.
2. **Best Bang for the Buck** — best balance of performance, durability, usability, and price; not necessarily the cheapest option.
3. **Best Budget** — lowest-cost option still worth recommending confidently.
4. **Best of the Rest** — legitimate, usable options that meet the need but are clearly outclassed by the preferred tiers because of meaningful compromises in performance, durability, ergonomics, versatility, or value.
5. **Avoid** — reserved for products or product designs with strong evidence of recurring material defects, meaningful failure modes, safety concerns, or materially unreliable performance.

Negative sentiment, isolated complaints, ordinary preference differences, mediocre value, or simply ranking below better options are not enough to justify `Avoid`.

# D024 – Rig Assembly and Technique Presentation Ownership

Rigs own physical assembly and rig-specific configuration. Rig `assemblySteps` are authoritative for constructing the Rig.

Techniques own reusable fishing presentation behavior such as drag, hop, shake, swim, twitch, cadence, rod action, reel action, and strike guidance.

Shared presentation instructions should live in Technique rather than being duplicated across Rigs. Rig-specific setup or usage notes may remain with the Rig when they do not generalize cleanly to a reusable Technique.

A practical ownership test is: if an instruction still makes sense with a different compatible Rig, it probably belongs to Technique; if it depends on the physical configuration of this Rig, it belongs to the Rig.

# D025 – Single-Owner Rig-to-Tackle Relationships

Rig `componentRequirements` is the authoritative source for Rig-to-Tackle usage relationships.

Tackle records do not independently maintain the inverse `rigIds` relationship. `Used In` and similar reverse navigation should be derived by scanning canonical Rig requirements.

Tackle may still own genuine Tackle-domain relationships such as related components. Bidirectional UI navigation does not require bidirectional canonical storage.

# D026 – Canonical Tackle Identity and Display Names

Canonical Tackle data owns Tackle identity and display name.

Rig component requirements reference Tackle by stable ID and own only Rig-specific usage context such as required/optional status, quantity, order, size/configuration guidance, assembly role, and setup notes.

Duplicated Rig component `name` values are non-authoritative and should be removed when the relevant data/rendering cleanup is implemented. The UI should resolve the component display name from canonical Tackle.

Context-specific display labels are deferred unless a demonstrated UX need appears.

# D027 – Regional Rig Library and Core Rigs

The initial canonical Rig library will contain 20 rigs selected for practical freshwater use in northeast Oklahoma and southwest Kansas.

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

A six-rig confidence-building subset is presented as **Core Rigs — Master These First**:

- Fixed Bobber Rig
- Basic Bottom Rig — especially useful for catfish
- Jighead + Soft Plastic
- Inline Spinner Setup
- Texas Rig
- Slip Bobber Rig

The product teaching principle is to help a newer angler become successful with a small set of broadly productive rigs before expanding the fishing arsenal.

Canonical relationship IDs must resolve to real canonical entities. Carolina Rig is approved for the near-term library, so the correct repair for the current `carolina-rig` forward reference is to create the canonical Carolina Rig record during the Rig expansion rather than treat the concept as unwanted. Production relationships should not depend on unresolved placeholder IDs once the expansion is implemented.

Rigs beyond the initial 20, specialized sonar-driven rigs, and niche tournament presentations remain deferred.

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
