/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: data/techniques.js
   PURPOSE: Provides canonical reusable Technique Reference
   Knowledge for presentation instruction and Compatibility.
   ========================================================== */

"use strict";

const TECHNIQUE_DATA_BUILD_INFO = Object.freeze({
    file: "data/techniques.js",
    milestone: "Recommendation Prerequisites Foundation — Techniques + Compatibility"
});

const TECHNIQUE_DATA = Object.freeze([
    {
            id: "steady-retrieve",
            name: "Steady Retrieve",
            summary: "Move the presentation continuously through the water at a generally consistent pace.",
            createdVersion: "0.7.0",
            lastModifiedVersion: "0.7.0",
            isActive: true,
            aboutTechnique: "A Steady Retrieve moves a lure continuously through the water at a generally consistent pace. The goal is to establish predictable movement without unnecessary changes in speed or rod action. The lure's design determines much of its movement.",
            presentationSteps: [
                "Choose a starting depth. Cast your lure into the area you want to fish. If it sinks, give it time to reach the part of the water you want to cover before beginning the retrieve.",
                "Reel at an even pace. Turn the reel handle smoothly at a comfortable, repeatable speed that keeps the lure moving and working as intended. Do not add deliberate stops.",
                "Keep the rod controlled. Hold the rod fairly steady and make only small tip adjustments needed to control the lure's path or keep the line clear.",
                "Feel for changes. Keep reeling while noticing the lure's normal pull. A tap, sudden heaviness, or unexpected stop may be a fish or an obstruction; check before continuing."
            ],
            readingPresentation: "Pay attention to the lure's normal resistance as you retrieve. Spinnerbait blades, swimming tails, and other moving components can produce recognizable feedback through the rod. An unexpected change may indicate a strike, obstruction, or change in lure action.",
            strikeCues: [
                "A sudden tap, added weight, or unexpected stop during the retrieve."
            ],
            commonMistakes: [
                { mistake: "Frequently changing speed without intending to can make the presentation difficult to control.", correction: "Begin with a smooth, repeatable retrieve before deliberately experimenting with speed." }
            ],
            beginnerTips: [
                "Start with a comfortable pace you can repeat consistently.",
                "Focus on smoothness before experimenting with variations."
            ],
            applicationGuidance: "Focus on maintaining a consistent retrieval pace. This can produce a swimming action, but the defining skill is controlled, continuous retrieval."
    },
    {
            id: "stop-and-go-retrieve",
            name: "Stop-and-Go Retrieve",
            summary: "Alternate periods of forward retrieve with deliberate pauses.",
            createdVersion: "0.7.0",
            lastModifiedVersion: "0.7.0",
            isActive: true,
            aboutTechnique: "Stop-and-Go alternates forward movement with deliberate pauses. Depending on its design, a lure may rise, sink, suspend, or settle during the pause. These changes in movement are part of the presentation.",
            presentationSteps: [
                "Start moving the lure. Cast and reel smoothly for a short stretch after the lure reaches the depth where you want to fish.",
                "Make a real pause. Stop turning the handle. Depending on its design, the lure may rise, hang in place, or sink. Watch the line and avoid pulling the lure forward during the pause.",
                "Retrieve again. Begin reeling smoothly to move the lure forward. Notice any line movement or added weight as it starts moving again.",
                "Repeat the pattern. Alternate short periods of reeling and clear pauses. Once you can control the rhythm, try different pause lengths deliberately."
            ],
            readingPresentation: "Observe how the lure behaves when you stop reeling and how it responds when movement resumes. Watch the line during pauses, particularly when the lure is falling. Bites can occur when the lure stops or begins moving again.",
            strikeCues: [
                "A tap, line movement, or added weight during the pause or immediately after the retrieve resumes."
            ],
            commonMistakes: [
                { mistake: "Pausing without maintaining line awareness can make strikes difficult to recognize.", correction: "Keep enough control to detect unexpected movement while allowing the lure to respond naturally during the pause." }
            ],
            beginnerTips: [
                "Begin with a simple, repeatable retrieve-and-pause rhythm.",
                "Pay particular attention when the presentation changes from moving to paused."
            ]
    },
    {
            id: "twitch-and-pause",
            name: "Twitch and Pause",
            summary: "Use short rod movements to make the presentation dart or pulse, separated by deliberate pauses.",
            createdVersion: "0.7.0",
            lastModifiedVersion: "0.7.0",
            isActive: true,
            aboutTechnique: "Twitch and Pause uses short rod movements to create sudden changes in lure direction or movement, followed by deliberate pauses. Unlike a retrieve driven primarily by reeling, this Technique depends on controlled rod action.",
            presentationSteps: [
                "Get the line under control. Cast and reel in large loops of loose line so the rod can move the lure. With a jerkbait, leave a little controlled slack so it can dart without pulling it constantly forward.",
                "Twitch with the rod. Make one or two short movements of the rod tip to make the lure dart or pulse. Use a small wrist movement rather than a long sweep of the rod.",
                "Recover loose line. Turn the reel only enough to pick up excess slack after the twitches. The rod creates the action; continuous reeling should not replace it.",
                "Pause, watch, and repeat. Stop moving the rod and let the lure respond according to its design. Watch the line for a jump or tightening, then begin another twitch-and-pause sequence."
            ],
            readingPresentation: "Watch for the lure's response to each twitch. During the pause, monitor the line for unexpected movement, tightening, or added weight. Keep the sequence controlled rather than continuously working the rod.",
            strikeCues: [
                "The line jumps, tightens, or feels heavier during a pause."
            ],
            commonMistakes: [
                { mistake: "Long sweeping rod movements or continuous reeling may prevent the intended dart-and-pause behavior.", correction: "Shorten the rod movements and make each pause deliberate." }
            ],
            beginnerTips: [
                "Keep the rod movements short rather than sweeping.",
                "Let the pause be a distinct part of the Technique."
            ],
            applicationGuidance: "With a Jerkbait: Start with a little slack in the line, twitch the rod tip, then point the tip back toward the lure so it can dart and pause. Watch the line for strikes and reel in excess slack before the next twitch; avoid pulling the lure forward continuously."
    },
    {
            id: "swim",
            name: "Swim",
            summary: "Move the presentation through the water in a controlled horizontal or diagonal path.",
            createdVersion: "0.7.0",
            lastModifiedVersion: "0.7.0",
            isActive: true,
            aboutTechnique: "Swim moves a presentation through the water along a controlled horizontal or diagonal path. The emphasis is on guiding the bait through the intended part of the water column, rather than repeatedly lifting it from the bottom.",
            presentationSteps: [
                "Choose a swimming depth. Cast the bait and allow it to reach the level of water where you want it to travel. It does not have to touch bottom first.",
                "Guide it forward. Use the reel, the rod, or both to move the bait through the water in a controlled horizontal or slightly angled path. Let the bait's own swimming action work.",
                "Keep light contact. Maintain enough tension to follow the bait's movement and notice an unusual thump, without repeatedly jerking or stopping it.",
                "Maintain the path. Continue through the chosen depth. If the bait keeps striking bottom when you do not intend it to, change the rod angle or retrieve speed rather than hopping it upward repeatedly."
            ],
            readingPresentation: "Pay attention to the bait's normal movement and how much line tension is needed to maintain control. An unexpected thump, added resistance, or interruption may indicate a strike.",
            strikeCues: [
                "A thump, sudden load, or interruption in the presentation's normal movement."
            ],
            commonMistakes: [
                { mistake: "Allowing the bait to repeatedly strike bottom unintentionally can change the presentation into a series of hops.", correction: "Adjust retrieve speed, rod position, or both to maintain the intended swimming path." }
            ],
            beginnerTips: [
                "Concentrate first on maintaining a controlled travel path.",
                "Learn how the presentation normally feels so changes are easier to recognize."
            ],
            applicationGuidance: "Focus on the path the bait follows through the water. A steady retrieve can maintain that path, but controlled changes in speed or rod movement may also be appropriate."
    },
    {
            id: "hop",
            name: "Hop",
            summary: "Lift the presentation a short distance from the bottom and allow it to fall or settle again.",
            createdVersion: "0.7.0",
            lastModifiedVersion: "0.7.0",
            isActive: true,
            aboutTechnique: "Hopping moves a bait upward a short distance from the bottom before allowing it to fall and settle again. The angler repeats this movement to work the presentation along the bottom rather than retrieving it continuously.",
            presentationSteps: [
                "Find the bottom. Let your bait sink until the line stops moving or becomes loose. Gently tighten the line without dragging the bait away.",
                "Lift the bait. Raise your rod tip a short distance to lift the bait off the bottom. Start with small movements rather than large upward sweeps.",
                "Let it fall. Lower the rod tip as the bait sinks again. Keep enough control of the line to notice a bite, but allow the bait to fall naturally.",
                "Recover and repeat. When the bait reaches the bottom, reel in the excess loose line (slack). Repeat the lift-and-fall movement to work the bait along the bottom."
            ],
            readingPresentation: "You should be able to recognize when the bait contacts the bottom, rises during the rod lift, and settles again. Watch the line during the fall. A sudden jump, unusual movement, or unexpected weight may indicate a strike.",
            strikeCues: [
                "Unexpected weight, a tap, or line movement during the fall or after the presentation settles."
            ],
            commonMistakes: [
                { mistake: "If the bait travels too far forward, reduce the size of the rod lift.", correction: "If bottom contact becomes difficult to recognize, allow more time for the presentation to settle before repeating." }
            ],
            beginnerTips: [
                "Use small lifts first.",
                "Check for added weight before beginning the next hop."
            ]
    },
    {
            id: "drag",
            name: "Drag",
            summary: "Pull the presentation along the bottom while maintaining controlled bottom contact.",
            createdVersion: "0.7.0",
            lastModifiedVersion: "0.7.0",
            isActive: true,
            aboutTechnique: "Dragging moves a presentation along the bottom using a controlled rod pull. Rather than repeatedly lifting the bait, the angler maintains bottom contact while advancing the presentation. On some Rigs, such as the Carolina Rig, the bait trails behind the weight.",
            presentationSteps: [
                "Find the bottom. Cast and allow the bait or weight to sink until it reaches bottom. Reel in excess loose line without pulling the rig away.",
                "Pull with the rod. Move the rod slowly to the side or slightly upward so the presentation creeps along the bottom. Keep the pull low and controlled rather than lifting it into a hop.",
                "Stop and recover line. Pause the rod movement and turn the reel just enough to take up the loose line created by the pull.",
                "Feel bottom and repeat. Check that the bait is still touching or close to bottom, then make another short pull. Notice resistance that differs from ordinary rocks or bottom contact."
            ],
            readingPresentation: "Pay attention to the normal resistance and changes in bottom texture as the presentation moves. Unexpected weight, a tap, or resistance that feels different from ordinary bottom contact may indicate a strike. Bottom obstructions can produce similar sensations, so learning the normal feel of the presentation is important.",
            strikeCues: [
                "Added weight, a tap, or resistance that feels different from normal bottom contact."
            ],
            commonMistakes: [
                { mistake: "Lifting the rod too aggressively can turn the presentation into a series of hops.", correction: "Use slower, lower rod movements to maintain bottom contact. Recover slack with the reel rather than constantly reeling the presentation forward." }
            ],
            beginnerTips: [
                "Move the presentation with the rod and use the reel mainly to recover line.",
                "Learn the normal feel of the bottom so unusual resistance stands out."
            ]
    },
    {
            id: "shake",
            name: "Shake",
            summary: "Use small rod-tip movements to make the presentation quiver with very little forward movement.",
            createdVersion: "0.7.0",
            lastModifiedVersion: "0.7.0",
            isActive: true,
            aboutTechnique: "Shaking uses small rod-tip movements to make a bait quiver or pulse while remaining in approximately the same location. It is useful for creating subtle movement without deliberately moving the entire presentation across the bottom.",
            presentationSteps: [
                "Position the bait. Cast or lower your bait to the intended spot and take up enough loose line to stay aware of it without pulling it away.",
                "Make tiny rod-tip movements. Use short, gentle pulses of your wrist or rod tip to make the bait quiver. The movement should be subtle, not a hard lift.",
                "Keep it in one area. Avoid winding the reel continuously or sweeping the rod. The bait should move without traveling far forward.",
                "Pause or reposition. Stop briefly, watch for a change in line tension, and repeat. If you want to fish a new spot, move the bait deliberately before shaking again."
            ],
            readingPresentation: "Pay attention to how the bait responds to small movements and maintain enough line control to recognize changes. An unexpected increase or decrease in resistance, or a presentation that stops responding normally, may indicate a strike.",
            strikeCues: [
                "The presentation suddenly feels heavier, lighter, or stops responding normally."
            ],
            commonMistakes: [
                { mistake: "Large rod movements can lift or pull the presentation away from its intended position.", correction: "Reduce the movement to small, controlled pulses, allowing the bait to move without advancing the Rig unnecessarily." }
            ],
            beginnerTips: [
                "Think small movements rather than visible rod sweeps.",
                "Let the presentation remain in roughly the same area while shaking."
            ]
    },
    {
            id: "deadstick",
            name: "Deadstick",
            summary: "Intentionally leave the presentation mostly motionless for a period while maintaining awareness of it.",
            createdVersion: "0.7.0",
            lastModifiedVersion: "0.7.0",
            isActive: true,
            aboutTechnique: "Deadsticking means intentionally leaving a bait mostly motionless for a period of time. Depending on the Rig, the bait may rest near the bottom or remain suspended. The technique relies on a deliberate pause while the angler continues monitoring the presentation.",
            presentationSteps: [
                "Place the bait. Cast or lower the bait into the spot where you want it to stay, and allow it to reach its intended depth or position.",
                "Stop adding movement. Keep the rod and reel still for a deliberate pause. The bait may move slightly with water or its own buoyancy, but you are not actively working it.",
                "Stay attentive. Watch the line and rod tip and feel for new weight or tension. Remove only troublesome loose line, taking care not to move the bait unnecessarily.",
                "Move or repeat. When the pause is over, reposition the bait or start another presentation. Let it settle and repeat another still period as needed."
            ],
            readingPresentation: "Watch for line movement, sudden tightening, added weight, or other changes while the bait is stationary. A lack of intentional rod movement does not eliminate the need to maintain line awareness.",
            strikeCues: [
                "Line movement, added weight, or tension appearing while the presentation is stationary."
            ],
            commonMistakes: [
                { mistake: "Repeatedly moving the bait prevents a genuine stationary presentation.", correction: "After positioning it, allow a deliberate period without additional movement. Remain attentive rather than treating the pause as an opportunity to ignore the line." }
            ],
            beginnerTips: [
                "Make the stationary period deliberate.",
                "Stay attentive even though you are not actively moving the presentation."
            ]
    },
    {
            id: "lift-and-fall",
            name: "Lift and Fall",
            summary: "Raise the presentation through the water and then allow it to descend before repeating.",
            createdVersion: "0.7.0",
            lastModifiedVersion: "0.7.0",
            isActive: true,
            aboutTechnique: "Lift and Fall raises a presentation through the water before allowing it to descend under control. Unlike a short bottom-oriented Hop, the movement may cover a greater vertical distance. Different Rig designs can also influence how the weight and bait behave during the descent.",
            presentationSteps: [
                "Lift through the water. With the bait in the intended area, raise the rod, turn the reel, or use both to move it upward a controlled distance.",
                "Stop lifting. Pause the upward motion so the bait can begin descending instead of being pulled continuously forward.",
                "Allow a controlled fall. Lower the rod tip as needed and let the bait sink, keeping enough line awareness to recognize its movement rather than dropping completely uncontrolled slack.",
                "Follow and repeat. Watch for a line jump, early stop, or unexpected weight during the fall. When the bait reaches the intended lower point, regain control and lift again."
            ],
            readingPresentation: "Pay particular attention during the fall. The line may jump, stop descending unexpectedly, or develop additional tension when a fish takes the bait. Learning the normal falling behavior helps make unusual changes easier to recognize.",
            strikeCues: [
                "The fall stops unexpectedly, the line jumps, or extra weight appears."
            ],
            commonMistakes: [
                { mistake: "Allowing excessive uncontrolled slack during the descent reduces awareness of the presentation.", correction: "Follow the falling bait with the rod while retaining sufficient line control to detect an unexpected stop or strike." }
            ],
            beginnerTips: [
                "Watch and feel the line during the descent.",
                "Keep each lift controlled enough that you can recognize the following fall."
            ]
    },
    {
            id: "vertical-jig",
            name: "Vertical Jig",
            summary: "Work the presentation primarily up and down beneath or nearly beneath the angler.",
            createdVersion: "0.7.0",
            lastModifiedVersion: "0.7.0",
            isActive: true,
            aboutTechnique: "Vertical Jigging works a presentation primarily up and down beneath, or nearly beneath, the angler. It allows repeated controlled movements in a relatively confined area without requiring a long horizontal retrieve. This can be performed from a boat, dock, or another position where the presentation can remain nearly vertical.",
            presentationSteps: [
                "Lower the bait nearly straight down. From a dock, boat, or similar position, lower the bait beneath or close to beneath your rod to the depth you want to fish.",
                "Keep the line mostly vertical. Hold your rod where the line enters the water at a fairly straight downward angle. If the bait drifts too far away, reposition or reset.",
                "Lift with the rod. Raise the rod tip a short, controlled distance to move the bait upward without sweeping it far to the side.",
                "Lower and repeat. Lower the tip so the bait falls again, watching for an unexpected stop or added weight. Repeat the up-and-down motion while maintaining line control."
            ],
            readingPresentation: "Monitor the line as the presentation rises and falls. A tap, unexpected weight, or a descent that stops sooner than expected may indicate a strike. The line angle also helps indicate whether the presentation is remaining approximately vertical.",
            strikeCues: [
                "A tap, added weight, or a fall that stops sooner than expected."
            ],
            commonMistakes: [
                { mistake: "Allowing the line angle to become too horizontal can change the presentation's movement.", correction: "Adjust positioning or line control to restore a more vertical presentation. Avoid introducing excessive slack during each descent." }
            ],
            beginnerTips: [
                "Smaller controlled lifts are easier to monitor.",
                "Pay close attention while the presentation is falling."
            ]
    },
    {
            id: "natural-drift",
            name: "Natural Drift",
            summary: "Allow moving water to carry the presentation naturally while using minimal imposed movement and managing line control.",
            createdVersion: "0.7.0",
            lastModifiedVersion: "0.7.0",
            isActive: true,
            aboutTechnique: "Natural Drift allows moving water to carry a bait through an intended fishing area with minimal movement imposed by the angler.\n\n\nThe objective is to let the bait travel with the current rather than pulling it faster or changing its path unnecessarily. This can be accomplished with floats or other suitable Rigs in moving water.",
            presentationSteps: [
                "Start in moving water. Cast or lower the bait where the current can carry it through the area you want to fish, often a little upstream of that area.",
                "Let the current move it. Allow the water to carry the bait naturally. Avoid reeling it steadily toward you or pulling it sideways faster than the flow.",
                "Manage the line gently. Move the rod tip to follow the drift and recover or feed out small amounts of line as needed. Avoid a large bow of loose line that pulls the bait off course.",
                "Follow and reset. Watch the float or line for an unexpected stop or change. Once the bait drifts past the useful area, reel in and make another presentation."
            ],
            readingPresentation: "Observe how the bait, float, or fishing line moves with the current. Learn what normal movement looks like as the presentation passes through the intended area.\n\n\nAn unexpected stop, acceleration, sideways movement, or tightening line may indicate a strike or contact with an obstruction.",
            strikeCues: [
                "The line stops, accelerates, changes direction, or develops unexpected tension."
            ],
            commonMistakes: [
                { mistake: "Pulling against the current excessively can cause the presentation to move unnaturally or leave its intended path.", correction: "Allow the current to carry the bait while managing enough line to prevent excessive drag or uncontrolled slack. Retrieve and reset when the drift is complete." }
            ],
            beginnerTips: [
                "Let the water provide most of the movement.",
                "Use line management to maintain control without forcing the presentation."
            ],
            applicationGuidance: "Let the current carry the bait at roughly the surrounding flow's pace, using careful line control to avoid dragging or accelerating it unnaturally. Maintain enough awareness to recognize a strike. A current-driven presentation can be both Natural Drift and Drift when the bait follows the current with minimal added drag."
    },
    {
            id: "float-presentation",
            name: "Float Presentation",
            summary: "Suspend a bait or presentation beneath a float that controls suspension and provides visible strike indication.",
            createdVersion: "0.7.0",
            lastModifiedVersion: "0.7.0",
            isActive: true,
            aboutTechnique: "Float Presentation suspends bait beneath a float at a selected depth. The float helps control the bait's position in the water column while providing a visible indication of movement or potential strikes.\n\n\nDepending on the Rig, the float may hold the bait at a fixed depth or allow the angler to adjust the depth for deeper water.",
            presentationSteps: [
                "Set how deep the bait hangs. Adjust the float or its depth stop so the bait will hang at the desired distance below the surface. The float is also called a bobber.",
                "Place the float in the water. Cast gently and let the bait sink beneath the float until the setup settles at the chosen depth.",
                "Allow the float to do its job. Let the float support or carry the bait while you keep the line reasonably controlled. Avoid reeling so much that you drag the float away.",
                "Watch and adjust. Look for a dip, sideways movement, or unexpected rise that may indicate a bite. If the bait is too shallow or deep, retrieve and change the float setting."
            ],
            readingPresentation: "Watch how the float behaves under normal conditions. Wind, current, and small bait movements can cause ordinary motion.\n\n\nA float that suddenly submerges, travels sideways, rises unexpectedly, or behaves differently from its normal pattern may indicate a strike.",
            strikeCues: [
                "The float submerges, moves sideways, rises unexpectedly, or behaves differently from its normal movement."
            ],
            commonMistakes: [
                { mistake: "Incorrect depth adjustment can place bait above or below the intended fishing zone.", correction: "Adjust the float position or depth stop to place the bait where intended.\n\n\nMaintain enough line control to respond to a bite without constantly pulling the float away from its position." }
            ],
            beginnerTips: [
                "Learn what the float looks like when nothing is happening.",
                "Treat any unusual float movement as a reason to become attentive."
            ]
    },
    {
            id: "tight-line",
            name: "Tight-Line Presentation",
            summary: "Maintain controlled line tension for direct contact and strike detection without relying on a float.",
            createdVersion: "0.7.0",
            lastModifiedVersion: "0.7.0",
            isActive: true,
            aboutTechnique: "Tight-Line Presentation maintains controlled tension between the angler and the bait. Rather than relying on a float to indicate movement, the angler detects changes through the fishing line and rod.\n\n\nThe objective is not to pull the line as tightly as possible, but to maintain sufficient contact to recognize changes while allowing the bait to remain in its intended position.",
            presentationSteps: [
                "Position the bait. Cast or lower the bait into the area you want to fish and allow it to reach the intended position.",
                "Remove unnecessary slack. Turn the reel slowly until you have light contact through the line. The goal is a gently tensioned line, not a hard pull.",
                "Hold that contact. Keep the rod steady enough to feel a tap, steady pull, or sudden slackening without dragging the bait from its spot.",
                "Make small adjustments. As current or the bait moves, reel in or give out small amounts of line to keep controlled contact. Check unusual changes in weight or line direction."
            ],
            readingPresentation: "Pay attention to small taps, steady pulls, unexpected weight, and sudden reductions in tension.\n\n\nA bite may cause the line to tighten, but it can also create slack when a fish moves toward the angler. Recognizing both changes is important.",
            strikeCues: [
                "A tap, pull, sudden slackening, or steady increase in weight."
            ],
            commonMistakes: [
                { mistake: "Maintaining excessive tension can unintentionally move the bait or sinker out of position.", correction: "Reduce tension until you retain useful contact without continuously dragging the presentation. As current or bait position changes, make small adjustments to maintain awareness." }
            ],
            beginnerTips: [
                "Aim for controlled contact rather than maximum tension.",
                "Notice both increases and decreases in tension."
            ]
    },
    {
            id: "bottom-presentation",
            name: "Bottom Presentation",
            summary: "Keep the bait or presentation on or immediately above the bottom as its primary presentation zone.",
            createdVersion: "0.7.0",
            lastModifiedVersion: "0.7.0",
            isActive: true,
            aboutTechnique: "Bottom Presentation keeps bait on or immediately above the bottom as its primary fishing zone. The bait may remain relatively stationary or be repositioned periodically.\n\n\nUnlike Hop or Drag, Bottom Presentation does not require a specific repeated movement pattern. The central objective is maintaining the bait's position near the bottom.",
            presentationSteps: [
                "Let the bait reach bottom. Cast or lower the rig and give its weight or bait time to sink to the lake or river bottom.",
                "Confirm its position. Watch for the line to stop sinking or feel the weight settle; gently remove excess slack without immediately pulling the rig away.",
                "Keep the bottom as the target. Let the bait stay on or just above bottom, monitoring the line for taps or movement. You do not need to keep hopping or dragging it.",
                "Recheck and reset. If current moves the rig or you lose track of its position, lower it back down or retrieve and cast again to keep fishing the intended bottom area."
            ],
            readingPresentation: "Learn how bottom contact and normal line tension feel with the selected Rig.\n\n\nA tap, steady pull, unexpected weight, or unexplained line movement may indicate a strike. Changes in current or sinker position can also affect what the angler feels.",
            strikeCues: [
                "A tap, pull, added weight, or unexplained line movement."
            ],
            commonMistakes: [
                { mistake: "The presentation may move away from the intended fishing area without the angler noticing, particularly in current.", correction: "Periodically confirm bottom position and adjust sinker placement, line control, or presentation location as necessary.\n\n\nAvoid unnecessarily lifting or dragging the bait if the objective is to keep it near the bottom." }
            ],
            beginnerTips: [
                "Learn how bottom contact feels with the setup you are using.",
                "Reconfirm position when you are unsure whether the presentation has moved away from bottom."
            ],
            applicationGuidance: "These are not mutually exclusive techniques. For example, a Basic Bottom Rig can combine Bottom Presentation to establish where the bait should remain with Tight-Line Presentation to maintain contact and recognize strikes. This distinction is particularly important for beginning anglers: one Technique describes the bait's position, while another describes how the angler maintains contact and detects bites."
    },
    {
            id: "troll",
            name: "Troll",
            summary: "Present a bait or lure behind a moving boat or other craft while controlling forward movement and line position.",
            createdVersion: "0.7.0",
            lastModifiedVersion: "0.7.0",
            isActive: true,
            aboutTechnique: "Trolling presents a bait or lure behind a moving boat or other suitable craft.\n\n\nThe craft's controlled forward movement pulls the presentation through the water. Boat speed, line deployment, lure design, and Rig configuration influence how the bait travels and where it runs in the water column.\n\n\nUnlike Drift, trolling relies on deliberately controlled forward travel rather than primarily allowing current or an uncontrolled drift to move the presentation.",
            presentationSteps: [
                "Put the bait behind the moving craft. Using a suitable Rig, deploy the lure or bait into the water behind a boat or other craft moving under controlled power. Keep line away from the motor and propeller.",
                "Let out working line. Feed out enough line for the presentation to run and move as intended, then engage the reel and keep the rod securely controlled.",
                "Maintain controlled travel. Keep the craft moving at a suitable steady pace while monitoring the rod, line position, and usual lure resistance. Depth and action depend on the chosen Rig and speed.",
                "Check changes and reset. If the rod loads suddenly or the lure's normal pull changes, respond to a possible fish, debris, or snag. Retrieve, inspect, and redeploy when needed."
            ],
            readingPresentation: "Become familiar with the normal resistance of the lure or bait while trolling.\n\n\nA sudden increase in load, unexpected change in rod movement, or unusual resistance may indicate a strike, debris, or a presentation that is no longer working as intended.",
            strikeCues: [
                "A sudden rod load, change in line tension, or interruption in the presentation's normal resistance."
            ],
            commonMistakes: [
                { mistake: "Failing to monitor lure action or line placement can result in a presentation running incorrectly without the angler noticing.", correction: "Maintain controlled travel, organize deployed lines, and inspect the lure or bait when resistance changes unexpectedly." }
            ],
            beginnerTips: [
                "Learn the normal resistance of the presentation while trolling.",
                "Keep line placement organized so the presentation remains controllable."
            ]
    },
    {
            id: "drift",
            name: "Drift",
            summary: "Allow boat movement or water movement to carry the presentation while actively managing line and position.",
            createdVersion: "0.7.0",
            lastModifiedVersion: "0.7.0",
            isActive: true,
            aboutTechnique: "Drift allows water movement or a drifting craft to carry a presentation through an intended fishing area.\n\n\nUnlike a presentation that the angler moves primarily by retrieving, the surrounding current or movement of the craft supplies much of the travel. The angler manages the line, position, and depth to maintain control.\n\n\nDrifting is not limited to boat fishing. A presentation cast into moving water can also be carried along an intended drift path.",
            presentationSteps: [
                "Cast or lower the presentation into the intended drift path, whether the movement comes from water current or a drifting craft.",
                "Let movement carry it. Allow the current or drifting craft to move the bait through the water instead of steadily reeling it toward you.",
                "Control line and position. Gently take up or feed out line to keep track of the bait and hold its intended general depth or zone without stopping the drift.",
                "Watch and reset. Pay attention to taps, added weight, or a sudden change in line angle. Once the bait moves out of the intended area, retrieve and begin another drift."
            ],
            readingPresentation: "Pay attention to the normal movement and tension of the line as the bait travels.\n\n\nUnexpected taps, additional weight, changes in line direction, or sudden tension may indicate a strike. Changes in current, bottom contour, or craft movement can also affect the presentation.",
            strikeCues: [
                "A tap, sudden load, line movement, or unexpected change in tension."
            ],
            commonMistakes: [
                { mistake: "Allowing uncontrolled slack can make it difficult to determine where the bait is traveling or recognize a strike.", correction: "Manage line as the presentation moves and periodically confirm that it remains in the intended fishing zone. Retrieve and reset when the drift moves beyond that area." }
            ],
            beginnerTips: [
                "Focus on line management rather than creating the movement yourself.",
                "Distinguish Drift from Natural Drift: Drift describes the presentation being carried with the moving platform/water while the angler manages line; Natural Drift specifically relies on current to carry the presentation with minimal imposed movement."
            ],
            applicationGuidance: "Allow moving water or a drifting craft to carry the bait through the intended area. Manage line and position so the bait stays in its intended zone and strikes remain detectable. This presentation can be fished from shore or a suitable craft where conditions allow; it does not require a boat. When current carries the bait with minimal added drag, Drift can overlap with Natural Drift."
    }
]);
