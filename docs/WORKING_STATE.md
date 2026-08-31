# Freshwater Fishing Companion — Working State

**Document:** WORKING_STATE.md  
**Document Revision:** 1.18.2  
**Document Status:** Approved — Active Repository Continuity Record  
**Workstream Status:** Settings / User Data Architecture — ACTIVE / PLANNING  
**Last Updated:** 2026-08-30

# Purpose

This file is the single compact repository current-state and exact-resume entrypoint. It records only the state required to resume safely. Durable decision reasoning belongs in `DECISIONS.md` / `decisions/`; detailed domain contracts belong in `data-model/`; active workstream detail belongs in the active workstream file; landed history belongs in `CHANGELOG.md` and Git history; non-closed cross-workstream carry-forward belongs in `ACTIVE-CHANGE-LEDGER.md`.

# Authority / Current Baseline

- GitHub `main` is committed authority. The documentation consistency cleanup landed at `8621feb0cea929a0ce8e7de539545f6b55265ee0` (`Documentation Cleanup - Lure/Bait`), and the bounded Working State lifecycle-marker repair landed at `c5307d8942e93028f70a3860ec8623fccde917e4` (`Fix Working State resume marker`).
- Local Repository Integrity on `c5307d8942e93028f70a3860ec8623fccde917e4`: PASS — 12 validation groups, no repository content modified.
- GitHub Repository Integrity #108: PASS.
- GitHub Pages #596: PASS.
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

No production User Data/My Tackle implementation is authorized until this architecture planning phase is closed through the Planning-to-Build documentation gate.

# Active Gates / Carry-Forward

- GATE-006 — Settings / User Data Architecture: ACTIVE / REQUIRED.
- GATE-007 — My Tackle Availability Foundation: BLOCKED behind GATE-006.
- GATE-004 — What Should I Throw production: BLOCKED behind GATE-006 and GATE-007.
- GATE-012 — Repository Disaster Recovery / Reconstruction remains required before major Version 1 release or before irreplaceable User Knowledge enters scope, whichever occurs first.
- Other non-closed cross-domain items remain owned by `ACTIVE-CHANGE-LEDGER.md` and `V1-DESIGN-AUDIT.md`; they are not duplicated here.

# Documentation Execution Gate

**CLOSED / PASS.** The active-documentation reconciliation is landed. The required `# Exact Resume Point` lifecycle marker is restored. Local Repository Integrity passed all 12 validation groups without modifying repository content; GitHub Repository Integrity #108 and GitHub Pages #596 passed on the repair commit. Normal product planning may resume without reopening the completed documentation cleanup.

# Exact Resume Point

1. Resume **UD-2 — Identity + Sync Model** in `docs/workstreams/SETTINGS-USER-DATA-ARCHITECTURE.md` under D067/D069.
2. Settle authentication/account-linking and synchronization-service boundaries before selecting authoritative local persistence technology.
3. Preserve UD-1 as the controlling cross-device product goal; refine it only if later security, privacy, conflict, persistence, or implementation findings require a better boundary without silently changing that goal.
4. Do not authorize production User Data/My Tackle writes until the Settings / User Data Architecture planning gate closes through the Planning-to-Build documentation gate.
