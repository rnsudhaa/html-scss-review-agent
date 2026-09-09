# Component Reusability Rules

## REUSE-BEM-001 — Use BEM-Style Naming
**Severity default:** major  
**Rationale:** BEM helps keep component boundaries explicit and predictable.

**Bad example**
```scss
.cardTitle { }
.card .titleActive { }
```

**Good example**
```scss
.card__title { }
.card__title--active { }
```

## REUSE-SEL-001 — Keep Selectors Shallow
**Severity default:** major  
**Rationale:** Deep descendant chains tightly couple markup and styles.

**Bad example**
```scss
.page .sidebar .menu .menu-item .menu-link { color: var(--color-text); }
```

**Good example**
```scss
.menu__link { color: var(--color-text); }
```

## REUSE-TAG-001 — Avoid Element-Tag Selectors Inside Components
**Severity default:** minor  
**Rationale:** Tag selectors create hidden dependencies on internal markup.

**Bad example**
```scss
.product-card h3 { font-size: 1rem; }
```

**Good example**
```scss
.product-card__title { font-size: 1rem; }
```

## REUSE-COMP-001 — Keep Components Self-Contained
**Severity default:** major  
**Rationale:** Reusable components should minimize dependencies on parent context.

**Bad example**
```scss
.dashboard .card { margin-top: 2rem; }
```

**Good example**
```scss
.card { margin-block-start: var(--space-4); }
```
