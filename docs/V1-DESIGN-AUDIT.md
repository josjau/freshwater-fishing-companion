# Freshwater Fishing Companion — Version 1 Design Audit


**Document:** V1-DESIGN-AUDIT.md  
**Document Revision:** 1.0.41  
**Document Status:** Approved  
**Audit Status:** REQUIRED / PENDING EXECUTION  
**Last Updated:** 2026-09-24


# Purpose


This document is the canonical backlog and execution standard for the final Version 1 site-wide design audit.


The audit exists because mobile validation during Fish Guide Production Wave 1 exposed cross-domain visual and interaction inconsistencies that should be resolved systematically rather than through unrelated one-off changes during Fish production.


The audit is **not** authorization to redesign every page immediately. Functional/domain work may continue. The full audit begins after the Version 1 functional scope is settled enough that a site-wide pass will not be invalidated by routine feature construction.


# Required Version 1 Gate


Before Version 1 design is considered complete:


1. Perform one full site-wide design audit across implemented Version 1 surfaces.
2. Inventory reusable UI/component types first, then inspect every occurrence across domains.
3. Resolve unexplained presentation and interaction inconsistencies through shared semantic rules where practical.
4. Validate the resulting application in a **full-size desktop web browser** and on an **actual mobile device**. Desktop-wide fixes must not regress mobile behavior, and mobile fixes must not leave full desktop layouts visually broken or poorly proportioned.
5. Preserve readable typography, practical touch targets, accessible focus/contrast behavior, and mobile field usability.
6. Prefer reducing duplicated content, excess padding, excess margins, unnecessary container nesting, and redundant visual treatments before shrinking typography.


Design target:


> **Compact, not miniature.**


# Guide-Family Discovery-to-Build Traceability Standard


Beginning with the Knots Guide refinement audit, each Guide-family audit creates one **temporary Guide-specific audit file** at discovery start. That file is the active discovery-to-build traceability owner for the Guide and is not a new permanent semantic authority.


## Discussion-to-Approval Documentation Batching

Guide/audit discussion should remain discussion until the user explicitly approves the checkpoint/gate or explicitly requests an immediate documentation update. Do **not** perform incremental Drive/documentation writes for each small discovery, preference, or refinement during an active discussion merely to preserve it. Hold those decisions in the active conversation and consolidate them into the next approval-gate documentation pass.

If the user asks questions in the same message as an approval, or asks questions immediately before the approval-gate documentation pass begins, **answer the questions first**. Only after the questions are resolved should the approval documentation gate start. One approval should normally produce one bounded consolidated documentation pass, not multiple serial micro-updates.

This batching rule does not weaken the approval closure hard gate: once approval is given, required canonical-owner writes/readbacks and Live Working State closure still complete before dependent work advances.


The temporary audit file must:


- use the Guide's approved audit outline to define stable checkpoint/section names independent of chat/session IDs;
- record each checkpoint's completion state;
- record every discovered actionable item with one explicit disposition such as **BUILD REQUIRED**, **BUILD TEST REQUIRED**, **VERIFY ONLY**, **DOC UPDATE**, **DEFERRED — named owner/gate**, or **CLOSED / PASS**;
- capture approved decisions and newly discovered defects/carry-forward items at each approval gate rather than relying on later chat reconstruction;
- retain source-owner/file-scope and validation requirements as they become known;
- explicitly inherit and verify the current **Guide-family baseline** from `UI_STANDARD.md` for every equivalent component instead of depending on chat memory. For collection/browse cards, the audit must specifically carry the approved Fish grammar: **title + `Browse →` heading row, description below, whole-card interaction, lighter non-pill action, and left-aligned action wrap when the row no longer fits**; any exception must be deliberate, documented, and semantically justified;
- provide the implementation-scope lock/checklist before production work begins;
- remain the line-by-line implementation/browser-validation closure checklist until every required item is implemented and validated or explicitly re-dispositioned; and
- be retired/deleted after final Guide closeout only after durable decisions and non-closed carry-forward items have been promoted to their proper canonical owners.


This standard exists specifically to prevent approved audit findings from being lost between discovery, build, browser review, and closeout. Tackle Guide, Technique Guide, Rig Guide, and later comparable Guide audits inherit this rule unless a future explicit governance decision replaces it.

The same inheritance rule applies to **validated Fish baseline treatments**. Once an equivalent Fish component treatment is approved and promoted into `UI_STANDARD.md`, later Guide audits must start from that baseline, include an explicit verification/action item in their temporary audit file, and carry it through build/browser validation. Future Guide audits may challenge the baseline when their domain semantics justify a different treatment, but they may not silently omit it because a later chat failed to remember the Fish decision.


# Fish Guide Baseline — Validated


Fish Guide Production Wave 1 was user-approved after mobile validation. Waves 2–4 subsequently validated additional Fish presentation refinements. The Fish Guide milestone is now closed; these Fish-specific results are established working standards unless the later site-wide audit demonstrates a cross-domain reason to normalize presentation without changing Fish semantic content.


- Common Carp, Freshwater Drum, and Paddlefish selection-card image framing is approved.
- Fish identity separates identity metadata from identification instruction: the identity area presents image/name/scientific name/family/aliases, while the Fish summary leads **How to Identify It** with detailed traits following.
- Fish information sections use the basic/plain-border treatment.
- Safety uses a deliberate semantic warning treatment rather than ordinary information-card emphasis.
- **Compare Similar Fish** uses the approved workflow/action-card emphasis.
- Workflow/action cards should use a standardized workflow visual language; the final audit must identify every qualifying site-wide card before expanding that treatment.
- Per-Fish presentation framing may adjust whitespace-heavy artwork without altering canonical media/source identity; natural proportions and diagnostic extremities remain protected.
- Wave 2 establishes the current Fish reference-surface treatment: eligible isolated/transparent Fish display over the exact `#f4f0e8` reference-media surface.
- Wave 2 Selection and Fish Detail image blocks use standardized presentation geometry with independent per-Fish fit tuning rather than species-specific frame dimensions.
- Compare Similar Fish keeps its 84 × 56 thumbnail size. Desktop may use two choices side-by-side; actual mobile review validated one comparison tile per row as the preferred narrow-screen treatment.


- Wave 4 desktop/mobile review validated per-Fish Selection/Detail framing plus normalized Compare Fish catalog and Field Identification sizing/alignment; Northern Rock Bass served as the visual size reference for the close-shaped Sunfish/Crappie comparison set.
- Wave 4 implemented the D048/UI_STANDARD multi-accent peer-card correction for Compare Fish; specialized pair imagery remains inside the shared Dashboard-derived card language.
Fish semantic/content validation is closed for completed Fish. Production Wave 2 is closed after the Compare Fish anatomical body-axis alignment correction passed desktop/mobile review and post-push verification. The final design audit may reconcile shared visual grammar, but it must not silently reopen approved Fish facts, media provenance, relationships, or guidance.


# FCC 48B / FCC 48C — Fish Landing-Page Baseline Audit — Gate 152 Closed


**Status:** GATE 152 CLOSED / PASS / CHECKPOINTS 152.1-152.8 APPROVED / REFINEMENT ALLOWED / TWO BUILD-REVIEW VISUAL TESTS RETAINED


FCC 48B and FCC 48C have approved the Fish landing-page structure, card-content direction, interaction behavior, and responsive baseline. These are design/audit decisions only; no Fish production source/data/media/configuration change has been authorized yet. Two bounded geometry comparisons remain for build-time visual review before final UX implementation approval: Compare Similar Fish normal-grid width versus row spanning, and desktop Search full content width versus an approximately 720px maximum. Those tests do not reopen Gate 152 unless they expose a material defect.


## Approved landing structure


- Use a compact **Guide identity** block rather than a large hero. Fish may use restrained Fish-specific visual flair/motif, but decoration remains subordinate to content and should collapse gracefully on mobile.
- Keep Guide Search immediately after identity. Use **Search Fish** with helper text **Search by common name, alias, or group.**, live filtering, and a visible `×` clear chip/button with a practical touch target. A redundant visible Search button is not needed when typing already performs the search.
- Guide pages/subpages do **not** have a fixed Guide-specific color assignment. Shared Guide Search therefore uses shared interface/theme styling rather than inheriting a Fish/Knots/Tackle/Technique/Rig page color.
- Mobile/intermediate Fish landing Search uses the available width. On desktop, constrain the Fish Search surface to approximately the width of two cards in the three-column Guide browse grid rather than stretching it across the full content width.
- Keep **Compare Similar Fish** above normal browse choices as a semantically distinct workflow/tool entry. Remove duplicate outer heading/explanation when the single workflow card can own its title, explanation, and action. A small `Identification Tool` eyebrow may be tested.
- Keep normal grid-position Compare-card width as the current default review candidate at intermediate and desktop widths. During the build, compare it against a row-spanning version; the user currently leans toward retaining the single normal-width card with unused grid space beside it. Do not finalize spanning without the actual browser comparison. Do not add another large decorative Fish graphic inside this card.
- Keep **Browse Fish** as a simple section heading with spacing separating it from Compare. Do not require an explanatory paragraph, divider, or additional graphic when the collection cards are already understandable.


## Approved collection-card direction


- Use a dedicated **Guide/reference browse-card variant** rather than copying the generic Dashboard card appearance exactly; preserve a compact rounded shell and the existing 1/2/3-column responsive grid as the current starting point.
- Standard cards in a multi-card section may reuse approved theme accents later in the sequence, but **sequential standard cards may not share the same accent**.
- Special/workflow cards use standardized reserved special-accent colors. Standard cards in that section must not use the reserved special-card accent(s). If a section has multiple special cards, the special set may contain more than one reserved color so those cards can also remain visually distinct. Exact palette assignments require visual implementation testing.
- `All Fish` remains a normal browse card and uses the same outer shell as other collections.
- Keep explicit action cues such as **Browse →** and **Compare →**. Put the action beside the title when it fits comfortably; when it does not, move the action to a new **left-aligned** line rather than squeezing the title or right-aligning a wrapped action.
- Test removing the action's pill appearance in favor of a lighter action-link treatment. This is a test direction, not yet a universally validated card rule.
- Keep short collection descriptions where they help a beginner understand the destination. Do not add generic category eyebrows to every normal card.


## FCC 48C interaction + responsive disposition


Checkpoint **152.7 is APPROVED / refinement allowed**. Whole-card Browse/Compare controls retain restrained hover only where hover is available, clearly visible keyboard focus, subtle pressed/touch feedback, 48px actionable targets, reduced-motion support, and omission rather than a misleading disabled Compare action when that workflow is genuinely unavailable. The approved Fish landing Search has no redundant visible Search button; live search-as-you-type, Enter/mobile Search semantics where appropriate, the in-field clear control, landing restoration on clear, and returned Search focus remain the interaction baseline.


Checkpoint **152.8 is APPROVED / refinement allowed**. Browse cards use 1 column below 640px, 2 columns from 640-899px, and 3 columns at 900px and above. Wide desktop keeps the centered readable application canvas and three-column browse density instead of expanding to 4+ columns solely to fill space. Title/action rows stay together when comfortable and wrap the full action cue to a new left-aligned line when needed. Card accent identity remains stable through reflow; breakpoint changes do not recalculate accent semantics by column. No responsive mode may introduce horizontal scrolling or remove approved information merely to fit.


Two bounded **build-review visual tests** remain intentionally open without blocking Gate 152: (1) Compare Similar Fish normal-grid width versus row spanning at intermediate/desktop widths, with normal grid width currently preferred for review; and (2) desktop Search full content width versus an approximately 720px maximum. The actual implementation comparison decides those two visual geometry choices before final UX approval.


# FCC 48D — Fish Browse / Search Result Component Audit — Checkpoint 153.1


**Status:** CHECKPOINT 153.1 APPROVED / REFINEMENT ALLOWED / BUILD-REVIEW DESKTOP DENSITY TEST RETAINED


Checkpoint 153.1 establishes the Fish browse/search result-card architecture and a reusable Guide-family direction. This is a design/audit decision only; no Fish production source/data/media/configuration change is authorized by this approval.


Approved result-card direction:


- Use one shared Fish result-card architecture across Fish landing Search and collection Browse/Search.
- Result-card hierarchy is **Category → Common Name + `View Fish →` → Fish image → alias/`Also called` when present → short summary**.
- Remove scientific name and Family from browse/search result cards; they remain appropriate detail/reference information.
- Omit the alias row when a Fish has no approved alias. Place `Also called:` **below the Fish image** so optional alias data does not shift the image plane between peer result cards.
- Keep the whole result card actionable when detail exists. `View Fish →` is a lightweight visual affordance, not a nested competing destination. At normal desktop result-card widths, keep Common Name and `View Fish →` in one deterministic heading row with the action held to the right; do not let individual desktop cards independently drop the action to a second line.
- Guide pages and Guide subpages do **not** receive a fixed Guide-specific color. Fish/Knots/Tackle/Technique/Rig identity should come from content, imagery, headings, restrained motifs/graphics, and structure rather than one assigned page color. Standard result cards rotate through the shared standard accent palette, sequential standard cards do not share the same accent, and reserved special/workflow accents remain protected.
- **Remove visible Search buttons from Guide-family Search surfaces by default.** Guide Search is live; an explicit Search/submit control requires a separately approved functional reason. Regulations is not governed by this Guide-family default and its state/search picker remains a separate surface to evaluate on its own functional needs.
- Preserve existing Fish browse/search semantics: empty-query collection browse remains alphabetical A-Z; typed Search retains the current relevance ranking.
- R1 browser review also approves removing accent-tinted card bloom/wash from card surfaces site-wide. Card accents remain through edge/border/action/focus treatment, while card surfaces use the normal neutral surface/elevation family.
- Result cards use one column on mobile and **two columns from intermediate/tablet through full desktop**. The three-column desktop candidate was rejected in browser review because the narrower cards reduced Fish-image usefulness and increased title/action wrapping pressure.


This approval supersedes any earlier wording that required Guide Search or Guide subpages to inherit a fixed Guide/domain accent.


# FCC 48D — Fish Browse / Search Result Component Audit — Checkpoint 153.2


**Status:** CHECKPOINT 153.2 APPROVED / REFINEMENT ALLOWED / GATE 153 CLOSED-PASS


Checkpoint 153.2 closes the Fish browse/search result-state and interaction baseline while preserving the 153.1 card architecture. This is a design/audit approval only; no production source/data/media/configuration change is authorized by this checkpoint.


Approved state/interaction direction:


- Fish Guide landing Search with an empty query shows no result count and no result-card grid; Browse Fish remains the empty-query discovery path on the landing page.
- Collection Browse/Search with an empty query restores the complete current collection in alphabetical A-Z order and may show compact `N fish` status.
- Active filtering uses compact `N fish found` status.
- No-match copy is **`No fish found. Try another search.`**. A genuinely empty collection/data state remains separately worded as **`No fish are currently available in this collection.`**.
- Clear `x` removes the entire query in one action, immediately restores the correct state for the current surface, retains/returns Search focus, requires no visible submit/reload, and must not force an unnecessary scroll jump.
- Result status uses polite assistive announcements. The clear control retains the accessible name **Clear search**.
- Each actionable result card remains one whole-card interactive target; `View Fish ->` is a visual affordance rather than a separately focusable nested action.
- Hover treatment is restrained and does not replace the assigned accent; whole-card `:focus-visible` must be clearly visible; pressed/touch feedback is subtle; touch interaction never depends on hover. Scale/lift animation is not required.
- A Fish with no available detail destination must render as a genuinely non-interactive fallback without `View Fish ->`, pointer cursor, or misleading hover/focus treatment.
- The current local/static Fish result surface requires no dedicated persistent Loading state. Future asynchronous behavior would require a deliberate loading-state decision.


**Gate 153 is CLOSED / PASS / refinement allowed** through checkpoints 153.1 and 153.2. The already-approved full-desktop **two-versus-three-column** result-density comparison remains a bounded build-review visual validation test and does not keep Gate 153 open.


# FCC 48E — Fish Detail Page Component Audit — Checkpoint 154.1


**Status:** CHECKPOINT 154.1 USER-APPROVED / REFINEMENT ALLOWED / FISH-FIRST BUILD REVIEW REQUIRED


Checkpoint 154.1 establishes the Fish Detail working hierarchy without prematurely standardizing one Guide-wide detail layout. Fish is built and reviewed first; exact responsive composition, disclosure mechanics, and supporting-information visual language may be refined during the implementation/review phase. Only after Fish is satisfactory should equivalent successful patterns be evaluated for Guide-family promotion.


Approved direction:


- Preserve Parent/Home navigation and compact category framing above the Fish identity.
- Keep the common name visually dominant. Keep scientific name explicitly labeled and subordinate; show approved aliases when present and Family as compact reference metadata.
- Keep the primary Fish image prominent.
- Keep a visible beginner-oriented **How to Identify This Fish** overview below/near the primary image rather than burying the core recognition description in secondary disclosure. This audit checkpoint does not authorize or lock a new Fish schema field; content/data ownership is handled separately.
- Use a compact **ABOUT THIS FISH** supporting-information group as the current mobile-first working direction: **Key Identification Traits ⓘ**, **Habitat & Water ⓘ**, **Rigs to Start With ⓘ**, and **Compare Similar Fish →**.
- Treat the full labeled row as the interactive target. `ⓘ` means supporting/context information that retains Fish context; `→` means navigation/workflow. Compare remains a direct workflow action rather than an information disclosure.
- Do not automatically reproduce every existing pill inside disclosures. Test content-appropriate internals: pills/chips for short categorical values; compact information rows or restrained icon/label treatments for concepts that benefit from explanation; structured recommendation rows for Rigs including approved priority/reason/navigation semantics.
- Do not hide a material Fish safety/handling warning merely to save space. A visible caution/status cue remains appropriate when the user needs that information before acting, with fuller detail allowed behind disclosure.
- Preserve the no-fixed-Guide-color rule. Exact iconography, interior treatment, desktop geometry, and modal/bottom-sheet/inline implementation are bounded build-review decisions.


This is a design/audit approval only. It does not authorize Fish production source/data/media/configuration changes.


# FCC 48F — Fish Detail Page Component Audit — Checkpoint 154.2


**Status:** CHECKPOINT 154.2 USER-APPROVED / REFINEMENT ALLOWED / CONTENT-OWNERSHIP CLEANUP REQUIRED AT IMPLEMENTATION


Checkpoint 154.2 locks the Fish identification-content hierarchy without adding a new Fish schema field:


- the existing Fish `summary` is the visible **How to Identify This Fish** quick-recognition overview;
- the overview should normally be one concise beginner-readable sentence centered on approximately 2–3 high-value observable clues;
- the **Key Identification Traits** independent expander exposes the existing strongest-first `identificationTraits[]`, normally 2–4 short species-owned recognition statements;
- detailed identification traits should use stacked statements/rows rather than pills; exact bullet/row treatment remains a build-review decision;
- plain language is preferred in the visible overview; detailed traits may use accurate anatomical terminology when the surrounding wording remains understandable to a new angler;
- explicit look-alike / Fish-versus-Fish distinctions belong exclusively to `FISH_IDENTIFICATION_RELATIONSHIPS` and surface through **Compare Similar Fish →**;
- existing explicit cross-species wording inside some `identificationTraits[]` is a targeted semantic-cleanup requirement: preserve the approved Fish fact, rewrite the species-owned trait intrinsically where practical, and retain pairwise wording in the relationship owner;
- no anatomy glossary, new Fish field, or broader terminology system is created by this checkpoint.


The three intentional identification depths are therefore **quick recognition → detailed species traits → pairwise look-alike comparison**. Habitat, Rig guidance, safety/handling, scientific identity, and provenance remain with their existing owners/surfaces rather than being folded into identification content.


No production Fish source/data/media/configuration change is authorized by this approval. The targeted wording cleanup is deferred to the implementation/content pass and does not reopen approved Fish facts.


# FCC 48F — Fish Detail Page Component Audit — Checkpoint 154.3


**Status:** CHECKPOINT 154.3 USER-APPROVED / REFINEMENT ALLOWED / INDEPENDENT-EXPANDER INTERACTION GRAMMAR APPROVED


Checkpoint 154.3 refines the 154.1 ABOUT THIS FISH interaction model and approves the Habitat & Water information structure:


- **Key Identification Traits**, **Habitat & Water**, and **Rigs to Start With** use independent expanders rather than top-level `ⓘ` disclosure cues;
- the full labeled row is the toggle target; `▾` means collapsed and `▴` means expanded;
- each supporting expander starts collapsed on initial Fish-detail entry, and opening one does not automatically close another;
- **How to Identify This Fish** remains visible core content outside the collapsible group;
- `ⓘ` is reserved for contextual/reference information about a specific concept; `→` remains navigation/workflow;
- **Compare Similar Fish →** remains a direct navigation/workflow row rather than an expander.


Within **Habitat & Water**, keep **Habitat** and **Common Waters** separate. Habitat uses only applicable canonical dimension groups — **Cover**, **Water Zone**, **Water Movement**, **Structure**, and **Bottom / Substrate** — with empty headings omitted. Common Waters remains a separate compact waterbody group.


Habitat and waterbody values remain compact clickable knowledge chips. The whole chip is the contextual-information target; interactive chips must be visibly distinguishable from passive labels through deliberate interactive treatment and hover/focus/pressed states where applicable. A trailing `ⓘ` may reinforce contextual access but is not a separate nested target.


Fish Habitat associations remain neutral stable species Reference Knowledge. They do not imply preference strength, ranking, current conditions, or Recommendation suitability. The design targets the already-approved canonical 13-concept Habitat / Fish↔Habitat migration state while leaving the actual legacy-data migration to its existing implementation gate.


Exact spacing, wrapping, columns, animation, chip styling, and responsive disclosure geometry remain build-review refinements. No production Fish source/data/media/configuration change is authorized by this approval.


# FCC 48F — Fish Detail Page Component Audit — Checkpoint 154.4


**Status:** CHECKPOINT 154.4 USER-APPROVED / REFINEMENT ALLOWED / FISH-GUIDANCE ORDERING SEMANTICS APPROVED


Checkpoint 154.4 approves the **Rigs to Start With** supporting-information structure:


- retain it as an independent `▾ / ▴` ABOUT THIS FISH expander;
- render structured recommendation rows rather than chips;
- group recommendations as **Primary Choices** and **Alternatives**;
- within each group, use intentional unnumbered descending order for general-purpose beginner starting value for that Fish;
- do not expose numbers, scores, Best badges, or other explicit rank labels;
- show each recommendation's beginner-facing Rig/presentation name, canonical Fish-specific `reason`, and **View Rig →** navigation;
- preserve Direct-Tie relationships internally but display the actual presentation identity such as **Inline Spinner** rather than **Direct-Tie Lure Setup — Inline Spinner**;
- omit the expander when no ordinary `FISH_RIG_GUIDANCE` record exists;
- keep What Should I Throw contextual ranking, current conditions, availability/My Tackle, legality, and live Recommendation results outside this Fish Guide section.


The ordered presentation is stable curated Fish Guide Decision Knowledge, not contextual Recommendation ranking. Exact row clickability, shell, spacing, typography, separators, wrapping, and responsive layout remain build-review refinements. No production Fish guidance/data/source change is authorized by this approval.


# FCC 48F — Fish Detail Page Component Audit — Checkpoint 154.5


**Status:** CHECKPOINT 154.5 USER-APPROVED / REFINEMENT ALLOWED / CONTEXT-PRESERVING COMPARISON NAVIGATION APPROVED


Checkpoint 154.5 approves the Fish-detail **Compare Similar Fish →** supporting-navigation structure:


- keep Compare Similar Fish as direct navigation/workflow, not an expander;
- remove comparison thumbnails/tiles from normal Fish Detail;
- optionally show one compact secondary line listing approved related Fish names;
- keep the complete Compare row as one navigation target; related names are not nested links;
- one approved active partner opens the pair comparison directly;
- two or more approved active partners open a current-Fish-scoped chooser containing only valid relationships involving the current Fish;
- zero approved partners omits the row rather than displaying a no-comparison empty state;
- order scoped chooser choices neutrally and stably, preferably alphabetically by related common name, with no hidden ranking;
- preserve contextual Parent behavior through the exact originating path;
- keep the global Fish Guide Compare Similar Fish catalog as the complete-library workflow.


The pair relationship model itself remains unchanged and unordered/bidirectional. This checkpoint authorizes only derived navigation/presentation behavior. Exact chooser-card shell, imagery, spacing, and responsive geometry remain build-review refinements. No production Fish source/data/media/configuration change is authorized by this approval.


# FCC 48G — Fish Detail Page Component Audit — Checkpoint 154.6


**Status:** CHECKPOINT 154.6 USER-APPROVED / REFINEMENT ALLOWED / EXCEPTIONAL-SUPPORTING STATE GRAMMAR APPROVED


Checkpoint 154.6 approves the Fish-detail exceptional/supporting-state boundary:


- keep material **Safety & Handling** visibly available rather than hiding it solely behind disclosure;
- treat Safety independently from specialized-targeting guidance and do not promote the current implementation field into a universal Fish safety schema;
- rename the beginner-facing exceptional-targeting expander to **Fishing This Species**;
- show Fishing This Species only from explicitly authored specialized guidance; do not infer it merely because ordinary Rig guidance is absent;
- keep ordinary **Rigs to Start With** and exceptional **Fishing This Species** independently derived;
- explain the exceptional targeting boundary concisely in beginner language;
- replace raw **Try searching for...** query strings with a compact **Learn More** group;
- allow **Tackle & Equipment ↗** and **Methods & Techniques ↗** to launch preconstructed external research/search destinations while keeping provider/query construction an implementation detail;
- route **Fishing Regulations →** through FCC's existing Regulations experience when materially relevant;
- omit optional absent content rather than displaying generic no-data messages;
- treat missing required Fish production content as a validation/data defect, not a normal omission case.


Exact safety styling, expander geometry, Learn More row treatment, external provider/query mechanics, copy refinement, and responsive spacing remain build-review refinements. No production Fish source/data/media/configuration change is authorized by this checkpoint.


### Remaining Fish Guide audit sequence


After 154.6, three bounded audit blocks remain before the Fish Guide baseline audit is discussion-complete:


1. **154.7 — Fish Detail interaction + responsive finalization** — accessibility/disclosure state, keyboard/touch behavior, mobile/desktop composition, long-content behavior, and any remaining detail-page visual tests.
2. **155 — Compare Similar Fish workflow audit** — global comparison catalog, current-Fish-scoped chooser, pair-comparison page, navigation/context behavior, and responsive presentation.
3. **156 — Fish Guide baseline consolidation / implementation-scope lock** — reconcile approved Fish rules, enumerate bounded build-review tests and required production changes, identify which treatments are eligible for later Guide-family promotion, and close the Fish audit discussion before implementation/review.


# FCC 48G — Fish Detail Page Component Audit — Checkpoint 154.7


**Status:** CHECKPOINT 154.7 USER-APPROVED / REFINEMENT ALLOWED / FISH DETAIL DISCUSSION BASELINE CLOSED


Checkpoint 154.7 finalizes the Fish Detail interaction/responsive discussion baseline:


- use one compact **ABOUT THIS FISH** grouped disclosure shell rather than separate outer cards for the supporting rows;
- keep applicable disclosures independent and the complete row as one ≥48px target;
- require visible keyboard focus, programmatic expanded/collapsed state, panel association, Enter/Space activation, and collapsed content removed from keyboard interaction;
- allow trailing `▾ / ▴` disclosure-state cues without treating them as directional-navigation arrows;
- fresh Fish entry starts applicable supporting disclosures collapsed;
- Parent return from related internal destinations restores the originating Fish-detail scroll position and disclosure states;
- treat disclosure state as transient navigation/session context only; Home clears it and it is not User Knowledge/Preferences;
- contextual knowledge close returns focus to the originating trigger;
- keep mobile Fish Detail fundamentally one column with expanded content in normal document flow;
- preserve the same semantic order on desktop and retain prominent wide Fish media rather than automatically creating a side-by-side identity/media composition;
- keep long explanatory prose at a readable measure instead of blindly stretching to the full application canvas;
- keep the disclosure rows vertically stacked on desktop;
- retain one-versus-two-column **Habitat & Water internal groups at full desktop** as a bounded build-review comparison;
- allow Rig/Learn More rows to wrap intact; do not shrink typography merely to preserve one-line layouts;
- prohibit nested disclosure scroll regions, arbitrary content clipping, substantive ellipsis, and horizontal overflow;
- ensure sticky Parent/Home does not obscure restored/focused content;
- respect reduced-motion preferences;
- do not reopen already validated per-Fish primary-media framing absent an implementation defect.


No production Fish source/data/media/configuration change is authorized by this approval. Exact disclosure styling, prose max-width, Habitat internal desktop geometry, spacing, and animation remain implementation/build-review refinements.


**Fish Detail component audit is now discussion-complete through checkpoints 154.1–154.7.**


**Exact next checkpoint:** **FCC 48G — Checkpoint 155: Compare Similar Fish workflow audit.**


# FCC 48G — Compare Similar Fish Workflow Audit — Checkpoint 155.1


**Status:** CHECKPOINT 155.1 USER-APPROVED / REFINEMENT ALLOWED / GLOBAL CATALOG STRUCTURE APPROVED


Checkpoint 155.1 establishes the global **Compare Similar Fish** catalog structure while preserving the complete-library workflow approved under checkpoint 154.5:


- treat the catalog as a relationship-browse surface rather than normal Fish-result cards;
- render each active `FISH_IDENTIFICATION_RELATIONSHIPS` relationship exactly once as one whole-card comparison target;
- show both common names, useful identification imagery for both Fish, and a lightweight **Compare →** cue;
- omit scientific names, aliases, Family, summaries, pairwise distinction prose, and nested per-Fish controls from the catalog card;
- group comparisons by canonical Fish Guide category order and show only categories with active comparison relationships;
- use the approved current section sequence **Bass Comparisons, Catfish Comparisons, Crappie & Sunfish Comparisons, Trout Comparisons, Walleye & Sauger Comparisons, Gar Comparisons**;
- use stable Fish-centered ordering inside each category so related comparison pairs remain easy to scan without creating a hidden rank;
- rename the beginner-facing combined category label **Sunfish & Crappie** to **Crappie & Sunfish** while preserving stable ID `sunfish-crappie`; the production label change waits for the authorized implementation scope;
- do not add Search to the comparison catalog;
- use one column on mobile and no more than two columns on wider layouts; and
- retain exact pair-image dimensions/internal geometry as build-review refinements rather than carrying forward the historical 84 × 56 thumbnail size as a lock.


The canonical pair relationship model remains unordered/bidirectional and unchanged. This checkpoint changes only derived catalog organization/presentation. No production Fish source/data/media/configuration change is authorized by this approval.


**Exact next checkpoint after approval-gate closure:** **FCC 48G — Checkpoint 155.2: current-Fish-scoped comparison chooser.**


# FCC 48G — Compare Similar Fish Workflow Audit — Checkpoint 155.2


**Status:** CHECKPOINT 155.2 USER-APPROVED / REFINEMENT ALLOWED / CURRENT-FISH-SCOPED CHOOSER APPROVED


Checkpoint 155.2 establishes the current-Fish-scoped chooser used only when the originating Fish has two or more active comparison relationships:


- use a concise page identity such as **Compare [Current Fish]** with **Choose a similar fish to compare.** guidance;
- treat the heading as the default current-Fish anchor rather than repeating the current Fish inside every option card;
- allow a single compact current-Fish image near the heading only as a bounded implementation test if browser review shows the text anchor is insufficient;
- represent each valid related Fish once as one whole-card target containing its common name, useful identification image, and lightweight **Compare →** cue;
- keep `Compare →` as a visual affordance rather than a nested separately focusable control;
- omit category, scientific name, alias, Family, summary, repeated `vs [Current Fish]` copy, and pairwise distinction prose from chooser cards;
- order related Fish alphabetically by common name with no priority/rank/similarity semantics;
- use shared deterministic multi-accent peer-card treatment rather than assigning every option the reserved workflow accent;
- use one column on mobile and no more than two columns on wider layouts; and
- allow long names/actions to wrap naturally, moving the complete action cue to a new left-aligned line when needed.


Relationship-count behavior remains strict: zero partners omits the Fish-detail Compare row, one partner bypasses the chooser and opens the pair directly, and two or more partners open this chooser. Pairwise distinction content remains owned by the comparison destination. Exact image geometry, spacing, and optional compact current-Fish identity treatment remain build-review refinements.


No production Fish source/data/media/configuration change is authorized by this approval.


**Exact next checkpoint after approval-gate closure:** **FCC 48G — Checkpoint 155.3: pair-comparison page.**


# FCC 48G — Compare Similar Fish Workflow Audit — Checkpoint 155.3


**Status:** CHECKPOINT 155.3 USER-APPROVED / REFINEMENT ALLOWED / PAIR-COMPARISON RESPONSIVE STRUCTURE APPROVED


Checkpoint 155.3 approves the pair-comparison page as a focused field-identification surface rather than a duplicate Fish-detail page:


- hierarchy = **FIELD IDENTIFICATION → Fish A vs Fish B → concise guidance → comparison media → comparison facts/actions**;
- omit scientific names, category, Family, aliases, summaries, Habitat, Rig guidance, and unrelated Fish-detail metadata;
- use only the pairwise distinction statements owned by `FISH_IDENTIFICATION_RELATIONSHIPS`; do not manufacture trait-by-trait rows that are not explicitly encoded;
- keep one **View [Fish] →** action for each Fish;
- use one shared comparison composition rather than two independently accented peer cards; and
- do not encode the page through a fixed Fish-specific page/subpage color.


Responsive behavior uses two deliberate modes. **Two-column comparison mode** is used only while both identification images remain large enough to be diagnostically useful. Fish A stays left and Fish B right; each column contains Fish name, image, **Key Differences**, that Fish's distinctions, and **View [Fish] →**, producing a complete left-to-right visual and factual comparison. **Stacked comparison mode** is used when two columns would shrink the images too much: render **Fish A name + image**, then **Fish B name + image**, then place the full Key Differences content for both Fish below the second image. This keeps both identification images adjacent in the reading flow and minimizes scrolling between the images themselves.


The exact responsive transition is a build-review decision based on image usefulness/readability rather than an arbitrary generic breakpoint. Exact image dimensions, breakpoint, spacing, divider treatment, typography, and narrowest-width fallback remain refinements.


Relationship order remains unordered/bidirectional canonically. For derived presentation, Fish Detail/scoped-chooser origin places the originating Fish first/left; global-catalog origin preserves the catalog's deterministic displayed pair orientation. Parent navigation preserves the actual originating path/context.


No production Fish source/data/media/configuration change is authorized by this approval.


# FCC 48G — Compare Similar Fish Workflow Audit — Checkpoint 155.4


**Status:** CHECKPOINT 155.4 USER-APPROVED / REFINEMENT ALLOWED / PATH-PRESERVING COMPARISON NAVIGATION APPROVED


Checkpoint 155.4 closes the comparison-workflow navigation/context and interaction baseline:


- Parent follows the actual originating path instead of using one fixed parent for all comparison surfaces;
- global catalog → pair returns pair → global catalog → Fish Guide, restoring prior catalog scroll/focus context where practical;
- Fish Detail → direct pair returns pair → originating Fish Detail and restores Fish-detail scroll/disclosure state;
- Fish Detail → scoped chooser → pair unwinds pair → scoped chooser → originating Fish Detail without skipping the chooser;
- pair → **View [Fish] →** Fish Detail makes the pair the contextual parent of that Fish Detail, so Parent returns to the same pair while the pair retains its own earlier parent chain;
- direct/deep-entry pair without stored origin falls back to the global Compare Similar Fish catalog; directly opened Fish-scoped chooser falls back to its scoped Fish Detail;
- Home exits the comparison workflow and clears transient comparison-return context;
- pair-page Fish names/images/columns are not extra navigation targets; each **View [Fish] →** is the explicit independent Fish-detail action;
- catalog/chooser cards remain one whole-card control and **Compare →** remains a visual affordance rather than a nested focusable control;
- Parent restores prior scroll position and, where practical, focus to the originating control, with a sensible surviving heading/navigation target as fallback if the trigger no longer exists;
- use normal document/tab order with no special comparison-grid arrow-key model; and
- responsive reflow changes presentation only and must not alter Fish A/Fish B semantic order, navigation order, or focus order.


Comparison-return state is transient navigation/session context and is not persisted as User Knowledge or Preferences. Existing practical touch-target, focus-visible, reduced-motion, and contextual-return standards remain applicable.


No production Fish source/data/media/configuration change is authorized by this approval.


**Exact next checkpoint after approval-gate closure:** **FCC 48G — Checkpoint 156: Fish Guide baseline consolidation / implementation-scope lock.**


# FCC 48H — Fish Guide Baseline Consolidation — Checkpoint 156 Structural-Audit Addition


**Status:** CHECKPOINT 156 CLOSED / PASS / REFINEMENT ALLOWED / FISH IMPLEMENTATION + BROWSER REVIEW NEXT


Checkpoint 156 now includes a mandatory JavaScript/data structural audit before the Fish implementation-owner/scope lock. This is an audit/architecture requirement only and does not authorize production source changes by itself.


The Fish Guide sequence is:


1. **156.1 — baseline consolidation:** consolidate the already-approved Fish UX/content/interaction decisions and bounded build-review tests from checkpoints 152–155.4; this introduces no new production semantics.
2. **156.2 — Fish JavaScript/data structural audit:** audit Fish-owned data modules and the Fish-owned portions of shared implementation files for ownership, organization, boundaries, duplication, field/schema consistency, and maintainability.
3. **156.3 — implementation-owner/scope lock:** only after 156.2, lock the exact production files and targeted structural cleanup permitted for the Fish build.


For Fish, 156.2 must inspect at minimum `data/fish.js`, `data/fish-categories.js`, `data/fish-identification.js`, `data/fish-rig-guidance.js`, the Fish-owned portions of `script.js`, `view-renderer.js`, `search.js`, and any directly relevant shared helper discovered during the bounded audit.


Within shared implementation files, Fish-specific state, constants/configuration, selectors/helpers, routing/controller behavior, rendering behavior, Fish-specific search behavior, navigation/comparison state, and Fish-only event/setup logic must be housed inside a clearly marked Fish ownership boundary unless a valid shared/infrastructure reason requires placement elsewhere. Shared code must itself live inside a clearly marked shared/common boundary. Existing placement alone is not a valid exception.


Structural findings are classified as **COMPLIANT — leave alone**, **TARGETED CLEANUP during Fish build**, **STRUCTURAL CORRECTION required before/during implementation**, or **DEFERRED shared architecture issue**. The audit must improve the code being touched without expanding into an unrelated whole-site refactor.


## 156.2 — Fish JavaScript/Data Structural Audit — Approved Disposition


Checkpoint **156.2 is USER-APPROVED / refinement allowed**. The Fish canonical data ownership split and validator-enforced schemas remain intact; the audit found no reason to redesign the Fish, Fish identification relationship, or Fish-to-Rig guidance schemas merely for organization.


Approved targeted cleanup during the Fish implementation pass includes: explicit category/ownership sections in the Fish data modules; predictable Fish record organization; an explicit Fish-owned block inside the shared media registry; explicit shared/Fish/Knot search boundaries and corrected shared-file metadata in `search.js`; and clearly marked Guide/feature ownership boundaries in shared implementation files. Fish data that naturally follows categories should use the canonical Fish category sequence, with a predictable non-ranking maintenance order inside each category unless the data owner's semantics require a different authored order.


Approved structural corrections are required in `script.js` and `view-renderer.js`. Fish-specific state/configuration/helpers/controllers/rendering behavior must be consolidated into clearly marked Fish boundaries while genuinely shared routing, navigation, accessibility, and reusable infrastructure remains in clearly marked shared/common boundaries. Fish-only Habitat/reference helpers currently scattered among shared Condition/Technique/Rig helpers must be physically consolidated with Fish or its eventual canonical owner.


A dedicated Fish data owner is approved: **`data/fish-specialized-guidance.js`**. It will own the existing exceptional Fish-specific authored targeting/safety/research guidance for Longnose Gar, Spotted Gar, Paddlefish, and any future explicitly authored exceptional Fish guidance of the same type. `script.js` may consume this data but must not own the authored content. This does **not** create universal fields on `data/fish.js` and does **not** expand `data/fish-rig-guidance.js`, which remains the owner of ordinary Fish-to-Rig starting guidance.


The Fish Habitat-to-Condition bridge remains a **DEFERRED shared architecture issue** because permanent ownership belongs to the already-approved canonical Habitat migration. If the bridge still exists when Fish implementation begins, it must be isolated inside the Fish boundary and clearly treated as transitional compatibility logic rather than permanent renderer-owned knowledge.


`rigRecommendations[]` ordering remains intentional authored guidance order. Within the approved Primary/Alternative presentation groups it must not be alphabetized or converted into a numerical rank. Pair-comparison presentation order must be derived explicitly rather than inheriting incidental relationship-array order.


No broad split of `script.js` or `view-renderer.js` into new application modules is required by this checkpoint. A larger module refactor remains deferred unless cumulative Guide audits demonstrate a separate architectural need.


This same structural-audit requirement applies to later Guide-family audits; Fish is the first Guide to execute it.


No production source/data/media/configuration change is authorized by this approval.


**Exact next checkpoint:** **FCC 48H — Checkpoint 156.3: Fish implementation-owner/scope lock.** Preserve checkpoints 152–154.7, approved checkpoints 155.1–155.4, and the approved 156.2 structural dispositions above.


## 156.3 — Fish Implementation-Owner / Scope Lock — Approved Disposition


Checkpoint **156.3 is USER-APPROVED / CLOSED / PASS / refinement allowed**. The Fish Guide audit discussion is complete through checkpoints 152–156.3. Production implementation is authorized only within the bounded owner set and approved structural/UI changes below; this closeout itself makes no production source change.


The authorized Fish implementation package contains exactly **12 production owners**:


1. `data/fish-categories.js`
2. `data/fish.js`
3. `data/fish-identification.js`
4. `data/fish-rig-guidance.js`
5. `data/media.js` — Fish-owned block only
6. `data/fish-specialized-guidance.js` — new dedicated owner
7. `search.js`
8. `script.js`
9. `view-renderer.js`
10. `forest-journal.css`
11. `index.html`
12. `tools/validate_repository_integrity.js`


Approved data-owner work is bounded to the already-approved `Crappie & Sunfish` display-label correction with stable ID preserved; explicit Fish/category ownership organization; targeted intrinsic cleanup of cross-species wording in `identificationTraits[]` without changing approved facts; relationship/guidance organization without semantic expansion; a clearly bounded Fish media block without media/provenance replacement; and the new specialized-guidance owner.


`data/fish-specialized-guidance.js` owns explicitly authored exceptional Fish targeting/safety/research guidance for Longnose Gar, Spotted Gar, Paddlefish, and later Fish only when the same exceptional-guidance contract is deliberately authored. It supports **Fishing This Species**, material **Safety & Handling**, **Learn More**, and relevant Regulations routing/context. It does not create universal fields on `data/fish.js`, does not expand ordinary `data/fish-rig-guidance.js`, and does not authorize new biological, targeting, safety, or legal claims without separate content justification.


Approved shared implementation work includes: clear physical Guide/shared ownership boundaries; Fish state/constants/helpers/controllers consolidated into the Fish section; the current-Fish scoped comparison chooser; strict zero/one/two-plus comparison behavior; exact-origin comparison return chains; Fish Detail disclosure/scroll/focus restoration; direct-entry fallbacks; Home clearing transient comparison context; the approved landing/browse/result/detail/ABOUT THIS FISH/Rigs/Safety/Fishing This Species/Learn More/Compare catalog/chooser/pair presentation; and Fish-only renderer/reference helpers consolidated into their Fish boundary while genuinely shared infrastructure remains shared. Shared primitive changes are allowed only when backward-compatible by default for non-Fish consumers.


`search.js` is limited to explicit shared/Fish/Knot boundaries, stale shared-purpose metadata cleanup, and minimal integration required by the approved live Fish Search behavior. The existing Fish relevance algorithm is not reopened. `forest-journal.css` may implement the approved Fish presentation and bounded visual comparisons while preserving non-Fish behavior for shared primitives. `index.html` is authorized only for required load-order/integration changes, including loading the new specialized-guidance owner before its consumer. `tools/validate_repository_integrity.js` must add proportional validation for the new owner and preserve existing Fish/category/relationship/guidance validation.


The canonical Habitat migration is **OUT OF SCOPE**. If the transitional Fish Habitat-to-Condition bridge still exists during implementation, it may be isolated and clearly marked inside the Fish boundary, but permanent semantic ownership remains with the existing Habitat migration gate.


The following bounded implementation/browser-review decisions intentionally remain open and must be decided from the actual build rather than guessed: Compare landing card normal width vs row span; desktop Search full width vs approximately 720px max; desktop Fish results two vs three columns; exact standard/special accent assignments; pill vs lighter action treatment; disclosure styling/spacing/prose measure/transition treatment; Habitat & Water one vs two internal desktop columns; scoped chooser heading-only anchor vs one compact current-Fish image; and pair-comparison image geometry/transition point/dividers/spacing/typography/narrow fallback.


Explicitly outside this implementation package are the canonical Habitat migration; new Fish species/facts/relationships/Fish-to-Rig recommendations; media acquisition/replacement or broad reframing; other Guide redesigns; Regulations picker redesign; What Should I Throw/My Tackle changes; Dashboard/branding/Guide-decoration work; Theme/Light/Dark work; broad site-wide responsive cleanup; and broad `script.js`/`view-renderer.js` module splitting.


Any production file outside the 12-owner set is **READ/VERIFY ONLY** unless an implementation defect demonstrates a specific dependency and that dependency receives a separate disposition before editing.


Implementation acceptance requires proportional desktop/mobile/browser validation of Search states, 0/1/2+ comparison paths, Parent/Home return chains, disclosure/scroll/focus restoration, deep-entry fallbacks, both pair-comparison responsive modes, keyboard/focus/touch/reduced-motion behavior, long-content/wrapping/overflow behavior, and regression checks for any shared primitive touched, followed by repository-integrity validation and normal GitHub/CI verification.


**Checkpoint 156 is complete.**


**Exact next work unit:** **FCC 48I — Fish Guide — Baseline Implementation + Browser Validation.** Preserve all approved checkpoints 152–156.3, implement only the authorized package above, perform the bounded browser comparisons during the build, and do not promote Fish patterns to other Guides until the Fish implementation is validated.


## FCC 48I — Fish Landing + Browse/Search Browser Validation — R2 Approval


**Status:** R2 USER-APPROVED / PASS / REFINEMENT ALLOWED / 48I.3 LANDING + BROWSE/SEARCH BROWSER VALIDATION CLOSED


The cumulative R2 local-browser review approves the implemented Fish Landing/Search/Browse baseline and closes the remaining landing geometry comparison. **Compare Similar Fish remains at normal grid-position width** at intermediate/desktop layouts; the row-spanning candidate is rejected for this baseline.


The browser-approved Fish baseline also retains the R1 refinements already implemented in Drive Current: desktop Fish Search is constrained to approximately the width of two cards in the three-column Guide browse grid while mobile/intermediate Search uses available width; Fish browse/search results use a maximum of two columns on desktop; Common Name + `View Fish →` uses the deterministic desktop heading row; `Also called:` appears below the Fish image when present; and the lighter non-pill Browse/Compare/View Fish action treatment remains approved for the Fish baseline.


The application-wide card-surface refinement is also accepted through this review: accent-tinted bloom/gradient wash stays removed from card surfaces, while accent edges/borders/actions/labels/focus treatment and neutral elevation remain. Semantic warning/status surfaces and non-card detail sections remain outside that card-surface rule.


This R2 approval validates the reviewed Landing/Search/Browse implementation only. It does not pre-approve the still-unbuilt Fish Detail or Compare workflow build-review decisions owned by checkpoints 154–155.4.


**Exact next work unit:** **FCC 48I.4 — Fish Detail implementation + browser review.** Preserve the R2-approved Landing/Search/Browse baseline; do not reopen it absent a concrete regression or dependency.


## FCC 48I.4 — Fish Detail R3 Browser Review / Session Boundary


**Status:** R3 USER-APPROVED / PASS / REFINEMENT ALLOWED / 48I.4 FISH DETAIL BROWSER VALIDATION CLOSED / APPROVED UNCOMMITTED REFINEMENT DELTA PENDING LANDING


The cumulative R3 Fish Detail implementation is committed on GitHub `main` at `d243f452a65e969a617941d38a5e3e27a0e26222`. Repository Integrity and Pages both passed for that landed checkpoint. FCC 48J now carries a bounded uncommitted refinement delta in Drive Current while preserving the approved checkpoint-154 detail hierarchy.


**Habitat & Water:** the implemented full-desktop **two-column internal layout remains accepted** because it uses the available width effectively while keeping the existing stacked mobile treatment. The former one-versus-two-column desktop comparison is closed in favor of two columns at full desktop and stacked narrow/mobile presentation.


**Rigs to Start With:** when a Fish has **exactly one total Rig recommendation**, do not display `Primary Choices` or `Alternatives`; render the single recommendation directly. When multiple recommendations exist, retain Primary/Alternative grouping where those authored groups are applicable. This refinement is implemented in Drive Current.


**Compare Similar Fish row:** the R3 row title, related-Fish subtitle, spacing, structure, and whole-row navigation treatment remain unchanged. Only the **arrow** is refined: it uses normal row text color and a visually heavier/larger treatment. This refinement is implemented in Drive Current and does not authorize a broader row restyle.


**Expanded ABOUT THIS FISH panel spacing:** each expanded supporting-information panel receives modest top padding before its internal content. This applies consistently to Key Identification Traits, Habitat & Water, Rigs to Start With, and any other applicable Fish-detail supporting expander. It is a spacing refinement only; expander header height, interaction grammar, content structure, and responsive semantics remain unchanged.


**Fish identity-card vertical rhythm:** reduce excess vertical space in the upper identity stack. The largest reduction is between Common Name and Scientific Name; smaller reductions may tighten Scientific Name → Family and Family → primary image. Preserve the existing hierarchy, font roles, labels, card padding, media size/framing, and beginner-readable separation; the result should read tighter, not compressed. This refinement is implemented in Drive Current.


The revised review transport `FCC-48J-Fish-Guide-R3-Refinement-Review-R2.zip` is **USER-APPROVED / PASS** with SHA-256 `1dc1f9c5a929c2e2c150a630475bad087adefc511aaf3f122c1c38e6a9518f6c`. Browser review accepts the single-Rig heading suppression, Compare-arrow-only refinement, expanded-panel top padding, tighter Fish identity-card vertical rhythm, full-desktop two-column Habitat & Water layout with stacked mobile behavior, and regression preservation of the R2 Landing/Search/Browse baseline. The package is a targeted delta against the committed R3 state, not a rebuild from the former `c9189555651cb13f738f00cd6ad2e5799ad0b90c` baseline.


**Exact next work unit:** obtain explicit production commit/push authorization for the approved uncommitted R3 refinement delta, land the bounded source + documentation changes, then verify GitHub changed-file scope, Repository Integrity, and Pages. Do not begin FCC 48I.5 Compare workflow implementation until that landing/CI gate passes.


# Audit Method


Audit by **component type first, page/domain second**. Do not walk page by page making isolated cosmetic corrections without first determining whether the same component exists elsewhere.


## Guide JavaScript / Data Structural Audit — REQUIRED


Every Guide audit must include a source/data structural pass before its implementation-scope lock whenever the Guide has production JavaScript/data ownership.


For Guide-owned `data/*.js` modules, verify clear single responsibility, consistent required/optional fields and types, stable IDs/foreign-key relationships, intentional ordering semantics, active/inactive handling, appropriate canonical ownership, absence of duplicated facts, and separation of canonical data from derived/UI-only information.


For shared implementation files such as `script.js`, `view-renderer.js`, `search.js`, and directly relevant shared helpers:


- identify the Guide's physical ownership boundary and every Guide-specific item that belongs inside it;
- verify Guide-specific state, constants/configuration, selectors/helpers, routing/controllers, renderers, search behavior, and feature-specific setup are not scattered through unrelated sections;
- identify non-Guide/shared infrastructure incorrectly housed inside the Guide section;
- require clearly marked shared/common boundaries for genuinely cross-domain helpers;
- use the test **would this code still make sense if this Guide did not exist?** when deciding whether an exception outside the Guide boundary is valid; and
- distinguish implementation-only/transient configuration from canonical domain data that belongs in an appropriate `data/*.js` owner.


Classify each finding as **COMPLIANT — leave alone**, **TARGETED CLEANUP during the Guide build**, **STRUCTURAL CORRECTION required before/during implementation**, or **DEFERRED shared architecture issue**. A Guide audit may reorganize the code it is already authorized to touch, but it must not become an unrelated whole-application refactor.


The implementation-owner/scope lock occurs only after this structural audit is complete.


At minimum inventory these semantic component classes:


- ordinary information container,
- identity/description container,
- subsection/group heading,
- internal knowledge link,
- external link,
- neutral chip/context label,
- workflow/action card,
- Core/foundational designation,
- Safety/warning alert,
- readiness/status indicator,
- relationship list,
- contextual-information popover/modal/bottom sheet,
- empty/no-relationship state,
- instructional-media/Visual Guide container,
- navigation/Parent/Home controls,
- search/result presentation,
- selection/browse cards.


For each component class, identify all implementations across Fish, Rigs, Knots, Tackle, Reel Setup, Dashboard/landing pages, and any additional implemented Version 1 domains.


# Deferred Findings From Fish Wave 1 Mobile Review


The findings below are intentionally preserved for the final audit. Unless marked **APPROVED STANDARD**, they are audit requirements or trial directions rather than authorization to apply a site-wide change immediately.


## 1. Rig — What You Need


**Status:** AUDIT / TRIAL REQUIRED


- Place the contextual-information `ⓘ` immediately after the component name instead of aligning it at the far right of the row.
- Preferred reading order is equivalent to `Sliding Sinker ⓘ  Required`, not `Sliding Sinker ... ⓘ Required`.
- Keep repeated component descriptions out of ownership/readiness tiles when the contextual-information popover already owns that description.
- One-column mobile presentation is currently preferred after the cleanup.
- Trial **one Rig only** with a responsive two-items-per-row layout to determine on a real phone whether the density gain is worth the reduced width. Do not generalize two-column behavior before that comparison is reviewed.
- Preserve readiness semantics and practical touch targets.


## 2. Component Popover — Used In / Related Components


**Status:** AUDIT / VISUAL COMPARISON REQUIRED


- `Used In` must link to referenced canonical Rigs.
- Related-component navigation must allow movement inside the existing contextual-information flow and provide a Back path to the prior component; users should not have to close the popover to recover context.
- `Used In` and `Related Components` should have a shared, stronger subsection-heading treatment and a subtle divider that identifies the **group**.
- Individual linked items inside a group should not each receive their own divider.
- Compact text-link trial: left-align the destination label and place the internal-navigation icon immediately after the label; do not right-align the arrow at the far edge of the row.
- Pill/chip comparison: use one representative Rig/component popover to compare pill/chip relationship links against compact text links on an actual mobile device. The user prefers the visual appearance of pills but does not want their space cost assumed acceptable without the comparison.
- Slight popover typography/spacing reduction may be tested, but readability and touch interaction take precedence.
- Instructional copy for component help must point to the actual `ⓘ` control rather than telling the user to select the item name.


## 3. Link Language and Semantics


**Status:** ARROW GLYPH / WEIGHT STANDARD APPROVED / BROADER STANDARDIZATION REQUIRED


The application needs one recognizable cross-domain link grammar.


Wave 2 desktop/mobile review validates these directional-icon semantics:


- External destinations use `↗`.
- Internal directional navigation uses `→` when an arrow cue is appropriate.
- The icon stays immediately adjacent to the destination text rather than being detached at the far edge of the row.
- Directional arrows must have enough visual size/weight to remain legible beside bold destination text.
- Wave 3 review rejected the CSS-drawn internal arrow because its shaft/head construction did not sit naturally with the text. The user approved the restored native Unicode `→` treatment and made native glyphs the directional-arrow standard rather than CSS-drawn shaft/head icons.
- All navigation-arrow glyphs use a shared **font weight of 800** throughout the application. This includes back `←`, internal-forward `→`, external `↗`, and the existing compact-row chevron `›` where that row pattern is used. Glyph-specific size and spacing may vary only enough to preserve optical alignment; weight remains consistent.
- Wave 3 representative cross-app review approved that shared weight on back, internal, external, and compact-row navigation surfaces. Treat the glyph family and weight as an established standard in the final Version 1 audit rather than reopening it for redesign.
- Directional glyphs should be separately wrapped/styled so arrow weight can remain consistent without unnecessarily changing the destination-label typography.


The remaining audit work is to formalize the broader visual grammar:


- Internal knowledge/navigation links use one consistent internal color family/treatment.
- External links use a visually distinct external color/treatment.
- Link **semantics** must remain recognizable even when the space-appropriate visual shape differs.


The audit must deliberately decide where each of these shapes belongs:


- card — major destination/workflow,
- pill/chip — compact categorical/contextual item or deliberately chosen compact related-knowledge link,
- compact text link — dense related-content lists,
- ordinary inline link — prose/contextual navigation.


Do not use shape alone to distinguish internal vs external destinations.


## 4. Group/Subsection Heading Treatment


**Status:** STANDARDIZATION REQUIRED


The Knot **Best For** area currently demonstrates a cleaner hierarchy by visually differentiating subsection labels such as:


- Line Compatibility,
- Common Tasks,
- Rigs That Use This Knot.


Carry this concept into the audit. Reusable group headings such as `Used In`, `Related Components`, `Common Tasks`, and relationship groups should share a consistent hierarchy independent of the link treatment used inside them.


## 5. Knot Detail — Relationship-Link Consistency


**Status:** AUDIT REQUIRED


Current Knot detail mixes relationship-link patterns in the same information area: Line Compatibility/Common Tasks use pill-style linking while Rigs That Use This Knot uses another treatment.


The final audit must reconcile these based on semantic role and mobile density rather than preserving incidental implementation differences.


`Rigs That Use This Knot` should not repeat Rig descriptions already available inside Rig detail. Compact canonical Rig links are sufficient unless a specific page demonstrates a need for additional context.


## 6. Rig — Knots You'll Tie


**Status:** AUDIT REQUIRED


Current implementations are inconsistent:


- Basic Bottom Rig groups repeated applications under `Use these knots for:` using non-link chips such as `Main line to swivel`, `Leader to swivel`, and `Leader to hook`, then uses linking Knot chips.
- Other Rigs may present the connection/application labels as plain text while using the same linking Knot pills.


The audit must standardize this distinction:


- connection/application text is **context**, not navigation;
- Knot names are **destinations**.


Context labels and navigation targets should not become visually interchangeable.


**2026-08-29 carry-forward:** runtime review confirmed that attachment/application presentation inside **Knots You'll Tie** is inconsistent across Rig pages, not merely stylistically different. The final audit must inventory every implementation for both wording and structure, including grouped `Use these knots for:` context chips versus per-connection headings such as `Main line or leader to inline spinner`, plus any plain-label variants. Where the semantic role is equivalent, establish one shared attachment/application grammar and consistent context-label treatment. Preserve genuine physical connection differences rather than forcing different attachment points into identical copy.


## 7. Information-Section Border / Accent Grammar


**Status:** AUDIT REQUIRED


Fish now uses plain/basic borders for normal information sections, while many Rig and Knot sections still use left-side accent/bloom treatment, especially on Core records.


Do not globally strip or add accents before classifying why the treatment exists.


Audit and define semantic treatments for:


- ordinary information,
- workflow/action,
- Safety/warning,
- readiness/status,
- instructional media,
- Core/foundational designation.


Audit hypothesis: **Core** describes the importance of the knowledge record and may be better communicated through a badge/identity-level cue rather than causing every information section inside a Core record to receive bloom/accent emphasis. This is not yet an approved implementation standard.


## 8. Knot Opening-Description Consistency


**Status:** FULL KNOT AUDIT REQUIRED


At least these Knot pages were observed without the same opening description border/accent treatment seen elsewhere:


- Alberto Knot,
- Double Surgeon's Knot.


The user intentionally stopped manually searching for additional cases. Audit **all Knot detail pages** for the opening identity/description treatment and resolve unexplained inconsistencies systematically.


## 9. Knot Visual Guide Treatment


**Status:** AUDIT REQUIRED


The Knot Visual Guide container appears to carry a left-side bloom/accent that other sections do not consistently use.


Determine whether instructional media has a deliberate semantic reason for a distinct treatment. If not, normalize it with the selected instructional-information standard.


The Visual Guide belongs directly beneath **How to Tie It** in the instructional progression.


### 2026-09-15 — Local Knot Visual Instruction Carry-Forward — APPROVED


The Knot Guide remains **functionally complete / user-usable** with its existing written tying steps. Local visual tying instruction is a Version 1 **UX refinement/optimization item**, not a separate core-feature milestone and not an independent Recommendation/User Data dependency.


Historical `PARK-003` existed because prior attempts did not produce project-owned Knot diagrams/animations of acceptable instructional quality; the concept itself was not rejected. The pure Parking Lot disposition is superseded. During UX-009, the audit must deliberately re-evaluate local/offline visual tying instruction by:


- searching for accurate public-domain or otherwise rights-compatible instructional imagery that can be stored locally;
- retrying project-owned stepped illustrations/diagrams or controlled animation if acceptable assets can now be produced;
- using a one-Knot prototype when useful before committing to library-wide production;
- considering stepped visual states with optional controlled playback/animation, while locking no specific media technology in advance;
- preserving local/offline usability as the primary instructional path; external tutorial links may remain supplemental but must not be required to understand the Knot;
- validating accuracy, provenance/licensing, mobile density, accessibility/reduced-motion behavior where applicable, and actual instructional usefulness before expanding the treatment across the Knot library.


Implementation is **conditional on the quality gate**. If acceptable local instructional assets still cannot be sourced or produced, UX-009 must document that outcome and retain the functional written Knot Guide rather than ship misleading, low-quality, or rights-uncertain media merely to satisfy a checklist item.


## 10. Knot Empty Relationship Copy


**Status:** AUDIT / COPY CLEANUP


Example observed on Double Surgeon's Knot:


`No Rig in the guide currently references this Knot`


This line appears unnecessary when absence of a Rig relationship is not itself useful knowledge. Prefer omitting an empty relationship group/message unless the absence materially helps the user understand or complete a task.


## 11. Knot Detail Density and Progression


**Status:** AUDIT REQUIRED


- Knot metadata/reference tiles still use substantial vertical space on mobile.
- Continue evaluating compact presentation for metadata/relationships before shrinking primary instructional text.
- Preserve the approved instructional progression in which written tying steps and Visual Guide stay together, followed by verification/troubleshooting content.
- `Sources & References` should remain supporting provenance rather than interrupting the primary task; collapsed bottom-of-page presentation is the current accepted direction.


## 12. Workflow / Action Cards


**Status:** APPROVED STANDARD + SITE-WIDE CLASSIFICATION AUDIT REQUIRED


The user approved the differentiated **Compare Similar Fish** workflow treatment and the general rule that cards launching a workflow/tool may receive standardized workflow emphasis distinct from ordinary browse/reference cards.


The final audit must:


- identify every card that genuinely launches a workflow/action,
- identify cards that are ordinary browse/reference destinations and must not receive the workflow treatment,
- preserve one standardized workflow color/token and hierarchy,
- avoid using workflow emphasis merely as decoration.


## 13. Rig `useCases[]` Semantic Ownership / Fish-Specific Leakage


**Status:** AUDIT REQUIRED / ARCHITECTURE CONSISTENCY DEFECT


Fish applicability is owned by `FISH_RIG_GUIDANCE` Decision Knowledge, not by canonical Rig records. The current Rig model intentionally does not define `targetFishIds[]`, and any future Rig-to-Fish presentation must derive from `FISH_RIG_GUIDANCE` rather than duplicating the relationship on Rig.


Several existing Rig `useCases[]` strings nevertheless name target Fish directly (for example, Jighead + Soft Plastic, Inline Spinner Setup, Live-Bait Slip-Sinker Rig, Ned Rig, and other bass-oriented Rig records). This creates semantic leakage: a user can follow a Fish-to-Rig recommendation into a Rig whose descriptive `useCases[]` wording appears to privilege a different species even though that wording is not the canonical Fish-applicability relationship.


The Version 1 UX Design Audit must:


- inventory every Rig `useCases[]` entry that names a Fish or Fish group,
- determine whether each phrase is intrinsic Rig-use context or duplicated Fish-applicability guidance,
- rewrite duplicated Fish-specific applicability as species-neutral presentation/condition/use-context language where practical,
- keep canonical Fish-to-Rig suitability, ranking, and rationale exclusively in `FISH_RIG_GUIDANCE`,
- derive any Rig-detail “Fish this Rig is useful for” presentation from `FISH_RIG_GUIDANCE` if such reverse presentation is retained or added,
- do not add `targetFishIds[]`, `fishIds[]`, or another inverse Fish mapping to Rig merely to support UX, search, or navigation,
- validate that revised Rig copy still explains the Rig clearly without misleading users about its broader applicability.


This defect is intentionally parked for the site-wide UX Design Audit unless it blocks an active Fish-production review. It must not be solved by adding more species-specific duplication to Rig data.


## 14. Knowledge Card Element Standardization


**Status:** AUDIT REQUIRED / SITE-WIDE COMPONENT CONSISTENCY


The Subphase B Conditions/Lure-Bait review exposed a broader cross-domain issue: equivalent information and interaction elements inside Reference Knowledge / knowledge-detail cards are not always presented consistently across card types. The final Version 1 UX Design Audit must therefore review **every element used on knowledge cards**, not only whole-card shells.


The audit must inventory and compare, across Fish, Rigs, Knots, Tackle, Regulations, Lure/Bait, Conditions, Techniques, and any other implemented knowledge-card surfaces:


- section headings and subsection hierarchy;
- static label/chip treatments versus clickable knowledge/reference chips;
- padding, min-height, border radius, borders, background/accent treatment, and spacing;
- internal-navigation links, external-reference links, relationship links, and contextual popover triggers;
- metadata badges, category/difficulty/status labels, and other compact facts;
- component/readiness controls, checkboxes, info controls, and their alignment;
- instructional/action links and workflow-launching controls;
- media containers, captions, source/provenance treatments, and media-to-text spacing;
- empty-state/absence messaging;
- list/group layout, wrapping behavior, and mobile density;
- hover, focus, active, disabled, and selected states;
- typography, iconography, arrow/cue usage, and internal-vs-external interaction signals.


For each recurring element, determine whether the occurrences are semantically equivalent. Equivalent elements should converge on one shared visual/interaction grammar. Intentional differences must have a documented semantic reason rather than being historical styling drift.


The audit must specifically preserve the newly established distinction that **clickable user-knowledge/reference chips look interactive**, while passive labels such as **Best For** remain visually neutral. Compact contextual-chip density should be standardized where appropriate rather than allowing each domain to invent its own padding.


The output of this audit should be a reusable component rule set in the proper governing UI documentation, followed by implementation normalization and actual-device validation. Do not normalize elements merely because they look similar if they serve materially different tasks.


**2026-08-30 Technique-chip carry-forward:** Subphase C runtime review accepted the Technique knowledge-reference chips as functionally correct, including configuration-aware Technique subsets on Direct-Tie Lure Setup, but the current chip layout/formatting is not considered visually final. During the Version 1 UX Design Audit, specifically review Technique-chip wrapping, spacing, alignment, density, grouping, label fit, and responsive behavior within Rig Detail At-a-Glance. Compare the Technique treatment with other clickable knowledge/reference chips and nearby passive labels so the result follows the shared semantic component grammar without making navigation targets and non-interactive context look interchangeable. Preserve the approved Technique interactions, popover behavior, and Compatibility semantics; this is a presentation-refinement item, not authorization to reopen Technique content or relationship data.


## 15. Hook / Weight Style Visual Recognition


**Status:** DEFERRED UX REQUIREMENT / AUDIT REQUIRED


GATE-007 expanded the bounded Version 1 Hook Style and Weight Style vocabularies beyond the small subset that users can currently see illustrated through Rig content. The existing Rig imagery is not sufficient as the only recognition aid for users who may not know the names or physical differences among those styles.


The Version 1 UX Design Audit must address a user-facing way to see representative visual examples of the approved standard Hook and Weight styles so an angler can identify what they own and understand Recommendation/My Tackle terminology. This is a visual-recognition requirement, not authorization to build a commercial tackle catalog.


Carry-forward constraints:


- cover the FCC standard Hook and Weight style vocabularies at minimum;
- after the Lure/Bait and remaining applicable My Tackle/Recommendation contracts are settled, explicitly evaluate whether the same visual-recognition pattern should extend to Lure/Bait or other My Tackle families; this is a required scope review, not a pre-approval to create imagery for every family;
- favor representative, identification-safe examples rather than manufacturer-specific catalog completeness;
- preserve the distinction between canonical Tackle identity and finer My Tackle Style;
- determine the best presentation only after My Tackle and What Should I Throw / Recommendation UX are sufficiently settled, so the same visual system can support authoring, recognition, and recommendation interpretation without duplicate owners;
- evaluate whether examples belong inline in selectors, in contextual help, in a reusable Tackle reference/gallery surface, or through another shared pattern; **no presentation mechanism is locked by this carry-forward**;
- apply existing media accuracy, provenance/licensing, mobile-density, and field-guide visual standards to any implemented examples.


This item must receive an explicit disposition before the Version 1 design audit closes.


### 2026-09-16 - Variant Recognition Gallery Candidate - APPROVED FOR UX EVALUATION


FCC 37 approved a more concrete candidate within UX-010: applicable Tackle and Lure/Bait concepts may expose multiple recognized variants through a shared **Variant Recognition Gallery** pattern. Candidate surfaces include **Rig -> What You Need**, **Tackle/Lure Index**, and Tackle/Lure-Bait detail/reference presentation.


This is an approved UX evaluation requirement, not an implementation lock. Swipe, click, arrow, thumbnail, or other gallery mechanics remain undecided. Exact data ownership, Media roles/order, interaction behavior, accessibility, narrow-screen/mobile behavior, and loading/density treatment must be resolved under UX-010 and the applicable Media/UI standards.


Variant imagery must not force creation of separate canonical Tackle or Lure/Bait records merely to support media. The canonical identity remains the reusable concept; the gallery exists only to improve recognition of legitimate variants when multiple representative images add instructional value.


## 16. Repository Documentation + JavaScript Source Organization


**Status:** REQUIRED / FULL REPOSITORY QUALITY AUDIT


The Version 1 completion audit must include a deliberate review of the **entire tracked repository**, not only user-facing runtime surfaces. The purpose is to ensure that the repository can be understood, maintained, reconstructed, and safely extended without relying on chat history or on a maintainer reverse-engineering where code and documentation belong.


This is a repository-quality and maintainability requirement that complements the visual/interaction audit. It is not authorization for broad cosmetic source churn before findings are reviewed and approved.


### Repository-wide documentation completeness


Inventory every tracked path and determine its current role. Active source, active documentation, tools, workflows, configuration, data, and operational files receive a current-state review. Archived material must be checked for correct archival classification and for misleading active references, but historical files do not need to be rewritten to current style unless they are deliberately reactivated.


For active documentation, verify that the project has enough authoritative material to understand and safely operate at least:


- repository purpose, structure, and startup/resume procedure;
- architecture and ownership boundaries;
- active feature/domain contracts and data models;
- Reference Knowledge, Decision Knowledge, User Knowledge, and relationship ownership;
- implementation/development workflow and change-placement rules;
- validation, testing, CI, and release expectations;
- media/evidence/provenance requirements;
- external-reference and Regulations maintenance operations;
- User Data, export/backup/restore, and disaster-recovery/reconstruction requirements;
- active-versus-archived workstream ownership and exact authoritative sources.


The review must identify and disposition:


- missing documentation required to understand, build, validate, operate, or recover the project;
- stale or contradictory documentation;
- duplicate semantic owners that should be reconciled;
- obsolete active references to archived/retired material;
- active documents whose purpose, authority, status, or relationship to other owners is unclear;
- important behavior or maintenance knowledge that exists only in source comments, chat history, or Live Working State and needs a durable owner.


Do not create documentation merely to increase file count. A new document is justified only when an important durable concern lacks a clear existing owner or when combining it with an existing owner would materially reduce clarity.


### JavaScript readability + structural organization


Every active `.js` file — including runtime, renderer/controller, Reference Knowledge/data, Decision Knowledge, validation, and tooling JavaScript — must be reviewed as a complete file. A maintainer with ordinary JavaScript familiarity should be able to open the file and determine:


1. what the file owns;
2. the major sections/responsibilities inside it;
3. the intended execution or data flow where applicable;
4. where a future change of a given type belongs; and
5. which other module/domain owns behavior that is deliberately outside the file.


The audit must evaluate and, where approved, normalize these practices:


- a clear file-level purpose/ownership header where the purpose is not already self-evident;
- major semantic sections labeled with concise comments/headings;
- related constants, schemas/data, helpers, rendering/behavior functions, validation, exports, and initialization grouped deliberately rather than scattered by edit chronology;
- dependencies and execution flow arranged in a predictable order;
- functions, variables, records, and exported interfaces named clearly enough that comments do not have to compensate for opaque naming;
- comments that explain **intent, ownership, constraints, or non-obvious flow**, not line-by-line restatements of JavaScript syntax;
- large files assessed for whether semantic splitting would improve maintainability, without fragmenting files solely to make them smaller;
- shared behavior centralized when duplication would create multiple semantic owners;
- stale comments, package-era replacement markers, dead blocks, obsolete fallbacks, and misleading notes identified for disposition;
- data-oriented `.js` files organized by a documented domain/order rule so new records are inserted predictably rather than appended wherever convenient.


### Change-placement discipline


The audit must specifically detect **chronological patch accumulation**: code added at the end of a file or in an unrelated block simply because that location was convenient during an edit.


Approved source organization must establish this rule for future production work:


> **New code is inserted into the semantic section that owns it. End-of-file append is appropriate only when the file's defined structure says that concern belongs there.**


For substantive changes, the implementation/review process should be able to identify the intended owning section before writing. If a feature has no sensible owner in the existing structure, that is an architecture/organization finding to resolve rather than permission to place code arbitrarily.


Refactoring performed solely to improve organization must preserve behavior and pass the applicable regression/structural validation before closeout.


### Repository-quality audit output


The audit must produce a disposition for every active documentation/source area and every active JavaScript file. Findings may be classified as:


- **PASS — clear/current/appropriately owned**;
- **DOCUMENTATION GAP**;
- **STALE / CONTRADICTORY DOCUMENTATION**;
- **SOURCE ORGANIZATION CLEANUP**;
- **SEMANTIC OWNER / MODULE BOUNDARY ISSUE**;
- **FILE SPLIT / CONSOLIDATION CANDIDATE**;
- **DEAD / OBSOLETE SOURCE CANDIDATE**;
- **ARCHIVE / RETIREMENT CANDIDATE**; or
- **INTENTIONALLY DIFFERENT — documented reason**.


The repository-quality portion of the Version 1 audit may close only when all material findings have an explicit disposition and no known required project knowledge or active source ownership remains dependent on accidental file placement or undocumented chat context.


## 17. Reference Knowledge Visual Identity + Brand Flair


**Status:** APPROVED UX-AUDIT REQUIREMENT / PRESENTATION DIRECTION


FCC 47 establishes a Reference Knowledge Guide family consisting of **Fish Guide, Knots Guide, Tackle Guide, Technique Guide, and Rig Guide**. These Guides should feel like related parts of one application without forcing unlike domain information into a single universal card template.


Approved visual rule:


> **Equivalent elements across Guides should match in appearance and behavior. Domain-specific information may use intentionally different presentation where its semantics require it.**


Fish Guide is the starting baseline. As each later Guide is reviewed, carry forward shared rules for equivalent elements such as headings, browse/search controls, internal/external links, contextual-information controls, relationship headings, clickable knowledge chips, passive context labels, warning/safety states, Back/Parent/Home navigation, empty states, focus/hover/touch states, and comparable media framing. Do not normalize unlike content merely because both items happen to appear inside cards.


### FCC 48 Gate 151 — Fish element-level baseline method


Gate 151 is **APPROVED / refinement allowed**. Fish Guide must not be treated as a finished universal visual template merely because its semantic/content milestone is closed. Before later Guides inherit Fish presentation, the Fish Guide will be audited and, where approved, refined one bounded surface at a time.


The review method is:


1. inventory every recurring card/component element on the active Fish surface;
2. review each element separately for hierarchy, semantics, spacing, typography, media, navigation/action treatment, interaction states, and responsive behavior;
3. distinguish shared/equivalent elements from Fish-specific structures;
4. approve the section before production changes are treated as baseline;
5. implement only the approved scope;
6. validate the implemented section at applicable desktop and mobile breakpoints, including actual-device review when required; and
7. promote only the validated equivalent-element rules into the shared Guide-family baseline.


The audit is intentionally split across bounded chats under the FCC 48 parent workstream so a deep review does not become dependent on one oversized conversation. The approved naming pattern is **FCC 48**, then **FCC 48B, FCC 48C, FCC 48D, ...**, with each lettered chat owning one constrained Fish surface or closely related component group and ending with an exact resume point. Completed sections are not reopened unless a real defect or later cross-Guide conflict is identified.


The first bounded section is **FCC 48B — Fish Guide — Landing Page Component Audit**. Its scope is limited to Guide identity/introduction, Search controls, Compare/workflow entry, Browse heading, collection cards and their internals, interaction states, and responsive desktop/mobile behavior. Browse/search-result/detail surfaces wait for later lettered sections.


The current accent system is generally liked but the site needs additional restrained visual character. The final audit must therefore evaluate a **light graphic / illustrative layer** that remains subordinate to content.


Required evaluation:


- **Guide-specific lightweight motifs** for Fish, Knots, Tackle, Technique, and Rig, using one coherent illustration style while allowing subject-specific imagery.
- Prefer small line-art, silhouette, watermark, or restrained decorative SVG treatments over photo-heavy or graphic-heavy layouts.
- Apply decorative treatment most strongly to Dashboard Guide cards and Guide landing/browse identity areas; use it sparingly inside dense detail/instruction cards.
- Preserve the existing semantic accent/border hierarchy unless a reviewed alternative is demonstrably better.
- Decorative graphics must not reduce legibility, touch-target clarity, contrast, or content density.
- Validate every decorative treatment in each supported Appearance variant; Forest Journal's dark-oriented presentation must not lose readability through low-contrast or excessively dark decorative layers.


### FCC brand mark / favicon


The audit must produce a clear, recognizable **favicon / compact FCC brand mark** that remains legible at browser-icon sizes. Favor simple fishing/freshwater forms that survive 16–32 px rendering; avoid detailed scenes, full rods, multi-object tackle compositions, or text-heavy marks that collapse at small size.


The chosen mark should be reusable as the compact application identity where appropriate.


### Heading graphic / wordmark


Replace the final plain-text-only **Freshwater Fishing Companion** header treatment with a restrained heading graphic / wordmark system that can reuse the compact brand mark. The current heading text size/height must also be reviewed.


Requirements:


- a proportionate desktop wordmark/header treatment;
- a smaller persistent Guide/header treatment where appropriate;
- reduced mobile header height and responsive typography;
- no oversized brand treatment that competes with page content;
- graphic/wordmark behavior that remains crisp at normal browser zoom and common device pixel densities.


### Dashboard card visual appeal


Dashboard cards were originally intended to carry modest visual character. The audit must prototype restrained treatments such as:


- a low-contrast domain line-art motif or watermark;
- a small domain badge/icon near the heading;
- or a combined treatment using the existing accent plus a small badge and subtle opposite-corner motif.


The goal is **visual flair, not a graphic-heavy interface**. Card decoration must not become a separate information layer, inflate card height unnecessarily, or reduce scannability.


## 18. Full Desktop + Mobile Responsive Validation


**Status:** REQUIRED / FINAL UX-AUDIT ACCEPTANCE CONDITION


The final audit must explicitly validate both ends of the responsive range.


### Full-size desktop browser


Use a normal full-size desktop browser window, not only narrow responsive emulation. Review at representative wide/standard desktop viewport sizes and verify:


- Dashboard and Guide card grids distribute correctly without awkward excess whitespace, oversized cards, stretched text measures, or broken alignment;
- multi-column layouts use available width intentionally rather than merely expanding mobile cards;
- headings/wordmarks, media, card accents, and decorative graphics remain proportionate;
- long detail pages preserve readable line length and clear hierarchy;
- contextual popovers/modals and related-content groups size and position correctly;
- no clipped content, overlap, stray horizontal scroll, inconsistent card heights, or large empty visual holes;
- desktop-specific fixes do not introduce CSS/structure that regresses mobile layouts.


### Mobile preservation


Every desktop correction must be rechecked on the applicable narrow/normal mobile layouts. Mobile-specific corrections likewise require a desktop regression check when they touch shared components, layout primitives, typography, imagery, or card geometry.


Responsive success means the same semantic component can adapt intentionally across viewport sizes without forcing identical geometry where a different arrangement is more usable.


# Desktop + Mobile Validation Matrix


The final audit must include full-size desktop-browser checks and actual-device mobile checks for at least:


- full-size desktop Dashboard and Guide landing pages,
- desktop multi-column card layouts,
- desktop long-form detail pages and wide media/relationship sections,
- narrow portrait phone width,
- normal portrait phone width,
- longer scrolling detail pages,
- contextual popovers/bottom sheets,
- relationship lists with multiple links,
- pages containing long names/labels,
- selection cards with media,
- sticky/floating navigation,
- interactive state changes such as readiness, expansion/collapse, and Parent return.


Check:


- no horizontal overflow,
- no clipped labels/icons,
- no accidental tiny typography,
- practical touch targets,
- clear internal vs external navigation cues,
- consistent group headings,
- appropriate whitespace without excessive scrolling,
- no duplicated information that can be removed safely,
- no unexplained accent/bloom differences,
- correct focus/return behavior for nested navigation and contextual information.


# Acceptance Criteria


The Version 1 design audit may close only when:


1. Every implemented Version 1 domain has been included in the component inventory.
2. Every identified inconsistency has a documented disposition: fixed, intentionally different with reason, deferred to a named future gate, or rejected.
3. Shared component/link/container rules are reconciled into the appropriate governing documentation after validation.
4. The final implementation passes full-size desktop-browser review and actual mobile-device review, with no material responsive regression between them.
5. No known mobile design issue remains only in chat history or Live Working State.
6. Fish semantic/content approval remains intact unless a separate evidence/content defect is discovered.
7. The full tracked repository has been inventoried for documentation/source ownership, with archived material correctly distinguished from active authority.
8. Every active JavaScript file has an explicit audit disposition for readability, semantic organization, change-placement discipline, and maintainability.
9. No known material documentation gap, contradictory active owner, orphan source block, or arbitrary append-only code placement remains without an explicit approved disposition.


# Relationship to Active Development


This audit is a required Version 1 design-completion gate. Fish production is closed; during subsequent product milestones:


- fix domain-specific defects that block the active work,
- progressively apply approved shared UX rules during the FCC 47 Reference Knowledge Guide passes while preserving Guide-specific presentation where semantics differ,
- record newly discovered cross-domain design inconsistencies here,
- avoid unrelated broad site-wide styling churn until the audit gate opens,
- continue using Live Working State for high-frequency observations, then reconcile durable audit findings into this document at logical checkpoints.


# Related Documents


- `STYLE_GUIDE.md`
- `UI_STANDARD.md`
- `PROJECT-RULES.md`
- `ACTIVE-CHANGE-LEDGER.md`
