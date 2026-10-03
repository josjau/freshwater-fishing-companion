# Freshwater Fishing Companion — Decisions: Workflow, Governance, and Continuity


**Document:** decisions/workflow.md  
**Document Status:** Approved  
**Role:** Canonical durable decision bodies for this ownership domain  
**Migration Baseline:** `af3bffb9995d56f8b9e47236bbadfa481d88cc34`  
**Last Updated:** 2026-10-02


# Purpose


This file owns the full decision bodies listed below. Decision IDs are permanent and remain stable across the documentation decomposition. `../DECISIONS.md` is the compact canonical index.


# D014 – GitHub-Authoritative Local Repository Workflow


GitHub `main` is authoritative for committed production source and committed documentation. Google Drive `Working Source/Current` is the complete editable repository working tree and is authoritative for all approved uncommitted repository changes under D068. GitHub remains the synchronization point for committed history; the local Git repository is the user review/validation and final-commit surface.


For user-facing application work, the local checkout must be verified against the intended GitHub baseline before local validation. Chat memory, a previously proposed file, a downloaded package, or an uncommitted file on another computer is never authoritative content for the active checkout.


All intended repository changes—including documentation-only changes—must first exist in the authoritative Drive working state before GitHub commit. Documentation-only work retains standing commit authority and does not require local browser/user validation, but it no longer bypasses Drive. When local browser/device validation is useful or required, the local checkout is a validation target rather than the authoritative uncommitted owner.


For an already-approved Build Unit, once the exact implementation scope is locked and Planning-to-Build prerequisites pass, production source/data/media/configuration writes and review-candidate creation are authorized by default unless the user explicitly says `wait`, `stop`, `hold`, or otherwise reserves production. This inferred build authorization is bounded to that exact Build Unit scope; it does not authorize scope expansion, Local Final / Commit Candidate Approval, or commit/push. Production/user-facing commit/push still requires separate explicit authorization. Under D068, Drive owns the complete authoritative approved-uncommitted working tree. The first review ZIP for a cycle is compiled from verified GitHub/Drive authority; bounded later candidate revisions may follow the immutable-R1 procedure in `../PROJECT-RULES.md` until **Local Final Approval / Commit Candidate Approval** triggers exact-candidate promotion back into Drive. Review ZIPs never contain `.git`. Documentation-only commits remain standing-authorized when required to keep durable project state current, but they do not override the active-review no-silent-baseline rule: GitHub `main` must not move behind an active local review cycle without explicit disclosure and reconciliation under `../PROJECT-RULES.md`.


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


D070 retires that repository path and keeps one project-level continuation entrypoint in the external Live Working State, with detailed active Build Unit continuity in the external operational audit named by that entrypoint. The permanent principle survives unchanged: **one continuation entrypoint, then follow the named active operational record and canonical ownership paths; do not reconstruct state from chat.**


# D039 – Documentation-Validated Build Unit Closeout


A **Build Unit** is not finally closed until its durable documentation is reconciled into the correct repository owners, required implementation is landed, GitHub is inspected, and applicable validation is complete. Internal discussion/audit/review chat slices are not independent repository-closeout units merely because a chat ends.


During an active Build Unit, exact approved decisions and findings may live in the external temporary audit/workstream record while permanent canonical documents remain at the last finalized Build Unit state. This temporary bounded divergence is deliberate, visible, and must be reconciled before final Build Unit closeout.


Conversation agreement, candidate ZIPs, locally generated files, staged files, or implementation alone do not constitute final Build Unit closeout.


Permanent rule: **close the coherent Build Unit with durable documentation and validation; do not force repository closeout for every chat/review slice.**
# D040 – No Unvalidated Build Unit Transition


The project does not begin a dependent **Build Unit** while the current Build Unit remains unfinalized. Internal audit, implementation, review, and refinement slices may proceed within one Build Unit without separate Git pushes or full closeout gates between slices.


Before moving to a dependent Build Unit, the current Build Unit must be finalized or deliberately parked with its exact approved decisions preserved, implementation/candidate state identified, validation state known, and exact resume/carry-forward recorded. Finalized Build Units receive the durable documentation/GitHub/runtime closeout required by D039 and `../PROJECT-RULES.md`.


Permanent rule: **finish or deliberately park the coherent Build Unit; do not confuse chat-slice boundaries with repository-release boundaries.**
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


**Supersession:** D068 replaces ZIP-as-working-state and the documentation-direct-to-GitHub bypass with a complete editable Drive working tree for durable repository material. Review ZIPs are transport only and durable documentation is Drive-first. Its former repository Working State continuity clause was later superseded/refined by D070: Live Working State is the project-level resume/index, while a named external active audit may hold detailed Build Unit continuity outside the repo tree.


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


GitHub `main` owns committed truth/formal history and contains only durable project/repository material. Google Drive `Working Source/Current` is the **complete editable repository working tree** and owns all approved uncommitted **durable repository** changes, including durable documentation, source, data, media, configuration, planning, and workstream files. Temporary operational audits, decision registers, candidate tracking notes, Chat Logs, and similar working-only artifacts live outside the repo tree and never become Git content merely because they support the workflow. Documentation-only durable repository work still uses the Drive-first edit/validation path.


For existing non-native/raw Drive files such as Markdown, canonical working identity is the approved `Working Source/Current` path/name plus verified content rather than chat, transport artifacts, or historical copies. Exact raw-file edit/transport mechanics—including the approved Sediment bridge and its circuit-breaker behavior—are owned by `../PROJECT-RULES.md`; this decision preserves the durable Drive-first authority model rather than duplicating procedure.


Drive structure is intentionally simple: `Working Source` contains only `Current` and `Packages`. Explicitly retained historical/design-reconstruction material lives outside `Working Source` under top-level `Historical Archive`. Normal startup, routine documentation reconciliation, and current source lookup must not traverse or edit `Historical Archive`; it is consulted only for an explicit historical-intent reconstruction, archival-evidence, or archive-integrity task. Historical material never overrides current authority.


Live Working State is the sole **project-level operational resume/index**: active Build Unit/workstream identity, GitHub/Drive lineage, material gate state, current candidate pointer, and exact next action. Detailed current Build Unit decision/traceability state belongs to one external temporary audit/workstream record outside `Working Source/Current`. That record captures exact approved decision text, findings/dispositions, slice status, candidate lineage, and unresolved discussion state. `ACTIVE-CHANGE-LEDGER.md` owns material non-closed carry-forward across workstreams.


`Freshwater Fishing Companion Chat Log.md` is manually maintained by the user and is outside the assistant-run approval, startup, closeout, continuity, and recovery process. It does not gate progression and is not read, written, appended, replaced, or verified as part of routine FCC workflow unless the user explicitly requests a separate Chat Log task.


**New-chat approval continuity remains a durable blocking principle.** Current startup/recovery mechanics are owned by `../PROJECT-RULES.md`; a new chat never overrides an unclosed approval/disposition gate.


Approval/disposition closure requires an explicit user-facing gate receipt. The current receipt fields and stop/progression mechanics are owned by `../PROJECT-RULES.md`.


**Build authorization defaults to proceed after a successful Planning-to-Build gate for an already-approved, exact locked Build Unit scope unless the user has explicitly instructed `wait`, `stop`, `hold`, or otherwise reserved production.** This removes a redundant second approval pause after planning decisions are already approved while preserving hard boundaries around scope expansion, Local Final / Commit Candidate Approval, commit/push, and final closeout.


Review ZIPs remain bounded transport/review artifacts rather than general repository authority. R1 is compiled from verified GitHub/Drive authority and becomes the immutable baseline for that active review cycle. Within an unchanged cycle, later candidate revisions may be built from R1 plus the cumulative audit-recorded corrections instead of promoting every unapproved visual/browser correction into Drive Current. Ordinary review packages are cumulative and use descriptive `FCC-<workstream>-<Build-Unit>-R<n>.zip` naming; they carry only the durable repository files needed to reproduce the candidate, while operational records stay excluded. Local Final uses a fresh `...-FINAL-LOCAL.zip` containing the complete intended commit payload, including durable documentation that must land with the implementation, with deletions supplied separately. Conditional mobile correction packages use `...-MOBILE-R<n>.zip` and `...-MOBILE-FINAL.zip` only when actual-device validation finds a repository defect. Exact lineage, retention, invalidation, promotion, inclusion/exclusion, deletion, and handoff mechanics are owned by `../PROJECT-RULES.md`.


The user's local Git repository remains the review/validation/final-commit surface while Drive Current owns approved uncommitted durable repository work. An active review candidate may advance through R1/R2+ and receive slice/candidate acceptance without production/source promotion into Drive Current. The promotion boundary is **Local Final Approval / Commit Candidate Approval**: the exact frozen candidate is then promoted/read back/verified in Drive Current, durable repository documentation needed to describe the landing state is reconciled, and a fresh Final Local ZIP plus explicit Commit Preview is handed to the user. After the user lands that candidate in GitHub and the commit/CI/Pages scope is verified, deployed actual-mobile validation remains open. Actual-mobile review is validation-first: if the landed Final Local state passes on the real device, no mobile correction ZIP, MOBILE-FINAL ZIP, or additional Git commit is created. Only an actual deployed-device defect that requires repository changes starts a bounded mobile correction candidate/promote-on-local-final cycle against the new GitHub baseline; a final mobile correction package exists only when such a correction is ready to commit. Actual-Mobile Final Approval then closes the Build Unit; routine closeout should not require an additional bookkeeping/documentation commit because durable docs should have traveled with the relevant product commit. Current review, correction, promotion, commit-preview, mobile-validation, and closeout mechanics are owned by `../PROJECT-RULES.md`.


Final handoff is **preflight-first rather than package-first**. Before Final Local is frozen or reissued, every directly applicable validation/check that can reasonably run in the current environment is exercised against the candidate. A failure triggers one bounded recovery sweep across the affected validation surface: record the failure once, collect related corrections, rerun the affected validation, and only then rebuild/reissue the candidate. Defect-level recovery detail remains in the external active audit/workstream; Live Working State changes only at material state transitions. This preserves strict validation while reducing avoidable user waiting, connector churn, and repeated package application.


Review-cycle lineage must remain deterministic enough to prove starting authority, immutable R1 identity/hash, cumulative candidate corrections, changed/deleted scope, approval/validation state, approved-candidate promotion, and final landed GitHub identity; exact detailed tracking belongs to the external active audit/workstream record under `../PROJECT-RULES.md`, while Live Working State keeps the compact project-level pointer/resume.


Routine safety comes from stable authority, complete Drive working state, bounded ownership, targeted validation, exact package identity, changed/deletion-set comparison, and post-write verification. Full-tree reconstruction is reserved for real drift/invalidation.


Documentation structure is deliberately lean: `DECISIONS.md` indexes six domain decision-body files; `../PROJECT-RULES.md` is the single canonical current repository procedural owner; UI standards consolidate into `UI_STANDARD.md`; redundant procedural, continuity, historical, or deferred placeholder documents are retired only after no-loss migration.


**Reason:** The prior workflow accumulated separate documentation paths, ZIP-as-working-state overhead, repeated reconstruction, broad rereads, temporary automation, and redundant approval pauses after an already-approved scope was ready to build. The complete Drive tree remains the simpler authority model for approved uncommitted work. Runtime/browser review demonstrated that forcing every unapproved R2/R3 visual correction through Drive promotion adds avoidable connector and documentation latency, while requiring a second build-authorization prompt after a successful Planning-to-Build gate adds no useful control when the user has not asked to wait. An immutable R1 plus cumulative candidate-delta loop preserves deterministic lineage, and the wait/stop/hold override plus separate Local Final and commit/push approvals preserve the meaningful control boundaries.


**Tradeoff / risk:** Maintaining a complete Drive tree can make initial population/large refreshes more expensive with current connector capabilities. Candidate-package iteration adds a temporary second state, so it is tightly bounded to one active review cycle: R1 is immutable, cumulative corrections are recorded, obsolete candidates are disposable, and any authority/scope drift invalidates the cycle. Drive remains the approved-uncommitted owner, and approved candidates must be promoted/read back before progression.


**Implementation history:** D068 was implemented and validated during the workflow consolidation that landed at GitHub commit `4e982d84ab6207efacfafe4fa92682046c6240cb`. Current project-level resume status belongs to Live Working State; detailed active Build Unit traceability belongs to the external temporary audit/workstream record; `ROADMAP.md` owns product order/future direction. This decision records the durable authority model rather than acting as a mutable status owner.


**Deferred trigger:** Revisit representation only if real operation demonstrates the full-tree model itself is materially unworkable. Any future authority-model change requires an explicit new decision.


**Canonical owners:** D068 and D070 preserve durable workflow/governance rationale; `../PROJECT-RULES.md` owns current procedure; root `AGENTS.md` is a routing layer only. D062 remains historical/superseded.


# D070 – Live Working State Project Resume and External Active Workstream Continuity


**Decision:** Repository `docs/WORKING_STATE.md` remains retired. The external **Live Working State** is the single project-level operational resume/index for FCC, while one external temporary active audit/workstream record may own detailed continuity for the current Build Unit. Neither is repository authority.


Live Working State owns the active Build Unit/workstream identity, GitHub/Drive lineage needed to resume safely, material approval/validation state, current candidate pointer, and exact next action. It stays compact and points to the detailed active audit when one exists rather than duplicating its decision register.


The external active audit/workstream record owns the current Build Unit's exact approved decision text, findings and dispositions, slice/checkpoint status, candidate revision lineage, and unresolved discussion state. Approved decisions are captured when made; end-of-chat consolidation verifies coverage and resume state but does not reconstruct or paraphrase approved decisions as a substitute for the operative text.


Immediate continuity capture does **not** turn discussion into approval. Unresolved material may be recorded as `OPEN`/`PENDING`, and ordinary approvals default to `APPROVED / REVISION ALLOWED` unless the user explicitly locks them. Ambiguous approvals are clarified or confirmed before they are recorded as approved.


The active audit is operational-only: it lives outside `Working Source/Current`, is excluded from review ZIPs, and is never committed to Git. At final Build Unit reconciliation, its durable decisions/carry-forward are mapped to the correct repository owners, then the temporary record is retired/deleted once no required meaning would be lost.


No second **repository** state/resume mirror is maintained. The current startup/preflight sequence is owned by `../PROJECT-RULES.md`; Live Working State remains the one project-level continuation entrypoint, which then directs the next chat to the active external audit and applicable durable owners.


Durable meaning continues to belong to its semantic owner. `ACTIVE-CHANGE-LEDGER.md` remains the repository owner of material non-closed cross-workstream carry-forward. `ROADMAP.md` owns product order/future direction. Git/CHANGELOG own landed history. Operational records preserve continuity but do not replace durable canonical owners.


**Reason:** A single compact project resume avoids the duplicate-repository-state failure that caused the retired `docs/WORKING_STATE.md` to bloat, while a separate external Build Unit record prevents abrupt chat limits from losing exact decisions or forcing expensive full canonical documentation gates after every approval. Keeping the temporary record outside the repo also prevents working-process artifacts from polluting Git history or review ZIPs.


**Supersedes/refines:** D038 remains superseded. D068 remains approved with the durable/operational separation above. This refinement replaces D070's former claim that Live Working State itself must contain all detailed operational continuity.


**Canonical owners:** D070; `../PROJECT-RULES.md`; root `AGENTS.md` as router; `../ARCHITECTURE.md`; `../PROJECT.md`; `../ROADMAP.md`; `../ACTIVE-CHANGE-LEDGER.md`; Repository Integrity validator; external Live Working State; external active Build Unit audit/workstream record when one exists.
