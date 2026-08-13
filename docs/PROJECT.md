# Freshwater Fishing Companion

**Document:** PROJECT.md  
**Document Revision:** 0.3.0  
**Document Status:** Approved  
**Decision Baseline:** D027, D038-D041

# Purpose

Freshwater Fishing Companion is a mobile-first field companion designed to help first-time and new freshwater anglers learn, prepare to fish, fish responsibly, and enjoy the sport.

The application is intended to be a practical tool used before and while fishing rather than a general fishing encyclopedia.

# Target Audience

## Primary

- First-time freshwater anglers
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

Provide a fast, trustworthy, and easy-to-use companion that helps a first-time or new angler move from uncertainty to actually fishing with as little unnecessary friction as practical.

The Companion should teach, build confidence, and encourage ethical fishing practices without overwhelming the user.

It should address basic setup questions that experienced anglers may take for granted when those questions can prevent a beginner from getting on the water or making a first cast.

# Core Philosophy

- Teach, don't overwhelm.
- Help the user get fishing, not merely read about fishing.
- Do not assume beginner setup knowledge that has not been taught.
- Make essential pre-fishing preparation easy to find early.
- Mobile-first.
- Fast, simple, and intuitive.
- Designed for use before the trip and on the bank, dock, kayak, or boat.
- Link to official fishing regulations rather than maintaining copies.
- Build only features that solve real problems.
- Plan thoroughly before building.
- Documentation is part of the product.
- Search should find the relevant entity quickly, then connected knowledge should expose pertinent next steps.
- Build confidence with broadly useful fundamentals before expanding into specialized fishing methods.

# First-Time Angler Readiness Principle

A beginner should not be blocked from fishing because the application omitted a foundational task that experienced anglers consider obvious.

When a practical prerequisite is necessary to get from equipment to a fishable setup, the Companion should teach it or provide a clear path to it.

Examples include:

- putting line on a reel correctly,
- understanding when backing is needed,
- connecting backing to main line,
- choosing and tying an appropriate terminal knot,
- assembling a basic Rig,
- identifying the minimum tackle needed to fish that Rig,
- understanding the next immediate step after setup.

These workflows should favor simple, dependable beginner methods before advanced alternatives.

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
- Surface prerequisite setup guidance before the user is likely to need it rather than requiring them to know the correct technical term to search for.

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
- Favorites or a later approved replacement
- Learning guidance
- Official regulation links
- Smart recommendations

Each capability is evaluated against the project's mission and current architecture before implementation.

# Rig Learning Direction

The approved initial regional Rig library contains 20 practical rigs for northeast Oklahoma and southwest Kansas.

Six Core Rigs provide a confidence-building starting set:

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

The Companion is successful if a first-time or new angler can quickly answer questions such as:

- How do I put line on this reel and get it ready to fish?
- Do I need backing, and how do I connect it?
- What fish did I catch?
- What should I throw here?
- How do I rig this?
- How do I tie this knot?
- Can I build this Rig with what I own or have available?
- What useful information should I look at next?
- Where can I verify the current fishing regulations?

while spending more time preparing to fish or fishing than navigating the application or searching elsewhere for basic setup information.

# Related Documents

- `HANDOFF.md`
- `ARCHITECTURE.md`
- `DECISIONS.md`
- `DEVELOPMENT_WORKFLOW.md`
- `ROADMAP.md`
- `SPECIFICATION.md`
