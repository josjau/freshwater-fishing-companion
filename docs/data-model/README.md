# Freshwater Fishing Companion

**Document:** DATA MODEL INDEX  
**Document Revision:** 0.3.0  
**Document Status:** Approved  
**Decision Baseline:** D037, D056

---

# Purpose

This directory contains the governing data-model documents for Freshwater Fishing Companion. The model is divided by semantic ownership so each concept has one authoritative definition and current implementation remains distinguishable from approved future architecture.

---

# Governing Principles

- One authoritative semantic owner for every canonical fact or relationship.
- Stable identifiers.
- Reference Knowledge, Decision Knowledge, and User Knowledge remain distinct.
- User records reference canonical entities whenever practical.
- Local-first and offline-first direction.
- Simplicity before complexity.
- Derived inverse relationships are preferred over duplicate stored sources of truth.
- Documentation must distinguish implemented schemas from approved-but-not-implemented designs.
- Candidate fields are not production schema until an implementation gate approves and validates them.

---

# Document Organization and Status

## 00 — GLOSSARY

**Approved.** Defines project architecture, ownership, implementation-status, and domain terminology.

## 01 — FOUNDATION

**Draft governing standard.** Defines global entity, field, ownership, validation, search, recommendation, trust-boundary, and simplicity standards.

## 02 — FISH

**Mixed.** Documents the current implemented Fish schema separately from the approved Fish Guide Phase 0 target expansion.

## 03 — RIGS

**Validated.** Documents the current 20-Rig canonical schema, component requirements, assembly ownership, Knot applications, variations, Media ownership boundary, and deferred Rig↔Technique relationship.

## 03A — TECHNIQUES

**Approved / Not Implemented.** Defines reusable presentation behavior and the future Technique architecture gate without pre-approving speculative relationship fields.

## 03B — CONDITIONS

**Approved / Not Implemented.** Defines the future Condition domain boundary without treating candidate taxonomy, weighting, or relationship fields as production schema.

## 04 — KNOTS

**Validated.** Defines the current canonical Knot schema and its boundaries with Rig context, Media ownership, Knot task guidance, and Reel & Line Setup Decision Knowledge.

## 05 — TACKLE

**Validated.** Defines the current canonical functional Tackle schema, Rig requirement relationship, derived `Used In` navigation, and Media-owned attachments.

## 05A — INVENTORY

**Approved / Not Implemented.** Defines My Tackle ownership authority, transitional readiness boundary, and future implementation gate. Detailed owned-item and Fishing Setup schemas remain unresolved.

## 06 — LURES

**Approved domain concept / Schema Not Implemented.** Defines the potential separate Lure domain and requires the Lure-versus-current-Tackle boundary to be resolved before implementation.

## 07 — USER DATA

**Mixed / Mostly Not Implemented.** Defines User Knowledge boundaries and implementation gates while recognizing current lightweight readiness persistence as transitional rather than a general authoritative User Data schema.

## 08 — BACKUP

**Approved Direction / Not Implemented.** Defines backup/restore safety and compatibility principles without pre-committing a Version 1 file contract before authoritative User Knowledge schemas exist.

## 09 — RELATIONSHIPS

**Mixed.** Governs validated current relationships, Decision Knowledge references, derived inverses, D056 semantic ownership, and explicitly deferred future relationships.

---

# Current Implemented Canonical Domains

Current production Reference Knowledge includes:

- Fish,
- Rigs,
- Knots,
- Tackle,
- Media.

Current Decision Knowledge includes Knot task guidance and Reel & Line Setup guidance.

Approved future domains such as Technique, Conditions, My Tackle, Backup, and a possible separate Lure entity must not be treated as production datasets until implemented and validated.

---

# Deferred Model Documents

A dedicated general Recommendations model remains deferred until its schema is mature enough to document without inventing fields.

A Product Definition model remains deferred until an approved commercial-product feature demonstrates the need.

No standalone document should be created merely to reserve a possible future entity.

---

# Reading Order

1. `00-GLOSSARY.md`
2. `01-FOUNDATION.md`
3. domain document relevant to the active work
4. `09-RELATIONSHIPS.md`
5. `../ARCHITECTURE.md` and `../DECISIONS.md` for structural context

---

# Maintenance Policy

- GitHub `main` source is authoritative for current implementation state.
- Before changing an existing source/document, re-fetch its latest contents.
- Changes to one domain should not require rewriting unrelated domains.
- Structural decisions belong in `../DECISIONS.md`.
- Current implementation and Approved / Not Implemented architecture must remain visibly distinguishable.
- Candidate fields and relationships must not be described as production simply because they appear in planning documents.
- D056 single-owner semantics apply across all domains.
- Nonexistent or speculative documents must not be linked as current authoritative sources.
- After synchronization work, changed documents should be re-fetched and verified against the intended repository state.

---

# Related Documents

- `../HANDOFF.md`
- `../PROJECT.md`
- `../SPECIFICATION.md`
- `../ARCHITECTURE.md`
- `../STYLE_GUIDE.md`
- `../ROADMAP.md`
- `../DECISIONS.md`
- `../CHANGELOG.md`
