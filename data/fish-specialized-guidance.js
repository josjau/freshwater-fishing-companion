/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: data/fish-specialized-guidance.js
   PURPOSE: Owns exceptional authored Fish-specific targeting,
   safety, and research guidance that does not belong in the
   universal Fish or Fish-to-Rig schemas. Targeting and Safety
   are independent semantic collections.
   ========================================================== */

"use strict";

const FISH_SPECIALIZED_GUIDANCE_BUILD_INFO = Object.freeze({
    file: "data/fish-specialized-guidance.js"
});

const FISH_SPECIALIZED_TARGETING = Object.freeze({
    "longnose-gar": Object.freeze({
        body: "Gar can be caught with conventional fishing tackle, but their hard, bony jaws can make reliable hooksets difficult. Anglers who target Gar regularly may use specialized tackle or techniques. Check current local regulations before choosing a specialized method.",
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
        researchTopics: Object.freeze([
            "paddlefish snagging tackle",
            "paddlefish snagging techniques",
            "paddlefish regulations [your state]",
            "paddlefish season and size limits [your state]"
        ]),
        researchNote: "For regulations, prioritize your state wildlife agency or official fishing regulations."
    })
});


const FISH_SAFETY_GUIDANCE = Object.freeze([
    Object.freeze({
        id: "catfish-spine-handling",
        fishIds: Object.freeze([
            "channel-catfish",
            "blue-catfish",
            "flathead-catfish",
            "black-bullhead",
            "yellow-bullhead"
        ]),
        body: "Handle Catfish carefully around the sharp dorsal and pectoral fin spines; they can puncture skin. Control the fish before removing hooks and keep hands clear of the spines."
    }),
    Object.freeze({
        id: "walleye-family-mouth-handling",
        fishIds: Object.freeze(["walleye", "sauger", "saugeye"]),
        body: "Walleye, Sauger, and Saugeye have sharp canine-like teeth. Do not lip them or put fingers in the mouth; use controlled handling and pliers or another hook-removal tool."
    }),
    Object.freeze({
        id: "freshwater-drum-throat-handling",
        fishIds: Object.freeze(["freshwater-drum"]),
        body: "Freshwater Drum have powerful crushing teeth in the throat. Do not reach down the throat for a swallowed hook; use pliers or a hook remover when practical, or cut the line when safer."
    }),
    Object.freeze({
        id: "gar-roe-toxicity",
        fishIds: Object.freeze(["longnose-gar", "spotted-gar"]),
        body: "Do not eat Gar eggs (roe); they are toxic to humans."
    }),
    Object.freeze({
        id: "paddlefish-snagging-handling",
        fishIds: Object.freeze(["paddlefish"]),
        body: "Paddlefish snagging commonly uses heavy line, large treble hooks, and heavy sinkers. Keep clear of other anglers, control casts and sweeping hooksets, and use extra caution when landing fish or freeing snagged tackle."
    })
]);

console.info(
    `[Loaded] ${FISH_SPECIALIZED_GUIDANCE_BUILD_INFO.file} | ` +
    `${Object.keys(FISH_SPECIALIZED_TARGETING).length} specialized targeting records | ` +
    `${FISH_SAFETY_GUIDANCE.length} Safety & Handling records`
);
