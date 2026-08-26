# Freshwater Fishing Companion

**Document:** 07-USER-DATA.md  
**Document Revision:** 0.4.0  
**Document Status:** Draft  
**Implementation Status:** Mixed — transitional local state exists; authoritative User Knowledge schemas not implemented  
**Decision Baseline:** D028, D029, D056, D067

---

# Purpose

This document defines the architectural boundary for User Knowledge in Freshwater Fishing Companion and distinguishes current persisted application state from future authoritative user-data domains.

User Knowledge is information created, maintained, or owned by the angler. It remains separate from application-owned Reference Knowledge and contextual Decision Knowledge.

---

# Current Production State

Current `main` does **not** implement one authoritative general User Data schema containing Profile, Preferences, Favorites, My Tackle, Fishing Setups, Catch Log, and Backup History.

The application currently persists lightweight local Rig-readiness selections. That state is transitional availability data and is not authoritative My Tackle ownership.

Other user-facing areas may exist as routes or UI placeholders, but their presence does not establish a production persistence schema.

Accordingly, the structures below are architectural domains and candidate concepts unless explicitly identified as current production state.

---

# Design Principles

- Reference Knowledge remains application-owned.
- User Knowledge remains user-owned.
- Persistent User Knowledge must belong to a deliberate stable user/profile identity; a storage bucket or device is not itself the semantic user.
- User records should reference canonical IDs rather than duplicate canonical definitions whenever practical.
- Every persisted field requires a demonstrated feature and documented owner.
- User Knowledge is data, not markup.
- No workflow may infer persistent ownership merely from temporary availability or use.
- Backup design must follow the schemas that actually become authoritative rather than inventing them in advance.

---

# Approved Future User Knowledge Domains

Potential authoritative domains include:

- User Profile,
- Preferences,
- Favorites,
- My Tackle,
- Fishing Setups,
- Catch Log,
- Backup History or backup metadata if demonstrated necessary.

These domain names do **not** approve the earlier candidate field lists as production schema.

---

# User/Profile Identity — Required Architecture, Schema Unresolved

D067 requires the Settings / User Data Architecture gate to establish a stable owner/context for persistent User Knowledge before My Tackle or Catch Log becomes authoritative.

Version 1 may remain a single local user/profile and does not require authentication. The requirement is semantic ownership and migration clarity: persistent records must not implicitly treat "whatever is in this browser storage bucket" as the user with no stable ownership model.

Earlier planning identified possible profile concepts such as display name, experience level, measurement preference, and preferred region. Those remain design inputs, not approved fields. The gate must distinguish the minimal stable identity needed to own User Knowledge from optional profile attributes that require separate feature justification.

---

# Preferences — Schema Unresolved

Preferences may eventually control application behavior such as display or workflow choices.

No production Preferences schema is approved here. Candidate examples from earlier drafts must not be treated as committed fields.

Under D066/D067, preferred Regulations states are an approved future preference concept to evaluate after the User Data architecture exists. The preferred behavior is prioritization/pinning while preserving access to the complete supported state list; no field name or persistence shape is approved yet.

Preferences may never modify canonical Reference Knowledge.

---

# Favorites — Schema Unresolved

Favorites may eventually provide quick access to supported entities or user-defined records.

The exact supported entity types, persistence shape, ordering behavior, and lifecycle rules remain unresolved. A visible Favorites route does not by itself establish a persistence schema.

---

# My Tackle — Approved / Not Implemented

My Tackle is User Knowledge containing actual owned fishing items. Its detailed owned-item schema is governed by `05A-INVENTORY.md` and remains unresolved.

Once authoritative, persistent ownership may only be changed through explicit My Tackle ownership-management workflows. Rig Readiness, Search, Recommendations, borrowed tackle, prior readiness selections, and inferred usage may not silently create or modify ownership.

---

# Fishing Setups — Conceptual / Not Implemented

A future Fishing Setup may reference existing owned equipment for a particular purpose.

The approved principle is to reference owned items rather than duplicate them. Exact setup fields and persistence behavior are unresolved.

---

# Catch Log — Domain Approved / Schema Unresolved

Catch Log is a User Knowledge domain for fishing events.

Earlier planning identified possible references and observations such as Fish, Rig, Technique, Lure, setup, date, measurements, location, notes, or photos. These are candidate concepts rather than an approved production record shape.

When Catch Log implementation begins, each field must be justified by an approved feature, and historical snapshot requirements must be distinguished from live canonical references.

Catch records must never modify canonical Fish or other Reference Knowledge.

---

# Backup Metadata — Deferred

Backup history or metadata may be useful after backup/restore is implemented. No production Backup History record schema is approved here.

Backup/restore architecture is governed by the gate below and must follow the actual authoritative User Knowledge schemas.

---

# Backup / Restore Architecture Gate — Deferred

No authoritative production backup/restore system or Version 1 backup schema is currently implemented or approved. Backup design must follow the User Knowledge schemas that actually become authoritative rather than pre-commit speculative fields or a monolithic user-data structure.

If backup/restore enters implementation scope, the User Data architecture gate must decide at least:

1. the stable user/profile owner whose User Knowledge is being backed up/restored;
2. whether backup/restore is in the applicable product scope;
3. which **implemented** User Knowledge domains are included;
4. backup envelope/file format and user-control/portability requirements;
5. schema/application compatibility metadata;
6. pre-restore validation and canonical-reference integrity rules;
7. migration behavior and unsupported-version handling;
8. transactional restore, safety-copy, rollback, and failure reporting;
9. replacement/merge/selective-restore/conflict semantics;
10. treatment of transitional/session/cache state so temporary availability is never promoted into ownership/history;
11. import/export handling and the existing untrusted-User-Knowledge rendering boundary;
12. privacy, device-transfer expectations, and optional external/cloud-storage boundaries.

JSON is a plausible portable/inspectable format but is **not** an approved Version 1 contract. Reference Knowledge should normally be restored with the application rather than duplicated as authoritative user backup data; stable canonical IDs may require compatibility handling.

Any future restore should be transactional from the user's perspective and must not leave partially replaced User Knowledge after failed validation/migration/restore.

Cloud storage/accounts are not assumed dependencies. Optional providers require separate explicit value/privacy/maintenance approval.

# Data Ownership

User Knowledge belongs to the user.

The application may modify user-created information only in response to explicit user actions or an approved, validated migration process.

Reference Knowledge updates must not overwrite User Knowledge merely because a referenced canonical entity changes.

---

# Rendering Trust Boundary

User-entered and imported content is untrusted by default.

Rules:

- prefer safe DOM APIs such as `textContent`,
- do not concatenate user-controlled strings directly into `innerHTML`,
- imported data follows the same trust rules as manually entered data,
- if formatted User Knowledge is later required, use one centrally owned approved sanitization path,
- do not scatter ad hoc escaping/sanitization logic across features.

Permanent principle:

> **User Knowledge is data, not markup.**

---

# Local-First Direction

The project remains local-first. That architectural direction does not by itself commit a specific storage technology, monolithic user-data object, or backup format for domains that are not yet implemented.

Persistence choices must be made against the requirements of each approved User Knowledge feature and coordinated with migration/backup compatibility.

---

# Implementation Gates

Before material Tackle expansion and before each persistent User Knowledge domain becomes authoritative, the Settings / User Data Architecture gate must settle the shared foundation and each domain gate must settle its specifics, including:

1. stable user/profile identity and record ownership,
2. exact field schema and field ownership,
3. canonical reference versus historical snapshot behavior,
4. validation rules,
5. persistence/storage technology and behavior,
6. retention behavior, including browser/site-data clearing,
7. migration/versioning requirements,
8. backup/export/import/restore requirements,
9. device-transfer expectations and optional synchronization boundaries,
10. rendering and sanitization boundaries,
11. deletion and lifecycle behavior.

Do not create a universal user-data schema containing speculative fields merely to reserve future capability.

---

# Future Enhancements

Potential later capabilities include multiple profiles, cloud synchronization, shared accounts, achievement/statistics features, and richer User Knowledge. Each requires separate approval and must build on implemented authoritative schemas.

---

# Related Documents

- 01-FOUNDATION.md
- 02-FISH.md
- 03-RIGS.md
- 05-TACKLE.md
- 05A-INVENTORY.md
- 09-RELATIONSHIPS.md
- ../DECISIONS.md
