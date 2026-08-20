# Freshwater Fishing Companion

**Document:** SPECIFICATION.md  
**Document Revision:** 0.2.1  
**Document Status:** Draft  
**Last Updated:** 2026-08-19

# Purpose

This document defines functional requirements for Version 1 of Freshwater Fishing Companion. It describes intended behavior without replacing the authoritative architecture and structural decisions.

# Design Goals

The Companion is designed to:

- Help new anglers learn freshwater fishing.
- Organize fishing equipment and tackle.
- Recommend suitable rigs, techniques, and lures.
- Record catches.
- Encourage legal and ethical fishing.
- Operate offline for supported local functions where practical.
- Remain simple, fast, and easy to use.
- Find relevant information quickly and make pertinent adjacent knowledge easy to reach.

# Target Users

Version 1 is designed primarily for new anglers, families, casual freshwater anglers, and anglers learning new techniques.

The forward Version 1 regional content focus is:

- Northeast Oklahoma
- Southeast Kansas
- Southwest Missouri
- Northwest Arkansas

Existing validated domains may retain a narrower original validation context until deliberately reconciled. Regional expansion is additive by default rather than a reason to invalidate otherwise-correct existing content.

# Core Features

## Fish Guide

Users shall be able to browse/search supported fish species, view identification/habitat information, and move into pertinent related rigs, lures, conditions, techniques, and official regulation resources as those relationships are implemented.

Fish Guide search shall follow hierarchical scoped-search behavior: navigation context defines the eligible search universe, deeper navigation narrows rather than silently broadens that universe, and helper/empty-state text must describe the actual scope.

## Rig Guide

Users shall be able to:

- Browse/search supported Rigs.
- Learn when each Rig is appropriate.
- View canonical required components.
- Follow authoritative physical assembly instructions.
- Move into applicable reusable Technique guidance when the Technique domain and its canonical relationship architecture are implemented.
- Compare Rig requirements with availability/readiness.

The approved initial target is the validated 20-Rig library with six Core Rigs used to build confidence before expanding the fishing arsenal.

The original 20-Rig library was selected and validated using Northeast Oklahoma and Southwest Kansas as its original regional-practicality scope. It remains canonical and will receive an additive Four-State adequacy audit.

## Technique Guide

Users shall be able to browse reusable presentation Techniques, learn when they apply, view beginner guidance, and understand common mistakes.

Technique owns reusable presentation behavior; Rig owns physical assembly/configuration. The canonical owner and structure of Rig↔Technique compatibility remain deferred until the Technique architecture gate under D056.

## Knot Guide

Users shall be able to:

- Search and browse canonical Knots.
- Discover Knots through task-first beginner navigation.
- View recommended uses and compatible line types.
- Follow authoritative step-by-step in-app tying instructions.
- Open approved instructional-media references that match the canonical tying method.
- Navigate to applicable Rig usage and related connected knowledge.
- Use the completed Reel & Line Setup workflow for Spinning, Spincast, and Baitcasting reels.

Reel & Line Setup shall support beginner reel identification, line type guidance, line-capacity interpretation, backing/main-line/leader logic, canonical Knot handoffs, reel-specific spooling guidance, and a final Reel Ready handoff to the Rig Guide.

Canonical in-app Knot tying steps remain authoritative even when external instructional media is available.

## Lure / Tackle Reference

Users shall be able to identify canonical lure/tackle concepts and move into relevant related knowledge. Canonical Tackle defines functional tackle type rather than exact user ownership.

## My Tackle / Inventory

My Tackle records actual items owned by the user.

Detailed ownership schema, persistence model, migration behavior, backup/restore integration, and user/profile ownership remain deferred to the Settings / User Data Architecture Gate.

Persistent ownership shall only be created/changed through explicit My Tackle ownership-management workflows. Other features may read My Tackle but may not silently write ownership.

## Rig Readiness

When My Tackle becomes authoritative, Rig Readiness shall automatically satisfy required canonical Tackle types that the user owns. A user may mark a missing component temporarily available for the current build/session without creating persistent ownership.

Readiness answers buildability first; it does not require an ideal brand/model combination.

## Recommendations

Recommendations belong to Decision Knowledge and should explain why they were made whenever practical. Approved product-recommendation tiers are Best of the Best, Best Bang for the Buck, Best Budget, Best of the Rest, and Avoid.

## Catch Log

Catch Log implementation follows the Settings / User Data Architecture Gate and My Tackle in the approved roadmap sequence.

Users shall be able to record catches and associate them with relevant canonical entities while adding User Knowledge such as notes and general location.

## Favorites / Saved Content

A generic Favorites feature is not currently a committed Version 1 requirement.

Near project completion, evaluate whether actual workflows justify generic Favorites, narrower saved-item concepts, or removal of the placeholder entirely.

## Search

Search shall be relevance-first and operate offline for locally available canonical data.

The current implementation uses lightweight deterministic relevance ranking. Canonical identity matches outrank weaker metadata matches, equal-confidence results retain stable source order, and search remains scoped to the current navigation context unless a deliberate broader search scope is selected.

After a result is selected, connected knowledge should expose pertinent next steps without overwhelming the user.

Heavy fuzzy matching, sophisticated typo tolerance, natural-language intent, and cross-domain global ranking remain deferred until demonstrated by actual use.

## Backup and Restore

Backup/export and restore/import capability is an approved architecture-gate requirement for persistent User Knowledge.

Exact format, compatibility validation, rollback behavior, migration semantics, and device-transfer expectations must be settled during the Settings / User Data Architecture Gate before My Tackle or Catch Log persistence is implemented.

# User Knowledge Safety

User-entered and imported content is untrusted by default. Rendering paths shall use safe DOM text rendering unless a centrally owned sanitization path is explicitly approved for formatted content.

# External Regulation Links

Official regulations remain external rather than copied into the app. External CTAs should name the destination and use `↗`; the Dashboard uses `Go to ODWC Regulations ↗` for Oklahoma regulations.

# Offline and External Resource Boundary

Canonical local reference data, core navigation, locally stored User Knowledge, and supported in-app instructional content should remain usable offline where practical.

Features explicitly dependent on external regulation sites, external instructional media, embedded video, or other third-party resources require connectivity and must fail gracefully when unavailable.

# Non-Functional Requirements

The Companion shall:

- Operate offline for supported Version 1 local functions where practical.
- Store user data locally unless a future approved architecture changes this.
- Start/respond quickly.
- Preserve user data according to the future User Data architecture.
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
