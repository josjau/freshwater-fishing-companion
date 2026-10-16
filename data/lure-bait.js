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
        purpose: "Offers a subtle presentation that responds to small rod movements and a natural fall.",
        recognitionNotes: [
            "Straight, flexible body of fairly even thickness",
            "No paddle tail, claws, or prominent appendages"
        ],
        commonVariants: [
            "Full-length stick worm",
            "Short finesse-style stick worm"
        ],
        relatedTackleIds: [
            "offset-worm-hook",
            "wacky-hook",
            "ned-jighead",
            "shaky-head-jighead"
        ],
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
        purpose: "Suggests a crayfish; the claws move as it falls, hops, or drags.",
        recognitionNotes: [
            "Crayfish-like body",
            "Two prominent claws, often with smaller legs"
        ],
        commonVariants: [
            "Compact finesse craw",
            "Large flapping-claw craw"
        ],
        relatedTackleIds: [
            "offset-worm-hook",
            "jighead"
        ],
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
        purpose: "Moves water with its legs and flaps as the bait is worked.",
        recognitionNotes: [
            "Multiple arms, legs, or flaps",
            "Often not shaped like one recognizable prey animal"
        ],
        commonVariants: [
            "Compact creature",
            "Broad-flap creature"
        ],
        relatedTackleIds: [
            "offset-worm-hook"
        ],
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
        purpose: "Swims with a kicking tail when pulled through the water.",
        recognitionNotes: [
            "Soft fish-shaped body",
            "Broad paddle- or boot-shaped tail"
        ],
        commonVariants: [
            "Solid-body",
            "Hollow-body"
        ],
        relatedTackleIds: [
            "weighted-swimbait-hook",
            "jighead",
            "offset-worm-hook"
        ],
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
        purpose: "Presents a compact body with tentacles that flutter during hops or falls.",
        recognitionNotes: [
            "Hollow cylindrical body",
            "Skirt-like tentacles at the rear"
        ],
        relatedTackleIds: [
            "tube-jighead",
            "offset-worm-hook"
        ],
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
        purpose: "Creates flash and vibration through spinning blades as the lure moves through the water.",
        recognitionNotes: [
            "Bent wire frame with rotating blades above a weighted, skirted hook"
        ],
        commonVariants: [
            "Single-blade",
            "Tandem-blade"
        ],
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
        purpose: "Swims with a wobbling action; many models dive when retrieved.",
        recognitionNotes: [
            "Hard-bodied lure, often with a diving bill and treble hooks"
        ],
        commonVariants: [
            "Shallow-diving",
            "Deep-diving"
        ],
        relatedTackleIds: [
            "split-ring"
        ],
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
        purpose: "Darts like a fleeing baitfish when pulled and paused.",
        recognitionNotes: [
            "Slender baitfish-shaped lure with a front line-tie and hooks"
        ],
        commonVariants: [
            "Floating",
            "Suspending"
        ],
        relatedTackleIds: [
            "split-ring"
        ],
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
        purpose: "Produces flash and vibration as its blade rotates around a central shaft.",
        recognitionNotes: [
            "Straight wire shaft, rotating blade, weighted body, and trailing hook"
        ],
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
        purpose: "Flashes, wobbles, or flutters as it moves or falls through the water.",
        recognitionNotes: [
            "Curved metal lure with a line-tie at one end and hook at the other"
        ],
        relatedTackleIds: [
            "split-ring"
        ],
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
        purpose: "Provides natural baitfish forage; live minnows also attract attention through swimming movement.",
        recognitionNotes: [
            "Small fish with visible fins, tail, and baitfish profile"
        ],
        relatedTackleIds: [
            "hook"
        ],
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
        purpose: "Provides natural worm bait with scent and movement.",
        recognitionNotes: [
            "Long, flexible, segmented earthworm"
        ],
        relatedTackleIds: [
            "hook",
            "spinner-harness"
        ],
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
        purpose: "Presents natural insect forage; live crickets add movement.",
        recognitionNotes: [
            "Insect with long antennae and enlarged rear jumping legs"
        ],
        relatedTackleIds: [
            "hook"
        ],
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
