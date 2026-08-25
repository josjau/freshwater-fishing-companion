/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: data/fish.js
   PURPOSE: Provides canonical application-owned Fish records
   for search, browsing, identification, recommendations, and
   related-knowledge navigation.
   ========================================================== */

"use strict";

const FISH_DATA_BUILD_INFO = Object.freeze({
    file: "data/fish.js"
});

const FISH_DATA = Object.freeze([
    {
        id: "largemouth-bass",
        name: "Largemouth Bass",
        summary:
            "A black bass recognized by a mouth hinge that extends behind " +
            "the eye and a broad horizontal stripe along the side.",
        createdVersion: "0.1.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Micropterus nigricans",
        categoryId: "bass",
        family: "Centrarchidae",
        aliases: [],
        identificationTraits: [
            "The mouth hinge extends behind the rear edge of the eye when the mouth is closed.",
            "A broad dark horizontal stripe runs along the side.",
            "The two dorsal-fin sections are weakly connected and separated by a deep notch.",
            "The tongue usually lacks the rough tooth patch found on many Smallmouth and Spotted Bass; color alone is not decisive."
        ],
        habitatTags: ["Grass", "Timber", "Brush", "Shallow Water"],
        waterbodyTypes: ["Pond", "Lake", "River", "Reservoir"]
    },
    {
        id: "smallmouth-bass",
        name: "Smallmouth Bass",
        summary:
            "A black bass recognized by a mouth hinge that ends before the " +
            "rear edge of the eye and vertical bars along the side.",
        createdVersion: "0.1.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Micropterus dolomieu",
        categoryId: "bass",
        family: "Centrarchidae",
        aliases: ["Bronzeback"],
        identificationTraits: [
            "The mouth hinge ends in front of the rear edge of the eye when the mouth is closed.",
            "Dark vertical bars commonly mark the sides.",
            "The two dorsal-fin sections are connected rather than separated by a deep notch.",
            "A rough tooth patch on the tongue can support the identification but should not be used alone."
        ],
        habitatTags: ["Rock", "Open Water", "Current"],
        waterbodyTypes: ["Lake", "River", "Creek", "Reservoir"]
    },
    {
        id: "spotted-bass",
        name: "Spotted Bass",
        summary:
            "A black bass recognized by a mouth hinge near the rear edge of " +
            "the eye and rows of dark spots below the lateral stripe.",
        createdVersion: "0.1.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Micropterus punctulatus",
        categoryId: "bass",
        family: "Centrarchidae",
        aliases: ["Kentucky Bass"],
        identificationTraits: [
            "The mouth hinge is approximately even with the rear edge of the eye when the mouth is closed.",
            "A dark lateral stripe is accompanied by rows of dark spots below it.",
            "The two dorsal-fin sections are connected and are not divided by the deep notch typical of a Largemouth Bass.",
            "A rough tooth patch on the tongue can support the identification but should not be used alone."
        ],
        habitatTags: ["Rock", "Current", "Channel", "Deep Water"],
        waterbodyTypes: ["Lake", "River", "Reservoir"]
    },
    {
        id: "white-bass",
        name: "White Bass",
        summary:
            "A deep-bodied temperate bass recognized by its arched back, " +
            "horizontal stripes, and a single tongue patch.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Morone chrysops",
        categoryId: "bass",
        family: "Moronidae",
        aliases: ["Sand Bass"],
        identificationTraits: [
            "The body is deep, with a distinctly arched back behind the head.",
            "The tongue has one round or heart-shaped tooth patch.",
            "Horizontal side stripes support the identification, but body shape and tongue-patch pattern provide the stronger separation from Striped Bass."
        ],
        habitatTags: ["Open Water", "Current", "Deep Water"],
        waterbodyTypes: ["Lake", "Reservoir", "River", "Creek"]
    },
    {
        id: "striped-bass",
        name: "Striped Bass",
        summary:
            "A slender temperate bass recognized by strong, mostly continuous " +
            "horizontal stripes and two parallel tongue patches.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Morone saxatilis",
        categoryId: "bass",
        family: "Moronidae",
        aliases: ["Striper"],
        identificationTraits: [
            "The body is slender and does not have the distinctly arched back of a White Bass.",
            "Strong horizontal side stripes are mostly continuous rather than broken.",
            "The tongue has two distinct parallel tooth patches."
        ],
        habitatTags: ["Open Water", "Deep Water", "Current"],
        waterbodyTypes: ["Lake", "Reservoir", "River"]
    },
    {
        id: "hybrid-striped-bass",
        name: "Hybrid Striped Bass",
        summary:
            "A White Bass–Striped Bass hybrid recognized by its intermediate " +
            "body depth and broken horizontal side stripes.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Morone chrysops × Morone saxatilis",
        categoryId: "bass",
        family: "Moronidae",
        aliases: ["Wiper", "Whiterock Bass"],
        identificationTraits: [
            "The body is deeper than a typical Striped Bass and intermediate between the parent species.",
            "Horizontal side stripes are commonly broken or discontinuous.",
            "Tongue-patch presentation varies and should be treated as supporting evidence rather than the sole identifier."
        ],
        habitatTags: ["Open Water", "Current", "Deep Water"],
        waterbodyTypes: ["Lake", "Reservoir", "River"]
    },
    {
        id: "bluegill",
        name: "Bluegill",
        summary:
            "A common sunfish recognized by its deep body, small mouth, " +
            "and dark opercular flap.",
        createdVersion: "0.1.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Lepomis macrochirus",
        categoryId: "sunfish-crappie",
        family: "Centrarchidae",
        aliases: [],
        identificationTraits: [
            "The mouth is small relative to the deep body.",
            "The pectoral fin is long and pointed.",
            "The opercular flap is black, and a dark blotch marks the rear of the soft dorsal fin.",
            "Blue coloration is often visible on the chin and lower gill-cover area."
        ],
        habitatTags: ["Grass", "Brush", "Timber", "Shallow Water"],
        waterbodyTypes: ["Pond", "Lake", "River", "Reservoir"]
    },
    {
        id: "redear-sunfish",
        name: "Redear Sunfish",
        summary:
            "A deep-bodied sunfish commonly identified by the orange or red " +
            "spot at the rear of its dark opercular flap.",
        createdVersion: "0.1.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Lepomis microlophus",
        categoryId: "sunfish-crappie",
        family: "Centrarchidae",
        aliases: ["Shellcracker"],
        identificationTraits: [
            "The mouth is small and the body is deep.",
            "The black opercular flap has an orange or red spot at its rear edge.",
            "The sides are commonly golden to olive and may show darker vertical bars."
        ],
        habitatTags: ["Grass", "Brush", "Shallow Water"],
        waterbodyTypes: ["Pond", "Lake", "Reservoir"]
    },
    {
        id: "green-sunfish",
        name: "Green Sunfish",
        summary:
            "A thick-bodied sunfish recognized by its large mouth, blue facial " +
            "markings, pale fin margins, and dark dorsal blotch.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Lepomis cyanellus",
        categoryId: "sunfish-crappie",
        family: "Centrarchidae",
        aliases: ["Black Perch"],
        identificationTraits: [
            "The mouth is noticeably larger than a Bluegill's.",
            "The body is comparatively elongated and thick rather than strongly disk-shaped.",
            "Blue facial markings are visible on the cheek and lower head.",
            "The fins often show pale or salmon-colored margins, and a dark blotch marks the rear of the soft dorsal fin."
        ],
        habitatTags: ["Shallow Water"],
        waterbodyTypes: ["Pond", "Lake", "River", "Creek"]
    },
    {
        id: "longear-sunfish",
        name: "Longear Sunfish",
        summary:
            "A colorful sunfish recognized by its elongated black opercular " +
            "flap, rounded pectoral fin, and moderate mouth.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Lepomis megalotis",
        categoryId: "sunfish-crappie",
        family: "Centrarchidae",
        aliases: ["Creek Perch"],
        identificationTraits: [
            "The black opercular flap is distinctly elongated and is often bordered by white.",
            "The pectoral fin is rounded rather than long and pointed.",
            "The mouth is moderate in size rather than especially small or large."
        ],
        habitatTags: ["Rock", "Grass"],
        waterbodyTypes: ["Pond", "Lake", "River", "Creek", "Reservoir"]
    },
    {
        id: "northern-rock-bass",
        name: "Northern Rock Bass",
        summary:
            "A thick-bodied sunfish recognized by its large eyes, 12 dorsal " +
            "spines, 6 anal spines, and parallel rows of dark side spots.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Ambloplites rupestris",
        categoryId: "sunfish-crappie",
        family: "Centrarchidae",
        aliases: ["Rock Bass", "Goggle-Eye"],
        identificationTraits: [
            "The body is thick, with a large mouth and conspicuously large eyes.",
            "The dorsal fin has 12 spines.",
            "The anal fin has 6 spines.",
            "Dark side spots tend to form parallel rows rather than an irregular freckled pattern."
        ],
        habitatTags: ["Rock", "Timber", "Grass", "Deep Water"],
        waterbodyTypes: ["River", "Creek", "Reservoir"]
    },
    {
        id: "warmouth",
        name: "Warmouth",
        summary:
            "A thick-bodied sunfish recognized by its large mouth, dark lines " +
            "radiating from the eye, and three anal spines.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Lepomis gulosus",
        categoryId: "sunfish-crappie",
        family: "Centrarchidae",
        aliases: [],
        identificationTraits: [
            "The mouth is large for a sunfish.",
            "Dark lines radiate backward from the eye across the cheek.",
            "The dorsal fin has 10 spines.",
            "The anal fin has 3 spines, compared with 6 on a Northern Rock Bass."
        ],
        habitatTags: ["Grass", "Shallow Water"],
        waterbodyTypes: ["Lake", "Reservoir", "River"]
    },
    {
        id: "ozark-bass",
        name: "Ozark Bass",
        summary:
            "A comparatively slender rock-bass relative recognized by irregular " +
            "dark freckling rather than parallel rows of side spots.",
        createdVersion: "0.6.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Ambloplites constellatus",
        categoryId: "sunfish-crappie",
        family: "Centrarchidae",
        aliases: ["Goggle-Eye"],
        identificationTraits: [
            "Dark side markings are irregular and freckled rather than arranged in the parallel rows typical of Northern Rock Bass.",
            "The body is comparatively slender for a rock bass.",
            "The eyes are typically smaller in proportion than those of Northern Rock Bass."
        ],
        habitatTags: ["Rock", "Deep Water"],
        waterbodyTypes: ["River", "Creek"]
    },
    {
        id: "black-crappie",
        name: "Black Crappie",
        summary:
            "A slab-sided panfish with irregular dark spotting across " +
            "the body and fins.",
        createdVersion: "0.1.0",
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Pomoxis nigromaculatus",
        categoryId: "sunfish-crappie",
        family: "Centrarchidae",
        aliases: [],
        identificationTraits: [
            "Dark speckles and blotches are scattered irregularly across the sides rather than forming vertical bars.",
            "The dorsal fin usually has 7 or 8 spines."
        ],
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
        lastModifiedVersion: "0.6.0",
        isActive: true,
        scientificName: "Pomoxis annularis",
        categoryId: "sunfish-crappie",
        family: "Centrarchidae",
        aliases: ["Papermouth", "Bachelor Perch"],
        identificationTraits: [
            "Five to 10 dark vertical bars commonly mark the sides.",
            "The dorsal fin usually has 6 spines."
        ],
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
    `${FISH_DATA.length} records`
);
