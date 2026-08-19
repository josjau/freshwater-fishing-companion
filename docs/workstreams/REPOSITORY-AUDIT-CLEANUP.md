# Freshwater Fishing Companion — Repository Audit and Cleanup Gate

**Document Revision:** 1.0.0  
**Document Status:** Approved Audit Record / Decisions Pending  
**Implementation Status:** READ-ONLY AUDIT COMPLETE / CLEANUP NOT STARTED  
**Recorded:** 2026-08-18  
**Audit Baseline:** GitHub `main` at `35147a376b126890a844c9bb8541cd36ff408fca`  
**Scope:** Repository hygiene, source/data ownership, documentation synchronization, archival structure, maintenance safeguards

# Purpose

This document preserves the complete 2026-08-18 repository audit so the project can stop, clean up, and harden repository maintenance before resuming the Fish Guide Phase 0 architecture audit.

No production source, data, media, CSS, HTML, JavaScript, configuration, branch, or existing non-audit documentation was changed as part of the audit itself.

The cleanup gate is deliberate:

> **Do not resume Fish Guide Phase 0 until repository cleanup, documentation synchronization, ownership review, and safeguard decisions are completed or explicitly parked.**

The findings below are audit results, not automatic implementation decisions. Every proposed cleanup action remains `OPEN` until reviewed unless the finding merely documents a condition already established by an approved project rule.

# Audit Goals

The audit evaluated whether:

1. GitHub `main` contains unnecessary or orphaned files.
2. Production entrypoints reference valid current files.
3. Active production asset directories contain only production/reusable assets.
4. Current canonical data and media ownership avoids duplicated sources of truth.
5. Governing/current-state documentation matches actual production and approved architecture.
6. Historical work is clearly distinguished from active/current sources.
7. Repository maintenance rules are strict enough to prevent recurrence.

# Overall Assessment

The current validated Rig/Knot production core does not appear to have been lost or structurally broken. Current `index.html` references the expected production CSS/data/search/rendering/application files and those referenced files exist on `main`.

The repository is nevertheless **not fully synchronized**.

Material debt exists in four categories:

- repository hygiene and orphaned artifacts,
- governing/current-state documentation drift,
- canonical data/relationship ownership questions,
- insufficient preventative repository-maintenance safeguards.

The highest-risk issue is documentation drift: multiple authoritative-looking documents still describe superseded application state or superseded architectural rules.

# Finding Classification

Each audit item should ultimately receive one disposition:

- **KEEP** — current and correctly located.
- **UPDATE** — required file, but content/status must be reconciled.
- **MOVE / ARCHIVE** — useful historical artifact that should not remain in an active production/current location.
- **DELETE** — unnecessary/orphaned/superseded artifact with no continuing repository value beyond Git history.
- **REFACTOR** — current implementation or data ownership requires deliberate architectural correction.
- **DEFER** — valid future document/model intentionally not current; retain without treating it as active implementation.

No disposition below is final until reviewed unless explicitly marked as an already-approved governing rule.

# Section 1 — Confirmed Orphan / Unnecessary-File Candidates

## 1.1 `data-reel-guidance.tmp`

**Status:** OPEN  
**Classification:** Strong orphan candidate  
**Observed:** Root-level temporary file containing an earlier partial Reel Setup guidance implementation. Its internal build marker is Block 3.3, while current `data/reel-guidance.js` progressed through Block 3.9 and owns the completed workflow.

Repository searches found no references to `data-reel-guidance.tmp`.

**Risk:** A stale application-data-looking file at repository root can be mistaken for current source and violates completed-package/root hygiene principles.

**Proposed disposition:** DELETE.

## 1.2 `styles.bak`

**Status:** OPEN  
**Classification:** Strong orphan/historical candidate  
**Observed:** Root-level backup stylesheet labeled `CONCEPT 3 — OUTDOOR HERITAGE`; not loaded by production and no repository references were found.

**Risk:** `.bak` at repository root appears current enough to be reused accidentally and is a symptom of insufficient ignore/hygiene controls.

**Proposed disposition:** DELETE if Git history is sufficient; otherwise MOVE to a clearly historical theme/archive location.

## 1.3 `images/rigs/dummy.js`

**Status:** OPEN  
**Classification:** Confirmed placeholder/orphan  
**Observed:** File contains only a newline. No production/reference use found.

**Risk:** Non-image placeholder inside a production image directory violates production asset directory discipline.

**Proposed disposition:** DELETE.

## 1.4 `docs/docs/` duplicate documentation subtree

**Status:** OPEN  
**Classification:** High-priority duplicate/orphan tree  
**Observed:** Nested `docs/docs/` contains older copies of governing/data-model documents. Example: nested `docs/docs/DECISIONS.md` remains revision 0.2.0 from 2026-08-07 while canonical `docs/DECISIONS.md` is much newer.

Repository searches found no legitimate references to the nested subtree.

**Risk:** Very high. Duplicate authoritative-looking Markdown can be accidentally treated as governing documentation and can cause future sessions to reason from stale architecture.

**Proposed disposition:** DELETE the entire `docs/docs/` duplicate subtree after one final unique-content comparison confirms it contains no material not preserved elsewhere.

# Section 2 — Historical Themes and Archive Structure

## 2.1 Historical theme files at repository root

Files:

- `forest-copper.css`
- `forest-gold.css`
- `legacy-dark-theme.css`

**Status:** OPEN  
**Classification:** Intentional historical design assets, not production  
**Observed:** `index.html` uses only `forest-journal.css`. D035 and `STYLE_GUIDE.md` explicitly identify the other three stylesheets as historical/inactive theme concepts.

**Issue:** Their retention is approved, but their root-level placement conflicts with D034's principle that historical design references should not masquerade as production assets.

**Proposed disposition:** KEEP historical value but MOVE to a clearly labeled archive/theme location, unless the project deliberately chooses root retention as the canonical exception.

## 2.2 Archive path convention mismatch

**Status:** OPEN  
**Observed:** Actual repository uses root-level `archive/packages/...`. D033/Architecture examples reference `docs/archive/packages/...`.

**Risk:** Multiple archive conventions cause future historical artifacts to scatter across locations.

**Proposed decision:** Choose one canonical archive root and reconcile all governing documentation.

**Technical-lead preference for discussion:** use repository-root `archive/` for non-production historical artifacts, with explicit subdivisions such as:

```text
archive/packages/
archive/themes/
archive/session-records/
```

Do not move historical material solely for aesthetics until this convention is approved.

# Section 3 — Production Entrypoint and Asset Reachability

## 3.1 Production entrypoint coherence

**Status:** PASS / KEEP  
**Observed:** Current `index.html` references the expected active Forest Journal CSS, current data sources, search utilities, rendering sources, Knot media renderer, and application coordinator.

No missing referenced production source was identified during the audit.

## 3.2 Tackle media directory

**Status:** No obvious orphan production WebP found  
**Observed:** `images/tackle/` contains the current recognition assets corresponding to the finalized Tackle/media build. `data/media.js` owns the active recognition-media metadata and Knot instructional-media entries.

**Action:** No bulk cleanup. Revalidate through the future repository-wide integrity validator.

## 3.3 Rig image directory

**Status:** Cleanup needed only for `dummy.js` based on this audit  
**Action:** No other asset deletion should occur without reference/provenance review.

# Section 4 — Tackle ↔ Media Relationship Ownership Duplication

**Status:** OPEN ARCHITECTURE DECISION  
**Classification:** REFACTOR candidate

Current production stores the Tackle/media association in two places:

```text
Tackle.mediaIds[]
```

and:

```text
Media.ownerType = "tackle"
Media.ownerId = canonical Tackle ID
```

The current renderer first reads `referenceRecord.mediaIds[]`, then finds a matching `MEDIA_DATA` record and also verifies `ownerType === "tackle"`.

This means two structures must remain synchronized manually.

**Why this matters:** It conflicts with the project's single-owner / derive-the-inverse architecture unless there is a separate semantic reason for both relationships.

Knot media already demonstrates the cleaner model: Knot does not store inverse image/animation IDs when Media owns `ownerType`/`ownerId`.

**Proposed direction for discussion:** Media becomes the single owner of the ordinary entity-to-media association:

```text
Media.ownerType
Media.ownerId
```

Tackle media is then derived by owner lookup rather than duplicated `mediaIds[]`.

**Do not implement before explicit approval.** Any refactor would require renderer, Tackle data, data-model, relationship documentation, and validation updates.

# Section 5 — Empty / Possibly Obsolete Rig Schema Fields

**Status:** OPEN ARCHITECTURE DECISION

All current Rigs still carry empty:

```text
techniqueIds: []
imageIds: []
```

## 5.1 `imageIds[]`

Current Rig media policy uses authoritative text plus verified tutorial/external-reference paths; generated/local Rig image architecture was superseded. Current production `imageIds[]` are empty.

**Question:** Does this field support any current approved feature?

**Preliminary recommendation:** remove it unless a demonstrated active Rig-media relationship requires the field. If Media becomes the canonical owner of reusable entity media, Rig should not retain a parallel inverse solely for future possibility.

## 5.2 `techniqueIds[]`

Technique is an approved future canonical domain, but all current Rig arrays are empty and Technique is not implemented.

**Question:** Does retaining an empty placeholder field violate the rule that fields must support an approved implemented/near-term feature rather than exist “just in case”?

**Preliminary recommendation:** discuss removing it until the Technique relationship is implemented, unless keeping the field now provides a documented migration/compatibility benefit.

## 5.3 `targetFishIds` documentation drift

`docs/data-model/03-RIGS.md` documents `targetFishIds`, but current production Rigs do not store it. Fish Phase 0 is moving Fish-to-Rig recommendation ownership into separate Decision Knowledge (`FISH_RIG_GUIDANCE`).

**Preliminary recommendation:** remove Rig-owned target-Fish recommendation ownership from the Rig schema documentation unless a different intrinsic Rig-to-Fish fact is deliberately defined.

# Section 6 — Governing Documentation Synchronization

The following are required/current documents but contain material drift.

## 6.1 `docs/ARCHITECTURE.md`

**Status:** UPDATE REQUIRED — HIGH PRIORITY

Observed stale/current-state conflicts include:

- source structure omits current Knot/Reel sources such as `data/knots.js`, `data/knot-guidance.js`, `data/reel-guidance.js`, and `knot-media-renderer.js`,
- describes earlier Rig/Tackle counts rather than finalized 20 Rigs / 29 Tackle,
- contains superseded Rig expansion status,
- describes Media too narrowly relative to cross-entity Knot media,
- retains old Parent-navigation-to-top architecture.

**Action:** comprehensive current-state reconciliation after repository ownership decisions are made.

## 6.2 `docs/DECISIONS.md`

**Status:** UPDATE REQUIRED — HIGH PRIORITY

Key drift:

- D051 still encodes explicit Parent-to-top behavior, superseded by approved Revision 1.
- D027 still contains narrower regional scope language pending Four-State reconciliation.
- D033 archive example does not match actual archive location.
- D014 complete-file replacement wording conflicts with current targeted-edit preference.
- Fish Audit Revisions 1–5 are not yet fully reconciled into durable decisions/governing docs where appropriate.

**Rule:** preserve decision history. Supersede/clarify decisions rather than erasing historical decisions without trace.

## 6.3 `docs/STYLE_GUIDE.md`

**Status:** UPDATE REQUIRED — HIGH PRIORITY

Conflicts include:

- explicitly says Parent navigation should not restore remembered scroll,
- still says every explicit transition opens destination at top,
- still states complete-file replacement as default source-edit method.

These conflict with newer approved navigation and current project editing workflow.

## 6.4 `docs/DEVELOPMENT_WORKFLOW.md`

**Status:** MOSTLY HEALTHY / TARGETED UPDATE REQUIRED

Strengths already present:

- GitHub `main` authority,
- continuous documentation requirement,
- production write approval gate,
- replacement-integrity checks,
- mandatory post-write remote validation.

Main drift:

- still states complete-file replacement is the default implementation workflow.

Current project practice is targeted edits by default, followed by a complete final validation copy after all planned changes to a source file are complete.

**Action:** reconcile after the editing-policy safeguard discussion.

## 6.5 `docs/CHANGELOG.md`

**Status:** UPDATE REQUIRED — HIGH PRIORITY

Top/current section still describes Knot Packages 1/2 as active and says Packages 3/4 were not started, despite Packages 3/4 and the Knots milestone being validated/closed.

This directly violates the continuous-documentation policy.

**Action:** reconcile the Unreleased/current section to actual `main` without rewriting historical release entries.

## 6.6 `docs/MILESTONES.md`

**Status:** TARGETED UPDATE REQUIRED

Historical milestone records are useful and should remain.

Drift:

- current/resume language is behind Fish Phase 0 progress,
- references ROADMAP revision 0.3.3 while actual current Roadmap is 0.3.4.

**Action:** update current-state metadata/continuation wording only; preserve historical milestone facts.

## 6.7 `docs/ROADMAP.md`

**Status:** TARGETED UPDATE REQUIRED

Sequence remains correct, but current-state wording still treats Fish as a future/next milestone rather than an active Phase 0 effort with substantial approved architecture.

**Action:** update current-state section after cleanup decisions; do not alter milestone ordering unless explicitly approved.

## 6.8 `docs/HANDOFF.md`

**Status:** CURRENT CONTENT GENERALLY HEALTHY, but this cleanup gate now supersedes its Fish resume point.

Known minor drift before this audit:

- ROADMAP revision metadata says 0.3.3 while actual Roadmap is 0.3.4.

**Required immediate role:** direct next session to this repository cleanup audit rather than Fish Phase 0.

## 6.9 `docs/PROJECT.md` and `docs/SPECIFICATION.md`

**Status:** UPDATE PENDING SCOPE DECISION

Both retain initial Northeast Oklahoma + Southwest Kansas language. Fish Phase 0 currently uses the Four-State Ozark scope:

- Northeast Oklahoma,
- Southeast Kansas,
- Southwest Missouri,
- Northwest Arkansas.

This is already an explicitly open architecture item. Do not silently rewrite project-wide scope until that decision is made and existing Rig/library implications are reviewed.

Additional `SPECIFICATION.md` drift:

- search language predates implemented deterministic search,
- Knot scope predates completed Reel Setup/media/connected knowledge,
- Favorites is stated more definitively than the current Roadmap's “final decision later” position.

## 6.10 `docs/MEDIA_GUIDE.md`

**Status:** TARGETED UPDATE REQUIRED

Rig/Tackle media guidance is largely current.

Knot Media section is stale: it still describes Knot instructional media as future/open, while Package 4 completed and validated external media coverage for all 10 Knots and extended `MEDIA_DATA` accordingly.

**Action:** reconcile Knot Media current state and ownership without weakening canonical text authority or licensing restrictions.

# Section 7 — Data-Model Documentation Synchronization

## 7.1 `docs/data-model/02-FISH.md`

**Status:** ACTIVE / current Fish Phase 0 audit document; retain and continue after repository cleanup.

## 7.2 `docs/data-model/03-RIGS.md`

**Status:** UPDATE REQUIRED

Strength:

- final 20-Rig library is documented.

Review needed:

- `targetFishIds` ownership conflicts with Fish-to-Rig Decision Knowledge direction,
- `imageIds[]` may be obsolete,
- `techniqueIds[]` may be premature empty placeholder schema,
- Document Status remains Draft despite finalized Rig implementation.

## 7.3 `docs/data-model/04-KNOTS.md`

**Status:** TARGETED UPDATE REQUIRED

Canonical Knot entity/relationship model is generally sound.

Drift:

- media section still describes later static SVG integration even though Package 4 selected/validated external instructional media through shared Media ownership.

## 7.4 `docs/data-model/05-TACKLE.md`

**Status:** UPDATE REQUIRED — HIGH PRIORITY

Document still describes 17/20 active Tackle and an In Progress corrective package.

Actual validated state is 29 active canonical Tackle concepts and 29 active recognition-media records.

Also requires the Tackle ↔ Media ownership decision before final schema reconciliation.

## 7.5 `docs/data-model/01-FOUNDATION.md`

**Status:** UPDATE / APPROVAL REVIEW REQUIRED

Document remains Draft despite governing production domains.

Review needed:

- stale temporary-substring-search language,
- taxonomy wording versus approved Fish controlled-vocabulary/category architecture,
- relationship examples containing Rig `targetFishIds`,
- current scoped-search/provider concepts,
- whether the reconciled document should be promoted to Approved.

## 7.6 `docs/data-model/09-RELATIONSHIPS.md`

**Status:** UPDATE REQUIRED

Single-owner and derived-inverse principles remain valuable.

Needs additions/reconciliation for:

- Fish identification relationships,
- Fish-to-Rig Decision Knowledge,
- Fish category ownership,
- shared aliases/search behavior where relevant,
- scoped search architecture,
- current Core wording.

# Section 8 — Future Draft Data Models

These documents are **not orphans merely because they are not implemented**. Retain them as Draft/Deferred unless later review rejects the concept.

## 8.1 `03A-TECHNIQUES.md`

**Status:** DEFER / REVIEW BEFORE IMPLEMENTATION

Technique remains a valid future domain. Decision baseline appears stale and should be corrected when Technique work begins or during this cleanup if straightforward.

## 8.2 `03B-CONDITIONS.md`

**Status:** DEFER / ARCHITECTURE REVIEW REQUIRED BEFORE RECOMMENDATIONS

Material concern:

- document currently says Conditions are shared by Fish and includes Habitat/Waterbody concepts,
- approved Fish Revision 2 distinguishes intrinsic Fish habitat/waterbody associations from current/situational fishing Conditions,
- `recommendationWeight` may belong to Decision Knowledge rather than canonical Condition Reference Knowledge.

Do not implement this draft without ownership review.

## 8.3 `06-LURES.md`

**Status:** DEFER / REVIEW BEFORE IMPLEMENTATION

Issues:

- stale/possibly incorrect Decision Baseline,
- `targetFishIds` ownership requires review to avoid duplicating recommendation relationships.

## 8.4 `05A-INVENTORY.md`

**Status:** DEFER / RETAIN

Appropriately Draft pending Settings/User Data architecture gate.

## 8.5 `07-USER-DATA.md`

**Status:** DEFER / TARGETED RECONCILIATION LATER

Generally consistent with User Knowledge ownership, but Favorites wording should eventually match the parked final-decision status.

## 8.6 `08-BACKUP.md`

**Status:** DEFER / REVALIDATE AT USER-DATA GATE

Useful future architecture draft. Decision baseline appears stale/unrelated and should be revalidated when Settings/User Data work begins.

# Section 9 — Workstream Directory Hygiene

Completed workstreams provide valuable implementation provenance and should **not** be bulk deleted.

The problem is that some old workstream files still appear “live” based on status text.

Examples:

- `KNOT-GUIDE.md` — still Planning / In Progress although Knots is closed.
- `KNOT-IMPLEMENTATION-HANDOFF.md` — still says ready for Package 3 although Packages 3/4 are complete.
- `CONNECTED-KNOWLEDGE-NAVIGATION-AND-DASHBOARD-IA.md` — says Source Update Pending although implementation/regression passed.
- `SITE-WIDE-FLOATING-NAVIGATION-STANDARD.md` — previous runtime status and Parent-to-top validation text are historical relative to approved navigation Revision 1.

Other closeout records such as Package 3, Package 4, and Integrated Regression correctly record completion and should remain authoritative historical evidence.

**Open question:** Should completed-but-obsolete implementation handoffs/plans be:

1. updated in place to `Superseded/Archived`,
2. moved into `archive/`, or
3. retained under `docs/workstreams/` with explicit historical status?

A single policy is needed so old “ready for next package” documents cannot be mistaken for current continuation instructions.

# Section 10 — Stale Git Branch

Branch found:

```text
agent/rig-guide-closeout
```

alongside `main`.

The branch contains an old Handoff from the Intermediate Rig stage and no open PR was found during the audit.

**Status:** OPEN

**Required check before deletion:** compare branch to current `main` and confirm it contains no unique unmerged material worth preserving.

**Proposed disposition if fully superseded:** delete stale branch.

# Section 11 — `.gitignore` / Repository Hygiene Prevention

No `.gitignore` was found in the repository audit.

This likely contributed to root artifacts such as:

```text
*.tmp
*.bak
```

being committed.

**Status:** OPEN SAFEGUARD DECISION

Potential ignore categories for discussion:

- `*.tmp`
- `*.bak`
- OS-generated files,
- editor swap/recovery files,
- local package staging/output folders if any are used,
- other environment-specific artifacts actually generated by the user's workflow.

Do not add broad patterns that could hide legitimate project assets. The ignore list should be intentionally narrow.

# Section 12 — Repository-Wide Integrity Validator

Current `tools/` contains useful targeted validators, including Knot package and replacement-integrity checks.

The project does not yet have one general repository validator that can inspect the growing cross-domain architecture.

**Status:** OPEN SAFEGUARD DECISION — HIGH VALUE

Proposed repository-wide validator responsibilities:

1. Duplicate canonical IDs within each registry.
2. Required canonical reference resolution.
3. Approved enumerated/controlled values.
4. Single-owner relationship invariants where mechanically testable.
5. Media `ownerType` / `ownerId` resolution.
6. Local production asset existence for local media paths.
7. Orphan local assets in designated production directories, with explicit allowlist support where needed.
8. Forbidden production-root extensions/artifacts such as `.tmp` / `.bak`.
9. Unexpected duplicate paths such as nested `docs/docs/`.
10. Canonical Core registry references.
11. Cross-domain Knot/Rig/Tackle relationship integrity.
12. Future Fish category, identification, guidance, and media relationship validation when those registries are implemented.

The validator should report defects; it should not silently rewrite or delete repository content.

# Section 13 — Optional Continuous Integration

No `.github/workflows/` was found during the audit, and current `main` is not protected by required checks.

**Status:** OPEN SAFEGUARD DISCUSSION

This is not automatically a defect for a personal/local-first project.

Possible later option:

- run repository-integrity validator on pushes/PRs using GitHub Actions,
- optionally block merge only if the user later adopts a branch/PR workflow requiring it.

Do not add CI unless its maintenance cost is justified by the project workflow.

# Section 14 — Documentation Maintenance Safeguards

The existing continuous-documentation rule was not sufficient to prevent drift. The cleanup discussion must therefore define stronger mechanical/process safeguards.

Topics to decide:

## 14.1 Canonical document roles

Create/confirm a short, explicit map of which files may claim which type of truth, for example:

- `HANDOFF.md` — exact current continuation point.
- `ARCHITECTURE.md` — current source/ownership architecture plus clearly labeled approved future state.
- `DECISIONS.md` — durable decisions and supersession history.
- `ROADMAP.md` — canonical milestone order/current phase.
- `MILESTONES.md` — preserved completion history.
- `CHANGELOG.md` — landed behavioral/source changes.
- data-model docs — canonical domain schema/ownership.
- workstreams — scoped planning/implementation/validation history, never a competing current-state handoff after closeout.

## 14.2 Closeout checklist

Consider a mandatory milestone/segment closeout checklist that explicitly verifies:

- production source state,
- architecture state,
- decision state,
- relevant data-model docs,
- changelog,
- roadmap/current milestone,
- handoff,
- workstream statuses,
- orphan/temp/package artifacts,
- stale branches,
- validator pass.

A milestone must not become `Finalized` until the checklist passes.

## 14.3 Status consistency validation

Consider a mechanical audit that flags obvious contradictions such as:

- workstream says `In Progress` while closeout says milestone `Closed`,
- Changelog says package “not started” while package document says `Validated`,
- Architecture claims outdated entity counts,
- Handoff references an old Roadmap revision.

Not every semantic contradiction can be automatically detected, but known structured metadata can be checked.

## 14.4 Documentation freshness metadata

Discuss whether governing/current-state documents should include a shared field such as:

```text
Reconciled Through Commit: <sha>
```

or:

```text
Current-State Baseline: <named milestone/commit>
```

Use only if it improves maintenance without creating self-referential update churn.

## 14.5 End-of-session versus end-of-milestone maintenance

The existing rule updates docs after meaningful repository actions, but drift accumulated across multiple packages.

Discuss a two-tier safeguard:

- **per meaningful push:** active workstream + changelog/current defect + handoff when continuation changes,
- **per completed block/package/milestone:** explicit governing/data-model reconciliation matrix and orphan scan.

# Section 15 — External Reference / Media Freshness

Rig and Knot source documents currently appear substantially healthier than many governing docs.

External URLs/tutorials can nevertheless change or disappear over time.

**Status:** OPEN MAINTENANCE DISCUSSION

Potential later safeguard:

- store/maintain reviewed dates,
- define when external references should be rechecked,
- optionally create a non-destructive link checker,
- continue requiring human review for technical/source suitability rather than treating HTTP success as proof of quality.

# Section 16 — Current Fish Production State

Current `data/fish.js` and Fish UI/search still use the original seed implementation.

This is **expected**, not cleanup drift, because Fish Phase 0 deliberately has not modified production Fish source yet.

Do not “synchronize” production Fish as part of generic cleanup.

The Fish implementation should resume only after:

1. repository cleanup decisions are complete,
2. documentation is reconciled,
3. safeguard decisions are implemented/parked,
4. remaining Fish architecture audit items resume and close,
5. Fish Phase 0 is explicitly closed.

# Section 17 — Audit Decision Order for Next Session

Review one section at a time:

1. Safe orphan cleanup.
2. Historical themes and archive structure.
3. Governing documentation synchronization.
4. Tackle ↔ Media ownership duplication.
5. Empty/obsolete Rig schema fields.
6. Current implemented data-model documents.
7. Future Draft data models and ownership risks.
8. Workstream archive/status cleanup.
9. Stale Git branch.
10. `.gitignore` and repository hygiene.
11. Repository-wide integrity validator and optional CI.
12. External source/media freshness maintenance.
13. Final repository re-audit.
14. Only after cleanup gate passes, resume Fish Guide Phase 0 audit.

# Section 18 — Immediate Safeguard Principle

Until the safeguard design is formally approved, apply this temporary gate to project work:

> **No new feature implementation begins while this repository-cleanup audit remains open.**

> **No file is deleted, moved, archived, or schema-refactored solely because this audit proposed it; review each section and approve the disposition first.**

> **Any documentation update made during cleanup must still follow GitHub-authoritative fetch-before-edit and mandatory post-write integrity validation.**

# Section 19 — Audit Completion Criteria

This repository audit/cleanup phase may close only when:

- every listed finding has a final disposition,
- approved orphan cleanup is complete,
- archive/theme/workstream conventions are unambiguous,
- governing/current-state documentation is reconciled,
- data-model docs accurately distinguish Current vs Deferred,
- ownership duplication questions are resolved,
- stale branch disposition is resolved,
- repository hygiene rules are approved,
- repository-wide validation strategy is approved and implemented or deliberately parked with justification,
- final read-only re-audit finds no unexplained duplicate current sources or known stale status contradictions,
- `HANDOFF.md` is updated to the verified post-cleanup continuation point.

Only then should the project return to the remaining Fish Guide Phase 0 architecture audit.