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

A Rig's component requirements and current ownership/readiness state are presented in one `What You Need` section. Each component remains text-first, uses `Name ⓘ` for identification help, and includes an inline ownership control. The page calculates Ready/Missing status from the same component list. A separate Rig readiness page is not part of the primary workflow.

The lightweight local ownership state is transitional. When My Tackle inventory is implemented, inventory becomes the authoritative ownership source without changing the combined Rig-page interaction.

# D021 – Three-Interaction Field Workflow Target

Common field workflows should remain within approximately three intentional interactions from a relevant entry point whenever practical. Intermediate pages should exist only when they provide distinct value. Contextual popovers are preferred for recognition help, and readiness should remain on the Rig detail page rather than requiring a separate navigation step.
