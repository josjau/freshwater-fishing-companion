# Freshwater Fishing Companion

**Document:** CHANGELOG.md  
**Document Revision:** 1.10.0  
**Document Status:** Approved  
**Last Updated:** 2026-08-07

# Unreleased

## Current-State UX Repairs

**Implementation Status: In Progress**

Prepared as one coherent source/documentation package.

### Changed

- Inert child cards are rendered as non-actionable unavailable cards with a visible `Coming Soon` status.
- The two currently implemented child actions remain interactive: Fish Guide `Search Fish` and Rig Guide `Browse All Rigs`.
- Dashboard Regulations CTA changes from generic `Browse →` to `Go to ODWC Regulations ↗`.
- Forest Journal Dashboard restores the approved primary-card right accent, stronger primary title, primary vertical spacing, gradient hover treatment, active treatment, and card overflow containment.
- Package-specific `REPLACEMENT` source labels are removed from deliberately edited source files under the approved status/version cleanup rule.

### Preserved

- Dashboard card order and route architecture.
- Current pill CTA styling.
- Fish Search.
- Rig browse/detail behavior.
- Tackle contextual `Name ⓘ` interaction.
- Inline Rig readiness and persistence.
- Current data/media.
- Dormant theme files remain untouched.

### Validation

Pending GitHub push and runtime validation. See `workstreams/UX-REPAIRS-VALIDATION.md`.

## Architecture, Data-Model, UX, and Handoff Decisions

Previously approved decisions remain governed by `DECISIONS.md`, including D022–D041.

## Rig and Tackle Reference Refresh

Current Rig pages use authoritative text build instructions, verified external Rig references, contextual Tackle recognition media, and integrated inline readiness.

Historical release detail remains in prior changelog revisions and `MILESTONES.md`.
