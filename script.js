/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: script.js
   PURPOSE: Coordinates routes, Fish/Rig/Knot discovery, Reel Setup,
   Knot detail navigation, My Tackle placeholders, and Rig readiness.
   ========================================================== */

"use strict";

const BUILD_INFO = Object.freeze({
    file: "script.js",
    milestone: "Knots — Production Package 3 Block 3.6"
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
    KNOT_BROWSE: "knot-browse",
    KNOT_DETAIL: "knot-detail",
    REEL_SETUP: "reel-setup",
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

const RIG_DIFFICULTY_ORDER = Object.freeze([
    "Beginner",
    "Beginner+",
    "Intermediate",
    "Intermediate+",
    "Advanced",
    "Expert"
]);

const KNOT_COLLECTIONS = Object.freeze({
    all: Object.freeze({
        title: "All Knots",
        description: "Browse every active Version 1 Knot in the library.",
        isAvailable: true
    }),
    core: Object.freeze({
        title: "Core Knots",
        description: "Four practical starter knots covering reel attachment, common terminal connections, and joining lines.",
        isAvailable: true
    }),
    beginner: Object.freeze({
        title: "Beginner Knots",
        description: "Six approachable knots selected for common freshwater fishing connections.",
        isAvailable: true
    }),
    intermediate: Object.freeze({
        title: "Intermediate Knots",
        description: "Four specialized knots for loops, hook-specific tying, and leader connections.",
        isAvailable: true
    }),
    advanced: Object.freeze({
        title: "Advanced Knots",
        description: "Advanced Knot instruction will be added when a future approved library expansion requires it.",
        isAvailable: false
    })
});

let currentView = ROUTES.DASHBOARD;
let dashboardMarkup = "";
let selectedRigId = null;
let selectedRigCollectionKey = "all";
let selectedKnotId = null;
let selectedKnotBrowseKey = "all";
let selectedKnotTaskId = null;
let selectedKnotDetailSource = "guide";
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
    [ROUTES.RIGS]: renderRigGuideView,
    [ROUTES.RIG_BROWSE]: renderRigBrowseView,
    [ROUTES.RIG_DETAIL]: renderRigDetailView,
    [ROUTES.RECOMMENDATIONS]: renderRecommendationsView,
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

function openRigDetail(rigId, collectionKey = selectedRigCollectionKey) {
    clearDetailNavigationStack();
    selectedRigId = rigId;
    selectedRigCollectionKey = collectionKey;
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
        state: {
            selectedKnotId,
            selectedKnotBrowseKey,
            selectedKnotTaskId,
            selectedKnotDetailSource
        }
    });

    selectedRigId = rigId;
    selectedRigCollectionKey = "all";
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
    showView(ROUTES.KNOT_DETAIL);
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
        onResultSelect: (rigId) => openRigDetail(rigId, selectedRigCollectionKey)
    });
}

function renderRigDetailView(appMain) {
    const rig = findRecordById(RIG_DATA, selectedRigId);
    const fromGuideSearch = selectedRigCollectionKey === "guide";
    const returnContext = peekDetailNavigationContext();
    const fromRelatedKnot = returnContext?.route === ROUTES.KNOT_DETAIL;
    if (!rig) {
        console.warn(`Rig was not found: ${selectedRigId}`);
        if (fromRelatedKnot && returnToDetailNavigationContext()) return;
        showView(fromGuideSearch ? ROUTES.RIGS : ROUTES.RIG_BROWSE);
        return;
    }

    const collection = getRigCollectionConfig();
    renderInstructionDetail(appMain, {
        record: rig,
        parentLabel: fromRelatedKnot
            ? returnContext.label
            : (fromGuideSearch ? "Rig Guide" : collection.title),
        selections: getRigReadinessSelections(rig.id),
        onParent: fromRelatedKnot
            ? returnToDetailNavigationContext
            : () => showView(fromGuideSearch ? ROUTES.RIGS : ROUTES.RIG_BROWSE),
        onKnotSelect: openKnotDetailFromRig,
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


function createInitialReelSetupState() {
    return {
        stepId: REEL_SETUP_STEP_IDS.START,
        entryMode: null,
        reelType: null,
        lineType: null,
        targetFish: null,
        equipmentCheck: null,
        backingChoice: null
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
    return options.find((option) => option.id === optionId) ?? null;
}

function renderReelSetupView(appMain) {
    if (reelSetupState.stepId === REEL_SETUP_STEP_IDS.REEL_TYPE) {
        renderReelSetupReelTypeStep(appMain);
        return;
    }

    if (reelSetupState.stepId === REEL_SETUP_STEP_IDS.LINE_SELECTION) {
        renderReelSetupLineSelectionStep(appMain);
        return;
    }

    if (reelSetupState.stepId === REEL_SETUP_STEP_IDS.LINE_HELP) {
        renderReelSetupLineHelpStep(appMain);
        return;
    }

    if (reelSetupState.stepId === REEL_SETUP_STEP_IDS.LINE_IDENTIFICATION) {
        renderReelSetupLineIdentificationStep(appMain);
        return;
    }

    if (reelSetupState.stepId === REEL_SETUP_STEP_IDS.LINE_SELECTION_COMPLETE) {
        renderReelSetupLineSelectionComplete(appMain);
        return;
    }

    if (reelSetupState.stepId === REEL_SETUP_STEP_IDS.TARGET_FISH) {
        renderReelSetupTargetFishStep(appMain);
        return;
    }

    if (reelSetupState.stepId === REEL_SETUP_STEP_IDS.TARGET_GUIDANCE) {
        renderReelSetupTargetGuidanceStep(appMain);
        return;
    }

    if (reelSetupState.stepId === REEL_SETUP_STEP_IDS.REEL_IDENTIFICATION_HELP) {
        renderReelSetupReelIdentificationHelpStep(appMain);
        return;
    }

    if (reelSetupState.stepId === REEL_SETUP_STEP_IDS.EQUIPMENT_CHECK) {
        renderReelSetupEquipmentCheckStep(appMain);
        return;
    }

    if (reelSetupState.stepId === REEL_SETUP_STEP_IDS.READ_REEL) {
        renderReelSetupReadReelStep(appMain);
        return;
    }

    if (reelSetupState.stepId === REEL_SETUP_STEP_IDS.READ_ROD) {
        renderReelSetupReadRodStep(appMain);
        return;
    }

    if (reelSetupState.stepId === REEL_SETUP_STEP_IDS.EQUIPMENT_MISMATCH) {
        renderReelSetupEquipmentMismatchStep(appMain);
        return;
    }

    if (reelSetupState.stepId === REEL_SETUP_STEP_IDS.EQUIPMENT_COMPLETE) {
        renderReelSetupEquipmentCompleteStep(appMain);
        return;
    }

    if (reelSetupState.stepId === REEL_SETUP_STEP_IDS.BACKING_DECISION) {
        renderReelSetupBackingDecisionStep(appMain);
        return;
    }

    if (reelSetupState.stepId === REEL_SETUP_STEP_IDS.SPOOL_CONNECTION_PLAN) {
        renderReelSetupSpoolConnectionPlanStep(appMain);
        return;
    }

    renderReelSetupStartStep(appMain);
}

function getReelSetupTargetFish(targetFishId) {
    return REEL_TARGET_FISH_PROFILES.find((profile) => profile.id === targetFishId) ?? null;
}

function getReelSetupSelectedChoiceLabels() {
    const labels = [];
    const entryOption = getReelSetupOption(REEL_SETUP_ENTRY_OPTIONS, reelSetupState.entryMode);
    const reelTypeOption = getReelSetupOption(REEL_TYPE_OPTIONS, reelSetupState.reelType);
    const lineType = getReelLineType(reelSetupState.lineType);
    const targetFish = getReelSetupTargetFish(reelSetupState.targetFish);
    const backingChoice = getReelBackingChoice(reelSetupState.backingChoice);

    if (entryOption) labels.push(entryOption.title);
    if (reelTypeOption) labels.push(reelTypeOption.title);
    if (lineType) labels.push(lineType.title);
    if (targetFish) labels.push(targetFish.title);
    if (backingChoice) labels.push(backingChoice.title);

    return labels;
}

function renderReelSetupSelectedChoices(appMain) {
    const labels = getReelSetupSelectedChoiceLabels();
    if (labels.length === 0) return;

    const contentView = appMain.querySelector(".content-view");
    const description = contentView?.querySelector("h2 + p");
    if (!contentView || !description) return;

    const selectedChoices = document.createElement("div");
    selectedChoices.dataset.reelSetupSelectedChoices = "true";
    selectedChoices.style.marginBottom = "var(--space-4)";
    selectedChoices.style.padding = "var(--space-3) 0";
    selectedChoices.style.borderTop = "1px solid var(--border)";
    selectedChoices.style.borderBottom = "1px solid var(--border)";

    const label = document.createElement("span");
    label.textContent = "Selected choices";
    label.style.display = "block";
    label.style.marginBottom = "var(--space-1)";
    label.style.color = "var(--text-subtle)";
    label.style.fontSize = ".78rem";
    label.style.fontWeight = "800";
    label.style.letterSpacing = ".06em";
    label.style.textTransform = "uppercase";

    const values = document.createElement("strong");
    values.textContent = labels.join(" · ");
    values.style.display = "block";
    values.style.color = "color-mix(in srgb, var(--accent-knots) 72%, white 28%)";
    values.style.fontSize = ".78rem";
    values.style.fontWeight = "800";
    values.style.lineHeight = "1.45";
    values.style.letterSpacing = ".015em";
    values.style.overflowWrap = "anywhere";

    selectedChoices.append(label, values);
    contentView.insertBefore(selectedChoices, description);
}

function getReelSetupPreviousStep() {
    const previousSteps = {
        [REEL_SETUP_STEP_IDS.REEL_TYPE]: { stepId: REEL_SETUP_STEP_IDS.START, label: "Get Your Reel Ready" },
        [REEL_SETUP_STEP_IDS.REEL_IDENTIFICATION_HELP]: { stepId: REEL_SETUP_STEP_IDS.REEL_TYPE, label: "Reel Type" },
        [REEL_SETUP_STEP_IDS.LINE_SELECTION]: { stepId: REEL_SETUP_STEP_IDS.REEL_TYPE, label: "Reel Type" },
        [REEL_SETUP_STEP_IDS.LINE_HELP]: { stepId: REEL_SETUP_STEP_IDS.LINE_SELECTION, label: "Line Choices" },
        [REEL_SETUP_STEP_IDS.LINE_IDENTIFICATION]: { stepId: REEL_SETUP_STEP_IDS.LINE_SELECTION, label: "Line Choices" },
        [REEL_SETUP_STEP_IDS.LINE_SELECTION_COMPLETE]: { stepId: REEL_SETUP_STEP_IDS.LINE_SELECTION, label: "Line Choices" },
        [REEL_SETUP_STEP_IDS.TARGET_FISH]: { stepId: REEL_SETUP_STEP_IDS.LINE_SELECTION_COMPLETE, label: "Line Choice Check" },
        [REEL_SETUP_STEP_IDS.TARGET_GUIDANCE]: { stepId: REEL_SETUP_STEP_IDS.TARGET_FISH, label: "Target Fish" },
        [REEL_SETUP_STEP_IDS.EQUIPMENT_CHECK]: { stepId: REEL_SETUP_STEP_IDS.TARGET_GUIDANCE, label: "Starting Line Strength" },
        [REEL_SETUP_STEP_IDS.READ_REEL]: { stepId: REEL_SETUP_STEP_IDS.EQUIPMENT_CHECK, label: "Reel & Rod Check" },
        [REEL_SETUP_STEP_IDS.READ_ROD]: { stepId: REEL_SETUP_STEP_IDS.EQUIPMENT_CHECK, label: "Reel & Rod Check" },
        [REEL_SETUP_STEP_IDS.EQUIPMENT_MISMATCH]: { stepId: REEL_SETUP_STEP_IDS.EQUIPMENT_CHECK, label: "Reel & Rod Check" },
        [REEL_SETUP_STEP_IDS.EQUIPMENT_COMPLETE]: { stepId: REEL_SETUP_STEP_IDS.EQUIPMENT_CHECK, label: "Reel & Rod Check" },
        [REEL_SETUP_STEP_IDS.BACKING_DECISION]: { stepId: REEL_SETUP_STEP_IDS.EQUIPMENT_COMPLETE, label: "Equipment Check" },
        [REEL_SETUP_STEP_IDS.SPOOL_CONNECTION_PLAN]: { stepId: REEL_SETUP_STEP_IDS.BACKING_DECISION, label: "Backing Choice" }
    };

    return previousSteps[reelSetupState.stepId] ?? null;
}

function renderReelSetupNavigation(appMain) {
    const contentView = appMain.querySelector(".content-view");
    const genericHomeButton = contentView?.querySelector("[data-home-navigation]");
    if (!contentView || !genericHomeButton) return;

    const navigation = document.createElement("div");
    navigation.dataset.reelSetupNavigation = "true";
    navigation.style.display = "flex";
    navigation.style.flexWrap = "wrap";
    navigation.style.gap = "var(--space-2)";
    navigation.style.marginBottom = "var(--space-5)";

    const previous = getReelSetupPreviousStep();
    const backButton = document.createElement("button");
    backButton.type = "button";
    backButton.className = "page-navigation";
    backButton.style.marginBottom = "0";

    if (previous) {
        backButton.textContent = `← ${previous.label}`;
        backButton.addEventListener("click", () => {
            reelSetupState.stepId = previous.stepId;
            showView(ROUTES.REEL_SETUP);
        });
    } else {
        backButton.textContent = "← Knots";
        backButton.addEventListener("click", () => {
            resetReelSetupState();
            showView(ROUTES.KNOTS);
        });
    }

    const homeButton = document.createElement("button");
    homeButton.type = "button";
    homeButton.className = "page-navigation";
    homeButton.style.marginBottom = "0";
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", () => {
        resetReelSetupState();
        showView(ROUTES.DASHBOARD);
    });

    navigation.append(backButton, homeButton);
    genericHomeButton.replaceWith(navigation);
}

function renderReelSetupStep(appMain, config) {
    renderView(appMain, config);
    renderReelSetupNavigation(appMain);
    renderReelSetupSelectedChoices(appMain);
}

function renderReelSetupGuidanceList(appMain, guidance) {
    const cardGrid = appMain.querySelector("[data-view-card-grid]");
    if (!cardGrid || !guidance || !Array.isArray(guidance.items)) return;

    const section = document.createElement("section");
    section.dataset.reelSetupGuidance = "true";
    section.style.marginBottom = "var(--space-4)";
    section.style.padding = "var(--space-3) 0 var(--space-4)";
    section.style.borderBottom = "1px solid var(--border)";

    const heading = document.createElement("h3");
    heading.textContent = guidance.title;
    heading.style.marginBottom = "var(--space-2)";

    const summary = document.createElement("p");
    summary.textContent = guidance.summary;
    summary.style.color = "var(--text-muted)";
    summary.style.marginBottom = "var(--space-3)";

    const list = document.createElement("ul");
    list.className = "detail-list";
    guidance.items.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        list.append(listItem);
    });

    section.append(heading, summary, list);
    cardGrid.parentNode.insertBefore(section, cardGrid);
}

function renderReelSetupStartStep(appMain) {
    renderReelSetupStep(appMain, {
        headingId: "reel-setup-title",
        title: "Get Your Reel Ready",
        description: "Start by telling us whether this reel is empty or already has line that you want to replace.",
        cards: REEL_SETUP_ENTRY_OPTIONS.map((option) => ({
            ...option,
            isAvailable: true
        })),
        onCardSelect: (entryMode) => {
            if (!getReelSetupOption(REEL_SETUP_ENTRY_OPTIONS, entryMode)) return;
            reelSetupState.entryMode = entryMode;
            reelSetupState.stepId = REEL_SETUP_STEP_IDS.REEL_TYPE;
            showView(ROUTES.REEL_SETUP);
        }
    });
}

function renderReelSetupReelTypeStep(appMain) {
    const entryOption = getReelSetupOption(
        REEL_SETUP_ENTRY_OPTIONS,
        reelSetupState.entryMode
    );

    if (!entryOption) {
        resetReelSetupState();
        renderReelSetupStartStep(appMain);
        return;
    }

    renderReelSetupStep(appMain, {
        headingId: "reel-setup-title",
        title: "What Kind of Reel Do You Have?",
        description: "Choose the reel style you are working with.",
        cards: REEL_TYPE_OPTIONS.map((option) => ({
            ...option,
            isAvailable: true
        })),
        onCardSelect: (reelType) => {
            if (!getReelSetupOption(REEL_TYPE_OPTIONS, reelType)) return;

            reelSetupState.lineType = null;
            reelSetupState.targetFish = null;
            reelSetupState.equipmentCheck = null;
                reelSetupState.backingChoice = null;

            if (reelType === "not-sure") {
                reelSetupState.reelType = null;
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.REEL_IDENTIFICATION_HELP;
                showView(ROUTES.REEL_SETUP);
                return;
            }

            reelSetupState.reelType = reelType;
            reelSetupState.stepId = REEL_SETUP_STEP_IDS.LINE_SELECTION;
            showView(ROUTES.REEL_SETUP);
        }
    });
}

function renderReelSetupReelIdentificationHelpStep(appMain) {
    const actualReelTypes = REEL_TYPE_OPTIONS.filter((option) => option.id !== "not-sure");

    renderReelSetupStep(appMain, {
        headingId: "reel-setup-title",
        title: "Which Reel Matches Yours?",
        description: "Use the physical layout of the reel rather than guessing from brand or size number.",
        cards: [
            ...actualReelTypes.map((option) => ({
                ...option,
                isAvailable: true
            })),
            {
                id: "back-to-reel-types",
                title: "Back to Reel Choices",
                description: "Return to the reel-type list without choosing a reel.",
                isAvailable: true
            }
        ],
        onCardSelect: (actionId) => {
            const reelTypeOption = getReelSetupOption(actualReelTypes, actionId);
            if (reelTypeOption) {
                reelSetupState.reelType = reelTypeOption.id;
                reelSetupState.lineType = null;
                reelSetupState.targetFish = null;
                reelSetupState.equipmentCheck = null;
                reelSetupState.backingChoice = null;
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.LINE_SELECTION;
                showView(ROUTES.REEL_SETUP);
                return;
            }

            if (actionId === "back-to-reel-types") {
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.REEL_TYPE;
                showView(ROUTES.REEL_SETUP);
            }
        }
    });
}

function getReelLineType(lineTypeId) {
    return REEL_LINE_TYPE_GUIDANCE[lineTypeId] ?? null;
}

function getReelBeginnerLineRecommendation(reelTypeId) {
    return REEL_BEGINNER_LINE_RECOMMENDATIONS[reelTypeId] ?? null;
}

function getReelLineCompatibilityNote(reelTypeId, lineTypeId) {
    return REEL_LINE_COMPATIBILITY_NOTES[reelTypeId]?.[lineTypeId] ?? null;
}

function selectReelSetupLineType(lineTypeId) {
    if (!getReelLineType(lineTypeId)) return false;
    reelSetupState.lineType = lineTypeId;
    reelSetupState.targetFish = null;
    reelSetupState.equipmentCheck = null;
    reelSetupState.backingChoice = null;
    reelSetupState.stepId = REEL_SETUP_STEP_IDS.LINE_SELECTION_COMPLETE;
    showView(ROUTES.REEL_SETUP);
    return true;
}

function renderReelSetupLineSelectionStep(appMain) {
    const entryOption = getReelSetupOption(
        REEL_SETUP_ENTRY_OPTIONS,
        reelSetupState.entryMode
    );
    const reelTypeOption = getReelSetupOption(
        REEL_TYPE_OPTIONS,
        reelSetupState.reelType
    );

    if (!entryOption || !reelTypeOption) {
        resetReelSetupState();
        renderReelSetupStartStep(appMain);
        return;
    }

    const lineCards = Object.values(REEL_LINE_TYPE_GUIDANCE).map((lineType) => ({
        id: lineType.id,
        title: lineType.title,
        description: lineType.selectionDescription,
        isAvailable: true
    }));
    const guidanceCards = REEL_LINE_GUIDANCE_ACTIONS.map((action) => ({
        ...action,
        isAvailable: true
    }));

    renderReelSetupStep(appMain, {
        headingId: "reel-setup-title",
        title: "What Line Are You Using?",
        description: "Choose the line you plan to spool, or use beginner help if you are not sure.",
        cards: [...lineCards, ...guidanceCards],
        onCardSelect: (optionId) => {
            if (getReelLineType(optionId)) {
                selectReelSetupLineType(optionId);
                return;
            }

            if (optionId === "help-me-choose") {
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.LINE_HELP;
                showView(ROUTES.REEL_SETUP);
                return;
            }

            if (optionId === "not-sure-line") {
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.LINE_IDENTIFICATION;
                showView(ROUTES.REEL_SETUP);
            }
        }
    });
}

function renderReelSetupLineHelpStep(appMain) {
    const reelTypeOption = getReelSetupOption(
        REEL_TYPE_OPTIONS,
        reelSetupState.reelType
    );
    const recommendation = getReelBeginnerLineRecommendation(reelSetupState.reelType);
    const recommendedLine = getReelLineType(recommendation?.lineTypeId);

    if (!reelTypeOption || !recommendation || !recommendedLine) {
        reelSetupState.stepId = REEL_SETUP_STEP_IDS.LINE_SELECTION;
        renderReelSetupLineSelectionStep(appMain);
        return;
    }

    renderReelSetupStep(appMain, {
        headingId: "reel-setup-title",
        title: "Beginner Line Starting Point",
        description: `${recommendation.label}: ${recommendedLine.title}. ${recommendation.reason} This is a starting point, not a required line; line strength and equipment compatibility are checked later.`,
        cards: [
            {
                id: "use-recommended-line",
                title: `Use ${recommendedLine.title}`,
                description: recommendedLine.selectionDescription,
                isAvailable: true
            },
            {
                id: "compare-line-types",
                title: "Compare the Line Types",
                description: "Return to Monofilament, Fluorocarbon, and Braid to choose directly.",
                isAvailable: true
            },
            {
                id: "identify-existing-line",
                title: "I'm Not Sure What Line I Have",
                description: "Use simple visual and handling cues before choosing.",
                isAvailable: true
            }
        ],
        onCardSelect: (actionId) => {
            if (actionId === "use-recommended-line") {
                selectReelSetupLineType(recommendedLine.id);
                return;
            }

            if (actionId === "compare-line-types") {
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.LINE_SELECTION;
                showView(ROUTES.REEL_SETUP);
                return;
            }

            if (actionId === "identify-existing-line") {
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.LINE_IDENTIFICATION;
                showView(ROUTES.REEL_SETUP);
            }
        }
    });
}

function renderReelSetupLineIdentificationStep(appMain) {
    const identificationCards = Object.values(REEL_LINE_TYPE_GUIDANCE).map((lineType) => ({
        id: lineType.id,
        title: lineType.title,
        description: lineType.identificationCue,
        isAvailable: true
    }));

    renderReelSetupStep(appMain, {
        headingId: "reel-setup-title",
        title: "Which Line Looks Like Yours?",
        description: "Use these cues only as a practical check. If you still cannot identify the line confidently, choose Help Me Choose instead of guessing.",
        cards: [
            ...identificationCards,
            {
                id: "help-me-choose",
                title: "Still Not Sure — Help Me Choose",
                description: "Use the beginner starting recommendation for your selected reel type.",
                isAvailable: true
            },
            {
                id: "back-to-line-selection",
                title: "Back to Line Choices",
                description: "Return without selecting a line type.",
                isAvailable: true
            }
        ],
        onCardSelect: (optionId) => {
            if (getReelLineType(optionId)) {
                selectReelSetupLineType(optionId);
                return;
            }

            if (optionId === "help-me-choose") {
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.LINE_HELP;
                showView(ROUTES.REEL_SETUP);
                return;
            }

            if (optionId === "back-to-line-selection") {
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.LINE_SELECTION;
                showView(ROUTES.REEL_SETUP);
            }
        }
    });
}

function renderReelSetupLineSelectionComplete(appMain) {
    const entryOption = getReelSetupOption(
        REEL_SETUP_ENTRY_OPTIONS,
        reelSetupState.entryMode
    );
    const reelTypeOption = getReelSetupOption(
        REEL_TYPE_OPTIONS,
        reelSetupState.reelType
    );
    const lineType = getReelLineType(reelSetupState.lineType);

    if (!entryOption || !reelTypeOption || !lineType) {
        reelSetupState.lineType = null;
        reelSetupState.stepId = REEL_SETUP_STEP_IDS.LINE_SELECTION;
        renderReelSetupLineSelectionStep(appMain);
        return;
    }

    const compatibilityNote = getReelLineCompatibilityNote(
        reelSetupState.reelType,
        reelSetupState.lineType
    );
    const compatibilityText = compatibilityNote ? ` ${compatibilityNote}` : "";

    renderReelSetupStep(appMain, {
        headingId: "reel-setup-title",
        title: "Line Choice Check",
        description: `${lineType.beginnerGuidance} ${lineType.tradeoff}${compatibilityText}`,
        cards: [
            {
                id: "continue-to-target-fish",
                title: "Continue — Choose Target Fish",
                description: "Use your target fish to set a beginner starting line-strength range.",
                isAvailable: true
            },
            {
                id: "change-line-type",
                title: "Change Line Choice",
                description: "Return to the line-selection step without losing the setup mode or reel type.",
                isAvailable: true
            },
            {
                id: "change-reel-type",
                title: "Change Reel Type",
                description: "Return to reel identification while preserving the setup mode.",
                isAvailable: true
            },
            {
                id: "start-reel-setup-over",
                title: "Start Over",
                description: "Clear the temporary Reel Setup state and return to the first step.",
                isAvailable: true
            },
            {
                id: "return-to-knots",
                title: "Return to Knots",
                description: "Leave the internal Package 3 route and return to the Knot Guide.",
                isAvailable: true
            }
        ],
        onCardSelect: (actionId) => {
            if (actionId === "continue-to-target-fish") {
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.TARGET_FISH;
                showView(ROUTES.REEL_SETUP);
                return;
            }

            if (actionId === "change-line-type") {
                reelSetupState.lineType = null;
                reelSetupState.targetFish = null;
                reelSetupState.equipmentCheck = null;
                reelSetupState.backingChoice = null;
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.LINE_SELECTION;
                showView(ROUTES.REEL_SETUP);
                return;
            }

            if (actionId === "change-reel-type") {
                reelSetupState.reelType = null;
                reelSetupState.lineType = null;
                reelSetupState.targetFish = null;
                reelSetupState.equipmentCheck = null;
                reelSetupState.backingChoice = null;
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.REEL_TYPE;
                showView(ROUTES.REEL_SETUP);
                return;
            }

            if (actionId === "start-reel-setup-over") {
                openReelSetup();
                return;
            }

            if (actionId === "return-to-knots") {
                resetReelSetupState();
                showView(ROUTES.KNOTS);
            }
        }
    });

}

function getReelTargetStrengthGuidance(targetProfile, lineType) {
    if (!targetProfile || !lineType) return "";

    if (lineType.id === "braid") {
        return `Recommended fish-strength reference: ${targetProfile.recommendedRange}. ` +
            `${targetProfile.guidance} Because braid is much thinner than monofilament or fluorocarbon at the same breaking strength, ` +
            `do not treat ${targetProfile.easyChoice} as the final braid purchase size. The next equipment-compatibility step will compare your reel and rod markings before the braid test is finalized. ` +
            targetProfile.caution;
    }

    return `Recommended starting range: ${targetProfile.recommendedRange}. ` +
        `Easy beginner choice: ${targetProfile.easyChoice}. ${targetProfile.guidance} ` +
        `This is a starting point, not a requirement; the next equipment-compatibility step will compare the choice with your reel and rod ratings. ` +
        targetProfile.caution;
}

function renderReelSetupTargetFishStep(appMain) {
    const lineType = getReelLineType(reelSetupState.lineType);
    if (!lineType) {
        reelSetupState.targetFish = null;
        reelSetupState.stepId = REEL_SETUP_STEP_IDS.LINE_SELECTION;
        renderReelSetupLineSelectionStep(appMain);
        return;
    }

    renderReelSetupStep(appMain, {
        headingId: "reel-setup-title",
        title: "What Are You Fishing For?",
        description: "Choose the closest beginner target. This sets a starting line-strength range without trying to optimize for every lure, cover type, or technique.",
        cards: REEL_TARGET_FISH_PROFILES.map((profile) => ({
            id: profile.id,
            title: profile.title,
            description: profile.description,
            isAvailable: true
        })),
        onCardSelect: (targetFishId) => {
            if (!getReelSetupTargetFish(targetFishId)) return;
            reelSetupState.targetFish = targetFishId;
            reelSetupState.equipmentCheck = null;
                reelSetupState.backingChoice = null;
            reelSetupState.stepId = REEL_SETUP_STEP_IDS.TARGET_GUIDANCE;
            showView(ROUTES.REEL_SETUP);
        }
    });
}

function renderReelSetupTargetGuidanceStep(appMain) {
    const lineType = getReelLineType(reelSetupState.lineType);
    const targetProfile = getReelSetupTargetFish(reelSetupState.targetFish);

    if (!lineType || !targetProfile) {
        reelSetupState.targetFish = null;
        reelSetupState.equipmentCheck = null;
        reelSetupState.backingChoice = null;
        reelSetupState.stepId = REEL_SETUP_STEP_IDS.TARGET_FISH;
        renderReelSetupTargetFishStep(appMain);
        return;
    }

    renderReelSetupStep(appMain, {
        headingId: "reel-setup-title",
        title: "Starting Line Strength",
        description: getReelTargetStrengthGuidance(targetProfile, lineType),
        cards: [
            {
                id: "continue-to-equipment-check",
                title: "Next — Check Reel & Rod Compatibility",
                description: "Compare this starting guidance with the line-capacity and line-rating markings on your actual equipment.",
                isAvailable: true
            },
            {
                id: "change-target-fish",
                title: "Change Target Fish",
                description: "Return to the target-fish choices while keeping your reel and line selections.",
                isAvailable: true
            },
            {
                id: "change-line-type",
                title: "Change Line Choice",
                description: "Return to line selection; the target-fish choice will be cleared because the guidance depends on the line system.",
                isAvailable: true
            },
            {
                id: "start-reel-setup-over",
                title: "Start Over",
                description: "Clear the temporary Reel Setup state and return to the first step.",
                isAvailable: true
            },
            {
                id: "return-to-knots",
                title: "Return to Knots",
                description: "Leave the internal Package 3 route and return to the Knot Guide.",
                isAvailable: true
            }
        ],
        onCardSelect: (actionId) => {
            if (actionId === "continue-to-equipment-check") {
                reelSetupState.equipmentCheck = null;
                reelSetupState.backingChoice = null;
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.EQUIPMENT_CHECK;
                showView(ROUTES.REEL_SETUP);
                return;
            }

            if (actionId === "change-target-fish") {
                reelSetupState.targetFish = null;
                reelSetupState.equipmentCheck = null;
                reelSetupState.backingChoice = null;
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.TARGET_FISH;
                showView(ROUTES.REEL_SETUP);
                return;
            }

            if (actionId === "change-line-type") {
                reelSetupState.lineType = null;
                reelSetupState.targetFish = null;
                reelSetupState.equipmentCheck = null;
                reelSetupState.backingChoice = null;
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.LINE_SELECTION;
                showView(ROUTES.REEL_SETUP);
                return;
            }

            if (actionId === "start-reel-setup-over") {
                openReelSetup();
                return;
            }

            if (actionId === "return-to-knots") {
                resetReelSetupState();
                showView(ROUTES.KNOTS);
            }
        }
    });
}

function getReelEquipmentCheckDescription(targetProfile, lineType) {
    if (!targetProfile || !lineType) return "";

    if (lineType.id === "braid") {
        return `For ${targetProfile.title}, keep ${targetProfile.recommendedRange} as a fish-strength reference. ` +
            "Choose an actual braid test only after confirming the reel's Braid capacity and the rod's line rating.";
    }

    return `Start by checking whether ${targetProfile.easyChoice} ${lineType.title.toLowerCase()} fits both ` +
        "the reel's capacity guidance and the rod's line rating. If it does not, use the markings on your equipment rather than forcing the starting recommendation.";
}

function getReelEquipmentConfirmationDescription(targetProfile, lineType) {
    if (!targetProfile || !lineType) return "";

    if (lineType.id === "braid") {
        return "You confirmed that the braid size you intend to use fits your reel's Braid capacity and your rod's line rating. The next step decides whether backing is needed before the main line is attached to the spool.";
    }

    return `You confirmed that your ${lineType.title.toLowerCase()} choice for ${targetProfile.title} fits both ` +
        "your reel's capacity guidance and your rod's line rating. The next step decides whether backing is needed before the main line is attached to the spool.";
}

function renderReelSetupEquipmentCheckStep(appMain) {
    const reelType = getReelSetupOption(REEL_TYPE_OPTIONS, reelSetupState.reelType);
    const lineType = getReelLineType(reelSetupState.lineType);
    const targetProfile = getReelSetupTargetFish(reelSetupState.targetFish);

    if (!reelType) {
        reelSetupState.stepId = REEL_SETUP_STEP_IDS.REEL_IDENTIFICATION_HELP;
        renderReelSetupReelIdentificationHelpStep(appMain);
        return;
    }

    if (!lineType || !targetProfile) {
        reelSetupState.equipmentCheck = null;
                reelSetupState.backingChoice = null;
        reelSetupState.stepId = REEL_SETUP_STEP_IDS.TARGET_FISH;
        renderReelSetupTargetFishStep(appMain);
        return;
    }

    renderReelSetupStep(appMain, {
        headingId: "reel-setup-title",
        title: "Check Your Reel & Rod",
        description: getReelEquipmentCheckDescription(targetProfile, lineType),
        cards: [
            {
                id: "read-reel",
                title: "How to Read Your Reel",
                description: "Learn how pound-test, yards, meters, diameter, Mono/Braid labels, and reel size numbers differ.",
                isAvailable: true
            },
            {
                id: "read-rod",
                title: "How to Read Your Rod",
                description: "Find the rod's line rating and keep it separate from the lure-weight rating.",
                isAvailable: true
            },
            {
                id: "confirm-equipment-match",
                title: "My Reel & Rod Support This Setup",
                description: "Continue only after the intended line fits both pieces of equipment.",
                isAvailable: true
            },
            {
                id: "equipment-mismatch",
                title: "Something Doesn't Match / I'm Not Sure",
                description: "Pause before spooling and use the markings to adjust the line choice or equipment.",
                isAvailable: true
            }
        ],
        onCardSelect: (actionId) => {
            if (actionId === "read-reel") {
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.READ_REEL;
                showView(ROUTES.REEL_SETUP);
                return;
            }

            if (actionId === "read-rod") {
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.READ_ROD;
                showView(ROUTES.REEL_SETUP);
                return;
            }

            if (actionId === "confirm-equipment-match") {
                reelSetupState.equipmentCheck = "compatible";
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.EQUIPMENT_COMPLETE;
                showView(ROUTES.REEL_SETUP);
                return;
            }

            if (actionId === "equipment-mismatch") {
                reelSetupState.equipmentCheck = null;
                reelSetupState.backingChoice = null;
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.EQUIPMENT_MISMATCH;
                showView(ROUTES.REEL_SETUP);
            }
        }
    });
}

function renderReelSetupReadReelStep(appMain) {
    renderReelSetupStep(appMain, {
        headingId: "reel-setup-title",
        title: "How to Read Your Reel",
        description: "Use the printed labels or the exact model's official specification. Capacity formats vary, so read the units before interpreting the numbers.",
        cards: [
            {
                id: "back-to-equipment-check",
                title: "Back to Equipment Check",
                description: "Return and compare your reel and rod against the selected line system.",
                isAvailable: true
            },
            {
                id: "read-rod",
                title: "How to Read Your Rod",
                description: "Review the rod line-rating markings next.",
                isAvailable: true
            },
            {
                id: "equipment-mismatch",
                title: "Something Doesn't Match / I'm Not Sure",
                description: "Use the adjustment path before spooling if the reel guidance does not support the intended line.",
                isAvailable: true
            }
        ],
        onCardSelect: (actionId) => {
            if (actionId === "back-to-equipment-check") {
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.EQUIPMENT_CHECK;
                showView(ROUTES.REEL_SETUP);
                return;
            }
            if (actionId === "read-rod") {
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.READ_ROD;
                showView(ROUTES.REEL_SETUP);
                return;
            }
            if (actionId === "equipment-mismatch") {
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.EQUIPMENT_MISMATCH;
                showView(ROUTES.REEL_SETUP);
            }
        }
    });

    renderReelSetupGuidanceList(appMain, REEL_EQUIPMENT_GUIDANCE.reel);
}

function renderReelSetupReadRodStep(appMain) {
    renderReelSetupStep(appMain, {
        headingId: "reel-setup-title",
        title: "How to Read Your Rod",
        description: "The rod's line rating is a separate equipment limit from the reel's line-capacity marking.",
        cards: [
            {
                id: "back-to-equipment-check",
                title: "Back to Equipment Check",
                description: "Return and compare your reel and rod against the selected line system.",
                isAvailable: true
            },
            {
                id: "read-reel",
                title: "How to Read Your Reel",
                description: "Review the reel capacity markings next.",
                isAvailable: true
            },
            {
                id: "equipment-mismatch",
                title: "Something Doesn't Match / I'm Not Sure",
                description: "Use the adjustment path before spooling if the rod rating does not support the intended line.",
                isAvailable: true
            }
        ],
        onCardSelect: (actionId) => {
            if (actionId === "back-to-equipment-check") {
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.EQUIPMENT_CHECK;
                showView(ROUTES.REEL_SETUP);
                return;
            }
            if (actionId === "read-reel") {
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.READ_REEL;
                showView(ROUTES.REEL_SETUP);
                return;
            }
            if (actionId === "equipment-mismatch") {
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.EQUIPMENT_MISMATCH;
                showView(ROUTES.REEL_SETUP);
            }
        }
    });

    renderReelSetupGuidanceList(appMain, REEL_EQUIPMENT_GUIDANCE.rod);
}

function renderReelSetupEquipmentMismatchStep(appMain) {
    renderReelSetupStep(appMain, {
        headingId: "reel-setup-title",
        title: "Pause Before Spooling",
        description: "If either piece of equipment does not support the intended line system, adjust the setup before line goes on the reel.",
        cards: [
            {
                id: "read-reel",
                title: "Review Reel Markings",
                description: "Return to the reel-capacity guide.",
                isAvailable: true
            },
            {
                id: "read-rod",
                title: "Review Rod Markings",
                description: "Return to the rod line-rating guide.",
                isAvailable: true
            },
            {
                id: "change-target-fish",
                title: "Change Target Fish",
                description: "Choose a different target reference while keeping the reel and line selections.",
                isAvailable: true
            },
            {
                id: "change-line-type",
                title: "Change Line Choice",
                description: "Return to line selection and clear the target-fish guidance.",
                isAvailable: true
            },
            {
                id: "change-reel-type",
                title: "Change Reel Type",
                description: "Return to reel identification while preserving the setup mode.",
                isAvailable: true
            },
            {
                id: "back-to-equipment-check",
                title: "Back to Equipment Check",
                description: "Return after verifying or adjusting the equipment markings.",
                isAvailable: true
            },
            {
                id: "start-reel-setup-over",
                title: "Start Over",
                description: "Clear the temporary Reel Setup state and return to the first step.",
                isAvailable: true
            }
        ],
        onCardSelect: (actionId) => {
            if (actionId === "read-reel") {
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.READ_REEL;
                showView(ROUTES.REEL_SETUP);
                return;
            }
            if (actionId === "read-rod") {
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.READ_ROD;
                showView(ROUTES.REEL_SETUP);
                return;
            }
            if (actionId === "change-target-fish") {
                reelSetupState.targetFish = null;
                reelSetupState.equipmentCheck = null;
                reelSetupState.backingChoice = null;
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.TARGET_FISH;
                showView(ROUTES.REEL_SETUP);
                return;
            }
            if (actionId === "change-line-type") {
                reelSetupState.lineType = null;
                reelSetupState.targetFish = null;
                reelSetupState.equipmentCheck = null;
                reelSetupState.backingChoice = null;
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.LINE_SELECTION;
                showView(ROUTES.REEL_SETUP);
                return;
            }
            if (actionId === "change-reel-type") {
                reelSetupState.reelType = null;
                reelSetupState.lineType = null;
                reelSetupState.targetFish = null;
                reelSetupState.equipmentCheck = null;
                reelSetupState.backingChoice = null;
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.REEL_TYPE;
                showView(ROUTES.REEL_SETUP);
                return;
            }
            if (actionId === "back-to-equipment-check") {
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.EQUIPMENT_CHECK;
                showView(ROUTES.REEL_SETUP);
                return;
            }
            if (actionId === "start-reel-setup-over") {
                openReelSetup();
            }
        }
    });

    renderReelSetupGuidanceList(appMain, REEL_EQUIPMENT_GUIDANCE.mismatch);
}

function renderReelSetupEquipmentCompleteStep(appMain) {
    const lineType = getReelLineType(reelSetupState.lineType);
    const targetProfile = getReelSetupTargetFish(reelSetupState.targetFish);

    if (!lineType || !targetProfile || reelSetupState.equipmentCheck !== "compatible") {
        reelSetupState.equipmentCheck = null;
        reelSetupState.backingChoice = null;
        reelSetupState.stepId = REEL_SETUP_STEP_IDS.EQUIPMENT_CHECK;
        renderReelSetupEquipmentCheckStep(appMain);
        return;
    }

    renderReelSetupStep(appMain, {
        headingId: "reel-setup-title",
        title: "Equipment Compatibility Check",
        description: getReelEquipmentConfirmationDescription(targetProfile, lineType),
        cards: [
            {
                id: "backing-decision-next",
                title: "Next — Decide on Backing",
                description: "Choose whether the selected main line should attach directly to the spool or use monofilament backing first.",
                isAvailable: true
            },
            {
                id: "read-reel",
                title: "Review Reel Markings",
                description: "Reopen the reel-capacity guide without clearing your selections.",
                isAvailable: true
            },
            {
                id: "read-rod",
                title: "Review Rod Markings",
                description: "Reopen the rod line-rating guide without clearing your selections.",
                isAvailable: true
            },
            {
                id: "change-target-fish",
                title: "Change Target Fish",
                description: "Choose a different target reference while keeping the reel and line selections.",
                isAvailable: true
            },
            {
                id: "change-line-type",
                title: "Change Line Choice",
                description: "Return to line selection and clear dependent guidance.",
                isAvailable: true
            },
            {
                id: "change-reel-type",
                title: "Change Reel Type",
                description: "Return to reel identification while preserving the setup mode.",
                isAvailable: true
            },
            {
                id: "start-reel-setup-over",
                title: "Start Over",
                description: "Clear the temporary Reel Setup state and return to the first step.",
                isAvailable: true
            },
            {
                id: "return-to-knots",
                title: "Return to Knots",
                description: "Leave the internal Package 3 route and return to the Knot Guide.",
                isAvailable: true
            }
        ],
        onCardSelect: (actionId) => {
            if (actionId === "backing-decision-next") {
                reelSetupState.backingChoice = null;
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.BACKING_DECISION;
                showView(ROUTES.REEL_SETUP);
                return;
            }
            if (actionId === "read-reel") {
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.READ_REEL;
                showView(ROUTES.REEL_SETUP);
                return;
            }
            if (actionId === "read-rod") {
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.READ_ROD;
                showView(ROUTES.REEL_SETUP);
                return;
            }
            if (actionId === "change-target-fish") {
                reelSetupState.targetFish = null;
                reelSetupState.equipmentCheck = null;
                reelSetupState.backingChoice = null;
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.TARGET_FISH;
                showView(ROUTES.REEL_SETUP);
                return;
            }
            if (actionId === "change-line-type") {
                reelSetupState.lineType = null;
                reelSetupState.targetFish = null;
                reelSetupState.equipmentCheck = null;
                reelSetupState.backingChoice = null;
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.LINE_SELECTION;
                showView(ROUTES.REEL_SETUP);
                return;
            }
            if (actionId === "change-reel-type") {
                reelSetupState.reelType = null;
                reelSetupState.lineType = null;
                reelSetupState.targetFish = null;
                reelSetupState.equipmentCheck = null;
                reelSetupState.backingChoice = null;
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.REEL_TYPE;
                showView(ROUTES.REEL_SETUP);
                return;
            }
            if (actionId === "start-reel-setup-over") {
                openReelSetup();
                return;
            }
            if (actionId === "return-to-knots") {
                resetReelSetupState();
                showView(ROUTES.KNOTS);
            }
        }
    });
}

function getReelBackingChoice(backingChoiceId) {
    return REEL_BACKING_CHOICES[backingChoiceId] ?? null;
}

function getReelBackingCards(lineType) {
    if (!lineType) return [];

    if (lineType.id === "braid") {
        return [
            {
                ...REEL_BACKING_CHOICES["monofilament-backing"],
                isAvailable: true
            },
            {
                ...REEL_BACKING_CHOICES["direct-braid-approved"],
                isAvailable: true
            },
            {
                id: "review-reel-guidance",
                title: "Review Reel Markings First",
                description: "Return to the reel-capacity guide if you cannot confirm whether this spool is designed for direct braid.",
                isAvailable: true
            }
        ];
    }

    return [
        {
            ...REEL_BACKING_CHOICES.none,
            isAvailable: true
        },
        {
            ...REEL_BACKING_CHOICES["monofilament-backing"],
            isAvailable: true
        }
    ];
}

function selectReelSetupBackingChoice(backingChoiceId) {
    const backingChoice = getReelBackingChoice(backingChoiceId);
    const lineType = getReelLineType(reelSetupState.lineType);
    if (!backingChoice || !lineType || reelSetupState.equipmentCheck !== "compatible") return false;

    if (lineType.id === "braid" && backingChoiceId === "none") return false;
    if (lineType.id !== "braid" && backingChoiceId === "direct-braid-approved") return false;

    reelSetupState.backingChoice = backingChoiceId;
    reelSetupState.stepId = REEL_SETUP_STEP_IDS.SPOOL_CONNECTION_PLAN;
    showView(ROUTES.REEL_SETUP);
    return true;
}

function renderReelSetupBackingDecisionStep(appMain) {
    const lineType = getReelLineType(reelSetupState.lineType);
    if (!lineType || reelSetupState.equipmentCheck !== "compatible") {
                reelSetupState.backingChoice = null;
        reelSetupState.stepId = REEL_SETUP_STEP_IDS.EQUIPMENT_CHECK;
        renderReelSetupEquipmentCheckStep(appMain);
        return;
    }

    const description = lineType.id === "braid"
        ? "Braid can slip on a smooth spool. Use monofilament backing as the general beginner path unless your exact reel or spool explicitly supports secure direct-braid attachment."
        : `For ${lineType.title}, the simplest beginner path is direct spool attachment. Monofilament backing is optional when you deliberately want to reduce the amount of main line needed to fill the spool.`;

    renderReelSetupStep(appMain, {
        headingId: "reel-setup-title",
        title: "Do You Need Backing?",
        description,
        cards: [
            ...getReelBackingCards(lineType),
            {
                id: "start-reel-setup-over",
                title: "Start Over",
                description: "Clear the temporary Reel Setup state and return to the first step.",
                isAvailable: true
            }
        ],
        onCardSelect: (actionId) => {
            if (getReelBackingChoice(actionId)) {
                selectReelSetupBackingChoice(actionId);
                return;
            }
            if (actionId === "review-reel-guidance") {
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.READ_REEL;
                showView(ROUTES.REEL_SETUP);
                return;
            }
            if (actionId === "start-reel-setup-over") {
                openReelSetup();
            }
        }
    });
}

function getReelSpoolConnectionPlan(lineType, backingChoice) {
    if (!lineType || !backingChoice) return null;

    if (backingChoice.id === "monofilament-backing") {
        return {
            description: `Attach the monofilament backing to the spool first, then join the backing to ${lineType.title}. Canonical Knot instructions stay in the Knot Guide and open from the actions below.`,
            knotActions: [
                { id: "view-arbor-knot", knotId: "arbor-knot", title: "View Arbor Knot", description: "Use the Arbor Knot to secure the monofilament backing to the reel spool." },
                { id: "view-double-uni-knot", knotId: "double-uni-knot", title: "View Double Uni Knot", description: `Use the Double Uni Knot to join the monofilament backing to ${lineType.title}.` }
            ]
        };
    }

    if (backingChoice.id === "direct-braid-approved") {
        return {
            description: "Your reel or spool must explicitly support secure direct-braid attachment. Follow that reel manufacturer's attachment method; the generic Arbor Knot is not presented as a direct-braid spool knot.",
            knotActions: []
        };
    }

    return {
        description: `Attach ${lineType.title} directly to the reel spool. The canonical Arbor Knot instructions open from the action below.`,
        knotActions: [
            { id: "view-arbor-knot", knotId: "arbor-knot", title: "View Arbor Knot", description: `Use the Arbor Knot to secure ${lineType.title} to the reel spool before winding line.` }
        ]
    };
}

function openKnotDetailFromReelSetup(knotId) {
    const knot = findRecordById(KNOT_DATA, knotId);
    if (!knot || knot.isActive !== true) {
        console.warn(`Reel Setup Knot could not be opened: ${knotId}`);
        return;
    }

    pushDetailNavigationContext({
        route: ROUTES.REEL_SETUP,
        label: "Spool Connection Plan",
        state: {
            reelSetupState: { ...reelSetupState }
        }
    });

    selectedKnotId = knotId;
    selectedKnotDetailSource = "reel-setup";
    showView(ROUTES.KNOT_DETAIL);
}

function renderReelSetupSpoolConnectionPlanStep(appMain) {
    const lineType = getReelLineType(reelSetupState.lineType);
    const backingChoice = getReelBackingChoice(reelSetupState.backingChoice);
    const plan = getReelSpoolConnectionPlan(lineType, backingChoice);

    if (!lineType || !backingChoice || !plan || reelSetupState.equipmentCheck !== "compatible") {
                reelSetupState.backingChoice = null;
        reelSetupState.stepId = REEL_SETUP_STEP_IDS.BACKING_DECISION;
        renderReelSetupBackingDecisionStep(appMain);
        return;
    }

    renderReelSetupStep(appMain, {
        headingId: "reel-setup-title",
        title: "Spool Connection Plan",
        description: plan.description,
        cards: [
            ...plan.knotActions.map((action) => ({
                id: action.id,
                title: action.title,
                description: action.description,
                isAvailable: true
            })),
            {
                id: "spool-reel-next",
                title: "Next — Spool the Reel",
                description: "The next build block adds reel-specific line routing, winding tension, and spool-fill instructions.",
                isAvailable: false
            },
            {
                id: "change-backing-choice",
                title: "Change Backing Choice",
                description: "Return to the backing decision while preserving the verified reel, rod, line, and target selections.",
                isAvailable: true
            },
            {
                id: "start-reel-setup-over",
                title: "Start Over",
                description: "Clear the temporary Reel Setup state and return to the first step.",
                isAvailable: true
            },
            {
                id: "return-to-knots",
                title: "Return to Knots",
                description: "Leave the internal Package 3 route and return to the Knot Guide.",
                isAvailable: true
            }
        ],
        onCardSelect: (actionId) => {
            const knotAction = plan.knotActions.find((action) => action.id === actionId);
            if (knotAction) {
                openKnotDetailFromReelSetup(knotAction.knotId);
                return;
            }
            if (actionId === "change-backing-choice") {
                reelSetupState.backingChoice = null;
                reelSetupState.stepId = REEL_SETUP_STEP_IDS.BACKING_DECISION;
                showView(ROUTES.REEL_SETUP);
                return;
            }
            if (actionId === "start-reel-setup-over") {
                openReelSetup();
                return;
            }
            if (actionId === "return-to-knots") {
                resetReelSetupState();
                showView(ROUTES.KNOTS);
            }
        }
    });
}

function getActiveKnots() {
    return KNOT_DATA.filter((knot) => knot.isActive === true);
}

function getKnotTask(taskId) {
    return KNOT_TASK_DEFINITIONS.find((task) => task.id === taskId) ?? null;
}

function getCoreKnots(activeKnots = getActiveKnots()) {
    return CORE_KNOT_IDS
        .map((knotId) => findRecordById(activeKnots, knotId))
        .filter(Boolean);
}

function openKnotDetail(knotId, source = "guide") {
    clearDetailNavigationStack();
    selectedKnotId = knotId;
    selectedKnotDetailSource = source;
    showView(ROUTES.KNOT_DETAIL);
}

function renderKnotsView(appMain) {
    const collectionCards = Object.entries(KNOT_COLLECTIONS).map(([key, collection]) => ({
        key,
        ...collection
    }));

    renderKnotGuideLanding(appMain, {
        tasks: KNOT_TASK_DEFINITIONS,
        collections: collectionCards,
        onSearch: (query) => updateKnotGuideSearchResults(appMain, query),
        onTaskSelect: (taskId) => {
            selectedKnotBrowseKey = "task";
            selectedKnotTaskId = taskId;
            showView(ROUTES.KNOT_BROWSE);
        },
        onCollectionSelect: (collectionKey) => {
            if (!KNOT_COLLECTIONS[collectionKey]?.isAvailable) return;
            selectedKnotBrowseKey = collectionKey;
            selectedKnotTaskId = null;
            showView(ROUTES.KNOT_BROWSE);
        }
    });
}

function updateKnotGuideSearchResults(appMain, query) {
    const matches = searchKnotRecords(
        getActiveKnots(),
        query,
        KNOT_TASK_DEFINITIONS
    );

    renderSearchResults(appMain, matches, {
        emptyMessage: "No knots matched. Try a Knot name, a task such as ‘tie hook’ or ‘add leader’, or a line type such as braid.",
        renderRecord: buildKnotResultCardMarkup,
        onResultSelect: (knotId) => openKnotDetail(knotId, "guide")
    });
}

function getKnotBrowseConfig() {
    const activeKnots = getActiveKnots();

    if (selectedKnotBrowseKey === "task") {
        const task = getKnotTask(selectedKnotTaskId);
        if (task) {
            const isReelSetupEntry = task.id === "attach-line-to-reel";
            return {
                title: isReelSetupEntry ? "Get Your Reel Ready" : task.title,
                description: isReelSetupEntry
                    ? "Start with the knots used to secure line or backing to the reel. The full guided reel-setup workflow arrives in Production Package 3 through this same entry point."
                    : task.description,
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
    } else if (selectedKnotBrowseKey === "advanced") {
        records = sortRecordsAlphabetically(activeKnots.filter((knot) => knot.difficulty === "Advanced"));
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
    renderSearchView(appMain, {
        headingId: "knot-browse-title",
        inputId: "knot-browse-search-input",
        title: browseConfig.title,
        description: browseConfig.description,
        label: "Search this Knot group",
        placeholder: "Try Palomar, leader, braid, or beginner",
        parentLabel: "Knots",
        onParent: () => showView(ROUTES.KNOTS),
        onSearch: (query) => updateKnotBrowseResults(appMain, query)
    });
}

function updateKnotBrowseResults(appMain, query) {
    const browseConfig = getKnotBrowseConfig();
    const normalizedQuery = normalizeKnotSearchText(query);
    const records = normalizedQuery
        ? searchKnotRecords(browseConfig.records, query, KNOT_TASK_DEFINITIONS)
        : browseConfig.records;

    renderSearchResults(appMain, records, {
        emptyMessage: "No knots in this group matched. Try the Knot name, task, line type, or difficulty.",
        renderRecord: buildKnotResultCardMarkup,
        onResultSelect: (knotId) => openKnotDetail(knotId, "browse")
    });
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

    const fromBrowse = selectedKnotDetailSource === "browse";
    const browseConfig = getKnotBrowseConfig();
    renderKnotInstructionDetail(appMain, {
        record: knot,
        usageContexts: getKnotUsageContexts(knot.id),
        parentLabel: hasReturnContext
            ? returnContext.label
            : (fromBrowse ? browseConfig.title : "Knots"),
        onParent: hasReturnContext
            ? returnToDetailNavigationContext
            : () => showView(fromBrowse ? ROUTES.KNOT_BROWSE : ROUTES.KNOTS),
        onRigSelect: openRigDetailFromKnot
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
