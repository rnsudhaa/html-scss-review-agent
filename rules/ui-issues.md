# Common UI Issue Rules

## UI-OVERFLOW-001 — Prevent Layout Overflow
**Severity default:** major  
**Rationale:** Uncontrolled widths/long strings can create horizontal scrolling.

**Bad example**
```scss
.title { white-space: nowrap; }
```

**Good example**
```scss
.title { overflow-wrap: anywhere; }
```

## UI-ZINDEX-001 — Use Managed Z-Index Layers
**Severity default:** minor  
**Rationale:** Arbitrary large z-index values create stacking conflicts.

**Bad example**
```scss
.modal { z-index: 999999; }
```

**Good example**
```scss
:root { --z-modal: 1000; }
.modal { z-index: var(--z-modal); }
```

## UI-STATE-001 — Define Interactive States
**Severity default:** major  
**Rationale:** Missing states reduce usability and accessibility.

**Bad example**
```scss
.button { background: var(--color-brand-primary); }
```

**Good example**
```scss
.button:hover,
.button:focus-visible { background: var(--color-brand-primary-strong); }
.button:disabled { opacity: .5; cursor: not-allowed; }
```

## UI-STATE-002 — Include Empty/Loading/Error States
**Severity default:** major  
**Rationale:** Components must handle non-happy paths for robust UX.

**Bad example**
```html
<section class="orders-list"></section>
```

**Good example**
```html
<section class="orders-list" aria-live="polite">
  <p class="orders-list__empty">No orders yet.</p>
</section>
```

## UI-I18N-001 — Avoid Hardcoded UI Strings in Reusable Components
**Severity default:** minor  
**Rationale:** Hardcoded text blocks localization and reuse.

**Bad example**
```html
<button class="cta">Buy now</button>
```

**Good example**
```html
<button class="cta" data-i18n="checkout.buy_now"></button>
```

## UI-IMG-001 — Use Responsive Image Attributes
**Severity default:** major  
**Rationale:** Missing `srcset`/`sizes` can hurt performance and visual quality.

**Bad example**
```html
<img src="hero-1600.jpg" alt="Team working together">
```

**Good example**
```html
<img
  src="hero-800.jpg"
  srcset="hero-400.jpg 400w, hero-800.jpg 800w, hero-1600.jpg 1600w"
  sizes="(max-width: 48rem) 100vw, 50vw"
  alt="Team working together"
>
```
