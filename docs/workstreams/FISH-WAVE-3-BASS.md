# Freshwater Fishing Companion — Fish Guide Production Wave 3: Bass

**Document:** FISH-WAVE-3-BASS.md  
**Document Revision:** 1.2.2
**Document Status:** Approved — Active Workstream  
**Implementation Status:** Implemented Locally / Internal Validation Passed / User Browser Review In Progress
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

The user approved all six processed images and separately authorized the complete local production review implementation on 2026-08-24. The resulting source, evidence, media records, and repository assets are present only as uncommitted local changes; GitHub `main` remains unchanged pending user browser review and later explicit commit/push authorization.

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
| Largemouth Bass | Inline Spinner Setup | Alternative |
| Smallmouth Bass | Jighead + Soft Plastic | Primary |
| Smallmouth Bass | Ned Rig | Alternative |
| Spotted Bass | Jighead + Soft Plastic | Primary |
| White Bass | Jighead + Soft Plastic | Primary |
| White Bass | Inline Spinner Setup | Primary |
| White Bass | Live-Bait Slip-Sinker Rig | Alternative |
| Striped Bass | Jighead + Soft Plastic | Primary |
| Striped Bass | Live-Bait Slip-Sinker Rig | Alternative |
| Hybrid Striped Bass | Jighead + Soft Plastic | Primary |
| Hybrid Striped Bass | Live-Bait Slip-Sinker Rig | Alternative |

The user completed explicit Fish-to-Rig review on 2026-08-24. Largemouth Inline Spinner Setup and Smallmouth Ned Rig were approved as Alternatives. Live-Bait Slip-Sinker Rig remains valid for Striped and Hybrid Striped Bass but was deliberately tiered as Alternative for both. Do not expand this 12-recommendation set without evidence and an explicit decision.

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

# Media Review Checkpoint

Exact-original acquisition and candidate preparation were completed locally on 2026-08-24 under explicit media-review authorization. The user subsequently approved all six candidates, closing the processed-media gate and authorizing their production attachment in the local repository review set.

| Fish | Verified original SHA-256 | Candidate dimensions | Candidate bytes | Candidate SHA-256 |
|---|---|---:|---:|---|
| Largemouth Bass | `07d1330a6887716c017986b1d7528c316c7a6051e07c444cfb62f55d97c144c9` | 1200 × 778 | 152,584 | `982b3325ddbb0bc6bdee14284cb8c609048ccc99450ed1abea30e7f8ebd2bd9e` |
| Smallmouth Bass | `57c655e5bc794cddbf04b5e3d611e5f9d91ec98f744b05b95690a235fe1aebc9` | 1200 × 742 | 101,064 | `6ad4f382e21de4a64d270177437a33506e670653bb90949072e4fab373b377c6` |
| Spotted Bass | `10d1235639d9d0f858db43069a86413322a27b438afb8ef18332017d0cefe38d` | 1200 × 779 | 199,332 | `ac8113a8ef57580ab104ee817f66493dcab7b4c00eb0826230baea2cee67d218` |
| White Bass | `af0c64527d3a092fe859362f8efb343ed01378790624ef82909f8535b516b5df` | 1200 × 734 | 108,582 | `b2819b0c532bf4d5641f6e06c7363eb6b7d7f0cd026a9102acaf85a715570575` |
| Striped Bass | `2966db7f9ab4de7e0c4a768b654a7ef61af59fdcc5bb54d6927a704e798beaf4` | 1200 × 772 | 169,462 | `f35aed2148ad64bb7703c22e1056b23805f28fc6fea467580d7da332bd3422d3` |
| Hybrid Striped Bass | `7fb876df0c84a582bbf70707b2e95827102c488aafcbfd2d5bf53e4d69f442b8` | 1200 × 779 | 221,728 | `912ba496de9a09ec5c03c6f1043d7d81efcbe951db7cca5fb68f7c37f4e5876e` |

Processing and validation state:

- The four USFWS JPEGs use deterministic background-only isolation; source canvas, subject geometry, anatomy, and visible source color were retained.
- The two ODWC PNGs preserve the supplied alpha channel and were proportionally resized to 1200 px width.
- An attempted generative extraction was rejected because it changed identification color/anatomy; none of those generated outputs is included in the review set.
- The manifest and labeled contact sheet expose source identity, input/output dimensions and size, transformation notes, rights status, candidate hashes, and approval state.
- Desktop and 390 px mobile browser checks passed: all 24 original/candidate views loaded, all six Fish and both ODWC caveats rendered, there was no horizontal overflow, and there were no browser warnings or errors.
- User approval of all six processed candidates was recorded on 2026-08-24. The ODWC rights caveat remains in force and is preserved in production Media metadata and visible attribution.

# Local Production Review Set Checkpoint

After media approval, the repository baseline and closed Wave 2 pattern were reverified and the user explicitly authorized the complete local production review implementation. The uncommitted review set now changes:

- `data/fish.js`
- `data/fish-identification.js`
- `data/fish-rig-guidance.js`
- `data/media.js`
- `view-renderer.js`
- six Fish image assets under `images/fish/`
- `docs/FISH_REFERENCE_SOURCES.md`
- affected governing/current-state documentation

The local source now contains exactly the locked six Bass records, six deterministic relationship IDs, and twelve approved Fish-to-Rig recommendations. It adds one active primary-identification Media record and one matching approved WebP asset for each Bass. The selected ODWC files retain their documented rights caveat and visible attribution rather than being mislabeled Public Domain. Per-Fish framing was tuned for Selection, Fish Detail, similar-Fish, comparison-catalog, and dedicated-comparison contexts without changing source geometry or anatomy.

Internal validation completed against the local review set:

- JavaScript syntax: **PASS** for the four edited data registries and `view-renderer.js`.
- Repository integrity: **PASS** — all 8 validation groups passed.
- Runtime counts before the final Rig review were 25 Fish records, 15 Fish-identification relationships, 18 Fish-to-Rig guidance records, and 60 Media records. The approved 10→12 guidance change requires regenerated count/package validation.
- Locked-package fidelity: **PASS** — exact six Fish, exact six relationship IDs, exact twelve recommendation/tier assignments, six primary Media records, and six approved asset hashes.
- Local browser: **PASS** at the default 1280 px viewport and 390 px mobile viewport for the Bass collection, Fish detail, black-bass comparison, temperate-bass comparison, alias search, scientific-name search, rights attribution, image loading, and horizontal-overflow checks.
- Browser console: **PASS** — no warning or error entries during the tested flows.
- First user browser review on 2026-08-24: **PASS** for Compare Similar Fish centering and the Selection/Fish ID image-block standards; the user reported no off-center Fish presentation.
- First user browser review on 2026-08-24: **CORRECTION REQUIRED** for the CSS-drawn internal directional arrow. The arrow did not sit naturally with the text and its design was rejected.
- Follow-up browser review on 2026-08-24: **PASS / USER APPROVED** for the restored native Unicode `→` treatment with modest typographic emphasis. The approved `font-weight: 800` is now the application-wide navigation-arrow weight for back `←`, internal-forward `→`, external `↗`, and established compact-row `›` glyphs; representative cross-app review of that normalization remains pending.

This is not a finalized or cross-computer checkpoint. Nothing has been committed or pushed, and the user still must approve the complete local production presentation.

# Acceptance Gates

Wave 3 cannot close until:

- all six canonical records match the locked package,
- all six pairwise relationship IDs exist and resolve bidirectionally as required by the relationship contract,
- all twelve approved Fish-to-Rig recommendations and tiers exist exactly,
- six primary media records/assets pass identity, provenance, rights, transformation, path, format, size, framing, and mobile-readability checks,
- `FISH_REFERENCE_SOURCES.md` has complete per-Fish and per-relationship evidence entries,
- syntax, repository-integrity, relationship, search, desktop, mobile, and live/runtime checks pass for the affected scope,
- governing/current-state documentation is reconciled locally for review and later pushed/re-fetched from GitHub after explicit authorization,
- the user approves the final visual result.

# Exact Resume Point

Apply the regenerated Drive review ZIP to the local Git checkout and spot-check the normalized `font-weight: 800` navigation-arrow treatment on representative `←`, `→`, `↗`, and compact-row `›` surfaces. Preserve the already-approved Compare Similar Fish centering, Selection/Fish ID image-block presentation, and native internal-arrow treatment unless a new defect is observed. Rerun affected validation and complete the Bass browser review. When the user approves the complete production result, perform the repository-wide documentation closure sweep, reconcile the final diff, then wait for explicit commit/push authorization.
