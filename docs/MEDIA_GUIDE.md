# Freshwater Fishing Companion

**Document:** MEDIA_GUIDE.md  
**Document Revision:** 1.0.4  
**Document Status:** Approved  
**Last Updated:** 2026-08-08

# Purpose

This document defines the permanent media, illustration, photography, licensing, storage, and instructional-image standards for Freshwater Fishing Companion.

# Governing Principles

Media must be:

- Technically accurate
- Identification-safe
- Mobile-first
- Lightweight
- Beginner friendly
- Consistent with Forest Journal
- Locally bundled for production
- Properly licensed
- Useful rather than decorative

Correctness takes priority over polish.

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

Current Rig pages use authoritative text build instructions. Texas Rig is the first approved lazy-loaded embedded-tutorial trial; other Rigs continue to use verified external references until a better approved visual path is available.

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

# Tackle Media

Tackle is recognition-first and is suitable for original semi-photorealistic or vector illustration when the object geometry is anchored to real reference imagery.

The approved visual style uses:

- Clean catalog-like presentation
- Clean product-reference rendering that visually matches the approved neutral-background examples
- Semi-photorealistic treatment where practical; precise illustration only when it improves mechanical accuracy
- Clean object edges at normal mobile display sizes
- Forest Journal-compatible green/earth accents
- Consistent lighting and scale
- Minimal decorative branding
- No artificial baked-in drop shadow

Transparency is optional rather than mandatory. Use alpha transparency only when the object can be isolated cleanly without rough halos, jagged edges, fringing, or degraded fine geometry. A restrained neutral background is acceptable when it produces a cleaner and more recognizable reference image.

Before creating a Tackle illustration, use a real photograph, manufacturer product image, or authoritative technical image as the geometry baseline. Do not invent hook, float, swivel, sinker, stop, or connector geometry from memory.

For mechanically sensitive items, compare the final illustration back to the real baseline before approval.

Tackle imagery is recognition help, not a photo library. It is displayed on demand from contextual `Name ⓘ` interactions.

For the approved catalog-style Tackle treatment, optimized WebP is the preferred production format. The current production standard uses 640 × 440 single-object catalog references on a restrained warm-neutral background, without alpha transparency or artificial cast shadows. The object should visually match the approved examples: realistic material, clean edges, useful scale, and enough detail to identify the component without relying on the label.

Semi-photorealistic rendering is preferred when it improves recognition and preserves correct geometry. Precise illustration remains acceptable for small or mechanically sensitive items when it is clearer and more accurate than a simulated photograph. Alpha transparency remains permissible for a future asset only when it demonstrably produces a cleaner result than the neutral-background standard. SVG remains preferred for true vector diagrams, icons, knots, and instructional line art; production Tackle references may be rasterized to WebP for consistent loading and presentation.

## Hook Geometry Standard

Hook imagery is mechanically sensitive and must remain immediately readable as a hook rather than a nearly closed circle.

For a standard fishing hook, offset worm hook, or Jighead hook:

- The silhouette must retain an open `J` shape.
- The eye, shank, bend, gap, point, and barb must be visually distinct.
- The gap must remain open enough that the point does not visually close against the shank.
- An offset worm hook must show the offset near the eye without distorting the main bend or gap.
- A Jighead must show the weighted head and an attached open-`J` hook with a clear point/barb relationship.
- Near-circular, closed-loop, or ambiguous hook silhouettes fail validation even when they look polished.

# Knot Media

Common fishing knots are approved future instructional-media work.

Prefer mobile-readable step-by-step diagrams.

Use:

- Numbered steps
- Clear line paths
- Direction arrows
- Short in-image instructions
- Final knot state
- Clear distinction between standing line, tag end, hook/eye, and loops
- Color coding only when useful and accessible

Static diagrams must remain sufficient even if animation is added later.

Knot illustrations should be designed as reusable canonical instructional assets so future Rig pages can reference the appropriate Knot without duplicating the full tying sequence inside each Rig.

The exact initial knot set and Rig-to-Knot relationship model remain open until the Knots segment.

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
3. Original authoritative project diagrams
4. Other licensed sources when they add meaningful accuracy
5. Discovery sources only to trace the original source
6. Original Companion SVG illustration
7. AI-generated or enhanced imagery only when appropriate and independently verified

Pinterest and similar sites are discovery sources, not production sources.

Do not hotlink production assets.

# Formats

Prefer:

- SVG for diagrams, labels, line art, instructional plates
- Optimized WebP for photographs and catalog-style Tackle recognition images, including rasterized vector-style assets

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

Retain:

- License status
- License type
- Creator
- Source URL
- License URL
- Attribution requirement
- Commercial-use permission
- Modification permission
- Review date

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
- Correct path
- Appropriate alt text
- Complete licensing metadata

## Rig

- Correct component order
- Correct hook geometry
- Correct bait relationship
- Correct weight orientation
- Correct sequence
- External visual destination opens directly to the useful visual or the shortest trustworthy path to it when practical

## Fish

- Species identity independently verified
- Diagnostic traits visible
- Source and license verified
- No generated approximation used as primary identification evidence

## Tackle

- Beginner can recognize the item without relying on the caption
- Key geometry is clear and the object is not visually ambiguous
- Small accessories are shown in an identifiable configuration rather than as an unexplained shape
- Standard, offset, and Jighead hooks retain an open `J` profile with visible eye, shank, bend, gap, point, and barb
- Usage relationships are accurate
- No artificial drop shadow is baked into the asset
- Edge quality is clean at normal phone display size
- Current production assets use the approved 640 × 440 neutral-background treatment
- Transparency, if exceptionally approved later, does not introduce halos, jagged edges, or visible fringing

# Contextual Tackle Image Rule

Tackle images are recognition assistance, not a default photo gallery.

- Do not show Tackle thumbnails by default in Rig `What You Need` lists.
- Display the component as `Name ⓘ`.
- Open the approved Tackle image and reference information only when the user selects that contextual help control.
- The same principle applies to future My Tackle inventory records: imagery supports identification, while ownership data remains the primary content.
