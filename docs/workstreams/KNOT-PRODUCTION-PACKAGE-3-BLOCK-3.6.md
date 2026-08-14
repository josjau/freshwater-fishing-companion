# Knot Production Package 3 — Block 3.6

**Status:** In Progress  
**Milestone:** Knots  
**Package:** Production Package 3  
**Block:** 3.6 — Backing Decision + Spool Attachment / Line-to-Line Knot Handoff Foundation  
**Date:** 2026-08-13

# Carried-Forward Navigation Fix

A runtime UX issue was identified immediately after Block 3.5 validation: the top Reel Setup navigation control remains the generic `renderView()` control and does not behave like useful workflow navigation as the guided sequence advances.

This is expected from the current implementation but is **not** the intended final Reel Setup behavior.

Block 3.6 will replace the generic Reel Setup navigation treatment with step-aware workflow navigation that:

- provides a functional previous-step control,
- provides an explicit exit to Home,
- returns to Knots from the Reel Setup start,
- changes its parent destination as the workflow advances,
- preserves transient selections when simply moving backward to review a prior step,
- lets the normal selection handlers clear dependent downstream state only when the user actually changes a selection,
- does not remain sticky at the top of the viewport during scrolling,
- remains separate from the persistent `SELECTED CHOICES` context summary.

This navigation correction is part of the Block 3.6 production package and must be runtime-validation Step 1.

# Block 3.6 Scope

Block 3.6 will add:

- backing Decision Knowledge,
- beginner guidance for when backing is or is not needed,
- equipment-specific direct-braid guardrails,
- Monofilament backing as the safer general path when Braid could slip on a smooth spool,
- spool-attachment Knot selection without duplicating canonical Knot instructions,
- backing-to-main-line Knot selection when backing is used,
- Reel Setup → canonical Knot detail → exact Reel Setup step return context,
- a final spool-connection-ready checkpoint for the next reel-specific spooling block.

The normal Knot landing remains intentionally unwired to Reel Setup until the later Package 3 integration block.
