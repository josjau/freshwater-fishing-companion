# Current-State UX Repairs — Validation

**Document Status:** Approved  
**Implementation Status:** In Progress

# Pre-Push Checks

## Source Integrity

- `index.html` differs only for approved Regulations CTA text.
- `script.js` differs only for child-card availability metadata and approved touched-file source-header cleanup.
- `view-renderer.js` differs only for unavailable-card rendering and approved touched-file source-header cleanup.
- `forest-journal.css` differs only for approved Dashboard restoration, unavailable-card styling, and approved touched-file source-header cleanup.
- No data files change.
- No dormant theme files change.

## Dashboard

- All nine Dashboard cards remain in the same order.
- Fish Guide navigates.
- Rig Guide navigates.
- What Should I Throw? navigates to its parent view.
- My Tackle navigates to its parent view.
- Knots navigates to its parent view.
- Catch Log navigates to its parent view.
- Favorites navigates to its parent view.
- Regulations opens ODWC in a new tab.
- Settings navigates to its parent view.
- Regulations CTA reads `Go to ODWC Regulations ↗`.

## Child Cards

### Fish Guide

- Search Fish is actionable.
- Browse by Family shows Coming Soon and is not actionable.
- Browse by Habitat shows Coming Soon and is not actionable.
- Browse Alphabetically shows Coming Soon and is not actionable.

### Rig Guide

- Browse All Rigs is actionable.
- Browse by Target Fish shows Coming Soon and is not actionable.
- Browse by Conditions shows Coming Soon and is not actionable.
- Identify Rig Components shows Coming Soon and is not actionable.

### Other Parent Views

All child cards under Recommendations, My Tackle, Knots, Catch Log, Favorites, and Settings:

- show Coming Soon,
- do not navigate,
- do not imply click behavior,
- expose unavailable semantics.

## Forest Journal Dashboard

Confirm:

- primary left accent is 6px,
- primary right accent is 2px,
- primary title is stronger,
- primary vertical spacing is restored,
- hover uses the approved gradient,
- active state is restored,
- card overflow is hidden,
- current pill CTA remains intact.

## Regression Checks

- Fish Search still searches by common name, scientific name, and category.
- Rig Browse still searches and opens Rig detail.
- Rig detail still shows Best For and Good Conditions.
- External Rig reference links still open.
- Tackle `Name ⓘ` popovers still open and close correctly.
- Related Tackle popover navigation still works.
- Rig readiness checkboxes still persist.
- Ready/Missing status still updates.
- No console errors during normal navigation.

## Responsive / Accessibility

Validate at phone and desktop widths:

- unavailable cards remain legible,
- unavailable cards do not show hover lift/pointer cursor,
- `aria-disabled="true"` is present on unavailable cards,
- actionable cards remain keyboard reachable,
- focus styles remain visible,
- reduced-motion behavior remains intact.

# Post-Push Validation

After push:

1. fetch current `main`,
2. confirm all nine package files landed,
3. compare source SHAs/content against this package,
4. confirm no unrelated files changed,
5. validate live/deployed behavior where applicable,
6. update HANDOFF/MILESTONES/CHANGELOG from In Progress to Validated only after the checks pass.

Preflight does not equal validation.
