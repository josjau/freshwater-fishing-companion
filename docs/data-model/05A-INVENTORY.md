# Freshwater Fishing Companion

**Document:** 05A-INVENTORY.md  
**Document Revision:** 0.4.0  
**Document Status:** Draft  
**Implementation Status:** Approved / Not Implemented  
**Decision Baseline:** D028, D056, D067, D069

---

# Purpose

This document defines the approved architectural boundary for future My Tackle/Inventory User Knowledge.

My Tackle represents actual fishing equipment and consumable tackle owned by the angler. No authoritative My Tackle production dataset or owned-item schema is implemented on current `main`.

---

# Current Status

**Approved / Not Implemented.**

The application currently has lightweight per-Rig local readiness selections. Those selections are transitional availability state, not authoritative persistent ownership records and must not be migrated automatically into My Tackle.

Canonical Tackle and the approved future Lure/Bait domain remain Reference Knowledge. My Tackle will become the persistent ownership source of truth only after its dedicated schema and workflows are implemented and validated.

---

# Ownership Boundary

Canonical Tackle answers:

> What functional tackle/equipment type is this?

Canonical Lure/Bait answers:

> What lure or bait identity is presented to the Fish?

My Tackle answers:

> What fishing items do I actually own, and what relevant variants do I have?

Under D067/UD-1, those owned items belong to the persistent user/profile identity that may span multiple devices. Canonical Tackle remains global application Reference Knowledge rather than being duplicated per user. The exact My Tackle owned-item schema, sync behavior per record, and ownership-vs-current-availability representation remain unresolved until the User Data/My Tackle gates close.

A commercial Product Definition layer is not required for My Tackle MVP or basic Rig readiness. Product Definition remains deferred until an approved product-specific feature demonstrates a need.

---

# Owned-Item Schema — Unresolved

The detailed owned-item schema is intentionally open.

Earlier planning identified possible concepts such as:

- canonical Tackle and/or canonical Lure/Bait mapping as applicable,
- user-defined name,
- brand/model,
- size or variant,
- color,
- quantity,
- condition,
- notes,
- photo references,
- durable-versus-consumable behavior.

These are design inputs, **not approved production fields**. The My Tackle architecture gate may retain, rename, combine, normalize, or reject them based on demonstrated features.

No placeholder fields should be added before that gate.

---

# Equipment and Consumables

The architecture recognizes that owned fishing items may have different lifecycle behavior.

Durable equipment may include rods, reels, nets, pliers, scales, tackle boxes, or watercraft. Consumables may include hooks, weights, line, soft plastics, jigheads, swivels, snaps, bobber stops, or beads.

These examples do not establish separate production schemas or require every owned item to use the same fields. Exact lifecycle modeling remains unresolved.

---

# Canonical Tackle Mapping

For owned items that satisfy supported Rig requirements, My Tackle should map to canonical Tackle whenever practical.

Conceptually:

```text
User/Profile
    -> Owned Item
        -> canonical Tackle concept
```

The exact field name and cardinality are not approved until the My Tackle schema gate.

This relationship must follow D056 single-owner semantics and must not duplicate canonical Tackle identity or Rig requirement data into the owned item unnecessarily.

---

# Ownership vs Current Availability

D069 requires the My Tackle prerequisite to support recommendation availability without collapsing **owned** into **currently available**. Persistent ownership remains authoritative User Knowledge changed only through explicit My Tackle workflows. Temporary/session availability, borrowed tackle, or “with me now” state may be supported, but the exact V1 representation is deliberately deferred to the Settings / User Data + My Tackle gate.

The scoped My Tackle Availability Foundation is complete when the application can authoritatively match the relevant canonical Tackle/Lure/Bait and fishing-relevant variants needed to determine recommendation executability. Full inventory-management breadth is not a prerequisite for What Should I Throw production.

# My Tackle Write Authority

Once implemented, My Tackle is the only persistent ownership source of truth.

Persistent ownership may be created or changed only through explicit ownership-management workflows such as Add Tackle, Edit Tackle, or Remove Tackle.

Other features may read ownership but may not silently create or modify it. This includes:

- Rig Readiness,
- Search,
- Recommendations,
- prior readiness checkmarks,
- borrowed tackle,
- inferred usage,
- background inference.

---

# Rig Readiness Integration

Rig Readiness answers whether the current Rig can be built with owned or temporarily available tackle.

When My Tackle becomes authoritative:

```text
Rig.componentRequirements[].tackleId
    -> canonical Tackle
    -> My Tackle owned-item mapping
```

Owned required types may satisfy the Rig automatically. A missing item may be marked temporarily available for the current build/session without creating persistent ownership.

Permanent principle:

> **Readiness answers buildability first; optimization comes later.**

---

# Transitional Readiness State

Current local readiness selections remain transitional application state.

They do not prove maintained ownership and therefore must not be treated as My Tackle records. A future implementation may preserve temporary availability separately if needed, but it must not become a second persistent ownership database.

---

# Fishing Setups — Concept Approved / Schema Unresolved

A future Fishing Setup may reference existing owned equipment for a particular purpose, such as a Bass, Panfish, or Catfish setup.

The principle is approved: setup records should reference owned items rather than duplicate them.

The exact Fishing Setup entity, fields, identifiers, persistence behavior, and relationship cardinalities are **not implemented or approved as a production schema** by this document.

---

# Inventory Matching

Inventory matching should use canonical functional relationships when exact commercial-product identity is unnecessary.

Size/style-aware compatibility may be introduced where it materially determines buildability, but that requirement must be demonstrated before additional schema is added.

---

# Shopping Boundary

Future shopping support may consume missing ownership/readiness information. It does not own persistent inventory and may not silently add purchases to My Tackle.

Any future purchase-to-inventory workflow must require an explicit user ownership action.

---

# User Data Safety

My Tackle is User Knowledge.

User-entered and imported text is untrusted by default and should render through safe DOM APIs such as `textContent`. User-controlled strings must not be concatenated directly into `innerHTML`.

---

# Implementation Gate

Before My Tackle becomes authoritative, the Settings / User Data Architecture gate and the later My Tackle design must settle at least:

1. stable user/profile identity and owned-item ownership semantics,
2. owned-item identity and field schema,
3. canonical Tackle and Lure/Bait mapping semantics as applicable,
4. durable-versus-consumable lifecycle requirements,
5. quantity and fishing-relevant variant behavior,
6. explicit Add/Edit/Remove ownership workflows,
7. persistent ownership versus temporary/current availability semantics,
8. transitional readiness-state replacement behavior,
9. recommendation executability matching required by D069,
10. Fishing Setup schema if included in the same milestone,
11. persistence, retention, validation, migration, backup, and import/export requirements,
12. User Knowledge rendering and sanitization boundaries.

---

# Future Enhancements

Potential later capabilities include commercial Product Definitions, barcode scanning, purchase history, warranty/maintenance tracking, size-aware readiness, user-owned imagery, and restocking assistance. These are feature candidates rather than current schema requirements.

---

# Related Documents

- 01-FOUNDATION.md
- 03-RIGS.md
- 05-TACKLE.md
- 07-USER-DATA.md
- 09-RELATIONSHIPS.md
- ../DECISIONS.md
