# Quickstart: TypeScript Reverse Count Iterator

**Feature**: `003-ts-reverse-loop`

## Prerequisites

- Node.js 18+ installed
- Repository cloned: `codalith-testing`
- Dependencies installed after implementation: `npm install`

## Implement (via `/speckit-implement` or manual)

1. Ensure `package.json`, `tsconfig.json`, and `src/reverseCount.ts` exist per
   [plan.md](./plan.md).
2. Implement `buildReverseCountSequence()` per
   [contracts/reverse-count-schema.md](./contracts/reverse-count-schema.md).

## Verify — export (User Story 2)

From repository root (Node REPL or one-liner after build):

```powershell
node --import tsx -e "import { buildReverseCountSequence } from './src/reverseCount.ts'; console.log(JSON.stringify(buildReverseCountSequence()));"
```

Expected stdout:

```text
[10,9,8,7,6,5,4,3,2,1,0]
```

## Verify — entry point (User Story 1)

```powershell
npx tsx src/reverseCount.ts
```

Expected stdout (spacing may vary):

```text
10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
```

## Pass criteria (maps to spec SC-001–SC-004)

- [x] `src/reverseCount.ts` exists
- [x] Exported function returns exactly 11 integers, 10 down to 0
- [x] Direct execution prints the full sequence
- [x] Import from another file succeeds without duplicate loop code

## Next command

Run **`/speckit-implement`** to execute [tasks.md](./tasks.md), or validate with the
commands above after manual implementation.
