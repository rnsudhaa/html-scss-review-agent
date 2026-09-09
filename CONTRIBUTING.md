# Contributing

## Add a new rule
1. Pick the right file under `rules/` (or create a new category file if necessary).
2. Use a stable ID prefix by category (examples: `HTML-SEM-`, `A11Y-`, `RESP-`, `SCSS-`, `DUP-`, `REUSE-`, `MAINT-`, `UI-`).
3. Follow this rule template exactly:
   - **ID**
   - **Title**
   - **Severity default** (`blocker`, `major`, `minor`, `nit`)
   - **Rationale**
   - **Bad example**
   - **Good example**
4. Add the new rule ID to `rules/README.md` index table.

## Add or update prompts
1. Add files in `.github/prompts/` using kebab-case names.
2. Use VS Code `.prompt.md` frontmatter with:
   - `mode: agent`
   - a clear `description`
3. In prompt content, require:
   - rule-ID citations from `rules/`
   - the standard review output format from `.github/copilot-instructions.md`

## Add examples
1. Place flawed examples under `examples/bad/` and corrected versions under `examples/good/`.
2. Keep examples small and valid HTML/SCSS.
3. Update `examples/README.md` with mappings from observed issues to rule IDs.
