# Freshwater Fishing Companion — Production Changes

**Document:** workflow/PRODUCTION-CHANGES.md  
**Document Status:** Approved  
**Role:** Production write, preservation, local/runtime validation, and commit authorization  
**Last Updated:** 2026-08-25

# Production Write Approval Gate

Production source/assets require explicit user authorization for the specific write scope, including:

- HTML, CSS, JavaScript;
- application data;
- images/media;
- configuration/dependencies;
- other non-documentation production files.

A prior approval does not grant blanket authority for later production writes.

# Production Working Sequence

1. Settle and obtain approval for exact production scope.
2. Verify the starting GitHub SHA, Drive complete working tree, and Live Working State review-cycle identity.
3. Create/update the intended files directly in Drive `Working Source/Current` at their repository-relative paths.
4. Run targeted static/data/media/relationship validation appropriate to the changed surface.
5. Generate/update a cumulative review ZIP in `Packages` only when user/local/browser/device review requires transport.
6. Apply the package to a verified local checkout when local/browser validation is required; `.git` is never included/replaced.
7. Review the complete local diff against the recorded starting GitHub SHA and the review-cycle changed-file set.
8. Correct defects in Drive first and update only affected validation/package artifacts.
9. Do not commit/push production/user-facing work until the user explicitly authorizes that action.
10. After push, verify GitHub commit/files, run applicable repository checks, and complete live/device validation where required.
11. After post-push verification, confirm Drive `Current` matches the committed approved state and reconcile only genuine closeout/status updates.

# Edit Preservation

For each changed existing file:

- derive the change from the verified complete Drive working-tree version, using the recorded starting GitHub SHA as the committed comparison baseline;
- preserve unrelated content/behavior;
- make only the approved changes;
- inspect complete file structure when truncation or structural risk exists;
- compare against baseline and reject unrelated diffs unless explicitly approved.

Do not split production source merely because a tool finds a file large.

# Replacement / Large-Rewrite Integrity

Targeted edits remain the default. Existing documentation/source replacement must not silently delete unrelated headings/content. The repository's replacement-integrity validator remains a safety net where applicable.

A deliberate large rewrite is allowed only when explicitly approved for that file/scope. Large-document decomposition for workflow/decision ownership is permitted only when preservation validation proves the original content was not lost.

# No-Churn / Affected-File Rule

When a file is deliberately opened, also consider already-approved pending items affecting the same implementation surface. Classify each as implement now, defer, park, or reject/supersede. Do not turn an open file into authorization for unrelated cleanup or new scope.

# Live-Site / Device Validation

Changes affecting runtime/user-visible behavior require live validation before finalization. Validate the changed feature plus directly affected regression paths; do not expand into unrelated site-wide retesting unless the change is cross-cutting.

A live/device failure blocks finalization and must be recorded immediately. If the assistant cannot exercise the required environment, status remains Implemented / Unvalidated or Partially Validated until the user/authorized tester confirms the gate.

# Commit/Pushing

Production commit/push remains explicitly user-authorized. After authorized push:

- re-fetch/verify commit and changed files;
- confirm no unexpected files changed;
- run applicable integrity/static checks;
- record live/device results;
- reconcile Drive/Git state and repository status documentation.
