# Knot Detail Page Approval

**Status:** Approved / Runtime Refinement  
**Implementation Status:** Validated in Runtime Revision 5 (`0.6.5`)  
**Date:** 2026-08-13

The Knot detail page should follow the established Rig detail-page workflow as closely as practical.

Approved flow:

1. Identity header matching the Rig hierarchy:
   - Core Knot when applicable,
   - difficulty,
   - Knot name,
   - concise description.
2. Paired **Best For | Where You'll Use It** section.
   - Best For includes practical uses and concise line compatibility.
   - Where You'll Use It exposes applicable derived Rig/workflow relationships.
   - Task/workflow context remains compact and visible.
   - Rig relationships are presented as actionable internal navigation links rather than a static relationship dump.
   - When more than two active Rigs reference the Knot, show the first two by default and provide **See all N rigs** / **Show fewer** progressive disclosure.
   - Items beyond the first two must be visually removed from layout while collapsed; CSS must not override the hidden state.
   - Expanding reveals the remaining Rigs and changes the control to **Show fewer**; collapsing restores two visible Rigs and the **See all N rigs** label.
   - The initial two prioritize Core Rigs, then lower difficulty, then canonical Rig order as the tie-breaker.
3. **How to Tie It** follows the visual grammar of Rig **How to Build It**.
   - project-owned diagram/controlled animation remains primary where available,
   - authoritative steps remain visibly numbered,
   - supplemental tutorial appears only when approved by the Knot media policy,
   - verified external references stay with this instructional section rather than in a separate bottom Sources block.
4. **Check Your Knot** follows the primary instruction so the user can verify the completed result.
5. **Common Mistakes** uses the established field-guide treatment.
6. **When to Choose Another Knot** presents practical limitations without creating an unapproved automatic Knot-to-Knot relationship.

# Runtime Disclosure Correction

Production Package 2 runtime validation exposed a CSS interaction where list items marked `hidden` were still rendered because the Knot usage-list item rule explicitly set `display: grid`. The approved correction requires a scoped hidden-state rule that wins over the normal list-item display rule.

Runtime Revision 2 corrected that hidden-state defect. Runtime Revision 4 deliberately reduced the default visible relationship threshold from four Rigs to two while preserving the same ordering and relationship ownership. Runtime Revision 5 refines collapse behavior so **Show fewer** restores the two-item state and then repositions the viewport to the **Where You'll Use It** relationship group. Keyboard focus remains on the disclosure control, and viewport motion respects the user's reduced-motion preference.

# Related Rig Navigation

A Knot detail page may navigate directly to any active Rig surfaced in **Where You'll Use It**.

The related Rig detail page must expose its Rig-owned `knotApplications[]` as **Knots You'll Tie** links so the angler can move from Rig assembly context back into an applicable Knot instruction.

Related-detail navigation uses a context-preserving return stack:

```text
Knot detail -> Rig detail -> Knot detail -> ...
```

Each explicit related-entity navigation opens the destination at the top. The Parent control returns to the immediately preceding detail context rather than forcing the user to rediscover it. Home clears the related-detail return context.

This navigation behavior does not change data ownership:

- Rig continues to own `knotApplications[]`.
- Knot -> Rig usage remains derived at runtime.
- No reverse Rig IDs are stored in canonical Knot data.
- No duplicated Knot relationship fields are added to Rig or Knot records.

The page should retain the existing persistent Parent/Home behavior and context-preserving return when entered from Reel & Line Setup or another workflow.

Exact spacing, labels, columns, and compactness may be refined during implementation if the approved hierarchy and beginner-first intent are preserved.

Cross-domain standard: `../DETAIL-PAGE-STANDARD.md`.

Next Knot implementation topic after this refinement: Production Package 3 — Get Your Reel Ready.
