# Freshwater Fishing Companion — Knot Canonical Content Lock

**Document Status:** Approved  
**Implementation Status:** Validated  
**Milestone:** Knots  
**Original Lock:** Production Package 1  
**Reconciled Through:** Production Package 4  
**Updated:** 2026-08-14

# Purpose

This document is the canonical content-lock record for all 10 approved Version 1 canonical Knots.

Research provenance is maintained separately in `docs/KNOT_REFERENCE_SOURCES.md`.

Production Package 1 established the initial locked records in `data/knots.js` using Version 0.5.0 metadata. Production Package 4 later reopened only two instructional decisions and re-locked them after user approval and runtime validation:

- Dropper Loop wrap count changed from five wraps to **about six wraps** to match the selected Animated Knots instructional method while remaining inside the independently supported technical range.
- Snell changed from the earlier Easy Snell selection to the approved **traditional loop-wrapped seven-to-eight-wrap Snell**.

All other canonical Version 1 records remain unchanged from the Production Package 1 lock.

# Lock Standard

A Knot is ready for content lock only when:

- at least two independent credible technical sources have been reconciled,
- material-specific and specialized-use claims have been checked,
- conflicting or alternative tying methods have been resolved rather than hybridized,
- the tying sequence is original Freshwater Fishing Companion editorial synthesis,
- `commonMistakes[]` represents concrete failure modes,
- `finalChecks[]` represents observable characteristics of the completed connection,
- user-facing `referenceLinks[]` point to credible supporting material.

# Library Status

| Knot | Research | Canonical Content |
|---|---|---|
| Arbor Knot | Complete | Locked |
| Improved Clinch Knot | Complete | Locked |
| Palomar Knot | Complete | Locked |
| Double Uni Knot | Complete | Locked |
| Uni Knot | Complete | Locked |
| Double Surgeon’s Knot | Complete | Locked |
| Non-Slip Loop Knot | Complete | Locked |
| Dropper Loop Knot | Complete / Package 4 reconciled | Locked |
| Snell Knot | Complete / Package 4 variant reconciled | Locked |
| Alberto Knot | Complete | Locked |

# Locked Canonical Records

## Arbor Knot

**Canonical ID:** `arbor-knot`  
**Difficulty:** Beginner  
**Status:** Locked

```js
{
    "id": "arbor-knot",
    "name": "Arbor Knot",
    "summary": "A simple two-overhand-knot connection used to secure fishing line or backing to a reel spool before spooling.",
    "createdVersion": "0.5.0",
    "lastModifiedVersion": "0.5.0",
    "isActive": true,
    "difficulty": "Beginner",
    "connectionTypes": [
        "reel-spool-attachment"
    ],
    "compatibleLineTypes": [
        "monofilament",
        "fluorocarbon"
    ],
    "aliases": [],
    "keywords": [
        "attach line to reel",
        "tie line to spool",
        "reel spool",
        "spool fishing line",
        "backing to reel"
    ],
    "bestFor": [
        "Securing monofilament or fluorocarbon to a reel spool before filling the reel.",
        "Securing suitable backing material to a reel spool before adding the main line."
    ],
    "limitations": [
        "Do not assume the knot will prevent braid from slipping on a smooth spool. For braid, follow the reel manufacturer's spool guidance or use an appropriate backing system when needed."
    ],
    "tyingSteps": [
        "Run the tag end around the reel spool arbor and bring it back alongside the standing line.",
        "Use the tag end to tie an overhand knot around the standing line, leaving the knot loose enough to slide.",
        "Tie a second overhand knot in the end of the tag end and tighten this stopper knot.",
        "Pull the standing line so the first overhand knot slides down against the arbor and the stopper knot seats against it, then snug the connection and trim the excess tag end."
    ],
    "commonMistakes": [
        "Leaving out the second overhand stopper knot, which removes the stop that keeps the sliding knot from pulling off the tag end.",
        "Failing to seat the first overhand knot snugly against the spool arbor before beginning to wind line.",
        "Tying braid directly to a smooth spool without confirming that the spool provides enough grip or following the reel manufacturer's braid instructions."
    ],
    "finalChecks": [
        "The first overhand knot is snug against the reel spool arbor.",
        "The second overhand stopper knot is seated firmly against the first knot.",
        "A light pull on the standing line does not let the connection freely rotate or slip around the spool arbor."
    ],
    "referenceLinks": [
        {
            "label": "Texas Parks & Wildlife — Arbor Knot",
            "url": "https://tpwd.texas.gov/publications/pwdpubs/media/pwd_bk_k0700_0639_knots.pdf"
        },
        {
            "label": "Take Me Fishing — How to Tie an Arbor Knot",
            "url": "https://www.takemefishing.org/how-to-fish/how-tie-fishing-knots/how-to-tie-an-arbor-knot/"
        }
    ]
}
```

## Improved Clinch Knot

**Canonical ID:** `improved-clinch-knot`  
**Difficulty:** Beginner  
**Status:** Locked

```js
{
    "id": "improved-clinch-knot",
    "name": "Improved Clinch Knot",
    "summary": "A compact snug terminal knot for attaching monofilament or fluorocarbon line to hooks, swivels, clips, and many lures.",
    "createdVersion": "0.5.0",
    "lastModifiedVersion": "0.5.0",
    "isActive": true,
    "difficulty": "Beginner",
    "connectionTypes": [
        "terminal-attachment"
    ],
    "compatibleLineTypes": [
        "monofilament",
        "fluorocarbon"
    ],
    "aliases": [],
    "keywords": [
        "tie hook",
        "tie lure",
        "tie swivel",
        "terminal knot",
        "clinch knot"
    ],
    "bestFor": [
        "A general-purpose snug connection for monofilament or fluorocarbon line to hooks, swivels, clips, and many lures.",
        "Beginner setups where a compact knot seated directly against the terminal eye is appropriate."
    ],
    "limitations": [
        "The standard single-line Improved Clinch is not the preferred generic braid connection in Version 1; braid may require a doubled-line modification or a different knot such as the Palomar.",
        "Because the knot seats directly against the eye, it does not provide the free-moving terminal loop of a Non-Slip Loop Knot."
    ],
    "tyingSteps": [
        "Pass the tag end through the eye of the hook, lure, swivel, or clip.",
        "Wrap the tag end around the standing line five to six times.",
        "Pass the tag end through the small loop closest to the terminal eye.",
        "Pass the tag end through the larger loop that was just created beside the wraps.",
        "Moisten the knot, then pull steadily so the coils draw together and seat against the terminal eye; trim the excess tag end."
    ],
    "commonMistakes": [
        "Skipping the second pass through the larger loop, which changes the Improved Clinch into a different knot.",
        "Allowing the coils to cross or overlap instead of forming an orderly wrap column.",
        "Pulling the knot tight dry or with a sudden jerk instead of moistening it and seating the coils steadily."
    ],
    "finalChecks": [
        "Five to six coils sit neatly beside one another without obvious crossing.",
        "The tag end passes through both the small loop near the eye and the larger loop beside the wraps.",
        "The knot is fully seated against the terminal eye and holds under a firm test pull."
    ],
    "referenceLinks": [
        {
            "label": "Utah Division of Wildlife Resources — Improved Clinch Knot",
            "url": "https://wildlife.utah.gov/blog/2025/02/21/learn-to-fish-by-tying-knots"
        },
        {
            "label": "Iowa DNR — Knots Every Angler Should Know",
            "url": "https://www.iowadnr.gov/news-release/2015-02-25/knots-every-angler-should-know"
        }
    ]
}
```

## Palomar Knot

**Canonical ID:** `palomar-knot`  
**Difficulty:** Beginner  
**Status:** Locked

```js
{
    "id": "palomar-knot",
    "name": "Palomar Knot",
    "summary": "A simple doubled-line terminal knot that works well with monofilament, fluorocarbon, and braid.",
    "createdVersion": "0.5.0",
    "lastModifiedVersion": "0.5.0",
    "isActive": true,
    "difficulty": "Beginner",
    "connectionTypes": [
        "terminal-attachment"
    ],
    "compatibleLineTypes": [
        "monofilament",
        "fluorocarbon",
        "braid"
    ],
    "aliases": [],
    "keywords": [
        "tie hook",
        "tie lure",
        "tie swivel",
        "braid knot",
        "drop shot knot",
        "terminal knot"
    ],
    "bestFor": [
        "A simple terminal connection that works across monofilament, fluorocarbon, and braided line.",
        "Braid-capable freshwater setups where a compact doubled-line connection is useful.",
        "Drop-shot and other applications where leaving a longer tag end after tying is useful."
    ],
    "limitations": [
        "The entire hook, lure, or swivel must pass through the large doubled loop, which can be awkward with bulky terminal tackle.",
        "The doubled strands must remain uncrossed while the knot is formed and tightened."
    ],
    "tyingSteps": [
        "Double the end of the line and pass the doubled section through the terminal eye.",
        "Tie a loose overhand knot with the doubled line, leaving a large loop.",
        "Pass the entire hook, lure, or swivel through the large doubled loop.",
        "Make sure the doubled strands are not crossed, then moisten the knot.",
        "Pull the standing line and tag-side strands steadily to seat the knot against the terminal eye, then trim the excess tag end."
    ],
    "commonMistakes": [
        "Crossing the doubled strands near the eye or inside the knot instead of keeping them parallel.",
        "Making the large loop too small to pass the entire terminal item through cleanly.",
        "Tightening the knot dry, which increases friction while the doubled strands are seating."
    ],
    "finalChecks": [
        "The doubled strands lie parallel rather than crossed at the terminal eye.",
        "The terminal item is completely outside the doubled loop and the knot is compactly seated against the eye.",
        "A firm test pull does not cause the knot to shift or slip."
    ],
    "referenceLinks": [
        {
            "label": "Utah Division of Wildlife Resources — Palomar Knot",
            "url": "https://wildlife.utah.gov/blog/2025/02/21/learn-to-fish-by-tying-knots"
        },
        {
            "label": "Alaska Department of Fish and Game — Common Fishing Knots",
            "url": "https://www.adfg.alaska.gov/index.cfm?ID=51&adfg=FishingSportFishAK.reelTimes"
        }
    ]
}
```

## Double Uni Knot

**Canonical ID:** `double-uni-knot`  
**Difficulty:** Beginner  
**Status:** Locked

```js
{
    "id": "double-uni-knot",
    "name": "Double Uni Knot",
    "summary": "Two opposing Uni knots that slide together to join main line, leader, or backing across common fishing-line materials.",
    "createdVersion": "0.5.0",
    "lastModifiedVersion": "0.5.0",
    "isActive": true,
    "difficulty": "Beginner",
    "connectionTypes": [
        "line-to-line"
    ],
    "compatibleLineTypes": [
        "monofilament",
        "fluorocarbon",
        "braid"
    ],
    "aliases": [
        "Uni-to-Uni Knot"
    ],
    "keywords": [
        "connect two lines",
        "add a leader",
        "braid to leader",
        "braid to fluorocarbon",
        "backing to braid",
        "line joining knot",
        "uni to uni"
    ],
    "bestFor": [
        "Joining lines of similar or moderately different diameters.",
        "Connecting braided main line to monofilament or fluorocarbon leader.",
        "Connecting backing, main line, or leader when a straightforward beginner line-to-line knot is preferred."
    ],
    "limitations": [
        "The connection is less suitable when the two lines differ dramatically in diameter; a more specialized connection such as the Alberto may be preferable in that situation.",
        "Braided line needs more wraps than ordinary monofilament or fluorocarbon in the approved Version 1 method."
    ],
    "tyingSteps": [
        "Overlap the two lines by several inches so there is enough tag length to form a knot on each side.",
        "With the first tag end, form a Uni-knot loop around both lines and make five wraps through the loop; use eight wraps when this first line is braid, then snug the knot without fully tightening it.",
        "Repeat the same process with the second tag end on the opposite side, again using eight wraps if that line is braid.",
        "Moisten both knot bodies.",
        "Pull the two standing lines in opposite directions until the two Uni knots slide together and seat firmly against each other, then trim both tag ends."
    ],
    "commonMistakes": [
        "Using too few wraps on the braided side of a braid-to-leader connection.",
        "Fully cinching each Uni knot in place before the two knot bodies have been allowed to slide together.",
        "Letting wraps cross or bunch unevenly instead of forming orderly coils around both lines."
    ],
    "finalChecks": [
        "The two opposing knot bodies meet directly with no open gap between them.",
        "Each side has a compact, orderly wrap column and neither tag end slips when the standing lines are pulled.",
        "A firm pull on the two standing lines seats the connection more tightly without either knot moving away from the other."
    ],
    "referenceLinks": [
        {
            "label": "Take Me Fishing — Double Uni Knot",
            "url": "https://www.takemefishing.org/how-to-fish/how-tie-fishing-knots/how-to-tie-a-double-uni-knot/"
        },
        {
            "label": "Alaska Department of Fish and Game — Common Fishing Knots",
            "url": "https://www.adfg.alaska.gov/index.cfm?ID=51&adfg=FishingSportFishAK.reelTimes"
        }
    ]
}
```

## Uni Knot

**Canonical ID:** `uni-knot`  
**Difficulty:** Beginner  
**Status:** Locked

```js
{
    "id": "uni-knot",
    "name": "Uni Knot",
    "summary": "A versatile sliding knot used for terminal attachments and, with suitable spool guidance, reel-spool attachment.",
    "createdVersion": "0.5.0",
    "lastModifiedVersion": "0.5.0",
    "isActive": true,
    "difficulty": "Beginner",
    "connectionTypes": [
        "terminal-attachment",
        "reel-spool-attachment"
    ],
    "compatibleLineTypes": [
        "monofilament",
        "fluorocarbon",
        "braid"
    ],
    "aliases": [
        "Duncan Knot"
    ],
    "keywords": [
        "tie hook",
        "tie lure",
        "tie swivel",
        "attach line to reel",
        "tie line to spool",
        "duncan knot",
        "terminal knot"
    ],
    "bestFor": [
        "A versatile terminal connection for hooks, lures, and swivels.",
        "A reel-spool attachment option when the selected line and spool design provide an appropriate grip.",
        "Anglers who want one basic knot pattern that also forms the building block of the Double Uni."
    ],
    "limitations": [
        "Direct braid-to-smooth-spool attachment remains equipment-specific; use reel-manufacturer guidance or backing when the spool does not provide secure braid grip.",
        "For joining two separate lines, use the Double Uni form rather than treating a single Uni knot as the complete line-to-line connection."
    ],
    "tyingSteps": [
        "Pass the tag end through the terminal eye, or around the reel spool arbor for spool attachment, and bring it back parallel to the standing line.",
        "Lay the tag end over the doubled section to form a loop.",
        "Wrap the tag end around the doubled line and through the loop five to six times.",
        "Moisten the knot and pull the tag end to draw the wraps together into the Uni knot body.",
        "Pull the standing line to slide and seat the knot at the attachment point, then trim the excess tag end."
    ],
    "commonMistakes": [
        "Forming the initial loop incorrectly so the tag end cannot wrap cleanly around the doubled section.",
        "Using loose or crossed wraps instead of five to six orderly turns.",
        "Failing to seat the sliding knot fully at the attachment point before trimming or using the setup."
    ],
    "finalChecks": [
        "The wraps form a compact, orderly knot body rather than crossing over one another.",
        "The knot slides into the intended attachment point and then seats firmly.",
        "A firm pull on the standing line does not allow the seated knot to loosen or slip."
    ],
    "referenceLinks": [
        {
            "label": "Utah Division of Wildlife Resources — Uni Knot",
            "url": "https://wildlife.utah.gov/blog/2025/02/21/learn-to-fish-by-tying-knots"
        },
        {
            "label": "Take Me Fishing — Uni Knot",
            "url": "https://www.takemefishing.org/how-to-fish/how-tie-fishing-knots/uni-knot/"
        }
    ]
}
```

## Double Surgeon’s Knot

**Canonical ID:** `double-surgeons-knot`  
**Difficulty:** Beginner  
**Status:** Locked

```js
{
    "id": "double-surgeons-knot",
    "name": "Double Surgeon’s Knot",
    "summary": "A simple two-pass overhand line-to-line knot for joining monofilament or fluorocarbon sections of equal or unequal diameter.",
    "createdVersion": "0.5.0",
    "lastModifiedVersion": "0.5.0",
    "isActive": true,
    "difficulty": "Beginner",
    "connectionTypes": [
        "line-to-line"
    ],
    "compatibleLineTypes": [
        "monofilament",
        "fluorocarbon"
    ],
    "aliases": [
        "Surgeon's Knot"
    ],
    "keywords": [
        "connect two lines",
        "add a leader",
        "leader knot",
        "surgeons knot",
        "surgeon's knot",
        "line joining knot"
    ],
    "bestFor": [
        "A quick beginner line-to-line connection using monofilament or fluorocarbon.",
        "Joining leader or tippet sections of similar or different diameters when enough free line is available to pass through the loop twice."
    ],
    "limitations": [
        "One side of the connection must have enough free length to pass through the formed loop twice.",
        "The finished connection is bulkier and less clean than some more complex line-to-line knots.",
        "Version 1 does not treat this as the preferred braid-focused connection; Double Uni or Alberto provides clearer braid-specific guidance."
    ],
    "tyingSteps": [
        "Lay the two lines parallel and overlap them by several inches.",
        "Using both strands together, form a single overhand loop in the overlapped section.",
        "Pass the long end of one line and the tag end of the other through the same loop a second time so both strands make two complete passes.",
        "Moisten the knot and pull all four line ends evenly until the knot seats firmly, then trim the two tag ends."
    ],
    "commonMistakes": [
        "Making only one pass through the overhand loop instead of the two passes that define the Double Surgeon’s Knot.",
        "Starting with too little overlap to pull all four ends securely while the knot is tightened.",
        "Pulling only one or two strands during tightening instead of seating all four strands evenly."
    ],
    "finalChecks": [
        "Both joined strands make two complete passes through the overhand loop.",
        "All four strands are snug and the knot body is compact rather than partly open.",
        "A firm pull on the two standing lines does not cause either joined line to creep through the knot."
    ],
    "referenceLinks": [
        {
            "label": "Take Me Fishing — Double Surgeon’s Knot",
            "url": "https://www.takemefishing.org/how-to-fish/how-tie-fishing-knots/double-surgeons-knot/"
        },
        {
            "label": "Orvis — Surgeon’s Knot",
            "url": "https://howtoflyfish.orvis.com/fly-fishing-knots/surgeon-s-knot-video"
        }
    ]
}
```

## Non-Slip Loop Knot

**Canonical ID:** `non-slip-loop-knot`  
**Difficulty:** Intermediate  
**Status:** Locked

```js
{
    "id": "non-slip-loop-knot",
    "name": "Non-Slip Loop Knot",
    "summary": "A fixed terminal loop knot that lets a lure, jig, or fly move more freely than a snug knot seated directly against the eye.",
    "createdVersion": "0.5.0",
    "lastModifiedVersion": "0.5.0",
    "isActive": true,
    "difficulty": "Intermediate",
    "connectionTypes": [
        "terminal-loop"
    ],
    "compatibleLineTypes": [
        "monofilament",
        "fluorocarbon"
    ],
    "aliases": [
        "Non-Slip Mono Loop",
        "Kreh End Loop Knot"
    ],
    "keywords": [
        "loop knot",
        "lure loop",
        "free moving lure",
        "non slip loop",
        "kreh loop",
        "terminal loop"
    ],
    "bestFor": [
        "Lures, jigs, and flies that benefit from a fixed open loop at the terminal eye.",
        "Presentations where a snug terminal knot would unnecessarily restrict lure or bait movement."
    ],
    "limitations": [
        "A lure that already uses a split ring often does not need an additional free-moving loop connection.",
        "The correct wrap count varies with unusually light or heavy leader material; the Version 1 five-wrap method targets common freshwater line sizes.",
        "Version 1 supports monofilament and fluorocarbon rather than braid for this canonical terminal-loop method."
    ],
    "tyingSteps": [
        "Tie a loose overhand knot in the line, leaving enough tag end to complete the connection, then pass the tag end through the terminal eye.",
        "Bring the tag end back through the original overhand knot in the correct routing direction and set the desired terminal-loop size.",
        "Wrap the tag end around the standing line five times.",
        "Pass the tag end back through the original overhand knot using the same routing orientation established by the earlier passes.",
        "Moisten the knot and pull the tag end and standing line in opposite directions to seat the knot while keeping the terminal loop open, then trim the excess tag end."
    ],
    "commonMistakes": [
        "Routing the tag end through the original overhand knot from the wrong side, which changes the intended knot geometry.",
        "Allowing the wraps to cross or bunch instead of forming an orderly series around the standing line.",
        "Pulling the knot in a way that collapses the intended terminal loop instead of leaving a fixed open loop."
    ],
    "finalChecks": [
        "A fixed loop remains visibly open between the knot and terminal eye.",
        "The wraps are compact and the repeated passes through the original overhand knot follow the same intended routing.",
        "The loop does not slide closed when the standing line and terminal item are pulled firmly apart."
    ],
    "referenceLinks": [
        {
            "label": "Orvis — Non-Slip Mono Loop",
            "url": "https://howtoflyfish.orvis.com/fly-fishing-knots/non-slip-mono-loop?lang=en"
        },
        {
            "label": "University of Missouri Extension — Angling Skills",
            "url": "https://extension.missouri.edu/media/wysiwyg/Extensiondata/Pro/4h/Docs/Projects/OutdoorsNature/Sportfishing/supplemental-angling-skills.pdf"
        }
    ]
}
```

## Dropper Loop Knot

**Canonical ID:** `dropper-loop-knot`  
**Difficulty:** Intermediate  
**Status:** Locked / Package 4 Reconciled

```js
{
    "id": "dropper-loop-knot",
    "name": "Dropper Loop Knot",
    "summary": "An in-line branch loop formed in a leader so a hook, jig, fly, or other terminal item can be attached away from the main line.",
    "createdVersion": "0.5.0",
    "lastModifiedVersion": "0.5.0",
    "isActive": true,
    "difficulty": "Intermediate",
    "connectionTypes": [
        "dropper-loop"
    ],
    "compatibleLineTypes": [
        "monofilament"
    ],
    "aliases": [],
    "keywords": [
        "dropper loop",
        "branch loop",
        "two hook rig",
        "two jig rig",
        "multi hook rig",
        "bottom rig loop"
    ],
    "bestFor": [
        "Creating a branch loop in monofilament leader for multi-hook, multi-jig, or bottom-fishing rigs.",
        "Building an in-line attachment point that stands away from the main leader."
    ],
    "limitations": [
        "This is a branch loop formed in the middle of a line or leader, not a free-moving terminal loop for tying a lure directly to the end of the line.",
        "Version 1 limits generic compatibility to monofilament because the strongest official application evidence is for monofilament leader systems."
    ],
    "tyingSteps": [
        "Form a fairly large loop in the line at the location where the branch is needed.",
        "Wind one side of the loop around the other about six times while keeping the central opening and the original branch loop accessible.",
        "Push the bottom of the original branch loop through the central opening created by the wraps.",
        "Moisten the knot and pull the two standing-line sections in opposite directions while keeping the branch loop open until the coils seat firmly."
    ],
    "commonMistakes": [
        "Letting the central opening close before the original branch loop is passed through it.",
        "Pulling the wrong section through the central opening so a clean branch loop is not formed.",
        "Allowing the wraps to cross or tightening only one standing-line side instead of seating the coils evenly."
    ],
    "finalChecks": [
        "A distinct branch loop projects cleanly from the center of the knot.",
        "The coils are compact and the standing line exits the knot in a straight path on both sides.",
        "The branch loop remains open and the knot does not distort under a firm test pull."
    ],
    "referenceLinks": [
        {
            "label": "Animated Knots — Dropper Loop Knot",
            "url": "https://www.animatedknots.com/dropper-loop-knot"
        },
        {
            "label": "Take Me Fishing — Dropper Loop Knot",
            "url": "https://www.takemefishing.org/how-to-fish/how-tie-fishing-knots/how-to-tie-dropper-loop-knot/"
        }
    ]
}
```

## Snell Knot

**Canonical ID:** `snell-knot`  
**Difficulty:** Intermediate  
**Status:** Locked / Package 4 Reconciled

```js
{
    "id": "snell-knot",
    "name": "Snell Knot",
    "summary": "A hook-specific terminal connection that secures the line in tight coils around the hook shank for a direct in-line pull.",
    "createdVersion": "0.5.0",
    "lastModifiedVersion": "0.5.0",
    "isActive": true,
    "difficulty": "Intermediate",
    "connectionTypes": [
        "terminal-attachment"
    ],
    "compatibleLineTypes": [
        "monofilament",
        "fluorocarbon",
        "braid"
    ],
    "aliases": [],
    "keywords": [
        "snell hook",
        "snelled hook",
        "tie hook shank",
        "circle hook knot",
        "flipping hook knot",
        "hook knot"
    ],
    "bestFor": [
        "Hooks and presentations designed to benefit from a line connection aligned with the hook shank.",
        "Circle, octopus, flipping, tandem-hook, and other hook-specific applications where a snelled connection is appropriate."
    ],
    "limitations": [
        "The Snell is a hook-specific connection rather than a general knot for attaching swivels or lures.",
        "Several legitimate Snell variants exist. Version 1 intentionally teaches the traditional loop-wrapped Snell method and does not combine it with other Snell geometries.",
        "The Version 1 method assumes an eyed hook; hook-eye orientation and hook design should be appropriate for the intended snelled presentation."
    ],
    "tyingSteps": [
        "Pass the leader through the hook eye, then pass it through the eye a second time in the same direction, leaving a large loop beside the hook.",
        "Hold the hook eye and the two line sections together so the large loop remains controlled beside the hook shank.",
        "Wrap the large loop around the hook shank and the doubled line seven to eight times, keeping the coils orderly and adjacent.",
        "Hold the wraps in place and pull the standing line to shrink the remaining loop beneath the coils.",
        "Moisten the connection and pull the standing line and tag end steadily so the coils tighten evenly around the hook shank.",
        "Seat the Snell firmly, confirm the coils remain aligned with the hook shank, then trim the excess tag end."
    ],
    "commonMistakes": [
        "Passing the leader through the hook eye in opposite directions instead of making both eye passes in the same direction.",
        "Letting the seven to eight loop wraps overlap or spread apart instead of forming compact ordered coils around the shank.",
        "Releasing the wraps while collapsing the remaining loop, which can let the coils cross or loosen before the knot is seated."
    ],
    "finalChecks": [
        "Seven to eight orderly coils are seated tightly around the hook shank.",
        "The remaining loop has collapsed beneath the coils and no loose loop remains beside the shank.",
        "The standing line leaves the hook eye in line with the shank, and a firm test pull tightens the connection without shifting the coils."
    ],
    "referenceLinks": [
        {
            "label": "Animated Knots — Snell Knot",
            "url": "https://www.animatedknots.com/snell-knot"
        },
        {
            "label": "Mustad — How to Snell a Hook",
            "url": "https://mustad-fishing.com/us/article/how-to-snell-a-hook"
        }
    ]
}
```

## Alberto Knot

**Canonical ID:** `alberto-knot`  
**Difficulty:** Intermediate  
**Status:** Locked

```js
{
    "id": "alberto-knot",
    "name": "Alberto Knot",
    "summary": "A compact braid-to-leader connection that wraps braid around a folded monofilament or fluorocarbon leader loop.",
    "createdVersion": "0.5.0",
    "lastModifiedVersion": "0.5.0",
    "isActive": true,
    "difficulty": "Intermediate",
    "connectionTypes": [
        "line-to-line"
    ],
    "compatibleLineTypes": [
        "monofilament",
        "fluorocarbon",
        "braid"
    ],
    "aliases": [
        "Crazy Alberto Knot"
    ],
    "keywords": [
        "alberto knot",
        "crazy alberto",
        "braid to leader",
        "braid to fluorocarbon",
        "braid to mono",
        "connect different diameter lines",
        "leader knot"
    ],
    "bestFor": [
        "Connecting braided main line to a monofilament or fluorocarbon leader.",
        "Braid-to-leader connections where the line materials or diameters differ enough that a more specialized knot is useful."
    ],
    "limitations": [
        "The Alberto is specialized for braid-to-monofilament or braid-to-fluorocarbon leader connections rather than being a general-purpose same-material splice.",
        "It requires more careful wrap organization and tag-end routing than the Double Uni.",
        "The braid tag must leave the leader loop in the same direction it entered; incorrect exit routing changes the knot geometry."
    ],
    "tyingSteps": [
        "Fold the end of the monofilament or fluorocarbon leader to form a loop, then pass the braid tag end through that loop.",
        "Wrap the braid tag end seven times up around the doubled leader.",
        "Wrap the braid tag end seven times back down over the doubled leader toward the loop.",
        "Pass the braid tag end back through the leader loop in the same direction that it entered.",
        "Moisten the connection and pull on all four line sections to organize and tighten the wrap column.",
        "Pull firmly on the main braid and leader to seat the knot completely, then trim both tag ends."
    ],
    "commonMistakes": [
        "Passing the braid tag back through the leader loop in the opposite direction from its original entry.",
        "Allowing the return wraps to cross, loosen, or spread unevenly instead of forming a compact up-and-back wrap column.",
        "Pulling only the standing lines before the wrap column has been organized and tightened with all four line sections."
    ],
    "finalChecks": [
        "The braid forms a compact seven-wrap-up and seven-wrap-down column around the doubled leader.",
        "The braid tag exits the leader loop in the same direction it originally entered.",
        "The wraps remain orderly and the connection does not creep when the main braid and leader are pulled firmly apart."
    ],
    "referenceLinks": [
        {
            "label": "Take Me Fishing — Alberto Fishing Knot",
            "url": "https://www.takemefishing.org/how-to-fish/how-tie-fishing-knots/alberto-fishing-knot/"
        },
        {
            "label": "Seaguar — Tying the Crazy Alberto Knot",
            "url": "https://seaguar.com/blogs/knot-guide/tying-the-crazy-alberto-knot"
        }
    ]
}
```

# Cross-Library Content Decisions

## Line compatibility

- **Arbor Knot:** monofilament + fluorocarbon. Braid is intentionally omitted as generic compatibility because direct braid-to-spool security depends on spool design or backing.
- **Improved Clinch Knot:** monofilament + fluorocarbon. Some credible sources describe braid use, but other authoritative guidance identifies mono/fluoro as the standard use and braid may require a doubled-line modification. The V1 canonical record therefore stays conservative.
- **Palomar Knot:** monofilament + fluorocarbon + braid.
- **Double Uni Knot:** monofilament + fluorocarbon + braid.
- **Uni Knot:** monofilament + fluorocarbon + braid, with reel-spool braid caveated as equipment-specific.
- **Double Surgeon’s Knot:** monofilament + fluorocarbon. Braid-focused line joining is directed to Double Uni or Alberto in V1.
- **Non-Slip Loop Knot:** monofilament + fluorocarbon.
- **Dropper Loop Knot:** monofilament only for the generic V1 record because the strongest official rigging evidence is monofilament leader use.
- **Snell Knot:** monofilament + fluorocarbon + braid.
- **Alberto Knot:** monofilament + fluorocarbon + braid because its canonical job is specifically braid joined to mono/fluoro leader; the array identifies supported materials rather than every possible material pairing.

## Variation locks

- **Double Uni:** credible sources vary between four and five ordinary wraps while agreeing on additional wraps for braid. V1 standardizes on five ordinary wraps and eight for braid as a clear beginner method within the verified range.
- **Non-Slip Loop:** wrap count changes with line diameter. V1 uses five wraps for common freshwater leader sizes and explicitly notes that unusually light/heavy material may require adjustment.
- **Dropper Loop:** credible sources support a small wrap-count range. Package 4 standardizes on **about six wraps** to match the approved Animated Knots visual method while remaining inside the independently supported range.
- **Snell:** multiple legitimate Snell methods exist. Package 4 supersedes the earlier Easy Snell selection and locks the **traditional loop-wrapped Snell** with two same-direction eye passes, seven to eight loop wraps around the shank/doubled line, and standing-line collapse of the remaining loop beneath the coils.
- **Alberto:** V1 uses seven wraps up and seven back down, with the braid tag exiting the leader loop in the same direction it entered.

## Deployment metadata

Production Package 1 assigned `createdVersion` and `lastModifiedVersion` as `0.5.0` for all 10 initial canonical Knot records. Package 4 did not change the existing version metadata fields in `data/knots.js`; the later method corrections are documented through Package 4 workstream records and Git history.

# Lock Effect

All 10 canonical Knot content records are locked for Version 1.

Production Package 4 re-locked the Dropper Loop and Snell records after explicit user approval, production-source reconciliation, GitHub verification, and runtime validation of the external instructional-media presentation.

Canonical text remains authoritative. Approved external media must match the locked method; a legitimate alternate variant is not used as the instructional destination when it conflicts with the Version 1 method.

If testing or later technical research exposes a genuine defect, the affected record may be reopened only through an explicit documented correction.
