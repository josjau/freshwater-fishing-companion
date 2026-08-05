/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: view-renderer.js
   REPLACEMENT: MS2.2 - SHARED VIEW RENDERER
   PURPOSE: Owns reusable page-card rendering and Home
   navigation behavior for application views.
   ========================================================== */

"use strict";

const VIEW_RENDERER_BUILD_INFO = Object.freeze({
    file: "view-renderer.js",
    milestone: "MS2.2",
    replacement: "Shared View Renderer"
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

console.info(
    `[Loaded] ${VIEW_RENDERER_BUILD_INFO.file} | ` +
    `${VIEW_RENDERER_BUILD_INFO.milestone} | ` +
    `${VIEW_RENDERER_BUILD_INFO.replacement}`
);
