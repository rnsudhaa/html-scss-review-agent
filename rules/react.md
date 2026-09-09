# React rules

## REACT-SEM-001 — Use semantic HTML elements in JSX
- Severity: major
- Rationale: Native elements provide the right semantics, accessibility, and browser behavior without re-creating them on generic containers.
- Bad:
```tsx
<div onClick={save}>Save</div>
<a onClick={openModal}>Open details</a>
```
- Good:
```tsx
<button type="button" onClick={save}>Save</button>
<button type="button" onClick={openModal}>Open details</button>
```

## REACT-A11Y-001 — Follow jsx-a11y conventions
- Severity: blocker
- Rationale: Accessible names, ARIA, roles, and label wiring are baseline requirements for assistive technology support.
- Bad:
```tsx
<img src={avatar} />
<input id="name" />
```
- Good:
```tsx
<img src={avatar} alt="Profile photo" />
<label htmlFor="name">Name</label><input id="name" />
```

## REACT-A11Y-002 — Interactive elements must be keyboard-operable and have visible focus
- Severity: blocker
- Rationale: Pointer-only interaction excludes keyboard users, and missing focus styles hide navigation state.
- Bad:
```tsx
<div onClick={openMenu} className={styles.trigger}>Menu</div>
```
- Good:
```tsx
<button type="button" onClick={openMenu} className={styles.trigger}>Menu</button>
```

## REACT-JSX-001 — Use className and htmlFor in JSX
- Severity: major
- Rationale: JSX uses DOM property names instead of raw HTML attribute names.
- Bad:
```tsx
<label for="email" class="field">Email</label>
```
- Good:
```tsx
<label htmlFor="email" className={styles.field}>Email</label>
```

## REACT-JSX-002 — Buttons need an explicit type
- Severity: major
- Rationale: Buttons default to `submit`, which can trigger accidental form submissions.
- Bad:
```tsx
<button onClick={dismiss}>Close</button>
```
- Good:
```tsx
<button type="button" onClick={dismiss}>Close</button>
```

## REACT-KEY-001 — Use stable keys for lists
- Severity: major
- Rationale: Stable keys preserve item identity and prevent state bugs during reordering or updates.
- Bad:
```tsx
{items.map((item, index) => <Card key={index} item={item} />)}
```
- Good:
```tsx
{items.map((item) => <Card key={item.id} item={item} />)}
```

## REACT-STYLE-001 — Keep static styling out of inline style objects
- Severity: major
- Rationale: Static presentation belongs in CSS Modules so it can reuse tokens, states, and shared rules.
- Bad:
```tsx
<section style={{ padding: '24px', background: '#fff' }}>...</section>
```
- Good:
```tsx
<section className={styles.card}>...</section>
```

## REACT-STYLE-002 — Avoid inline style object literals in render
- Severity: minor
- Rationale: New object literals on each render are noisy, harder to reuse, and can trigger avoidable work.
- Bad:
```tsx
<div style={{ color: isActive ? 'red' : 'gray' }} />
```
- Good:
```tsx
<div className={isActive ? styles.active : styles.idle} />
```

## REACT-STRUCT-001 — One component per file with PascalCase names
- Severity: minor
- Rationale: A single primary component per file keeps exports, ownership, and colocated styles predictable.
- Bad:
```tsx
// card.tsx
export function Card() {}
export function CardFooter() {}
```
- Good:
```tsx
// Card.tsx
export function Card() {}
```

## REACT-STRUCT-002 — Prefer the component folder pattern
- Severity: minor
- Rationale: `Card/Card.tsx`, `Card/Card.module.scss`, and `Card/index.ts` make imports and colocation consistent.
- Bad:
```tsx
// components/Card.tsx with styles in styles/cards.scss
```
- Good:
```tsx
// Card/Card.tsx with Card/Card.module.scss and Card/index.ts
```

## REACT-VARIANT-001 — Prefer prop-driven variants over duplicated components
- Severity: major
- Rationale: Variant props centralize shared logic and styling while reducing drift between near-identical components.
- Bad:
```tsx
<CardPrimary />
<CardSecondary />
```
- Good:
```tsx
<Card variant="primary" />
<Card variant="secondary" />
```

## REACT-TOKEN-001 — Use design tokens in module SCSS
- Severity: major
- Rationale: Token imports keep color, spacing, and radius values consistent with the design system.
- Bad:
```tsx
<div className={styles.card}>...</div>
```
```scss
.card { padding: 18px; color: #222; }
```
- Good:
```tsx
<div className={styles.card}>...</div>
```
```scss
@use 'styles/tokens' as *;
.card { padding: $space-4; color: $color-text; }
```

## REACT-A11Y-003 — Images need meaningful alt text
- Severity: blocker
- Rationale: Informative images need useful alternatives, while decorative images should be skipped cleanly.
- Bad:
```tsx
<img src={hero} alt="image" />
<img src={divider} />
```
- Good:
```tsx
<img src={hero} alt="Team collaborating around a whiteboard" />
<img src={divider} alt="" />
```

## REACT-A11Y-004 — Every form input needs a label
- Severity: blocker
- Rationale: Inputs without an associated label are difficult to discover and understand with assistive technology.
- Bad:
```tsx
<label>Email</label><input id="email" />
```
- Good:
```tsx
<label htmlFor="email">Email</label><input id="email" />
```
