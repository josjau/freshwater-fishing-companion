/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: guides/knots-guide-controller.js
   PURPOSE: Extracted owner functions and contracts from approved pre-migration source.
   ========================================================== */

"use strict";

/* ==========================================================
   KNOTS GUIDE — STATE + DATA ACCESS + CONTROLLERS
   ========================================================== */

let selectedKnotId = null;
let selectedKnotBrowseKey = "all";
let selectedKnotTaskId = null;
let selectedKnotDetailSource = "guide";
let knotGuideState = { query: "", scrollY: 0 };
let knotBrowseState = { query: "", scrollY: 0 };


/* ==========================================================
   KNOTS GUIDE — DETAIL STATE + CONTROLLERS
   ========================================================== */

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

    // Retain the originating Knot when following its Common Task result list.
    // Parent then unwinds Detail -> Task results -> originating Detail.
    const fromKnotDetailTask = source === "browse" &&
        selectedKnotBrowseKey === "task" &&
        peekDetailNavigationContext()?.route === ROUTES.KNOT_DETAIL;
    if (!fromKnotDetailTask) clearDetailNavigationStack();
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
    if (!task) return;

    // Preserve Detail return context when available, but never make the
    // destination action a no-op merely because context capture failed.
    pushCurrentKnotDetailContext(`task:${taskId}`);

    if (taskId === "attach-line-to-reel") {
        startNewReelSetup();
        showView(ROUTES.REEL_SETUP);
        return;
    }

    selectedKnotBrowseKey = "task";
    selectedKnotTaskId = taskId;
    knotBrowseState = { query: "", scrollY: 0 };
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
    const collectionCards = Object.entries(KNOT_COLLECTIONS)
        .filter(([key]) => key !== "core")
        .map(([key, collection]) => ({
            key,
            ...collection
        }));

    renderKnotGuideLanding(appMain, {
        tasks: KNOT_LANDING_TASK_DEFINITIONS,
        collections: collectionCards,
        reelSetupContextLines: getRigReelSetupContextLines(),
        initialQuery: knotGuideState.query,
        onQueryChange: (query) => {
            knotGuideState.query = query.trim();
        },
        onSearch: (query) => updateKnotGuideSearchResults(appMain, query),
        onWorkflowSelect: () => {
            knotGuideState.scrollY = window.scrollY;
            openReelSetup();
        },
        onWorkflowClear: () => {
            clearCompletedReelSetupContext();
            knotGuideState = { ...knotGuideState, restoreWorkflowFocus: true };
            renderKnotsView(appMain);
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
    if (knotGuideState.restoreWorkflowFocus === true) {
        knotGuideState = { ...knotGuideState, restoreWorkflowFocus: false };
        window.requestAnimationFrame(() => {
            appMain.querySelector("[data-knot-reel-setup]")?.focus({ preventScroll: true });
        });
    }
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


/* ==========================================================
   END KNOTS GUIDE
   ========================================================== */

/* Explicit owner route contract. Registration is performed once at startup. */
function registerKnotGuideRoutes() {
    FCC_APP.registerProvider("knot-guide", {
        [ROUTES.KNOTS]: {
            render: renderKnotsView,
            restore: (state) => { knotGuideState = { ...state.knotGuideState }; }
        },
        [ROUTES.KNOT_BROWSE]: { render: renderKnotBrowseView },
        [ROUTES.KNOT_DETAIL]: {
            render: renderKnotDetailView,
            restore: (state) => {
                selectedKnotId = state.selectedKnotId;
                selectedKnotBrowseKey = state.selectedKnotBrowseKey;
                selectedKnotTaskId = state.selectedKnotTaskId;
                selectedKnotDetailSource = state.selectedKnotDetailSource;
                knotDetailState = state.knotDetailState
                    ? { ...state.knotDetailState,
                        expandedDisclosureIds: [...(state.knotDetailState.expandedDisclosureIds ?? [])] }
                    : createInitialKnotDetailState(selectedKnotId);
            }
        }
    });
}

function resetKnotGuideForHome() {
    knotGuideState = { query: "", scrollY: 0 };
    knotBrowseState = { query: "", scrollY: 0 };
}

/* ==========================================================
   KNOT GUIDE — DETERMINISTIC SCOPED SEARCH
   ========================================================== */

const KNOT_SEARCH_REPLACEMENTS = Object.freeze({
    mono: "monofilament",
    fluoro: "fluorocarbon",
    lines: "line",
    hooks: "hook",
    lures: "lure",
    swivels: "swivel",
    leaders: "leader",
    reels: "reel",
    spools: "spool",
    knots: "knot"
});

const KNOT_SEARCH_FILLER_WORDS = Object.freeze([
    "a",
    "an",
    "the",
    "for",
    "my",
    "please"
]);

function normalizeKnotSearchText(value) {
    return normalizeSearchText(value)
        .replace(/[’']/g, "")
        .replace(/[^a-z0-9]+/g, " ")
        .split(/\s+/)
        .filter(Boolean)
        .map((token) => KNOT_SEARCH_REPLACEMENTS[token] ?? token)
        .filter((token) => !KNOT_SEARCH_FILLER_WORDS.includes(token))
        .join(" ");
}

function getKnotSearchIntents(searchIntents) {
    return Array.isArray(searchIntents) ? searchIntents : [];
}

function getKnotIntentMatch(recordId, normalizedQuery, searchIntents, kind) {
    let bestMatch = null;

    getKnotSearchIntents(searchIntents).forEach((intent, intentIndex) => {
        if (intent.kind !== kind) return;

        const knotIndex = intent.knotIds?.indexOf(recordId) ?? -1;
        if (knotIndex < 0) return;

        const terms = (intent.terms ?? [])
            .map(normalizeKnotSearchText)
            .filter(Boolean);
        const exactMatch = terms.some((term) => term === normalizedQuery);
        const phraseMatch = !exactMatch && terms.some((term) =>
            term.includes(normalizedQuery) || normalizedQuery.includes(term)
        );
        if (!exactMatch && !phraseMatch) return;

        const score = kind === "specific"
            ? (exactMatch ? 800 : 600)
            : (exactMatch ? 700 : 650);
        const candidate = { score, intentIndex, knotIndex };
        if (
            !bestMatch ||
            candidate.score > bestMatch.score ||
            (
                candidate.score === bestMatch.score &&
                (
                    candidate.intentIndex < bestMatch.intentIndex ||
                    (
                        candidate.intentIndex === bestMatch.intentIndex &&
                        candidate.knotIndex < bestMatch.knotIndex
                    )
                )
            )
        ) {
            bestMatch = candidate;
        }
    });

    return bestMatch;
}

function getKnotSearchMatch(record, normalizedQuery, searchIntents) {
    const normalizedName = normalizeKnotSearchText(record.name);
    const normalizedAliases = (record.aliases ?? []).map(normalizeKnotSearchText);

    if (normalizedName === normalizedQuery) return { score: 1000, intentIndex: 999, knotIndex: 999 };
    if (normalizedAliases.includes(normalizedQuery)) return { score: 950, intentIndex: 999, knotIndex: 999 };
    if (normalizedName.startsWith(normalizedQuery)) return { score: 900, intentIndex: 999, knotIndex: 999 };
    if (normalizedAliases.some((alias) => alias.startsWith(normalizedQuery))) return { score: 850, intentIndex: 999, knotIndex: 999 };

    const specificIntentMatch = getKnotIntentMatch(
        record.id,
        normalizedQuery,
        searchIntents,
        "specific"
    );
    if (specificIntentMatch?.score === 800) return specificIntentMatch;

    const practicalIntentMatch = getKnotIntentMatch(
        record.id,
        normalizedQuery,
        searchIntents,
        "practical"
    );
    if (practicalIntentMatch) return practicalIntentMatch;

    if (
        normalizedName.includes(normalizedQuery) ||
        normalizedAliases.some((alias) => alias.includes(normalizedQuery))
    ) {
        return { score: 600, intentIndex: -1, knotIndex: -1 };
    }
    if (specificIntentMatch) return specificIntentMatch;

    const lineMatch = (record.compatibleLineTypes ?? []).some(
        (lineType) => normalizeKnotSearchText(lineType) === normalizedQuery
    );
    const difficultyMatch = normalizeKnotSearchText(record.difficulty) === normalizedQuery;
    if (lineMatch || difficultyMatch) return { score: 400, intentIndex: 999, knotIndex: 999 };

    return { score: 0, intentIndex: 999, knotIndex: 999 };
}

function searchKnotRecords(records, query, searchIntents = []) {
    if (!Array.isArray(records)) return [];

    const normalizedQuery = normalizeKnotSearchText(query);
    if (!normalizedQuery) return [...records];

    return records
        .map((record, originalIndex) => ({
            record,
            originalIndex,
            ...getKnotSearchMatch(record, normalizedQuery, searchIntents)
        }))
        .filter((match) => match.score > 0)
        .sort((first, second) =>
            second.score - first.score ||
            first.intentIndex - second.intentIndex ||
            first.knotIndex - second.knotIndex ||
            first.originalIndex - second.originalIndex
        )
        .map((match) => match.record);
}
