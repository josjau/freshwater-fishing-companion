#!/usr/bin/env python3
from pathlib import Path
import re
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]


def fail(message):
    print(f"FAIL: {message}", file=sys.stderr)
    raise SystemExit(1)


def require(path):
    full_path = ROOT / path
    if not full_path.exists():
        fail(f"missing required file: {path}")
    return full_path.read_text(encoding="utf-8")


def require_text(text, needle, label):
    if needle not in text:
        fail(f"{label}: missing {needle!r}")


index_html = require("index.html")
script_js = require("script.js")
reel_guidance_js = require("data/reel-guidance.js")

load_markers = [
    'src="data/knot-guidance.js"',
    'src="data/reel-guidance.js"',
    'src="data/tackle.js"',
    'src="view-renderer.js"',
    'src="script.js"'
]
positions = [index_html.find(marker) for marker in load_markers]
if any(position < 0 for position in positions):
    fail("index.html is missing a required Package 3 script load")
if positions != sorted(positions):
    fail("Package 3 script load order is incorrect")

for needle, label in [
    ('REEL_SETUP: "reel-setup"', "route"),
    ('[ROUTES.REEL_SETUP]: renderReelSetupView', "renderer map"),
    ('function openReelSetup()', "entry helper"),
    ('function renderReelSetupStep(appMain, config)', "shared Reel Setup renderer"),
    ('function renderReelSetupSelectedChoices(appMain)', "persistent selected choices renderer"),
    ('function getReelSetupSelectedChoiceLabels()', "selected choices label builder"),
    ('function renderReelSetupGuidanceList(appMain, guidance)', "flat guidance-list renderer"),
    ('function renderReelSetupReelIdentificationHelpStep(appMain)', "reel identification help"),
    ('function renderReelSetupLineSelectionStep(appMain)', "line selection step"),
    ('function renderReelSetupLineHelpStep(appMain)', "line help step"),
    ('function renderReelSetupLineIdentificationStep(appMain)', "line identification step"),
    ('function renderReelSetupLineSelectionComplete(appMain)', "line selection checkpoint"),
    ('function renderReelSetupTargetFishStep(appMain)', "target fish step"),
    ('function renderReelSetupTargetGuidanceStep(appMain)', "target guidance step"),
    ('function getReelTargetStrengthGuidance(targetProfile, lineType)', "line strength guidance helper"),
    ('function getReelEquipmentCheckDescription(targetProfile, lineType)', "equipment check description helper"),
    ('function getReelEquipmentConfirmationDescription(targetProfile, lineType)', "equipment confirmation helper"),
    ('function renderReelSetupEquipmentCheckStep(appMain)', "equipment check step"),
    ('function renderReelSetupReadReelStep(appMain)', "read reel step"),
    ('function renderReelSetupReadRodStep(appMain)', "read rod step"),
    ('function renderReelSetupEquipmentMismatchStep(appMain)', "equipment mismatch step"),
    ('function renderReelSetupEquipmentCompleteStep(appMain)', "equipment complete step"),
    ('lineType: null', "session-only line state"),
    ('targetFish: null', "session-only target state"),
    ('equipmentCheck: null', "session-only equipment state"),
    ('REEL_LINE_TYPE_GUIDANCE', "line type guidance"),
    ('REEL_BEGINNER_LINE_RECOMMENDATIONS', "beginner line recommendations"),
    ('REEL_TARGET_FISH_PROFILES', "target fish profiles"),
    ('REEL_EQUIPMENT_GUIDANCE', "equipment guidance")
]:
    require_text(script_js, needle, f"script.js {label}")

for step_id in [
    'LINE_SELECTION: "line-selection"',
    'LINE_HELP: "line-help"',
    'LINE_IDENTIFICATION: "line-identification"',
    'LINE_SELECTION_COMPLETE: "line-selection-complete"',
    'TARGET_FISH: "target-fish"',
    'TARGET_GUIDANCE: "target-guidance"',
    'REEL_IDENTIFICATION_HELP: "reel-identification-help"',
    'EQUIPMENT_CHECK: "equipment-check"',
    'READ_REEL: "read-reel"',
    'READ_ROD: "read-rod"',
    'EQUIPMENT_MISMATCH: "equipment-mismatch"',
    'EQUIPMENT_COMPLETE: "equipment-complete"'
]:
    require_text(reel_guidance_js, step_id, "data/reel-guidance.js step")

for expected_id in [
    "new-empty-reel",
    "replace-existing-line",
    "spinning",
    "spincast",
    "baitcasting",
    "not-sure",
    "monofilament",
    "fluorocarbon",
    "braid",
    "help-me-choose",
    "not-sure-line",
    "all-around-freshwater",
    "panfish",
    "trout",
    "bass",
    "walleye",
    "catfish"
]:
    require_text(reel_guidance_js, f'"{expected_id}"', "data/reel-guidance.js option")

entry_block = re.search(
    r"const REEL_SETUP_ENTRY_OPTIONS = Object\.freeze\(\[(?P<body>.*?)\n\]\);",
    reel_guidance_js,
    flags=re.S
)
reel_block = re.search(
    r"const REEL_TYPE_OPTIONS = Object\.freeze\(\[(?P<body>.*?)\n\]\);",
    reel_guidance_js,
    flags=re.S
)
line_block = re.search(
    r"const REEL_LINE_TYPE_GUIDANCE = Object\.freeze\(\{(?P<body>.*?)\n\}\);",
    reel_guidance_js,
    flags=re.S
)
action_block = re.search(
    r"const REEL_LINE_GUIDANCE_ACTIONS = Object\.freeze\(\[(?P<body>.*?)\n\]\);",
    reel_guidance_js,
    flags=re.S
)
recommendation_block = re.search(
    r"const REEL_BEGINNER_LINE_RECOMMENDATIONS = Object\.freeze\(\{(?P<body>.*?)\n\}\);",
    reel_guidance_js,
    flags=re.S
)
target_block = re.search(
    r"const REEL_TARGET_FISH_PROFILES = Object\.freeze\(\[(?P<body>.*?)\n\]\);",
    reel_guidance_js,
    flags=re.S
)
equipment_block = re.search(
    r"const REEL_EQUIPMENT_GUIDANCE = Object\.freeze\(\{(?P<body>.*?)\n\}\);",
    reel_guidance_js,
    flags=re.S
)
if not all([
    entry_block,
    reel_block,
    line_block,
    action_block,
    recommendation_block,
    target_block,
    equipment_block
]):
    fail("could not parse one or more Package 3 controlled guidance structures")

entry_count = len(re.findall(r'\bid: "', entry_block.group("body")))
reel_count = len(re.findall(r'\bid: "', reel_block.group("body")))
line_count = len(re.findall(r'\bid: "', line_block.group("body")))
action_count = len(re.findall(r'\bid: "', action_block.group("body")))
recommendation_count = len(re.findall(r'\blineTypeId: "', recommendation_block.group("body")))
target_count = len(re.findall(r'\bid: "', target_block.group("body")))
equipment_group_count = len(re.findall(r'^\s{4}(reel|rod|mismatch): Object\.freeze', equipment_block.group("body"), flags=re.M))

if entry_count != 2:
    fail(f"expected 2 Reel Setup entry options, found {entry_count}")
if reel_count != 4:
    fail(f"expected 4 supported reel-type options, found {reel_count}")
if line_count != 3:
    fail(f"expected 3 physical line types, found {line_count}")
if action_count != 2:
    fail(f"expected 2 line-guidance actions, found {action_count}")
if recommendation_count != 4:
    fail(f"expected 4 reel-type beginner recommendations, found {recommendation_count}")
if target_count != 6:
    fail(f"expected 6 beginner target-fish profiles, found {target_count}")
if equipment_group_count != 3:
    fail(f"expected 3 equipment-guidance groups, found {equipment_group_count}")

if recommendation_block.group("body").count('lineTypeId: "monofilament"') != 4:
    fail("expected all four beginner reel recommendations to start with monofilament")

for required_range in ["6–12 lb", "4–6 lb", "2–4 lb", "6–8 lb", "6–10 lb", "17–20 lb"]:
    require_text(target_block.group("body"), required_range, "target-fish starting range")

for easy_choice in ['easyChoice: "8 lb"', 'easyChoice: "6 lb"', 'easyChoice: "4 lb"', 'easyChoice: "20 lb"']:
    require_text(target_block.group("body"), easy_choice, "target-fish easy choice")

require_text(
    reel_guidance_js,
    "braided line may not work properly on some spincast reels",
    "spincast braid compatibility warning"
)

# Persistent Selected Choices: same font size, different colors, flat at-a-glance treatment.
for needle, label in [
    ('if (labels.length === 0) return;', "no summary before first choice"),
    ('selectedChoices.dataset.reelSetupSelectedChoices = "true"', "selected choices hook"),
    ('label.textContent = "Selected choices"', "selected choices label"),
    ('values.textContent = labels.join(" · ")', "cumulative selected values"),
    ('labels.push(entryOption.title)', "setup mode summary value"),
    ('labels.push(reelTypeOption.title)', "reel type summary value"),
    ('labels.push(lineType.title)', "line type summary value"),
    ('labels.push(targetFish.title)', "target fish summary value"),
    ('selectedChoices.style.padding = "var(--space-3) 0"', "flat spacing"),
    ('selectedChoices.style.borderTop = "1px solid var(--border)"', "flat top divider"),
    ('selectedChoices.style.borderBottom = "1px solid var(--border)"', "flat bottom divider"),
    ('label.style.color = "var(--text-subtle)"', "muted heading color"),
    ('label.style.fontSize = ".78rem"', "selected choices heading size"),
    ('values.style.color = "color-mix(in srgb, var(--accent-knots) 72%, white 28%)"', "selected values Knot color"),
    ('values.style.fontSize = ".78rem"', "selected values matching size"),
    ('values.style.fontWeight = "800"', "selected values emphasis"),
    ('values.style.overflowWrap = "anywhere"', "selected choices wrapping protection"),
    ('renderReelSetupSelectedChoices(appMain);', "summary applied after shared Reel Setup render")
]:
    require_text(script_js, needle, f"persistent selected choices {label}")

for forbidden in [
    'selectedChoices.style.background =',
    'selectedChoices.style.borderRadius =',
    'selectedChoices.style.borderLeft =',
    'values.style.fontSize = "1.03rem"'
]:
    if forbidden in script_js:
        fail(f"selected choices must use flat at-a-glance treatment; found {forbidden!r}")

if script_js.count("function renderReelSetupSelectedChoices(appMain)") != 1:
    fail("expected one reusable selected-choice summary renderer")

# Reel identification help and equipment compatibility flow.
for needle, label in [
    ('title: "Which Reel Matches Yours?"', "not-sure reel identification title"),
    ('option.id !== "not-sure"', "not-sure reel options filtered to actual types"),
    ('title: "Check Your Reel & Rod"', "equipment check title"),
    ('title: "How to Read Your Reel"', "read reel action"),
    ('title: "How to Read Your Rod"', "read rod action"),
    ('title: "My Reel & Rod Support This Setup"', "compatibility confirmation action"),
    ('title: "Something Doesn\'t Match / I\'m Not Sure"', "mismatch action"),
    ('reelSetupState.equipmentCheck = "compatible"', "compatible state"),
    ('title: "Pause Before Spooling"', "mismatch stop page"),
    ('title: "Equipment Compatibility Check"', "compatibility completion page"),
    ('title: "Next — Decide on Backing"', "next backing checkpoint")
]:
    require_text(script_js, needle, f"equipment compatibility {label}")

# Authoritative examples encoded in Decision Knowledge.
for needle, label in [
    ('8 lb / 140 yd or 8-140', "pounds/yards reel capacity example"),
    ('120 yd / 10 lb', "reversed yards/pounds capacity example"),
    ('0.25 mm / 160 m', "metric diameter/length example"),
    ('Mono and Braid capacities', "separate line-type capacity guidance"),
    ('1000, 2500, or 3000', "reel size not direct line rating"),
    ('6-12 lb', "rod line-rating example"),
    ('1/4-5/8 oz', "rod lure-weight contrast")
]:
    require_text(equipment_block.group("body"), needle, f"equipment guidance {label}")

require_text(script_js, 'Recommended starting range:', "mono/fluoro starting range wording")
require_text(script_js, 'Easy beginner choice:', "mono/fluoro easy choice wording")
require_text(script_js, 'Recommended fish-strength reference:', "braid strength-reference wording")
require_text(script_js, 'do not treat ${targetProfile.easyChoice} as the final braid purchase size', "braid no-false-precision guard")
require_text(script_js, 'id: "continue-to-equipment-check"', "enabled equipment-check transition")

render_knots_match = re.search(
    r"function renderKnotsView\(appMain\) \{(?P<body>.*?)\n\}\n\nfunction updateKnotGuideSearchResults",
    script_js,
    flags=re.S
)
if not render_knots_match:
    fail("could not isolate renderKnotsView for the integration guard")
if "openReelSetup" in render_knots_match.group("body") or "ROUTES.REEL_SETUP" in render_knots_match.group("body"):
    fail("Block 3.5 must remain internally accessed until the guided workflow integration block")

for path in ["script.js", "data/reel-guidance.js"]:
    result = subprocess.run(
        ["node", "--check", str(ROOT / path)],
        capture_output=True,
        text=True
    )
    if result.returncode != 0:
        fail(f"JavaScript syntax check failed for {path}: {result.stderr.strip()}")

print("Production Package 3 Block 3.5 validation passed.")
print(f"Entry options: {entry_count}")
print(f"Reel types: {reel_count}")
print(f"Physical line types: {line_count}")
print(f"Line guidance actions: {action_count}")
print(f"Beginner reel recommendations: {recommendation_count}")
print(f"Target-fish profiles: {target_count}")
print(f"Equipment guidance groups: {equipment_group_count}")
print("Selected Choices: flat treatment with matched text sizing and distinct colors.")
print("Reel/Rod compatibility checkpoint: enabled.")
print("Normal Knot landing remains intentionally unwired to Reel Setup.")
