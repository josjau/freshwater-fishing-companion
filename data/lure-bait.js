/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: data/lure-bait.js
   PURPOSE: Provides canonical Lure/Bait Reference Knowledge
   identities used by Rig configurations and future recommendation
   and inventory-matching features.
   ========================================================== */

"use strict";

const LURE_BAIT_DATA_BUILD_INFO = Object.freeze({
    file: "data/lure-bait.js",
    milestone: "Recommendation Prerequisites Foundation — Lure/Bait Reference"
});

const LURE_BAIT_DATA = Object.freeze([
    {
        id: "stick-worm",
        name: "Stick Worm",
        summary: "A straight, flexible soft-plastic worm with a simple cylindrical profile and subtle movement.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        presentationType: "artificial",
        category: "soft-plastic"
    },
    {
        id: "craw",
        name: "Craw",
        summary: "A soft-plastic lure shaped to suggest a crayfish, usually with paired claws or appendages.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        presentationType: "artificial",
        category: "soft-plastic"
    },
    {
        id: "creature-bait",
        name: "Creature Bait",
        summary: "A soft-plastic lure with multiple appendages or a nonliteral prey profile designed to create movement and displacement.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        presentationType: "artificial",
        category: "soft-plastic"
    },
    {
        id: "paddle-tail-swimbait",
        name: "Paddle-tail Swimbait",
        summary: "A soft-plastic baitfish-shaped lure with a broad tail that kicks from side to side as the lure moves through the water.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        presentationType: "artificial",
        category: "soft-plastic"
    },
    {
        id: "tube",
        name: "Tube",
        summary: "A hollow soft-plastic lure with a cylindrical body and skirt-like tentacles at the rear.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        presentationType: "artificial",
        category: "soft-plastic"
    },
    {
        id: "spinnerbait",
        name: "Spinnerbait",
        summary: "A wire-frame lure that combines one or more rotating blades with a weighted hook and skirt or trailer.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        presentationType: "artificial",
        category: "wire-bait"
    },
    {
        id: "crankbait",
        name: "Crankbait",
        summary: "A hard-bodied lure designed to swim with a built-in wobble, often using a diving bill to reach depth.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        presentationType: "artificial",
        category: "hard-bait"
    },
    {
        id: "jerkbait",
        name: "Jerkbait",
        summary: "A slender baitfish-shaped hard lure designed to dart, glide, or suspend when worked with pulls and pauses.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        presentationType: "artificial",
        category: "hard-bait"
    },
    {
        id: "inline-spinner",
        name: "Inline Spinner",
        summary: "A compact lure with a blade that rotates around a central shaft ahead of a weighted body and hook.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        presentationType: "artificial",
        category: "metal-lure"
    },
    {
        id: "spoon",
        name: "Spoon",
        summary: "A curved metal lure that flashes and wobbles or flutters as it moves or falls through the water.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        presentationType: "artificial",
        category: "metal-lure"
    },
    {
        id: "minnow",
        name: "Minnow",
        summary: "A small live or preserved baitfish presented on a hook as natural forage.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        presentationType: "natural-bait",
        category: "baitfish"
    },
    {
        id: "nightcrawler",
        name: "Nightcrawler",
        summary: "A large earthworm used whole or in pieces as natural bait on a hook.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        presentationType: "natural-bait",
        category: "worm"
    },
    {
        id: "cricket",
        name: "Cricket",
        summary: "A live or preserved cricket used as natural insect bait on a hook.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        presentationType: "natural-bait",
        category: "insect"
    }
]);

console.info(
    `[Loaded] ${LURE_BAIT_DATA_BUILD_INFO.file} | ` +
    `${LURE_BAIT_DATA_BUILD_INFO.milestone} | ` +
    `${LURE_BAIT_DATA.length} records`
);
