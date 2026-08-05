/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: view-renderer.js
   REPLACEMENT: MS2.3 - INTERACTIVE VIEW RENDERER
   PURPOSE: Owns reusable application view rendering, child-card
   interaction, search interfaces, result cards, and navigation.
   ========================================================== */

"use strict";

const VIEW_RENDERER_BUILD_INFO = Object.freeze({
    file: "view-renderer.js",
    milestone: "MS2.3",
    replacement: "Interactive View Renderer"
});

function renderView(appMain, viewConfig) {
    if (!appMain) {
        console.error("A valid application content area is required.");
        return;
    }

    if (!viewConfig || !Array.isArray(viewConfig.cards)) {
        console.error("A valid view configuration is required.");
        return;
    }

    const cardsMarkup = viewConfig.cards
        .map(
            (card) => `
                <button
                    class="dashboard-card"
                    type="button"
                    data-card-id="${card.id}"
                >
                    <span class="dashboard-card__title">
                        ${card.title}
                    </span>
                    <span class="dashboard-card__description">
                        ${card.description}
                    </span>
                </button>
            `
        )
        .join("");

    appMain.innerHTML = `
        <section
            class="content-view"
            aria-labelledby="${viewConfig.headingId}"
        >
            <button
                class="page-navigation"
                type="button"
                data-home-navigation
            >
                ← Home
            </button>

            <h2 id="${viewConfig.headingId}">
                ${viewConfig.title}
            </h2>

            <p>${viewConfig.description}</p>

            <div class="dashboard-grid">
                ${cardsMarkup}
            </div>
        </section>
    `;

    initializeViewNavigation(appMain);
    initializeViewCardActions(appMain, viewConfig.onCardSelect);
}

function initializeViewNavigation(appMain) {
    const homeNavigation = appMain.querySelector("[data-home-navigation]");

    if (!homeNavigation) {
        console.error("Home navigation control was not created.");
        return;
    }

    homeNavigation.addEventListener("click", () => {
        showView(ROUTES.DASHBOARD);
    });
}

function initializeViewCardActions(appMain, onCardSelect) {
    if (typeof onCardSelect !== "function") {
        return;
    }

    const cards = appMain.querySelectorAll("[data-card-id]");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            onCardSelect(card.dataset.cardId);
        });
    });
}

function renderSearchView(appMain, searchConfig) {
    if (!appMain || !searchConfig) {
        console.error("A valid search view configuration is required.");
        return;
    }

    appMain.innerHTML = `
        <section
            class="content-view"
            aria-labelledby="${searchConfig.headingId}"
        >
            <div class="page-navigation-group">
                <button
                    class="page-navigation"
                    type="button"
                    data-parent-navigation
                >
                    ← ${searchConfig.parentLabel}
                </button>

                <button
                    class="page-navigation"
                    type="button"
                    data-home-navigation
                >
                    Home
                </button>
            </div>

            <h2 id="${searchConfig.headingId}">
                ${searchConfig.title}
            </h2>

            <p>${searchConfig.description}</p>

            <form class="search-form" data-search-form>
                <label class="search-label" for="${searchConfig.inputId}">
                    ${searchConfig.label}
                </label>

                <div class="search-controls">
                    <input
                        class="search-input"
                        id="${searchConfig.inputId}"
                        name="query"
                        type="search"
                        placeholder="${searchConfig.placeholder}"
                        autocomplete="off"
                        enterkeyhint="search"
                    >

                    <button class="search-button" type="submit">
                        Search
                    </button>
                </div>
            </form>

            <p
                class="search-status"
                data-search-status
                aria-live="polite"
            ></p>

            <div
                class="search-results"
                data-search-results
            ></div>
        </section>
    `;

    const parentNavigation = appMain.querySelector(
        "[data-parent-navigation]"
    );
    const homeNavigation = appMain.querySelector(
        "[data-home-navigation]"
    );
    const searchForm = appMain.querySelector("[data-search-form]");
    const searchInput = appMain.querySelector(`#${searchConfig.inputId}`);

    parentNavigation?.addEventListener("click", searchConfig.onParent);
    homeNavigation?.addEventListener("click", () => {
        showView(ROUTES.DASHBOARD);
    });

    searchForm?.addEventListener("submit", (event) => {
        event.preventDefault();
        searchConfig.onSearch(searchInput?.value ?? "");
    });

    searchInput?.addEventListener("input", () => {
        searchConfig.onSearch(searchInput.value);
    });

    searchInput?.focus();

    searchConfig.onSearch("");
}

function renderSearchResults(
    appMain,
    records,
    resultConfig
) {
    const resultsContainer = appMain.querySelector(
        "[data-search-results]"
    );
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

    status.textContent =
        `${records.length} ${records.length === 1 ? "result" : "results"}`;

    resultsContainer.innerHTML = records
        .map(
            (record) => `
                <button
                    class="search-result-card"
                    type="button"
                    data-result-id="${record.id}"
                >
                    <span class="search-result-card__title">
                        ${record.name}
                    </span>

                    <span class="search-result-card__scientific-name">
                        ${record.scientificName}
                    </span>

                    <span class="search-result-card__meta">
                        ${record.category} · ${record.family}
                    </span>

                    <span class="search-result-card__summary">
                        ${record.summary}
                    </span>
                </button>
            `
        )
        .join("");

    if (typeof resultConfig.onResultSelect !== "function") {
        return;
    }

    resultsContainer
        .querySelectorAll("[data-result-id]")
        .forEach((resultCard) => {
            resultCard.addEventListener("click", () => {
                resultConfig.onResultSelect(
                    resultCard.dataset.resultId
                );
            });
        });
}

console.info(
    `[Loaded] ${VIEW_RENDERER_BUILD_INFO.file} | ` +
    `${VIEW_RENDERER_BUILD_INFO.milestone} | ` +
    `${VIEW_RENDERER_BUILD_INFO.replacement}`
);
