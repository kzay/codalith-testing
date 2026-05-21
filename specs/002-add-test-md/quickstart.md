# Quickstart: Add test.md Marker File

**Feature**: `002-add-test-md`

## Prerequisites

- Repository cloned locally: `codalith-testing`
- Write access to repository root
- No API keys or network access required

## Implement (manual or via `/speckit-implement`)

1. Create or overwrite `test.md` at the repository root.
2. Add arbitrary placeholder prose (≥20 characters).
3. Add `Date: YYYY-MM-DD` using today's calendar date.
4. Add `Model: <agent-name>` (e.g., `Composer`).

See [contracts/test-md-schema.md](./contracts/test-md-schema.md) for the exact contract.

## Verify

From the repository root:

```powershell
# Windows
Get-Content test.md
Select-String -Path test.md -Pattern 'Date:\s*\d{4}-\d{2}-\d{2}'
Select-String -Path test.md -Pattern 'Model:\s*\S+'
```

```sh
# Unix-like
cat test.md
grep -E 'Date: [0-9]{4}-[0-9]{2}-[0-9]{2}' test.md
grep -E 'Model: .+' test.md
```

**Pass criteria** (maps to spec SC-001–SC-004):

- [ ] `test.md` is at repo root
- [ ] Placeholder text is present and ≥20 characters
- [ ] Date label and ISO date are present
- [ ] Model label and non-empty value are present

## Optional smoke script

Existing validation script (unchanged by this feature):

```sh
sh scripts/validate.sh
```

Expected output: `codalith-testing smoke validation passed`

## Next command

Run **`/speckit-tasks`** to generate implementation tasks, or **`/speckit-implement`**
to create `test.md` directly.
