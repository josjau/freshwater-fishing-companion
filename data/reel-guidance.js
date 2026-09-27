/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: data/reel-guidance.js
   PURPOSE: Owns Get Your Reel Ready Decision Knowledge without
   altering canonical Knots or duplicating Fish category identity.
   ========================================================== */

"use strict";

const REEL_GUIDANCE_BUILD_INFO = Object.freeze({
    file: "data/reel-guidance.js",
    milestone: "Knots Guide — CP9.4 Get Your Reel Ready Migration"
});

// Internal screens are separate from the fixed five-phase progress model.
// Contextual Reference surfaces are intentionally not workflow step IDs.
const REEL_SETUP_STEP_IDS = Object.freeze({
    START: "start",
    REEL_TYPE: "reel-type",
    LINE_TYPE: "line-type",
    TARGET_FISH: "target-fish",
    LINE_WEIGHT: "line-weight",
    EQUIPMENT: "equipment",
    BACKING_DECISION: "backing-decision",
    SPOOL: "spool",
    READY: "ready"
});

const REEL_SETUP_PHASES = Object.freeze([
    Object.freeze({ id: "reel", title: "Reel" }),
    Object.freeze({ id: "line", title: "Line" }),
    Object.freeze({ id: "equipment", title: "Equipment" }),
    Object.freeze({ id: "spool", title: "Spool" }),
    Object.freeze({ id: "ready", title: "Ready" })
]);

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
        description: "The spool is fixed and exposed, with a bail that wraps line around the spool.",
        recommendedFirstSetup: true,
        recognitionTraits: Object.freeze([
            "Fixed, exposed spool below the rod.",
            "Wire bail rotates around the spool when the handle turns.",
            "Line leaves the spool in coils rather than the spool rotating during a cast."
        ])
    }),
    Object.freeze({
        id: "spincast",
        title: "Spincast Reel",
        description: "The line spool is enclosed by a front cover and the reel usually uses a push button.",
        recognitionTraits: Object.freeze([
            "Closed front cover hides most of the spool.",
            "Push-button release is common on the back of the reel.",
            "Line exits through a small opening in the front cover."
        ])
    }),
    Object.freeze({
        id: "baitcasting",
        title: "Baitcasting Reel",
        description: "The spool itself rotates and sits across the reel body above the rod.",
        recognitionTraits: Object.freeze([
            "Reel sits above the rod handle.",
            "Exposed spool rotates during the cast and retrieve.",
            "Line passes through a level-wind guide in front of the spool on most models."
        ])
    })
]);

const REEL_LINE_TYPE_GUIDANCE = Object.freeze({
    monofilament: Object.freeze({
        id: "monofilament",
        title: "Monofilament",
        selectionDescription: "Forgiving, easy to manage, and easy to knot. A strong general starting point for a first freshwater setup.",
        identificationCue: "Usually one smooth strand that feels softer and stretchier than fluorocarbon.",
        beginnerGuidance: "Easy beginner choice: monofilament is manageable, knot-friendly, and its stretch makes it forgiving while you learn.",
        tradeoff: "The extra stretch reduces sensitivity compared with braid and some fluorocarbon setups.",
        weightInterpretation: "For this beginner workflow, the approved target starting references below are Monofilament values. Confirm the actual pound-test you will spool.",
        recommendedFirstSetup: true
    }),
    fluorocarbon: Object.freeze({
        id: "fluorocarbon",
        title: "Fluorocarbon",
        selectionDescription: "Low-visibility, sinking line with useful sensitivity and abrasion resistance, but it is usually stiffer than monofilament.",
        identificationCue: "Usually one smooth, nearly clear strand that often feels stiffer or wirier than monofilament.",
        beginnerGuidance: "Choose fluorocarbon when its low visibility, sinking behavior, or abrasion resistance is useful and your reel is suited to the line you selected.",
        tradeoff: "Fluorocarbon is typically less manageable and less forgiving for a first full-spool setup than monofilament.",
        weightInterpretation: "The target range is a fishing-strength reference, not an automatic Fluorocarbon prescription. Choose and confirm the actual pound-test that fits your equipment and line package."
    }),
    braid: Object.freeze({
        id: "braid",
        title: "Braid",
        selectionDescription: "Thin-diameter, very low-stretch line with high sensitivity and strength for its diameter.",
        identificationCue: "Looks and feels woven or fibrous instead of like one smooth plastic strand.",
        beginnerGuidance: "Choose braid when you specifically want very low stretch, high sensitivity, or high strength for a small diameter.",
        tradeoff: "Braid is more visible, can slip with some spool setups, and may call for equipment-specific backing or a later leader.",
        weightInterpretation: "Use the target range only as a fish-strength reference. Braid is much thinner for a given pound-test than Monofilament, so do not copy a Monofilament number blindly. Confirm the actual Braid pound-test and reel capacity guidance."
    })
});

// The selector uses common beginner freshwater package strengths. Moving the
// selector never changes the approved recommendation; confirmation is explicit.
const REEL_LINE_WEIGHT_OPTIONS = Object.freeze([2, 4, 6, 8, 10, 12, 15, 17, 20, 25, 30]);

// All-Around is Reel Setup-owned. The other records reference canonical Fish
// category IDs; display names and category order are derived from FISH_CATEGORY_DATA.
const REEL_TARGET_FISH_PROFILES = Object.freeze([
    Object.freeze({
        id: "all-around-freshwater",
        categoryId: null,
        title: "All-Around Freshwater",
        description: "A general starting point when you want one beginner setup for several common freshwater fish.",
        strengthReference: "6–12 lb",
        monofilamentStartWeight: 10,
        lighterAlternativeWeight: 8,
        guidance: "Ten-pound Monofilament is the preferred all-around beginner starting point; 8 lb Monofilament remains a lighter general-purpose alternative.",
        caution: "Final line strength still has to fit the rod and reel ratings and the actual fishing situation."
    }),
    Object.freeze({
        id: "bass",
        categoryId: "bass",
        description: "A beginner starting point for common freshwater bass fishing.",
        strengthReference: "8–12 lb",
        monofilamentStartWeight: 10,
        guidance: "Ten-pound Monofilament is the approved beginner starting reference for the broad Bass path.",
        caution: "Heavy vegetation, wood, or specialized presentations can require substantially heavier line later."
    }),
    Object.freeze({
        id: "catfish",
        categoryId: "catfish",
        description: "A heavier rod-and-reel starting point for general catfish fishing rather than trophy-specific tackle.",
        strengthReference: "15–20 lb",
        monofilamentStartWeight: 20,
        guidance: "Twenty-pound Monofilament is the approved broad beginner starting reference for general Catfish fishing.",
        caution: "Large blue or flathead catfish, strong current, or heavy cover can require much heavier specialized gear."
    }),
    Object.freeze({
        id: "sunfish-crappie",
        categoryId: "sunfish-crappie",
        description: "A light-line starting point for crappie, bluegill, and similar small freshwater fish.",
        strengthReference: "4–6 lb",
        monofilamentStartWeight: 6,
        guidance: "Six-pound Monofilament is the approved beginner starting reference for this light-tackle category.",
        caution: "Heavy cover or frequent snags may justify moving heavier after checking the equipment you own."
    }),
    Object.freeze({
        id: "trout",
        categoryId: "trout",
        description: "A light-line starting point for common stocked and stream trout situations.",
        strengthReference: "2–4 lb",
        monofilamentStartWeight: 4,
        guidance: "Four-pound Monofilament is the approved beginner starting reference at the more forgiving end of this light-line range.",
        caution: "Use a properly set drag and confirm your equipment is designed for line this light."
    }),
    Object.freeze({
        id: "walleye-sauger",
        categoryId: "walleye-sauger",
        description: "A medium-light starting point for common Walleye and Sauger-family approaches.",
        strengthReference: "6–10 lb",
        monofilamentStartWeight: 8,
        guidance: "Eight-pound Monofilament is the approved beginner starting reference for the broad Walleye path.",
        caution: "Technique, depth, cover, and later leader or presentation choices can change the final system."
    })
]);

const REEL_INFORMATIONAL_WARNINGS = Object.freeze({
    spincast: Object.freeze({
        braid: "Some spincast reels may not support braided line appropriately. Check the exact reel markings or manufacturer guidance before continuing; FCC does not declare your specific reel incompatible."
    })
});

const REEL_EQUIPMENT_GUIDANCE = Object.freeze({
    reel: Object.freeze({
        id: "reel",
        title: "How to Read Your Reel",
        summary: "Reel capacity markings pair a line size with the approximate amount of that line the spool is designed to hold.",
        items: Object.freeze([
            "Find the line-capacity marking on the spool, reel body, package, manual, or official model specification.",
            "A capacity such as 8 lb / 140 yd or 8-140 pairs line strength with approximate spool capacity.",
            "Some manufacturers print the order differently. Read the printed headings or manual instead of assuming the order.",
            "Metric capacity may pair line diameter and length, such as 0.25 mm / 160 m.",
            "If Mono and Braid capacities are listed separately, use the listing for the line type you actually selected.",
            "Numbers such as 1000, 2500, or 3000 identify reel size or model families; they are not direct pound-test ratings."
        ])
    }),
    rod: Object.freeze({
        id: "rod",
        title: "How to Read Your Rod",
        summary: "Rod markings usually give a recommended line-strength range separately from the lure-weight range.",
        items: Object.freeze([
            "Look on the rod blank or official model specification for Line Wt, Line, or Line Rating.",
            "A marking such as 6-12 lb gives the manufacturer's line-strength range for that rod model.",
            "Do not confuse line rating with Lure Wt, which is often shown separately in ounces.",
            "Your final line system should fit the rod's line rating as well as the reel's capacity guidance for the line type you selected.",
            "If the rod marking is missing or unreadable, use the exact model number to check the manufacturer's official specification before spooling."
        ])
    }),
    mismatch: Object.freeze({
        id: "mismatch",
        title: "If the Ratings Don't Match",
        summary: "FCC does not know your exact models, so manufacturer and equipment markings are the final guide.",
        items: Object.freeze([
            "Go back and choose a line that fits both the reel capacity guidance and the rod line rating, or change the equipment before spooling.",
            "If the reel lists capacity by diameter instead of pound-test, compare the diameter printed on the line package or manufacturer specification.",
            "If you still cannot verify the markings, stop before spooling and look up the exact reel and rod models from their manufacturers."
        ])
    })
});

const REEL_BACKING_CHOICES = Object.freeze({
    "monofilament-backing": Object.freeze({
        id: "monofilament-backing",
        title: "Monofilament Backing — Recommended First Setup",
        description: "Start with Monofilament on the spool, then join it to the selected Braid. This is the preferred beginner path when Braid could slip on a smooth spool.",
        recommendedFirstSetup: true
    }),
    "direct-braid-approved": Object.freeze({
        id: "direct-braid-approved",
        title: "Direct Braid — Manufacturer Supported",
        description: "Use this only when the exact reel or spool explicitly supports a secure direct-Braid attachment method or braid-ready surface."
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

const REEL_SPOOL_PATHS = Object.freeze({
    "direct-main-line": Object.freeze({
        id: "direct-main-line",
        stages: Object.freeze([
            Object.freeze({ id: "prepare", title: "Prepare the Reel", description: "Use the reel-specific routing guidance before making the spool connection." }),
            Object.freeze({ id: "attach-main-line", title: "Attach Main Line", description: "Attach the confirmed main line to the spool with the Arbor Knot.", knotId: "arbor-knot", knotActionLabel: "Tie Arbor Knot" }),
            Object.freeze({ id: "wind-main-line", title: "Wind the Main Line", description: "Wind the confirmed main line under the reel-specific tension and routing guidance." }),
            Object.freeze({ id: "check-fill", title: "Check the Fill", description: "Stop short of overfill and use the exact reel manufacturer's fill mark or instructions when available." })
        ])
    }),
    "braid-with-backing": Object.freeze({
        id: "braid-with-backing",
        stages: Object.freeze([
            Object.freeze({ id: "prepare", title: "Prepare the Reel", description: "Use the reel-specific routing guidance before making the spool connection." }),
            Object.freeze({ id: "attach-backing", title: "Attach the Backing", description: "Attach Monofilament backing to the spool with the Arbor Knot.", knotId: "arbor-knot", knotActionLabel: "Tie Arbor Knot" }),
            Object.freeze({ id: "wind-backing", title: "Wind the Backing", description: "Wind a secure backing layer. Use the exact reel capacity guidance; FCC does not invent a universal backing length or pound-test." }),
            Object.freeze({ id: "connect-main-line", title: "Connect Backing to Braid", description: "Join the Monofilament backing to the confirmed Braid with the Double Uni Knot.", knotId: "double-uni-knot", knotActionLabel: "Tie Double Uni Knot" }),
            Object.freeze({ id: "wind-main-line", title: "Wind the Braid", description: "Wind the confirmed Braid under steady tension using the reel-specific procedure." }),
            Object.freeze({ id: "check-fill", title: "Check the Fill", description: "Stop short of overfill and use the exact reel manufacturer's fill mark or instructions when available." })
        ])
    }),
    "direct-braid": Object.freeze({
        id: "direct-braid",
        stages: Object.freeze([
            Object.freeze({ id: "prepare", title: "Prepare the Reel", description: "Use the reel-specific routing guidance before making the spool connection." }),
            Object.freeze({ id: "attach-main-line", title: "Use the Manufacturer-Supported Attachment", description: "Follow the exact reel or spool manufacturer's secure direct-Braid method. FCC does not present the Arbor Knot as a generic direct-Braid solution." }),
            Object.freeze({ id: "wind-main-line", title: "Wind the Braid", description: "Wind the confirmed Braid under steady tension using the reel-specific procedure." }),
            Object.freeze({ id: "check-fill", title: "Check the Fill", description: "Stop short of overfill and use the exact reel manufacturer's fill mark or instructions when available." })
        ])
    })
});

const REEL_LEADER_REFERENCE_GUIDANCE = Object.freeze({
    title: "What Is a Leader?",
    summary: "A leader is a separate terminal section between the main line and the later Rig or lure. A leader is not required to finish spooling the reel.",
    items: Object.freeze([
        "Anglers may use a leader to change visibility, abrasion resistance, stretch, or buoyancy near the terminal presentation.",
        "Fluorocarbon is lower visibility underwater and abrasion resistant but sinks more readily; Monofilament is easy to knot, stretches more, and is more buoyant.",
        "Braid users commonly consider a leader because Braid is visible and has very little stretch, but the correct leader material, strength, length, and connection depend on the later Rig, target, cover, and conditions.",
        "Choose and build a leader later when the actual Rig or presentation provides enough context. Reel Ready does not require one."
    ])
});

const REEL_READY_GUIDANCE = Object.freeze({
    title: "Reel Ready",
    summary: "Your reel is ready when the completed reel + main-line + backing system is correctly routed, securely connected, and properly filled. This does not mean a terminal Rig, leader, bait, or lure is attached.",
    items: Object.freeze([
        Object.freeze({
            text: "Confirm the line follows the reel-specific routing and retrieves cleanly.",
            emphasis: Object.freeze(["follows the reel-specific routing and retrieves cleanly"])
        }),
        Object.freeze({
            text: "Confirm the line is packed reasonably evenly and the spool is not overfilled; manufacturer fill marks or model-specific instructions are authoritative.",
            emphasis: Object.freeze(["the spool is not overfilled", "manufacturer fill marks or model-specific instructions are authoritative"])
        }),
        Object.freeze({
            text: "Confirm every spool-to-line or backing-to-main-line connection actually used in this setup is secure.",
            emphasis: Object.freeze(["every spool-to-line or backing-to-main-line connection actually used in this setup is secure"])
        }),
        Object.freeze({
            text: "Confirm the final main line still fits the reel-capacity and rod line-rating guidance you reviewed during Equipment.",
            emphasis: Object.freeze(["fits the reel-capacity and rod line-rating guidance"])
        })
    ])
});

console.info(
    `[Loaded] ${REEL_GUIDANCE_BUILD_INFO.file} | ` +
    `${REEL_GUIDANCE_BUILD_INFO.milestone} | ` +
    `${REEL_SETUP_ENTRY_OPTIONS.length} entry modes | ` +
    `${REEL_TYPE_OPTIONS.length} reel types | ` +
    `${Object.keys(REEL_LINE_TYPE_GUIDANCE).length} line types | ` +
    `${REEL_TARGET_FISH_PROFILES.length} target profiles | ` +
    `${REEL_SETUP_PHASES.length} workflow phases | ` +
    `${Object.keys(REEL_BACKING_CHOICES).length} Braid backing choices | ` +
    `${Object.keys(REEL_SPOOLING_GUIDANCE).length} spooling profiles`
);
