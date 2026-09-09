---
mode: agent
description: Review a React component and its colocated CSS Module using the repository React rules.
---

Review the attached React component (`.tsx` or `.jsx`) and its colocated `Component.module.scss` file together. If only one file is attached, locate the colocated peer and include it in the review.

Check for:
- JSX semantics and attribute correctness: `REACT-SEM-001`, `REACT-JSX-001`, `REACT-JSX-002`
- Accessibility and keyboard support: `REACT-A11Y-001`, `REACT-A11Y-002`, `REACT-A11Y-003`, `REACT-A11Y-004`
- Stable list keys and prop-driven variants: `REACT-KEY-001`, `REACT-VARIANT-001`
- File structure and colocation: `REACT-STRUCT-001`, `REACT-STRUCT-002`
- CSS Module quality and token usage: `REACT-STYLE-001`, `REACT-STYLE-002`, `REACT-TOKEN-001`, `SCSSR-*`

Use the standard review output format:
## Summary
## Findings
- `Severity` — `path:line` — `RULE-ID` — issue — suggested fix
## Positive Notes
