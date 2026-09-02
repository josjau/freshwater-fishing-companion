# Freshwater Fishing Companion — Settings / User Data Architecture

**Document:** archive/workstreams/settings-user-data/SETTINGS-USER-DATA-ARCHITECTURE.md  
**Document Status:** Closed Planning Record — Archived During UD-12 Closeout  
**GitHub Baseline:** `fc1bc201ff093a9651b362053f0e2cb68fddd90d` (`Advance Settings architecture to UD-3`)  
**Decision Baseline:** D028, D029, D056, D067, D069  
**Created:** 2026-08-30  
**Archive Disposition:** ARCHIVE — retained for architecture reconstruction/design-lineage value; former active path retired during UD-12 closeout

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

# UD-2 — Identity + Sync Model — LOCKED / Refinement Allowed

Version 1 uses Firebase Authentication plus Cloud Firestore as the locked identity/synchronization architecture, refinement allowed.

- Firebase Authentication provides the stable technical identity; the authenticated Firebase UID scopes the user's FCC profile.
- A second device joins the same semantic FCC profile by authenticating to the same account; Version 1 does not require a separate custom device-linking protocol.
- Initial sign-in mechanisms are email/password and Google Sign-In unless implementation/security review demonstrates a better minimal set.
- Reference Knowledge remains usable without authentication. Authentication is required when the user elects to create or synchronize durable profile-owned User Knowledge.
- Cloud Firestore is the locked Version 1 profile-scoped synchronization service, refinement allowed. Durable User Knowledge synchronizes as independently addressable records/documents rather than one replaceable profile payload.
- Browser clients may communicate directly with Firebase through the supported web SDK while the application remains statically hosted; no custom application server or Cloud Functions dependency is approved unless a later requirement demonstrates one.
- Firestore Security Rules must enforce authenticated UID-scoped access. Client-side routing or hidden UI is never an authorization boundary.
- Firestore offline caching/synchronization is transport behavior, not the final FCC conflict policy. UD-10 still owns revision, concurrent-edit, deletion/tombstone, and resurrection-prevention semantics.
- Automatic cloud backup remains separate from synchronization and remains owned by UD-9.
- Firebase Authentication + Cloud Firestore is LOCKED / refinement allowed for Version 1. It may be refined if pricing/free-tier, browser/PWA compatibility, security/privacy, exportability, or implementation findings materially violate project constraints without changing the locked UD-1 cross-device product goal.

# UD-3 — Local Persistence Technology — LOCKED / Refinement Allowed

FCC uses one persistence/synchronization authority for durable profile-owned User Knowledge rather than a parallel FCC-managed local database plus a cloud database.

- Under the locked UD-2 Firebase architecture, Cloud Firestore is the durable synchronized authority for authenticated profile-owned User Knowledge.
- Firestore persistent browser cache is the Version 1 local/offline replica where supported. FCC does not create a second authoritative IndexedDB User Knowledge database.
- FCC feature code accesses persistent User Knowledge through one project-owned repository/data-access abstraction rather than scattering direct Firebase/Firestore calls across feature modules.
- The repository abstraction owns FCC-facing CRUD/query/subscription boundaries but does not duplicate persisted records or create another source of truth.
- Firebase owns the underlying browser-cache implementation. FCC does not read, write, migrate, or depend on Firebase's internal IndexedDB schema directly.
- Persistent multi-tab caching should be enabled where supported. Persistence initialization failure must degrade safely to supported memory/online behavior rather than prevent normal application or Reference Knowledge use.
- The local Firestore cache is a working replica, not backup and not a second ownership authority. Browser/site-data clearing may remove the local replica without deleting the synchronized profile; exact reset/retention behavior remains UD-6.
- UD-9 continues to own export/backup/restore. UD-10 continues to own application-level conflict, concurrent-edit, deletion/tombstone, and resurrection-prevention semantics.
- Existing Rig-readiness `localStorage` remains transitional availability state and is not automatically promoted into authoritative User Knowledge.

UD-3 may be refined if browser support, Firebase persistence behavior, a later UD-2 provider change, security/privacy findings, or demonstrated product requirements require a better implementation. The controlling principle remains one durable User Knowledge authority behind an FCC-owned access abstraction unless a later explicit architecture decision demonstrates why a second authoritative local store is necessary.

# UD-4 — User Data Store Structure — LOCKED / Refinement Allowed

Persistent User Knowledge is partitioned beneath the authenticated profile into independently addressable semantic domains rather than one universal User Data record or disconnected feature-owned storage islands.

- The authenticated profile root is the User Knowledge ownership container. It may contain only small, bounded, genuinely profile-level metadata approved by a demonstrated feature; it must not accumulate My Tackle arrays, Catch Log arrays, Favorites arrays, setup collections, duplicated Reference Knowledge, or a generic `userData` payload.
- Bounded singleton concerns such as Profile and profile-owned Preferences may use dedicated documents. The exact profile-owned versus device-local preference boundary remains UD-7.
- Growing or independently edited User Knowledge uses individually addressable domain records: one owned-item record per My Tackle item, one record per Fishing Setup, one record per Catch Log event, and individual relationship records for persistent Favorites if/when that domain is implemented. Future User Knowledge receives its own semantic domain only when approved.
- Under the locked UD-2 Firebase architecture, the physical persistence mapping should remain profile-scoped beneath the authenticated UID. Exact Firestore collection/document names are implementation details and are not locked by UD-4.
- No generic catch-all User Knowledge collection with type-discriminated records is approved. Each domain keeps its own semantic owner, repository surface, validation contract, lifecycle, and later migration rules.
- Cross-domain relationships and links to Reference Knowledge use stable IDs rather than embedding authoritative copies of other domains or canonical entities.
- The FCC-owned repository/data-access abstraction exposes semantic domain operations and hides the physical persistence layout from feature/UI modules.
- Every persistent profile-owned domain must be covered by authenticated profile-ownership authorization rules; structural nesting alone is not an authorization boundary.
- Profile deletion must not be treated as complete deletion merely because the profile-root document is removed; exact recursive deletion, retention, and reset behavior remains UD-6.
- UD-5 owns schema-version and migration semantics; UD-6 retention/deletion; UD-7 preference ownership; UD-8 ownership versus current availability; UD-9 export/backup/restore; UD-10 conflict/reconciliation; domain-specific gates own exact record fields and validation.
- Do not reserve speculative empty collections or fields merely for possible future capability.

UD-4 may be refined if the provider changes or demonstrated domain requirements require a different physical mapping. The controlling principle remains profile-scoped semantic domains with independently addressable records and no speculative universal User Data monolith.

# UD-5 — Schema Versioning + Migration — LOCKED / Refinement Allowed

Persistent FCC User Knowledge uses record/document-scoped schema versioning so existing saved data can be upgraded safely as implemented domain schemas evolve.

- Every authoritative persisted User Knowledge document/record carries a positive integer `schemaVersion`, beginning at `1` for that record type's first authoritative schema.
- `schemaVersion` belongs to the persisted document/record whose structure is being versioned. Individual fields inside that record do not receive their own schema versions. A bounded singleton document such as profile-owned Preferences therefore has one document-level `schemaVersion`; an independently addressable My Tackle item, Fishing Setup, Catch Log event, or Favorite relationship has its own record-level `schemaVersion`.
- Collections/domains do not require a separate universal schema-version record merely because they contain independently versioned records. Records within the same domain may temporarily be at different supported schema versions while safe incremental migration occurs.
- Schema versions evolve independently by record type/domain and are not tied to every FCC application release. A schema version changes only when persisted structure or semantics require compatibility handling.
- The FCC-owned repository/data-access boundary established by UD-3 owns schema compatibility checks, validation, and migration behavior. Feature/UI modules consume current semantic records rather than implementing ad hoc legacy conversions.
- When a supported older record is read, the repository may migrate it forward through explicit incremental transformations (for example `1 -> 2 -> 3`), validate the result, and persist the upgraded representation. Record-local/on-read migration is the default; bulk or coordinated migration requires a demonstrated cross-record need.
- Migration must be deterministic and safe to retry. The stored `schemaVersion` is advanced only after the transformed record is valid and the upgrade is successfully persisted. If migration cannot be completed safely, the last valid authoritative representation is preserved rather than partially rewritten or reset to defaults.
- A client that encounters a record whose `schemaVersion` is newer than it supports must not overwrite, downgrade, or destructively reconstruct that record. The affected record/domain may be treated as incompatible or non-writable until compatible application code is available while unrelated FCC functionality remains usable where possible.
- Schema evolution is forward-only by default. Software rollback does not automatically downgrade already migrated User Knowledge. Reverse migration requires an explicit demonstrated need and safe recovery plan. UD-9 owns backup/export/restore recovery semantics; UD-10 owns multi-device edit/conflict metadata and reconciliation.
- Do not create speculative migration registries, migration-history arrays, global whole-profile schema versions, or migration machinery for domains and schema versions that are not yet authoritative.

UD-5 may be refined if implemented domain schemas, provider constraints, or validated migration requirements demonstrate a safer mechanism without changing the controlling principle: version the authoritative persisted record, migrate supported older data safely behind the repository boundary, preserve valid data on failure, and never allow an older client to destructively overwrite a newer unsupported schema.

# UD-6 — Retention + Deletion — LOCKED / Refinement Allowed

FCC distinguishes local device data removal from authoritative synchronized User Knowledge deletion.

- Explicit user sign-out ends authenticated access on that device and removes or invalidates locally cached profile-owned User Knowledge where practicable, but it does **not** delete synchronized cloud User Knowledge.
- Confirmed forced sign-out or confirmed loss of authorization follows the same local-purge/cloud-retain boundary. Temporary connectivity loss, temporary synchronization failure, or unresolved authentication state is not sign-out and must not trigger destructive local clearing.
- During temporary sync/auth uncertainty, FCC preserves local User Knowledge, pauses sensitive cloud writes/synchronization as needed, and attempts to re-establish a valid session rather than treating the event as deletion.
- FCC must inform the user when synchronization is unavailable and when a confirmed sign-out will remove local profile data. User-facing treatment is governed by the locked UD-11 cross-cutting status surfaces.
- Browser/site-data clearing and a device-local reset may remove the local Firestore replica, authentication/session state, transitional local state, and device-local preferences, but must never be interpreted as an instruction to delete synchronized profile-owned User Knowledge.
- Explicit deletion of an authoritative synchronized User Knowledge record deletes that record from the synchronized profile and therefore from other replicas after reconciliation. The exact tombstone, revision, retention window, and stale-device resurrection-prevention mechanics remain UD-10.
- A synchronized-data reset, if exposed in a future version, is distinct from a device-local reset and from account deletion. Version 1 does **not** expose a generic synchronized Reset All Data control under the locked UD-11 Data Management boundary.
- Account/profile deletion is a deliberately destructive workflow. It must recursively remove every implemented profile-owned User Knowledge domain before the authentication account is removed. Deleting only a profile-root document is not sufficient because descendant/domain records may remain.
- Destructive account deletion should require explicit confirmation and reauthentication or equivalent proof of current authority when required by the identity provider. Authentication should not be removed first if doing so would prevent completion or verification of profile-data deletion.
- Deleting a record in one semantic domain does not silently cascade-delete independent historical User Knowledge in another domain unless that domain explicitly defines and validates such a lifecycle relationship. For example, removing an owned item from My Tackle must not automatically erase independent Catch Log history merely because that history referenced the item.
- User-deleted content is not retained indefinitely as hidden active User Knowledge. FCC may retain only the minimum technical deletion state needed for safe synchronization/reconciliation; exact tombstone lifecycle belongs to UD-10. User-created backups and backup retention remain UD-9.

UD-6 may be refined if provider behavior, privacy/security requirements, implemented domain lifecycles, or UD-9/UD-10 findings require a safer mechanism without changing the controlling boundary: local clearing is not cloud deletion, explicit synchronized deletion remains deleted across replicas, and destructive profile/account deletion must deliberately remove all implemented profile-owned User Knowledge.

# UD-7 — Preference Ownership — LOCKED / Refinement Allowed

UD-7 separates durable user preferences that should follow the authenticated FCC profile from device-local presentation/environment settings and temporary runtime state. This ownership foundation is locked / refinement allowed; UD-11 owns the user-facing Settings organization and presentation of those choices:

- Preferred Regulations states are profile-owned synchronized preferences. They prioritize/pin the user's chosen states while preserving access to the complete supported state list. Exact field names and physical document layout remain implementation details.
- Appearance is device-local. The later locked UD-11 Appearance architecture refines this into separate **Theme** and **Color Scheme** concepts; both may differ by device, do not synchronize as profile-owned preferences, and remain outside the authoritative UD-9 User Knowledge backup. Only production-supported schemes for the selected theme may be offered.
- Temporary UI, search, navigation, and session context is not durable Preferences. Current searches, selected browsing state, open/expanded UI state, current route, and temporary fishing/recommendation context must not be promoted into synchronized profile preferences merely because the user is authenticated.
- Anonymous or device-local values must not be silently promoted into synchronized profile preferences at sign-in. Any later migration/promotion requires an explicit approved rule.
- **Measurement System** is a synchronized profile-owned Version 1 preference with U.S. Customary and Metric choices under the locked UD-11 Preferences boundary.
- A home/default state or region is synchronized profile-owned only if a demonstrated FCC feature requires such a preference; UD-7 does not authorize a speculative field merely to reserve future capability.
- Notification ownership is split: durable user intent to receive an FCC notification class may synchronize with the profile, while browser/OS notification permission, push capability, device token/subscription details, and delivery capability remain device/system state.
- Debug/developer flags, cache state/capability, browser/PWA capability, and similar operational settings are device/system state and must not become synchronized profile preferences.
- No preference field is created without a demonstrated feature and documented owner.

UD-7 is locked / refinement allowed. It may be refined if later implemented features demonstrate a better ownership boundary without changing the controlling principle that durable user intent may synchronize while device/system/runtime state does not become profile-owned by default.

# UD-8 — Ownership vs Current Availability — LOCKED / Refinement Allowed

UD-8 separates persistent tackle ownership from current/temporary availability so FCC can determine whether a recommendation is executable without treating temporary access as ownership.

- Ownership and current availability are independent dimensions. An item may be owned and available, owned and unavailable, not owned but temporarily available, or neither owned nor available.
- My Tackle is the sole authoritative source of persistent tackle ownership.
- Only explicit My Tackle ownership-management actions may create or remove persistent ownership. Rig Readiness, Search, Recommendations, Catch Log history, prior usage, borrowing, or temporary availability must not silently create or remove ownership.
- Current availability may include both owned tackle and temporary/non-owned tackle that the angler can actually use in the active fishing context.
- Packed / With Me is availability state, not ownership state. Removing an item from With Me does not remove it from My Tackle, and marking an item With Me does not create ownership.
- Borrowed, shared, rented, loaned, or otherwise temporary tackle may satisfy current availability without creating a My Tackle ownership record. Version 1 does not require distinct persistent ownership-like categories for those temporary-access sources unless a later feature demonstrates a need.
- Recommendation executability is evaluated from current availability when an availability context exists, not from ownership alone. Owning required components is insufficient if one or more are not currently available; temporary non-owned components may satisfy executability when they are available.
- Existing transitional Rig Readiness state must never be silently converted into My Tackle ownership. Any later reuse, migration, discard, or explicit user-review/import of that state requires a separate approved transition rule.

UD-8 is locked / refinement allowed. FCC derives current availability from explicitly selected owned equipment/Fishing Setups, selected Inventory Location contents, loose owned additions, temporary/non-owned additions, and availability exceptions without changing ownership or persistent storage organization. The active availability context is temporary profile-scoped state with explicit freshness and confirmation semantics as locked below. Later implementation, UX, provider, conflict-resolution, or Recommendation findings may refine the mechanism without collapsing current availability into persistent ownership or silently treating stale availability as current.

## UD-8 Review Direction - My Tackle + Current Availability - APPROVED FOR REVIEW / NOT LOCKED

The 2026-08-31 discussion refined the UD-8 problem enough to establish a review direction without locking a production schema or current-availability lifecycle.

**Terminology continuity:** `WSIT` means **What Should I Throw** throughout FCC. **What I Have With Me Today** is the human-facing current-availability concept/input that What Should I Throw may consume; it is not another meaning of `WSIT`. Write the availability phrase in full when ambiguity is possible.

Approved for review:

- Version 1 should work well for a beginner-scale inventory: a rod/reel plus one tackle box containing kit components and individually purchased tackle. More complex users may create additional locations/containers, but FCC should not require an advanced organization model.
- D013 reusable Inventory Locations are the leading mechanism for normal storage organization. A physical tackle box, bag, crate, boat box, or similar container may be a location. A simple default such as `My Tackle Box` and a lightweight `New Location` flow are candidates for review; exact creation/default UX is not locked.
- My Tackle should represent functionally interchangeable owned inventory as logical pools rather than fragment Recommendation matching by manufacturer or other non-essential metadata. Pool identity should be based on the minimum normalized fishing attributes that materially affect FCC decisions.
- The discussion explicitly separated **decision identity** from **descriptive identity**. Example: for a candidate Hook pool, `EWG + 3/0` may be the fishing-decision identity while manufacturer, model, and notes remain descriptive metadata. The exact Hook key is still subject to the family review.
- When an Add/Import flow resolves to an existing equivalent functional pool, the leading review behavior is to surface that match and offer to merge/add quantity rather than silently create a duplicate pool. Example discussed: adding 10 more `3/0 EWG Hooks` to an existing `3/0 EWG Hooks` pool. Exact merge rules, confirmation wording, and non-quantity behavior remain open.
- Manufacturer, brand, model, notes, and other descriptive/commercial details may be retained as optional metadata when useful, but they must not create separate Recommendation identities when the fishing-relevant attributes are equivalent.
- Required and optional attributes must be reviewed per item family rather than forced into one universal form. Candidate examples include Hook = style + size; Weight = style + weight; Lure/Bait = canonical identity + decision-relevant variant attributes; Rod = fishing-relevant rod attributes. These exact keys remain review candidates, not locked schemas.
- Data entry should be fast and structured: item-specific forms should prefer controlled selectors/dropdowns for known values such as hook style/size, weight, line type/test, rod power/action, lure size, diving depth, and normalized color/pattern where an approved vocabulary exists. `Other` / `Custom` should preserve unusual tackle. Exact vocabularies remain domain decisions.
- Quantity should be supported as an optional field, especially for consumables such as hooks, weights, floats, jigheads, swivels, and soft plastics. Recommendation must not require perfectly maintained stock counts. Quick `-` / `+` quantity adjustment and an optional user-defined low-stock threshold were discussed as convenience candidates only. Exact zero-stock semantics, decrement UX, low-stock thresholds, and notifications remain open review topics.
- Bulk ownership entry is a supported design goal. CSV or similar structured import should normalize candidate values, match existing functional pools, show a review/merge result, and require explicit user confirmation before ownership is written. Screenshot/image extraction may later produce candidate import rows as a separate convenience layer, but neither a file import nor screenshot extraction is itself ownership authority.
- The beginner continuity test discussed on 2026-08-31 was intentionally simple: one owned rod/reel plus one physical tackle box containing the user's hooks, weights, floats, soft plastics, hard baits, and terminal tackle. This is a test fixture for the interaction model, not a locked taxonomy or required location structure.
- Inventory-location membership may become the simplest bridge to `What I Have With Me Today`: if the user brings a tackle box/location, FCC may derive the included owned pools as currently available, with room for loose owned gear, individual exceptions, and temporary/borrowed additions. A simple flow such as confirming the usual rod/reel plus `My Tackle Box` was discussed as the low-friction target. This remains a review direction; a separate Loadout domain is not yet justified or rejected.
- Recommendation can use My Tackle only as far as the owned-item detail truthfully supports. The My Tackle schema therefore needs enough fishing-relevant specificity to resolve Rig buildability and exact executable configurations without becoming a commercial product catalog.

### Approved Item-Family Review Locks — Hooks, Weights, Lure/Bait, Rod/Reel

The following design-level decisions are approved. They constrain later My Tackle schema/UX work but do not yet authorize production fields or persistence structures.

**Hooks — APPROVED**

- The same functional tackle identity may contribute owned inventory from multiple physical locations. Exact persistence representation is deferred.
- My Tackle selectors must permit user-added/custom values. A custom style/size is User Knowledge and does not automatically create or expand global canonical Reference Knowledge.
- Canonical Tackle remains deliberately small and owns only reusable functional distinctions needed for truthful Rig/buildability semantics.
- Finer fishing-relevant variants such as hook style and size may live in My Tackle without becoming new canonical Tackle entities.
- Item-family attributes are not universal. An attribute that is merely descriptive for Hooks may be decision-relevant for another family.
- Exact Hook style vocabulary, custom-value-to-canonical mapping UX, and multi-location persistence mechanics remain deferred.

**Weights — APPROVED**

- Canonical Tackle remains the broad reusable functional identity, while My Tackle may retain finer subtype/style.
- Weight/size is normally decision-relevant and participates in owned functional matching. Entry should follow real package notation, including ounces or conventional size notation as appropriate to the selected weight type.
- Subtype/style is conditional rather than universally required.
- Material is an optional fishing-relevant attribute but does not split functional identity by default.
- Manufacturer/model/notes remain descriptive. Custom weight types/values are allowed without expanding the global canonical database.
- Equivalent tackle may exist across multiple physical locations while aggregating to the same fishing identity.
- Rig buildability and Recommendation preference may operate at different precision: a broad functional match may make a Rig buildable even when the owned subtype/weight/material is not the contextually preferred variant.
- Exact custom mapping, location persistence, material-sensitive Recommendation behavior, and normalization mechanics remain deferred.

**Lure/Bait — APPROVED**

- Canonical Lure/Bait remains broad and deliberately small; owned variants do not create new canonical identities.
- My Tackle stores family-specific fishing attributes such as size, weight, color/pattern, running depth/depth class, or action only where meaningful for that lure/bait family.
- Recommendation may reason at greater precision than canonical identity.
- Exact commercial color names may be preserved for the user's item while separately mapping to a normalized fishing-use color/pattern meaning when such a vocabulary is approved.
- Unknown commercial colors and custom lure/bait identities remain valid inventory even when FCC cannot yet interpret them for Recommendation.
- Normalization exists to support demonstrated Recommendation decisions, not to create an exhaustive commercial product catalog.
- Manufacturer/model remain optional descriptive data; location and quantity remain operational inventory attributes rather than Recommendation identity.
- My Tackle matching should support three semantic outcomes where appropriate: exact/preferred match, usable functional match, and no usable match.
- Exact normalized color/pattern, depth, and action vocabularies plus commercial-color mapping mechanics remain deferred to Recommendation/My Tackle design.

**Rod/Reel — APPROVED**

- Rods and reels are independently owned durable items. A paired rod/reel Fishing Setup references the owned items and does not duplicate ownership.
- Functionally identical rods/reels remain distinct physical owned items rather than quantity-pooled consumables.
- Rod fishing identity minimally supports type, length, power, and action. Reel fishing identity minimally supports type and size/class.
- Secondary specifications such as rod line/lure ratings and reel gear ratio may be retained when useful but are not universally required; manufacturer/model remain optional descriptive identity.
- Setup compatibility should derive from fishing-relevant equipment attributes rather than commercial product pairings. A rod or reel may exist without a setup, and setup membership does not change ownership.
- Persistent storage location remains separate from current availability. Factory rod/reel combos do not require a separate ownership entity.
- Custom field values are valid User Knowledge without automatically expanding Reference Knowledge.
- Exact Fishing Setup schema, compatibility algorithm, secondary-spec requirements, and storage/current-location mechanics remain deferred.

Still not locked:

- exact owned-item record fields and persistence shape,
- exact pool identity keys for each item family,
- exact location creation/default behavior,
- whether location selection alone is sufficient for current availability or whether another bounded loadout/session concept is needed,
- quantity depletion semantics and optional low-stock notifications,
- CSV format and screenshot-import implementation,
- current-availability lifetime, reset, and synchronization,
- final Recommendation ranking/display and Recommendation-to-Rig handoff contract.

### Approved Beginner Availability Model — APPROVED

- Current availability is temporary derived state, not another ownership authority.
- Selecting an Inventory Location makes its currently assigned owned contents available for the active availability context without changing ownership or permanent storage organization.
- Selecting a Fishing Setup makes its referenced owned equipment available without duplicating ownership.
- Loose owned items may be added individually. Temporary/borrowed/shared/rented/loaned items may be added for the active context without creating ownership.
- Session exceptions may remove an otherwise derived item from current availability without editing My Tackle or the item's persistent location.
- The effective current-availability set is the union of selected owned equipment/Setups, contents of selected Inventory Locations, loose owned additions, and temporary additions, minus explicit availability exceptions.
- Persistent storage/location and current availability remain independent.
- No separate durable Loadout domain is justified for Version 1 at this point; it may be reconsidered only if reusable named loadouts later demonstrate distinct value.
- Without a current-availability context, What Should I Throw may still provide **Best Overall** but must not claim **Best Currently Available**.
- Availability lifetime, reset/reuse behavior, and cross-device synchronization follow the locked lifecycle below.

### Approved Current-Availability Lifecycle — LOCKED / REFINEMENT ALLOWED

- **What I Have With Me Today** is temporary profile-scoped state, distinct from durable ownership, persistent Inventory Location organization, Fishing Setups, and durable Preferences.
- An availability context becomes authoritative for **Best Currently Available** only after explicit user confirmation.
- A confirmed context may be reused during the same calendar day without rebuilding the selection from scratch, but FCC should visibly offer confirmation such as `Use This` / `Change` when the user re-enters the availability workflow after a meaningful interruption. Exact presentation is UX-owned.
- On a later calendar day, the prior selection loses authority as current availability. FCC may retain it as a reusable candidate, but it must be explicitly reconfirmed before it can drive **Best Currently Available**. Yesterday's availability is never silently carried forward as current.
- The active availability context synchronizes across authenticated devices as profile-scoped temporary state. Devices represent one semantic current-availability context rather than independent per-device versions of **What I Have With Me Today**.
- Exact concurrent-edit, merge, stale-write, and conflict behavior belongs to UD-10.
- The user may explicitly clear/reset current availability without changing My Tackle ownership, Inventory Location membership, or Fishing Setup relationships.
- Availability derived from selected Inventory Locations and Fishing Setups resolves against their current persistent contents/references rather than freezing a copied snapshot of every owned item. Explicit availability exceptions continue to override derived inclusion for the active context.
- Temporary/non-owned additions remain explicit members of the current availability context because they do not originate from persistent My Tackle ownership.
- No Trip/Outing entity is required for Version 1 solely to carry current availability.
- This lifecycle lock is refinement-allowed. Later implementation or UX findings may adjust expiration/reconfirmation details, sync mechanics, or presentation without violating the controlling principles: explicit freshness, no silent stale carry-forward, one semantic profile context when synchronized, and no ownership mutation.

**UD-8 disposition:** LOCKED / refinement allowed. Move next to **UD-9 — Export / Backup / Restore**.

### UD-9 Backup vs Reports Boundary — APPROVED / REFINEMENT ALLOWED

- **Backup has one scope:** all implemented authoritative durable User Knowledge owned by the profile at backup time. My Tackle, Inventory Locations, Fishing Setups, Catch Log, Favorites, Preferences, and any later durable User Knowledge domains are not separate backup types or optional backup modules.
- Application-owned Reference Knowledge is not duplicated into the backup; User Knowledge retains its stable references to Reference Knowledge.
- Temporary/session state, including the active **What I Have With Me Today** availability context, is not durable User Knowledge and is excluded from normal backup under the UD-8 boundary.
- A full backup is a provider-independent, full-fidelity recovery artifact. It must not expose raw Firestore layout as the portable user contract. Exact backup package/file format remains to be decided within UD-9.
- Domain-specific or filtered views are **Reports**, not backups. Reports are generated/read-only representations of current User Knowledge and do not create a second authority.
- Report definitions may select domains, fields, filters, ranges, grouping, sorting, or summaries as the reporting feature requires. Examples include a **My Tackle report** showing current owned tackle and a **Catch Log/Fish Log report** filtered to a user-selected date range.
- Reports are not guaranteed restorable and are not backup substitutes. A future import workflow must have its own explicit domain-specific validation/ownership contract rather than treating an arbitrary report as a restore source.
- Report output format(s), templates, configurable fields, saved-report behavior, and presentation are deferred until the reporting surface is designed.
- The terms **Backup** and **Report** must remain distinct in product/UI language: Backup means complete recoverable User Knowledge; Report means a configurable readable/exportable view of User Knowledge.
- This boundary is refinement-allowed if later reporting or portability needs require additional output forms without weakening complete-backup scope or creating partial backup authorities.

### UD-9 Backup Ownership + Retention — APPROVED / REFINEMENT ALLOWED

- User-created full backups are portable, user-controlled recovery artifacts. FCC may generate the backup, but the user controls the exported copy and chooses its destination through supported device/browser storage mechanisms.
- FCC does not need to retain a duplicate server-side copy of each normal user-created backup. Synchronization remains separate from backup and does not satisfy independent recovery.
- FCC creates a complete internal pre-restore safety checkpoint immediately before a destructive full restore. This checkpoint is inactive recovery material only; application features, Recommendations, Reports, and normal User Knowledge queries never treat it as active profile data.
- Recovery from the safety checkpoint uses the same validated transactional restore path as any other full backup rather than a separate unsafe undo mechanism.
- Version 1 uses bounded safety-copy retention rather than indefinite backup history. The working retention value is **one latest pre-restore safety copy for 30 days**. The bounded-retention principle is approved; the exact count and duration are provisional and may change with implementation, storage, security, or UX findings.
- FCC-managed scheduled daily/weekly/monthly backup history is not required for Version 1. A later automatic-backup feature would require an explicit storage, privacy, retention, and deletion contract rather than being inferred from synchronization.
- Account/profile deletion removes all FCC-controlled User Knowledge and all FCC-controlled recovery/safety copies. FCC should offer the user an opportunity to create/download a complete backup before destructive account deletion, but backup creation is not mandatory to proceed.
- Previously exported user-controlled backup files remain outside FCC's deletion authority. Live User Knowledge edits or deletions do not retroactively modify previously exported backup files.
- Reports remain separate configurable views of active User Knowledge and do not participate in backup retention or full restore semantics.
- Exact storage provider/location for FCC-controlled safety copies is an implementation detail provided it is secure, profile-scoped, isolated from active User Knowledge, and honors the approved retention/deletion rules.
- This ownership/retention lock is refinement-allowed. Refinement may change exact retention values or provider mechanics without weakening user control of exported backups, bounded FCC retention, account-deletion cleanup, or the separation between active User Knowledge and recovery material.

### UD-9 Restore Validation + Transactionality — APPROVED / REFINEMENT ALLOWED

- Full restore performs complete preflight validation before active User Knowledge is modified. The backup container must be recognized, structurally complete, and supported before any destructive action is eligible.
- Every restored record must pass the validation contract owned by its domain. Restore never bypasses domain validation merely because the source is an FCC backup.
- Supported older record schemas migrate forward through the approved UD-5 migration path before activation. Migration operates on a restore candidate; the source backup remains unchanged as the historical recovery artifact.
- Backups or records using unsupported newer authoritative schemas fail safely. FCC must not downgrade, truncate, ignore, or silently discard unknown authoritative data in order to force a restore.
- Cross-record User Knowledge relationships are validated during preflight. Missing or inconsistent referenced User Knowledge records must be detected before authoritative replacement begins.
- Recognized historical Reference Knowledge identifiers may remain valid for historical User Knowledge even when no longer active for new entry or Recommendations. Unknown/unresolvable references must be surfaced rather than silently discarded; exact domain handling remains refinement-allowed.
- FCC must successfully create and validate the required pre-restore safety checkpoint before destructive replacement begins. If the safety checkpoint cannot be created, restore stops and active User Knowledge remains unchanged.
- Final user confirmation occurs only after preflight succeeds and must clearly state that the complete durable User Knowledge set will be replaced and that a temporary recovery checkpoint has been created.
- Version 1 full restore is complete **Replace**, not Merge. Records absent from the validated backup candidate do not remain active merely because they existed in the current profile.
- Restore is all-or-nothing from the user's perspective even if the implementation requires staging, batching, generation markers, or another multi-write technique. A partially restored profile must never be presented as authoritative success.
- Post-restore validation must succeed before FCC declares restore successful. Application or post-validation failure triggers rollback through the same trusted restore path using the safety checkpoint, followed by rollback validation.
- A failed rollback is a critical recovery failure and must never be represented as a successful restore. Exact user-facing recovery/escalation behavior remains owned by the later Settings UX/error-state design.
- Normal writes or synchronization that could race a full restore must be gated while restore is in progress. Exact multi-device lock, stale-write, conflict, and reconciliation mechanics remain UD-10.
- Failure behavior is stage-specific: preflight failure leaves active data untouched; safety-checkpoint failure stops restore before replacement; application/post-validation failure invokes rollback to the validated checkpoint.
- This restore/transactionality lock is refinement-allowed. Staging mechanics, provider transaction boundaries, unresolved historical-reference handling, and exact UX may change without weakening complete preflight, mandatory recoverability, full replacement, post-restore verification, or all-or-nothing user semantics.

### UD-9 Backup Package Structure + Versioning + Metadata — APPROVED / REFINEMENT ALLOWED

- FCC full backups use a provider-independent semantic package rather than raw Firestore collection/document paths as the portable contract.
- Every package carries a positive-integer package-level `formatVersion`; this is independent from each authoritative record's domain-owned `schemaVersion`.
- The package explicitly identifies itself as a complete FCC User Knowledge backup and carries, at minimum, a unique backup identifier, creation timestamp, and producing FCC application version.
- Originating FCC/profile identity may be retained for provenance, but restore authorization is not permanently bound to the original Firebase/provider UID. Authentication secrets, passwords, credentials, OAuth/refresh tokens, and device/security subscription tokens are excluded.
- The package explicitly enumerates included durable User Knowledge domains and expected record counts so restore can distinguish a legitimately empty domain from a missing/corrupt domain and can present a meaningful restore summary.
- Package integrity metadata must detect accidental corruption or truncation. SHA-256 or an equivalent integrity mechanism is an appropriate Version 1 implementation; integrity checking does not replace restore validation and does not by itself prove package authenticity.
- Backup contents are always treated as untrusted restore input and must pass the approved full preflight/migration/relationship-validation pipeline regardless of filename, extension, apparent provenance, or integrity metadata.
- Restore UX may show source metadata such as creation time, producing application version, included domains, and record counts before final confirmation. Technical schema details need not be surfaced unless needed for compatibility/error diagnostics.
- Filename and extension are convenience only; internal package metadata determines whether a file is a recognized FCC backup.
- Structured JSON is the working Version 1 format for data-only User Knowledge. FCC may later adopt a dedicated archive/container if durable User Knowledge gains binary assets without changing the semantic backup contract.
- Reference Knowledge itself is not embedded. An informational app/reference-data version may be retained as diagnostic provenance if useful, but exact Reference Knowledge version equality is not a restore prerequisite.
- Exact field names, checksum canonicalization, compression/container mechanics, optional diagnostic metadata, and future binary-asset packaging remain implementation/refinement details.
- This package lock is refinement-allowed. Refinement may improve package mechanics or metadata without weakening provider independence, full durable-User-Knowledge scope, package/record version separation, restore validation, or exclusion of authentication secrets.

**UD-9 disposition:** LOCKED / refinement allowed. Restore-time multi-device write gating is reconciled under the completed UD-10 lock below.

### UD-10 Conflict Control Foundation — APPROVED / REFINEMENT ALLOWED

- Conflict control is record-oriented. Independently addressable My Tackle items, Fishing Setups, Catch Log records, Favorites, and other durable User Knowledge records reconcile independently rather than replacing the profile during normal synchronization.
- Every authoritative mutable record carries application-level revision/change metadata in addition to `schemaVersion`. Schema version remains record-shape evolution only and must not double as edit revision.
- The application-managed record revision advances on every accepted authoritative semantic mutation. Exact field names and revision-token representation remain implementation details.
- Normal writes use compare-against-known-revision semantics wherever a stale client could otherwise overwrite a newer authoritative record. Provider last-write-wins transport behavior is not sufficient as the FCC conflict policy.
- A stale client must not silently overwrite a newer unseen authoritative revision. FCC evaluates whether a stale edit can be reconciled safely before accepting it.
- Deterministic, lossless, non-overlapping concurrent changes may auto-reconcile when the domain contract proves the merge safe.
- Overlapping concurrent changes to the same semantic field do not silently choose one device's value. Irreconcilable overlap must follow an explicit deterministic conflict policy or user-visible resolution path.
- Offline creation of distinct records is generally safe when stable unique IDs prevent identity collision. Offline edits to existing records remain subject to revision/reconciliation checks when reconnecting before becoming authoritative.
- Firestore transactions may support online compare-and-write mechanics, but FCC conflict correctness must not depend exclusively on transactions because the product supports offline-capable editing.
- Technical conflict metadata is operational state, not ordinary reportable User Knowledge.
- Exact metadata field names, revision token type, client/session diagnostics, provider write primitive, and domain-specific merge algorithms remain refinement/implementation details.
- This foundation is supplemented by the approved UD-10 deletion/tombstone, reconciliation, shared current-availability, and full-restore write-gating locks below.

**UD-10 conflict-control foundation disposition:** LOCKED / refinement allowed.

### UD-10 Deletion / Tombstone / Anti-Resurrection — APPROVED / REFINEMENT ALLOWED

- Create, Update, and Delete are distinct semantic operations. An Update to a missing or deleted authoritative record never silently becomes a Create.
- Every ordinary new user-created record receives a new stable record ID. Deleted record IDs are not reused for normal user creation.
- Deletion participates in the approved record-revision concurrency model. A stale deletion based on an outdated revision must not silently delete a newer unseen authoritative revision.
- Successful synchronized deletion creates only the minimum technical deletion state required for reconciliation. This tombstone identifies the deleted record and authoritative deletion revision/time without retaining the deleted User Knowledge payload.
- While present, a tombstone deterministically defeats edits derived from an earlier record revision. A reconnecting stale edit is rejected rather than merged, accepted through provider last-write-wins, or allowed to recreate the deleted identity.
- A stale Update remains an Update even after a tombstone has been retired. If its target authoritative record no longer exists, FCC rejects it rather than treating it as a new record.
- Intentional recreation is explicit. If the user wants equivalent content again after deletion, FCC may offer a create-as-new path that creates a new record identity rather than reviving the deleted ID.
- Tombstone retention is bounded. Exact duration and cleanup mechanics remain implementation/security details; anti-resurrection correctness must not depend on permanent tombstone retention.
- FCC does not require every historical device/client to acknowledge a deletion before technical tombstone cleanup. Abandoned, cleared, replaced, or permanently offline clients therefore cannot force indefinite deletion-state retention.
- Cross-domain deletion remains non-cascading by default. Deleting one record does not erase independent historical User Knowledge in another domain unless that domain explicitly owns such a lifecycle rule.
- UD-9 full-profile restore is an explicit exception to ordinary synchronization. A validated, user-authorized full Replace restore may reintroduce records contained in the restored authoritative set because restore is not a stale-device Update/Create operation.
- Exact tombstone storage location, deletion-operation token representation, cleanup schedule, retention interval, and user-facing deleted-record messaging remain refinement/implementation details.
- This lock may be refined if provider, security, privacy, UX, or implementation findings produce safer mechanics without weakening the controlling guarantees: no stale resurrection, no silent stale deletion of newer data, deleted-ID non-reuse for ordinary creation, bounded technical deletion state, and no indefinite device-acknowledgment dependency.

**UD-10 deletion/tombstone disposition:** LOCKED / refinement allowed.

### UD-10 Automatic Reconciliation vs User-Visible Conflict Resolution — APPROVED / REFINEMENT ALLOWED

- FCC automatically reconciles concurrent edits only when the resulting merge is deterministic, lossless, and semantically valid under the applicable domain contract.
- Independent records reconcile independently and do not create profile-wide conflicts.
- Non-overlapping changes to one record may auto-reconcile only when the domain contract proves the combined result remains valid; different storage fields are not automatically semantically independent.
- Competing changes to the same semantic value are not resolved by provider last-write-wins behavior, timestamps, device priority, or arbitrary ordering.
- Conflict evaluation uses the logical equivalent of a three-way comparison among the editing base, the current authoritative state, and the pending change. Exact base-state/change-set storage mechanics remain implementation details and do not require permanent record history.
- When automatic reconciliation is unsafe, the existing accepted authoritative record remains authoritative until resolution. Unresolved conflict material is technical reconciliation state, not a second authoritative User Knowledge record.
- Conflict material preserves enough of both competing values or change intentions to resolve without silent data loss and remains excluded from Recommendations, Reports, and normal domain behavior while unresolved.
- Conflict resolution produces a new accepted authoritative revision rather than rewriting an older revision in place.
- Simple user-visible conflicts should present semantic choices such as Use Current, Use My Change, and, where valid, Edit Value. Multi-field conflicts may resolve field-by-field when that preserves independent valid changes.
- User-facing resolution describes the actual data difference rather than exposing provider, revision, or device jargon except where needed diagnostically.
- A resolution write is itself revision-controlled. If authoritative data changes while resolution is pending, FCC revalidates, safely rebases, or refreshes the conflict rather than overwriting the newer state.
- Domain-specific operation semantics may authorize stronger automatic reconciliation only when explicitly defined and validated. Absolute values are not reinterpreted as relative operations merely to avoid a conflict.
- Timestamps support diagnostics, ordering, and UX but do not determine authoritative truth by themselves.
- Exact conflict-state schema, storage location, retention, UI presentation, and domain-specific merge algorithms remain refinement/implementation details.
- This lock may be revised if implementation, provider, security, privacy, or UX findings produce safer mechanics without weakening the controlling guarantees: no silent data loss, no arbitrary winner selection, preserved unresolved intent, and revision-checked resolution.

**UD-10 reconciliation disposition:** LOCKED / refinement allowed.

### UD-10 Shared What I Have With Me Today Concurrency — APPROVED / REFINEMENT ALLOWED

- **What I Have With Me Today** is one shared semantic temporary profile context across authenticated devices, not a set of independent per-device authoritative availability states.
- Multiple devices may view the same context concurrently without leases, ownership claims, or edit locks.
- Unconfirmed availability changes remain local working drafts and do not alter the authoritative recommendation context.
- Explicit **Confirm / Use This** attempts to publish a new authoritative availability-context revision and is subject to compare-against-known-revision stale-write protection.
- Independent concurrent availability operations may auto-reconcile only when the result is deterministic, lossless, and semantically valid under the approved UD-10 reconciliation rules.
- Contradictory changes to the same availability decision require lightweight explicit semantic resolution rather than provider last-write-wins, timestamps, or device priority.
- A stale unchanged replica that reconnects simply adopts the newer authoritative context. A stale locally edited draft is evaluated against its base revision and the current authoritative state before confirmation.
- **Reset What I Have With Me Today** is an explicit semantic operation that creates a newer authoritative no-current-context state; it is not merely local field clearing.
- A stale client cannot undo a Reset without passing the same revision/reconciliation checks as any other authoritative change.
- Reset never creates, deletes, or modifies My Tackle ownership, Inventory Location membership, or Fishing Setup relationships.
- Prior-day confirmed availability loses recommendation authority at the day boundary even when perfectly synchronized. It may remain only as a reusable candidate until explicit reconfirmation.
- Reconfirmation creates a new current-day authoritative revision even when the selected availability is unchanged from the prior day.
- Selected durable Inventory Locations, Fishing Setups, and owned equipment remain stable references whose current contents resolve dynamically against persistent User Knowledge rather than frozen inventory snapshots.
- Temporary/non-owned additions carry only the descriptive information required for the active availability context and never create ownership.
- Availability-context conflicts remain scoped to that temporary context and do not block unrelated My Tackle, Catch Log, Favorites, Preferences, or other durable User Knowledge synchronization.
- Durable-record conflicts do not automatically invalidate the availability context unless they materially affect the context's resolved equipment or semantic validity.
- Exact context schema, local-draft storage, effective-day calculation, temporary-item representation, UI conflict wording, and revision-token implementation remain refinement/implementation details.
- This lock may be revised if implementation, provider, security, privacy, or UX findings produce safer mechanics without weakening one shared profile context, explicit confirmation authority, stale-write protection, day-boundary reconfirmation, scoped conflict behavior, or the ownership boundary.

**UD-10 shared-availability disposition:** LOCKED / refinement allowed.

### UD-10 Full-Restore Multi-Device Write Gating — APPROVED / REFINEMENT ALLOWED

- A full UD-9 **Replace Restore** is a profile-wide authoritative state transition, not a sequence of ordinary independently reconciled record mutations.
- FCC maintains an application-level **profile generation/epoch** distinct from record `schemaVersion` and record edit revision.
- Profile generations advance monotonically and identify which complete profile state is authoritative.
- A write derived from an older profile generation must never silently become a valid write against a newer generation.
- Full restore establishes a profile-wide authoritative **write gate** before destructive replacement begins.
- Client-side disabled controls alone are insufficient; generation/write-gate correctness must also be enforceable at the authoritative synchronization boundary.
- While the restore gate is active, ordinary profile User Knowledge writes and authoritative availability mutations cannot commit.
- Current authoritative data may remain readable during candidate preparation where safe.
- Restore data is prepared as an **inactive candidate profile state** before becoming authoritative.
- Inactive restore candidate data does not participate in normal User Knowledge queries, Recommendations, Reports, ownership, or current availability.
- Candidate restore data must pass complete validation before activation.
- Restore activation occurs through one logical authoritative generation cutover; FCC must never expose a partially restored dataset as authoritative.
- Connected devices observing a new generation must refresh/rebind to it before normal authoritative writes resume.
- Cached records from an older generation may physically remain temporarily but are not authoritative.
- Offline queued writes from an older generation are rejected when they later reconnect rather than replayed into the restored generation.
- Pre-restore pending changes do not automatically reconcile across the restore-generation boundary because doing so would violate complete Replace semantics.
- Where practicable, FCC may preserve rejected pre-restore user intent for explicit review/reapplication, but any reapplication is a new current-generation mutation subject to current validation and reconciliation.
- Record-level revision comparison/reconciliation applies within the active generation; generation precedence settles cross-generation authority.
- Authoritative synchronized full restore requires verified current-profile connectivity sufficient to establish the restore gate; an offline client cannot independently activate a full profile Replace.
- A failure before generation activation leaves the prior generation authoritative and does not expose the candidate.
- A post-activation critical failure invokes the validated UD-9 safety checkpoint through the same trusted restore pathway.
- **Generations are never reused.** Rollback creates another newer generation rather than reactivating the pre-restore generation.
- The same write-gate/generation protections apply during rollback.
- FCC does not require acknowledgement from every known historical device before completing restore or retiring older generations.
- Any device reconnecting after restore must adopt the current generation before its writes may become authoritative.
- A successful full restore invalidates current authoritative **What I Have With Me Today** availability because that temporary context may reference replaced persistent User Knowledge; any reuse requires explicit reconfirmation against the new generation.
- Exact generation-token type, provider storage layout, staging representation, security-rule implementation, cache-refresh technique, rejected-write retention, and recovery UI remain refinement/implementation details.
- This lock may be revised if implementation, provider, security, privacy, or UX findings produce safer mechanics without weakening the controlling guarantees: complete Replace authority, generation monotonicity/non-reuse, stale-generation rejection, all-or-nothing activation, safe rollback, and no automatic resurrection of pre-restore state.

**UD-10 restore-gating disposition:** LOCKED / refinement allowed.

**UD-10 overall disposition:** LOCKED / refinement allowed. The conflict-control foundation, deletion/tombstone/anti-resurrection rules, reconciliation policy, shared What I Have With Me Today concurrency model, and full-restore multi-device write gating are internally reconciled. No remaining UD-10 architecture decision is required before UD-11; exact provider primitives, metadata fields, retention values, merge algorithms, and recovery/conflict UI remain implementation/refinement details.

### UD-11 Appearance Architecture — APPROVED / REFINEMENT ALLOWED

- **Appearance** is a first-class Settings area and owns visual presentation choices rather than account identity or behavioral preferences.
- Appearance separates **Theme** from **Color Scheme**. Theme is the FCC visual design family; Color Scheme is the supported System/Light/Dark presentation behavior within that theme.
- Each production-supported theme explicitly declares which color schemes it supports. FCC must not expose an unsupported theme/scheme combination merely to satisfy a generic selector.
- **System** follows the device/browser light-dark preference using validated variants supported by the selected theme. If a theme does not support both light and dark variants, FCC must not fabricate an unvalidated counterpart.
- Theme and Color Scheme remain **device-local** settings under UD-7. They do not synchronize across authenticated devices and are outside the authoritative UD-9 User Knowledge backup.
- Forest Journal remains the production visual/reference baseline. Shared application layout, components, interaction, accessibility, and responsive behavior should be centralized; production themes should primarily express design tokens and deliberate bounded overrides rather than duplicate the application UI architecture.
- The canonical reference-media surface remains a cross-theme invariant under the existing UI standard.
- Only production-approved and validated themes appear in the Theme selector. Forest Copper, Forest Gold, and Legacy Dark remain deferred candidates and are not promoted by this architecture lock.
- Existing theme candidates may later be revised, combined, repurposed into variants, rejected, or promoted through deliberate theme implementation and validation. Their current existence does not guarantee production support.
- The architecture supports multiple production themes in Version 1, but Version 1 does not require an arbitrary minimum theme count. The final supported-theme set remains open until theme implementation/validation.
- Exact theme-token structure, CSS organization, selector presentation, preview UX, fallback behavior, candidate naming, and final Version 1 supported-theme set remain implementation/refinement details.

**UD-11 Appearance disposition:** LOCKED / refinement allowed.

### UD-11 Preferences — Preferred Regulation States — APPROVED / REFINEMENT ALLOWED

- **Preferred Regulation States** are synchronized profile-owned Preferences under the locked UD-7 ownership boundary.
- The user may explicitly select **zero, one, or multiple** preferred states. Version 1 does not require a primary, home, or default state.
- Preferred states prioritize quick access in the Regulations gateway but never filter, hide, or restrict the complete supported state list. Regulations search continues across the full supported state set.
- Within the preferred group, Version 1 uses deterministic alphabetical ordering rather than user-managed ranking.
- Preferred-state status expresses only durable quick-access intent. It does not imply residence, current physical location, fishing-license ownership, regulatory jurisdiction, the user's current fishing location, or a default location for What Should I Throw.
- FCC does not silently infer or persist a preferred state from geolocation, browser/device location, Catch Log entries, recent Regulations searches, current fishing context, or What Should I Throw activity. Durable preference creation/removal requires explicit user intent.
- The authoritative preference may be edited from **Settings → Preferences** and may also be changed through an equivalent contextual Add to Preferred / Remove from Preferred action in Regulations; these are two UI entry points to the same synchronized preference authority, not separate state.
- No separate **Home State**, **Primary State**, or equivalent preference is approved without a demonstrated feature requirement.
- Exact selector controls, labels, empty-state presentation, preferred-section visual treatment, and persistence field names remain implementation/refinement details.
- This lock may be refined if Regulations UX, accessibility, provider, or implementation findings produce better mechanics without weakening explicit user control, complete-state access, non-inference, or the no-implicit-jurisdiction boundary.

**UD-11 Preferred Regulation States disposition:** LOCKED / refinement allowed.

### UD-11 Preferences — Measurement Units — APPROVED / REFINEMENT ALLOWED

- Version 1 exposes one synchronized profile-owned **Measurement System** preference under the locked UD-7 ownership boundary.
- Supported Version 1 values are **U.S. Customary** and **Metric**. FCC does not create separate temperature, length, weight, distance, speed, or similar unit selectors in Version 1.
- FCC-generated ordinary convertible measurements render using the selected Measurement System where conversion is semantically appropriate.
- Changing the Measurement System changes presentation behavior; it does not destructively rewrite authoritative persisted values. Exact canonical storage units remain owned by each implemented domain contract.
- Canonical tackle identities and established fishing-size conventions are not mechanically rewritten merely because Metric is selected. Where useful, FCC may present a converted equivalent secondarily while preserving the recognized canonical designation.
- Manufacturer specifications retain their published identity/value where conversion would distort or obscure the recognized specification; a converted equivalent may be presented secondarily where useful.
- Authoritative Regulations/source-authored values retain the source unit and wording. FCC may show a converted equivalent secondarily, but the conversion must remain distinguishable from the authoritative source value and must not be presented as though the agency published it.
- User-entered or historical values are not destructively rewritten when the preference changes. Their storage/authoritative representation remains domain-owned while display follows the approved domain conversion rules.
- Exact canonical internal units, conversion precision, rounding rules, dual-display treatment, and per-domain exceptions remain implementation/refinement details.
- This lock may be refined if implemented domains, accessibility, regulations presentation, or fishing-industry conventions require safer display rules without weakening profile synchronization, non-destructive presentation, or canonical/source-value preservation.

**UD-11 Measurement Units disposition:** LOCKED / refinement allowed.

### UD-11 Preferences — Version 1 Scope Closure — APPROVED / REFINEMENT ALLOWED

- The Version 1 **Preferences** surface contains exactly the two currently demonstrated synchronized profile-owned preference concepts: **Preferred Regulation States** and **Measurement System**.
- No **Home State**, **Primary State**, default region, notification preference, default What Should I Throw mode, default Fishing Setup/Inventory Location, search/filter default, beginner/advanced mode, language/localization preference, FCC-specific accessibility-display preference, debug/developer option, cache/offline control, or other speculative preference is created without a demonstrated implemented feature requirement.
- **Appearance** remains a separate device-local Settings area rather than profile-owned Preferences.
- Profile/account controls and Data Management controls remain separate Settings areas. Favorites, My Tackle, Fishing Setups, Inventory Locations, Catch Log, and other durable User Knowledge remain their own semantic domains rather than Preferences.
- Temporary UI/session state and **What I Have With Me Today** availability state remain outside durable Preferences.
- Notification intent may be added later only if an approved end-user notification feature demonstrates that requirement; browser/OS permission and device subscription/delivery capability remain device/system state under UD-7.
- Closing Version 1 scope does not prohibit future Preferences. A later demonstrated feature may extend the profile-owned Preferences document through the locked UD-5 schema-version/migration architecture.
- Exact physical field names, control layout, default initialization behavior, and implementation mechanics remain implementation/refinement details where not otherwise locked.

**UD-11 Preferences Version 1 disposition:** LOCKED / refinement allowed / CLOSED.


### UD-11 Profile — APPROVED / REFINEMENT ALLOWED

- **Profile** is the user-facing FCC identity/account surface and remains distinct from authentication credentials, synchronized Preferences, device-local Appearance, Data Management, and other User Knowledge domains.
- Version 1 FCC-owned Profile data contains only an optional synchronized **Display Name** unless another implemented feature demonstrates an additional profile-field requirement.
- Display Name is user-editable FCC profile data. It does not have to match the name supplied by Google, Firebase, or another authentication provider, and provider changes must not silently overwrite it.
- Authentication-provider identity and credentials remain authentication-owned rather than duplicated into editable FCC Profile fields.
- Profile may display authenticated email address, sign-in method/provider, and account/authentication state as read-only account information sourced from the authentication layer. FCC does not create a second editable profile `email` field merely because that information is displayed in Settings.
- Changing authentication email, password, or provider/linkage uses the approved authentication/provider workflow rather than editing FCC Profile data.
- Account-level actions may be reached from the Profile/account area, but ownership remains separated: Sign in / Sign out belong to Authentication; account deletion executes the locked UD-6 destructive deletion lifecycle; Backup / Export / Restore belongs to Data Management; synchronization/conflict/recovery status belongs to the cross-cutting UD-11 status surfaces.
- Appearance and Preferences remain their separately locked Settings areas. My Tackle, Favorites, Catch Log, Fishing Setups, Inventory Locations, current availability, and other User Knowledge remain their own semantic domains rather than Profile fields.
- Version 1 does not create speculative legal-name, first/last-name, address, phone, date-of-birth, gender, avatar/profile-photo, Home State, ZIP/postal code, region, fishing-license, skill-level, favorite-species, fishing-style, biography, social-handle, or similar profile fields without a demonstrated implemented feature requirement.
- Exact labels, placement, account-management affordances, provider-specific mechanics, Display Name validation, and whether Display Name is surfaced outside Settings remain implementation/refinement details.
- This lock may be refined if authentication, privacy/security, accessibility, or implemented-feature findings demonstrate safer mechanics without weakening the separation between FCC-owned profile data and provider-owned authentication identity.

**UD-11 Profile disposition:** LOCKED / refinement allowed.


### UD-11 Data Management — APPROVED / REFINEMENT ALLOWED

- **Data Management** owns the user-facing Settings boundary for backup, restore, reset, and destructive User Data/account lifecycle operations while preserving the locked UD-6 and UD-9 semantics.
- Version 1 exposes **Create Backup** as the complete provider-independent UD-9 backup package covering implemented authoritative durable User Knowledge. Temporary/session/current-availability state, including **What I Have With Me Today**, remains excluded; Reports remain separate non-authoritative outputs.
- Version 1 exposes **Restore from Backup** using the locked UD-9 full-Replace model: the selected package is treated as untrusted input, fully preflighted before active User Knowledge changes, supported older schemas may migrate on the candidate, unsupported newer schemas fail safely, a validated pre-restore safety checkpoint is created before destructive replacement, explicit confirmation is required, post-restore validation follows cutover, and failure uses the trusted rollback path.
- Restore UX must clearly communicate that current synchronized User Knowledge will be **replaced**, not merged. Multi-device restore concurrency continues to use the locked UD-10 profile-generation/write-gate model.
- Version 1 exposes **Reset This Device** as a local-only operation. It may clear local replicas/cache, local authentication/session state where appropriate, device-local Appearance, and temporary/local application state, but it must never delete synchronized cloud User Knowledge. The user-facing warning must make the local-only boundary clear.
- Version 1 does **not** expose a generic synchronized **Reset All Data** operation absent a demonstrated requirement. Domain-specific deletion remains owned by the applicable domain, and a later synchronized-data reset requires a separate explicit architecture/UX decision.
- Version 1 exposes **Delete Account** as an explicitly destructive account/data lifecycle operation. FCC offers an optional backup opportunity first without blocking deletion, requires strong confirmation and reauthentication/equivalent authority proof where required, recursively deletes all implemented profile-owned User Knowledge and FCC-controlled recovery copies, verifies deletion as practicable, and removes the authentication account last so credentials are not destroyed before profile-data deletion completes.
- Backup/export/restore remains distinct from Reports. Account deletion remains distinct from device-local reset and from any future synchronized-data reset.
- Exact labels, control placement, file-picker/download mechanics, progress/error treatment, warning copy, confirmation interaction, and provider-specific implementation details remain implementation/refinement details.
- This lock may be refined if provider, browser/PWA, privacy/security, accessibility, recovery, or implementation findings demonstrate safer mechanics without weakening the approved lifecycle boundaries.

**UD-11 Data Management disposition:** LOCKED / refinement allowed.

### UD-11 About — APPROVED / REFINEMENT ALLOWED

- **About** is the informational Settings surface for FCC product identity, release/version information, help/support entry points, applicable legal/privacy links, and centralized credits/attributions.
- About displays the **Freshwater Fishing Companion** product identity and a concise description consistent with the approved product purpose.
- About displays an application **release version** when Version 1 ships. The application release version is semantically distinct from User Knowledge `schemaVersion`, backup `formatVersion`, profile generation/epoch, Git commit identifiers, and documentation revisions.
- Exact application-version source, formatting, and release-number mechanics remain implementation details.
- Help, support, feedback, or issue-reporting controls are exposed only when an actual supported destination/workflow exists; Version 1 does not create speculative dead controls.
- About provides access to applicable privacy/legal information without making the About UI itself the canonical legal-document store. Terms, third-party notices, licenses, and similar entries appear only where actually applicable.
- About may provide centralized **Credits & Attributions**, but that surface does not replace domain-specific source provenance, required attribution, media-rights treatment, regulatory citations, or other contextual evidence requirements.
- A general fishing/regulatory information disclaimer may appear in About, but About must not be the sole location for materially important regulatory-source warnings.
- Authentication state, synchronization status, offline state, conflicts, recovery state, backup/restore actions, account deletion, Preferences, Appearance, and operational/developer controls remain outside About.
- Exact labels, layout, support destination, legal-document URLs/views, version formatting, and credits presentation remain implementation/refinement details.
- This lock may be refined if legal/privacy, accessibility, support, release-management, attribution, or implementation findings demonstrate safer mechanics without weakening the approved informational boundary.

**UD-11 About disposition:** LOCKED / refinement allowed.

### UD-11 Cross-cutting Authentication / Synchronization / Conflict / Recovery Status Surfaces — APPROVED / REFINEMENT ALLOWED

- The cross-cutting status layer answers whether the user's FCC User Knowledge is safe and usable now and whether user action is required; it is not a separate Settings category.
- Healthy authenticated/synchronized operation is intentionally quiet. FCC does not require a permanent global success indicator; account/synchronization state remains inspectable from the applicable owned surface.
- Signed-out use is a normal supported state rather than an error because Reference Knowledge remains usable without authentication.
- Authentication uncertainty, confirmed sign-out/loss of authorization, synchronization unavailability, and confirmed network-offline state remain semantically distinct. FCC must not claim a specific connectivity cause it has not actually established.
- Temporary authentication/synchronization uncertainty preserves local User Knowledge and does not trigger destructive clearing. Sensitive cloud writes/synchronization may pause while FCC attempts to re-establish valid authorization.
- Confirmed sign-out follows the locked UD-6 local-purge/cloud-retain semantics. A user-initiated sign-out must communicate the local-device effect before confirmation while making clear that synchronized account data remains in the cloud.
- Synchronization degradation uses a persistent non-blocking status when user awareness is materially useful. FCC may expose **Changes waiting to sync** or equivalent only when that condition is actually known.
- Unsafe unresolved semantic conflicts surface as **Data needs review** or equivalent and provide direct access to resolution. Conflict UI describes the actual competing values/change intentions rather than provider, revision, timestamp, generation, or device jargon except where diagnostics require it.
- Conflict resolution uses the locked UD-10 semantic options such as **Use Current**, **Use My Change**, and **Edit Value** where valid. Conflicts remain scoped to affected records/domains and do not block unrelated FCC use or synchronization.
- Restore in progress uses a persistent protective operation state while the locked UD-10 profile-wide write gate prevents ordinary User Knowledge mutation. Safe Reference Knowledge reading may remain available.
- Restore UX distinguishes pre-replacement failure, successful rollback after failed restore, successful restore, and critical rollback/recovery failure. A pre-replacement failure must state that current data was not changed; a successful rollback must state that restore failed but prior data was recovered.
- Critical recovery failure is the highest-severity protective state. FCC must not present the profile as successfully restored or trustworthy and must block ordinary User Knowledge mutation until validated recovery re-establishes a trustworthy authoritative state.
- Successful full restore communicates that authoritative **What I Have With Me Today** availability is invalidated and requires explicit reconfirmation before reuse under the new profile generation.
- Cross-cutting status UX does not create a separate Version 1 **Sync Settings**, **System Status**, or **Data Health** area. Profile, Data Management, and affected semantic domains retain their existing ownership; the status layer provides contextual banners, inline notices, protective blocking states, and links into the correct owner when action is required.
- Transient toasts may acknowledge completed operations but are never the sole presentation for synchronization loss, authentication action required, unresolved conflicts, restore failure, or critical recovery state.
- Important state cannot rely on color alone. Status presentation requires plain-language text, semantic state/iconography or equivalent reinforcement, accessible treatment, and an appropriate action consistent with the canonical UI/accessibility standard.
- Exact component styling, iconography, banner placement, ARIA/live-region behavior, retry mechanics, diagnostic detail, and implementation-specific status detection remain implementation/refinement details.
- This lock may be refined if provider, security/privacy, accessibility, recovery, or implementation findings demonstrate safer mechanics without weakening the approved semantic distinctions, non-destructive uncertainty behavior, scoped-conflict rule, restore-state truthfulness, or critical-recovery protections.

**UD-11 cross-cutting status disposition:** LOCKED / refinement allowed.

# UD-11 Closure Check — CLOSED / PASS / Refinement Allowed

UD-11 is complete at the architecture level. Appearance, Preferences Version 1, Profile, Data Management, About, and the cross-cutting authentication / synchronization / conflict / recovery status surfaces are internally complete and non-overlapping for demonstrated Version 1 needs. No additional speculative Settings category, preference, profile field, sync/status page, or destructive data action is authorized by closure.

Remaining stale wording in canonical owners is reconciliation work for UD-12, not an unresolved UD-11 product decision. Implementation-specific labels, layouts, provider mechanics, status detection, styling, accessibility mechanics, and validation remain refinable within the locked semantic boundaries.

**UD-11 overall disposition:** CLOSED / PASS / refinement allowed. Proceed to **UD-12 — Architecture Closeout**. Production User Data/My Tackle writes remain unauthorized until UD-12 completes the Planning-to-Build gate.

# Open Architecture Decisions

1. **UD-2 — Identity + Sync Model:** LOCKED / refinement allowed as documented above.
2. **UD-3 — Local Persistence Technology:** LOCKED / refinement allowed as documented above.
3. **UD-4 — User Data Store Structure:** LOCKED / refinement allowed as documented above.
4. **UD-5 — Schema Versioning + Migration:** LOCKED / refinement allowed as documented above.
5. **UD-6 — Retention + Deletion:** LOCKED / refinement allowed as documented above.
6. **UD-7 — Preference Ownership:** LOCKED / refinement allowed as documented above.
7. **UD-8 — Ownership vs Current Availability:** LOCKED / refinement allowed. Ownership and current availability remain independent; the beginner capture model and current-availability lifecycle/cross-device boundary are approved. Exact production item schemas, selector vocabularies, quantity behavior, Fishing Setup mechanics, and other My Tackle implementation details remain owned by their later design/build gates.
8. **UD-9 — Export / Backup / Restore:** LOCKED / refinement allowed. Backup is the complete authoritative durable User Knowledge recovery set; Reports are separate configurable non-authoritative views. User-controlled export, bounded FCC recovery retention, transactional Replace restore, schema compatibility, provider-independent package/versioning, integrity metadata, and restore-source metadata are approved at the architecture level.
9. **UD-10 — Conflict / Multi-Device Reconciliation:** LOCKED / refinement allowed. Record-oriented revision control, stale-write protection, deletion/tombstone/anti-resurrection semantics, deterministic/lossless reconciliation versus explicit conflict resolution, shared **What I Have With Me Today** concurrency, and full-restore profile-generation/write-gating semantics are approved. Exact provider primitives and implementation mechanics remain refinable.
10. **UD-11 — Settings UX Boundary:** CLOSED / PASS / refinement allowed. Appearance, Preferences Version 1, Profile, Data Management, About, and cross-cutting authentication / synchronization / conflict / recovery status surfaces are architecture-complete for demonstrated Version 1 needs.
11. **UD-12 — Architecture Closeout:** ACTIVE — CANONICAL RECONCILIATION COMPLETE / REPOSITORY VALIDATION + COMMIT PENDING. UD-2 Firebase Authentication + Cloud Firestore is LOCKED / refinement allowed. Closeout remains blocked only on required complete-repository validation, commit/push, CI verification, and final convergence.

Decision numbering in this workstream is local planning vocabulary, not new global `D###` decision IDs.

# Current Gate State

- Recommendation Prerequisites Foundation: CLOSED / PASS / FINAL.
- GATE-006 Settings / User Data Architecture: ACTIVE / CLOSEOUT VALIDATION — architecture decisions are complete; required repository validation/commit/final convergence remain.
- GATE-007 My Tackle Availability Foundation: BLOCKED until GATE-006 closeout lands and passes.
- GATE-004 What Should I Throw production: BLOCKED behind GATE-006 and GATE-007.
- No User Data/My Tackle production write is authorized yet.

# UD-12 Canonical Owner Reconciliation — COMPLETE / Repository Validation Pending

The final locked UD-1 through UD-11 architecture has been reconciled into the durable owners affected by this planning phase. This is a documentation-only closeout delta; no production source/data/media/configuration change is authorized by this reconciliation.

| Owner | UD-12 disposition |
|---|---|
| `workstreams/SETTINGS-USER-DATA-ARCHITECTURE.md` | UPDATED — UD-2 final lock, UD-11 closed state, UD-12 closeout state, impact matrix, and exact resume |
| `WORKING_STATE.md` | UPDATED — compact closeout state and exact resume |
| `data-model/01-FOUNDATION.md` | UPDATED — stable profile identity terminology now reflects the locked Firebase/Firestore/reconciliation foundation |
| `data-model/05A-INVENTORY.md` | UPDATED — architecture-level ownership/sync/availability questions removed from the GATE-007 open-schema list |
| `data-model/07-USER-DATA.md` | UPDATED — UD-2 final lock plus settled Profile, Preferences, Data Management, status, persistence, and gate boundaries |
| `ARCHITECTURE.md` | UPDATED — final UD-1 through UD-11 architecture and closeout/build sequencing |
| `UI_STANDARD.md` | UPDATED — cross-cutting User Knowledge status/recovery presentation contract |
| `ROADMAP.md` | UPDATED — milestone 6 architecture-complete/closeout-pending status and milestone 7 handoff |
| `ACTIVE-CHANGE-LEDGER.md` | UPDATED — GATE-006 closeout status and GATE-007 blocking boundary |
| `decisions/data-model.md` / D067 | UPDATED — durable User Knowledge architecture decision now reflects the settled gate |
| `decisions/product.md` / D069 | UPDATED — prerequisite sequence now reflects architecture completion and GATE-007 as next dependency |
| `DECISIONS.md` | VERIFIED — NO CHANGE REQUIRED — no decision ID/title/owner identity changed |
| `data-model/README.md` | VERIFIED — NO CHANGE REQUIRED — `07-USER-DATA.md` remains Draft because exact production domain schemas remain gated |
| `data-model/05-TACKLE.md` | VERIFIED — NO CHANGE REQUIRED — canonical Tackle vs My Tackle ownership boundary already agrees |
| `data-model/09-RELATIONSHIPS.md` | VERIFIED — NO CHANGE REQUIRED — no relationship ownership changed |
| `V1-DESIGN-AUDIT.md` | VERIFIED — NO CHANGE REQUIRED — final site-wide audit remains later work |
| `DEVELOPMENT_WORKFLOW.md` / `workflow/DOCUMENTATION-AND-CLOSEOUT.md` | VERIFIED — NO CHANGE REQUIRED — existing Planning-to-Build gate already governs this closeout |
| Reference Knowledge production/evidence/media owners | NOT APPLICABLE — no Reference Knowledge contract or production data changed |

**First authorized post-closeout action, once GATE-006 lands and passes:** activate **GATE-007 — My Tackle Availability Foundation** and begin its bounded production foundation with the shared authenticated User Knowledge repository/access layer plus the minimum authoritative My Tackle ownership and current-availability record contracts required for D069 recommendation executability. Recommendation engine/UX production remains blocked until GATE-007 closes.

# Documentation Execution Gate

Every material lock must be checkpointed in the compact Live Working State and, when durable, reconciled into the applicable canonical owner. The Live Working State must not accumulate historical checkpoint chains. Before production implementation begins, the Planning-to-Build closeout must give every applicable owner an UPDATED / VERIFIED — NO CHANGE REQUIRED / NOT APPLICABLE disposition, remove superseded planning language, run required consistency/Repository Integrity validation, verify changed-file scope/readback, and record the first authorized build action.

# Exact Resume

**UD-12 — Architecture Closeout: ACTIVE — CANONICAL RECONCILIATION COMPLETE / REPOSITORY VALIDATION + COMMIT PENDING.** Preserve UD-1 through UD-11 as locked/closed above, including **UD-2 — Identity + Sync Model: LOCKED / refinement allowed** and **UD-11 — Settings UX Boundary: CLOSED / PASS / refinement allowed**. Run the required complete-repository `tools/validate_repository_integrity.js` and `tools/validate_workstream_closeout.js` checks against the reconciled Drive Current tree. If PASS, commit/push the bounded documentation-only closeout, verify changed-file scope and required CI/Pages, then record **GATE-006 CLOSED / PASS** and activate **GATE-007 — My Tackle Availability Foundation**. First GATE-007 action: establish the shared authenticated User Knowledge repository/access foundation and the minimum authoritative My Tackle ownership/current-availability production contracts required by D069. Recommendation engine/UX production remains blocked until GATE-007 closes.
