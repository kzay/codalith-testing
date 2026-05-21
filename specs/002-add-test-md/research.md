# Research: Add test.md Marker File

**Feature**: `002-add-test-md`  
**Date**: 2026-05-20

## Unknowns from Technical Context

No `NEEDS CLARIFICATION` items remained after reading the feature spec. All technical
choices are resolved below.

---

## Decision 1: File location

**Decision**: `test.md` at repository root (same directory as `README.md`).

**Rationale**: Matches FR-001 and spec assumptions; maximizes visibility for smoke-test
operators.

**Alternatives considered**:
- `specs/002-add-test-md/test.md` — rejected; spec explicitly requires repo root.
- `docs/test.md` — rejected; adds directory not present in current layout.

---

## Decision 2: Date format and timezone

**Decision**: ISO 8601 calendar date `YYYY-MM-DD` with label `Date:`; use the calendar
day of the generation run in the operator/agent environment (local date acceptable).

**Rationale**: Spec FR-003 and edge-case guidance; human-readable and unambiguous.

**Alternatives considered**:
- Full ISO 8601 datetime — rejected; spec asks for date only.
- UTC-only — rejected as default; local date acceptable per spec edge cases.

---

## Decision 3: Model identifier source

**Decision**: Record the implementing agent's model name at write time (e.g., `Composer`);
use literal `unknown` only if the model cannot be determined.

**Rationale**: Satisfies FR-004 and SC-004 for audit trails.

**Alternatives considered**:
- Omit model field — rejected; violates FR-004.
- Hard-code a generic label — rejected; reduces audit value.

---

## Decision 4: “Random text” interpretation

**Decision**: Include one or more sentences of arbitrary placeholder prose (≥20
characters), not cryptographically random data; content must not be copied from existing
project docs.

**Rationale**: Aligns with spec Assumptions and FR-002.

**Alternatives considered**:
- `uuidgen` / random hex blob — rejected; not human-readable Markdown.
- Empty file with metadata only — rejected; violates FR-002 minimum length.

---

## Decision 5: Implementation mechanism

**Decision**: Direct file write by agent or operator during `/speckit-implement`; no
build tooling or code generation pipeline.

**Rationale**: Repository has no application runtime; feature scope is a single artifact.

**Alternatives considered**:
- PowerShell generator script — rejected; YAGNI for one static file.
- Extend `scripts/validate.sh` to assert fields — optional future enhancement, not required for v1.
