# Freshwater Fishing Companion — Decisions: Architecture

**Document:** decisions/architecture.md  
**Document Status:** Approved  
**Role:** Canonical durable decision bodies for this ownership domain  
**Migration Baseline:** `af3bffb9995d56f8b9e47236bbadfa481d88cc34`  
**Last Updated:** 2026-09-01

# Purpose

This file owns the full decision bodies listed below. Decision IDs are permanent and remain stable across the documentation decomposition. `../DECISIONS.md` is the compact canonical index.

# D001 – Local-First Architecture

The Companion stores user data locally and functions without requiring a cloud account.
# D009 – Three-Layer Knowledge Architecture

The application is organized into Reference Knowledge, Decision Knowledge, and User Knowledge.
# D035 - Single Production-Supported Theme

Forest Journal is the only production-supported Version 1 theme and remains the visual/reference baseline while the application is under active functional development.

`themes/concepts/forest-copper.css`, `themes/concepts/forest-gold.css`, and `themes/concepts/legacy-dark-theme.css` are intentionally retained **deferred theme candidates** from earlier theme exploration. They are not abandoned historical artifacts, are not required to remain in behavioral or visual parity with Forest Journal while deferred, and are not part of the supported production test matrix.

**Reason:** multi-theme implementation remains deferred because maintaining several complete themes while components, navigation, media, accessibility behavior, and responsive layouts are still changing would multiply maintenance work and regression risk before the shared UI structure is stable.

**Current implementation status:** Forest Journal only. No user-facing theme selector or multi-theme runtime behavior is implemented. The retained candidates remain inactive and are not automatically promoted by the architecture decision below.

**Settings-gate resolution - UD-11 Appearance, LOCKED / refinement allowed:**

- Appearance separates **Theme** from **Color Scheme**.
- Theme is the FCC visual design family; Color Scheme is the supported System/Light/Dark presentation behavior within that theme.
- Theme and Color Scheme are device-local settings. They do not synchronize as profile-owned User Knowledge and are outside the authoritative UD-9 User Knowledge backup.
- Each production-supported theme explicitly declares the color schemes it supports. FCC does not expose unsupported theme/scheme combinations.
- **System** follows the device/browser light-dark preference using only validated variants supported by the selected theme.
- Shared base/layout/component, interaction, accessibility, and responsive behavior should be centralized where practical; production themes should primarily own design tokens and bounded intentional overrides rather than duplicate the complete application structure.
- Only production-approved and validated themes may appear in the Theme selector.
- Forest Copper, Forest Gold, and Legacy Dark remain candidates. They may later be revised, combined, repurposed into variants, rejected, or promoted through implementation and validation.
- The architecture permits multiple production themes in Version 1 but does not require an arbitrary minimum number. The final Version 1 supported-theme set remains open pending implementation and validation.
- Exact CSS/token structure, selector/preview behavior, fallback mechanics, and promotion workflow remain implementation/refinement details.

The canonical reference-media surface `#f4f0e8` / RGB `244, 240, 232` remains a cross-theme invariant.

**Canonical owners:** this decision body is owned by `decisions/architecture.md` and indexed by `DECISIONS.md`; current/future source structure is described by `ARCHITECTURE.md`; visual requirements are described by `UI_STANDARD.md` and `STYLE_GUIDE.md`. The completed Settings / User Data planning record is historical evidence under `../../archive/workstreams/settings-user-data/SETTINGS-USER-DATA-ARCHITECTURE.md`, not an active architecture owner.

Permanent rule: **a CSS file existing in the repository does not make it a supported production theme, and a deliberately deferred theme candidate must not later be reclassified as abandoned merely because it is inactive.**

# D063 – Dashboard Knowledge Hubs and Tackle Capability Boundary

**Decision:** The Dashboard exposes four foundational knowledge domains: Fish Guide, Knots, Rig Guide, and Tackle. Each is a connected-knowledge hub rather than an isolated page. Tackle is the root capability/domain and must keep two distinct meanings visible:

- **Tackle Reference / Find Tackle** — canonical equipment/consumable knowledge and recognition.
- **My Tackle** — user-owned inventory and readiness state.

The Tackle root may route into both capabilities, but it must not merge reference facts and user-owned state into one ambiguous source of truth. Rig detail derives readiness from Rig requirements plus My Tackle ownership under D020/D028; it does not create a separate competing Tackle authority.

**Reason:** Beginners need stable domain entry points and fast movement through connected knowledge. Treating Tackle as both a foundational hub and a boundary between reference knowledge and user knowledge preserves navigation clarity while preventing duplicate ownership/readiness models.

**Current implementation status:** The four foundational Dashboard domains and Tackle root behavior are current. Tackle Reference exists in its current scope. The full My Tackle capability remains Approved / Not Implemented under D028, the Settings/User Data gate, and the Roadmap.

**Future trigger:** Revalidate the Tackle root routing and labels when the full Tackle Reference milestone or My Tackle is implemented; do not collapse the two capabilities for convenience.

**Canonical owners:** D063 owns the durable product/knowledge boundary. D020/D028 own readiness and My Tackle authority; `ARCHITECTURE.md` owns the knowledge layers; `ROADMAP.md` owns implementation order.
