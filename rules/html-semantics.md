# HTML Semantics Rules

## HTML-SEM-001 — Use Landmark Elements
**Severity default:** major  
**Rationale:** Landmarks improve navigation for assistive tech and clarify page structure.

**Bad example**
```html
<div class="top"></div>
<div class="menu"></div>
<div class="content"></div>
<div class="bottom"></div>
```

**Good example**
```html
<header></header>
<nav aria-label="Primary"></nav>
<main></main>
<footer></footer>
```

## HTML-SEM-002 — Maintain Heading Order
**Severity default:** major  
**Rationale:** Skipping heading levels creates confusing document outlines.

**Bad example**
```html
<h1>Account</h1>
<h3>Profile</h3>
```

**Good example**
```html
<h1>Account</h1>
<h2>Profile</h2>
```

## HTML-SEM-003 — Use Correct Interactive Elements
**Severity default:** blocker  
**Rationale:** Clickable non-interactive elements break keyboard and semantics.

**Bad example**
```html
<div class="btn" onclick="save()">Save</div>
```

**Good example**
```html
<button type="button" class="btn">Save</button>
```

## HTML-SEM-004 — Use Native List Semantics
**Severity default:** minor  
**Rationale:** Groups of items should be announced as lists.

**Bad example**
```html
<div class="features"><div>Fast</div><div>Secure</div></div>
```

**Good example**
```html
<ul class="features">
  <li>Fast</li>
  <li>Secure</li>
</ul>
```

## HTML-SEM-005 — Label All Form Controls
**Severity default:** blocker  
**Rationale:** Explicit labels are required for usability and accessibility.

**Bad example**
```html
<input id="email" type="email" placeholder="Email">
```

**Good example**
```html
<label for="email">Email</label>
<input id="email" type="email">
```

## HTML-SEM-006 — Avoid Div Soup
**Severity default:** minor  
**Rationale:** Excessive generic wrappers reduce readability and maintainability.

**Bad example**
```html
<div><div><div>Card body</div></div></div>
```

**Good example**
```html
<article class="card">
  <p>Card body</p>
</article>
```
