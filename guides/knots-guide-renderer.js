/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: guides/knots-guide-renderer.js
   PURPOSE: Extracted owner functions and contracts from approved pre-migration source.
   ========================================================== */

"use strict";

/* ==========================================================
   KNOT GUIDE — RESULT + LANDING + DETAIL RENDERING
   ========================================================== */

function isCoreKnotRecord(record) {
    return Boolean(record?.id) &&
        typeof CORE_KNOT_IDS !== "undefined" &&
        CORE_KNOT_IDS.includes(record.id);
}

function buildKnotResultCardMarkup(knot) {
    const isCore = isCoreKnotRecord(knot);
    const classificationMarkup = `
        <span class="knot-result-card__classification">
            ${isCore ? '<span class="knot-result-card__classification-core">Core Knot</span><span class="knot-result-card__classification-separator" aria-hidden="true">·</span>' : ""}
            <span class="knot-result-card__classification-difficulty">${knot.difficulty}</span>
        </span>
    `;
    const aliases = Array.isArray(knot.aliases)
        ? knot.aliases.filter((alias) => typeof alias === "string" && alias.trim())
        : [];
    const aliasMarkup = aliases.length > 0
        ? `<span class="knot-result-card__aliases"><strong>Also called:</strong> ${aliases.join(", ")}</span>`
        : "";

    return `
        <button class="search-result-card search-result-card--knot${isCore ? " search-result-card--core" : ""}" type="button" data-result-id="${knot.id}">
            ${classificationMarkup}
            <span class="knot-result-card__heading-row">
                <span class="search-result-card__title">${knot.name}</span>
                <span class="search-result-card__action">View Knot <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></span>
            </span>
            ${aliasMarkup}
            <span class="search-result-card__summary">${knot.summary}</span>
        </button>
    `;
}

function renderKnotGuideLanding(appMain, config) {
    if (!appMain || !config || !Array.isArray(config.tasks) || !Array.isArray(config.collections)) {
        console.error("A valid Knot Guide landing configuration is required.");
        return;
    }

    const priorityTaskIds = new Set(["learn-core-knots"]);
    const startHereTasks = config.tasks.filter((task) => task.id === "learn-core-knots");
    const practicalTasks = config.tasks.filter((task) => task.id !== "learn-core-knots");
    const buildTaskMarkup = (tasks) => tasks.map((task) => {
        const actionText = task.id === "learn-core-knots" ? "Learn" : "View Knots";
        const isPriorityTask = priorityTaskIds.has(task.id);
        const taskClassName = [
            "dashboard-card",
            "knot-task-card",
            isPriorityTask ? "knot-task-card--priority" : ""
        ].filter(Boolean).join(" ");
        const priorityLabelMarkup = task.id === "learn-core-knots"
            ? '<span class="knot-priority-label">Recommended First</span>'
            : "";
        return `
            <button class="${taskClassName}" type="button" data-knot-task-id="${task.id}">
                ${priorityLabelMarkup}
                <span class="guide-card__heading-row">
                    <span class="dashboard-card__title">${task.title}</span>
                    <span class="dashboard-card__action dashboard-card__action--link">${actionText} <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></span>
                </span>
                <span class="dashboard-card__description">${task.description}</span>
            </button>
        `;
    }).join("");
    const startHereMarkup = buildTaskMarkup(startHereTasks);
    const taskMarkup = buildTaskMarkup(practicalTasks);

    const collectionMarkup = config.collections.map((collection) => {
        const isCoreCollection = collection.key === "core";
        const collectionClassName = [
            "dashboard-card",
            "guide-browse-card",
            "knot-collection-card",
            isCoreCollection ? "knot-guide-core-card" : ""
        ].filter(Boolean).join(" ");

        if (collection.isAvailable !== true) {
            return `
                <div class="${collectionClassName} dashboard-card--unavailable" aria-disabled="true">
                    <span class="guide-card__heading-row">
                        <span class="dashboard-card__title">${collection.title}</span>
                        <span class="dashboard-card__action dashboard-card__action--link">Coming Soon</span>
                    </span>
                    <span class="dashboard-card__description">${collection.description}</span>
                </div>
            `;
        }

        return `
            <button class="${collectionClassName}" type="button" data-knot-collection-key="${collection.key}">
                <span class="guide-card__heading-row">
                    <span class="dashboard-card__title">${collection.title}</span>
                    <span class="dashboard-card__action dashboard-card__action--link">Browse <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></span>
                </span>
                <span class="dashboard-card__description">${collection.description}</span>
            </button>
        `;
    }).join("");

    const reelSetupLines = Array.isArray(config.reelSetupContextLines)
        ? config.reelSetupContextLines.filter((line) => Array.isArray(line) && line.length > 0)
        : [];
    const workflowMarkup = reelSetupLines.length > 0
        ? `
            <section class="knot-guide-section knot-guide-workflow-section" aria-label="Current Reel Setup">
                <div class="guide-reel-setup-context knot-reel-setup-context">
                    <h3>Current Reel Setup</h3>
                    <div class="guide-reel-setup-context__summary">
                        ${reelSetupLines.map((line) => `
                            <p class="guide-reel-setup-context__line">${line.join('<span class="guide-reel-setup-context__separator" aria-hidden="true">·</span>')}</p>
                        `).join("")}
                    </div>
                    <div class="reel-setup-utilities">
                        <button class="reel-setup-utility-button" type="button" data-knot-reel-setup data-knot-reel-setup-update>Update Setup</button>
                        <button class="reel-setup-utility-button" type="button" data-knot-reel-setup-clear>Clear Setup</button>
                    </div>
                    <dialog class="reel-setup-clear-dialog" data-knot-reel-setup-clear-dialog aria-labelledby="knot-reel-setup-clear-title">
                        <div class="reel-setup-clear-dialog__body">
                            <h3 class="reel-setup-clear-dialog__title" id="knot-reel-setup-clear-title">Clear your Reel Setup?</h3>
                            <p>Your current Reel Setup will be removed until you complete Get Your Reel Ready again.</p>
                        </div>
                        <div class="reel-setup-clear-dialog__actions">
                            <button class="reel-setup-clear-dialog__button reel-setup-clear-dialog__cancel" type="button" data-knot-reel-setup-clear-cancel>Cancel</button>
                            <button class="reel-setup-clear-dialog__button reel-setup-clear-dialog__confirm" type="button" data-knot-reel-setup-clear-confirm>Clear Setup</button>
                        </div>
                    </dialog>
                </div>
            </section>
        `
        : `
            <section class="knot-guide-section knot-guide-workflow-section" aria-label="Reel setup workflow">
                <div class="dashboard-grid knot-guide-workflow-grid">
                    <button class="dashboard-card dashboard-card--workflow knot-reel-ready-card" type="button" data-knot-reel-setup>
                        <span class="guide-workflow-eyebrow">Guided Setup</span>
                        <span class="guide-card__heading-row">
                            <span class="dashboard-card__title">Get Your Reel Ready</span>
                            <span class="dashboard-card__action dashboard-card__action--link">Start Setup <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></span>
                        </span>
                        <span class="dashboard-card__description">Walk through reel type, line choice, line weight, equipment markings, and spool setup step by step.</span>
                    </button>
                </div>
            </section>
        `;

    appMain.innerHTML = `
        <section class="content-view knot-guide-view" aria-labelledby="knots-title">
            ${buildPageNavigationMarkup()}
            <header class="knot-guide-identity">
                <div class="knot-guide-identity__copy">
                    <h2 id="knots-title">Knots Guide</h2>
                    <p>Learn the essential fishing knots for attaching line to your reel, tying on hooks and lures, connecting lines, and making loop connections.</p>
                </div>
            </header>
            <form class="search-form section-search-form knot-guide-search-form" data-knot-search-form aria-labelledby="knot-guide-search-title">
                <h3 class="guide-search-heading" id="knot-guide-search-title"><label class="search-label" for="knot-guide-search-input">Search Knots</label></h3>
                <p class="search-help" id="knot-guide-search-help">Search by Knot name, task, line type, or difficulty.</p>
                ${buildSearchControlsMarkup("knot-guide-search-input", "Try Palomar, tie hook, braid, or beginner", {
                    showSubmitButton: false,
                    inputDescriptionId: "knot-guide-search-help"
                })}
            </form>
            <div class="section-search-results" data-knot-search-region hidden>
                <p class="search-status" data-search-status aria-live="polite"></p>
                <div class="search-results" data-search-results></div>
            </div>
            <div class="knot-guide-content" data-knot-guide-content>
${workflowMarkup}
                <section class="knot-guide-section knot-guide-section--start" aria-labelledby="knot-start-title">
                    <h3 id="knot-start-title">Start Here</h3>
                    <div class="dashboard-grid knot-task-grid">${startHereMarkup}</div>
                </section>
                <section class="knot-guide-section knot-guide-section--tasks" aria-labelledby="knot-task-title">
                    <h3 id="knot-task-title">What Are You Trying to Do?</h3>
                    <p>Choose the connection that matches what you need right now.</p>
                    <div class="dashboard-grid knot-task-grid">${taskMarkup}</div>
                </section>
                <section class="knot-guide-section knot-guide-section--collections" aria-labelledby="knot-collection-title">
                    <h3 id="knot-collection-title">Browse Knots</h3>
                    <div class="dashboard-grid knot-collection-grid">${collectionMarkup}</div>
                </section>
            </div>
        </section>
    `;

    initializeHomeNavigation(appMain);

    const searchForm = appMain.querySelector("[data-knot-search-form]");
    const searchInput = appMain.querySelector("#knot-guide-search-input");
    const clearButton = appMain.querySelector("[data-search-clear]");
    const searchRegion = appMain.querySelector("[data-knot-search-region]");
    const landingContent = appMain.querySelector("[data-knot-guide-content]");
    if (searchInput && typeof config.initialQuery === "string") searchInput.value = config.initialQuery;

    const updateSearch = () => {
        const query = searchInput?.value?.trim() ?? "";
        config.onQueryChange?.(query);
        const hasQuery = query.length > 0;
        if (searchRegion) searchRegion.hidden = !hasQuery;
        if (landingContent) landingContent.hidden = hasQuery;

        if (!hasQuery) {
            const status = appMain.querySelector("[data-search-status]");
            const results = appMain.querySelector("[data-search-results]");
            if (status) status.textContent = "";
            if (results) results.innerHTML = "";
            return;
        }

        config.onSearch?.(query);
    };
    initializeSearchControls(searchForm, searchInput, clearButton, updateSearch);
    updateSearch();

    appMain.querySelector("[data-knot-reel-setup]")?.addEventListener("click", () => {
        config.onWorkflowSelect?.();
    });
    const reelSetupClearButton = appMain.querySelector("[data-knot-reel-setup-clear]");
    const reelSetupClearDialog = appMain.querySelector("[data-knot-reel-setup-clear-dialog]");
    reelSetupClearButton?.addEventListener("click", () => {
        if (typeof reelSetupClearDialog?.showModal === "function") reelSetupClearDialog.showModal();
    });
    const restoreReelSetupClearFocus = () => {
        requestAnimationFrame(() => reelSetupClearButton?.focus({ preventScroll: true }));
    };
    reelSetupClearDialog?.addEventListener("cancel", restoreReelSetupClearFocus);
    appMain.querySelector("[data-knot-reel-setup-clear-cancel]")?.addEventListener("click", () => {
        reelSetupClearDialog?.close();
        restoreReelSetupClearFocus();
    });
    appMain.querySelector("[data-knot-reel-setup-clear-confirm]")?.addEventListener("click", () => {
        reelSetupClearDialog?.close();
        config.onWorkflowClear?.();
    });
    appMain.querySelectorAll("[data-knot-task-id]").forEach((card) => {
        card.addEventListener("click", () => config.onTaskSelect?.(card.dataset.knotTaskId));
    });
    appMain.querySelectorAll("[data-knot-collection-key]").forEach((card) => {
        card.addEventListener("click", () => config.onCollectionSelect?.(card.dataset.knotCollectionKey));
    });
}

const KNOT_USAGE_VISIBLE_RIG_LIMIT = 2;

function buildKnotUsageMarkup(record, usageContexts) {
    const taskContexts = Array.isArray(usageContexts?.tasks) ? usageContexts.tasks : [];
    const rigContexts = Array.isArray(usageContexts?.rigs) ? usageContexts.rigs : [];
    const reelSetupTask = taskContexts.find((usage) => usage.taskId === "attach-line-to-reel") ?? null;
    const commonTasks = taskContexts.filter((usage) => usage.taskId !== "attach-line-to-reel");
    const taskMarkup = commonTasks.length > 0
        ? `
            <section class="knot-usage-subsection" aria-labelledby="knot-common-tasks-title">
                <h4 class="detail-subsection-heading" id="knot-common-tasks-title">Common Tasks</h4>
                <div class="compact-link-list compact-link-list--divided knot-usage-list">
                    ${commonTasks.map((usage) => `
                        <div class="compact-link-row knot-usage-link">
                            <span class="compact-link-row__label">${usage.title}</span>
                            <button class="compact-link-row__action" type="button" data-knot-task-link-id="${usage.taskId}">View Knots <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></button>
                        </div>
                    `).join("")}
                </div>
            </section>
        `
        : "";
    const reelSetupMarkup = reelSetupTask
        ? `
            <section class="knot-usage-subsection knot-usage-subsection--workflow" aria-labelledby="knot-reel-setup-title">
                <h4 class="detail-subsection-heading" id="knot-reel-setup-title">Reel Setup</h4>
                <div class="compact-link-list knot-usage-list">
                    <div class="compact-link-row compact-link-row--workflow knot-usage-link">
                        <span class="compact-link-row__label">Attach Line to a Reel</span>
                        <button class="compact-link-row__action" type="button" data-knot-task-link-id="${reelSetupTask.taskId}">Get Reel Ready <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></button>
                    </div>
                </div>
            </section>
        `
        : "";
    const rigMarkup = rigContexts.length > 0
        ? `
            <section class="knot-usage-subsection" aria-labelledby="knot-rigs-title">
                <h4 class="detail-subsection-heading" id="knot-rigs-title">Rigs That Use This Knot</h4>
                <div class="compact-link-list compact-link-list--divided knot-usage-list">
                    ${rigContexts.map((usage, index) => `
                        <div class="compact-link-row compact-link-row--knot"${index >= KNOT_USAGE_VISIBLE_RIG_LIMIT && usageContexts?.rigsExpanded !== true ? " hidden data-knot-rig-usage-extra" : index >= KNOT_USAGE_VISIBLE_RIG_LIMIT ? " data-knot-rig-usage-extra" : ""}>
                            <span class="compact-link-row__label">${usage.title}</span>
                            <button class="compact-link-row__action" type="button" data-knot-rig-id="${usage.rigId}">View Rig <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></button>
                        </div>
                    `).join("")}
                </div>
                ${rigContexts.length > KNOT_USAGE_VISIBLE_RIG_LIMIT ? `<button class="knot-usage-expand" type="button" data-knot-usage-toggle data-knot-usage-count="${rigContexts.length}" aria-expanded="${usageContexts?.rigsExpanded === true ? "true" : "false"}">${usageContexts?.rigsExpanded === true ? "Show fewer" : `See all ${rigContexts.length} rigs`}</button>` : ""}
            </section>
        `
        : "";
    return `${reelSetupMarkup}${taskMarkup}${rigMarkup}`;
}

function initializeKnotUsageControls(appMain, detailConfig) {
    appMain.querySelectorAll("[data-knot-rig-id]").forEach((button) => {
        button.addEventListener("click", () => {
            detailConfig.onRigSelect?.(button.dataset.knotRigId);
        });
    });
    appMain.querySelectorAll("[data-knot-task-link-id]").forEach((button) => {
        button.addEventListener("click", () => {
            detailConfig.onTaskSelect?.(button.dataset.knotTaskLinkId);
        });
    });
    const toggle = appMain.querySelector("[data-knot-usage-toggle]");
    if (!toggle) return;

    const hiddenItems = Array.from(appMain.querySelectorAll("[data-knot-rig-usage-extra]"));
    const usageGroup = toggle.closest(".knot-detail-row__panel");
    toggle.addEventListener("click", () => {
        const willExpand = toggle.getAttribute("aria-expanded") !== "true";
        hiddenItems.forEach((item) => {
            item.hidden = !willExpand;
        });
        toggle.setAttribute("aria-expanded", String(willExpand));
        toggle.textContent = willExpand
            ? "Show fewer"
            : `See all ${toggle.dataset.knotUsageCount} rigs`;
        detailConfig.onUsageStateChange?.(willExpand);

        if (!willExpand && usageGroup) {
            const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches === true;
            window.requestAnimationFrame(() => {
                usageGroup.scrollIntoView({
                    behavior: reduceMotion ? "auto" : "smooth",
                    block: "start"
                });
            });
        }
    });
}


function buildKnotDetailDisclosureMarkup(disclosureId, title, bodyMarkup, expanded = false) {
    const panelId = `knot-detail-${disclosureId}-panel`;
    return `
        <div class="knot-detail-row knot-detail-row--disclosure">
            <button class="knot-detail-row__trigger" type="button"
                data-knot-disclosure-id="${disclosureId}"
                aria-expanded="${expanded ? "true" : "false"}"
                aria-controls="${panelId}">
                <span>${title}</span>
                <span class="knot-detail-row__state" aria-hidden="true">${expanded ? "▴" : "▾"}</span>
            </button>
            <div class="knot-detail-row__panel" id="${panelId}" data-knot-disclosure-panel="${disclosureId}"${expanded ? "" : " hidden"}>
                ${bodyMarkup}
            </div>
        </div>
    `;
}

function initializeKnotDetailDisclosures(appMain, detailConfig, expandedDisclosureIds = []) {
    const expanded = new Set(expandedDisclosureIds);
    appMain.querySelectorAll("[data-knot-disclosure-id]").forEach((trigger) => {
        trigger.addEventListener("click", () => {
            const disclosureId = trigger.dataset.knotDisclosureId;
            const panel = appMain.querySelector(`[data-knot-disclosure-panel="${disclosureId}"]`);
            const nextExpanded = trigger.getAttribute("aria-expanded") !== "true";
            trigger.setAttribute("aria-expanded", String(nextExpanded));
            if (panel) panel.hidden = !nextExpanded;
            const stateCue = trigger.querySelector(".knot-detail-row__state");
            if (stateCue) stateCue.textContent = nextExpanded ? "▴" : "▾";
            if (nextExpanded) expanded.add(disclosureId);
            else expanded.delete(disclosureId);
            detailConfig.onDisclosureStateChange?.([...expanded]);
        });
    });
}

function renderKnotInstructionDetail(appMain, detailConfig) {
    if (!appMain || !detailConfig?.record) {
        console.error("A valid Knot detail record is required.");
        return;
    }

    const record = detailConfig.record;
    const isCore = isCoreKnotRecord(record);
    const usageContexts = detailConfig.usageContexts ?? {};
    const expandedDisclosureIds = Array.isArray(detailConfig.expandedDisclosureIds)
        ? detailConfig.expandedDisclosureIds
        : [];
    const expanded = new Set(expandedDisclosureIds);
    const classificationMarkup = `
        <p class="detail-eyebrow knot-detail-classification">
            ${isCore ? '<span class="knot-detail-classification__core">Core Knot</span><span class="knot-detail-classification__separator" aria-hidden="true">·</span>' : ""}
            <span class="knot-detail-classification__difficulty">${record.difficulty}</span>
        </p>
    `;
    const aliasesMarkup = record.aliases?.length
        ? `<p class="knot-aliases"><strong>Also called:</strong> ${record.aliases.join(", ")}</p>`
        : "";
    const buildLineReference = (lineTypeId, roleLabel = "") => {
        const lineType = typeof REEL_LINE_TYPE_GUIDANCE !== "undefined"
            ? REEL_LINE_TYPE_GUIDANCE[lineTypeId]
            : null;
        const label = lineType?.title ?? lineTypeId;
        const visibleLabel = roleLabel ? `${label} ${roleLabel}` : label;
        return `
            <span class="knot-line-compatibility__label">${visibleLabel}</span>
            <button
                class="reference-info-button knot-line-reference-button"
                type="button"
                data-line-type-reference-id="${lineTypeId}"
                aria-label="Learn about ${label} fishing line"
            ><span aria-hidden="true">ⓘ</span></button>
        `;
    };
    const linePairings = Array.isArray(record.linePairings) ? record.linePairings : [];
    const lineCompatibilityMarkup = linePairings.length
        ? `
            <ul class="knot-line-compatibility-list">
                ${linePairings.map((pairing) => `
                    <li class="knot-line-compatibility-item">
                        ${buildLineReference(pairing.from)}
                        <span class="knot-line-compatibility__pairing-separator">to</span>
                        ${buildLineReference(pairing.to, pairing.toRole ?? "")}
                    </li>
                `).join("")}
            </ul>
        `
        : (record.compatibleLineTypes ?? []).length
            ? `
                <ul class="knot-line-compatibility-list">
                    ${(record.compatibleLineTypes ?? []).map((lineTypeId) => `
                        <li class="knot-line-compatibility-item">${buildLineReference(lineTypeId)}</li>
                    `).join("")}
                </ul>
            `
            : `<p class="knot-empty-context">No line compatibility guidance is currently available.</p>`;
    const usageMarkup = buildKnotUsageMarkup(record, usageContexts);
    const referencesBodyMarkup = record.referenceLinks?.length
        ? `
            <div class="rig-reference-links knot-reference-links">
                ${record.referenceLinks.map((reference) => `
                    <a class="rig-reference-link knot-reference-link" href="${reference.url}" target="_blank" rel="noopener noreferrer"><span class="reference-source-name">${reference.label}</span><span class="reference-source-action">Visit Site <span class="link-arrow link-arrow--external" aria-hidden="true">↗</span></span></a>
                `).join("")}
            </div>
        `
        : "";
    const instructionMediaMarkup = typeof buildKnotInstructionMediaMarkup === "function"
        ? buildKnotInstructionMediaMarkup(record)
        : "";
    const tyingStepsLabelMarkup = '<h4 class="detail-subsection-heading knot-tying-steps__label">Tying Steps</h4>';
    const buildSupportMarkup = instructionMediaMarkup
        ? `
            <section class="knot-build-subsection knot-build-subsection--support" aria-labelledby="knot-build-support-title">
                <h4 class="detail-subsection-heading" id="knot-build-support-title">Build Support</h4>
                <div class="knot-build-support__rows">
                    ${buildKnotDetailDisclosureMarkup(
                        "tying-animation",
                        "Tying Animation",
                        instructionMediaMarkup,
                        expanded.has("tying-animation")
                    )}
                </div>
            </section>
        `
        : "";
    const navigationClassName = "";

    const aboutMarkup = [
        buildKnotDetailDisclosureMarkup(
            "best-for",
            "Best For",
            `<h4 class="detail-subsection-heading">Recommended Uses</h4><ul class="detail-list">${record.bestFor.map((item) => `<li>${item}</li>`).join("")}</ul>`,
            expanded.has("best-for")
        ),
        buildKnotDetailDisclosureMarkup(
            "line-compatibility",
            "Line Compatibility",
            `<h4 class="detail-subsection-heading">Compatible Line Types</h4>${lineCompatibilityMarkup}`,
            expanded.has("line-compatibility")
        ),
        buildKnotDetailDisclosureMarkup(
            "where-used",
            "Where You'll Use It",
            usageMarkup,
            expanded.has("where-used")
        )
    ].join("");

    const chooseAnotherKnot = Array.isArray(record.chooseAnotherKnot) ? record.chooseAnotherKnot : [];
    const moreHelpMarkup = chooseAnotherKnot.length > 0
        ? buildKnotDetailDisclosureMarkup(
            "choose-another",
            "When to Choose Another Knot",
            `<h4 class="detail-subsection-heading">When to Switch</h4><ul class="detail-list">${chooseAnotherKnot.map((item) => `<li>${item}</li>`).join("")}</ul>`,
            expanded.has("choose-another")
        )
        : "";

    appMain.innerHTML = `
        <article class="detail-view detail-view--knot" aria-labelledby="knot-detail-title">
            ${buildPageNavigationMarkup(detailConfig.parentLabel, navigationClassName)}
            <header class="detail-header knot-detail-header">
                ${classificationMarkup}
                <h2 id="knot-detail-title">${record.name}</h2>
                <p>${record.summary}</p>
                ${aliasesMarkup}
            </header>
            <section class="detail-section detail-section--build knot-tying-section" aria-labelledby="knot-tying-title">
                <h3 id="knot-tying-title">How to Tie It</h3>
                ${tyingStepsLabelMarkup}
                <ol class="detail-steps knot-tying-steps">${record.tyingSteps.map((step) => `<li>${step}</li>`).join("")}</ol>
                ${buildSupportMarkup}
            </section>
            <section class="detail-section detail-section--supporting knot-check-section" aria-labelledby="knot-check-title">
                <h3 id="knot-check-title">Check Your Knot</h3>
                <section class="knot-check-subsection" aria-labelledby="knot-final-checks-title">
                    <h4 class="detail-subsection-heading" id="knot-final-checks-title">Final Checks</h4>
                    <ul class="detail-list">${record.finalChecks.map((check) => `<li>${check}</li>`).join("")}</ul>
                </section>
                <section class="knot-check-subsection" aria-labelledby="knot-common-mistakes-title">
                    <h4 class="detail-subsection-heading" id="knot-common-mistakes-title">Common Mistakes</h4>
                    <ul class="detail-list">${record.commonMistakes.map((mistake) => `<li>${mistake}</li>`).join("")}</ul>
                </section>
            </section>
            <section class="knot-detail-group knot-detail-group--about" aria-labelledby="knot-about-title">
                <h3 class="knot-detail-group__title" id="knot-about-title">About This Knot</h3>
                <div class="knot-detail-group__shell">${aboutMarkup}</div>
            </section>
            ${moreHelpMarkup ? `
                <section class="knot-detail-group knot-detail-group--more-help" aria-labelledby="knot-more-help-title">
                    <h3 class="knot-detail-group__title" id="knot-more-help-title">More Help</h3>
                    <div class="knot-detail-group__shell">${moreHelpMarkup}</div>
                </section>
            ` : ""}
            ${referencesBodyMarkup ? `
                <section class="knot-detail-group knot-detail-group--sources" aria-label="Sources & References">
                    <div class="knot-detail-group__shell">
                        ${buildKnotDetailDisclosureMarkup(
                            "sources",
                            "Sources & References",
                            `<h4 class="detail-subsection-heading">Verified References</h4>${referencesBodyMarkup}`,
                            expanded.has("sources")
                        )}
                    </div>
                </section>
            ` : ""}
        </article>
    `;

    appMain.querySelector("[data-parent-navigation]")?.addEventListener("click", detailConfig.onParent);
    initializeKnotDetailDisclosures(appMain, detailConfig, expandedDisclosureIds);
    initializeKnotUsageControls(appMain, detailConfig);
    initializeLineTypeReferenceLinks(appMain);
    initializeHomeNavigation(appMain);
}

/* ==========================================================
   END KNOT GUIDE
   ========================================================== */
