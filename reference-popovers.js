/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: reference-popovers.js
   PURPOSE: Extracted owner functions and contracts from approved pre-migration source.
   ========================================================== */

"use strict";

function showReferencePopoverDialog(dialog, triggerElement, closeSelector) {
    const closeDialog = () => {
        if (dialog.open) dialog.close();
    };

    dialog.querySelector(closeSelector)?.addEventListener("click", closeDialog);
    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) closeDialog();
    });
    dialog.addEventListener("close", () => {
        dialog.remove();
        unlockReferencePopoverBackground();
        triggerElement?.focus({ preventScroll: true });
    });

    document.body.append(dialog);
    try {
        lockReferencePopoverBackground();
        dialog.showModal();
    } catch (error) {
        dialog.remove();
        unlockReferencePopoverBackground();
        triggerElement?.focus({ preventScroll: true });
        throw error;
    }
}


/* ==========================================================
   SHARED REFERENCE — LINE TYPE + PAGED REFERENCE POPOVERS
   ========================================================== */

function renderLineTypeReferencePopover(lineTypeId, triggerElement) {
    if (typeof REEL_LINE_TYPE_GUIDANCE === "undefined") {
        console.error("Line Type reference data is not available.");
        return;
    }

    const record = REEL_LINE_TYPE_GUIDANCE[lineTypeId] ?? null;
    if (!record?.id || !record?.title) {
        console.warn(`Line Type reference was not found: ${lineTypeId}`);
        return;
    }

    removeOpenReferencePopovers();

    const dialog = document.createElement("dialog");
    dialog.className = "reference-popover line-type-reference-popover";
    dialog.dataset.lineTypeReferencePopover = "";
    dialog.setAttribute("aria-labelledby", "line-type-reference-title");

    dialog.innerHTML = `
        <div class="reference-popover__shell">
            <header class="reference-popover__header">
                <div class="reference-popover__header-main">
                    <p class="reference-popover__eyebrow">Fishing Line</p>
                    <h2 id="line-type-reference-title">${record.title}</h2>
                </div>
                <button class="reference-popover__close" type="button" data-line-type-reference-close aria-label="Close ${record.title} information">&times;</button>
            </header>
            <div class="reference-popover__body">
                <p class="reference-popover__summary">${record.selectionDescription}</p>
                <section class="reference-popover__section">
                    <h3>How to Recognize It</h3>
                    <p>${record.identificationCue}</p>
                </section>
                <section class="reference-popover__section">
                    <h3>Beginner Guidance</h3>
                    <p>${record.beginnerGuidance}</p>
                </section>
                <section class="reference-popover__section">
                    <h3>Tradeoff</h3>
                    <p>${record.tradeoff}</p>
                </section>
            </div>
        </div>
    `;

    showReferencePopoverDialog(dialog, triggerElement, "[data-line-type-reference-close]");
}


function buildPagedReferenceVisualMarkup(page) {
    if (page?.visualType !== "reel-capacity-diagram") return "";
    return `
        <figure class="reel-reference-diagram" aria-label="Example reel capacity marking">
            <div class="reel-reference-diagram__reel" aria-hidden="true">
                <span class="reel-reference-diagram__capacity">MONO<br>8 lb / 140 yd<br>10 lb / 110 yd</span>
            </div>
            <figcaption>
                Example only: find the capacity marking on your actual spool, reel body, package, manual, or official model specification. Printed order and units vary by manufacturer.
            </figcaption>
        </figure>
    `;
}

function renderPagedReferencePopover({ eyebrow = "Reference", pages = [], initialPageId = null, triggerElement = null } = {}) {
    if (!Array.isArray(pages) || pages.length === 0) {
        console.warn("Paged Reference requires at least one page.");
        return;
    }

    const validPages = pages.filter((page) => page?.id && page?.title);
    if (validPages.length === 0) return;
    removeOpenReferencePopovers();

    const dialog = document.createElement("dialog");
    dialog.className = "reference-popover paged-reference-popover";
    dialog.dataset.pagedReferencePopover = "";
    dialog.setAttribute("aria-labelledby", "paged-reference-title");
    let activeIndex = Math.max(0, validPages.findIndex((page) => page.id === initialPageId));
    const closeDialog = () => {
        if (dialog.open) dialog.close();
    };

    const renderPage = (focusDirection = null) => {
        const page = validPages[activeIndex];
        const listMarkup = Array.isArray(page.items) && page.items.length ? `
            <section class="reference-popover__section">
                <ul>${page.items.map((item) => `<li>${item}</li>`).join("")}</ul>
            </section>
        ` : "";
        const sectionsMarkup = Array.isArray(page.sections) ? page.sections.map((section) => `
            <section class="reference-popover__section">
                <h3>${section.title}</h3>
                <p>${section.text}</p>
            </section>
        `).join("") : "";
        const showPager = validPages.length > 1;

        dialog.innerHTML = `
            <div class="reference-popover__shell paged-reference-popover__shell">
                <header class="reference-popover__header">
                    <div class="reference-popover__header-main">
                        <p class="reference-popover__eyebrow">${eyebrow}</p>
                        <h2 id="paged-reference-title">${page.title}</h2>
                    </div>
                    <button class="reference-popover__close" type="button" data-paged-reference-close aria-label="Close ${eyebrow}">&times;</button>
                </header>
                ${buildPagedReferenceVisualMarkup(page)}
                <div class="reference-popover__body">
                    <p class="reference-popover__summary">${page.summary ?? ""}</p>
                    ${sectionsMarkup}${listMarkup}
                </div>
                ${showPager ? `
                    <nav class="paged-reference-popover__pager" aria-label="${eyebrow} pages">
                        <button type="button" data-paged-reference-previous aria-label="Previous reference page">
                            <span class="link-arrow link-arrow--back" aria-hidden="true">←</span> Prev
                        </button>
                        <span class="paged-reference-popover__position" aria-live="polite">${activeIndex + 1} of ${validPages.length}</span>
                        <button type="button" data-paged-reference-next aria-label="Next reference page">
                            Next <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span>
                        </button>
                    </nav>
                ` : ""}
            </div>
        `;

        dialog.querySelector("[data-paged-reference-close]")?.addEventListener("click", closeDialog);
        dialog.querySelector("[data-paged-reference-previous]")?.addEventListener("click", () => {
            activeIndex = (activeIndex - 1 + validPages.length) % validPages.length;
            renderPage("previous");
        });
        dialog.querySelector("[data-paged-reference-next]")?.addEventListener("click", () => {
            activeIndex = (activeIndex + 1) % validPages.length;
            renderPage("next");
        });

        if (focusDirection === "previous") {
            dialog.querySelector("[data-paged-reference-previous]")?.focus({ preventScroll: true });
        } else if (focusDirection === "next") {
            dialog.querySelector("[data-paged-reference-next]")?.focus({ preventScroll: true });
        }
    };

    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) closeDialog();
    });
    dialog.addEventListener("close", () => {
        dialog.remove();
        unlockReferencePopoverBackground();
        triggerElement?.focus({ preventScroll: true });
    });

    document.body.append(dialog);
    try {
        lockReferencePopoverBackground();
        renderPage();
        dialog.showModal();
        dialog.querySelector("[data-paged-reference-close]")?.focus({ preventScroll: true });
    } catch (error) {
        // Failed rendering must not leave an invisible, scroll-locking dialog.
        dialog.remove();
        unlockReferencePopoverBackground();
        triggerElement?.focus({ preventScroll: true });
        throw error;
    }
}

function initializeLineTypeReferenceLinks(appMain) {
    appMain.querySelectorAll("[data-line-type-reference-id]").forEach((referenceButton) => {
        referenceButton.addEventListener("click", () => {
            renderLineTypeReferencePopover(referenceButton.dataset.lineTypeReferenceId, referenceButton);
        });
    });
}

function getTackleRecord(tackleId) {
    if (!tackleId || typeof TACKLE_DATA === "undefined") return null;
    const record = findRecordById(TACKLE_DATA, tackleId);
    return record?.isActive === true ? record : null;
}

function getLureBaitRecord(lureBaitId) {
    if (!lureBaitId || typeof LURE_BAIT_DATA === "undefined") return null;
    const record = findRecordById(LURE_BAIT_DATA, lureBaitId);
    return record?.isActive === true ? record : null;
}

function getRelatedRigRecords(tackleId) {
    if (!tackleId || typeof RIG_DATA === "undefined") return [];

    return RIG_DATA.filter((rig) => {
        if (rig.isActive !== true) return false;
        const baseMatch = Array.isArray(rig.componentRequirements) &&
            rig.componentRequirements.some((requirement) => requirement.tackleId === tackleId);
        const configurationMatch = Array.isArray(rig.configurations) &&
            rig.configurations.some((configuration) =>
                Array.isArray(configuration.componentRequirements) &&
                configuration.componentRequirements.some((requirement) => requirement.tackleId === tackleId)
            );
        return baseMatch || configurationMatch;
    });
}

function getOwnedReferenceMedia(ownerType, ownerId) {
    if (!ownerType || !ownerId || typeof MEDIA_DATA === "undefined") return null;
    return MEDIA_DATA.find((media) =>
        media.ownerType === ownerType &&
        media.ownerId === ownerId &&
        media.type === "image" &&
        media.isActive === true
    ) ?? null;
}

function getReferenceMedia(referenceRecord) {
    return getOwnedReferenceMedia("tackle", referenceRecord?.id);
}

function getLureBaitReferenceMedia(lureBaitId) {
    return getOwnedReferenceMedia("lure-bait", lureBaitId);
}

function buildReferenceImageMarkup(referenceRecord, className, loading = "lazy") {
    const media = getReferenceMedia(referenceRecord);
    if (!media) return "";
    return `<img class="${className}" src="${media.file}" alt="${media.alt}" loading="${loading}" decoding="async">`;
}

function buildLureBaitReferenceImageMarkup(lureBaitId, className = "reference-popover__image", loading = "eager") {
    const media = getLureBaitReferenceMedia(lureBaitId);
    if (!media) return "";
    return `<img class="${className}" src="${media.file}" alt="${media.alt}" loading="${loading}" decoding="async">`;
}

function formatLureBaitPresentationType(presentationType) {
    return presentationType === "natural-bait" ? "Natural Bait" : "Artificial Lure";
}

function formatLureBaitCategory(category) {
    return String(category ?? "")
        .split("-")
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");
}

function getConditionRecord(conditionId) {
    if (!conditionId || typeof CONDITION_DATA === "undefined") return null;
    const record = findRecordById(CONDITION_DATA, conditionId);
    return record?.isActive === true ? record : null;
}

function formatConditionCategory(category) {
    const labels = {
        "waterbody": "Waterbody",
        "access-position": "Access / Position",
        "depth-zone": "Depth / Zone",
        "cover-exposure": "Cover / Exposure",
        "structure-contour": "Structure / Contour",
        "bottom-substrate": "Bottom / Substrate",
        "water-clarity": "Water Clarity",
        "current": "Current",
        "season": "Season",
        "light-sky": "Light / Sky"
    };
    return labels[category] || category;
}

let referencePopoverScrollY = null;

function lockReferencePopoverBackground() {
    if (document.body.classList.contains("reference-popover-open")) return;
    referencePopoverScrollY = window.scrollY;
    document.body.style.top = `-${referencePopoverScrollY}px`;
    document.body.classList.add("reference-popover-open");
}

function unlockReferencePopoverBackground() {
    if (!document.body.classList.contains("reference-popover-open")) return;
    const restoreY = referencePopoverScrollY ?? 0;
    document.body.classList.remove("reference-popover-open");
    document.body.style.top = "";
    referencePopoverScrollY = null;
    window.scrollTo(0, restoreY);
}

function removeOpenReferencePopovers() {
    document.querySelectorAll([
        "[data-reference-popover]",
        "[data-line-type-reference-popover]",
        "[data-paged-reference-popover]",
        "[data-condition-popover]",
        "[data-fish-habitat-popover]",
        "[data-lure-bait-popover]",
        "[data-technique-popover]"
    ].join(", ")).forEach((dialog) => dialog.remove());
    unlockReferencePopoverBackground();
}

function renderConditionPopover(conditionId, triggerElement) {
    if (typeof CONDITION_DATA === "undefined") {
        console.error("Condition reference data is not available.");
        return;
    }

    const condition = getConditionRecord(conditionId);
    if (!condition) {
        console.warn(`Condition record was not found: ${conditionId}`);
        return;
    }

    removeOpenReferencePopovers();

    const dialog = document.createElement("dialog");
    dialog.className = "reference-popover";
    dialog.dataset.conditionPopover = "";
    dialog.setAttribute("aria-labelledby", "condition-popover-title");
    dialog.innerHTML = `
        <div class="reference-popover__shell">
            <header class="reference-popover__header">
                <div class="reference-popover__header-main">
                    <p class="reference-popover__eyebrow">${formatConditionCategory(condition.category)}</p>
                    <h2 id="condition-popover-title">${condition.name}</h2>
                </div>
                <button class="reference-popover__close" type="button" data-condition-close aria-label="Close ${condition.name} information">&times;</button>
            </header>
            <div class="reference-popover__body">
                <p class="reference-popover__summary">${condition.summary}</p>
            </div>
        </div>
    `;

    showReferencePopoverDialog(dialog, triggerElement, "[data-condition-close]");
}

function initializeConditionLinks(appMain) {
    appMain.querySelectorAll("[data-condition-id]").forEach((conditionLink) => {
        conditionLink.addEventListener("click", () => {
            renderConditionPopover(conditionLink.dataset.conditionId, conditionLink);
        });
    });
}

function getTechniqueRecord(techniqueId) {
    if (!techniqueId || typeof TECHNIQUE_DATA === "undefined") return null;
    const record = findRecordById(TECHNIQUE_DATA, techniqueId);
    return record?.isActive === true ? record : null;
}

function getActiveCompatibilityRelationships(relationshipType) {
    if (typeof COMPATIBILITY_RELATIONSHIPS === "undefined") return [];
    return COMPATIBILITY_RELATIONSHIPS.filter((relationship) =>
        relationship?.isActive === true && relationship.relationshipType === relationshipType
    );
}

function getCompatibleTargetIds(relationshipType, sourceType, sourceId, targetType) {
    return getActiveCompatibilityRelationships(relationshipType)
        .filter((relationship) =>
            relationship.sourceType === sourceType &&
            relationship.sourceId === sourceId &&
            relationship.targetType === targetType
        )
        .map((relationship) => relationship.targetId);
}

function getRigTechniqueRecords(rigId, lureBaitId = null) {
    const rigTechniqueIds = getCompatibleTargetIds("rig-technique", "rig", rigId, "technique");
    const techniqueIds = rigId === "direct-tie-lure-setup" && lureBaitId
        ? (() => {
            const lureTechniqueIds = new Set(
                getCompatibleTargetIds("lure-bait-technique", "lure-bait", lureBaitId, "technique")
            );
            return rigTechniqueIds.filter((techniqueId) => lureTechniqueIds.has(techniqueId));
        })()
        : rigTechniqueIds;

    return techniqueIds
        .map((techniqueId) => getTechniqueRecord(techniqueId))
        .filter(Boolean);
}

function renderTechniquePopover(techniqueId, triggerElement) {
    const technique = getTechniqueRecord(techniqueId);
    if (!technique) {
        console.warn(`Technique record was not found: ${techniqueId}`);
        return;
    }

    removeOpenReferencePopovers();

    const buildListSection = (title, items, ordered = false) => {
        if (!Array.isArray(items) || items.length === 0) return "";
        const tag = ordered ? "ol" : "ul";
        const className = ordered ? "detail-steps" : "detail-list";
        return `
            <section class="reference-popover__section">
                <h3>${title}</h3>
                <${tag} class="${className}">${items.map((item) => `<li>${item}</li>`).join("")}</${tag}>
            </section>
        `;
    };

    const dialog = document.createElement("dialog");
    dialog.className = "reference-popover";
    dialog.dataset.techniquePopover = "";
    dialog.setAttribute("aria-labelledby", "technique-popover-title");
    dialog.innerHTML = `
        <div class="reference-popover__shell">
            <header class="reference-popover__header">
                <div class="reference-popover__header-main">
                    <p class="reference-popover__eyebrow">Technique</p>
                    <h2 id="technique-popover-title">${technique.name}</h2>
                </div>
                <button class="reference-popover__close" type="button" data-technique-close aria-label="Close ${technique.name} information">&times;</button>
            </header>
            <div class="reference-popover__body">
                <p class="reference-popover__summary">${technique.summary}</p>
                ${buildListSection("How to Present", technique.presentationSteps, true)}
                ${buildListSection("Strike Cues", technique.strikeCues)}
                ${buildListSection("Common Mistakes", technique.commonMistakes)}
                ${buildListSection("Beginner Tips", technique.beginnerTips)}
            </div>
        </div>
    `;

    showReferencePopoverDialog(dialog, triggerElement, "[data-technique-close]");
}

function initializeTechniqueLinks(appMain) {
    appMain.querySelectorAll("[data-technique-id]").forEach((techniqueLink) => {
        techniqueLink.addEventListener("click", () => {
            renderTechniquePopover(techniqueLink.dataset.techniqueId, techniqueLink);
        });
    });
}


function renderLureBaitReferencePopover(lureBaitId, triggerElement, requirement = null) {
    const lureBaitRecord = getLureBaitRecord(lureBaitId);
    if (!lureBaitRecord) {
        console.warn(`Canonical Lure/Bait record was not found: ${lureBaitId}`);
        return;
    }

    removeOpenReferencePopovers();

    const dialog = document.createElement("dialog");
    dialog.className = "reference-popover";
    dialog.dataset.lureBaitPopover = "";
    dialog.setAttribute("aria-labelledby", "lure-bait-popover-title");

    const mediaMarkup = buildLureBaitReferenceImageMarkup(lureBaitId);
    const requirementMarkup = requirement?.notes ? `
        <section class="reference-popover__section">
            <h3>For This Rig</h3>
            <p>${requirement.notes}</p>
        </section>
    ` : "";

    dialog.innerHTML = `
        <div class="reference-popover__shell">
            <header class="reference-popover__header">
                <div class="reference-popover__header-main">
                    <p class="reference-popover__eyebrow">Lure / Bait</p>
                    <h2 id="lure-bait-popover-title">${lureBaitRecord.name}</h2>
                </div>
                <button class="reference-popover__close" type="button" data-lure-bait-close aria-label="Close ${lureBaitRecord.name} information">&times;</button>
            </header>
            ${mediaMarkup}
            <div class="reference-popover__body">
                <p class="reference-popover__summary">${lureBaitRecord.summary}</p>
                <section class="reference-popover__section">
                    <h3>Type</h3>
                    <p>${formatLureBaitPresentationType(lureBaitRecord.presentationType)}</p>
                </section>
                <section class="reference-popover__section">
                    <h3>Category</h3>
                    <p>${formatLureBaitCategory(lureBaitRecord.category)}</p>
                </section>
                ${requirementMarkup}
            </div>
        </div>
    `;

    showReferencePopoverDialog(dialog, triggerElement, "[data-lure-bait-close]");
}

function initializeLureBaitReferenceLinks(appMain, lureBaitRequirements = []) {
    const requirementsById = new Map(
        lureBaitRequirements.map((requirement) => [requirement.lureBaitId, requirement])
    );
    appMain.querySelectorAll("[data-lure-bait-reference-id]").forEach((referenceLink) => {
        referenceLink.addEventListener("click", () => {
            const lureBaitId = referenceLink.dataset.lureBaitReferenceId;
            renderLureBaitReferencePopover(lureBaitId, referenceLink, requirementsById.get(lureBaitId));
        });
    });
}

function renderReferencePopover(referenceId, triggerElement, options = {}) {
    if (typeof TACKLE_DATA === "undefined") {
        console.error("Tackle reference data is not available.");
        return;
    }

    const initialReference = findRecordById(TACKLE_DATA, referenceId);
    if (!initialReference || initialReference.isActive !== true) {
        console.warn(`Reference record was not found: ${referenceId}`);
        return;
    }

    removeOpenReferencePopovers();

    const dialog = document.createElement("dialog");
    dialog.className = "reference-popover";
    dialog.dataset.referencePopover = "";
    dialog.setAttribute("aria-labelledby", "reference-popover-title");

    const referenceHistory = [];
    let activeReferenceId = referenceId;
    let isNavigatingAway = false;

    const closeDialog = () => {
        if (dialog.open) dialog.close();
    };

    const renderReferenceContent = (nextReferenceId, pushCurrent = false) => {
        const referenceRecord = findRecordById(TACKLE_DATA, nextReferenceId);
        if (!referenceRecord || referenceRecord.isActive !== true) {
            console.warn(`Reference record was not found: ${nextReferenceId}`);
            return;
        }

        if (pushCurrent && activeReferenceId && activeReferenceId !== nextReferenceId) {
            referenceHistory.push(activeReferenceId);
        }
        activeReferenceId = nextReferenceId;

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

        const relatedRigs = getRelatedRigRecords(referenceRecord.id);
        const rigsMarkup = relatedRigs.length ? `
            <section class="reference-popover__section reference-popover__section--related">
                <h3>Used In</h3>
                <div class="compact-link-list compact-link-list--divided reference-popover__link-list">
                    ${relatedRigs.map((rig) => `
                        <button class="compact-link-row" type="button" data-reference-rig-id="${rig.id}">
                            <span class="compact-link-row__label">${rig.name}</span>
                            <span class="compact-link-row__action">View Rig <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></span>
                        </button>
                    `).join("")}
                </div>
            </section>
        ` : "";

        const relatedTackleMarkup = referenceRecord.relatedTackleIds?.length ? `
            <section class="reference-popover__section reference-popover__section--related">
                <h3>Related Components</h3>
                <div class="compact-link-list compact-link-list--divided reference-popover__link-list">
                    ${referenceRecord.relatedTackleIds.map((relatedId) => {
                        const related = findRecordById(TACKLE_DATA, relatedId);
                        if (!related || related.isActive !== true) return "";
                        return `
                            <button class="compact-link-row" type="button" data-related-reference-id="${related.id}">
                                <span class="compact-link-row__label">${related.name}</span>
                                <span class="compact-link-row__action">View Component <span class="link-arrow link-arrow--internal" aria-hidden="true">→</span></span>
                            </button>
                        `;
                    }).join("")}
                </div>
            </section>
        ` : "";

        const previousReference = referenceHistory.length
            ? findRecordById(TACKLE_DATA, referenceHistory[referenceHistory.length - 1])
            : null;
        const backMarkup = previousReference
            ? `<button class="reference-popover__back" type="button" data-reference-back><span class="link-arrow link-arrow--back" aria-hidden="true">&larr;</span> Back to ${previousReference.name}</button>`
            : "";

        dialog.innerHTML = `
            <div class="reference-popover__shell">
                <header class="reference-popover__header">
                    <div class="reference-popover__header-main">
                        ${backMarkup}
                        <p class="reference-popover__eyebrow">${referenceRecord.category}</p>
                        <h2 id="reference-popover-title">${referenceRecord.name}</h2>
                    </div>
                    <button class="reference-popover__close" type="button" data-reference-close aria-label="Close ${referenceRecord.name} information">&times;</button>
                </header>
                ${buildReferenceImageMarkup(referenceRecord, "reference-popover__image", "eager")}
                <div class="reference-popover__body">
                    <p class="reference-popover__summary">${referenceRecord.summary}</p>
                    <section class="reference-popover__section"><h3>What It Does</h3><p>${referenceRecord.purpose}</p></section>
                    ${aliasesMarkup}${recognitionMarkup}${variantsMarkup}${relatedTackleMarkup}${rigsMarkup}
                </div>
            </div>
        `;

        dialog.querySelector("[data-reference-close]")?.addEventListener("click", closeDialog);
        dialog.querySelector("[data-reference-back]")?.addEventListener("click", () => {
            const previousReferenceId = referenceHistory.pop();
            if (previousReferenceId) {
                renderReferenceContent(previousReferenceId, false);
                (dialog.querySelector("[data-reference-back]") ?? dialog.querySelector("[data-reference-close]"))?.focus({ preventScroll: true });
            }
        });
        dialog.querySelectorAll("[data-related-reference-id]").forEach((relatedButton) => {
            relatedButton.addEventListener("click", () => {
                renderReferenceContent(relatedButton.dataset.relatedReferenceId, true);
                (dialog.querySelector("[data-reference-back]") ?? dialog.querySelector("[data-reference-close]"))?.focus({ preventScroll: true });
            });
        });
        dialog.querySelectorAll("[data-reference-rig-id]").forEach((rigButton) => {
            rigButton.addEventListener("click", () => {
                const nextRigId = rigButton.dataset.referenceRigId;
                const originScrollY = Number.isFinite(referencePopoverScrollY)
                    ? referencePopoverScrollY : window.scrollY;
                const sourceReferenceId = triggerElement?.dataset.referenceId ?? activeReferenceId;
                isNavigatingAway = true;
                referenceHistory.length = 0;
                closeDialog();
                options.onRigSelect?.(nextRigId, { sourceReferenceId, originScrollY });
            });
        });
    };

    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) closeDialog();
    });
    dialog.addEventListener("close", () => {
        dialog.remove();
        unlockReferencePopoverBackground();
        if (!isNavigatingAway) triggerElement?.focus({ preventScroll: true });
    });

    document.body.append(dialog);
    try {
        renderReferenceContent(referenceId, false);
        lockReferencePopoverBackground();
        dialog.showModal();
    } catch (error) {
        dialog.remove();
        unlockReferencePopoverBackground();
        triggerElement?.focus({ preventScroll: true });
        throw error;
    }
}

function initializeReferenceLinks(appMain, options = {}) {
    appMain.querySelectorAll("[data-reference-id]").forEach((referenceLink) => {
        referenceLink.addEventListener("click", () => {
            renderReferencePopover(referenceLink.dataset.referenceId, referenceLink, options);
        });
    });
}
