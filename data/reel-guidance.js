/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: data/reel-guidance.js
   PURPOSE: Owns Reel & Line Setup Decision Knowledge used by the
   Get Your Reel Ready guided workflow without altering canonical Knots.
   ========================================================== */

"use strict";

const REEL_GUIDANCE_BUILD_INFO = Object.freeze({
    file: "data/reel-guidance.js",
    milestone: "Knots — Production Package 3 Foundation"
});

const REEL_SETUP_STEP_IDS = Object.freeze({
    START: "start",
    REEL_TYPE: "reel-type",
    FOUNDATION_COMPLETE: "foundation-complete"
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

console.info(
    `[Loaded] ${REEL_GUIDANCE_BUILD_INFO.file} | ` +
    `${REEL_GUIDANCE_BUILD_INFO.milestone} | ` +
    `${REEL_SETUP_ENTRY_OPTIONS.length} entry modes | ` +
    `${REEL_TYPE_OPTIONS.length} reel types`
);
