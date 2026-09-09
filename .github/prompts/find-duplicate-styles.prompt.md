---
mode: agent
description: Scan workspace styles for duplicate design values and repeated selectors; propose token extraction.
---

Scan `*.scss` and `*.css` files in this workspace for duplicate styles.

Requirements:
- Follow `.github/copilot-instructions.md`.
- Use `rules/duplicates.md`, with supporting references from `rules/scss-quality.md` and `rules/reusability.md`.
- Identify repeated colors, spacing, shadows, radii, and near-duplicate selectors.
- Suggest token candidates and consolidation opportunities.
- Cite rule IDs for every finding.
- Return output in the required standard format (`Summary`, `Findings`, `Positive Notes`, optional `Suggested Refactors`).
