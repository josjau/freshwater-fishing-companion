# Freshwater Fishing Companion — Detail Page Standard

**Document Revision:** 1.1.2  
**Document Status:** Approved  
**Last Updated:** 2026-08-13

# Purpose

This document establishes the shared Version 1 design flow for instructional and informational detail pages.

# Baseline

The current Rig detail page is the baseline.

Where applicable, other instructional and informational pages should follow that same visual and interaction flow as closely as practical rather than inventing a separate page language.

Shared expectations include:

- the established persistent Parent/Home navigation,
- the same identity-header hierarchy,
- concise paired practical-context sections where useful,
- a visually dominant primary instruction or information section,
- instructional media and verified references placed near the content they support,
- completion or verification checks where the domain has a meaningful completion state,
- familiar treatments for common mistakes, notes, limitations, and safety information,
- related canonical knowledge surfaced in useful context rather than as a generic relationship dump,
- progressive disclosure for high-cardinality related-entity lists when showing the complete list by default would create unnecessary scrolling,
- actionable related-entity navigation when moving to that entity materially helps the current task,
- context-preserving Parent return when a user temporarily leaves one detail page to inspect a related detail page,
- mobile-first readability and the established field-guide visual grammar.

# Identity Header

Where applicable, use this hierarchy:

```text
Priority / Core designation
Difficulty or equivalent classification
Canonical title
Concise description
```

Do not overload the identity header with technical metadata.

# Related Knowledge and Context-Preserving Navigation

Related knowledge should behave as a gateway, not a passive relationship dump.

When a related canonical entity can help the user complete or understand the current task:

- make the related entity directly actionable,
- open explicit related-entity navigation at the top of the destination,
- preserve the immediately preceding detail context so Parent returns to it,
- allow nested related-detail movement when useful,
- clear the related-detail return context when the user intentionally returns Home.

Do not duplicate relationship ownership merely to support this navigation. Derive reverse relationships from the canonical owner whenever the architecture defines one.

For high-cardinality relationship lists, use progressive disclosure instead of forcing a large default scroll. The current Knot **Where You'll Use It** standard shows up to two Rig relationships initially and exposes the remainder through **See all N rigs** / **Show fewer**.

Collapsed related items must be removed from the rendered visual layout until expanded. Author CSS must not override the collapsed/hidden state. Expanding must reveal the hidden items and change the control to **Show fewer**; collapsing must restore the initial item limit and the original **See all N rigs** label.

This threshold is a domain/UI rule for the Knot relationship list, not a universal truncation rule for every list in the application.

# Domain Adaptation

The Rig detail page is a baseline, not a rigid template.

A domain may omit, rename, combine, or add sections when its information genuinely requires different treatment. The default approach is to map the domain onto the established Rig flow first and document only justified deviations.

Examples of justified deviations include stronger visual instruction, recognition media, a completion check, progressive disclosure for dense related knowledge, or context-preserving return to an interrupted workflow.

# Design Flexibility

During implementation and runtime validation, exact labels, placement, density, column behavior, and section grouping may be refined when the real interface demonstrates a clearer flow.

Such refinements should preserve the recognizable baseline hierarchy, beginner-first usability, canonical data ownership, accessibility, mobile-first behavior, and approved scope.

Material changes to architecture, ownership, or approved workflow meaning still require explicit approval.

# Related Documents

- `STYLE_GUIDE.md`
- `MEDIA_GUIDE.md`
- `ARCHITECTURE.md`
