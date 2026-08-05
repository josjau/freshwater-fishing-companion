# Freshwater Fishing Companion

**Document:** ARCHITECTURE.md  
**Version:** 0.2.0  
**Status:** Active  
**Last Updated:** 2026-08-05  
**Decision Baseline:** D002

---

# Purpose

This document defines the current technical architecture of Freshwater Fishing Companion.

It is the primary implementation reference for:

- Application structure
- Source-file ownership
- Data ownership
- Module dependencies
- Browser load order
- Navigation architecture
- Storage architecture
- Performance and maintenance standards

The architecture must remain lightweight, reliable, local-first, and free of unnecessary complexity.

---

# Architectural Priorities

When multiple technical solutions are available, decisions shall follow this priority order:

1. Reliability
2. Simplicity
3. Maintainability
4. Performance
5. Cost
6. Expandability

A new abstraction, dependency, service, or source file must provide a measurable implementation or maintenance benefit.

Premature abstraction is not permitted.

---

# Hosting and Repository

## Hosting

The application is hosted using:

- GitHub Pages

## Authoritative Source

GitHub is the authoritative source for all project files.

Before modifying an existing source file:

1. Retrieve the latest GitHub version.
2. Review the complete file.
3. Make the smallest practical change.
4. Validate the finished file against the current application.
5. Provide a complete validation copy after all planned edits to that file are finished.

Previously proposed code must never be assumed to have been implemented.

---

# Technology Stack

Version 1 uses:

- HTML5
- CSS3
- JavaScript ES6+
- IndexedDB
- GitHub Pages

The project does not currently use:

- A JavaScript framework
- A build system
- A backend service
- A user-account service
- A required cloud service
- A package manager dependency

A framework or external runtime dependency may be introduced only after a documented architectural review demonstrates a clear benefit over native browser capabilities.

---

# Local-First Architecture

Freshwater Fishing Companion is a local-first client-side application.

The application should:

- Work without a backend server.
- Remain usable without an Internet connection except for intentionally external resources.
- Store user-created data locally.
- Require no user account.
- Avoid recurring operating costs.
- Remain understandable and maintainable by a small development team.

The browser owns:

- Application execution
- Interface rendering
- Navigation
- Reference-data access
- User-data storage
- Search and filtering
- Future offline operation

GitHub Pages owns:

- Static file delivery

The user owns:

- Backup storage
- Backup restoration decisions
- Optional external file storage

---

# Three-Layer Knowledge Architecture

The application uses three permanent knowledge layers.

## Layer 1 — Reference Knowledge

Application-owned canonical data.

Examples:

- Fish
- Rigs
- Techniques
- Conditions
- Knots
- Lures
- Tackle definitions
- Identification traits
- Regulation resources

Reference records:

- Exist once.
- Use stable identifiers.
- Are maintained by the application.
- Are referenced by identifier from other records.
- Are not duplicated inside user records.

Current implementation:

```text
data/fish.js
