# Deferred Theme Concepts

This directory preserves intentionally retained theme candidates for future evaluation.

## Current production status

- `forest-journal.css` at repository root is the only production-supported theme.
- Files under `themes/concepts/` are deferred candidates only.
- Deferred candidates are not loaded by production and are not required to maintain current component parity while multi-theme support remains deferred.

## Why theme implementation is deferred

The project deliberately postpones multi-theme implementation while the application is under active functional development. Maintaining multiple complete themes during ongoing component, navigation, media, accessibility, and responsive-layout changes would create duplicated maintenance and regression risk before the shared UI structure is stable.

## Future trigger

Revisit final theme architecture during the Settings / User Preferences architecture gate. At that time:

- centralize shared base/layout/component behavior where practical,
- keep individual production themes focused primarily on design tokens and intentional overrides,
- use Forest Journal as the visual/reference baseline,
- decide theme selection, persistence, device/profile ownership, backup/restore behavior, and the final supported-theme set,
- preserve the canonical reference-media surface `#f4f0e8` / RGB `244, 240, 232` as a cross-theme invariant.

Existing concepts do not guarantee that every candidate will eventually become a supported theme.

## Deferred candidates

- `concepts/forest-copper.css`
- `concepts/forest-gold.css`
- `concepts/legacy-dark-theme.css`

See `docs/DECISIONS.md` D035 and D055, `docs/ARCHITECTURE.md`, and `docs/STYLE_GUIDE.md` for governing policy.
