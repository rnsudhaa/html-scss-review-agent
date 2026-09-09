---
mode: agent
description: Perform a WCAG 2.1 AA-focused accessibility audit for a page or component.
---

Perform an accessibility audit of the provided frontend code.

Requirements:
- Follow `.github/copilot-instructions.md`.
- Prioritize `rules/accessibility.md`, then related issues in `rules/html-semantics.md` and `rules/ui-issues.md`.
- Focus on WCAG 2.1 AA concerns: alternatives, semantics, keyboard access, focus, and state communication.
- Cite rule IDs for every finding.
- Return output in the required standard format (`Summary`, `Findings`, `Positive Notes`, optional `Suggested Refactors`).
