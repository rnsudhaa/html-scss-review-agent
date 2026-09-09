# Accessibility Rules (WCAG 2.1 AA)

## A11Y-001 — Provide Meaningful `alt` Text
**Severity default:** major  
**Rationale:** Screen reader users need text alternatives for informative images.

**Bad example**
```html
<img src="product.jpg">
```

**Good example**
```html
<img src="product.jpg" alt="Blue backpack with front zip pocket">
```

## A11Y-002 — Avoid Redundant or Invalid ARIA
**Severity default:** major  
**Rationale:** Incorrect ARIA can override valid semantics and confuse assistive tech.

**Bad example**
```html
<button role="button" aria-label="Submit">Send</button>
```

**Good example**
```html
<button type="submit">Send</button>
```

## A11Y-003 — Ensure Visible Keyboard Focus
**Severity default:** blocker  
**Rationale:** Keyboard users must see which element currently has focus.

**Bad example**
```scss
.button:focus {
  outline: none;
}
```

**Good example**
```scss
.button:focus-visible {
  outline: 2px solid #1d4ed8;
  outline-offset: 2px;
}
```

## A11Y-004 — Ensure Keyboard Operability
**Severity default:** blocker  
**Rationale:** Pointer-only interactions exclude keyboard and switch users.

**Bad example**
```html
<div class="menu-item" onclick="openMenu()">Open</div>
```

**Good example**
```html
<button type="button" class="menu-item">Open</button>
```

## A11Y-005 — Set Document Language
**Severity default:** major  
**Rationale:** `lang` helps assistive technology apply correct pronunciation rules.

**Bad example**
```html
<html>
```

**Good example**
```html
<html lang="en">
```

## A11Y-006 — Add Skip Links for Main Content
**Severity default:** minor  
**Rationale:** Skip links allow keyboard users to bypass repeated navigation.

**Bad example**
```html
<body>
  <nav>...</nav>
  <main>...</main>
</body>
```

**Good example**
```html
<body>
  <a class="skip-link" href="#main-content">Skip to main content</a>
  <nav>...</nav>
  <main id="main-content">...</main>
</body>
```
