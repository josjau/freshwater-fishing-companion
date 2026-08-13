# Knot Media Workflow Approval

**Status:** Approved Planning  
**Date:** 2026-08-13

# Purpose

This document records the approved Version 1 diagram/animation production and technical-validation workflow for canonical Knot instructional media.

# Core Direction

Version 1 Knot media follows a **static-first, animation-earned** workflow.

Approved principles:

1. Every active Version 1 Knot receives a manually constructed, project-owned static instructional SVG.
2. Static diagrams are mandatory; animation is optional.
3. Animation is added only when movement materially improves understanding beyond the static diagram and canonical text.
4. Video remains subject to the separately approved Knot media exception policy.
5. Canonical text, diagram, and optional animation are one instructional system and must not teach conflicting methods.

# Static Instructional SVG Standard

The preferred Version 1 baseline is one complete mobile-first instructional SVG per Knot.

Example path:

```text
images/knots/palomar-knot-instruction.svg
```

The SVG may use vertically arranged step panels and should include:

- visible step numbers,
- verified line geometry,
- direction arrows where needed,
- clear standing-line and tag-end distinction,
- clear eye/hook/swivel/lure/spool relationships where applicable,
- unmistakable over/under crossings,
- a final completed-Knot state.

One complete SVG per Knot is preferred unless implementation demonstrates a better technical structure.

The approved `tyingSteps[]` string-array schema remains unchanged unless a later real implementation requirement proves that persistent step IDs are necessary.

# Diagram Labeling Rule

Diagram text should remain concise, but it should match the canonical `tyingSteps[]` wording as closely as practical.

- Step numbers shown in the diagram must correspond directly to the canonical `tyingSteps[]` order.
- When a canonical tying step is already short enough for the diagram, use the same wording.
- When the full step would make the diagram unreadable, use a concise derivative of that same tying step rather than inventing a separate instructional phrase.
- A shortened diagram label must not change the action, sequence, direction, or technical meaning of the canonical step.
- The full canonical tying-step text remains available on the page even when the diagram uses a shortened label.

This keeps text, diagram, and optional animation aligned as one instructional system while preserving phone readability.

# Visual Grammar

Knot diagrams must visually distinguish:

- standing line,
- tag end,
- hardware or attachment point where applicable,
- loops,
- direction of movement,
- line crossings,
- completed Knot state.

Color may assist but must not be the only differentiator.

At crossings, over/under topology must be unmistakable. Use a deliberate visual bridge or gap rather than allowing two strokes to ambiguously pass through each other.

The diagram must remain understandable in grayscale and at realistic phone widths.

# Diagram Text Density

The page already owns the full canonical numbered `tyingSteps[]`.

The SVG should therefore avoid duplicating long instructional paragraphs.

Appropriate diagram text includes:

- derived step number,
- concise wording aligned to the canonical step,
- short directional labels,
- essential motion callouts,
- completed-state labels.

The visual should reinforce the canonical page instructions rather than become a separate competing instruction set.

# Production Workflow Per Knot

Use this sequence:

1. **Research lock**  
   Approved primary and independent technical sources are recorded.

2. **Canonical method lock**  
   Canonical `tyingSteps[]`, `commonMistakes[]`, and `finalChecks[]` are reconciled before artwork begins.

3. **Storyboard**  
   Translate each canonical tying step into a proposed visual state.

4. **Geometry construction**  
   Manually construct the SVG from the verified technical references.

5. **Technical geometry audit**  
   Compare every visual step against the canonical instructions and approved references.

6. **Mobile visual audit**  
   Confirm line paths, arrows, labels, crossings, and final state remain readable at realistic phone width.

7. **User review**  
   Show one finished media candidate at a time and wait for explicit approval before production packaging.

8. **Revision if required**  
   Do not package an unapproved candidate.

9. **Animation-value gate**  
   Determine whether motion teaches something materially clearer than the static diagram.

10. **Optional step-through production**  
    Build animation only when the value gate passes.

11. **Production package**  
    Include approved media and related production changes in the normal user-reviewable ZIP workflow.

12. **GitHub verification and Brave runtime validation**  
    After upload, re-fetch the authoritative GitHub files and validate the deployed experience in the current Windows/Brave environment.

# Animation Standard

Do not use autoplay or looping GIF-style Knot instruction.

Any Knot animation should be a user-controlled step-through.

Required behavior:

- no autoplay,
- no looping,
- Previous and Next controls,
- visible `Step X of Y`,
- begin at Step 1,
- final completed state accessible,
- keyboard operable,
- practical touch targets,
- reduced-motion support,
- animation-disabled behavior remains understandable,
- complete static SVG remains available as the fallback/reference.

# Animation Geometry Rule

Do not use freeform SVG path morphing where interpolation could create false line topology.

Path morphing can temporarily make line appear to:

- pass through itself,
- reverse an over/under relationship,
- form an impossible loop,
- move through an attachment eye incorrectly.

Use verified discrete geometry states.

Motion between states may use controlled techniques such as:

- progressive reveal,
- movement along a known verified route,
- translating an already-formed loop,
- sliding verified sections together,
- tightening/cinching where topology remains unchanged.

When topology changes, transition to the next verified state rather than inventing an interpolated shape.

# Animation Prototype Gate

Do not build animations for all Knots immediately.

Approved sequence:

1. finish and approve the static instructional treatment,
2. select one Knot where motion clearly adds instructional value,
3. build one controlled step-through prototype,
4. validate it in Brave at phone and desktop widths,
5. assess usability, accessibility, maintainability, reduced-motion behavior, and complexity,
6. only then decide whether the prototype mechanism becomes the broader animation standard.

Double Uni is an appropriate prototype candidate because movement may help demonstrate the two formed sections sliding together, but the final prototype choice may be adjusted during implementation if another Knot better tests the interaction.

# Technical SVG Validation

Each production Knot SVG must pass:

## Geometry

- correct standing-line route,
- correct tag-end route,
- correct over/under crossings,
- correct attachment-point relationship,
- correct wrap count and direction where relevant,
- correct loop position,
- correct tightening direction,
- correct completed geometry.

## Visual

- readable at realistic phone width,
- line crossings remain unambiguous,
- labels do not obscure geometry,
- arrows are understandable,
- completed state is clear,
- color is supplemental rather than essential.

## File

- valid SVG,
- proper `viewBox`,
- no unapproved embedded raster content,
- no external image or font dependencies,
- no unexpected scripts,
- no unnecessary metadata or bloat,
- scalable without clipping,
- locally bundled.

## Accessibility

- useful application-level alt text,
- canonical text remains available outside the graphic,
- animation is not required to understand the procedure,
- reduced-motion users lose no instructional information.

# Surface and Background Direction

Knot SVGs should display on the canonical `#f4f0e8` instructional/reference surface.

The first production prototype should settle whether the SVG files remain transparent over that application surface or include an explicit `#f4f0e8` background rectangle. Once validated, use the selected treatment consistently.

# Media Registry Scope Expansion

Implementation of Knot media requires an explicit expansion of the current Media registry scope.

**Old scope:** Tackle recognition-media registry.  
**New scope:** canonical cross-entity media registry for supported reference and instructional entities.

Reason:

- the existing Media schema already uses `ownerType` and `ownerId`,
- Knot media should use that single ownership model,
- Knot records should not duplicate inverse `imageIds[]` or `animationIds[]`.

Existing Tackle records retain their current meaning.

Approved Knot ownership concept:

```text
ownerType: "knot"
ownerId: "palomar-knot"
```

Static Knot instructional SVGs should use a semantic media type such as:

```text
diagram
```

The final animation media type/representation remains open until the prototype demonstrates the actual technical requirement.

# Generative Geometry Restriction

Do not use generative imagery to invent canonical Knot instructional geometry.

Knot line topology must be manually constructed from verified technical references and audited step by step.

Generated imagery may remain appropriate in other approved media contexts, but it is not an authority for Knot line routing, crossings, loops, wraps, or completed instructional geometry.

# Final Acceptance Gate Per Knot

A Knot's instructional media is production-ready only when:

```text
Sources verified
    ↓
Canonical instructions locked
    ↓
Static geometry technically verified
    ↓
Mobile presentation verified
    ↓
User approved the asset
    ↓
Optional animation passed technical/accessibility review
    ↓
Media ownership resolves correctly
    ↓
Deployed runtime validated
```

A Knot with unverified visual geometry is not complete.

A Knot with animation but no complete static instructional path is not complete.

A Knot whose media is technically correct but unreadable at realistic phone width is not complete.

# Next Planning Topic

Final milestone validation checklist and implementation sequence.
