# Knot Media Workflow Approval

**Status:** Approved / Revised for Production Package 4  
**Original Approval Date:** 2026-08-13  
**Revision Date:** 2026-08-14  
**Runtime Environment:** Windows Desktop + Microsoft Edge + GitHub Desktop

# Purpose

This document records the approved Version 1 visual-instruction sourcing, validation, and production workflow for canonical Knot media.

This revision supersedes the earlier requirement that every Version 1 Knot must receive a project-owned static SVG before other media can be considered.

# Core Direction

Version 1 Knot media now follows a **source-first, accuracy-first** hierarchy.

For every active Version 1 Knot, search and evaluate media in this order:

1. **Verified diagram**
2. **Verified animation**
3. **Verified video**
4. **Custom project diagram only as a last resort**

The first candidate that satisfies the technical, legal, usability, and canonical-method requirements may become the preferred instructional visual for that Knot.

Canonical `tyingSteps[]`, `commonMistakes[]`, and `finalChecks[]` remain authoritative. Visual media supports those instructions; it does not redefine them.

A source is rejected if it teaches a legitimate Knot variation that does not match the project's locked Version 1 method.

# 10-Knot Visual Source Audit

Before Package 4 media is packaged, every Version 1 Knot must receive a documented visual-source audit.

For each Knot, the audit must:

1. restate the locked canonical topology and any method-specific constraints,
2. search for suitable diagrams first,
3. search for suitable animations if no diagram passes,
4. search for suitable videos if no diagram or animation passes,
5. compare each serious candidate against the canonical method step by step,
6. record source/creator, media type, reuse/embedding status, and technical verdict,
7. identify the best candidate or document why no external candidate is acceptable,
8. require explicit user approval before production packaging.

Do not approve a candidate from its title, reputation, or general Knot identity alone. The actual depicted method must be audited.

# Diagram Priority Standard

Diagrams are the preferred instructional format because they can present line topology without hands, camera angles, focus changes, glare, or motion obscuring the critical geometry.

A diagram candidate must clearly show, as applicable:

- standing-line route,
- tag-end route,
- attachment point such as hook eye, swivel eye, lure eye, reel spool/arbor, or hook shank,
- loop formation and loop orientation,
- wrap count and wrap direction,
- unmistakable over/under crossings,
- tag-end return direction,
- tightening/cinching direction,
- completed Knot geometry.

Color may assist but may not be the sole topology cue.

When a third-party diagram is considered for local production use, its reuse rights must be explicit and compatible with the project. Public-domain material is preferred. Creative Commons or other reusable material may be accepted when its obligations are documented and acceptable. Copyrighted diagrams without reuse permission may be used only as technical references, not copied or bundled.

# Animation Priority Standard

Animations are second priority when they show the canonical geometry more clearly than available static diagrams.

Preferred animation behavior:

- discrete or step-controlled states,
- no required autoplay,
- no looping as the only instructional mode,
- visible progression through the tying sequence,
- topology remains technically valid at every displayed state,
- line paths and crossings remain visible,
- reduced-motion users retain complete instructional information through canonical text or a static visual.

Do not use freeform path morphing or other interpolation that can make line appear to pass through itself, reverse an over/under relationship, create an impossible loop, or move through hardware incorrectly.

Third-party animations should be linked or embedded only through an authorized delivery mechanism. Do not download, rehost, extract, or republish third-party animation frames without reuse rights.

# Video Priority Standard

Video is third priority and uses the same verified tutorial-selection principles approved for Rigs under D049 and D053, adapted to Knot geometry.

For Knots:

- canonical text remains mandatory and authoritative,
- every Knot receives a tutorial-source search,
- a video is acceptable only when the demonstrated method matches the locked canonical method,
- concise/direct videos are preferred when technical completeness and source quality are otherwise adequate,
- line routing, crossings, wrap count/direction, loop orientation, tag-end return direction, tightening sequence, and completed geometry take priority over commentary,
- hands, camera angle, focus, glare, line visibility, edits, or other obstructions must not hide a critical tying action,
- no arbitrary hard duration threshold is required,
- technique, fishing strategy, product promotion, or unrelated commentary must not dominate the tying instruction.

For YouTube:

- use the official embedded player,
- lazy-load only after explicit user action,
- use the privacy-enhanced `youtube-nocookie.com` domain,
- do not autoplay,
- preserve normal YouTube attribution and controls,
- provide a clear **Watch on YouTube ↗** fallback,
- do not download, rehost, alter, or extract frames from third-party videos without separate reuse rights.

# Custom Project Diagram — Last Resort

Custom project diagrams are permitted only when no suitable external diagram, animation, or video passes the audit.

Custom geometry must be manually constructed from known-good technical references. Generative imagery must not be used as an authority for line topology.

Before a custom diagram is shown for approval, it must be independently checked against:

1. the locked canonical `tyingSteps[]`, and
2. at least one known-good visual reference that demonstrates the same method; use two independent references when practical.

The audit must explicitly confirm each critical geometry requirement rather than simply state that the drawing was "verified."

A custom diagram is rejected if any step introduces an extra loop, missing loop, incorrect crossing, wrong hardware relationship, wrong wrap count/direction, wrong tag-end routing, or incorrect tightening behavior.

# Diagram Labeling Rule

When a project-owned diagram is required, text should remain concise and align with canonical `tyingSteps[]` as closely as practical.

- Step numbers must correspond to canonical step order.
- Shortened labels must preserve action, sequence, direction, and technical meaning.
- Full canonical tying-step text remains available outside the graphic.
- The visual must reinforce the canonical instructions rather than become a competing instruction set.

# Media Registry Scope

Package 4 expands the Media registry from Tackle-only recognition media to a canonical cross-entity media registry for supported reference and instructional entities.

The ownership model remains:

```text
ownerType: "knot"
ownerId: "palomar-knot"
```

Knot records should not duplicate inverse `imageIds[]`, `diagramIds[]`, `animationIds[]`, or `videoIds[]` unless a later demonstrated requirement justifies that duplication.

Media types should describe the actual selected production representation, for example:

```text
diagram
animation
tutorial-video
```

The final field representation must be based on the selected sources rather than pre-committing all Knots to one media type.

# Accessibility and Presentation

Regardless of media type:

- canonical tying text remains available outside the visual,
- the user must not need color alone to interpret line topology,
- critical instructional content must remain usable at realistic phone widths,
- video/animation is not required to understand the Knot when motion cannot be used,
- useful application-level labels or descriptions must identify the visual content,
- third-party external destinations use the established external-link semantics.

# Production Workflow Per Knot

Use this sequence:

1. **Research lock** — verify the approved research record.
2. **Canonical method lock** — confirm current `tyingSteps[]`, `commonMistakes[]`, and `finalChecks[]`.
3. **Diagram search and audit**.
4. **Animation search and audit** if no diagram passes.
5. **Video search and audit** if no diagram or animation passes.
6. **Custom-diagram decision** only if external sources fail.
7. **Technical geometry audit** of the selected candidate.
8. **Mobile/usability audit**.
9. **User review** — no production packaging before explicit approval.
10. **Production integration** — Media registry and Knot detail presentation.
11. **GitHub verification** after user upload.
12. **Microsoft Edge runtime validation** at desktop and narrow/mobile widths.

# Final Acceptance Gate Per Knot

A Knot's instructional media is production-ready only when:

```text
Sources verified
    ↓
Canonical method confirmed
    ↓
Diagram → animation → video hierarchy audited
    ↓
Selected visual matches canonical geometry
    ↓
Reuse/embedding rights are acceptable
    ↓
Mobile/usability presentation verified
    ↓
User approved the candidate
    ↓
Media ownership resolves correctly
    ↓
Deployed runtime validated
```

A visually attractive source that teaches the wrong variation is rejected.

A technically correct source that obscures critical geometry is rejected.

A custom drawing that has not been explicitly audited against known-good geometry is rejected.

# Package 4 Current Direction

Production Package 4 begins with the **10-Knot Visual Source Audit**.

Do not package the earlier generated review drawings. They are non-production exploratory artifacts and are not approved Knot media.

The Package 4 priority is:

**Diagrams first → animations second → videos third → custom drawings only as a last resort.**
