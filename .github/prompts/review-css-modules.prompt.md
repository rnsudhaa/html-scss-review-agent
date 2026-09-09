---
mode: agent
description: Review a CSS Module written in SCSS and its paired React component.
---

Review the provided `*.module.scss` file and its colocated React component (`Component.tsx` or `Component.jsx`). If only the component is attached, inspect the colocated module too.

Check for:
- Module naming and root-class conventions: `SCSSR-NAME-001`, `SCSSR-ROOT-001`
- Safe `:global` usage and shallow nesting: `SCSSR-GLOBAL-001`, `SCSSR-NEST-001`
- Token adoption and hardcoded value removal: `SCSSR-TOKEN-001`, `REACT-TOKEN-001`
- Reuse and maintainability: `SCSSR-BEM-001`, `SCSSR-COMPOSES-001`, `REACT-STYLE-001`
- Duplicated or inline styling in the paired component: `REACT-STYLE-002`

Use the standard review output format:
## Summary
## Findings
- `Severity` — `path:line` — `RULE-ID` — issue — suggested fix
## Positive Notes
