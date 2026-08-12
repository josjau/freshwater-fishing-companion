/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: data/rigs.js
   PURPOSE: Provides canonical learning-tier Rig records for
   browsing, instruction, verified references, and tackle readiness.
   ========================================================== */

"use strict";

const RIG_DATA_BUILD_INFO = Object.freeze({
    file: "data/rigs.js",
    milestone: "Beginner Media + Intermediate Expansion"
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
        lastModifiedVersion: "0.3.1",
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
        lastModifiedVersion: "0.3.1",
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
        lastModifiedVersion: "0.3.1",
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
        lastModifiedVersion: "0.3.0",
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
        variationIds: ["carolina-rig", "weightless-soft-plastic-rig"],
        imageIds: []
    },
    {
        id: "jighead-soft-plastic",
        name: "Jighead + Soft Plastic",
        summary: "A simple weighted-lure setup that threads a soft plastic straight onto a jighead for casting, swimming, hopping, or vertical presentation.",
        createdVersion: "0.2.8",
        lastModifiedVersion: "0.3.1",
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
        variationIds: ["ned-rig"],
        imageIds: []
    },
    {
        id: "inline-spinner-setup",
        name: "Inline Spinner Setup",
        summary: "A ready-to-fish cast-and-retrieve setup built around a compact lure whose blade spins around a central shaft.",
        createdVersion: "0.2.8",
        lastModifiedVersion: "0.3.1",
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
    },
    {
        id: "wacky-rig",
        name: "Wacky Rig",
        summary: "A weightless soft-plastic setup that hooks a stick-style worm through its middle so both ends can move freely.",
        createdVersion: "0.2.9",
        lastModifiedVersion: "0.3.1",
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
        techniqueIds: [],
        variationIds: [],
        imageIds: []
    },
    {
        id: "ned-rig",
        name: "Ned Rig",
        summary: "A compact finesse setup pairing a light mushroom-style jighead with a short soft-plastic bait.",
        createdVersion: "0.2.9",
        lastModifiedVersion: "0.3.1",
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
        techniqueIds: [],
        variationIds: ["jighead-soft-plastic"],
        imageIds: []
    },
    {
        id: "weightless-soft-plastic-rig",
        name: "Weightless Soft-Plastic Rig",
        summary: "A weed-resistant soft-plastic setup tied directly to an offset hook with no sinker or other added weight.",
        createdVersion: "0.2.9",
        lastModifiedVersion: "0.3.1",
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
        techniqueIds: [],
        variationIds: ["texas-rig"],
        imageIds: []
    },
    {
        id: "drop-shot-rig",
        name: "Drop Shot Rig",
        summary: "A finesse rig that holds a soft plastic above a bottom-contact weight while keeping the hook tied directly to the main line.",
        createdVersion: "0.3.1",
        lastModifiedVersion: "0.3.1",
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
        techniqueIds: [],
        variationIds: [],
        imageIds: []
    },
    {
        id: "carolina-rig",
        name: "Carolina Rig",
        summary: "A bottom-contact soft-plastic rig that separates a sliding weight from the bait with a swivel and leader.",
        createdVersion: "0.3.1",
        lastModifiedVersion: "0.3.1",
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
        techniqueIds: [],
        variationIds: ["texas-rig", "basic-bottom-rig"],
        imageIds: []
    },
    {
        id: "live-bait-slip-sinker-rig",
        name: "Live-Bait Slip-Sinker Rig",
        summary: "A sliding-sinker live-bait rig that lets a fish move the line with reduced resistance while the bait trails behind a swivel and leader.",
        createdVersion: "0.3.1",
        lastModifiedVersion: "0.3.1",
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
        techniqueIds: [],
        variationIds: ["basic-bottom-rig"],
        imageIds: []
    },
    {
        id: "three-way-rig",
        name: "Three-Way Rig",
        summary: "A current-oriented bottom rig that uses a three-way swivel to separate the main line, bait leader, and sinker dropper.",
        createdVersion: "0.3.1",
        lastModifiedVersion: "0.3.1",
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
