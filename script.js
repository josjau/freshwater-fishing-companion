/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: script.js
   PURPOSE: Coordinates shared application routing/navigation and keeps
   Guide/feature controllers in explicit ownership boundaries.
   ========================================================== */

"use strict";

const BUILD_INFO = Object.freeze({
    file: "script.js",
    milestone: "Rigs — I1 State / Storage / Routing Foundation"
});

console.info(`[Loaded] ${BUILD_INFO.file} | ${BUILD_INFO.milestone}`);

/* ==========================================================
   SHARED APP — ROUTES + GLOBAL NAVIGATION CONTRACT
   ========================================================== */

const ROUTES = FCC_APP.ROUTES;

/* ==========================================================
   SHARED APP — RUNTIME STATE + DETAIL NAVIGATION STACK
   ========================================================== */

let currentView = ROUTES.DASHBOARD;
let dashboardMarkup = "";
// Cross-Guide return history is owned by app-core, not Guide-private state.
function clearDetailNavigationStack() {
    FCC_APP.clearNavigationContext();
}

function peekDetailNavigationContext() {
    return FCC_APP.peekNavigationContext();
}

function pushDetailNavigationContext(context) {
    return FCC_APP.pushNavigationContext(context);
}

function returnToDetailNavigationContext() {
    const restoredRoute = FCC_APP.restorePreviousNavigationContext();
    if (!restoredRoute) return false;
    showView(restoredRoute);
    return true;
}

/* ==========================================================
   SHARED APP — LEGACY OWNER REGISTRATION (MIGRATION BRIDGE)
   Each provider owns its render and return-state callbacks. Later
   Guide-specific controllers replace these registrations without
   putting Guide-private state into the shared app registry.
   ========================================================== */

function renderDashboardRoute(appMain) {
    clearDetailNavigationStack();
    resetFishGuideForHome();
    resetRigGuideForHome();
    resetTechniqueGuideForHome();
    resetKnotGuideForHome();
    resetRegulationsForHome();
    appMain.innerHTML = dashboardMarkup;
    initializeDashboardRouting();
}

function registerAppRouteProviders() {
    FCC_APP.registerProvider("shared-app", {
        [ROUTES.DASHBOARD]: { render: renderDashboardRoute },
        [ROUTES.RECOMMENDATIONS]: { render: renderRecommendationsView },
        [ROUTES.TACKLE]: { render: renderTackleView },
        [ROUTES.CATCH_LOG]: { render: renderCatchLogView },
        [ROUTES.FAVORITES]: { render: renderFavoritesView },
        [ROUTES.SETTINGS]: { render: renderSettingsView }
    });

    registerFishGuideRoutes();

    registerRigGuideRoutes();

    registerTechniqueGuideRoutes();

    registerKnotGuideRoutes();

    registerReelSetupRoutes();

    registerRegulationsRoutes();
}

function showView(route) {
    const appMain = document.querySelector("#app-main");
    if (!appMain) {
        console.error("Application main content area was not found.");
        return false;
    }
    if (!FCC_APP.hasRoute(route)) {
        console.warn(`Unknown or unavailable route: ${route}`);
        return false;
    }

    // A route change must not retain a body-level scroll lock from a dialog
    // or picker whose DOM is about to be replaced. Close it before rendering.
    removeOpenReferencePopovers();
    document.body.classList.remove("reel-line-weight-picker-open", "regulations-picker-open");

    // Retain the old currentView alias only for controllers still being
    // extracted; app-core is the authoritative route registry.
    const previousView = currentView;
    currentView = route;
    try {
        FCC_APP.renderRoute(route, appMain);
    } catch (error) {
        currentView = previousView;
        throw error;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    return true;
}

/* ==========================================================
   RECOMMENDATIONS — CONTROLLER
   ========================================================== */

function renderRecommendationsView(appMain) {
    renderView(appMain, {
        headingId: "recommendations-title",
        title: "What Should I Throw?",
        description: "Get lure recommendations based on the fish you are targeting and the conditions you are fishing.",
        cards: [
            { id: "start-lure-recommendation", title: "Start a Recommendation", description: "Enter the current fishing conditions and target fish." },
            { id: "browse-lures-by-target-fish", title: "Browse by Target Fish", description: "Find lure options for a specific freshwater species." },
            { id: "browse-lures-by-conditions", title: "Browse by Conditions", description: "Explore lures for water clarity, depth, cover, weather, and season." },
            { id: "view-lure-families", title: "View Lure Families", description: "Learn how major lure types behave and when to use them." }
        ]
    });
}

/* ==========================================================
   END RECOMMENDATIONS
   ========================================================== */

/* ==========================================================
   TACKLE — CONTROLLER
   ========================================================== */

function renderTackleView(appMain) {
    renderView(appMain, {
        headingId: "tackle-title",
        title: "Tackle",
        description: "Learn about fishing tackle and manage the equipment and consumables you own.",
        cards: [
            { id: "find-tackle", title: "Tackle Reference / Find Tackle", description: "Learn what tackle is, how to recognize it, and where it is used." },
            { id: "view-tackle-inventory", title: "My Tackle", description: "Browse and manage the equipment and tackle you own." },
            { id: "check-rig-readiness", title: "Check Rig Readiness", description: "Review whether you have the components needed for supported rigs." }
        ]
    });
}


/* ==========================================================
   END TACKLE
   ========================================================== */

/* ==========================================================
   CATCH LOG — PLACEHOLDER ROUTE
   ========================================================== */

function renderCatchLogView(appMain) {
    renderView(appMain, {
        headingId: "catch-log-title",
        title: "Catch Log",
        description: "Record catches and build a useful history of fish, locations, conditions, tackle, and results.",
        cards: [
            { id: "add-catch", title: "Log a Catch", description: "Record a fish, location, conditions, and tackle used." },
            { id: "view-catch-history", title: "View Catch History", description: "Browse previously recorded catches and trip results." },
            { id: "view-catch-insights", title: "View Insights", description: "Review patterns across species, locations, and conditions." },
            { id: "manage-catch-locations", title: "Manage Locations", description: "Organize the waters and fishing spots used in catch records." }
        ]
    });
}

/* ==========================================================
   END CATCH LOG — PLACEHOLDER ROUTE
   ========================================================== */


/* ==========================================================
   FAVORITES — PLACEHOLDER ROUTE
   ========================================================== */

function renderFavoritesView(appMain) {
    renderView(appMain, {
        headingId: "favorites-title",
        title: "Favorites",
        description: "Quickly return to saved fish, rigs, knots, tackle, recommendations, and other useful content.",
        cards: [
            { id: "view-favorite-fish", title: "Favorite Fish", description: "Open freshwater fish saved for quick reference." },
            { id: "view-favorite-rigs", title: "Favorite Rigs", description: "Review saved rig instructions and component lists." },
            { id: "view-favorite-knots", title: "Favorite Knots", description: "Return to frequently used fishing knots." },
            { id: "view-all-favorites", title: "View All Favorites", description: "Browse every item saved across the application." }
        ]
    });
}

/* ==========================================================
   END FAVORITES — PLACEHOLDER ROUTE
   ========================================================== */


/* ==========================================================
   SETTINGS — PLACEHOLDER ROUTE
   ========================================================== */

function renderSettingsView(appMain) {
    renderView(appMain, {
        headingId: "settings-title",
        title: "Settings",
        description: "Control application preferences, appearance, data, and other user-specific options.",
        cards: [
            { id: "manage-profile-settings", title: "Profile", description: "Manage angler experience, preferences, and home region." },
            { id: "manage-appearance-settings", title: "Appearance", description: "Choose the application theme and display preferences." },
            { id: "manage-data-settings", title: "Data Management", description: "Review, export, import, or clear user-created data." },
            { id: "view-about-information", title: "About", description: "View application version, project information, and notices." }
        ]
    });
}

/* ==========================================================
   END SETTINGS — PLACEHOLDER ROUTE
   ========================================================== */


/* ==========================================================
   SHARED APP — DASHBOARD ROUTING + INITIALIZATION
   ========================================================== */

function initializeDashboardRouting() {
    document.querySelectorAll("[data-route]").forEach((card) => {
        card.addEventListener("click", () => {
            const route = card.dataset.route;
            if (!FCC_APP.hasRoute(route)) {
                console.warn(`Unknown or unavailable route: ${route}`);
                return;
            }
            showView(route);
        });
    });
}

function initializeApp() {
    const appMain = document.querySelector("#app-main");
    console.info("Freshwater Fishing Companion initialized.");
    if (!appMain) {
        console.error("Application main content area was not found.");
        return;
    }
    registerAppRouteProviders();
    completedReelSetupContext = loadCompletedReelSetupContext();
    discardLegacyRigReadinessStorage();
    dashboardMarkup = appMain.innerHTML;
    initializeDashboardRouting();
}

document.addEventListener("DOMContentLoaded", initializeApp);

/* ==========================================================
   END SHARED APP — DASHBOARD ROUTING + INITIALIZATION
   ========================================================== */

