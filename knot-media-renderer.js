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
        <div class="knot-instruction-media rig-tutorial" aria-label="Visual Guide">
            <div class="knot-instruction-media__heading rig-tutorial__meta">
                <span class="knot-instruction-media__type rig-tutorial__media-type">${typeLabel}</span>
                <p class="knot-instruction-media__title rig-tutorial__title">Visual Guide</p>
            </div>
            <a
                class="knot-instruction-media__link rig-tutorial__external"
                href="${media.externalUrl}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="${actionLabel}: ${title}"
            >
                <span class="reference-source-name">${provider}</span>
                <span class="reference-source-action">Visit Site <span class="link-arrow link-arrow--external" aria-hidden="true">↗</span></span>
            </a>
        </div>
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
