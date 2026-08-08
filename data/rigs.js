/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: data/rigs.js
   PURPOSE: Provides canonical beginner-focused Rig records for
   browsing, instruction, verified references, and tackle readiness.
   ========================================================== */

"use strict";

const RIG_DATA_BUILD_INFO = Object.freeze({
    file: "data/rigs.js",
    milestone: "Core Rigs and Tackle Media"
});

const CORE_RIG_IDS = Object.freeze([
    "fixed-bobber-rig",
    "basic-bottom-rig",
    "jighead-soft-plastic",
    "inline-spinner-setup",
    "texas-rig",
    "slip-bobber-rig"
]);

const RIG_DATA = Object.freeze([
    {
        id: "fixed-bobber-rig",
        name: "Fixed Bobber Rig",
        summary: "A simple float rig for presenting bait at a shallow, fixed depth.",
        createdVersion: "0.2.4",
        lastModifiedVersion: "0.2.7",
        isActive: true,
        difficulty: "Beginner",
        useCases: [
            "Learning to fish",
            "Fishing shallow water",
            "Fishing with worms or small live bait"
        ],
        conditionTags: [
            "Shallow Water",
            "Open Water",
            "Light Cover"
        ],
        referenceLinks: [
            {
                label: "Wired2Fish — Bobber Fishing 101",
                url: "https://www.wired2fish.com/fishing-tips/bobber-fishing-101"
            },
            {
                label: "Norrik — Float Rig",
                url: "https://norrik.com/fishing-rigs/float-rig/"
            }
        ],
        componentRequirements: [
            {
                tackleId: "fixed-bobber",
                quantity: 1,
                required: true,
                notes: "Attach at the depth you want the bait to hang."
            },
            {
                tackleId: "split-shot",
                quantity: 1,
                required: false,
                notes: "Add only if the bait needs help sinking."
            },
            {
                tackleId: "hook",
                quantity: 1,
                required: true,
                notes: "Match hook size to the bait."
            },
            {
                tackleId: "bait",
                quantity: 1,
                required: true,
                notes: "Worms are a simple beginner option."
            }
        ],
        assemblySteps: [
            "Tie the hook to the end of the main line.",
            "Attach a small split shot above the hook if needed.",
            "Clip the bobber onto the line above the hook.",
            "Set the distance between bobber and hook to the desired depth.",
            "Add bait and lower the rig into the water to confirm balance."
        ],
        setupNotes: [
            "A depth of two to four feet is a practical starting point.",
            "Use the smallest bobber that still supports the bait and weight."
        ],
        commonMistakes: [
            "Using a bobber that is too large.",
            "Placing the bobber too close to the hook.",
            "Adding more weight than the bobber can support."
        ],
        safetyNotes: [
            "Keep the hook pointed away from people while clipping on the bobber."
        ],
        techniqueIds: [],
        variationIds: ["slip-bobber-rig"],
        imageIds: []
    },
    {
        id: "slip-bobber-rig",
        name: "Slip Bobber Rig",
        summary: "A depth-adjustable float rig for presenting bait at a controlled depth.",
        createdVersion: "0.2.4",
        lastModifiedVersion: "0.2.7",
        isActive: true,
        difficulty: "Beginner",
        useCases: [
            "Fishing from shore",
            "Fishing around docks",
            "Presenting bait at a known depth"
        ],
        conditionTags: [
            "Shallow Water",
            "Deep Water",
            "Open Water",
            "Light Cover"
        ],
        referenceLinks: [
            {
                label: "Wired2Fish — Slip Bobber Rigging and Tactics",
                url: "https://www.wired2fish.com/crappie-fishing/catch-more-crappies-with-slip-bobbers-rigging-and-tactics"
            },
            {
                label: "Norrik — Slip Bobber Rig",
                url: "https://norrik.com/fishing-rigs/slip-bobber-rig/"
            }
        ],
        componentRequirements: [
            {
                tackleId: "bobber-stop",
                quantity: 1,
                required: true,
                notes: "Controls the maximum fishing depth."
            },
            {
                tackleId: "stop-bead",
                quantity: 1,
                required: true,
                notes: "Prevents the stop from passing through the float."
            },
            {
                tackleId: "slip-float",
                quantity: 1,
                required: true,
                notes: "Choose a float sized for the bait and weight."
            },
            {
                tackleId: "split-shot",
                quantity: 1,
                required: true,
                notes: "Use enough weight to balance the float."
            },
            {
                tackleId: "hook",
                quantity: 1,
                required: true,
                notes: "Match hook size to the bait."
            },
            {
                tackleId: "bait",
                quantity: 1,
                required: true,
                notes: "Common choices include worms, minnows, or small jigs."
            }
        ],
        assemblySteps: [
            "Slide the bobber stop onto the main line.",
            "Slide the bead onto the line below the bobber stop.",
            "Thread the main line through the slip float.",
            "Attach split shot below the float.",
            "Tie the hook to the end of the line.",
            "Move the bobber stop to set the fishing depth.",
            "Add bait and confirm that the float stands upright."
        ],
        setupNotes: [
            "Start with the bait one to two feet above the bottom.",
            "Move the bobber stop to change depth without retying."
        ],
        commonMistakes: [
            "Using too much weight and sinking the float.",
            "Setting the stop too shallow or too deep.",
            "Using a hook that is too large for the bait."
        ],
        safetyNotes: [
            "Pinch split shot with pliers rather than your teeth.",
            "Keep hooks secured while adjusting the bobber stop."
        ],
        techniqueIds: [],
        variationIds: ["fixed-bobber-rig"],
        imageIds: []
    },
    {
        id: "basic-bottom-rig",
        name: "Basic Bottom Rig",
        summary: "A straightforward bait rig that holds the offering near the bottom.",
        createdVersion: "0.2.4",
        lastModifiedVersion: "0.2.7",
        isActive: true,
        difficulty: "Beginner",
        useCases: [
            "Bank fishing",
            "Fishing ponds and lakes",
            "Presenting bait near the bottom"
        ],
        conditionTags: [
            "Deep Water",
            "Open Water",
            "Light Current",
            "Bottom Fishing"
        ],
        referenceLinks: [
            {
                label: "Wired2Fish — Slip Sinker Rig",
                url: "https://www.wired2fish.com/tackle-tips/how-to-tie-a-slip-sinker-rig"
            },
            {
                label: "Norrik — Slip Sinker Rig",
                url: "https://norrik.com/fishing-rigs/slip-sinker-rig/"
            }
        ],
        componentRequirements: [
            {
                tackleId: "sliding-sinker",
                quantity: 1,
                required: true,
                notes: "An egg or no-roll sinker works well."
            },
            {
                tackleId: "bead",
                quantity: 1,
                required: false,
                notes: "Protects the knot from the sinker."
            },
            {
                tackleId: "barrel-swivel",
                quantity: 1,
                required: true,
                notes: "Stops the sinker and connects the leader."
            },
            {
                tackleId: "leader-line",
                quantity: 1,
                required: true,
                notes: "Start with 12 to 24 inches."
            },
            {
                tackleId: "hook",
                quantity: 1,
                required: true,
                notes: "Match the hook to the bait."
            },
            {
                tackleId: "bait",
                quantity: 1,
                required: true,
                notes: "Use bait appropriate for the water and local rules."
            }
        ],
        assemblySteps: [
            "Slide the sinker onto the main line.",
            "Slide on a bead below the sinker if using one.",
            "Tie the main line to one eye of the swivel.",
            "Tie the leader to the other swivel eye.",
            "Tie the hook to the free end of the leader.",
            "Add bait and cast with a controlled motion.",
            "Reel in slack until the line is lightly tensioned."
        ],
        setupNotes: [
            "Use the lightest sinker that maintains bottom contact.",
            "A shorter leader reduces tangles during casting."
        ],
        commonMistakes: [
            "Using more weight than necessary.",
            "Leaving excessive slack after casting.",
            "Casting too forcefully and throwing off the bait."
        ],
        safetyNotes: [
            "Check behind you before casting a weighted rig.",
            "Use controlled casts because sinkers can cause injury."
        ],
        techniqueIds: [],
        variationIds: ["carolina-rig"],
        imageIds: []
    },
    {
        id: "texas-rig",
        name: "Texas Rig",
        summary: "A weed-resistant soft-plastic rig built around a bullet weight and offset hook.",
        createdVersion: "0.2.4",
        lastModifiedVersion: "0.2.7",
        isActive: true,
        difficulty: "Beginner",
        useCases: [
            "Fishing around grass",
            "Fishing brush and timber",
            "Presenting soft plastics near cover"
        ],
        conditionTags: [
            "Heavy Cover",
            "Sparse Cover",
            "Shallow Water",
            "Deep Water"
        ],
        referenceLinks: [
            {
                label: "Wired2Fish — Texas Rig",
                url: "https://www.wired2fish.com/fishing-rigs/the-texas-rig-how-to-rig-and-fish"
            },
            {
                label: "Norrik — Texas Rig",
                url: "https://norrik.com/fishing-rigs/texas-rig/"
            }
        ],
        componentRequirements: [
            {
                tackleId: "bullet-weight",
                quantity: 1,
                required: true,
                notes: "Use the lightest weight that reaches the target depth."
            },
            {
                tackleId: "offset-worm-hook",
                quantity: 1,
                required: true,
                notes: "Match hook size to the soft plastic."
            },
            {
                tackleId: "soft-plastic",
                quantity: 1,
                required: true,
                notes: "Worms and creature baits are common choices."
            },
            {
                tackleId: "weight-peg",
                quantity: 1,
                required: false,
                notes: "Optional for keeping the weight close to the bait."
            }
        ],
        assemblySteps: [
            "Slide the bullet weight onto the main line with the pointed end facing the rod.",
            "Tie the offset hook to the main line.",
            "Insert the hook point into the nose of the soft plastic about one eighth to one quarter inch and bring the point out through the side.",
            "Slide the bait up the hook shank to the offset, then rotate it so the bait sits straight and the nose rests flush against the offset.",
            "Lay the hook against the bait and note where the hook point naturally meets the body; this is the re-entry point.",
            "Push the hook point straight through the bait at the re-entry point until the point reaches the opposite side.",
            "For a weedless finish, lightly skin-hook the point so it is barely exposed or just under the surface while the bait remains straight."
        ],
        setupNotes: [
            "The bait should hang straight without twisting.",
            "Peg the weight only when thick cover makes it useful."
        ],
        commonMistakes: [
            "Failing to seat the bait nose fully against the hook offset.",
            "Rigging the soft plastic crooked or twisted.",
            "Choosing the re-entry point before the bait is seated on the offset.",
            "Burying the hook point too deeply."
        ],
        safetyNotes: [
            "Keep fingers clear of the hook point while threading the bait."
        ],
        techniqueIds: [],
        variationIds: ["carolina-rig"],
        imageIds: []
    },
    {
        id: "jighead-soft-plastic",
        name: "Jighead + Soft Plastic",
        summary: "A simple weighted-lure setup that threads a soft plastic straight onto a jighead for casting, swimming, hopping, or vertical presentation.",
        createdVersion: "0.2.8",
        lastModifiedVersion: "0.2.8",
        isActive: true,
        difficulty: "Beginner",
        useCases: [
            "Fishing for crappie, white bass, panfish, and bass",
            "Covering open water from shore or boat",
            "Fishing at a controlled depth with a compact lure"
        ],
        conditionTags: [
            "Open Water",
            "Light Cover",
            "Shallow Water",
            "Deep Water",
            "Clear Water",
            "Stained Water"
        ],
        referenceLinks: [
            {
                label: "Berkley — Fusion19 Hybrid Jighead",
                url: "https://www.berkley-fishing.com/products/fusion19-hybrid-jighead"
            },
            {
                label: "Take Me Fishing — Jig with Soft Plastic",
                url: "https://www.takemefishing.org/blog/april-2019/lure-fishing-for-beginners-lures-every-angler-should-have/"
            }
        ],
        componentRequirements: [
            {
                tackleId: "jighead",
                quantity: 1,
                required: true,
                notes: "Match the head weight and hook size to the bait, depth, and current."
            },
            {
                tackleId: "soft-plastic",
                quantity: 1,
                required: true,
                notes: "Small grubs, minnows, paddletails, and worms are practical choices."
            }
        ],
        assemblySteps: [
            "Inspect the jighead and choose a soft plastic that fits the hook without crowding the bend.",
            "Tie the jighead directly to the main line or leader.",
            "Insert the hook point into the center of the bait's nose.",
            "Thread the bait straight along the hook shank toward the jighead and bait keeper.",
            "Bring the hook point out through the bait at the point that lets the body lie straight and centered.",
            "Slide the bait snugly against the jighead and confirm that it is not bent or twisted."
        ],
        setupNotes: [
            "Start with the lightest jighead that reaches the intended depth and can still be felt during the presentation.",
            "A straight bait tracks and swims more naturally than a crooked bait."
        ],
        commonMistakes: [
            "Threading the bait off-center so it spins or tracks sideways.",
            "Using a jighead that is too heavy for the depth or presentation.",
            "Covering too much of the hook gap with the bait.",
            "Leaving the bait loose instead of seating it against the head or keeper."
        ],
        safetyNotes: [
            "Keep fingers behind the hook point while threading the soft plastic.",
            "Check behind you before casting a weighted jighead."
        ],
        techniqueIds: [],
        variationIds: [],
        imageIds: []
    },
    {
        id: "inline-spinner-setup",
        name: "Inline Spinner Setup",
        summary: "A ready-to-fish cast-and-retrieve setup built around a compact lure whose blade spins around a central shaft.",
        createdVersion: "0.2.8",
        lastModifiedVersion: "0.2.8",
        isActive: true,
        difficulty: "Beginner",
        useCases: [
            "Covering water and locating active fish",
            "Fishing for panfish, white bass, trout, and smallmouth bass",
            "Learning a simple cast-and-retrieve presentation"
        ],
        conditionTags: [
            "Open Water",
            "Light Cover",
            "Shallow Water",
            "Clear Water",
            "Stained Water"
        ],
        referenceLinks: [
            {
                label: "Mepps — Aglia Spinner Rigging and Tips",
                url: "https://www.mepps.com/mepps-tactics/article/mepps-aglia-spinners/411"
            },
            {
                label: "Panther Martin — In-Line Spinner Quick Reference",
                url: "https://www.panthermartin.com/guide/"
            }
        ],
        componentRequirements: [
            {
                tackleId: "inline-spinner",
                quantity: 1,
                required: true,
                notes: "Choose a size that matches the target fish, line, and depth you need to reach."
            }
        ],
        assemblySteps: [
            "Inspect the line-tie eye, blade, shaft, body, and hook for damage or tangles.",
            "Tie the main line or leader directly to the spinner's line-tie eye.",
            "Trim the tag end and pull firmly on the knot to confirm that it is secure.",
            "Confirm that the blade rotates freely and that the hook is not caught on the blade, body, or dressing."
        ],
        setupNotes: [
            "A direct line connection is the standard setup; add a leader only when toothy fish or abrasion makes one necessary.",
            "Use the smallest spinner that casts well and reaches the intended depth."
        ],
        commonMistakes: [
            "Adding an oversized snap or swivel that changes the lure's action.",
            "Fishing with a bent shaft or damaged blade that cannot rotate freely.",
            "Choosing a lure that is too large for the target fish or available forage.",
            "Casting the exposed hook directly into heavy cover where it is likely to snag."
        ],
        safetyNotes: [
            "Keep the exposed hook secured until you are ready to cast.",
            "Check the casting area carefully because the compact weighted lure can travel quickly."
        ],
        techniqueIds: [],
        variationIds: [],
        imageIds: []
    }
]);

console.info(
    `[Loaded] ${RIG_DATA_BUILD_INFO.file} | ` +
    `${RIG_DATA_BUILD_INFO.milestone} | ` +
    `${RIG_DATA.length} records`
);
