/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: view-renderer.js
   PURPOSE: Owns reusable views, search results, Rig/Knot details,
   My Tackle presentation, contextual references, and inline Rig readiness.
   ========================================================== */

"use strict";

const VIEW_RENDERER_BUILD_INFO = Object.freeze({
    file: "view-renderer.js",
    milestone: "Knot Guide — Production Package 2 Revision 2"
});

function buildSearchControlsMarkup(inputId, placeholder) {
    return `
        <div class="search-controls">
            <div class="search-input-shell">
                <input class="search-input" id="${inputId}" name="query" type="search"
                    placeholder="${placeholder}" autocomplete="off" enterkeyhint="search">
                <button class="search-clear-button" type="button" data-search-clear aria-label="Clear search" hidden>
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <button class="search-button" type="submit">Search</button>
        </div>
    `;
}

function initializeSearchControls(form, input, clearButton, onUpdate) {
    if (!input || typeof onUpdate !== "function") return;

    const update = () => {
        if (clearButton) {
            clearButton.hidden = input.value.length === 0;
        }
        onUpdate();
    };

    form?.addEventListener("submit", (event) => {
        event.preventDefault();
        update();
    });
    input.addEventListener("input", update);
    clearButton?.addEventListener("click", () => {
        input.value = "";
        update();
        input.focus();
    });

    if (clearButton) {
        clearButton.hidden = input.value.length === 0;
    }
}

function renderView(appMain, viewConfig) {
    if (!appMain || !viewConfig || !Array.isArray(viewConfig.cards)) {
        console.error("A valid view configuration is required.");
        return;
    }

    const cardsMarkup = viewConfig.cards.map((card) => {
        const isAvailable = card.isAvailable === true && typeof viewConfig.onCardSelect === "function";

        if (!isAvailable) {
            return `
                <div class="dashboard-card dashboard-card--unavailable" aria-disabled="true">
                    <span class="dashboard-card__title">${card.title}</span>
                    <span class="dashboard-card__description">${card.description}</span>
                    <span class="dashboard-card__action">Coming Soon</span>
                </div>
            `;
        }

        return `
            <button class="dashboard-card" type="button" data-card-id="${card.id}">
                <span class="dashboard-card__title">${card.title}</span>
                <span class="dashboard-card__description">${card.description}</span>
            </button>
        `;
    }).join("");

    const searchConfig = viewConfig.search;
    const searchMarkup = searchConfig ? `
        <form class="search-form section-search-form" data-section-search-form>
            <label class="search-label" for="${searchConfig.inputId}">${searchConfig.label}</label>
            ${buildSearchControlsMarkup(searchConfig.inputId, searchConfig.placeholder)}
        </form>
        <div class="section-search-results" data-section-search-region hidden>
            <p class="search-status" data-search-status aria-live="polite"></p>
            <div class="search-results" data-search-results></div>
        </div>
    ` : "";

    appMain.innerHTML = `
        <section class="content-view" aria-labelledby="${viewConfig.headingId}">
            <button class="page-navigation" type="button" data-home-navigation>← Home</button>
            <h2 id="${viewConfig.headingId}">${viewConfig.title}</h2>
            <p>${viewConfig.description}</p>
            ${searchMarkup}
            <div class="dashboard-grid" data-view-card-grid>${cardsMarkup}</div>
        </section>
    `;

    initializeHomeNavigation(appMain);
    initializeViewCardActions(appMain, viewConfig.onCardSelect);

    if (searchConfig && typeof searchConfig.onSearch === "function") {
        const form = appMain.querySelector("[data-section-search-form]");
        const input = appMain.querySelector(`#${searchConfig.inputId}`);
        const clearButton = appMain.querySelector("[data-search-clear]");
        const cardGrid = appMain.querySelector("[data-view-card-grid]");
        const searchRegion = appMain.querySelector("[data-section-search-region]");

        const updateSearch = () => {
            const query = input?.value?.trim() ?? "";
            const hasQuery = query.length > 0;
            if (cardGrid) cardGrid.hidden = hasQuery;
            if (searchRegion) searchRegion.hidden = !hasQuery;

            if (!hasQuery) {
                const status = appMain.querySelector("[data-search-status]");
                const results = appMain.querySelector("[data-search-results]");
                if (status) status.textContent = "";
                if (results) results.innerHTML = "";
                return;
            }

            searchConfig.onSearch(query);
        };

        initializeSearchControls(form, input, clearButton, updateSearch);
    }
}

function initializeHomeNavigation(appMain) {
    appMain.querySelector("[data-home-navigation]")?.addEventListener("click", () => {
        showView(ROUTES.DASHBOARD);
    });
}

function initializeViewCardActions(appMain, onCardSelect) {
    if (typeof onCardSelect !== "function") return;
    appMain.querySelectorAll("[data-card-id]").forEach((card) => {
        card.addEventListener("click", () => onCardSelect(card.dataset.cardId));
    });
}

function renderSearchView(appMain, searchConfig) {
    if (!appMain || !searchConfig) {
        console.error("A valid search view configuration is required.");
        return;
    }

    appMain.innerHTML = `
        <section class="content-view" aria-labelledby="${searchConfig.headingId}">
            <div class="page-navigation-group">
                <button class="page-navigation" type="button" data-parent-navigation>← ${searchConfig.parentLabel}</button>
                <button class="page-navigation" type="button" data-home-navigation>Home</button>
            </div>
            <h2 id="${searchConfig.headingId}">${searchConfig.title}</h2>
            <p>${searchConfig.description}</p>
            <form class="search-form" data-search-form>
                <label class="search-label" for="${searchConfig.inputId}">${searchConfig.label}</label>
                ${buildSearchControlsMarkup(searchConfig.inputId, searchConfig.placeholder)}
            </form>
            <p class="search-status" data-search-status aria-live="polite"></p>
            <div class="search-results" data-search-results></div>
        </section>
    `;

    const searchForm = appMain.querySelector("[data-search-form]");
    const searchInput = appMain.querySelector(`#${searchConfig.inputId}`);
    const clearButton = appMain.querySelector("[data-search-clear]");

    appMain.querySelector("[data-parent-navigation]")?.addEventListener("click", searchConfig.onParent);
    initializeHomeNavigation(appMain);

    const updateSearch = () => searchConfig.onSearch(searchInput?.value ?? "");
    initializeSearchControls(searchForm, searchInput, clearButton, updateSearch);

    searchInput?.focus();
    updateSearch();
}

function renderSearchResults(appMain, records, resultConfig) {
    const resultsContainer = appMain.querySelector("[data-search-results]");
    const status = appMain.querySelector("[data-search-status]");

    if (!resultsContainer || !status) {
        console.error("Search result containers were not created.");
        return;
    }

    if (!Array.isArray(records) || records.length === 0) {
        status.textContent = resultConfig.emptyMessage;
        resultsContainer.innerHTML = "";
        return;
    }

    status.textContent = `${records.length} ${records.length === 1 ? "result" : "results"}`;
    resultsContainer.innerHTML = records.map((record) => resultConfig.renderRecord(record)).join("");

    if (typeof resultConfig.onResultSelect !== "function") return;
    resultsContainer.querySelectorAll("[data-result-id]").forEach((resultCard) => {
        resultCard.addEventListener("click", () => resultConfig.onResultSelect(resultCard.dataset.resultId));
    });
}

function isCoreKnotRecord(record) {
    return Boolean(record?.id) &&
        typeof CORE_KNOT_IDS !== "undefined" &&
        CORE_KNOT_IDS.includes(record.id);
}

function buildKnotResultCardMarkup(knot) {
    const isCore = isCoreKnotRecord(knot);
    return `
        <button class="search-result-card search-result-card--knot${isCore ? " search-result-card--core" : ""}" type="button" data-result-id="${knot.id}">
            ${isCore ? '<span class="search-result-card__badge">Core Knot</span>' : ""}
            <span class="search-result-card__title">${knot.name}</span>
            <span class="search-result-card__meta">${knot.difficulty}</span>
            <span class="search-result-card__summary">${knot.summary}</span>
            <span class="search-result-card__action">View instructions →</span>
        </button>
    `;
}

function renderKnotGuideLanding(appMain, config) {
    if (!appMain || !config || !Array.isArray(config.tasks) || !Array.isArray(config.collections)) {
        console.error("A valid Knot Guide landing configuration is required.");
        return;
    }

    const taskMarkup = config.tasks.map((task) => {
        const actionLabel = task.id === "attach-line-to-reel"
            ? "Get your reel ready →"
            : "Choose this task →";
        return `
            <button class="dashboard-card knot-task-card" type="button" data-knot-task-id="${task.id}">
                <span class="dashboard-card__title">${task.title}</span>
                <span class="dashboard-card__description">${task.description}</span>
                <span class="dashboard-card__action">${actionLabel}</span>
            </button>
        `;
    }).join("");

    const collectionMarkup = config.collections.map((collection) => {
        if (collection.isAvailable !== true) {
            return `
                <div class="dashboard-card dashboard-card--unavailable knot-collection-card" aria-disabled="true">
                    <span class="dashboard-card__title">${collection.title}</span>
                    <span class="dashboard-card__description">${collection.description}</span>
                    <span class="dashboard-card__action">Coming Soon</span>
                </div>
            `;
        }

        return `
            <button class="dashboard-card knot-collection-card" type="button" data-knot-collection-key="${collection.key}">
                <span class="dashboard-card__title">${collection.title}</span>
                <span class="dashboard-card__description">${collection.description}</span>
            </button>
        `;
    }).join("");

    appMain.innerHTML = `
        <section class="content-view knot-guide-view" aria-labelledby="knots-title">
            <button class="page-navigation" type="button" data-home-navigation>← Home</button>
            <h2 id="knots-title">Knots</h2>
            <p>Start with the connection you need, search by name, or browse a Knot collection.</p>
            <form class="search-form section-search-form" data-knot-search-form>
                <label class="search-label" for="knot-guide-search-input">Search all Knots</label>
                ${buildSearchControlsMarkup("knot-guide-search-input", "Try Palomar, tie hook, add leader, braid, or beginner")}
            </form>
            <div class="section-search-results" data-knot-search-region hidden>
                <p class="search-status" data-search-status aria-live="polite"></p>
                <div class="search-results" data-search-results></div>
            </div>
            <div class="knot-guide-content" data-knot-guide-content>
                <section class="knot-guide-section knot-guide-section--tasks" aria-labelledby="knot-task-title">
                    <h3 id="knot-task-title">What are you trying to do?</h3>
                    <p>Choose the connection you need. Reel setup starts with <strong>Attach Line to a Reel</strong>.</p>
                    <div class="dashboard-grid knot-task-grid">${taskMarkup}</div>
                </section>
                <section class="knot-guide-section knot-guide-section--collections" aria-label="Browse Knot collections">
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
    const updateSearch = () => {
        const query = searchInput?.value?.trim() ?? "";
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

    appMain.querySelectorAll("[data-knot-task-id]").forEach((card) => {
        card.addEventListener("click", () => config.onTaskSelect?.(card.dataset.knotTaskId));
    });
    appMain.querySelectorAll("[data-knot-collection-key]").forEach((card) => {
        card.addEventListener("click", () => config.onCollectionSelect?.(card.dataset.knotCollectionKey));
    });
}

const KNOT_USAGE_VISIBLE_RIG_LIMIT = 4;

function buildKnotUsageMarkup(record, usageContexts) {
    const taskContexts = Array.isArray(usageContexts?.tasks) ? usageContexts.tasks : [];
    const rigContexts = Array.isArray(usageContexts?.rigs) ? usageContexts.rigs : [];
    const taskMarkup = taskContexts.length
        ? `
            <div class="knot-usage-group">
                <span class="knot-usage-group__label">Common tasks</span>
                ${buildTagList(taskContexts.map((task) => task.title))}
            </div>
        `
        : "";

    if (rigContexts.length === 0) {
        return `${taskMarkup}<p class="knot-empty-context">No active Rig currently references this Knot.</p>`;
    }

    const rigListId = `knot-rig-usage-${record.id}`;
    const rigItems = rigContexts.map((usage, index) => {
        const isInitiallyHidden = index >= KNOT_USAGE_VISIBLE_RIG_LIMIT;
        return `
            <li${isInitiallyHidden ? ' data-knot-rig-usage-extra hidden' : ""}>
                <button class="related-entity-link knot-rig-link" type="button" data-knot-rig-id="${usage.rigId}">
                    <span class="related-entity-link__title">${usage.title}</span>
                    <span class="related-entity-link__action">View Rig →</span>
                </button>
                <span>${usage.difficulty} · ${usage.labels.join(" · ")}</span>
            </li>
        `;
    }).join("");
    const toggleMarkup = rigContexts.length > KNOT_USAGE_VISIBLE_RIG_LIMIT
        ? `
            <button
                class="knot-usage-toggle"
                type="button"
                data-knot-usage-toggle
                data-knot-usage-count="${rigContexts.length}"
                aria-expanded="false"
                aria-controls="${rigListId}"
            >See all ${rigContexts.length} rigs</button>
        `
        : "";

    return `
        ${taskMarkup}
        <div class="knot-usage-group knot-usage-group--rigs">
            <span class="knot-usage-group__label">Rigs that use this Knot</span>
            <ul class="knot-usage-list" id="${rigListId}">${rigItems}</ul>
            ${toggleMarkup}
        </div>
    `;
}

function initializeKnotUsageControls(appMain, detailConfig) {
    appMain.querySelectorAll("[data-knot-rig-id]").forEach((button) => {
        button.addEventListener("click", () => {
            detailConfig.onRigSelect?.(button.dataset.knotRigId);
        });
    });

    const toggle = appMain.querySelector("[data-knot-usage-toggle]");
    if (!toggle) return;

    const hiddenItems = Array.from(appMain.querySelectorAll("[data-knot-rig-usage-extra]"));
    toggle.addEventListener("click", () => {
        const willExpand = toggle.getAttribute("aria-expanded") !== "true";
        hiddenItems.forEach((item) => {
            item.hidden = !willExpand;
        });
        toggle.setAttribute("aria-expanded", String(willExpand));
        toggle.textContent = willExpand
            ? "Show fewer"
            : `See all ${toggle.dataset.knotUsageCount} rigs`;
    });
}

function getKnotRecord(knotId) {
    if (!knotId || typeof KNOT_DATA === "undefined") return null;
    const record = findRecordById(KNOT_DATA, knotId);
    return record?.isActive === true ? record : null;
}

function buildRigKnotApplications(record) {
    if (!Array.isArray(record?.knotApplications) || record.knotApplications.length === 0) return "";

    const applicationsMarkup = record.knotApplications.map((application) => {
        const knotLinks = application.recommendedKnotIds
            .map((knotId) => {
                const knot = getKnotRecord(knotId);
                if (!knot) {
                    console.warn(`Canonical Knot record was not found: ${knotId}`);
                    return "";
                }
                return `
                    <button class="rig-knot-link" type="button" data-rig-knot-id="${knot.id}">
                        ${knot.name} <span aria-hidden="true">→</span>
                    </button>
                `;
            })
            .filter(Boolean)
            .join("");

        return `
            <li class="rig-knot-application-item">
                <strong>${application.label}</strong>
                <div class="rig-knot-link-list">${knotLinks}</div>
                ${application.notes ? `<p>${application.notes}</p>` : ""}
            </li>
        `;
    }).join("");

    return `
        <section class="detail-section rig-knot-section">
            <div class="rig-knot-section__header">
                <h3>Knots You'll Tie</h3>
                <p>Select a recommended Knot for tying instructions. Parent returns you to this Rig.</p>
            </div>
            <ul class="rig-knot-application-list">${applicationsMarkup}</ul>
        </section>
    `;
}

function renderKnotInstructionDetail(appMain, detailConfig) {
    if (!appMain || !detailConfig?.record) {
        console.error("A valid Knot detail record is required.");
        return;
    }

    const record = detailConfig.record;
    const isCore = isCoreKnotRecord(record);
    const usageContexts = detailConfig.usageContexts ?? {};
    const aliasesMarkup = record.aliases?.length
        ? `<p class="knot-aliases"><strong>Also called:</strong> ${record.aliases.join(", ")}</p>`
        : "";
    const lineTypeLabels = (record.compatibleLineTypes ?? []).map((lineType) => {
        if (lineType === "monofilament") return "Monofilament";
        if (lineType === "fluorocarbon") return "Fluorocarbon";
        if (lineType === "braid") return "Braid";
        return lineType;
    });
    const usageMarkup = buildKnotUsageMarkup(record, usageContexts);
    const referencesMarkup = record.referenceLinks?.length
        ? `
            <div class="knot-reference-block">
                <h4>Verified References</h4>
                <div class="rig-reference-links knot-reference-links">
                    ${record.referenceLinks.map((reference) => `
                        <a class="rig-reference-link knot-reference-link" href="${reference.url}" target="_blank" rel="noopener noreferrer">${reference.label} <span aria-hidden="true">↗</span></a>
                    `).join("")}
                </div>
            </div>
        `
        : "";

    appMain.innerHTML = `
        <article class="detail-view detail-view--knot" aria-labelledby="knot-detail-title">
            <div class="page-navigation-group">
                <button class="page-navigation" type="button" data-parent-navigation>← ${detailConfig.parentLabel}</button>
                <button class="page-navigation" type="button" data-home-navigation>Home</button>
            </div>
            <header class="detail-header knot-detail-header${isCore ? " detail-header--core knot-detail-header--core" : ""}">
                ${isCore ? '<p class="detail-core-badge">Core Knot</p>' : ""}
                <p class="detail-eyebrow">${record.difficulty}</p>
                <h2 id="knot-detail-title">${record.name}</h2>
                <p>${record.summary}</p>
                ${aliasesMarkup}
            </header>
            <section class="detail-section knot-at-a-glance">
                <div class="knot-at-a-glance__group">
                    <h3>Best For</h3>
                    <ul class="detail-list">${record.bestFor.map((item) => `<li>${item}</li>`).join("")}</ul>
                    <div class="knot-line-types">
                        <span class="knot-line-types__label">Line compatibility</span>
                        ${buildTagList(lineTypeLabels)}
                    </div>
                </div>
                <div class="knot-at-a-glance__group">
                    <h3>Where You'll Use It</h3>
                    ${usageMarkup}
                </div>
            </section>
            <section class="detail-section detail-section--build knot-tying-section">
                <h3>How to Tie It</h3>
                <ol class="detail-steps knot-tying-steps">${record.tyingSteps.map((step) => `<li>${step}</li>`).join("")}</ol>
                ${referencesMarkup}
            </section>
            <section class="detail-section detail-section--supporting knot-check-section">
                <h3>Check Your Knot</h3>
                <ul class="detail-list">${record.finalChecks.map((check) => `<li>${check}</li>`).join("")}</ul>
            </section>
            <section class="detail-section detail-section--supporting">
                <h3>Common Mistakes</h3>
                <ul class="detail-list">${record.commonMistakes.map((mistake) => `<li>${mistake}</li>`).join("")}</ul>
            </section>
            <section class="detail-section detail-section--supporting">
                <h3>When to Choose Another Knot</h3>
                <ul class="detail-list">${record.limitations.map((limitation) => `<li>${limitation}</li>`).join("")}</ul>
            </section>
        </article>
    `;

    appMain.querySelector("[data-parent-navigation]")?.addEventListener("click", detailConfig.onParent);
    initializeKnotUsageControls(appMain, detailConfig);
    initializeHomeNavigation(appMain);
}

function isCoreRigRecord(record) {
    return Boolean(record?.id) &&
        typeof CORE_RIG_IDS !== "undefined" &&
        CORE_RIG_IDS.includes(record.id);
}

function getTackleRecord(tackleId) {
    if (!tackleId || typeof TACKLE_DATA === "undefined") return null;
    const record = findRecordById(TACKLE_DATA, tackleId);
    return record?.isActive === true ? record : null;
}

function getRelatedRigNames(tackleId) {
    if (!tackleId || typeof RIG_DATA === "undefined") return [];

    return RIG_DATA
        .filter((rig) =>
            rig.isActive === true &&
            Array.isArray(rig.componentRequirements) &&
            rig.componentRequirements.some((requirement) => requirement.tackleId === tackleId)
        )
        .map((rig) => rig.name);
}

function getReferenceMedia(referenceRecord) {
    if (!referenceRecord?.mediaIds?.length || typeof MEDIA_DATA === "undefined") return null;
    return MEDIA_DATA.find((media) =>
        referenceRecord.mediaIds.includes(media.id) &&
        media.ownerType === "tackle" &&
        media.isActive === true
    ) ?? null;
}

function buildReferenceImageMarkup(referenceRecord, className, loading = "lazy") {
    const media = getReferenceMedia(referenceRecord);
    if (!media) return "";
    return `<img class="${className}" src="${media.file}" alt="${media.alt}" loading="${loading}" decoding="async">`;
}

function renderReferencePopover(referenceId, triggerElement) {
    if (typeof TACKLE_DATA === "undefined") {
        console.error("Tackle reference data is not available.");
        return;
    }

    const referenceRecord = findRecordById(TACKLE_DATA, referenceId);
    if (!referenceRecord || referenceRecord.isActive !== true) {
        console.warn(`Reference record was not found: ${referenceId}`);
        return;
    }

    document.querySelector("[data-reference-popover]")?.remove();

    const aliasesMarkup = referenceRecord.aliases?.length ? `
        <section class="reference-popover__section"><h3>Also Called</h3><p>${referenceRecord.aliases.join(", ")}</p></section>
    ` : "";

    const recognitionMarkup = referenceRecord.recognitionNotes?.length ? `
        <section class="reference-popover__section"><h3>How to Recognize It</h3><ul>
            ${referenceRecord.recognitionNotes.map((note) => `<li>${note}</li>`).join("")}
        </ul></section>
    ` : "";

    const variantsMarkup = referenceRecord.commonVariants?.length ? `
        <section class="reference-popover__section"><h3>Common Variants</h3><p>${referenceRecord.commonVariants.join(", ")}</p></section>
    ` : "";

    const relatedRigNames = getRelatedRigNames(referenceRecord.id);
    const rigsMarkup = relatedRigNames.length ? `
        <section class="reference-popover__section"><h3>Used In</h3><p>${relatedRigNames.join(", ")}</p></section>
    ` : "";

    const relatedTackleMarkup = referenceRecord.relatedTackleIds?.length ? `
        <section class="reference-popover__section">
            <h3>Related Components</h3>
            <div class="reference-popover__related">
                ${referenceRecord.relatedTackleIds.map((relatedId) => {
                    const related = findRecordById(TACKLE_DATA, relatedId);
                    if (!related || related.isActive !== true) return "";
                    return `<button class="reference-popover__related-link" type="button" data-related-reference-id="${related.id}">${related.name} <span aria-hidden="true">ⓘ</span></button>`;
                }).join("")}
            </div>
        </section>
    ` : "";

    const dialog = document.createElement("dialog");
    dialog.className = "reference-popover";
    dialog.dataset.referencePopover = "";
    dialog.setAttribute("aria-labelledby", "reference-popover-title");
    dialog.innerHTML = `
        <div class="reference-popover__shell">
            <header class="reference-popover__header">
                <div>
                    <p class="reference-popover__eyebrow">${referenceRecord.category}</p>
                    <h2 id="reference-popover-title">${referenceRecord.name}</h2>
                </div>
                <button class="reference-popover__close" type="button" data-reference-close aria-label="Close ${referenceRecord.name} information">×</button>
            </header>
            ${buildReferenceImageMarkup(referenceRecord, "reference-popover__image", "eager")}
            <div class="reference-popover__body">
                <p class="reference-popover__summary">${referenceRecord.summary}</p>
                <section class="reference-popover__section"><h3>What It Does</h3><p>${referenceRecord.purpose}</p></section>
                ${aliasesMarkup}${recognitionMarkup}${variantsMarkup}${rigsMarkup}${relatedTackleMarkup}
            </div>
        </div>
    `;

    document.body.append(dialog);
    const closeDialog = () => { if (dialog.open) dialog.close(); };
    dialog.querySelector("[data-reference-close]")?.addEventListener("click", closeDialog);
    dialog.addEventListener("click", (event) => { if (event.target === dialog) closeDialog(); });
    dialog.addEventListener("close", () => { dialog.remove(); triggerElement?.focus(); });

    dialog.querySelectorAll("[data-related-reference-id]").forEach((relatedButton) => {
        relatedButton.addEventListener("click", () => {
            const nextReferenceId = relatedButton.dataset.relatedReferenceId;
            dialog.addEventListener("close", () => renderReferencePopover(nextReferenceId, triggerElement), { once: true });
            closeDialog();
        });
    });

    dialog.showModal();
}

function initializeReferenceLinks(appMain) {
    appMain.querySelectorAll("[data-reference-id]").forEach((referenceLink) => {
        referenceLink.addEventListener("click", () => renderReferencePopover(referenceLink.dataset.referenceId, referenceLink));
    });
}

function buildRigReferenceLinks(record) {
    if (!Array.isArray(record.referenceLinks) || record.referenceLinks.length === 0) return "";
    return `
        <section class="detail-section detail-section--supporting rig-reference-section">
            <h3>Verified References</h3>
            <p class="rig-reference-intro">Use these external sources for additional technical cross-checking.</p>
            <div class="rig-reference-links">
                ${record.referenceLinks.map((reference) => `
                    <a class="rig-reference-link" href="${reference.url}" target="_blank" rel="noopener noreferrer">${reference.label} <span aria-hidden="true">↗</span></a>
                `).join("")}
            </div>
        </section>
    `;
}

function buildRigTutorial(record) {
    const tutorial = record?.tutorialVideo;
    if (!tutorial || tutorial.platform !== "youtube" || !tutorial.videoId || !tutorial.externalUrl) return "";

    return `
        <section class="detail-section rig-tutorial-section" data-rig-tutorial>
            <div class="rig-tutorial-section__header">
                <div>
                    <h3>Rig Tutorial</h3>
                    <p>${tutorial.title} · ${tutorial.creator}</p>
                </div>
                <a class="rig-tutorial-section__external" href="${tutorial.externalUrl}" target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a>
            </div>
            <button class="rig-tutorial-load" type="button" data-rig-tutorial-load data-video-id="${tutorial.videoId}" data-video-title="${tutorial.title}">
                <span class="rig-tutorial-load__icon" aria-hidden="true">▶</span>
                <span>Load tutorial</span>
            </button>
            <div class="rig-tutorial-player" data-rig-tutorial-player hidden></div>
        </section>
    `;
}

function initializeRigTutorial(appMain) {
    const loadButton = appMain.querySelector("[data-rig-tutorial-load]");
    const player = appMain.querySelector("[data-rig-tutorial-player]");
    if (!loadButton || !player) return;

    loadButton.addEventListener("click", () => {
        const videoId = loadButton.dataset.videoId;
        const title = loadButton.dataset.videoTitle || "Rig tutorial";
        if (!videoId) return;

        const iframe = document.createElement("iframe");
        iframe.className = "rig-tutorial-player__iframe";
        iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?rel=0`;
        iframe.title = title;
        iframe.loading = "lazy";
        iframe.referrerPolicy = "strict-origin-when-cross-origin";
        iframe.allow = "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;

        player.replaceChildren(iframe);
        player.hidden = false;
        loadButton.hidden = true;
    }, { once: true });
}

function buildTagList(items) {
    if (!Array.isArray(items) || items.length === 0) return "";
    return `<ul class="tag-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderInstructionDetail(appMain, detailConfig) {
    if (!appMain || !detailConfig?.record) {
        console.error("A valid instructional detail record is required.");
        return;
    }

    const record = detailConfig.record;
    const selections = detailConfig.selections ?? {};
    const isCoreRig = isCoreRigRecord(record);
    const componentsMarkup = record.componentRequirements.map((component) => {
        const tackleRecord = getTackleRecord(component.tackleId);
        const componentName = tackleRecord?.name ?? component.tackleId;
        const isOwned = selections[component.tackleId] === true;
        const checkboxId = `rig-component-owned-${record.id}-${component.tackleId}`;

        if (!tackleRecord) {
            console.warn(`Canonical Tackle record was not found: ${component.tackleId}`);
        }

        return `
            <li class="rig-component-item">
                <div class="rig-component-item__heading">
                    <button
                        class="reference-link"
                        type="button"
                        data-reference-id="${component.tackleId}"
                        aria-label="More information about ${componentName}"
                    >
                        <span>${componentName}</span>
                        <span class="reference-link__icon" aria-hidden="true">ⓘ</span>
                    </button>
                    ${
                        component.required
                            ? '<span class="rig-component-item__required">Required</span>'
                            : '<span class="detail-list__optional">Optional</span>'
                    }
                </div>
                <div class="rig-component-item__detail-row">
                    <p>${component.notes}</p>
                    <label class="rig-component-owned" for="${checkboxId}">
                    <input
                        id="${checkboxId}"
                        class="rig-component-owned__checkbox"
                        type="checkbox"
                        data-component-owned-id="${component.tackleId}"
                        ${isOwned ? "checked" : ""}
                    >
                        <span>I have this</span>
                    </label>
                </div>
            </li>
        `;
    }).join("");

    appMain.innerHTML = `
        <article class="detail-view detail-view--rig-compact" aria-labelledby="rig-detail-title">
            <div class="page-navigation-group">
                <button class="page-navigation" type="button" data-parent-navigation>← ${detailConfig.parentLabel}</button>
                <button class="page-navigation" type="button" data-home-navigation>Home</button>
            </div>
            <header class="detail-header${isCoreRig ? " detail-header--core" : ""}">
                ${isCoreRig ? '<p class="detail-core-badge">Core Rig</p>' : ""}
                <p class="detail-eyebrow">${record.difficulty}</p>
                <h2 id="rig-detail-title">${record.name}</h2>
                <p>${record.summary}</p>
            </header>
            <section class="detail-section rig-at-a-glance">
                <div class="rig-at-a-glance__group"><h3>Best For</h3>${buildTagList(record.useCases)}</div>
                <div class="rig-at-a-glance__group"><h3>Good Conditions</h3>${buildTagList(record.conditionTags)}</div>
            </section>
            ${buildRigTutorial(record)}
            ${record.tutorialVideo ? "" : buildRigReferenceLinks(record)}
            <section class="detail-section rig-requirements-section">
                <div class="rig-requirements-section__header">
                    <div>
                        <h3>What You Need</h3>
                        <p>Mark the tackle you have. Select any item name for identification help.</p>
                    </div>
                    <div class="readiness-status" data-readiness-status aria-live="polite"></div>
                </div>
                <ul class="rig-component-list">${componentsMarkup}</ul>
            </section>
            ${buildRigKnotApplications(record)}
            <section class="detail-section detail-section--build">
                <h3>How to Build It</h3>
                <ol class="detail-steps">${record.assemblySteps.map((step) => `<li>${step}</li>`).join("")}</ol>
            </section>
            <section class="detail-section detail-section--supporting"><h3>Setup Notes</h3><ul class="detail-list">${record.setupNotes.map((note) => `<li>${note}</li>`).join("")}</ul></section>
            <section class="detail-section detail-section--supporting"><h3>Common Mistakes</h3><ul class="detail-list">${record.commonMistakes.map((mistake) => `<li>${mistake}</li>`).join("")}</ul></section>
            <section class="detail-section detail-section--supporting detail-section--safety"><h3>Safety</h3><ul class="detail-list">${record.safetyNotes.map((note) => `<li>${note}</li>`).join("")}</ul></section>
        </article>
    `;

    const updateReadinessStatus = () => {
        const checkboxes = Array.from(
            appMain.querySelectorAll("[data-component-owned-id]")
        );
        const missingRequired = record.componentRequirements.filter(
            (component) => {
                if (!component.required) return false;
                return !checkboxes.find(
                    (checkbox) =>
                        checkbox.dataset.componentOwnedId === component.tackleId
                )?.checked;
            }
        );
        const status = appMain.querySelector("[data-readiness-status]");
        if (!status) return;

        if (missingRequired.length === 0) {
            status.className = "readiness-status readiness-status--ready";
            status.innerHTML = `
                <strong>Ready to Fish</strong>
                <span>All required tackle is marked available.</span>
            `;
            return;
        }

        status.className = "readiness-status readiness-status--missing";
        status.innerHTML = `
            <strong>Missing ${missingRequired.length}</strong>
            <span>${missingRequired.map((item) => getTackleRecord(item.tackleId)?.name ?? item.tackleId).join(", ")}</span>
        `;
    };

    appMain.querySelector("[data-parent-navigation]")?.addEventListener("click", detailConfig.onParent);
    appMain.querySelectorAll("[data-rig-knot-id]").forEach((button) => {
        button.addEventListener("click", () => {
            detailConfig.onKnotSelect?.(button.dataset.rigKnotId);
        });
    });
    appMain.querySelectorAll("[data-component-owned-id]").forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            detailConfig.onReadinessChange?.(
                checkbox.dataset.componentOwnedId,
                checkbox.checked
            );
            updateReadinessStatus();
        });
    });

    initializeReferenceLinks(appMain);
    initializeRigTutorial(appMain);
    initializeHomeNavigation(appMain);
    updateReadinessStatus();
}

console.info(`[Loaded] ${VIEW_RENDERER_BUILD_INFO.file} | ${VIEW_RENDERER_BUILD_INFO.milestone}`);
