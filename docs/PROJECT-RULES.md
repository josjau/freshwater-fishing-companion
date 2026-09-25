# Freshwater Fishing Companion — Project Rules

**Document:** PROJECT-RULES.md  
**Document Revision:** 1.1.0  
**Document Status:** Approved  
**Role:** Single canonical current FCC procedural owner  
**Last Updated:** 2026-09-25

# Purpose

This document owns the current execution procedure for Freshwater Fishing Companion. Project Custom Instructions provide the compact always-on layer; this file provides the complete repository procedure. Other documents may reference these rules but must not maintain competing active procedure.

# Block 1 — Authority and Startup

- GitHub `main` is committed authority.
- Google Drive `Working Source/Current` is the complete editable working tree and owns approved uncommitted repository changes.
- The external Live Working State is the sole operational current-state/exact-resume surface. It may capture material live-chat decisions or constraints as explicitly pending approval when continuity risk warrants it; pending capture is not approval.
- `docs/ACTIVE-CHANGE-LEDGER.md` owns material non-closed cross-workstream carry-forward. `docs/ROADMAP.md` owns product order/future direction. Git history and `docs/CHANGELOG.md` own landed history. Historical Archive is historical evidence only and is outside normal startup/current-source lookup.
- ChatGPT Work is not part of the FCC workflow. Never suggest, invoke, request, or redirect FCC work to ChatGPT Work.

Before substantive work in every new FCC chat:

1. Verify GitHub `main`.
2. Read Live Working State.
3. Verify the previous material approval gate is CLOSED / PASS.
4. Verify Drive Current against the recorded lineage.
5. Read this file, the active workstream, and only directly relevant semantic owners. Read `ACTIVE-CHANGE-LEDGER.md` only when the requested scope can intersect open carry-forward.

If prior writes/readbacks/validation are incomplete, or authorities conflict, perform recovery only until the smallest authoritative reconciliation closes the gap. A new chat title or remembered resume point never overrides an open gate.

# Block 2 — Approval Gates and Receipts

Every explicit approval, rejection, deferment, or scope lock triggers the FCC gate before dependent work:

1. Identify the finite set of affected canonical owners.
2. Classify each as `UPDATE REQUIRED`, `VERIFIED — NO CHANGE REQUIRED`, or `NOT APPLICABLE`.
3. Complete every required Drive Current write and readback.
4. Update and read back Live Working State.
5. Run proportional validation and reconcile any affected validator/CI expectations.
6. Treat any unresolved required item as gate OPEN; dependent work remains blocked.
7. Issue a concise gate receipt before progression.

The receipt must state status, material owners/readbacks, validation, production disposition, commit/push/CI disposition, exact next section/resume point, and `New chat: YES / NO / RECOMMENDED` with the reason.

If an approval includes questions, answer the questions before running the documentation gate. After the receipt, stop unless the user explicitly directs continuation. An approval is treated as approved with revisions/refinement allowed unless the user explicitly says otherwise.

# Block 3 — Discussion and Chat Boundaries

- Discussion, findings, proposals, and design exploration do not authorize writes.
- Ordinary discussion does not trigger incremental documentation writes. Consolidate settled decisions into one bounded documentation pass at approval unless the user explicitly requests an earlier write.
- Early Live Working State capture is allowed only for material continuity risk and must be marked `PENDING APPROVAL` or otherwise clearly open. Capture is not approval.
- If the user states that the next section/phase belongs in a new chat, the current chat becomes closeout-only. Do not begin the next work here.
- Keep deep work bounded and recommend a fresh chat before context becomes fragile.
- A new chat never bypasses an incomplete gate.
- On session end, preserve required state and exact resume, perform only necessary closeout, then stop.
- `Freshwater Fishing Companion Chat Log.md` is manually maintained by the user and is outside routine assistant startup, approval, closeout, continuity, and recovery unless the user explicitly requests a separate Chat Log task.

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
- Before build, the Planning-to-Build gate verifies approved decisions are in their canonical owners, stale wording is corrected, required readbacks/validation pass, and Live Working State records PASS plus the exact first build action.
- Live Working State alone cannot authorize build.
- Production source/data/media/configuration writes require explicit authorization for the exact scope. Prior approval is not blanket authority for later production changes.
- Production/user-facing commit or push requires separate explicit authorization.
- Documentation-only commits retain standing authority after Drive-first editing and applicable validation.
- The first review candidate is compiled from verified GitHub/Drive authority. During an unchanged active review cycle, user-found candidate defects are corrected in the review candidate under Block 6 rather than being promoted into Drive Current after every iteration. Only an explicitly approved candidate is promoted into Drive Current and read back before dependent work, final validation, or commit staging.
- No dependent build work begins until the current segment is finalized or explicitly parked with an exact resume point.
- Preserve single-writer discipline and the approved owner boundaries for semantic facts, relationships, UI standards, and active workstream traceability.

# Block 6 — Review Cycle, ZIPs, Commit, Push, and CI

## First review revision (R1)

- Drive Current remains authoritative for approved uncommitted repository work. A review ZIP is a bounded candidate/transport artifact, not general repository authority.
- Compile R1 from freshly verified GitHub `main` plus the applicable verified Drive Current working state. R1 is the immutable review baseline for that review cycle.
- Record the starting GitHub SHA, Drive lineage, R1 filename/revision, R1 SHA-256, changed-file set, deletion set if any, and required validation in Live Working State and the active temporary Guide audit or equivalent workstream traceability owner.
- Preserve repository-relative paths. Include every changed/new repository file required for the intended review, including changed repository documentation. Exclude `.git`, manifests, Chat Logs, external Live Working State, assistant/package reports, hash reports, temporary transport artifacts, and other non-repository operational files.
- The compilation handoff must provide the review ZIP and the exact user review areas in the same response.

## Bounded review revisions (R2+)

- Within the same unchanged review cycle, subsequent candidate ZIPs are built against the immutable R1 baseline plus the cumulative documented corrections for that cycle. Do not use an arbitrary prior ZIP, chat reconstruction, memory, or an unrelated historical package as source.
- Record each review finding concisely in the temporary Guide audit or active workstream owner: finding, disposition/change applied, affected files, validation state, and resulting review revision. Do not preserve design-conversation detail that is unnecessary for implementation traceability.
- Intermediate review ZIPs are disposable. Normally retain only R1 and, when cross-chat/session continuity requires it, the latest active candidate. Older superseded candidate ZIPs may be deleted after their revision identity/hash and applied changes are recorded.
- A candidate ZIP owns only the exact unapproved review candidate for that active cycle. It does not replace GitHub or Drive authority, authorize dependent scope, or become a general source for future work.
- If GitHub `main`, relevant Drive Current files, scope, or an owning contract advances unexpectedly, invalidate package-based iteration and compile a fresh R1 from verified authority before continuing.

## Approval and promotion

- Explicit approval freezes the reviewed candidate revision. Promote that exact approved candidate into Drive Current, read it back, reconcile required documentation and Live Working State, and run proportional validation before dependent work or commit staging.
- If approved-candidate promotion to Drive Current fails, the approval gate remains OPEN; the review candidate may be preserved for recovery, but dependent work does not proceed.
- When repository files must move locally, use one cumulative ZIP rather than one-by-one copying. Supply required deletions separately as explicit cleanup steps outside the ZIP; ZIP extraction does not delete old local files.
- Package creation does not authorize commit/push. Apply the approved/promoted package to a verified local checkout and confirm the diff matches the expected add/modify/delete scope before commit.
- Production/user-facing commit/push requires explicit user authorization. Documentation-only commits may proceed under standing authority after validation.
- After push, verify GitHub SHA and file scope, required CI/Pages results, and Drive/Git convergence.

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

- Each Guide-family audit creates one temporary Guide-specific audit file at discovery start.
- The file uses the approved Guide audit outline for stable checkpoint/section names independent of chat IDs.
- It records checkpoint completion states and every actionable finding with an explicit disposition such as `BUILD REQUIRED`, `BUILD TEST REQUIRED`, `VERIFY ONLY`, `DOC UPDATE`, `DEFERRED — <named owner/gate>`, or `CLOSED / PASS`.
- It captures approved decisions, defects/carry-forward, source-owner/file scope, and validation requirements as they become known.
- It explicitly inherits and verifies the current Guide-family baseline from the proper permanent owner instead of depending on memory.
- Before production, the implementation-scope lock must map every open item to exact source ownership and validation.
- The temporary audit remains the line-by-line implementation/browser-validation closure checklist until each item is implemented/validated or explicitly re-dispositioned.
- Retire/delete the temporary audit after final Guide closeout only after durable decisions and non-closed carry-forward are promoted to their permanent owners.

## Rule lifecycle

- `docs/PROJECT-RULES.md` is the single canonical current repository procedural owner.
- Other documents may reference it but must not maintain competing active procedure.
- Durable workflow rationale remains in `docs/decisions/workflow.md`; semantic/domain rules remain in their own canonical owners.
- When procedure changes, update the canonical current rule and remove/replace obsolete active wording. Git history preserves the old procedure; do not keep stale active duplicates merely as history.
- If current governance sources conflict, stop and reconcile before substantive work. Never revive superseded procedure from chat, memory, old ZIPs, retired files, or historical decisions.

## Chat presentation

Routine FCC discussion, status, review guidance, and gate receipts must not use the Files retrieval path, `filecite`, file navlists, file tiles/cards, or other file-reference UI when authoritative GitHub/Drive connector reads are available. Use those authoritative connector reads and, when exact source context materially helps, quote only the smallest relevant code/text excerpt inline. Use file-reference/navigation UI only when the user explicitly asks to locate, open, download, inspect, or navigate a file, or when no authoritative connector path exists for requested file content. Direct sandbox download links are allowed for review ZIPs and other user-requested generated artifacts.
