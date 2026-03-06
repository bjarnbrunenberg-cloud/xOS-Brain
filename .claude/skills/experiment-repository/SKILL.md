---
name: Experiment Repository
description: Query, create, update, and analyse experiments in the Airtable Experimentation Repository. The central data layer for all xOS modules.
allowed-tools:
  - Read
  - Grep
  - Glob
  - mcp__airtable__*
  - mcp__claude_ai_Airtable__*
---

# Experiment Repository Skill

> The Learning Repository — xOS Module 7. Central hub for all experiment data, patterns, and velocity tracking.

---

## Trigger Patterns

Activate this skill when the user asks about:
- Querying experiments ("show me", "find", "list", "search experiments")
- Creating experiments ("create experiment", "add to backlog", "new idea")
- Updating experiments ("update status", "move to running", "mark as done")
- Experiment velocity ("how many tests", "win rate", "velocity", "throughput")
- Finding patterns ("similar tests", "what worked for checkout", "category trends")
- Deleting experiments ("remove", "delete", "clean up")

---

## Context Loading

Before any Airtable operation, read:
1. `${CLAUDE_SKILL_DIR}/references/field-reference.md` — exact field names and types
2. `.claude/mcps/airtable.md` — base/table IDs, API patterns, sprint IDs

---

## Operation Routing

| Request | Airtable Tool | Key Parameters |
|---------|--------------|----------------|
| Query/list experiments | `list_records` | base_id, table_id, optional view filter |
| Search by keyword | `search_records` | search_term |
| Create new experiment | `create_record` | fields object (see field reference) |
| Update experiment(s) | `update_records` | records array with id + fields |
| Delete experiment(s) | `delete_records` | record_ids array (max 10 per call) |
| Get single experiment | `get_record` | record_id |

---

## Creating an Experiment

### Minimum fields for each status

| Status | Required Fields |
|--------|----------------|
| Draft | Short name, Category, Action Type, Page, Problem/Opportunity, Proposed Solution |
| Backlog | + Supporting Data/Research, Primary Goal, all 7 PXL fields, Device type |
| To Do | + Hypothesis, Assigned To, Sprint, Country |
| In Progress | + Start date, Design, Test doc |
| Running | + End date (projected) |
| Done | + Result, Action Taken, Observed Uplift %, Statistical Significance, Baseline Monthly Revenue, Learnings & Results, Next Steps |

### Quality Checks

Before creating a record, verify:
- [ ] Short name is descriptive (3-8 words)
- [ ] Category matches AARRR framework
- [ ] Problem/Opportunity is data-backed, not opinion
- [ ] If Hypothesis included: follows the template format
- [ ] PXL fields are all populated if Status = Backlog or later

---

## Status Transitions

```
Draft → Backlog → To Do → In Progress → Running → Done
                                                    ↑
Any status ───────────────────────────────────────→ Parked
```

When updating status, also update:
- Draft → Backlog: ensure PXL fields are populated
- Backlog → To Do: ensure Sprint and Assigned To are set
- To Do → In Progress: ensure Start date is set
- In Progress → Running: ensure End date is set
- Running → Done: ensure Result, Action Taken, Learnings & Results are set

---

## Velocity Queries

| Metric | How to Calculate |
|--------|-----------------|
| Ideas per month | Count all records grouped by Created Month |
| Tests launched/month | Count records where Start date falls in month |
| Tests concluded/month | Count records where Status = "Done" grouped by End date month |
| Win rate | Count(Result = "Win") / Count(Status = "Done") |
| Conclusive rate | Count(Win + Loss) / Count(Done) |
| Decision rate | Count(Action Taken ≠ empty) / Count(Done) |
| Revenue attributed | SUM(Annualised Impact) where Result = "Win" |
| Avg quality score | AVG(Quality Score) across all or by month |

---

## Output Format

When presenting experiments, always include:
- **Record ID** (e.g., `recXXX`)
- **Experiment Name** (e.g., `EXP-72 | Mobile sticky add-to-cart button`)
- **Status** and **Category**
- **PXL Score** (if available)
- **Result** and **Annualised Impact** (if Done)

---

## Behavioural Rules

1. Always read the field reference before the first Airtable call in a session
2. Present results in conversation before writing to Airtable
3. Ask before creating or updating records
4. Verify writes by listing the affected record(s) after each operation
5. British English in all outputs
