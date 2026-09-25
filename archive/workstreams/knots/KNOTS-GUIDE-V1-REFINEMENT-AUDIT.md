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
| KG Audit — CP7 | JavaScript / Data Structural Audit | IN PROGRESS — CP7.1-CP7.3 CLOSED / APPROVED / REFINEMENT ALLOWED |  
| KG Audit — CP8 | Implementation Scope Lock | NOT STARTED |  
| KG Audit — CP9 | Implementation + Browser Validation | NOT STARTED |  
| KG Audit — CP10 | Final Refinement + Closeout | NOT STARTED |


# Global Knots Audit Rules


1. **Chat IDs and audit checkpoints are independent.** FCC 49 / FCC 49B / FCC 49C / etc. identify chats only. KG Audit — CP# identifies stable work checkpoints and may span any number of chats.  
2. **Fish Guide is the Guide-family baseline.** Reuse validated Fish structure/interaction where semantics match.  
3. **Do not deliberately build known incompleteness.** If an approved requirement is known during Knots discovery, track and implement/test it in the Knots cycle unless explicitly deferred to a named owner.  
4. **Guide-specific restrained visual identity/flair is an active requirement.** Knots Guide may use a restrained Knot-specific motif/graphic treatment without fixed Guide-specific coloration or graphic-heavy presentation. Exact treatment must be browser-tested.  
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
- Knots Guide must not intentionally omit visual flair simply because Fish missed its implementation.


### Approved Description + Retained Build Refinements


Approved beginner-facing description:


> Learn the essential fishing knots for attaching line to your reel, tying on hooks and lures, connecting lines, and making loop connections.


Refinement remains allowed. Exact restrained Knot-specific motif/graphic treatment, placement, responsive collapse/scale behavior, and comparable browser-tested presentation details remain **BUILD TEST REQUIRED** implementation refinements rather than unresolved CP1.1 discovery decisions.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |  
|---|---|---|---|---|---|  
| KG-CP1-001 | Use **Knots Guide** consistently for the user-facing Guide/page identity. | BUILD REQUIRED | Knots landing renderer/copy owner(s), exact files locked at CP8 | Browser review + text/search check | OPEN |  
| KG-CP1-002 | Preserve Fish Guide compact Guide-identity structure where semantics match. | BUILD REQUIRED | Knots landing renderer/CSS owner(s), exact files locked at CP8 | Mobile/intermediate/desktop comparison | OPEN |  
| KG-CP1-003 | Add restrained Knot-specific visual identity/flair without a fixed Guide color or graphic-heavy design. | BUILD TEST REQUIRED | Knots landing renderer/CSS/media as justified at CP8 | Browser A/B or bounded visual review across breakpoints | OPEN |  
| KG-CP1-004 | Do not add unnecessary generic CTA above Search. | VERIFY ONLY | Knots landing renderer | Browser review | OPEN |


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
| KG-CP1-005 | Preserve current all-active-Knots deterministic scope/ranking semantics. | VERIFY ONLY | `search.js`, canonical Knot/task data consumed by search; exact implementation scope revalidated at CP8 | Deterministic query suite + browser spot checks | OPEN |  
| KG-CP1-006 | Standardize landing Search label/helper/placeholder for the approved Knots scope. | BUILD REQUIRED | Knots landing renderer/copy owner(s), exact files locked at CP8 | Browser text/scope review | OPEN |  
| KG-CP1-007 | Use live Search with no visible Search submit button while preserving Enter/mobile submit equivalence and one-click clear. | BUILD REQUIRED | Shared/Knots Search renderer/controller owner(s), exact files locked at CP8 | Keyboard/mobile/browser interaction review | OPEN |  
| KG-CP1-008 | Use shared neutral Search styling and bring clear control to the current Guide touch-target/focus baseline. | BUILD REQUIRED | Shared Search CSS/renderer owner(s), exact files locked at CP8 | Responsive + keyboard/focus review | OPEN |  
| KG-CP1-009 | Standardize empty-query, active-result status, and no-match behavior for Knots landing Search. | BUILD REQUIRED | Knots Search controller/renderer owner(s), exact files locked at CP8 | Browser state matrix + accessibility announcement check | OPEN |  
| KG-CP1-010 | Preserve landing Search query + scroll through Search → Knot Detail → Parent. | BUILD REQUIRED | Knots route/state controller owner(s), exact files locked at CP8 | Navigation round-trip review | OPEN |  
| KG-CP1-011 | Browser-test Knots desktop Search width rather than automatically copying Fish width. | BUILD TEST REQUIRED | Knots landing CSS/layout owner(s), exact files locked at CP8 | Mobile/intermediate/full-desktop comparison | OPEN |  
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
| KG-CP1-015 | Add dedicated **Get Your Reel Ready** special workflow card immediately after Search and launch the existing Reel Setup path. | BUILD REQUIRED | Knots landing renderer/controller owner(s), exact files locked at CP8 | Browser interaction + navigation-path review | OPEN |
| KG-CP1-016 | Remove duplicate landing-level **Attach Line to a Reel** workflow entry; keep Knot discovery and Reel Setup ownership distinct. | BUILD REQUIRED | Knots landing/task renderer + task-definition usage, exact files locked at CP8 | Landing task inventory + navigation review | OPEN |
| KG-CP1-019 | Inherit the Fish **Compare Similar Fish** workflow-card geometry/responsive behavior for **Get Your Reel Ready** and verify it across breakpoints; redesign only if a concrete Knots-specific defect appears. | VERIFY ONLY | Knots landing CSS/layout owner(s), exact files locked at CP8 | Mobile/intermediate/full-desktop comparison | OPEN |


## CP1.4 — Core Knots — Learn These First


**Status:** CLOSED / SUPERSEDED BY APPROVED LANDING HIERARCHY


A standalone **Core Knots — Learn These First** major landing section is not retained. Core is surfaced in two clearer places instead: **Learn Core Knots** under **What Are You Trying to Do?** for task/learning entry, and **Core Knots — Browse →** under **All Knots** for collection browsing. The underlying four-Knot Core set remains unchanged.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP1-018 | Remove the standalone Core major landing section while preserving Core access through the task section and All Knots collection. | BUILD REQUIRED | Knots landing renderer/copy owner(s), exact files locked at CP8 | Landing hierarchy/browser review | OPEN |


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
| KG-CP1-017 | Build the approved four-entry **What Are You Trying to Do?** task set and preserve the task-to-Knot/collection semantics. | BUILD REQUIRED | Knots landing/task renderer + canonical task definitions, exact files locked at CP8 | Task matrix + browser navigation review | OPEN |


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
| KG-CP1-013 | Apply the validated Fish Guide `Browse →` collection-card grammar to Knots collection cards and preserve responsive left-aligned wrap behavior. | BUILD REQUIRED | Knots landing renderer/CSS owner(s), exact files locked at CP8 | Mobile/intermediate/full-desktop card review + keyboard/touch check | OPEN |
| KG-CP1-020 | Implement **All Knots — Browse →** as an ordinary Fish-baseline browse card that opens the complete active Knot library; do not add a separate section-level Browse All action. | BUILD REQUIRED | Knots landing renderer/controller owner(s), exact files locked at CP8 | Complete-library navigation + responsive browser review | OPEN |


## CP1.7 — Advanced Knots Resolution


**Status:** CLOSED / APPROVED — REMOVE V1 LANDING CARD / RETAIN ADVANCED TAXONOMY


The decision gate is resolved: **remove the Advanced Knots collection/card from the Version 1 landing experience.** Version 1 has 0 active Advanced-difficulty Knot records, and no existing Knot is reclassified or new Knot added merely to populate the tier. The approved **Advanced** difficulty taxonomy/canonical support remains available for future justified Knot records; an Advanced landing collection returns only after real validated content exists.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP1-014 | Remove **Advanced Knots** from the Version 1 landing page while retaining `Advanced` in the difficulty taxonomy/future canonical support. | BUILD REQUIRED | Knot collection configuration + Knots landing renderer/controller owner(s), exact files locked at CP8 | Configuration check + landing browser validation + taxonomy regression check | OPEN |


## CP1.8 — Whole-Page Hierarchy / Density / Accent Review


**Status:** CLOSED / APPROVED / BUILD-TEST REFINEMENTS RETAINED


### Approved Landing Hierarchy


1. **Knots Guide** identity + approved description
2. **Search Knots**
3. **Get Your Reel Ready** — special workflow
4. **What Are You Trying to Do?** — four approved task/learning entries
5. **All Knots** — **All Knots — Browse →** plus **Core Knots — Browse →**, **Beginner Knots — Browse →**, and **Intermediate Knots — Browse →** cards


The hierarchy is approved with refinement allowed. Exact responsive spacing, card width/span, visual density, standard-card accent rotation, workflow accent implementation, and restrained Knot-specific motif remain implementation/browser-test concerns; they do not reopen the approved information hierarchy unless testing exposes a material usability defect.


### Action Items


| ID | Requirement | Disposition | Source owner(s) | Validation | Status |
|---|---|---|---|---|---|
| KG-CP1-021 | Validate the complete approved landing hierarchy, density, accent sequencing, workflow distinction, motif, and responsive behavior as one page. | BUILD TEST REQUIRED | Knots landing renderer/CSS/media owner(s), exact files locked at CP8 | Mobile/intermediate/full-desktop whole-page browser review | OPEN |


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
| KG-CP2-001 | Apply Fish-baseline whole-card interaction, focus/touch/hover behavior, action treatment, and responsive wrapping to equivalent Knots landing cards. | BUILD REQUIRED / VERIFY | Knots landing renderer/CSS owner(s), exact files locked at CP8 | Keyboard/touch + mobile/intermediate/desktop browser review | OPEN |
| KG-CP2-002 | Treat **Get Your Reel Ready** as the direct Knots equivalent of **Compare Similar Fish**, including reserved workflow styling and **Start Setup →**. | BUILD REQUIRED | Knots landing renderer/CSS/controller owner(s), exact files locked at CP8 | Visual/interaction comparison against Fish baseline + workflow launch | OPEN |
| KG-CP2-003 | Implement **All Knots — Browse →** as a normal Fish-baseline browse card and remove/supersede the separate **Browse All →** section-level treatment. | BUILD REQUIRED | Knots landing renderer/controller owner(s), exact files locked at CP8 | Landing hierarchy + complete-library navigation | OPEN |
| KG-CP2-004 | Preserve priority styling for **Core Knots** and for the three beginner-important task cards: Learn Core Knots, Tie On a Hook/Swivel/Lure, Connect Two Lines/Add a Leader. | BUILD REQUIRED | Knots landing renderer/CSS owner(s), exact files locked at CP8 | Whole-page hierarchy review across breakpoints | OPEN |
| KG-CP2-005 | Use **Learn →** for Learn Core Knots while keeping **Browse →** for Core Knots collection browsing. | BUILD REQUIRED | Knots landing renderer/copy/controller owner(s), exact files locked at CP8 | Action semantics + navigation review | OPEN |
| KG-CP2-006 | Verify Fish-inherited responsive geometry/reflow works for Knots; diverge only for a documented concrete usability defect. | VERIFY ONLY / BUILD TEST IF DEFECT FOUND | Knots landing CSS/layout owner(s), exact files locked at CP8 | Mobile/intermediate/full-desktop comparison | OPEN |


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
| KG-CP3-001 | Use one shared Knot result-card architecture and approved classification/name/`View Knot →`/alias/summary composition across landing Search, browse collections, and task results. | BUILD REQUIRED | Knot result renderer + shared result-card CSS owner(s), exact files locked at CP8 | Landing/browse/task card comparison + keyboard/touch review | OPEN |
| KG-CP3-002 | Keep result cards compact: Core+Difficulty or Difficulty classification, optional alias, summary; no extra connection/line/Best For metadata and no CP3-required media. | BUILD REQUIRED / VERIFY | Knot result renderer/data consumption, exact files locked at CP8 | Content inventory across all 10 active Knots | OPEN |
| KG-CP3-003 | Bring Knot browse/task Search to the Fish live scoped baseline with `Knots Guide` parent, `Search Knots`, concise scope help, no visible submit, clear behavior, and no scope widening. | BUILD REQUIRED | Knot browse controller + shared Search renderer/CSS, exact files locked at CP8 | Collection/task Search state matrix + keyboard/mobile review | OPEN |
| KG-CP3-004 | Preserve approved empty-query ordering (A–Z collections; curated Core; task-definition order), relevance-ranked typed Search, and route Learn Core Knots into the existing Core collection. | BUILD REQUIRED / VERIFY | `script.js`, `search.js`, `data/knot-guidance.js`, exact scope locked at CP8 | Deterministic ordering/query suite + navigation review | OPEN |
| KG-CP3-005 | Use Fish result-grid density (1 column mobile / 2 columns maximum thereafter) and rotating standard accents with Core priority treatment independent of accent identity. | BUILD REQUIRED / VERIFY | Knot/shared result CSS, exact files locked at CP8 | Mobile/intermediate/full-desktop visual review | OPEN |
| KG-CP3-006 | Preserve active collection/task + query + scroll through result → Knot Detail → Parent. | BUILD REQUIRED | Knot browse/detail navigation state controller, exact files locked at CP8 | Round-trip state restoration browser test | OPEN |
| KG-CP3-007 | Use Knot-specific result status/no-match wording, including `N knots found` and scoped `No knots found in <scope>. Try another search.` | BUILD REQUIRED | Shared result renderer/config + Knot browse/search controller, exact files locked at CP8 | Search state matrix + accessibility announcement check | OPEN |


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
| KG-CP4-001 | Apply the shared adjacent-`ⓘ` Reference convention to Knot Detail Line Compatibility; only the icon opens Reference, text keeps its own semantics, hit area is enlarged without visual detachment/overlap, and focus returns after close. | BUILD REQUIRED / VERIFY | Knot detail renderer + shared Reference-control CSS/controller owner(s), exact files locked at CP8 | Keyboard/touch + mobile/intermediate/desktop interaction review | OPEN |
| KG-CP4-002 | Browser-test the Line Type Reference surface (contextual popover vs current dedicated detail route) while preserving the approved `ⓘ` trigger convention and full return context. | BUILD TEST REQUIRED | Knot/Line Type reference navigation + Reference surface owner(s), exact files locked at CP8 | Bounded A/B browser review + round-trip state/focus test | OPEN |
| KG-CP4-003 | Implement approved Knot Detail identity order: origin navigation → Core+Difficulty/Difficulty classification → Knot name → summary → optional alias; classification remains non-interactive and no fixed Knots color is introduced. | BUILD REQUIRED | Knot detail renderer/CSS owner(s), exact files locked at CP8 | All-10-Knot identity inventory + responsive browser review | OPEN |
| KG-CP4-004 | Build **ABOUT THIS KNOT** as independent collapsed Fish-baseline disclosures for Best For, Line Compatibility, and Where You'll Use It using full-row `▾`/`▴` disclosure controls. | BUILD REQUIRED | Knot detail renderer/disclosure controller/CSS owner(s), exact files locked at CP8 | Keyboard/touch + independent-state + responsive review | OPEN |
| KG-CP4-005 | Keep **HOW TO TIE IT** always visible with authoritative numbered `tyingSteps[]` and an instructional-media area whose exact media behavior remains owned by CP5. | BUILD REQUIRED | Knot detail renderer + instructional layout owner(s), exact files locked at CP8 | All-10-Knot step inventory + mobile/desktop instructional-flow review | OPEN |
| KG-CP4-006 | Keep **CHECK YOUR KNOT** always visible immediately after tying steps and render `finalChecks[]` as primary verification guidance. | BUILD REQUIRED | Knot detail renderer/data owner(s), exact files locked at CP8 | All-10-Knot final-check inventory + browser review | OPEN |
| KG-CP4-007 | Build **MORE HELP** independent collapsed disclosures for Common Mistakes (`commonMistakes[]`) and When to Choose Another Knot (`limitations[]`). | BUILD REQUIRED | Knot detail renderer/disclosure owner(s), exact files locked at CP8 | Content mapping + disclosure keyboard/touch review | OPEN |
| KG-CP4-008 | Preserve structured **Where You'll Use It** navigation with `→` task/workflow/Rig actions; route reel-spool contexts to **Get Your Reel Ready →** rather than resurrecting Attach Line to a Reel as a competing task. | BUILD REQUIRED / VERIFY | Knot usage-context/relationship renderer + navigation controller, exact files locked at CP8 | Relationship matrix + navigation round-trip review | OPEN |
| KG-CP4-009 | Keep **Sources & References** collapsed by default; use actual-origin parent navigation and do not add a generic duplicate bottom Back to Knots action. | BUILD REQUIRED / VERIFY | Knot detail renderer/navigation state owner(s), exact files locked at CP8 | Origin matrix + source-disclosure + keyboard/browser review | OPEN |
| KG-CP4-010 | Browser-test final Knot Detail instructional geometry after CP5; do not pre-lock desktop to a two-column layout. Preserve clear mobile single-flow order and no horizontal scrolling. | BUILD TEST REQUIRED | Knot detail/instructional media CSS/layout owner(s), exact files locked at CP8 | Mobile/intermediate/full-desktop visual comparison after CP5 | OPEN |


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
| KG-CP5-001 | Preserve all current verified external instructional destinations as the known-working baseline until a replacement treatment is explicitly validated and approved. | VERIFY ONLY | Knot instructional media/reference-link owners, exact files locked at CP8 | All-10-Knot media inventory + browser link verification | OPEN |
| KG-CP5-002 | Build a bounded FCC-owned instructional prototype for Arbor, Improved Clinch, Palomar, and Double Uni that proves accurate static states plus user-controlled step-through presentation. | BUILD TEST REQUIRED | Knot media assets + media renderer/controller/CSS, exact files locked at CP8 | Technical geometry review + mobile/intermediate/desktop browser review | OPEN |
| KG-CP5-003 | Keep `tyingSteps[]` authoritative and ensure candidate visuals synchronize to canonical steps without becoming a duplicate independent instruction source. | BUILD TEST REQUIRED / VERIFY | Knot canonical data + instructional renderer/media mapping, exact files locked at CP8 | Step-by-step content/visual cross-check across Core prototype | OPEN |
| KG-CP5-004 | Do not require transition animation for Version 1; if motion is later tested, require user control, no autoplay, reduced-motion safety, and a clear static final state. | VERIFY ONLY / BUILD TEST IF MOTION USED | Knot media renderer/CSS/accessibility owner(s), exact files locked at CP8 | Motion/reduced-motion/accessibility browser matrix if motion is implemented | OPEN |


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
| KG-CP5-005 | Prototype static instructional states synchronized to canonical `tyingSteps[]`, using one visual state per canonical step as the default without making 1:1 a permanent schema constraint. | BUILD TEST REQUIRED | Knot canonical data + instructional media mapping/renderer, exact files locked at CP8 | Four-Core-Knot step/state cross-check + geometry review | OPEN |
| KG-CP5-006 | Prototype the user-controlled viewer with current visual, Step N of M, canonical current-step text, Previous/Next or equivalent controls, while retaining the complete numbered tying sequence outside the viewer. | BUILD TEST REQUIRED | Knot detail instructional renderer/controller/CSS, exact files locked at CP8 | Keyboard/touch + text fallback + mobile/intermediate/desktop browser review | OPEN |
| KG-CP5-007 | Use the final canonical tying step as the normal completed-Knot visual state; do not add an artificial media-only Finished Knot step before Check Your Knot. | BUILD TEST REQUIRED / VERIFY | Knot canonical step data + instructional renderer/media mapping, exact files locked at CP8 | Core prototype final-state + Check Your Knot flow review | OPEN |
| KG-CP5-008 | Preserve the current string-array `tyingSteps[]` model and derived numbering; do not add stable step IDs, step objects, or a separate media step count without demonstrated prototype need. | VERIFY ONLY | Knot canonical schema/data + renderer, exact files locked at CP8 | Schema/data diff + prototype mapping review | OPEN |
| KG-CP5-009 | Use SVG-based static instructional states as the candidate visual unit while deferring exact file/state packaging to CP5.4. | BUILD TEST REQUIRED | Knot instructional media assets/renderer, exact files locked at CP8 | SVG fidelity/readability/maintainability review during Core prototype | OPEN |


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
| KG-CP5-010 | Apply the approved phone-first vector line grammar; continuous line keeps one underlying stroke treatment with standing/tag distinction supplied by labels/end cues rather than false material changes. | BUILD TEST REQUIRED | Knot SVG assets + instructional media CSS/renderer, exact files locked at CP8 | Four-Core-Knot phone readability + visual-consistency review | OPEN |
| KG-CP5-011 | Use a colorblind-friendly instructional palette whenever separate lines use color, and preserve line identity through non-color cues so meaning survives grayscale/color-vision-deficiency/theme changes. | BUILD TEST REQUIRED | Knot SVG assets + theme/accessibility CSS, exact files locked at CP8 | Color-vision/grayscale + light/dark theme review | OPEN |
| KG-CP5-012 | Make every meaningful over/under crossing and referenced loop/opening unambiguous at phone size; ambiguity is a prototype failure. | BUILD TEST REQUIRED | Knot SVG geometry, exact files locked at CP8 | Crossing/loop geometry checklist across Core prototype | OPEN |
| KG-CP5-013 | Standardize restrained action cues, simplified recognizable hardware, and default no-hands treatment; add complexity only when needed for accurate instruction. | BUILD TEST REQUIRED | Knot SVG assets + visual grammar helpers, exact files locked at CP8 | Core action-cue/hardware clarity review | OPEN |
| KG-CP5-014 | Keep visual labels sparse and do not duplicate canonical tying instructions inside SVG states; `tyingSteps[]` remains the textual authority. | BUILD TEST REQUIRED / VERIFY | Knot SVG assets + instructional renderer, exact files locked at CP8 | SVG text/content inventory + step/visual cross-check | OPEN |
| KG-CP5-015 | Validate theme-aware, phone-first, orientation-flexible presentation and technical geometry accuracy; no essential desktop-only information and no pinch-zoom dependency. | BUILD TEST REQUIRED | Knot SVG assets + instructional viewer/CSS, exact files locked at CP8 | Mobile/intermediate/desktop + theme/accessibility + geometry review | OPEN |


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
| KG-CP5-016 | Before custom drawing each Core prototype Knot, search for technically suitable public-domain/open-license instructional material and verify reuse/modification rights at the asset/source level. | BUILD TEST REQUIRED / VERIFY | Knot media research/provenance owner(s), exact files locked at CP8 | Asset-level rights/provenance record + suitability review for all four Core Knots | OPEN |
| KG-CP5-017 | Accept reusable material only when it also matches canonical method/`tyingSteps[]`, geometry, phone readability, and CP5.3 visual/accessibility grammar; otherwise use custom FCC SVG fallback. | BUILD TEST REQUIRED | Knot media research + canonical step/media mapping, exact files locked at CP8 | Four-Core-Knot rights + technical suitability matrix | OPEN |
| KG-CP5-018 | For custom states, deliberately construct and technically validate SVG geometry from verified Knot-method facts; AI/tool assistance may author SVG but generated imagery cannot establish/validate geometry or be traced into production states. | BUILD TEST REQUIRED / VERIFY | Knot SVG assets + technical validation owner(s), exact files locked at CP8 | Geometry provenance + state-by-state technical review | OPEN |
| KG-CP5-019 | Use one inspectable SVG per instructional state as the prototype packaging default while avoiding premature dynamic/canvas/layer-animation architecture; retain packaging as refinement allowed after evidence. | BUILD TEST REQUIRED | Knot media assets/loader/renderer, exact files locked at CP8 | File/loader simplicity + diffability/maintainability review | OPEN |
| KG-CP5-020 | Run state validation covering source/step alignment, crossings, wraps, threading, line identity, direction cues, hardware, phone readability, color independence, and final-state correctness. | BUILD TEST REQUIRED | Knot media assets + validation checklist owner(s), exact files locked at CP8 | Completed per-state checklist across four-Core prototype | OPEN |
| KG-CP5-021 | Run sequence and finished-Knot validation; reject/rework unexplained transitions or final geometry that does not match the verified method. | BUILD TEST REQUIRED | Knot canonical steps + media sequence reviewer(s), exact files locked at CP8 | Full sequence walkthrough + final-state comparison for each prototype Knot | OPEN |
| KG-CP5-022 | Prototype in order Improved Clinch → Palomar → Double Uni → Arbor and require the complete four-Knot set to pass before proposing FCC-owned media for primary-treatment promotion. | BUILD TEST REQUIRED | Knot prototype implementation/validation owner(s), exact files locked at CP8 | Progressive gate results + four-Knot acceptance summary | OPEN |


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
| KG-CP5-023 | Keep the selected external instructional destination within HOW TO TIE IT as the protected established visual help through prototype/replacement validation; after a proven replacement, continued retention/placement is governed by CP5.7 evidence rather than being permanently mandatory. | BUILD REQUIRED / VERIFY | Knot detail instructional renderer + external media/reference mapping, exact files locked at CP8 | All-10-Knot instructional-placement inventory + browser review | OPEN |
| KG-CP5-024 | Use medium-specific external action labels, restrained provider attribution, and `↗` external-navigation semantics while reserving `→` for FCC-internal navigation. | BUILD REQUIRED / VERIFY | Knot instructional renderer/copy + shared navigation affordance CSS, exact files locked at CP8 | All-10-Knot label/provider/affordance review + keyboard/touch check | OPEN |
| KG-CP5-025 | Link third-party supplemental media rather than copying/rehosting/extracting/reproducing it unless CP5.4 separately verifies reuse rights and local-incorporation suitability. | VERIFY ONLY | Knot media/reference owners + media assets, exact files locked at CP8 | Rights/provenance + asset/link inventory | OPEN |
| KG-CP5-026 | Use one preferred supplemental external instructional destination per Knot by default; require materially distinct teaching value for any additional destination. | VERIFY ONLY | Knot instructional reference data, exact files locked at CP8 | All-10-Knot destination-count + rationale inventory | OPEN |
| KG-CP5-027 | Make external-resource failure non-blocking and verify every active instructional destination while preserving canonical text/local-media usability. | VERIFY ONLY / BUILD REQUIRED IF DEFECT FOUND | Knot instructional link data + renderer, exact files locked at CP8 | All-10-Knot external link verification + failure-state review | OPEN |
| KG-CP5-028 | Preserve Knot/detail context across external instruction and browser-test exact More visual instruction placement relative to the full numbered steps; retain viewer state where practical. | BUILD TEST REQUIRED | Knot detail/navigation state + instructional layout owner(s), exact files locked at CP8 | External round-trip state test + mobile/intermediate/desktop teaching-flow comparison | OPEN |


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
| KG-CP5-029 | Preserve one semantic teaching hierarchy across all breakpoints, with phone as the authoritative single-column composition and no horizontal-scroll/pinch-zoom or desktop-only essential instruction. | BUILD TEST REQUIRED | Knot detail instructional renderer/CSS + media viewer owner(s), exact files locked at CP8 | Phone/intermediate/desktop hierarchy + overflow/information-parity review | OPEN |
| KG-CP5-030 | Keep Previous/Next semantics consistent at every viewport, with explicit discoverable controls, optional swipe only, predictable disabled states, and stable keyboard/touch focus behavior. | BUILD REQUIRED / VERIFY | Knot viewer controller/accessibility/CSS owner(s), exact files locked at CP8 | Keyboard/touch/focus + first/middle/final-state matrix | OPEN |
| KG-CP5-031 | Keep intermediate/tablet stacked by default and reuse shared FCC breakpoints unless a concrete prototype defect justifies a Knot-specific exception. | BUILD TEST REQUIRED / VERIFY | Knot detail/shared responsive CSS owner(s), exact files locked at CP8 | Intermediate/tablet breakpoint comparison + CSS breakpoint inventory | OPEN |
| KG-CP5-032 | Browser-test centered stacked desktop against sufficiently wide side-by-side viewer/reference treatment; do not pre-approve two columns or add desktop-only instructional content. | BUILD TEST REQUIRED | Knot detail instructional layout/CSS owner(s), exact files locked at CP8 | Full-desktop A/B comparison across Core prototype | OPEN |
| KG-CP5-033 | Support orientation-flexible SVG/viewBox geometry while keeping viewer controls/visual region reasonably stable across state changes without cropping/distortion. | BUILD TEST REQUIRED | Knot SVG assets + viewer layout/CSS owner(s), exact files locked at CP8 | State-transition layout-stability review across four Core Knots | OPEN |
| KG-CP5-034 | Keep the full numbered `tyingSteps[]` as normal accessible non-interactive document content for the initial prototype; test non-color current-step emphasis and explicitly stress-test Double Uni + Arbor responsive behavior. | BUILD TEST REQUIRED / VERIFY | Knot detail renderer/CSS + Core prototype assets, exact files locked at CP8 | Full-step accessibility/current-state review + Double Uni/Arbor responsive stress test | OPEN |


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
| KG-CP5-035 | Preserve the current working Knot Detail/instructional experience as the implementation baseline and refine it against approved Guide-family structure rather than assuming wholesale replacement. | BUILD TEST REQUIRED | Knot detail renderer/CSS/instructional layout owner(s), exact files locked at CP8 | Baseline-vs-refined browser comparison across representative Knots | OPEN |
| KG-CP5-036 | Use the four-Core prototype as an evidence test of viewer, static, hybrid, reusable/open, and FCC-authored treatments; do not require the prototype to prove one predetermined architecture. | BUILD TEST REQUIRED | Core media prototype + Knot instructional renderer/controller owner(s), exact files locked at CP8 | Four-Core technical/browser comparison with explicit treatment verdict | OPEN |
| KG-CP5-037 | Do not assign the remaining six Knots mandatory FCC-owned media before the Core prototype verdict; any expansion or justified per-Knot variation requires evidence-based disposition. | VERIFY ONLY | Knot media scope + CP8/CP9 decision owner(s) | Scope inventory before/after Core prototype verdict | OPEN |
| KG-CP5-038 | Protect external instruction through replacement validation, but browser-test its post-replacement placement/retention/removal rather than making permanent retention mandatory. | BUILD TEST REQUIRED | Knot instructional external-media mapping/layout owner(s), exact files locked at CP8 | Representative post-replacement teaching-flow comparison + link/value review | OPEN |
| KG-CP5-039 | Enforce outcome-based closure: complete/technically correct/non-regressive instruction, no partial local-media sequence treated as finished, and accessible responsive validation. | VERIFY ONLY / BUILD REQUIRED IF DEFECT FOUND | Knot canonical instruction + media + renderer/CSS owner(s), exact files locked at CP8 | Technical completeness + regression + responsive/accessibility checklist | OPEN |
| KG-CP5-040 | At CP8, separate known implementation work from explicit build-test decision gates; CP9 resolves final treatment without presuming viewer/static/hybrid/external or expansion outcomes. | DEFERRED — CP8 implementation scope lock / CP9 browser validation | Knots audit + exact production owners locked at CP8 | CP8 traceability review + CP9 disposition readback | OPEN |


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
| KG-CP6-001 | Preserve Get Your Reel Ready as the existing first-class branching workflow rather than collapsing it into an Arbor-only or single-path flow. | VERIFY ONLY | Reel Setup workflow/state owners, exact files locked at CP8 | Branch/path inventory + browser walkthrough | OPEN |
| KG-CP6-002 | Reserve special/workflow-card treatment for true special workflow surfaces; convert ordinary internal Reel Setup choices to normal choice-card treatment where currently overused. | BUILD REQUIRED | Reel Setup renderer/CSS owner(s), exact files locked at CP8 | Representative choice-screen visual/interaction review | OPEN |
| KG-CP6-003 | Separate primary progression from workflow utilities; build-test one full-width primary action followed by paired Restart Setup / Exit to Knots controls with responsive stacking only when needed. | BUILD TEST REQUIRED | Reel Setup renderer/CSS/navigation owner(s), exact files locked at CP8 | Phone/intermediate/desktop control-layout + touch-target review | OPEN |
| KG-CP6-004 | Replace ambiguous/internal user-facing copy including Start Over / Return to Knots where applicable and remove exposed Package 3 terminology. | BUILD REQUIRED | Reel Setup renderer/copy owner(s), exact files locked at CP8 | Full-workflow text/control inventory | OPEN |
| KG-CP6-005 | Make Restart Setup reset Reel Setup selections/current phase and return to workflow start without unnecessarily clearing external origin/return context. | BUILD REQUIRED | Reel Setup state + detail-navigation-stack owner(s), exact files locked at CP8 | Entry-from-Knot → progress → Restart → origin-context regression test | OPEN |
| KG-CP6-006 | Make Exit to Knots an explicit destructive workflow exit: discard Reel Setup state and open the Knots landing page; do not imply an automatic resume path. | BUILD REQUIRED / VERIFY | Reel Setup state/navigation owner(s), exact files locked at CP8 | Mid-workflow Exit → Knots → fresh-entry state test | OPEN |
| KG-CP6-007 | Keep Selected Choices as a theme-based noninteractive summary while rendering selected-value text in the shared workflow accent blue, not the Knots-specific accent and not a special-card visual treatment. | BUILD REQUIRED / BUILD TEST | Reel Setup status renderer/shared workflow styling owner(s), exact files locked at CP8 | Theme + contrast + representative-state browser review | OPEN |
| KG-CP6-008 | Combine Selected Choices and Setup Progress into one clearly partitioned workflow-status section without visually mixing choices with phase labels. | BUILD TEST REQUIRED | Reel Setup renderer/CSS owner(s), exact files locked at CP8 | Phone/intermediate/desktop hierarchy review | OPEN |
| KG-CP6-009 | **Superseded by CP6.5:** implement the final noninteractive five-phase progress model — Reel, Line, Equipment, Spool, Ready — with current/completed/upcoming semantics that do not rely on color alone; test full-label and compact mobile treatments. | BUILD TEST REQUIRED | Reel Setup progress/state renderer + accessibility/CSS owner(s), exact files locked at CP8 | Phase-state matrix + responsive + accessibility review | OPEN |
| KG-CP6-010 | Preserve the current responsive Reel Setup baseline unless CP9 exposes a concrete defect; specifically validate the new status section and utility controls across shared FCC breakpoints. | VERIFY ONLY / BUILD TEST REQUIRED | Reel Setup/shared responsive CSS owner(s), exact files locked at CP8 | Responsive regression comparison | OPEN |


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
| KG-CP6-011 | Keep Spinning, Spincast, and Baitcasting as the three actual selectable reel types; direct an actual reel selection straight to Line Selection. | VERIFY ONLY / BUILD REQUIRED IF CURRENT fourth choice remains | Reel Setup reel-type data/renderer/state owner(s), exact files locked at CP8 | Choice inventory + route test | OPEN |
| KG-CP6-012 | Mark Spinning Reel with a restrained Recommended First Setup cue while clearly separating first-setup recommendation from identification of equipment the user already owns. | BUILD REQUIRED / BUILD TEST REQUIRED | Reel Setup reel-type card/copy/shared beginner-priority styling owner(s), exact files locked at CP8 | Beginner comprehension + visual hierarchy review | OPEN |
| KG-CP6-013 | Refine reel descriptions around beginner-visible physical recognition cues while introducing necessary reel terminology. | BUILD REQUIRED | Reel guidance copy owner, exact files locked at CP8 | Content review + representative browser check | OPEN |
| KG-CP6-014 | Remove the separate I'm Not Sure → Which Reel Matches Yours? workflow branch and keep identification help on the Reel Type screen. | BUILD REQUIRED | Reel Setup state/router/renderer owner(s), exact files locked at CP8 | Branch inventory + direct reel-selection route test | OPEN |
| KG-CP6-015 | Add Not sure which reel you have? `ⓘ` using the approved Reference convention; only the `ⓘ` opens help. | BUILD REQUIRED | Reel Setup renderer + shared Reference interaction owner(s), exact files locked at CP8 | Pointer/touch/keyboard/focus-return review | OPEN |
| KG-CP6-016 | Build-test one three-page reel-identification Reference surface: Spinning, Spincast, Baitcasting; each page supports concise description + traits and may include a representative/labeled image or illustration. | BUILD TEST REQUIRED | Shared Reference surface + Reel Setup reference content/media owner(s), exact files locked at CP8 | Three-page content/visual comparison + beginner recognition test | OPEN |
| KG-CP6-017 | Multi-page Reference uses visible page position and explicit Previous/Next controls; swipe is optional only, no autoplay, and Reference paging does not mutate Reel Setup state/progress. | BUILD REQUIRED / BUILD TEST REQUIRED | Shared Reference navigation/accessibility owner(s), exact files locked at CP8 | Keyboard/touch/swipe/focus/state regression review | OPEN |
| KG-CP6-018 | Remove obsolete Back to Reel Choices UI and obsolete Reel Identification Help workflow state/navigation after Reference treatment replaces the branch. | BUILD REQUIRED | Reel Setup renderer/state/navigation/data owner(s), exact files locked at CP8 | Dead-route/state inventory + browser regression | OPEN |
| KG-CP6-019 | Preserve downstream-state clearing when an actual reel type changes and keep the reel-identification Reference surface inside the fixed Reel progress phase. | VERIFY ONLY | Reel Setup state/progress owner(s), exact files locked at CP8 | State-reset + progress-phase matrix | OPEN |
| KG-CP6-020 | Reconcile CP6.3 line guidance to the approved Spinning Reel → All-Around Freshwater → 10 lb Monofilament beginner baseline; current All-Around easy choice remains 8 lb until implementation. | DEFERRED — CP6.3 | Reel guidance/recommendation owner(s), exact files locked at CP8 | Recommendation-baseline reconciliation + equipment-guidance review | OPEN |


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
| KG-CP6-021 | Derive reused Fish category titles from the canonical Fish Guide owner; correct Reel Setup Panfish - Bluegill & Crappie to canonical **Crappie & Sunfish** through derivation rather than a second authored label. | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | Fish category owner + Reel Setup target-card data/renderer, exact files locked at CP8 | Canonical-title mutation test + card inventory | OPEN |
| KG-CP6-022 | Keep All-Around Freshwater first, then derive/reuse the Fish Guide canonical category order rather than maintaining a separate Reel Setup order. | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | Fish category owner + Reel Setup target-list composition, exact files locked at CP8 | Ordering comparison against Fish Guide | OPEN |
| KG-CP6-023 | Review wording on every target-specific recommendation page so recommendation, rationale, and user-selected Line Weight are distinct and beginner-readable. | BUILD REQUIRED / BUILD TEST REQUIRED | Reel guidance copy/renderer owner(s), exact files locked at CP8 | Six-target content matrix + browser review | OPEN |
| KG-CP6-024 | Reconcile All-Around Freshwater to **10 lb Monofilament** as the preferred starting recommendation with **8 lb Monofilament** as the lighter approved alternative. | BUILD REQUIRED | Reel guidance recommendation owner, exact files locked at CP8 | Recommendation-audit reconciliation | OPEN |
| KG-CP6-025 | Reconcile target guidance by separating target strength references from Line Type interpretation; do not mechanically reuse Monofilament numeric guidance for Fluorocarbon/Braid. | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | Reel guidance recommendation data, exact files locked at CP8 | Target x Line Type behavior/content matrix | OPEN |
| KG-CP6-026 | Replace the target-page Next - Check Reel & Rod Compatibility progression card with the user's Line Weight selection/confirmation flow. | BUILD REQUIRED / BUILD TEST REQUIRED | Reel Setup target-guidance renderer/state owner(s), exact files locked at CP8 | Target-page interaction matrix across line types | OPEN |
| KG-CP6-027 | Build-test a rolling Line Weight selector as the preferred starting interaction; exact selector range/geometry/mechanics remain refinement-allowed. | BUILD TEST REQUIRED | Shared selector/reel target-guidance UI owner(s), exact files locked at CP8 | Pointer/touch/keyboard/responsive comparison | OPEN |
| KG-CP6-028 | Do not auto-advance on selector movement; use an explicit dynamic confirmation action such as Continue with <strength> lb <line type> →. | BUILD REQUIRED / BUILD TEST REQUIRED | Reel target-guidance renderer/controller, exact files locked at CP8 | Selection/confirmation/state test | OPEN |
| KG-CP6-029 | Add transient actual Line Weight state and include confirmed strength + Line Type in Selected Choices. | BUILD REQUIRED | Reel Setup state/status owner(s), exact files locked at CP8 | Upstream-reset + selected-choice matrix | OPEN |
| KG-CP6-030 | Build downstream Equipment guidance from the user's actual confirmed Line Type + Line Weight rather than hard-coded/default recommendation wording. | BUILD REQUIRED | Reel Setup equipment copy/renderer owner(s), exact files locked at CP8 | Dynamic-copy state matrix | OPEN |
| KG-CP6-031 | Replace FCC pass/fail compatibility semantics with generic best-practice equipment-reading guidance; equipment/manufacturer markings remain authoritative and progression is not blocked. | BUILD REQUIRED / VERIFY | Reel Setup Equipment phase data/renderer/controller, exact files locked at CP8 | Out-of-recommendation progression + wording review | OPEN |
| KG-CP6-032 | Preserve How to Read Reel/Rod education and the required labeled reel/spool diagram; exact contextual Reference presentation remains BUILD TEST refinement. | BUILD REQUIRED / BUILD TEST REQUIRED | Reel guidance/reference/media owner(s), exact files locked at CP8 | Reference content + diagram + responsive/accessibility review | OPEN |
| KG-CP6-033 | Apply a build-time wording pass across Target → Recommendation/Selection → Equipment so the approved semantic distinctions remain clear after real UI composition. | BUILD TEST REQUIRED | Reel guidance copy + Reel Setup renderer owner(s), exact files locked at CP8 | End-to-end beginner comprehension/browser review | OPEN |
| KG-CP6-034 | Implement the approved six-target starting-reference values, including Bass `8–12 lb` / 10 lb Mono and Catfish `15–20 lb` / 20 lb Mono. | BUILD REQUIRED | Reel target/recommendation data owner(s), exact files locked at CP8 | Six-target value/content readback + browser matrix | OPEN |
| KG-CP6-035 | Initialize Line Weight only when an exact target + Line Type numeric recommendation is approved; otherwise begin unconfirmed. Braid/Fluorocarbon must not inherit Mono values silently. | BUILD REQUIRED / BUILD TEST REQUIRED | Reel target-guidance state/selector owner(s), exact files locked at CP8 | Line Type × target initialization matrix | OPEN |
| KG-CP6-036 | Remove Help Me Choose / I'm Not Sure Line workflow cards/branches and replace them with the inline Line Type Reference trigger. | BUILD REQUIRED | Reel Setup Line phase renderer/state/navigation owner(s), exact files locked at CP8 | Dead-branch/state inventory + browser navigation test | OPEN |
| KG-CP6-037 | Build one three-page Monofilament / Fluorocarbon / Braid Reference surface with explicit Previous/Next, optional swipe, no autoplay, and no workflow-state mutation. | BUILD TEST REQUIRED / BUILD REQUIRED | Shared Reference + Reel Line guidance owner(s), exact files locked at CP8 | Keyboard/touch/focus/state + responsive review | OPEN |
| KG-CP6-038 | Remove equipment confirmation/mismatch/completed workflow states and replace with one educational Equipment step plus normal Continue to Backing / Spool Setup. | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | Reel Setup Equipment state/renderer/navigation owner(s), exact files locked at CP8 | Dead-state/route inventory + forward/backward workflow test | OPEN |
| KG-CP6-039 | Consolidate Equipment help into Read Reel / Read Rod / If Ratings Don't Match Reference pages; mismatch guidance no longer owns workflow state. | BUILD REQUIRED / BUILD TEST REQUIRED | Reel equipment guidance/reference owner(s), exact files locked at CP8 | Reference-page content + focus/responsive review | OPEN |
| KG-CP6-040 | Preserve Spincast + Braid as an informational manufacturer-check safeguard without FCC incompatibility declaration or blocking behavior. | BUILD REQUIRED / VERIFY | Reel Line/Equipment guidance owner(s), exact files locked at CP8 | Spincast+Braid path + wording/progression regression | OPEN |


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
| KG-CP1-001 | CP1.1 | Knots Guide naming | BUILD REQUIRED | TBD at CP8 | Browser + text check | OPEN | OPEN |  
| KG-CP1-002 | CP1.1 | Fish-baseline compact identity | BUILD REQUIRED | TBD at CP8 | Responsive browser review | OPEN | OPEN |  
| KG-CP1-003 | CP1.1 | Restrained Knots visual identity/flair | BUILD TEST REQUIRED | TBD at CP8 | Responsive visual review | OPEN | OPEN |  
| KG-CP1-004 | CP1.1 | No unnecessary generic CTA | VERIFY ONLY | TBD at CP8 | Browser review | OPEN | OPEN |
| KG-CP1-005 | CP1.2 | Preserve Knots deterministic Search scope/ranking | VERIFY ONLY | TBD at CP8 | Deterministic query suite + browser spot checks | OPEN | OPEN |  
| KG-CP1-006 | CP1.2 | Search label/helper/placeholder | BUILD REQUIRED | TBD at CP8 | Browser text/scope review | OPEN | OPEN |  
| KG-CP1-007 | CP1.2 | Live Search / no visible submit / clear behavior | BUILD REQUIRED | TBD at CP8 | Keyboard/mobile/browser interaction review | OPEN | OPEN |  
| KG-CP1-008 | CP1.2 | Neutral Search styling + current clear touch/focus treatment | BUILD REQUIRED | TBD at CP8 | Responsive + keyboard/focus review | OPEN | OPEN |  
| KG-CP1-009 | CP1.2 | Empty/status/no-match state behavior | BUILD REQUIRED | TBD at CP8 | Browser state matrix + accessibility review | OPEN | OPEN |  
| KG-CP1-010 | CP1.2 | Search query + scroll restoration through Knot Detail | BUILD REQUIRED | TBD at CP8 | Navigation round-trip review | OPEN | OPEN |  
| KG-CP1-011 | CP1.2 | Knots desktop Search-width experiment | BUILD TEST REQUIRED | TBD at CP8 | Responsive browser comparison | OPEN | OPEN |  
| KG-CP1-012 | CP1.2 | Search documentation supersession reconciliation | DOC UPDATE | `KNOT-GUIDE.md` + audit record | Readback | CLOSED / PASS | CLOSED / PASS |  
| KG-CP1-013 | CP1.6 | Fish-baseline `Browse →` collection-card grammar | BUILD REQUIRED | TBD at CP8 | Responsive card + interaction review | OPEN | OPEN |  
| KG-CP1-014 | CP1.7 | Remove Advanced Knots V1 landing card; retain Advanced taxonomy/future-record support | BUILD REQUIRED | TBD at CP8 | Config + browser + taxonomy regression review | OPEN | OPEN |
| KG-CP1-015 | CP1.3 | Dedicated Get Your Reel Ready workflow card after Search | BUILD REQUIRED | TBD at CP8 | Workflow launch + browser review | OPEN | OPEN |  
| KG-CP1-016 | CP1.3 | Remove duplicate Attach Line to a Reel landing workflow entry | BUILD REQUIRED | TBD at CP8 | Landing task inventory + navigation review | OPEN | OPEN |  
| KG-CP1-017 | CP1.5 | Approved four-entry task/learning section | BUILD REQUIRED | TBD at CP8 | Task matrix + browser navigation review | OPEN | OPEN |  
| KG-CP1-018 | CP1.4 | Remove standalone Core major landing section; preserve task + collection access | BUILD REQUIRED | TBD at CP8 | Landing hierarchy review | OPEN | OPEN |  
| KG-CP1-019 | CP1.3 | Inherit Fish Compare workflow-card geometry/responsive behavior; verify Knots fit | VERIFY ONLY | TBD at CP8 | Responsive browser comparison | OPEN | OPEN |  
| KG-CP1-020 | CP1.6 | All Knots `Browse →` complete-library browse card | BUILD REQUIRED | TBD at CP8 | Complete-library navigation + responsive review | OPEN | OPEN |  
| KG-CP1-021 | CP1.8 | Whole landing hierarchy/density/accent/motif validation | BUILD TEST REQUIRED | TBD at CP8 | Whole-page responsive browser review | OPEN | OPEN |  
| KG-CP2-001 | CP2 | Fish-baseline whole-card interaction/focus/touch/action/wrap behavior | BUILD REQUIRED / VERIFY | TBD at CP8 | Keyboard/touch + responsive browser review | OPEN | OPEN |  
| KG-CP2-002 | CP2 | Get Your Reel Ready = Compare Similar Fish workflow-card treatment | BUILD REQUIRED | TBD at CP8 | Fish baseline comparison + workflow launch | OPEN | OPEN |  
| KG-CP2-003 | CP2 | All Knots = All Fish-style Browse card; no separate Browse All action | BUILD REQUIRED | TBD at CP8 | Landing + complete-library navigation | OPEN | OPEN |  
| KG-CP2-004 | CP2 | Priority styling for Core Knots + three beginner-important task cards | BUILD REQUIRED | TBD at CP8 | Whole-page hierarchy review | OPEN | OPEN |  
| KG-CP2-005 | CP2 | Learn Core Knots uses Learn →; Core collection uses Browse → | BUILD REQUIRED | TBD at CP8 | Action semantics/navigation | OPEN | OPEN |  
| KG-CP2-006 | CP2 | Verify inherited Fish responsive geometry; diverge only on concrete defect | VERIFY ONLY / BUILD TEST IF DEFECT FOUND | TBD at CP8 | Responsive comparison | OPEN | OPEN |  
| KG-CP3-001 | CP3 | Shared Knot result-card architecture + approved card composition | BUILD REQUIRED | TBD at CP8 | Landing/browse/task result-card comparison | OPEN | OPEN |
| KG-CP3-002 | CP3 | Compact classification/alias/summary content; no extra metadata/media requirement | BUILD REQUIRED / VERIFY | TBD at CP8 | All-10-Knot content inventory | OPEN | OPEN |
| KG-CP3-003 | CP3 | Fish-baseline live scoped Search on browse/task pages | BUILD REQUIRED | TBD at CP8 | Collection/task Search state matrix | OPEN | OPEN |
| KG-CP3-004 | CP3 | Approved collection/task ordering + relevance Search + Learn Core route | BUILD REQUIRED / VERIFY | TBD at CP8 | Ordering/query/navigation suite | OPEN | OPEN |
| KG-CP3-005 | CP3 | 1/2-column maximum result grid + rotating standard accents/Core priority separation | BUILD REQUIRED / VERIFY | TBD at CP8 | Responsive visual review | OPEN | OPEN |
| KG-CP3-006 | CP3 | Browse/task collection/query/scroll restoration through detail | BUILD REQUIRED | TBD at CP8 | Navigation round-trip browser test | OPEN | OPEN |
| KG-CP3-007 | CP3 | Knot-specific result count + scoped no-match wording | BUILD REQUIRED | TBD at CP8 | Search state/accessibility review | OPEN | OPEN |


| KG-CP4-001 | CP4.1 | Shared adjacent-`ⓘ` Reference convention on Knot Line Compatibility | BUILD REQUIRED / VERIFY | TBD at CP8 | Keyboard/touch + responsive interaction review | OPEN | OPEN |
| KG-CP4-002 | CP4.1 | Line Type Reference surface browser test with preserved return context | BUILD TEST REQUIRED | TBD at CP8 | A/B browser + round-trip state/focus test | OPEN | OPEN |
| KG-CP4-003 | CP4.2 | Approved Knot Detail identity/header order + non-interactive classification | BUILD REQUIRED | TBD at CP8 | All-10-Knot identity + responsive review | OPEN | OPEN |
| KG-CP4-004 | CP4.3 | ABOUT THIS KNOT independent disclosure group | BUILD REQUIRED | TBD at CP8 | Disclosure state + keyboard/touch/responsive review | OPEN | OPEN |
| KG-CP4-005 | CP4.4 | Always-visible How to Tie It + numbered tyingSteps + CP5 media slot | BUILD REQUIRED | TBD at CP8 | All-10-Knot step + instructional-flow review | OPEN | OPEN |
| KG-CP4-006 | CP4.5 | Always-visible Check Your Knot from finalChecks | BUILD REQUIRED | TBD at CP8 | All-10-Knot verification-content review | OPEN | OPEN |
| KG-CP4-007 | CP4.5 | More Help disclosures for commonMistakes + limitations | BUILD REQUIRED | TBD at CP8 | Content mapping + disclosure interaction review | OPEN | OPEN |
| KG-CP4-008 | CP4.3/4.6 | Structured task/workflow/Rig navigation + Get Your Reel Ready bridge | BUILD REQUIRED / VERIFY | TBD at CP8 | Relationship + navigation matrix | OPEN | OPEN |
| KG-CP4-009 | CP4.6 | Collapsed Sources + actual-origin parent navigation / no duplicate bottom Back action | BUILD REQUIRED / VERIFY | TBD at CP8 | Origin/source disclosure browser review | OPEN | OPEN |
| KG-CP4-010 | CP4.6 | Post-CP5 Knot Detail instructional geometry experiment | BUILD TEST REQUIRED | TBD at CP8 | Mobile/intermediate/full-desktop comparison | OPEN | OPEN |
| KG-CP5-001 | CP5.1 | Preserve verified external instructional-media baseline | VERIFY ONLY | TBD at CP8 | All-10-Knot media inventory + browser link verification | OPEN | OPEN |
| KG-CP5-002 | CP5.1 | Four-Core-Knot FCC-owned static-state + step-through prototype | BUILD TEST REQUIRED | TBD at CP8 | Geometry + responsive browser review | OPEN | OPEN |
| KG-CP5-003 | CP5.1 | Keep tyingSteps authoritative; visuals synchronize without duplicate instruction authority | BUILD TEST REQUIRED / VERIFY | TBD at CP8 | Core prototype step/visual cross-check | OPEN | OPEN |
| KG-CP5-004 | CP5.1 | Motion optional only; user-controlled/non-autoplay/reduced-motion/static-final-state requirements if used | VERIFY ONLY / BUILD TEST IF MOTION USED | TBD at CP8 | Accessibility/motion matrix if implemented | OPEN | OPEN |
| KG-CP5-005 | CP5.2 | Static instructional-state mapping synchronized to tyingSteps; 1:1 default, not permanent schema constraint | BUILD TEST REQUIRED | TBD at CP8 | Four-Core-Knot step/state + geometry review | OPEN | OPEN |
| KG-CP5-006 | CP5.2 | Viewer = visual + Step N of M + canonical text + Previous/Next; full numbered text retained | BUILD TEST REQUIRED | TBD at CP8 | Keyboard/touch/fallback + responsive browser review | OPEN | OPEN |
| KG-CP5-007 | CP5.2 | Final canonical tying step normally owns completed-Knot state; no media-only Finished Knot step | BUILD TEST REQUIRED / VERIFY | TBD at CP8 | Core final-state + Check Your Knot flow review | OPEN | OPEN |
| KG-CP5-008 | CP5.2 | Preserve string-array tyingSteps + derived numbering; no stable step IDs/step objects/media step count without proven need | VERIFY ONLY | TBD at CP8 | Schema/data diff + prototype mapping review | OPEN | OPEN |
| KG-CP5-009 | CP5.2 | SVG static states are candidate visual unit; packaging deferred to CP5.4 | BUILD TEST REQUIRED | TBD at CP8 | SVG fidelity/readability/maintainability review | OPEN | OPEN |
| KG-CP5-010 | CP5.3 | Phone-first vector line grammar + continuous-line standing/tag distinction | BUILD TEST REQUIRED | TBD at CP8 | Four-Core-Knot phone readability + visual consistency | OPEN | OPEN |
| KG-CP5-011 | CP5.3 | Colorblind-friendly instructional palette + mandatory non-color line identity cues | BUILD TEST REQUIRED | TBD at CP8 | Color-vision/grayscale + light/dark theme review | OPEN | OPEN |
| KG-CP5-012 | CP5.3 | Unambiguous over/under crossings + loop/opening readability | BUILD TEST REQUIRED | TBD at CP8 | Crossing/loop geometry checklist | OPEN | OPEN |
| KG-CP5-013 | CP5.3 | Restrained action cues + simplified hardware + default no-hands treatment | BUILD TEST REQUIRED | TBD at CP8 | Action-cue/hardware clarity review | OPEN | OPEN |
| KG-CP5-014 | CP5.3 | Sparse labels; no duplicated canonical instruction text inside SVG | BUILD TEST REQUIRED / VERIFY | TBD at CP8 | SVG text inventory + step/visual cross-check | OPEN | OPEN |
| KG-CP5-015 | CP5.3 | Theme-aware phone-first/orientation-flexible presentation + geometry accuracy validation | BUILD TEST REQUIRED | TBD at CP8 | Responsive/theme/accessibility/geometry review | OPEN | OPEN |


| KG-CP5-016 | CP5.4 | Reuse-first public-domain/open-license sourcing + asset-level rights verification | BUILD TEST REQUIRED / VERIFY | TBD at CP8 | Four-Core asset rights/provenance + suitability review | OPEN | OPEN |
| KG-CP5-017 | CP5.4 | Reusable media must pass canonical/geometry/mobile/visual-grammar suitability; custom SVG fallback otherwise | BUILD TEST REQUIRED | TBD at CP8 | Four-Core rights + technical suitability matrix | OPEN | OPEN |
| KG-CP5-018 | CP5.4 | Custom SVG geometry deliberately constructed/verified; generated imagery not geometry authority or trace source | BUILD TEST REQUIRED / VERIFY | TBD at CP8 | Geometry provenance + state technical review | OPEN | OPEN |
| KG-CP5-019 | CP5.4 | One inspectable SVG per state as prototype packaging default; avoid premature dynamic media architecture | BUILD TEST REQUIRED | TBD at CP8 | File/loader simplicity + maintainability review | OPEN | OPEN |
| KG-CP5-020 | CP5.4 | Per-state technical validation checklist | BUILD TEST REQUIRED | TBD at CP8 | Completed state checklist across Core prototype | OPEN | OPEN |
| KG-CP5-021 | CP5.4 | Sequence + finished-Knot validation with reject/rework rule | BUILD TEST REQUIRED | TBD at CP8 | Full sequence + final-state review | OPEN | OPEN |
| KG-CP5-022 | CP5.4 | Progressive prototype order + all-four acceptance before promotion proposal | BUILD TEST REQUIRED | TBD at CP8 | Progressive results + four-Knot acceptance summary | OPEN | OPEN |
| KG-CP5-023 | CP5.5 | External instruction remains in HOW TO TIE IT before/after any later FCC promotion | BUILD REQUIRED / VERIFY | TBD at CP8 | All-10-Knot placement + browser review | OPEN | OPEN |
| KG-CP5-024 | CP5.5 | Medium-specific labels/provider attribution + `↗` external / `→` internal convention | BUILD REQUIRED / VERIFY | TBD at CP8 | Label/provider/affordance review | OPEN | OPEN |
| KG-CP5-025 | CP5.5 | Link external media; no copy/rehost/extract without separately verified reuse rights | VERIFY ONLY | TBD at CP8 | Rights/provenance + asset/link inventory | OPEN | OPEN |
| KG-CP5-026 | CP5.5 | One preferred external instructional destination per Knot by default | VERIFY ONLY | TBD at CP8 | All-10-Knot destination-count/rationale inventory | OPEN | OPEN |
| KG-CP5-027 | CP5.5 | External failure remains non-blocking + active link verification | VERIFY ONLY / BUILD REQUIRED IF DEFECT FOUND | TBD at CP8 | External-link + failure-state review | OPEN | OPEN |
| KG-CP5-028 | CP5.5 | External round-trip context preservation + More visual instruction placement experiment | BUILD TEST REQUIRED | TBD at CP8 | State restoration + responsive teaching-flow review | OPEN | OPEN |
| KG-CP5-029 | CP5.6 | One responsive teaching hierarchy; phone authoritative / no desktop-only essential instruction | BUILD TEST REQUIRED | TBD at CP8 | Hierarchy + overflow + information-parity review | OPEN | OPEN |
| KG-CP5-030 | CP5.6 | Consistent Previous/Next semantics + accessible focus/disabled-state behavior | BUILD REQUIRED / VERIFY | TBD at CP8 | Keyboard/touch/focus state matrix | OPEN | OPEN |
| KG-CP5-031 | CP5.6 | Intermediate stacked default + shared FCC breakpoints unless concrete defect | BUILD TEST REQUIRED / VERIFY | TBD at CP8 | Tablet/intermediate + breakpoint inventory | OPEN | OPEN |
| KG-CP5-032 | CP5.6 | Desktop stacked-vs-side-by-side bounded layout experiment | BUILD TEST REQUIRED | TBD at CP8 | Full-desktop Core-prototype A/B review | OPEN | OPEN |
| KG-CP5-033 | CP5.6 | Orientation-flexible SVG/viewBox + stable viewer geometry across state changes | BUILD TEST REQUIRED | TBD at CP8 | Four-Core state-transition layout review | OPEN | OPEN |
| KG-CP5-034 | CP5.6 | Full numbered steps remain accessible/non-interactive; current-step emphasis + Double Uni/Arbor stress test | BUILD TEST REQUIRED / VERIFY | TBD at CP8 | Full-step accessibility + responsive stress test | OPEN | OPEN |
| KG-CP5-035 | CP5.7 | Current working Knot Detail/instructional experience remains implementation baseline; refine rather than assume replacement | BUILD TEST REQUIRED | TBD at CP8 | Baseline-vs-refined representative browser comparison | OPEN | OPEN |
| KG-CP5-036 | CP5.7 | Four-Core media prototype is an evidence test, not a predetermined viewer proof | BUILD TEST REQUIRED | TBD at CP8 | Four-Core treatment comparison + explicit verdict | OPEN | OPEN |
| KG-CP5-037 | CP5.7 | No mandatory FCC-owned media for remaining six before prototype verdict; expansion/per-Knot variation evidence-driven | VERIFY ONLY | TBD at CP8 | Media-scope inventory before/after verdict | OPEN | OPEN |
| KG-CP5-038 | CP5.7 | External instruction protected through replacement validation; permanent retention/placement/removal remains build-test refinement | BUILD TEST REQUIRED | TBD at CP8 | Post-replacement teaching-flow/value comparison | OPEN | OPEN |
| KG-CP5-039 | CP5.7 | Outcome-based closure: complete/correct/non-regressive/no partial local sequence/accessible-responsive | VERIFY ONLY / BUILD REQUIRED IF DEFECT FOUND | TBD at CP8 | Technical/regression/accessibility/responsive checklist | OPEN | OPEN |
| KG-CP5-040 | CP5.7 | CP8 separates known scope from decision gates; CP9 resolves actual final media treatment without assumed outcome | DEFERRED — CP8 implementation scope lock / CP9 browser validation | TBD at CP8 | CP8 traceability + CP9 disposition readback | OPEN | OPEN |
| KG-CP6-001 | CP6.1 | Preserve first-class branching Reel Setup architecture | VERIFY ONLY | TBD at CP8 | Branch/path inventory + browser walkthrough | OPEN | OPEN |
| KG-CP6-002 | CP6.1 | Reserve special workflow-card treatment for true special surfaces; ordinary internal choices use normal treatment | BUILD REQUIRED | TBD at CP8 | Representative choice-screen review | OPEN | OPEN |
| KG-CP6-003 | CP6.1 | Full-width primary progression + separate Restart Setup / Exit to Knots utility row | BUILD TEST REQUIRED | TBD at CP8 | Responsive control-layout + touch-target review | OPEN | OPEN |
| KG-CP6-004 | CP6.1 | Beginner-facing Restart/Exit wording; remove exposed Package 3 terminology | BUILD REQUIRED | TBD at CP8 | Full-workflow text/control inventory | OPEN | OPEN |
| KG-CP6-005 | CP6.1 | Restart resets Reel Setup without unnecessarily destroying external origin/return context | BUILD REQUIRED | TBD at CP8 | Origin-context restart regression test | OPEN | OPEN |
| KG-CP6-006 | CP6.1 | Exit to Knots is destructive exit to Knots landing with no implied resume session | BUILD REQUIRED / VERIFY | TBD at CP8 | Exit/fresh-entry state test | OPEN | OPEN |
| KG-CP6-007 | CP6.1 | Selected-choice values use shared workflow blue while summary surface stays theme-based/noninteractive | BUILD REQUIRED / BUILD TEST | TBD at CP8 | Theme/contrast/browser review | OPEN | OPEN |
| KG-CP6-008 | CP6.1 | Combined but clearly partitioned Selected Choices + Setup Progress status section | BUILD TEST REQUIRED | TBD at CP8 | Responsive hierarchy review | OPEN | OPEN |
| KG-CP6-009 | CP6.1 / superseded by CP6.5 | Final fixed noninteractive five-phase Reel → Line → Equipment → Spool → Ready progress model | BUILD TEST REQUIRED | TBD at CP8 | Phase-state + responsive + accessibility review | OPEN | OPEN |
| KG-CP6-010 | CP6.1 | Preserve responsive baseline and validate new status/utilities across shared breakpoints | VERIFY ONLY / BUILD TEST REQUIRED | TBD at CP8 | Responsive regression comparison | OPEN | OPEN |
| KG-CP6-011 | CP6.2 | Three actual reel choices; direct actual selection to Line Selection | VERIFY ONLY / BUILD REQUIRED IF CURRENT fourth choice remains | TBD at CP8 | Choice inventory + route test | OPEN | OPEN |
| KG-CP6-012 | CP6.2 | Spinning Reel carries Recommended First Setup cue without confusing identification | BUILD REQUIRED / BUILD TEST REQUIRED | TBD at CP8 | Beginner comprehension + visual hierarchy review | OPEN | OPEN |
| KG-CP6-013 | CP6.2 | Beginner-visible physical reel-recognition copy | BUILD REQUIRED | TBD at CP8 | Content + browser review | OPEN | OPEN |
| KG-CP6-014 | CP6.2 | Remove separate I'm Not Sure / Which Reel Matches Yours workflow branch | BUILD REQUIRED | TBD at CP8 | Branch inventory + direct-route test | OPEN | OPEN |
| KG-CP6-015 | CP6.2 | Inline Not sure which reel you have? `ⓘ` Reference trigger | BUILD REQUIRED | TBD at CP8 | Pointer/touch/keyboard/focus review | OPEN | OPEN |
| KG-CP6-016 | CP6.2 | Three-page reel-identification Reference surface with optional representative/labeled visual | BUILD TEST REQUIRED | TBD at CP8 | Multi-page content/visual recognition review | OPEN | OPEN |
| KG-CP6-017 | CP6.2 | Explicit Previous/Next + position; swipe optional; no autoplay; no workflow-state mutation | BUILD REQUIRED / BUILD TEST REQUIRED | TBD at CP8 | Keyboard/touch/swipe/focus/state review | OPEN | OPEN |
| KG-CP6-018 | CP6.2 | Remove obsolete Back to Reel Choices + obsolete identification workflow state/navigation | BUILD REQUIRED | TBD at CP8 | Dead-route/state inventory | OPEN | OPEN |
| KG-CP6-019 | CP6.2 | Preserve downstream reset behavior + keep Reference inside Reel progress phase | VERIFY ONLY | TBD at CP8 | State-reset + phase matrix | OPEN | OPEN |
| KG-CP6-020 | CP6.2 → CP6.3 | Reconcile beginner baseline to Spinning → All-Around Freshwater → 10 lb Monofilament | DEFERRED — CP6.3 | TBD at CP8 | Recommendation + equipment-guidance reconciliation | OPEN | OPEN |


| KG-CP6-021 | CP6.3 | Derive canonical Fish category titles; Crappie & Sunfish replaces duplicated Panfish wording | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | TBD at CP8 | Canonical-title mutation + card inventory | OPEN | OPEN |
| KG-CP6-022 | CP6.3 | All-Around first + Fish Guide canonical category order reuse | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | TBD at CP8 | Ordering comparison | OPEN | OPEN |
| KG-CP6-023 | CP6.3 | Target recommendation-page wording review | BUILD REQUIRED / BUILD TEST REQUIRED | TBD at CP8 | Six-target content/browser matrix | OPEN | OPEN |
| KG-CP6-024 | CP6.3 | All-Around baseline 10 lb Mono; 8 lb lighter alternative | BUILD REQUIRED | TBD at CP8 | Recommendation reconciliation | OPEN | OPEN |
| KG-CP6-025 | CP6.3 | Reconcile six targets x supported Line Types; no blind Mono relabel | CONTENT RECONCILIATION / BUILD REQUIRED | TBD at CP8 | Target x Line Type matrix | OPEN | OPEN |
| KG-CP6-026 | CP6.3 | Replace target-page compatibility Next card with Line Weight selection/confirmation | BUILD REQUIRED / BUILD TEST REQUIRED | TBD at CP8 | Interaction matrix | OPEN | OPEN |
| KG-CP6-027 | CP6.3 | Rolling Line Weight selector preferred build candidate | BUILD TEST REQUIRED | TBD at CP8 | Touch/keyboard/responsive comparison | OPEN | OPEN |
| KG-CP6-028 | CP6.3 | Explicit dynamic Continue confirms Line Weight; no selector auto-advance | BUILD REQUIRED / BUILD TEST REQUIRED | TBD at CP8 | Confirmation/state test | OPEN | OPEN |
| KG-CP6-029 | CP6.3 | Persist transient actual Line Weight + show in Selected Choices | BUILD REQUIRED | TBD at CP8 | State/reset/status matrix | OPEN | OPEN |
| KG-CP6-030 | CP6.3 | Equipment copy uses actual confirmed Line Type + Line Weight | BUILD REQUIRED | TBD at CP8 | Dynamic-copy matrix | OPEN | OPEN |
| KG-CP6-031 | CP6.3 | Equipment education only; no FCC compatibility pass/fail or blocking | BUILD REQUIRED / VERIFY | TBD at CP8 | Out-of-recommendation progression + copy review | OPEN | OPEN |
| KG-CP6-032 | CP6.3 | Preserve Reel/Rod reading guidance + labeled reel/spool diagram | BUILD REQUIRED / BUILD TEST REQUIRED | TBD at CP8 | Reference/diagram/responsive review | OPEN | OPEN |
| KG-CP6-033 | CP6.3 | Build-time wording pass for Target -> Recommendation/Selection -> Equipment | BUILD TEST REQUIRED | TBD at CP8 | End-to-end beginner comprehension | OPEN | OPEN |
| KG-CP6-034 | CP6.3 | Approved six-target starting-reference values incl. Bass/Catfish corrections | BUILD REQUIRED | TBD at CP8 | Six-target value/content + browser matrix | OPEN | OPEN |
| KG-CP6-035 | CP6.3 | Selector initializes only from exact approved target + Line Type numeric recommendation; otherwise unconfirmed | BUILD REQUIRED / BUILD TEST REQUIRED | TBD at CP8 | Line Type x target initialization matrix | OPEN | OPEN |
| KG-CP6-036 | CP6.3 | Replace Help Me Choose / I'm Not Sure Line branches with inline Line Type Reference trigger | BUILD REQUIRED | TBD at CP8 | Dead-branch/state + navigation review | OPEN | OPEN |
| KG-CP6-037 | CP6.3 | Three-page Line Type Reference for Mono/Fluoro/Braid | BUILD REQUIRED / BUILD TEST REQUIRED | TBD at CP8 | Keyboard/touch/focus/state/responsive review | OPEN | OPEN |
| KG-CP6-038 | CP6.3 | Remove equipment confirmation/mismatch/completed states; educational Equipment + normal Continue | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | TBD at CP8 | Dead-state inventory + workflow regression | OPEN | OPEN |
| KG-CP6-039 | CP6.3 | Consolidated Equipment Reference: Read Reel / Read Rod / If Ratings Don't Match | BUILD REQUIRED / BUILD TEST REQUIRED | TBD at CP8 | Reference content/focus/responsive review | OPEN | OPEN |
| KG-CP6-040 | CP6.3 | Spincast + Braid remains informational manufacturer-check safeguard, non-blocking | BUILD REQUIRED / VERIFY | TBD at CP8 | Combination-path wording/progression test | OPEN | OPEN |


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
| KG-CP6-041 | Remove obsolete Equipment compatibility-complete dependency from Backing/Spool progression. | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | Reel Setup state/router owners, exact files locked at CP8 | State/route inventory + non-blocking progression matrix | OPEN |
| KG-CP6-042 | Make Backing conditional on actual Line Type: Braid only; Mono/Fluoro bypass directly into Spool. | BUILD REQUIRED / VERIFY | Reel Setup backing route/data/renderer owners, exact files locked at CP8 | Three-Line-Type branch matrix | OPEN |
| KG-CP6-043 | For Braid, present Monofilament Backing as Recommended First Setup and Direct Braid only as Manufacturer Supported. | BUILD REQUIRED / BUILD TEST REQUIRED | Reel Setup backing copy/choice renderer owners, exact files locked at CP8 | Braid path content + hierarchy review | OPEN |
| KG-CP6-044 | Do not expose optional/economy backing under Mono/Fluoro in Version 1. | BUILD REQUIRED / VERIFY | Reel Setup backing choices/route owners, exact files locked at CP8 | Mono/Fluoro branch inventory | OPEN |
| KG-CP6-045 | Make Equipment progression conditional: Braid → Decide on Backing; Mono/Fluoro → Spool; preserve Spincast+Braid as non-blocking warning. | BUILD REQUIRED / BUILD TEST REQUIRED | Reel Setup Equipment/Backing navigation + copy owners, exact files locked at CP8 | Reel Type x Line Type progression matrix | OPEN |
| KG-CP6-046 | Collapse the conceptual Spool Connection Plan / Spool the Reel split into one chronological Spool-phase experience with internal substeps as needed. | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | Reel Setup Spool state/router/renderer owners, exact files locked at CP8 | State inventory + chronological path walkthrough | OPEN |
| KG-CP6-047 | Implement direct Mono/Fluoro sequence: reel-specific prepare/routing → Arbor Knot → return to same Spool point → wind main line → fill check. | BUILD REQUIRED / BUILD TEST REQUIRED | Reel Setup Spool guidance + Knot handoff owners, exact files locked at CP8 | Reel Type x direct-line browser walkthrough | OPEN |
| KG-CP6-048 | Implement Braid + Mono Backing sequence: Arbor → wind backing → Double Uni → wind Braid → fill check. | BUILD REQUIRED / BUILD TEST REQUIRED | Reel Setup Spool/backing/Knot handoff owners, exact files locked at CP8 | Braid-backing chronological walkthrough | OPEN |
| KG-CP6-049 | Direct Braid uses exact manufacturer-supported attachment and must not receive generic Arbor guidance. | BUILD REQUIRED / VERIFY | Reel Setup direct-Braid branch/copy owners, exact files locked at CP8 | Direct-Braid path review | OPEN |
| KG-CP6-050 | Place task-worded Arbor/Double Uni handoffs at the physical action point and restore complete Spool state, originating action, scroll where appropriate, and keyboard focus on return. | BUILD REQUIRED / BUILD TEST REQUIRED | Reel Setup navigation/Knot detail return owners, exact files locked at CP8 | Keyboard/touch/focus/scroll/state round-trip | OPEN |
| KG-CP6-051 | Propagate confirmed Line Type + Line Weight through Spool guidance and build-test a simple responsive semantic line-system visualization. | BUILD REQUIRED / BUILD TEST REQUIRED | Reel Setup state/Spool renderer/CSS owners, exact files locked at CP8 | Dynamic-state matrix + responsive visual review | OPEN |
| KG-CP6-052 | Do not invent universal backing pound-test or yardage when reel capacity/backing diameter/main-line length are unknown; manufacturer capacity guidance remains authoritative. | CONTENT / VERIFY | Reel Setup Spool/backing guidance owner, exact files locked at CP8 | Content review across Braid paths | OPEN |
| KG-CP6-053 | Treat Mono/Fluoro direct-spool behavior as derived routing, not an explicit No Separate Backing user selection or Selected Choices value. | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | Reel Setup state/Selected Choices/backing owners, exact files locked at CP8 | State + displayed-choice inventory | OPEN |


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
| KG-CP6-054 | Replace the earlier six-phase tracker with final five-phase Reel → Line → Equipment → Spool → Ready progression. | BUILD REQUIRED / BUILD TEST REQUIRED | Reel Setup progress/state renderer/CSS owners, exact files locked at CP8 | Phase-state + responsive/accessibility matrix | OPEN |
| KG-CP6-055 | Remove Leader Decision, Leader Material, and Leader Setup workflow states/routes and their stale prerequisite/back-navigation logic. | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | Reel Setup state/router/controller owners, exact files locked at CP8 | Dead-state/route inventory | OPEN |
| KG-CP6-056 | Remove `leaderChoice` from Reel Setup state, Selected Choices, and Ready prerequisites. | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | Reel Setup state/status/Ready owners, exact files locked at CP8 | State/schema/display inventory | OPEN |
| KG-CP6-057 | Remove generic leader material/length construction guidance and Double Uni handoff from Reel Setup. | BUILD REQUIRED / CONTENT RECONCILIATION | Reel guidance/controller owners, exact files locked at CP8 | Content + dead-guidance inventory | OPEN |
| KG-CP6-058 | Provide optional non-blocking Leader Reference Knowledge where contextually useful, especially for Braid; Reference must not mutate Reel Setup state or imply incomplete reel readiness. | BUILD REQUIRED / BUILD TEST REQUIRED | Reel Setup Reference/copy/interaction owners, exact files locked at CP8 | Reference trigger + keyboard/touch/focus/state review | OPEN |
| KG-CP6-059 | Defer actual leader material/strength/length/connection decisions to later Rig/presentation context. | STRUCTURAL / CONTENT VERIFY | Rig/relationship/recommendation owners as locked at CP8/related audit | Cross-Guide ownership review | OPEN |
| KG-CP6-060 | Make Ready validate the completed reel/main-line/backing system only; CP6.6 now owns the locked completion/handoff details. | BUILD REQUIRED / DETAIL LOCKED — CP6.6 | Reel Setup Ready/handoff owners, exact files locked at CP8 | Ready-state + handoff matrix | OPEN |


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
| KG-CP6-061 | Define Ready as completed reel/main-line/backing system, not complete fishable terminal setup. | BUILD REQUIRED / CONTENT VERIFY | Reel Setup Ready copy/state owners, exact files locked at CP8 | Ready-content + prerequisite matrix | OPEN |
| KG-CP6-062 | Remove Leader, Equipment-compatible, and unconditional Backing prerequisites from Ready; apply conditional readiness semantics for direct Mono/Fluoro and Braid paths. | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | Reel Setup Ready/state/router owners, exact files locked at CP8 | Ready prerequisite/state matrix | OPEN |
| KG-CP6-063 | Replace Ready checklist with concise routing/function, spool-fill, connection, and equipment-reference checks; keep manufacturer guidance authoritative and no FCC PASS/FAIL. | BUILD REQUIRED / CONTENT VERIFY | Reel Ready guidance/data/renderer owners, exact files locked at CP8 | Four-path content + physical-check review | OPEN |
| KG-CP6-064 | Reuse Selected Choices and semantic line-system summary on Ready; do not fabricate No Separate Backing for Mono/Fluoro. | BUILD REQUIRED / BUILD TEST REQUIRED | Reel Setup status/Ready/line-system renderer owners, exact files locked at CP8 | Representative Ready-state responsive review | OPEN |
| KG-CP6-065 | Use **Choose a Rig →** as primary completion/handoff; open normal Rig Guide and do not automatically select a Rig. | BUILD REQUIRED / VERIFY | Reel Setup completion + Rig routing owners, exact files locked at CP8 | Ready → Rig Guide route test | OPEN |
| KG-CP6-066 | Use **Done — Knots Guide** on completed Ready while preserving **Exit to Knots** on incomplete phases. | BUILD REQUIRED / VERIFY | Reel Setup Ready/navigation copy owners, exact files locked at CP8 | Complete-vs-incomplete control inventory | OPEN |
| KG-CP6-067 | Create compact transient completed Reel Setup context: Reel Type, Target, Line Type, Line Weight, and conditional Backing only. | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | Shared/Reel Setup transient state owner(s), exact files locked at CP8 | State-schema/capture/reset matrix | OPEN |
| KG-CP6-068 | Preserve completed context through Rig Guide browse/search/detail navigation for the setup journey without persistent User Knowledge/account storage or reload requirement. | BUILD REQUIRED / BUILD TEST REQUIRED | Shared routing/runtime state + Rig navigation owners, exact files locked at CP8 | Rig landing/browse/search/detail persistence regression | OPEN |
| KG-CP6-069 | Show compact noninteractive **Your Reel Setup** summary in Rig Guide when entered from completed Reel Setup. | BUILD REQUIRED / BUILD TEST REQUIRED | Rig Guide landing/context renderer/CSS owners, exact files locked at CP8 | Context/no-context + responsive/accessibility review | OPEN |
| KG-CP6-070 | Do not filter, rank, hide, select, or declare Rig compatibility from completed Reel Setup context without separately approved recommendation behavior. | VERIFY ONLY / GUARDRAIL | Rig Guide search/browse/recommendation boundaries, exact files locked at CP8 | Result-set/ranking/auto-selection regression | OPEN |
| KG-CP6-071 | Preserve completed line-system context as available input for later contextual Rig/Leader guidance; do not implement generic Leader decisions at Rig landing. | STRUCTURAL / CONTENT VERIFY | Rig/relationship/recommendation owners as locked at CP8/related audits | Cross-Guide ownership + no-generic-Leader review | OPEN |
| KG-CP6-072 | Make Ready Previous return to final Spool state and remove obsolete Leader back-navigation. | BUILD REQUIRED / CP7 STRUCTURAL VERIFY | Reel Setup previous-step/router owners, exact files locked at CP8 | Previous-route + dead-state inventory | OPEN |
| KG-CP6-073 | Validate Ready completion and Rig handoff across Mono, Fluoro, Braid + Mono Backing, and manufacturer-supported Direct Braid paths. | BUILD TEST REQUIRED | Reel Setup/Rig handoff owners, exact files locked at CP8 | Four-path completion/handoff browser matrix | OPEN |


# KG Audit — CP7 — JavaScript / Data Structural Audit


**Status:** IN PROGRESS — CP7.1-CP7.3 CLOSED / APPROVED / REFINEMENT ALLOWED


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
| KG-CP7-001 | Create explicit Knots + nested Get Your Reel Ready ownership boundaries in `script.js`; keep unrelated Guide sections untouched. | BUILD REQUIRED | `script.js`; exact implementation range locked at CP8 | Source-boundary inventory + regression review | OPEN |
| KG-CP7-002 | Keep route registry, renderer registry, `showView()`, and generic detail-navigation infrastructure in clearly marked shared ownership. | VERIFY ONLY | `script.js` shared app boundary | Shared-vs-Guide ownership review | OPEN |
| KG-CP7-003 | Move Knot/Reel-specific runtime state from shared runtime state into the Knots boundary. | BUILD REQUIRED | `script.js` | State-owner inventory | OPEN |
| KG-CP7-004 | Own cross-Guide handoff helpers by the originating Guide; relocate Knot-originated Rig handoff behavior accordingly. | BUILD REQUIRED / ARCHITECTURE RULE | `script.js` + `ARCHITECTURE.md` | Origin/destination handoff inventory | OPEN |
| KG-CP7-005 | Separate Reel Setup internal screen identity from derived five-phase progress state. Reference/help surfaces must not become workflow-state IDs. | BUILD REQUIRED | Reel Setup controller/state + `data/reel-guidance.js` as applicable | Screen-to-phase matrix + reference-state audit | OPEN |
| KG-CP7-006 | Remove obsolete CP6 Reel/Line/Equipment/Leader states, routes, prerequisites, and stale navigation; add confirmed Line Weight state. | BUILD REQUIRED | Reel Setup state/router/controller + guidance owners; exact file set at CP8 | Dead-state inventory + workflow regression | OPEN |
| KG-CP7-007 | Make Backing state Braid-only; Mono/Fluoro direct-spool behavior is derived and stores no fake backing choice. | BUILD REQUIRED | Reel Setup state/router/status owners | Line Type x Backing state matrix | OPEN |
| KG-CP7-008 | Separate fresh launch, Restart Setup, and Exit to Knots semantics so Restart does not destroy legitimate external origin context. | BUILD REQUIRED | Reel Setup entry/reset/navigation owners | Launch/restart/exit context matrix | OPEN |
| KG-CP7-009 | Add Reel-specific capture/restore for Knot excursions, including physical Spool point, origin action, applicable scroll, and focus. | BUILD REQUIRED / BUILD TEST REQUIRED | Reel Setup navigation + Knot Detail return owners | Keyboard/touch/state/scroll/focus round-trip | OPEN |
| KG-CP7-010 | Store completed Reel Setup context separately from live workflow state and preserve only the CP6.6-approved transient fields. | BUILD REQUIRED | shared runtime handoff + Reel Setup completion owners | Capture/reset/persistence schema matrix | OPEN |
| KG-CP7-011 | Keep CP7 implementation targeted; do not rewrite/split the whole shared JS file without a separately approved architecture gate. | VERIFY ONLY / GUARDRAIL | CP8 implementation scope | Changed-range/file-scope review | OPEN |


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
| KG-CP7-014 | Remove the `renderKnotInstructionDetail()` monkey patch and replace it with an explicit Knot instructional-media integration point. | BUILD REQUIRED / ARCHITECTURE RULE | `view-renderer.js`, `knot-media-renderer.js`, `ARCHITECTURE.md` | Load-order independence + Knot Detail renderer regression | OPEN |
| KG-CP7-015 | Keep Knot instructional media structurally inside **HOW TO TIE IT** while leaving exact viewer/static/external/hybrid ordering to CP9 build testing. | BUILD REQUIRED / BUILD TEST REQUIRED | Knot Detail + media renderer/CSS owners | Teaching-flow browser matrix across breakpoints | OPEN |
| KG-CP7-016 | Broaden `knot-media-renderer.js` to the dedicated instructional-media presentation owner and remove stale Package 4 labeling without moving canonical facts into the renderer. | BUILD REQUIRED | `knot-media-renderer.js` | Header/owner inventory + data-ownership check | OPEN |
| KG-CP7-017 | Preserve the existing verified external instructional baseline until CP5 prototype evidence supports an explicitly approved replacement/refinement. | VERIFY ONLY | Knot media renderer + canonical Media mapping | All-10-Knot instructional baseline regression | OPEN |
| KG-CP7-018 | Keep canonical Knot instructions in `data/knots.js` and Media records/provenance in `data/media.js`; renderer owns presentation only. | VERIFY ONLY / GUARDRAIL | data + renderer ownership | Source/data ownership inventory | OPEN |
| KG-CP7-019 | Keep CP7.2 targeted; do not expand this boundary cleanup into unrelated Rig/Regulations rendering work. | VERIFY ONLY / GUARDRAIL | CP8 implementation scope | Changed-range/file-scope review | OPEN |


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
| KG-CP7-020 | Move `CORE_KNOT_IDS` from canonical Knot data to Knots Guide guidance without changing the approved four-Knot membership/order. | BUILD REQUIRED | `data/knots.js`, `data/knot-guidance.js`, direct Core consumers | Core membership/order regression + source ownership review | OPEN |
| KG-CP7-021 | Remove Search-only `keywords[]` from canonical Knot records and place maintained search intent/vocabulary in Guide guidance. | BUILD REQUIRED | `data/knots.js`, `data/knot-guidance.js`, `search.js` direct seam | Query regression suite + duplicate vocabulary audit | OPEN |
| KG-CP7-022 | Separate practical task definitions, visible landing tasks, and search-intent vocabulary into distinct guidance concepts. | BUILD REQUIRED | `data/knot-guidance.js`, direct consumers | Landing/task/detail/search matrix | OPEN |
| KG-CP7-023 | Preserve `Attach Line to a Reel` as practical/search/detail context while preventing it from returning as a peer landing task. | BUILD REQUIRED / VERIFY | `data/knot-guidance.js`, Knots landing/detail controllers | Landing hierarchy + detail handoff + reel/spool Search review | OPEN |
| KG-CP7-024 | Add/retain **Learn Core Knots** as the visible learning task and derive membership from the single Core registry. | BUILD REQUIRED | `data/knot-guidance.js`, Knots landing/browse controller | Core task → Core collection navigation | OPEN |
| KG-CP7-025 | Preserve Arbor Knot + Uni Knot reel/spool Search discovery after task/search data separation. | VERIFY ONLY / REGRESSION GUARD | `data/knot-guidance.js`, `search.js` | Deterministic reel/spool query suite | OPEN |
| KG-CP7-026 | Move `KNOT_COLLECTIONS` out of `script.js` into Guide guidance and remove the superseded active V1 Advanced placeholder configuration. | BUILD REQUIRED | `script.js`, `data/knot-guidance.js` | Collection inventory + landing/browse regression | OPEN |
| KG-CP7-027 | Keep Search normalization/scoring/ranking algorithms in `search.js`; data migration must not alter approved deterministic relevance semantics. | VERIFY ONLY / GUARDRAIL | `search.js` | Search algorithm diff + query suite | OPEN |
| KG-CP7-028 | Keep stable per-Knot metadata such as difficulty on canonical Knot records rather than over-normalizing the schema. | VERIFY ONLY / GUARDRAIL | `data/knots.js` | Canonical schema inventory | OPEN |
| KG-CP7-029 | Keep CP7.3 implementation targeted to Knots-owned data and direct consumers; do not broaden into unrelated Guide/data refactors. | VERIFY ONLY / GUARDRAIL | CP8 implementation scope | Changed-file/range review | OPEN |


### CP7.3 Close


CP7.3 is **CLOSED / APPROVED / refinement allowed**. No production JavaScript/data was changed by this approval gate. **Next: CP7.4 — `search.js` ownership + Knot Search structure.**


# Current Exact Resume


**KG Audit — CP7 is IN PROGRESS; CP7.1 through CP7.3 are CLOSED / APPROVED / refinement allowed.** CP7.1 locks targeted Knots/Reel controller/state ownership. CP7.2 locks truthful renderer/media boundaries. CP7.3 locks canonical Knot-vs-Guide ownership: Core membership, collections, landing-task curation, and search intent belong to `data/knot-guidance.js`; canonical per-Knot facts remain in `data/knots.js`; search algorithms remain in `search.js`. **Exact next work: KG Audit — CP7.4 — `search.js` ownership + Knot Search structure**, including Guide-owned versus genuinely shared Search helpers, deterministic ranking boundaries, and the post-CP7.3 data-consumer seam. Continue read-only structural discovery; do not implement production changes. CP8 remains the exact source-scope lock and CP9 the build/browser validation gate.