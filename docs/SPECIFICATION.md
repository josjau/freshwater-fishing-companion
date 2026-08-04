# Freshwater Fishing Companion

**Document:** SPECIFICATION.md  
**Version:** 0.1.0  
**Status:** Draft  
**Decision Baseline:** D001

---

# Purpose

This specification defines the functional scope of Freshwater Fishing Companion.

It describes what the application will do, what it will not do, and the principles that guide feature selection.

---

# Product Statement

Freshwater Fishing Companion is a lightweight, mobile-first field companion for freshwater anglers.

It is designed to answer common questions quickly while helping anglers learn, make informed decisions, and fish responsibly.

---

# Primary Goals

The Companion shall:

- Help identify freshwater fish.
- Teach anglers how to build and fish common rigs.
- Teach fishing knots.
- Recommend rigs based on conditions.
- Provide quick access to official fishing regulations.
- Track personal tackle.
- Record catches.
- Promote ethical catch-and-release practices.

---

# Non-Goals

The Companion is not intended to be:

- A social network.
- A tournament platform.
- A weather application.
- A navigation or GPS application.
- A replacement for official fishing regulations.
- An online tackle store.
- A professional fisheries management tool.

---

# Functional Modules

Version 1 is expected to contain the following modules.

## Dashboard

Primary navigation into the application.

---

## Fish ID

- Fish reference library
- Species comparison
- Identification assistance
- Links to official regulations

---

## Rig Guide

- Rig library
- Components
- Assembly instructions
- Fishing techniques
- Recommended conditions

---

## What Should I Throw?

Recommend rigs based on:

- Target species
- Location
- Water clarity
- Cover
- Season
- Experience level

---

## Knots

- Knot library
- Instructions
- Best uses
- Difficulty

---

## Catch Log

Record:

- Species
- Length
- Weight (optional)
- Date
- Location
- Rig used
- Notes
- Photos (future)

---

## My Tackle

Track owned equipment.

Examples include:

- Rods
- Reels
- Line
- Hooks
- Weights
- Soft plastics
- Hard baits
- Terminal tackle

---

## Favorites

Allow users to bookmark:

- Fish
- Rigs
- Knots
- Learning articles

---

## Learn

Educational content for beginner anglers.

---

## Regulations

Provide links to official state regulations.

The Companion will not maintain copies of fishing regulations.

---

## Settings

User preferences.

Examples:

- Theme
- Measurement units
- Appearance
- Default location
- Future preferences

---

# Design Requirements

The application shall:

- Be mobile-first.
- Be usable outdoors.
- Be simple to navigate.
- Require minimal typing.
- Prefer large touch targets.
- Minimize screen clutter.

---

# Technical Requirements

The application shall initially use:

- HTML
- CSS
- JavaScript
- GitHub Pages

Frameworks will only be introduced after documented justification.

---

# Guiding Principles

Every feature should answer one or more of these questions:

- What fish did I catch?
- What should I throw?
- How do I rig this?
- How do I tie this knot?
- Do I own the required tackle?
- Where can I verify the regulations?
- How can I become a better angler?

If a proposed feature does not support the mission of the Companion, it should be deferred or rejected.

---

# Release Philosophy

The project will favor:

- Stability over quantity.
- Simplicity over complexity.
- Documentation before implementation.
- Small incremental improvements.
- Long-term maintainability.