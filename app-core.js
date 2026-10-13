/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: app-core.js
   PURPOSE: Owns application routes, explicit route/provider
   registration, and cross-Guide return-context orchestration.
   Guide-private state and rendering remain provider-owned.
   ========================================================== */

"use strict";

const FCC_APP = (() => {
    const ROUTES = Object.freeze({
        DASHBOARD: "dashboard",
        FISH: "fish",
        FISH_BROWSE: "fish-browse",
        FISH_DETAIL: "fish-detail",
        FISH_COMPARE_CATALOG: "fish-compare-catalog",
        FISH_COMPARE_CHOOSER: "fish-compare-chooser",
        FISH_COMPARE: "fish-compare",
        RIGS: "rigs",
        RIG_BROWSE: "rig-browse",
        RIG_DETAIL: "rig-detail",
        RECOMMENDATIONS: "recommendations",
        REGULATIONS: "regulations",
        REGULATIONS_STATE: "regulations-state",
        TACKLE: "tackle",
        KNOTS: "knots",
        KNOT_BROWSE: "knot-browse",
        KNOT_DETAIL: "knot-detail",
        REEL_SETUP: "reel-setup",
        CATCH_LOG: "catch-log",
        FAVORITES: "favorites",
        SETTINGS: "settings"
    });

    const knownRoutes = new Set(Object.values(ROUTES));
    const routeProviders = new Map();
    const providerIds = new Set();
    const navigationStack = [];
    let currentRoute = ROUTES.DASHBOARD;

    function requireKnownRoute(route) {
        if (typeof route !== "string" || !knownRoutes.has(route)) {
            throw new TypeError(`Unknown application route: ${String(route)}`);
        }
        return route;
    }

    function registerProvider(providerId, routeDefinitions) {
        if (typeof providerId !== "string" || !/^[a-z][a-z0-9-]+$/.test(providerId)) {
            throw new TypeError("A unique canonical provider ID is required.");
        }
        if (providerIds.has(providerId)) {
            throw new Error(`Duplicate application provider: ${providerId}`);
        }
        if (!routeDefinitions || typeof routeDefinitions !== "object" || Array.isArray(routeDefinitions)) {
            throw new TypeError("Route provider definitions must be an object.");
        }

        const entries = Object.entries(routeDefinitions);
        if (entries.length === 0) {
            throw new TypeError("A route provider must declare at least one route.");
        }

        // Validate everything before publishing any route; registration is atomic.
        for (const [route, entry] of entries) {
            requireKnownRoute(route);
            if (routeProviders.has(route)) {
                throw new Error(`Duplicate route registration: ${route}`);
            }
            if (!entry || typeof entry !== "object" || Array.isArray(entry)
                    || typeof entry.render !== "function"
                    || (entry.restore !== undefined && typeof entry.restore !== "function")) {
                throw new TypeError(`Invalid route provider contract: ${route}`);
            }
        }

        providerIds.add(providerId);
        for (const [route, entry] of entries) {
            routeProviders.set(route, Object.freeze({
                owner: providerId,
                render: entry.render,
                restore: entry.restore ?? null
            }));
        }
    }

    function hasRoute(route) {
        return knownRoutes.has(route) && routeProviders.has(route);
    }

    function renderRoute(route, appMain) {
        requireKnownRoute(route);
        const provider = routeProviders.get(route);
        if (!provider) {
            throw new Error(`Unregistered application route: ${route}`);
        }
        if (!appMain) {
            throw new TypeError("The application main element is required.");
        }
        const previousRoute = currentRoute;
        currentRoute = route;
        try {
            provider.render(appMain);
        } catch (error) {
            currentRoute = previousRoute;
            throw error;
        }
        return true;
    }

    function pushNavigationContext(context) {
        if (!context || !hasRoute(context.route) || typeof context.label !== "string"
                || context.label.trim() === "" || !context.state
                || typeof context.state !== "object" || Array.isArray(context.state)) {
            return false;
        }
        navigationStack.push({
            route: context.route,
            label: context.label,
            state: context.state
        });
        return true;
    }

    function peekNavigationContext() {
        return navigationStack.length ? navigationStack[navigationStack.length - 1] : null;
    }

    function restorePreviousNavigationContext() {
        const context = peekNavigationContext();
        if (!context) return null;
        const provider = routeProviders.get(context.route);
        if (!provider || typeof provider.restore !== "function") {
            throw new Error(`No return-state provider is registered for: ${context.route}`);
        }
        // Do not discard the return entry if its owner cannot restore it.
        provider.restore(context.state);
        navigationStack.pop();
        return context.route;
    }

    function clearNavigationContext() {
        navigationStack.length = 0;
    }

    function getRouteOwner(route) {
        requireKnownRoute(route);
        return routeProviders.get(route)?.owner ?? null;
    }

    return Object.freeze({
        ROUTES,
        registerProvider,
        hasRoute,
        renderRoute,
        pushNavigationContext,
        peekNavigationContext,
        restorePreviousNavigationContext,
        clearNavigationContext,
        getRouteOwner,
        getCurrentRoute: () => currentRoute
    });
})();

console.info("[Loaded] app-core.js | Shared Application Registry");
