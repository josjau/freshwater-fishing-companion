# Freshwater Fishing Companion — Knot Guide


**Document:** KNOT-GUIDE.md  
**Document Revision:** 0.3.29  
**Document Status:** Approved Planning / In Progress  
**Milestone:** Knots  
**Last Updated:** 2026-09-25


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


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-22


The current verified external instructional-media coverage for all 10 active Version 1 Knots is the **known-working baseline** and remains approved/retained. CP5 does not demote, delete, replace, or redesign away from those sources merely because a first-party FCC treatment is preferred conceptually.


FCC-owned step-through instructional diagrams are the **preferred candidate enhancement**, not an approved replacement. They may become the primary Knot teaching treatment only after a bounded prototype proves that the approach can be produced accurately and maintained without weakening the current instruction path. Existing external instructional media must remain available unless and until a replacement treatment is explicitly validated and approved.


The prototype set is the four current Core Knots because together they exercise materially different instructional geometry:


- **Arbor Knot** — reel-spool attachment,
- **Improved Clinch Knot** — wrapping, threading, and tightening,
- **Palomar Knot** — doubled line and loop-over-terminal geometry,
- **Double Uni Knot** — two-line geometry and opposing knots.


The prototype is **BUILD TEST REQUIRED** and must prove, at minimum:


- technically correct Knot geometry and sequence,
- beginner clarity without relying on prior Knot knowledge,
- realistic phone readability,
- natural synchronization with authoritative `tyingSteps[]`,
- usable previous/next or equivalent user-controlled step navigation,
- acceptable code/media complexity and maintenance cost,
- a visual/technical system that can plausibly scale beyond the prototype set.


`tyingSteps[]` remains the authoritative in-app instruction. Candidate FCC visuals illustrate those canonical steps; they do not become a second independent source of tying facts.


Actual transition animation is **not a Version 1 dependency at this gate**. The validation sequence is: prove accurate static instructional states → prove the user-controlled step-through presentation → add motion only if it materially improves understanding. Any later motion must remain user-controlled, must not autoplay, must support reduced-motion preferences, and must preserve a clear static final-Knot state.


Prototype outcomes are intentionally non-destructive:


- if the full step-through approach passes, it may be proposed for promotion to the primary FCC Knot teaching treatment;
- if static FCC diagrams work but the step-through viewer does not justify its complexity, static diagrams plus canonical numbered text may be retained as the candidate improvement;
- if the FCC-owned approach does not meet the validation bar, Version 1 retains the existing verified external instructional-media model with authoritative in-app `tyingSteps[]`.


This safety gate supersedes any interpretation of earlier media-planning language that would require replacing the existing external instructional baseline before the FCC-owned treatment is proven.


## CP5.2 — FCC Diagram / Step-Through Model


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-23


CP5.2 defines the candidate first-party teaching model only. It does **not** create actual Knot images, change production source, or choose final media-file packaging.


The approved candidate model is a user-controlled **static instructional-state viewer** synchronized to the authoritative `tyingSteps[]`. `tyingSteps[]` teaches the Knot; FCC-owned visuals illustrate those canonical instructions and do not create an independent instructional sequence.


The default prototype relationship is **one canonical tying step → one visual instructional state**. This is a prototype default rather than a permanent schema constraint. If a canonical step cannot be illustrated clearly in one state, the prototype must first challenge whether the canonical written step itself should be improved or split. Multiple visual states for one canonical step require demonstrated instructional need rather than preemptive architecture.


The candidate viewer presents:


- the current instructional visual state,
- **Step N of M** derived from canonical array position/length,
- the corresponding canonical `tyingSteps[]` instruction,
- user-controlled **Previous** / **Next** navigation or an equivalent accessible control,
- the complete normal numbered `tyingSteps[]` sequence outside the viewer as the dependable text/reference path.


The viewer therefore enhances the normal teaching path without becoming a dependency for reading the instructions. If the viewer, JavaScript, or candidate FCC visual is unavailable or rejected, the complete authoritative numbered text remains usable.


The final canonical tying step normally produces the completed-Knot visual state. Do not add an artificial extra **Finished Knot** numbered step solely to satisfy the media system. **CHECK YOUR KNOT** remains the next primary section and owns the user's verification of the completed Knot.


CP5.2 does **not** convert `tyingSteps[]` from strings to step objects, add stable step IDs, or add a separate media-authored step count. Any such schema change requires demonstrated prototype need such as durable multi-state-per-step relationships, step-specific deep linking, or another proven requirement. Visible numbering remains derived.


The candidate instructional unit is an accurate **static SVG-based instructional state**. CP5.2 does not decide whether production ultimately uses separate SVGs, one multi-state SVG, grouped SVG layers, or another maintainable packaging method; CP5.4 owns that technical production decision after the visual grammar is settled. Transition animation remains optional under CP5.1.


The four-Core-Knot prototype continues to challenge whether this same model remains understandable across materially different geometry: Arbor Knot, Improved Clinch Knot, Palomar Knot, and Double Uni Knot. The prototype must validate the shared teaching model rather than merely prove that four attractive diagrams can be drawn.


## CP5.3 — Visual Grammar


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-23


CP5.3 defines the shared visual language for the candidate FCC-owned static instructional states. It remains parameter/design work only; **no actual Knot prototype images are produced at this gate**.


The approved grammar is phone-first, vector-based, and centered on unambiguous fishing-line geometry rather than decorative realism. Fishing line should use clean solid strokes, rounded joins/ends, adequate separation between wraps, and enough visual weight to remain readable on a phone without pinch-zoom. Photorealistic texture, unnecessary shadowing, and decorative effects are not part of the instructional grammar.


For one continuous piece of line, standing line and tag end retain the same underlying line treatment so the diagram does not falsely imply different materials. Where distinction is needed, use concise labels such as **Standing line** and **Tag end** and/or compatible endpoint cues.


When a Knot genuinely uses two independent lines, the lines may use different colors, but those colors must come from a **colorblind-friendly instructional palette**. Color is always secondary reinforcement: labels, endpoint markers, geometry, position, or another non-color cue must preserve the distinction in grayscale and for users with color-vision deficiency. Dashed line treatment is not used merely to distinguish lines because it can imply hidden geometry or motion. Instructional colors remain semantically separate from rotating Guide-card accents or other decorative theme colors.


Every meaningful crossing must unambiguously communicate which segment passes over and which passes under. The preferred visual treatment keeps the upper segment continuous and gives the lower segment a small visual break/knockout at the crossing. If over/under geometry cannot be read confidently at phone size, the instructional state fails validation. Relevant loops/openings must likewise remain visually distinct, adequately spaced, and unobstructed by labels.


Each state distinguishes **completed/current geometry** from **the action the user should perform**. Restrained direction arrows, short ghosted paths, or local emphasis may show where a tag end travels. Pull/tighten cues should be distinguishable from threading/direction cues. Repeated wraps normally use one dominant directional cue plus the visible completed wraps rather than a clutter of redundant arrows. If a state requires many competing action cues, the prototype must challenge the step wording or composition before adding visual complexity.


Hooks, swivels, lure eyes, and reel spools use simplified recognizable geometry showing only the hardware needed to understand the Knot. Accuracy controls the amount of detail: if hardware shape materially affects the tying action, enough geometry must be shown to make the instruction correct. Hands/fingers are excluded from the default grammar; they may be considered only if a specific tying action later demonstrates a real need that cannot be explained clearly through line/hardware geometry or supplemental instruction.


Labels remain sparse. Appropriate labels include standing line, tag end, Line A/Line B where genuinely useful, or a specific loop/opening when otherwise ambiguous. The SVG does **not** duplicate the full canonical tying instruction; `tyingSteps[]` remains the textual teaching authority outside the visual.


The diagram system should be theme-aware through semantic visual roles such as instructional line, secondary line, hardware, direction cue, annotation, and diagram surface/background rather than separate independently authored light/dark geometry. Exact implementation is deferred, but the same geometry must remain legible across supported FCC themes and contrast conditions.


Composition is phone-first but Knot orientation is flexible. Improved Clinch may read best vertically, Double Uni may require opposing horizontal geometry, and Arbor may be dominated by spool shape. The viewer component stays consistent while each Knot uses the orientation that best preserves instructional clarity. Desktop may enlarge/reflow the presentation but must not expose essential information unavailable on mobile.


Technical correctness outranks visual polish. Prototype validation must inspect wrap count, threading path, every over/under crossing, loop identity, action direction, hardware relationship, tightening/final geometry, and agreement with canonical `tyingSteps[]`. A visually attractive but ambiguous or incorrect state is a failed instructional state.


## CP5.4 — Production + Technical Validation Workflow


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-23


CP5.4 defines how the bounded four-Core-Knot prototype is sourced, constructed, validated, rejected/reworked, and evaluated. It does **not** yet produce the prototype assets, promote FCC-owned media over the retained external baseline, or make one prototype packaging choice permanent for all Version 1 Knots.


Prototype production uses a **reuse-first, custom-build fallback** sequence. For each of Arbor Knot, Improved Clinch Knot, Palomar Knot, and Double Uni Knot, first search for technically suitable instructional material with clear reuse rights, preferring public-domain or clearly open-licensed assets. Rights must be verified at the actual asset/source level. A reusable asset may be used directly when it already satisfies FCC requirements, or adapted only when its license explicitly permits modification. Unclear/restrictive rights are treated as reference-only and do not authorize reuse, tracing, frame extraction, close redrawing, or derivative FCC artwork.


Reusable media is not accepted merely because it is legally available. It must also match the approved canonical tying method, align naturally with authoritative `tyingSteps[]`, preserve correct wrap/crossing/threading/hardware geometry, remain readable at phone size, and fit the CP5.3 visual/accessibility grammar. If a reusable source fails any of those requirements, FCC falls back to independently constructed SVG instructional states rather than weakening the instruction model or forcing inconsistent media.


Custom FCC states may be AI-assisted in the sense that tooling may help author SVG paths/shapes, but **AI-generated imagery is not an authority for Knot geometry**. Generated images cannot establish or validate line paths, crossings, wrap counts, loop identity, or final Knot structure and are not traced into production SVGs. Custom geometry is deliberately constructed from verified Knot instructions/reference facts and then technically validated. Third-party instructional art may inform factual understanding where permitted, but FCC does not trace or reproduce the source's expressive artwork/layout.


For the four-Knot prototype, the default packaging is **one independently inspectable SVG per instructional state**. This keeps each state easy to review, replace, diff, render, and test without dynamic SVG scripting, canvas drawing, generated path JSON, hidden-layer animation systems, or another premature media architecture. One-SVG-per-state is a prototype packaging choice, not a permanent ten-Knot architecture lock; CP8 may retain or refine it after evidence from the prototype.


Technical validation occurs at three levels. **State validation** checks source alignment, canonical-step alignment, every meaningful over/under crossing, wrap count where significant, threading path/opening, line identity, direction/pull cue, hardware relationship, phone readability, color independence, and final-state accuracy. **Sequence validation** confirms a beginner can move from State N to State N+1 using the corresponding canonical instruction without an unexplained geometric operation. **Finished-Knot validation** compares the final state against the verified method for correct structure, exits, wraps, hardware relationship, dressing, and seating.


A state is rejected/reworked when geometry is wrong or ambiguous, wraps visually merge, the relevant opening is unclear, motion/direction cues can be misread, mobile rendering loses instructional information, color carries meaning alone, the state conflicts with `tyingSteps[]`, or the transition from the prior state silently requires expert inference. Technical correctness and beginner clarity outrank sunk production effort or visual polish.


Prototype execution is progressive: **Improved Clinch → Palomar → Double Uni → Arbor**. Improved Clinch first tests the basic line/hardware/wrap/thread model; Palomar adds doubled-line/loop-over-terminal geometry; Double Uni stresses two independent lines and opposing knots; Arbor then challenges reel-spool geometry. The candidate FCC-owned treatment is not promoted because one easy Knot succeeds. Promotion requires successful validation across the complete four-Knot prototype and a later explicit approval. Partial success may justify static FCC diagrams without the viewer; failure retains the known-working external instructional model.


## CP5.5 — External Supplemental Instruction


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-23


Verified external instructional destinations remain part of **HOW TO TIE IT** because they are teaching resources rather than mere citations. They are not moved into **MORE HELP** or **Sources & References** merely because FCC-owned instruction is being evaluated. Before an FCC-owned treatment is validated and explicitly promoted, the current verified external destination remains the established visual-learning option and must not be visually demoted.


If the four-Knot FCC prototype later passes and a subsequent explicit approval promotes FCC-owned instruction, the external resource may become secondary **More visual instruction** and remains protected through the prototype/replacement evaluation. CP5.7 refines this point: permanent retention is not mandatory when later browser evidence shows the replacement is complete and the external destination adds no material teaching value. The exact placement, retention, or removal of the supplemental action after a proven replacement remains **BUILD TEST REQUIRED** rather than a pre-implementation mandate.


External actions use medium-specific beginner-facing labels rather than generic **Learn More** wording. Approved examples include **View step-by-step animation ↗**, **View illustrated instructions ↗**, and **View interactive 3D instructions ↗**, with restrained provider attribution. The Guide uses `↗` for external destinations and preserves `→` for FCC-internal navigation.


Third-party supplemental instruction remains linked rather than copied, scraped, rehosted, frame-extracted, or reproduced inside FCC unless separate CP5.4 rights/provenance review establishes that a particular asset may legally and technically be incorporated into the FCC-owned treatment. A public-domain/open-license asset actually incorporated under CP5.4 is treated as part of the local FCC instructional treatment, not as an external supplemental link.


Version 1 defaults to **one preferred supplemental external instructional destination per Knot**. Additional destinations require a materially distinct instructional benefit rather than simple resource abundance. Supporting/research sources that are not the selected teaching destination remain available through **Sources & References** as appropriate.


External-resource failure must never make the canonical Knot instruction unusable. `tyingSteps[]` remains readable, any valid FCC-owned media remains available, and active external destinations are verified during implementation/browser validation. External navigation should preserve the user's FCC Knot/detail context so returning does not require rediscovering the Knot; if a step-through viewer is active, current viewer state should also be preserved where practical.


## CP5.6 — Responsive Instructional Presentation


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-23


FCC Knot instruction uses one semantic teaching hierarchy across phone, intermediate/tablet, and desktop. Screen size may change spatial arrangement, but it does not change instructional priority, control meaning, or the information available to the user. No essential instruction may become desktop-only.


Phone is the authoritative composition. The default single-column flow is instructional visual → **Step N of M** → corresponding canonical current-step text → visible **Previous / Next** controls → complete normal numbered `tyingSteps[]` → retained supplemental external instruction → **CHECK YOUR KNOT**. The exact position of supplemental external instruction relative to the complete numbered steps remains the CP5.5 **BUILD TEST REQUIRED** placement experiment. Phone presentation must not require horizontal scrolling, pinch-zoom, or side-by-side reading to understand the Knot.


Viewer controls retain the same meaning at every viewport. Previous/Next remain explicit discoverable controls; swipe may be added only as an optional enhancement. Previous is unavailable at the first state and Next is unavailable at the final state rather than changing into unrelated page navigation. `Step N of M` remains visibly associated with the current visual/instruction. Keyboard/touch focus must remain predictable, and a state change must not unexpectedly move focus.


Intermediate/tablet layouts remain stacked by default and gain usable visual/text space before gaining columns. Do not introduce a two-column treatment merely because width permits it. Use the shared FCC responsive breakpoint system unless prototype evidence demonstrates a concrete Knot-specific failure.


Desktop must browser-test at least two treatments: a centered stacked teaching flow and a sufficiently wide side-by-side viewer/reference treatment. A two-column desktop layout is not pre-approved. Whichever treatment wins must preserve the same teaching hierarchy as phone, avoid desktop-only labels/arrows/explanation, keep the instructional visual within sensible maximum bounds, and remain comfortable for materially different Knot orientations.


Knot orientation remains flexible under CP5.3, so the viewer cannot depend on one fixed image aspect ratio. SVG states use their own `viewBox` within a consistent instructional surface. The component should maintain reasonably stable visual/control geometry across a Knot sequence so state changes do not create disruptive page jumps, while avoiding cropping or distortion merely to force identical dimensions.


The complete numbered `tyingSteps[]` remains ordinary accessible document content: vertically flowing, readable, selectable/copyable, and not hidden behind a carousel/accordion or made horizontally scrollable because the viewer exists. The current viewer step may receive subtle non-color-only emphasis in the full list, but the list remains non-interactive for the initial prototype unless later evidence justifies click-to-jump behavior.


Responsive validation must explicitly stress-test **Double Uni Knot** and **Arbor Knot** in addition to the basic Improved Clinch flow because their opposing-line and reel-spool geometry are most likely to expose layout failures. Exact breakpoint values, maximum visual dimensions, desktop winner, and supplemental-link placement remain CP9 browser-validation decisions rather than discovery locks.


## CP5.7 — V1 Coverage / Build Requirement


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-23


CP5.7 deliberately does **not** predeclare one final instructional-media treatment as mandatory across all 10 active Version 1 Knots. The current working Knot Detail/instructional experience is the implementation starting baseline and should be refined against the approved Guide-family structure rather than replaced simply because CP5 explored a new media concept.


The four Core Knots remain the bounded implementation prototype for reusable/open media discovery, FCC-authored SVG states, static instructional presentation, and the user-controlled step-through concept. The prototype is an evidence test, not a requirement to prove the viewer architecture. Browser/technical review may conclude that the viewer works well, that static diagrams are clearer, that a hybrid with external instruction is preferable, that different Knot geometries justify different treatments, or that the current layout needs only modest refinement.


The remaining six Knots do not receive a mandatory FCC-owned media requirement before the Core prototype verdict. If prototype evidence establishes a reusable treatment that materially improves instruction, expansion may be proposed and approved. If different Knot geometries are better served by different media treatments, that variation is allowed so long as the overall **HOW TO TIE IT** experience remains coherent, complete, technically correct, accessible, and responsive.


The verified external instructional baseline remains protected during testing so FCC does not regress from a known-working experience. CP5.7 refines CP5.5: permanent retention of every external instructional destination is **not** mandatory regardless of outcome. After a replacement has actually been implemented and validated, placement, continued retention, or removal of an external destination remains refinement-allowed and evidence-driven. Until then, it remains available as the safe baseline/supplemental instruction.


Hard closure requirements are limited to outcome quality rather than one predetermined media architecture: instruction must be complete and technically correct; implementation must not regress from the known-working baseline; incomplete/partial local media sequences are not treated as finished; phone/desktop presentation must be accessible and responsive; and the final treatment must pass the applicable technical/browser validation. `tyingSteps[]` remains the authoritative textual instruction unless implementation evidence demonstrates a separate approved need to revise the canonical steps themselves.


CP8 must therefore lock **known implementation work plus explicit build-test decision gates**, not assume their results. Known scope includes Guide-baseline Knot Detail refinement, preservation/verification of the existing instructional path, the four-Core prototype, and responsive/technical validation. CP9 resolves viewer vs static vs hybrid treatment, exact media/layout behavior, external-media placement/retention, whether the treatment should expand beyond Core, and any justified per-Knot variation. No production implementation begins before CP8 locks exact source ownership and validation methods.


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


Version 1 preserves a compact **transient completed Reel Setup context** containing only downstream-useful facts: Reel Type, Target Fish / All-Around target, Line Type, confirmed Line Weight, and Backing method only when applicable. Entry/start mode, obsolete Equipment compatibility state, Leader state, obsolete step IDs, and other UI-only workflow state do not carry forward. This context is runtime/session-only: it survives the handoff into Rig Guide and normal Rig browse/search/detail navigation during that setup journey, clears when a new Reel Setup is deliberately started/restarted, is not persistent User Knowledge/account storage, and does not need to survive a full page/browser reload. Exact property names and technical structure are deferred to CP7/CP8.


When Rig Guide is entered from completed Reel Setup, it visibly acknowledges the carried context with a compact noninteractive **Your Reel Setup** summary. That context does **not** automatically select, hide, filter, rank, or declare Rigs compatible/incompatible and does not turn Rig Guide into a recommendation engine. Target is preserved because it is valuable downstream context even though CP6.6 does not use it to rank Rigs. Completed line-system context may later support contextual Rig/Leader guidance when the actual Rig/presentation provides enough information, but no generic Leader recommendation is added to the Rig Guide landing page.


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


Conditional CP9 prototype write scope is limited to `data/media.js` plus `images/knots/instructional/<knot-id>/*.svg` when a reusable/open or FCC-authored instructional state is actually accepted into the bounded four-Core-Knot prototype. No placeholder SVG inventory is authorized.


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


Instructional diagrams remain instructional rather than decorative: clean phone-first geometry, useful direction/emphasis cues, accessible color/non-color distinctions, no gratuitous effects, no autoplay, and reduced-motion-safe behavior if motion is later justified.


### Four-Core Instructional Prototype Scope


The bounded prototype remains **Improved Clinch → Palomar → Double Uni → Arbor**. The default candidate is one inspectable SVG state per canonical `tyingSteps[]` step, with the canonical text remaining authoritative. If a local instructional state is accepted into production, Media owns the attachment using the approved Knot owner plus an instructional-state role and a zero-based canonical step index. The existing verified external instructional baseline for all 10 Knots remains protected through the prototype verdict.


### CP9 Implementation Sequence


1. **CP9.1 — Structural / Data / Search Foundation:** `data/knots.js` → `data/knot-guidance.js` → `search.js` → direct Knots `script.js` consumers → `tools/validate_repository_integrity.js`.
2. **CP9.2 — Landing / Browse / Visual Treatment + Interaction Effects:** landing hierarchy, Search, browse/results, card accents, workflow/priority treatments, interaction states, responsive visual density, query/scroll restoration, and no decorative Guide-identity art in the current build.
3. **CP9.3 — Knot Detail + Reference + Media Integration:** detail structure, disclosures, adjacent-`ⓘ` Reference behavior, explicit instructional-media mount point, and protected external baseline.
4. **CP9.4 — Get Your Reel Ready Migration:** coordinated `data/reel-guidance.js` + `script.js` workflow migration, References, Line Weight, Equipment, Braid Backing, Spool, five-phase progress, Ready, and responsive status/semantic visuals.
5. **CP9.5 — Ready → Rig Guide Handoff:** transient completed Reel Setup context and noninteractive **Your Reel Setup** Rig landing summary without filtering/ranking/auto-selection.
6. **CP9.6 — Four-Core Instructional Prototype:** progressive reuse-first/custom-build evaluation and explicit treatment verdict.
7. **CP9.7 — Full Validation + Review Package:** browser/accessibility/regression validation, documentation reconciliation, and cumulative review-package preparation.


### CP9.2 Implementation Result


**Status:** CLOSED / PASS — R4 USER-APPROVED — 2026-09-25


The approved CP9.2 result is the R4 candidate (`FCC-49I-Knots-Guide-CP9.2-R4-Cumulative-Review.zip`, SHA-256 `c23ff1f233314ebe8de39d9eea6468f7f150c0ed26edd524faa325ba84b44e97`). The approved production state includes the **Knots Guide** Dashboard rename, Dashboard-derived two-sided Core/important accent treatment while preserving rotating standard accents, consistent phone placement of task actions beneath titles, the approved landing/Search/browse/result interaction behavior, and removal of decorative Knot identity art. Decorative Dashboard Guide-card imagery remains deferred to the final UX Audit; Reference Knowledge cards remain undecorated by default unless separately approved later.


### CP9.3A / CP9.3B Implementation Result

**Status:** CP9.3A CLOSED / PASS; CP9.3B USER-APPROVED / PROMOTED — 2026-09-25

CP9.3A establishes the approved Knot Detail teaching hierarchy and state-preserving related-navigation behavior. CP9.3B completes the adjacent-`ⓘ` Line Compatibility Reference treatment: canonical compatible line types are stacked one per row, each `ⓘ` is the only Reference trigger and opens only its exact line type, the line label remains static, and the contextual Reference surface closes back to the same trigger without disturbing Knot Detail state. The R1 three-page Line Type experiment proved that multi-page contextual Reference is technically viable, but that pager was removed from this exact-term context because it diluted the adjacent-Reference semantics.

The approved CP9.3B R2 candidate is `FCC-49J-B-Knots-Guide-CP9.3B-R2-Cumulative-Review.zip`, SHA-256 `029c09529447195bfbf4adb5335dbc125acb36d5d3a8e9bb5f866c8c17e593f0`. Approved production hashes are `view-renderer.js` `d4a6f813b9aff57b250bd77ca9aacbfd115ec62825183bd919c425db73dd7501`, `script.js` `160d7aece45b3c3d86531a5900019924b2f1dd113b7beb1350c08ecf0c6d3a70`, and `forest-journal.css` `55cdae1143eb8087784875bc6a1cbdffb4a54b46a59f5e9297d306bdeb3bb387`.

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