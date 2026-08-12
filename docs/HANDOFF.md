# Freshwater Fishing Companion — Handoff

**Document:** HANDOFF.md  
**Document Revision:** 0.6.0  
**Document Status:** Approved  
**Repository State Reference:** GitHub `main` is authoritative; do not rely on a self-referential handoff commit SHA.  
**Intermediate Implementation Baseline:** `e4b61aea052f4ad843be0f6d54231af87d574905` (`Rigs - Intermediate Build`)  
**Final Rig Data Correction:** `80b8ef0ba2b0734429b29a5b02c318e02c81bc55`  
**Final Media Metadata Correction:** `291967ed4eb19eb9b1f7f83837c59133c949a333`  
**Latest Intermediate Validation Record:** `docs/workstreams/RIG-BEGINNER-MEDIA-INTERMEDIATE-VALIDATION.md` revision 1.0.0  
**Last Updated:** 2026-08-11

# 1. Start Here

GitHub `main` is authoritative for existing project files. This document is the repository current-state map, not a duplicate specification.

Recommended first-read order:

1. `HANDOFF.md`
2. active workstream / validation document for the next selected milestone
3. `DECISIONS.md`
4. `ARCHITECTURE.md`
5. `DEVELOPMENT_WORKFLOW.md`
6. `STYLE_GUIDE.md`
7. relevant `data-model/` documents
8. `MEDIA_GUIDE.md` when media is involved

Permanent rules:

> Do not begin a new build segment while the current segment is unfinalized.

> GitHub `main` is authoritative for existing source files. Fetch the latest verified GitHub file before proposing or applying an edit.

> Markdown documentation may be updated directly when needed. Images, JavaScript, CSS, HTML, application data, configuration, and other non-Markdown production files require explicit user approval before assistant direct-write to GitHub.

# 2. Current Milestone State

## Beginner/Beginner+ Media Completion + Intermediate Rig Expansion

**Implementation Status: Validated / Finalized**

This section is complete.

Final production state:

- 13 active Rigs,
  - 6 Beginner,
  - 3 Beginner+,
  - 4 Intermediate,
- 23 active canonical Tackle concepts,
- 23 active Tackle recognition-media records,
- six-member `CORE_RIG_IDS` registry unchanged,
- Intermediate+, Advanced, and Expert remain unimplemented/unavailable.

Validated Intermediate membership:

1. Carolina Rig
2. Drop Shot Rig
3. Live-Bait Slip-Sinker Rig
4. Three-Way Rig

The complete section passed:

- source/package integrity,
- canonical Rig/Tackle/media counts and relationships,
- Intermediate membership/routing/search,
- all four Intermediate Rig detail/readiness flows,
- derived Tackle `Used In`,
- recognition-media review and runtime validation,
- retained tutorial regression,
- six replacement tutorial selections and final runtime playback,
- Inline Spinner fallback validation,
- Beginner/Beginner+/Core regression,
- Fish Guide/search regression,
- Dashboard regression,
- desktop navigation/console/focus/layout,
- mobile navigation/search/detail/reference-panel/layout,
- Bobber Stop metadata correction and runtime re-test.

Final validation record:

`docs/workstreams/RIG-BEGINNER-MEDIA-INTERMEDIATE-VALIDATION.md`

Revision:

`1.0.0`

# 3. Final Tutorial State

Validated embedded tutorials:

- Fixed Bobber — NYSDEC — `LlzvkVUvYBs`
- Basic Bottom — Catfish Edge — `O6pEc6Y_44U`
- Jighead + Soft Plastic — Tackle Tactics TV — `wv1e53YZuBo`
- Slip Bobber — Sportsman's Journal TV — `0V-gaboIlD0`
- Texas Rig — Wired2Fish — `cIraWgiR6u0`
- Wacky Rig — Kevin VanDam — `EbHzUCM4o7Y`
- Ned Rig — Mystery Tackle Box — `COFdRET28cY`
- Weightless Soft-Plastic — Reaction Tackle — `EFORJFsycJQ`
- Drop Shot — Mystery Tackle Box — `xuqaAq98BDA`
- Carolina Rig — ShakespeareFishingUS — `iYngOOMQCC0`
- Live-Bait Slip-Sinker — Castaway Fishing Kits — `IbV0yG3sRms`
- Three-Way — Catfish Edge — `8SONykmBFxA`

Inline Spinner intentionally has no embedded tutorial. Its verified external instructional fallback is:

- Mepps — Aglia Spinner Rigging and Tips

Panther Martin was removed from the production record because the destination was more marketing-oriented than instructional for this use case.

# 4. Tutorial Standard

Primary embedded Rig tutorials are build-first:

- correct physical assembly/configuration is the primary purpose,
- concise/direct videos are preferred when technically complete,
- prioritize component order, knots/connections, leader placement, weight placement, bait/hook placement, and final configuration,
- technique/retrieve/presentation/strategy may appear but must not dominate,
- no arbitrary hard duration threshold is required,
- authoritative text assembly remains mandatory,
- if no suitable tutorial exists, use the next trustworthy D049 fallback rather than a weak or mismatched video.

Permanent working principle:

> Tutorial preferred, trustworthy external visual/reference as backup, authoritative text always required.

# 5. Tackle Recognition Media Standard

Current production rules:

- real-photo-first when technically correct and legally reusable,
- otherwise original semi-photorealistic catalog-style recognition media anchored to verified geometry,
- precise illustration only as an explicitly reviewed mechanical exception,
- normal production assets must not use flat/vector/cartoon/clip-art treatment,
- current Tackle references use 640 × 440 RGB WebP,
- exact canonical reference-media canvas is `#f4f0e8`,
- no baked artificial cast shadow,
- hook-bearing recognition media normally uses viewer-facing capital-J orientation: eye/shank right, bend bottom, point/barb left,
- final assets must be checked at realistic phone contextual-popover size.

The `#f4f0e8` reference-media surface remains a permanent cross-theme invariant.

# 6. Bobber Stop Correction

The approved Bobber Stop recognition image is a rubber/silicone variant.

`data/media.js` was corrected in commit:

`291967ed4eb19eb9b1f7f83837c59133c949a333`

Canonical alt text:

> Neutral-background reference illustration of a rubber/silicone bobber stop on fishing line

The contextual `Name ⓘ` reference passed final runtime validation on desktop/mobile.

# 7. Current Production Architecture

- Three knowledge layers: Reference Knowledge, Decision Knowledge, User Knowledge.
- Forest Journal is the only production-supported Version 1 theme.
- Fish Guide exposes inline landing-page search using deterministic relevance ranking and one-click clear.
- Rig Guide contains 13 validated active Rigs through Intermediate.
- Core Rigs is the six-member cross-cutting curated registry.
- Canonical Tackle Reference Knowledge contains 23 active concepts.
- Rig component requirements reference canonical Tackle through `tackleId`.
- Reverse Tackle `Used In` relationships are derived from active Rig requirements.
- Current Rig readiness uses the transitional local readiness state.
- Nested Parent/Home controls remain sticky/available and explicit view transitions reset destinations to the top.
- Completed/generated Rig assembly imagery remains prohibited under D045.
- Tackle recognition media remains contextual through `Name ⓘ` rather than default thumbnail galleries.

# 8. Previously Finalized Work

The following remain Validated / Finalized:

- Application Foundation
- Fish Data Foundation
- Shared Search and Rendering Utilities
- Functional Fish Search
- Functional Rig Guide foundation
- Current-State UX Repairs
- Rig/Tackle Data Integrity — Batch 1
- Core Rigs / Beginner + Beginner+ / Rig UX Finalization
- Beginner/Beginner+ Media Completion + Intermediate Rig Expansion

# 9. Approved but Not Yet Implemented

- Intermediate+ Rig tier
- Advanced Rig tier
- Expert Rig tier
- My Tackle persistent ownership implementation
- temporary per-build/session availability integrated with future My Tackle ownership
- explicit My Tackle Add/Edit/Remove write authority
- common fishing-knot instructional media / Knots implementation
- Recommendations implementation and detailed recommendation schema
- Dashboard cross-domain search after deliberate scope/grouping/result design
- future supported themes beyond Forest Journal

# 10. Known Temporary Bridge

Current Rig readiness storage key:

`freshwaterFishingCompanion.tackleReadiness.v1`

This remains transitional and must not be treated as permanent My Tackle ownership.

When My Tackle becomes authoritative:

- owned canonical Tackle types satisfy requirements automatically,
- temporary per-build/session availability never writes permanent ownership,
- only explicit My Tackle ownership-management actions modify persistent ownership,
- existing readiness checkmarks are not automatically migrated into inventory.

# 11. Open Decisions / Parking Lot

Still open or deliberately deferred:

- detailed My Tackle owned-item schema,
- commercial/branded product-name resolution such as `Rooster Tail`,
- exact Recommendation model schema,
- ProductDefinition architecture if exact commercial-product features later require it,
- exact initial Knot set and Rig-to-Knot relationship model,
- future automated repository validators beyond current safeguards,
- whether other detail domains should adopt Rig-specific compact density,
- exact Dashboard cross-domain search scope/grouping/results,
- conservative future Dashboard density review.

No open item above blocks the completed Intermediate section.

# 12. Next Milestone

The project is now at a clean milestone boundary.

Do **not** automatically begin another build merely because Intermediate+ is next in the Rig sequence.

At the next session, select the next milestone deliberately by evaluating:

1. Intermediate+ Rig expansion,
2. My Tackle / persistent ownership foundation,
3. Knots foundation,
4. another explicitly prioritized project milestone.

If continuing the Rig learning-tier sequence, Intermediate+ is the logical next tier under D039/D040.

# 13. Governing Documents

| Topic | Governing document |
|---|---|
| Repository current-state entrypoint | `HANDOFF.md` |
| Completed Intermediate scope | `workstreams/RIG-BEGINNER-MEDIA-INTERMEDIATE.md` |
| Final Intermediate validation | `workstreams/RIG-BEGINNER-MEDIA-INTERMEDIATE-VALIDATION.md` |
| Long-term structural decisions | `DECISIONS.md` |
| Current source ownership / architecture | `ARCHITECTURE.md` |
| Editing, validation, closeout, scope control | `DEVELOPMENT_WORKFLOW.md` |
| UI/coding/documentation conventions | `STYLE_GUIDE.md` |
| Media and tutorial requirements | `MEDIA_GUIDE.md` |
| Rig external/tutorial sources | `RIG_REFERENCE_SOURCES.md` |
| Milestone/history status | `MILESTONES.md` / `CHANGELOG.md` |
| Data-model terminology | `data-model/00-GLOSSARY.md` |
| Rig model | `data-model/03-RIGS.md` |
| Technique model | `data-model/03A-TECHNIQUES.md` |
| Conditions model | `data-model/03B-CONDITIONS.md` |
| Canonical Tackle | `data-model/05-TACKLE.md` |
| My Tackle / Inventory | `data-model/05A-INVENTORY.md` |
| User Knowledge | `data-model/07-USER-DATA.md` |
| Relationships | `data-model/09-RELATIONSHIPS.md` |

# 14. Source-of-Truth / Editing Rules

- GitHub `main` is authoritative for existing project files.
- Fetch latest GitHub contents before proposing edits to an existing source file.
- Do not assume a prior proposal or chat version was implemented.
- Make targeted edits by default.
- After all planned edits to a source file are complete, provide/verify the full current file for line-by-line validation when appropriate.
- Preflight is not runtime validation.
- After writes, inspect actual repository state.
- Documentation must track meaningful implementation/correction/validation changes.
- Non-Markdown production files require explicit user approval before assistant direct-write.
- Do not move into a new build segment while the current one remains unfinalized.

Permanent principle:

> Finish cleanly or deliberately park; do not leave half-finalized project areas behind.
