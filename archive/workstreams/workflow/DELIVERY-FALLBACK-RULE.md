# Delivery Fallback Rule

**Status:** Approved Project Workflow  
**Date:** 2026-08-13

For project changes that are authorized for direct GitHub delivery, use this fallback workflow:

1. Attempt the authorized direct GitHub write.
2. If the direct write fails for any reason, do not stall the workflow or repeatedly retry the same blocked delivery path.
3. Package the exact intended change as a production ZIP preserving the repository-relative paths.
4. Provide the ZIP to the user for manual upload/application.
5. After the user confirms the ZIP contents were uploaded, re-fetch the affected GitHub files from `main`.
6. Validate that the uploaded contents match the intended package before treating the change as complete.

This fallback does not expand direct-write authority. Production source, data, media, CSS, HTML, JavaScript, and configuration changes continue to use the existing user-reviewable package workflow unless the user explicitly changes that rule.
