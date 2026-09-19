# Freshwater Fishing Companion — Documentation and Closeout

**Document:** workflow/DOCUMENTATION-AND-CLOSEOUT.md  
**Document Status:** Approved  
**Role:** Durable documentation, impact reconciliation, session continuity, commit verification, and closeout  
**Decision Baseline:** D038-D041, D055, D068  
**Last Updated:** 2026-09-18

# Documentation Is Part of the Work

Approved durable decisions, state changes, defects, deferrals, and exact resume points must not remain only in chat.

For every material durable decision preserve:

1. **Decision** — what was settled;
2. **Reason** — meaningful tradeoff/risk/maintenance rationale;
3. **Current implementation status**;
4. **Future/revisit trigger**;
5. **Canonical owner**.

Architecturally meaningful non-actions and deferrals require the same recoverable context.

# Approval-Gate Documentation Capture — Mandatory

Every explicit approval gate is a Drive Working Source/Current documentation gate. Before moving to the next approval or dependent checkpoint:

1. identify **every applicable owner document whose owned semantics changed** because of the approved decision, discussion outcome, or project-direction change;
2. update those owner documents immediately in the complete Drive Current working tree, including decision, domain/data-model, relationship, architecture, roadmap, workstream, `WORKING_STATE.md`, and `ACTIVE-CHANGE-LEDGER.md` owners as applicable;
3. update the Live Working State for the same material transition and read it back;
4. perform targeted readback sufficient to prove the intended owner updates are present;
5. when the consolidated transcript policy applies, fresh-fetch the **currently active numbered Chat Log segment**, append the conversation since the prior transcript checkpoint, replace that same Drive file object, and tail-read back the appended checkpoint;
6. only after all applicable owner, Live Working State, and Chat Log writes/readbacks pass may the approval gate close;
7. immediately give the user a concise **approval gate receipt**: what closed, which material owners/state/log were updated and read back, whether production/commit/CI changed, and the exact next checkpoint/resume point. Dependent substantive work starts only after this receipt.

Approval-stage documentation must not be deferred to planning closeout, staging, ZIP creation, local review, commit, or session end. Git commits may be batched, but Drive working-state capture may not. Drive Current therefore remains the complete approved uncommitted working state. The later local repository review/package process carries that accumulated state into the local repo; after validation and commit/push, GitHub `main` becomes the committed authority for it.

**New-chat recovery rule:** every new project chat must prove the prior material approval/disposition gate closed before substantive work begins. Check the current semantic owners and Live Working State and, when transcript preservation applies, the latest Chat Log checkpoint/tail. If the preceding chat ended with a required append/write/readback still pending or the expected checkpoint is absent, the new chat performs only the smallest authoritative recovery needed to close that gate, then issues the missing gate receipt. Do not treat a fresh chat as a reset of an incomplete approval gate.

# Historical Chat Transcript Archive

Google Drive holds the consolidated historical chat transcript as a **small sequence of numbered raw-Markdown segments**, not routine per-chat files. `Freshwater Fishing Companion Chat Log 1.md` is the closed historical Segment 1 archive and `Freshwater Fishing Companion Chat Log 2.md` is the current active segment. The transcript is historical evidence/context only and never replaces GitHub `main`, Drive `Working Source/Current`, the Live Working State, or canonical repository documentation. Only one segment is active at a time.

Beginning with **FCC 37**, preserve the active chat incrementally. **This is a blocking part of the approval gate, not optional archival cleanup.** If the required fresh-fetch, append, same-file replacement, or tail readback fails, the approval gate remains open and dependent discussion/work must stop until transcript preservation succeeds. Do not defer a missed approval checkpoint to session closeout merely because semantic-owner updates succeeded.

1. at each explicit approval gate, after canonical owner/Live Working State capture, append the user/assistant conversation since the previous transcript checkpoint;
2. if an unusually long discussion risks losing verbatim context before an approval gate, create a transcript-only preservation checkpoint without implying approval or changing project state;
3. at session closeout, append all conversation since the last transcript checkpoint plus the session boundary, next chat title, and exact resume point;
4. before every append, fetch the latest Drive copy of the **active Chat Log segment** so manual/user edits or earlier archival work cannot be overwritten;
5. preserve all existing content, append only the new transcript block, replace the same Drive file object, and read back the appended tail to verify the boundary and content are present;
6. never reconstruct supposedly verbatim missing conversation from chat memory, summaries, prior proposals, or canonical documentation. If a transcript gap exists, preserve it explicitly and use an authoritative user export when available.

Because each Chat Log segment is a raw Markdown Drive file rather than a native Google Doc, its update path is fresh Drive read -> append -> same-file replacement -> tail verification. When the active segment becomes operationally cumbersome, close it at a clean approval/session boundary and open the next numbered segment. Closed segments are read-only historical archives except for explicit integrity repair from authoritative evidence. A discovered verbatim gap is marked explicitly and is never reconstructed from memory, summaries, canonical decisions, or proposals.

**Transition note:** FCC 36 is excluded from automated archival. The user will insert the authoritative exported FCC 36 transcript manually between FCC 35 and FCC 37. Automated incremental transcript capture starts with FCC 37.

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

Live Working State is **replacement-oriented current state**, not cumulative history. When a checkpoint is superseded, remove or compact it after any durable fact has been reconciled into its canonical repository owner. Numbered append-only checkpoint chains are prohibited because they create contradictory active states and make stale text discoverable as if it were current. Historical execution evidence belongs in the applicable workstream/archive, landed history in `CHANGELOG.md`/Git history, and durable architecture in decisions/data-model owners.

If startup or active work finds the Live Working State stale, missing, or contradictory, stop normal progression and reconcile it from authoritative GitHub, Drive Current, repository current-state owners, and current-session facts before continuing. Do not use chat memory as the substitute source and do not create another state document to solve the problem.

# Canonical Documentation Owners

- mission/product scope → `PROJECT.md`;
- technical/source architecture → `ARCHITECTURE.md`;
- product order/future gates → `ROADMAP.md`;
- durable decision index → `DECISIONS.md`;
- durable decision bodies → `decisions/*.md`;
- workflow → `DEVELOPMENT_WORKFLOW.md` and the two files under `workflow/`;
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
approval gate / approved decision-change
→ identify every applicable owner whose semantics changed
→ update those owners immediately in complete Drive Current tree
→ update/read back Live Working State
→ only then continue to next checkpoint
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

# Planning Phase Closeout — Mandatory Build Gate

A planning phase is not complete for execution purposes merely because decisions are approved or captured in Live Working State. Before any dependent production/build phase starts, run a complete planning documentation closeout. **This is a verification/convergence gate, not a catch-up pass; approval-stage owner updates should already be present in Drive Current.**

Required sequence:

1. verify every approval-stage decision and discussion outcome is already present in every applicable owner in Drive Current; any stale owner is an approval-capture defect and must be reconciled before closeout can pass;
2. identify and reconcile only aggregate phase-level vocabulary/status/resume changes that arise from closing the planning phase;
3. remove superseded/open-planning language that would contradict the locked plan;
4. update the active workstream, `WORKING_STATE.md`, and `ACTIVE-CHANGE-LEDGER.md` for the phase transition as applicable;
5. complete the documentation impact disposition matrix (`UPDATED`, `VERIFIED — NO CHANGE REQUIRED`, or `NOT APPLICABLE`);
6. run targeted consistency and structural-readability validation and reconcile repository validators if the documentation changes alter mechanically enforced expectations;
7. verify the bounded changed-file scope and connector-read back the changed Drive Current owners;
8. only after those checks pass, record planning documentation closeout PASS in Live Working State and authorize the first build action.

If any applicable canonical owner is stale, planning closeout fails and the build remains blocked.

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

# Routine Closeout — Enforced Gates

Closeout is a verification/state-transition operation, not the first time documentation catches up. The following gates are mandatory and ordered.

## Gate A — Documentation Impact / Canonical Owner

Before commit, produce a finite impact disposition for durable active documentation affected by the change. Every relevant owner must be classified as:

- **UPDATE REQUIRED**;
- **VERIFIED — NO CHANGE REQUIRED**; or
- **NOT APPLICABLE**.

The impact set must include current-state owners, roadmap/ledger/history owners when their semantics changed, affected architecture/UI/data-model/maintenance owners, and any durable decision body whose wording would otherwise contradict the implemented state. Silent omission is a failed gate.

## Gate B — Documentation Consistency

Before commit, run `tools/validate_repository_integrity.js`. For documentation/structural work this validator is the normal mandatory repository/documentation consistency gate and is responsible for mechanically detectable governance defects including required/retired paths, active Markdown relative-link targets, decision-index/body ID integrity, and required governance markers.

`tools/validate_workstream_closeout.js` is a targeted diagnostic, not a universal closeout gate. Run it only when a specific workstream presents a demonstrated stale-state risk that the normal repository-integrity validation does not adequately cover—for example, uncertainty about retirement of a former active path or suspected stale closeout wording tied to that workstream. When it is invoked for such a demonstrated need, its failure must be reconciled before closeout. Do not add it to routine closeout solely because the work has a named workstream.

## Gate C — Review / Commit

1. Verify the Live Working State already records the approval/current gate and read it back.
2. Freeze the exact approved Drive review state/revision/package identity.
3. Run final applicable deterministic validation.
4. Commit/push under the applicable authority gate: documentation-only uses standing authority when not part of a user-reviewed package; production/user-facing changes require explicit user commit/push authorization.
5. Verify GitHub SHA and exact modified/added/deleted-file set.
6. Verify required Repository Integrity / Pages / other applicable CI.
7. Confirm committed GitHub state matches the approved Drive/review state.

## Gate D — Final Convergence / `CLOSED / PASS`

`CLOSED / PASS` may be recorded only after all of the following are true:

- approved production/source/documentation state is committed;
- required CI is PASS;
- the documentation consistency gate passes against the landed repository state;
- `WORKING_STATE.md`, `ACTIVE-CHANGE-LEDGER.md`, and `ROADMAP.md` do not contradict the landed milestone state;
- the closed workstream's active path has been retired when applicable;
- archive/delete/GIT HISTORY ONLY dispositions are complete and verified;
- only genuinely post-commit state/history updates remain, and those are reconciled;
- the Live Working State contains the landed SHA, final gate result, and exact next action, and connector readback confirms it.

If any item is false, the work is not closed. Do not start a dependent workstream.

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
