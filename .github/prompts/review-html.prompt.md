---
mode: agent
description: Review selected or attached HTML for semantic correctness and accessibility issues.
---

Review the provided HTML content/files.

Requirements:
- Follow `.github/copilot-instructions.md`.
- Apply rules from `rules/html-semantics.md` and `rules/accessibility.md` first, plus related checks from `rules/ui-issues.md` and `rules/responsive.md` when relevant.
- Cite rule IDs for every finding.
- Limit analysis to HTML concerns unless CSS/SCSS is directly needed for context.
- Return output in the required standard format (`Summary`, `Findings`, `Positive Notes`, optional `Suggested Refactors`).
