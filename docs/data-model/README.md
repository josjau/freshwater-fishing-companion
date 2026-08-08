# Freshwater Fishing Companion

**Document:** DATA MODEL INDEX  
**Document Revision:** 0.2.0  
**Document Status:** Approved  
**Decision Baseline:** D037

# Purpose

This directory contains the governing data-model documents for Freshwater Fishing Companion. The model is divided by domain ownership so each concept has one authoritative definition without speculative or nonexistent documents being presented as current sources.

# Governing Principles

- One authoritative definition for every canonical entity.
- Stable identifiers.
- Reference Knowledge separated from User Knowledge.
- User records reference canonical entities whenever practical.
- Local-first and offline-first.
- Simplicity before complexity.
- Derived inverse relationships are preferred over duplicate stored sources of truth.
- Documentation structure must match actual domain ownership.

# Document Organization

## 00 — GLOSSARY

Defines project architecture and domain terminology that must remain consistent.

## 01 — FOUNDATION

Defines global entity, field, search, recommendation-tier, validation, and simplicity standards.

## 02 — FISH

Defines canonical Fish records and identification/reference relationships.

## 03 — RIGS

Defines canonical Rig records, component requirements, physical assembly ownership, variations, and related references.

## 03A — TECHNIQUES

Defines reusable presentation behavior separate from Rig physical assembly.

## 03B — CONDITIONS

Defines reusable environmental and situational fishing conditions.

## 04 — KNOTS

Defines canonical Knot records, use, compatibility, and instruction requirements.

## 05 — TACKLE

Defines canonical functional Tackle Reference Knowledge.

## 05A — INVENTORY

Defines My Tackle/User Knowledge direction for actual owned items, ownership authority, and Rig-readiness integration.

## 06 — LURES

Defines artificial lure concepts and related presentation/reference fields.

## 07 — USER DATA

Defines user-owned profile, preference, favorite, catch, and other User Knowledge domains.

## 08 — BACKUP

Defines backup/restore, validation, migration, and schema compatibility.

## 09 — RELATIONSHIPS

Defines relationship ownership, inverse derivation, connected knowledge, referential integrity, and cross-layer rules.

# Deferred Model Documents

A dedicated Recommendations model is intentionally deferred until its schema is mature enough to document without inventing fields.

A ProductDefinition model is intentionally deferred until an approved commercial-product feature demonstrates the need.

# Reading Order

1. `00-GLOSSARY.md`
2. `01-FOUNDATION.md`
3. Domain document relevant to the active work
4. `09-RELATIONSHIPS.md`
5. `../ARCHITECTURE.md` and `../DECISIONS.md` for structural context

# Maintenance Policy

- Changes to one domain should not require rewriting unrelated domain documents.
- Structural changes are recorded in `../DECISIONS.md`.
- Current implementation and Approved / Not Implemented architecture must remain distinguishable.
- Nonexistent or speculative documents must not be linked as current authoritative sources.

# Related Documents

- `../HANDOFF.md`
- `../PROJECT.md`
- `../SPECIFICATION.md`
- `../ARCHITECTURE.md`
- `../STYLE_GUIDE.md`
- `../ROADMAP.md`
- `../DECISIONS.md`
- `../CHANGELOG.md`
