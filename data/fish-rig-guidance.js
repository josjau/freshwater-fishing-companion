/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: data/fish-rig-guidance.js
   PURPOSE: Owns curated Fish-to-Rig starting guidance without
   duplicating recommendation knowledge into Fish or Rig data.
   ========================================================== */

"use strict";

const FISH_RIG_GUIDANCE_BUILD_INFO = Object.freeze({
    file: "data/fish-rig-guidance.js",
    milestone: "Fish Guide — Production Package 1"
});

const FISH_RIG_GUIDANCE = Object.freeze([
    {
        fishId: "rainbow-trout",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        rigRecommendations: [
            {
                rigId: "split-shot-bait-rig",
                priority: "Primary",
                reason: "A light split-shot presentation lets bait drift naturally through current while adding only enough weight to reach the feeding lane."
            }
        ]
    },
    {
        fishId: "brown-trout",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        rigRecommendations: [
            {
                rigId: "split-shot-bait-rig",
                priority: "Primary",
                reason: "A light split-shot presentation works through pools, current seams, and cover edges while keeping a natural bait presentation."
            }
        ]
    },
    {
        fishId: "common-carp",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        rigRecommendations: [
            {
                rigId: "basic-bottom-rig",
                priority: "Primary",
                reason: "A sliding-sinker bottom presentation keeps bait near the bottom while allowing a Common Carp to take it with less immediate resistance."
            }
        ]
    },
    {
        fishId: "freshwater-drum",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        rigRecommendations: [
            {
                rigId: "basic-bottom-rig",
                priority: "Primary",
                reason: "A slip-sinker bottom presentation keeps natural bait near the bottom in deeper channels, pools, and reservoirs where Freshwater Drum commonly feed."
            }
        ]
    }
]);

console.info(
    `[Loaded] ${FISH_RIG_GUIDANCE_BUILD_INFO.file} | ` +
    `${FISH_RIG_GUIDANCE_BUILD_INFO.milestone} | ` +
    `${FISH_RIG_GUIDANCE.length} guidance records`
);
