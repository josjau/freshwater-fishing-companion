/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: view-renderer.js
   PURPOSE: Owns reusable views, search results, Rig details,
   My Tackle presentation, contextual references, and inline Rig readiness.
   ========================================================== */

"use strict";

const VIEW_RENDERER_BUILD_INFO = Object.freeze({
    file: "view-renderer.js",
    milestone: "Rig Learning Tiers"
});

function renderView(appMain, viewConfig) {
    if (!appMain || !viewConfig || !Array.isArray(viewConfig.cards)) {
        console.error("A valid view configuration is required.");
        return;
    }

    const cardsMarkup = viewConfig.cards.map((card) => {
        const isAvailable = card.isAvailable === true && typeof viewConfig.onCardSelect === "function";

        if (!isAvailable) {
            return `
                <div class="dashboard-card dashboard-card--unavailable" aria-disabled="true">
                    <span class="dashboard-card__title">${card.title}</span>
                    <span class="dashboard-card__description">${card.description}</span>
                    <span class="dashboard-card__action">Coming Soon</span>
                </div>
            `;
        }

        return `
            <button class="dashboard-card" type="button" data-card-id="${card.id}">
                <span class="dashboard-card__title">${card.title}</span>
                <span class="dashboard-card__description">${card.description}</span>
            </button>
        `;
    }).join("");

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

function isCoreRigRecord(record) {
    return Boolean(record?.id) &&
        typeof CORE_RIG_IDS !== "undefined" &&
        CORE_RIG_IDS.includes(record.id);
}

function getTackleRecord(tackleId) {
    if (!tackleId || typeof TACKLE_DATA === "undefined") return null;
    const record = findRecordById(TACKLE_DATA, tackleId);
    return record?.isActive === true ? record : null;
}

function getRelatedRigNames(tackleId) {
    if (!tackleId || typeof RIG_DATA === "undefined") return [];

    return RIG_DATA
        .filter((rig) =>
            rig.isActive === true &&
            Array.isArray(rig.componentRequirements) &&
            rig.componentRequirements.some((requirement) => requirement.tackleId === tackleId)
        )
        .map((rig) => rig.name);
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

    const relatedRigNames = getRelatedRigNames(referenceRecord.id);
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
    const selections = detailConfig.selections ?? {};
    const isCoreRig = isCoreRigRecord(record);
    const componentsMarkup = record.componentRequirements.map((component) => {
        const tackleRecord = getTackleRecord(component.tackleId);
        const componentName = tackleRecord?.name ?? component.tackleId;
        const isOwned = selections[component.tackleId] === true;
        const checkboxId = `rig-component-owned-${record.id}-${component.tackleId}`;

        if (!tackleRecord) {
            console.warn(`Canonical Tackle record was not found: ${component.tackleId}`);
        }

        return `
            <li class="rig-component-item">
                <div class="rig-component-item__heading">
                    <button
                        class="reference-link"
                        type="button"
                        data-reference-id="${component.tackleId}"
                        aria-label="More information about ${componentName}"
                    >
                        <span>${componentName}</span>
                        <span class="reference-link__icon" aria-hidden="true">ⓘ</span>
                    </button>
                    ${
                        component.required
                            ? '<span class="rig-component-item__required">Required</span>'
                            : '<span class="detail-list__optional">Optional</span>'
                    }
                </div>
                <p>${component.notes}</p>
                <label class="rig-component-owned" for="${checkboxId}">
                    <input
                        id="${checkboxId}"
                        class="rig-component-owned__checkbox"
                        type="checkbox"
                        data-component-owned-id="${component.tackleId}"
                        ${isOwned ? "checked" : ""}
                    >
                    <span>I have this</span>
                </label>
            </li>
        `;
    }).join("");

    appMain.innerHTML = `
        <article class="detail-view" aria-labelledby="rig-detail-title">
            <div class="page-navigation-group">
                <button class="page-navigation" type="button" data-parent-navigation>← ${detailConfig.parentLabel}</button>
                <button class="page-navigation" type="button" data-home-navigation>Home</button>
            </div>
            <header class="detail-header${isCoreRig ? " detail-header--core" : ""}">
                ${isCoreRig ? '<p class="detail-core-badge">Core Rig</p>' : ""}
                <p class="detail-eyebrow">${record.difficulty}</p>
                <h2 id="rig-detail-title">${record.name}</h2>
                <p>${record.summary}</p>
            </header>
            <div class="rig-quick-grid">
                <section class="detail-section"><h3>Best For</h3>${buildTagList(record.useCases)}</section>
                <section class="detail-section"><h3>Good Conditions</h3>${buildTagList(record.conditionTags)}</section>
            </div>
            ${buildRigReferenceLinks(record)}
            <section class="detail-section rig-requirements-section">
                <div class="rig-requirements-section__header">
                    <div>
                        <h3>What You Need</h3>
                        <p>Mark the tackle you have. Select any item name for identification help.</p>
                    </div>
                    <div class="readiness-status" data-readiness-status aria-live="polite"></div>
                </div>
                <ul class="rig-component-list">${componentsMarkup}</ul>
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

    const updateReadinessStatus = () => {
        const checkboxes = Array.from(
            appMain.querySelectorAll("[data-component-owned-id]")
        );
        const missingRequired = record.componentRequirements.filter(
            (component) => {
                if (!component.required) return false;
                return !checkboxes.find(
                    (checkbox) =>
                        checkbox.dataset.componentOwnedId === component.tackleId
                )?.checked;
            }
        );
        const status = appMain.querySelector("[data-readiness-status]");
        if (!status) return;

        if (missingRequired.length === 0) {
            status.className = "readiness-status readiness-status--ready";
            status.innerHTML = `
                <strong>Ready to Fish</strong>
                <span>All required tackle is marked available.</span>
            `;
            return;
        }

        status.className = "readiness-status readiness-status--missing";
        status.innerHTML = `
            <strong>Missing ${missingRequired.length}</strong>
            <span>${missingRequired.map((item) => getTackleRecord(item.tackleId)?.name ?? item.tackleId).join(", ")}</span>
        `;
    };

    appMain.querySelector("[data-parent-navigation]")?.addEventListener("click", detailConfig.onParent);
    appMain.querySelectorAll("[data-component-owned-id]").forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            detailConfig.onReadinessChange?.(
                checkbox.dataset.componentOwnedId,
                checkbox.checked
            );
            updateReadinessStatus();
        });
    });

    initializeReferenceLinks(appMain);
    initializeHomeNavigation(appMain);
    updateReadinessStatus();
}

console.info(`[Loaded] ${VIEW_RENDERER_BUILD_INFO.file} | ${VIEW_RENDERER_BUILD_INFO.milestone}`);
