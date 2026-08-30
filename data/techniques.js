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
            presentationSteps: [
                "Begin the retrieve after the presentation reaches its intended starting position.",
                "Turn the reel smoothly at a repeatable pace.",
                "Keep the rod relatively stable and make only small corrections needed to maintain control.",
                "Continue the retrieve while maintaining awareness of changes in resistance."
            ],
            strikeCues: [
                "A sudden tap, added weight, or unexpected stop during the retrieve."
            ],
            commonMistakes: [
                "Constantly speeding up and slowing down unintentionally.",
                "Adding unnecessary rod movement that disrupts the continuous presentation."
            ],
            beginnerTips: [
                "Start with a comfortable pace you can repeat consistently.",
                "Focus on smoothness before experimenting with variations."
            ]
    },
    {
            id: "stop-and-go-retrieve",
            name: "Stop-and-Go Retrieve",
            summary: "Alternate periods of forward retrieve with deliberate pauses.",
            createdVersion: "0.7.0",
            lastModifiedVersion: "0.7.0",
            isActive: true,
            presentationSteps: [
                "Retrieve smoothly for a short interval.",
                "Stop the retrieve and allow the presentation to pause, settle, suspend, or fall naturally according to its design.",
                "Resume the retrieve smoothly.",
                "Repeat the retrieve-and-pause cycle."
            ],
            strikeCues: [
                "A tap, line movement, or added weight during the pause or immediately after the retrieve resumes."
            ],
            commonMistakes: [
                "Using completely random pause timing that makes the presentation difficult to control.",
                "Creating excessive uncontrolled slack during pauses."
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
            presentationSteps: [
                "Keep enough line control to move the presentation with the rod.",
                "Make one or more short rod-tip movements.",
                "Use the reel primarily to recover excess slack rather than drive the presentation.",
                "Pause before repeating the sequence."
            ],
            strikeCues: [
                "The line jumps, tightens, or feels heavier during a pause."
            ],
            commonMistakes: [
                "Reeling continuously through the twitch sequence.",
                "Eliminating the pause by working the rod continuously."
            ],
            beginnerTips: [
                "Keep the rod movements short rather than sweeping.",
                "Let the pause be a distinct part of the Technique."
            ]
    },
    {
            id: "swim",
            name: "Swim",
            summary: "Move the presentation through the water in a controlled horizontal or diagonal path.",
            createdVersion: "0.7.0",
            lastModifiedVersion: "0.7.0",
            isActive: true,
            presentationSteps: [
                "Begin moving the presentation through the intended water path.",
                "Use the reel, rod, or both to maintain controlled forward movement.",
                "Keep enough tension to maintain awareness of the presentation.",
                "Continue the swimming path without repeatedly contacting bottom unless the setup naturally does so."
            ],
            strikeCues: [
                "A thump, sudden load, or interruption in the presentation's normal movement."
            ],
            commonMistakes: [
                "Allowing excessive slack that removes control.",
                "Turning a swimming presentation into repeated bottom hops unintentionally."
            ],
            beginnerTips: [
                "Concentrate first on maintaining a controlled travel path.",
                "Learn how the presentation normally feels so changes are easier to recognize."
            ]
    },
    {
            id: "hop",
            name: "Hop",
            summary: "Lift the presentation a short distance from the bottom and allow it to fall or settle again.",
            createdVersion: "0.7.0",
            lastModifiedVersion: "0.7.0",
            isActive: true,
            presentationSteps: [
                "Establish bottom contact.",
                "Raise the rod enough to lift the presentation from the bottom.",
                "Allow it to fall back under control.",
                "Recover excess slack and repeat."
            ],
            strikeCues: [
                "Unexpected weight, a tap, or line movement during the fall or after the presentation settles."
            ],
            commonMistakes: [
                "Lifting so far that the presentation becomes a long sweeping retrieve.",
                "Losing all line awareness during the fall."
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
            presentationSteps: [
                "Establish bottom contact.",
                "Move the presentation forward with a controlled rod pull.",
                "Stop and recover the slack with the reel.",
                "Re-establish contact and repeat."
            ],
            strikeCues: [
                "Added weight, a tap, or resistance that feels different from normal bottom contact."
            ],
            commonMistakes: [
                "Lifting the presentation well off the bottom instead of dragging it.",
                "Reeling continuously and losing awareness of bottom contact."
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
            presentationSteps: [
                "Maintain enough line control to transmit small movements.",
                "Make short, subtle rod-tip pulses.",
                "Keep forward travel minimal.",
                "Pause or reposition as needed before repeating."
            ],
            strikeCues: [
                "The presentation suddenly feels heavier, lighter, or stops responding normally."
            ],
            commonMistakes: [
                "Moving the rod so aggressively that the presentation hops instead of shakes.",
                "Advancing the presentation too far with every movement."
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
            presentationSteps: [
                "Place the presentation where you intend it to remain.",
                "Stop actively moving it.",
                "Maintain appropriate line awareness without constantly disturbing the presentation.",
                "After the pause, reposition or resume another presentation sequence."
            ],
            strikeCues: [
                "Line movement, added weight, or tension appearing while the presentation is stationary."
            ],
            commonMistakes: [
                "Confusing deadsticking with ignoring the line completely.",
                "Constantly moving the presentation instead of allowing a genuine stationary period."
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
            presentationSteps: [
                "Raise the presentation with the rod, reel, or a controlled combination of both.",
                "Stop the upward movement.",
                "Allow the presentation to descend under control.",
                "Follow the line during the fall and repeat after regaining control."
            ],
            strikeCues: [
                "The fall stops unexpectedly, the line jumps, or extra weight appears."
            ],
            commonMistakes: [
                "Allowing uncontrolled slack during the fall.",
                "Beginning the next lift without checking whether the presentation has been intercepted."
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
            presentationSteps: [
                "Position the presentation below or close to directly below you.",
                "Maintain a reasonably vertical line angle.",
                "Lift the presentation with a controlled rod movement.",
                "Allow it to fall and repeat while maintaining line awareness."
            ],
            strikeCues: [
                "A tap, added weight, or a fall that stops sooner than expected."
            ],
            commonMistakes: [
                "Allowing excessive horizontal line angle so the presentation no longer behaves vertically.",
                "Creating uncontrolled slack on every drop."
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
            presentationSteps: [
                "Place the presentation where the water can begin carrying it.",
                "Allow the flow to move the presentation rather than actively retrieving it.",
                "Manage excess line so it does not create unnecessary drag or prevent strike detection.",
                "Follow the presentation through the drift and retrieve or reset when the drift is complete."
            ],
            strikeCues: [
                "The line stops, accelerates, changes direction, or develops unexpected tension."
            ],
            commonMistakes: [
                "Pulling the presentation faster than the surrounding water.",
                "Allowing so much uncontrolled slack that contact and strike detection are lost."
            ],
            beginnerTips: [
                "Let the water provide most of the movement.",
                "Use line management to maintain control without forcing the presentation."
            ]
    },
    {
            id: "float-presentation",
            name: "Float Presentation",
            summary: "Suspend a bait or presentation beneath a float that controls suspension and provides visible strike indication.",
            createdVersion: "0.7.0",
            lastModifiedVersion: "0.7.0",
            isActive: true,
            presentationSteps: [
                "Set the presentation to hang at the intended distance beneath the float.",
                "Place the float and presentation in the water.",
                "Allow the float to hold or carry the suspended presentation while keeping the line reasonably controlled.",
                "Watch the float for changes that may indicate contact or a strike."
            ],
            strikeCues: [
                "The float submerges, moves sideways, rises unexpectedly, or behaves differently from its normal movement."
            ],
            commonMistakes: [
                "Leaving excessive slack that makes the float difficult to control.",
                "Watching the line while ignoring obvious changes in the float."
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
            presentationSteps: [
                "Place the bait or presentation in position.",
                "Remove unnecessary slack until you have light, controlled contact.",
                "Maintain enough tension to detect changes without constantly pulling the presentation out of position.",
                "Adjust line as the presentation or water moves."
            ],
            strikeCues: [
                "A tap, pull, sudden slackening, or steady increase in weight."
            ],
            commonMistakes: [
                "Pulling so firmly that the presentation is constantly displaced.",
                "Allowing enough slack that the direct-contact benefit is lost."
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
            presentationSteps: [
                "Allow the presentation to reach the bottom.",
                "Confirm or periodically re-establish bottom position.",
                "Maintain sufficient line control to monitor the presentation.",
                "Reposition or reset as needed while keeping the bottom as the primary zone."
            ],
            strikeCues: [
                "A tap, pull, added weight, or unexplained line movement."
            ],
            commonMistakes: [
                "Losing awareness of whether the presentation is still near the bottom.",
                "Adding repeated movement that unintentionally changes the Technique into hopping or dragging."
            ],
            beginnerTips: [
                "Learn how bottom contact feels with the setup you are using.",
                "Reconfirm position when you are unsure whether the presentation has moved away from bottom."
            ]
    },
    {
            id: "troll",
            name: "Troll",
            summary: "Present a bait or lure behind a moving boat or other craft while controlling forward movement and line position.",
            createdVersion: "0.7.0",
            lastModifiedVersion: "0.7.0",
            isActive: true,
            presentationSteps: [
                "Deploy the presentation behind the moving craft.",
                "Establish enough line to let the presentation work normally.",
                "Maintain controlled forward travel and monitor line position.",
                "Retrieve, inspect, or reset the presentation when needed."
            ],
            strikeCues: [
                "A sudden rod load, change in line tension, or interruption in the presentation's normal resistance."
            ],
            commonMistakes: [
                "Deploying the presentation without confirming it is working properly.",
                "Ignoring changes in resistance that may indicate a strike, debris, or loss of normal action."
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
            presentationSteps: [
                "Deploy the presentation from the moving or drifting platform.",
                "Allow the platform or water movement to carry it.",
                "Manage line so the presentation remains controlled and in its intended general zone.",
                "Retrieve and reset when the drift no longer provides a useful controlled presentation."
            ],
            strikeCues: [
                "A tap, sudden load, line movement, or unexpected change in tension."
            ],
            commonMistakes: [
                "Letting line become so uncontrolled that presentation position is unknown.",
                "Actively retrieving continuously enough that the presentation is no longer being carried by the drift."
            ],
            beginnerTips: [
                "Focus on line management rather than creating the movement yourself.",
                "Distinguish Drift from Natural Drift: Drift describes the presentation being carried with the moving platform/water while the angler manages line; Natural Drift specifically relies on current to carry the presentation with minimal imposed movement."
            ]
    }
]);
