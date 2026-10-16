/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: guides/rig-guide-controller.js
   PURPOSE: Extracted owner functions and contracts from approved pre-migration source.
   ========================================================== */

"use strict";

/* ==========================================================
   RIGS GUIDE — STATE / STORAGE / ROUTING FOUNDATION
   ========================================================== */

const RIG_READINESS_SESSION_STORAGE_KEY = "freshwaterFishingCompanion.rigReadiness.session.v1";
const LEGACY_RIG_READINESS_STORAGE_KEY = "freshwaterFishingCompanion.tackleReadiness.v1";

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

function createInitialRigGuideState() {
    return { query: "", scrollY: 0, restoreFocusTarget: null };
}

function createInitialRigBrowseState() {
    return { query: "", scrollY: 0, restoreFocusTarget: null };
}

function createInitialRigDetailState(rigId, selectedConfigurationId = null) {
    return {
        rigId,
        selectedConfigurationId,
        // Technique teaching is separate from assembly/readiness checkboxes.
        selectedBaitId: null,
        otherTechniquesExpanded: false,
        expandedDisclosureIds: [],
        scrollY: 0,
        restoreScroll: false,
        restoreFocusTarget: null
    };
}

let selectedRigId = null;
let selectedRigCollectionKey = "all";
let rigGuideState = createInitialRigGuideState();
let rigBrowseState = createInitialRigBrowseState();
let rigDetailState = createInitialRigDetailState(null);
let rigReadinessMemoryFallback = {};

function resetRigDetailState(rigId, selectedConfigurationId = null) {
    rigDetailState = createInitialRigDetailState(rigId, selectedConfigurationId);
}

function captureRigDetailNavigationState(restoreFocusTarget = null) {
    return {
        selectedRigId,
        selectedRigCollectionKey,
        rigDetailState: {
            ...rigDetailState,
            rigId: selectedRigId,
            expandedDisclosureIds: [...(rigDetailState.expandedDisclosureIds ?? [])],
            scrollY: window.scrollY,
            restoreScroll: true,
            restoreFocusTarget
        }
    };
}

function restoreRigScroll(scrollY) {
    if (!Number.isFinite(scrollY) || scrollY <= 0) return;
    window.requestAnimationFrame(() => {
        window.scrollTo({ top: scrollY, left: 0, behavior: "auto" });
    });
}

function getRigCollectionCardId(collectionKey) {
    const cardIdByCollectionKey = {
        core: "browse-core-rigs",
        beginner: "browse-beginner-rigs",
        "beginner-plus": "browse-beginner-plus-rigs",
        intermediate: "browse-intermediate-rigs",
        "intermediate-plus": "browse-intermediate-plus-rigs",
        advanced: "browse-advanced-rigs",
        expert: "browse-expert-rigs",
        all: "browse-all-rigs"
    };
    return cardIdByCollectionKey[collectionKey] ?? null;
}

function restoreRigFocus(appMain, focusTarget) {
    if (!appMain || !focusTarget) return;
    window.requestAnimationFrame(() => {
        const [kind, id] = focusTarget.split(":", 2);
        let target = null;

        if (kind === "result" && id) {
            target = Array.from(appMain.querySelectorAll("[data-result-id]")).find((element) =>
                element.dataset.resultId === id
            );
        } else if (kind === "collection" && id) {
            const cardId = getRigCollectionCardId(id);
            target = cardId ? appMain.querySelector(`[data-card-id="${cardId}"]`) : null;
        } else if (kind === "knot" && id) {
            target = Array.from(appMain.querySelectorAll("[data-rig-knot-id]")).find((element) =>
                element.dataset.rigKnotId === id
            );
        } else if (kind === "technique" && id) {
            target = Array.from(appMain.querySelectorAll("[data-rig-view-technique-id]")).find((element) =>
                element.dataset.rigViewTechniqueId === id
            );
        } else if (kind === "bait" && id) {
            target = Array.from(appMain.querySelectorAll("[data-lure-bait-reference-id]"))
                .find((element) => element.dataset.lureBaitReferenceId === id);
        } else if (focusTarget === "setup-selector") {
            target = appMain.querySelector("[data-rig-configuration-select], [data-rig-bait-select]");
        } else if (kind === "reference" && id) {
            target = Array.from(appMain.querySelectorAll("[data-reference-id]")).find((element) =>
                element.dataset.referenceId === id
            );
        } else if (focusTarget === "reel-setup") {
            target = appMain.querySelector("[data-rig-reel-setup-primary]");
        }

        target?.focus({ preventScroll: true });
    });
}

function restoreRigGuideNavigationState(appMain) {
    const searchInput = appMain.querySelector("#rig-guide-search-input");
    if (searchInput && rigGuideState.query) {
        searchInput.value = rigGuideState.query;
        searchInput.dispatchEvent(new Event("input", { bubbles: true }));
    }

    restoreRigScroll(rigGuideState.scrollY);
    const focusTarget = rigGuideState.restoreFocusTarget;
    rigGuideState = { ...rigGuideState, restoreFocusTarget: null };
    restoreRigFocus(appMain, focusTarget);
}

function restoreRigBrowseNavigationState(appMain) {
    restoreRigScroll(rigBrowseState.scrollY);
    const focusTarget = rigBrowseState.restoreFocusTarget;
    rigBrowseState = { ...rigBrowseState, restoreFocusTarget: null };
    restoreRigFocus(appMain, focusTarget);
}

function restoreRigDetailNavigationState(appMain) {
    if (rigDetailState.rigId !== selectedRigId) return;
    const scrollY = Number(rigDetailState.scrollY ?? 0);
    const shouldRestoreScroll = rigDetailState.restoreScroll === true;
    const focusTarget = rigDetailState.restoreFocusTarget;
    rigDetailState = {
        ...rigDetailState,
        restoreScroll: false,
        restoreFocusTarget: null
    };

    if (shouldRestoreScroll) {
        window.requestAnimationFrame(() => {
            window.scrollTo({ top: scrollY, left: 0, behavior: "auto" });
        });
    }
    restoreRigFocus(appMain, focusTarget);
}

function sanitizeRigReadinessPool(value) {
    if (!value || typeof value !== "object" || Array.isArray(value)) return {};
    return Object.fromEntries(
        Object.entries(value)
            .filter(([key, quantity]) =>
                (key.startsWith("tackle:") || key.startsWith("lure-bait:")) &&
                Number.isInteger(quantity) && quantity > 0
            )
    );
}

function getRigReadinessPool() {
    try {
        const storedValue = sessionStorage.getItem(RIG_READINESS_SESSION_STORAGE_KEY);
        if (!storedValue) return { ...rigReadinessMemoryFallback };
        const pool = sanitizeRigReadinessPool(JSON.parse(storedValue));
        rigReadinessMemoryFallback = { ...pool };
        return pool;
    } catch (error) {
        console.warn("Rig readiness session state could not be loaded.", error);
        return { ...rigReadinessMemoryFallback };
    }
}

function saveRigReadinessPool(pool) {
    const normalizedPool = sanitizeRigReadinessPool(pool);
    rigReadinessMemoryFallback = { ...normalizedPool };
    try {
        sessionStorage.setItem(RIG_READINESS_SESSION_STORAGE_KEY, JSON.stringify(normalizedPool));
    } catch (error) {
        console.warn("Rig readiness session state could not be saved.", error);
    }
}

function discardLegacyRigReadinessStorage() {
    try {
        localStorage.removeItem(LEGACY_RIG_READINESS_STORAGE_KEY);
    } catch (error) {
        console.warn("Legacy Rig readiness storage could not be cleared.", error);
    }
}

function getRigRequirementQuantity(requirement) {
    const quantity = Number(requirement?.quantity ?? 1);
    return Number.isInteger(quantity) && quantity > 0 ? quantity : 1;
}

function buildRigReadinessRequirementEntries(source) {
    const componentRequirements = Array.isArray(source?.componentRequirements) ? source.componentRequirements : [];
    const lureBaitRequirements = Array.isArray(source?.lureBaitRequirements) ? source.lureBaitRequirements : [];
    return [
        ...componentRequirements.map((requirement) => ({
            selectionId: requirement.tackleId,
            poolKey: `tackle:${requirement.tackleId}`,
            quantity: getRigRequirementQuantity(requirement)
        })),
        ...lureBaitRequirements.map((requirement) => ({
            selectionId: `lure-bait:${requirement.lureBaitId}`,
            poolKey: `lure-bait:${requirement.lureBaitId}`,
            quantity: getRigRequirementQuantity(requirement)
        }))
    ];
}

function getRigSelectedConfiguration(rig) {
    const configurations = Array.isArray(rig?.configurations) ? rig.configurations : [];
    if (configurations.length === 0) return null;
    const selectedConfigurationId = rigDetailState.rigId === rig.id
        ? rigDetailState.selectedConfigurationId
        : null;
    return configurations.find((configuration) => configuration.id === selectedConfigurationId) ?? null;
}

// The page has ONE explicit configuration/bait choice. Direct-Tie uses its
// authored configuration; the four multi-bait Rigs use a selected canonical
// Lure/Bait ID. Readiness remains an independent session inventory pool.
function getRigSelectedBaitId(rig) {
    const configurations = Array.isArray(rig?.configurations) ? rig.configurations : [];
    if (configurations.length > 0) return getRigSelectedConfiguration(rig)?.lureBaitId ?? null;
    if (rigDetailState.rigId !== rig?.id) return null;
    return rigDetailState.selectedBaitId ?? null;
}

// Only these four existing single-bait Rigs replace the generic soft-
// plastic checklist label. Identity derives from authored compatibility;
// absence of another Rig-Bait edge never creates an inferred selection.
function getRigFixedBaitId(rig) {
    if (!["wacky-rig", "ned-rig", "neko-rig", "shaky-head-rig"].includes(rig?.id)) return null;
    const ids = getCompatibleTargetIds("rig-lure-bait", "rig", rig.id, "lure-bait")
        .filter((id) => getLureBaitRecord(id)?.isActive === true);
    return ids.length === 1 && ids[0] === "stick-worm" ? ids[0] : null;
}

function getRigRequirementPresentation(rig) {
    const configurations = Array.isArray(rig?.configurations) ? rig.configurations : [];
    const configuration = getRigSelectedConfiguration(rig);
    if (configurations.length > 0 && !configuration) {
        return { componentRequirements: [], lureBaitRequirements: [], rows: [], awaitingSetup: true };
    }
    const source = configuration ?? rig;
    const components = Array.isArray(source?.componentRequirements) ? source.componentRequirements : [];
    const baits = Array.isArray(source?.lureBaitRequirements) ? source.lureBaitRequirements : [];
    const baitId = getRigSelectedBaitId(rig);
    const guidance = RIG_TECHNIQUE_LEARNING_GUIDANCE.find((item) => item.rigId === rig?.id);
    const validSelectedBait = guidance?.selectionMode === "explicit" &&
        guidance.baitLessons?.some((lesson) => lesson.lureBaitId === baitId) &&
        getCompatibleTargetIds("rig-lure-bait", "rig", rig.id, "lure-bait").includes(baitId) &&
        getLureBaitRecord(baitId)?.isActive === true;
    const fixedBaitId = getRigFixedBaitId(rig);
    const presentedBaitId = validSelectedBait ? baitId : fixedBaitId;
    const baitRequirementNote = (id) =>
        rig.baitSpecificRequirementNotes?.find((entry) => entry.lureBaitId === id)?.text ?? null;
    const rows = [];
    const projectedComponents = [];
    const projectedBaits = [...baits];
    // Only the approved generic Soft Plastic requirement is substituted.
    // Never change canonical source requirements or infer bait ownership.
    components.forEach((requirement) => {
        if (presentedBaitId && requirement.tackleId === "soft-plastic") {
            const substitute = {
                lureBaitId: presentedBaitId,
                quantity: requirement.quantity,
                required: requirement.required,
                notes: baitRequirementNote(presentedBaitId)
            };
            projectedBaits.push(substitute);
            rows.push({ type: "lure-bait", requirement: substitute });
        } else {
            projectedComponents.push(requirement);
            rows.push({ type: "tackle", requirement });
        }
    });
    // Configured Rigs already own specific Lure/Bait requirements.
    baits.forEach((requirement) => rows.unshift({ type: "lure-bait", requirement }));
    return { componentRequirements: projectedComponents,
        lureBaitRequirements: projectedBaits, rows, awaitingSetup: false };
}

// The sole learning copy and lead ids live in data/technique-guidance.js.
// This projection owns no relationships: every selected-bait option must be
// supported by an active Rig-Bait + Rig-Technique + Bait-Technique triple.
function getRigTechniqueLearningContext(rig) {
    const guidance = RIG_TECHNIQUE_LEARNING_GUIDANCE.find((item) => item.rigId === rig?.id);
    if (!guidance || rig?.isActive !== true) return null;
    const rigTechniqueIds = getCompatibleTargetIds("rig-technique", "rig", rig.id, "technique");
    const baitIds = getCompatibleTargetIds("rig-lure-bait", "rig", rig.id, "lure-bait")
        .filter((id) => getLureBaitRecord(id)?.isActive === true);
    const baitTechniqueIds = (baitId) => new Set(
        getCompatibleTargetIds("lure-bait-technique", "lure-bait", baitId, "technique")
    );
    const intersectionForBait = (baitId) => {
        const eligible = baitTechniqueIds(baitId);
        return rigTechniqueIds.filter((id) => eligible.has(id) && getTechniqueRecord(id));
    };
    const toTechnique = (techniqueId) => getTechniqueRecord(techniqueId);

    if (guidance.selectionMode === "explicit") {
        const choices = (guidance.baitLessons ?? [])
            .filter((lesson) => baitIds.includes(lesson.lureBaitId)
                && intersectionForBait(lesson.lureBaitId).includes(lesson.techniqueId))
            .map((lesson) => ({ ...lesson, bait: getLureBaitRecord(lesson.lureBaitId) }));
        const selected = choices.find((choice) => choice.lureBaitId === getRigSelectedBaitId(rig)) ?? null;
        const lesson = selected ?? guidance.initialLesson;
        const lead = lesson?.techniqueId && rigTechniqueIds.includes(lesson.techniqueId)
            ? toTechnique(lesson.techniqueId) : null;
        const others = selected
            ? intersectionForBait(selected.lureBaitId).filter((id) => id !== lead?.id).map(toTechnique).filter(Boolean)
            : [];
        return {
            selectionMode: "explicit", isExample: !selected && Boolean(guidance.initialLesson?.exampleLureBaitId),
            selectedBait: selected?.bait ?? null, choices, lead, why: lesson?.why ?? "",
            exampleBait: !selected && guidance.initialLesson?.exampleLureBaitId
                ? getLureBaitRecord(guidance.initialLesson.exampleLureBaitId) : null,
            others
        };
    }

    // Rig-level lessons with authored baits use the set shared by *all* those
    // baits; Double-Jig has no authored bait and legitimately uses Rig-only links.
    const eligibleIds = baitIds.length
        ? rigTechniqueIds.filter((id) => baitIds.every((baitId) => baitTechniqueIds(baitId).has(id)))
        : rigTechniqueIds;
    const lead = eligibleIds.includes(guidance.defaultLesson?.techniqueId)
        ? toTechnique(guidance.defaultLesson.techniqueId) : null;
    return {
        selectionMode: "rig", isExample: false, selectedBait: null, choices: [],
        lead, why: guidance.defaultLesson?.why ?? "",
        others: eligibleIds.filter((id) => id !== lead?.id).map(toTechnique).filter(Boolean),
        rigOnly: baitIds.length === 0
    };
}

function getRigActiveReadinessRequirements(rig) {
    return buildRigReadinessRequirementEntries(getRigRequirementPresentation(rig));
}

function getRigAllReadinessRequirements(rig) {
    const configurations = Array.isArray(rig?.configurations) ? rig.configurations : [];
    if (configurations.length > 0) return configurations.flatMap(buildRigReadinessRequirementEntries);
    const original = buildRigReadinessRequirementEntries(rig);
    const guidance = RIG_TECHNIQUE_LEARNING_GUIDANCE.find((item) => item.rigId === rig?.id);
    if (guidance?.selectionMode !== "explicit") {
        const fixedBaitId = getRigFixedBaitId(rig);
        if (!fixedBaitId) return original;
        const softPlastic = rig.componentRequirements?.find((item) => item.tackleId === "soft-plastic");
        return [...original, {
            selectionId: `lure-bait:${fixedBaitId}`,
            poolKey: `lure-bait:${fixedBaitId}`,
            quantity: getRigRequirementQuantity(softPlastic)
        }];
    }
    // Specific bait checks are tracked separately from generic Soft Plastic.
    return [...original, ...(guidance.baitLessons ?? []).map((lesson) => ({
        selectionId: `lure-bait:${lesson.lureBaitId}`,
        poolKey: `lure-bait:${lesson.lureBaitId}`,
        quantity: getRigRequirementQuantity(rig.componentRequirements?.find((item) => item.tackleId === "soft-plastic"))
    }))];
}

function getRigReadinessSelections(rigId) {
    const rig = findRecordById(RIG_DATA, rigId);
    if (!rig || rig.isActive !== true) return {};

    const pool = getRigReadinessPool();
    const selections = {};
    const maximumQuantityBySelection = new Map();
    getRigAllReadinessRequirements(rig).forEach((requirement) => {
        maximumQuantityBySelection.set(
            requirement.selectionId,
            Math.max(maximumQuantityBySelection.get(requirement.selectionId) ?? 0, requirement.quantity)
        );
    });
    maximumQuantityBySelection.forEach((quantity, selectionId) => {
        const requirement = getRigAllReadinessRequirements(rig).find((item) => item.selectionId === selectionId);
        if (!requirement) return;
        selections[selectionId] = (pool[requirement.poolKey] ?? 0) >= quantity;
    });

    // The actively displayed configuration owns the exact quantity threshold.
    getRigActiveReadinessRequirements(rig).forEach((requirement) => {
        selections[requirement.selectionId] = (pool[requirement.poolKey] ?? 0) >= requirement.quantity;
    });
    return selections;
}

function updateRigReadinessSelection(rigId, selectionId, isAvailable) {
    const rig = findRecordById(RIG_DATA, rigId);
    if (!rig || rig.isActive !== true) return;
    const requirement = getRigActiveReadinessRequirements(rig).find((item) => item.selectionId === selectionId);
    if (!requirement) {
        console.warn(`Rig readiness requirement was not found: ${selectionId}`);
        return;
    }

    const pool = getRigReadinessPool();
    if (isAvailable === true) {
        pool[requirement.poolKey] = Math.max(pool[requirement.poolKey] ?? 0, requirement.quantity);
    } else {
        delete pool[requirement.poolKey];
    }
    saveRigReadinessPool(pool);
}

/* ==========================================================
   RIGS GUIDE — REEL SETUP HANDOFF PRESENTATION + CONTROLLERS
   ========================================================== */

function openReelSetupFromRigs() {
    clearDetailNavigationStack();
    rigGuideState = {
        ...rigGuideState,
        scrollY: window.scrollY,
        restoreFocusTarget: "reel-setup"
    };
    pushDetailNavigationContext({
        route: ROUTES.RIGS,
        label: "Rigs Guide",
        state: { rigGuideState: { ...rigGuideState } }
    });
    startNewReelSetup();
    showView(ROUTES.REEL_SETUP);
}

function renderRigReelSetupContext(appMain) {
    const lines = getRigReelSetupContextLines();
    const contentView = appMain.querySelector(".content-view");
    const reelSetupSlot = appMain.querySelector("[data-rig-reel-setup-slot]");
    const searchForm = appMain.querySelector("[data-section-search-form]");
    if (!contentView) return;

    const section = document.createElement("section");
    section.dataset.rigReelSetupContext = "true";

    if (!lines.length) {
        section.className = "rig-reel-setup-entry";
        section.setAttribute("aria-label", "Reel setup workflow");
        section.innerHTML = `
            <div class="dashboard-grid rig-reel-setup-entry__grid">
                <button class="dashboard-card dashboard-card--workflow rig-reel-ready-card" type="button" data-rig-reel-setup-primary data-rig-reel-setup-entry>
                    <span class="guide-workflow-eyebrow">Guided Setup</span>
                    <span class="guide-card__heading-row">
                        <span class="dashboard-card__title">Get Your Reel Ready</span>
                        <span class="dashboard-card__action dashboard-card__action--link">Start Setup <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></span>
                    </span>
                    <span class="dashboard-card__description">Set up your reel and line step by step, then carry that completed setup into Rigs.</span>
                </button>
            </div>
        `;
        section.querySelector("[data-rig-reel-setup-entry]")?.addEventListener("click", openReelSetupFromRigs);
    } else {
        section.className = "rig-reel-setup-context";
        section.setAttribute("aria-labelledby", "rig-reel-setup-context-title");
        section.innerHTML = `
            <h3 id="rig-reel-setup-context-title">Your Reel Setup</h3>
            <div class="rig-reel-setup-context__summary">
                ${lines.map((line) => `
                    <p class="rig-reel-setup-context__line">${line.join('<span class="rig-reel-setup-context__separator" aria-hidden="true">·</span>')}</p>
                `).join("")}
            </div>
            <div class="reel-setup-utilities">
                <button class="reel-setup-utility-button" type="button" data-rig-reel-setup-primary data-rig-reel-setup-update>Update Setup</button>
                <button class="reel-setup-utility-button" type="button" data-rig-reel-setup-clear>Clear Setup</button>
            </div>
            <dialog class="reel-setup-clear-dialog" data-rig-reel-setup-clear-dialog aria-labelledby="rig-reel-setup-clear-title">
                <div class="reel-setup-clear-dialog__body">
                    <h3 class="reel-setup-clear-dialog__title" id="rig-reel-setup-clear-title">Clear your Reel Setup?</h3>
                    <p>Your current Reel Setup will be removed until you complete Get Your Reel Ready again.</p>
                </div>
                <div class="reel-setup-clear-dialog__actions">
                    <button class="reel-setup-clear-dialog__button reel-setup-clear-dialog__cancel" type="button" data-rig-reel-setup-clear-cancel>Cancel</button>
                    <button class="reel-setup-clear-dialog__button reel-setup-clear-dialog__confirm" type="button" data-rig-reel-setup-clear-confirm>Clear Setup</button>
                </div>
            </dialog>
        `;

        const clearButton = section.querySelector("[data-rig-reel-setup-clear]");
        const clearDialog = section.querySelector("[data-rig-reel-setup-clear-dialog]");
        section.querySelector("[data-rig-reel-setup-update]")?.addEventListener("click", openReelSetupFromRigs);
        clearButton?.addEventListener("click", () => {
            if (typeof clearDialog?.showModal === "function") clearDialog.showModal();
        });
        const restoreClearSetupFocus = () => {
            requestAnimationFrame(() => clearButton?.focus({ preventScroll: true }));
        };
        clearDialog?.addEventListener("cancel", restoreClearSetupFocus);
        section.querySelector("[data-rig-reel-setup-clear-cancel]")?.addEventListener("click", () => {
            clearDialog?.close();
            restoreClearSetupFocus();
        });
        section.querySelector("[data-rig-reel-setup-clear-confirm]")?.addEventListener("click", () => {
            clearCompletedReelSetupContext();
            clearDialog?.close();
            rigGuideState = { ...rigGuideState, restoreFocusTarget: "reel-setup" };
            renderRigGuideView(appMain);
        });
    }

    if (reelSetupSlot) reelSetupSlot.replaceChildren(section);
    else if (searchForm) searchForm.insertAdjacentElement("afterend", section);
    else contentView.prepend(section);
}

function renderRigGuideView(appMain) {
    renderRigGuideLanding(appMain, {
        description: "Search the full Rig library or choose a learning collection.",
        searchPlaceholder: "Try Texas, bobber, shore, cover, or clear water",
        initialQuery: rigGuideState.query,
        onQueryChange: (query) => {
            rigGuideState = { ...rigGuideState, query: query.trim() };
        },
        cards: [
            { id: "browse-all-rigs", title: "All Rigs", description: "Browse every Rig in the guide." },
            { id: "browse-core-rigs", title: "Learn Core Rigs", description: "Start with six versatile freshwater setups that build confidence before exploring more specialized rigs." },
            { id: "browse-beginner-rigs", title: "Beginner", description: "Seven simple rigs with forgiving assembly and broad usefulness." },
            { id: "browse-beginner-plus-rigs", title: "Beginner+", description: "Five approachable rigs that require a little more setup precision." },
            { id: "browse-intermediate-rigs", title: "Intermediate", description: "Four rigs that add leader management, bottom-contact precision, and multi-component setup." },
            { id: "browse-intermediate-plus-rigs", title: "Intermediate+", description: "Four specialized finesse and multi-component setups with more precise weight placement and rig orientation." },
            { id: "browse-advanced-rigs", title: "Advanced", description: "Two purpose-built rigs for specialized terminal topology and demanding heavy-cover fishing." },
            { id: "browse-expert-rigs", title: "Expert", description: "A system-oriented trolling rig combining bottom contact, harness control, and multiple setup decisions." }
        ],
        onCardSelect: handleRigGuideCardSelect,
        onSearch: (query) => updateRigGuideSearchResults(appMain, query)
    });

    renderRigReelSetupContext(appMain);
    restoreRigGuideNavigationState(appMain);
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
    rigGuideState = { ...rigGuideState, query: query.trim() };
    const activeRigs = RIG_DATA.filter((rig) => rig.isActive).map(getRigSearchRecord);
    const matches = searchRecords(
        activeRigs,
        query,
        ["name", "difficulty", "useCases", "conditionTags", "configurationNames"]
    );

    renderRigSearchResults(appMain, matches, {
        query,
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
        clearDetailNavigationStack();
        rigGuideState = {
            ...rigGuideState,
            scrollY: window.scrollY,
            restoreFocusTarget: `collection:${collectionKey}`
        };
        selectedRigCollectionKey = collectionKey;
        rigBrowseState = createInitialRigBrowseState();
        showView(ROUTES.RIG_BROWSE);
        return;
    }

    console.info(`Rigs Guide action not implemented yet: ${cardId}`);
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
    const rig = findRecordById(RIG_DATA, rigId);
    if (!rig || rig.isActive !== true) {
        console.warn(`Rig was not found: ${rigId}`);
        return;
    }

    clearDetailNavigationStack();
    if (collectionKey === "guide") {
        rigGuideState = {
            ...rigGuideState,
            scrollY: window.scrollY,
            restoreFocusTarget: `result:${rigId}`
        };
        pushDetailNavigationContext({
            route: ROUTES.RIGS,
            label: "Rigs Guide",
            state: { rigGuideState: { ...rigGuideState } }
        });
        selectedRigCollectionKey = "all";
    } else {
        selectedRigCollectionKey = RIG_COLLECTIONS[collectionKey] ? collectionKey : "all";
        rigBrowseState = {
            ...rigBrowseState,
            scrollY: window.scrollY,
            restoreFocusTarget: `result:${rigId}`
        };
        pushDetailNavigationContext({
            route: ROUTES.RIG_BROWSE,
            label: getRigCollectionConfig().title,
            state: {
                selectedRigCollectionKey,
                rigBrowseState: { ...rigBrowseState }
            }
        });
    }

    selectedRigId = rigId;
    resetRigDetailState(rigId);
    showView(ROUTES.RIG_DETAIL);
}

// Cross-Guide entry owned by the destination Rig Guide. The Technique Guide
// supplies the return snapshot; the Rig Guide alone changes its private state.
function openRigDetailFromTechnique(rigId, { sourceBaitId = null } = {}) {
    const rig = findRecordById(RIG_DATA, rigId);
    const technique = findRecordById(TECHNIQUE_DATA, selectedTechniqueId);
    if (!rig || rig.isActive !== true || !technique || technique.isActive !== true) {
        console.warn(`Related Rig or Technique could not be opened: ${rigId}`);
        return;
    }
    if (!pushDetailNavigationContext({
        route: ROUTES.TECHNIQUE_DETAIL,
        label: technique.name,
        state: captureTechniqueDetailNavigationState(sourceBaitId ? `bait:${sourceBaitId}` : `rig:${rigId}`)
    })) return;
    selectedRigId = rig.id;
    selectedRigCollectionKey = "all";
    resetRigDetailState(rig.id);
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
    resetRigDetailState(rigId);
    showView(ROUTES.RIG_DETAIL);
}

function openRigDetailFromComponentReference(rigId, { sourceReferenceId = null, sourceBaitId = null, originScrollY = null } = {}) {
    const nextRig = findRecordById(RIG_DATA, rigId);
    const originRig = findRecordById(RIG_DATA, selectedRigId);
    if (!nextRig || nextRig.isActive !== true || !originRig || originRig.isActive !== true) {
        console.warn(`Component reference Rig navigation could not be completed: ${rigId}`);
        return;
    }
    if (nextRig.id === originRig.id) return;

    // Approved Option A: a full-page Rig handoff, with Parent returning to
    // the originating Rig detail and scroll position, not reopening the dialog.
    const originState = captureRigDetailNavigationState(
        sourceBaitId ? `bait:${sourceBaitId}` :
            sourceReferenceId ? `reference:${sourceReferenceId}` : null
    );
    if (Number.isFinite(originScrollY) && originScrollY >= 0) {
        originState.rigDetailState.scrollY = originScrollY;
    }
    if (!pushDetailNavigationContext({
        route: ROUTES.RIG_DETAIL,
        label: originRig.name,
        state: originState
    })) return;

    selectedRigId = nextRig.id;
    selectedRigCollectionKey = "all";
    resetRigDetailState(nextRig.id);
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
        state: captureRigDetailNavigationState(`knot:${knotId}`)
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
        label: `Search ${collection.title}`,
        helpText: "Search by Rig name, difficulty, use case, condition, or setup.",
        placeholder: `Search ${collection.title}`,
        showSubmitButton: false,
        viewClass: "rig-browse-view",
        parentLabel: "Rigs Guide",
        initialQuery: rigBrowseState.query,
        onQueryChange: (query) => {
            rigBrowseState = { ...rigBrowseState, query: query.trim() };
        },
        onParent: () => {
            rigGuideState = {
                ...rigGuideState,
                restoreFocusTarget: `collection:${selectedRigCollectionKey}`
            };
            showView(ROUTES.RIGS);
        },
        onSearch: (query) => updateRigBrowseResults(appMain, query)
    });
    restoreRigBrowseNavigationState(appMain);
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

    renderRigSearchResults(appMain, resultRecords, {
        query,
        onResultSelect: (rigId) => openRigDetail(rigId, selectedRigCollectionKey)
    });
}

function renderRigDetailView(appMain) {
    const rig = findRecordById(RIG_DATA, selectedRigId);
    const returnContext = peekDetailNavigationContext();
    if (!rig || rig.isActive !== true) {
        console.warn(`Rig was not found: ${selectedRigId}`);
        if (returnContext && returnToDetailNavigationContext()) return;
        showView(ROUTES.RIGS);
        return;
    }

    if (rigDetailState.rigId !== rig.id) resetRigDetailState(rig.id);

    renderInstructionDetail(appMain, {
        record: rig,
        parentLabel: returnContext?.label ?? getRigCollectionConfig().title,
        selections: getRigReadinessSelections(rig.id),
        reelSetupContextLines: getDetailReelSetupContextLines(),
        selectedConfigurationId: rigDetailState.selectedConfigurationId,
        selectedBaitId: getRigSelectedBaitId(rig),
        requirementPresentation: getRigRequirementPresentation(rig),
        expandedDisclosureIds: rigDetailState.expandedDisclosureIds,
        techniqueLearning: getRigTechniqueLearningContext(rig),
        otherTechniquesExpanded: rigDetailState.otherTechniquesExpanded === true,
        onTechniqueSelect: openTechniqueDetailFromRig,
        onBaitChange: (baitId) => {
            const choices = getRigTechniqueLearningContext(rig)?.choices ?? [];
            if (baitId && !choices.some((choice) => choice.lureBaitId === baitId)) return;
            rigDetailState = {
                ...rigDetailState,
                selectedBaitId: baitId || null,
                otherTechniquesExpanded: false,
                scrollY: window.scrollY,
                restoreScroll: true,
                restoreFocusTarget: "setup-selector"
            };
            renderRigDetailView(appMain);
        },
        onOtherTechniquesStateChange: (expanded) => {
            rigDetailState = { ...rigDetailState, otherTechniquesExpanded: expanded === true };
        },
        onConfigurationChange: (configurationId) => {
            const configurationExists = (rig.configurations ?? []).some((item) => item.id === configurationId);
            if (configurationId && !configurationExists) return;
            rigDetailState = {
                ...rigDetailState,
                selectedConfigurationId: configurationId || null,
                selectedBaitId: null,
                otherTechniquesExpanded: false,
                scrollY: window.scrollY,
                restoreScroll: true,
                restoreFocusTarget: "setup-selector"
            };
            renderRigDetailView(appMain);
        },
        onDisclosureStateChange: (expandedDisclosureIds) => {
            rigDetailState = {
                ...rigDetailState,
                rigId: rig.id,
                expandedDisclosureIds: [...(expandedDisclosureIds ?? [])]
            };
        },
        onParent: returnContext
            ? returnToDetailNavigationContext
            : () => showView(ROUTES.RIGS),
        onKnotSelect: openKnotDetailFromRig,
        onRigSelect: openRigDetailFromComponentReference,
        onReadinessChange: (selectionId, isAvailable) =>
            updateRigReadinessSelection(rig.id, selectionId, isAvailable)
    });

    restoreRigDetailNavigationState(appMain);
}

/* ==========================================================
   END RIG GUIDE
   ========================================================== */


/* Explicit owner route contract. Registration is performed once at startup. */
function registerRigGuideRoutes() {
    FCC_APP.registerProvider("rig-guide", {
        [ROUTES.RIGS]: {
            render: renderRigGuideView,
            restore: (state) => { rigGuideState = { ...state.rigGuideState }; }
        },
        [ROUTES.RIG_BROWSE]: {
            render: renderRigBrowseView,
            restore: (state) => {
                selectedRigCollectionKey = state.selectedRigCollectionKey;
                rigBrowseState = { ...state.rigBrowseState };
            }
        },
        [ROUTES.RIG_DETAIL]: {
            render: renderRigDetailView,
            restore: (state) => {
                selectedRigId = state.selectedRigId;
                selectedRigCollectionKey = state.selectedRigCollectionKey;
                rigDetailState = state.rigDetailState
                    ? { ...state.rigDetailState,
                        expandedDisclosureIds: [...(state.rigDetailState.expandedDisclosureIds ?? [])] }
                    : createInitialRigDetailState(selectedRigId);
            }
        }
    });
}

function resetRigGuideForHome() {
    rigGuideState = createInitialRigGuideState();
    rigBrowseState = createInitialRigBrowseState();
    resetRigDetailState(null);
}
