# Freshwater Fishing Companion — Recommendation Prerequisites Foundation

**Document:** workstreams/RECOMMENDATION-PREREQUISITES-FOUNDATION.md  
**Document Status:** Closed — PASS  
**Final GitHub Commit:** `cdf8f408011c5137d0351cec9f350d0a6eee66c2` (`Techniques to Rig - Final`)  
**Decision Baseline:** D003, D004, D024, D056, D069  
**Planning Locks:** RP-A1–RP-A4, RP-B1, RP-B2A–RP-B2D, B-01–B-13, RP-C1–RP-C4  
**Created:** 2026-08-27  
**Planning Closeout:** 2026-08-30

# Purpose

Implement the approved What Should I Throw Reference Knowledge prerequisites as one bounded production workstream in the locked dependency order: **Conditions → Lure/Bait Reference plus required Rig/Tackle changes → Techniques plus Compatibility**. The workstream combines execution only; canonical semantic ownership remains separate.

Planning is complete and remains locked. Production is active in Drive Current; Subphase A Conditions is staged and targeted validation is PASS, while final combined Repository Integrity/review/commit/CI remain pending.

# Canonical Ownership

- `data-model/03B-CONDITIONS.md` owns reusable environmental/situational Condition vocabulary and schema.
- `data-model/03C-LURES-BAIT.md` owns canonical Lure/Bait identities and intrinsic Lure/Bait fields.
- `data-model/03A-TECHNIQUES.md` owns reusable presentation behavior and Technique instruction.
- `data-model/03-RIGS.md` owns Rig assembly/configuration, including approved Rig-family/configuration changes.
- `data-model/05-TACKLE.md` owns functional physical component concepts.
- `data-model/09-RELATIONSHIPS.md` owns typed intrinsic Compatibility Relationships.
- Recommendation Decision Knowledge owns contextual Fish/Condition suitability, ranking, rationale, cadence/speed/depth refinements, exact size/weight/color/pattern choices, and other context-specific guidance.

# Subphase A — Conditions — IMPLEMENTATION STAGED / TARGETED VALIDATION PASS

RP-A1 through RP-A4 are locked.

- Production source: `data/conditions.js` / `CONDITION_DATA`.
- Schema: Foundation fields plus `category` only.
- Categories: `waterbody`, `access-position`, `depth-zone`, `cover-structure`, `water-clarity`, `current`, `season`, `light-sky`.
- Current pilot scope: 35 canonical Conditions using lowercase kebab-case IDs; category-qualified IDs are used where ambiguity requires them. The approved pilot refinement adds Light Cover and Heavy Cover under Cover / Structure without changing the flat model or category set.
- No hierarchy, `sortOrder`, recommendation weights, suitability arrays, or cross-domain recommendation fields.
- Existing Rig `conditionTags[]` is frozen to the current 17-value legacy vocabulary and temporarily retained for current Rig Search / Good Conditions behavior.
- No Rig `conditionIds[]`, Rig↔Condition relationship, or runtime legacy-tag mapping is created.
- Conditions load through the normal production script graph and receive exact deterministic repository validation.
- No standalone Conditions dashboard card, route, browse/detail page, or search surface.
- User-facing Condition explanation uses one shared lightweight contextual popover resolved from canonical `CONDITION_DATA`; Foundation `summary` supplies initial copy and must not contain recommendation advice.

**Checkpoint:** GitHub `38a974ce` contains the initial Conditions/Lure-Bait review baseline. Drive Current stages the approved pilot refinement to 35 Conditions by adding Light Cover and Heavy Cover under Cover / Structure, plus presentation-only Fish/Rig mappings and shared popover containment/placement repair. Targeted syntax/data/static validation is PASS. Full Repository Integrity and final combined review/commit/CI remain pending.

# Subphase B — Lure/Bait Reference — REPAIR STAGED / TARGETED DATA + STATIC PASS / RUNTIME RE-REVIEW PENDING

## Final V1 identities

Artificial:

1. `stick-worm` — Stick Worm
2. `craw` — Craw
3. `creature-bait` — Creature Bait
4. `paddle-tail-swimbait` — Paddle-tail Swimbait
5. `tube` — Tube
6. `spinnerbait` — Spinnerbait
7. `crankbait` — Crankbait
8. `jerkbait` — Jerkbait
9. `inline-spinner` — Inline Spinner
10. `spoon` — Spoon

Natural bait:

11. `minnow` — Minnow
12. `nightcrawler` — Nightcrawler
13. `cricket` — Cricket

No additional Lure/Bait identity enters this production pass without reopening the bounded dependency gate.

## Final schema / ownership contract

Every record uses Foundation fields plus:

- required `presentationType: artificial | natural-bait`;
- required broad functional `category`;
- optional `profile` only when it adds demonstrated reusable value;
- aliases only when meaningful;
- sparse subtype-specific intrinsic fields only when demonstrated by reusable reference value.

Do not add universal `sizeRange`, `weightRange`, or `actionCharacteristics[]` fields in V1. Exact context-dependent size, weight, color/pattern, action, and presentation remain Recommendation Decision Knowledge. No normalized color/pattern vocabulary is introduced in this subphase. Commercial color names remain noncanonical.

Generic Tackle concepts such as `bait` and `soft-plastic` remain valid when they own the physical component requirement; specific presented identities belong to Lure/Bait. Existing lure-like Tackle records are not deleted or renamed merely because a Lure/Bait identity exists.

Semantic rule: **Rig tells how assembled → Tackle identifies required physical component class → Lure/Bait identifies what is presented to Fish.**

## RP-B2 family/configuration and guidance rules

- **RP-B2A:** Rig↔Technique contains only normal intended-use Techniques; Recommendation later selects the contextual subset.
- **RP-B2B:** every new Lure/Bait is evaluated through required Rig, required Tackle, viable Techniques, intrinsic Compatibility, and affected Fish-to-Rig guidance. A new lure does not automatically require a new Rig.
- **RP-B2C:** one canonical Rig may contain lure-specific setup configurations when terminal architecture is materially the same. Configuration may switch required Lure/Bait, component/media visualization, attachment point, assembly steps, setup notes, and mistakes. Configurations are not separate top-level Rigs unless physical terminal architecture materially differs. Compatibility remains canonical Rig↔Lure/Bait.
- **RP-B2D:** Fish-to-Rig guidance may optionally qualify a Rig recommendation with a canonical Lure/Bait. Qualified guidance requires valid Rig↔Lure/Bait compatibility. Adding another compatible Rig configuration does not inherit Fish guidance automatically.

## B-01 through B-13 dependency sweep — locked dispositions

- **B-01 Stick Worm:** include; no new Rig; no new Tackle identity; 12 approved intrinsic Rig↔Stick Worm compatibility candidates; no Fish-to-Rig guidance changes.
- **B-02 Craw:** include; no new Rig; no new Tackle identity; 6 approved intrinsic Rig↔Craw compatibility candidates; no Fish-to-Rig guidance changes.
- **B-03 Creature Bait:** include; no new Rig; no new Tackle identity; 5 approved intrinsic Rig↔Creature Bait compatibility candidates; no Fish-to-Rig guidance changes.
- **B-04 Paddle-tail Swimbait:** include; add **Weighted Swimbait Hook Rig** and **Weighted Swimbait Hook** Tackle; 4 approved intrinsic Rig↔Paddle-tail Swimbait compatibility candidates; bounded Fish guidance reevaluation required, with no guidance change locked during planning.
- **B-05 Tube:** include; add **Tube Jig Rig** and **Tube Jighead** Tackle; 4 approved intrinsic Rig↔Tube compatibility candidates; bounded Fish guidance reevaluation required, with no guidance change locked during planning.
- **B-06 Spinnerbait:** include; generalize legacy Inline Spinner Setup into **Direct-Tie Lure Setup** with distinct Spinnerbait and Inline Spinner configurations; no net new-top-level Rig from this conversion; no new Tackle identity; one Direct-Tie↔Spinnerbait compatibility; no Fish guidance change.
- **B-07 Crankbait:** include as Direct-Tie Lure Setup configuration; no new top-level Rig/Tackle identity; existing Split Ring may be optional; one Direct-Tie↔Crankbait compatibility; no Fish guidance inheritance.
- **B-08 Jerkbait:** include as Direct-Tie Lure Setup configuration; no new top-level Rig/Tackle identity; existing Split Ring may be optional; one Direct-Tie↔Jerkbait compatibility; no Fish guidance inheritance.
- **B-09 Inline Spinner:** include canonical Lure/Bait identity; migrate legacy Inline Spinner Setup to Direct-Tie Lure Setup + Inline Spinner configuration; direct tie is canonical; no new snap/snap-swivel Tackle; existing approved Fish guidance migrates to the qualified Direct-Tie + Inline Spinner form without changing priority or rationale.
- **B-10 Spoon:** include as Direct-Tie Lure Setup configuration; no new top-level Rig/Tackle identity; existing Split Ring may be optional and existing Barrel Swivel may be optional where appropriate; one Direct-Tie↔Spoon compatibility; no Fish guidance inheritance.
- **B-11 Minnow:** intrinsic compatibility with Fixed Bobber Rig, Slip Bobber Rig, Basic Bottom Rig, Live-Bait Slip-Sinker Rig, Three-Way Rig, Bottom-Bouncer / Spinner Rig, and Split-Shot Bait Rig.
- **B-12 Nightcrawler:** intrinsic compatibility with Fixed Bobber Rig, Slip Bobber Rig, Basic Bottom Rig, Live-Bait Slip-Sinker Rig, Three-Way Rig, Bottom-Bouncer / Spinner Rig, and Split-Shot Bait Rig.
- **B-13 Cricket:** intrinsic compatibility with Fixed Bobber Rig, Slip Bobber Rig, Basic Bottom Rig, and Split-Shot Bait Rig only.

**Checkpoint:** The initial repaired B candidate is committed on GitHub `38a974ce`; the second runtime review is PARTIAL PASS. Drive Current now stages the bounded follow-up: Direct-Tie configurations own concise configuration-specific Best For/Good Conditions presentation values, Light/Heavy Cover canonical reference support is present, supported Fish labels open shared Condition references, Weighted Swimbait Hook Rig and Tube Jig Rig remain Beginner+, and shared reference popovers lock the background page and center/scroll independently. Targeted syntax/data/static checks PASS. Served GitHub playback confirms the embed path works. The Tube Jig tutorial is now the served-working physical-rigging tutorial *How To Rig A Tube Bait The Right Way* by BassResource - The Ultimate Bass Fishing Resource (`EibSWhI6nbM`); the earlier Arcasting candidate was superseded after external-site playback was disabled. Fish→Direct-Tie Inline Spinner navigation remains a preserve target. Typed Compatibility remains deferred to Subphase C, which is blocked until the next browser checkpoint passes.

# Subphase C — Techniques / Compatibility — COMPLETE / PASS

## RP-C1 — exact V1 Technique vocabulary

1. `steady-retrieve` — Steady Retrieve
2. `stop-and-go-retrieve` — Stop-and-Go Retrieve
3. `twitch-and-pause` — Twitch and Pause
4. `swim` — Swim
5. `hop` — Hop
6. `drag` — Drag
7. `shake` — Shake
8. `deadstick` — Deadstick
9. `lift-and-fall` — Lift and Fall
10. `vertical-jig` — Vertical Jig
11. `natural-drift` — Natural Drift
12. `float-presentation` — Float Presentation
