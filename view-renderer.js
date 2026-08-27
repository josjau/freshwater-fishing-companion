/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: view-renderer.js
   PURPOSE: Owns reusable views, search results, Rig/Knot details,
   My Tackle presentation, contextual references, and inline Rig readiness.
   ========================================================== */

"use strict";

const VIEW_RENDERER_BUILD_INFO = Object.freeze({
    file: "view-renderer.js"
});

function buildSearchControlsMarkup(inputId, placeholder) {
    return `
        <div class="search-controls">
            <div class="search-input-shell">
                <input class="search-input" id="${inputId}" name="query" type="search"
                    placeholder="${placeholder}" autocomplete="off" enterkeyhint="search">
                <button class="search-clear-button" type="button" data-search-clear aria-label="Clear search" hidden>
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <button class="search-button" type="submit">Search</button>
        </div>
    `;
}

function buildPageNavigationMarkup(parentLabel = null) {
    const backArrowMarkup = '<span class="link-arrow link-arrow--back" aria-hidden="true">←</span>';
    const parentMarkup = parentLabel
        ? `<button class="page-navigation" type="button" data-parent-navigation>${backArrowMarkup} ${parentLabel}</button>`
        : "";
    const homeLabel = parentLabel ? "Home" : `${backArrowMarkup} Home`;

    return `
        <div class="page-navigation-group">
            ${parentMarkup}
            <button class="page-navigation" type="button" data-home-navigation>${homeLabel}</button>
        </div>
    `;
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

    appMain.innerHTML = `
        <section class="content-view" aria-labelledby="${searchConfig.headingId}">
            ${buildPageNavigationMarkup(searchConfig.parentLabel)}
            <h2 id="${searchConfig.headingId}">${searchConfig.title}</h2>
            <p>${searchConfig.description}</p>
            <form class="search-form" data-search-form>
                <label class="search-label" for="${searchConfig.inputId}">${searchConfig.label}</label>
                ${buildSearchControlsMarkup(searchConfig.inputId, searchConfig.placeholder)}
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


function buildFishMediaMarkup(media, className, loading = "lazy") {
    if (!media?.file) return "";
    return `<img class="${className}" src="${media.file}" alt="${media.alt ?? ""}" loading="${loading}" decoding="async">`;
}

const FISH_IMAGE_FRAMING = Object.freeze({
    "largemouth-bass": Object.freeze({
        selection: Object.freeze({ scale: 0.98, positionY: "24%", offsetX: "0%" }),
        detail: Object.freeze({ scale: 1.03, positionY: "19%", offsetX: "0%" }),
        similar: Object.freeze({ scale: 0.95, positionY: "41%", offsetX: "0%", offsetY: "5%" }),
        compareCatalog: Object.freeze({ scale: 0.92, positionY: "41%", offsetX: "0%", offsetY: "5%" }),
        compareDetail: Object.freeze({ scale: 0.94, positionY: "41%", offsetX: "0%", offsetY: "4%" })
    }),
    "smallmouth-bass": Object.freeze({
        selection: Object.freeze({ scale: 1.18, positionY: "27%", offsetX: "-3.5%" }),
        detail: Object.freeze({ scale: 1.22, positionY: "22%", offsetX: "-3.5%" }),
        similar: Object.freeze({ scale: 1.17, positionY: "43%", offsetX: "-3.5%", offsetY: "3%" }),
        compareCatalog: Object.freeze({ scale: 1.17, positionY: "43%", offsetX: "-3.5%", offsetY: "3%" }),
        compareDetail: Object.freeze({ scale: 1.17, positionY: "43%", offsetX: "-3.5%", offsetY: "3%" })
    }),
    "spotted-bass": Object.freeze({
        selection: Object.freeze({ scale: 0.98, positionY: "50%", offsetX: "0%" }),
        detail: Object.freeze({ scale: 1.02, positionY: "50%", offsetX: "0%" }),
        similar: Object.freeze({ scale: 0.95, positionY: "50%", offsetX: "0%", offsetY: "-1%" }),
        compareCatalog: Object.freeze({ scale: 0.93, positionY: "50%", offsetX: "0%", offsetY: "-1%" }),
        compareDetail: Object.freeze({ scale: 0.94, positionY: "50%", offsetX: "0%", offsetY: "-1%" })
    }),
    "white-bass": Object.freeze({
        selection: Object.freeze({ scale: 1.27, positionY: "36%", offsetX: "-5.5%" }),
        detail: Object.freeze({ scale: 1.31, positionY: "31%", offsetX: "-5.5%" }),
        similar: Object.freeze({ scale: 1.27, positionY: "46%", offsetX: "-5.5%", offsetY: "2%" }),
        compareCatalog: Object.freeze({ scale: 1.27, positionY: "46%", offsetX: "-5.5%", offsetY: "2%" }),
        compareDetail: Object.freeze({ scale: 1.27, positionY: "46%", offsetX: "-5.5%", offsetY: "2%" })
    }),
    "striped-bass": Object.freeze({
        selection: Object.freeze({ scale: 1.00, positionY: "40%", offsetX: "0%" }),
        detail: Object.freeze({ scale: 1.05, positionY: "38%", offsetX: "0%" }),
        similar: Object.freeze({ scale: 0.96, positionY: "47%", offsetX: "0%", offsetY: "1%" }),
        compareCatalog: Object.freeze({ scale: 0.95, positionY: "47%", offsetX: "0%", offsetY: "1%" }),
        compareDetail: Object.freeze({ scale: 0.96, positionY: "47%", offsetX: "0%", offsetY: "1%" })
    }),
    "hybrid-striped-bass": Object.freeze({
        selection: Object.freeze({ scale: 0.96, positionY: "50%", offsetX: "0%" }),
        detail: Object.freeze({ scale: 1.00, positionY: "50%", offsetX: "0%" }),
        similar: Object.freeze({ scale: 0.94, positionY: "50%", offsetX: "0%", offsetY: "-1%" }),
        compareCatalog: Object.freeze({ scale: 0.93, positionY: "50%", offsetX: "0%", offsetY: "-1%" }),
        compareDetail: Object.freeze({ scale: 0.94, positionY: "50%", offsetX: "0%", offsetY: "-1%" })
    }),
    "rainbow-trout": Object.freeze({
        selection: Object.freeze({ scale: 1.06, positionY: "30%", offsetX: "0%" }),
        detail: Object.freeze({ scale: 1.06, positionY: "17%", offsetX: "0%" }),
        similar: Object.freeze({ scale: 0.91, positionY: "30%", offsetX: "0%" }),
        compareCatalog: Object.freeze({ scale: 0.91, positionY: "30%", offsetX: "0%", offsetY: "7.0%" }),
        compareDetail: Object.freeze({ scale: 0.92, positionY: "30%", offsetX: "0%" })
    }),
    "brown-trout": Object.freeze({
        selection: Object.freeze({ scale: 1.27, positionY: "43%", offsetX: "-2.7%" }),
        detail: Object.freeze({ scale: 1.31, positionY: "39%", offsetX: "-2.7%" }),
        similar: Object.freeze({ scale: 1.18, positionY: "43%", offsetX: "-2.7%" }),
        compareCatalog: Object.freeze({ scale: 1.18, positionY: "43%", offsetX: "-2.7%", offsetY: "-0.5%" }),
        compareDetail: Object.freeze({ scale: 1.18, positionY: "43%", offsetX: "-2.7%" })
    }),
    "longnose-gar": Object.freeze({
        selection: Object.freeze({ scale: 1.28, positionY: "21%", offsetX: "2.4%" }),
        detail: Object.freeze({ scale: 1.28, positionY: "5%", offsetX: "2.4%" }),
        similar: Object.freeze({ scale: 1.17, positionY: "21%", offsetX: "2.4%" }),
        compareCatalog: Object.freeze({ scale: 1.17, positionY: "21%", offsetX: "2.4%", offsetY: "14.5%" }),
        compareDetail: Object.freeze({ scale: 1.19, positionY: "21%", offsetX: "2.4%" })
    }),
    "spotted-gar": Object.freeze({
        selection: Object.freeze({ scale: 1.08, positionY: "26%", offsetX: "0.8%" }),
        detail: Object.freeze({ scale: 1.08, positionY: "15%", offsetX: "0.8%" }),
        similar: Object.freeze({ scale: 0.98, positionY: "26%", offsetX: "0.8%" }),
        compareCatalog: Object.freeze({ scale: 0.98, positionY: "26%", offsetX: "0.8%", offsetY: "9.5%" }),
        compareDetail: Object.freeze({ scale: 0.95, positionY: "26%", offsetX: "0.8%" })
    }),
    "common-carp": Object.freeze({
        selection: Object.freeze({ scale: 1.00, positionY: "42%", offsetX: "-1.5%" }),
        detail: Object.freeze({ scale: 1.08, positionY: "38%", offsetX: "-3%" }),
        similar: Object.freeze({ scale: 1.05, positionY: "42%", offsetX: "-1.5%" }),
        compareCatalog: Object.freeze({ scale: 1.05, positionY: "42%", offsetX: "-1.5%" }),
        compareDetail: Object.freeze({ scale: 0.98, positionY: "42%", offsetX: "-3%" })
    }),
    "freshwater-drum": Object.freeze({
        selection: Object.freeze({ scale: 1.06, positionY: "45%", offsetX: "-1%" }),
        detail: Object.freeze({ scale: 1.18, positionY: "42%", offsetX: "-1%" }),
        similar: Object.freeze({ scale: 1.12, positionY: "45%", offsetX: "-1%" }),
        compareCatalog: Object.freeze({ scale: 1.12, positionY: "45%", offsetX: "-1%" }),
        compareDetail: Object.freeze({ scale: 1.21, positionY: "45%", offsetX: "-1%" })
    }),
    "paddlefish": Object.freeze({
        selection: Object.freeze({ scale: 1.00, positionY: "42%", offsetX: "0%" }),
        detail: Object.freeze({ scale: 1.00, positionY: "35%", offsetX: "0%" }),
        similar: Object.freeze({ scale: 0.85, positionY: "42%", offsetX: "0%" }),
        compareCatalog: Object.freeze({ scale: 0.85, positionY: "42%", offsetX: "0%" }),
        compareDetail: Object.freeze({ scale: 0.84, positionY: "42%", offsetX: "0%" })
    }),
    "walleye": Object.freeze({
        selection: Object.freeze({ scale: 1.06, positionY: "24%", offsetX: "-1%" }),
        detail: Object.freeze({ scale: 1.13, positionY: "8%", offsetX: "-1%" }),
        similar: Object.freeze({ scale: 1.00, positionY: "24%", offsetX: "-1%" }),
        compareCatalog: Object.freeze({ scale: 1.00, positionY: "24%", offsetX: "-1%", offsetY: "6.5%" }),
        compareDetail: Object.freeze({ scale: 1.05, positionY: "24%", offsetX: "-1%" })
    }),
    "sauger": Object.freeze({
        selection: Object.freeze({ scale: 1.12, positionY: "43%", offsetX: "1%" }),
        detail: Object.freeze({ scale: 1.21, positionY: "40%", offsetX: "1%" }),
        similar: Object.freeze({ scale: 1.12, positionY: "43%", offsetX: "1%" }),
        compareCatalog: Object.freeze({ scale: 1.12, positionY: "43%", offsetX: "1%", offsetY: "3.0%" }),
        compareDetail: Object.freeze({ scale: 1.00, positionY: "43%", offsetX: "1%" })
    }),
    "saugeye": Object.freeze({
        selection: Object.freeze({ scale: 0.88, positionY: "54%", offsetX: "0%" }),
        detail: Object.freeze({ scale: 0.94, positionY: "57%", offsetX: "0%" }),
        similar: Object.freeze({ scale: 0.85, positionY: "54%", offsetX: "0%" }),
        compareCatalog: Object.freeze({ scale: 0.85, positionY: "54%", offsetX: "0%", offsetY: "-3.0%" }),
        compareDetail: Object.freeze({ scale: 0.82, positionY: "54%", offsetX: "0%" })
    }),
    "channel-catfish": Object.freeze({
        selection: Object.freeze({ scale: 1.14, positionY: "23%", offsetX: "-1%" }),
        detail: Object.freeze({ scale: 1.14, positionY: "8%", offsetX: "-1%" }),
        similar: Object.freeze({ scale: 1.02, positionY: "23%", offsetX: "-1%" }),
        compareCatalog: Object.freeze({ scale: 1.02, positionY: "23%", offsetX: "-1%", offsetY: "8.5%" }),
        compareDetail: Object.freeze({ scale: 1.00, positionY: "23%", offsetX: "-1%" })
    }),
    "blue-catfish": Object.freeze({
        selection: Object.freeze({ scale: 1.40, positionY: "24%", offsetX: "-2%" }),
        detail: Object.freeze({ scale: 1.40, positionY: "12%", offsetX: "-2%" }),
        similar: Object.freeze({ scale: 1.32, positionY: "24%", offsetX: "-2%" }),
        compareCatalog: Object.freeze({ scale: 1.32, positionY: "24%", offsetX: "-2%", offsetY: "16.5%" }),
        compareDetail: Object.freeze({ scale: 1.24, positionY: "24%", offsetX: "-2%" })
    }),
    "flathead-catfish": Object.freeze({
        selection: Object.freeze({ scale: 1.02, positionY: "42%", offsetX: "0%" }),
        detail: Object.freeze({ scale: 1.05, positionY: "38%", offsetX: "0%" }),
        similar: Object.freeze({ scale: 0.94, positionY: "42%", offsetX: "0%" }),
        compareCatalog: Object.freeze({ scale: 0.94, positionY: "42%", offsetX: "0%", offsetY: "2.0%" }),
        compareDetail: Object.freeze({ scale: 0.88, positionY: "42%", offsetX: "0%" })
    }),
    "black-bullhead": Object.freeze({
        selection: Object.freeze({ scale: 1.16, positionY: "32%", offsetX: "-3%" }),
        detail: Object.freeze({ scale: 1.30, positionY: "23%", offsetX: "-4%" }),
        similar: Object.freeze({ scale: 1.27, positionY: "32%", offsetX: "-3%" }),
        compareCatalog: Object.freeze({ scale: 1.27, positionY: "32%", offsetX: "-3%", offsetY: "9.5%" }),
        compareDetail: Object.freeze({ scale: 1.33, positionY: "32%", offsetX: "-3%" })
    }),
    "yellow-bullhead": Object.freeze({
        selection: Object.freeze({ scale: 1.39, positionY: "39%", offsetX: "-2%" }),
        detail: Object.freeze({ scale: 1.49, positionY: "35%", offsetX: "-2%" }),
        similar: Object.freeze({ scale: 1.35, positionY: "39%", offsetX: "-2%" }),
        compareCatalog: Object.freeze({ scale: 1.35, positionY: "39%", offsetX: "-2%", offsetY: "5.0%" }),
        compareDetail: Object.freeze({ scale: 1.30, positionY: "39%", offsetX: "-2%" })
    }),
    "bluegill": Object.freeze({
        selection: Object.freeze({ scale: 0.92, positionY: "45%", offsetX: "0%" }),
        detail: Object.freeze({ scale: 1.00, positionY: "50%", offsetX: "0%" }),
        similar: Object.freeze({ scale: 1.40, positionY: "50%", offsetX: "0%", offsetY: "3%" }),
        compareCatalog: Object.freeze({ scale: 1.40, positionY: "50%", offsetX: "0%", offsetY: "3%" }),
        compareDetail: Object.freeze({ scale: 1.35, positionY: "50%", offsetX: "0%", offsetY: "3%" })
    }),
    "redear-sunfish": Object.freeze({
        selection: Object.freeze({ scale: 1.10, positionY: "39%", offsetX: "-3%" }),
        detail: Object.freeze({ scale: 1.10, positionY: "37%", offsetX: "-3%" }),
        similar: Object.freeze({ scale: 1.55, positionY: "50%", offsetX: "-8%", offsetY: "5%" }),
        compareCatalog: Object.freeze({ scale: 1.55, positionY: "50%", offsetX: "-8%", offsetY: "5%" }),
        compareDetail: Object.freeze({ scale: 1.55, positionY: "50%", offsetX: "-8%", offsetY: "5%" })
    }),
    "green-sunfish": Object.freeze({
        selection: Object.freeze({ scale: 1.10, positionY: "28%", offsetX: "0%" }),
        detail: Object.freeze({ scale: 1.12, positionY: "24%", offsetX: "0%" }),
        similar: Object.freeze({ scale: 1.55, positionY: "50%", offsetX: "0%", offsetY: "12%" }),
        compareCatalog: Object.freeze({ scale: 1.55, positionY: "50%", offsetX: "0%", offsetY: "12%" }),
        compareDetail: Object.freeze({ scale: 1.50, positionY: "50%", offsetX: "0%", offsetY: "12%" })
    }),
    "longear-sunfish": Object.freeze({
        selection: Object.freeze({ scale: 1.10, positionY: "38%", offsetX: "-1%" }),
        detail: Object.freeze({ scale: 1.10, positionY: "35%", offsetX: "-1%" }),
        similar: Object.freeze({ scale: 1.50, positionY: "50%", offsetX: "-4.5%", offsetY: "6%" }),
        compareCatalog: Object.freeze({ scale: 1.50, positionY: "50%", offsetX: "-4.5%", offsetY: "6%" }),
        compareDetail: Object.freeze({ scale: 1.50, positionY: "50%", offsetX: "-4%", offsetY: "6%" })
    }),
    "northern-rock-bass": Object.freeze({
        selection: Object.freeze({ scale: 1.00, positionY: "50%", offsetX: "0%" }),
        detail: Object.freeze({ scale: 1.00, positionY: "50%", offsetX: "0%" }),
        similar: Object.freeze({ scale: 1.00, positionY: "50%", offsetX: "0%", offsetY: "0%" }),
        compareCatalog: Object.freeze({ scale: 1.00, positionY: "50%", offsetX: "0%", offsetY: "0%" }),
        compareDetail: Object.freeze({ scale: 1.00, positionY: "50%", offsetX: "0%", offsetY: "0%" })
    }),
    "warmouth": Object.freeze({
        selection: Object.freeze({ scale: 1.12, positionY: "32%", offsetX: "0%" }),
        detail: Object.freeze({ scale: 1.12, positionY: "26%", offsetX: "0%" }),
        similar: Object.freeze({ scale: 1.55, positionY: "50%", offsetX: "0%", offsetY: "8%" }),
        compareCatalog: Object.freeze({ scale: 1.55, positionY: "50%", offsetX: "0%", offsetY: "8%" }),
        compareDetail: Object.freeze({ scale: 1.58, positionY: "50%", offsetX: "0%", offsetY: "8%" })
    }),
    "ozark-bass": Object.freeze({
        selection: Object.freeze({ scale: 1.00, positionY: "50%", offsetX: "0%" }),
        detail: Object.freeze({ scale: 1.00, positionY: "50%", offsetX: "0%" }),
        similar: Object.freeze({ scale: 1.05, positionY: "50%", offsetX: "-1%", offsetY: "0%" }),
        compareCatalog: Object.freeze({ scale: 1.05, positionY: "50%", offsetX: "-1%", offsetY: "0%" }),
        compareDetail: Object.freeze({ scale: 1.05, positionY: "50%", offsetX: "-1%", offsetY: "0%" })
    }),
    "black-crappie": Object.freeze({
        selection: Object.freeze({ scale: 1.00, positionY: "22%", offsetX: "0%" }),
        detail: Object.freeze({ scale: 1.00, positionY: "17%", offsetX: "0%" }),
        similar: Object.freeze({ scale: 1.40, positionY: "50%", offsetX: "-6%", offsetY: "14%" }),
        compareCatalog: Object.freeze({ scale: 1.40, positionY: "50%", offsetX: "-6%", offsetY: "14%" }),
        compareDetail: Object.freeze({ scale: 1.35, positionY: "50%", offsetX: "-6%", offsetY: "14%" })
    }),
    "white-crappie": Object.freeze({
        selection: Object.freeze({ scale: 1.06, positionY: "5%", offsetX: "-2%" }),
        detail: Object.freeze({ scale: 1.06, positionY: "0%", offsetX: "-2%" }),
        similar: Object.freeze({ scale: 1.30, positionY: "50%", offsetX: "-5%", offsetY: "20%" }),
        compareCatalog: Object.freeze({ scale: 1.30, positionY: "50%", offsetX: "-5%", offsetY: "20%" }),
        compareDetail: Object.freeze({ scale: 1.28, positionY: "50%", offsetX: "-5%", offsetY: "20%" })
    })
});
function buildFishFramedMediaMarkup(
    fish,
    media,
    imageClass,
    frameClass,
    loading = "lazy",
    framingContext = "selection"
) {
    if (!media?.file) return "";

    const fishFraming = FISH_IMAGE_FRAMING[fish?.id];
    const framing = fishFraming?.[framingContext] ?? {};
    const framingStyle = [
        `--fish-image-scale: ${framing.scale ?? 1}`,
        framing.aspectRatio ? `--fish-frame-aspect: ${framing.aspectRatio}` : null,
        `--fish-image-position-y: ${framing.positionY ?? "50%"}`,
        `--fish-image-offset-x: ${framing.offsetX ?? "0%"}`,
        `--fish-image-offset-y: ${framing.offsetY ?? "0%"}`
    ].filter(Boolean).join("; ");

    return `
        <span class="fish-image-frame ${frameClass}" style="${framingStyle};">
            ${buildFishMediaMarkup(media, `${imageClass} fish-image-frame__image`, loading)}
        </span>
    `;
}

function buildFishResultCardMarkup(fish, category, primaryMedia, isDetailAvailable = true) {
    const scientificNameMarkup = fish.scientificName
        ? `<span class="search-result-card__scientific-name">${fish.scientificName}</span>`
        : "";
    const summaryMarkup = fish.summary
        ? `<span class="search-result-card__summary">${fish.summary}</span>`
        : "";
    const familyMarkup = fish.family
        ? `<span class="fish-result-card__family"><strong>Family:</strong> ${fish.family}</span>`
        : "";
    const aliasesMarkup = Array.isArray(fish.aliases) && fish.aliases.length
        ? `<span class="fish-result-card__aliases"><strong>Also known as:</strong> ${fish.aliases.join(", ")}</span>`
        : "";
    const primaryImageMarkup = buildFishFramedMediaMarkup(
        fish,
        primaryMedia,
        "fish-result-card__image",
        "fish-result-card__image-frame",
        "lazy",
        "selection"
    );
    const content = `
        <span class="fish-result-card__category">${category?.name ?? "Fish"}</span>
        <span class="search-result-card__title">${fish.name}</span>
        ${primaryImageMarkup}
        ${scientificNameMarkup}
        ${summaryMarkup}
        ${familyMarkup}
        ${aliasesMarkup}
    `;

    if (!isDetailAvailable) {
        return `<article class="search-result-card search-result-card--fish search-result-card--fish-reference">${content}</article>`;
    }

    return `
        <button class="search-result-card search-result-card--fish" type="button" data-result-id="${fish.id}">
            ${content}
            <span class="search-result-card__action">View Fish <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></span>
        </button>
    `;
}

function renderFishGuideLanding(appMain, config) {
    if (!appMain || !config) {
        console.error("A valid Fish Guide landing configuration is required.");
        return;
    }

    const categories = Array.isArray(config.categories) ? config.categories : [];
    const comparisonCount = Number(config.comparisonCount ?? 0);
    const browseCards = [
        {
            key: "all",
            title: "All Fish",
            description: `Browse all ${config.activeFishCount ?? 0} Fish A–Z.`
        },
        ...categories.map((category) => ({
            key: category.id,
            title: category.name,
            description: category.summary
        }))
    ];

    const browseMarkup = browseCards.map((card) => `
        <button class="dashboard-card fish-collection-card" type="button" data-fish-collection-key="${card.key}">
            <span class="dashboard-card__title">${card.title}</span>
            <span class="dashboard-card__description">${card.description}</span>
            <span class="dashboard-card__action">Browse <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></span>
        </button>
    `).join("");

    const compareMarkup = comparisonCount > 0
        ? `
            <button class="dashboard-card dashboard-card--workflow fish-compare-entry" type="button" data-fish-compare-catalog>
                <span class="dashboard-card__title">Compare Similar Fish</span>
                <span class="dashboard-card__description">Compare similar Fish side by side using the visible traits that best distinguish them.</span>
                <span class="dashboard-card__action">Compare <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></span>
            </button>
        `
        : "";

    appMain.innerHTML = `
        <section class="content-view fish-guide-view" aria-labelledby="fish-guide-title">
            ${buildPageNavigationMarkup()}
            <h2 id="fish-guide-title">Fish Guide</h2>
            <p>Search for a Fish, compare similar species, or browse by group.</p>
            <form class="search-form section-search-form" data-fish-search-form>
                <label class="search-label" for="fish-guide-search-input">Search all Fish</label>
                ${buildSearchControlsMarkup("fish-guide-search-input", config.searchPlaceholder)}
            </form>
            <div class="section-search-results" data-fish-search-region hidden>
                <p class="search-status" data-search-status aria-live="polite"></p>
                <div class="search-results" data-search-results></div>
            </div>
            <div class="fish-guide-content" data-fish-guide-content>
                ${compareMarkup ? `
                    <section class="fish-guide-section" aria-labelledby="fish-compare-title">
                        <h3 id="fish-compare-title">Compare Similar Fish</h3>
                        <p>Use side-by-side comparisons to focus on the traits that are easiest to see in the field.</p>
                        <div class="dashboard-grid">${compareMarkup}</div>
                    </section>
                ` : ""}
                <section class="fish-guide-section" aria-labelledby="fish-browse-title">
                    <h3 id="fish-browse-title">Browse Fish</h3>
                    <div class="dashboard-grid fish-collection-grid">${browseMarkup}</div>
                </section>
            </div>
        </section>
    `;

    initializeHomeNavigation(appMain);

    const form = appMain.querySelector("[data-fish-search-form]");
    const input = appMain.querySelector("#fish-guide-search-input");
    const clearButton = appMain.querySelector("[data-search-clear]");
    const searchRegion = appMain.querySelector("[data-fish-search-region]");
    const guideContent = appMain.querySelector("[data-fish-guide-content]");
    if (input && typeof config.initialQuery === "string") input.value = config.initialQuery;

    const updateSearch = () => {
        const query = input?.value?.trim() ?? "";
        config.onQueryChange?.(query);
        const hasQuery = query.length > 0;
        if (searchRegion) searchRegion.hidden = !hasQuery;
        if (guideContent) guideContent.hidden = hasQuery;
        if (!hasQuery) {
            const status = appMain.querySelector("[data-search-status]");
            const results = appMain.querySelector("[data-search-results]");
            if (status) status.textContent = "";
            if (results) results.innerHTML = "";
            return;
        }
        config.onSearch?.(query);
    };
    initializeSearchControls(form, input, clearButton, updateSearch);
    updateSearch();

    appMain.querySelectorAll("[data-fish-collection-key]").forEach((card) => {
        card.addEventListener("click", () => config.onCollectionSelect?.(card.dataset.fishCollectionKey));
    });
    appMain.querySelector("[data-fish-compare-catalog]")?.addEventListener("click", () => {
        config.onCompareSelect?.();
    });
}

function renderFishDetail(appMain, detailConfig) {
    if (!appMain || !detailConfig?.record) {
        console.error("A valid Fish detail record is required.");
        return;
    }

    const record = detailConfig.record;
    const category = detailConfig.category;
    const media = detailConfig.primaryMedia;
    const aliasesMarkup = record.aliases?.length
        ? `<p class="fish-aliases"><strong>Also known as:</strong> ${record.aliases.join(", ")}</p>`
        : "";
    const attributionMarkup = media?.license?.attributionRequired === true && media.license.attributionText
        ? `<p class="fish-media-attribution">${media.license.attributionText}</p>`
        : "";
    const relationships = Array.isArray(detailConfig.relationships) ? detailConfig.relationships : [];
    const similarMarkup = relationships.length
        ? `
            <section class="detail-section fish-similar-section">
                <h3>Compare Similar Fish</h3>
                <div class="fish-similar-grid">
                    ${relationships.map((context) => `
                        <button class="fish-similar-link" type="button" data-fish-relationship-id="${context.relationship.id}">
                            ${buildFishFramedMediaMarkup(
                                context.relatedFish,
                                context.relatedMedia,
                                "fish-similar-link__image",
                                "fish-similar-link__image-frame",
                                "lazy",
                                "similar"
                            )}
                            <span class="fish-similar-link__body">
                                <span class="fish-similar-link__name">${context.relatedFish.name}</span>
                                <span class="fish-similar-link__action">Compare <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></span>
                            </span>
                        </button>
                    `).join("")}
                </div>
            </section>
        `
        : "";
    const recommendations = Array.isArray(detailConfig.rigRecommendations)
        ? detailConfig.rigRecommendations
        : [];
    const primaryRigs = recommendations.filter((item) => item.priority === "Primary");
    const alternativeRigs = recommendations.filter((item) => item.priority === "Alternative");
    const buildRigGroup = (title, records) => records.length
        ? `
            <li class="fish-rig-application-item">
                <strong>${title}</strong>
                <div class="fish-rig-link-list">
                    ${records.map((item) => `
                        <button class="internal-knowledge-link fish-rig-link" type="button" data-fish-rig-id="${item.rig.id}">
                            ${item.rig.name} <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span>
                        </button>
                    `).join("")}
                </div>
            </li>
        `
        : "";
    const rigMarkup = recommendations.length
        ? `
            <section class="detail-section fish-rig-section">
                <h3>Rigs to Start With</h3>
                <ul class="fish-rig-application-list">
                    ${buildRigGroup("Primary", primaryRigs)}
                    ${buildRigGroup("Alternatives", alternativeRigs)}
                </ul>
            </section>
        `
        : "";
    const specializedTargeting = detailConfig.specializedTargeting;
    const researchTopics = Array.isArray(specializedTargeting?.researchTopics)
        ? specializedTargeting.researchTopics.filter((topic) => typeof topic === "string" && topic.trim())
        : [];
    const researchTopicsMarkup = researchTopics.length
        ? `
            <p><strong>Try searching for:</strong></p>
            <ul class="detail-list">
                ${researchTopics.map((topic) => `<li>“${topic}”</li>`).join("")}
            </ul>
            ${specializedTargeting.researchNote ? `<p class="fish-specialized-research-note">${specializedTargeting.researchNote}</p>` : ""}
        `
        : "";
    const specializedTargetingMarkup = specializedTargeting?.body
        ? `
            <section class="detail-section fish-specialized-targeting">
                <h3>Specialized Targeting</h3>
                <p>${specializedTargeting.body}</p>
                ${researchTopicsMarkup}
            </section>
            ${specializedTargeting.safety ? `
                <section class="detail-section detail-section--safety fish-specialized-safety">
                    <h3>Safety</h3>
                    <p>${specializedTargeting.safety}</p>
                </section>
            ` : ""}
        `
        : "";

    appMain.innerHTML = `
        <article class="detail-view detail-view--fish" aria-labelledby="fish-detail-title">
            ${buildPageNavigationMarkup(detailConfig.parentLabel)}
            <header class="detail-header fish-detail-header">
                <p class="detail-eyebrow">${category?.name ?? "Fish"}</p>
                <h2 id="fish-detail-title">${record.name}</h2>
                <figure class="fish-primary-media fish-primary-media--identity">
                    ${buildFishFramedMediaMarkup(
                        record,
                        media,
                        "fish-primary-media__image",
                        "fish-primary-media__image-frame",
                        "eager",
                        "detail"
                    )}
                    ${attributionMarkup}
                </figure>
                <p class="fish-scientific-name">${record.scientificName}</p>
                <p class="fish-family"><strong>Family:</strong> ${record.family}</p>
                ${aliasesMarkup}
            </header>
            ${similarMarkup}
            <section class="detail-section fish-identification-section">
                <h3>How to Identify It</h3>
                <p class="fish-identification-summary">${record.summary}</p>
                <ul class="detail-list fish-identification-list">
                    ${record.identificationTraits.map((trait) => `<li>${trait}</li>`).join("")}
                </ul>
            </section>
            <section class="detail-section rig-at-a-glance fish-at-a-glance">
                <div class="rig-at-a-glance__group"><h3>Common Habitat</h3>${buildTagList(record.habitatTags)}</div>
                <div class="rig-at-a-glance__group"><h3>Common Waters</h3>${buildTagList(record.waterbodyTypes)}</div>
            </section>
            ${specializedTargetingMarkup}
            ${rigMarkup}
        </article>
    `;

    appMain.querySelector("[data-parent-navigation]")?.addEventListener("click", detailConfig.onParent);
    initializeHomeNavigation(appMain);
    appMain.querySelectorAll("[data-fish-relationship-id]").forEach((button) => {
        button.addEventListener("click", () => detailConfig.onRelationshipSelect?.(button.dataset.fishRelationshipId));
    });
    appMain.querySelectorAll("[data-fish-rig-id]").forEach((button) => {
        button.addEventListener("click", () => detailConfig.onRigSelect?.(button.dataset.fishRigId));
    });
}

function renderFishComparisonCatalog(appMain, config) {
    if (!appMain || !config) {
        console.error("A valid Fish comparison catalog configuration is required.");
        return;
    }
    const comparisons = Array.isArray(config.comparisons) ? config.comparisons : [];
    appMain.innerHTML = `
        <section class="content-view fish-comparison-catalog" aria-labelledby="fish-comparison-catalog-title">
            ${buildPageNavigationMarkup(config.parentLabel)}
            <h2 id="fish-comparison-catalog-title">Compare Similar Fish</h2>
            <p>Choose a pair to compare the most useful visible identification differences.</p>
            <div class="fish-comparison-catalog-grid">
                ${comparisons.map((comparison) => `
                    <button class="fish-comparison-catalog-card" type="button" data-fish-relationship-id="${comparison.relationship.id}">
                        <span class="fish-comparison-catalog-card__images">
                            ${buildFishFramedMediaMarkup(
                                comparison.fishA,
                                comparison.mediaA,
                                "fish-comparison-catalog-card__image",
                                "fish-comparison-catalog-card__image-frame",
                                "lazy",
                                "compareCatalog"
                            )}
                            ${buildFishFramedMediaMarkup(
                                comparison.fishB,
                                comparison.mediaB,
                                "fish-comparison-catalog-card__image",
                                "fish-comparison-catalog-card__image-frame",
                                "lazy",
                                "compareCatalog"
                            )}
                        </span>
                        <span class="fish-comparison-catalog-card__title">${comparison.fishA.name} vs ${comparison.fishB.name}</span>
                        <span class="fish-comparison-catalog-card__action">Compare <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></span>
                    </button>
                `).join("")}
            </div>
        </section>
    `;
    appMain.querySelector("[data-parent-navigation]")?.addEventListener("click", config.onParent);
    initializeHomeNavigation(appMain);
    appMain.querySelectorAll("[data-fish-relationship-id]").forEach((button) => {
        button.addEventListener("click", () => config.onSelect?.(button.dataset.fishRelationshipId));
    });
}

function renderFishComparison(appMain, config) {
    if (!appMain || !config?.relationship || !config?.fishA || !config?.fishB) {
        console.error("A valid Fish comparison configuration is required.");
        return;
    }
    const distinctionsFor = (fishId) => config.relationship.distinctions
        .filter((distinction) => distinction.fishId === fishId)
        .map((distinction) => `<li>${distinction.text}</li>`)
        .join("");
    const buildSide = (fish, media) => `
        <section class="fish-comparison-side">
            <h3>${fish.name}</h3>
            <p class="fish-scientific-name">${fish.scientificName}</p>
            ${buildFishFramedMediaMarkup(
                fish,
                media,
                "fish-comparison-side__image",
                "fish-comparison-side__image-frame",
                "eager",
                "compareDetail"
            )}
            <ul class="detail-list">${distinctionsFor(fish.id)}</ul>
            <button class="internal-knowledge-link" type="button" data-fish-detail-id="${fish.id}">
                View ${fish.name} <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span>
            </button>
        </section>
    `;

    appMain.innerHTML = `
        <article class="detail-view detail-view--fish-comparison" aria-labelledby="fish-comparison-title">
            ${buildPageNavigationMarkup(config.parentLabel)}
            <header class="detail-header fish-comparison-header">
                <p class="detail-eyebrow">Field Identification</p>
                <h2 id="fish-comparison-title">${config.fishA.name} vs ${config.fishB.name}</h2>
                <p>Focus on the visible traits that best distinguish these two Fish.</p>
            </header>
            <section class="detail-section fish-comparison-differences">
                <h3>Key Differences</h3>
                <div class="fish-comparison-grid">
                    ${buildSide(config.fishA, config.mediaA)}
                    ${buildSide(config.fishB, config.mediaB)}
                </div>
            </section>
        </article>
    `;
    appMain.querySelector("[data-parent-navigation]")?.addEventListener("click", config.onParent);
    initializeHomeNavigation(appMain);
    appMain.querySelectorAll("[data-fish-detail-id]").forEach((button) => {
        button.addEventListener("click", () => config.onFishSelect?.(button.dataset.fishDetailId));
    });
}

function isCoreKnotRecord(record) {
    return Boolean(record?.id) &&
        typeof CORE_KNOT_IDS !== "undefined" &&
        CORE_KNOT_IDS.includes(record.id);
}

function buildKnotResultCardMarkup(knot) {
    const isCore = isCoreKnotRecord(knot);
    return `
        <button class="search-result-card search-result-card--knot${isCore ? " search-result-card--core" : ""}" type="button" data-result-id="${knot.id}">
            ${isCore ? '<span class="search-result-card__badge">Core Knot</span>' : ""}
            <span class="search-result-card__title">${knot.name}</span>
            <span class="search-result-card__meta">${knot.difficulty}</span>
            <span class="search-result-card__summary">${knot.summary}</span>
            <span class="search-result-card__action">View instructions <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></span>
        </button>
    `;
}

function renderKnotGuideLanding(appMain, config) {
    if (!appMain || !config || !Array.isArray(config.tasks) || !Array.isArray(config.collections)) {
        console.error("A valid Knot Guide landing configuration is required.");
        return;
    }

    const taskMarkup = config.tasks.map((task) => {
        const actionLabel = task.id === "attach-line-to-reel"
            ? 'Get your reel ready <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span>'
            : 'Choose this task <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span>';
        const isImportantTask = ["attach-line-to-reel", "terminal-attachment"].includes(task.id);
        const taskClassName = [
            "dashboard-card",
            "knot-task-card",
            isImportantTask ? "dashboard-card--primary knot-task-card--important" : ""
        ].filter(Boolean).join(" ");
        return `
            <button class="${taskClassName}" type="button" data-knot-task-id="${task.id}">
                <span class="dashboard-card__title">${task.title}</span>
                <span class="dashboard-card__description">${task.description}</span>
                <span class="dashboard-card__action">${actionLabel}</span>
            </button>
        `;
    }).join("");

    const collectionMarkup = config.collections.map((collection) => {
        const isCoreCollection = collection.key === "core";
        const collectionClassName = [
            "dashboard-card",
            "knot-collection-card",
            isCoreCollection ? "dashboard-card--primary knot-guide-core-card" : ""
        ].filter(Boolean).join(" ");

        if (collection.isAvailable !== true) {
            return `
                <div class="${collectionClassName} dashboard-card--unavailable" aria-disabled="true">
                    <span class="dashboard-card__title">${collection.title}</span>
                    <span class="dashboard-card__description">${collection.description}</span>
                    <span class="dashboard-card__action">Coming Soon</span>
                </div>
            `;
        }

        return `
            <button class="${collectionClassName}" type="button" data-knot-collection-key="${collection.key}">
                <span class="dashboard-card__title">${collection.title}</span>
                <span class="dashboard-card__description">${collection.description}</span>
            </button>
        `;
    }).join("");

    appMain.innerHTML = `
        <section class="content-view knot-guide-view" aria-labelledby="knots-title">
            ${buildPageNavigationMarkup()}
            <h2 id="knots-title">Knots</h2>
            <p>Start with the connection you need, search by name, or browse a Knot collection.</p>
            <form class="search-form section-search-form" data-knot-search-form>
                <label class="search-label" for="knot-guide-search-input">Search all Knots</label>
                ${buildSearchControlsMarkup("knot-guide-search-input", "Try Palomar, tie hook, add leader, braid, or beginner")}
            </form>
            <div class="section-search-results" data-knot-search-region hidden>
                <p class="search-status" data-search-status aria-live="polite"></p>
                <div class="search-results" data-search-results></div>
            </div>
            <div class="knot-guide-content" data-knot-guide-content>
                <section class="knot-guide-section knot-guide-section--tasks" aria-labelledby="knot-task-title">
                    <h3 id="knot-task-title">What are you trying to do?</h3>
                    <p>Choose the connection you need. Reel setup starts with <strong>Attach Line to a Reel</strong>.</p>
                    <div class="dashboard-grid knot-task-grid">${taskMarkup}</div>
                </section>
                <section class="knot-guide-section knot-guide-section--collections" aria-label="Browse Knot collections">
                    <div class="dashboard-grid knot-collection-grid">${collectionMarkup}</div>
                </section>
            </div>
        </section>
    `;

    initializeHomeNavigation(appMain);

    const searchForm = appMain.querySelector("[data-knot-search-form]");
    const searchInput = appMain.querySelector("#knot-guide-search-input");
    const clearButton = appMain.querySelector("[data-search-clear]");
    const searchRegion = appMain.querySelector("[data-knot-search-region]");
    const landingContent = appMain.querySelector("[data-knot-guide-content]");
    const updateSearch = () => {
        const query = searchInput?.value?.trim() ?? "";
        const hasQuery = query.length > 0;
        if (searchRegion) searchRegion.hidden = !hasQuery;
        if (landingContent) landingContent.hidden = hasQuery;

        if (!hasQuery) {
            const status = appMain.querySelector("[data-search-status]");
            const results = appMain.querySelector("[data-search-results]");
            if (status) status.textContent = "";
            if (results) results.innerHTML = "";
            return;
        }

        config.onSearch?.(query);
    };
    initializeSearchControls(searchForm, searchInput, clearButton, updateSearch);

    appMain.querySelectorAll("[data-knot-task-id]").forEach((card) => {
        card.addEventListener("click", () => config.onTaskSelect?.(card.dataset.knotTaskId));
    });
    appMain.querySelectorAll("[data-knot-collection-key]").forEach((card) => {
        card.addEventListener("click", () => config.onCollectionSelect?.(card.dataset.knotCollectionKey));
    });
}

const KNOT_USAGE_VISIBLE_RIG_LIMIT = 2;

function buildKnotUsageMarkup(record, usageContexts) {
    const taskContexts = Array.isArray(usageContexts?.tasks) ? usageContexts.tasks : [];
    const rigContexts = Array.isArray(usageContexts?.rigs) ? usageContexts.rigs : [];
    const taskMarkup = taskContexts.length
        ? `
            <div class="knot-usage-group">
                <span class="knot-usage-group__label">Common tasks</span>
                <div class="internal-knowledge-link-list">
                    ${taskContexts.map((task) => `
                        <button class="internal-knowledge-link" type="button" data-knot-task-link-id="${task.taskId}">
                            ${task.title} <span class="link-arrow link-arrow--internal" aria-hidden="true">&rarr;</span>
                        </button>
                    `).join("")}
                </div>
            </div>
        `
        : "";

    if (rigContexts.length === 0) {
        return `${taskMarkup}<p class="knot-empty-context">No Rig in the guide currently references this Knot.</p>`;
    }

    const rigListId = `knot-rig-usage-${record.id}`;
    const rigItems = rigContexts.map((usage, index) => {
        const isInitiallyHidden = index >= KNOT_USAGE_VISIBLE_RIG_LIMIT;
        return `
            <li${isInitiallyHidden ? ' data-knot-rig-usage-extra hidden' : ""}>
                <button class="compact-link-row compact-link-row--knot" type="button" data-knot-rig-id="${usage.rigId}">
                    <span>${usage.title}</span>
                    <span class="link-arrow link-arrow--chevron" aria-hidden="true">&rsaquo;</span>
                </button>
            </li>
        `;
    }).join("");
    const toggleMarkup = rigContexts.length > KNOT_USAGE_VISIBLE_RIG_LIMIT
        ? `
            <button
                class="knot-usage-toggle"
                type="button"
                data-knot-usage-toggle
                data-knot-usage-count="${rigContexts.length}"
                aria-expanded="false"
                aria-controls="${rigListId}"
            >See all ${rigContexts.length} rigs</button>
        `
        : "";

    return `
        ${taskMarkup}
        <div class="knot-usage-group knot-usage-group--rigs">
            <span class="knot-usage-group__label">Rigs that use this Knot</span>
            <ul class="knot-usage-list compact-link-list" id="${rigListId}">${rigItems}</ul>
            ${toggleMarkup}
        </div>
    `;
}

function initializeKnotUsageControls(appMain, detailConfig) {
    appMain.querySelectorAll("[data-knot-rig-id]").forEach((button) => {
        button.addEventListener("click", () => {
            detailConfig.onRigSelect?.(button.dataset.knotRigId);
        });
    });
    appMain.querySelectorAll("[data-knot-task-link-id]").forEach((button) => {
        button.addEventListener("click", () => {
            detailConfig.onTaskSelect?.(button.dataset.knotTaskLinkId);
        });
    });
    appMain.querySelectorAll("[data-line-type-id]").forEach((button) => {
        button.addEventListener("click", () => {
            detailConfig.onLineTypeSelect?.(button.dataset.lineTypeId);
        });
    });

    const toggle = appMain.querySelector("[data-knot-usage-toggle]");
    if (!toggle) return;

    const hiddenItems = Array.from(appMain.querySelectorAll("[data-knot-rig-usage-extra]"));
    const usageGroup = toggle.closest(".knot-at-a-glance__group");
    toggle.addEventListener("click", () => {
        const willExpand = toggle.getAttribute("aria-expanded") !== "true";
        hiddenItems.forEach((item) => {
            item.hidden = !willExpand;
        });
        toggle.setAttribute("aria-expanded", String(willExpand));
        toggle.textContent = willExpand
            ? "Show fewer"
            : `See all ${toggle.dataset.knotUsageCount} rigs`;

        if (!willExpand && usageGroup) {
            const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches === true;
            window.requestAnimationFrame(() => {
                usageGroup.scrollIntoView({
                    behavior: reduceMotion ? "auto" : "smooth",
                    block: "start"
                });
            });
        }
    });
}

function getKnotRecord(knotId) {
    if (!knotId || typeof KNOT_DATA === "undefined") return null;
    const record = findRecordById(KNOT_DATA, knotId);
    return record?.isActive === true ? record : null;
}

function buildRigKnotApplications(record) {
    if (!Array.isArray(record?.knotApplications) || record.knotApplications.length === 0) return "";

    const groupedApplications = [];
    const groupByKnotSet = new Map();

    record.knotApplications.forEach((application) => {
        const recommendedKnotIds = Array.isArray(application.recommendedKnotIds)
            ? application.recommendedKnotIds
            : [];
        const groupKey = recommendedKnotIds.join("|");
        let group = groupByKnotSet.get(groupKey);

        if (!group) {
            group = { recommendedKnotIds, applications: [] };
            groupByKnotSet.set(groupKey, group);
            groupedApplications.push(group);
        }

        group.applications.push(application);
    });

    const applicationsMarkup = groupedApplications.map((group) => {
        const knotLinks = group.recommendedKnotIds
            .map((knotId) => {
                const knot = getKnotRecord(knotId);
                if (!knot) {
                    console.warn(`Canonical Knot record was not found: ${knotId}`);
                    return "";
                }
                return `
                    <button class="internal-knowledge-link rig-knot-link" type="button" data-rig-knot-id="${knot.id}">
                        ${knot.name} <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span>
                    </button>
                `;
            })
            .filter(Boolean)
            .join("");

        const isSharedSet = group.applications.length > 1;
        const applicationMarkup = isSharedSet
            ? `
                <div class="rig-knot-use-group">
                    <strong>Use these knots for:</strong>
                    <ul class="rig-knot-use-list">
                        ${group.applications.map((application) => `<li>${application.label}</li>`).join("")}
                    </ul>
                </div>
            `
            : `<strong>${group.applications[0].label}</strong>`;
        const notesMarkup = group.applications
            .filter((application) => application.notes)
            .map((application) => isSharedSet
                ? `<p><strong>${application.label}:</strong> ${application.notes}</p>`
                : `<p>${application.notes}</p>`
            )
            .join("");

        return `
            <li class="rig-knot-application-item${isSharedSet ? " rig-knot-application-item--grouped" : ""}">
                ${applicationMarkup}
                <div class="rig-knot-link-list">${knotLinks}</div>
                ${notesMarkup}
            </li>
        `;
    }).join("");

    return `
        <section class="detail-section rig-knot-section">
            <div class="rig-knot-section__header">
                <h3>Knots You'll Tie</h3>
                <p>Select a recommended Knot to view tying instructions.</p>
            </div>
            <ul class="rig-knot-application-list">${applicationsMarkup}</ul>
        </section>
    `;
}

function renderKnotInstructionDetail(appMain, detailConfig) {
    if (!appMain || !detailConfig?.record) {
        console.error("A valid Knot detail record is required.");
        return;
    }

    const record = detailConfig.record;
    const isCore = isCoreKnotRecord(record);
    const usageContexts = detailConfig.usageContexts ?? {};
    const aliasesMarkup = record.aliases?.length
        ? `<p class="knot-aliases"><strong>Also called:</strong> ${record.aliases.join(", ")}</p>`
        : "";
    const lineTypeLinksMarkup = (record.compatibleLineTypes ?? []).length
        ? `
            <div class="internal-knowledge-link-list">
                ${(record.compatibleLineTypes ?? []).map((lineTypeId) => {
                    const lineType = typeof REEL_LINE_TYPE_GUIDANCE !== "undefined"
                        ? REEL_LINE_TYPE_GUIDANCE[lineTypeId]
                        : null;
                    const label = lineType?.title ?? lineTypeId;
                    return `
                        <button class="internal-knowledge-link" type="button" data-line-type-id="${lineTypeId}">
                            ${label} <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span>
                        </button>
                    `;
                }).join("")}
            </div>
        `
        : "";
    const usageMarkup = buildKnotUsageMarkup(record, usageContexts);
    const referencesMarkup = record.referenceLinks?.length
        ? `
            <details class="detail-section detail-section--supporting knot-sources-section">
                <summary>Sources & References</summary>
                <div class="rig-reference-links knot-reference-links">
                    ${record.referenceLinks.map((reference) => `
                        <a class="rig-reference-link knot-reference-link" href="${reference.url}" target="_blank" rel="noopener noreferrer">${reference.label} <span class="link-arrow link-arrow--external" aria-hidden="true">↗</span></a>
                    `).join("")}
                </div>
            </details>
        `
        : "";

    appMain.innerHTML = `
        <article class="detail-view detail-view--knot" aria-labelledby="knot-detail-title">
            ${buildPageNavigationMarkup(detailConfig.parentLabel)}
            <header class="detail-header knot-detail-header${isCore ? " detail-header--core knot-detail-header--core" : ""}">
                ${isCore ? '<p class="detail-core-badge">Core Knot</p>' : ""}
                <p class="detail-eyebrow">${record.difficulty}</p>
                <h2 id="knot-detail-title">${record.name}</h2>
                <p>${record.summary}</p>
                ${aliasesMarkup}
            </header>
            <section class="detail-section knot-at-a-glance">
                <div class="knot-at-a-glance__group">
                    <h3>Best For</h3>
                    <ul class="detail-list">${record.bestFor.map((item) => `<li>${item}</li>`).join("")}</ul>
                    <div class="knot-line-types">
                        <span class="knot-line-types__label">Line compatibility</span>
                        ${lineTypeLinksMarkup}
                    </div>
                </div>
                <div class="knot-at-a-glance__group">
                    <h3>Where You'll Use It</h3>
                    ${usageMarkup}
                </div>
            </section>
            <section class="detail-section detail-section--build knot-tying-section">
                <h3>How to Tie It</h3>
                <ol class="detail-steps knot-tying-steps">${record.tyingSteps.map((step) => `<li>${step}</li>`).join("")}</ol>
            </section>
            <section class="detail-section detail-section--supporting knot-check-section">
                <h3>Check Your Knot</h3>
                <ul class="detail-list">${record.finalChecks.map((check) => `<li>${check}</li>`).join("")}</ul>
            </section>
            <section class="detail-section detail-section--supporting">
                <h3>Common Mistakes</h3>
                <ul class="detail-list">${record.commonMistakes.map((mistake) => `<li>${mistake}</li>`).join("")}</ul>
            </section>
            <section class="detail-section detail-section--supporting">
                <h3>When to Choose Another Knot</h3>
                <ul class="detail-list">${record.limitations.map((limitation) => `<li>${limitation}</li>`).join("")}</ul>
            </section>
            ${referencesMarkup}
        </article>
    `;

    appMain.querySelector("[data-parent-navigation]")?.addEventListener("click", detailConfig.onParent);
    initializeKnotUsageControls(appMain, detailConfig);
    initializeHomeNavigation(appMain);
}

function renderLineTypeReferenceDetail(appMain, detailConfig) {
    if (!appMain || !detailConfig?.record) {
        console.error("A valid Line Type reference record is required.");
        return;
    }

    const record = detailConfig.record;
    appMain.innerHTML = `
        <article class="detail-view detail-view--line-type" aria-labelledby="line-type-detail-title">
            ${buildPageNavigationMarkup(detailConfig.parentLabel)}
            <header class="detail-header line-type-detail-header">
                <p class="detail-eyebrow">Fishing Line</p>
                <h2 id="line-type-detail-title">${record.title}</h2>
                <p>${record.selectionDescription}</p>
            </header>
            <section class="detail-section">
                <h3>How to Recognize It</h3>
                <p>${record.identificationCue}</p>
            </section>
            <section class="detail-section">
                <h3>Beginner Guidance</h3>
                <p>${record.beginnerGuidance}</p>
            </section>
            <section class="detail-section detail-section--supporting">
                <h3>Tradeoff</h3>
                <p>${record.tradeoff}</p>
            </section>
        </article>
    `;

    appMain.querySelector("[data-parent-navigation]")?.addEventListener("click", detailConfig.onParent);
    initializeHomeNavigation(appMain);
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

function getRelatedRigRecords(tackleId) {
    if (!tackleId || typeof RIG_DATA === "undefined") return [];

    return RIG_DATA.filter((rig) =>
        rig.isActive === true &&
        Array.isArray(rig.componentRequirements) &&
        rig.componentRequirements.some((requirement) => requirement.tackleId === tackleId)
    );
}

function getReferenceMedia(referenceRecord) {
    if (!referenceRecord?.id || typeof MEDIA_DATA === "undefined") return null;
    return MEDIA_DATA.find((media) =>
        media.ownerType === "tackle" &&
        media.ownerId === referenceRecord.id &&
        media.isActive === true
    ) ?? null;
}

function buildReferenceImageMarkup(referenceRecord, className, loading = "lazy") {
    const media = getReferenceMedia(referenceRecord);
    if (!media) return "";
    return `<img class="${className}" src="${media.file}" alt="${media.alt}" loading="${loading}" decoding="async">`;
}

function renderReferencePopover(referenceId, triggerElement, options = {}) {
    if (typeof TACKLE_DATA === "undefined") {
        console.error("Tackle reference data is not available.");
        return;
    }

    const initialReference = findRecordById(TACKLE_DATA, referenceId);
    if (!initialReference || initialReference.isActive !== true) {
        console.warn(`Reference record was not found: ${referenceId}`);
        return;
    }

    document.querySelector("[data-reference-popover]")?.remove();

    const dialog = document.createElement("dialog");
    dialog.className = "reference-popover";
    dialog.dataset.referencePopover = "";
    dialog.setAttribute("aria-labelledby", "reference-popover-title");

    const referenceHistory = [];
    let activeReferenceId = referenceId;
    let isNavigatingAway = false;

    const closeDialog = () => {
        if (dialog.open) dialog.close();
    };

    const renderReferenceContent = (nextReferenceId, pushCurrent = false) => {
        const referenceRecord = findRecordById(TACKLE_DATA, nextReferenceId);
        if (!referenceRecord || referenceRecord.isActive !== true) {
            console.warn(`Reference record was not found: ${nextReferenceId}`);
            return;
        }

        if (pushCurrent && activeReferenceId && activeReferenceId !== nextReferenceId) {
            referenceHistory.push(activeReferenceId);
        }
        activeReferenceId = nextReferenceId;

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

        const relatedRigs = getRelatedRigRecords(referenceRecord.id);
        const rigsMarkup = relatedRigs.length ? `
            <section class="reference-popover__section">
                <h3>Used In</h3>
                <div class="compact-link-list reference-popover__link-list">
                    ${relatedRigs.map((rig) => `
                        <button class="compact-link-row" type="button" data-reference-rig-id="${rig.id}">
                            <span>${rig.name}</span>
                            <span class="link-arrow link-arrow--chevron" aria-hidden="true">&rsaquo;</span>
                        </button>
                    `).join("")}
                </div>
            </section>
        ` : "";

        const relatedTackleMarkup = referenceRecord.relatedTackleIds?.length ? `
            <section class="reference-popover__section">
                <h3>Related Components</h3>
                <div class="compact-link-list reference-popover__link-list">
                    ${referenceRecord.relatedTackleIds.map((relatedId) => {
                        const related = findRecordById(TACKLE_DATA, relatedId);
                        if (!related || related.isActive !== true) return "";
                        return `
                            <button class="compact-link-row" type="button" data-related-reference-id="${related.id}">
                                <span>${related.name}</span>
                                <span class="link-arrow link-arrow--chevron" aria-hidden="true">&rsaquo;</span>
                            </button>
                        `;
                    }).join("")}
                </div>
            </section>
        ` : "";

        const previousReference = referenceHistory.length
            ? findRecordById(TACKLE_DATA, referenceHistory[referenceHistory.length - 1])
            : null;
        const backMarkup = previousReference
            ? `<button class="reference-popover__back" type="button" data-reference-back><span class="link-arrow link-arrow--back" aria-hidden="true">&larr;</span> Back to ${previousReference.name}</button>`
            : "";

        dialog.innerHTML = `
            <div class="reference-popover__shell">
                <header class="reference-popover__header">
                    <div class="reference-popover__header-main">
                        ${backMarkup}
                        <p class="reference-popover__eyebrow">${referenceRecord.category}</p>
                        <h2 id="reference-popover-title">${referenceRecord.name}</h2>
                    </div>
                    <button class="reference-popover__close" type="button" data-reference-close aria-label="Close ${referenceRecord.name} information">&times;</button>
                </header>
                ${buildReferenceImageMarkup(referenceRecord, "reference-popover__image", "eager")}
                <div class="reference-popover__body">
                    <p class="reference-popover__summary">${referenceRecord.summary}</p>
                    <section class="reference-popover__section"><h3>What It Does</h3><p>${referenceRecord.purpose}</p></section>
                    ${aliasesMarkup}${recognitionMarkup}${variantsMarkup}${rigsMarkup}${relatedTackleMarkup}
                </div>
            </div>
        `;

        dialog.querySelector("[data-reference-close]")?.addEventListener("click", closeDialog);
        dialog.querySelector("[data-reference-back]")?.addEventListener("click", () => {
            const previousReferenceId = referenceHistory.pop();
            if (previousReferenceId) renderReferenceContent(previousReferenceId, false);
        });
        dialog.querySelectorAll("[data-related-reference-id]").forEach((relatedButton) => {
            relatedButton.addEventListener("click", () => {
                renderReferenceContent(relatedButton.dataset.relatedReferenceId, true);
            });
        });
        dialog.querySelectorAll("[data-reference-rig-id]").forEach((rigButton) => {
            rigButton.addEventListener("click", () => {
                const nextRigId = rigButton.dataset.referenceRigId;
                if (nextRigId === options.currentRigId) {
                    closeDialog();
                    return;
                }
                isNavigatingAway = true;
                closeDialog();
                options.onRigSelect?.(nextRigId);
            });
        });
    };

    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) closeDialog();
    });
    dialog.addEventListener("close", () => {
        dialog.remove();
        if (!isNavigatingAway) triggerElement?.focus();
    });

    document.body.append(dialog);
    renderReferenceContent(referenceId, false);
    dialog.showModal();
}

function initializeReferenceLinks(appMain, options = {}) {
    appMain.querySelectorAll("[data-reference-id]").forEach((referenceLink) => {
        referenceLink.addEventListener("click", () => {
            renderReferencePopover(referenceLink.dataset.referenceId, referenceLink, options);
        });
    });
}

function buildRigReferenceLinks(record) {
    if (!Array.isArray(record.referenceLinks) || record.referenceLinks.length === 0) return "";
    return `
        <section class="detail-section detail-section--supporting rig-reference-section">
            <h3>Verified References</h3>
            <p class="rig-reference-intro">Use these external sources for additional technical cross-checking.</p>
            <div class="rig-reference-links">
                ${record.referenceLinks.map((reference) => `
                    <a class="rig-reference-link" href="${reference.url}" target="_blank" rel="noopener noreferrer">${reference.label} <span class="link-arrow link-arrow--external" aria-hidden="true">↗</span></a>
                `).join("")}
            </div>
        </section>
    `;
}

function buildRigTutorial(record) {
    const tutorial = record?.tutorialVideo;
    if (!tutorial || tutorial.platform !== "youtube" || !tutorial.videoId || !tutorial.externalUrl) return "";

    return `
        <section class="detail-section rig-tutorial-section" data-rig-tutorial>
            <div class="rig-tutorial-section__header">
                <div>
                    <h3>Rig Tutorial</h3>
                    <p>${tutorial.title} · ${tutorial.creator}</p>
                </div>
                <a class="rig-tutorial-section__external" href="${tutorial.externalUrl}" target="_blank" rel="noopener noreferrer">Watch on YouTube <span class="link-arrow link-arrow--external" aria-hidden="true">↗</span></a>
            </div>
            <button class="rig-tutorial-load" type="button" data-rig-tutorial-load data-video-id="${tutorial.videoId}" data-video-title="${tutorial.title}">
                <span class="rig-tutorial-load__icon" aria-hidden="true">▶</span>
                <span>Load tutorial</span>
            </button>
            <div class="rig-tutorial-player" data-rig-tutorial-player hidden></div>
        </section>
    `;
}

function initializeRigTutorial(appMain) {
    const loadButton = appMain.querySelector("[data-rig-tutorial-load]");
    const player = appMain.querySelector("[data-rig-tutorial-player]");
    if (!loadButton || !player) return;

    loadButton.addEventListener("click", () => {
        const videoId = loadButton.dataset.videoId;
        const title = loadButton.dataset.videoTitle || "Rig tutorial";
        if (!videoId) return;

        const iframe = document.createElement("iframe");
        iframe.className = "rig-tutorial-player__iframe";
        iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?rel=0`;
        iframe.title = title;
        iframe.loading = "lazy";
        iframe.referrerPolicy = "strict-origin-when-cross-origin";
        iframe.allow = "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;

        player.replaceChildren(iframe);
        player.hidden = false;
        loadButton.hidden = true;
    }, { once: true });
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
                <div class="rig-component-item__row">
                    <label class="rig-component-owned" for="${checkboxId}">
                        <input
                            id="${checkboxId}"
                            class="rig-component-owned__checkbox"
                            type="checkbox"
                            data-component-owned-id="${component.tackleId}"
                            ${isOwned ? "checked" : ""}
                        >
                        <span class="rig-component-owned__name">${componentName}</span>
                    </label>
                    <button
                        class="reference-info-button"
                        type="button"
                        data-reference-id="${component.tackleId}"
                        aria-label="Identification help for ${componentName}"
                    ><span aria-hidden="true">&#9432;</span></button>
                    ${
                        component.required
                            ? '<span class="rig-component-item__required">Required</span>'
                            : '<span class="detail-list__optional">Optional</span>'
                    }
                </div>
            </li>
        `;
    }).join("");

    appMain.innerHTML = `
        <article class="detail-view detail-view--rig-compact" aria-labelledby="rig-detail-title">
            ${buildPageNavigationMarkup(detailConfig.parentLabel)}
            <header class="detail-header${isCoreRig ? " detail-header--core" : ""}">
                ${isCoreRig ? '<p class="detail-core-badge">Core Rig</p>' : ""}
                <p class="detail-eyebrow">${record.difficulty}</p>
                <h2 id="rig-detail-title">${record.name}</h2>
                <p>${record.summary}</p>
            </header>
            <section class="detail-section rig-at-a-glance">
                <div class="rig-at-a-glance__group"><h3>Best For</h3>${buildTagList(record.useCases)}</div>
                <div class="rig-at-a-glance__group"><h3>Good Conditions</h3>${buildTagList(record.conditionTags)}</div>
            </section>
            <section class="detail-section rig-requirements-section">
                <div class="rig-requirements-section__header">
                    <div>
                        <h3>What You Need</h3>
                        <p>Check each item you have. Select <span class="reference-link__icon" aria-hidden="true">&#9432;</span> for identification help.</p>
                    </div>
                    <div class="readiness-status" data-readiness-status aria-live="polite"></div>
                </div>
                <ul class="rig-component-list">${componentsMarkup}</ul>
            </section>
            <section class="detail-section detail-section--build">
                <h3>How to Build It</h3>
                <ol class="detail-steps">${record.assemblySteps.map((step) => `<li>${step}</li>`).join("")}</ol>
            </section>
            ${buildRigTutorial(record)}
            ${record.tutorialVideo ? "" : buildRigReferenceLinks(record)}
            ${buildRigKnotApplications(record)}
            <section class="detail-section detail-section--supporting"><h3>Setup Notes</h3><ul class="detail-list">${record.setupNotes.map((note) => `<li>${note}</li>`).join("")}</ul></section>
            <section class="detail-section detail-section--supporting"><h3>Common Mistakes</h3><ul class="detail-list">${record.commonMistakes.map((mistake) => `<li>${mistake}</li>`).join("")}</ul></section>
            <section class="detail-section detail-section--supporting detail-section--safety"><h3>Safety</h3><ul class="detail-list">${record.safetyNotes.map((note) => `<li>${note}</li>`).join("")}</ul></section>
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
    appMain.querySelectorAll("[data-rig-knot-id]").forEach((button) => {
        button.addEventListener("click", () => {
            detailConfig.onKnotSelect?.(button.dataset.rigKnotId);
        });
    });
    appMain.querySelectorAll("[data-component-owned-id]").forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            detailConfig.onReadinessChange?.(
                checkbox.dataset.componentOwnedId,
                checkbox.checked
            );
            updateReadinessStatus();
        });
    });

    initializeReferenceLinks(appMain, { onRigSelect: detailConfig.onRigSelect, currentRigId: record.id });
    initializeRigTutorial(appMain);
    initializeHomeNavigation(appMain);
    updateReadinessStatus();
}


function getRegulationsResourceActionLabel(resource) {
    const capabilities = new Set(Array.isArray(resource?.capabilities) ? resource.capabilities : []);
    const title = String(resource?.title ?? "Official Resource");

    switch (resource?.primaryCategory) {
        case "regulations":
            return "View Fishing Regulations";
        case "licenses-permits":
            if (capabilities.has("license-purchase") && !capabilities.has("license-information")) {
                return "Buy Fishing License";
            }
            if (capabilities.has("license-purchase")) {
                return "View Licenses & Purchase Options";
            }
            return "View License Information";
        case "special-regulations":
            return "View Special Regulations";
        case "where-to-fish":
            if (!/^where to fish/i.test(title) && capabilities.size >= 4) {
                return `Explore ${title}`;
            }
            if (capabilities.has("fishing-forecasts")) {
                return "Find Waters & Forecasts";
            }
            if (capabilities.has("waterbody-regulations")) {
                return "Find Waters & Regulations";
            }
            if (capabilities.has("lake-information")) {
                return "Find Waters & Lake Info";
            }
            return "Find Fishing Locations";
        case "public-access":
            return "View Public Access";
        case "stocking":
            return "View Stocking Information";
        case "reports-forecasts":
            if (capabilities.has("fishing-reports")) return "View Fishing Reports";
            if (capabilities.has("fishing-forecasts")) return "View Fishing Forecasts";
            return "View Reports & Forecasts";
        default:
            return `Open ${title}`;
    }
}

function renderRegulationsGatewayView(appMain, config) {
    if (!appMain || !config || !Array.isArray(config.states)) {
        console.error("A valid Regulations gateway configuration is required.");
        return;
    }

    const states = [...config.states].sort((first, second) =>
        first.name.localeCompare(second.name, undefined, { sensitivity: "base" })
    );

    appMain.innerHTML = `
        <section class="content-view regulations-gateway-view" aria-labelledby="regulations-title">
            ${buildPageNavigationMarkup()}
            <h2 id="regulations-title">Regulations</h2>
            <p>Choose a state to find official fishing regulations, license information, access resources, and other state-agency tools.</p>

            <form class="regulations-selector" data-regulations-selector-form>
                <div class="regulations-search-group">
                    <label class="search-label" for="regulations-state-search">Find a State</label>
                    <div class="search-input-shell">
                        <input class="search-input" id="regulations-state-search" type="search"
                            placeholder="Try Oklahoma or OK" autocomplete="off" enterkeyhint="search">
                        <button class="search-clear-button" type="button" data-regulations-search-clear aria-label="Clear search" hidden>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <p class="regulations-search-help">Search by state name or 2-letter abbreviation. Typing selects the first matching state but does not open it.</p>
                </div>

                <div class="regulations-select-group">
                    <label class="search-label" for="regulations-state-select">State</label>
                    <select class="regulations-state-select" id="regulations-state-select" data-regulations-state-select></select>
                    <button class="regulations-state-picker-trigger" type="button" data-regulations-picker-trigger
                        aria-haspopup="dialog" aria-expanded="false" aria-controls="regulations-state-picker">
                        <span data-regulations-picker-trigger-label></span>
                        <span class="regulations-state-picker-trigger__arrow" aria-hidden="true">⌄</span>
                    </button>
                </div>

                <button class="regulations-open-state" type="submit">View State <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></button>
                <p class="search-status regulations-search-status" data-regulations-search-status aria-live="polite"></p>

                <div class="regulations-state-picker" id="regulations-state-picker" data-regulations-state-picker hidden>
                    <button class="regulations-state-picker__backdrop" type="button" data-regulations-picker-cancel tabindex="-1" aria-label="Close state picker"></button>
                    <section class="regulations-state-picker__panel" role="dialog" aria-modal="true" aria-labelledby="regulations-state-picker-title">
                        <div class="regulations-state-picker__header">
                            <h3 id="regulations-state-picker-title">Select a State</h3>
                            <button class="regulations-state-picker__close" type="button" data-regulations-picker-cancel aria-label="Close state picker">×</button>
                        </div>
                        <div class="regulations-state-wheel-shell">
                            <div class="regulations-state-wheel" data-regulations-state-wheel role="listbox" tabindex="0" aria-label="State"></div>
                            <div class="regulations-state-wheel-selection" aria-hidden="true"></div>
                        </div>
                        <div class="regulations-state-picker__actions">
                            <button class="regulations-state-picker__cancel" type="button" data-regulations-picker-cancel>Cancel</button>
                            <button class="regulations-state-picker__done" type="button" data-regulations-picker-done>Done</button>
                        </div>
                    </section>
                </div>
            </form>
            <p class="regulations-authority-note">Freshwater Fishing Companion links to official resources. The responsible state authority owns the current fishing rules.</p>
        </section>
    `;

    initializeHomeNavigation(appMain);

    const form = appMain.querySelector("[data-regulations-selector-form]");
    const input = appMain.querySelector("#regulations-state-search");
    const clearButton = appMain.querySelector("[data-regulations-search-clear]");
    const select = appMain.querySelector("[data-regulations-state-select]");
    const picker = appMain.querySelector("[data-regulations-state-picker]");
    const pickerTrigger = appMain.querySelector("[data-regulations-picker-trigger]");
    const pickerTriggerLabel = appMain.querySelector("[data-regulations-picker-trigger-label]");
    const pickerDone = appMain.querySelector("[data-regulations-picker-done]");
    const pickerCancelButtons = appMain.querySelectorAll("[data-regulations-picker-cancel]");
    const wheel = appMain.querySelector("[data-regulations-state-wheel]");
    const status = appMain.querySelector("[data-regulations-search-status]");
    let pickerDraftStateId = null;
    let wheelScrollFrame = null;

    const getStateLabel = (stateId) => {
        const state = states.find((record) => record.id === stateId);
        return state ? `${state.name} (${state.abbreviation})` : "Select a state";
    };

    const setWheelDraftState = (stateId, { scrollWheel = false, behavior = "auto" } = {}) => {
        if (!stateId || !wheel) return;
        const wheelOption = wheel.querySelector(`[data-state-id="${stateId}"]`);
        if (!wheelOption) return;

        pickerDraftStateId = stateId;
        wheel.querySelectorAll("[data-regulations-wheel-option]").forEach((option) => {
            const isSelected = option.dataset.stateId === stateId;
            option.classList.toggle("is-selected", isSelected);
            option.setAttribute("aria-selected", String(isSelected));
        });
        wheel.setAttribute("aria-activedescendant", wheelOption.id);

        if (scrollWheel) {
            const targetTop = wheelOption.offsetTop - ((wheel.clientHeight - wheelOption.offsetHeight) / 2);
            wheel.scrollTo({ top: targetTop, behavior });
        }
    };

    const setSelectedState = (stateId) => {
        if (!stateId || !select) return;
        const optionExists = Array.from(select.options).some((option) => option.value === stateId);
        if (!optionExists) return;

        select.value = stateId;
        if (pickerTriggerLabel) pickerTriggerLabel.textContent = getStateLabel(stateId);
        config.onSelectionChange?.(stateId);
    };

    const renderOptions = (eligibleStates, preferredStateId = null) => {
        if (!select) return;
        select.innerHTML = eligibleStates.map((state) =>
            `<option value="${state.id}">${state.name} (${state.abbreviation})</option>`
        ).join("");

        if (wheel) {
            wheel.innerHTML = eligibleStates.map((state) => `
                <button class="regulations-state-wheel-option" id="regulations-wheel-${state.id}" type="button"
                    role="option" aria-selected="false" tabindex="-1"
                    data-regulations-wheel-option data-state-id="${state.id}">${state.name} (${state.abbreviation})</button>
            `).join("");
        }

        const preferredExists = eligibleStates.some((state) => state.id === preferredStateId);
        const selectedStateId = preferredExists ? preferredStateId : eligibleStates[0]?.id ?? null;

        select.disabled = eligibleStates.length === 0;
        if (pickerTrigger) pickerTrigger.disabled = eligibleStates.length === 0;
        if (wheel) wheel.setAttribute("aria-disabled", String(eligibleStates.length === 0));

        if (selectedStateId) {
            setSelectedState(selectedStateId);
            setWheelDraftState(selectedStateId);
        } else {
            select.value = "";
            pickerDraftStateId = null;
            if (pickerTriggerLabel) pickerTriggerLabel.textContent = "No matching states";
            wheel?.removeAttribute("aria-activedescendant");
            config.onSelectionChange?.(null);
        }
    };

    const closePicker = ({ commit = false } = {}) => {
        if (!picker || picker.hidden) return;
        if (commit && pickerDraftStateId) setSelectedState(pickerDraftStateId);
        picker.hidden = true;
        document.body.classList.remove("regulations-picker-open");
        pickerTrigger?.setAttribute("aria-expanded", "false");
        pickerTrigger?.focus();
    };

    const openPicker = () => {
        if (!picker || !wheel || pickerTrigger?.disabled || !select?.value) return;
        picker.hidden = false;
        document.body.classList.add("regulations-picker-open");
        pickerTrigger?.setAttribute("aria-expanded", "true");
        pickerDraftStateId = select.value;
        requestAnimationFrame(() => {
            setWheelDraftState(pickerDraftStateId, { scrollWheel: true });
            wheel.focus({ preventScroll: true });
        });
    };

    let isInitialSearchRestore = true;

    const updateSearch = () => {
        const query = String(input?.value ?? "").trim().toLocaleLowerCase();
        config.onQueryChange?.(input?.value ?? "");
        if (clearButton) clearButton.hidden = query.length === 0;

        if (!query) {
            renderOptions(states, config.selectedStateId);
            if (status) status.textContent = `${states.length} states available.`;
            return;
        }

        const prefixMatches = states.filter((state) =>
            state.name.toLocaleLowerCase().startsWith(query) || state.abbreviation.toLocaleLowerCase().startsWith(query)
        );
        const matches = prefixMatches.length > 0
            ? prefixMatches
            : states.filter((state) =>
                state.name.toLocaleLowerCase().includes(query) || state.abbreviation.toLocaleLowerCase().includes(query)
            );

        const restoredStateId = isInitialSearchRestore && matches.some((state) => state.id === config.selectedStateId)
            ? config.selectedStateId
            : matches[0]?.id ?? null;
        renderOptions(matches, restoredStateId);
        if (status) {
            const selectedState = matches.find((state) => state.id === restoredStateId);
            status.textContent = matches.length === 0
                ? "No state matched that search."
                : `${matches.length} ${matches.length === 1 ? "state" : "states"} matched. ${selectedState?.name ?? matches[0].name} is selected.`;
        }
        isInitialSearchRestore = false;
    };

    if (input) input.value = config.initialQuery ?? "";
    updateSearch();

    input?.addEventListener("input", () => {
        isInitialSearchRestore = false;
        updateSearch();
    });
    clearButton?.addEventListener("click", () => {
        input.value = "";
        config.onQueryChange?.("");
        renderOptions(states, config.selectedStateId);
        clearButton.hidden = true;
        if (status) status.textContent = `${states.length} states available.`;
        input.focus();
    });
    select?.addEventListener("change", () => setSelectedState(select.value));
    pickerTrigger?.addEventListener("click", openPicker);
    pickerDone?.addEventListener("click", () => closePicker({ commit: true }));
    pickerCancelButtons.forEach((button) => button.addEventListener("click", () => closePicker()));
    picker?.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            event.preventDefault();
            closePicker();
        }
    });
    wheel?.addEventListener("click", (event) => {
        const option = event.target.closest("[data-regulations-wheel-option]");
        if (!option) return;
        setWheelDraftState(option.dataset.stateId, { scrollWheel: true, behavior: "smooth" });
    });
    wheel?.addEventListener("keydown", (event) => {
        if (!["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) return;
        const options = Array.from(wheel.querySelectorAll("[data-regulations-wheel-option]"));
        if (options.length === 0) return;

        event.preventDefault();
        const selectedIndex = Math.max(0, options.findIndex((option) => option.dataset.stateId === pickerDraftStateId));
        let targetIndex = selectedIndex;
        if (event.key === "ArrowUp") targetIndex = Math.max(0, selectedIndex - 1);
        if (event.key === "ArrowDown") targetIndex = Math.min(options.length - 1, selectedIndex + 1);
        if (event.key === "Home") targetIndex = 0;
        if (event.key === "End") targetIndex = options.length - 1;

        setWheelDraftState(options[targetIndex].dataset.stateId, { scrollWheel: true, behavior: "smooth" });
    });
    wheel?.addEventListener("scroll", () => {
        if (wheelScrollFrame) cancelAnimationFrame(wheelScrollFrame);
        wheelScrollFrame = requestAnimationFrame(() => {
            const options = Array.from(wheel.querySelectorAll("[data-regulations-wheel-option]"));
            if (options.length === 0) return;

            const wheelBounds = wheel.getBoundingClientRect();
            const wheelCenter = wheelBounds.top + (wheelBounds.height / 2);
            const nearestOption = options.reduce((nearest, option) => {
                const optionBounds = option.getBoundingClientRect();
                const distance = Math.abs((optionBounds.top + (optionBounds.height / 2)) - wheelCenter);
                return !nearest || distance < nearest.distance ? { option, distance } : nearest;
            }, null)?.option;

            if (nearestOption && nearestOption.dataset.stateId !== pickerDraftStateId) {
                setWheelDraftState(nearestOption.dataset.stateId);
            }
        });
    }, { passive: true });
    form?.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!select?.value) return;
        config.onSelectionChange?.(select.value);
        config.onStateOpen?.(select.value);
    });
}

function renderRegulationsStateView(appMain, config) {
    if (!appMain || !config?.state || !Array.isArray(config.resources) || !Array.isArray(config.notices)) {
        console.error("A valid Regulations state configuration is required.");
        return;
    }

    const categoryPriority = new Map([
        ["regulations", 0],
        ["licenses-permits", 1]
    ]);
    const resources = [...config.resources].sort((first, second) =>
        (categoryPriority.get(first.primaryCategory) ?? 10) - (categoryPriority.get(second.primaryCategory) ?? 10)
    );
    const beforeYouFish = resources.filter((resource) => resource.section === "before-you-fish");
    const planYourTrip = resources.filter((resource) => resource.section === "plan-your-trip");

    const buildResourceLinks = (records) => records.map((resource) => {
        const unavailableMarkup = resource.status === "temporarily-unavailable"
            ? '<span class="regulations-resource-status">Temporarily unavailable / limited</span>'
            : "";
        const actionLabel = getRegulationsResourceActionLabel(resource);
        return `
            <a class="regulations-resource-link" href="${resource.url}" target="_blank" rel="noopener noreferrer">
                <span class="regulations-resource-link__content">
                    <span class="regulations-resource-link__title">${resource.title}</span>
                    ${unavailableMarkup}
                </span>
                <span class="regulations-resource-link__action">${actionLabel} <span class="link-arrow link-arrow--external" aria-hidden="true">↗</span></span>
            </a>
        `;
    }).join("");

    const noticesMarkup = config.notices.length > 0 ? `
        <div class="regulations-notices" aria-label="Current official notices">
            ${config.notices.map((notice) => `
                <aside class="detail-section detail-section--safety regulations-notice">
                    <h3>Special Alert</h3>
                    <strong class="regulations-notice__title">${notice.title}</strong>
                    <p>${notice.summary}</p>
                    <a href="${notice.url}" target="_blank" rel="noopener noreferrer">Read official notice <span class="link-arrow link-arrow--external" aria-hidden="true">↗</span></a>
                </aside>
            `).join("")}
        </div>
    ` : "";

    const sectionMarkup = (title, records, sectionClass) => records.length > 0 ? `
        <section class="regulations-resource-section ${sectionClass}" aria-labelledby="${sectionClass}-title">
            <h3 id="${sectionClass}-title">${title}</h3>
            <div class="regulations-resource-card">
                ${buildResourceLinks(records)}
            </div>
        </section>
    ` : "";

    appMain.innerHTML = `
        <article class="content-view regulations-state-view" aria-labelledby="regulations-state-title">
            ${buildPageNavigationMarkup("Regulations")}
            <header class="regulations-state-header">
                <h2 id="regulations-state-title">${config.state.name}</h2>
                <p class="regulations-state-subtitle">Fishing Regulations & Resources</p>
            </header>
            ${noticesMarkup}
            ${sectionMarkup("Before You Fish", beforeYouFish, "regulations-before-you-fish")}
            ${sectionMarkup("Plan Your Trip", planYourTrip, "regulations-plan-your-trip")}
            <footer class="regulations-agency-footer">
                <p class="regulations-agency-attribution">Official resources from <a href="${config.state.agencyUrl}" target="_blank" rel="noopener noreferrer">${config.state.agencyName} <span class="link-arrow link-arrow--external" aria-hidden="true">↗</span></a></p>
            </footer>
        </article>
    `;

    appMain.querySelector("[data-parent-navigation]")?.addEventListener("click", config.onParent);
    initializeHomeNavigation(appMain);
}

console.info(`[Loaded] ${VIEW_RENDERER_BUILD_INFO.file}`);
