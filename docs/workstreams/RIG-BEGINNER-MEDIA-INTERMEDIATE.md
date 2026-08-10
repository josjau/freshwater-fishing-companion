# Freshwater Fishing Companion

**Document:** RIG-BEGINNER-MEDIA-INTERMEDIATE.md  
**Document Revision:** 0.1.1  
**Document Status:** Approved  
**Implementation Status:** Implemented / Unvalidated — Recognition Media Correction In Progress  
**Implementation Baseline:** `main` at `e4b61aea052f4ad843be0f6d54231af87d574905` (`Rigs - Intermediate Build`)  
**Last Updated:** 2026-08-10

# Purpose

Complete the recognition/tutorial-media coverage of the validated nine-Rig Beginner and Beginner+ foundation and implement the complete Intermediate Rig tier as one coherent Rig-domain build segment.

This segment keeps D046's tier-by-tier expansion discipline: it adds exactly one new learning tier, Intermediate, while completing deferred media work for the already validated Beginner/Beginner+ library.

# Current Repository State

The Intermediate implementation package was pushed to `main` in commit `e4b61aea052f4ad843be0f6d54231af87d574905` (`Rigs - Intermediate Build`). The source/data implementation is therefore present in the repository, but the segment has not yet completed its required post-push validation.

Current state:

- four Intermediate Rig records are implemented,
- the intended Beginner/Beginner+ tutorial expansion is implemented,
- canonical Tackle expands to the intended 23 active concepts,
- six new Tackle recognition-media files are present,
- no Intermediate runtime/regression validation has yet been completed,
- the six new recognition-media assets failed the first visual-quality review because they use an older flat/vector-style treatment rather than the approved current catalog/semi-photorealistic production treatment,
- replacement of those six assets is the active corrective action,
- Intermediate+, Advanced, and Expert work has not started.

The failed image review is a known validation failure, not a reopened design decision. `MEDIA_GUIDE.md` now contains the mandatory real-photo-first acquisition order and Tackle Media Generation Gate that must be satisfied before replacement assets are accepted.

# Segment Decisions

The following decisions are approved for this segment and must be promoted into the governing decision/media documentation at formal closeout.

## Draft D053 — Rig Media Completeness and Tutorial Audit

Every Rig that enters a completed learning tier receives a media-completeness audit as part of the same build segment.

The audit requires:

- authoritative text assembly remains mandatory and authoritative,
- every Rig receives a tutorial-source search,
- a technically correct YouTube tutorial is included when a suitable public source can be independently verified and is compatible with D049,
- tutorial players remain lazy-loaded, use `youtube-nocookie.com`, do not autoplay, preserve platform attribution/controls, and retain a `Watch on YouTube ↗` fallback,
- if no suitable tutorial is found, the Rig uses the next trustworthy D049 fallback instead of adding a weak or technically mismatched video,
- every canonical Tackle concept used by a completed Rig must provide accurate recognition help and normally has an approved recognition-media asset,
- newly introduced canonical Tackle concepts ship with their recognition media in the same tier build,
- generated completed-Rig/build-step imagery remains prohibited under D045.

Permanent working principle for the Rig workstream:

> Tutorial preferred, trustworthy external visual/reference as backup, authoritative text always required.

## Draft D054 — Intermediate Rig Tier Membership

The complete Intermediate tier is:

1. Drop Shot Rig
2. Carolina Rig
3. Live-Bait Slip-Sinker Rig
4. Three-Way Rig

This is a deliberate difficulty step after Beginner+ because these Rigs introduce more precise leader management, bottom-contact tuning, multi-component relationships, or multi-branch rigging while remaining broadly practical for the approved regional library.

Intermediate+, Advanced, and Expert membership remain outside this segment and are not silently assigned here.

# Existing Rig Media Completion Scope

The validated nine-Rig library receives a tutorial audit:

| Rig | Tutorial result |
|---|---|
| Fixed Bobber Rig | NYSDEC — `How To Rig a Bobber and Worm for Fishing` (`LlzvkVUvYBs`) |
| Basic Bottom Rig | Catfish Edge — `How To Tie A Slip Sinker Rig For Catfish` (`O6pEc6Y_44U`) |
| Jighead + Soft Plastic | Tackle Tactics TV — `Soft Plastics 101 - Chapter 6 - Soft Plastic Rigging on a Standard Jighead` (`wv1e53YZuBo`) |
| Slip Bobber Rig | Wired2Fish — `How to Rig and Fish Slip Bobbers for Crappie in Timber` (`foSgzdjLZyk`) |
| Inline Spinner Setup | No suitable independently verified YouTube tutorial selected in this build; retain the verified Mepps/Panther Martin external-reference fallback. |
| Texas Rig | Existing validated Wired2Fish tutorial (`cIraWgiR6u0`) retained. |
| Wacky Rig | Vermont Fish & Wildlife Department — `Wacky Rigging a Senko with an O-Ring, Fishing Lure Tutorial` (`u8N--D8C--4`) |
| Ned Rig | Bass University — `How to Rig & Fish the Ned Rig` (`ajJz8pH0Jig`) |
| Weightless Soft-Plastic Rig | Wired2Fish — `Weightless Soft Plastics for Springtime Bass` (`Bld_-8GBsco`) |

Video records remain unvalidated until the post-push runtime test confirms that the current public video remains playable through the approved embed path. A source that disables embedding or fails compatibility testing falls back to its external destination/reference rather than blocking the Rig page.

# Recognition-Media Completion Scope

The six new recognition-media files requiring corrected replacements are:

- Wacky Hook → `images/tackle/wacky-hook-reference.webp`
- Wacky O-Ring → `images/tackle/wacky-o-ring-reference.webp`
- Ned Jighead → `images/tackle/ned-jighead-reference.webp`
- Drop Shot Weight → `images/tackle/drop-shot-weight-reference.webp`
- Three-Way Swivel → `images/tackle/three-way-swivel-reference.webp`
- Fixed Sinker → `images/tackle/fixed-sinker-reference.webp`

The versions introduced in `e4b61ae` are rejected for visual quality/style. Their replacements must follow the current `MEDIA_GUIDE.md`:

1. search for an accurate legally reusable real photograph first,
2. otherwise create an original semi-photorealistic catalog-style reference anchored to verified real-world geometry,
3. use precise illustration only as an explicitly reviewed mechanical exception,
4. compare each replacement against current approved production Tackle assets before packaging,
5. reject flat/vector/clip-art appearance for normal Tackle recognition media.

The required production target remains 640 × 440 optimized WebP on the approved warm-neutral presentation unless an approved real photograph requires a justified treatment consistent with the same recognition standard.

# Intermediate Rig Scope

## Drop Shot Rig

Canonical configuration:

- compact finesse/Wacky/Drop Shot hook,
- soft-plastic bait,
- Drop Shot Weight below the hook.

Standard learning configuration keeps the hook point exposed and point-up, with the weight attached to the tag end below the hook. Hook-to-weight spacing is adjustable to bottom cover and fish position.

New canonical Tackle:

- Drop Shot Weight

Tutorial:

- Mystery Tackle Box — `Drop Shot Rig: How To Rig the Drop Shot (Tutorial)` (`xuqaAq98BDA`)

## Carolina Rig

Canonical configuration:

- Sliding Sinker,
- Protective Bead,
- Barrel Swivel,
- Leader Line,
- Offset Worm Hook,
- Soft Plastic Bait.

No duplicate Carolina-only sinker, bead, swivel, hook, or line concept is introduced when an existing canonical Tackle concept already answers readiness correctly.

Tutorial:

- John Crews — `HOW TO FISH A CAROLINA RIG` (`4nU1QncQ0QM`)

The canonical `carolina-rig` record resolves the previously approved Basic Bottom Rig forward variation relationship.

## Live-Bait Slip-Sinker Rig

Canonical configuration:

- Sliding Sinker,
- optional Protective Bead,
- Barrel Swivel,
- Leader Line,
- Fishing Hook,
- Bait.

A walking sinker is modeled as a recognized Sliding Sinker variant rather than creating a duplicate canonical weight concept.

Tutorial:

- Nick Lindner — `Lindy Rigging Walleyes (The Complete Guide)` (`61mG-xGi-I0`)

## Three-Way Rig

Canonical configuration:

- Three-Way Swivel,
- Leader Line material for hook leader and sinker dropper,
- Fishing Hook,
- Bait,
- Fixed Sinker on the short dropper.

New canonical Tackle:

- Three-Way Swivel
- Fixed Sinker

Tutorial:

- Catfish Edge — `3 Way Rig - Three Way Rig Catfish Rigs` (`8SONykmBFxA`)

# Canonical Tackle Result

Implemented target state on `main`, pending validation:

- active canonical Tackle concepts: 23,
- active Tackle recognition-media records: 23,
- every active canonical Tackle concept is intended to have at least one recognition-media reference,
- Rig requirements remain the single owner of Rig-to-Tackle usage relationships,
- derived Tackle `Used In` continues to be computed from active Rig requirements.

New canonical Tackle concepts are limited to concepts that are functionally distinct for readiness:

1. Drop Shot Weight
2. Three-Way Swivel
3. Fixed Sinker

These counts and relationships are not considered validated until the Intermediate validation procedure is run against current `main`.

# Rig Guide Result

Implemented target state on `main`, pending validation:

- 13 active Rigs,
- Beginner: 6,
- Beginner+: 3,
- Intermediate: 4,
- Core remains the existing six-member cross-cutting curated registry,
- Intermediate is intended to be actionable on the Rig Guide,
- Intermediate search is intended to scope to the four Intermediate records,
- All Rigs is intended to include all 13 active Rigs,
- Intermediate+, Advanced, and Expert remain unavailable `Coming Soon` cards.

These behaviors are implemented but remain unvalidated until runtime checks pass.

# Source Scope

Implementation commit `e4b61ae` changed:

- `data/rigs.js`
- `data/tackle.js`
- `data/media.js`
- `script.js`

Recognition-media correction scope:

- `images/tackle/wacky-hook-reference.webp`
- `images/tackle/wacky-o-ring-reference.webp`
- `images/tackle/ned-jighead-reference.webp`
- `images/tackle/drop-shot-weight-reference.webp`
- `images/tackle/three-way-swivel-reference.webp`
- `images/tackle/fixed-sinker-reference.webp`

Active documentation:

- `docs/workstreams/RIG-BEGINNER-MEDIA-INTERMEDIATE.md`
- `docs/workstreams/RIG-BEGINNER-MEDIA-INTERMEDIATE-VALIDATION.md`
- `docs/HANDOFF.md`
- `docs/DEVELOPMENT_WORKFLOW.md`
- `docs/MEDIA_GUIDE.md`

Additional governing/current-state documentation will continue to be reconciled as meaningful implementation and validation results occur rather than waiting until the end of the segment.

# Explicit Non-Scope

- Intermediate+ Rig records
- Advanced Rig records
- Expert Rig records
- Dashboard search
- My Tackle persistent ownership implementation
- Knots implementation
- Recommendations
- generated completed-Rig or assembly-step imagery
- unrelated shared CSS or renderer redesign
- replacement of already validated recognition assets solely for stylistic uniformity

# Completion Rule

This segment remains **Implemented / Unvalidated** until the current correction and validation sequence is complete:

1. replace the six rejected recognition assets under the current Media Generation Gate,
2. re-fetch actual GitHub `main` and confirm the corrected file inventory/state,
3. validate canonical Rig/Tackle/media counts and relationships,
4. validate Intermediate navigation/search/detail/readiness behavior,
5. test all tutorial candidates for current lazy-load playback and fallback behavior,
6. validate the six corrected recognition assets at phone and desktop sizes,
7. run Beginner/Beginner+/Core and related application regressions,
8. reconcile governing/current-state documentation with every meaningful result,
9. push/re-fetch the final closeout state and only then mark the segment Finalized.

Intermediate+ must not begin while this segment remains unfinalized.
