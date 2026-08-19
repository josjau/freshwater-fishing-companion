# Freshwater Fishing Companion — Repository Audit Decision Log

**Document Revision:** 1.0.5  
**Document Status:** Active Decision Log  
**Parent Audit:** `docs/workstreams/REPOSITORY-AUDIT-CLEANUP.md`  
**Recorded:** 2026-08-18  
**Last Updated:** 2026-08-19

# Purpose

This file records approved repository-audit decisions as they are made so cleanup conclusions are not lost between sessions.

The parent audit remains the complete **audit-time findings snapshot**. Its original `OPEN` labels describe the state when the read-only audit was recorded and are not the current disposition once an item has been reviewed. This decision log is the authoritative source for **current cleanup dispositions, approved rationale, implementation status, and completed repository actions**.

A future session reviewing cleanup state must read the parent audit together with this decision log. Where an audit-time proposal conflicts with a later approved disposition recorded here, the later approved disposition in this log governs.

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

# Section 2 — Historical Themes and Archive Structure

## 2.1 Deferred Theme Concepts

**Decision:** RETAIN AS DEFERRED THEME CANDIDATES / MOVE TO A CLEAR THEME-CONCEPT STRUCTURE  
**Status:** COMPLETED / GITHUB-VERIFIED  
**Current production theme:** `forest-journal.css` only

Files covered by this decision:

- `themes/concepts/forest-copper.css`
- `themes/concepts/forest-gold.css`
- `themes/concepts/legacy-dark-theme.css`

### Preserved user/project context

These three files were intentionally retained after early theme testing. They are not equivalent to the deleted `styles.bak` backup and are not abandoned historical debris.

The project deliberately decided **not** to implement or maintain multiple production themes while the site is still under active functional development. The reason is maintenance and regression risk: every new component, navigation pattern, detail page, media treatment, accessibility rule, or responsive change would otherwise have to be synchronized across multiple theme implementations before the product structure is stable.

A broader theme tree/shared CSS restructuring was discussed earlier but deliberately deferred because changing the CSS architecture at that stage would have introduced unnecessary structural churn while feature implementation was still moving quickly.

### Current approved behavior

- Forest Journal remains the sole production-supported theme.
- `forest-journal.css` remains the active stylesheet and the visual/reference baseline.
- Forest Copper, Forest Gold, and Legacy Dark remain deferred candidates only.
- Deferred candidates are not required to track current Forest Journal component parity and are not part of the production validation matrix.
- No user-facing theme selector or multi-theme runtime behavior is implemented now.
- Theme selection, user preference ownership, persistence, backup behavior, and final supported-theme architecture belong to the future **Settings / User Preferences architecture gate**.

### Approved future architecture direction

When theme implementation is deliberately reopened:

- shared base/layout/component behavior should be centralized once where practical,
- individual production theme files should primarily own theme-specific design tokens and intentional overrides rather than duplicate full application structure,
- Forest Journal remains the reference implementation from which future visual parity requirements are derived,
- the exact final CSS tree may be modified deliberately at that later architecture gate rather than treated as frozen now,
- the canonical reference-media surface `#f4f0e8` / RGB `244, 240, 232` remains a cross-theme invariant.

### Implemented repository organization

The approved deferred-theme structure is now:

```text
forest-journal.css

themes/
    README.md
    concepts/
        forest-copper.css
        forest-gold.css
        legacy-dark-theme.css
```

`forest-journal.css` remains at repository root and remains the only stylesheet loaded by current `index.html`.

The three concept files were copied first and GitHub-verified by matching their original blob SHAs before the root copies were deleted. The move therefore preserved their contents byte-for-byte.

Theme-structure commits:

- `themes/README.md` created — `27bfa3068da09554e51a1c5740b111682353d8ea`
- Forest Copper concept copied — `aba6d778802da695bb8a391d9086c14d185562d7`
- Forest Gold concept copied — `113fcc1f256d21feb55078d498fa755e92e79e1b`
- Legacy Dark concept copied — `9648ceb210b72e013cb3517ce5e29c5fb9bd4352`
- root Forest Copper removed — `52f971b03259bdc29a82cdea68f28c9bcca1422c`
- root Forest Gold removed — `0a97340dc8b4b8cb9608329024e426b12aa77bf6`
- root Legacy Dark removed — `c8015d4790c2565d4e15266e5ff3e7f0272a1cf5`

Post-change verification:

- `themes/README.md` exists.
- `themes/concepts/` contains exactly the three deferred CSS candidates.
- each moved CSS file retains the same blob SHA as its former root copy,
- the former root `forest-copper.css` path returns Not Found; the other two root removals were committed in the same approved move sequence,
- `index.html` still loads only `forest-journal.css`; no production theme behavior changed.

This structure is organizational, not the final multi-theme runtime architecture. It may be revised later when the Settings / User Preferences architecture gate deliberately reopens theme implementation.

### Governing-document reconciliation

The durable theme interpretation and rationale are governed by:

- `docs/ARCHITECTURE.md`,
- `docs/STYLE_GUIDE.md`,
- `docs/DECISIONS.md` D035,
- `docs/DEVELOPMENT_WORKFLOW.md`,
- `docs/HANDOFF.md`.

`themes/README.md` is the local directory-level explanation of the deferred-theme structure.

## 2.2 Archive Path Convention and Retirement Policy

**Decision:** KEEP REPOSITORY-ROOT `archive/` AS THE SINGLE CANONICAL ARCHIVE ROOT  
**Status:** APPROVED / IMPLEMENTED / GITHUB-VERIFIED  
**Canonical archive root:** `archive/`

### Current repository structure

The existing archive remains in place:

```text
archive/
    README.md
    packages/
        2026-08-07-audit-logs/
        2026-08-07-rig-tackle/
```

Existing package contents are preserved in place. No existing archive package was moved solely for aesthetics.

`archive/README.md` was created in commit:

`937a46ebce76b7404f841f16aa0598f1e80a5c2c`

Post-write verification confirms `archive/README.md` exists and defines the canonical archive purpose, retirement classification, and archive-verification requirements.

### Why root `archive/` owns historical artifacts

The repository archive contains mixed historical material, including package manifests, validation reports, audit logs, and historical design/reference media. It is therefore repository-wide history rather than a subdomain of `docs/`.

The older `docs/archive/...` wording is documentation drift. The approved canonical convention is repository-root `archive/`.

Additional archive subdirectories are created only when a real retained artifact class requires them. Do not create speculative archive categories in advance.

### Archive versus Git history

Normal prior revisions of current files are preserved by Git history and are **not** copied into `archive/` merely because the implementation workflow used a whole-file replacement.

This rule applies equally to JavaScript, CSS, HTML, application data, Markdown, and other tracked source files.

Creating an archive copy for every replaced file would duplicate Git history and recreate stale authoritative-looking copies—the same failure mode this repository audit is removing.

A prior file version belongs in `archive/` only when it has continuing value as an artifact in its own right, such as:

- a package manifest or package-specific validation report,
- an audit log retained for provenance,
- a superseded handoff/workstream record that would mislead if left in an active/current directory,
- a historical design/reference board or preview with reconstruction/design-lineage value,
- another deliberately retained artifact that needs direct repository discoverability independent of ordinary Git history.

### Required retirement classification

Whenever implementation, migration, cleanup, or closeout retires an existing repository artifact, explicitly classify it as one of:

1. **GIT HISTORY ONLY** — normal prior revision; no archive copy is created.
2. **ARCHIVE** — independent historical/audit/provenance/reconstruction value; retain under `archive/`.
3. **DELETE** — no continuing repository value beyond Git history.

Retired artifacts must not remain in active/current locations simply because no disposition was chosen.

### Required archive completion check

When an artifact is classified **ARCHIVE**, closeout is incomplete until:

1. the archive location is chosen,
2. the archived copy/path is created before the active copy is removed when loss risk exists,
3. the archive path is verified on authoritative GitHub `main`,
4. the former active/current path is removed or clearly no longer masquerades as current,
5. the archival action and reason are recorded in the relevant workstream/decision/closeout documentation.

### Canonical ownership

- `archive/README.md` owns the directory-level archive operating policy.
- `docs/DECISIONS.md` D033/D034 must be reconciled to the root `archive/` convention during governing-document synchronization.
- `docs/ARCHITECTURE.md` must show `archive/` at repository root rather than under `docs/` during governing-document synchronization.
- `docs/DEVELOPMENT_WORKFLOW.md` must incorporate the retirement-classification/archive-verification rule during workflow synchronization.

The audit decision is effective immediately even where those broader governing documents still contain pre-audit wording; this decision log is the current cleanup authority.

# Audit Safeguard — Architectural Decision Context Preservation

**Decision:** APPROVED / PROMOTED TO PERMANENT GOVERNING STANDARD

The theme audit exposed a documentation failure mode: a decision may technically exist across several documents while still being easy to misinterpret if its rationale, lifecycle status, or future trigger is omitted.

For material architectural/product/workflow decisions, durable documentation must preserve at least:

1. **Decision** — what was approved.
2. **Reason** — why the project chose it, including the material tradeoff being avoided or accepted.
3. **Current implementation status** — Current, Approved / Not Implemented, Deferred, Superseded, etc.
4. **Deferred/future trigger** — what milestone, architecture gate, condition, or evidence should cause the decision to be revisited.
5. **Canonical owner/document** — where the durable source of truth for that decision lives after reconciliation.

When an implementation structure is deliberately **not** changed, document that non-action when it is architecturally meaningful. Future sessions must not infer that an absent structure means the design was forgotten or rejected when it was actually deferred.

This safeguard is now permanent through:

- `docs/DECISIONS.md` D055 — Durable Decision Context Preservation,
- `docs/DEVELOPMENT_WORKFLOW.md` — Durable Decision Context,
- supporting references in `docs/STYLE_GUIDE.md` and `docs/HANDOFF.md`.

# Section 2 Closeout

Section 2 theme/archive decisions are now approved and implemented at the repository-organization/policy level.

Remaining stale references in broader governing documents are explicitly tracked for the governing-document synchronization phase; they do not change the current approved cleanup dispositions recorded here.

# Next Audit Discussion

Proceed to **Section 3 — Production Entrypoint and Asset Reachability** unless the user explicitly selects another cleanup item.
