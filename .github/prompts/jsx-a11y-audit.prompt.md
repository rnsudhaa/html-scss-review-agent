---
mode: agent
description: Audit a React component or page for WCAG 2.1 AA and jsx-a11y issues.
---

Audit the provided React component or page for WCAG 2.1 AA risks and `jsx-a11y`-style issues. Review the paired `Component.module.scss` too when it affects focus, visibility, or interaction states.

Prioritize:
- Semantic controls and landmarks: `REACT-SEM-001`
- JSX accessibility rules: `REACT-A11Y-001`, `REACT-A11Y-003`, `REACT-A11Y-004`
- Keyboard operation and visible focus: `REACT-A11Y-002`
- Button and form correctness: `REACT-JSX-002`, `REACT-A11Y-004`
- Token-based focus styling and safe global overrides: `REACT-TOKEN-001`, `SCSSR-GLOBAL-001`, `SCSSR-TOKEN-001`

Use the standard review output format:
## Summary
## Findings
- `Severity` — `path:line` — `RULE-ID` — issue — suggested fix
## Positive Notes
