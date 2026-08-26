# Freshwater Fishing Companion — Decisions: Media and Asset Standards

**Document:** decisions/media.md  
**Document Status:** Approved  
**Role:** Canonical durable decision bodies for this ownership domain  
**Migration Baseline:** `af3bffb9995d56f8b9e47236bbadfa481d88cc34`  
**Last Updated:** 2026-08-25

# Purpose

This file owns the full decision bodies listed below. Decision IDs are permanent and remain stable across the documentation decomposition. `../DECISIONS.md` is the compact canonical index.

# D015 – Unified Field-Guide Visual System

Fish, Rigs, Tackle, Knots, Lures, and Techniques should share one modern field-guide visual language while using media formats appropriate to their accuracy requirements.

Detailed standards: `MEDIA_GUIDE.md`.
# D016 – Identification-Safe Fish Media

Fish identification is accuracy-critical.

Primary Fish identification media must use verified photography or verified scientific illustration.

AI-generated or approximate photorealistic Fish imagery must not be used as primary identification evidence.
# D017 – Verified Rig References and Text Instructions

Rig accuracy takes priority over having locally generated completed-rig imagery.

Rig detail pages use text build instructions as the authoritative assembly method. Completed-rig visuals are provided only when a technically verified image can be reused legally; otherwise the page links to verified external fishing references using `↗`.

When an external visual reference is used, prefer a stable direct visual destination or dedicated media/file page when available and appropriate, rather than forcing the user through a long article to locate the relevant Rig image. This is external reference navigation, not permission to hotlink third-party media into the production UI.

Generated completed-rig images are not used by default because small orientation and connection errors can teach incorrect assembly.

The contextual `ⓘ` convention remains reserved for in-app information and must not be reused to imply external navigation.

# Reference-Link Semantics

External verified reference links use `↗` and open in a new tab. Contextual `ⓘ` remains in-app only.
# D018 – Current Rig Media Policy

Current Rig detail pages do not bundle generated completed-Rig or build-step imagery. Assembly is taught with canonical text steps. `What You Need` is text-first; selecting `Name ⓘ` opens the approved Tackle recognition image and contextual reference. Completed-Rig visual confirmation is provided by a technically verified and legally reusable local image when one is approved; otherwise use the most direct stable verified external visual reference available, with a conventional authoritative article reference as fallback.
# D019 – Tackle Reference Production Format

The approved catalog-style Tackle reference treatment uses optimized WebP production assets. It may use precise vector-style illustration or semi-photorealistic rendering when the object geometry is anchored to an approved real-world or authoritative reference. Recognition quality, clean object edges, and technically faithful geometry take priority over mandatory alpha transparency.

Alpha transparency is optional rather than required. Use it only when the object can be isolated with clean edges at normal mobile display sizes. A restrained neutral background is acceptable when it materially improves edge quality and recognition.

The active production set uses 640 × 440 neutral-background rasterized illustrations without alpha transparency or artificial cast shadows.

Tackle reference assets must not contain artificial baked-in drop shadows or other effects that make the object look detached from the application surface. If a shadow exists in a source rendering, it must be removed unless it is necessary to represent real object geometry.

SVG remains preferred for genuine vector diagrams, knots, icons, and instructional line art.
# D034 – Production Asset Directory Discipline

Active production asset directories contain current production assets or explicitly approved reusable production assets.

Historical boards, previews, experiments, and superseded design references with independent design-lineage, geometry, licensing, provenance, or reconstruction value are moved to an appropriate location under the canonical repository-root `archive/` rather than left in production asset directories. Unreferenced does not automatically mean delete, but retained historical material must not masquerade as production media.

The existing archived `tackle-reference-board.webp` and `what-you-need-thumbnail-preview.webp` remain historical design/reference artifacts under the repository archive.

Permanent rule: **production asset directories contain production assets; historical design/reference artifacts with continuing value belong under the canonical repository archive.**
# D045 – No Generated Rig Assembly Imagery

Generative-image systems are not approved for finished-Rig diagrams, build-step illustrations, terminal-tackle connection diagrams, or hook-and-bait geometry.

Repeated tests produced visually plausible but mechanically unreliable results, including incorrect component order, line routing, hook geometry, bait seating, and orientation. These defects can teach an unsafe or ineffective build even when the image appears polished.

Rig assembly remains text-authoritative. D049 governs the current completed-Rig visual-confirmation hierarchy, including officially permitted tutorial embeds. Generated finished-Rig/build-step imagery remains prohibited regardless of presentation channel.

Original project diagrams may be used only when manually constructed from verified references and validated component-by-component. This prohibition does not automatically extend to isolated Tackle recognition art, which may use original illustration when its single-object geometry is anchored to a real reference and independently checked.
# D049 – Verified Rig Tutorial Embed Policy

Completed-Rig visual confirmation follows this preference order:

1. technically verified and legally reusable local completed-Rig media,
2. a verified tutorial video embedded through the platform's official permitted player,
3. a direct verified external visual destination,
4. an authoritative external instructional reference,
5. text-only instructions when no trustworthy visual exists.

An embedded tutorial does not transfer ownership of the video to the project. The application must not download, rehost, alter, extract frames from, or otherwise republish third-party video content without separate reuse rights.

Embedded tutorial requirements:

- use the platform's official embed mechanism,
- use only public/available videos whose publisher/platform permits embedding,
- preserve the platform player and attribution,
- load on user request rather than preloading third-party players across the Rig library,
- do not autoplay,
- remain responsive and usable at phone widths,
- provide a clear external-source fallback,
- use privacy-enhanced embedding where the platform provides an official mode.

For YouTube, approved implementations use the official embedded player and privacy-enhanced `youtube-nocookie.com` domain. The browser must be allowed to provide the normal HTTP referrer required by YouTube playback.

The Texas Rig trial passed and the pattern has now been validated across the completed 20-Rig library. D053 adds the permanent build-first tutorial-selection and completeness-audit standard.

Permanent principle: **prefer trustworthy in-context visual instruction without copying third-party media into the repository.**
# D053 – Rig Media Completeness and Tutorial Audit

Every Rig that enters a completed learning tier receives a media-completeness audit as part of the same build segment.

The audit requires:

- authoritative text assembly remains mandatory and authoritative,
- every Rig receives a tutorial-source search,
- a technically correct tutorial is included when a suitable public source can be independently verified and is compatible with D049,
- the primary embedded tutorial is build-first: correct physical assembly/configuration is the main purpose,
- concise/direct videos are preferred when technical completeness and source quality are otherwise adequate,
- component order, knots/connections, leader placement, weight placement, bait/hook placement, and final assembled configuration take priority over fishing technique,
- technique/retrieve/presentation/strategy may be present but must not dominate,
- no arbitrary hard duration threshold is required,
- tutorial players remain lazy-loaded, use `youtube-nocookie.com`, do not autoplay, preserve platform attribution/controls, and retain a `Watch on YouTube ↗` fallback,
- if no suitable tutorial is found, use the next trustworthy D049 fallback instead of adding a weak, marketing-heavy, or technically mismatched video,
- every canonical Tackle concept used by a completed Rig provides accurate contextual recognition help and normally has an approved recognition-media asset,
- newly introduced canonical Tackle concepts ship with their recognition media in the same tier build,
- generated completed-Rig/build-step imagery remains prohibited under D045,
- changed tutorial records receive final in-app runtime validation after implementation.

Permanent principle:

> Tutorial preferred, trustworthy external visual/reference as backup, authoritative text always required.
