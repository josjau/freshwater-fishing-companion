/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: data/technique-guidance.js
   PURPOSE: Owns beginner curriculum and contextual Rig/Bait
   first-learning guidance; never owns intrinsic compatibility.
   ========================================================== */

"use strict";

const TECHNIQUE_GUIDANCE_BUILD_INFO = Object.freeze({
    file: "data/technique-guidance.js",
    milestone: "FCC 53A — Techniques Guide"
});

// Editorial learning curriculum, not an effectiveness ranking or a Technique tag.
const CORE_TECHNIQUE_IDS = Object.freeze([
    "float-presentation", "bottom-presentation", "tight-line",
    "steady-retrieve", "swim", "hop", "drag"
]);

// selectionMode 'explicit': the initialLesson is ONLY an introductory example
// (or general lesson with no bait); it never selects a bait. Only a user's
// explicit Use This Bait action activates one of the baitLessons.
// selectionMode 'rig': show the rig-level first lesson without a new picker.
// Other Compatible Techniques must be derived from active pairwise relations;
// do not store a copied list, rank, or unconditional bait-specific alternative.
const RIG_TECHNIQUE_LEARNING_GUIDANCE = Object.freeze([
    {
        rigId: "texas-rig", selectionMode: "explicit",
        initialLesson: { techniqueId: "hop", exampleLureBaitId: "stick-worm", why: "Lift the worm a short distance off bottom, let it fall, and recover slack before repeating." },
        baitLessons: [
            { lureBaitId: "stick-worm", techniqueId: "hop", why: "Lift the worm a short distance off bottom, let it fall, and recover slack before repeating." },
            { lureBaitId: "craw", techniqueId: "drag", why: "Pull the craw slowly along bottom, then pause to let it settle." },
            { lureBaitId: "creature-bait", techniqueId: "hop", why: "Make short, controlled lifts and falls so the bait's appendages move near cover." },
            { lureBaitId: "tube", techniqueId: "drag", why: "Crawl the tube slowly along bottom with occasional pauses, keeping its movement controlled." },
            { lureBaitId: "paddle-tail-swimbait", techniqueId: "swim", why: "Retrieve along a controlled path at a speed that keeps the paddle tail kicking." }
        ]
    },
    {
        rigId: "jighead-soft-plastic", selectionMode: "explicit",
        initialLesson: { techniqueId: "hop", exampleLureBaitId: "stick-worm", why: "Short rod lifts raise the worm off the bottom before allowing it to settle again." },
        baitLessons: [
            { lureBaitId: "stick-worm", techniqueId: "hop", why: "Short rod lifts raise the worm off the bottom before allowing it to settle again." },
            { lureBaitId: "craw", techniqueId: "hop", why: "Small hops move the craw along the bottom while allowing its claws and appendages to move during the fall." },
            { lureBaitId: "paddle-tail-swimbait", techniqueId: "swim", why: "A controlled retrieve activates the paddle tail while the jighead helps maintain the desired depth." }
        ]
    },
    {
        rigId: "direct-tie-lure-setup", selectionMode: "explicit",
        initialLesson: { techniqueId: "steady-retrieve", why: "Steady Retrieve applies to all five currently authored direct-tie lure choices." },
        baitLessons: [
            { lureBaitId: "spinnerbait", techniqueId: "steady-retrieve", why: "A consistent retrieve keeps the blades turning and the lure moving." },
            { lureBaitId: "crankbait", techniqueId: "steady-retrieve", why: "Smooth reeling produces the crankbait's designed swimming and diving action." },
            { lureBaitId: "jerkbait", techniqueId: "twitch-and-pause", why: "Short rod movements make the lure dart, while pauses interrupt its movement." },
            { lureBaitId: "inline-spinner", techniqueId: "steady-retrieve", why: "Continuous forward movement activates the spinning blade." },
            { lureBaitId: "spoon", techniqueId: "steady-retrieve", why: "A consistent retrieve produces a repeatable wobbling action." }
        ]
    },
    {
        rigId: "drop-shot-rig", selectionMode: "explicit",
        initialLesson: { techniqueId: "shake", exampleLureBaitId: "stick-worm", why: "Small rod movements make the worm quiver above the bottom weight without moving the entire rig far." },
        baitLessons: [
            { lureBaitId: "stick-worm", techniqueId: "shake", why: "Small rod movements make the worm quiver above the bottom weight without moving the entire rig far." },
            { lureBaitId: "tube", techniqueId: "shake", why: "Gently shake the rod tip to animate the tube while keeping it positioned above the weight." }
        ]
    },
    {
        rigId: "weightless-soft-plastic-rig", selectionMode: "explicit",
        initialLesson: { techniqueId: "deadstick", exampleLureBaitId: "stick-worm", why: "Allow the worm to fall naturally, then leave it mostly still while watching the line for a strike." },
        baitLessons: [
            { lureBaitId: "stick-worm", techniqueId: "deadstick", why: "Allow the worm to fall naturally, then leave it mostly still while watching the line for a strike." },
            { lureBaitId: "paddle-tail-swimbait", techniqueId: "swim", why: "Retrieve the bait along a controlled path to activate its swimming tail." },
            { lureBaitId: "tube", techniqueId: "swim", why: "Use a controlled retrieve to move the unweighted tube through the water." }
        ]
    },
    { rigId: "fixed-bobber-rig", selectionMode: "rig", defaultLesson: { techniqueId: "float-presentation", why: "Learn to keep bait suspended at a fixed depth and recognize bites by watching the float." } },
    { rigId: "slip-bobber-rig", selectionMode: "rig", defaultLesson: { techniqueId: "float-presentation", why: "Learn to control bait depth with an adjustable float and recognize movement that signals a bite." } },
    { rigId: "basic-bottom-rig", selectionMode: "rig", defaultLesson: { techniqueId: "bottom-presentation", why: "Learn to position bait near the bottom and maintain awareness of line movement or changes in tension." } },
    { rigId: "live-bait-slip-sinker-rig", selectionMode: "rig", defaultLesson: { techniqueId: "bottom-presentation", why: "Learn to present bait near the bottom while the sliding sinker allows line movement with reduced resistance." } },
    { rigId: "three-way-rig", selectionMode: "rig", defaultLesson: { techniqueId: "bottom-presentation", why: "Learn to keep the bait above a separate sinker dropper while maintaining control of the presentation in current." } },
    { rigId: "split-shot-bait-rig", selectionMode: "rig", defaultLesson: { techniqueId: "tight-line", why: "Learn to maintain enough line tension to detect bites while small split shot helps position the bait." } },
    { rigId: "bottom-bouncer-spinner-rig", selectionMode: "rig", defaultLesson: { techniqueId: "troll", why: "Learn how a moving boat pulls the spinner harness while the bottom bouncer helps maintain its position near the bottom." } },
    { rigId: "wacky-rig", selectionMode: "rig", defaultLesson: { techniqueId: "deadstick", why: "Let the worm fall naturally, then keep it mostly still while watching for subtle line movement." } },
    { rigId: "ned-rig", selectionMode: "rig", defaultLesson: { techniqueId: "hop", why: "Use short rod lifts to move the compact bait off the bottom, allowing it to settle between movements." } },
    { rigId: "neko-rig", selectionMode: "rig", defaultLesson: { techniqueId: "shake", why: "Keep the weighted end near the bottom while small rod movements make the worm quiver." } },
    { rigId: "shaky-head-rig", selectionMode: "rig", defaultLesson: { techniqueId: "shake", why: "Use subtle rod-tip movements to animate the worm while keeping the jighead close to the bottom." } },
    { rigId: "weighted-swimbait-hook-rig", selectionMode: "rig", defaultLesson: { techniqueId: "swim", why: "Move the paddle-tail through the water along a controlled path, allowing its tail to kick naturally." } },
    { rigId: "tube-jig-rig", selectionMode: "rig", defaultLesson: { techniqueId: "hop", why: "Move the tube in short hops near the bottom, allowing it to fall between lifts." } },
    {
        rigId: "carolina-rig", selectionMode: "explicit",
        initialLesson: { techniqueId: "drag", why: "Pull the sinker along the bottom, allowing the soft plastic to trail behind on its leader." },
        baitLessons: [
            { lureBaitId: "stick-worm", techniqueId: "drag", why: "Pull the sinker slowly along bottom while the straight worm follows behind on the leader." },
            { lureBaitId: "craw", techniqueId: "drag", why: "Drag the sinker along bottom and let the craw trail with its claws moving freely." },
            { lureBaitId: "creature-bait", techniqueId: "drag", why: "Move the sinker steadily across bottom while the creature bait follows with its appendages free." }
        ]
    },
    {
        rigId: "free-rig", selectionMode: "explicit",
        initialLesson: { techniqueId: "lift-and-fall", why: "Lift the presentation, then allow the sliding weight and soft plastic to fall separately." },
        baitLessons: [
            { lureBaitId: "stick-worm", techniqueId: "lift-and-fall", why: "Lift the rig and let the ringed sinker fall ahead of the straight worm without pegging it." },
            { lureBaitId: "craw", techniqueId: "lift-and-fall", why: "Lift and pause so the free-sliding weight falls first, followed by the craw and its moving claws." },
            { lureBaitId: "creature-bait", techniqueId: "lift-and-fall", why: "Lift the rig, then let the weight slide ahead while the creature bait falls with its flaps free." }
        ]
    },
    {
        rigId: "jika-rig", selectionMode: "explicit",
        initialLesson: { techniqueId: "lift-and-fall", why: "Lift the rig and let the hinged weight and soft plastic settle toward the bottom with separate movement." },
        baitLessons: [
            { lureBaitId: "stick-worm", techniqueId: "lift-and-fall", why: "Make short lifts so the hanging weight and straight worm pivot separately during the fall." },
            { lureBaitId: "craw", techniqueId: "lift-and-fall", why: "Lift and settle the hinged weight while the craw trails and its claws move beside the hook." },
            { lureBaitId: "creature-bait", techniqueId: "lift-and-fall", why: "Lift the compact junction, then let the dangling weight settle while the creature bait flutters." }
        ]
    },
    {
        rigId: "punch-pegged-texas-rig", selectionMode: "explicit",
        initialLesson: { techniqueId: "lift-and-fall", why: "Raise the pegged weight and bait together, then allow them to fall into or through vegetation when working heavy cover." },
        baitLessons: [
            { lureBaitId: "stick-worm", techniqueId: "lift-and-fall", why: "Lift and lower the pegged weight and streamlined worm together through dense vegetation." },
            { lureBaitId: "craw", techniqueId: "lift-and-fall", why: "Use short lifts to move the pegged weight and compact craw together through cover." },
            { lureBaitId: "creature-bait", techniqueId: "lift-and-fall", why: "Raise and lower the pegged weight and compact creature bait as one unit through vegetation." }
        ]
    },
    { rigId: "double-jig-crappie-rig", selectionMode: "rig", defaultLesson: { techniqueId: "vertical-jig", why: "Work the two jigs up and down beneath the rod tip, using controlled lifts and falls." } }
]);
