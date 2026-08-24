# Freshwater Fishing Companion

**Document:** DEVELOPMENT_WORKFLOW.md  
**Document Revision:** 1.3.0  
**Document Status:** Approved  
**Last Updated:** 2026-08-24

# Purpose

This document defines the permanent development, editing, validation, documentation, and delivery workflow for Freshwater Fishing Companion. Its purpose is to make project execution reproducible across new ChatGPT sessions without requiring prior conversation history.

# Source of Truth

GitHub `main` is authoritative for committed production source and formally reconciled documentation. Each computer has its own local checkout; GitHub `origin/main` is the synchronization point between them.

Repository:

    josjau/freshwater-fishing-companion

Before changing an existing file:

1. Confirm repository root, branch, working-tree status, local `HEAD`, local `origin/main`, and remote.
2. Fetch/pull as needed through the normal GitHub Desktop workflow and verify the local checkout matches the intended GitHub baseline.
3. Base work only on that verified local version.
4. Never assume a previously proposed, staged, downloaded, or uncommitted version was implemented or synchronized.
5. Never use chat memory as authoritative file content.
6. After a push, re-fetch/verify the resulting GitHub state before considering the work complete.

# Local Repository / Cross-Computer Operating Model

The normal Work/Codex workflow is direct local-repository work:

1. Each computer uses its own GitHub Desktop checkout.
2. Codex reads and edits the files in the active local checkout.
3. `docs/WORKING_STATE.md` records the live local workstream, status, gates, and exact resume point.
4. Use one chat per coherent outcome/workstream.
5. Only one chat may be write-authorized against the same checkout at a time. Other chats may perform bounded read-only research/analysis when they do not edit the repository or create competing state.
6. The user reviews the complete local diff in GitHub Desktop.
7. Use one deliberate closeout commit/push for a coherent reviewed segment when practical. A required cross-computer/session-preservation checkpoint is a valid additional commit boundary.
8. Never begin on another computer while required work exists only as uncommitted files on the first. Commit/push the reviewed checkpoint or restore a clean tree and preserve the exact state in the still-authoritative continuity layer.
9. On the receiving computer, fetch/pull, confirm a clean tree, and verify `HEAD` matches the expected GitHub checkpoint before opening substantive work.
10. Continue on `main` unless a concrete future need—such as concurrent development or a PWA staging/preview workflow—justifies a branch decision.

Local browser validation uses a localhost development server. `file://` is not the normal validation path as the project advances toward PWA behavior. Hosted HTTPS and actual-mobile validation remain required where the applicable acceptance gate calls for them.

## Workflow-transition authority

Until the repository-backed workflow is verified on both computers and a fresh chat successfully recovers from local repository documentation alone, the Google Working State remains authoritative for any migration delta not yet reconciled into GitHub. During the explicitly designated recovery test, the fresh chat must first recover and report state from repository documentation without consulting Google; external comparison may occur only after the test result is established. Do not retire/freeze Google as the active continuity source or resume Fish work before explicit transition closure.

# Repository Handoff

`HANDOFF.md` is the compact formal recovery map. `WORKING_STATE.md` is the first-read live local current-state and exact-resume record. Both point to governing documents and must remain role-bounded rather than duplicating them.

A new session performs repository preflight, reads `WORKING_STATE.md`, `HANDOFF.md`, the Active Change Ledger, and the governing files for its scope before proposing project changes.

# Continuous Documentation State

Repository documentation must describe what is actually true on `main` after the most recent meaningful repository action. Documentation is not deferred until final closeout when the implementation state has already changed.

Use these implementation-state terms consistently when they apply:

- **Planned** — approved scope exists but implementation has not started.
- **In Progress** — implementation work is actively being prepared or only partially present.
- **Implemented / Unvalidated** — the intended implementation is present on `main`, but required post-push runtime, visual, relationship, media, or regression validation has not passed.
- **Partially Validated** — some required validation has passed, but remaining checks, failures, or corrections still exist.
- **Validated** — all required implementation and validation checks for the stated scope have passed.
- **Finalized** — the validated implementation and its governing/current-state documentation have been reconciled, pushed, re-fetched, and verified.

After every meaningful implementation, correction, or validation push:

1. Record what is now present on `main`.
2. Record what remains unvalidated.
3. Record known failures immediately rather than waiting for final closeout.
4. Update the active workstream and validation documents when their state changed.
5. Update `HANDOFF.md` whenever the repository continuation point, current milestone, known defect, or next action materially changed.
6. Update `CHANGELOG.md` when meaningful implementation or corrective behavior landed.
7. Update governing documents immediately when a permanent rule or durable decision changed.

`WORKING_STATE.md` must also be updated at material local decision, changed-scope, implementation, validation, deferment, and resume-point boundaries. Durable content is then promoted to the correct canonical owner at a formal checkpoint.

The repository must be sufficient to reconstruct the current state after an unexpected chat/session boundary. The user should not have to supply missing recent history that could have been recorded locally or with the preceding checkpoint push.

Final closeout remains required, but closeout is a reconciliation/verification step rather than the first time documentation catches up with implementation.

# Default Local Delivery Method

Direct edits in the verified local checkout are the default implementation workflow.

The user-facing review artifact is the complete GitHub Desktop diff for the coherent workstream. This does not authorize broad edits: semantic change scope remains limited to the approved work, and unrelated differences are failures unless separately approved.

For every changed existing file:

- derive the edit from the verified local/GitHub baseline,
- preserve unrelated content and behavior,
- make only the approved changes,
- inspect the complete resulting file where truncation or structural risk exists,
- review the complete diff before commit.

For coherent multi-file or asset-heavy work:

- keep related source, documentation, validation changes, and approved imagery in one reviewable local change set when practical,
- identify changed, new, moved, archived, and removed files clearly,
- do not add delivery-only manifests, staging notes, or package READMEs to the repository unless explicitly approved as permanent artifacts,
- target one coherent commit/push when implementation and truthful documentation can safely travel together,
- never reduce commit count by leaving current-state documentation stale.

ZIP delivery remains an exceptional fallback for a blocked local/direct delivery path, not the normal workflow.

# Commit Economy

Use as few commits as practical for a coherent section while preserving reviewability, validation boundaries, rollback safety, and accurate current-state documentation.

Preferred pattern:

1. Avoid discussion/planning commits unless a durable decision must be preserved before implementation.
2. Prefer one coherent implementation commit when implementation and truthful documentation can safely travel together.
3. Use a separate validation/closeout documentation commit only when later runtime, deployment, user validation, or correction changes the implementation state.
4. Avoid separate commits for every small file or documentation adjustment when those changes can safely be grouped.
5. A third or additional commit within one section requires a concrete reason such as a discovered defect, required correction, validation-driven state change, or session-preservation need.
6. Never reduce commit count by leaving governing or current-state documentation stale.
7. Never make a commit so broad that reviewability, rollback clarity, or validation boundaries are materially weakened.

Permanent priority when these goals conflict:

> Preserve correct recoverable project state first; minimize commit count second.

# Production Write Approval Gate

Production assets and source require explicit user authorization for the specific local write scope. This includes, but is not limited to:

- images and other media,
- JavaScript,
- CSS,
- HTML,
- application data files,
- configuration files,
- other non-Markdown production files.

Default workflow for those files:

1. Settle and obtain approval for the exact production scope.
2. Edit the verified local checkout only within that scope.
3. Validate the coherent local result and present the complete GitHub Desktop diff for review.
4. Do not commit or push unless the user explicitly authorizes that action.
5. After the user/authorized push, verify the actual commit and affected files on GitHub.

A prior approval for one production update does not grant blanket approval for later production writes. Ask again before each new write scope unless the user explicitly changes this rule for the applicable session or action.

# Delivery Fallback

For project changes that are already authorized, use this fallback only when the normal local/direct delivery path fails:

1. Attempt the authorized normal local/direct path once.
2. If it fails, do not repeatedly retry the same blocked path without new evidence.
3. Package the exact intended change as a production ZIP that preserves repository-relative paths and contains only the authorized permanent repository files.
4. Provide the ZIP to the user for manual application through the normal local repository/GitHub Desktop workflow.
5. After the user confirms the ZIP was applied and pushed, re-fetch/verify the affected files from authoritative GitHub `main`.
6. Validate that GitHub matches the intended package before treating the change as complete.

This fallback does **not** expand direct-write authority. Production source, data, media, CSS, HTML, JavaScript, configuration, and other protected project files remain subject to the Production Write Approval Gate above. A failed write never converts an unapproved production change into an authorized one.

# Decision-to-Workstream Continuity

When a decision is finalized during an active build segment:

1. Incorporate the decision into the active implementation plan immediately.
2. Identify every governing/status/data-model document affected.
3. Update those documents as part of the active segment rather than waiting for the user to request documentation separately.
4. Include the implementation and required documentation in the same coherent local change set whenever practical.
5. Do not split a coherent segment into repeated source-only and documentation-only pushes merely because the decisions were discussed at different moments.
6. If a decision is deliberately parked rather than implemented now, document it in the same active workstream/checkpoint.

The user should not have to repeatedly ask for documentation that is a foreseeable consequence of an approved in-stream decision.

# Durable Decision Context

A durable decision is not sufficiently documented when the repository records only the final outcome but omits the context needed to interpret that outcome later.

For every material architectural, product, data-model, workflow, UI, deferment, rejection, or structural decision, the canonical documentation must preserve at least:

1. **Decision** — what was approved.
2. **Reason** — why the project chose it, including the material tradeoff, risk, or maintenance burden being avoided or accepted.
3. **Current implementation status** — for example Current, Approved / Not Implemented, Deferred, Superseded, or other applicable state.
4. **Deferred/future trigger** — the milestone, architecture gate, condition, evidence, or dependency that should cause the decision to be revisited.
5. **Canonical owner/document** — the governing file that owns the durable interpretation after reconciliation.

When the project deliberately decides **not** to make a structural change yet, record that non-action when it is architecturally meaningful. An absent implementation or absent directory structure must not later be interpreted as forgotten, rejected, or obsolete when it was deliberately deferred.

Deferred candidates must be labeled as deferred candidates rather than loosely described as historical or inactive when that wording could imply abandonment.

If the decision is distributed across several documents, `DECISIONS.md` owns the durable decision summary and the relevant architecture, style, data-model, workstream, or handoff documents carry only the context needed for their roles.

Permanent principle: **record enough decision context that a future session can recover both what was decided and why without relying on chat history.**

# Session-End Documentation Gate

When the user indicates that a work session is ending — including wording such as `end session`, `stop here`, `continue tomorrow`, or an equivalent clear ending signal — normal implementation/audit progression stops and a documentation reconciliation occurs before the session is treated as closed.

This gate applies even when the current section or milestone remains open.

Before session end, repository documentation must preserve, as applicable:

1. approved decisions made during the session,
2. approved changes or fixes that have not yet been implemented,
3. relevant rejected or deferred alternatives when the reason matters later,
4. newly discovered defects, contradictions, risks, or audit findings,
5. actual implementation and validation state — distinguishing what is on `main`, what is approved only, what remains unvalidated, and what has not started,
6. unresolved decisions clearly marked unresolved rather than silently decided,
7. the exact continuation point and next intended action.

Ownership rules:

- durable architecture/product/workflow decisions belong in `DECISIONS.md` when canonical synchronization occurs,
- operational workflow rules belong in `DEVELOPMENT_WORKFLOW.md`,
- domain decisions belong in their relevant data-model/governing documents,
- active section/audit state belongs in the active workstream record,
- `WORKING_STATE.md` owns the live local status and exact resume point,
- `HANDOFF.md` owns the first-read continuation map,
- Handoff must not become the sole canonical owner of durable decisions.

If approved decisions are clear, the session-end documentation reconciliation may be performed automatically. If documentation would require interpreting an unresolved discussion as an approved decision, provide a concise decision summary or obtain the minimum necessary clarification before recording it as approved.

Permanent principle:

> Never guess merely to finish session documentation, but never leave clearly approved material only in chat history because the section is unfinished.

A session-preservation documentation commit is an explicitly justified exception to normal commit minimization.

# Repository Artifact Retirement and Archival

`archive/` at repository root is the single canonical repository archive. `archive/README.md` owns the directory-level archive policy; D033/D034 own the durable architectural decision.

Whole-file replacement does **not** create an archive obligation by itself. Git history preserves ordinary prior committed versions of JavaScript, CSS, HTML, data, Markdown, and other tracked files. Copying every previous revision into `archive/` would duplicate Git history and create stale authoritative-looking files.

Whenever implementation, migration, cleanup, or closeout retires an existing repository artifact, explicitly classify it as one of:

1. **GIT HISTORY ONLY** — an ordinary prior revision; no archive copy is created.
2. **ARCHIVE** — an independently useful historical/audit/provenance/reconstruction artifact that should remain directly discoverable under `archive/`.
3. **DELETE** — no continuing repository value beyond Git history.

Examples of appropriate archive material include completed package manifests and package-specific validation records, audit logs retained for provenance, superseded handoffs/workstreams that would mislead if left active, and historical design/reference artifacts with reconstruction or design-lineage value.

Do not archive every old source/document revision, temporary `.tmp`/`.bak` files with no continuing value, accidental duplicate trees, or deferred candidates that remain part of future product planning.

If the disposition is **ARCHIVE**, closeout is incomplete until:

1. the correct existing archive category is selected, or a new category is created only because a real artifact now requires it,
2. the archive copy/path is created before removal of the active copy when loss risk exists,
3. the archived path is verified on authoritative GitHub `main`,
4. the former active/current path is removed or clearly no longer masquerades as current,
5. the archival action and reason are recorded in the relevant workstream/decision/closeout documentation.

Additional archive categories are not created speculatively.

Permanent principle: **Git history preserves ordinary revisions; the repository archive preserves independently useful historical artifacts.**

# Local Edit Integrity

For an existing file:

1. Verify the local checkout against the intended GitHub baseline.
2. Define the authorized edit scope.
3. Apply only the approved changes.
4. Inspect the complete resulting file where structural/truncation risk exists.
5. Diff the local result against the verified baseline.
6. Any unrelated diff is a failure unless it was explicitly authorized.
7. Do not silently fold unrelated cleanup, optimization, or redesign into the edit.

Mature approved UI behavior is a protected regression target.

# Large-Rewrite / Replacement-Integrity Gate

Before any local documentation change set containing an existing file is presented for commit, a mechanical preservation check is mandatory.

The gate compares each changed documentation file against the exact baseline used to create it and fails the change set before review/commit if any of the following occurs without explicit authorization:

- an existing Markdown heading disappears,
- the replacement shrinks by more than 10 percent of baseline line count,
- deleted lines exceed 10 percent of baseline line count,
- a large rewrite is detected even though the authorized scope is targeted,
- a delivery-only artifact appears in the repository.

A deliberate large documentation rewrite may bypass the size thresholds only when the user explicitly approves that rewrite before the file is generated. Heading removal still requires explicit authorization.

For repository-side checking, `tools/validate_replacement_integrity.py` provides the same conservative guard against accidental document truncation by comparing working-tree Markdown files with `HEAD`. This validator is a safety net, not a substitute for deriving replacements from the latest verified GitHub contents.

For an exceptional ZIP fallback, the equivalent baseline comparison must also run before the ZIP is created. A change set that fails the gate must not be committed or delivered.

# Local and Post-Push Integrity Validation

Every local file write must be validated before commit, and every pushed file must be validated again from the authoritative remote repository. A successful edit, commit, or push response alone is not sufficient evidence that the file is intact.

This rule applies to:

- Codex local repository writes,
- user commits/pushes through GitHub Desktop,
- corrective/restoration writes,
- any other workflow that changes an existing or newly created repository file.

After local writes and before review/commit:

1. Confirm each intended file exists and is non-empty unless empty was explicitly intended.
2. Inspect the complete diff against the verified baseline.
3. Verify the beginning/end and every approved inserted/replaced section where truncation risk exists.
4. Confirm unrelated headings/content remain preserved.
5. Run applicable deterministic validation.

After push:

1. Re-fetch the written file from the target branch/commit.
2. Confirm the file is non-empty unless an empty file was explicitly intended.
3. Confirm the returned blob SHA matches the new repository state.
4. Verify the beginning and end of the file so accidental prefix/tail loss is detected.
5. Verify every approved inserted/replaced section is present.
6. For existing files, compare the post-write file against the exact pre-write GitHub baseline and confirm unrelated headings/content remain preserved.
7. Treat any unexpected shrinkage, missing heading, missing tail, empty content, unrelated deletion, or malformed replacement as a failed write.
8. When tool output is display-truncated, use targeted line-range/chunk fetches or other repository comparisons to validate the omitted regions; never interpret display truncation as proof that repository content is missing.
9. If validation fails, stop further work on that file, restore from the immediately preceding authoritative GitHub version, reapply only the approved change, and repeat the full post-write validation.
10. Do not mark the file, block, segment, or documentation closeout complete until the post-write integrity validation passes.

For a targeted edit, the validation should confirm both sides of the change: the intended new content is present and previously existing unrelated content remains intact.

The post-push gate is mandatory even when local integrity checks passed. Local checks prevent bad commits; post-push checks prove the authoritative repository received the intended complete file.

# User Repository Workflow

The user normally updates the repository through GitHub Desktop.

Sequence:

1. Perform repository preflight and verify the intended GitHub baseline.
2. Read Working State, Handoff, the Active Change Ledger, architecture/standards, and scope-specific owners.
3. Plan and obtain approval for the workstream scope.
4. Edit the local repository directly.
5. Update required current-state/governing documentation in the same coherent local change set when practical.
6. Run applicable local integrity, syntax, relationship, and repository validation.
7. User reviews the complete GitHub Desktop diff.
8. User commits/pushes, or explicitly authorizes the assistant to commit/push the reviewed checkpoint.
9. Verify the commit and affected files on GitHub.
10. Apply the Live-Site Validation Gate when the change affects runtime or user-visible behavior.
11. Record each meaningful validation result or known failure in Working State and the applicable validation/governing owner.
12. If validation requires corrections, implement/review them coherently and repeat the affected checks.
13. Only then mark the session/module/section finalized.

Avoid unnecessary pushes and deployments, but do not trade fewer pushes for incomplete validation or stale documentation.

# Live-Site Validation Gate

Live-site validation is mandatory before final validation/closeout for any change that affects runtime or user-visible behavior, including HTML, CSS, JavaScript, application data rendered in the UI, navigation, search, media presentation, or connected-knowledge behavior. Documentation work does not substitute for this gate.

Required sequence for an applicable change:

1. Land the reviewed implementation on authoritative GitHub `main`.
2. Re-fetch and verify the actual commit/files from GitHub.
3. Complete applicable static, syntax, relationship, repository-integrity, and other non-live checks.
4. Validate the deployed/live site for the changed behavior and relevant regression paths.
5. Record the live-site result and any failures in the active workstream/current-state documentation.
6. Reconcile closeout documentation and request/record any required user closure approval.
7. Only then mark the implementation/workstream `Validated`, `Finalized`, or `Closed`.

If the assistant cannot directly exercise the live site/browser in the current environment, the implementation remains `Implemented / Unvalidated` or `Partially Validated` until the user or another authorized tester confirms the live-site result. In that case, provide a concise scope-specific validation checklist; do not silently skip the gate.

Live validation should cover the changed feature plus the directly affected navigation, rendering, responsive presentation, browser-console/runtime behavior, references/assets, and connected reverse-navigation/search behavior that are material to the change. Do not expand the checklist into unrelated site-wide retesting unless the change is cross-cutting.

A live-site failure blocks finalization. Record the failure, correct it, re-push/re-verify as needed, and repeat the affected live checks before closeout.

Permanent sequence for UI/runtime-affecting work:

> GitHub implementation → post-push/static validation → live-site validation → documentation/closure reconciliation.

# Module Procedure

## Orient

Review the latest:

- `HANDOFF.md`
- Relevant source files
- `ARCHITECTURE.md`
- `STYLE_GUIDE.md`
- `DECISIONS.md`
- `MEDIA_GUIDE.md` when media is involved
- Relevant data-model documents
- Current milestone/roadmap state

## Evaluate

Before implementation, check:

- Architectural fit
- Existing standards and validated workflows
- Simpler alternatives
- Extensibility
- Duplicate capability or source of truth
- Unnecessary complexity
- Mobile usability
- Page length and repeated content
- GitHub Pages storage impact
- Regression risk
- Rework cost compared with expected benefit

Recommend a materially better design before implementation. Do not agree automatically with a weaker implementation.

## Plan

Identify:

- Existing files to edit
- New files to add
- Files to archive/remove
- Data ownership
- Media requirements
- UI impact
- Regression checks
- Validation criteria
- Documentation that must change with the implementation state
- Documentation that must change again at final closeout

## Build

Create all required implementation files, documentation, and media for the approved module.

When original diagrams are appropriate, create the needed images instead of leaving placeholders simply to avoid asset work.

For Tackle recognition-media work, `MEDIA_GUIDE.md`'s Tackle Media Generation Gate is mandatory. A new or replacement Tackle recognition asset must not enter the reviewed local change set until it has passed the real-photo search, geometry verification, current-library visual comparison, mobile-recognition, licensing/provenance, format, and style checks defined there.

## Validate

Validate as applicable:

- Syntax
- File paths
- Data relationships
- Navigation
- Existing related features
- Mobile layout
- Media rendering
- Media visual-style conformity and recognition quality
- Accessibility
- Runtime/console behavior
- Storage footprint for media work

A failed validation criterion changes repository status immediately. Record the failure before proceeding with unrelated expansion work.

## Review

Present:

- Complete GitHub Desktop diff/file list
- New, changed, moved, archived, and removed files
- Required governing/status documentation
- Validation results and remaining gates
- Removal/archive instructions when needed
- Validation checklist in chat or a permanent workstream document, not as a temporary repository-root artifact

## Commit and Verify

The user normally commits and pushes the reviewed local change set through GitHub Desktop unless the current session explicitly authorizes the assistant to commit/push after review.

After push or authorized direct commit:

- Verify the actual commit.
- Verify the affected files on `main`.
- Apply the mandatory Post-Write Integrity Validation gate to every written file.
- Do not assume local/staged work reached GitHub.
- Rule out GitHub Pages deployment lag before altering otherwise-correct source.
- Confirm `WORKING_STATE.md`, the Active Change Ledger, and Handoff accurately describe what is now on `main`; correct stale status before starting another build segment.

# Documentation Closeout

Documentation is part of the workstream, not an afterthought.

A session, module, or section is not finalized until all relevant documentation has been updated and validated in GitHub.

Closeout sequence:

1. Identify all decisions, current-state changes, deferred work, known failures, corrections, and open issues produced by the segment.
2. Verify the local documentation baseline against GitHub.
3. Reconcile `WORKING_STATE.md`, affected governing documents, the Active Change Ledger, and `HANDOFF.md`.
4. Classify every repository artifact retired by the segment as **GIT HISTORY ONLY**, **ARCHIVE**, or **DELETE**; complete and verify any required archival move before closeout.
5. Present the complete coherent documentation diff for review.
6. User reviews, commits, and pushes, or explicitly authorizes the assistant to commit/push the reviewed documentation checkpoint.
7. Verify the actual GitHub files after push using the mandatory Local and Post-Push Integrity Validation gate.
8. Confirm that Planned, In Progress, Implemented / Unvalidated, Partially Validated, Validated, Finalized, Approved / Not Implemented, and Open states are represented accurately where applicable.
9. Only then mark the segment finalized.

Conversation agreement, local files, staged files, preflight checks, or implementation alone do not satisfy this closeout rule.

# No Unvalidated Transition

Do not begin a new build segment while the current segment remains unfinalized.

If work remains unresolved, either:

- resolve it before moving on, or
- deliberately park it, document its context/status, and reach a clean stopping point.

Do not leave half-finalized areas behind while starting new build work.

# Cross-Segment Discussion Capture

Project-wide questions raised during an active segment are not automatically side conversations.

If an off-segment discussion produces a meaningful architecture, product, data-model, workflow, UI, future-feature, deferment, rejection, or other durable decision, treat it with the same documentation discipline as an in-segment discussion.

Classify the outcome as appropriate:

- **Build Now**
- **Parking Lot**
- **Reject**
- **Open**

Update the governing documentation before closeout, and update active status documentation immediately when the outcome changes the current continuation point.

When a substantial off-segment discussion would unnecessarily interrupt coherent active work, the technical lead may recommend parking it until a clean stopping point. Record enough context that the topic cannot be lost. If the issue materially affects the active implementation, discuss it immediately.

# Permanent-Standard Rule

Permanent standards must live in repository documentation, not only in chat history.

When a permanent standard is agreed:

1. Add it to the correct governing document.
2. Add an architectural decision when it has long-term structural impact.
3. Update cross-references and `HANDOFF.md` when current state or future work changes.
4. Include those documentation changes with the active coherent local change set when practical.
5. Verify the documentation after push using the mandatory Local and Post-Push Integrity Validation gate.

A new chat should be able to reconstruct the project's operating rules and current implementation state from GitHub alone.

# Change Classification

## Build Now

Required for correctness/current implementation, foundational architecture/data, prevention of foreseeable rework, meaningful simplification of current implementation, or repair of a genuine defect.

Key test: **Does this need to exist before we can safely continue building?**

## Parking Lot

Valuable and preserved, but not a dependency of the current milestone or module. Good idea, wrong time.

## Reject

Conflicts with the mission, duplicates capability without sufficient benefit, violates architecture, or adds disproportionate maintenance/UX/infrastructure complexity.

## Open

Meaningful unresolved issue that must remain visible with enough context to resume.

# Decision Precedence

GitHub represents the currently documented project baseline. A newly discussed idea does not supersede an older approved decision merely because it is newer.

Materially disruptive changes require explicit comparison of the old approach, proposed approach, expected gain, rework, affected flows, regression risk, and simpler alternatives. Small gains normally do not justify substantial rework of validated functionality.

Once a revised decision is finalized, update GitHub so the repository again becomes the authoritative handoff baseline.

# Command Presentation Standard

Any command the user is expected to run or copy/paste must be placed in a fenced code block. Do not bury executable commands inside prose or inline code when the user needs to interact with them directly.

# User-Performed Manual-Edit Exception

Direct local edits are the default.

If the user explicitly asks for a manual targeted edit:

- Give exact filename.
- Identify exact block.
- Give exact replacement.
- State insertion point.
- State expected result.
- Give a validation checkpoint.

# No-Churn Rule

Before editing, reconcile:

- Approved architecture
- Latest GitHub source
- Related logic and data contracts
- Likely follow-on requirements

Do not edit the same file again immediately for a foreseeable issue.

A follow-up edit is justified when testing finds a defect, GitHub changed, requirements changed, or new verified evidence requires correction.

# Repository Integrity and Drift Prevention Standard

This section is the permanent workflow owner for the Repository Integrity and Drift Prevention controls approved at Repository Audit closeout. It consolidates those safeguards into the existing workflow rather than creating a competing integrity-standard document.

## Mandatory controls

1. **Repository preflight.** Before a substantive new session, section, workstream, or implementation block, verify repository root/branch/status/HEAD/upstream, read local Working State and Handoff, compare the checkout with authoritative GitHub `main`, and verify the relevant governing/source files before planning changes.
2. **Governing-document and decision precedence.** Current governing documents and current approved decisions outrank Drafts, plans, workstreams, archives, historical records, and old chat conclusions. A newer discussion does not supersede an approved decision until it is explicitly approved and promoted.
3. **Exact baseline tracking for bounded work.** Record the exact starting GitHub commit for a bounded section/workstream when repository state will change. Do not add universal commit-freshness metadata to every living document; Git history remains file-level provenance.
4. **Dependency/change-impact review.** Before edits, identify affected source owners, relationships, UI flows, documentation, validators, media, regressions, and downstream dependencies.
5. **Supersession/retirement discipline.** When an artifact stops being current, explicitly determine whether it remains current, becomes Superseded, is retained as **ARCHIVE**, remains **GIT HISTORY ONLY**, or is **DELETE**. Retired authoritative-looking copies must not remain in active/current locations.
6. **Authority/lifecycle labels.** Governing documentation distinguishes document lifecycle from implementation/workstream status. Use the approved document lifecycle terminology and avoid ambiguous status wording that can masquerade as current implementation truth.
7. **Documentation closeout and write verification.** Documentation is part of implementation. Local writes must pass diff/integrity checks before commit; pushed writes must be re-fetched from GitHub and validated against their verified baseline. A successful edit, commit, or push response alone is not proof of completion.
8. **Cross-reference and stale-status scan.** At meaningful section/workstream closeout, inspect affected governing documents, Handoff, Active Change Ledger, related data-model documents, and explicit current-state structures for stale or contradictory references. Historical evidence is not mechanically rewritten solely to normalize old wording.
9. **Mechanical versus human validation boundary.** Automate deterministic checks such as required files, IDs, relationships, structured statuses, known stale patterns, and source reachability. Architectural meaning, narrative correctness, technical fishing accuracy, suitability, rights/source judgment, and decision interpretation remain human-reviewed.
10. **Event-based repository reconciliation.** Perform a broader read-only reconciliation at major milestone or architecture-gate closeout and whenever material drift evidence appears. A calendar-only full-repository audit is not required merely to satisfy cadence.
11. **Draft/planning/history containment.** Drafts, workstream plans, archive records, historical Milestones, old PASS reports, and chat history may provide evidence but cannot silently create or override canonical architecture, product scope, ownership, or current implementation state.
12. **PASS/CLOSED precedence.** A prior `PASS`, `VALIDATED`, `FINALIZED`, or `CLOSED` record proves only the scope/state validated at that time. Before using it as a new-work baseline, interpret it through current decisions, architecture, standards, and source.

## Mechanical enforcement and current workflow disposition

- `tools/validate_repository_integrity.js` remains the single repository-integrity validator for deterministic structural checks. Do not create a competing validator without an explicit architecture decision.
- Existing GitHub Actions integrity checks remain non-blocking repository-health alarms under the current workflow.
- Branch protection and required status checks are deliberately **not required** for the current workflow. Their absence is not a defect; reconsider only if a future collaboration/release workflow demonstrates a need.
- External-reference reachability automation remains report-only; human review remains authoritative for correctness, suitability, embed behavior, and rights/source judgment.

Permanent principle: **mechanize objective drift detection, preserve human judgment for semantic correctness, and keep each durable fact owned by one current canonical source.**
