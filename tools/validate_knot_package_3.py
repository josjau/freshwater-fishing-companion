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
    ('function renderReelSetupView(appMain)', "Reel Setup renderer"),
    ('function renderReelSetupLineSelectionStep(appMain)', "line selection step"),
    ('function renderReelSetupLineHelpStep(appMain)', "line help step"),
    ('function renderReelSetupLineIdentificationStep(appMain)', "line identification step"),
    ('function renderReelSetupLineSelectionComplete(appMain)', "line selection checkpoint"),
    ('lineType: null', "session-only line state"),
    ('REEL_LINE_TYPE_GUIDANCE', "line type guidance"),
    ('REEL_BEGINNER_LINE_RECOMMENDATIONS', "beginner recommendations")
]:
    require_text(script_js, needle, f"script.js {label}")

for step_id in [
    'LINE_SELECTION: "line-selection"',
    'LINE_HELP: "line-help"',
    'LINE_IDENTIFICATION: "line-identification"',
    'LINE_SELECTION_COMPLETE: "line-selection-complete"'
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
    "not-sure-line"
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
if not all([entry_block, reel_block, line_block, action_block, recommendation_block]):
    fail("could not parse one or more Package 3 controlled guidance structures")

entry_count = len(re.findall(r'\bid: "', entry_block.group("body")))
reel_count = len(re.findall(r'\bid: "', reel_block.group("body")))
line_count = len(re.findall(r'\bid: "', line_block.group("body")))
action_count = len(re.findall(r'\bid: "', action_block.group("body")))
recommendation_count = len(re.findall(r'\blineTypeId: "', recommendation_block.group("body")))

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

if recommendation_block.group("body").count('lineTypeId: "monofilament"') != 4:
    fail("expected all four beginner reel recommendations to start with monofilament")

require_text(
    reel_guidance_js,
    "braided line may not work properly on some spincast reels",
    "spincast braid compatibility warning"
)

render_knots_match = re.search(
    r"function renderKnotsView\(appMain\) \{(?P<body>.*?)\n\}\n\nfunction updateKnotGuideSearchResults",
    script_js,
    flags=re.S
)
if not render_knots_match:
    fail("could not isolate renderKnotsView for the integration guard")
if "openReelSetup" in render_knots_match.group("body") or "ROUTES.REEL_SETUP" in render_knots_match.group("body"):
    fail("Block 3.3 must remain internally accessed until the guided workflow integration block")

for path in ["script.js", "data/reel-guidance.js"]:
    result = subprocess.run(
        ["node", "--check", str(ROOT / path)],
        capture_output=True,
        text=True
    )
    if result.returncode != 0:
        fail(f"JavaScript syntax check failed for {path}: {result.stderr.strip()}")

require_text(script_js, 'selectedChoices.dataset.reelSetupSelectedChoices = "true"', "selected choices summary")
require_text(script_js, 'label.textContent = "Selected choices"', "selected choices label")
require_text(script_js, 'values.textContent = `${entryOption.title} · ${reelTypeOption.title} · ${lineType.title}.`', "selected choices values")
require_text(script_js, 'borderLeft = "5px solid var(--accent-knots)"', "selected choices Knot accent")
require_text(script_js, 'color-mix(in srgb, var(--accent-knots) 72%, white 28%)', "selected choices value color")

print("Production Package 3 Block 3.3 UX Revision 1 validation passed.")
print(f"Entry options: {entry_count}")
print(f"Reel types: {reel_count}")
print(f"Physical line types: {line_count}")
print(f"Line guidance actions: {action_count}")
print(f"Beginner reel recommendations: {recommendation_count}")
print("Normal Knot landing remains intentionally unwired to Reel Setup.")
