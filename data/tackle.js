/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: data/tackle.js
   PURPOSE: Provides canonical generic tackle definitions used
   by Rig components, reference popovers, and future inventory.
   ========================================================== */

"use strict";

const TACKLE_DATA_BUILD_INFO = Object.freeze({
    file: "data/tackle.js",
    milestone: "Core Rigs and Tackle Media"
});

const TACKLE_DATA = Object.freeze([
    {
        id: "fixed-bobber",
        name: "Clip-on Bobber",
        aliases: ["Fixed Bobber", "Spring Bobber"],
        category: "Floats",
        summary: "A float that clips directly to the fishing line and holds bait at a fixed depth.",
        purpose: "Suspends bait above the bottom and provides a visible strike indicator.",
        recognitionNotes: ["Usually round or oval", "Often red-and-white", "Uses a spring-loaded clip"],
        commonVariants: ["Round", "Pencil", "Cigar"],
        relatedTackleIds: ["split-shot", "hook", "bait"],
        mediaIds: ["fixed-bobber-reference"],
        createdVersion: "0.2.6",
        lastModifiedVersion: "0.2.6",
        isActive: true
    },
    {
        id: "split-shot",
        name: "Split Shot",
        aliases: ["Split Shot Sinker", "Pinch Weight"],
        category: "Weights",
        summary: "A small round sinker with a slot that is pinched onto the fishing line.",
        purpose: "Adds small amounts of weight to help bait sink or balance a float.",
        recognitionNotes: ["Small round or oval metal weight", "Visible slot through one side", "Often sold in assorted sizes"],
        commonVariants: ["Removable", "Non-removable", "Lead-free"],
        relatedTackleIds: ["fixed-bobber", "slip-float", "hook"],
        mediaIds: ["split-shot-reference"],
        createdVersion: "0.2.6",
        lastModifiedVersion: "0.2.6",
        isActive: true
    },
    {
        id: "hook",
        name: "Fishing Hook",
        aliases: ["Bait Hook", "Live-Bait Hook"],
        category: "Hooks",
        summary: "A curved metal component that holds bait and catches the fish when it bites.",
        purpose: "Connects bait to the line and penetrates the fish's mouth during the hookset.",
        recognitionNotes: ["Curved metal shape", "Sharp point and barb", "Eye at the opposite end"],
        commonVariants: ["Baitholder", "Circle", "Aberdeen", "Octopus"],
        relatedTackleIds: ["bait", "leader-line"],
        mediaIds: ["hook-reference"],
        createdVersion: "0.2.6",
        lastModifiedVersion: "0.2.6",
        isActive: true
    },
    {
        id: "bait",
        name: "Bait",
        aliases: ["Live Bait", "Natural Bait"],
        category: "Baits",
        summary: "Natural or artificial material placed on a hook to attract fish.",
        purpose: "Provides scent, movement, shape, or flavor that encourages a fish to bite.",
        recognitionNotes: ["May be live, preserved, prepared, or artificial", "Selected according to target fish and regulations"],
        commonVariants: ["Worms", "Minnows", "Crickets", "Prepared bait"],
        relatedTackleIds: ["hook", "fixed-bobber", "slip-float"],
        mediaIds: ["bait-reference"],
        createdVersion: "0.2.6",
        lastModifiedVersion: "0.2.6",
        isActive: true
    },
    {
        id: "bobber-stop",
        name: "Bobber Stop",
        aliases: ["Float Stop", "Slip Stop"],
        category: "Float Accessories",
        summary: "A small adjustable stop placed on the line above a slip float.",
        purpose: "Sets the maximum depth at which a slip float can travel up the line.",
        recognitionNotes: ["Very small knot, rubber stop, or thread stop", "Usually sold with beads", "Slides on the line when adjusted"],
        commonVariants: ["Thread", "Rubber", "Silicone"],
        relatedTackleIds: ["stop-bead", "slip-float"],
        mediaIds: ["bobber-stop-reference"],
        createdVersion: "0.2.6",
        lastModifiedVersion: "0.2.6",
        isActive: true
    },
    {
        id: "stop-bead",
        name: "Bobber Stop Bead",
        aliases: ["Stop Bead", "Float Bead"],
        category: "Beads",
        summary: "A small bead placed between a bobber stop and a slip float.",
        purpose: "Prevents the bobber stop from passing through the float's line opening.",
        recognitionNotes: ["Small round plastic bead", "Hole through the center", "Usually bright or neutral colored"],
        commonVariants: ["Plastic", "Glass", "Soft rubber"],
        relatedTackleIds: ["bobber-stop", "slip-float"],
        mediaIds: ["stop-bead-reference"],
        createdVersion: "0.2.6",
        lastModifiedVersion: "0.2.6",
        isActive: true
    },
    {
        id: "slip-float",
        name: "Slip Float",
        aliases: ["Slip Bobber", "Sliding Float"],
        category: "Floats",
        summary: "A float with a line channel that allows it to slide freely until it reaches a bobber stop.",
        purpose: "Allows deep bait presentation while remaining easy to cast.",
        recognitionNotes: ["Line passes through the center or a lower tube", "Long or oval body", "No fixed spring clip"],
        commonVariants: ["Pencil", "Cigar", "Oval", "Weighted"],
        relatedTackleIds: ["bobber-stop", "stop-bead", "split-shot"],
        mediaIds: ["slip-float-reference"],
        createdVersion: "0.2.6",
        lastModifiedVersion: "0.2.6",
        isActive: true
    },
    {
        id: "sliding-sinker",
        name: "Sliding Sinker",
        aliases: ["Egg Sinker", "No-Roll Sinker"],
        category: "Weights",
        summary: "A sinker with a hole through it so the fishing line can slide freely.",
        purpose: "Keeps bait near the bottom while allowing a fish to move the line with less resistance.",
        recognitionNotes: ["Hole through the center", "Usually egg-shaped, flat, or cylindrical", "Slides directly on the main line"],
        commonVariants: ["Egg", "No-roll", "Barrel"],
        relatedTackleIds: ["bead", "barrel-swivel", "leader-line"],
        mediaIds: ["sliding-sinker-reference"],
        createdVersion: "0.2.6",
        lastModifiedVersion: "0.2.6",
        isActive: true
    },
    {
        id: "bead",
        name: "Protective Bead",
        aliases: ["Rig Bead", "Knot Bead"],
        category: "Beads",
        summary: "A small bead placed between a sliding weight and a knot or swivel.",
        purpose: "Protects the knot from repeated impact by the sinker.",
        recognitionNotes: ["Small round bead", "Hole through the center", "Often red, orange, black, or clear"],
        commonVariants: ["Plastic", "Glass", "Soft rubber"],
        relatedTackleIds: ["sliding-sinker", "barrel-swivel"],
        mediaIds: ["bead-reference"],
        createdVersion: "0.2.6",
        lastModifiedVersion: "0.2.6",
        isActive: true
    },
    {
        id: "barrel-swivel",
        name: "Barrel Swivel",
        aliases: ["Swivel"],
        category: "Connectors",
        summary: "A small rotating connector with an eye at each end.",
        purpose: "Connects two sections of line and reduces line twist.",
        recognitionNotes: ["Two metal eyes", "Short rotating barrel in the center", "No snap attached"],
        commonVariants: ["Brass", "Black nickel", "Ball-bearing"],
        relatedTackleIds: ["leader-line", "sliding-sinker", "bead"],
        mediaIds: ["barrel-swivel-reference"],
        createdVersion: "0.2.6",
        lastModifiedVersion: "0.2.6",
        isActive: true
    },
    {
        id: "leader-line",
        name: "Leader Line",
        aliases: ["Leader", "Leader Material"],
        category: "Line",
        summary: "A short section of line between the main line and the hook or lure.",
        purpose: "Provides abrasion resistance, lower visibility, or a different strength near the terminal tackle.",
        recognitionNotes: ["Looks like fishing line", "Often sold on smaller spools", "May be fluorocarbon, monofilament, or wire"],
        commonVariants: ["Monofilament", "Fluorocarbon", "Wire"],
        relatedTackleIds: ["barrel-swivel", "hook"],
        mediaIds: ["leader-line-reference"],
        createdVersion: "0.2.6",
        lastModifiedVersion: "0.2.6",
        isActive: true
    },
    {
        id: "bullet-weight",
        name: "Bullet Weight",
        aliases: ["Worm Weight"],
        category: "Weights",
        summary: "A cone-shaped sliding sinker commonly used with soft-plastic rigs.",
        purpose: "Adds casting weight, helps the bait reach depth, and moves through vegetation or cover.",
        recognitionNotes: ["Cone or bullet shape", "Hole through the center", "Pointed end faces the rod"],
        commonVariants: ["Lead", "Tungsten", "Brass"],
        relatedTackleIds: ["offset-worm-hook", "soft-plastic", "weight-peg"],
        mediaIds: ["bullet-weight-reference"],
        createdVersion: "0.2.6",
        lastModifiedVersion: "0.2.6",
        isActive: true
    },
    {
        id: "offset-worm-hook",
        name: "Offset Worm Hook",
        aliases: ["Offset Hook", "Worm Hook"],
        category: "Hooks",
        summary: "A hook with an offset near the eye that holds a soft-plastic bait securely.",
        purpose: "Supports weed-resistant rigging while keeping the soft plastic aligned on the hook.",
        recognitionNotes: ["Z-shaped offset below the eye", "Wide or standard gap", "Long shank compared with many bait hooks"],
        commonVariants: ["Standard gap", "Extra-wide gap", "Straight shank"],
        relatedTackleIds: ["bullet-weight", "soft-plastic"],
        mediaIds: ["offset-worm-hook-reference"],
        createdVersion: "0.2.6",
        lastModifiedVersion: "0.2.6",
        isActive: true
    },
    {
        id: "soft-plastic",
        name: "Soft Plastic Bait",
        aliases: ["Soft Plastic", "Plastic Worm"],
        category: "Artificial Baits",
        summary: "A flexible molded artificial bait made to imitate prey or create attractive movement.",
        purpose: "Provides shape, action, and profile for many weed-resistant and finesse presentations.",
        recognitionNotes: ["Flexible rubber-like body", "Available in many shapes and colors", "Usually packaged in resealable bags"],
        commonVariants: ["Worm", "Creature bait", "Craw", "Swimbait"],
        relatedTackleIds: ["offset-worm-hook", "bullet-weight", "jighead"],
        mediaIds: ["soft-plastic-reference"],
        createdVersion: "0.2.6",
        lastModifiedVersion: "0.2.8",
        isActive: true
    },
    {
        id: "weight-peg",
        name: "Weight Peg",
        aliases: ["Bobber Stop Peg", "Weight Stop"],
        category: "Rig Accessories",
        summary: "A small stop placed above a sliding weight to limit or prevent its movement.",
        purpose: "Keeps a bullet weight close to the bait when fishing thick cover.",
        recognitionNotes: ["Small rubber or silicone stop", "Slides onto the line", "Often sold on wire loops"],
        commonVariants: ["Rubber stop", "Silicone stop", "Peg toothpick"],
        relatedTackleIds: ["bullet-weight", "offset-worm-hook", "soft-plastic"],
        mediaIds: ["weight-peg-reference"],
        createdVersion: "0.2.6",
        lastModifiedVersion: "0.2.6",
        isActive: true
    },
    {
        id: "jighead",
        name: "Jighead",
        aliases: ["Jig Head", "Leadhead Jig"],
        category: "Jigheads",
        summary: "A weighted hook with the weight molded around the hook eye and shank.",
        purpose: "Adds weight and a hook in one component so a soft plastic can be cast, counted down, jigged, or retrieved at depth.",
        recognitionNotes: ["Weighted head molded onto the hook", "Line-tie eye near or above the head", "Often includes a collar or keeper for holding soft plastic"],
        commonVariants: ["Round head", "Minnow head", "Swimbait head", "Mushroom head"],
        relatedTackleIds: ["soft-plastic"],
        mediaIds: ["jighead-reference"],
        createdVersion: "0.2.8",
        lastModifiedVersion: "0.2.8",
        isActive: true
    },
    {
        id: "inline-spinner",
        name: "Inline Spinner",
        aliases: ["In-line Spinner", "Spinner"],
        category: "Lures",
        summary: "A compact lure with a blade that rotates around a central wire shaft during the retrieve.",
        purpose: "Creates flash and vibration while covering water with a straightforward cast-and-retrieve presentation.",
        recognitionNotes: ["Metal blade mounted beside a straight wire shaft", "Weighted body below the blade", "Single or treble hook at the rear"],
        commonVariants: ["French blade", "In-line blade", "Dressed hook", "Undressed hook"],
        relatedTackleIds: [],
        mediaIds: ["inline-spinner-reference"],
        createdVersion: "0.2.8",
        lastModifiedVersion: "0.2.8",
        isActive: true
    }
]);

console.info(
    `[Loaded] ${TACKLE_DATA_BUILD_INFO.file} | ` +
    `${TACKLE_DATA_BUILD_INFO.milestone} | ` +
    `${TACKLE_DATA.length} records`
);
