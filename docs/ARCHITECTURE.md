# Freshwater Fishing Companion — Architecture

**Document:** ARCHITECTURE.md  
**Document Revision:** 0.15.1  
**Document Status:** Approved  
**Role:** Current technical/source architecture and durable ownership boundaries  
**Last Updated:** 2026-09-13

# Purpose

This document defines the current application architecture, source ownership, and approved near-term structural boundaries for Freshwater Fishing Companion.

`Current` means implemented on authoritative GitHub `main`. `Approved / Not Implemented` means settled direction that must not be mistaken for deployed functionality.

# Authority and Runtime

- GitHub `main` is authoritative for committed source, documentation, and formal history.
- Google Drive `Working Source/Current` is the complete editable repository working tree and owns approved uncommitted repository work under D068.
- The Live Working State is the compact active operational manifest for review-cycle identity, approval/validation state, defects, and exact resume context; it is not an append-only history log.
- `docs/WORKING_STATE.md` is the single compact repository current-state/exact-resume entrypoint.
- Review/checkpoint ZIPs in Drive Packages are transport artifacts, not working truth.
- ChatGPT Work is not part of the supported FCC execution environment.

The browser application remains plain HTML, CSS, and JavaScript hosted through GitHub Pages. Supported local functionality remains local-first/offline-first and must not depend on an unapproved recurring paid service.

# Current Source Structure

```text
AGENTS.md
index.html
forest-journal.css
search.js
view-renderer.js
knot-media-renderer.js
script.js

.github/workflows/
archive/
themes/
data/
images/
tools/
docs/
    ACTIVE-CHANGE-LEDGER.md
    ARCHITECTURE.md
    CHANGELOG.md
    DECISIONS.md
    DEVELOPMENT_WORKFLOW.md
    EXTERNAL_REFERENCE_MAINTENANCE.md
    FISH_REFERENCE_SOURCES.md
    KNOT_REFERENCE_SOURCES.md
    MEDIA_GUIDE.md
    PROJECT.md
    RIG_REFERENCE_SOURCES.md
    ROADMAP.md
    STYLE_GUIDE.md
    UI_STANDARD.md
    V1-DESIGN-AUDIT.md
    WORKING_STATE.md
    data-model/
    decisions/
    workflow/
    workstreams/
```

Former `HANDOFF.md`, `MILESTONES.md`, `SPECIFICATION.md`, separate card/detail/navigation standards, and retired deferred data-model placeholders are not active owners. Their durable current content was consolidated before retirement; prior revisions remain recoverable in Git history.

Required production JavaScript load order remains:

```text
data/fish-categories.js
data/fish.js
data/rigs.js
data/conditions.js
data/lure-bait.js
data/techniques.js
data/compatibility.js
data/fish-identification.js
data/fish-rig-guidance.js
data/knots.js
data/knot-guidance.js
data/reel-guidance.js
data/tackle.js
data/media.js
data/regulations.js
search.js
view-renderer.js
knot-media-renderer.js
script.js
```

# Core Architectural Constraints

## Local-first core

Core/base functionality should work without recurring paid services. External sites, instructional media, regulation destinations, and other third-party resources are optional dependencies around the local application core.

If an external dependency fails, otherwise-supported local navigation/reference content must continue to work and the failure must degrade gracefully. Third-party availability is never proof of factual correctness or freshness.

## Regional content

The forward Version 1 curated-content focus is:

- Northeast Oklahoma
- Southeast Kansas
- Southwest Missouri
- Northwest Arkansas

Existing validated content is progressively reconciled when audited or materially modified; valid content is not removed merely because the geographic focus expanded.

**Regulations is the deliberate geographic exception under D066.** Its initial resource-navigation coverage is the 48 contiguous U.S. states. The application links to authoritative state resources rather than owning/interpreting changing legal rules.

## Theme boundary

**Current:** Forest Journal is the only production-supported Version 1 theme. Deferred theme concepts under `themes/concepts/` are not production themes and remain outside current parity requirements.

**Approved / Not Implemented - UD-11 Appearance:** Settings separates **Theme** from **Color Scheme**. Theme and Color Scheme are device-local, outside synchronized User Knowledge and the authoritative UD-9 backup. Each production theme declares the System/Light/Dark variants it supports; unsupported combinations are not offered. Only production-approved/validated themes may be selectable. Forest Copper, Forest Gold, and Legacy Dark remain deferred candidates. The architecture permits multiple production themes in Version 1 but does not require a minimum count; the final supported-theme set remains open pending implementation/validation.

Shared UI/layout/component behavior should remain centralized where practical while production themes primarily own design tokens and bounded intentional overrides. The reference-media surface `#f4f0e8` / RGB `244, 240, 232` remains a cross-theme invariant.

# Knowledge Architecture

The application uses three layers:

1. **Reference Knowledge** — canonical facts and identities.
2. **Decision Knowledge** — recommendations, rankings, and contextual derived guidance.
3. **User Knowledge** — inventory, catches, preferences, and saved/user-created state.

Do not blur these layers without an explicit architecture decision.

The Dashboard exposes four foundational connected-knowledge domains: Fish Guide, Knots, Rig Guide, and Tackle. Tackle remains the root domain; **Tackle Reference / Find Tackle** is Reference Knowledge while **My Tackle** is User Knowledge. D063/D067 own that durable boundary.

D069 adds the approved recommendation prerequisite architecture: **Conditions**, **Lure/Bait**, and **Techniques** are distinct Reference Knowledge domains; contextual ranking/rationale and Fish/Condition-specific suitability remain Recommendation Decision Knowledge. A typed Compatibility Relationship domain owns intrinsic Rig↔Lure/Bait, Rig↔Technique, and Lure/Bait↔Technique compatibility. The Recommendation Prerequisites Foundation implemented these domains on current `main`.

Regulations is a resource-navigation domain, not a new owner of legal facts.

# Search and Connected Knowledge

Search is relevance-first; connected knowledge is breadth-first.

```text
Find
-> Confirm the entity
-> Expose pertinent relationships
-> Move into related knowledge
```

Canonical identity signals outrank incidental description text. Hierarchical navigation scopes the eligible search universe before ranking; deeper context must not silently broaden results.

**Current:** `search.js` provides deterministic lightweight normalized matching plus reusable lookup/filter/sort helpers. Regulations state selection uses lightweight normalized state-name/two-letter-abbreviation filtering tied to the state selector; Search was retained after nationwide 48-state review.

**Approved / Not Implemented:** heavy fuzzy search, advanced typo tolerance, natural-language intent parsing, sophisticated confidence systems, and global cross-domain search remain deferred until demonstrated need.

# Canonical Source Ownership

## Fish

- `data/fish-categories.js` owns category identity/order.
- `data/fish.js` owns 30 active canonical Fish records and stable Fish IDs.
- `data/fish-identification.js` owns deterministic similar-Fish comparison relationships.
- `data/fish-rig-guidance.js` owns Fish-to-Rig Decision Knowledge; Fish applicability does not belong in Rig `useCases[]`.

Fish identification media is accuracy-critical and follows `MEDIA_GUIDE.md`.

## Rigs

`data/rigs.js` owns 23 active canonical Rig records and physical setup facts including difficulty, use cases, conditions, component requirements, assembly, setup notes, mistakes, safety, variations, knot applications, references/tutorial metadata, versioning, and lifecycle state.

- `assemblySteps` is the authoritative in-app build sequence.
- `componentRequirements` owns Rig -> Tackle usage; reverse Tackle `Used In` is derived.
- `CORE_RIG_IDS` owns Core membership/order.
- Rig does not own inverse media IDs.
- `data/techniques.js` owns the 16 active canonical Technique records and reusable presentation behavior. Intrinsic Rig↔Technique compatibility is stored once in `data/compatibility.js`; Rig does not store inverse Technique arrays.

## Knots and reel/line guidance

- `data/knots.js` owns canonical Knot identity, tying facts/instructions, compatibility, and lifecycle metadata.
- `data/knot-guidance.js` owns task-oriented Knot selection guidance.
- `data/reel-guidance.js` owns Reel & Line Setup guidance for Spinning, Spincast, and Baitcasting.
- Rig-owned `knotApplications[]` owns Rig connection context; reverse Knot usage is derived.

The Knots milestone is closed and validated.

## Tackle and inventory

`data/tackle.js` owns 29 active canonical functional Tackle concepts. Canonical Tackle describes functional types, not a user's commercial possessions.

Persistent owned tackle belongs to future My Tackle/User Knowledge. The current readiness store is transitional only and must not be mistaken for authoritative ownership.

`data/lure-bait.js` owns the implemented 13-identity Lure/Bait Reference domain under D069. Tackle owns functional fishing equipment and Rig-building components; Lure/Bait owns canonical lure and bait identities intentionally presented to Fish. Commercial product identity is not required for the current Lure/Bait architecture.

D069 refines sequencing while preserving D067's ownership invariant. GATE-006 Settings / User Data Architecture and GATE-007 My Tackle Availability Foundation are CLOSED / PASS. The scoped GATE-007 foundation now supplies the Recommendation-facing ownership/current-availability semantics and runtime helpers required by GATE-004, while broader My Tackle management UI/storage remains separately implementable. GATE-004 What Should I Throw is the active product gate. Full Tackle Reference expansion and Catch Log remain later milestones.

## Implemented recommendation prerequisite domains

**Current / Implemented:**

- Conditions owns reusable environmental/situational vocabulary, not recommendation lists or weights.
- Lure/Bait owns canonical fishing-relevant lure/bait identity, not commercial SKUs or context-specific recommended size/color.
- Technique owns reusable presentation behavior, not Rig assembly or Fish/Condition-specific selection.
- Compatibility Relationship owns intrinsic pairwise compatibility for Rig↔Lure/Bait, Rig↔Technique, and Lure/Bait↔Technique. Each pair is stored once; reverse navigation is derived.
- Recommendation Decision Knowledge owns contextual selection, ranking, rationale, exact context-specific parameters, and Fish/Condition suitability.

GATE-004 adds five approved production refinements without changing those owners: candidate identity is a derived Rig + applicable configuration + Lure/Bait + Technique + material-parameter composite; current-equipment executability is derived separately from confirmed availability; simplicity is only a bounded post-suitability ranking modifier; legality is consumed only from authoritative structured constraints with current Regulations remaining a resource gateway; and Recommendation Context is temporary device/session-local Decision-input state with explicit freshness/reuse boundaries rather than durable User Knowledge.

The three Reference Knowledge prerequisites plus GATE-006 Settings/User Data and GATE-007 scoped My Tackle Availability are complete. GATE-004 What Should I Throw production is active.

## User Knowledge identity and synchronization

The closed Settings / User Data Architecture workstream settled the core Version 1 User Knowledge foundation:

- **UD-1 - LOCKED / refinement allowed:** one persistent FCC profile may span devices; devices are replicas of the same semantic profile and durable User Knowledge synchronizes record-by-record.
- **UD-2 - LOCKED / refinement allowed:** Firebase Authentication is the Version 1 identity provider and Cloud Firestore the profile-scoped sync service; Firebase UID scopes the profile; email/password plus Google Sign-In are the initial sign-in mechanisms, subject to implementation/security refinement; no custom server/Cloud Functions dependency is approved absent demonstrated need.
- **UD-3 - LOCKED / refinement allowed:** Firestore is the durable synchronized authority while UD-2 remains in force; its persistent browser cache is the Version 1 local/offline replica where supported; application code accesses User Knowledge through one FCC-owned repository/data-access abstraction rather than a parallel authoritative IndexedDB store.
- **UD-4 - LOCKED / refinement allowed:** User Knowledge is partitioned into semantic profile-scoped domains with independently addressable growing records and bounded singleton documents where appropriate.
- **UD-5 - LOCKED / refinement allowed:** authoritative records carry record/document-scoped `schemaVersion`; supported older records migrate forward behind the repository boundary; older clients cannot overwrite newer unsupported schemas.
- **UD-6 - LOCKED / refinement allowed:** local clearing/sign-out is distinct from synchronized deletion; account deletion deliberately removes implemented profile User Knowledge before authentication removal; minimum deletion state may exist only for safe reconciliation.
- **UD-7 - LOCKED / refinement allowed:** durable user intent may synchronize as profile Preferences while device/system/runtime state does not by default. Preferred Regulation States and Measurement System are synchronized profile-owned Version 1 preferences; Appearance is device-local.
- **UD-8 - LOCKED / refinement allowed:** My Tackle is the sole persistent ownership authority; current availability is independent and may include temporary non-owned tackle. What I Have With Me Today is temporary profile-scoped state requiring explicit confirmation and later-day reconfirmation.
- **UD-9 - LOCKED / refinement allowed:** full backup covers all implemented authoritative durable User Knowledge in a provider-independent package; Reports are separate; full restore uses validated Replace semantics, a pre-restore safety checkpoint, post-restore validation, and rollback.
- **UD-10 - LOCKED / refinement allowed:** application-level record revisions, stale-write protection, tombstone/anti-resurrection semantics, deterministic/lossless reconciliation, explicit semantic conflict resolution, shared current-availability concurrency, and profile-generation/write-gated full restore are settled at architecture level.
- **UD-11 - CLOSED / PASS / refinement allowed:** Appearance, Preferences Version 1, Profile, Data Management, About, and cross-cutting authentication/synchronization/conflict/recovery status surfaces are architecture-complete for demonstrated Version 1 needs.

Firebase Authentication + Cloud Firestore is LOCKED / refinement allowed. Exact provider primitives, domain record fields, UI wording/layout, and later My Tackle/Catch Log implementation mechanics remain owned by their appropriate implementation gates. Current Rig-readiness `localStorage` remains transitional availability state and is not authoritative ownership. UD-12 and GATE-007 are CLOSED / PASS; GATE-004 Recommendation production is active.

## Media

`data/media.js` owns reusable Media metadata and stable media IDs. Attachment is owned by Media through:

```text
ownerType
ownerId
```

Entity records do not maintain inverse media-ID arrays merely for lookup.

Current production includes 31 Tackle recognition attachments, 30 primary Fish identification attachments, and approved instructional-media records for all 10 Version 1 Knots.

`MEDIA_GUIDE.md` owns detailed rights, provenance, rendering, fallback, and asset-quality rules.

# Presentation / Routing Ownership

- `view-renderer.js` owns reusable rendering, shared search/result UI, catalog/detail rendering, contextual Tackle references, derived relationship navigation, readiness presentation, sticky Parent/Home controls, and modal focus restoration.
- `knot-media-renderer.js` owns Knot instructional-media rendering.
- `script.js` coordinates application routing and major view transitions.
- `UI_STANDARD.md` owns cross-domain UI/navigation/card/detail/search/mobile/accessibility behavior.

User Knowledge/imported text is untrusted at rendering boundaries and must use safe DOM APIs unless a centrally owned sanitization path is explicitly approved.

# Navigation / Context Architecture

Standard application navigation follows D051:

```text
Forward -> destination starts at top
Parent  -> restores immediately preceding standard app context + applicable UI state + prior scroll
Home    -> Dashboard starts at top and clears contextual return state
```

Specialized workflows may use separately approved semantics; Reel Setup is the established example.

**Approved / Partially Implemented:** broader production routing still contains older all-transition top-reset behavior in places and remains an open UX-001 implementation item.

# Regulations Architecture

**Current — nationwide Regulations gateway implemented / closed.** Dashboard **Regulations** is internal navigation to the state resource gateway. The gateway covers the 48 contiguous U.S. states under D066 without expanding other curated domains nationwide. Final production closed at `fffe2ef518f13fd5d50e5d45af9d9ead7c11045c` with 48 states, 180 resources, and 2 active notices.

Regulations is a resource-navigation domain. FCC owns state identity, user-facing resource metadata, taxonomy, authority/provenance metadata, lifecycle status, and verification metadata. The responsible state authority owns the underlying current legal requirements.

Approved conceptual records are:

```text
State
    id
    name
    abbreviation
    agencyName
    agencyUrl
    verifiedDate
    active

StateResource
    id
    stateId
    section
    primaryCategory
    capabilities[]
    title
    description
    url
    experienceType
    status
    authorityName
    authorityUrl
    sourceRelationship
    designationUrl
    verifiedDate

StateNotice
    id
    stateId
    title
    summary
    url
    authorityName
    authorityUrl
    sourceRelationship
    designationUrl
    createdDate
    verifiedDate
    expiresDate
    active
```

`sourceRelationship` is `direct` or `officially-designated-external`. `designationUrl` is required for an officially designated external service and records the official authorization chain. Resource/notice authority may inherit from State; an override supplies both authority name and URL.

The normalized resource model uses two sections (`before-you-fish`, `plan-your-trip`), stable primary categories, multi-purpose `capabilities[]`, delivery/experience type, and lifecycle status. State pages render only resources that actually exist; the architecture does not require identical slots or empty cards across states.

`REGULATIONS_DATA_BUILD_INFO.externalReferenceReviewedDate` records only a complete human review of the entire maintained Regulations set. Individual `verifiedDate` values own per-record human freshness. Automated network-check output remains operational report data rather than canonical source fields.

Regulations maintenance uses a separate monthly report/alert workflow, 90-day State/StateResource human freshness, 30-day active StateNotice review, and human adjudication of redirects/network failures. Automation may inspect/report and maintain the GitHub review issue, but must never silently mutate Regulations source or legal-resource meaning.

Regulations production ownership is:

- `data/regulations.js` owns `REGULATIONS_DATA_BUILD_INFO`, the 48 State records, 180 StateResource records, and 2 active StateNotice runtime records.
- `view-renderer.js` owns the Regulations selector/Search presentation, state resource-page rendering, notice treatment, consolidated resource sections, official-agency attribution presentation, and Back restoration of an eligible prior query/selected state.
- `script.js` owns Regulations routing/state-detail transitions and the Home reset that clears transient Regulations query/selection/open-state context.
- `tools/validate_repository_integrity.js` owns deterministic Regulations schema, relationship, provenance, capability, status, expiry, and freshness validation.
- `tools/check_external_references.js --regulations` owns report-only Regulations reachability/redirect inspection without mutating canonical data.
- `.github/workflows/regulations-maintenance.yml` owns the monthly validation/check/maintenance-issue automation with `contents: read` and `issues: write` only.

These files preserve the completed Phase 0 semantic model, UX hierarchy, provenance rules, validation gates, and completed nationwide rollout recorded in `workstreams/REGULATIONS-PHASE-0.md`.

# Archive and Documentation Architecture

`archive/` is the single repository archive root. Ordinary prior revisions stay in Git history. Retired artifacts are classified as:

1. **GIT HISTORY ONLY** — ordinary prior revision/history.
2. **ARCHIVE** — independently useful audit/provenance/reconstruction evidence.
3. **DELETE** — no continuing value beyond Git history.

Documentation uses single-owner semantics:

- `PROJECT.md` — mission/product scope.
- `ARCHITECTURE.md` — current technical/source architecture.
- `DECISIONS.md` + `decisions/*.md` — decision index and full durable decision bodies.
- `DEVELOPMENT_WORKFLOW.md` + two `workflow/*.md` procedures — execution/governance.
- `ROADMAP.md` — product milestone order/future direction.
- `WORKING_STATE.md` — single current-state/exact-resume entrypoint.
- `ACTIVE-CHANGE-LEDGER.md` — material non-closed carry-forward.
- `STYLE_GUIDE.md` — code/data/file/document conventions.
- `UI_STANDARD.md` — cross-domain UI interaction standards.
- `CHANGELOG.md` — curated meaningful landed-change history.
- domain/data-model/media/source/workstream documents — specialized ownership.

# Development Architecture

`DEVELOPMENT_WORKFLOW.md` is authoritative for implementation procedure. Permanent rules include:

- verify current GitHub `main`, Drive Current, and Live Working State lineage before editing;
- use Drive Current as the first working location for approved uncommitted repository changes;
- keep changes targeted unless broader replacement/consolidation is explicitly approved;
- preserve explicit production write and production commit/push authorization gates;
- use review packages only when transport/local validation/checkpoint/recovery requires them;
- verify GitHub after every write/push;
- close documentation/state before declaring a segment finalized;
- preserve durable cross-segment decisions/defers/parks/rejects;
- prefer targeted validation and deterministic lineage over repeated full-state reconstruction;
- do not depend on ChatGPT Work.
