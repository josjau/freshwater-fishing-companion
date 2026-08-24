"use strict";

const fs = require("fs");
const path = require("path");

function arg(name, fallback = "") {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 && i + 1 < process.argv.length ? process.argv[i + 1] : fallback;
}

const repoRoot = path.resolve(__dirname, "..");
const workstream = arg("workstream");
const activePath = arg("active-path");
const aliases = arg("aliases", workstream)
  .split(",")
  .map((v) => v.trim())
  .filter(Boolean);

if (!workstream) {
  console.error("Usage: node tools/validate_workstream_closeout.js --workstream \"Wave 3\" [--aliases \"Wave 3,Bass\"] [--active-path docs/workstreams/FISH-WAVE-3-BASS.md]");
  process.exit(2);
}

const stalePatterns = [
  /pending\s+(commit|push|review|verification)/i,
  /pending\s+commit\s*\+\s*post-push/i,
  /uncommitted/i,
  /active\s+(pre-commit|product task|workstream|package)/i,
  /has not been pushed/i,
  /remain(?:s)?\s+before\s+.*close/i,
  /commit\/push.*remain/i,
  /post-push.*remain/i,
  /after\s+.*\s+closes/i,
  /current\s+local\s+review\s+package/i,
];

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if ([".git", "node_modules", "archive"].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.isFile() && /\.(md|txt)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

const failures = [];
if (activePath && fs.existsSync(path.join(repoRoot, activePath))) {
  failures.push(`${activePath}: closing workstream still exists at active path`);
}

for (const file of walk(repoRoot)) {
  const rel = path.relative(repoRoot, file).replace(/\\/g, "/");
  const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
  lines.forEach((line, idx) => {
    if (!aliases.some((a) => a && line.toLowerCase().includes(a.toLowerCase()))) return;
    if (/\b(no|not)\b.*\b(uncommitted|pending|active)\b/i.test(line)) return;
    if (stalePatterns.some((p) => p.test(line))) failures.push(`${rel}:${idx + 1}: ${line.trim()}`);
  });
}

if (failures.length) {
  console.error(`FAIL — ${failures.length} stale closeout reference(s)`);
  failures.forEach((f) => console.error(`- ${f}`));
  process.exit(1);
}

console.log(`PASS — ${workstream} closeout state is internally consistent across active text documentation.`);
