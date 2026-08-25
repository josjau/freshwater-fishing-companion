# Freshwater Fishing Companion — Fish Guide Production Wave 4: Sunfish & Crappie

**Document:** FISH-WAVE-4-SUNFISH-CRAPPIE.md  
**Document Revision:** 0.1.1  
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

A final focused search on 2026-08-24 did **not** locate an exact-species Ozark Bass (`Ambloplites constellatus`) scientific illustration that is clearly Public Domain, CC0, or Creative Commons and suitable for production under the Fish identification-media standard.

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

This remains the identification-safe, rights-safe fallback. It is **not the user's preferred Wave 4 primary selection** because it would leave Ozark Bass as the lone photograph in an otherwise illustrated category.

# Current Media Status

- Illustration direction for eight Fish: identified/preferred; exact production files still require per-asset acquisition and rights verification.
- Ozark Bass: exact-species illustration exists, but no open-license candidate was found.
- Preferred Ozark path: seek permission/license for the Al Agnew illustration.
- Alternate Ozark permission path: request permission from Missouri Department of Conservation for the *Fishes of Missouri* illustration.
- Safe fallback: Matthew Patterson/USFWS Public Domain photograph, retained but not selected as preferred primary media.
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
- `ozark-bass.png` contains genuine transparency, but its exact creator/source/reuse rights are not yet established. It is **not production-cleared** and must not silently replace the Al Agnew candidate.
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
2. Resolve the **Ozark Bass illustration permission decision**: first choice Al Agnew through MHS Licensing; alternate MDC/*The Fishes of Missouri*; Public Domain USFWS photograph remains the safe fallback but is not preferred.
3. Verify exact source/rights for the Northern Rock Bass Raver candidate and for every supplied Raver JPEG before processing.
4. Obtain the user's explicit Wave 4 lock confirmation for the proposed nine Fish, version treatment, five comparison relationships, and final media-source direction.
5. Refresh/reconcile Drive `Working Source/Current` to the then-current GitHub `main` before any user-facing write.
6. Only after those gates close, proceed to exact media processing and production implementation through the normal Drive review ZIP → local/browser validation → explicit commit/push authorization workflow.
