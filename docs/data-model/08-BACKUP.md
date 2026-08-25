# Freshwater Fishing Companion

**Document:** 08-BACKUP.md  
**Document Revision:** 0.2.2  
**Document Status:** Draft  
**Implementation Status:** Deferred / Not Implemented / Architecture Not Yet Approved  
**Decision Baseline:** D029, D056, D067

---

# Purpose

This document preserves design requirements and questions for possible future backup and restore of Freshwater Fishing Companion User Knowledge.

No authoritative production backup/restore system, approved backup architecture, or Version 1 backup schema is implemented on current `main`.

Backup design must follow the User Knowledge schemas that actually become authoritative rather than pre-committing speculative fields or a monolithic user-data structure.

---

# Current Status

**Draft / Deferred / Not Implemented — backup and restore architecture must be approved at the User Data architecture gate.**

The project is local-first, so user-controlled backup and restore is a reasonable future capability to evaluate. That direction is not yet a settled implementation architecture. The exact backup scope, file schema, storage technology, schema-version representation, migration pipeline, included User Knowledge domains, and preservation of user/profile ownership relationships remain architecture-gate decisions under D067.

Current transitional Rig-readiness local state is not authoritative My Tackle ownership and must not be promoted into ownership merely because backup functionality is later considered.

---

# Candidate Design Principles — Revalidate at Architecture Gate

If backup/restore is approved, the design should evaluate requirements such as:

- user control,
- portability,
- version awareness,
- validation before restore,
- reliable and failure-safe behavior,
- human readability when practical,
- limiting authoritative backup content to User Knowledge and required compatibility metadata.

Reference Knowledge is application-owned and should normally be restored through the application rather than duplicated as authoritative user backup data unless a later approved requirement justifies a historical snapshot.

---

# Backup Scope — Unresolved

A future backup could include authoritative User Knowledge domains such as Profile, Preferences, Favorites, My Tackle, Fishing Setups, or Catch Log only after those domains have implemented schemas and the backup architecture gate approves their inclusion.

This document does not approve those domains' candidate fields or commit them to backup scope.

Any future implementation must explicitly classify transitional/cache/session state so temporary state is not mistaken for persistent user ownership or history.

---

# Backup Format — Unresolved

Earlier planning proposed JSON with concepts such as backup version, application version, date, schema version, and User Data.

JSON remains a candidate because it is portable and inspectable, but it is **not an approved Version 1 contract**.

The architecture gate must choose the exact envelope and metadata after authoritative User Knowledge schemas exist.

---

# Versioning and Migration — Candidate Requirements

If backup/restore is approved, the architecture should provide enough schema/application compatibility information to determine whether a restore is:

- directly compatible,
- safely migratable,
- or unsupported.

Migration should preserve user data whenever practical, report material changes, and never silently discard information.

Exact version fields and migration mechanics remain unresolved until implementation.

---

# Restore Safety — Candidate Requirement

Any future restore implementation should be transactional from the user's perspective and must not leave partially replaced User Knowledge after a failed validation or restore.

The architecture gate must define the exact validation, safety-copy, migration, replacement/merge, rollback, and reporting behavior before implementation.

---

# Validation

The eventual validator must check the actual approved backup contract. Potential checks include required metadata, schema compatibility, record integrity, canonical references where applicable, and User Knowledge field validation.

Imported text remains untrusted User Knowledge and follows the same rendering/sanitization boundary as manually entered data.

---

# Import and Export — Unresolved

User-controlled export/import is a candidate capability, not an approved current workflow.

Full replacement, merge, selective restore, conflict handling, file selection/storage, and failure recovery remain unresolved until the User Data architecture gate approves requirements.

No current document should state that Version 1 performs complete restore as though that behavior already exists.

---

# Privacy

Any future backup design must preserve the project's local-first boundary and treat backup files as user-controlled data.

Cloud storage or an online account must not be assumed as a required dependency. Any optional external-storage provider would require separate approval.

---

# Reference Knowledge Boundary

Canonical Fish, Rigs, Knots, Tackle, Media, and other Reference Knowledge remain application-owned.

If backup is approved, stable canonical IDs referenced by User Knowledge may need compatibility handling, but backup must not create a second authoritative copy of canonical entities unless a later historical-snapshot requirement explicitly justifies it.

---

# Architecture Gate

Before backup/restore production work begins, the User Data architecture gate must decide and approve at least:

1. the stable user/profile ownership model whose User Knowledge is being backed up/restored,
2. whether backup/restore is in the applicable product scope,
3. which implemented User Knowledge domains are included,
4. backup envelope and file format,
5. schema/application compatibility metadata,
6. validation rules,
7. migration behavior,
8. transactional restore/safety-copy behavior,
9. import/export and conflict semantics,
10. treatment of transitional/session/cache state,
11. canonical-reference integrity behavior,
12. privacy and optional external-storage boundaries.

---

# Future Enhancements

Potential later capabilities include automatic backup reminders, encryption, optional cloud providers, selective restore, and backup comparison. These are feature candidates rather than current architecture commitments.

---

# Related Documents

- 01-FOUNDATION.md
- 05A-INVENTORY.md
- 07-USER-DATA.md
- 09-RELATIONSHIPS.md
- ../DECISIONS.md
