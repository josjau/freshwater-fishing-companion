# Freshwater Fishing Companion — Handoff

**Document:** HANDOFF.md  
**Document Revision:** 1.6.7  
**Document Status:** Approved  
**Repository State Reference:** GitHub `main` is authoritative.  
**Current Validated Production Baseline:** `449155ffef4eb452aba22e463ee20a21c233a191` — `Section 5 Audit Update`  
**Latest Completed Production Package:** `docs/workstreams/REPOSITORY-AUDIT-SECTION-5-CLOSEOUT.md` — Section 5 PASS / VALIDATED / PRODUCTION IMPLEMENTED / CLOSED  
**Completed Workstream:** `docs/workstreams/KNOT-INTEGRATED-REGRESSION.md` — PASS / VALIDATED / CLOSED  
**Completed Milestone:** Knots  
**Current Milestone:** Fish Guide — Phase 0 In Progress; PAUSED behind Repository Audit Cleanup Gate  
**Active Cleanup Record:** `docs/workstreams/REPOSITORY-AUDIT-CLEANUP.md` revision 1.0.0 — immutable audit-time findings snapshot  
**Active Cleanup Decision Log:** `docs/workstreams/REPOSITORY-AUDIT-DECISIONS.md` revision 1.0.19 — current cleanup dispositions/actions through Section 13  
**Completed Section 12 Record:** `docs/workstreams/REPOSITORY-AUDIT-SECTION-12-CLOSEOUT.md` — Section 12 PASS / GITHUB-VERIFIED / CLOSED  
**Completed Section 13 Record:** `docs/workstreams/REPOSITORY-AUDIT-SECTION-13-CLOSEOUT.md` — Section 13 PASS / GITHUB-VERIFIED / ACTIONS-PASS-CONFIRMED / CLOSED  
**Canonical Roadmap:** `docs/ROADMAP.md` revision 0.3.5 is the current roadmap document; milestone ordering is unchanged.  
**Session Environment:** Windows Desktop; Brave browser; GitHub Desktop.  
**Session Status:** Repository Audit Sections 1–13 are complete and verified. Section 14 — Documentation Maintenance Safeguards — is next. Fish Guide Phase 0 remains paused.  
**Last Updated:** 2026-08-20

# 1. Start Here

GitHub `main` is authoritative for all existing project files.

Permanent rules:

> Fetch the latest GitHub file before changing an existing source file.

> Before beginning any new audit section or milestone, inspect current authoritative GitHub `main`, determine the actual repository state, and propose scope from that evidence rather than assuming older planning state.

> Do not begin a new build segment while the current segment remains unfinalized.

> Finish cleanly or deliberately park; do not leave half-finalized project areas behind.

> Assistant direct GitHub writes are limited by default to Markdown documentation. Production source, data, image, configuration, CSS, HTML, JavaScript, and other non-Markdown project files require explicit authorization for the specific action or current session.

> Production updates normally remain user-reviewable update packages applied through GitHub Desktop unless the user explicitly authorizes a different workflow.

> Every repository file write must pass post-write integrity validation from authoritative GitHub after the write. A successful write response alone is not sufficient.

> Material durable decisions must preserve the decision, reason, current implementation status, deferred/future trigger, and canonical owner/document. Architecturally meaningful non-actions must be recorded rather than left for future sessions to infer.

> Every canonical fact or relationship has one authoritative semantic owner. Ownership must belong to the entity/domain for which the information is intrinsically meaningful; UI, search, reverse navigation, reporting, or implementation convenience do not justify a second canonical owner. D056 governs this site-wide rule.

> Retired repository artifacts must be explicitly classified as **GIT HISTORY ONLY**, **ARCHIVE**, or **DELETE**. Ordinary prior file revisions remain in Git history; independently useful historical artifacts are preserved under repository-root `archive/` and verified before closeout.

> When a session ends before the active section closes, invoke the Session-End Documentation Gate: preserve approved decisions, pending changes/fixes, meaningful deferred/rejected context, defects/risks, implementation/validation state, unresolved decisions, and the exact resume point in the appropriate repository documents before treating the session as closed.

Temporary cleanup gate:

> **Do not resume Fish Guide Phase 0 discussion or begin new feature implementation while `docs/workstreams/REPOSITORY-AUDIT-CLEANUP.md` remains open. Review cleanup findings and maintenance safeguards point by point first.**

# 2. Current Milestone State — Complete Rig Guide

**Implementation Status: Validated / Finalized**

The approved initial Rig Guide remains complete on `main`.

Final validated production state:

- 20 active Rigs,
- 6 learning tiers active,
- tier counts: 6 Beginner / 3 Beginner+ / 4 Intermediate / 4 Intermediate+ / 2 Advanced / 1 Expert,
- 6 Core Rigs unchanged and in the approved order,
- 29 active canonical Tackle concepts,
- 29 active Tackle recognition-media records,
- all seven final-tier build-first YouTube tutorial records integrated and runtime-validated,
- all six final-tier replacement recognition images integrated and runtime-validated.

Final Rig production correction commit:

`4375ca3e05cfbfef6ab0a3e4662c2afd19b86f42` — `Rig Updates Images and tutorials`

Final Rig workstream record:

`docs/workstreams/RIG-GUIDE-COMPLETION.md` revision `1.0.0`

# 3. Canonical Upcoming Build Sequence

The approved order remains:

1. **Knots** — completed / validated / closed
2. **Fish Guide** — next approved product milestone; Phase 0 temporarily paused for repository cleanup
3. **What Should I Throw**
4. **Tackle Reference / Find Tackle**
5. **Settings / User Data Architecture Gate**
6. **My Tackle**
7. **Catch Log**
8. **Global Search**
9. **Favorites final decision**

The milestone ordering has not changed. Repository Audit Cleanup is a maintenance/governance gate and is not inserted into the numbered product roadmap.

# 4. Completed Milestone — Knots

**Implementation Status: PASS / VALIDATED / FINALIZED / CLOSED**

Planning, research, canonical content lock, Reel Setup, Knot media integration, connected-knowledge navigation, integrated source regression, and extended Microsoft Edge runtime validation are complete.

Validated production state:

- Production Package 1 — **PASS / VALIDATED / CLOSED**: 10 canonical Knots, four Core IDs, all 20 Rigs audited, 31 real tied connections.
- Production Package 2 Runtime Revision 5 (`0.6.5`) — **PASS / VALIDATED / CLOSED**: landing, browse, detail, search, relationship, disclosure, and focus behavior validated.
- Production Package 3 — **Get Your Reel Ready** — **PASS / VALIDATED / FUNCTIONALLY COMPLETE / CLOSED**.
- Production Package 4 — **Knot Instructional Media** — **PASS / VALIDATED / FUNCTIONALLY COMPLETE / CLOSED** with approved media coverage for all 10 Version 1 Knots.
- Integrated Knot source regression — **PASS**.
- Shared Root/Nested floating-navigation appearance — **PASS**.
- Reel Setup duplicate-shell correction — **PASS AFTER CORRECTION**.
- Narrow-viewport navigation — **PASS**.
- Keyboard navigation — **PASS**.
- Dashboard/Tackle information-architecture validation — **PASS**.
- Knot connected-knowledge navigation — **PASS**.
- Rig → Knot → Rig regression — **PASS**.
- Reel Setup → Knot → Reel Setup regression — **PASS**.
- Minimal Line Type reference/detail routing — **PASS**.
- Connected-link keyboard interaction — **PASS**.
- Normal-navigation console health — **PASS**.

Final validated production source baseline:

`e7a00db6936eba2aa11277a1a4d923d5f2e7cb32` — `Knots - compact connected knowledge pills`

The final two validation refinements after the connected-knowledge source merge were:

- `3e7cb0364325da8941b0917b8c2237f1ce19097f` — Dashboard emphasized cards moved to the first four positions in the approved order: **Fish Guide, Knots, Rig Guide, Tackle**.
- `e7a00db6936eba2aa11277a1a4d923d5f2e7cb32` — connected-knowledge pills reduced in size and Rig relationship pills constrained to content width.

Those final two corrections changed only `index.html` and `forest-journal.css`; JavaScript, renderer, routing, and canonical data remained unchanged.

Controlling closeout record:

- `docs/workstreams/KNOT-INTEGRATED-REGRESSION.md`

Current controlling Knot records include:

- `docs/workstreams/KNOT-INTEGRATED-REGRESSION.md`
- `docs/workstreams/KNOT-CANONICAL-CONTENT-LOCK.md`
- `docs/workstreams/KNOT-IMPLEMENTATION-PLAN.md`
- `docs/workstreams/KNOT-MEDIA-WORKFLOW-APPROVAL.md`
- `docs/workstreams/KNOT-PRODUCTION-PACKAGE-4-VISUAL-SOURCE-AUDIT.md`
- `docs/workstreams/KNOT-RESEARCH-VALIDATION-APPROVAL.md`
- `docs/NAVIGATION-PAGE-STANDARD.md`

Completed historical Knot package/approval records moved during Section 9 are retained under `archive/workstreams/knots/` and no longer govern current continuation state.

## Approved Version 1 Knot Library

Version 1 contains 10 canonical Knots.

Core 4:

1. Arbor Knot
2. Improved Clinch Knot
3. Palomar Knot
4. Double Uni Knot

Additional Beginner / General:

5. Uni Knot
6. Double Surgeon’s Knot
7. Non-Slip Loop Knot
8. Dropper Loop Knot

Specialized / Intermediate:

9. Snell Knot
10. Alberto Knot

Minor named variations do not automatically become separate canonical Knot records. A separate record requires a meaningfully different tying process or a distinct practical fishing job.

## Approved Difficulty Taxonomy

Allowed values:

- Beginner
- Intermediate
- Advanced

Version 1 assignments:

- Beginner: 6
- Intermediate: 4
- Advanced: 0 active Knots

The UI includes an **Advanced Knots — Coming Soon** placeholder, but that placeholder is not a canonical Knot entity and is not part of the 10-knot count.

Core membership and difficulty remain independent concepts.

## Approved Navigation Direction

The Knot Guide is task-first, concise, and uses the Rig Guide as the navigation baseline.

Canonical landing hierarchy:

1. **Search all Knots**.
2. **What are you trying to do?**
   - **Attach Line to a Reel** — Important Card.
   - **Tie On a Hook, Swivel, or Lure** — Important Card.
   - Connect Two Lines / Add a Leader — normal task card.
   - Make a Loop Connection — normal task card.
3. Collection cards:
   - All Knots.
   - **Core Knots** — approved Core/Important treatment.
   - Beginner Knots.
   - Intermediate Knots.
   - Advanced Knots — Coming Soon.

The `What are you trying to do?` section itself remains visually neutral. Important emphasis belongs to deliberately prioritized cards, not to the entire section.

`Attach Line to a Reel` is the single landing entry to the Reel & Line Setup workflow.

## Approved Canonical Knot Schema

Canonical Knot records use:

```text
id
name
summary
createdVersion
lastModifiedVersion
isActive

difficulty
connectionTypes[]
compatibleLineTypes[]

aliases[]
keywords[]

bestFor[]
limitations[]

tyingSteps[]
commonMistakes[]
finalChecks[]

referenceLinks[]
```

Core membership is owned separately by ordered `CORE_KNOT_IDS[]` rather than an `isCore` field.

Approved Core IDs:

```text
arbor-knot
improved-clinch-knot
palomar-knot
double-uni-knot
```

Approved `connectionTypes[]` values:

```text
reel-spool-attachment
terminal-attachment
line-to-line
terminal-loop
dropper-loop
```

Approved `compatibleLineTypes[]` values:

```text
monofilament
fluorocarbon
braid
```

`aliases[]` contains legitimate alternative Knot names. `keywords[]` contains deliberate beginner/task search phrases.

Do not store `strengthRating`, `stepCount`, `relatedRigIds`, `relatedTechniqueIds`, Knot-owned `imageIds`, Knot-owned `animationIds`, `taskIds`, `primaryPurpose`, `recommendedSpecies`, or individual `isCore` flags in Version 1.

## Approved Tying-Step Rule

`tyingSteps[]` is an ordered array of authoritative instruction strings.

- array position owns step order,
- the UI displays numbered steps beginning at 1,
- step numbers are derived and not stored,
- `stepCount` is derived from `tyingSteps.length`,
- step numbers are not embedded in instruction strings.

## Approved Knot Media Ownership

Knot records do not store inverse `imageIds[]` / `animationIds[]` when Media owns the association.

Conceptual ownership:

```text
Media
    ownerType: "knot"
    ownerId: canonical Knot ID
```

The current production media registry uses this ownership model for the Version 1 Knot instructional-media records.

## Approved Reel & Line Setup Direction

Reel & Line Setup is a first-class guided workflow inside the completed Knots milestone.

Version 1 includes:

- new/empty reel and replacement-line workflows,
- Spinning, Spincast, and Baitcasting reels,
- reel identification including **I'm not sure**,
- Monofilament, Fluorocarbon, and Braid guidance including **I'm not sure**,
- beginner species-based line type and pound-test recommendations,
- all-around beginner recommendations where appropriate,
- reel/rod compatibility checks,
- a small **How to Read Your Reel** section explaining line-capacity markings and reel-size numbers,
- reel-type-aware backing logic,
- Arbor Knot spool attachment,
- canonical line-to-line Knot handoffs where required,
- reel-specific line routing, winding tension, and spool-fill guidance,
- optional leader connection,
- context-preserving return from Knot instruction to Reel Setup,
- a final **Reel Ready** checkpoint and Rig Guide handoff.

Fly reels and fly-line-specific setup remain Parking Lot for Version 1.

Baitcasting scope covers correct spooling only; detailed brake tuning, backlash prevention, lure-weight configuration, and casting instruction are outside this workflow.

## Approved Knot Media Direction

Canonical in-app tying steps remain authoritative.

Production Package 4 uses verified external instructional destinations selected through a strict method-match gate. A source is rejected if it teaches a legitimate variation that does not match the locked canonical Version 1 method unless the canonical method is deliberately changed and documented first.

Approved hierarchy:

1. verified diagrams,
2. verified animations,
3. verified video,
4. custom project diagram only as a last resort.

Current Version 1 media coverage is complete for all 10 Knots using approved external destinations. Third-party instructional artwork, animation, 3D assets, or video are not copied, bundled, rehosted, extracted, or redistributed by the project.

# 5. Current Milestone — Fish Guide Phase 0

**Implementation Status: Phase 0 In Progress / Species Library LOCKED / Architecture Audit OPEN / TEMPORARILY PAUSED FOR REPOSITORY CLEANUP**

Controlling records:

- `docs/workstreams/FISH-GUIDE-PHASE-0.md`
- `docs/workstreams/FISH-GUIDE-PHASE-0-AUDIT-REVISIONS.md`
- `docs/data-model/02-FISH.md`
- `docs/NAVIGATION-PAGE-STANDARD.md`

Locked Four-State Fish scope:

- Northeast Oklahoma
- Southeast Kansas
- Southwest Missouri
- Northwest Arkansas

The Four-State direction is also the Companion's forward content focus. Existing validated domains preserve their original validation context and are reconciled progressively/additively when audited or materially modified.

Locked/approved Fish architecture now includes:

- 30 canonical Version 1 Fish,
- 20 approved pairwise identification relationships,
- Fish-owned `identificationTraits[]`, `habitatTags[]`, and `waterbodyTypes[]`,
- exact controlled habitat/waterbody vocabularies,
- separate `FISH_IDENTIFICATION_RELATIONSHIPS` Reference Knowledge registry,
- separate `FISH_RIG_GUIDANCE` Decision Knowledge registry,
- media ownership through the shared Media registry rather than Fish-owned image IDs,
- no state-specific geography Boolean fields on Fish,
- Fish category membership stored as `categoryId`, not duplicated display text,
- Fish-owned `FISH_CATEGORY_DATA` registry for category identity/presentation/order,
- no category-level `isActive`; individual Fish `isActive` owns Fish lifecycle,
- canonical `northern-rock-bass` / `Northern Rock Bass` identity,
- shared aliases allowed where regionally legitimate, including `Goggle-Eye`,
- Hybrid Striped Bass aliases `Wiper` and `Whiterock Bass`,
- hierarchical scoped Search with context-correct helper/empty-state text,
- revised standard navigation: Forward opens new destinations at top; Parent restores prior standard view state + scroll; Home opens Dashboard at top and clears context.

The final Version 1 species library remains 30 Fish; item 13 is now canonically **Northern Rock Bass** rather than the earlier planning display name Rock Bass.

No Fish production source/data/media/UI files have been changed during Phase 0.

## Approved 2026-08-18 Audit Revisions

The following are approved and locked in `FISH-GUIDE-PHASE-0-AUDIT-REVISIONS.md` and promoted into durable decisions D057–D061 where applicable:

1. **Context-Preserving Parent Navigation** — Forward = destination top; Parent = prior standard view state + scroll; Home = Dashboard top/reset; never transfer source scroll into a new destination. Durable owner: D051.
2. **Fish Habitat / Water Ownership** — retain Fish-owned `habitatTags[]` and `waterbodyTypes[]`; do not collapse them into generic current-condition references. Durable owner: D058.
3. **Fish Category Registry / Lifecycle Ownership** — `category` → `categoryId`; Fish category registry owns grouping identity/presentation/order; individual Fish owns `isActive`. Durable owner: D059.
4. **Northern Rock Bass Canonical Identity** — `northern-rock-bass`; `Northern Rock Bass`; `Rock Bass` and `Goggle-Eye` aliases; shared aliases permitted. Durable owner: D060.
5. **Hierarchical Scoped Search** — deeper navigation narrows eligible search scope; helper text/examples/empty states must reflect that scope; Search never silently broadens; future global/relationship-aware Search must consume canonical owners rather than duplicate relationship knowledge. Durable owner: D061.

## Remaining Phase 0 Audit / Clarification Items

These remain open but are **not the next-session discussion until repository cleanup closes**:

1. **Identification relationship ID convention** — deterministic stable IDs and duplicate/reversed-pair validation.
2. **Fish-to-Rig guidance optionality and source naming** — whether every Fish needs guidance; `data/fish-guidance.js` vs more explicit naming; guidance-record ID convention.
3. **Fish activation / staged release readiness** — whether V1 inclusion and runtime `isActive` should be separated during staged implementation so incomplete Fish/media cannot surface prematurely.
4. **Fish media requiredness/naming** — conditional `role`, null semantics for attribution/changes, media/file naming, alt-text standard, responsive derivatives if any.
5. **Four-State reconciliation outside Fish** — now governed project-wide as a progressive/additive direction; individual domain adequacy work remains pending.
6. **Fish source documentation + integrity validation** — exact `FISH_REFERENCE_SOURCES.md` requirements and repeatable Fish data-integrity validator scope.

Block 0.7 remains not fully closed. Do not begin production Fish implementation yet.

# 6. What Should I Throw — Canonical Instruction Direction

When the What Should I Throw milestone begins, recommendations should connect canonical knowledge rather than duplicate instructions.

Approved distinction:

- **How to Rig It** → applicable canonical Rig build instructions/tutorial.
- **How to Fish It** → applicable canonical Technique presentation/retrieve instructions/tutorial.

Recommendations own selection, ranking, rationale, and context. Rig owns physical assembly/configuration. Technique owns reusable presentation behavior.

# 7. Tackle Reference / Find Tackle — Canonical Direction

Canonical Tackle must be discoverable independently of Rigs.

A user must not need to remember which Rig contains a component in order to find or learn about that component.

The future Tackle Reference / Find Tackle milestone will provide searchable canonical Tackle Reference Knowledge using deliberate fields such as canonical name, aliases, beginner/common terminology, category, and approved keywords.

A Tackle result should act as a connected-knowledge gateway and may expose:

- definition and recognition help,
- common variants,
- related Tackle,
- Rigs that use the item,
- Fish/Conditions/Techniques where canonical relationships exist,
- later My Tackle ownership context.

# 8. Settings / User Data Architecture Gate

Before My Tackle or Catch Log implementation begins, a dedicated architecture/design segment must resolve persistent User Knowledge and Settings.

Required topics include:

- local persistence/storage technology,
- data retention and browser/site-data clearing behavior,
- application-update/schema migration,
- backup/export,
- restore/import validation and rollback,
- device transfer,
- user/profile identity,
- single-user versus future multi-user boundaries,
- synchronization/account expectations,
- device-local versus profile-owned settings,
- supported themes/theme architecture,
- user preference storage and backup behavior.

Theme context already approved for that future gate:

- Forest Journal is the only production-supported theme today and remains the visual/reference baseline.
- Forest Copper, Forest Gold, and Legacy Dark are intentionally retained deferred theme candidates under `themes/concepts/`, not abandoned historical artifacts.
- `themes/README.md` records the local directory purpose and deferred status.
- Multi-theme implementation was deliberately postponed to avoid duplicated maintenance/regression work while the application structure is still changing.
- The current `themes/concepts/` organization is intentionally lightweight and may be revised when final theme implementation begins.
- Future production theme architecture should centralize shared base/layout/component behavior where practical and keep individual themes focused primarily on tokens/intentional overrides.
- Theme selection, persistence, device/profile ownership, backup/restore behavior, and the final supported-theme set must be resolved here.
- The fixed reference-media surface `#f4f0e8` remains a cross-theme invariant.

Current local-first architecture remains the baseline unless explicitly changed.

# 9. My Tackle / Catch Log Order

My Tackle follows the User Data architecture gate and precedes Catch Log.

My Tackle must establish persistent ownership behavior on the settled User Knowledge storage architecture.

Catch Log then uses that same persistence architecture and references canonical Fish/Rig/Lure/Technique entities rather than duplicating Reference Knowledge wherever practical.

# 10. Global Search

Global Search is intentionally deferred until the major searchable domains and canonical entity models are established.

It must build on the existing relevance-first/connected-knowledge approach and must not become an undifferentiated cross-domain result dump.

The hierarchical scoped-search approval adds an explicit future constraint: Global Search should orchestrate domain-specific search providers and canonical relationship owners rather than requiring local domain Search to be rewritten or duplicating relationship facts as search metadata.

# 11. Favorites

Favorites is parked until near project completion.

At that point, decide from actual workflow value whether to keep, narrow, replace, or remove it.

# 12. Session Workflow Safeguards

## A. GitHub write authority

Assistant direct GitHub writes are limited by default to Markdown documentation unless the user explicitly authorizes a specific production-file write or broader current-session write boundary.

Normal production workflow:

1. fetch the latest authoritative files from GitHub,
2. prepare the complete reviewed update,
3. package changed production files into a user-reviewable update package,
4. user applies/pushes through GitHub Desktop unless an explicit current-session direct-write authorization applies,
5. re-fetch GitHub afterward to verify the applied production state.

## B. Post-write integrity validation

Every file write must be re-fetched from authoritative GitHub and checked for intact beginning/end content, intended changes, preserved unrelated content, and absence of accidental truncation before the write is considered complete.

## C. Image review before site integration

No newly created or replacement image may be added to a production update package before the user has visually reviewed and approved it.

## D. Long-process status updates

During long or multi-step work, post concise visible progress updates at meaningful checkpoints.

## E. Durable decision context

D055 and `DEVELOPMENT_WORKFLOW.md` require every material durable decision to preserve:

1. the decision,
2. the reason,
3. current implementation status,
4. deferred/future trigger,
5. canonical owner/document.

Architecturally meaningful non-actions must be recorded. Deferred candidates must not later be misclassified as abandoned solely because implementation or restructuring was intentionally postponed.

## F. Semantic single-owner rule

D056 requires every canonical fact and relationship to have one authoritative semantic owner. Ownership follows domain meaning rather than UI, search, reverse-navigation, reporting, caching, or implementation convenience.

Inverse views should be derived from the canonical owner. Any future duplicate representation or cache/index requires an explicit semantic/architectural justification and remains non-authoritative unless a later decision changes ownership.

## G. Repository artifact retirement and archive discipline

`archive/` at repository root is the only canonical repository archive. Ordinary prior revisions remain recoverable through Git history and are not copied into the archive solely because a file was replaced wholesale.

Every retired artifact is classified **GIT HISTORY ONLY**, **ARCHIVE**, or **DELETE**. An **ARCHIVE** disposition is incomplete until the archive path is created and verified on GitHub `main`, the old active/current path no longer masquerades as current, and the reason/action are documented.

## H. Session-End Documentation Gate

When the user indicates a session is ending before the active section is closed, stop normal implementation/audit progression and reconcile the session into repository documentation.

Preserve approved decisions, approved pending changes/fixes, meaningful deferred/rejected alternatives, new defects/risks, actual implementation/validation state, unresolved decisions, and the exact continuation point. Do not guess an unresolved decision merely to close the session, but do not leave clearly approved material only in chat history.

A session-preservation documentation commit is a justified exception to normal commit minimization.

## I. Repository cleanup gate

Until Repository Audit Cleanup is closed:

- no new feature implementation begins,
- cleanup dispositions are reviewed point by point,
- no audit-proposed deletion/move/schema refactor occurs without approval,
- all cleanup documentation writes retain the existing fetch-before-edit and post-write validation rules.

The remaining safeguard-design agenda includes documentation safeguards, external-reference/media freshness maintenance, final re-audit, and the mandatory drift-prevention approval gate.

# 13. Rig Tutorial Standard

Primary embedded Rig tutorials are build-first:

- correct physical assembly/configuration is the primary purpose,
- concise/direct videos are preferred when technically complete,
- prioritize component order, knots/connections, leader placement, weight placement, bait/hook placement, and final configuration,
- technique/retrieve/presentation/strategy may appear but must not dominate,
- no arbitrary hard duration threshold is required,
- authoritative text assembly remains mandatory,
- use the established lazy privacy-enhanced YouTube embed and separate external fallback.

Permanent working principle:

> Tutorial preferred, trustworthy external visual/reference as backup, authoritative text always required.

# 14. Tackle Recognition Media Standard

Current production rules:

- real-photo-first when technically correct and legally reusable,
- otherwise original semi-photorealistic catalog-style recognition media anchored to verified geometry,
- precise illustration is only an explicitly reviewed mechanical exception,
- normal production assets must not use flat/vector/cartoon/clip-art treatment,
- current Tackle references use 640 × 440 RGB WebP,
- exact canonical reference-media canvas is `#f4f0e8`,
- no baked artificial cast shadow,
- final assets must be checked at realistic phone contextual-popover size,
- every new/replacement asset must be shown separately in chat and explicitly approved before production packaging.

# 15. Finalized Work

The following are Validated / Finalized:

- Application Foundation
- Fish Data Foundation
- Shared Search and Rendering Utilities
- Functional Fish Search
- Functional Rig Guide foundation
- Current-State UX Repairs
- Rig/Tackle Data Integrity — Batch 1
- Core Rigs / Beginner + Beginner+ / Rig UX Finalization
- Beginner/Beginner+ Media Completion + Intermediate Rig Expansion
- Complete Rig Guide
- **Knots — Production Packages 1–4 plus integrated navigation/runtime closeout**
- **Repository Audit Section 4 — Tackle ↔ Media semantic ownership refactor**
- **Repository Audit Section 5 — Rig empty schema-field cleanup**
- **Repository Audit Section 6 — Governing Documents Comprehensive Synchronization**
- **Repository Audit Section 7 — Data-Model Documentation Synchronization**
- **Repository Audit Section 8 — Future Draft Data Models**
- **Repository Audit Section 9 — Workstream Directory Hygiene**
- **Repository Audit Section 10 — Stale Git Branch**
- **Repository Audit Section 11 — `.gitignore` / Repository Hygiene Prevention**
- **Repository Audit Section 12 — Repository-Wide Integrity Validator**
- **Repository Audit Section 13 — Minimal Non-Blocking Continuous Integration**

The following Fish Guide Phase 0 work is Approved / Locked but not production-implemented:

- Four-State Fish geographic scope,
- revised canonical Version 1 Fish schema using `categoryId`,
- Fish category registry ownership,
- Fish identification/confusion relationship architecture,
- Fish-to-Rig guidance architecture,
- final 30-Fish Version 1 species library,
- final 20-relationship Version 1 identification graph,
- Northern Rock Bass canonical identity,
- hierarchical scoped Search rules,
- revised Parent context/scroll restoration behavior.

# 16. Known Temporary Bridge

Rig readiness remains transitional local state under:

`freshwaterFishingCompanion.tackleReadiness.v1`

It must not be treated as permanent My Tackle ownership.

# 17. Active Gate — Repository Audit Cleanup

**Status:** SECTIONS 1–13 COMPLETE / SECTION 14 NEXT / FISH PAUSED

Controlling documents:

- `docs/workstreams/REPOSITORY-AUDIT-CLEANUP.md` — immutable audit-time findings snapshot; its original `OPEN` labels describe the audit baseline.
- `docs/workstreams/REPOSITORY-AUDIT-DECISIONS.md` revision `1.0.19` — current cleanup dispositions through Section 13.
- `docs/workstreams/REPOSITORY-AUDIT-SECTION-4-CLOSEOUT.md` — Section 4 implementation/runtime closeout.
- `docs/workstreams/REPOSITORY-AUDIT-SECTION-5-CLOSEOUT.md` — Section 5 implementation closeout.
- `docs/workstreams/REPOSITORY-AUDIT-SECTION-6-CLOSEOUT.md` — Section 6 governing-document closeout.
- `docs/workstreams/REPOSITORY-AUDIT-SECTION-7-CLOSEOUT.md` — Section 7 data-model synchronization closeout.
- `docs/workstreams/REPOSITORY-AUDIT-SECTION-8-CLOSEOUT.md` — Section 8 future-model closeout.
- `docs/workstreams/REPOSITORY-AUDIT-SECTION-9-CLOSEOUT.md` — Section 9 workstream-directory closeout.
- `docs/workstreams/REPOSITORY-AUDIT-SECTION-10-CLOSEOUT.md` — Section 10 stale-branch closeout.
- `docs/workstreams/REPOSITORY-AUDIT-SECTION-11-CLOSEOUT.md` — Section 11 repository-hygiene closeout.
- `docs/workstreams/REPOSITORY-AUDIT-SECTION-12-CLOSEOUT.md` — Section 12 repository-integrity-validator closeout.
- `docs/workstreams/REPOSITORY-AUDIT-SECTION-13-CLOSEOUT.md` — Section 13 continuous-integration closeout.
- `docs/workstreams/REPOSITORY-AUDIT-CLOSEOUT-REQUIREMENTS.md` — mandatory final drift-prevention review/approval gate.

Completed cleanup decisions through Section 13:

- Section 1 orphan/duplicate cleanup — completed / GitHub-verified.
- Section 2 theme/archive structure — completed / GitHub-verified; D055 promoted.
- Section 3 production entrypoint and asset reachability — PASS.
- Section 4 Tackle ↔ Media ownership — PASS / VALIDATED / PRODUCTION IMPLEMENTED; D056 promoted.
- Section 5 Rig empty schema fields — PASS / VALIDATED / PRODUCTION IMPLEMENTED / CLOSED.
- Section 6 Governing Documents Comprehensive Synchronization — PASS / VALIDATED / CLOSED.
- Section 7 Data-Model Documentation Synchronization — PASS / VALIDATED / CLOSED / corrected for decision precedence.
- Section 8 Future Draft Data Models — PASS / VALIDATED / CLOSED / corrected for decision precedence.
- Section 9 Workstream Directory Hygiene — PASS / GITHUB-VERIFIED / CLOSED.
- Section 10 Stale Git Branch — PASS / GITHUB-VERIFIED / CLOSED; `agent/rig-guide-closeout` deleted after unique-material review and remote verification.
- Section 11 `.gitignore` / Repository Hygiene Prevention — PASS / GITHUB-VERIFIED / CLOSED.
- Section 12 Repository-Wide Integrity Validator — PASS / GITHUB-VERIFIED / CLOSED; `tools/validate_repository_integrity.js` is the current read-only cross-domain mechanical integrity check.
- Section 13 Optional Continuous Integration — PASS / GITHUB-VERIFIED / ACTIONS-PASS-CONFIRMED / CLOSED; GitHub Actions now runs the repository-integrity validator automatically on `main` pushes, pull requests targeting `main`, and manual dispatch without branch protection or write-back behavior.

Next cleanup work:

> **Section 14 — Documentation Maintenance Safeguards**

The wider audit still covers documentation safeguards, external-reference/media freshness, final production-intent verification, final re-audit, and mandatory drift-prevention review/approval.

# 18. Exact Resume Point — Current Session

Do **not** resume the remaining Fish Guide Phase 0 topics yet.

Begin the **Repository Audit Cleanup Gate — Section 14: Documentation Maintenance Safeguards** only after a fresh Section 14 repository preflight.

Current exact sequence:

1. Re-fetch current authoritative GitHub `main` before proposing any Section 14 change.
2. Read `docs/HANDOFF.md`, `docs/workstreams/REPOSITORY-AUDIT-CLEANUP.md`, `docs/workstreams/REPOSITORY-AUDIT-DECISIONS.md`, and the Section 13 closeout record first.
3. Preserve Sections 1–13 as completed; do not reopen them without a new defect or explicit user decision.
4. Define/confirm canonical document roles so Handoff, Architecture, Decisions, Roadmap, Milestones, Changelog, data-model documents, and workstreams cannot silently compete for current-state authority.
5. Design a practical closeout checklist covering production source state, architecture, decisions, relevant data models, changelog, roadmap/current milestone, handoff, workstream lifecycle, orphan/temp/package artifacts, stale branches, and repository-integrity validation.
6. Evaluate mechanically detectable status contradictions without attempting to automate semantic judgment that requires human review.
7. Decide whether shared document freshness metadata such as `Reconciled Through Commit` adds value or creates self-referential maintenance churn.
8. Define the distinction between per-meaningful-push documentation maintenance and completed block/package/milestone reconciliation.
9. Propose exact Section 14 safeguards and file impacts for user approval before writing governing/process changes.
10. After approved implementation/documentation, update the audit decision log, Section 14 closeout record, and Handoff before Section 14 is considered complete.
11. Re-fetch every changed file from GitHub and verify beginning, end, intended changes, and preserved unrelated content.
12. Do not resume Fish Guide Phase 0 until the remaining Repository Audit Cleanup sections and final read-only re-audit pass.
13. Before final audit closeout, conduct the mandatory Repository Integrity and Drift Prevention review/discussion and obtain explicit user approval of the final process.

Fish state to preserve while paused:

- Fish Audit Revisions 1–5 remain approved/locked unless explicitly reopened.
- No Fish production source has been changed during Phase 0.
- Revised standard Parent state/scroll restoration is approved but broader production routing implementation remains pending where the old top-reset behavior still exists.
- Current Rig/Knot subset result scoping is correct; static helper/example wording may be aligned when those screens are deliberately edited rather than through unrelated production changes.
- Re-fetch every production file immediately before any future edit; never assume a proposed version was implemented.
