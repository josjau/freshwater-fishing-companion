/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: features/regulations-controller.js
   PURPOSE: Extracted owner functions and contracts from approved pre-migration source.
   ========================================================== */

"use strict";

let selectedRegulationStateId = null;
let regulationsGatewayState = { query: "" };

/* ==========================================================
   REGULATIONS — STATE + ROUTE CONTROLLERS
   ========================================================== */

function getActiveRegulationStates() {
    if (typeof STATE_DATA === "undefined") return [];
    return STATE_DATA
        .filter((state) => state.active === true)
        .slice()
        .sort((first, second) => first.name.localeCompare(second.name, undefined, { sensitivity: "base" }));
}

function getRegulationState(stateId) {
    if (typeof STATE_DATA === "undefined") return null;
    return STATE_DATA.find((state) => state.id === stateId && state.active === true) ?? null;
}

function getRegulationStateResources(stateId) {
    if (typeof STATE_RESOURCE_DATA === "undefined") return [];
    return STATE_RESOURCE_DATA.filter((resource) =>
        resource.stateId === stateId && resource.status !== "retired"
    );
}

function getRegulationStateNotices(stateId) {
    if (typeof STATE_NOTICE_DATA === "undefined") return [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return STATE_NOTICE_DATA.filter((notice) => {
        if (notice.stateId !== stateId || notice.active !== true) return false;
        if (!notice.expiresDate) return true;
        const expires = new Date(`${notice.expiresDate}T00:00:00`);
        return Number.isNaN(expires.getTime()) || expires >= today;
    });
}

function openRegulationState(stateId) {
    if (!getRegulationState(stateId)) return;
    selectedRegulationStateId = stateId;
    showView(ROUTES.REGULATIONS_STATE);
}

function renderRegulationsGatewayRoute(appMain) {
    const states = getActiveRegulationStates();
    const returnContext = peekDetailNavigationContext();
    if (!selectedRegulationStateId || !states.some((state) => state.id === selectedRegulationStateId)) {
        selectedRegulationStateId = states[0]?.id ?? null;
    }

    renderRegulationsGatewayView(appMain, {
        states,
        selectedStateId: selectedRegulationStateId,
        initialQuery: regulationsGatewayState.query,
        parentLabel: returnContext?.route === ROUTES.FISH_DETAIL ? returnContext.label : null,
        onParent: returnContext?.route === ROUTES.FISH_DETAIL ? returnToDetailNavigationContext : null,
        onQueryChange: (query) => {
            regulationsGatewayState.query = query;
        },
        onSelectionChange: (stateId) => {
            selectedRegulationStateId = stateId;
        },
        onStateOpen: openRegulationState
    });
}

function renderRegulationsStateRoute(appMain) {
    const state = getRegulationState(selectedRegulationStateId);
    if (!state) {
        showView(ROUTES.REGULATIONS);
        return;
    }

    renderRegulationsStateView(appMain, {
        state,
        resources: getRegulationStateResources(state.id),
        notices: getRegulationStateNotices(state.id),
        onParent: () => showView(ROUTES.REGULATIONS)
    });
}

/* ==========================================================
   END REGULATIONS — STATE + ROUTE CONTROLLERS
   ========================================================== */



/* Explicit owner route contract. Registration is performed once at startup. */
function registerRegulationsRoutes() {
    FCC_APP.registerProvider("regulations", {
        [ROUTES.REGULATIONS]: { render: renderRegulationsGatewayRoute },
        [ROUTES.REGULATIONS_STATE]: { render: renderRegulationsStateRoute }
    });
}

function resetRegulationsForHome() {
    selectedRegulationStateId = null;
    regulationsGatewayState = { query: "" };
}
