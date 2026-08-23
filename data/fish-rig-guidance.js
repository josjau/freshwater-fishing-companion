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
    },
    {
        fishId: "walleye",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        rigRecommendations: [
            {
                rigId: "live-bait-slip-sinker-rig",
                priority: "Primary",
                reason: "A sliding-sinker live-bait presentation keeps minnows, leeches, or crawlers near bottom while allowing a Walleye to take the bait with limited resistance."
            },
            {
                rigId: "jighead-soft-plastic",
                priority: "Primary",
                reason: "A jighead and soft plastic can be cast, hopped, dragged, or worked vertically near bottom around rock, points, riprap, and other structure."
            },
            {
                rigId: "slip-bobber-rig",
                priority: "Primary",
                reason: "A slip bobber holds live bait at a controlled depth above reefs, humps, and rock while keeping the bait from resting directly on bottom."
            },
            {
                rigId: "bottom-bouncer-spinner-rig",
                priority: "Alternative",
                reason: "From a boat, a bottom bouncer and baited spinner harness provides a controlled way to cover open-water structure while keeping the presentation near bottom."
            }
        ]
    },
    {
        fishId: "sauger",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        rigRecommendations: [
            {
                rigId: "jighead-soft-plastic",
                priority: "Primary",
                reason: "A weighted jighead keeps a compact soft-plastic presentation close to bottom around rock, current breaks, channels, and tailwaters; use enough weight to maintain bottom contact."
            },
            {
                rigId: "three-way-rig",
                priority: "Alternative",
                reason: "A three-way rig separates the bait leader from the bottom-contact sinker, which is useful when drifting or trolling current over rocky or snag-prone bottom."
            },
            {
                rigId: "live-bait-slip-sinker-rig",
                priority: "Alternative",
                reason: "A live-bait slip-sinker rig provides a slower bottom-oriented option along channel edges, deep flats, eddies, and areas with reduced current."
            }
        ]
    },
    {
        fishId: "saugeye",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        rigRecommendations: [
            {
                rigId: "jighead-soft-plastic",
                priority: "Primary",
                reason: "A jighead and soft plastic can be worked close to bottom along riprap, points, drop-offs, and other structure, with weight adjusted for depth and current."
            },
            {
                rigId: "live-bait-slip-sinker-rig",
                priority: "Primary",
                reason: "A sliding-sinker rig keeps nightcrawlers or minnows near bottom while fishing flats, points, ledges, and drop-offs."
            },
            {
                rigId: "bottom-bouncer-spinner-rig",
                priority: "Alternative",
                reason: "A bottom bouncer and baited spinner harness provides a controlled trolling presentation over flats, points, and open-water structure while staying near bottom."
            }
        ]
    },
    {
        fishId: "channel-catfish",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        rigRecommendations: [
            {
                rigId: "basic-bottom-rig",
                priority: "Primary",
                reason: "A sliding-sinker bottom presentation is a simple way to keep natural or prepared bait on bottom along channels, cover, and deeper holes."
            },
            {
                rigId: "fixed-bobber-rig",
                priority: "Primary",
                reason: "A fixed bobber provides a simple shallow-water presentation for suspending bait along riprap, pond edges, and other accessible Channel Catfish water."
            }
        ]
    },
    {
        fishId: "blue-catfish",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        rigRecommendations: [
            {
                rigId: "basic-bottom-rig",
                priority: "Primary",
                reason: "A sliding-sinker bottom rig keeps cut bait or other natural bait near bottom in river channels, reservoir structure, and deeper water where Blue Catfish are commonly targeted."
            }
        ]
    },
    {
        fishId: "flathead-catfish",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        rigRecommendations: [
            {
                rigId: "basic-bottom-rig",
                priority: "Primary",
                reason: "A sliding-sinker bottom rig presents bait near submerged timber, brush, channel cover, and deep holes while allowing the bait to remain close to the bottom."
            }
        ]
    },
    {
        fishId: "black-bullhead",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        rigRecommendations: [
            {
                rigId: "basic-bottom-rig",
                priority: "Primary",
                reason: "A simple bottom rig keeps worms or other natural bait where Black Bullheads commonly feed in muddy, slow-moving, and shallow water."
            }
        ]
    },
    {
        fishId: "yellow-bullhead",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        rigRecommendations: [
            {
                rigId: "basic-bottom-rig",
                priority: "Primary",
                reason: "A simple bottom rig keeps worms or other natural bait close to bottom around quiet, vegetated water where Yellow Bullheads commonly feed."
            }
        ]
    }
]);

console.info(
    `[Loaded] ${FISH_RIG_GUIDANCE_BUILD_INFO.file} | ` +
    `${FISH_RIG_GUIDANCE_BUILD_INFO.milestone} | ` +
    `${FISH_RIG_GUIDANCE.length} guidance records`
);
