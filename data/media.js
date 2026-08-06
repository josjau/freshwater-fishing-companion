/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: data/media.js
   REPLACEMENT: MS2.6 - REFERENCE MEDIA CATALOG
   PURPOSE: Owns stable media records, local asset paths,
   accessibility text, licensing, and replacement status.
   ========================================================== */

"use strict";

const MEDIA_DATA_BUILD_INFO = Object.freeze({
    file: "data/media.js",
    milestone: "MS2.6",
    replacement: "Reference Media Catalog"
});

const MEDIA_DATA = Object.freeze([
    "fixed-bobber",
    "split-shot",
    "hook",
    "bait",
    "bobber-stop",
    "stop-bead",
    "slip-float",
    "sliding-sinker",
    "bead",
    "barrel-swivel",
    "leader-line",
    "bullet-weight",
    "offset-worm-hook",
    "soft-plastic",
    "weight-peg"
].map((tackleId) => Object.freeze({
    id: `${tackleId}-reference`,
    ownerType: "tackle",
    ownerId: tackleId,
    type: "image",
    file: `images/tackle/${tackleId}-reference.webp`,
    alt: `Reference image for ${tackleId.replaceAll("-", " ")}`,
    caption: "Reference image",
    license: Object.freeze({
        status: "Pending acquisition",
        type: null,
        creator: null,
        sourceUrl: null,
        licenseUrl: null,
        attributionRequired: null,
        commercialUseAllowed: null,
        modificationAllowed: null,
        reviewedDate: null
    }),
    replacementStatus: "Acquire initial reference asset",
    createdVersion: "0.2.6",
    lastModifiedVersion: "0.2.6",
    isActive: false
})));

console.info(
    `[Loaded] ${MEDIA_DATA_BUILD_INFO.file} | ` +
    `${MEDIA_DATA_BUILD_INFO.milestone} | ` +
    `${MEDIA_DATA_BUILD_INFO.replacement} | ` +
    `${MEDIA_DATA.length} records`
);

