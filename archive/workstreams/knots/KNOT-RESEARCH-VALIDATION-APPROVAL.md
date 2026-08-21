# Knot Research and Source Validation Approval

**Status:** Approved Planning  
**Date:** 2026-08-13

# Purpose

This document records the approved Version 1 research and source-validation standard for canonical Knot instructions in Freshwater Fishing Companion.

# Core Research Standard

Every canonical Knot requires at least two independent credible technical sources before production.

- **Source A — Primary technical reference:** establishes the tying method and completed Knot geometry.
- **Source B — Independent cross-check:** verifies that the same Knot or accepted variation is being described and confirms the line path, wrap direction, tightening/dressing process, completed configuration, and practical application.

A canonical Knot must not enter production based on a single website, article, image, or video.

Two strong sources may be sufficient for a straightforward, well-established Knot. Claims that are specialized, disputed, material-specific, or insufficiently established by the base two sources require additional claim-specific evidence.

# Claim-Specific Validation

Validation is performed by claim type rather than assuming that two general Knot sources establish every field.

## `name` and `aliases[]`

Confirm accepted naming across credible sources.

## `connectionTypes[]`

Confirm that each stored practical connection type is an established use for the Knot.

## `compatibleLineTypes[]`

Validate each claimed line material specifically enough to support the stated compatibility.

The presence of a material in this field does not imply that every possible application or line pairing is equally recommended.

## `bestFor[]`

Cross-check practical use across credible sources and avoid promotional or absolute claims.

## `limitations[]`

Use credible technical support or strong cross-source consensus. Do not invent drawbacks merely to balance the record.

## `tyingSteps[]`

Require at least two-source verification of the actual tying geometry and process.

## `commonMistakes[]`

Each mistake must represent a concrete mechanical or procedural failure supported by the verified tying method or credible instruction.

## `finalChecks[]`

Each check must correspond to a visible or physical characteristic of the verified completed Knot.

## `difficulty`

Difficulty remains a Freshwater Fishing Companion editorial classification informed by tying complexity and reliability, not an externally sourced factual rating.

## `keywords[]`

Keywords remain Companion-owned discovery metadata and do not require external sourcing.

# Source Priority

Preferred source order for canonical Knot research:

1. Government or public outdoor-education agencies.
2. Established angler-education, conservation, or fisheries organizations.
3. Official technical education from reputable line, hook, tackle, or equipment manufacturers.
4. Established technical fishing publishers with identifiable editorial responsibility.
5. Recognized expert educators, guides, or instructional channels.
6. Community, forum, social-media, or discovery sources only as leads or terminology evidence, not as the sole basis for canonical instruction.

Manufacturer sources are authoritative for their own specifications and may be strong technical references, but comparative claims such as strongest, best, or superior require independent corroboration.

# Canonical Variation Resolution

Different credible sources may teach slightly different versions of a Knot.

Before writing canonical `tyingSteps[]`:

1. Compare the complete line path and final Knot geometry.
2. Determine whether the methods are materially the same Knot.
3. Treat nonessential differences such as justified wrap-count ranges as variations within the same canonical Knot when appropriate.
4. If line routing or final geometry differs materially, determine whether one source is incorrect, the methods are accepted minor variations, or the methods are actually distinct Knot variants.
5. Do not merge incompatible instructions into a hybrid method.
6. Do not create a separate canonical Knot merely because a minor named variation exists.

If credible sources materially disagree and the disagreement cannot be resolved, obtain an additional strong source. If the conflict remains unresolved, defer the disputed instruction or narrow the claim rather than publishing an uncertain canonical method.

# Original Companion Instruction Standard

Canonical Knot text must be original Freshwater Fishing Companion editorial synthesis.

Approved workflow:

```text
Research credible sources
    ↓
Understand and reconcile the geometry
    ↓
Write original beginner-oriented instructions
    ↓
Verify the resulting instructions back against the approved sources
```

Do not copy external instructional prose into the canonical dataset.

Use consistent beginner-facing terminology across the library, including standing line, tag end, eye, loop, wraps, dressing, tightening, and seating where technically appropriate.

# Diagram Validation Standard

Instructional diagrams require stricter validation than general descriptive text because a visually polished but mechanically incorrect line path is a failed instructional asset.

For each illustrated step verify:

- standing-line path,
- tag-end path,
- over/under relationships,
- number and direction of wraps when relevant,
- eye, hook, swivel, lure, spool, or other connection geometry,
- loop placement,
- tightening direction,
- completed Knot geometry.

The final visual state must be compared against the approved technical references and the canonical `tyingSteps[]`.

# Animation Validation Standard

Animation does not own independent instructional content.

Approved dependency chain:

```text
Verified technical sources
    ↓
Canonical `tyingSteps[]`
    ↓
Approved static geometry
    ↓
Animation states
```

The animation must visualize the already-approved canonical method rather than being researched or authored as a separate version of the Knot.

# Common Mistakes and Final Checks

`commonMistakes[]` should identify concrete failure modes such as crossed wraps, incomplete seating, incorrect routing, insufficient tag length, or an incorrectly formed loop when those are valid for the Knot.

`finalChecks[]` should identify observable characteristics of a correctly completed Knot.

Companion editorial synthesis is acceptable when a check or mistake follows directly from verified mechanics, but the reasoning must remain explainable and consistent with the approved sources.

# Reel and Line Setup Evidence Threshold

Equipment-specific Reel & Line Setup claims use a higher evidence threshold.

When a claim depends on reel or spool design, use manufacturer documentation where available and an independent reputable instructional source where practical.

Examples include:

- whether backing is required or recommended,
- braid attachment restrictions,
- spool compatibility,
- line-capacity interpretation,
- reel-specific routing,
- fill guidance tied to a specific design.

Do not universalize equipment-specific guidance.

# Runtime Reference Validation

Before production closeout:

- each `referenceLinks[]` destination must load,
- the referenced page should still contain materially relevant information,
- video references must still be publicly available when relied upon,
- embedded media must pass runtime/embed validation when included.

A broken source link does not automatically invalidate already-verified canonical instruction, but it should be replaced with another credible reference where practical.

# Research Provenance Record

Create and maintain:

```text
docs/KNOT_REFERENCE_SOURCES.md
```

This document should preserve research provenance for each canonical Knot, including:

- primary technical reference,
- independent cross-check,
- additional validation sources when required,
- the main claims validated,
- variation-resolution notes when applicable.

The production Knot record continues to own its user-facing `referenceLinks[]`. `KNOT_REFERENCE_SOURCES.md` exists for technical provenance, maintenance, and future revalidation rather than replacing the canonical Knot data.

# Approved Principle

> Every canonical Knot requires at least two independent credible technical sources. One anchors the tying method and completed geometry; the second independently verifies the method and practical use. Claims about line compatibility, specialized applications, limitations, or disputed variations require additional claim-specific evidence when the base two sources do not adequately establish them. Canonical Companion instructions, diagrams, and animations are original editorial synthesis and must be verified against the approved sources before production.

# Next Planning Topic

Diagram/animation production and technical validation workflow.
