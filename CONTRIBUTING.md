# Contributing

## Rule IDs
- React rules use the `REACT-*` prefix.
- React SCSS module rules use the `SCSSR-*` prefix.
- Keep IDs stable, unique, and cite them consistently in prompts, examples, chat modes, and review findings.

## Adding React-specific rules
- Add JSX and component rules to `rules/react.md`.
- Add CSS Module and SCSS pairing rules to `rules/scss-react.md`.
- Follow the repository rule template: ID, title, severity, rationale, bad example, good example.

## Adding React-specific prompts
- Store prompts in `.github/prompts/` with frontmatter containing `mode: agent` and `description`.
- Reference the relevant `REACT-*` and `SCSSR-*` IDs directly in the prompt body.
- Require the standard review output format: `Summary`, `Findings`, `Positive Notes`.

## React review conventions
- Review `.tsx`, `.jsx`, and `*.module.scss` together when they are colocated.
- Prefer TypeScript React components with colocated `Component.module.scss` files and optional `index.ts` re-exports.
