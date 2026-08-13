#!/usr/bin/env python3
from pathlib import Path
import json
import re
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]

REQUIRED = [
    "data/knots.js",
    "data/rigs.js",
    "data/knot-guidance.js",
    "search.js",
    "view-renderer.js",
    "script.js",
    "forest-journal.css",
    "index.html",
]

for rel in REQUIRED:
    if not (ROOT / rel).is_file():
        raise SystemExit(f"Missing required file: {rel}")

for rel in ["data/knots.js", "data/rigs.js", "data/knot-guidance.js", "search.js", "view-renderer.js", "script.js"]:
    result = subprocess.run(["node", "--check", str(ROOT / rel)], capture_output=True, text=True)
    if result.returncode != 0:
        print(result.stdout)
        print(result.stderr, file=sys.stderr)
        raise SystemExit(f"JavaScript syntax failed: {rel}")

index = (ROOT / "index.html").read_text(encoding="utf-8")
expected_order = [
    'data/rigs.js',
    'data/knots.js',
    'data/knot-guidance.js',
    'data/tackle.js',
    'data/media.js',
    'search.js',
    'view-renderer.js',
    'script.js',
]
positions = [index.index(f'src="{item}"') for item in expected_order]
assert positions == sorted(positions), "Script load order is incorrect"

script = (ROOT / "script.js").read_text(encoding="utf-8")
renderer = (ROOT / "view-renderer.js").read_text(encoding="utf-8")
search = (ROOT / "search.js").read_text(encoding="utf-8")
guidance = (ROOT / "data/knot-guidance.js").read_text(encoding="utf-8")

for route in ['KNOT_BROWSE: "knot-browse"', 'KNOT_DETAIL: "knot-detail"']:
    assert route in script, f"Missing route: {route}"
for heading in ["Best For", "Where You'll Use It", "How to Tie It", "Check Your Knot", "Common Mistakes", "When to Choose Another Knot", "Verified References"]:
    assert heading in renderer, f"Missing Knot detail heading: {heading}"
assert "Compare Knots" not in script, "Legacy Compare Knots placeholder remains"
assert "Compare strength" not in script, "Legacy strength comparison copy remains"
assert "function searchRecords(" in search, "Generic searchRecords was removed"
assert "function searchKnotRecords(" in search, "Dedicated Knot search is missing"

css = (ROOT / "forest-journal.css").read_text(encoding="utf-8")
detail_standard = (ROOT / "docs/DETAIL-PAGE-STANDARD.md").read_text(encoding="utf-8")
detail_approval = (ROOT / "docs/workstreams/KNOT-DETAIL-PAGE-APPROVAL.md").read_text(encoding="utf-8")
landing_approval = (ROOT / "docs/workstreams/KNOT-LANDING-PAGE-APPROVAL.md").read_text(encoding="utf-8")

for required_text in [
    "let detailNavigationStack = [];",
    "function openRigDetailFromKnot(",
    "function openKnotDetailFromRig(",
    "function returnToDetailNavigationContext(",
]:
    assert required_text in script, f"Missing related-detail navigation support: {required_text}"

for required_text in [
    "const KNOT_USAGE_VISIBLE_RIG_LIMIT = 4;",
    "data-knot-rig-id",
    "See all ${rigContexts.length} rigs",
    '"Show fewer"',
    "Knots You'll Tie",
    "data-rig-knot-id",
]:
    assert required_text in renderer, f"Missing Knot/Rig relationship UI support: {required_text}"

for required_text in [".knot-usage-toggle", ".related-entity-link", ".rig-knot-link"]:
    assert required_text in css, f"Missing relationship UI style: {required_text}"
assert ".knot-usage-list > li[hidden] { display: none !important; }" in css, "Collapsed Knot Rig relationships are not guaranteed hidden"

assert "See all N rigs" in detail_approval
assert "context-preserving return stack" in detail_approval
assert "shows up to four Rig relationships initially" in detail_standard

# Knot landing revision checks.
assert 'knot-reel-ready-title' not in renderer, "Standalone Get Your Reel Ready landing section remains"
assert 'knot-reel-ready-card' not in renderer, "Standalone reel-readiness card remains"
assert 'data-core-knot-grid' not in renderer, "Individual Core Knot records still render on the landing page"
assert 'id="knot-task-title"' in renderer, "Task-first section is missing"
assert 'data-knot-collection-key' in renderer, "Knot collection cards are missing"
assert renderer.index('knot-guide-section--tasks') < renderer.index('knot-guide-section--collections'), "Task-first section does not precede Knot collection cards"
assert 'Get your reel ready →' in renderer, "Attach Line to a Reel does not expose the reel-readiness action"
assert 'title: isReelSetupEntry ? "Get Your Reel Ready" : task.title' in script, "Attach Line to a Reel does not map to transitional Get Your Reel Ready page"
for collection_key in ["all", "core", "beginner", "intermediate", "advanced"]:
    assert f'{collection_key}: Object.freeze({{' in script, f"Missing Knot collection: {collection_key}"
for collection_title in ["All Knots", "Core Knots", "Beginner Knots", "Intermediate Knots", "Advanced Knots"]:
    assert collection_title in script, f"Missing Knot collection title: {collection_title}"
assert 'isAvailable: false' in script, "Advanced Knots should remain unavailable in Version 1"
for required_text in [
    "What are you trying to do?",
    "Attach Line to a Reel",
    "single Knot-landing entry point",
    "All Knots",
    "Core Knots",
    "Beginner Knots",
    "Intermediate Knots",
    "Advanced Knots",
]:
    assert required_text in landing_approval, f"Missing landing guidance: {required_text}"

# Execute data/search logic in Node and return compact JSON for semantic checks.
node_script = r'''
const fs = require("fs");
const vm = require("vm");
const context = { console: { info(){}, warn(){}, error(){} } };
vm.createContext(context);
for (const file of ["data/knots.js", "data/rigs.js", "data/knot-guidance.js", "search.js"]) {
    vm.runInContext(fs.readFileSync(file, "utf8"), context, { filename: file });
}
const output = vm.runInContext(`(() => {
    const active = KNOT_DATA.filter((knot) => knot.isActive);
    const query = (value) => searchKnotRecords(active, value, KNOT_TASK_DEFINITIONS).map((knot) => knot.id);
    return {
        knotCount: active.length,
        coreIds: [...CORE_KNOT_IDS],
        difficultyCounts: active.reduce((counts, knot) => { counts[knot.difficulty] = (counts[knot.difficulty] || 0) + 1; return counts; }, {}),
        taskCount: KNOT_TASK_DEFINITIONS.length,
        taskIds: KNOT_TASK_DEFINITIONS.map((task) => task.id),
        unresolvedTaskIds: KNOT_TASK_DEFINITIONS.flatMap((task) => task.knotIds).filter((id) => !active.some((knot) => knot.id === id)),
        relationshipCount: RIG_DATA.filter((rig) => rig.isActive).reduce((sum, rig) => sum + (rig.knotApplications?.length ?? 0), 0),
        palomar: query("palomar"),
        tieHook: query("tie hook"),
        addLeader: query("add leader"),
        braid: query("braid"),
        mono: query("mono"),
        beginner: query("beginner"),
        nonsense: query("zzzz-no-match"),
        palomarRigIds: RIG_DATA
            .filter((rig) => rig.isActive && rig.knotApplications?.some((application) => application.recommendedKnotIds?.includes("palomar-knot")))
            .sort((first, second) => {
                const difficultyOrder = ["Beginner", "Beginner+", "Intermediate", "Intermediate+", "Advanced", "Expert"];
                const firstCore = CORE_RIG_IDS.includes(first.id);
                const secondCore = CORE_RIG_IDS.includes(second.id);
                if (firstCore !== secondCore) return firstCore ? -1 : 1;
                const difficultyDifference = difficultyOrder.indexOf(first.difficulty) - difficultyOrder.indexOf(second.difficulty);
                if (difficultyDifference !== 0) return difficultyDifference;
                const tieBreak = (rig) => {
                    const coreIndex = CORE_RIG_IDS.indexOf(rig.id);
                    if (coreIndex >= 0) return coreIndex;
                    return CORE_RIG_IDS.length + RIG_DATA.findIndex((candidate) => candidate.id === rig.id);
                };
                return tieBreak(first) - tieBreak(second);
            })
            .map((rig) => rig.id)
    };
})()`, context);
process.stdout.write(JSON.stringify(output));
'''
result = subprocess.run(["node", "-e", node_script], cwd=ROOT, capture_output=True, text=True)
if result.returncode != 0:
    print(result.stderr, file=sys.stderr)
    raise SystemExit("Semantic Node validation failed")
data = json.loads(result.stdout)

assert data["knotCount"] == 10
assert data["coreIds"] == ["arbor-knot", "improved-clinch-knot", "palomar-knot", "double-uni-knot"]
assert data["difficultyCounts"] == {"Beginner": 6, "Intermediate": 4}
assert data["taskCount"] == 4
assert data["taskIds"] == ["attach-line-to-reel", "terminal-attachment", "line-to-line", "loop-connection"]
assert data["unresolvedTaskIds"] == []
assert data["relationshipCount"] == 31
assert data["palomar"][0] == "palomar-knot"
assert data["tieHook"][:4] == ["improved-clinch-knot", "palomar-knot", "uni-knot", "snell-knot"]
assert data["addLeader"][:3] == ["double-uni-knot", "double-surgeons-knot", "alberto-knot"]
assert "palomar-knot" in data["braid"] and "double-uni-knot" in data["braid"]
assert "arbor-knot" in data["mono"] and "improved-clinch-knot" in data["mono"]
assert len(data["beginner"]) == 6
assert data["nonsense"] == []
assert len(data["palomarRigIds"]) == 20
assert data["palomarRigIds"][:4] == [
    "fixed-bobber-rig",
    "basic-bottom-rig",
    "jighead-soft-plastic",
    "inline-spinner-setup",
]

print("Production Package 2 runtime revision 2 validation passed.")
print(f"Active Knots: {data['knotCount']}")
print(f"Core Knots: {len(data['coreIds'])}")
print(f"Task definitions: {data['taskCount']}")
print(f"Rig Knot applications: {data['relationshipCount']}")
