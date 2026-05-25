# Contract: Reverse Count Module

**Feature**: `003-ts-reverse-loop`  
**Version**: 1.0.0  
**Date**: 2026-05-24

## Module location

- **Path**: `src/reverseCount.ts`
- **Primary export**: `buildReverseCountSequence`

## Export contract

### `buildReverseCountSequence()`

| Property | Value |
|----------|--------|
| Parameters | none |
| Return type | `number[]` |
| Return length | 11 |
| Return value | `[10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]` |
| Side effects | none |
| Idempotency | Each call returns equivalent sequence; new array instance |

### Validation rules

1. First element MUST be `10`.
2. Last element MUST be `0`.
3. For every index `i` from 0 to 9: `result[i] - result[i + 1] === 1`.
4. No elements outside the inclusive range `[0, 10]`.

## Entry-point contract (when executed directly)

| Property | Value |
|----------|--------|
| Trigger | Run file as main module (e.g. `npx tsx src/reverseCount.ts`) |
| stdout | Single line containing all sequence values in order, separated by commas and spaces |
| Example | `10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0` |
| stderr | Empty on success |
| Exit code | 0 on success |

## Consumer import contract

```typescript
import { buildReverseCountSequence } from "./reverseCount";

const sequence = buildReverseCountSequence();
// sequence deep-equal to [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
```

Relative import path may vary by consumer location; exported symbol name MUST remain
`buildReverseCountSequence`.

## Out of scope (v1)

- Configurable start/end bounds
- Async APIs
- Network or filesystem side effects beyond optional stdout when run directly
