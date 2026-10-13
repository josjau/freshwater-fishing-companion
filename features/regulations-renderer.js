/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: features/regulations-renderer.js
   PURPOSE: Extracted owner functions and contracts from approved pre-migration source.
   ========================================================== */

"use strict";

/* ==========================================================
   REGULATIONS — GATEWAY + STATE RENDERING
   ========================================================== */

function getRegulationsResourceActionLabel(resource) {
    const capabilities = new Set(Array.isArray(resource?.capabilities) ? resource.capabilities : []);
    const title = String(resource?.title ?? "Official Resource");

    switch (resource?.primaryCategory) {
        case "regulations":
            return "View Fishing Regulations";
        case "licenses-permits":
            if (capabilities.has("license-purchase") && !capabilities.has("license-information")) {
                return "Buy Fishing License";
            }
            if (capabilities.has("license-purchase")) {
                return "View Licenses & Purchase Options";
            }
            return "View License Information";
        case "special-regulations":
            return "View Special Regulations";
        case "where-to-fish":
            if (!/^where to fish/i.test(title) && capabilities.size >= 4) {
                return `Explore ${title}`;
            }
            if (capabilities.has("fishing-forecasts")) {
                return "Find Waters & Forecasts";
            }
            if (capabilities.has("waterbody-regulations")) {
                return "Find Waters & Regulations";
            }
            if (capabilities.has("lake-information")) {
                return "Find Waters & Lake Info";
            }
            return "Find Fishing Locations";
        case "public-access":
            return "View Public Access";
        case "stocking":
            return "View Stocking Information";
        case "reports-forecasts":
            if (capabilities.has("fishing-reports")) return "View Fishing Reports";
            if (capabilities.has("fishing-forecasts")) return "View Fishing Forecasts";
            return "View Reports & Forecasts";
        default:
            return `Open ${title}`;
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
    if (!appMain || !config?.state || !Array.isArray(config.resources) || !Array.isArray(config.notices)) {
        console.error("A valid Regulations state configuration is required.");
        return;
    }

    const categoryPriority = new Map([
        ["regulations", 0],
        ["licenses-permits", 1]
    ]);
    const resources = [...config.resources].sort((first, second) =>
        (categoryPriority.get(first.primaryCategory) ?? 10) - (categoryPriority.get(second.primaryCategory) ?? 10)
    );
    const beforeYouFish = resources.filter((resource) => resource.section === "before-you-fish");
    const planYourTrip = resources.filter((resource) => resource.section === "plan-your-trip");

    const buildResourceLinks = (records) => records.map((resource) => {
        const unavailableMarkup = resource.status === "temporarily-unavailable"
            ? '<span class="regulations-resource-status">Temporarily unavailable / limited</span>'
            : "";
        const actionLabel = getRegulationsResourceActionLabel(resource);
        return `
            <a class="regulations-resource-link" href="${resource.url}" target="_blank" rel="noopener noreferrer">
                <span class="regulations-resource-link__content">
                    <span class="regulations-resource-link__title">${resource.title}</span>
                    ${unavailableMarkup}
                </span>
                <span class="regulations-resource-link__action">${actionLabel} <span class="link-arrow link-arrow--external" aria-hidden="true">↗</span></span>
            </a>
        `;
    }).join("");

    const noticesMarkup = config.notices.length > 0 ? `
        <div class="regulations-notices" aria-label="Current official notices">
            ${config.notices.map((notice) => `
                <aside class="detail-section detail-section--safety regulations-notice">
                    <h3>Special Alert</h3>
                    <strong class="regulations-notice__title">${notice.title}</strong>
                    <p>${notice.summary}</p>
                    <a href="${notice.url}" target="_blank" rel="noopener noreferrer">Read official notice <span class="link-arrow link-arrow--external" aria-hidden="true">↗</span></a>
                </aside>
            `).join("")}
        </div>
    ` : "";

    const sectionMarkup = (title, records, sectionClass) => records.length > 0 ? `
        <section class="regulations-resource-section ${sectionClass}" aria-labelledby="${sectionClass}-title">
            <h3 id="${sectionClass}-title">${title}</h3>
            <div class="regulations-resource-card">
                ${buildResourceLinks(records)}
            </div>
        </section>
    ` : "";

    appMain.innerHTML = `
        <article class="content-view regulations-state-view" aria-labelledby="regulations-state-title">
            ${buildPageNavigationMarkup("Regulations")}
            <header class="regulations-state-header">
                <h2 id="regulations-state-title">${config.state.name}</h2>
                <p class="regulations-state-subtitle">Fishing Regulations & Resources</p>
            </header>
            ${noticesMarkup}
            ${sectionMarkup("Before You Fish", beforeYouFish, "regulations-before-you-fish")}
            ${sectionMarkup("Plan Your Trip", planYourTrip, "regulations-plan-your-trip")}
            <footer class="regulations-agency-footer">
                <p class="regulations-agency-attribution">Official resources from <a href="${config.state.agencyUrl}" target="_blank" rel="noopener noreferrer">${config.state.agencyName} <span class="link-arrow link-arrow--external" aria-hidden="true">↗</span></a></p>
            </footer>
        </article>
    `;

    appMain.querySelector("[data-parent-navigation]")?.addEventListener("click", config.onParent);
    initializeHomeNavigation(appMain);
}


/* ==========================================================
   END REGULATIONS — GATEWAY + STATE RENDERING
   ========================================================== */
