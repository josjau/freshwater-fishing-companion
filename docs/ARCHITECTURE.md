# Freshwater Fishing Companion

**Document:** ARCHITECTURE.md  
**Version:** 0.1.0  
**Status:** Draft  
**Decision Baseline:** D002

---

# Purpose

This document defines the technical architecture of Freshwater Fishing Companion.

The goal is to provide a stable, maintainable foundation that supports future growth while remaining lightweight, reliable, and free of unnecessary complexity.

---

# Architectural Philosophy

The Companion follows a **local-first** architecture.

The application should:

- Work without a server.
- Function without an Internet connection except where online resources are intentionally used.
- Store user-generated data locally.
- Require no user account.
- Incur no recurring operating costs.
- Remain easy to understand and maintain.

Whenever multiple technical solutions exist, preference will be given to the simplest solution that satisfies the project requirements.

---

# Hosting

Application hosting:

- GitHub Pages

Repository:

- GitHub

No backend infrastructure is required for Version 1.

---

# Technology Stack

Version 1 technologies:

- HTML5
- CSS3
- JavaScript (ES6+)
- IndexedDB
- GitHub Pages

No JavaScript framework will be introduced unless a documented architectural review determines that the benefits outweigh the additional complexity.

---

# Application Architecture

The Companion will operate as a lightweight client-side application.

Responsibilities include:

GitHub Pages

- Deliver application files

Browser

- Execute application logic
- Store user data
- Render user interface
- Manage offline operation

User

- Manage backups
- Restore backups when necessary

---

# Storage Architecture

## Reference Data

Reference data includes information provided by the application.

Examples:

- Fish
- Rigs
- Knots
- Learning articles
- Waterbody information
- Species information

Reference data is stored within the application.

---

## User Data

User-generated data includes:

- Profiles
- Preferences
- Favorites
- Tackle inventory
- Catch log

User data is stored locally using IndexedDB.

---

# Backup Strategy

Version 1 includes:

- Export Backup
- Restore Backup

Backup characteristics:

- JSON format
- Versioned
- Human-readable where practical
- Validated before restore
- Automatic compatibility verification

Backups are intended to be stored by the user using services such as:

- iCloud Drive
- Google Drive
- OneDrive
- Files

The Companion will never require cloud storage.

---

# Offline Operation

The Companion should remain fully usable without Internet access except for:

- Opening official regulation websites
- Future optional online services

All user-generated data shall remain available offline.

---

# Navigation Philosophy

Primary tasks should require no more than three selections whenever practical.

The application should prioritize:

1. Fish ID
2. Rig Guide
3. What Should I Throw?

Supporting modules remain immediately accessible from the dashboard.

---

# User Interface Philosophy

The Companion is designed for outdoor use.

Requirements:

- Large touch targets
- Dark theme
- High contrast
- Minimal typing
- Fast navigation
- Minimal visual clutter

Animations should improve usability and should never delay access to information.

---

# Data Philosophy

Reference information shall have a single authoritative source.

Examples:

A rig exists once.

Fish information exists once.

Knots exist once.

Every module references the same data rather than maintaining duplicate copies.

This principle minimizes maintenance and ensures consistency throughout the application.

---

# Performance Philosophy

The Companion should feel instantaneous.

Performance goals:

- Fast startup
- Responsive navigation
- Small download size
- Minimal dependencies
- Efficient local storage

Performance improvements that do not change user experience may be implemented without architectural review.

---

# Future Expansion

The architecture intentionally allows future additions including:

- Progressive Web App (PWA)
- Cloud synchronization
- Photo management
- AI-assisted fish identification
- Additional geographic regions

Future enhancements must not compromise the project's core philosophy of simplicity and maintainability.

---

# Architectural Principles

Every architectural decision should satisfy the following priorities:

1. Reliability
2. Simplicity
3. Maintainability
4. Performance
5. Cost
6. Expandability

When tradeoffs are required, reliability and simplicity take precedence over adding features.