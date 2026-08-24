# Freshwater Fishing Companion — Handoff

**Document:** HANDOFF.md  
**Document Revision:** 2.3.0  
**Document Status:** Approved  
**Role:** Compact formal GitHub recovery/continuation entrypoint  
**Last Updated:** 2026-08-24

# Purpose

This file is the formal GitHub recovery entrypoint for Freshwater Fishing Companion.

It intentionally does **not** duplicate complete milestone history, domain architecture, detailed open-item reasoning, or implementation evidence. Those facts belong to their canonical owners.

GitHub `main` remains authoritative for production source and formally reconciled documentation.

`WORKING_STATE.md` is the live local current-state and exact-resume record. During the open workflow migration, the Google Drive **Freshwater Fishing Companion — Working State** remains authoritative for any migration delta not yet reconciled into GitHub:

https://docs.google.com/document/d/1Eg_ipGeTGjBiRF3V2CIOtWuuouRxPOh0TMuLcxRj0MU

# Start Here

For a new project session:

1. Confirm repository root, branch, working-tree status, local `HEAD`, local `origin/main`, and remote.
2. Read `WORKING_STATE.md` for the live workstream and exact resume point.
3. Read this Handoff.
4. Read `ACTIVE-CHANGE-LEDGER.md` for every material non-closed item.
5. Read the governing document for the specific work being resumed.
6. While Working State says the workflow transition is open, also read the Google Working State before substantive work—except during the explicitly designated repository-documentation-only recovery test, which must first establish its result without consulting Google.
7. Never assume a prior proposed or local file version was committed/pushed; verify the actual repository state first.

# Formal Authority Map

| Question | Canonical owner |
|---|---|
| What is this project and who is it for? | `PROJECT.md` |
| What is the current technical/source architecture? | `ARCHITECTURE.md` |
| What durable decisions govern the project? | `DECISIONS.md` |
| How must implementation/documentation work be performed? | `DEVELOPMENT_WORKFLOW.md` |
| What is the product milestone order and future direction? | `ROADMAP.md` |
| What non-closed work must remain visible? | `ACTIVE-CHANGE-LEDGER.md` |
| What is the live local workstream state and exact resume point? | `WORKING_STATE.md` |
| What is the latest formal continuation point? | `HANDOFF.md` |
| What changed materially over time? | `CHANGELOG.md` |
| What historical milestones were completed? | frozen `MILESTONES.md` |
| What does a domain own? | the applicable data-model/domain standard |
| What happened during a bounded closed workstream? | retained archive/Git history after durable truth is promoted |
| What governs the required final Version 1 visual/mobile audit? | `V1-DESIGN-AUDIT.md` |

`SPECIFICATION.md` is retired from active maintenance and remains only as a supersession/retirement pointer after its unique requirements were reconciled.

# Current Operational Workstream

**Workflow Transition — IN PROGRESS / PENDING CROSS-COMPUTER VALIDATION**

Fish production is paused. The approved documentation-only transition establishes direct local-repository work, repository-backed Working State, one write-authorized chat per checkout, GitHub `origin/main` as the cross-computer synchronization point, and a deliberate commit/push handoff boundary.

The transition cannot close until the same verified checkpoint is present cleanly on both computers and a fresh chat on the second computer successfully recovers the correct state from repository documentation alone. The second computer is not currently available, so that validation is intentionally deferred to a later session. Until closure, the Google Working State remains authoritative for unreconciled migration delta.

# Current Product Milestone

**Fish Guide — Production Wave 3: Bass — STARTED**

Repository Audit Cleanup and Fish Guide Phase 0 are closed. Trout Production Package 1 is **CLOSED** at `0ea38b53cde8f1390cc84ea2ccd135acd3ee4431` (`Fish - Search Fix`) after GitHub verification, static validation, and user-confirmed fresh-session live validation. The broader prepared Hotfix 2 was not applied and remains superseded unless a fresh-load regression later proves it necessary.

Gar Production Package is **CLOSED** at `cc7840c6ae96bc488e3f443be7e6e5f737508e38` (`Fish - Gar Final`) with Longnose Gar + Spotted Gar, their deterministic comparison relationship, verified USFWS Duane Raver primary-identification media, approved evidence/search content, no Fish-to-Rig guidance, production-copy cleanup, reusable subject-centered Fish image framing, and Specialized Targeting with external research topics.

Fish Guide Production Wave 1 — **Common Carp + Freshwater Drum + Paddlefish** — is **CLOSED** at source commit `be8b2164f62770ef30a4a3cac8238aa5f4f004f7` (`Fish - UX tweaks - Visibility fixes`) after package fidelity checks, static validation, and user-confirmed mobile Fish validation.

Fish Guide Production Wave 2 — **Walleye / Sauger + Catfish** — is **CLOSED**. The primary Wave 2 source landed at `8399ae0cee0f5c4b9301041c904707430352bbd1` (`Fish - Walleye Sauger Refinement`). The final Compare Fish anatomical body-axis alignment refinement landed at `d55cf21d7de0099c259de70ad5b113a4d78ea91d` (`Fish - Compare Card Refinement`) and was merged into `main` at `f47ece0d243457d90a8b980855130af043d98a05`. Final desktop/mobile review approved the corrected main Compare Fish presentation. Post-push verification confirmed the refinement files match the approved review package, JavaScript syntax passes, CSS structure passes, and no source drift was detected.

FISH-001 through FISH-007 are terminal Phase 0 history. The active Fish work remains:

- **FISH-008 — approved Fish production architecture implementation across the remaining locked library**
- **FISH-009 — approved Fish UX implementation across the remaining locked library**

Current work is **Production Wave 3 — Bass**. After Bass closes, continue with Sunfish & Crappie unless evidence, media, relationship complexity, or a genuine new product decision requires a smaller review boundary.

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

The validated Trout, Gar, Wave 1, and Wave 2 implementations establish the working Fish presentation baseline for remaining Fish production:

- Fish selection cards mirror the Fish identity/detail hierarchy.
- Fish identity presents Category/Name, primary identification image, scientific name, family, and aliases when present; descriptive identification summary belongs in **How to Identify It** rather than being repeated in the identity card.
- The primary identification image does not repeat the Fish name as an extra visible caption.
- Current Fish Selection media uses the approved fixed 2.4:1 presentation block; Fish Detail identity media uses the approved fixed 2.2:1 block. Per-Fish scale/position tuning is presentation-only and must preserve complete diagnostic anatomy.
- Eligible Fish identification assets may be isolated to transparency and displayed over the exact canonical reference-media surface `#f4f0e8`; background removal is limited to non-Fish pixels and must not alter Fish color, anatomy, markings, proportions, fin rays, barbels, snouts, tails, or other diagnostic detail.
- Compare Similar Fish follows the identity card and keeps the existing 84 × 56 thumbnail. At normal desktop widths it may use up to two choices side-by-side; on mobile/narrow layouts it uses one comparison tile per row. The thumbnail remains vertically centered against the full text group.
- **Compare Similar Fish** is an approved workflow/action card and uses the standardized workflow visual treatment rather than ordinary browse-card treatment.
- Dedicated Compare Fish uses standardized image blocks with per-Fish scale/position tuning. Fish pairs are visually aligned by a shared anatomical body-axis baseline rather than raw image bounding-box centering; compare-specific tuning must preserve natural proportions and complete diagnostic anatomy.
- How to Identify It owns the Fish summary plus detailed identification traits.
- Normal Fish information sections use the approved plain/basic-border treatment.
- Safety uses a deliberate semantic warning treatment rather than ordinary information-card emphasis.
- Habitat & Water uses the established compact at-a-glance visual grammar.
- Rigs to Start With uses connected knowledge and links to canonical Rig detail instead of restating Rig instructions; redundant helper copy is omitted.
- Fish artwork with excessive built-in whitespace may use presentation-only, per-Fish subject framing; compact and Fish Detail contexts are tuned independently, both width and height/centering must be evaluated, natural proportions and diagnostic extremities must be preserved, and canonical source/provenance remains authoritative.
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

Wave 2 validated the directional icon convention itself: external destinations retain `↗`; internal destinations that use a directional arrow use `→`, positioned with the destination text and rendered with sufficient visual weight. The final audit still owns broader cross-domain color-family, pill-versus-text, and shape-selection normalization.

The final design audit is a **required Version 1 completion gate**, but it is not a blocker for continuing Fish production.

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

1. Continue **Workflow Transition only**. Do not resume Fish source or media work.
2. Read `WORKING_STATE.md` and compare its checkpoint/resume instructions with the actual local Git state.
3. Determine whether the commit containing `WORKING_STATE.md` is present and verified on GitHub `main`. If not, complete review/validation, obtain commit/push authorization, push it, and verify every written file.
4. If the checkpoint is verified, confirm the current checkout is clean and local `HEAD` matches `origin/main` and the verified GitHub checkpoint.
5. Leave the transition open until the second computer is available.
6. In that later session, pull the same verified checkpoint on the second computer, confirm a clean matching checkout, and start a fresh chat rooted at that repository.
7. Require the fresh chat to identify the authority model, Workflow Transition status, and exact resume point from repository documentation alone, without prior chat history or the Google Working State.
8. Only after that recovery test passes may the transition be explicitly closed and the Google Working State retired/frozen as the active continuity source.
9. Start Wave 3 Bass in a separate task after transition closure. The protected post-transition Fish resume boundary is recorded in `WORKING_STATE.md`.

# Non-Negotiable Working Rules

- GitHub `main` is authoritative for committed production source and formally reconciled documentation.
- Verify the local checkout against the intended GitHub baseline before changing an existing file.
- Follow the Repository Integrity and Drift Prevention Standard in `DEVELOPMENT_WORKFLOW.md` before substantive work and at closeout.
- Make targeted semantic edits unless a broader replacement/consolidation has been explicitly approved.
- After planned edits are complete, inspect the resulting file where structural risk exists and review the complete local diff before commit.
- Do not assume a previously proposed file version was implemented.
- Finish/validate the active segment or deliberately park it before moving to a dependent segment.
- Material decisions, confirmed defects, parked/deferred/rejected outcomes, and implementation/validation state must not exist only in chat.
- Questions, review findings, and change suggestions are discussion-only until the user explicitly approves implementation; maintain one coherent reviewable local change set where practical.
- During active sessions, update local `WORKING_STATE.md` at material boundaries; at formal checkpoints promote durable truth to the correct GitHub owner and reconcile the Active Change Ledger.
- Use one chat per coherent outcome/workstream, and allow only one write-authorized chat against the same checkout at a time.
- Before moving work to another computer, commit and push the reviewed checkpoint; uncommitted files are never a cross-computer handoff.
- When final user approval and required validation complete a section, perform the foreseeable closeout documentation automatically; do not wait for a separate documentation request.
- Historical/closed records do not override current governing documents.
- Do not introduce newly discovered semantic/content/source changes inside an approved implementation scope without explicit user approval.

# Historical References

Repository Audit provenance is retained under:

- `archive/workstreams/repository-audit/`

Fish Guide Phase 0 provenance is retained under:

- `archive/workstreams/fish-guide/`

Archives preserve historical workstream state and evidence. Older OPEN/PENDING/PASS wording inside those records reflects the state at the time and does not override current governing documents or this Handoff.
