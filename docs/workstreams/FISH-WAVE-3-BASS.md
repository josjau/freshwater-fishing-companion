# Freshwater Fishing Companion — Fish Guide Production Wave 3: Bass

**Document:** FISH-WAVE-3-BASS.md  
**Document Revision:** 1.0.0  
**Document Status:** Approved — Active Workstream  
**Implementation Status:** Approved / Not Started  
**Decision Baseline:** D016, D051, D056–D061  
**Last Updated:** 2026-08-24

# Purpose and Boundary

This is the canonical active workstream record for Fish Guide Production Wave 3 — Bass. It preserves the approved package, evidence/media choices, rights caveats, implementation boundary, validation gates, and exact resume sequence without relying on chat history or the retired Google Working State.

This workstream contains exactly six Fish:

1. Largemouth Bass
2. Smallmouth Bass
3. Spotted Bass
4. White Bass
5. Striped Bass
6. Hybrid Striped Bass

Northern Rock Bass remains in the later Sunfish & Crappie package. The existing Largemouth, Smallmouth, and Spotted records will be migrated to the approved production contract. White, Striped, and Hybrid Striped are new production records.

No production source or production media implementation has begun. This document records approved preparation; it does not authorize source/data/media writes.

# Locked Canonical Records

| Fish | Scientific name | Aliases | Habitat tags | Waterbody tags |
|---|---|---|---|---|
| Largemouth Bass | `Micropterus nigricans` | none | Grass; Timber; Brush; Shallow Water | Pond; Lake; River; Reservoir |
| Smallmouth Bass | `Micropterus dolomieu` | Bronzeback | Rock; Open Water; Current | Lake; River; Creek; Reservoir |
| Spotted Bass | `Micropterus punctulatus` | Kentucky Bass | Rock; Current; Channel; Deep Water | Lake; River; Reservoir |
| White Bass | `Morone chrysops` | Sand Bass | Open Water; Current; Deep Water | Lake; Reservoir; River; Creek |
| Striped Bass | `Morone saxatilis` | Striper | Open Water; Deep Water; Current | Lake; Reservoir; River |
| Hybrid Striped Bass | `Morone chrysops × Morone saxatilis` | Wiper; Whiterock Bass | Open Water; Current; Deep Water | Lake; Reservoir; River |

Approved corrections and exclusions:

- Largemouth replaces the legacy `Open Water` habitat tag with `Shallow Water`.
- Spotted replaces legacy `Timber` and `Open Water` habitat tags with `Channel` and `Deep Water`.
- `Cold Water` is intentionally omitted from Striped Bass habitat tags.
- The Largemouth scientific-name decision remains governed by D057 and `FISH_REFERENCE_SOURCES.md`; the older scientific name attached to historical media metadata does not override the canonical production identity.

# Locked Identification Direction

## Black bass

- **Largemouth:** mouth hinge extends behind the rear edge of the eye; broad horizontal side stripe; dorsal sections weakly connected/deeply notched; tongue usually lacks the rough tooth patch. Color alone is not decisive.
- **Smallmouth:** mouth hinge ends in front of the rear edge of the eye; vertical side bars; dorsal sections connected; rough tongue patch is supporting evidence.
- **Spotted:** mouth hinge is approximately even with the rear edge of the eye; lateral stripe with rows of spots below; dorsal sections connected/not deeply notched; rough tongue patch is supporting evidence.

## Temperate bass

- **White:** deep body with a distinctly arched back; one round or heart-shaped tongue patch; horizontal striping is supporting evidence.
- **Striped:** slender body without the arched back; strong, mostly continuous horizontal stripes; two distinct parallel tongue patches.
- **Hybrid Striped:** deeper/intermediate body and broken/discontinuous horizontal stripes; tongue-patch presentation is variable and supporting only, not the sole deterministic distinction.

# Locked Identification Relationships

Create exactly these deterministic pairwise relationship IDs:

- `largemouth-bass-vs-smallmouth-bass`
- `largemouth-bass-vs-spotted-bass`
- `smallmouth-bass-vs-spotted-bass`
- `striped-bass-vs-white-bass`
- `hybrid-striped-bass-vs-white-bass`
- `hybrid-striped-bass-vs-striped-bass`

Relationship wording must be directional, observable, and consistent with the identification direction above. Do not use color as the decisive black-bass distinction, and do not rely on one variable Hybrid Striped tongue-patch description as the sole distinction.

# Locked Fish-to-Rig Guidance

| Fish | Rig | Tier |
|---|---|---|
| Largemouth Bass | Texas Rig | Primary |
| Smallmouth Bass | Jighead + Soft Plastic | Primary |
| Spotted Bass | Jighead + Soft Plastic | Primary |
| White Bass | Jighead + Soft Plastic | Primary |
| White Bass | Inline Spinner Setup | Primary |
| White Bass | Live-Bait Slip-Sinker Rig | Alternative |
| Striped Bass | Jighead + Soft Plastic | Primary |
| Striped Bass | Live-Bait Slip-Sinker Rig | Primary |
| Hybrid Striped Bass | Jighead + Soft Plastic | Primary |
| Hybrid Striped Bass | Live-Bait Slip-Sinker Rig | Primary |

The Ned Rig is intentionally omitted for Smallmouth Bass in this package. Do not expand the locked guidance merely because another Rig could catch the Fish; additions require evidence and an explicit decision.

# Locked Primary Media Selections

| Fish | Approved source record/file | Creator/provenance | Recorded original | Rights decision |
|---|---|---|---|---|
| Largemouth Bass | [USFWS media record `largemouth-bass-5`](https://www.fws.gov/media/largemouth-bass-5); [original `25334.jpg`](https://www.fws.gov/sites/default/files/images/2005-05/25334.jpg) | Duane Raver / USFWS | 1200 × 778 | USFWS record states Public Domain |
| Smallmouth Bass | [USFWS media record `smallmouth-bass-19`](https://www.fws.gov/media/smallmouth-bass-19); [original `25335.jpg`](https://www.fws.gov/sites/default/files/images/2005-05/25335.jpg) | Duane Raver / USFWS | 1200 × 742 | USFWS record states Public Domain |
| Spotted Bass | [ODWC field-guide record](https://www.wildlifedepartment.com/wildlife/field-guide/fish/bass-spotted); `Spotted-Bass.png` | Page credits Duane Raver; selected for consistent Raver/USFWS provenance | transparent PNG, 1740 × 1130; SHA-256 `10d1235639d9d0f858db43069a86413322a27b438afb8ef18332017d0cefe38d` | Approved with the rights caveat below |
| White Bass | [USFWS media record `white-bass-1`](https://www.fws.gov/media/white-bass-1); [original `25337.jpg`](https://www.fws.gov/sites/default/files/images/2005-05/25337.jpg) | Duane Raver / USFWS | 1200 × 734 | USFWS record states Public Domain |
| Striped Bass | [USFWS media record `striped-bass-12`](https://www.fws.gov/media/striped-bass-12); [original `27690.jpg`](https://www.fws.gov/sites/default/files/images/2005-05/27690.jpg) | Duane Raver / USFWS | 1200 × 772 | USFWS record states Public Domain |
| Hybrid Striped Bass | [ODWC field-guide record](https://www.wildlifedepartment.com/wildlife/field-guide/fish/bass-striped-hybrid); `Striped-Bass-Hybrid.png` | Page credits Duane Raver; selected for consistent Raver/USFWS provenance | transparent PNG, 1740 × 1130; SHA-256 `7fb876df0c84a582bbf70707b2e95827102c488aafcbfd2d5bf53e4d69f442b8` | Approved with the rights caveat below |

## ODWC rights caveat

The selected Spotted Bass and Hybrid Striped Bass files were approved because their subject, Duane Raver credit, and broader USFWS provenance are consistent with the selected illustration family. However, the exact ODWC-hosted files do **not** have an independently verified file-specific Public Domain license in the source record, and the ODWC host footer states `All Rights Reserved`.

Do not claim that those exact files are independently verified Public Domain. Before repository inclusion or modification, re-check the exact acquired bytes and current source/rights evidence. If that evidence no longer supports the approved use, stop at a named rights gate and use an approved safe fallback rather than weakening provenance language.

## Approved fallback context

If a selected asset cannot be acquired or cleared:

- Spotted Bass supporting alternatives include an Ohio History Connection Learning Library image identified there as USGS-origin/Public Domain and a Matthew Patterson/USFWS image.
- Hybrid Striped Bass supporting alternatives include a USFWS Mountain-Prairie image explicitly marked Public Domain and a Ryan Hagerty/USFWS image.

These alternatives are not selected primary assets. Re-locate the authoritative record, verify exact rights and bytes, and obtain approval before substituting one.

# Evidence Anchors

The authoritative regional/identification anchors used to lock this package include:

- [ODWC — Bass, Largemouth](https://www.wildlifedepartment.com/wildlife/field-guide/fish/bass-largemouth)
- [ODWC — Bass, Smallmouth](https://www.wildlifedepartment.com/wildlife/field-guide/fish/bass-smallmouth)
- [ODWC — Bass, Spotted](https://www.wildlifedepartment.com/wildlife/field-guide/fish/bass-spotted)
- [ODWC — Bass, White](https://www.wildlifedepartment.com/wildlife/field-guide/fish/bass-white)
- [ODWC — Bass, Striped](https://www.wildlifedepartment.com/wildlife/field-guide/fish/bass-striped)
- [ODWC — Bass, Striped Hybrid](https://www.wildlifedepartment.com/wildlife/field-guide/fish/bass-striped-hybrid)
- the North American naming and Largemouth taxonomy authorities already cataloged in `FISH_REFERENCE_SOURCES.md`.

During production implementation, populate the per-Fish and per-relationship entries in `FISH_REFERENCE_SOURCES.md` before treating evidence completeness as closed. This workstream preserves the approved package; the Fish evidence ledger remains the canonical long-term provenance owner after implementation.

# Media Acquisition and Processing Procedure

1. Re-read `MEDIA_GUIDE.md` and use its Fish acquisition/isolation rules.
2. Attempt to download the six exact originals directly from the authoritative source records first.
3. Ask the user to transfer an original only when direct acquisition fails or acquired bytes cannot be verified.
4. Preserve and record the source URL, source record, original filename, dimensions, hash, creator/credit, rights statement, and review result before processing.
5. Compare each acquired file with the locked dimensions/hash where one is recorded. A mismatch is a gate, not permission to substitute silently.
6. Create transparent WebP candidates without recoloring, reshaping, repainting, reconstructing, or removing diagnostic anatomy.
7. Validate alpha edges on light, dark, and exact `#f4f0e8` surfaces; preserve complete fins, rays, membranes, mouths, tails, body shape, and other identification detail.
8. Create a six-asset manifest and contact sheet that expose source identity, dimensions, output dimensions/size, transformation notes, and visual review status.
9. Obtain user approval of the processed-media set before production attachment.

# Production Implementation Boundary

After processed media approval, re-fetch the current source and verify the closed Wave 2 pattern before editing:

- `data/fish.js`
- `data/fish-identification.js`
- `data/fish-rig-guidance.js`
- `data/media.js`
- applicable Fish image assets
- `docs/FISH_REFERENCE_SOURCES.md`
- affected current-state/Changelog documentation

Production source/data/media edits require separate explicit authorization. Use an affected-file audit/fix cycle, but do not introduce unapproved semantic additions while those files are open.

# Acceptance Gates

Wave 3 cannot close until:

- all six canonical records match the locked package,
- all six pairwise relationship IDs exist and resolve bidirectionally as required by the relationship contract,
- all locked Fish-to-Rig guidance exists and no intentionally omitted guidance was added,
- six primary media records/assets pass identity, provenance, rights, transformation, path, format, size, framing, and mobile-readability checks,
- `FISH_REFERENCE_SOURCES.md` has complete per-Fish and per-relationship evidence entries,
- syntax, repository-integrity, relationship, search, desktop, mobile, and live/runtime checks pass for the affected scope,
- governing/current-state documentation is reconciled, pushed, and re-fetched from GitHub,
- the user approves the final visual result.

# Exact Resume Point

Begin with read-only repository/source verification and exact-original acquisition planning. Then obtain media-write authorization, acquire/verify the six originals, process the six transparent WebP candidates, create the manifest/contact sheet, and present the media set for user approval. Do not begin production Fish source implementation until that media gate passes and separate source-write authorization is granted.
