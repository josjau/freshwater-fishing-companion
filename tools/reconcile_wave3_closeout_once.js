"use strict";

const fs = require("fs");
const cp = require("child_process");

function replaceOnce(file, before, after) {
  const text = fs.readFileSync(file, "utf8");
  const first = text.indexOf(before);
  if (first < 0) throw new Error(`${file}: expected text not found`);
  if (text.indexOf(before, first + before.length) >= 0) throw new Error(`${file}: expected text is not unique`);
  fs.writeFileSync(file, text.slice(0, first) + after + text.slice(first + before.length), "utf8");
}

function insertBefore(file, marker, insertion) {
  const text = fs.readFileSync(file, "utf8");
  if (text.includes(insertion.trim())) return;
  const i = text.indexOf(marker);
  if (i < 0) throw new Error(`${file}: insertion marker not found`);
  fs.writeFileSync(file, text.slice(0, i) + insertion + text.slice(i), "utf8");
}

replaceOnce("docs/CHANGELOG.md", "**Document Revision:** 2.3.3", "**Document Revision:** 2.3.4");
replaceOnce(
  "docs/CHANGELOG.md",
  "- Repository integrity, syntax/structure, locked-package fidelity, approved Bass asset hashes, and working-package round-trip checks pass. The package remains uncommitted until separate explicit commit/push authorization.",
  "- Repository integrity, syntax/structure, locked-package fidelity, approved Bass asset hashes, and working-package round-trip checks passed. Wave 3 source/user-facing implementation landed at `0b982bbbe10b0b2758759869e6682d6b6734475e`, closeout documentation landed at `19b91b6303b3a3369f0c0a9dd6ac1018457d9b7f`, and Wave 3 is closed."
);
replaceOnce(
  "docs/CHANGELOG.md",
  "- Made repository Working State current-only and added a mandatory per-commit documentation impact sweep in which every durable documentation file is explicitly UPDATED or VERIFIED — NO CHANGE REQUIRED.",
  "- Made repository Working State current-only and added a mandatory per-commit documentation impact sweep in which every durable documentation file is explicitly UPDATED or VERIFIED — NO CHANGE REQUIRED.\n- Added deterministic workstream-closeout validation so stale active/pending/uncommitted status is detected mechanically before a workstream is declared closed."
);

replaceOnce("docs/FISH_REFERENCE_SOURCES.md", "**Document Revision:** 1.1.0", "**Document Revision:** 1.1.1");
replaceOnce(
  "docs/FISH_REFERENCE_SOURCES.md",
  "**Implementation Status:** Standard active; evidence populated through the local Wave 3 Bass review set, with the remaining Fish library pending",
  "**Implementation Status:** Standard active; evidence populated through closed Wave 3 Bass, with the remaining Fish library pending"
);
replaceOnce(
  "docs/FISH_REFERENCE_SOURCES.md",
  "The approved evidence/media package for Production Wave 3 — Bass is preserved in `workstreams/FISH-WAVE-3-BASS.md`. Its authoritative source anchors are now promoted into the per-Fish and per-relationship structures in this ledger as part of the local production review set.",
  "The approved evidence/media package for Production Wave 3 — Bass is preserved at `../archive/workstreams/fish-guide/FISH-WAVE-3-BASS.md`. Its authoritative source anchors are promoted into the per-Fish and per-relationship structures in this ledger; Wave 3 is closed."
);

replaceOnce("docs/DECISIONS.md", "**Document Revision:** 0.6.1", "**Document Revision:** 0.6.2");
replaceOnce(
  "docs/DECISIONS.md",
  "The local checkout must be verified against the intended GitHub baseline before changing an existing file. Chat memory, a previously proposed file, a downloaded package, or an uncommitted file on another computer is never authoritative content for the active checkout.\n\nDirect local edits are the default delivery method. The complete GitHub Desktop diff is the user review surface. This does not authorize broad edits: semantic changes remain limited to the approved scope, and unrelated differences are failures unless separately authorized.\n\nProduction source/data/media/configuration writes require explicit authorization for the specific scope. Commit/push also requires explicit authorization. Under D062, the approved Drive working package is delivered to the local validation checkout by review ZIP; the ZIP never contains `.git` and does not itself authorize commit/push.",
  "For user-facing application work, the local checkout must be verified against the intended GitHub baseline before local validation. Chat memory, a previously proposed file, a downloaded package, or an uncommitted file on another computer is never authoritative content for the active checkout.\n\nUser-facing application work is prepared in the authoritative Drive working package and delivered to the local checkout for browser/user validation. Documentation-only changes may be written and committed directly to GitHub after verifying the latest GitHub file contents, completing the applicable documentation impact/preservation checks, and verifying the post-write result; documentation-only work does not require local browser/user validation.\n\nProduction source/data/media/configuration writes require explicit authorization for the specific scope, and production/user-facing commit/push requires explicit authorization. Under D062, the approved Drive working package is delivered to the local validation checkout by review ZIP; the ZIP never contains `.git` and does not itself authorize commit/push. Documentation-only commits are standing-authorized when required to keep durable project state current."
);
replaceOnce(
  "docs/DECISIONS.md",
  "**Decision:** GitHub `main` is authoritative for the committed source baseline and formally reconciled documentation. Between commits, Google Drive `Working Source/Current` owns the authoritative working tree as an **atomic full-tree ZIP plus manifest**. The local Git checkout is the application/browser-validation copy of that Drive working tree.\n\nApproved edits are made to the Drive working tree first, then delivered as a review ZIP that preserves repository-relative paths and is extracted over the existing local checkout. The local `.git` directory is never part of a review ZIP. Local-only edits are not durable working truth and must be reconciled back into Drive before they can become an approved package.",
  "**Decision:** GitHub `main` is authoritative for committed production source and formally reconciled documentation. For approved uncommitted **user-facing application work**, Google Drive `Working Source/Current` owns the authoritative working tree as an **atomic full-tree ZIP plus manifest**. The local Git checkout is the application/browser-validation copy of that Drive working tree. Documentation-only changes may land directly on GitHub from the latest verified file contents and are then reconciled into Drive.\n\nApproved user-facing edits are made to the Drive working tree first, then delivered as a review ZIP that preserves repository-relative paths and is extracted over the existing local checkout. The local `.git` directory is never part of a review ZIP. Local-only user-facing edits are not durable working truth and must be reconciled back into Drive before they can become an approved package. Documentation-only work does not require local browser/user validation."
);
replaceOnce(
  "docs/DECISIONS.md",
  "**Current implementation status:** Approved and being re-established through the 2026-08-24 recovery checkpoint. The prior exploded Drive `Current` mirror is retired in favor of the atomic working package model. GitHub remains at the pre-recovery committed baseline until the recovered package is locally reviewed and explicitly authorized for commit/push.",
  "**Current implementation status:** Approved and active. The prior exploded Drive `Current` mirror is retired in favor of the atomic user-facing working-package model. Wave 3 Bass completed the recovered workflow and is committed, validated, post-push verified, and closed. Documentation-only direct-to-Git updates are active under the same verification/impact discipline."
);
replaceOnce(
  "docs/DECISIONS.md",
  "**Canonical owners:** D062 owns the durable operating model. `DEVELOPMENT_WORKFLOW.md` owns procedure; `WORKING_STATE.md` owns current state/resume; `HANDOFF.md` owns compact recovery; Drive `Working Source/Current` owns the current working package between commits.",
  "**Canonical owners:** D062 owns the durable operating model. `DEVELOPMENT_WORKFLOW.md` owns procedure; `WORKING_STATE.md` owns current state/resume; `HANDOFF.md` owns compact recovery; Drive `Working Source/Current` owns approved uncommitted user-facing application work between commits."
);
replaceOnce(
  "docs/DECISIONS.md",
  "Wave 3 Bass is implemented, validated, and user-approved in the uncommitted Drive working package; commit/push and post-push verification remain before that wave closes.",
  "Wave 3 Bass is committed, validated, post-push verified, and closed; Sunfish & Crappie is the next planned Fish production package."
);

replaceOnce("docs/DEVELOPMENT_WORKFLOW.md", "**Document Revision:** 1.4.0", "**Document Revision:** 1.4.1");
insertBefore(
  "docs/DEVELOPMENT_WORKFLOW.md",
  "# Default Local Delivery Method",
  `# Fast Workstream Closeout Standard\n\nCloseout is a verification and state-transition step, not the first time documentation catches up with implementation. Keep durable documentation current during the workstream so routine closeout remains mechanical.\n\nAfter final user-facing approval:\n\n1. Freeze the approved Drive user-facing package; do not continue source churn inside the closing package.\n2. Run one final applicable repository validation pass for integrity, syntax, relationships, media, and package fidelity.\n3. Run \`tools/validate_workstream_closeout.js\` against the closing workstream. It must mechanically detect stale active/pending/uncommitted/review language and an active workstream path that should have been retired.\n4. Make required documentation-only closure changes directly on GitHub from the latest verified file contents. Local browser/user validation is not required for documentation-only changes.\n5. Verify the resulting GitHub \`main\` SHA and changed-file set once.\n6. Reconcile Drive \`Working Source/Current\` once to the committed baseline and trim Live Working State to open carryover/next work only.\n7. Run the closeout validator again against the final GitHub state. Zero unexplained stale references is required before declaring the workstream closed.\n\nThe repository-wide documentation impact sweep remains mandatory, but it is a disposition check: every durable owner is \`UPDATED\` or \`VERIFIED — NO CHANGE REQUIRED\`. It is not a requirement to serially reread or rewrite every documentation file when the impact is already mechanically and semantically bounded.\n\nDocumentation-only path:\n\n\`latest verified GitHub file -> targeted documentation edit/commit -> impact/preservation checks -> post-write GitHub verification -> Drive reconciliation\`\n\nUser-facing application path:\n\n\`GitHub baseline -> Drive Working Source -> review ZIP -> local/browser approval -> explicit production commit/push authorization -> GitHub verification -> Drive reconciliation\`\n\nRoutine closeout should normally take only a few minutes. Longer closeout is justified when deterministic validation discovers a real defect, drift, or undocumented decision.\n\n`
);

cp.execFileSync("node", ["tools/validate_workstream_closeout.js", "--workstream", "Wave 3", "--aliases", "Wave 3,Bass", "--active-path", "docs/workstreams/FISH-WAVE-3-BASS.md"], { stdio: "inherit" });
console.log("Wave 3 documentation reconciliation prepared.");
