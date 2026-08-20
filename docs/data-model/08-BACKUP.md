# Freshwater Fishing Companion

**Document:** 08-BACKUP.md  
**Document Revision:** 0.2.0  
**Document Status:** Draft  
**Implementation Status:** Approved Direction / Not Implemented  
**Decision Baseline:** D013, D029, D056

---

# Purpose

This document defines the approved architectural direction for future backup and restore of Freshwater Fishing Companion User Knowledge.

No authoritative production backup/restore system or Version 1 backup schema is implemented on current `main`.

Backup design must follow the User Knowledge schemas that actually become authoritative rather than pre-committing speculative fields or a monolithic user-data structure.

---

# Current Status

**Approved Direction / Not Implemented.**

The project is local-first and intends to provide user-controlled backup and restore. The exact backup file schema, storage technology, schema-version representation, migration pipeline, and included User Knowledge domains remain implementation-gate decisions.

Current transitional Rig-readiness local state is not authoritative My Tackle ownership and must not be promoted into ownership merely because backup functionality is later added.

---

# Design Principles

Future backups should be:

- user-controlled,
- portable,
- version-aware,
- validated before restore,
- reliable and failure-safe,
- human-readable when practical,
- limited to User Knowledge and required compatibility metadata.

Reference Knowledge is application-owned and should normally be restored through the application rather than duplicated as authoritative user backup data.

---

# Backup Scope — To Be Derived from Implemented User Knowledge

A future standard backup may include authoritative User Knowledge domains such as Profile, Preferences, Favorites, My Tackle, Fishing Setups, or Catch Log **only after those domains have implemented schemas**.

This document does not approve those domains' candidate fields.

The backup implementation must explicitly classify transitional/cache/session state so temporary state is not mistaken for persistent user ownership or history.

---

# Backup Format — Unresolved

Earlier planning proposed JSON with concepts such as backup version, application version, date, schema version, and User Data.

JSON remains a reasonable candidate because it is portable and inspectable, but Section 7 does **not** treat that earlier proposal as an implemented Version 1 contract.

The implementation gate must choose the exact envelope and metadata after authoritative User Knowledge schemas exist.

---

# Versioning and Migration

Future backups must identify enough schema/application compatibility information to determine whether a restore is:

- directly compatible,
- safely migratable,
- or unsupported.

Migration must preserve user data whenever practical, report material changes, and never silently discard information.

Exact version fields and migration mechanics remain unresolved until implementation.

---

# Restore Safety

A future restore workflow must be transactional from the user's perspective.

At minimum it should:

1. parse and validate the selected backup,
2. verify compatibility,
3. preserve the existing authoritative User Knowledge before destructive replacement,
4. perform any approved migration,
5. restore only after validation succeeds,
6. report success or failure clearly.

A failed validation or restore must not leave partially replaced User Knowledge.

---

# Validation

The eventual validator must check the actual implemented backup contract, including required metadata, schema compatibility, record integrity, canonical references where applicable, and User Knowledge field validation.

Imported text remains untrusted User Knowledge and follows the same rendering/sanitization boundary as manually entered data.

---

# Import and Export

User-controlled export/import is part of the approved direction.

The exact behavior — full replacement, merge, selective restore, conflict handling, and file selection/storage — remains unresolved until implementation requirements are approved.

No current document should state that Version 1 performs complete restore as though that behavior already exists.

---

# Privacy

Backup files belong to the user.

The architecture does not require cloud storage or an online account. If optional cloud providers are added later, they require separate approval and must not become mandatory for local backup/restore.

---

# Reference Knowledge Boundary

Canonical Fish, Rigs, Knots, Tackle, Media, and other Reference Knowledge remain application-owned.

A backup may retain stable canonical IDs referenced by User Knowledge, but it should not create a second authoritative copy of the canonical entities themselves unless a later historical-snapshot requirement explicitly justifies it.

---

# Implementation Gate

Before backup/restore production work begins, settle at least:

1. which implemented User Knowledge domains are included,
2. backup envelope and file format,
3. schema/application compatibility metadata,
4. validation rules,
5. migration behavior,
6. transactional restore/safety-copy behavior,
7. import/export and conflict semantics,
8. treatment of transitional/session/cache state,
9. canonical-reference integrity behavior,
10. privacy and optional external-storage boundaries.

---

# Future Enhancements

Potential later capabilities include automatic backup reminders, encryption, optional cloud providers, selective restore, and backup comparison. These are feature candidates rather than current schema commitments.

---

# Related Documents

- 01-FOUNDATION.md
- 05A-INVENTORY.md
- 07-USER-DATA.md
- 09-RELATIONSHIPS.md
- ../DECISIONS.md
