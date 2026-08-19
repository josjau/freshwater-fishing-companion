# Freshwater Fishing Companion — Repository Archive

`archive/` is the single canonical repository archive root.

Archived content is historical, non-production material retained because it still has independent audit, provenance, reconstruction, design-lineage, or implementation-history value. Archived material must never override current production source, governing documentation, current data models, or active workstreams.

## Archive versus Git history

Normal revisions of tracked files do **not** receive a separate archived copy merely because the file was replaced or rewritten.

Git already preserves prior committed versions of files such as JavaScript, CSS, HTML, data, and Markdown. Creating an archive copy for every prior source-file version would duplicate Git history, create stale authoritative-looking files, and increase the risk of future sessions using obsolete content.

A whole-file replacement is therefore treated the same as a targeted edit for archival purposes: the prior committed version remains recoverable through Git history and is not copied into `archive/` unless it has a separate historical role beyond being an older revision.

## What belongs in `archive/`

Archive material should have continuing value as an artifact in its own right, for example:

- completed package manifests and package-specific validation reports,
- audit logs retained for provenance,
- superseded implementation handoffs or workstream records when keeping them in an active/current directory would be misleading,
- historical design/reference boards or previews with reconstruction/design-lineage value,
- other deliberately retained historical artifacts that need direct repository discoverability independent of ordinary Git file history.

Existing package history is stored under:

```text
archive/
    README.md
    packages/
        <date>-<package>/
```

Additional archive subdirectories are created only when a real retained artifact class requires them. Do not create speculative archive categories in advance.

## What does not belong in `archive/`

Do not archive:

- every old revision of a current source or documentation file,
- temporary `.tmp`, `.bak`, editor-recovery, or staging files with no continuing value,
- accidental duplicate documentation trees,
- superseded files whose only useful history is already preserved by Git,
- deferred candidates that are still part of future product planning rather than historical material.

## Required retirement classification

Whenever an implementation, cleanup, migration, or closeout retires an existing repository artifact, explicitly classify it as one of:

1. **GIT HISTORY ONLY** — normal prior revision; no archive copy is created.
2. **ARCHIVE** — artifact retains independent historical/audit/provenance/reconstruction value and should remain directly discoverable.
3. **DELETE** — artifact has no continuing repository value beyond Git history.

Do not leave retired artifacts in active/current locations merely because no disposition was chosen.

## Required archive verification

When an artifact is classified **ARCHIVE**:

1. choose the appropriate existing archive category, or create a new category only if this is the first real artifact requiring it,
2. preserve enough context in the archived folder/file naming or accompanying documentation to explain what the artifact was and why it is retained,
3. move/copy the artifact into `archive/` before removing the active/current copy when loss risk exists,
4. verify the archived path exists on authoritative GitHub `main`,
5. verify the old active/current path is removed or otherwise no longer masquerades as current,
6. record the archival action in the relevant workstream/decision/closeout documentation.

A closeout that identifies an artifact for archival is not complete until those verification steps pass.

## Authority

`archive/` is historical evidence, not current truth.

Current source and governing files outside the archive remain authoritative according to their documented ownership. GitHub `main` and Git history remain authoritative for ordinary file-version recovery.
