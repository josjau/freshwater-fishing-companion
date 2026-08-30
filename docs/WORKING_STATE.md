# Freshwater Fishing Companion — Working State

**Document:** WORKING_STATE.md  
**Document Revision:** 1.18.0  
**Document Status:** Approved — Active Repository Continuity Record  
**Workstream Status:** Settings / User Data Architecture — ACTIVE / PLANNING  
**Last Updated:** 2026-08-30

# Purpose

This file is the single compact repository current-state and exact-resume entrypoint. It records only the state required to resume safely. Durable decision reasoning belongs in `DECISIONS.md` / `decisions/`; detailed domain contracts belong in `data-model/`; active workstream detail belongs in the active workstream file; landed history belongs in `CHANGELOG.md` and Git history; non-closed cross-workstream carry-forward belongs in `ACTIVE-CHANGE-LEDGER.md`.

# Authority / Current Baseline

- GitHub `main` is authoritative at `584f97caa4874075f745834145813ac9bdcf78b3` (`Close Recommendation Prerequisites Foundation`), parent `cdf8f408011c5137d0351cec9f350d0a6eee66c2`.
- The final Recommendation Prerequisites Foundation source/runtime commit is `cdf8f408011c5137d0351cec9f350d0a6eee66c2` (`Techniques to Rig - Final`).
- Repository Integrity #106 and GitHub Pages #594 passed on the documentation-closeout SHA.
- Google Drive `Working Source/Current` remains the complete editable working tree for approved uncommitted changes.
- The current Drive cycle is documentation-only reconciliation; no product source/data/media/configuration change is authorized by this cleanup.

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

The documentation consistency cleanup that opened this cycle must converge the active canonical owners and compact the Live Working State before normal product planning resumes. A stale or contradictory current-state owner blocks progression. Repository Integrity remains a pre-commit requirement for this structural/documentation reconciliation.

# Exact Resume

1. Complete and read back the bounded documentation reconciliation in Drive Current, including the compact Live Working State.
2. Run the required documentation/repository consistency validation and reconcile any validator findings before commit.
3. Once the documentation gate is PASS, resume **UD-2 — Identity + Sync Model**: settle authentication/account-linking and synchronization-service boundaries before selecting the authoritative local persistence technology.
