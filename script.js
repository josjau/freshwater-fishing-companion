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

function showView(route) {
    currentView = route;

    console.log(`Current View: ${currentView}`);
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
    console.info("Freshwater Fishing Companion initialized.");

    initializeDashboardRouting();
}

document.addEventListener("DOMContentLoaded", initializeApp);
