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
            "A common catfish recognized by its deeply forked tail, sensory " +
            "barbels, and the curved lower edge of its anal fin.",
        createdVersion: "0.1.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Ictalurus punctatus",
        categoryId: "catfish",
        family: "Ictaluridae",
        aliases: [],
        identificationTraits: [
            "The tail is deeply forked.",
            "The lower edge of the anal fin is curved rather than straight.",
            "Sensory barbels surround the mouth.",
            "Dark side spots may be present, especially on smaller fish, but the spotting can become faint or absent."
        ],
        habitatTags: ["Channel", "Current", "Timber", "Open Water"],
        waterbodyTypes: ["Pond", "Lake", "River", "Reservoir"]
    },
    {
        id: "blue-catfish",
        name: "Blue Catfish",
        summary:
            "A large catfish recognized by its deeply forked tail and the " +
            "long, straight lower edge of its anal fin.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Ictalurus furcatus",
        categoryId: "catfish",
        family: "Ictaluridae",
        aliases: [],
        identificationTraits: [
            "The tail is deeply forked.",
            "The anal fin is long, with a straight lower edge.",
            "The body is generally a plain blue-gray rather than strongly spotted."
        ],
        habitatTags: ["Channel", "Current", "Deep Water", "Rock"],
        waterbodyTypes: ["River", "Reservoir"]
    },
    {
        id: "flathead-catfish",
        name: "Flathead Catfish",
        summary:
            "A heavy-bodied catfish recognized by its broad flattened head, " +
            "projecting lower jaw, and tail that is not deeply forked.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Pylodictis olivaris",
        categoryId: "catfish",
        family: "Ictaluridae",
        aliases: [],
        identificationTraits: [
            "The head is broad and noticeably flattened.",
            "The lower jaw projects beyond the upper jaw.",
            "The tail is not deeply forked like the tail of a Channel or Blue Catfish."
        ],
        habitatTags: ["Timber", "Brush", "Channel", "Deep Water"],
        waterbodyTypes: ["River", "Reservoir"]
    },
    {
        id: "black-bullhead",
        name: "Black Bullhead",
        summary:
            "A compact bullhead catfish recognized by its dark chin barbels " +
            "and a nearly square tail with a slight notch.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Ameiurus melas",
        categoryId: "catfish",
        family: "Ictaluridae",
        aliases: [],
        identificationTraits: [
            "The chin barbels are dark gray to black.",
            "The tail is not forked and has a slight notch along the rear edge.",
            "The body has the compact, broad-headed profile typical of bullhead catfish."
        ],
        habitatTags: ["Mud", "Shallow Water"],
        waterbodyTypes: ["Pond", "Lake", "Reservoir", "River", "Creek"]
    },
    {
        id: "yellow-bullhead",
        name: "Yellow Bullhead",
        summary:
            "A compact bullhead catfish recognized by its white or yellow " +
            "chin barbels and nearly straight, unforked tail.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Ameiurus natalis",
        categoryId: "catfish",
        family: "Ictaluridae",
        aliases: [],
        identificationTraits: [
            "The chin barbels are white or yellow rather than dark.",
            "The tail is unforked, with a rear edge that is nearly straight.",
            "The body has the compact, broad-headed profile typical of bullhead catfish."
        ],
        habitatTags: ["Grass", "Shallow Water"],
        waterbodyTypes: ["Pond", "Lake", "River", "Creek"]
    },
    {
        id: "walleye",
        name: "Walleye",
        summary:
            "A streamlined percid recognized by an unspotted spiny dorsal fin, " +
            "few or no cheek scales, and large reflective eyes.",
        createdVersion: "0.1.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Sander vitreus",
        categoryId: "walleye-sauger",
        family: "Percidae",
        aliases: [],
        identificationTraits: [
            "The spiny dorsal fin lacks distinct individual dark spots.",
            "The cheeks have few scales or may appear smooth.",
            "The eyes are large and reflective."
        ],
        habitatTags: ["Rock", "Open Water", "Current", "Deep Water"],
        waterbodyTypes: ["Lake", "River", "Reservoir"]
    },
    {
        id: "sauger",
        name: "Sauger",
        summary:
            "A streamlined river-oriented percid recognized by distinct spots " +
            "on the spiny dorsal fin, scaled cheeks, and dark body saddles.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Sander canadensis",
        categoryId: "walleye-sauger",
        family: "Percidae",
        aliases: ["Sand Pike"],
        identificationTraits: [
            "Distinct individual dark spots mark the spiny dorsal fin.",
            "The cheeks are covered with scales.",
            "Dark saddle-like blotches cross the back and upper sides."
        ],
        habitatTags: ["Current", "Channel", "Deep Water"],
        waterbodyTypes: ["River", "Reservoir", "Lake"]
    },
    {
        id: "saugeye",
        name: "Saugeye",
        summary:
            "A Walleye-Sauger hybrid recognized by spots and bars in the " +
            "spiny dorsal webbing, scaled cheeks, and intermediate markings.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Sander vitreus × Sander canadensis",
        categoryId: "walleye-sauger",
        family: "Percidae",
        aliases: [],
        identificationTraits: [
            "The spiny dorsal webbing shows distinct spots together with bars or streaks.",
            "The cheeks are covered with scales.",
            "Gold-brown body blotching is intermediate between typical Walleye and Sauger markings."
        ],
        habitatTags: ["Open Water", "Deep Water"],
        waterbodyTypes: ["Lake", "Reservoir"]
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
            "A heavy-bodied, brassy-olive carp recognized by two pairs of " +
            "barbels, large dark-edged scales, and a long dorsal fin.",
        createdVersion: "0.1.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Cyprinus carpio",
        categoryId: "carp",
        family: "Cyprinidae",
        aliases: ["European Carp", "German Carp"],
        identificationTraits: [
            "Two pairs of barbels are present around the upper jaw.",
            "The dorsal fin is long, with a stout saw-toothed spine at the front.",
            "Large dark-edged scales create a crosshatched appearance along the body.",
            "The upper body is brassy olive and grades toward a yellowish-white belly."
        ],
        habitatTags: ["Shallow Water", "Mud", "Grass", "Open Water"],
        waterbodyTypes: ["Pond", "Lake", "River", "Reservoir"]
    },
    {
        id: "freshwater-drum",
        name: "Freshwater Drum",
        summary:
            "A silvery, deep-bodied fish recognized by its humpbacked profile, " +
            "milky-white lips, and long two-part dorsal fin.",
        createdVersion: "0.1.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Aplodinotus grunniens",
        categoryId: "drum",
        family: "Sciaenidae",
        aliases: ["Sheepshead", "Sheephead"],
        identificationTraits: [
            "The silvery, deep body rises steeply from the snout toward the dorsal fin, creating a humpbacked profile.",
            "The long dorsal fin is divided into two distinct sections.",
            "The lips are milky white.",
            "The pelvic fins are white and may be tinged orange."
        ],
        habitatTags: ["Rock", "Channel", "Deep Water", "Mud"],
        waterbodyTypes: ["Lake", "River", "Reservoir"]
    },
    {
        id: "longnose-gar",
        name: "Longnose Gar",
        summary:
            "An armored, elongated gar recognized by its extremely long, " +
            "narrow snout and round dark spots on the fins and sometimes the body.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Lepisosteus osseus",
        categoryId: "gar",
        family: "Lepisosteidae",
        aliases: ["Needlenose Gar", "Billfish", "Billy Gar"],
        identificationTraits: [
            "The snout is extremely long and narrow.",
            "At the nostrils, the snout is narrower than the eye diameter.",
            "Round dark spots mark the unpaired fins and may also occur on the body.",
            "The upper body is brown to dark olive and grades to a white belly."
        ],
        habitatTags: ["Current", "Grass", "Deep Water"],
        waterbodyTypes: ["Reservoir", "River", "Creek"]
    },
    {
        id: "spotted-gar",
        name: "Spotted Gar",
        summary:
            "An armored gar recognized by well-defined round dark spots " +
            "across the top of the head, snout, and fins.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Lepisosteus oculatus",
        categoryId: "gar",
        family: "Lepisosteidae",
        aliases: [],
        identificationTraits: [
            "Well-defined round dark spots cover the top of the head and snout.",
            "Round dark spots are prominent on the paired fins and other fins.",
            "The upper body is brownish or olive and grades to white below."
        ],
        habitatTags: ["Grass", "Timber"],
        waterbodyTypes: ["River", "Creek"]
    },
    {
        id: "paddlefish",
        name: "Paddlefish",
        summary:
            "A large, sharklike filter-feeder recognized instantly by its long " +
            "paddle-shaped snout, smooth body, and deeply forked tail.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Polyodon spathula",
        categoryId: "paddlefish",
        family: "Polyodontidae",
        aliases: ["Spoonbill"],
        identificationTraits: [
            "The snout is greatly elongated and paddle shaped.",
            "The large adult mouth is toothless and positioned far back beneath the head.",
            "Small eyes point downward and forward near the front of the mouth.",
            "The tail is deeply forked, with the upper lobe longer than the lower lobe."
        ],
        habitatTags: ["Current", "Open Water", "Deep Water"],
        waterbodyTypes: ["River", "Reservoir"]
    }
]);

console.info(
    `[Loaded] ${FISH_DATA_BUILD_INFO.file} | ` +
    `${FISH_DATA_BUILD_INFO.milestone} | ` +
    `${FISH_DATA_BUILD_INFO.replacement} | ` +
    `${FISH_DATA.length} records`
);
