# Data Model: TypeScript Reverse Count Iterator

**Feature**: `003-ts-reverse-loop`  
**Date**: 2026-05-24

This feature has no database. Persisted artifacts are TypeScript source and optional
package metadata on disk.

## Entity: ReverseCountSequence

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `values` | ordered list of integers | Yes | Length exactly 11 |
| `values[0]` | integer | Yes | Must equal 10 |
| `values[10]` | integer | Yes | Must equal 0 |
| ordering | constraint | Yes | Strictly decreasing by 1 each step |

### Canonical value

```text
[10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
```

### Invariants

1. No duplicate or skipped integers within the inclusive range 10–0.
2. Each call to the builder returns a new array instance (callers may mutate without
   affecting others).

## Entity: ReverseCountModule (`src/reverseCount.ts`)

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `path` | string (filesystem) | Yes | Must be `<repo-root>/src/reverseCount.ts` |
| `export.buildReverseCountSequence` | callable | Yes | Returns valid ReverseCountSequence |
| `entryPointOutput` | string (stdout) | When run directly | Human-readable sequence matching canonical value |

### Relationships

- **ReverseCountModule** produces **ReverseCountSequence** on each invocation.
- **Repository** may contain optional **package.json** / **tsconfig.json** supporting
  execution only; not part of the sequence domain model.

### State transitions

```text
[module absent] --create--> [module present]
[module present] --invoke buildReverseCountSequence--> [sequence returned]
[module present] --run as entry--> [stdout displays sequence]
```
