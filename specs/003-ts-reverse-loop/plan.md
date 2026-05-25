# Implementation Plan: TypeScript Reverse Count Iterator

**Branch**: `main` | **Date**: 2026-05-24 | **Spec**: [spec.md](./spec.md)  
**Input**: Feature specification from `/specs/003-ts-reverse-loop/spec.md`

## Summary

Add a single TypeScript module at `src/reverseCount.ts` that builds the integer sequence
10 through 0 in reverse order via a descending loop, exports `buildReverseCountSequence`
for reuse, and prints the sequence when run directly. Introduce minimal Node/TypeScript
tooling (`package.json`, `tsconfig.json`, `tsx`) so operators can verify output in under
30 seconds.

## Technical Context

**Language/Version**: TypeScript 5.x on Node.js 18+  
**Primary Dependencies**: `typescript`, `tsx` (dev); no runtime npm dependencies  
**Storage**: Repository filesystem (`src/reverseCount.ts`)  
**Testing**: Manual verification via quickstart; optional one-liner JSON assert  
**Target Platform**: Cross-platform (Windows/macOS/Linux) with Node installed  
**Project Type**: Single-module script/library smoke artifact  
**Performance Goals**: N/A (11-iteration loop; completes instantly)  
**Constraints**: Offline-capable after `npm install`; no credentials; fixed range 10→0  
**Scale/Scope**: One source file, one exported function, optional stdout on direct run

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Gate | Status | Notes |
|------|--------|-------|
| Constitution ratified | **Pass (deferred)** | `.specify/memory/constitution.md` is still the default template |
| Simplicity / YAGNI | **Pass** | One `.ts` file + minimal toolchain; no frameworks |
| Test-first (if mandated) | **Pass (waived)** | Spec defers automated tests; quickstart manual checks suffice for v1 |
| External dependencies | **Pass** | FR-006; devDependencies only for local execution |
| Security / credentials | **Pass** | No secrets or network at runtime |

**Post-design re-check**: Contracts and data model describe only the sequence module.
No constitution violations introduced.

## Project Structure

### Documentation (this feature)

```text
specs/003-ts-reverse-loop/
├── plan.md              # This file
├── research.md          # Phase 0
├── data-model.md        # Phase 1
├── quickstart.md        # Phase 1
├── contracts/           # reverse-count-schema.md
├── spec.md
├── tasks.md             # Phase 2 (/speckit-tasks)
└── checklists/
    └── requirements.md
```

### Source Code (repository root)

```text
codalith-testing/
├── package.json         # NEW — scripts + devDependencies
├── tsconfig.json        # NEW — minimal TS config
├── src/
│   └── reverseCount.ts  # NEW — feature deliverable
├── README.md
├── scripts/
│   └── validate.sh      # Existing (unchanged)
└── specs/
    └── 003-ts-reverse-loop/
```

**Structure Decision**: Introduce a minimal `src/` tree for TypeScript source. No `tests/`
directory in v1 unless extended later. Tooling at repo root matches single-package repos.

## Complexity Tracking

> No violations — table not applicable.
