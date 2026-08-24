# Freshwater Fishing Companion — Fish Guide Production Wave 4: Sunfish & Crappie

**Document:** FISH-WAVE-4-SUNFISH-CRAPPIE.md  
**Document Revision:** 0.1.0  
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
- No image has been downloaded, processed, attached, or written to production as part of this planning session.

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
2. Resolve the **Ozark Bass illustration permission decision**: first choice Al Agnew; alternate MDC/*The Fishes of Missouri*; Public Domain FWS photograph remains the safe fallback but is not preferred.
3. Obtain the user's explicit Wave 4 lock confirmation for the proposed nine Fish, version treatment, five comparison relationships, and final media-source direction.
4. Refresh/reconcile Drive `Working Source/Current` to the then-current GitHub `main` before any user-facing write.
5. Only after those gates close, proceed to exact media acquisition/processing and production implementation through the normal Drive review ZIP → local/browser validation → explicit commit/push authorization workflow.
