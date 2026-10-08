/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: data/habitats.js
   PURPOSE: Canonical Fish-owned physical Habitat reference concepts.
   ========================================================== */

"use strict";

const HABITAT_DATA = Object.freeze([
    Object.freeze({ id: "aquatic-vegetation", name: "Aquatic Vegetation", dimension: "cover", summary: "Aquatic plants such as submerged grass, lily pads, reeds, or other vegetation. Plants can give fish concealment, food, and shelter.", createdVersion: "0.6.0", lastModifiedVersion: "0.6.0", isActive: true }),
    Object.freeze({ id: "wood-brush", name: "Wood / Brush", dimension: "cover", summary: "Trees, fallen limbs, stumps, submerged timber, and brush piles in or beside the water. Woody cover creates edges and places to shelter.", createdVersion: "0.6.0", lastModifiedVersion: "0.6.0", isActive: true }),
    Object.freeze({ id: "open-water", name: "Open Water", dimension: "water-zone", summary: "Areas with little immediate plant or woody cover. Open water can still contain underwater structure, bottom features, and schools of baitfish.", createdVersion: "0.6.0", lastModifiedVersion: "0.6.0", isActive: true }),
    Object.freeze({ id: "shallow-water", name: "Shallow Water", dimension: "water-zone", summary: "Water that is relatively shallow for the location, often close to shore, flats, or the edges of cover. Shallow is relative to the surrounding water.", createdVersion: "0.6.0", lastModifiedVersion: "0.6.0", isActive: true }),
    Object.freeze({ id: "deep-water", name: "Deep Water", dimension: "water-zone", summary: "Water that is relatively deep for the lake, river, or other location. Its depth and available cover vary widely among waterbodies.", createdVersion: "0.6.0", lastModifiedVersion: "0.6.0", isActive: true }),
    Object.freeze({ id: "still-slow-water", name: "Still / Slow Water", dimension: "water-movement", summary: "Water with little or gentle movement, such as quiet coves, backwaters, or slower parts of rivers and ponds.", createdVersion: "0.6.0", lastModifiedVersion: "0.6.0", isActive: true }),
    Object.freeze({ id: "flowing-water", name: "Flowing Water", dimension: "water-movement", summary: "Water moving through a river, stream, channel, or other area. Fish may use flow edges, eddies, and breaks in current depending on the species and situation.", createdVersion: "0.6.0", lastModifiedVersion: "0.6.0", isActive: true }),
    Object.freeze({ id: "rock-boulder-structure", name: "Rock / Boulder Structure", dimension: "structure", summary: "Distinct rock features such as boulders, rock piles, riprap, or rocky ledges. These can create edges, crevices, and current breaks.", createdVersion: "0.6.0", lastModifiedVersion: "0.6.0", isActive: true }),
    Object.freeze({ id: "channel", name: "Channel", dimension: "structure", summary: "A defined river or stream course, including a submerged former creek bed within a lake or reservoir. Channels are corridors, not just any drop-off.", createdVersion: "0.6.0", lastModifiedVersion: "0.6.0", isActive: true }),
    Object.freeze({ id: "pool-deep-hole", name: "Pool / Deep Hole", dimension: "structure", summary: "A localized pool, depression, or hole deeper than the nearby bottom, often with slower water. A deep hole can occur even in a generally shallow stream.", createdVersion: "0.6.0", lastModifiedVersion: "0.6.0", isActive: true }),
    Object.freeze({ id: "rocky-gravel-bottom", name: "Rocky / Gravel Bottom", dimension: "bottom-substrate", summary: "Lakebed or streambed made mostly of rock, stones, or gravel. This describes what the bottom is made of, not necessarily raised rock structure.", createdVersion: "0.6.0", lastModifiedVersion: "0.6.0", isActive: true }),
    Object.freeze({ id: "sandy-bottom", name: "Sandy Bottom", dimension: "bottom-substrate", summary: "An area where sand makes up much of the bottom. Sand can form flats, bars, and edges alongside other bottom types.", createdVersion: "0.6.0", lastModifiedVersion: "0.6.0", isActive: true }),
    Object.freeze({ id: "muddy-silty-bottom", name: "Muddy / Silty Bottom", dimension: "bottom-substrate", summary: "Soft sediment such as mud or silt on the lakebed or streambed. Bottom material is separate from how clear or muddy the water looks.", createdVersion: "0.6.0", lastModifiedVersion: "0.6.0", isActive: true }),
]);
