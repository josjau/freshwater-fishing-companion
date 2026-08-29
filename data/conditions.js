/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: data/conditions.js
   PURPOSE: Provides canonical environmental and situational
   Condition Reference Knowledge for recommendation context.
   ========================================================== */

"use strict";

const CONDITION_DATA = Object.freeze([
    {
        id: "pond",
        name: "Pond",
        category: "waterbody",
        summary: "A relatively small, enclosed body of still or slow-moving freshwater.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "lake",
        name: "Lake",
        category: "waterbody",
        summary: "A larger inland body of standing freshwater with open-water and shoreline zones.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "reservoir",
        name: "Reservoir",
        category: "waterbody",
        summary: "A human-created or controlled impoundment that functions as a lake-like freshwater system.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "river",
        name: "River",
        category: "waterbody",
        summary: "A substantial flowing freshwater channel with persistent downstream movement.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "creek-stream",
        name: "Creek / Stream",
        category: "waterbody",
        summary: "A smaller flowing freshwater channel, generally narrower and more confined than a river.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "bank",
        name: "Bank",
        category: "access-position",
        summary: "Fishing from the shoreline or another stable position at the water's edge.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "access-dock",
        name: "Dock",
        category: "access-position",
        summary: "Fishing from a fixed or floating platform that extends over the water.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "boat",
        name: "Boat",
        category: "access-position",
        summary: "Fishing from a powered or otherwise general-purpose watercraft.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "kayak",
        name: "Kayak",
        category: "access-position",
        summary: "Fishing from a small paddle- or pedal-driven craft with a low position on the water.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "shallow",
        name: "Shallow",
        category: "depth-zone",
        summary: "The near-surface or near-shore portion of the water column where bottom depth is relatively limited.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "mid-depth",
        name: "Mid-depth",
        category: "depth-zone",
        summary: "The middle portion of the available water column between shallow and deep zones.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "deep",
        name: "Deep",
        category: "depth-zone",
        summary: "The deeper portion of the water column or bottom zone relative to the surrounding waterbody.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "open-water",
        name: "Open Water",
        category: "cover-structure",
        summary: "Water with little immediate cover or structure around the area being fished.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "vegetation",
        name: "Vegetation",
        category: "cover-structure",
        summary: "Living or dead aquatic plant growth such as grass, weeds, pads, or reeds.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "wood-brush",
        name: "Wood / Brush",
        category: "cover-structure",
        summary: "Woody cover such as trees, limbs, brush piles, stumps, or submerged timber.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "rock",
        name: "Rock",
        category: "cover-structure",
        summary: "Natural rocky structure such as riprap, boulders, gravel, ledges, or rocky banks.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "cover-dock-man-made",
        name: "Dock / Man-made Cover",
        category: "cover-structure",
        summary: "Human-built cover or structure such as docks, pilings, platforms, retaining features, or similar objects in the water.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "drop-off-channel-deep-structure",
        name: "Drop-off / Channel / Deep Structure",
        category: "cover-structure",
        summary: "Subsurface structural changes such as breaks, ledges, channels, humps, or other pronounced deep-water contours.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "water-clarity-clear",
        name: "Clear",
        category: "water-clarity",
        summary: "Water with high visibility and relatively little suspended material or discoloration.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "water-clarity-stained",
        name: "Stained",
        category: "water-clarity",
        summary: "Water with moderate color or suspended material that reduces visibility without becoming heavily opaque.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "water-clarity-muddy",
        name: "Muddy",
        category: "water-clarity",
        summary: "Water with low visibility because of substantial suspended sediment or other material.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "current-none",
        name: "None / Negligible",
        category: "current",
        summary: "Little or no noticeable horizontal water movement in the area being fished.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "current-light",
        name: "Light",
        category: "current",
        summary: "Noticeable but gentle water movement that produces limited downstream pull.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "current-moderate",
        name: "Moderate",
        category: "current",
        summary: "Steady water movement with a clear downstream pull and sustained flow through the area.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "current-strong",
        name: "Strong",
        category: "current",
        summary: "Fast or forceful water movement that creates substantial downstream pull.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "spring",
        name: "Spring",
        category: "season",
        summary: "The seasonal period between winter and summer as water and daylight generally trend warmer and longer.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "summer",
        name: "Summer",
        category: "season",
        summary: "The warm-season period with generally longer daylight and seasonally elevated water temperatures.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "fall",
        name: "Fall",
        category: "season",
        summary: "The seasonal period between summer and winter as daylight and water temperatures generally decline.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "winter",
        name: "Winter",
        category: "season",
        summary: "The cold-season period with generally shorter daylight and seasonally lower water temperatures.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "bright-sunny",
        name: "Bright / Sunny",
        category: "light-sky",
        summary: "High ambient light with direct or mostly unobstructed sunlight on the water.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "overcast",
        name: "Overcast",
        category: "light-sky",
        summary: "Cloud cover substantially reduces direct sunlight and produces diffuse daytime light.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "low-light",
        name: "Low Light",
        category: "light-sky",
        summary: "Reduced natural light such as around dawn, dusk, or another dim daylight period.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    },
    {
        id: "night",
        name: "Night",
        category: "light-sky",
        summary: "The period after daylight has ended and natural ambient light is minimal.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true
    }
]);
