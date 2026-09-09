---
mode: agent
description: Review selected or attached SCSS/CSS for quality, nesting, tokenization, and maintainability.
---

Review the provided SCSS/CSS.

Requirements:
- Follow `.github/copilot-instructions.md`.
- Apply rules from `rules/scss-quality.md`, `rules/duplicates.md`, `rules/reusability.md`, `rules/maintainability.md`, and `rules/responsive.md` where relevant.
- Cite rule IDs for every finding.
- Highlight deep nesting, repeated values, poor selector strategy, and maintainability risks.
- Return output in the required standard format (`Summary`, `Findings`, `Positive Notes`, optional `Suggested Refactors`).
