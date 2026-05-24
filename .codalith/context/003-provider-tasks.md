---
description: "Task list for Add test.md Marker File"
---

# Tasks: Add test.md Marker File

**Input**: Design documents from `/specs/002-add-test-md/`  
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/test-md-schema.md, quickstart.md

**Tests**: Not requested in spec — manual verification only (per plan.md and quickstart.md).

**Organization**: Single user story (P1). MVP = Phase 3 only after minimal setup.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Maps to user story in spec.md (US1)

## Path Conventions

- **Repository root**: `test.md`, `README.md`, `scripts/validate.sh`
- **Feature docs**: `specs/002-add-test-md/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirm environment and load design constraints before writing `test.md`

- [ ] T001 Verify repository root contains `README.md` per `specs/002-add-test-md/plan.md` structure
- [ ] T002 [P] Review date and model conventions in `specs/002-add-test-md/research.md`
- [ ] T003 [P] Review required field schema in `specs/002-add-test-md/contracts/test-md-schema.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Confirm deliverable path and entity rules before user story implementation

**⚠️ CRITICAL**: No user story work until this phase is complete

- [ ] T004 Confirm `MarkerFile` entity rules in `specs/002-add-test-md/data-model.md` apply to `test.md` at repository root
- [ ] T005 Check whether `test.md` exists at repository root and note overwrite vs create intent per spec edge cases

**Checkpoint**: Target path `test.md` at repository root is confirmed; ready to write file

---

## Phase 3: User Story 1 - Create verifiable marker file (Priority: P1) 🎯 MVP

**Goal**: Deliver `test.md` at repository root with placeholder prose, ISO date, and LLM model name

**Independent Test**: Open `test.md` at repository root and confirm placeholder text (≥20 chars), `Date: YYYY-MM-DD`, and `Model: <name>` are present and labeled (spec.md acceptance scenarios 1–4)

### Implementation for User Story 1

- [ ] T006 [US1] Create or overwrite `test.md` at repository root with Markdown structure per `specs/002-add-test-md/contracts/test-md-schema.md`
- [ ] T007 [US1] Add placeholder prose (≥20 characters, not copied from `README.md` or spec docs) to `test.md` at repository root
- [ ] T008 [US1] Add `Date: YYYY-MM-DD` labeled field to `test.md` at repository root using generation-day calendar date
- [ ] T009 [US1] Add `Model: Composer` (or `Model: unknown` fallback) labeled field to `test.md` at repository root

**Checkpoint**: User Story 1 complete — `test.md` satisfies FR-001 through FR-005 and contract rules C-001 through C-004

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Validate deliverable against quickstart and existing smoke script

- [ ] T010 Run manual verification steps in `specs/002-add-test-md/quickstart.md` against `test.md` at repository root
- [ ] T011 [P] Run `scripts/validate.sh` from repository root and confirm smoke output passes

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately
- **Foundational (Phase 2)**: Depends on Phase 1 — blocks User Story 1
- **User Story 1 (Phase 3)**: Depends on Phase 2 — sequential tasks T006→T009 (same file)
- **Polish (Phase 4)**: Depends on Phase 3 completion

### User Story Dependencies

- **User Story 1 (P1)**: Only story in scope; no cross-story dependencies

### Within User Story 1

```text
T006 (create file + structure)
  → T007 (placeholder prose)
  → T008 (date field)
  → T009 (model field)
```

### Parallel Opportunities

| Phase | Parallel tasks |
|-------|----------------|
| Phase 1 | T002 and T003 (different doc files) |
| Phase 4 | T010 and T011 (verification vs script — independent) |

No parallel tasks within Phase 3 (all modify `test.md`).

---

## Parallel Example: Phase 1

```bash
# Can review design docs concurrently:
Task T002: Read specs/002-add-test-md/research.md
Task T003: Read specs/002-add-test-md/contracts/test-md-schema.md
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001–T003)
2. Complete Phase 2: Foundational (T004–T005)
3. Complete Phase 3: User Story 1 (T006–T009)
4. **STOP and VALIDATE**: Run quickstart checks on `test.md`
5. Optional: Phase 4 polish (T010–T011)

### Incremental Delivery

This feature has a single P1 story — MVP and full delivery are the same scope.

### Suggested implementer flow

1. Execute T001–T005 (read-only confirmation)
2. Write `test.md` in one pass (T006–T009 may be combined by `/speckit-implement`)
3. Validate with T010–T011

---

## Notes

- Current git branch is `main`; feature directory pinned via `.specify/feature.json` → `specs/002-add-test-md`
- No automated test tasks — spec waives TDD for v1
- T006–T009 target the same file; implementer may complete in a single edit if all contract rules are met
- Commit after Phase 3 or after full validation in Phase 4
