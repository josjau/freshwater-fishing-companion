# Knot Search Approval

**Status:** Approved Planning  
**Date:** 2026-08-13

Version 1 Knot search is approved as a deterministic, beginner-oriented search system that follows the established section-search interaction pattern.

Approved behavior:

- Search all active canonical Knots.
- Preserve live updates, explicit Search action, and one-click clear behavior.
- Empty search restores the normal Knot Guide landing view rather than dumping all Knot records under the search field.
- Search results are relevance ordered.
- The Advanced placeholder is never treated as a canonical Knot search result.
- Selecting a result opens the canonical Knot detail page.
- Reel-spooling intent may surface a contextual **Get Your Reel Ready** action in addition to relevant Knot results.

Approved search sources:

1. canonical Knot `name`,
2. verified `aliases[]`,
3. Knot-specific `keywords[]`,
4. shared beginner task vocabulary owned by the same task-first discovery definitions used by the Knot Guide,
5. `difficulty`,
6. `compatibleLineTypes[]`.

Broad task phrases should not be copied redundantly into every Knot record when they belong to the shared task-first discovery definitions.

Approved ranking direction:

1. exact canonical name,
2. exact verified alias,
3. canonical-name prefix,
4. alias prefix,
5. exact Knot-specific keyword,
6. strong task-intent match,
7. partial name/alias/keyword match,
8. structured line-type or difficulty match.

Curated task result order is authoritative for generic beginner task searches. More specific queries should narrow the candidate set when the extra terms materially identify the intended connection.

Approved lightweight normalization includes case/punctuation normalization, common fishing shorthand such as `mono` → `monofilament` and `fluoro` → `fluorocarbon`, selected plural normalization, and limited filler-word handling so common beginner questions can map to the approved task vocabulary without requiring natural-language AI search.

Ordinary Knot search should not index large instructional fields such as `summary`, `bestFor[]`, `limitations[]`, `tyingSteps[]`, `commonMistakes[]`, `finalChecks[]`, or `referenceLinks[]` merely because incidental matching words may appear there.

Search result cards should follow the established Rig search-result grammar where practical: Core status when applicable, Knot name, difficulty, concise summary, and a clear instructions action.

No-result guidance should teach users that they may search by Knot name or practical task language.

Future direction:

This Version 1 search model is deliberately lightweight. More advanced search may be added later when demonstrated need justifies it, including stronger typo tolerance, richer query interpretation, additional ranking logic, or other advanced discovery behavior. Any future expansion should preserve relevance-first results, explainability, beginner usability, and canonical data ownership rather than replacing the approved Version 1 behavior with an opaque search system by default.

Next Knot planning topic: research/source-validation standard for canonical Knot instructions.
