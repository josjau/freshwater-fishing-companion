# Freshwater Fishing Companion — Fish Guide Production Wave 4: Sunfish & Crappie

**Document:** FISH-WAVE-4-SUNFISH-CRAPPIE.md  
**Document Revision:** 0.1.3  
**Document Status:** Active Planning / Session-Preservation Record  
**Implementation Status:** Planning only — production not started; package lock pending  
**Decision Baseline:** D016, D051, D056–D061  
**Last Updated:** 2026-08-24

# Purpose and Boundary

This is the active planning record for Fish Guide Production Wave 4 — Sunfish & Crappie. It preserves the proposed nine-Fish package, comparison set, media research, unresolved licensing gate, and exact continuation point without relying on chat history.

This file does **not** authorize production writes and does **not** convert discussion into an approved lock. GitHub `main` remains authoritative for committed source and formally reconciled documentation. Production/user-facing work still requires the normal Drive working-package path and explicit production-write approval.

# Proposed Wave 4 Scope

All nine Fish use `categoryId: "sunfish-crappie"` and family `Centrarchidae`:

1. Bluegill — `Lepomis macrochirus`
2. Redear Sunfish — `Lepomis microlophus`
3. Green Sunfish — `Lepomis cyanellus`
4. Longear Sunfish — `Lepomis megalotis`
5. Northern Rock Bass — `Ambloplites rupestris`
6. Warmouth — `Lepomis gulosus`
7. Ozark Bass — `Ambloplites constellatus`
8. Black Crappie — `Pomoxis nigromaculatus`
9. White Crappie — `Pomoxis annularis`

The proposed aliases are:

- Redear Sunfish — Shellcracker
- Green Sunfish — Black Perch
- Longear Sunfish — Creek Perch
- Northern Rock Bass — Rock Bass; Goggle-Eye
- Ozark Bass — Goggle-Eye
- White Crappie — Papermouth; Bachelor Perch

Bluegill, Warmouth, and Black Crappie have no proposed alias.

# Proposed Identification Direction

- **Bluegill:** small mouth; long pointed pectoral; black opercular flap; rear soft-dorsal blotch; blue chin/lower gill cover.
- **Redear Sunfish:** small mouth; deep body; black opercular flap with orange/red rear spot; golden/olive sides often with bars.
- **Green Sunfish:** large mouth; comparatively elongated/thick body; blue facial markings; pale/salmon fin margins; dark dorsal blotch.
- **Longear Sunfish:** elongated black opercular flap, often white-bordered; rounded pectoral; moderate mouth.
- **Northern Rock Bass:** thick body; large mouth/eyes; 12 dorsal spines; 6 anal spines; side spots in parallel rows.
- **Warmouth:** large mouth; dark lines radiating from eye; 10 dorsal spines; 3 anal spines. The 3-versus-6 anal-spine distinction is a strong structural separation from Northern Rock Bass.
- **Ozark Bass:** irregular/freckled side pattern rather than Northern Rock Bass's parallel rows; comparatively slender and typically smaller-eyed.
- **Black Crappie:** irregular speckles/blotches rather than vertical bars; 7–8 dorsal spines.
- **White Crappie:** 5–10 vertical bars; usually 6 dorsal spines.

The package received a source/architecture review during the 2026-08-24 session and no structural conflict was found, but the user has not yet given the explicit package-lock confirmation. Treat these values as **ready for lock review**, not as already approved production truth.

# Version Metadata Proposal

The four existing legacy records preserve `createdVersion: "0.1.0"` and move `lastModifiedVersion` to `"0.6.0"`:

- Bluegill
- Redear Sunfish
- Black Crappie
- White Crappie

The five new production records use `"0.6.0"` for both `createdVersion` and `lastModifiedVersion`.

This matches the staged Fish migration pattern already present on `main`, but remains part of the pending Wave 4 lock.

# Proposed Identification Relationships

Exactly five relationships are proposed:

1. `bluegill-vs-redear-sunfish`
2. `bluegill-vs-green-sunfish`
3. `northern-rock-bass-vs-warmouth`
4. `northern-rock-bass-vs-ozark-bass`
5. `black-crappie-vs-white-crappie`

These IDs follow the FISH-001 deterministic lexicographic rule. Adding these five to the 15 currently implemented relationships would complete the locked 20-pair Version 1 identification graph.

The strongest proposed pairwise structural distinctions are:

- Warmouth: 3 anal spines vs Northern Rock Bass: 6 anal spines.
- Black Crappie: 7–8 dorsal spines vs White Crappie: usually 6 dorsal spines.

The user has not yet explicitly locked this five-pair package.

# Primary-Media Direction

The user explicitly prefers a visually coherent illustration set for Wave 4 and does **not** want eight Fish presented as scientific illustrations with Ozark Bass alone presented as a live/specimen photograph if a defensible illustration path exists.

The intended illustration family is Duane Raver / USFWS-style field-guide artwork. Current preferred direction is Raver artwork for:

- Bluegill
- Redear Sunfish
- Green Sunfish
- Longear Sunfish
- Northern Rock Bass
- Warmouth
- Black Crappie
- White Crappie

Every exact file still must pass the `MEDIA_GUIDE.md` acquisition, exact-byte, creator, rights, dimensions/hash, transformation, and anatomy-preservation gates before production attachment. Do not infer Public Domain from Raver credit or government-site hosting alone.

# Ozark Bass Illustration Gate

## Search conclusion

Repeated focused searches on 2026-08-24 did **not** locate an exact-species Ozark Bass (`Ambloplites constellatus`) scientific illustration that is clearly Public Domain, CC0, or Creative Commons and suitable for production under the Fish identification-media standard.

This scarcity is biologically/historically important: Ozark Bass was not formally distinguished from Northern Rock Bass until its 1977 description. Older artwork labeled only `Rock Bass` or `Ambloplites rupestris` cannot be reassigned to Ozark Bass without exact specimen/locality evidence.

## Preferred permission candidate — Al Agnew

Al Agnew has a species-specific scientific illustration of Ozark Bass. His accompanying article states that he created scientific illustrations of the three Ozark rock-bass species from photographs of fish he caught and modified them where necessary to show diagnostic color/structure. His Ozark Bass description emphasizes the freckled/scattered side pattern, largely unmarked anal fin without a black margin, and comparatively slender body.

Source article:
https://riversandart.blogspot.com/2020/04/growing-up-in-missouri-ozarks-and-being.html

Identification suitability: **strong candidate**.  
Visual consistency with the Raver set: **strong candidate**.  
Reuse status: **permission/license required**.

Agnew's official site treats his artwork as licensed commercial art and directs non-apparel licensing inquiries to MHS Licensing. No open license was found.

Official licensing page:
https://www.alagnew.com/licensing.html

Current permission contact for non-apparel licensing:

- MHS Licensing — `marty@mhslicensing.com`

The intended permission request must explicitly cover application/website display, responsive resize/crop, non-Fish-background isolation to transparency, WebP conversion, attribution requirements, and public GitHub-repository distribution. A highest-resolution clean source file should also be requested because the currently supplied reference copy is only 320 × 213.

## Alternate permission candidate — *The Fishes of Missouri*

USGS published an Ozark Plateau report containing an Ozark Bass illustration sourced from *The Fishes of Missouri*. The USGS report explicitly states that the illustrations are copyright 1997 by the Conservation Commission of the State of Missouri and were **used with permission**.

USGS report:
https://pubs.usgs.gov/wri/wri98-4155/WRIR98-4155.pdf

Missouri Department of Conservation terms state that site text/images/videos may not be reproduced without written permission and direct users to request permission for specific images.

MDC terms:
https://mdc.mo.gov/terms-use

Therefore this is a legitimate exact-species illustration path, but it is **not currently cleared for production**.

## Safe fallback — USFWS photograph

USFWS has an exact-species Matthew Patterson image of `Ambloplites constellatus` from its NCTC Freshwater Fishes Teaching Collection. The FWS record marks it Public Domain.

FWS record:
https://www.fws.gov/media/ambloplites-constellatus

Wikimedia Commons independently records the same Matthew Patterson/USFWS image as a United States federal-government work in the Public Domain:
https://commons.wikimedia.org/wiki/File:Ambloplites_constellatus_FWS_20925.jpg

The original is 4288 × 2848. This remains the identification-safe, rights-safe fallback. It is **not the user's preferred Wave 4 primary selection** because it would leave Ozark Bass as the lone photograph in an otherwise illustrated category.

# Additional Rights-Safe Media Sweep — 2026-08-24

Additional sweeps covered USFWS, USGS, National Park Service/Buffalo National River, Wikimedia Commons, FishBase, public scientific repositories, public-agency Fish pages, and image-search results. The goal was to find an exact-species illustration with fewer rights restrictions than the Al Agnew candidate.

## Northern Rock Bass — new Public Domain illustration alternative

A defensible rights-safe illustration alternative was located for Northern Rock Bass (`Ambloplites rupestris`):

- **Artist:** Ted Walke
- **Commission/source:** Pennsylvania Fish & Boat Commission
- **Commons file:** `Rock Bass.jpg`
- **Commons dimensions:** 359 × 178
- **Commons rights:** Public Domain; the file page states that the copyright holder released the work into the Public Domain worldwide
- **Commons record:** https://commons.wikimedia.org/wiki/File:Rock_Bass.jpg
- **Independent reuse confirmation:** Smithsonian NEMESIS identifies the same Ted Walke/Pennsylvania Fish & Boat Commission illustration as Public Domain: https://invasions.si.edu/nemesis/species_summary/168097

This candidate is materially stronger on rights provenance than the currently uploaded `Rock_bass_R.png`, whose exact hosted-file rights remain unverified. It is **not selected** because its available Commons resolution is much smaller and its visual treatment differs somewhat from the Raver set. Preserve it as a no-permission fallback.

The uploaded Raver Rock Bass candidate remains preferred visually if its exact source and rights can be verified. The IGFA-hosted Raver Rock Bass image is **not** a safe substitute because the displayed image is marked as IGFA property; artist identity alone does not establish reuse rights.

## Ozark Bass — open-license/photo alternatives found, but no open illustration

| Candidate | Rights | Visual/type assessment | Status |
|---|---|---|---|
| Matthew Patterson/USFWS teaching-collection specimen, 4288 × 2848 | Public Domain | Exact species; clean specimen photograph | Rights-safe fallback; not preferred because it breaks the illustration set |
| James River, Missouri 2018 angler-held Ozark Bass, 2932 × 2933 | CC BY-SA 4.0 | Exact species photo; fish is being held; share-alike/attribution obligations | Reusable with obligations but visually inferior for FCC |
| M. Duren FishBase Ozark Bass photo | CC BY on FishBase listing | Exact-species photograph; individual asset/license should still be verified before use | Possible photo fallback; no advantage over FWS Public Domain specimen |
| Jeremy V. Jordan Ozark Bass photo | CC BY-ND 4.0 | Exact-species photograph | Reject for FCC processing because NoDerivatives conflicts with background isolation/crop/derivative asset workflow |
| `Ambloplites constellatus.jpg`, Wikimedia Commons/Buffalo National River category, 2048 × 1354 | Exact file-page license could not be retrieved during this sweep | Appears in a National Park Service-related Commons category | **Not cleared**; category membership/government context is not sufficient rights evidence |
| Joseph R. Tomelleri Ozark Bass drawing used in a Buffalo National River/NPS brochure | Copyrighted/licensed artwork | Excellent scientific illustration and visual fit | **Not licensing-free**; Tomelleri's official site states that reproduction rights to his scientific fish drawings are licensed |
| User-supplied `ozark-bass.png`, 800 × 533 | Source page now identified as onWater; no open reuse license established | Transparent exact-species-looking asset | **Source known / rights not cleared**; onWater's current Terms treat site images/photographs/content as protected materials and no file-specific open license has been located |

Tomelleri rights reference:
https://www.americanfishes.com/en/

His official site explicitly describes licensing of his fish drawings for ID guides, books, websites, signage, clothing, and other reproduction uses. Therefore an NPS or other government use of Tomelleri artwork must not be interpreted as Public Domain without a file-specific grant.

Wikimedia's current `Ambloplites constellatus` category contains only three files: the Public Domain FWS Patterson photograph, the unresolved `Ambloplites constellatus.jpg`, and the James River 2018 photograph. It does not expose a rights-cleared scientific illustration:
https://commons.wikimedia.org/wiki/Category:Ambloplites_constellatus

### onWater source provenance for uploaded `ozark-bass.png`

The user supplied the exact source page for the uploaded transparent Ozark Bass asset:

- onWater — **Ozark Bass: Fishing Tips, Spots & Regulations**
- https://www.onwaterapp.com/us/species/ozark-bass

The source page itself is now known, which closes the provenance-location gap for this uploaded file. It does **not** close the reuse-rights gate. onWater's published Terms describe website/app images, photographs, and other content as protected materials, and no Public Domain, Creative Commons, or other file-specific reuse license for this Ozark Bass image has been identified:

- https://www.onwaterapp.com/terms-and-conditions

Therefore `ozark-bass.png` remains **not production-cleared**. Do not infer that onWater owns the underlying artwork, that the image is Public Domain, or that a transparent copy may be redistributed/modified merely because it appears on the onWater species page. If this candidate is reconsidered, first identify its credited/upstream creator or obtain explicit reuse permission from onWater/the rights holder.

**Sweep result:** no exact-species Ozark Bass illustration was found that improves on Al Agnew while also eliminating the licensing/permission gate. The Al Agnew illustration therefore remains the preferred illustration candidate, with the Patterson/USFWS Public Domain specimen photo retained as the safest fallback.

# Current Media Status

- Illustration direction for seven Raver/USFWS Fish: identified/preferred; exact production files still require per-asset acquisition and rights verification.
- Northern Rock Bass: uploaded Raver candidate remains visually preferred but exact-file rights are unresolved; Ted Walke/Pennsylvania Fish & Boat Commission Public Domain illustration is now a documented no-permission fallback.
- Ozark Bass: exact-species illustration exists through Al Agnew, but no open-license illustration candidate was found after repeated sweeps.
- onWater Ozark Bass candidate: source page identified; reuse rights remain unverified and the file is not production-cleared.
- Preferred Ozark path: seek permission/license for the Al Agnew illustration.
- Alternate Ozark permission path: request permission from Missouri Department of Conservation for the *Fishes of Missouri* illustration.
- Safe Ozark fallback: Matthew Patterson/USFWS Public Domain photograph, retained but not selected as preferred primary media.
- No uploaded image has been written to production as part of planning/media intake.

# Media Intake Checkpoint — 2026-08-24

The user supplied eleven local image files for Wave 4 media review. Originals are preserved unchanged. Exact file dimensions and SHA-256 values recorded at intake are:

| Intended Fish / role | Supplied file | Dimensions | SHA-256 |
|---|---|---:|---|
| White Crappie primary candidate | `2810.jpg` | 1200 × 765 | `f4d1211090cd8dc71fb06591f8572d8020a3ae097fef030fbc0f54cbdd9daa53` |
| Redear Sunfish primary candidate | `25321.jpg` | 1200 × 751 | `acf6b5c112ca9dc3ca8c3c2d51ada830704185072170bdab6c3b3616df1e14bb` |
| Longear Sunfish primary candidate | `25322.jpg` | 1200 × 729 | `64082d75527142ca15f03a828f946800b8991c7623fe117459112ee88efbd505` |
| Green Sunfish primary candidate | `25325.jpg` | 1200 × 789 | `f54acc33200e16a158357677da52a26f0abfaf821914fa60c95ef5d6ce406e00` |
| Black Crappie primary candidate | `27685.jpg` | 1200 × 783 | `426e84f5c5a4caee0d1de0dc0a6bd6a4df0c646102cd99c346134e98a3867b49` |
| Bluegill primary candidate | `27687.jpg` | 1200 × 791 | `47549c1ed908523d2f46befcde66ade4a6541efea676535bee74fb1c094c41af` |
| Warmouth primary candidate | `27689.jpg` | 1200 × 701 | `fb7866701c329d72e54b2f9a6751f5d3a3ef4c5897386dad84983dff2fca0af5` |
| Ozark Bass — Al Agnew reference candidate | `ozark bass.jpg` | 320 × 213 | `fd229781d3fe6fa0614d9ac5c29a88f32eedf7778baad773fbdc2ef15594e95f` |
| Northern Rock Bass — Al Agnew alternate/reference | `rock bass.jpg` | 320 × 240 | `ce978bce4063ebf2e1e62600ce3d35cee12b6cc3c29828184129d97e69a18e06` |
| Northern Rock Bass — Raver candidate | `Rock_bass_R.png` | 1400 × 934 | `cd415a2dcbe6cc3a57394906b3d43b1d460d60022658738072eefc11a7c51d1d` |
| Ozark Bass alternate candidate | `ozark-bass.png` | 800 × 533 | `18e2ab2016820c6cdfb2af8c233db5f7a8f6644e6c44d606f673d9baac604886` |

Technical intake findings:

- `Rock_bass_R.png` is RGBA but its alpha channel is fully opaque; it still contains a background and would require background-only isolation if selected.
- `ozark-bass.png` contains genuine transparency. Its source page is now identified as onWater's Ozark Bass species page, but its creator/upstream provenance and redistribution/modification rights are not established. It remains **not production-cleared**.
- The seven supplied 1200-pixel JPEGs match the expected USFWS/Raver illustration family by filename/dimensions and remain subject to exact-source/rights verification before production processing.
- No generative image reconstruction is authorized for Fish isolation. Background processing must preserve source anatomy, proportions, markings, fin rays, extremities, and visible source color.

# Production Boundary

No Wave 4 production source/data/media write is authorized by this planning record.

Before user-facing implementation:

1. Obtain explicit user lock of the Fish data/versioning/comparison package.
2. Resolve the Ozark Bass primary-media selection and reuse rights.
3. Re-verify exact originals and rights for the complete nine-Fish media set under `MEDIA_GUIDE.md`.
4. Ensure Google Drive `Working Source/Current` has been refreshed from current GitHub `main` before it is used as the Wave 4 working baseline.
5. Obtain explicit production-write authorization for the intended Wave 4 scope.

# Exact Resume Point

1. Re-fetch GitHub `main` and read this workstream plus `WORKING_STATE.md`, `HANDOFF.md`, `ACTIVE-CHANGE-LEDGER.md`, `DEVELOPMENT_WORKFLOW.md`, `data-model/02-FISH.md`, `data-model/09-RELATIONSHIPS.md`, `FISH_REFERENCE_SOURCES.md`, and `MEDIA_GUIDE.md`.
2. Resolve the **Ozark Bass illustration permission decision**: first choice Al Agnew through MHS Licensing; alternate MDC/*The Fishes of Missouri*; Public Domain USFWS photograph remains the safe fallback but is not preferred. The onWater candidate has a known source page but remains rights-uncleared unless its upstream creator/license is identified or permission is obtained.
3. Verify exact source/rights for the uploaded Northern Rock Bass Raver candidate. If that cannot be cleared, retain the Ted Walke/Pennsylvania Fish & Boat Commission Public Domain illustration as the no-permission illustration fallback.
4. Re-verify exact source/rights for every supplied Raver JPEG before processing.
5. Obtain the user's explicit Wave 4 lock confirmation for the proposed nine Fish, version treatment, five comparison relationships, and final media-source direction.
6. Refresh/reconcile Drive `Working Source/Current` to the then-current GitHub `main` before any user-facing write.
7. Only after those gates close, proceed to exact media processing and production implementation through the normal Drive review ZIP → local/browser validation → explicit commit/push authorization workflow.
