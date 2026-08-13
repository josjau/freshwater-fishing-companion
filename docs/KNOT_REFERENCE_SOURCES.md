# Freshwater Fishing Companion — Knot Reference Sources

**Document Status:** Research Provenance / In Progress  
**Milestone:** Knots  
**Started:** 2026-08-13

# Purpose

This document preserves technical research provenance for the canonical Version 1 Knot library.

It does not replace production `referenceLinks[]` and does not independently own canonical Knot instructions. Its purpose is to record the evidence used to validate each Knot's tying geometry, accepted applications, line compatibility, limitations, variation decisions, common failure modes, and final-state checks.

Research follows `docs/workstreams/KNOT-RESEARCH-VALIDATION-APPROVAL.md`.

# Research Rules

Every canonical Knot requires at least two independent credible technical sources before production.

- **Source A** anchors the tying method and completed geometry.
- **Source B** independently verifies the same Knot or accepted variation and its practical use.
- Additional claim-specific sources are required when line compatibility, specialized applications, limitations, equipment-specific behavior, or variations are not adequately established by the base two sources.
- Conflicting methods are not merged into a hybrid.
- Canonical Companion wording is original editorial synthesis rather than copied source prose.

# Version 1 Research Status

| Knot | Research Status | Canonical Content Status |
|---|---|---|
| Arbor Knot | Source validation complete | Proposed / awaiting lock |
| Improved Clinch Knot | Pending | Pending |
| Palomar Knot | Pending | Pending |
| Double Uni Knot | Pending | Pending |
| Uni Knot | Pending | Pending |
| Double Surgeon’s Knot | Pending | Pending |
| Non-Slip Loop Knot | Pending | Pending |
| Dropper Loop Knot | Pending | Pending |
| Snell Knot | Pending | Pending |
| Alberto Knot | Pending | Pending |

# Arbor Knot

**Canonical ID:** `arbor-knot`  
**Research Status:** Source validation complete  
**Canonical Content Status:** Proposed / awaiting lock

## Source A — Primary Technical Reference

**Texas Parks & Wildlife Department — A Basic Guide for the Beginning Angler**  
Source: `https://tpwd.texas.gov/publications/pwdpubs/media/pwd_bk_k0700_0639_knots.pdf`

Validated claims:

- Arbor Knot is a quick connection for attaching line to the reel spool.
- Line passes around the reel arbor/spool.
- First overhand knot is tied around the main/standing line.
- Second overhand knot is tied in the tag end as the stopper.
- The stopper is tightened, excess tag is trimmed, and the first overhand knot is snugged against the reel.

Technical significance:

This source provides a clear beginner-facing two-overhand-knot geometry and establishes the primary reel-spool application.

## Source B — Independent Cross-Check

**New York State Department of Environmental Conservation — Knot Tying Lesson Plan**  
Source: `https://extapps.dec.ny.gov/docs/administration_pdf/ifnyknotlp.pdf`

Validated claims:

- Arbor Knot is used to attach line to a fishing reel.
- Line runs around the spool/arbor.
- An overhand knot is tied around the standing end.
- A second overhand knot is tied at the end of the tag end.
- Pulling the line tight seats the connection.

Technical significance:

This independently confirms the same basic topology taught by Texas Parks & Wildlife: spool wrap, sliding overhand around the standing line, and a second tag-end stopper knot.

## Additional Source — Application and Line-Material Guidance

**Recreational Boating & Fishing Foundation / Take Me Fishing — How to Tie an Arbor Knot**  
Source: `https://www.takemefishing.org/how-to-fish/how-tie-fishing-knots/how-to-tie-an-arbor-knot/`

Validated claims:

- Arbor Knot is used when initially filling or replacing line on a reel.
- The knot is commonly used with backing, monofilament, and fluorocarbon.
- Direct use with braided line is not generally recommended on a conventional smooth spool unless the spool provides a non-slip design.
- Monofilament backing is an appropriate way to provide grip before adding braid with a line-joining knot.

Variation note:

The page's prose breaks the tying process into more steps than the two state-agency references, but the completed method is consistent with the same two-overhand-knot Arbor topology. The Companion should use the clearer state-agency geometry rather than copy the page's wording or step segmentation.

## Additional Source — Braid/Spool Slippage

**Shimano North America Fishing — Shimano FAQ**  
Source: `https://fishshop.shimano.com/pages/shimano-faq`

Validated claims:

- Braided line can slip around a reel-spool arbor when it lacks sufficient grip.
- Reel/spool design and manufacturer guidance matter when attaching braid.
- Shimano documents spool-arbor grip remedies and warns that setup details can differ by reel type.

Companion implication:

Do not present direct braid-to-arbor use as a universally appropriate Arbor Knot application. Generic Knot compatibility should remain conservative, while Reel & Line Setup can branch according to reel-specific braid-ready/non-slip design or use monofilament backing where appropriate.

## Independent Instructional Cross-Check

**Orvis Fly Fishing Learning Center — Arbor Knot**  
Source: `https://howtoflyfish.orvis.com/fly-fishing-knots/arbor-knot-video?lang=en`

Validated claims:

- Arbor Knot attaches backing to a reel arbor.
- The connection uses two overhand knots.
- Pulling the standing line seats the knotted tag section against the arbor.

Variation note:

Orvis sequences its brief written instructions differently from the state-agency teaching sheets, but it depicts the same two-overhand-knot family and final spool-arbor connection. No separate canonical variation is required.

## Claims Considered Validated

- Canonical name: Arbor Knot.
- Primary connection type: reel-spool attachment.
- Beginner suitability: editorial classification supported by the simple two-overhand-knot process.
- Monofilament compatibility: validated.
- Fluorocarbon compatibility: validated.
- Direct braid compatibility: conditional rather than generally recommended; do not store generic braid compatibility in the V1 canonical record.
- Backing-to-spool use: validated.
- First knot slides/seats against the arbor and the second tag-end knot acts as a stopper: validated.
- A completed connection should be snug against the arbor and should not freely slip around the spool under light test tension: validated by the tying geometry and Shimano spool-slippage guidance.

## Variation Resolution

No material geometry conflict remains.

The approved canonical method will follow the clearer state-agency sequence:

1. line around arbor,
2. overhand knot around standing line,
3. stopper overhand knot in tag end,
4. pull standing line to seat the first knot against the arbor and stopper, then trim.

The different number of prose steps used by other sources does not represent a distinct Knot.

## Research Decision

Arbor Knot has enough evidence to proceed to canonical content lock. The proposed production-facing record is maintained separately in `docs/workstreams/KNOT-CANONICAL-CONTENT-LOCK.md` until approved/locked.
