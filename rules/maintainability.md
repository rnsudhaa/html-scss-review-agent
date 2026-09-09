# Maintainability Rules

## MAINT-IMP-001 — Avoid `!important`
**Severity default:** major  
**Rationale:** `!important` makes overrides difficult and hides specificity issues.

**Bad example**
```scss
.button { color: #fff !important; }
```

**Good example**
```scss
.button--inverse { color: var(--color-text-on-dark); }
```

## MAINT-INLINE-001 — Avoid Inline Styles
**Severity default:** major  
**Rationale:** Inline styles bypass shared tokens and complicate maintenance.

**Bad example**
```html
<div style="margin-top: 20px; color: red;">Warning</div>
```

**Good example**
```html
<div class="alert-text">Warning</div>
```

## MAINT-STRUCT-001 — Keep Structure Consistent
**Severity default:** minor  
**Rationale:** Predictable folder/file structure improves team navigation and onboarding.

**Bad example**
```text
styles.scss
componentA.scss
newStyles/final.scss
```

**Good example**
```text
components/
  card/
    card.html
    card.scss
```

## MAINT-COMP-001 — One Component Per File (Where Practical)
**Severity default:** minor  
**Rationale:** Separate component files reduce side effects and simplify ownership.

**Bad example**
```scss
/* button, modal, card, and tooltip styles in one file */
```

**Good example**
```text
button.scss
modal.scss
card.scss
tooltip.scss
```

## MAINT-NAME-001 — Use Kebab-Case Filenames
**Severity default:** nit  
**Rationale:** Kebab-case avoids platform inconsistency and improves discoverability.

**Bad example**
```text
ProductCard.scss
```

**Good example**
```text
product-card.scss
```
