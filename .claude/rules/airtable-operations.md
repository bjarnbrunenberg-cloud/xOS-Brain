---
paths:
  - ".claude/skills/experiment-repository/**"
  - ".claude/agents/experiment-ops.md"
---

# Airtable Operation Rules

## Before Any Airtable Operation

Read `.claude/mcps/airtable.md` if you haven't already in this session. Field names are case-sensitive and some have non-obvious types.

## Field Type Gotchas

| Field | Type | Common Mistake | Correct Format |
|-------|------|---------------|----------------|
| PXL checkbox fields | number | Passing `true`/`false` | Pass `0` or `1` |
| PXL field names | — | Missing `(0/1)` suffix | `Above fold? (0/1)` |
| Assigned To | singleCollaborator | Passing string | `{"id": "usr07BCjdHQuPCxof"}` |
| Page, Country | multipleSelects | Passing string | `["NL", "DE"]` |
| Sprint | multipleRecordLinks | Passing string | `["recX3K395ArlkVEHG"]` |
| Observed Uplift % | percent | Passing `8.2` | Pass `0.082` for 8.2% |
| Statistical Significance | percent | Passing `95` | Pass `0.95` for 95% |
| Baseline Monthly Revenue | currency | Adding currency symbol | Pass number: `45000` |
| Formula fields | formula | Trying to write | **Read-only** — never include in create/update |

## Formula Fields (Never Write)

These are auto-calculated. Never include them in `fields` when creating or updating:
- `Exp name`
- `Prio PXL`
- `Quality Score`
- `Running Time (days)`
- `Annualised Impact`
- `Created Month`
- `Created time`
- `Last Modified`
- `ID`

## Batch Limits

| Operation | Limit |
|-----------|-------|
| Create | 1 record per API call |
| Delete | Max 10 record IDs per call |
| Update | Multiple records per call (include record ID + fields) |
| List | Returns paginated results |

## Error Handling

- **Field not found:** Check exact field name in airtable.md (case-sensitive, includes special characters)
- **Record not found:** Verify record ID starts with `rec`
- **Invalid field value:** Check type mapping above
- **Rate limited:** Wait and retry

## After Every Write Operation

Verify success by listing the affected record(s) and confirming the values are correct.
