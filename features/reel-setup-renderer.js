/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: features/reel-setup-renderer.js
   PURPOSE: Extracted owner functions and contracts from approved pre-migration source.
   ========================================================== */

"use strict";

function getDetailReelSetupContextLines() {
    if (!completedReelSetupContext) return [];

    const reelType = getReelSetupOption(REEL_TYPE_OPTIONS, completedReelSetupContext.reelType);
    const lineType = getReelLineType(completedReelSetupContext.lineType);
    if (!reelType || !lineType || !Number.isFinite(completedReelSetupContext.lineWeight)) return [];

    return [
        [reelType.title],
        [`${completedReelSetupContext.lineWeight} lb ${lineType.title}`]
    ];
}


function buildDetailReelSetupContextMarkup(lines) {
    const reelSetupLines = Array.isArray(lines)
        ? lines.filter((line) => Array.isArray(line) && line.length > 0)
        : [];
    if (reelSetupLines.length === 0) return "";

    return `
        <aside class="detail-reel-setup-context" aria-label="Current Reel Setup">
            <span class="detail-reel-setup-context__label">Current Reel Setup</span>
            <span class="detail-reel-setup-context__values">
                ${reelSetupLines.map((line) => `<span class="detail-reel-setup-context__line">${line.join('<span class="detail-reel-setup-context__separator" aria-hidden="true">·</span>')}</span>`).join("")}
            </span>
        </aside>
    `;
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


function renderReelSetupNavigation(appMain) {
    const genericNavigationGroup = appMain.querySelector(".page-navigation-group");
    if (!genericNavigationGroup) return;

    const navigation = document.createElement("div");
    navigation.className = "page-navigation-group reel-setup-navigation";
    navigation.dataset.reelSetupNavigation = "true";

    const previous = getReelSetupPreviousDestination();
    const originContext = getReelSetupOriginContext();
    const backButton = document.createElement("button");
    backButton.type = "button";
    backButton.className = "page-navigation";
    const backLabel = previous?.label ?? originContext?.label ?? "Knots Guide";
    if (backLabel.length > 22) backButton.classList.add("page-navigation--long-label");
    backButton.innerHTML = '<span class="link-arrow link-arrow--back" aria-hidden="true">←</span> ' + backLabel;
    backButton.addEventListener("click", () => {
        if (!previous) {
            returnFromReelSetupToOrigin();
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
            startNewReelSetup();
            showView(ROUTES.REEL_SETUP);
        });
        utilities.append(restart);
    }

    const exit = document.createElement("button");
    exit.type = "button";
    exit.className = "reel-setup-utility-button";
    const originLabel = getReelSetupOriginContext()?.label ?? "Knots Guide";
    exit.textContent = ready ? `Done — ${originLabel}` : `Exit to ${originLabel}`;
    exit.addEventListener("click", returnFromReelSetupToOrigin);
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
    if (options.showSummary === false) section.append(heading, list);
    else section.append(heading, summary, list);
    cardGrid.parentNode.insertBefore(section, cardGrid);
    return section;
}


function renderReelSetupReferencePrompt(appMain, label, accessibleLabel, onOpen) {
    const cardGrid = appMain.querySelector("[data-view-card-grid]");
    if (!cardGrid || typeof onOpen !== "function") return;
    const prompt = document.createElement("div");
    prompt.className = "reel-setup-reference-prompt";
    prompt.innerHTML = `<span class="reel-setup-reference-prompt__label">${label}</span><button class="reference-info-button reel-setup-reference-prompt__button" type="button" aria-label="Open ${accessibleLabel}"><span aria-hidden="true">ⓘ</span></button>`;
    prompt.querySelector("button")?.addEventListener("click", (event) => onOpen(event.currentTarget));
    cardGrid.parentNode.insertBefore(prompt, cardGrid);
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
    renderReelSetupReferencePrompt(appMain, "Not sure which reel you have?", "Reel Identification Reference", openReelTypeReference);
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
    renderReelSetupReferencePrompt(appMain, "Need help choosing or identifying your line?", "Fishing Line Reference", openReelLineTypeReference);
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
            ${targetProfile.caution ? `<p class="reel-line-weight-picker__note"><strong>Keep in mind:</strong> ${targetProfile.caution}</p>` : ""}
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
        description: "Use the target strength reference as a starting point, then confirm the actual pound-test you intend to spool.",
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
        description: "Check the reel-capacity and rod line-rating markings for the line you selected before spooling.",
        cards: [],
        onCardSelect: () => {}
    });
    renderReelSetupReferencePrompt(appMain, "How do I read my reel and rod?", "Equipment Reference", openReelEquipmentReference);
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
    if (!reelType || !lineType || !reelSetupState.lineWeight) {
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
    const stageGuidance = getReelSpoolingStageGuidance(reelSetupState.reelType, stage.id);
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

    if (stageGuidance) {
        renderReelSetupGuidanceList(appMain, stageGuidance, { className: "reel-spool-guidance" });
    }
    if (lineType.id === "braid") {
        renderReelSetupReferencePrompt(appMain, "What about a leader?", "Leader Reference", openReelLeaderReference);
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

/* ==========================================================
   END GET YOUR REEL READY
   ========================================================== */

/* Explicit owner route contract. Registration is performed once at startup. */

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
    renderReelSetupGuidanceList(appMain, REEL_READY_GUIDANCE, { className: "reel-ready-guidance", showSummary: false });
    renderReelSetupPrimaryAction(appMain, {
        label: "Choose a Rig",
        onClick: () => {
            const completedContext = createCompletedReelSetupContext();
            if (!completedContext) {
                console.warn("Reel Setup could not create a completed Rig handoff context.");
                return;
            }

            if (!retainCompletedReelSetupContext(completedContext)) {
                console.warn("Reel Setup could not retain the completed context.");
                return;
            }
            resetReelSetupState();
            selectedRigId = null;
            selectedRigCollectionKey = "all";
            rigGuideState = createInitialRigGuideState();
            rigBrowseState = createInitialRigBrowseState();
            resetRigDetailState(null);
            clearDetailNavigationStack();
            showView(ROUTES.RIGS);
        }
    });
}
