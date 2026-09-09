# Duplicate Style Rules

## DUP-TOKEN-001 — Extract Repeated Colors Into Tokens
**Severity default:** major  
**Rationale:** Repeated hex/RGB values increase drift and maintenance cost.

**Bad example**
```scss
.alert { color: #d14343; }
.badge { border-color: #d14343; }
.link { text-decoration-color: #d14343; }
```

**Good example**
```scss
:root { --color-danger: #d14343; }
.alert { color: var(--color-danger); }
.badge { border-color: var(--color-danger); }
```

## DUP-TOKEN-002 — Extract Repeated Spacing/Radius/Shadow Values
**Severity default:** major  
**Rationale:** Shared values should be centralized into spacing/radius/shadow tokens.

**Bad example**
```scss
.card { padding: 16px; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,.12); }
.modal { padding: 16px; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,.12); }
```

**Good example**
```scss
.card,
.modal {
  padding: var(--space-4);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}
```

## DUP-SEL-001 — Consolidate Near-Duplicate Selectors
**Severity default:** minor  
**Rationale:** Similar selector blocks should be merged or abstracted to reduce drift.

**Bad example**
```scss
.card-title { font-weight: 600; margin-bottom: .5rem; }
.panel-title { font-weight: 600; margin-bottom: .5rem; }
```

**Good example**
```scss
%section-title { font-weight: 600; margin-bottom: .5rem; }
.card__title { @extend %section-title; }
.panel__title { @extend %section-title; }
```
