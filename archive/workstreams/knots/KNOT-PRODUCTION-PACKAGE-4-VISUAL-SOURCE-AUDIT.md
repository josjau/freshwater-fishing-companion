# Knot Production Package 4 — 10-Knot Visual Source Audit

**Document Status:** Approved  
**Implementation Status:** Validated  
**Milestone:** Knots  
**Package:** Production Package 4  
**Opened:** 2026-08-14  
**Closed:** 2026-08-14  
**Runtime Environment:** Windows Desktop + Microsoft Edge + GitHub Desktop

# Purpose

Record the completed technical and rights audit used to select Version 1 Knot instructional-media destinations.

Canonical Knot text remains authoritative. External media supplements the numbered tying steps and must match the locked Version 1 method closely enough that it does not teach conflicting topology.

# Approved Source Priority

Package 4 evaluated instructional media in this order:

1. verified diagram,
2. verified animation,
3. verified video,
4. custom project diagram only as a last resort.

The initial diagram-first search found technically viable diagrams for all ten Knots. During user review, the project deliberately selected a more consistent external-source strategy centered on Animated Knots because its step-controlled animations are clear, technically strong, and its published FAQ explicitly permits linking while defining limited image-link use.

No generated Knot drawing was approved for production.

# Final Production Media Set

| Knot | Production destination | Media type | Method status | Delivery |
|---|---|---|---|---|
| Arbor Knot | Animated Knots by Grog | External animation | PASS | External link |
| Improved Clinch Knot | Animated Knots by Grog | External animation | PASS | External link |
| Palomar Knot | Animated Knots by Grog | External animation | PASS | External link |
| Double Uni Knot | Bass Pro Shops / Pro-Knot | External diagram/instructions | PASS — exact 5 ordinary / 8 braid standard | External link |
| Uni Knot | Animated Knots by Grog | External animation | PASS | External link |
| Double Surgeon’s Knot | Animated Knots by Grog — Surgeon’s Join | External animation | PASS — line-to-line form | External link |
| Non-Slip Loop Knot | Animated Knots by Grog — Non-Slip Mono | External animation | PASS | External link |
| Dropper Loop Knot | Animated Knots by Grog | External animation | PASS — canonical page reconciled to about six wraps | External link |
| Snell Knot | Animated Knots by Grog | External animation | PASS — traditional loop-wrapped 7–8 wrap method | External link |
| Alberto Knot | Knots 3D | External interactive 3D instructions | PASS — seven-up / seven-down standard | External link |

# Animated Knots Decision

Animated Knots is the preferred Version 1 instructional-animation provider for the eight supported canonical Knots.

Production destinations:

- `https://www.animatedknots.com/arbor-knot`
- `https://www.animatedknots.com/improved-clinch-knot`
- `https://www.animatedknots.com/palomar-knot`
- `https://www.animatedknots.com/uni-knot`
- `https://www.animatedknots.com/surgeons-join-knot`
- `https://www.animatedknots.com/non-slip-mono-knot`
- `https://www.animatedknots.com/dropper-loop-knot`
- `https://www.animatedknots.com/snell-knot`

Rights boundary:

- external linking is approved,
- the provider FAQ permits one animation-sequence image to be used as the link,
- Package 4 does **not** copy or rehost the animation,
- Package 4 does **not** copy animation frames into the repository,
- the current implementation uses a text/link Visual Guide card rather than a copied preview image.

# Double Uni Decision

Animated Knots does not provide the selected Double Uni instructional destination.

The preferred source is:

**Bass Pro Shops / Pro-Knot — Double Uni**  
`https://1source.basspro.com/news-tips/fishing-knots-how-tie/7675/fishing-knot-library-how-tie-double-uni-knot-4-easy-steps`

Technical reason:

- explicitly supports five ordinary turns,
- explicitly supports eight braid turns,
- shows opposing Uni bodies sliding together,
- matches the locked Version 1 method more closely than sources using a generic four- or six-turn presentation.

Rights/delivery:

- external link only,
- no local artwork reuse permission established.

# Alberto Decision

The selected production destination is:

**Knots 3D — Alberto Knot**  
`https://knots3d.com/en/alberto-knot`

Technical reason:

- leader loop geometry is correct,
- published instructions call for at least seven wraps in each direction,
- this aligns with the project's locked seven-up / seven-down Alberto method,
- the interactive 3D presentation is useful for topology inspection.

Rights/delivery:

- external link only,
- no published redistribution/embed permission was established,
- the site's downloadable-image control is not treated as redistribution permission.

NetKnots remains a valid corroborating external reference but is not the selected Package 4 production destination.

# Dropper Loop Reconciliation

Earlier Version 1 content used five wraps.

Animated Knots demonstrates approximately six wraps. The user explicitly approved aligning the canonical page with the selected animation.

Final Version 1 standard:

> Wind one side of the loop around the other **about six times** while retaining the central opening and original branch loop.

This remains inside the independently supported Dropper Loop family range.

The change is implemented in `data/knots.js` and reconciled in:

- `docs/KNOT_REFERENCE_SOURCES.md`
- `docs/workstreams/KNOT-CANONICAL-CONTENT-LOCK.md`

# Snell Reconciliation

The earlier Version 1 Easy Snell selection was explicitly superseded.

Final Version 1 standard:

**Traditional loop-wrapped Snell**

Locked topology:

1. pass through the hook eye,
2. pass through the eye a second time in the same direction,
3. retain a large controlled loop beside the shank,
4. wrap the loop around the hook shank and doubled line seven to eight times,
5. pull the standing line to collapse the remaining loop beneath the coils,
6. moisten, seat with standing line/tag end, and trim.

Difficulty remains `Intermediate`.

The change is implemented in `data/knots.js` and governed by:

`docs/workstreams/KNOT-SNELL-VARIANT-APPROVAL.md`

# Reusable Diagram Research Retained

The diagram-first audit also established two clearly reusable Public Domain U.S. Fish & Wildlife Service sources:

- Improved Clinch Knot,
- Palomar Knot from **Fishing Is Fun for Everyone**.

They remain valid future local-media candidates. Package 4 deliberately did not bundle them because the approved implementation uses the consistent external Visual Guide pattern instead.

Other technically useful diagram sources discovered during the audit remain research references only unless reuse rights are separately established.

# Production Implementation

Package 4 implementation uses the cross-entity Media registry in `data/media.js`.

Knot media records use:

- `ownerType: "knot"`,
- canonical `ownerId`,
- explicit external media type,
- provider/title/action metadata,
- rights metadata,
- external destination URL.

The Knot detail page resolves the active record and inserts a dedicated **Visual Guide** card immediately above **How to Tie It**.

The card states that the numbered in-app steps remain canonical and opens the verified external destination in a new tab.

Production files involved:

- `data/knots.js`
- `data/media.js`
- `index.html`
- `forest-journal.css`
- `knot-media-renderer.js`

# Runtime Validation

Block 4.2B passed Microsoft Edge runtime validation.

Validated examples:

- an Animated Knots-backed Knot opens the correct animation,
- Double Uni opens the Bass Pro / Pro-Knot source,
- Alberto opens Knots 3D,
- Visual Guide appears above **How to Tie It**,
- presentation is acceptable in the tested application layout.

No third-party media is copied or rehosted by the Package 4 implementation.

# Rejected / Deferred Media

The earlier generated Knot SVG/PNG review drawings remain rejected exploratory artifacts and are not production media.

Lottie remains a possible future playback technology only if it is driven by independently verified topology. It is not part of Package 4.

# Final Audit Result

**PASS / APPROVED / IMPLEMENTED / RUNTIME-VALIDATED**

The 10-Knot source audit is complete, all ten canonical Knots have an approved external instructional destination, the two canonical method corrections are reconciled, and the production media presentation has passed runtime review.
