/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: data/fish-specialized-guidance.js
   PURPOSE: Owns exceptional authored Fish-specific targeting,
   safety, and research guidance that does not belong in the
   universal Fish or Fish-to-Rig schemas.
   ========================================================== */

"use strict";

const FISH_SPECIALIZED_GUIDANCE_BUILD_INFO = Object.freeze({
    file: "data/fish-specialized-guidance.js"
});

const FISH_SPECIALIZED_TARGETING = Object.freeze({
    "longnose-gar": Object.freeze({
        body: "Gar can be caught with conventional fishing tackle, but their hard, bony jaws can make reliable hooksets difficult. Anglers who target Gar regularly may use specialized tackle or techniques. Check current local regulations before choosing a specialized method.",
        safety: "Do not eat Gar eggs (roe); they are toxic to humans.",
        researchTopics: Object.freeze([
            "longnose gar fishing tackle",
            "longnose gar fishing techniques",
            "gar hookset techniques",
            "longnose gar fishing regulations [your state]"
        ]),
        researchNote: "For regulations, prioritize your state wildlife agency or official fishing regulations."
    }),
    "spotted-gar": Object.freeze({
        body: "Gar can be caught with conventional fishing tackle, but their hard, bony jaws can make reliable hooksets difficult. Anglers who target Gar regularly may use specialized tackle or techniques. Check current local regulations before choosing a specialized method.",
        safety: "Do not eat Gar eggs (roe); they are toxic to humans.",
        researchTopics: Object.freeze([
            "spotted gar fishing tackle",
            "spotted gar fishing techniques",
            "gar hookset techniques",
            "spotted gar fishing regulations [your state]"
        ]),
        researchNote: "For regulations, prioritize your state wildlife agency or official fishing regulations."
    }),
    "paddlefish": Object.freeze({
        body: "Because Paddlefish feed by filtering plankton rather than chasing bait or lures, anglers commonly target them with specialized snagging tackle during limited seasons and in designated waters. Equipment, legal methods, seasons, permits, and size limits vary by state and waterbody, so check current regulations before fishing.",
        safety: "Paddlefish snagging commonly uses heavy line, large treble hooks, and heavy sinkers. Keep clear of other anglers, control casts and sweeping hooksets, and use extra caution when landing fish or freeing snagged tackle.",
        researchTopics: Object.freeze([
            "paddlefish snagging tackle",
            "paddlefish snagging techniques",
            "paddlefish regulations [your state]",
            "paddlefish season and size limits [your state]"
        ]),
        researchNote: "For regulations, prioritize your state wildlife agency or official fishing regulations."
    })
});

console.info(
    `[Loaded] ${FISH_SPECIALIZED_GUIDANCE_BUILD_INFO.file} | ` +
    `${Object.keys(FISH_SPECIALIZED_TARGETING).length} specialized Fish guidance records`
);
