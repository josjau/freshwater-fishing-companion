/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: knot-media-renderer.js
   PURPOSE: Renders verified external instructional media for
   canonical Knot detail pages.
   ========================================================== */

"use strict";

const KNOT_MEDIA_RENDERER_BUILD_INFO = Object.freeze({
    file: "knot-media-renderer.js",
    milestone: "Knot Guide — Instructional Media Rendering"
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
    const typeLabel = getKnotMediaTypeLabel(media.type);

    return `
        <aside class="knot-instruction-media" aria-label="Visual Guide">
            <p class="knot-instruction-media__title">Visual Guide</p>
            <span class="knot-instruction-media__type">${typeLabel}</span>
            <p class="knot-instruction-media__description">Visual instruction from <strong>${provider}</strong>.</p>
            <a
                class="knot-instruction-media__link"
                href="${media.externalUrl}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="${actionLabel}: ${title}"
            >
                <span>${actionLabel}</span>
                <span class="link-arrow link-arrow--external" aria-hidden="true">↗</span>
            </a>
        </aside>
    `;
}

function getKnotMediaTypeLabel(type) {
    if (type === "external-animation") return "Animation";
    if (type === "external-diagram") return "Diagram";
    if (type === "external-3d-instruction") return "Interactive 3D";
    return "Visual Guide";
}

console.info(
    `[Loaded] ${KNOT_MEDIA_RENDERER_BUILD_INFO.file} | ` +
    `${KNOT_MEDIA_RENDERER_BUILD_INFO.milestone}`
);
