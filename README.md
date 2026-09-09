# HTML & SCSS Review Agent (MVP)

## What it is
This repository contains the MVP of an AI-powered **HTML & SCSS Code Review Agent** designed for GitHub Copilot in VS Code. The MVP is project-aware and focuses on frontend quality checks for semantic HTML, accessibility, responsive behavior, SCSS quality, duplicate styles, reusability, maintainability, and common UI issues.

Phase 2 (out of scope for this MVP PR) will add pull-request workflow automation.

## How it works
The reviewer behavior is defined by:
1. **Project-aware Copilot instructions**: `.github/copilot-instructions.md`
2. **Custom chat mode**: `.github/chatmodes/frontend-reviewer.chatmode.md`
3. **Reusable prompts**: `.github/prompts/*.prompt.md`
4. **Rule catalog with stable IDs**: `rules/`
5. **Before/after examples for grounding**: `examples/`

## Prerequisites
- Visual Studio Code
- GitHub Copilot
- GitHub Copilot Chat enabled

## Usage
1. Open this repository as a workspace in VS Code.
2. Open Copilot Chat and select the **Frontend Reviewer** chat mode.
3. Run reusable prompts such as:
   - `/review-html`
   - `/review-scss`
   - `/find-duplicate-styles`
   - `/a11y-audit`
   - `/responsive-audit`
   - `/component-reusability`
4. Or ask `@workspace` directly to review a specific frontend file.

### Example prompt ideas
- `Review this component for semantic HTML and accessibility issues.`
- `Audit this SCSS file for nesting depth, duplicate values, and token extraction opportunities.`
- `Check this card for responsive behavior and missing interaction states.`

## Review output format
All reviews should follow this standard structure:

```md
## Summary
<1–3 sentence overall assessment>

## Findings
| # | Severity | File | Line(s) | Rule | Issue | Suggested Fix |
|---|----------|------|---------|------|-------|---------------|
...

## Positive Notes
- ...

## Suggested Refactors (optional code blocks)
```

Severity values: `blocker`, `major`, `minor`, `nit`.

## Rule catalog overview
See the indexed rule catalog in [`rules/README.md`](rules/README.md).

## Roadmap (Phase 2)
Planned pull request workflow integration:
- GitHub Action on frontend file changes
- Deterministic checks (Stylelint + HTMLHint)
- GitHub Models-based qualitative review
- Inline PR review comments

## Contributing
See [`CONTRIBUTING.md`](CONTRIBUTING.md) for how to add rules, prompts, and examples.

## License
Licensed under the terms in [`LICENSE`](LICENSE).
