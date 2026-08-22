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
    }
]);

console.info(
    `[Loaded] ${FISH_RIG_GUIDANCE_BUILD_INFO.file} | ` +
    `${FISH_RIG_GUIDANCE_BUILD_INFO.milestone} | ` +
    `${FISH_RIG_GUIDANCE.length} guidance records`
);
