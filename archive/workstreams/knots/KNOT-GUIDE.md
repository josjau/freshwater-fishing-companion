# Freshwater Fishing Companion — Knot Guide


**Document:** KNOT-GUIDE.md  
**Document Revision:** 0.3.34
**Document Status:** Approved Planning / In Progress  
**Milestone:** Knots  
**Last Updated:** 2026-09-27


# Purpose


This workstream records the approved planning direction, implementation scope, and validation expectations for the Version 1 Knot Guide milestone.


GitHub `main` remains authoritative for all existing project files. Production source, data, image, configuration, CSS, HTML, JavaScript, and other non-Markdown implementation files are not written directly to GitHub by the assistant; production changes will be delivered through the approved user-reviewable package workflow.


# Product Goal


The Knot Guide must help a first-time or new freshwater angler solve practical connection and reel-readiness problems without requiring prior knowledge of knot names or fishing terminology.


The milestone should get the user from questions such as:


- How do I put line on this reel?
- What line should I start with for the fish I want to catch?
- How do I read the line-capacity numbers on my reel?
- How do I tie on a hook, swivel, or lure?
- How do I connect backing, main line, or leader?
- Which knot should I learn first?


into a clear, technically correct, beginner-oriented workflow.


# Approved Design-Flexibility Rule


The approved information architecture and interaction flow establish the Version 1 design direction, but they are not intended to force a poor user experience during implementation.


During build and runtime validation, layout, ordering, labels, card treatment, and navigation mechanics may be refined when the actual interface demonstrates that the approved concept does not flow naturally.


Such refinements may be made without reopening the entire Knot milestone when they preserve the approved functional intent, beginner-first behavior, data ownership, and feature scope.


Any proposed change that alters architecture, canonical data ownership, Version 1 scope, or the meaning of an approved workflow still requires explicit approval before implementation.


# KG Audit — CP1.1 — Guide Identity / Header


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-21


The user-facing feature name and landing-page heading are **Knots Guide**.


Fish Guide remains the structural/interaction baseline for the Guide family where semantics match. The Knots Guide identity area therefore uses a compact Guide-identity treatment rather than a large hero, does not receive a fixed Guide-specific color, does not add an unnecessary generic CTA above Search, and places Guide Search immediately after the identity area.


Approved beginner-facing description:


> Learn the essential fishing knots for attaching line to your reel, tying on hooks and lures, connecting lines, and making loop connections.


Decorative Knots Guide identity art is deferred to the final Version 1 UX Audit. The current Knots build keeps the compact text identity without a decorative motif; future visual-flair exploration starts with Dashboard Guide-card imagery rather than adding decoration to Reference Knowledge surfaces by default.


# Approved Version 1 Knot Library


Version 1 contains **10 canonical Knots**.


## Core Knots — Learn These First


The Core set is intentionally small. Core means a first-time angler should learn these broadly useful connections before being asked to choose among many alternatives.


1. **Arbor Knot** — primary reel-spool attachment knot; required by Reel & Line Setup.
2. **Improved Clinch Knot** — primary simple general-purpose terminal connection for hooks, swivels, and many lures.
3. **Palomar Knot** — simple strong terminal alternative, especially useful across common freshwater applications and braid-capable setups.
4. **Double Uni Knot** — primary beginner line-to-line connection for backing/main-line and leader applications.


## Additional Beginner / General Knots


5. **Uni Knot** — versatile terminal knot with additional legitimate uses, including some spool-attachment applications.
6. **Double Surgeon’s Knot** — simple line-to-line / leader connection option.
7. **Non-Slip Loop Knot** — terminal loop connection for applications where lure or bait movement benefits from a free loop.
8. **Dropper Loop Knot** — branch/dropper connection for multi-hook or multi-jig arrangements; directly relevant to the canonical Double-Jig Crappie Rig.


## Specialized / Intermediate Knots


9. **Snell Knot** — specialized hook connection for applications where a snelled hook is appropriate.
10. **Alberto Knot** — more specialized braid-to-mono/fluorocarbon connection, especially where line materials or diameters differ substantially.


# Canonical Knot-Library Rule


Minor variations do not automatically become separate canonical Knot records.


A new canonical Knot should require either:


- a meaningfully different tying process, or
- a distinct practical fishing job not adequately covered by the existing library.


Named variations may be documented within the parent Knot when that is clearer for a beginner and does not create a second source of truth.


# Deferred / Parking Lot Knots


Version 1 deliberately does not expand into a knot encyclopedia.


Deferred examples include:


- FG Knot,
- Blood Knot,
- Albright Knot,
- Nail Knot,
- Trilene Knot,
- Perfection Loop,
- Bimini Twist,
- Double Palomar as a separate canonical entity,
- fly-fishing and fly-line-specific knot systems.


These may be reconsidered later when a demonstrated feature, Rig, Technique, or fishing method requires them.


# Approved Knot Guide Navigation


The Knot Guide uses **task-first discovery** rather than requiring a beginner to understand knot taxonomy before finding the correct connection.


The approved landing-page hierarchy is:


1. compact **Knots Guide** identity + approved beginner description
2. **Search Knots**
3. prominent **Get Your Reel Ready** special beginner workflow
4. **What Are You Trying to Do?** task/learning discovery
5. **All Knots** collection/library framing


A standalone **Core Knots — Learn These First** major section is not retained. Core is surfaced through **Learn Core Knots** in the task section and **Core Knots — Browse →** in the All Knots collection section.


Technical classifications such as terminal, line-to-line, loop, reel-spool, or specialized connection remain useful metadata and filtering concepts, but they are not the primary entry point for a first-time angler.


## Task-First Discovery Order


The approved **What Are You Trying to Do?** landing section uses four peer task/learning entries:


1. **Learn Core Knots**
   - opens the approved Core Knot starter collection,
   - does not create a fixed mandatory course sequence.


2. **Tie On a Hook, Swivel, or Lure**
   - Improved Clinch Knot,
   - Palomar Knot,
   - Uni Knot,
   - Snell Knot when the application specifically calls for a snelled hook connection.


3. **Connect Two Lines / Add a Leader**
   - Double Uni Knot,
   - Double Surgeon’s Knot,
   - Alberto Knot.


4. **Make a Loop Connection**
   - Non-Slip Loop Knot for a free-moving terminal loop,
   - Dropper Loop Knot for a branch/dropper connection in the line.


**Attach Line to a Reel** is not retained as a duplicate peer landing task because the dedicated **Get Your Reel Ready** workflow immediately above the task section owns the complete reel-setup path. Arbor Knot and appropriate spool-attachment alternatives remain searchable/browsable canonical Knot content.


The UI should explain the practical difference between candidate knots instead of presenting several names without context.


## KG Audit — CP1.2 — Search


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-22


Search remains immediately after the Guide identity area as the first functional Knots landing-page element and covers all active canonical Knots.


Preserve the existing deterministic relevance-first Knot Search model. Valid signals remain canonical Knot name, verified aliases, Guide-owned search intent/vocabulary, compatible line type, and difficulty. Search-only task/intent vocabulary is owned by `data/knot-guidance.js` rather than copied into canonical Knot records; `search.js` continues to own normalization, matching, scoring, and deterministic relevance ordering.


Approved landing Search presentation/interaction:


- label: **Search Knots**;
- helper: **Search by Knot name, task, line type, or difficulty.**;
- short maintained placeholder examples may include **Palomar**, **tie hook**, **braid**, and **beginner**, provided examples remain valid for the active scope;
- typing updates results live; no visible Search submit button is shown by default; Enter/mobile Search submission may continue to trigger the same behavior internally;
- a one-click clear control appears when text is present, clears the full query, restores the normal landing state without reload, and returns/retains focus appropriately;
- shared Search controls use neutral interface/theme styling rather than Fish-specific or fixed Knots-specific coloration;
- empty landing query shows no result count/grid and leaves the normal Knots landing hierarchy as the discovery surface;
- active filtering uses a compact scoped result status such as **N knots found**;
- normal no-match guidance is **No knots found. Try another search.**;
- Search → Knot Detail → Parent restores the originating Search query and scroll position;
- desktop Search width remains a browser-test refinement: Fish is the comparison baseline, but its exact two-card-width constraint is not automatically imposed on Knots.


Result-card composition/density remains owned by the later Browse / Search Results audit checkpoint. Whether reel-spooling Search should also expose a contextual **Get Your Reel Ready** workflow bridge is intentionally left to the dedicated workflow review rather than being assumed by Search.


The earlier `KNOT-SEARCH-APPROVAL.md` requirement for an explicit visible Search action and older **Search all Knots** wording are superseded for current UI behavior by the later Guide-family live-Search standard and this approved CP1.2 refinement. Historical approval records remain preserved as historical evidence rather than being rewritten.


## KG Audit — CP1 Landing Page Consolidated Approval


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-22


The landing-page discussion baseline is approved as:


1. **Knots Guide** identity + approved description
2. **Search Knots**
3. **Get Your Reel Ready** special workflow
4. **What Are You Trying to Do?** — Learn Core Knots; Tie On a Hook, Swivel, or Lure; Connect Two Lines / Add a Leader; Make a Loop Connection
5. **All Knots** — an ordinary **All Knots — Browse →** card plus Core Knots, Beginner Knots, and Intermediate Knots browse cards


Equivalent Guide components inherit the Fish Guide baseline by default rather than being redesigned Guide by Guide. **All Knots**, **Core Knots**, **Beginner Knots**, and **Intermediate Knots** use the Fish **All Fish/category browse-card** grammar: **Title + `Browse →` heading row / description below / whole-card interaction / lighter non-pill action / left-aligned wrap**. **Get Your Reel Ready** directly inherits the **Compare Similar Fish** special workflow/action-card grammar and launches the existing Reel Setup workflow; its internal workflow remains owned by the later CP6 audit.


The older **Advanced Knots — Coming Soon** placeholder direction is superseded. **Advanced Knots is removed from the Version 1 landing page.** FCC retains `Advanced` as a valid difficulty value for future justified canonical Knot records, but Version 1 does not advertise an empty collection and does not add or reclassify any Knot merely to populate that tier.


Exact spacing and accent sequencing remain bounded implementation/browser-test refinements. Decorative Guide imagery is deferred to the final UX Audit. Equivalent Fish components keep Fish baseline interaction/responsive behavior unless browser validation exposes a concrete Knots-specific usability defect.


## KG Audit — CP2 — Landing Interaction + Responsive Behavior


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-22


Equivalent Guide components inherit the validated Fish Guide interaction and responsive baseline by default. The Knots audit does not reopen a Fish-settled component design unless Knot-specific semantics or browser validation demonstrates a material usability problem.


Approved CP2 direction:


- **Get Your Reel Ready** is the Knots equivalent of **Compare Similar Fish**: one special workflow/action card using the same reserved workflow visual grammar, whole-card interaction, action-row treatment, and responsive behavior. Its action is **Start Setup →**.
- **All Knots** is the Knots equivalent of **All Fish**: an ordinary browse card with **All Knots** + **Browse →** on the heading row and its description below. There is no separate section-level **Browse All →** control.
- **Core Knots**, **Beginner Knots**, and **Intermediate Knots** use the same Fish browse-card grammar. **Core Knots** retains priority styling because it is especially important for new anglers.
- In **What Are You Trying to Do?**, beginner-priority styling is retained for **Learn Core Knots**, **Tie On a Hook, Swivel, or Lure**, and **Connect Two Lines / Add a Leader**. **Make a Loop Connection** may use the standard task-card treatment.
- **Learn Core Knots** uses the action **Learn →** because it is a learning-path entry; the lower **Core Knots** collection card uses **Browse →** because it is a library-browse entry.
- Equivalent cards remain whole-card controls. Action text is a directional affordance, not a nested control. Fish-baseline focus, touch, hover-capable feedback, non-pill action treatment, and left-aligned wrap behavior carry forward.
- Responsive layout and workflow-card geometry start from the Fish baseline. They are verified during browser review rather than independently redesigned for Knots; only a concrete Knots-specific defect justifies divergence.
- Priority styling is semantic: it emphasizes actions especially important for new anglers and is not limited to special workflow cards.


## KG Audit — CP3 — Browse / Search Results


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-22


Knots browse and Search results inherit the validated Fish Guide result/browse baseline wherever semantics match, while retaining Knot-specific classification and ordering. One shared Knot result-card architecture is used across landing Search, **All Knots**, **Core Knots**, **Beginner Knots**, **Intermediate Knots**, and task-result views.


Approved result-card structure:


- classification first: **Core Knot • <Difficulty>** for Core records, otherwise **<Difficulty>**;
- Knot name + lightweight **View Knot →** action on the heading row;
- optional **Also called:** alias row only when approved aliases exist;
- concise canonical summary;
- no normal result-card connection-type chips, line-type chips, Best For content, or other detail-page metadata;
- instructional media is not required on browse/Search cards by CP3. Media suitability remains owned by the later instructional-media audit.


Core status receives subtle beginner-priority emphasis, but Core styling remains separate from accent identity. Standard Knot result cards use the shared rotating standard accent palette; they do not use one fixed Knots accent and do not consume the reserved workflow accent.


Browse/task Search directly inherits the Fish live scoped-Search baseline: **Search Knots**, concise scope help, no visible submit button, one-click clear, and no silent widening beyond the current collection/task. Parent navigation uses **Knots Guide**. Clearing Search restores the complete current eligible scope.


Approved ordering semantics:


- **All Knots**, **Beginner Knots**, and **Intermediate Knots** use alphabetical A–Z ordering when no query is active;
- **Core Knots** preserves the curated `CORE_KNOT_IDS` order; this is curation, not a mandatory course sequence;
- task-result views preserve the authored Knot order in the applicable task definition;
- typed Search remains relevance-ranked within the current eligible scope;
- **Learn Core Knots — Learn →** opens the existing **Core Knots** collection rather than creating a duplicate result surface.


Result grids inherit the validated Fish maximum density: one column on mobile and two columns maximum from intermediate/tablet through full desktop unless browser validation exposes a concrete Knots-specific defect.


Browse/task navigation must preserve the active collection/task, Search query, and scroll position through **result → Knot Detail → Parent**. Active result status uses Knot-specific wording such as **N knots found**; scoped no-match guidance uses **No knots found in <scope>. Try another search.** Landing no-match behavior remains governed by CP1.2.


## KG Audit — CP4 — Knot Detail Page


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-22


Knot Detail is an instructional page. It inherits Fish/shared detail components where semantics match, but it keeps the primary tying and verification path visible rather than hiding the core task inside disclosures.


### CP4.1 — Shared Reference Interaction Convention


Approved FCC Reference behavior:


- contextual/reference information uses an immediately adjacent **`ⓘ`** control;
- **only `ⓘ` is the Reference interaction target**; adjacent referenced text does not gain Reference behavior merely because the cue is present;
- keep the visible `ⓘ` close to the exact term it explains rather than pushing it to the far edge of a row;
- enlarge the independent touch/focus hit area as needed without enlarging the visible glyph or allowing the invisible target to overlap adjacent text or controls;
- referenced text retains whatever semantics it already owns, including static text, checkbox-label selection, navigation, or disclosure behavior;
- Reference affordance relies primarily on the persistent `ⓘ` cue rather than requiring a dedicated colored Reference chip/accent. Exact hover/focus/pressed treatment remains refinement-allowed for browser validation.


On Knot Detail, **Line Compatibility** (`Monofilament`, `Fluorocarbon`, `Braid` where applicable) uses this convention. Compatible line types render as a consistent vertical list, one canonical line type per row. The line-type text remains non-Reference-interactive; each adjacent `ⓘ` opens only that exact line type's contextual Reference information in the shared modal/bottom-sheet-capable Reference surface. Opening/closing Reference does not leave Knot Detail, mutate disclosure/scroll state, or expose unrelated line-type pages, and closing restores focus to the originating `ⓘ`. The former dedicated Line Type detail route is retired from this Knot context.


### CP4.2 — Detail Identity / Header


Approved visible identity order:


1. Parent/Home navigation,
2. compact classification,
3. dominant Knot name,
4. concise canonical summary,
5. optional **Also called:** alias only when present.


Core records show **Core Knot • <Difficulty>**; non-Core records show **<Difficulty>**. Classification is informational text, not a clickable chip. Core priority may receive subtle emphasis, but Knot Detail does not use one fixed Guide-specific color.


### CP4.3 — About This Knot Disclosures


Use one compact **ABOUT THIS KNOT** group with three Fish-baseline independent disclosures:


- **Best For**,
- **Line Compatibility**,
- **Where You'll Use It**.


Each disclosure starts collapsed on initial Knot-detail entry, uses the complete labeled row as the disclosure target, uses **`▾`** collapsed / **`▴`** expanded iconography, and remains independent so opening one does not automatically close another.


**Best For** renders curated `bestFor[]` beginner guidance. **Line Compatibility** renders applicable line types using the approved adjacent-`ⓘ` Reference convention. **Where You'll Use It** contains navigation rather than Reference chips: task/workflow and Rig destinations use **`→`** navigation cues.

CP9.3A browser approval refines the usage presentation without changing those semantics: **Common Tasks** and **Rigs That Use This Knot** use lightweight non-chip link rows, subgroup labels may use the restrained instructional accent/rule treatment, and neutral separators may divide peer links. Internal `→` cues stay immediately adjacent to the destination wording and use the same text color as that destination. Knot usage relationships do not copy the heavier Fish **Rigs to Start With** recommendation-card treatment because these rows are relationship navigation rather than recommendation-priority/reason content.

For Arbor Knot and other legitimate reel-spool contexts, use **Get Your Reel Ready →** as the contextual workflow bridge rather than reintroducing **Attach Line to a Reel** as a competing landing/task concept.


### CP4.4 — Primary Tying Flow


**HOW TO TIE IT** remains always visible and is not placed inside a disclosure. It contains:


- the instructional-media area owned by CP5,
- the authoritative ordered `tyingSteps[]`,
- visible numbering derived from array order.


The primary user path is therefore **open Knot → see how to tie it** without another expansion action. In the approved CP9.3A implementation, **HOW TO TIE IT** sits directly below the Knot identity/description and **CHECK YOUR KNOT** follows the tying sequence before the secondary ABOUT THIS KNOT / MORE HELP material. This visible teaching order governs even though the documentation subsections above are organized by audit topic. CP5 owns the exact diagram/animation treatment and may affect final desktop geometry.


### CP4.5 — Verification + More Help


**CHECK YOUR KNOT** remains always visible immediately after the tying sequence and renders `finalChecks[]`. Verification is treated as part of the primary tying workflow rather than optional troubleshooting.


A separate **MORE HELP** group contains independent disclosures:


- **Common Mistakes** → `commonMistakes[]`,
- **When to Choose Another Knot** → `limitations[]`.


Both start collapsed and use the shared disclosure grammar. The beginner-facing label **When to Choose Another Knot** is preferred over exposing the internal `limitations[]` field name. Informational bullet lists on Knot Detail use the shared Guide-family accented marker language already validated by Fish **Key Identification Traits** and the numbered tying-step emphasis; navigation-link lists remain navigation rows rather than bullet lists.


### CP4.6 — Related Knowledge, Sources, Navigation, and Responsive Refinement


**Where You'll Use It** preserves relationship structure instead of flattening task/Rig destinations into generic chips. Task/workflow and Rig destinations remain explicit navigation actions using **`→`**.


**Sources & References** remains available at the bottom of the detail page as a collapsed disclosure by default.


Do not add a generic duplicate bottom **Back to Knots** action. Parent navigation must reflect and restore the actual originating context already required by CP1/CP3, including landing Search, scoped collection/task browse, applicable Rig context, or Reel Setup handoff. When a user leaves Knot Detail for a related internal destination and returns, restore the Knot Detail browsing state, including open disclosures, the nested Rig-list expansion state when applicable, scroll position, and focus to the originating control.


Do not lock Knot Detail to a two-column desktop teaching layout during discovery. Exact media/instruction arrangement, comfortable reading width, and whether desktop uses stacked or side-by-side instructional presentation remain **BUILD TEST REQUIRED** after CP5 establishes the actual instructional-media treatment. Mobile must preserve a clear single-flow teaching order without horizontal scrolling.


## Core Presentation


Core Knots are a recommended starter set, not a mandatory course sequence. On the landing page, Core is reached through the priority **Learn Core Knots — Learn →** task card and the priority **Core Knots — Browse →** collection card rather than through a standalone major Core section.


Core presentation should explain what each Knot unlocks:


- Arbor Knot — get line onto the reel,
- Improved Clinch Knot — tie on hooks, swivels, and many lures,
- Palomar Knot — another simple terminal connection across common freshwater setups,
- Double Uni Knot — connect backing, main line, and leaders.


The interface should not imply that the user must master all four in a fixed numerical order before fishing.


## All Knots


The landing **All Knots** area uses **All Knots — Browse →** as an ordinary browse card, directly matching the Fish Guide **All Fish — Browse →** baseline. It appears with **Core Knots — Browse →**, **Beginner Knots — Browse →**, and **Intermediate Knots — Browse →**. **Advanced Knots is not shown as a Version 1 landing collection.** Core Knots retains priority styling because it is especially important for new anglers; the other browse cards use the normal Fish-baseline browse-card treatment.


All 10 active Version 1 Knot cards should be available in the **All Knots** view.


Every active Knot card must visibly display its difficulty level.


Cards should remain compact and should primarily answer:


- what the Knot is,
- what practical connection it solves,
- whether it is appropriate for the user’s current task,
- its difficulty level.


Detailed instructional content belongs on the Knot detail view rather than the browse card.


## Advanced Knots — Version 1 Resolution


**Decision:** remove the **Advanced Knots** collection/card from the Version 1 landing page.


Version 1 currently contains **0 active Advanced-difficulty Knot records**. FCC does not add, promote, or reclassify a Knot merely to populate a visual tier, and it does not retain an inactive **Coming Soon** card solely for symmetry.


The **Advanced** difficulty value remains part of the approved Knot taxonomy and canonical schema for future justified records. A later feature, Rig, Technique, or fishing method may justify adding an Advanced Knot; that future record must still satisfy the canonical-library rule and its own content/source/instructional requirements before an Advanced collection returns to the landing page.


# Approved Knot Difficulty Taxonomy


Knot difficulty uses exactly three allowed values:


- **Beginner**
- **Intermediate**
- **Advanced**


The Knot Guide does not use the Rig Guide’s `Beginner+` or `Intermediate+` levels.


Difficulty means:


> How difficult the Knot is to learn and reliably tie correctly.


Difficulty does **not** represent knot strength, species difficulty, technique sophistication, or how specialized the Knot’s use may be.


Core membership and difficulty are independent concepts. A Knot may be easy to tie without being Core, and a future Core use case would not automatically redefine tying difficulty.


## Version 1 Difficulty Assignments


### Beginner — 6


- Arbor Knot
- Improved Clinch Knot
- Palomar Knot
- Double Uni Knot
- Uni Knot
- Double Surgeon’s Knot


### Intermediate — 4


- Non-Slip Loop Knot
- Dropper Loop Knot
- Snell Knot
- Alberto Knot


### Advanced — 0 Active Knots


No Version 1 canonical Knot is artificially promoted to Advanced merely to populate the tier.


The Advanced taxonomy remains valid for future knots whose tying process genuinely warrants it. **Version 1 omits the Advanced Knots landing collection/card while retaining the taxonomy and future-record support.**


# Approved Canonical Knot Schema


The Version 1 canonical Knot entity extends the Foundation entity with only fields that support approved Knot Guide features.


Approved schema:


```text
id
name
summary
createdVersion
lastModifiedVersion
isActive


difficulty
connectionTypes[]
compatibleLineTypes[]


aliases[]


bestFor[]
limitations[]


tyingSteps[]
commonMistakes[]
finalChecks[]


referenceLinks[]
```


Core membership is not stored as an `isCore` field on individual Knot records. It is Knots Guide curation owned by `data/knot-guidance.js` through the single curated Core registry:


```text
CORE_KNOT_IDS[]
```


Approved ordered Core registry:


```text
arbor-knot
improved-clinch-knot
palomar-knot
double-uni-knot
```


`data/knot-guidance.js` also owns static Knots Guide collections, visible landing-task curation, practical task-to-Knot mappings, and maintained Search-intent vocabulary. Canonical `data/knots.js` records do not own Search-only `keywords[]`. `Attach Line to a Reel` remains a valid practical/search/detail context but is not a peer landing task; **Get Your Reel Ready** owns that landing workflow entry. **Learn Core Knots** derives its membership from `CORE_KNOT_IDS[]` rather than duplicating the Core list.


## Schema Changes from the Original Draft


The original `docs/data-model/04-KNOTS.md` Draft predates the current architecture and must later be reconciled with these approved decisions.


Approved changes:


- replace singular `purpose` with `connectionTypes[]`,
- remove `strengthRating`,
- remove stored `stepCount`,
- remove Knot-owned `imageIds`,
- remove `relatedRigIds`,
- remove `relatedTechniqueIds` for Version 1,
- add `aliases[]`,
- keep Search-only intent vocabulary out of canonical Knot records and own it in `data/knot-guidance.js`,
- add `bestFor[]`,
- add `limitations[]`,
- add authoritative ordered `tyingSteps[]`,
- add `commonMistakes[]`,
- add `finalChecks[]`,
- add `referenceLinks[]`.


These are canonical ownership/schema corrections. Production reconciliation remains implementation work for CP8/CP9 and must preserve the approved current Knot library while removing Search-only vocabulary from canonical records.


# Approved Controlled Vocabularies


## difficulty


Allowed values:


```text
Beginner
Intermediate
Advanced
```


These are stored as the same user-facing values displayed by the application.


## connectionTypes[]


Approved stored values:


```text
reel-spool-attachment
terminal-attachment
line-to-line
terminal-loop
dropper-loop
```


Approved meanings:


- `reel-spool-attachment` — Attach Line to a Reel
- `terminal-attachment` — Hook, Swivel, or Lure Attachment
- `line-to-line` — Connect Two Lines / Add a Leader
- `terminal-loop` — Free-Moving Terminal Loop
- `dropper-loop` — Branch / Dropper Loop


Do not create separate structural taxonomy values solely for hook attachment, swivel attachment, lure attachment, leader connection, backing connection, or Snell hook connection when those are application contexts of the approved connection types.


## compatibleLineTypes[]


Approved stored values:


```text
monofilament
fluorocarbon
braid
```


The field identifies line materials for which the Knot is reasonably appropriate in supported applications. It does not imply that every possible pairing of listed materials is equally recommended.


A separate machine-readable line-pairing matrix is not part of Version 1 unless implementation demonstrates a concrete need for it.


# Approved Search Metadata Semantics


## aliases[]


`aliases[]` contains legitimate alternative names or accepted naming/spelling variants for the Knot.


Task phrases do not belong in aliases.


## Guide-owned Search intent


Beginner/task Search phrases such as `tie hook`, `connect two lines`, `braid to leader`, `backing to braid`, and `add a leader` are maintained as Knots Guide Search-intent vocabulary in `data/knot-guidance.js`, not as `keywords[]` on canonical Knot records.


`search.js` owns query normalization, matching, scoring, and deterministic relevance ordering. Canonical Knot name, genuine aliases, compatible line type, and difficulty remain valid canonical Search signals; Guide-owned Search intent supplies curated task/discovery vocabulary without duplicating it into `data/knots.js`.


# Approved Instructional Context Fields


## bestFor[]


Curated beginner-oriented statements explaining situations in which the Knot is particularly useful.


This field may also support comparison when a task returns several candidate Knots.


## limitations[]


Curated statements explaining practical drawbacks, constraints, or situations where another Knot may be a better choice.


This field should use neutral instructional language rather than labels such as `cons`, `weaknesses`, or `avoidWhen`.


# Approved Tying-Step Model


`tyingSteps[]` is the authoritative ordered non-video tying sequence.


Version 1 stores the steps as an ordered array of instruction strings.


Rules:


- array order is authoritative,
- the UI always presents visible numbered steps,
- display numbering starts at 1,
- step numbers are derived from array position and are not stored as separate data,
- step numbers are not embedded manually in the instruction text,
- `stepCount` is derived from `tyingSteps.length` and is not stored,
- the visual presentation should align with the established Rig Guide **How to Build It** numbered-step pattern.


If animation implementation later proves that individual instructional steps require persistent independent identity, `tyingSteps[]` may evolve to step objects with stable step IDs. Even in that case, display step numbers remain derived rather than stored.


# Approved Teaching-Support Fields


## commonMistakes[]


Authoritative beginner-oriented mistakes that help explain why a Knot may fail or be tied incorrectly.


## finalChecks[]


Authoritative checks that help the angler determine whether the Knot is dressed, seated, and completed correctly.


This field remains separate from `commonMistakes[]` because it answers a different beginner question: **Did I tie this correctly?**


# Approved Source Field


## referenceLinks[]


Version 1 uses the established simple reference-link structure:


```text
referenceLinks: [
    {
        label: "...",
        url: "..."
    }
]
```


The exact research/source-validation standard remains a separate planning decision.


# Approved Knot Media Ownership


Knot records do not store `imageIds[]` or `animationIds[]` for the same relationship already owned by canonical Media records.


Instructional media should use the established media ownership pattern conceptually as:


```text
Media
    ownerType: "knot"
    ownerId: "palomar-knot"
```


Knot instructional media is then derived from active Media records associated with that canonical Knot.


This preserves one relationship owner and avoids storing both `Knot.imageIds` and `Media.ownerId` as duplicate sources of truth.


The exact animation media vocabulary/implementation remains to be finalized during the diagram/animation planning topic.


# Explicitly Excluded Version 1 Knot Fields


Do not store the following on canonical Knot records unless a later approved requirement demonstrates a need:


```text
isCore
stepCount
strengthRating
relatedRigIds
relatedTechniqueIds
imageIds
animationIds
taskIds
primaryPurpose
recommendedSpecies
```


Knot records describe the connection itself. Rig, Technique, Reel Setup, and future Decision Knowledge provide fishing context.


# Approved Knot Instructional Media Direction


## CP5.1 — Instructional Media Role / Safety Gate


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — revised 2026-09-27


The current verified external instructional-media coverage for all 10 active Version 1 Knots is the **known-working baseline** and remains protected until a replacement treatment is technically validated, browser-tested, and explicitly approved.


Rights-qualified locally incorporated instructional visuals are the preferred candidate enhancement. A qualifying visual may be **one complete or finished geometry diagram, a partial set of useful instructional views, or a complete stepped sequence**. The visual exists to help a beginner understand line alignment, loops, wraps, crossings, threading, hardware relationship, tightening/seating, and final Knot geometry. Visual count does not need to equal the number of FCC text steps.


The bounded prototype remains the four current Core Knots:


- **Arbor Knot** - reel-spool attachment,
- **Improved Clinch Knot** - wrapping, threading, and tightening,
- **Palomar Knot** - doubled line and loop-over-terminal geometry,
- **Double Uni Knot** - two-line geometry and opposing knots.


Changing that four-Knot prototype membership, including substituting Uni Knot for Double Uni Knot, requires a separate explicit decision.


`tyingSteps[]` remains the authoritative **current** in-app instruction. Candidate visuals do not become a second source of tying facts. If a complete stepped source is independently proven to tie the intended Knot correctly, FCC may separately propose revising `tyingSteps[]` wording, segmentation, or ordering so the canonical text aligns naturally with that validated sequence. Any such `data/knots.js` content change requires separate explicit approval, and FCC never changes the Knot method merely to fit available artwork.


A step-through viewer and transition animation are **not Version 1 dependencies**. First prove useful static visual guidance. Multi-state navigation is used only when a qualified source actually contains multiple useful states and the viewer materially improves understanding. Any later motion must remain user-controlled, non-autoplay, reduced-motion safe, and understandable from static guidance.


Prototype failure is non-destructive: FCC may use useful static local visuals without a viewer, or retain the verified external instructional model if the local treatment does not meet the validation bar.


## CP5.2 — FCC Visual Guide / Optional Step-Through Model


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — revised 2026-09-27


The accepted visual role is broader than a step-mapped viewer. A qualified Knot may use one complete/finished geometry diagram, a partial set of useful instructional views, or a complete stepped sequence. The canonical FCC text teaches the Knot; the visual helps the user understand the geometry.


**There is no default 1:1 requirement between `tyingSteps[]` and visual states.** A technically correct single or partial visual does not fail because it depicts fewer states than the FCC text, and a complete stepped source does not fail because its visual boundaries differ from the current FCC wording.


When a complete stepped source is considered, validate the depicted tying method independently from the current FCC step wording. Confirm that following the full sequence successfully ties the intended Knot and that material method facts - routing, wrap count where significant, crossings, loop identity, tightening/seating, and final geometry - are technically correct. Only after that validation may FCC propose aligning canonical step wording/segmentation/order to the depicted sequence, and the revised text must still be complete enough to tie the Knot without the image.


If a multi-state viewer is useful, its navigation follows the **visual sequence**, not an assumed text-step count. A visible cue may use **Visual N of M** or another truthful label. **Step N of M** is used only when an explicitly validated and approved visual/text mapping is genuinely step-aligned.


The complete normal numbered `tyingSteps[]` sequence remains available as the dependable textual teaching/reference path and failure-safe baseline. A completed-Knot visual may stand alone or appear within a sequence; it does not need to be artificially assigned to the final numbered text step. **CHECK YOUR KNOT** continues to own verification of the completed connection.


The current string-array `tyingSteps[]` schema and derived numbering remain unchanged unless a separate approved implementation need proves otherwise. Media item/state count may be independent of text-step count. Do not add stable step IDs merely to force visual alignment.


Candidate asset format remains source-driven for any future locally hosted Knot-media work. Rights-qualified raster or vector artwork may be used when it passes technical, readability, accessibility, and rights review. Locally hosted Knot diagrams remain a future enhancement goal rather than a Version 1 build requirement, and no future treatment needs to force every Knot into one identical media mechanic.


## CP5.3 — Visual Grammar


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — revised 2026-09-27


Visual treatment is phone-first and centered on unambiguous fishing-line geometry rather than decoration. A rights-qualified reused asset may retain its source style when it is accurate, readable, accessible, and technically suitable. The more prescriptive FCC vector grammar below applies when FCC authors or materially adapts artwork rather than requiring a reusable source to be redrawn merely for stylistic uniformity.


For FCC-authored or materially adapted diagrams:


- continuous line should not be styled as different materials merely to distinguish standing line from tag end; use concise labels or endpoint cues when needed;
- two independent lines may use a colorblind-friendly palette, but labels, markers, geometry, position, or another non-color cue must preserve identity without color;
- meaningful crossings must make over/under geometry unambiguous at phone size;
- loops/openings must remain visually distinct and unobstructed;
- direction, threading, pull, and tightening cues should be restrained and non-ambiguous;
- hardware should be simplified but recognizable, with enough geometry to make the tying method correct;
- labels remain sparse and do not duplicate the full canonical instruction; and
- the same geometry must remain legible across supported FCC themes/contrast conditions.


Technical correctness outranks polish. Validate wrap count where material, threading path, crossings, loop identity, line relationship, hardware relationship, tightening/seating, and final structure against the independently verified Knot method. A visually attractive but technically ambiguous or incorrect asset fails.


## CP5.4 — Production + Technical Validation Workflow


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — revised 2026-09-27


Locally hosted Knot instructional media is a **future enhancement goal**, not a Version 1 closure requirement. If that work is reopened later, use a reuse-first source-qualification path: search for technically suitable public-domain or clearly open-licensed instructional artwork and verify rights at the exact asset/source level. Site-wide copyright assumptions, reposts, or government hosting alone are not enough to establish local reuse/adaptation rights.


A reusable asset may be incorporated directly when its rights and technical fit are clear, or cropped/adapted only when its license permits the intended modification. Unclear or restrictive rights remain reference/external-link only and do not authorize tracing, frame extraction, close redrawing, or derivative reuse.


The rejected custom-drawn CP9.6 R1 is immutable review history and is not revised, traced, promoted, or used as the visual basis for another candidate. Reconsidering FCC-authored custom Knot diagrams later requires a separate explicit decision.


Future local source qualification validates three things independently:


1. **Rights/provenance** - exact asset, creator/source, license/public-domain status, attribution obligations, and whether adaptation/cropping is permitted.
2. **Technical geometry** - the visual represents the intended Knot/method correctly and clearly enough to help a beginner at phone size.
3. **Sequence integrity when applicable** - if the source claims a complete stepped sequence, a beginner can follow the depicted sequence to the correct finished Knot without an unexplained or technically wrong operation.


A single or partial geometry visual is not rejected merely because it does not depict the entire tying sequence; it must instead be truthfully presented as visual guidance for the geometry it actually shows. A partial set must not be misrepresented as a complete sequence.


No local asset download/adaptation, `data/media.js` local-media registration, viewer integration, or local production promotion is active for Version 1 after the approved CP9.6 media-direction decision. Any future local-media implementation requires its own explicit production scope and validation.


## CP5.5 — External Supplemental Instruction


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — revised 2026-09-27


External instructional destinations remain part of **HOW TO TIE IT** because they are teaching resources rather than mere citations. FCC canonical `tyingSteps[]` remain the authoritative instruction and must remain complete and usable even when an external resource is unavailable.


For Version 1, **101Knots is the approved preferred external Visual Guide provider for all 10 canonical Knots**. The provider sweep found a dedicated diagram-based instructional page for every canonical Knot and no method mismatch that requires changing FCC canonical tying geometry. The current mixed Grog / Bass Pro-Pro-Knot / Knots 3D production records remain live until a separate exact-scope production authorization updates `data/media.js` and the resulting links pass browser validation.


101Knots is approved for **external linking only**. Its diagrams are not copied, bundled, downloaded into the repository, extracted, modified, embedded, traced, or rehosted without separate permission establishing local reuse rights.


After the approved standardization is implemented, the normal medium-specific external action is **View illustrated instructions ↗** with restrained provider attribution to **101Knots**. `↗` denotes external navigation while `→` remains the FCC-internal navigation cue.


Version 1 defaults to one preferred supplemental external instructional destination per Knot. Additional destinations require a materially distinct teaching benefit and separate approval. Returning from external instruction should preserve the user's Knot/detail context where practical.


If locally hosted Knot media is developed in a future phase and passes the separate rights/technical/production gates, its relationship to the external Visual Guide may then be retested. The future local-media goal does not block Version 1 and does not reduce the external provider's role until a later approved replacement exists.


## CP5.6 — Responsive Instructional Presentation


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — revised 2026-09-27


FCC Knot instruction keeps one semantic teaching hierarchy across phone, intermediate/tablet, and desktop. Phone is authoritative. Screen width may rearrange space but may not make essential instruction desktop-only.


The phone flow keeps the approved external **Visual Guide** inside **HOW TO TIE IT**, followed by the complete normal numbered `tyingSteps[]` and **CHECK YOUR KNOT**, subject to browser testing of exact placement. Any future locally hosted visual treatment must integrate without making essential instruction desktop-only or requiring horizontal scrolling or pinch-zoom.


When a multi-state viewer is used, its truthful visual-position cue and explicit Previous/Next controls stay with the visual. Previous/Next remain discoverable at every viewport; swipe may be an optional enhancement only. Single-image treatments do not add artificial viewer controls.


Intermediate/tablet stays stacked by default and gains usable space before gaining columns. Desktop browser-tests centered stacked versus sufficiently wide side-by-side treatments; no two-column layout is pre-approved. Desktop cannot introduce essential labels, arrows, or explanations absent from phone.


Media geometry supports the source's appropriate orientation/aspect ratio without misleading cropping or distortion. When multiple states are used, keep controls and the visual region reasonably stable without forcing identical dimensions at the expense of accuracy.


The full numbered `tyingSteps[]` remains ordinary accessible flowing document content. Visual-to-step highlighting is optional and is tested only when an approved visual/text mapping genuinely exists. Responsive validation continues to stress-test Double Uni and Arbor because opposing-line and reel-spool geometry are likely failure cases.


## CP5.7 — V1 Coverage / Build Requirement


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — revised 2026-09-27


Version 1 does **not** require locally hosted Knot instructional images, a local step-through viewer, or a four-Core local-media prototype. Internal/local Knot diagrams remain a future project goal and may be reopened only through a later explicit scope decision.


The approved Version 1 visual-learning baseline is one preferred external **101Knots Visual Guide** destination for each of the 10 canonical Knots, paired with FCC's complete canonical numbered `tyingSteps[]`. Provider standardization still requires the separate authorized production edit and browser validation; until that occurs, the existing mixed external destinations remain the live production state.


Consistency is required at the experience and quality level: every Knot keeps the same Visual Guide hierarchy, truthful external-provider labeling, complete FCC text instruction, and usable responsive behavior. No local-media state count or viewer mechanic is required for V1.


Hard closure requirements are outcome-based: canonical instruction is complete and technically correct; all 10 approved external destinations resolve to the intended Knot; provider/action labels are truthful; external-resource failure does not make FCC instruction unusable; presentation remains accessible/responsive; and applicable technical/browser validation passes.


`tyingSteps[]` remains the authoritative current textual instruction. An external provider's wording, segmentation, ancillary advice, or line-compatibility statements do not silently modify FCC canonical content. Any future canonical text revision still requires independent validation and explicit approval.


Future locally hosted instructional media may later supplement or replace part of the external visual layer if it meets FCC rights, correctness, phone-readability, accessibility, and approval requirements. That future goal does not block Version 1 closeout.


# Approved Reel & Line Setup Direction


Reel & Line Setup is a first-class beginner workflow inside the Knots milestone, not merely an Arbor Knot article.


Version 1 supports:


- new/empty reel setup,
- replacement-line setup,
- Spinning reels,
- Spincast reels,
- Baitcasting reels,
- contextual reel-identification help directly from the reel-type screen,
- simple reel-recognition Reference help for Spinning, Spincast, and Baitcasting,
- Monofilament, Fluorocarbon, and Braid selection/identification,
- an **I'm not sure** line-identification path,
- beginner species-based line type and pound-test guidance,
- an all-around beginner recommendation for multiple common freshwater targets,
- reel/rod equipment-reading guidance without FCC pass/fail compatibility adjudication,
- reel-type-aware backing decisions,
- Arbor Knot integration for spool attachment,
- Double Uni or other approved canonical line-to-line Knot integration when backing or leader connections require it,
- line-routing and reel-specific spooling instruction,
- winding-tension and spool-fill guidance,
- optional non-blocking Leader Reference Knowledge, especially for Braid, while actual leader construction remains later Rig/presentation context,
- context-preserving navigation into Knot instruction and back into Reel Setup,
- a final **Reel Ready** checkpoint with a context-preserving forward handoff to the Rig Guide.


## CP6.1 — Workflow Shell, Navigation, Status, and Orientation


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-24


Get Your Reel Ready retains the existing first-class branching Reel Setup architecture. The landing workflow entry remains a reserved special/workflow card, but ordinary choices inside the workflow should use normal choice treatment rather than inheriting special-card presentation simply because they are part of Reel Setup.


The workflow separates progression from utilities. The approved build-test starting point is one full-width primary progression action, followed by a paired **Restart Setup** / **Exit to Knots** utility row. Responsive testing may stack those utilities on narrow screens only when needed for readable labels and adequate touch targets. Internal/package terminology such as **Package 3** is not user-facing copy.


**Restart Setup** is the explicit destructive reset of Reel Setup selections and current phase, returning to the beginning of Get Your Reel Ready. That reset must not unnecessarily destroy an external origin/return context outside Reel Setup itself. **Exit to Knots** explicitly abandons the active Reel Setup state and returns to the Knots Guide landing page; it is not a resumable detour. By contrast, intentional workflow excursions into Knot Detail continue to preserve Reel Setup state and return context.


Selected workflow state and workflow progress are presented together as one coordinated, noninteractive status section while remaining visually distinct. **Selected Choices** keeps a normal/theme-based label, container, border, and background. Only the selected-value text uses the shared special/workflow accent blue; the summary does not become a special card and does not use special-card accent visuals.


The same status section uses a fixed noninteractive progress model. **CP6.5 supersedes the earlier six-phase version:** the approved final model is **Reel → Line → Equipment → Spool → Ready**. Leader is not a Reel Setup completion phase. Completed, current, and upcoming states must be distinguishable without color alone. The current phase may use the workflow blue plus a non-color state cue. Because the five phases are fixed even when internal screens branch, compact mobile presentation may use truthful phase-count wording such as **Phase 3 of 5 · Equipment**, while wider layouts may show all phase labels. Exact presentation remains BUILD TEST REQUIRED.


The current responsive Reel Setup remains the implementation starting baseline. CP9 must test the combined status section and progression/utility controls across phone, intermediate/tablet, and full desktop widths. The previously approved simple labeled reel/spool diagram remains a CP6.3 requirement.


## CP6.2 — Reel Identification


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-24


The Reel Type screen presents exactly three actual reel choices: **Spinning Reel**, **Spincast Reel**, and **Baitcasting Reel**. Choosing any actual reel advances directly to Line Selection. Reel descriptions should prioritize beginner-visible physical cues while still introducing useful terms such as spool, bail, front cover, and rotating spool.


**Spinning Reel** is the approved beginner baseline and receives a restrained **Recommended First Setup** cue. Identification and recommendation remain separate concepts: a user who already owns a reel chooses the reel matching that equipment; the Spinning recommendation is for someone choosing a first freshwater setup.


The former **I'm Not Sure → Which Reel Matches Yours?** workflow branch is removed rather than refined. It duplicates the reel choices without providing enough additional identification value. The Reel Type screen instead exposes **Not sure which reel you have? `ⓘ`** using the shared Reference convention; only the `ⓘ` is the Reference trigger.


Reel-identification Reference help uses one multi-page contextual surface with three pages: **Spinning**, **Spincast**, and **Baitcasting**. Each page may combine a representative or labeled image/illustration, concise description, and distinguishing traits. The surface provides visible page position plus explicit **Previous / Next** controls. Swipe may be added for touch as an enhancement only; it is never the sole navigation method, and the surface does not autoplay. Closing returns focus to the originating `ⓘ`.


Reference paging is contextual information, not Reel Setup workflow progress. Opening, paging, and closing the Reference surface does not select a reel, add a Selected Choice, or change the fixed **Reel** phase. Once the Reference treatment is implemented, the obsolete **Back to Reel Choices** card and separate Reel Identification Help workflow-state/navigation branch are removed. Existing downstream-reset behavior when an actual reel type changes is preserved.


CP6.2 also carries one explicit reconciliation into CP6.3. The approved Recommendation Audit baseline is **Spinning Reel → All-Around Freshwater → 10 lb Monofilament**. The current Reel Setup guidance still identifies 8 lb as the All-Around easy choice, so CP6.3 must reconcile line-selection/strength guidance to the approved 10 lb beginner baseline while preserving later equipment-reading guidance; CP6.3 supersedes any implied FCC pass/fail compatibility gate.


## CP6.3 — Target, Recommendation, Line Strength + Equipment Guidance


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-24


**What Are You Fishing For?** keeps **All-Around Freshwater** as the Reel Setup-owned general-purpose option and then presents the applicable Fish Guide categories. Reused Fish category identity must come from the Fish Guide canonical category owner rather than from separately maintained Reel Setup titles. The current duplicated **Panfish - Bluegill & Crappie** wording is therefore superseded by the canonical Fish Guide title **Crappie & Sunfish** through derivation. The same rule applies to canonical category order: All-Around Freshwater remains first, then Reel Setup reuses the Fish Guide category order instead of maintaining an independent alphabetical or local order. Setup-specific descriptions may differ; canonical category titles/order do not.


Target strength reference and Line Type interpretation are separate concerns. Reel Setup should not create 18 independently authored numeric recommendations merely because six targets can be combined with three Line Types. Target profiles own the beginner fishing-strength context; Line Type guidance explains how that context should be interpreted for Monofilament, Fluorocarbon, or Braid. CP7 owns the exact data decomposition and must avoid duplicate semantic ownership.


The approved six-target starting-reference set is:


- **All-Around Freshwater** — `6–12 lb`; preferred starting recommendation **10 lb Monofilament**; **8 lb Monofilament** remains the approved lighter general-purpose alternative.
- **Crappie & Sunfish** — `4–6 lb`; starting recommendation **6 lb Monofilament**.
- **Trout** — `2–4 lb`; starting recommendation **4 lb Monofilament**.
- **Bass** — `8–12 lb`; starting recommendation **10 lb Monofilament**.
- **Walleye** — `6–10 lb`; starting recommendation **8 lb Monofilament**.
- **Catfish** — `15–20 lb`; starting recommendation **20 lb Monofilament** for the broad beginner/general Catfish path rather than trophy-specific tackle.


These values are beginner starting references, not universal requirements. For Monofilament, the approved starting value may initialize the Line Weight selector. Fluorocarbon and Braid do **not** silently inherit a Monofilament numeric recommendation. The selector initializes from an FCC numeric recommendation only when that exact Line Type + target combination has an approved numeric recommendation; otherwise it begins unconfirmed and the user chooses the actual pound-test they intend to use. Braid retains explicit **fish-strength reference** wording because its diameter/strength relationship differs substantially from Monofilament. Fluorocarbon likewise receives material-specific wording rather than a blind Monofilament relabel.


The target-specific recommendation page owns the user's actual **Line Weight** selection. A rolling-selector treatment modeled on the Regulations State Selector remains the preferred implementation starting point, but exact selector mechanics, range, layout, and styling remain revision-allowed during build/browser review. Selector movement does not auto-advance. An explicit progression action confirms the selected value, with build-time wording such as **Continue with 10 lb Monofilament →**.


Once confirmed, the actual Line Weight is retained in transient Reel Setup state and included with Line Type in **Selected Choices**. Downstream Equipment guidance uses those actual values dynamically. FCC recommendation and user selection remain separate concepts; changing the selector does not rewrite the recommendation.


The Line Type screen presents exactly the three actual materials: **Monofilament**, **Fluorocarbon**, and **Braid**. Monofilament carries the restrained **Recommended First Setup** cue. The separate **Help Me Choose** and **I'm Not Sure** workflow cards/branches are removed. In their place, the Line Type screen exposes **Need help choosing or identifying your line? `ⓘ`** using the shared Reference convention.


Line Type help uses one multi-page contextual Reference surface with three pages: **Monofilament**, **Fluorocarbon**, and **Braid**. Each page may combine recognition cues, beginner-use guidance, and the material's important tradeoffs. The surface provides visible page position plus explicit **Previous / Next** controls. Swipe may be added as a touch enhancement only; it is never the sole navigation method, and the surface does not mutate Reel Setup selections or progress.


The Equipment phase is educational rather than adjudicative. FCC does not know the user's exact reel model, spool capacity, rod model, rod line rating, line diameter, or manufacturer-specific restrictions, so the current **My Reel & Rod Support This Setup**, **Something Doesn't Match / I'm Not Sure**, compatibility confirmation state, mismatch branch, and compatibility-complete gate are removed from the approved direction. The Equipment screen instead summarizes the user's confirmed Line Type + Line Weight, teaches the user to compare those values with their reel-capacity and rod-line-rating markings, states that the equipment/manufacturer guidance is authoritative, and provides a normal progression action into Backing / Spool Setup. A user who discovers a mismatch can use ordinary previous-step navigation to change Line Type or Line Weight; FCC does not block progression by asserting a compatibility verdict.


Equipment help is consolidated into one multi-page contextual Reference surface: **How to Read Your Reel**, **How to Read Your Rod**, and **If the Ratings Don't Match**. The Reel page includes the previously approved simple labeled reel/spool diagram and explains where capacity markings may appear, `lb` / `yd` / `m` / `mm`, Mono/Braid listings, variable printed order, and that reel size/model values such as 1000/2500/3000 are not pound-test ratings. The Rod page explains Line / Line Wt / Line Rating and keeps those markings distinct from lure-weight ratings. The mismatch page explains how to go back and choose a line that better fits the equipment or follow model-specific manufacturer guidance without creating a workflow PASS/FAIL branch.


The existing **Spincast + Braid** safeguard remains, but as an informational warning only: some spincast reels may not support Braid appropriately, so the user must check the actual reel/manufacturer guidance. FCC does not declare the specific reel incompatible and does not block continuation.


The target/recommendation/Line Type/Equipment sequence receives an explicit wording pass during implementation. Exact prose and selector geometry remain revision-allowed at build time while preserving the semantic contract above. CP7 owns structural/data cleanup, CP8 owns exact source/file scope, and CP9 owns browser/responsive/accessibility validation.


## CP6.4 — Backing + Spool Connection


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-24


The Backing Decision is a smart conditional branch driven by the user's actual selected **Line Type**. It is not a universal Reel Setup screen.


- **Monofilament** and **Fluorocarbon** bypass Backing and enter the Spool phase directly.
- **Braid** alone opens **Decide on Backing** because braid can slip on some smooth spool arbors unless the exact reel/spool supports secure direct-braid attachment.
- For Braid, **Monofilament Backing — Recommended First Setup** is the preferred beginner path.
- **Direct Braid — Manufacturer Supported** is available only when the exact reel/spool manufacturer supports a secure direct-braid method or braid-ready surface.
- Optional/economy backing under Mono/Fluoro is intentionally not exposed in Version 1.
- Equipment remains educational and non-blocking; the obsolete compatibility-complete gate cannot block Backing or Spool progression.
- The existing **Spincast + Braid** safeguard remains informational and non-blocking, with manufacturer guidance authoritative.


The older conceptual split **Spool Connection Plan → Spool the Reel** is superseded by one chronological **Spool** phase. Internal screens/substeps may remain, but the user experiences one ordered physical process: **prepare → attach → wind/connect as required → fill → check**.


Approved path semantics:


1. **Monofilament / Fluorocarbon** — prepare the reel using reel-specific routing; attach the confirmed main line to the spool with **Arbor Knot** guidance; return to the same Spool point; wind the main line using reel-specific instructions; check fill; continue to Ready.
2. **Braid + Monofilament Backing** — prepare the reel; attach backing to the spool with **Arbor Knot** guidance; wind the backing layer; connect backing to the confirmed Braid with **Double Uni Knot** guidance; wind Braid; check fill; continue to Ready.
3. **Direct Braid — Manufacturer Supported** — prepare the reel; follow the exact manufacturer-supported direct-Braid attachment method; do not present Arbor Knot as FCC's generic direct-Braid solution; wind Braid; check fill; continue to Ready.


Knot instruction actions appear at the exact physical point where they are needed, using task wording such as **Tie Arbor Knot →** and **Tie Double Uni Knot →** rather than presenting Knot links as peer workflow choices. Knot-detail excursions preserve the complete Reel Setup state, current Spool substep, originating action, scroll position where appropriate, and keyboard focus on return.


The Spool phase propagates the user's confirmed **Line Type + Line Weight** into dynamic instructions and a simple semantic line-system visualization. Examples include **Reel spool → 10 lb Monofilament** and **Reel spool → Monofilament backing → 20 lb Braid**. FCC does not invent a universal backing pound-test or backing yardage when the workflow has not collected the reel capacity, backing diameter, main-line package length, or other information needed to do so responsibly; reel/manufacturer capacity guidance remains authoritative.


For Mono/Fluoro, direct-spool routing is **derived behavior**, not a fabricated user choice named No Separate Backing. Selected Choices must not imply that the user explicitly selected a backing outcome they were never asked to choose.


## CP6.5 — Leader Scope Boundary


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-24


Leader is removed from **Get Your Reel Ready** as a workflow phase. A reel can be fully and correctly spooled without a leader; leader material, strength, length, and connection are terminal/presentation decisions rather than requirements for completing the reel-spooling operation.


The approved progress model is therefore **Reel → Line → Equipment → Spool → Ready**. This supersedes the earlier CP6.1 six-phase tracker that included Leader.


Reel Setup no longer owns:


- a Do You Need a Leader? decision;
- leader material selection;
- `leaderChoice` as Reel Setup state or Selected Choices output;
- generic leader-strength or leader-length prescriptions;
- the existing approximately 3–4 ft generic leader instruction;
- physical leader construction;
- a Double Uni excursion solely to complete a Leader phase;
- a leader requirement in the Reel Ready check.


Leader knowledge remains available as a **non-blocking contextual Reference Knowledge bridge**, especially when Braid is selected. The Reference explains what a leader is, why anglers use one, high-level Mono-vs-Fluoro tradeoffs, and that actual leader material/strength/length/connection depends on the later Rig, presentation, target, and fishing conditions. Opening or closing the Reference does not mutate Reel Setup state or imply the reel is incomplete.


Actual leader construction belongs later where the relevant Rig/presentation context exists. The **Double Uni Knot** remains valid canonical Knot content and may be surfaced when a later setup actually calls for a line-to-line leader connection.


The Reel Ready check validates the completed **reel + main-line + backing system** only.


## CP6.6 — Ready Check + Rig Handoff


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-24


**Reel Ready** means the reel is correctly spooled and its completed line system is ready for the next setup step. It does **not** mean a terminal Rig is attached, a Leader has been chosen, bait/lure is attached, or the entire fishing setup is cast-ready. The approved five-phase model remains **Reel → Line → Equipment → Spool → Ready**.


The final screen is titled **Reel Ready** rather than Reel Ready Check. It reuses the existing noninteractive **Selected Choices** summary and the CP6.4 semantic line-system representation rather than creating a second completion-summary model. Mono/Fluoro direct-spool behavior remains derived and must not display a fabricated **No Separate Backing** choice.


The final physical checklist is educational/user-confirmed rather than an FCC PASS/FAIL gate. It verifies: correct reel-specific routing and clean retrieval; reasonably even spool fill without overfill, with manufacturer fill marks/instructions authoritative; every spool-to-line or backing-to-main-line connection actually used is secure; and the final main line still fits the reel-capacity and rod line-rating guidance reviewed during Equipment. No Leader check appears in Reel Ready.


The primary completion action is **Choose a Rig →**. It completes Reel Setup, snapshots the completed setup context, opens the normal Rig Guide landing page, and does not automatically select a Rig. Incomplete workflow phases retain **Restart Setup** and **Exit to Knots**. On the completed Ready screen, the second utility becomes **Done — Knots Guide** because the user is finishing a successful workflow rather than abandoning an incomplete one.


Version 1 preserves a compact **transient completed Reel Setup context** containing only downstream-useful facts: Reel Type, Target Fish / All-Around target, Line Type, confirmed Line Weight, and Backing method only when applicable. Entry/start mode, obsolete Equipment compatibility state, Leader state, obsolete step IDs, and other UI-only workflow state do not carry forward. This context is runtime/session-only: it survives the handoff into Rig Guide and may remain available through normal Rig browse/search/detail navigation during that setup journey, clears when a new Reel Setup is deliberately started/restarted, is not persistent User Knowledge/account storage, and does not need to survive a full page/browser reload. **CP9.5 has only one current visible consumer for this snapshot: the Rig Guide landing summary.** Browse/Search/Rig Detail do not display or consume it in the current Knots scope. Any material Rig-detail use is deferred to the Rig Guide audit. Exact property names and technical structure are deferred to CP7/CP8.


When Rig Guide is entered from completed Reel Setup, the **Rig Guide landing page** visibly acknowledges the carried context with a compact noninteractive **Your Reel Setup** summary. The current treatment is intentionally lightweight rather than another major card and carries only factual setup values; recommendation/UI cues such as **Recommended First Setup** do not carry forward as setup facts. The context does **not** automatically select, hide, filter, rank, or declare Rigs compatible/incompatible and does not turn Rig Guide into a recommendation engine. Target is preserved because it may be valuable downstream context even though CP6.6 does not use it to rank Rigs. The future Rig Guide audit owns whether the retained session context should materially inform Rig Detail guidance; `ACTIVE-CHANGE-LEDGER.md` carries that explicit follow-up. No generic Leader recommendation is added to the Rig Guide landing page.


**Choose a Rig →** is forward progression, not a temporary excursion. Completion snapshots the useful context, clears obsolete internal Reel Setup navigation/history, opens Rig Guide, and preserves the completed context separately. Rig Guide Parent behavior therefore does not return to a completed Reel Setup as though the user merely opened a reference. Within Reel Setup, Ready Previous returns to the final **Spool** state; obsolete Leader navigation is removed.


CP6 is complete at this checkpoint. CP7 owns the JavaScript/data structural audit and exact cleanup inventory; CP8 locks implementation file scope; CP9 owns production implementation plus browser/responsive/accessibility validation.


## KG Audit — CP7.1 — `script.js` Ownership + Reel Setup State Structure


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-24


The JavaScript structural audit is performed **Guide by Guide**, not as a whole-file rewrite. For Knots, shared implementation files are audited only across Knots/Reel-owned sections plus directly relevant shared infrastructure. Unrelated Guide sections remain outside the Knots refactor unless a genuinely shared dependency requires a bounded change.


Approved CP7.1 structure:


- `script.js` receives an explicit Knots ownership boundary with a nested Get Your Reel Ready state/controller area; Knot/Reel-specific runtime state moves into that boundary.
- genuinely shared route registration, view registration, common view switching, and the generic detail-navigation stack remain shared infrastructure;
- cross-Guide handoff helpers are owned by the **originating Guide/feature** unless the helper is genuinely symmetric shared infrastructure;
- Reel Setup separates internal screen identity from the fixed **Reel → Line → Equipment → Spool → Ready** progress model; Reference/help surfaces do not become workflow-state IDs;
- obsolete CP6 Reel/Line/Equipment/Leader workflow states, prerequisites, and back-navigation are removed rather than adapted; confirmed Line Weight becomes real transient state;
- Backing state exists only for Braid; Mono/Fluoro direct-spool behavior is derived and does not store/display a fake backing choice;
- fresh launch, Restart Setup, and Exit to Knots have separate reset/navigation responsibilities;
- Reel→Knot instructional excursions capture and restore the exact Spool point plus originating action and applicable scroll/focus context;
- completed Reel Setup context is a separate transient cross-Guide handoff snapshot, not live workflow state or persistent User Knowledge; and
- CP7/CP8 remain targeted Knots/Reel refactors. Splitting or rewriting the full shared JavaScript architecture requires a separate explicit architecture gate.


No production JavaScript/data changed at CP7.1.


## KG Audit — CP7.2 — Renderer Ownership + Instructional Media Integration


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-24


Approved CP7.2 structure:


- `view-renderer.js` closes the Knots rendering boundary after Knot Detail / Line Type Reference rendering, then begins the adjacent Rig-owned rendering region;
- Rig-only helpers that consume Knot data for Rig Detail presentation, including the **Knots You'll Tie** builder, are Rig-owned rather than Knots-owned;
- `knot-media-renderer.js` no longer monkey-patches/reassigns `renderKnotInstructionDetail()` from another file;
- Knot Detail exposes an explicit instructional-media integration point inside **HOW TO TIE IT**; `view-renderer.js` owns page/section structure while `knot-media-renderer.js` owns the media presentation inserted there;
- instructional media remains structurally inside **HOW TO TIE IT**, but exact viewer/static/external/hybrid ordering remains evidence-driven and BUILD TEST REQUIRED in CP9 under the CP5 safeguards;
- the verified external instructional baseline remains protected until a replacement/refinement is actually implemented, validated, and explicitly approved;
- `knot-media-renderer.js` becomes the dedicated **Knot Guide — Instructional Media Rendering** presentation owner rather than retaining stale Package 4-only labeling; and
- canonical instruction/media facts remain in their existing data owners: `data/knots.js` owns Knot facts/`tyingSteps[]`, `data/media.js` owns Media records/provenance, and renderers own presentation only.


This is a targeted renderer-boundary cleanup, not a Rig Guide or Regulations audit. No production JavaScript/data/media changed at CP7.2. CP7.3 audits canonical Knot data vs Guide guidance ownership.


## KG Audit — CP7.3 — Canonical Knot Data vs Guide Guidance Ownership


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-24


Approved CP7.3 ownership model:


- `data/knots.js` owns canonical per-Knot identity/content and stable metadata: summary, lifecycle state, difficulty, connection types, compatible line types, genuine aliases, best-for guidance, limitations, tying instructions, mistakes/checks, and references;
- `CORE_KNOT_IDS` moves to `data/knot-guidance.js` because Core is a beginner learning/collection decision rather than an intrinsic Knot fact; the approved four-Knot membership/order is unchanged;
- canonical Knot records no longer own Search-only `keywords[]`; maintained Search intent/vocabulary belongs to `data/knot-guidance.js`;
- practical Knot tasks, visible landing tasks, and Search-intent vocabulary are distinct guidance concepts rather than one overloaded definition structure;
- `Attach Line to a Reel` remains valid practical/search/detail context and retains Arbor Knot + Uni Knot discovery, but **Get Your Reel Ready** remains the sole dedicated landing workflow entry for reel setup;
- **Learn Core Knots** is the visible learning task and derives membership from the single Core registry;
- static `KNOT_COLLECTIONS` moves from `script.js` to `data/knot-guidance.js`, and the superseded Version 1 Advanced/Coming Soon collection configuration is removed while `Advanced` remains a valid future difficulty value;
- `search.js` continues to own normalization, matching, scoring, and deterministic relevance ordering; and
- stable per-Knot metadata such as difficulty stays on canonical Knot records rather than being fragmented into unnecessary joins.


This is a targeted data-ownership cleanup. It does not change the 10-Knot library, the four Core Knot choices/order, or the approved Search relevance behavior. No production JavaScript/data changed at CP7.3.


## KG Audit — CP7.4 — `search.js` Ownership + Knot Search Structure


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-25


Approved CP7.4 Search structure:


- retain the existing explicit `search.js` ownership regions for shared Search primitives, Fish scoped Search, Knot deterministic scoped Search, and shared sort/lookup support rather than rewriting the whole file;
- `search.js` owns Knot query normalization, matching, scoring, and deterministic relevance ordering, while `data/knot-guidance.js` owns maintained Knot Search-intent vocabulary;
- Knot Search no longer derives its vocabulary directly from practical task objects and no longer consumes Search-only `keywords[]` from canonical Knot records;
- `data/knot-guidance.js` separates specific Knot Search intent from broader practical/task intent as needed for relevance, while numeric scoring remains algorithm-owned in `search.js`;
- deterministic tie-breaking is preserved using Search-intent ordering, Knot ordering within the matched intent, and original eligible-record order rather than task-specific algorithm knowledge;
- `Attach Line to a Reel` remains valid Search intent for Arbor Knot + Uni Knot independent of whether that concept is exposed as a peer landing task;
- callers establish the eligible Knot scope before invoking Search, and `search.js` must not broaden a collection/task scope by reaching into global Knot data or landing state;
- Knot-specific normalization rules such as common line/reel/plural replacements remain in the Knot Search boundary because they define how queries are interpreted, not what curated phrases map to which Knots;
- genuinely shared lookup/ranking/sort helpers remain shared, while the currently unused `filterRecordsByValue()` helper is removed during the targeted implementation after final zero-caller verification;
- current script load order already supports the approved dependency direction of canonical/Guide data → Search algorithms → controllers and requires no redesign; and
- Fish Search, Rig Search semantics, fuzzy/global Search, and unrelated Guide Search behavior are outside CP7.4 scope.


CP7.4 closes the JavaScript/data structural audit. No production JavaScript/data changed at this approval gate. **Next: CP8 — Implementation Scope Lock.**

## KG Audit — CP8 — Implementation Scope Lock


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-25


CP8 closes the planning-to-build traceability gate. It adds no new product architecture; it resolves every retained Knots audit action to concrete source ownership, locks the implementation sequence, and defines the validation required before the Knots workstream can close.


### Locked Production Source Scope


Mandatory CP9 production owners are limited to:


- `data/knots.js` — canonical Knot schema cleanup only: remove Search-only `keywords[]`, move `CORE_KNOT_IDS` ownership out, and preserve the approved 10-Knot facts/content;
- `data/knot-guidance.js` — Core registry, static Knots collections, practical task mappings, visible landing tasks, and maintained Search-intent vocabulary;
- `data/reel-guidance.js` — approved Get Your Reel Ready decision knowledge, five-phase workflow guidance, confirmed Line Weight support, Braid-only Backing, Spool guidance, non-blocking Leader Reference, and Ready guidance;
- `search.js` — Knot normalization/matching/scoring/deterministic ranking plus the dedicated Search-intent consumer seam;
- `script.js` — Knots/Reel state, controllers, navigation restoration, Reel Setup migration, completed Reel Setup transient context, and bounded Rig Guide handoff consumption;
- `view-renderer.js` — Knots landing/results/detail structure, disclosure/Reference presentation, shared paged Reference support, explicit instructional-media mount point, and truthful adjacent Guide ownership boundaries;
- `knot-media-renderer.js` — dedicated Knot instructional-media presentation through the explicit Knot Detail integration point;
- `forest-journal.css` — approved Guide-family Knots visuals, interaction states, responsive behavior, Reel workflow/status treatment, References, disclosures, and instructional-media layouts; and
- `tools/validate_repository_integrity.js` — validator reconciliation for the approved Knot/guidance/Reel ownership and schema changes.


The former conditional four-Core local-media write scope is no longer active for Version 1. `images/knots/instructional/<knot-id>/*` and local instructional-state/viewer records are deferred as a future goal. The remaining CP9.6 production target is the approved 10-record external Visual Guide standardization in `data/media.js`; that source edit still requires explicit exact-scope production authorization before implementation. Validator or renderer changes are included only if the actual implementation proves they are required and they receive the applicable authorization.


Read-only dependencies include `data/fish-categories.js`, `data/rigs.js`, `index.html`, `tools/check_external_references.js`, and the directly relevant canonical documentation owners. Current script load order already supports the approved dependency direction and is not redesigned.


### Visual + Interaction Implementation Requirement


Visual refinement is a required CP9 deliverable rather than optional CSS polish. The implementation must browser-test and deliver:


- compact Knots Guide identity without decorative motif art; later Dashboard imagery remains owned by the final UX Audit;
- rotating standard-card accents from the shared palette;
- reserved workflow treatment for **Get Your Reel Ready**;
- clear Core/beginner-priority hierarchy independent of any one accent color;
- lighter non-pill action treatment plus whole-card hover, focus-visible, pressed/touch, keyboard, and responsive-wrap behavior;
- live Search/control/result-card visual refinement;
- upgraded Knot Detail hierarchy, disclosures, adjacent-`ⓘ` Reference interaction, and instructional-media integration;
- upgraded Get Your Reel Ready status/progress/Reference/semantic line-system visuals; and
- phone, intermediate/tablet, and full-desktop visual validation.


Instructional visuals remain instructional rather than decorative: phone-readable and technically unambiguous geometry, accessible color/non-color distinctions when identity depends on styling, no gratuitous effects, no autoplay, and reduced-motion-safe behavior if motion is later justified. Rights-qualified reused assets may retain their source style when they satisfy the approved technical/readability standard.


### CP9.6 Instructional-Media Direction


The former four-Core local instructional prototype is deferred from Version 1. Locally hosted Knot images remain a future project goal and no local asset, local viewer, or six-Knot local-media expansion is required for the current Knots milestone.


The approved CP9.6 Version 1 direction is to standardize all 10 canonical Knots on **101Knots** as the preferred linked external **Visual Guide** provider while keeping FCC canonical `tyingSteps[]` authoritative. The provider change is approved in direction but remains a pending production source edit until exact-scope authorization is given.


### CP9 Implementation Sequence


1. **CP9.1 — Structural / Data / Search Foundation:** `data/knots.js` → `data/knot-guidance.js` → `search.js` → direct Knots `script.js` consumers → `tools/validate_repository_integrity.js`.
2. **CP9.2 — Landing / Browse / Visual Treatment + Interaction Effects:** landing hierarchy, Search, browse/results, card accents, workflow/priority treatments, interaction states, responsive visual density, query/scroll restoration, and no decorative Guide-identity art in the current build.
3. **CP9.3 — Knot Detail + Reference + Media Integration:** detail structure, disclosures, adjacent-`ⓘ` Reference behavior, explicit instructional-media mount point, and protected external baseline.
4. **CP9.4 — Get Your Reel Ready Migration:** coordinated `data/reel-guidance.js` + `script.js` workflow migration, References, Line Weight, Equipment, Braid Backing, Spool, five-phase progress, Ready, and responsive status/semantic visuals.
5. **CP9.5 — Ready → Rig Guide Handoff:** transient completed Reel Setup context and noninteractive **Your Reel Setup** Rig landing summary without filtering/ranking/auto-selection.
6. **CP9.6 — External Visual Guide Standardization / Local-Media Deferral:** implement and validate the approved 10-Knot 101Knots external Visual Guide map after exact-scope production authorization; locally hosted Knot instructional media remains a future goal.
7. **CP9.7 — Full Validation + Review Package:** browser/accessibility/regression validation, documentation reconciliation, and cumulative review-package preparation.


### CP9.2 Implementation Result


**Status:** CLOSED / PASS — R4 USER-APPROVED — 2026-09-25


The approved CP9.2 result is the R4 candidate (`FCC-49I-Knots-Guide-CP9.2-R4-Cumulative-Review.zip`, SHA-256 `c23ff1f233314ebe8de39d9eea6468f7f150c0ed26edd524faa325ba84b44e97`). The approved production state includes the **Knots Guide** Dashboard rename, Dashboard-derived two-sided Core/important accent treatment while preserving rotating standard accents, consistent phone placement of task actions beneath titles, the approved landing/Search/browse/result interaction behavior, and removal of decorative Knot identity art. Decorative Dashboard Guide-card imagery remains deferred to the final UX Audit; Reference Knowledge cards remain undecorated by default unless separately approved later.


### CP9.3A / CP9.3B Implementation Result

**Status:** CP9.3A CLOSED / PASS; CP9.3B CLOSED / PASS — 2026-09-25

CP9.3A establishes the approved Knot Detail teaching hierarchy and state-preserving related-navigation behavior. CP9.3B completes the adjacent-`ⓘ` Line Compatibility Reference treatment: canonical compatible line types are stacked one per row, each `ⓘ` is the only Reference trigger and opens only its exact line type, the line label remains static, and the contextual Reference surface closes back to the same trigger without disturbing Knot Detail state. The R1 three-page Line Type experiment proved that multi-page contextual Reference is technically viable, but that pager was removed from this exact-term context because it diluted the adjacent-Reference semantics.

The approved CP9.3B R2 candidate is `FCC-49J-B-Knots-Guide-CP9.3B-R2-Cumulative-Review.zip`, SHA-256 `029c09529447195bfbf4adb5335dbc125acb36d5d3a8e9bb5f866c8c17e593f0`. Approved production hashes are `view-renderer.js` `d4a6f813b9aff57b250bd77ca9aacbfd115ec62825183bd919c425db73dd7501`, `script.js` `160d7aece45b3c3d86531a5900019924b2f1dd113b7beb1350c08ecf0c6d3a70`, and `forest-journal.css` `55cdae1143eb8087784875bc6a1cbdffb4a54b46a59f5e9297d306bdeb3bb387`.

Final repository closeout landed the bounded four-file convergence commit `08cb6f700f33d6bb947bf711d683d584914d25c1` (`FCC 49J - CP9.3B closeout convergence`) exactly one commit after `8f4c90c62150cfbb575ae50602306b0b9ca0bf25`. Its scope is only `data/regulations.js`, this workstream file, `docs/UI_STANDARD.md`, and the active Knots audit. Repository Integrity run `36213834459` PASS and Pages run `36213833502` PASS. CP9.3B is therefore repository-validated and closed.

### CP9.3C Implementation Result

**Status:** CLOSED / PASS — USER APPROVED / PROMOTED / REPOSITORY VALIDATED — 2026-09-26

CP9.3C converts the protected external instructional baseline into an explicit renderer-owned integration inside **HOW TO TIE IT**. `view-renderer.js` owns the media mount and teaching structure; `knot-media-renderer.js` owns only instructional-media presentation and no longer wraps or reassigns the Knot Detail renderer.

The approved R3 treatment keeps **Visual Guide**, the medium chip, restrained provider attribution, and the neutral external action together inside one bordered instructional container. **Numbered Tying Steps** remains outside that container as the handoff into canonical `tyingSteps[]`. External actions retain the medium-specific labels owned by `data/media.js` and use `↗`; the verbose external-instruction explanatory note is not used. The normal sticky breadcrumb surface is preserved for ordinary Knot origins, while Task-origin Knot Detail navigation receives the approved compact stacked panel only at narrow widths so long Task labels remain readable without changing return behavior.

The approved R3 candidate is `FCC-49J-C-Knots-Guide-CP9.3C-R3-Cumulative-Review.zip`, SHA-256 `15de41068ff4f948151fb9242b092f5b21c54d6b9faded73ed242d3b20e0ea89`. Approved/promoted production hashes are `view-renderer.js` `4440a8f356773cc7881788329a1208fc33ac3992ff75af6310b38a39ef930423`, `knot-media-renderer.js` `2cfef62675b3ae0544365b8a02cc624c17966e2d1f0502daba2afc5e2c702417`, and `forest-journal.css` `4f7e087b984774d44d298cb3fd5d9234cb4ac265fd44f3e3ea837437b64cc335`. `data/media.js` remains unchanged. The four-Core FCC-owned instructional prototype remains CP9.6. Repository closeout landed as GitHub `main` commit `875afc088fe787e4d6954bd6f7f39da65ee3e226` (`FCC 49J-C - CP9.3C external Visual Guide integration`), exactly one commit after `ab100b74494a2656ae1e8ee58111797b622f8edd`, with exactly the approved five modified paths and no deletions. Repository Integrity run `36219415290` PASS and Pages run `36219415012` PASS. GitHub/Drive convergence PASS for all five paths; `knot-media-renderer.js` differs only by Git LF normalization versus Drive CRLF and is normalized-content identical. CP9.3C is CLOSED / PASS and CP9.4 — Get Your Reel Ready Migration is unblocked.

### Validation Lock


CP9 closure requires, at minimum, deterministic Knot Search regression and scoped-result isolation; exact 10-Knot/4-Core inventory; zero canonical Search-only `keywords[]`; exact landing task/collection inventory; Reel Type × Line Type × target/path matrices; all four Ready completion paths; Restart/Exit and Knot-excursion state/focus restoration; Ready → Rig context persistence without recommendation side effects; phone/intermediate/full-desktop browser review; keyboard/touch/focus/accessibility review; external instructional-link verification; technical geometry/sequence/final-state validation for any local Core media; and the repository integrity validator.


Commit/push remains separately authorized after user review.


### Planning-to-Build Result


CP8 approval closes planning/discovery scope, but this gate does not itself perform production writes. Exact first production action is CP9.1 from fresh Drive Current source versions. The user has chosen a new chat for the implementation gate.


# Beginner Line Guidance Boundary


Reel & Line Setup owns enough line-selection guidance to get a beginner fishable.


It may provide:


- target-species starting line type,
- starting pound-test range,
- a simple beginner choice where appropriate,
- concise reasoning,
- limitations and situations where heavier/lighter line may be needed.


It does not own full fishing optimization by lure, cover, technique, abrasion, sensitivity, depth, or presentation. Those decisions remain future recommendation/Technique knowledge.


# How to Read Your Reel


Version 1 includes a small beginner section explaining how to interpret reel line-capacity markings.


It should teach:


- where line-capacity markings are commonly found,
- how to identify `lb`, `yd`, `m`, `mm`, Mono, and Braid labels,
- that pound-test indicates line strength while yards/meters indicate approximate capacity for the corresponding diameter,
- that manufacturer label order may vary and printed units must be read rather than assumed,
- that model/size numbers such as 1000, 2500, 3000, or 4000 are not direct pound-test ratings,
- how to compare the user-confirmed Line Type and Line Weight with the reel capacity and rod line-rating markings on the equipment they actually own,
- that manufacturer/equipment markings are the final guide because FCC does not collect enough model-specific information to make a compatibility PASS/FAIL judgment.


A simple labeled reel/spool diagram should support this explanation.


# Reel-Specific Scope Boundary


Spinning, Spincast, and Baitcasting receive complete line-installation/replacement guidance appropriate to their design.


Baitcasting scope covers correct spooling only. Detailed brake tuning, spool-tension tuning, backlash prevention, lure-weight configuration, and casting instruction are outside this workflow.


Fly reels and fly-line-specific setup remain Parking Lot for Version 1.


# Approved Backing Model


Backing is **conditional by selected Line Type**, with actual reel/spool manufacturer guidance controlling the direct-Braid exception.


Version 1 uses this beginner path:


- **Monofilament:** no Backing Decision screen; proceed directly to spool connection.
- **Fluorocarbon:** no Backing Decision screen; proceed directly to spool connection.
- **Braid:** open **Decide on Backing**.
  - **Monofilament Backing — Recommended First Setup** is the default beginner path.
  - **Direct Braid — Manufacturer Supported** is available only when the exact reel/spool explicitly supports secure direct-braid attachment.


FCC intentionally does not surface optional/economy backing under Monofilament or Fluorocarbon in the Version 1 beginner workflow. The purpose of the Backing branch is to solve the practical Braid spool-grip decision, not to expose every valid spool-filling technique.


The line system should still be taught visually as appropriate to the chosen path, and the **Spincast + Braid** warning remains informational and non-blocking.


# Rig → Knot Relationship Ownership — Settled


Rig owns contextual Rig-to-Knot recommendations through `Rig.knotApplications[]`. Knot does not store inverse Rig relationship arrays. Knot Detail **Where You'll Use It** derives reverse usage from active Rig Knot applications. Canonical Knot tying instructions remain Knot-owned; Rig notes contain only connection-specific context.


The current production relationship contract and research/source-validation standard are already approved and validated. They are not open Knots planning decisions.


# Planning-to-Build Gate


**CP8 is CLOSED / APPROVED / REFINEMENT ALLOWED.** Exact production ownership, validation, visual/interaction requirements, conditional instructional-media prototype scope, and the CP9 implementation sequence are locked above.


No production source/data/media/config change occurred during CP8 documentation closeout. Production implementation resumes at **CP9.1 — Structural / Data / Search Foundation** from fresh Drive Current source versions in a new implementation chat. Commit/push remains separately authorized after review.


# Related Documents


- `../PROJECT.md`
- `../ROADMAP.md`
- `../HANDOFF.md`
- `../ARCHITECTURE.md`
- `../DECISIONS.md`
- `../MEDIA_GUIDE.md`
- `../data-model/04-KNOTS.md`
- `../data-model/09-RELATIONSHIPS.md`