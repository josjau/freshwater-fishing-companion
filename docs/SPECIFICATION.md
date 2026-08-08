# Freshwater Fishing Companion

**Document:** SPECIFICATION.md  
**Document Revision:** 0.2.0  
**Document Status:** Draft  
**Last Updated:** 2026-08-07

# Purpose

This document defines functional requirements for Version 1 of Freshwater Fishing Companion. It describes intended behavior without replacing the authoritative architecture and structural decisions.

# Design Goals

The Companion is designed to:

- Help new anglers learn freshwater fishing.
- Organize fishing equipment and tackle.
- Recommend suitable rigs, techniques, and lures.
- Record catches.
- Encourage legal and ethical fishing.
- Operate offline.
- Remain simple, fast, and easy to use.
- Find relevant information quickly and make pertinent adjacent knowledge easy to reach.

# Target Users

Version 1 is designed primarily for new anglers, families, casual freshwater anglers, and anglers learning new techniques. Initial regional content prioritization focuses on northeast Oklahoma and southwest Kansas.

# Core Features

## Fish Guide

Users shall be able to browse/search supported fish species, view identification/habitat information, and move into pertinent related rigs, lures, conditions, techniques, and official regulation resources as those relationships are implemented.

## Rig Guide

Users shall be able to:

- Browse/search supported Rigs.
- Learn when each Rig is appropriate.
- View canonical required components.
- Follow authoritative physical assembly instructions.
- View compatible reusable Techniques.
- Compare Rig requirements with availability/readiness.

The approved initial target is a 20-Rig regional library with six Core Rigs used to build confidence before expanding the fishing arsenal.

## Technique Guide

Users shall be able to browse reusable presentation Techniques, learn when they apply, view beginner guidance, and understand common mistakes. Technique owns reusable presentation behavior; Rig owns physical assembly/configuration.

## Knot Guide

Users shall be able to browse Knots, learn recommended uses, view line compatibility, and follow step-by-step instructions.

## Lure / Tackle Reference

Users shall be able to identify canonical lure/tackle concepts and move into relevant related knowledge. Canonical Tackle defines functional tackle type rather than exact user ownership.

## My Tackle / Inventory

My Tackle records actual items owned by the user. The detailed owned-item schema remains Open.

Persistent ownership shall only be created/changed through explicit My Tackle ownership-management workflows. Other features may read My Tackle but may not silently write ownership.

## Rig Readiness

When My Tackle becomes authoritative, Rig Readiness shall automatically satisfy required canonical Tackle types that the user owns. A user may mark a missing component temporarily available for the current build/session without creating persistent ownership.

Readiness answers buildability first; it does not require an ideal brand/model combination.

## Recommendations

Recommendations belong to Decision Knowledge and should explain why they were made whenever practical. Approved product-recommendation tiers are Best of the Best, Best Bang for the Buck, Best Budget, Best of the Rest, and Avoid.

## Catch Log

Users shall be able to record catches and associate them with relevant canonical entities while adding User Knowledge such as notes and general location.

## Favorites

Users shall be able to favorite commonly used reference items for quick access.

## Search

Search shall be relevance-first and operate offline. It should identify the strongest intended entity rather than return broad weak matches merely because related wording appears somewhere in a record.

After a result is selected, connected knowledge should expose pertinent next steps without overwhelming the user.

The current substring implementation is a temporary small-dataset implementation; lightweight deterministic relevance ranking is approved before dataset growth makes Search noisy.

## Backup and Restore

Users shall be able to export/import/restore backups and validate compatibility as that feature is implemented.

# User Knowledge Safety

User-entered and imported content is untrusted by default. Rendering paths shall use safe DOM text rendering unless a centrally owned sanitization path is explicitly approved for formatted content.

# External Regulation Links

Official regulations remain external rather than copied into the app. External CTAs should name the destination and use `↗`; the Dashboard uses `Go to ODWC Regulations ↗` for Oklahoma regulations.

# Non-Functional Requirements

The Companion shall:

- Operate offline for supported Version 1 functions.
- Store user data locally unless a future approved architecture changes this.
- Start/respond quickly.
- Preserve user data.
- Avoid unnecessary complexity.
- Require no recurring service costs for the base architecture.
- Keep common field workflows within approximately three intentional interactions when practical.
- Maintain accessible distinction between working and unavailable features.

# Version 1 Exclusions / Deferred Sophistication

Deferred unless separately approved by demonstrated need:

- Cloud synchronization
- User accounts
- Social features
- Live weather
- Live regulation updates
- AI fish identification
- Online product pricing
- Automatic shopping integration
- Heavy fuzzy/NL Search infrastructure
- Commercial ProductDefinition catalog architecture

# Success Criteria

Version 1 is successful when a new angler can quickly find trustworthy information, build confidence with core fishing methods, understand what is needed for a Rig, determine whether the Rig is buildable, and move into pertinent connected knowledge without unnecessary navigation or noise.

# Related Documents

- `HANDOFF.md`
- `PROJECT.md`
- `ARCHITECTURE.md`
- `ROADMAP.md`
- `STYLE_GUIDE.md`
- `DECISIONS.md`
- `data-model/README.md`
