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
        nonsense: query("zzzz-no-match")
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

print("Production Package 2 validation passed.")
print(f"Active Knots: {data['knotCount']}")
print(f"Core Knots: {len(data['coreIds'])}")
print(f"Task definitions: {data['taskCount']}")
print(f"Rig Knot applications: {data['relationshipCount']}")
