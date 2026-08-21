# Freshwater Fishing Companion

**Document:** RIG-BEGINNER-MEDIA-INTERMEDIATE.md  
**Document Revision:** 1.0.0  
**Document Status:** Approved  
**Implementation Status:** Validated / Finalized  
**Implementation Baseline:** `main` at `e4b61aea052f4ad843be0f6d54231af87d574905` (`Rigs - Intermediate Build`)  
**Final Production Corrections:** `80b8ef0ba2b0734429b29a5b02c318e02c81bc55`, `291967ed4eb19eb9b1f7f83837c59133c949a333`  
**Last Updated:** 2026-08-11

# Purpose

Complete the recognition/tutorial-media coverage of the validated Beginner and Beginner+ Rig foundation and implement the complete Intermediate Rig tier as one coherent Rig-domain segment.

This segment is complete.

# Final Scope

The finalized production library contains:

- 13 active Rigs,
- 6 Beginner Rigs,
- 3 Beginner+ Rigs,
- 4 Intermediate Rigs,
- 23 active canonical Tackle concepts,
- 23 active Tackle recognition-media records,
- the unchanged six-member `CORE_RIG_IDS` curated registry.

The complete Intermediate tier is:

1. Drop Shot Rig
2. Carolina Rig
3. Live-Bait Slip-Sinker Rig
4. Three-Way Rig

Intermediate+, Advanced, and Expert remain outside this segment.

# Final Segment Decisions

## D053 — Rig Media Completeness and Tutorial Audit

Every Rig entering a completed learning tier receives a media-completeness audit within the same build segment.

The audit requires:

- authoritative text assembly remains mandatory and authoritative,
- every Rig receives a tutorial-source search,
- a technically correct tutorial is included when a suitable public source can be independently verified and is compatible with D049,
- primary embedded tutorials are build-first: correct physical assembly/configuration is the primary purpose,
- concise/direct videos are preferred when technical completeness and source quality are otherwise adequate,
- component order, knots/connections, leader placement, weight placement, bait/hook placement, and final assembled configuration take priority over fishing technique,
- technique/retrieve/presentation/strategy may be present but must not dominate,
- no arbitrary hard duration threshold is required,
- tutorial players remain lazy-loaded, use `youtube-nocookie.com`, do not autoplay, preserve platform attribution/controls, and retain `Watch on YouTube ↗`,
- if no suitable tutorial exists, the Rig uses the next trustworthy D049 fallback rather than adding a weak or mismatched video,
- every canonical Tackle concept used by a completed Rig provides accurate contextual recognition help,
- newly introduced canonical Tackle concepts ship with their recognition media in the same tier build,
- generated completed-Rig/build-step imagery remains prohibited under D045.

Permanent working principle:

> Tutorial preferred, trustworthy external visual/reference as backup, authoritative text always required.

## D054 — Intermediate Rig Tier Membership

The complete Intermediate tier is:

1. Drop Shot Rig
2. Carolina Rig
3. Live-Bait Slip-Sinker Rig
4. Three-Way Rig

This tier follows Beginner+ because these Rigs introduce more precise leader management, bottom-contact tuning, multi-component relationships, or multi-branch rigging while remaining broadly practical for the approved regional library.

Intermediate+, Advanced, and Expert membership remain outside this segment.

# Final Tutorial State

Validated tutorials:

| Rig | Final tutorial / fallback |
|---|---|
| Fixed Bobber Rig | NYSDEC — `LlzvkVUvYBs` |
| Basic Bottom Rig | Catfish Edge — `O6pEc6Y_44U` |
| Jighead + Soft Plastic | Tackle Tactics TV — `wv1e53YZuBo` |
| Slip Bobber Rig | Sportsman's Journal TV — `0V-gaboIlD0` |
| Inline Spinner Setup | No embed; Mepps external instructional fallback retained |
| Texas Rig | Wired2Fish — `cIraWgiR6u0` |
| Wacky Rig | Kevin VanDam — `EbHzUCM4o7Y` |
| Ned Rig | Mystery Tackle Box — `COFdRET28cY` |
| Weightless Soft-Plastic Rig | Reaction Tackle — `EFORJFsycJQ` |
| Drop Shot Rig | Mystery Tackle Box — `xuqaAq98BDA` |
| Carolina Rig | ShakespeareFishingUS — `iYngOOMQCC0` |
| Live-Bait Slip-Sinker Rig | Castaway Fishing Kits — `IbV0yG3sRms` |
| Three-Way Rig | Catfish Edge — `8SONykmBFxA` |

Panther Martin was removed from Inline Spinner after validation because the destination was more marketing-oriented than instructional for this use case.

# Recognition Media Result

Recognition-media work is complete and validated.

Permanent production rules include:

1. Search for an accurate legally reusable real photograph first.
2. Otherwise create an original semi-photorealistic catalog-style reference anchored to verified real-world geometry.
3. Use precise illustration only as an explicitly reviewed mechanical exception.
4. Compare replacements against current approved production Tackle assets before packaging.
5. Reject flat/vector/cartoon/clip-art appearance for normal Tackle recognition media.
6. Use exact 640 × 440 RGB WebP with exact `#f4f0e8` canvas matching for the current Tackle system.
7. Do not bake artificial cast shadows into recognition assets.
8. Present hook-bearing recognition media in conventional viewer-facing capital-J orientation unless a reviewed technical exception applies.

The corrected recognition library passed package verification and phone/desktop contextual-popover review.

# Bobber Stop Result

The approved Bobber Stop recognition image is the rubber/silicone variant.

`data/media.js` was corrected in commit `291967ed4eb19eb9b1f7f83837c59133c949a333` so the alt text accurately describes that image.

The affected contextual reference passed final runtime validation.

# Production Corrections

`data/rigs.js` final correction commit:

`80b8ef0ba2b0734429b29a5b02c318e02c81bc55`

Applied changes:

- Slip Bobber tutorial replacement,
- Wacky Rig tutorial replacement,
- Ned Rig tutorial replacement,
- Weightless Soft-Plastic tutorial replacement,
- Carolina Rig tutorial replacement,
- Live-Bait Slip-Sinker tutorial replacement,
- Panther Martin Inline Spinner reference removal,
- Inline Spinner `lastModifiedVersion` update to `0.3.1`.

`data/media.js` final correction commit:

`291967ed4eb19eb9b1f7f83837c59133c949a333`

Applied change:

- Bobber Stop alt text corrected for the approved rubber/silicone stop variant.

# Validation Result

The full validation sequence passed:

- source/package integrity,
- canonical Rig/Tackle/media counts and relationships,
- Intermediate membership/routing/search,
- all four Intermediate Rig detail/readiness flows,
- recognition-media runtime review,
- retained tutorial playback,
- replacement tutorial selection and final changed-runtime playback,
- Inline Spinner external fallback,
- Beginner/Beginner+/Core collections and detail regression,
- Fish Guide/search regression,
- Dashboard regression,
- desktop navigation/console/focus/layout,
- mobile navigation/search/detail/reference-panel/layout,
- Bobber Stop metadata/runtime correction.

See `RIG-BEGINNER-MEDIA-INTERMEDIATE-VALIDATION.md` for the final validation record.

# Explicit Non-Scope

- Intermediate+ Rig records
- Advanced Rig records
- Expert Rig records
- Dashboard search
- My Tackle persistent ownership implementation
- Knots implementation
- Recommendations
- generated completed-Rig or assembly-step imagery
- unrelated shared CSS or renderer redesign

# Completion

**Validated / Finalized — 2026-08-11**

This segment is closed under D039/D040. The project may now select the next milestone. Intermediate+ is the next logical Rig-learning tier, but the next milestone should be selected deliberately rather than assumed.
