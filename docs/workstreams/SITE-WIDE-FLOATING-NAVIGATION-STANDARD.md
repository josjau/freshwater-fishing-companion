# Freshwater Fishing Companion — Site-Wide Floating Navigation Standard

**Document Status:** Approved  
**Implementation Status:** Runtime Validation In Progress / Reel Setup Correction Validated  
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

# Specialized Workflow Rule

Specialized workflows may replace the standard Root/Nested controls with workflow-specific navigation such as Reel Setup's Previous/Home pattern.

When a specialized workflow is rendered from a standard view shell, its custom navigation must replace the entire standard floating-navigation container rather than replacing only a button inside that container. This prevents nested floating shells and preserves one visible navigation surface.

The specialized control behavior may differ, but the workflow should retain the established site-wide floating visual treatment unless a deliberate documented exception is approved.

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
- Reel Setup retains specialized Previous/Home behavior while sharing the established floating-container visual treatment.

# Runtime Validation Result — Shared Appearance

**Status:** PASS

The corrected deployment from commit `05dc0b46cede3b47d82d869493d154564156ac7a` passed the first Brave runtime validation block on 2026-08-17.

Confirmed:

- Rig Guide root uses one visible shared floating `← Home` container,
- Knot Guide root uses the same treatment,
- Fish Guide root uses the same treatment,
- an additional root view uses the same treatment,
- a representative nested Rig or Knot view retains Parent + Home inside the same visual container,
- root and nested navigation now read as one shared component rather than separate visual systems.

This closes the original root-versus-nested visibility defect.

# Validation Block 2 Results

## Block 2A — Rig Nested Navigation

**Status:** PASS

Runtime validation confirmed:

- Rig browse and detail Parent + Home controls remain floating,
- no duplicate navigation appears,
- Parent returns to the Rig browse/collection view at the top,
- Home returns to the Dashboard at the top.

## Block 2B — Knot Nested Navigation

**Status:** PASS

Runtime validation confirmed:

- Knot browse and detail Parent + Home controls remain floating,
- no duplicate navigation appears,
- Parent returns to the Knot browse/collection view at the top,
- Home returns to the Dashboard at the top.

## Block 2C — Reel Setup Navigation

**Status:** PASS AFTER CORRECTION

Initial runtime review found an extra larger outer floating bubble around Reel Setup's Previous/Home controls beginning on **Get Your Reel Ready** and continuing throughout the Reel Setup workflow.

Root cause:

- `renderView()` supplied the standard `.page-navigation-group` shell,
- `renderReelSetupNavigation()` replaced only the generic Home button,
- the standard group therefore remained around Reel Setup's custom `[data-reel-setup-navigation]` container,
- both containers received the floating visual treatment, creating nested shells.

Corrective implementation in `script.js`:

- resolve the standard navigation group with `genericHomeButton.closest(".page-navigation-group")`,
- require that group before conversion,
- replace the entire standard group with Reel Setup's custom navigation container,
- keep Reel Setup's existing Previous/Home routing unchanged,
- make no CSS or shared Root/Nested navigation changes.

The targeted correction was deployed in commit `82f37285ff978eca1a92edfd129cebb9aff5105c` and successfully retested in Microsoft Edge on Windows Desktop.

Retest confirmed:

- exactly one Reel Setup floating navigation container,
- no duplicate outer shell,
- Previous remains functional,
- Home remains functional,
- Previous and Home destinations open at the top as required.

# Required Runtime Validation

Completed:

1. Rig Guide root — one visible floating `← Home` container. **PASS**
2. Knot Guide root — one visible floating `← Home` container. **PASS**
3. Fish Guide root — one visible floating `← Home` container. **PASS**
4. At least one additional root view — same treatment. **PASS**
5. Representative nested shared appearance — same visual treatment. **PASS**
6. Representative Rig browse/detail Parent + Home behavior and top reset. **PASS**
7. Representative Knot browse/detail Parent + Home behavior and top reset. **PASS**
8. Reel Setup — one specialized Previous/Home floating container with no outer duplicate shell. **PASS**
9. Reel Setup — Previous and Home remain functionally correct and top-reset correctly. **PASS**

Remaining extended checks:

10. Narrow viewport — controls wrap or fit without horizontal overflow or obscuring content.
11. Keyboard navigation — visible focus and operable controls.
12. Representative Knot → related Rig / Reel Setup traversal.
13. Normal-navigation console health.

# Permanent Principle

> Floating navigation is a shared site-wide component for all non-Dashboard application views; root and nested pages use the same visible container treatment, specialized workflows replace rather than nest the standard container, and individual pages should not invent a separate treatment unless a deliberate documented exception exists.
