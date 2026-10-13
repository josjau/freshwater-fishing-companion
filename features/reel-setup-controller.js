/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: features/reel-setup-controller.js
   PURPOSE: Extracted owner functions and contracts from approved pre-migration source.
   ========================================================== */

"use strict";

function getRigReelSetupContextLines() {
    if (!completedReelSetupContext) return [];

    const reelType = getReelSetupOption(REEL_TYPE_OPTIONS, completedReelSetupContext.reelType);
    const targetProfile = getReelSetupTargetFish(completedReelSetupContext.targetFish);
    const lineType = getReelLineType(completedReelSetupContext.lineType);
    const backingChoice = completedReelSetupContext.backingChoice
        ? getReelBackingChoice(completedReelSetupContext.backingChoice)
        : null;

    if (!reelType || !targetProfile || !lineType || !Number.isFinite(completedReelSetupContext.lineWeight)) {
        return [];
    }

    const backingLabel = backingChoice?.id === "monofilament-backing"
        ? "Monofilament Backing"
        : null;

    return [
        [reelType.title, getReelSetupTargetLabel(targetProfile)],
        [`${completedReelSetupContext.lineWeight} lb ${lineType.title}`, backingLabel].filter(Boolean)
    ];
}


/* ==========================================================
   REEL SETUP — STATE + CONTROLLERS (KNOTS GUIDE INTEGRATION)
   ========================================================== */

let reelSetupState = createInitialReelSetupState();

const COMPLETED_REEL_SETUP_STORAGE_KEY = "freshwaterFishingCompanion.completedReelSetup.v1";
let completedReelSetupContext = null;

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

function normalizeCompletedReelSetupContext(value) {
    const context = value?.version === 1 && value.context ? value.context : value;
    if (!context || typeof context !== "object" || Array.isArray(context)) return null;

    const reelType = getReelSetupOption(REEL_TYPE_OPTIONS, context.reelType);
    const targetProfile = getReelSetupTargetFish(context.targetFish);
    const lineType = getReelLineType(context.lineType);
    const lineWeight = Number(context.lineWeight);
    const backingChoice = context.backingChoice ? getReelBackingChoice(context.backingChoice) : null;
    if (!reelType || !targetProfile || !lineType || !Number.isFinite(lineWeight) || lineWeight <= 0) return null;
    if (context.backingChoice && !backingChoice) return null;

    return Object.freeze({
        reelType: reelType.id,
        targetFish: targetProfile.id,
        lineType: lineType.id,
        lineWeight,
        ...(backingChoice ? { backingChoice: backingChoice.id } : {})
    });
}

function loadCompletedReelSetupContext() {
    try {
        const storedValue = localStorage.getItem(COMPLETED_REEL_SETUP_STORAGE_KEY);
        if (!storedValue) return null;
        const context = normalizeCompletedReelSetupContext(JSON.parse(storedValue));
        if (!context) console.warn("Stored Reel Setup context is invalid and will not be used.");
        return context;
    } catch (error) {
        console.warn("Completed Reel Setup context could not be loaded.", error);
        return null;
    }
}

function retainCompletedReelSetupContext(context) {
    const normalizedContext = normalizeCompletedReelSetupContext(context);
    if (!normalizedContext) return false;
    completedReelSetupContext = normalizedContext;
    try {
        localStorage.setItem(COMPLETED_REEL_SETUP_STORAGE_KEY, JSON.stringify({
            version: 1,
            context: normalizedContext
        }));
    } catch (error) {
        console.warn("Completed Reel Setup context could not be persisted.", error);
    }
    return true;
}

function clearCompletedReelSetupContext() {
    completedReelSetupContext = null;
    try {
        localStorage.removeItem(COMPLETED_REEL_SETUP_STORAGE_KEY);
    } catch (error) {
        console.warn("Completed Reel Setup context could not be cleared.", error);
    }
}

function startNewReelSetup() {
    // A replacement workflow is a draft. The retained completed setup stays active
    // until a newly completed workflow explicitly replaces it.
    resetReelSetupState();
}

function openReelSetup() {
    clearDetailNavigationStack();
    knotGuideState = { ...knotGuideState, scrollY: window.scrollY, restoreWorkflowFocus: true };
    pushDetailNavigationContext({
        route: ROUTES.KNOTS,
        label: "Knots Guide",
        state: { knotGuideState: { ...knotGuideState } }
    });
    startNewReelSetup();
    showView(ROUTES.REEL_SETUP);
}

function getReelSetupOriginContext() {
    const context = peekDetailNavigationContext();
    return context?.route === ROUTES.REEL_SETUP ? null : context;
}

function returnFromReelSetupToOrigin() {
    resetReelSetupState();
    const originContext = getReelSetupOriginContext();
    if (originContext && returnToDetailNavigationContext()) return;
    showView(ROUTES.KNOTS);
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

function getReelSpoolingStageGuidance(reelTypeId, stageId) {
    return REEL_SPOOLING_GUIDANCE[reelTypeId]?.stages?.[stageId] ?? null;
}

function createCompletedReelSetupContext() {
    const reelType = getReelSetupOption(REEL_TYPE_OPTIONS, reelSetupState.reelType);
    const targetProfile = getReelSetupTargetFish(reelSetupState.targetFish);
    const lineType = getReelLineType(reelSetupState.lineType);
    const lineWeight = reelSetupState.lineWeight;
    const braidChoice = lineType?.id === "braid"
        ? getReelBackingChoice(reelSetupState.backingChoice)
        : null;
    const backingChoice = braidChoice?.id === "monofilament-backing" ? braidChoice : null;

    if (!reelType || !targetProfile || !lineType || !Number.isFinite(lineWeight)) return null;
    if (lineType.id === "braid" && !braidChoice) return null;

    return Object.freeze({
        reelType: reelType.id,
        targetFish: targetProfile.id,
        lineType: lineType.id,
        lineWeight,
        ...(backingChoice ? { backingChoice: backingChoice.id } : {})
    });
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

function registerReelSetupRoutes() {
    FCC_APP.registerProvider("reel-setup", {
        [ROUTES.REEL_SETUP]: {
            render: renderReelSetupView,
            restore: (state) => { reelSetupState = { ...state.reelSetupState }; }
        }
    });
}
