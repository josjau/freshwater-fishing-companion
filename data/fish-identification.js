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
    },
    {
        id: "longnose-gar-vs-spotted-gar",
        fishIds: ["longnose-gar", "spotted-gar"],
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        distinctions: [
            {
                fishId: "longnose-gar",
                text: "The snout is exceptionally long and narrow; at the nostrils it is narrower than the eye diameter."
            },
            {
                fishId: "longnose-gar",
                text: "Dark spotting is concentrated on the fins and may also occur on the body rather than prominently covering the head."
            },
            {
                fishId: "spotted-gar",
                text: "The snout is noticeably shorter and broader than the Longnose Gar's."
            },
            {
                fishId: "spotted-gar",
                text: "Well-defined round dark spots cover the top of the head, snout, and paired fins."
            }
        ]
    },
    {
        id: "sauger-vs-walleye",
        fishIds: ["sauger", "walleye"],
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        distinctions: [
            {
                fishId: "sauger",
                text: "Distinct individual dark spots mark the spiny dorsal fin."
            },
            {
                fishId: "sauger",
                text: "The cheeks are covered with scales, and dark saddle-like blotches are often visible across the back and upper sides."
            },
            {
                fishId: "walleye",
                text: "The spiny dorsal fin lacks the distinct individual dark spots seen on a Sauger."
            },
            {
                fishId: "walleye",
                text: "The cheeks have few scales or appear comparatively smooth."
            }
        ]
    },
    {
        id: "saugeye-vs-walleye",
        fishIds: ["saugeye", "walleye"],
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        distinctions: [
            {
                fishId: "saugeye",
                text: "The spiny dorsal webbing shows distinct spots together with bars or streaks."
            },
            {
                fishId: "saugeye",
                text: "The cheeks are covered with scales."
            },
            {
                fishId: "walleye",
                text: "The spiny dorsal fin lacks distinct individual dark spots and bars in the webbing."
            },
            {
                fishId: "walleye",
                text: "The cheeks have few scales or appear comparatively smooth."
            }
        ]
    },
    {
        id: "sauger-vs-saugeye",
        fishIds: ["sauger", "saugeye"],
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        distinctions: [
            {
                fishId: "sauger",
                text: "The spiny dorsal fin shows distinct individual round dark spots."
            },
            {
                fishId: "sauger",
                text: "Dark saddle-like blotches across the back and upper sides support the identification."
            },
            {
                fishId: "saugeye",
                text: "The spiny dorsal webbing combines distinct spots with bars or streaks rather than showing only individual round spots."
            },
            {
                fishId: "saugeye",
                text: "Gold-brown intermediate body blotching can support the identification."
            }
        ]
    },
    {
        id: "blue-catfish-vs-channel-catfish",
        fishIds: ["blue-catfish", "channel-catfish"],
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        distinctions: [
            {
                fishId: "blue-catfish",
                text: "The lower edge of the anal fin is straight."
            },
            {
                fishId: "blue-catfish",
                text: "The tail is deeply forked, so tail shape alone does not separate it from a Channel Catfish."
            },
            {
                fishId: "channel-catfish",
                text: "The lower edge of the anal fin is curved rather than straight."
            },
            {
                fishId: "channel-catfish",
                text: "Dark side spots may support the identification when present, but spotting can become faint or absent."
            }
        ]
    },
    {
        id: "black-bullhead-vs-yellow-bullhead",
        fishIds: ["black-bullhead", "yellow-bullhead"],
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        distinctions: [
            {
                fishId: "black-bullhead",
                text: "The chin barbels are dark gray to black."
            },
            {
                fishId: "black-bullhead",
                text: "The rear edge of the unforked tail is slightly notched."
            },
            {
                fishId: "yellow-bullhead",
                text: "The chin barbels are white or yellow rather than dark."
            },
            {
                fishId: "yellow-bullhead",
                text: "The rear edge of the unforked tail is nearly straight."
            }
        ]
    },
    {
        id: "black-bullhead-vs-flathead-catfish",
        fishIds: ["black-bullhead", "flathead-catfish"],
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        distinctions: [
            {
                fishId: "black-bullhead",
                text: "The body has the compact bullhead profile and the lower jaw does not project like a Flathead Catfish's."
            },
            {
                fishId: "black-bullhead",
                text: "The chin barbels are dark gray to black."
            },
            {
                fishId: "flathead-catfish",
                text: "The head is broad and noticeably flattened."
            },
            {
                fishId: "flathead-catfish",
                text: "The lower jaw projects beyond the upper jaw."
            }
        ]
    },
    {
        id: "flathead-catfish-vs-yellow-bullhead",
        fishIds: ["flathead-catfish", "yellow-bullhead"],
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        distinctions: [
            {
                fishId: "flathead-catfish",
                text: "The head is broad and noticeably flattened."
            },
            {
                fishId: "flathead-catfish",
                text: "The lower jaw projects beyond the upper jaw."
            },
            {
                fishId: "yellow-bullhead",
                text: "The body has the compact bullhead profile rather than the broad flattened head and projecting lower jaw of a Flathead Catfish."
            },
            {
                fishId: "yellow-bullhead",
                text: "White or yellow chin barbels support the Yellow Bullhead identification."
            }
        ]
    }
]);

console.info(
    `[Loaded] ${FISH_IDENTIFICATION_BUILD_INFO.file} | ` +
    `${FISH_IDENTIFICATION_BUILD_INFO.milestone} | ` +
    `${FISH_IDENTIFICATION_RELATIONSHIPS.length} relationships`
);
