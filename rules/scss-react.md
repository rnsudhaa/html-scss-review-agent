# SCSS + React rules

## SCSSR-NAME-001 — Name modules `Component.module.scss` beside `Component.tsx`
- Severity: minor
- Rationale: Matching component and module names make CSS Module imports predictable and easy to find.
- Bad:
```tsx
import styles from './card.scss';
```
```scss
.card {}
```
- Good:
```tsx
import styles from './Card.module.scss';
```
```scss
.card {}
```

## SCSSR-ROOT-001 — Root class should match the component name in kebab-case
- Severity: minor
- Rationale: A stable root class improves readability and makes variants easier to reason about.
- Bad:
```tsx
<article className={styles.wrapper} />
```
```scss
.wrapper {}
```
- Good:
```tsx
<article className={styles.card} />
```
```scss
.card {}
```

## SCSSR-GLOBAL-001 — Use :global sparingly and document why
- Severity: major
- Rationale: CSS Modules are local by default; broad global selectors should be rare and justified.
- Bad:
```tsx
import styles from './Card.module.scss';

export function Card() {
  return <article className={styles.card}>...</article>;
}
```
```scss
:global(.btn) { margin: 0; }
```
- Good:
```tsx
import styles from './Card.module.scss';

export function Card() {
  return <article className={styles.card}>...</article>;
}
```
```scss
:global(.prose h2) { /* third-party rich text reset */ margin-block: 0; }
```

## SCSSR-TOKEN-001 — Import tokens with `@use 'styles/tokens' as *;`
- Severity: major
- Rationale: Token imports replace magic values with shared design primitives.
- Bad:
```tsx
import styles from './Card.module.scss';

export function Card() {
  return <article className={styles.card}>...</article>;
}
```
```scss
.card { padding: 24px; color: #111; }
```
- Good:
```tsx
import styles from './Card.module.scss';

export function Card() {
  return <article className={styles.card}>...</article>;
}
```
```scss
@use 'styles/tokens' as *;
.card { padding: $space-4; color: $color-text; }
```

## SCSSR-NEST-001 — Keep nesting to depth 3 and follow `SCSS-NEST-001`
- Severity: major
- Rationale: Deep selectors are harder to override and usually signal component structure leaking into styles.
- Bad:
```tsx
import styles from './Card.module.scss';

export function Card() {
  return <article className={styles.card}><span className={styles.iconLabel}>...</span></article>;
}
```
```scss
.card { .body { .actions { .icon { span { color: $color-text; } } } } }
```
- Good:
```tsx
import styles from './Card.module.scss';

export function Card() {
  return <article className={styles.card}><span className={styles.iconLabel}>...</span></article>;
}
```
```scss
.card {}
.actions {}
.iconLabel {}
```

## SCSSR-BEM-001 — Use nested BEM forms only when they help readability
- Severity: minor
- Rationale: CSS Modules already scope classes, so nested `&__` and `&--` forms should stay intentional rather than automatic.
- Bad:
```tsx
import styles from './Card.module.scss';

export function Card() {
  return <section className={styles.cardBody}><h2 className={styles.cardTitle}>Title</h2></section>;
}
```
```scss
.card { &__body { &__title { color: $color-text; } } }
```
- Good:
```tsx
import styles from './Card.module.scss';

export function Card() {
  return <section className={styles.cardBody}><h2 className={styles.cardTitle}>Title</h2></section>;
}
```
```scss
.cardBody {}
.cardTitle {}
.card { &--featured { border-color: $color-accent; } }
```

## SCSSR-COMPOSES-001 — Prefer `composes:` for shared module rulesets
- Severity: minor
- Rationale: `composes:` reuses shared module styles without copy-pasting declarations between components.
- Bad:
```tsx
import styles from './Card.module.scss';

export function Card() {
  return <article className={styles.card}>...</article>;
}
```
```scss
.card { border: 1px solid $color-border; border-radius: $radius-3; }
.panel { border: 1px solid $color-border; border-radius: $radius-3; }
```
- Good:
```tsx
import styles from './Card.module.scss';

export function Card() {
  return <article className={styles.card}>...</article>;
}
```
```scss
.card { composes: surface from './shared.module.scss'; }
.panel { composes: surface from './shared.module.scss'; }
```
