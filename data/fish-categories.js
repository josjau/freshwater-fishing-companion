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
    {
        id: "bass",
        name: "Bass",
        summary: "Browse the Version 1 bass group for beginner identification and reference."
    },
    {
        id: "catfish",
        name: "Catfish",
        summary: "Browse the Version 1 catfish group for beginner identification and reference."
    },
    {
        id: "sunfish-crappie",
        name: "Sunfish & Crappie",
        summary: "Browse sunfish, rock-bass relatives, and crappie together for beginner identification."
    },
    {
        id: "walleye-sauger",
        name: "Walleye & Sauger",
        summary: "Browse Walleye, Sauger, and Saugeye together for beginner identification."
    },
    {
        id: "trout",
        name: "Trout",
        summary: "Browse cold-water trout in the Version 1 Fish Guide."
    },
    {
        id: "gar",
        name: "Gar",
        summary: "Browse gar species in the Version 1 Fish Guide."
    },
    {
        id: "carp",
        name: "Carp",
        summary: "Browse carp species in the Version 1 Fish Guide."
    },
    {
        id: "drum",
        name: "Drum",
        summary: "Browse Freshwater Drum in the Version 1 Fish Guide."
    },
    {
        id: "paddlefish",
        name: "Paddlefish",
        summary: "Browse Paddlefish in the Version 1 Fish Guide."
    }
]);

console.info(
    `[Loaded] ${FISH_CATEGORY_DATA_BUILD_INFO.file} | ` +
    `${FISH_CATEGORY_DATA_BUILD_INFO.milestone} | ` +
    `${FISH_CATEGORY_DATA.length} categories`
);
