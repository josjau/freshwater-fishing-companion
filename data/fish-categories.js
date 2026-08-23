/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: data/fish-categories.js
   PURPOSE: Owns the canonical beginner-facing Fish category
   registry used for Fish Guide browse and search presentation.
   ========================================================== */

"use strict";

const FISH_CATEGORY_DATA_BUILD_INFO = Object.freeze({
    file: "data/fish-categories.js",
    milestone: "Fish Guide — Production Package 1"
});


const FISH_LEGACY_CATEGORY_ID_MAP = Object.freeze({
    Bass: "bass",
    Catfish: "catfish",
    Sunfish: "sunfish-crappie",
    Crappie: "sunfish-crappie",
    Walleye: "walleye-sauger",
    Trout: "trout",
    Carp: "carp",
    Drum: "drum"
});

const FISH_CATEGORY_DATA = Object.freeze([
    // Broad / primary target categories — alphabetical within this tier.
    {
        id: "bass",
        name: "Bass",
        summary: "Browse bass species and the basic traits used to identify them."
    },
    {
        id: "catfish",
        name: "Catfish",
        summary: "Browse catfish species and the basic traits used to identify them."
    },
    {
        id: "sunfish-crappie",
        name: "Sunfish & Crappie",
        summary: "Browse sunfish, rock-bass relatives, and crappie together to make similar species easier to sort out."
    },
    {
        id: "trout",
        name: "Trout",
        summary: "Browse trout species and compare markings, fin shape, and other identification traits."
    },
    {
        id: "walleye-sauger",
        name: "Walleye & Sauger",
        summary: "Browse Walleye, Sauger, and Saugeye together to compare their similar body shapes and markings."
    },

    // Secondary / specialized target categories — alphabetical within this tier.
    {
        id: "carp",
        name: "Carp",
        summary: "Browse carp species and the basic traits used to identify them."
    },
    {
        id: "drum",
        name: "Drum",
        summary: "Browse Freshwater Drum identification and reference information."
    },
    {
        id: "gar",
        name: "Gar",
        summary: "Browse gar species and compare snout shape, spotting, and other identification traits."
    },
    {
        id: "paddlefish",
        name: "Paddlefish",
        summary: "Browse Paddlefish identification and reference information."
    }
]);

console.info(
    `[Loaded] ${FISH_CATEGORY_DATA_BUILD_INFO.file} | ` +
    `${FISH_CATEGORY_DATA_BUILD_INFO.milestone} | ` +
    `${FISH_CATEGORY_DATA.length} categories`
);
