# Responsive Rules

## RESP-001 — Prefer Mobile-First Layout Rules
**Severity default:** major  
**Rationale:** Starting from small screens avoids desktop-first overrides and regressions.

**Bad example**
```scss
.card { width: 960px; }
@media (max-width: 767px) { .card { width: 100%; } }
```

**Good example**
```scss
.card { width: 100%; }
@media (min-width: 48rem) { .card { max-width: 60rem; } }
```

## RESP-002 — Prefer Fluid Units
**Severity default:** major  
**Rationale:** `rem`, `em`, `%`, and `clamp()` scale better across devices and zoom levels.

**Bad example**
```scss
.title { font-size: 32px; margin: 24px; }
```

**Good example**
```scss
.title { font-size: clamp(1.25rem, 2vw, 2rem); margin: 1.5rem; }
```

## RESP-003 — Avoid Fixed Container Dimensions
**Severity default:** major  
**Rationale:** Fixed sizes cause clipping or overflow on smaller screens.

**Bad example**
```scss
.panel { width: 700px; height: 500px; }
```

**Good example**
```scss
.panel { width: min(100%, 43.75rem); min-height: 20rem; }
```

## RESP-004 — Use Sensible Breakpoints
**Severity default:** minor  
**Rationale:** Breakpoints should map to layout needs and remain consistent.

**Bad example**
```scss
@media (min-width: 913px) { .grid { columns: 3; } }
```

**Good example**
```scss
@media (min-width: 48rem) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 64rem) { .grid { grid-template-columns: repeat(3, 1fr); } }
```

## RESP-005 — Constrain Media with `max-width`
**Severity default:** major  
**Rationale:** Media should shrink with containers to avoid horizontal scrolling.

**Bad example**
```scss
img.hero { width: 1200px; }
```

**Good example**
```scss
img.hero { width: 100%; max-width: 100%; height: auto; }
```
