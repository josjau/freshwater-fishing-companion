# Freshwater Fishing Companion

**Document:** 07-USER-DATA.md  
**Version:** 0.1.0  
**Status:** Draft  
**Decision Baseline:** D013

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

The Companion shall not modify user-created information except in response to user actions or approved migration processes.

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

This minimizes duplication and improves long-term consistency.

---

# Future Enhancements

Potential future additions include:

- Multiple user profiles
- Shared family accounts
- Cloud synchronization
- Achievement tracking
- Fishing statistics dashboard

These enhancements are outside the scope of Version 1.

---

# Related Documents

- 01-FOUNDATION.md
- 02-FISH.md
- 03-RIGS.md
- 05-INVENTORY.md
- 06-LURES.md
- 08-BACKUP.md
- 09-RELATIONSHIPS.md
