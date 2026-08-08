# Freshwater Fishing Companion

**Document:** DEVELOPMENT_WORKFLOW.md  
**Document Revision:** 1.1.0  
**Document Status:** Approved  
**Last Updated:** 2026-08-07

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

# Default Delivery Method

Complete-file replacement is the default implementation workflow.

For every existing source file that changes:

- Return the complete resulting file.
- Do not make partial patches the final implementation artifact.
- Preserve unrelated current behavior unless the approved change requires otherwise.
- Make only the changes needed for the planned module, but return the full file.
- Treat the delivered file as the full-file validation copy.

For coherent multi-file or asset-heavy work:

- Prefer one ZIP package.
- Preserve repository-relative paths.
- Clearly identify replacement files, new files, moved files, and removals.
- Include a change manifest or package validation note outside the permanent repository when useful.
- Keep related files and imagery together so the user can review one coherent GitHub Desktop diff.

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

# User Repository Workflow

The user normally updates the repository through GitHub Desktop.

Sequence:

1. Verify current GitHub source.
2. Review architecture and standards.
3. Plan the module.
4. Generate all complete replacement files and required imagery.
5. Package the files.
6. User copies them into the local repository.
7. User reviews the GitHub Desktop diff.
8. User commits and pushes the coherent update.
9. Verify the commit and affected files on GitHub.
10. Validate the live deployment when applicable.
11. Update all relevant documentation.
12. User commits/pushes documentation if it was not in the same coherent push.
13. Verify documentation on GitHub.
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
- Documentation that must change before closeout

## Build

Create all required implementation files and media for the approved module.

When original diagrams are appropriate, create the needed images instead of leaving placeholders simply to avoid asset work.

## Validate

Validate as applicable:

- Syntax
- File paths
- Data relationships
- Navigation
- Existing related features
- Mobile layout
- Media rendering
- Accessibility
- Runtime/console behavior
- Storage footprint for media work

## Package

Deliver:

- Complete replacement files
- New files
- Complete media set
- Repository-relative paths
- Removal/archive instructions when needed
- Validation checklist

## Commit and Verify

The user commits and pushes through GitHub Desktop.

After push:

- Verify the actual commit.
- Verify the affected files on `main`.
- Do not assume local/staged work reached GitHub.
- Rule out GitHub Pages deployment lag before altering otherwise-correct source.

# Documentation Closeout

Documentation is part of the workstream, not an afterthought.

A session, module, or section is not finalized until all relevant documentation has been updated and validated in GitHub.

Closeout sequence:

1. Identify all decisions, current-state changes, deferred work, and open issues produced by the segment.
2. Fetch the latest relevant documentation from GitHub.
3. Update all affected governing documents and `HANDOFF.md`.
4. Return complete replacement documentation files.
5. User reviews, commits, and pushes.
6. Verify the actual GitHub files after push.
7. Confirm that Current, Approved / Not Implemented, In Progress, Validated, and Open states are represented accurately.
8. Only then mark the segment finalized.

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

Update the governing documentation before closeout.

When a substantial off-segment discussion would unnecessarily interrupt coherent active work, the technical lead may recommend parking it until a clean stopping point. Record enough context that the topic cannot be lost. If the issue materially affects the active implementation, discuss it immediately.

# Permanent-Standard Rule

Permanent standards must live in repository documentation, not only in chat history.

When a permanent standard is agreed:

1. Add it to the correct governing document.
2. Add an architectural decision when it has long-term structural impact.
3. Update cross-references and `HANDOFF.md` when current state or future work changes.
4. Verify the documentation after push.

A new chat should be able to reconstruct the project's operating rules from GitHub alone.

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
