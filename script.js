"use strict";

function initializeApp() {
    console.info("Freshwater Fishing Companion initialized.");
}

document.addEventListener("DOMContentLoaded", initializeApp);

/* ==========================================================
   DASHBOARD ROUTING
   ========================================================== */

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

const dashboardCards = document.querySelectorAll("[data-route]");

dashboardCards.forEach((card) => {
    card.addEventListener("click", () => {
        const route = card.dataset.route;

        console.log(`Navigate: ${route}`);
    });
});
