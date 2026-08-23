# Freshwater Fishing Companion — Handoff

**Document:** HANDOFF.md  
**Document Revision:** 2.2.7  
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
| What governs the required final Version 1 visual/mobile audit? | `V1-DESIGN-AUDIT.md` |

`SPECIFICATION.md` is retired from active maintenance and remains only as a supersession/retirement pointer after its unique requirements were reconciled.

# Current Product Milestone

**Fish Guide — Production Wave 2: Walleye / Sauger + Catfish**

Repository Audit Cleanup and Fish Guide Phase 0 are closed. Trout Production Package 1 is **CLOSED** at `0ea38b53cde8f1390cc84ea2ccd135acd3ee4431` (`Fish - Search Fix`) after GitHub verification, static validation, and user-confirmed fresh-session live validation. The broader prepared Hotfix 2 was not applied and remains superseded unless a fresh-load regression later proves it necessary.

Gar Production Package is also **CLOSED**. Longnose Gar + Spotted Gar landed at `cc7840c6ae96bc488e3f443be7e6e5f737508e38` (`Fish - Gar Final`) with their deterministic comparison relationship, verified USFWS Duane Raver primary-identification media, approved evidence/search content, no Fish-to-Rig guidance, production-copy cleanup, reusable subject-centered Fish image framing, and Specialized Targeting with external research topics. Post-push package fidelity and deterministic validation passed, and the user confirmed the deployed Gar/Trout review PASS.

Fish Guide Production Wave 1 — **Common Carp + Freshwater Drum + Paddlefish** — is **CLOSED** at source commit `be8b2164f62770ef30a4a3cac8238aa5f4f004f7` (`Fish - UX tweaks - Visibility fixes`). The pushed GitHub blobs match the approved Review 5 package for all Wave 1 package files. User mobile-device validation approved Common Carp, Freshwater Drum, and Paddlefish image framing; Fish identity/identification separation; plain-border Fish information sections; semantic Safety treatment; and the standardized workflow treatment used by Compare Similar Fish. The same mobile review exposed cross-domain Rig/Knot/link/detail-page design inconsistencies that are intentionally deferred to the required final Version 1 design audit rather than reopening the validated Fish content. Those findings are owned by `docs/V1-DESIGN-AUDIT.md` and the Active Change Ledger.

FISH-001 through FISH-007 are terminal Phase 0 history. The active Fish work remains:

- **FISH-008 — approved Fish production architecture implementation across the remaining locked library**
- **FISH-009 — approved Fish UX implementation across the remaining locked library**

The next coherent production wave is **Walleye / Sauger group + Catfish group**. After that wave, continue with Bass, then Sunfish & Crappie, unless evidence, media, relationship complexity, or a genuine new product decision requires a smaller review boundary.

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

The validated Trout, Gar, and Wave 1 implementations establish the working Fish presentation baseline for remaining Fish production:

- Fish selection cards mirror the Fish identity/detail hierarchy.
- Fish identity presents Category/Name, primary identification image, scientific name, family, and aliases when present; descriptive identification summary belongs in **How to Identify It** rather than being repeated in the identity card.
- The primary identification image does not repeat the Fish name as an extra visible caption.
- Compare Similar Fish follows the identity card, uses compact media-backed comparison choices, and supports up to two choices side-by-side at normal widths.
- **Compare Similar Fish** is an approved workflow/action card and uses the standardized workflow visual treatment rather than ordinary browse-card treatment.
- How to Identify It owns the Fish summary plus detailed identification traits.
- Normal Fish information sections use the approved plain/basic-border treatment.
- Safety uses a deliberate semantic warning treatment rather than ordinary information-card emphasis.
- Habitat & Water uses the established compact at-a-glance visual grammar.
- Rigs to Start With uses connected knowledge and links to canonical Rig detail instead of restating Rig instructions.
- Fish artwork with excessive built-in whitespace may use presentation-only, per-Fish subject framing; compact and Fish Detail contexts are tuned independently, both width and height/centering must be evaluated, natural proportions and diagnostic extremities must be preserved, and canonical media files remain unchanged.
- Fish that genuinely require specialized equipment, tactics, techniques, or regulation-sensitive methods may use Specialized Targeting with concise context plus useful external-search research topics. The validated ordering is Specialized Targeting description → `Try searching for` research guidance → prominent semantic Safety subsection when safety content exists.
- Production-facing copy must be written for anglers; internal release/build terminology such as `Version 1`, `canonical`, or implementation-state language should not leak into user-facing descriptions when plain user-oriented wording is available.

These are validated Fish-domain presentation rules. Cross-domain normalization of links, section borders/accents, Core emphasis, compact relationship lists, popovers, and mobile density belongs to the required final Version 1 design audit and must not silently reopen approved Fish semantic content.

# Version 1 Design Audit Carry-Forward

`docs/V1-DESIGN-AUDIT.md` is the canonical backlog and execution standard for the required final site-wide visual/mobile audit.

The audit was created from findings observed during actual mobile validation of Fish Guide Production Wave 1. It includes, among other items:

- Rig `What You Need` density and `ⓘ` placement,
- one-Rig responsive two-column trial rather than automatic site-wide two-column conversion,
- component-popover Used In / Related Components navigation and Back behavior,
- compact text links versus pill/chip comparison on real mobile,
- consistent internal versus external link semantics and icon placement,
- reusable group/subsection heading treatment,
- Knot relationship-link consistency,
- Rig `Knots You'll Tie` context-label versus Knot-destination consistency,
- plain information-border versus accent/bloom semantics across Fish/Rig/Knot,
- Core designation versus section-level accenting,
- all-Knot opening-description treatment audit,
- Knot Visual Guide treatment and placement,
- unnecessary empty relationship copy,
- overall mobile density and space utilization.

This final design audit is a **required Version 1 completion gate**, but it is not a blocker for continuing Fish production now.

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

1. Read the Google Drive Working State and re-fetch authoritative GitHub `main`; expected source baseline is `be8b2164f62770ef30a4a3cac8238aa5f4f004f7` plus the Fish Wave 1 documentation-closeout commit that follows it, unless newer verified work exists.
2. Treat Trout Production Package 1, Gar Production Package, and Fish Guide Production Wave 1 (Common Carp + Freshwater Drum + Paddlefish) as CLOSED. Do not reopen their approved content/media/presentation without new evidence or a confirmed regression.
3. Start **Production Wave 2: Walleye / Sauger group + Catfish group** with evidence/content review before source implementation. Use the locked Phase 0 membership and relationship decisions rather than re-auditing inclusion.
4. For each Fish, prepare evidence-supported canonical content, verified primary-identification media/provenance, framing only if demonstrated necessary, deliberate Fish-to-Rig guidance evaluation, applicable pairwise identification relationships, and scoped Search behavior.
5. Reuse the validated Fish presentation baseline from Trout/Gar/Wave 1. Do not fold deferred Rig/Knot/site-wide design-audit work into the Fish wave merely because shared renderer/CSS is touched; only active Fish requirements and confirmed regressions belong in the Fish package.
6. Preserve FISH-003 staged activation: every active migrated Fish must satisfy complete record/category/evidence/media/relationship readiness; legacy Fish remain available until deliberately migrated.
7. Continue the normal content approval → coherent review package → user review → push → exact GitHub/static verification → mandatory live/mobile validation as applicable → automatic documentation/closure reconciliation sequence.
8. After Walleye/Sauger + Catfish validates cleanly, proceed with Bass, then Sunfish & Crappie unless a real evidence/media/relationship/product decision requires a smaller boundary.
9. Keep `UX-009` / `docs/V1-DESIGN-AUDIT.md` visible as a required final Version 1 design-completion gate. During active builds, append newly discovered cross-domain design inconsistencies to that audit rather than allowing them to disappear into chat history.
10. Keep UX-002 visible as **APPROVED / PENDING IMPLEMENTATION** for still-affected Rig/Knot scoped helpers; Fish helper examples must remain beginner-useful and mechanically valid for their exact active scope.

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
