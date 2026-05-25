# Research: TypeScript Reverse Count Iterator

**Feature**: `003-ts-reverse-loop`  
**Date**: 2026-05-24

## Decision 1: Module layout and file location

**Decision**: Place the deliverable at `src/reverseCount.ts` with a named export
`buildReverseCountSequence()` returning `number[]`.

**Rationale**: Matches common single-package TypeScript layout; keeps the repo root
uncluttered while aligning with the spec's "one new TypeScript file" requirement.
Export enables User Story 2 (import/reuse) without a second file.

**Alternatives considered**:

- Root-level `reverseCount.ts` — rejected because it mixes source with docs/specs and
  does not scale if more modules are added later.
- Multiple files (types + impl) — rejected as over-engineering for an 11-element loop.

## Decision 2: TypeScript toolchain

**Decision**: Add minimal `package.json` and `tsconfig.json` at repository root; use
`npx tsx src/reverseCount.ts` for runnable verification (no compile step required for
v1 quickstart).

**Rationale**: Repository has no existing Node/TS setup. `tsx` provides zero-config
execution of `.ts` entry points for operators. `typescript` as devDependency enables
editor/typecheck if desired.

**Alternatives considered**:

- `tsc` compile to `dist/` then `node` — more steps for a smoke feature; deferred to
  polish if needed.
- No package.json (plain `.ts` only) — fails FR-005 runnable verification without
  documented tooling.

## Decision 3: Iteration approach

**Decision**: Build sequence with a descending `for` loop from 10 to 0 inclusive
(`for (let i = 10; i >= 0; i--)`), pushing into an array.

**Rationale**: Explicit, readable, matches user request ("iterate 0 to 10 reverse").
No external libraries.

**Alternatives considered**:

- `Array.from({ length: 11 }, (_, idx) => 10 - idx)` — functional but less obvious to
  smoke-test reviewers.
- Generator function — valid for reuse but unnecessary complexity for fixed range.

## Decision 4: Entry-point behavior

**Decision**: When `import.meta.url` / `require.main` equivalent indicates direct
execution, log the sequence as comma-separated values to stdout (one line).

**Rationale**: Satisfies User Story 1 scenario 4 and quickstart manual verification
without requiring a separate CLI package.

**Alternatives considered**:

- JSON-only stdout — valid but less human-friendly for 30-second manual check (SC-003).
