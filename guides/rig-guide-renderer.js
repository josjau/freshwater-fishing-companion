/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: guides/rig-guide-renderer.js
   PURPOSE: Extracted owner functions and contracts from approved pre-migration source.
   ========================================================== */

"use strict";

function isCoreRigRecord(record) {
    return Boolean(record?.id) &&
        typeof CORE_RIG_IDS !== "undefined" &&
        CORE_RIG_IDS.includes(record.id);
}


/* ==========================================================
   RIGS GUIDE — LANDING + SEARCH / BROWSE RESULT PRESENTATION
   ========================================================== */

function buildRigResultCardMarkup(rig) {
    const isCore = isCoreRigRecord(rig);
    const classificationMarkup = `
        <span class="rig-result-card__classification">
            ${isCore ? '<span class="rig-result-card__classification-core">Core Rig</span><span class="rig-result-card__classification-separator" aria-hidden="true">·</span>' : ""}
            <span class="rig-result-card__classification-difficulty">${rig.difficulty}</span>
        </span>
    `;

    return `
        <button class="search-result-card search-result-card--rig${isCore ? " search-result-card--core" : ""}" type="button" data-result-id="${rig.id}">
            ${classificationMarkup}
            <span class="rig-result-card__heading-row">
                <span class="search-result-card__title">${rig.name}</span>
                <span class="search-result-card__action">View Rig <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></span>
            </span>
            <span class="search-result-card__summary">${rig.summary}</span>
        </button>
    `;
}

function renderRigSearchResults(appMain, records, resultConfig = {}) {
    const resultsContainer = appMain?.querySelector("[data-search-results]");
    const status = appMain?.querySelector("[data-search-status]");
    if (!resultsContainer || !status) {
        console.error("Rig search result containers were not created.");
        return;
    }

    const query = String(resultConfig.query ?? "").trim();
    const hasQuery = query.length > 0;
    const resultRecords = Array.isArray(records) ? records : [];

    if (resultRecords.length === 0) {
        status.textContent = hasQuery
            ? "No rigs found. Try another search."
            : "No rigs are available in this collection.";
        resultsContainer.innerHTML = "";
        return;
    }

    const rigLabel = resultRecords.length === 1 ? "rig" : "rigs";
    status.textContent = hasQuery
        ? `${resultRecords.length} ${rigLabel} found`
        : `${resultRecords.length} ${rigLabel}`;
    resultsContainer.innerHTML = resultRecords.map(buildRigResultCardMarkup).join("");

    if (typeof resultConfig.onResultSelect !== "function") return;
    resultsContainer.querySelectorAll("[data-result-id]").forEach((resultCard) => {
        resultCard.addEventListener("click", () => resultConfig.onResultSelect(resultCard.dataset.resultId));
    });
}

function renderRigGuideLanding(appMain, config) {
    if (!appMain || !config || !Array.isArray(config.cards)) {
        console.error("A valid Rigs Guide landing configuration is required.");
        return;
    }

    const coreCard = config.cards.find((card) => card.id === "browse-core-rigs");
    const startHereMarkup = coreCard ? `
        <section class="rig-guide-section rig-guide-start-section" aria-labelledby="rig-start-title">
            <h3 id="rig-start-title">Start Here</h3>
            <div class="dashboard-grid rig-guide-core-grid">
                <button class="dashboard-card guide-curated-card rig-guide-learn-core" type="button" data-card-id="${coreCard.id}" data-rig-card-id="${coreCard.id}">
                    <span class="guide-curated-card__eyebrow">Recommended First</span>
                    <span class="guide-card__heading-row">
                            <span class="dashboard-card__title">${coreCard.title}</span>
                        <span class="dashboard-card__action dashboard-card__action--link">Start Learning <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></span>
                    </span>
                    <span class="dashboard-card__description">${coreCard.description}</span>
                </button>
            </div>
        </section>` : "";
    const browseMarkup = config.cards.filter((card) => card.id !== "browse-core-rigs").map((card) => {
        const className = [
            "dashboard-card",
            "guide-browse-card",
            "rig-collection-card",
            card.id === "browse-core-rigs" ? "rig-guide-core-card" : ""
        ].filter(Boolean).join(" ");

        return `
            <button class="${className}" type="button" data-card-id="${card.id}" data-rig-card-id="${card.id}">
                <span class="guide-card__heading-row">
                    <span class="dashboard-card__title">${card.title}</span>
                    <span class="dashboard-card__action dashboard-card__action--link">Browse <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></span>
                </span>
                <span class="dashboard-card__description">${card.description}</span>
            </button>
        `;
    }).join("");

    appMain.innerHTML = `
        <section class="content-view rig-guide-view" aria-labelledby="rig-guide-title">
            ${buildPageNavigationMarkup()}
            <header class="rig-guide-identity">
                <h2 id="rig-guide-title">Rigs Guide</h2>
                <p>${config.description}</p>
            </header>
            <form class="search-form section-search-form rig-guide-search-form" data-rig-search-form aria-labelledby="rig-guide-search-title">
                <h3 class="guide-search-heading" id="rig-guide-search-title"><label class="search-label" for="rig-guide-search-input">Search Rigs</label></h3>
                <p class="search-help" id="rig-guide-search-help">Search by Rig name, difficulty, use case, condition, or setup.</p>
                ${buildSearchControlsMarkup("rig-guide-search-input", config.searchPlaceholder, {
                    showSubmitButton: false,
                    inputDescriptionId: "rig-guide-search-help"
                })}
            </form>
            <div class="section-search-results" data-rig-search-region hidden>
                <p class="search-status" data-search-status aria-live="polite"></p>
                <div class="search-results" data-search-results></div>
            </div>
            <div class="rig-guide-content" data-rig-guide-content>
                <div data-rig-reel-setup-slot></div>
                ${startHereMarkup}
                <section class="rig-guide-section" aria-labelledby="rig-browse-title">
                    <h3 id="rig-browse-title">Browse Rigs</h3>
                    <div class="dashboard-grid rig-collection-grid">${browseMarkup}</div>
                </section>
            </div>
        </section>
    `;

    initializeHomeNavigation(appMain);

    const searchForm = appMain.querySelector("[data-rig-search-form]");
    const searchInput = appMain.querySelector("#rig-guide-search-input");
    const clearButton = appMain.querySelector("[data-search-clear]");
    const searchRegion = appMain.querySelector("[data-rig-search-region]");
    const guideContent = appMain.querySelector("[data-rig-guide-content]");
    if (searchInput && typeof config.initialQuery === "string") searchInput.value = config.initialQuery;

    const updateSearch = () => {
        const query = searchInput?.value?.trim() ?? "";
        config.onQueryChange?.(query);
        const hasQuery = query.length > 0;
        if (searchRegion) searchRegion.hidden = !hasQuery;
        if (guideContent) guideContent.hidden = hasQuery;

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

    appMain.querySelectorAll("[data-rig-card-id]").forEach((card) => {
        card.addEventListener("click", () => config.onCardSelect?.(card.dataset.rigCardId));
    });
}

/* ==========================================================
   END RIGS GUIDE — LANDING + SEARCH / BROWSE RESULT PRESENTATION
   ========================================================== */


/* ==========================================================
   RIG GUIDE — KNOT APPLICATION PRESENTATION
   ========================================================== */
function getKnotRecord(knotId) {
    if (!knotId || typeof KNOT_DATA === "undefined") return null;
    const record = findRecordById(KNOT_DATA, knotId);
    return record?.isActive === true ? record : null;
}

function getRigKnotPurposeText(knot) {
    if (Array.isArray(knot?.bestFor) && knot.bestFor.length > 0) {
        return knot.bestFor[0];
    }
    return knot?.summary ?? "";
}

function getRigKnotLineCompatibilityText(knot) {
    const labels = {
        monofilament: "monofilament",
        fluorocarbon: "fluorocarbon",
        braid: "braid"
    };
    const lineTypes = Array.isArray(knot?.compatibleLineTypes)
        ? knot.compatibleLineTypes.map((lineType) => labels[lineType] ?? lineType).filter(Boolean)
        : [];
    if (lineTypes.length === 0) return "";
    if (lineTypes.length === 1) return `Line compatibility: ${lineTypes[0]}.`;
    if (lineTypes.length === 2) return `Line compatibility: ${lineTypes[0]} and ${lineTypes[1]}.`;
    return `Line compatibility: ${lineTypes.slice(0, -1).join(", ")}, and ${lineTypes[lineTypes.length - 1]}.`;
}

function buildRigKnotRecommendationMarkup(knotId) {
    const knot = getKnotRecord(knotId);
    if (!knot) {
        console.warn(`Canonical Knot record was not found: ${knotId}`);
        return "";
    }

    const purpose = getRigKnotPurposeText(knot);
    const compatibility = getRigKnotLineCompatibilityText(knot);
    const contextParts = [purpose, compatibility].filter(Boolean);

    return `
        <div class="rig-knot-recommendation">
            <span class="rig-knot-recommendation__heading">
                <span class="rig-knot-recommendation__name">${knot.name}</span>
                <button class="rig-knot-recommendation__action" type="button" data-rig-knot-id="${knot.id}">View Knot <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></button>
            </span>
            ${contextParts.length > 0 ? `<span class="rig-knot-recommendation__context">${contextParts.join(" ")}</span>` : ""}
        </div>
    `;
}

function getRigUniqueKnotIds(record) {
    const uniqueKnotIds = [];
    const seen = new Set();
    (Array.isArray(record?.knotApplications) ? record.knotApplications : []).forEach((application) => {
        (Array.isArray(application?.recommendedKnotIds) ? application.recommendedKnotIds : []).forEach((knotId) => {
            if (!knotId || seen.has(knotId)) return;
            seen.add(knotId);
            uniqueKnotIds.push(knotId);
        });
    });
    return uniqueKnotIds;
}

function buildRigKnotApplicationsMarkup(record) {
    const knotIds = getRigUniqueKnotIds(record);
    if (knotIds.length === 0) return "";

    return `
        <section class="rig-build-subsection rig-build-subsection--knots" aria-labelledby="rig-knots-title">
            <h4 class="detail-subsection-heading" id="rig-knots-title">Knots You'll Tie</h4>
            <p class="rig-build-subsection__intro">These knots work for one or more connections in this Rig. Build Steps show where each can be used.</p>
            <div class="rig-knot-recommendation-list rig-knot-recommendation-list--unique">
                ${knotIds.map((knotId) => buildRigKnotRecommendationMarkup(knotId)).filter(Boolean).join("")}
            </div>
        </section>
    `;
}

function getRigKnotIdsForStep(record, stepIndex) {
    const knotIds = [];
    const seen = new Set();
    (Array.isArray(record?.knotApplications) ? record.knotApplications : []).forEach((application) => {
        if (application?.assemblyStepIndex !== stepIndex) return;
        (Array.isArray(application.recommendedKnotIds) ? application.recommendedKnotIds : []).forEach((knotId) => {
            if (!knotId || seen.has(knotId)) return;
            seen.add(knotId);
            knotIds.push(knotId);
        });
    });
    return knotIds;
}

function buildRigBuildStepKnotOptionsMarkup(record, stepIndex) {
    const knotIds = getRigKnotIdsForStep(record, stepIndex);
    if (knotIds.length === 0) return "";
    const label = knotIds.length === 1 ? "Knot:" : "Knot options:";
    const knotNames = knotIds
        .map((knotId) => getKnotRecord(knotId)?.name ?? "")
        .filter(Boolean)
        .map((knotName) => `<span class="rig-build-step__knot-name">${knotName}</span>`)
        .join('<span class="rig-build-step__knot-separator" aria-hidden="true">·</span>');
    return `
        <div class="rig-build-step__knots">
            <span class="rig-build-step__knots-label">${label}</span>
            <span class="rig-build-step__knot-names">${knotNames}</span>
        </div>
    `;
}

function buildRigBuildStepsMarkup(record, selectedBaitId = null) {
    const steps = Array.isArray(record?.assemblySteps) ? record.assemblySteps : [];
    const contextualNotes = selectedBaitId === "tube" && Array.isArray(record?.baitSpecificAssemblyNotes)
        ? record.baitSpecificAssemblyNotes.filter((note) => note.lureBaitId === selectedBaitId)
        : [];
    return `<ol class="detail-steps rig-build-steps">${steps.map((step, stepIndex) => `
        <li class="rig-build-step">
            <div class="rig-build-step__instruction">${step}</div>
            ${buildRigBuildStepKnotOptionsMarkup(record, stepIndex)}
            ${contextualNotes.filter((note) => note.afterStepIndex === stepIndex)
                .map((note) => `<p class="rig-build-step__context-note" data-rig-bait-build-note="tube">${note.text}</p>`).join("")}
        </li>
    `).join("")}</ol>`;
}

/* ==========================================================
   END RIG GUIDE — KNOT APPLICATION PRESENTATION
   ========================================================== */

/* ==========================================================
   RIG GUIDE — DETAIL SUPPORT + DISCLOSURE PRESENTATION
   ========================================================== */
function buildRigReferenceLinks(record) {
    if (!Array.isArray(record?.referenceLinks) || record.referenceLinks.length === 0) return "";
    return `
        <p class="rig-reference-intro">Use these external sources for additional technical cross-checking.</p>
        <ul class="rig-reference-list">
            ${record.referenceLinks.map((reference) => `
                <li><a class="rig-reference-link" href="${reference.url}" target="_blank" rel="noopener noreferrer"><span class="reference-source-name">${reference.label}</span><span class="reference-source-action">Visit Site <span class="link-arrow link-arrow--external" aria-hidden="true">↗</span></span></a></li>
            `).join("")}
        </ul>
    `;
}

function buildRigAboutTextList(items) {
    if (!Array.isArray(items) || items.length === 0) return "";
    return `<ul class="detail-list rig-about-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

const RIG_CONDITION_REFERENCE_IDS = Object.freeze({
    "Clear Water": "water-clarity-clear",
    "Deep Water": "deep",
    "Docks": "cover-dock-man-made",
    "Heavy Cover": "heavy-cover",
    "Light Cover": "light-cover",
    "Sparse Cover": "light-cover",
    "Light Current": "current-light",
    "Open Water": "open-water",
    "Shallow Water": "shallow",
    "Stained Water": "water-clarity-stained",
    "Vegetation": "vegetation"
});

const RIG_CONDITION_DISPLAY_LABELS = Object.freeze({
    "Sparse Cover": "Light Cover"
});

function buildRigConditionReferenceMarkup(items) {
    if (!Array.isArray(items) || items.length === 0) return "";

    const references = [];
    const seenConditionIds = new Set();
    items.forEach((item) => {
        const conditionId = RIG_CONDITION_REFERENCE_IDS[item];
        if (!conditionId || seenConditionIds.has(conditionId)) return;
        if (!getConditionRecord(conditionId)) return;
        seenConditionIds.add(conditionId);
        references.push({
            conditionId,
            label: RIG_CONDITION_DISPLAY_LABELS[item] ?? item
        });
    });

    if (references.length === 0) return "";
    return `<ul class="rig-about-list rig-about-list--references">${references.map(({ conditionId, label }) => `
        <li class="rig-about-reference-item">
            <span class="rig-about-reference-term">${label}</span>
            <button class="reference-info-button rig-about-reference-cue" type="button" data-condition-id="${conditionId}" aria-label="Learn about ${label}"><span aria-hidden="true">&#9432;</span></button>
        </li>
    `).join("")}</ul>`;
}

function buildRigTechniqueReferenceMarkup(rigId, lureBaitId = null) {
    const techniques = getRigTechniqueRecords(rigId, lureBaitId);
    if (techniques.length === 0) return "";
    return `<ul class="rig-about-list rig-about-list--references">${techniques.map((technique) => `
        <li class="rig-about-reference-item">
            <span class="rig-about-reference-term">${technique.name}</span>
            <button class="reference-info-button rig-about-reference-cue" type="button" data-technique-id="${technique.id}" aria-label="Learn about ${technique.name}"><span aria-hidden="true">&#9432;</span></button>
        </li>
    `).join("")}</ul>`;
}

// One visible teaching lead, with only source-derived alternatives. The
// compatibility projection is supplied by the Rig Guide controller.
function buildRigTechniqueLearningMarkup(context, expanded = false) {
    if (!context?.lead) return "";
    const leadMarkup = `
        <div class="rig-technique-lesson-card">
            <div class="rig-technique-lesson-card__heading">
                <strong class="rig-technique-lesson-card__name">${context.lead.name}</strong>
                <button class="rig-technique-lesson-card__action" type="button"
                    data-rig-view-technique-id="${context.lead.id}">View Technique
                    <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span>
                </button>
            </div>
            <p class="rig-technique-lesson-card__why">${context.why}</p>
        </div>`;
    const exampleMarkup = context.isExample
        ? `<p class="rig-technique-example-label">Teaching example only — no bait selected${context.exampleBait
            ? `: ${context.lead.name} with a ${context.exampleBait.name}` : ""}.</p>` : "";
    const extraTechniqueCount = Math.max(0, context.others.length - 1);
    const alternativeRow = (technique) => `
        <div class="compact-link-row">
            <span class="compact-link-row__label">${technique.name}</span>
            <button class="compact-link-row__action" type="button"
                data-rig-view-technique-id="${technique.id}">View Technique
                <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span>
            </button>
        </div>`;
    const alternativesMarkup = context.others.length > 0 ? `
        <section class="rig-technique-others" aria-labelledby="rig-technique-others-title">
            <h5 id="rig-technique-others-title" class="detail-subsection-heading">Other Compatible Techniques</h5>
            <div class="compact-link-list compact-link-list--divided">${alternativeRow(context.others[0])}</div>
            ${extraTechniqueCount ? `
                <button class="knot-usage-expand" type="button" data-rig-technique-toggle-more
                    aria-expanded="${expanded ? "true" : "false"}"
                    aria-controls="rig-technique-other-list">${expanded ? "Show fewer" : `Show ${extraTechniqueCount} more ${extraTechniqueCount === 1 ? "technique" : "techniques"}`}</button>
                <div class="compact-link-list compact-link-list--divided rig-technique-other-list"
                    id="rig-technique-other-list" data-rig-technique-other-list${expanded ? "" : " hidden"}>
                    ${context.others.slice(1).map(alternativeRow).join("")}
                </div>` : ""}
        </section>` : "";
    return `
        <div class="rig-technique-learning" data-rig-technique-learning>
            <section class="rig-technique-learn-first" aria-labelledby="rig-technique-learn-first-title">
                <h5 id="rig-technique-learn-first-title" class="detail-subsection-heading">Learn First</h5>
                ${exampleMarkup}
                ${leadMarkup}
            </section>
            ${context.rigOnly ? `<p class="rig-technique-rig-only">These Technique connections are verified for the Rig; no specific bait pairing has been established.</p>` : ""}
            ${alternativesMarkup}
        </div>`;
}

function initializeRigTechniqueLearningControls(appMain, detailConfig) {
    const panel = appMain.querySelector("[data-rig-technique-learning]");
    if (!panel) return;
    panel.querySelectorAll("[data-rig-view-technique-id]").forEach((button) => {
        button.addEventListener("click", () => detailConfig.onTechniqueSelect?.(button.dataset.rigViewTechniqueId));
    });
    const toggle = panel.querySelector("[data-rig-technique-toggle-more]");
    const alternatives = panel.querySelector("[data-rig-technique-other-list]");
    toggle?.addEventListener("click", () => {
        if (!alternatives) return;
        const nextExpanded = toggle.getAttribute("aria-expanded") !== "true";
        toggle.setAttribute("aria-expanded", String(nextExpanded));
        const remaining = detailConfig.techniqueLearning.others.length - 1;
        toggle.textContent = nextExpanded ? "Show fewer" : `Show ${remaining} more ${remaining === 1 ? "technique" : "techniques"}`;
        alternatives.hidden = !nextExpanded;
        detailConfig.onOtherTechniquesStateChange?.(nextExpanded);
    });
}

function buildRigAboutOverviewMarkup(useCasesMarkup, conditionsMarkup, techniquesMarkup) {
    const groups = [
        useCasesMarkup ? `
            <section class="rig-about-subsection" aria-labelledby="rig-about-use-it-for-title">
                <h4 class="detail-subsection-heading" id="rig-about-use-it-for-title">Use It For</h4>
                ${useCasesMarkup}
            </section>
        ` : "",
        conditionsMarkup ? `
            <section class="rig-about-subsection" aria-labelledby="rig-about-good-conditions-title">
                <h4 class="detail-subsection-heading" id="rig-about-good-conditions-title">Good Conditions</h4>
                ${conditionsMarkup}
            </section>
        ` : "",
        techniquesMarkup ? `
            <section class="rig-about-subsection rig-about-subsection--techniques" aria-labelledby="rig-about-techniques-title">
                <h4 class="detail-subsection-heading" id="rig-about-techniques-title">Techniques</h4>
                ${techniquesMarkup}
            </section>
        ` : ""
    ].filter(Boolean);
    if (groups.length === 0) return "";
    return `<div class="rig-about-overview">${groups.join("")}</div>`;
}

function buildRigDetailDisclosureMarkup(disclosureId, title, bodyMarkup, expanded = false) {
    const panelId = `rig-detail-${disclosureId}-panel`;
    return `
        <div class="rig-detail-row rig-detail-row--disclosure">
            <button class="rig-detail-row__trigger" type="button"
                data-rig-disclosure-id="${disclosureId}"
                aria-expanded="${expanded ? "true" : "false"}"
                aria-controls="${panelId}">
                <span>${title}</span>
                <span class="rig-detail-row__state" aria-hidden="true">${expanded ? "▴" : "▾"}</span>
            </button>
            <div class="rig-detail-row__panel" id="${panelId}" data-rig-disclosure-panel="${disclosureId}"${expanded ? "" : " hidden"}>
                ${bodyMarkup}
            </div>
        </div>
    `;
}

function buildRigTutorialDisclosureBody(tutorial) {
    if (!tutorial || tutorial.platform !== "youtube" || !tutorial.videoId || !tutorial.externalUrl) return "";
    return `
        <div class="rig-tutorial" data-rig-tutorial-video-id="${tutorial.videoId}" data-rig-tutorial-title="${tutorial.title}">
            <div class="rig-tutorial__meta">
                <span class="rig-tutorial__media-type">Video Tutorial</span>
                <p class="rig-tutorial__title">${tutorial.title}</p>
                <p class="rig-tutorial__creator">${tutorial.creator}</p>
            </div>
            <div class="rig-tutorial__player" data-rig-tutorial-player></div>
            <a class="rig-tutorial__external" href="${tutorial.externalUrl}" target="_blank" rel="noopener noreferrer"><span>${tutorial.creator || "Video source"}</span><span class="reference-source-action">Visit Site <span class="link-arrow link-arrow--external" aria-hidden="true">↗</span></span></a>
        </div>
    `;
}

function setRigTutorialPlayerState(panel, expanded) {
    const tutorial = panel?.querySelector("[data-rig-tutorial-video-id]");
    const player = panel?.querySelector("[data-rig-tutorial-player]");
    if (!tutorial || !player) return;

    if (!expanded) {
        player.replaceChildren();
        return;
    }

    if (player.querySelector("iframe")) return;
    const videoId = tutorial.dataset.rigTutorialVideoId;
    if (!videoId) return;

    const iframe = document.createElement("iframe");
    iframe.className = "rig-tutorial__iframe";
    iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?rel=0`;
    iframe.title = tutorial.dataset.rigTutorialTitle || "Rig tutorial";
    iframe.loading = "lazy";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allow = "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    player.replaceChildren(iframe);
}

function initializeRigDetailDisclosures(appMain, detailConfig, expandedDisclosureIds = []) {
    const expanded = new Set(expandedDisclosureIds);
    appMain.querySelectorAll("[data-rig-disclosure-id]").forEach((trigger) => {
        const disclosureId = trigger.dataset.rigDisclosureId;
        const panel = disclosureId
            ? appMain.querySelector(`[data-rig-disclosure-panel="${disclosureId}"]`)
            : null;
        if (disclosureId === "rig-tutorial" && panel) {
            setRigTutorialPlayerState(panel, trigger.getAttribute("aria-expanded") === "true");
        }

        trigger.addEventListener("click", () => {
            if (!disclosureId || !panel) return;
            const nextExpanded = trigger.getAttribute("aria-expanded") !== "true";
            trigger.setAttribute("aria-expanded", nextExpanded ? "true" : "false");
            panel.hidden = !nextExpanded;
            const stateCue = trigger.querySelector(".rig-detail-row__state");
            if (stateCue) stateCue.textContent = nextExpanded ? "▴" : "▾";
            if (disclosureId === "rig-tutorial") {
                setRigTutorialPlayerState(panel, nextExpanded);
            }
            if (nextExpanded) expanded.add(disclosureId);
            else expanded.delete(disclosureId);
            detailConfig.onDisclosureStateChange?.([...expanded]);
        });
    });
}

/* ==========================================================
   END RIG GUIDE — DETAIL SUPPORT + DISCLOSURE PRESENTATION
   ========================================================== */

/* ==========================================================
   RIG GUIDE — DETAIL RENDERING + READINESS
   ========================================================== */
function renderInstructionDetail(appMain, detailConfig) {
    if (!appMain || !detailConfig?.record) {
        console.error("A valid instructional detail record is required.");
        return;
    }

    const record = detailConfig.record;
    const selections = detailConfig.selections ?? {};
    const configurations = Array.isArray(record.configurations) ? record.configurations : [];
    const selectedConfiguration = configurations.length > 0
        ? configurations.find((configuration) => configuration.id === detailConfig.selectedConfigurationId) ?? null
        : null;
    const effectiveRecord = selectedConfiguration
        ? {
            ...record,
            useCases: selectedConfiguration.useCases ?? [],
            conditionTags: selectedConfiguration.conditionTags ?? [],
            referenceLinks: selectedConfiguration.referenceLinks ?? [],
            componentRequirements: selectedConfiguration.componentRequirements ?? [],
            lureBaitRequirements: selectedConfiguration.lureBaitRequirements ?? [],
            knotApplications: selectedConfiguration.knotApplications ?? [],
            assemblySteps: selectedConfiguration.assemblySteps ?? [],
            setupNotes: selectedConfiguration.setupNotes ?? [],
            commonMistakes: selectedConfiguration.commonMistakes ?? [],
            tutorialVideo: selectedConfiguration.tutorialVideo ?? null
        }
        : record;
    const presentation = detailConfig.requirementPresentation ?? {};
    const componentRequirements = presentation.componentRequirements ?? effectiveRecord.componentRequirements ?? [];
    const lureBaitRequirements = presentation.lureBaitRequirements ?? effectiveRecord.lureBaitRequirements ?? [];
    const requirementRows = presentation.rows ?? [
        ...lureBaitRequirements.map((requirement) => ({ type: "lure-bait", requirement })),
        ...componentRequirements.map((requirement) => ({ type: "tackle", requirement }))
    ];
    const safetyNotes = Array.isArray(effectiveRecord.safetyNotes) ? effectiveRecord.safetyNotes : [];
    const setupNotes = Array.isArray(effectiveRecord.setupNotes) ? effectiveRecord.setupNotes : [];
    const commonMistakes = Array.isArray(effectiveRecord.commonMistakes) ? effectiveRecord.commonMistakes : [];
    const expandedDisclosureIds = Array.isArray(detailConfig.expandedDisclosureIds)
        ? detailConfig.expandedDisclosureIds
        : [];
    const expanded = new Set(expandedDisclosureIds);
    const isCoreRig = isCoreRigRecord(record);
    const classificationMarkup = `
        <p class="detail-eyebrow rig-detail-classification">
            ${isCoreRig ? '<span class="rig-detail-classification__core">Core Rig</span><span class="rig-detail-classification__separator" aria-hidden="true">·</span>' : ""}
            <span class="rig-detail-classification__difficulty">${record.difficulty}</span>
        </p>
    `;
    const reelSetupLines = Array.isArray(detailConfig.reelSetupContextLines)
        ? detailConfig.reelSetupContextLines.filter((line) => Array.isArray(line) && line.length > 0)
        : [];
    const baitChoices = detailConfig.techniqueLearning?.selectionMode === "explicit"
        ? detailConfig.techniqueLearning.choices : [];
    const isConfiguredRig = configurations.length > 0;
    const hasBaitSelector = !isConfiguredRig && baitChoices.length > 0;
    const configOptions = isConfiguredRig
        ? configurations.map((configuration) => ({ id: configuration.id, label: configuration.name }))
        : baitChoices.map((choice) => ({ id: choice.lureBaitId, label: choice.bait.name }));
    const selectedOptionId = isConfiguredRig ? detailConfig.selectedConfigurationId : detailConfig.selectedBaitId;
    const selectLabel = isConfiguredRig ? "Choose a Setup" : "Choose a Bait";
    const configurationMarkup = isConfiguredRig || hasBaitSelector ? `
        <div class="rig-configuration-section">
            <div class="rig-configuration-control">
                <label class="rig-configuration-control__label" for="rig-configuration-select">${selectLabel}</label>
                <div class="rig-configuration-control__select-shell">
                    <select class="rig-configuration-control__select" id="rig-configuration-select"
                        ${isConfiguredRig ? "data-rig-configuration-select" : "data-rig-bait-select"}>
                        <option value="" ${!selectedOptionId ? "selected" : ""}>Select a ${isConfiguredRig ? "setup" : "bait"}…</option>
                        ${configOptions.map((option) => `
                            <option value="${option.id}" ${option.id === selectedOptionId ? "selected" : ""}>${option.label}</option>
                        `).join("")}
                    </select>
                    <span class="rig-configuration-control__chevron" aria-hidden="true">⌄</span>
                </div>
            </div>
        </div>
    ` : "";
    const reelSetupMarkup = buildDetailReelSetupContextMarkup(reelSetupLines);
    const getQuantity = (requirement) => {
        const quantity = Number(requirement?.quantity ?? 1);
        return Number.isInteger(quantity) && quantity > 0 ? quantity : 1;
    };
    const buildRequirementTypeLabel = (required, quantity) => {
        const typeLabel = required ? "Required" : "Optional";
        return quantity > 1 ? `${typeLabel} · Qty ${quantity}` : typeLabel;
    };
    const componentsMarkup = requirementRows.map((row) => {
        if (row.type === "lure-bait") {
            const requirement = row.requirement;
            const lureBaitRecord = getLureBaitRecord(requirement.lureBaitId);
            const displayName = lureBaitRecord?.name ?? requirement.lureBaitId;
            const selectionId = `lure-bait:${requirement.lureBaitId}`;
            const checkboxId = `rig-lure-bait-owned-${record.id}-${selectedConfiguration?.id ?? "base"}-${requirement.lureBaitId}`;
            return `
                <li class="rig-component-item" data-lure-bait-requirement="${requirement.lureBaitId}">
                    <div class="rig-component-item__row"><div class="rig-component-reference-cluster">
                        <label class="rig-component-owned" for="${checkboxId}">
                            <input id="${checkboxId}" class="rig-component-owned__checkbox" type="checkbox"
                                data-lure-bait-owned-id="${requirement.lureBaitId}"
                                data-readiness-selection-id="${selectionId}" ${selections[selectionId] ? "checked" : ""}>
                            <span class="rig-component-owned__name">${displayName}</span>
                        </label>
                        <button class="reference-info-button" type="button"
                            data-lure-bait-reference-id="${requirement.lureBaitId}"
                            aria-label="Learn about ${displayName}"><span aria-hidden="true">&#9432;</span></button>
                        <span class="rig-component-item__metadata ${requirement.required ? "rig-component-item__required" : "detail-list__optional"}">${buildRequirementTypeLabel(requirement.required === true, getQuantity(requirement))}</span>
                    </div></div>
                    ${requirement.notes ? `<p>${requirement.notes}</p>` : ""}
                </li>`;
        }
        const component = row.requirement;
        const tackleRecord = getTackleRecord(component.tackleId);
        const componentName = tackleRecord?.name ?? component.tackleId;
        const checkboxId = `rig-component-owned-${record.id}-${selectedConfiguration?.id ?? "base"}-${component.tackleId}`;
        return `
            <li class="rig-component-item">
                <div class="rig-component-item__row">
                    <div class="rig-component-reference-cluster">
                        <label class="rig-component-owned" for="${checkboxId}">
                            <input id="${checkboxId}" class="rig-component-owned__checkbox" type="checkbox"
                                data-component-owned-id="${component.tackleId}"
                                data-readiness-selection-id="${component.tackleId}"
                                ${selections[component.tackleId] ? "checked" : ""}>
                            <span class="rig-component-owned__name">${componentName}</span>
                        </label>
                        <button class="reference-info-button" type="button"
                            data-reference-id="${component.tackleId}"
                            aria-label="Learn about ${componentName}"><span aria-hidden="true">&#9432;</span></button>
                        <span class="rig-component-item__metadata ${component.required ? "rig-component-item__required" : "detail-list__optional"}">${buildRequirementTypeLabel(component.required === true, getQuantity(component))}</span>
                    </div>
                </div>
                ${component.notes ? `<p>${component.notes}</p>` : ""}
            </li>`;
    }).join("");
    const knotsMarkup = buildRigKnotApplicationsMarkup(effectiveRecord);
    const knotGuidanceMarkup = knotsMarkup
        ? `
            <section class="rig-build-subsection rig-build-subsection--guidance">
                ${buildRigDetailDisclosureMarkup(
                    "knot-guidance",
                    "Knot Guidance",
                    knotsMarkup,
                    expanded.has("knot-guidance")
                )}
            </section>
        `
        : "";
    const tutorialBodyMarkup = buildRigTutorialDisclosureBody(effectiveRecord.tutorialVideo);
    const tutorialMarkup = tutorialBodyMarkup
        ? buildRigDetailDisclosureMarkup(
            "rig-tutorial",
            "Rig Tutorial",
            tutorialBodyMarkup,
            expanded.has("rig-tutorial")
        )
        : "";
    const checkRigMarkup = commonMistakes.length > 0
        ? `
            <section class="detail-section rig-check-section" aria-labelledby="rig-check-title">
                <h3 id="rig-check-title">Check Your Rig</h3>
                <section class="rig-check-subsection" aria-labelledby="rig-common-mistakes-title">
                    <h4 class="detail-subsection-heading" id="rig-common-mistakes-title">Common Mistakes</h4>
                    <ul class="detail-list">${commonMistakes.map((mistake) => `<li>${mistake}</li>`).join("")}</ul>
                </section>
            </section>
        `
        : "";
    const buildSupportRowsMarkup = [tutorialMarkup].filter(Boolean).join("");
    const buildSupportMarkup = buildSupportRowsMarkup
        ? `
            <section class="rig-build-subsection rig-build-subsection--support" aria-labelledby="rig-build-support-title">
                <h4 class="detail-subsection-heading" id="rig-build-support-title">Build Support</h4>
                <div class="rig-build-support__rows">${buildSupportRowsMarkup}</div>
            </section>
        `
        : "";
    const howToBuildMarkup = Array.isArray(effectiveRecord.assemblySteps) && effectiveRecord.assemblySteps.length > 0 ? `
        <section class="detail-section rig-build-section" aria-labelledby="rig-build-title">
            <h3 id="rig-build-title">How to Build It</h3>
            ${knotGuidanceMarkup}
            <section class="rig-build-subsection rig-build-subsection--steps" aria-labelledby="rig-build-steps-title">
                <h4 class="detail-subsection-heading" id="rig-build-steps-title">Build Steps</h4>
                ${buildRigBuildStepsMarkup(effectiveRecord, detailConfig.selectedBaitId)}
            </section>
            ${buildSupportMarkup}
        </section>
    ` : "";
    const useCasesMarkup = buildRigAboutTextList(effectiveRecord.useCases);
    const conditionsMarkup = buildRigConditionReferenceMarkup(effectiveRecord.conditionTags);
    const techniquesMarkup = buildRigTechniqueLearningMarkup(
        detailConfig.techniqueLearning,
        detailConfig.otherTechniquesExpanded === true
    );
    const aboutOverviewMarkup = buildRigAboutOverviewMarkup(useCasesMarkup, conditionsMarkup, techniquesMarkup);
    const aboutRowsMarkup = [
        aboutOverviewMarkup
            ? buildRigDetailDisclosureMarkup(
                "about-rig-overview",
                "Rig Overview",
                aboutOverviewMarkup,
                expanded.has("about-rig-overview")
            )
            : "",
        setupNotes.length > 0
            ? buildRigDetailDisclosureMarkup(
                "setup-notes",
                "Setup Notes",
                `<h4 class="detail-subsection-heading">Setup Notes</h4><ul class="detail-list">${setupNotes.map((note) => `<li>${note}</li>`).join("")}</ul>`,
                expanded.has("setup-notes")
            )
            : ""
    ].filter(Boolean).join("");
    const aboutMarkup = aboutRowsMarkup ? `
        <section class="rig-detail-group rig-detail-group--about" aria-labelledby="rig-about-title">
            <h3 class="rig-detail-group__title" id="rig-about-title">About This Rig</h3>
            <div class="rig-detail-group__shell">${aboutRowsMarkup}</div>
        </section>
    ` : "";
    const referencesBodyMarkup = buildRigReferenceLinks(effectiveRecord);

    appMain.innerHTML = `
        <article class="detail-view detail-view--rig-compact" aria-labelledby="rig-detail-title">
            ${buildPageNavigationMarkup(detailConfig.parentLabel, "", reelSetupMarkup)}
            <header class="detail-header rig-detail-header">
                <div class="rig-detail-header__copy">
                    ${classificationMarkup}
                    <h2 id="rig-detail-title">${record.name}</h2>
                </div>
                <p class="rig-detail-header__summary">${record.summary}</p>
            </header>
            <section class="detail-section rig-requirements-section">
                <div class="rig-requirements-section__header">
                    <div>
                        <h3>What You Need</h3>
                        <p>Mark each component you have available for this setup right now. Optional components do not block readiness.</p>
                    </div>
                    <div class="rig-requirements-section__controls">
                        ${configurationMarkup}
                        <div class="readiness-status" data-readiness-status aria-live="polite"></div>
                    </div>
                </div>
                <ul class="rig-component-list">${componentsMarkup}</ul>
            </section>
            ${safetyNotes.length > 0 ? `
                <section class="detail-section detail-section--supporting detail-section--safety">
                    <h3>Safety</h3>
                    <div class="safety-guidance">${safetyNotes.map((note) => `<p>${note}</p>`).join("")}</div>
                </section>
            ` : ""}
            ${howToBuildMarkup}
            ${checkRigMarkup}
            ${aboutMarkup}
            ${referencesBodyMarkup ? `
                <section class="rig-detail-group rig-detail-group--sources" aria-label="Sources & References">
                    <div class="rig-detail-group__shell">
                        ${buildRigDetailDisclosureMarkup(
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

    const updateReadinessStatus = () => {
        const checkboxes = Array.from(appMain.querySelectorAll("[data-readiness-selection-id]"));
        const isChecked = (selectionId) =>
            checkboxes.find((checkbox) => checkbox.dataset.readinessSelectionId === selectionId)?.checked === true;
        const formatMissingName = (name, requirement) => {
            const quantity = getQuantity(requirement);
            return quantity > 1 ? `${name} (Qty ${quantity})` : name;
        };

        const missingRequired = [
            ...componentRequirements
                .filter((component) => component.required && !isChecked(component.tackleId))
                .map((component) => formatMissingName(getTackleRecord(component.tackleId)?.name ?? component.tackleId, component)),
            ...lureBaitRequirements
                .filter((requirement) => requirement.required && !isChecked(`lure-bait:${requirement.lureBaitId}`))
                .map((requirement) => formatMissingName(getLureBaitRecord(requirement.lureBaitId)?.name ?? requirement.lureBaitId, requirement))
        ];
        const status = appMain.querySelector("[data-readiness-status]");
        if (!status) return;

        if (presentation.awaitingSetup === true) {
            status.className = "readiness-status";
            status.innerHTML = '<strong class="readiness-status__primary">Choose a Setup</strong><span class="readiness-status__detail">Select a lure setup to see its requirements and build steps.</span>';
            return;
        }
        if (missingRequired.length === 0) {
            status.className = "readiness-status readiness-status--ready";
            status.innerHTML = `<strong class="readiness-status__primary">Ready to Assemble</strong><span class="readiness-status__detail">All required components are marked available.</span>`;
            return;
        }

        status.className = "readiness-status readiness-status--missing";
        status.innerHTML = `
            <strong class="readiness-status__primary">Missing ${missingRequired.length} Required ${missingRequired.length === 1 ? "Component" : "Components"}</strong>
            <span class="readiness-status__detail">${missingRequired.join(", ")}</span>
        `;
    };

    appMain.querySelector("[data-parent-navigation]")?.addEventListener("click", detailConfig.onParent);
    appMain.querySelector("[data-rig-configuration-select]")?.addEventListener("change", (event) => {
        detailConfig.onConfigurationChange?.(event.currentTarget.value);
    });
    appMain.querySelector("[data-rig-bait-select]")?.addEventListener("change", (event) => {
        detailConfig.onBaitChange?.(event.currentTarget.value);
    });
    appMain.querySelectorAll("[data-rig-knot-id]").forEach((button) => {
        button.addEventListener("click", () => detailConfig.onKnotSelect?.(button.dataset.rigKnotId));
    });
    appMain.querySelectorAll("[data-readiness-selection-id]").forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            detailConfig.onReadinessChange?.(checkbox.dataset.readinessSelectionId, checkbox.checked);
            updateReadinessStatus();
        });
    });

    initializeRigDetailDisclosures(appMain, detailConfig, expandedDisclosureIds);
    initializeRigTechniqueLearningControls(appMain, detailConfig);
    initializeReferenceLinks(appMain, { onRigSelect: detailConfig.onRigSelect, currentRigId: record.id });
    initializeLureBaitReferenceLinks(appMain, lureBaitRequirements, { onRigSelect: detailConfig.onRigSelect });
    initializeConditionLinks(appMain);
    initializeTechniqueLinks(appMain);
    initializeHomeNavigation(appMain);
    updateReadinessStatus();
}

/* ==========================================================
   END RIG GUIDE — DETAIL RENDERING + READINESS
   ========================================================== */
