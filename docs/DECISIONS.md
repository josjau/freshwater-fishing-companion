# Freshwater Fishing Companion

**Document:** DECISIONS.md  
**Version:** 0.1.0  
**Status:** Draft

---

# Purpose

This document records architectural decisions that affect the long-term design of Freshwater Fishing Companion.

Architectural decisions explain **why** a design was chosen. Detailed implementation belongs in other documents.

---

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

---

# D001 – Local-First Architecture

The Companion stores user data locally and functions without requiring cloud services or an online account.

---

# D002 – Modular Data Model Documentation

The data model is divided into focused documents instead of a single large specification.

---

# D003 – Canonical Fishing Techniques

Fishing techniques are independent entities referenced by rigs rather than embedded within them.

---

# D004 – Canonical Conditions

Environmental and situational conditions are modeled as canonical entities shared across the application.

---

# D005 – Canonical Capabilities

Capabilities describe what an item can do rather than what it is, enabling functional recommendations.

---

# D006 – Separate Equipment and Consumables

Durable equipment and consumable tackle are modeled separately while presented together as "My Tackle."

---

# D007 – Canonical Recommendation Engine

Recommendations are independent from factual reference data and always include supporting rationale.

---

# D008 – Canonical Source Registry

Reference information should be traceable to documented sources where appropriate.

---

# D009 – Three-Layer Knowledge Architecture

The application is organized into:

- Reference Knowledge
- Decision Knowledge
- User Knowledge

---

# D010 – Canonical Taxonomies

Controlled vocabularies are managed centrally and referenced throughout the application.

---

# D011 – Canonical Glossary

Architectural terminology is defined once and referenced consistently across all documentation.

---

# D012 – Inventory-Centric Architecture

Inventory is the parent domain for equipment, consumables, fishing setups, and related inventory features.

---

# D013 – Canonical Inventory Locations

Inventory locations identify where user-owned items are stored using reusable location records.
