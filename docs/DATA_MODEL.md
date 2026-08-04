# Freshwater Fishing Companion

**Document:** DATA_MODEL.md  
**Version:** 0.1.0  
**Status:** Draft  
**Decision Baseline:** D002

---

# Purpose

This document defines the canonical data model for Freshwater Fishing Companion.

The data model establishes the authoritative structure and terminology used throughout the application.

Application screens, recommendations, inventories, favorites, catch records, backups, and future features shall reference these canonical definitions rather than maintaining duplicate information.

---

# Data Model Principles

The Companion shall follow these principles:

- Every canonical entity has one authoritative definition.
- User-generated records reference canonical entities by stable identifiers.
- Display names may change without breaking references.
- Identifiers shall not be reused.
- Reference data and user data shall remain separate.
- Data structures shall remain understandable without a framework.
- Fields shall only be added when they serve a defined use case.
- Optional fields shall not be populated with invented or placeholder values.
- Backup files shall include schema and application version information.
- Data migrations shall preserve user data whenever practical.

---

# Identifier Standard

Every canonical entity shall have a stable `id`.

Identifiers shall:

- Use lowercase letters.
- Use hyphens between words.
- Avoid spaces.
- Avoid punctuation other than hyphens.
- Remain unchanged after release.
- Describe the entity clearly.

Examples:

```text
largemouth-bass
texas-rig
improved-clinch-knot
ewg-hook
green-pumpkin
grand-lake-o-the-cherokees