# Freshwater Fishing Companion — Site-Wide Floating Navigation Standard

**Document Status:** Approved  
**Implementation Status:** Approved / Not Fully Implemented  
**Recorded:** 2026-08-14  
**Scope:** Site-wide navigation UX

# Decision

Floating navigation is the default navigation treatment across the application.

Every navigable application view below the Dashboard should keep its applicable Parent / Home navigation reachable while the user scrolls.

This extends the existing D051 persistent-navigation principle from nested workflows/details into a site-wide default.

# Root Section Rule

Root section pages are not exempt.

Examples include:

- Rig Guide root,
- Knot Guide root,
- Fish Guide root,
- Tackle root,
- other future top-level application sections.

A root section should provide an appropriate floating route back to the Dashboard/Home context.

If `Parent` and `Home` would resolve to the same Dashboard destination, do not render redundant duplicate controls merely to satisfy the pattern. Preserve the floating navigation affordance with the clearest non-duplicative control.

The Dashboard itself is the normal exception because it is already the application home/root destination.

# Known Runtime Gap

Observed during the 2026-08-14 session:

- Rig Guide root does **not** currently show the floating navigation controls.
- Knot Guide root does **not** currently show the floating navigation controls.
- Several checked nested Rig/Knot pages **do** show the floating navigation controls.
- Every nested page has not yet been exhaustively audited.

Treat the missing root controls as a site-wide navigation consistency gap, not as intentional page-specific design.

# Required Follow-Up

During the next integrated navigation/regression pass:

1. audit every implemented route/view for floating navigation,
2. identify all root and nested views missing the standard treatment,
3. apply one shared navigation behavior rather than one-off page fixes where practical,
4. preserve keyboard access, touch usability, responsive behavior, and top-reset routing,
5. ensure the controls do not obscure page content at narrow widths,
6. runtime-test representative root, subset, detail, and workflow views in Microsoft Edge.

# Permanent Principle

> Floating navigation is a site-wide default for all non-Dashboard application views; individual pages should not opt out unless a deliberate documented exception exists.
