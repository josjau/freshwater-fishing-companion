"use strict";

/* ==========================================================
   APPLICATION ROUTES
   ========================================================== */

const ROUTES = Object.freeze({
    DASHBOARD: "dashboard",
    FISH: "fish",
    RIGS: "rigs",
    RECOMMENDATIONS: "recommendations",
    TACKLE: "tackle",
    KNOTS: "knots",
    CATCH_LOG: "catch-log",
    FAVORITES: "favorites",
    SETTINGS: "settings"
});

/* ==========================================================
   VIEW MANAGER
   ========================================================== */

let currentView = ROUTES.DASHBOARD;
let dashboardMarkup = "";

function showView(route) {
    const appMain = document.querySelector("#app-main");

    if (!appMain) {
        console.error("Application main content area was not found.");
        return;
    }

    currentView = route;

    switch (currentView) {
        case ROUTES.DASHBOARD:
            appMain.innerHTML = dashboardMarkup;
            initializeDashboardRouting();
            break;

        case ROUTES.FISH:
            renderFishGuideView(appMain);
            break;

        default:
            console.log(`Current View: ${currentView}`);
    }
}

function renderFishGuideView(appMain) {
    appMain.innerHTML = `
        <section class="content-view" aria-labelledby="fish-guide-title">
            <button
                class="view-back-button"
                type="button"
                data-back-route="dashboard"
            >
                ← Dashboard
            </button>

            <h2 id="fish-guide-title">Fish Guide</h2>

            <p>
                Learn to identify freshwater fish using clear,
                beginner-friendly information.
            </p>

            <div class="dashboard-grid">
                <button class="dashboard-card" type="button">
                    <span class="dashboard-card__title">Search Fish</span>
                    <span class="dashboard-card__description">
                        Find a fish by its common or scientific name.
                    </span>
                </button>

                <button class="dashboard-card" type="button">
                    <span class="dashboard-card__title">Browse by Family</span>
                    <span class="dashboard-card__description">
                        Explore related freshwater fish groups.
                    </span>
                </button>

                <button class="dashboard-card" type="button">
                    <span class="dashboard-card__title">Browse by Habitat</span>
                    <span class="dashboard-card__description">
                        Find fish by the water and habitat they prefer.
                    </span>
                </button>

                <button class="dashboard-card" type="button">
                    <span class="dashboard-card__title">
                        Browse Alphabetically
                    </span>
                    <span class="dashboard-card__description">
                        View the complete fish guide from A to Z.
                    </span>
                </button>
            </div>
        </section>
    `;

    const backButton = appMain.querySelector("[data-back-route]");

    backButton.addEventListener("click", () => {
        showView(ROUTES.DASHBOARD);
    });
}

/* ==========================================================
   DASHBOARD ROUTING
   ========================================================== */

function initializeDashboardRouting() {
    const dashboardCards = document.querySelectorAll("[data-route]");

    dashboardCards.forEach((card) => {
        card.addEventListener("click", () => {
            const route = card.dataset.route;

            switch (route) {
                case ROUTES.FISH:
                case ROUTES.RIGS:
                case ROUTES.RECOMMENDATIONS:
                case ROUTES.TACKLE:
                case ROUTES.KNOTS:
                case ROUTES.CATCH_LOG:
                case ROUTES.FAVORITES:
                case ROUTES.SETTINGS:
                    showView(route);
                    break;

                default:
                    console.warn(`Unknown route: ${route}`);
            }
        });
    });
}

/* ==========================================================
   APPLICATION INITIALIZATION
   ========================================================== */

function initializeApp() {
    const appMain = document.querySelector("#app-main");

    console.info("Freshwater Fishing Companion initialized.");

    if (!appMain) {
        console.error("Application main content area was not found.");
        return;
    }

    dashboardMarkup = appMain.innerHTML;

    initializeDashboardRouting();
}

document.addEventListener("DOMContentLoaded", initializeApp);
