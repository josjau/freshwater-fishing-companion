/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: data/fish.js
   PURPOSE: Provides canonical application-owned Fish records
   for search, browsing, identification, recommendations, and
   related-knowledge navigation.
   ========================================================== */

"use strict";

const FISH_DATA_BUILD_INFO = Object.freeze({
    file: "data/fish.js",
    milestone: "MS2.1",
    replacement: "Fish Data Foundation"
});

const FISH_DATA = Object.freeze([
    {
        id: "largemouth-bass",
        name: "Largemouth Bass",
        summary:
            "A widely distributed freshwater predator recognized by " +
            "its large mouth and dark horizontal side stripe.",
        createdVersion: "0.1.0",
        lastModifiedVersion: "0.1.0",
        isActive: true,
        scientificName: "Micropterus salmoides",
        category: "Bass",
        family: "Centrarchidae",
        habitatTags: ["Grass", "Timber", "Brush", "Open Water"],
        waterbodyTypes: ["Pond", "Lake", "River", "Reservoir"]
    },
    {
        id: "smallmouth-bass",
        name: "Smallmouth Bass",
        summary:
            "A bronze-colored bass commonly associated with clear water, " +
            "rock, current, and cooler freshwater habitat.",
        createdVersion: "0.1.0",
        lastModifiedVersion: "0.1.0",
        isActive: true,
        scientificName: "Micropterus dolomieu",
        category: "Bass",
        family: "Centrarchidae",
        habitatTags: ["Rock", "Open Water", "Current"],
        waterbodyTypes: ["Lake", "River", "Creek", "Reservoir"]
    },
    {
        id: "spotted-bass",
        name: "Spotted Bass",
        summary:
            "A black bass with rows of dark spots below the lateral line " +
            "and habitat preferences that often overlap other bass species.",
        createdVersion: "0.1.0",
        lastModifiedVersion: "0.1.0",
        isActive: true,
        scientificName: "Micropterus punctulatus",
        category: "Bass",
        family: "Centrarchidae",
        habitatTags: ["Rock", "Timber", "Open Water", "Current"],
        waterbodyTypes: ["Lake", "River", "Reservoir"]
    },
    {
        id: "bluegill",
        name: "Bluegill",
        summary:
            "A common sunfish recognized by its deep body, small mouth, " +
            "and dark opercular flap.",
        createdVersion: "0.1.0",
        lastModifiedVersion: "0.1.0",
        isActive: true,
        scientificName: "Lepomis macrochirus",
        category: "Sunfish",
        family: "Centrarchidae",
        habitatTags: ["Grass", "Brush", "Timber", "Shallow Water"],
        waterbodyTypes: ["Pond", "Lake", "River", "Reservoir"]
    },
    {
        id: "redear-sunfish",
        name: "Redear Sunfish",
        summary:
            "A deep-bodied sunfish commonly identified by the colored edge " +
            "on its opercular flap.",
        createdVersion: "0.1.0",
        lastModifiedVersion: "0.1.0",
        isActive: true,
        scientificName: "Lepomis microlophus",
        category: "Sunfish",
        family: "Centrarchidae",
        habitatTags: ["Grass", "Brush", "Shallow Water"],
        waterbodyTypes: ["Pond", "Lake", "Reservoir"]
    },
    {
        id: "black-crappie",
        name: "Black Crappie",
        summary:
            "A slab-sided panfish with irregular dark spotting across " +
            "the body and fins.",
        createdVersion: "0.1.0",
        lastModifiedVersion: "0.1.0",
        isActive: true,
        scientificName: "Pomoxis nigromaculatus",
        category: "Crappie",
        family: "Centrarchidae",
        habitatTags: ["Brush", "Timber", "Grass", "Open Water"],
        waterbodyTypes: ["Pond", "Lake", "River", "Reservoir"]
    },
    {
        id: "white-crappie",
        name: "White Crappie",
        summary:
            "A deep-bodied panfish generally showing vertical dark bars " +
            "rather than irregular spotting.",
        createdVersion: "0.1.0",
        lastModifiedVersion: "0.1.0",
        isActive: true,
        scientificName: "Pomoxis annularis",
        category: "Crappie",
        family: "Centrarchidae",
        habitatTags: ["Brush", "Timber", "Open Water"],
        waterbodyTypes: ["Pond", "Lake", "River", "Reservoir"]
    },
    {
        id: "channel-catfish",
        name: "Channel Catfish",
        summary:
            "A common catfish with a deeply forked tail and sensory barbels " +
            "around the mouth.",
        createdVersion: "0.1.0",
        lastModifiedVersion: "0.1.0",
        isActive: true,
        scientificName: "Ictalurus punctatus",
        category: "Catfish",
        family: "Ictaluridae",
        habitatTags: ["Channel", "Current", "Timber", "Open Water"],
        waterbodyTypes: ["Pond", "Lake", "River", "Reservoir"]
    },
    {
        id: "walleye",
        name: "Walleye",
        summary:
            "A streamlined predator recognized by its large reflective eyes " +
            "and prominent canine teeth.",
        createdVersion: "0.1.0",
        lastModifiedVersion: "0.1.0",
        isActive: true,
        scientificName: "Sander vitreus",
        category: "Walleye",
        family: "Percidae",
        habitatTags: ["Rock", "Open Water", "Current", "Deep Water"],
        waterbodyTypes: ["Lake", "River", "Reservoir"]
    },
    {
        id: "rainbow-trout",
        name: "Rainbow Trout",
        summary:
            "A cold-water trout recognized by a pink or reddish side stripe, " +
            "dark spotting, and a distinctly forked, spotted tail.",
        createdVersion: "0.1.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Oncorhynchus mykiss",
        categoryId: "trout",
        family: "Salmonidae",
        aliases: [],
        identificationTraits: [
            "A pink or reddish stripe runs lengthwise along the side.",
            "Dark spots cover the upper body and are prominent on the tail.",
            "The tail fin is distinctly forked.",
            "The belly is silvery white."
        ],
        habitatTags: ["Current", "Rock", "Cold Water", "Open Water"],
        waterbodyTypes: ["Lake", "River", "Creek", "Reservoir"]
    },
    {
        id: "brown-trout",
        name: "Brown Trout",
        summary:
            "A cold-water trout with black and red-orange body spots and a " +
            "mostly unspotted tail that is square to only slightly forked.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Salmo trutta",
        categoryId: "trout",
        family: "Salmonidae",
        aliases: ["German Brown Trout"],
        identificationTraits: [
            "Round black spots appear on the body and dorsal fin.",
            "Red or orange spots along the body are often surrounded by lighter halos.",
            "The tail usually has few or no dark spots.",
            "The tail is usually square to only slightly forked."
        ],
        habitatTags: ["Current", "Timber", "Deep Water", "Cold Water"],
        waterbodyTypes: ["Lake", "River", "Creek"]
    },
    {
        id: "common-carp",
        name: "Common Carp",
        summary:
            "A large-bodied fish with barbels near the mouth and large, " +
            "prominent scales.",
        createdVersion: "0.1.0",
        lastModifiedVersion: "0.1.0",
        isActive: true,
        scientificName: "Cyprinus carpio",
        category: "Carp",
        family: "Cyprinidae",
        habitatTags: ["Shallow Water", "Mud", "Grass", "Open Water"],
        waterbodyTypes: ["Pond", "Lake", "River", "Reservoir"]
    },
    {
        id: "freshwater-drum",
        name: "Freshwater Drum",
        summary:
            "A deep-bodied freshwater fish with a long dorsal fin and " +
            "a rounded, silvery profile.",
        createdVersion: "0.1.0",
        lastModifiedVersion: "0.1.0",
        isActive: true,
        scientificName: "Aplodinotus grunniens",
        category: "Drum",
        family: "Sciaenidae",
        habitatTags: ["Rock", "Channel", "Open Water", "Deep Water"],
        waterbodyTypes: ["Lake", "River", "Reservoir"]
    }
]);

console.info(
    `[Loaded] ${FISH_DATA_BUILD_INFO.file} | ` +
    `${FISH_DATA_BUILD_INFO.milestone} | ` +
    `${FISH_DATA_BUILD_INFO.replacement} | ` +
    `${FISH_DATA.length} records`
);
