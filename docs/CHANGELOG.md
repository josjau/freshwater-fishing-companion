
---

# Replace `docs/CHANGELOG.md`

```markdown
# Freshwater Fishing Companion

**Document:** CHANGELOG.md  
**Version:** 1.1.0  
**Status:** Active  
**Last Updated:** 2026-08-05

---

# Purpose

This document records notable changes to Freshwater Fishing Companion.

Entries summarize:

- User-visible features
- Completed milestones
- Architectural improvements
- Significant bug fixes
- Documentation changes
- Data-model changes

Routine formatting changes and every individual commit do not require separate entries.

---

# Format

The project follows a lightweight version of Keep a Changelog.

Entries may include:

- Added
- Changed
- Fixed
- Removed
- Deprecated
- Documentation
- Validation

---

# Unreleased

## In Progress

### MS2.3 — Functional Fish Search

Planned work:

- Activate the Search Fish card.
- Render a Fish search interface.
- Search canonical Fish records.
- Display reusable Fish result cards.
- Display a no-results state.
- Establish reusable search-interface behavior for later modules.

---

# Version 0.2.2 — Shared Application Utilities

**Date:** 2026-08-05  
**Milestone:** MS2.2

## Added

- `search.js`
- `view-renderer.js`
- Generic search-text normalization
- Stable-ID record lookup
- Multi-field record search
- Scalar and array filtering
- Alphabetical record sorting
- Runtime source-file identifiers

## Changed

- Reduced `script.js` to application coordination responsibilities.
- Moved shared view rendering out of `script.js`.
- Moved Home-navigation wiring into the shared view renderer.
- Established explicit JavaScript source ownership.
- Established the required browser source load order:
  - `data/fish.js`
  - `search.js`
  - `view-renderer.js`
  - `script.js`

## Validation

- Confirmed all expected runtime load messages.
- Confirmed all eight internal dashboard views.
- Confirmed Home navigation from all internal views.
- Confirmed the external Regulations link.
- Confirmed stable-ID lookup using the Bluegill record.
- Confirmed multi-field Bass search.
- Confirmed array-field habitat filtering.
- Confirmed no Console errors or route warnings.

---

# Version 0.2.1 — Fish Data Foundation

**Date:** 2026-08-05  
**Milestone:** MS2.1

## Added

- `data/` directory
- `data/fish.js`
- Twelve initial canonical Fish records
- Stable Fish identifiers
- Foundation entity metadata
- Common names
- Scientific names
- Summaries
- Categories
- Families
- Habitat tags
- Waterbody types
- Fish-data runtime record-count message

## Changed

- Separated canonical Fish reference data from UI behavior.
- Established the source pattern for future canonical reference-data files.
- Updated `index.html` to load Fish data before application logic.

## Validation

- Confirmed the Fish data file loaded before `script.js`.
- Confirmed the expected 12-record Console message.
- Confirmed no application-shell regressions.

---

# Version 0.1.7 — Complete Application Shell

**Date:** 2026-08-05  
**Milestone:** MS1.7

## Added

- Knots view
- Catch Log view
- Favorites view
- Settings view
- Working renderer registration for every internal dashboard route

## Changed

- Completed the internal dashboard view shell.
- Replaced duplicate route validation with renderer-registry validation.
- Preserved the Regulations card as an external official-resource link.

## Validation

- Confirmed all eight internal dashboard cards open working views.
- Confirmed every internal view displays a Home control.
- Confirmed each internal view displays four child cards.
- Confirmed all Home controls restore the dashboard.
- Confirmed no route warnings or Console errors.

---

# Version 0.1.6 — Shared View Rendering

**Date:** 2026-08-05  
**Milestone:** MS1.6

## Added

- Shared `renderView()` implementation
- Canonical `.page-navigation` component
- Canonical `← Home` navigation label
- Stable `data-card-id` attributes
- Runtime build information
- Full-file replacement identification header

## Changed

- Converted Fish Guide, Rig Guide, What Should I Throw?, and My Tackle to configuration-driven rendering.
- Removed repeated page markup.
- Removed repeated Home-navigation event wiring.
- Standardized generated child-card structure.
- Established lowercase kebab-case card identifiers.

## Fixed

- Corrected an incomplete refactor where Fish Guide called `renderView()` before the shared renderer had been added.
- Corrected a prior structural insertion error that prevented Fish Guide and Rig Guide from opening.
- Standardized formatting after the renderer refactor.

## Validation

- Confirmed all converted views displayed identical intended content.
- Confirmed the new Home navigation styling.
- Confirmed stable card identifiers through Developer Tools.
- Confirmed no Console errors.

---

# Version 0.1.5 — Initial Working Views

**Date:** 2026-08-05  
**Milestone:** MS1.5

## Added

- Fish Guide view
- Rig Guide view
- What Should I Throw? view
- My Tackle view
- View-renderer registry
- Dashboard route handling
- Dashboard return behavior

## Changed

- Replaced Console-only dashboard routing with working application views.
- Established the initial top-level view pattern.

## Validation

- Confirmed each implemented dashboard route opened correctly.
- Confirmed dashboard return behavior.
- Confirmed repeated navigation remained functional.

---

# Version 0.1.4 — Dashboard Interaction

**Date:** 2026-08-05

## Added

- Stable top-level route identifiers
- Dashboard `data-route` attributes
- JavaScript click handlers
- Console navigation diagnostics

## Changed

- Converted static dashboard cards into interactive application controls.

## Fixed

- Corrected route script placement and initialization issues.
- Corrected JavaScript structure after comparison with the authoritative GitHub file.

---

# Version 0.1.3 — Forest Journal Interface

**Date:** 2026-08-04

## Added

- Forest Journal production theme
- Primary-card visual hierarchy
- Dual accent stripes
- Improved dashboard action contrast
- Responsive dashboard styling

## Changed

- Replaced the original visual treatment with the Forest Journal design.
- Improved Browse action visibility.
- Standardized dashboard card styling.

---

# Version 0.1.0 — Planning Baseline

## Added

### Project Documentation

- PROJECT.md
- SPECIFICATION.md
- ARCHITECTURE.md
- STYLE_GUIDE.md
- ROADMAP.md
- DECISIONS.md
- CHANGELOG.md
- MILESTONES.md

### Data Model

- Modular data-model documentation
- Canonical glossary
- Foundation standards
- Fish model
- Rig model
- Technique model
- Condition model
- Recommendation model
- Knot model
- Inventory model
- Lure model
- User-data model
- Backup model
- Relationship model

### Architecture

- Local-first design
- Three-layer knowledge architecture
- Canonical entity model
- Canonical taxonomy model
- Canonical recommendation model
- Canonical source registry
- Inventory-centric design

### Development Standards

- Documentation-first workflow
- Modular documentation structure
- Architectural decision tracking
- Project roadmap
- Style guide

## Changed

- Replaced the original monolithic data model with modular documentation.
- Refined inventory architecture to distinguish durable equipment from consumable tackle.
- Standardized recommendation philosophy around evidence-based guidance.

## Notes

Version 0.1.0 completed the initial planning and architecture phase.

No production application code existed at that milestone.

---

# Versioning Philosophy

Planning and implementation milestones use pre-1.0 version numbers.

The application reaches Version 1.0.0 when:

- Core functionality is complete.
- Reference data is sufficiently populated.
- User-data storage is complete.
- Backup and restore are complete.
- Documentation is current.
- Accessibility and performance reviews are complete.
- Testing is complete.
- The application is ready for general use.

---

# Related Documents

- PROJECT.md
- ARCHITECTURE.md
- MILESTONES.md
- ROADMAP.md
- DECISIONS.md
