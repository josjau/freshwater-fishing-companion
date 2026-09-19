# Freshwater Fishing Companion — Decisions: Product and Domain Direction








**Document:** decisions/product.md  
**Document Status:** Approved  
**Role:** Canonical durable decision bodies for this ownership domain  
**Migration Baseline:** `af3bffb9995d56f8b9e47236bbadfa481d88cc34`  
**Last Updated:** 2026-09-18








# Purpose








This file owns the full decision bodies listed below. Decision IDs are permanent and remain stable across the documentation decomposition. `../DECISIONS.md` is the compact canonical index.








# D023 – Commercial Product Recommendation Tiers








Commercial product guidance is beginner-first and deliberately bounded. FCC uses specific manufacturer/product recommendations selectively where they materially reduce purchasing confusion; it does not attempt to model or rank every product available. Purchasing guidance should be evaluated against the approved Rig/Tackle system so it helps a new angler build a quality, versatile tackle box progressively rather than encouraging exhaustive collection. Version 1 purchasing guidance is selective rather than universal and uses the lowest commercial specificity that materially helps a beginner make a sound purchase. Categories that do not justify exact tiered products may still receive practical specification guidance plus reputable manufacturer/brand guidance; lack of tiered products does not mean lack of commercial purchasing help. Exact Version 1 category-by-category breadth and which categories cross the threshold into specific tiered products remain for the active V1 Completion Audit 2B scope discussion.








When FCC names specific commercial products, recommendations use four positive tiers:








1. **Best of the Best** — strongest overall choice when cost is not the primary constraint.
2. **Best Value** — strongest balance of quality, performance, durability, usability, and price.
3. **Best Budget** — lowest-cost option FCC still considers a solid purchase for a new angler.
4. **Good Alternative** — a dependable option that may trail the preferred tiers on value, refinement, versatility, features, or another material dimension but still provides a good chance of successful use.








Every product shown in a recommendation tier must remain something FCC can confidently recommend to a new angler. The tiers therefore distinguish among good choices; they are not a scale from good to bad. A user who cannot afford the Best of the Best option should still be able to choose a lower positive tier without being steered toward inadequate equipment.








**Avoid is not a recommendation tier.** Products or product designs with strong evidence of recurring material defects, meaningful failure modes, safety concerns, or materially unreliable performance are excluded from the positive recommendation tiers and may be identified separately when doing so materially helps the user. Negative sentiment, isolated complaints, ordinary preference differences, mediocre value, or merely ranking below stronger options are not enough to justify an Avoid disposition.








This 2026-09-16 V1 Completion Audit 2B refinement supersedes the former five-tier presentation that treated `Avoid` as the fifth recommendation tier and renamed `Best Bang for the Buck` / `Best of the Rest` to the clearer beginner-facing labels `Best Value` / `Good Alternative`. It does not yet approve the exact Version 1 commercial recommendation categories, number of products per tier, price-maintenance policy, retailer integration, or a comprehensive ProductDefinition catalog. The 2B.2 coverage refinement also establishes a graduated purchasing-guidance model: simple/commodity components may receive specification guidance; components where manufacturer quality or trust materially helps selection may receive specification plus reputable-brand guidance; and categories where exact product differences materially aid the purchase decision may receive the approved tiered specific-product recommendations. Reputable-brand guidance must be researched/evidence-backed when authored and does not require maintaining four specific products merely to fill tiers.
### 2026-09-17 — Rod/Reel Beginner Equipment Path — APPROVED / revision allowed








Rod and Reel purchasing guidance uses a specification-first, curated-example model rather than requiring permanent four-tier exact-product rankings. FCC first helps the angler choose the appropriate equipment system and functional specification, then provides researched reputable brands and a small curated set of proven current commercial examples where useful. Exact commercial examples may be characterized by price/value role without requiring every Rod/Reel class to populate Best of the Best / Best Value / Best Budget / Good Alternative. This reduces maintenance/staleness risk while still giving a beginner concrete shopping help.








For beginner equipment-system choice, FCC may recommend a default path rather than presenting all systems as equally suitable. **Spinning is the default general-purpose beginner recommendation** because it provides a strong balance of versatility and learning simplicity. **Spincast is a supported simplicity-first alternative**, particularly where push-button operation and minimal learning curve are priorities. **Baitcasting is fully supported when its strengths fit the angler's goals**, but FCC must clearly explain the additional setup/casting learning curve and backlash risk. FCC must not portray Spincast -> Spinning -> Baitcasting as a mandatory skill progression or imply that experienced anglers should outgrow spinning gear.








The user remains free to choose any appropriate path. Choosing Spincast or Baitcasting must not lock the user out of purchasing guidance; FCC changes the applicable Rod/Reel specification, education, and curated examples for that chosen system. Version 1 support depth may be greatest for the default Spinning path, with appropriate Baitcasting guidance and a smaller Spincast curated set, provided all three remain genuinely supported. Detailed baitcaster brake/spool-tension/backlash instruction remains PARK-002 and is not pulled into this approval.








This decision is **approved with revisions allowed**: later implementation, research, product-availability, or UX findings may refine labels, example counts, or emphasis without changing the beginner-first default-path principle, user choice, or specification-first commercial model. Exact current brands/models are not approved by this checkpoint and must be researched/evidence-backed when authored.








### 2026-09-17 — Fishing Line Threshold + Equipment-Selection Workflow Boundary — APPROVED / revision allowed








Fishing Line uses **Specification + Reputable Brands** rather than routine exact-spool recommendations or permanent four-tier product rankings. FCC should first determine the line role, type, and appropriate strength/specification, then provide a researched evidence-backed set of reputable line manufacturers. Because reputable manufacturers commonly span monofilament, fluorocarbon, and braid, brand guidance may be shared across line types where current evidence supports that treatment. The user remains free to choose among suitable products from those manufacturers. Exact line spools/SKUs are not a normal Version 1 recommendation requirement and should be introduced only when a specific product distinction materially helps the decision.








Rod/Reel/Line purchasing guidance and **Attach Line to Reel** serve different user jobs and must not duplicate one another. The equipment-selection decision path answers **what compatible Rod + Reel + Line system/specification the angler should choose**. Tackle Reference supplies reusable educational knowledge about the equipment types, specifications, tradeoffs, and terminology. **Attach Line to Reel** remains a downstream setup/execution workflow for an angler who already has or has selected the Reel and Line; Knot knowledge continues to own the knot itself. My Tackle records what the user actually owns. The selection experience should hand resolved choices into existing setup/reference flows rather than restating their instructions.








A reusable **Choose a Setup / Help Me Choose a Setup** decision experience is therefore the working Version 1 direction for resolving compatible Rod + Reel + Line specifications without creating a second setup tutorial. Its exact navigation/home placement is **not approved by this checkpoint** and remains the immediate next 2B.2 discussion: evaluate Tackle root, a broader beginner/Start Here surface, or multiple entry points into one shared workflow.
















### 2026-09-17 — Start Here + Choose a Setup Placement and Beginner Wording — APPROVED / revision allowed








**Choose a Setup** has its canonical home within **Tackle**, but the same shared workflow may be surfaced from other appropriate entry points. Version 1 adds a beginner-facing **Start Here** Dashboard card as an orchestration/navigation surface rather than a new knowledge-owning domain. Start Here may route into shared Tackle, Rig, Lure/Bait, purchasing-guidance, and User Knowledge capabilities without duplicating their authoritative content or workflow logic.








The approved Dashboard card wording is:








> **Start Here**  
> New to fishing? Learn how to build a compatible fishing setup for the way you want to fish.  
> Get help choosing your first **rod, reel, and line**, then build a **starter tackle box**.








This wording intentionally introduces the term **fishing setup** while immediately grounding it in beginner-understandable equipment language rather than assuming the user already knows the term. Within Start Here, the beginner path is conceptually split into at least two distinct jobs: **Choose a Fishing Setup** for Rod + Reel + Line selection and **Build a Starter Tackle Box** for a small, versatile set of terminal tackle, confidence baits/lures, and basic tools. The exact labels, visual layout, and detailed Starter Tackle Box scope remain subject to the continuing 2B.2 review.








Choose a Setup remains a decision/purchasing workflow, not a duplicate setup tutorial. Its resolved Rod/Reel/Line choices may hand off to Tackle Reference, My Tackle, Attach Line to Reel, and other appropriate downstream capabilities. Start Here may expose the same shared Choose a Setup workflow without creating a second implementation.








**Persistence/authentication carry-forward remains OPEN.** The project has not yet decided whether a selected/recommended fishing setup, Start Here progress, or Starter Tackle Box progress persists only within a session, locally across sessions, or as synchronized User Knowledge. Any durable implementation must preserve the existing ownership boundary: a recommendation or saved decision must not silently become My Tackle ownership. If cross-session/device beginner progress is approved, authentication/profile status must be treated as a site-wide capability rather than behavior owned only by an individual section. Exact persistence/authentication UX is not settled by this checkpoint.








### 2026-09-17 — Hooks + Terminal Hardware Purchasing-Guidance Threshold — APPROVED / revision allowed








Version 1 classifies **Fishing Hooks**, load-bearing/connective terminal hardware (**Barrel Swivels, Three-Way Swivels, Snaps, Snap Swivels, and Split Rings**), and **Jigheads** as **Specification + Reputable Brands**. FCC should resolve the functional specification first and use researched/evidence-backed manufacturer guidance to help the beginner buy a dependable version of that specification. These categories do not receive permanent Tiered Specific Products treatment by default.








For Hooks, purchasing guidance is specification-first around the applicable Hook style, Hook size, and any decision-relevant secondary characteristic already owned by the Hook/Tackle system. Exact hook SKUs should not be multiplied across every style/size combination merely to populate commercial tiers. Manufacturer guidance is still useful because hook sharpness, strength, consistency, finish, and construction quality can materially affect successful use.








For Connectors, FCC should first resolve the correct hardware type plus applicable size/strength specification. Reputable-brand guidance is appropriate because closure reliability, deformation resistance, swivel performance, and overall construction quality can matter materially, while permanent four-product rankings for each connector type are not justified.








**Jigheads** also use **Specification + Reputable Brands** rather than mandatory permanent four-tier rankings. FCC should resolve the applicable Jighead type, mass, embedded Hook size, and relevant secondary characteristics first. A small curated exact commercial example may be shown when a product-specific distinction such as geometry, keeper design, weed guard, hook construction, or another meaningful feature materially helps the decision, but Version 1 does not maintain four permanent product tiers for every Jighead style/specification combination.








Version 1 classifies simpler passive/small terminal components — **Bobber Stops, Weight Pegs, Beads, Soft-Plastic Retainers / Wacky O-Rings or Bands, and Sinker Slides** — as **Specification Guidance** by default. FCC should explain the applicable type, fit, size, or use requirement where relevant without maintaining brand lists merely for completeness. A later research or implementation finding may elevate a category if manufacturer quality proves materially important.








**No category in this Hooks + terminal hardware checkpoint requires Tiered Specific Products by default.** This disposition is **approved with revision allowed**; later evidence, product-quality findings, or implementation/UX results may refine a category without changing the beginner-first rule that commercial specificity should be no greater than necessary to support a sound purchase.
















### 2026-09-17 — Weights + Floats + Leader Material Purchasing-Guidance Threshold — APPROVED / revision allowed








Version 1 classifies ordinary standalone **Weights / sinkers** as **Specification Guidance**. FCC should resolve the applicable weight style, mass, material, and any decision-relevant size/form characteristic first. Ordinary sinkers do not receive maintained reputable-brand lists or permanent exact-product tiers merely for completeness because the functional specification normally provides the material beginner purchasing help.








Version 1 classifies **Floats** as **Specification + Reputable Brands**. FCC should first resolve operating mode (for example fixed versus slip), applicable form, size/capacity, loading mode, and other decision-relevant functional characteristics. Reputable-manufacturer guidance is useful because visibility, durability, casting behavior, balance, sensitivity, attachment hardware, and line-passage/sliding performance can materially affect successful beginner use. Permanent four-product rankings are not required by default.








Version 1 classifies **Leader Material** as **Specification + Reputable Brands**. FCC should resolve material/type, breaking strength, and diameter where relevant, then provide researched/evidence-backed reputable manufacturers. Where evidence supports it, manufacturer guidance may be reused with the approved Fishing Line brand knowledge rather than maintaining unrelated duplicate brand lists. Routine exact leader-spool/SKU rankings are not required.








**Bottom Bouncer** is treated separately from ordinary standalone Weight purchasing guidance and uses **Specification + Reputable Brands**. FCC should resolve the appropriate mass/specification first, then may provide reputable-manufacturer guidance because wire construction, attachment hardware, balance, and overall assembly quality can materially affect performance and durability.








**No category in this Weights + Floats + Leader Material checkpoint requires Tiered Specific Products by default.** This disposition is **approved with revision allowed**; later evidence, product-quality findings, or implementation/UX results may refine a category without changing the beginner-first rule that FCC uses the lowest commercial specificity that materially improves the purchase decision.
















### 2026-09-17 — Lure/Bait Purchasing-Guidance Threshold — APPROVED / revision allowed; Recommendation handoff discussion open








Version 1 classifies **artificial lures and soft plastics** as **Tiered Specific Products** where commercial product design materially affects beginner success. This treatment applies to the artificial side of the approved Lure/Bait scope, including soft-plastic identities and complete artificial lure identities. **Prepared Bait** also uses **Tiered Specific Products** because the commercial formulation itself is a material part of the fishing product. FCC may use the approved positive commercial tiers — Best of the Best, Best Value, Best Budget, and Good Alternative — but must not populate a tier merely to fill a table; every named product must remain something FCC can confidently recommend.








Version 1 classifies **ordinary natural bait** as **Specification Guidance** rather than national product-tier or brand-list maintenance. For natural bait such as Minnow, Nightcrawler, Cricket, Cut Bait, Crayfish, Leech, Insect Larva, and Fish Eggs / Roe, FCC should focus on the fishing-relevant form, size/state, handling, presentation, and other applicable specification guidance. **Specification + Reputable Brands** remains available as a selective later treatment if evidence demonstrates that it materially improves a particular Lure/Bait purchase, but it is not the default for the domain.








The associated **Fishing Recommendation -> commercial purchasing-guidance handoff remains OPEN for further discussion**. This approval does not yet lock the exact semantic/UI relationship between contextual What Should I Throw Recommendation Decision Knowledge and commercial product tiers, nor does it lock whether tiered products are scoped directly to a canonical Lure/Bait identity, to a resolved fishing specification/application profile, or through another bounded purchasing context. Existing D069 ownership remains unchanged while this boundary is discussed: contextual selection/ranking/rationale and exact context-dependent size, weight, color/pattern, and presentation belong to Recommendation Decision Knowledge; commercial brand/model/SKU identity does not become canonical Lure/Bait Reference Knowledge. No production implementation is authorized by this checkpoint.








### 2026-09-17 — Starter Tackle Box Direct-Tie Confidence-Lure Scope — APPROVED / revision allowed








The Version 1 **Build a Starter Tackle Box** path must support all six Core Rigs, but Core-Rig support does not require the beginner box to expose every canonical or pending configuration within each Core Rig. For **Direct-Tie Lure Setup**, the base Starter Tackle Box uses two required confidence-lure families: **Inline Spinner** and **Crankbait**. The remaining Direct-Tie lure identities remain fully available to Reference Knowledge, What Should I Throw / Recommendation, My Tackle, and later purchasing guidance; omission from the base starter recipe is not a statement that they are weak or unsupported fishing choices.








Each required Starter Box lure family may use **one to three curated functional variants**, with **two variants as the normal default**. A second or third variant is justified only when it materially expands practical beginner capability such as useful size class, depth/running class, or another functionally distinct fishing job. **Color/pattern alternatives do not independently count as functional variants**; color/pattern remains guidance within a functional variant. This bounded rule prevents the Starter Box from becoming an exhaustive lure matrix.








The approved initial Direct-Tie starter recipe is:








- **Inline Spinner** — small/light variant plus medium/general-purpose variant.
- **Crankbait** — small/shallow variant plus medium/general-purpose shallow-to-medium variant.








Exact weights, body sizes, running depths, starter color/pattern guidance, and commercial products remain later specification/purchasing authoring work and are not locked by this checkpoint. A third heavier/deeper functional variant for either family is not part of the default recipe and may be added only if the complete Core-Rig Starter Box coverage review demonstrates a material capability gap.








**Spoon remains fully supported but is not required in the base Starter Tackle Box.** It is an approved strong optional expansion/confidence lure and remains available to What Should I Throw when context makes it appropriate. The base box therefore teaches two Direct-Tie lure families while providing multiple functional situations through curated variants rather than increasing the number of lure families by default.








This checkpoint does **not** resolve the still-open Fishing Recommendation -> commercial purchasing-guidance handoff, does not authorize a comprehensive ProductDefinition/SKU catalog, and does not authorize production migration.








### 2026-09-17 — Starter Tackle Box Budget + Capability Planning Layer — APPROVED / revision allowed








The Version 1 **Starter Tackle Box itself remains price-independent**: it defines the complete beginner target needed to support the approved Core-Rig starter system. **Budget is an optional purchase-planning constraint**, not a semantic input that changes which items belong in the complete Starter Box. Budget determines acquisition priority and how much of the already-approved target can reasonably be purchased now. The normal beginner path must not require a budget answer before FCC can explain or build the complete Starter Box.








FCC may provide **broad, researched total-investment planning ranges** for beginner system completion or meaningful acquisition stages, but Version 1 does not require maintaining or displaying individual item prices as canonical purchasing guidance. Exact price ranges must be derived only after the complete Starter Box package and applicable equipment system are defined and then checked against current market evidence. The discussion example of **$200–$300 is not approved or locked** by this checkpoint. Retailer-specific price tracking, live pricing, and automatic shopping integration remain outside this approval.








Budget guidance should explain **what fishing capability the investment unlocks**, not merely how many items are purchased. Appropriate capability language may include Core-Rig coverage, the ordinary Fish/use cases supported by those Rigs, and the practical equipment envelope of the selected Rod + Reel + Line system. FCC must distinguish **Rig capability** (the tackle box can assemble an applicable fishing method) from **equipment capability** (the selected Rod/Reel/Line system is appropriate for the expected lure/weight/fish range). A general-purpose beginner system must not imply that one equipment setup is equally suitable for the entire size/power range from small panfish through very large catfish, large striped bass, or other heavy/specialized applications.








A later budget-aware UX may prioritize foundation purchases first, show which Core capabilities are currently unlocked versus still missing, and use My Tackle ownership to avoid recommending duplicate purchases. Those mechanics remain implementation/UX work and must preserve the existing rule that recommendations or saved plans do not silently create My Tackle ownership.








This checkpoint does not approve exact budget bands, exact Starter Box specifications, exact commercial products, individual prices, retailer integration, or production implementation. Exact investment ranges are authored only after the remaining Core-Rig Starter Box contents are settled and the resulting complete system can be market-validated.
















### 2026-09-17 — Starter Tackle Box Functional Package Architecture — APPROVED / revision allowed








The Version 1 Starter Tackle Box is a **shared Core-Rig component system**, not six independent Rig kits. It must support practical beginner use of all six Core Rigs while collapsing shared hardware wherever the same canonical component can truthfully serve multiple Rigs. Starter Box completeness is therefore judged by a small functional range of reusable components rather than by duplicating one shopping list per Rig.








The approved base package separates **durable tackle-box inventory** from **trip-consumable natural bait**. Fixed Bobber, Slip Bobber, and Basic Bottom remain bait-ready in the Starter Box, but ordinary live/natural bait is acquired as needed for the intended trip and is not required to be physically present for the durable Starter Box itself to count as complete.








For the shared **Fixed Bobber + Slip Bobber + Basic Bottom** cluster, the approved working minimum is: one to two useful Fixed Bobber sizes; one to two useful Slip Float sizes; one working supply of Bobber Stops and Stop Beads; a small Split Shot assortment/range; two to three functional general bait-hook sizes; two useful Sliding Sinker weight classes; one general working Barrel Swivel size/strength class; and one general-purpose Leader Material spool/specification. Current optional Rig components such as the Basic Bottom bead remain optional rather than mandatory Starter Box purchases. Exact sizes, masses, capacities, strengths, counts, materials, brands, and products remain later specification/purchasing authoring.








For **Jighead + Soft Plastic**, the approved Starter Box direction is a small functional range rather than one token build: two Jighead classes — **small/light** and **medium/general-purpose** — plus approximately two complementary soft-plastic presentation slots — a **small grub/minnow-type** presentation and a **medium baitfish/general-purpose** presentation. This approval locks the functional jobs, not the final canonical Lure/Bait identities, dimensions, colors, brands, or products.








For **Texas Rig**, the approved Starter Box direction is: Bullet Weights covering **light/general** and **medium/heavier-cover** jobs; **one to two broadly useful Worm Hook sizes**; and at least **one versatile confidence soft-plastic family**, with a second family justified only if it materially expands beginner capability. Weight Peg remains optional expansion tackle rather than a mandatory base purchase. Stick Worm remains a strong candidate for the first confidence family, but this checkpoint does not lock the final soft-plastic identity or commercial product.








Starter Box validation must distinguish **technically able to construct a Rig** from **having enough functional range for that Rig to be genuinely useful**. A single hook, jighead, weight, or lure may satisfy a build mechanically but does not by itself prove the Starter Box delivers the intended beginner capability. Exact specifications should therefore be authored as the smallest practical range that materially expands useful fishing situations without turning the Starter Box into a catalog.








This checkpoint preserves the previously approved Direct-Tie package of Inline Spinner + Crankbait with normally two functional variants each, the optional-expansion status of Spoon, and the price-independent Budget + Capability Planning layer. It does not approve exact tackle specifications, exact commercial products, exact budget bands, individual prices, retailer integration, or production implementation.
















### 2026-09-17 — Choose a Setup Starting-State + Product-Family Guidance Architecture — APPROVED / revision allowed








Version 1 **Choose a Setup** must support both a beginner starting from scratch and an angler who already owns part of the fishing setup. The default general-purpose beginner path remains **Spinning**; Spincast remains a supported simplicity-first alternative and Baitcasting remains fully supported when deliberately chosen, but those alternate systems do not need to complicate the first-pass Spinning design.








The workflow must be able to resolve at least these practical starting states: **no Rod/Reel owned; Rod already owned; Reel already owned; Rod + Reel already owned**. For a user starting with **no Rod/Reel owned**, Choose a Setup supports two purchasing formats inside the same approved Spinning setup path: **a researched matched Rod + Reel Combo** or **Rod + Reel selected separately**. A Combo is not a different fishing setup type; it is a simpler purchase format for the same resolved equipment job. Existing Line or other applicable equipment may also be incorporated when known without requiring a separate top-level path for every possession combination. Existing equipment becomes an input/anchor to compatibility resolution rather than being ignored or forcing the user to rebuild the whole system. When an owned component is usable but not the preferred pairing, FCC should explain that distinction and allow the user to retain it or replace it rather than silently rejecting it or pretending it is ideal. My Tackle remains the ownership authority; a setup recommendation must not silently create ownership.








**Budget remains optional.** A user may request compatible guidance without supplying any budget. When a budget is supplied, it applies to the **missing purchases** needed to complete the selected fishing system rather than charging already-owned equipment against the available purchase amount. For a user starting from scratch, whole-system planning may balance Rod + Reel + Line and the minimum useful Starter Tackle allocation so an expensive equipment choice does not leave an unusably small tackle remainder. This refines, but does not replace, the approved rule that the complete Starter Tackle Box remains price-independent and that budget controls acquisition priority/completeness rather than semantic box membership.








Rod/Reel commercial guidance may use the approved positive recommendation tiers at the **product family / series level** when that level materially reduces beginner purchasing confusion. FCC does **not** classify an entire manufacturer/brand as Best of the Best, Best Value, Best Budget, or Good Alternative merely because some products from that brand are strong. The durable functional recommendation remains specification-first. A tiered family/series recommendation represents a researched commercial family capable of satisfying the resolved setup need; the setup specification then selects the appropriate **variant within that family** — for example the needed Rod length/power/action or Reel size/capacity. Exact model/SKU proliferation is not required merely to represent every size variant.








Matched Rod + Reel **Combos are researched and qualified independently as exact complete commercial systems** rather than inheriting the status of similarly named standalone Rod or Reel families. The included Rod must satisfy the approved Rod requirements and the included Reel must independently satisfy the approved Reel/Line compatibility requirements. FCC must not assume that a combo uses the same blank, Reel, internal components, capacity, or specifications as a similarly named standalone product. Factory-pre-spooled or bundled Line is evaluated separately against the approved Line specification; FCC may recommend retaining it, replacing it, or disregarding it without changing whether the Rod + Reel pairing itself is a useful combo purchase. Combo research therefore runs as a **parallel commercial track** to standalone Rod and Reel research for users starting from scratch.








Where commercial links are provided, the preferred durable destination is the **manufacturer's current product-family/series page** when that page accurately covers the recommended family and variants. Retailer-specific links may be added later when they materially help, but retailer links, live pricing, and automatic shopping integration are not required by this architecture. Family-page linking does not authorize a comprehensive ProductDefinition/SKU catalog.








This checkpoint does not approve exact Spinning Rod/Reel/Line specifications, exact product families, exact commercial tiers, exact family variants, prices, budget bands, or retailer integrations. The next specification block begins by defining the default general-purpose beginner **Spinning** setup's job/capability envelope, then Rod specification, Reel specification, Line specification, and the resulting compatibility envelope before current-market product-family research and final Starter Tackle specification/cost validation.
















### 2026-09-18 — Beginner Spinning Setup Job + Capability Envelope — APPROVED / revision allowed








The Version 1 default general-purpose beginner **Spinning** setup is FCC's **first-system / one-system freshwater default**. It prioritizes learnability, forgiveness, versatility, manageable everyday use, and long-term usefulness rather than specialty optimization or a short-lived entry-level system that a beginner is expected to replace immediately.








The default system must support useful beginner/general-purpose implementations of **all six Core Rigs** — Basic Bottom Rig, Direct-Tie Lure Setup, Fixed Bobber Rig, Jighead + Soft Plastic, Slip Bobber Rig, and Texas Rig — and the corresponding minimum Starter Tackle package. The equipment envelope therefore constrains later Starter Tackle exact sizes/weights/variants rather than allowing the tackle package to require capabilities outside the default setup.








Its working presentation envelope is **light-to-moderate general-purpose freshwater tackle**: bait-and-float presentations, basic bottom fishing, smaller/general-purpose jigheads, common soft plastics, small/general-purpose hard lures, inline spinners, and ordinary beginner Texas Rig configurations. It should remain useful from bank, dock, kayak/small boat, and conventional boat across normal pond, lake, reservoir, river, and creek use when the selected presentation remains inside the setup envelope.








Its fish-control envelope covers ordinary **small-to-medium freshwater fishing plus reasonable incidental larger-fish capability when fish are played appropriately**. Incidental ability to land a larger fish does not make the setup the correct tool for dedicated heavy-fish applications. The default should work in open water, sparse vegetation, ordinary shoreline cover, and moderate structure/cover when approached appropriately. It is not designed around heavy vegetation extraction, punching, heavy flipping, very heavy timber/brush extraction, or other applications that materially require heavier power tackle.








Explicit non-goals include true ultralight specialization, presentations materially below the practical general-purpose weight floor, very heavy sinkers/rigs or oversized lures, dedicated large-fish/heavy-duty applications, specialized trolling, fly fishing, and other specialty techniques whose requirements would distort the general-purpose beginner system.








Existing equipment is evaluated against this capability envelope rather than automatically replaced. FCC may distinguish **Preferred fit**, **Usable fit**, and **Not suitable for this job**, explain the material tradeoff, and preserve the user's retain/replace choice. My Tackle remains the ownership authority.








This checkpoint deliberately does **not** approve exact Rod length/power/action/lure rating/line rating, Reel size/capacity, Line type/strength, exact presentation-weight boundaries, product families/tiers/variants, prices, or budget bands. Those values are resolved in the following specification checkpoints before current-market product-family research. **Exact next checkpoint: Rod specification.**








### 2026-09-18 — Beginner Spinning Rod Specification — APPROVED / revision allowed; baseline challenge revision incorporated








The Version 1 default general-purpose beginner Spinning setup uses a **Spinning Rod centered on 7'0" and Medium power**. **Fast and Moderate-Fast are co-preferred general-purpose actions** for the complete six-Core-Rig job: Fast may lean toward single-hook/contact sensitivity and control, while Moderate-Fast may lean toward moving/treble-hook forgiveness and casting versatility. Neither action is categorically superior for the whole default system. Approximately **6'6"–7'3"** may remain a **Usable fit** when the remaining Rod characteristics preserve the intended one-system capability envelope. FCC should distinguish **Preferred fit**, **Usable but capability-shifted**, and **Not suitable for this job** rather than rejecting otherwise serviceable owned equipment solely because one nominal specification differs from the preferred center.








**Medium power remains the preferred one-system balance.** Medium-Light may remain usable when the angler accepts reduced upper-end capability, especially for heavier Texas Rig, bottom-rig, or moderate-cover work. Medium-Heavy may remain usable when the angler accepts reduced lower-end capability for smaller/lighter presentations. Light/Ultralight and Heavy-or-above rods ordinarily represent materially different jobs rather than alternate defaults. Because manufacturer Power and Action labels are nominal rather than guaranteed physical equality across brands, FCC evaluates the complete published specification and demonstrated functional envelope rather than treating one label as universal physical equivalence.








The Rod must support the Starter Tackle system's **completed casting loads**, not merely the stamped mass of one lure, sinker, or jighead component. For **Preferred general-purpose qualification**, the Rod's published casting range should contain approximately **1/4–5/8 oz**. Published capability below 1/4 oz—especially **3/16 oz and 1/8 oz**—is valuable **light-range extension** for smaller Inline Spinners, lighter Jighead + Soft Plastic, smaller hard baits, panfish/trout, and similar presentations, but it is not a mandatory Preferred prerequisite. Published capability through approximately **3/4 oz** is valuable **upper headroom** for somewhat heavier general-purpose presentations, but it likewise is not a mandatory Preferred prerequisite. The default system must provide at least one genuinely useful beginner/general-purpose implementation of every Core Rig; it does not need to optimize every lightest or heaviest variant of every Rig.








The Rod's published line rating must include the final general-purpose line strength when the values are directly comparable. The working target remains approximately **6–12 lb or another published range that includes both 8 lb and 10 lb**. Rod construction material, blank-modulus marketing, guide count/material, cork versus EVA, reel-seat design, Rod mass/balance, and similar commercial/engineering details are not core functional requirements for this default. **One-piece versus two-piece is a transport/shopping choice rather than a quality hierarchy** when both variants satisfy the required fishing specification.








This 2026-09-18 baseline challenge **supersedes the earlier hard interpretation that approximately 1/8 oz was required for Preferred qualification and that Fast action was categorically preferred over Moderate-Fast**. The revised baseline preserves the 7' Medium one-system center and 10 lb compatibility while separating the core general-purpose load span from useful light/heavy capability extensions.








Exact commercial Rod families, family tiers, variants, current prices, and budget bands remain open. The earlier preliminary Rod-family dispositions derived from the superseded baseline are invalidated and must be rerun from scratch under this revised specification. **Exact next checkpoint: current-market Rod-family hard screen rerun.**








### 2026-09-18 — Beginner Spinning Reel Architecture — APPROVED / revision allowed; exact line-capacity threshold deferred to Line checkpoint








The Version 1 default general-purpose beginner Spinning setup uses a **Spinning Reel in the mid-size general-purpose freshwater class**, selected by actual functional capacity and suitability with the approved 7' Medium Spinning Rod rather than by a universal manufacturer size number. A roughly **2500-class** Reel is the working shopping/reference center; compact 3000/C3000/3000-C and other family-specific variants may be equally preferred when their actual body/capacity characteristics satisfy the same job. FCC does not normalize nominal Reel Size/Class across manufacturers and does not infer capacity, body equivalence, or suitability from a `2500`, `3000`, or similar label alone.








The Reel must directly support the final Line specification using published/confirmed information that is actually comparable to that Line. The discussion reference of approximately **100–120+ yd of 10 lb monofilament is provisional only** and is **not an approved canonical minimum**; the exact capacity threshold remains open until the Line type/strength system is resolved in the next checkpoint. FCC must not silently transfer monofilament capacity to braid/fluorocarbon, convert diameter to breaking strength, interpolate/extrapolate missing capacity rows, or infer capacity solely from nominal Reel Size/Class.








The default requires ordinary **general-purpose retrieve behavior**, but exact Gear Ratio and Line Retrieve Per Handle Turn are not hard default-selection requirements unless later evidence demonstrates a material functional need. Max Drag, bearing count, exact Reel mass, body/spool dimensions, handle configuration, construction material, and similar engineering/marketing attributes are likewise not normalized hard requirements for this default. Commercial product research may still evaluate real-world characteristics such as smooth/predictable drag, line lay, bail reliability, durability, balance on the approved Rod, handle/play, manufacturer support, warranty, and long-term owner feedback because those can distinguish product quality without becoming canonical functional fields.








Existing Spinning Reels are evaluated as **Preferred fit**, **Usable but capability-shifted**, or **Not suitable for this job** from actual compatibility/capability rather than nominal size alone. A somewhat smaller or larger Reel may remain usable when it supports the selected Line, pairs practically with the Rod, and preserves the six-Core-Rig capability envelope; FCC should explain the material tradeoff rather than force replacement. Wrong Reel type, directly established insufficient capacity, or another demonstrated hard compatibility conflict can make a Reel unsuitable.








Exact commercial Reel families/tiers/variants, final capacity threshold, Line type/strength, current prices, and budget bands remain deferred. **Exact next checkpoint: Line specification, which must resolve the main-line system and then close the exact Reel-capacity requirement.**








### 2026-09-18 — Beginner Spinning Line Specification — LOCKED / approved with revisions allowed








The Version 1 default general-purpose beginner Spinning setup uses **10 lb general-purpose monofilament main line**. Ten-pound mono is the preferred one-system balance because it preserves useful light-to-moderate casting and presentation capability while adding strength and abrasion margin for bass, bottom fishing, moderate cover, catfish within the default equipment envelope, and incidental larger fish. **8 lb monofilament** remains the preferred lighter alternative when maximizing the lower end of the presentation envelope matters more; approximately 6 lb and 12 lb represent lighter- and heavier-capability shifts rather than equivalent defaults. Dedicated heavy-cover extraction, very heavy rigs, and dedicated large-river/heavy-catfish applications remain outside the default setup and may require materially heavier equipment.








The final challenge pass found **no conflict with the approved approximately 7' Medium-power Rod, Fast-or-Moderate-Fast action range, or the six Core Rigs**. Current beginner guidance supports 6–10 lb line on a 7-foot spinning setup across a lure range broader than FCC's revised **approximately 1/4–5/8 oz core Preferred-qualification span**, with lighter 3/16- and 1/8-oz capability treated as useful extension when the selected Rod supports it. FCC therefore treats 10 lb mono as compatible with useful beginner/general-purpose implementations of Basic Bottom Rig, Direct-Tie Lure Setup, Fixed Bobber Rig, Jighead + Soft Plastic, Slip Bobber Rig, and Texas Rig. Core-Rig support means at least one useful general-purpose implementation inside the equipment envelope; it does **not** imply that the default setup covers every condition or specialized form of each Rig. Heavy-cover Texas Rig use and dedicated heavy-catfish use remain examples outside the default envelope.








The preferred monofilament behavior is **general-purpose, supple, low-memory, easy-casting, easy-managing line** suitable for repeated use on a mid-size Spinning Reel. Reliable knot strength, normal durability, and adequate abrasion resistance remain important, but FCC does not optimize the default around maximum abrasion resistance, minimum stretch, or another specialty characteristic when that materially compromises all-around spinning-reel handling. A line may still qualify when it combines strong abrasion resistance with good suppleness and low memory; the selection rule is about the complete behavior, not rejecting an attribute by name. Line memory and line twist remain related but distinct concerns: manageable line reduces avoidable handling problems, while correct spooling and normal spinning-reel technique remain necessary to control twist and loops.








**Monofilament is the preferred beginner default**, not the only supported system. Braid remains a supported alternative when its sensitivity, diameter, durability, or other advantages fit the angler's goals, with an appropriate leader where the application calls for one. Fluorocarbon main line may also be an intentional alternative but is not the default beginner system. User choice remains supported and a compatible owned alternative must not be rejected solely because it differs from the preferred main-line material.








A separate leader is **not required** for the default 10 lb monofilament setup to be complete. Leader use should nevertheless be taught early because it is a useful foundational skill. A lighter leader—**8 lb is an appropriate working example/candidate where the terminal presentation benefits from it**—can provide a lighter terminal section, different visibility/abrasion behavior, or a deliberate weaker break point. A lighter leader does **not** make the 10 lb main line cast or handle as though the Reel were spooled with 8 lb main line. Exact general-purpose Leader Material type/strength remains for the Starter Tackle specification rather than being silently locked here.








Published **line diameter is a secondary validation/commercial-selection characteristic, not a second beginner-facing hard specification**. FCC does not assign one universal diameter to `10 lb mono`, because products with the same nominal breaking strength can differ. During commercial research, FCC should record/evaluate the actual manufacturer's published diameter when available and use it to inform casting/handling and directly comparable Reel-capacity checks. FCC does not automatically prefer the thinnest nominal 10 lb product and does not infer diameter from pound-test when the manufacturer does not publish it.








The Reel-capacity question is resolved as a **product-specific validation method rather than a universal fixed yardage threshold**. The earlier provisional `~100–120+ yd of 10 lb mono` discussion value is retired as a canonical minimum. During current-market Rod/Reel/Line family research, FCC should retrieve the directly published 10 lb monofilament capacity for each candidate Reel variant—or a directly comparable published diameter/capacity observation when that is the manufacturer's applicable specification. FCC must not infer capacity from nominal Reel Size/Class, transfer mono capacity to braid/fluorocarbon, or interpolate/extrapolate unreported capacity rows. For the final approved Reel variants, FCC may summarize the observed capacity **range and median**; an arithmetic mean may be shown as secondary context but should not be allowed to hide meaningful shallow/deep-spool differences or duplicated family architectures. Adequacy remains tied to the selected 10 lb main-line system and actual candidate evidence.








Actual spooling is a separate execution concern owned by **Attach Line to Reel** rather than a purchasing-capacity number. The working beginner spooling standard is to fill the Spinning Reel evenly under appropriate tension while leaving approximately **1/8 inch of spool lip visible**, avoiding both underfill and overfill. A published capacity such as `10 lb / 120 yd` therefore does not mean FCC instructs the user to measure and install exactly 120 yards regardless of actual fill level.








This Line lock closes the default material/strength/behavior decision while preserving evidence-driven refinement. Exact commercial Line manufacturers, Reel/Rod product families and tiers, family variants, current prices, market-derived capacity range/median, and total budget bands remain for later current-market research. **Exact next checkpoint: combined Rod + Reel + Line compatibility / fishing-capability envelope, followed by current-market product-family research.**








### 2026-09-18 — Combined Rod + Reel + Line Compatibility / Fishing-Capability Envelope — APPROVED / revision allowed; Rod baseline challenge revision incorporated








The Version 1 preferred complete beginner Spinning system is **approximately 7'0" Medium-power Spinning Rod with Fast or Moderate-Fast action + mid-size general-purpose freshwater Spinning Reel + 10 lb general-purpose monofilament**. Approximately **6'6"–7'3"** remains a usable Rod length band when the complete capability envelope is preserved; **8 lb monofilament** remains the preferred lighter Line alternative. For Preferred Rod qualification, the published casting range should contain approximately **1/4–5/8 oz completed casting load**. Published **3/16- or 1/8-oz** lower capability is beneficial light-range extension rather than a mandatory prerequisite; approximately **3/4 oz** upper capability is beneficial headroom rather than a mandatory prerequisite. The Rod's directly comparable published line rating must include the selected Line; for the preferred default, 10 lb mono must fall inside the published range.








Hard compatibility is evaluated across the **complete system**, not nominal labels alone. The default requires Spinning Rod + Spinning Reel type pairing; Rod↔Line compatibility from directly comparable published line ratings; Reel↔Line compatibility from directly comparable published capacity for the actual selected 10 lb mono or valid equivalent diameter/capacity information; and Rod↔completed fishing-load compatibility based on the entire castable Rig rather than one component. FCC must not infer Reel compatibility from `2500`, `3000`, model number, another Reel in the family, braid capacity, unrelated fluorocarbon capacity, or interpolated data.








The combined system preserves useful beginner/general-purpose implementations of **all six Core Rigs**: Basic Bottom Rig, Direct-Tie Lure Setup, Fixed Bobber Rig, Jighead + Soft Plastic, Slip Bobber Rig, and Texas Rig. This means the system supports ordinary light-to-moderate bottom fishing, the approved small/light + medium/general-purpose Inline Spinner and Crankbait direction, normal bait-and-float use, general-purpose Jighead + Soft Plastic fishing, and light/general Texas Rigging. It does **not** require one Rod to optimize every lightest/heaviest form of each Rig. Very light spinner/jig/hard-bait presentations may benefit from a Rod extending to 3/16 or 1/8 oz; somewhat heavier ordinary presentations may benefit from approximately 3/4 oz headroom. Heavy river sinkers, trophy/heavy-catfish systems, micro/finesse presentations below the selected Rod's practical range, very heavy slip-float systems, punching/heavy mats/heavy flipping, thick-timber extraction, oversized/deep heavy lures, and other specialty applications remain outside the default job.








FCC therefore treats the equipment envelope as capability-based. The **core Preferred qualification span is approximately 1/4–5/8 oz**, while lighter or heavier published capability expands versatility without redefining the minimum default. Very small panfish/finesse presentations, clear-water cases where a lighter leader helps, incidental larger fish, and somewhat heavier presentations that remain inside the actual Rod rating may be useful but not optimized. Presentations below the selected Rod's published/practical lower range, repeated work near its upper rating, heavier cover where 10 lb mono becomes limiting, and larger sinkers required by current/depth are capability-shift territory. True ultralight, heavy-cover power fishing, very heavy bottom rigs, oversized/deep heavy lures, dedicated large-river/heavy-catfish systems, specialized trolling, and comparable materially heavier/lighter applications remain outside the default job.








The fish-control envelope remains qualitative rather than a fixed fish-weight maximum: **ordinary small-to-medium freshwater fishing, with reasonable incidental larger-fish capability when the fish is played appropriately**. Ability to land a fish does not establish that the setup is the correct dedicated targeting equipment. Cover/current/depth/structure, required Rig/lure load, line abrasion, hook size, and fish behavior may shift the equipment requirement.








Existing equipment uses three states. **Preferred Fit** substantially preserves the default functional system and all six Core-Rig capabilities without requiring an exact 7'0" clone. **Usable but Capability-Shifted** has no hard incompatibility but materially changes the envelope, such as a significantly shorter/longer Rod, Medium-Light, Medium-Heavy, 8 lb mono, a somewhat smaller but compatible Reel, or a Rod whose published load span omits a meaningful part of the approximately 1/4–5/8 oz core job. **Not Suitable for This Job** is reserved for demonstrated hard or practical failure such as wrong Rod/Reel type pairing, published Rod line range excluding the selected Line, Reel inability to support the selected Line, Rod casting envelope materially missing the required Starter Tackle core range, or equipment whose practical capability materially misses the one-system job.








The core system rule is: **a beginner Spinning setup qualifies for FCC's general-purpose default when its Rod, Reel, and Line are mutually compatible and the complete system preserves useful beginner implementations of all six Core Rigs across the approved light-to-moderate presentation envelope. Compatibility is evaluated from actual functional specifications and completed fishing loads, not nominal labels alone.** Specialty capability does not expand the default merely because the equipment can sometimes perform it.








The Starter Tackle package must be authored so its normal beginner configurations live primarily **inside the middle of the approved core equipment envelope rather than habitually at either boundary**. The approximately **1/4–5/8 oz** span is the Preferred Rod qualification range, not a target that every starter Rig must approach at both ends. When a selected Rod provides lighter 3/16- or 1/8-oz capability or approximately 3/4-oz upper headroom, those extensions may be used deliberately without becoming universal Starter Tackle requirements.








The Reel and Line specifications remain unchanged by this revision. The Rod baseline revision supersedes the earlier 1/8-oz hard lower-bound interpretation and Fast-over-Moderate-Fast preference. Exact product families/tiers/variants, observed Reel-capacity range/median, current prices, and budget bands remain for current-market research. The earlier preliminary Rod-family dispositions are invalidated and must be rerun under the revised baseline. No production implementation is authorized by this approval.








### 2026-09-18 — Current-Market Rod/Reel/Line Commercial Evidence Framework — APPROVED / revision allowed








Current-market Rod/Reel/Line research is **specification-first** and uses a fixed evidence order so commercial candidates are not selected first and justified afterward. Research proceeds in four passes: **hard qualification**, **commercial quality**, **value/position**, and **maintenance/currentness**. Price, reputation, popularity, or favorable reviews cannot rescue a product variant that fails the approved functional system.








For Rod and Reel commercial guidance, a product family/series enters the FCC **Preferred commercial candidate pool only when at least one current exact variant directly satisfies the approved Preferred equipment specification**. Qualifying variants must be identified explicitly; membership in a family or brand never establishes compatibility by itself. A current variant that remains functionally sound but misses part of the Preferred envelope may be retained separately as **Usable but Capability-Shifted** rather than being mislabeled Preferred. A hard incompatibility or material miss of the one-system job remains Not Suitable for This Job. No recommendation tier is populated merely to complete a table.








**Manufacturer evidence is primary for hard commercial facts**: current family/variant identity, published specifications, MSRP where published, warranty/support terms, and directly stated technical characteristics. Current manufacturer family pages, manuals, specification charts, catalogs, or equivalent technical material may supply that evidence. Major established retailers may provide secondary corroboration for current availability, observed pricing, or a missing specification when manufacturer material is incomplete, but retailer data must not silently override contradictory manufacturer information. Independent hands-on reviews/testing and recurring owner/community evidence are used for commercial quality, real-world performance, durability, ergonomics, defect patterns, and value claims; owner/community evidence may corroborate but is not the sole authority for a hard specification.








The authoring/audit evidence record for a researched Rod/Reel family should preserve at least the manufacturer, family/series, qualifying variant or variants, manufacturer family URL, current/discontinued status, research date, relevant hard specifications and sources, current MSRP when published, dated observed street-price evidence where useful, warranty/support information, meaningful features, independent-use evidence, recurring owner strengths/problems, and FCC disposition. Fishing Line remains **Specification + Reputable Brands** rather than a routine SKU-tier catalog, but its reputable-manufacturer/family evidence follows the same source-authority principles.








For Rod/Reel family screening, **candidate discovery must not begin from a hand-selected family list alone**. Build a bounded candidate universe from multiple current independent beginner/general-purpose/relevant recommendation sources plus major competing manufacturer lineups, deduplicate that universe, and then use manufacturer evidence to qualify exact variants. Appearance in a review, search result, recommendation list, retailer page, or manufacturer lineup establishes only that a candidate is worth screening; it does **not** establish Preferred Fit, quality, value, or suitability. This discovery step exists to reduce omission bias without weakening the specification-first qualification gate.








Commercial observations are **date-stamped evidence**, not permanent product identity. Street price in particular is market evidence rather than a canonical fixed attribute. Missing specifications remain unknown; FCC does not infer them from family naming, adjacent variants, nominal Reel size, unrelated line-capacity rows, or other unsupported conversions. The preferred durable commercial link remains the current manufacturer family/series page where it accurately represents the recommendation and available variants.








**Periodic staleness monitoring is deliberately NOT locked by this checkpoint.** Whether FCC needs a scheduled check, manual review cadence, freshness display, event-triggered revalidation, or no recurring check depends on what commercial information is ultimately presented and persisted. That maintenance/freshness policy must be decided later from the actual user-facing commercial presentation rather than pre-committing the project to monitoring infrastructure before its value is known.








No Rod, Reel, Line manufacturer, family, tier, variant, price band, or capacity range/median is commercially approved by this framework checkpoint. **Exact next checkpoint: current-market Rod-family screen**, classifying researched current families/variants as Preferred Fit candidate, Usable but Capability-Shifted, Not Suitable for This Job, or Insufficient Evidence before comparative quality/value disposition.
















### 2026-09-18 — Matched Rod + Reel Combo Purchasing Path — APPROVED / revision allowed








For a user starting from scratch, **Choose a Setup supports both a researched matched Rod + Reel Combo and Rod + Reel selected separately**. These are two purchase formats inside the same resolved Spinning equipment path, not separate setup types. The combo path is intentionally beginner-friendly because it can remove the initial Rod/Reel matching burden while preserving the same functional qualification standards.








An exact Combo is independently qualified as a **complete system**. The included Rod must satisfy the approved Rod baseline; the included Reel must satisfy the approved Reel architecture and provide directly comparable capacity evidence for the selected Line; and the complete pairing must preserve the approved six-Core-Rig job. FCC does not infer that a Combo contains the same Rod blank, Reel, gearing, spool/capacity, or other specification as similarly named standalone products. Where a Combo is pre-spooled or includes Line, that Line is evaluated independently under the approved Line specification and may be retained, replaced, or disregarded.








Commercial presentation keeps **Matched Combos** distinct from **Build Separately** so a complete Combo is not misleadingly compared as though it were the same kind of purchase as a standalone Rod. Exact commercial tier structure/counts for Combos remain open until current-market research shows what useful presentation is justified. No specific Combo product, manufacturer, family, variant, tier, price, or investment band is approved by this checkpoint.








This purchasing decision does not create a third persistent ownership entity. Existing My Tackle architecture remains controlling: a factory Combo resolves to one independently addressable Rod plus one independently addressable Reel, while any commercial combo identity may remain descriptive if useful. A recommendation never silently creates ownership. `05A-INVENTORY.md` already owns that storage boundary and requires no change; `05-TACKLE.md` likewise requires no change.








**Research consequence:** current-market beginner/general-purpose Spinning **Combos are screened in parallel with standalone Rod and Reel candidates** using the same evidence hierarchy and exact-variant discipline. Currentness must be verified rather than inferred from legacy catalogs or historical combo names.








**Exact next checkpoint:** rerun the current-market Rod-family hard screen under Gate 137 while beginning a parallel matched-Spinning-Combo hard screen; no quality/value tier assignment occurs until hard qualification is complete.








### 2026-09-18 — Matched Spinning Combo Hard-Screen — APPROVED / revision allowed








The Version 1 current-market **Matched Spinning Combo hard-qualification screen is CLOSED / APPROVED WITH REVISIONS ALLOWED**. The screen applies the Gate 137 Rod baseline and Gate 138 complete-system Combo rules to exact current variants. Hard qualification remains specification-first; this checkpoint does **not** assign Best of the Best, Best Value, Best Budget, Good Alternative, Avoid, or any other commercial quality/value tier.








The following exact current Combo variants are approved as **Preferred hard-fit candidates** for the FCC default general-purpose beginner Spinning job:








| Manufacturer / Combo | Exact qualifying variant | Included Rod evidence | Included Reel / 10 lb mono evidence |
|---|---|---|---|
| Abu Garcia Max X | `MAXXSP3000/701M` | 7'0" Medium / Fast; 6–12 lb; 1/4–5/8 oz | 3000; 10 lb / 140 yd |
| Pflueger President | `PRESSP-7035` | 7'0" Medium / Fast; 8–14 lb; 1/4–3/4 oz | 35; 10 lb / 155 yd |
| Ugly Stik Elite | `USELSP702M/35CBO` | 7'0" Medium / Fast; 6–14 lb; 1/4–5/8 oz | 35; 10 lb / 175 yd |
| Abu Garcia Max Elite | `MAXELT3000H/701M` | 7'0" Medium / Fast; 6–12 lb; 3/16–5/8 oz | 3000; 10 lb / 140 yd |
| Abu Garcia Veritas | `VRPSP3000/701M` | 7'0" Medium / Fast; 6–12 lb; 3/16–5/8 oz | 3000; 10 lb / 140 yd |
| Daiwa Revros LT | `RVRLT30-4BI/G702M` | 7'0" Medium / Fast; 6–15 lb; 1/8–3/4 oz | 3000-class; 10 lb / 130 yd |
| Daiwa Legalis LT | `LEGLT30G702M` | 7'0" Medium / Fast; 6–14 lb; 1/4–3/4 oz | 3000-class; 10 lb / 130 yd |
| Daiwa Crossfire LT | `CF30G702M-C` / `CF30G702M-E` | 7'0" Medium / Moderate-Fast; 6–15 lb; 1/4–3/4 oz | 3000-class; 10 lb / 130 yd |
| Lew's MACH Smash | `MHS3070MSG2` | 7'0" Medium / Fast; 6–14 lb; 3/16–5/8 oz | 3000; 10 lb / 180 yd |








The following current Combos are approved as **Usable but Capability-Shifted** for the FCC default job rather than Preferred hard fits:








- **Shimano Nexave 7' Medium/Fast** — current Rod evidence supports 8–12 lb and 1/4–1/2 oz; the 1/2-oz upper limit omits part of the approved approximately 1/4–5/8 oz core job. The applicable 2500 Reel evidence supports 10 lb / 120 yd.
- **Pflueger President XT `PFLPXT70M/35`** — 7' Medium / Extra-Fast, 6–12 lb, 1/8–1/2 oz; the Extra-Fast action and 1/2-oz upper limit shift the Rod away from the approved general-purpose center. The size-35 Reel supports 10 lb / 155 yd.
- **Lew's American Hero Camo `AHC4070MSG2-2`** — 7' Medium / Fast, 4–10 lb, 1/8–1/2 oz; the upper Rod rating ends at 1/2 oz and therefore does not preserve the complete Preferred core load span.








**Ugly Stik GX2 `USGXSP702M/35CBO` remains Insufficient Evidence for Preferred hard-fit classification** because current manufacturer data establishes 7' Medium, 6–15 lb, 1/8–5/8 oz, and size-35 / 10 lb-compatible capacity while omitting Rod Action, and current secondary evidence conflicts across Moderate, Moderate-Fast, and Fast descriptions. FCC does not infer a Preferred action through that contradiction. GX2 remains eligible for later quality/value discussion as an unresolved/high-interest beginner product, but it is not promoted into the Preferred hard-fit pool by this checkpoint.








**Lew's Mach Crush is not retained as a current-market Combo candidate** absent adequate current manufacturer-lineup evidence. Historical specifications may remain research context but do not establish 2026 currentness. Other products with unresolved current exact-variant specifications may remain outside the closed hard-fit pool rather than prolonging research indefinitely.








This checkpoint proves that the matched-Combo path has a sufficiently broad current Preferred candidate pool to support commercial comparison. **The next Combo checkpoint is commercial quality/value pruning among the nine Preferred hard-fit candidates**, considering complete-system beginner usability, Rod quality/forgiveness, Reel quality, line lay/bail/drag behavior, durability, balance, support/warranty, recurring owner evidence, useful range extensions, and dated price/value evidence. The exact number of user-facing Combo recommendations and whether Combo presentation uses all four positive commercial tiers or a smaller curated set remain open until that comparison. The standalone Rod-family hard screen remains a parallel open research track.








### 2026-09-18 — Matched Spinning Combo Commercial Tier Structure — APPROVED / revision allowed








The Version 1 curated Matched Spinning Combo presentation uses three **price/product-position groups** — **Budget**, **Mid-tier**, and **Premium** — rather than presenting every technically qualified Combo as one flat list. These groups describe shopping position and expected component/refinement level; they are **not** substitutes for, or automatic assignments of, the separate D023 positive commercial recommendation labels Best of the Best / Best Value / Best Budget / Good Alternative. Current observed prices are dated market evidence and do not create permanent canonical dollar thresholds for the groups.








The approved curated Combo set is:








| Price / product-position group | Curated current candidates | Beginner-facing reason to retain |
|---|---|---|
| **Budget** | Daiwa Crossfire LT `CF30G702M-C` / `CF30G702M-E` | Lowest-cost current hard-qualified complete-system entry; fills the Budget role without requiring a second product merely for symmetry. |
| **Mid-tier** | Pflueger President `PRESSP-7035` | Established Reel/value-oriented path with a serviceable matched Rod. |
| **Mid-tier** | Lew's MACH Smash `MHS3070MSG2` | Balanced complete-system option rather than a purchase centered on one obvious upgrade component. |
| **Mid-tier** | Daiwa Revros LT `RVRLT30-4BI/G702M` | Broad 1/8–3/4 oz Rod capability envelope; retained after targeted challenge despite some negative Reel evidence because that broader functional range is materially distinct. |
| **Mid-tier** | Ugly Stik Elite `USELSP702M/35CBO` | Durability/Rod-first entry path: useful complete Combo now with a natural later Reel-upgrade path while retaining the Rod. |
| **Premium** | Abu Garcia Max Elite `MAXELT3000H/701M` | Higher-spec balanced complete system intended to remain useful as a matched pair. |
| **Premium** | Daiwa Legalis LT `LEGLT30G702M` | Higher-quality Reel foundation with a natural later Rod-upgrade/specialization path while retaining the Reel. |








**One Budget candidate is sufficient.** FCC does not add a second Budget Combo merely to make the groups numerically symmetrical. Another Budget product enters the curated set only if it is current, hard-qualified, commercially supportable, and provides a materially different useful reason for a beginner to choose it rather than duplicating Crossfire LT's role. The current search did not establish such a second product.








Two previously hard-qualified candidates are deliberately **not retained in the curated beginner Combo set** after commercial quality/value pruning. **Abu Garcia Max X `MAXXSP3000/701M`** remains technically hard-qualified but is commercially redundant with Crossfire LT in the low-cost role and does not add enough distinct beginner value to justify another curated slot. **Abu Garcia Veritas `VRPSP3000/701M`** remains technically hard-qualified and has credible premium-performance evidence, but its approximately $350 current price did not demonstrate enough additional beginner/general-purpose utility over Max Elite / Legalis LT to justify a scarce curated Combo slot, especially because FCC also supports a Build Separately path at that investment level. Neither exclusion is an Avoid disposition.








The targeted challenge also retains **Revros LT** rather than pruning it as redundant: its unusually broad 1/8–3/4 oz Rod range provides a distinct capability reason to exist between the approximately $100 mainstream options and Legalis LT. Current quality evidence remains mixed enough that FCC should preserve the associated tradeoff rather than present Revros as categorically superior.








This checkpoint settles the **curated candidate count and price-position presentation structure** for the current Matched Spinning Combo research set: one Budget, four Mid-tier, and two Premium candidates. It does not create permanent dollar cutoffs, does not assign the separate positive commercial recommendation labels, and does not change the hard-screen states of Capability-Shifted or Insufficient-Evidence products. Periodic commercial staleness/freshness policy remains deferred under the evidence framework. **Exact next substantive checkpoint: FCC 41 / 2B.2 — resume the standalone current-market Rod-family hard screen under Gate 137; Combo commercial presentation may be revisited only if that parallel research or later implementation exposes a material conflict.**
















### 2026-09-18 — Standalone Spinning Rod-Family Hard Screen — APPROVED / revision allowed








The Version 1 standalone current-market **Spinning Rod-family hard screen is CLOSED / APPROVED WITH REVISIONS ALLOWED** under the Gate 137 baseline and candidate-discovery method. This checkpoint establishes technical eligibility only. It does not assign Best of the Best, Best Value, Best Budget, Good Alternative, Avoid, or final price/product-position groups.








Preferred hard qualification remains specification-first: a current exact Spinning Rod variant must preserve the approved approximately 7-foot / Medium-power general-purpose job, use **Fast or Moderate-Fast** action, include **10 lb** inside the published line range, and publish a casting range containing the complete approximately **1/4–5/8 oz** core span. Approximately 1/8- or 3/16-oz lower capability and approximately 3/4-oz upper capability remain useful extensions rather than prerequisites. Candidate discovery used multiple current independent beginner/general-purpose recommendation sources plus major competing manufacturer lineups; discovery inclusion by itself did not establish suitability.








The bounded current-market screen produces **22 Preferred Fit candidates**:








| Manufacturer / family | Exact qualifying variant | Current hard-spec basis |
|---|---|---|
| Daiwa Tatula XT | `TATULAXT701MFS` | 7' / Medium / Fast / 6–14 lb / 1/8–3/4 oz |
| Daiwa Fuego | `FGO701MFS-B` | 7' / Medium / Fast / 6–15 lb / 1/4–3/4 oz |
| Daiwa AIRD-X | `AIRX701MFS` | 7' / Medium / Fast / 6–15 lb / 1/4–3/4 oz |
| Shimano Sellus | `SUS70MB` | 7' / Medium / Fast / 6–12 lb / 3/16–5/8 oz |
| Shimano Teramar SE | `TERSES70MB` | 7' / Medium / Moderate-Fast / 8–16 lb / 1/4–3/4 oz |
| St. Croix Triumph | `27TRS70MF` | 7' / Medium / Fast / 6–12 lb / 1/4–5/8 oz |
| St. Croix Premier | `SCPS70MF` | 7' / Medium / Fast / 6–12 lb / 1/4–5/8 oz |
| St. Croix Victory | `VTS71MF` | 7'1" / Medium / Fast / 6–20 lb / 3/16–5/8 oz |
| Abu Garcia Vengeance | `VENS70-5` | 7' / Medium / Fast / 6–12 lb / 1/4–5/8 oz |
| Abu Garcia Veritas | `VRPS70-5` | 7' / Medium / Fast / 6–12 lb / 3/16–5/8 oz |
| Abu Garcia Veritas Winch | `VRPSW70-5` | 7' / Medium / Moderate-Fast / 8–17 lb / 1/4–5/8 oz |
| Abu Garcia Fantasista X | `FNXS70-5` | 7' / Medium / Fast / 8–14 lb / 3/16–5/8 oz |
| Dobyns Fury | `FR703SF` | 7' / Medium / Fast / 8–17 lb / 3/16–5/8 oz |
| Dobyns Sierra | `SA703SF` | 7' / Medium / Fast / 8–17 lb / 3/16–5/8 oz |
| Dobyns Colt | `CL703SF` | 7' / Medium / Fast / 8–17 lb / 3/16–5/8 oz |
| Ugly Stik Elite | `USELSP701M` | 7' / Medium / Fast / 6–14 lb / 1/4–5/8 oz |
| Ugly Stik Carbon | `USCBSP701M` | 7' / Medium / Fast / 6–12 lb / 3/16–5/8 oz |
| Ugly Stik GX2 | `USGXSP702M` | Manufacturer: 7' / Medium / 6–15 lb / 1/8–5/8 oz; manufacturer omits Action; exact-model secondary evidence places Action within the accepted Fast / Moderate-Fast set |
| Berkley Lightning Rod | `BSLR701M` | 7' / Medium / Moderate-Fast / 8–14 lb / 1/4–5/8 oz |
| Fenwick Eagle Inshore | `EGLINS70M-FS` | 7' / Medium / Fast / 8–17 lb / 1/8–1 oz |
| Fenwick HMG Inshore | `HMGINS70M-FS` | 7' / Medium / Fast / 8–17 lb / 1/8–1 oz |
| Lew's MACH 1 | `M1APSR` | 7' / Medium / Fast / 6–14 lb / 3/16–5/8 oz |








Three current families are **Usable but Capability-Shifted** for the default job rather than Preferred: **Shimano Clarus `CSS70MF`** (7' Medium/Fast, 8–12 lb, 1/4–1/2 oz); **Falcon BuCoo SR `BRS-4-17`** (7' Medium/Moderate, 8–17 lb, 1/4–1/2 oz); and **Lew's American Hero `AH70MSG3`** (7' Medium/Fast, 4–12 lb, 1/8–1/2 oz). Each omits a meaningful part of the approved Preferred action/load job but remains functionally usable in a shifted envelope.








After a targeted challenge, **Ugly Stik GX2 `USGXSP702M` is promoted from Insufficient Evidence to Preferred Fit candidate with an explicit source caveat**. Ugly Stik's current manufacturer page publishes 7' / Medium / 6–15 lb / 1/8–5/8 oz but leaves Action blank. Exact-model established-retailer evidence disagrees between **Fast** and **Moderate-Fast**; because Gate 137 explicitly accepts both actions and no manufacturer action contradicts either, that disagreement does not change the hard-screen result. Repeated current beginner-market recommendations do not substitute for hard qualification, but they strengthen the case for carrying GX2 into the commercial quality/value pass. Its action-source caveat must remain visible in research records.








The final bounded screen is therefore **22 Preferred Fit / 3 Usable but Capability-Shifted / 0 Insufficient Evidence**. No screened family requires a Not Suitable disposition within this plausible current-market universe. The GX2 standalone decision does **not** reopen the separate matched-Combo GX2 disposition from Gate 139; exact Combo variants remain independently qualified complete systems and do not inherit standalone component specifications by assumption.








**Exact next checkpoint:** standalone Rod-family **commercial quality/value pruning** among the 22 Preferred candidates, using the approved sequence of commercial quality first and value/product position second.








### 2026-09-18 — Standalone Rod Commercial Position Grouping Method — APPROVED / revision allowed








Standalone Rod commercial comparison will follow the same two-stage presentation logic approved for matched Combos. The 22 Gate-141 Preferred Fit Rod candidates are first organized into **Budget**, **Mid-tier**, and **Premium** current price/product-position groups before commercial pruning. These groups describe current shopping position and expected refinement level; they are not permanent dollar thresholds and are not automatic assignments of Best Budget, Best Value, Best of the Best, or Good Alternative.








Commercial pruning is primarily performed **within the relevant position group** and across adjacent groups only when two products are functionally redundant enough that keeping both would add no meaningful beginner choice. A technically qualified Rod may remain in the curated set when it provides a materially distinct beginner reason to choose it at its market position, including durability/forgiveness, graphite performance or sensitivity, transport/two-piece convenience, useful length/capability variation, warranty/support, construction, ergonomics, or another evidence-backed distinction. FCC does not exclude a sound Rod merely to force an artificially short global list, but it also does not preserve functionally interchangeable products merely for brand representation or numerical symmetry.








The earlier unapproved **7-retain / 15-prune** proposal is discarded and has no canonical effect. No exact Budget/Mid-tier/Premium Rod membership, retained count, commercial recommendation award, or permanent price boundary is approved by this methodology gate. **Exact next checkpoint:** group the 22 Preferred Rod candidates by current commercial position, then perform evidence-backed within-group redundancy/value/quality challenges before assigning any D023 positive recommendation awards.








### 2026-09-18 — Standalone Rod Commercial Position Groups + Curated Set — APPROVED / revision allowed








Using current-market observations dated 2026-09-18, the 22 Gate-141 **Preferred Fit** standalone Rod families are grouped by current commercial position before recommendation awards. The approved curated result is **16 retained / 6 commercially pruned / 0 Avoid**. Commercial pruning does not alter Gate 141 technical qualification: all 22 remain Preferred Fit for the approved general-purpose beginner Spinning job.








**Budget — 8 retained:** Abu Garcia Vengeance; Ugly Stik GX2; Daiwa AIRD-X; Shimano Sellus B; Lew's MACH 1; Ugly Stik Elite; Dobyns Colt; Ugly Stik Carbon. **Budget commercial prunes:** Berkley Lightning Rod and Daiwa Fuego.








**Mid-tier — 5 retained:** Daiwa Tatula XT; Abu Garcia Veritas; Abu Garcia Veritas Winch; St. Croix Triumph; Dobyns Fury. **Mid-tier commercial prune:** Fenwick Eagle Inshore.








**Premium — 3 retained:** St. Croix Premier; Dobyns Sierra; St. Croix Victory. **Premium commercial prunes:** Fenwick HMG Inshore; Shimano Teramar SE; Abu Garcia Fantasista X.








The six pruned families are **not Avoid** and are not declared poor products. They are removed only from the curated beginner commercial set because current evidence shows redundancy, weaker value/position differentiation, inshore-specialized market alignment, or insufficient incremental beginner/general-purpose value compared with retained alternatives. Multiple retained families may coexist within one price-position group when they give a beginner a materially distinct reason to choose them.








For internal commercial research consistency, FCC may use approximate current-market reference bands of **Budget generally below about $100, Mid-tier generally about $100–$170, and Premium generally about $175+**. These values are **internal research heuristics only**: they are not user-facing definitions, permanent canonical cutoffs, or a substitute for product-position evidence. Boundary products are assigned from their complete market position, construction/features, and competitive set rather than a one-cent price convention. Under that rule, Daiwa Tatula XT begins the Mid-tier group despite its current approximately $99.99 price point.








The retained set preserves the existing GX2 action-source caveat from Gate 141. Commercial comparison should also preserve the observed caution that Dobyns Fury owner evidence can describe a heavier/stiffer feel than nominal labels suggest, and that Dobyns Sierra has mixed durability/value evidence across current sources; neither caution changes technical qualification or creates an Avoid disposition.








Budget / Mid-tier / Premium remain **user-usable shopping-position groups**, not automatic D023 recommendation awards. Their purpose is to reduce an overwhelming market into a manageable set of meaningfully different choices while preserving user agency: FCC should explain why the retained options differ and let the user choose among sound alternatives rather than make the grouping itself function as a prescribed purchase decision. The internal monetary heuristics are not exposed as the definition of those groups. This checkpoint does **not** yet assign Best Budget, Best Value, Best of the Best, or Good Alternative. **Exact next checkpoint:** assign the appropriate D023 positive recommendation awards among the 16 retained standalone Rod families without forcing every award or price-position group to have equal representation.
















### 2026-09-18 — Tier/Descending Commercial Presentation + Standalone Rod Awards — APPROVED / revision allowed








For commercial categories where concrete product examples materially help but a full four-award presentation would add clutter or imply more precision than the evidence supports, FCC uses a default **position-group + descending-order** presentation. First, retained candidates may be organized into commercially meaningful groups such as **Budget / Mid-tier / Premium** when those groups materially simplify the shopping decision. Second, products inside each group are presented in **descending evidence-backed overall value order**, best current value at the top, without visible ordinal numbering. The order is a comparative aid among already-qualified sound choices; lower placement does not mean a product is poor, unsuitable, or Avoid.








FCC may place one or more justified D023 standout callouts inside this structure, but it does not need to repeat **Good Alternative** on every remaining positive product. The Good Alternative semantic category remains valid; the user-facing presentation may instead rely on group membership, descending position, and concise differentiation copy to show why each retained option remains worth considering. This is intended to reduce an overwhelming market into a manageable, evidence-backed choice set while preserving user agency rather than steering toward a predetermined purchase.








This presentation is the default for **Rods, Reels, and matched Rod + Reel Combos** when their current commercial research supports meaningful market-position grouping. **Fishing Line retains its already-approved Specification + Reputable Brands treatment**: reputable brands or selective exact examples may be shown in descending evidence-backed preference/value order, and commercial-position groups are used only when they materially improve the decision. This rule does not convert Line into mandatory exact-spool/SKU tiering. Other categories may reuse the position-group + descending-order pattern when it materially helps and remains consistent with the D023 lowest-commercial-specificity rule. Full Best of the Best / Best Value / Best Budget / Good Alternative labeling remains available when a category genuinely benefits from full award treatment; Avoid remains separate.








For the Gate-143 retained standalone Rod set, the approved current presentation/order is:








- **Budget:** **Ugly Stik GX2 — Best Budget**; Daiwa AIRD-X; Shimano Sellus B; Abu Garcia Vengeance; Ugly Stik Elite; Ugly Stik Carbon; Dobyns Colt; Lew's MACH 1.
- **Mid-tier:** **Daiwa Tatula XT — Best Value**; St. Croix Triumph; Abu Garcia Veritas; Abu Garcia Veritas Winch; Dobyns Fury.
- **Premium:** **St. Croix Victory — Best of the Best**; St. Croix Premier; Dobyns Sierra.








The existing GX2 action-source caveat and Fury/Sierra commercial-evidence cautions remain in force. The 16 Rods remain positive beginner recommendations, the six Gate-143 commercial prunes remain non-Avoid, and the unnumbered order may be refreshed when current-market evidence materially changes. **Exact next checkpoint:** apply this default presentation/order standard to the already-qualified matched Combos, then continue the standalone Reel commercial screen/curation and the Line reputable-brand ordering work.








### 2026-09-18 — Matched Combo Tier/Descending Ordering — APPROVED / revision allowed








Applying the Gate-144 presentation standard to the Gate-140 curated Matched Spinning Combo set, FCC uses the existing **Budget / Mid-tier / Premium** groups plus **unnumbered descending evidence-backed overall value order** inside each group. The approved current presentation is:








- **Budget:** **Daiwa Crossfire LT — Best Budget**.
- **Mid-tier:** **Pflueger President — Best Value**; Lew's MACH Smash; Daiwa Revros LT; Ugly Stik Elite.
- **Premium:** **Abu Garcia Max Elite — Best of the Best**; Daiwa Legalis LT.








The ordering does not alter Gate 139 technical qualification or Gate 140 commercial pruning. Max X and Veritas remain technically hard-qualified but commercially pruned from the curated beginner Combo set; neither is Avoid. Revros LT retains its previously approved broad-capability rationale and mixed-quality evidence caveat. One Budget Combo remains sufficient; FCC does not add a second product merely for visual symmetry.








As with standalone Rods, the unnumbered position inside a group communicates current comparative commercial value among retained positive choices without implying that lower-listed products are poor or unsuitable. **Exact next checkpoint:** standalone Spinning Reel commercial curation under the approved mid-size general-purpose Reel architecture, followed by Fishing Line reputable-brand ordering.








### 2026-09-18 — Standalone Spinning Reel Exact-Variant Selection Method — APPROVED / revision allowed








Before a standalone Reel family can receive final Preferred-Fit commercial qualification, FCC compares all materially applicable adjacent mid-size variants within that family rather than defaulting to the nominal `2500` label. The comparison normally includes 2500-class, compact 3000/C3000/3000-C variants, and ordinary 3000/30/35-class alternatives when offered and relevant.








Manufacturer-specific size and suffix nomenclature is not normalized across brands or families. A compact-body designation may pair greater spool capacity or a different spool with a body/chassis close to a smaller nominal size, but that benefit must be verified from the applicable manufacturer's current evidence rather than inferred from the suffix alone. Daiwa LT compact-3000 and Shimano C3000 patterns are examples that justify the comparison, not universal equivalence rules.








The selected FCC reference/qualifying variant is the adjacent option that best preserves the approved approximately 7' Medium + 10 lb mono general-purpose job with the least unnecessary size/weight and no hard compatibility loss. The variant review records, where directly published and decision-relevant: body/chassis class or manufacturer compact-body relationship, spool/lip diameter, spool depth/capacity, Reel mass, retrieve behavior, max drag, and directly comparable 10 lb mono capacity. Capacity still follows the product-specific evidence rule; FCC does not create unpublished cross-strength, cross-line-type, or nominal-size conversions.








The current FCC 44 provisional family discovery pool and provisional exact-variant assignments remain screening input only. The previously proposed 34-family exact-variant Preferred list is **not approved** by this checkpoint. Final standalone Reel hard-screen dispositions require the adjacent-size/compact-body challenge first.








**Exact next checkpoint:** FCC 44 / 2B.2 — run the adjacent-size/compact-body variant challenge across the provisional standalone Reel family pool, select the best qualifying exact variant or variants per family, then close the standalone Reel hard screen before commercial position grouping/pruning.








### 2026-09-18 — Standalone Spinning Reel Adjacent-Variant Hard Screen — APPROVED / revision allowed








The Gate-146 adjacent-size/compact-body method has now been applied across the complete 34-family provisional standalone Spinning Reel pool. **All 34 families remain Preferred Fit at the family level.** The challenge revised **21 exact reference variants** and retained **13** unchanged. This closes the standalone Reel exact-variant hard screen; no family is commercially pruned or assigned a D023 award by this checkpoint.








The approved exact reference variants are:








- **Daiwa:** Crossfire LT — `3000-C`; Revros LT — `3000-C`; Regal LT — `3000D-CXH-B`; Legalis LT — `3000D-C`; Exceler LT — `3000D-C`; Fuego LT — `3000D-C`; Tatula MQ LT — `3000D-CXH`.
- **Shimano:** Sienna FG — `2500HG`; Catana FE — `C3000HG`; Sedona FJ — `C3000HG`; Sahara FJ — `C3000HG`; Nasci FD — `C3000HG`; Miravel A — `C3000HG A`; Stradic FM — `C3000XG FM`; Vanford A — `C3000XG A`; Vanquish — `C3000XG`.
- **Pflueger:** President — `30X`; President XT — `30X`.
- **Abu Garcia:** Max Elite — `3000H`; Revo X — `SP20`; Revo SX — `SP20`; Zenon X — `SP3000MS`.
- **Lew's:** Speed Spin CRX — `300`; Custom Pro Gen 2 — `300`.
- **Okuma:** Avenger B — `3000B`; Ceymar A — `2500A`; Safyre — `3000A`; Inspira ISX — `3000HA`; X-Series — `3000XA`.
- **PENN:** Fierce IV — `2500`; Battle IV — `2500`.
- **Piscifun:** Viper X — `3000`.
- **KastKing:** Zephyr — `2000`; Sharky III — `3000`.








The controlling selection principle is not “prefer 3000.” FCC prefers an adjacent larger spool when it produces a meaningful general-purpose benefit with little or no chassis/weight penalty and no hard compatibility loss; it keeps or moves smaller when the larger nominal size mainly adds unnecessary mass/capacity, changes retrieve behavior unfavorably, or otherwise weakens the approved approximately 7' Medium + 10 lb mono beginner/general-purpose job. Direct manufacturer evidence controls compact-body/chassis relationships and comparable capacity evidence.








**Exact next checkpoint:** assign the 34 hard-qualified standalone Reel families to current Budget / Mid-tier / Premium commercial-position groups, then perform evidence-backed within-group redundancy/value/quality pruning before D023 awards/order are assigned.








### 2026-09-18 — Standalone Spinning Reel Commercial Position Groups + Curated Set — APPROVED / revision allowed




The Gate-147 34-family technically Preferred standalone Reel pool has completed the commercial position grouping and within-group quality/value/redundancy challenge. Current observed market position groups are not permanent dollar thresholds and do not alter technical qualification. The approved curated result is **20 retained / 14 commercially pruned / 0 Avoid**.




**Budget — 9 retained:** Daiwa Crossfire LT; Daiwa Regal LT; Daiwa Legalis LT; Shimano Sienna FG; Shimano Sedona FJ; Pflueger President; Okuma Ceymar A; KastKing Zephyr; KastKing Sharky III. **Budget commercial prunes:** Daiwa Revros LT; Shimano Catana FE; Lew's Speed Spin CRX; Okuma Avenger B; Okuma Safyre; PENN Fierce IV; Piscifun Viper X.




**Mid-tier — 6 retained:** Daiwa Fuego LT; Shimano Nasci FD; Shimano Miravel A; Abu Garcia Max Elite; Okuma Inspira ISX; PENN Battle IV. **Mid-tier commercial prunes:** Daiwa Exceler LT; Shimano Sahara FJ; Pflueger President XT; Abu Garcia Revo X; Lew's Custom Pro Gen 2.




**Premium — 5 retained:** Daiwa Tatula MQ LT; Shimano Stradic FM; Shimano Vanford A; Shimano Vanquish; Abu Garcia Revo SX. **Premium commercial prunes:** Abu Garcia Zenon X; Okuma X-Series.




Commercial pruning is non-Avoid and does not revoke Gate-147 Preferred technical fit. Current market position, redundancy, specialization/currentness, evidence strength, and comparative beginner/general-purpose value are the reasons for pruning. The retained set deliberately preserves multiple differentiated positive choices rather than forcing a very short list.




Approximate current observed clusters (Budget generally <=~$100, Mid-tier roughly ~$105–170, Premium roughly ~$190+) are internal research context only, not user-facing definitions, permanent canonical cutoffs, or automatic D023 awards.




**Exact next checkpoint:** apply the Gate-144 default presentation to these 20 retained Reels: unnumbered descending evidence-backed overall value order within Budget / Mid-tier / Premium, with selective D023 standout awards where justified. Fishing Line reputable-brand ordering follows after Reel ordering.








### 2026-09-18 — Standalone Spinning Reel Tier/Descending Ordering + Standout Awards — APPROVED / revision allowed




Applying the Gate-144 presentation standard to the Gate-148 curated standalone Spinning Reel set, FCC uses the existing **Budget / Mid-tier / Premium** groups plus **unnumbered descending evidence-backed overall value order** inside each group. The approved current presentation is:




- **Budget:** Daiwa Regal LT `3000D-CXH-B`; Shimano Sedona FJ `C3000HG`; Pflueger President `30X`; Okuma Ceymar A `2500A`; **Daiwa Crossfire LT `3000-C` — Best Budget**; Daiwa Legalis LT `3000D-C`; Shimano Sienna FG `2500HG`; KastKing Sharky III `3000`; KastKing Zephyr `2000`.
- **Mid-tier:** **Daiwa Fuego LT `3000D-C` — Best Value**; Shimano Nasci FD `C3000HG`; Okuma Inspira ISX `3000HA`; Shimano Miravel A `C3000HG A`; Abu Garcia Max Elite `3000H`; PENN Battle IV `2500`.
- **Premium:** **Shimano Stradic FM `C3000XG FM` — Best of the Best**; Daiwa Tatula MQ LT `3000D-CXH`; Shimano Vanford A `C3000XG A`; Abu Garcia Revo SX `SP20`; Shimano Vanquish `C3000XG`.




The Budget ordering intentionally separates **best overall value within the Budget commercial-position group** from the D023 **Best Budget** award. Regal LT leads the Budget group on current overall value, while Crossfire LT receives Best Budget because that award identifies the lowest-cost retained option FCC still considers a sound beginner purchase. The Mid-tier Fuego LT receives Best Value for the strongest current balance of quality, performance, durability, usability, and price. The Premium Stradic FM receives Best of the Best because its broad all-purpose/workhorse balance best matches FCC's approved first-system/general-purpose job when price is not the primary constraint. Vanquish remains a positive Premium option; its lower commercial-value placement reflects extreme price and stronger finesse specialization, not a technical-fit failure.




No explicit **Good Alternative** labels are required for the remaining retained Reels. Under Gate 144, positive group membership, descending order, and concise differentiation carry that meaning without repetitive labeling. All 20 retained Reels remain positive recommendations; the 14 Gate-148 commercial prunes remain technically Preferred and non-Avoid. Gate 147 exact-variant qualification and Gate 148 retained/pruned membership are unchanged. The unnumbered within-group order and awards may be refreshed when current-market evidence materially changes.




**Exact next checkpoint:** Fishing Line reputable-brand ordering under the already-approved **Specification + Reputable Brands** model.






### 2026-09-18 — Fishing Line Reputable-Brand Ordering — APPROVED / revision allowed


Fishing Line remains **Specification + Reputable Brands**. FCC does not maintain one universal fishing-line brand ranking across all line types. Reputable-brand guidance is line-type-specific and presented as **unnumbered descending current beginner-facing guidance**, not as a claim that every product from an earlier manufacturer is categorically superior to every product from a later manufacturer and not as a permanent model/SKU ranking.


Approved current reputable-brand order:


- **Monofilament:** Berkley; Sufix; Sunline; Maxima; Stren.
- **Fluorocarbon:** Seaguar; Sunline; Berkley; Sufix; P-Line.
- **Braid:** PowerPro; Sufix; Seaguar; Berkley; Sunline; Yo-Zuri.


Monofilament is presented first in the default beginner Spinning path because the approved first-system line is **10 lb general-purpose monofilament**, with **8 lb monofilament** as the lighter alternative. The ordering answers the beginner question “which established brands should I look at first?” after FCC has resolved line role/type/strength. Exact products/spools may be named as evidence or optional examples when a product-specific distinction materially helps, but they are not canonical required SKUs and this gate does not convert Fishing Line into Tiered Specific Products.


The order is current / revision allowed and may be refreshed when evidence or current manufacturer lineups materially change without changing the Specification + Reputable Brands architecture.


**Exact next checkpoint:** 2B.2 — clarify the What Should I Throw / Fishing Recommendation -> commercial product-guidance handoff boundary.




# D027 – Regional Rig Library and Core Rigs








The initial 20-Rig library was selected and validated using Northeast Oklahoma and Southwest Kansas as its original regional-practicality scope.








The approved initial library is:








1. Fixed Bobber Rig
2. Basic Bottom Rig
3. Jighead + Soft Plastic
4. Slip Bobber Rig
5. Inline Spinner Setup
6. Texas Rig
7. Weightless Soft-Plastic Rig
8. Wacky Rig
9. Ned Rig
10. Drop Shot Rig
11. Carolina Rig
12. Live-Bait Slip-Sinker Rig
13. Three-Way Rig
14. Neko Rig
15. Shaky Head Rig
16. Free Rig
17. Jika Rig
18. Punch / Pegged Texas Rig
19. Double-Jig Crappie Rig
20. Bottom-Bouncer / Spinner Rig








The existing 20 Rigs are **Validated / Finalized** and remain canonical.








A six-rig confidence-building Core subset is presented in the approved order:








- Fixed Bobber Rig
- Basic Bottom Rig — especially useful for catfish
- Jighead + Soft Plastic
- Inline Spinner Setup
- Texas Rig
- Slip Bobber Rig








The product teaching principle remains to help a newer angler become successful with a small set of broadly productive Rigs before expanding the fishing arsenal.








D043 confirms Jighead + Soft Plastic and Inline Spinner Setup are canonical ready-to-fish terminal setups within the Rig Guide. D046 owns the current learning-tier navigation and current Core presentation wording.








The Companion's forward content focus expanded to the Four-State region under D057. The additive Four-State Rig adequacy audit was completed during FISH-005 using the approved rule that valid existing Rigs remain canonical unless verified evidence demonstrates a true gap.








Audit result:








- all original 20 Rigs remain valid and canonical,
- one material beginner setup gap was identified,
- **Split-Shot Bait Rig** was approved and implemented as canonical Rig #21,
- the six-rig Core subset remains unchanged,
- no other material ordinary-Rig method gap remains open from the completed Four-State audit.








Split-Shot Bait Rig is a simple live/natural-bait setup using fixed split shot above the hook without a float, sliding sinker, swivel, or required leader system. Its purpose is beginner bait presentation for drifting, tight-lining, or lightly weighting bait near the bottom; it is not a generic bass-finesse catch-all.








Specialized targeting methods do not automatically become ordinary canonical Rigs. Gar rope-lure targeting and Paddlefish snagging remain outside the ordinary Version 1 Rig library unless a later explicit specialist-method decision reopens them.








**Current implementation status:** 21-Rig library Validated; Four-State Rig adequacy audit Complete; Split-Shot Bait Rig implemented.








**Future trigger:** reopen Rig adequacy only when later regional scope or verified method evidence demonstrates a materially missing ready-to-fish setup. Do not routinely repeat the completed FISH-005 audit.








**Canonical owners:** D027, D057, `data-model/03-RIGS.md`, and `workstreams/FISH-GUIDE-PHASE-0.md`.
# D043 – Ready-to-Fish Terminal Setups in the Rig Guide








The Rig Guide teaches complete, ready-to-fish terminal setups.








A canonical Rig may therefore be:








- an assembly of several terminal-tackle components,
- a weighted hook paired with a soft plastic,
- or a complete lure tied directly to the main line or leader.








The defining test is whether the record teaches a complete terminal configuration the angler can assemble or connect and then fish. The number of component records does not determine whether it belongs in the Rig Guide.








Under this rule:








- **Jighead + Soft Plastic** is a canonical Rig Guide record referencing `jighead` and `soft-plastic`.
- **Inline Spinner Setup** is a canonical Rig Guide record referencing `inline-spinner`.








Reusable retrieve and presentation behavior still belongs to Technique under D024. The Rig record owns physical setup, connection, component selection, setup-specific mistakes, and safety.
# D054 – Intermediate Rig Tier Membership








The complete Intermediate tier is:








1. Drop Shot Rig
2. Carolina Rig
3. Live-Bait Slip-Sinker Rig
4. Three-Way Rig








This tier is the deliberate difficulty step after Beginner+ because these Rigs introduce more precise leader management, bottom-contact tuning, multi-component relationships, or multi-branch rigging while remaining broadly practical for the approved regional library.








This historical tier decision remains part of the finalized 20-Rig library.
# D057 – Fish Guide Four-State Version 1 Scope








**Decision:** The Fish Guide Version 1 regional scope is Northeast Oklahoma, Southeast Kansas, Southwest Missouri, and Northwest Arkansas.








This Four-State direction is also the Companion's forward regional content focus. Existing validated domains retain their original validation context and are progressively reconciled rather than retroactively rewritten.








**Reason:** The region reflects the user's near-term fishing focus and has substantial freshwater species/method overlap with the earlier Northeast Oklahoma / Southwest Kansas scope, making progressive reconciliation more accurate and lower-risk than project-wide invalidation.








**Current implementation status:** Approved and active. The Fish Guide Version 1 milestone is closed: all 30 locked Fish have completed the Four-State production direction through Wave 4, with desktop/mobile approval and post-push repository-integrity validation.








**Future trigger:** apply Four-State adequacy as each domain is audited or materially modified. Significant rewiring requires explicit discussion before implementation.








**Canonical owners:** D057, Fish Phase 0 workstream, `PROJECT.md`, `ROADMAP.md`, and Fish data-model documentation.
# D066 – Nationwide Regulations Resource Gateway and Coverage Exception








**Decision:** Regulations becomes the next product milestone after the closed Fish Guide. The feature expands from the current Oklahoma-only external link into an in-app, state-first **U.S. State Fishing Resource Gateway** covering the **48 contiguous U.S. states** as its initial geographic scope.








The broader Regulations coverage is an explicit exception to the application's Four-State curated-content focus. It does not automatically expand Fish, Rig, recommendation, Technique, Tackle, or other curated knowledge domains beyond their separately approved regional scope.








The approved initial information architecture is:








```text
Dashboard
-> Regulations
-> Choose a State
-> State Fishing Regulations & Resources
-> official state destinations
```








The Dashboard name remains **Regulations**. The state landing page may organize official resources using a reusable taxonomy such as:








**Before You Fish**








- Fishing Regulations
- Licenses & Permits
- Seasons / Size / Bag-Limit resources
- Special Regulations / Special Waters
- Species-Specific Regulations
- Special Permits / Tags / Stamps








**Plan Your Trip**








- Where to Fish / Public Access
- Stocking Information
- Official Fishing Reports / Forecasts
- Aquatic Invasive Species information
- Other Official Resources








The taxonomy is normalized for user navigation, but individual states are not forced into identical agency structures. A state exposes only the official resources that actually exist and materially help an angler.








Freshwater Fishing Companion stores the **resource directory**, not the changing legal rule itself. The future state/resource model may own state identity, agency identity, resource category, title/description, authoritative URL, active state, and human verification/freshness metadata. It must not make the application the authoritative owner of daily limits, possession limits, minimum lengths, season dates, legal methods, waterbody exceptions, or comparable legal requirements during this milestone.








Regulatory/legal links must resolve to the responsible state authority or another clearly authoritative official government destination. The application does not provide its own legal interpretation. It may explain what a link is for, but the linked authority owns the actual rule.








No automatic GPS/location detection or persistent preferred-state selection is part of this milestone. State selection is manual. After D067's User Data architecture is implemented, a later preference may identify preferred states and prioritize them in the selector while preserving access to the full supported list.








The data/navigation design must not hard-code a 48-state structural ceiling; Alaska, Hawaii, territories, or other jurisdictions may be evaluated later as additive content without requiring a model rewrite.








**Reason:** The application's geographic focus expanded beyond Oklahoma, making a direct ODWC-only Regulations card inconsistent with the product. A nationwide official-resource gateway provides high practical value to anglers without requiring the Companion to maintain volatile legal data across dozens of jurisdictions. Linking to official authorities preserves freshness and legal ownership, dramatically reduces maintenance risk, and avoids creating false confidence from stale copied rules. Because this domain is resource navigation rather than curated fishing knowledge, nationwide coverage can expand without implying nationwide Fish/recommendation completeness.








The state-first design also creates a clean future personalization point: preferred states can later improve ordering without hiding other states or coupling Regulations to GPS/location privacy decisions prematurely.








**Implementation history:** D066 was implemented and the 48-state Regulations production milestone closed on 2026-08-27. Current implementation status belongs to `WORKING_STATE.md` / `ROADMAP.md`; this decision preserves the durable product boundary rather than acting as a mutable status owner.








**Future trigger:** reopen D066 only if the supported-jurisdiction scope, legal-resource ownership boundary, or state-first gateway architecture materially changes. Routine link/resource maintenance follows `EXTERNAL_REFERENCE_MAINTENANCE.md` and does not reopen this decision.








**Canonical owners:** D066 owns the durable product/architecture boundary; `ROADMAP.md` owns milestone order; `PROJECT.md` owns the geographic-scope exception; `ARCHITECTURE.md` owns source/knowledge boundaries; `EXTERNAL_REFERENCE_MAINTENANCE.md` owns ongoing link-maintenance policy; the closed Regulations workstream is retained under `archive/workstreams/regulations/`.








Permanent principle: **normalize navigation to official state resources; do not become the source of changing fishing law.**








### 2026-09-15 — Recommendation Legality Scope Refinement — APPROVED / build details deferred








The nationwide Regulations Gateway remains link-based, authoritative-source-first, and available for all 48 contiguous states. Recommendation may present a universal regulatory caution and route the user to the applicable official state resources without claiming that FCC evaluated legality. This caution requires no structured legal-rule database.








Version 1 structured Recommendation legality, if implemented, is deliberately bounded to **Oklahoma, Kansas, Missouri, and Arkansas**. It is a negative-first constraint layer rather than a comprehensive legality database: FCC may block a Recommendation candidate only when an applicable authoritative structured constraint that FCC deliberately tracks is established. Incomplete or insufficient coverage resolves safely as **Compliance Unconfirmed** rather than assumed legality. For the other 44 contiguous states, structured Recommendation legality is **Not Evaluated** and the user is directed to the existing official Regulations resources.








**No Known Blocking Constraint** may be used only when the applicable bounded constraint scope has been explicitly reviewed as sufficiently complete to support that statement; it never means that FCC guarantees the recommendation is legal. The bounded layer should track only constraints that materially affect FCC Recommendation candidates. It does not require copying comprehensive season tables, bag/possession limits, length limits, every waterbody exception, or other legal data that Recommendation does not need.








FCC must not scrape or infer changing law from the resource directory. Exact structured constraint fields, authored scope, evidence/freshness rules, maintenance mechanics, candidate effects, and user-facing presentation are deferred to the G4-LEGAL build. The resource gateway and structured constraint layer remain separate maintenance concerns.








# D069 – What Should I Throw Prerequisite Architecture and Phase 0 Handoff








**Decision:** What Should I Throw Phase 0 planning is complete. The feature will eventually answer what the angler should throw now using dual guidance: **Best Overall** is contextually strongest independent of availability, while **Best Currently Available** is the strongest executable recommendation from tackle actually available to the angler. Unavailable strong options remain visible with missing requirements; if one recommendation wins both states, the UI combines the states rather than duplicating the recommendation.








V1 requires a target Fish. Required current-context inputs are access/position and waterbody; observable context includes depth/zone, cover/structure, water clarity, and current where relevant. Season, light/sky, numeric water temperature, and bait preference are optional refiners. Unknown/Not sure is valid input absence and must degrade gracefully rather than block recommendations.








The feature composes canonical knowledge without duplicating it:








- Rig owns physical terminal assembly/configuration and **How to Rig It**.
- Lure/Bait owns canonical fishing-relevant lure/bait identity presented to Fish.
- Technique owns reusable presentation/retrieve/cadence/movement/strike guidance and **How to Fish It**.
- Conditions owns reusable environmental/situational vocabulary.
- Fish retains intrinsic species facts, including stable habitat/waterbody associations. G4-RIF-1A.1 through G4-RIF-1A.4 approve normalizing stable Fish habitat concepts into a canonical Habitat domain plus explicit Fish↔Habitat associations, keeping Habitat semantically distinct from current Conditions, using explicit authored Habitat↔Condition correspondence where concepts genuinely overlap, and keeping temperature outside physical Habitat unless later stable Fish Reference Knowledge is independently justified; Fish remains the semantic owner of species-intrinsic facts even when relationship storage lives outside `fish.js`.
- Recommendation Decision Knowledge owns contextual selection, ranking, rationale, exact context-dependent parameters, and cross-domain context-specific suitability that cannot be represented truthfully as stable canonical facts or relationships. It does not duplicate stable Fish habitat knowledge.
- My Tackle/User Knowledge owns authoritative persistent ownership once implemented; temporary/current availability must not silently create ownership.








A distinct Lure/Bait Reference domain is approved. Tackle remains the owner of functional fishing equipment and Rig-building components; Lure/Bait owns bait/lure identities such as Stick Worm, Craw, Paddle-tail Swimbait, Spinnerbait, Crankbait, Jerkbait, Inline Spinner, Spoon, Minnow, Nightcrawler, and Cricket. Commercial brand/model/SKU identity is not canonical Lure/Bait Reference Knowledge. Exact recommended size, weight, color/pattern, and presentation remain Recommendation Decision Knowledge; sparse intrinsic subtype attributes may be added only when demonstrated by recommendation, compatibility, or inventory matching.








Conditions V1 uses a flat canonical vocabulary grouped by Waterbody, Access/Position, Depth/Zone, Cover/Structure, Water Clarity, Current, Season, and Light/Sky. `Not sure` is not a Condition entity. Water temperature is not a canonical Condition record or band; it remains optional numeric Recommendation Context. Fish intrinsic habitat/waterbody facts remain Fish-owned. Existing Rig `conditionTags[]` require explicit migration review; contextual “works well in” semantics move to Recommendation Decision Knowledge rather than being blindly converted into Condition relationships.








Technique V1 owns canonical reusable presentation behaviors rather than equipment setup, broad strategy, or Fish/Condition-specific advice. Reusable instructional attributes may include movement type, cadence, rod action, reel action, ordered instructions, strike cues, common mistakes, and beginner tips where demonstrated. Exact Technique vocabulary and optional fields may be refined during the production pilot without changing the semantic boundary.








Intrinsic compatibility is Reference Knowledge stored once in a typed Compatibility Relationship domain supporting Rig↔Lure/Bait, Rig↔Technique, and Lure/Bait↔Technique. Records identify relationship type and both canonical participants, use deterministic IDs, and contain lifecycle metadata but no ranking, weighting, confidence, Fish applicability, Condition applicability, or contextual suitability. Reverse navigation is derived. Missing compatibility during staged authoring is not automatically incompatibility until the relevant authored scope is declared complete. Three-way Rig/Lure/Technique combinations are derived from pairwise compatibility unless future evidence proves pairwise modeling insufficient.








**Prerequisite sequence:** The approved dependency order remains:








1. Conditions Production Foundation;
2. Lure/Bait Reference Production Foundation;
3. Techniques Production Foundation;
4. Settings / User Data Architecture Gate;
5. scoped My Tackle Availability Foundation;
6. What Should I Throw recommendation engine + UX pilot.








Steps 1-5 are **IMPLEMENTED / VALIDATED / CLOSED**. The Recommendation Prerequisites Foundation, GATE-006 Settings / User Data Architecture, and GATE-007 My Tackle Availability Foundation are CLOSED / PASS. Step 6, **What Should I Throw recommendation engine + UX pilot**, is now ACTIVE / REQUIRED under GATE-004. Full Tackle Reference / Find Tackle, Catch Log, Global Search, and Favorites are not prerequisites unless later evidence demonstrates a direct dependency.








D069 refines the roadmap trigger in D067 without changing D067's permanent ownership principle: stable User Knowledge identity/persistence architecture precedes authoritative My Tackle, follows the completed Reference Knowledge prerequisites, and precedes What Should I Throw production.








**Phase 0 handoff history:** What Should I Throw Phase 0 closed as **PLANNING COMPLETE / PRODUCTION DEFERRED** and handed off through Conditions → Lure/Bait → Techniques → Settings/User Data → My Tackle Availability. Every prerequisite is now closed. GATE-004 is the active production gate.








**Current implementation status:** GATE-004 remains ACTIVE / REQUIRED from verified GitHub `main` baseline `38c1ab70b51a8ecd498b34068d34bacb9b7c3ace`. G4-CAND, G4-EQUIP, G4-SIMPLE, G4-LEGAL, and G4-CTX remain COMPLETE / APPROVED WITH REVISION ALLOWED at the semantic-contract level, and the bounded Recommendation runtime foundation is landed. G4-RIF Recommendation Input Foundation is CLOSED / PASS after G4-RIF-1D. G4-DK-1A through G4-DK-1G.4 are COMPLETE / APPROVED WITH REVISION ALLOWED, closing the Authoring Evidence & Validation Contract. G4-DK-2 production authoring is intentionally held while the approved project-wide **V1 Completion Audit & Roadmap** reconciles what is user-usable, implemented-but-incomplete, foundation-only, approved-but-unbuilt, design-incomplete, deferred, or parked and establishes the highest-value remaining Version 1 critical path.








## GATE-004 Production Refinements — Approved Semantic Checkpoints








### G4-RIF-1A.1 — Fish Habitat Domain Direction — APPROVED / revision allowed








Stable species habitat knowledge remains Fish-domain Reference Knowledge, but Version 1 Recommendation should not require repeated free-standing habitat definitions inside every Fish record or rely on an undifferentiated `habitatTags[]` bag for machine reasoning. The approved direction is to normalize individual Habitat concepts in a canonical Habitat domain and store explicit Fish↔Habitat associations by stable IDs. The same authoritative association may support Fish Detail presentation and Recommendation reasoning without requiring the UI to display all stored structure.








Normalization applies to individual Habitat facts, not reusable combination profiles. Shared habitat profiles such as a single `shallow-cover` bundle are not approved because species-specific differences would couple otherwise independent Fish records and create profile proliferation. Each Fish instead references the applicable canonical Habitat concepts explicitly.








Physical storage outside `fish.js` does not change semantic ownership: Fish owns whether a species is intrinsically associated with a Habitat concept; the Habitat registry owns the reusable Habitat concept identity/meaning. Exact production file names, record shape, lifecycle fields, final Fish↔Habitat assignments, lifecycle metadata, and migration mechanics remain revision/implementation work.








### G4-RIF-1A.2 — Habitat ↔ Condition Relationship Semantics — APPROVED / revision allowed








Habitat and Condition remain separate canonical concepts because they represent different assertions. Habitat describes a stable environmental association of a Fish species; Condition describes what is currently true where the angler is fishing. Where concepts genuinely correspond, FCC uses explicit authored Habitat↔Condition relationships rather than shared identity, label/string matching, or runtime fuzzy conversion. A correspondence may be one-to-one, many-to-one, or one-to-many when explicitly justified. Missing correspondence is absence of authored equivalence, not incompatibility.








Habitat↔Condition correspondence establishes semantic/environmental comparability only. It does not encode Fish preference strength, candidate eligibility, contextual suitability, weighting, ranking, or Recommendation score. Season, light/sky, water clarity, access/position, and other situational Conditions do not require Fish Habitat counterparts merely because they exist in Recommendation Context. Fish waterbody associations remain a separate Fish fact and are not folded into the Habitat vocabulary by this checkpoint.








### G4-RIF-1A.3 — Physical Habitat Vocabulary + Dimensions — APPROVED / revision allowed








Version 1 physical Habitat is bounded to **thirteen** concepts organized by semantic dimension after the approved rock-structure/substrate recheck and Pool / Deep Hole addition:








- **Cover:** Aquatic Vegetation; Wood / Brush.
- **Water Zone:** Open Water; Shallow Water; Deep Water.
- **Water Movement:** Still / Slow Water; Flowing Water.
- **Structure:** Rock / Boulder Structure; Channel; Pool / Deep Hole.
- **Bottom / Substrate:** Rocky / Gravel Bottom; Sandy Bottom; Muddy / Silty Bottom.








The recheck establishes that rock/boulder structure and bottom substrate are distinct environmental facts and must not share one semantic concept. Legacy `Rock` is therefore not blindly normalized to one target: species evidence determines whether it represents **Rock / Boulder Structure**, **Rocky / Gravel Bottom**, or both. `Grass` becomes **Aquatic Vegetation**; `Timber` and `Brush` normalize to **Wood / Brush**; `Mud` becomes **Muddy / Silty Bottom**; `Current` becomes **Flowing Water**; **Still / Slow Water**, **Sandy Bottom**, **Rock / Boulder Structure**, and **Pool / Deep Hole** are demonstrated V1 additions. **Channel** remains a distinct Habitat concept. **Pool / Deep Hole** means a localized pool, depression, scour, or hole that is distinctly deeper and often slower than the surrounding water; it is a Structure concept rather than a synonym for the absolute **Deep Water** zone.








Legacy `habitatTags[]` must not be migrated by blind rename. The 30-Fish audit plus the bounded rock/substrate recheck demonstrate that species-level correction or enrichment is required. Final Fish↔Habitat assignments therefore use explicit evidence-backed reconciliation.








Fish ID/detail UX must be reconciled when this model is implemented. Expanded Habitat knowledge must not simply become a longer undifferentiated tag/pill list. User-facing presentation should group useful concepts by meaningful dimensions, suppress empty groups, remain compact on mobile, and may expose less detail than the underlying Recommendation model. Exact visual treatment is deliberately not locked here.








Temperature remains outside physical Habitat under G4-RIF-1A.4. The existing optional numeric water-temperature Recommendation input remains unchanged.








G4-DK-1A remains HELD until the bounded Recommendation Input Foundation review completes.








### G4-RIF-1A.4 — Temperature Semantics — APPROVED / revision allowed








Water temperature is a separate environmental Recommendation Context input rather than a physical Habitat concept or categorical Condition vocabulary. Version 1 retains optional numeric water temperature and does not add Cold/Cool/Warm Condition entities or require a Coldwater/Coolwater/Warmwater classification on every Fish. Unknown/Not sure remains valid input absence and Recommendation must degrade gracefully.








Numeric water temperature is interpreted through sparse, evidence-backed Fish-specific Recommendation Decision Knowledge only where temperature materially affects candidate selection, ranking, presentation, or rationale. Stable reusable species-intrinsic thermal facts may later be promoted into Fish Reference Knowledge when repeated use demonstrates that they are independently reusable; arbitrary universal temperature thresholds and mandatory thermal categories are not approved. Legacy Fish `Cold Water` does not migrate into physical Habitat.








G4-DK-1A remains HELD until the bounded Recommendation Input Foundation review completes. G4-RIF-1A is now CLOSED / PASS at the semantic-review level after approval of the exact correspondence/ID/bridge closeout below; production migration remains pending implementation.
















### G4-RIF-1A.5 — Fish↔Habitat Association Set — APPROVED / revision allowed








The final Version 1 Fish↔Habitat association set has been reconciled species-by-species against the approved **13-concept** physical Habitat vocabulary. Legacy `habitatTags[]` are evidence inputs only and must not be preserved by blind rename when stronger habitat evidence supports correction or enrichment. The bounded all-30-Fish recheck triggered by Pool / Deep Hole and the narrowed Channel semantics is **COMPLETE / APPROVED WITH REVISION ALLOWED**. No canonical Fish ID, Fish name, or Fish identity changes are required.








**Approved Bass associations — 6 Fish:**








- **Largemouth Bass:** Aquatic Vegetation; Wood / Brush; Shallow Water; Still / Slow Water; Pool / Deep Hole.
- **Smallmouth Bass:** Rocky / Gravel Bottom; Rock / Boulder Structure; Open Water; Flowing Water; Pool / Deep Hole.
- **Spotted Bass:** Rocky / Gravel Bottom; Flowing Water; Deep Water; Channel; Pool / Deep Hole.
- **White Bass:** Open Water; Deep Water; Flowing Water; Rocky / Gravel Bottom; Sandy Bottom; Pool / Deep Hole.
- **Striped Bass:** Open Water; Deep Water; Flowing Water.
- **Hybrid Striped Bass:** Open Water; Deep Water; Flowing Water.








**Approved Sunfish & Crappie associations — 9 Fish:**








- **Bluegill:** Aquatic Vegetation; Wood / Brush; Shallow Water; Still / Slow Water; Pool / Deep Hole.
- **Redear Sunfish:** Aquatic Vegetation; Wood / Brush; Shallow Water; Still / Slow Water; Pool / Deep Hole.
- **Green Sunfish:** Aquatic Vegetation; Wood / Brush; Shallow Water; Still / Slow Water; Pool / Deep Hole.
- **Longear Sunfish:** Aquatic Vegetation; Rocky / Gravel Bottom; Sandy Bottom; Flowing Water; Pool / Deep Hole.
- **Northern Rock Bass:** Aquatic Vegetation; Wood / Brush; Rock / Boulder Structure; Deep Water; Flowing Water; Pool / Deep Hole.
- **Warmouth:** Aquatic Vegetation; Shallow Water; Still / Slow Water.
- **Ozark Bass:** Rock / Boulder Structure; Wood / Brush; Deep Water; Flowing Water; Pool / Deep Hole.
- **Black Crappie:** Aquatic Vegetation; Wood / Brush; Open Water; Still / Slow Water.
- **White Crappie:** Wood / Brush; Open Water; Still / Slow Water.








**Approved Catfish associations — 5 Fish:**








- **Channel Catfish:** Wood / Brush; Deep Water; Flowing Water; Pool / Deep Hole. The earlier Channel association is removed under the narrowed Channel definition.
- **Blue Catfish:** Open Water; Deep Water; Flowing Water; Channel; Rocky / Gravel Bottom; Sandy Bottom; Pool / Deep Hole.
- **Flathead Catfish:** Wood / Brush; Deep Water; Still / Slow Water; Pool / Deep Hole.
- **Black Bullhead:** Muddy / Silty Bottom; Shallow Water; Still / Slow Water; Pool / Deep Hole.
- **Yellow Bullhead:** Aquatic Vegetation; Shallow Water; Still / Slow Water; Pool / Deep Hole.








**Approved Walleye / Sauger / Saugeye associations — 3 Fish:**








- **Walleye:** Open Water; Deep Water; Rocky / Gravel Bottom; Sandy Bottom; Rock / Boulder Structure; Flowing Water; Pool / Deep Hole.
- **Sauger:** Deep Water; Flowing Water; Channel; Rocky / Gravel Bottom; Sandy Bottom; Pool / Deep Hole.
- **Saugeye:** Open Water; Deep Water; Sandy Bottom; Rock / Boulder Structure.








**Approved Trout associations — 2 Fish:**








- **Rainbow Trout:** Rocky / Gravel Bottom; Rock / Boulder Structure; Flowing Water; Deep Water; Pool / Deep Hole. Legacy `Open Water` and `Cold Water` are not carried forward into physical Habitat.
- **Brown Trout:** Wood / Brush; Deep Water; Flowing Water; Pool / Deep Hole. Legacy `Cold Water` is not carried forward into physical Habitat.








**Approved Common Carp / Freshwater Drum / Gar / Paddlefish associations — 5 Fish:**








- **Common Carp:** Aquatic Vegetation; Shallow Water; Open Water; Muddy / Silty Bottom; Pool / Deep Hole.
- **Freshwater Drum:** Deep Water; Sandy Bottom; Muddy / Silty Bottom; Pool / Deep Hole. The earlier Channel association is removed under the narrowed Channel definition; legacy `Rock` remains excluded as a general physical Habitat association.
- **Longnose Gar:** Deep Water; Still / Slow Water; Pool / Deep Hole. Legacy `Current` is not carried forward as `Flowing Water`.
- **Spotted Gar:** Aquatic Vegetation; Wood / Brush; Still / Slow Water.
- **Paddlefish:** Open Water; Deep Water; Flowing Water; Still / Slow Water. The two water-movement associations are intentional and represent distinct common environments rather than incompatibility.








The approved 30-Fish recheck changes 22 Fish from the prior baseline. Pool / Deep Hole is added to those 22 Fish; Spotted Bass also gains Channel; Channel Catfish and Freshwater Drum lose Channel. Under the narrowed definition, the approved Fish↔Channel association set is exactly **Spotted Bass, Blue Catfish, and Sauger**. No Fish Habitat counterpart for Drop-off / Deep Structure is added at this checkpoint; that remains current-context Condition knowledge and may contribute through Recommendation Decision Knowledge where applicable.








G4-RIF-1A.5 is **COMPLETE / APPROVED WITH REVISION ALLOWED** for all 30 Version 1 Fish. Production remains unchanged until the later approved migration is explicitly implemented and validated.








The corresponding Conditions target is also revised for the later migration. The existing mixed `cover-structure` category is approved to split into **Cover / Exposure** (`cover-exposure`) and **Structure / Contour** (`structure-contour`) rather than increasing the former zero-to-two limit. Cover / Exposure contains **Open Water, Light Cover, Heavy Cover, Vegetation, Wood / Brush, and Dock / Man-made Cover**. It is optional multi-select with semantic exclusions rather than an arbitrary numeric cap: **Open Water** cannot coexist with another Cover / Exposure selection, and **Light Cover** and **Heavy Cover** cannot coexist with each other; compatible cover-type selections may coexist and may pair with one density state. Structure / Contour contains **Rock / Boulder Structure, Channel, Drop-off / Deep Structure, and Pool / Deep Hole** and is optional multi-select with no arbitrary hard maximum because those physical features can coexist.








The existing `rock` Condition is replaced by **`rock-boulder` — Rock / Boulder Structure**. Its approved summary is: **“Hard rock structure such as boulders, rock piles, riprap, ledges, or rocky banks that provides cover, edges, current breaks, or fish-holding structure.”** Bottom substrate remains a separate optional Recommendation Context group with **Rocky / Gravel Bottom**, **Sandy Bottom**, and **Muddy / Silty Bottom**; `Not sure` remains input-state absence. The approved Condition target is now **40 records / 10 groups**. The exact approved Bottom / Substrate IDs are **`bottom-rocky-gravel`**, **`bottom-sandy`**, and **`bottom-muddy-silty`**. Production remains unchanged until an explicit migration is authorized.








Fish waterbody vocabulary is also approved to normalize **`Creek` → `Creek / Stream`** during the later Fish migration so the Fish-owned waterbody concept aligns directly with the existing `creek-stream` Waterbody Condition. This is a label/value normalization, not a new waterbody concept.








The current production **`drop-off-channel-deep-structure` -- Drop-off / Channel / Deep Structure** Condition is approved to split during the later migration into two distinct Conditions:








- **`channel` -- Channel:** “A defined river, creek, or submerged former stream course, including a main channel or another distinct channel corridor within the waterbody.”
- **`drop-off-deep-structure` -- Drop-off / Deep Structure:** “A pronounced underwater depth or contour change such as a drop-off, ledge, break, hump, or similar subsurface structure, separate from a defined channel.”








The split is semantic rather than cosmetic: a Channel Habitat association may correspond to `channel`, but must not automatically correspond to a generic drop-off, ledge, hump, or other deep structure. A channel edge/break may legitimately be represented by both Conditions when both facts are observed.








**`pool-deep-hole` — Pool / Deep Hole** is approved as both a canonical physical Habitat concept and a current-context Condition. Its approved Condition summary is: **“A localized pool, depression, scour, or hole that is distinctly deeper and often slower than the surrounding water, creating a distinct fish-holding, resting, or feeding area.”** It belongs to Habitat **Structure** and Condition **Structure / Contour**, not Depth / Zone; therefore a location may be Pool / Deep Hole without being absolutely Deep, and Deep water does not imply a Pool / Deep Hole.








This semantic approval does not itself authorize production migration. The bounded all-30-Fish association recheck is complete and approved.








### G4-RIF-1A Closeout — Fish Recommendation Input Adequacy — CLOSED / PASS / revision allowed








The exact Version 1 Habitat↔Condition correspondence set is approved for the later migration. Correspondence establishes environmental comparability only; it does not encode Fish preference strength, candidate eligibility, contextual suitability, weighting, ranking, or Recommendation score. Missing correspondence is not incompatibility.








- **Aquatic Vegetation** ↔ `vegetation`.
- **Wood / Brush** ↔ `wood-brush`.
- **Open Water** ↔ `open-water`.
- **Shallow Water** ↔ `shallow`.
- **Deep Water** ↔ `deep`.
- **Still / Slow Water** ↔ `current-none` and `current-light`.
- **Flowing Water** ↔ `current-light`, `current-moderate`, and `current-strong`.
- **Rock / Boulder Structure** ↔ `rock-boulder`.
- **Channel** ↔ `channel`.
- **Pool / Deep Hole** ↔ `pool-deep-hole`.
- **Rocky / Gravel Bottom** ↔ `bottom-rocky-gravel`.
- **Sandy Bottom** ↔ `bottom-sandy`.
- **Muddy / Silty Bottom** ↔ `bottom-muddy-silty`.








`current-light` intentionally corresponds to both **Still / Slow Water** and **Flowing Water** because light current is the real transition zone between those stable Fish habitat concepts. This overlap does not itself create ranking or preference semantics.








No Fish Habitat counterpart is created for **Light Cover**, **Heavy Cover**, **Dock / Man-made Cover**, or **Drop-off / Deep Structure**, and no Habitat counterpart is required for Access/Position, Water Clarity, Season, Light/Sky, or other situational Conditions.








The exact Bottom / Substrate Condition IDs are locked as `bottom-rocky-gravel`, `bottom-sandy`, and `bottom-muddy-silty` under `bottom-substrate`.








Fish waterbody correspondence remains a separate Fish-owned bridge rather than Habitat correspondence: **Pond** ↔ `pond`; **Lake** ↔ `lake`; **Reservoir** ↔ `reservoir`; **River** ↔ `river`; **Creek / Stream** ↔ `creek-stream`. Fish `Creek` therefore normalizes to **Creek / Stream** during migration. This bridge also establishes environmental equivalence only and carries no preference, recommendation weight, score, or eligibility semantics.








The approved target `open-water` summary is **“Water with little immediate cover around the area being fished.”** This removes the legacy implication that Open Water cannot coexist with Structure / Contour selections such as Channel, Rock / Boulder Structure, Drop-off / Deep Structure, or Pool / Deep Hole.








**G4-RIF-1A closeout result:** PASS. No remaining Fish Recommendation-input adequacy gap is identified. G4-RIF remains ACTIVE / REQUIRED; the next authorized checkpoint is **G4-RIF-1B — Fish↔Rig Suitability Adequacy**. G4-DK-1A remains HELD until the full G4-RIF sequence completes. No production Habitat/Condition/Fish-waterbody migration is authorized by this closeout alone.








### G4-RIF-1B.1 — Fish↔Rig Suitability Semantic Boundary — APPROVED / revision allowed








Fish↔Rig Suitability is a separate stable Reference Knowledge relationship from `FISH_RIG_GUIDANCE`. A positive suitability edge means the Rig is a defensible ordinary method for intentionally targeting the Fish under at least one plausible Version 1 fishing context, assuming an appropriate compatible Lure/Bait and Technique are selected. Suitability does not mean the Rig is always appropriate, preferred, currently suitable under the angler's observed Conditions, currently executable, legal, simplest, or best.








`FISH_RIG_GUIDANCE` remains curated Fish Guide starting guidance in Decision Knowledge. It is intentionally narrower, may retain Primary/Alternative priority and explanatory reasons, and must not be expanded into the complete Recommendation eligibility graph. Every active Fish Guide Rig recommendation must ultimately be backed by the completed Fish↔Rig Suitability set, while most suitability edges need not appear in Fish Guide guidance.








Fish↔Rig Suitability itself carries no score, strength, priority, rank, confidence, contextual Condition weighting, rationale, availability state, legality state, or simplicity treatment. Reverse Rig→Fish presentation, if ever needed, derives from the same relationship set rather than duplicate inverse arrays.








Suitability must be configuration-aware when a canonical Rig family contains materially distinct configurations. In particular, admitting one Direct-Tie Lure Setup configuration for a Fish must not silently admit every Direct-Tie configuration. Exact configuration reference shape, deterministic relationship identity, lifecycle fields, serialization, and validation belong to G4-RIF-1B.2.








Until the complete Version 1 Fish↔Rig authored scope is explicitly declared complete, a missing edge is not authoritative exclusion. After completeness, edge presence means admitted to the Version 1 Fish-specific Rig candidate pool; edge absence means unsupported as an ordinary Version 1 targeting Rig for that Fish, not that the Rig could never catch that Fish.








**G4-RIF-1B.1 result:** COMPLETE / APPROVED WITH REVISION ALLOWED.








### G4-RIF-1B.2 — Fish↔Rig Suitability Relationship Granularity + Record Contract — APPROVED / revision allowed








Fish↔Rig Suitability uses a dedicated Layer-1 Reference Knowledge registry, working production owner `data/fish-rig-suitability.js` / `FISH_RIG_SUITABILITY_RELATIONSHIPS`. The authoritative granularity is one positive record per **Fish + Rig + optional Rig configuration**. Ordinary Rigs use `rigConfigurationId: null`; any Rig with materially distinct canonical `configurations[]` requires the exact non-null configuration ID and does not permit a configurationless all-configurations suitability edge. Configuration identity remains scoped to its parent Rig.








The exact Version 1 record shape is:








```text
id
fishId
rigId
rigConfigurationId
createdVersion
lastModifiedVersion
isActive
```








No `lureBaitId` is duplicated in suitability: when a Rig configuration owns a canonical Lure/Bait requirement, Recommendation resolves that through the canonical Rig configuration. No `relationshipType`, participant-type fields, priority, reason, score, strength, rank, confidence, Condition/Habitat IDs, Technique IDs, difficulty, availability, legality, or other Recommendation semantics belong in this relationship.








Deterministic IDs are `fish-rig-suitability-<fishId>-to-<rigId>` for ordinary Rigs and `fish-rig-suitability-<fishId>-to-<rigId>-config-<rigConfigurationId>` for configured Rigs. Runtime consumers read participant fields and must not parse IDs to recover participants. Duplicate semantic tuples or duplicate deterministic IDs are invalid.








Validation requires active/resolving Fish and Rig participants; `rigConfigurationId` must be null when the Rig has no canonical configurations and must resolve to an exact configuration inside the referenced Rig when configurations exist. A configured Rig cannot use a null configuration edge, and a non-configured Rig cannot name a configuration. Reverse Rig→Fish views are derived rather than duplicated.








Every active `FISH_RIG_GUIDANCE` recommendation must resolve to a positive Fish↔Rig Suitability edge. For configured Rigs, validation resolves the guidance's explicit Lure/Bait reference through the Rig's canonical configuration contract and requires the exact matching configuration edge rather than relying on coincidental string equality. Existing Fish Guide guidance remains Decision Knowledge and is not rewritten merely to use `rigConfigurationId`.








Version 1 permits zero suitability edges for a Fish when the completed evidence audit supports that result. No negative records are created. Before the complete authored scope is declared complete, a missing edge remains no conclusion; after completeness, a missing edge means unsupported as an ordinary Version 1 targeting Rig/configuration for that Fish.








**G4-RIF-1B.2 result:** COMPLETE / APPROVED WITH REVISION ALLOWED. Exact resume: **G4-RIF-1B.3 — 30-Fish Fish↔Rig Suitability authored-set audit**.








### G4-RIF-1B.3 — 30-Fish Fish↔Rig Suitability Authored-Set Audit — APPROVED / revision allowed








The complete Version 1 authored scope is 30 of 30 Fish / exactly **209 positive Fish↔Rig suitability edges** across four approved batches: Bass = 6 Fish / 92 edges; Sunfish & Crappie = 9 Fish / 64 edges; Catfish + Walleye/Sauger = 8 Fish / 35 edges; Trout + Remaining Species = 7 Fish / 18 edges. Direct-Tie edges are exact configuration edges; no configurationless Direct-Tie relationship is authorized. All existing Fish Guide Rig recommendations are contained in the approved suitability set.








Paddlefish, Longnose Gar, and Spotted Gar deliberately have zero ordinary Version 1 suitability edges because their ordinary intentional targeting depends on specialized methods outside the current Rig library. Missing-edge exclusion is authoritative for the complete authored scope as an ordinary Rig-eligibility boundary, not a claim of physical impossibility.








**G4-RIF-1B result:** CLOSED / PASS.








### G4-RIF-1C — Rig Input Adequacy — CLOSED / PASS / revision allowed








The current **23-Rig** library is adequate for Version 1 Recommendation. Paddlefish, Longnose Gar, and Spotted Gar are deliberate specialized-targeting exceptions handled through existing Fish-owned Specialized Targeting guidance rather than new specialist Rigs. Flathead Catfish, Black Bullhead, Yellow Bullhead, Common Carp, and Freshwater Drum are adequately served by their bounded ordinary Rig sets; sparse edge count alone does not establish a Rig gap. No new canonical Rig, Fish↔Rig suitability edge, Fish Guide guidance expansion, or dependent Lure/Bait, Technique, Tackle, or Compatibility work is required by this adequacy review.








### G4-RIF-1D — Combined Recommendation Input Adequacy Test — APPROVED / revision allowed








The combined Version 1 Recommendation input boundary is adequate. Approved Fish facts, Fish↔Rig Suitability, Rig/configuration knowledge, canonical Lure/Bait, Technique, intrinsic Compatibility, Tackle, Canonical Requirement Satisfaction, and Recommendation-context foundations provide the stable inputs needed before contextual Recommendation Decision Knowledge is authored.








Fish↔Rig Suitability admits the broad Fish-specific Rig/configuration pool but does **not** imply that every intrinsically compatible Lure/Bait or Technique combination is appropriate for that Fish. Intrinsic Compatibility establishes mechanical/presentation eligibility only. Remaining Fish-specific and current-context-specific choice, filtering, rationale, exact contextual parameters, and ranking belong to Recommendation Decision Knowledge.








Paddlefish, Longnose Gar, and Spotted Gar validly produce no ordinary Version 1 Rig candidate and use the approved Specialized Targeting handoff rather than fabricated ordinary candidates.








**G4-RIF Recommendation Input Foundation: CLOSED / PASS.** No remaining Reference Knowledge adequacy gap is identified. **Exact next action: resume G4-DK-1A under the narrowed contextual Recommendation Decision Knowledge scope.**








### G4-CAND-1A — Exact Recommendation Candidate Identity — APPROVED / revision allowed








A Recommendation candidate is derived Decision Knowledge, not a new canonical Reference Knowledge entity. Candidate identity is the combination of one active canonical Rig, an applicable Rig configuration when required to distinguish the executable physical setup, an applicable canonical Lure/Bait identity, one compatible Technique, and only normalized context-dependent Recommendation parameters that materially distinguish the recommended action. Fish/Condition evaluation context, rank, score, rationale, availability evidence, My Tackle fulfillment IDs, saved Fishing Setup identity, legality state, and simplicity treatment are not candidate identity. Runtime may derive a deterministic non-authoritative candidate key for deduplication/comparison. Three-part Rig + Lure/Bait + Technique validity continues to derive from the existing pairwise Compatibility relationships rather than a new compound canonical entity.








### G4-EQUIP-1A — Candidate Executability — APPROVED / revision allowed








Recommendation executability is derived against effective confirmed **What I Have With Me Today** availability and has exactly three semantic outcomes: **Executable**, **Not Currently Executable**, and **Executability Unconfirmed**. Without a confirmed availability context FCC may provide Best Overall but must not claim Best Currently Available. The effective requirement set derives from the selected Rig, applicable Rig configuration, selected Lure/Bait, and candidate-specific hard Recommendation parameters; an exact selected Lure/Bait refines an overlapping generic Rig requirement rather than creating duplicate physical demand. Each required availability-bearing requirement must have a valid explicit canonical satisfaction path, pass applicable hard family constraints, and resolve quantity as Known Sufficient. Known failure makes the candidate Not Currently Executable; unresolved proof, including Sufficiency Unknown where quantity matters, makes it Executability Unconfirmed. Optional/preferred refinements do not independently block execution. A saved Fishing Setup is useful evidence but is not inherently mandatory unless the candidate requires proof that depends on it. Only Executable candidates participate in Best Currently Available.








### G4-SIMPLE-1A — Beginner / Simplicity Treatment — APPROVED / revision allowed








Simplicity is a bounded Recommendation ranking modifier applied only after legitimate contextual suitability is established; it is not eligibility or compatibility. Version 1 uses canonical Rig `difficulty` as the primary simplicity signal and may use Core Rig membership as a secondary confidence-building preference when candidates are otherwise close. Simplicity may influence a near-tie but must not make a materially weaker contextual candidate outrank a clearly stronger one. Recommendation does not persist duplicate difficulty fields, infer Technique difficulty, derive hidden complexity from component/knot/assembly-step counts, or introduce a user skill/experience profile in this checkpoint. Exact numerical near-tie/scoring calibration remains production refinement and must remain explainable/testable.








### G4-LEGAL-1A — Legal / Regulatory Recommendation Boundary — APPROVED / revision allowed








Recommendation may consume authoritative structured regulatory constraints but does not author, scrape, or infer legal requirements from jurisdiction names, Fish identity, descriptive official-resource links, User Knowledge, or indirect context. The current D066 Regulations feature remains an official-resource gateway and is not machine-readable legal authority. Recommendation should provide a universal regulatory caution and official-resource path without implying that legality was evaluated.








Version 1 structured legality is bounded to **Oklahoma, Kansas, Missouri, and Arkansas** and is deliberately negative-first. FCC may return **Blocked by Known Constraint** only when an applicable authoritative structured constraint within the deliberately maintained Recommendation-legality scope is established. Missing, incomplete, stale, or insufficient structured coverage resolves as **Compliance Unconfirmed**, never assumed legality. For the other 44 contiguous states, structured Recommendation legality is **Not Evaluated** while the nationwide Regulations Gateway remains available. **No Known Blocking Constraint** is permitted only when the applicable bounded constraint scope has been explicitly reviewed as sufficiently complete to support that statement; it is not a blanket declaration that a recommendation is legal.








The structured scope should include only legal constraints that materially affect Recommendation candidates. Comprehensive reproduction of changing fishing law is not required. Lack of structured regulatory coverage does not prevent otherwise valid candidates from participating in Best Overall or Best Currently Available, but the UI must make the evaluation state clear and provide the applicable official-resource path where available. A known authoritative prohibition is a hard exclusion. An applicable legal requirement may become a hard candidate parameter, while G4-EQUIP separately determines whether confirmed current equipment proves that requirement. Legal evaluation requires explicit applicable jurisdiction/context and fails safely when rule applicability or freshness cannot be established. Exact constraint schema, authored coverage, evidence/freshness policy, maintenance workflow, candidate behavior, and UX are deferred to the G4-LEGAL build.








### G4-CTX-1A — Recommendation Context Freshness / Session Lifecycle — APPROVED / revision allowed








Recommendation Context is temporary device/session-local Decision-input state rather than durable User Knowledge or a persistent Trip/Outing entity. A Recommendation run requires target Fish + waterbody + access/position; optional/Unknown refiners degrade gracefully. Form edits remain draft until an explicit Recommendation/update action establishes the context used for results. Recommendation results are derived and become stale when relevant context, underlying knowledge, applicable structured legal constraints, or confirmed current availability changes. Ordinary navigation within an active session preserves context; changing target Fish retains environmental context and recomputes. Material waterbody/access changes, explicit new-outing/reset, session loss, and calendar-day transition prevent stale environmental context from silently remaining current; retained values may be offered only for explicit reuse/reconfirmation. Recommendation Context remains independent from **What I Have With Me Today**: Recommendation reset does not alter ownership/current availability, and availability changes recompute Best Currently Available without contaminating Best Overall. Version 1 does not synchronize transient environmental Recommendation Context across devices, does not introduce an arbitrary inactivity timer, and does not create a durable Trip/Outing domain solely for Recommendation context.
















### G4-DK-1A — Minimum Contextual Decision Knowledge Rule Contract — APPROVED / revision allowed








Recommendation Decision Knowledge consists of stable, evidence-backed contextual rules evaluated only against candidates already admitted by canonical Fish↔Rig Suitability, Rig/configuration knowledge, and intrinsic Compatibility. One rule is one authored contextual assertion that applies a bounded decision effect to an already-valid Recommendation candidate or candidate subset when its explicit Fish/context predicate is satisfied.








Each rule requires stable rule identity, a candidate selector, at least one bounded decision effect, a user-facing rationale, evidence/provenance, and lifecycle metadata. Fish scope and context predicates are conditional: a rule may be Fish-specific or genuinely Fish-independent, but every rule must contain meaningful Fish specificity, contextual specificity, or both. Version 1 does not introduce speculative Fish-group taxonomies merely to reduce authoring volume.








Context predicates use only facts actually established by Recommendation Context. Multiple required Condition IDs use all-of semantics; Unknown/Not sure never satisfies a predicate and is never interpreted as a negative fact. Alternative contexts are represented by separate rules rather than a generic Boolean expression language. Candidate selectors may target Rig, exact Rig configuration, Lure/Bait, Technique, or bounded combinations, but a broad selector makes a broad claim and must be no broader than the evidence supports.








Approved ranking/decision effects are **Promote**, **Deprioritize**, and **Exclude**; contextual parameterization is also allowed. Promote does not by itself declare the Best Overall result, Deprioritize keeps the candidate valid, and Exclude requires a high evidence threshold because it removes a candidate from contextual consideration. Decision rules do not recreate Fish↔Rig eligibility, intrinsic Compatibility, Rig assembly/configuration, Tackle/availability, Canonical Requirement Satisfaction, legal authority, or candidate identity. Arbitrary numeric scoring/weighting is not approved by this checkpoint.








### G4-DK-1B — Representative Rule Adequacy Pilot — APPROVED / revision allowed








The G4-DK-1A contract is adequate for representative Largemouth Bass contextual rules using both broad and exact candidate selectors and for combining ranking effects with material contextual parameterization. The pilot establishes two authoring safeguards: **no inferred context** and **unit-independent numeric predicate evaluation**.








Rules may act only on context facts actually collected or otherwise explicitly established. Generic `vegetation`, for example, does not imply dense/matted vegetation and therefore cannot by itself justify a Punch / Pegged Texas promotion that depends on heavy matting. If a defensible distinction requires context Version 1 does not collect, omit that distinction rather than fabricating the missing refinement or broadening the rule.








Numeric predicates such as water temperature must be normalized for semantic comparison independent of the user's display-unit preference. No numeric ranking-weight system is justified by the representative pilot.








### G4-DK-1C — Exact Rule Contract and Composition — APPROVED / revision allowed








The working production owner is a dedicated Recommendation Decision Knowledge registry, currently expected as `data/recommendation-rules.js` / `RECOMMENDATION_RULES`; physical file partitioning may be refined later if real authoring volume justifies it without changing the logical registry.








The approved top-level runtime rule contract is:








```text
id
fishId
candidateSelector
contextPredicate
rankingEffect
parameterEffects
rationale
createdVersion
lastModifiedVersion
isActive
```








`fishId` is one canonical Fish ID or null for a genuinely Fish-independent contextual rule. `candidateSelector` is bounded to `rigId`, `rigConfigurationId`, `lureBaitIds[]`, and `techniqueIds[]`; specified dimensions are ANDed and list members are finite alternatives. A non-null configuration requires its parent Rig and must resolve inside that Rig. A selector matches only already-valid candidates and never manufactures a combination rejected by Fish↔Rig Suitability or intrinsic Compatibility.








`contextPredicate` is bounded to explicit `conditionIds[]`, optional numeric `waterTemperatureRange`, and optional `baitPreference`. Condition IDs use all-of semantics. Temperature ranges require at least one inclusive bound and explicit unit semantics while runtime comparison remains unit-independent. Version 1 does not introduce nested Boolean expressions, arbitrary query strings, or implicit NOT semantics.








`rankingEffect` is `promote`, `deprioritize`, `exclude`, or null for parameter-only rules. Rule order has no semantic meaning; later records do not override earlier records, and matching-rule count does not create extra ranking force. Exclude is a hard contextual disposition. Same-direction signals do not stack. Opposing Promote/Deprioritize signals remain an explicit mixed state and are resolved by the dedicated G4-DK-1E ranking contract rather than hidden arithmetic.








Recommendation evidence/provenance remains outside runtime rule records in a dedicated authoring/audit owner keyed by stable rule ID, following the established separation between runtime knowledge and authoring evidence. Parameter conflicts are never silently resolved by file order, specificity, averaging, or guesswork.








### G4-DK-1D — Contextual Parameter Contract — APPROVED / revision allowed








Version 1 parameter effects are divided into **Selection parameters** and **Execution parameters**. The parameter type itself determines whether it participates in derived candidate identity; individual authors do not set an `identityBearing` switch.








Selection parameters materially alter the physical recommended choice and participate in candidate identity. Approved initial types are **Lure/Bait Size**, **Lure/Bait Weight**, **Terminal Weight**, and controlled **Color/Pattern**. Color/pattern uses a curated Recommendation vocabulary expanded only when real authored recommendations require it; manufacturer marketing color names do not become canonical Decision Knowledge.








Execution parameters refine how an otherwise-identical candidate is fished and do not create distinct Recommendation candidates. Approved initial types are **Target Depth**, **Presentation Position**, **Presentation Speed**, **Pause Duration**, **Movement Tempo**, **Countdown Duration**, and **Current Orientation**. Structured Recommendation parameters are Decision Knowledge outputs, not Condition entities.








Numeric exact values or bounded ranges are allowed only when evidence supports the precision and must use unit-normalized semantics independent of display units. Recommendation does not invent precise numeric values from coarse context. Version 1 does not generalize rod/reel selection, line specification, brands/SKUs, ownership/quantity, legality, arbitrary free-text settings, hook size, leader length, or unsupported Rig-specific settings into this parameter system merely because they may matter in some fishing situations.








Simultaneously applicable non-identical values for the same exclusive parameter are a Decision Knowledge conflict. They are not averaged, silently overridden, or resolved by rule order.








### G4-DK-1E — Ordinal Ranking Model — APPROVED / revision allowed








Version 1 Recommendation ranking uses deterministic ordinal bands rather than authored numeric scores, additive rule counts, or arbitrary specificity points. Eligible candidates rank, in order, as **Contextually Preferred**, **Baseline Preferred**, **Viable**, **Baseline Deprioritized**, or **Contextually Deprioritized**. Contextually Excluded candidates do not participate in Recommendation ranking.








A Fish-specific rule with no optional contextual requirement may provide a baseline preference or baseline deprioritization. Contextual ranking effects are evaluated first and fully determine the candidate's band whenever at least one contextual ranking rule applies; baseline ranking is then ignored for that candidate. Contextual Promote-only yields Contextually Preferred, contextual Deprioritize-only yields Contextually Deprioritized, and simultaneous contextual Promote plus Deprioritize yields Viable with a retained mixed-signal state. Multiple same-direction rules do not stack. When no contextual ranking effect applies, equivalent baseline logic yields Baseline Preferred, Baseline Deprioritized, Viable mixed-baseline, or Viable neutral.








Within the same ranking band, the separately approved bounded simplicity behavior may act as a tie-breaker where its near-tie preconditions are met. If fishing knowledge and approved simplicity behavior do not establish a distinction, the candidates remain genuinely tied; stable rendering order must not be represented as greater fishing quality.








**Best Overall** selects from the highest-ranked legally eligible candidate or tied candidate set independent of current tackle availability. **Best Currently Available** selects the highest-ranked confirmed-executable candidate from the same fishing-quality ranking rather than reranking according to ownership. When one candidate wins both states, presentation combines the states rather than duplicating the recommendation.








Runtime may derive a non-authoritative decision trace containing the resulting rank band, matched promote/deprioritize/exclude/parameter rule IDs, simplicity tie-break result, availability status, and legal status. The trace exists to make Recommendation explanations deterministic and auditable; it is not a second authoritative Recommendation dataset.
















### G4-DK-1F — Coverage & Authoring Strategy — APPROVED / revision allowed








Version 1 Recommendation Decision Knowledge is authored **Fish-by-Fish against the completed Fish↔Rig suitability boundary**, not as a Cartesian product of Fish, candidates, and possible Condition combinations. The 27 Fish with ordinary Version 1 Rig suitability receive explicit authoring review; Paddlefish, Longnose Gar, and Spotted Gar remain truthful zero-edge specialized-targeting outcomes and do not receive fabricated ordinary Recommendation candidates merely to satisfy a coverage count.








For each ordinary Fish, coverage review must explicitly disposition baseline Recommendation behavior; Fish-specific Lure/Bait + Technique appropriateness; each applicable Recommendation Context dimension; contextual parameter opportunities; deprioritization and exclusion opportunities; evidence adequacy; and representative minimal/contextual scenarios. A reviewed dimension may validly produce **no Decision Knowledge rule** when it creates no material Recommendation distinction, is irrelevant to that Fish, or evidence is insufficient. Required Recommendation inputs such as waterbody and access/position therefore do not automatically require corresponding rules.








Authored rules use the **smallest truthful predicate** supported by the evidence and may act only on context actually established by the Recommendation Context system. Initial authoring favors explicit Fish-specific rules; Fish-independent generalization is permitted only after repeated evidence demonstrates genuinely identical semantics rather than merely similar wording or shared Rig mechanics. Rule count is not a coverage or quality metric, and unruled candidates may validly remain Viable.








Coverage completeness is established by reviewed decision scope and representative scenario adequacy rather than a target number of rules. The authoring/coverage audit remains outside runtime Recommendation records and records whether each decision area was reviewed, including deliberate `no rule required` outcomes; every actual runtime rule must remain supported by the separate Recommendation provenance/audit boundary established under G4-DK-1C. Physical rule-file partitioning remains an implementation organization decision to be made from demonstrated authoring volume rather than locked in advance.








The approved authoring progression may use the same bounded species batches as the Fish↔Rig audit — Bass; Sunfish & Crappie; Catfish + Walleye/Sauger/Saugeye; Trout + Remaining Species — while completing review Fish-by-Fish within each batch. Representative scenario testing must include minimal-context degradation and materially different contextual cases sufficient to expose unsupported promotions, inappropriate combinations, unnecessary ties, parameter conflicts, explanation defects, and accidental availability contamination of Best Overall.
















### G4-DK-1G.1 — Rule Evidence & Provenance Contract — APPROVED / revision allowed








Recommendation rule evidence is an **authoring and validation input only**. Runtime Recommendation generation must not search the web, query fishing sites or agencies, retrieve external sources, or perform evidence discovery while responding to the user. Runtime evaluates only approved canonical FCC knowledge plus current Recommendation Context, legality state where available, and confirmed availability/User Knowledge as governed elsewhere.








Recommendation provenance remains outside runtime `RECOMMENDATION_RULES` records in one logical authoring/audit owner keyed by stable rule ID. Runtime rules contain no citation URLs, publisher metadata, review dates, source-quality labels, or other editorial citation plumbing. Physical evidence-file organization is refinement allowed and should remain as simple as demonstrated authoring volume permits.








Reusable sources receive stable source IDs and are cataloged once rather than duplicated per rule. The logical source entry records at least source ID, authority/publisher, title, URL, source type, human reviewed date, and relevant notes. One source may support multiple rules.








Every active Recommendation rule has exactly one evidence mapping keyed by its stable rule ID. That mapping references one or more valid source IDs and records a concise support note explaining the material authored assertion the evidence supports. Evidence is mapped at the meaningful rule/assertion level rather than forcing a separate citation beside every selector field, predicate field, parameter, or rationale sentence.








Evidence precision must support authored rule precision. Exact numeric thresholds, bounded ranges, sizes, weights, durations, or similar parameter values may be authored only when the evidence supports that degree of precision; Recommendation Decision Knowledge must not manufacture exact values from coarse language such as “cool water,” “slower,” or “lighter.” Contextual `exclude` rules require a deliberately higher evidence threshold than ordinary `promote`, `deprioritize`, or parameter guidance because exclusion removes an otherwise-valid candidate from contextual consideration. Precise numeric rules receive the same elevated scrutiny. Version 1 does not introduce an authored numeric evidence-confidence score.








Source authority is claim-specific. Official fisheries agencies, universities, extension programs, recognized research/technical sources, and other credible fishing authorities should be preferred when they directly address the claim, but government or academic sourcing is not mandatory for every practical Recommendation assertion. Ordinary forum/social-media anecdotes cannot be the sole basis for a material rule. Manufacturer material may support relevant technical/use information but must be reviewed cautiously when commercial interest affects the claim. Human review determines whether the evidence is adequate for the authored assertion.








Fish-independent rules (`fishId: null`) require explicit authoring evidence that records the Fish scope reviewed for generalization. A rule discovered during one Fish's authoring may not silently become universal merely because its runtime Fish scope is changed to null. Generalization remains allowed only after repeated evidence demonstrates genuinely identical semantics.








Recommendation evidence has no arbitrary routine expiration date. Re-review is required when a rule materially changes, supporting evidence materially changes or becomes unavailable, contradictory credible evidence appears, applicable Fish/candidate/context scope materially expands, or content review identifies uncertainty.








**G4-DK-1G.1 result:** COMPLETE / APPROVED WITH REVISION ALLOWED. Exact next checkpoint is **G4-DK-1G.2 — Coverage Audit / No-Rule-Required Contract**.
















### G4-DK-1G.2 — Coverage Audit / No-Rule-Required Contract — APPROVED / revision allowed








Recommendation coverage audit is an **authoring/validation artifact only** and is not consulted during user Recommendation runtime. Version 1 maintains an explicit coverage record for every one of the 30 canonical Fish so omission can never masquerade as completed review.








The 27 Fish with ordinary Fish↔Rig suitability receive complete Fish-by-Fish review of baseline Recommendation behavior; Fish-specific Lure/Bait + Technique appropriateness; every applicable Recommendation Context dimension; contextual parameter opportunities; deprioritization and exclusion opportunities; evidence adequacy; and representative minimal/contextual scenarios. Paddlefish, Longnose Gar, and Spotted Gar receive explicit specialized-targeting zero-edge audit dispositions rather than being omitted or given fabricated ordinary candidates.








Every reviewed decision area uses one explicit disposition: `rules-authored`, `no-rule-required`, `not-applicable`, or `evidence-insufficient`. `rules-authored` references one or more valid Recommendation rule IDs. `no-rule-required` means the area was deliberately reviewed and creates no material Recommendation distinction worth encoding; it is a positive reviewed conclusion, not missing work. `not-applicable` is used narrowly when the dimension genuinely does not apply to that Fish or its Version 1 Recommendation scope. `evidence-insufficient` records a considered potential distinction that cannot be supported defensibly and therefore produces no runtime rule.








An `evidence-insufficient` disposition does not automatically block Version 1. Recommendation degrades to the approved knowledge actually available. The later required human fishing-content review fails the affected Fish only when the unresolved evidence gap would make the resulting Recommendation materially misleading, unsafe, or unable to provide a defensible baseline.








Coverage completeness is based on complete reviewed decision scope plus representative scenario adequacy, never a target number of rules. Fish may legitimately have very different rule counts, including no contextual rules beyond baseline behavior, if the required review is complete and scenario/human review passes.








Coverage and runtime rules reconcile in both directions. A `rules-authored` audit disposition must reference existing rules that match the reviewed Fish/scope, and every Fish-specific active runtime rule must be accounted for by the applicable Fish coverage audit. Fish-independent rules reconcile through the explicit reviewed generalization scope required by G4-DK-1G.1.








Representative scenarios remain bounded rather than Cartesian. Each ordinary Fish includes at least minimal required context plus materially different contexts sufficient to exercise authored preference changes and, where applicable, deprioritization, exclusion, contextual parameterization, and mixed-signal behavior. Exact deterministic scenario assertions belong to G4-DK-1G.3.








The logical audit may carry Fish identity, ordinary-versus-specialized Recommendation mode, reviewed decision areas with disposition/rule references/notes, representative scenarios, review notes, and reviewed version. Exact field names, physical file partitioning, and serialization remain implementation refinement provided they preserve the approved completeness and reconciliation semantics.








**G4-DK-1G.2 result:** COMPLETE / APPROVED WITH REVISION ALLOWED. Exact next checkpoint is **G4-DK-1G.3 — Deterministic Validation & Scenario Contract**.








### G4-DK-1G.3 — Deterministic Validation & Scenario Contract — APPROVED / revision allowed








Version 1 Recommendation Decision Knowledge validation uses three distinct layers: deterministic structural/reconciliation validation, deterministic representative Recommendation scenarios, and required human fishing-content review. Deterministic validation owns schema and lifecycle correctness; canonical-reference resolution; Fish↔Rig/Compatibility candidate-boundary integrity; predicate and typed-parameter validity; normalized numeric semantics; statically detectable parameter conflicts; rule↔evidence reconciliation; Fish coverage-audit completeness; and two-way rule↔coverage reconciliation. Promote plus Deprioritize and multiple same-direction ranking signals remain valid authored states under the approved ordinal-ranking contract rather than structural conflicts.








Representative scenarios are bounded fixtures executed through the real Recommendation evaluator and assert stable semantic outcomes rather than incidental file/render order or derived candidate hashes. Every ordinary Fish requires a minimal-context scenario plus enough materially different scenarios to exercise meaningful authored behavior; every active Exclude rule and materially distinct parameter behavior requires direct scenario coverage, while ordinary Promote/Deprioritize rule count does not create a one-scenario-per-rule quota. Integration scenarios must protect Best Overall from availability contamination, confirm Best Currently Available and unknown-availability behavior, exercise bounded simplicity and mixed ranking signals, and preserve the specialized-targeting zero-edge outcome for Paddlefish, Longnose Gar, and Spotted Gar. Explanation validation checks decision-trace/rationale provenance rather than freezing noncanonical prose. Deterministic scenario assertions are PASS/FAIL.








Validation success never substitutes for fishing-content judgment. Human review determines whether evidence actually supports the fishing assertion, selector/predicate/effect strength and parameter precision are appropriate, omissions are acceptable, explanations are useful, and representative outputs make practical fishing sense. Incorrect results are repaired at their authoritative knowledge/engine owner rather than through scenario-specific output overrides.








**G4-DK-1G.3 result:** COMPLETE / APPROVED WITH REVISION ALLOWED.








### G4-DK-1G.4 — Human Review / Completion Gate — APPROVED / revision allowed








Recommendation Decision Knowledge completes at both Fish and full-scope levels. Each of the 27 ordinary Fish must have its complete suitability-derived Recommendation boundary reviewed, all required coverage areas explicitly dispositioned, all applicable active rules structurally valid and reconciled to evidence and coverage, representative deterministic scenarios passing, and required human fishing-content review approving evidence adequacy, selector and predicate specificity, ranking-effect strength, parameter precision, baseline usefulness, contextual usefulness, practical plausibility, explanations, ties, and deliberate no-rule/evidence-insufficient dispositions. Exclude rules receive heightened human scrutiny because they remove candidates rather than merely rank them lower.








`no-rule-required` must represent deliberate reviewed non-action rather than omission; `evidence-insufficient` may pass only when the remaining Recommendation remains materially defensible. Paddlefish, Longnose Gar, and Spotted Gar complete through their validated specialized-targeting/no-ordinary-candidate outcome rather than fabricated rules. Human review outcomes are Approved, Revision Required, or Blocked — Evidence Gap; findings identify the authoritative defect owner rather than creating output overrides. Fish completion is derived from required validations/review rather than an unsupported completion flag.








Full G4-DK completion requires all 30 Fish to pass their applicable completion gates, no unresolved deterministic failures or blocking findings, a bounded cross-Fish consistency/generalization review, and representative end-to-end scenarios across materially different fishing patterns. Unequal rule counts, truthful ties, legitimate no-rule dimensions, absence of numeric scores, and lack of unnecessary Fish-independent generalization do not block completion.








**G4-DK-1G result:** CLOSED / COMPLETE / APPROVED WITH REVISION ALLOWED. The Authoring Evidence & Validation Contract is complete. G4-DK-2 production authoring is intentionally held pending the approved project-wide V1 Completion Audit & Roadmap.
















**Material-change rule:** implementation/pilot findings may refine labels and optional fields only where the governing domain contract explicitly allows it. A material change to these semantic boundaries, the approved G4 checkpoint semantics, or prerequisite order requires explicit reapproval and durable documentation update.








**Canonical owners:** D069; `ROADMAP.md`; `ARCHITECTURE.md`; `data-model/03B-CONDITIONS.md`; `data-model/03C-LURES-BAIT.md`; `data-model/03A-TECHNIQUES.md`; `data-model/09-RELATIONSHIPS.md`; `data-model/07-USER-DATA.md`; `data-model/05A-INVENTORY.md`; active state in `WORKING_STATE.md` / `ACTIVE-CHANGE-LEDGER.md`.








**G4-DK current resume:** G4-DK-1A through G4-DK-1G.4 are COMPLETE / APPROVED WITH REVISION ALLOWED and G4-DK-1G is CLOSED / COMPLETE. Do not begin G4-DK-2 yet. Exact next project checkpoint is **V1-AUDIT-1 — Project Completion Inventory & Prioritization**, beginning with a read-only project-wide completion audit and Recommendation production-dependency reconciliation.