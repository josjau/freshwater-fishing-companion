# Freshwater Fishing Companion

**Document:** DECISIONS.md  
**Document Revision:** 0.6.2  
**Document Status:** Approved  
**Last Updated:** 2026-08-24

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
| D014 | GitHub-Authoritative Local Repository Workflow | Approved |
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
| D047 | Section and Subset Search Availability | Approved |
| D048 | Dashboard-Derived Section Card Design | Approved |
| D049 | Verified Rig Tutorial Embed Policy | Approved |
| D050 | Standard Search Field and Clear Control | Approved |
| D051 | Context-Preserving Parent Navigation | Approved |
| D052 | Rig Detail Compact Density | Approved |
| D053 | Rig Media Completeness and Tutorial Audit | Approved |
| D054 | Intermediate Rig Tier Membership | Approved |
| D055 | Durable Decision Context Preservation | Approved |
| D056 | Semantic Single-Owner Data and Relationship Ownership | Approved |
| D057 | Fish Guide Four-State Version 1 Scope | Approved |
| D058 | Fish Habitat and Waterbody Ownership | Approved |
| D059 | Fish Category Registry and Lifecycle Ownership | Approved |
| D060 | Northern Rock Bass Identity and Shared Aliases | Approved |
| D061 | Hierarchical Scoped Search | Approved |
| D062 | Local Repository Work/Codex Operating Model | Approved |
| D063 | Dashboard Knowledge Hubs and Tackle Capability Boundary | Approved |
| D064 | Repository Disaster Recovery / Reconstruction Gate | Approved |
| D065 | Slip Bobber Alternate-Terminal Modeling Gate | Approved |

# D001 – Local-First Architecture

The Companion stores user data locally and functions without requiring a cloud account.

# D002 – Modular Data Model Documentation

The data model is divided into focused documents instead of one large specification.

# D003 – Canonical Fishing Techniques

Fishing Techniques are independent canonical Reference Knowledge entities that own reusable presentation behavior. A Technique may apply to multiple Rigs or other compatible fishing setups.

Technique identity does not determine which side owns a future Rig↔Technique compatibility relationship. The canonical storage owner and structure of that relationship remain deliberately deferred until the Technique architecture gate and must be resolved under D056.

Rig continues to own physical assembly/configuration. Technique owns reusable retrieve/cadence, rod/reel movement, and presentation/strike guidance.

If future compatibility is a simple intrinsic applicability fact, it receives one semantic Reference Knowledge owner. If the relationship instead answers which Technique should be used with a Rig under particular Fish/Condition context, a Decision Knowledge relationship may be the more accurate owner.

Do not mirror the same semantic relationship in both `Rig.techniqueIds[]` and `Technique.compatibleRigIds[]`.

**Current implementation status:** Technique remains a valid future domain; no canonical production Technique dataset or Rig↔Technique runtime relationship is implemented.

**Future trigger:** resolve relationship ownership when the Technique architecture gate opens and concrete feature requirements exist.

**Canonical owners:** `DECISIONS.md` D003/D024/D056 and the Technique/relationship data-model documents.

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

# D014 – GitHub-Authoritative Local Repository Workflow

GitHub `main` is authoritative for committed production source and formally reconciled documentation. GitHub `origin/main` is the synchronization point between each computer's local checkout.

For user-facing application work, the local checkout must be verified against the intended GitHub baseline before local validation. Chat memory, a previously proposed file, a downloaded package, or an uncommitted file on another computer is never authoritative content for the active checkout.

User-facing application work is prepared in the authoritative Drive working package and delivered to the local checkout for browser/user validation. Documentation-only changes may be written and committed directly to GitHub after verifying the latest GitHub file contents, completing the applicable documentation impact/preservation checks, and verifying the post-write result; documentation-only work does not require local browser/user validation.

Production source/data/media/configuration writes require explicit authorization for the specific scope, and production/user-facing commit/push requires explicit authorization. Under D062, the approved Drive working package is delivered to the local validation checkout by review ZIP; the ZIP never contains `.git` and does not itself authorize commit/push. Documentation-only commits are standing-authorized when required to keep durable project state current.

Commit economy is required: use as few commits as practical while preserving reviewability, validation boundaries, rollback safety, and current documentation. Fewer commits never justify stale documentation or an overbroad unreviewable commit.

Every local write must pass diff/integrity validation before commit, and every pushed write must be re-fetched/integrity-verified from GitHub before it is considered complete.

A session ending before section closeout triggers the Session-End Documentation Gate in `DEVELOPMENT_WORKFLOW.md`; approved decisions and current continuation state must not remain only in chat history.

Detailed procedure: `DEVELOPMENT_WORKFLOW.md`. D062 owns the cross-computer, one-write-chat, and repository Working State operating model.

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

The lightweight search implementation uses deterministic relevance ranking rather than alphabetizing all substring matches. Canonical identity fields are strongest; exact and prefix/name matches outrank word/contains matches and lower-priority metadata. Secondary identity fields such as scientific name may still rank strongly, while category, difficulty, use-case, and condition metadata remain weaker signals. Equal-confidence results retain stable source order.

A direct canonical-name query should therefore place the intended entity first when it is present; for example, `Ned` should rank **Ned Rig** ahead of Rigs that only mention Ned-related terms in lower-priority searchable metadata.

Heavy fuzzy search, advanced typo tolerance, natural-language intent parsing, sophisticated confidence systems, and global cross-domain result dumps remain deferred until demonstrated by actual need.

Branded or commercial names such as `Rooster Tail` require a later product/concept-resolution decision and are not resolved by this decision alone.

D061 adds the scope-before-ranking rule for hierarchical domain search.

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

This content boundary does not decide the canonical owner of future Rig↔Technique compatibility; D003/D056 defer that relationship to the Technique architecture gate.

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

`archive/` at repository root is the single canonical archive root.

Completed package-specific implementation artifacts do not remain in active/current repository locations once their package is no longer active. Package artifacts with continuing audit, provenance, reconstruction, or handoff value are retained under a clearly labeled path such as:

```text
archive/packages/<date>-<package>/
```

Normal prior revisions of current source or documentation files are **not** copied into `archive/` merely because the implementation workflow edited or replaced the whole file. Git history is the canonical recovery mechanism for ordinary file revisions.

Whenever an implementation, migration, cleanup, or closeout retires an existing repository artifact, classify it explicitly as:

1. **GIT HISTORY ONLY** — ordinary prior revision; no archive copy.
2. **ARCHIVE** — independently useful historical/audit/provenance/reconstruction artifact retained under `archive/`.
3. **DELETE** — no continuing repository value beyond Git history.

An artifact classified **ARCHIVE** is not closed out until its archive path is verified on authoritative GitHub `main`, its former active/current path no longer masquerades as current, and the archival action is recorded in the relevant workstream/decision/closeout documentation.

Archived material is historical evidence and must not override current governing documentation, production source, current data models, or active workstreams. `archive/README.md` owns the directory-level archive operating policy.

Permanent rule: **Git history preserves ordinary revisions; `archive/` preserves independently useful historical artifacts.**

# D034 – Production Asset Directory Discipline

Active production asset directories contain current production assets or explicitly approved reusable production assets.

Historical boards, previews, experiments, and superseded design references with independent design-lineage, geometry, licensing, provenance, or reconstruction value are moved to an appropriate location under the canonical repository-root `archive/` rather than left in production asset directories. Unreferenced does not automatically mean delete, but retained historical material must not masquerade as production media.

The existing archived `tackle-reference-board.webp` and `what-you-need-thumbnail-preview.webp` remain historical design/reference artifacts under the repository archive.

Permanent rule: **production asset directories contain production assets; historical design/reference artifacts with continuing value belong under the canonical repository archive.**

# D035 – Single Production-Supported Theme

Forest Journal is the only production-supported Version 1 theme and remains the visual/reference baseline while the application is under active functional development.

`themes/concepts/forest-copper.css`, `themes/concepts/forest-gold.css`, and `themes/concepts/legacy-dark-theme.css` are intentionally retained **deferred theme candidates** from earlier theme exploration. They are not abandoned historical artifacts, are not required to remain in behavioral or visual parity with Forest Journal while deferred, and are not part of the supported production test matrix.

**Reason:** multi-theme implementation is deliberately postponed because maintaining several complete themes while components, navigation, media, accessibility behavior, and responsive layouts are still changing would multiply maintenance work and regression risk before the shared UI structure is stable.

A broader theme-tree/shared CSS restructuring was discussed and deliberately deferred rather than forgotten or rejected. The absence of that structure in current production is therefore meaningful non-action, not evidence that theme architecture was abandoned.

**Current implementation status:** Forest Journal only. No user-facing theme selector or multi-theme runtime behavior is implemented.

**Future trigger:** reopen the final theme architecture during the Settings / User Preferences architecture gate, when user preference ownership/persistence and a sufficiently stable application structure can be designed together.

At that gate, shared base/layout/component behavior should be centralized once where practical, and individual production theme files should primarily own theme-specific design tokens and intentional overrides rather than duplicate complete application structure. Forest Journal remains the reference implementation for future parity requirements.

Theme selection, persistence, device/profile ownership, backup/restore behavior, the final supported-theme list, and final CSS directory structure belong to that future gate. Existing candidate files do not guarantee that every candidate will ultimately ship.

The canonical reference-media surface `#f4f0e8` / RGB `244, 240, 232` remains a cross-theme invariant.

**Canonical owners:** this decision is owned by `DECISIONS.md`; current/future source structure is described by `ARCHITECTURE.md`; visual requirements are described by `STYLE_GUIDE.md`; workflow context preservation is governed by `DEVELOPMENT_WORKFLOW.md`.

Permanent rule: **a CSS file existing in the repository does not make it a supported production theme, and a deliberately deferred theme candidate must not later be reclassified as abandoned merely because it is inactive.**

# D036 – Status and Version Semantics

Decision status, document status, implementation status, and application version are separate concepts and must not be used interchangeably.

Document Status values are:

- `Draft`
- `Approved`
- `Superseded`
- `Archived`

Implementation-state terminology and transition rules are owned by `DEVELOPMENT_WORKFLOW.md`; this decision does not maintain a competing fixed list of values.

`Document Revision` identifies the revision of a documentation file. `Application Version` or `Application Baseline` identifies the product version or baseline when needed. Ambiguous `Active` should not be used as a document-governance status.

`Validated` is reserved for implementation or repository state that has actually been verified after push/runtime validation where applicable; documentation approval alone does not make an implementation validated.

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

`docs/HANDOFF.md` is the compact formal repository entrypoint for future chats and contributors. `docs/WORKING_STATE.md` is the first-read live local state and exact-resume record.

It is a current-state map, not a duplicate specification. It must point to the governing documents and clearly distinguish Current, Approved / Not Implemented, In Progress, Validated, temporary bridges, open decisions, and next recommended work.

A future session should perform repository preflight, read `docs/WORKING_STATE.md` and `docs/HANDOFF.md`, and follow their referenced governing documents without relying on prior chat history.

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

Curated `Core` content that the application explicitly identifies as high-priority learning or reference material receives additional visual hierarchy within the Forest Journal design system.

Examples include:

- **Core Rigs**
- **Core Knots**
- Other future curated `Core` groups only when they have been deliberately approved as priority learning/reference sets.

Core is a cross-cutting designation, not a difficulty, category, ownership state, or recommendation tier. A Core item may coexist with Beginner, Intermediate, Advanced, Expert, or other domain-specific classifications.

The purpose of the additional treatment is instructional prioritization, not decoration. A user should be able to identify curated priority content quickly without reading every peer card equally.

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

- membership in **Core Rigs**,
- teaching sequence,
- Core-filter ordering,
- Core badges and detail-page emphasis.

The renderer derives Core presentation from that registry. This keeps curated learning-path membership separate from each Rig's intrinsic identity and prevents duplicated order metadata.

# D045 – No Generated Rig Assembly Imagery

Generative-image systems are not approved for finished-Rig diagrams, build-step illustrations, terminal-tackle connection diagrams, or hook-and-bait geometry.

Repeated tests produced visually plausible but mechanically unreliable results, including incorrect component order, line routing, hook geometry, bait seating, and orientation. These defects can teach an unsafe or ineffective build even when the image appears polished.

Rig assembly remains text-authoritative. D049 governs the current completed-Rig visual-confirmation hierarchy, including officially permitted tutorial embeds. Generated finished-Rig/build-step imagery remains prohibited regardless of presentation channel.

Original project diagrams may be used only when manually constructed from verified references and validated component-by-component. This prohibition does not automatically extend to isolated Tackle recognition art, which may use original illustration when its single-object geometry is anchored to a real reference and independently checked.

# D046 – Rig Guide Learning-Tier Navigation

The Rig Guide landing page is the primary navigation hub for Rigs and exposes both the complete implemented library and the learning progression.

Top-level Rig Guide cards are:

1. All Rigs
2. Core Rigs
3. Beginner
4. Beginner+
5. Intermediate
6. Intermediate+
7. Advanced
8. Expert

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

The initial 20-Rig learning-tier expansion is complete. Future additions are enhancement/regional-reconciliation scope and require their own deliberate placement.

Permanent principle: **All Rigs is the universal library entry point; the remaining Rig Guide cards expose curated learning paths and difficulty progression.**

# D047 – Section and Subset Search Availability

When a section contains searchable reference or instructional content, search is available from both the main section landing page and the relevant searchable subset/browse pages.

Main-section search queries the complete implemented content set for that section. Subset search is scoped to the selected subset. A user who already knows what they want should not be forced to enter an `All`, category, family, difficulty, or other intermediate page before searching.

Main-section and subset search must reuse the same canonical records and shared search helpers rather than maintaining parallel indexes or duplicated source-of-truth data.

For the Rig Guide, the landing-page search queries all active implemented Rigs. Core, Beginner, Beginner+, All Rigs, and implemented tier pages may retain their scoped search fields.

Permanent principle: **search should be available at the section entry point and remain available when the user intentionally narrows the scope.**

# D048 – Dashboard-Derived Section Card Design

The main Dashboard is the visual reference standard for card-based section and subset navigation throughout the application.

Section and subset card grids should preserve the Dashboard's shared visual grammar, including:

- varied adjacent card accent colors,
- a corresponding left-edge accent line,
- shared card spacing and proportions,
- consistent hover, active, focus, and responsive behavior,
- stronger primary treatment only where a card has deliberate hierarchy,
- unavailable-card semantics from D030.

A domain page must not flatten every navigation card to one domain color merely because all cards belong to the same section. Domain identity may still appear in headings, search/result styling, detail pages, badges, or other appropriate context.

Curated Core cards may add the D042 primary emphasis on top of the shared card palette. Core styling does not replace the shared navigation-card system.

This decision applies to card-based main section and subset/navigation pages across Fish, Rigs, Tackle, Knots, Recommendations, Catch Log, Favorites, Settings, and future domains.

Permanent principle: **subset navigation should feel like the same application as the Dashboard, not a visually separate card system.**

# D049 – Verified Rig Tutorial Embed Policy

Completed-Rig visual confirmation follows this preference order:

1. technically verified and legally reusable local completed-Rig media,
2. a verified tutorial video embedded through the platform's official permitted player,
3. a direct verified external visual destination,
4. an authoritative external instructional reference,
5. text-only instructions when no trustworthy visual exists.

An embedded tutorial does not transfer ownership of the video to the project. The application must not download, rehost, alter, extract frames from, or otherwise republish third-party video content without separate reuse rights.

Embedded tutorial requirements:

- use the platform's official embed mechanism,
- use only public/available videos whose publisher/platform permits embedding,
- preserve the platform player and attribution,
- load on user request rather than preloading third-party players across the Rig library,
- do not autoplay,
- remain responsive and usable at phone widths,
- provide a clear external-source fallback,
- use privacy-enhanced embedding where the platform provides an official mode.

For YouTube, approved implementations use the official embedded player and privacy-enhanced `youtube-nocookie.com` domain. The browser must be allowed to provide the normal HTTP referrer required by YouTube playback.

The Texas Rig trial passed and the pattern has now been validated across the completed 20-Rig library. D053 adds the permanent build-first tutorial-selection and completeness-audit standard.

Permanent principle: **prefer trustworthy in-context visual instruction without copying third-party media into the repository.**

# D050 – Standard Search Field and Clear Control

Searchable sections use an inline search field at the section entry point rather than requiring a navigation card whose only purpose is to open a separate Search page.

The standard search interaction is:

- the main section landing page exposes search above its navigation cards,
- searchable subset/browse pages retain scoped search,
- the same canonical records and shared search helpers power both,
- typing may update results immediately while the Search submit action remains available,
- when text is present, an explicit one-click `×` control clears the query,
- clearing immediately restores the section's unfiltered/default state and returns focus to the search field,
- the clear control has an accessible `Clear search` name and must not depend on browser-specific native search-input controls.

Fish Guide adopts the same landing-page search pattern as Rig Guide; a dedicated **Search Fish** navigation card/page is not required for the primary workflow.

A search field near the top of the Dashboard is approved future direction, but it is not implemented by this decision. Its cross-domain scope, grouping, and result presentation remain deferred so Dashboard search does not become an indiscriminate global result dump.

Permanent principle: **search is a direct field interaction, not an extra navigation destination.**

# D051 – Context-Preserving Parent Navigation

Persistent/floating navigation controls remain the site-wide visual standard for non-Dashboard application views.

Canonical behavior for standard application views is:

```text
Forward navigation
-> newly opened destination starts at top

Parent navigation
-> restores the immediately preceding standard application view
-> restores that view's applicable UI state
-> restores that view's prior scroll position

Home navigation
-> Dashboard starts at top
-> contextual return state is cleared
```

A saved scroll position belongs only to the source context being restored and must never be transferred into a newly opened destination.

Parent is a contextual return action, not an ordinary forward route to a logical parent. Restoring prior state avoids unnecessary re-navigation while still preventing the older defect in which a newly opened destination inherited source-page scroll.

Specialized workflows may use separately approved navigation semantics when workflow state requires them. Reel Setup is an approved example of a specialized step-aware navigation context. Such exceptions must be deliberate/documented and do not redefine standard Parent behavior.

**Current implementation status:** Approved architecture. `NAVIGATION-PAGE-STANDARD.md` and `DETAIL-PAGE-STANDARD.md` already record the target behavior. Some broader production routing still uses the older all-transitions top-reset implementation and requires a later deliberate source package/runtime validation.

**Future trigger:** implement/reconcile the remaining production routing when navigation source is deliberately reopened. New specialized workflow exceptions require explicit documentation.

**Canonical owners:** D051, `NAVIGATION-PAGE-STANDARD.md`, `STYLE_GUIDE.md`, and specialized workflow records where applicable.

Permanent principle: **new destinations start at top; Parent restores the prior standard application context; Home resets to Dashboard.**

# D052 – Rig Detail Compact Density

The compact Rig-detail treatment is approved for Rig detail pages after runtime review at phone and desktop widths.

The approved Rig treatment prioritizes information density without visual crowding:

- compact At a Glance presentation,
- especially compact `What You Need` component rows,
- practical touch controls and readable component notes,
- comparatively generous `How to Build It` spacing,
- lighter supporting sections for Setup Notes and Common Mistakes,
- Safety remains visible by default,
- narrow-phone content stacks instead of compressing into crowded multi-column rows.

This approval is Rig-specific. It does not automatically establish the same density for Fish, Tackle, Knots, or other future detail pages; cross-domain adoption requires separate review when those detail experiences are actively developed.

Permanent principle: **Rig details are information-dense, not visually dense.**

# D053 – Rig Media Completeness and Tutorial Audit

Every Rig that enters a completed learning tier receives a media-completeness audit as part of the same build segment.

The audit requires:

- authoritative text assembly remains mandatory and authoritative,
- every Rig receives a tutorial-source search,
- a technically correct tutorial is included when a suitable public source can be independently verified and is compatible with D049,
- the primary embedded tutorial is build-first: correct physical assembly/configuration is the main purpose,
- concise/direct videos are preferred when technical completeness and source quality are otherwise adequate,
- component order, knots/connections, leader placement, weight placement, bait/hook placement, and final assembled configuration take priority over fishing technique,
- technique/retrieve/presentation/strategy may be present but must not dominate,
- no arbitrary hard duration threshold is required,
- tutorial players remain lazy-loaded, use `youtube-nocookie.com`, do not autoplay, preserve platform attribution/controls, and retain a `Watch on YouTube ↗` fallback,
- if no suitable tutorial is found, use the next trustworthy D049 fallback instead of adding a weak, marketing-heavy, or technically mismatched video,
- every canonical Tackle concept used by a completed Rig provides accurate contextual recognition help and normally has an approved recognition-media asset,
- newly introduced canonical Tackle concepts ship with their recognition media in the same tier build,
- generated completed-Rig/build-step imagery remains prohibited under D045,
- changed tutorial records receive final in-app runtime validation after implementation.

Permanent principle:

> Tutorial preferred, trustworthy external visual/reference as backup, authoritative text always required.

# D054 – Intermediate Rig Tier Membership

The complete Intermediate tier is:

1. Drop Shot Rig
2. Carolina Rig
3. Live-Bait Slip-Sinker Rig
4. Three-Way Rig

This tier is the deliberate difficulty step after Beginner+ because these Rigs introduce more precise leader management, bottom-contact tuning, multi-component relationships, or multi-branch rigging while remaining broadly practical for the approved regional library.

This historical tier decision remains part of the finalized 20-Rig library.

# D055 – Durable Decision Context Preservation

A material decision is not sufficiently documented when the repository records only the outcome but omits the context needed to interpret that outcome later.

For durable architectural, product, data-model, workflow, UI, deferment, rejection, or structural decisions, canonical documentation must preserve:

1. **Decision** — what was approved.
2. **Reason** — why the project chose it, including the meaningful tradeoff, maintenance burden, or risk being avoided or accepted.
3. **Current implementation status** — for example Current, Approved / Not Implemented, Deferred, Superseded, or another applicable state.
4. **Deferred/future trigger** — the milestone, architecture gate, condition, dependency, or evidence that should cause the decision to be revisited.
5. **Canonical owner/document** — where the durable interpretation lives after reconciliation.

Architecturally meaningful non-actions must also be recorded. If the project deliberately postpones a directory restructure, implementation, migration, or feature, future sessions must not infer that the absent structure was forgotten, rejected, or obsolete.

When a deferred item remains a candidate for future implementation, label it as deferred rather than using ambiguous historical/inactive wording that could imply abandonment.

`DEVELOPMENT_WORKFLOW.md` owns the operating procedure for this requirement. `DECISIONS.md` owns the durable summary for long-term structural decisions; supporting architecture, style, data-model, workstream, and handoff documents should carry only the context required by their roles.

Permanent principle: **a future session must be able to recover both what was decided and why from GitHub without relying on chat history.**

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

Rig↔Technique compatibility ownership remains deliberately unresolved. When Technique implementation begins, choose one semantic owner for simple compatibility or a Decision Knowledge relationship when contextual recommendation semantics are more accurate. Do not populate both Rig and Technique inverse arrays for the same fact.

**Future trigger:** Every new field, relationship, inverse navigation path, cache/index, search metadata proposal, and schema refactor must apply this ownership test during design. Existing domains are reconciled when audited or actively modified. Any exception requires a deliberate documented architecture decision explaining why one canonical owner is insufficient.

**Canonical owners:** `DECISIONS.md` owns this permanent architectural rule. `data-model/09-RELATIONSHIPS.md` owns operational relationship semantics when synchronized. Each domain data-model document identifies the owner of its own fields and domain-specific relationships.

Permanent principle: **ownership follows meaning, not convenience.**

# D057 – Fish Guide Four-State Version 1 Scope

**Decision:** The Fish Guide Version 1 regional scope is Northeast Oklahoma, Southeast Kansas, Southwest Missouri, and Northwest Arkansas.

This Four-State direction is also the Companion's forward regional content focus. Existing validated domains retain their original validation context and are progressively reconciled rather than retroactively rewritten.

**Reason:** The region reflects the user's near-term fishing focus and has substantial freshwater species/method overlap with the earlier Northeast Oklahoma / Southwest Kansas scope, making progressive reconciliation more accurate and lower-risk than project-wide invalidation.

**Current implementation status:** Approved and active. Fish Guide Phase 0 is closed; Trout, Gar, Production Wave 1, and Production Wave 2 have implemented the Four-State production direction. Wave 3 Bass is committed, validated, post-push verified, and closed; Sunfish & Crappie is the next planned Fish production package.

**Future trigger:** apply Four-State adequacy as each domain is audited or materially modified. Significant rewiring requires explicit discussion before implementation.

**Canonical owners:** D057, Fish Phase 0 workstream, `PROJECT.md`, `ROADMAP.md`, and Fish data-model documentation.

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

**Current implementation status:** Approved and implemented incrementally through the closed Trout, Gar, Production Wave 1, and Production Wave 2 packages; remaining locked-library production migration is pending.

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

**Current implementation status:** The category registry is production implemented and expands through staged Fish packages. Trout, Gar, Carp, Drum, Paddlefish, Walleye/Sauger, and Catfish packages are closed; the remaining locked library is pending.

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

**Current implementation status:** Approved/locked identity retained for the later Sunfish & Crappie production wave. Fish Guide Phase 0 is closed; Northern Rock Bass has not yet reached its production package.

**Future trigger:** update only if authoritative taxonomic/regional naming evidence requires a canonical identity correction.

**Canonical owners:** Fish data-model/source documentation and D060.

# D061 – Hierarchical Scoped Search

**Decision:** Search scope is determined before relevance ranking.

Navigation context defines the eligible search universe:

- broader/domain entry points search the approved domain scope,
- collection/category/subset navigation narrows eligible records,
- deeper navigation never silently broadens search back to the full domain,
- future related-knowledge search scopes may be narrower still,
- future Global Search is a deliberate separate scope rather than an implicit fallback.

Search helper text, examples, placeholders, result labels, and empty-state messages must describe the actual eligible scope.

For Fish Version 1, deliberate searchable identity fields are:

- `name`
- `aliases[]`
- `scientificName`
- `categoryId` resolved through the category registry display name
- `family`

Do not add `searchKeywords[]` solely to make Fish search work when the same meaning can be derived from canonical identity fields.

Relevance ranking operates only after scope filtering. Scope outranks ranking.

**Reason:** a search performed after the user intentionally narrowed context should respect that choice. Silently returning out-of-scope records makes navigation hierarchy untrustworthy and encourages duplicated search metadata.

**Current implementation status:** Approved/locked architecture. Existing Rig/Knot subset searches already follow scoped-record behavior; Fish helper/empty-state alignment is part of Fish implementation. Global Search remains deferred.

**Future trigger:** apply the same principle to new searchable domains and to future Global Search provider orchestration.

**Canonical owners:** D061, search/navigation standards, and domain-specific search documentation.

# D062 – Drive Working Package / Local Validation / GitHub Commit Operating Model

**Decision:** GitHub `main` is authoritative for committed production source and formally reconciled documentation. For approved uncommitted **user-facing application work**, Google Drive `Working Source/Current` owns the authoritative working tree as an **atomic full-tree ZIP plus manifest**. The local Git checkout is the application/browser-validation copy of that Drive working tree. Documentation-only changes may land directly on GitHub from the latest verified file contents and are then reconciled into Drive.

Approved user-facing edits are made to the Drive working tree first, then delivered as a review ZIP that preserves repository-relative paths and is extracted over the existing local checkout. The local `.git` directory is never part of a review ZIP. Local-only user-facing edits are not durable working truth and must be reconciled back into Drive before they can become an approved package. Documentation-only work does not require local browser/user validation.

Use one chat/session per coherent outcome. Only one session may be write-authorized for the active working package at a time. Other sessions may perform bounded read-only research when they do not create competing working state.

`docs/WORKING_STATE.md` is intentionally compact and current-only. Completed work and durable decisions are promoted to their canonical repository owners before commit and removed from Working State after reconciliation. `HANDOFF.md` is the compact repository recovery entrypoint and `ACTIVE-CHANGE-LEDGER.md` owns material non-closed carry-forward items.

Every commit candidate must pass both a full-tree mechanical verification and a repository documentation impact sweep. Every durable repository documentation file receives an explicit disposition: **UPDATED** or **VERIFIED — NO CHANGE REQUIRED**. A commit may not close while durable truth exists only in chat or Working State.

Continue on `main` for the current single-writer workflow. Revisit branching only when real concurrency, preview, deployment, or PWA requirements justify it.

**Reason:** The repository-only transition demonstrated that direct local edits and a manually maintained exploded Drive mirror can drift independently. An atomic Drive working package preserves an exact cross-session working state, keeps GitHub clearly authoritative for committed truth, lets the local checkout remain the strongest validation surface, and eliminates file-by-file Drive mirror drift. The explicit documentation sweep prevents durable decisions from remaining stranded in temporary state or stale Git documentation.

**Current implementation status:** Approved and active. The prior exploded Drive `Current` mirror is retired in favor of the atomic user-facing working-package model. Wave 3 Bass completed the recovered workflow and is committed, validated, post-push verified, and closed. Documentation-only direct-to-Git updates are active under the same verification/impact discipline.

**Future trigger:** Revisit package representation only if a reliable tool can maintain an exploded Drive mirror with deterministic full-tree verification, or if branching/deployment/concurrency requirements make a different workflow materially safer.

**Canonical owners:** D062 owns the durable operating model. `DEVELOPMENT_WORKFLOW.md` owns procedure; `WORKING_STATE.md` owns current state/resume; `HANDOFF.md` owns compact recovery; Drive `Working Source/Current` owns approved uncommitted user-facing application work between commits.

# D063 – Dashboard Knowledge Hubs and Tackle Capability Boundary

**Decision:** The Dashboard exposes four foundational knowledge domains: Fish Guide, Knots, Rig Guide, and Tackle. Each is a connected-knowledge hub rather than an isolated page. Tackle is the root capability/domain and must keep two distinct meanings visible:

- **Tackle Reference / Find Tackle** — canonical equipment/consumable knowledge and recognition.
- **My Tackle** — user-owned inventory and readiness state.

The Tackle root may route into both capabilities, but it must not merge reference facts and user-owned state into one ambiguous source of truth. Rig detail derives readiness from Rig requirements plus My Tackle ownership under D020/D028; it does not create a separate competing Tackle authority.

**Reason:** Beginners need stable domain entry points and fast movement through connected knowledge. Treating Tackle as both a foundational hub and a boundary between reference knowledge and user knowledge preserves navigation clarity while preventing duplicate ownership/readiness models.

**Current implementation status:** The four foundational Dashboard domains and Tackle root behavior are current. Tackle Reference exists in its current scope. The full My Tackle capability remains Approved / Not Implemented under D028, the Settings/User Data gate, and the Roadmap.

**Future trigger:** Revalidate the Tackle root routing and labels when the full Tackle Reference milestone or My Tackle is implemented; do not collapse the two capabilities for convenience.

**Canonical owners:** D063 owns the durable product/knowledge boundary. D020/D028 own readiness and My Tackle authority; `ARCHITECTURE.md` owns the knowledge layers; `ROADMAP.md` owns implementation order.

# D064 – Repository Disaster Recovery / Reconstruction Gate

**Decision:** Before a major Version 1 release, or earlier if the repository begins to contain irreplaceable User Knowledge or other non-reconstructible artifacts, the project must implement and validate an independent repository disaster-recovery/reconstruction plan beyond the active working checkout.

The gate must define:

- recovery coverage for source, documentation, media, workflows/configuration, and intentionally retained archive evidence,
- which artifacts are irreplaceable versus reproducible,
- at least one independent mirror/export/backup path beyond the active checkout,
- restoration and reconstruction procedure,
- integrity and completeness validation after restoration,
- recovery-point/retention expectations and the responsible maintenance cadence.

**Reason:** Git history and a synchronized remote reduce ordinary device-loss risk, but they do not by themselves prove recovery from account loss, repository deletion/corruption, media loss, or future irreplaceable local user artifacts. Designing this only after such artifacts exist would accept avoidable loss risk.

**Current implementation status:** Approved / Deferred to named gate. The current repository and GitHub remote support ordinary source continuity, but the independent disaster-recovery/reconstruction plan has not been designed or validated. This is not a current Fish production blocker.

**Future trigger:** Complete before major Version 1 release or before irreplaceable User Knowledge enters scope, whichever occurs first.

**Canonical owners:** D064 owns the durable requirement. `ROADMAP.md` owns its release ordering and `ACTIVE-CHANGE-LEDGER.md` keeps GATE-012 visible until implementation/validation closes.

# D065 – Slip Bobber Alternate-Terminal Modeling Gate

**Decision:** The current canonical Slip Bobber Rig remains the hook-plus-live/natural-bait setup represented by its existing `componentRequirements[]` and assembly. A jig presentation is a legitimate alternate terminal configuration, but it must not be represented by casually relabeling canonical `bait`, adding an ad hoc optional jig field, or making the current ready-to-fish component list internally contradictory.

If the product later needs both hook+bait and jig terminal choices in one Rig experience, first define a reusable alternate-terminal/variant model that can truthfully express component substitution, assembly, readiness, knot, and presentation consequences. A separate canonical Rig is also an option if evidence shows the setups should not share one record.

**Reason:** Canonical component requirements drive assembly and readiness. Treating mutually exclusive terminal choices as simultaneous required/optional components would make ownership/readiness and instructions misleading. The current wording correction accurately describes bait without prematurely creating a one-off schema.

**Current implementation status:** The current bait note is corrected and validated in production. Alternate-terminal modeling is Deferred / Not Implemented and does not block current Rig or Fish work.

**Future trigger:** Revisit when an approved user workflow requires choosing between mutually exclusive terminal configurations within one canonical Rig, or when another Rig demonstrates the need for the same reusable model.

**Canonical owners:** D065 and `data-model/03-RIGS.md` own the durable boundary. `ACTIVE-CHANGE-LEDGER.md` keeps GATE-013 visible until a future explicit gate resolves it.
