# Freshwater Fishing Companion

**Document:** DEVELOPMENT_WORKFLOW.md  
**Document Revision:** 1.1.8  
**Document Status:** Approved  
**Last Updated:** 2026-08-19

# Purpose

This document defines the permanent development, editing, validation, documentation, and delivery workflow for Freshwater Fishing Companion. Its purpose is to make project execution reproducible across new ChatGPT sessions without requiring prior conversation history.

# Source of Truth

GitHub `main` is authoritative for all existing project source files.

Repository:

    josjau/freshwater-fishing-companion

Before changing an existing file:

1. Fetch the latest version from GitHub.
2. Base all work only on that verified version.
3. Never assume a previously proposed, staged, or downloaded version was implemented.
4. Never use chat memory as authoritative file content.
5. After the user pushes, verify the resulting GitHub state before considering the work complete.

# Repository Handoff

`HANDOFF.md` is the first-read current-state map for future sessions and contributors. It points to governing documents and must remain concise rather than duplicating them.

A new session should read `HANDOFF.md` and the governing files it references before proposing project changes.

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

The repository must be sufficient to reconstruct the current state after an unexpected chat/session boundary. The user should not have to supply missing recent history that could have been recorded with the preceding implementation push.

Final closeout remains required, but closeout is a reconciliation/verification step rather than the first time documentation catches up with implementation.

# Default Delivery Method

Complete-file replacement is the default implementation workflow.

Complete-file replacement describes the **delivery artifact**, not authorization to make broad edits. The semantic change scope remains limited to the approved work; unrelated differences inside a replacement file are failures unless separately approved.

For every existing source file that changes:

- Return the complete resulting file.
- Do not make partial patches the final implementation artifact.
- Preserve unrelated current behavior unless the approved change requires otherwise.
- Make only the changes needed for the planned module, but return the full file.
- Treat the delivered file as the full-file validation copy.

For coherent multi-file or asset-heavy work:

- Prefer one ZIP package containing the complete coherent segment whenever practical.
- Preserve repository-relative paths.
- Clearly identify replacement files, new files, moved files, and removals in the chat delivery summary.
- Do not place package manifests, validation notes, staging instructions, package READMEs, or other delivery-only artifacts inside the repository ZIP unless they are explicitly approved permanent repository documents.
- Keep related source, documentation, and imagery together so the user can review one coherent GitHub Desktop diff.
- Minimize GitHub pushes: when implementation and its required documentation can safely be reviewed together, deliver them in the same package and target one coherent commit/push.
- Do not minimize pushes at the cost of stale current-state documentation. If implementation is intentionally pushed before runtime validation, its documentation must state `Implemented / Unvalidated` in that same repository state whenever practical.

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

Assistant direct GitHub writes are limited by default to Markdown documentation (`.md`) when needed to keep repository state, decisions, validation results, and handoff information current.

Production assets and source require user review and explicit authorization for the specific direct-write action. This includes, but is not limited to:

- images and other media,
- JavaScript,
- CSS,
- HTML,
- application data files,
- configuration files,
- other non-Markdown production files.

Default workflow for those files:

1. Build the complete proposed replacement/package from the latest verified GitHub baseline.
2. Provide the files or coherent ZIP to the user for review.
3. Do not write those production files to GitHub unless the user explicitly approves that direct write after review.
4. The user may instead copy/upload the reviewed files and push them through GitHub Desktop.
5. After the user push, verify the actual commit and affected files on GitHub.

A prior approval for one production update does not grant blanket approval for later production writes. Ask again before each new direct-write set unless the user explicitly changes this rule for the applicable session or action.

# Decision-to-Package Continuity

When a decision is finalized during an active build segment:

1. Incorporate the decision into the active implementation plan immediately.
2. Identify every governing/status/data-model document affected.
3. Update those documents as part of the active segment rather than waiting for the user to request documentation separately.
4. Include the implementation and required documentation in the same coherent delivery package whenever practical.
5. Do not split a coherent segment into repeated source-only and documentation-only pushes merely because the decisions were discussed at different moments.
6. If a decision is deliberately parked rather than implemented now, document the parked decision in the same active segment package.

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

# Full-File Replacement Integrity

For an existing file:

1. Fetch the latest GitHub file.
2. Define the authorized edit scope.
3. Apply only the approved changes.
4. Produce the complete resulting file.
5. Diff the replacement against the fetched source.
6. Any unrelated diff is a failure unless it was explicitly authorized.
7. Do not silently fold unrelated cleanup, optimization, or redesign into the replacement.

Mature approved UI behavior is a protected regression target.

# Replacement-Integrity Gate

Before any replacement package containing an existing documentation file is delivered, a mechanical preservation check is mandatory.

The gate must compare each replacement against the exact GitHub baseline used to create it and must fail the package before delivery if any of the following occurs without explicit authorization:

- an existing Markdown heading disappears,
- the replacement shrinks by more than 10 percent of baseline line count,
- deleted lines exceed 10 percent of baseline line count,
- a large rewrite is detected even though the authorized scope is targeted,
- a package-only artifact appears in the repository payload.

A deliberate large documentation rewrite may bypass the size thresholds only when the user explicitly approves that rewrite before the file is generated. Heading removal still requires explicit authorization.

For repository-side checking, `tools/validate_replacement_integrity.py` provides the same conservative guard against accidental document truncation by comparing working-tree Markdown files with `HEAD`. This validator is a safety net, not a substitute for deriving replacements from the latest verified GitHub contents.

For assistant-generated packages, the equivalent baseline comparison must be run before the ZIP is created. A package that fails the gate must not be delivered.

# Post-Write Integrity Validation

Every file write must be validated from the authoritative remote repository after the write. A successful write/commit response alone is not sufficient evidence that the file is intact.

This rule applies to:

- direct assistant Markdown writes to GitHub,
- user commits/pushes through GitHub Desktop,
- corrective/restoration writes,
- any other workflow that changes an existing or newly created repository file.

After every file write:

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

This post-write gate is mandatory even when pre-write replacement-integrity checks passed. Pre-write checks prevent bad payloads; post-write checks prove the authoritative repository received the intended complete file.

# User Repository Workflow

The user normally updates the repository through GitHub Desktop.

Sequence:

1. Verify current GitHub source.
2. Review architecture and standards.
3. Plan the module.
4. Generate all complete replacement files, required documentation, and required imagery for the coherent segment.
5. Package the complete coherent segment once whenever practical.
6. User copies the package into the local repository.
7. User reviews the GitHub Desktop diff.
8. User commits and pushes the coherent update.
9. Verify the commit and affected files on GitHub.
10. Update current-state documentation immediately if the push changed the repository state and those status changes were not already included in the same push.
11. Validate the live deployment when applicable.
12. Record each meaningful validation result or known failure in the active validation/current-state documentation.
13. If validation produces required corrections, package those corrections and their status documentation coherently.
14. Only then mark the session/module/section finalized.

Avoid unnecessary pushes and deployments, but do not trade fewer pushes for incomplete validation or stale documentation.

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

- Existing files to replace
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

For Tackle recognition-media work, `MEDIA_GUIDE.md`'s Tackle Media Generation Gate is mandatory. A new or replacement Tackle recognition asset must not enter a delivery package until it has passed the real-photo search, geometry verification, current-library visual comparison, mobile-recognition, licensing/provenance, format, and style checks defined there.

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

## Package

Deliver:

- Complete replacement files
- New files
- Complete media set
- Required governing/status documentation
- Repository-relative paths
- Removal/archive instructions when needed
- Validation checklist in chat or a permanent workstream document, not as a temporary repository-root package artifact

## Commit and Verify

The user normally commits and pushes through GitHub Desktop unless a current session explicitly authorizes direct GitHub commit application after review.

After push or authorized direct commit:

- Verify the actual commit.
- Verify the affected files on `main`.
- Apply the mandatory Post-Write Integrity Validation gate to every written file.
- Do not assume local/staged work reached GitHub.
- Rule out GitHub Pages deployment lag before altering otherwise-correct source.
- Confirm the active workstream/HANDOFF state accurately describes what is now on `main`; correct stale status before starting another build segment.

# Documentation Closeout

Documentation is part of the workstream, not an afterthought.

A session, module, or section is not finalized until all relevant documentation has been updated and validated in GitHub.

Closeout sequence:

1. Identify all decisions, current-state changes, deferred work, known failures, corrections, and open issues produced by the segment.
2. Fetch the latest relevant documentation from GitHub.
3. Reconcile all affected governing documents and `HANDOFF.md` with the already-current active workstream state.
4. Classify every repository artifact retired by the segment as **GIT HISTORY ONLY**, **ARCHIVE**, or **DELETE**; complete and verify any required archival move before closeout.
5. Return complete replacement documentation files as part of the coherent segment package whenever practical.
6. User reviews, commits, and pushes, or explicitly authorizes the assistant to apply the reviewed documentation commit when the current session workflow permits it.
7. Verify the actual GitHub files after push using the mandatory Post-Write Integrity Validation gate.
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
4. Include those documentation changes with the active coherent package when practical.
5. Verify the documentation after push using the mandatory Post-Write Integrity Validation gate.

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

# Manual-Edit Exception

Whole-file replacement remains the default.

If the user explicitly asks for a manual targeted edit:

- Give exact filename.
- Identify exact block.
- Give exact replacement.
- State insertion point.
- State expected result.
- Give a validation checkpoint.

# No-Churn Rule

Before generating a replacement, reconcile:

- Approved architecture
- Latest GitHub source
- Related logic and data contracts
- Likely follow-on requirements

Do not replace a file again immediately for a foreseeable issue.

A new replacement is justified when testing finds a defect, GitHub changed, requirements changed, or new verified evidence requires correction.