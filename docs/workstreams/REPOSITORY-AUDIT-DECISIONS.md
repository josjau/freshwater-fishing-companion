# Freshwater Fishing Companion — Repository Audit Decision Log

**Document Revision:** 1.0.1  
**Document Status:** Active Decision Log  
**Parent Audit:** `docs/workstreams/REPOSITORY-AUDIT-CLEANUP.md`  
**Recorded:** 2026-08-18

# Purpose

This file records approved repository-audit decisions as they are made so cleanup conclusions are not lost between sessions.

The parent audit remains the complete findings record. This log records only approved dispositions and completed actions.

# Section 1 — Confirmed Orphan / Unnecessary-File Candidates

**Section Status:** COMPLETED / GITHUB-VERIFIED

## 1.1 `data-reel-guidance.tmp`

**Decision:** DELETE  
**Status:** COMPLETED / GITHUB-VERIFIED  
**Reason:** Obsolete temporary Reel Setup guidance snapshot. Current `data/reel-guidance.js` contains the completed later workflow. No repository references existed. Git history preserves the historical snapshot.

Deleted from `main` in commit:

`c1af23d1cce11e387ccfbd14e76781fb69358a16`

Post-delete verification: direct GitHub fetch returns Not Found.

## 1.2 `styles.bak`

**Decision:** DELETE  
**Status:** COMPLETED / GITHUB-VERIFIED  
**User context:** This was an early theme-testing backup and was superseded.  
**Reason:** No current production or deliberate historical role. Git history preserves it without leaving a misleading `.bak` artifact at repository root.

Deleted from `main` in commit:

`29a3381d84b315b22b7719409950c758bb543884`

Post-delete verification: direct GitHub fetch returns Not Found.

## 1.3 `images/rigs/dummy.js`

**Decision:** REPLACE PLACEHOLDER / PRESERVE DIRECTORY  
**Status:** COMPLETED / GITHUB-VERIFIED  
**User context:** `dummy.js` existed only because GitHub does not retain empty directories. `images/rigs/` was intentionally reserved for completed local Rig imagery. Rig-image generation proved mechanically unreliable, so Version 1 fell back to authoritative local text plus verified external tutorials/references.

Approved replacement:

```text
images/rigs/dummy.js
→
images/rigs/.gitkeep
```

`.gitkeep` contains an explicit note that the directory is intentionally retained for future locally bundled, technically verified Rig imagery.

Created `.gitkeep` in commit:

`94abab049448512fdcf1e843c1c423118ae641f1`

Deleted `dummy.js` in commit:

`bf6391a0a8314c4bf825f3c2200e1d7890490657`

Post-change verification:

- `images/rigs/.gitkeep` exists on `main`.
- `images/rigs/dummy.js` returns Not Found.

### Parked Improvement — Local Rig Visual Library

**Classification:** PARKING LOT / FUTURE QUALITY + OFFLINE-CAPABILITY IMPROVEMENT

Goal:

> Every canonical Rig should eventually have a technically verified locally bundled visual sufficient to understand the completed setup without requiring YouTube or an external website.

Current durable direction:

- authoritative local text remains mandatory,
- local technically verified Rig media is preferred when accuracy and rights permit,
- YouTube/external references remain supplemental rather than the ideal sole visual dependency,
- generated finished-Rig/build-step imagery remains prohibited under D045 because prior tests produced mechanically incorrect geometry,
- manually constructed project diagrams based on verified references remain permitted when validated component-by-component,
- `images/rigs/` is the reserved local asset directory for this future improvement unless later architecture deliberately changes the media path.

This parking-lot item does not reopen the completed 20-Rig canonical library. It is a future media/offline-capability enhancement.

## 1.4 `docs/docs/` duplicate documentation subtree

**Decision:** DELETE ENTIRE DUPLICATE SUBTREE  
**Status:** COMPLETED / GITHUB-VERIFIED  
**Reason:** The nested tree contained only older predecessors of canonical governing/data-model documents. Canonical replacements exist under `docs/` and `docs/data-model/`; Git history preserves the superseded snapshots. Keeping duplicate authoritative-looking files created a high risk of future sessions reasoning from stale architecture.

Deleted files:

- `docs/docs/ARCHITECTURE.md` — commit `a181fe7c6d4b753d7a6e55edbe064fa0ef992f53`
- `docs/docs/DECISIONS.md` — commit `a7da8e50197ef297572afc47e7653b2148edc95a`
- `docs/docs/data-model/01-FOUNDATION.md` — commit `1111cb27155af49a08033935be5322ebc7b74452`
- `docs/docs/data-model/03-RIGS.md` — commit `845154c6d006719cf3786d53c398689375c248d8`
- `docs/docs/data-model/05-INVENTORY.md` — commit `69117133b312de5bff4016d86c5e61ef2be5fb00`
- `docs/docs/data-model/07-USER-DATA.md` — commit `04d64189407683c82fc41f7fd075b3a35b377f89`
- `docs/docs/data-model/09-RELATIONSHIPS.md` — commit `e29b424dcad197dd56a2ec7aec0029a01bc77b6a`

Post-delete verification: `docs/docs/` returns Not Found from GitHub `main`.

# Section 1 Closeout

All four Section 1 findings now have approved dispositions and verified repository actions.

No canonical production source or canonical governing/data-model document was removed during Section 1 cleanup.

Next audit discussion: **Section 2 — Historical Themes and Archive Structure**.
