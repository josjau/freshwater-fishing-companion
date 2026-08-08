# Freshwater Fishing Companion

**Document:** PROJECT.md  
**Document Revision:** 0.2.0  
**Document Status:** Approved  
**Decision Baseline:** D027, D038-D041

# Purpose

Freshwater Fishing Companion is a mobile-first field companion designed to help new freshwater anglers learn, fish responsibly, and enjoy the sport.

The application is intended to be a practical tool used while fishing rather than a general fishing encyclopedia.

# Target Audience

## Primary

- New freshwater anglers
- Returning anglers seeking a quick field reference
- Parents, mentors, and youth learning to fish together

## Secondary

- Casual freshwater anglers looking for a lightweight mobile companion

# Primary Fishing Areas

Initial development, content prioritization, and practical Rig coverage focus on:

- Northeast Oklahoma
- Southwest Kansas

The application architecture remains flexible enough to support additional locations in future releases.

# Mission

Provide a fast, trustworthy, and easy-to-use field companion that helps anglers make good decisions while fishing.

The Companion should teach, build confidence, and encourage ethical fishing practices without overwhelming the user.

# Core Philosophy

- Teach, don't overwhelm.
- Mobile-first.
- Fast, simple, and intuitive.
- Designed for use on the bank, dock, kayak, or boat.
- Link to official fishing regulations rather than maintaining copies.
- Build only features that solve real problems.
- Plan thoroughly before building.
- Documentation is part of the product.
- Search should find the relevant entity quickly, then connected knowledge should expose pertinent next steps.
- Build confidence with broadly useful fundamentals before expanding into specialized fishing methods.

# Design Principles

The Companion should:

- Load quickly.
- Be readable in bright outdoor conditions.
- Require minimal typing.
- Reach common tasks in approximately three intentional interactions whenever practical.
- Favor clarity over visual complexity.
- Remain lightweight and maintainable.
- Prefer strong relevant results over long lists of weak possibilities.
- Use one source of truth for canonical knowledge and ownership.

# Technical Philosophy

- Plain HTML
- Plain CSS
- Plain JavaScript
- GitHub Pages hosting

Frameworks and external dependencies will only be introduced when they provide clear, measurable benefits that outweigh their complexity.

# Long-Term Vision

Freshwater Fishing Companion is intended to become a complete learning and reference companion for freshwater anglers.

Planned capabilities include:

- Fish identification and reference
- Rig Guide
- Technique Guide
- Knot Guide
- Lure/Tackle reference
- Catch Log
- My Tackle inventory
- Favorites
- Learning guidance
- Official regulation links
- Smart recommendations

Each capability is evaluated against the project's mission and current architecture before implementation.

# Rig Learning Direction

The approved initial regional Rig library contains 20 practical rigs for northeast Oklahoma and southwest Kansas.

Six **Core Rigs — Master These First** provide a confidence-building starting set:

- Fixed Bobber Rig
- Basic Bottom Rig — especially useful for catfish
- Jighead + Soft Plastic
- Inline Spinner Setup
- Texas Rig
- Slip Bobber Rig

The goal is to help a newer angler become successful with a small number of broadly useful rigs before expanding the fishing arsenal.

# Project Continuity

`HANDOFF.md` is the repository current-state entrypoint for future sessions and contributors.

A session, module, or section is not finalized until relevant documentation is updated and validated in GitHub. The project does not move into a new build segment while the current segment remains unfinalized.

# Success Criteria

The Companion is successful if a new angler can quickly answer questions such as:

- What fish did I catch?
- What should I throw here?
- How do I rig this?
- How do I tie this knot?
- Can I build this Rig with what I own or have available?
- What useful information should I look at next?
- Where can I verify the current fishing regulations?

while spending more time fishing than navigating the application.

# Related Documents

- `HANDOFF.md`
- `ARCHITECTURE.md`
- `DECISIONS.md`
- `DEVELOPMENT_WORKFLOW.md`
- `ROADMAP.md`
- `SPECIFICATION.md`
