# Freshwater Fishing Companion — Data Model Index

**Document:** data-model/README.md  
**Document Revision:** 0.4.0  
**Document Status:** Approved  
**Role:** Canonical data-model ownership map  
**Decision Baseline:** D037, D056, D067  
**Last Updated:** 2026-08-25

# Purpose

This directory contains governing data-model documents divided by semantic ownership. The structure distinguishes implemented schemas, approved/not-implemented architecture, and deferred gates without creating standalone files merely to reserve speculative future domains.

# Governing Principles

- One authoritative semantic owner for every canonical fact/relationship.
- Stable identifiers.
- Reference Knowledge, Decision Knowledge, and User Knowledge remain distinct.
- User records reference canonical entities whenever practical.
- Persistent User Knowledge uses the deliberate user/profile ownership model selected before authoritative My Tackle/Catch Log implementation.
- Local-first/offline-first direction.
- Derived inverse relationships are preferred over duplicate stored sources of truth.
- Candidate fields are not production schema until an implementation gate approves/validates them.
- A Draft document does not by itself approve the domain/architecture it discusses.
- No standalone data-model file is created solely to reserve a possible future entity.

# Canonical Files and Status

| File | Role / current status |
|---|---|
| `01-FOUNDATION.md` | Foundational entity/field/ownership/search/recommendation/trust rules plus canonical architecture terminology. |
| `02-FISH.md` | Current Fish schema plus explicitly separated approved/future Fish architecture. |
| `03-RIGS.md` | Validated canonical Rig schema and ownership boundaries. |
| `03A-TECHNIQUES.md` | Approved / Not Implemented Technique domain boundary. |
| `03B-CONDITIONS.md` | Approved / Not Implemented Condition domain boundary. |
| `04-KNOTS.md` | Validated canonical Knot schema/boundaries. |
| `05-TACKLE.md` | Validated canonical functional Tackle schema plus the deferred separate-Lure architecture gate. |
| `05A-INVENTORY.md` | Approved / Not Implemented My Tackle ownership boundary; detailed owned-item schema unresolved. |
| `07-USER-DATA.md` | User Knowledge architecture boundary plus required User Data and deferred backup/restore gates. |
| `09-RELATIONSHIPS.md` | Validated relationships, Decision Knowledge references, derived inverses, D056 ownership, and deferred future relationships. |

The former standalone glossary, speculative Lure model, and deferred Backup model were consolidated into `01-FOUNDATION.md`, `05-TACKLE.md`, and `07-USER-DATA.md` respectively. Their prior revisions remain recoverable in Git history.

# Current Implemented Canonical Domains

Current production Reference Knowledge includes Fish, Rigs, Knots, Tackle, and Media. Current Decision Knowledge includes Knot task guidance and Reel & Line Setup guidance.

Technique, Conditions, My Tackle, backup/restore, and a possible separate Lure domain remain explicitly not-yet-implemented/deferred as documented by their surviving owners/gates.

# Deferred Model Policy

A dedicated general Recommendation model remains deferred until its schema is mature enough to document without inventing fields. ProductDefinition remains deferred until an approved commercial-product feature demonstrates the need.

Future domains receive a dedicated file only when the domain/architecture is sufficiently approved and complex to need an independent owner.

# Reading Order

1. `01-FOUNDATION.md`;
2. the domain file relevant to active work;
3. `09-RELATIONSHIPS.md` when relationship ownership is material;
4. `../ARCHITECTURE.md` and applicable durable decisions for structural context.

# Maintenance Policy

- GitHub `main` is authoritative for committed implementation state; Drive `Working Source/Current` is authoritative for approved uncommitted work during an active cycle.
- Before changing an existing source/document, use its latest verified contents.
- Changes to one domain should not require rewriting unrelated domains.
- Structural decisions belong in `../DECISIONS.md` / `../decisions/`.
- Current implementation, Approved / Not Implemented, and Deferred / Not Approved states remain visibly distinguishable.
- D056 single-owner semantics apply across domains.
- After synchronization work, changed documents are rechecked against intended repository state.

# Related Documents

- `../WORKING_STATE.md`
- `../PROJECT.md`
- `../ARCHITECTURE.md`
- `../STYLE_GUIDE.md`
- `../ROADMAP.md`
- `../DECISIONS.md`
- `../CHANGELOG.md`
