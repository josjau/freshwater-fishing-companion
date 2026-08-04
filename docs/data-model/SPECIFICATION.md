# Freshwater Fishing Companion

**Document:** SPECIFICATION.md  
**Version:** 0.1.0  
**Status:** Draft

---

# Purpose

This document defines the functional requirements for Version 1 of Freshwater Fishing Companion.

It describes what the application shall do without specifying how it is implemented.

---

# Design Goals

The Companion is designed to:

- Help new anglers learn freshwater fishing.
- Organize fishing equipment and tackle.
- Recommend suitable rigs, techniques, and lures.
- Record catches.
- Encourage legal and ethical fishing.
- Operate completely offline.
- Remain simple, fast, and easy to use.

---

# Target Users

Version 1 is designed primarily for:

- New anglers
- Families
- Casual freshwater anglers
- Anglers learning new techniques

Experienced anglers should still find the Companion useful as an organizational and reference tool.

---

# Core Features

Version 1 includes the following primary features.

## Fish Guide

Users shall be able to:

- Browse supported fish species.
- Search for fish.
- View identification information.
- View habitat information.
- View recommended rigs.
- View recommended lures.
- Access official regulation resources.

---

## Rig Guide

Users shall be able to:

- Browse rigs.
- Learn when each rig is appropriate.
- View required components.
- View compatible techniques.
- Compare required components with inventory.

---

## Technique Guide

Users shall be able to:

- Browse fishing techniques.
- Learn when each technique is appropriate.
- View beginner guidance.
- View common mistakes.

---

## Knot Guide

Users shall be able to:

- Browse knots.
- Learn recommended uses.
- View line compatibility.
- Follow step-by-step instructions.

---

## Lure Guide

Users shall be able to:

- Browse lure families.
- Learn common applications.
- View compatible rigs.
- View compatible techniques.
- View commonly targeted fish.

---

## Inventory

Users shall be able to:

- Record equipment.
- Record consumables.
- Update quantities.
- Track item condition.
- Record storage location.
- Create fishing setups.

---

## Recommendations

The Companion shall provide recommendations using available information such as:

- Fish
- Conditions
- Inventory
- User experience level

Recommendations should explain why they were made whenever practical.

---

## Catch Log

Users shall be able to:

- Record catches.
- Associate catches with fish, rigs, lures, and techniques.
- Add notes.
- Record general fishing location.
- Attach photographs in a future release.

---

## Favorites

Users shall be able to favorite commonly used reference items for quick access.

---

## Search

Users shall be able to search supported reference data.

Search should be fast, responsive, and operate offline.

---

## Backup and Restore

Users shall be able to:

- Export backups.
- Import backups.
- Restore backups.
- Validate backup compatibility.

---

# Non-Functional Requirements

The Companion shall:

- Operate offline.
- Store data locally.
- Start quickly.
- Respond quickly.
- Preserve user data.
- Avoid unnecessary complexity.
- Require no recurring service costs.

---

# Version 1 Exclusions

The following are intentionally excluded from Version 1:

- Cloud synchronization
- User accounts
- Social features
- Live weather
- Live regulation updates
- AI fish identification
- Online product pricing
- Automatic shopping integration

These features may be considered after Version 1.

---

# Success Criteria

Version 1 is considered successful when a new angler can:

- Learn about local fish.
- Identify common freshwater species.
- Build basic rigs.
- Organize fishing equipment.
- Record catches.
- Receive understandable recommendations.
- Back up and restore their data.

---

# Related Documents

- PROJECT.md
- ARCHITECTURE.md
- ROADMAP.md
- STYLE_GUIDE.md
