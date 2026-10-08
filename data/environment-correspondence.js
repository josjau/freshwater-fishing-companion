/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: data/environment-correspondence.js
   PURPOSE: Environmental equivalence; never Recommendation ranking or suitability.
   ========================================================== */

"use strict";

const HABITAT_CONDITION_CORRESPONDENCES = Object.freeze([
    Object.freeze({ habitatId: "aquatic-vegetation", conditionIds: Object.freeze(["vegetation"]) }),
    Object.freeze({ habitatId: "wood-brush", conditionIds: Object.freeze(["wood-brush"]) }),
    Object.freeze({ habitatId: "open-water", conditionIds: Object.freeze(["open-water"]) }),
    Object.freeze({ habitatId: "shallow-water", conditionIds: Object.freeze(["shallow"]) }),
    Object.freeze({ habitatId: "deep-water", conditionIds: Object.freeze(["deep"]) }),
    Object.freeze({ habitatId: "still-slow-water", conditionIds: Object.freeze(["current-none", "current-light"]) }),
    Object.freeze({ habitatId: "flowing-water", conditionIds: Object.freeze(["current-light", "current-moderate", "current-strong"]) }),
    Object.freeze({ habitatId: "rock-boulder-structure", conditionIds: Object.freeze(["rock-boulder"]) }),
    Object.freeze({ habitatId: "channel", conditionIds: Object.freeze(["channel"]) }),
    Object.freeze({ habitatId: "pool-deep-hole", conditionIds: Object.freeze(["pool-deep-hole"]) }),
    Object.freeze({ habitatId: "rocky-gravel-bottom", conditionIds: Object.freeze(["bottom-rocky-gravel"]) }),
    Object.freeze({ habitatId: "sandy-bottom", conditionIds: Object.freeze(["bottom-sandy"]) }),
    Object.freeze({ habitatId: "muddy-silty-bottom", conditionIds: Object.freeze(["bottom-muddy-silty"]) }),
]);

const FISH_WATERBODY_CONDITION_CORRESPONDENCES = Object.freeze([
    Object.freeze({ waterbody: "Pond", conditionId: "pond" }),
    Object.freeze({ waterbody: "Lake", conditionId: "lake" }),
    Object.freeze({ waterbody: "Reservoir", conditionId: "reservoir" }),
    Object.freeze({ waterbody: "River", conditionId: "river" }),
    Object.freeze({ waterbody: "Creek / Stream", conditionId: "creek-stream" }),
]);
