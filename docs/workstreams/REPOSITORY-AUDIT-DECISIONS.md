# Freshwater Fishing Companion — Repository Audit Decision Log

**Document Revision:** 1.0.0  
**Document Status:** Active Decision Log  
**Parent Audit:** `docs/workstreams/REPOSITORY-AUDIT-CLEANUP.md`  
**Recorded:** 2026-08-18

# Purpose

This file records approved repository-audit decisions as they are made so cleanup conclusions are not lost between sessions.

The parent audit remains the complete findings record. This log records only approved dispositions and completed actions.

# Section 1 — Confirmed Orphan / Unnecessary-File Candidates

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

# Pending Section 1 Item

## 1.4 `docs/docs/` duplicate documentation subtree

**Status:** OPEN / NOT YET DECIDED

Next discussion should determine final disposition after confirming no unique material exists only in the nested duplicate subtree.
