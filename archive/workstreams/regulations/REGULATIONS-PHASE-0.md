# Freshwater Fishing Companion — Regulations Phase 0

**Document:** REGULATIONS-PHASE-0.md  
**Document Revision:** 1.1.0  
**Document Status:** Approved  
**Workstream Status:** CLOSED / PHASE 0 + 48-STATE PRODUCTION COMPLETE  
**Decision Baseline:** D031, D055, D056, D066, D067  
**Last Updated:** 2026-08-27

# Purpose

This workstream preserves both the approved starting point and the completed Phase 0 outcome for **Regulations — U.S. State Fishing Resource Gateway**.

Phase 0 and the nationwide production rollout are complete. The approved outcome below remains the semantic, UX, provenance, maintenance, validation, and production-wave baseline for future maintenance. Production closed at `fffe2ef518f13fd5d50e5d45af9d9ead7c11045c` with 48 states, 180 StateResource records, and 2 active StateNotice records.

# Why This Milestone Moved Forward

At milestone start, the Dashboard sent Regulations directly to Oklahoma Department of Wildlife Conservation resources. That earlier behavior no longer matched the application's broader resource-navigation requirement and was replaced by the completed internal state gateway.

The project considered leaving **What Should I Throw?** as the next milestone. Regulations was moved ahead of it because:

1. the geographic mismatch is already a known product defect/open design item (REG-001),
2. anglers need trustworthy legal/resource pathways before additional decision/recommendation features add more fishing guidance,
3. Regulations can be made broadly useful without forcing a nationwide Fish/Rig/recommendation expansion,
4. official-resource navigation has a cleaner and lower-maintenance architecture than copying legal rules into the application,
5. What Should I Throw remains a larger Decision Knowledge milestone with unresolved Conditions/Technique/scoring dependencies and is not harmed by following Regulations.

The approved roadmap therefore becomes:

1. Knots — Closed
2. Fish Guide — Closed
3. Regulations — U.S. State Fishing Resource Gateway — Closed
4. What Should I Throw?
5. Settings / User Data Architecture Gate
6. Tackle Reference / Find Tackle
7. My Tackle
8. Catch Log
9. Global Search
10. Favorites final decision

# Geographic Scope Decision

Regulations will initially cover the **48 contiguous U.S. states**.

This is a deliberate exception to the Four-State curated-content scope. It does not imply nationwide Fish, Rig, recommendation, Technique, or other curated-content completeness.

The reason the exception is acceptable is that Regulations is primarily an **official-resource directory**. The Companion can help an angler find the responsible authority without claiming to own the underlying legal content.

The architecture must not hard-code 48 as a permanent structural limit. Alaska, Hawaii, territories, or other jurisdictions can be evaluated later as additive content.

# Approved User Flow — Starting Hypothesis

```text
Dashboard
    -> Regulations
        -> Choose a State
            -> State Fishing Regulations & Resources
                -> official external resources
```

Baseline selector direction to test:

- all supported states available A–Z,
- lightweight search/filter,
- no automatic GPS/location selection,
- no persisted preferred states until D067 User Data architecture exists.

Later user preferences may identify preferred states. The favored behavior is to move/pin preferred states near the top while still exposing the complete state list, rather than hiding non-preferred states by default.

# Approved State-Page Concept — Starting Taxonomy

The state page should provide more than one generic Regulations link when authoritative state resources support more useful pathways.

## Before You Fish

Candidate normalized resource types:

- Fishing Regulations
- Licenses & Permits
- Seasons / Size / Bag-Limit resources
- Special Regulations / Special Waters
- Species-Specific Regulations
- Special Permits / Tags / Stamps

## Plan Your Trip

Candidate normalized resource types:

- Where to Fish / Public Access
- Stocking Information
- Official Fishing Reports / Forecasts
- Aquatic Invasive Species information
- Other Official Resources

These are **navigation categories**, not a requirement that every state agency publish the same structure. Phase 0 must validate the taxonomy against real official sites and keep only categories that provide clear angler value.

# Legal / Data Ownership Boundary

Freshwater Fishing Companion will own the resource-directory metadata needed to navigate the gateway.

Potential metadata to validate in Phase 0 includes:

```text
State
- stable state ID
- state name
- abbreviation
- primary wildlife/fisheries agency identity
- official agency home URL

State Resource
- state ID
- normalized resource type/category
- user-facing title
- concise purpose/description
- authoritative official URL
- source/authority identity
- human verification/freshness date
- active state
```

The exact production schema/file names are **not approved yet**.

The Companion will **not** make itself authoritative for changing legal values such as:

- daily or possession limits,
- minimum/maximum length limits,
- season dates,
- legal methods,
- special waterbody exceptions,
- bait restrictions,
- tag/reporting requirements,
- other jurisdiction-specific legal rules.

Those remain owned by the responsible official authority. The Companion may label/explain the purpose of an official link but must not present its own legal interpretation as authoritative.

# Source / Freshness Direction

For regulatory/legal resources, prefer the responsible state wildlife/fisheries agency or another clearly official government authority.

HTTP reachability is not proof of authority or freshness. Phase 0 must define:

- source authority requirements,
- human verification metadata,
- stale-link detection/checker integration,
- redirect/moved-resource handling,
- review cadence appropriate to legal-resource navigation,
- replacement/deactivation workflow.

`EXTERNAL_REFERENCE_MAINTENANCE.md` owns the durable maintenance standard after implementation details are settled.

# Fish / Connected-Knowledge Integration

Fish records do not own regulation limits/rules.

A future Fish Detail regulation pathway may send the user into Regulations while carrying Fish context, for example:

```text
Fish Detail
    -> Check Regulations
        -> Choose/known State
            -> relevant official state resources
```

Whether Phase 0 or a later connected-knowledge segment implements species-aware deep linking is still open. The important boundary is that Fish remains Fish Reference Knowledge and Regulations remains the official-resource pathway.

# User Preference / Privacy Boundary

No GPS/location detection is approved for this milestone.

No persistent preferred-state setting is approved until the Settings / User Data Architecture gate defines:

- user/profile identity,
- preference ownership,
- persistence/retention,
- backup/restore behavior,
- privacy boundaries.

Once that architecture exists, preferred states may prioritize selector order without making other states unavailable.

# Phase 0 Research / Design Questions

Before production source/data work, settle at least:

1. final user-facing feature/page naming,
2. state selector structure and search behavior,
3. state landing-page information hierarchy,
4. normalized resource taxonomy and optional categories,
5. State and State Resource ownership/model shape,
6. official-source qualification rules,
7. provenance and freshness metadata,
8. external-reference maintenance/checker integration,
9. handling of PDFs, interactive regulation tools, special-water lookups, and agencies with multiple relevant portals,
10. Fish Detail and other connected-knowledge entry points,
11. accessibility/mobile behavior,
12. production-wave strategy for 48 states,
13. automated and human validation requirements.

# Representative-State Validation Strategy

Do not lock the nationwide model after reviewing only Oklahoma.

The first deep sample should include the Four-State region:

- Oklahoma
- Kansas
- Missouri
- Arkansas

Then sample several structurally different states whose agencies organize regulations/resources differently. The purpose is to test whether the normalized taxonomy and state-page UX survive real variation before producing all 48 states.

Exact additional sample states are a Phase 0 research choice.

# Explicitly Out of Scope for Initial Milestone

- project-owned nationwide legal-rule database,
- legal advice or legal interpretation,
- live regulation synchronization/scraping,
- automatic GPS/location detection,
- persisted preferred states before D067,
- nationwide Fish/Rig/recommendation expansion merely because Regulations is nationwide,
- hard-coded assumptions that prevent later Alaska/Hawaii/other-jurisdiction expansion.

# Completion Gate for Phase 0

**Result: PASS / APPROVED / CLOSED — 2026-08-26.**

The completion gate is satisfied for:

- state selector UX;
- state landing-page UX/information hierarchy;
- normalized resource taxonomy;
- State / StateResource / StateNotice semantic model and ownership;
- authoritative-source qualification;
- provenance/freshness/maintenance requirements;
- representative-state evidence;
- six-wave 48-state production plan;
- automated, human, and nationwide release validation requirements.

The following remain intentionally bounded to Wave 1 implementation review rather than reopening Phase 0:

- final keep/remove decision for provisional Search;
- exact native selector tap/navigation behavior;
- exact Search clearing and prefix/substring matching behavior;
- minor wording/card-emphasis refinements that do not alter the approved hierarchy or semantic model.

# Phase 0 Approved Outcome

## State-selection UX

The Regulations landing experience supports all 48 contiguous U.S. states and uses a compact State selector as the canonical navigation control.

Approved baseline:

- states remain available A-Z;
- provisional Search accepts state names and 2-letter abbreviations;
- Search live-filters/accelerates the State selector rather than acting as a separate destination system;
- matching states remain alphabetical and the alphabetically first match is selected;
- typing does not navigate automatically;
- Search is explicitly provisional and receives a final keep/remove decision during Wave 1 implementation review;
- no automatic GPS/location selection is part of the initial milestone;
- no persisted preferred-state behavior is implemented before D067 User Data architecture.

## State-page UX and hierarchy

Approved state-page baseline:

```text
← Regulations

STATE NAME
Fishing Regulations & Resources

Official resources from
Responsible State Agency

[ optional active notice ]

BEFORE YOU FISH
  dynamic official resource cards

PLAN YOUR TRIP
  dynamic official resource cards
```

Rules:

- state name is the primary heading;
- `Fishing Regulations & Resources` is the secondary title;
- official agency attribution appears near the top;
- optional current notices may appear before resource sections;
- `Fishing Regulations` is first and `Licenses & Permits` second where applicable;
- state pages are resource-driven, not fixed-slot-driven;
- empty categories/cards do not render;
- one official resource may satisfy multiple purposes through capabilities rather than fake duplicate cards;
- PDFs and online/interactive tools may both appear when they are materially distinct;
- subtle delivery metadata may identify Online regulations, PDF, Interactive tool/map, Fishing report, or License portal;
- official external destinations use the established `↗` semantics and do not require a leaving-FCC confirmation;
- exact card emphasis remains an implementation-review detail.

## Normalized resource model

`StateResource.section` values:

```text
before-you-fish
plan-your-trip
```

`StateResource.primaryCategory` values:

```text
regulations
licenses-permits
special-regulations
where-to-fish
public-access
stocking
reports-forecasts
other-official-resource
```

Approved `capabilities[]` values:

```text
statewide-regulations
waterbody-regulations
species-regulations
seasons
size-limits
bag-limits
legal-methods
special-permits
license-information
license-purchase
where-to-fish
public-access
interactive-map
stocking
fishing-reports
fishing-forecasts
lake-information
fish-surveys
```

Do not create hyper-specific legal capabilities for individual stamps, tags, species, or one-state rule vocabulary unless a later reusable need is demonstrated.

`experienceType` values:

```text
web-page
pdf
interactive-tool
interactive-map
external-portal
```

`status` values:

```text
active
temporarily-unavailable
retired
```

## Semantic data shape

Approved conceptual `State` shape:

```text
State
    id
    name
    abbreviation
    agencyName
    agencyUrl
    verifiedDate
    active
```

Approved conceptual `StateResource` shape:

```text
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
```

`sourceRelationship` values:

```text
direct
officially-designated-external
```

`designationUrl` is required when `sourceRelationship` is `officially-designated-external` and records the official government/agency page that establishes the authorization chain.

`StateResource` authority metadata may inherit from the owning State. If a resource overrides that authority, `authorityName` and `authorityUrl` must be supplied together.

Approved conceptual `StateNotice` shape:

```text
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

`expiresDate` is optional and may be recorded only when the official source provides a definite expiry. A known passed expiry prevents rendering; otherwise human review controls notice deactivation.

`StateNotice` uses the same authority inheritance/override and officially-designated-external provenance principles as `StateResource`.

Approved build-level metadata:

```text
REGULATIONS_DATA_BUILD_INFO
    externalReferenceReviewedDate
```

That date advances only after a complete human review of the entire maintained Regulations set. A partial review does not advance it.

## Official-source qualification

Every production Regulations destination must trace to the responsible government authority.

1. Direct official government/agency resources are preferred.
2. An external vendor/service is allowed only when the responsible authority explicitly designates it.
3. Search engines and non-official summaries may aid discovery but never establish production authority.
4. Prefer stable official landing pages over year-specific PDF URLs when practical; current official PDFs and interactive tools remain valid when authority-qualified.
5. Redirects require human review before adopting a new canonical destination.
6. Agency-responsibility changes trigger reassessment of the State authority record and all affected resources/notices.

Production entry requires authority identification, official-path verification, intended-purpose confirmation, canonical URL review, relationship classification, taxonomy assignment, `verifiedDate`, and destination-behavior validation.

## Freshness, checker, and alerting model

Regulations uses a separate monthly maintenance workflow rather than changing the existing quarterly Rig/Media cadence.

Approved cadence:

- automated Regulations reachability/redirect check — monthly;
- complete human Regulations freshness review — every 90 days;
- active `StateNotice` human review — every 30 days;
- pre-release review when the existing review is stale or otherwise insufficient;
- user-reported concerns reviewed as received.

Automation may report success, redirects, 404/410, server failures, timeout/DNS, 401/403/405/429, and final URL. It must never replace a URL, disable/remove a resource, rewrite authority/category/capability metadata, create/deactivate notices, or interpret legal meaning.

Technical concerns produce GitHub Actions warnings/run summaries and create or update a persistent GitHub maintenance issue as the authoritative human review queue. GitHub Actions email notifications are the approved initial external alert channel. Implementation must include explicit setup guidance for notification settings, scheduled workflows, maintenance-issue behavior, and required permissions.

The Regulations maintenance workflow may use only the permissions needed to inspect and report (`contents: read`, `issues: write`). It must not have permission to mutate Regulations source/data.

Human freshness expiry is enforceable: State and active/temporarily-unavailable `StateResource` records older than 90 days fail freshness validation; active `StateNotice` records older than 30 days fail. Retired resources are excluded from recurring freshness enforcement.

## Representative-state evidence

Phase 0 validated the architecture against:

- Oklahoma
- Kansas
- Missouri
- Arkansas
- California
- Minnesota
- Pennsylvania
- Texas

The evidence supports a resource-driven nationwide model. Agency sites vary enough that FCC must normalize user purpose and metadata without forcing identical card/category structures. Official multi-purpose tools, PDFs, external license portals, interactive maps, reports/forecasts, and special-water resources can all be represented by the approved model.

## Production-wave strategy

Production is cumulative across six waves of eight states:

1. **Wave 1 — Architecture/UX Pilot:** Oklahoma, Kansas, Missouri, Arkansas, California, Minnesota, Pennsylvania, Texas.
2. **Wave 2:** Alabama, Arizona, Colorado, Connecticut, Delaware, Florida, Georgia, Idaho.
3. **Wave 3:** Illinois, Indiana, Iowa, Kentucky, Louisiana, Maine, Maryland, Massachusetts.
4. **Wave 4:** Michigan, Mississippi, Montana, Nebraska, Nevada, New Hampshire, New Jersey, New Mexico.
5. **Wave 5:** New York, North Carolina, North Dakota, Ohio, Oregon, Rhode Island, South Carolina, South Dakota.
6. **Wave 6:** Tennessee, Utah, Vermont, Virginia, Washington, West Virginia, Wisconsin, Wyoming.

Execution ultimately combined the planned Wave 5 and Wave 6 state sets into one final 16-state completion build after the user approved that scope expansion. The final review/refinement pass completed all 48 states at **180 resources / 2 active notices**. Regulations Search was retained after full-scale review.

Wave 1 was the implementation/process test for the selector, provisional Search, state page, model, validator, monthly maintenance workflow, issue/email alerting, and real browser/mobile behavior. It is also the final keep/remove gate for Search before the remaining 40 states are scaled.

If a production state exposes a structural case that the model cannot represent honestly, pause only the affected state/wave, reopen the narrow architecture question, validate the extension against existing states, and continue. Do not force bad metadata merely to preserve the schema.

A local review checkpoint is required for Wave 1 and for the final 48-state candidate. Intermediate review ZIPs are generated only when transfer/browser/local validation actually requires them.

## Validation gates

Regulations uses three validation gates:

1. deterministic record/data validation;
2. per-wave automated + human validation;
3. final nationwide release validation.

Deterministic failures include invalid/duplicate state identity or record IDs, orphan `stateId`, invalid enums/capabilities/status/relationship values, missing/invalid required URLs, designated-external resources without `designationUrl`, future or stale required verification dates, passed known notice expiry while still active, and other unresolved required relationships.

Every active state must ultimately expose `statewide-regulations` plus at least one of `license-information` or `license-purchase`. Optional categories are researched but are not fabricated when an appropriate official resource does not exist.

Same-state duplicate destination URLs are review warnings because one multi-purpose `StateResource` should normally express multiple uses through `capabilities[]`. Network failures/redirects are human-review findings rather than automated authority conclusions; all outstanding release-time concerns must be human-adjudicated.

The final nationwide release gate requires all 48 states, selector reachability, required capabilities, valid schema/provenance/freshness, current notices, human-adjudicated network findings, working maintenance/alert behavior, mobile/keyboard/accessibility/navigation validation, no empty/fake resource cards, and an approved changed-file diff.

# Documentation Ownership After Workflow R2 Consolidation

The Regulations planning decision remains preserved. R2 changes documentation pathing, not Regulations product scope.

Current governing owners for this workstream are:

- `PROJECT.md` — mission/coverage boundary;
- `ROADMAP.md` — milestone sequence;
- D066/D067 in `DECISIONS.md` / decision bodies — durable product/user-data boundaries;
- `ARCHITECTURE.md` — resource-navigation and knowledge ownership boundary;
- `UI_STANDARD.md` — state-selector/state-page/navigation/card interaction standards;
- `EXTERNAL_REFERENCE_MAINTENANCE.md` — durable external-resource verification/maintenance standard;
- `data-model/01-FOUNDATION.md`, `05-TACKLE.md`, `05A-INVENTORY.md`, `07-USER-DATA.md`, `09-RELATIONSHIPS.md` — applicable semantic/user-data boundaries;
- `WORKING_STATE.md` — current repository resume point;
- `ACTIVE-CHANGE-LEDGER.md` — REG-001/GATE-014 visibility;
- this file — Phase 0 planning questions/evidence/completion gate.

Former Handoff, standalone glossary/Lure/Backup, separate card/detail/navigation standards, Milestones, and Specification are not active owners after R2; their durable content is consolidated elsewhere or retained in Git history.

# Exact Resume Point

This workstream is **CLOSED / PASS**.

1. Nationwide Regulations production closed at GitHub `main` `fffe2ef518f13fd5d50e5d45af9d9ead7c11045c` (`Regulations - Final Wave`).
2. Final maintained set: **48 State / 180 StateResource / 2 active StateNotice** records.
3. Repository Integrity #90 and GitHub Pages #578 passed on the final production SHA.
4. Search is retained; Back preserves eligible restored query/selection state, while Home clears transient Regulations state.
5. Future Regulations work is maintenance/new scope under the established authority, provenance, freshness, and external-reference rules; it does not reopen Phase 0 or production automatically.
6. The next product milestone is **What Should I Throw?**
