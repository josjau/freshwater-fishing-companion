# Freshwater Fishing Companion — Working State

**Document:** WORKING_STATE.md  
**Document Revision:** 1.18.41  
**Document Status:** Approved — Active Repository Continuity Record  
**Workstream Status:** Settings / User Data Architecture — UD-12 CLOSEOUT / ACTIVE PATH RETIRED / VALIDATION + COMMIT PENDING  
**Last Updated:** 2026-09-02

# Purpose

This file is the single compact repository current-state and exact-resume entrypoint. It records only the state required to resume safely. Durable decision reasoning belongs in `DECISIONS.md` / `decisions/`; detailed domain contracts belong in `data-model/`; active workstream detail belongs in the active workstream file; landed history belongs in `CHANGELOG.md` and Git history; non-closed cross-workstream carry-forward belongs in `ACTIVE-CHANGE-LEDGER.md`.

# Authority / Current Baseline

- GitHub `main` is committed authority. Current verified planning baseline before the UD-3 lock is `fc1bc201ff093a9651b362053f0e2cb68fddd90d` (`Advance Settings architecture to UD-3`), parent `a66f5a18c7cb1f4ee839917a69fdef9a774f8813`.
- Repository Integrity #112: PASS. GitHub Pages #600: PASS on `fc1bc201ff093a9651b362053f0e2cb68fddd90d`.
- Drive Current contains the approved UD-3 through UD-7 architecture locks plus **UD-8 — Ownership vs Current Availability: LOCKED / refinement allowed**. UD-8 now includes the design-level item-family locks, beginner availability capture model, and temporary profile-scoped lifecycle/cross-device boundary. Remaining exact My Tackle schemas/UX mechanics are deferred to their later gate. No production source/data/media/configuration change is authorized by this planning checkpoint.
- **UD-9 — Export / Backup / Restore: LOCKED / refinement allowed.** Backup is one complete provider-independent recovery artifact covering all implemented authoritative durable User Knowledge; Reports are separate configurable non-authoritative views. Normal exports are user-controlled; FCC keeps only bounded inactive pre-restore recovery material, with a working V1 value of one latest copy for 30 days and that exact value provisional. Full restore uses complete preflight, a validated safety checkpoint, supported-schema migration, complete Replace semantics, post-restore validation, and rollback on failure. The package has independent `formatVersion` plus record-level `schemaVersion`, explicit domain/count/provenance/integrity metadata, excludes authentication secrets, and does not expose raw Firestore layout. Temporary **What I Have With Me Today** state remains outside durable backup under UD-8.
- **UD-10 — Conflict / Multi-Device Reconciliation: LOCKED / refinement allowed.** Normal sync is record-oriented; authoritative mutable records carry revision/change metadata separate from `schemaVersion`; stale writes cannot silently overwrite unseen newer data; Create/Update/Delete are distinct; deleted IDs are not reused for ordinary creation; minimal tombstones are bounded; concurrent edits auto-reconcile only when deterministic, lossless, and semantically valid; unresolved semantic conflicts preserve both intentions; and current availability is one shared temporary profile context with local drafts until explicit confirmation, revision-controlled Confirm/Reset, and mandatory prior-day reconfirmation. Full Replace restore now uses a separate monotonically advancing profile generation/epoch plus a profile-wide write gate, inactive validated candidate state, logical generation cutover, stale-generation rejection, connected-device refresh/rebind, non-reused generations, and rollback through a newer generation. Successful full restore invalidates authoritative What I Have With Me Today state until explicit reconfirmation. UD-11 is now CLOSED / PASS; the active architecture step is UD-12 — Architecture Closeout.
- **UD-11 — Settings UX Boundary: CLOSED / PASS / refinement allowed.** Appearance, Profile, Data Management, About, and the cross-cutting authentication / synchronization / conflict / recovery status surfaces are **LOCKED / refinement allowed**; Preferences Version 1 is **LOCKED / refinement allowed / CLOSED** with exactly **Preferred Regulation States** and **Measurement System**. **UD-2 — Identity + Sync Model is LOCKED / refinement allowed** with Firebase Authentication + Cloud Firestore. **UD-12 — Architecture Closeout is ACTIVE — canonical reconciliation complete / repository validation + commit pending.**
- The final Recommendation Prerequisites Foundation source/runtime commit remains `cdf8f408011c5137d0351cec9f350d0a6eee66c2` (`Techniques to Rig - Final`).
- Google Drive `Working Source/Current` remains the complete editable working tree for approved uncommitted changes.
- Session-close documentation reconciliation updated the current canonical User Data, architecture, theme/UI, roadmap, and gate owners to match the locked UD-8 through UD-10 and UD-11 Appearance state. Historical/retired design-history records were intentionally not rewritten. GitHub remains unchanged until the Settings / User Data Architecture planning section closes.

# Current Product State

- Knots — CLOSED / PASS.
- Fish Guide Version 1 — CLOSED / PASS.
- Regulations — U.S. State Fishing Resource Gateway — CLOSED / PASS; later link/resource corrections remain maintenance rather than milestone reopening.
- What Should I Throw Phase 0 — PLANNING COMPLETE / PRODUCTION DEFERRED / CLOSED-PASS under D069.
- Recommendation Prerequisites Foundation — CLOSED / PASS / FINAL. Production includes the approved 35 Condition records, 13 Lure/Bait identities, 16 Technique records, and 177 intrinsic Compatibility relationships (54 Rig↔Lure/Bait, 69 Rig↔Technique, 54 Lure/Bait↔Technique).
- Settings / User Data Architecture — ACTIVE / ARCHITECTURE CLOSEOUT under D067/D069; UD-11 CLOSED / PASS, UD-12 ACTIVE.

# Active Settings / User Data Architecture

**UD-1 — Persistent Synced User Identity: LOCKED, refinement allowed.**

- FCC targets one persistent user identity/profile that may span multiple devices.
- Each device may maintain a local offline-capable copy of supported User Knowledge; supported durable User Knowledge synchronizes through a shared profile-scoped service when connectivity is available.
- Multiple devices are replicas of the same user profile, not independent semantic profiles.
- Cross-device synchronization requires secure authentication or an equivalent approved account/device-linking mechanism.
- Synchronization is record-oriented rather than whole-profile replacement so independent device edits can be reconciled without replacing an entire user dataset.
- Manual export/restore remains backup, portability, and disaster recovery rather than routine multi-device synchronization.
- Multi-profile/family sharing remains deferred.
- UD-1 may be refined if later persistence, conflict-resolution, privacy, security, or implementation findings demonstrate a better boundary without silently changing the approved cross-device product goal.
- Current Rig-readiness `localStorage` state remains transitional availability state and must not silently become authoritative My Tackle ownership.

**UD-2 — Identity + Sync Model: LOCKED, refinement allowed.**

- Firebase Authentication is the working Version 1 identity provider; authenticated Firebase UID scopes the FCC profile.
- Additional devices access the same semantic profile by authenticating to the same account; no custom Version 1 device-linking protocol is currently required.
- Initial sign-in mechanisms are email/password and Google Sign-In, subject to implementation/security refinement.
- Reference Knowledge remains usable signed out; durable synchronized User Knowledge requires authentication when the user elects to create/sync it.
- Cloud Firestore is the working profile-scoped synchronization service; records synchronize independently rather than as one replaceable profile payload.
- Firestore Security Rules must enforce UID-scoped authorization. Firestore offline cache/sync is transport behavior; UD-10 still owns FCC conflict/deletion semantics.
- No custom server/Cloud Functions dependency is approved without a demonstrated requirement. Backup remains separate under UD-9.
- Firebase Authentication + Cloud Firestore is the locked Version 1 provider model, refinement allowed if project cost, browser/PWA, security/privacy, exportability, or implementation constraints materially require a safer implementation without changing UD-1.

**UD-3 — Local Persistence Technology: LOCKED, refinement allowed.**

- Under locked UD-2, Cloud Firestore is the durable synchronized authority for authenticated profile-owned User Knowledge.
- Firestore persistent browser cache is the Version 1 local/offline replica where supported; FCC will not maintain a parallel authoritative IndexedDB User Knowledge database.
- Persistent User Knowledge is accessed through one FCC-owned repository/data-access abstraction; feature modules should not scatter direct Firebase/Firestore persistence calls.
- Firebase owns its internal IndexedDB/cache implementation; FCC does not read or manipulate those private structures directly.
- Persistent multi-tab caching should be enabled where supported; persistence initialization failure must degrade safely to supported memory/online behavior rather than block normal Reference Knowledge use.
- Local cache is a working replica, not backup and not a second ownership authority. UD-6 owns site-data clearing/reset semantics, UD-9 owns backup/export/restore, and UD-10 owns conflict/deletion reconciliation.
- Existing Rig-readiness `localStorage` remains transitional availability state and is not automatically promoted into authoritative User Knowledge.

**UD-4 — User Data Store Structure: LOCKED, refinement allowed.**

- Persistent User Knowledge is partitioned beneath the authenticated profile into semantic domains; the profile root is an ownership container, not a universal User Data record.
- Small bounded singleton concerns such as Profile and profile-owned Preferences may use dedicated documents; growing/independently edited domains use individually addressable records.
- My Tackle uses one record per owned item; Fishing Setups one record per setup; Catch Log one record per catch/event; persistent Favorites use individual relationship records if implemented.
- Cross-domain and Reference Knowledge relationships use stable IDs rather than embedded authoritative copies.
- No generic catch-all User Knowledge collection or speculative empty domain is approved. The FCC repository abstraction hides physical provider paths from feature/UI code.
- Exact Firestore path names remain implementation details. UD-5 owns version/migration semantics; UD-6 deletion/retention; UD-7 preference ownership; UD-8 availability; UD-9 backup/restore; UD-10 conflict/reconciliation; domain gates own exact fields.

**UD-5 — Schema Versioning + Migration: LOCKED, refinement allowed.**

- Every authoritative persisted User Knowledge document/record carries a positive integer `schemaVersion`, beginning at `1` for that record type's first authoritative schema.
- `schemaVersion` belongs to the persisted document/record, not to each field. Singleton documents such as profile-owned Preferences have one document-level version; independently addressable My Tackle items, Fishing Setups, Catch Log events, and Favorite relationships each carry their own record-level version. No separate collection-wide/global profile schema version is required.
- Record types/domains evolve independently. Supported older records are migrated forward behind the FCC repository boundary through explicit validated transformations; record-local/on-read migration is the default.
- Version advances only after successful validated persistence. Migration failure preserves the last valid authoritative representation.
- Older clients must not overwrite or downgrade newer unsupported schemas. Schema evolution is forward-only by default; UD-9 owns backup/recovery and UD-10 owns conflict/reconciliation semantics.
- No speculative migration machinery is created for domains or schema versions that do not yet exist.


**UD-6 — Retention + Deletion: LOCKED, refinement allowed.**

- Explicit user sign-out removes or invalidates local profile-owned data/cache on that device while synchronized cloud User Knowledge remains intact. Confirmed forced sign-out/loss of authorization follows the same local-purge/cloud-retain boundary.
- Temporary connectivity loss, synchronization failure, or unresolved authentication state does not count as sign-out; local User Knowledge is retained and sensitive cloud writes/sync may pause until status is resolved.
- FCC must notify the user when sync is unavailable and when confirmed sign-out will remove local profile data; exact UX belongs to UD-11.
- Browser/site-data clearing and device-local reset remove only local replicas/state and must never be treated as cloud deletion.
- Explicit synchronized record deletion removes the authoritative record across replicas after reconciliation; exact tombstone and resurrection-prevention mechanics remain UD-10.
- Full account/profile deletion must recursively remove all implemented profile-owned User Knowledge before authentication-account removal; deleting only the profile root is insufficient.
- Cross-domain deletion does not silently erase independent historical User Knowledge unless an explicit domain lifecycle contract requires it.
- Deleted content is not retained indefinitely as hidden active User Knowledge; minimum technical deletion state may exist under UD-10, while backup retention remains UD-9.

**UD-7 — Preference Ownership: LOCKED, refinement allowed.**

- Preferred Regulations states are synchronized profile-owned preferences. Under the locked UD-11 surface, the user may explicitly select zero, one, or multiple states; they prioritize quick access without hiding/restricting the complete supported list, use alphabetical preferred ordering in Version 1, are not silently inferred from location/behavior, and do not imply residence, license status, jurisdiction, current fishing location, Home State, or Primary State.
- Appearance is device-local. UD-11 refines it into separate **Theme** and **Color Scheme** concepts; both may differ across devices, do not synchronize as profile-owned preferences, and remain outside UD-9 User Knowledge backup. System/Light/Dark are color-scheme choices offered only where supported by the selected production theme.
- Temporary UI/search/navigation/session state is not durable Preferences.
- Anonymous/device-local values are not silently promoted into synchronized profile preferences at sign-in; any later promotion requires an explicit approved migration rule.
- Measurement System is now locked under UD-11 as a synchronized profile-owned preference with **U.S. Customary / Metric** choices. It governs semantically appropriate FCC-generated display conversions without destructively rewriting authoritative stored values. Canonical tackle identities, manufacturer specifications, established fishing-size conventions, and authoritative Regulations/source wording remain preserved; converted equivalents may be secondary where useful. Exact canonical storage units, precision, rounding, and per-domain display exceptions remain implementation/refinement details. A home/default state or region is synchronized only when a demonstrated feature requires it.
- Notification intent may synchronize with the profile, while browser/OS notification permission, push/device subscription details, and delivery capability remain device/system state.
- Debug/developer flags, cache state/capability, browser/PWA capability, and similar operational values remain device/system state.
- No speculative preference fields are approved without a demonstrated feature and documented owner.
- UD-7 may be refined if later implemented features demonstrate a better ownership boundary without changing the durable-user-intent versus device/system/runtime-state principle.

**UD-8 — Ownership vs Current Availability: LOCKED / refinement allowed.**

- Ownership and current availability are independent dimensions.
- My Tackle is the sole authoritative source of persistent ownership; only explicit My Tackle actions add or remove ownership.
- Current availability may include owned tackle and temporary/non-owned tackle. Packed / With Me is availability state only.
- Borrowed/shared/rented/loaned tackle may satisfy availability without creating ownership.
- Recommendation executability uses current availability when an availability context exists rather than ownership alone.
- Existing transitional Rig Readiness state never silently converts into My Tackle ownership; any reuse/migration/discard/import requires an explicit approved transition rule.
- Hooks, Weights, Lure/Bait, and Rod/Reel item-family review principles are APPROVED at the design level.
- The beginner current-availability model is APPROVED: effective availability is selected owned equipment/Setups + selected Inventory Location contents + loose owned additions + temporary additions - explicit exceptions; none of these availability actions change ownership or persistent storage organization.
- No separate durable Loadout domain is justified for Version 1 at this point. Without a confirmed current-availability context, What Should I Throw may provide **Best Overall** but must not claim **Best Currently Available**.
- **Lifecycle lock:** What I Have With Me Today is temporary profile-scoped state and becomes authoritative only after explicit confirmation. Same-day selections may be reused with visible reconfirm/change affordance after meaningful interruption; on a later calendar day the prior selection is only a reusable candidate until reconfirmed and never silently remains current.
- The active availability context synchronizes across authenticated devices as one semantic profile context. UD-10 now locks the concurrency model: concurrent viewing requires no lease; unconfirmed edits remain local drafts; Confirm / Use This and Reset are revision-controlled authoritative operations; stale unchanged replicas adopt newer context; stale edited drafts reconcile from their base revision; contradictory semantic changes require explicit resolution; and context conflicts remain scoped without blocking unrelated durable synchronization.
- Explicit reset clears current availability without changing ownership, Inventory Location membership, or Fishing Setup relationships. Selected Locations/Setups resolve against their current persistent references rather than a frozen copied inventory snapshot; explicit exceptions and temporary additions remain context state.
- UD-8 is refinement-allowed: later implementation, UX, provider, or conflict findings may refine mechanics without violating explicit freshness, no stale silent carry-forward, one synchronized semantic context, or the ownership boundary.
- Exact item-family production fields, selector vocabularies/custom mapping, multi-location persistence shape, quantity depletion/low-stock behavior, CSV/screenshot import details, Fishing Setup mechanics, Recommendation normalization/ranking/display, and advanced loadouts remain open under later gates.

No production User Data/My Tackle implementation is authorized until this architecture planning phase is closed through the Planning-to-Build documentation gate.

# Active Gates / Carry-Forward

- GATE-006 — Settings / User Data Architecture: ACTIVE / CLOSEOUT VALIDATION — architecture complete; repository validation/commit/final convergence pending.
- GATE-007 — My Tackle Availability Foundation: BLOCKED until GATE-006 lands and passes.
- GATE-004 — What Should I Throw production: BLOCKED behind GATE-006 and GATE-007.
- GATE-012 — Repository Disaster Recovery / Reconstruction remains required before major Version 1 release or before irreplaceable User Knowledge enters scope, whichever occurs first.
- Other non-closed cross-domain items remain owned by `ACTIVE-CHANGE-LEDGER.md` and `V1-DESIGN-AUDIT.md`; they are not duplicated here.

# Documentation Execution Gate

**CLOSED / PASS.** The completed documentation reconciliation remains closed. Repository Integrity #112 and GitHub Pages #600 passed on `fc1bc201ff093a9651b362053f0e2cb68fddd90d`; normal Settings / User Data Architecture planning continues without reopening prior cleanup.

# Exact Resume Point

1. **UD-12 — Architecture Closeout** canonical-owner reconciliation is complete. The former active path `docs/workstreams/SETTINGS-USER-DATA-ARCHITECTURE.md` is retired; the final planning record is retained under `archive/workstreams/settings-user-data/SETTINGS-USER-DATA-ARCHITECTURE.md` for architecture reconstruction/design-lineage value.
2. Preserve **UD-2 — Identity + Sync Model: LOCKED / refinement allowed**, **UD-11 — Settings UX Boundary: CLOSED / PASS / refinement allowed**, and the other approved UD-1 through UD-10 locks.
3. Run complete-repository `tools/validate_repository_integrity.js`. The specialized `tools/validate_workstream_closeout.js` check is not required for this closeout; per the updated closeout workflow it is a targeted diagnostic only when a demonstrated stale-workstream risk remains.
4. If Repository Integrity passes, commit/push the bounded documentation-only closeout under standing documentation authority; verify exact changed-file scope and required CI/Pages.
5. Only after landed verification: record **GATE-006 CLOSED / PASS**, activate **GATE-007 — My Tackle Availability Foundation**, and begin its shared authenticated User Knowledge repository/access foundation plus minimum authoritative My Tackle ownership/current-availability contracts. What Should I Throw production remains blocked until GATE-007 closes.
