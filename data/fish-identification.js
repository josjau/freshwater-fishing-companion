/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: data/fish-identification.js
   PURPOSE: Owns canonical pairwise Fish field-identification
   distinctions used by Fish comparison experiences.
   ========================================================== */

"use strict";

const FISH_IDENTIFICATION_BUILD_INFO = Object.freeze({
    file: "data/fish-identification.js"
});

const FISH_IDENTIFICATION_RELATIONSHIPS = Object.freeze([
    {
        id: "largemouth-bass-vs-smallmouth-bass",
        fishIds: ["largemouth-bass", "smallmouth-bass"],
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        distinctions: [
            {
                fishId: "largemouth-bass",
                text: "The mouth hinge extends behind the rear edge of the eye."
            },
            {
                fishId: "largemouth-bass",
                text: "A broad horizontal side stripe and a deep notch between the weakly connected dorsal-fin sections support the identification."
            },
            {
                fishId: "smallmouth-bass",
                text: "The mouth hinge ends in front of the rear edge of the eye."
            },
            {
                fishId: "smallmouth-bass",
                text: "Vertical side bars and connected dorsal-fin sections support the identification; color alone is not decisive."
            }
        ]
    },
    {
        id: "largemouth-bass-vs-spotted-bass",
        fishIds: ["largemouth-bass", "spotted-bass"],
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        distinctions: [
            {
                fishId: "largemouth-bass",
                text: "The mouth hinge extends behind the rear edge of the eye."
            },
            {
                fishId: "largemouth-bass",
                text: "The dorsal-fin sections are weakly connected and separated by a deep notch."
            },
            {
                fishId: "spotted-bass",
                text: "The mouth hinge is approximately even with the rear edge of the eye."
            },
            {
                fishId: "spotted-bass",
                text: "Rows of dark spots below the lateral stripe and connected dorsal-fin sections support the identification."
            }
        ]
    },
    {
        id: "smallmouth-bass-vs-spotted-bass",
        fishIds: ["smallmouth-bass", "spotted-bass"],
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        distinctions: [
            {
                fishId: "smallmouth-bass",
                text: "The mouth hinge ends in front of the rear edge of the eye."
            },
            {
                fishId: "smallmouth-bass",
                text: "Vertical bars rather than rows of spots below a lateral stripe mark the sides."
            },
            {
                fishId: "spotted-bass",
                text: "The mouth hinge is approximately even with the rear edge of the eye."
            },
            {
                fishId: "spotted-bass",
                text: "A lateral stripe with rows of dark spots below it separates the typical side pattern from a Smallmouth Bass."
            }
        ]
    },
    {
        id: "striped-bass-vs-white-bass",
        fishIds: ["striped-bass", "white-bass"],
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        distinctions: [
            {
                fishId: "striped-bass",
                text: "The body is slender without the distinctly arched back of a White Bass."
            },
            {
                fishId: "striped-bass",
                text: "Strong horizontal stripes are mostly continuous, and the tongue has two distinct parallel tooth patches."
            },
            {
                fishId: "white-bass",
                text: "The body is deeper, with a distinctly arched back behind the head."
            },
            {
                fishId: "white-bass",
                text: "The tongue has one round or heart-shaped tooth patch; side striping is supporting evidence."
            }
        ]
    },
    {
        id: "hybrid-striped-bass-vs-white-bass",
        fishIds: ["hybrid-striped-bass", "white-bass"],
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        distinctions: [
            {
                fishId: "hybrid-striped-bass",
                text: "The body is intermediate in depth and carries broken or discontinuous horizontal stripes."
            },
            {
                fishId: "hybrid-striped-bass",
                text: "Tongue-patch presentation is variable and should be used only as supporting evidence."
            },
            {
                fishId: "white-bass",
                text: "The body is distinctly deep with an arched back, and the horizontal striping is less strongly broken."
            },
            {
                fishId: "white-bass",
                text: "One round or heart-shaped tongue patch supports the White Bass identification."
            }
        ]
    },
    {
        id: "hybrid-striped-bass-vs-striped-bass",
        fishIds: ["hybrid-striped-bass", "striped-bass"],
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        distinctions: [
            {
                fishId: "hybrid-striped-bass",
                text: "The body is deeper and more intermediate in profile than a typical Striped Bass."
            },
            {
                fishId: "hybrid-striped-bass",
                text: "Horizontal side stripes are commonly broken or discontinuous; tongue-patch presentation is variable."
            },
            {
                fishId: "striped-bass",
                text: "The body is more slender, without the Hybrid Striped Bass's intermediate depth."
            },
            {
                fishId: "striped-bass",
                text: "Strong horizontal stripes are mostly continuous, and two distinct parallel tongue patches support the identification."
            }
        ]
    },
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
    `${FISH_IDENTIFICATION_RELATIONSHIPS.length} relationships`
);
