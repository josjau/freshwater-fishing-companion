/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: view-renderer.js
   REPLACEMENT: MS2.4 - RIG GUIDE RENDERING
   PURPOSE: Owns reusable application views, search results,
   instructional detail pages, and navigation behavior.
   ========================================================== */

"use strict";

const VIEW_RENDERER_BUILD_INFO = Object.freeze({
    file: "view-renderer.js",
    milestone: "MS2.4",
    replacement: "Rig Guide Rendering"
});

function renderView(appMain, viewConfig) {
    if (!appMain || !viewConfig || !Array.isArray(viewConfig.cards)) {
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
                    <span class="dashboard-card__title">${card.title}</span>
                    <span class="dashboard-card__description">
                        ${card.description}
                    </span>
                </button>
            `
        )
        .join("");

    appMain.innerHTML = `
        <section class="content-view" aria-labelledby="${viewConfig.headingId}">
            <button
                class="page-navigation"
                type="button"
                data-home-navigation
            >
                ← Home
            </button>

            <h2 id="${viewConfig.headingId}">${viewConfig.title}</h2>
            <p>${viewConfig.description}</p>

            <div class="dashboard-grid">
                ${cardsMarkup}
            </div>
        </section>
    `;

    initializeHomeNavigation(appMain);
    initializeViewCardActions(appMain, viewConfig.onCardSelect);
}

function initializeHomeNavigation(appMain) {
    const homeNavigation = appMain.querySelector("[data-home-navigation]");

    homeNavigation?.addEventListener("click", () => {
        showView(ROUTES.DASHBOARD);
    });
}

function initializeViewCardActions(appMain, onCardSelect) {
    if (typeof onCardSelect !== "function") {
        return;
    }

    appMain.querySelectorAll("[data-card-id]").forEach((card) => {
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
        <section class="content-view" aria-labelledby="${searchConfig.headingId}">
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

            <h2 id="${searchConfig.headingId}">${searchConfig.title}</h2>
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

            <div class="search-results" data-search-results></div>
        </section>
    `;

    const searchForm = appMain.querySelector("[data-search-form]");
    const searchInput = appMain.querySelector(`#${searchConfig.inputId}`);

    appMain
        .querySelector("[data-parent-navigation]")
        ?.addEventListener("click", searchConfig.onParent);

    initializeHomeNavigation(appMain);

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

    status.textContent =
        `${records.length} ${records.length === 1 ? "result" : "results"}`;

    resultsContainer.innerHTML = records
        .map((record) => resultConfig.renderRecord(record))
        .join("");

    if (typeof resultConfig.onResultSelect !== "function") {
        return;
    }

    resultsContainer
        .querySelectorAll("[data-result-id]")
        .forEach((resultCard) => {
            resultCard.addEventListener("click", () => {
                resultConfig.onResultSelect(resultCard.dataset.resultId);
            });
        });
}

function renderInstructionDetail(appMain, detailConfig) {
    if (!appMain || !detailConfig?.record) {
        console.error("A valid instructional detail record is required.");
        return;
    }

    const record = detailConfig.record;

    const componentsMarkup = record.componentRequirements
        .map(
            (component) => `
                <li class="detail-list__item">
                    <strong>${component.name}</strong>
                    ${component.required ? "" : " <span>(Optional)</span>"}
                    <p>${component.notes}</p>
                </li>
            `
        )
        .join("");

    const stepsMarkup = record.assemblySteps
        .map((step) => `<li>${step}</li>`)
        .join("");

    const notesMarkup = record.setupNotes
        .map((note) => `<li>${note}</li>`)
        .join("");

    const mistakesMarkup = record.commonMistakes
        .map((mistake) => `<li>${mistake}</li>`)
        .join("");

    const safetyMarkup = record.safetyNotes
        .map((note) => `<li>${note}</li>`)
        .join("");

    appMain.innerHTML = `
        <article class="detail-view" aria-labelledby="rig-detail-title">
            <div class="page-navigation-group">
                <button
                    class="page-navigation"
                    type="button"
                    data-parent-navigation
                >
                    ← ${detailConfig.parentLabel}
                </button>

                <button
                    class="page-navigation"
                    type="button"
                    data-home-navigation
                >
                    Home
                </button>
            </div>

            <header class="detail-header">
                <p class="detail-eyebrow">${record.difficulty}</p>
                <h2 id="rig-detail-title">${record.name}</h2>
                <p>${record.summary}</p>
            </header>

            <section class="detail-section">
                <h3>What You Need</h3>
                <ul class="detail-list detail-list--components">
                    ${componentsMarkup}
                </ul>
            </section>

            <section class="detail-section">
                <h3>How to Rig It</h3>
                <ol class="detail-steps">
                    ${stepsMarkup}
                </ol>
            </section>

            <section class="detail-section">
                <h3>Setup Notes</h3>
                <ul class="detail-list">${notesMarkup}</ul>
            </section>

            <section class="detail-section">
                <h3>Common Mistakes</h3>
                <ul class="detail-list">${mistakesMarkup}</ul>
            </section>

            <section class="detail-section detail-section--safety">
                <h3>Safety</h3>
                <ul class="detail-list">${safetyMarkup}</ul>
            </section>
        </article>
    `;

    appMain
        .querySelector("[data-parent-navigation]")
        ?.addEventListener("click", detailConfig.onParent);

    initializeHomeNavigation(appMain);
}

console.info(
    `[Loaded] ${VIEW_RENDERER_BUILD_INFO.file} | ` +
    `${VIEW_RENDERER_BUILD_INFO.milestone} | ` +
    `${VIEW_RENDERER_BUILD_INFO.replacement}`
);
