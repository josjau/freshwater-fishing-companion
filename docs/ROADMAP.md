# Freshwater Fishing Companion

**Document:** ROADMAP.md  
**Document Revision:** 0.2.0  
**Document Status:** Draft  
**Last Updated:** 2026-08-07

# Purpose

This document defines planned development direction for Freshwater Fishing Companion. It does not override `DECISIONS.md`, `ARCHITECTURE.md`, or the current-state map in `HANDOFF.md`.

Features may move between releases as priorities change, but a new build segment does not begin until the current segment is finalized and validated.

# Development Philosophy

- Develop in coherent, testable segments.
- Plan twice and write/build once.
- Correctness before polish.
- Actual need before theoretical scale.
- One source of truth.
- Finish and validate the current segment before beginning the next.

# Current Approved Near-Term Direction

## Documentation / Governance Closeout

Before the next build segment:

- Push the current documentation package.
- Verify the actual GitHub files.
- Validate archive moves and documentation structure.
- Update `HANDOFF.md` if the resulting repository state differs from the prepared package.

## Current-State UX Repairs

Approved / Not Implemented:

- Mark unimplemented child cards `Coming Soon` or equivalent without misleading active affordances.
- Change the Dashboard Regulations CTA to `Go to ODWC Regulations ↗`.
- Restore the previously approved Forest Journal Dashboard styling regression without redesign.

## Rig / Tackle Integrity

Approved / Not Implemented:

- Derive Tackle `Used In` relationships from `Rig.componentRequirements`.
- Resolve Rig component display names from canonical Tackle.
- Remove duplicate inverse/name sources during the deliberate cleanup.

## Regional Rig Expansion

Approved / Not Implemented:

- Expand to the approved 20-Rig library for northeast Oklahoma and southwest Kansas.
- Include Carolina Rig as a canonical record.
- Present six Core Rigs as the confidence-building starting set.

## My Tackle

The architecture is approved at a high level, but the detailed owned-item schema remains Open and must be discussed before implementation.

Approved principles:

- Canonical Tackle defines functional type.
- My Tackle defines actual owned items.
- Rig Readiness reads My Tackle.
- My Tackle is the only persistent ownership source.
- Persistent ownership changes only through explicit My Tackle management workflows.
- Readiness answers buildability first; optimization comes later.

# Parking Lot

Intentionally deferred until demonstrated by actual need or a later milestone:

- Heavy fuzzy Search and advanced natural-language intent parsing
- Global cross-domain result dumps
- Dedicated Recommendation schema/model document
- Commercial ProductDefinition architecture
- Product-level catalog/SKU/retailer modeling
- Advanced size/style-aware readiness
- Shared multi-theme CSS architecture and revival of historical themes
- Automated orphan-asset, broken-ID, and documentation-link validation
- AI fish identification
- Actual-size lure calibration
- Container hierarchy
- Trip planning
- Smart packing lists
- Cloud synchronization
- Online product pricing
- Live weather integration
- Live regulation updates
- Family sharing
- Achievement system

# Out of Scope for Version 1

- Social networking
- Competitive leaderboards
- Marketplace functionality
- Subscription features
- Advertising

# Release / Segment Completion

A feature or segment is not complete merely because files were generated or staged.

Closeout requires, as applicable:

- Decisions finalized
- Implementation completed
- Testing/preflight completed
- Files pushed to GitHub
- Actual GitHub state verified
- Runtime/deployment validated
- All relevant documentation updated and validated

See `DEVELOPMENT_WORKFLOW.md`.

# Related Documents

- `HANDOFF.md`
- `PROJECT.md`
- `SPECIFICATION.md`
- `ARCHITECTURE.md`
- `DECISIONS.md`
- `DEVELOPMENT_WORKFLOW.md`
