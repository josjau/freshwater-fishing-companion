# Freshwater Fishing Companion

**Document:** 07-USER-DATA.md  
**Version:** 0.1.0  
**Status:** Draft  
**Decision Baseline:** D029

---

# Purpose

This document defines the canonical User Data model for Freshwater Fishing Companion.

User Data represents information created, maintained, and owned by the angler.

Unlike Reference Knowledge, User Data is unique to each user and is included in backups.

---

# Design Philosophy

The Companion separates Reference Knowledge from User Knowledge.

Reference Knowledge is maintained by the application.

User Knowledge is maintained by the angler.

Whenever practical, User Data references canonical entities instead of duplicating information.

User Knowledge is data, not markup.

---

# User Data Categories

The following categories comprise User Data.

- User Profile
- Preferences
- Favorites
- Equipment
- Consumables
- Fishing Setups
- Catch Log
- Backup History

---

# User Profile

The User Profile stores basic application information.

## Fields

### displayName

Purpose

User-defined display name.

Ownership

User.

---

### experienceLevel

Purpose

Current fishing experience.

Ownership

User.

Allowed Values

- Beginner
- Intermediate
- Advanced

---

### preferredMeasurementSystem

Purpose

Preferred measurement units.

Ownership

User.

Allowed Values

- Imperial
- Metric

---

### preferredRegion

Purpose

Primary fishing region.

Ownership

User.

---

# Preferences

Preferences control application behavior.

Examples include:

- Theme
- Default Start Page
- Show Beginner Tips
- Enable Notifications
- Reminder Preferences

Preferences affect application behavior but never modify canonical reference data.

---

# Favorites

Favorites allow quick access to commonly used items.

Users may favorite:

- Fish
- Rigs
- Techniques
- Knots
- Lures
- Equipment
- Fishing Setups

Favorites reference canonical entities whenever applicable.

---

# My Tackle / Inventory Ownership

My Tackle is User Knowledge and records the actual equipment and tackle the angler owns.

Canonical Tackle remains Reference Knowledge and defines functional Tackle types.

When the My Tackle implementation becomes authoritative, persistent ownership may only be created or changed through explicit My Tackle ownership-management workflows such as Add Tackle, Edit Tackle, or Remove Tackle.

Rig Readiness, Search, Recommendations, prior readiness checkmarks, borrowed tackle, and inferred usage may read or temporarily use ownership context but may not silently create or modify persistent My Tackle records.

The detailed owned-item schema remains open for the dedicated My Tackle design discussion.

---

# Fishing Setups

Fishing Setups are user-defined collections of equipment intended for a specific purpose.

Examples

- Bass Setup
- Panfish Setup
- Catfish Setup

Each setup references existing inventory items rather than duplicating equipment information.

---

# Catch Log

The Catch Log records individual fishing catches.

Each catch may reference:

- Fish
- Lure
- Rig
- Technique
- Fishing Setup

Additional user-entered information may include:

- Length
- Weight
- Notes
- Catch Date
- General Location
- Photo References

The Catch Log records fishing events and does not modify canonical Fish records.

---

# Backup History

The application may maintain information about completed backups.

Examples

- Backup Date
- Backup Version
- Restore Date

Backup History is informational only and is separate from the backup file itself.

---

# Data Ownership

User Data belongs exclusively to the user.

The Companion shall not modify user-created information except in response to explicit user actions or approved migration processes.

No feature may infer persistent My Tackle ownership merely because tackle was marked temporarily available or used in another workflow.

---

# Rendering Trust Boundary

Canonical project data may be treated as trusted application content.

User-entered and imported content is untrusted by default.

Rendering rules:

- Prefer safe DOM APIs such as `textContent` for User Knowledge.
- Do not concatenate user-controlled strings directly into `innerHTML`.
- Imported data follows the same trust rules as manually entered data.
- If formatted User Knowledge is later required, use one centrally owned, explicitly approved sanitization path.
- Do not scatter ad hoc escaping or sanitization logic across individual features.

Permanent principle:

> **User Knowledge is data, not markup.**

---

# Privacy

User Data is stored locally.

Version 1 does not require an online account.

The user controls backup, restore, import, and export operations.

---

# Design Notes

User Data references canonical entities whenever possible.

Examples

A favorite fish stores the Fish identifier.

A fishing setup stores Equipment identifiers.

A catch stores the Fish identifier rather than copying species information.

A My Tackle item may map to a canonical Tackle type so Rig Readiness can determine buildability without requiring exact brand/model identity.

This minimizes duplication and improves long-term consistency.

---

# Future Enhancements

Potential future additions include:

- Detailed My Tackle owned-item schema
- Multiple user profiles
- Shared family accounts
- Cloud synchronization
- Achievement tracking
- Fishing statistics dashboard
- Rich-text User Knowledge only if an approved need justifies centralized sanitization

These enhancements require separate review before implementation.

---

# Related Documents

- 01-FOUNDATION.md
- 02-FISH.md
- 03-RIGS.md
- 05-INVENTORY.md
- 06-LURES.md
- 08-BACKUP.md
- 09-RELATIONSHIPS.md
