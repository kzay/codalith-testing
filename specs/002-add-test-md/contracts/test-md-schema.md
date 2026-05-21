# Contract: test.md Marker File Schema

**Version**: 1.0.0  
**Feature**: `002-add-test-md`  
**Consumer**: Operators, Codalith smoke tests, implementing agents

## Purpose

Defines the required structure of `test.md` at the repository root so implementers and
validators share a single contract without referencing application code.

## File location

```
<repository-root>/test.md
```

## Required sections

The file MUST contain all of the following, in any order, with clear labels:

### 1. Placeholder content

- **Label**: Optional heading (e.g., `# Test marker`) or unlabeled opening paragraph.
- **Content**: Arbitrary prose, minimum 20 characters.
- **Constraint**: MUST NOT duplicate `README.md` or spec/plan text verbatim.

### 2. Generation date

- **Label**: `Date:` (prefix) or `## Date` (heading) with value on same or next line.
- **Format**: `YYYY-MM-DD` (ISO 8601 calendar date).
- **Example**: `Date: 2026-05-20`

### 3. LLM model

- **Label**: `Model:` (prefix) or `## Model` (heading) with value on same or next line.
- **Content**: Non-empty model identifier string.
- **Example**: `Model: Composer`
- **Fallback**: `Model: unknown` when model cannot be determined.

## Example (normative shape)

```markdown
# Test marker

The purple walrus danced at midnight while compilers dreamed of lint-free Mondays.

Date: 2026-05-20
Model: Composer
```

## Validation rules

| Rule ID | Rule |
|---------|------|
| C-001 | File exists at repository root |
| C-002 | Placeholder text length ≥ 20 characters |
| C-003 | Date matches `^\d{4}-\d{2}-\d{2}$` and is labeled |
| C-004 | Model is labeled and non-empty |
| C-005 | No external network or credentials required to produce file |

## Out of scope

- JSON or YAML alternate formats
- Automated CI enforcement (may be added later)
- Versioning or checksum fields
