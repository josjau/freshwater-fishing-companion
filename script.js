"use strict";

function initializeApp() {
    console.info("Freshwater Fishing Companion initialized.");
}

document.addEventListener("DOMContentLoaded", initializeApp);

/* ==========================================================
   DASHBOARD ROUTING
   ========================================================== */

const dashboardCards = document.querySelectorAll("[data-route]");

dashboardCards.forEach((card) => {
    card.addEventListener("click", () => {
        const route = card.dataset.route;

        console.log(`Navigate: ${route}`);
    });
});
