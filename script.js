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

/* ==========================================================
   SHARED VIEW RENDERER
   ========================================================== */

function renderView(appMain, viewConfig) {
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

    const homeNavigation = appMain.querySelector("[data-home-navigation]");

    if (!homeNavigation) {
        console.error("Home navigation control was not created.");
        return;
    }

    homeNavigation.addEventListener("click", () => {
        showView(ROUTES.DASHBOARD);
    });
}

/* ==========================================================
   APPLICATION VIEWS
   ========================================================== */

function renderFishGuideView(appMain) {
    renderView(appMain, {
        headingId: "fish-guide-title",
        title: "Fish Guide",
        description:
            "Learn to identify freshwater fish using clear, " +
            "beginner-friendly information.",
        cards: [
            {
                id: "search-fish",
                title: "Search Fish",
                description:
                    "Find a fish by its common or scientific name."
            },
            {
                id: "browse-fish-by-family",
                title: "Browse by Family",
                description:
                    "Explore related freshwater fish groups."
            },
            {
                id: "browse-fish-by-habitat",
                title: "Browse by Habitat",
                description:
                    "Find fish by the water and habitat they prefer."
            },
            {
                id: "browse-fish-alphabetically",
                title: "Browse Alphabetically",
                description:
                    "View the complete fish guide from A to Z."
            }
        ]
    });
}

function renderRigGuideView(appMain) {
    renderView(appMain, {
        headingId: "rig-guide-title",
        title: "Rig Guide",
        description:
            "Learn how to assemble proven freshwater fishing rigs " +
            "and understand when to use each one.",
        cards: [
            {
                id: "browse-all-rigs",
                title: "Browse All Rigs",
                description:
                    "Explore the complete collection of supported rigs."
            },
            {
                id: "browse-rigs-by-target-fish",
                title: "Browse by Target Fish",
                description:
                    "Find rigs suited to the species you want to catch."
            },
            {
                id: "browse-rigs-by-conditions",
                title: "Browse by Conditions",
                description:
                    "Choose rigs based on water, cover, depth, and weather."
            },
            {
                id: "identify-rig-components",
                title: "Identify Rig Components",
                description:
                    "Learn what each hook, weight, swivel, and component does."
            }
        ]
    });
}

function renderRecommendationsView(appMain) {
    renderView(appMain, {
        headingId: "recommendations-title",
        title: "What Should I Throw?",
        description:
            "Get lure recommendations based on the fish you are targeting " +
            "and the conditions you are fishing.",
        cards: [
            {
                id: "start-lure-recommendation",
                title: "Start a Recommendation",
                description:
                    "Enter the current fishing conditions and target fish."
            },
            {
                id: "browse-lures-by-target-fish",
                title: "Browse by Target Fish",
                description:
                    "Find lure options for a specific freshwater species."
            },
            {
                id: "browse-lures-by-conditions",
                title: "Browse by Conditions",
                description:
                    "Explore lures for water clarity, depth, cover, " +
                    "weather, and season."
            },
            {
                id: "view-lure-families",
                title: "View Lure Families",
                description:
                    "Learn how major lure types behave and when to use them."
            }
        ]
    });
}

function renderTackleView(appMain) {
    renderView(appMain, {
        headingId: "tackle-title",
        title: "My Tackle",
        description:
            "Identify, organize, and track the fishing equipment " +
            "and consumable tackle you own.",
        cards: [
            {
                id: "view-tackle-inventory",
                title: "View My Inventory",
                description:
                    "Browse the equipment and tackle currently recorded."
            },
            {
                id: "add-tackle",
                title: "Add Tackle",
                description:
                    "Record a new piece of equipment or consumable tackle."
            },
            {
                id: "identify-tackle",
                title: "Identify Tackle",
                description:
                    "Use guided characteristics to identify an unknown item."
            },
            {
                id: "check-rig-readiness",
                title: "Check Rig Readiness",
                description:
                    "See which supported rigs can be built from owned tackle."
            }
        ]
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
