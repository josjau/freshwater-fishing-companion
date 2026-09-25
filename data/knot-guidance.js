/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: data/knot-guidance.js
   PURPOSE: Owns Knots Guide curation, practical task mappings,
   landing-task definitions, and maintained Search-intent vocabulary.
   ========================================================== */

"use strict";

const KNOT_GUIDANCE_BUILD_INFO = Object.freeze({
    file: "data/knot-guidance.js",
    milestone: "Knot Guide — Production Package 2"
});

const CORE_KNOT_IDS = Object.freeze([
    "arbor-knot",
    "improved-clinch-knot",
    "palomar-knot",
    "double-uni-knot"
]);

const KNOT_COLLECTIONS = Object.freeze({
    all: Object.freeze({
        title: "All Knots",
        description: "Browse every Knot in the guide.",
        isAvailable: true
    }),
    core: Object.freeze({
        title: "Core Knots",
        description: "Four practical starter knots covering reel attachment, common terminal connections, and joining lines.",
        isAvailable: true
    }),
    beginner: Object.freeze({
        title: "Beginner Knots",
        description: "Six approachable knots selected for common freshwater fishing connections.",
        isAvailable: true
    }),
    intermediate: Object.freeze({
        title: "Intermediate Knots",
        description: "Four specialized knots for loops, hook-specific tying, and leader connections.",
        isAvailable: true
    })
});

const KNOT_TASK_DEFINITIONS = Object.freeze([
    Object.freeze({
        id: "attach-line-to-reel",
        title: "Attach Line to a Reel",
        description: "Secure line or backing to the reel spool before filling the reel.",
        knotIds: Object.freeze([
            "arbor-knot",
            "uni-knot"
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
        ])
    }),
    Object.freeze({
        id: "loop-connection",
        title: "Make a Loop Connection",
        description: "Choose between a free-moving terminal loop and an in-line branch loop.",
        knotIds: Object.freeze([
            "non-slip-loop-knot",
            "dropper-loop-knot"
        ])
    })
]);

const KNOT_LANDING_TASK_DEFINITIONS = Object.freeze([
    Object.freeze({
        id: "learn-core-knots",
        title: "Learn Core Knots",
        description: "Start with four practical knots that cover reel attachment, common terminal connections, and joining lines.",
        targetType: "collection",
        targetId: "core"
    }),
    Object.freeze({
        id: "terminal-attachment",
        title: "Tie On a Hook, Swivel, or Lure",
        description: "Choose a dependable knot for common terminal-tackle connections.",
        targetType: "task",
        targetId: "terminal-attachment"
    }),
    Object.freeze({
        id: "line-to-line",
        title: "Connect Two Lines / Add a Leader",
        description: "Join main line, leader, backing, or two line sections cleanly.",
        targetType: "task",
        targetId: "line-to-line"
    }),
    Object.freeze({
        id: "loop-connection",
        title: "Make a Loop Connection",
        description: "Choose between a free-moving terminal loop and an in-line branch loop.",
        targetType: "task",
        targetId: "loop-connection"
    })
]);

const KNOT_SEARCH_INTENTS = Object.freeze([
    Object.freeze({
        id: "specific-terminal-knot",
        kind: "specific",
        terms: Object.freeze(["terminal knot"]),
        knotIds: Object.freeze([
            "improved-clinch-knot",
            "palomar-knot",
            "uni-knot"
        ])
    }),
    Object.freeze({
        id: "specific-improved-clinch",
        kind: "specific",
        terms: Object.freeze(["clinch knot"]),
        knotIds: Object.freeze(["improved-clinch-knot"])
    }),
    Object.freeze({
        id: "specific-palomar",
        kind: "specific",
        terms: Object.freeze([
            "braid knot",
            "drop shot knot"
        ]),
        knotIds: Object.freeze(["palomar-knot"])
    }),
    Object.freeze({
        id: "specific-uni",
        kind: "specific",
        terms: Object.freeze(["duncan knot"]),
        knotIds: Object.freeze(["uni-knot"])
    }),
    Object.freeze({
        id: "specific-braid-leader",
        kind: "specific",
        terms: Object.freeze([
            "braid to leader",
            "braid to fluorocarbon"
        ]),
        knotIds: Object.freeze([
            "double-uni-knot",
            "alberto-knot"
        ])
    }),
    Object.freeze({
        id: "specific-double-uni",
        kind: "specific",
        terms: Object.freeze([
            "backing to braid",
            "uni to uni"
        ]),
        knotIds: Object.freeze(["double-uni-knot"])
    }),
    Object.freeze({
        id: "specific-line-joining",
        kind: "specific",
        terms: Object.freeze(["line joining knot"]),
        knotIds: Object.freeze([
            "double-uni-knot",
            "double-surgeons-knot"
        ])
    }),
    Object.freeze({
        id: "specific-leader-knot",
        kind: "specific",
        terms: Object.freeze(["leader knot"]),
        knotIds: Object.freeze([
            "double-surgeons-knot",
            "alberto-knot"
        ])
    }),
    Object.freeze({
        id: "specific-double-surgeons",
        kind: "specific",
        terms: Object.freeze(["surgeons knot"]),
        knotIds: Object.freeze(["double-surgeons-knot"])
    }),
    Object.freeze({
        id: "specific-non-slip-loop",
        kind: "specific",
        terms: Object.freeze([
            "lure loop",
            "free moving lure",
            "non slip loop",
            "kreh loop",
            "terminal loop"
        ]),
        knotIds: Object.freeze(["non-slip-loop-knot"])
    }),
    Object.freeze({
        id: "specific-dropper-loop",
        kind: "specific",
        terms: Object.freeze([
            "dropper loop",
            "branch loop",
            "two hook rig",
            "two jig rig",
            "multi hook rig",
            "bottom rig loop"
        ]),
        knotIds: Object.freeze(["dropper-loop-knot"])
    }),
    Object.freeze({
        id: "specific-snell",
        kind: "specific",
        terms: Object.freeze([
            "snell hook",
            "snelled hook",
            "tie hook shank",
            "circle hook knot",
            "flipping hook knot"
        ]),
        knotIds: Object.freeze(["snell-knot"])
    }),
    Object.freeze({
        id: "specific-alberto",
        kind: "specific",
        terms: Object.freeze([
            "alberto knot",
            "crazy alberto",
            "braid to mono",
            "connect different diameter lines"
        ]),
        knotIds: Object.freeze(["alberto-knot"])
    }),
    Object.freeze({
        id: "practical-attach-line-to-reel",
        kind: "practical",
        terms: Object.freeze([
            "attach line to reel",
            "tie line to reel",
            "tie line to spool",
            "spool fishing line",
            "spool line",
            "reel spool",
            "backing to reel",
            "attach backing to reel"
        ]),
        knotIds: Object.freeze([
            "arbor-knot",
            "uni-knot"
        ])
    }),
    Object.freeze({
        id: "practical-terminal-attachment",
        kind: "practical",
        terms: Object.freeze([
            "tie on hook swivel or lure",
            "tie hook",
            "tie on hook",
            "hook knot",
            "tie lure",
            "tie on lure",
            "lure knot",
            "tie swivel",
            "tie clip",
            "terminal attachment"
        ]),
        knotIds: Object.freeze([
            "improved-clinch-knot",
            "palomar-knot",
            "uni-knot",
            "snell-knot"
        ])
    }),
    Object.freeze({
        id: "practical-line-to-line",
        kind: "practical",
        terms: Object.freeze([
            "connect two lines add leader",
            "connect two lines",
            "join two lines",
            "join lines",
            "line to line",
            "add leader",
            "tie leader",
            "leader connection"
        ]),
        knotIds: Object.freeze([
            "double-uni-knot",
            "double-surgeons-knot",
            "alberto-knot"
        ])
    }),
    Object.freeze({
        id: "practical-loop-connection",
        kind: "practical",
        terms: Object.freeze([
            "make loop connection",
            "make a loop",
            "loop connection",
            "tie loop",
            "loop knot"
        ]),
        knotIds: Object.freeze([
            "non-slip-loop-knot",
            "dropper-loop-knot"
        ])
    })
]);

console.info(
    `[Loaded] ${KNOT_GUIDANCE_BUILD_INFO.file} | ` +
    `${KNOT_GUIDANCE_BUILD_INFO.milestone} | ` +
    `${CORE_KNOT_IDS.length} Core | ` +
    `${KNOT_TASK_DEFINITIONS.length} practical tasks | ` +
    `${KNOT_LANDING_TASK_DEFINITIONS.length} landing tasks | ` +
    `${KNOT_SEARCH_INTENTS.length} Search intents`
);
