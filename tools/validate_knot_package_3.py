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
forest_journal_css = require("forest-journal.css")

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
    ('function renderReelSetupNavigation(appMain)', "step-aware navigation"),
    ('function getReelSetupPreviousStep()', "previous-step mapping"),
    ('navigation.dataset.reelSetupNavigation = "true"', "Reel Setup navigation hook"),
    ('genericHomeButton.replaceWith(navigation)', "generic navigation replacement"),
    ('backButton.textContent = "← Knots"', "start-step Knots return"),
    ('homeButton.textContent = "Home"', "explicit Home action"),
    ('function renderReelSetupSelectedChoices(appMain)', "selected choices renderer"),
    ('function renderReelSetupBackingDecisionStep(appMain)', "backing decision"),
    ('function renderReelSetupSpoolConnectionPlanStep(appMain)', "spool connection plan"),
    ('function openKnotDetailFromReelSetup(knotId)', "Reel Setup Knot handoff"),
    ('backingChoice: null', "session-only backing state"),
    ('REEL_BACKING_CHOICES', "backing decision knowledge")
]:
    require_text(script_js, needle, f"script.js {label}")

# Reel Setup keeps its step-aware JavaScript navigation while reusing the
# established sticky/floating application navigation treatment.
reel_setup_navigation_css = re.search(
    r"\.page-navigation-group,\s*\[data-reel-setup-navigation\]\s*\{(?P<body>.*?)\n\}",
    forest_journal_css,
    flags=re.S
)
if not reel_setup_navigation_css:
    fail("forest-journal.css does not attach Reel Setup to the shared navigation container treatment")

for needle, label in [
    ("position: sticky;", "sticky positioning"),
    ("z-index: 20;", "navigation stacking"),
    ("top: var(--space-2);", "sticky top offset"),
    ("max-width: 100%;", "narrow-layout width guard"),
    ("background: color-mix(in srgb, var(--background) 92%, transparent);", "floating navigation surface"),
    ("backdrop-filter: blur(8px);", "floating navigation backdrop")
]:
    require_text(reel_setup_navigation_css.group("body"), needle, f"Reel Setup navigation {label}")

reel_setup_navigation_button_css = re.search(
    r"\.page-navigation-group \.page-navigation,\s*"
    r"\[data-reel-setup-navigation\] \.page-navigation\s*\{(?P<body>.*?)\}",
    forest_journal_css,
    flags=re.S
)
if not reel_setup_navigation_button_css:
    fail("forest-journal.css does not normalize Reel Setup navigation button spacing")
require_text(
    reel_setup_navigation_button_css.group("body"),
    "margin-bottom: 0;",
    "Reel Setup navigation button spacing"
)

for step_id in [
    'BACKING_DECISION: "backing-decision"',
    'SPOOL_CONNECTION_PLAN: "spool-connection-plan"'
]:
    require_text(reel_guidance_js, step_id, "data/reel-guidance.js step")

for backing_id in ["none", "monofilament-backing", "direct-braid-approved"]:
    require_text(reel_guidance_js, f'id: "{backing_id}"', "backing choice")

backing_block = re.search(
    r"const REEL_BACKING_CHOICES = Object\.freeze\(\{(?P<body>.*?)\n\}\);",
    reel_guidance_js,
    flags=re.S
)
if not backing_block:
    fail("could not parse REEL_BACKING_CHOICES")
backing_count = len(re.findall(r'\bid: "', backing_block.group("body")))
if backing_count != 3:
    fail(f"expected 3 backing choices, found {backing_count}")

for needle, label in [
    ('title: "Do You Need Backing?"', "backing page title"),
    ('Braid can slip on a smooth spool.', "smooth-spool braid guard"),
    ('title: "Spool Connection Plan"', "connection plan title"),
    ('knotId: "arbor-knot"', "Arbor Knot handoff"),
    ('knotId: "double-uni-knot"', "Double Uni handoff"),
    ('generic Arbor Knot is not presented as a direct-braid spool knot', "no generic direct-braid Arbor"),
    ('title: "Next — Spool the Reel"', "next-block checkpoint")
]:
    require_text(script_js, needle, label)

for needle, label in [
    ('title: "Monofilament Backing"', "mono backing label"),
    ('title: "Direct Braid — Reel Approved"', "direct-braid guarded choice"),
    ('exact reel or spool explicitly provides a braid-ready attachment surface', "direct-braid equipment guard")
]:
    require_text(reel_guidance_js, needle, label)

# Selected Choices keeps the approved flat treatment and now includes backing.
for needle, label in [
    ('values.style.fontSize = ".78rem"', "matched value size"),
    ('label.style.fontSize = ".78rem"', "matched label size"),
    ('selectedChoices.style.borderTop = "1px solid var(--border)"', "flat top divider"),
    ('selectedChoices.style.borderBottom = "1px solid var(--border)"', "flat bottom divider"),
    ('labels.push(backingChoice.title)', "backing choice summary value")
]:
    require_text(script_js, needle, label)

if 'selectedChoices.style.background =' in script_js:
    fail("Selected Choices must not restore a card-like background")
if 'selectedChoices.style.borderRadius =' in script_js:
    fail("Selected Choices must not restore rounded-card styling")

# Knot detail navigation must restore the exact Reel Setup state.
for needle, label in [
    ('if (context.route === ROUTES.REEL_SETUP)', "return context branch"),
    ('reelSetupState = { ...context.state.reelSetupState };', "state restoration"),
    ('route: ROUTES.REEL_SETUP', "Knot handoff context"),
    ('reelSetupState: { ...reelSetupState }', "Knot handoff state snapshot"),
    ('const fromReelSetup = returnContext?.route === ROUTES.REEL_SETUP;', "Knot detail Reel Setup source"),
    ('const hasReturnContext = fromRelatedRig || fromReelSetup;', "shared detail return context")
]:
    require_text(script_js, needle, label)

# The normal Knot landing remains unwired until the integration block.
render_knots_match = re.search(
    r"function renderKnotsView\(appMain\) \{(?P<body>.*?)\n\}\n\nfunction updateKnotGuideSearchResults",
    script_js,
    flags=re.S
)
if not render_knots_match:
    fail("could not isolate renderKnotsView for the integration guard")
if "openReelSetup" in render_knots_match.group("body") or "ROUTES.REEL_SETUP" in render_knots_match.group("body"):
    fail("Block 3.6 must remain internally accessed until the guided workflow integration block")

for path in ["script.js", "data/reel-guidance.js"]:
    result = subprocess.run(
        ["node", "--check", str(ROOT / path)],
        capture_output=True,
        text=True
    )
    if result.returncode != 0:
        fail(f"JavaScript syntax check failed for {path}: {result.stderr.strip()}")

print("Production Package 3 Block 3.6 validation passed.")
print(f"Backing choices: {backing_count}")
print("Reel Setup navigation: step-aware and sticky/floating.")
print("Canonical Knot handoffs: Arbor Knot and Double Uni Knot.")
print("Reel Setup Knot return context: exact step/state restoration enabled.")
print("Normal Knot landing remains intentionally unwired to Reel Setup.")
