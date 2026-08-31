# Freshwater Fishing Companion — Working State

**Document:** WORKING_STATE.md  
**Document Revision:** 1.18.3  
**Document Status:** Approved — Active Repository Continuity Record  
**Workstream Status:** Settings / User Data Architecture — ACTIVE / PLANNING  
**Last Updated:** 2026-08-30

# Purpose

This file is the single compact repository current-state and exact-resume entrypoint. It records only the state required to resume safely. Durable decision reasoning belongs in `DECISIONS.md` / `decisions/`; detailed domain contracts belong in `data-model/`; active workstream detail belongs in the active workstream file; landed history belongs in `CHANGELOG.md` and Git history; non-closed cross-workstream carry-forward belongs in `ACTIVE-CHANGE-LEDGER.md`.

# Authority / Current Baseline

- GitHub `main` is committed authority. Provisional UD-2 documentation is landed through `a66f5a18c7cb1f4ee839917a69fdef9a774f8813` (`Document provisional UD-2 architecture`), parent `82a7bcf82e42d5f0235233d792da2eee557651ef`.
- Last fully verified documentation baseline before the provisional UD-2 checkpoint: `f7fd363d473a6f55d4008303fc951b3ce22c0459`; Repository Integrity #109 PASS and GitHub Pages #597 PASS.
- Drive Current matches the landed provisional UD-2 workstream/User Data documentation plus this current-state reconciliation; no production source/data/media/configuration change is authorized by this planning checkpoint.
- The final Recommendation Prerequisites Foundation source/runtime commit remains `cdf8f408011c5137d0351cec9f350d0a6eee66c2` (`Techniques to Rig - Final`).
- Google Drive `Working Source/Current` remains the complete editable working tree for approved uncommitted changes.

# Current Product State

- Knots — CLOSED / PASS.
- Fish Guide Version 1 — CLOSED / PASS.
- Regulations — U.S. State Fishing Resource Gateway — CLOSED / PASS; later link/resource corrections remain maintenance rather than milestone reopening.
- What Should I Throw Phase 0 — PLANNING COMPLETE / PRODUCTION DEFERRED / CLOSED-PASS under D069.
- Recommendation Prerequisites Foundation — CLOSED / PASS / FINAL. Production includes the approved 35 Condition records, 13 Lure/Bait identities, 16 Technique records, and 177 intrinsic Compatibility relationships (54 Rig↔Lure/Bait, 69 Rig↔Technique, 54 Lure/Bait↔Technique).
- Settings / User Data Architecture — ACTIVE / PLANNING under D067/D069.

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

**UD-2 — Identity + Sync Model: PROVISIONALLY LOCKED, refinement allowed.**

- Firebase Authentication is the working Version 1 identity provider; authenticated Firebase UID scopes the FCC profile.
- Additional devices access the same semantic profile by authenticating to the same account; no custom Version 1 device-linking protocol is currently required.
- Initial sign-in mechanisms are email/password and Google Sign-In, subject to implementation/security refinement.
- Reference Knowledge remains usable signed out; durable synchronized User Knowledge requires authentication when the user elects to create/sync it.
- Cloud Firestore is the working profile-scoped synchronization service; records synchronize independently rather than as one replaceable profile payload.
- Firestore Security Rules must enforce UID-scoped authorization. Firestore offline cache/sync is transport behavior; UD-10 still owns FCC conflict/deletion semantics.
- No custom server/Cloud Functions dependency is approved without a demonstrated requirement. Backup remains separate under UD-9.
- Firebase remains provisional until architecture closeout and may be refined if project cost, browser/PWA, security/privacy, exportability, or implementation constraints require it without changing UD-1.

No production User Data/My Tackle implementation is authorized until this architecture planning phase is closed through the Planning-to-Build documentation gate.

# Active Gates / Carry-Forward

- GATE-006 — Settings / User Data Architecture: ACTIVE / REQUIRED.
- GATE-007 — My Tackle Availability Foundation: BLOCKED behind GATE-006.
- GATE-004 — What Should I Throw production: BLOCKED behind GATE-006 and GATE-007.
- GATE-012 — Repository Disaster Recovery / Reconstruction remains required before major Version 1 release or before irreplaceable User Knowledge enters scope, whichever occurs first.
- Other non-closed cross-domain items remain owned by `ACTIVE-CHANGE-LEDGER.md` and `V1-DESIGN-AUDIT.md`; they are not duplicated here.

# Documentation Execution Gate

**CLOSED / PASS.** The active-documentation reconciliation is landed. The required `# Exact Resume Point` lifecycle marker is restored. Repository Integrity #109 and GitHub Pages #597 passed on `f7fd363d473a6f55d4008303fc951b3ce22c0459`. Normal product planning may proceed without reopening the completed documentation cleanup.

# Exact Resume Point

1. Resume **UD-3 — Local Persistence Technology** in `docs/workstreams/SETTINGS-USER-DATA-ARCHITECTURE.md` under D067/D069.
2. Decide the authoritative local/offline storage model and access abstraction, including whether Firestore persistent browser cache alone is sufficient as FCC's local replica or whether a separately owned local store is required.
3. Preserve UD-1 as the controlling cross-device product goal and UD-2 as the provisional Firebase identity/sync architecture unless later evidence requires refinement.
4. Do not authorize production User Data/My Tackle writes until the Settings / User Data Architecture planning gate closes through the Planning-to-Build documentation gate.
