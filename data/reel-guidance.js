/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: data/reel-guidance.js
   PURPOSE: Owns Reel & Line Setup Decision Knowledge used by the
   Get Your Reel Ready guided workflow without altering canonical Knots.
   ========================================================== */

"use strict";

const REEL_GUIDANCE_BUILD_INFO = Object.freeze({
    file: "data/reel-guidance.js",
    milestone: "Knots — Production Package 3 Block 3.7"
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
    EQUIPMENT_COMPLETE: "equipment-complete",
    BACKING_DECISION: "backing-decision",
    SPOOL_CONNECTION_PLAN: "spool-connection-plan",
    SPOOLING_INSTRUCTIONS: "spooling-instructions"
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

const REEL_BACKING_CHOICES = Object.freeze({
    none: Object.freeze({
        id: "none",
        title: "No Separate Backing",
        description: "Attach the selected monofilament or fluorocarbon main line directly to the spool for the simplest beginner setup."
    }),
    "monofilament-backing": Object.freeze({
        id: "monofilament-backing",
        title: "Monofilament Backing",
        description: "Start with monofilament on the spool, then join it to the selected main line. This is the safer general path when braid could slip on a smooth spool and can also reduce the amount of main line needed to fill a spool."
    }),
    "direct-braid-approved": Object.freeze({
        id: "direct-braid-approved",
        title: "Direct Braid — Reel Approved",
        description: "Use this only when the exact reel or spool explicitly provides a braid-ready attachment surface or manufacturer-approved direct-braid method."
    })
});

const REEL_SPOOLING_GUIDANCE = Object.freeze({
    spinning: Object.freeze({
        title: "Spool Your Spinning Reel",
        summary: "Feed line onto the fixed spool under steady tension while controlling line twist and stopping short of the spool lip.",
        items: Object.freeze([
            Object.freeze({
                text: "Route the line through the first rod guide above the reel before winding so the line approaches the reel in the normal path.",
                emphasis: Object.freeze(["Route the line through the first rod guide above the reel before winding"])
            }),
            Object.freeze({
                text: "Open the bail before securing the line to the spool. After the spool connection is complete, close the bail before you begin winding.",
                emphasis: Object.freeze(["Open the bail before securing the line to the spool.", "close the bail before you begin winding"])
            }),
            Object.freeze({
                text: "For monofilament or fluorocarbon, start with the filler spool lying flat so the line comes off counterclockwise. After about 15 handle turns, pause and check for coils or twist; if twist forms, flip the filler spool and continue. Braid does not rely on the same memory-direction check, but it should still feed cleanly without loose loops.",
                emphasis: Object.freeze(["start with the filler spool lying flat so the line comes off counterclockwise", "pause and check for coils or twist", "flip the filler spool and continue"])
            }),
            Object.freeze({
                text: "Keep steady pressure on the incoming line with your fingers or a soft cloth so the line packs evenly without slack.",
                emphasis: Object.freeze(["Keep steady pressure on the incoming line"])
            }),
            Object.freeze({
                text: "Stop when the line is about 1/8 inch below the spool's outer lip. Do not fill the line flush with or beyond the lip.",
                emphasis: Object.freeze(["Stop when the line is about 1/8 inch below the spool's outer lip."])
            }),
            Object.freeze({
                text: "If the exact reel manufacturer's instructions specify a different line-loading method or fill level, follow the instructions for that reel model.",
                emphasis: Object.freeze(["follow the instructions for that reel model"])
            })
        ])
    }),
    spincast: Object.freeze({
        title: "Spool Your Spincast Reel",
        summary: "Use the reel's front-cover line path, wind slowly under light tension, and inspect the hidden spool as it fills.",
        items: Object.freeze([
            Object.freeze({
                text: "Remove the front cover using the method specified for your reel, and feed the line through the cover opening before the line is secured to the spool.",
                emphasis: Object.freeze(["feed the line through the cover opening before the line is secured to the spool"])
            }),
            Object.freeze({
                text: "Reattach the front cover before normal winding so the reel's pickup system guides line onto the enclosed spool. If your setup uses backing and a backing-to-main-line connection, follow the exact reel's line-change procedure so the connection passes cleanly through the cover and pickup system.",
                emphasis: Object.freeze(["Reattach the front cover before normal winding", "follow the exact reel's line-change procedure"])
            }),
            Object.freeze({
                text: "Use only a line type and size that the actual spincast reel supports. Braided line may not work correctly on some spincast reels even when it works on other reel types.",
                emphasis: Object.freeze(["Use only a line type and size that the actual spincast reel supports.", "Braided line may not work correctly on some spincast reels"])
            }),
            Object.freeze({
                text: "Hold the incoming line between your thumb and forefinger with light, steady tension and wind slowly so the line lays on without loose coils.",
                emphasis: Object.freeze(["light, steady tension", "wind slowly"])
            }),
            Object.freeze({
                text: "Periodically remove the front cover and inspect the spool. Stop when the line is about 1/8 inch below the top of the spool rather than filling it completely to the edge.",
                emphasis: Object.freeze(["Periodically remove the front cover and inspect the spool.", "Stop when the line is about 1/8 inch below the top of the spool"])
            }),
            Object.freeze({
                text: "If the exact reel manufacturer's instructions differ, use the model-specific cover, routing, and fill procedure.",
                emphasis: Object.freeze(["use the model-specific cover, routing, and fill procedure"])
            })
        ])
    }),
    baitcasting: Object.freeze({
        title: "Spool Your Baitcasting Reel",
        summary: "Feed line straight through the reel's line guide, pack it firmly and evenly, and leave a small margin below the spool edge.",
        items: Object.freeze([
            Object.freeze({
                text: "Route the line through the rod guides and through the baitcaster's line guide before it reaches the spool. Do not bypass the reel's line guide.",
                emphasis: Object.freeze(["through the baitcaster's line guide", "Do not bypass the reel's line guide."])
            }),
            Object.freeze({
                text: "Keep the filler spool upright on its edge so the line feeds off the top of the filler spool and travels straight toward the reel.",
                emphasis: Object.freeze(["Keep the filler spool upright on its edge", "line feeds off the top of the filler spool"])
            }),
            Object.freeze({
                text: "Apply constant, firm pressure to the incoming line while winding so it packs tightly and evenly. Use a soft cloth or towel instead of bare fingers when greater pressure is needed, especially with braid.",
                emphasis: Object.freeze(["Apply constant, firm pressure to the incoming line", "packs tightly and evenly"])
            }),
            Object.freeze({
                text: "Winding tension here means pressure on the incoming fishing line. It is not an instruction to change the reel's casting spool-tension knob or braking system.",
                emphasis: Object.freeze(["Winding tension here means pressure on the incoming fishing line.", "not an instruction to change the reel's casting spool-tension knob or braking system"])
            }),
            Object.freeze({
                text: "Stop when the line is about 1/8 inch below the spool's outer edge or at the reel manufacturer's specified fill mark. Underfilling reduces performance; overfilling increases the chance of line-control problems.",
                emphasis: Object.freeze(["Stop when the line is about 1/8 inch below the spool's outer edge or at the reel manufacturer's specified fill mark."])
            }),
            Object.freeze({
                text: "If the exact reel manufacturer's instructions specify a different attachment, line-feed, or fill method, follow that model-specific guidance.",
                emphasis: Object.freeze(["follow that model-specific guidance"])
            })
        ])
    })
});

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
    `${Object.keys(REEL_EQUIPMENT_GUIDANCE).length} equipment guidance groups | ` +
    `${Object.keys(REEL_BACKING_CHOICES).length} backing choices | ` +
    `${Object.keys(REEL_SPOOLING_GUIDANCE).length} spooling profiles`
);
