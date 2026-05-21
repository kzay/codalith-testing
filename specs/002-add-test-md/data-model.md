# Data Model: Add test.md Marker File

**Feature**: `002-add-test-md`  
**Date**: 2026-05-20

This feature has no database or API. The only persisted entity is a Markdown file on disk.

## Entity: MarkerFile (`test.md`)

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `path` | string (filesystem) | Yes | Must be `<repo-root>/test.md` |
| `placeholder_text` | string (Markdown body) | Yes | Length ≥ 20; not copied from existing project documentation |
| `date` | string (ISO 8601 date) | Yes | Pattern `^\d{4}-\d{2}-\d{2}$`; labeled `Date:` |
| `model` | string | Yes | Non-empty; labeled `Model:`; use `unknown` if undetermined |

### Relationships

- **MarkerFile** is standalone; no foreign keys or references to other entities.
- **Repository** contains exactly one canonical `test.md` at root per feature scope.

### State transitions

```text
[absent] --create--> [present]
[present] --overwrite/update--> [present]  (date and model refreshed)
```

### Invariants

1. All three content fields (`placeholder_text`, `date`, `model`) MUST appear in the same file.
2. Labels MUST be human-readable (`Date:`, `Model:` or equivalent section headings).
3. File MUST remain valid Markdown (plain text with optional headings).
