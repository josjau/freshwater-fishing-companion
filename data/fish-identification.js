/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: data/fish-identification.js
   PURPOSE: Owns canonical pairwise Fish field-identification
   distinctions used by Fish comparison experiences.
   ========================================================== */

"use strict";

const FISH_IDENTIFICATION_BUILD_INFO = Object.freeze({
    file: "data/fish-identification.js",
    milestone: "Fish Guide — Production Package 1"
});

const FISH_IDENTIFICATION_RELATIONSHIPS = Object.freeze([
    {
        id: "brown-trout-vs-rainbow-trout",
        fishIds: ["brown-trout", "rainbow-trout"],
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        distinctions: [
            {
                fishId: "brown-trout",
                text: "Orange or red spots appear along the sides, often ringed by lighter halos."
            },
            {
                fishId: "brown-trout",
                text: "The tail usually has few or no black spots and is square to only slightly forked."
            },
            {
                fishId: "brown-trout",
                text: "The belly is typically cream-colored rather than silvery white."
            },
            {
                fishId: "rainbow-trout",
                text: "A pink or reddish stripe runs lengthwise along the side."
            },
            {
                fishId: "rainbow-trout",
                text: "The tail is distinctly forked and carries obvious dark spots."
            },
            {
                fishId: "rainbow-trout",
                text: "The belly is silvery white rather than cream-colored."
            }
        ]
    }
]);

console.info(
    `[Loaded] ${FISH_IDENTIFICATION_BUILD_INFO.file} | ` +
    `${FISH_IDENTIFICATION_BUILD_INFO.milestone} | ` +
    `${FISH_IDENTIFICATION_RELATIONSHIPS.length} relationships`
);
