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

const VIEW_RENDERERS = Object.freeze({
   [ROUTES.FISH]: renderFishGuideView,
   [ROUTES.RIGS]: renderRigGuideView,
   [ROUTES.RECOMMENDATIONS]: renderRecommendationsView,
   [ROUTES.TACKLE]: renderTackleView
});

function showView(route) {
    const appMain = document.querySelector("#app-main");

    if (!appMain) {
        console.error("Application main content area was not found.");
        return;
    }

    currentView = route;

    if (currentView === ROUTES.DASHBOARD) {
        appMain.innerHTML = dashboardMarkup;
        initializeDashboardRouting();
        return;
    }

    const renderView = VIEW_RENDERERS[currentView];

    if (!renderView) {
        console.warn(`No view renderer is registered for: ${currentView}`);
        return;
    }

    renderView(appMain);
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

function renderRigGuideView(appMain) {
    appMain.innerHTML = `
        <section class="content-view" aria-labelledby="rig-guide-title">
            <button
                class="view-back-button"
                type="button"
                data-back-route="dashboard"
            >
                ← Dashboard
            </button>

            <h2 id="rig-guide-title">Rig Guide</h2>

            <p>
                Learn how to assemble proven freshwater fishing rigs
                and understand when to use each one.
            </p>

            <div class="dashboard-grid">
                <button class="dashboard-card" type="button">
                    <span class="dashboard-card__title">Browse All Rigs</span>
                    <span class="dashboard-card__description">
                        Explore the complete collection of supported rigs.
                    </span>
                </button>

                <button class="dashboard-card" type="button">
                    <span class="dashboard-card__title">
                        Browse by Target Fish
                    </span>
                    <span class="dashboard-card__description">
                        Find rigs suited to the species you want to catch.
                    </span>
                </button>

                <button class="dashboard-card" type="button">
                    <span class="dashboard-card__title">
                        Browse by Conditions
                    </span>
                    <span class="dashboard-card__description">
                        Choose rigs based on water, cover, depth, and weather.
                    </span>
                </button>

                <button class="dashboard-card" type="button">
                    <span class="dashboard-card__title">
                        Identify Rig Components
                    </span>
                    <span class="dashboard-card__description">
                        Learn what each hook, weight, swivel, and component does.
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

function renderRecommendationsView(appMain) {
    appMain.innerHTML = `
        <section
            class="content-view"
            aria-labelledby="recommendations-title"
        >
            <button
                class="view-back-button"
                type="button"
                data-back-route="dashboard"
            >
                ← Dashboard
            </button>

            <h2 id="recommendations-title">What Should I Throw?</h2>

            <p>
                Get lure recommendations based on the fish you are
                targeting and the conditions you are fishing.
            </p>

            <div class="dashboard-grid">
                <button class="dashboard-card" type="button">
                    <span class="dashboard-card__title">
                        Start a Recommendation
                    </span>
                    <span class="dashboard-card__description">
                        Enter the current fishing conditions and target fish.
                    </span>
                </button>

                <button class="dashboard-card" type="button">
                    <span class="dashboard-card__title">
                        Browse by Target Fish
                    </span>
                    <span class="dashboard-card__description">
                        Find lure options for a specific freshwater species.
                    </span>
                </button>

                <button class="dashboard-card" type="button">
                    <span class="dashboard-card__title">
                        Browse by Conditions
                    </span>
                    <span class="dashboard-card__description">
                        Explore lures for water clarity, depth, cover,
                        weather, and season.
                    </span>
                </button>

                <button class="dashboard-card" type="button">
                    <span class="dashboard-card__title">
                        View Lure Families
                    </span>
                    <span class="dashboard-card__description">
                        Learn how major lure types behave and when to use them.
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

function renderTackleView(appMain) {
    appMain.innerHTML = `
        <section class="content-view" aria-labelledby="tackle-title">
            <button
                class="view-back-button"
                type="button"
                data-back-route="dashboard"
            >
                ← Dashboard
            </button>

            <h2 id="tackle-title">My Tackle</h2>

            <p>
                Identify, organize, and track the fishing equipment
                and consumable tackle you own.
            </p>

            <div class="dashboard-grid">
                <button class="dashboard-card" type="button">
                    <span class="dashboard-card__title">
                        View My Inventory
                    </span>
                    <span class="dashboard-card__description">
                        Browse the equipment and tackle currently recorded.
                    </span>
                </button>

                <button class="dashboard-card" type="button">
                    <span class="dashboard-card__title">
                        Add Tackle
                    </span>
                    <span class="dashboard-card__description">
                        Record a new piece of equipment or consumable tackle.
                    </span>
                </button>

                <button class="dashboard-card" type="button">
                    <span class="dashboard-card__title">
                        Identify Tackle
                    </span>
                    <span class="dashboard-card__description">
                        Use guided characteristics to identify an unknown item.
                    </span>
                </button>

                <button class="dashboard-card" type="button">
                    <span class="dashboard-card__title">
                        Check Rig Readiness
                    </span>
                    <span class="dashboard-card__description">
                        See which supported rigs can be built from owned tackle.
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
