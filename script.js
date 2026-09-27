/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: script.js
   PURPOSE: Coordinates shared application routing/navigation and keeps
   Guide/feature controllers in explicit ownership boundaries.
   ========================================================== */

"use strict";

const BUILD_INFO = Object.freeze({
    file: "script.js",
    milestone: "Knots — Connected Knowledge Navigation Closeout"
});

const TACKLE_READINESS_STORAGE_KEY = "freshwaterFishingCompanion.tackleReadiness.v1";
console.info(`[Loaded] ${BUILD_INFO.file} | ${BUILD_INFO.milestone}`);

/* ==========================================================
   SHARED APP — ROUTES + GLOBAL NAVIGATION CONTRACT
   ========================================================== */

const ROUTES = Object.freeze({
    DASHBOARD: "dashboard",
    FISH: "fish",
    FISH_BROWSE: "fish-browse",
    FISH_DETAIL: "fish-detail",
    FISH_COMPARE_CATALOG: "fish-compare-catalog",
    FISH_COMPARE_CHOOSER: "fish-compare-chooser",
    FISH_COMPARE: "fish-compare",
    RIGS: "rigs",
    RIG_BROWSE: "rig-browse",
    RIG_DETAIL: "rig-detail",
    RECOMMENDATIONS: "recommendations",
    REGULATIONS: "regulations",
    REGULATIONS_STATE: "regulations-state",
    TACKLE: "tackle",
    KNOTS: "knots",
    KNOT_BROWSE: "knot-browse",
    KNOT_DETAIL: "knot-detail",
    REEL_SETUP: "reel-setup",
    CATCH_LOG: "catch-log",
    FAVORITES: "favorites",
    SETTINGS: "settings"
});

/* ==========================================================
   RIG GUIDE — COLLECTION CONFIGURATION
   ========================================================== */

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
        description: "Browse every Rig in the guide."
    })
});

const RIG_DIFFICULTY_ORDER = Object.freeze([
    "Beginner",
    "Beginner+",
    "Intermediate",
    "Intermediate+",
    "Advanced",
    "Expert"
]);

/* ==========================================================
   SHARED APP — RUNTIME STATE + DETAIL NAVIGATION STACK
   ========================================================== */

let currentView = ROUTES.DASHBOARD;
let dashboardMarkup = "";
let selectedRigId = null;
let selectedRigCollectionKey = "all";
let selectedRigConfigurationId = null;
let selectedKnotId = null;
let selectedKnotBrowseKey = "all";
let selectedKnotTaskId = null;
let selectedKnotDetailSource = "guide";
let selectedRegulationStateId = null;
let regulationsGatewayState = { query: "" };
let reelSetupState = createInitialReelSetupState();
let detailNavigationStack = [];

function clearDetailNavigationStack() {
    detailNavigationStack = [];
}

function peekDetailNavigationContext() {
    return detailNavigationStack.length > 0
        ? detailNavigationStack[detailNavigationStack.length - 1]
        : null;
}

function pushDetailNavigationContext(context) {
    if (!context?.route || !context?.label || !context?.state) return;
    detailNavigationStack.push(context);
}

function returnToDetailNavigationContext() {
    const context = detailNavigationStack.pop();
    if (!context) return false;

    if (context.route === ROUTES.FISH) {
        fishGuideState = { ...context.state.fishGuideState };
        showView(ROUTES.FISH);
        return true;
    }

    if (context.route === ROUTES.FISH_BROWSE) {
        selectedFishCollectionKey = context.state.selectedFishCollectionKey;
        fishBrowseState = { ...context.state.fishBrowseState };
        showView(ROUTES.FISH_BROWSE);
        return true;
    }

    if (context.route === ROUTES.FISH_COMPARE_CATALOG) {
        fishComparisonCatalogScrollY = context.state.scrollY ?? 0;
        fishComparisonCatalogFocusRelationshipId = context.state.focusRelationshipId ?? null;
        showView(ROUTES.FISH_COMPARE_CATALOG);
        return true;
    }

    if (context.route === ROUTES.FISH_DETAIL) {
        selectedFishId = context.state.selectedFishId;
        fishDetailState = context.state.fishDetailState
            ? { ...context.state.fishDetailState, expandedSectionIds: [...context.state.fishDetailState.expandedSectionIds] }
            : createInitialFishDetailState(selectedFishId);
        showView(ROUTES.FISH_DETAIL);
        return true;
    }

    if (context.route === ROUTES.FISH_COMPARE_CHOOSER) {
        selectedFishId = context.state.selectedFishId;
        fishComparisonChooserFocusRelationshipId = context.state.focusRelationshipId ?? null;
        showView(ROUTES.FISH_COMPARE_CHOOSER);
        return true;
    }

    if (context.route === ROUTES.FISH_COMPARE) {
        selectedFishRelationshipId = context.state.selectedFishRelationshipId;
        fishComparisonFocusFishId = context.state.focusFishId ?? null;
        showView(ROUTES.FISH_COMPARE);
        return true;
    }

    if (context.route === ROUTES.RIG_DETAIL) {
        selectedRigId = context.state.selectedRigId;
        selectedRigCollectionKey = context.state.selectedRigCollectionKey;
        showView(ROUTES.RIG_DETAIL);
        return true;
    }

    if (context.route === ROUTES.KNOT_DETAIL) {
        selectedKnotId = context.state.selectedKnotId;
        selectedKnotBrowseKey = context.state.selectedKnotBrowseKey;
        selectedKnotTaskId = context.state.selectedKnotTaskId;
        selectedKnotDetailSource = context.state.selectedKnotDetailSource;
        knotDetailState = context.state.knotDetailState
            ? {
                ...context.state.knotDetailState,
                expandedDisclosureIds: [...(context.state.knotDetailState.expandedDisclosureIds ?? [])]
            }
            : createInitialKnotDetailState(selectedKnotId);
        showView(ROUTES.KNOT_DETAIL);
        return true;
    }

    if (context.route === ROUTES.REEL_SETUP) {
        reelSetupState = { ...context.state.reelSetupState };
        showView(ROUTES.REEL_SETUP);
        return true;
    }

    return false;
}

const VIEW_RENDERERS = Object.freeze({
    [ROUTES.FISH]: renderFishGuideView,
    [ROUTES.FISH_BROWSE]: renderFishBrowseView,
    [ROUTES.FISH_DETAIL]: renderFishDetailView,
    [ROUTES.FISH_COMPARE_CATALOG]: renderFishComparisonCatalogView,
    [ROUTES.FISH_COMPARE_CHOOSER]: renderFishComparisonChooserView,
    [ROUTES.FISH_COMPARE]: renderFishComparisonView,
    [ROUTES.RIGS]: renderRigGuideView,
    [ROUTES.RIG_BROWSE]: renderRigBrowseView,
    [ROUTES.RIG_DETAIL]: renderRigDetailView,
    [ROUTES.RECOMMENDATIONS]: renderRecommendationsView,
    [ROUTES.REGULATIONS]: renderRegulationsGatewayRoute,
    [ROUTES.REGULATIONS_STATE]: renderRegulationsStateRoute,
    [ROUTES.TACKLE]: renderTackleView,
    [ROUTES.KNOTS]: renderKnotsView,
    [ROUTES.KNOT_BROWSE]: renderKnotBrowseView,
    [ROUTES.KNOT_DETAIL]: renderKnotDetailView,
    [ROUTES.REEL_SETUP]: renderReelSetupView,
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
        clearDetailNavigationStack();
        fishGuideState = { query: "", scrollY: 0 };
        fishDetailState = createInitialFishDetailState(null);
        knotGuideState = { query: "", scrollY: 0 };
        knotBrowseState = { query: "", scrollY: 0 };
        selectedRegulationStateId = null;
        regulationsGatewayState = { query: "" };
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

/* ==========================================================
   FISH GUIDE — STATE + DATA ACCESS + CONTROLLERS
   Specialized authored targeting/safety/research guidance is owned by
   data/fish-specialized-guidance.js and consumed here.
   ========================================================== */

let selectedFishId = null;
let selectedFishCollectionKey = "all";
let selectedFishRelationshipId = null;
let fishGuideState = { query: "", scrollY: 0 };
let fishBrowseState = { query: "", scrollY: 0 };
let fishComparisonCatalogScrollY = 0;
let fishGuideRestoreCompareFocus = false;
let fishComparisonCatalogFocusRelationshipId = null;
let fishComparisonChooserFocusRelationshipId = null;
let fishComparisonFocusFishId = null;

function createInitialFishDetailState(fishId) {
    return {
        fishId,
        expandedSectionIds: [],
        scrollY: 0,
        restoreScroll: false,
        restoreFocusTarget: null
    };
}

let fishDetailState = createInitialFishDetailState(null);

function resetFishDetailState(fishId) {
    fishDetailState = createInitialFishDetailState(fishId);
}

function captureFishDetailNavigationState(restoreFocusTarget = null) {
    const expandedSectionIds = Array.isArray(fishDetailState.expandedSectionIds)
        ? [...fishDetailState.expandedSectionIds]
        : [];
    return {
        selectedFishId,
        fishDetailState: {
            fishId: selectedFishId,
            expandedSectionIds,
            scrollY: window.scrollY,
            restoreScroll: true,
            restoreFocusTarget
        }
    };
}

function restoreFishDetailScroll() {
    if (fishDetailState.fishId !== selectedFishId || fishDetailState.restoreScroll !== true) return;
    const scrollY = Number(fishDetailState.scrollY ?? 0);
    requestAnimationFrame(() => {
        window.scrollTo({ top: scrollY, left: 0, behavior: "auto" });
        fishDetailState = { ...fishDetailState, restoreScroll: false };
    });
}

function restoreFishFocus(appMain, selector) {
    if (!appMain || !selector) return;
    requestAnimationFrame(() => {
        appMain.querySelector(selector)?.focus({ preventScroll: true });
    });
}

function restoreFishDetailFocus(appMain) {
    if (fishDetailState.fishId !== selectedFishId || !fishDetailState.restoreFocusTarget) return;
    const selector = fishDetailState.restoreFocusTarget === "compare"
        ? "[data-fish-compare-from-detail]"
        : null;
    fishDetailState = { ...fishDetailState, restoreFocusTarget: null };
    restoreFishFocus(appMain, selector);
}

function restoreFishComparisonCardFocus(appMain, selector, relationshipId) {
    if (!relationshipId) return;
    requestAnimationFrame(() => {
        const target = Array.from(appMain.querySelectorAll(selector)).find((element) =>
            element.dataset.fishRelationshipId === relationshipId ||
            element.dataset.fishComparisonChoice === relationshipId
        );
        target?.focus({ preventScroll: true });
    });
}

// Data access + derived helpers.
function getActiveFish() {
    return FISH_DATA.filter((fish) => fish.isActive === true);
}

function getFishCategory(categoryId) {
    return FISH_CATEGORY_DATA.find((category) => category.id === categoryId) ?? null;
}

function getFishCategoryId(fish) {
    if (!fish) return null;
    if (typeof fish.categoryId === "string" && fish.categoryId) return fish.categoryId;
    if (typeof fish.category === "string" && typeof FISH_LEGACY_CATEGORY_ID_MAP !== "undefined") {
        return FISH_LEGACY_CATEGORY_ID_MAP[fish.category] ?? null;
    }
    return null;
}

function isFishProductionRecord(fish) {
    return Boolean(fish) &&
        typeof fish.categoryId === "string" &&
        Array.isArray(fish.aliases) &&
        Array.isArray(fish.identificationTraits);
}

function getVisibleFishCategories(activeFish = getActiveFish()) {
    const activeCategoryIds = new Set(activeFish.map(getFishCategoryId).filter(Boolean));
    return FISH_CATEGORY_DATA.filter((category) => activeCategoryIds.has(category.id));
}

function getFishPrimaryMedia(fishId) {
    if (typeof MEDIA_DATA === "undefined") return null;
    return MEDIA_DATA.find((media) =>
        media.ownerType === "fish" &&
        media.ownerId === fishId &&
        media.role === "primary-identification" &&
        media.isActive === true
    ) ?? null;
}

function getActiveFishRelationships() {
    if (typeof FISH_IDENTIFICATION_RELATIONSHIPS === "undefined") return [];
    const activeFishIds = new Set(getActiveFish().map((fish) => fish.id));
    return FISH_IDENTIFICATION_RELATIONSHIPS.filter((relationship) =>
        relationship.isActive === true &&
        relationship.fishIds.every((fishId) => activeFishIds.has(fishId))
    );
}

function getFishRelationshipsForFish(fishId) {
    return getActiveFishRelationships().filter((relationship) => relationship.fishIds.includes(fishId));
}

function isFishDetailReady(fish) {
    return isFishProductionRecord(fish) && fish.isActive === true && Boolean(getFishPrimaryMedia(fish.id));
}

function getFishForCollection(activeFish = getActiveFish()) {
    if (selectedFishCollectionKey === "all") return activeFish;
    return activeFish.filter((fish) => getFishCategoryId(fish) === selectedFishCollectionKey);
}

function getFishCollectionConfig() {
    if (selectedFishCollectionKey === "all") {
        return {
            key: "all",
            title: "All Fish",
            description: "Browse all Fish A–Z."
        };
    }

    const category = getFishCategory(selectedFishCollectionKey);
    return category
        ? { key: category.id, title: category.name, description: category.summary }
        : { key: "all", title: "All Fish", description: "Browse all Fish A–Z." };
}

function restoreFishScroll(scrollY) {
    if (!Number.isFinite(scrollY) || scrollY <= 0) return;
    window.requestAnimationFrame(() => {
        window.scrollTo({ top: scrollY, left: 0, behavior: "auto" });
    });
}

function renderFishSearchResultCard(fish) {
    return buildFishResultCardMarkup(
        fish,
        getFishCategory(getFishCategoryId(fish)),
        getFishPrimaryMedia(fish.id),
        isFishDetailReady(fish)
    );
}

// Landing + browse controllers.
function renderFishGuideView(appMain) {
    const activeFish = getActiveFish();
    const visibleCategories = getVisibleFishCategories(activeFish);
    const activeRelationships = getActiveFishRelationships();

    renderFishGuideLanding(appMain, {
        activeFishCount: activeFish.length,
        categories: visibleCategories,
        comparisonCount: activeRelationships.length,
        initialQuery: fishGuideState.query,
        searchPlaceholder: getFishSearchPlaceholder("all", "Fish"),
        onQueryChange: (query) => {
            fishGuideState.query = query;
        },
        onSearch: (query) => updateFishGuideSearchResults(appMain, query),
        onCollectionSelect: openFishBrowse,
        onCompareSelect: openFishComparisonCatalog
    });

    restoreFishScroll(fishGuideState.scrollY);
    if (fishGuideRestoreCompareFocus) {
        fishGuideRestoreCompareFocus = false;
        restoreFishFocus(appMain, "[data-fish-compare-catalog]");
    }
}

function updateFishGuideSearchResults(appMain, query) {
    const matches = searchFishRecords(getActiveFish(), query, FISH_CATEGORY_DATA, FISH_LEGACY_CATEGORY_ID_MAP);
    renderSearchResults(appMain, matches, {
        emptyMessage: "No Fish matched your search.",
        renderRecord: renderFishSearchResultCard,
        onResultSelect: openFishDetailFromGuide
    });
}

function openFishBrowse(collectionKey) {
    const validCollection = collectionKey === "all" || Boolean(getFishCategory(collectionKey));
    if (!validCollection) {
        console.warn(`Fish collection was not found: ${collectionKey}`);
        return;
    }

    clearDetailNavigationStack();
    fishGuideState.scrollY = window.scrollY;
    selectedFishCollectionKey = collectionKey;
    fishBrowseState = { query: "", scrollY: 0 };
    showView(ROUTES.FISH_BROWSE);
}

function renderFishBrowseView(appMain) {
    const collection = getFishCollectionConfig();
    const scopeKey = collection.key;
    renderSearchView(appMain, {
        headingId: "fish-browse-title",
        inputId: "fish-browse-search-input",
        title: collection.title,
        description: collection.description,
        label: "Search Fish",
        helpText: "Fish name, alias, or group",
        inputDescriptionId: "fish-browse-search-help",
        placeholder: getFishSearchPlaceholder(scopeKey, collection.title),
        showSubmitButton: false,
        viewClass: "fish-browse-view",
        parentLabel: "Fish Guide",
        initialQuery: fishBrowseState.query,
        onQueryChange: (query) => {
            fishBrowseState.query = query.trim();
        },
        onParent: () => showView(ROUTES.FISH),
        onSearch: (query) => updateFishBrowseResults(appMain, query)
    });

    restoreFishScroll(fishBrowseState.scrollY);
}

function updateFishBrowseResults(appMain, query) {
    const collectionFish = getFishForCollection(getActiveFish());
    const matches = searchFishRecords(collectionFish, query, FISH_CATEGORY_DATA, FISH_LEGACY_CATEGORY_ID_MAP);
    renderSearchResults(appMain, matches, {
        emptyMessage: `No Fish matched within ${getFishCollectionConfig().title}.`,
        renderRecord: renderFishSearchResultCard,
        onResultSelect: openFishDetailFromBrowse
    });
}

// Detail controllers + related knowledge.
function openFishDetailFromGuide(fishId) {
    const fish = findRecordById(getActiveFish(), fishId);
    if (!fish || !isFishDetailReady(fish)) {
        console.warn(`Fish detail is not production-ready: ${fishId}`);
        return;
    }

    clearDetailNavigationStack();
    fishGuideState.scrollY = window.scrollY;
    pushDetailNavigationContext({
        route: ROUTES.FISH,
        label: "Fish Guide",
        state: { fishGuideState: { ...fishGuideState } }
    });
    selectedFishId = fishId;
    resetFishDetailState(fishId);
    showView(ROUTES.FISH_DETAIL);
}

function openFishDetailFromBrowse(fishId) {
    const fish = findRecordById(getActiveFish(), fishId);
    if (!fish || !isFishDetailReady(fish)) {
        console.warn(`Fish detail is not production-ready: ${fishId}`);
        return;
    }

    clearDetailNavigationStack();
    fishBrowseState.scrollY = window.scrollY;
    pushDetailNavigationContext({
        route: ROUTES.FISH_BROWSE,
        label: getFishCollectionConfig().title,
        state: {
            selectedFishCollectionKey,
            fishBrowseState: { ...fishBrowseState }
        }
    });
    selectedFishId = fishId;
    resetFishDetailState(fishId);
    showView(ROUTES.FISH_DETAIL);
}

function getFishRelationshipContexts(fishId) {
    return getFishRelationshipsForFish(fishId)
        .map((relationship) => {
            const relatedFishId = relationship.fishIds.find((id) => id !== fishId);
            const relatedFish = findRecordById(getActiveFish(), relatedFishId);
            if (!relatedFish) return null;
            return {
                relationship,
                relatedFish,
                relatedMedia: getFishPrimaryMedia(relatedFish.id)
            };
        })
        .filter(Boolean);
}

function getFishRigRecommendationContexts(fishId) {
    if (typeof FISH_RIG_GUIDANCE === "undefined") return [];
    const guidance = FISH_RIG_GUIDANCE.find((record) => record.fishId === fishId && record.isActive === true);
    if (!guidance) return [];

    return guidance.rigRecommendations
        .map((recommendation) => {
            const rig = findRecordById(RIG_DATA, recommendation.rigId);
            if (!rig || rig.isActive !== true) return null;
            const lureBait = recommendation.lureBaitId && typeof LURE_BAIT_DATA !== "undefined"
                ? findRecordById(LURE_BAIT_DATA, recommendation.lureBaitId)
                : null;
            return { ...recommendation, rig, lureBait };
        })
        .filter(Boolean);
}

function renderFishDetailView(appMain) {
    const fish = findRecordById(getActiveFish(), selectedFishId);
    const returnContext = peekDetailNavigationContext();
    if (!fish || !isFishDetailReady(fish)) {
        console.warn(`Fish was not found: ${selectedFishId}`);
        if (returnContext && returnToDetailNavigationContext()) return;
        showView(ROUTES.FISH);
        return;
    }

    if (fishDetailState.fishId !== fish.id) resetFishDetailState(fish.id);

    renderFishDetail(appMain, {
        record: fish,
        category: getFishCategory(getFishCategoryId(fish)),
        primaryMedia: getFishPrimaryMedia(fish.id),
        relationships: getFishRelationshipContexts(fish.id),
        rigRecommendations: getFishRigRecommendationContexts(fish.id),
        specializedTargeting: FISH_SPECIALIZED_TARGETING[fish.id] ?? null,
        expandedDisclosureIds: fishDetailState.expandedSectionIds,
        parentLabel: returnContext?.label ?? "Fish Guide",
        onParent: returnContext ? returnToDetailNavigationContext : () => showView(ROUTES.FISH),
        onDisclosureStateChange: (expandedSectionIds) => {
            fishDetailState = {
                ...fishDetailState,
                fishId: fish.id,
                expandedSectionIds: [...expandedSectionIds]
            };
        },
        onCompareSelect: openFishComparisonFromDetail,
        onRigSelect: openRigDetailFromFish,
        onRegulationsSelect: openRegulationsFromFish
    });

    restoreFishDetailScroll();
    restoreFishDetailFocus(appMain);
}

// Compare workflow.
function openFishComparisonCatalog() {
    clearDetailNavigationStack();
    fishGuideState.scrollY = window.scrollY;
    fishComparisonCatalogScrollY = 0;
    fishComparisonCatalogFocusRelationshipId = null;
    showView(ROUTES.FISH_COMPARE_CATALOG);
}

function returnFromFishComparisonCatalogToGuide() {
    fishGuideRestoreCompareFocus = true;
    showView(ROUTES.FISH);
}

function getFishComparisonMedia(relationshipId) {
    if (typeof MEDIA_DATA === "undefined") return [];
    return MEDIA_DATA.filter((media) =>
        media.ownerType === "fish-identification" &&
        media.ownerId === relationshipId &&
        media.role === "comparison" &&
        media.isActive === true
    );
}

function buildFishComparisonContext(relationship, preferredFirstFishId = null) {
    if (!relationship || !Array.isArray(relationship.fishIds) || relationship.fishIds.length !== 2) return null;

    let [fishAId, fishBId] = relationship.fishIds;
    if (preferredFirstFishId === fishBId) {
        [fishAId, fishBId] = [fishBId, fishAId];
    }

    const activeFish = getActiveFish();
    const fishA = findRecordById(activeFish, fishAId);
    const fishB = findRecordById(activeFish, fishBId);
    if (!fishA || !fishB) return null;

    return {
        relationship,
        fishA,
        fishB,
        mediaA: getFishPrimaryMedia(fishA.id),
        mediaB: getFishPrimaryMedia(fishB.id),
        comparisonMedia: getFishComparisonMedia(relationship.id)
    };
}

function getFishComparisonContexts() {
    return getActiveFishRelationships()
        .map((relationship) => buildFishComparisonContext(relationship))
        .filter(Boolean);
}

function getFishComparisonCatalogGroups() {
    const comparisons = getFishComparisonContexts();
    return FISH_CATEGORY_DATA.map((category) => {
        const categoryComparisons = comparisons
            .filter((comparison) =>
                getFishCategoryId(comparison.fishA) === category.id &&
                getFishCategoryId(comparison.fishB) === category.id
            )
            .sort((first, second) => {
                const firstFishOrder = first.fishA.name.localeCompare(second.fishA.name, undefined, { sensitivity: "base" });
                if (firstFishOrder !== 0) return firstFishOrder;
                return first.fishB.name.localeCompare(second.fishB.name, undefined, { sensitivity: "base" });
            });

        return {
            category,
            title: `${category.name} Comparisons`,
            comparisons: categoryComparisons
        };
    }).filter((group) => group.comparisons.length > 0);
}

function renderFishComparisonCatalogView(appMain) {
    renderFishComparisonCatalog(appMain, {
        groups: getFishComparisonCatalogGroups(),
        parentLabel: "Fish Guide",
        onParent: returnFromFishComparisonCatalogToGuide,
        onSelect: openFishComparisonFromCatalog
    });
    restoreFishScroll(fishComparisonCatalogScrollY);
    const focusRelationshipId = fishComparisonCatalogFocusRelationshipId;
    fishComparisonCatalogFocusRelationshipId = null;
    restoreFishComparisonCardFocus(appMain, "[data-fish-relationship-id]", focusRelationshipId);
}

function openFishComparisonFromCatalog(relationshipId) {
    const relationship = getActiveFishRelationships().find((item) => item.id === relationshipId);
    if (!relationship) {
        console.warn(`Fish comparison was not found: ${relationshipId}`);
        return;
    }

    clearDetailNavigationStack();
    fishComparisonCatalogScrollY = window.scrollY;
    pushDetailNavigationContext({
        route: ROUTES.FISH_COMPARE_CATALOG,
        label: "Compare Similar Fish",
        state: {
            scrollY: fishComparisonCatalogScrollY,
            focusRelationshipId: relationship.id
        }
    });
    selectedFishRelationshipId = relationshipId;
    showView(ROUTES.FISH_COMPARE);
}

function openFishComparisonFromDetail() {
    const fish = findRecordById(getActiveFish(), selectedFishId);
    const relationships = fish ? getFishRelationshipsForFish(fish.id) : [];
    if (!fish || relationships.length === 0) return;

    pushDetailNavigationContext({
        route: ROUTES.FISH_DETAIL,
        label: fish.name,
        state: captureFishDetailNavigationState("compare")
    });

    if (relationships.length === 1) {
        selectedFishRelationshipId = relationships[0].id;
        showView(ROUTES.FISH_COMPARE);
        return;
    }

    fishComparisonChooserFocusRelationshipId = null;
    showView(ROUTES.FISH_COMPARE_CHOOSER);
}

function renderFishComparisonChooserView(appMain) {
    const fish = findRecordById(getActiveFish(), selectedFishId);
    const returnContext = peekDetailNavigationContext();
    if (!fish) {
        if (returnContext && returnToDetailNavigationContext()) return;
        showView(ROUTES.FISH);
        return;
    }

    const comparisons = getFishRelationshipContexts(fish.id)
        .slice()
        .sort((first, second) => first.relatedFish.name.localeCompare(second.relatedFish.name, undefined, { sensitivity: "base" }));

    renderFishComparisonChooser(appMain, {
        currentFish: fish,
        comparisons,
        parentLabel: returnContext?.label ?? fish.name,
        onParent: returnContext ? returnToDetailNavigationContext : () => showView(ROUTES.FISH_DETAIL),
        onSelect: openFishComparisonFromChooser
    });

    const focusRelationshipId = fishComparisonChooserFocusRelationshipId;
    fishComparisonChooserFocusRelationshipId = null;
    restoreFishComparisonCardFocus(appMain, "[data-fish-comparison-choice]", focusRelationshipId);
}

function openFishComparisonFromChooser(relationshipId) {
    const fish = findRecordById(getActiveFish(), selectedFishId);
    const relationship = getActiveFishRelationships().find((item) => item.id === relationshipId);
    if (!fish || !relationship || !relationship.fishIds.includes(fish.id)) {
        console.warn(`Fish comparison could not be opened from the chooser: ${relationshipId}`);
        return;
    }

    pushDetailNavigationContext({
        route: ROUTES.FISH_COMPARE_CHOOSER,
        label: `Compare ${fish.name}`,
        state: {
            selectedFishId: fish.id,
            focusRelationshipId: relationship.id
        }
    });
    selectedFishRelationshipId = relationship.id;
    showView(ROUTES.FISH_COMPARE);
}

function getFishComparisonOriginFishId(returnContext) {
    if (returnContext?.route === ROUTES.FISH_DETAIL || returnContext?.route === ROUTES.FISH_COMPARE_CHOOSER) {
        return returnContext.state?.selectedFishId ?? null;
    }
    return null;
}

function renderFishComparisonView(appMain) {
    const relationship = getActiveFishRelationships().find((item) => item.id === selectedFishRelationshipId);
    const returnContext = peekDetailNavigationContext();
    if (!relationship) {
        console.warn(`Fish comparison was not found: ${selectedFishRelationshipId}`);
        if (returnContext && returnToDetailNavigationContext()) return;
        showView(ROUTES.FISH_COMPARE_CATALOG);
        return;
    }

    const comparison = buildFishComparisonContext(relationship, getFishComparisonOriginFishId(returnContext));
    if (!comparison) {
        console.warn(`Fish comparison participants are unavailable: ${relationship.id}`);
        if (returnContext && returnToDetailNavigationContext()) return;
        showView(ROUTES.FISH_COMPARE_CATALOG);
        return;
    }

    renderFishComparison(appMain, {
        ...comparison,
        parentLabel: returnContext?.label ?? "Compare Similar Fish",
        onParent: returnContext ? returnToDetailNavigationContext : () => showView(ROUTES.FISH_COMPARE_CATALOG),
        onFishSelect: openFishDetailFromComparison
    });

    const focusFishId = fishComparisonFocusFishId;
    fishComparisonFocusFishId = null;
    restoreFishFocus(appMain, focusFishId ? `[data-fish-detail-id="${focusFishId}"]` : null);
}

function openFishDetailFromComparison(fishId) {
    const fish = findRecordById(getActiveFish(), fishId);
    const relationship = getActiveFishRelationships().find((item) => item.id === selectedFishRelationshipId);
    const returnContext = peekDetailNavigationContext();
    const comparison = buildFishComparisonContext(relationship, getFishComparisonOriginFishId(returnContext));
    if (!fish || !relationship || !comparison || !relationship.fishIds.includes(fish.id)) {
        console.warn(`Fish comparison participant could not be opened: ${fishId}`);
        return;
    }

    pushDetailNavigationContext({
        route: ROUTES.FISH_COMPARE,
        label: `${comparison.fishA.name} vs ${comparison.fishB.name}`,
        state: {
            selectedFishRelationshipId: relationship.id,
            focusFishId: fish.id
        }
    });
    selectedFishId = fish.id;
    resetFishDetailState(fish.id);
    showView(ROUTES.FISH_DETAIL);
}

function openRegulationsFromFish() {
    const fish = findRecordById(getActiveFish(), selectedFishId);
    if (!fish) return;

    pushDetailNavigationContext({
        route: ROUTES.FISH_DETAIL,
        label: fish.name,
        state: captureFishDetailNavigationState()
    });
    showView(ROUTES.REGULATIONS);
}

// Cross-guide handoff initiated from Fish detail.
function openRigDetailFromFish(rigId, lureBaitId = null) {
    const fish = findRecordById(getActiveFish(), selectedFishId);
    const rig = findRecordById(RIG_DATA, rigId);
    if (!fish || !rig || rig.isActive !== true) {
        console.warn(`Related Fish or Rig could not be opened: ${rigId}`);
        return;
    }

    pushDetailNavigationContext({
        route: ROUTES.FISH_DETAIL,
        label: fish.name,
        state: captureFishDetailNavigationState()
    });
    selectedRigId = rig.id;
    selectedRigCollectionKey = "all";
    selectedRigConfigurationId = lureBaitId;
    showView(ROUTES.RIG_DETAIL);
}

/* ==========================================================
   END FISH GUIDE
   ========================================================== */

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
            { id: "browse-all-rigs", title: "All Rigs", description: "Browse every Rig in the guide.", isAvailable: true },
            { id: "browse-core-rigs", title: "Core Rigs", description: "Six curated setups that form a broadly useful fishing toolkit.", isAvailable: true },
            { id: "browse-beginner-rigs", title: "Beginner", description: "Seven simple rigs with forgiving assembly and broad usefulness.", isAvailable: true },
            { id: "browse-beginner-plus-rigs", title: "Beginner+", description: "Five approachable rigs that require a little more setup precision.", isAvailable: true },
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
            <span class="search-result-card__action">View instructions <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></span>
        </button>
    `;
}

function getRigSearchRecord(rig) {
    return {
        ...rig,
        configurationNames: Array.isArray(rig.configurations)
            ? rig.configurations.map((configuration) => configuration.name)
            : []
    };
}

function updateRigGuideSearchResults(appMain, query) {
    const activeRigs = RIG_DATA.filter((rig) => rig.isActive).map(getRigSearchRecord);
    const matches = searchRecords(
        activeRigs,
        query,
        ["name", "difficulty", "useCases", "conditionTags", "configurationNames"]
    );

    renderSearchResults(appMain, matches, {
        emptyMessage: "No rigs matched your search.",
        renderRecord: renderRigSearchResultCard,
        onResultSelect: (rigId) => openRigDetail(rigId, "guide")
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
        return sortRecordsAlphabetically(
            activeRigs.filter((rig) => CORE_RIG_IDS.includes(rig.id))
        );
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
    return sortRecordsAlphabetically(records);
}

function openRigDetail(rigId, collectionKey = selectedRigCollectionKey) {
    clearDetailNavigationStack();
    selectedRigId = rigId;
    selectedRigCollectionKey = collectionKey;
    selectedRigConfigurationId = null;
    showView(ROUTES.RIG_DETAIL);
}

function openRigDetailFromKnot(rigId) {
    const rig = findRecordById(RIG_DATA, rigId);
    const knot = findRecordById(KNOT_DATA, selectedKnotId);
    if (!rig || rig.isActive !== true || !knot || knot.isActive !== true) {
        console.warn(`Related Rig or Knot could not be opened: ${rigId}`);
        return;
    }

    pushDetailNavigationContext({
        route: ROUTES.KNOT_DETAIL,
        label: knot.name,
        state: captureKnotDetailNavigationState(`rig:${rigId}`)
    });

    selectedRigId = rigId;
    selectedRigCollectionKey = "all";
    selectedRigConfigurationId = null;
    showView(ROUTES.RIG_DETAIL);
}

function openRigDetailFromComponentReference(rigId) {
    const currentRig = findRecordById(RIG_DATA, selectedRigId);
    const nextRig = findRecordById(RIG_DATA, rigId);
    if (!currentRig || currentRig.isActive !== true || !nextRig || nextRig.isActive !== true) {
        console.warn(`Related Rig could not be opened: ${rigId}`);
        return;
    }

    if (currentRig.id === nextRig.id) return;

    pushDetailNavigationContext({
        route: ROUTES.RIG_DETAIL,
        label: currentRig.name,
        state: {
            selectedRigId,
            selectedRigCollectionKey
        }
    });

    selectedRigId = nextRig.id;
    selectedRigCollectionKey = "all";
    selectedRigConfigurationId = null;
    showView(ROUTES.RIG_DETAIL);
}

function openKnotDetailFromRig(knotId) {
    const rig = findRecordById(RIG_DATA, selectedRigId);
    const knot = findRecordById(KNOT_DATA, knotId);
    if (!rig || rig.isActive !== true || !knot || knot.isActive !== true) {
        console.warn(`Related Knot or Rig could not be opened: ${knotId}`);
        return;
    }

    pushDetailNavigationContext({
        route: ROUTES.RIG_DETAIL,
        label: rig.name,
        state: {
            selectedRigId,
            selectedRigCollectionKey
        }
    });

    selectedKnotId = knotId;
    selectedKnotDetailSource = "related-rig";
    resetKnotDetailState(knotId);
    showView(ROUTES.KNOT_DETAIL);
}

function renderRigBrowseView(appMain) {
    const collection = getRigCollectionConfig();
    renderSearchView(appMain, {
        headingId: "rig-browse-title",
        inputId: "rig-search-input",
        title: collection.title,
        description: collection.description,
        label: `Search within ${collection.title}`,
        placeholder: `Search ${collection.title}`,
        parentLabel: "Rig Guide",
        onParent: () => showView(ROUTES.RIGS),
        onSearch: (query) => updateRigBrowseResults(appMain, query)
    });
}

function updateRigBrowseResults(appMain, query) {
    const activeRigs = RIG_DATA.filter((rig) => rig.isActive);
    const collectionRigs = getRigsForCollection(activeRigs).map(getRigSearchRecord);
    const matches = searchRecords(
        collectionRigs,
        query,
        ["name", "difficulty", "useCases", "conditionTags", "configurationNames"]
    );
    const resultRecords = normalizeSearchText(query)
        ? matches
        : sortRigCollection(matches);

    renderSearchResults(appMain, resultRecords, {
        emptyMessage: "No rigs matched your search.",
        renderRecord: renderRigSearchResultCard,
        onResultSelect: (rigId) => openRigDetail(rigId, selectedRigCollectionKey)
    });
}

function renderRigDetailView(appMain) {
    const rig = findRecordById(RIG_DATA, selectedRigId);
    const fromGuideSearch = selectedRigCollectionKey === "guide";
    const returnContext = peekDetailNavigationContext();
    const hasConnectedReturn = [ROUTES.KNOT_DETAIL, ROUTES.FISH_DETAIL, ROUTES.RIG_DETAIL].includes(returnContext?.route);
    if (!rig) {
        console.warn(`Rig was not found: ${selectedRigId}`);
        if (hasConnectedReturn && returnToDetailNavigationContext()) return;
        showView(fromGuideSearch ? ROUTES.RIGS : ROUTES.RIG_BROWSE);
        return;
    }

    const collection = getRigCollectionConfig();
    renderInstructionDetail(appMain, {
        record: rig,
        parentLabel: hasConnectedReturn
            ? returnContext.label
            : (fromGuideSearch ? "Rig Guide" : collection.title),
        selections: getRigReadinessSelections(rig.id),
        selectedConfigurationId: selectedRigConfigurationId,
        onConfigurationChange: (configurationId) => { selectedRigConfigurationId = configurationId; },
        onParent: hasConnectedReturn
            ? returnToDetailNavigationContext
            : () => showView(fromGuideSearch ? ROUTES.RIGS : ROUTES.RIG_BROWSE),
        onKnotSelect: openKnotDetailFromRig,
        onRigSelect: openRigDetailFromComponentReference,
        onReadinessChange: (selectionId, isOwned) =>
            updateRigReadinessSelection(rig.id, selectionId, isOwned)
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

function updateRigReadinessSelection(rigId, selectionId, isOwned) {
    const state = getReadinessState();
    const rigState = state[rigId] && typeof state[rigId] === "object" ? state[rigId] : {};
    rigState[selectionId] = isOwned;
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
   KNOTS GUIDE — GET YOUR REEL READY STATE + CONTROLLERS
   ========================================================== */

function createInitialReelSetupState() {
    return {
        stepId: REEL_SETUP_STEP_IDS.START,
        entryMode: null,
        reelType: null,
        lineType: null,
        targetFish: null,
        lineWeight: null,
        backingChoice: null,
        spoolStageId: null,
        scrollY: 0,
        restoreScroll: false,
        restoreFocusActionId: null
    };
}

function resetReelSetupState() {
    reelSetupState = createInitialReelSetupState();
}

function openReelSetup() {
    resetReelSetupState();
    showView(ROUTES.REEL_SETUP);
}

function getReelSetupOption(options, optionId) {
    return Array.isArray(options) ? options.find((option) => option.id === optionId) ?? null : null;
}

function getReelLineType(lineTypeId) {
    return REEL_LINE_TYPE_GUIDANCE[lineTypeId] ?? null;
}

function getCanonicalFishCategory(categoryId) {
    if (!categoryId || typeof FISH_CATEGORY_DATA === "undefined") return null;
    return FISH_CATEGORY_DATA.find((category) => category.id === categoryId) ?? null;
}

function getReelSetupTargetFish(targetFishId) {
    return REEL_TARGET_FISH_PROFILES.find((profile) => profile.id === targetFishId) ?? null;
}

function getReelSetupTargetLabel(profile) {
    if (!profile) return "";
    if (profile.title) return profile.title;
    return getCanonicalFishCategory(profile.categoryId)?.name ?? profile.id;
}

function getOrderedReelTargetProfiles() {
    const allAround = REEL_TARGET_FISH_PROFILES.find((profile) => profile.id === "all-around-freshwater");
    const profilesByCategoryId = new Map(
        REEL_TARGET_FISH_PROFILES
            .filter((profile) => profile.categoryId)
            .map((profile) => [profile.categoryId, profile])
    );
    const orderedCategoryProfiles = typeof FISH_CATEGORY_DATA === "undefined"
        ? REEL_TARGET_FISH_PROFILES.filter((profile) => profile.categoryId)
        : FISH_CATEGORY_DATA.map((category) => profilesByCategoryId.get(category.id)).filter(Boolean);
    return [allAround, ...orderedCategoryProfiles].filter(Boolean);
}

function getReelBackingChoice(backingChoiceId) {
    return REEL_BACKING_CHOICES[backingChoiceId] ?? null;
}

function getReelSpoolingGuidance(reelTypeId) {
    return REEL_SPOOLING_GUIDANCE[reelTypeId] ?? null;
}

function getReelSetupPhaseId(stepId) {
    if (stepId === REEL_SETUP_STEP_IDS.START || stepId === REEL_SETUP_STEP_IDS.REEL_TYPE) return "reel";
    if ([REEL_SETUP_STEP_IDS.LINE_TYPE, REEL_SETUP_STEP_IDS.TARGET_FISH, REEL_SETUP_STEP_IDS.LINE_WEIGHT].includes(stepId)) return "line";
    if (stepId === REEL_SETUP_STEP_IDS.EQUIPMENT) return "equipment";
    if ([REEL_SETUP_STEP_IDS.BACKING_DECISION, REEL_SETUP_STEP_IDS.SPOOL].includes(stepId)) return "spool";
    if (stepId === REEL_SETUP_STEP_IDS.READY) return "ready";
    return "reel";
}

function getReelSetupPhaseIndex() {
    const phaseId = getReelSetupPhaseId(reelSetupState.stepId);
    return Math.max(0, REEL_SETUP_PHASES.findIndex((phase) => phase.id === phaseId));
}

function renderReelSetupView(appMain) {
    const renderers = {
        [REEL_SETUP_STEP_IDS.START]: renderReelSetupStartStep,
        [REEL_SETUP_STEP_IDS.REEL_TYPE]: renderReelSetupReelTypeStep,
        [REEL_SETUP_STEP_IDS.LINE_TYPE]: renderReelSetupLineTypeStep,
        [REEL_SETUP_STEP_IDS.TARGET_FISH]: renderReelSetupTargetFishStep,
        [REEL_SETUP_STEP_IDS.LINE_WEIGHT]: renderReelSetupLineWeightStep,
        [REEL_SETUP_STEP_IDS.EQUIPMENT]: renderReelSetupEquipmentStep,
        [REEL_SETUP_STEP_IDS.BACKING_DECISION]: renderReelSetupBackingDecisionStep,
        [REEL_SETUP_STEP_IDS.SPOOL]: renderReelSetupSpoolStep,
        [REEL_SETUP_STEP_IDS.READY]: renderReelSetupReadyStep
    };
    const renderer = renderers[reelSetupState.stepId] ?? renderReelSetupStartStep;
    renderer(appMain);
    restoreReelSetupNavigationContext(appMain);
}

function getReelSetupSelectedChoiceLabels() {
    const entryOption = getReelSetupOption(REEL_SETUP_ENTRY_OPTIONS, reelSetupState.entryMode);
    const reelType = getReelSetupOption(REEL_TYPE_OPTIONS, reelSetupState.reelType);
    const lineType = getReelLineType(reelSetupState.lineType);
    const targetProfile = getReelSetupTargetFish(reelSetupState.targetFish);
    const backingChoice = getReelBackingChoice(reelSetupState.backingChoice);
    const labels = [];

    if (entryOption) labels.push({ label: "Setup", value: entryOption.title });
    if (reelType) labels.push({ label: "Reel", value: reelType.title });
    if (lineType) {
        const lineValue = reelSetupState.lineWeight
            ? `${reelSetupState.lineWeight} lb ${lineType.title}`
            : lineType.title;
        labels.push({ label: "Line", value: lineValue });
    }
    if (targetProfile) labels.push({ label: "Target", value: getReelSetupTargetLabel(targetProfile) });
    if (lineType?.id === "braid" && backingChoice) {
        labels.push({ label: "Backing", value: backingChoice.title.replace(" — Recommended First Setup", "") });
    }
    return labels;
}

function renderReelSetupStatus(appMain) {
    const firstGrid = appMain.querySelector("[data-view-card-grid]");
    if (!firstGrid || reelSetupState.stepId === REEL_SETUP_STEP_IDS.START) return;

    const labels = getReelSetupSelectedChoiceLabels();
    const phaseIndex = getReelSetupPhaseIndex();
    const currentPhase = REEL_SETUP_PHASES[phaseIndex];
    const status = document.createElement("section");
    status.className = "reel-setup-status";
    status.dataset.reelSetupStatus = "true";
    status.setAttribute("aria-label", "Reel Setup status");

    const selectedValues = labels.length
        ? labels.map((item) => item.value).join(" · ")
        : "No choices selected yet.";
    const progressSegments = REEL_SETUP_PHASES.map((phase, index) => {
        const state = index < phaseIndex ? "completed" : index === phaseIndex ? "current" : "upcoming";
        return `<span class="reel-setup-progress-strip__segment is-${state}" title="${phase.title}"></span>`;
    }).join("");

    status.innerHTML = `
        <div class="reel-setup-selected">
            <h3>Selected Choices</h3>
            <p class="reel-setup-selected__summary">${selectedValues}</p>
        </div>
        <div class="reel-setup-progress-region" data-reel-progress-region>
            <div class="reel-setup-progress-strip">
                <div class="reel-setup-progress-strip__text">
                    <span class="reel-setup-progress-strip__eyebrow">Setup Progress</span>
                    <span class="reel-setup-progress-strip__phase" aria-current="step">Phase ${phaseIndex + 1} of ${REEL_SETUP_PHASES.length} · ${currentPhase.title}</span>
                </div>
                <div class="reel-setup-progress-strip__segments" aria-hidden="true">${progressSegments}</div>
            </div>
        </div>
    `;

    firstGrid.parentNode.insertBefore(status, firstGrid);
}

function getReelSetupPreviousDestination() {
    if (reelSetupState.stepId === REEL_SETUP_STEP_IDS.SPOOL) {
        const stages = getActiveReelSpoolStages();
        const stageIndex = stages.findIndex((stage) => stage.id === reelSetupState.spoolStageId);
        if (stageIndex > 0) return { spoolStageId: stages[stageIndex - 1].id, label: stages[stageIndex - 1].title };
        return reelSetupState.lineType === "braid"
            ? { stepId: REEL_SETUP_STEP_IDS.BACKING_DECISION, label: "Backing" }
            : { stepId: REEL_SETUP_STEP_IDS.EQUIPMENT, label: "Equipment" };
    }
    if (reelSetupState.stepId === REEL_SETUP_STEP_IDS.READY) {
        const stages = getActiveReelSpoolStages();
        return { stepId: REEL_SETUP_STEP_IDS.SPOOL, spoolStageId: stages.at(-1)?.id ?? null, label: "Spool" };
    }

    const previousSteps = {
        [REEL_SETUP_STEP_IDS.REEL_TYPE]: { stepId: REEL_SETUP_STEP_IDS.START, label: "Get Your Reel Ready" },
        [REEL_SETUP_STEP_IDS.LINE_TYPE]: { stepId: REEL_SETUP_STEP_IDS.REEL_TYPE, label: "Reel Type" },
        [REEL_SETUP_STEP_IDS.TARGET_FISH]: { stepId: REEL_SETUP_STEP_IDS.LINE_TYPE, label: "Line Type" },
        [REEL_SETUP_STEP_IDS.LINE_WEIGHT]: { stepId: REEL_SETUP_STEP_IDS.TARGET_FISH, label: "Target" },
        [REEL_SETUP_STEP_IDS.EQUIPMENT]: { stepId: REEL_SETUP_STEP_IDS.LINE_WEIGHT, label: "Line Weight" },
        [REEL_SETUP_STEP_IDS.BACKING_DECISION]: { stepId: REEL_SETUP_STEP_IDS.EQUIPMENT, label: "Equipment" }
    };
    return previousSteps[reelSetupState.stepId] ?? null;
}

function renderReelSetupNavigation(appMain) {
    const genericNavigationGroup = appMain.querySelector(".page-navigation-group");
    if (!genericNavigationGroup) return;

    const navigation = document.createElement("div");
    navigation.className = "page-navigation-group reel-setup-navigation";
    navigation.dataset.reelSetupNavigation = "true";

    const previous = getReelSetupPreviousDestination();
    const backButton = document.createElement("button");
    backButton.type = "button";
    backButton.className = "page-navigation";
    const backLabel = previous?.label ?? "Knots Guide";
    if (backLabel.length > 22) backButton.classList.add("page-navigation--long-label");
    backButton.innerHTML = '<span class="link-arrow link-arrow--back" aria-hidden="true">←</span> ' + backLabel;
    backButton.addEventListener("click", () => {
        if (!previous) {
            resetReelSetupState();
            showView(ROUTES.KNOTS);
            return;
        }
        if (previous.spoolStageId) reelSetupState.spoolStageId = previous.spoolStageId;
        if (previous.stepId) reelSetupState.stepId = previous.stepId;
        showView(ROUTES.REEL_SETUP);
    });

    const homeButton = document.createElement("button");
    homeButton.type = "button";
    homeButton.className = "page-navigation";
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", () => {
        resetReelSetupState();
        clearDetailNavigationStack();
        showView(ROUTES.DASHBOARD);
    });

    navigation.append(backButton, homeButton);
    genericNavigationGroup.replaceWith(navigation);
}

function applyReelSetupChoiceTreatment(appMain, cards) {
    const renderedCards = Array.from(appMain.querySelectorAll("[data-view-card-grid] > .dashboard-card"));
    cards.forEach((card, index) => {
        const element = renderedCards[index];
        if (!element) return;
        element.classList.add("reel-choice-card");
        if (card.recommendedFirstSetup) {
            element.classList.add("reel-choice-card--recommended");
            const cue = document.createElement("span");
            cue.className = "reel-choice-card__recommendation";
            cue.textContent = "Recommended First Setup";
            const title = element.querySelector(".dashboard-card__title");
            if (title) title.insertAdjacentElement("afterend", cue);
            else element.prepend(cue);
        }
    });
}

function renderReelSetupUtilityActions(appMain, { ready = false } = {}) {
    const contentView = appMain.querySelector(".content-view");
    if (!contentView) return;

    const utilities = document.createElement("div");
    utilities.className = "reel-setup-utilities";
    utilities.dataset.reelSetupUtilities = "true";

    if (reelSetupState.stepId !== REEL_SETUP_STEP_IDS.START) {
        const restart = document.createElement("button");
        restart.type = "button";
        restart.className = "reel-setup-utility-button";
        restart.textContent = "Restart Setup";
        restart.addEventListener("click", () => {
            resetReelSetupState();
            showView(ROUTES.REEL_SETUP);
        });
        utilities.append(restart);
    }

    const exit = document.createElement("button");
    exit.type = "button";
    exit.className = "reel-setup-utility-button";
    exit.textContent = ready ? "Done — Knots Guide" : "Exit to Knots";
    exit.addEventListener("click", () => {
        resetReelSetupState();
        clearDetailNavigationStack();
        showView(ROUTES.KNOTS);
    });
    utilities.append(exit);
    if (utilities.children.length === 1) utilities.classList.add("reel-setup-utilities--single");
    contentView.append(utilities);
}

function renderReelSetupPrimaryAction(appMain, config) {
    if (!config?.label || typeof config.onClick !== "function") return null;
    const contentView = appMain.querySelector(".content-view");
    const utilities = appMain.querySelector("[data-reel-setup-utilities]");
    if (!contentView) return null;

    const action = document.createElement("button");
    action.type = "button";
    action.className = "reel-setup-primary-action";
    action.dataset.reelSetupPrimaryAction = "true";
    action.disabled = config.disabled === true;
    action.innerHTML = `${config.label} <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span>`;
    action.addEventListener("click", config.onClick);
    contentView.insertBefore(action, utilities ?? null);
    return action;
}

function renderReelSetupStep(appMain, config) {
    const cards = Array.isArray(config.cards) ? config.cards : [];
    renderView(appMain, {
        headingId: config.headingId ?? "reel-setup-title",
        title: config.title,
        description: config.description,
        cards,
        onCardSelect: config.onCardSelect
    });
    renderReelSetupNavigation(appMain);
    renderReelSetupStatus(appMain);
    applyReelSetupChoiceTreatment(appMain, cards);
    renderReelSetupUtilityActions(appMain, { ready: config.ready === true });
}

function appendReelSetupGuidanceText(listItem, item) {
    const text = typeof item === "string" ? item : item?.text;
    const emphasis = Array.isArray(item?.emphasis) ? item.emphasis : [];
    if (!text) return;

    let cursor = 0;
    emphasis.forEach((phrase) => {
        const phraseIndex = text.indexOf(phrase, cursor);
        if (phraseIndex < 0) return;
        if (phraseIndex > cursor) listItem.append(document.createTextNode(text.slice(cursor, phraseIndex)));
        const strong = document.createElement("strong");
        strong.textContent = phrase;
        listItem.append(strong);
        cursor = phraseIndex + phrase.length;
    });
    if (cursor < text.length) listItem.append(document.createTextNode(text.slice(cursor)));
}

function renderReelSetupGuidanceList(appMain, guidance, options = {}) {
    const cardGrid = appMain.querySelector("[data-view-card-grid]");
    if (!cardGrid || !guidance || !Array.isArray(guidance.items)) return null;

    const section = document.createElement("section");
    section.className = `reel-setup-guidance${options.className ? ` ${options.className}` : ""}`;
    section.dataset.reelSetupGuidance = "true";
    const heading = document.createElement("h3");
    heading.textContent = guidance.title;
    const summary = document.createElement("p");
    summary.className = "reel-setup-guidance__summary";
    summary.textContent = guidance.summary;
    const list = document.createElement("ul");
    list.className = "detail-list";
    guidance.items.forEach((item) => {
        const listItem = document.createElement("li");
        appendReelSetupGuidanceText(listItem, item);
        list.append(listItem);
    });
    section.append(heading, summary, list);
    cardGrid.parentNode.insertBefore(section, cardGrid);
    return section;
}

function renderReelSetupReferencePrompt(appMain, label, onOpen) {
    const cardGrid = appMain.querySelector("[data-view-card-grid]");
    if (!cardGrid || typeof onOpen !== "function") return;
    const prompt = document.createElement("div");
    prompt.className = "reel-setup-reference-prompt";
    prompt.innerHTML = `<span class="reel-setup-reference-prompt__label">${label}</span><button class="reference-info-button reel-setup-reference-prompt__button" type="button" aria-label="Open ${label} reference"><span aria-hidden="true">ⓘ</span></button>`;
    prompt.querySelector("button")?.addEventListener("click", (event) => onOpen(event.currentTarget));
    cardGrid.parentNode.insertBefore(prompt, cardGrid);
}

function openReelTypeReference(triggerElement) {
    const pages = REEL_TYPE_OPTIONS.map((option) => ({
        id: option.id,
        title: option.title,
        summary: option.description,
        items: option.recognitionTraits
    }));
    renderPagedReferencePopover({
        eyebrow: "Reel Identification",
        pages,
        initialPageId: reelSetupState.reelType ?? "spinning",
        triggerElement
    });
}

function openReelLineTypeReference(triggerElement) {
    const pages = Object.values(REEL_LINE_TYPE_GUIDANCE).map((lineType) => ({
        id: lineType.id,
        title: lineType.title,
        summary: lineType.selectionDescription,
        sections: [
            { title: "How to Recognize It", text: lineType.identificationCue },
            { title: "Beginner Guidance", text: lineType.beginnerGuidance },
            { title: "Tradeoff", text: lineType.tradeoff }
        ]
    }));
    renderPagedReferencePopover({
        eyebrow: "Fishing Line",
        pages,
        initialPageId: reelSetupState.lineType ?? "monofilament",
        triggerElement
    });
}

function openReelEquipmentReference(triggerElement) {
    const pages = Object.values(REEL_EQUIPMENT_GUIDANCE).map((guidance) => ({
        id: guidance.id,
        title: guidance.title,
        summary: guidance.summary,
        items: guidance.items,
        visualType: guidance.id === "reel" ? "reel-capacity-diagram" : null
    }));
    renderPagedReferencePopover({
        eyebrow: "Equipment Reference",
        pages,
        initialPageId: "reel",
        triggerElement
    });
}

function openReelLeaderReference(triggerElement) {
    renderPagedReferencePopover({
        eyebrow: "Leader Reference",
        pages: [{
            id: "leader-reference",
            title: REEL_LEADER_REFERENCE_GUIDANCE.title,
            summary: REEL_LEADER_REFERENCE_GUIDANCE.summary,
            items: REEL_LEADER_REFERENCE_GUIDANCE.items
        }],
        initialPageId: "leader-reference",
        triggerElement
    });
}

function renderReelSetupStartStep(appMain) {
    const cards = REEL_SETUP_ENTRY_OPTIONS.map((option) => ({ ...option, isAvailable: true }));
    renderReelSetupStep(appMain, {
        title: "Get Your Reel Ready",
        description: "Build a beginner-friendly reel and line system step by step. Start by telling us whether this reel is empty or already has line you want to replace.",
        cards,
        onCardSelect: (entryMode) => {
            if (!getReelSetupOption(REEL_SETUP_ENTRY_OPTIONS, entryMode)) return;
            reelSetupState.entryMode = entryMode;
            reelSetupState.stepId = REEL_SETUP_STEP_IDS.REEL_TYPE;
            showView(ROUTES.REEL_SETUP);
        }
    });
}

function renderReelSetupReelTypeStep(appMain) {
    if (!getReelSetupOption(REEL_SETUP_ENTRY_OPTIONS, reelSetupState.entryMode)) {
        resetReelSetupState();
        renderReelSetupStartStep(appMain);
        return;
    }
    const cards = REEL_TYPE_OPTIONS.map((option) => ({ ...option, isAvailable: true }));
    renderReelSetupStep(appMain, {
        title: "Choose Your Reel Type",
        description: "Choose the reel that matches the equipment you actually have. Spinning is the recommended first freshwater setup when you are choosing new equipment.",
        cards,
        onCardSelect: (reelTypeId) => {
            if (!getReelSetupOption(REEL_TYPE_OPTIONS, reelTypeId)) return;
            reelSetupState = {
                ...reelSetupState,
                reelType: reelTypeId,
                lineType: null,
                targetFish: null,
                lineWeight: null,
                backingChoice: null,
                spoolStageId: null,
                stepId: REEL_SETUP_STEP_IDS.LINE_TYPE
            };
            showView(ROUTES.REEL_SETUP);
        }
    });
    renderReelSetupReferencePrompt(appMain, "Not sure which reel you have?", openReelTypeReference);
}

function renderReelSetupLineTypeStep(appMain) {
    const reelType = getReelSetupOption(REEL_TYPE_OPTIONS, reelSetupState.reelType);
    if (!reelType) {
        reelSetupState.stepId = REEL_SETUP_STEP_IDS.REEL_TYPE;
        renderReelSetupReelTypeStep(appMain);
        return;
    }
    const cards = Object.values(REEL_LINE_TYPE_GUIDANCE).map((option) => ({
        id: option.id,
        title: option.title,
        description: option.selectionDescription,
        isAvailable: true,
        recommendedFirstSetup: option.recommendedFirstSetup === true
    }));
    renderReelSetupStep(appMain, {
        title: "Choose Your Line Type",
        description: `Choose the line material you plan to spool on your ${reelType.title.toLowerCase()}. The actual pound-test is confirmed after you choose a target.`,
        cards,
        onCardSelect: (lineTypeId) => {
            if (!getReelLineType(lineTypeId)) return;
            reelSetupState = {
                ...reelSetupState,
                lineType: lineTypeId,
                targetFish: null,
                lineWeight: null,
                backingChoice: null,
                spoolStageId: null,
                stepId: REEL_SETUP_STEP_IDS.TARGET_FISH
            };
            showView(ROUTES.REEL_SETUP);
        }
    });
    renderReelSetupReferencePrompt(appMain, "Need help choosing or identifying your line?", openReelLineTypeReference);
}

function renderReelSetupTargetFishStep(appMain) {
    const lineType = getReelLineType(reelSetupState.lineType);
    if (!lineType) {
        reelSetupState.stepId = REEL_SETUP_STEP_IDS.LINE_TYPE;
        renderReelSetupLineTypeStep(appMain);
        return;
    }
    const profiles = getOrderedReelTargetProfiles();
    const cards = profiles.map((profile) => ({
        id: profile.id,
        title: getReelSetupTargetLabel(profile),
        description: profile.description,
        isAvailable: true
    }));
    renderReelSetupStep(appMain, {
        title: "What Are You Fishing For?",
        description: "Choose the closest beginner target. This sets the starting fishing-strength reference; it does not lock you into one universal line choice.",
        cards,
        onCardSelect: (targetFishId) => {
            if (!getReelSetupTargetFish(targetFishId)) return;
            reelSetupState.targetFish = targetFishId;
            reelSetupState.lineWeight = null;
            reelSetupState.backingChoice = null;
            reelSetupState.spoolStageId = null;
            reelSetupState.stepId = REEL_SETUP_STEP_IDS.LINE_WEIGHT;
            showView(ROUTES.REEL_SETUP);
        }
    });
}

function renderReelLineWeightPicker(appMain, targetProfile, lineType) {
    const cardGrid = appMain.querySelector("[data-view-card-grid]");
    if (!cardGrid) return;

    const exactRecommendation = lineType.id === "monofilament"
        ? targetProfile.monofilamentStartWeight ?? null
        : null;
    let selectedWeight = reelSetupState.lineWeight ?? exactRecommendation;
    let pickerDraftWeight = selectedWeight;
    let primaryAction = null;
    let wheelScrollFrame = null;

    const picker = document.createElement("section");
    picker.className = "reel-line-weight-picker";
    picker.setAttribute("aria-labelledby", "reel-line-weight-picker-title");
    picker.innerHTML = `
        <div class="reel-line-weight-picker__summary">
            <h3 id="reel-line-weight-picker-title">Choose Your Line Weight</h3>
            <p><strong>${getReelSetupTargetLabel(targetProfile)} reference:</strong> ${targetProfile.strengthReference}</p>
            <p>${targetProfile.guidance}</p>
            <p>${lineType.weightInterpretation}</p>
            ${targetProfile.lighterAlternativeWeight && lineType.id === "monofilament"
                ? `<p class="reel-line-weight-picker__note">Lighter all-around alternative: ${targetProfile.lighterAlternativeWeight} lb Monofilament.</p>`
                : ""}
        </div>
        <div class="reel-line-weight-picker__control">
            <span class="reel-line-weight-picker__label">Line Weight</span>
            <button class="reel-line-weight-picker-trigger" type="button" data-reel-line-weight-picker-trigger
                aria-haspopup="dialog" aria-expanded="false" aria-controls="reel-line-weight-dialog">
                <span data-reel-line-weight-trigger-label></span>
                <span class="reel-line-weight-picker-trigger__arrow" aria-hidden="true">⌄</span>
            </button>
        </div>
        <p class="reel-line-weight-picker__selection" data-reel-line-weight-selection aria-live="polite"></p>
        <div class="reel-line-weight-dialog" id="reel-line-weight-dialog" data-reel-line-weight-dialog hidden>
            <button class="reel-line-weight-dialog__backdrop" type="button" data-reel-line-weight-picker-cancel tabindex="-1" aria-label="Close line weight picker"></button>
            <section class="reel-line-weight-dialog__panel" role="dialog" aria-modal="true" aria-labelledby="reel-line-weight-dialog-title">
                <div class="reel-line-weight-dialog__header">
                    <h3 id="reel-line-weight-dialog-title">Select Line Weight</h3>
                    <button class="reel-line-weight-dialog__close" type="button" data-reel-line-weight-picker-cancel aria-label="Close line weight picker">×</button>
                </div>
                <div class="reel-line-weight-wheel-shell">
                    <div class="reel-line-weight-wheel" data-reel-line-weight-wheel role="listbox" tabindex="0" aria-label="Line weight in pounds"></div>
                    <div class="reel-line-weight-wheel-selection" aria-hidden="true"></div>
                </div>
                <div class="reel-line-weight-dialog__actions">
                    <button class="reel-line-weight-dialog__cancel" type="button" data-reel-line-weight-picker-cancel>Cancel</button>
                    <button class="reel-line-weight-dialog__done" type="button" data-reel-line-weight-picker-done>Done</button>
                </div>
            </section>
        </div>
    `;
    cardGrid.parentNode.insertBefore(picker, cardGrid);

    const trigger = picker.querySelector("[data-reel-line-weight-picker-trigger]");
    const triggerLabel = picker.querySelector("[data-reel-line-weight-trigger-label]");
    const dialog = picker.querySelector("[data-reel-line-weight-dialog]");
    const wheel = picker.querySelector("[data-reel-line-weight-wheel]");
    const doneButton = picker.querySelector("[data-reel-line-weight-picker-done]");
    const cancelButtons = picker.querySelectorAll("[data-reel-line-weight-picker-cancel]");
    const selection = picker.querySelector("[data-reel-line-weight-selection]");
    const values = [null, ...REEL_LINE_WEIGHT_OPTIONS];

    wheel.innerHTML = values.map((weight, index) => `
        <button class="reel-line-weight-wheel-option" id="reel-line-weight-${index}" type="button"
            role="option" aria-selected="false" tabindex="-1" data-reel-line-weight-option
            data-line-weight="${weight ?? ""}">${weight ? `${weight} lb` : "Choose pound-test"}</button>
    `).join("");

    const getOptionWeight = (option) => option?.dataset.lineWeight ? Number(option.dataset.lineWeight) : null;

    const setWheelDraft = (nextWeight, { scrollWheel = false, behavior = "auto" } = {}) => {
        pickerDraftWeight = Number.isFinite(nextWeight) ? nextWeight : null;
        let selectedOption = null;
        wheel.querySelectorAll("[data-reel-line-weight-option]").forEach((option) => {
            const isSelected = getOptionWeight(option) === pickerDraftWeight;
            option.classList.toggle("is-selected", isSelected);
            option.setAttribute("aria-selected", String(isSelected));
            if (isSelected) selectedOption = option;
        });
        if (selectedOption) {
            wheel.setAttribute("aria-activedescendant", selectedOption.id);
            if (scrollWheel) {
                const targetTop = selectedOption.offsetTop - ((wheel.clientHeight - selectedOption.offsetHeight) / 2);
                wheel.scrollTo({ top: targetTop, behavior });
            }
        }
        if (doneButton) doneButton.disabled = !pickerDraftWeight;
    };

    const updateSelectionUi = () => {
        if (triggerLabel) triggerLabel.textContent = selectedWeight ? `${selectedWeight} lb` : "Choose line weight";
        if (selection) {
            selection.textContent = selectedWeight
                ? `${selectedWeight} lb ${lineType.title} is selected. Open the picker only if you want to change it.`
                : "Choose the actual pound-test you intend to spool.";
        }
        if (primaryAction) {
            primaryAction.disabled = !selectedWeight;
            const labelNode = primaryAction.firstChild;
            if (labelNode) {
                labelNode.textContent = selectedWeight
                    ? `Continue with ${selectedWeight} lb ${lineType.title} `
                    : `Continue with ${lineType.title} `;
            }
        }
    };

    const closePicker = ({ commit = false } = {}) => {
        if (!dialog || dialog.hidden) return;
        if (commit && pickerDraftWeight) selectedWeight = pickerDraftWeight;
        dialog.hidden = true;
        document.body.classList.remove("reel-line-weight-picker-open");
        trigger?.setAttribute("aria-expanded", "false");
        updateSelectionUi();
        trigger?.focus({ preventScroll: true });
    };

    const openPicker = () => {
        if (!dialog || !wheel) return;
        dialog.hidden = false;
        document.body.classList.add("reel-line-weight-picker-open");
        trigger?.setAttribute("aria-expanded", "true");
        pickerDraftWeight = selectedWeight;
        requestAnimationFrame(() => {
            setWheelDraft(pickerDraftWeight, { scrollWheel: true });
            wheel.focus({ preventScroll: true });
        });
    };

    trigger?.addEventListener("click", openPicker);
    doneButton?.addEventListener("click", () => closePicker({ commit: true }));
    cancelButtons.forEach((button) => button.addEventListener("click", () => closePicker()));
    dialog?.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            event.preventDefault();
            closePicker();
        }
    });
    wheel?.addEventListener("click", (event) => {
        const option = event.target.closest("[data-reel-line-weight-option]");
        if (!option) return;
        setWheelDraft(getOptionWeight(option), { scrollWheel: true, behavior: "smooth" });
    });
    wheel?.addEventListener("keydown", (event) => {
        if (!["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) return;
        const options = Array.from(wheel.querySelectorAll("[data-reel-line-weight-option]"));
        if (options.length === 0) return;
        event.preventDefault();
        let currentIndex = options.findIndex((option) => getOptionWeight(option) === pickerDraftWeight);
        if (currentIndex < 0) currentIndex = 0;
        let nextIndex = currentIndex;
        if (event.key === "ArrowUp") nextIndex = Math.max(0, currentIndex - 1);
        if (event.key === "ArrowDown") nextIndex = Math.min(options.length - 1, currentIndex + 1);
        if (event.key === "Home") nextIndex = 0;
        if (event.key === "End") nextIndex = options.length - 1;
        setWheelDraft(getOptionWeight(options[nextIndex]), { scrollWheel: true, behavior: "smooth" });
    });
    wheel?.addEventListener("scroll", () => {
        if (wheelScrollFrame) cancelAnimationFrame(wheelScrollFrame);
        wheelScrollFrame = requestAnimationFrame(() => {
            const options = Array.from(wheel.querySelectorAll("[data-reel-line-weight-option]"));
            if (options.length === 0) return;
            const wheelBounds = wheel.getBoundingClientRect();
            const wheelCenter = wheelBounds.top + (wheelBounds.height / 2);
            const nearestOption = options.reduce((nearest, option) => {
                const bounds = option.getBoundingClientRect();
                const distance = Math.abs((bounds.top + (bounds.height / 2)) - wheelCenter);
                return !nearest || distance < nearest.distance ? { option, distance } : nearest;
            }, null)?.option;
            if (!nearestOption) return;
            const weight = getOptionWeight(nearestOption);
            if (weight !== pickerDraftWeight) setWheelDraft(weight);
        });
    }, { passive: true });

    primaryAction = renderReelSetupPrimaryAction(appMain, {
        label: selectedWeight ? `Continue with ${selectedWeight} lb ${lineType.title}` : `Continue with ${lineType.title}`,
        disabled: !selectedWeight,
        onClick: () => {
            if (!selectedWeight) return;
            reelSetupState.lineWeight = selectedWeight;
            reelSetupState.backingChoice = null;
            reelSetupState.spoolStageId = null;
            reelSetupState.stepId = REEL_SETUP_STEP_IDS.EQUIPMENT;
            showView(ROUTES.REEL_SETUP);
        }
    });
    updateSelectionUi();
}

function renderReelSetupLineWeightStep(appMain) {
    const lineType = getReelLineType(reelSetupState.lineType);
    const targetProfile = getReelSetupTargetFish(reelSetupState.targetFish);
    if (!lineType || !targetProfile) {
        reelSetupState.stepId = REEL_SETUP_STEP_IDS.TARGET_FISH;
        renderReelSetupTargetFishStep(appMain);
        return;
    }
    renderReelSetupStep(appMain, {
        title: "Confirm Line Weight",
        description: "Use the target strength reference as a starting point, then confirm the actual pound-test you intend to spool. FCC recommendations and your confirmed selection remain separate.",
        cards: [],
        onCardSelect: () => {}
    });
    renderReelLineWeightPicker(appMain, targetProfile, lineType);
}

function renderReelSetupEquipmentDiagramSummary(appMain, lineType, lineWeight) {
    const cardGrid = appMain.querySelector("[data-view-card-grid]");
    if (!cardGrid) return;
    const section = document.createElement("section");
    section.className = "reel-equipment-check";
    section.innerHTML = `
        <h3>Compare Your Equipment</h3>
        <p>Your confirmed line is <strong>${lineWeight} lb ${lineType.title}</strong>. Check the reel-capacity marking for the selected line type or diameter and check the rod's Line / Line Wt / Line Rating. Manufacturer guidance is the final authority.</p>
    `;
    cardGrid.parentNode.insertBefore(section, cardGrid);
}

function renderReelSetupInformationalWarning(appMain, message) {
    if (!message) return;
    const cardGrid = appMain.querySelector("[data-view-card-grid]");
    if (!cardGrid) return;
    const warning = document.createElement("aside");
    warning.className = "reel-setup-notice";
    warning.setAttribute("role", "note");
    warning.innerHTML = `<strong>Check Your Reel</strong><p>${message}</p>`;
    cardGrid.parentNode.insertBefore(warning, cardGrid);
}

function renderReelSetupEquipmentStep(appMain) {
    const reelType = getReelSetupOption(REEL_TYPE_OPTIONS, reelSetupState.reelType);
    const lineType = getReelLineType(reelSetupState.lineType);
    if (!reelType || !lineType || !reelSetupState.lineWeight) {
        reelSetupState.stepId = REEL_SETUP_STEP_IDS.LINE_WEIGHT;
        renderReelSetupLineWeightStep(appMain);
        return;
    }
    renderReelSetupStep(appMain, {
        title: "Check Your Reel & Rod Markings",
        description: "This step helps you read the equipment you own. FCC does not know your exact models and does not issue a compatibility PASS/FAIL verdict.",
        cards: [],
        onCardSelect: () => {}
    });
    renderReelSetupReferencePrompt(appMain, "How do I read my reel and rod?", openReelEquipmentReference);
    renderReelSetupEquipmentDiagramSummary(appMain, lineType, reelSetupState.lineWeight);
    renderReelSetupInformationalWarning(
        appMain,
        REEL_INFORMATIONAL_WARNINGS[reelType.id]?.[lineType.id] ?? null
    );
    renderReelSetupPrimaryAction(appMain, {
        label: lineType.id === "braid" ? "Continue to Backing" : "Continue to Spool",
        onClick: () => {
            reelSetupState.backingChoice = null;
            reelSetupState.spoolStageId = null;
            reelSetupState.stepId = lineType.id === "braid"
                ? REEL_SETUP_STEP_IDS.BACKING_DECISION
                : REEL_SETUP_STEP_IDS.SPOOL;
            showView(ROUTES.REEL_SETUP);
        }
    });
}

function renderReelSetupBackingDecisionStep(appMain) {
    const lineType = getReelLineType(reelSetupState.lineType);
    if (lineType?.id !== "braid") {
        reelSetupState.backingChoice = null;
        reelSetupState.stepId = REEL_SETUP_STEP_IDS.SPOOL;
        renderReelSetupSpoolStep(appMain);
        return;
    }
    const cards = Object.values(REEL_BACKING_CHOICES).map((choice) => ({
        ...choice,
        isAvailable: true
    }));
    renderReelSetupStep(appMain, {
        title: "Decide on Backing",
        description: "Braid can slip on some smooth spool arbors. Choose the beginner Monofilament-backing path unless the exact reel or spool explicitly supports a secure direct-Braid method.",
        cards,
        onCardSelect: (backingChoiceId) => {
            if (!getReelBackingChoice(backingChoiceId)) return;
            reelSetupState.backingChoice = backingChoiceId;
            reelSetupState.spoolStageId = null;
            reelSetupState.stepId = REEL_SETUP_STEP_IDS.SPOOL;
            showView(ROUTES.REEL_SETUP);
        }
    });
}

function getActiveReelSpoolPathId() {
    if (reelSetupState.lineType !== "braid") return "direct-main-line";
    return reelSetupState.backingChoice === "monofilament-backing"
        ? "braid-with-backing"
        : "direct-braid";
}

function getActiveReelSpoolStages() {
    return REEL_SPOOL_PATHS[getActiveReelSpoolPathId()]?.stages ?? [];
}

function getActiveReelSpoolStage() {
    const stages = getActiveReelSpoolStages();
    return stages.find((stage) => stage.id === reelSetupState.spoolStageId) ?? stages[0] ?? null;
}

function ensureActiveReelSpoolStage() {
    const stage = getActiveReelSpoolStage();
    if (stage && reelSetupState.spoolStageId !== stage.id) reelSetupState.spoolStageId = stage.id;
    return stage;
}

function renderReelSpoolStageProgress(appMain, stages, activeStage) {
    const progressRegion = appMain.querySelector("[data-reel-progress-region]");
    if (!progressRegion || !activeStage) return;
    const activeIndex = stages.findIndex((stage) => stage.id === activeStage.id);
    const progressSegments = stages.map((stage, index) => {
        const state = index < activeIndex ? "completed" : index === activeIndex ? "current" : "upcoming";
        return `<span class="reel-spool-progress-strip__segment is-${state}" title="${stage.title}"></span>`;
    }).join("");
    const section = document.createElement("section");
    section.className = "reel-spool-progress-strip";
    section.setAttribute("aria-label", "Spool progress");
    section.innerHTML = `
        <div class="reel-spool-progress-strip__text">
            <span class="reel-spool-progress-strip__eyebrow">Spool Progress</span>
            <span class="reel-spool-progress-strip__phase" aria-current="step">Step ${activeIndex + 1} of ${stages.length} · ${activeStage.title}</span>
        </div>
        <div class="reel-spool-progress-strip__segments" style="--spool-step-count: ${stages.length}" aria-hidden="true">${progressSegments}</div>
    `;
    progressRegion.classList.add("has-spool-progress");
    progressRegion.append(section);
}

function openKnotDetailFromReelSetup(knotId, actionId, returnLabel) {
    const knot = findRecordById(KNOT_DATA, knotId);
    if (!knot || knot.isActive !== true) return;

    pushDetailNavigationContext({
        route: ROUTES.REEL_SETUP,
        label: returnLabel,
        state: {
            reelSetupState: {
                ...reelSetupState,
                scrollY: window.scrollY,
                restoreScroll: true,
                restoreFocusActionId: actionId
            }
        }
    });
    selectedKnotId = knotId;
    selectedKnotBrowseKey = "all";
    selectedKnotTaskId = null;
    selectedKnotDetailSource = "reel-setup";
    resetKnotDetailState(knotId);
    showView(ROUTES.KNOT_DETAIL);
}

function restoreReelSetupNavigationContext(appMain) {
    if (reelSetupState.restoreScroll !== true && !reelSetupState.restoreFocusActionId) return;
    const scrollY = Number(reelSetupState.scrollY ?? 0);
    const focusActionId = reelSetupState.restoreFocusActionId;
    reelSetupState = { ...reelSetupState, restoreScroll: false, restoreFocusActionId: null };
    requestAnimationFrame(() => {
        window.scrollTo({ top: scrollY, left: 0, behavior: "auto" });
        if (!focusActionId) return;
        appMain.querySelector(`[data-reel-spool-knot-action="${focusActionId}"]`)?.focus({ preventScroll: true });
    });
}

function renderReelSpoolKnotAction(appMain, stage) {
    if (!stage?.knotId || !stage?.knotActionLabel) return;
    const cardGrid = appMain.querySelector("[data-view-card-grid]");
    if (!cardGrid) return;
    const actionId = `${stage.id}:${stage.knotId}`;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "reel-spool-knot-action";
    button.dataset.reelSpoolKnotAction = actionId;
    button.innerHTML = `${stage.knotActionLabel} <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span>`;
    button.addEventListener("click", () => openKnotDetailFromReelSetup(stage.knotId, actionId, stage.title));
    cardGrid.parentNode.insertBefore(button, cardGrid);
}

function renderReelSetupSpoolStep(appMain) {
    const reelType = getReelSetupOption(REEL_TYPE_OPTIONS, reelSetupState.reelType);
    const lineType = getReelLineType(reelSetupState.lineType);
    const guidance = getReelSpoolingGuidance(reelSetupState.reelType);
    if (!reelType || !lineType || !reelSetupState.lineWeight || !guidance) {
        reelSetupState.stepId = REEL_SETUP_STEP_IDS.EQUIPMENT;
        renderReelSetupEquipmentStep(appMain);
        return;
    }
    if (lineType.id === "braid" && !getReelBackingChoice(reelSetupState.backingChoice)) {
        reelSetupState.stepId = REEL_SETUP_STEP_IDS.BACKING_DECISION;
        renderReelSetupBackingDecisionStep(appMain);
        return;
    }

    const stages = getActiveReelSpoolStages();
    const stage = ensureActiveReelSpoolStage();
    if (!stage) return;
    const stageIndex = stages.findIndex((item) => item.id === stage.id);
    const replacementNote = reelSetupState.entryMode === "replace-existing-line"
        ? "Remove the old line completely before building the fresh line system. "
        : "";

    renderReelSetupStep(appMain, {
        title: `Spool — ${stage.title}`,
        description: `${replacementNote}${stage.description}`,
        cards: [],
        onCardSelect: () => {}
    });
    renderReelSpoolStageProgress(appMain, stages, stage);
    renderReelSpoolKnotAction(appMain, stage);

    if (["prepare", "wind-backing", "wind-main-line", "check-fill"].includes(stage.id)) {
        renderReelSetupGuidanceList(appMain, guidance, { className: "reel-spool-guidance" });
    }
    if (lineType.id === "braid") {
        renderReelSetupReferencePrompt(appMain, "What about a leader?", openReelLeaderReference);
    }

    const isLastStage = stageIndex === stages.length - 1;
    renderReelSetupPrimaryAction(appMain, {
        label: isLastStage ? "Continue to Reel Ready" : `Continue — ${stages[stageIndex + 1].title}`,
        onClick: () => {
            if (isLastStage) {
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.READY;
            } else {
                reelSetupState.spoolStageId = stages[stageIndex + 1].id;
            }
            showView(ROUTES.REEL_SETUP);
        }
    });
}

function renderReelSetupReadyStep(appMain) {
    const stages = getActiveReelSpoolStages();
    if (!stages.length || !reelSetupState.lineWeight) {
        reelSetupState.stepId = REEL_SETUP_STEP_IDS.SPOOL;
        renderReelSetupSpoolStep(appMain);
        return;
    }
    renderReelSetupStep(appMain, {
        title: "Reel Ready",
        description: REEL_READY_GUIDANCE.summary,
        cards: [],
        onCardSelect: () => {},
        ready: true
    });
    renderReelSetupGuidanceList(appMain, REEL_READY_GUIDANCE, { className: "reel-ready-guidance" });
    renderReelSetupPrimaryAction(appMain, {
        label: "Choose a Rig",
        onClick: () => {
            // CP9.5 owns the completed Reel Setup snapshot and Rig landing summary.
            // CP9.4 preserves the existing neutral forward route with no filtering,
            // ranking, compatibility verdict, or automatic Rig selection.
            clearDetailNavigationStack();
            showView(ROUTES.RIGS);
        }
    });
}


let knotGuideState = { query: "", scrollY: 0 };
let knotBrowseState = { query: "", scrollY: 0 };

function createInitialKnotDetailState(knotId) {
    return {
        knotId,
        expandedDisclosureIds: [],
        rigsExpanded: false,
        scrollY: 0,
        restoreScroll: false,
        restoreFocusTarget: null
    };
}

let knotDetailState = createInitialKnotDetailState(null);

function resetKnotDetailState(knotId) {
    knotDetailState = createInitialKnotDetailState(knotId);
}

function captureKnotDetailNavigationState(restoreFocusTarget = null) {
    return {
        selectedKnotId,
        selectedKnotBrowseKey,
        selectedKnotTaskId,
        selectedKnotDetailSource,
        knotDetailState: {
            knotId: selectedKnotId,
            expandedDisclosureIds: [...(knotDetailState.expandedDisclosureIds ?? [])],
            rigsExpanded: knotDetailState.rigsExpanded === true,
            scrollY: window.scrollY,
            restoreScroll: true,
            restoreFocusTarget
        }
    };
}

function restoreKnotDetailScroll() {
    if (knotDetailState.knotId !== selectedKnotId || knotDetailState.restoreScroll !== true) return;
    const scrollY = Number(knotDetailState.scrollY ?? 0);
    window.requestAnimationFrame(() => {
        window.scrollTo({ top: scrollY, left: 0, behavior: "auto" });
        knotDetailState = { ...knotDetailState, restoreScroll: false };
    });
}

function restoreKnotDetailFocus(appMain) {
    if (!appMain || knotDetailState.knotId !== selectedKnotId || !knotDetailState.restoreFocusTarget) return;

    const focusTarget = knotDetailState.restoreFocusTarget;
    knotDetailState = { ...knotDetailState, restoreFocusTarget: null };
    window.requestAnimationFrame(() => {
        const [kind, id] = focusTarget.split(":", 2);
        const selectorByKind = {
            rig: "[data-knot-rig-id]",
            task: "[data-knot-task-link-id]"
        };
        const selector = selectorByKind[kind];
        if (!selector || !id) return;
        const datasetKeyByKind = {
            rig: "knotRigId",
            task: "knotTaskLinkId"
        };
        const datasetKey = datasetKeyByKind[kind];
        const target = Array.from(appMain.querySelectorAll(selector)).find((element) =>
            element.dataset[datasetKey] === id
        );
        target?.focus({ preventScroll: true });
    });
}

function restoreKnotScroll(scrollY) {
    if (!Number.isFinite(scrollY) || scrollY <= 0) return;
    window.requestAnimationFrame(() => {
        window.scrollTo({ top: scrollY, left: 0, behavior: "auto" });
    });
}

function updateKnotResultStatus(appMain, count) {
    if (!Number.isInteger(count) || count <= 0) return;
    const status = appMain.querySelector("[data-search-status]");
    if (status) status.textContent = `${count} ${count === 1 ? "knot" : "knots"} found`;
}

function getActiveKnots() {
    return KNOT_DATA.filter((knot) => knot.isActive === true);
}

function getKnotTask(taskId) {
    return KNOT_TASK_DEFINITIONS.find((task) => task.id === taskId) ?? null;
}

function getKnotLandingTask(taskId) {
    return KNOT_LANDING_TASK_DEFINITIONS.find((task) => task.id === taskId) ?? null;
}

function getCoreKnots(activeKnots = getActiveKnots()) {
    return CORE_KNOT_IDS
        .map((knotId) => findRecordById(activeKnots, knotId))
        .filter(Boolean);
}

function openKnotDetail(knotId, source = "guide") {
    const knot = findRecordById(getActiveKnots(), knotId);
    if (!knot) {
        console.warn(`Knot was not found: ${knotId}`);
        return;
    }

    clearDetailNavigationStack();
    if (source === "browse") knotBrowseState.scrollY = window.scrollY;
    else knotGuideState.scrollY = window.scrollY;
    selectedKnotId = knotId;
    selectedKnotDetailSource = source;
    resetKnotDetailState(knotId);
    showView(ROUTES.KNOT_DETAIL);
}

function pushCurrentKnotDetailContext(restoreFocusTarget = null) {
    const knot = findRecordById(KNOT_DATA, selectedKnotId);
    if (!knot || knot.isActive !== true) return false;

    pushDetailNavigationContext({
        route: ROUTES.KNOT_DETAIL,
        label: knot.name,
        state: captureKnotDetailNavigationState(restoreFocusTarget)
    });
    return true;
}

function openKnotTaskFromDetail(taskId) {
    const task = getKnotTask(taskId);
    if (!task || !pushCurrentKnotDetailContext(`task:${taskId}`)) return;

    if (taskId === "attach-line-to-reel") {
        resetReelSetupState();
        showView(ROUTES.REEL_SETUP);
        return;
    }

    selectedKnotBrowseKey = "task";
    selectedKnotTaskId = taskId;
    showView(ROUTES.KNOT_BROWSE);
}

function openKnotBrowse(collectionKey, taskId = null) {
    const isTask = collectionKey === "task";
    const isValid = isTask
        ? Boolean(getKnotTask(taskId))
        : KNOT_COLLECTIONS[collectionKey]?.isAvailable === true;
    if (!isValid) return;

    clearDetailNavigationStack();
    knotGuideState.scrollY = window.scrollY;
    selectedKnotBrowseKey = collectionKey;
    selectedKnotTaskId = isTask ? taskId : null;
    knotBrowseState = { query: "", scrollY: 0 };
    showView(ROUTES.KNOT_BROWSE);
}

function renderKnotsView(appMain) {
    const collectionCards = Object.entries(KNOT_COLLECTIONS).map(([key, collection]) => ({
        key,
        ...collection
    }));

    renderKnotGuideLanding(appMain, {
        tasks: KNOT_LANDING_TASK_DEFINITIONS,
        collections: collectionCards,
        initialQuery: knotGuideState.query,
        onQueryChange: (query) => {
            knotGuideState.query = query.trim();
        },
        onSearch: (query) => updateKnotGuideSearchResults(appMain, query),
        onWorkflowSelect: () => {
            knotGuideState.scrollY = window.scrollY;
            openReelSetup();
        },
        onTaskSelect: (taskId) => {
            const landingTask = getKnotLandingTask(taskId);
            if (!landingTask) return;

            if (landingTask.targetType === "collection") {
                openKnotBrowse(landingTask.targetId);
                return;
            }

            if (landingTask.targetType === "task") {
                openKnotBrowse("task", landingTask.targetId);
            }
        },
        onCollectionSelect: (collectionKey) => openKnotBrowse(collectionKey)
    });

    restoreKnotScroll(knotGuideState.scrollY);
}

function updateKnotGuideSearchResults(appMain, query) {
    const matches = searchKnotRecords(
        getActiveKnots(),
        query,
        KNOT_SEARCH_INTENTS
    );

    renderSearchResults(appMain, matches, {
        emptyMessage: "No knots found. Try another search.",
        renderRecord: buildKnotResultCardMarkup,
        onResultSelect: (knotId) => openKnotDetail(knotId, "guide")
    });
    updateKnotResultStatus(appMain, matches.length);
}

function getKnotBrowseConfig() {
    const activeKnots = getActiveKnots();

    if (selectedKnotBrowseKey === "task") {
        const task = getKnotTask(selectedKnotTaskId);
        if (task) {
            return {
                title: task.title,
                description: task.description,
                records: task.knotIds
                    .map((knotId) => findRecordById(activeKnots, knotId))
                    .filter(Boolean)
            };
        }
    }

    const collection = KNOT_COLLECTIONS[selectedKnotBrowseKey] ?? KNOT_COLLECTIONS.all;
    let records = activeKnots;

    if (selectedKnotBrowseKey === "core") {
        records = getCoreKnots(activeKnots);
    } else if (selectedKnotBrowseKey === "beginner") {
        records = sortRecordsAlphabetically(activeKnots.filter((knot) => knot.difficulty === "Beginner"));
    } else if (selectedKnotBrowseKey === "intermediate") {
        records = sortRecordsAlphabetically(activeKnots.filter((knot) => knot.difficulty === "Intermediate"));
    } else {
        records = sortRecordsAlphabetically(activeKnots);
    }

    return {
        title: collection.title,
        description: collection.description,
        records
    };
}

function renderKnotBrowseView(appMain) {
    const browseConfig = getKnotBrowseConfig();
    const returnContext = peekDetailNavigationContext();
    const fromKnotDetail = selectedKnotBrowseKey === "task" && returnContext?.route === ROUTES.KNOT_DETAIL;
    renderSearchView(appMain, {
        headingId: "knot-browse-title",
        inputId: "knot-browse-search-input",
        title: browseConfig.title,
        description: browseConfig.description,
        label: "Search Knots",
        helpText: "Search by Knot name, task, line type, or difficulty.",
        inputDescriptionId: "knot-browse-search-help",
        placeholder: "Try Palomar, tie hook, braid, or beginner",
        showSubmitButton: false,
        viewClass: "knot-browse-view",
        parentLabel: fromKnotDetail ? returnContext.label : "Knots Guide",
        initialQuery: knotBrowseState.query,
        onQueryChange: (query) => {
            knotBrowseState.query = query.trim();
        },
        onParent: fromKnotDetail
            ? returnToDetailNavigationContext
            : () => showView(ROUTES.KNOTS),
        onSearch: (query) => updateKnotBrowseResults(appMain, query)
    });

    restoreKnotScroll(knotBrowseState.scrollY);
}

function updateKnotBrowseResults(appMain, query) {
    const browseConfig = getKnotBrowseConfig();
    const normalizedQuery = normalizeKnotSearchText(query);
    const records = normalizedQuery
        ? searchKnotRecords(browseConfig.records, query, KNOT_SEARCH_INTENTS)
        : browseConfig.records;

    renderSearchResults(appMain, records, {
        emptyMessage: `No knots found in ${browseConfig.title}. Try another search.`,
        renderRecord: buildKnotResultCardMarkup,
        onResultSelect: (knotId) => openKnotDetail(knotId, "browse")
    });
    updateKnotResultStatus(appMain, records.length);
}

function getRigDifficultyRank(difficulty) {
    const rank = RIG_DIFFICULTY_ORDER.indexOf(difficulty);
    return rank >= 0 ? rank : Number.MAX_SAFE_INTEGER;
}

function getRigUsageTieBreakOrder(rigId) {
    const coreOrder = CORE_RIG_IDS.indexOf(rigId);
    if (coreOrder >= 0) return coreOrder;

    const dataOrder = RIG_DATA.findIndex((rig) => rig.id === rigId);
    return CORE_RIG_IDS.length + (dataOrder >= 0 ? dataOrder : RIG_DATA.length);
}

function getKnotUsageContexts(knotId) {
    const taskContexts = KNOT_TASK_DEFINITIONS
        .filter((task) => task.knotIds.includes(knotId))
        .map((task) => ({
            taskId: task.id,
            title: task.title
        }));

    const rigContexts = RIG_DATA
        .filter((rig) => rig.isActive === true && Array.isArray(rig.knotApplications))
        .map((rig) => {
            const labels = rig.knotApplications
                .filter((application) => application.recommendedKnotIds?.includes(knotId))
                .map((application) => application.label);
            return labels.length > 0
                ? {
                    rigId: rig.id,
                    title: rig.name,
                    difficulty: rig.difficulty,
                    isCore: CORE_RIG_IDS.includes(rig.id),
                    labels
                }
                : null;
        })
        .filter(Boolean)
        .sort((first, second) => {
            if (first.isCore !== second.isCore) return first.isCore ? -1 : 1;

            const difficultyDifference = getRigDifficultyRank(first.difficulty) -
                getRigDifficultyRank(second.difficulty);
            if (difficultyDifference !== 0) return difficultyDifference;

            return getRigUsageTieBreakOrder(first.rigId) -
                getRigUsageTieBreakOrder(second.rigId);
        });

    return {
        tasks: taskContexts,
        rigs: rigContexts
    };
}

function renderKnotDetailView(appMain) {
    const knot = findRecordById(KNOT_DATA, selectedKnotId);
    const returnContext = peekDetailNavigationContext();
    const fromRelatedRig = returnContext?.route === ROUTES.RIG_DETAIL;
    const fromReelSetup = returnContext?.route === ROUTES.REEL_SETUP;
    const hasReturnContext = fromRelatedRig || fromReelSetup;
    if (!knot || knot.isActive !== true) {
        console.warn(`Knot was not found: ${selectedKnotId}`);
        if (hasReturnContext && returnToDetailNavigationContext()) return;
        showView(ROUTES.KNOTS);
        return;
    }

    if (knotDetailState.knotId !== knot.id) resetKnotDetailState(knot.id);

    const fromBrowse = selectedKnotDetailSource === "browse";
    const browseConfig = getKnotBrowseConfig();
    const usageContexts = getKnotUsageContexts(knot.id);
    renderKnotInstructionDetail(appMain, {
        record: knot,
        usageContexts: {
            ...usageContexts,
            rigsExpanded: knotDetailState.rigsExpanded === true
        },
        expandedDisclosureIds: knotDetailState.expandedDisclosureIds,
        parentLabel: hasReturnContext
            ? returnContext.label
            : (fromBrowse ? browseConfig.title : "Knots Guide"),
        onParent: hasReturnContext
            ? returnToDetailNavigationContext
            : () => showView(fromBrowse ? ROUTES.KNOT_BROWSE : ROUTES.KNOTS),
        onDisclosureStateChange: (expandedDisclosureIds) => {
            knotDetailState = {
                ...knotDetailState,
                knotId: knot.id,
                expandedDisclosureIds: [...expandedDisclosureIds]
            };
        },
        onUsageStateChange: (rigsExpanded) => {
            knotDetailState = {
                ...knotDetailState,
                knotId: knot.id,
                rigsExpanded: rigsExpanded === true
            };
        },
        onRigSelect: openRigDetailFromKnot,
        onTaskSelect: openKnotTaskFromDetail
    });

    restoreKnotDetailScroll();
    restoreKnotDetailFocus(appMain);
}


function getActiveRegulationStates() {
    if (typeof STATE_DATA === "undefined") return [];
    return STATE_DATA
        .filter((state) => state.active === true)
        .slice()
        .sort((first, second) => first.name.localeCompare(second.name, undefined, { sensitivity: "base" }));
}

function getRegulationState(stateId) {
    if (typeof STATE_DATA === "undefined") return null;
    return STATE_DATA.find((state) => state.id === stateId && state.active === true) ?? null;
}

function getRegulationStateResources(stateId) {
    if (typeof STATE_RESOURCE_DATA === "undefined") return [];
    return STATE_RESOURCE_DATA.filter((resource) =>
        resource.stateId === stateId && resource.status !== "retired"
    );
}

function getRegulationStateNotices(stateId) {
    if (typeof STATE_NOTICE_DATA === "undefined") return [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return STATE_NOTICE_DATA.filter((notice) => {
        if (notice.stateId !== stateId || notice.active !== true) return false;
        if (!notice.expiresDate) return true;
        const expires = new Date(`${notice.expiresDate}T00:00:00`);
        return Number.isNaN(expires.getTime()) || expires >= today;
    });
}

function openRegulationState(stateId) {
    if (!getRegulationState(stateId)) return;
    selectedRegulationStateId = stateId;
    showView(ROUTES.REGULATIONS_STATE);
}

function renderRegulationsGatewayRoute(appMain) {
    const states = getActiveRegulationStates();
    const returnContext = peekDetailNavigationContext();
    if (!selectedRegulationStateId || !states.some((state) => state.id === selectedRegulationStateId)) {
        selectedRegulationStateId = states[0]?.id ?? null;
    }

    renderRegulationsGatewayView(appMain, {
        states,
        selectedStateId: selectedRegulationStateId,
        initialQuery: regulationsGatewayState.query,
        parentLabel: returnContext?.route === ROUTES.FISH_DETAIL ? returnContext.label : null,
        onParent: returnContext?.route === ROUTES.FISH_DETAIL ? returnToDetailNavigationContext : null,
        onQueryChange: (query) => {
            regulationsGatewayState.query = query;
        },
        onSelectionChange: (stateId) => {
            selectedRegulationStateId = stateId;
        },
        onStateOpen: openRegulationState
    });
}

function renderRegulationsStateRoute(appMain) {
    const state = getRegulationState(selectedRegulationStateId);
    if (!state) {
        showView(ROUTES.REGULATIONS);
        return;
    }

    renderRegulationsStateView(appMain, {
        state,
        resources: getRegulationStateResources(state.id),
        notices: getRegulationStateNotices(state.id),
        onParent: () => showView(ROUTES.REGULATIONS)
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
