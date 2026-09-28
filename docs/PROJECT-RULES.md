# Freshwater Fishing Companion — Project Rules

**Document:** PROJECT-RULES.md  
**Document Revision:** 1.2.3  
**Document Status:** Approved  
**Role:** Single canonical current FCC procedural owner  
**Last Updated:** 2026-09-28

# Purpose

This document owns the current execution procedure for Freshwater Fishing Companion. Project Custom Instructions provide the compact always-on layer; this file provides the complete repository procedure. Other documents may reference these rules but must not maintain competing active procedure.

# Block 1 — Authority and Startup

- GitHub `main` is committed authority and contains only durable project/repository material. Temporary audits, working notes, candidate tracking records, Chat Logs, and other operational-only artifacts do not belong in Git.
- Google Drive `Working Source/Current` is the complete editable repository working tree and owns approved uncommitted **durable repository** changes. It mirrors the class of files that may legitimately land in Git; temporary operational records stay outside the repo tree.
- The external Live Working State is the sole **project-level resume/index** surface. It owns the active Build Unit/workstream identity, current GitHub/Drive lineage, material gate state, candidate pointer, and exact next action.
- Each active Build Unit may have one external temporary audit/workstream record outside `Working Source/Current`. That record owns detailed operational traceability: exact approved decision text, findings/dispositions, slice status, candidate lineage, and unresolved discussion state. It is not repository authority, is never included in review ZIPs, and is never committed to Git.
- `docs/ACTIVE-CHANGE-LEDGER.md` owns material non-closed cross-workstream carry-forward. `docs/ROADMAP.md` owns product order/future direction. Git history and `docs/CHANGELOG.md` own landed history. Historical Archive is historical evidence only and is outside normal startup/current-source lookup.
- ChatGPT Work is not part of the FCC workflow. Never suggest, invoke, request, or redirect FCC work to ChatGPT Work.

Before substantive work in every new FCC chat:

1. Verify GitHub `main`.
2. Read Live Working State.
3. If Live Working State names an external active audit/workstream record, read that record before substantive continuation.
4. Verify the previous material approval gate is CLOSED / PASS or identify the exact open gate/recovery state.
5. Verify Drive Current against the recorded lineage.
6. Read this file and only directly relevant durable semantic owners. Read `ACTIVE-CHANGE-LEDGER.md` only when the requested scope can intersect open carry-forward.

If prior writes/readbacks/validation are incomplete, or authorities conflict, perform recovery only until the smallest authoritative reconciliation closes the gap. A new chat title or remembered resume point never overrides an open gate.

# Block 2 — Approval Classes, Decision Capture, and Receipts

FCC approvals are classified by effect rather than by the word `Approved` alone.

## Routine Build Unit decision capture

A routine in-scope slice decision, rejection, deferment, or review finding disposition does **not** trigger the full material approval gate. Instead:

1. Preserve the exact operative decision text in the external active audit/workstream record as soon as the decision is clear. Do not replace it with a later summary.
2. If the approval is materially ambiguous, ask one concise clarification or state the proposed capture and ask the user to confirm it before recording it as approved.
3. Preserve material qualifiers, exceptions, reservations, and scope restrictions.
4. Default every approval to `APPROVED / REVISION ALLOWED` unless the user explicitly makes it locked/final/no-revision. Later revision requires an explicit superseding decision; do not silently reinterpret prior approved text.
5. Record only the minimum additional traceability needed: decision ID, source slice, implementation/review mapping, and disposition.
6. Continue the same Build Unit without Drive Current canonical reconciliation, Git commit/push, CI, or a full gate receipt unless the decision itself crosses a material boundary below.

## Material approval gate

A full FCC gate is required when an approval/rejection/deferment/scope lock materially changes a durable owner or project boundary, including governance/architecture/product-roadmap changes, Build Unit scope lock, Planning-to-Build authorization, **Local Final Approval / Commit Candidate Approval** and its exact-candidate promotion, production authorization, commit/push authorization, or final Build Unit closeout. The gate is:

1. Identify the finite set of affected durable owners.
2. Classify each as `UPDATE REQUIRED`, `VERIFIED — NO CHANGE REQUIRED`, or `NOT APPLICABLE`.
3. Complete every required Drive Current write/readback for durable repository owners and every required external operational write/readback.
4. Update and read back Live Working State.
5. Run proportional validation and reconcile affected validator/CI expectations.
6. Treat any unresolved required item as gate OPEN; dependent work remains blocked.
7. Issue a concise gate receipt before progression.

The material gate receipt states status, material owners/readbacks, validation, production disposition, commit/push/CI disposition, exact next section/resume point, and `New chat: YES / NO / RECOMMENDED` with the reason.

If an approval includes questions, answer the questions before the applicable capture/gate. After a material gate receipt, stop unless the user explicitly directs continuation. Routine decision capture does not require a stop.

# Block 3 — Discussion, Decision Fidelity, and Chat Boundaries

- Discussion, findings, proposals, and design exploration do not authorize production or durable repository changes.
- Do not wait until end-of-chat to reconstruct approved decisions. Once a decision is approved and clear, capture its exact operative wording in the external active audit/workstream record under Block 2.
- End-of-chat/end-of-slice consolidation is an indexing/coverage check, not a decision-summary rewrite. It may list captured decision IDs, open findings, current candidate, and exact next action, but it must not replace the exact approved text already recorded.
- When unresolved discussion becomes continuity-sensitive, the external active audit may record a concise `OPEN` note describing the question and current alternatives without inventing a decision.
- Live Working State remains compact: point to the active audit, identify the last completed decision/slice, current candidate if any, GitHub/Drive lineage, and exact resume. Do not duplicate the detailed decision register there.
- Because a chat may end abruptly with no warning, continuity-critical approved decisions and materially important open state must be written incrementally enough that normal recovery never depends on chat history.
- If the user states that the next section/phase belongs in a new chat, the current chat becomes closeout-only. Do not begin the next work here.
- A new chat never bypasses an incomplete material gate or unrecorded continuity-critical state.
- On session end, perform only the compact continuity/readback work required to resume safely; do not force repository closeout merely because a chat slice ends.
- `Freshwater Fishing Companion Chat Log.md` is manually maintained by the user and is an external historical safety net only. It is outside routine assistant startup, approval, closeout, continuity, and recovery unless the user explicitly requests a separate Chat Log task.

# Block 4 — File Editing and Sediment Transport

Before editing an existing repository file:

1. Verify current GitHub `main`.
2. Locate the matching Drive Current file.
3. Fresh-read the exact current content.
4. Use that version for authoritative/promotion edits. Candidate-only R2+ review edits follow the bounded Block 6 exception and do not become authoritative until promotion.

Never reconstruct authoritative current repository content from chat, memory, old ZIPs, retired files, historical decisions, or a prior proposal. Never assume a proposed edit was implemented. Make targeted edits and preserve unrelated content. The only package exception is an active review cycle under Block 6: after R1 is created from verified authority, candidate-only R2+ revisions may use that cycle's immutable R1 package plus the audit-recorded cumulative corrections. That exception does not make the package authoritative repository state.

When this file defines a proven method, use it directly rather than testing generic alternatives first.

For an existing raw Drive file that requires `file_uri`, use the established Sediment replacement path exactly:

1. Fresh-fetch/materialize the exact Drive Current file.
2. Produce the targeted edited bytes.
3. Create only one temporary Drive transport object when needed.
4. Raw-fetch that transport object.
5. Pass only the returned nested `file_uri.file_id` literal `sediment://...` string to `update_file.file_uri` for the original Drive file ID.
6. Read back the original file ID and verify the intended content/integrity.
7. Delete the temporary transport object.

Do not substitute a runtime `file_...` handle, the full `file_uri` object, a signed download URL, Library overwrite, rename/swap replacement, Google Docs conversion, chat reconstruction, or base64 reconstruction. If the canonical method fails when correctly executed, diagnose the failure before choosing another method.

## File-integrity protections

- After text/code edits, verify intended content and surrounding file integrity.
- Targeted edits should yield targeted diffs. Disproportionate line/size growth, whitespace churn, encoding/line-ending churn, or repeated blank-line runs are defects.
- More than two consecutive blank lines in normal FCC source/docs is an integrity defect unless intentionally approved for a specific file/format.
- Repair bloat in authoritative Drive Current while preserving approved semantic content; never replace it from older GitHub, ZIP, chat, or archive content.
- Frequently edited files receive lightweight structural checks at logical checkpoints.
- Large rewrites/consolidations require explicit no-loss/replacement-integrity comparison before retirement of the former owner.

# Block 5 — Planning-to-Build and Production

- Planning, audit, or design completion does not authorize production.
- Before build, the Planning-to-Build gate verifies the Build Unit scope is locked, every approved build-relevant decision is preserved verbatim in the external active audit and mapped to implementation/validation, any durable owner that must be current **before** implementation is reconciled, required readbacks/validation pass, and Live Working State records PASS plus the exact first build action. Durable canonical documentation that is intentionally deferred to final Build Unit reconciliation must be explicitly marked pending rather than silently treated as current.
- Live Working State alone cannot authorize build.
- Production source/data/media/configuration writes require explicit authorization for the exact scope. Prior approval is not blanket authority for later production changes.
- Production/user-facing commit or push requires separate explicit authorization.
- Documentation-only commits retain standing authority after Drive-first editing and applicable validation.
- The first review candidate is compiled from verified GitHub/Drive authority. During an unchanged active review cycle, user-found candidate defects are corrected in the review candidate under Block 6 rather than being promoted into Drive Current after every iteration. Production/source promotion occurs only at the **Local Final Approval / Commit Candidate Approval** boundary defined in Block 6, including an approved mobile correction that requires a new commit.
- Internal chat/review slices may progress within one active Build Unit without Git finalization between slices. A dependent **Build Unit** does not begin until the current Build Unit is finalized or explicitly parked with an exact resume point.
- Preserve single-writer discipline and the approved owner boundaries for semantic facts, relationships, UI standards, and active workstream traceability.

# Block 6 — Review Cycle, ZIPs, Commit, Push, and CI

## First review revision (R1)

- Drive Current remains authoritative for approved uncommitted repository work. A review ZIP is a bounded candidate/transport artifact, not general repository authority.
- Compile R1 from freshly verified GitHub `main` plus the applicable verified Drive Current working state. R1 is the immutable review baseline for that review cycle.
- Record the starting GitHub SHA, Drive lineage, R1 filename/revision, R1 SHA-256, changed-file set, deletion set if any, and required validation in the external active audit/workstream record. Live Working State keeps only the compact R1/current-candidate pointer and exact resume.
- Preserve repository-relative paths. Ordinary local review ZIPs use `FCC-<workstream>-<Build-Unit>-R<n>.zip` naming (for example, `FCC-50-Rig-Guide-R1.zip`) and contain only the durable repository files required to reproduce the current review candidate. Routine durable documentation is excluded from ordinary R1/R2+ ZIPs unless the document itself is under review or is required to represent/test the candidate. External active audits/workstream records, Chat Logs, Live Working State, manifests/reports, hash reports, temporary transport artifacts, `.git`, and other operational-only files are never review-ZIP payload and never Git content.
- Each ordinary R1/R2+ ZIP is cumulative against the review baseline: it contains the current candidate version of every Build Unit file that differs from that baseline, not a patch that requires earlier review ZIPs to be applied first.
- The compilation handoff must provide the review ZIP and the exact user review areas in the same response.

## Bounded review revisions (R2+)

- Within the same unchanged review cycle, subsequent candidate ZIPs are built against the immutable R1 baseline plus the cumulative documented corrections for that cycle. Do not use an arbitrary prior ZIP, chat reconstruction, memory, or an unrelated historical package as source.
- Record each review finding concisely in the external active audit/workstream record: finding, exact approved disposition when applicable, affected files, validation state, and resulting review revision. Preserve approved operative wording; omit unnecessary design-conversation detail.
- Intermediate review ZIPs are disposable. Normally retain only R1 and, when cross-chat/session continuity requires it, the latest active candidate. Older superseded candidate ZIPs may be deleted after their revision identity/hash and applied changes are recorded.
- A candidate ZIP owns only the exact unapproved review candidate for that active cycle. It does not replace GitHub or Drive authority, authorize dependent scope, or become a general source for future work.
- If GitHub `main`, relevant Drive Current files, scope, or an owning contract advances unexpectedly, invalidate package-based iteration and compile a fresh R1 from verified authority before continuing.
- While a local review ZIP cycle is active, GitHub `main` must not move silently. Any legitimate baseline change must be disclosed to the user with old/new SHA, changed scope, pull/reapply guidance, and candidate invalidation/rebuild disposition before further ZIP application.

## Candidate acceptance, Local Final Approval, and promotion

- Ordinary slice approval, review finding acceptance, or candidate acceptance does **not** promote production/source files into Drive Current. It means the accepted change remains in the cumulative review candidate and its exact decision/candidate lineage is recorded in the external active audit.
- **Local Final Approval / Commit Candidate Approval** is the promotion boundary. It occurs when the user explicitly indicates that the locally reviewed Build Unit is ready for the final handoff/commit candidate (for example, asks for the final ZIP).
- At Local Final Approval, freeze the exact candidate and regenerate a fresh Final Local package named `FCC-<workstream>-<Build-Unit>-FINAL-LOCAL.zip` even when its product bytes are identical to the last review ZIP. Promote those exact candidate repository files into Drive Current, read back/hash-verify the promoted files against the frozen candidate, and reconcile the durable repository documentation that must accurately describe the state about to land.
- The Final Local ZIP contains the complete intended commit payload for the Build Unit: final production/source/data/media/configuration files, changed validators/tools, and all durable repository documentation that must land with that implementation. The external active audit/workstream record and all other operational-only records remain excluded.
- Files that must be deleted are listed separately as explicit cleanup instructions because ZIP extraction does not remove obsolete local files; deletion-only paths are not represented by placeholder files inside the ZIP.
- The Final Local handoff must include a **Commit Preview** identifying at minimum: expected GitHub baseline SHA; modified paths; added paths; deleted paths/cleanup instructions; production/source paths; durable documentation paths; and the proposed commit message. If the handoff scope changes after the preview, revise the preview before commit authorization/use.
- If Local Final candidate promotion to Drive Current or its readback/hash verification fails, the material gate remains OPEN; preserve the candidate for recovery but do not proceed to commit staging.
- When repository files must move locally, use one cumulative ZIP rather than one-by-one copying. Supply required deletions separately as explicit cleanup steps outside the ZIP; ZIP extraction does not delete old local files.
- Package creation and Local Final Approval do not themselves authorize commit/push. The user applies the Final Local ZIP to a checkout verified against the stated baseline, confirms/commits the expected diff using the supplied commit message, and pushes through the user's normal Git workflow. Production/user-facing commit/push remains separately authorized by the user.
- After push, verify the landed GitHub SHA and exact file scope plus required CI/Pages. Status is then **Local Review PASS / Actual-Mobile Validation OPEN** until the required deployed-device review finishes. Actual-mobile review is a validation step by default, used to confirm that the deployed application behaves and renders correctly on a real mobile device after local desktop-browser mobile emulation.
- If actual-mobile validation passes without requiring any change from the landed Final Local commit, create **no mobile correction ZIP, no MOBILE-FINAL ZIP, and no additional Git commit**. Proceed directly to Actual-Mobile Final Approval / Build Unit closeout.
- Only if actual-mobile review finds a defect that requires a repository change does a bounded mobile correction candidate cycle begin from the newly verified GitHub baseline. Conditional mobile review packages use `FCC-<workstream>-<Build-Unit>-MOBILE-R<n>.zip` naming and are cumulative against that new GitHub baseline. Intermediate mobile correction ZIPs do not promote production/source files to Drive Current. When a mobile correction is locally approved for commit, freeze/promote/read back that exact correction candidate, include any durable documentation affected by the correction, and hand off a fresh `FCC-<workstream>-<Build-Unit>-MOBILE-FINAL.zip` plus the Commit Preview. `MOBILE-FINAL` exists only when a real post-GitHub correction is ready to be committed. Additional Git commits are therefore justified by deployed/mobile defects, not by routine validation or bookkeeping.
- **Actual-Mobile Final Approval** triggers full Build Unit closeout. The normal target is that no further repository commit is needed at closeout because durable repository documentation already traveled with the Final Local/mobile correction commits. A newly discovered stale durable document is a closeout defect to repair, not an expected extra documentation-commit phase.

# Block 7 — Validation, Closeout, and Failure Recovery

- Validate proportionally to the change and directly test affected regression paths.
- Structural/documentation changes must reconcile affected validators and CI expectations.
- User-facing work requires the applicable desktop/mobile/browser/device validation before final closure. If that validation is absent, report the result as partial/unvalidated rather than PASS.
- Required validation failure blocks closure.
- Closeout is verification/convergence, not a broad audit. Do not reopen completed or unrelated work merely because closeout is occurring.
- Never report `CLOSED / PASS` while applicable writes, readbacks, validation, authorization, commit/push, CI, retirement, or state reconciliation remain incomplete.
- Before final closeout, ensure canonical owners, Live Working State, GitHub, Drive Current, retirement/deletion dispositions, and any active carry-forward agree.
- Routine staging/closeout target is <=10 minutes. Growing operational complexity is a diagnosis signal, not a reason to weaken validation.
- Distinguish product/source failure from execution-method failure. Verify the canonical method was correctly executed before replacing it.
- If routine work begins requiring extra transport, base64, manual Git objects, temporary workflows, repeated rebuilding, duplicate canonical files, or workaround commits, stop and return to the simplest authoritative path. One Sediment temporary transport object is allowed.
- Do not create new process documents for ordinary failures when an existing canonical owner can be corrected.

# Block 8 — Guide Audits, Rule Lifecycle, and Chat Presentation

## Guide audit traceability

- Each Guide-family Build Unit creates one temporary Guide-specific audit/workstream record **outside** `Working Source/Current` at discovery start. Equivalent non-Guide Build Units may use the same external operational pattern.
- The record uses stable section/slice names independent of chat IDs and stores the exact Build Unit scope, section status, findings, approved decision text, dispositions, implementation mapping, candidate lineage, validation requirements, and unresolved discussion state.
- Approved decisions are captured promptly and verbatim enough to preserve their operative meaning. They are not reconstructed from an end-of-chat summary.
- Findings receive explicit dispositions such as `BUILD REQUIRED`, `BUILD TEST REQUIRED`, `VERIFY ONLY`, `DOC UPDATE`, `DEFERRED — <named owner/gate>`, `REJECTED`, or `CLOSED / PASS`.
- The external audit explicitly inherits and verifies the current durable baseline from the proper permanent owners instead of depending on memory.
- Before production, the implementation-scope lock maps every open build item to exact source ownership and validation.
- During R1/R2+ review it remains the detailed implementation/browser-validation and decision traceability owner while Live Working State stays compact.
- Temporary operational audits are never committed to Git, never stored under Drive `Working Source/Current`, and never included in review ZIPs.
- At final Build Unit reconciliation, map every approved decision and non-closed finding to its durable owner/disposition. Retire/delete the external temporary audit after readback confirms that no required durable meaning or carry-forward would be lost.

## Rule lifecycle

- `docs/PROJECT-RULES.md` is the single canonical current repository procedural owner.
- Other documents may reference it but must not maintain competing active procedure.
- Durable workflow rationale remains in `docs/decisions/workflow.md`; semantic/domain rules remain in their own canonical owners.
- When procedure changes, update the canonical current rule and remove/replace obsolete active wording. Git history preserves the old procedure; do not keep stale active duplicates merely as history.
- If current governance sources conflict, stop and reconcile before substantive work. Never revive superseded procedure from chat, memory, old ZIPs, retired files, or historical decisions.

## Chat presentation

Routine FCC discussion, status, review guidance, and gate receipts must not use the Files retrieval path, `filecite`, file navlists, file tiles/cards, or other file-reference UI when authoritative GitHub/Drive connector reads are available. Use those authoritative connector reads and, when exact source context materially helps, quote only the smallest relevant code/text excerpt inline. Use file-reference/navigation UI only when the user explicitly asks to locate, open, download, inspect, or navigate a file, or when no authoritative connector path exists for requested file content. Direct sandbox download links are allowed for review ZIPs and other user-requested generated artifacts.
