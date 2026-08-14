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
    fail("index.html is missing a required Package 3 foundation script load")
if positions != sorted(positions):
    fail("Package 3 foundation script load order is incorrect")

require_text(script_js, 'REEL_SETUP: "reel-setup"', "script.js route")
require_text(script_js, '[ROUTES.REEL_SETUP]: renderReelSetupView', "script.js renderer map")
require_text(script_js, 'function openReelSetup()', "script.js entry helper")
require_text(script_js, 'function renderReelSetupView(appMain)', "script.js Reel Setup renderer")
require_text(script_js, 'REEL_SETUP_ENTRY_OPTIONS', "script.js entry options")
require_text(script_js, 'REEL_TYPE_OPTIONS', "script.js reel types")

render_knots_match = re.search(
    r"function renderKnotsView\(appMain\) \{(?P<body>.*?)\n\}\n\nfunction updateKnotGuideSearchResults",
    script_js,
    flags=re.S
)
if not render_knots_match:
    fail("could not isolate renderKnotsView for the foundation wiring guard")
if "openReelSetup" in render_knots_match.group("body") or "ROUTES.REEL_SETUP" in render_knots_match.group("body"):
    fail("Package 3 foundation must remain hidden until the guided workflow is ready")

for expected_id in [
    "new-empty-reel",
    "replace-existing-line",
    "spinning",
    "spincast",
    "baitcasting",
    "not-sure"
]:
    require_text(reel_guidance_js, f'id: "{expected_id}"', "data/reel-guidance.js")

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
if not entry_block or not reel_block:
    fail("could not parse Reel Setup controlled option arrays")
entry_count = len(re.findall(r'\bid: "', entry_block.group("body")))
reel_count = len(re.findall(r'\bid: "', reel_block.group("body")))
if entry_count != 2:
    fail(f"expected 2 Reel Setup entry options, found {entry_count}")
if reel_count != 4:
    fail(f"expected 4 supported reel-type options, found {reel_count}")

for path in ["script.js", "data/reel-guidance.js"]:
    result = subprocess.run(
        ["node", "--check", str(ROOT / path)],
        capture_output=True,
        text=True
    )
    if result.returncode != 0:
        fail(f"JavaScript syntax check failed for {path}: {result.stderr.strip()}")

print("Production Package 3 foundation validation passed.")
print(f"Entry options: {entry_count}")
print(f"Reel types: {reel_count}")
print("Normal Knot landing remains intentionally unwired to Reel Setup.")
