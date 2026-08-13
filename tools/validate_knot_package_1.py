#!/usr/bin/env python3
from pathlib import Path
import re, sys

ROOT = Path(__file__).resolve().parents[1]
knots = (ROOT / "data/knots.js").read_text(encoding="utf-8")
rigs = (ROOT / "data/rigs.js").read_text(encoding="utf-8")
index = (ROOT / "index.html").read_text(encoding="utf-8")

EXPECTED_KNOT_IDS = [
    "arbor-knot", "improved-clinch-knot", "palomar-knot", "double-uni-knot",
    "uni-knot", "double-surgeons-knot", "non-slip-loop-knot", "dropper-loop-knot",
    "snell-knot", "alberto-knot"
]
EXPECTED_CORE = ["arbor-knot", "improved-clinch-knot", "palomar-knot", "double-uni-knot"]
ALLOWED_CONNECTION_TYPES = {
    "reel-spool-attachment", "terminal-attachment", "line-to-line", "terminal-loop", "dropper-loop"
}

errors=[]

def check(condition, message):
    if not condition:
        errors.append(message)

# Knot record IDs occur as top-level 8-space id lines in generated data/knots.js.
knot_ids = re.findall(r'^        id: "([^"]+)",$', knots, flags=re.M)
check(knot_ids == EXPECTED_KNOT_IDS, f"Knot IDs/order mismatch: {knot_ids}")
check(len(set(knot_ids)) == 10, "Knot IDs must be unique")
check(knots.count('difficulty: "Beginner"') == 6, "Expected 6 Beginner Knots")
check(knots.count('difficulty: "Intermediate"') == 4, "Expected 4 Intermediate Knots")
check(knots.count('difficulty: "Advanced"') == 0, "Expected 0 active Advanced Knots")

core_match = re.search(r'const CORE_KNOT_IDS = Object\.freeze\(\[(.*?)\]\);', knots, flags=re.S)
core = re.findall(r'"([^"]+)"', core_match.group(1)) if core_match else []
check(core == EXPECTED_CORE, f"Core Knot registry mismatch: {core}")

for excluded in ["strengthRating", "stepCount", "relatedRigIds", "relatedTechniqueIds", "imageIds", "animationIds", "isCore"]:
    check(excluded not in knots, f"Excluded Knot field present: {excluded}")

rig_ids = re.findall(r'^        id: "([^"]+)",$', rigs, flags=re.M)
check(len(rig_ids) == 20 and len(set(rig_ids)) == 20, f"Expected 20 unique Rig records, found {len(rig_ids)}")
check(rigs.count('knotApplications: [') == 20, "Every active Rig must contain knotApplications[]")
check(rigs.count('connectionType: ') == 31, "Expected exactly 31 Rig Knot applications")
check(rigs.count('recommendedKnotIds: [') == 31, "Expected exactly 31 recommendedKnotIds arrays")
check(rigs.count('lastModifiedVersion: "0.5.0"') == 20, "Expected all 20 Rig records to carry lastModifiedVersion 0.5.0")

# Parse each knotApplications array and verify the approved four-field shape.
def matching_bracket(text, start):
    depth=0
    quote=None
    escape=False
    for i in range(start, len(text)):
        ch=text[i]
        if quote:
            if escape:
                escape=False
            elif ch == '\\':
                escape=True
            elif ch == quote:
                quote=None
            continue
        if ch in ('"', "'"):
            quote=ch
            continue
        if ch == '[':
            depth += 1
        elif ch == ']':
            depth -= 1
            if depth == 0:
                return i
    raise ValueError("Unmatched bracket")

app_total=0
for m in re.finditer(r'knotApplications: \[', rigs):
    open_pos = rigs.find('[', m.start())
    close_pos = matching_bracket(rigs, open_pos)
    block = rigs[open_pos:close_pos+1]
    n = block.count('connectionType: ')
    app_total += n
    check(block.count('label: ') == n, "A knotApplications block has a label count mismatch")
    check(block.count('recommendedKnotIds: [') == n, "A knotApplications block has a recommendation-array count mismatch")
    check(block.count('notes: ') == n, "A knotApplications block has a notes count mismatch")
check(app_total == 31, f"Parsed application total mismatch: {app_total}")

connection_types = re.findall(r'connectionType: "([^"]+)"', rigs)
check(set(connection_types).issubset(ALLOWED_CONNECTION_TYPES), f"Unexpected connection type(s): {sorted(set(connection_types)-ALLOWED_CONNECTION_TYPES)}")

recommended_ids=[]
for block in re.findall(r'recommendedKnotIds: \[(.*?)\]', rigs, flags=re.S):
    recommended_ids.extend(re.findall(r'"([^"]+)"', block))
missing=sorted(set(recommended_ids)-set(EXPECTED_KNOT_IDS))
check(not missing, f"Unresolved recommended Knot IDs: {missing}")

check(rigs.count('recommendedKnotIds: [\n                    "palomar-knot"\n                ],') == 1, "Drop Shot should have one Palomar-only recommendation")
check(rigs.count('connectionType: "dropper-loop"') == 1, "Expected one dropper-loop relationship for Double-Jig Crappie")

rig_pos=index.find('<script src="data/rigs.js"></script>')
knot_pos=index.find('<script src="data/knots.js"></script>')
tackle_pos=index.find('<script src="data/tackle.js"></script>')
check(rig_pos >= 0 and knot_pos > rig_pos and tackle_pos > knot_pos, "index.html Knot script order is invalid")

if errors:
    print("Knot Production Package 1 validation FAILED")
    for error in errors:
        print(f"- {error}")
    sys.exit(1)

print("Knot Production Package 1 validation PASSED")
print("- 10 canonical Knots")
print("- 6 Beginner / 4 Intermediate")
print("- 4 Core Knots in approved order")
print("- 20 Rigs audited")
print("- 31 real tied connection points")
print("- all recommended Knot IDs resolve")
print("- index script loading order valid")
