# Examples for Few-Shot Grounding

This folder contains intentionally flawed and corrected examples used to ground the Frontend Reviewer agent. It covers both the HTML/SCSS baseline and the React (TSX + CSS Modules SCSS) variant.

## File map

### HTML / SCSS baseline
- `examples/bad/card.html`
- `examples/bad/card.scss`
- `examples/good/card.html`
- `examples/good/card.scss`

### React (TSX + CSS Modules SCSS)
- `examples/bad/Card/Card.tsx`
- `examples/bad/Card/Card.module.scss`
- `examples/bad/Card/index.ts`
- `examples/good/Card/Card.tsx`
- `examples/good/Card/Card.module.scss`
- `examples/good/Card/card-base.module.scss`
- `examples/good/Card/index.ts`

Design tokens consumed by the SCSS module examples live in [`styles/tokens.scss`](../styles/tokens.scss).

## What the bad HTML/SCSS example demonstrates
- Missing semantic structure and heading order issues (`HTML-SEM-001`, `HTML-SEM-002`, `HTML-SEM-006`)
- Clickable non-button element and weak form semantics (`HTML-SEM-003`, `HTML-SEM-005`, `A11Y-004`)
- Missing image `alt` text (`A11Y-001`)
- Deep SCSS nesting and duplicated style values (`SCSS-NEST-001`, `DUP-TOKEN-002`)
- `!important` usage and missing visible focus style (`MAINT-IMP-001`, `A11Y-003`)

## What the good HTML/SCSS example demonstrates
- Semantic component structure and valid form labeling (`HTML-SEM-001`, `HTML-SEM-005`)
- Responsive image usage with `srcset` and `sizes` (`UI-IMG-001`, `RESP-005`)
- Tokenized spacing/radius/shadow and reusable placeholder style (`SCSS-TOKEN-001`, `SCSS-PLACE-001`)
- Shallow BEM selectors (`REUSE-BEM-001`, `REUSE-SEL-001`)
- Proper interactive state styling (`UI-STATE-001`, `A11Y-003`)

## What the bad React example demonstrates
- `<div>` used as a button with `onClick` and no keyboard support (`REACT-SEM-001`, `REACT-A11Y-002`)
- Inline `style` object with hardcoded values (`REACT-STYLE-001`, `REACT-STYLE-002`)
- Missing `alt` on `<img>` (`REACT-A11Y-003`)
- `<label>` without `htmlFor`; input without associated label (`REACT-A11Y-004`, `REACT-JSX-001`)
- Array index used as list `key` (`REACT-KEY-001`)
- Hardcoded colors/spacing in the module SCSS instead of tokens (`REACT-TOKEN-001`, `SCSSR-TOKEN-001`)

## What the good React example demonstrates
- Semantic JSX with real `<button type="button">` (`REACT-SEM-001`, `REACT-JSX-002`)
- CSS Modules with colocated `Card.module.scss` and kebab-case root class (`SCSSR-NAME-001`, `SCSSR-ROOT-001`)
- Tokens imported via `@use 'styles/tokens' as *;` (`REACT-TOKEN-001`, `SCSSR-TOKEN-001`)
- Shared styles reused via `composes:` from `card-base.module.scss` (`SCSSR-COMPOSES-001`)
- Stable `key` from item id and prop-driven variants (`REACT-KEY-001`, `REACT-VARIANT-001`)
- Labeled form fields using `htmlFor` (`REACT-A11Y-004`)
- Visible `:focus-visible` outline (`A11Y-003`)
