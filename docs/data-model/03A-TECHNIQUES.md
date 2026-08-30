# Freshwater Fishing Companion

**Document:** 03A-TECHNIQUES.md  
**Document Revision:** 0.6.0  
**Document Status:** Approved  
**Implementation Status:** IMPLEMENTED / VALIDATED / CLOSED — 16 active Technique records; 69 Rig↔Technique + 54 Lure/Bait↔Technique Compatibility relationships active  
**Decision Baseline:** D003, D024, D056, D069

---

# Purpose

This document defines the implemented canonical Technique domain in Freshwater Fishing Companion.

A Technique describes **how** a lure, Rig, or other compatible setup is presented to fish. Technique is Reference Knowledge and owns reusable presentation behavior rather than physical assembly.

Current `main` implements the locked V1 Technique vocabulary in `data/techniques.js` / `TECHNIQUE_DATA` and the authored intrinsic Compatibility scope in `data/compatibility.js`. D069 plus RP-C1 through RP-C4 remain the governing V1 vocabulary, schema, relationship, and validation contract.

---

# Current Status

**Implemented / Validated / Closed.**

The Technique domain is implemented under D003. D024 assigns reusable presentation behavior to Technique and physical assembly/configuration to Rig. D056 assigns each Technique fact/relationship one semantic owner.

Current production Rigs do not store `techniqueIds[]`, and Technique has no inverse compatibility arrays merely for navigation. D069 assigns intrinsic Rig↔Technique and Lure/Bait↔Technique compatibility to the external typed Compatibility Relationship domain; Fish/Condition-specific suitability remains Recommendation Decision Knowledge.

---

# Design Philosophy

Technique represents presentation rather than equipment.

Reusable examples include concepts such as:

- Drag
- Hop
- Shake
- Swim
- Twitch
- Deadstick

A presentation instruction that remains meaningful across different compatible setups generally belongs to Technique. An instruction that depends on the physical construction or configuration of one Rig belongs to Rig.

The same semantic relationship must not be stored in both directions merely for navigation, search, or rendering convenience.

---

# Foundation Fields

Every canonical Technique inherits the Foundation entity standard:

```text
id
name
summary
createdVersion
lastModifiedVersion
isActive
```

Optional instructional fields are allowed only when the authored Technique demonstrates reusable value. Do not pre-populate empty placeholders.

---

# Approved V1 Instructional Contract — C2 LOCKED

Technique records use Foundation fields plus required `presentationSteps[]`. Sparse optional production fields are limited to `strikeCues[]`, `commonMistakes[]`, and `beginnerTips[]` when the approved record demonstrates reusable value. Separate `movementType`, `cadence`, `rodAction`, and `reelAction` fields are deferred for V1 because the approved production content does not require them and duplicating their information risks encoding contextual cadence as intrinsic Technique data.

No Technique category hierarchy is required in V1. RP-C1 locks the exact V1 vocabulary below; changing that vocabulary requires reopening the bounded Technique planning gate. Context-specific adjustments such as retrieve speed, countdown/depth, float-depth adjustment, weighting, current orientation, back-trolling direction, flutter-fall, or “slow the cadence in cold water” remain Recommendation Decision Knowledge or contextual modifiers rather than new Technique entities or intrinsic Technique fields.

# Relationship Ownership — Approved

Intrinsic compatibility is stored once outside Technique under the typed Compatibility Relationship architecture in `09-RELATIONSHIPS.md`:

- Rig ↔ Technique,
- Lure/Bait ↔ Technique.

Technique does not store `compatibleRigIds[]`, `compatibleLureIds[]`, `targetFishIds[]`, or `recommendedConditionIds[]` as inverse/contextual convenience arrays. Reverse navigation is derived.

Fish/Condition-specific Technique selection, ranking, rationale, and contextual cadence/presentation adjustments belong to Recommendation Decision Knowledge.

# Media Ownership

Technique media follows the shared D056 Media ownership model when/if Technique-specific Media is added.

Technique records must not own inverse `imageIds[]` solely to locate Media. Canonical attachment belongs to Media through:

```text
ownerType: "technique"
ownerId: canonical Technique ID
```

Media-specific role or ordering fields are added only when a demonstrated multi-media requirement justifies them.

---

# Teaching Philosophy

Technique instruction should help an angler understand:

- what to do,
- what to observe,
- what a strike may feel like,
- common mistakes,
- and when to change presentation.

The goal is reusable understanding rather than duplicated Rig-specific prose.

---

# Recommendation Integration

Technique may eventually participate in recommendations involving Fish, Conditions, season, water clarity, cover, depth, experience, and available tackle.

Recommendation-specific ranking, rationale, confidence, and situational context belong to Decision Knowledge rather than being forced into the canonical Technique entity for convenience.

Commercial-product recommendations remain outside Technique unless a later approved architecture explicitly assigns a Technique-domain responsibility.

---

# Locked V1 Technique Vocabulary — RP-C1

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

# Production Contract — RP-C4 LOCKED

Technique production must validate the exact 16-item vocabulary, Foundation/lifecycle fields, meaningful summaries, lowercase kebab-case IDs, and only demonstrated optional instructional fields. It must not introduce Fish-specific guidance, Condition-specific advice, Rig construction instructions, inverse Compatibility arrays, or contextual recommendation fields.

Rig↔Technique and Lure/Bait↔Technique authored scopes are canonical Compatibility data under `09-RELATIONSHIPS.md`. Three-part Rig + Lure/Bait + Technique validity is derived from active pairwise Compatibility intersection.

# Locked V1 Production Content — C2 EXACT CONTENT LOCK

The following 16 records are the approved production copy for `TECHNIQUE_DATA`. Foundation lifecycle values are supplied in production; the content below locks `summary` and the approved sparse instructional arrays. `presentationSteps[]` is required. `strikeCues[]`, `commonMistakes[]`, and `beginnerTips[]` are included only where approved. Separate `movementType`, `cadence`, `rodAction`, and `reelAction` fields are deferred for V1.

## `steady-retrieve` — Steady Retrieve

**Summary:** Move the presentation continuously through the water at a generally consistent pace.

**presentationSteps[]**
1. Begin the retrieve after the presentation reaches its intended starting position.
2. Turn the reel smoothly at a repeatable pace.
3. Keep the rod relatively stable and make only small corrections needed to maintain control.
4. Continue the retrieve while maintaining awareness of changes in resistance.

**strikeCues[]**
- A sudden tap, added weight, or unexpected stop during the retrieve.

**commonMistakes[]**
- Constantly speeding up and slowing down unintentionally.
- Adding unnecessary rod movement that disrupts the continuous presentation.

**beginnerTips[]**
- Start with a comfortable pace you can repeat consistently.
- Focus on smoothness before experimenting with variations.

## `stop-and-go-retrieve` — Stop-and-Go Retrieve

**Summary:** Alternate periods of forward retrieve with deliberate pauses.

**presentationSteps[]**
1. Retrieve smoothly for a short interval.
2. Stop the retrieve and allow the presentation to pause, settle, suspend, or fall naturally according to its design.
3. Resume the retrieve smoothly.
4. Repeat the retrieve-and-pause cycle.

**strikeCues[]**
- A tap, line movement, or added weight during the pause or immediately after the retrieve resumes.

**commonMistakes[]**
- Using completely random pause timing that makes the presentation difficult to control.
- Creating excessive uncontrolled slack during pauses.

**beginnerTips[]**
- Begin with a simple, repeatable retrieve-and-pause rhythm.
- Pay particular attention when the presentation changes from moving to paused.

## `twitch-and-pause` — Twitch and Pause

**Summary:** Use short rod movements to make the presentation dart or pulse, separated by deliberate pauses.

**presentationSteps[]**
1. Keep enough line control to move the presentation with the rod.
2. Make one or more short rod-tip movements.
3. Use the reel primarily to recover excess slack rather than drive the presentation.
4. Pause before repeating the sequence.

**strikeCues[]**
- The line jumps, tightens, or feels heavier during a pause.

**commonMistakes[]**
- Reeling continuously through the twitch sequence.
- Eliminating the pause by working the rod continuously.

**beginnerTips[]**
- Keep the rod movements short rather than sweeping.
- Let the pause be a distinct part of the Technique.

## `swim` — Swim

**Summary:** Move the presentation through the water in a controlled horizontal or diagonal path.

**presentationSteps[]**
1. Begin moving the presentation through the intended water path.
2. Use the reel, rod, or both to maintain controlled forward movement.
3. Keep enough tension to maintain awareness of the presentation.
4. Continue the swimming path without repeatedly contacting bottom unless the setup naturally does so.

**strikeCues[]**
- A thump, sudden load, or interruption in the presentation's normal movement.

**commonMistakes[]**
- Allowing excessive slack that removes control.
- Turning a swimming presentation into repeated bottom hops unintentionally.

**beginnerTips[]**
- Concentrate first on maintaining a controlled travel path.
- Learn how the presentation normally feels so changes are easier to recognize.

## `hop` — Hop

**Summary:** Lift the presentation a short distance from the bottom and allow it to fall or settle again.

**presentationSteps[]**
1. Establish bottom contact.
2. Raise the rod enough to lift the presentation from the bottom.
3. Allow it to fall back under control.
4. Recover excess slack and repeat.

**strikeCues[]**
- Unexpected weight, a tap, or line movement during the fall or after the presentation settles.

**commonMistakes[]**
- Lifting so far that the presentation becomes a long sweeping retrieve.
- Losing all line awareness during the fall.

**beginnerTips[]**
- Use small lifts first.
- Check for added weight before beginning the next hop.

## `drag` — Drag

**Summary:** Pull the presentation along the bottom while maintaining controlled bottom contact.

**presentationSteps[]**
1. Establish bottom contact.
2. Move the presentation forward with a controlled rod pull.
3. Stop and recover the slack with the reel.
4. Re-establish contact and repeat.

**strikeCues[]**
- Added weight, a tap, or resistance that feels different from normal bottom contact.

**commonMistakes[]**
- Lifting the presentation well off the bottom instead of dragging it.
- Reeling continuously and losing awareness of bottom contact.

**beginnerTips[]**
- Move the presentation with the rod and use the reel mainly to recover line.
- Learn the normal feel of the bottom so unusual resistance stands out.

## `shake` — Shake

**Summary:** Use small rod-tip movements to make the presentation quiver with very little forward movement.

**presentationSteps[]**
1. Maintain enough line control to transmit small movements.
2. Make short, subtle rod-tip pulses.
3. Keep forward travel minimal.
4. Pause or reposition as needed before repeating.

**strikeCues[]**
- The presentation suddenly feels heavier, lighter, or stops responding normally.

**commonMistakes[]**
- Moving the rod so aggressively that the presentation hops instead of shakes.
- Advancing the presentation too far with every movement.

**beginnerTips[]**
- Think small movements rather than visible rod sweeps.
- Let the presentation remain in roughly the same area while shaking.

## `deadstick` — Deadstick

**Summary:** Intentionally leave the presentation mostly motionless for a period while maintaining awareness of it.

**presentationSteps[]**
1. Place the presentation where you intend it to remain.
2. Stop actively moving it.
3. Maintain appropriate line awareness without constantly disturbing the presentation.
4. After the pause, reposition or resume another presentation sequence.

**strikeCues[]**
- Line movement, added weight, or tension appearing while the presentation is stationary.

**commonMistakes[]**
- Confusing deadsticking with ignoring the line completely.
- Constantly moving the presentation instead of allowing a genuine stationary period.

**beginnerTips[]**
- Make the stationary period deliberate.
- Stay attentive even though you are not actively moving the presentation.

## `lift-and-fall` — Lift and Fall

**Summary:** Raise the presentation through the water and then allow it to descend before repeating.

**presentationSteps[]**
1. Raise the presentation with the rod, reel, or a controlled combination of both.
2. Stop the upward movement.
3. Allow the presentation to descend under control.
4. Follow the line during the fall and repeat after regaining control.

**strikeCues[]**
- The fall stops unexpectedly, the line jumps, or extra weight appears.

**commonMistakes[]**
- Allowing uncontrolled slack during the fall.
- Beginning the next lift without checking whether the presentation has been intercepted.

**beginnerTips[]**
- Watch and feel the line during the descent.
- Keep each lift controlled enough that you can recognize the following fall.

## `vertical-jig` — Vertical Jig

**Summary:** Work the presentation primarily up and down beneath or nearly beneath the angler.

**presentationSteps[]**
1. Position the presentation below or close to directly below you.
2. Maintain a reasonably vertical line angle.
3. Lift the presentation with a controlled rod movement.
4. Allow it to fall and repeat while maintaining line awareness.

**strikeCues[]**
- A tap, added weight, or a fall that stops sooner than expected.

**commonMistakes[]**
- Allowing excessive horizontal line angle so the presentation no longer behaves vertically.
- Creating uncontrolled slack on every drop.

**beginnerTips[]**
- Smaller controlled lifts are easier to monitor.
- Pay close attention while the presentation is falling.

## `natural-drift` — Natural Drift

**Summary:** Allow moving water to carry the presentation naturally while using minimal imposed movement and managing line control.

**presentationSteps[]**
1. Place the presentation where the water can begin carrying it.
2. Allow the flow to move the presentation rather than actively retrieving it.
3. Manage excess line so it does not create unnecessary drag or prevent strike detection.
4. Follow the presentation through the drift and retrieve or reset when the drift is complete.

**strikeCues[]**
- The line stops, accelerates, changes direction, or develops unexpected tension.

**commonMistakes[]**
- Pulling the presentation faster than the surrounding water.
- Allowing so much uncontrolled slack that contact and strike detection are lost.

**beginnerTips[]**
- Let the water provide most of the movement.
- Use line management to maintain control without forcing the presentation.

## `float-presentation` — Float Presentation

**Summary:** Suspend a bait or presentation beneath a float that controls suspension and provides visible strike indication.

**presentationSteps[]**
1. Set the presentation to hang at the intended distance beneath the float.
2. Place the float and presentation in the water.
3. Allow the float to hold or carry the suspended presentation while keeping the line reasonably controlled.
4. Watch the float for changes that may indicate contact or a strike.

**strikeCues[]**
- The float submerges, moves sideways, rises unexpectedly, or behaves differently from its normal movement.

**commonMistakes[]**
- Leaving excessive slack that makes the float difficult to control.
- Watching the line while ignoring obvious changes in the float.

**beginnerTips[]**
- Learn what the float looks like when nothing is happening.
- Treat any unusual float movement as a reason to become attentive.

## `tight-line` — Tight-Line Presentation

**Summary:** Maintain controlled line tension for direct contact and strike detection without relying on a float.

**presentationSteps[]**
1. Place the bait or presentation in position.
2. Remove unnecessary slack until you have light, controlled contact.
3. Maintain enough tension to detect changes without constantly pulling the presentation out of position.
4. Adjust line as the presentation or water moves.

**strikeCues[]**
- A tap, pull, sudden slackening, or steady increase in weight.

**commonMistakes[]**
- Pulling so firmly that the presentation is constantly displaced.
- Allowing enough slack that the direct-contact benefit is lost.

**beginnerTips[]**
- Aim for controlled contact rather than maximum tension.
- Notice both increases and decreases in tension.

## `bottom-presentation` — Bottom Presentation

**Summary:** Keep the bait or presentation on or immediately above the bottom as its primary presentation zone.

**presentationSteps[]**
1. Allow the presentation to reach the bottom.
2. Confirm or periodically re-establish bottom position.
3. Maintain sufficient line control to monitor the presentation.
4. Reposition or reset as needed while keeping the bottom as the primary zone.

**strikeCues[]**
- A tap, pull, added weight, or unexplained line movement.

**commonMistakes[]**
- Losing awareness of whether the presentation is still near the bottom.
- Adding repeated movement that unintentionally changes the Technique into hopping or dragging.

**beginnerTips[]**
- Learn how bottom contact feels with the setup you are using.
- Reconfirm position when you are unsure whether the presentation has moved away from bottom.

## `troll` — Troll

**Summary:** Present a bait or lure behind a moving boat or other craft while controlling forward movement and line position.

**presentationSteps[]**
1. Deploy the presentation behind the moving craft.
2. Establish enough line to let the presentation work normally.
3. Maintain controlled forward travel and monitor line position.
4. Retrieve, inspect, or reset the presentation when needed.

**strikeCues[]**
- A sudden rod load, change in line tension, or interruption in the presentation's normal resistance.

**commonMistakes[]**
- Deploying the presentation without confirming it is working properly.
- Ignoring changes in resistance that may indicate a strike, debris, or loss of normal action.

**beginnerTips[]**
- Learn the normal resistance of the presentation while trolling.
- Keep line placement organized so the presentation remains controllable.

## `drift` — Drift

**Summary:** Allow boat movement or water movement to carry the presentation while actively managing line and position.

**presentationSteps[]**
1. Deploy the presentation from the moving or drifting platform.
2. Allow the platform or water movement to carry it.
3. Manage line so the presentation remains controlled and in its intended general zone.
4. Retrieve and reset when the drift no longer provides a useful controlled presentation.

**strikeCues[]**
- A tap, sudden load, line movement, or unexpected change in tension.

**commonMistakes[]**
- Letting line become so uncontrolled that presentation position is unknown.
- Actively retrieving continuously enough that the presentation is no longer being carried by the drift.

**beginnerTips[]**
- Focus on line management rather than creating the movement yourself.
- Distinguish Drift from Natural Drift: Drift describes the presentation being carried with the moving platform/water while the angler manages line; Natural Drift specifically relies on current to carry the presentation with minimal imposed movement.

# Future Enhancements

Potential later capabilities include animated demonstrations, video instruction, practice assistance, and adaptive recommendations. These are feature candidates rather than current schema requirements and require separate approval when pursued.

---

# Related Documents

- 01-FOUNDATION.md
- 02-FISH.md
- 03-RIGS.md
- 03B-CONDITIONS.md
- 05-TACKLE.md
- 09-RELATIONSHIPS.md
- ../DECISIONS.md
- ../../archive/workstreams/repository-audit/REPOSITORY-AUDIT-SECTION-5-DECISION.md

# RP-B2A — Rig Use-Envelope and Technique Presentation — LOCKED

Technique participates in Rig Detail as part of the unified **Best For / Good Conditions / Techniques** use-guidance section.

A Rig↔Technique Compatibility relationship is authored only when the Technique is genuinely usable within the Rig's normal intended use envelope, not merely mechanically possible. Compatible Technique entries are first-class Reference Knowledge links that open the canonical Technique knowledge surface.

Rig owns generic setup/assembly. Technique owns reusable presentation, retrieve, cadence, and movement instruction. Recommendation Decision Knowledge later combines Fish, Conditions, Rig, Lure/Bait, and the intrinsically compatible Technique set to determine which Technique(s) are contextually viable or recommended.

Intrinsic Compatibility defines eligibility; it does not perform contextual recommendation.

# RP-B2B — Dependency-Complete Technique Coverage — LOCKED

Before a new Lure/Bait or Rig enters the approved Version 1 prerequisite scope, evaluate the Technique knowledge needed to make that addition usable. Any new Rig must receive the genuinely viable Technique set defined by RP-B2A, and any new Lure/Bait must receive applicable Lure/Bait↔Technique compatibility for the authored scope. Do not add Technique entities or compatibility merely to fill a matrix; each relationship must represent legitimate normal use.

