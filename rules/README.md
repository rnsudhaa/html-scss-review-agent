# Rule Catalog Index

This index maps all review rules used by the Frontend Reviewer agent. Use these stable IDs in findings, prompts, and examples.

| Category | File | Rule IDs |
|---|---|---|
| Semantic HTML | `rules/html-semantics.md` | `HTML-SEM-001` to `HTML-SEM-006` |
| Accessibility (WCAG 2.1 AA) | `rules/accessibility.md` | `A11Y-001` to `A11Y-006` |
| Responsive | `rules/responsive.md` | `RESP-001` to `RESP-005` |
| SCSS Quality | `rules/scss-quality.md` | `SCSS-NEST-001`, `SCSS-MOD-001`, `SCSS-TOKEN-001`, `SCSS-MIXIN-001`, `SCSS-PLACE-001`, `SCSS-PREFIX-001` |
| Duplicate Styles | `rules/duplicates.md` | `DUP-TOKEN-001`, `DUP-TOKEN-002`, `DUP-SEL-001` |
| Reusability | `rules/reusability.md` | `REUSE-BEM-001`, `REUSE-SEL-001`, `REUSE-TAG-001`, `REUSE-COMP-001` |
| Maintainability | `rules/maintainability.md` | `MAINT-IMP-001`, `MAINT-INLINE-001`, `MAINT-STRUCT-001`, `MAINT-COMP-001`, `MAINT-NAME-001` |
| Common UI Issues | `rules/ui-issues.md` | `UI-OVERFLOW-001`, `UI-ZINDEX-001`, `UI-STATE-001`, `UI-STATE-002`, `UI-I18N-001`, `UI-IMG-001` |

## Rule Entry Template
Each rule file uses:
- **ID**
- **Title**
- **Severity default**
- **Rationale**
- **Bad example**
- **Good example**
