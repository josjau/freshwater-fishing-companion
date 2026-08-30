/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: data/rigs.js
   PURPOSE: Provides canonical learning-tier Rig records for
   browsing, instruction, verified references, tackle readiness,
   and Rig-to-Knot relationships.
   ========================================================== */

"use strict";

const RIG_DATA_BUILD_INFO = Object.freeze({
    file: "data/rigs.js",
    milestone: "Rig Guide — Four-State Adequacy Reconciliation"
});

const CORE_RIG_IDS = Object.freeze([
    "basic-bottom-rig",
    "direct-tie-lure-setup",
    "fixed-bobber-rig",
    "jighead-soft-plastic",
    "slip-bobber-rig",
    "texas-rig"
]);

const RIG_DATA = Object.freeze([
    {
        id: "fixed-bobber-rig",
        name: "Fixed Bobber Rig",
        summary: "A simple float rig for presenting bait at a shallow, fixed depth.",
        createdVersion: "0.2.4",
        lastModifiedVersion: "0.5.0",
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
        tutorialVideo: {
            platform: "youtube",
            title: "How To Rig a Bobber and Worm for Fishing",
            creator: "NYSDEC",
            videoId: "LlzvkVUvYBs",
            externalUrl: "https://www.youtube.com/watch?v=LlzvkVUvYBs"
        },
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
        knotApplications: [
            {
                label: "Main line to hook",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
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
        variationIds: ["slip-bobber-rig"],
    },
    {
        id: "slip-bobber-rig",
        name: "Slip Bobber Rig",
        summary: "A depth-adjustable float rig for presenting bait at a controlled depth.",
        createdVersion: "0.2.4",
        lastModifiedVersion: "0.5.0",
        isActive: true,
        difficulty: "Beginner+",
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
        tutorialVideo: {
            platform: "youtube",
            title: "HOW-TO Rig A Slip Bobber (Easiest Way)",
            creator: "Sportsman's Journal TV",
            videoId: "0V-gaboIlD0",
            externalUrl: "https://www.youtube.com/watch?v=0V-gaboIlD0"
        },
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
                notes: "Common choices include worms or minnows where legal."
            }
        ],
        knotApplications: [
            {
                label: "Main line to hook",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
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
        variationIds: ["fixed-bobber-rig"],
    },
    {
        id: "basic-bottom-rig",
        name: "Basic Bottom Rig",
        summary: "A straightforward bait rig that holds the offering near the bottom.",
        createdVersion: "0.2.4",
        lastModifiedVersion: "0.5.0",
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
        tutorialVideo: {
            platform: "youtube",
            title: "How To Tie A Slip Sinker Rig For Catfish",
            creator: "Catfish Edge",
            videoId: "O6pEc6Y_44U",
            externalUrl: "https://www.youtube.com/watch?v=O6pEc6Y_44U"
        },
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
        knotApplications: [
            {
                label: "Main line to swivel",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
            },
            {
                label: "Leader to swivel",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
            },
            {
                label: "Leader to hook",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
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
        variationIds: ["carolina-rig"],
    },
    {
        id: "texas-rig",
        name: "Texas Rig",
        summary: "A weed-resistant soft-plastic rig built around a bullet weight and offset hook.",
        createdVersion: "0.2.4",
        lastModifiedVersion: "0.5.0",
        isActive: true,
        difficulty: "Beginner+",
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
        tutorialVideo: {
            platform: "youtube",
            title: "How to Rig the Texas Rig",
            creator: "Wired2Fish",
            videoId: "cIraWgiR6u0",
            externalUrl: "https://www.youtube.com/watch?v=cIraWgiR6u0"
        },
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
        knotApplications: [
            {
                label: "Main line to hook",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
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
        variationIds: ["carolina-rig", "weightless-soft-plastic-rig"],
    },
    {
        id: "jighead-soft-plastic",
        name: "Jighead + Soft Plastic",
        summary: "A simple weighted-lure setup that threads a soft plastic straight onto a jighead for casting, swimming, hopping, or vertical presentation.",
        createdVersion: "0.2.8",
        lastModifiedVersion: "0.5.0",
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
        tutorialVideo: {
            platform: "youtube",
            title: "Soft Plastics 101 - Chapter 6 - Soft Plastic Rigging on a Standard Jighead",
            creator: "Tackle Tactics TV",
            videoId: "wv1e53YZuBo",
            externalUrl: "https://www.youtube.com/watch?v=wv1e53YZuBo"
        },
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
        knotApplications: [
            {
                label: "Main line or leader to jighead",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
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
        variationIds: ["ned-rig"],
    },
    {
        id: "direct-tie-lure-setup",
        name: "Direct-Tie Lure Setup",
        summary: "A simple terminal setup for complete lures that connect directly to the main line or leader without a separate assembled terminal rig.",
        createdVersion: "0.2.8",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        difficulty: "Beginner",
        useCases: [
            "Simple lure fishing",
            "Direct terminal tie",
            "Quick lure changes"
        ],
        conditionTags: [
            "Open Water",
            "Light Cover",
            "Shallow Water",
            "Clear Water",
            "Stained Water"
        ],
        referenceLinks: [],
        componentRequirements: [],
        lureBaitRequirements: [],
        knotApplications: [],
        assemblySteps: [],
        setupNotes: [],
        commonMistakes: [],
        safetyNotes: [
            "Keep exposed hooks secured until you are ready to cast.",
            "Check the casting area carefully before casting a weighted or multi-hook lure."
        ],
        variationIds: [],
        configurations: [
            {
                id: "inline-spinner",
                name: "Inline Spinner",
                lureBaitId: "inline-spinner",
                referenceLinks: [
                    {
                        label: "Mepps — Aglia Spinner Rigging and Tips",
                        url: "https://www.mepps.com/mepps-tactics/article/mepps-aglia-spinners/411"
                    }
                ],
                tutorialVideo: null,
                useCases: ["Cast and retrieve", "Shallow open water", "Gentle current"],
                conditionTags: ["Open Water", "Light Current", "Shallow Water", "Clear Water", "Stained Water"],
                componentRequirements: [],
                lureBaitRequirements: [
                    {
                        lureBaitId: "inline-spinner",
                        quantity: 1,
                        required: true,
                        notes: "Choose a size that matches the target fish, line, and depth you need to reach."
                    }
                ],
                knotApplications: [
                    {
                        label: "Main line or leader to inline spinner",
                        connectionType: "terminal-attachment",
                        recommendedKnotIds: ["improved-clinch-knot", "palomar-knot", "uni-knot"],
                        notes: null
                    }
                ],
                assemblySteps: [
                    "Inspect the line-tie eye, blade, shaft, body, and hook for damage or tangles.",
                    "Find the small metal line-tie eye at the very front/top of the spinner shaft, opposite the hook and above the blade/body. This is the only place the line attaches.",
                    "Tie the main line or leader directly to that line-tie eye; do not tie to the blade, blade hanger, shaft, body, or hook.",
                    "Trim the tag end, pull firmly on the knot, and confirm that the blade rotates freely without catching the line or hook."
                ],
                setupNotes: [
                    "A direct line connection is the standard setup; add a leader only when toothy fish or abrasion makes one necessary.",
                    "Use the smallest spinner that casts well and reaches the intended depth."
                ],
                commonMistakes: [
                    "Adding oversized terminal hardware that changes the lure's action.",
                    "Fishing with a bent shaft or damaged blade that cannot rotate freely.",
                    "Choosing a lure that is too large for the intended presentation.",
                    "Casting the exposed hook directly into heavy cover where it is likely to snag."
                ]
            },
            {
                id: "spinnerbait",
                name: "Spinnerbait",
                lureBaitId: "spinnerbait",
                referenceLinks: [],
                tutorialVideo: {
                    platform: "youtube",
                    title: "How to Tie and Rig a Spinnerbait for Bass Fishing",
                    creator: "Anglers",
                    videoId: "0Or166Uo8VU",
                    externalUrl: "https://www.youtube.com/watch?v=0Or166Uo8VU"
                },
                useCases: ["Shallow cover", "Grass and docks", "Dirty water"],
                conditionTags: ["Light Cover", "Heavy Cover", "Vegetation", "Docks", "Shallow Water", "Stained Water"],
                componentRequirements: [],
                lureBaitRequirements: [
                    { lureBaitId: "spinnerbait", quantity: 1, required: true, notes: "Use a complete spinnerbait with an intact line-tie, wire frame, blades, skirt, and hook." }
                ],
                knotApplications: [
                    { label: "Main line or leader to spinnerbait", connectionType: "terminal-attachment", recommendedKnotIds: ["improved-clinch-knot", "palomar-knot", "uni-knot"], notes: null }
                ],
                assemblySteps: [
                    "Inspect the spinnerbait wire, line-tie, blades, skirt, and hook for damage or tangles.",
                    "Find the line-tie at the bend where the upper blade arm and lower head/hook arm meet. On an open-frame spinnerbait this is the small R-shaped bend; on a closed-eye model it is the metal eye at that same junction.",
                    "Tie the main line or leader directly to that R-bend or closed eye. Do not tie to a blade swivel, the upper wire arm, the hook, or the weighted head.",
                    "Trim the tag end, pull firmly on the knot, and confirm that the blades rotate freely and the skirt and hook are unobstructed."
                ],
                setupNotes: ["Keep the connection centered at the intended line-tie point so the lure tracks correctly."],
                commonMistakes: ["Tying onto the wrong part of the wire frame.", "Fishing a bent wire frame that no longer tracks correctly."]
            },
            {
                id: "crankbait",
                name: "Crankbait",
                lureBaitId: "crankbait",
                referenceLinks: [],
                tutorialVideo: {
                    platform: "youtube",
                    title: "Fishing Lures & Baits: How to Rig a Crankbait",
                    creator: "trails",
                    videoId: "-kHoA2RJX1M",
                    externalUrl: "https://www.youtube.com/watch?v=-kHoA2RJX1M"
                },
                useCases: ["Covering water", "Rock and structure", "Depth control"],
                conditionTags: ["Open Water", "Rock", "Shallow Water", "Deep Water", "Clear Water", "Stained Water"],
                componentRequirements: [
                    { tackleId: "split-ring", quantity: 1, required: false, notes: "Use the lure's existing line-tie or an appropriate split ring when the lure is designed for one." }
                ],
                lureBaitRequirements: [
                    { lureBaitId: "crankbait", quantity: 1, required: true, notes: "Use a complete crankbait with secure hooks and an undamaged line-tie or bill." }
                ],
                knotApplications: [
                    { label: "Main line or leader to crankbait line-tie or split ring", connectionType: "terminal-attachment", recommendedKnotIds: ["improved-clinch-knot", "palomar-knot", "uni-knot"], notes: null }
                ],
                assemblySteps: [
                    "Inspect the crankbait body, diving bill when present, nose line-tie, factory split ring if present, and hooks.",
                    "Find the small metal line-tie eye at the lure's nose or on the front of the diving bill. Do not confuse it with the hook hangers underneath the body.",
                    "If the lure came with a split ring on that line-tie, leave it in place and tie to the split ring. If no split ring is intended, tie directly to the metal line-tie eye.",
                    "Trim the tag end, test the knot firmly, and confirm the hooks and diving bill are unobstructed."
                ],
                setupNotes: ["Do not add extra terminal hardware merely for convenience when it changes the lure's balance or action."],
                commonMistakes: ["Tying to a hook hanger instead of the line-tie.", "Using damaged or oversized attachment hardware."]
            },
            {
                id: "jerkbait",
                name: "Jerkbait",
                lureBaitId: "jerkbait",
                referenceLinks: [
                    {
                        label: "Rapala — X-Rap Jerkbait Reference",
                        url: "https://www.rapala.com/us_en/x-rap/"
                    }
                ],
                tutorialVideo: null,
                useCases: ["Suspended fish", "Open-water baitfish", "Pause and twitch"],
                conditionTags: ["Open Water", "Shallow Water", "Deep Water", "Clear Water", "Stained Water", "Suspended Fish"],
                componentRequirements: [
                    { tackleId: "split-ring", quantity: 1, required: false, notes: "Use the lure's existing split ring only when it is part of the intended line-tie configuration." }
                ],
                lureBaitRequirements: [
                    { lureBaitId: "jerkbait", quantity: 1, required: true, notes: "Use a complete jerkbait with an intact line-tie and secure hooks." }
                ],
                knotApplications: [
                    { label: "Main line or leader to jerkbait line-tie or split ring", connectionType: "terminal-attachment", recommendedKnotIds: ["improved-clinch-knot", "palomar-knot", "uni-knot"], notes: null }
                ],
                assemblySteps: [
                    "Inspect the jerkbait body, front line-tie, factory split ring if present, diving lip when present, and hooks.",
                    "Find the small metal line-tie eye at the very front of the lure, usually at the nose or just ahead of the diving lip. The hook hangers under the body are not line-ties.",
                    "If a factory split ring is installed on the front line-tie, tie to that ring; otherwise tie directly to the front metal eye. Do not add extra hardware unless the lure is designed for it.",
                    "Trim the tag end, test the knot firmly, and confirm the hooks move freely without fouling the line."
                ],
                setupNotes: ["Keep added hardware minimal because extra weight can change how a suspending or slowly floating lure behaves."],
                commonMistakes: ["Adding unnecessary hardware that changes suspension or balance.", "Using a damaged line-tie or fouled hook configuration."]
            },
            {
                id: "spoon",
                name: "Spoon",
                lureBaitId: "spoon",
                referenceLinks: [
                    {
                        label: "Mepps — Syclops Spoon Rigging and Tips",
                        url: "https://www.mepps.com/mepps-tactics/article/syclops-spoon/460"
                    }
                ],
                tutorialVideo: {
                    platform: "youtube",
                    title: "You're Doing It Wrong: How to Rig a Spoon Lure for Beginners",
                    creator: "Anglers",
                    videoId: "pLsX7nhM1qk",
                    externalUrl: "https://www.youtube.com/watch?v=pLsX7nhM1qk&t=63s"
                },
                useCases: ["Open-water casting", "Deep or vertical", "Fluttering fall"],
                conditionTags: ["Open Water", "Deep Water", "Vegetation", "Light Current", "Clear Water", "Stained Water"],
                componentRequirements: [
                    { tackleId: "split-ring", quantity: 1, required: false, notes: "Use a split ring only when the spoon is designed to use one at the line-tie." },
                    { tackleId: "barrel-swivel", quantity: 1, required: false, notes: "An upstream swivel may be useful when a rotating spoon produces persistent line twist." }
                ],
                lureBaitRequirements: [
                    { lureBaitId: "spoon", quantity: 1, required: true, notes: "Use a complete spoon with an intact line-tie and secure hook." }
                ],
                knotApplications: [
                    { label: "Main line or leader to spoon or optional swivel", connectionType: "terminal-attachment", recommendedKnotIds: ["improved-clinch-knot", "palomar-knot", "uni-knot"], notes: "If an anti-twist swivel is used, tie the line to the swivel and connect the spoon according to that hardware's intended attachment." }
                ],
                assemblySteps: [
                    "Inspect the spoon, the line-tie end, any factory split ring, and the hook end.",
                    "Identify the line-tie at the end opposite the hook. Tie to the factory split ring if one is installed there; otherwise tie directly through the spoon's front line-tie hole or eye.",
                    "If repeated rotation causes line twist, place a barrel swivel upstream: tie the main line to one swivel eye, then use a short leader from the other swivel eye to the spoon's normal line-tie. Do not stack a swivel directly onto the spoon unless that is the intended hardware arrangement.",
                    "Trim all tag ends, test each knot firmly, and confirm the spoon and hook move freely."
                ],
                setupNotes: ["Use only the attachment hardware needed for the spoon's design and line-twist control."],
                commonMistakes: ["Adding excessive hardware that restricts the spoon's movement.", "Ignoring severe line twist during repeated retrieves."]
            }
        ]
    },
    {
        id: "wacky-rig",
        name: "Wacky Rig",
        summary: "A weightless soft-plastic setup that hooks a stick-style worm through its middle so both ends can move freely.",
        createdVersion: "0.2.9",
        lastModifiedVersion: "0.5.0",
        isActive: true,
        difficulty: "Beginner",
        useCases: [
            "Learning finesse soft-plastic fishing",
            "Fishing around docks, sparse grass, and open pockets",
            "Presenting a slow-falling stick bait to bass"
        ],
        conditionTags: [
            "Shallow Water",
            "Open Water",
            "Light Cover",
            "Clear Water",
            "Stained Water"
        ],
        referenceLinks: [
            {
                label: "Mustad — Wacky / Neko / Dropshot Hook",
                url: "https://mustad-fishing.com/us/products/w60403np"
            },
            {
                label: "Take Me Fishing — Bass Fishing Rigs",
                url: "https://www.takemefishing.org/how-to-fish/how-tie-fishing-knots/bass-fishing-rigs/"
            }
        ],
        tutorialVideo: {
            platform: "youtube",
            title: "The fishing rig that whacks them every time - Wacky Rig",
            creator: "Kevin VanDam",
            videoId: "EbHzUCM4o7Y",
            externalUrl: "https://www.youtube.com/watch?v=EbHzUCM4o7Y"
        },
        componentRequirements: [
            {
                tackleId: "wacky-hook",
                quantity: 1,
                required: true,
                notes: "Use a small wacky or finesse hook with an open gap; weedless-guard versions are optional for cover."
            },
            {
                tackleId: "soft-plastic",
                quantity: 1,
                required: true,
                notes: "A straight four- to five-inch stick worm is a simple beginner starting point."
            },
            {
                tackleId: "wacky-o-ring",
                quantity: 1,
                required: false,
                notes: "Optional; an O-ring can reduce bait tearing while keeping the midpoint presentation."
            }
        ],
        knotApplications: [
            {
                label: "Main line or leader to hook",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
            }
        ],
        assemblySteps: [
            "Tie the Wacky Hook directly to the main line or leader.",
            "Find the approximate midpoint of the soft-plastic stick worm.",
            "Push the hook point once through the bait at the midpoint so the bend rests against the worm; do not thread the worm up the hook shank.",
            "Confirm that both ends of the worm hang freely on opposite sides of the hook and that the hook point and gap remain fully exposed.",
            "Optional: place a Wacky O-Ring at the midpoint and secure the hook with the ring instead of repeatedly piercing the plastic."
        ],
        setupNotes: [
            "Start without added weight so the bait can fall naturally.",
            "Centering the hook or O-ring keeps the two ends balanced and free to move."
        ],
        commonMistakes: [
            "Threading the worm along the hook shank instead of piercing it once at the midpoint.",
            "Hooking far away from the midpoint so one side hangs much longer than the other.",
            "Covering the hook point or closing the hook gap with too much plastic.",
            "Adding unnecessary weight or hardware that changes the simple falling presentation."
        ],
        safetyNotes: [
            "Keep fingers clear of the hook point while piercing the middle of the bait."
        ],
        variationIds: [],
    },
    {
        id: "ned-rig",
        name: "Ned Rig",
        summary: "A compact finesse setup pairing a light mushroom-style jighead with a short soft-plastic bait.",
        createdVersion: "0.2.9",
        lastModifiedVersion: "0.5.0",
        isActive: true,
        difficulty: "Beginner",
        useCases: [
            "Learning a simple finesse presentation",
            "Fishing for bass in pressured or clear water",
            "Working open bottom, rock, gravel, and light cover"
        ],
        conditionTags: [
            "Clear Water",
            "Stained Water",
            "Open Water",
            "Light Cover",
            "Shallow Water",
            "Deep Water"
        ],
        referenceLinks: [
            {
                label: "Z-Man — Ned Rig",
                url: "https://zmanfishing.com/pages/ned-rig"
            },
            {
                label: "Take Me Fishing — How to Set Up a Ned Rig",
                url: "https://www.takemefishing.org/blog/january-2019/how-to-set-up-a-fishing-rig-for-bass-the-ned-rig/"
            }
        ],
        tutorialVideo: {
            platform: "youtube",
            title: "How To Rig A Ned Rig - Ned Rigging Tips",
            creator: "Mystery Tackle Box",
            videoId: "COFdRET28cY",
            externalUrl: "https://www.youtube.com/watch?v=COFdRET28cY"
        },
        componentRequirements: [
            {
                tackleId: "ned-jighead",
                quantity: 1,
                required: true,
                notes: "Use a light mushroom-style Ned jighead sized for compact finesse plastics."
            },
            {
                tackleId: "soft-plastic",
                quantity: 1,
                required: true,
                notes: "A roughly 2.75-inch stick-style finesse bait is a standard beginner example; other compact Ned-sized plastics also work."
            }
        ],
        knotApplications: [
            {
                label: "Main line or leader to jighead",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
            }
        ],
        assemblySteps: [
            "Tie the Ned Jighead directly to the main line or leader.",
            "Choose a compact finesse soft plastic that fits the small jighead without crowding the hook gap.",
            "Insert the hook point into the center of the bait's nose.",
            "Thread the bait straight along the hook shank toward the mushroom head and keeper.",
            "Bring the hook point out through the bait so the body remains straight and centered.",
            "Seat the bait firmly against the head or keeper and leave the standard hook point fully exposed."
        ],
        setupNotes: [
            "Use the lightest Ned jighead that maintains the depth and bottom contact you need.",
            "The standard beginner setup uses an exposed hook; weedless Ned heads are useful variations for snag-prone cover."
        ],
        commonMistakes: [
            "Substituting a large general-purpose jighead that overwhelms the compact finesse bait.",
            "Using a jighead that is much heavier than necessary.",
            "Threading the bait crooked so it twists or tracks sideways.",
            "Covering the exposed hook point or too much of the hook gap with the soft plastic.",
            "Using a long bulky bait that defeats the compact Ned profile."
        ],
        safetyNotes: [
            "Keep fingers behind the hook point while threading the soft plastic.",
            "Check behind you before casting the weighted jighead."
        ],
        variationIds: ["jighead-soft-plastic"],
    },
    {
        id: "weightless-soft-plastic-rig",
        name: "Weightless Soft-Plastic Rig",
        summary: "A weed-resistant soft-plastic setup tied directly to an offset hook with no sinker or other added weight.",
        createdVersion: "0.2.9",
        lastModifiedVersion: "0.5.0",
        isActive: true,
        difficulty: "Beginner+",
        useCases: [
            "Fishing shallow grass, brush edges, and open pockets",
            "Presenting a soft plastic slowly without added weight",
            "Fishing for bass around light to moderate cover"
        ],
        conditionTags: [
            "Shallow Water",
            "Sparse Cover",
            "Light Cover",
            "Clear Water",
            "Stained Water"
        ],
        referenceLinks: [
            {
                label: "Yamamoto — Senko Rigging Options",
                url: "https://www.yamamotobaits.com/senko-soft-bait/"
            },
            {
                label: "Take Me Fishing — Bass Fishing Rigs",
                url: "https://www.takemefishing.org/how-to-fish/how-tie-fishing-knots/bass-fishing-rigs/"
            }
        ],
        tutorialVideo: {
            platform: "youtube",
            title: "How to Rig a Weightless Texas Rig",
            creator: "Reaction Tackle",
            videoId: "EFORJFsycJQ",
            externalUrl: "https://www.youtube.com/watch?v=EFORJFsycJQ"
        },
        componentRequirements: [
            {
                tackleId: "offset-worm-hook",
                quantity: 1,
                required: true,
                notes: "Match the hook size and gap to the soft plastic."
            },
            {
                tackleId: "soft-plastic",
                quantity: 1,
                required: true,
                notes: "Stick worms, flukes, and other soft plastics can be rigged weightless."
            }
        ],
        knotApplications: [
            {
                label: "Main line or leader to hook",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
            }
        ],
        assemblySteps: [
            "Tie the offset worm hook directly to the main line or leader; do not add a sinker.",
            "Insert the hook point into the nose of the soft plastic about one eighth to one quarter inch and bring the point out through the side.",
            "Slide the bait up the hook shank to the offset, then rotate it so the nose seats against the offset.",
            "Lay the hook alongside the bait to locate the natural re-entry point without stretching or bunching the plastic.",
            "Push the hook point straight through the bait at that point so the body hangs straight.",
            "For a weedless finish, lightly skin-hook the point while keeping the bait straight and the hook gap usable."
        ],
        setupNotes: [
            "The absence of a sinker is part of the setup; the soft plastic provides the casting weight and fall rate.",
            "Use a bait heavy enough to cast comfortably on your line and rod."
        ],
        commonMistakes: [
            "Adding a bullet weight and unintentionally turning the setup into a Texas Rig.",
            "Rigging the bait crooked so it twists or pulls to one side.",
            "Choosing the re-entry point before the bait nose is seated against the hook offset.",
            "Burying the hook point so deeply that hooksets become difficult."
        ],
        safetyNotes: [
            "Keep fingers clear of the hook point while threading and skin-hooking the bait."
        ],
        variationIds: ["texas-rig"],
    },
    {
        id: "drop-shot-rig",
        name: "Drop Shot Rig",
        summary: "A finesse rig that holds a soft plastic above a bottom-contact weight while keeping the hook tied directly to the main line.",
        createdVersion: "0.3.1",
        lastModifiedVersion: "0.5.0",
        isActive: true,
        difficulty: "Intermediate",
        useCases: [
            "Presenting finesse plastics just above the bottom",
            "Fishing clear or pressured water",
            "Targeting bass around rock, points, ledges, and sparse cover"
        ],
        conditionTags: [
            "Clear Water",
            "Stained Water",
            "Deep Water",
            "Open Water",
            "Light Cover",
            "Bottom Fishing"
        ],
        referenceLinks: [
            {
                label: "Mustad — Weedless/Snagless Dropshot Rigging",
                url: "https://mustad-fishing.com/us/article/weedless-snagless-dropshot-rigging"
            },
            {
                label: "Mustad — TitanX Wacky / Neko / Dropshot Hook",
                url: "https://business.mustad-fishing.com/us/products/60403np"
            }
        ],
        tutorialVideo: {
            platform: "youtube",
            title: "Drop Shot Rig: How To Rig the Drop Shot",
            creator: "Mystery Tackle Box",
            videoId: "xuqaAq98BDA",
            externalUrl: "https://www.youtube.com/watch?v=xuqaAq98BDA"
        },
        componentRequirements: [
            {
                tackleId: "wacky-hook",
                quantity: 1,
                required: true,
                notes: "Use a compact finesse or drop-shot hook that can ride point-up when tied to the line."
            },
            {
                tackleId: "soft-plastic",
                quantity: 1,
                required: true,
                notes: "Small finesse worms, minnows, and other compact plastics are common choices."
            },
            {
                tackleId: "drop-shot-weight",
                quantity: 1,
                required: true,
                notes: "Use the lightest drop-shot weight that maintains bottom contact."
            }
        ],
        knotApplications: [
            {
                label: "Main line to drop-shot hook",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "palomar-knot"
                ],
                notes: "Leave a long tag end, then pass the tag end back through the hook eye from the point side so the hook rides point-up."
            }
        ],
        assemblySteps: [
            "Tie the finesse hook to the main line while leaving a long tag end below the knot.",
            "Pass the tag end back through the hook eye from the point side so the hook turns outward and rides point-up.",
            "Attach the Drop Shot Weight to the tag end, starting about 12 to 18 inches below the hook.",
            "Nose-hook or lightly thread the soft plastic so the hook gap and point remain exposed for the standard open-water setup.",
            "Hold the line vertically and confirm that the bait sits above the weight and the hook rides point-up.",
            "Adjust the hook-to-weight spacing to keep the bait above bottom clutter or vegetation."
        ],
        setupNotes: [
            "A 12- to 18-inch hook-to-weight spacing is a practical starting range; adjust it to the fish and bottom cover.",
            "Round or teardrop weights work well on cleaner bottom, while skinny weights can pass through vegetation and crevices more easily."
        ],
        commonMistakes: [
            "Leaving the hook rotated downward instead of point-up.",
            "Using a weight that is heavier than needed and overloading the finesse presentation.",
            "Threading too much plastic onto the hook and closing the hook gap.",
            "Setting the hook-to-weight spacing without considering grass, rock, or bottom debris."
        ],
        safetyNotes: [
            "Secure both the exposed hook and hanging weight before moving or storing the rod.",
            "Keep fingers clear of the exposed hook point when nose-hooking the bait."
        ],
        variationIds: [],
    },
    {
        id: "carolina-rig",
        name: "Carolina Rig",
        summary: "A bottom-contact soft-plastic rig that separates a sliding weight from the bait with a swivel and leader.",
        createdVersion: "0.3.1",
        lastModifiedVersion: "0.5.0",
        isActive: true,
        difficulty: "Intermediate",
        useCases: [
            "Covering broad flats, points, and offshore structure",
            "Keeping a soft plastic moving behind a bottom-contact weight",
            "Fishing for bass in moderate to deep water"
        ],
        conditionTags: [
            "Deep Water",
            "Open Water",
            "Sparse Cover",
            "Bottom Fishing",
            "Clear Water",
            "Stained Water"
        ],
        referenceLinks: [
            {
                label: "Wired2Fish — Carolina Rig",
                url: "https://www.wired2fish.com/fishing-rigs/the-carolina-rig-how-to-rig-and-fish"
            },
            {
                label: "Mustad — Tungsten Carolina Weights",
                url: "https://mustad-fishing.com/us/collections/weights"
            }
        ],
        tutorialVideo: {
            platform: "youtube",
            title: "Fishing 101 - How to Tie a Carolina Rig",
            creator: "ShakespeareFishingUS",
            videoId: "iYngOOMQCC0",
            externalUrl: "https://www.youtube.com/watch?v=iYngOOMQCC0"
        },
        componentRequirements: [
            {
                tackleId: "sliding-sinker",
                quantity: 1,
                required: true,
                notes: "An egg, barrel, or Carolina-style sliding sinker can be used; choose weight for depth and bottom contact."
            },
            {
                tackleId: "bead",
                quantity: 1,
                required: true,
                notes: "Place the bead between the sinker and swivel to protect the knot and add separation."
            },
            {
                tackleId: "barrel-swivel",
                quantity: 1,
                required: true,
                notes: "Stops the sliding weight and connects the main line to the leader."
            },
            {
                tackleId: "leader-line",
                quantity: 1,
                required: true,
                notes: "Start around 18 to 36 inches and adjust for cover, casting control, and bait action."
            },
            {
                tackleId: "offset-worm-hook",
                quantity: 1,
                required: true,
                notes: "Match the hook size and gap to the selected soft plastic."
            },
            {
                tackleId: "soft-plastic",
                quantity: 1,
                required: true,
                notes: "Worms, lizards, creature baits, and other soft plastics are common choices."
            }
        ],
        knotApplications: [
            {
                label: "Main line to swivel",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
            },
            {
                label: "Leader to swivel",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
            },
            {
                label: "Leader to hook",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
            }
        ],
        assemblySteps: [
            "Slide the sinker onto the main line so it can move freely.",
            "Slide the Protective Bead onto the main line below the sinker.",
            "Tie the main line to one eye of the Barrel Swivel.",
            "Tie the Leader Line to the other swivel eye.",
            "Tie the Offset Worm Hook to the free end of the leader.",
            "Texas-rig the Soft Plastic Bait on the offset hook so the body is straight and the hook point is lightly skin-hooked or barely buried for a weed-resistant finish.",
            "Confirm that the sinker slides on the main line while the swivel keeps the leader and bait separated behind it."
        ],
        setupNotes: [
            "Use the lightest sinker that maintains useful bottom contact and casting control.",
            "Shorten the leader around snaggy cover or for easier casting; lengthen it when you want more bait separation and freedom of movement."
        ],
        commonMistakes: [
            "Placing the bead on the wrong side of the swivel.",
            "Using a leader so long that the rig becomes difficult to cast safely.",
            "Rigging the soft plastic crooked on the offset hook.",
            "Using excessive weight when lighter tackle would maintain bottom contact."
        ],
        safetyNotes: [
            "Use a controlled side-arm or lob cast because the long leader and heavy sliding weight create a wide moving rig.",
            "Check behind and beside you before casting."
        ],
        variationIds: ["texas-rig", "basic-bottom-rig"],
    },
    {
        id: "live-bait-slip-sinker-rig",
        name: "Live-Bait Slip-Sinker Rig",
        summary: "A sliding-sinker live-bait rig that lets a fish move the line with reduced resistance while the bait trails behind a swivel and leader.",
        createdVersion: "0.3.1",
        lastModifiedVersion: "0.5.0",
        isActive: true,
        difficulty: "Intermediate",
        useCases: [
            "Slow-drifting or back-trolling live bait for walleye",
            "Presenting worms, leeches, or minnows near bottom",
            "Fishing points, breaks, and bottom transitions with controlled movement"
        ],
        conditionTags: [
            "Deep Water",
            "Open Water",
            "Light Current",
            "Bottom Fishing",
            "Clear Water",
            "Stained Water"
        ],
        referenceLinks: [
            {
                label: "Outdoor Life — Walleye Fishing Tips and Lindy Rigging",
                url: "https://www.outdoorlife.com/fishing/walleye-fishing-tips/"
            },
            {
                label: "Outdoor Life — Complete Guide to Fishing Sinkers",
                url: "https://www.outdoorlife.com/complete-guide-to-using-fishing-sinkers/"
            }
        ],
        tutorialVideo: {
            platform: "youtube",
            title: "How to rig a Lindy Rig",
            creator: "Castaway Fishing Kits",
            videoId: "IbV0yG3sRms",
            externalUrl: "https://www.youtube.com/watch?v=IbV0yG3sRms"
        },
        componentRequirements: [
            {
                tackleId: "sliding-sinker",
                quantity: 1,
                required: true,
                notes: "A walking or egg-style sliding sinker lets the main line move through the weight; choose the lightest size that maintains bottom contact."
            },
            {
                tackleId: "bead",
                quantity: 1,
                required: false,
                notes: "Optional between the sinker and swivel to protect the knot from repeated contact."
            },
            {
                tackleId: "barrel-swivel",
                quantity: 1,
                required: true,
                notes: "Stops the sliding sinker and connects the main line to the leader."
            },
            {
                tackleId: "leader-line",
                quantity: 1,
                required: true,
                notes: "Leader length varies with bottom cover, water clarity, and the amount of bait freedom needed."
            },
            {
                tackleId: "hook",
                quantity: 1,
                required: true,
                notes: "Use a live-bait hook appropriate for the bait and target species."
            },
            {
                tackleId: "bait",
                quantity: 1,
                required: true,
                notes: "Common options include nightcrawlers, leeches, or minnows where legal."
            }
        ],
        knotApplications: [
            {
                label: "Main line to swivel",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
            },
            {
                label: "Leader to swivel",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
            },
            {
                label: "Leader to hook",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
            }
        ],
        assemblySteps: [
            "Slide the Sliding Sinker onto the main line so the line can move freely through it.",
            "Slide on a Protective Bead below the sinker if using one.",
            "Tie the main line to one eye of the Barrel Swivel.",
            "Tie the Leader Line to the other swivel eye.",
            "Tie the Fishing Hook to the free end of the leader.",
            "Add the selected live or natural bait in a way that keeps it lively and securely attached.",
            "Lower, drift, or cast the rig and maintain just enough contact to feel the sinker touch bottom without dragging the bait unnaturally."
        ],
        setupNotes: [
            "Walking sinkers are especially useful for slow, controlled bottom travel; egg-style sinkers remain a workable sliding alternative.",
            "Leader length is a tuning variable: shorten it around snags and lengthen it when you want the bait to move more freely."
        ],
        commonMistakes: [
            "Using enough weight to anchor the rig instead of letting it move naturally.",
            "Dragging the bait too fast for a controlled live-bait presentation.",
            "Using a leader that is unnecessarily long around snag-prone bottom.",
            "Failing to check local bait-use regulations before fishing live bait."
        ],
        safetyNotes: [
            "Use controlled casts because the sliding sinker and baited hook can swing independently.",
            "Handle live bait and hooks carefully, and follow local bait and invasive-species regulations."
        ],
        variationIds: ["basic-bottom-rig"],
    },
    {
        id: "three-way-rig",
        name: "Three-Way Rig",
        summary: "A current-oriented bottom rig that uses a three-way swivel to separate the main line, bait leader, and sinker dropper.",
        createdVersion: "0.3.1",
        lastModifiedVersion: "0.5.0",
        isActive: true,
        difficulty: "Intermediate",
        useCases: [
            "Fishing bait in river current",
            "Holding a baited hook above bottom while the sinker stays below it",
            "Bottom fishing from bank or boat where a separate sinker dropper helps presentation"
        ],
        conditionTags: [
            "Current",
            "Deep Water",
            "Bottom Fishing",
            "Open Water",
            "Rock",
            "Stained Water"
        ],
        referenceLinks: [
            {
                label: "Zebco — How to Rig for Catfish",
                url: "https://www.zebco.com/en/academy/getting-started/how-to-rig-for-catfish"
            },
            {
                label: "Mustad — Power 3-Way Swivel",
                url: "https://mustad-fishing.com/us/products/dlt05"
            }
        ],
        tutorialVideo: {
            platform: "youtube",
            title: "3 Way Rig - Three Way Rig Catfish Rigs",
            creator: "Catfish Edge",
            videoId: "8SONykmBFxA",
            externalUrl: "https://www.youtube.com/watch?v=8SONykmBFxA"
        },
        componentRequirements: [
            {
                tackleId: "three-way-swivel",
                quantity: 1,
                required: true,
                notes: "The three separate eyes connect main line, bait leader, and sinker dropper."
            },
            {
                tackleId: "leader-line",
                quantity: 1,
                required: true,
                notes: "Cut two sections from the leader material: one for the hook leader and one shorter sinker dropper."
            },
            {
                tackleId: "hook",
                quantity: 1,
                required: true,
                notes: "Match hook style and size to the bait and target fish."
            },
            {
                tackleId: "bait",
                quantity: 1,
                required: true,
                notes: "Use bait appropriate for the target species and local regulations."
            },
            {
                tackleId: "fixed-sinker",
                quantity: 1,
                required: true,
                notes: "Tie a bank, bell, or similar terminal sinker to the short dropper so the weight stays below the bait leader."
            }
        ],
        knotApplications: [
            {
                label: "Main line to three-way swivel",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
            },
            {
                label: "Hook leader to three-way swivel",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
            },
            {
                label: "Hook leader to hook",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
            },
            {
                label: "Sinker dropper to three-way swivel",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
            },
            {
                label: "Sinker dropper to sinker",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
            }
        ],
        assemblySteps: [
            "Tie the main line to one eye of the Three-Way Swivel.",
            "Cut a hook leader from the Leader Line and tie it to a second swivel eye.",
            "Tie the Fishing Hook to the free end of the hook leader.",
            "Cut a shorter sinker dropper from the Leader Line and tie it to the third swivel eye.",
            "Tie the Fixed Sinker to the free end of the shorter dropper.",
            "Add bait to the hook and confirm that the sinker hangs below the hook leader without the two branches wrapping around each other.",
            "Use a controlled cast or lower the rig into current so the weight holds near bottom while the bait leader can move separately."
        ],
        setupNotes: [
            "Keep the sinker dropper shorter than the hook leader so the bait rides above the weight.",
            "Use only enough sinker weight to hold the rig where you want it in the current."
        ],
        commonMistakes: [
            "Making the sinker dropper longer than the bait leader.",
            "Using a two-eye barrel swivel instead of a true three-way swivel.",
            "Using more sinker weight than necessary.",
            "Casting aggressively and tangling the two leader branches."
        ],
        safetyNotes: [
            "Use controlled casts because a baited hook and separate sinker can swing on different leaders.",
            "Inspect all three swivel connections before fishing strong current."
        ],
        variationIds: [],
    },
    {
        id: "neko-rig",
        name: "Neko Rig",
        summary: "A weighted wacky-style finesse rig with a nail weight inserted into one end of a soft-plastic worm so the bait works nose-down along the bottom.",
        createdVersion: "0.4.0",
        lastModifiedVersion: "0.5.0",
        isActive: true,
        difficulty: "Intermediate+",
        useCases: [
            "Fishing pressured bass around docks, rock, and offshore structure",
            "Adding bottom contact to a wacky-style soft plastic",
            "Presenting a finesse worm in moderate or deep water"
        ],
        conditionTags: [
            "Clear Water",
            "Stained Water",
            "Deep Water",
            "Light Cover",
            "Bottom Fishing",
            "Docks"
        ],
        referenceLinks: [
            {
                label: "Wired2Fish — Neko Rig Complete Rigging and Fishing Guide",
                url: "https://www.wired2fish.com/fishing-tips/neko-rig-complete-rigging-and-fishing-guide"
            },
            {
                label: "Z-Man — Bang StickZ",
                url: "https://zmanfishing.com/products/bang-stickz"
            }
        ],
        tutorialVideo: {
            platform: "youtube",
            title: "How to Rig the Neko Rig and Where to Fish It",
            creator: "Wired2Fish",
            videoId: "yxGJLTxa_B0",
            externalUrl: "https://www.youtube.com/watch?v=yxGJLTxa_B0"
        },
        componentRequirements: [
            {
                tackleId: "nail-weight",
                quantity: 1,
                required: true,
                notes: "Insert the weight into one end of the worm; use only enough weight to reach the desired depth and bottom contact."
            },
            {
                tackleId: "wacky-hook",
                quantity: 1,
                required: true,
                notes: "Use a compact finesse hook with the point oriented toward the unweighted end of the bait."
            },
            {
                tackleId: "soft-plastic",
                quantity: 1,
                required: true,
                notes: "Straight-tail and stick-style worms are practical Neko choices."
            },
            {
                tackleId: "wacky-o-ring",
                quantity: 1,
                required: false,
                notes: "Optional but useful for securing the hook while reducing damage to the soft plastic."
            }
        ],
        knotApplications: [
            {
                label: "Main line or leader to hook",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
            }
        ],
        assemblySteps: [
            "Choose which end of the soft-plastic worm will be the weighted nose.",
            "Insert the Nail Weight straight into that end until it is secure; a small exposed head may be left for added bottom feel when appropriate.",
            "Place the Wacky O-Ring near the bait's midpoint or slightly toward the weighted end if using one.",
            "Tie the Wacky Hook to the main line or leader.",
            "Hook the bait at the ring or through the body so the hook point faces toward the unweighted tail and away from the nail weight.",
            "Hold the rig by the line and confirm that the weighted end hangs down while the hook gap and point remain clear."
        ],
        setupNotes: [
            "Start with a light nail weight; heavier weights increase fall speed and bottom contact but reduce the slow finesse fall.",
            "Hook orientation matters because the weighted nose fishes down while the hook point should face upward toward the tail."
        ],
        commonMistakes: [
            "Pointing the hook toward the weighted nose instead of the unweighted tail.",
            "Using a nail weight so large that it tears or distorts the bait.",
            "Placing the hook so far off-center that the bait loses its balanced action.",
            "Burying the hook gap in the plastic or O-ring."
        ],
        safetyNotes: [
            "Keep fingers clear of the hook point while installing the hook and weight.",
            "Check the nail weight after catches so a loosened weight is not thrown during the next cast."
        ],
        variationIds: ["wacky-rig"],
    },
    {
        id: "shaky-head-rig",
        name: "Shaky Head Rig",
        summary: "A finesse soft-plastic rig built around a dedicated shaky-head jighead that keeps the bait connected directly to a light bottom-contact weight.",
        createdVersion: "0.4.0",
        lastModifiedVersion: "0.5.0",
        isActive: true,
        difficulty: "Intermediate+",
        useCases: [
            "Fishing pressured bass on rock, gravel, points, and sparse cover",
            "Maintaining a compact bottom-contact finesse presentation",
            "Fishing clear to moderately stained water"
        ],
        conditionTags: [
            "Clear Water",
            "Stained Water",
            "Bottom Fishing",
            "Rock",
            "Light Cover",
            "Deep Water"
        ],
        referenceLinks: [
            {
                label: "Z-Man — SMH Jigheads",
                url: "https://zmanfishing.com/products/smh-jigheads"
            },
            {
                label: "Wired2Fish — Shaky Head, Neko Rig and Drop Shot Finesse Fishing Mastery",
                url: "https://www.wired2fish.com/fishing-videos/shaky-head-neko-rig-and-drop-shot-finesse-fishing-mastery"
            }
        ],
        tutorialVideo: {
            platform: "youtube",
            title: "How to Rig a Shaky Head",
            creator: "Bass Utopia",
            videoId: "zwcZSE3DVAU",
            externalUrl: "https://www.youtube.com/watch?v=zwcZSE3DVAU"
        },
        componentRequirements: [
            {
                tackleId: "shaky-head-jighead",
                quantity: 1,
                required: true,
                notes: "Use a head and hook size that matches the worm, depth, and cover."
            },
            {
                tackleId: "soft-plastic",
                quantity: 1,
                required: true,
                notes: "Straight-tail finesse worms are a common starting point."
            }
        ],
        knotApplications: [
            {
                label: "Main line or leader to jighead",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
            }
        ],
        assemblySteps: [
            "Tie the Shaky Head Jighead directly to the main line or leader.",
            "Secure the nose of the soft plastic on the jighead's keeper, screw-lock, or pin so it is seated firmly against the head.",
            "Lay the hook along the bait to identify the natural re-entry point without stretching the plastic.",
            "Push the hook point through the bait at that location so the body remains straight.",
            "For a weed-resistant setup, lightly skin-hook or barely bury the point while keeping the hook gap usable.",
            "Confirm that the bait is straight and the head can contact bottom without the plastic twisting around the hook."
        ],
        setupNotes: [
            "Use the lightest head that maintains the bottom contact needed for the depth and wind.",
            "The bait keeper should hold the worm nose securely without bunching or tearing it."
        ],
        commonMistakes: [
            "Using a generic jighead that does not hold the worm securely in the intended shaky-head configuration.",
            "Rigging the worm crooked or stretched on the hook.",
            "Using excessive weight for a finesse presentation.",
            "Burying the hook point too deeply for reliable hooksets."
        ],
        safetyNotes: [
            "Keep fingers behind the hook point while threading and skin-hooking the bait."
        ],
        variationIds: ["ned-rig"],
    },
    {
        id: "free-rig",
        name: "Free Rig",
        summary: "A soft-plastic rig that lets a ringed sinker slide freely on the main line above a directly tied offset hook, separating the weight's fall from the bait.",
        createdVersion: "0.4.0",
        lastModifiedVersion: "0.5.0",
        isActive: true,
        difficulty: "Intermediate+",
        useCases: [
            "Giving a Texas-rigged soft plastic a freer fall behind the sinker",
            "Fishing points, rock, docks, and sparse cover",
            "Changing fall rate without adding a leader or swivel"
        ],
        conditionTags: [
            "Bottom Fishing",
            "Open Water",
            "Sparse Cover",
            "Deep Water",
            "Clear Water",
            "Stained Water"
        ],
        referenceLinks: [
            {
                label: "Bassmaster — Free Rig Insights",
                url: "https://www.bassmaster.com/how-to/news/free-rig-insights/"
            },
            {
                label: "Outdoor Life — How to Fish a Free Rig",
                url: "https://www.outdoorlife.com/fishing/free-rig/"
            }
        ],
        tutorialVideo: {
            platform: "youtube",
            title: "How To Rig Up The Free Rig (Bassfishing)",
            creator: "Fishin With GRAMPS",
            videoId: "_SyrQJ1i0RA",
            externalUrl: "https://www.youtube.com/watch?v=_SyrQJ1i0RA"
        },
        componentRequirements: [
            {
                tackleId: "ringed-sinker",
                quantity: 1,
                required: true,
                notes: "The main line passes through the sinker's external eye so the weight can move freely; do not tie or peg it."
            },
            {
                tackleId: "offset-worm-hook",
                quantity: 1,
                required: true,
                notes: "Tie the hook directly below the free-sliding sinker."
            },
            {
                tackleId: "soft-plastic",
                quantity: 1,
                required: true,
                notes: "Worms, creatures, craws, and other Texas-riggable plastics can be used."
            }
        ],
        knotApplications: [
            {
                label: "Main line to hook",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
            }
        ],
        assemblySteps: [
            "Pass the main line through the closed eye of the Ringed Sinker so the weight can slide freely up and down the line.",
            "Tie the Offset Worm Hook directly to the end of the main line below the sinker.",
            "Insert the hook point into the nose of the soft plastic, bring it out through the side, and slide the bait to the hook offset.",
            "Rotate the bait and locate the natural re-entry point so the body will remain straight.",
            "Reinsert the hook and lightly skin-hook or barely bury the point for a weed-resistant finish.",
            "Confirm that the Ringed Sinker remains completely free to move on the line and is not trapped by a peg, bead, or knot."
        ],
        setupNotes: [
            "The defining feature is unrestricted weight travel through the sinker's external eye.",
            "Use a lighter weight for a slower separation and a heavier weight when you want the sinker to reach bottom quickly ahead of the bait."
        ],
        commonMistakes: [
            "Tying the sinker to the line instead of letting the line slide through its eye.",
            "Using a through-hole bullet weight and treating the setup as an ordinary unpegged Texas Rig.",
            "Adding a peg that prevents the free-sliding action.",
            "Rigging the soft plastic crooked on the hook."
        ],
        safetyNotes: [
            "Use controlled casts because the freely moving sinker can slide and swing independently of the hook."
        ],
        variationIds: ["texas-rig", "carolina-rig"],
    },
    {
        id: "double-jig-crappie-rig",
        name: "Double-Jig Crappie Rig",
        summary: "A tandem crappie setup that presents two jighead-and-soft-plastic combinations at different positions on the same main line.",
        createdVersion: "0.4.0",
        lastModifiedVersion: "0.5.0",
        isActive: true,
        difficulty: "Intermediate+",
        useCases: [
            "Presenting two jig colors or profiles at different depths",
            "Vertical jigging or controlled slow presentations for crappie",
            "Locating the preferred depth of suspended fish"
        ],
        conditionTags: [
            "Open Water",
            "Deep Water",
            "Suspended Fish",
            "Light Cover",
            "Clear Water",
            "Stained Water"
        ],
        referenceLinks: [
            {
                label: "FishUSA — Crappie Fishing Setup Guide",
                url: "https://www.fishusa.com/learn/crappie-fishing-setup/"
            },
            {
                label: "Missouri Department of Conservation — Crappie Fishing Tips",
                url: "https://mdc.mo.gov/fishing/species/crappie/crappie-tips-fishing"
            }
        ],
        tutorialVideo: {
            platform: "youtube",
            title: "How To Tie a Double Jig Rig For Crappie",
            creator: "Kansas Angling Experience",
            videoId: "7EVa28J9y-Y",
            externalUrl: "https://www.youtube.com/watch?v=7EVa28J9y-Y"
        },
        componentRequirements: [
            {
                tackleId: "jighead",
                quantity: 2,
                required: true,
                notes: "Use two light jigheads appropriate for crappie and the intended depth."
            },
            {
                tackleId: "soft-plastic",
                quantity: 2,
                required: true,
                notes: "Rig one small crappie-sized soft plastic on each jighead."
            }
        ],
        knotApplications: [
            {
                label: "Main line to lower jighead",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
            },
            {
                label: "Upper jig branch loop",
                connectionType: "dropper-loop",
                recommendedKnotIds: [
                    "dropper-loop-knot"
                ],
                notes: "Form the branch loop in the main line above the lower jig, then attach the upper jig to the completed loop."
            }
        ],
        assemblySteps: [
            "Tie the lower Jighead to the end of the main line.",
            "Move 12 to 18 inches up the main line and form a short dropper loop or loop-knot connection for the upper Jighead.",
            "Attach the second Jighead to the upper loop so it hangs separately from the main line rather than directly against the lower jig.",
            "Thread one Soft Plastic Bait straight onto each jighead and keep both hook gaps usable.",
            "Hold the rig vertically and confirm that the two jigs remain separated rather than tangling together.",
            "Adjust spacing within a practical range when needed to cover the depth band where crappie are holding."
        ],
        setupNotes: [
            "Twelve to eighteen inches between jigs is a practical starting range for the standard learning setup.",
            "Using two different colors or profiles can help identify what the fish prefer without changing the fundamental rig."
        ],
        commonMistakes: [
            "Placing the two jigs so close together that they tangle repeatedly.",
            "Using jigheads that are unnecessarily heavy for a controlled crappie presentation.",
            "Leaving the upper dropper loop so long that it wraps around the main line.",
            "Threading either soft plastic crooked so it spins."
        ],
        safetyNotes: [
            "Remember that two exposed hooks are moving during every cast, lift, and landing sequence.",
            "Use controlled casts and secure both hooks before transport."
        ],
        variationIds: ["jighead-soft-plastic"],
    },
    {
        id: "jika-rig",
        name: "Jika Rig",
        summary: "A compact bottom-contact soft-plastic rig that connects an offset hook and hanging ringed sinker at a split-ring junction.",
        createdVersion: "0.4.0",
        lastModifiedVersion: "0.5.0",
        isActive: true,
        difficulty: "Advanced",
        useCases: [
            "Fishing soft plastics close to bottom with the weight below the hook eye",
            "Working rock, brush, grass edges, and compact cover",
            "Using a weed-resistant bait with an independently hanging weight"
        ],
        conditionTags: [
            "Bottom Fishing",
            "Heavy Cover",
            "Sparse Cover",
            "Rock",
            "Deep Water",
            "Stained Water"
        ],
        referenceLinks: [
            {
                label: "Bass Pro Shops — The Jika Fishing Rig",
                url: "https://1source.basspro.com/news-tips/fishing-tackle/6343/jika-fishing-rig-how-bass-pro-stacey-king"
            },
            {
                label: "BassResource — Fishing the Jika Rig",
                url: "https://www.bassresource.com/fishing/jika-rig.html"
            }
        ],
        tutorialVideo: {
            platform: "youtube",
            title: "How To Tie a Non Leadered Punch-Shot! (AKA THE JIKA RIG)",
            creator: "Mike Iaconelli Fishing",
            videoId: "uSmbuf-q2xg",
            externalUrl: "https://www.youtube.com/watch?v=uSmbuf-q2xg"
        },
        componentRequirements: [
            {
                tackleId: "split-ring",
                quantity: 1,
                required: true,
                notes: "Use the split ring as the central connection for the hook, hanging weight, and line."
            },
            {
                tackleId: "ringed-sinker",
                quantity: 1,
                required: true,
                notes: "Attach the sinker's closed eye to the split-ring connection so the weight hangs below the hook and moves independently."
            },
            {
                tackleId: "offset-worm-hook",
                quantity: 1,
                required: true,
                notes: "The hook is attached at the same compact junction as the weight."
            },
            {
                tackleId: "soft-plastic",
                quantity: 1,
                required: true,
                notes: "Texas-rig the soft plastic weedless on the offset hook."
            }
        ],
        knotApplications: [
            {
                label: "Main line or leader to split ring",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
            }
        ],
        assemblySteps: [
            "Use split-ring pliers to attach the Split Ring to the eye of the Offset Worm Hook.",
            "Attach the Ringed Sinker to the same split-ring junction so the weight hangs below the hook and can pivot independently.",
            "Tie the main line or leader securely to the split ring rather than trapping the weight on the line.",
            "Texas-rig the Soft Plastic Bait on the offset hook so the body is straight and the hook point is lightly skin-hooked or barely buried.",
            "Hold the rig by the line and confirm that the hook and weight both pivot freely from the central ring without crossing or binding.",
            "Inspect the split ring after assembly to confirm that the hook eye, sinker eye, and line cannot slip through an open edge."
        ],
        setupNotes: [
            "Some commercial Jika variants use two rings or a swivel, but the standard learning configuration keeps the key relationship: weight below the hook at a compact movable junction.",
            "Choose the lightest sinker that provides the bottom contact and fall rate needed."
        ],
        commonMistakes: [
            "Sliding the weight on the main line and accidentally building a Free Rig instead of a Jika Rig.",
            "Tying directly to the weight instead of the central hook/weight junction.",
            "Using a split ring too large for the hook eye or leaving a component caught at the ring opening.",
            "Rigging the soft plastic crooked or exposing too much hook point in heavy cover."
        ],
        safetyNotes: [
            "Use split-ring pliers rather than fingernails when installing small heavy-duty rings.",
            "Inspect the ring and weight connection frequently because a compact weighted rig can damage hardware during repeated contact with cover."
        ],
        variationIds: ["free-rig", "texas-rig"],
    },
    {
        id: "punch-pegged-texas-rig",
        name: "Punch / Pegged Texas Rig",
        summary: "A heavy-cover Texas Rig that pegs the bullet weight tight to a weedless soft plastic so the weight and bait penetrate dense vegetation together.",
        createdVersion: "0.4.0",
        lastModifiedVersion: "0.5.0",
        isActive: true,
        difficulty: "Advanced",
        useCases: [
            "Penetrating matted vegetation and dense grass",
            "Presenting a compact soft plastic through heavy cover",
            "Keeping the weight and bait together during vertical heavy-cover presentations"
        ],
        conditionTags: [
            "Heavy Cover",
            "Vegetation",
            "Shallow Water",
            "Stained Water",
            "Bottom Fishing"
        ],
        referenceLinks: [
            {
                label: "Wired2Fish — Texas Rig Setups for Bass: Punching vs. Pitching",
                url: "https://www.wired2fish.com/fishing-videos/texas-rig-setups-for-bass-punching-vs-pitching"
            },
            {
                label: "Wired2Fish — Best Punching and Texas Rig Setups for Heavy Matted Cover",
                url: "https://www.wired2fish.com/fishing-videos/best-punching-and-texas-rig-setups-for-bass-in-heavy-matted-cover"
            }
        ],
        tutorialVideo: {
            platform: "youtube",
            title: "How to Rig a Punch Rig for Heavy Cover Bass Fishing",
            creator: "Wired2Fish",
            videoId: "HzIMkN_xTtM",
            externalUrl: "https://www.youtube.com/watch?v=HzIMkN_xTtM"
        },
        componentRequirements: [
            {
                tackleId: "weight-peg",
                quantity: 1,
                required: true,
                notes: "The peg is required here because the purpose is to keep the weight tight to the bait through dense cover."
            },
            {
                tackleId: "bullet-weight",
                quantity: 1,
                required: true,
                notes: "Use the lightest heavy-cover weight that consistently penetrates the vegetation."
            },
            {
                tackleId: "offset-worm-hook",
                quantity: 1,
                required: true,
                notes: "Use a strong hook sized to the bait and heavy-cover application."
            },
            {
                tackleId: "soft-plastic",
                quantity: 1,
                required: true,
                notes: "Compact creature, craw, and streamlined soft plastics move through cover efficiently."
            }
        ],
        knotApplications: [
            {
                label: "Main line to hook",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
            }
        ],
        assemblySteps: [
            "Install the Weight Peg on the main line before the weight.",
            "Slide the Bullet Weight onto the line with the pointed end facing the rod.",
            "Tie the Offset Worm Hook to the main line.",
            "Texas-rig the Soft Plastic Bait on the hook so the body is straight and the point is securely skin-hooked or buried just under the surface.",
            "Slide the Weight Peg down until it holds the Bullet Weight tight against the hook and bait.",
            "Pull on the weight and bait separately to confirm that the peg prevents the weight from sliding away during the presentation."
        ],
        setupNotes: [
            "Unlike the standard Texas Rig, the weight peg is part of the defining heavy-cover configuration rather than an optional accessory.",
            "Heavier weights are used only when needed to penetrate the cover; the goal is reliable entry, not maximum weight."
        ],
        commonMistakes: [
            "Leaving the weight unpegged so it separates from the bait above the mat.",
            "Using more weight than necessary once the bait can already penetrate the cover.",
            "Rigging the bait crooked and creating a wider snag-prone profile.",
            "Using a hook or line system too light for the cover being fished."
        ],
        safetyNotes: [
            "Heavy weights and hooks carry substantial energy; use short controlled pitches and verify that the casting lane is clear.",
            "Inspect line near the weight and hook frequently for abrasion after fishing dense cover."
        ],
        variationIds: ["texas-rig"],
    },
    {
        id: "bottom-bouncer-spinner-rig",
        name: "Bottom-Bouncer / Spinner Rig",
        summary: "A trolling and drifting system that uses a wire bottom bouncer to maintain bottom contact while a spinner harness and bait trail behind it.",
        createdVersion: "0.4.0",
        lastModifiedVersion: "0.5.0",
        isActive: true,
        difficulty: "Expert",
        useCases: [
            "Trolling or drifting spinner harnesses for walleye",
            "Maintaining a baited spinner just above bottom across flats and contours",
            "Controlling depth while covering water from a boat"
        ],
        conditionTags: [
            "Deep Water",
            "Open Water",
            "Bottom Fishing",
            "Trolling",
            "Wind",
            "Light Current"
        ],
        referenceLinks: [
            {
                label: "FishUSA — Complete Walleye Harness + Bottom Bouncer Setup",
                url: "https://www.fishusa.com/learn/walleye-harness-bottom-bouncer-setup/"
            },
            {
                label: "Northland Fishing Tackle — Walleye Spinner Rig",
                url: "https://shop.northlandtackle.com/rigs/walleye-spinner-rig/"
            }
        ],
        tutorialVideo: {
            platform: "youtube",
            title: "How To Set a Bottom Bouncer and Spinner Rig for Walleye",
            creator: "Fishing 411 TV",
            videoId: "xRXzhffsHGM",
            externalUrl: "https://www.youtube.com/watch?v=xRXzhffsHGM"
        },
        componentRequirements: [
            {
                tackleId: "bottom-bouncer",
                quantity: 1,
                required: true,
                notes: "Choose bouncer weight for depth, speed, wind, and current while maintaining periodic bottom contact."
            },
            {
                tackleId: "spinner-harness",
                quantity: 1,
                required: true,
                notes: "Connect the harness to the trailing arm or snap of the bottom bouncer and keep the leader free of twists."
            },
            {
                tackleId: "bait",
                quantity: 1,
                required: true,
                notes: "Nightcrawlers, minnows, leeches, or suitable artificial trailers may be used with a compatible harness."
            }
        ],
        knotApplications: [
            {
                label: "Main line to bottom bouncer",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
            }
        ],
        assemblySteps: [
            "Inspect the Bottom Bouncer and identify the main-line attachment at the bend and the trailing harness attachment on the rear arm.",
            "Tie the main line securely to the bouncer's main-line connection point.",
            "Connect the Spinner Harness to the bouncer's trailing snap or swivel so the leader extends behind the weighted wire frame.",
            "Add bait to the harness hook or hooks while keeping the bait straight enough for the blade and harness to run cleanly.",
            "Lower the assembled rig beside the boat and confirm that the spinner blade turns and the harness does not twist around the bouncer wire.",
            "Deploy line until the bouncer reaches bottom, then take up slack so the wire ticks bottom periodically while the harness trails behind and above it."
        ],
        setupNotes: [
            "Use the lightest bouncer that maintains controlled bottom contact at the current depth and speed; a common starting rule is roughly one ounce per ten feet, adjusted for conditions.",
            "A roughly 36- to 60-inch harness leader is a practical starting range; shorter leaders simplify control while longer leaders add separation in clear water.",
            "Spinner blades create line twist, so the harness/bouncer connection should include a sound swivel or equivalent anti-twist connection."
        ],
        commonMistakes: [
            "Attaching the main line to the trailing harness arm instead of the bouncer's main-line connection.",
            "Dragging the bouncer continuously instead of maintaining controlled periodic bottom contact.",
            "Using too little weight to keep an effective line angle or too much weight for the depth and speed.",
            "Allowing the spinner harness to wrap around the bouncer wire during deployment.",
            "Running a twisted harness whose blade or bait no longer tracks correctly."
        ],
        safetyNotes: [
            "Deploy the weighted wire rig beside the boat rather than making an uncontrolled overhead cast.",
            "Keep hooks secured while baiting and handling the harness, especially when multiple hooks are present.",
            "Secure the rod when trolling because the bouncer and harness remain under continuous load."
        ],
        variationIds: ["live-bait-slip-sinker-rig"],
    },
    {
        id: "split-shot-bait-rig",
        name: "Split-Shot Bait Rig",
        summary: "A simple live- or natural-bait rig that uses fixed split shot above the hook to add light weight without a float.",
        createdVersion: "0.5.0",
        lastModifiedVersion: "0.5.0",
        isActive: true,
        difficulty: "Beginner",
        useCases: [
            "Fishing live or natural bait without a float",
            "Drifting bait in light current",
            "Tight-lining or presenting bait near the bottom"
        ],
        conditionTags: [
            "Shallow Water",
            "Deep Water",
            "Open Water",
            "Light Current",
            "Bottom Fishing"
        ],
        referenceLinks: [
            {
                label: "ODWC — Split the Difference",
                url: "https://www.wildlifedepartment.com/outdoorok/ooj/split-difference"
            },
            {
                label: "Missouri Department of Conservation — Trout Fishing Tips",
                url: "https://mdc.mo.gov/fishing/species/trout/trout-fishing-tips"
            }
        ],
        tutorialVideo: {
            platform: "youtube",
            title: "How to Make a Split Shot Rig for Panfish | Best Bluegill & Crappie Rigs",
            creator: "Show Me the Hawgs",
            videoId: "pw2hgUPDifM",
            externalUrl: "https://www.youtube.com/watch?v=pw2hgUPDifM"
        },
        componentRequirements: [
            {
                tackleId: "split-shot",
                quantity: 1,
                required: true,
                notes: "Start with one small shot 12 to 24 inches above the hook; add another only when extra weight is needed."
            },
            {
                tackleId: "hook",
                quantity: 1,
                required: true,
                notes: "Match hook size to the bait and target fish."
            },
            {
                tackleId: "bait",
                quantity: 1,
                required: true,
                notes: "Use worms, minnows, or other legal live or natural bait suited to the fish."
            }
        ],
        knotApplications: [
            {
                label: "Main line to hook",
                connectionType: "terminal-attachment",
                recommendedKnotIds: [
                    "improved-clinch-knot",
                    "palomar-knot",
                    "uni-knot"
                ],
                notes: null
            }
        ],
        assemblySteps: [
            "Tie the hook directly to the end of the main line.",
            "Use pliers to pinch one small split shot onto the main line about 12 to 24 inches above the hook.",
            "Add another split shot only if the bait needs more weight to reach the intended depth or maintain light bottom contact.",
            "Inspect the line where each split shot is attached and replace damaged line before fishing.",
            "Add live or natural bait to the hook and confirm the bait can move naturally."
        ],
        setupNotes: [
            "Twelve to twenty-four inches above the hook is a practical starting distance; adjust for depth, current, and presentation.",
            "Use the lightest split-shot weight that gets the bait to the intended depth or maintains the contact you need.",
            "This setup uses the hook and split shot directly on the main line without a float, sliding sinker, swivel, or required leader."
        ],
        commonMistakes: [
            "Using more split-shot weight than needed and making the bait move unnaturally.",
            "Crushing split shot hard enough to nick or weaken the line.",
            "Placing the shot so close to the hook that it restricts the bait's natural movement.",
            "Adding unnecessary terminal hardware and turning the setup into a different Rig family."
        ],
        safetyNotes: [
            "Attach and remove split shot with pliers rather than your teeth.",
            "Keep the baited hook controlled while adjusting weights and before casting."
        ],
        variationIds: [],
    },
    {
        id: "weighted-swimbait-hook-rig",
        name: "Weighted Swimbait Hook Rig",
        summary: "A paddle-tail swimbait rig built on a weighted wide-gap hook so the bait can swim with a streamlined, weed-resistant profile.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        difficulty: "Beginner+",
        useCases: ["Weedless swimming", "Open water and cover", "Depth control"],
        conditionTags: ["Open Water", "Light Cover", "Vegetation", "Shallow Water", "Deep Water"],
        referenceLinks: [
            { label: "Mustad — Power Lock Plus Spring Keeper Hook - Weighted", url: "https://mustad-fishing.com/us/products/91768sw" }
        ],
        tutorialVideo: {
            platform: "youtube",
            title: "How to rig the Power Lock Plus Hook for Swimbaits",
            creator: "Mustad Fishing",
            videoId: "32Fw4vimHWQ",
            externalUrl: "https://www.youtube.com/watch?v=32Fw4vimHWQ"
        },
        componentRequirements: [
            { tackleId: "weighted-swimbait-hook", quantity: 1, required: true, notes: "Match hook gap and weight to the swimbait body and the depth you need to reach." }
        ],
        lureBaitRequirements: [
            { lureBaitId: "paddle-tail-swimbait", quantity: 1, required: true, notes: "Choose a paddle-tail body that fits the hook without crowding the gap or bending the bait." }
        ],
        knotApplications: [
            { label: "Main line or leader to weighted swimbait hook", connectionType: "terminal-attachment", recommendedKnotIds: ["palomar-knot", "improved-clinch-knot", "uni-knot"], notes: null }
        ],
        assemblySteps: [
            "Match the paddle-tail swimbait to a weighted swimbait hook whose gap remains open enough for a hookset.",
            "Attach the bait's nose to the hook's keeper or screw-lock when present.",
            "Measure where the hook point should exit the swimbait so the body will lie straight.",
            "Pass the hook point through the body at that location and seat the bait straight on the hook.",
            "Skin-hook or lightly bury the point when a weed-resistant setup is needed, without deeply covering the point.",
            "Find the metal hook eye at the very front of the weighted swimbait hook, beside the screw-lock or keeper. Tie the main line or leader to that hook eye—not to the screw-lock, keeper, belly weight, or hook bend—and confirm the bait hangs straight before fishing."
        ],
        setupNotes: ["A straight-rigged swimbait tracks more naturally and lets the paddle tail work freely.", "Use the lightest integrated weight that reaches the intended depth while preserving the desired swimming action."],
        commonMistakes: ["Using a hook too small for the swimbait body and blocking the hook gap.", "Rigging the bait crooked so it rolls instead of tracking straight.", "Burying the hook point so deeply that it cannot clear the plastic on a strike."],
        safetyNotes: ["Keep the hook point controlled while threading and measuring the soft plastic.", "Check behind you before casting a weighted lure."],
        variationIds: ["jighead-soft-plastic"]
    },
    {
        id: "tube-jig-rig",
        name: "Tube Jig Rig",
        summary: "A tube lure rig built with a jighead inserted inside the hollow body so the weighted head stays hidden and the hook exits through the plastic.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        difficulty: "Beginner+",
        useCases: ["Rocky bottoms", "Dragging or hopping", "Finesse presentation"],
        conditionTags: ["Rock", "Open Water", "Deep Water", "Light Current", "Clear Water", "Stained Water"],
        referenceLinks: [
            { label: "Mustad / TUF-LINE — Take 'Em With Tubes", url: "https://mustad-fishing.com/tuf-line/us/article/take-em-with-tubes" },
            { label: "Tackle Warehouse — Tube Jig Heads", url: "https://www.tacklewarehouse.com/catpage-TUBEJIGS.html" }
        ],
        tutorialVideo: {
            platform: "youtube",
            title: "How To Rig A Tube Bait The Right Way",
            creator: "BassResource - The Ultimate Bass Fishing Resource",
            videoId: "EibSWhI6nbM",
            externalUrl: "https://www.youtube.com/watch?v=EibSWhI6nbM"
        },
        componentRequirements: [
            { tackleId: "tube-jighead", quantity: 1, required: true, notes: "Use an internal tube head that fits the hollow body without splitting or distorting it." }
        ],
        lureBaitRequirements: [
            { lureBaitId: "tube", quantity: 1, required: true, notes: "Use a hollow tube body sized to the jighead and hook." }
        ],
        knotApplications: [
            { label: "Main line or leader to tube jighead", connectionType: "terminal-attachment", recommendedKnotIds: ["palomar-knot", "improved-clinch-knot", "uni-knot"], notes: null }
        ],
        assemblySteps: [
            "Choose a tube jighead that will slide into the hollow tube body without tearing it.",
            "Insert the weighted head into the open rear of the tube and work it forward inside the body.",
            "Push the jighead's line-tie eye through the tube wall at the natural front position without making an oversized hole.",
            "Guide the hook point out through the tube so the body remains straight and the hook gap stays clear.",
            "After the jighead is seated inside the tube, locate the small metal line-tie eye protruding through the front/top of the tube body. Tie the main line or leader to that exposed eye—not to the hook bend or the lead head hidden inside the tube—and test the knot firmly.",
            "Confirm that the tube is seated straight and the tentacles are free to move."
        ],
        setupNotes: ["Internal tube heads preserve the compact tube profile and can create a gliding or spiraling fall depending on the head and presentation.", "Increase jighead weight only as needed to maintain the intended depth or bottom contact."],
        commonMistakes: ["Using a jighead too large for the tube cavity and splitting the bait.", "Pushing the line-tie through an oversized hole that lets the head shift inside the tube.", "Rigging the tube crooked so it falls or tracks unnaturally."],
        safetyNotes: ["Keep fingers clear of the hook point while pushing the jighead through the tube body.", "Check behind you before casting a weighted jig."],
        variationIds: ["jighead-soft-plastic"]
    },

]);

console.info(
    `[Loaded] ${RIG_DATA_BUILD_INFO.file} | ` +
    `${RIG_DATA_BUILD_INFO.milestone} | ` +
    `${RIG_DATA.length} records`
);
