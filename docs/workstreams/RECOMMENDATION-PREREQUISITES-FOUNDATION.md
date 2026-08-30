# Freshwater Fishing Companion — Recommendation Prerequisites Foundation

**Document:** workstreams/RECOMMENDATION-PREREQUISITES-FOUNDATION.md  
**Document Status:** Approved — Production Active / Subphase C Runtime PASS / Pre-Commit Validation Pending  
**GitHub Baseline:** `3b5e77f0772b306977edb0252d5f9004069318f7` (`Lure/Bait UX fixes`)  
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
- **B-06 Spinnerbait:** include; generalize legacy Inline Spinner Setup into **Direct-Tie Lure Setup** with distinct Spinnerbait and Inline Spinner configurations; no net-new top-level Rig from this conversion; no new Tackle identity; one Direct-Tie↔Spinnerbait compatibility; no Fish guidance change.
- **B-07 Crankbait:** include as Direct-Tie Lure Setup configuration; no new top-level Rig/Tackle identity; existing Split Ring may be optional; one Direct-Tie↔Crankbait compatibility; no Fish guidance inheritance.
- **B-08 Jerkbait:** include as Direct-Tie Lure Setup configuration; no new top-level Rig/Tackle identity; existing Split Ring may be optional; one Direct-Tie↔Jerkbait compatibility; no Fish guidance inheritance.
- **B-09 Inline Spinner:** include canonical Lure/Bait identity; migrate legacy Inline Spinner Setup to Direct-Tie Lure Setup + Inline Spinner configuration; direct tie is canonical; no new snap/snap-swivel Tackle; existing approved Fish guidance migrates to the qualified Direct-Tie + Inline Spinner form without changing priority or rationale.
- **B-10 Spoon:** include as Direct-Tie Lure Setup configuration; no new top-level Rig/Tackle identity; existing Split Ring may be optional and existing Barrel Swivel may be optional where appropriate; one Direct-Tie↔Spoon compatibility; no Fish guidance inheritance.
- **B-11 Minnow:** intrinsic compatibility with Fixed Bobber Rig, Slip Bobber Rig, Basic Bottom Rig, Live-Bait Slip-Sinker Rig, Three-Way Rig, Bottom-Bouncer / Spinner Rig, and Split-Shot Bait Rig.
- **B-12 Nightcrawler:** intrinsic compatibility with Fixed Bobber Rig, Slip Bobber Rig, Basic Bottom Rig, Live-Bait Slip-Sinker Rig, Three-Way Rig, Bottom-Bouncer / Spinner Rig, and Split-Shot Bait Rig.
- **B-13 Cricket:** intrinsic compatibility with Fixed Bobber Rig, Slip Bobber Rig, Basic Bottom Rig, and Split-Shot Bait Rig only.

**Checkpoint:** The initial repaired B candidate is committed on GitHub `38a974ce`; the second runtime review is PARTIAL PASS. Drive Current now stages the bounded follow-up: Direct-Tie configurations own concise configuration-specific Best For/Good Conditions presentation values, Light/Heavy Cover canonical reference support is present, supported Fish labels open shared Condition references, Weighted Swimbait Hook Rig and Tube Jig Rig remain Beginner+, and shared reference popovers lock the background page and center/scroll independently. Targeted syntax/data/static checks PASS. Served GitHub playback confirms the embed path works. The Tube Jig tutorial is now the served-working physical-rigging tutorial *How To Rig A Tube Bait The Right Way* by BassResource - The Ultimate Bass Fishing Resource (`EibSWhI6nbM`); the earlier Arcasting candidate was superseded after external-site playback was disabled. Fish→Direct-Tie Inline Spinner navigation remains a preserve target. Typed Compatibility remains deferred to Subphase C, which is blocked until the next browser checkpoint passes.

# Subphase C — Techniques / Compatibility — IMPLEMENTED / RUNTIME PASS / PRE-COMMIT VALIDATION PENDING

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
13. `tight-line` — Tight-Line Presentation
14. `bottom-presentation` — Bottom Presentation
15. `troll` — Troll
16. `drift` — Drift

Retrieve speed, countdown/depth, float-depth adjustment, weighting, current orientation, back-trolling direction, flutter-fall, and comparable refinements are modifiers/context rather than separate Techniques.

## RP-C2 — Rig↔Technique authored scope

- Fixed Bobber Rig → Float Presentation; Natural Drift
- Slip Bobber Rig → Float Presentation; Natural Drift
- Basic Bottom Rig → Bottom Presentation; Tight-Line Presentation
- Texas Rig → Hop; Drag; Shake; Deadstick
- Jighead Soft-Plastic Rig → Swim; Hop; Lift and Fall; Vertical Jig
- Direct-Tie Lure Setup → Steady Retrieve; Stop-and-Go Retrieve; Twitch and Pause; Lift and Fall; Vertical Jig; Troll
- Wacky Rig → Shake; Deadstick
- Ned Rig → Drag; Hop; Shake; Deadstick; Swim
- Weightless Soft-Plastic Rig → Swim; Twitch and Pause; Deadstick
- Drop Shot Rig → Shake; Deadstick
- Carolina Rig → Drag
- Live-Bait Slip-Sinker Rig → Bottom Presentation; Drift; Troll; Tight-Line Presentation
- Three-Way Rig → Bottom Presentation; Natural Drift
- Neko Rig → Hop; Drag; Shake; Deadstick
- Shaky Head Rig → Shake; Drag; Hop; Deadstick
- Free Rig → Lift and Fall; Hop; Drag
- Double-Jig Crappie Rig → Vertical Jig; Lift and Fall
- Jika Rig → Hop; Drag; Lift and Fall
- Punch / Pegged Texas Rig → Lift and Fall
- Bottom-Bouncer / Spinner Rig → Troll; Drift
- Split-Shot Bait Rig → Natural Drift; Tight-Line Presentation; Bottom Presentation
- Weighted Swimbait Hook Rig → Swim; Steady Retrieve; Stop-and-Go Retrieve
- Tube Jig Rig → Hop; Drag; Lift and Fall; Vertical Jig; Swim

Relationships represent normal intended use, not all mechanically possible presentations. Direct-Tie may contain the union of Techniques supported by its approved configurations; that does not make every Direct-Tie Lure/Bait configuration compatible with every Direct-Tie Technique.

## RP-C3 — Lure/Bait↔Technique authored scope

- Stick Worm → Deadstick; Shake; Hop; Drag; Swim; Twitch and Pause
- Craw → Hop; Drag; Shake; Deadstick; Lift and Fall
- Creature Bait → Hop; Drag; Shake; Deadstick; Lift and Fall
- Paddle-tail Swimbait → Swim; Steady Retrieve; Stop-and-Go Retrieve
- Tube → Hop; Drag; Lift and Fall; Vertical Jig; Swim
- Spinnerbait → Steady Retrieve; Stop-and-Go Retrieve
- Crankbait → Steady Retrieve; Stop-and-Go Retrieve; Troll
- Jerkbait → Twitch and Pause; Steady Retrieve
- Inline Spinner → Steady Retrieve; Troll
- Spoon → Steady Retrieve; Stop-and-Go Retrieve; Lift and Fall; Vertical Jig; Troll
- Minnow → Natural Drift; Float Presentation; Tight-Line Presentation; Bottom Presentation; Drift; Troll
- Nightcrawler → Natural Drift; Float Presentation; Tight-Line Presentation; Bottom Presentation; Drift; Troll
- Cricket → Natural Drift; Float Presentation; Tight-Line Presentation; Bottom Presentation

## RP-C4 — final production contract

Technique V1 uses Foundation fields plus only demonstrated reusable instructional fields. No Technique category hierarchy is required in V1.

Intrinsic compatibility is stored once in one typed canonical Compatibility registry. Relationship-family ordering is deterministic:

- `rig-lure-bait`: Rig first, Lure/Bait second;
- `rig-technique`: Rig first, Technique second;
- `lure-bait-technique`: Lure/Bait first, Technique second.

Each record contains deterministic `id`, `relationshipType`, canonical participant type/ID fields, Foundation lifecycle metadata, and `isActive`; it contains no score, priority, rank, confidence, Fish IDs, Condition IDs, recommendation rationale, or inverse arrays.

Rig + Lure/Bait + Technique validity is derived through pairwise compatibility intersection. A combination is valid only when all applicable active pairwise relationships exist. No canonical three-way compatibility entity is created.

Once an authored relationship family/scope is declared complete, a missing relationship means unsupported intrinsic compatibility in V1. Before completeness is declared, absence is not automatically incompatibility.

Validation hard-fails on duplicate Technique IDs, duplicate Compatibility IDs, invalid relationship types or participant types, orphan references, active Compatibility pointing to inactive participants, duplicate semantic relationships, reversed duplicates, missing approved authored relationships, unapproved extras, and contextual Recommendation data leaking into intrinsic Compatibility.

# Planning Documentation Impact Disposition

UPDATED:

- `workstreams/RECOMMENDATION-PREREQUISITES-FOUNDATION.md`
- `workstreams/CONDITIONS-PRODUCTION.md`
- `data-model/03B-CONDITIONS.md`
- `data-model/03C-LURES-BAIT.md`
- `data-model/03A-TECHNIQUES.md`
- `data-model/03-RIGS.md`
- `data-model/05-TACKLE.md`
- `data-model/09-RELATIONSHIPS.md`
- `WORKING_STATE.md`
- `ACTIVE-CHANGE-LEDGER.md`
- `ROADMAP.md`
- `DEVELOPMENT_WORKFLOW.md`
- `workflow/DOCUMENTATION-AND-CLOSEOUT.md`
- `MEDIA_GUIDE.md`

VERIFIED — NO CHANGE REQUIRED:

- `PROJECT.md` — product mission/scope unchanged.
- `ARCHITECTURE.md` — D069's existing domain/layer boundaries already cover the locked plan; no new architectural owner was introduced.
- `DECISIONS.md` and `decisions/product.md` — D069 remains the durable prerequisite architecture owner; RP-A/B/C locks are bounded production-planning detail owned by the active workstream and data-model owners.
- `UI_STANDARD.md` — no new global UI standard; Condition popover follows the already approved contextual-reference pattern.
- `CHANGELOG.md` — planning closeout is approved uncommitted Drive state, not a landed GitHub history event.

# Planning-to-Build Gate — CLOSED / PASS

Subphase C C1–C3 planning and documentation closeout are complete. The exact 16-Technique production copy is owned by `data-model/03A-TECHNIQUES.md`. The exact 177 Compatibility target — 54 Rig↔Lure/Bait, 69 Rig↔Technique, 54 Lure/Bait↔Technique — is owned by `data-model/09-RELATIONSHIPS.md`. The earlier B-01–B-05 count-only defect and C2 exact-copy preservation defect were both explicitly re-locked and resolved before build authorization.

Authorized production scope is exactly six source/runtime files: new `data/techniques.js`, new `data/compatibility.js`, plus `index.html`, `view-renderer.js`, `forest-journal.css`, and `tools/validate_repository_integrity.js`. No Rig, Lure/Bait, Fish guidance, `script.js`, `search.js`, or media source changes are authorized by this gate.

# Production Sequence / Exact Resume

1. Subphase C implementation and targeted validation are complete in Drive Current.
2. Representative runtime/browser review is USER-APPROVED / PASS, including the Direct-Tie configuration-aware Technique intersection repair.
3. Run the full local Repository Integrity validator against the complete local checkout.
4. Review the exact local changed-file diff against GitHub baseline `3b5e77f0772b306977edb0252d5f9004069318f7`; only the approved Subphase C source/runtime files plus reconciled documentation may be present.
5. Do not commit/push until Repository Integrity and exact diff/scope review both PASS.
6. Do not begin Settings/User Data, My Tackle, or What Should I Throw recommendation-engine production inside this workstream.

# Foundation Exit Criteria

The Recommendation Prerequisites Foundation closes only when all three production subphases are implemented and validated, cross-domain ownership/referential integrity passes, the final combined diff is approved, Repository Integrity and required runtime checks pass, the combined commit/push lands, required GitHub CI/Pages pass, and Live Working State plus repository current-state owners are reconciled.

# Runtime Review Defect Lock — 2026-08-28

The first user browser review of the staged A+B candidate is **FAIL**. This blocks the transition to Subphase C. Static/data PASS status is retained only for the checks that actually passed; it does not override the runtime findings.

## B repair scope — corrected from review

- Required **Lure/Bait** in **What You Need** must use the same established component-card grammar as unaffected Rigs: checkbox, unchecked required item included in the Missing count, and clickable `ⓘ` detail/recognition popover. This extends the existing Rig component check; it is not a new readiness model.
- Use existing Tackle component cards/popovers such as Bobber Stop / Clip-on Bobber as the presentation reference. The Primary Lure image and useful Lure/Bait details belong inside the `ⓘ` popover.
- Remove the oversized full-width primary Lure/Bait image from the Rig page; this is the same component-popover defect, not a separate media feature.
- Add canonical Lure/Bait recognition Media for **Paddle-tail Swimbait** and **Tube**. Neither currently has a reference Media image, so Weighted Swimbait Hook Rig and Tube Jig Rig cannot yet provide the required `ⓘ` recognition popover.
- Preserve the five Direct-Tie configuration identities while refining the **Setup Type / Lure Type** selector styling and accessibility.
- **Alphabetize the Core Rig cards**, consistent with all other Rig card groups. Core is not a special teaching-order exception.
- Rewrite tie/attachment instructions for beginner sufficiency: identify the exact line-tie point for each lure/rig, how to recognize it, whether a split ring/swivel is retained, and where the knot is tied.
- Revalidate tutorial playback from a **served/GitHub environment**. Errors 153/15 occurred from the local file copy, but existing committed Rig tutorials fail locally as well and load correctly from the GitHub-served application. Do not replace otherwise-approved videos solely because `file://` playback fails.
- Jerkbait and Spoon tutorial selection remains open while the user researches suitable tying/setup videos. Do not lock the previously supplied candidates and do not silently use manufacturer/reference pages as the final tutorial presentation.
- Preserve Fish guidance behavior that successfully opens Direct-Tie with Inline Spinner selected.
- Repair **Good Conditions** contextual references: browser review found no popover at all. The fix must stay within RP-A4—shared lightweight Condition popover backed by `CONDITION_DATA`, no standalone Conditions destination and no Rig↔Condition relationship.

## Revalidation gate

After repair: run targeted data/static validation, verify alphabetized Core ordering and established component/readiness behavior deterministically, then repeat user browser checks for all five Direct-Tie configurations, both new Rigs, served-environment tutorial behavior, Lure/Bait/Tackle popovers, Fish configured-link navigation, Good Conditions popovers, and narrow/mobile/keyboard/focus behavior. C remains blocked until PASS.


# Second Runtime Review — 2026-08-29 — PARTIAL PASS / FOLLOW-UP REPAIR STAGED

Accepted: refined Direct-Tie selector; Inline Spinner, Spinnerbait, Crankbait, Jerkbait, Spoon, Weighted Swimbait Hook Rig, and Tube Jig Rig presentations; Fish→configured Inline Spinner navigation.

The resulting bounded follow-up is now staged and targeted PASS:

1. **Best For:** Direct-Tie configuration and new-Rig copy is concise/high-signal.
2. **Good Conditions:** each Direct-Tie lure has its own validated presentation set rather than inheriting one repeated list.
3. **Conditions vocabulary:** pilot scope expands from 33 to **35** records by adding Light Cover and Heavy Cover under Cover / Structure. This does not change the flat model/category set or create suitability relationships.
4. **Fish references:** genuine Fish habitat/waterbody equivalents open the shared Condition popover; Cold Water, generic Current, and Mud remain plain because no safe canonical equivalence exists.
5. **Popover behavior:** shared Condition/Tackle/Lure-Bait reference popovers center in the viewport, contain wheel/touch scrolling, lock background-page scrolling, and restore the prior page position on close.
6. **Difficulty:** Weighted Swimbait Hook Rig and Tube Jig Rig remain Beginner+ after validation.
7. **Tutorial playback:** served GitHub playback confirms current Weighted Swimbait Hook and Tube Jig videos load; local `file://` errors were environmental.
8. **Tube Jig tutorial content:** REPAIRED. The earlier Arcasting selection was superseded after external-site playback was disabled; the current served-working tutorial is *How To Rig A Tube Bait The Right Way* by BassResource - The Ultimate Bass Fishing Resource (`EibSWhI6nbM`).

**Gate:** Subphase C remains BLOCKED until this staged follow-up passes browser review.


# Third Runtime Repair Checkpoint — 2026-08-29

The third review accepts Condition popover placement and scroll behavior. The remaining bounded UX/content repair is staged: every current Fish habitat/water chip has a live explanation; canonical equivalents use Conditions while Fish-only `Cold Water`, generic `Current`, and `Mud` use Fish Habitat explanations so the locked Condition semantics are not distorted. Rig Good Conditions presents canonical Condition references only. Shared chip geometry is normalized to the compact existing Rig-link treatment. Best For values are shortened to high-signal phrases. Jerkbait has no embedded tutorial until a suitable hard-bait video is approved. Spoon tutorial is Anglers `pLsX7nhM1qk`; Tube Jig tutorial is BassResource `EibSWhI6nbM`. Targeted checks pass; runtime re-review remains the gate to Subphase C.


# Third Runtime Review Checkpoint — 2026-08-29

Status: **PARTIAL PASS / FOURTH BOUNDED UX REPAIR REQUIRED**.

Accepted in browser review:

- shared Condition/reference popovers open centered in the viewport;
- popover scrolling is contained correctly and no longer scrolls the underlying Rig page;
- Tube Jig tutorial `EibSWhI6nbM` (*How To Rig A Tube Bait The Right Way* — BassResource - The Ultimate Bass Fishing Resource) loads correctly.

Remaining blocking UX defects:

1. Condition/Fish reference chips are still too large. Use the existing `Use these knots for:` context-chip padding/density as the compact geometry reference rather than the larger current Good Conditions treatment.
2. Clickable Condition/Fish knowledge chips and static **Best For** labels currently share essentially the same visual treatment. This is rejected because users cannot tell which chips open additional knowledge. Clickable knowledge/reference chips require a distinct accent/background treatment; Best For remains a neutral/static label treatment.
3. Best For wording should remain short label-level guidance; review only values that still produce awkwardly long chips after the styling distinction is corrected.

Semantic boundary remains unchanged: Conditions are Reference Knowledge, Best For is Rig presentation/context, and no Rig↔Condition or Fish↔Condition relationship is created by these controls. All Fish habitat/water labels retain a live reference action through either a canonical Condition or Fish-owned habitat explanation.

**Separate UX Design Audit carry-forward:** review the full Rig **Knots You'll Tie** section. Attachment/application wording and grouping are inconsistent across pages (for example, `Use these knots for:` chips on some Rigs versus per-connection headings such as `Main line or leader to inline spinner` on others). Standardize that later as a cross-Rig UX rule; do not broaden the current Subphase B repair into a site-wide Knot/Rig redesign.

**Gate:** Subphase B is PASS. Subphase C — Techniques + Compatibility is next after normal startup verification.


# Fourth Runtime Review — 2026-08-30 — PASS / SUBPHASE B COMPLETE

The user approved Review 4. The final bounded Subphase B UX repair is accepted:

- clickable Condition/Fish knowledge-reference chips use a distinct interactive accent/background;
- knowledge-reference chips use the approved compact contextual density;
- passive Best For labels remain neutral and visually distinct;
- previously accepted centered popovers, scroll containment/background lock, Direct-Tie/Rig behavior, Fish configured navigation, and Tube Jig served playback remain preserve/PASS items.

**Subphase B is complete / PASS. Subphase C — Techniques + Compatibility is next.** Review 4's CSS remains an approved Drive Current change until committed by the user; ChatGPT has not committed or pushed it.

**UX Design Audit carry-forward:** add a site-wide knowledge-card element standardization pass. Inventory every recurring knowledge-card element across implemented domains and normalize semantically equivalent headings, chips/labels, links, reference/popover triggers, metadata, controls, media containers, spacing, interaction states, typography, and mobile density. Intentional differences require a semantic reason. Preserve the accepted distinction between clickable knowledge/reference chips and passive labels such as Best For. The previously recorded cross-Rig Knots You'll Tie attachment/application consistency item remains open in that audit.

**Exact resume:** begin Subphase C production implementation using the closed C1–C3 plan. Re-verify GitHub `main` at `3b5e77f0772b306977edb0252d5f9004069318f7`, fetch matching Drive Current source, then implement only the approved six-file scope and run the exact validation contract before review/commit.
