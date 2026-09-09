# Copilot instructions

## Review scope
- Review frontend changes in `*.html`, `*.scss`, `*.tsx`, `*.jsx`, and `*.module.scss`.
- When a React component file is in scope, also inspect its colocated CSS Module when present.
- When a `*.module.scss` file is in scope, also inspect the colocated component (`Component.tsx` or `Component.jsx`) when present.

## Standard review output
Use the same response format for HTML, SCSS, and React reviews:
1. `Summary`
2. `Findings`
3. `Positive Notes`

Each finding should include severity, file and line when available, the applicable rule ID, the issue, and a concrete fix.

## React + CSS Modules + SCSS
The default React stack in this repository is TypeScript React components (`.tsx`) with colocated CSS Modules written in SCSS (`Component.module.scss`).

Apply these conventions during React reviews:
- Prefer semantic HTML in JSX and follow `jsx-a11y` expectations for labels, alt text, keyboard support, focus states, and ARIA usage.
- Use `className` and `htmlFor` in JSX, and require explicit `type` on every `<button>`.
- Prefer one component per file with PascalCase names, colocated module styles, and the `Component/Component.tsx`, `Component/Component.module.scss`, `Component/index.ts` folder pattern.
- Prefer prop-driven variants over duplicated component files.
- Keep static styling in CSS Modules instead of inline `style` objects.
- In module SCSS, import design tokens with `@use 'styles/tokens' as *;`, keep nesting shallow, and use `:global` sparingly.

Reference the React rule catalogs when reviewing React changes:
- [`rules/react.md`](../rules/react.md)
- [`rules/scss-react.md`](../rules/scss-react.md)

The standard review output format above applies to React reviews too.
