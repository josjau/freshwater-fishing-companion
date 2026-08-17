# Freshwater Fishing Companion — Site-Wide Floating Navigation Standard

**Document Status:** Approved  
**Implementation Status:** Correction Built / Runtime Validation Pending  
**Recorded:** 2026-08-14  
**Last Updated:** 2026-08-17  
**Scope:** Site-wide navigation UX

# Decision

Floating navigation is the default navigation treatment across the application.

Every navigable application view below the Dashboard must keep its applicable Parent / Home navigation reachable while the user scrolls.

The same shared floating-navigation container is the canonical visual treatment for both root and nested application views. Root and nested pages may contain different controls, but they must not use separate visual systems merely because they sit at different navigation depths.

This extends the existing D051 persistent-navigation principle from nested workflows/details into a site-wide default.

# Shared Navigation Component Rule

The canonical floating-navigation component is the shared `.page-navigation-group` container rendered through the shared navigation-markup path when practical.

For renderer-based application views, `buildPageNavigationMarkup()` is the canonical markup helper.

The shared container owns the floating treatment, including:

- sticky positioning,
- visible container background,
- border,
- padding,
- rounded shape,
- shadow,
- backdrop treatment,
- responsive wrapping,
- shared spacing around its navigation buttons.

Individual `.page-navigation` controls remain the buttons inside that container. A bare sticky `.page-navigation` button is not the normal site-wide pattern.

Future renderer-based root, browse, search, detail, and other standard application pages should use the shared helper/container rather than creating new page-specific navigation markup or CSS.

A specialized workflow may use a dedicated navigation container when its controls require different behavior, but it should reuse the same floating visual treatment unless a deliberate documented exception is approved.

# Root Section Rule

Root section pages are not exempt.

Examples include:

- Rig Guide root,
- Knot Guide root,
- Fish Guide root,
- Tackle root,
- Recommendations root,
- Catch Log root,
- Favorites root,
- Settings root,
- other future top-level application sections.

A root section provides one floating route back to the Dashboard/Home context using the same shared navigation container as nested views.

If `Parent` and `Home` would resolve to the same Dashboard destination, do not render redundant duplicate controls merely to satisfy the pattern. Root sections normally render one clear `← Home` control inside the shared floating container.

The Dashboard itself is the normal exception because it is already the application home/root destination.

# Nested View Rule

Nested browse, search, detail, and other child views normally render both:

- `← Parent`
- `Home`

Both controls live inside the same shared floating navigation container.

The Parent destination must represent the meaningful immediate application context for that view. Home returns to the Dashboard.

# Future Page Rule

New application pages must select one of these patterns during implementation:

1. **Dashboard** — no floating navigation required.
2. **Root application view** — shared floating container with one non-duplicative Home control.
3. **Nested application view** — shared floating container with Parent + Home controls.
4. **Specialized workflow** — approved dedicated controls that preserve the shared floating visual treatment and navigation principles unless a documented exception exists.

A new page must not invent a weaker, less-visible, or separate floating-navigation treatment without an explicit design reason and documented approval.

# Validation Finding — 2026-08-17

The first site-wide root correction made the existing bare root Home button sticky through a root-specific CSS selector. Runtime review confirmed that the button remained reachable, but its presentation was materially less visible than the established nested floating-navigation bar because it lacked the nested container's background, border, padding, shadow, and backdrop treatment.

That implementation is therefore superseded by the shared-component correction:

- root Home controls move inside `.page-navigation-group`,
- root and nested renderer markup use the shared `buildPageNavigationMarkup()` helper,
- the temporary root-specific sticky CSS selector is removed,
- nested Parent/Home behavior remains unchanged,
- Reel Setup retains its specialized control behavior while continuing to share the established floating-container visual treatment.

This correction is built but must still pass deployed Brave runtime validation before implementation status becomes `Validated`.

# Required Runtime Validation

After deployment, validate:

1. Rig Guide root — one visible floating `← Home` container.
2. Knot Guide root — one visible floating `← Home` container.
3. Fish Guide root — one visible floating `← Home` container.
4. At least one additional root view — same treatment.
5. Representative Rig browse/detail — Parent + Home remain floating and visually unchanged.
6. Representative Knot browse/detail — Parent + Home remain floating and visually unchanged.
7. Reel Setup — specialized Previous/Home controls remain usable and retain the established floating presentation.
8. Narrow viewport — controls wrap or fit without horizontal overflow or obscuring content.
9. Keyboard navigation — visible focus and operable controls.
10. Forward, Parent, and Home transitions — destination opens at the top as required by D051.

# Permanent Principle

> Floating navigation is a shared site-wide component for all non-Dashboard application views; root and nested pages use the same visible container treatment, and individual pages should not opt out or invent a separate treatment unless a deliberate documented exception exists.
