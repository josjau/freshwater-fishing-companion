# Freshwater Fishing Companion

**Document:** 05-INVENTORY.md  
**Version:** 0.1.0  
**Status:** Draft  
**Decision Baseline:** D028

---

# Purpose

This document defines the Inventory/My Tackle model direction for Freshwater Fishing Companion.

Inventory represents the actual fishing equipment and consumable tackle owned by the angler.

The Inventory model supports:

- My Tackle
- Fishing Setups
- Recommendations
- Inventory Matching
- Rig Readiness
- Shopping Lists
- Catch Log
- Trip Preparation

Inventory records belong to the user and reference canonical entities whenever practical.

---

# Design Philosophy

Canonical Tackle and My Tackle answer different questions.

Canonical Tackle is Reference Knowledge and defines the functional tackle type, such as:

- Offset Hook
- Spinnerbait
- Crankbait
- Bullet Weight
- Jighead
- Slip Float
- Barrel Swivel
- Soft Plastic Worm
- Inline Spinner

My Tackle is User Knowledge and defines the actual items owned by the angler.

A commercial Product Definition layer is not required for the My Tackle MVP or for basic Rig readiness. ProductDefinition may be introduced later if exact commercial-product identity becomes necessary for an approved feature.

The detailed schema for an owned item — including decisions about brand, model, size, color, quantity, condition, notes, unmapped items, and durable-vs-consumable details — remains open for the dedicated My Tackle design discussion.

---

# Inventory Categories

The approved architecture continues to recognize two broad lifecycle categories.

## Equipment

Equipment represents durable items expected to remain in inventory.

Examples:

- Rods
- Reels
- Nets
- Pliers
- Scales
- Tackle Boxes
- Kayaks

Potential characteristics include individual identity, condition, location, and long service life.

---

## Consumables

Consumables are expected to be depleted, lost, or replaced through normal fishing.

Examples:

- Hooks
- Weights
- Line
- Soft Plastics
- Jig Heads
- Swivels
- Snaps
- Bobber Stops
- Beads

Potential characteristics include quantity, size/variant details, and future restocking support.

The exact MVP treatment of these categories remains open and must not be inferred from this document beyond the approved ownership/readiness rules below.

---

# Canonical Tackle Mapping

For tackle types used by supported Rigs, My Tackle should map an owned item to the relevant canonical Tackle concept whenever practical.

Conceptually:

```text
Owned Item
    -> canonicalTackleId
```

The canonical Tackle relationship answers what functional type the owned item can satisfy.

Examples:

```text
Owned commercial hook
    -> Offset Hook

Owned crankbait
    -> Crankbait
```

Exact owned-item attributes remain part of the later My Tackle schema discussion.

---

# My Tackle Write Authority

My Tackle is the only persistent ownership source of truth once the Inventory implementation becomes authoritative.

Persistent My Tackle data may only be created or changed through explicit ownership-management workflows within My Tackle, such as:

- Add Tackle
- Edit Tackle
- Remove Tackle

Other features may read My Tackle but may not silently write ownership.

Specifically, persistent ownership shall not be created or modified by:

- Rig Readiness
- Search
- Recommendations
- A prior readiness checkbox
- Borrowing tackle for one session
- Inferring ownership because an item was used
- Any background or automatic inference

Canonical project builds may define or update Reference Knowledge such as canonical Tackle types, but they do not fabricate user ownership records.

---

# Rig Readiness Integration

Rig Readiness answers:

> Can I build this Rig with what I own or have available for this build/session?

When My Tackle is implemented as the authoritative ownership source:

1. Rig requirements reference canonical Tackle types.
2. Rig Readiness checks My Tackle for owned items mapped to each required type.
3. Owned required types are automatically satisfied.
4. Missing items may be marked temporarily available for the current build/session.
5. Temporary availability does not modify My Tackle.

Temporary availability may represent tackle that was:

- Borrowed
- Just purchased but not yet entered
- Available at the moment for another reason

The readiness system does not require an ideal brand/model combination before declaring a Rig buildable.

Permanent principle:

> **Readiness answers buildability first; optimization comes later.**

---

# Transitional Readiness State

**Current:** the application uses a lightweight per-Rig local readiness state.

**Approved / Not Implemented:** once My Tackle is authoritative, the old readiness state will no longer be a persistent ownership source.

Existing readiness checkmarks shall not be automatically migrated into My Tackle because a checkmark does not prove maintained ownership inventory.

The future implementation may preserve temporary session availability separately if required, but that state must never become a second persistent ownership database.

---

# Fishing Setups

A Fishing Setup references existing inventory items.

Examples:

Bass Setup

- Rod
- Reel
- Line

Panfish Setup

- Rod
- Reel
- Line

Setup records do not duplicate inventory.

They reference existing owned items.

---

# Inventory Matching

Inventory matching should use canonical functional relationships when the feature does not require exact commercial-product identity.

For Rig Readiness, the required comparison is between:

```text
Rig.componentRequirements
    -> canonical Tackle type
    -> My Tackle owned-item mapping
```

Exact size/style compatibility may be added later where it materially determines whether a Rig can actually be built, but this sophistication is not required for the first readiness implementation.

---

# Shopping Support

Shopping recommendations may eventually be generated from inventory and missing requirements.

Shopping support does not maintain a separate ownership database and may not silently add purchases to My Tackle.

If a future workflow offers to add a newly purchased item, ownership must still be committed through an explicit user action in an approved My Tackle workflow.

---

# User Data Safety

Inventory is User Knowledge.

User-entered Inventory text is untrusted by default and should be rendered through safe DOM APIs such as `textContent`.

Inventory values must not be concatenated directly into `innerHTML`.

---

# Future Enhancements

Potential future additions include:

- Detailed owned-item schema
- Commercial ProductDefinition entities
- Barcode scanning
- Purchase history
- Warranty tracking
- Maintenance reminders
- Import and export
- Size/style-aware readiness
- User-owned tackle imagery surfaced in Rig Readiness

These enhancements require separate architectural or schema approval as appropriate.

---

# Related Documents

- 01-FOUNDATION.md
- 03-RIGS.md
- 06-LURES.md
- 07-USER-DATA.md
- 09-RELATIONSHIPS.md
