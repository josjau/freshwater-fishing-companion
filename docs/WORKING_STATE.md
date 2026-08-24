# Freshwater Fishing Companion — Working State

**Document:** WORKING_STATE.md  
**Document Revision:** 1.4.3  
**Document Status:** Approved — Active Repository Continuity Record  
**Workstream Status:** Wave 3 Bass — USER APPROVED / final documentation closeout complete / pending explicit commit-push authorization  
**Committed Baseline:** `24224d9693267911205318dd9da2373f3e5c299d`  
**Last Updated:** 2026-08-24

# Purpose

This file is intentionally a **compact current-work record only**. It owns the active repository workstream, current validation/synchronization state, unresolved gates, and exact resume point.

Completed history and durable decisions do not accumulate here. Before a commit closes a session, package, section, defect, or decision, durable information must be promoted to its canonical repository owner. After GitHub reconciliation, remove completed material from this file except for explicitly open carryover.

# Authority Model

1. GitHub `main` is authoritative for the committed source baseline and formally reconciled documentation.
2. Google Drive `Working Source/Current` is the authoritative **working-tree package** between commits and may intentionally be ahead of GitHub.
3. The Drive working tree is stored atomically as a canonical full-tree ZIP plus manifest rather than as a manually maintained exploded mirror.
4. The local repository is the application/browser-validation copy of the Drive working tree. Local-only edits are not durable working truth.
5. `HANDOFF.md` is the compact repository recovery entrypoint; `ACTIVE-CHANGE-LEDGER.md` owns material non-closed carry-forward items.
6. Chat history is context only. The Google Drive Chat Logs file is disaster-recovery evidence only and is not an operational authority.

# Current Workstream

**Fish Guide — Production Wave 3: Bass** is open only at the final pre-commit/post-push closeout gate.

Current approved Wave 3 scope remains exactly:

- Largemouth Bass
- Smallmouth Bass
- Spotted Bass
- White Bass
- Striped Bass
- Hybrid Striped Bass

All six processed Fish images remain user-approved. The six Fish records and six deterministic identification relationships are present in the recovered working tree.

The Fish-to-Rig review is now explicitly complete with **12 approved recommendations**:

- Largemouth Bass — Texas Rig — Primary
- Largemouth Bass — Inline Spinner Setup — Alternative
- Smallmouth Bass — Jighead + Soft Plastic — Primary
- Smallmouth Bass — Ned Rig — Alternative
- Spotted Bass — Jighead + Soft Plastic — Primary
- White Bass — Jighead + Soft Plastic — Primary
- White Bass — Inline Spinner Setup — Primary
- White Bass — Live-Bait Slip-Sinker Rig — Alternative
- Striped Bass — Jighead + Soft Plastic — Primary
- Striped Bass — Live-Bait Slip-Sinker Rig — Alternative
- Hybrid Striped Bass — Jighead + Soft Plastic — Primary
- Hybrid Striped Bass — Live-Bait Slip-Sinker Rig — Alternative

# Open Cross-Domain Finding

The Rig `useCases[]` species-specific wording is a semantic-owner/data-quality defect under D056. Fish applicability belongs to `FISH_RIG_GUIDANCE`, not to duplicated species lists inside Rig `useCases[]`. The finding is recorded in `V1-DESIGN-AUDIT.md` and must be addressed during that planned audit unless it directly blocks an earlier active workstream.

Do not add more Fish names to Rig `useCases[]` as a workaround.

# Recovery / Synchronization Status

- Current GitHub `main` baseline: `24224d9693267911205318dd9da2373f3e5c299d` (`Close repository workflow transition`).
- The failed repository-only transition left the prior Drive exploded `Working Source/Current` mirror stale.
- The user-supplied `freshwater-fishing-companion(3).zip` recovered the actual uncommitted local content state; it contains no `.git` directory, which is expected for review packages.
- The stale exploded Drive mirror is being retired/archived.
- The replacement Drive `Working Source/Current` baseline is the validated full-tree ZIP generated from the recovered tree plus the approved corrections in this session.
- Git metadata (branch, local HEAD, local origin/main, status, remote) must be verified from the user's actual local checkout after the new review ZIP is applied and before commit/push authorization.

# Commit / Validation Documentation Closure Gate

Every commit candidate requires both:

1. **Full-tree mechanical verification** — the approved Drive working ZIP, local extracted tree, and intended commit file set must contain no unexpected, missing, stale, or local-only permanent repository files.
2. **Repository documentation impact sweep** — every durable repository documentation file receives an explicit disposition for the commit: **UPDATED** or **VERIFIED — NO CHANGE REQUIRED** after checking whether the commit affects its responsibility.

A commit is not ready if a durable decision exists only in chat, Live Working State, or an unreconciled Drive note.

# Current Validation State

Previously validated against the recovered local Wave 3 review tree:

- JavaScript syntax — PASS
- canonical repository-integrity validator — PASS
- six Fish records — PASS
- six identification relationships — PASS
- six approved Bass image assets — PASS
- desktop 1280 px review — PASS
- 390 px mobile review — PASS
- alias/scientific-name search — PASS
- ODWC attribution visibility — PASS
- browser warnings/errors — PASS

The regenerated working package passes locked-package fidelity for the exact six Bass Fish, six relationship IDs, twelve recommendation/tier assignments, six primary Media records, and six approved asset hashes. Repository integrity, JavaScript syntax, CSS structure, stale-workflow scan, and full working-package round-trip checks also pass.

User browser review on 2026-08-24 is complete and **APPROVED ALL CHANGES**. Compare Similar Fish centering, standardized Selection/Fish ID image blocks, the restored native Unicode `→` treatment, and representative `font-weight: 800` back/internal/external/compact-row navigation-arrow surfaces are approved. No Wave 3 visual defect remains open.

# Exact Resume Point

1. Apply the final documentation-closeout review ZIP directly over the existing local Git checkout; do **not** replace or copy the `.git` directory.
2. Verify local Git metadata: repository root, branch `main`, status, local `HEAD`, local `origin/main`, and remote.
3. Review the complete Git diff and confirm it matches the user-approved Drive working package plus final documentation closeout only.
4. If the local tree differs from the validated package, rerun the affected validators and resolve the mismatch before commit.
5. Wait for **separate explicit commit/push authorization**; the user's approval of the changes is not itself push authorization.
6. After push, re-fetch GitHub `main`, verify the committed tree and validations, reconcile Drive `Current` to the new Git baseline, close/archive Wave 3, and trim this file to the next active workstream only.
