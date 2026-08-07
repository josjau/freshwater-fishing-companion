# Freshwater Fishing Companion

**Document:** DEVELOPMENT_WORKFLOW.md  
**Version:** 1.0.0  
**Status:** Approved  
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
3. Never assume a previously proposed or downloaded version was implemented.
4. Never use chat memory as authoritative file content.
5. After the user pushes, verify the resulting GitHub state before considering the work complete.

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
- Clearly identify replacement files and new files.
- Include a change manifest.
- Keep related files and imagery together so the user can review one coherent GitHub Desktop diff.

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
11. Complete and verify documentation closeout.

Avoid unnecessary pushes and deployments.

# Module Procedure

For every meaningful module or feature:

## Orient

Review the latest:

- Relevant source files
- `ARCHITECTURE.md`
- `STYLE_GUIDE.md`
- `DECISIONS.md`
- `MEDIA_GUIDE.md` when media is involved
- Current milestone/roadmap state

## Evaluate

Before implementation, check:

- Architectural fit
- Simpler alternatives
- Extensibility
- Duplicate capability
- Unnecessary complexity
- Mobile usability
- Page length and repeated content
- GitHub Pages storage impact
- Regression risk

Recommend a materially better design before implementation. Do not agree automatically with a weaker implementation.

## Plan

Identify:

- Existing files to replace
- New files to add
- Data ownership
- Media requirements
- UI impact
- Regression checks
- Validation criteria

## Build

Create all required implementation files and media for the approved module.

When original diagrams are appropriate, create the needed images instead of leaving placeholders simply to avoid asset work.

## Validate

Validate:

- Syntax
- File paths
- Data relationships
- Navigation
- Existing related features
- Mobile layout
- Media rendering
- Accessibility
- Runtime/console behavior when applicable
- Storage footprint for media work

## Package

Deliver:

- Complete replacement files
- New files
- Complete media set
- Manifest
- Repository-relative paths
- Validation checklist

## Commit and Verify

The user commits and pushes through GitHub Desktop.

After push:

- Verify the actual commit.
- Verify the affected files on `main`.
- Do not assume local work reached GitHub.
- Rule out GitHub Pages deployment lag before altering otherwise-correct source.

# Documentation Closeout

Documentation is mandatory.

After a module is implemented and validated:

1. Fetch current documentation from GitHub.
2. Update all affected documentation.
3. Return complete replacement documentation files.
4. User commits and pushes.
5. Verify documentation on GitHub.

A milestone or module is not closed until documentation is complete.

# Permanent-Standard Rule

Permanent standards must live in repository documentation, not only in chat history.

When a permanent standard is agreed:

1. Add it to the correct governing document.
2. Add an architectural decision when it has long-term structural impact.
3. Update cross-references.
4. Verify the documentation after push.

A new chat should be able to reconstruct the project's operating rules from GitHub alone.

# Change Classification

## Build Now

Foundational or required by the active module.

## Parking Lot

Useful but not required now.

## Reject

Conflicts with the mission, duplicates functionality without benefit, or adds disproportionate complexity.


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
