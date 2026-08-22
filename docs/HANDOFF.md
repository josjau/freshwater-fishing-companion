# Freshwater Fishing Companion — Handoff

**Document:** HANDOFF.md  
**Document Revision:** 2.2.6  
**Document Status:** Approved  
**Role:** Compact formal GitHub recovery/continuation entrypoint  
**Last Updated:** 2026-08-22

# Purpose

This file is the formal GitHub recovery entrypoint for Freshwater Fishing Companion.

It intentionally does **not** duplicate complete milestone history, domain architecture, detailed open-item reasoning, or implementation evidence. Those facts belong to their canonical owners.

GitHub `main` remains authoritative for production source and formally reconciled documentation.

The Google Drive **Freshwater Fishing Companion — Working State** remains the high-frequency cross-chat in-progress delta between formal GitHub checkpoints:

https://docs.google.com/document/d/1Eg_ipGeTGjBiRF3V2CIOtWuuouRxPOh0TMuLcxRj0MU

# Start Here

For a new project session:

1. Read the Working State document.
2. Re-fetch authoritative GitHub `main`.
3. Read this Handoff.
4. Read `ACTIVE-CHANGE-LEDGER.md` for every material non-closed item.
5. Read the governing document for the specific work being resumed.
6. Never assume a prior proposed file version was implemented; verify GitHub first.

# Formal Authority Map

| Question | Canonical owner |
|---|---|
| What is this project and who is it for? | `PROJECT.md` |
| What is the current technical/source architecture? | `ARCHITECTURE.md` |
| What durable decisions govern the project? | `DECISIONS.md` |
| How must implementation/documentation work be performed? | `DEVELOPMENT_WORKFLOW.md` |
| What is the product milestone order and future direction? | `ROADMAP.md` |
| What non-closed work must remain visible? | `ACTIVE-CHANGE-LEDGER.md` |
| What is the latest formal continuation point? | `HANDOFF.md` |
| What changed materially over time? | `CHANGELOG.md` |
| What historical milestones were completed? | frozen `MILESTONES.md` |
| What does a domain own? | the applicable data-model/domain standard |
| What happened during a bounded closed workstream? | retained archive/Git history after durable truth is promoted |

`SPECIFICATION.md` is retired from active maintenance and remains only as a supersession/retirement pointer after its unique requirements were reconciled.

# Current Product Milestone

**Fish Guide — Production Wave 1: Carp + Drum + Paddlefish**

Repository Audit Cleanup and Fish Guide Phase 0 are closed. Trout Production Package 1 is **CLOSED** at `0ea38b53cde8f1390cc84ea2ccd135acd3ee4431` (`Fish - Search Fix`) after GitHub verification, static validation, and user-confirmed fresh-session live validation. The broader prepared Hotfix 2 was not applied and remains superseded unless a fresh-load regression later proves it necessary.

Gar Production Package is also **CLOSED**. Longnose Gar + Spotted Gar landed at `cc7840c6ae96bc488e3f443be7e6e5f737508e38` (`Fish - Gar Final`) with their deterministic comparison relationship, verified USFWS Duane Raver primary-identification media, approved evidence/search content, no Fish-to-Rig guidance, production-copy cleanup, reusable subject-centered Fish image framing, and Specialized Targeting with external research topics. Post-push package fidelity and deterministic validation passed, and the user confirmed the deployed Gar/Trout review PASS.

FISH-001 through FISH-007 are terminal Phase 0 history. The active Fish work remains:

- **FISH-008 — approved Fish production architecture implementation**
- **FISH-009 — approved Fish UX implementation**

The next coherent production wave is **Common Carp + Freshwater Drum + Paddlefish**. Common Carp and Freshwater Drum require no Version 1 pairwise identification relationship. Paddlefish also requires no pairwise identification relationship, but it should use the established Specialized Targeting pattern because deliberate targeting commonly involves specialized/regulation-sensitive methods outside the Companion's built-in guidance.

A user-approved carry-forward presentation correction must be implemented when the shared Fish renderer/CSS is next opened: Specialized Targeting should present its description first, then `Try searching for` research guidance, then a more visually prominent **Safety** subsection. Apply the corrected shared pattern to Gar as a regression update in that next Fish build; do not create a separate Gar review solely for this follow-up.

After the first combined wave validates cleanly, the preferred production sequence is larger coherent waves rather than returning to one-category-at-a-time experimentation:

1. Common Carp + Freshwater Drum + Paddlefish.
2. Walleye / Sauger group + Catfish group.
3. Bass group.
4. Sunfish & Crappie group.

Adjust wave size only when evidence, media, relationship complexity, or a genuine new product decision requires a smaller review boundary.

# Fish Production Contract

Before editing Fish production source, read at minimum:

- `docs/data-model/02-FISH.md`
- `docs/data-model/09-RELATIONSHIPS.md`
- `docs/FISH_REFERENCE_SOURCES.md`
- `docs/MEDIA_GUIDE.md`
- `docs/DECISIONS.md` D057–D061
- `docs/DEVELOPMENT_WORKFLOW.md`

The completed Phase 0 design record is retained under:

- `archive/workstreams/fish-guide/FISH-GUIDE-PHASE-0.md`
- `archive/workstreams/fish-guide/FISH-GUIDE-PHASE-0-AUDIT-REVISIONS.md`

Historical OPEN/PENDING wording inside those archived records reflects the state at the time and does not override current governing documents.

## Established Fish Detail Pattern

The validated Trout and Gar implementations establish the working Fish presentation baseline for remaining Fish production:

- Fish selection cards mirror the Fish identity/detail hierarchy.
- Fish identity order is Category → Name → primary identification image → scientific name → summary → family → aliases when present.
- The primary identification image does not repeat the Fish name as an extra visible caption.
- Compare Similar Fish follows the identity card, uses compact media-backed comparison choices, and supports up to two choices side-by-side at normal widths.
- How to Identify It remains Fish-owned identification content.
- Habitat & Water uses the established Rig at-a-glance visual grammar.
- Rigs to Start With uses the connected-knowledge pattern and links to canonical Rig detail instead of restating Rig instructions.
- Fish artwork with excessive built-in whitespace may use presentation-only, per-Fish subject framing; compact and Fish Detail contexts are tuned independently, both width and height/centering must be evaluated, natural proportions and diagnostic extremities must be preserved, and canonical media files remain unchanged.
- Fish that genuinely require specialized equipment, tactics, techniques, or regulation-sensitive methods may use Specialized Targeting with concise context plus useful external-search research topics. The approved forward ordering is Specialized Targeting description → `Try searching for` research guidance → prominent Safety subsection when safety content exists.
- Production-facing copy must be written for anglers; internal release/build terminology such as `Version 1`, `canonical`, or implementation-state language should not leak into user-facing descriptions when plain user-oriented wording is available.

This is a Fish-domain application of the existing Rig-detail baseline, not a separate site-wide design language.

# Repository Integrity Baseline

The Repository Audit Cleanup is **PASS / FINALIZED / CLOSED**.

Durable safeguards are owned by the **Repository Integrity and Drift Prevention Standard** in `DEVELOPMENT_WORKFLOW.md`, including:

- GitHub-authoritative repository preflight,
- governing-document/decision precedence,
- bounded exact baseline tracking,
- dependency/change-impact review,
- explicit supersession/retirement handling,
- documentation closeout and post-write verification,
- stale-status/cross-reference review,
- deterministic mechanical checks with human semantic review,
- event-based broader repository reconciliation,
- containment of Draft/planning/history authority,
- current-hierarchy interpretation of old PASS/CLOSED records.

The existing repository-integrity validator remains the single deterministic validator. Existing GitHub Actions checks remain non-blocking. Branch protection/required checks remain deliberately not required for the current workflow.

# Exact Resume Point

1. Read the Google Drive Working State and re-fetch authoritative GitHub `main`; expected baseline is the Gar-closeout documentation commit that follows `cc7840c6ae96bc488e3f443be7e6e5f737508e38` unless newer verified work exists.
2. Treat both Trout Production Package 1 and Gar Production Package as CLOSED. Do not reopen rejected Gar crop/zoom experiments or the superseded Trout Hotfix 2 without new evidence.
3. Start **Production Wave 1: Common Carp + Freshwater Drum + Paddlefish** with an evidence/content review before source implementation. Use the locked Phase 0 membership and relationship decisions rather than re-auditing inclusion.
4. For each Fish, prepare evidence-supported canonical content, verified primary-identification media/provenance, framing only if demonstrated necessary, deliberate Fish-to-Rig guidance evaluation, and scoped Search behavior. Common Carp, Freshwater Drum, and Paddlefish have no required Version 1 pairwise identification relationships.
5. Include the already-approved Specialized Targeting layout correction in this wave when shared renderer/CSS is opened: description → research topics → prominent Safety. Regression-check existing Gar after the shared change. Paddlefish should use the corrected specialized pattern; Common Carp and Freshwater Drum should not receive it without a demonstrated need.
6. Preserve FISH-003 staged activation: every active migrated Fish must satisfy complete record/category/evidence/media/relationship readiness; legacy Fish remain available until deliberately migrated.
7. After semantic/content approval for the wave, build one coherent review package where practical; then use the normal user review → push → GitHub/static verification → live-site validation → **automatic documentation/closure reconciliation** sequence. The user should not have to separately request foreseeable closeout documentation after final approval and PASS validation.
8. If Wave 1 validates cleanly, proceed with larger coherent waves: Walleye/Sauger + Catfish, then Bass, then Sunfish & Crappie, unless a real content/media/decision issue requires a smaller boundary.
9. Keep UX-002 visible as **APPROVED / PENDING IMPLEMENTATION** for the still-affected Rig/Knot scoped helpers; Fish helper examples must remain beginner-useful and mechanically valid for their exact active scope.

# Non-Negotiable Working Rules

- GitHub `main` is authoritative for existing repository files.
- Fetch the latest GitHub version before changing an existing source file.
- Follow the Repository Integrity and Drift Prevention Standard in `DEVELOPMENT_WORKFLOW.md` before substantive work and at closeout.
- Make targeted semantic edits unless a broader replacement/consolidation has been explicitly approved.
- After all planned edits to an existing source file are complete, provide a full-file validation copy.
- Do not assume a previously proposed file version was implemented.
- Finish/validate the active segment or deliberately park it before moving to a dependent segment.
- Material decisions, confirmed defects, parked/deferred/rejected outcomes, and implementation/validation state must not exist only in chat.
- During long active sessions, update Working State at material boundaries; at formal checkpoints promote durable truth to the correct GitHub owner and reconcile the Active Change Ledger.
- When final user approval and required validation complete a section, perform the foreseeable closeout documentation automatically; do not wait for a separate documentation request.
- Historical/closed records do not override current governing documents.
- Do not introduce newly discovered semantic/content/source changes inside an implementation package without explicit user approval.

# Historical References

Repository Audit provenance is retained under:

- `archive/workstreams/repository-audit/`

Fish Guide Phase 0 provenance is retained under:

- `archive/workstreams/fish-guide/`

Archives preserve historical workstream state and evidence. Older OPEN/PENDING/PASS wording inside those records reflects the state at the time and does not override current governing documents or this Handoff.
