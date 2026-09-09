---
mode: agent
description: Audit responsive behavior, unit choices, breakpoints, and media handling.
---

Review responsive behavior for the provided HTML/SCSS/CSS.

Requirements:
- Follow `.github/copilot-instructions.md`.
- Apply `rules/responsive.md` first, then related checks from `rules/ui-issues.md` and `rules/scss-quality.md`.
- Flag fixed-size layouts, fragile breakpoints, and non-responsive media patterns.
- Cite rule IDs for every finding.
- Return output in the required standard format (`Summary`, `Findings`, `Positive Notes`, optional `Suggested Refactors`).
