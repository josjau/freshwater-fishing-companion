# Freshwater Fishing Companion — Production Changes

**Document:** workflow/PRODUCTION-CHANGES.md  
**Document Status:** Approved  
**Role:** Production write, review/staging, preservation, validation, package transport, and commit authorization  
**Last Updated:** 2026-08-27

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


# Review / Staging Procedure

## Review-Cycle Identity

Use the review-cycle identity defined in `../DEVELOPMENT_WORKFLOW.md`. Establish it once for the first coherent revision and preserve it until an invalidation condition applies.

# First Review Revision

1. Verify the starting GitHub SHA and complete Drive working tree.
2. Read applicable governing/domain owners.
3. Establish the changed-file set, deletion set if any, and validation requirements.
4. Write intended changes directly into Drive `Working Source/Current`.
5. Run the full deterministic validation justified by the new scope.
6. Create a review/checkpoint package only when review, transfer, validation, or checkpointing requires it.

# Bounded R2/R3 Corrections

Within an unchanged review cycle:

1. verify GitHub still equals the recorded starting SHA unless a deliberate commit occurred;
2. verify Drive `Current` and Live Working State cycle identity;
3. identify only files actually changing/deleting plus directly coupled owners;
4. edit the cumulative Drive working tree;
5. run targeted validation for changed/dependent surfaces;
6. update the cumulative package only when a package is needed;
7. advance review revision, changed/deletion metadata, and package hash/ID.

Do not reconstruct the workstream from GitHub when GitHub intentionally has not changed and the complete Drive tree remains verified.

# Packages

`Working Source/Packages` owns transport/checkpoint artifacts such as review ZIPs, manifests, transfer packages, and explicit recovery exports. Packages are **not** authoritative editable working state.

A review ZIP must:

- preserve repository-relative paths;
- exclude `.git`;
- contain the cumulative new/modified files required to reproduce the candidate state over the recorded GitHub baseline;
- record starting GitHub SHA, review revision, changed-file set, deletion set, and sufficient hash/identity data to prove package contents.

## Deletions are explicit

ZIP extraction can overwrite/add files but **cannot remove pre-existing repository files**. Therefore any review revision that retires, renames, or deletes tracked paths must provide an explicit deletion list outside the repo payload and in the review manifest.

The local review sequence is:

```text
extract ZIP over repository root
→ delete every path in the package deletion list
→ inspect GitHub Desktop diff
→ compare modifications/additions/deletions with manifest
```

Do not place the deletion-list artifact inside the repository ZIP if doing so would create an unrelated untracked repository file.

# Targeted Validation

Repeat expensive/full validation only when the correction or dependency risk justifies it. Always run deterministic checks that directly cover the changed surface and semantic owners.

Examples:

- documentation decision/consolidation → decision-ID uniqueness, cross-reference, link/path, no-loss/preservation, impact checks;
- data relationship change → relationship/schema/repository-integrity checks;
- JavaScript correction → syntax + feature/regression checks;
- media replacement → media/provenance/visual/mobile checks.

# Invalidation

Return to broader baseline/reconciliation only under the invalidation conditions in `../DEVELOPMENT_WORKFLOW.md`.
