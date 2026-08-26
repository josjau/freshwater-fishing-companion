# Freshwater Fishing Companion — Review and Staging

**Document:** workflow/REVIEW-AND-STAGING.md  
**Document Status:** Approved  
**Role:** Review revisions, packages, deletion manifests, and targeted validation  
**Decision Baseline:** D062 (historical), D068  
**Last Updated:** 2026-08-25

# Review-Cycle Identity

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
