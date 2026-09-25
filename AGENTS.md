# Freshwater Fishing Companion — Repository Agent Instructions

These instructions apply to the entire repository. They are a routing layer, not a second procedure manual.

## Canonical procedural owner

`docs/PROJECT-RULES.md` is the **single canonical current FCC procedural owner**. Project Custom Instructions provide the compact always-on layer. If the two layers appear to conflict, stop and reconcile the conflict before substantive work.

## Hard routing invariants

1. GitHub `main` is committed authority. Google Drive `Working Source/Current` owns approved uncommitted repository changes.
2. The external Live Working State is the sole operational current-state/exact-resume surface. `docs/ACTIVE-CHANGE-LEDGER.md` owns material non-closed cross-workstream carry-forward.
3. Before substantive work, follow the startup and prior-gate verification sequence in `docs/PROJECT-RULES.md`.
4. Before authoritative repository editing, fresh-read the matching Drive Current file and follow `docs/PROJECT-RULES.md`. During an active review cycle, only the bounded R2+ candidate exception defined there may use immutable R1 plus recorded cumulative corrections; no arbitrary or historical ZIP may substitute for current authority.
5. Production/source/data/media/configuration writes and production/user-facing commit/push remain separately scoped authorization gates as defined by `docs/PROJECT-RULES.md`.
6. Every explicit approval/disposition must complete the canonical-owner + Live Working State gate and issue the required receipt before dependent work proceeds.
7. ChatGPT Work is not part of the FCC workflow. Never suggest, invoke, request, or redirect FCC work to ChatGPT Work.
8. Review ZIPs are bounded candidate/transport artifacts. Drive Current remains authoritative for approved uncommitted work; `docs/PROJECT-RULES.md` owns the immutable-R1 review loop and approved-candidate promotion gate.
9. Structural/documentation changes must reconcile Repository Integrity and other directly affected validation before closure. User-facing changes additionally require applicable browser/device validation.
10. Routine FCC discussion/status/review must avoid the Files/filecite path and file tiles/cards/navigation UI when authoritative GitHub/Drive connector reads are available; use the smallest relevant inline excerpt unless the user explicitly asks to locate/open/download/inspect/navigate a file.

## Rule lifecycle

Do not add new active procedure to this file. Add or revise current procedure only in `docs/PROJECT-RULES.md`; preserve durable rationale in the appropriate decision owner and semantic/domain rules in their own canonical owners. Git history preserves superseded procedure.
