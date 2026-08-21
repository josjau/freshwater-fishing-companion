# Freshwater Fishing Companion — Repository Audit Decision Log

**Document Revision:** 1.0.19  
**Document Status:** Active Decision Log  
**Parent Audit:** `docs/workstreams/REPOSITORY-AUDIT-CLEANUP.md`  
**Recorded:** 2026-08-18  
**Last Updated:** 2026-08-20

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

The older `docs/archive/...` wording was documentation drift. The approved canonical convention is repository-root `archive/`.

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
- `docs/DECISIONS.md` revision `0.4.4` reconciles D033/D034 to repository-root `archive/` and the Git-history/archive distinction; commit `97f2ef8599f28337400dfbaaa1bd7f1df0abed48`.
- `docs/ARCHITECTURE.md` revision `0.4.3` shows `archive/` at repository root and documents the Git-history-versus-archive distinction; commit `6b605a18ef00f11b89b90af109e01eb61d6e7131`.
- `docs/DEVELOPMENT_WORKFLOW.md` revision `1.1.7` incorporates the retirement classification and archive-verification procedure; commit `8c35ba9575c9d994b1383e977a61d2058129de32`.
- `docs/HANDOFF.md` revision `1.5.6` carries the archive rule and current continuation point; commit `d9b6061e092a3d94c2d26ae9a74fb5107ebb4c79`.

The approved archive convention and operating safeguards are now reconciled into their primary governing/current-state documents.

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

Section 2 theme/archive decisions are approved, implemented, and reconciled into the primary governing/current-state documents.

# Section 3 — Production Entrypoint and Asset Reachability

**Decision:** PASS / KEEP CURRENT PRODUCTION ENTRYPOINT / NO SOURCE CLEANUP REQUIRED  
**Status:** APPROVED / COMPLETED / GITHUB-VERIFIED

## Verified production entrypoint

Current `index.html` loads one production stylesheet:

- `forest-journal.css`

Current `index.html` loads the following JavaScript/data sources in order:

1. `data/fish.js`
2. `data/rigs.js`
3. `data/knots.js`
4. `data/knot-guidance.js`
5. `data/reel-guidance.js`
6. `data/tackle.js`
7. `data/media.js`
8. `search.js`
9. `view-renderer.js`
10. `knot-media-renderer.js`
11. `script.js`

All eleven referenced JavaScript/data files exist on current GitHub `main`. The `data/` directory contains exactly the seven data sources loaded by `index.html`; no extra production data file was found there during this check.

## Production versus intentional non-runtime repository content

The following are intentionally outside the browser runtime entrypoint and are not production reachability defects:

- `themes/concepts/` — deferred, unsupported theme candidates,
- `archive/` — historical repository artifacts,
- `docs/` — governing/project documentation,
- `tools/` — repository validation/development utilities,
- `images/rigs/.gitkeep` — intentional reserved directory marker for future verified local Rig imagery.

The root `tools/` directory currently contains the existing Knot package validators and replacement-integrity validator. These are development/validation tools, not browser runtime dependencies.

## Tackle asset reachability

`data/media.js` remains the production media registry and references the local Tackle recognition images under `images/tackle/`. The current `images/tackle/` directory contains the expected 29 WebP recognition assets from the completed Rig/Tackle media library. No extra obvious Tackle-image orphan was identified in this check.

The separate Tackle-to-Media relationship-ownership problem was not an asset-reachability failure; it was resolved and validated in Section 4 under D056.

## Documentation correction completed

`docs/ARCHITECTURE.md` revision `0.4.3` recorded the production source tree and exact `index.html` JavaScript load order, including:

- `data/knots.js`,
- `data/knot-guidance.js`,
- `data/reel-guidance.js`,
- `knot-media-renderer.js`.

It also records the approved repository-root `archive/` convention and the Git-history-versus-archive distinction.

Architecture correction commit:

`6b605a18ef00f11b89b90af109e01eb61d6e7131`

Post-write verification confirmed the corrected source tree/load-order section and preserved document tail.

## Future safeguard

The future repository-wide integrity validator should include:

- `index.html` local stylesheet/script target existence,
- local production-media path existence,
- orphan production asset detection with an explicit allowlist for intentional reserved/deferred content,
- exclusion/awareness of intentional non-runtime directories such as `archive/`, `docs/`, `tools/`, and `themes/concepts/`.

# Section 3 Closeout

Production entrypoint and asset reachability pass. No production source deletion, move, or runtime change is required for this section.

# Section 4 — Tackle ↔ Media Relationship Ownership

**Decision:** MEDIA OWNS ENTITY-TO-MEDIA ATTACHMENT  
**Status:** PASS / VALIDATED / PRODUCTION IMPLEMENTED / CLOSED

## Audit finding — historical pre-implementation state

Production Tackle records previously stored inverse media identifiers through:

```text
Tackle.mediaIds[]
```

while the same association was independently stored on Media through:

```text
Media.ownerType
Media.ownerId
```

This created two canonical-looking copies of the same semantic relationship and could become contradictory if the records diverged.

## Approved ownership

Media is the sole canonical owner of entity-to-media attachment because `ownerType` + `ownerId` describe what canonical entity the Media record belongs to.

For Tackle recognition media, canonical storage is:

```text
Media.ownerType = "tackle"
Media.ownerId = canonical Tackle ID
```

Tackle does not need an inverse `mediaIds[]` array merely to locate Media records that already identify their owner.

Runtime lookup derives matching active Media records from `MEDIA_DATA` using the current Tackle ID.

## Site-wide rule promoted from Section 4

D056 — **Semantic Single-Owner Data and Relationship Ownership** governs the project:

> Every canonical fact or relationship has exactly one authoritative owner, and ownership follows the entity/domain for which the information is intrinsically meaningful rather than whichever location is most convenient for the current UI or implementation.

This means:

- inverse navigation is normally derived,
- search/UI/reporting do not become second canonical owners,
- duplicated storage requires an explicit semantic or architectural justification,
- derived performance caches/indexes may exist later when scale requires them but remain non-authoritative and reproducible,
- ownership must be explainable by domain meaning.

Canonical rule owner: `docs/DECISIONS.md` D056.

## Implemented Section 4 production refactor

Production implementation:

1. Removed `mediaIds[]` from canonical Tackle records in `data/tackle.js`.
2. Updated Tackle media lookup in `view-renderer.js` to derive active Media using `ownerType === "tackle"` and `ownerId === tackle.id`.
3. Preserved `data/media.js` owner metadata as the canonical relationship.
4. Added no inverse Tackle media array.
5. Added no Tackle-Media join registry.
6. Added no speculative Media role/order fields.
7. Verified all 29 active Tackle Media owner IDs resolve one-to-one to canonical Tackle IDs.
8. Preserved contextual Tackle recognition behavior in Microsoft Edge runtime validation.

Production commit:

`614a5b472fb42a8fa23870ea96a00f929a8ed4b6` — `Section 4 production update package`

Validated production blobs:

- `data/tackle.js`: `4b0e19395ea322a9ea04f61ffe906e6e50bb78c8`
- `view-renderer.js`: `42fdfdaa28bad314867bb5dd08ce1f450266f3ca`
- `data/media.js`: `42b3765e44416144ffdd9c245124f6311bf46a6a` unchanged

Controlling closeout:

`docs/workstreams/REPOSITORY-AUDIT-SECTION-4-CLOSEOUT.md` revision 1.0.0.

## Retirement classification

Removed Tackle `mediaIds[]` fields:

**GIT HISTORY ONLY**

No archive copy is required.

# Section 5 — Rig Empty Schema Fields

**Decision:** REMOVE EMPTY SPECULATIVE FIELDS / PRESERVE REAL RELATIONSHIP FIELD  
**Status:** PASS / VALIDATED / PRODUCTION IMPLEMENTED / CLOSED

Approved and implemented cleanup:

- removed `techniqueIds[]` from all 20 canonical Rig records,
- removed `imageIds[]` from all 20 canonical Rig records,
- preserved `variationIds[]`, including valid empty arrays where a Rig has no approved variation,
- did not add the documentation-only `targetFishIds[]` proposal,
- deferred Rig↔Technique relationship ownership to the Technique architecture gate,
- retained future Rig Media ownership under Media `ownerType` + `ownerId`,
- classified removed fields **GIT HISTORY ONLY**.

Production commit:

`449155ffef4eb452aba22e463ee20a21c233a191` — `Section 5 Audit Update`

Validated `data/rigs.js` blob:

`0a30eed8d97626a5f822c8b9eee514766144bce4`

The production diff contained exactly 40 deletions and zero additions: 20 empty `techniqueIds[]` fields and 20 empty `imageIds[]` fields. No runtime consumer depended on either field, so no additional Edge runtime regression was required after exact blob verification.

Controlling records:

- `docs/workstreams/REPOSITORY-AUDIT-SECTION-5-DECISION.md`
- `docs/workstreams/REPOSITORY-AUDIT-SECTION-5-CLOSEOUT.md`

# Section 6 — Governing Documents Comprehensive Synchronization

**Section Status:** PASS / VALIDATED / CLOSED

Section 6 reconciled current governing/current-state documentation after Sections 4 and 5 and the completed Knots/Rig work.

Completed Section 6 outcomes include:

- preserved full-file delivery while distinguishing delivery format from narrow authorized change scope,
- established commit economy without sacrificing reviewability, rollback safety, validation boundaries, or documentation freshness,
- established the permanent Session-End Documentation Gate,
- established the Four-State forward content focus while preserving original validation context,
- preserved the existing 20-Rig library and required a later additive Four-State adequacy audit,
- revised D051 to context-preserving standard Parent navigation while allowing deliberate specialized workflows such as Reel Setup,
- revised D003/D056 so Rig↔Technique ownership remains unresolved until the Technique architecture gate rather than assuming bidirectional arrays,
- reconciled Architecture, Workflow, Style, planning/history, Project, Specification, Media, Section 5 status, and Handoff documentation to actual current state,
- promoted Fish Phase 0 durable architecture decisions into `DECISIONS.md` as D057–D061.

Synchronization commit:

`5eff49dc3fe5bcce1c66f7ea2a99bfd562e1e957` — `Docs - synchronize Repository Audit Section 6`

Post-write verification confirmed that commit changed exactly the 15 approved Markdown files and no production source, data, media, image, CSS, HTML, JavaScript, or configuration file.

Controlling Section 6 records:

- `docs/workstreams/REPOSITORY-AUDIT-SECTION-6-DECISIONS.md`
- `docs/workstreams/REPOSITORY-AUDIT-SECTION-6-SESSION-END-2026-08-19.md`
- `docs/workstreams/REPOSITORY-AUDIT-SECTION-6-CLOSEOUT.md`

No runtime/browser validation was required because Section 6 changed documentation only.

Fish Guide Phase 0 remains paused behind the Repository Audit Cleanup Gate.

# Section 7 — Data-Model Documentation Synchronization

**Decision:** SYNCHRONIZE CURRENT PRODUCTION SCHEMAS, FUTURE/DEFERRED ARCHITECTURE, AND RELATIONSHIP OWNERSHIP  
**Status:** PASS / VALIDATED / CLOSED / CORRECTED 2026-08-19

Section 7 reconciled the complete `docs/data-model/` suite against current GitHub `main`, production schemas, and governing decisions.

Completed outcomes include:

- current Fish production schema separated from the approved Fish Guide Phase 0 target schema,
- current 20-Rig schema documented without `targetFishIds[]`, `techniqueIds[]`, or inverse `imageIds[]`,
- current Knot schema synchronized with completed Knot/Reel guidance and Media ownership,
- current Tackle schema synchronized including `purpose` and without inverse `mediaIds[]`,
- Technique, Conditions, My Tackle, general User Knowledge, possible separate Lure modeling, and Backup explicitly separated from implemented production schemas,
- D056 single-owner relationship semantics applied throughout,
- stale `05-INVENTORY.md` references corrected to `05A-INVENTORY.md`,
- data-model Glossary and README reconciled to implementation status.

### Decision-precedence correction

A later Sections 1–8 reconciliation found that the original Section 7 rewrite over-promoted two Draft/future concepts beyond their governing decision authority:

- a separate canonical Lure domain,
- Backup/Restore architecture.

Corrected status:

- `06-LURES.md` — **Draft / Deferred / Separate Domain Not Yet Approved**; the Lure/Tackle architecture gate must first decide whether a separate canonical Lure entity is required.
- `08-BACKUP.md` — **Draft / Deferred / Architecture Not Yet Approved**; the User Data architecture gate must explicitly approve backup/restore scope and architecture before implementation.

This correction changes approval/status semantics only. It does not change production source or discard the useful design questions preserved in those Draft documents.

Controlling record:

- `docs/workstreams/REPOSITORY-AUDIT-SECTION-7-CLOSEOUT.md`

Section 7 and its correction changed documentation only. No production source/data/media/UI/configuration changed.

# Section 8 — Future Draft Data Models

**Decision:** RETAIN / DEFER / REVALIDATE AT THE RELEVANT ARCHITECTURE GATE  
**Status:** PASS / VALIDATED / CLOSED / CORRECTED 2026-08-19

Future-domain model documents remain useful architectural boundaries/design records and are not repository orphans merely because their production datasets are not implemented.

Approved/current dispositions:

- `03A-TECHNIQUES.md` — retain; Approved / Not Implemented; revalidate at Technique architecture gate.
- `03B-CONDITIONS.md` — retain; Approved / Not Implemented; revalidate before recommendation implementation.
- `06-LURES.md` — retain; **Draft / Deferred / Separate Domain Not Yet Approved**; revalidate at Lure/Tackle architecture gate.
- `05A-INVENTORY.md` — retain; Approved / Not Implemented; revalidate at Settings / User Data architecture gate.
- `07-USER-DATA.md` — retain; current transitional state separated from future authoritative User Knowledge.
- `08-BACKUP.md` — retain; **Draft / Deferred / Architecture Not Yet Approved**; revalidate at User Data architecture gate.

The permanent safeguard exposed by this correction is:

> A Draft/future model document must not be promoted to Approved merely because its concept fits the three-layer architecture or because the document already exists. Approval requires explicit governing decision authority.

Controlling record:

- `docs/workstreams/REPOSITORY-AUDIT-SECTION-8-CLOSEOUT.md`

No production source/data/media/UI/configuration changed.

# Section 9 — Workstream Directory Hygiene

**Decision:** CLASSIFY ACTIVE WORKSTREAMS BY LIFECYCLE / PROMOTE DURABLE RULES / RETIRE HISTORICAL RECORDS FROM ACTIVE PATHS  
**Status:** PASS / GITHUB-VERIFIED / CLOSED

Section 9 classified records by actual lifecycle and governing authority rather than filename age.

Completed outcomes:

- Knot workstreams were classified into durable current records, archive-worthy historical/provenance records, and transient records retained only through Git history.
- `RIG-GUIDE-COMPLETION.md` remains the durable final Rig milestone record; six completed Rig/Tackle implementation and validation records were archived under `archive/workstreams/rig/`.
- Durable site-wide floating-navigation rules were promoted into `docs/NAVIGATION-PAGE-STANDARD.md` revision 1.0.6; five completed UX/navigation records were archived under `archive/workstreams/ux/`.
- Historical Parent-to-top navigation behavior is provenance only. Current governing behavior remains Forward → destination top; Parent → prior standard view state + prior scroll; Home → Dashboard top + clear context.
- `FISH-GUIDE-PHASE-0.md` and `FISH-GUIDE-PHASE-0-AUDIT-REVISIONS.md` remain active because Fish Phase 0 is paused, not completed.
- The Delivery Fallback Rule was promoted into `docs/DEVELOPMENT_WORKFLOW.md` revision 1.1.9; the original workstream was archived byte-for-byte under `archive/workstreams/workflow/` and removed from the active workstream directory.
- Repository Audit control/closeout records remain active until the audit itself closes.
- A mandatory final Repository Integrity and Drift Prevention review/approval gate was added through `REPOSITORY-AUDIT-CLOSEOUT-REQUIREMENTS.md`.

Section 9 also triggered a read-only Sections 1–8 precedence reconciliation. Sections 1–6 passed; Sections 7–8 received narrow status corrections so separate Lure modeling and Backup architecture remain Draft/Deferred unless explicitly approved by their future architecture gates.

Controlling closeout:

- `docs/workstreams/REPOSITORY-AUDIT-SECTION-9-CLOSEOUT.md`

No production source/data/media/UI/configuration changed during Section 9.

# Section 10 — Stale Git Branch

**Decision:** DELETE `agent/rig-guide-closeout` AFTER UNIQUE-MATERIAL REVIEW  
**Status:** PASS / GITHUB-VERIFIED / CLOSED

Pre-deletion branch inventory contained:

- `main`
- `agent/rig-guide-closeout`

Comparison against `main` showed the stale branch was **251 commits behind** and **4 commits ahead** of `main`; there was no open pull request for the branch.

The branch-only material was inspected before deletion. It included:

- `data/rig-closeout-media.js`,
- one `index.html` script-load addition for that staging file,
- six older Tackle recognition-image versions.

No unique material required preservation:

- `data/rig-closeout-media.js` was an obsolete staging implementation that wrote inverse `mediaIds[]` into Tackle records; Section 4/D056 later removed that duplicate ownership and made Media `ownerType` + `ownerId` canonical.
- The six media concepts are integrated directly into current `data/media.js` using later validated `0.4.1` records and replacement assets.
- The branch `index.html` addition existed only to load the obsolete staging file.
- The branch Handoff described the superseded 13-Rig / 23-Tackle Intermediate state.

**Retirement classification:** DELETE. The branch-only implementation was superseded and had no independent audit/provenance/reconstruction value requiring an archive copy.

The user deleted the remote branch through GitHub Desktop on 2026-08-20. Post-deletion GitHub branch inventory returned exactly `main`; the stale branch no longer exists remotely.

Controlling closeout:

- `docs/workstreams/REPOSITORY-AUDIT-SECTION-10-CLOSEOUT.md`

No production source/data/media/UI/configuration on `main` changed during Section 10.

# Section 11 — `.gitignore` / Repository Hygiene Prevention

**Decision:** ADD A NARROW ROOT `.gitignore` BASED ON OBSERVED PROJECT ARTIFACT RISKS  
**Status:** PASS / GITHUB-VERIFIED / CLOSED

Section 11 confirmed that no `.gitignore` existed on current `main` before implementation.

The project had already accumulated two accidental transient artifacts during earlier development:

- `data-reel-guidance.tmp`,
- `styles.bak`.

The repository also contains Python validation utilities under `tools/`, so Python bytecode/cache files are a real local artifact class.

Approved root `.gitignore` patterns:

```gitignore
# Temporary and backup files
*.tmp
*.bak

# Windows-generated metadata
Thumbs.db
Desktop.ini

# Python validator cache / bytecode
__pycache__/
*.py[cod]
```

The policy is intentionally narrow. It does **not** ignore ZIP delivery packages, logs, editor configuration directories, `node_modules/`, `.env`, build/dist/output directories, generic staging/temp directories, or editor-specific swap files without concrete project evidence.

ZIP delivery behavior is unchanged: complete repository-relative replacement packages remain the preferred production delivery method for the user to extract over the local GitHub Desktop repository and review as a coherent diff. The ZIP itself is a delivery container, not an ignored repository class.

Created root `.gitignore` in commit:

`27c5431c808db18fd0a0f8f4bab1b084dccdad9e`

Validated `.gitignore` blob:

`f830eaca2c97a3b708af5fdcf94c8455153601ab`

Controlling closeout:

- `docs/workstreams/REPOSITORY-AUDIT-SECTION-11-CLOSEOUT.md`

No application runtime behavior or production source/data/media changed during Section 11.

# Section 12 — Repository-Wide Integrity Validator

**Decision:** ADD ONE READ-ONLY NODE VALIDATOR FOR CURRENT REPOSITORY INTEGRITY  
**Status:** PASS / GITHUB-VERIFIED / CLOSED

Section 12 implemented:

`tools/validate_repository_integrity.js`

The validator is intentionally read-only. It reports defects and exits nonzero on failure; it does not rewrite, delete, or repair repository content.

Validated mechanical scope includes:

- local `index.html` stylesheet/script target existence and active data-load coverage,
- JavaScript syntax validation for active production/data sources,
- canonical ID uniqueness/format and required Foundation fields,
- Core Rig and Core Knot registry resolution,
- Rig → Tackle, Rig → Knot, Rig variation, Tackle relation, Knot task, and supported Reel Decision Knowledge references,
- approved controlled values for implemented Rig/Knot domains,
- mechanically testable D056 inverse-ownership prohibitions,
- Media owner resolution, local Media-path existence, and tracked image orphan detection with the intentional `images/rigs/.gitkeep` allowlist,
- committed repository-hygiene artifacts and unexpected tracked `docs/docs/` duplication,
- presence of the approved Section 11 `.gitignore` rules.

The validator deliberately does not hardcode current entity counts as a second source of truth and does not attempt to replace human review of fishing correctness, source authority, licensing suitability, visual accuracy, UX/runtime behavior, or external-reference freshness.

During first local execution, the validator correctly exposed an empty local `docs/docs/` directory left behind after Section 1 cleanup. Because Git does not track empty directories, that was a local filesystem condition rather than a repository defect. The validator was corrected before closeout so repository hygiene and orphan-image checks use Git-tracked files rather than arbitrary untracked local filesystem content. On Windows it can locate Git through PATH or the normal GitHub Desktop bundled-Git installation path.

Final local runtime result:

```text
REPOSITORY INTEGRITY: PASS
- 5 validation groups passed
- no repository content was modified
```

Final GitHub-verified validator state:

- implementation commit on current `main`: `0486d466987ab77174866f8837408bd25ae56632`
- blob: `0f905c87744b614d70a2b493988cb78525cd31b2`
- file length: 893 lines
- comparison from the Section 11 baseline `2f636ad235e8a828e12b32d49f60896552502417` to the verified validator commit shows exactly one net changed path: `tools/validate_repository_integrity.js`.

Controlling closeout:

- `docs/workstreams/REPOSITORY-AUDIT-SECTION-12-CLOSEOUT.md`

No application runtime source/data/media/UI behavior changed during Section 12.

# Section 13 — Optional Continuous Integration

**Decision:** IMPLEMENT MINIMAL NON-BLOCKING GITHUB ACTIONS VALIDATION  
**Status:** PASS / GITHUB-VERIFIED / ACTIONS-PASS-CONFIRMED / CLOSED

Section 13 approved and implemented one GitHub Actions workflow:

`.github/workflows/repository-integrity.yml`

The workflow runs the Section 12 validator on:

- pushes to `main`,
- pull requests targeting `main`,
- manual `workflow_dispatch`.

It uses read-only repository permissions, Node.js 24, no application package installation, no secrets, no deployment, no artifacts, no write-back behavior, and a five-minute timeout.

Official GitHub Actions are pinned to exact release commit SHAs:

- `actions/checkout` v7.0.1 — `3d3c42e5aac5ba805825da76410c181273ba90b1`
- `actions/setup-node` v7.0.0 — `820762786026740c76f36085b0efc47a31fe5020`

No branch protection or required status check was added. Direct pushes to `main` remain permitted; CI is an automated repository-health alarm rather than a merge gate.

GitHub verification:

- Section 13 baseline: `c1da68258d0280d16a45eef91d040c42959b7b29`
- workflow creation commit: `1c65708ceadf0803ab2a69f010d95e85e4a67f8b`
- verified `main` after user push/merge: `1e62f873a46c1a1e3c058bcf9e1c718aceb3054a`
- workflow blob: `9616f739527723eaa19c2939ea1b2dec6171bccc`
- comparison from the Section 13 baseline to verified implementation state shows exactly one net changed path: `.github/workflows/repository-integrity.yml`.

The user confirmed in the GitHub Actions UI that the first `Repository Integrity` hosted run completed successfully. Connected tooling verified the workflow file and commit scope but did not expose push-triggered run enumeration without a run ID, so the runtime result is deliberately recorded as user-confirmed rather than connector-retrieved.

The workflow is expected to remain comparatively stable as the site evolves. Future domain integrity rules normally belong in `tools/validate_repository_integrity.js`; the CI workflow changes only when execution policy, runtime, Action dependencies, or validation commands need to change.

Controlling closeout:

- `docs/workstreams/REPOSITORY-AUDIT-SECTION-13-CLOSEOUT.md`

No application runtime source/data/media/UI behavior changed during Section 13.

# Next Audit Action

Proceed to **Section 14 — Documentation Maintenance Safeguards**.

Section 14 must define stronger documentation-governance/process safeguards so current-state documents, workstream lifecycle records, and durable decisions cannot silently drift apart again. It must distinguish mechanically enforceable consistency checks from human review and avoid metadata/process rules that create disproportionate update churn.

Do not resume Fish Guide Phase 0 until the remaining Repository Audit Cleanup sections, final read-only re-audit, mandatory drift-prevention review/approval, and final documentation closeout are complete.
