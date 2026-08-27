# Freshwater Fishing Companion — Documentation and Closeout

**Document:** workflow/DOCUMENTATION-AND-CLOSEOUT.md  
**Document Status:** Approved  
**Role:** Durable documentation, impact reconciliation, session continuity, commit verification, and closeout  
**Decision Baseline:** D038-D041, D055, D068  
**Last Updated:** 2026-08-26

# Documentation Is Part of the Work

Approved durable decisions, state changes, defects, deferrals, and exact resume points must not remain only in chat.

For every material durable decision preserve:

1. **Decision** — what was settled;
2. **Reason** — meaningful tradeoff/risk/maintenance rationale;
3. **Current implementation status**;
4. **Future/revisit trigger**;
5. **Canonical owner**.

Architecturally meaningful non-actions and deferrals require the same recoverable context.

# Live Working State — Inline Operational Ledger

The Live Working State is the mandatory operational ledger for the active project-chat/review cycle. It must be updated as material state changes occur; waiting until staging, closeout, or session end is a workflow failure.

Update it after every material transition that changes:

- approval, rejection, data lock, scope, or the next authorized action;
- implementation status or approved uncommitted Drive state;
- defect/risk discovery or disposition;
- validation/review/CI status that opens or closes a gate;
- review-build approval;
- commit/push/GitHub SHA;
- wave/workstream state or exact resume point.

Each update must be followed by connector readback. The dependent next action is blocked until readback confirms the checkpoint. The checkpoint should remain compact and include only what is needed to recover current operation: active workstream/wave, relevant GitHub baseline/landed SHA, Drive Current status, latest material decision/approval, validation/review status, open defects/risks, and exact next action.

If startup or active work finds the Live Working State stale, missing, or contradictory, stop normal progression and reconcile it from authoritative GitHub, Drive Current, repository current-state owners, and current-session facts before continuing. Do not use chat memory as the substitute source and do not create another state document to solve the problem.

# Canonical Documentation Owners

- mission/product scope → `PROJECT.md`;
- technical/source architecture → `ARCHITECTURE.md`;
- product order/future gates → `ROADMAP.md`;
- durable decision index → `DECISIONS.md`;
- durable decision bodies → `decisions/*.md`;
- workflow → `DEVELOPMENT_WORKFLOW.md` and the three files under `workflow/`;
- UI/interaction standards → `UI_STANDARD.md`;
- coding/document conventions → `STYLE_GUIDE.md`;
- domain schemas/relationships → applicable `data-model/*.md`;
- media/provenance → `MEDIA_GUIDE.md` / source registries;
- active workstream detail → active workstream file;
- exact current repository state/resume → `WORKING_STATE.md`;
- cross-workstream non-closed carry-forward → `ACTIVE-CHANGE-LEDGER.md`;
- meaningful landed history → `CHANGELOG.md`;
- detailed closed evidence → archive/Git history.

`WORKING_STATE.md` must not become a duplicate decision archive or historical journal.

# Drive-First Documentation Path

```text
approved decision/change
→ identify affected owners once
→ edit canonical files in complete Drive Current tree
→ targeted preservation/consistency checks
→ review/package when required
→ commit under applicable authority
→ verify GitHub SHA + changed/deleted-file set
→ confirm Drive/Git synchronization
```

Documentation-only work retains standing commit authority when a bounded reconciliation is complete and valid. When documentation is part of a user-reviewed package or combined production change, it follows that review/commit cycle instead of creating an unnecessary parallel commit.

# Documentation Impact Sweep

Before commit, every applicable durable owner receives one explicit disposition:

```text
UPDATED
```

or

```text
VERIFIED — NO CHANGE REQUIRED
```

This is a responsibility-based disposition matrix, not a forced reread of every document. Inspect deeply only when the current change can materially affect the document's role.

Consider as applicable:

- project/product scope;
- architecture;
- durable decisions;
- workflow;
- roadmap;
- current state / active ledger;
- data-model/relationships;
- evidence/provenance/media;
- UI/design audit;
- changelog;
- active workstream.

# Decision Documentation

`DECISIONS.md` is the compact canonical index. Full decision bodies are grouped under `docs/decisions/` by durable ownership.

Preservation rules:

- decision IDs are permanent and globally unique;
- one decision body has exactly one canonical decision-body file;
- cross-domain documents may cite a decision ID but must not create a competing full body;
- Git history preserves the former monolithic decision file;
- decomposition/consolidation must mechanically prove every indexed ID appears exactly once in canonical bodies and exactly once in the index.

# Existing-File Preservation

For an existing documentation file:

- use the latest verified Drive working-tree version during an active cycle, with GitHub as committed comparison baseline;
- make targeted edits by default;
- preserve unrelated content;
- retain/provide full-file validation copies where applicable;
- use no-loss/replacement-integrity checks for large rewrite/decomposition/consolidation;
- never infer that a previously proposed version was implemented.

A document may be retired only after every unique active rule/status/decision it owns is either proven historical-only or migrated to a surviving canonical owner. Git history is sufficient for ordinary retired revisions; use `archive/` only when the old file has independent audit/provenance/reconstruction value.

# Session-End Gate

When the user indicates the session is ending, stop normal progression long enough to preserve recoverable state. First verify that the Live Working State already contains every material transition from the session; write any missing checkpoint and read it back before ending.

Record as applicable:

- approved decisions made during the session;
- approved but unimplemented changes;
- meaningful rejected/deferred alternatives and reasons;
- defects/risks/contradictions discovered;
- actual implementation/validation state;
- unresolved decisions as unresolved;
- exact continuation point and next action.

`WORKING_STATE.md` is the single repository continuation entrypoint. The Live Working State may carry more operational cycle detail, but durable decisions and cross-workstream carry-forward must be reconciled into their canonical repository owners.

A material off-segment discussion is classified as Build Now, Parking Lot, Reject, or Open and documented in its proper owner. If it does not affect active implementation it may be parked, but enough context must be retained to resume without chat reconstruction.

# Routine Closeout

Closeout is a verification/state-transition operation, not the first time documentation catches up.

After final approval:

1. Verify the Live Working State already records the final approval/current gate and read it back; closeout may not proceed from a stale operational ledger.
2. Freeze the exact approved Drive review state/revision/package identity.
3. Run one final applicable deterministic validation pass.
4. Run `tools/validate_workstream_closeout.js` when an active workstream is closing.
5. Complete the documentation impact disposition matrix.
6. Commit/push under the applicable authority gate:
   - documentation-only = standing authority when not part of a user-reviewed package;
   - production/user-facing = explicit user commit/push authorization.
7. Verify the GitHub SHA and exact modified/added/deleted-file set once.
8. Re-fetch/inspect affected files where structural/truncation risk exists and verify applicable repository-integrity CI.
9. Confirm committed GitHub state matches the approved Drive/review state.
10. Apply only genuinely post-commit status/resume documentation that could not have been known before commit, then reconcile those minimal updates.
11. Retain Packages only when they have explicit continuing review/checkpoint/recovery value.
12. Reconcile `WORKING_STATE.md`, the Active Change Ledger, and Live Working State to open carry-over / next work only, then read back the Live Working State one final time.
13. Re-run the closeout validator if a workstream was retired.

# Artifact Retirement

Classify retired repository artifacts as:

1. **GIT HISTORY ONLY** — ordinary prior revision; no archive copy needed;
2. **ARCHIVE** — independently useful historical/audit/provenance/reconstruction evidence;
3. **DELETE** — no continuing repository value beyond Git history.

Do not create permanent repository tooling for a one-time transformation unless recurring value justifies it.

# Post-Write Integrity

A successful write/commit response is not completion. After GitHub write:

- verify commit/tree and changed/deleted-file list;
- re-fetch affected files where truncation/structural risk exists;
- confirm intended content and preserved unrelated content;
- run applicable integrity checks;
- treat unexpected shrinkage, missing headings/tails, malformed replacements, broken references, or unexpected paths as failure.

Display truncation by a tool is not evidence of repository truncation; use targeted reads/comparisons.

# Changelog

`CHANGELOG.md` remains a single curated landed-change history. Its size does not currently justify another ownership layer. Revisit only if historical volume materially slows routine work or makes ownership ambiguous.

# No Unvalidated Transition

Do not begin a dependent build segment while the current one is unfinalized. Resolve it or deliberately park it with explicit status and exact resume point. Even when the repository state is otherwise valid, a stale/unverified Live Working State blocks the transition until its checkpoint is reconciled and read back.
