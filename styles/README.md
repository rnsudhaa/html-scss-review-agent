# Design Tokens

Shared SCSS design tokens consumed by examples and referenced by rules `SCSS-TOKEN-001`, `REACT-TOKEN-001`, and `SCSSR-TOKEN-001`.

## Usage

```scss
@use 'styles/tokens' as *;

.card {
  padding: $space-4;
  border-radius: $radius-3;
  background: $color-surface;
}
```

## Categories
- **Color** — surface, border, text, accent, focus, semantic
- **Spacing** — 4px base scale (`$space-1` … `$space-8`)
- **Typography** — family, size, line-height
- **Radii** — `$radius-1` … `$radius-pill`
- **Shadows** — `$shadow-sm` / `md` / `lg`
- **Breakpoints** — mobile-first (`$bp-sm` … `$bp-xl`)
- **Z-index** — layered scale

Extend this file when adding a new token category; keep names semantic (not visual).
