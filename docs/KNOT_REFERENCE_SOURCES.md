# Freshwater Fishing Companion — Knot Reference Sources

**Document Status:** Research Provenance / Complete for V1 Production Package 1  
**Milestone:** Knots  
**Started:** 2026-08-13  
**Updated:** 2026-08-13

# Purpose

This document preserves technical research provenance for the canonical Version 1 Knot library.

It does not replace production `referenceLinks[]` and does not independently own canonical Knot instructions. Its purpose is to record the evidence used to validate each Knot's tying geometry, accepted applications, line compatibility, limitations, variation decisions, common failure modes, and final-state checks.

Research follows `docs/workstreams/KNOT-RESEARCH-VALIDATION-APPROVAL.md`.

# Research Rules

Every canonical Knot requires at least two independent credible technical sources before production.

- **Source A** anchors the tying method and completed geometry.
- **Source B** independently verifies the same Knot or accepted variation and its practical use.
- Additional claim-specific sources are required when line compatibility, specialized applications, limitations, equipment-specific behavior, or variations are not adequately established by the base two sources.
- Conflicting methods are not merged into a hybrid.
- Canonical Companion wording is original editorial synthesis rather than copied source prose.

# Version 1 Research Status

| Knot | Research Status | Canonical Content Status |
|---|---|---|
| Arbor Knot | Source validation complete | Locked |
| Improved Clinch Knot | Source validation complete | Locked |
| Palomar Knot | Source validation complete | Locked |
| Double Uni Knot | Source validation complete | Locked |
| Uni Knot | Source validation complete | Locked |
| Double Surgeon’s Knot | Source validation complete | Locked |
| Non-Slip Loop Knot | Source validation complete | Locked |
| Dropper Loop Knot | Source validation complete | Locked |
| Snell Knot | Source validation complete | Locked |
| Alberto Knot | Source validation complete | Locked |

# Arbor Knot

**Canonical ID:** `arbor-knot`  
**Research Status:** Source validation complete

## Source A — Primary Technical Reference

**Texas Parks & Wildlife Department — A Basic Guide for the Beginning Angler**  
Source: `https://tpwd.texas.gov/publications/pwdpubs/media/pwd_bk_k0700_0639_knots.pdf`

Validated claims:

- Arbor Knot is a reel-spool attachment.
- Line passes around the spool arbor.
- The first overhand knot is tied around the standing line.
- A second overhand knot in the tag end acts as the stopper.
- Pulling the standing line seats the connection against the spool.

## Source B — Independent Cross-Check

**New York State Department of Environmental Conservation — Knot Tying Lesson Plan**  
Source: `https://extapps.dec.ny.gov/docs/administration_pdf/ifnyknotlp.pdf`

Validated claims:

- Same reel-spool application.
- Same two-overhand-knot topology.
- The first knot slides/seats against the arbor and the tag-end knot stops it.

## Additional Claim-Specific Sources

**Take Me Fishing — How to Tie an Arbor Knot**  
Source: `https://www.takemefishing.org/how-to-fish/how-tie-fishing-knots/how-to-tie-an-arbor-knot/`

**Shimano North America — FAQ**  
Source: `https://fishshop.shimano.com/pages/shimano-faq`

Validated claims:

- Monofilament and fluorocarbon are appropriate generic Arbor materials.
- Backing-to-spool use is appropriate.
- Braid can slip around a smooth reel arbor when the spool does not provide sufficient grip.
- Direct braid attachment must therefore remain reel/spool-specific rather than a universal Arbor recommendation.

## Variation Resolution

Different sources divide the prose into different numbers of steps, but the topology is materially the same: line around arbor → overhand around standing line → stopper overhand in tag → seat against arbor.

## Research Decision

Canonical content may use monofilament and fluorocarbon compatibility. Generic braid compatibility is omitted; Reel & Line Setup will own the equipment-specific braid/backing branch.

# Improved Clinch Knot

**Canonical ID:** `improved-clinch-knot`  
**Research Status:** Source validation complete

## Source A — Primary Technical Reference

**Utah Division of Wildlife Resources — Learn to fish: tying the knot**  
Source: `https://wildlife.utah.gov/blog/2025/02/21/learn-to-fish-by-tying-knots`

Validated claims:

- Terminal attachment for hook, lure, or swivel.
- Five to six wraps around the standing line.
- Tag passes through the loop nearest the eye and then the newly formed larger loop.
- Knot should be moistened before tightening.

## Source B — Independent Cross-Check

**Iowa Department of Natural Resources — Knots Every Angler Should Know**  
Source: `https://www.iowadnr.gov/news-release/2015-02-25/knots-every-angler-should-know`

Validated claims:

- Same terminal-attachment job.
- Same five-to-six-wrap geometry.
- Same small-loop then larger-loop tag routing.
- Coils seat directly against the terminal eye.

## Additional Claim-Specific Sources

**Alaska Department of Fish and Game — Common Fishing Knots**  
Source: `https://www.adfg.alaska.gov/index.cfm?ID=51&adfg=FishingSportFishAK.reelTimes`

**Take Me Fishing — Which Texas Rig Knot Should You Be Tying?**  
Source: `https://www.takemefishing.org/blog/may-2019/which-texas-rig-knot-should-you-be-tying/`

**Berkley — Fishing Knots 101**  
Source: `https://www.berkley-fishing.com/blogs/news/fishing-knots-101`

Material-resolution evidence:

- Alaska identifies the standard Improved Clinch as best used with monofilament or fluorocarbon.
- Utah describes broader all-line use.
- Take Me Fishing specifically notes that braid may require doubling the line when tying the Improved Clinch or using a Palomar instead.
- Berkley separately teaches a braid-specific terminal knot intended to prevent braided-line slippage.

## Variation Resolution

The tying geometry itself is consistent. The only material issue is braid suitability. V1 does not redefine a doubled-line braid modification as the canonical Improved Clinch. To avoid implying that the ordinary single-line method is the preferred generic braid choice, the canonical compatibility list is conservatively limited to monofilament and fluorocarbon.

## Research Decision

Five-to-six wraps is the locked beginner range. The canonical knot is a snug terminal connection, not a terminal loop.

# Palomar Knot

**Canonical ID:** `palomar-knot`  
**Research Status:** Source validation complete

## Source A — Primary Technical Reference

**Utah Division of Wildlife Resources — Learn to fish: tying the knot**  
Source: `https://wildlife.utah.gov/blog/2025/02/21/learn-to-fish-by-tying-knots`

Validated claims:

- Double the line and pass the doubled section through the terminal eye.
- Tie a loose overhand in the doubled line.
- Pass the entire hook/lure/swivel through the large doubled loop.
- Moisten and tighten.
- Especially useful with braid.

## Source B — Independent Cross-Check

**Iowa Department of Natural Resources — Knots Every Angler Should Know**  
Source: `https://www.iowadnr.gov/news-release/2015-02-25/knots-every-angler-should-know`

Validated claims:

- Same doubled-line terminal geometry.
- Same overhand and pass-entire-terminal-through-loop sequence.
- Terminal application to hooks and other tackle.

## Additional Claim-Specific Sources

**Alaska Department of Fish and Game — Common Fishing Knots**  
Source: `https://www.adfg.alaska.gov/index.cfm?ID=51&adfg=FishingSportFishAK.reelTimes`

**Take Me Fishing — Saltwater Knot Tying Techniques**  
Source: `https://www.takemefishing.org/blog/september-2023/5-saltwater-fishing-knot-tying-techniques-for-inshore-anglers/`

Validated claims:

- Palomar is appropriate with monofilament, fluorocarbon, and braid.
- Doubled strands should not be crossed while seating.
- The knot seats as a snug terminal connection.

## Variation Resolution

Sources agree on the material topology. Minor differences in whether the doubled line is pushed through a large enough eye or passed through and doubled back do not create a separate canonical Knot.

## Research Decision

All three approved line materials are supported. The need to pass the entire terminal item through the doubled loop is retained as a practical limitation.

# Double Uni Knot

**Canonical ID:** `double-uni-knot`  
**Research Status:** Source validation complete

## Source A — Primary Technical Reference

**Take Me Fishing — How to Tie a Double Uni Knot**  
Source: `https://www.takemefishing.org/how-to-fish/how-tie-fishing-knots/how-to-tie-a-double-uni-knot/`

Validated claims:

- Two opposing Uni knots join the lines.
- Lines overlap before either knot is formed.
- Braid requires additional wraps.
- Pulling the standing lines slides the two knot bodies together.
- Best performance is with lines that are not dramatically different in diameter.

## Source B — Independent Cross-Check

**Alaska Department of Fish and Game — Common Fishing Knots**  
Source: `https://www.adfg.alaska.gov/index.cfm?ID=51&adfg=FishingSportFishAK.reelTimes`

Validated claims:

- Double Uni connects lines of equal or unequal diameter.
- Supports braided line, monofilament, and fluorocarbon.
- Correct application is line-to-line.

## Additional Claim-Specific Sources

**Take Me Fishing — Fishing Line Joining Knots**  
Source: `https://www.takemefishing.org/how-to-fish/how-tie-fishing-knots/line-joining-knots/`

**Take Me Fishing — Uni-to-Uni Braid to Fluorocarbon**  
Source: `https://www.takemefishing.org/blog/june-2019/braid-to-fluorocarbon-knot-steps-for-tying-the-uni-to-uni/`

Validated claims:

- `Uni-to-Uni Knot` is an accepted alternate name.
- Five ordinary wraps is a supported line-joining method.
- Eight wraps on the braided side is a supported braid-to-leader method.
- Individual Uni knots are snugged first, then slid together rather than fully locked apart.

## Variation Resolution

Credible sources vary between four and five wraps for ordinary mono/fluoro sides while agreeing that braid benefits from more wraps. This is a nonessential wrap-count variation, not a different Knot. V1 standardizes on **five ordinary wraps and eight braid wraps** for a single beginner-facing method.

## Research Decision

All three approved line materials are supported. Dramatic diameter mismatch is retained as a limitation and points toward the Alberto.

# Uni Knot

**Canonical ID:** `uni-knot`  
**Research Status:** Source validation complete

## Source A — Primary Technical Reference

**Utah Division of Wildlife Resources — Learn to fish: tying the knot**  
Source: `https://wildlife.utah.gov/blog/2025/02/21/learn-to-fish-by-tying-knots`

Validated claims:

- Terminal attachment to lure/fly/swivel.
- Tag end forms a loop around doubled line.
- Six wraps is a standard beginner method.
- The formed knot slides down the standing line to the terminal eye.

## Source B — Independent Cross-Check

**Iowa Department of Natural Resources — Knots Every Angler Should Know**  
Source: `https://www.iowadnr.gov/news-release/2015-02-25/knots-every-angler-should-know`

Validated claims:

- Five to six turns.
- Terminal use.
- Reel-arbor use.
- Uni also forms the basis for a line-to-line connection.

## Additional Claim-Specific Source

**Take Me Fishing — Uni Knot**  
Source: `https://www.takemefishing.org/how-to-fish/how-tie-fishing-knots/uni-knot/`

Validated claims:

- `Duncan Knot` is an accepted alternate name.
- Supports monofilament, fluorocarbon, and braid.
- Can attach line to a reel arbor.
- Can attach hooks, lures, or swivels.
- Double Uni is the line-to-line form.

## Variation Resolution

Five and six wraps are both well-supported. V1 uses **five to six wraps** rather than creating a false single-number precision.

## Research Decision

All three line materials are supported generally. Direct braid-to-smooth-spool security remains equipment-specific and is handled as a limitation/Reel Setup decision rather than removing braid from Uni compatibility altogether.

# Double Surgeon’s Knot

**Canonical ID:** `double-surgeons-knot`  
**Research Status:** Source validation complete

## Source A — Primary Technical Reference

**Take Me Fishing — Double Surgeon’s Knot**  
Source: `https://www.takemefishing.org/how-to-fish/how-tie-fishing-knots/double-surgeons-knot/`

Validated claims:

- Lines overlap in parallel.
- Both strands form an overhand loop.
- The line ends pass through the loop twice for the Double Surgeon’s form.
- All four ends are pulled to seat the knot.
- Works with equal or unequal diameter lines.
- `Surgeon's Knot` is a common alternate label for this beginner connection.

## Source B — Independent Cross-Check

**Orvis — Surgeon’s Knot**  
Source: `https://howtoflyfish.orvis.com/fly-fishing-knots/surgeon-s-knot-video`

Validated claims:

- Four-to-six-inch overlap.
- A loop is formed in the overlapped strands.
- Both strands are treated as one and passed through twice.
- All short and long ends are pulled to tighten.
- Useful when line diameters differ; bulkier/less clean than a Blood Knot.

## Additional Claim-Specific Sources

**Alaska Department of Fish and Game — Common Fishing Knots**  
Source: `https://www.adfg.alaska.gov/index.cfm?ID=51&adfg=FishingSportFishAK.reelTimes`

Orvis instructional material also documents Surgeon-family joins involving nylon/monofilament and fluorocarbon tippet.

## Variation Resolution

Single, double, and triple Surgeon-family knots are distinguished by the number of passes. The V1 canonical entity is explicitly the **Double Surgeon’s Knot**, so the method is locked to two complete passes. Later fly-specific triple-surgeon use does not alter this V1 record.

## Research Decision

V1 compatibility is conservatively limited to monofilament and fluorocarbon. Braid-focused beginner joining is directed to Double Uni or Alberto, which have clearer braid-specific evidence and instructions.

# Non-Slip Loop Knot

**Canonical ID:** `non-slip-loop-knot`  
**Research Status:** Source validation complete

## Source A — Primary Technical Reference

**Orvis — Non-Slip Mono Loop**  
Source: `https://howtoflyfish.orvis.com/fly-fishing-knots/non-slip-mono-loop?lang=en`

Validated claims:

- Begin with a loose overhand knot.
- Pass tag through terminal eye and back through original overhand.
- Set loop size before completing wraps.
- Wrap count varies with line size.
- Return through original overhand and seat while retaining an open terminal loop.

## Source B — Independent Cross-Check

**University of Missouri Extension — Angling Skills, Kreh End Loop Knot**  
Source: `https://extension.missouri.edu/media/wysiwyg/Extensiondata/Pro/4h/Docs/Projects/OutdoorsNature/Sportfishing/supplemental-angling-skills.pdf`

Validated claims:

- Lefty Kreh-developed non-collapsing terminal loop.
- Same loose-overhand → eye → overhand → standing-line wraps → overhand routing.
- Passes through the overhand must preserve the intended side/orientation.
- Wrap count varies from light to heavy material.
- Used to allow jigs, streamers, bucktails, and lures to move freely.

## Additional Claim-Specific Source

**Take Me Fishing — Saltwater Fishing Knot Tying Techniques**  
Source: `https://www.takemefishing.org/blog/september-2023/5-saltwater-fishing-knot-tying-techniques-for-inshore-anglers/`

Validated claims:

- Useful for artificial lures where free movement is desired.
- A lure already using a split ring often does not need a second free loop.

## Variation Resolution

Orvis and Missouri prescribe different wrap counts according to line diameter, but agree that wrap count is material-dependent. V1 standardizes on **five wraps for common freshwater leader sizes** and explicitly documents that unusually light/heavy material may require adjustment.

The project stores `Non-Slip Mono Loop` and Missouri’s exact `Kreh End Loop Knot` as aliases. They are not separate canonical entities.

## Research Decision

Monofilament and fluorocarbon are supported. Braid is not included in the generic V1 terminal-loop record.

# Dropper Loop Knot

**Canonical ID:** `dropper-loop-knot`  
**Research Status:** Source validation complete

## Source A — Primary Technical Reference

**Take Me Fishing — How to Tie Dropper Loop Knot**  
Source: `https://www.takemefishing.org/how-to-fish/how-tie-fishing-knots/how-to-tie-dropper-loop-knot/`

Validated claims:

- Form a loop at the desired position.
- Make five or more wraps while keeping the loop/opening accessible.
- Push the original branch loop through the central opening.
- Pull the standing ends in opposite directions to seat.
- Used for multi-hook, multi-fly, and bottom-fishing systems.

## Source B — Independent Cross-Check

**University of Missouri Extension — Angling Skills**  
Source: `https://extension.missouri.edu/media/wysiwyg/Extensiondata/Pro/4h/Docs/Projects/OutdoorsNature/Sportfishing/supplemental-angling-skills.pdf`

Validated claims:

- Four-to-seven-wrap Dropper Loop family geometry.
- Active/original loop passes through the central opening.
- Appropriate for bait rigs, combination lure rigs, and terminal-tackle branches.

## Additional Application Sources

**Alaska Department of Fish and Game — Dropper Loop**  
Source: `https://www.adfg.alaska.gov/index.cfm?ID=20&adfg=FishingSportFishAK.reelTimes`

**New Jersey Division of Fish & Wildlife — Reef Fishing**  
Source: `https://www.nj.gov/dep/fgw/artreeffish101.htm`

Validated claims:

- Multiple Dropper Loops may carry separate flies/jigs on one leader.
- Official rig guidance explicitly uses Dropper Loops in monofilament leader material.

## Variation Resolution

The wrap-count range varies by instruction source. V1 uses **five wraps**, which lies within the independently supported range and matches the Take Me Fishing beginner method.

## Research Decision

The V1 generic material compatibility is monofilament. This is a specialized in-line branch loop, not the same job as a Non-Slip terminal loop.

# Snell Knot

**Canonical ID:** `snell-knot`  
**Research Status:** Source validation complete

## Source A — Primary Technical Reference

**Take Me Fishing — How to Tie a Snell Knot**  
Source: `https://www.takemefishing.org/how-to-fish/how-tie-fishing-knots/how-to-tie-a-snell-knot/`

Validated claims:

- Multiple accepted Snell variants exist.
- The beginner-oriented **Easy Snell** starts through the eye toward the hook point.
- A small loop is formed beside the shank.
- Tag end wraps around hook shank and line five to seven times from point toward eye.
- Tag passes through the small loop underside-to-topside.
- Holding the wraps while pulling tag and standing line seats the connection.
- Mono, fluorocarbon, and braid can be used.

## Source B — Independent Technical Cross-Check

**Mustad — How to Snell a Hook**  
Source: `https://mustad-fishing.com/us/article/how-to-snell-a-hook`

Validated claims:

- A Snell connection is built as tight coils around the hook shank.
- The completed geometry provides a direct in-line pull.
- Eyed hooks can be snelled.
- Circle hooks, octopus hooks, and tandem-hook arrangements are established Snell applications.

## Additional Material/Application Sources

**Gamakatsu — Heavy Cover Worm Hook**  
Source: `https://gamakatsu.com/product/heavy-cover-worm-with-tin-keeper/`

**Berkley — Fluorocarbon Line Guide**  
Source: `https://www.berkley-fishing.com/blogs/news/berkley-freshwater-line-guide-fluorocarbon`

Validated claims:

- Braid Snell use is explicitly supported for suitable welded-eye flipping hooks.
- Fluorocarbon Snell use is explicitly recognized.
- Manufacturer hook geometry can materially affect whether a Snell is appropriate.

## Variation Resolution

A major method-selection issue exists: credible sources teach multiple legitimate Snell geometries. The University of Missouri Extension material, for example, demonstrates a different loop-wrapping Snell than Take Me Fishing’s Easy Snell.

These methods are **not merged**.

For V1, the canonical `Snell Knot` deliberately teaches the **Easy Snell** because:
- it has an explicit step-by-step beginner sequence,
- the final shank-coil geometry is independently corroborated by manufacturer instruction,
- it supports the project’s freshwater terminal-hook use cases,
- naming the broader canonical entity `Snell Knot` remains appropriate while the research record documents the chosen instructional variation.

`Easy Snell` is a selected method, not a separate alias/entity.

## Research Decision

All three approved line materials are supported. The V1 method assumes an eyed hook and remains hook-specific rather than a general terminal-tackle connection.

# Alberto Knot

**Canonical ID:** `alberto-knot`  
**Research Status:** Source validation complete

## Source A — Primary Technical Reference

**Take Me Fishing — Alberto Fishing Knot**  
Source: `https://www.takemefishing.org/how-to-fish/how-tie-fishing-knots/alberto-fishing-knot/`

Validated claims:

- Designed to join braid to heavy monofilament or fluorocarbon leader.
- Leader is doubled to create the receiving loop.
- Braid makes seven tight wraps up and seven tight wraps back down.
- Braid tag must exit the leader loop in the same direction it entered.
- Pulling all four sections first organizes/tightens the knot; main braid and leader are then pulled to seat it.
- Appropriate when materials or diameters differ.
- `Crazy Alberto` is an accepted name.

## Source B — Independent Manufacturer Cross-Check

**Seaguar — Tying the Crazy Alberto Knot**  
Source: `https://seaguar.com/blogs/knot-guide/tying-the-crazy-alberto-knot`

Validated claims:

- Manufacturer technical instruction recognizes the Crazy Alberto as a braid-to-leader knot.
- Seaguar’s pro-staff tutorial independently validates the knot family and practical leader application.

**Seaguar — Mark Rose’s Go-To Leader Knot**  
Source: `https://seaguar.com/blogs/knot-guide/mark-roses-go-to-leader-knot`

Additional independent manufacturer evidence that the Crazy Alberto is an established leader connection.

## Additional Application Source

**Seaguar — Fluorocarbon FAQ / Knot Guide**  
Source: `https://seaguar.com/pages/faqs`

Validated claim:

- Braid-to-fluorocarbon leader connections are a normal technical use case requiring an appropriate leader knot.

## Variation Resolution

The production tying geometry is anchored to the explicit Take Me Fishing written method. Seaguar independently validates the Crazy Alberto as a braid-to-leader knot through manufacturer tutorial video.

The canonical method is therefore locked to:
- folded leader loop,
- seven wraps up,
- seven wraps back down,
- braid tag exits the loop in the **same direction** it entered,
- organize with all four sections,
- seat with main braid and leader.

No Albright/Modified-Albright instructions are mixed into this method.

## Research Decision

All three material tokens are stored because the knot’s actual supported pairing is braid to monofilament or fluorocarbon. This does not imply that every pairwise combination of the three materials is appropriate.

# V1 Research Closeout

All 10 approved Version 1 Knots meet the project’s research threshold and are content-locked.

Production Package 1 assigns Version `0.5.0` metadata and implements the locked library in `data/knots.js` together with the ordered `CORE_KNOT_IDS` registry and the approved Rig-owned `knotApplications[]` relationship layer.

Static instructional SVG work remains downstream of content lock and must visualize the locked tying geometry rather than introduce new instructional variants.
