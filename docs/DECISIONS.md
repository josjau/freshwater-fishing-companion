# Freshwater Fishing Companion

**Document:** DECISIONS.md  
**Document Revision:** 0.3.5
**Document Status:** Approved
**Last Updated:** 2026-08-09

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
| D030 | Clear Unavailable-Feature Affordance | Approved |
| D031 | Explicit External Destination CTA Semantics | Approved |
| D032 | Dashboard Regression Restoration | Approved |
| D033 | Archive Completed Package Artifacts | Approved |
| D034 | Production Asset Directory Discipline | Approved |
| D035 | Single Production-Supported Theme | Approved |
| D036 | Status and Version Semantics | Approved |
| D037 | Data-Model Documentation Structure | Approved |
| D038 | Repository Handoff Entrypoint | Approved |
| D039 | Documentation-Validated Closeout | Approved |
| D040 | No Unvalidated Build Transition | Approved |
| D041 | Cross-Segment Decision Capture and Parking | Approved |
| D042 | Core Learning Path Visual Emphasis | Approved |
| D043 | Ready-to-Fish Terminal Setups in the Rig Guide | Approved |
| D044 | Single-Owner Core Rig Membership | Approved |
| D045 | No Generated Rig Assembly Imagery | Approved |
| D046 | Rig Guide Learning-Tier Navigation | Approved |

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

When an external visual reference is used, prefer a stable direct visual destination or dedicated media/file page when available and appropriate, rather than forcing the user through a long article to locate the relevant Rig image. This is external reference navigation, not permission to hotlink third-party media into the production UI.

Generated completed-rig images are not used by default because small orientation and connection errors can teach incorrect assembly.

The contextual `ⓘ` convention remains reserved for in-app information and must not be reused to imply external navigation.

# Reference-Link Semantics

External verified reference links use `↗` and open in a new tab. Contextual `ⓘ` remains in-app only.

# D018 – Current Rig Media Policy

Current Rig detail pages do not bundle generated completed-Rig or build-step imagery. Assembly is taught with canonical text steps. `What You Need` is text-first; selecting `Name ⓘ` opens the approved Tackle recognition image and contextual reference. Completed-Rig visual confirmation is provided by a technically verified and legally reusable local image when one is approved; otherwise use the most direct stable verified external visual reference available, with a conventional authoritative article reference as fallback.

# D019 – Tackle Reference Production Format

The approved catalog-style Tackle reference treatment uses optimized WebP production assets. It may use precise vector-style illustration or semi-photorealistic rendering when the object geometry is anchored to an approved real-world or authoritative reference. Recognition quality, clean object edges, and technically faithful geometry take priority over mandatory alpha transparency.

Alpha transparency is optional rather than required. Use it only when the object can be isolated with clean edges at normal mobile display sizes. A restrained neutral background is acceptable when it materially improves edge quality and recognition.

The active production set uses 640 × 440 neutral-background rasterized illustrations without alpha transparency or artificial cast shadows.

Tackle reference assets must not contain artificial baked-in drop shadows or other effects that make the object look detached from the application surface. If a shadow exists in a source rendering, it must be removed unless it is necessary to represent real object geometry.

SVG remains preferred for genuine vector diagrams, knots, icons, and instructional line art.

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

Rig component requirements reference canonical Tackle explicitly through `tackleId`. The requirement remains a component requirement, while `tackleId` identifies the canonical Tackle concept that satisfies it.

Rig component requirements own only Rig-specific usage context such as required/optional status, quantity, order, size/configuration guidance, assembly role, and setup notes.

Duplicated Rig component `name` values are non-authoritative and are removed by the Rig/Tackle data-integrity implementation. The UI resolves the component display name from canonical Tackle.

A separate requirement-level `id` is not added unless a demonstrated editing, migration, annotation, or persistence need requires independent requirement identity.

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

The Core 6 are the first Rig-expansion milestone. They should be complete, accurate, beginner-ready, and validated before expansion proceeds to the remaining fourteen rigs.

D043 resolves the Core-6 modeling question: Jighead + Soft Plastic and Inline Spinner Setup are canonical ready-to-fish terminal setups within the Rig Guide. Their inclusion does not create a separate domain model merely because one setup is built from two components and the other is a lure tied directly to line.

The product teaching principle is to help a newer angler become successful with a small set of broadly productive rigs before expanding the fishing arsenal.

Canonical relationship IDs must resolve to real canonical entities. Carolina Rig is approved for the near-term library, so the correct repair for the current `carolina-rig` forward reference is to create the canonical Carolina Rig record during the later Rig expansion rather than treat the concept as unwanted. Production relationships should not depend on unresolved placeholder IDs once the expansion is implemented.

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

# D030 – Clear Unavailable-Feature Affordance

Anything that looks actionable must either perform an action or clearly communicate that it is unavailable.

Unimplemented child cards may remain visible when they help communicate intended application structure, but they must be clearly marked `Coming Soon` or equivalent. They must not use hover, pointer, click, or other affordances that imply working navigation, and they should use appropriate accessible disabled/unavailable semantics.

Implemented cards remain fully interactive. Feature-preview pages, notification behavior, and roadmap detail inside unavailable cards are deferred.

# D031 – Explicit External Destination CTA Semantics

External actions must clearly identify the destination and use `↗` to indicate navigation outside the application. Generic labels such as `Browse` or `Learn More` should be avoided when a specific destination can be named.

The Dashboard Regulations CTA uses:

```text
Go to ODWC Regulations ↗
```

External links open outside the application in a new tab/window as supported by the platform. `ⓘ` remains reserved for in-app contextual information.

# D032 – Dashboard Regression Restoration

The current Forest Journal Dashboard styling lost previously approved hierarchy and interaction behavior during an unrelated full-file replacement. This is a confirmed regression, not a redesign opportunity.

The approved repair restores the previously validated Dashboard behavior, including the stronger primary-card treatment, 6px left accent, 2px right accent, primary title emphasis, approved vertical spacing, gradient hover treatment, active behavior, and `overflow: hidden`, while preserving the current pill CTA and all newer Rig/Tackle styling.

The repair must not change Dashboard card order, labels, navigation architecture, content, theme direction, dormant themes, or unrelated CSS.

This decision reinforces the replacement-integrity rule: full-file replacements must preserve unrelated approved behavior; an unrelated diff is a failure unless explicitly authorized.

# D033 – Archive Completed Package Artifacts

Completed, package-specific implementation artifacts do not remain at repository root once their package is no longer active.

Historical package artifacts with continuing audit or handoff value are preserved under a clearly labeled archive path, such as `docs/archive/packages/<date>-<package>/`. Archived package files are historical records and must not override current governing documentation.

Permanent rule: **completed package-specific artifacts belong in Archives, not at repository root.**

# D034 – Production Asset Directory Discipline

Active production asset directories contain current production assets or explicitly approved reusable production assets.

Historical boards, previews, experiments, and superseded design references are moved to a clearly historical/reference archive rather than left in production asset directories. Unreferenced does not automatically mean delete: an asset may be preserved when it has design-lineage, geometry, licensing, or reconstruction value, but it must not masquerade as production media.

The current `tackle-reference-board.webp` and `what-you-need-thumbnail-preview.webp` are approved for archival as historical design/reference assets.

Permanent rule: **production asset directories contain production assets; historical design references belong in Archives.**

# D035 – Single Production-Supported Theme

Forest Journal is the only production-supported Version 1 theme.

`forest-copper.css`, `forest-gold.css`, and `legacy-dark-theme.css` are retained as historical/inactive design concepts. They are not required to remain in behavioral or visual parity with Forest Journal and are not part of the supported production test matrix.

A future shared CSS architecture may separate common base/layout/component behavior from theme tokens and visual overrides before additional themes are promoted to supported status.

Permanent rule: **a CSS file existing in the repository does not make it a supported production theme.**

# D036 – Status and Version Semantics

Decision status, document status, implementation status, and application version are separate concepts and must not be used interchangeably.

Document Status values are:

- `Draft`
- `Approved`
- `Superseded`
- `Archived`

Implementation Status values are:

- `Current`
- `Approved / Not Implemented`
- `In Progress`
- `Validated`

`Document Revision` identifies the revision of a documentation file. `Application Version` or `Application Baseline` identifies the product version or baseline when needed. Ambiguous `Active` is not used as a document-governance status.

`Validated` is reserved for implementation or repository state that has actually been verified after push/runtime validation; documentation approval alone does not make an implementation validated.

Package-specific source-header language such as `REPLACEMENT` should be removed when the relevant permanent source file is next deliberately edited.

# D037 – Data-Model Documentation Structure

The data-model documentation structure must match actual domain ownership and must not present nonexistent or speculative documents as current authoritative sources.

Approved structure:

```text
00-GLOSSARY.md
01-FOUNDATION.md
02-FISH.md
03-RIGS.md
03A-TECHNIQUES.md
03B-CONDITIONS.md
04-KNOTS.md
05-TACKLE.md
05A-INVENTORY.md
06-LURES.md
07-USER-DATA.md
08-BACKUP.md
09-RELATIONSHIPS.md
```

Canonical Tackle and My Tackle/Inventory remain separate domains. A dedicated Recommendation model is deferred until its schema is mature. A ProductDefinition model is deferred until a demonstrated commercial-product feature requires it.

# D038 – Repository Handoff Entrypoint

`docs/HANDOFF.md` is the first-read repository entrypoint for future chats and contributors.

It is a current-state map, not a duplicate specification. It must point to the governing documents and clearly distinguish Current, Approved / Not Implemented, In Progress, Validated, temporary bridges, open decisions, and next recommended work.

A future session should be able to begin by reading `docs/HANDOFF.md` and following its referenced governing documents without relying on prior chat history.

# D039 – Documentation-Validated Closeout

A session, module, or section is not finalized until all relevant documentation has been updated, pushed to GitHub, inspected in the actual repository, and validated.

Conversation agreement, locally generated files, staged files, preflight checks, or code implementation alone do not constitute closeout.

Permanent rule: **no session, module, or section is finalized until all relevant documentation is updated and validated in GitHub.**

# D040 – No Unvalidated Build Transition

The project does not begin a new build segment while the current segment remains unfinalized.

Before moving to the next build segment, the current segment must have its decisions settled, required implementation completed when applicable, relevant documentation updated, changes pushed, GitHub state inspected, and runtime/application behavior validated where applicable.

If an area remains open, it must be explicitly resolved or deliberately parked and documented before the project transitions to a new build segment.

Permanent rule: **finish cleanly or deliberately park; do not leave half-finalized project areas behind.**

# D041 – Cross-Segment Decision Capture and Parking

The significance of a project discussion determines whether it must be documented, not whether the discussion occurred inside the currently planned workstream.

A project-wide question raised mid-stream that produces a meaningful architecture, product, data-model, workflow, UI, future-feature, deferment, rejection, or other durable decision is treated with the same documentation discipline as an in-segment decision.

Such outcomes must be classified as appropriate (`Build Now`, `Parking Lot`, `Reject`, or `Open`) and captured in the relevant governing documentation before closeout.

When a substantial off-segment discussion would unnecessarily interrupt a coherent build segment, the technical lead may recommend parking it until a clean stopping point. The topic must be recorded with enough context that it cannot be lost. If the issue materially changes the work currently underway, it is discussed immediately instead.

# D042 – Core Learning Path Visual Emphasis

Curated beginner learning paths that the application explicitly recommends as high-priority starting points must receive additional visual hierarchy within the Forest Journal design system.

Examples include:

- **Core Rigs — Master These First**
- Future **Core Knots**
- Other future curated `Core` learning groups only when they have been deliberately approved as recommended starting paths.

The purpose of the additional treatment is instructional prioritization, not decoration. A newer angler should be able to identify the recommended starting path quickly without reading every card equally.

Approved treatment may include restrained combinations of:

- stronger accent/border treatment,
- a `Core`, `Start Here`, or equivalent badge/eyebrow,
- slightly stronger title hierarchy,
- subtle surface or inset accent treatment,
- grouping or section framing,
- concise supporting copy that explains why the group is important.

Core emphasis must:

- remain consistent with Forest Journal,
- preserve mobile readability,
- preserve keyboard/focus behavior,
- maintain sufficient contrast,
- avoid meaning conveyed by color alone,
- avoid excessive animation or decorative clutter,
- remain visually subordinate to page-level navigation and safety-critical information,
- not change canonical data ownership merely to create a visual effect.

The same visual language should be reusable across domains rather than inventing unrelated styling for Core Rigs, Core Knots, and future curated learning groups.

Permanent principle: **important recommended learning paths should look important, but still belong to the same field guide.**

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

# D044 – Single-Owner Core Rig Membership

Core Rig membership and order are stored once in `data/rigs.js` through the canonical `CORE_RIG_IDS` registry.

Rig records do not duplicate `isCore`, `coreOrder`, or equivalent presentation flags solely to support the Core learning-path UI.

The ordered registry owns:

- membership in **Core Rigs — Master These First**,
- teaching sequence,
- Core-section ordering,
- Core badges and detail-page emphasis.

The renderer derives Core presentation from that registry. This keeps curated learning-path membership separate from each Rig's intrinsic identity and prevents duplicated order metadata.

# D045 – No Generated Rig Assembly Imagery

Generative-image systems are not approved for finished-Rig diagrams, build-step illustrations, terminal-tackle connection diagrams, or hook-and-bait geometry.

Repeated tests produced visually plausible but mechanically unreliable results, including incorrect component order, line routing, hook geometry, bait seating, and orientation. These defects can teach an unsafe or ineffective build even when the image appears polished.

Rig assembly remains text-authoritative. Visual confirmation follows this order:

1. technically verified and legally reusable local media,
2. a direct verified visual destination or dedicated media/file page,
3. an authoritative external instructional reference,
4. text-only instructions when no trustworthy visual exists.

Original project diagrams may be used only when manually constructed from verified references and validated component-by-component. This prohibition does not automatically extend to isolated Tackle recognition art, which may use original illustration when its single-object geometry is anchored to a real reference and independently checked.

# D046 – Rig Guide Learning-Tier Navigation

The Rig Guide landing page is the primary learning-navigation hub for Rigs.

Top-level Rig Guide cards are:

1. Core Rigs
2. Beginner
3. Beginner+
4. Intermediate
5. Intermediate+
6. Advanced
7. Expert
8. All Rigs

Core is a curated learning collection, not a difficulty value. Core membership remains owned once by `CORE_RIG_IDS`; every Rig separately owns exactly one canonical `difficulty` tier.

The approved difficulty vocabulary is:

- `Beginner`
- `Beginner+`
- `Intermediate`
- `Intermediate+`
- `Advanced`
- `Expert`

The phrase **Master These First** is removed from current Rig Guide presentation. D046 supersedes only the presentation wording and browse-section placement implied by D027, D042, and D044; their Core membership, ordering, and visual-emphasis principles remain in force.

Implemented learning tiers are actionable. Tiers without implemented Rigs remain visible only when useful for orientation and must follow D030 `Coming Soon` unavailable semantics.

`All Rigs` always displays every currently implemented active Rig, including Core Rigs. It does not own a second dedicated Core section.

Rig expansion proceeds by completed learning tier rather than creating the full 20-Rig library in one unvalidated batch. The current expansion completes Beginner and Beginner+ before moving to Intermediate, then Intermediate+, Advanced, and Expert.

Permanent principle: **the Rig landing page teaches the progression; All Rigs inventories the implemented library.**
