/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: script.js
   REPLACEMENT: MS2.2 - APPLICATION COORDINATOR
   PURPOSE: Owns routes, application views, dashboard routing,
   and application initialization. Shared rendering and search
   behavior are maintained in separate source files.
   ========================================================== */

"use strict";

const BUILD_INFO = Object.freeze({
    file: "script.js",
    milestone: "MS2.2",
    replacement: "Application Coordinator"
});

console.info(
    `[Loaded] ${BUILD_INFO.file} | ` +
    `${BUILD_INFO.milestone} | ` +
    `${BUILD_INFO.replacement}`
);

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
    [ROUTES.TACKLE]: renderTackleView,
    [ROUTES.KNOTS]: renderKnotsView,
    [ROUTES.CATCH_LOG]: renderCatchLogView,
    [ROUTES.FAVORITES]: renderFavoritesView,
    [ROUTES.SETTINGS]: renderSettingsView
});

function showView(route) {
    const appMain = document.querySelector("#app-main");

    if (!appMain) {
        console.error("Application main content area was not found.");
        return;
    }

    if (route === ROUTES.DASHBOARD) {
        currentView = ROUTES.DASHBOARD;
        appMain.innerHTML = dashboardMarkup;
        initializeDashboardRouting();
        return;
    }

    const viewRenderer = VIEW_RENDERERS[route];

    if (!viewRenderer) {
        console.warn(`No view renderer is registered for: ${route}`);
        return;
    }

    currentView = route;
    viewRenderer(appMain);
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

function renderKnotsView(appMain) {
    renderView(appMain, {
        headingId: "knots-title",
        title: "Knots",
        description:
            "Learn dependable fishing knots and choose the right knot " +
            "for each line, lure, and connection.",
        cards: [
            {
                id: "browse-all-knots",
                title: "Browse All Knots",
                description:
                    "Explore the complete collection of supported knots."
            },
            {
                id: "browse-knots-by-purpose",
                title: "Browse by Purpose",
                description:
                    "Find knots for hooks, lures, leaders, and line joining."
            },
            {
                id: "browse-knots-by-line-type",
                title: "Browse by Line Type",
                description:
                    "Choose knots suited to monofilament, braid, or fluorocarbon."
            },
            {
                id: "compare-knots",
                title: "Compare Knots",
                description:
                    "Compare strength, difficulty, profile, and recommended use."
            }
        ]
    });
}

function renderCatchLogView(appMain) {
    renderView(appMain, {
        headingId: "catch-log-title",
        title: "Catch Log",
        description:
            "Record catches and build a useful history of fish, locations, " +
            "conditions, tackle, and results.",
        cards: [
            {
                id: "add-catch",
                title: "Log a Catch",
                description:
                    "Record a fish, location, conditions, and tackle used."
            },
            {
                id: "view-catch-history",
                title: "View Catch History",
                description:
                    "Browse previously recorded catches and trip results."
            },
            {
                id: "view-catch-insights",
                title: "View Insights",
                description:
                    "Review patterns across species, locations, and conditions."
            },
            {
                id: "manage-catch-locations",
                title: "Manage Locations",
                description:
                    "Organize the waters and fishing spots used in catch records."
            }
        ]
    });
}

function renderFavoritesView(appMain) {
    renderView(appMain, {
        headingId: "favorites-title",
        title: "Favorites",
        description:
            "Quickly return to saved fish, rigs, knots, tackle, " +
            "recommendations, and other useful content.",
        cards: [
            {
                id: "view-favorite-fish",
                title: "Favorite Fish",
                description:
                    "Open freshwater fish saved for quick reference."
            },
            {
                id: "view-favorite-rigs",
                title: "Favorite Rigs",
                description:
                    "Review saved rig instructions and component lists."
            },
            {
                id: "view-favorite-knots",
                title: "Favorite Knots",
                description:
                    "Return to frequently used fishing knots."
            },
            {
                id: "view-all-favorites",
                title: "View All Favorites",
                description:
                    "Browse every item saved across the application."
            }
        ]
    });
}

function renderSettingsView(appMain) {
    renderView(appMain, {
        headingId: "settings-title",
        title: "Settings",
        description:
            "Control application preferences, appearance, data, " +
            "and other user-specific options.",
        cards: [
            {
                id: "manage-profile-settings",
                title: "Profile",
                description:
                    "Manage angler experience, preferences, and home region."
            },
            {
                id: "manage-appearance-settings",
                title: "Appearance",
                description:
                    "Choose the application theme and display preferences."
            },
            {
                id: "manage-data-settings",
                title: "Data Management",
                description:
                    "Review, export, import, or clear user-created data."
            },
            {
                id: "view-about-information",
                title: "About",
                description:
                    "View application version, project information, and notices."
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

            if (!VIEW_RENDERERS[route]) {
                console.warn(`Unknown or unavailable route: ${route}`);
                return;
            }

            showView(route);
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
