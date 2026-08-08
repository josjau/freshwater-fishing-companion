#!/usr/bin/env python3
"""Fail fast on suspicious Markdown replacement truncation.

Compares working-tree Markdown files with HEAD. Intended as a conservative
repository-side safety net before a commit/push; assistant package generation
must run an equivalent baseline check before delivery.
"""
from __future__ import annotations

import argparse
import subprocess
import sys
from pathlib import Path


def git_show_head(path: Path) -> str | None:
    result = subprocess.run(
        ["git", "show", f"HEAD:{path.as_posix()}"],
        text=True,
        capture_output=True,
    )
    return result.stdout if result.returncode == 0 else None


def headings(text: str) -> set[str]:
    return {line.strip() for line in text.splitlines() if line.startswith("#")}


def deleted_line_count(path: Path) -> int:
    result = subprocess.run(
        ["git", "diff", "--numstat", "HEAD", "--", path.as_posix()],
        text=True,
        capture_output=True,
        check=False,
    )
    if not result.stdout.strip():
        return 0
    parts = result.stdout.strip().split("\t")
    try:
        return int(parts[1])
    except (ValueError, IndexError):
        return 0


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("paths", nargs="*", help="Markdown files to validate; defaults to changed Markdown files")
    parser.add_argument("--threshold", type=float, default=0.10, help="Maximum unapproved shrink/deletion ratio")
    args = parser.parse_args()

    if args.paths:
        paths = [Path(p) for p in args.paths]
    else:
        result = subprocess.run(
            ["git", "diff", "--name-only", "HEAD", "--", "*.md"],
            text=True,
            capture_output=True,
            check=True,
        )
        paths = [Path(p) for p in result.stdout.splitlines() if p.strip()]

    failures: list[str] = []
    for path in paths:
        if path.suffix.lower() != ".md" or not path.exists():
            continue
        baseline = git_show_head(path)
        if baseline is None:
            continue  # new file; no prior content to preserve
        current = path.read_text(encoding="utf-8")
        base_lines = baseline.splitlines()
        current_lines = current.splitlines()
        denom = max(1, len(base_lines))

        missing_headings = sorted(headings(baseline) - headings(current))
        if missing_headings:
            failures.append(f"{path}: removed headings: {', '.join(missing_headings)}")

        shrink_ratio = max(0, len(base_lines) - len(current_lines)) / denom
        if shrink_ratio > args.threshold:
            failures.append(f"{path}: line-count shrink {shrink_ratio:.1%} exceeds {args.threshold:.0%}")

        deletion_ratio = deleted_line_count(path) / denom
        if deletion_ratio > args.threshold:
            failures.append(f"{path}: deleted-line ratio {deletion_ratio:.1%} exceeds {args.threshold:.0%}")

    if failures:
        print("REPLACEMENT INTEGRITY: FAIL", file=sys.stderr)
        for failure in failures:
            print(f"- {failure}", file=sys.stderr)
        return 1

    print("REPLACEMENT INTEGRITY: PASS")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
