# Experiment Log — Field Reference

Quick-access reference for exact API field names and types. For full documentation see `.claude/mcps/airtable.md`.

## Identity & Routing
| Field | Type | Writable | Values |
|-------|------|----------|--------|
| Short name | singleLineText | Yes | |
| Action Type | singleSelect | Yes | `Experiment`, `Optimisation` |
| Status | singleSelect | Yes | `Draft`, `Backlog`, `To Do`, `In Progress`, `Running`, `Done`, `Parked` |
| Category | singleSelect | Yes | `Acquisition`, `Activation`, `Revenue`, `Retention`, `Referral` |

## Ideation
| Field | Type | Writable |
|-------|------|----------|
| Problem/Opportunity | multilineText | Yes |
| Proposed Solution | richText | Yes |
| Supporting Data/Research | multilineText | Yes |
| Hypothesis | richText | Yes |
| Primary Goal | singleLineText | Yes |
| Page | multipleSelects | Yes — pass as array |
| Device type | singleSelect | Yes — `All`, `Desktop`, `Mobile` |
| Country | multipleSelects | Yes — pass as array |

## PXL Ranking
| Field | Type | Writable | Format |
|-------|------|----------|--------|
| Above fold? (0/1) | number | Yes | `0` or `1` |
| Noticeable in 5 sec? (0/1) | number | Yes | `0` or `1` |
| Adding/removing element? (0/1) | number | Yes | `0` or `1` |
| Increases motivation? (0/1) | number | Yes | `0` or `1` |
| High traffic page? (0/1) | number | Yes | `0` or `1` |
| Research backing | number | Yes | `0`-`6` |
| Ease of implementation | number | Yes | `0`-`3` |

## Execution
| Field | Type | Writable | Format |
|-------|------|----------|--------|
| Start date | date | Yes | `2026-03-01` |
| End date | date | Yes | `2026-03-15` |
| Assigned To | singleCollaborator | Yes | `{"id": "usr07BCjdHQuPCxof"}` |
| Design | url | Yes | |
| Test doc | url | Yes | |
| Sprint | multipleRecordLinks | Yes | `["recX3K395ArlkVEHG"]` |

## Results & Impact
| Field | Type | Writable | Format |
|-------|------|----------|--------|
| Result | singleSelect | Yes | `Win`, `Learn (loss)`, `Inconclusive`, `Error` |
| Action Taken | singleSelect | Yes | `Implement`, `Iterate`, `Abandon`, `No Action` |
| Observed Uplift % | percent | Yes | `0.082` = 8.2% |
| Statistical Significance | percent | Yes | `0.95` = 95% |
| Baseline Monthly Revenue | currency | Yes | `45000` = €45,000 |

## Learnings
| Field | Type | Writable |
|-------|------|----------|
| Learnings & Results | richText | Yes |
| Next Steps | richText | Yes |

## Read-Only Formula Fields
- `Exp name`, `ID`, `Prio PXL`, `Quality Score`, `Running Time (days)`, `Annualised Impact`, `Created Month`, `Created time`, `Last Modified`
