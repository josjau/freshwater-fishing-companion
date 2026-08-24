# Freshwater Fishing Companion — Version 1 Design Audit

**Document:** V1-DESIGN-AUDIT.md  
**Document Revision:** 1.0.2  
**Document Status:** Approved  
**Audit Status:** REQUIRED / PENDING EXECUTION  
**Last Updated:** 2026-08-24

# Purpose

This document is the canonical backlog and execution standard for the final Version 1 site-wide design audit.

The audit exists because mobile validation during Fish Guide Production Wave 1 exposed cross-domain visual and interaction inconsistencies that should be resolved systematically rather than through unrelated one-off changes during Fish production.

The audit is **not** authorization to redesign every page immediately. Functional/domain work may continue. The full audit begins after the Version 1 functional scope is settled enough that a site-wide pass will not be invalidated by routine feature construction.

# Required Version 1 Gate

Before Version 1 design is considered complete:

1. Perform one full site-wide design audit across implemented Version 1 surfaces.
2. Inventory reusable UI/component types first, then inspect every occurrence across domains.
3. Resolve unexplained presentation and interaction inconsistencies through shared semantic rules where practical.
4. Validate the resulting application on an **actual mobile device**, not only desktop responsive simulation.
5. Preserve readable typography, practical touch targets, accessible focus/contrast behavior, and mobile field usability.
6. Prefer reducing duplicated content, excess padding, excess margins, unnecessary container nesting, and redundant visual treatments before shrinking typography.

Design target:

> **Compact, not miniature.**

# Fish Guide Baseline — Validated

Fish Guide Production Wave 1 was user-approved after mobile validation. Wave 2 review has additionally validated several Fish presentation refinements. These Fish-specific results are established working standards unless the later site-wide audit demonstrates a cross-domain reason to normalize presentation without changing Fish semantic content.

- Common Carp, Freshwater Drum, and Paddlefish selection-card image framing is approved.
- Fish identity separates identity metadata from identification instruction: the identity area presents image/name/scientific name/family/aliases, while the Fish summary leads **How to Identify It** with detailed traits following.
- Fish information sections use the basic/plain-border treatment.
- Safety uses a deliberate semantic warning treatment rather than ordinary information-card emphasis.
- **Compare Similar Fish** uses the approved workflow/action-card emphasis.
- Workflow/action cards should use a standardized workflow visual language; the final audit must identify every qualifying site-wide card before expanding that treatment.
- Per-Fish presentation framing may adjust whitespace-heavy artwork without altering canonical media/source identity; natural proportions and diagnostic extremities remain protected.
- Wave 2 establishes the current Fish reference-surface treatment: eligible isolated/transparent Fish display over the exact `#f4f0e8` reference-media surface.
- Wave 2 Selection and Fish Detail image blocks use standardized presentation geometry with independent per-Fish fit tuning rather than species-specific frame dimensions.
- Compare Similar Fish keeps its 84 × 56 thumbnail size. Desktop may use two choices side-by-side; actual mobile review validated one comparison tile per row as the preferred narrow-screen treatment.

Fish semantic/content validation is closed for completed Fish. Production Wave 2 is closed after the Compare Fish anatomical body-axis alignment correction passed desktop/mobile review and post-push verification. The final design audit may reconcile shared visual grammar, but it must not silently reopen approved Fish facts, media provenance, relationships, or guidance.

# Audit Method

Audit by **component type first, page/domain second**. Do not walk page by page making isolated cosmetic corrections without first determining whether the same component exists elsewhere.

At minimum inventory these semantic component classes:

- ordinary information container,
- identity/description container,
- subsection/group heading,
- internal knowledge link,
- external link,
- neutral chip/context label,
- workflow/action card,
- Core/foundational designation,
- Safety/warning alert,
- readiness/status indicator,
- relationship list,
- contextual-information popover/modal/bottom sheet,
- empty/no-relationship state,
- instructional-media/Visual Guide container,
- navigation/Parent/Home controls,
- search/result presentation,
- selection/browse cards.

For each component class, identify all implementations across Fish, Rigs, Knots, Tackle, Reel Setup, Dashboard/landing pages, and any additional implemented Version 1 domains.

# Deferred Findings From Fish Wave 1 Mobile Review

The findings below are intentionally preserved for the final audit. Unless marked **APPROVED STANDARD**, they are audit requirements or trial directions rather than authorization to apply a site-wide change immediately.

## 1. Rig — What You Need

**Status:** AUDIT / TRIAL REQUIRED

- Place the contextual-information `ⓘ` immediately after the component name instead of aligning it at the far right of the row.
- Preferred reading order is equivalent to `Sliding Sinker ⓘ  Required`, not `Sliding Sinker ... ⓘ Required`.
- Keep repeated component descriptions out of ownership/readiness tiles when the contextual-information popover already owns that description.
- One-column mobile presentation is currently preferred after the cleanup.
- Trial **one Rig only** with a responsive two-items-per-row layout to determine on a real phone whether the density gain is worth the reduced width. Do not generalize two-column behavior before that comparison is reviewed.
- Preserve readiness semantics and practical touch targets.

## 2. Component Popover — Used In / Related Components

**Status:** AUDIT / VISUAL COMPARISON REQUIRED

- `Used In` must link to referenced canonical Rigs.
- Related-component navigation must allow movement inside the existing contextual-information flow and provide a Back path to the prior component; users should not have to close the popover to recover context.
- `Used In` and `Related Components` should have a shared, stronger subsection-heading treatment and a subtle divider that identifies the **group**.
- Individual linked items inside a group should not each receive their own divider.
- Compact text-link trial: left-align the destination label and place the internal-navigation icon immediately after the label; do not right-align the arrow at the far edge of the row.
- Pill/chip comparison: use one representative Rig/component popover to compare pill/chip relationship links against compact text links on an actual mobile device. The user prefers the visual appearance of pills but does not want their space cost assumed acceptable without the comparison.
- Slight popover typography/spacing reduction may be tested, but readability and touch interaction take precedence.
- Instructional copy for component help must point to the actual `ⓘ` control rather than telling the user to select the item name.

## 3. Link Language and Semantics

**Status:** ARROW SEMANTICS APPROVED / BROADER STANDARDIZATION REQUIRED

The application needs one recognizable cross-domain link grammar.

Wave 2 desktop/mobile review validates these directional-icon semantics:

- External destinations use `↗`.
- Internal directional navigation uses `→` when an arrow cue is appropriate.
- The icon stays immediately adjacent to the destination text rather than being detached at the far edge of the row.
- Directional arrows must have enough visual size/weight to remain legible beside bold destination text; a CSS-drawn internal arrow is acceptable when the font glyph is visually too thin.

The remaining audit work is to formalize the broader visual grammar:

- Internal knowledge/navigation links use one consistent internal color family/treatment.
- External links use a visually distinct external color/treatment.
- Link **semantics** must remain recognizable even when the space-appropriate visual shape differs.

The audit must deliberately decide where each of these shapes belongs:

- card — major destination/workflow,
- pill/chip — compact categorical/contextual item or deliberately chosen compact related-knowledge link,
- compact text link — dense related-content lists,
- ordinary inline link — prose/contextual navigation.

Do not use shape alone to distinguish internal vs external destinations.

## 4. Group/Subsection Heading Treatment

**Status:** STANDARDIZATION REQUIRED

The Knot **Best For** area currently demonstrates a cleaner hierarchy by visually differentiating subsection labels such as:

- Line Compatibility,
- Common Tasks,
- Rigs That Use This Knot.

Carry this concept into the audit. Reusable group headings such as `Used In`, `Related Components`, `Common Tasks`, and relationship groups should share a consistent hierarchy independent of the link treatment used inside them.

## 5. Knot Detail — Relationship-Link Consistency

**Status:** AUDIT REQUIRED

Current Knot detail mixes relationship-link patterns in the same information area: Line Compatibility/Common Tasks use pill-style linking while Rigs That Use This Knot uses another treatment.

The final audit must reconcile these based on semantic role and mobile density rather than preserving incidental implementation differences.

`Rigs That Use This Knot` should not repeat Rig descriptions already available inside Rig detail. Compact canonical Rig links are sufficient unless a specific page demonstrates a need for additional context.

## 6. Rig — Knots You'll Tie

**Status:** AUDIT REQUIRED

Current implementations are inconsistent:

- Basic Bottom Rig groups repeated applications under `Use these knots for:` using non-link chips such as `Main line to swivel`, `Leader to swivel`, and `Leader to hook`, then uses linking Knot chips.
- Other Rigs may present the connection/application labels as plain text while using the same linking Knot pills.

The audit must standardize this distinction:

- connection/application text is **context**, not navigation;
- Knot names are **destinations**.

Context labels and navigation targets should not become visually interchangeable.

## 7. Information-Section Border / Accent Grammar

**Status:** AUDIT REQUIRED

Fish now uses plain/basic borders for normal information sections, while many Rig and Knot sections still use left-side accent/bloom treatment, especially on Core records.

Do not globally strip or add accents before classifying why the treatment exists.

Audit and define semantic treatments for:

- ordinary information,
- workflow/action,
- Safety/warning,
- readiness/status,
- instructional media,
- Core/foundational designation.

Audit hypothesis: **Core** describes the importance of the knowledge record and may be better communicated through a badge/identity-level cue rather than causing every information section inside a Core record to receive bloom/accent emphasis. This is not yet an approved implementation standard.

## 8. Knot Opening-Description Consistency

**Status:** FULL KNOT AUDIT REQUIRED

At least these Knot pages were observed without the same opening description border/accent treatment seen elsewhere:

- Alberto Knot,
- Double Surgeon's Knot.

The user intentionally stopped manually searching for additional cases. Audit **all Knot detail pages** for the opening identity/description treatment and resolve unexplained inconsistencies systematically.

## 9. Knot Visual Guide Treatment

**Status:** AUDIT REQUIRED

The Knot Visual Guide container appears to carry a left-side bloom/accent that other sections do not consistently use.

Determine whether instructional media has a deliberate semantic reason for a distinct treatment. If not, normalize it with the selected instructional-information standard.

The Visual Guide belongs directly beneath **How to Tie It** in the instructional progression.

## 10. Knot Empty Relationship Copy

**Status:** AUDIT / COPY CLEANUP

Example observed on Double Surgeon's Knot:

`No Rig in the guide currently references this Knot`

This line appears unnecessary when absence of a Rig relationship is not itself useful knowledge. Prefer omitting an empty relationship group/message unless the absence materially helps the user understand or complete a task.

## 11. Knot Detail Density and Progression

**Status:** AUDIT REQUIRED

- Knot metadata/reference tiles still use substantial vertical space on mobile.
- Continue evaluating compact presentation for metadata/relationships before shrinking primary instructional text.
- Preserve the approved instructional progression in which written tying steps and Visual Guide stay together, followed by verification/troubleshooting content.
- `Sources & References` should remain supporting provenance rather than interrupting the primary task; collapsed bottom-of-page presentation is the current accepted direction.

## 12. Workflow / Action Cards

**Status:** APPROVED STANDARD + SITE-WIDE CLASSIFICATION AUDIT REQUIRED

The user approved the differentiated **Compare Similar Fish** workflow treatment and the general rule that cards launching a workflow/tool may receive standardized workflow emphasis distinct from ordinary browse/reference cards.

The final audit must:

- identify every card that genuinely launches a workflow/action,
- identify cards that are ordinary browse/reference destinations and must not receive the workflow treatment,
- preserve one standardized workflow color/token and hierarchy,
- avoid using workflow emphasis merely as decoration.

# Mobile Validation Matrix

The final audit must include actual-device checks for at least:

- narrow portrait phone width,
- normal portrait phone width,
- longer scrolling detail pages,
- contextual popovers/bottom sheets,
- relationship lists with multiple links,
- pages containing long names/labels,
- selection cards with media,
- sticky/floating navigation,
- interactive state changes such as readiness, expansion/collapse, and Parent return.

Check:

- no horizontal overflow,
- no clipped labels/icons,
- no accidental tiny typography,
- practical touch targets,
- clear internal vs external navigation cues,
- consistent group headings,
- appropriate whitespace without excessive scrolling,
- no duplicated information that can be removed safely,
- no unexplained accent/bloom differences,
- correct focus/return behavior for nested navigation and contextual information.

# Acceptance Criteria

The Version 1 design audit may close only when:

1. Every implemented Version 1 domain has been included in the component inventory.
2. Every identified inconsistency has a documented disposition: fixed, intentionally different with reason, deferred to a named future gate, or rejected.
3. Shared component/link/container rules are reconciled into the appropriate governing documentation after validation.
4. The final implementation passes actual mobile-device review.
5. No known mobile design issue remains only in chat history or Working State.
6. Fish semantic/content approval remains intact unless a separate evidence/content defect is discovered.

# Relationship to Active Development

This audit is a required Version 1 design-completion gate, not a blocker for the next Fish production wave. During ongoing builds:

- fix domain-specific defects that block the active work,
- record newly discovered cross-domain design inconsistencies here,
- avoid broad site-wide styling churn until the audit gate opens,
- continue using Working State for high-frequency observations, then reconcile durable audit findings into this document at logical checkpoints.

# Related Documents

- `STYLE_GUIDE.md`
- `DETAIL-PAGE-STANDARD.md`
- `NAVIGATION-PAGE-STANDARD.md`
- `DEVELOPMENT_WORKFLOW.md`
- `ACTIVE-CHANGE-LEDGER.md`
- `HANDOFF.md`
