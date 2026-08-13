# Knot Relationship Approval

**Status:** Approved Planning  
**Date:** 2026-08-13

The approved Version 1 relationship owner is the Rig.

Approved field:

```text
knotApplications[]
```

Each entry contains:

```text
label
connectionType
recommendedKnotIds[]
notes
```

Rules:

- Rig owns the contextual connection recommendation.
- Knot-side reverse navigation is derived rather than stored separately.
- No application-level ID is required in Version 1.
- No assembly step number or index is stored in the relationship.
- Only real tied connections receive an entry; equipment-only joins do not.
- Referenced Knot IDs must resolve to active canonical Knot records.
- Recommendations are selective, not exhaustive.
- General tying instructions stay with the canonical Knot; Rig notes hold only contextual application guidance.
- Runtime code does not infer relationships by parsing assembly prose.
- The current 20-Rig library must be audited in both directions before release.
- The preliminary planning estimate is about 31 tied connection points; the final audit count is authoritative.
- Not every Version 1 Knot is required to appear in a Rig relationship.

Next planning topic: Knot detail-page information hierarchy.
