# Freshwater Fishing Companion — Decisions: Workflow, Governance, and Continuity


**Document:** decisions/workflow.md  
**Document Status:** Approved  
**Role:** Canonical durable decision bodies for this ownership domain  
**Migration Baseline:** `af3bffb9995d56f8b9e47236bbadfa481d88cc34`  
**Last Updated:** 2026-09-24


# Purpose


This file owns the full decision bodies listed below. Decision IDs are permanent and remain stable across the documentation decomposition. `../DECISIONS.md` is the compact canonical index.


# D014 – GitHub-Authoritative Local Repository Workflow


GitHub `main` is authoritative for committed production source and committed documentation. Google Drive `Working Source/Current` is the complete editable repository working tree and is authoritative for all approved uncommitted repository changes under D068. GitHub remains the synchronization point for committed history; the local Git repository is the user review/validation and final-commit surface.


For user-facing application work, the local checkout must be verified against the intended GitHub baseline before local validation. Chat memory, a previously proposed file, a downloaded package, or an uncommitted file on another computer is never authoritative content for the active checkout.


All intended repository changes—including documentation-only changes—must first exist in the authoritative Drive working state before GitHub commit. Documentation-only work retains standing commit authority and does not require local browser/user validation, but it no longer bypasses Drive. When local browser/device validation is useful or required, the local checkout is a validation target rather than the authoritative uncommitted owner.


Production source/data/media/configuration writes require explicit authorization for the specific scope, and production/user-facing commit/push requires explicit authorization. Under D068, Drive owns the complete authoritative uncommitted working tree; review ZIPs/checkpoint artifacts are generated from that tree when transport, review, local validation, or recovery requires them, and never contain `.git`. Documentation-only commits are standing-authorized when required to keep durable project state current.


Commit economy is required: use as few commits as practical while preserving reviewability, validation boundaries, rollback safety, and current documentation. Fewer commits never justify stale documentation or an overbroad unreviewable commit.


Every local write must pass diff/integrity validation before commit, and every pushed write must be re-fetched/integrity-verified from GitHub before it is considered complete.


A session ending before section closeout follows the session-end gate in `../PROJECT-RULES.md`; approved decisions and current continuation state must not remain only in chat history.


Detailed current procedure: `../PROJECT-RULES.md`. D068 owns the durable complete-Drive-working-tree authority model; D062 remains the superseded ZIP-era model.
# D033 – Archive Completed Package Artifacts


`archive/` at repository root is the single canonical archive root.


Completed package-specific implementation artifacts do not remain in active/current repository locations once their package is no longer active. Package artifacts with continuing audit, provenance, reconstruction, or handoff value are retained under a clearly labeled path such as:


```text
archive/packages/<date>-<package>/
```


Normal prior revisions of current source or documentation files are **not** copied into `archive/` merely because the implementation workflow edited or replaced the whole file. Git history is the canonical recovery mechanism for ordinary file revisions.


Whenever an implementation, migration, cleanup, or closeout retires an existing repository artifact, classify it explicitly as:


1. **GIT HISTORY ONLY** — ordinary prior revision; no archive copy.
2. **ARCHIVE** — independently useful historical/audit/provenance/reconstruction artifact retained under `archive/`.
3. **DELETE** — no continuing repository value beyond Git history.


An artifact classified **ARCHIVE** is not closed out until its archive path is verified on authoritative GitHub `main`, its former active/current path no longer masquerades as current, and the archival action is recorded in the relevant workstream/decision/closeout documentation.


Archived material is historical evidence and must not override current governing documentation, production source, current data models, or active workstreams. `archive/README.md` owns the directory-level archive operating policy.


Permanent rule: **Git history preserves ordinary revisions; `archive/` preserves independently useful historical artifacts.**
# D036 – Status and Version Semantics


Decision status, document status, implementation status, and application version are separate concepts and must not be used interchangeably.


Document Status values are:


- `Draft`
- `Approved`
- `Superseded`
- `Archived`


Implementation-state terminology and transition mechanics are owned by `../PROJECT-RULES.md`; this decision does not maintain a competing fixed list of values.


`Document Revision` identifies the revision of a documentation file. `Application Version` or `Application Baseline` identifies the product version or baseline when needed. Ambiguous `Active` should not be used as a document-governance status.


`Validated` is reserved for implementation or repository state that has actually been verified after push/runtime validation where applicable; documentation approval alone does not make an implementation validated.


Package-specific source-header language such as `REPLACEMENT` should be removed when the relevant permanent source file is next deliberately edited.
# D038 – Repository Continuity Entrypoint


**Status: Superseded by D070.**


Historical decision: the now-retired `docs/WORKING_STATE.md` was the single compact repository entrypoint for current state and exact resume. It was intended as a current-state map rather than a duplicate specification/decision archive/history log.


D070 retires that repository path and moves the single operational continuation/exact-resume role to the external Live Working State. The permanent principle survives unchanged: **one continuation entrypoint, then follow canonical ownership paths; do not reconstruct state from chat.**


# D039 – Documentation-Validated Closeout


A session, module, or section is not finalized until all relevant documentation has been updated, pushed to GitHub, inspected in the actual repository, and validated.


Conversation agreement, locally generated files, staged files, preflight checks, or code implementation alone do not constitute closeout.


Permanent rule: **no session, module, or section is finalized until all relevant documentation is updated and validated in GitHub.**
# D040 – No Unvalidated Build Transition


The project does not begin a new build segment while the current segment remains unfinalized.


Before moving to the next build segment, the current segment must have its decisions settled, required implementation completed when applicable, relevant documentation updated, changes pushed, GitHub state inspected, and runtime/application behavior validated where applicable.


If an area remains open, it must be explicitly resolved or deliberately parked and documented before the project transitions to a new build segment.


Permanent rule: **finish cleanly or deliberately park; do not leave half-finalized project areas behind.**
# D041 – Cross-Segment Decision Capture and Parking


The significance of a project discussion determines whether it must be documented, not whether the discussion occurred inside the currently planned workstream.


A project-wide question raised mid-stream that produces a meaningful architecture, product, data-model, workflow, UI, future-feature, deferment, rejection, or other durable decision is treated with the same documentation discipline as an in-segment decision.


Such outcomes must be classified as appropriate (`Build Now`, `Parking Lot`, `Reject`, or `Open`) and captured in the relevant governing documentation before closeout.


When a substantial off-segment discussion would unnecessarily interrupt a coherent build segment, the technical lead may recommend parking it until a clean stopping point. The topic must be recorded with enough context that it cannot be lost. If the issue materially changes the work currently underway, it is discussed immediately instead.
# D055 – Durable Decision Context Preservation


A material decision is not sufficiently documented when the repository records only the outcome but omits context needed to interpret it later.


For durable architectural, product, data-model, workflow, UI, deferment, rejection, or structural decisions, canonical documentation preserves:


1. **Decision**;
2. **Reason/tradeoff/risk**;
3. **Current implementation status**;
4. **Deferred/future trigger**;
5. **Canonical owner/document**.


Architecturally meaningful non-actions are also recorded. Deferred candidates are labeled deferred rather than with ambiguous wording that could imply abandonment.


`../PROJECT-RULES.md` owns current operating procedure. `decisions/workflow.md` owns this full durable decision body; other documents carry only context required by their role.


Permanent principle: **a future session must be able to recover both what was decided and why from the repository without relying on chat history.**
# D062 – Drive Working Package / Local Validation / GitHub Commit Operating Model


**Status:** Superseded for active workflow mechanics by D068. Retained as ZIP-era historical rationale; the text below describes the prior model and is not current instruction.


**Historical decision:** GitHub `main` was authoritative for committed source/formally reconciled documentation. Approved uncommitted user-facing work used a Drive `Working Source/Current` atomic full-tree ZIP plus manifest, with a local Git checkout as browser-validation copy. Documentation-only changes could bypass Drive and land directly on GitHub. Review revisions were cumulative packages; `.git` was excluded.


The model also required single-writer discipline, compact current state, a documentation impact sweep, and changed-file/full-tree verification.


**Reason at the time:** It addressed drift between local edits and an unreliable file-by-file Drive mirror and preserved an exact cross-session working package.


**Supersession:** D068 replaces ZIP-as-working-state and the documentation-direct-to-GitHub bypass with a complete editable Drive working tree. Review ZIPs are transport only and documentation is Drive-first. Its former repository Working State continuity clause was later superseded by D070, which makes Live Working State the sole operational continuity/exact-resume surface.


**Current implementation status:** Superseded / historical only.


**Future trigger:** None for active procedure. Any future authority-model change requires a new explicit decision based on demonstrated workflow/tooling needs.


**Canonical owners:** D062 preserves this historical rationale; D068 preserves the durable authority-model decision; `../PROJECT-RULES.md` owns current procedure.
# D064 – Repository Disaster Recovery / Reconstruction Gate


**Decision:** Before a major Version 1 release, or earlier if the repository begins to contain irreplaceable User Knowledge or other non-reconstructible artifacts, the project must implement and validate an independent repository disaster-recovery/reconstruction plan beyond the active working checkout.


The gate must define:


- recovery coverage for source, documentation, media, workflows/configuration, and intentionally retained archive evidence,
- which artifacts are irreplaceable versus reproducible,
- at least one independent mirror/export/backup path beyond the active checkout,
- restoration and reconstruction procedure,
- integrity and completeness validation after restoration,
- recovery-point/retention expectations and the responsible maintenance cadence.


**Reason:** Git history and a synchronized remote reduce ordinary device-loss risk, but they do not by themselves prove recovery from account loss, repository deletion/corruption, media loss, or future irreplaceable local user artifacts. Designing this only after such artifacts exist would accept avoidable loss risk.


**Current implementation status:** Approved / Deferred to named gate. The current repository and GitHub remote support ordinary source continuity, but the independent disaster-recovery/reconstruction plan has not been designed or validated. This is not a current Fish production blocker.


**Future trigger:** Complete before major Version 1 release or before irreplaceable User Knowledge enters scope, whichever occurs first.


**Canonical owners:** D064 owns the durable requirement. `ROADMAP.md` owns its release ordering and `ACTIVE-CHANGE-LEDGER.md` keeps GATE-012 visible until implementation/validation closes.
# D068 – Drive-First Complete Working Tree and ChatGPT Project Workflow Performance Standard


**Status:** Approved


**Decision:** Freshwater Fishing Companion operates in the normal ChatGPT project/chat environment using connected Google Drive and GitHub. ChatGPT Work is not part of the supported project workflow.


GitHub `main` owns committed truth/formal history. Google Drive `Working Source/Current` is the **complete editable repository working tree** and owns all approved uncommitted repository changes, including documentation, source, data, media, configuration, planning, and workstream files. Documentation-only work retains standing commit authority but uses the same Drive-first edit/validation path.


For existing non-native/raw Drive files such as Markdown, canonical working identity is the approved `Working Source/Current` path/name plus verified content rather than chat, transport artifacts, or historical copies. Exact raw-file edit/transport mechanics—including the approved Sediment bridge and its circuit-breaker behavior—are owned by `../PROJECT-RULES.md`; this decision preserves the durable Drive-first authority model rather than duplicating procedure.


Drive structure is intentionally simple: `Working Source` contains only `Current` and `Packages`. Explicitly retained historical/design-reconstruction material lives outside `Working Source` under top-level `Historical Archive`. Normal startup, routine documentation reconciliation, and current source lookup must not traverse or edit `Historical Archive`; it is consulted only for an explicit historical-intent reconstruction, archival-evidence, or archive-integrity task. Historical material never overrides current authority.


Live Working State is the **sole operational continuity/exact-resume surface** for active decisions, review-cycle identity, validation/approval state, defects, GitHub/Drive lineage, and detailed resume context. Under D070 it may also capture material live-chat decisions/constraints immediately as explicitly pending approval when continuity risk warrants preservation. `ACTIVE-CHANGE-LEDGER.md` owns material non-closed carry-forward across workstreams.


`Freshwater Fishing Companion Chat Log.md` is manually maintained by the user and is outside the assistant-run approval, startup, closeout, continuity, and recovery process. It does not gate progression and is not read, written, appended, replaced, or verified as part of routine FCC workflow unless the user explicitly requests a separate Chat Log task.


**New-chat approval continuity remains a durable blocking principle.** Current startup/recovery mechanics are owned by `../PROJECT-RULES.md`; a new chat never overrides an unclosed approval/disposition gate.


Approval/disposition closure requires an explicit user-facing gate receipt. The current receipt fields and stop/progression mechanics are owned by `../PROJECT-RULES.md`.


Review ZIPs remain transport/review artifacts generated from verified Drive Current when needed; they are never working truth. Exact inclusion/exclusion, deletion, and handoff mechanics are owned by `../PROJECT-RULES.md`.


The user's local Git repository remains the review/validation/final-commit surface while Drive Current owns approved uncommitted work. Current review, correction, commit, and closeout mechanics are owned by `../PROJECT-RULES.md`.


Review-cycle lineage must remain deterministic enough to prove starting authority, changed/deleted scope, approval/validation state, and final landed GitHub identity; exact operational tracking belongs to `../PROJECT-RULES.md` and Live Working State.


Routine safety comes from stable authority, complete Drive working state, bounded ownership, targeted validation, exact package identity, changed/deletion-set comparison, and post-write verification. Full-tree reconstruction is reserved for real drift/invalidation.


Documentation structure is deliberately lean: `DECISIONS.md` indexes six domain decision-body files; `../PROJECT-RULES.md` is the single canonical current repository procedural owner; UI standards consolidate into `UI_STANDARD.md`; redundant procedural, continuity, historical, or deferred placeholder documents are retired only after no-loss migration.


**Reason:** The prior workflow accumulated separate documentation paths, ZIP-as-working-state overhead, repeated reconstruction, broad rereads, and temporary automation. A later baseline+delta attempt also departed from the user's intended complete Drive working-copy model. The complete Drive tree plus lean single-owner documentation is easier to reason about and faster to operate.


**Tradeoff / risk:** Maintaining a complete Drive tree can make initial population/large refreshes more expensive with current connector capabilities. That cost is accepted for simpler authority/review semantics. Drift is controlled through starting-SHA/package/changed/deletion-set checks.


**Implementation history:** D068 was implemented and validated during the workflow consolidation that landed at GitHub commit `4e982d84ab6207efacfafe4fa92682046c6240cb`. Current operational workstream/resume status belongs to Live Working State and the active workstream; `ROADMAP.md` owns product order/future direction. This decision records the durable authority model rather than acting as a mutable status owner.


**Deferred trigger:** Revisit representation only if real operation demonstrates the full-tree model itself is materially unworkable. Any future authority-model change requires an explicit new decision.


**Canonical owners:** D068 and D070 preserve durable workflow/governance rationale; `../PROJECT-RULES.md` owns current procedure; root `AGENTS.md` is a routing layer only. D062 remains historical/superseded.


# D070 – Live Working State Sole Operational Continuity and Repository Working State Retirement


**Decision:** Retire repository `docs/WORKING_STATE.md`. The external **Live Working State** is the single operational continuity/exact-resume surface for FCC.


Live Working State owns the active workstream/review-cycle identity, GitHub/Drive lineage needed to resume safely, current approval/validation/defect state, important live constraints, and the exact next action. It also acts as the **live-decision safety net**: the assistant has authority to capture a material live-chat decision or constraint immediately when losing it before the next approval gate would create continuity risk.


Immediate capture does **not** make an unapproved item approved. The live record must preserve state such as **PENDING APPROVAL**, **APPROVED — PENDING DURABLE RECONCILIATION**, or reconciled. Once approved durable meaning is written into the correct repository owner, superseded live detail is compacted rather than retained as append-only history.


No second repository state/resume mirror is maintained. The current startup/preflight sequence is owned by `../PROJECT-RULES.md`; Live Working State remains the single operational continuity/exact-resume surface.


Durable meaning continues to belong to its semantic owner. `ACTIVE-CHANGE-LEDGER.md` remains the formal repository owner of material non-closed cross-workstream carry-forward. `ROADMAP.md` owns product order/future direction. Git/CHANGELOG own landed history. Live Working State is operational continuity, not a substitute durable decision archive.


**Reason:** The retired `docs/WORKING_STATE.md` duplicated Live Working State, created a second synchronization surface, accumulated closed execution history, and developed severe transport/blank-line bloat. The duplicate state file added approval-gate cost and contradiction risk without owning unique durable semantics.


**Implementation requirement:** retirement of `docs/WORKING_STATE.md` must occur only as one coherent governance refactor that preserves all valid current procedure in `../PROJECT-RULES.md`, updates active references, and makes Repository Integrity prohibit the retired path from returning.


**Supersedes:** D038. D068 remains approved except where D070 narrows/replaces its former repository-continuity wording.


**Canonical owners:** D070; `../PROJECT-RULES.md`; root `AGENTS.md` as router; `../ARCHITECTURE.md`; `../PROJECT.md`; `../ROADMAP.md`; `../ACTIVE-CHANGE-LEDGER.md`; Repository Integrity validator; external Live Working State.