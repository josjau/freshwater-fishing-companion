# Freshwater Fishing Companion — Connected Knowledge Navigation and Dashboard IA

**Document Status:** Approved  
**Implementation Status:** Build Now / Source Update Pending  
**Milestone Impact:** Knots closeout + future Tackle information architecture  
**Recorded:** 2026-08-17  
**Runtime Environment:** Windows Desktop + Microsoft Edge + GitHub Desktop

# Purpose

This document records the UX and information-architecture decisions discovered during Knots integrated runtime validation.

The trigger was Validation Block 2F. Runtime review confirmed that existing cross-domain knowledge links are visually inconsistent: **Knots You'll Tie** uses an obvious compact pill-style control, while Knot **Where You'll Use It** Rig links use a less-obvious row treatment plus redundant `View Rig →` wording. The review also identified static knowledge tags that should become real internal navigation when a valid destination exists.

These findings are classified **Build Now** because connected knowledge is a permanent application principle and the current Knots milestone is already validating the first bidirectional Rig/Knot relationship paths.

# 1. Internal Knowledge Link Standard

Internal links between canonical knowledge entities must use one shared, clearly actionable visual language.

The visual baseline is the compact pill-style treatment already used by **Knots You'll Tie**, aligned with the visual language of the shared floating navigation controls.

Required characteristics:

- compact rounded pill treatment,
- visible border and subtle background,
- clear hover treatment,
- clear keyboard focus treatment,
- touch-friendly target,
- entity or destination name is itself the action,
- `→` may be used to indicate in-application forward navigation,
- internal links must not use the external-navigation `↗` symbol,
- no redundant secondary CTA such as `View Rig`, `View Knot`, or `Learn More` when the destination name already communicates the action.

Examples:

```text
[ Texas Rig → ]
[ Palomar Knot → ]
[ Monofilament → ]
[ Tie On a Hook, Swivel, or Lure → ]
```

A displayed relationship that has no implemented destination must remain visually non-actionable. The application must not create false link affordances.

# 2. Context-Preserving Navigation

Connected knowledge navigation must preserve meaningful return context.

Examples:

- Knot Detail → related Rig → Parent returns to the originating Knot Detail.
- Rig Detail → related Knot → Parent returns to the originating Rig Detail.
- Reel Setup → canonical Knot → Parent returns to the originating Reel Setup step.
- Future Tackle Reference → related Rig/Knot/Line detail → Parent returns to the originating reference context.

All route transitions continue to follow the approved top-reset behavior: the destination opens at the top.

# 3. Knot Detail Corrections

## Where You'll Use It

Related Rigs must use the shared internal knowledge-link pill treatment.

Current row-style presentation and the separate `View Rig →` wording are superseded.

Approved presentation is the Rig name itself as the actionable control, for example:

```text
[ Texas Rig → ]
```

Supporting difficulty/application context may remain nearby as non-action text when useful.

## Common Tasks

Common Task labels must become clickable when the corresponding implemented Knot task destination exists.

Selecting a Common Task opens the matching Knot task browse context using the existing task-oriented Knot navigation model.

Examples include:

- Tie On a Hook, Swivel, or Lure
- Connect Two Lines / Add a Leader
- Make a Loop Connection

`Attach Line to a Reel` remains a specialized task whose destination is Reel Setup rather than a standard Knot browse collection.

## Line Compatibility

`Monofilament`, `Fluorocarbon`, and `Braid` must become internal knowledge links once their canonical Line Type detail destination is implemented.

Line compatibility must not link into an arbitrary middle step of Reel Setup merely because Reel Setup currently contains line guidance. Reel Setup is a workflow, not the authoritative general-purpose Line Reference destination.

# 4. Canonical Line Type Reference Direction

The project may implement the minimal canonical Line Type detail destination now without building the full Tackle Reference milestone.

Initial canonical Line Type identities:

```text
monofilament
fluorocarbon
braid
```

These are Layer 1 Reference Knowledge entities and must be reusable by Knots, Rigs, Reel Setup, future Recommendations, Tackle Reference, and other appropriate domains.

The initial implementation may expose these detail pages only through contextual links. A complete Fishing Line browse hierarchy is not required during the Knots closeout.

Future Tackle navigation will provide the normal browse path:

```text
Dashboard
└── Tackle
    └── Tackle Reference / Find Tackle
        └── Fishing Line
            ├── Monofilament
            ├── Fluorocarbon
            └── Braid
```

The same canonical Line Type detail pages are used regardless of entry path.

# 5. Tackle Domain Information Architecture

The current Dashboard root label **My Tackle** is approved to become **Tackle** when the Tackle hub is implemented.

This is a root-domain expansion, not a rename of the user inventory feature itself.

Approved structure:

```text
Dashboard
└── Tackle
    ├── Tackle Reference / Find Tackle
    └── My Tackle
```

Responsibilities remain separate:

- **Tackle Reference / Find Tackle** — Layer 1 Reference Knowledge: definitions, recognition, variants, relationships, Line Types, and reusable canonical tackle knowledge.
- **My Tackle** — Layer 3 User Knowledge: actual user-owned equipment, consumables, inventory management, and persistent ownership authority.

My Tackle remains the authoritative ownership feature. It is not absorbed into Reference Knowledge.

The existing implementation that mixes inventory-oriented and reference-oriented cards under a root titled **My Tackle** is transitional and should be separated when the Tackle domain milestone is implemented.

# 6. Dashboard Primary Domains

The Dashboard will use deliberate primary visual emphasis for four foundational application domains:

1. **Fish Guide**
2. **Knots**
3. **Rig Guide**
4. **Tackle**

These four are emphasized because they form the application's foundational reference and learning system:

- identify/understand the fish,
- make the required line connections,
- build a fishable terminal setup,
- understand and manage the tackle used to do it.

Primary emphasis is instructional hierarchy, not decoration. The four cards should share one consistent primary treatment derived from the existing Dashboard/Card design system.

## Other Dashboard Cards

No additional Dashboard card is approved for the same primary emphasis at this time.

**What Should I Throw?** remains important Decision Knowledge, but it is downstream of the foundational Fish/Rig/Knot/Tackle knowledge and should remain a standard card so the primary hierarchy is not diluted.

**Catch Log** and **My Tackle**-specific ownership workflows are User Knowledge utilities and do not receive foundational-domain emphasis.

**Settings** and **Favorites** remain support/utility features.

**Regulations** remains an important external safety/compliance destination and retains explicit external-destination semantics; it should not be styled as another foundational learning domain merely to compete visually with the four primary cards.

This decision may be revisited only if actual application use demonstrates another domain belongs in the same foundational tier.

# 7. Current Build Boundary

Before completing Knots milestone runtime closeout, implement only the connected-navigation work required to establish the permanent standard:

1. shared internal knowledge-link pill style,
2. Knot **Where You'll Use It** Rig links converted to the shared treatment,
3. redundant `View Rig →` wording removed,
4. Knot Common Tasks converted to working contextual links,
5. minimal canonical Line Type reference/detail routing sufficient for Line Compatibility links,
6. Knot Line Compatibility converted to working contextual links,
7. existing Rig → Knot and Reel Setup → Knot connected navigation preserved,
8. return-context and top-reset behavior regression-tested.

Do **not** expand this correction into the full Tackle Reference browse milestone, persistent My Tackle implementation, or a broad Dashboard redesign beyond the approved primary-domain hierarchy.

# 8. Documentation Follow-Up

During the next global documentation reconciliation:

- add the internal connected-knowledge rule to `docs/DECISIONS.md` as the next permanent decision,
- add the Dashboard primary-domain/Tackle-hub rule to `docs/DECISIONS.md`,
- update `docs/ROADMAP.md` so Tackle Reference and My Tackle are shown as separate capabilities under the future **Tackle** root,
- update `docs/HANDOFF.md` with the corrected Knots closeout stopping point,
- update navigation/UI standards where appropriate after runtime validation passes.

# Permanent Principles

> If canonical knowledge is displayed and an implemented destination exists, the relationship should be directly navigable using the shared internal knowledge-link treatment.

> Fish Guide, Knots, Rig Guide, and Tackle are the four foundational Dashboard domains and receive deliberate primary visual emphasis.

> Tackle is the domain hub; Tackle Reference and My Tackle remain separate Reference Knowledge and User Knowledge capabilities beneath it.
