/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: script.js
   PURPOSE: Coordinates routes, Fish search, Rig browsing,
   My Tackle placeholders, and inline Rig tackle-readiness checks.
   ========================================================== */

"use strict";

const BUILD_INFO = Object.freeze({
    file: "script.js",
    milestone: "Rig Guide Completion"
});

const TACKLE_READINESS_STORAGE_KEY = "freshwaterFishingCompanion.tackleReadiness.v1";
console.info(`[Loaded] ${BUILD_INFO.file} | ${BUILD_INFO.milestone}`);

const ROUTES = Object.freeze({
    DASHBOARD: "dashboard",
    FISH: "fish",
    RIGS: "rigs",
    RIG_BROWSE: "rig-browse",
    RIG_DETAIL: "rig-detail",
    RECOMMENDATIONS: "recommendations",
    TACKLE: "tackle",
    KNOTS: "knots",
    CATCH_LOG: "catch-log",
    FAVORITES: "favorites",
    SETTINGS: "settings"
});

const RIG_COLLECTIONS = Object.freeze({
    core: Object.freeze({
        title: "Core Rigs",
        description: "Six curated rigs that cover broadly useful freshwater fishing situations."
    }),
    beginner: Object.freeze({
        title: "Beginner Rigs",
        description: "Simple rigs with forgiving assembly and straightforward fishing applications."
    }),
    "beginner-plus": Object.freeze({
        title: "Beginner+ Rigs",
        description: "Rigs that add a little more setup precision while remaining approachable for a newer angler."
    }),
    intermediate: Object.freeze({
        title: "Intermediate Rigs",
        description: "Four rigs that add leader management, bottom-contact precision, and multi-component setup."
    }),
    "intermediate-plus": Object.freeze({
        title: "Intermediate+ Rigs",
        description: "Four specialized finesse and multi-component setups that add precise weight placement and rig orientation."
    }),
    advanced: Object.freeze({
        title: "Advanced Rigs",
        description: "Two purpose-built rigs for specialized terminal topology and demanding heavy-cover fishing."
    }),
    expert: Object.freeze({
        title: "Expert Rigs",
        description: "A system-oriented trolling rig that combines bottom contact, harness control, and multiple setup decisions."
    }),
    all: Object.freeze({
        title: "All Rigs",
        description: "Browse every currently implemented Rig in the library."
    })
});

let currentView = ROUTES.DASHBOARD;
let dashboardMarkup = "";
let selectedRigId = null;
let selectedRigCollectionKey = "all";

const VIEW_RENDERERS = Object.freeze({
    [ROUTES.FISH]: renderFishGuideView,
    [ROUTES.RIGS]: renderRigGuideView,
    [ROUTES.RIG_BROWSE]: renderRigBrowseView,
    [ROUTES.RIG_DETAIL]: renderRigDetailView,
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

    if (route !== ROUTES.DASHBOARD && !VIEW_RENDERERS[route]) {
        console.warn(`No view renderer is registered for: ${route}`);
        return;
    }

    if (route === ROUTES.DASHBOARD) {
        currentView = ROUTES.DASHBOARD;
        appMain.innerHTML = dashboardMarkup;
        initializeDashboardRouting();
    } else {
        currentView = route;
        VIEW_RENDERERS[route](appMain);
    }

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto"
    });
}

function renderFishGuideView(appMain) {
    renderView(appMain, {
        headingId: "fish-guide-title",
        title: "Fish Guide",
        description: "Search by common name, scientific name, or category, or browse a Fish Guide collection.",
        search: {
            inputId: "fish-guide-search-input",
            label: "Search all Fish",
            placeholder: "Try bass, bluegill, or Micropterus",
            onSearch: (query) => updateFishSearchResults(appMain, query)
        },
        cards: [
            { id: "browse-fish-by-family", title: "Browse by Family", description: "Explore related freshwater fish groups." },
            { id: "browse-fish-by-habitat", title: "Browse by Habitat", description: "Find fish by the water and habitat they prefer." },
            { id: "browse-fish-alphabetically", title: "Browse Alphabetically", description: "View the complete fish guide from A to Z." }
        ]
    });
}

function updateFishSearchResults(appMain, query) {
    const matches = searchRecords(FISH_DATA.filter((fish) => fish.isActive), query, ["name", "scientificName", "category"]);
    renderSearchResults(appMain, matches, {
        emptyMessage: "No fish matched your search.",
        renderRecord: (fish) => `
            <button class="search-result-card" type="button" data-result-id="${fish.id}">
                <span class="search-result-card__title">${fish.name}</span>
                <span class="search-result-card__scientific-name">${fish.scientificName}</span>
                <span class="search-result-card__meta">${fish.category} · ${fish.family}</span>
                <span class="search-result-card__summary">${fish.summary}</span>
            </button>
        `,
        onResultSelect: (fishId) => console.info(`Fish selected: ${fishId}`)
    });
}

function renderRigGuideView(appMain) {
    renderView(appMain, {
        headingId: "rig-guide-title",
        title: "Rig Guide",
        description: "Search the full Rig library or choose a learning collection.",
        search: {
            inputId: "rig-guide-search-input",
            label: "Search all Rigs",
            placeholder: "Try Texas, bobber, shore, cover, or clear water",
            onSearch: (query) => updateRigGuideSearchResults(appMain, query)
        },
        cards: [
            { id: "browse-all-rigs", title: "All Rigs", description: "Browse every Rig currently implemented in the library.", isAvailable: true },
            { id: "browse-core-rigs", title: "Core Rigs", description: "Six curated setups that form a broadly useful fishing toolkit.", isAvailable: true },
            { id: "browse-beginner-rigs", title: "Beginner", description: "Six simple rigs with forgiving assembly and broad usefulness.", isAvailable: true },
            { id: "browse-beginner-plus-rigs", title: "Beginner+", description: "Three approachable rigs that require a little more setup precision.", isAvailable: true },
            { id: "browse-intermediate-rigs", title: "Intermediate", description: "Four rigs that add leader management, bottom-contact precision, and multi-component setup.", isAvailable: true },
            { id: "browse-intermediate-plus-rigs", title: "Intermediate+", description: "Four specialized finesse and multi-component setups with more precise weight placement and rig orientation.", isAvailable: true },
            { id: "browse-advanced-rigs", title: "Advanced", description: "Two purpose-built rigs for specialized terminal topology and demanding heavy-cover fishing.", isAvailable: true },
            { id: "browse-expert-rigs", title: "Expert", description: "A system-oriented trolling rig combining bottom contact, harness control, and multiple setup decisions.", isAvailable: true }
        ],
        onCardSelect: handleRigGuideCardSelect
    });

    appMain.querySelector(".content-view")?.classList.add("rig-guide-view");
    appMain.querySelector('[data-card-id="browse-core-rigs"]')?.classList.add(
        "dashboard-card--primary",
        "rig-guide-core-card"
    );
}

function renderRigSearchResultCard(rig) {
    const coreBadge = isCoreRig(rig)
        ? '<span class="search-result-card__badge">Core Rig</span>'
        : "";

    return `
        <button class="search-result-card search-result-card--rig${isCoreRig(rig) ? " search-result-card--core" : ""}" type="button" data-result-id="${rig.id}">
            ${coreBadge}
            <span class="search-result-card__title">${rig.name}</span>
            <span class="search-result-card__meta">${rig.difficulty}</span>
            <span class="search-result-card__summary">${rig.summary}</span>
            <span class="search-result-card__action">View instructions →</span>
        </button>
    `;
}

function updateRigGuideSearchResults(appMain, query) {
    const activeRigs = RIG_DATA.filter((rig) => rig.isActive);
    const matches = searchRecords(
        activeRigs,
        query,
        ["name", "difficulty", "useCases", "conditionTags"]
    );

    renderSearchResults(appMain, matches, {
        emptyMessage: "No rigs matched your search.",
        renderRecord: renderRigSearchResultCard,
        onResultSelect: (rigId) => {
            selectedRigCollectionKey = "guide";
            selectedRigId = rigId;
            showView(ROUTES.RIG_DETAIL);
        }
    });
}

function handleRigGuideCardSelect(cardId) {
    const collectionKeyByCardId = {
        "browse-core-rigs": "core",
        "browse-beginner-rigs": "beginner",
        "browse-beginner-plus-rigs": "beginner-plus",
        "browse-intermediate-rigs": "intermediate",
        "browse-intermediate-plus-rigs": "intermediate-plus",
        "browse-advanced-rigs": "advanced",
        "browse-expert-rigs": "expert",
        "browse-all-rigs": "all"
    };
    const collectionKey = collectionKeyByCardId[cardId];

    if (collectionKey) {
        selectedRigCollectionKey = collectionKey;
        showView(ROUTES.RIG_BROWSE);
        return;
    }

    console.info(`Rig Guide action not implemented yet: ${cardId}`);
}

function isCoreRig(rig) {
    return Boolean(rig?.id) && CORE_RIG_IDS.includes(rig.id);
}

function getCoreRigOrder(rigId) {
    return CORE_RIG_IDS.indexOf(rigId);
}

function getRigCollectionConfig() {
    return RIG_COLLECTIONS[selectedRigCollectionKey] ?? RIG_COLLECTIONS.all;
}

function getRigsForCollection(activeRigs) {
    if (selectedRigCollectionKey === "core") {
        return CORE_RIG_IDS
            .map((rigId) => findRecordById(activeRigs, rigId))
            .filter(Boolean);
    }

    if (selectedRigCollectionKey === "beginner") {
        return activeRigs.filter((rig) => rig.difficulty === "Beginner");
    }

    if (selectedRigCollectionKey === "beginner-plus") {
        return activeRigs.filter((rig) => rig.difficulty === "Beginner+");
    }

    if (selectedRigCollectionKey === "intermediate") {
        return activeRigs.filter((rig) => rig.difficulty === "Intermediate");
    }

    if (selectedRigCollectionKey === "intermediate-plus") {
        return activeRigs.filter((rig) => rig.difficulty === "Intermediate+");
    }

    if (selectedRigCollectionKey === "advanced") {
        return activeRigs.filter((rig) => rig.difficulty === "Advanced");
    }

    if (selectedRigCollectionKey === "expert") {
        return activeRigs.filter((rig) => rig.difficulty === "Expert");
    }

    return activeRigs;
}

function sortRigCollection(records) {
    if (selectedRigCollectionKey === "core") {
        return [...records].sort(
            (first, second) => getCoreRigOrder(first.id) - getCoreRigOrder(second.id)
        );
    }

    return sortRecordsAlphabetically(records);
}

function renderRigBrowseView(appMain) {
    const collection = getRigCollectionConfig();
    renderSearchView(appMain, {
        headingId: "rig-browse-title",
        inputId: "rig-search-input",
        title: collection.title,
        description: collection.description,
        label: "Search this Rig group",
        placeholder: "Try bobber, bass, shore, cover, or clear water",
        parentLabel: "Rig Guide",
        onParent: () => showView(ROUTES.RIGS),
        onSearch: (query) => updateRigBrowseResults(appMain, query)
    });
}

function updateRigBrowseResults(appMain, query) {
    const activeRigs = RIG_DATA.filter((rig) => rig.isActive);
    const collectionRigs = getRigsForCollection(activeRigs);
    const matches = searchRecords(
        collectionRigs,
        query,
        ["name", "difficulty", "useCases", "conditionTags"]
    );
    const resultRecords = normalizeSearchText(query)
        ? matches
        : sortRigCollection(matches);

    renderSearchResults(appMain, resultRecords, {
        emptyMessage: "No rigs matched your search.",
        renderRecord: renderRigSearchResultCard,
        onResultSelect: (rigId) => {
            selectedRigId = rigId;
            showView(ROUTES.RIG_DETAIL);
        }
    });
}

function renderRigDetailView(appMain) {
    const rig = findRecordById(RIG_DATA, selectedRigId);
    const fromGuideSearch = selectedRigCollectionKey === "guide";
    if (!rig) {
        console.warn(`Rig was not found: ${selectedRigId}`);
        showView(fromGuideSearch ? ROUTES.RIGS : ROUTES.RIG_BROWSE);
        return;
    }


    const collection = getRigCollectionConfig();
    renderInstructionDetail(appMain, {
        record: rig,
        parentLabel: fromGuideSearch ? "Rig Guide" : collection.title,
        selections: getRigReadinessSelections(rig.id),
        onParent: () => showView(
            fromGuideSearch ? ROUTES.RIGS : ROUTES.RIG_BROWSE
        ),
        onReadinessChange: (tackleId, isOwned) =>
            updateRigReadinessSelection(rig.id, tackleId, isOwned)
    });
}

function getReadinessState() {
    try {
        const storedValue = localStorage.getItem(TACKLE_READINESS_STORAGE_KEY);
        if (!storedValue) return {};
        const parsedValue = JSON.parse(storedValue);
        return parsedValue && typeof parsedValue === "object" ? parsedValue : {};
    } catch (error) {
        console.warn("Tackle readiness could not be loaded.", error);
        return {};
    }
}

function saveReadinessState(state) {
    try {
        localStorage.setItem(TACKLE_READINESS_STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
        console.warn("Tackle readiness could not be saved.", error);
    }
}

function getRigReadinessSelections(rigId) {
    const state = getReadinessState();
    const rigState = state[rigId];
    return rigState && typeof rigState === "object" ? rigState : {};
}

function updateRigReadinessSelection(rigId, tackleId, isOwned) {
    const state = getReadinessState();
    const rigState = state[rigId] && typeof state[rigId] === "object" ? state[rigId] : {};
    rigState[tackleId] = isOwned;
    state[rigId] = rigState;
    saveReadinessState(state);
}

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

function renderTackleView(appMain) {
    renderView(appMain, {
        headingId: "tackle-title",
        title: "My Tackle",
        description: "Catalog, organize, and track the fishing equipment and consumable tackle you own.",
        cards: [
            { id: "view-tackle-inventory", title: "View My Inventory", description: "Browse the equipment and tackle currently recorded." },
            { id: "add-tackle", title: "Add Tackle", description: "Record a new piece of equipment or consumable tackle." },
            { id: "identify-tackle", title: "Identify Tackle", description: "Use contextual reference help when you are not sure what an item is." },
            { id: "check-rig-readiness", title: "Check Rig Readiness", description: "Review whether you have the components needed for supported rigs." }
        ]
    });
}

function renderKnotsView(appMain) {
    renderView(appMain, {
        headingId: "knots-title",
        title: "Knots",
        description: "Learn dependable fishing knots and choose the right knot for each line, lure, and connection.",
        cards: [
            { id: "browse-all-knots", title: "Browse All Knots", description: "Explore the complete collection of supported knots." },
            { id: "browse-knots-by-purpose", title: "Browse by Purpose", description: "Find knots for hooks, lures, leaders, and line joining." },
            { id: "browse-knots-by-line-type", title: "Browse by Line Type", description: "Choose knots suited to monofilament, braid, or fluorocarbon." },
            { id: "compare-knots", title: "Compare Knots", description: "Compare strength, difficulty, profile, and recommended use." }
        ]
    });
}

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

function initializeDashboardRouting() {
    document.querySelectorAll("[data-route]").forEach((card) => {
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
