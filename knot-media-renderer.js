/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: knot-media-renderer.js
   PURPOSE: Adds verified external instructional media to
   canonical Knot detail pages.
   ========================================================== */

"use strict";

const KNOT_MEDIA_RENDERER_BUILD_INFO = Object.freeze({
    file: "knot-media-renderer.js",
    milestone: "Knot Guide — Production Package 4"
});

function getKnotInstructionMedia(knotId) {
    if (!knotId || typeof MEDIA_DATA === "undefined") return null;

    return MEDIA_DATA.find((media) =>
        media.ownerType === "knot" &&
        media.ownerId === knotId &&
        media.isActive === true &&
        typeof media.externalUrl === "string" &&
        media.externalUrl.length > 0
    ) ?? null;
}

function buildKnotInstructionMediaMarkup(record) {
    const media = getKnotInstructionMedia(record?.id);
    if (!media) return "";

    const provider = media.provider || "Verified external source";
    const title = media.title || `${record.name} visual instructions`;
    const actionLabel = media.actionLabel || "View visual instructions";

    return `
        <section class="detail-section knot-media-section" aria-labelledby="knot-media-title">
            <div class="knot-media-section__header">
                <div>
                    <p class="knot-media-section__eyebrow">Visual Guide</p>
                    <h3 id="knot-media-title">${title}</h3>
                    <p>Verified external instruction from ${provider}. Use the numbered steps on this page as the primary tying method.</p>
                </div>
                <span class="knot-media-section__type">${getKnotMediaTypeLabel(media.type)}</span>
            </div>
            <a class="knot-media-link" href="${media.externalUrl}" target="_blank" rel="noopener noreferrer">
                <span>${actionLabel}</span>
                <span aria-hidden="true">↗</span>
            </a>
        </section>
    `;
}

function getKnotMediaTypeLabel(type) {
    if (type === "external-animation") return "Animation";
    if (type === "external-diagram") return "Diagram";
    if (type === "external-3d-instruction") return "Interactive 3D";
    return "Visual instructions";
}

const renderKnotInstructionDetailWithoutMedia = renderKnotInstructionDetail;

renderKnotInstructionDetail = function renderKnotInstructionDetailWithMedia(appMain, detailConfig) {
    renderKnotInstructionDetailWithoutMedia(appMain, detailConfig);

    const record = detailConfig?.record;
    const tyingSection = appMain?.querySelector(".knot-tying-section");
    if (!record || !tyingSection) return;

    const mediaMarkup = buildKnotInstructionMediaMarkup(record);
    if (!mediaMarkup) return;

    tyingSection.insertAdjacentHTML("beforebegin", mediaMarkup);
};

console.info(
    `[Loaded] ${KNOT_MEDIA_RENDERER_BUILD_INFO.file} | ` +
    `${KNOT_MEDIA_RENDERER_BUILD_INFO.milestone}`
);
