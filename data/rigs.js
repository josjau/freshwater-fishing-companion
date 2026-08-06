/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: data/rigs.js
   REPLACEMENT: MS2.4 - RIG DATA FOUNDATION
   PURPOSE: Provides canonical beginner-focused Rig records for
   browsing, instruction, search, and future tackle readiness.
   ========================================================== */

"use strict";

const RIG_DATA_BUILD_INFO = Object.freeze({
    file: "data/rigs.js",
    milestone: "MS2.4",
    replacement: "Rig Data Foundation"
});

const RIG_DATA = Object.freeze(
[
    {
        "id": "fixed-bobber-rig",
        "name": "Fixed Bobber Rig",
        "summary": "A simple float rig for presenting bait at a shallow, fixed depth.",
        "createdVersion": "0.2.4",
        "lastModifiedVersion": "0.2.4",
        "isActive": true,
        "difficulty": "Beginner",
        "useCases": [
            "Learning to fish",
            "Fishing shallow water",
            "Fishing with worms or small live bait"
        ],
        "conditionTags": [
            "Shallow Water",
            "Open Water",
            "Light Cover"
        ],
        "componentRequirements": [
            {
                "id": "fixed-bobber",
                "name": "Clip-on bobber",
                "quantity": 1,
                "required": true,
                "notes": "Attach at the depth you want the bait to hang."
            },
            {
                "id": "split-shot",
                "name": "Split shot",
                "quantity": 1,
                "required": false,
                "notes": "Add only if the bait needs help sinking."
            },
            {
                "id": "hook",
                "name": "Hook",
                "quantity": 1,
                "required": true,
                "notes": "Match hook size to the bait."
            },
            {
                "id": "bait",
                "name": "Live bait or small artificial bait",
                "quantity": 1,
                "required": true,
                "notes": "Worms are a simple beginner option."
            }
        ],
        "assemblySteps": [
            "Tie the hook to the end of the main line.",
            "Attach a small split shot above the hook if needed.",
            "Clip the bobber onto the line above the hook.",
            "Set the distance between bobber and hook to the desired depth.",
            "Add bait and lower the rig into the water to confirm balance."
        ],
        "setupNotes": [
            "A depth of two to four feet is a practical starting point.",
            "Use the smallest bobber that still supports the bait and weight."
        ],
        "commonMistakes": [
            "Using a bobber that is too large.",
            "Placing the bobber too close to the hook.",
            "Adding more weight than the bobber can support."
        ],
        "safetyNotes": [
            "Keep the hook pointed away from people while clipping on the bobber."
        ],
        "techniqueIds": [],
        "variationIds": [
            "slip-bobber-rig"
        ],
        "imageIds": []
    },
    {
        "id": "slip-bobber-rig",
        "name": "Slip Bobber Rig",
        "summary": "A depth-adjustable float rig for presenting bait at a controlled depth.",
        "createdVersion": "0.2.4",
        "lastModifiedVersion": "0.2.4",
        "isActive": true,
        "difficulty": "Beginner",
        "useCases": [
            "Fishing from shore",
            "Fishing around docks",
            "Presenting bait at a known depth"
        ],
        "conditionTags": [
            "Shallow Water",
            "Deep Water",
            "Open Water",
            "Light Cover"
        ],
        "componentRequirements": [
            {
                "id": "bobber-stop",
                "name": "Bobber stop",
                "quantity": 1,
                "required": true,
                "notes": "Controls the maximum fishing depth."
            },
            {
                "id": "stop-bead",
                "name": "Small bead",
                "quantity": 1,
                "required": true,
                "notes": "Prevents the stop from passing through the float."
            },
            {
                "id": "slip-float",
                "name": "Slip float",
                "quantity": 1,
                "required": true,
                "notes": "Choose a float sized for the bait and weight."
            },
            {
                "id": "split-shot",
                "name": "Split shot",
                "quantity": 1,
                "required": true,
                "notes": "Use enough weight to balance the float."
            },
            {
                "id": "hook",
                "name": "Hook",
                "quantity": 1,
                "required": true,
                "notes": "Match hook size to the bait."
            },
            {
                "id": "bait",
                "name": "Live bait or small artificial bait",
                "quantity": 1,
                "required": true,
                "notes": "Common choices include worms, minnows, or small jigs."
            }
        ],
        "assemblySteps": [
            "Slide the bobber stop onto the main line.",
            "Slide the bead onto the line below the bobber stop.",
            "Thread the main line through the slip float.",
            "Attach split shot below the float.",
            "Tie the hook to the end of the line.",
            "Move the bobber stop to set the fishing depth.",
            "Add bait and confirm that the float stands upright."
        ],
        "setupNotes": [
            "Start with the bait one to two feet above the bottom.",
            "Move the bobber stop to change depth without retying."
        ],
        "commonMistakes": [
            "Using too much weight and sinking the float.",
            "Setting the stop too shallow or too deep.",
            "Using a hook that is too large for the bait."
        ],
        "safetyNotes": [
            "Pinch split shot with pliers rather than your teeth.",
            "Keep hooks secured while adjusting the bobber stop."
        ],
        "techniqueIds": [],
        "variationIds": [
            "fixed-bobber-rig"
        ],
        "imageIds": []
    },
    {
        "id": "basic-bottom-rig",
        "name": "Basic Bottom Rig",
        "summary": "A straightforward bait rig that holds the offering near the bottom.",
        "createdVersion": "0.2.4",
        "lastModifiedVersion": "0.2.4",
        "isActive": true,
        "difficulty": "Beginner",
        "useCases": [
            "Bank fishing",
            "Fishing ponds and lakes",
            "Presenting bait near the bottom"
        ],
        "conditionTags": [
            "Deep Water",
            "Open Water",
            "Light Current",
            "Bottom Fishing"
        ],
        "componentRequirements": [
            {
                "id": "sliding-sinker",
                "name": "Sliding sinker",
                "quantity": 1,
                "required": true,
                "notes": "An egg or no-roll sinker works well."
            },
            {
                "id": "bead",
                "name": "Protective bead",
                "quantity": 1,
                "required": false,
                "notes": "Protects the knot from the sinker."
            },
            {
                "id": "barrel-swivel",
                "name": "Barrel swivel",
                "quantity": 1,
                "required": true,
                "notes": "Stops the sinker and connects the leader."
            },
            {
                "id": "leader-line",
                "name": "Leader line",
                "quantity": 1,
                "required": true,
                "notes": "Start with 12 to 24 inches."
            },
            {
                "id": "hook",
                "name": "Hook",
                "quantity": 1,
                "required": true,
                "notes": "Match the hook to the bait."
            },
            {
                "id": "bait",
                "name": "Bait",
                "quantity": 1,
                "required": true,
                "notes": "Use bait appropriate for the water and local rules."
            }
        ],
        "assemblySteps": [
            "Slide the sinker onto the main line.",
            "Slide on a bead below the sinker if using one.",
            "Tie the main line to one eye of the swivel.",
            "Tie the leader to the other swivel eye.",
            "Tie the hook to the free end of the leader.",
            "Add bait and cast with a controlled motion.",
            "Reel in slack until the line is lightly tensioned."
        ],
        "setupNotes": [
            "Use the lightest sinker that maintains bottom contact.",
            "A shorter leader reduces tangles during casting."
        ],
        "commonMistakes": [
            "Using more weight than necessary.",
            "Leaving excessive slack after casting.",
            "Casting too forcefully and throwing off the bait."
        ],
        "safetyNotes": [
            "Check behind you before casting a weighted rig.",
            "Use controlled casts because sinkers can cause injury."
        ],
        "techniqueIds": [],
        "variationIds": [
            "carolina-rig"
        ],
        "imageIds": []
    },
    {
        "id": "texas-rig",
        "name": "Texas Rig",
        "summary": "A weed-resistant soft-plastic rig built around a bullet weight and offset hook.",
        "createdVersion": "0.2.4",
        "lastModifiedVersion": "0.2.4",
        "isActive": true,
        "difficulty": "Beginner",
        "useCases": [
            "Fishing around grass",
            "Fishing brush and timber",
            "Presenting soft plastics near cover"
        ],
        "conditionTags": [
            "Heavy Cover",
            "Sparse Cover",
            "Shallow Water",
            "Deep Water"
        ],
        "componentRequirements": [
            {
                "id": "bullet-weight",
                "name": "Bullet weight",
                "quantity": 1,
                "required": true,
                "notes": "Use the lightest weight that reaches the target depth."
            },
            {
                "id": "offset-worm-hook",
                "name": "Offset worm hook",
                "quantity": 1,
                "required": true,
                "notes": "Match hook size to the soft plastic."
            },
            {
                "id": "soft-plastic",
                "name": "Soft plastic bait",
                "quantity": 1,
                "required": true,
                "notes": "Worms and creature baits are common choices."
            },
            {
                "id": "weight-peg",
                "name": "Weight peg",
                "quantity": 1,
                "required": false,
                "notes": "Optional for keeping the weight close to the bait."
            }
        ],
        "assemblySteps": [
            "Slide the bullet weight onto the main line with the pointed end facing the rod.",
            "Tie the offset hook to the main line.",
            "Insert the hook point about one quarter inch into the head of the soft plastic.",
            "Bring the hook point out through the side of the bait.",
            "Slide the bait up the hook and rotate it around the offset.",
            "Lay the bait beside the hook to find where the point should re-enter.",
            "Insert the hook point straight through the body.",
            "Lightly bury the hook point under the plastic surface."
        ],
        "setupNotes": [
            "The bait should hang straight without twisting.",
            "Peg the weight only when thick cover makes it useful."
        ],
        "commonMistakes": [
            "Rigging the soft plastic crooked.",
            "Using a hook that is too small.",
            "Burying the hook point too deeply."
        ],
        "safetyNotes": [
            "Keep fingers clear of the hook point while threading the bait."
        ],
        "techniqueIds": [],
        "variationIds": [
            "carolina-rig"
        ],
        "imageIds": []
    }
]
);

console.info(
    `[Loaded] ${RIG_DATA_BUILD_INFO.file} | ` +
    `${RIG_DATA_BUILD_INFO.milestone} | ` +
    `${RIG_DATA_BUILD_INFO.replacement} | ` +
    `${RIG_DATA.length} records`
);
