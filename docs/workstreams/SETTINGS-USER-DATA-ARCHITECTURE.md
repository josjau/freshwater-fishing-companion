# Freshwater Fishing Companion — Settings / User Data Architecture

**Document:** workstreams/SETTINGS-USER-DATA-ARCHITECTURE.md  
**Document Status:** Active — Architecture Planning  
**GitHub Baseline:** `584f97caa4874075f745834145813ac9bdcf78b3` (`Close Recommendation Prerequisites Foundation`)  
**Decision Baseline:** D028, D029, D056, D067, D069  
**Created:** 2026-08-30

# Purpose

Settle the shared User Knowledge identity, synchronization, persistence, retention, migration, backup/restore, preference, and ownership boundaries before authoritative My Tackle or Catch Log implementation and before What Should I Throw can rely on authoritative availability.

This is an architecture-planning workstream. It does **not** authorize production User Data/My Tackle source implementation until the Planning-to-Build documentation gate closes.

# Governing Boundaries

- Reference Knowledge remains application-owned; User Knowledge remains user-owned.
- Persistent User Knowledge belongs to a deliberate stable user/profile identity rather than a browser/device storage bucket.
- Current Rig-readiness `localStorage` state is transitional availability only and is not authoritative ownership.
- My Tackle is the only future persistent ownership source; temporary/current availability must not silently create ownership.
- User-entered/imported data remains untrusted at rendering boundaries.
- Do not create a speculative universal user-data mega-schema or feature-specific storage islands.
- GATE-012 Repository Disaster Recovery / Reconstruction must close before major Version 1 release or before irreplaceable User Knowledge enters scope, whichever occurs first.

# UD-1 — Persistent Synced User Identity — LOCKED / Refinement Allowed

FCC targets one persistent user identity/profile that may span multiple devices.

- Each device may maintain a local offline-capable copy of supported User Knowledge.
- Durable profile-owned records synchronize through a shared profile-scoped service when connectivity is available.
- Devices are replicas of the same semantic profile rather than separate users.
- Cross-device synchronization requires secure authentication or an equivalent approved account/device-linking mechanism.
- Synchronization is record-oriented rather than whole-profile replacement so independent changes can be reconciled without replacing an entire profile dataset.
- Manual export/restore is backup, portability, and disaster recovery rather than routine cross-device synchronization.
- Multi-profile/family sharing remains deferred.
- Current readiness state is not automatically migrated into My Tackle ownership.

UD-1 may be refined if later persistence, conflict-resolution, privacy, security, or implementation findings demonstrate a better boundary without silently changing the approved cross-device product goal.

# Open Architecture Decisions

1. **UD-2 — Identity + Sync Model:** authentication/account-linking method, profile bootstrap/recovery, sync-service boundary, security/privacy expectations.
2. **UD-3 — Local Persistence Technology:** authoritative local/offline store and access abstraction.
3. **UD-4 — User Data Store Structure:** how Profile, Preferences, My Tackle, Catch Log, and later User Knowledge coexist without a speculative monolith.
4. **UD-5 — Schema Versioning + Migration:** compatibility, migrations, rollback/failure handling.
5. **UD-6 — Retention + Deletion:** browser/site-data clearing, app reset, account/profile deletion, tombstones/retention as required by sync.
6. **UD-7 — Preference Ownership:** profile-owned versus device-local preferences, including future preferred Regulations states and theme behavior.
7. **UD-8 — Ownership vs Current Availability:** owned, borrowed, packed/with-me, temporary/session, and transitional readiness semantics.
8. **UD-9 — Export / Backup / Restore:** portable recovery, validation, transactional restore, compatibility, safety copy/rollback.
9. **UD-10 — Conflict / Multi-Device Reconciliation:** concurrent record edits, deletion/resurrection prevention, deterministic automatic merges versus user-visible conflict resolution.
10. **UD-11 — Settings UX Boundary:** Profile, Appearance, Data Management, About, and any account/sync status surfaces.
11. **UD-12 — Architecture Closeout:** reconcile all locks into canonical owners, validator expectations, active state, and first authorized My Tackle/User Data build action.

Decision numbering in this workstream is local planning vocabulary, not new global `D###` decision IDs.

# Current Gate State

- Recommendation Prerequisites Foundation: CLOSED / PASS / FINAL.
- GATE-006 Settings / User Data Architecture: ACTIVE / REQUIRED.
- GATE-007 My Tackle Availability Foundation: BLOCKED behind this workstream.
- GATE-004 What Should I Throw production: BLOCKED behind GATE-006 and GATE-007.
- No User Data/My Tackle production write is authorized yet.

# Documentation Execution Gate

Every material lock must be checkpointed in the compact Live Working State and, when durable, reconciled into the applicable canonical owner. The Live Working State must not accumulate historical checkpoint chains. Before production implementation begins, the Planning-to-Build closeout must give every applicable owner an UPDATED / VERIFIED — NO CHANGE REQUIRED / NOT APPLICABLE disposition, remove superseded planning language, run required consistency/Repository Integrity validation, verify changed-file scope/readback, and record the first authorized build action.

# Exact Resume

**UD-2 — Identity + Sync Model.** Settle secure identity/account linking and the synchronization-service boundary before selecting the authoritative local persistence technology.
