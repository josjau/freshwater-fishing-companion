/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: view-renderer.js
   REPLACEMENT: REFERENCE-FIRST RIG AND TACKLE PAGES
   PURPOSE: Owns reusable views, search results, Rig details,
   Tackle Guide presentation, contextual references, and readiness.
   ========================================================== */

"use strict";

const VIEW_RENDERER_BUILD_INFO = Object.freeze({
    file: "view-renderer.js",
    milestone: "Reference Refresh",
    replacement: "Reference-First Rig and Tackle Pages"
});

function renderView(appMain, viewConfig) {
    if (!appMain || !viewConfig || !Array.isArray(viewConfig.cards)) {
        console.error("A valid view configuration is required.");
        return;
    }

    const cardsMarkup = viewConfig.cards.map((card) => `
        <button class="dashboard-card" type="button" data-card-id="${card.id}">
            <span class="dashboard-card__title">${card.title}</span>
            <span class="dashboard-card__description">${card.description}</span>
        </button>
    `).join("");

    appMain.innerHTML = `
        <section class="content-view" aria-labelledby="${viewConfig.headingId}">
            <button class="page-navigation" type="button" data-home-navigation>← Home</button>
            <h2 id="${viewConfig.headingId}">${viewConfig.title}</h2>
            <p>${viewConfig.description}</p>
            <div class="dashboard-grid">${cardsMarkup}</div>
        </section>
    `;

    initializeHomeNavigation(appMain);
    initializeViewCardActions(appMain, viewConfig.onCardSelect);
}

function initializeHomeNavigation(appMain) {
    appMain.querySelector("[data-home-navigation]")?.addEventListener("click", () => {
        showView(ROUTES.DASHBOARD);
    });
}

function initializeViewCardActions(appMain, onCardSelect) {
    if (typeof onCardSelect !== "function") return;
    appMain.querySelectorAll("[data-card-id]").forEach((card) => {
        card.addEventListener("click", () => onCardSelect(card.dataset.cardId));
    });
}

function renderSearchView(appMain, searchConfig) {
    if (!appMain || !searchConfig) {
        console.error("A valid search view configuration is required.");
        return;
    }

    appMain.innerHTML = `
        <section class="content-view" aria-labelledby="${searchConfig.headingId}">
            <div class="page-navigation-group">
                <button class="page-navigation" type="button" data-parent-navigation>← ${searchConfig.parentLabel}</button>
                <button class="page-navigation" type="button" data-home-navigation>Home</button>
            </div>
            <h2 id="${searchConfig.headingId}">${searchConfig.title}</h2>
            <p>${searchConfig.description}</p>
            <form class="search-form" data-search-form>
                <label class="search-label" for="${searchConfig.inputId}">${searchConfig.label}</label>
                <div class="search-controls">
                    <input class="search-input" id="${searchConfig.inputId}" name="query" type="search"
                        placeholder="${searchConfig.placeholder}" autocomplete="off" enterkeyhint="search">
                    <button class="search-button" type="submit">Search</button>
                </div>
            </form>
            <p class="search-status" data-search-status aria-live="polite"></p>
            <div class="search-results" data-search-results></div>
        </section>
    `;

    const searchForm = appMain.querySelector("[data-search-form]");
    const searchInput = appMain.querySelector(`#${searchConfig.inputId}`);

    appMain.querySelector("[data-parent-navigation]")?.addEventListener("click", searchConfig.onParent);
    initializeHomeNavigation(appMain);

    searchForm?.addEventListener("submit", (event) => {
        event.preventDefault();
        searchConfig.onSearch(searchInput?.value ?? "");
    });

    searchInput?.addEventListener("input", () => searchConfig.onSearch(searchInput.value));
    searchInput?.focus();
    searchConfig.onSearch("");
}

function renderSearchResults(appMain, records, resultConfig) {
    const resultsContainer = appMain.querySelector("[data-search-results]");
    const status = appMain.querySelector("[data-search-status]");

    if (!resultsContainer || !status) {
        console.error("Search result containers were not created.");
        return;
    }

    if (!Array.isArray(records) || records.length === 0) {
        status.textContent = resultConfig.emptyMessage;
        resultsContainer.innerHTML = "";
        return;
    }

    status.textContent = `${records.length} ${records.length === 1 ? "result" : "results"}`;
    resultsContainer.innerHTML = records.map((record) => resultConfig.renderRecord(record)).join("");

    if (typeof resultConfig.onResultSelect !== "function") return;
    resultsContainer.querySelectorAll("[data-result-id]").forEach((resultCard) => {
        resultCard.addEventListener("click", () => resultConfig.onResultSelect(resultCard.dataset.resultId));
    });
}

function getRelatedRigNames(rigIds) {
    if (!Array.isArray(rigIds) || typeof RIG_DATA === "undefined") return [];
    return rigIds.map((rigId) => findRecordById(RIG_DATA, rigId)).filter(Boolean).map((rig) => rig.name);
}

function getReferenceMedia(referenceRecord) {
    if (!referenceRecord?.mediaIds?.length || typeof MEDIA_DATA === "undefined") return null;
    return MEDIA_DATA.find((media) =>
        referenceRecord.mediaIds.includes(media.id) &&
        media.ownerType === "tackle" &&
        media.isActive === true
    ) ?? null;
}

function buildReferenceImageMarkup(referenceRecord, className, loading = "lazy") {
    const media = getReferenceMedia(referenceRecord);
    if (!media) return "";
    return `<img class="${className}" src="${media.file}" alt="${media.alt}" loading="${loading}" decoding="async">`;
}

function renderReferencePopover(referenceId, triggerElement) {
    if (typeof TACKLE_DATA === "undefined") {
        console.error("Tackle reference data is not available.");
        return;
    }

    const referenceRecord = findRecordById(TACKLE_DATA, referenceId);
    if (!referenceRecord || referenceRecord.isActive !== true) {
        console.warn(`Reference record was not found: ${referenceId}`);
        return;
    }

    document.querySelector("[data-reference-popover]")?.remove();

    const aliasesMarkup = referenceRecord.aliases?.length ? `
        <section class="reference-popover__section"><h3>Also Called</h3><p>${referenceRecord.aliases.join(", ")}</p></section>
    ` : "";

    const recognitionMarkup = referenceRecord.recognitionNotes?.length ? `
        <section class="reference-popover__section"><h3>How to Recognize It</h3><ul>
            ${referenceRecord.recognitionNotes.map((note) => `<li>${note}</li>`).join("")}
        </ul></section>
    ` : "";

    const variantsMarkup = referenceRecord.commonVariants?.length ? `
        <section class="reference-popover__section"><h3>Common Variants</h3><p>${referenceRecord.commonVariants.join(", ")}</p></section>
    ` : "";

    const relatedRigNames = getRelatedRigNames(referenceRecord.rigIds);
    const rigsMarkup = relatedRigNames.length ? `
        <section class="reference-popover__section"><h3>Used In</h3><p>${relatedRigNames.join(", ")}</p></section>
    ` : "";

    const relatedTackleMarkup = referenceRecord.relatedTackleIds?.length ? `
        <section class="reference-popover__section">
            <h3>Related Components</h3>
            <div class="reference-popover__related">
                ${referenceRecord.relatedTackleIds.map((relatedId) => {
                    const related = findRecordById(TACKLE_DATA, relatedId);
                    if (!related || related.isActive !== true) return "";
                    return `<button class="reference-popover__related-link" type="button" data-related-reference-id="${related.id}">${related.name} <span aria-hidden="true">ⓘ</span></button>`;
                }).join("")}
            </div>
        </section>
    ` : "";

    const dialog = document.createElement("dialog");
    dialog.className = "reference-popover";
    dialog.dataset.referencePopover = "";
    dialog.setAttribute("aria-labelledby", "reference-popover-title");
    dialog.innerHTML = `
        <div class="reference-popover__shell">
            <header class="reference-popover__header">
                <div>
                    <p class="reference-popover__eyebrow">${referenceRecord.category}</p>
                    <h2 id="reference-popover-title">${referenceRecord.name}</h2>
                </div>
                <button class="reference-popover__close" type="button" data-reference-close aria-label="Close ${referenceRecord.name} information">×</button>
            </header>
            ${buildReferenceImageMarkup(referenceRecord, "reference-popover__image", "eager")}
            <div class="reference-popover__body">
                <p class="reference-popover__summary">${referenceRecord.summary}</p>
                <section class="reference-popover__section"><h3>What It Does</h3><p>${referenceRecord.purpose}</p></section>
                ${aliasesMarkup}${recognitionMarkup}${variantsMarkup}${rigsMarkup}${relatedTackleMarkup}
            </div>
        </div>
    `;

    document.body.append(dialog);
    const closeDialog = () => { if (dialog.open) dialog.close(); };
    dialog.querySelector("[data-reference-close]")?.addEventListener("click", closeDialog);
    dialog.addEventListener("click", (event) => { if (event.target === dialog) closeDialog(); });
    dialog.addEventListener("close", () => { dialog.remove(); triggerElement?.focus(); });

    dialog.querySelectorAll("[data-related-reference-id]").forEach((relatedButton) => {
        relatedButton.addEventListener("click", () => {
            const nextReferenceId = relatedButton.dataset.relatedReferenceId;
            dialog.addEventListener("close", () => renderReferencePopover(nextReferenceId, triggerElement), { once: true });
            closeDialog();
        });
    });

    dialog.showModal();
}

function initializeReferenceLinks(appMain) {
    appMain.querySelectorAll("[data-reference-id]").forEach((referenceLink) => {
        referenceLink.addEventListener("click", () => renderReferencePopover(referenceLink.dataset.referenceId, referenceLink));
    });
}

function buildRigReferenceLinks(record) {
    if (!Array.isArray(record.referenceLinks) || record.referenceLinks.length === 0) return "";
    return `
        <section class="detail-section rig-reference-section">
            <h3>Verified Rig Examples</h3>
            <p class="rig-reference-intro">Open an external fishing reference to visually confirm the completed rig. External links are used here instead of generated rig artwork.</p>
            <div class="rig-reference-links">
                ${record.referenceLinks.map((reference) => `
                    <a class="rig-reference-link" href="${reference.url}" target="_blank" rel="noopener noreferrer">${reference.label} <span aria-hidden="true">↗</span></a>
                `).join("")}
            </div>
        </section>
    `;
}

function buildTagList(items) {
    if (!Array.isArray(items) || items.length === 0) return "";
    return `<ul class="tag-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderInstructionDetail(appMain, detailConfig) {
    if (!appMain || !detailConfig?.record) {
        console.error("A valid instructional detail record is required.");
        return;
    }

    const record = detailConfig.record;
    const componentsMarkup = record.componentRequirements.map((component) => {
        const tackleRecord = findRecordById(TACKLE_DATA, component.id);
        const thumbnailMarkup = tackleRecord
            ? buildReferenceImageMarkup(tackleRecord, "component-reference-card__image")
            : "";

        return `
            <li class="component-reference-card">
                <div class="component-reference-card__media">${thumbnailMarkup}</div>
                <div class="component-reference-card__content">
                    <div class="component-reference-card__heading">
                        <button class="reference-link" type="button" data-reference-id="${component.id}" aria-label="More information about ${component.name}">
                            <span>${component.name}</span><span class="reference-link__icon" aria-hidden="true">ⓘ</span>
                        </button>
                        ${component.required ? "" : '<span class="detail-list__optional">Optional</span>'}
                    </div>
                    <p>${component.notes}</p>
                </div>
            </li>
        `;
    }).join("");

    const actionMarkup = typeof detailConfig.onAction === "function" ? `
        <button class="detail-primary-action" type="button" data-detail-action>${detailConfig.actionLabel}</button>
    ` : "";

    appMain.innerHTML = `
        <article class="detail-view" aria-labelledby="rig-detail-title">
            <div class="page-navigation-group">
                <button class="page-navigation" type="button" data-parent-navigation>← ${detailConfig.parentLabel}</button>
                <button class="page-navigation" type="button" data-home-navigation>Home</button>
            </div>
            <header class="detail-header">
                <p class="detail-eyebrow">${record.difficulty}</p>
                <h2 id="rig-detail-title">${record.name}</h2>
                <p>${record.summary}</p>
                ${actionMarkup}
            </header>
            <div class="rig-quick-grid">
                <section class="detail-section"><h3>Best For</h3>${buildTagList(record.useCases)}</section>
                <section class="detail-section"><h3>Good Conditions</h3>${buildTagList(record.conditionTags)}</section>
            </div>
            ${buildRigReferenceLinks(record)}
            <section class="detail-section">
                <h3>What You Need</h3>
                <ul class="component-reference-grid">${componentsMarkup}</ul>
            </section>
            <section class="detail-section">
                <h3>How to Build It</h3>
                <ol class="detail-steps">${record.assemblySteps.map((step) => `<li>${step}</li>`).join("")}</ol>
            </section>
            <section class="detail-section"><h3>Setup Notes</h3><ul class="detail-list">${record.setupNotes.map((note) => `<li>${note}</li>`).join("")}</ul></section>
            <section class="detail-section"><h3>Common Mistakes</h3><ul class="detail-list">${record.commonMistakes.map((mistake) => `<li>${mistake}</li>`).join("")}</ul></section>
            <section class="detail-section detail-section--safety"><h3>Safety</h3><ul class="detail-list">${record.safetyNotes.map((note) => `<li>${note}</li>`).join("")}</ul></section>
        </article>
    `;

    appMain.querySelector("[data-parent-navigation]")?.addEventListener("click", detailConfig.onParent);
    appMain.querySelector("[data-detail-action]")?.addEventListener("click", detailConfig.onAction);
    initializeReferenceLinks(appMain);
    initializeHomeNavigation(appMain);
}

function renderTackleGuide(appMain, guideConfig) {
    if (!appMain || !guideConfig || !Array.isArray(guideConfig.records)) {
        console.error("A valid Tackle Guide configuration is required.");
        return;
    }

    appMain.innerHTML = `
        <section class="tackle-guide" aria-labelledby="tackle-guide-title">
            <button class="page-navigation" type="button" data-home-navigation>← Home</button>
            <header class="tackle-guide__header">
                <p class="detail-eyebrow detail-eyebrow--tackle">Reference Guide</p>
                <h2 id="tackle-guide-title">Tackle Guide</h2>
                <p>Learn what common freshwater tackle looks like, what it does, and which current rigs use it.</p>
            </header>
            <figure class="tackle-board">
                <img src="${guideConfig.boardFile}" alt="${guideConfig.boardAlt}" decoding="async">
                <figcaption>Visual reference board. Select any item below for the canonical project description and related rigs.</figcaption>
            </figure>
            <form class="search-form" data-tackle-search-form>
                <label class="search-label" for="tackle-guide-search">Search tackle</label>
                <div class="search-controls">
                    <input class="search-input" id="tackle-guide-search" type="search" placeholder="Try bobber, hook, sinker, swivel, or bait" autocomplete="off">
                    <button class="search-button search-button--tackle" type="submit">Search</button>
                </div>
            </form>
            <p class="search-status" data-tackle-status aria-live="polite"></p>
            <div class="tackle-reference-grid" data-tackle-results></div>
        </section>
    `;

    const input = appMain.querySelector("#tackle-guide-search");
    const form = appMain.querySelector("[data-tackle-search-form]");
    const results = appMain.querySelector("[data-tackle-results]");
    const status = appMain.querySelector("[data-tackle-status]");

    const updateResults = () => {
        const query = (input?.value ?? "").trim().toLowerCase();
        const matches = guideConfig.records.filter((record) => {
            if (!record.isActive) return false;
            const haystack = [record.name, record.category, record.summary, ...(record.aliases ?? [])].join(" ").toLowerCase();
            return !query || haystack.includes(query);
        }).sort((a, b) => a.name.localeCompare(b.name));

        status.textContent = `${matches.length} ${matches.length === 1 ? "item" : "items"}`;
        results.innerHTML = matches.map((record) => `
            <button class="tackle-reference-card" type="button" data-reference-id="${record.id}">
                <span class="tackle-reference-card__media">
                    ${buildReferenceImageMarkup(record, "tackle-reference-card__image")}
                </span>
                <span class="tackle-reference-card__content">
                    <span class="tackle-reference-card__category">${record.category}</span>
                    <strong>${record.name}</strong>
                    <span>${record.summary}</span>
                    <span class="tackle-reference-card__action">Details ⓘ</span>
                </span>
            </button>
        `).join("");
        initializeReferenceLinks(results);
    };

    form?.addEventListener("submit", (event) => { event.preventDefault(); updateResults(); });
    input?.addEventListener("input", updateResults);
    initializeHomeNavigation(appMain);
    updateResults();
}

function renderTackleReadiness(appMain, readinessConfig) {
    if (!appMain || !readinessConfig?.rig) {
        console.error("A valid Rig readiness configuration is required.");
        return;
    }

    const rig = readinessConfig.rig;
    const selections = readinessConfig.selections ?? {};
    const checklistMarkup = rig.componentRequirements.map((component) => {
        const isChecked = selections[component.id] === true;
        return `
            <label class="readiness-item">
                <input class="readiness-item__checkbox" type="checkbox" data-component-id="${component.id}" ${isChecked ? "checked" : ""}>
                <span class="readiness-item__content">
                    <span class="readiness-item__name">${component.name}${component.required ? "" : '<span class="readiness-item__optional"> (Optional)</span>'}</span>
                    <span class="readiness-item__notes">${component.notes}</span>
                </span>
            </label>
        `;
    }).join("");

    appMain.innerHTML = `
        <section class="readiness-view" aria-labelledby="readiness-title">
            <div class="page-navigation-group">
                <button class="page-navigation" type="button" data-parent-navigation>← ${readinessConfig.parentLabel}</button>
                <button class="page-navigation" type="button" data-home-navigation>Home</button>
            </div>
            <header class="detail-header">
                <p class="detail-eyebrow">Tackle Check</p>
                <h2 id="readiness-title">${rig.name}</h2>
                <p>Mark each item you have. Your selections are saved on this device.</p>
            </header>
            <div class="readiness-status" data-readiness-status></div>
            <div class="readiness-checklist">${checklistMarkup}</div>
        </section>
    `;

    const updateStatus = () => {
        const checkboxes = Array.from(appMain.querySelectorAll("[data-component-id]"));
        const missingRequired = rig.componentRequirements.filter((component) => {
            if (!component.required) return false;
            return !checkboxes.find((item) => item.dataset.componentId === component.id)?.checked;
        });
        const status = appMain.querySelector("[data-readiness-status]");
        if (!status) return;
        if (missingRequired.length === 0) {
            status.className = "readiness-status readiness-status--ready";
            status.innerHTML = `<strong>Ready to Fish</strong><span>All required components are marked available.</span>`;
            return;
        }
        status.className = "readiness-status readiness-status--missing";
        status.innerHTML = `<strong>Missing ${missingRequired.length} Required ${missingRequired.length === 1 ? "Item" : "Items"}</strong><span>${missingRequired.map((item) => item.name).join(", ")}</span>`;
    };

    appMain.querySelector("[data-parent-navigation]")?.addEventListener("click", readinessConfig.onParent);
    appMain.querySelectorAll("[data-component-id]").forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            readinessConfig.onChange(checkbox.dataset.componentId, checkbox.checked);
            updateStatus();
        });
    });
    initializeHomeNavigation(appMain);
    updateStatus();
}

console.info(`[Loaded] ${VIEW_RENDERER_BUILD_INFO.file} | ${VIEW_RENDERER_BUILD_INFO.milestone} | ${VIEW_RENDERER_BUILD_INFO.replacement}`);
