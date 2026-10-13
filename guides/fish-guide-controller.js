/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: guides/fish-guide-controller.js
   PURPOSE: Extracted owner functions and contracts from approved pre-migration source.
   ========================================================== */

"use strict";

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


function getFishSafetyGuidance(fishId) {
    if (typeof FISH_SAFETY_GUIDANCE === "undefined" || !Array.isArray(FISH_SAFETY_GUIDANCE)) return [];
    return FISH_SAFETY_GUIDANCE.filter((record) =>
        Array.isArray(record.fishIds) && record.fishIds.includes(fishId)
    );
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
        emptyMessage: "No fish found. Try another search.",
        statusText: (records) => `${records.length} fish found`,
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
    const normalizedQuery = query.trim();
    renderSearchResults(appMain, matches, {
        emptyMessage: normalizedQuery
            ? "No fish found. Try another search."
            : "No fish are currently available in this collection.",
        statusText: (records) => normalizedQuery
            ? `${records.length} fish found`
            : `${records.length} fish`,
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
        safetyGuidance: getFishSafetyGuidance(fish.id),
        reelSetupContextLines: getDetailReelSetupContextLines(),
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
    resetRigDetailState(rig.id, lureBaitId);
    showView(ROUTES.RIG_DETAIL);
}

/* ==========================================================
   END FISH GUIDE
   ========================================================== */


/* Explicit owner route contract. Registration is performed once at startup. */
function registerFishGuideRoutes() {
    FCC_APP.registerProvider("fish-guide", {
        [ROUTES.FISH]: {
            render: renderFishGuideView,
            restore: (state) => { fishGuideState = { ...state.fishGuideState }; }
        },
        [ROUTES.FISH_BROWSE]: {
            render: renderFishBrowseView,
            restore: (state) => {
                selectedFishCollectionKey = state.selectedFishCollectionKey;
                fishBrowseState = { ...state.fishBrowseState };
            }
        },
        [ROUTES.FISH_DETAIL]: {
            render: renderFishDetailView,
            restore: (state) => {
                selectedFishId = state.selectedFishId;
                fishDetailState = state.fishDetailState
                    ? { ...state.fishDetailState, expandedSectionIds: [...state.fishDetailState.expandedSectionIds] }
                    : createInitialFishDetailState(selectedFishId);
            }
        },
        [ROUTES.FISH_COMPARE_CATALOG]: {
            render: renderFishComparisonCatalogView,
            restore: (state) => {
                fishComparisonCatalogScrollY = state.scrollY ?? 0;
                fishComparisonCatalogFocusRelationshipId = state.focusRelationshipId ?? null;
            }
        },
        [ROUTES.FISH_COMPARE_CHOOSER]: {
            render: renderFishComparisonChooserView,
            restore: (state) => {
                selectedFishId = state.selectedFishId;
                fishComparisonChooserFocusRelationshipId = state.focusRelationshipId ?? null;
            }
        },
        [ROUTES.FISH_COMPARE]: {
            render: renderFishComparisonView,
            restore: (state) => {
                selectedFishRelationshipId = state.selectedFishRelationshipId;
                fishComparisonFocusFishId = state.focusFishId ?? null;
            }
        }
    });
}

function resetFishGuideForHome() {
    fishGuideState = { query: "", scrollY: 0 };
    fishDetailState = createInitialFishDetailState(null);
}

/* ==========================================================
   FISH GUIDE — SCOPED SEARCH
   ========================================================== */

const FISH_SEARCH_HELPERS = Object.freeze({
    all: Object.freeze(["bass", "bluegill", "rainbow", "brown"]),
    trout: Object.freeze(["rainbow", "brown", "German Brown"]),
    gar: Object.freeze(["longnose", "spotted", "Needlenose"])
});

function getFishCategoryName(record, categoryData = [], legacyCategoryMap = {}) {
    if (!record || !Array.isArray(categoryData)) return "";
    const categoryId = record.categoryId ?? legacyCategoryMap?.[record.category] ?? null;
    if (!categoryId) return "";
    return categoryData.find((category) => category.id === categoryId)?.name ?? "";
}

function getFishSearchMatch(record, normalizedQuery, categoryData, legacyCategoryMap) {
    const normalizedName = normalizeSearchText(record.name);
    const normalizedAliases = (record.aliases ?? []).map(normalizeSearchText);
    const normalizedCategory = normalizeSearchText(getFishCategoryName(record, categoryData, legacyCategoryMap));

    if (normalizedName === normalizedQuery) return 1000;
    if (normalizedName.startsWith(normalizedQuery)) return 900;
    if (normalizedAliases.includes(normalizedQuery)) return 850;
    if (normalizedAliases.some((alias) => alias.startsWith(normalizedQuery))) return 800;
    if (normalizedName.includes(normalizedQuery)) return 700;
    if (normalizedCategory && normalizedCategory.includes(normalizedQuery)) return 600;
    if (normalizedAliases.some((alias) => alias.includes(normalizedQuery))) return 450;

    return 0;
}

function searchFishRecords(records, query, categoryData = [], legacyCategoryMap = {}) {
    if (!Array.isArray(records)) return [];

    const normalizedQuery = normalizeSearchText(query);
    if (!normalizedQuery) return sortRecordsAlphabetically(records);

    return records
        .map((record) => ({
            record,
            score: getFishSearchMatch(record, normalizedQuery, categoryData, legacyCategoryMap)
        }))
        .filter((match) => match.score > 0)
        .sort((first, second) =>
            second.score - first.score ||
            String(first.record.name ?? "").localeCompare(
                String(second.record.name ?? ""),
                undefined,
                { sensitivity: "base" }
            )
        )
        .map((match) => match.record);
}

function getFishSearchPlaceholder(scopeKey, fallbackLabel = "Fish") {
    const terms = FISH_SEARCH_HELPERS[scopeKey];
    if (!Array.isArray(terms) || terms.length === 0) {
        return `Search ${fallbackLabel}`;
    }

    if (terms.length === 1) return `Try ${terms[0]}`;
    if (terms.length === 2) return `Try ${terms[0]} or ${terms[1]}`;
    return `Try ${terms.slice(0, -1).join(", ")}, or ${terms[terms.length - 1]}`;
}
