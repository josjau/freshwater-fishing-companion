/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: data/reel-guidance.js
   PURPOSE: Owns Reel & Line Setup Decision Knowledge used by the
   Get Your Reel Ready guided workflow without altering canonical Knots.
   ========================================================== */

"use strict";

const REEL_GUIDANCE_BUILD_INFO = Object.freeze({
    file: "data/reel-guidance.js",
    milestone: "Knots — Production Package 3 Block 3.5"
});

const REEL_SETUP_STEP_IDS = Object.freeze({
    START: "start",
    REEL_TYPE: "reel-type",
    LINE_SELECTION: "line-selection",
    LINE_HELP: "line-help",
    LINE_IDENTIFICATION: "line-identification",
    LINE_SELECTION_COMPLETE: "line-selection-complete",
    TARGET_FISH: "target-fish",
    TARGET_GUIDANCE: "target-guidance",
    REEL_IDENTIFICATION_HELP: "reel-identification-help",
    EQUIPMENT_CHECK: "equipment-check",
    READ_REEL: "read-reel",
    READ_ROD: "read-rod",
    EQUIPMENT_MISMATCH: "equipment-mismatch",
    EQUIPMENT_COMPLETE: "equipment-complete"
});

const REEL_SETUP_ENTRY_OPTIONS = Object.freeze([
    Object.freeze({
        id: "new-empty-reel",
        title: "New or Empty Reel",
        description: "Start with a reel that has no usable fishing line on the spool."
    }),
    Object.freeze({
        id: "replace-existing-line",
        title: "Replace Existing Line",
        description: "Remove old or unwanted line, then build a fresh line system on the reel."
    })
]);

const REEL_TYPE_OPTIONS = Object.freeze([
    Object.freeze({
        id: "spinning",
        title: "Spinning Reel",
        description: "The spool is fixed and exposed, with a bail that wraps line around the spool."
    }),
    Object.freeze({
        id: "spincast",
        title: "Spincast Reel",
        description: "The line spool is enclosed by a front cover and the reel usually uses a push button."
    }),
    Object.freeze({
        id: "baitcasting",
        title: "Baitcasting Reel",
        description: "The spool itself rotates and sits across the reel body above the rod."
    }),
    Object.freeze({
        id: "not-sure",
        title: "I'm Not Sure",
        description: "Use beginner recognition help before choosing a reel-specific setup path."
    })
]);

const REEL_LINE_TYPE_GUIDANCE = Object.freeze({
    monofilament: Object.freeze({
        id: "monofilament",
        title: "Monofilament",
        selectionDescription: "Forgiving, easy to manage, and easy to knot. A strong general starting point for a first freshwater setup.",
        identificationCue: "Usually one smooth strand that feels softer and stretchier than fluorocarbon.",
        beginnerGuidance: "Easy beginner choice: monofilament is manageable, knot-friendly, and its stretch makes it forgiving while you learn.",
        tradeoff: "Tradeoff: the extra stretch reduces sensitivity compared with braid and some fluorocarbon setups."
    }),
    fluorocarbon: Object.freeze({
        id: "fluorocarbon",
        title: "Fluorocarbon",
        selectionDescription: "Low-visibility, sinking line with useful sensitivity and abrasion resistance, but it is usually stiffer than monofilament.",
        identificationCue: "Usually one smooth, nearly clear strand that often feels stiffer or wirier than monofilament.",
        beginnerGuidance: "Choose fluorocarbon when its low visibility, sinking behavior, or abrasion resistance is useful and your reel is suited to the line you selected.",
        tradeoff: "Tradeoff: fluorocarbon is typically less manageable and less forgiving for a first full-spool setup than monofilament."
    }),
    braid: Object.freeze({
        id: "braid",
        title: "Braid",
        selectionDescription: "Thin-diameter, very low-stretch line with high sensitivity and strength for its diameter.",
        identificationCue: "Looks and feels woven or fibrous instead of like one smooth plastic strand.",
        beginnerGuidance: "Choose braid when you specifically want very low stretch, high sensitivity, or high strength for a small diameter.",
        tradeoff: "Tradeoff: braid is more visible, can slip with some spool setups, and may call for equipment-specific backing or a leader."
    })
});

const REEL_LINE_GUIDANCE_ACTIONS = Object.freeze([
    Object.freeze({
        id: "help-me-choose",
        title: "Help Me Choose",
        description: "Start from a simple beginner recommendation for your reel type, then refine line strength in the next step."
    }),
    Object.freeze({
        id: "not-sure-line",
        title: "I'm Not Sure",
        description: "Use simple visual and handling cues to identify the line you already have."
    })
]);

const REEL_BEGINNER_LINE_RECOMMENDATIONS = Object.freeze({
    spinning: Object.freeze({
        lineTypeId: "monofilament",
        label: "Easy beginner choice",
        reason: "Monofilament is a manageable and forgiving starting point for learning a spinning reel."
    }),
    spincast: Object.freeze({
        lineTypeId: "monofilament",
        label: "Easy beginner choice",
        reason: "Monofilament is the simplest starting point for most beginner spincast setups; confirm the line rating printed on your reel before spooling."
    }),
    baitcasting: Object.freeze({
        lineTypeId: "monofilament",
        label: "Easy beginner choice",
        reason: "Monofilament is an inexpensive and forgiving starting point while learning a baitcasting reel before moving to more specialized line choices."
    }),
    "not-sure": Object.freeze({
        lineTypeId: "monofilament",
        label: "Easy beginner choice",
        reason: "If the reel type is still uncertain, monofilament is the most forgiving general starting point. Confirm the reel type and capacity before final spooling."
    })
});

const REEL_LINE_COMPATIBILITY_NOTES = Object.freeze({
    spincast: Object.freeze({
        braid: "Compatibility check required: braided line may not work properly on some spincast reels. Confirm your reel's markings or manufacturer guidance before continuing."
    }),
    "not-sure": Object.freeze({
        monofilament: "Reel type still needs confirmation before final line-capacity and spooling instructions.",
        fluorocarbon: "Reel type still needs confirmation before final line-capacity and spooling instructions.",
        braid: "Reel type still needs confirmation before final line-capacity, backing, and spooling instructions."
    })
});

const REEL_TARGET_FISH_PROFILES = Object.freeze([
    Object.freeze({
        id: "all-around-freshwater",
        title: "All-Around Freshwater",
        description: "A general starting point when you want one beginner setup for several common freshwater fish.",
        recommendedRange: "6–12 lb",
        easyChoice: "8 lb",
        guidance: "Eight-pound test is a practical all-around beginner reference for a medium-light freshwater setup.",
        caution: "Final line strength still has to fit the rod and reel ratings."
    }),
    Object.freeze({
        id: "panfish",
        title: "Panfish — Bluegill & Crappie",
        description: "Light freshwater fish that are commonly targeted with small hooks, jigs, and bobber rigs.",
        recommendedRange: "4–6 lb",
        easyChoice: "6 lb",
        guidance: "This range overlaps established light-line guidance for bluegill and crappie while remaining approachable for a beginner.",
        caution: "Heavy cover or frequent snags may justify moving heavier after the equipment check."
    }),
    Object.freeze({
        id: "trout",
        title: "Trout",
        description: "A light-line starting point for common stocked and stream trout situations.",
        recommendedRange: "2–4 lb",
        easyChoice: "4 lb",
        guidance: "Clear-water trout are commonly approached with very light line, so four-pound test is the more forgiving end of this beginner range.",
        caution: "Use a properly set drag and confirm your equipment is designed for line this light."
    }),
    Object.freeze({
        id: "bass",
        title: "Bass",
        description: "A simple beginner starting point for largemouth and similar freshwater bass fishing.",
        recommendedRange: "6–8 lb",
        easyChoice: "8 lb",
        guidance: "Eight-pound test is a manageable starting point on a basic medium-action bass setup before cover and technique-specific optimization.",
        caution: "Heavy vegetation, wood, or specialized presentations can require substantially heavier line later."
    }),
    Object.freeze({
        id: "walleye",
        title: "Walleye",
        description: "A medium-light starting range for common spinning-reel walleye approaches.",
        recommendedRange: "6–10 lb",
        easyChoice: "8 lb",
        guidance: "Eight-pound test sits near the middle of a common six- to ten-pound walleye setup range.",
        caution: "Technique, depth, and leader choice can change the final system."
    }),
    Object.freeze({
        id: "catfish",
        title: "Catfish",
        description: "A heavier rod-and-reel starting point for general catfish fishing rather than trophy-specific tackle.",
        recommendedRange: "17–20 lb",
        easyChoice: "20 lb",
        guidance: "Catfish commonly justify heavier line than panfish, trout, bass, or walleye; twenty-pound test is a conservative beginner reference for a heavier setup.",
        caution: "Large blue or flathead catfish, strong current, or heavy cover can require much heavier specialized gear."
    })
]);

const REEL_EQUIPMENT_GUIDANCE = Object.freeze({
    reel: Object.freeze({
        title: "How to Read Your Reel",
        summary: "Reel capacity markings pair a line size with the approximate amount of that line the spool is designed to hold.",
        items: Object.freeze([
            "Find the line-capacity marking on the spool, reel body, package, manual, or official model specification.",
            "A capacity such as 8 lb / 140 yd or 8-140 pairs line strength with approximate spool capacity.",
            "Some manufacturers print the order differently. A marking such as 120 yd / 10 lb is yards first and pounds second, so use the printed headings or manual instead of assuming the order.",
            "Metric capacity may pair line diameter and length, such as 0.25 mm / 160 m.",
            "If Mono and Braid capacities are listed separately, use the listing for the line type you actually selected.",
            "Numbers such as 1000, 2500, or 3000 identify reel size or model families; they are not direct pound-test ratings."
        ])
    }),
    rod: Object.freeze({
        title: "How to Read Your Rod",
        summary: "Rod markings usually give a recommended line-strength range separately from the lure-weight range.",
        items: Object.freeze([
            "Look on the rod blank or official model specification for Line Wt, Line, or Line Rating.",
            "A marking such as 6-12 lb gives the manufacturer's line-strength range for that rod model.",
            "Do not confuse line rating with Lure Wt, which is often shown separately in ounces, such as 1/4-5/8 oz.",
            "Your final line system should fit the rod's line rating as well as the reel's capacity guidance for the line type you selected.",
            "If the rod marking is missing or unreadable, use the exact model number to check the manufacturer's official specification before spooling."
        ])
    }),
    mismatch: Object.freeze({
        title: "If the Ratings Do Not Match",
        summary: "Do not force a line choice that falls outside the guidance for either piece of equipment.",
        items: Object.freeze([
            "Use a line choice that fits both the reel capacity guidance and the rod line rating, or change the equipment before spooling.",
            "If the reel lists capacity by diameter instead of pound-test, compare the diameter printed on the line package or manufacturer specification.",
            "If you still cannot verify the markings, stop before spooling and look up the exact reel and rod models from their manufacturers."
        ])
    })
});

console.info(
    `[Loaded] ${REEL_GUIDANCE_BUILD_INFO.file} | ` +
    `${REEL_GUIDANCE_BUILD_INFO.milestone} | ` +
    `${REEL_SETUP_ENTRY_OPTIONS.length} entry modes | ` +
    `${REEL_TYPE_OPTIONS.length} reel types | ` +
    `${Object.keys(REEL_LINE_TYPE_GUIDANCE).length} line types | ` +
    `${REEL_TARGET_FISH_PROFILES.length} target profiles | ` +
    `${Object.keys(REEL_EQUIPMENT_GUIDANCE).length} equipment guidance groups`
);
