# Freshwater Fishing Companion — Fish Guide Production Wave 4: Sunfish & Crappie

**Document:** FISH-WAVE-4-SUNFISH-CRAPPIE.md  
**Document Revision:** 0.1.4  
**Document Status:** Active Planning / Session-Preservation Record  
**Implementation Status:** Planning only — production not started; package lock pending  
**Decision Baseline:** D016, D051, D056–D061  
**Last Updated:** 2026-08-24

# Purpose and Boundary

This is the active planning record for Fish Guide Production Wave 4 — Sunfish & Crappie. It preserves the proposed nine-Fish package, comparison set, media research, approved one-time media exceptions, and exact continuation point without relying on chat history.

This file does **not** authorize production writes and does **not** convert discussion into an approved package lock. GitHub `main` remains authoritative for committed source and formally reconciled documentation. Production/user-facing work still requires the normal Drive working-package path and explicit production-write approval.

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

The user wants a visually coherent nine-illustration Wave 4 set rather than mixing eight illustrations with one isolated specimen photograph.

Current selected direction:

- **Bluegill** — Duane Raver / USFWS Public Domain illustration
- **Redear Sunfish** — Duane Raver / USFWS Public Domain illustration
- **Green Sunfish** — Duane Raver / USFWS Public Domain illustration
- **Longear Sunfish** — Duane Raver / USFWS Public Domain illustration
- **Warmouth** — Duane Raver / USFWS Public Domain illustration
- **Black Crappie** — Duane Raver / USFWS Public Domain illustration
- **White Crappie** — Duane Raver / USFWS Public Domain illustration
- **Northern Rock Bass** — user-approved generated illustration under a one-time exception
- **Ozark Bass** — user-approved generated illustration under a one-time exception

The seven selected Raver files have individually verified USFWS Public Domain source records. This does **not** establish that every work by Duane Raver is Public Domain; rights remain file-specific.

The two generated-Fish selections are explicit, narrow exceptions to the standing `MEDIA_GUIDE.md` rule that AI-generated or approximate photorealistic Fish imagery must not normally serve as primary identification evidence. The exceptions apply only to the exact approved Northern Rock Bass and Ozark Bass assets and do not change the general standard or create precedent for other Fish.

# Ozark Bass Media Resolution

Repeated focused searches on 2026-08-24 did not locate an exact-species Ozark Bass (`Ambloplites constellatus`) scientific illustration that was both visually suitable and clearly Public Domain/CC0/permissively Creative Commons.

Historical alternatives investigated:

- Al Agnew exact-species scientific illustration — visually strong; permission/license required.
- *The Fishes of Missouri* illustration — exact species; Missouri Conservation Commission permission required.
- Matthew Patterson/USFWS exact-species teaching-collection photograph — Public Domain; rights-safe but visually inconsistent with the illustration set.
- onWater transparent Ozark Bass asset — source page identified, but redistribution/modification rights not cleared.
- Joseph R. Tomelleri Ozark Bass artwork — excellent visual fit, but licensed/copyrighted.

The user then approved a generated Ozark Bass illustration with a redder eye and irregular/freckled spotting as a **one-time exception** to the Fish-media generation prohibition.

Approved Ozark Bass generated asset:

- Dimensions: **1535 × 1024**
- SHA-256: `d67c5933f43381a243659e5031d87dbe3d2db460af002fa5898de03a1598073f`
- Status: **selected for Wave 4 under one-time exception**

The Ozark Bass source-selection/licensing gate is closed.

# Northern Rock Bass Media Resolution

A Duane Raver Northern Rock Bass candidate was supplied as `Rock_bass_R.png` at 1400 × 934. It visually matched the desired field-guide style, but the exact hosted file could not be tied to a file-specific Public Domain/reuse record with the same confidence as the seven selected USFWS Raver files.

A rights-safe fallback was also located:

- **Artist:** Ted Walke
- **Commission/source:** Pennsylvania Fish & Boat Commission
- **Commons file:** `Rock Bass.jpg`
- **Commons dimensions:** 359 × 178
- **Commons rights:** Public Domain
- **Commons record:** https://commons.wikimedia.org/wiki/File:Rock_Bass.jpg
- **Independent reuse confirmation:** https://invasions.si.edu/nemesis/species_summary/168097

The Walke illustration was not selected because its available resolution and visual treatment were weaker than the preferred category presentation.

The user supplied onWater's Rock Bass page and a corresponding visual reference showing the desired darker dorsal coloration, gold-toned sides, reddish eye, and small rectangular-scale/black-beading pattern. A generated Northern Rock Bass candidate was iterated against that visual direction. The user then explicitly approved the final generated Northern Rock Bass image as a second **one-time exception** to the Fish-media generation prohibition.

Reference page used for visual comparison:

- onWater — Rock Bass: Fishing Tips, Spots & Regulations
- https://www.onwaterapp.com/us/species/rock-bass

Approved Northern Rock Bass generated asset:

- Dimensions: **1535 × 1024**
- SHA-256: `43060979c0fc6035f66540c1d13eedc7c60449b9911008f1aca5c2232cd83a47`
- Approved visual direction: darker dorsal region; stronger gold coloration; reddish eye; small rectangular scale pattern with black beading rather than broad irregular spotting
- Status: **selected for Wave 4 under one-time exception**

The earlier `Rock_bass_R.png` is retained only as research/reference history and is no longer the selected production candidate. The Northern Rock Bass media dispute is closed.

# Historical Rights-Safe Media Sweep — 2026-08-24

Additional sweeps covered USFWS, USGS, National Park Service/Buffalo National River, Wikimedia Commons, FishBase, public scientific repositories, public-agency Fish pages, and image-search results. The goal was to find exact-species illustrations with fewer rights restrictions while preserving a coherent field-guide treatment.

## Ozark Bass alternatives reviewed

| Candidate | Rights | Visual/type assessment | Final disposition |
|---|---|---|---|
| Matthew Patterson/USFWS teaching-collection specimen, 4288 × 2848 | Public Domain | Exact species; clean specimen photograph | Retained as rights-safe research fallback; not selected |
| James River, Missouri 2018 angler-held Ozark Bass, 2932 × 2933 | CC BY-SA 4.0 | Exact species photo; fish is being held | Not selected |
| M. Duren FishBase Ozark Bass photo | CC BY on FishBase listing | Exact-species photograph | Not selected |
| Jeremy V. Jordan Ozark Bass photo | CC BY-ND 4.0 | Exact-species photograph | Rejected because NoDerivatives conflicts with FCC processing |
| `Ambloplites constellatus.jpg`, Wikimedia Commons/Buffalo National River category, 2048 × 1354 | File-specific license unresolved during sweep | Exact-species-looking image | Not cleared / not selected |
| Joseph R. Tomelleri Ozark Bass drawing | Copyrighted/licensed | Excellent scientific illustration | Not selected; licensing required |
| Al Agnew Ozark Bass illustration | Copyrighted/licensed | Excellent scientific illustration | Not selected; licensing required |
| onWater `ozark-bass.png`, 800 × 533 | Source known; reuse rights unresolved | Good transparent illustration | Not cleared / not selected |

Historical references:

- Al Agnew article: https://riversandart.blogspot.com/2020/04/growing-up-in-missouri-ozarks-and-being.html
- Al Agnew licensing: https://www.alagnew.com/licensing.html
- USGS/*The Fishes of Missouri*: https://pubs.usgs.gov/wri/wri98-4155/WRIR98-4155.pdf
- MDC terms: https://mdc.mo.gov/terms-use
- USFWS Ozark Bass photograph: https://www.fws.gov/media/ambloplites-constellatus
- Wikimedia FWS photograph: https://commons.wikimedia.org/wiki/File:Ambloplites_constellatus_FWS_20925.jpg
- Tomelleri rights: https://www.americanfishes.com/en/
- onWater Ozark Bass source: https://www.onwaterapp.com/us/species/ozark-bass
- onWater terms: https://www.onwaterapp.com/terms-and-conditions

# Current Media Status

- Seven selected Duane Raver/USFWS Fish illustrations: source direction established as file-specific Public Domain; routine exact-original verification remains part of processing.
- Northern Rock Bass: generated image explicitly approved and selected under a one-time exception; prior Raver rights dispute is closed.
- Ozark Bass: generated image explicitly approved and selected under a one-time exception; prior licensing search is closed.
- Wave 4 primary-media selection: **9/9 selected**.
- No selected Wave 4 image has yet been processed/attached to production records through the normal production workflow.

# Media Intake Checkpoint — 2026-08-24

The user supplied eleven local image files during media research. Originals are preserved unchanged. Exact file dimensions and SHA-256 values recorded at intake are:

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
| Ozark Bass — onWater alternate candidate | `ozark-bass.png` | 800 × 533 | `18e2ab2016820c6cdfb2af8c233db5f7a8f6644e6c44d606f673d9baac604886` |

Approved generated outputs added after intake:

| Fish | Generated asset | Dimensions | SHA-256 | Approval |
|---|---|---:|---|---|
| Ozark Bass | approved generated PNG | 1535 × 1024 | `d67c5933f43381a243659e5031d87dbe3d2db460af002fa5898de03a1598073f` | One-time exception explicitly approved by user |
| Northern Rock Bass | approved generated PNG | 1535 × 1024 | `43060979c0fc6035f66540c1d13eedc7c60449b9911008f1aca5c2232cd83a47` | One-time exception explicitly approved by user |

Technical intake findings retained for historical traceability:

- `Rock_bass_R.png` is RGBA but its alpha channel is fully opaque; it still contains a background.
- `ozark-bass.png` contains genuine transparency; its source page is onWater, but redistribution/modification rights were not established.
- The seven supplied 1200-pixel JPEGs match the expected USFWS/Raver illustration family and are the selected Raver originals subject to routine exact-original verification during processing.
- The two generated exceptions are selected as complete visual assets; do not reinterpret those exceptions as permission to generate additional Fish identification media.

# Production Boundary

No Wave 4 production source/data/media write is authorized by this planning record.

Before user-facing implementation:

1. Obtain explicit user lock of the Fish data/versioning/comparison package and final nine-Fish media direction.
2. Perform routine exact-original/source/rights verification for the seven selected Raver/USFWS Public Domain files under `MEDIA_GUIDE.md`.
3. Preserve the two approved generated assets by exact hash and process them only as needed for the production presentation format; do not regenerate or silently substitute them.
4. Ensure Google Drive `Working Source/Current` has been refreshed from current GitHub `main` before it is used as the Wave 4 working baseline.
5. Obtain explicit production-write authorization for the intended Wave 4 scope.

# Exact Resume Point

1. Re-fetch GitHub `main` and read this workstream plus `WORKING_STATE.md`, `HANDOFF.md`, `ACTIVE-CHANGE-LEDGER.md`, `DEVELOPMENT_WORKFLOW.md`, `data-model/02-FISH.md`, `data-model/09-RELATIONSHIPS.md`, `FISH_REFERENCE_SOURCES.md`, and `MEDIA_GUIDE.md`.
2. Treat the exact approved generated Ozark Bass and Northern Rock Bass images as the selected Wave 4 primary-identification assets under their two documented one-time exceptions. Do not generalize those exceptions.
3. Treat the seven selected Raver/USFWS files as the remaining standard media set; complete their routine exact-file verification during processing rather than reopening image-selection research.
4. Obtain the user's explicit Wave 4 lock confirmation for the proposed nine Fish, version treatment, five comparison relationships, and final media-source direction.
5. Refresh/reconcile Drive `Working Source/Current` to the then-current GitHub `main` before any user-facing write.
6. Only after those gates close, proceed to exact media processing and production implementation through the normal Drive review ZIP → local/browser validation → explicit commit/push authorization workflow.
