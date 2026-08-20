# Current-State UX Repairs

**Document Status:** Approved  
**Implementation Status:** Validated  
**Baseline:** GitHub `main` at `e1447e67b082d67640298829e120a034014dd44e`  
**Implementation Commit:** `cf4f8bfa4974d06ada35650dd4e27f9371ee034f`  
**Validation Baseline:** GitHub `main` at `5da6b1628ff06136eba5bf27994b99cf3be6a500`

# Purpose

Implement the three approved UX repairs from D030–D032 as one coherent, regression-controlled segment.

# Authorized Scope

## 1. Inert Child Cards

Unimplemented child cards remain visible only when useful for communicating intended application structure.

They must:

- show `Coming Soon`,
- not use a button element,
- not expose click handlers,
- not use pointer cursor,
- not animate like actionable cards,
- expose unavailable semantics with `aria-disabled="true"`.

Currently implemented child actions remain actionable:

- Fish Guide → Search Fish
- Rig Guide → Browse All Rigs

No additional child features become implemented in this segment.

## 2. Regulations CTA

Dashboard Regulations retains the existing ODWC URL and external-link behavior.

CTA text becomes:

`Go to ODWC Regulations ↗`

No route or destination change is authorized.

## 3. Forest Journal Dashboard Regression Restoration

Restore only the approved Dashboard behavior:

- card overflow containment,
- 6px primary left accent,
- 2px primary right accent,
- stronger primary title,
- approved primary vertical spacing,
- gradient hover treatment,
- active treatment.

Preserve:

- current card order,
- current copy except Regulations CTA,
- current pill CTA styling,
- all newer Rig/Tackle styling,
- all data/media behavior,
- dormant theme files.

# Touched Source Files

- `index.html`
- `script.js`
- `view-renderer.js`
- `forest-journal.css`

Because these source files are deliberately edited, obsolete package-specific `REPLACEMENT` labels are removed from the edited source headers/build metadata as already approved by D036.

# Explicit Non-Goals

- No Search ranking work.
- No Rig/Tackle relationship cleanup.
- No 20-Rig expansion.
- No My Tackle schema work.
- No theme refactor.
- No dormant-theme parity.
- No navigation redesign.
- No data-model change.
- No media change.

# Closeout

This segment is validated and closed.

Completed closeout checks:

1. source and documentation were pushed,
2. actual GitHub files were re-fetched,
3. documentation-preservation regressions were corrected,
4. package-specific root artifacts were removed,
5. runtime behavior was validated,
6. regression checks passed,
7. responsive/accessibility checks passed,
8. normal navigation produced no console errors,
9. final documentation status was prepared for GitHub closeout.
