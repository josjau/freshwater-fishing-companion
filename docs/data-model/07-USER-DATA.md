# Freshwater Fishing Companion

**Document:** 07-USER-DATA.md  
**Document Revision:** 0.13.1  
**Document Status:** Draft  
**Implementation Status:** Mixed — transitional local state exists; authoritative User Knowledge schemas not implemented  
**Decision Baseline:** D028, D029, D056, D067, D069

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

# Approved Sequencing Refinement

D069 refines the roadmap trigger in D067 without changing D067's ownership principle. Conditions, Lure/Bait, Techniques/Compatibility, GATE-006 Settings / User Data Architecture, and the scoped GATE-007 My Tackle Availability Foundation are now complete prerequisites. GATE-004 What Should I Throw production is active. Full Tackle Reference expansion and Catch Log remain later work unless a direct dependency is demonstrated.

UD-8 settles the architecture-level persistent-ownership versus current-availability boundary so Recommendation can determine executability without converting borrowed/session state into ownership. GATE-007 subsequently settled the bounded Recommendation-facing family/mapping/quantity/Setup/reconciliation/freshness mechanics in `05A-INVENTORY.md`; broader My Tackle product persistence/UI remains separate implementation work.

# User/Profile Identity — UD-1 LOCKED / Refinement Allowed

D067 requires the Settings / User Data Architecture gate to establish a stable owner/context for persistent User Knowledge before My Tackle or Catch Log becomes authoritative.

UD-1 establishes the current Version 1 architecture baseline:

- one persistent FCC user identity/profile may span multiple devices;
- each device may maintain a local offline-capable copy of supported User Knowledge;
- supported durable User Knowledge synchronizes through a shared profile-scoped service when connectivity is available;
- devices are replicas of the same semantic profile rather than independent profiles;
- cross-device synchronization requires secure authentication or an equivalent approved account/device-linking mechanism;
- synchronization is record-oriented rather than whole-profile replacement so independent changes can be reconciled;
- manual export/restore is backup, portability, and disaster recovery rather than the normal multi-device synchronization workflow;
- multi-profile/family sharing remains deferred.

UD-1 may be refined if later persistence, conflict-resolution, privacy, security, or implementation findings demonstrate a better boundary without silently changing the approved cross-device product goal.

UD-11 settles the Version 1 Profile boundary: FCC-owned Profile data contains only an optional synchronized **Display Name** unless a later implemented feature demonstrates another field. Authentication email/provider/state may be displayed read-only from the authentication layer and are not duplicated as editable Profile fields. Experience level, address/phone, Home/Primary State, fishing-license data, favorite species, biography, and similar speculative profile attributes are not approved.

# Identity + Sync Model — UD-2 LOCKED / Refinement Allowed

UD-2 establishes the current working Version 1 identity/synchronization architecture:

- Firebase Authentication is the locked Version 1 identity provider, refinement allowed; the authenticated Firebase UID is the stable technical identity used to scope the FCC profile.
- Additional devices access the same semantic FCC profile by authenticating to the same account; a custom Version 1 device-linking protocol is not currently required.
- Initial sign-in mechanisms are email/password and Google Sign-In, subject to implementation/security refinement.
- Reference Knowledge remains usable while signed out. Authentication is required when a user elects to create or synchronize durable profile-owned User Knowledge.
- Cloud Firestore is the locked Version 1 profile-scoped synchronization service, refinement allowed. User Knowledge synchronizes as independently addressable records/documents rather than one replaceable profile payload.
- The statically hosted browser application may use the supported Firebase web SDK directly. No custom application server or Cloud Functions dependency is approved without a demonstrated later requirement.
- Firestore Security Rules must enforce authenticated UID-scoped authorization.
- Firestore offline caching/synchronization is transport behavior only; UD-10 remains responsible for FCC application-level revision, conflict, deletion/tombstone, and resurrection-prevention semantics.
- Automatic cloud backup remains a separate recovery concern under UD-9.
- The provider choice is LOCKED / refinement allowed and may be revisited only if pricing/free-tier, browser/PWA compatibility, security/privacy, exportability, or implementation findings materially violate project constraints without changing UD-1's approved cross-device goal.

# Local Persistence Technology — UD-3 LOCKED / Refinement Allowed

UD-3 establishes the Version 1 local/offline persistence boundary:

- Under locked UD-2, Cloud Firestore is the durable synchronized authority for authenticated profile-owned User Knowledge.
- Firestore persistent browser cache is the local/offline replica where supported; FCC does not maintain a parallel authoritative IndexedDB User Knowledge database.
- All persistent User Knowledge access must pass through an FCC-owned repository/data-access abstraction. Feature modules should not scatter direct Firebase/Firestore persistence calls.
- The repository abstraction exposes FCC-facing read/write/query/subscription behavior without duplicating the same persisted records into another authoritative local store.
- Firebase owns its internal browser-cache implementation; FCC must not depend on, directly manipulate, or migrate Firebase's private IndexedDB structures.
- Persistent multi-tab caching should be enabled where supported. If persistent cache initialization is unavailable or fails, the application must degrade safely to supported memory/online behavior rather than failing normal Reference Knowledge use.
- The local cache is neither backup nor a second ownership source. Browser/site-data clearing may remove the local replica without deleting synchronized cloud records; UD-6 owns exact reset and retention semantics.
- UD-9 owns export/backup/restore. UD-10 owns application-level conflict, deletion/tombstone, concurrent-edit, and resurrection-prevention behavior.
- Existing Rig-readiness `localStorage` remains transitional availability state and is not automatically migrated into authoritative User Knowledge.

UD-3 may be refined if browser support, Firebase persistence behavior, a later UD-2 provider change, security/privacy findings, or demonstrated product requirements require a different implementation. The durable architectural principle is one authoritative User Knowledge persistence path behind an FCC-owned access abstraction unless a later explicit decision demonstrates why a second authoritative local store is necessary.

---

# User Data Store Structure — UD-4 LOCKED / Refinement Allowed

UD-4 establishes the shared structural partition for persistent User Knowledge without approving speculative domain fields.

- Persistent User Knowledge is profile-scoped beneath the authenticated user identity and is partitioned into semantic domains rather than one universal User Data document or one generic type-discriminated User Knowledge collection.
- The profile root is an ownership container and may hold only small, bounded profile-level metadata approved by demonstrated features. Growing record sets must not be embedded as arrays or generic payloads in the profile root.
- Bounded singleton concerns such as Profile and profile-owned Preferences may use dedicated documents. UD-7 still owns the profile-owned versus device-local preference split.
- My Tackle uses individually addressable owned-item records; Fishing Setups use individually addressable setup records; Catch Log uses individually addressable catch/event records; persistent Favorites use individual relationship records if/when that domain is implemented. Future User Knowledge receives a separate semantic domain only when approved.
- Cross-domain relationships and relationships to canonical Reference Knowledge use stable IDs rather than duplicated authoritative copies.
- The FCC-owned repository/data-access abstraction exposes semantic domain behavior and hides provider-specific physical paths from feature/UI modules.
- Under locked UD-2, the physical Firestore mapping should be profile-scoped beneath the authenticated UID, but exact collection/document names are not locked by UD-4.
- Each profile-owned persistent domain requires explicit authenticated ownership authorization coverage.
- Exact domain fields, timestamps/revisions, tombstones, deletion mechanics, conflict metadata, export envelopes, and temporary/current availability remain owned by their later decisions or domain gates. Schema-version and migration semantics are governed by UD-5 below.
- No speculative empty collections or fields are approved merely to reserve future capability.

UD-4 may be refined if provider choice or demonstrated domain requirements require a better physical mapping without changing the profile-scoped semantic-domain principle.

---

# Schema Versioning + Migration — UD-5 LOCKED / Refinement Allowed

UD-5 defines how authoritative User Knowledge remains compatible when an implemented persisted schema changes.

- Every authoritative persisted User Knowledge document/record carries a positive integer `schemaVersion`, beginning at `1` for that record type's first authoritative schema.
- The version belongs to the persisted document/record, not to each field inside it. A bounded singleton Preferences document therefore has one document-level `schemaVersion`; individual preference fields do not. Each independently addressable My Tackle item, Fishing Setup, Catch Log event, or Favorite relationship carries its own record-level `schemaVersion`. A collection/domain does not also require a separate global schema version merely because its records are independently versioned.
- Different record types/domains evolve independently, and records within one domain may temporarily contain different supported schema versions while incremental migration occurs. Schema versions are not application-release numbers and change only when persisted structure or semantics require compatibility handling.
- The FCC-owned repository/data-access boundary owns compatibility checks, validation, and migration. Supported older records may be upgraded through explicit incremental forward transformations when read, then validated before the upgraded representation is persisted. Record-local/on-read migration is the default unless a demonstrated cross-record requirement justifies coordinated migration.
- Migration must be deterministic and safe to retry. `schemaVersion` advances only after the transformed record is valid and the upgrade is successfully persisted. A failed migration preserves the last valid authoritative record rather than partially rewriting it, discarding unknown data, or resetting it to defaults.
- A client that encounters a newer unsupported `schemaVersion` must not overwrite, downgrade, or destructively reconstruct that record.
- Schema evolution is forward-only by default. Software rollback does not automatically downgrade already migrated data. Explicit reverse migration requires a demonstrated need and safe recovery plan. Backup/export/restore recovery remains owned by UD-9; concurrent-edit/conflict semantics remain owned by UD-10.
- No speculative global profile schema version, migration-history array, universal migration database, or migration machinery is approved for domains or versions that do not yet exist.

Exact domain fields remain owned by their domain gates. UD-5 establishes the compatibility contract without pre-building migrations before an authoritative schema actually changes.

---

# Retention + Deletion — UD-6 LOCKED / Refinement Allowed

UD-6 defines the lifecycle boundary between local replicas, synchronized User Knowledge, record deletion, and full profile/account deletion.

- Explicit sign-out removes or invalidates locally cached profile-owned User Knowledge on that device where practicable while leaving synchronized cloud User Knowledge intact.
- Confirmed forced sign-out or confirmed loss of authorization uses the same local-purge/cloud-retain rule. Temporary offline state, transient synchronization failure, or unresolved authentication state must not be treated as sign-out or deletion; local User Knowledge is retained while sensitive cloud writes/synchronization may be paused until status is resolved.
- FCC must notify the user when synchronization is unavailable and when confirmed sign-out will remove local profile data. Exact presentation belongs to UD-11.
- Clearing browser/site data or performing a device-local reset may remove the local Firestore replica and local/session state without deleting synchronized profile-owned User Knowledge.
- Explicit deletion of an authoritative synchronized record deletes that record from the synchronized profile. UD-10 owns the exact tombstone/revision/retention and stale-device resurrection-prevention mechanics required to keep the deletion durable across replicas.
- Full account/profile deletion must deliberately and recursively remove every implemented profile-owned User Knowledge domain before the authentication account is removed. Removal of only the profile-root document is not sufficient.
- Account deletion should use explicit destructive confirmation and reauthentication or equivalent proof of current authority when required. Authentication must not be deleted first if that would prevent completion or verification of User Knowledge deletion.
- Deleting one semantic-domain record does not automatically erase independent historical User Knowledge in another domain unless an explicit domain lifecycle contract requires and validates that cascade.
- Deleted content is not retained indefinitely as hidden active User Knowledge. Only minimum technical deletion state required for synchronization may be retained under UD-10; backup/export retention remains UD-9.

The locked UD-11 Data Management and cross-cutting status surfaces govern device reset, sign-out messaging, account deletion, synchronization-health presentation, and the Version 1 decision not to expose a generic synchronized Reset All Data control. Exact conflict and resurrection-prevention metadata remains UD-10.

---

# Preferences — UD-7 LOCKED / Refinement Allowed

Preferences may control application behavior such as display or workflow choices, but ownership depends on whether the value represents a durable user choice that should follow the authenticated profile or a device-specific/runtime concern.

Approved UD-7 foundation:

- Preferred Regulations states are profile-owned synchronized preferences. Their approved behavior is prioritization/pinning while preserving access to the complete supported state list. Exact field names and document layout remain unresolved.
- Appearance is device-local under UD-7 and the locked UD-11 Appearance architecture. Appearance separates Theme from Color Scheme; production themes declare supported System/Light/Dark variants. These settings may differ by device, do not synchronize as profile-owned User Knowledge, and are outside the authoritative UD-9 User Knowledge backup.
- Temporary UI/search/navigation/session state is not durable Preferences and must not be written into the synchronized Preferences document merely because the user is authenticated.
- Anonymous or device-local preference values must not be silently promoted into synchronized profile preferences at sign-in. Any later migration/promotion requires an explicit approved rule.
- **Measurement System** is a synchronized profile-owned Version 1 preference with **U.S. Customary** and **Metric** values; display conversion must not destructively rewrite authoritative values or mechanically rewrite recognized tackle/manufacturer/source-authored identities.
- A home/default state or region is synchronized profile-owned only when an implemented feature demonstrates a need; no speculative field is approved.
- Notification intent and notification delivery capability have separate owners: durable user intent may synchronize with the profile, while browser/OS permission, push/device subscription details, and capability remain device/system state.
- Debug/developer flags, cache state/capability, browser/PWA capability, and similar operational values remain device/system state rather than profile Preferences.
- No preference field is created without a demonstrated feature and documented owner.

UD-4 permits dedicated bounded document(s) for profile-owned Preferences, and UD-5 applies document-level `schemaVersion` to any authoritative persisted Preferences document. UD-7 is locked / refinement allowed and may be refined if implemented features demonstrate a safer ownership boundary without changing the controlling distinction between durable user intent and device/system/runtime state.

Preferences may never modify canonical Reference Knowledge.

---

# Ownership vs Current Availability - UD-8 LOCKED / Refinement Allowed

UD-8 separates persistent ownership from current/temporary tackle availability.

- Ownership and current availability are independent dimensions.
- My Tackle is the sole authoritative source of persistent tackle ownership. Only explicit My Tackle ownership-management actions may create or remove ownership.
- Rig Readiness, Search, Recommendations, Catch Log history, prior usage, borrowing, Packed / With Me state, or other availability workflows may not silently create or remove ownership.
- Current availability may include both owned tackle and temporary/non-owned tackle that the angler can actually use in the active fishing context.
- Recommendation executability uses confirmed current availability when an availability context exists. Owned-but-unavailable tackle is insufficient; temporary non-owned tackle may satisfy executability.
- Existing transitional Rig Readiness state must never be silently converted into My Tackle ownership.
- The beginner capture model derives effective availability from selected owned equipment/Fishing Setups + selected Inventory Location contents + loose owned additions + temporary/non-owned additions - explicit exceptions.
- Availability actions do not change persistent ownership, Inventory Location organization, or Fishing Setup relationships.
- No separate durable Loadout domain is required for Version 1 absent a demonstrated need.
- **What I Have With Me Today** is temporary profile-scoped state. It becomes authoritative for Best Currently Available only after explicit confirmation.
- Same-day confirmed availability may be visibly reused or changed. On a later calendar day, prior selections are only a reusable candidate until reconfirmed and never silently remain current.
- The active availability context synchronizes across authenticated devices as one semantic profile context. Unconfirmed edits remain local drafts; Confirm / Use This and Reset are revision-controlled authoritative operations under UD-10.
- Selected Inventory Locations and Fishing Setups remain stable references that resolve dynamically against current persistent User Knowledge rather than frozen copied inventory snapshots.
- Temporary/non-owned additions remain availability-only and never create ownership.
- Explicit Reset clears the current availability context without changing My Tackle, Inventory Location membership, or Fishing Setup relationships.
- A separate Trip/Outing entity is not required solely to support Version 1 current availability.

GATE-007 has CLOSED / PASS for the scoped Recommendation-facing availability foundation: detailed item-family semantics, canonical mapping/satisfaction, quantity sufficiency, Fishing Setup contribution/usability, derived diagnostics, dependent-reference reconciliation, and post-confirmation source-change visibility are settled in `05A-INVENTORY.md` and the verified G7 runtime helpers. Broader My Tackle product UI/persistence/import surfaces remain separate implementation work. Recommendation normalization/ranking/display remains GATE-004 Decision Knowledge. UD-10 continues to own current-availability concurrency and conflict behavior.

# Settings UX Boundary — UD-11 CLOSED / PASS / Refinement Allowed

UD-11 settles the Version 1 user-facing Settings ownership boundary without turning implementation status into a generic Preferences/Settings monolith:

- **Appearance** is device-local and separates Theme from Color Scheme; it is outside synchronized User Knowledge and UD-9 backup.
- **Preferences** contains exactly **Preferred Regulation States** and **Measurement System** for currently demonstrated Version 1 needs. Preferred states prioritize quick access but never filter the full supported Regulations set or imply residence/license/current-location semantics.
- **Profile** contains only optional synchronized Display Name as FCC-owned editable profile data unless a later feature demonstrates another field; authentication identity remains auth-owned/read-only where displayed.
- **Data Management** owns Create Backup, full-Replace Restore from Backup, Reset This Device, and Delete Account under UD-6/UD-9/UD-10 lifecycle rules. Version 1 does not expose a generic synchronized Reset All Data control.
- **About** owns product identity/version/help/legal/privacy/central credits entry points, not authentication/synchronization/recovery controls.
- **Cross-cutting authentication/synchronization/conflict/recovery status** is an exception/status layer rather than a Settings category. Healthy state stays quiet; signed-out/auth-uncertain/sync-degraded states remain distinct; conflicts stay scoped; restore/recovery status must be truthful and actionable; important states cannot rely on color or transient toasts alone.

Exact labels, layouts, provider APIs, field names, status-detection mechanics, and component styling remain implementation/refinement details where not otherwise locked.

---

# Favorites — Schema Unresolved

Favorites may eventually provide quick access to supported entities or user-defined records.

UD-4 establishes persistent Favorites, if implemented, as individual relationship records within a separate profile-scoped semantic domain. The exact supported entity types, record fields/IDs, ordering behavior, and lifecycle rules remain unresolved. A visible Favorites route does not by itself approve those details.

---

# My Tackle — Approved / Not Implemented

My Tackle is User Knowledge containing actual owned fishing items. UD-4 establishes one independently addressable record per owned item; the detailed owned-item fields and validation contract are governed by `05A-INVENTORY.md` and remain unresolved.

Once authoritative, persistent ownership may only be changed through explicit My Tackle ownership-management workflows. Rig Readiness, Search, Recommendations, borrowed tackle, temporary/current availability, prior readiness selections, and inferred usage may not silently create or modify ownership. UD-8 defines current availability as a separate semantic context. GATE-007 is CLOSED / PASS for the Recommendation-facing availability foundation recorded in `05A-INVENTORY.md`; broader authoritative My Tackle product persistence/UI remains Approved / Not Implemented until a later implementation segment explicitly builds it.

---

# Fishing Setups — Conceptual / Not Implemented

A future Fishing Setup may reference existing owned equipment for a particular purpose.

UD-4 establishes one independently addressable record per setup. The approved principle is to reference owned items rather than duplicate them. Exact setup fields and other persistence behavior are unresolved.

---

# Catch Log — Domain Approved / Schema Unresolved

Catch Log is a User Knowledge domain for fishing events. UD-4 establishes one independently addressable record per catch/event.

Earlier planning identified possible references and observations such as Fish, Rig, Technique, Lure, setup, date, measurements, location, notes, or photos. These are candidate concepts rather than an approved production record shape.

When Catch Log implementation begins, each field must be justified by an approved feature, and historical snapshot requirements must be distinguished from live canonical references.

Catch records must never modify canonical Fish or other Reference Knowledge.

---

# Export / Backup / Restore - UD-9 LOCKED / Refinement Allowed

UD-9 distinguishes complete recovery backup from user-facing Reports/exports.

- A full backup contains all **implemented authoritative durable User Knowledge** for the profile. Implemented domains are not optional modules within a recovery backup.
- Temporary/session/cache state, including active **What I Have With Me Today**, is excluded from durable backup.
- Reference Knowledge bodies are not duplicated into backup; User Knowledge retains stable references to canonical IDs.
- Backup is provider-independent and portable rather than a raw Firestore export contract.
- Reports are separate configurable read-only/non-authoritative views and are not guaranteed restore sources.
- User-created full backups are user-controlled and may be written to a supported destination chosen by the user. FCC does not keep a redundant server copy of ordinary exports solely because an export occurred.
- Before destructive full restore, FCC creates a complete inactive pre-restore safety checkpoint. Retention is bounded; the working Version 1 value is one latest checkpoint for 30 days, with the exact duration still refinable.
- Full restore performs complete preflight before active User Knowledge is modified: package recognition/completeness, supported format/schema compatibility, record/domain validation, migration of supported older schemas on the candidate, canonical-reference and cross-record relationship validation, and corruption/integrity checks.
- Unsupported newer schemas fail safely. Unknown or unresolvable references are surfaced rather than silently discarded.
- Version 1 full restore uses **Replace**, not Merge, and is all-or-nothing from the user's perspective.
- A validated safety checkpoint must exist before destructive replacement. Post-restore validation is required; a critical failure invokes rollback through the same trusted restore pathway.
- Failed rollback is a critical recovery failure and must never be reported as success.
- The provider-independent backup package uses a package-level positive integer `formatVersion` separate from record-level `schemaVersion`, plus backup ID, creation timestamp, producing app version, domain enumeration, expected record counts, and integrity metadata such as SHA-256. Authentication secrets, OAuth tokens, device/security tokens, and subscription secrets are excluded.
- Structured JSON is the working Version 1 representation; a future archive/container may be used if implemented User Knowledge later contains binary assets.

Restore-time multi-device correctness is governed by UD-10 below.

---

# Conflict / Multi-Device Reconciliation - UD-10 LOCKED / Refinement Allowed

UD-10 provides application-level concurrency semantics above Firestore transport behavior.

- Every mutable authoritative record carries revision/change metadata separate from `schemaVersion`.
- A stale client cannot silently overwrite a newer unseen revision.
- Automatic reconciliation is permitted only when the merge is deterministic, lossless, and semantically valid under the owning domain contract.
- Overlapping contradictory changes do not use provider last-write-wins, timestamps, device priority, or arbitrary ordering as semantic truth. Unresolved intent is preserved in technical conflict state until explicit resolution.
- Create, Update, and Delete are distinct semantic operations. An Update to a missing/deleted record does not silently become Create.
- Successful deletion creates the minimum bounded technical tombstone needed to prevent stale-device resurrection; ordinary creation does not reuse deleted IDs.
- Stale Delete operations cannot silently remove newer unseen revisions.
- **What I Have With Me Today** is one shared temporary profile context. Concurrent viewing requires no lease; local edits remain drafts until Confirm / Use This; Reset and confirmation are revision-controlled; stale unchanged replicas adopt newer state; contradictory semantic edits require explicit resolution; prior-day state requires reconfirmation.
- A full UD-9 Replace Restore is a profile-wide generation transition, not a set of ordinary reconciled record mutations.
- Profile generation/epoch is distinct from record revision and `schemaVersion`, advances monotonically, and is never reused, including rollback.
- Restore establishes a profile-wide write gate, builds and validates an inactive candidate state, then performs one logical generation cutover. Old-generation queued writes are rejected rather than replayed into the restored profile.
- Connected devices refresh/rebind to the new generation before authoritative writes resume. Offline/stale devices must adopt the current generation before their writes can become authoritative.
- Pre-restore pending changes do not automatically reconcile across the restore-generation boundary. Preserved user intent may be explicitly reapplied only as a new current-generation mutation.
- Successful full restore invalidates authoritative **What I Have With Me Today** until explicit reconfirmation because the temporary context may reference replaced durable User Knowledge.

Exact conflict record shape, tombstone retention duration, revision token format, provider-rule implementation, generation storage, candidate layout, local-draft storage, and conflict/recovery wording remain refinement/implementation details.

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

The project remains local-first. Under locked UD-2/UD-3, durable profile-owned User Knowledge uses Firestore's persistent browser cache as the Version 1 local/offline replica where supported, with all application access mediated by an FCC-owned repository/data-access abstraction.

Local-first does not create a second authoritative FCC-managed browser database. Persistence, migration, retention, backup, and conflict behavior remain coordinated through the architecture decisions that own those concerns.

---

# Implementation Gates

GATE-006 Settings / User Data Architecture and GATE-007 My Tackle Availability Foundation are CLOSED / PASS. GATE-004 Recommendation production is active. Each persistent User Knowledge domain that is not yet implemented still requires its own scoped production segment to settle or realize domain-specific persistence/UI contracts before becoming authoritative, including:

1. stable user/profile identity and record ownership,
2. exact field schema and field ownership,
3. canonical reference versus historical snapshot behavior,
4. validation rules,
5. persistence/storage technology and behavior,
6. retention behavior, including browser/site-data clearing,
7. migration/versioning requirements,
8. backup/export/import/restore requirements,
9. device-transfer expectations, synchronization behavior, conflict semantics, and offline reconciliation,
10. rendering and sanitization boundaries,
11. deletion and lifecycle behavior.

Do not create a universal user-data schema containing speculative fields merely to reserve future capability.

---

# Future Enhancements

Potential later capabilities include multiple profiles, family/shared-profile behavior, achievement/statistics features, richer User Knowledge, and optional automatic cloud-backup provider integrations. These remain separate future approvals and must build on implemented authoritative schemas. Cross-device synchronization for the single persistent profile is no longer a generic future enhancement; it is part of the locked UD-1 baseline.

---

# Related Documents

- 01-FOUNDATION.md
- 02-FISH.md
- 03-RIGS.md
- 05-TACKLE.md
- 05A-INVENTORY.md
- 09-RELATIONSHIPS.md
- ../DECISIONS.md
