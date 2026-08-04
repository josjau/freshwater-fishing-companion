# Freshwater Fishing Companion

**Document:** 05-INVENTORY.md  
**Version:** 0.1.0  
**Status:** Draft  
**Decision Baseline:** D013

---

# Purpose

This document defines the canonical Inventory model for Freshwater Fishing Companion.

Inventory represents the fishing equipment and consumable tackle owned by the angler.

The Inventory model supports:

- My Tackle
- Fishing Setups
- Recommendations
- Inventory Matching
- Shopping Lists
- Catch Log
- Trip Preparation

Inventory records belong to the user and reference canonical entities whenever possible.

---

# Design Philosophy

The Companion separates inventory into two categories.

- Durable Equipment
- Consumable Tackle

Although both are presented to the user as **My Tackle**, they are managed differently because they have different lifecycles.

---

# Inventory Categories

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

Typical characteristics:

- Individual items
- Condition tracking
- Optional purchase information
- Long service life

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

Typical characteristics:

- Quantity tracking
- Size and color variations
- Low inventory alerts
- Restocking recommendations

---

# Equipment Fields

Every Equipment record includes the Foundation fields.

Additional fields include:

## productDefinitionId

Purpose

References the canonical Product Definition.

Ownership

Application reference.

---

## nickname

Purpose

Optional user-friendly name.

Example

"My Bass Rod"

Ownership

User.

---

## condition

Purpose

Current condition of the equipment.

Allowed Values

- Excellent
- Good
- Fair
- Needs Repair
- Retired

Ownership

User.

---

## inventoryLocationId

Purpose

References the current storage location.

Ownership

User.

---

## notes

Purpose

User notes.

Ownership

User.

---

# Consumable Fields

Every Consumable record includes the Foundation fields where applicable.

Additional fields include:

## productDefinitionId

Purpose

References the canonical Product Definition.

Ownership

Application reference.

---

## quantity

Purpose

Current quantity available.

Ownership

User.

---

## lowStockThreshold

Purpose

Minimum desired quantity before a restock reminder is generated.

Ownership

User.

---

## inventoryLocationId

Purpose

References the current storage location.

Ownership

User.

---

## notes

Purpose

User notes.

Ownership

User.

---

# Inventory Status

Equipment status examples:

- Active
- Loaned
- Retired

Consumable status examples:

- In Stock
- Low Stock
- Out of Stock

Status values assist filtering and recommendations.

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

They reference existing Equipment records.

---

# Inventory Matching

The Companion compares recommended tackle with the user's inventory.

Possible results include:

- Owned
- Partially Complete
- Need to Buy

Inventory Matching uses inventory records and canonical product definitions to determine availability.

---

# Shopping Support

Shopping recommendations are generated from inventory.

Examples include:

- Low Stock
- Out of Stock
- Missing Required Item

Shopping support does not maintain a separate inventory database.

---

# Design Notes

Inventory belongs entirely to the user.

Reference Knowledge remains separate from User Knowledge.

Inventory records should reference canonical entities whenever practical instead of duplicating product information.

---

# Future Enhancements

Potential future additions include:

- Barcode scanning
- Purchase history
- Warranty tracking
- Maintenance reminders
- Import and export

These enhancements are outside the scope of Version 1.

---

# Related Documents

- 01-FOUNDATION.md
- 03-RIGS.md
- 05-INVENTORY.md
- 06-LURES.md
- 07-USER-DATA.md
- 09-RELATIONSHIPS.md
