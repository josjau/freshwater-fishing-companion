/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: features/regulations-renderer.js
   PURPOSE: Extracted owner functions and contracts from approved pre-migration source.
   ========================================================== */

"use strict";

/* ==========================================================
   REGULATIONS — GATEWAY + STATE RENDERING
   ========================================================== */

function escapeRegulationsHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, (character) => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[character]));
}

function getRegulationsResourceActionLabel(resource) {
    // Describe the destination that opens, not a downstream button or feature.
    switch (resource?.experienceType) {
        case "pdf": return "Download PDF";
        case "interactive-map": return "Open Official Map";
        case "interactive-tool": return "Open Official Tool";
        case "external-portal":
            return resource.primaryCategory === "licenses-permits" ? "Open License Portal" : "Open Official Portal";
        default:
            switch (resource?.primaryCategory) {
                case "regulations": return "View Regulations";
                case "licenses-permits": return "View License Information";
                case "special-regulations": return "View Special Rules";
                case "where-to-fish": return "Explore Fishing Waters";
                case "public-access": return "View Access Information";
                case "stocking": return "View Stocking Information";
                case "reports-forecasts": return "View Reports & Forecasts";
                default: return "View Official Resource";
            }
    }
}

function renderRegulationsGatewayView(appMain, config) {
    if (!appMain || !config || !Array.isArray(config.states)) {
        console.error("A valid Regulations gateway configuration is required.");
        return;
    }

    const states = [...config.states].sort((first, second) =>
        first.name.localeCompare(second.name, undefined, { sensitivity: "base" })
    );

    const hasContextualParent = Boolean(config.parentLabel && typeof config.onParent === "function");

    appMain.innerHTML = `
        <section class="content-view regulations-gateway-view" aria-labelledby="regulations-title">
            ${buildPageNavigationMarkup(config.parentLabel ?? null)}
            <h2 id="regulations-title">Regulations</h2>
            <p>Choose a state to find official fishing regulations, license information, access resources, and other state-agency tools.</p>

            <form class="regulations-selector" data-regulations-selector-form>
                <div class="regulations-search-group">
                    <label class="search-label" for="regulations-state-search">Find a State</label>
                    <div class="search-input-shell">
                        <input class="search-input" id="regulations-state-search" type="search"
                            placeholder="Try Oklahoma or OK" autocomplete="off" enterkeyhint="search">
                        <button class="search-clear-button" type="button" data-regulations-search-clear aria-label="Clear search" hidden>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <p class="regulations-search-help">Search by state name or 2-letter abbreviation. Typing selects the first matching state but does not open it.</p>
                </div>

                <div class="regulations-select-group">
                    <label class="search-label" for="regulations-state-select">State</label>
                    <select class="regulations-state-select" id="regulations-state-select" data-regulations-state-select></select>
                    <button class="regulations-state-picker-trigger" type="button" data-regulations-picker-trigger
                        aria-haspopup="dialog" aria-expanded="false" aria-controls="regulations-state-picker">
                        <span data-regulations-picker-trigger-label></span>
                        <span class="regulations-state-picker-trigger__arrow" aria-hidden="true">⌄</span>
                    </button>
                </div>

                <button class="regulations-open-state" type="submit">View State <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></button>
                <p class="search-status regulations-search-status" data-regulations-search-status aria-live="polite"></p>

                <div class="regulations-state-picker" id="regulations-state-picker" data-regulations-state-picker hidden>
                    <button class="regulations-state-picker__backdrop" type="button" data-regulations-picker-cancel tabindex="-1" aria-label="Close state picker"></button>
                    <section class="regulations-state-picker__panel" role="dialog" aria-modal="true" aria-labelledby="regulations-state-picker-title">
                        <div class="regulations-state-picker__header">
                            <h3 id="regulations-state-picker-title">Select a State</h3>
                            <button class="regulations-state-picker__close" type="button" data-regulations-picker-cancel aria-label="Close state picker">×</button>
                        </div>
                        <div class="regulations-state-wheel-shell">
                            <div class="regulations-state-wheel" data-regulations-state-wheel role="listbox" tabindex="0" aria-label="State"></div>
                            <div class="regulations-state-wheel-selection" aria-hidden="true"></div>
                        </div>
                        <div class="regulations-state-picker__actions">
                            <button class="regulations-state-picker__cancel" type="button" data-regulations-picker-cancel>Cancel</button>
                            <button class="regulations-state-picker__done" type="button" data-regulations-picker-done>Done</button>
                        </div>
                    </section>
                </div>
            </form>
            <p class="regulations-authority-note">Freshwater Fishing Companion links to official resources. The responsible state authority owns the current fishing rules.</p>
        </section>
    `;

    if (hasContextualParent) appMain.querySelector("[data-parent-navigation]")?.addEventListener("click", config.onParent);
    initializeHomeNavigation(appMain);

    const form = appMain.querySelector("[data-regulations-selector-form]");
    const input = appMain.querySelector("#regulations-state-search");
    const clearButton = appMain.querySelector("[data-regulations-search-clear]");
    const select = appMain.querySelector("[data-regulations-state-select]");
    const picker = appMain.querySelector("[data-regulations-state-picker]");
    const pickerTrigger = appMain.querySelector("[data-regulations-picker-trigger]");
    const pickerTriggerLabel = appMain.querySelector("[data-regulations-picker-trigger-label]");
    const pickerDone = appMain.querySelector("[data-regulations-picker-done]");
    const pickerCancelButtons = appMain.querySelectorAll("[data-regulations-picker-cancel]");
    const wheel = appMain.querySelector("[data-regulations-state-wheel]");
    const status = appMain.querySelector("[data-regulations-search-status]");
    let pickerDraftStateId = null;
    let wheelScrollFrame = null;

    const getStateLabel = (stateId) => {
        const state = states.find((record) => record.id === stateId);
        return state ? `${state.name} (${state.abbreviation})` : "Select a state";
    };

    const setWheelDraftState = (stateId, { scrollWheel = false, behavior = "auto" } = {}) => {
        if (!stateId || !wheel) return;
        const wheelOption = wheel.querySelector(`[data-state-id="${stateId}"]`);
        if (!wheelOption) return;

        pickerDraftStateId = stateId;
        wheel.querySelectorAll("[data-regulations-wheel-option]").forEach((option) => {
            const isSelected = option.dataset.stateId === stateId;
            option.classList.toggle("is-selected", isSelected);
            option.setAttribute("aria-selected", String(isSelected));
        });
        wheel.setAttribute("aria-activedescendant", wheelOption.id);

        if (scrollWheel) {
            const targetTop = wheelOption.offsetTop - ((wheel.clientHeight - wheelOption.offsetHeight) / 2);
            wheel.scrollTo({ top: targetTop, behavior });
        }
    };

    const setSelectedState = (stateId) => {
        if (!stateId || !select) return;
        const optionExists = Array.from(select.options).some((option) => option.value === stateId);
        if (!optionExists) return;

        select.value = stateId;
        if (pickerTriggerLabel) pickerTriggerLabel.textContent = getStateLabel(stateId);
        config.onSelectionChange?.(stateId);
    };

    const renderOptions = (eligibleStates, preferredStateId = null) => {
        if (!select) return;
        select.innerHTML = eligibleStates.map((state) =>
            `<option value="${state.id}">${state.name} (${state.abbreviation})</option>`
        ).join("");

        if (wheel) {
            wheel.innerHTML = eligibleStates.map((state) => `
                <button class="regulations-state-wheel-option" id="regulations-wheel-${state.id}" type="button"
                    role="option" aria-selected="false" tabindex="-1"
                    data-regulations-wheel-option data-state-id="${state.id}">${state.name} (${state.abbreviation})</button>
            `).join("");
        }

        const preferredExists = eligibleStates.some((state) => state.id === preferredStateId);
        const selectedStateId = preferredExists ? preferredStateId : eligibleStates[0]?.id ?? null;

        select.disabled = eligibleStates.length === 0;
        if (pickerTrigger) pickerTrigger.disabled = eligibleStates.length === 0;
        if (wheel) wheel.setAttribute("aria-disabled", String(eligibleStates.length === 0));

        if (selectedStateId) {
            setSelectedState(selectedStateId);
            setWheelDraftState(selectedStateId);
        } else {
            select.value = "";
            pickerDraftStateId = null;
            if (pickerTriggerLabel) pickerTriggerLabel.textContent = "No matching states";
            wheel?.removeAttribute("aria-activedescendant");
            config.onSelectionChange?.(null);
        }
    };

    const closePicker = ({ commit = false } = {}) => {
        if (!picker || picker.hidden) return;
        if (commit && pickerDraftStateId) setSelectedState(pickerDraftStateId);
        picker.hidden = true;
        document.body.classList.remove("regulations-picker-open");
        pickerTrigger?.setAttribute("aria-expanded", "false");
        pickerTrigger?.focus();
    };

    const openPicker = () => {
        if (!picker || !wheel || pickerTrigger?.disabled || !select?.value) return;
        picker.hidden = false;
        document.body.classList.add("regulations-picker-open");
        pickerTrigger?.setAttribute("aria-expanded", "true");
        pickerDraftStateId = select.value;
        requestAnimationFrame(() => {
            setWheelDraftState(pickerDraftStateId, { scrollWheel: true });
            wheel.focus({ preventScroll: true });
        });
    };

    let isInitialSearchRestore = true;

    const updateSearch = () => {
        const query = String(input?.value ?? "").trim().toLocaleLowerCase();
        config.onQueryChange?.(input?.value ?? "");
        if (clearButton) clearButton.hidden = query.length === 0;

        if (!query) {
            renderOptions(states, config.selectedStateId);
            if (status) status.textContent = `${states.length} states available.`;
            return;
        }

        const prefixMatches = states.filter((state) =>
            state.name.toLocaleLowerCase().startsWith(query) || state.abbreviation.toLocaleLowerCase().startsWith(query)
        );
        const matches = prefixMatches.length > 0
            ? prefixMatches
            : states.filter((state) =>
                state.name.toLocaleLowerCase().includes(query) || state.abbreviation.toLocaleLowerCase().includes(query)
            );

        const restoredStateId = isInitialSearchRestore && matches.some((state) => state.id === config.selectedStateId)
            ? config.selectedStateId
            : matches[0]?.id ?? null;
        renderOptions(matches, restoredStateId);
        if (status) {
            const selectedState = matches.find((state) => state.id === restoredStateId);
            status.textContent = matches.length === 0
                ? "No state matched that search."
                : `${matches.length} ${matches.length === 1 ? "state" : "states"} matched. ${selectedState?.name ?? matches[0].name} is selected.`;
        }
        isInitialSearchRestore = false;
    };

    if (input) input.value = config.initialQuery ?? "";
    updateSearch();

    input?.addEventListener("input", () => {
        isInitialSearchRestore = false;
        updateSearch();
    });
    clearButton?.addEventListener("click", () => {
        input.value = "";
        config.onQueryChange?.("");
        renderOptions(states, config.selectedStateId);
        clearButton.hidden = true;
        if (status) status.textContent = `${states.length} states available.`;
        input.focus();
    });
    select?.addEventListener("change", () => setSelectedState(select.value));
    pickerTrigger?.addEventListener("click", openPicker);
    pickerDone?.addEventListener("click", () => closePicker({ commit: true }));
    pickerCancelButtons.forEach((button) => button.addEventListener("click", () => closePicker()));
    picker?.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            event.preventDefault();
            closePicker();
            return;
        }
        if (event.key !== "Tab") return;
        // Confine keyboard focus to the active modal without trapping Escape.
        const focusables = Array.from(picker.querySelectorAll('button:not([disabled]), [tabindex="0"]'))
            .filter((item) => item !== picker.querySelector("[data-regulations-picker-cancel][tabindex='-1']"));
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && (document.activeElement === first || !picker.contains(document.activeElement))) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && (document.activeElement === last || !picker.contains(document.activeElement))) {
            event.preventDefault();
            first.focus();
        }
    });
    wheel?.addEventListener("click", (event) => {
        const option = event.target.closest("[data-regulations-wheel-option]");
        if (!option) return;
        setWheelDraftState(option.dataset.stateId, { scrollWheel: true, behavior: "smooth" });
    });
    wheel?.addEventListener("keydown", (event) => {
        if (!["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) return;
        const options = Array.from(wheel.querySelectorAll("[data-regulations-wheel-option]"));
        if (options.length === 0) return;

        event.preventDefault();
        const selectedIndex = Math.max(0, options.findIndex((option) => option.dataset.stateId === pickerDraftStateId));
        let targetIndex = selectedIndex;
        if (event.key === "ArrowUp") targetIndex = Math.max(0, selectedIndex - 1);
        if (event.key === "ArrowDown") targetIndex = Math.min(options.length - 1, selectedIndex + 1);
        if (event.key === "Home") targetIndex = 0;
        if (event.key === "End") targetIndex = options.length - 1;

        setWheelDraftState(options[targetIndex].dataset.stateId, { scrollWheel: true, behavior: "smooth" });
    });
    wheel?.addEventListener("scroll", () => {
        if (wheelScrollFrame) cancelAnimationFrame(wheelScrollFrame);
        wheelScrollFrame = requestAnimationFrame(() => {
            const options = Array.from(wheel.querySelectorAll("[data-regulations-wheel-option]"));
            if (options.length === 0) return;

            const wheelBounds = wheel.getBoundingClientRect();
            const wheelCenter = wheelBounds.top + (wheelBounds.height / 2);
            const nearestOption = options.reduce((nearest, option) => {
                const optionBounds = option.getBoundingClientRect();
                const distance = Math.abs((optionBounds.top + (optionBounds.height / 2)) - wheelCenter);
                return !nearest || distance < nearest.distance ? { option, distance } : nearest;
            }, null)?.option;

            if (nearestOption && nearestOption.dataset.stateId !== pickerDraftStateId) {
                setWheelDraftState(nearestOption.dataset.stateId);
            }
        });
    }, { passive: true });
    form?.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!select?.value) return;
        config.onSelectionChange?.(select.value);
        config.onStateOpen?.(select.value);
    });
}

function renderRegulationsStateView(appMain, config) {
    if (!appMain || !config?.state || !Array.isArray(config.resources)) {
        console.error("A valid Regulations state configuration is required.");
        return;
    }

    // Approved Registry composition: visible primary obligations precede a single
    // grouped supporting disclosure area. Internal headings are peer subsections,
    // never additional nested expanders or count-dependent visible exceptions.
    const primaryCategories = [
        { id: "regulations", label: "Fishing Regulations" },
        { id: "licenses-permits", label: "Licenses & Permits" }
    ];
    const guidanceCategories = [
        { id: "special-regulations", label: "Special Regulations" },
        { id: "invasive-bait-guidance", label: "Invasive Species & Bait Guidance" },
        { id: "additional-guidance", label: "Additional Official Guidance" }
    ];
    const tripCategories = [
        { id: "fishing-hubs", label: "Fishing Hubs" },
        { id: "where-to-fish", label: "Where to Fish" },
        { id: "public-access", label: "Public Access & Launches" },
        { id: "maps-waterbody-tools", label: "Maps & Waterbody Tools" },
        { id: "stocking", label: "Fish Stocking" },
        { id: "reports-forecasts", label: "Reports & Forecasts" },
        { id: "additional-guidance", label: "Additional Official Guidance" }
    ];
    const resources = config.resources.filter((resource) => resource.status !== "retired");

    // A resource's Fishing Hub role is canonically typed in data/regulations.js;
    // title copy never controls which supporting subsection contains the link.
    const isFishingHub = (resource) => resource.section === "plan-your-trip" &&
        Array.isArray(resource.capabilities) && resource.capabilities.includes("fishing-hub");

    const displayCategory = (resource) => {
        if (isFishingHub(resource)) return "fishing-hubs";
        if (resource.primaryCategory !== "other-official-resource") return resource.primaryCategory;
        const capabilities = Array.isArray(resource.capabilities) ? resource.capabilities : [];
        if (resource.section === "before-you-fish" &&
            (capabilities.includes("aquatic-invasive-species") || capabilities.includes("bait-transport"))) {
            return "invasive-bait-guidance";
        }
        if (resource.section === "plan-your-trip" &&
            (resource.experienceType === "interactive-map" || resource.experienceType === "interactive-tool")) {
            return "maps-waterbody-tools";
        }
        return "additional-guidance";
    };

    const buildResourceLinks = (records) => records.map((resource) => {
        const unavailableMarkup = resource.status === "temporarily-unavailable"
            ? '<span class="regulations-resource-status">Limited access \u2014 check agency site</span>'
            : "";
        return `
            <a class="regulations-resource-link" href="${escapeRegulationsHtml(resource.url)}" target="_blank" rel="noopener noreferrer">
                <span class="regulations-resource-link__heading">
                    <span class="regulations-resource-link__title">${escapeRegulationsHtml(resource.title)}</span>
                    <span class="regulations-resource-link__action">${escapeRegulationsHtml(getRegulationsResourceActionLabel(resource))} <span class="link-arrow link-arrow--external" aria-hidden="true">↗</span></span>
                </span>
                <span class="regulations-resource-link__description">${escapeRegulationsHtml(resource.description)}</span>
                ${unavailableMarkup}
            </a>
        `;
    }).join("");

    const buildSubsections = (entries, categories, idPrefix, headingLevel) => categories.map((category) => {
        const records = entries.filter((resource) => displayCategory(resource) === category.id);
        if (records.length === 0) return "";
        const headingId = `${idPrefix}-${category.id}-heading`;
        const rows = `<div class="regulations-resource-card">${buildResourceLinks(records)}</div>`;
        return `
            <section class="regulations-category-group" aria-labelledby="${headingId}">
                <h${headingLevel} id="${headingId}" class="detail-subsection-heading regulations-category-heading">${escapeRegulationsHtml(category.label)}</h${headingLevel}>
                ${rows}
            </section>
        `;
    }).join("");

    // The two primary legal destinations always remain visible. Do not allow
    // secondary one-link groups to interrupt the subsequent disclosure sequence.
    const beforeResources = resources.filter((resource) => resource.section === "before-you-fish");
    const primaryIds = new Set(primaryCategories.map((category) => category.id));
    const primaryResources = beforeResources.filter((resource) => primaryIds.has(displayCategory(resource)));
    const guidanceResources = beforeResources.filter((resource) => !primaryIds.has(displayCategory(resource)));
    const tripResources = resources.filter((resource) => resource.section === "plan-your-trip");
    const primaryMarkup = primaryResources.length ? `
        <section class="detail-section regulations-resource-section regulations-before-you-fish" aria-labelledby="regulations-before-you-fish-title">
            <h3 id="regulations-before-you-fish-title">Before You Fish</h3>
            ${buildSubsections(primaryResources, primaryCategories, "regulations-primary", 4)}
        </section>
    ` : "";

    // One contained group, independent disclosure rows, named peer subsections
    // within each open panel. Always render both rows CLOSED on fresh entry.
    const disclosureMarkup = (key, label, entries, categories) => {
        if (entries.length === 0) return "";
        const headingId = `regulations-${key}-heading`;
        const panelId = `regulations-${key}-panel`;
        return `
            <section class="regulations-supporting-row" aria-labelledby="${headingId}">
                <h4 id="${headingId}" class="regulations-supporting-row__heading">
                    <button type="button" class="regulations-supporting-row__trigger" data-regulations-disclosure-toggle
                        aria-expanded="false" aria-controls="${panelId}">
                        <span>${escapeRegulationsHtml(label)}</span>
                        <span class="regulations-supporting-row__state" aria-hidden="true">▾</span>
                    </button>
                </h4>
                <div class="regulations-supporting-row__panel" id="${panelId}" role="region"
                     aria-labelledby="${headingId}" hidden>
                    ${buildSubsections(entries, categories, `regulations-${key}`, 5)}
                </div>
            </section>
        `;
    };
    const supportingRows = [
        disclosureMarkup("additional-guidance", "Additional Rules & Guidance", guidanceResources, guidanceCategories),
        disclosureMarkup("plan-your-trip", "Plan Your Trip", tripResources, tripCategories)
    ].filter(Boolean).join("");
    const supportingMarkup = supportingRows ? `
        <section class="regulations-supporting" aria-labelledby="regulations-supporting-title">
            <h3 id="regulations-supporting-title" class="regulations-supporting__title">Additional Official Resources</h3>
            <div class="regulations-supporting__shell">${supportingRows}</div>
        </section>
    ` : "";

    // A standing reminder always remains visible; FCC does not curate event notices.
    const updates = config.officialUpdatesResource;
    const officialUpdatesLink = updates && updates.status === "active" &&
        Array.isArray(updates.capabilities) && updates.capabilities.includes("official-rule-updates") &&
        updates.experienceType === "web-page"
        ? `<a class="regulations-notice-link" href="${escapeRegulationsHtml(updates.url)}" target="_blank" rel="noopener noreferrer">View Official Notices & Updates <span class="link-arrow link-arrow--external" aria-hidden="true">↗</span></a>`
        : "";

    appMain.innerHTML = `
        <article class="content-view regulations-state-view" aria-labelledby="regulations-state-title">
            ${buildPageNavigationMarkup("Regulations")}
            <header class="regulations-state-header">
                <h2 id="regulations-state-title">${escapeRegulationsHtml(config.state.name)}</h2>
                <p class="regulations-state-subtitle">Fishing Regulations & Resources</p>
            </header>
            <aside class="detail-section detail-section--safety regulations-standing-notice" aria-label="Fishing rule changes reminder">
                <h3>Check for Current Rule Changes</h3>
                <p>Before fishing, check the state agency for emergency orders, temporary closures, and special notices that may affect where you plan to fish. Official rules and updates take precedence.</p>
                ${officialUpdatesLink}
            </aside>
            ${primaryMarkup}
            ${supportingMarkup}
            <footer class="regulations-agency-footer">
                <p class="regulations-agency-attribution">Official resources from <a class="regulations-agency-link" href="${escapeRegulationsHtml(config.state.agencyUrl)}" target="_blank" rel="noopener noreferrer"><span class="regulations-agency-link__name">${escapeRegulationsHtml(config.state.agencyName)}</span><span class="regulations-agency-link__action">Visit Site <span class="link-arrow link-arrow--external" aria-hidden="true">↗</span></span></a></p>
            </footer>
        </article>
    `;

    appMain.querySelectorAll("[data-regulations-disclosure-toggle]").forEach((toggle) => {
        const panel = appMain.querySelector(`#${toggle.getAttribute("aria-controls")}`);
        const caret = toggle.querySelector(".regulations-supporting-row__state");
        if (!panel) return;
        toggle.addEventListener("click", () => {
            const expanding = toggle.getAttribute("aria-expanded") !== "true";
            toggle.setAttribute("aria-expanded", String(expanding));
            panel.hidden = !expanding;
            if (caret) caret.textContent = expanding ? "▴" : "▾";
            if (!expanding) toggle.scrollIntoView({ block: "nearest" });
        });
    });

    appMain.querySelector("[data-parent-navigation]")?.addEventListener("click", config.onParent);
    initializeHomeNavigation(appMain);
}

/* ==========================================================
   END REGULATIONS — GATEWAY + STATE RENDERING
   ========================================================== */
