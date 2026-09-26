# Freshwater Fishing Companion — Knots Guide V1 Refinement Audit


**Document:** KNOTS-GUIDE-V1-REFINEMENT-AUDIT.md    
**Document Status:** TEMPORARY ACTIVE AUDIT / IMPLEMENTATION TRACEABILITY OWNER    
**Workstream:** FCC 49 — Knots Guide — V1 Refinement    
**Checkpoint Namespace:** KG Audit — CP#    
**Created:** 2026-09-21    
**Retirement Rule:** Retire/delete after Knots Guide implementation, browser validation, canonical-owner reconciliation, commit/CI verification, and final closeout. Durable rules must be promoted to their permanent canonical owners before retirement.


# Purpose


This file is the temporary active owner for Knots Guide discovery-to-build traceability. It exists so approved audit findings do not depend on chat memory and cannot disappear between discovery, implementation, browser review, and closeout.


Fish Guide is the structural/interaction baseline for the Guide family. Knots may deliberately differ where Knot-specific semantics require it. Missing or newly discovered Guide-family requirements are tracked here as explicit actions rather than silently deferred.


# Required Dispositions


Every actionable audit finding receives exactly one current disposition:


- **BUILD REQUIRED** — production/source change is required.  
- **BUILD TEST REQUIRED** — implementation/browser experiment is required before the final treatment can close.  
- **VERIFY ONLY** — current implementation appears compliant; implementation phase must verify it remains compliant.  
- **DOC UPDATE** — documentation/process reconciliation is required without a production change.  
- **DEFERRED — <named owner/gate>** — intentionally outside this build, with an explicit future owner.  
- **CLOSED / PASS** — implemented or otherwise resolved and validated.


No item may disappear from this file merely because a discussion moves to another chat.


# Audit Checkpoints


| Checkpoint | Section | Status |  
|---|---|---|  
| KG Audit — CP1 | Knots Guide Landing Page | CLOSED / APPROVED / REFINEMENT ALLOWED |  
| KG Audit — CP2 | Landing Interaction + Responsive Behavior | CLOSED / APPROVED / REFINEMENT ALLOWED |  
| KG Audit — CP3 | Browse / Search Results | CLOSED / APPROVED / REFINEMENT ALLOWED |  
| KG Audit — CP4 | Knot Detail Page | CLOSED / APPROVED / REFINEMENT ALLOWED |  
| KG Audit — CP5 | Instructional Media | CLOSED / APPROVED / REFINEMENT ALLOWED — CP5.1-CP5.7 CLOSED |  
| KG Audit — CP6 | Get Your Reel Ready Workflow | CLOSED / APPROVED / REFINEMENT ALLOWED — CP6.1-CP6.6 CLOSED |  
| KG Audit — CP7 | JavaScript / Data Structural Audit | CLOSED / APPROVED / REFINEMENT ALLOWED — CP7.1-CP7.4 CLOSED |  
| KG Audit — CP8 | Implementation Scope Lock | CLOSED / APPROVED / REFINEMENT ALLOWED — SCOPE LOCK COMPLETE |  
| KG Audit — CP9 | Implementation + Browser Validation | IN PROGRESS — CP9.1 CLOSED / PASS; CP9.2 CLOSED / PASS; CP9.3A CLOSED / PASS; CP9.3B CLOSED / PASS; CP9.3C NEXT |  
| KG Audit — CP10 | Final Refinement + Closeout | NOT STARTED |


# Global Knots Audit Rules


1. **Chat IDs and audit checkpoints are independent.** FCC 49 / FCC 49B / FCC 49C / etc. identify chats only. KG Audit — CP# identifies stable work checkpoints and may span any number of chats.  
2. **Fish Guide is the Guide-family baseline.** Reuse validated Fish structure/interaction where semantics match.  
3. **Do not deliberately build known incompleteness.** If an approved requirement is known during Knots discovery, track and implement/test it in the Knots cycle unless explicitly deferred to a named owner.  
4. **Decorative Guide-identity art is deferred to the final UX audit.** The current Knots build keeps the compact Guide identity without a decorative motif. Dashboard imagery may be prototyped later; do not extend it into Reference Knowledge cards by default.  
5. **Approval-gate batching rule.** Ordinary discussion does not trigger documentation writes. Discussion findings stay in the active conversation until the user gives an explicit approval or explicitly requests an immediate documentation update. At approval, consolidate the approved decisions, discovered defects, build actions, browser experiments, validation results, deferrals, and exact resume point into one bounded documentation pass. If the user asks questions while approving or immediately before approval, answer those questions before starting the documentation gate.  
6. **CP8 is a hard implementation traceability gate.** Production implementation may not begin until every open item has an explicit source owner/file scope and validation method.  
7. **CP10 is a line-by-line closure gate.** Every BUILD REQUIRED / BUILD TEST REQUIRED item must be implemented + validated or explicitly re-dispositioned before Knots can close.
8. **Validated Fish component treatments are inherited explicitly, not from memory.** Every equivalent Knots component must carry the applicable Fish-baseline requirement as an audit/traceability item. For collection/browse cards this includes the approved **Title + `Browse →` heading row, description below, lighter non-pill action, whole-card control, and left-aligned action wrap** unless a documented Knot-specific semantic exception is approved.


# KG Audit — CP1 — Knots Guide Landing Page


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — DISCOVERY COMPLETE / IMPLEMENTATION ITEMS RETAINED


## CP1.1 — Guide Identity / Header


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED


### Locked / Approved


- User-facing Guide name and page heading use **Knots Guide**.  
- Fish Guide remains the structural/interaction baseline.  
- Use a compact Guide identity area rather than a large hero.  
- Do not assign Knots Guide a fixed Guide-specific color.  
- Do not add generic duplicate navigation CTA merely to create activity above Search.  
- Search follows the identity area.  
- Decorative Knot-specific identity art is not required in the current Knots build; final UX Audit owns any later imagery decision.


### Approved Description + Retained Build Refinements


Approved beginner-facing description:


> Learn the essential fishing knots for attaching line to your reel, tying on hooks and lures, connecting lines, and making loop connections.


Refinement remains allowed. The current Knots build uses the compact Guide identity without decorative art. Any later Dashboard/Guide imagery treatment is deferred to the final UX Audit and requires its own visual review before implementation.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |  
|---|---|---|---|---|---|  
| KG-CP1-001 | Use **Knots Guide** consistently for the user-facing Guide/page identity. | BUILD REQUIRED | `view-renderer.js` | Browser review + text/search check | CLOSED / PASS |  
| KG-CP1-002 | Preserve Fish Guide compact Guide-identity structure where semantics match. | BUILD REQUIRED | `view-renderer.js`, `forest-journal.css` | Mobile/intermediate/desktop comparison | CLOSED / PASS |  
| KG-CP1-003 | Keep the current Knots Guide identity free of decorative motif art; defer any later Dashboard/Guide imagery direction to the final UX Audit. | DEFERRED — FINAL UX AUDIT / CURRENT MOTIF REMOVAL | `view-renderer.js`, `forest-journal.css`; `V1-DESIGN-AUDIT.md` future owner | R4 removal check + future UX visual review | CURRENT BUILD CLOSED / FUTURE UX DEFERRED |  
| KG-CP1-004 | Do not add unnecessary generic CTA above Search. | VERIFY ONLY | `view-renderer.js` | Browser review | CLOSED / PASS |


## CP1.2 — Search


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED


### Locked / Approved


- Keep Search immediately after Guide identity as the first functional Knots landing-page element.
- Landing Search covers all active canonical Knots.
- Preserve the existing deterministic Knot search model: canonical name/alias identity, curated Knot-specific keywords, shared task-intent vocabulary, compatible line type, and difficulty all remain valid signals with relevance-first ordering.
- Use **Search Knots** rather than **Search all Knots**; the page scope already establishes that the search covers the Guide.
- Add concise scope helper text: **Search by Knot name, task, line type, or difficulty.**
- Use a short example placeholder such as **Try Palomar, tie hook, braid, or beginner**. Exact maintained examples remain refinement-allowed but must match active scope.
- Guide-family Search is live by default and does not show a visible Search submit button. Enter/mobile Search submission may continue to invoke the same update internally.
- Preserve the explicit one-click clear control, focus return, and no-reload behavior; bring its visual/touch treatment up to the shared Guide baseline.
- Search controls use shared interface/theme styling and do not inherit Fish-specific or fixed Knots-specific color identity.
- Empty landing query shows no result grid/count and restores the normal Knots landing content.
- Active filtering uses a compact scoped result status such as **N knots found**. Normal no-match guidance is **No knots found. Try another search.**
- Search → Knot Detail → Parent must restore the originating landing Search query and scroll position.
- Desktop Search width is **BUILD TEST REQUIRED**: begin from the Fish comparison baseline but do not automatically force Fish's two-card-width constraint onto Knots without browser review.
- Result-card composition/density remains owned by **CP3 — Browse / Search Results** rather than being prematurely resolved here.
- Reel-spooling Search may surface canonical Knot matches now; whether Search also needs a contextual **Get Your Reel Ready** workflow bridge is deferred to **CP1.3**, which owns that workflow.


### Documentation Supersession


Older Knot planning/approval text that requires a visible Search submit action or uses **Search all Knots** predates the current Guide-family Search standard. The current active Knots owner records the approved replacement behavior above. Historical approval records remain preserved as evidence and are not rewritten as if they had originally contained the later standard.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |  
|---|---|---|---|---|---|  
| KG-CP1-005 | Preserve current all-active-Knots deterministic scope/ranking semantics. | VERIFY ONLY | `search.js`, `script.js` | Deterministic query suite + browser spot checks | CLOSED / PASS |  
| KG-CP1-006 | Standardize landing Search label/helper/placeholder for the approved Knots scope. | BUILD REQUIRED | `view-renderer.js`, `script.js` | Browser text/scope review | CLOSED / PASS |  
| KG-CP1-007 | Use live Search with no visible Search submit button while preserving Enter/mobile submit equivalence and one-click clear. | BUILD REQUIRED | `view-renderer.js`, `script.js`, `forest-journal.css` | Keyboard/mobile/browser interaction review | CLOSED / PASS |  
| KG-CP1-008 | Use shared neutral Search styling and bring clear control to the current Guide touch-target/focus baseline. | BUILD REQUIRED | `view-renderer.js`, `forest-journal.css` | Responsive + keyboard/focus review | CLOSED / PASS |  
| KG-CP1-009 | Standardize empty-query, active-result status, and no-match behavior for Knots landing Search. | BUILD REQUIRED | `view-renderer.js`, `script.js` | Browser state matrix + accessibility announcement check | CLOSED / PASS |  
| KG-CP1-010 | Preserve landing Search query + scroll through Search → Knot Detail → Parent. | BUILD REQUIRED | `script.js` | Navigation round-trip review | CLOSED / PASS |  
| KG-CP1-011 | Browser-test Knots desktop Search width rather than automatically copying Fish width. | BUILD TEST REQUIRED | `view-renderer.js`, `forest-journal.css` | Mobile/intermediate/full-desktop comparison | CLOSED / PASS |  
| KG-CP1-012 | Reconcile older visible-submit/**Search all Knots** documentation against the newer approved Guide-family Search standard without rewriting historical evidence. | DOC UPDATE | `KNOT-GUIDE.md` current owner + audit traceability | Readback against approved CP1.2 wording | CLOSED / PASS |


## CP1.3 — Get Your Reel Ready


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED


### Locked / Approved


- Place one dedicated **Get Your Reel Ready** special workflow card immediately after Search and before ordinary task/collection navigation.
- The card launches the existing Reel Setup / `openReelSetup()` workflow; CP1.3 does not redesign the workflow itself. Full workflow review remains CP6.
- Use the shared Guide workflow-card visual grammar / reserved workflow treatment rather than inventing a fixed Knots-specific special color.
- Do not duplicate the same reel-setup destination as a peer **Attach Line to a Reel** landing task card. Reel setup is owned by the dedicated workflow entry.
- Search remains a Knot-result surface; no additional Get Your Reel Ready pseudo-result is required in normal landing Search.
- Exact workflow-card width/span and responsive geometry remain **BUILD TEST REQUIRED** against the Fish special-workflow baseline.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP1-015 | Add dedicated **Get Your Reel Ready** special workflow card immediately after Search and launch the existing Reel Setup path. | BUILD REQUIRED | `view-renderer.js`, `script.js`, `forest-journal.css` | Browser interaction + navigation-path review | CLOSED / PASS |
| KG-CP1-016 | Remove duplicate landing-level **Attach Line to a Reel** workflow entry; keep Knot discovery and Reel Setup ownership distinct. | BUILD REQUIRED | `data/knot-guidance.js`, `view-renderer.js`, `script.js` | Landing task inventory + navigation review | CLOSED / PASS |
| KG-CP1-019 | Inherit the Fish **Compare Similar Fish** workflow-card geometry/responsive behavior for **Get Your Reel Ready** and verify it across breakpoints; redesign only if a concrete Knots-specific defect appears. | VERIFY ONLY | `view-renderer.js`, `forest-journal.css` | Mobile/intermediate/full-desktop comparison | CLOSED / PASS |


## CP1.4 — Core Knots — Learn These First


**Status:** CLOSED / SUPERSEDED BY APPROVED LANDING HIERARCHY


A standalone **Core Knots — Learn These First** major landing section is not retained. Core is surfaced in two clearer places instead: **Learn Core Knots** under **What Are You Trying to Do?** for task/learning entry, and **Core Knots — Browse →** under **All Knots** for collection browsing. The underlying four-Knot Core set remains unchanged.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP1-018 | Remove the standalone Core major landing section while preserving Core access through the task section and All Knots collection. | BUILD REQUIRED | `data/knot-guidance.js`, `view-renderer.js`, `script.js` | Landing hierarchy/browser review | CLOSED / PASS |


## CP1.5 — What Are You Trying to Do?


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED


### Locked / Approved


The landing task section contains four peer task entries:


1. **Learn Core Knots**
2. **Tie On a Hook, Swivel, or Lure**
3. **Connect Two Lines / Add a Leader**
4. **Make a Loop Connection**


This section is for task/learning discovery. Reel setup is not duplicated here because **Get Your Reel Ready** owns that workflow immediately above it. Exact task-card action wording remains refinement-allowed so long as it accurately communicates the destination and follows the shared Guide interaction grammar.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP1-017 | Build the approved four-entry **What Are You Trying to Do?** task set and preserve the task-to-Knot/collection semantics. | BUILD REQUIRED | `data/knot-guidance.js`, `view-renderer.js`, `script.js` | Task matrix + browser navigation review | CLOSED / PASS |


## CP1.6 — All Knots


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED


### Locked / Approved


- **All Knots** is the collection/library section.
- **All Knots** itself is an ordinary browse card, directly inheriting the Fish **All Fish — Browse →** baseline; do not add a separate section-level Browse All action.
- Browse cards are **All Knots**, **Core Knots**, **Beginner Knots**, and **Intermediate Knots**. **Advanced Knots is removed from the Version 1 landing page.**
- Every active collection card inherits the validated Fish Guide browse-card grammar: **Title + `Browse →` on the heading row when space allows, description below, whole-card interaction, lighter non-pill action treatment, and the complete action moved to a new left-aligned line when the title/action pair no longer fits comfortably.**
- The complete active Knot library remains reachable even if the user does not choose a difficulty/Core subset.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP1-013 | Apply the validated Fish Guide `Browse →` collection-card grammar to Knots collection cards and preserve responsive left-aligned wrap behavior. | BUILD REQUIRED | `view-renderer.js`, `forest-journal.css` | Mobile/intermediate/full-desktop card review + keyboard/touch check | CLOSED / PASS |
| KG-CP1-020 | Implement **All Knots — Browse →** as an ordinary Fish-baseline browse card that opens the complete active Knot library; do not add a separate section-level Browse All action. | BUILD REQUIRED | `view-renderer.js`, `script.js`, `forest-journal.css` | Complete-library navigation + responsive browser review | CLOSED / PASS |


## CP1.7 — Advanced Knots Resolution


**Status:** CLOSED / APPROVED — REMOVE V1 LANDING CARD / RETAIN ADVANCED TAXONOMY


The decision gate is resolved: **remove the Advanced Knots collection/card from the Version 1 landing experience.** Version 1 has 0 active Advanced-difficulty Knot records, and no existing Knot is reclassified or new Knot added merely to populate the tier. The approved **Advanced** difficulty taxonomy/canonical support remains available for future justified Knot records; an Advanced landing collection returns only after real validated content exists.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP1-014 | Remove **Advanced Knots** from the Version 1 landing page while retaining `Advanced` in the difficulty taxonomy/future canonical support. | BUILD REQUIRED | `data/knot-guidance.js`, `script.js` | Configuration check + landing browser validation + taxonomy regression check | CLOSED / PASS |


## CP1.8 — Whole-Page Hierarchy / Density / Accent Review


**Status:** CLOSED / APPROVED / BUILD-TEST REFINEMENTS RETAINED


### Approved Landing Hierarchy


1. **Knots Guide** identity + approved description
2. **Search Knots**
3. **Get Your Reel Ready** — special workflow
4. **What Are You Trying to Do?** — four approved task/learning entries
5. **All Knots** — **All Knots — Browse →** plus **Core Knots — Browse →**, **Beginner Knots — Browse →**, and **Intermediate Knots — Browse →** cards


The hierarchy is approved with refinement allowed. Exact responsive spacing, card width/span, visual density, standard-card accent rotation, and workflow accent implementation remain implementation/browser-test concerns. Decorative Guide imagery is deferred to the final UX Audit and does not remain a CP9.2 closure requirement.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP1-021 | Validate the complete approved landing hierarchy, density, accent sequencing, workflow distinction, and responsive behavior as one page; decorative motif is deferred. | BUILD TEST REQUIRED | `view-renderer.js`, `forest-journal.css` | Mobile/intermediate/full-desktop whole-page browser review | CLOSED / PASS |


# KG Audit — CP2 — Landing Interaction + Responsive Behavior


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED


### Locked / Approved


- Equivalent Guide components inherit the validated Fish Guide interaction/responsive treatment by default. The audit asks whether the component is semantically equivalent and whether the inherited treatment works; it does not reopen the base design without a demonstrated reason.
- **Get Your Reel Ready** directly inherits the **Compare Similar Fish** special workflow/action-card grammar. Use **Start Setup →** and the reserved workflow styling.
- **All Knots** directly inherits the **All Fish** browse-card grammar. Use **All Knots** + **Browse →** on the heading row with the description below; there is no separate section-level **Browse All →** action.
- **Core Knots**, **Beginner Knots**, and **Intermediate Knots** use the same Fish browse-card grammar. **Core Knots** keeps priority styling because it is especially important for new anglers.
- Priority styling also applies to at least **Learn Core Knots**, **Tie On a Hook, Swivel, or Lure**, and **Connect Two Lines / Add a Leader** in **What Are You Trying to Do?**. **Make a Loop Connection** may remain a standard task card.
- **Learn Core Knots** uses **Learn →** because it starts the Core learning path. The separate **Core Knots** collection card uses **Browse →** because it opens a library collection.
- Cards remain whole-card controls; visible action text is an affordance rather than a nested control. Preserve Fish-baseline keyboard focus, touch/press feedback, hover-capable feedback, lighter non-pill action treatment, and left-aligned action wrapping.
- Responsive card reflow, workflow-card geometry, and equivalent interaction mechanics inherit Fish by default and are browser-verified. Knots-specific divergence requires an actual usability/semantic defect, not preference or repeated redesign.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP2-001 | Apply Fish-baseline whole-card interaction, focus/touch/hover behavior, action treatment, and responsive wrapping to equivalent Knots landing cards. | BUILD REQUIRED / VERIFY | `view-renderer.js`, `forest-journal.css` | Keyboard/touch + mobile/intermediate/desktop browser review | CLOSED / PASS |
| KG-CP2-002 | Treat **Get Your Reel Ready** as the direct Knots equivalent of **Compare Similar Fish**, including reserved workflow styling and **Start Setup →**. | BUILD REQUIRED | `view-renderer.js`, `script.js`, `forest-journal.css` | Visual/interaction comparison against Fish baseline + workflow launch | CLOSED / PASS |
| KG-CP2-003 | Implement **All Knots — Browse →** as a normal Fish-baseline browse card and remove/supersede the separate **Browse All →** section-level treatment. | BUILD REQUIRED | `view-renderer.js`, `script.js`, `forest-journal.css` | Landing hierarchy + complete-library navigation | CLOSED / PASS |
| KG-CP2-004 | Preserve priority styling for **Core Knots** and for the three beginner-important task cards: Learn Core Knots, Tie On a Hook/Swivel/Lure, Connect Two Lines/Add a Leader. | BUILD REQUIRED | `view-renderer.js`, `forest-journal.css` | Whole-page hierarchy review across breakpoints | CLOSED / PASS |
| KG-CP2-005 | Use **Learn →** for Learn Core Knots while keeping **Browse →** for Core Knots collection browsing. | BUILD REQUIRED | `data/knot-guidance.js`, `view-renderer.js`, `script.js` | Action semantics + navigation review | CLOSED / PASS |
| KG-CP2-006 | Verify Fish-inherited responsive geometry/reflow works for Knots; diverge only for a documented concrete usability defect. | VERIFY ONLY / BUILD TEST IF DEFECT FOUND | `view-renderer.js`, `forest-journal.css` | Mobile/intermediate/full-desktop comparison | CLOSED / PASS |


# KG Audit — CP3 — Browse / Search Results


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED


### Locked / Approved


- Use one shared Knot result-card architecture across landing Search, All/Core/Beginner/Intermediate browse views, and task-result views.
- Result-card composition is **classification → Knot name + `View Knot →` → optional `Also called:` alias → concise canonical summary**.
- Classification is **Core Knot • Difficulty** for Core records and **Difficulty** for non-Core records.
- Do not add normal-result connection-type chips, line-type chips, Best For content, or other detail-page metadata. CP3 does not require images/diagrams on result cards.
- Core result cards keep subtle beginner-priority emphasis while retaining the normal rotating standard-card accent. Core emphasis does not create a fixed Knots color and does not consume the reserved workflow accent.
- Browse/task pages inherit Fish live scoped Search: parent **Knots Guide**, **Search Knots**, concise scope help, no visible submit button, clear control, and no widening beyond the active collection/task.
- Empty-query ordering: All/Beginner/Intermediate = A–Z; Core = curated `CORE_KNOT_IDS` order; task-result views = authored task-definition order. Typed Search remains relevance-ranked inside the eligible scope.
- **Learn Core Knots — Learn →** opens the existing Core Knots collection rather than a duplicate result surface.
- Result density inherits Fish: one column mobile, two columns maximum at intermediate/tablet and desktop unless a concrete Knots-specific browser defect justifies divergence.
- Standard result cards rotate through the shared accent palette; sequential standard cards do not share the same accent and Knot result cards do not use one fixed Guide-specific accent.
- Preserve current collection/task + Search query + scroll through **result → Knot Detail → Parent**.
- Result status uses Knot-specific wording such as **N knots found**. Scoped no-match guidance uses **No knots found in <scope>. Try another search.** Landing no-match remains owned by CP1.2.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP3-001 | Use one shared Knot result-card architecture and approved classification/name/`View Knot →`/alias/summary composition across landing Search, browse collections, and task results. | BUILD REQUIRED | `view-renderer.js`, `forest-journal.css` | Landing/browse/task card comparison + keyboard/touch review | CLOSED / PASS |
| KG-CP3-002 | Keep result cards compact: Core+Difficulty or Difficulty classification, optional alias, summary; no extra connection/line/Best For metadata and no CP3-required media. | BUILD REQUIRED / VERIFY | `view-renderer.js` | Content inventory across all 10 active Knots | CLOSED / PASS |
| KG-CP3-003 | Bring Knot browse/task Search to the Fish live scoped baseline with `Knots Guide` parent, `Search Knots`, concise scope help, no visible submit, clear behavior, and no scope widening. | BUILD REQUIRED | `view-renderer.js`, `script.js`, `forest-journal.css` | Collection/task Search state matrix + keyboard/mobile review | CLOSED / PASS |
| KG-CP3-004 | Preserve approved empty-query ordering (A–Z collections; curated Core; task-definition order), relevance-ranked typed Search, and route Learn Core Knots into the existing Core collection. | BUILD REQUIRED / VERIFY | `data/knot-guidance.js`, `search.js`, `script.js` | Deterministic ordering/query suite + navigation review | CLOSED / PASS |
| KG-CP3-005 | Use Fish result-grid density (1 column mobile / 2 columns maximum thereafter) and rotating standard accents with Core priority treatment independent of accent identity. | BUILD REQUIRED / VERIFY | `view-renderer.js`, `forest-journal.css` | Mobile/intermediate/full-desktop visual review | CLOSED / PASS |
| KG-CP3-006 | Preserve active collection/task + query + scroll through result → Knot Detail → Parent. | BUILD REQUIRED | `script.js` | Round-trip state restoration browser test | CLOSED / PASS |
| KG-CP3-007 | Use Knot-specific result status/no-match wording, including `N knots found` and scoped `No knots found in <scope>. Try another search.` | BUILD REQUIRED | `view-renderer.js`, `script.js` | Search state matrix + accessibility announcement check | CLOSED / PASS |


# KG Audit — CP4 — Knot Detail Page


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — DISCOVERY COMPLETE / IMPLEMENTATION ITEMS RETAINED


## CP4.1 — Shared Reference Interaction Convention


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED


### Locked / Approved


- FCC contextual Reference information uses an immediately adjacent **`ⓘ`** cue.
- **Only the `ⓘ` control opens Reference information.** Adjacent referenced text does not gain Reference behavior merely because the cue is present.
- Keep the visible icon close to the exact term it explains; do not detach it to the far edge of a row.
- The `ⓘ` control may use an enlarged independent touch/focus hit area, but that invisible area must not overlap the referenced text or a neighboring control.
- Referenced text preserves its existing semantics. This specifically avoids conflict in Rig **What You Need**, where a checkbox label such as `Bullet Weight` must continue toggling availability while the adjacent `ⓘ` independently opens Reference information.
- Reference behavior is not defined by chip/pill geometry or a dedicated persistent Reference color. Chip/tag shape remains a data-presentation choice. Persistent `ⓘ` iconography provides the common semantic cue; exact neutral resting, hover, focus-visible, and pressed treatment may be refined during implementation/browser review.
- Closing contextual Reference information must return focus to the originating `ⓘ` control.
- This convention is cross-Guide and supersedes older whole-chip Reference-target assumptions. Fish UX-011 must reconcile Habitat/Common Waters against this shared rule rather than merely making the current whole-chip treatment brighter.


### Knot Detail Application


- **Line Compatibility** values (`Monofilament`, `Fluorocarbon`, `Braid` where applicable) use the shared Reference convention.
- Line-type text remains non-Reference-interactive; its adjacent `ⓘ` is the Reference target.
- Exact Reference surface behavior (contextual popover vs current dedicated Line Type detail route) is not locked by this sub-gate and remains a CP4/build-test decision. Context/scroll/focus restoration is required whichever surface is retained.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP4-001 | Apply the shared adjacent-`ⓘ` Reference convention to Knot Detail Line Compatibility; only the icon opens Reference, text keeps its own semantics, hit area is enlarged without visual detachment/overlap, and focus returns after close. | BUILD REQUIRED / VERIFY | `view-renderer.js`, `script.js`, `forest-journal.css` | Keyboard/touch + mobile/intermediate/desktop interaction review | OPEN |
| KG-CP4-002 | Browser-test the Line Type Reference surface (contextual popover vs current dedicated detail route) while preserving the approved `ⓘ` trigger convention and full return context. | BUILD TEST REQUIRED | `view-renderer.js`, `script.js`, `forest-journal.css` | Bounded A/B browser review + round-trip state/focus test | OPEN |
| KG-CP4-003 | Implement approved Knot Detail identity order: origin navigation → Core+Difficulty/Difficulty classification → Knot name → summary → optional alias; classification remains non-interactive and no fixed Knots color is introduced. | BUILD REQUIRED | `view-renderer.js`, `forest-journal.css` | All-10-Knot identity inventory + responsive browser review | OPEN |
| KG-CP4-004 | Build **ABOUT THIS KNOT** as independent collapsed Fish-baseline disclosures for Best For, Line Compatibility, and Where You'll Use It using full-row `▾`/`▴` disclosure controls. | BUILD REQUIRED | `view-renderer.js`, `forest-journal.css` | Keyboard/touch + independent-state + responsive review | OPEN |
| KG-CP4-005 | Keep **HOW TO TIE IT** always visible with authoritative numbered `tyingSteps[]` and an instructional-media area whose exact media behavior remains owned by CP5. | BUILD REQUIRED | `view-renderer.js`, `knot-media-renderer.js`, `forest-journal.css` | All-10-Knot step inventory + mobile/desktop instructional-flow review | OPEN |
| KG-CP4-006 | Keep **CHECK YOUR KNOT** always visible immediately after tying steps and render `finalChecks[]` as primary verification guidance. | BUILD REQUIRED | `view-renderer.js`, `forest-journal.css` | All-10-Knot final-check inventory + browser review | OPEN |
| KG-CP4-007 | Build **MORE HELP** independent collapsed disclosures for Common Mistakes (`commonMistakes[]`) and When to Choose Another Knot (`limitations[]`). | BUILD REQUIRED | `view-renderer.js`, `forest-journal.css` | Content mapping + disclosure keyboard/touch review | OPEN |
| KG-CP4-008 | Preserve structured **Where You'll Use It** navigation with `→` task/workflow/Rig actions; route reel-spool contexts to **Get Your Reel Ready →** rather than resurrecting Attach Line to a Reel as a competing task. | BUILD REQUIRED / VERIFY | `view-renderer.js`, `script.js` | Relationship matrix + navigation round-trip review | OPEN |
| KG-CP4-009 | Keep **Sources & References** collapsed by default; use actual-origin parent navigation and do not add a generic duplicate bottom Back to Knots action. | BUILD REQUIRED / VERIFY | `view-renderer.js`, `script.js` | Origin matrix + source-disclosure + keyboard/browser review | OPEN |
| KG-CP4-010 | Browser-test final Knot Detail instructional geometry after CP5; do not pre-lock desktop to a two-column layout. Preserve clear mobile single-flow order and no horizontal scrolling. | BUILD TEST REQUIRED | `view-renderer.js`, `knot-media-renderer.js`, `forest-journal.css` | Mobile/intermediate/full-desktop visual comparison after CP5 | OPEN |


## CP4.2 — Detail Identity / Header


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED


- Parent/Home navigation remains at the top of the detail surface.
- Identity order is **classification → Knot name → summary → optional alias**.
- Core records show **Core Knot • Difficulty**; non-Core records show **Difficulty**. Classification is informational, not a chip/control.
- Core priority may receive subtle emphasis, but Knot Detail does not receive a fixed Guide-specific color.


## CP4.3 — About This Knot


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED


- Use one compact **ABOUT THIS KNOT** disclosure group.
- Independent rows are **Best For**, **Line Compatibility**, and **Where You'll Use It**.
- Each starts collapsed, the full row toggles it, `▾` means collapsed, `▴` means expanded, and opening one does not force another closed.
- Best For renders `bestFor[]`.
- Line Compatibility uses the approved adjacent-`ⓘ` Reference convention.
- Where You'll Use It uses `→` navigation for tasks/workflows/Rigs rather than Reference chips.
- Reel-spool contexts bridge to **Get Your Reel Ready →** rather than reintroducing Attach Line to a Reel as a competing task.


## CP4.4 — Primary Tying Flow


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED


- **HOW TO TIE IT** is primary content and remains always visible.
- Render authoritative `tyingSteps[]` with visible numbering derived from array order.
- Reserve the instructional-media area inside the teaching flow; CP5 owns exact media type/behavior.
- Do not require another disclosure action before the user can see how to tie the Knot.


## CP4.5 — Verification + More Help


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED


- **CHECK YOUR KNOT** remains always visible immediately after tying steps and renders `finalChecks[]`.
- A separate **MORE HELP** group contains independent collapsed **Common Mistakes** and **When to Choose Another Knot** disclosures.
- Common Mistakes maps to `commonMistakes[]`; When to Choose Another Knot maps to `limitations[]`.


## CP4.6 — Sources / Navigation / Responsive Refinement


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED


- **Sources & References** is available as a collapsed disclosure at the bottom of the detail page.
- Parent navigation restores the actual originating context; do not add a duplicate generic bottom Back to Knots action.
- Exact instructional media/steps desktop arrangement remains BUILD TEST REQUIRED after CP5 establishes the actual media treatment. Do not pre-lock a two-column desktop layout.
- Mobile preserves a clear single-flow teaching order without horizontal scrolling.


### CP4 Consolidated Approval


CP4 discovery is **CLOSED / APPROVED / refinement allowed**. All CP4 BUILD REQUIRED / VERIFY / BUILD TEST actions remain open for CP8 implementation lock and CP9 browser validation. Exact Line Type Reference-surface treatment and final media/instruction geometry remain bounded build-test items; they do not keep CP4 discovery open.


# KG Audit — CP5 — Instructional Media


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — CP5.1-CP5.7 CLOSED


## CP5.1 — Instructional Media Role / Safety Gate


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED


### Locked / Approved


- Preserve the current verified external instructional-media coverage for all 10 active Version 1 Knots as the **known-working baseline**. Do not demote, delete, replace, or redesign away from it before an FCC-owned alternative is proven.
- FCC-owned step-through instructional diagrams are the **preferred candidate enhancement**, not an approved replacement. Promotion to the primary teaching treatment requires a successful bounded prototype and later explicit approval.
- Prototype the four Core Knots — Arbor, Improved Clinch, Palomar, and Double Uni — because together they exercise reel-spool, wrap/thread/tighten, doubled-line/loop-over-terminal, and opposing two-line geometry.
- The prototype must prove technical accuracy, beginner clarity, phone readability, natural synchronization with authoritative `tyingSteps[]`, usable user-controlled step navigation, acceptable code/media complexity, and plausible scalability beyond the Core set.
- `tyingSteps[]` remains the authoritative in-app instruction. Candidate visuals illustrate canonical steps and do not become a second independent source of tying facts.
- Actual transition animation is not a Version 1 dependency at this gate. First prove accurate static instructional states, then the step-through viewer; add motion only if it materially improves understanding. Any later motion remains user-controlled, non-autoplay, reduced-motion safe, and understandable from a static final state.
- Prototype failure is non-destructive: FCC may keep static diagrams without the viewer, or retain the existing verified external instructional model if the FCC-owned approach does not meet the validation bar.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP5-001 | Preserve all current verified external instructional destinations as the known-working baseline until a replacement treatment is explicitly validated and approved. | VERIFY ONLY | `data/media.js` (verify existing), `knot-media-renderer.js` | All-10-Knot media inventory + browser link verification | OPEN |
| KG-CP5-002 | Build a bounded FCC-owned instructional prototype for Arbor, Improved Clinch, Palomar, and Double Uni that proves accurate static states plus user-controlled step-through presentation. | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `data/media.js` (conditional), `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | Technical geometry review + mobile/intermediate/desktop browser review | OPEN |
| KG-CP5-003 | Keep `tyingSteps[]` authoritative and ensure candidate visuals synchronize to canonical steps without becoming a duplicate independent instruction source. | BUILD TEST REQUIRED / VERIFY | `data/knots.js` (instruction authority), `knot-media-renderer.js`, `view-renderer.js` | Step-by-step content/visual cross-check across Core prototype | OPEN |
| KG-CP5-004 | Do not require transition animation for Version 1; if motion is later tested, require user control, no autoplay, reduced-motion safety, and a clear static final state. | VERIFY ONLY / BUILD TEST IF MOTION USED | `knot-media-renderer.js`, `forest-journal.css` | Motion/reduced-motion/accessibility browser matrix if motion is implemented | OPEN |


## CP5.2 — FCC Diagram / Step-Through Model


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED


### Locked / Approved


- CP5.2 defines the candidate teaching model only; **no actual Knot images are produced at this gate**.
- Use a user-controlled **static instructional-state viewer** synchronized to authoritative `tyingSteps[]`. The canonical text teaches the Knot; the visual illustrates it and does not own an independent instructional sequence.
- Default prototype mapping is **one canonical tying step → one visual instructional state**, without making 1:1 a permanent schema constraint. Challenge the canonical written step first if one visual state cannot clearly represent it; allow multiple visual states only when prototype evidence demonstrates a real instructional need.
- Candidate viewer presentation is current instructional visual + **Step N of M** + the corresponding canonical instruction + Previous/Next or equivalent user-controlled navigation.
- Keep the complete normal numbered `tyingSteps[]` sequence available outside the viewer as the dependable textual teaching/reference path and failure-safe baseline.
- The final canonical tying step normally owns the completed-Knot visual state. Do not create an artificial extra Finished Knot numbered step solely for media. **CHECK YOUR KNOT** follows and owns verification.
- Do not convert `tyingSteps[]` to step objects, add stable step IDs, or create a separate media step count during CP5.2. Any later schema change requires demonstrated prototype need.
- Candidate instructional states are SVG-based static vector visuals. Exact state/file packaging is intentionally deferred to CP5.4 after CP5.3 settles visual grammar.
- Transition animation remains optional under CP5.1 and is not introduced by CP5.2.
- The four-Core-Knot prototype must prove that the same instructional model works across different Knot geometries rather than merely demonstrating that individual diagrams can be drawn.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP5-005 | Prototype static instructional states synchronized to canonical `tyingSteps[]`, using one visual state per canonical step as the default without making 1:1 a permanent schema constraint. | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `data/media.js` (conditional), `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | Four-Core-Knot step/state cross-check + geometry review | OPEN |
| KG-CP5-006 | Prototype the user-controlled viewer with current visual, Step N of M, canonical current-step text, Previous/Next or equivalent controls, while retaining the complete numbered tying sequence outside the viewer. | BUILD TEST REQUIRED | `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | Keyboard/touch + text fallback + mobile/intermediate/desktop browser review | OPEN |
| KG-CP5-007 | Use the final canonical tying step as the normal completed-Knot visual state; do not add an artificial media-only Finished Knot step before Check Your Knot. | BUILD TEST REQUIRED / VERIFY | `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | Core prototype final-state + Check Your Knot flow review | OPEN |
| KG-CP5-008 | Preserve the current string-array `tyingSteps[]` model and derived numbering; do not add stable step IDs, step objects, or a separate media step count without demonstrated prototype need. | VERIFY ONLY | `data/knots.js`, `tools/validate_repository_integrity.js` | Schema/data diff + prototype mapping review | OPEN |
| KG-CP5-009 | Use SVG-based static instructional states as the candidate visual unit while deferring exact file/state packaging to CP5.4. | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `data/media.js` (conditional), `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | SVG fidelity/readability/maintainability review during Core prototype | OPEN |


## CP5.3 — Visual Grammar


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED


### Locked / Approved


- CP5.3 defines visual parameters only; **no actual Knot prototype images are produced at this gate**.
- Use a clean phone-first vector grammar with fishing-line geometry as the dominant information. Solid strokes, rounded joins/ends, adequate wrap separation, and phone-readable weight/spacing are required; photorealistic texture and decorative effects are not.
- For one continuous line, standing line and tag end retain the same underlying stroke treatment. Distinguish them with concise labels and/or endpoint cues rather than implying different materials.
- When two independent lines need visual separation, use a **colorblind-friendly instructional palette** plus labels, markers, geometry, position, or another non-color cue. Color cannot be the only carrier of identity, and diagrams must remain understandable in grayscale/color-vision-deficiency conditions. Instructional colors are independent from decorative Guide-card accents.
- Do not use dashed line treatment merely to distinguish lines; reserve any alternate stroke convention for a clearly defined semantic need.
- Every meaningful crossing must explicitly show over/under geometry, preferably with the upper segment continuous and the lower segment visually broken/knocked out. Ambiguous crossings at phone size are a validation failure. Relevant loops/openings must remain visually distinct and unobstructed.
- Separate completed/current geometry from the current action. Use restrained direction arrows, short ghosted paths, local emphasis, and distinguishable pull/tighten cues. Repeated wraps normally use one dominant directional cue plus visible completed wraps rather than many redundant arrows.
- Hooks, swivels, lure eyes, and reel spools use simplified recognizable geometry, with additional detail only when hardware shape materially affects accuracy. Hands/fingers are excluded by default unless a later proven instructional need justifies an exception.
- Keep SVG labels sparse. Do not duplicate the full canonical tying instruction inside the visual; `tyingSteps[]` remains the textual teaching authority.
- Use theme-aware semantic visual roles rather than independently authored light/dark Knot geometry. The same state must remain legible across supported themes/contrast conditions.
- Design at phone scale first without requiring pinch-zoom. Knot orientation may vary when geometry requires it; viewer interaction remains consistent. Desktop may enlarge/reflow but cannot add essential information missing on mobile.
- Technical accuracy outranks visual polish. Validate wrap count, threading path, crossings, loop identity, action direction, hardware relationship, tightening/final geometry, and agreement with canonical `tyingSteps[]`. Attractive but ambiguous/incorrect geometry fails.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP5-010 | Apply the approved phone-first vector line grammar; continuous line keeps one underlying stroke treatment with standing/tag distinction supplied by labels/end cues rather than false material changes. | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `knot-media-renderer.js`, `forest-journal.css` | Four-Core-Knot phone readability + visual-consistency review | OPEN |
| KG-CP5-011 | Use a colorblind-friendly instructional palette whenever separate lines use color, and preserve line identity through non-color cues so meaning survives grayscale/color-vision-deficiency/theme changes. | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `knot-media-renderer.js`, `forest-journal.css` | Color-vision/grayscale + light/dark theme review | OPEN |
| KG-CP5-012 | Make every meaningful over/under crossing and referenced loop/opening unambiguous at phone size; ambiguity is a prototype failure. | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `knot-media-renderer.js`, `forest-journal.css` | Crossing/loop geometry checklist across Core prototype | OPEN |
| KG-CP5-013 | Standardize restrained action cues, simplified recognizable hardware, and default no-hands treatment; add complexity only when needed for accurate instruction. | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `knot-media-renderer.js`, `forest-journal.css` | Core action-cue/hardware clarity review | OPEN |
| KG-CP5-014 | Keep visual labels sparse and do not duplicate canonical tying instructions inside SVG states; `tyingSteps[]` remains the textual authority. | BUILD TEST REQUIRED / VERIFY | `images/knots/instructional/<knot-id>/*.svg` (conditional), `knot-media-renderer.js`, `forest-journal.css` | SVG text/content inventory + step/visual cross-check | OPEN |
| KG-CP5-015 | Validate theme-aware, phone-first, orientation-flexible presentation and technical geometry accuracy; no essential desktop-only information and no pinch-zoom dependency. | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `knot-media-renderer.js`, `forest-journal.css` | Mobile/intermediate/desktop + theme/accessibility + geometry review | OPEN |


## CP5.4 — Production + Technical Validation Workflow


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED


### Locked / Approved


- CP5.4 defines prototype sourcing, construction, validation, rejection/rework, and acceptance workflow; **it does not yet produce the four-Core-Knot assets or promote FCC-owned media over the retained external baseline**.
- Use a **reuse-first, custom-build fallback** sequence for each prototype Knot. Search first for technically suitable public-domain or clearly open-licensed instructional material. Verify rights at the actual asset/source level rather than assuming site-wide reuse permission.
- Legally reusable media must also match the canonical method, authoritative `tyingSteps[]`, approved geometry, phone readability, and CP5.3 visual/accessibility grammar. Legal availability alone is not enough.
- Reusable material may be used directly when it meets FCC requirements or adapted only when the license explicitly permits modification. Unclear/restrictive rights remain reference-only; do not trace, extract frames, closely redraw, or otherwise reuse third-party expressive artwork without permission.
- If no suitable reusable asset exists, independently construct FCC SVG instructional states from verified Knot-method facts. AI/tool assistance may help author SVG paths, but generated imagery cannot establish Knot geometry, cannot substitute for technical verification, and is not traced into production states.
- For the bounded prototype, default to **one inspectable SVG per instructional state**. Do not add dynamic SVG scripting, canvas rendering, generated path-definition architecture, hidden-layer animation systems, or canonical step-schema changes merely to reduce file count. This packaging choice remains refinement allowed after prototype evidence.
- Validate at three levels: **state validation** (source/step/geometry/mobile/color independence), **sequence validation** (no unexplained operation between states), and **finished-Knot validation** (final structure/dressing/seating against the verified method).
- Reject/rework any state with wrong or ambiguous geometry, merged wraps, unclear openings, misleading action cues, phone-size information loss, color-only meaning, conflict with `tyingSteps[]`, or an unexplained geometric jump from the prior state.
- Prototype progressively in this order: **Improved Clinch → Palomar → Double Uni → Arbor**. Promotion of the FCC-owned treatment requires successful validation across the complete four-Knot prototype plus later explicit approval; one successful Knot is insufficient.
- Partial/failure outcomes remain non-destructive: static FCC diagrams may survive without the viewer if useful, or Version 1 may retain the existing external instructional-media model.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP5-016 | Before custom drawing each Core prototype Knot, search for technically suitable public-domain/open-license instructional material and verify reuse/modification rights at the asset/source level. | BUILD TEST REQUIRED / VERIFY | `images/knots/instructional/<knot-id>/*.svg` (conditional), `data/media.js` (conditional), `knot-media-renderer.js`, `tools/validate_repository_integrity.js` | Asset-level rights/provenance record + suitability review for all four Core Knots | OPEN |
| KG-CP5-017 | Accept reusable material only when it also matches canonical method/`tyingSteps[]`, geometry, phone readability, and CP5.3 visual/accessibility grammar; otherwise use custom FCC SVG fallback. | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `data/media.js` (conditional), `knot-media-renderer.js`, `tools/validate_repository_integrity.js` | Four-Core-Knot rights + technical suitability matrix | OPEN |
| KG-CP5-018 | For custom states, deliberately construct and technically validate SVG geometry from verified Knot-method facts; AI/tool assistance may author SVG but generated imagery cannot establish/validate geometry or be traced into production states. | BUILD TEST REQUIRED / VERIFY | `images/knots/instructional/<knot-id>/*.svg` (conditional), `data/media.js` (conditional), `knot-media-renderer.js`, `tools/validate_repository_integrity.js` | Geometry provenance + state-by-state technical review | OPEN |
| KG-CP5-019 | Use one inspectable SVG per instructional state as the prototype packaging default while avoiding premature dynamic/canvas/layer-animation architecture; retain packaging as refinement allowed after evidence. | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `data/media.js` (conditional), `knot-media-renderer.js`, `tools/validate_repository_integrity.js` | File/loader simplicity + diffability/maintainability review | OPEN |
| KG-CP5-020 | Run state validation covering source/step alignment, crossings, wraps, threading, line identity, direction cues, hardware, phone readability, color independence, and final-state correctness. | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `data/media.js` (conditional), `knot-media-renderer.js`, `tools/validate_repository_integrity.js` | Completed per-state checklist across four-Core prototype | OPEN |
| KG-CP5-021 | Run sequence and finished-Knot validation; reject/rework unexplained transitions or final geometry that does not match the verified method. | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `data/media.js` (conditional), `knot-media-renderer.js`, `tools/validate_repository_integrity.js` | Full sequence walkthrough + final-state comparison for each prototype Knot | OPEN |
| KG-CP5-022 | Prototype in order Improved Clinch → Palomar → Double Uni → Arbor and require the complete four-Knot set to pass before proposing FCC-owned media for primary-treatment promotion. | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `data/media.js` (conditional), `knot-media-renderer.js`, `tools/validate_repository_integrity.js` | Progressive gate results + four-Knot acceptance summary | OPEN |


## CP5.5 — External Supplemental Instruction


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED


### Locked / Approved


- Keep the verified external instructional destination inside **HOW TO TIE IT**. It is instructional help, not merely a citation, and is not moved to MORE HELP or Sources & References simply because FCC-owned media is being evaluated.
- Before FCC-owned instruction is validated/promoted, the external destination remains the established visual-learning option and must not be visually demoted. If FCC-owned instruction is later promoted, the external destination may become secondary **More visual instruction**; CP5.7 refines permanent retention as evidence-driven rather than mandatory once a complete replacement is proven.
- Use medium-specific action wording such as **View step-by-step animation ↗**, **View illustrated instructions ↗**, or **View interactive 3D instructions ↗**, with restrained provider attribution. `↗` denotes external navigation; `→` remains the FCC-internal navigation cue.
- External supplemental resources are linked rather than copied/rehosted/extracted/reproduced unless a separate CP5.4 rights review qualifies an asset for local FCC incorporation. Assets incorporated under verified reuse rights become part of the FCC-owned treatment rather than remaining external supplemental links.
- Default to **one preferred supplemental instructional destination per Knot** in Version 1. Add another only when it provides a materially distinct instructional benefit. Other supporting references remain in Sources & References as appropriate.
- External-link failure must never break canonical instruction. `tyingSteps[]` and valid local media remain usable; all active destinations require implementation/browser verification. Preserve Knot/detail context when the user returns, including viewer step/state where practical.
- Exact placement of **More visual instruction** relative to the complete numbered tying-step list remains **BUILD TEST REQUIRED**; test the actual teaching flow rather than pre-locking the order.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP5-023 | Keep the selected external instructional destination within HOW TO TIE IT as the protected established visual help through prototype/replacement validation; after a proven replacement, continued retention/placement is governed by CP5.7 evidence rather than being permanently mandatory. | BUILD REQUIRED / VERIFY | `data/media.js`, `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | All-10-Knot instructional-placement inventory + browser review | OPEN |
| KG-CP5-024 | Use medium-specific external action labels, restrained provider attribution, and `↗` external-navigation semantics while reserving `→` for FCC-internal navigation. | BUILD REQUIRED / VERIFY | `data/media.js`, `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | All-10-Knot label/provider/affordance review + keyboard/touch check | OPEN |
| KG-CP5-025 | Link third-party supplemental media rather than copying/rehosting/extracting/reproducing it unless CP5.4 separately verifies reuse rights and local-incorporation suitability. | VERIFY ONLY | `data/media.js` (rights/source owner), `knot-media-renderer.js` | Rights/provenance + asset/link inventory | OPEN |
| KG-CP5-026 | Use one preferred supplemental external instructional destination per Knot by default; require materially distinct teaching value for any additional destination. | VERIFY ONLY | `data/media.js` (rights/source owner), `knot-media-renderer.js` | All-10-Knot destination-count + rationale inventory | OPEN |
| KG-CP5-027 | Make external-resource failure non-blocking and verify every active instructional destination while preserving canonical text/local-media usability. | VERIFY ONLY / BUILD REQUIRED IF DEFECT FOUND | `data/media.js`, `knot-media-renderer.js`; `tools/check_external_references.js` verify-only | All-10-Knot external link verification + failure-state review | OPEN |
| KG-CP5-028 | Preserve Knot/detail context across external instruction and browser-test exact More visual instruction placement relative to the full numbered steps; retain viewer state where practical. | BUILD TEST REQUIRED | `knot-media-renderer.js`, `view-renderer.js`, `script.js`, `forest-journal.css` | External round-trip state test + mobile/intermediate/desktop teaching-flow comparison | OPEN |


## CP5.6 — Responsive Instructional Presentation


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED


### Locked / Approved


- Preserve one semantic instructional hierarchy across phone, intermediate/tablet, and desktop. Responsive changes may rearrange space but cannot change instructional priority, control meaning, or make essential information desktop-only.
- Phone is the authoritative composition and remains single-column: instructional visual → Step N of M → canonical current-step text → visible Previous/Next controls → complete numbered `tyingSteps[]` → retained supplemental external instruction → Check Your Knot, subject only to the already-open CP5.5 external-placement experiment. No horizontal scrolling or pinch-zoom dependency.
- Previous/Next remain explicit discoverable controls at all sizes; swipe is optional enhancement only. Disabled first/last states retain control semantics, and viewer state changes must preserve predictable keyboard/touch focus behavior.
- Intermediate/tablet stays stacked by default and gains usable space before gaining columns. Reuse shared FCC breakpoints unless a concrete Knot-specific prototype failure justifies an exception.
- Desktop must browser-test centered stacked versus sufficiently wide side-by-side viewer/reference treatments; no two-column layout is pre-approved. Desktop cannot introduce essential labels, arrows, explanations, or hover-only teaching absent from phone.
- Viewer/media geometry supports Knot-specific SVG orientation/viewBox and maintains reasonably stable control/visual placement across state changes without cropping/distorting states solely for identical dimensions.
- Keep the complete numbered `tyingSteps[]` as ordinary accessible flowing document content. Current-step emphasis may be tested using non-color-only cues, but the full list stays non-interactive for the initial prototype unless evidence justifies click-to-jump.
- Responsive prototype validation must explicitly stress-test **Double Uni Knot** and **Arbor Knot** in addition to Improved Clinch because opposing-line and reel-spool geometry are likely failure cases. Exact breakpoints, max visual dimensions, desktop winner, and supplemental-link placement remain CP9 build/browser decisions.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP5-029 | Preserve one semantic teaching hierarchy across all breakpoints, with phone as the authoritative single-column composition and no horizontal-scroll/pinch-zoom or desktop-only essential instruction. | BUILD TEST REQUIRED | `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | Phone/intermediate/desktop hierarchy + overflow/information-parity review | OPEN |
| KG-CP5-030 | Keep Previous/Next semantics consistent at every viewport, with explicit discoverable controls, optional swipe only, predictable disabled states, and stable keyboard/touch focus behavior. | BUILD REQUIRED / VERIFY | `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | Keyboard/touch/focus + first/middle/final-state matrix | OPEN |
| KG-CP5-031 | Keep intermediate/tablet stacked by default and reuse shared FCC breakpoints unless a concrete prototype defect justifies a Knot-specific exception. | BUILD TEST REQUIRED / VERIFY | `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | Intermediate/tablet breakpoint comparison + CSS breakpoint inventory | OPEN |
| KG-CP5-032 | Browser-test centered stacked desktop against sufficiently wide side-by-side viewer/reference treatment; do not pre-approve two columns or add desktop-only instructional content. | BUILD TEST REQUIRED | `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | Full-desktop A/B comparison across Core prototype | OPEN |
| KG-CP5-033 | Support orientation-flexible SVG/viewBox geometry while keeping viewer controls/visual region reasonably stable across state changes without cropping/distortion. | BUILD TEST REQUIRED | `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | State-transition layout-stability review across four Core Knots | OPEN |
| KG-CP5-034 | Keep the full numbered `tyingSteps[]` as normal accessible non-interactive document content for the initial prototype; test non-color current-step emphasis and explicitly stress-test Double Uni + Arbor responsive behavior. | BUILD TEST REQUIRED / VERIFY | `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | Full-step accessibility/current-state review + Double Uni/Arbor responsive stress test | OPEN |


## CP5.7 — V1 Coverage / Build Requirement


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED


### Locked / Approved


- Do **not** predeclare one final instructional-media treatment as mandatory across all 10 active V1 Knots. Preserve the current working Knot Detail/instructional experience as the implementation starting baseline and refine it against the approved Guide-family structure.
- The four Core Knots remain the bounded BUILD TEST prototype for reusable/open media, FCC-authored SVG states, static presentation, and the step-through concept. The prototype exists to determine what actually works; it is not a requirement to prove a predetermined viewer architecture.
- Prototype evidence may support a step-through viewer, static diagrams, a hybrid treatment, modest baseline-layout refinement, or justified differences among Knot geometries. Consistency is required at the experience/quality level, not necessarily identical media mechanics.
- The remaining six Knots receive no mandatory FCC-owned media requirement before the four-Core prototype verdict. Any later expansion is evidence-driven and requires explicit disposition rather than occurring automatically.
- The verified external instructional baseline remains protected until a tested replacement proves at least as effective. CP5.7 refines CP5.5: permanent retention of every external destination is not mandatory after a proven replacement; later placement/retention/removal remains a BUILD TEST refinement.
- Hard closure requirements are outcome-based: complete technically correct instruction, no regression from the known-working baseline, no incomplete/partial local media sequence treated as finished, accessible/responsive presentation, and successful technical/browser validation.
- `tyingSteps[]` remains the authoritative textual instruction unless implementation evidence demonstrates a separately approved need to revise the canonical steps.
- CP8 must lock known implementation work and explicit decision gates without assuming their outcomes. CP9 resolves viewer vs static vs hybrid treatment, final media/layout behavior, external-media placement/retention, expansion beyond Core, and justified per-Knot variation.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP5-035 | Preserve the current working Knot Detail/instructional experience as the implementation baseline and refine it against approved Guide-family structure rather than assuming wholesale replacement. | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `data/media.js` (conditional), `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | Baseline-vs-refined browser comparison across representative Knots | OPEN |
| KG-CP5-036 | Use the four-Core prototype as an evidence test of viewer, static, hybrid, reusable/open, and FCC-authored treatments; do not require the prototype to prove one predetermined architecture. | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `data/media.js` (conditional), `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | Four-Core technical/browser comparison with explicit treatment verdict | OPEN |
| KG-CP5-037 | Do not assign the remaining six Knots mandatory FCC-owned media before the Core prototype verdict; any expansion or justified per-Knot variation requires evidence-based disposition. | VERIFY ONLY | `data/media.js` + `images/knots/instructional/` scope guard; no six-Knot expansion before verdict | Scope inventory before/after Core prototype verdict | OPEN |
| KG-CP5-038 | Protect external instruction through replacement validation, but browser-test its post-replacement placement/retention/removal rather than making permanent retention mandatory. | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `data/media.js` (conditional), `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | Representative post-replacement teaching-flow comparison + link/value review | OPEN |
| KG-CP5-039 | Enforce outcome-based closure: complete/technically correct/non-regressive instruction, no partial local-media sequence treated as finished, and accessible responsive validation. | VERIFY ONLY / BUILD REQUIRED IF DEFECT FOUND | `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css`, `tools/validate_repository_integrity.js` | Technical completeness + regression + responsive/accessibility checklist | OPEN |
| KG-CP5-040 | At CP8, separate known implementation work from explicit build-test decision gates; CP9 resolves final treatment without presuming viewer/static/hybrid/external or expansion outcomes. | DEFERRED — CP8 implementation scope lock / CP9 browser validation | `images/knots/instructional/<knot-id>/*.svg` (conditional), `data/media.js` (conditional), `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | CP8 traceability review + CP9 disposition readback | OPEN |


# KG Audit — CP6 — Get Your Reel Ready Workflow


**Status:** IN PROGRESS — CP6.1 CLOSED / APPROVED / REFINEMENT ALLOWED


## CP6.1 — Workflow Purpose, Shell + Navigation


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED


### Locked / Approved


- Preserve **Get Your Reel Ready** as a first-class branching beginner workflow. Do not reduce the experience to an Arbor Knot article or a linear one-path wizard.
- The landing-page **Get Your Reel Ready** entry remains a true special/workflow card. Ordinary peer choices **inside** Reel Setup should not consume the reserved special/workflow-card treatment merely because they are part of the workflow.
- Separate the current-step progression action from workflow utilities. The preferred build-test starting point is one full-width primary progression action followed by a paired utility row: **Restart Setup** and **Exit to Knots**. On narrow layouts the utilities may stack only if side-by-side controls cannot retain clear labels and adequate touch targets.
- Use **Restart Setup** rather than ambiguous **Start Over** wording. Restart is the explicit destructive reset of Reel Setup selections/current phase and returns the user to the beginning of Get Your Reel Ready. Restart must not unnecessarily destroy an external origin/return context that exists outside the internal Reel Setup state.
- Use **Exit to Knots** rather than **Return to Knots** for the explicit workflow exit. Exit abandons the active Reel Setup state and returns to the Knots Guide landing page; it is not a resumable detour. Temporary Knot-instruction excursions from Reel Setup continue to use the existing context-preserving Reel Setup → Knot Detail → Reel Setup pattern instead.
- Remove exposed implementation/package terminology such as **Package 3** from beginner-facing workflow controls/copy.
- Keep the existing **Selected Choices** concept as a noninteractive workflow-state summary. Its label/container/border/background remain normal/theme-based. The selected-value text (for example **New or Empty Reel · Spinning Reel · Monofilament**) uses the shared special/workflow accent blue rather than a fixed Knots-specific accent. Do not turn the summary into a special card or add special-card accent visuals.
- Combine **Selected Choices** and **Setup Progress** into one coordinated workflow-status section. They must remain visually distinct because Selected Choices answers **what have I chosen?** while Setup Progress answers **where am I?**
- Setup Progress originally used six high-level phases. **Superseded by CP6.5:** the approved final tracker is **Reel → Line → Equipment → Spool → Ready**; Leader is not a Reel Setup completion phase. The tracker remains noninteractive in Version 1. Completed, current, and upcoming states must be distinguishable without relying only on color. The current phase may use the shared workflow blue plus a non-color state cue.
- Because the five high-level phases are fixed even when internal screens branch, a compact mobile treatment may truthfully use a phase count such as **Phase 3 of 5 · Equipment**. Desktop/tablet may show the full labeled phase tracker. Exact geometry is BUILD TEST REQUIRED.
- Preserve the current responsive workflow as the implementation starting point until CP9 browser testing demonstrates a concrete defect. The new utility row and combined workflow-status section must be tested at phone, intermediate/tablet, and full desktop widths.
- The already-approved simple labeled reel/spool diagram requirement remains carried forward to **CP6.3 — Line Selection, Strength + Equipment Compatibility**; CP6.1 does not resolve that visual itself.


### Source Behavior / Defects Confirmed During Audit


- Current **Start Over** calls the general Reel Setup opener, which resets Reel Setup state **and clears the detail-navigation stack**. The internal state reset is intended; clearing an external origin/return context is not.
- Current **Return to Knots** resets Reel Setup state and opens the Knots landing page. It does **not** preserve a resumable workflow position. The approved UI makes that destructive-exit meaning explicit through **Exit to Knots** wording rather than implying a temporary return.
- Reel Setup already preserves state when it deliberately opens Knot Detail instruction and returns to the workflow. That existing context-preserving mechanism remains the model for in-workflow Knot instruction.
- Current Selected Choices value styling is tied to the Knots accent. It must be changed to the shared special/workflow accent while keeping the surrounding status surface theme-based.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP6-001 | Preserve Get Your Reel Ready as the existing first-class branching workflow rather than collapsing it into an Arbor-only or single-path flow. | VERIFY ONLY | `script.js` | Branch/path inventory + browser walkthrough | OPEN |
| KG-CP6-002 | Reserve special/workflow-card treatment for true special workflow surfaces; convert ordinary internal Reel Setup choices to normal choice-card treatment where currently overused. | BUILD REQUIRED | `script.js`, `forest-journal.css` | Representative choice-screen visual/interaction review | OPEN |
| KG-CP6-003 | Separate primary progression from workflow utilities; build-test one full-width primary action followed by paired Restart Setup / Exit to Knots controls with responsive stacking only when needed. | BUILD TEST REQUIRED | `script.js`, `forest-journal.css` | Phone/intermediate/desktop control-layout + touch-target review | OPEN |
| KG-CP6-004 | Replace ambiguous/internal user-facing copy including Start Over / Return to Knots where applicable and remove exposed Package 3 terminology. | BUILD REQUIRED | `data/reel-guidance.js`, `script.js` | Full-workflow text/control inventory | OPEN |
| KG-CP6-005 | Make Restart Setup reset Reel Setup selections/current phase and return to workflow start without unnecessarily clearing external origin/return context. | BUILD REQUIRED | `script.js` | Entry-from-Knot → progress → Restart → origin-context regression test | OPEN |
| KG-CP6-006 | Make Exit to Knots an explicit destructive workflow exit: discard Reel Setup state and open the Knots landing page; do not imply an automatic resume path. | BUILD REQUIRED / VERIFY | `script.js` | Mid-workflow Exit → Knots → fresh-entry state test | OPEN |
| KG-CP6-007 | Keep Selected Choices as a theme-based noninteractive summary while rendering selected-value text in the shared workflow accent blue, not the Knots-specific accent and not a special-card visual treatment. | BUILD REQUIRED / BUILD TEST | `script.js`, `forest-journal.css` | Theme + contrast + representative-state browser review | OPEN |
| KG-CP6-008 | Combine Selected Choices and Setup Progress into one clearly partitioned workflow-status section without visually mixing choices with phase labels. | BUILD TEST REQUIRED | `script.js`, `forest-journal.css` | Phone/intermediate/desktop hierarchy review | OPEN |
| KG-CP6-009 | **Superseded by CP6.5:** implement the final noninteractive five-phase progress model — Reel, Line, Equipment, Spool, Ready — with current/completed/upcoming semantics that do not rely on color alone; test full-label and compact mobile treatments. | BUILD TEST REQUIRED | `script.js`, `forest-journal.css` | Phase-state matrix + responsive + accessibility review | OPEN |
| KG-CP6-010 | Preserve the current responsive Reel Setup baseline unless CP9 exposes a concrete defect; specifically validate the new status section and utility controls across shared FCC breakpoints. | VERIFY ONLY / BUILD TEST REQUIRED | `script.js`, `forest-journal.css` | Responsive regression comparison | OPEN |


## CP6.2 — Reel Identification


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED


### Locked / Approved


- The reel-type screen has exactly three actual selectable reel types: **Spinning Reel**, **Spincast Reel**, and **Baitcasting Reel**. Selecting an actual reel continues directly to Line Selection.
- **Spinning Reel** is the approved beginner baseline and should receive a restrained **Recommended First Setup** cue. The screen must distinguish identification from recommendation: a user who already owns a reel chooses the reel that matches their equipment; the recommendation applies to someone choosing a first setup.
- Reel descriptions should use beginner-visible physical recognition cues first, while still introducing useful terms such as spool, bail, front cover, and rotating spool.
- Remove the separate **I'm Not Sure → Which Reel Matches Yours?** workflow branch. The current branch repeats essentially the same three reel choices and does not provide enough additional help to justify a separate workflow step.
- Replace that branch with contextual Reference help on **What Kind of Reel Do You Have?** using the approved adjacent-`ⓘ` convention, with wording such as **Not sure which reel you have? `ⓘ`**. Only the `ⓘ` opens the Reference surface.
- Reel-identification help should use one multi-page Reference surface rather than three separate workflow pages. Page 1 covers Spinning, Page 2 Spincast, and Page 3 Baitcasting. Each page may combine a representative/labeled image or illustration, a concise description, and distinguishing traits.
- Multi-page Reference navigation must provide explicit **Previous / Next** controls and a visible position cue such as **1 of 3**. Touch swipe may be added as an enhancement, but it cannot be the only navigation method. No autoplay. Closing the Reference surface returns focus to the originating `ⓘ` and does not alter workflow selections or progress.
- The multi-page Reference surface remains contextual help inside the fixed **Reel** phase; internal Reference paging is not Reel Setup progress and does not create new Selected Choices.
- Remove the obsolete **Back to Reel Choices** card and the now-obsolete Reel Identification Help workflow-state/navigation branch when implementation makes the Reference treatment authoritative.
- Preserve current actual-reel selection behavior that clears downstream line/target/equipment/backing/leader state when reel type changes.
- CP6.2 discovered a line-guidance reconciliation that belongs to CP6.3: the approved Recommendation Audit baseline is **Spinning Reel → All-Around Freshwater → 10 lb Monofilament**, while the current Reel Setup data still identifies **8 lb** as the All-Around easy choice. CP6.3 must reconcile the Reel Setup guidance to the approved recommendation baseline and later equipment-reading guidance; CP6.3 supersedes any implied FCC pass/fail compatibility gate.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP6-011 | Keep Spinning, Spincast, and Baitcasting as the three actual selectable reel types; direct an actual reel selection straight to Line Selection. | VERIFY ONLY / BUILD REQUIRED IF CURRENT fourth choice remains | `data/reel-guidance.js`, `script.js` | Choice inventory + route test | OPEN |
| KG-CP6-012 | Mark Spinning Reel with a restrained Recommended First Setup cue while clearly separating first-setup recommendation from identification of equipment the user already owns. | BUILD REQUIRED / BUILD TEST REQUIRED | `data/reel-guidance.js`, `script.js`, `forest-journal.css` | Beginner comprehension + visual hierarchy review | OPEN |
| KG-CP6-013 | Refine reel descriptions around beginner-visible physical recognition cues while introducing necessary reel terminology. | BUILD REQUIRED | `data/reel-guidance.js`, `script.js` | Content review + representative browser check | OPEN |
| KG-CP6-014 | Remove the separate I'm Not Sure → Which Reel Matches Yours? workflow branch and keep identification help on the Reel Type screen. | BUILD REQUIRED | `data/reel-guidance.js`, `script.js` | Branch inventory + direct reel-selection route test | OPEN |
| KG-CP6-015 | Add Not sure which reel you have? `ⓘ` using the approved Reference convention; only the `ⓘ` opens help. | BUILD REQUIRED | `script.js`, `view-renderer.js`, `forest-journal.css` | Pointer/touch/keyboard/focus-return review | OPEN |
| KG-CP6-016 | Build-test one three-page reel-identification Reference surface: Spinning, Spincast, Baitcasting; each page supports concise description + traits and may include a representative/labeled image or illustration. | BUILD TEST REQUIRED | `data/reel-guidance.js`, `view-renderer.js`, `script.js`, `forest-journal.css` | Three-page content/visual comparison + beginner recognition test | OPEN |
| KG-CP6-017 | Multi-page Reference uses visible page position and explicit Previous/Next controls; swipe is optional only, no autoplay, and Reference paging does not mutate Reel Setup state/progress. | BUILD REQUIRED / BUILD TEST REQUIRED | `data/reel-guidance.js`, `view-renderer.js`, `script.js`, `forest-journal.css` | Keyboard/touch/swipe/focus/state regression review | OPEN |
| KG-CP6-018 | Remove obsolete Back to Reel Choices UI and obsolete Reel Identification Help workflow state/navigation after Reference treatment replaces the branch. | BUILD REQUIRED | `data/reel-guidance.js`, `script.js` | Dead-route/state inventory + browser regression | OPEN |
| KG-CP6-019 | Preserve downstream-state clearing when an actual reel type changes and keep the reel-identification Reference surface inside the fixed Reel progress phase. | VERIFY ONLY | `script.js` | State-reset + progress-phase matrix | OPEN |
| KG-CP6-020 | Reconcile CP6.3 line guidance to the approved Spinning Reel → All-Around Freshwater → 10 lb Monofilament beginner baseline; current All-Around easy choice remains 8 lb until implementation. | DEFERRED — CP6.3 | `data/reel-guidance.js`, `script.js` | Recommendation-baseline reconciliation + equipment-guidance review | OPEN |


## CP6.3 — Target, Recommendation, Line Strength + Equipment Guidance


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED


### Locked / Approved Direction


- **What Are You Fishing For?** keeps **All-Around Freshwater** as the Reel Setup-owned general-purpose option, followed by the applicable Fish Guide categories.
- Reused Fish category titles/order are derived from the canonical Fish Guide owner. The current duplicated **Panfish - Bluegill & Crappie** label is superseded by canonical **Crappie & Sunfish**; All-Around Freshwater remains first as a Reel Setup-only option.
- Target strength reference and Line Type interpretation are separate semantic concerns. Do not create 18 independently authored numeric recommendation records merely from six targets × three Line Types. CP7 must verify a non-duplicative owner structure.
- Approved target starting-reference set: **All-Around Freshwater `6–12 lb` / 10 lb Mono preferred / 8 lb Mono lighter alternative; Crappie & Sunfish `4–6 lb` / 6 lb Mono; Trout `2–4 lb` / 4 lb Mono; Bass `8–12 lb` / 10 lb Mono; Walleye `6–10 lb` / 8 lb Mono; Catfish `15–20 lb` / 20 lb Mono**. Values are beginner references, not universal requirements.
- The target-specific recommendation page owns actual **Line Weight** selection. The rolling selector remains the preferred build candidate; movement does not auto-advance and explicit dynamic confirmation is required.
- The selector initializes from an FCC numeric recommendation **only when the exact Line Type + target combination has an approved numeric recommendation**. Fluorocarbon and Braid do not silently inherit Monofilament numeric recommendations. If no exact approved numeric recommendation exists, the selector begins unconfirmed and the user chooses the actual pound-test. Braid keeps explicit fish-strength-reference wording.
- Confirmed Line Weight is transient Reel Setup state, appears with Line Type in Selected Choices, and drives downstream Equipment wording. Recommendation and user selection remain separate values.
- The Line Type screen contains exactly **Monofilament / Fluorocarbon / Braid**; Monofilament receives **Recommended First Setup**. Separate **Help Me Choose** and **I'm Not Sure** cards/branches are removed.
- Replace those branches with **Need help choosing or identifying your line? `ⓘ`** and one three-page contextual Line Type Reference: **Monofilament / Fluorocarbon / Braid**, with recognition guidance, beginner-use guidance, tradeoffs, visible position, explicit Previous/Next, optional swipe enhancement, no autoplay, and no workflow-state mutation.
- Equipment remains education, not adjudication. Remove **My Reel & Rod Support This Setup**, **Something Doesn't Match / I'm Not Sure**, compatibility PASS/FAIL semantics, blocking mismatch branch, and the compatibility-complete gate.
- The Equipment screen summarizes the actual confirmed Line Type + Line Weight, teaches what to compare on the user's reel and rod, states manufacturer/equipment markings are authoritative, and provides a normal progression action into Backing / Spool Setup. If the user discovers a mismatch, normal previous-step navigation lets them revise the line choice.
- Consolidate Equipment help into one three-page Reference: **How to Read Your Reel / How to Read Your Rod / If the Ratings Don't Match**. The Reel page includes the required simple labeled reel/spool diagram. The mismatch page provides adjustment guidance without creating a workflow state.
- Preserve the **Spincast + Braid** safeguard as a non-blocking informational warning that tells the user to check their exact reel/manufacturer guidance. FCC does not declare the specific reel incompatible.
- Exact prose, selector geometry, and Reference presentation remain build/browser refinements. CP7 owns structural cleanup, CP8 exact source scope, and CP9 browser/responsive/accessibility validation.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP6-021 | Derive reused Fish category titles from the canonical Fish Guide owner; correct Reel Setup Panfish - Bluegill & Crappie to canonical **Crappie & Sunfish** through derivation rather than a second authored label. | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | `data/reel-guidance.js`, `script.js` | Canonical-title mutation test + card inventory | OPEN |
| KG-CP6-022 | Keep All-Around Freshwater first, then derive/reuse the Fish Guide canonical category order rather than maintaining a separate Reel Setup order. | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | `data/reel-guidance.js`, `script.js` | Ordering comparison against Fish Guide | OPEN |
| KG-CP6-023 | Review wording on every target-specific recommendation page so recommendation, rationale, and user-selected Line Weight are distinct and beginner-readable. | BUILD REQUIRED / BUILD TEST REQUIRED | `data/reel-guidance.js`, `script.js` | Six-target content matrix + browser review | OPEN |
| KG-CP6-024 | Reconcile All-Around Freshwater to **10 lb Monofilament** as the preferred starting recommendation with **8 lb Monofilament** as the lighter approved alternative. | BUILD REQUIRED | `data/reel-guidance.js`, `script.js` | Recommendation-audit reconciliation | OPEN |
| KG-CP6-025 | Reconcile target guidance by separating target strength references from Line Type interpretation; do not mechanically reuse Monofilament numeric guidance for Fluorocarbon/Braid. | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | `data/reel-guidance.js`, `script.js` | Target x Line Type behavior/content matrix | OPEN |
| KG-CP6-026 | Replace the target-page Next - Check Reel & Rod Compatibility progression card with the user's Line Weight selection/confirmation flow. | BUILD REQUIRED / BUILD TEST REQUIRED | `data/reel-guidance.js`, `script.js`, `forest-journal.css` | Target-page interaction matrix across line types | OPEN |
| KG-CP6-027 | Build-test a rolling Line Weight selector as the preferred starting interaction; exact selector range/geometry/mechanics remain refinement-allowed. | BUILD TEST REQUIRED | `script.js`, `forest-journal.css` | Pointer/touch/keyboard/responsive comparison | OPEN |
| KG-CP6-028 | Do not auto-advance on selector movement; use an explicit dynamic confirmation action such as Continue with <strength> lb <line type> →. | BUILD REQUIRED / BUILD TEST REQUIRED | `script.js` | Selection/confirmation/state test | OPEN |
| KG-CP6-029 | Add transient actual Line Weight state and include confirmed strength + Line Type in Selected Choices. | BUILD REQUIRED | `script.js` | Upstream-reset + selected-choice matrix | OPEN |
| KG-CP6-030 | Build downstream Equipment guidance from the user's actual confirmed Line Type + Line Weight rather than hard-coded/default recommendation wording. | BUILD REQUIRED | `data/reel-guidance.js`, `script.js` | Dynamic-copy state matrix | OPEN |
| KG-CP6-031 | Replace FCC pass/fail compatibility semantics with generic best-practice equipment-reading guidance; equipment/manufacturer markings remain authoritative and progression is not blocked. | BUILD REQUIRED / VERIFY | `data/reel-guidance.js`, `script.js` | Out-of-recommendation progression + wording review | OPEN |
| KG-CP6-032 | Preserve How to Read Reel/Rod education and the required labeled reel/spool diagram; exact contextual Reference presentation remains BUILD TEST refinement. | BUILD REQUIRED / BUILD TEST REQUIRED | `data/reel-guidance.js`, `view-renderer.js`, `script.js`, `forest-journal.css` | Reference content + diagram + responsive/accessibility review | OPEN |
| KG-CP6-033 | Apply a build-time wording pass across Target → Recommendation/Selection → Equipment so the approved semantic distinctions remain clear after real UI composition. | BUILD TEST REQUIRED | `data/reel-guidance.js`, `script.js` | End-to-end beginner comprehension/browser review | OPEN |
| KG-CP6-034 | Implement the approved six-target starting-reference values, including Bass `8–12 lb` / 10 lb Mono and Catfish `15–20 lb` / 20 lb Mono. | BUILD REQUIRED | `data/reel-guidance.js`, `script.js` | Six-target value/content readback + browser matrix | OPEN |
| KG-CP6-035 | Initialize Line Weight only when an exact target + Line Type numeric recommendation is approved; otherwise begin unconfirmed. Braid/Fluorocarbon must not inherit Mono values silently. | BUILD REQUIRED / BUILD TEST REQUIRED | `data/reel-guidance.js`, `script.js` | Line Type × target initialization matrix | OPEN |
| KG-CP6-036 | Remove Help Me Choose / I'm Not Sure Line workflow cards/branches and replace them with the inline Line Type Reference trigger. | BUILD REQUIRED | `data/reel-guidance.js`, `view-renderer.js`, `script.js` | Dead-branch/state inventory + browser navigation test | OPEN |
| KG-CP6-037 | Build one three-page Monofilament / Fluorocarbon / Braid Reference surface with explicit Previous/Next, optional swipe, no autoplay, and no workflow-state mutation. | BUILD TEST REQUIRED / BUILD REQUIRED | `data/reel-guidance.js`, `view-renderer.js`, `script.js`, `forest-journal.css` | Keyboard/touch/focus/state + responsive review | OPEN |
| KG-CP6-038 | Remove equipment confirmation/mismatch/completed workflow states and replace with one educational Equipment step plus normal Continue to Backing / Spool Setup. | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | `data/reel-guidance.js`, `script.js` | Dead-state/route inventory + forward/backward workflow test | OPEN |
| KG-CP6-039 | Consolidate Equipment help into Read Reel / Read Rod / If Ratings Don't Match Reference pages; mismatch guidance no longer owns workflow state. | BUILD REQUIRED / BUILD TEST REQUIRED | `data/reel-guidance.js`, `view-renderer.js`, `script.js`, `forest-journal.css` | Reference-page content + focus/responsive review | OPEN |
| KG-CP6-040 | Preserve Spincast + Braid as an informational manufacturer-check safeguard without FCC incompatibility declaration or blocking behavior. | BUILD REQUIRED / VERIFY | `data/reel-guidance.js`, `script.js` | Spincast+Braid path + wording/progression regression | OPEN |


# Cross-Guide Carry-Forward Discovered During Knots Audit


## Fish Guide Visual-Flair Omission


The Fish audit documentation allowed restrained Fish-specific visual flair/motif, but the validated Fish implementation did not add it. The current bounded Fish post-Knots follow-up UX-011 already owns Habitat/Common Waters affordance + Condition/reference reconciliation and should also include the missing Fish-specific visual identity/flair implementation/review.


**Disposition:** DOC UPDATE + FUTURE BUILD REQUIRED under **UX-011 — Fish post-Knots follow-up**.    
**Timing:** After Knots closes and before substantive Tackle Guide work.    
**Constraint:** Fish remains closed for semantic/content scope; this is a bounded presentation/refinement follow-up.


# Implementation Traceability Matrix


This table becomes the CP8 implementation lock and CP10 closure checklist. Add every approved item here as it is discovered.


| ID | Checkpoint | Item | Disposition | Expected owner/file scope | Validation | Implementation status | Validation status |  
|---|---|---|---|---|---|---|---|  
| KG-CP1-001 | CP1.1 | Knots Guide naming | BUILD REQUIRED | `view-renderer.js` | Browser + text check | CLOSED / PASS | CLOSED / PASS |  
| KG-CP1-002 | CP1.1 | Fish-baseline compact identity | BUILD REQUIRED | `view-renderer.js`, `forest-journal.css` | Responsive browser review | CLOSED / PASS | CLOSED / PASS |  
| KG-CP1-003 | CP1.1 | Decorative Knots identity art deferred; remove current motif | DEFERRED — FINAL UX AUDIT / CURRENT REMOVAL | `view-renderer.js`, `forest-journal.css`; `V1-DESIGN-AUDIT.md` | R4 removal + future UX review | CURRENT BUILD CLOSED / FUTURE UX DEFERRED | R4 PASS / FUTURE UX DEFERRED |  
| KG-CP1-004 | CP1.1 | No unnecessary generic CTA | VERIFY ONLY | `view-renderer.js` | Browser review | CLOSED / PASS | CLOSED / PASS |
| KG-CP1-005 | CP1.2 | Preserve Knots deterministic Search scope/ranking | VERIFY ONLY | `search.js`, `script.js` | Deterministic query suite + browser spot checks | CLOSED / PASS | CLOSED / PASS |  
| KG-CP1-006 | CP1.2 | Search label/helper/placeholder | BUILD REQUIRED | `view-renderer.js`, `script.js` | Browser text/scope review | CLOSED / PASS | CLOSED / PASS |  
| KG-CP1-007 | CP1.2 | Live Search / no visible submit / clear behavior | BUILD REQUIRED | `view-renderer.js`, `script.js`, `forest-journal.css` | Keyboard/mobile/browser interaction review | CLOSED / PASS | CLOSED / PASS |  
| KG-CP1-008 | CP1.2 | Neutral Search styling + current clear touch/focus treatment | BUILD REQUIRED | `view-renderer.js`, `forest-journal.css` | Responsive + keyboard/focus review | CLOSED / PASS | CLOSED / PASS |  
| KG-CP1-009 | CP1.2 | Empty/status/no-match state behavior | BUILD REQUIRED | `view-renderer.js`, `script.js` | Browser state matrix + accessibility review | CLOSED / PASS | CLOSED / PASS |  
| KG-CP1-010 | CP1.2 | Search query + scroll restoration through Knot Detail | BUILD REQUIRED | `script.js` | Navigation round-trip review | CLOSED / PASS | CLOSED / PASS |  
| KG-CP1-011 | CP1.2 | Knots desktop Search-width experiment | BUILD TEST REQUIRED | `view-renderer.js`, `forest-journal.css` | Responsive browser comparison | CLOSED / PASS | CLOSED / PASS |  
| KG-CP1-012 | CP1.2 | Search documentation supersession reconciliation | DOC UPDATE | `KNOT-GUIDE.md` + audit record | Readback | CLOSED / PASS | CLOSED / PASS |  
| KG-CP1-013 | CP1.6 | Fish-baseline `Browse →` collection-card grammar | BUILD REQUIRED | `view-renderer.js`, `forest-journal.css` | Responsive card + interaction review | CLOSED / PASS | CLOSED / PASS |  
| KG-CP1-014 | CP1.7 | Remove Advanced Knots V1 landing card; retain Advanced taxonomy/future-record support | BUILD REQUIRED | `data/knot-guidance.js`, `script.js` | Config + browser + taxonomy regression review | CLOSED / PASS | CLOSED / PASS |
| KG-CP1-015 | CP1.3 | Dedicated Get Your Reel Ready workflow card after Search | BUILD REQUIRED | `view-renderer.js`, `script.js`, `forest-journal.css` | Workflow launch + browser review | CLOSED / PASS | CLOSED / PASS |  
| KG-CP1-016 | CP1.3 | Remove duplicate Attach Line to a Reel landing workflow entry | BUILD REQUIRED | `data/knot-guidance.js`, `view-renderer.js`, `script.js` | Landing task inventory + navigation review | CLOSED / PASS | CLOSED / PASS |  
| KG-CP1-017 | CP1.5 | Approved four-entry task/learning section | BUILD REQUIRED | `data/knot-guidance.js`, `view-renderer.js`, `script.js` | Task matrix + browser navigation review | CLOSED / PASS | CLOSED / PASS |  
| KG-CP1-018 | CP1.4 | Remove standalone Core major landing section; preserve task + collection access | BUILD REQUIRED | `data/knot-guidance.js`, `view-renderer.js`, `script.js` | Landing hierarchy review | CLOSED / PASS | CLOSED / PASS |  
| KG-CP1-019 | CP1.3 | Inherit Fish Compare workflow-card geometry/responsive behavior; verify Knots fit | VERIFY ONLY | `view-renderer.js`, `forest-journal.css` | Responsive browser comparison | CLOSED / PASS | CLOSED / PASS |  
| KG-CP1-020 | CP1.6 | All Knots `Browse →` complete-library browse card | BUILD REQUIRED | `view-renderer.js`, `script.js`, `forest-journal.css` | Complete-library navigation + responsive review | CLOSED / PASS | CLOSED / PASS |  
| KG-CP1-021 | CP1.8 | Whole landing hierarchy/density/accent/responsive validation; motif deferred | BUILD TEST REQUIRED | `view-renderer.js`, `forest-journal.css` | Whole-page responsive browser review | CLOSED / PASS | CLOSED / PASS |  
| KG-CP2-001 | CP2 | Fish-baseline whole-card interaction/focus/touch/action/wrap behavior | BUILD REQUIRED / VERIFY | `view-renderer.js`, `forest-journal.css` | Keyboard/touch + responsive browser review | CLOSED / PASS | CLOSED / PASS |  
| KG-CP2-002 | CP2 | Get Your Reel Ready = Compare Similar Fish workflow-card treatment | BUILD REQUIRED | `view-renderer.js`, `script.js`, `forest-journal.css` | Fish baseline comparison + workflow launch | CLOSED / PASS | CLOSED / PASS |  
| KG-CP2-003 | CP2 | All Knots = All Fish-style Browse card; no separate Browse All action | BUILD REQUIRED | `view-renderer.js`, `script.js`, `forest-journal.css` | Landing + complete-library navigation | CLOSED / PASS | CLOSED / PASS |  
| KG-CP2-004 | CP2 | Priority styling for Core Knots + three beginner-important task cards | BUILD REQUIRED | `view-renderer.js`, `forest-journal.css` | Whole-page hierarchy review | CLOSED / PASS | CLOSED / PASS |  
| KG-CP2-005 | CP2 | Learn Core Knots uses Learn →; Core collection uses Browse → | BUILD REQUIRED | `data/knot-guidance.js`, `view-renderer.js`, `script.js` | Action semantics/navigation | CLOSED / PASS | CLOSED / PASS |  
| KG-CP2-006 | CP2 | Verify inherited Fish responsive geometry; diverge only on concrete defect | VERIFY ONLY / BUILD TEST IF DEFECT FOUND | `view-renderer.js`, `forest-journal.css` | Responsive comparison | CLOSED / PASS | CLOSED / PASS |  
| KG-CP3-001 | CP3 | Shared Knot result-card architecture + approved card composition | BUILD REQUIRED | `view-renderer.js`, `forest-journal.css` | Landing/browse/task result-card comparison | CLOSED / PASS | CLOSED / PASS |
| KG-CP3-002 | CP3 | Compact classification/alias/summary content; no extra metadata/media requirement | BUILD REQUIRED / VERIFY | `view-renderer.js` | All-10-Knot content inventory | CLOSED / PASS | CLOSED / PASS |
| KG-CP3-003 | CP3 | Fish-baseline live scoped Search on browse/task pages | BUILD REQUIRED | `view-renderer.js`, `script.js`, `forest-journal.css` | Collection/task Search state matrix | CLOSED / PASS | CLOSED / PASS |
| KG-CP3-004 | CP3 | Approved collection/task ordering + relevance Search + Learn Core route | BUILD REQUIRED / VERIFY | `data/knot-guidance.js`, `search.js`, `script.js` | Ordering/query/navigation suite | CLOSED / PASS | CLOSED / PASS |
| KG-CP3-005 | CP3 | 1/2-column maximum result grid + rotating standard accents/Core priority separation | BUILD REQUIRED / VERIFY | `view-renderer.js`, `forest-journal.css` | Responsive visual review | CLOSED / PASS | CLOSED / PASS |
| KG-CP3-006 | CP3 | Browse/task collection/query/scroll restoration through detail | BUILD REQUIRED | `script.js` | Navigation round-trip browser test | CLOSED / PASS | CLOSED / PASS |
| KG-CP3-007 | CP3 | Knot-specific result count + scoped no-match wording | BUILD REQUIRED | `view-renderer.js`, `script.js` | Search state/accessibility review | CLOSED / PASS | CLOSED / PASS |


| KG-CP4-001 | CP4.1 | Shared adjacent-`ⓘ` Reference convention on Knot Line Compatibility | BUILD REQUIRED / VERIFY | `view-renderer.js`, `script.js`, `forest-journal.css` | Keyboard/touch + responsive interaction review | OPEN | OPEN |
| KG-CP4-002 | CP4.1 | Line Type Reference surface browser test with preserved return context | BUILD TEST REQUIRED | `view-renderer.js`, `script.js`, `forest-journal.css` | A/B browser + round-trip state/focus test | OPEN | OPEN |
| KG-CP4-003 | CP4.2 | Approved Knot Detail identity/header order + non-interactive classification | BUILD REQUIRED | `view-renderer.js`, `forest-journal.css` | All-10-Knot identity + responsive review | OPEN | OPEN |
| KG-CP4-004 | CP4.3 | ABOUT THIS KNOT independent disclosure group | BUILD REQUIRED | `view-renderer.js`, `forest-journal.css` | Disclosure state + keyboard/touch/responsive review | OPEN | OPEN |
| KG-CP4-005 | CP4.4 | Always-visible How to Tie It + numbered tyingSteps + CP5 media slot | BUILD REQUIRED | `view-renderer.js`, `knot-media-renderer.js`, `forest-journal.css` | All-10-Knot step + instructional-flow review | OPEN | OPEN |
| KG-CP4-006 | CP4.5 | Always-visible Check Your Knot from finalChecks | BUILD REQUIRED | `view-renderer.js`, `forest-journal.css` | All-10-Knot verification-content review | OPEN | OPEN |
| KG-CP4-007 | CP4.5 | More Help disclosures for commonMistakes + limitations | BUILD REQUIRED | `view-renderer.js`, `forest-journal.css` | Content mapping + disclosure interaction review | OPEN | OPEN |
| KG-CP4-008 | CP4.3/4.6 | Structured task/workflow/Rig navigation + Get Your Reel Ready bridge | BUILD REQUIRED / VERIFY | `view-renderer.js`, `script.js` | Relationship + navigation matrix | OPEN | OPEN |
| KG-CP4-009 | CP4.6 | Collapsed Sources + actual-origin parent navigation / no duplicate bottom Back action | BUILD REQUIRED / VERIFY | `view-renderer.js`, `script.js` | Origin/source disclosure browser review | OPEN | OPEN |
| KG-CP4-010 | CP4.6 | Post-CP5 Knot Detail instructional geometry experiment | BUILD TEST REQUIRED | `view-renderer.js`, `knot-media-renderer.js`, `forest-journal.css` | Mobile/intermediate/full-desktop comparison | OPEN | OPEN |
| KG-CP5-001 | CP5.1 | Preserve verified external instructional-media baseline | VERIFY ONLY | `data/media.js` (verify existing), `knot-media-renderer.js` | All-10-Knot media inventory + browser link verification | OPEN | OPEN |
| KG-CP5-002 | CP5.1 | Four-Core-Knot FCC-owned static-state + step-through prototype | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `data/media.js` (conditional), `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | Geometry + responsive browser review | OPEN | OPEN |
| KG-CP5-003 | CP5.1 | Keep tyingSteps authoritative; visuals synchronize without duplicate instruction authority | BUILD TEST REQUIRED / VERIFY | `data/knots.js` (instruction authority), `knot-media-renderer.js`, `view-renderer.js` | Core prototype step/visual cross-check | OPEN | OPEN |
| KG-CP5-004 | CP5.1 | Motion optional only; user-controlled/non-autoplay/reduced-motion/static-final-state requirements if used | VERIFY ONLY / BUILD TEST IF MOTION USED | `knot-media-renderer.js`, `forest-journal.css` | Accessibility/motion matrix if implemented | OPEN | OPEN |
| KG-CP5-005 | CP5.2 | Static instructional-state mapping synchronized to tyingSteps; 1:1 default, not permanent schema constraint | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `data/media.js` (conditional), `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | Four-Core-Knot step/state + geometry review | OPEN | OPEN |
| KG-CP5-006 | CP5.2 | Viewer = visual + Step N of M + canonical text + Previous/Next; full numbered text retained | BUILD TEST REQUIRED | `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | Keyboard/touch/fallback + responsive browser review | OPEN | OPEN |
| KG-CP5-007 | CP5.2 | Final canonical tying step normally owns completed-Knot state; no media-only Finished Knot step | BUILD TEST REQUIRED / VERIFY | `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | Core final-state + Check Your Knot flow review | OPEN | OPEN |
| KG-CP5-008 | CP5.2 | Preserve string-array tyingSteps + derived numbering; no stable step IDs/step objects/media step count without proven need | VERIFY ONLY | `data/knots.js`, `tools/validate_repository_integrity.js` | Schema/data diff + prototype mapping review | OPEN | OPEN |
| KG-CP5-009 | CP5.2 | SVG static states are candidate visual unit; packaging deferred to CP5.4 | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `data/media.js` (conditional), `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | SVG fidelity/readability/maintainability review | OPEN | OPEN |
| KG-CP5-010 | CP5.3 | Phone-first vector line grammar + continuous-line standing/tag distinction | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `knot-media-renderer.js`, `forest-journal.css` | Four-Core-Knot phone readability + visual consistency | OPEN | OPEN |
| KG-CP5-011 | CP5.3 | Colorblind-friendly instructional palette + mandatory non-color line identity cues | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `knot-media-renderer.js`, `forest-journal.css` | Color-vision/grayscale + light/dark theme review | OPEN | OPEN |
| KG-CP5-012 | CP5.3 | Unambiguous over/under crossings + loop/opening readability | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `knot-media-renderer.js`, `forest-journal.css` | Crossing/loop geometry checklist | OPEN | OPEN |
| KG-CP5-013 | CP5.3 | Restrained action cues + simplified hardware + default no-hands treatment | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `knot-media-renderer.js`, `forest-journal.css` | Action-cue/hardware clarity review | OPEN | OPEN |
| KG-CP5-014 | CP5.3 | Sparse labels; no duplicated canonical instruction text inside SVG | BUILD TEST REQUIRED / VERIFY | `images/knots/instructional/<knot-id>/*.svg` (conditional), `knot-media-renderer.js`, `forest-journal.css` | SVG text inventory + step/visual cross-check | OPEN | OPEN |
| KG-CP5-015 | CP5.3 | Theme-aware phone-first/orientation-flexible presentation + geometry accuracy validation | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `knot-media-renderer.js`, `forest-journal.css` | Responsive/theme/accessibility/geometry review | OPEN | OPEN |


| KG-CP5-016 | CP5.4 | Reuse-first public-domain/open-license sourcing + asset-level rights verification | BUILD TEST REQUIRED / VERIFY | `images/knots/instructional/<knot-id>/*.svg` (conditional), `data/media.js` (conditional), `knot-media-renderer.js`, `tools/validate_repository_integrity.js` | Four-Core asset rights/provenance + suitability review | OPEN | OPEN |
| KG-CP5-017 | CP5.4 | Reusable media must pass canonical/geometry/mobile/visual-grammar suitability; custom SVG fallback otherwise | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `data/media.js` (conditional), `knot-media-renderer.js`, `tools/validate_repository_integrity.js` | Four-Core rights + technical suitability matrix | OPEN | OPEN |
| KG-CP5-018 | CP5.4 | Custom SVG geometry deliberately constructed/verified; generated imagery not geometry authority or trace source | BUILD TEST REQUIRED / VERIFY | `images/knots/instructional/<knot-id>/*.svg` (conditional), `data/media.js` (conditional), `knot-media-renderer.js`, `tools/validate_repository_integrity.js` | Geometry provenance + state technical review | OPEN | OPEN |
| KG-CP5-019 | CP5.4 | One inspectable SVG per state as prototype packaging default; avoid premature dynamic media architecture | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `data/media.js` (conditional), `knot-media-renderer.js`, `tools/validate_repository_integrity.js` | File/loader simplicity + maintainability review | OPEN | OPEN |
| KG-CP5-020 | CP5.4 | Per-state technical validation checklist | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `data/media.js` (conditional), `knot-media-renderer.js`, `tools/validate_repository_integrity.js` | Completed state checklist across Core prototype | OPEN | OPEN |
| KG-CP5-021 | CP5.4 | Sequence + finished-Knot validation with reject/rework rule | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `data/media.js` (conditional), `knot-media-renderer.js`, `tools/validate_repository_integrity.js` | Full sequence + final-state review | OPEN | OPEN |
| KG-CP5-022 | CP5.4 | Progressive prototype order + all-four acceptance before promotion proposal | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `data/media.js` (conditional), `knot-media-renderer.js`, `tools/validate_repository_integrity.js` | Progressive results + four-Knot acceptance summary | OPEN | OPEN |
| KG-CP5-023 | CP5.5 | External instruction remains in HOW TO TIE IT before/after any later FCC promotion | BUILD REQUIRED / VERIFY | `data/media.js`, `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | All-10-Knot placement + browser review | OPEN | OPEN |
| KG-CP5-024 | CP5.5 | Medium-specific labels/provider attribution + `↗` external / `→` internal convention | BUILD REQUIRED / VERIFY | `data/media.js`, `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | Label/provider/affordance review | OPEN | OPEN |
| KG-CP5-025 | CP5.5 | Link external media; no copy/rehost/extract without separately verified reuse rights | VERIFY ONLY | `data/media.js` (rights/source owner), `knot-media-renderer.js` | Rights/provenance + asset/link inventory | OPEN | OPEN |
| KG-CP5-026 | CP5.5 | One preferred external instructional destination per Knot by default | VERIFY ONLY | `data/media.js` (rights/source owner), `knot-media-renderer.js` | All-10-Knot destination-count/rationale inventory | OPEN | OPEN |
| KG-CP5-027 | CP5.5 | External failure remains non-blocking + active link verification | VERIFY ONLY / BUILD REQUIRED IF DEFECT FOUND | `data/media.js`, `knot-media-renderer.js`; `tools/check_external_references.js` verify-only | External-link + failure-state review | OPEN | OPEN |
| KG-CP5-028 | CP5.5 | External round-trip context preservation + More visual instruction placement experiment | BUILD TEST REQUIRED | `knot-media-renderer.js`, `view-renderer.js`, `script.js`, `forest-journal.css` | State restoration + responsive teaching-flow review | OPEN | OPEN |
| KG-CP5-029 | CP5.6 | One responsive teaching hierarchy; phone authoritative / no desktop-only essential instruction | BUILD TEST REQUIRED | `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | Hierarchy + overflow + information-parity review | OPEN | OPEN |
| KG-CP5-030 | CP5.6 | Consistent Previous/Next semantics + accessible focus/disabled-state behavior | BUILD REQUIRED / VERIFY | `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | Keyboard/touch/focus state matrix | OPEN | OPEN |
| KG-CP5-031 | CP5.6 | Intermediate stacked default + shared FCC breakpoints unless concrete defect | BUILD TEST REQUIRED / VERIFY | `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | Tablet/intermediate + breakpoint inventory | OPEN | OPEN |
| KG-CP5-032 | CP5.6 | Desktop stacked-vs-side-by-side bounded layout experiment | BUILD TEST REQUIRED | `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | Full-desktop Core-prototype A/B review | OPEN | OPEN |
| KG-CP5-033 | CP5.6 | Orientation-flexible SVG/viewBox + stable viewer geometry across state changes | BUILD TEST REQUIRED | `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | Four-Core state-transition layout review | OPEN | OPEN |
| KG-CP5-034 | CP5.6 | Full numbered steps remain accessible/non-interactive; current-step emphasis + Double Uni/Arbor stress test | BUILD TEST REQUIRED / VERIFY | `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | Full-step accessibility + responsive stress test | OPEN | OPEN |
| KG-CP5-035 | CP5.7 | Current working Knot Detail/instructional experience remains implementation baseline; refine rather than assume replacement | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `data/media.js` (conditional), `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | Baseline-vs-refined representative browser comparison | OPEN | OPEN |
| KG-CP5-036 | CP5.7 | Four-Core media prototype is an evidence test, not a predetermined viewer proof | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `data/media.js` (conditional), `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | Four-Core treatment comparison + explicit verdict | OPEN | OPEN |
| KG-CP5-037 | CP5.7 | No mandatory FCC-owned media for remaining six before prototype verdict; expansion/per-Knot variation evidence-driven | VERIFY ONLY | `data/media.js` + `images/knots/instructional/` scope guard; no six-Knot expansion before verdict | Media-scope inventory before/after verdict | OPEN | OPEN |
| KG-CP5-038 | CP5.7 | External instruction protected through replacement validation; permanent retention/placement/removal remains build-test refinement | BUILD TEST REQUIRED | `images/knots/instructional/<knot-id>/*.svg` (conditional), `data/media.js` (conditional), `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | Post-replacement teaching-flow/value comparison | OPEN | OPEN |
| KG-CP5-039 | CP5.7 | Outcome-based closure: complete/correct/non-regressive/no partial local sequence/accessible-responsive | VERIFY ONLY / BUILD REQUIRED IF DEFECT FOUND | `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css`, `tools/validate_repository_integrity.js` | Technical/regression/accessibility/responsive checklist | OPEN | OPEN |
| KG-CP5-040 | CP5.7 | CP8 separates known scope from decision gates; CP9 resolves actual final media treatment without assumed outcome | DEFERRED — CP8 implementation scope lock / CP9 browser validation | `images/knots/instructional/<knot-id>/*.svg` (conditional), `data/media.js` (conditional), `knot-media-renderer.js`, `view-renderer.js`, `forest-journal.css` | CP8 traceability + CP9 disposition readback | OPEN | OPEN |
| KG-CP6-001 | CP6.1 | Preserve first-class branching Reel Setup architecture | VERIFY ONLY | `script.js` | Branch/path inventory + browser walkthrough | OPEN | OPEN |
| KG-CP6-002 | CP6.1 | Reserve special workflow-card treatment for true special surfaces; ordinary internal choices use normal treatment | BUILD REQUIRED | `script.js`, `forest-journal.css` | Representative choice-screen review | OPEN | OPEN |
| KG-CP6-003 | CP6.1 | Full-width primary progression + separate Restart Setup / Exit to Knots utility row | BUILD TEST REQUIRED | `script.js`, `forest-journal.css` | Responsive control-layout + touch-target review | OPEN | OPEN |
| KG-CP6-004 | CP6.1 | Beginner-facing Restart/Exit wording; remove exposed Package 3 terminology | BUILD REQUIRED | `data/reel-guidance.js`, `script.js` | Full-workflow text/control inventory | OPEN | OPEN |
| KG-CP6-005 | CP6.1 | Restart resets Reel Setup without unnecessarily destroying external origin/return context | BUILD REQUIRED | `script.js` | Origin-context restart regression test | OPEN | OPEN |
| KG-CP6-006 | CP6.1 | Exit to Knots is destructive exit to Knots landing with no implied resume session | BUILD REQUIRED / VERIFY | `script.js` | Exit/fresh-entry state test | OPEN | OPEN |
| KG-CP6-007 | CP6.1 | Selected-choice values use shared workflow blue while summary surface stays theme-based/noninteractive | BUILD REQUIRED / BUILD TEST | `script.js`, `forest-journal.css` | Theme/contrast/browser review | OPEN | OPEN |
| KG-CP6-008 | CP6.1 | Combined but clearly partitioned Selected Choices + Setup Progress status section | BUILD TEST REQUIRED | `script.js`, `forest-journal.css` | Responsive hierarchy review | OPEN | OPEN |
| KG-CP6-009 | CP6.1 / superseded by CP6.5 | Final fixed noninteractive five-phase Reel → Line → Equipment → Spool → Ready progress model | BUILD TEST REQUIRED | `script.js`, `forest-journal.css` | Phase-state + responsive + accessibility review | OPEN | OPEN |
| KG-CP6-010 | CP6.1 | Preserve responsive baseline and validate new status/utilities across shared breakpoints | VERIFY ONLY / BUILD TEST REQUIRED | `script.js`, `forest-journal.css` | Responsive regression comparison | OPEN | OPEN |
| KG-CP6-011 | CP6.2 | Three actual reel choices; direct actual selection to Line Selection | VERIFY ONLY / BUILD REQUIRED IF CURRENT fourth choice remains | `data/reel-guidance.js`, `script.js` | Choice inventory + route test | OPEN | OPEN |
| KG-CP6-012 | CP6.2 | Spinning Reel carries Recommended First Setup cue without confusing identification | BUILD REQUIRED / BUILD TEST REQUIRED | `data/reel-guidance.js`, `script.js`, `forest-journal.css` | Beginner comprehension + visual hierarchy review | OPEN | OPEN |
| KG-CP6-013 | CP6.2 | Beginner-visible physical reel-recognition copy | BUILD REQUIRED | `data/reel-guidance.js`, `script.js` | Content + browser review | OPEN | OPEN |
| KG-CP6-014 | CP6.2 | Remove separate I'm Not Sure / Which Reel Matches Yours workflow branch | BUILD REQUIRED | `data/reel-guidance.js`, `script.js` | Branch inventory + direct-route test | OPEN | OPEN |
| KG-CP6-015 | CP6.2 | Inline Not sure which reel you have? `ⓘ` Reference trigger | BUILD REQUIRED | `script.js`, `view-renderer.js`, `forest-journal.css` | Pointer/touch/keyboard/focus review | OPEN | OPEN |
| KG-CP6-016 | CP6.2 | Three-page reel-identification Reference surface with optional representative/labeled visual | BUILD TEST REQUIRED | `data/reel-guidance.js`, `view-renderer.js`, `script.js`, `forest-journal.css` | Multi-page content/visual recognition review | OPEN | OPEN |
| KG-CP6-017 | CP6.2 | Explicit Previous/Next + position; swipe optional; no autoplay; no workflow-state mutation | BUILD REQUIRED / BUILD TEST REQUIRED | `data/reel-guidance.js`, `view-renderer.js`, `script.js`, `forest-journal.css` | Keyboard/touch/swipe/focus/state review | OPEN | OPEN |
| KG-CP6-018 | CP6.2 | Remove obsolete Back to Reel Choices + obsolete identification workflow state/navigation | BUILD REQUIRED | `data/reel-guidance.js`, `script.js` | Dead-route/state inventory | OPEN | OPEN |
| KG-CP6-019 | CP6.2 | Preserve downstream reset behavior + keep Reference inside Reel progress phase | VERIFY ONLY | `script.js` | State-reset + phase matrix | OPEN | OPEN |
| KG-CP6-020 | CP6.2 → CP6.3 | Reconcile beginner baseline to Spinning → All-Around Freshwater → 10 lb Monofilament | DEFERRED — CP6.3 | `data/reel-guidance.js`, `script.js` | Recommendation + equipment-guidance reconciliation | OPEN | OPEN |


| KG-CP6-021 | CP6.3 | Derive canonical Fish category titles; Crappie & Sunfish replaces duplicated Panfish wording | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | `data/reel-guidance.js`, `script.js` | Canonical-title mutation + card inventory | OPEN | OPEN |
| KG-CP6-022 | CP6.3 | All-Around first + Fish Guide canonical category order reuse | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | `data/reel-guidance.js`, `script.js` | Ordering comparison | OPEN | OPEN |
| KG-CP6-023 | CP6.3 | Target recommendation-page wording review | BUILD REQUIRED / BUILD TEST REQUIRED | `data/reel-guidance.js`, `script.js` | Six-target content/browser matrix | OPEN | OPEN |
| KG-CP6-024 | CP6.3 | All-Around baseline 10 lb Mono; 8 lb lighter alternative | BUILD REQUIRED | `data/reel-guidance.js`, `script.js` | Recommendation reconciliation | OPEN | OPEN |
| KG-CP6-025 | CP6.3 | Reconcile six targets x supported Line Types; no blind Mono relabel | CONTENT RECONCILIATION / BUILD REQUIRED | `data/reel-guidance.js`, `script.js` | Target x Line Type matrix | OPEN | OPEN |
| KG-CP6-026 | CP6.3 | Replace target-page compatibility Next card with Line Weight selection/confirmation | BUILD REQUIRED / BUILD TEST REQUIRED | `data/reel-guidance.js`, `script.js`, `forest-journal.css` | Interaction matrix | OPEN | OPEN |
| KG-CP6-027 | CP6.3 | Rolling Line Weight selector preferred build candidate | BUILD TEST REQUIRED | `script.js`, `forest-journal.css` | Touch/keyboard/responsive comparison | OPEN | OPEN |
| KG-CP6-028 | CP6.3 | Explicit dynamic Continue confirms Line Weight; no selector auto-advance | BUILD REQUIRED / BUILD TEST REQUIRED | `script.js` | Confirmation/state test | OPEN | OPEN |
| KG-CP6-029 | CP6.3 | Persist transient actual Line Weight + show in Selected Choices | BUILD REQUIRED | `script.js` | State/reset/status matrix | OPEN | OPEN |
| KG-CP6-030 | CP6.3 | Equipment copy uses actual confirmed Line Type + Line Weight | BUILD REQUIRED | `data/reel-guidance.js`, `script.js` | Dynamic-copy matrix | OPEN | OPEN |
| KG-CP6-031 | CP6.3 | Equipment education only; no FCC compatibility pass/fail or blocking | BUILD REQUIRED / VERIFY | `data/reel-guidance.js`, `script.js` | Out-of-recommendation progression + copy review | OPEN | OPEN |
| KG-CP6-032 | CP6.3 | Preserve Reel/Rod reading guidance + labeled reel/spool diagram | BUILD REQUIRED / BUILD TEST REQUIRED | `data/reel-guidance.js`, `view-renderer.js`, `script.js`, `forest-journal.css` | Reference/diagram/responsive review | OPEN | OPEN |
| KG-CP6-033 | CP6.3 | Build-time wording pass for Target -> Recommendation/Selection -> Equipment | BUILD TEST REQUIRED | `data/reel-guidance.js`, `script.js` | End-to-end beginner comprehension | OPEN | OPEN |
| KG-CP6-034 | CP6.3 | Approved six-target starting-reference values incl. Bass/Catfish corrections | BUILD REQUIRED | `data/reel-guidance.js`, `script.js` | Six-target value/content + browser matrix | OPEN | OPEN |
| KG-CP6-035 | CP6.3 | Selector initializes only from exact approved target + Line Type numeric recommendation; otherwise unconfirmed | BUILD REQUIRED / BUILD TEST REQUIRED | `data/reel-guidance.js`, `script.js` | Line Type x target initialization matrix | OPEN | OPEN |
| KG-CP6-036 | CP6.3 | Replace Help Me Choose / I'm Not Sure Line branches with inline Line Type Reference trigger | BUILD REQUIRED | `data/reel-guidance.js`, `view-renderer.js`, `script.js` | Dead-branch/state + navigation review | OPEN | OPEN |
| KG-CP6-037 | CP6.3 | Three-page Line Type Reference for Mono/Fluoro/Braid | BUILD REQUIRED / BUILD TEST REQUIRED | `data/reel-guidance.js`, `view-renderer.js`, `script.js`, `forest-journal.css` | Keyboard/touch/focus/state/responsive review | OPEN | OPEN |
| KG-CP6-038 | CP6.3 | Remove equipment confirmation/mismatch/completed states; educational Equipment + normal Continue | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | `data/reel-guidance.js`, `script.js` | Dead-state inventory + workflow regression | OPEN | OPEN |
| KG-CP6-039 | CP6.3 | Consolidated Equipment Reference: Read Reel / Read Rod / If Ratings Don't Match | BUILD REQUIRED / BUILD TEST REQUIRED | `data/reel-guidance.js`, `view-renderer.js`, `script.js`, `forest-journal.css` | Reference content/focus/responsive review | OPEN | OPEN |
| KG-CP6-040 | CP6.3 | Spincast + Braid remains informational manufacturer-check safeguard, non-blocking | BUILD REQUIRED / VERIFY | `data/reel-guidance.js`, `script.js` | Combination-path wording/progression test | OPEN | OPEN |


## CP6.4 — Backing + Spool Connection


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED


### Locked / Approved


- Backing is a smart **Braid-only** decision. Mono/Fluoro bypass Backing and enter Spool directly.
- Braid offers **Monofilament Backing — Recommended First Setup** or **Direct Braid — Manufacturer Supported** for the exact reel/spool.
- Optional/economy backing is not exposed for Mono/Fluoro in Version 1.
- Equipment compatibility-complete gating is obsolete and cannot block this phase.
- Replace the conceptual **Spool Connection Plan → Spool the Reel** split with one chronological **Spool** phase: prepare → attach → wind/connect as required → fill → check.
- Mono/Fluoro path: prepare → Arbor Knot → wind main line → check fill.
- Braid + Mono Backing path: prepare → Arbor Knot backing-to-spool → wind backing → Double Uni backing-to-Braid → wind Braid → check fill.
- Direct Braid path: manufacturer-supported direct attachment → wind Braid → check fill; do not use Arbor as FCC's generic direct-Braid answer.
- Knot handoffs occur at the physical point where the Knot is needed and return to the same Spool context with state, scroll/focus, and originating-action continuity.
- Confirmed Line Type + Line Weight propagate through Spool copy and a simple semantic line-system visualization.
- Do not fabricate universal backing strength/yardage from data the workflow does not collect.
- Mono/Fluoro direct routing is derived behavior, not a fake user backing choice.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP6-041 | Remove obsolete Equipment compatibility-complete dependency from Backing/Spool progression. | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | `data/reel-guidance.js`, `script.js` | State/route inventory + non-blocking progression matrix | OPEN |
| KG-CP6-042 | Make Backing conditional on actual Line Type: Braid only; Mono/Fluoro bypass directly into Spool. | BUILD REQUIRED / VERIFY | `data/reel-guidance.js`, `script.js` | Three-Line-Type branch matrix | OPEN |
| KG-CP6-043 | For Braid, present Monofilament Backing as Recommended First Setup and Direct Braid only as Manufacturer Supported. | BUILD REQUIRED / BUILD TEST REQUIRED | `data/reel-guidance.js`, `script.js`, `forest-journal.css` | Braid path content + hierarchy review | OPEN |
| KG-CP6-044 | Do not expose optional/economy backing under Mono/Fluoro in Version 1. | BUILD REQUIRED / VERIFY | `data/reel-guidance.js`, `script.js` | Mono/Fluoro branch inventory | OPEN |
| KG-CP6-045 | Make Equipment progression conditional: Braid → Decide on Backing; Mono/Fluoro → Spool; preserve Spincast+Braid as non-blocking warning. | BUILD REQUIRED / BUILD TEST REQUIRED | `data/reel-guidance.js`, `script.js` | Reel Type x Line Type progression matrix | OPEN |
| KG-CP6-046 | Collapse the conceptual Spool Connection Plan / Spool the Reel split into one chronological Spool-phase experience with internal substeps as needed. | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | `data/reel-guidance.js`, `script.js`, `forest-journal.css` | State inventory + chronological path walkthrough | OPEN |
| KG-CP6-047 | Implement direct Mono/Fluoro sequence: reel-specific prepare/routing → Arbor Knot → return to same Spool point → wind main line → fill check. | BUILD REQUIRED / BUILD TEST REQUIRED | `data/reel-guidance.js`, `script.js` | Reel Type x direct-line browser walkthrough | OPEN |
| KG-CP6-048 | Implement Braid + Mono Backing sequence: Arbor → wind backing → Double Uni → wind Braid → fill check. | BUILD REQUIRED / BUILD TEST REQUIRED | `data/reel-guidance.js`, `script.js` | Braid-backing chronological walkthrough | OPEN |
| KG-CP6-049 | Direct Braid uses exact manufacturer-supported attachment and must not receive generic Arbor guidance. | BUILD REQUIRED / VERIFY | `data/reel-guidance.js`, `script.js` | Direct-Braid path review | OPEN |
| KG-CP6-050 | Place task-worded Arbor/Double Uni handoffs at the physical action point and restore complete Spool state, originating action, scroll where appropriate, and keyboard focus on return. | BUILD REQUIRED / BUILD TEST REQUIRED | `script.js` | Keyboard/touch/focus/scroll/state round-trip | OPEN |
| KG-CP6-051 | Propagate confirmed Line Type + Line Weight through Spool guidance and build-test a simple responsive semantic line-system visualization. | BUILD REQUIRED / BUILD TEST REQUIRED | `data/reel-guidance.js`, `script.js`, `forest-journal.css` | Dynamic-state matrix + responsive visual review | OPEN |
| KG-CP6-052 | Do not invent universal backing pound-test or yardage when reel capacity/backing diameter/main-line length are unknown; manufacturer capacity guidance remains authoritative. | CONTENT / VERIFY | `data/reel-guidance.js` | Content review across Braid paths | OPEN |
| KG-CP6-053 | Treat Mono/Fluoro direct-spool behavior as derived routing, not an explicit No Separate Backing user selection or Selected Choices value. | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | `data/reel-guidance.js`, `script.js` | State + displayed-choice inventory | OPEN |


## CP6.5 — Leader Scope Boundary


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED


### Locked / Approved


- **Leader is removed from Get Your Reel Ready as a workflow phase.** A correctly spooled reel does not require a leader to be complete.
- Final progress becomes **Reel → Line → Equipment → Spool → Ready**, superseding the CP6.1 six-phase tracker.
- Remove Do You Need a Leader?, Leader Material, and Leader Setup branches from Reel Setup.
- Remove `leaderChoice` from Reel Setup state and Selected Choices.
- Do not prescribe generic leader material, pound-test, or approximately 3–4 ft length inside Reel Setup.
- Do not surface Double Uni solely to complete a Leader phase.
- Keep leader education as optional, non-blocking **Reference Knowledge**, especially for Braid. Reference opening/closing does not mutate workflow state or imply incomplete reel readiness.
- Actual leader material/strength/length/connection belongs to later Rig/presentation context where FCC knows enough to give meaningful guidance.
- Ready validates the completed reel/main-line/backing system, not a leader.
- CP6.6 owns the final Ready screen + Rig handoff and must resolve preservation/use of completed Reel Setup context after leaving the workflow.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP6-054 | Replace the earlier six-phase tracker with final five-phase Reel → Line → Equipment → Spool → Ready progression. | BUILD REQUIRED / BUILD TEST REQUIRED | `script.js`, `forest-journal.css` | Phase-state + responsive/accessibility matrix | OPEN |
| KG-CP6-055 | Remove Leader Decision, Leader Material, and Leader Setup workflow states/routes and their stale prerequisite/back-navigation logic. | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | `data/reel-guidance.js`, `script.js` | Dead-state/route inventory | OPEN |
| KG-CP6-056 | Remove `leaderChoice` from Reel Setup state, Selected Choices, and Ready prerequisites. | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | `script.js` | State/schema/display inventory | OPEN |
| KG-CP6-057 | Remove generic leader material/length construction guidance and Double Uni handoff from Reel Setup. | BUILD REQUIRED / CONTENT RECONCILIATION | `data/reel-guidance.js`, `script.js` | Content + dead-guidance inventory | OPEN |
| KG-CP6-058 | Provide optional non-blocking Leader Reference Knowledge where contextually useful, especially for Braid; Reference must not mutate Reel Setup state or imply incomplete reel readiness. | BUILD REQUIRED / BUILD TEST REQUIRED | `data/reel-guidance.js`, `view-renderer.js`, `script.js`, `forest-journal.css` | Reference trigger + keyboard/touch/focus/state review | OPEN |
| KG-CP6-059 | Defer actual leader material/strength/length/connection decisions to later Rig/presentation context. | STRUCTURAL / CONTENT VERIFY | `data/rigs.js` (read-only ownership check), `script.js` (no generic Leader landing behavior) | Cross-Guide ownership review | OPEN |
| KG-CP6-060 | Make Ready validate the completed reel/main-line/backing system only; CP6.6 now owns the locked completion/handoff details. | BUILD REQUIRED / DETAIL LOCKED — CP6.6 | `data/reel-guidance.js`, `script.js` | Ready-state + handoff matrix | OPEN |


## CP6.6 — Ready Check + Rig Handoff


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED


### Locked / Approved


- **Reel Ready** means the reel is correctly spooled and its reel/main-line/backing system is ready for the next setup step; it does not mean terminal Rig, Leader, bait/lure, or cast-ready completion.
- Final phase remains **Ready** in the fixed **Reel → Line → Equipment → Spool → Ready** progression.
- Final screen title is **Reel Ready** and reuses Selected Choices plus the CP6.4 semantic line-system summary. Mono/Fluoro must not gain a fake No Separate Backing choice.
- Final physical checks cover routing/operation, even/non-overfilled spool fill with manufacturer guidance authoritative, secure connections actually used, and final main-line fit against the reel/rod guidance reviewed earlier. No Leader check and no FCC PASS/FAIL adjudication.
- Primary completion action is **Choose a Rig →**: finish Reel Setup, snapshot useful context, open normal Rig Guide landing, and do not select a Rig automatically.
- Incomplete phases retain **Restart Setup** + **Exit to Knots**. Completed Ready uses **Restart Setup** + **Done — Knots Guide**.
- Preserve transient completed context containing Reel Type, Target Fish / All-Around target, Line Type, confirmed Line Weight, and conditional Backing only. Do not carry entry mode, obsolete Equipment pass/fail state, Leader state, obsolete step IDs, or UI-only state.
- Completed context is runtime/session-only: preserve it through Rig Guide browse/search/detail navigation for the setup journey, clear it on deliberate new/restarted Reel Setup, do not persist it as User Knowledge/account data, and do not require reload persistence.
- Rig Guide shows compact noninteractive **Your Reel Setup** context when entered from completed Reel Setup. Do not filter/rank/hide/select Rigs or infer compatibility from this context without a separately approved recommendation contract.
- Preserve Target and completed line-system context for later context-aware Rig/Leader guidance where sufficient Rig/presentation information exists; do not add generic Leader decisions to the Rig Guide landing page.
- **Choose a Rig →** is forward progression, not a temporary excursion; clear obsolete internal Reel Setup history while retaining completed context separately. Rig Guide Parent does not return to completed Reel Setup.
- Ready Previous returns to the final Spool state; obsolete Leader navigation is removed.
- CP6 closes here. CP7 owns JavaScript/data structural audit; CP8 locks exact source/file scope; CP9 owns build/browser validation.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP6-061 | Define Ready as completed reel/main-line/backing system, not complete fishable terminal setup. | BUILD REQUIRED / CONTENT VERIFY | `data/reel-guidance.js`, `script.js` | Ready-content + prerequisite matrix | OPEN |
| KG-CP6-062 | Remove Leader, Equipment-compatible, and unconditional Backing prerequisites from Ready; apply conditional readiness semantics for direct Mono/Fluoro and Braid paths. | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | `data/reel-guidance.js`, `script.js` | Ready prerequisite/state matrix | OPEN |
| KG-CP6-063 | Replace Ready checklist with concise routing/function, spool-fill, connection, and equipment-reference checks; keep manufacturer guidance authoritative and no FCC PASS/FAIL. | BUILD REQUIRED / CONTENT VERIFY | `data/reel-guidance.js`, `script.js` | Four-path content + physical-check review | OPEN |
| KG-CP6-064 | Reuse Selected Choices and semantic line-system summary on Ready; do not fabricate No Separate Backing for Mono/Fluoro. | BUILD REQUIRED / BUILD TEST REQUIRED | `script.js`, `forest-journal.css` | Representative Ready-state responsive review | OPEN |
| KG-CP6-065 | Use **Choose a Rig →** as primary completion/handoff; open normal Rig Guide and do not automatically select a Rig. | BUILD REQUIRED / VERIFY | `script.js` | Ready → Rig Guide route test | OPEN |
| KG-CP6-066 | Use **Done — Knots Guide** on completed Ready while preserving **Exit to Knots** on incomplete phases. | BUILD REQUIRED / VERIFY | `script.js` | Complete-vs-incomplete control inventory | OPEN |
| KG-CP6-067 | Create compact transient completed Reel Setup context: Reel Type, Target, Line Type, Line Weight, and conditional Backing only. | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | `script.js` | State-schema/capture/reset matrix | OPEN |
| KG-CP6-068 | Preserve completed context through Rig Guide browse/search/detail navigation for the setup journey without persistent User Knowledge/account storage or reload requirement. | BUILD REQUIRED / BUILD TEST REQUIRED | `script.js` | Rig landing/browse/search/detail persistence regression | OPEN |
| KG-CP6-069 | Show compact noninteractive **Your Reel Setup** summary in Rig Guide when entered from completed Reel Setup. | BUILD REQUIRED / BUILD TEST REQUIRED | `script.js`, `forest-journal.css` | Context/no-context + responsive/accessibility review | OPEN |
| KG-CP6-070 | Do not filter, rank, hide, select, or declare Rig compatibility from completed Reel Setup context without separately approved recommendation behavior. | VERIFY ONLY / GUARDRAIL | `script.js`, `search.js` (verify-only Rig result semantics) | Result-set/ranking/auto-selection regression | OPEN |
| KG-CP6-071 | Preserve completed line-system context as available input for later contextual Rig/Leader guidance; do not implement generic Leader decisions at Rig landing. | STRUCTURAL / CONTENT VERIFY | `data/rigs.js` (read-only), `script.js` (guardrail) | Cross-Guide ownership + no-generic-Leader review | OPEN |
| KG-CP6-072 | Make Ready Previous return to final Spool state and remove obsolete Leader back-navigation. | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | `script.js` | Previous-route + dead-state inventory | OPEN |
| KG-CP6-073 | Validate Ready completion and Rig handoff across Mono, Fluoro, Braid + Mono Backing, and manufacturer-supported Direct Braid paths. | BUILD TEST REQUIRED | `script.js` | Four-path completion/handoff browser matrix | OPEN |


# KG Audit — CP7 — JavaScript / Data Structural Audit


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — CP7.1-CP7.4 CLOSED


## CP7.1 — `script.js` Ownership + Reel Setup State Structure


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-24


### Audit Boundary


CP7 is segmented by Guide/feature ownership. It does **not** authorize a whole-file rewrite of shared JavaScript. For `script.js`, audit and implementation scope is limited to Knots/Reel-owned code plus directly relevant shared infrastructure/handoff seams. Unrelated Guide sections remain untouched unless a genuinely shared dependency requires a bounded adjustment.


### Locked / Approved Structural Decisions


- Add an explicit **KNOTS GUIDE — STATE + DATA ACCESS + CONTROLLERS** ownership boundary in `script.js`, with a nested **GET YOUR REEL READY — STATE + CONTROLLERS** area for workflow-specific state and behavior.
- Keep genuinely shared application infrastructure shared, including the route registry, renderer registry, common `showView()` routing, and the generic detail-navigation stack.
- Move Knot/Reel-specific runtime state out of the shared runtime-state block and into the Knots ownership boundary.
- Cross-Guide handoff helpers are owned by the **originating Guide/feature** unless the helper is genuinely symmetric shared infrastructure. Therefore `openRigDetailFromKnot()` belongs in the Knots boundary; destination Rig rendering remains Rig-owned.
- Separate Reel Setup **internal screen identity** from the fixed user-facing progress model **Reel → Line → Equipment → Spool → Ready**. Multiple internal screens may map to one phase; contextual Reference surfaces do not become workflow-state IDs.
- Remove obsolete CP6 states/routes/prerequisites instead of adapting them: Reel Identification Help as workflow state, Line Help/Identification/Selection Complete, equipment confirmation/mismatch/complete states, Leader Decision/Material/Setup states, and stale back-navigation/prerequisite logic tied to them.
- Add confirmed **Line Weight** as real transient Reel Setup state because CP6 now requires it downstream.
- Make Backing state **Braid-only**. Direct Monofilament/Fluorocarbon spooling is derived routing and must not create a stored `No Separate Backing` choice.
- Separate fresh workflow launch, **Restart Setup**, and **Exit to Knots** responsibilities. Restart resets Reel Setup internal state without destroying legitimate external origin context; Exit deliberately leaves the workflow.
- Add Reel-specific navigation capture/restore behavior for Knot excursions so return restores the same physical Spool point, originating action, applicable scroll position, and keyboard focus. The generic stack remains shared; Reel-specific state capture/restore remains Knots/Reel-owned.
- Keep the completed Reel Setup handoff snapshot separate from live workflow state. The compact shared transient context contains Reel Type, Target / All-Around target, Line Type, confirmed Line Weight, and conditional Backing only; it is runtime/session-only and is not User Knowledge.
- Implementation remains a **targeted Knots/Reel refactor**. A broader `script.js` rewrite/split requires a separate architecture decision supported by accumulated evidence.


### Confirmed Source Findings


- Current `script.js` places Knot/Reel-specific state in the shared runtime-state section even though the file already demonstrates a stronger explicit ownership pattern for Fish.
- Current Reel Setup state still mixes workflow phases, intermediate screens, help/reference screens, Equipment pass/fail states, Spool subflows, and obsolete Leader states in one step-ID model.
- Current Ready/handoff logic does not yet preserve the CP6.6 completed Reel context independently from internal workflow history.
- Current Knot-to-Rig handoff placement does not follow the approved originating-Guide ownership rule.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP7-001 | Create explicit Knots + nested Get Your Reel Ready ownership boundaries in `script.js`; keep unrelated Guide sections untouched. | BUILD REQUIRED | `script.js` | Source-boundary inventory + regression review | OPEN |
| KG-CP7-002 | Keep route registry, renderer registry, `showView()`, and generic detail-navigation infrastructure in clearly marked shared ownership. | VERIFY ONLY | `script.js` | Shared-vs-Guide ownership review | OPEN |
| KG-CP7-003 | Move Knot/Reel-specific runtime state from shared runtime state into the Knots boundary. | BUILD REQUIRED | `script.js` | State-owner inventory | OPEN |
| KG-CP7-004 | Own cross-Guide handoff helpers by the originating Guide; relocate Knot-originated Rig handoff behavior accordingly. | BUILD REQUIRED / ARCHITECTURE RULE | `script.js` | Origin/destination handoff inventory | OPEN |
| KG-CP7-005 | Separate Reel Setup internal screen identity from derived five-phase progress state. Reference/help surfaces must not become workflow-state IDs. | BUILD REQUIRED | `data/reel-guidance.js`, `script.js` | Screen-to-phase matrix + reference-state audit | OPEN |
| KG-CP7-006 | Remove obsolete CP6 Reel/Line/Equipment/Leader states, routes, prerequisites, and stale navigation; add confirmed Line Weight state. | BUILD REQUIRED | `data/reel-guidance.js`, `script.js` | Dead-state inventory + workflow regression | OPEN |
| KG-CP7-007 | Make Backing state Braid-only; Mono/Fluoro direct-spool behavior is derived and stores no fake backing choice. | BUILD REQUIRED | `data/reel-guidance.js`, `script.js` | Line Type x Backing state matrix | OPEN |
| KG-CP7-008 | Separate fresh launch, Restart Setup, and Exit to Knots semantics so Restart does not destroy legitimate external origin context. | BUILD REQUIRED | `script.js` | Launch/restart/exit context matrix | OPEN |
| KG-CP7-009 | Add Reel-specific capture/restore for Knot excursions, including physical Spool point, origin action, applicable scroll, and focus. | BUILD REQUIRED / BUILD TEST REQUIRED | `script.js` | Keyboard/touch/state/scroll/focus round-trip | OPEN |
| KG-CP7-010 | Store completed Reel Setup context separately from live workflow state and preserve only the CP6.6-approved transient fields. | BUILD REQUIRED | `script.js` | Capture/reset/persistence schema matrix | OPEN |
| KG-CP7-011 | Keep CP7 implementation targeted; do not rewrite/split the whole shared JS file without a separately approved architecture gate. | VERIFY ONLY / GUARDRAIL | CP8 locked file/range scope; verify changed-file/range boundaries only | Changed-range/file-scope review | OPEN |


### CP7.1 Close


CP7.1 is **CLOSED / APPROVED / refinement allowed**. No production JavaScript/data was changed by this approval gate.


## CP7.2 — `view-renderer.js` + `knot-media-renderer.js` Ownership + Media Integration


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-24


### Audit Boundary


CP7.2 is limited to Knots-owned rendering, the adjacent Rig ownership seam required to close the Knots boundary correctly, and Knot instructional-media integration. It does **not** authorize a Rig Guide, Regulations, or whole-renderer redesign.


### Locked / Approved Structural Decisions


- Close the explicit **KNOT GUIDE** ownership boundary in `view-renderer.js` after Knot Detail / Line Type Reference rendering.
- Move Rig-only helpers that consume Knot data for Rig presentation, including `getKnotRecord()` and `buildRigKnotApplications()`, into the adjacent Rig-owned rendering region. Consuming Knot data does not make a Rig Detail presentation helper Knots-owned.
- Remove the current cross-file monkey patch in `knot-media-renderer.js` that reassigns `renderKnotInstructionDetail()`. A renderer declared in one file must not be silently replaced by another feature file as its normal integration mechanism.
- Replace the monkey patch with an explicit instructional-media integration point/mount point owned by Knot Detail rendering. `view-renderer.js` owns the **HOW TO TIE IT** structure and where instructional media belongs; `knot-media-renderer.js` owns the media presentation supplied to that integration point.
- Keep instructional media structurally inside **HOW TO TIE IT**. Exact viewer/static/external/hybrid ordering and placement remain CP9 **BUILD TEST REQUIRED** evidence decisions under CP5.
- Preserve CP5's protected external instructional-media baseline while the four-Core-Knot FCC-owned prototype is tested. CP7.2 changes the integration architecture, not the media-treatment verdict.
- Broaden `knot-media-renderer.js` from the stale Package 4 external-link wrapper into the dedicated **Knot Guide — Instructional Media Rendering** presentation owner. Remove the obsolete Package 4 build label when the file is edited.
- Canonical instruction and media facts do not move into the renderer: `data/knots.js` retains `tyingSteps[]`/Knot facts, `data/media.js` retains Media records/provenance, and `knot-media-renderer.js` remains presentation-only.
- Keep CP7.2 targeted. Closing the adjacent ownership marker is required to make the Knots boundary truthful; unrelated Rig/Regulations renderer refactoring remains outside this gate.


### Confirmed Source Findings


- `view-renderer.js` opens **KNOT GUIDE — RESULT + LANDING + DETAIL RENDERING** but does not close that boundary before Rig/reference rendering begins.
- `getKnotRecord()` and `buildRigKnotApplications()` are physically inside the unclosed Knots region but are semantically Rig-owned because they render **Knots You'll Tie** on Rig Detail.
- `knot-media-renderer.js` currently captures and reassigns `renderKnotInstructionDetail()`, so successful media integration depends on script load order rather than an explicit interface.
- Current script order (`view-renderer.js` → `knot-media-renderer.js` → `script.js`) makes the patch work today, but the ownership dependency is implicit and brittle.
- Current media insertion uses `tyingSection.insertAdjacentHTML("afterend", mediaMarkup)`, placing visual instruction as a sibling after **HOW TO TIE IT** instead of structurally inside the approved teaching section.
- The current `knot-media-renderer.js` header/build label still describes the older external-media Package 4 implementation even though CP5 now allows external, FCC static SVG, step-through, or hybrid presentation after evidence.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP7-012 | Close the Knots rendering boundary in `view-renderer.js` and establish the adjacent Rig-owned region without broad Rig/Regulations refactoring. | BUILD REQUIRED | `view-renderer.js` | Source-boundary inventory + changed-range review | OPEN |
| KG-CP7-013 | Relocate Rig-only Knot lookup/presentation helpers, including `getKnotRecord()` and `buildRigKnotApplications()`, into Rig rendering ownership. | BUILD REQUIRED | `view-renderer.js` | Function ownership + Rig Detail regression review | OPEN |
| KG-CP7-014 | Remove the `renderKnotInstructionDetail()` monkey patch and replace it with an explicit Knot instructional-media integration point. | BUILD REQUIRED / ARCHITECTURE RULE | `view-renderer.js`, `knot-media-renderer.js` | Load-order independence + Knot Detail renderer regression | OPEN |
| KG-CP7-015 | Keep Knot instructional media structurally inside **HOW TO TIE IT** while leaving exact viewer/static/external/hybrid ordering to CP9 build testing. | BUILD REQUIRED / BUILD TEST REQUIRED | `view-renderer.js`, `knot-media-renderer.js`, `forest-journal.css` | Teaching-flow browser matrix across breakpoints | OPEN |
| KG-CP7-016 | Broaden `knot-media-renderer.js` to the dedicated instructional-media presentation owner and remove stale Package 4 labeling without moving canonical facts into the renderer. | BUILD REQUIRED | `knot-media-renderer.js` | Header/owner inventory + data-ownership check | OPEN |
| KG-CP7-017 | Preserve the existing verified external instructional baseline until CP5 prototype evidence supports an explicitly approved replacement/refinement. | VERIFY ONLY | `data/media.js`, `knot-media-renderer.js` | All-10-Knot instructional baseline regression | OPEN |
| KG-CP7-018 | Keep canonical Knot instructions in `data/knots.js` and Media records/provenance in `data/media.js`; renderer owns presentation only. | VERIFY ONLY / GUARDRAIL | `data/knots.js`, `data/media.js`, `knot-media-renderer.js` | Source/data ownership inventory | OPEN |
| KG-CP7-019 | Keep CP7.2 targeted; do not expand this boundary cleanup into unrelated Rig/Regulations rendering work. | VERIFY ONLY / GUARDRAIL | CP8 locked file/range scope; verify changed-file/range boundaries only | Changed-range/file-scope review | OPEN |


### CP7.2 Close


CP7.2 is **CLOSED / APPROVED / refinement allowed**. No production JavaScript/data/media was changed by this approval gate. **Next: CP7.3 — canonical Knot data vs Guide guidance ownership.**


## CP7.3 — Canonical Knot Data vs Guide Guidance Ownership


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-24


### Audit Boundary


CP7.3 is limited to ownership of canonical Knot records versus Knots Guide curation/discovery data and the directly relevant consumer seams. It does **not** authorize production data migration or Search algorithm changes at this gate.


### Locked / Approved Structural Decisions


- `data/knots.js` owns canonical per-Knot records and stable Knot metadata/content: identity, summary, lifecycle state, difficulty, connection type, compatible line type, genuine aliases, best-for guidance, limitations, tying steps, common mistakes, final checks, and references.
- `CORE_KNOT_IDS` is Knots Guide learning/collection curation rather than an intrinsic Knot fact and therefore moves to `data/knot-guidance.js`; the approved four-Knot Core membership/order does not change.
- Search-only `keywords[]` are removed from canonical Knot records. Guide-owned search intent/vocabulary moves to `data/knot-guidance.js`; canonical Knot names and genuine aliases remain in `data/knots.js`.
- Practical Knot task definitions, visible landing-task definitions, and search-intent vocabulary become distinct guidance concepts rather than one overloaded structure.
- `Attach Line to a Reel` remains valid practical/search/detail context and continues to map to Arbor Knot + Uni Knot, but it does not return as a peer landing task because **Get Your Reel Ready** owns that landing workflow entry.
- **Learn Core Knots** is the approved visible learning task and derives membership from the single Core registry rather than duplicating Core IDs.
- `KNOT_COLLECTIONS` is static Knots Guide curation and moves from `script.js` to `data/knot-guidance.js`; the superseded Version 1 **Advanced Knots / Coming Soon** collection configuration is removed while `Advanced` remains a valid future difficulty value.
- `search.js` continues to own normalization, matching, scoring, and deterministic relevance ordering. CP7.3 changes data ownership only and must preserve the approved Search relevance model and reel/spool discovery.
- Stable per-Knot metadata such as `difficulty` remains on canonical Knot records; CP7.3 does not fragment records merely for architectural purity.
- Implementation remains targeted to Knots-owned data and direct consumers.


### Confirmed Source Findings


- Current `data/knots.js` owns `CORE_KNOT_IDS` even though Core is explicitly a beginner learning/collection decision.
- Current `KNOT_TASK_DEFINITIONS` simultaneously drives landing tasks, Knot Detail common-task context, and Search vocabulary; this causes the obsolete peer **Attach Line to a Reel** task to remain structurally coupled to valid reel/spool Search discovery.
- Current canonical Knot records contain Search-only `keywords[]`; many phrases duplicate task vocabulary already present in `data/knot-guidance.js`, and `search.js` compensates by filtering duplicated shared task terms at runtime.
- Current `KNOT_COLLECTIONS` is static Guide curation stored in `script.js` even though `script.js` is being narrowed to Knots state/controllers.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP7-020 | Move `CORE_KNOT_IDS` from canonical Knot data to Knots Guide guidance without changing the approved four-Knot membership/order. | BUILD REQUIRED | `data/knots.js`, `data/knot-guidance.js`, `script.js`, `view-renderer.js`, `tools/validate_repository_integrity.js` | Core membership/order regression + source ownership review | CP9.1 CLOSED / PASS |
| KG-CP7-021 | Remove Search-only `keywords[]` from canonical Knot records and place maintained search intent/vocabulary in Guide guidance. | BUILD REQUIRED | `data/knots.js`, `data/knot-guidance.js`, `search.js`, `tools/validate_repository_integrity.js` | Query regression suite + duplicate vocabulary audit | CP9.1 CLOSED / PASS |
| KG-CP7-022 | Separate practical task definitions, visible landing tasks, and search-intent vocabulary into distinct guidance concepts. | BUILD REQUIRED | `data/knot-guidance.js`, `script.js`, `search.js` | Landing/task/detail/search matrix | CP9.1 CLOSED / PASS |
| KG-CP7-023 | Preserve `Attach Line to a Reel` as practical/search/detail context while preventing it from returning as a peer landing task. | BUILD REQUIRED / VERIFY | `data/knot-guidance.js`, `script.js`, `search.js` | Landing hierarchy + detail handoff + reel/spool Search review | CP9.2 CLOSED / PASS |
| KG-CP7-024 | Add/retain **Learn Core Knots** as the visible learning task and derive membership from the single Core registry. | BUILD REQUIRED | `data/knot-guidance.js`, `script.js`, `view-renderer.js` | Core task → Core collection navigation | CP9.2 CLOSED / PASS |
| KG-CP7-025 | Preserve Arbor Knot + Uni Knot reel/spool Search discovery after task/search data separation. | VERIFY ONLY / REGRESSION GUARD | `data/knot-guidance.js`, `search.js` | Deterministic reel/spool query suite | CP9.1 CLOSED / PASS |
| KG-CP7-026 | Move `KNOT_COLLECTIONS` out of `script.js` into Guide guidance and remove the superseded active V1 Advanced placeholder configuration. | BUILD REQUIRED | `data/knot-guidance.js`, `script.js` | Collection inventory + landing/browse regression | CP9.1 CLOSED / PASS |
| KG-CP7-027 | Keep Search normalization/scoring/ranking algorithms in `search.js`; data migration must not alter approved deterministic relevance semantics. | VERIFY ONLY / GUARDRAIL | `search.js` | Search algorithm diff + query suite | CP9.1 CLOSED / PASS |
| KG-CP7-028 | Keep stable per-Knot metadata such as difficulty on canonical Knot records rather than over-normalizing the schema. | VERIFY ONLY / GUARDRAIL | `data/knots.js` | Canonical schema inventory | CP9.1 CLOSED / PASS |
| KG-CP7-029 | Keep CP7.3 implementation targeted to Knots-owned data and direct consumers; do not broaden into unrelated Guide/data refactors. | VERIFY ONLY / GUARDRAIL | CP8 locked file/range scope; verify changed-file/range boundaries only | Changed-file/range review | CP9.1 CLOSED / PASS |


### CP7.3 Close


CP7.3 is **CLOSED / APPROVED / refinement allowed**. No production JavaScript/data was changed by this approval gate. **Next: CP7.4 — `search.js` ownership + Knot Search structure.**


## CP7.4 — `search.js` Ownership + Knot Search Structure


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-25


### Audit Boundary


CP7.4 is limited to `search.js` ownership, Knot Search structure, the post-CP7.3 guidance/data consumer seam, and directly relevant controller calls. It does **not** authorize Fish Search or Rig Search redesign, fuzzy/global Search, or a whole-file Search rewrite.


### Locked / Approved Structural Decisions


- Keep the existing explicit `search.js` regions for shared generic lookup/ranking, Fish scoped Search, Knot deterministic scoped Search, and shared sort/lookup support. The file already has a viable ownership shape and does not need a broad rewrite.
- `search.js` owns Knot query normalization, matching, scoring, and deterministic relevance ordering. `data/knot-guidance.js` owns maintained Search-intent vocabulary.
- Replace direct `KNOT_TASK_DEFINITIONS` coupling inside Knot Search with a dedicated Guide-owned Search-intent input. Practical task definitions, visible landing-task curation, and Search vocabulary remain distinct guidance concepts.
- Remove Knot Search dependence on canonical `record.keywords`; canonical Knot names, genuine aliases, compatible line types, and difficulty remain valid canonical Search signals.
- Preserve the existing relevance intent: canonical identity outranks Guide-owned intent; specific Knot intent outranks broader practical/task intent; broader partial identity/intent remains below exact intent; compatible line type/difficulty remain lower-strength metadata signals.
- `data/knot-guidance.js` may distinguish specific Knot Search intent from broader practical/task Search intent so the relevance hierarchy can be preserved, but numeric scores/weights remain algorithm-owned in `search.js`.
- Replace task-specific tie-break metadata with Search-intent ordering plus Knot ordering inside the matched intent and final eligible-record order. Search does not need to know whether an intent also corresponds to a visible/practical task.
- Preserve **Attach Line to a Reel** reel/spool Search discovery for Arbor Knot + Uni Knot independently of landing-task visibility. Search vocabulary must not be structurally coupled to whether a task is shown as a peer landing action.
- Callers establish the eligible record universe before Search. `search.js` ranks only the records supplied to it and must not reach into global Knot data, collections, or landing state to silently widen scoped results.
- Keep Knot query-interpretation mechanics in the Knot Search boundary: common replacements such as `mono` → `monofilament`, `fluoro` → `fluorocarbon`, plural normalization, apostrophe/punctuation cleanup, and filler-word handling are algorithmic normalization rather than curated Search content.
- Keep genuinely shared `normalizeSearchText()`, `findRecordById()`, generic `searchRecords()`, its scoring internals, and `sortRecordsAlphabetically()` in shared ownership.
- `filterRecordsByValue()` currently has no identified runtime caller in the root loaded JavaScript/HTML inventory; remove it during CP8/implementation after final zero-caller verification rather than retaining dead shared code.
- Current script load order already supports the desired dependency direction (`data/knots.js` + `data/knot-guidance.js` → `search.js` → `script.js`) and requires no load-order redesign.
- Keep CP7.4 targeted. Fish Search, Rig Search semantics, Regulations Search/filter behavior, global cross-domain Search, fuzzy Search, and unrelated helpers remain outside scope.


### Confirmed Source Findings


- `search.js` already has explicit **SHARED SEARCH**, **FISH GUIDE**, and **KNOT GUIDE** ownership boundaries, so a whole-file structural rewrite would add churn without solving the actual Knot coupling.
- Current Knot Search consumes `KNOT_TASK_DEFINITIONS` directly through `getKnotTaskDefinitions()`, `getKnotTaskSearchTerms()`, and `getKnotTaskMatch()`.
- Current `getKnotSearchMatch()` reads canonical `record.keywords`, then filters task-duplicated terms at runtime. CP7.3 makes that compensation obsolete because Search-only vocabulary moves out of canonical records.
- Current deterministic ordering uses `taskIndex` and `knotIndex`, coupling ranking metadata to task objects even when Search intent should exist independently from landing-task visibility.
- `script.js` currently passes `KNOT_TASK_DEFINITIONS` into landing and scoped Knot Search; those direct consumers must switch to the dedicated Search-intent owner while preserving the existing eligible scope.
- The existing load sequence places Knot canonical/guidance data before `search.js` and `search.js` before `script.js`, which already supports the approved dependency model.
- `filterRecordsByValue()` has no identified caller in the inspected loaded root runtime JavaScript or `index.html`.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP7-030 | Preserve the existing explicit shared/Fish/Knot/shared-helper source boundaries in `search.js`; do not perform a broad Search rewrite. | VERIFY ONLY / GUARDRAIL | `search.js` | Source-boundary + changed-range review | CP9.1 CLOSED / PASS |
| KG-CP7-031 | Keep Knot normalization, matching, scoring, and deterministic relevance ordering in `search.js`. | VERIFY ONLY / GUARDRAIL | `search.js` | Algorithm ownership diff + query regression | CP9.1 CLOSED / PASS |
| KG-CP7-032 | Replace Knot Search dependence on practical task definitions with dedicated Guide-owned Search-intent data from `data/knot-guidance.js`. | BUILD REQUIRED | `data/knot-guidance.js`, `search.js`, `script.js` | Data-consumer seam inventory + query suite | CP9.1 CLOSED / PASS |
| KG-CP7-033 | Remove `record.keywords` dependence from Knot Search while retaining canonical name, alias, line-type, and difficulty signals. | BUILD REQUIRED | `data/knots.js`, `data/knot-guidance.js`, `search.js` | Canonical schema + Search-signal regression | CP9.1 CLOSED / PASS |
| KG-CP7-034 | Preserve specific-Knot-intent versus broader practical-intent relevance tiers without moving numeric Search weights into guidance data. | BUILD REQUIRED / REGRESSION GUARD | `data/knot-guidance.js`, `search.js` | Representative exact/phrase/broad-intent ordering matrix | CP9.1 CLOSED / PASS |
| KG-CP7-035 | Replace task-specific tie-break fields with deterministic Search-intent order, Knot order within intent, then original eligible-record order. | BUILD REQUIRED | `data/knot-guidance.js`, `search.js` | Equal-score deterministic-order regression | CP9.1 CLOSED / PASS |
| KG-CP7-036 | Preserve Arbor Knot + Uni Knot reel/spool discovery through **Attach Line to a Reel** Search intent independent of peer landing-task visibility. | VERIFY ONLY / REGRESSION GUARD | `data/knot-guidance.js`, `search.js` | Reel/spool query suite | CP9.1 CLOSED / PASS |
| KG-CP7-037 | Keep eligible Knot scope controller-owned; Search may rank only caller-supplied records and must not silently widen collection/task scope. | VERIFY ONLY / ARCHITECTURE GUARDRAIL | `script.js`, `search.js` | All/Core/Beginner/Intermediate/task scoped-query matrix | CP9.1 CLOSED / PASS |
| KG-CP7-038 | Keep Knot query-normalization replacements/filler handling in the Knot Search algorithm boundary rather than guidance data. | VERIFY ONLY / GUARDRAIL | `search.js` | Normalization regression (`mono`, `fluoro`, plural/reel/spool terms) | CP9.1 CLOSED / PASS |
| KG-CP7-039 | Remove dead `filterRecordsByValue()` only after final CP8/implementation zero-caller verification. | BUILD REQUIRED / VERIFY | `search.js` | Repository caller search + changed-range review | CP9.1 CLOSED / PASS |
| KG-CP7-040 | Keep Fish/Rig/Regulations/global/fuzzy Search changes outside this targeted Knots implementation unless CP8 finds a concrete shared dependency. | VERIFY ONLY / GUARDRAIL | CP8 locked file/range scope; verify changed-file/range boundaries only | Changed-file/range + regression-scope review | CP9.1 CLOSED / PASS |


### CP7.4 Close


CP7.4 is **CLOSED / APPROVED / refinement allowed**. The JavaScript/data structural audit CP7 is therefore **CLOSED / APPROVED / refinement allowed** with implementation actions retained for CP8 scope lock and CP9 build/validation. No production JavaScript/data was changed by this approval gate. **Next: CP8 — Implementation Scope Lock.**


# KG Audit — CP8 — Implementation Scope Lock


**Status:** CLOSED / APPROVED / REFINEMENT ALLOWED — 2026-09-25


## Audit Boundary


CP8 is the hard planning-to-build traceability gate. It does not implement production changes. It resolves every retained OPEN Knots audit action to concrete source ownership, locks the build sequence and validation, and separates mandatory production scope from conditional prototype scope and read-only dependencies.


## Locked Mandatory Production Files


| File | CP9 responsibility |
|---|---|
| `data/knots.js` | Remove Search-only `keywords[]`; move `CORE_KNOT_IDS` ownership out; preserve approved canonical Knot facts/content. |
| `data/knot-guidance.js` | Own Core registry, static collections, practical task mappings, visible landing tasks, and maintained Search-intent vocabulary. |
| `data/reel-guidance.js` | Own approved Reel Setup decision knowledge, Line Weight/target guidance, Braid-only Backing, Spool, optional Leader Reference, and Ready guidance. |
| `search.js` | Preserve Knot normalization/matching/scoring/deterministic ranking while consuming dedicated Guide-owned Search intent; remove `filterRecordsByValue()` after final zero-caller verification. |
| `script.js` | Own Knots/Reel state/controllers, state restoration, workflow migration, Knot excursions, Ready/Rig handoff, and bounded Rig landing context consumption. |
| `view-renderer.js` | Own Knots landing/results/detail structure, disclosures, shared/paged Reference presentation, explicit Knot-media mount point, and truthful adjacent ownership boundaries. |
| `knot-media-renderer.js` | Own Knot instructional-media presentation through the explicit Knot Detail integration point; no monkey patch. |
| `forest-journal.css` | Own required Knots visual upgrade, interaction states, responsive behavior, Reel workflow/status/Reference visuals, and instructional layouts. |
| `tools/validate_repository_integrity.js` | Reconcile validator expectations to approved Knot/guidance/Reel ownership and schema. |


## Conditional Prototype Write Scope


Only the bounded four-Core instructional prototype may additionally write:


- `data/media.js`; and
- `images/knots/instructional/<knot-id>/*.svg`.


These are conditional on a reusable/open or FCC-authored state actually being accepted into the prototype. No placeholder assets and no six-Knot expansion are authorized before the explicit Core prototype verdict. Default prototype execution remains **Improved Clinch → Palomar → Double Uni → Arbor**.


When an accepted local state is registered, Media remains the attachment owner using `ownerType: "knot"`, canonical Knot `ownerId`, an instructional-state role/type, and a zero-based index back to the canonical `tyingSteps[]` step. Canonical text remains authoritative.


## Read-Only Dependencies


`data/fish-categories.js`, `data/rigs.js`, `index.html`, and `tools/check_external_references.js` are directly relevant verification dependencies. The approved load order already supports canonical/guidance data → Search → renderers/controllers and is not redesigned.


## Visual + Interaction Scope Lock


The CP9 implementation must treat upgraded visuals and interaction effects as required deliverables, not optional cleanup. Required build/browser-test scope includes:


- no decorative Knot identity motif in the current Knots build; Dashboard/Guide imagery is deferred to the final UX Audit;
- rotating standard accents from the shared palette;
- reserved workflow treatment for **Get Your Reel Ready**;
- Core/beginner priority hierarchy independent of accent identity;
- lighter non-pill actions and whole-card hover/focus-visible/pressed/touch/wrap behavior;
- live Search/control/result-card visual refinement;
- upgraded Knot Detail hierarchy, disclosures, adjacent-`ⓘ` References, and instructional-media presentation;
- upgraded Reel Setup Selected Choices/Progress, Reference, five-phase state, and semantic line-system visuals; and
- phone/intermediate/full-desktop browser validation.


Instructional media uses restrained, technically meaningful visual cues only. Decorative effects do not override line geometry/clarity. Any later motion must be user-controlled, non-autoplay, reduced-motion safe, and understandable from static states.


## Exact CP9 Sequence


1. **CP9.1 — Structural / Data / Search Foundation:** `data/knots.js` → `data/knot-guidance.js` → `search.js` → direct Knots `script.js` consumers → `tools/validate_repository_integrity.js`.
2. **CP9.2 — Landing / Browse / Visual Treatment + Interaction Effects:** landing hierarchy, Search, browse/results, card accents, workflow/priority treatments, interaction states, responsive visual density, and query/scroll restoration; decorative Guide imagery is deferred to the final UX Audit.
3. **CP9.3 — Knot Detail + Reference + Media Integration:** detail structure, disclosures, adjacent-`ⓘ` Reference behavior, explicit media integration, and protected external baseline.
4. **CP9.4 — Get Your Reel Ready Migration:** coordinated guidance/controller migration, Line Weight, References, Equipment, Backing, Spool, five-phase status, Ready, and responsive semantic visuals.
5. **CP9.5 — Ready → Rig Guide Handoff:** transient completed Reel context and noninteractive **Your Reel Setup** summary without recommendation side effects.
6. **CP9.6 — Four-Core Instructional Prototype:** reuse-first/custom-build progressive prototype and explicit treatment verdict.
7. **CP9.7 — Full Validation + Review Package:** browser/accessibility/regression validation, documentation reconciliation, and cumulative review-package preparation.


## Validation Lock


CP9 cannot close on render success alone. Required validation includes deterministic Knot Search/scope regression; exact 10-Knot and four-Core inventory; zero canonical Search-only `keywords[]`; landing task/collection inventory; Reel Type × Line Type × target/path matrices; all four Ready completion paths; Restart/Exit/Knot-excursion state/focus restoration; Ready → Rig context persistence without filtering/ranking/auto-selection; mobile/intermediate/full-desktop visual review; keyboard/touch/focus/accessibility review; external instructional-link verification; local Core geometry/sequence/final-state review if produced; repository-integrity validation; and targeted regression of shared Fish/Rig/Search behavior touched by shared files.


## Planning-to-Build Reconciliation


- `KNOT-GUIDE.md` — UPDATE REQUIRED / reconciled at CP8 gate.
- `KNOTS-GUIDE-V1-REFINEMENT-AUDIT.md` — UPDATE REQUIRED / CP8 traceability owner.
- `docs/data-model/04-KNOTS.md` — UPDATE REQUIRED / stale canonical `keywords[]` and Core-owner wording reconciled.
- `ARCHITECTURE.md` — VERIFIED NO CHANGE; existing ownership rules already state the approved model.
- `docs/data-model/09-RELATIONSHIPS.md` — VERIFIED NO CHANGE; current `Rig.knotApplications[]` ownership is already correct.
- `docs/UI_STANDARD.md` — VERIFIED NO CHANGE; existing visual/Reference/interaction standards already cover CP8 requirements.
- `docs/MEDIA_GUIDE.md` — VERIFIED NO CHANGE; current Knot instructional-media standards already support the prototype contract.
- `docs/KNOT_REFERENCE_SOURCES.md` — VERIFIED NO CHANGE; research standard and current 10-Knot provenance are already settled.
- `docs/PROJECT-RULES.md` — VERIFIED NO CHANGE; current governance and chat-presentation rules remain controlling.


No production source/data/media/config write, GitHub commit/push, or CI run occurs at this documentation gate.


## CP8 Close


CP8 is **CLOSED / APPROVED / refinement allowed**. Exact first production action is **CP9.1 — Structural / Data / Search Foundation** from fresh Drive Current source versions. The user has chosen a new chat at the implementation gate.


# KG Audit — CP9.1 — Structural / Data / Search Foundation


**Status:** CLOSED / PASS / refinement allowed — 2026-09-25


## Implemented Scope


- `data/knots.js` — removed canonical `CORE_KNOT_IDS` ownership and all Search-only `keywords[]`; retained the approved 10-Knot canonical inventory and stable per-Knot metadata/content.
- `data/knot-guidance.js` — now owns the single four-Knot Core registry, V1 static collections, practical task definitions, visible landing-task definitions, and dedicated maintained Search-intent vocabulary.
- `search.js` — now consumes dedicated Knot Search intents while preserving normalization/matching/scoring ownership and deterministic scoped ranking; dead zero-caller `filterRecordsByValue()` was removed.
- `script.js` — removed local `KNOT_COLLECTIONS` ownership and direct task/search coupling; direct Knots consumers now use Guide-owned collections, landing-task curation, and Search intents.
- `tools/validate_repository_integrity.js` — reconciled Knot ownership/schema expectations to the approved CP7/CP8 model.


## CP9.1 Validation


- All five production files were written in place to their original Drive Current IDs using the documented Sediment procedure, then raw-read back and verified byte-for-byte against the prepared edit set. Temporary transport objects were deleted after each completed write.
- JavaScript syntax checks passed for all five files.
- Search regression reproduced the preserved baseline across **256 queries × 5 scopes = 1,280 cases with zero differences**.
- Core membership/order remains exactly `arbor-knot` → `improved-clinch-knot` → `palomar-knot` → `double-uni-knot`.
- V1 collections are exactly All / Core / Beginner / Intermediate; the superseded Advanced placeholder is absent.
- Canonical Knot records contain zero `keywords[]`; `CORE_KNOT_IDS` is absent from `data/knots.js`.
- Changed-range review confirms the Search refactor is confined to the Knots Search boundary plus the approved dead shared-helper removal; Fish/Rig/Regulations/global/fuzzy Search behavior was not redesigned.
- `KG-CP7-023` and `KG-CP7-024` retain final UI/browser validation in CP9.2 because peer landing visibility and Core-task navigation are user-facing interaction requirements, even though their CP9.1 data/controller foundation is implemented.
- Full repository-integrity/browser/accessibility validation remains part of the locked later CP9 validation sequence and is not falsely claimed at this foundation checkpoint.


## CP9.1 Close


CP9.1 is **CLOSED / PASS / refinement allowed**. Drive Current is authoritative for the five approved uncommitted production changes. GitHub `main` remains `9476bb6812002cb7931e48fb3cd9f89d703d0a4b`; no commit, push, or CI run is authorized or performed at this checkpoint.


# KG Audit — CP9.2 — Landing / Browse / Visual Treatment + Interaction Effects

**Status:** CLOSED / PASS — R4 USER-APPROVED + PROMOTED — 2026-09-25

## Review-Cycle Baseline

- Immutable R1 review baseline: `FCC-49I-Knots-Guide-CP9.2-Cumulative-Review.zip`.
- R1 SHA-256: `78fe1e646fb4b4c56005527c215726b59ace26336fc811b864fd55b1d2b31331`.
- Starting GitHub `main`: `9476bb6812002cb7931e48fb3cd9f89d703d0a4b`.
- Under the approved FCC review-cycle procedure, later CP9.2 candidates are rebuilt from immutable R1 plus the cumulative findings/corrections recorded below. Intermediate candidate ZIPs are disposable; Drive promotion occurs only after explicit candidate approval.

## R1 Browser Findings

| ID | Finding | Disposition / required correction | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP9.2-R1-001 | **Core Knots** / beginner-priority treatment does not read with sufficient visual emphasis in browser review. | Strengthen priority hierarchy independently of rotating accent identity; preserve ordinary browse-card semantics and avoid turning Core into a workflow card. | `view-renderer.js`, `forest-journal.css` | Desktop/mobile visual hierarchy + interaction regression | R2 BUILD REQUIRED |
| KG-CP9.2-R1-002 | First Knot identity motif is visually unclear and was rejected in browser review. | Replace the overlapping-loop motif with a clearer restrained fishing-knot/terminal-eye line-art treatment; preserve responsive scale and subordinate visual weight. | `view-renderer.js`, `forest-journal.css` | Desktop/mobile identity review | R2 BUILD REQUIRED |

## Review Traceability Rule

For each CP9.2 candidate revision, record only the material finding, applied correction, affected files, validation state, and resulting review revision. Do not preserve unnecessary design-conversation detail. R1 remains the immutable baseline; R2+ are cumulative candidate deltas.

## R2 Candidate

- Resulting revision: `FCC-49I-Knots-Guide-CP9.2-R2-Cumulative-Review.zip`.
- R2 SHA-256: `3e9da739169767e6f15e5b329e5222db617f4f2c21120ef2113d177929d1061f`.
- `KG-CP9.2-R1-001` — strengthened Core/beginner-priority hierarchy with a neutral **Recommended First** cue on Core entry points, stronger priority surface/border hierarchy on the three beginner-important task cards, and retained rotating card accents; Core result emphasis is also strengthened without consuming the workflow treatment.
- `KG-CP9.2-R1-002` — replaced the rejected overlapping-loop motif with restrained inline terminal-eye/fishing-line SVG line art; responsive scale remains subordinate to the Guide identity.
- Affected candidate source: `view-renderer.js`, `forest-journal.css`.
- Targeted validation: JavaScript syntax PASS; static source assertions PASS; CSS brace/integrity checks PASS. Desktop/mobile visual acceptance remains PENDING USER REVIEW.
- R2 remains an unapproved review candidate and is not promoted to Drive Current.

## R2 Browser Findings / R3 Corrections

| ID | Finding | Disposition / applied correction | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP9.2-R2-001 | Core/important-card emphasis improved but remained visually ambiguous. | Replaced the neutral surface treatment with the established Dashboard primary-card bookend accent grammar: 6px leading accent + 2px trailing accent while preserving each card's rotating accent. `Recommended First` remains only on **Learn Core Knots**. Core Knot result cards receive matching two-sided accent emphasis. | `view-renderer.js`, `forest-journal.css` | Source assertions + desktop/mobile hierarchy review | R3 ACCEPTED / R4 RETAIN |
| KG-CP9.2-R2-002 | `Learn →` / `View Knots →` wrapped inconsistently beside task titles on phone widths. | At <=639px, all task-card actions are forced beneath the task title for consistent vertical rhythm. | `forest-journal.css` | Mobile-width layout review | R3 ACCEPTED / R4 RETAIN |
| KG-CP9.2-R2-003 | R2 Knot motif was clearer but still not satisfactory. | R3 tested **7B — Narrow Vertical Loop**, but the user rejected decorative Guide imagery for the current Knots build. R4 removes the motif entirely; future Dashboard imagery discussion moves to the final UX Audit, with Reference Knowledge cards left undecorated by default. | `view-renderer.js`, `forest-journal.css`; `V1-DESIGN-AUDIT.md` | R4 no-motif source/browser check + future UX review | R3 REJECTED / R4 REMOVE / DEFERRED UX |
| KG-CP9.2-R2-004 | Dashboard still displayed **Knots** despite the approved user-facing **Knots Guide** rename. | Change the Dashboard card title to **Knots Guide**. No other Dashboard copy/structure is changed. | `index.html` | Text check + Dashboard regression review | R3 ACCEPTED / R4 RETAIN |

## R3 Candidate

- Resulting revision: `FCC-49I-Knots-Guide-CP9.2-R3-Cumulative-Review.zip`.
- R3 SHA-256: `a365b1ac08aa3a06804d570e83bf7edba617a8f7888a957c459eb2ac9246d5d7`.
- R3 is rebuilt from immutable R1 plus all cumulative CP9.2 corrections; R2 source bytes are not used as reconstruction authority.
- Candidate-only changed source relative to R1: `view-renderer.js`, `forest-journal.css`, plus newly affected `index.html`; the temporary audit carries cumulative revision traceability.
- Targeted validation PASS: JavaScript syntax; source assertions; CSS brace balance; Dashboard rename check; package path/inclusion review. The pre-existing three-blank-line run in `forest-journal.css` is inherited unchanged from R1 and was not expanded by R3. Browser visual acceptance remains PENDING USER REVIEW.
- R3 browser verdict: Dashboard rename, Core/important emphasis, phone task-action placement, and regressions reviewed are accepted; the 7B motif is rejected. R3 remains unapproved as a whole and is not promoted to Drive Current.

## R3 Browser Finding / R4 Correction

| ID | Finding | Disposition / required correction | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP9.2-R3-001 | Decorative Knot identity art remains unsatisfactory and is no longer desired on the current Knowledge surface. | Remove the motif from the Knots Guide identity. Carry the broader visual-flair discussion to the final UX Audit, focused first on restrained Dashboard Guide-card imagery; leave Reference Knowledge cards/Guide content undecorated unless separately approved later. | `view-renderer.js`, `forest-journal.css`; `V1-DESIGN-AUDIT.md` | No-motif source/browser check + UX owner readback | R4 BUILD REQUIRED / UX DEFERRED |

R4 must retain all other accepted R3 corrections and remove only the decorative identity motif from the cumulative CP9.2 candidate.

## R4 Candidate

- Resulting revision: `FCC-49I-Knots-Guide-CP9.2-R4-Cumulative-Review.zip`.
- R4 SHA-256: `c23ff1f233314ebe8de39d9eea6468f7f150c0ed26edd524faa325ba84b44e97`.
- R4 is rebuilt from immutable R1 plus all cumulative accepted CP9.2 corrections; R2/R3 source bytes are not reconstruction authority.
- Accepted R3 corrections retained: Dashboard **Knots Guide** rename, Dashboard-style Core/important two-sided accent emphasis, `Recommended First` only on **Learn Core Knots**, and consistent phone task-action placement.
- `KG-CP9.2-R3-001` correction applied: decorative Knot identity motif removed entirely from `view-renderer.js` and its motif-only CSS removed from `forest-journal.css`.
- `docs/V1-DESIGN-AUDIT.md` carries the approved future owner/disposition: prototype Dashboard Guide-card imagery in the final UX Audit; Reference Knowledge cards remain undecorated by default.
- Targeted validation PASS before handoff: JavaScript syntax; motif-absence/source assertions; CSS brace/integrity; Dashboard rename; unchanged-file hash comparison to R1; package-path/inclusion review.
- User gave **Final Approval** on 2026-09-25. R4 is the frozen approved CP9.2 candidate.
- Approved production bytes were promoted to Drive Current for the candidate-delta files and read back exactly: `view-renderer.js` SHA-256 `a0f9a995a65bb4985c154605542d932a7c3d488236e8cabe765980ce07657d6e`; `forest-journal.css` SHA-256 `cd0206706cc03c88fb4219b5b8af4dd73aa69362b96678a82db497d5b93c97c3`; `index.html` SHA-256 `2f885ff3be64887ca49f487f30ffbeb2bf440e9179bed0761491f484a93ca417`. Other cumulative CP9.2 files already matched the authoritative Drive baseline and required no candidate-delta rewrite.
- Browser acceptance is **PASS by user approval** for the reviewed CP9.2 landing/Search/browse/result, priority/workflow, responsive, Dashboard naming, and no-motif surfaces. Decorative Dashboard imagery remains deferred to the final UX Audit.

## CP9.2 Approval + Promotion Close

- **R4 final verdict:** USER-APPROVED / FROZEN / PROMOTED.
- `KNOT-GUIDE.md` reconciled to the approved no-motif direction and CP9.2 result.
- `docs/V1-DESIGN-AUDIT.md` verified no additional change required; it already owns the deferred Dashboard-imagery discussion and Reference Knowledge no-decoration default.
- Temporary audit remains active for later CP9/CP10 work; R1/R2/R3/R4 revision traceability is retained here while review ZIPs remain non-authoritative transport artifacts.
- The cumulative CP9.1 + CP9.2 production/documentation scope was subsequently committed and pushed as GitHub `main` `0fa323bb24929fbdcbe74abb0d46f6f4723322dc` (`Knot Guide - Dashboard and Landing`). Repository Integrity run `36189763625` and Pages run `36189763447` both PASS. This audit and `KNOT-GUIDE.md` are the bounded documentation-only convergence follow-up required because their post-approval Drive Current revisions were newer than the copies included in that commit.

# KG Audit — CP9.3A — Knot Detail Structure

**Status:** CLOSED / PASS — USER APPROVED / R5 PROMOTED

- Immutable R1 review baseline: `FCC-49J-Knots-Guide-CP9.3A-R1-Cumulative-Review.zip`.
- R1 SHA-256: `24e324f2378c996ed8a6adbed2bc7455f9a2d9b82bd5da0f32bc977febe5abb9`.
- Baseline: GitHub `main` `4a4f32d6d464f0414d7e21deb587cf10ba668ffe`; matching Drive Current `view-renderer.js`, `forest-journal.css`, and `script.js` verified before candidate construction (`script.js` Git blob `a914deb56e4d7c701f41fed4842cba22db3b7d73`).
- Candidate production scope was three repository paths: `view-renderer.js`, `forest-journal.css`, and `script.js`; the active Knots audit was also carried in the review ZIP. The user approved R5 and those exact production bytes were promoted to Drive Current before CP9.3A closure.
- CP9.3A implements the approved Knot Detail identity order, compact **ABOUT THIS KNOT** disclosures, always-visible **HOW TO TIE IT**, always-visible **CHECK YOUR KNOT**, compact **MORE HELP** disclosures, and collapsed **Sources & References**.
- Existing Line Compatibility navigation is intentionally preserved for CP9.3B Reference conversion; the existing `knot-media-renderer.js` hook remains functional and unchanged for CP9.3C explicit media integration.
- Targeted validation PASS: JavaScript syntax; 10-Knot required-field inventory; all-10-Knot render-structure assertions; collapsed initial disclosure state; four-Core classification assertions; CSS brace/integrity and repeated-blank-line checks; stale retired Detail-class scan; media-hook target compatibility.
- Browser review areas are explicitly bounded per R4 below. CP9.3B Reference treatment and CP9.3C/CP9.6 media treatment are not CP9.3A review targets.

## R1 Findings / R2 Corrections

| Finding | Correction | Affected path(s) | Status |
|---|---|---|---|
| `KG-CP9.3A-R1-001` — R1 unintentionally replaced existing Line Compatibility navigation with static text, crossing into CP9.3B scope. | Restore the existing line-type navigation buttons unchanged so CP9.3B owns the adjacent-`ⓘ` Reference conversion. | `view-renderer.js` | R2 CORRECTED |
| `KG-CP9.3A-R1-002` — R1 retained a fallback selector for retired `.knot-at-a-glance__group` structure. | Remove the stale fallback; the usage-control scroll anchor now resolves only against the new Knot Detail disclosure panel. | `view-renderer.js` | R2 CORRECTED |
| `KG-CP9.3A-R1-003` — the initial R1 ZIP omitted the active Knots audit repository path even though review packages must carry changed repository documentation. | R2 package includes `archive/workstreams/knots/KNOTS-GUIDE-V1-REFINEMENT-AUDIT.md` in addition to the two production candidate paths. R1 remains immutable. | review package / audit | R2 CORRECTED |

## R2 Candidate

- Resulting revision: `FCC-49J-Knots-Guide-CP9.3A-R2-Cumulative-Review.zip`.
- R2 SHA-256: `0f350d5980a956bda6f98e4ee6077fe4a40063688540b1b0c9744a6fcf607735`.
- R2 is rebuilt from immutable R1 plus the cumulative R1 corrections above; R1 is not overwritten.
- R2 package scope: `view-renderer.js`, `forest-journal.css`, and `archive/workstreams/knots/KNOTS-GUIDE-V1-REFINEMENT-AUDIT.md`.
- Production source remains candidate-only: Drive Current `view-renderer.js` and `forest-journal.css` are not promoted before user approval.
- Targeted validation remains PASS after R2 corrections: JavaScript syntax, 10-Knot render inventory, initial collapsed state, Core classification, CSS integrity, stale-selector absence, and existing external-media hook compatibility.
- The R2 ZIP hash is recorded in the active audit immediately after package freeze; it is intentionally not self-embedded in the packaged audit copy.

## R2 Browser Findings / R3 Corrections

| Finding | Correction / disposition | Affected path(s) | Status |
|---|---|---|---|
| `KG-CP9.3A-R2-001` — **HOW TO TIE IT** was visually secondary because ABOUT THIS KNOT appeared first. | Move **HOW TO TIE IT** directly below the Knot identity/description, keep **CHECK YOUR KNOT** immediately after it, then place ABOUT THIS KNOT and MORE HELP below the primary teaching flow. Existing media hook remains intact; final media ordering/treatment remains later scope. | `view-renderer.js` | R3 CORRECTED |
| `KG-CP9.3A-R2-002` — Common Tasks used chip/pill styling that looked too much like metadata rather than navigation. | Keep the approved wording and internal `→` iconography but render Common Tasks as lightweight text links without pill/chip chrome. | `view-renderer.js`, `forest-journal.css` | R3 CORRECTED |
| `KG-CP9.3A-R2-003` — Rig links used a chevron-style `>` cue instead of the Guide's normal internal-navigation arrow. | Keep existing Rig link-row treatment but replace the chevron with the standard internal `→` iconography. | `view-renderer.js` | R3 CORRECTED |
| `KG-CP9.3A-R2-004` — Returning from a related Rig to Knot Detail lost the Knot browsing state; open disclosures collapsed. | Add Knot Detail state capture/restore for expanded disclosures, nested Rig-list expansion, scroll position, and originating control focus. Use the same state capture for current task/line-type round trips without changing CP9.3B Reference semantics. | `script.js`, `view-renderer.js` | R3 CORRECTED |
| `KG-CP9.3A-R2-005` — Line Compatibility chip/pill treatment was visually rejected during R2 review. | **DEFERRED — CP9.3B.** R3 intentionally leaves the existing Line Compatibility control appearance/behavior unchanged so CP9.3B can implement the approved adjacent-`ⓘ` Reference convention as one coherent change. Do not judge the retained R3 Line Compatibility pill/arrow as final. | `view-renderer.js`, `script.js`, `forest-journal.css` future CP9.3B scope | DEFERRED — CP9.3B |

## R3 Candidate

- Resulting revision: `FCC-49J-Knots-Guide-CP9.3A-R3-Cumulative-Review.zip`.
- R3 SHA-256: `f133916f5e26037f651802125f1339448595f474bdc436b260e703566db7c484`.
- R3 is rebuilt from immutable R1 plus all cumulative documented CP9.3A corrections; R2 source bytes are not reconstruction authority.
- R3 package scope: `view-renderer.js`, `forest-journal.css`, `script.js`, and `archive/workstreams/knots/KNOTS-GUIDE-V1-REFINEMENT-AUDIT.md`.
- Drive Current production source remains unchanged; R3 is candidate-only pending explicit user approval.
- **Review now:** teaching hierarchy/order; Common Tasks link treatment; Rig `→` iconography; ABOUT THIS KNOT / MORE HELP disclosure operation; Knot → Rig/task/current-Line-Type → Knot round-trip restoration of open disclosures, nested Rig expansion, scroll, and focus; basic phone/desktop structure.
- **Do not review as final in R3:** Line Compatibility pill/chip appearance, its current `→` action, or the final Reference surface (`ⓘ`) — CP9.3B owns those; current external Visual Guide styling/provider/action placement — CP9.3C owns that integration; absence of FCC-owned step diagrams/viewer — the four-Core prototype remains CP9.6 scope; final media/steps desktop geometry remains later browser-test scope.
- The R3 ZIP hash is recorded in the active Drive audit immediately after package freeze; it is intentionally not self-embedded in the packaged audit copy.

## R3 Browser Findings / R4 Corrections

| Finding | Correction / disposition | Affected path(s) | Status |
|---|---|---|---|
| `KG-CP9.3A-R3-001` — Common Tasks and Rigs That Use This Knot needed clearer subsection separation without returning to pill/chip styling. | Match the subgroup-label coloration to the existing **Visual Guide** eyebrow, add a restrained matching accent rule beneath each subgroup label, keep the relationship links as lightweight rows, and add neutral separators between multiple Common Tasks. Existing Rig-row separators remain. | `forest-journal.css` | R4 CORRECTED / BROWSER TEST |
| `KG-CP9.3A-R3-002` — the internal `→` cue in Knot usage links was too visually quiet. | Strengthen only the Knot-usage internal arrows with the subgroup accent, `1.3em` size, `900` weight, and slightly increased left spacing. Do not globally change Guide-family arrow treatment. | `forest-journal.css` | R4 CORRECTED / BROWSER TEST |
| `KG-CP9.3A-R3-003` — Knot → related Rig → Knot state-restoration browser test. | R3 behavior preserves the open disclosures and browsing state on return. Retain unchanged in R4. | `script.js`, `view-renderer.js` | R3 PASS / R4 RETAIN |

R4 deliberately retains the compact relationship-list model rather than copying Fish **Rigs to Start With** recommendation cards. Fish remains the interaction baseline; Knot usage entries are simpler relationship destinations and do not carry Fish-style recommendation priority/reason content. Browser review will determine whether the lighter separation is sufficient.

## R4 Candidate

- Resulting revision: `FCC-49J-Knots-Guide-CP9.3A-R4-Cumulative-Review.zip`.
- R4 SHA-256: `83e66006a69b0ee9c8ea8a500e5c593e94c29f73f29c04bcf15821367e09963c`.
- R4 is rebuilt from immutable R1 plus all cumulative documented CP9.3A corrections; R2/R3 source bytes are not reconstruction authority.
- R4 package scope: `view-renderer.js`, `forest-journal.css`, `script.js`, and `archive/workstreams/knots/KNOTS-GUIDE-V1-REFINEMENT-AUDIT.md`.
- Drive Current production source remains unchanged; R4 is candidate-only pending explicit user approval.
- **Review now:** all prior CP9.3A review-now areas, plus subgroup-label color/rules, Common Tasks row separators, Rig-row visual consistency, and the stronger scoped internal `→` cue. Confirm the retained Knot → Rig → Knot state restoration remains correct.
- **Do not review as final in R4:** Line Compatibility pill/chip appearance/current `→`/Reference surface (`ⓘ`) — CP9.3B; current external Visual Guide styling/provider/action placement — CP9.3C; absence of FCC-owned step diagrams/viewer — CP9.6; final media/steps desktop geometry — later browser-test scope.
- Targeted R4 validation PASS: JavaScript syntax; 10-active-Knot required-field inventory; teaching-order/source assertions; R1-based cumulative reconstruction check against accepted R3 `view-renderer.js`/`script.js`; CSS brace balance and no increase in inherited repeated-blank-line runs; bounded package-path/inclusion and ZIP integrity checks. Browser visual verdict remains pending user review.
- R4 ZIP SHA-256 is recorded here after package freeze; the packaged audit copy intentionally does not self-embed the final ZIP hash.

## R4 Browser Findings / R5 Corrections

| Finding | Correction / disposition | Affected path(s) | Status |
|---|---|---|---|
| `KG-CP9.3A-R4-001` — informational bulleted lists on Knot Detail did not yet use the same marker language as Fish **Key Identification Traits** and the numbered **HOW TO TIE IT** steps. | Apply the Fish-baseline accent marker treatment to Knot Detail `.detail-list` bullets while retaining the existing Knot spacing/density. Navigation-link lists remain navigation rows, not bullet lists. | `forest-journal.css` | CLOSED / PASS — R5 APPROVED |
| `KG-CP9.3A-R4-002` — internal `→` cues must stay immediately adjacent to the destination text they describe, rather than being pushed to the far edge of a row; the arrow must also use the same color as its associated link text. | Keep Common Tasks text + `→` as one visual unit; change Rig rows so Rig name + `→` are one adjacent unit; make the arrow inherit link color. This is identified as a Guide-family internal-navigation principle. R5 applies it only to the current Knot Detail candidate to preserve the bounded CP9.3A source scope; durable cross-Guide reconciliation is required when this treatment is approved. | `view-renderer.js`, `forest-journal.css`; durable Guide-family owner at approval | CLOSED / PASS — R5 APPROVED / UI_STANDARD RECONCILED |
| `KG-CP9.3A-R4-003` — the right-arrow cue should have visual presence comparable to the existing external `↗` cue. | Retain/use `1.3em` internal-arrow sizing with `900` weight inside the tested Knot usage links, matching the external-arrow size baseline while preserving the distinct right-arrow symbol. | `forest-journal.css` | CLOSED / PASS — R5 APPROVED |
| `KG-CP9.3A-R4-004` — Knot → related Rig → Knot state-restoration retest. | User confirmed the R4 round trip restores Knot browsing state correctly. Retain the existing R3/R4 state implementation unchanged in R5. | `script.js`, `view-renderer.js` | CLOSED / PASS — R5 APPROVED |

R5 continues to use the compact Knot relationship-list model rather than Fish **Rigs to Start With** recommendation cards. Fish remains the Guide-family baseline: informational bullets now inherit Fish marker language, while Knot usage destinations remain lighter navigation rows because they do not carry recommendation-priority/reason content.

## R5 Candidate

- Resulting revision: `FCC-49J-Knots-Guide-CP9.3A-R5-Cumulative-Review.zip`.
- R5 SHA-256: `95864eb7a1e5d6da483bf43dfd2e5eafd5485646f9e03eef553792fe7d2c4615`.
- R5 is rebuilt from immutable R1 plus all cumulative documented CP9.3A corrections; R2/R3/R4 source bytes are not reconstruction authority.
- R5 package scope: `view-renderer.js`, `forest-journal.css`, `script.js`, and `archive/workstreams/knots/KNOTS-GUIDE-V1-REFINEMENT-AUDIT.md`.
- Drive Current production source remains unchanged; R5 is candidate-only pending explicit user approval.
- **Review now:** all prior CP9.3A review-now areas, plus Fish-baseline bullet-marker parity on Knot informational lists; Common Tasks and Rig `→` adjacency; arrow/text color unity; right-arrow prominence relative to `↗`; retained subgroup-label/rule treatment; and the already-working Knot → Rig → Knot state restoration.
- **Do not review as final in R5:** Line Compatibility pill/chip appearance/current `→`/Reference surface (`ⓘ`) — CP9.3B; current external Visual Guide styling/provider/action placement — CP9.3C; absence of FCC-owned step diagrams/viewer — CP9.6; final media/steps desktop geometry — later browser-test scope. Also do not audit unrelated Guide pages for the newly identified universal arrow-placement principle in this bounded R5 candidate; cross-Guide source reconciliation follows approval through the proper durable owner rather than silently expanding CP9.3A.
- Targeted R5 validation PASS before handoff: JavaScript syntax; 10-active-Knot required-field inventory; teaching-order assertions; R1-based cumulative reconstruction; bullet-marker parity assertion; Rig-arrow adjacency assertion; inherited arrow-color assertion; `1.3em` internal/external size parity; retained state-restoration source assertions; CSS brace balance; bounded R4→R5 diff review; package-path/inclusion and ZIP integrity checks. Browser visual verdict remains pending user review.
- R5 ZIP SHA-256 is recorded in Live Working State / the active Drive audit immediately after package freeze; the packaged audit copy intentionally does not self-embed the final ZIP hash.

## R5 Approval + Promotion Close

- **Final verdict:** USER APPROVED / FROZEN / PROMOTED. R5 ZIP SHA-256 remains `95864eb7a1e5d6da483bf43dfd2e5eafd5485646f9e03eef553792fe7d2c4615`.
- Approved R5 production bytes were promoted exactly to Drive Current and read back byte-for-byte: `view-renderer.js` SHA-256 `1240dc787b3f244a10f39113c7631647feaeb9b68bb3edd8b830077b00a7d6b2`; `forest-journal.css` SHA-256 `155fb4587043b4f5c5046bc770b8a7f568f65cdaed4f69745da4b657b0779928`; `script.js` SHA-256 `42782c477f40884832c6763eda59ab773a47a0df909d3c15381a3ffdd0521db9`.
- Post-promotion proportional validation **PASS**: `node --check` for promoted `view-renderer.js` and `script.js`; CSS brace balance; required Knot Detail teaching/disclosure headings; Knot Detail state-capture/scroll-restore source assertions; documentation repeated-blank-line integrity; and exact source/document SHA-256 verification. The approved R5 source bytes match the promoted/read-back Drive Current bytes.
- GitHub `main` was reverified after promotion and remains unchanged at `4a4f32d6d464f0414d7e21deb587cf10ba668ffe`; the Drive-first approved work is therefore intentionally uncommitted.
- Browser acceptance is **PASS by explicit user approval** for the bounded CP9.3A review areas, including teaching order, disclosure structure, lightweight Common Tasks/Rig relationship links, Fish-baseline informational bullet markers, internal-arrow adjacency/color unity, and Knot → related destination → Knot state restoration.
- The user noted that the R5 `→` size increase was not visually obvious. R5 remains the approved frozen candidate; no post-approval production mutation was made. The optical-size observation is non-blocking and is reconciled durably in `UI_STANDARD.md`: numeric `em` parity between different glyphs does not guarantee equal perceived prominence, and exact optical size/weight remains browser-refinement allowed.
- **Owner classification:** UPDATE REQUIRED — approved production `view-renderer.js` / `forest-journal.css` / `script.js`; `KNOT-GUIDE.md`; `UI_STANDARD.md`; this active audit; Live Working State. VERIFIED NO CHANGE — `docs/V1-DESIGN-AUDIT.md` (cross-Guide arrow semantics now belong in `UI_STANDARD.md`), `docs/PROJECT-RULES.md` (procedure unchanged). N/A FOR CP9.3A — `MEDIA_GUIDE.md`, `data/media.js`, `knot-media-renderer.js`, and FCC-owned instructional SVG assets; their work remains CP9.3C / CP9.6.
- `KNOT-GUIDE.md` was reconciled to the approved visible teaching hierarchy, lightweight usage-link treatment, Guide-family bullet-marker parity, and round-trip state-restoration requirement. Readback SHA-256: `9600aac6a8db34195fb4ce0357a517ca2299b39cf912166507a2711171cc7791`.
- `UI_STANDARD.md` was reconciled to the approved Guide-family rule that directional glyphs remain adjacent to and the same color as destination text, while exact optical arrow size/weight remains refinement-allowed. Readback SHA-256: `82b3bcd26b5989ea33680645ffdfd1844b5fb5d6d3a2412ea58202a1c21a6540`.
- Deferred boundaries remain intact: Line Compatibility adjacent-`ⓘ` Reference behavior is CP9.3B; current external Visual Guide treatment is CP9.3C; FCC-owned four-Core instructional prototype is CP9.6; final media/steps desktop geometry remains later browser-test scope.
- No production commit/push was authorized by this approval. No GitHub commit, push, CI, or Pages run was performed for CP9.3A.

# KG Audit — CP9.3B — adjacent-`ⓘ` Reference + Detail Navigation

**Status:** CLOSED / PASS — USER APPROVED / PROMOTED / REPOSITORY VALIDATED — 2026-09-25

## R1 Review-Cycle Baseline

- Starting GitHub `main`: `4a4f32d6d464f0414d7e21deb587cf10ba668ffe`.
- Authoritative uncommitted source baseline: the exact promoted CP9.3A Drive Current bytes — `view-renderer.js` SHA-256 `1240dc787b3f244a10f39113c7631647feaeb9b68bb3edd8b830077b00a7d6b2`; `forest-journal.css` SHA-256 `155fb4587043b4f5c5046bc770b8a7f568f65cdaed4f69745da4b657b0779928`; `script.js` SHA-256 `42782c477f40884832c6763eda59ab773a47a0df909d3c15381a3ffdd0521db9`.
- R1 candidate filename: `FCC-49J-B-Knots-Guide-CP9.3B-R1-Cumulative-Review.zip`.
- R1 ZIP SHA-256: `d4d8ac4c534d6fd212c0f0a076e9e3daa4ad16be956b97d6b9e9db858c2c9ce4`. The packaged R1 audit copy intentionally does not self-embed this final ZIP hash.
- R1 remains the immutable reconstruction baseline for CP9.3B R2+ candidate revisions.
- R1 package scope: `view-renderer.js`, `script.js`, `forest-journal.css`, and `archive/workstreams/knots/KNOTS-GUIDE-V1-REFINEMENT-AUDIT.md`. No deletions.
- CP9.3B remains candidate-only. Drive Current production source is not changed before explicit user approval; no GitHub commit/push/CI/Pages action is authorized.

## R1 Implemented Build Test

- Replaces the temporary Line Compatibility pill/`→` controls with plain line-type text followed immediately by an independent `ⓘ` button. Only `ⓘ` opens Reference; line-type text remains static.
- Uses an independent 40 px touch/focus target whose visible glyph remains adjacent to the referenced term; the target extends away from the label rather than overlapping it.
- Tests the approved contextual Reference model instead of retaining the temporary dedicated Line Type route. The Reference opens in the existing modal/bottom-sheet-capable `dialog.reference-popover` system without leaving Knot Detail.
- Uses one three-page Line Type Reference derived from `REEL_LINE_TYPE_GUIDANCE` in canonical object order: Monofilament → Fluorocarbon → Braid. Each page includes the existing selection summary, How to Recognize It, Beginner Guidance, and Tradeoff content.
- Provides a visible `1 of 3`-style position cue and explicit Previous / Next controls; boundary controls remain visible and disabled. No autoplay or swipe-only behavior is introduced.
- Closing by the close control, backdrop, or native Escape returns focus to the exact originating `ⓘ`; the Knot Detail view, disclosures, and scroll state remain in place because opening Reference does not push or mutate application-detail navigation state.
- Removes the now-unneeded Knot-only `line-type-detail` route/state/renderer callback and its dead dedicated-detail CSS rather than leaving a competing navigation model.
- Retains CP9.3A Rig/task detail-navigation state capture, Parent restoration, disclosure state, nested Rig expansion, scroll restoration, and originating-control focus behavior unchanged.
- Does not implement CP9.3C external Visual Guide changes, CP9.4 Reel Setup migration, or CP9.6 instructional prototype work.

## R1 Targeted Validation

- JavaScript syntax: PASS for candidate `view-renderer.js` and `script.js`.
- CSS brace balance: PASS.
- Active Knot / line-type inventory: PASS — 10 active Knots; every `compatibleLineTypes[]` value resolves to the existing three Line Type guidance records; Reference page order is Monofilament → Fluorocarbon → Braid.
- Stale dedicated-route inventory: PASS — no candidate `LINE_TYPE_DETAIL`, `selectedLineTypeId`, `openLineTypeDetailFromKnot`, `renderLineTypeDetailView`, `renderLineTypeReferenceDetail`, or `data-line-type-id` remains.
- Adjacent Reference source assertions: PASS — `data-line-type-reference-id`, visible position cue, explicit Previous/Next, background lock/unlock, close-focus return, bounded 40 px trigger target, and plain non-pill Line Compatibility list are present.
- Detail-navigation regression source assertions: PASS — CP9.3A Rig/task state capture, scroll restoration, and focus restoration remain present.
- Candidate production hashes: `view-renderer.js` `f023c23ea9e4282dddffcf9fa3123ad23ecd721c6555315f7088df2e95f0cb39`; `script.js` `160d7aece45b3c3d86531a5900019924b2f1dd113b7beb1350c08ecf0c6d3a70`; `forest-journal.css` `d89c649cf3e097be07259d5823414faf8204d2abcf90e562cefa90f17932e51f`.
- Browser/device/accessibility verdict: PENDING user review; source validation does not substitute for the required visual/touch/keyboard build test.

## R1 User Review Areas

1. Expand **ABOUT THIS KNOT → Line Compatibility** on several Knots. Confirm each line type reads as normal text with a nearby `ⓘ`, not a pill/chip or navigation row.
2. Confirm only the `ⓘ` opens Reference and that its touch target feels usable without making the glyph look oversized or detached.
3. Open Reference from Monofilament, Fluorocarbon, and Braid. Confirm it opens contextually over Knot Detail, starts on the selected line type, shows a clear page position, and Previous/Next moves through the three line types in the expected order.
4. Close Reference with the close control and Escape; confirm Knot Detail remains where it was and keyboard focus returns to the same `ⓘ`. Backdrop close may also be checked with a pointer/touch interaction.
5. Confirm opening/closing Reference does not collapse Line Compatibility or other already-open disclosures and does not change Knot Detail scroll position.
6. Regression-check Knot → related Rig/task → Parent → Knot. Confirm the previously approved disclosure/scroll/focus restoration still works.
7. Check narrow phone and normal desktop widths for line-term wrapping, `ⓘ` adjacency, modal/bottom-sheet geometry, pager controls, and absence of horizontal scrolling.


## R1 Findings / R2 Corrections

| Finding | R2 correction / disposition | Affected files | Status |
|---|---|---|---|
| `KG-CP9.3B-R1-001` — When three compatible line types were present, the wrapping layout could produce an awkward two-row arrangement such as Monofilament on one row and Fluorocarbon/Braid on the next. | Present compatible line types as a consistent vertical list, one line type per row, at all widths. | `view-renderer.js`, `forest-journal.css` | R2 CORRECTED |
| `KG-CP9.3B-R1-002` — The adjacent `ⓘ` semantics were diluted because each line-specific trigger opened the same three-page Line Type Reference and exposed line types unrelated to the current Knot. | Keep only the current Knot's canonical `compatibleLineTypes[]` in Line Compatibility. Each adjacent `ⓘ` opens only the Reference content for the exact line type it accompanies; remove cross-line Previous/Next paging from this context. | `view-renderer.js`, `forest-journal.css` | R2 CORRECTED |
| `KG-CP9.3B-R1-003` — The R1 build test positively confirmed that multiple pages inside a popover with user-controlled navigation are technically viable. | Preserve this as a reusable future UI finding rather than retaining unused Knot-specific pager code. When a future Reference surface genuinely needs multi-page navigation, test a floating breadcrumb-style navigation control centered at the top or bottom of the description pane; final orientation is BUILD TEST REQUIRED in the actual use context. | active audit now; durable shared UI owner at later approval/reconciliation when a concrete use is adopted | VERIFIED CAPABILITY / FUTURE BUILD-TEST PATTERN |

## R2 Candidate / Validation Record

- R2 is rebuilt from immutable CP9.3B R1 plus the cumulative documented corrections above; Drive Current production source remains unchanged.
- R2 candidate filename: `FCC-49J-B-Knots-Guide-CP9.3B-R2-Cumulative-Review.zip`; SHA-256 `029c09529447195bfbf4adb5335dbc125acb36d5d3a8e9bb5f866c8c17e593f0`.
- R2 package scope remains `view-renderer.js`, `script.js`, `forest-journal.css`, and `archive/workstreams/knots/KNOTS-GUIDE-V1-REFINEMENT-AUDIT.md`. No deletions. `script.js` is cumulative and byte-identical to R1.
- Line Compatibility continues to render only canonical line types present in the current Knot's `compatibleLineTypes[]`; R2 changes presentation and Reference scope, not Knot compatibility data.
- Compatible line types are vertically stacked at every viewport width. Each `ⓘ` remains immediately adjacent to its exact line-type term and opens only that line type's Reference information; the line text remains non-interactive.
- The successful multi-page-popover experiment is retained as design evidence, but its R1 page-position / Previous / Next implementation is removed from the Knot Line Compatibility candidate because it is not semantically appropriate here.
- JavaScript syntax: PASS for candidate `view-renderer.js` and cumulative `script.js`.
- CSS brace balance: PASS. The inherited repeated-blank-line run in `forest-journal.css` is unchanged from R1 and was not expanded.
- Line Compatibility / Reference source assertions: PASS — vertical grid; exact Knot compatibility scope; one line-specific `ⓘ` per displayed line type; direct `REEL_LINE_TYPE_GUIDANCE[lineTypeId]` lookup; no line-type page-position, Previous, Next, or pager CSS; background lock/unlock and exact originating-trigger focus return retained.
- CP9.3A detail-navigation regression source assertions: PASS — cumulative `script.js` remains byte-identical to R1 (`160d7aece45b3c3d86531a5900019924b2f1dd113b7beb1350c08ecf0c6d3a70`).
- Candidate production hashes: `view-renderer.js` `d4a6f813b9aff57b250bd77ca9aacbfd115ec62825183bd919c425db73dd7501`; `script.js` `160d7aece45b3c3d86531a5900019924b2f1dd113b7beb1350c08ecf0c6d3a70`; `forest-journal.css` `55cdae1143eb8087784875bc6a1cbdffb4a54b46a59f5e9297d306bdeb3bb387`.
- Browser/device/accessibility verdict: PENDING user review; source validation does not substitute for the required visual/touch/keyboard build test.
- CP9.3C and CP9.4+ remain blocked.

## R2 Approval + Promotion / Closeout Record

- **User verdict:** APPROVED. R2 is frozen as the accepted CP9.3B candidate: `FCC-49J-B-Knots-Guide-CP9.3B-R2-Cumulative-Review.zip`, SHA-256 `029c09529447195bfbf4adb5335dbc125acb36d5d3a8e9bb5f866c8c17e593f0`.
- The user committed the cumulative CP9.3A + CP9.3B production scope as GitHub `main` `8f4c90c62150cfbb575ae50602306b0b9ca0bf25` (`Knot Guide Build - Knot Detail + Reference + Media Integration`). The commit contains the active Knots audit plus `view-renderer.js`, `script.js`, and `forest-journal.css`.
- GitHub production hashes exactly match the approved R2 candidate: `view-renderer.js` `d4a6f813b9aff57b250bd77ca9aacbfd115ec62825183bd919c425db73dd7501`; `script.js` `160d7aece45b3c3d86531a5900019924b2f1dd113b7beb1350c08ecf0c6d3a70`; `forest-journal.css` `55cdae1143eb8087784875bc6a1cbdffb4a54b46a59f5e9297d306bdeb3bb387`.
- The exact approved production bytes were subsequently promoted to Drive Current and read back byte-for-byte at those same hashes. `node --check` passes for promoted `view-renderer.js` and `script.js`; CSS braces are balanced. Existing inherited repeated-blank-line runs were not expanded by the approved candidate.
- Browser/device/accessibility acceptance for the bounded CP9.3B review areas is PASS by explicit user approval: vertical one-line-type-per-row Line Compatibility; exact-term `ⓘ` scope; modal/bottom-sheet contextual Reference behavior; close/focus/state preservation; and CP9.3A Rig/task round-trip regression.
- `KNOT-GUIDE.md` is reconciled to the accepted exact-term Line Type Reference implementation and approved R2 production hashes. `UI_STANDARD.md` is reconciled to the exact-term Reference-scope rule plus the retained future multi-page Reference build-test pattern.
- GitHub Pages run `36212656030` for `8f4c90c6…` PASS. Repository Integrity run `36212656721` FAIL is unrelated to the Knot change set: `data/regulations.js` was unchanged in that commit, while active Arkansas and Colorado notices still carried `verifiedDate: 2026-08-26` and crossed the validator's 30-day freshness gate. Both official notices were reverified on 2026-09-25 and remain active.
- Drive Current `data/regulations.js` has been repaired only by changing those two notice verification dates to `2026-09-25`; no notice wording, URL, active state, or validator rule changed. Readback SHA-256: `b29900740ef4da758e1b5dcf57b96e6feda554c00705e973e795d3cfa7140770`. A GitHub-Pages-artifact validation snapshot for `8f4c90c6…`, overlaid only with the exact pending Drive closeout delta and reconstructed as a local Git checkout for validator mechanics, passes `tools/validate_repository_integrity.js`: **20 validation groups PASS / no repository content modified**. Because the freshness repair is a production data change, GitHub commit/push still requires separate explicit authorization.
- Documentation readback hashes after reconciliation: `KNOT-GUIDE.md` `c7be88ee8ae4498145bbaa574f234774c61db19140d2bece6ae107d4e8554672`; `UI_STANDARD.md` `2d8a898dc6a1ef9def6bb0f23c87f2c0fd7cf6274ff6d7d2646c29fada3b8e25`.
- **Owner classification:** UPDATE REQUIRED / completed in Drive — `view-renderer.js`, `script.js`, `forest-journal.css`, `KNOT-GUIDE.md`, `UI_STANDARD.md`, this active audit, Live Working State, and the bounded `data/regulations.js` freshness repair. VERIFIED — NO CHANGE REQUIRED — `docs/PROJECT-RULES.md`, `docs/V1-DESIGN-AUDIT.md`, Knot canonical compatibility data, `data/reel-guidance.js`, `MEDIA_GUIDE.md`, `data/media.js`, and `knot-media-renderer.js`.
- The bounded repository freshness repair and closeout documentation landed in GitHub `main` as `08cb6f700f33d6bb947bf711d683d584914d25c1` (`FCC 49J - CP9.3B closeout convergence`), exactly one commit after `8f4c90c62150cfbb575ae50602306b0b9ca0bf25`. The commit changes exactly four paths: `data/regulations.js`, `archive/workstreams/knots/KNOT-GUIDE.md`, `docs/UI_STANDARD.md`, and this active audit. Repository Integrity run `36213834459` PASS and Pages run `36213833502` PASS. CP9.3B is CLOSED / PASS; CP9.3C is unblocked and is the next implementation segment.

# Current Exact Resume

**Exact resume: CP9.3B is CLOSED / PASS. Resume at CP9.3C — external Visual Guide / instructional-media integration — from GitHub `main` `08cb6f700f33d6bb947bf711d683d584914d25c1` plus matching Drive Current.** Do not reopen CP9.3B unless new evidence invalidates the closed baseline.
