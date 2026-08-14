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


def require_absent(text, needle, label):
    if needle in text:
        fail(f"{label}: unexpected {needle!r}")


def get_function_block(text, function_name, next_function_name):
    match = re.search(
        rf"function {re.escape(function_name)}\(appMain\) \{{(?P<body>.*?)\n\}}\n+function {re.escape(next_function_name)}",
        text,
        flags=re.S
    )
    if not match:
        fail(f"could not isolate {function_name}")
    return match.group("body")


index_html = require("index.html")
script_js = require("script.js")
reel_guidance_js = require("data/reel-guidance.js")
forest_journal_css = require("forest-journal.css")
block_3_7_workstream = require("docs/workstreams/KNOT-PRODUCTION-PACKAGE-3-BLOCK-3.7.md")
block_3_8_workstream = require("docs/workstreams/KNOT-PRODUCTION-PACKAGE-3-BLOCK-3.8.md")
package_3_workstream = require("docs/workstreams/KNOT-PRODUCTION-PACKAGE-3.md")

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
    ('function applyReelSetupWorkflowCardTreatment(appMain, config)', "workflow-card treatment"),
    ('function appendReelSetupGuidanceText(listItem, item)', "spooling emphasis renderer"),
    ('function renderReelSetupBackingDecisionStep(appMain)', "backing decision"),
    ('function renderReelSetupSpoolConnectionPlanStep(appMain)', "spool connection plan"),
    ('function renderReelSetupSpoolingInstructionsStep(appMain)', "reel-specific spooling instructions"),
    ('function renderReelSetupLeaderDecisionStep(appMain)', "leader decision"),
    ('function renderReelSetupLeaderMaterialStep(appMain)', "leader material"),
    ('function renderReelSetupLeaderSetupStep(appMain)', "leader setup"),
    ('function getReelSpoolingGuidance(reelTypeId)', "spooling guidance lookup"),
    ('function getReelLeaderChoice(leaderChoiceId)', "leader choice lookup"),
    ('function getReelLeaderDecisionGuidance(lineTypeId)', "leader decision guidance lookup"),
    ('function getReelLeaderSetupGuidance(leaderChoiceId, targetProfile)', "leader setup guidance builder"),
    ('function openKnotDetailFromReelSetup(knotId, returnLabel = "Spool Connection Plan")', "Reel Setup Knot handoff"),
    ('backingChoice: null', "session-only backing state"),
    ('leaderChoice: null', "session-only leader state"),
    ('REEL_BACKING_CHOICES', "backing decision knowledge"),
    ('REEL_LEADER_CHOICES', "leader decision knowledge")
]:
    require_text(script_js, needle, f"script.js {label}")

# Package 3 workflow-card cleanup: previous-step navigation owns ordinary
# backtracking, so these screens do not duplicate upstream changes as cards.
line_choice_check_block = get_function_block(
    script_js,
    "renderReelSetupLineSelectionComplete",
    "getReelTargetStrengthGuidance"
)
for needle, label in [
    ('id: "change-line-type"', "Line Choice Check Change Line Choice"),
    ('id: "change-reel-type"', "Line Choice Check Change Reel Type")
]:
    require_absent(line_choice_check_block, needle, label)

starting_strength_block = get_function_block(
    script_js,
    "renderReelSetupTargetGuidanceStep",
    "getReelEquipmentCheckDescription"
)
for needle, label in [
    ('id: "change-target-fish"', "Starting Line Strength Change Target Fish"),
    ('id: "change-line-type"', "Starting Line Strength Change Line Choice")
]:
    require_absent(starting_strength_block, needle, label)

equipment_check_block = get_function_block(
    script_js,
    "renderReelSetupEquipmentCheckStep",
    "renderReelSetupReadReelStep"
)
confirm_position = equipment_check_block.find('id: "confirm-equipment-match"')
read_reel_position = equipment_check_block.find('id: "read-reel"')
if confirm_position < 0 or read_reel_position < 0 or confirm_position > read_reel_position:
    fail("Check Your Reel & Rod must present the confirmed-equipment forward action first")

equipment_complete_block = get_function_block(
    script_js,
    "renderReelSetupEquipmentCompleteStep",
    "getReelBackingChoice"
)
for needle, label in [
    ('id: "read-reel"', "Equipment Compatibility Check Review Reel Markings"),
    ('id: "read-rod"', "Equipment Compatibility Check Review Rod Markings"),
    ('id: "change-target-fish"', "Equipment Compatibility Check Change Target Fish"),
    ('id: "change-line-type"', "Equipment Compatibility Check Change Line Choice"),
    ('id: "change-reel-type"', "Equipment Compatibility Check Change Reel Type")
]:
    require_absent(equipment_complete_block, needle, label)

spool_connection_block = get_function_block(
    script_js,
    "renderReelSetupSpoolConnectionPlanStep",
    "renderReelSetupSpoolingInstructionsStep"
)
require_absent(
    spool_connection_block,
    'id: "change-backing-choice"',
    "Spool Connection Plan Change Backing Choice"
)

spooling_instructions_block = get_function_block(
    script_js,
    "renderReelSetupSpoolingInstructionsStep",
    "renderReelSetupLeaderDecisionStep"
)
require_absent(
    spooling_instructions_block,
    'id: "change-backing-choice"',
    "Spool the Reel Change Backing Choice"
)

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

workflow_card_css = re.search(
    r"\.dashboard-card\.dashboard-card--workflow\s*\{(?P<body>.*?)\n\}",
    forest_journal_css,
    flags=re.S
)
if not workflow_card_css:
    fail("forest-journal.css is missing the compact Reel Setup workflow-card treatment")
require_absent(
    workflow_card_css.group("body"),
    "--card-accent:",
    "workflow-card must inherit the existing positional card palette"
)
for needle, label in [
    ("border-color: color-mix(in srgb, var(--card-accent) 72%, var(--border));", "palette-aware stronger border"),
    ("linear-gradient(105deg, color-mix(in srgb, var(--card-accent) 19%, transparent)", "palette-aware emphasized surface"),
    ("var(--surface-elevated);", "compact existing-height surface")
]:
    require_text(workflow_card_css.group("body"), needle, f"workflow-card {label}")
for index, accent in enumerate([
    "accent-fish",
    "accent-rigs",
    "accent-recommendations",
    "accent-tackle",
    "accent-knots",
    "accent-catch-log",
    "accent-favorites",
    "accent-regulations",
    "accent-settings"
], start=1):
    require_text(
        forest_journal_css,
        f".dashboard-card:nth-child({index}) {{ --card-accent: var(--{accent}); }}",
        f"workflow-card palette position {index}"
    )
if "min-height:" in workflow_card_css.group("body") or "padding:" in workflow_card_css.group("body"):
    fail("workflow-card treatment must not increase card height or padding")

for step_id in [
    'BACKING_DECISION: "backing-decision"',
    'SPOOL_CONNECTION_PLAN: "spool-connection-plan"',
    'SPOOLING_INSTRUCTIONS: "spooling-instructions"',
    'LEADER_DECISION: "leader-decision"',
    'LEADER_MATERIAL: "leader-material"',
    'LEADER_SETUP: "leader-setup"'
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


for leader_id in ["none", "fluorocarbon-leader", "monofilament-leader"]:
    require_text(reel_guidance_js, f'id: "{leader_id}"', "leader outcome")

leader_block = re.search(
    r"const REEL_LEADER_CHOICES = Object\.freeze\(\{(?P<body>.*?)\n\}\);",
    reel_guidance_js,
    flags=re.S
)
if not leader_block:
    fail("could not parse REEL_LEADER_CHOICES")
leader_count = len(re.findall(r'\bid: "', leader_block.group("body")))
if leader_count != 3:
    fail(f"expected 3 final leader outcomes, found {leader_count}")
require_absent(leader_block.group("body"), 'id: "add-leader"', "Add a Leader must not be persisted as a leader outcome")

leader_decision_guidance_block = re.search(
    r"const REEL_LEADER_DECISION_GUIDANCE = Object\.freeze\(\{(?P<body>.*?)\n\}\);",
    reel_guidance_js,
    flags=re.S
)
if not leader_decision_guidance_block:
    fail("could not parse REEL_LEADER_DECISION_GUIDANCE")
for line_type in ["monofilament", "fluorocarbon", "braid"]:
    require_text(leader_decision_guidance_block.group("body"), f"{line_type}: Object.freeze", f"leader decision guidance {line_type}")

leader_setup_guidance_block = re.search(
    r"const REEL_LEADER_SETUP_GUIDANCE = Object\.freeze\(\{(?P<body>.*?)\n\}\);\n\nconst REEL_EQUIPMENT_GUIDANCE",
    reel_guidance_js,
    flags=re.S
)
if not leader_setup_guidance_block:
    fail("could not parse REEL_LEADER_SETUP_GUIDANCE")
leader_material_profile_ids = re.findall(
    r'^    "(fluorocarbon-leader|monofilament-leader)": Object\.freeze\(\{',
    leader_setup_guidance_block.group("body"),
    flags=re.M
)
if set(leader_material_profile_ids) != {"fluorocarbon-leader", "monofilament-leader"} or len(leader_material_profile_ids) != 2:
    fail(f"expected exactly 2 leader material guidance profiles, found {leader_material_profile_ids}")
if leader_setup_guidance_block.group("body").count("3–4 feet") < 2:
    fail("both leader material profiles must include the 3–4 feet beginner starting reference")
for needle, label in [
    ("practical beginner reference", "leader length is a starting reference"),
    ("low underwater visibility and useful abrasion resistance", "fluorocarbon properties"),
    ("more buoyant than fluorocarbon", "monofilament buoyancy tradeoff"),
    ("more visible underwater than fluorocarbon", "monofilament visibility tradeoff"),
    ("If the two lines differ dramatically in diameter", "Double Uni diameter boundary")
]:
    require_text(leader_setup_guidance_block.group("body"), needle, f"leader setup guidance {label}")

spooling_block = re.search(
    r"const REEL_SPOOLING_GUIDANCE = Object\.freeze\(\{(?P<body>.*?)\n\}\);\n+const REEL_LEADER_CHOICES",
    reel_guidance_js,
    flags=re.S
)
if not spooling_block:
    fail("could not parse REEL_SPOOLING_GUIDANCE")

spooling_profile_ids = re.findall(
    r"^    (spinning|spincast|baitcasting): Object\.freeze\(\{",
    spooling_block.group("body"),
    flags=re.M
)
if set(spooling_profile_ids) != {"spinning", "spincast", "baitcasting"} or len(spooling_profile_ids) != 3:
    fail(f"expected spinning, spincast, and baitcasting spooling profiles, found {spooling_profile_ids}")
spooling_count = len(spooling_profile_ids)

for needle, label in [
    ('title: "Spool Your Spinning Reel"', "spinning profile"),
    ('Open the bail before securing the line to the spool.', "spinning bail order"),
    ('comes off counterclockwise', "spinning mono/fluoro twist check"),
    ('title: "Spool Your Spincast Reel"', "spincast profile"),
    ('feed the line through the cover opening', "spincast cover routing"),
    ('Braided line may not work correctly on some spincast reels', "spincast braid compatibility guard"),
    ('title: "Spool Your Baitcasting Reel"', "baitcasting profile"),
    ("baitcaster's line guide", "baitcasting line-guide routing"),
    ("not an instruction to change the reel's casting spool-tension knob", "baitcasting winding-tension boundary"),
    ('exact reel manufacturer', "manufacturer-specific override")
]:
    require_text(spooling_block.group("body"), needle, f"spooling guidance {label}")

if spooling_block.group("body").count("1/8 inch") < 3:
    fail("each reel-specific spooling profile must include a conservative spool-fill reference")

if spooling_block.group("body").count("emphasis: Object.freeze([") < 18:
    fail("each Block 3.7 spooling instruction must carry explicit key-phrase emphasis metadata")
for needle, label in [
    ('Open the bail before securing the line to the spool.', "spinning bail emphasis"),
    ('Braided line may not work correctly on some spincast reels', "spincast braid emphasis"),
    ("not an instruction to change the reel's casting spool-tension knob or braking system", "baitcasting control-boundary emphasis")
]:
    require_text(spooling_block.group("body"), needle, f"spooling emphasis {label}")

for needle, label in [
    ('title: "Do You Need Backing?"', "backing page title"),
    ('Braid can slip on a smooth spool.', "smooth-spool braid guard"),
    ('title: "Spool Connection Plan"', "connection plan title"),
    ('knotId: "arbor-knot"', "Arbor Knot handoff"),
    ('knotId: "double-uni-knot"', "Double Uni handoff"),
    ('generic Arbor Knot is not presented as a direct-braid spool knot', "no generic direct-braid Arbor"),
    ('title: "Next — Spool the Reel"', "spooling transition"),
    ('renderedCards[index]?.classList.add("dashboard-card--workflow")', "workflow-card class application"),
    ('reelSetupState.stepId = REEL_SETUP_STEP_IDS.SPOOLING_INSTRUCTIONS;', "spooling transition handler"),
    ('[REEL_SETUP_STEP_IDS.SPOOLING_INSTRUCTIONS]: { stepId: REEL_SETUP_STEP_IDS.SPOOL_CONNECTION_PLAN, label: "Spool Connection Plan" }', "spooling previous-step mapping"),
    ('title: "Next — Leader Setup"', "post-spooling checkpoint")
]:
    require_text(script_js, needle, label)

spool_next_card = re.search(
    r'\{\s*id: "spool-reel-next",(?P<body>.*?)\n            \},',
    script_js,
    flags=re.S
)
if not spool_next_card:
    fail("could not isolate Next — Spool the Reel card")
require_text(spool_next_card.group("body"), 'isAvailable: true', "enabled spooling transition")
require_text(spool_next_card.group("body"), 'isWorkflowAction: true', "spooling transition workflow emphasis")

spool_plan_match = re.search(
    r"function renderReelSetupSpoolConnectionPlanStep\(appMain\) \{(?P<body>.*?)\n\}\n\nfunction renderReelSetupSpoolingInstructionsStep",
    script_js,
    flags=re.S
)
if not spool_plan_match:
    fail("could not isolate Spool Connection Plan for card-order validation")
spool_plan_body = spool_plan_match.group("body")
next_index = spool_plan_body.find('id: "spool-reel-next"')
knot_map_index = spool_plan_body.find("...plan.knotActions.map")
if next_index < 0 or knot_map_index < 0 or next_index > knot_map_index:
    fail("Next — Spool the Reel must be the first option before Knot reference actions")

leader_next_card = re.search(
    r'\{\s*id: "leader-setup-next",(?P<body>.*?)\n            \},',
    script_js,
    flags=re.S
)
if not leader_next_card:
    fail("could not isolate post-spooling Leader Setup checkpoint")
require_text(leader_next_card.group("body"), 'isAvailable: true', "Block 3.8 Leader Setup entry enabled")
require_text(leader_next_card.group("body"), 'isWorkflowAction: true', "Leader Setup entry workflow emphasis")
require_text(
    spooling_instructions_block,
    'reelSetupState.stepId = REEL_SETUP_STEP_IDS.LEADER_DECISION;',
    "Leader Setup entry transition"
)



leader_decision_block = get_function_block(
    script_js,
    "renderReelSetupLeaderDecisionStep",
    "renderReelSetupLeaderMaterialStep"
)
for needle, label in [
    ('title: "Do You Need a Leader?"', "leader decision page title"),
    ('id: noLeader.id', "No Leader branch"),
    ('id: "add-leader"', "Add a Leader branch"),
    ('reelSetupState.leaderChoice = "none";', "No Leader persistence"),
    ('reelSetupState.leaderChoice = null;', "Add a Leader clears stale outcome"),
    ('reelSetupState.stepId = REEL_SETUP_STEP_IDS.LEADER_MATERIAL;', "Add a Leader material transition")
]:
    require_text(leader_decision_block, needle, label)
require_absent(leader_decision_block, 'reelSetupState.leaderChoice = "add-leader"', "Add a Leader must not persist")

leader_material_block = get_function_block(
    script_js,
    "renderReelSetupLeaderMaterialStep",
    "renderReelSetupLeaderSetupStep"
)
for needle, label in [
    ('title: "What Leader Material?"', "leader material page title"),
    ('getReelLeaderChoice("fluorocarbon-leader")', "fluorocarbon material choice"),
    ('getReelLeaderChoice("monofilament-leader")', "monofilament material choice"),
    ('reelSetupState.leaderChoice = actionId;', "material outcome persistence"),
    ('reelSetupState.stepId = REEL_SETUP_STEP_IDS.LEADER_SETUP;', "material to setup transition")
]:
    require_text(leader_material_block, needle, label)
require_absent(leader_material_block, 'getReelLeaderChoice("none")', "No Leader must stay on the first decision screen")

leader_setup_block = get_function_block(
    script_js,
    "renderReelSetupLeaderSetupStep",
    "getActiveKnots"
)
for needle, label in [
    ('const hasLeader = leaderChoice.id !== "none";', "No Leader vs leader branch boundary"),
    ('title: "Leader Setup"', "Leader Setup page title"),
    ('id: "reel-ready-next"', "Reel Ready checkpoint"),
    ('title: "Next — Reel Ready Check"', "Reel Ready checkpoint label"),
    ('isAvailable: false', "Reel Ready checkpoint disabled"),
    ('if (hasLeader) {', "leader-only reference branch"),
    ('id: "view-double-uni-knot"', "leader Double Uni reference"),
    ('openKnotDetailFromReelSetup("double-uni-knot", "Leader Setup")', "Leader Setup Knot return label")
]:
    require_text(leader_setup_block, needle, label)
if leader_setup_block.count('id: "view-double-uni-knot"') != 1:
    fail("Leader Setup must define exactly one Double Uni reference card")

for needle, label in [
    ('[REEL_SETUP_STEP_IDS.LEADER_DECISION]: { stepId: REEL_SETUP_STEP_IDS.SPOOLING_INSTRUCTIONS, label: "Spool the Reel" }', "Leader Decision previous step"),
    ('[REEL_SETUP_STEP_IDS.LEADER_MATERIAL]: { stepId: REEL_SETUP_STEP_IDS.LEADER_DECISION, label: "Leader Decision" }', "Leader Material previous step"),
    ('reelSetupState.leaderChoice === "none"', "Leader Setup dynamic previous step"),
    ('{ stepId: REEL_SETUP_STEP_IDS.LEADER_DECISION, label: "Leader Decision" }', "No Leader setup previous destination"),
    ('{ stepId: REEL_SETUP_STEP_IDS.LEADER_MATERIAL, label: "Leader Material" }', "material leader setup previous destination")
]:
    require_text(script_js, needle, label)

for needle, label in [
    ('labels.push(leaderChoice.title)', "leader choice summary value"),
    ('const strengthLead = `Starting strength reference: ${targetProfile.easyChoice}.`', "target-fish strength reference reuse"),
    ('not a measured property of the line actually on the reel', "strength false-precision boundary"),
    ('label: returnLabel', "contextual Reel Setup Knot return label")
]:
    require_text(script_js, needle, label)

for forbidden_state in ["leaderLength", "leaderStrength", "leaderPoundTest", "leaderMaterial"]:
    require_absent(script_js, f"{forbidden_state}:", f"forbidden persistent state {forbidden_state}")


for needle, label in [
    ('title: "Monofilament Backing"', "mono backing label"),
    ('title: "Direct Braid — Reel Approved"', "direct-braid guarded choice"),
    ('exact reel or spool explicitly provides a braid-ready attachment surface', "direct-braid equipment guard")
]:
    require_text(reel_guidance_js, needle, label)

# Reel Setup branch/progression cards receive compact workflow emphasis while
# help/reset/exit cards retain the standard card treatment.
for needle, label in [
    ('isWorkflowAction: true', "workflow marker"),
    ('cards: REEL_SETUP_ENTRY_OPTIONS.map', "entry branch source"),
    ('cards: REEL_TYPE_OPTIONS.map', "reel-type branch source"),
    ('cards: REEL_TARGET_FISH_PROFILES.map', "target-fish branch source"),
    ('id: "confirm-equipment-match"', "equipment progression"),
    ('id: "backing-decision-next"', "backing progression"),
    ('id: "spool-reel-next"', "spooling progression"),
    ('id: "add-leader"', "leader add branch"),
    ('id: "reel-ready-next"', "Reel Ready progression boundary")
]:
    require_text(script_js, needle, f"workflow-card {label}")
if script_js.count("isWorkflowAction: true") < 25:
    fail("expected workflow emphasis across Reel Setup progression/branch cards")

# Selected Choices keeps the approved flat treatment and includes backing plus final leader outcome.
for needle, label in [
    ('values.style.fontSize = ".78rem"', "matched value size"),
    ('label.style.fontSize = ".78rem"', "matched label size"),
    ('selectedChoices.style.borderTop = "1px solid var(--border)"', "flat top divider"),
    ('selectedChoices.style.borderBottom = "1px solid var(--border)"', "flat bottom divider"),
    ('labels.push(backingChoice.title)', "backing choice summary value"),
    ('labels.push(leaderChoice.title)', "leader choice summary value")
]:
    require_text(script_js, needle, label)

if 'selectedChoices.style.background =' in script_js:
    fail("Selected Choices must not restore a card-like background")
if 'selectedChoices.style.borderRadius =' in script_js:
    fail("Selected Choices must not restore rounded-card styling")

# Block 3.8 adds exactly one downstream persistent selection: leaderChoice.
# It must not add separate material/length/strength state for values not actually captured.
initial_state_match = re.search(
    r"function createInitialReelSetupState\(\) \{\s*return \{(?P<body>.*?)\n    \};\n\}",
    script_js,
    flags=re.S
)
if not initial_state_match:
    fail("could not isolate createInitialReelSetupState")
state_fields = re.findall(r"^        ([A-Za-z0-9_]+):", initial_state_match.group("body"), flags=re.M)
expected_state_fields = [
    "stepId",
    "entryMode",
    "reelType",
    "lineType",
    "targetFish",
    "equipmentCheck",
    "backingChoice",
    "leaderChoice"
]
if state_fields != expected_state_fields:
    fail(f"Block 3.8 state schema mismatch; expected only leaderChoice after backingChoice, found {state_fields}")

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
    fail("Package 3 Reel Setup must remain internally accessed until the guided workflow integration block")

for needle, label in [
    ("Deferred Search UX Issue — Parking Lot", "deferred scoped-search issue"),
    ("Workflow Card Hierarchy / Instruction Emphasis — Implemented", "card hierarchy correction"),
    ("Step 4 — Baitcasting Reel: PASS", "runtime Step 4 result")
]:
    require_text(block_3_7_workstream, needle, f"Block 3.7 workstream {label}")

for needle, label in [
    ("**Block:** 3.8 — Leader Setup", "block title"),
    ("IMPLEMENTED / STATIC VALIDATION", "implementation status"),
    ("Approved Architecture Change After Opening", "approved two-stage correction"),
    ("LEADER_MATERIAL = \"leader-material\"", "leader material step documentation"),
    ("Add a Leader", "navigation-only branch documentation"),
    ("3–4 feet", "leader length boundary"),
    ("Starting strength reference", "leader strength boundary"),
    ("Deferred Search UX Issue — Parking Lot", "deferred search issue preserved")
]:
    require_text(block_3_8_workstream, needle, f"Block 3.8 workstream {label}")

for needle, label in [
    ("Block 3.8 — Leader Setup", "aggregate Block 3.8 section"),
    ("leaderChoice", "aggregate state update"),
    ("Reel Ready Check / Rig Guide Handoff", "aggregate next capability"),
    ("Deferred Search UX Issue — Parking Lot", "aggregate deferred search issue")
]:
    require_text(package_3_workstream, needle, f"Package 3 aggregate {label}")

for path in ["script.js", "data/reel-guidance.js"]:
    result = subprocess.run(
        ["node", "--check", str(ROOT / path)],
        capture_output=True,
        text=True
    )
    if result.returncode != 0:
        fail(f"JavaScript syntax check failed for {path}: {result.stderr.strip()}")

print("Production Package 3 Block 3.8 validation passed.")
print(f"Backing choices: {backing_count}")
print(f"Spooling profiles: {spooling_count}")
print(f"Leader outcomes: {leader_count}")
print("Reel Setup navigation: step-aware and sticky/floating.")
print("Workflow cards: redundant upstream-change cards removed; compact emphasis inherits the existing card palette.")
print("Spooling instructions: key actions receive structured strong-text emphasis.")
print("Leader Setup: two-stage decision, material guidance, and canonical Double Uni handoff enabled.")
print("Reel-specific spooling: spinning, spincast, baitcasting.")
print("Canonical Knot handoffs: Arbor Knot and Double Uni Knot.")
print("Reel Setup Knot return context: exact step/state restoration enabled.")
print("Normal Knot landing remains intentionally unwired to Reel Setup.")
