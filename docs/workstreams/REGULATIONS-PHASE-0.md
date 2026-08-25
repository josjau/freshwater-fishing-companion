# Freshwater Fishing Companion — Regulations Phase 0

**Document:** REGULATIONS-PHASE-0.md  
**Document Revision:** 0.1.0  
**Document Status:** Approved  
**Workstream Status:** APPROVED TO BEGIN / PLANNING NOT STARTED  
**Decision Baseline:** D031, D055, D056, D066, D067  
**Last Updated:** 2026-08-25

# Purpose

This workstream preserves the approved starting point for **Regulations — U.S. State Fishing Resource Gateway** before Phase 0 research/design begins.

The contents below are an **approved planning baseline, not a frozen implementation specification**. Phase 0 may refine the taxonomy, UX, data model, naming, production-wave strategy, and maintenance process when research demonstrates a better working solution, provided changes remain consistent with the app's mission and are explicitly documented/approved.

# Why This Milestone Moved Forward

The Dashboard currently sends Regulations directly to Oklahoma Department of Wildlife Conservation resources. That was appropriate for the earlier geographic focus but no longer matches the application's Four-State direction.

The project considered leaving **What Should I Throw?** as the next milestone. Regulations was moved ahead of it because:

1. the geographic mismatch is already a known product defect/open design item (REG-001),
2. anglers need trustworthy legal/resource pathways before additional decision/recommendation features add more fishing guidance,
3. Regulations can be made broadly useful without forcing a nationwide Fish/Rig/recommendation expansion,
4. official-resource navigation has a cleaner and lower-maintenance architecture than copying legal rules into the application,
5. What Should I Throw remains a larger Decision Knowledge milestone with unresolved Conditions/Technique/scoring dependencies and is not harmed by following Regulations.

The approved roadmap therefore becomes:

1. Knots — Closed
2. Fish Guide — Closed
3. Regulations — U.S. State Fishing Resource Gateway
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

Phase 0 may move into implementation only after explicit approval of:

- state selector UX,
- state landing-page UX/information hierarchy,
- normalized resource taxonomy,
- State/State Resource model and semantic ownership,
- authoritative-source rules,
- provenance/freshness/maintenance requirements,
- representative-state evidence,
- production-wave plan,
- required validation.

# Documentation Impact Disposition — This Decision Checkpoint

## UPDATED

- `PROJECT.md`
- `ROADMAP.md`
- `DECISIONS.md`
- `ARCHITECTURE.md`
- `ACTIVE-CHANGE-LEDGER.md`
- `WORKING_STATE.md`
- `HANDOFF.md`
- `CHANGELOG.md`
- `EXTERNAL_REFERENCE_MAINTENANCE.md`
- `STYLE_GUIDE.md`
- `data-model/00-GLOSSARY.md`
- `data-model/05-TACKLE.md`
- `data-model/05A-INVENTORY.md`
- `data-model/07-USER-DATA.md`
- `data-model/08-BACKUP.md`
- `data-model/README.md`
- `workstreams/REGULATIONS-PHASE-0.md` (new)

## VERIFIED — NO CHANGE REQUIRED

- `data-model/01-FOUNDATION.md`
- `data-model/09-RELATIONSHIPS.md`
- root `AGENTS.md`
- `CARD_PAGE_STANDARD.md`
- `DETAIL-PAGE-STANDARD.md`
- `DEVELOPMENT_WORKFLOW.md`
- `FISH_REFERENCE_SOURCES.md`
- `KNOT_REFERENCE_SOURCES.md`
- `MEDIA_GUIDE.md`
- `MILESTONES.md` — frozen historical record; its old sequence/ODWC statements remain intentionally historical
- `NAVIGATION-PAGE-STANDARD.md`
- `RIG_REFERENCE_SOURCES.md`
- `SPECIFICATION.md` — retired pointer
- `V1-DESIGN-AUDIT.md`
- `data-model/02-FISH.md`
- `data-model/03-RIGS.md`
- `data-model/03A-TECHNIQUES.md`
- `data-model/03B-CONDITIONS.md`
- `data-model/04-KNOTS.md`
- `data-model/06-LURES.md`

`data-model/06-LURES.md` already preserves the correct ownership boundary: future lure recommendations may consume user inventory, but actual ownership belongs to My Tackle/User Knowledge. No sequencing statement there is stale.

# Exact Resume Point

After this documentation checkpoint is committed/reconciled, begin Phase 0 with research and architecture only. Do not create production Regulations source/data until the Phase 0 completion gate above is approved.
