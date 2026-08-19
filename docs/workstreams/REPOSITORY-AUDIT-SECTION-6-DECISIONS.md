# Freshwater Fishing Companion — Repository Audit Section 6 Decisions

**Document Revision:** 1.0.1  
**Document Status:** Approved  
**Implementation Status:** Governing Synchronization In Progress  
**Recorded:** 2026-08-19

# Scope

Section 6 — Governing Documents Comprehensive Synchronization.

This record captures approved governing decisions made during the Section 6 discussion before the broader governing-document reconciliation pass is packaged and applied.

# Decision 1 — Preserve Full-File Delivery and Clarify Targeted Scope

## Decision

Full-file replacement remains the standard final delivery method for changed production files.

The project distinguishes **change scope** from **delivery format**:

- changes remain narrowly targeted to the approved work,
- unrelated changes inside a replacement file are failures,
- the final implementation artifact for each changed production file is the complete resulting file,
- coherent multi-file production changes should normally be delivered as a repository-relative ZIP containing only repository files/folders,
- the user reviews, applies, commits, and pushes production packages through GitHub Desktop,
- assistant direct GitHub writes remain limited to project documentation (`.md`) unless the user explicitly authorizes a specific production-file write.

A complete full-file validation copy remains required after all planned edits to a source file are complete.

## Reason

Targeted patch-style editing previously produced repeated truncation/preservation problems. Full-file replacement provides a stable validation artifact while narrow authorized scope and diff checks prevent unrelated changes from entering the replacement.

Production ZIP delivery keeps the user in control of non-documentation repository changes and preserves GitHub Desktop review before commit.

## Current Implementation Status

**Approved / Current Workflow.**

Existing D014 and `docs/DEVELOPMENT_WORKFLOW.md` already establish GitHub authority, full-file replacement, production review, and post-push verification. Section 6 must clarify the distinction between targeted scope and full-file delivery without reverting to patch-style delivery.

## Future Trigger

Revisit only if the repository adopts a materially safer delivery mechanism that preserves complete-file validation, user review, integrity checking, and rollback clarity without recreating prior truncation risk.

## Canonical Owner

- `docs/DECISIONS.md` — D014
- `docs/DEVELOPMENT_WORKFLOW.md` — operating procedure

# Decision 2 — Commit Economy and Documentation Freshness

## Decision

The project should use as few commits as practical for a coherent section while preserving reviewability, validation boundaries, rollback safety, and accurate current-state documentation.

The preferred pattern is:

1. avoid commits during discussion/planning unless a durable decision must be preserved before implementation,
2. use one coherent implementation commit when practical, including documentation that can truthfully describe that repository state,
3. use a separate validation/closeout documentation commit only when later runtime, deployment, user validation, or correction changes the implementation status,
4. avoid separate commits for every small file or documentation adjustment when those changes can safely be grouped,
5. never reduce commit count by leaving governing/current-state documentation stale.

A third or additional commit within one section should have a concrete reason such as a discovered defect, required correction, or validation-driven state change rather than convenience alone.

## Reason

Too many small commits create repository noise and make short-window review harder. Conversely, overly broad commits reduce reviewability and rollback clarity. Documentation also needs timely updates to prevent future drift. Commit planning must balance all three concerns rather than optimizing only for minimum count.

## Current Implementation Status

**Approved / Governing Synchronization Pending.**

Section 6 itself should follow this rule by consolidating the final governing-document reconciliation rather than committing each approved wording adjustment separately.

## Future Trigger

Revisit if repository collaboration, branching, CI, release tooling, or contributor count creates a materially different commit/merge requirement.

## Canonical Owner

- `docs/DEVELOPMENT_WORKFLOW.md`
- supporting summary in D014 or a later dedicated workflow decision if the final reconciliation determines separation is clearer

# Decision 3 — Four-State Region Is the Forward Content Focus

## Decision

The Companion's forward regional content focus is:

- Northeast Oklahoma
- Southeast Kansas
- Southwest Missouri
- Northwest Arkansas

Existing validated content is not automatically invalidated because some domains were originally selected under a narrower regional scope.

Regional reconciliation is progressive:

- preserve the original validation context of existing content,
- evaluate each domain against the Four-State focus when that domain is already being audited or deliberately modified,
- prefer additive corrections where important regional content is missing,
- do not remove an existing valid item merely because it is less regionally important under the broader focus,
- if a regional finding would require significant architecture, data-model, or UI rewiring, stop and discuss that change explicitly before implementation.

## Reason

The user expects to fish primarily in the Four-State region in the near future. The target Fish populations and practical freshwater methods overlap substantially with the earlier Northeast Oklahoma / Southwest Kansas focus, so an incremental reconciliation is lower-risk and more maintainable than invalidating completed domains or performing a whole-project rewrite.

## Current Implementation Status

**Approved regional direction / progressive reconciliation.**

Fish Guide Phase 0 already uses the Four-State scope. Other domains retain their validated current content until audited against the broader region.

## Future Trigger

Each domain audit or material content revision should evaluate Four-State adequacy. Project-wide wording can be fully normalized once the major domains have been reconciled sufficiently that the broader scope is factually supported across the Companion.

## Canonical Owner

Section 6 will reconcile this direction into the appropriate governing documents. Fish-specific implementation remains governed by the Fish Phase 0 workstream and Fish data-model documents.

# Decision 4 — D027 Rig Library Historical Scope and Four-State Adequacy Audit

## Decision

D027 must preserve this historical/current fact:

> The initial 20-Rig library was selected and validated using Northeast Oklahoma and Southwest Kansas as its original regional-practicality scope.

The existing 20 Rigs remain canonical and validated.

The Rig library will also be audited against the Four-State regional focus. That audit is additive by default:

- do not reopen or remove existing valid Rigs solely because the regional focus expanded,
- determine whether important Four-State fishing methods are materially absent,
- propose additional canonical Rigs only when they provide demonstrated practical regional value,
- preserve the existing 20-Rig library unchanged if the broader review identifies no meaningful gap.

## Reason

The Four-State expansion is not expected to make the existing library materially wrong because target species and common freshwater methods overlap heavily across the two scopes. The main risk is omission of an important regional method, not the presence of currently valid Rigs.

## Current Implementation Status

**Existing 20-Rig library: Validated / Finalized.**  
**Four-State Rig adequacy audit: Approved / Not Yet Performed.**

## Future Trigger

Perform the Four-State Rig adequacy audit during the regional reconciliation work, preferably when Rig/Fish relationships or other relevant domain work is already being reviewed so unnecessary repository churn is avoided.

## Canonical Owner

- `docs/DECISIONS.md` — D027
- `docs/data-model/03-RIGS.md` — Rig-domain interpretation
- relevant future regional-audit workstream/closeout record

# Specialized Regional Methods

A regional finding does not automatically become another ordinary Rig.

Paddlefish snagging is the current example to preserve for later architectural review. It commonly involves a substantially different rod/reel/line/tackle system and species-specific method/regulatory context compared with ordinary Rig Guide setups.

When such a case is audited, determine whether it belongs in:

- the ordinary Rig library,
- a specialized species/method setup,
- a Decision Knowledge relationship or guided workflow,
- or another deliberately approved structure.

Do not force a specialized fishing system into the Rig model merely to achieve regional completeness.

# Decision 5 — D051 Context-Preserving Parent Navigation

## Decision

Retire the former site-wide Parent-to-top transition rule. The canonical standard for standard application views is now:

```text
Forward navigation
-> newly opened destination starts at top

Parent navigation
-> restores the immediately preceding standard application view
-> restores that view's applicable UI state
-> restores that view's prior scroll position

Home navigation
-> Dashboard starts at top
-> contextual return state is cleared
```

A saved scroll position belongs only to the source context being restored and must never be transferred to a newly opened destination.

Persistent/floating navigation controls remain the site-wide visual standard.

Specialized workflows may use separately approved navigation semantics when workflow state requires them. Reel Setup is an approved example of a specialized navigation context. Such exceptions must remain deliberate and documented and do not redefine the standard Parent behavior for ordinary application views.

## Reason

Parent is a contextual return action, not merely another forward transition to a parent route. Restoring the prior standard application context reduces unnecessary re-navigation and preserves the user's place while still preventing the earlier defect where a new destination inherited the source page's scroll position.

Specialized guided workflows may require step-aware return semantics that cannot be represented accurately by the generic standard-view rule.

## Current Implementation Status

**Approved architecture / governing synchronization pending.**

`docs/NAVIGATION-PAGE-STANDARD.md` already records the newer standard. `docs/DETAIL-PAGE-STANDARD.md` already uses context-preserving Parent behavior.

The broader production routing implementation still contains the older all-transitions top-reset behavior in places. Section 6 changes documentation only; production implementation of the revised standard remains a later deliberate source package and validation task.

## Future Trigger

Implement and validate the site-wide standard when navigation production source is deliberately reopened. Any new specialized workflow must document its exception rather than silently diverging.

## Canonical Owner

- `docs/DECISIONS.md` — revised D051
- `docs/NAVIGATION-PAGE-STANDARD.md` — operational page-navigation standard
- `docs/STYLE_GUIDE.md` — UI behavior summary
- specialized workflow records where an approved exception exists

# Section 6 Synchronization Rule

The broader Section 6 governing-document reconciliation should be consolidated to minimize commits while preserving repository integrity and current-state accuracy.

No production source, data, media, CSS, HTML, JavaScript, or configuration change is authorized by this decision record.

Section 6 remains open until the approved governing documents are reconciled, re-fetched, integrity-verified, and the Handoff continuation point advances to Section 7 — Data-Model Documentation Synchronization.
