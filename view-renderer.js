/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: view-renderer.js
   PURPOSE: Provides shared search, navigation, card and disclosure
   rendering primitives. Guide-owned presentation lives in its owner.
   ========================================================== */

"use strict";

const VIEW_RENDERER_BUILD_INFO = Object.freeze({
    file: "view-renderer.js"
});

/* ==========================================================
   SHARED RENDERING — SEARCH + NAVIGATION PRIMITIVES
   ========================================================== */

function buildSearchControlsMarkup(inputId, placeholder, options = {}) {
    const showSubmitButton = options.showSubmitButton !== false;
    const describedBy = options.inputDescriptionId
        ? ` aria-describedby="${options.inputDescriptionId}"`
        : "";

    return `
        <div class="search-controls">
            <div class="search-input-shell">
                <input class="search-input" id="${inputId}" name="query" type="search"
                    placeholder="${placeholder}" autocomplete="off" enterkeyhint="search"${describedBy}>
                <button class="search-clear-button" type="button" data-search-clear aria-label="Clear search" hidden>
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            ${showSubmitButton ? '<button class="search-button" type="submit">Search</button>' : ""}
        </div>
    `;
}

function buildPageNavigationMarkup(parentLabel = null, groupClassName = "", workflowContextMarkup = "") {
    const backArrowMarkup = '<span class="link-arrow link-arrow--back" aria-hidden="true">←</span>';
    const parentLabelClass = typeof parentLabel === "string" && parentLabel.length > 22
        ? " page-navigation--long-label"
        : "";
    const parentMarkup = parentLabel
        ? `<button class="page-navigation${parentLabelClass}" type="button" data-parent-navigation>${backArrowMarkup} ${parentLabel}</button>`
        : "";
    const homeLabel = parentLabel ? "Home" : `${backArrowMarkup} Home`;
    const groupClass = groupClassName ? ` ${groupClassName}` : "";
    const workflowClass = workflowContextMarkup ? " page-navigation-group--with-workflow-context" : "";
    const navigationMarkup = `
        <div class="page-navigation-group${groupClass}${workflowClass}">
            ${parentMarkup}
            <button class="page-navigation" type="button" data-home-navigation>${homeLabel}</button>
        </div>
    `;

    return workflowContextMarkup
        ? `${navigationMarkup}${workflowContextMarkup}`
        : navigationMarkup;
}

function initializeSearchControls(form, input, clearButton, onUpdate) {
    if (!input || typeof onUpdate !== "function") return;

    const update = () => {
        if (clearButton) {
            clearButton.hidden = input.value.length === 0;
        }
        onUpdate();
    };

    form?.addEventListener("submit", (event) => {
        event.preventDefault();
        update();
    });
    input.addEventListener("input", update);
    clearButton?.addEventListener("click", () => {
        input.value = "";
        update();
        input.focus();
    });

    if (clearButton) {
        clearButton.hidden = input.value.length === 0;
    }
}

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

    const searchConfig = viewConfig.search;
    const searchMarkup = searchConfig ? `
        <form class="search-form section-search-form" data-section-search-form>
            <label class="search-label" for="${searchConfig.inputId}">${searchConfig.label}</label>
            ${buildSearchControlsMarkup(searchConfig.inputId, searchConfig.placeholder)}
        </form>
        <div class="section-search-results" data-section-search-region hidden>
            <p class="search-status" data-search-status aria-live="polite"></p>
            <div class="search-results" data-search-results></div>
        </div>
    ` : "";

    appMain.innerHTML = `
        <section class="content-view" aria-labelledby="${viewConfig.headingId}">
            ${buildPageNavigationMarkup()}
            <h2 id="${viewConfig.headingId}">${viewConfig.title}</h2>
            <p>${viewConfig.description}</p>
            ${searchMarkup}
            <div class="dashboard-grid" data-view-card-grid>${cardsMarkup}</div>
        </section>
    `;

    initializeHomeNavigation(appMain);
    initializeViewCardActions(appMain, viewConfig.onCardSelect);

    if (searchConfig && typeof searchConfig.onSearch === "function") {
        const form = appMain.querySelector("[data-section-search-form]");
        const input = appMain.querySelector(`#${searchConfig.inputId}`);
        const clearButton = appMain.querySelector("[data-search-clear]");
        const cardGrid = appMain.querySelector("[data-view-card-grid]");
        const searchRegion = appMain.querySelector("[data-section-search-region]");

        const updateSearch = () => {
            const query = input?.value?.trim() ?? "";
            const hasQuery = query.length > 0;
            if (cardGrid) cardGrid.hidden = hasQuery;
            if (searchRegion) searchRegion.hidden = !hasQuery;

            if (!hasQuery) {
                const status = appMain.querySelector("[data-search-status]");
                const results = appMain.querySelector("[data-search-results]");
                if (status) status.textContent = "";
                if (results) results.innerHTML = "";
                return;
            }

            searchConfig.onSearch(query);
        };

        initializeSearchControls(form, input, clearButton, updateSearch);
    }
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

    const viewClass = searchConfig.viewClass ? ` ${searchConfig.viewClass}` : "";
    const helpId = searchConfig.inputDescriptionId ?? `${searchConfig.inputId}-help`;
    const helpMarkup = searchConfig.helpText
        ? `<p class="search-help" id="${helpId}">${searchConfig.helpText}</p>`
        : "";

    appMain.innerHTML = `
        <section class="content-view${viewClass}" aria-labelledby="${searchConfig.headingId}">
            ${buildPageNavigationMarkup(searchConfig.parentLabel)}
            <h2 id="${searchConfig.headingId}">${searchConfig.title}</h2>
            <p>${searchConfig.description}</p>
            <form class="search-form" data-search-form>
                <label class="search-label" for="${searchConfig.inputId}">${searchConfig.label}</label>
                ${helpMarkup}
                ${buildSearchControlsMarkup(searchConfig.inputId, searchConfig.placeholder, {
                    showSubmitButton: searchConfig.showSubmitButton,
                    inputDescriptionId: searchConfig.helpText ? helpId : null
                })}
            </form>
            <p class="search-status" data-search-status aria-live="polite"></p>
            <div class="search-results" data-search-results></div>
        </section>
    `;

    const searchForm = appMain.querySelector("[data-search-form]");
    const searchInput = appMain.querySelector(`#${searchConfig.inputId}`);
    const clearButton = appMain.querySelector("[data-search-clear]");

    appMain.querySelector("[data-parent-navigation]")?.addEventListener("click", searchConfig.onParent);
    initializeHomeNavigation(appMain);

    if (searchInput && typeof searchConfig.initialQuery === "string") {
        searchInput.value = searchConfig.initialQuery;
    }

    const updateSearch = () => {
        const query = searchInput?.value ?? "";
        searchConfig.onQueryChange?.(query);
        searchConfig.onSearch(query);
    };
    initializeSearchControls(searchForm, searchInput, clearButton, updateSearch);

    updateSearch();
}

function renderSearchResults(appMain, records, resultConfig) {
    const resultsContainer = appMain.querySelector("[data-search-results]");
    const status = appMain.querySelector("[data-search-status]");

    if (!resultsContainer || !status) {
        console.error("Search result containers were not created.");
        return;
    }

    if (!Array.isArray(records) || records.length === 0) {
        status.textContent = typeof resultConfig.emptyMessage === "function"
            ? resultConfig.emptyMessage(records)
            : resultConfig.emptyMessage;
        resultsContainer.innerHTML = "";
        return;
    }

    status.textContent = typeof resultConfig.statusText === "function"
        ? resultConfig.statusText(records)
        : `${records.length} ${records.length === 1 ? "result" : "results"}`;
    resultsContainer.innerHTML = records.map((record) => resultConfig.renderRecord(record)).join("");

    if (typeof resultConfig.onResultSelect !== "function") return;
    resultsContainer.querySelectorAll("[data-result-id]").forEach((resultCard) => {
        resultCard.addEventListener("click", () => resultConfig.onResultSelect(resultCard.dataset.resultId));
    });
}


console.info(`[Loaded] ${VIEW_RENDERER_BUILD_INFO.file}`);
