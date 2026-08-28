# Freshwater Fishing Companion

**Document:** DECISIONS.md  
**Document Revision:** 0.8.0  
**Document Status:** Approved  
**Role:** Compact canonical decision index  
**Last Updated:** 2026-08-27

# Purpose

This file is the canonical index for durable project decisions. Full decision bodies are grouped under `docs/decisions/` by durable ownership/domain so routine work can load only the decisions relevant to its scope.

Decision IDs are permanent. The decomposition does not renumber existing decisions or make the index a second owner of decision reasoning.

# Decision Files

- [`decisions/architecture.md`](decisions/architecture.md) — core architecture and knowledge-hub boundaries
- [`decisions/data-model.md`](decisions/data-model.md) — data model, semantic ownership, inventory/user knowledge
- [`decisions/media.md`](decisions/media.md) — media, assets, references/tutorials
- [`decisions/ux-navigation.md`](decisions/ux-navigation.md) — UX, search, card, navigation, detail-density rules
- [`decisions/product.md`](decisions/product.md) — product/domain scope and sequencing decisions
- [`decisions/workflow.md`](decisions/workflow.md) — workflow, governance, continuity, archive/recovery decisions

# Decision Index

| ID | Title | Status | Canonical decision body |
|---|---|---|---|
| D001 | Local-First Architecture | Approved | [`decisions/architecture.md`](decisions/architecture.md#d001--local-first-architecture) |
| D002 | Modular Data Model Documentation | Approved | [`decisions/data-model.md`](decisions/data-model.md#d002--modular-data-model-documentation) |
| D003 | Canonical Fishing Techniques | Approved | [`decisions/data-model.md`](decisions/data-model.md#d003--canonical-fishing-techniques) |
| D004 | Canonical Conditions | Approved | [`decisions/data-model.md`](decisions/data-model.md#d004--canonical-conditions) |
| D005 | Canonical Capabilities | Approved | [`decisions/data-model.md`](decisions/data-model.md#d005--canonical-capabilities) |
| D006 | Separate Equipment and Consumables | Approved | [`decisions/data-model.md`](decisions/data-model.md#d006--separate-equipment-and-consumables) |
| D007 | Canonical Recommendation Engine | Approved | [`decisions/data-model.md`](decisions/data-model.md#d007--canonical-recommendation-engine) |
| D008 | Canonical Source Registry | Approved | [`decisions/data-model.md`](decisions/data-model.md#d008--canonical-source-registry) |
| D009 | Three-Layer Knowledge Architecture | Approved | [`decisions/architecture.md`](decisions/architecture.md#d009--three-layer-knowledge-architecture) |
| D010 | Canonical Taxonomies | Approved | [`decisions/data-model.md`](decisions/data-model.md#d010--canonical-taxonomies) |
| D011 | Canonical Terminology | Approved | [`decisions/data-model.md`](decisions/data-model.md#d011--canonical-terminology) |
| D012 | Inventory-Centric Architecture | Approved | [`decisions/data-model.md`](decisions/data-model.md#d012--inventory-centric-architecture) |
| D013 | Canonical Inventory Locations | Approved | [`decisions/data-model.md`](decisions/data-model.md#d013--canonical-inventory-locations) |
| D014 | GitHub-Authoritative Local Repository Workflow | Approved | [`decisions/workflow.md`](decisions/workflow.md#d014--github-authoritative-local-repository-workflow) |
| D015 | Unified Field-Guide Visual System | Approved | [`decisions/media.md`](decisions/media.md#d015--unified-field-guide-visual-system) |
| D016 | Identification-Safe Fish Media | Approved | [`decisions/media.md`](decisions/media.md#d016--identification-safe-fish-media) |
| D017 | Verified Rig References and Text Instructions | Approved | [`decisions/media.md`](decisions/media.md#d017--verified-rig-references-and-text-instructions) |
| D018 | Current Rig Media Policy | Approved | [`decisions/media.md`](decisions/media.md#d018--current-rig-media-policy) |
| D019 | Tackle Reference Production Format | Approved | [`decisions/media.md`](decisions/media.md#d019--tackle-reference-production-format) |
| D020 | Integrated Rig Requirements and Readiness | Approved | [`decisions/ux-navigation.md`](decisions/ux-navigation.md#d020--integrated-rig-requirements-and-readiness) |
| D021 | Three-Interaction Field Workflow Target | Approved | [`decisions/ux-navigation.md`](decisions/ux-navigation.md#d021--three-interaction-field-workflow-target) |
| D022 | Relevance-First Search and Connected Knowledge | Approved | [`decisions/ux-navigation.md`](decisions/ux-navigation.md#d022--relevance-first-search-and-connected-knowledge) |
| D023 | Five Recommendation Tiers | Approved | [`decisions/product.md`](decisions/product.md#d023--five-recommendation-tiers) |
| D024 | Rig Assembly and Technique Presentation Ownership | Approved | [`decisions/data-model.md`](decisions/data-model.md#d024--rig-assembly-and-technique-presentation-ownership) |
| D025 | Single-Owner Rig-to-Tackle Relationships | Approved | [`decisions/data-model.md`](decisions/data-model.md#d025--single-owner-rig-to-tackle-relationships) |
| D026 | Canonical Tackle Identity and Display Names | Approved | [`decisions/data-model.md`](decisions/data-model.md#d026--canonical-tackle-identity-and-display-names) |
| D027 | Regional Rig Library and Core Rigs | Approved | [`decisions/product.md`](decisions/product.md#d027--regional-rig-library-and-core-rigs) |
| D028 | My Tackle Ownership and Rig Readiness Authority | Approved | [`decisions/data-model.md`](decisions/data-model.md#d028--my-tackle-ownership-and-rig-readiness-authority) |
| D029 | User Knowledge Rendering Trust Boundary | Approved | [`decisions/data-model.md`](decisions/data-model.md#d029--user-knowledge-rendering-trust-boundary) |
| D030 | Clear Unavailable-Feature Affordance | Approved | [`decisions/ux-navigation.md`](decisions/ux-navigation.md#d030--clear-unavailable-feature-affordance) |
| D031 | Explicit External Destination CTA Semantics | Approved | [`decisions/ux-navigation.md`](decisions/ux-navigation.md#d031--explicit-external-destination-cta-semantics) |
| D032 | Dashboard Regression Restoration | Approved | [`decisions/ux-navigation.md`](decisions/ux-navigation.md#d032--dashboard-regression-restoration) |
| D033 | Archive Completed Package Artifacts | Approved | [`decisions/workflow.md`](decisions/workflow.md#d033--archive-completed-package-artifacts) |
| D034 | Production Asset Directory Discipline | Approved | [`decisions/media.md`](decisions/media.md#d034--production-asset-directory-discipline) |
| D035 | Single Production-Supported Theme | Approved | [`decisions/architecture.md`](decisions/architecture.md#d035--single-production-supported-theme) |
| D036 | Status and Version Semantics | Approved | [`decisions/workflow.md`](decisions/workflow.md#d036--status-and-version-semantics) |
| D037 | Data-Model Documentation Structure | Approved | [`decisions/data-model.md`](decisions/data-model.md#d037--data-model-documentation-structure) |
| D038 | Repository Continuity Entrypoint | Approved | [`decisions/workflow.md`](decisions/workflow.md#d038--repository-continuity-entrypoint) |
| D039 | Documentation-Validated Closeout | Approved | [`decisions/workflow.md`](decisions/workflow.md#d039--documentation-validated-closeout) |
| D040 | No Unvalidated Build Transition | Approved | [`decisions/workflow.md`](decisions/workflow.md#d040--no-unvalidated-build-transition) |
| D041 | Cross-Segment Decision Capture and Parking | Approved | [`decisions/workflow.md`](decisions/workflow.md#d041--cross-segment-decision-capture-and-parking) |
| D042 | Core Learning Path Visual Emphasis | Approved | [`decisions/ux-navigation.md`](decisions/ux-navigation.md#d042--core-learning-path-visual-emphasis) |
| D043 | Ready-to-Fish Terminal Setups in the Rig Guide | Approved | [`decisions/product.md`](decisions/product.md#d043--ready-to-fish-terminal-setups-in-the-rig-guide) |
| D044 | Single-Owner Core Rig Membership | Approved | [`decisions/data-model.md`](decisions/data-model.md#d044--single-owner-core-rig-membership) |
| D045 | No Generated Rig Assembly Imagery | Approved | [`decisions/media.md`](decisions/media.md#d045--no-generated-rig-assembly-imagery) |
| D046 | Rig Guide Learning-Tier Navigation | Approved | [`decisions/ux-navigation.md`](decisions/ux-navigation.md#d046--rig-guide-learning-tier-navigation) |
| D047 | Section and Subset Search Availability | Approved | [`decisions/ux-navigation.md`](decisions/ux-navigation.md#d047--section-and-subset-search-availability) |
| D048 | Dashboard-Derived Section Card Design | Approved | [`decisions/ux-navigation.md`](decisions/ux-navigation.md#d048--dashboard-derived-section-card-design) |
| D049 | Verified Rig Tutorial Embed Policy | Approved | [`decisions/media.md`](decisions/media.md#d049--verified-rig-tutorial-embed-policy) |
| D050 | Standard Search Field and Clear Control | Approved | [`decisions/ux-navigation.md`](decisions/ux-navigation.md#d050--standard-search-field-and-clear-control) |
| D051 | Context-Preserving Parent Navigation | Approved | [`decisions/ux-navigation.md`](decisions/ux-navigation.md#d051--context-preserving-parent-navigation) |
| D052 | Rig Detail Compact Density | Approved | [`decisions/ux-navigation.md`](decisions/ux-navigation.md#d052--rig-detail-compact-density) |
| D053 | Rig Media Completeness and Tutorial Audit | Approved | [`decisions/media.md`](decisions/media.md#d053--rig-media-completeness-and-tutorial-audit) |
| D054 | Intermediate Rig Tier Membership | Approved | [`decisions/product.md`](decisions/product.md#d054--intermediate-rig-tier-membership) |
| D055 | Durable Decision Context Preservation | Approved | [`decisions/workflow.md`](decisions/workflow.md#d055--durable-decision-context-preservation) |
| D056 | Semantic Single-Owner Data and Relationship Ownership | Approved | [`decisions/data-model.md`](decisions/data-model.md#d056--semantic-single-owner-data-and-relationship-ownership) |
| D057 | Fish Guide Four-State Version 1 Scope | Approved | [`decisions/product.md`](decisions/product.md#d057--fish-guide-four-state-version-1-scope) |
| D058 | Fish Habitat and Waterbody Ownership | Approved | [`decisions/data-model.md`](decisions/data-model.md#d058--fish-habitat-and-waterbody-ownership) |
| D059 | Fish Category Registry and Lifecycle Ownership | Approved | [`decisions/data-model.md`](decisions/data-model.md#d059--fish-category-registry-and-lifecycle-ownership) |
| D060 | Northern Rock Bass Identity and Shared Aliases | Approved | [`decisions/data-model.md`](decisions/data-model.md#d060--northern-rock-bass-identity-and-shared-aliases) |
| D061 | Hierarchical Scoped Search | Approved | [`decisions/ux-navigation.md`](decisions/ux-navigation.md#d061--hierarchical-scoped-search) |
| D062 | Drive Working Package / Local Validation / GitHub Commit Operating Model | Superseded by D068 | [`decisions/workflow.md`](decisions/workflow.md#d062--drive-working-package--local-validation--github-commit-operating-model) |
| D063 | Dashboard Knowledge Hubs and Tackle Capability Boundary | Approved | [`decisions/architecture.md`](decisions/architecture.md#d063--dashboard-knowledge-hubs-and-tackle-capability-boundary) |
| D064 | Repository Disaster Recovery / Reconstruction Gate | Approved | [`decisions/workflow.md`](decisions/workflow.md#d064--repository-disaster-recovery--reconstruction-gate) |
| D065 | Slip Bobber Alternate-Terminal Modeling Gate | Approved | [`decisions/data-model.md`](decisions/data-model.md#d065--slip-bobber-alternate-terminal-modeling-gate) |
| D066 | Nationwide Regulations Resource Gateway and Coverage Exception | Approved | [`decisions/product.md`](decisions/product.md#d066--nationwide-regulations-resource-gateway-and-coverage-exception) |
| D067 | User-Aware User Knowledge Architecture Before Tackle Expansion | Approved | [`decisions/data-model.md`](decisions/data-model.md#d067--user-aware-user-knowledge-architecture-before-tackle-expansion) |
| D068 | Drive-First Complete Working Tree and ChatGPT Project Workflow Performance Standard | Approved | [`decisions/workflow.md`](decisions/workflow.md#d068--drive-first-complete-working-tree-and-chatgpt-project-workflow-performance-standard) |
| D069 | What Should I Throw Prerequisite Architecture and Phase 0 Handoff | Approved | [`decisions/product.md`](decisions/product.md#d069--what-should-i-throw-prerequisite-architecture-and-phase-0-handoff) |
