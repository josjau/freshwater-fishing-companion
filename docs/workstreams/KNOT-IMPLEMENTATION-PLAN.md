# Knot Implementation Plan

**Status:** Approved / Production Package 4 Active  
**Original Date:** 2026-08-13  
**Revised:** 2026-08-14

The Knots planning phase is complete. Production Packages 1 through 3 are complete and GitHub-verified. Production Package 4 is active.

Approved implementation order:

1. Documentation reconciliation.
2. Research and canonical content lock for all 10 Version 1 Knots.
3. Production Package 1: canonical Knot data, Core registry, and Rig-owned `knotApplications[]` relationships.
4. Production Package 2: Knot Guide landing, task-first navigation, deterministic beginner search, and text-based Knot detail pages.
5. Production Package 3: Get Your Reel Ready workflow with context-preserving Knot handoffs.
6. **Production Package 4: 10-Knot Visual Source Audit and approved cross-entity Media integration.**
7. Integrated Microsoft Edge/runtime and regression validation.
8. Milestone closeout documentation and transition to Fish Guide.

# Production Package 4 — Revised Media Strategy

The former Package 4 requirement for ten project-owned static instructional SVGs is superseded.

Package 4 now evaluates instructional media in this order for every Version 1 Knot:

1. verified diagram,
2. verified animation,
3. verified video,
4. custom project diagram only when the first three categories do not provide an acceptable candidate.

A candidate must match the locked Version 1 canonical method. A legitimate alternate Knot variation is rejected when it conflicts with the canonical method used by the application.

Canonical text remains authoritative regardless of media type.

Third-party media may be bundled only when reuse rights explicitly permit it. Otherwise, the project uses an authorized embed or external destination rather than copying or rehosting the media.

YouTube candidates follow the verified tutorial pattern already established for Rigs: official player, lazy load, privacy-enhanced `youtube-nocookie.com`, no autoplay, normal platform controls/attribution, and a **Watch on YouTube ↗** fallback.

The authoritative detailed workflow is:

`docs/workstreams/KNOT-MEDIA-WORKFLOW-APPROVAL.md`

# Package 4 Immediate Sequence

1. Complete the **10-Knot Visual Source Audit**.
2. Present the best candidate(s) for each Knot for user review.
3. Correct or replace rejected candidates.
4. Do not package media or change production UI until the selected visual for each Knot is explicitly approved.
5. After approval, implement the cross-entity Media registry and Knot-detail presentation using the selected media types.
6. Validate the GitHub upload and deployed Microsoft Edge experience.

The earlier generated Knot review drawings are exploratory only and are not approved Package 4 assets.

Production files remain subject to the user-reviewable workflow. GitHub `main` remains authoritative and existing source files must be re-fetched immediately before any production edit.
