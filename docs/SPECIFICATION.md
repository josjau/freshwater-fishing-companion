# Freshwater Fishing Companion

**Document:** SPECIFICATION.md  
**Document Revision:** 1.0.0  
**Document Status:** Superseded  
**Maintenance Status:** Retired from active maintenance  
**Retirement Baseline:** `2f7c6ea41157ca68142575f8696525dc993f19f9`  
**Last Updated:** 2026-08-21

# Status

`SPECIFICATION.md` is no longer an active governing source.

The project deliberately retired the broad Version 1 specification after a targeted no-loss uniqueness review showed that its valid requirements are better owned by focused canonical documents.

The prior full specification remains available in Git history for historical review. It must not override current governing documents.

# Canonical Replacement Owners

- Mission, target users, product principles, and success framing → `PROJECT.md`
- Current technical/source architecture → `ARCHITECTURE.md`
- Durable approved architecture/product/UX decisions → `DECISIONS.md`
- Product milestone order and future direction → `ROADMAP.md`
- Workflow and documentation operating rules → `DEVELOPMENT_WORKFLOW.md`
- Current formal continuation → `HANDOFF.md`
- Material non-closed carry-forward items → `ACTIVE-CHANGE-LEDGER.md`
- Domain schemas/ownership → applicable `data-model/*.md` documents
- Media standards → `MEDIA_GUIDE.md`
- Interface/coding standards → `STYLE_GUIDE.md`

# No-Loss Uniqueness Review

The retirement review identified three valid requirements that required deliberate promotion before this file could stop being maintained.

## SPEC-U01 — Base architecture recurring-service-cost boundary

**Promoted to:** `ARCHITECTURE.md`

The core/base local application architecture should not require recurring paid services. Any future recurring external-service dependency for core functionality requires explicit architectural approval.

## SPEC-U02 — Graceful degradation of external resources

**Promoted to:** `ARCHITECTURE.md`

External sites, embeds, media sources, and other third-party resources are optional dependencies around the local application core. Their failure/unavailability must degrade gracefully and must not prevent otherwise-supported local functionality from operating.

## SPEC-U03 — Automatic shopping/retailer integration

**Promoted to:** `ROADMAP.md` Parking Lot

Automatic shopping/retailer integration is parked until demonstrated need and explicit approval.

# Deliberately Not Migrated as Requirements

Two prior `shall` statements were intentionally **not** carried forward because later canonical owners correctly leave those decisions unresolved:

1. Catch Log "general location" wording is not a locked Version 1 field requirement. The Catch Log/User Data gate owns the future location/privacy decision.
2. Backup/restore capability wording is not a pre-approved production contract. `ROADMAP.md` and `data-model/08-BACKUP.md` correctly require the User Data architecture gate to decide the applicable product scope and detailed behavior.

# Permanent Rule

If historical Specification text conflicts with a current canonical owner, the current canonical owner controls.
