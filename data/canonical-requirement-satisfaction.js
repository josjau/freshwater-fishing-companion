/* ==========================================================
   FRESHWATER FISHING COMPANION
   FILE: data/canonical-requirement-satisfaction.js
   PURPOSE: Owns deterministic Layer-1 Canonical Requirement
   Satisfaction relationships used by availability matching.
   ========================================================== */

"use strict";

const CANONICAL_REQUIREMENT_SATISFACTION_DATA_BUILD_INFO = Object.freeze({
    file: "data/canonical-requirement-satisfaction.js",
    milestone: "GATE-007 — My Tackle Availability Foundation"
});

const CANONICAL_REQUIREMENT_SATISFACTION_RELATIONSHIPS = Object.freeze([
    {
        id: "canonical-requirement-satisfaction-lure-bait-craw-to-tackle-soft-plastic",
        relationshipType: "canonical-requirement-satisfaction",
        sourceType: "lure-bait",
        sourceId: "craw",
        targetType: "tackle",
        targetId: "soft-plastic",
        qualification: null,
        createdVersion: "0.7.0",
        lastModifiedVersion: "0.7.0",
        isActive: true
    },
    {
        id: "canonical-requirement-satisfaction-lure-bait-creature-bait-to-tackle-soft-plastic",
        relationshipType: "canonical-requirement-satisfaction",
        sourceType: "lure-bait",
        sourceId: "creature-bait",
        targetType: "tackle",
        targetId: "soft-plastic",
        qualification: null,
        createdVersion: "0.7.0",
        lastModifiedVersion: "0.7.0",
        isActive: true
    },
    {
        id: "canonical-requirement-satisfaction-lure-bait-cricket-to-tackle-bait",
        relationshipType: "canonical-requirement-satisfaction",
        sourceType: "lure-bait",
        sourceId: "cricket",
        targetType: "tackle",
        targetId: "bait",
        qualification: null,
        createdVersion: "0.7.0",
        lastModifiedVersion: "0.7.0",
        isActive: true
    },
    {
        id: "canonical-requirement-satisfaction-lure-bait-minnow-to-tackle-bait",
        relationshipType: "canonical-requirement-satisfaction",
        sourceType: "lure-bait",
        sourceId: "minnow",
        targetType: "tackle",
        targetId: "bait",
        qualification: null,
        createdVersion: "0.7.0",
        lastModifiedVersion: "0.7.0",
        isActive: true
    },
    {
        id: "canonical-requirement-satisfaction-lure-bait-nightcrawler-to-tackle-bait",
        relationshipType: "canonical-requirement-satisfaction",
        sourceType: "lure-bait",
        sourceId: "nightcrawler",
        targetType: "tackle",
        targetId: "bait",
        qualification: null,
        createdVersion: "0.7.0",
        lastModifiedVersion: "0.7.0",
        isActive: true
    },
    {
        id: "canonical-requirement-satisfaction-lure-bait-paddle-tail-swimbait-to-tackle-soft-plastic",
        relationshipType: "canonical-requirement-satisfaction",
        sourceType: "lure-bait",
        sourceId: "paddle-tail-swimbait",
        targetType: "tackle",
        targetId: "soft-plastic",
        qualification: null,
        createdVersion: "0.7.0",
        lastModifiedVersion: "0.7.0",
        isActive: true
    },
    {
        id: "canonical-requirement-satisfaction-lure-bait-stick-worm-to-tackle-soft-plastic",
        relationshipType: "canonical-requirement-satisfaction",
        sourceType: "lure-bait",
        sourceId: "stick-worm",
        targetType: "tackle",
        targetId: "soft-plastic",
        qualification: null,
        createdVersion: "0.7.0",
        lastModifiedVersion: "0.7.0",
        isActive: true
    },
    {
        id: "canonical-requirement-satisfaction-lure-bait-tube-to-tackle-soft-plastic",
        relationshipType: "canonical-requirement-satisfaction",
        sourceType: "lure-bait",
        sourceId: "tube",
        targetType: "tackle",
        targetId: "soft-plastic",
        qualification: null,
        createdVersion: "0.7.0",
        lastModifiedVersion: "0.7.0",
        isActive: true
    },
    {
        id: "canonical-requirement-satisfaction-tackle-fixed-bobber-to-tackle-slip-float",
        relationshipType: "canonical-requirement-satisfaction",
        sourceType: "tackle",
        sourceId: "fixed-bobber",
        targetType: "tackle",
        targetId: "slip-float",
        qualification: Object.freeze({
            type: "item-family-characteristic-equals",
            itemFamily: "float",
            characteristic: "operating-mode",
            value: "convertible-fixed-or-slip"
        }),
        createdVersion: "0.7.0",
        lastModifiedVersion: "0.7.0",
        isActive: true
    },
    {
        id: "canonical-requirement-satisfaction-tackle-ned-jighead-to-tackle-jighead",
        relationshipType: "canonical-requirement-satisfaction",
        sourceType: "tackle",
        sourceId: "ned-jighead",
        targetType: "tackle",
        targetId: "jighead",
        qualification: null,
        createdVersion: "0.7.0",
        lastModifiedVersion: "0.7.0",
        isActive: true
    },
    {
        id: "canonical-requirement-satisfaction-tackle-shaky-head-jighead-to-tackle-jighead",
        relationshipType: "canonical-requirement-satisfaction",
        sourceType: "tackle",
        sourceId: "shaky-head-jighead",
        targetType: "tackle",
        targetId: "jighead",
        qualification: null,
        createdVersion: "0.7.0",
        lastModifiedVersion: "0.7.0",
        isActive: true
    },
    {
        id: "canonical-requirement-satisfaction-tackle-slip-float-to-tackle-fixed-bobber",
        relationshipType: "canonical-requirement-satisfaction",
        sourceType: "tackle",
        sourceId: "slip-float",
        targetType: "tackle",
        targetId: "fixed-bobber",
        qualification: Object.freeze({
            type: "item-family-characteristic-equals",
            itemFamily: "float",
            characteristic: "operating-mode",
            value: "convertible-fixed-or-slip"
        }),
        createdVersion: "0.7.0",
        lastModifiedVersion: "0.7.0",
        isActive: true
    },
    {
        id: "canonical-requirement-satisfaction-tackle-tube-jighead-to-tackle-jighead",
        relationshipType: "canonical-requirement-satisfaction",
        sourceType: "tackle",
        sourceId: "tube-jighead",
        targetType: "tackle",
        targetId: "jighead",
        qualification: null,
        createdVersion: "0.7.0",
        lastModifiedVersion: "0.7.0",
        isActive: true
    }
]);
