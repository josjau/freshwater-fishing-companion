/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: guides/fish-guide-renderer.js
   PURPOSE: Extracted owner functions and contracts from approved pre-migration source.
   ========================================================== */

"use strict";

/* ==========================================================
   FISH GUIDE — MEDIA + CARDS + LANDING + DETAIL + COMPARE
   ========================================================== */

function buildFishMediaMarkup(media, className, loading = "lazy") {
    if (!media?.file) return "";
    return `<img class="${className}" src="${media.file}" alt="${media.alt ?? ""}" loading="${loading}" decoding="async">`;
}

function buildFishPrimaryMediaMarkup(media, imageClass, frameClass, loading = "lazy") {
    if (!media?.file) return "";
    return `
        <span class="fish-image-frame ${frameClass}">
            ${buildFishMediaMarkup(media, `${imageClass} fish-image-frame__image`, loading)}
        </span>
    `;
}

function buildFishResultCardMarkup(fish, category, primaryMedia, isDetailAvailable = true) {
    const summaryMarkup = fish.summary
        ? `<span class="search-result-card__summary">${fish.summary}</span>`
        : "";
    const aliasesMarkup = Array.isArray(fish.aliases) && fish.aliases.length
        ? `<span class="fish-result-card__aliases"><strong>Also called:</strong> ${fish.aliases.join(", ")}</span>`
        : "";
    const actionMarkup = isDetailAvailable
        ? `<span class="search-result-card__action">View Fish <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></span>`
        : "";
    const primaryImageMarkup = buildFishPrimaryMediaMarkup(
        primaryMedia,
        "fish-result-card__image",
        "fish-result-card__image-frame",
        "lazy"
    );
    const content = `
        <span class="fish-result-card__category">${category?.name ?? "Fish"}</span>
        <span class="fish-result-card__heading-row">
            <span class="search-result-card__title">${fish.name}</span>
            ${actionMarkup}
        </span>
        ${primaryImageMarkup}
        ${aliasesMarkup}
        ${summaryMarkup}
    `;

    if (!isDetailAvailable) {
        return `<article class="search-result-card search-result-card--fish search-result-card--fish-reference">${content}</article>`;
    }

    return `
        <button class="search-result-card search-result-card--fish" type="button" data-result-id="${fish.id}">
            ${content}
        </button>
    `;
}

function renderFishGuideLanding(appMain, config) {
    if (!appMain || !config) {
        console.error("A valid Fish Guide landing configuration is required.");
        return;
    }

    const categories = Array.isArray(config.categories) ? config.categories : [];
    const comparisonCount = Number(config.comparisonCount ?? 0);
    const browseCards = [
        {
            key: "all",
            title: "All Fish",
            description: `Browse all ${config.activeFishCount ?? 0} Fish A–Z.`
        },
        ...categories.map((category) => ({
            key: category.id,
            title: category.name,
            description: category.summary
        }))
    ];

    const browseMarkup = browseCards.map((card) => `
        <button class="dashboard-card guide-browse-card fish-collection-card" type="button" data-fish-collection-key="${card.key}">
            <span class="guide-card__heading-row">
                <span class="dashboard-card__title">${card.title}</span>
                <span class="dashboard-card__action dashboard-card__action--link">Browse <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></span>
            </span>
            <span class="dashboard-card__description">${card.description}</span>
        </button>
    `).join("");

    const compareMarkup = comparisonCount > 0
        ? `
            <button class="dashboard-card dashboard-card--workflow fish-compare-entry" type="button" data-fish-compare-catalog>
                <span class="guide-workflow-eyebrow">Identification Tool</span>
                <span class="guide-card__heading-row">
                    <span class="dashboard-card__title">Compare Similar Fish</span>
                    <span class="dashboard-card__action dashboard-card__action--link">Compare <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></span>
                </span>
                <span class="dashboard-card__description">Compare similar Fish side by side using the visible traits that best distinguish them.</span>
            </button>
        `
        : "";

    appMain.innerHTML = `
        <section class="content-view fish-guide-view" aria-labelledby="fish-guide-title">
            ${buildPageNavigationMarkup()}
            <header class="fish-guide-identity">
                <h2 id="fish-guide-title">Fish Guide</h2>
                <p>Identify freshwater Fish, compare similar species, or browse by group.</p>
            </header>
            <form class="search-form section-search-form fish-guide-search-form" data-fish-search-form aria-labelledby="fish-guide-search-title">
                <h3 class="guide-search-heading" id="fish-guide-search-title"><label class="search-label" for="fish-guide-search-input">Search Fish</label></h3>
                <p class="search-help" id="fish-guide-search-help">Search by common name, alias, or group.</p>
                ${buildSearchControlsMarkup("fish-guide-search-input", config.searchPlaceholder, {
                    showSubmitButton: false,
                    inputDescriptionId: "fish-guide-search-help"
                })}
            </form>
            <div class="section-search-results" data-fish-search-region hidden>
                <p class="search-status" data-search-status aria-live="polite"></p>
                <div class="search-results" data-search-results></div>
            </div>
            <div class="fish-guide-content" data-fish-guide-content>
                ${compareMarkup ? `
                    <section class="fish-guide-section fish-guide-workflow-section" aria-label="Fish identification tools">
                        <div class="dashboard-grid fish-guide-workflow-grid">${compareMarkup}</div>
                    </section>
                ` : ""}
                <section class="fish-guide-section" aria-labelledby="fish-browse-title">
                    <h3 id="fish-browse-title">Browse Fish</h3>
                    <div class="dashboard-grid fish-collection-grid">${browseMarkup}</div>
                </section>
            </div>
        </section>
    `;

    initializeHomeNavigation(appMain);

    const form = appMain.querySelector("[data-fish-search-form]");
    const input = appMain.querySelector("#fish-guide-search-input");
    const clearButton = appMain.querySelector("[data-search-clear]");
    const searchRegion = appMain.querySelector("[data-fish-search-region]");
    const guideContent = appMain.querySelector("[data-fish-guide-content]");
    if (input && typeof config.initialQuery === "string") input.value = config.initialQuery;

    const updateSearch = () => {
        const query = input?.value?.trim() ?? "";
        config.onQueryChange?.(query);
        const hasQuery = query.length > 0;
        if (searchRegion) searchRegion.hidden = !hasQuery;
        if (guideContent) {
            guideContent.hidden = hasQuery;
            guideContent.style.display = hasQuery ? "none" : "";
        }
        if (!hasQuery) {
            const status = appMain.querySelector("[data-search-status]");
            const results = appMain.querySelector("[data-search-results]");
            if (status) status.textContent = "";
            if (results) results.innerHTML = "";
            return;
        }
        config.onSearch?.(query);
    };
    initializeSearchControls(form, input, clearButton, updateSearch);
    updateSearch();

    appMain.querySelectorAll("[data-fish-collection-key]").forEach((card) => {
        card.addEventListener("click", () => config.onCollectionSelect?.(card.dataset.fishCollectionKey));
    });
    appMain.querySelector("[data-fish-compare-catalog]")?.addEventListener("click", () => {
        config.onCompareSelect?.();
    });
}

// Fish-owned canonical Habitat associations. Fish intrinsic meaning is independent
// of present Conditions; environmental equivalence is authored in the bridge.
const FISH_HABITAT_DIMENSIONS = Object.freeze([
    Object.freeze({ id: "cover", title: "Cover" }),
    Object.freeze({ id: "water-zone", title: "Water Zone" }),
    Object.freeze({ id: "water-movement", title: "Water Movement" }),
    Object.freeze({ id: "structure", title: "Structure" }),
    Object.freeze({ id: "bottom-substrate", title: "Bottom / Substrate" })
]);

const FISH_WATERBODY_CONDITION_IDS = Object.freeze(
    Object.fromEntries(typeof FISH_WATERBODY_CONDITION_CORRESPONDENCES !== "undefined"
        ? FISH_WATERBODY_CONDITION_CORRESPONDENCES.map((entry) => [entry.waterbody, entry.conditionId])
        : [])
);

function buildFishReferenceTerms(items, getId, attribute, labelPrefix) {
    if (!Array.isArray(items) || items.length === 0) return "";
    return `<ul class="tag-list tag-list--conditions fish-reference-tag-list">${items.map((item) => {
        const id = getId(item);
        const label = typeof item === "string" ? item : item.name;
        return `<li class="fish-reference-tag"><span class="fish-reference-tag__value">${label}</span>${id
            ? `<button class="reference-info-button fish-reference-info-button" type="button" ${attribute}="${id}" aria-label="Learn about ${labelPrefix}${label}"><span aria-hidden="true">ⓘ</span></button>`
            : ""}</li>`;
    }).join("")}</ul>`;
}

function buildFishHabitatGroups(fishId) {
    if (typeof HABITAT_DATA === "undefined" || typeof FISH_HABITAT_ASSOCIATIONS === "undefined") return "";
    const selected = new Set(FISH_HABITAT_ASSOCIATIONS.filter((link) => link.fishId === fishId).map((link) => link.habitatId));
    return FISH_HABITAT_DIMENSIONS.map((dimension) => {
        const habitats = HABITAT_DATA.filter((habitat) => habitat.isActive && habitat.dimension === dimension.id && selected.has(habitat.id));
        return habitats.length
            ? `<section class="fish-habitat-group" data-habitat-dimension="${dimension.id}">
                  <h4 class="detail-subsection-heading">${dimension.title}</h4>
                  ${buildFishReferenceTerms(habitats, (habitat) => habitat.id, "data-fish-habitat-reference", "")}
               </section>`
            : "";
    }).join("");
}

function buildFishWaterbodyGroup(items) {
    return buildFishReferenceTerms(items, (value) => FISH_WATERBODY_CONDITION_IDS[value], "data-condition-id", "");
}

function renderFishHabitatReferencePopover(habitatId, triggerElement) {
    const habitat = typeof HABITAT_DATA !== "undefined"
        ? HABITAT_DATA.find((entry) => entry.id === habitatId && entry.isActive === true)
        : null;
    if (!habitat) return;

    removeOpenReferencePopovers();

    const dialog = document.createElement("dialog");
    dialog.className = "reference-popover";
    dialog.dataset.fishHabitatPopover = "";
    dialog.setAttribute("aria-labelledby", "fish-habitat-popover-title");
    dialog.innerHTML = `
        <div class="reference-popover__shell">
            <header class="reference-popover__header">
                <div class="reference-popover__header-main">
                    <p class="reference-popover__eyebrow">Fish Habitat</p>
                    <h2 id="fish-habitat-popover-title">${habitat.name}</h2>
                </div>
                <button class="reference-popover__close" type="button" data-fish-habitat-close aria-label="Close ${habitat.name} information">&times;</button>
            </header>
            <div class="reference-popover__body">
                <p class="reference-popover__summary">${habitat.summary}</p>
            </div>
        </div>
    `;

    showReferencePopoverDialog(dialog, triggerElement, "[data-fish-habitat-close]");
}

function initializeFishHabitatReferenceLinks(appMain) {
    appMain.querySelectorAll("[data-fish-habitat-reference]").forEach((referenceLink) => {
        referenceLink.addEventListener("click", () => {
            renderFishHabitatReferencePopover(referenceLink.dataset.fishHabitatReference, referenceLink);
        });
    });
}

function buildFishDisclosureMarkup(disclosureId, title, bodyMarkup, expanded = false) {
    const panelId = `fish-detail-${disclosureId}-panel`;
    return `
        <div class="fish-about-row fish-about-row--disclosure">
            <button class="fish-about-row__trigger" type="button"
                data-fish-disclosure-id="${disclosureId}"
                aria-expanded="${expanded ? "true" : "false"}"
                aria-controls="${panelId}">
                <span>${title}</span>
                <span class="fish-about-row__state" aria-hidden="true">${expanded ? "▴" : "▾"}</span>
            </button>
            <div class="fish-about-row__panel" id="${panelId}" data-fish-disclosure-panel="${disclosureId}"${expanded ? "" : " hidden"}>
                ${bodyMarkup}
            </div>
        </div>
    `;
}

function getFishRigRecommendationDisplayName(item) {
    if (item?.lureBaitId) return item.lureBait?.name ?? item.lureBaitId;
    return item?.rig?.name ?? "Rig";
}

function buildFishResearchUrl(query) {
    return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}

function renderFishDetail(appMain, detailConfig) {
    if (!appMain || !detailConfig?.record) {
        console.error("A valid Fish detail record is required.");
        return;
    }

    const record = detailConfig.record;
    const category = detailConfig.category;
    const media = detailConfig.primaryMedia;
    const relationships = Array.isArray(detailConfig.relationships) ? detailConfig.relationships : [];
    const expandedDisclosureIds = new Set(
        Array.isArray(detailConfig.expandedDisclosureIds) ? detailConfig.expandedDisclosureIds : []
    );

    const aliasesMarkup = record.aliases?.length
        ? `<p class="fish-identity-meta"><strong>Also called:</strong> ${record.aliases.join(", ")}</p>`
        : "";
    const attributionMarkup = media?.license?.attributionRequired === true && media.license.attributionText
        ? `<p class="fish-media-attribution">${media.license.attributionText}</p>`
        : "";

    const identificationTraits = Array.isArray(record.identificationTraits) ? record.identificationTraits : [];
    const traitsMarkup = identificationTraits.length
        ? `
            <section class="fish-identification-traits" aria-labelledby="fish-identification-traits-title">
                <h4 class="detail-subsection-heading" id="fish-identification-traits-title">Key Identification Traits</h4>
                <ul class="detail-list fish-identification-list">${identificationTraits.map((trait) => `<li><span class="fish-identification-trait__content">${trait}</span></li>`).join("")}</ul>
            </section>
        `
        : "";

    const habitatGroupsMarkup = buildFishHabitatGroups(record.id);
    const hasWaters = Array.isArray(record.waterbodyTypes) && record.waterbodyTypes.length > 0;
    const habitatMarkup = habitatGroupsMarkup || hasWaters
        ? buildFishDisclosureMarkup(
            "habitat",
            "Habitat & Water",
            `
                <div class="fish-habitat-groups">${habitatGroupsMarkup}</div>
                ${hasWaters ? `<section class="fish-habitat-group fish-habitat-group--waters"><h4 class="detail-subsection-heading">Common Waters</h4>${buildFishWaterbodyGroup(record.waterbodyTypes)}</section>` : ""}
            `,
            expandedDisclosureIds.has("habitat")
        )
        : "";

    const recommendations = Array.isArray(detailConfig.rigRecommendations)
        ? detailConfig.rigRecommendations
        : [];
    const primaryRigs = recommendations.filter((item) => item.priority === "Primary");
    const alternativeRigs = recommendations.filter((item) => item.priority === "Alternative");
    const buildRigGroup = (title, records, showHeading = true) => records.length
        ? `
            <section class="fish-rig-recommendation-group">
                ${showHeading ? `<h4 class="detail-subsection-heading">${title}</h4>` : ""}
                <div class="fish-rig-recommendation-list">
                    ${records.map((item) => `
                        <div class="fish-rig-recommendation">
                            <span class="fish-rig-recommendation__heading">
                                <span class="fish-rig-recommendation__name">${getFishRigRecommendationDisplayName(item)}</span>
                                <button class="fish-rig-recommendation__action" type="button"
                                    data-fish-rig-id="${item.rig.id}"
                                    ${item.lureBaitId ? `data-fish-lure-bait-id="${item.lureBaitId}"` : ""}>
                                    View Rig <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span>
                                </button>
                            </span>
                            <span class="fish-rig-recommendation__reason">${item.reason}</span>
                        </div>
                    `).join("")}
                </div>
            </section>
        `
        : "";
    const rigMarkup = recommendations.length
        ? buildFishDisclosureMarkup(
            "rigs",
            "Rigs to Start With",
            recommendations.length === 1
                ? buildRigGroup("", recommendations, false)
                : `${buildRigGroup("Primary Choices", primaryRigs)}${buildRigGroup("Alternatives", alternativeRigs)}`,
            expandedDisclosureIds.has("rigs")
        )
        : "";

    const specializedTargeting = detailConfig.specializedTargeting;
    const researchTopics = Array.isArray(specializedTargeting?.researchTopics)
        ? specializedTargeting.researchTopics.filter((topic) => typeof topic === "string" && topic.trim())
        : [];
    const tackleResearchTopic = researchTopics.find((topic) => /tackle|equipment/i.test(topic)) ?? researchTopics[0] ?? null;
    const methodResearchTopic = researchTopics.find((topic) => /technique|method|hookset/i.test(topic)) ?? researchTopics[1] ?? null;
    const researchActionMarkup = specializedTargeting?.body
        ? `
            <div class="fish-learn-more">
                <h4>Learn More</h4>
                <div class="fish-learn-more__actions">
                    ${tackleResearchTopic ? `<a class="fish-learn-more__action" href="${buildFishResearchUrl(tackleResearchTopic)}" target="_blank" rel="noopener noreferrer">Tackle &amp; Equipment <span class="link-arrow link-arrow--external" aria-hidden="true">↗</span></a>` : ""}
                    ${methodResearchTopic ? `<a class="fish-learn-more__action" href="${buildFishResearchUrl(methodResearchTopic)}" target="_blank" rel="noopener noreferrer">Methods &amp; Techniques <span class="link-arrow link-arrow--external" aria-hidden="true">↗</span></a>` : ""}
                    ${typeof detailConfig.onRegulationsSelect === "function" ? `<button class="fish-learn-more__action" type="button" data-fish-regulations>Fishing Regulations <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></button>` : ""}
                </div>
            </div>
        `
        : "";
    const specializedTargetingMarkup = specializedTargeting?.body
        ? buildFishDisclosureMarkup(
            "fishing",
            "Fishing This Species",
            `<p class="fish-specialized-body">${specializedTargeting.body}</p>${researchActionMarkup}`,
            expandedDisclosureIds.has("fishing")
        )
        : "";
    const safetyGuidance = Array.isArray(detailConfig.safetyGuidance)
        ? detailConfig.safetyGuidance.filter((item) => typeof item?.body === "string" && item.body.trim())
        : [];
    const safetyMarkup = safetyGuidance.length
        ? `
            <section class="detail-section detail-section--safety fish-specialized-safety" aria-labelledby="fish-safety-title">
                <h3 id="fish-safety-title">Safety &amp; Handling</h3>
                ${safetyGuidance.map((item) => `<p>${item.body}</p>`).join("")}
            </section>
        `
        : "";

    const relatedNames = relationships.map((context) => context.relatedFish.name);
    const compareMarkup = relationships.length
        ? `
            <div class="fish-about-row fish-about-row--similar-fish">
                <div class="fish-similar-fish__heading">
                    <h4 class="fish-similar-fish__title">Similar Fish</h4>
                    <button class="fish-similar-fish__compare" type="button" data-fish-compare-from-detail>
                        <span>Compare Fish</span> <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span>
                    </button>
                </div>
                ${relatedNames.length ? `<ul class="fish-similar-fish__list" aria-label="Similar Fish">${relatedNames.map((name) => `<li>${name}</li>`).join("")}</ul>` : ""}
            </div>
        `
        : "";

    const aboutMarkup = [habitatMarkup, rigMarkup, specializedTargetingMarkup, compareMarkup]
        .filter(Boolean)
        .join("");
    const reelSetupMarkup = buildDetailReelSetupContextMarkup(detailConfig.reelSetupContextLines);

    appMain.innerHTML = `
        <article class="detail-view detail-view--fish" aria-labelledby="fish-detail-title">
            ${buildPageNavigationMarkup(detailConfig.parentLabel, "", reelSetupMarkup)}
            <header class="detail-header fish-detail-header">
                <p class="detail-eyebrow">${category?.name ?? "Fish"}</p>
                <h2 id="fish-detail-title">${record.name}</h2>
                <p class="fish-scientific-name"><strong>Scientific name:</strong> <em>${record.scientificName}</em></p>
                ${aliasesMarkup}
                <p class="fish-identity-meta"><strong>Family:</strong> ${record.family}</p>
                <figure class="fish-primary-media fish-primary-media--identity">
                    ${buildFishPrimaryMediaMarkup(
                        media,
                        "fish-primary-media__image",
                        "fish-primary-media__image-frame",
                        "eager"
                    )}
                    ${attributionMarkup}
                </figure>
            </header>
            <section class="detail-section fish-identification-overview" aria-labelledby="fish-identification-overview-title">
                <h3 id="fish-identification-overview-title">How to Identify This Fish</h3>
                <p class="fish-identification-overview__summary">${record.summary}</p>
                ${traitsMarkup}
            </section>
            ${safetyMarkup}
            ${aboutMarkup ? `
                <section class="fish-about" aria-labelledby="fish-about-title">
                    <h3 class="fish-about__title" id="fish-about-title">About This Fish</h3>
                    <div class="fish-about__shell">${aboutMarkup}</div>
                </section>
            ` : ""}
        </article>
    `;

    appMain.querySelector("[data-parent-navigation]")?.addEventListener("click", detailConfig.onParent);
    initializeHomeNavigation(appMain);

    const expanded = new Set(expandedDisclosureIds);
    appMain.querySelectorAll("[data-fish-disclosure-id]").forEach((trigger) => {
        trigger.addEventListener("click", () => {
            const disclosureId = trigger.dataset.fishDisclosureId;
            const panel = appMain.querySelector(`[data-fish-disclosure-panel="${disclosureId}"]`);
            const isExpanded = trigger.getAttribute("aria-expanded") === "true";
            const nextExpanded = !isExpanded;
            trigger.setAttribute("aria-expanded", String(nextExpanded));
            if (panel) panel.hidden = !nextExpanded;
            const stateCue = trigger.querySelector(".fish-about-row__state");
            if (stateCue) stateCue.textContent = nextExpanded ? "▴" : "▾";
            if (nextExpanded) expanded.add(disclosureId);
            else expanded.delete(disclosureId);
            detailConfig.onDisclosureStateChange?.([...expanded]);
        });
    });

    appMain.querySelector("[data-fish-compare-from-detail]")?.addEventListener("click", () => {
        detailConfig.onCompareSelect?.();
    });
    appMain.querySelectorAll("[data-fish-rig-id]").forEach((button) => {
        button.addEventListener("click", () => detailConfig.onRigSelect?.(button.dataset.fishRigId, button.dataset.fishLureBaitId ?? null));
    });
    appMain.querySelector("[data-fish-regulations]")?.addEventListener("click", () => {
        detailConfig.onRegulationsSelect?.();
    });
    initializeConditionLinks(appMain);
    initializeFishHabitatReferenceLinks(appMain);
}

function renderFishComparisonChooser(appMain, config) {
    if (!appMain || !config?.currentFish || !Array.isArray(config.comparisons)) {
        console.error("A valid Fish comparison chooser configuration is required.");
        return;
    }

    const optionsMarkup = config.comparisons.map((context) => `
        <button class="fish-comparison-chooser-card" type="button" data-fish-comparison-choice="${context.relationship.id}">
            <span class="fish-comparison-chooser-card__heading">
                <span>${context.relatedFish.name}</span>
                <span class="fish-comparison-chooser-card__action">Compare <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></span>
            </span>
            ${buildFishPrimaryMediaMarkup(
                context.relatedMedia,
                "fish-comparison-chooser-card__image",
                "fish-comparison-chooser-card__image-frame",
                "lazy"
            )}
        </button>
    `).join("");

    appMain.innerHTML = `
        <section class="content-view fish-comparison-chooser" aria-labelledby="fish-comparison-chooser-title">
            ${buildPageNavigationMarkup(config.parentLabel)}
            <h2 id="fish-comparison-chooser-title">Compare ${config.currentFish.name}</h2>
            <p>Choose a similar fish to compare.</p>
            <div class="fish-comparison-chooser-grid">${optionsMarkup}</div>
        </section>
    `;

    appMain.querySelector("[data-parent-navigation]")?.addEventListener("click", config.onParent);
    initializeHomeNavigation(appMain);
    appMain.querySelectorAll("[data-fish-comparison-choice]").forEach((card) => {
        card.addEventListener("click", () => config.onSelect?.(card.dataset.fishComparisonChoice));
    });
}

function renderFishComparisonCatalog(appMain, config) {
    if (!appMain || !config) {
        console.error("A valid Fish comparison catalog configuration is required.");
        return;
    }
    const groups = Array.isArray(config.groups) ? config.groups : [];
    const groupMarkup = groups.map((group) => `
        <section class="fish-comparison-catalog-group" aria-labelledby="fish-comparison-group-${group.category.id}">
            <h3 id="fish-comparison-group-${group.category.id}">${group.title}</h3>
            <div class="fish-comparison-catalog-grid">
                ${group.comparisons.map((comparison) => `
                    <button class="fish-comparison-catalog-card" type="button" data-fish-relationship-id="${comparison.relationship.id}">
                        <span class="fish-comparison-catalog-card__images">
                            ${buildFishPrimaryMediaMarkup(
                                comparison.mediaA,
                                "fish-comparison-catalog-card__image",
                                "fish-comparison-catalog-card__image-frame",
                                "lazy"
                            )}
                            ${buildFishPrimaryMediaMarkup(
                                comparison.mediaB,
                                "fish-comparison-catalog-card__image",
                                "fish-comparison-catalog-card__image-frame",
                                "lazy"
                            )}
                        </span>
                        <span class="fish-comparison-catalog-card__title">${comparison.fishA.name} vs ${comparison.fishB.name}</span>
                        <span class="fish-comparison-catalog-card__action">Compare <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></span>
                    </button>
                `).join("")}
            </div>
        </section>
    `).join("");

    appMain.innerHTML = `
        <section class="content-view fish-comparison-catalog" aria-labelledby="fish-comparison-catalog-title">
            ${buildPageNavigationMarkup(config.parentLabel)}
            <h2 id="fish-comparison-catalog-title">Compare Similar Fish</h2>
            <p>Choose a pair to compare the most useful visible identification differences.</p>
            <div class="fish-comparison-catalog-groups">${groupMarkup}</div>
        </section>
    `;
    appMain.querySelector("[data-parent-navigation]")?.addEventListener("click", config.onParent);
    initializeHomeNavigation(appMain);
    appMain.querySelectorAll("[data-fish-relationship-id]").forEach((button) => {
        button.addEventListener("click", () => config.onSelect?.(button.dataset.fishRelationshipId));
    });
}

function renderFishComparison(appMain, config) {
    if (!appMain || !config?.relationship || !config?.fishA || !config?.fishB) {
        console.error("A valid Fish comparison configuration is required.");
        return;
    }

    const distinctionsFor = (fishId) => config.relationship.distinctions
        .filter((distinction) => distinction.fishId === fishId)
        .map((distinction) => `<li>${distinction.text}</li>`)
        .join("");

    const buildIdentity = (fish, media, side) => `
        <section class="fish-comparison-identity fish-comparison-identity--${side}" aria-labelledby="fish-comparison-${side}-name">
            <h3 id="fish-comparison-${side}-name">${fish.name}</h3>
            ${buildFishPrimaryMediaMarkup(
                media,
                "fish-comparison-identity__image",
                "fish-comparison-identity__image-frame",
                "eager"
            )}
        </section>
    `;

    const buildDifferences = (fish, side) => `
        <section class="fish-comparison-difference fish-comparison-difference--${side}" aria-labelledby="fish-comparison-${side}-differences">
            <h4 class="detail-subsection-heading" id="fish-comparison-${side}-differences">${fish.name}</h4>
            <ul class="detail-list">${distinctionsFor(fish.id)}</ul>
            <button class="fish-comparison-view-link" type="button" data-fish-detail-id="${fish.id}">
                <span class="fish-comparison-view-link__name">${fish.name}</span>
                <span class="fish-comparison-view-link__action">View <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></span>
            </button>
        </section>
    `;

    const comparisonMedia = Array.isArray(config.comparisonMedia)
        ? config.comparisonMedia.filter((media) => media?.file)
        : [];
    const comparisonMediaMarkup = comparisonMedia.length
        ? `
            <section class="fish-comparison-diagnostic-media" aria-labelledby="fish-comparison-diagnostic-media-title">
                <h3 id="fish-comparison-diagnostic-media-title">Comparison Detail</h3>
                <div class="fish-comparison-diagnostic-media__grid">
                    ${comparisonMedia.map((media) => `
                        <figure class="fish-comparison-diagnostic-media__item">
                            ${buildFishMediaMarkup(media, "fish-comparison-diagnostic-media__image", "lazy")}
                            ${media.caption ? `<figcaption>${media.caption}</figcaption>` : ""}
                        </figure>
                    `).join("")}
                </div>
            </section>
        `
        : "";

    appMain.innerHTML = `
        <article class="detail-view detail-view--fish-comparison" aria-labelledby="fish-comparison-title">
            ${buildPageNavigationMarkup(config.parentLabel)}
            <header class="detail-header fish-comparison-header">
                <h2 id="fish-comparison-title">${config.fishA.name} vs ${config.fishB.name}</h2>
                <p>Focus on the visible traits that best distinguish these two Fish.</p>
            </header>
            <section class="fish-comparison-panel" aria-labelledby="fish-comparison-key-differences-title">
                <div class="fish-comparison-layout">
                    ${buildIdentity(config.fishA, config.mediaA, "a")}
                    ${buildIdentity(config.fishB, config.mediaB, "b")}
                    <h3 class="fish-comparison-key-differences" id="fish-comparison-key-differences-title">Key Differences</h3>
                    ${buildDifferences(config.fishA, "a")}
                    ${buildDifferences(config.fishB, "b")}
                </div>
                ${comparisonMediaMarkup}
            </section>
        </article>
    `;
    appMain.querySelector("[data-parent-navigation]")?.addEventListener("click", config.onParent);
    initializeHomeNavigation(appMain);
    appMain.querySelectorAll("[data-fish-detail-id]").forEach((button) => {
        button.addEventListener("click", () => config.onFishSelect?.(button.dataset.fishDetailId));
    });
}

/* ==========================================================
   END FISH GUIDE
   ========================================================== */
