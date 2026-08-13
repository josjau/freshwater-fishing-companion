/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: data/knot-guidance.js
   PURPOSE: Owns task-first Knot discovery vocabulary and
   curated task-to-Knot ordering without duplicating canonical Knot data.
   ========================================================== */

"use strict";

const KNOT_GUIDANCE_BUILD_INFO = Object.freeze({
    file: "data/knot-guidance.js",
    milestone: "Knot Guide — Production Package 2"
});

const KNOT_TASK_DEFINITIONS = Object.freeze([
    Object.freeze({
        id: "attach-line-to-reel",
        title: "Attach Line to a Reel",
        description: "Secure line or backing to the reel spool before filling the reel.",
        knotIds: Object.freeze([
            "arbor-knot",
            "uni-knot"
        ]),
        searchTerms: Object.freeze([
            "attach line to reel",
            "tie line to reel",
            "tie line to spool",
            "spool fishing line",
            "spool line",
            "reel spool",
            "backing to reel",
            "attach backing to reel"
        ])
    }),
    Object.freeze({
        id: "terminal-attachment",
        title: "Tie On a Hook, Swivel, or Lure",
        description: "Choose a dependable knot for common terminal-tackle connections.",
        knotIds: Object.freeze([
            "improved-clinch-knot",
            "palomar-knot",
            "uni-knot",
            "snell-knot"
        ]),
        searchTerms: Object.freeze([
            "tie hook",
            "tie on hook",
            "hook knot",
            "tie lure",
            "tie on lure",
            "lure knot",
            "tie swivel",
            "tie clip",
            "terminal attachment"
        ])
    }),
    Object.freeze({
        id: "line-to-line",
        title: "Connect Two Lines / Add a Leader",
        description: "Join main line, leader, backing, or two line sections cleanly.",
        knotIds: Object.freeze([
            "double-uni-knot",
            "double-surgeons-knot",
            "alberto-knot"
        ]),
        searchTerms: Object.freeze([
            "connect two lines",
            "join two lines",
            "join lines",
            "line to line",
            "add leader",
            "tie leader",
            "leader connection"
        ])
    }),
    Object.freeze({
        id: "loop-connection",
        title: "Make a Loop Connection",
        description: "Choose between a free-moving terminal loop and an in-line branch loop.",
        knotIds: Object.freeze([
            "non-slip-loop-knot",
            "dropper-loop-knot"
        ]),
        searchTerms: Object.freeze([
            "make a loop",
            "loop connection",
            "tie loop",
            "loop knot"
        ])
    })
]);

console.info(
    `[Loaded] ${KNOT_GUIDANCE_BUILD_INFO.file} | ` +
    `${KNOT_GUIDANCE_BUILD_INFO.milestone} | ` +
    `${KNOT_TASK_DEFINITIONS.length} tasks`
);
