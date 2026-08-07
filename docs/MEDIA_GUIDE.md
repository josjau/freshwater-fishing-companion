# Freshwater Fishing Companion

**Document:** MEDIA_GUIDE.md  
**Version:** 1.0.0  
**Status:** Approved  
**Last Updated:** 2026-08-07

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
2. A verified external reference link to an authoritative fishing source when local reuse rights are unclear or unavailable.
3. Text-only instructions if no trustworthy visual reference is available.

Current Rig pages use verified external reference links and text build instructions instead of generated Rig diagrams.

## Rig Page Standard

A Rig detail page should normally present:

- Rig name and summary
- Best For
- Good Conditions
- Verified Rig Examples using external-link semantics (`↗`)
- What You Need with contextual `Name ⓘ` Tackle references
- Numbered text build instructions
- Setup Notes
- Common Mistakes
- Safety
- Check My Tackle

Do not repeat the same instruction in multiple visual and text sections without a demonstrated accessibility need.

## External Reference Semantics

The `ⓘ` symbol remains reserved for contextual information that does not leave the current page.

External Rig references use `↗` and open in a new tab.

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

Do not use generated or hand-drawn Rig geometry unless it survives direct comparison with a real reference image.

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

- Warm cream/white background
- Clean catalog-like presentation
- Semi-photorealistic object rendering
- Forest Journal-compatible green/earth accents
- Consistent lighting and scale
- Minimal decorative branding

Before creating a Tackle illustration, use a real photograph, manufacturer product image, or authoritative technical image as the geometry baseline. Do not invent hook, float, swivel, sinker, stop, or connector geometry from memory.

For mechanically sensitive items, compare the final illustration back to the real baseline before approval.

A single approved Tackle reference board may be used as the main Tackle Guide visual while canonical item cards and contextual popovers provide the authoritative text.

For the approved semi-photorealistic Tackle style, optimized WebP is the preferred production format. SVG remains preferred for true vector diagrams, icons, knots, and instructional line art. Do not convert semi-photorealistic Tackle art to SVG merely for consistency when doing so increases complexity or file size without improving field usability.

# Knot Media

Prefer mobile-readable step-by-step diagrams.

Use:

- Numbered steps
- Clear line paths
- Direction arrows
- Short in-image instructions
- Final knot state
- Color coding only when useful and accessible

Static diagrams must remain sufficient even if animation is added later.

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
- Optimized WebP for photographs

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
- Primary detail media loads with the selected page.
- Avoid preloading large libraries without a demonstrated benefit.

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

## Fish

- Species identity independently verified
- Diagnostic traits visible
- Source and license verified
- No generated approximation used as primary identification evidence

## Tackle

- Beginner can recognize the item
- Key geometry is clear
- Usage relationships are accurate
