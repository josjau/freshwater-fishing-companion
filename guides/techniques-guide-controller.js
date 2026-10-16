/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: guides/techniques-guide-controller.js
   PURPOSE: Owns Techniques Guide route registration, browse,
   Detail state, source-derived usage and origin-aware return.
   ========================================================== */

"use strict";

const TECHNIQUE_COLLECTIONS = Object.freeze({
    core: Object.freeze({
        title: "Core Techniques",
        description: "Seven useful starting techniques for learning to control a presentation and recognize strikes. Explore the others whenever you are ready."
    }),
    all: Object.freeze({
        title: "All Techniques",
        description: "Explore all 16 fishing Techniques and their detailed instructions."
    })
});

function createInitialTechniqueGuideState() {
    return { query: "", scrollY: 0, restoreFocusTarget: null };
}

function createInitialTechniqueBrowseState() {
    return { query: "", scrollY: 0, restoreFocusTarget: null };
}

function createInitialTechniqueDetailState(techniqueId = null) {
    return { techniqueId, rigsExpanded: false, expandedDisclosureIds: [], scrollY: 0, restoreScroll: false, restoreFocusTarget: null };
}

let selectedTechniqueId = null;
let selectedTechniqueCollectionKey = "all";
let techniqueGuideState = createInitialTechniqueGuideState();
let techniqueBrowseState = createInitialTechniqueBrowseState();
let techniqueDetailState = createInitialTechniqueDetailState();

function captureTechniqueDetailNavigationState(restoreFocusTarget = null) {
    return {
        selectedTechniqueId,
        selectedTechniqueCollectionKey,
        techniqueDetailState: {
            ...techniqueDetailState,
            expandedDisclosureIds: [...(techniqueDetailState.expandedDisclosureIds ?? [])],
            techniqueId: selectedTechniqueId,
            scrollY: window.scrollY,
            restoreScroll: true,
            restoreFocusTarget
        }
    };
}

function restoreTechniqueFocus(appMain, state) {
    if (!appMain || !state.restoreFocusTarget) return;
    const focus = state.restoreFocusTarget;
    window.requestAnimationFrame(() => {
        let target = null;
        if (focus.startsWith("result:")) {
            const id = focus.slice("result:".length);
            target = Array.from(appMain.querySelectorAll("[data-result-id]"))
                .find((button) => button.dataset.resultId === id);
        } else if (focus.startsWith("collection:")) {
            const key = focus.slice("collection:".length);
            target = Array.from(appMain.querySelectorAll("[data-technique-collection]"))
                .find((button) => button.dataset.techniqueCollection === key);
        } else if (focus.startsWith("rig:")) {
            const id = focus.slice("rig:".length);
            target = Array.from(appMain.querySelectorAll("[data-technique-rig-id]"))
                .find((button) => button.dataset.techniqueRigId === id);
        } else if (focus.startsWith("bait:")) {
            const id = focus.slice("bait:".length);
            target = Array.from(appMain.querySelectorAll("[data-technique-bait-id]"))
                .find((button) => button.dataset.techniqueBaitId === id);
        }
        target?.focus({ preventScroll: true });
    });
}

function restoreTechniquePageState(appMain, state, consume) {
    if (!state) return;
    if (Number.isFinite(state.scrollY) && state.scrollY > 0) {
        window.requestAnimationFrame(() => {
            window.scrollTo({ top: state.scrollY, left: 0, behavior: "auto" });
        });
    }
    restoreTechniqueFocus(appMain, state);
    if (state.restoreFocusTarget) consume();
}

function getActiveTechniqueRecords() {
    return TECHNIQUE_DATA.filter((technique) => technique.isActive === true);
}

function getTechniqueCollectionRecords() {
    const techniques = getActiveTechniqueRecords();
    if (selectedTechniqueCollectionKey !== "core") return sortRecordsAlphabetically(techniques);
    const techniqueById = new Map(techniques.map((technique) => [technique.id, technique]));
    return CORE_TECHNIQUE_IDS.map((id) => techniqueById.get(id)).filter(Boolean);
}

function getTechniqueUsageContexts(techniqueId) {
    const activeRelationships = COMPATIBILITY_RELATIONSHIPS.filter((relationship) => relationship?.isActive === true);
    const rigIds = new Set();
    const baitIds = new Set();
    activeRelationships.forEach((relationship) => {
        if (relationship.targetType !== "technique" || relationship.targetId !== techniqueId) return;
        if (relationship.relationshipType === "rig-technique" && relationship.sourceType === "rig") {
            rigIds.add(relationship.sourceId);
        } else if (relationship.relationshipType === "lure-bait-technique"
                && relationship.sourceType === "lure-bait") {
            baitIds.add(relationship.sourceId);
        }
    });
    const activeBaits = LURE_BAIT_DATA.filter((bait) => bait.isActive === true && baitIds.has(bait.id));
    const validRigBaitPairs = new Set(activeRelationships
        .filter((relationship) => relationship.relationshipType === "rig-lure-bait"
            && relationship.sourceType === "rig" && relationship.targetType === "lure-bait")
        .map((relationship) => `${relationship.sourceId}:${relationship.targetId}`));
    const rigs = sortRecordsAlphabetically(RIG_DATA
        .filter((rig) => rig.isActive === true && rigIds.has(rig.id))
        .map((rig) => ({
            ...rig,
            // Only a complete active Rig-Bait + Rig-Technique + Bait-Technique
            // intersection authorizes naming a bait for this Rig and Technique.
            compatibleBaits: sortRecordsAlphabetically(activeBaits.filter((bait) =>
                validRigBaitPairs.has(`${rig.id}:${bait.id}`)))
        })));
    return { rigs, baits: sortRecordsAlphabetically(activeBaits) };
}

function updateTechniqueGuideSearchResults(appMain, query) {
    const matches = searchRecords(getActiveTechniqueRecords(), query,
        ["name", "summary", "aboutTechnique", "presentationSteps"]);
    renderTechniqueSearchResults(appMain, matches, {
        query,
        onResultSelect: (techniqueId) => openTechniqueDetail(techniqueId, "guide")
    });
}

function renderTechniquesGuideView(appMain) {
    renderTechniqueGuideLanding(appMain, {
        initialQuery: techniqueGuideState.query,
        onQueryChange: (query) => { techniqueGuideState = { ...techniqueGuideState, query }; },
        onSearch: (query) => updateTechniqueGuideSearchResults(appMain, query),
        onCollectionSelect: openTechniqueCollection
    });
    restoreTechniquePageState(appMain, techniqueGuideState, () => {
        techniqueGuideState = { ...techniqueGuideState, restoreFocusTarget: null };
    });
}

function openTechniqueCollection(key) {
    if (!TECHNIQUE_COLLECTIONS[key]) return;
    techniqueGuideState = {
        ...techniqueGuideState,
        scrollY: window.scrollY,
        restoreFocusTarget: `collection:${key}`
    };
    selectedTechniqueCollectionKey = key;
    techniqueBrowseState = createInitialTechniqueBrowseState();
    showView(ROUTES.TECHNIQUE_BROWSE);
}

function updateTechniqueBrowseResults(appMain, query) {
    const matches = searchRecords(getTechniqueCollectionRecords(), query,
        ["name", "summary", "aboutTechnique", "presentationSteps"]);
    renderTechniqueSearchResults(appMain, matches, {
        query,
        onResultSelect: (techniqueId) => openTechniqueDetail(techniqueId, "browse")
    });
}

function renderTechniqueBrowseView(appMain) {
    const collection = TECHNIQUE_COLLECTIONS[selectedTechniqueCollectionKey] ?? TECHNIQUE_COLLECTIONS.all;
    renderTechniqueCollectionBrowse(appMain, {
        title: collection.title,
        description: collection.description,
        initialQuery: techniqueBrowseState.query,
        onQueryChange: (query) => { techniqueBrowseState = { ...techniqueBrowseState, query }; },
        onSearch: (query) => updateTechniqueBrowseResults(appMain, query),
        onParent: () => showView(ROUTES.TECHNIQUES)
    });
    restoreTechniquePageState(appMain, techniqueBrowseState, () => {
        techniqueBrowseState = { ...techniqueBrowseState, restoreFocusTarget: null };
    });
}

function openTechniqueDetail(techniqueId, source = "browse") {
    const technique = getActiveTechniqueRecords().find((record) => record.id === techniqueId);
    if (!technique) {
        console.warn(`Technique was not found: ${techniqueId}`);
        return;
    }
    // A new journey from Guide/browse begins with its own parent destination.
    clearDetailNavigationStack();
    if (source === "guide") {
        techniqueGuideState = {
            ...techniqueGuideState,
            scrollY: window.scrollY,
            restoreFocusTarget: `result:${techniqueId}`
        };
        pushDetailNavigationContext({
            route: ROUTES.TECHNIQUES,
            label: "Techniques Guide",
            state: { techniqueGuideState: { ...techniqueGuideState } }
        });
    } else {
        techniqueBrowseState = {
            ...techniqueBrowseState,
            scrollY: window.scrollY,
            restoreFocusTarget: `result:${techniqueId}`
        };
        const collection = TECHNIQUE_COLLECTIONS[selectedTechniqueCollectionKey] ?? TECHNIQUE_COLLECTIONS.all;
        pushDetailNavigationContext({
            route: ROUTES.TECHNIQUE_BROWSE,
            label: collection.title,
            state: {
                selectedTechniqueCollectionKey,
                techniqueBrowseState: { ...techniqueBrowseState }
            }
        });
    }
    selectedTechniqueId = techniqueId;
    techniqueDetailState = createInitialTechniqueDetailState(techniqueId);
    showView(ROUTES.TECHNIQUE_DETAIL);
}

// The Technique Guide owns entry to its Detail; the source Rig provides
// an immutable return snapshot (configuration, teaching bait, scroll, focus).
function openTechniqueDetailFromRig(techniqueId) {
    const rig = findRecordById(RIG_DATA, selectedRigId);
    const technique = getTechniqueRecord(techniqueId);
    if (!rig || rig.isActive !== true || !technique) return;
    const context = getRigTechniqueLearningContext(rig);
    if (!context || ![context.lead, ...(context.others ?? [])].some((item) => item?.id === techniqueId)) return;
    if (!pushDetailNavigationContext({
        route: ROUTES.RIG_DETAIL,
        label: rig.name,
        state: captureRigDetailNavigationState(`technique:${techniqueId}`)
    })) return;
    selectedTechniqueId = technique.id;
    selectedTechniqueCollectionKey = "all";
    techniqueDetailState = createInitialTechniqueDetailState(technique.id);
    showView(ROUTES.TECHNIQUE_DETAIL);
}

function renderTechniqueDetailView(appMain) {
    const technique = getActiveTechniqueRecords().find((record) => record.id === selectedTechniqueId);
    const context = peekDetailNavigationContext();
    if (!technique) {
        console.warn(`Technique was not found: ${selectedTechniqueId}`);
        if (context && returnToDetailNavigationContext()) return;
        showView(ROUTES.TECHNIQUES);
        return;
    }
    if (techniqueDetailState.techniqueId !== technique.id) {
        techniqueDetailState = createInitialTechniqueDetailState(technique.id);
    }
    const usages = getTechniqueUsageContexts(technique.id);
    renderTechniqueInstructionDetail(appMain, {
        record: technique,
        ...usages,
        rigsExpanded: techniqueDetailState.rigsExpanded === true,
        expandedDisclosureIds: techniqueDetailState.expandedDisclosureIds,
        onDisclosureStateChange: (expandedDisclosureIds) => {
            techniqueDetailState = { ...techniqueDetailState, expandedDisclosureIds: [...expandedDisclosureIds] };
        },
        onUsageStateChange: (rigsExpanded) => {
            techniqueDetailState = { ...techniqueDetailState, rigsExpanded: rigsExpanded === true };
        },
        parentLabel: context?.label ?? "Techniques Guide",
        onParent: context ? returnToDetailNavigationContext : () => showView(ROUTES.TECHNIQUES),
        onRigSelect: openRigDetailFromTechnique,
        onBaitSelect: (baitId, button) => renderLureBaitReferencePopover(baitId, button, null,
            { onRigSelect: openRigDetailFromTechnique })
    });
    if (techniqueDetailState.restoreScroll) {
        restoreTechniquePageState(appMain, techniqueDetailState, () => {
            techniqueDetailState = { ...techniqueDetailState, restoreFocusTarget: null };
        });
        techniqueDetailState = { ...techniqueDetailState, restoreScroll: false };
    }
}

function registerTechniqueGuideRoutes() {
    FCC_APP.registerProvider("techniques-guide", {
        [ROUTES.TECHNIQUES]: {
            render: renderTechniquesGuideView,
            restore: (state) => { techniqueGuideState = { ...state.techniqueGuideState }; }
        },
        [ROUTES.TECHNIQUE_BROWSE]: {
            render: renderTechniqueBrowseView,
            restore: (state) => {
                selectedTechniqueCollectionKey = state.selectedTechniqueCollectionKey;
                techniqueBrowseState = { ...state.techniqueBrowseState };
            }
        },
        [ROUTES.TECHNIQUE_DETAIL]: {
            render: renderTechniqueDetailView,
            restore: (state) => {
                selectedTechniqueId = state.selectedTechniqueId;
                selectedTechniqueCollectionKey = state.selectedTechniqueCollectionKey;
                techniqueDetailState = state.techniqueDetailState
                    ? { ...state.techniqueDetailState,
                        expandedDisclosureIds: [...(state.techniqueDetailState.expandedDisclosureIds ?? [])] }
                    : createInitialTechniqueDetailState(selectedTechniqueId);
            }
        }
    });
}

function resetTechniqueGuideForHome() {
    selectedTechniqueId = null;
    selectedTechniqueCollectionKey = "all";
    techniqueGuideState = createInitialTechniqueGuideState();
    techniqueBrowseState = createInitialTechniqueBrowseState();
    techniqueDetailState = createInitialTechniqueDetailState();
}
