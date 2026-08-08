# Freshwater Fishing Companion

**Document:** RIG-TACKLE-DATA-INTEGRITY-VALIDATION.md  
**Document Revision:** 0.1.1  
**Document Status:** Approved  
**Implementation Status:** In Progress  
**Last Updated:** 2026-08-08

# Purpose

Validation checklist for Rig/Tackle Data Integrity Batch 1.

# Replacement-Integrity Validation

Before the corrective ZIP is delivered:

- compare corrected documentation against the exact pre-change GitHub baseline,
- confirm every pre-existing Markdown heading is preserved unless explicitly authorized otherwise,
- confirm no corrected document shrinks by more than 10 percent,
- confirm deleted-line volume is below the 10 percent targeted-change threshold,
- confirm the ZIP contains only intended permanent repository files.

Future documentation replacement packages must pass the same gate.

# Repository Validation

After push, confirm:

- `data/rigs.js` requirements use `tackleId`.
- No Rig requirement duplicates canonical Tackle `name`.
- `data/tackle.js` contains no Rig-usage `rigIds`.
- `view-renderer.js` derives `Used In` from active Rig requirements.
- `script.js` uses `tackleId` consistently for readiness callbacks.
- No package-only root artifacts were added.
- All governing/data-model/workstream documents in this package are present.

# Data Integrity

Confirm every current Rig component `tackleId` resolves to an active canonical Tackle record.

Expected current distinct Tackle IDs:

- fixed-bobber
- split-shot
- hook
- bait
- bobber-stop
- stop-bead
- slip-float
- sliding-sinker
- bead
- barrel-swivel
- leader-line
- bullet-weight
- offset-worm-hook
- soft-plastic
- weight-peg

# Runtime Regression

Validate all four current Rigs:

- Fixed Bobber Rig
- Slip Bobber Rig
- Basic Bottom Rig
- Texas Rig

For each:

- Rig detail opens.
- `What You Need` displays canonical Tackle names.
- `Name ⓘ` opens the correct Tackle reference.
- Required/Optional labels remain correct.
- Ready/Missing status updates.
- Missing-item status uses canonical Tackle names.
- Existing readiness selections persist across navigation/reload.

# Derived Used In

Spot-check:

- Split Shot → Fixed Bobber Rig, Slip Bobber Rig
- Fishing Hook → Fixed Bobber Rig, Slip Bobber Rig, Basic Bottom Rig
- Bullet Weight → Texas Rig
- Offset Worm Hook → Texas Rig

Confirm no stale manual Tackle relationship is required.

# Regression Protection

Confirm:

- Fish Search still works.
- Rig browse/search still works.
- external Rig reference links still work.
- related Tackle popover navigation still works.
- no normal-navigation console errors occur.
- phone and desktop layouts remain usable.

# Closeout

When all checks pass:

- update this document to `Implementation Status: Validated`,
- update `HANDOFF.md`,
- update any milestone/changelog status that changes,
- push and re-fetch GitHub,
- only then begin the next segment.
