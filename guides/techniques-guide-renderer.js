/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: guides/techniques-guide-renderer.js
   PURPOSE: Owns Techniques Guide landing, search, collections,
   instructional details and canonical reverse-reference UI.
   ========================================================== */

"use strict";

function escapeTechniqueGuideText(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function isCoreTechniqueRecord(record) {
    return Boolean(record?.id) && CORE_TECHNIQUE_IDS.includes(record.id);
}

function buildTechniqueResultCardMarkup(technique) {
    const isCore = isCoreTechniqueRecord(technique);
    const classificationMarkup = isCore
        ? '<span class="technique-result-card__classification"><span class="technique-result-card__classification-core">Core Technique</span></span>'
        : '<span class="technique-result-card__classification"><span class="technique-result-card__classification-type">Technique</span></span>';
    return `
        <button class="search-result-card search-result-card--technique${isCore ? " search-result-card--core" : ""}" type="button" data-result-id="${technique.id}">
            ${classificationMarkup}
            <span class="technique-result-card__heading-row">
                <span class="search-result-card__title">${escapeTechniqueGuideText(technique.name)}</span>
                <span class="search-result-card__action">View Technique <span class="link-arrow link-arrow--internal" aria-hidden="true">&rarr;</span></span>
            </span>
            <span class="search-result-card__summary">${escapeTechniqueGuideText(technique.summary)}</span>
        </button>
    `;
}

function renderTechniqueSearchResults(appMain, records, config = {}) {
    const query = String(config.query ?? "").trim();
    renderSearchResults(appMain, records, {
        emptyMessage: query
            ? "No techniques found. Try another search."
            : "No techniques are available in this collection.",
        statusText: (items) => {
            const label = items.length === 1 ? "technique" : "techniques";
            return query ? `${items.length} ${label} found` : `${items.length} ${label}`;
        },
        renderRecord: buildTechniqueResultCardMarkup,
        onResultSelect: config.onResultSelect
    });
}

function renderTechniqueGuideLanding(appMain, config) {
    if (!appMain || !config) return;
    appMain.innerHTML = `
        <section class="content-view technique-guide-view" aria-labelledby="technique-guide-title">
            ${buildPageNavigationMarkup()}
            <header class="technique-guide-identity">
                <h2 id="technique-guide-title">Techniques Guide</h2>
                <p>Learn how to move, position, and control a bait or lure, then recognize what happens on the line.</p>
            </header>
            <form class="search-form section-search-form technique-guide-search-form" data-technique-search-form aria-labelledby="technique-guide-search-title">
                <h3 class="guide-search-heading" id="technique-guide-search-title"><label class="search-label" for="technique-guide-search-input">Search Techniques</label></h3>
                <p class="search-help" id="technique-guide-search-help">Search a Technique name or how it is fished.</p>
                ${buildSearchControlsMarkup("technique-guide-search-input", "Search by technique or action (e.g., retrieve, hop, drift)", {
                    showSubmitButton: false, inputDescriptionId: "technique-guide-search-help"
                })}
            </form>
            <div class="section-search-results" data-technique-search-region hidden>
                <p class="search-status" data-search-status aria-live="polite"></p>
                <div class="search-results" data-search-results></div>
            </div>
            <div class="technique-guide-content" data-technique-guide-content>
                <section class="technique-guide-section" aria-labelledby="technique-start-title">
                    <h3 id="technique-start-title">Start Here</h3>
                    <div class="dashboard-grid technique-guide-core-grid">
                        <button class="dashboard-card guide-curated-card technique-guide-learn-core" type="button" data-technique-collection="core">
                            <span class="guide-curated-card__eyebrow">Recommended First</span>
                            <span class="guide-card__heading-row">
                                <span class="dashboard-card__title">Learn Core Techniques</span>
                                <span class="dashboard-card__action dashboard-card__action--link">Start Learning <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></span>
                            </span>
                            <span class="dashboard-card__description">Seven practical techniques to build control, line awareness, and confidence with everyday Rigs.</span>
                        </button>
                    </div>
                </section>
                <section class="technique-guide-section" aria-labelledby="technique-browse-title">
                    <h3 id="technique-browse-title">Browse Techniques</h3>
                    <div class="dashboard-grid">
                        <button class="dashboard-card guide-browse-card technique-guide-browse-all" type="button" data-technique-collection="all">
                            <span class="guide-card__heading-row">
                                <span class="dashboard-card__title">All Techniques</span>
                                <span class="dashboard-card__action dashboard-card__action--link">Browse <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></span>
                            </span>
                            <span class="dashboard-card__description">Explore all 16 Techniques and open detailed How to Fish It instructions.</span>
                        </button>
                    </div>
                </section>
            </div>
        </section>
    `;
    initializeHomeNavigation(appMain);
    const form = appMain.querySelector("[data-technique-search-form]");
    const input = appMain.querySelector("#technique-guide-search-input");
    const clearButton = form?.querySelector("[data-search-clear]");
    const searchRegion = appMain.querySelector("[data-technique-search-region]");
    const content = appMain.querySelector("[data-technique-guide-content]");
    if (input) input.value = config.initialQuery ?? "";
    const updateSearch = () => {
        const query = input?.value?.trim() ?? "";
        config.onQueryChange?.(query);
        if (searchRegion) searchRegion.hidden = query.length === 0;
        if (content) content.hidden = query.length > 0;
        if (query) {
            config.onSearch?.(query);
        } else {
            const results = appMain.querySelector("[data-search-results]");
            const status = appMain.querySelector("[data-search-status]");
            if (results) results.innerHTML = "";
            if (status) status.textContent = "";
        }
    };
    initializeSearchControls(form, input, clearButton, updateSearch);
    updateSearch();
    appMain.querySelectorAll("[data-technique-collection]").forEach((card) => {
        card.addEventListener("click", () => config.onCollectionSelect?.(card.dataset.techniqueCollection));
    });
}

function renderTechniqueCollectionBrowse(appMain, config) {
    renderSearchView(appMain, {
        headingId: "technique-browse-title",
        inputId: "technique-browse-search-input",
        title: config.title,
        description: config.description,
        label: "Search Techniques",
        helpText: "Search a Technique name or how it is fished in this collection.",
        placeholder: `Search ${config.title}`,
        showSubmitButton: false,
        viewClass: "technique-browse-view",
        parentLabel: "Techniques Guide",
        initialQuery: config.initialQuery ?? "",
        onQueryChange: config.onQueryChange,
        onParent: config.onParent,
        onSearch: config.onSearch
    });
}

function buildTechniqueTextListMarkup(title, items, ordered = false) {
    if (!Array.isArray(items) || !items.length) return "";
    const tag = ordered ? "ol" : "ul";
    return `
        <section class="technique-detail-subsection" aria-label="${title}">
            <h4 class="detail-subsection-heading">${title}</h4>
            <${tag} class="${ordered ? "detail-steps" : "detail-list"}">
                ${items.map((item) => `<li>${escapeTechniqueGuideText(item)}</li>`).join("")}
            </${tag}>
        </section>
    `;
}

function buildTechniqueMistakesMarkup(mistakes) {
    if (!Array.isArray(mistakes) || !mistakes.length) return "";
    return `
        <section class="technique-detail-subsection" aria-label="Common Mistakes &amp; Corrections">
            <h4 class="detail-subsection-heading">Common Mistakes &amp; Corrections</h4>
            <ul class="detail-list technique-mistake-list">
                ${mistakes.map(({ mistake, correction }) => `
                    <li><p>${escapeTechniqueGuideText(mistake)}</p><p class="technique-correction"><strong>Correction:</strong> ${escapeTechniqueGuideText(correction)}</p></li>
                `).join("")}
            </ul>
        </section>
    `;
}

const TECHNIQUE_USAGE_VISIBLE_RIG_LIMIT = 2;

function buildTechniqueUsageMarkup(rigs, baits, rigsExpanded = false) {
    const rigMarkup = rigs.length ? `
        <section class="technique-usage-group" aria-labelledby="technique-related-rigs-title">
            <h4 class="detail-subsection-heading" id="technique-related-rigs-title">Rigs That Use This Technique</h4>
            <div class="technique-rig-card-list" id="technique-related-rigs-list">
                ${rigs.map((rig, index) => `
                    <div class="technique-rig-card"${index >= TECHNIQUE_USAGE_VISIBLE_RIG_LIMIT ? (rigsExpanded ? " data-technique-rig-extra" : " hidden data-technique-rig-extra") : ""}>
                        <span class="technique-rig-card__heading">
                            <span class="technique-rig-card__name">${escapeTechniqueGuideText(rig.name)}</span>
                            <button class="technique-rig-card__action" type="button" data-technique-rig-id="${rig.id}">View Rig <span class="link-arrow link-arrow--internal" aria-hidden="true">&rarr;</span></button>
                        </span>
                        <span class="technique-rig-card__context">${rig.compatibleBaits.length
                            ? `Confirmed bait options: ${rig.compatibleBaits.map((bait) => escapeTechniqueGuideText(bait.name)).join(", ")}`
                            : "This Rig uses the Technique; no specific bait has been confirmed."}</span>
                    </div>
                `).join("")}
            </div>
            ${rigs.length > TECHNIQUE_USAGE_VISIBLE_RIG_LIMIT
                ? `<button class="technique-usage-expand" type="button" data-technique-usage-toggle data-technique-usage-count="${rigs.length}" aria-controls="technique-related-rigs-list" aria-expanded="${rigsExpanded}">${rigsExpanded ? "Show fewer" : `See all ${rigs.length} rigs`}</button>`
                : ""}
        </section>` : "";
    const baitMarkup = baits.length ? `
        <section class="technique-usage-group" aria-labelledby="technique-related-baits-title">
            <h4 class="detail-subsection-heading" id="technique-related-baits-title">Lures and Baits That Use This Technique</h4>
            <div class="compact-link-list compact-link-list--divided">
                ${baits.map((bait) => `
                    <div class="compact-link-row">
                        <span class="compact-link-row__label">${escapeTechniqueGuideText(bait.name)}</span>
                        <button class="reference-info-button" type="button"
                            data-technique-bait-id="${bait.id}"
                            aria-label="Learn about ${escapeTechniqueGuideText(bait.name)}"><span aria-hidden="true">&#9432;</span></button>
                    </div>
                `).join("")}
            </div>
        </section>` : "";
    if (!rigMarkup && !baitMarkup) return "";
    return `
        <div class="technique-usage">
            <p class="technique-usage__note">Named bait options appear with a Rig only when that combination is confirmed. The separate bait list describes general Technique compatibility; it does not mean every bait works with every Rig above.</p>
            ${rigMarkup}${baitMarkup}
        </div>
    `;
}

function buildTechniqueDetailDisclosureMarkup(disclosureId, title, bodyMarkup, expanded = false) {
    const panelId = `technique-detail-${disclosureId}-panel`;
    return `
        <div class="technique-detail-row technique-detail-row--disclosure">
            <button class="technique-detail-row__trigger" type="button"
                data-technique-disclosure-id="${disclosureId}"
                aria-expanded="${expanded ? "true" : "false"}"
                aria-controls="${panelId}">
                <span>${title}</span>
                <span class="technique-detail-row__state" aria-hidden="true">${expanded ? "▴" : "▾"}</span>
            </button>
            <div class="technique-detail-row__panel" id="${panelId}" data-technique-disclosure-panel="${disclosureId}"${expanded ? "" : " hidden"}>
                ${bodyMarkup}
            </div>
        </div>
    `;
}

function initializeTechniqueDetailDisclosures(appMain, config, expandedDisclosureIds = []) {
    const expanded = new Set(expandedDisclosureIds);
    appMain.querySelectorAll("[data-technique-disclosure-id]").forEach((trigger) => {
        trigger.addEventListener("click", () => {
            const id = trigger.dataset.techniqueDisclosureId;
            const panel = appMain.querySelector(`[data-technique-disclosure-panel="${id}"]`);
            const nextExpanded = trigger.getAttribute("aria-expanded") !== "true";
            trigger.setAttribute("aria-expanded", String(nextExpanded));
            if (panel) panel.hidden = !nextExpanded;
            const state = trigger.querySelector(".technique-detail-row__state");
            if (state) state.textContent = nextExpanded ? "▴" : "▾";
            if (nextExpanded) expanded.add(id);
            else expanded.delete(id);
            config.onDisclosureStateChange?.([...expanded]);
        });
    });
}

function initializeTechniqueUsageControls(appMain, config) {
    const toggle = appMain.querySelector("[data-technique-usage-toggle]");
    if (!toggle) return;
    const extra = Array.from(appMain.querySelectorAll("[data-technique-rig-extra]"));
    const group = toggle.closest(".technique-usage-group");
    toggle.addEventListener("click", () => {
        const expanded = toggle.getAttribute("aria-expanded") !== "true";
        extra.forEach((row) => { row.hidden = !expanded; });
        toggle.setAttribute("aria-expanded", String(expanded));
        toggle.textContent = expanded ? "Show fewer" : `See all ${toggle.dataset.techniqueUsageCount} rigs`;
        config.onUsageStateChange?.(expanded);
        if (!expanded && group) {
            const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches === true;
            window.requestAnimationFrame(() => group.scrollIntoView({
                behavior: reduceMotion ? "auto" : "smooth", block: "start"
            }));
        }
    });
}

function renderTechniqueInstructionDetail(appMain, config) {
    const technique = config?.record;
    if (!appMain || !technique?.id) return;
    const coreLabel = isCoreTechniqueRecord(technique)
        ? '<span class="technique-detail-classification__core">Core Technique</span>'
        : '<span class="technique-detail-classification__type">Technique</span>';
    const expanded = new Set(Array.isArray(config.expandedDisclosureIds) ? config.expandedDisclosureIds : []);
    const usageMarkup = buildTechniqueUsageMarkup(config.rigs ?? [], config.baits ?? [], config.rigsExpanded === true);
    const aboutRows = [
        buildTechniqueDetailDisclosureMarkup(
            "how-it-works", "How It Works",
            `<p>${escapeTechniqueGuideText(technique.aboutTechnique)}</p>`,
            expanded.has("how-it-works")
        ),
        usageMarkup ? buildTechniqueDetailDisclosureMarkup(
            "where-used", "Where You'll Use It", usageMarkup, expanded.has("where-used")
        ) : ""
    ].filter(Boolean).join("");
    const beginnerTips = Array.isArray(technique.beginnerTips) ? technique.beginnerTips : [];
    const moreHelpRows = [
        beginnerTips.length ? buildTechniqueDetailDisclosureMarkup(
            "beginner-tips", "Beginner Tips",
            `<ul class="detail-list technique-beginner-tips">${beginnerTips.map((tip) => `<li>${escapeTechniqueGuideText(tip)}</li>`).join("")}</ul>`,
            expanded.has("beginner-tips")
        ) : "",
        technique.applicationGuidance ? buildTechniqueDetailDisclosureMarkup(
            "where-it-fits", "Where It Fits",
            `<p>${escapeTechniqueGuideText(technique.applicationGuidance)}</p>`,
            expanded.has("where-it-fits")
        ) : ""
    ].filter(Boolean).join("");
    appMain.innerHTML = `
        <article class="detail-view detail-view--technique technique-detail-view" aria-labelledby="technique-detail-title" data-technique-detail="${technique.id}">
            ${buildPageNavigationMarkup(config.parentLabel)}
            <header class="detail-header technique-detail-header">
                <p class="detail-eyebrow technique-detail-classification">${coreLabel}</p>
                <h2 id="technique-detail-title">${escapeTechniqueGuideText(technique.name)}</h2>
                <p class="technique-detail-summary">${escapeTechniqueGuideText(technique.summary)}</p>
            </header>
            <section class="detail-section technique-detail-section technique-how-section" aria-labelledby="technique-how-title">
                <h3 id="technique-how-title">How to Fish It</h3>
                ${buildTechniqueTextListMarkup("Presentation Steps", technique.presentationSteps, true)}
            </section>
            <section class="detail-section technique-detail-section technique-reading-section" aria-labelledby="technique-reading-title">
                <h3 id="technique-reading-title">Check Your Presentation</h3>
                <section class="technique-detail-subsection">
                    <h4 class="detail-subsection-heading">Reading the Presentation</h4>
                    <p>${escapeTechniqueGuideText(technique.readingPresentation)}</p>
                </section>
                ${buildTechniqueTextListMarkup("Strike Cues", technique.strikeCues)}
                ${buildTechniqueMistakesMarkup(technique.commonMistakes)}
            </section>
            <section class="technique-detail-group technique-detail-group--about" aria-labelledby="technique-about-title">
                <h3 class="technique-detail-group__title" id="technique-about-title">About This Technique</h3>
                <div class="technique-detail-group__shell">${aboutRows}</div>
            </section>
            ${moreHelpRows ? `
                <section class="technique-detail-group technique-detail-group--more-help" aria-labelledby="technique-more-help-title">
                    <h3 class="technique-detail-group__title" id="technique-more-help-title">More Help</h3>
                    <div class="technique-detail-group__shell">${moreHelpRows}</div>
                </section>` : ""}
        </article>
    `;
    appMain.querySelector("[data-parent-navigation]")?.addEventListener("click", config.onParent);
    initializeHomeNavigation(appMain);
    appMain.querySelectorAll("[data-technique-rig-id]").forEach((button) => {
        button.addEventListener("click", () => config.onRigSelect?.(button.dataset.techniqueRigId));
    });
    appMain.querySelectorAll("[data-technique-bait-id]").forEach((button) => {
        button.addEventListener("click", () => config.onBaitSelect?.(button.dataset.techniqueBaitId, button));
    });
    initializeTechniqueDetailDisclosures(appMain, config, config.expandedDisclosureIds);
    initializeTechniqueUsageControls(appMain, config);
}
