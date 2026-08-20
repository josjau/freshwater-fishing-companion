# Freshwater Fishing Companion

**Document:** REPOSITORY-AUDIT-SECTION-9-UX-NAVIGATION-CLEANUP.md  
**Document Status:** Complete  
**Date:** 2026-08-19  
**Parent Audit:** `REPOSITORY-AUDIT-CLEANUP.md`

# Purpose

Record the approved Section 9 cleanup of completed UX/navigation workstreams and the promotion of durable floating-navigation rules into governing documentation.

# Governing Promotion

`docs/NAVIGATION-PAGE-STANDARD.md` revision 1.0.6 is now self-contained for the site-wide floating-navigation standard.

Promoted durable rules include:

- shared `.page-navigation-group` floating container;
- sticky/background/border/padding/rounded/shadow/backdrop/responsive treatment;
- `buildPageNavigationMarkup()` as the shared renderer path when practical;
- Root views use one non-duplicative Home control;
- Nested standard views use Parent + Home;
- specialized workflows may use dedicated controls but should share the floating visual treatment and avoid nested floating shells;
- Forward opens a new destination at the top;
- Parent restores the immediately preceding standard application view, applicable UI state, and prior scroll position;
- Home opens Dashboard at the top and clears contextual return state;
- saved scroll state never transfers to a newly opened destination.

The earlier Parent-to-top runtime behavior in historical workstreams is explicitly superseded and is not governing.

The governing Navigation Page Standard also no longer depends on already archived Knot implementation workstreams as current authorities.

# Archived Records

The following five records were moved byte-for-byte to `archive/workstreams/ux/` using their original Git blob SHAs:

- `CONNECTED-KNOWLEDGE-NAVIGATION-AND-DASHBOARD-IA.md`
- `SITE-WIDE-FLOATING-NAVIGATION-STANDARD.md`
- `RIG-UX-RUNTIME-FOLLOWUP.md`
- `UX-REPAIRS.md`
- `UX-REPAIRS-VALIDATION.md`

Their original `docs/workstreams/` paths were removed.

# Integrity

Archive commit: `85560ede665b348b4758d5ae11fd5fda11201087`.

No production source, data, CSS, JavaScript, media, or runtime behavior changed in this cleanup block.

# Status

**PASS — UX/navigation workstream cleanup complete.**

Section 9 remains open for the remaining non-UX workstream families and final documentation synchronization.
