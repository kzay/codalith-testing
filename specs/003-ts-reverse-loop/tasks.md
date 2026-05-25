---
description: "Task list for TypeScript reverse count iterator feature"
---

# Tasks: TypeScript Reverse Count Iterator

**Input**: Design documents from `/specs/003-ts-reverse-loop/`  
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: Not requested in spec — manual verification via quickstart only.

**Organization**: Tasks grouped by user story for independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Minimal TypeScript/Node toolchain for the repository

- [ ] T001 Create `src/` directory at repository root
- [ ] T002 Add `package.json` with `typescript` and `tsx` devDependencies and a `start` script pointing to `src/reverseCount.ts` in repository root
- [ ] T003 [P] Add `tsconfig.json` with ES module settings suitable for Node 18+ in repository root

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Shared module skeleton before story-specific behavior

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T004 Create `src/reverseCount.ts` with exported function stub `buildReverseCountSequence()` returning empty array in `src/reverseCount.ts`

**Checkpoint**: Module file exists and exports the contract symbol name

---

## Phase 3: User Story 1 - Produce reverse count sequence (Priority: P1) 🎯 MVP

**Goal**: Generate and display integers 10 down to 0 inclusive via a descending loop

**Independent Test**: Run `npx tsx src/reverseCount.ts` and confirm stdout shows
`10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0`

### Implementation for User Story 1

- [ ] T005 [US1] Implement descending loop (10 to 0 inclusive) in `buildReverseCountSequence()` in `src/reverseCount.ts`
- [ ] T006 [US1] Add direct-run entry point that prints comma-separated sequence to stdout in `src/reverseCount.ts`

**Checkpoint**: User Story 1 fully functional via entry-point execution

---

## Phase 4: User Story 2 - Reuse sequence from other code (Priority: P2)

**Goal**: Allow other TypeScript files to import the sequence without duplicating loop logic

**Independent Test**: Import `buildReverseCountSequence` and verify return value equals
`[10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]`

### Implementation for User Story 2

- [ ] T007 [US2] Ensure `buildReverseCountSequence()` returns a new array instance on each call in `src/reverseCount.ts`
- [ ] T008 [P] [US2] Add npm script `verify:sequence` in `package.json` that runs a one-liner import assert per `specs/003-ts-reverse-loop/quickstart.md`

**Checkpoint**: Import and programmatic verification both succeed

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Documentation and validation alignment

- [ ] T009 [P] Add feature note and run instructions to `README.md` referencing `specs/003-ts-reverse-loop/quickstart.md`
- [ ] T010 Run quickstart verification steps in `specs/003-ts-reverse-loop/quickstart.md` and confirm SC-001–SC-004 pass

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately
- **Foundational (Phase 2)**: Depends on Phase 1 — blocks user stories
- **User Story 1 (Phase 3)**: Depends on Phase 2
- **User Story 2 (Phase 4)**: Depends on Phase 3 (export must return correct sequence)
- **Polish (Phase 5)**: Depends on Phases 3–4

### User Story Dependencies

- **User Story 1 (P1)**: No dependency on User Story 2 — MVP complete after Phase 3
- **User Story 2 (P2)**: Builds on US1 export; independently testable via import

### Parallel Opportunities

- T003 can run in parallel with T002 after T001
- T008 and T009 can run in parallel after US1/US2 implementation

---

## Parallel Example: Setup

```bash
# After T001, in parallel:
Task T002: "Add package.json in repository root"
Task T003: "Add tsconfig.json in repository root"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: `npx tsx src/reverseCount.ts`
5. Demo if ready

### Incremental Delivery

1. Setup + Foundational → toolchain ready
2. User Story 1 → runnable reverse output (MVP)
3. User Story 2 → import + verify script
4. Polish → README + full quickstart pass

---

## Notes

- Total tasks: 10
- User Story 1 tasks: 2 (T005–T006)
- User Story 2 tasks: 2 (T007–T008)
- Suggested MVP scope: Phases 1–3 (T001–T006)
- All tasks include explicit file paths per checklist format
