# Freshwater Fishing Companion

**Document:** 08-BACKUP.md  
**Version:** 0.1.0  
**Status:** Draft  
**Decision Baseline:** D013

---

# Purpose

This document defines the backup and restore architecture for Freshwater Fishing Companion.

The backup system protects user-owned data while preserving compatibility between application versions.

Reference Knowledge is distributed with the application and is not required to be included in user backups unless specifically exported.

---

# Design Philosophy

The Companion follows a local-first approach.

Users control when backups are created, exported, restored, and deleted.

Backups should be:

- Simple
- Portable
- Human-readable when practical
- Version-aware
- Reliable

---

# Backup Scope

A standard backup includes user-owned data.

Examples include:

- User Profile
- Preferences
- Favorites
- Equipment
- Consumables
- Fishing Setups
- Catch Log

Reference Knowledge is restored through application updates and is not duplicated in normal backups.

---

# Backup Format

Version 1 uses JSON.

Every backup shall contain:

- Backup Version
- Application Version
- Backup Date
- Schema Version
- User Data

Additional metadata may be added in future versions without breaking compatibility.

---

# Backup Versioning

Every backup contains a schema version.

The application compares the backup schema against the current schema before restoration.

Possible outcomes:

- Compatible
- Migration Required
- Unsupported

---

# Restore Process

Restore operations should:

1. Validate the backup file.
2. Verify schema compatibility.
3. Create a safety backup of existing user data.
4. Restore the selected backup.
5. Report the results to the user.

If validation fails, no user data shall be modified.

---

# Migration

When supported, the Companion may migrate older backup formats.

Migration should:

- Preserve user data.
- Report any changes made.
- Never silently discard information.

If migration cannot be completed safely, the restore shall be cancelled.

---

# Validation

Before restoring, the application validates:

- Backup format
- Required fields
- Schema version
- Data integrity

Validation failures should clearly explain the issue and provide guidance where possible.

---

# Error Handling

Restore failures shall:

- Leave existing data unchanged.
- Explain the reason for the failure.
- Avoid partial restores.

The Companion should never overwrite valid user data with invalid backup data.

---

# Import and Export

Users may:

- Export a backup.
- Import a backup.
- Replace existing user data during restoration.

Version 1 restores the complete backup.

Selective restore may be considered in a future release.

---

# Privacy

Backup files belong to the user.

The Companion does not require cloud storage or online services to create or restore backups.

Users choose where backup files are stored.

---

# Design Notes

The backup system protects User Knowledge.

Reference Knowledge is maintained by the application and updated independently.

This separation reduces backup size and simplifies future application updates.

---

# Future Enhancements

Potential future additions include:

- Automatic backup reminders
- Encrypted backups
- Optional cloud backup providers
- Selective restore
- Backup comparison

These enhancements are outside the scope of Version 1.

---

# Related Documents

- 01-FOUNDATION.md
- 05-INVENTORY.md
- 07-USER-DATA.md
- 09-RELATIONSHIPS.md
