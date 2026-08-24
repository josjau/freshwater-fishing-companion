# Freshwater Fishing Companion — Working State

**Document:** WORKING_STATE.md  
**Document Revision:** 1.1.0  
**Document Status:** Approved — Active Repository Continuity Record  
**Workstream Status:** Workflow Transition — Closed; Wave 3 Bass ready for a separate task  
**Transition Baseline:** `ee0149a81bab06c1f7650482ed30ffcc5111bfcd`  
**Last Updated:** 2026-08-24

# Purpose

This file is the repository-backed continuity record for active work that has not yet reached final closeout. It records the current workstream, actual implementation/validation state, unresolved gates, and exact resume point.

It does not replace durable owners such as `ARCHITECTURE.md`, `DECISIONS.md`, `DEVELOPMENT_WORKFLOW.md`, domain/data-model documents, active workstream records, or the formal Active Change Ledger. Durable truth is promoted to the correct owner at a logical checkpoint.

# Authority During the Workflow Transition

The transition is now closed. The current authority model is:

1. GitHub `main` is authoritative for committed production source and formally reconciled documentation.
2. This file is the live current-state and exact-resume record for any verified local checkout.
3. `HANDOFF.md` is the compact formal recovery entrypoint and points here for the current continuation state.
4. Uncommitted local changes exist only on the active computer and are not a cross-computer checkpoint.
5. The former Google document **Freshwater Fishing Companion — Working State** is retired as an active continuity source. It is preserved only as historical migration evidence and does not need to be read for project recovery or substantive work.

# Current Workstream

**No implementation workstream is currently open.**

The repository-workflow transition is closed. Direct work in a verified local checkout, repository-backed continuity, one write-authorized task per checkout, deliberate commit/push boundaries, and GitHub `origin/main` synchronization are now the normal operating model.

The next product workstream is a separate **Fish Guide — Production Wave 3: Bass** task. Its approved scope, exact locked decisions, evidence/media provenance, rights caveats, implementation boundary, and resume procedure are owned by `docs/workstreams/FISH-WAVE-3-BASS.md`.

# Workflow Transition Closeout

The transition package established and reconciled:

- root `AGENTS.md` startup, authority, write-control, and closeout instructions,
- repository-backed Working State and compact Handoff roles,
- the Active Change Ledger as the single owner of material non-closed carry-forward items,
- direct local repository work with GitHub `origin/main` as the cross-computer synchronization point,
- one coherent task per outcome and one write-authorized task per checkout,
- durable decision/context promotion and an affected-file audit/fix cycle,
- receiving-computer onboarding without making an unavailable second computer a project-wide blocker,
- the locked Wave 3 Bass package and exact resume procedure,
- deferred Repository Disaster Recovery / Reconstruction and Rig alternate-terminal gates,
- the former Google Working State's retirement after repository continuity parity and GitHub verification.

The commit containing this revision is the transition-closeout checkpoint. Git history owns its exact SHA; do not place a commit's own SHA inside the commit.

# Verified Starting Baseline

- Repository root: `C:\Users\joshua.jauert\OneDrive - Northeast Oklahoma Electric Coop\Desktop\Personal\Fishing Companion\freshwater-fishing-companion`
- Branch: `main`
- Transition starting baseline: `ee0149a81bab06c1f7650482ed30ffcc5111bfcd`
- First repository-continuity checkpoint: `0051c60741137c80087fc1276f495e9e37c497b7`
- Remote: `https://github.com/josjau/freshwater-fishing-companion.git`
- Starting worktree at each recorded baseline: clean

# Approved Local Operating Model

- Each computer has its own GitHub Desktop checkout.
- GitHub `origin/main` is the cross-computer synchronization point.
- Codex works directly in the verified local repository on the active computer.
- Continue on `main` for the current single-writer model unless a concrete future concurrency, preview, deployment, or PWA need justifies a branch decision.
- Use one task per coherent outcome/workstream.
- Only one task may be write-authorized against the same checkout at a time.
- Other tasks may perform bounded read-only research or analysis without creating competing project state.
- At startup, verify repository root, branch, status, local `HEAD`, local `origin/main`, and remote before substantive work.
- Read this file, Handoff, the Active Change Ledger, and applicable governing/workstream documents before editing.
- Update this file at material decision, changed-scope, implementation, validation, deferment, and resume-point boundaries.
- Promote finalized durable truth to its canonical owner at a formal checkpoint.
- Review the complete local diff before a deliberate commit/push.
- Never move work to another computer while required state exists only as uncommitted files.
- Use a localhost development server for normal browser validation; `file://` is not the normal validation path.
- ZIP delivery is an exceptional fallback, not the normal workflow.

# Receiving-Computer Onboarding

The unavailable second computer is not a blocker to continuing project work on this verified checkout. Before that computer later becomes the write-authorized workspace:

1. Fetch/pull GitHub `main` and confirm the expected checkpoint.
2. Confirm a clean working tree whose local `HEAD` matches `origin/main`.
3. Start a fresh task rooted at that checkout.
4. Require the task to recover the authority model, current workstream, material open gates, and exact resume point from repository documentation alone.
5. Resolve any mismatch before authorizing writes on that computer.

This is a device-onboarding safety check, not a reason to pause work on an already verified computer.

# Transition Validation Still Required

No project-wide transition gate remains. The transition is closed. A new or previously unverified computer still must pass the receiving-computer onboarding procedure before it becomes write-authorized; that device-specific check does not pause work on an already verified checkout.

# Repository-Only Recovery Coverage

Repository continuity replaces the former Google document through these single owners:

| Recovery need | Repository owner |
|---|---|
| Current status and exact resume | this `WORKING_STATE.md` |
| Compact startup/authority map | `HANDOFF.md` and root `AGENTS.md` |
| Every material non-closed item/gate | `ACTIVE-CHANGE-LEDGER.md` |
| Durable decisions and reasons | `DECISIONS.md` |
| Workflow, write control, validation, and closeout rules | `DEVELOPMENT_WORKFLOW.md` |
| Current architecture and document/source ownership | `ARCHITECTURE.md` |
| Product order and future gates | `ROADMAP.md` |
| Domain contracts | applicable data-model/domain documents |
| Fish evidence and media standards | `FISH_REFERENCE_SOURCES.md` and `MEDIA_GUIDE.md` |
| Exact active package, selected evidence/media, rights caveats, and acceptance gates | `workstreams/FISH-WAVE-3-BASS.md` |
| Meaningful landed implementations/corrections | `CHANGELOG.md`, authoritative source, and Git history |
| Closed bounded evidence | retained archive/workstream records when independently valuable; otherwise Git history |

A fresh task must be able to answer what is authoritative, what is current, what remains open, what has and has not been implemented/validated, why the durable decisions exist, and exactly what action comes next by following this map. Google is not required for any of those tasks.

# Local Validation

- Existing repository-integrity validator: **PASS** — all 8 validation groups passed and the validator modified no repository content.
- Replacement-integrity review: approved structural exceptions are limited to this deliberate Working State closeout rewrite; retained historical/transition headings and manual complete-diff review protect unrelated content.
- Scope review: documentation only; no production source, data, media, configuration, dependency, or Fish staging file changed.
- Repository-only recovery coverage: **PASS** — authority, current state, non-closed gates, durable decisions/reasons, implementation/validation status, Bass scope/evidence/media/rights state, and exact resume are all recoverable through the owner map above.
- Closeout verification: the checkpoint containing this revision must be present on GitHub `main` and all written files must match the verified pushed blobs before the preserved Google document receives its retired notice.

# Protected Fish State

- Fish Guide Phase 0 is closed.
- Trout Production Package 1, Gar Production Package, Production Wave 1, and Production Wave 2 are closed.
- Wave 3 Bass contains exactly six Fish: Largemouth Bass, Smallmouth Bass, Spotted Bass, White Bass, Striped Bass, and Hybrid Striped Bass.
- Northern Rock Bass remains in the later Sunfish & Crappie package.
- Wave 3 semantic scope, canonical records, identification direction, relationship IDs, Fish-to-Rig guidance, and primary-media selections are approved and locked in `docs/workstreams/FISH-WAVE-3-BASS.md`.
- No Wave 3 production source or production media implementation has begun.
- Fish source/data/media writes still require explicit authorization for their specific scope.

# Exact Resume Point

Start a separate Wave 3 Bass task. Before any source or media write:

1. Perform repository preflight and confirm a clean checkout on authoritative GitHub `main`.
2. Read `HANDOFF.md`, `ACTIVE-CHANGE-LEDGER.md`, `docs/workstreams/FISH-WAVE-3-BASS.md`, and the governing Fish, relationship, evidence, media, decision, and workflow documents named there.
3. Reconfirm that the six-Fish package is locked and that production source/media implementation has not begun.
4. Attempt direct acquisition of the six exact approved originals from the authoritative sources recorded in the workstream. Ask the user to transfer a file only if direct acquisition fails or the acquired bytes cannot be verified.
5. Verify each original's identity, dimensions, filename where known, provenance, rights status, and content hash before processing.
6. Obtain explicit authorization before writing staging or production media into the repository.
7. Process six transparent WebP candidates without altering Fish anatomy or diagnostic detail; create the media manifest and contact sheet; run the Fish media validation gate; obtain user approval of the processed media.
8. Re-fetch current repository patterns/baseline and obtain separate explicit authorization before editing production Fish data, relationships, guidance, or media records.

Do not redefine the package from scratch. A genuine evidence, rights, acquisition, or implementation conflict must be recorded as a named gate rather than silently changing the locked decisions.
