# Freshwater Fishing Companion

**Document:** MEDIA_GUIDE.md  
**Document Revision:** 1.0.10  
**Document Status:** Approved  
**Last Updated:** 2026-08-23

# Purpose

This document defines the permanent media, illustration, photography, licensing, storage, and instructional-media standards for Freshwater Fishing Companion.

# Governing Principles

Media must be:

- Technically accurate
- Identification-safe
- Mobile-first
- Lightweight
- Beginner friendly
- Consistent with Forest Journal
- Locally bundled for production when the project owns/reuses the asset
- Properly licensed
- Useful rather than decorative

Correctness takes priority over polish.

# Media Ownership Architecture

D056 governs canonical entity-to-Media attachment.

Media owns the attachment through:

```text
Media.ownerType
Media.ownerId
```

Entity records do not maintain inverse media-ID arrays merely to locate Media that already identifies its owner. This applies across Fish, Rig, Tackle, Knot, Lure, Technique, and future canonical entity domains unless a later explicit architectural decision documents a genuinely different semantic relationship.

Multiple Media records may share the same `ownerType` + `ownerId` when a demonstrated feature requires multiple assets. If later UX requires role, order, or priority metadata, that information belongs with the Media attachment or another explicitly approved relationship owner because it describes the media relationship. Do not add role/order fields speculatively.

Entity lifecycle and Media lifecycle remain separate. An entity can remain canonical without local media, and a Media record can be inactive independently of its owner.

# Unified Field-Guide Visual System

Fish, Rigs, Tackle, Knots, Lures, and Techniques should feel like parts of one field guide.

Shared visual language:

- Consistent hierarchy
- Consistent spacing
- Neutral cream/white instructional surfaces
- Restrained natural accents
- Clear labels and callouts
- Mobile-first composition

Do not force every entity type into the same media format. Use the format best suited to the accuracy requirement.

# Palette and Branding

Media should complement Forest Journal.

Preferred accents:

- Forest and olive greens
- Warm earth tones
- Copper and muted gold
- Stone gray
- Warm cream and white

Avoid:

- Large blue branding bands
- Decorative site branding inside instructional media
- Faux attribution badges
- Bright unrelated accent systems
- Promotional poster styling

Original Freshwater Fishing Companion diagrams do not need a footer badge.

# Reference Media Surface Invariant

The canonical reference-media panel and current Tackle recognition-image canvas use **exact RGB `244, 240, 232` / `#f4f0e8`**.

This color is a permanent cross-theme design constraint, not a Forest Journal-only theme choice.

All future production-supported themes, palettes, and color schemes must be designed to work harmoniously with this fixed reference-media surface. Theme work must not recolor, tint, filter, darken, lighten, or substitute a theme-specific background for the canonical reference-media panel or for Tackle recognition assets built to this canvas.

Future theme evaluation must include:

- visual compatibility with `#f4f0e8`,
- sufficient contrast between the fixed media surface and surrounding cards/panels,
- sufficient contrast for text, controls, borders, focus states, and contextual-reference chrome adjacent to the fixed surface,
- confirmation that the media panel does not look accidental, muddy, overly bright, or visually disconnected from the proposed theme,
- preservation of the seamless relationship between the reference panel and 640 × 440 Tackle assets composited on the same exact canvas color.

A proposed theme that materially clashes with `#f4f0e8` must be redesigned rather than changing the reference-media surface to accommodate the theme.

# Mobile-First Standard

Media is designed for phones first.

Do not create a wide desktop poster and simply shrink it until text is unreadable.

For instructional composite images:

- Prefer vertical field-guide plates.
- Use large readable labels.
- Keep instructions concise.
- Stack content top-to-bottom.
- Avoid dense multi-column text.
- Validate at realistic phone widths.
- Use SVG when practical so text and line art stay sharp.

# Rig Media

Rig media is accuracy-critical because several components must maintain correct order, orientation, connection, and geometry at the same time.

Future Rig visual/reference attachments follow the shared Media ownership model through `ownerType: "rig"` and the canonical Rig ID. Rig records do not regain inverse `imageIds[]` merely to locate Media.

## Current Standard

Do not generate a completed Rig image merely to maintain visual consistency. A technically wrong image is worse than no local image.

Preferred order for completed-Rig visual reference:

1. A clearly licensed, technically verified completed-Rig image that may be bundled locally.
2. A verified tutorial video shown through the source platform's official permitted embed player.
3. A stable direct visual destination or dedicated media/file page from a verified external source when local reuse rights are unclear or unavailable.
4. A verified authoritative article or instructional reference when a direct visual destination is unavailable or unsuitable.
5. Text-only instructions if no trustworthy visual reference is available.

A direct external visual link is a navigation aid, not a production asset. Do not hotlink third-party images or copy third-party video into the repository.

Embedded tutorials remain hosted and controlled by the source platform. Embedding permission does not grant permission to download, rehost, edit, extract a frame, or reuse the thumbnail as a project asset.

Current completed Rig tiers use authoritative text assembly plus validated lazy-loaded tutorial embeds when an appropriate build-first source exists. When no suitable tutorial is available, the Rig uses the next trustworthy D049 fallback rather than adding a weak or mismatched video.

## Rig Page Standard

A Rig detail page should normally present:

- Rig name and summary
- Best For
- Good Conditions
- Verified Rig Examples using external-link semantics (`↗`)
- What You Need with contextual `Name ⓘ` Tackle references and inline ownership/readiness controls
- Numbered text build instructions
- Setup Notes
- Common Mistakes
- Safety

Do not repeat the same instruction in multiple visual and text sections without a demonstrated accessibility need.

## External Reference Semantics

The `ⓘ` symbol remains reserved for contextual information that does not leave the current page.

External Rig references use `↗` and open in a new tab.

An approved embedded tutorial remains in-app through the source platform's official player. The interface must also provide a clearly labeled external-source fallback such as `Watch on YouTube ↗`.

For YouTube tutorials, use the official embed player, privacy-enhanced `youtube-nocookie.com` mode, no autoplay, responsive 16:9 presentation, and the normal browser referrer behavior required for playback. If the uploader disables embedding or the player cannot load, the external YouTube fallback remains available.

When a trustworthy direct image, dedicated media page, or file page is available, prefer that destination for visual confirmation so the user does not have to search through a long article for the relevant Rig image.

## Rig Tutorial Selection Standard

Primary embedded Rig tutorials are **build-first**.

Selection requirements:

- The primary purpose of the embedded tutorial is to show correct physical assembly/configuration of the Rig.
- Prefer concise, direct videos when technical completeness and source quality are otherwise adequate.
- Prioritize component order, knots/connections, leader placement, weight placement, bait/hook placement, and final assembled configuration.
- Fishing technique, retrieve, presentation, and strategy may appear, but they must not dominate the primary embedded tutorial.
- When multiple technically correct candidates exist, prefer the shorter build-focused source.
- Do not impose an arbitrary fixed duration threshold; a longer video may be selected when necessary to teach the build correctly.
- Authoritative text assembly remains mandatory and authoritative even when a tutorial is embedded.
- If no suitable tutorial is available, use the next trustworthy D049 fallback instead of adding a weak, marketing-heavy, technique-dominant, or technically mismatched video.
- Tutorial selection must be rechecked at runtime after production implementation because public availability and embed behavior can change.

Permanent working principle:

> Tutorial preferred, trustworthy external visual/reference as backup, authoritative text always required.

## Texas Rig Technical Standard

For any future Texas Rig illustration or locally licensed diagram, the finished soft-plastic relationship must be validated against a real technical reference:

- Insert the hook point into the bait nose approximately 1/8 to 1/4 inch.
- Exit through the side of the bait.
- Slide the bait fully up the hook shank to the offset.
- Rotate the bait so its nose rests flush against the offset and the body is straight.
- Lay the hook against the bait only after the nose is seated to determine the re-entry point.
- Reinsert the point through the bait at that measured location.
- The point reaches the opposite side and is lightly skin-hooked or barely buried for a weedless finish.
- The bait must remain straight rather than bowed or twisted.

Do not use generated Rig geometry. Manually constructed project diagrams are allowed only when built from verified references and validated component-by-component. D045 records the failed generative-image tests and the permanent prohibition on generated finished-Rig/build-step instruction media.

# Fish Media

Fish identification is accuracy-critical.

Primary identification media must use:

1. Verified authoritative photographs
2. Properly identified licensed photographs
3. Verified scientific illustrations when appropriate

Do not use AI-generated or approximate photorealistic Fish imagery as primary identification evidence.

Do not stylize identification media in a way that changes diagnostic features.

Diagnostic features may include:

- Body proportions
- Mouth position
- Fin placement and markings
- Body markings
- Lateral line
- Color pattern
- Tail shape
- Gill-cover features

The Fish page may surround the verified photograph with field-guide information, but the photograph should remain trustworthy evidence rather than becoming a decorative generated infographic.

## Fish Isolation and Reference-Surface Standard

When the approved source rights permit modification and the Fish can be isolated without losing diagnostic detail, production Fish media may use a transparent background and render the isolated Fish over the canonical `#f4f0e8` reference-media surface.

The transparent Fish file and the UI surface have separate responsibilities:

- the Fish asset preserves the verified subject and transparency,
- the application supplies the fixed `#f4f0e8` presentation surface,
- do not bake a new cream background into an otherwise clean transparent Fish merely to match the UI.

Background removal is a preservation operation, not an illustration cleanup pass. Remove only pixels that are demonstrably background. Do not recolor, reshape, repaint, retouch, reconstruct, sharpen into new geometry, or otherwise alter the Fish itself.

Special edge protection is required for thin, pale, translucent, or diagnostic anatomy, including:

- dorsal spines and fin rays,
- translucent fin membranes/edges,
- catfish barbels,
- gar snouts and jaws,
- Paddlefish rostrum,
- tail margins,
- pale belly/body edges,
- genuine open spaces between fins/body structures.

Before approving an isolated Fish asset:

1. Compare the isolated result directly with the untouched approved source.
2. Inspect the alpha edge at high magnification.
3. Inspect the result on light, dark, and canonical `#f4f0e8` backgrounds.
4. Verify complete diagnostic anatomy and natural proportions remain intact.
5. Preserve a safe transparent perimeter around all anatomy rather than tightly trimming the file to the Fish silhouette.
6. Record background removal in the Media transformation/change metadata.

If clean isolation cannot be achieved without losing or materially altering Fish detail, keep the source-faithful background or obtain a better source. Visual uniformity never overrides identification accuracy.

Do not infer modification permission from artist attribution or government-site hosting alone. Per-asset rights/provenance review remains mandatory before background removal or other derivative processing.

## Fish Presentation Framing

Canonical Fish source/provenance remains authoritative; presentation framing does not change Fish identity/media ownership.

Standardized UI image blocks should control the presentation surface while per-Fish scale/position settings control how the Fish fits inside that block. Do not distort natural proportions to make differently shaped species appear equally tall.

Current approved Fish presentation contexts include:

- Selection Card image block: 2.4:1,
- Fish Detail identity image block: 2.2:1,
- Compare Similar Fish thumbnail: 84 × 56,
- dedicated Compare Fish contexts use standardized blocks with independent per-Fish fit tuning.

All framing must preserve diagnostic extremities and safe clearance. Long/narrow Fish such as gar may legitimately retain more vertical negative space than deep-bodied Fish; do not vertically stretch them to imitate the apparent occupancy of trout or carp.

# Tackle Media

Tackle is recognition-first. Production recognition media should use a trustworthy real photograph when local reuse rights, subject identity, and presentation quality permit it. When a suitable reusable photograph is unavailable, use an original semi-photorealistic catalog-style reference anchored to verified real-world geometry.

Canonical Tackle records do not own `mediaIds[]`. Current Tackle recognition Media is located through Media-owned `ownerType: "tackle"` + `ownerId`.

Vector, line-art, flat-graphic, or clip-art treatment is not the normal production style for Tackle recognition media. Precise illustration is an exception for mechanically sensitive items only when it materially improves geometry or recognition and must be explicitly identified and reviewed before inclusion in a build.

The approved visual style uses:

- Clean catalog-like presentation
- Clean product-reference rendering that visually matches the current approved neutral-background production examples
- Realistic material appearance and depth
- Semi-photorealistic treatment where a reusable real photograph is unavailable
- Clean object edges at normal mobile display sizes
- Forest Journal-compatible green/earth accents where appropriate
- Consistent lighting and scale
- Minimal decorative branding
- No artificial baked-in drop shadow
- No heavy outline, vector, icon, cartoon, or clip-art appearance

Transparency is optional as an intermediate production technique, but the normal shipped Tackle reference is an RGB WebP with the exact reference-panel canvas color described below. Use alpha only when isolation can be performed cleanly without rough halos, jagged edges, fringing, or degraded fine geometry.

Before creating a Tackle recognition asset, use a real photograph, manufacturer product image, or authoritative technical image as the geometry baseline. Do not invent hook, float, swivel, sinker, stop, or connector geometry from memory.

For mechanically sensitive items, compare the final production asset back to the real baseline before approval.

Tackle imagery is recognition help, not a photo library. It is displayed on demand from contextual `Name ⓘ` interactions.

For the approved catalog-style Tackle treatment, optimized WebP is the preferred production format. The current production standard uses 640 × 440 single-object catalog references on **exact RGB `244, 240, 232` / `#f4f0e8`**, matching the canonical reference-media panel. Generated or isolated objects should be composited onto this exact canvas before final WebP export so the image area visually merges with the reference panel rather than appearing as a darker or lighter rectangle. Do not rely on a generator to approximate the canvas color. Production references use no alpha transparency or artificial cast shadows. The object should visually match the approved production examples: realistic material, clean edges, useful scale, and enough detail to identify the component without relying on the label. Future themes must preserve this panel/canvas color and design their surrounding palette around it.

## Tackle Acquisition Priority

For a canonical Tackle recognition asset, use this order:

1. A technically correct real photograph that is public domain, CC0, or otherwise clearly licensed for the project's local redistribution and modification needs.
2. Another properly licensed authoritative or manufacturer image only when the exact reuse rights permit local inclusion.
3. An original semi-photorealistic catalog-style reference created from independently verified real-world geometry.
4. A precise illustration only when mechanical accuracy cannot be represented clearly through the preferred treatments; this is an explicit exception, not a default production shortcut.

Manufacturer and retailer photographs may be used as geometry/reference evidence even when redistribution rights do not permit copying them into the repository. Reference permission and production-asset permission are separate questions.

Do not choose a weaker reusable photograph merely because it is available. The production asset must represent the correct canonical concept clearly enough for a beginner to identify the component.

## Tackle Media Generation Gate

Every new or replacement Tackle recognition asset must pass this gate before it may enter an implementation package:

1. Re-read the current `MEDIA_GUIDE.md` from GitHub.
2. Inspect representative current approved production Tackle assets from GitHub; archived or superseded artwork is not a visual baseline.
3. Verify the subject's geometry against a real photograph, manufacturer image, or authoritative technical reference.
4. Search for a legally reusable real photograph before generating an original replacement.
5. When an original asset is required, explicitly target the approved semi-photorealistic catalog-reference treatment rather than generic illustration.
6. Isolate/composite the subject as needed and verify the final 640 × 440 production canvas is exact `#f4f0e8`, not an approximate generated cream.
7. Compare the finished asset visually with the current approved production library at full size and at realistic contextual-popover phone size.
8. Reject the asset before packaging if it appears vector-like, flat, cartoon-like, clip-art-like, mechanically ambiguous, materially inconsistent with the current library, uses a visibly mismatched canvas, or depends on its caption for basic identification.
9. Only after visual-style, geometry, licensing/provenance, format, canvas-color, and mobile-recognition checks pass may the asset be added to `data/media.js` or a delivery package.

Passing file dimensions, format, metadata, or path checks is not sufficient. Visual conformity with the current approved production library is a mandatory pre-delivery requirement.

## Hook Geometry and Orientation Standard

Hook imagery is mechanically sensitive and must remain immediately readable as a hook rather than a nearly closed circle or mirrored catalog presentation.

For standalone standard fishing hooks, Wacky/finesse hooks, offset worm hooks, and hook-bearing Jighead references:

- The silhouette must retain an open `J` shape.
- The normal recognition orientation is a conventional viewer-facing capital `J`: eye/shank on the **right**, bend across the **bottom**, and point/barb rising on the **left**.
- Do not ship a mirrored/reversed-J orientation solely because a generated candidate happened to face the opposite direction.
- A different orientation is permitted only when a specific technical relationship requires it and that exception is explicitly reviewed.
- The eye, shank, bend, gap, point, and barb must be visually distinct.
- The gap must remain open enough that the point does not visually close against the shank.
- An offset worm hook must show the offset near the eye without distorting the main bend or gap.
- A Jighead must show the weighted head integrated with the hook shank and an attached open-`J` hook with a clear point/barb relationship.
- Near-circular, closed-loop, ambiguous, or unintentionally mirrored hook silhouettes fail validation even when they look polished.

# Knot Media

The Version 1 Knot library contains 10 canonical Knots and has approved instructional-media coverage for all 10.

Each current Knot instructional Media record attaches through:

```text
ownerType: "knot"
ownerId: canonical Knot ID
```

Current production instructional destinations include external step-by-step animation, illustrated instruction, and interactive 3D instruction where the source passed the method-match and rights review.

Canonical in-app `tyingSteps[]` remain authoritative. External instructional Media supplements those instructions; it does not replace or own canonical Knot tying facts.

Third-party artwork, animation sequences, video, or 3D assets are not copied, bundled, rehosted, extracted, or redistributed unless explicit reuse rights exist.

Current Version 1 uses verified external instructional destinations. Future project-owned diagrams or user-controlled animations remain preferred where they materially improve clarity and can be produced accurately.

For future project-owned Knot diagrams/animations, prefer mobile-readable step-by-step presentation using:

- Numbered steps
- Clear line paths
- Direction arrows
- Short in-image instructions
- Final knot state
- Clear distinction between standing line, tag end, hook/eye, and loops
- Color coding only when useful and accessible

Static instruction must remain sufficient even if animation is added later.

Reusable Knot instructional assets should support connected knowledge without duplicating the full tying sequence inside every Rig.

# Local Production Media vs External Instructional Media

`data/media.js` may contain both locally bundled production Media and external instructional Media records.

## Local production Media

Examples include current Tackle recognition WebP assets and future locally owned/licensed Fish, Rig, Knot, Lure, or Technique media.

Locally bundled assets require appropriate redistribution rights and must satisfy the applicable technical/media standards in this guide.

## External instructional Media records

External records may store provider, destination, rights/provenance, action label, and other approved metadata without copying the third-party asset into the repository.

An external Media record does not imply local redistribution permission. Rights fields such as `localReuseAllowed`, attribution requirements, and source/review metadata must accurately describe what the project is permitted to do.

# Lure Media

Use the media type that best supports recognition and use.

Use verified photography when exact profile or coloration matters.

Use original diagrams/illustrations for:

- Component names
- Rigging
- Retrieve concepts
- Action
- General lure categories

Do not present a generated photorealistic lure as an exact commercial product unless clearly identified as illustrative.

# Technique Media

Use only when it improves understanding.

Examples:

- Rod position
- Retrieve cadence
- Cast direction
- Presentation path
- Bottom contact
- Cover approach

Prefer simple instruction over decoration.

# Text Inside Images

Instructional SVGs may contain concise text when this reduces duplicated page content.

Appropriate:

- Step number
- Step title
- One short instruction sentence
- Component labels
- `Best For`
- Conditions
- Essential warning
- Direction/motion labels

Avoid long paragraphs.

If the image already communicates the full build sequence, the page should not repeat the same long step list unless accessibility or fallback needs require it.

# Acquisition Priority

Preferred order:

1. Public domain / CC0
2. Properly licensed free sources after per-asset verification
3. Original authoritative project diagrams or original semi-photorealistic recognition assets when appropriate for the domain
4. Other licensed sources when they add meaningful accuracy
5. Discovery sources only to trace the original source
6. Original Companion SVG illustration for true diagrams/line art
7. AI-generated or enhanced imagery only when appropriate for the domain and independently verified

Pinterest and similar sites are discovery sources, not production sources.

Do not hotlink production assets.

# Formats

Prefer:

- SVG for diagrams, labels, line art, instructional plates
- Optimized WebP for photographs and catalog-style Tackle recognition images

Use PNG only when source/tooling requires it.

# Storage Targets

General targets:

- Tackle references: normally under 150 KB
- Rig SVGs: compact vector assets; avoid embedded raster content when unnecessary
- Fish identification photos: roughly 150–300 KB when diagnostic detail requires it

GitHub Pages footprint is a design constraint.

Do not increase size for imperceptible quality gains.

# Loading

Load media only when needed.

Preferred behavior:

- Contextual reference media loads when the popover opens.
- Large secondary media uses lazy loading.
- Third-party tutorial players load only after the user requests the tutorial.
- Embedded tutorial video does not autoplay.
- Primary local detail media loads with the selected page when appropriate.
- Avoid preloading large libraries or third-party players without a demonstrated benefit.

# Licensing Metadata

`data/media.js` owns reusable media metadata.

For locally bundled project/reusable assets, retain as applicable:

- License status
- License type
- Creator
- Source URL
- License URL
- Attribution requirement
- Commercial-use permission
- Modification permission
- Review date

For external instructional Media, retain the equivalent rights/provenance fields needed to state linking, preview, attribution, and local-reuse permissions accurately.

Original Companion art is recorded as original project media.

Licensing metadata does not require a visible attribution badge when attribution is not required.

# Media Validation

Before approval, verify:

## All

- Correct subject
- Technical accuracy
- Mobile readability
- Forest Journal compatibility
- No unnecessary branding
- Acceptable file size
- Correct path or external destination
- Appropriate alt text or instructional label where applicable
- Complete licensing/rights metadata
- Correct `ownerType` + `ownerId` attachment when stored in Media

## Rig

- Correct component order
- Correct hook geometry
- Correct bait relationship
- Correct weight orientation
- Correct sequence
- Tutorial remains build-first and technically consistent with the canonical Rig
- Tutorial lazy-load, no-autoplay, responsive player, source attribution/controls, and external fallback work at runtime
- External visual destination opens directly to the useful visual or the shortest trustworthy path to it when practical

## Fish

- Species identity independently verified
- Diagnostic traits visible
- Source and license verified
- No generated approximation used as primary identification evidence
- Any background isolation is permitted by the source rights and removes only background pixels
- Thin/translucent/diagnostic anatomy remains intact after isolation
- Transparent edges are checked on light, dark, and `#f4f0e8` backgrounds
- Fish presentation framing preserves natural proportions and complete diagnostic extremities
- Canonical source/provenance remains traceable after any approved transformation

## Tackle

- Beginner can recognize the item without relying on the caption
- Key geometry is clear and the object is not visually ambiguous
- Small accessories are shown in an identifiable configuration rather than as an unexplained shape
- Standard, Wacky/finesse, offset, and Jighead hooks retain an open `J` profile with visible eye, shank, bend, gap, point, and barb
- Hook-bearing recognition media follows the normal viewer-facing J orientation unless a reviewed technical exception applies
- Usage relationships are accurate
- No artificial drop shadow is baked into the asset
- Edge quality is clean at normal phone display size
- Current production assets use the approved 640 × 440 `#f4f0e8` reference-panel canvas
- The image canvas does not appear visibly darker or lighter than the surrounding reference-image panel
- Any current or future application theme preserves the `#f4f0e8` reference-media surface and remains visually compatible with it
- Real photographs are preferred when they are technically correct, legally reusable, and presentation-safe
- Original replacement assets visually match the current approved semi-photorealistic catalog-reference library
- Vector, flat, cartoon, icon, or clip-art appearance fails normal Tackle recognition-media validation unless an explicit mechanically justified illustration exception was approved before packaging
- The finished asset was visually compared against current approved production examples before delivery
- Transparency used during production does not introduce halos, jagged edges, or visible fringing in the final RGB WebP

# Contextual Tackle Image Rule

Tackle images are recognition assistance, not a default photo gallery.

- Do not show Tackle thumbnails by default in Rig `What You Need` lists.
- Display the component as `Name ⓘ`.
- Open the approved Tackle image and reference information only when the user selects that contextual help control.
- The same principle applies to future My Tackle inventory records: imagery supports identification, while ownership data remains the primary content.
