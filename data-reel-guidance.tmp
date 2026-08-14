/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: data/reel-guidance.js
   PURPOSE: Owns Reel & Line Setup Decision Knowledge used by the
   Get Your Reel Ready guided workflow without altering canonical Knots.
   ========================================================== */

"use strict";

const REEL_GUIDANCE_BUILD_INFO = Object.freeze({
    file: "data/reel-guidance.js",
    milestone: "Knots — Production Package 3 Block 3.3"
});

const REEL_SETUP_STEP_IDS = Object.freeze({
    START: "start",
    REEL_TYPE: "reel-type",
    LINE_SELECTION: "line-selection",
    LINE_HELP: "line-help",
    LINE_IDENTIFICATION: "line-identification",
    LINE_SELECTION_COMPLETE: "line-selection-complete"
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

console.info(
    `[Loaded] ${REEL_GUIDANCE_BUILD_INFO.file} | ` +
    `${REEL_GUIDANCE_BUILD_INFO.milestone} | ` +
    `${REEL_SETUP_ENTRY_OPTIONS.length} entry modes | ` +
    `${REEL_TYPE_OPTIONS.length} reel types | ` +
    `${Object.keys(REEL_LINE_TYPE_GUIDANCE).length} line types`
);
