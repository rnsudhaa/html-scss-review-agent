# Examples for Few-Shot Grounding

This folder contains intentionally flawed and corrected HTML/SCSS card component examples to ground review behavior.

## Files
- `examples/bad/card.html`
- `examples/bad/card.scss`
- `examples/good/card.html`
- `examples/good/card.scss`

## What the bad example demonstrates
- Missing semantic structure and heading order issues (`HTML-SEM-001`, `HTML-SEM-002`, `HTML-SEM-006`)
- Clickable non-button element and weak form semantics (`HTML-SEM-003`, `HTML-SEM-005`, `A11Y-004`)
- Missing image `alt` text (`A11Y-001`)
- Deep SCSS nesting and duplicated style values (`SCSS-NEST-001`, `DUP-TOKEN-002`)
- `!important` usage and missing visible focus style (`MAINT-IMP-001`, `A11Y-003`)

## What the good example demonstrates
- Semantic component structure and valid form labeling (`HTML-SEM-001`, `HTML-SEM-005`)
- Responsive image usage with `srcset` and `sizes` (`UI-IMG-001`, `RESP-005`)
- Tokenized spacing/radius/shadow and reusable placeholder style (`SCSS-TOKEN-001`, `SCSS-PLACE-001`)
- Shallow BEM selectors (`REUSE-BEM-001`, `REUSE-SEL-001`)
- Proper interactive state styling (`UI-STATE-001`, `A11Y-003`)
