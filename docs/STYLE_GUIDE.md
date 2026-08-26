# Freshwater Fishing Companion — Style Guide

**Document:** STYLE_GUIDE.md  
**Document Revision:** 1.5.0  
**Document Status:** Approved  
**Role:** Code, data, file, and documentation conventions  
**Last Updated:** 2026-08-25

# Purpose

This document defines implementation and documentation conventions for Freshwater Fishing Companion.

It deliberately does **not** duplicate cross-domain UI/navigation/card/detail/search/mobile/accessibility rules; those belong to `UI_STANDARD.md`. Workflow/authority/review/closeout rules belong to `DEVELOPMENT_WORKFLOW.md` and `docs/workflow/`. Media rules belong to `MEDIA_GUIDE.md`.

# General Principles

- Plan twice. Build once.
- Keep solutions simple.
- Prefer readability over cleverness.
- One semantic source of truth.
- Facts before features.
- Mobile-first and offline/local-first where architecture requires it.
- Documentation is part of the product.
- Permanent standards belong in canonical repository documentation, not only in chat history.
- Do not create fields, files, abstractions, or dependencies merely for hypothetical future need.

# HTML Standards

- Use semantic HTML whenever practical.
- Minimize unnecessary nesting.
- Avoid inline styles and inline JavaScript.
- Prefer purpose-based class names.
- Preserve accessibility semantics and meaningful source order.

Prefer semantic elements such as `header`, `nav`, `main`, `section`, `article`, `aside`, and `footer` when they match the content role.

# CSS Standards

CSS should be mobile-first, responsive, simple, and reusable.

- Use CSS custom properties for shared tokens when practical.
- Keep selectors understandable and avoid unnecessary specificity.
- Prefer reusable semantic component rules over one-off page overrides.
- Use lowercase hyphenated class names.
- Preserve existing approved behavior during targeted edits; unrelated visual churn is a failure.

Recommended high-level ordering:

1. variables/tokens;
2. reset/base;
3. layout;
4. components;
5. utilities;
6. responsive rules.

All detailed UI presentation/interaction behavior is governed by `UI_STANDARD.md`.

# JavaScript Standards

JavaScript should prioritize clarity and deterministic behavior.

- Use small focused functions.
- Use descriptive names and clear boolean names.
- Return early where practical.
- Avoid deeply nested logic.
- Keep shared lookup/filter/sort/render behavior reusable rather than duplicated.
- Do not mutate canonical data from presentation helpers unless the owning architecture explicitly requires it.
- Treat future User Knowledge/imported text as untrusted at rendering boundaries; use safe DOM APIs unless a centrally owned sanitization path is approved.
- Comments should explain why, constraints, or non-obvious ownership—not restate what the code visibly does.

# Data Standards

- Use camelCase property names.
- Stable IDs use lowercase hyphenated strings.
- Every canonical field must have a documented semantic purpose and owner.
- Do not add fields "just in case."
- Prefer references to canonical IDs over duplicated descriptive facts.
- Prefer derived inverse relationships over duplicate stored sources of truth when D056 ownership defines one direction.
- Keep Reference Knowledge, Decision Knowledge, and User Knowledge distinct.

Exact schema contracts live in `data-model/`.

# File and Path Naming

Use stable, descriptive names consistent with the existing repository.

Canonical documentation examples:

```text
PROJECT.md
ARCHITECTURE.md
DECISIONS.md
DEVELOPMENT_WORKFLOW.md
ROADMAP.md
STYLE_GUIDE.md
UI_STANDARD.md
MEDIA_GUIDE.md
WORKING_STATE.md
ACTIVE-CHANGE-LEDGER.md
```

JavaScript source generally uses lowercase hyphenated filenames where multiple words are required (for example `view-renderer.js`, `knot-media-renderer.js`). Existing established filenames remain authoritative unless a deliberate rename is approved.

Do not create parallel files that compete with an existing canonical owner merely to make a task easier for a tool.

# Documentation Standards

Every governing document should make its role obvious through appropriate metadata and headings. Include as applicable:

- title;
- `Document` filename/path identity;
- `Document Revision` for maintained governing documents;
- `Document Status`;
- `Purpose`;
- `Last Updated`;
- implementation/workstream status where materially different from document approval;
- related/canonical owner references where useful.

Document Status uses:

- `Draft`
- `Approved`
- `Superseded`
- `Archived`

Document approval, implementation state, validation state, and application version/baseline are separate concepts. `Validated` is used only after actual applicable verification.

Documentation must distinguish current implementation from approved future work. Do not describe an approved design as already deployed.

Durable decisions preserve enough context to recover without chat history:

1. decision;
2. reason/tradeoff/risk;
3. current implementation status;
4. future/revisit trigger;
5. canonical owner.

Decision IDs are permanent and are not renumbered during decomposition/consolidation.

# Existing-File Edit and Preservation Standard

For an existing source or documentation file:

1. use the latest verified contents from the authoritative current state;
2. make targeted edits by default;
3. preserve unrelated content/behavior;
4. inspect the complete resulting file when structural/truncation risk exists;
5. compare the resulting change against the verified committed baseline or active review state;
6. reject unrelated diffs unless explicitly approved;
7. use no-loss/replacement-integrity checks for large rewrites or consolidation.

During an active review cycle, Drive `Working Source/Current` is the authoritative uncommitted tree and GitHub `main` is the committed comparison baseline. Direct documentation integrity corrections made under standing authority must be reconciled back into Drive immediately after GitHub verification.

Detailed review/commit/closeout mechanics belong to `DEVELOPMENT_WORKFLOW.md` and `docs/workflow/`.

# Commit Messages

Use concise descriptive messages, for example:

```text
Create fish guide
Add inventory search
Fix navigation layout
Consolidate project documentation and workflow
```

Avoid vague messages such as `Update` or `Fix stuff`.

# Testing and Validation

A completed change should be functional where applicable, tested at the level justified by its risk, documented, and verified on GitHub.

- Run syntax/structure/schema/integrity checks appropriate to changed files.
- Validate directly affected regression paths rather than unrelated areas unless the change is cross-cutting.
- User-visible/mobile behavior requires appropriate runtime/device validation before finalization.
- Documentation consolidation requires path/link/decision/no-loss checks.
- A successful write response is not completion; post-write GitHub verification remains mandatory.

# Version 1 Priorities

1. Correctness
2. Simplicity
3. Maintainability
4. Performance
5. Visual polish

# Related Documents

- `PROJECT.md`
- `ARCHITECTURE.md`
- `DECISIONS.md`
- `DEVELOPMENT_WORKFLOW.md`
- `ROADMAP.md`
- `UI_STANDARD.md`
- `MEDIA_GUIDE.md`
- `WORKING_STATE.md`
- `CHANGELOG.md`
