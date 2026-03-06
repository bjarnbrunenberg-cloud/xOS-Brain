# Airtable MCP — Experimentation Repository

## Connection

- **Package:** `mcp-remote` (proxies to remote MCP server)
- **Server URL:** `https://airtable-mcp.business-automated.com/mcp-server/z2QiuB8kBaMOynM4m-aiUfCQV1YZ1d/mcp`
- **Auth:** Airtable Personal Access Token configured server-side. No local env vars needed.
- **Config:** `.mcp.json` in project root

## Base & Tables

| Name | ID |
|------|----|
| **Base:** Brand Name - Playground | `appm8QVmsCa4UeKzK` |
| **Table:** Experiment Log | `tblQ6aHdfrZszZRy6` |
| **Table:** Sprints | `tblMVLckpavuWYG3Q` |

---

## Experiment Log — Field Reference (44 fields)

### Group 1: Identity & Routing

| # | Field Name | API Type | Notes |
|---|-----------|----------|-------|
| 1 | Exp name | formula | **Read-only.** Auto: `"EXP-" & {ID} & " | " & {Short name}` |
| 2 | ID | autoNumber | **Read-only.** Auto-increments |
| 3 | Short name | singleLineText | User-entered experiment name |
| 4 | Action Type | singleSelect | Values: `Experiment`, `Optimisation` |
| 5 | Status | singleSelect | Values: `Draft`, `Backlog`, `To Do`, `In Progress`, `Running`, `Done`, `Parked` |
| 6 | Category | singleSelect | Values: `Acquisition`, `Activation`, `Revenue`, `Retention`, `Referral` |

### Group 2: Ideation

| # | Field Name | API Type | Notes |
|---|-----------|----------|-------|
| 7 | Problem/Opportunity | multilineText | |
| 8 | Proposed Solution | richText | |
| 9 | Supporting Data/Research | multilineText | |
| 10 | Hypothesis | richText | |
| 11 | Primary Goal | singleLineText | |
| 12 | Page | multipleSelects | **Pass as array:** `["Cart", "PDP"]` |
| 13 | Device type | singleSelect | Values: `All`, `Desktop`, `Mobile` |
| 14 | Country | multipleSelects | **Pass as array:** `["NL", "DE"]` |

### Group 3: PXL Ranking

| # | Field Name | API Type | Notes |
|---|-----------|----------|-------|
| 15 | Above fold? (0/1) | number | **NOT checkbox.** Pass `0` or `1` |
| 16 | Noticeable in 5 sec? (0/1) | number | **NOT checkbox.** Pass `0` or `1` |
| 17 | Adding/removing element? (0/1) | number | **NOT checkbox.** Pass `0` or `1` |
| 18 | Increases motivation? (0/1) | number | **NOT checkbox.** Pass `0` or `1` |
| 19 | High traffic page? (0/1) | number | **NOT checkbox.** Pass `0` or `1` |
| 20 | Research backing | number | Range: 0-6. 1 point per source (user testing, analytics, qualitative, heatmaps, survey, A/B test) |
| 21 | Ease of implementation | number | Range: 0-3. (<4h=3, <8h=2, <2d=1, >2d=0) |
| 22 | Prio PXL | formula | **Read-only.** Sum of PXL fields. Max: 12 |

### Group 4: Execution

| # | Field Name | API Type | Notes |
|---|-----------|----------|-------|
| 23 | Start date | date | ISO format: `2026-03-01` |
| 24 | End date | date | ISO format |
| 25 | Running Time (days) | formula | **Read-only.** `DATETIME_DIFF({End date}, {Start date}, 'days')` |
| 26 | Assigned To | singleCollaborator | **Pass as object:** `{"id": "usr07BCjdHQuPCxof"}` (Bjarn) |
| 27 | Design | url | Figma/design link |
| 28 | Test doc | url | Google Doc/test plan link |
| 29 | Control - design | attachment | Screenshot — skip in API (needs URL) |
| 30 | Variant - design | attachment | Screenshot — skip in API (needs URL) |
| 31 | Stakeholder overview screenshot | attachment | Screenshot — skip in API (needs URL) |
| 32 | Sprint | multipleRecordLinks | **Pass as array of record IDs:** `["recX3K395ArlkVEHG"]` |

### Group 5: Results & Impact

| # | Field Name | API Type | Notes |
|---|-----------|----------|-------|
| 33 | Result | singleSelect | Values: `Win`, `Learn (loss)`, `Inconclusive`, `Error` |
| 34 | Action Taken | singleSelect | Values: `Implement`, `Iterate`, `Abandon`, `No Action` |
| 35 | Observed Uplift % | percent | **Pass as decimal:** `0.082` = 8.2% |
| 36 | Statistical Significance | percent | **Pass as decimal:** `0.95` = 95% |
| 37 | Baseline Monthly Revenue | currency | **Pass as number:** `45000` = €45,000 |
| 38 | Annualised Impact | formula | **Read-only.** `{Baseline Monthly Revenue} * {Observed Uplift %} * 12` |

### Group 6: Learnings

| # | Field Name | API Type | Notes |
|---|-----------|----------|-------|
| 39 | Learnings & Results | richText | |
| 40 | Next Steps | richText | |

### Group 7: Quality & Meta

| # | Field Name | API Type | Notes |
|---|-----------|----------|-------|
| 41 | Created time | createdTime | **Read-only** |
| 42 | Last Modified | lastModifiedTime | **Read-only** |
| 43 | Created Month | formula | **Read-only.** `DATETIME_FORMAT({Created time}, 'YYYY-MM')` |
| 44 | Quality Score | formula | **Read-only.** Percentage based on 5 checks (Problem, Hypothesis, Goal, Data, Learnings) |

---

## Select Field Values (Quick Reference)

| Field | Values |
|-------|--------|
| Status | `Draft`, `Backlog`, `To Do`, `In Progress`, `Running`, `Done`, `Parked` |
| Result | `Win`, `Learn (loss)`, `Inconclusive`, `Error` |
| Category | `Acquisition`, `Activation`, `Revenue`, `Retention`, `Referral` |
| Action Type | `Experiment`, `Optimisation` |
| Action Taken | `Implement`, `Iterate`, `Abandon`, `No Action` |
| Device type | `All`, `Desktop`, `Mobile` |

---

## Formula Fields (Read-Only — Do Not Write)

| Field | Formula |
|-------|---------|
| Exp name | `"EXP-" & {ID} & " \| " & {Short name}` |
| Prio PXL | Sum of 5 binary PXL fields + Research backing + Ease |
| Quality Score | `ROUND((checks_filled / 5) * 100, 0)` — 5 checks: Problem, Hypothesis, Goal, Data, Learnings |
| Running Time (days) | `DATETIME_DIFF({End date}, {Start date}, 'days')` |
| Annualised Impact | `{Baseline Monthly Revenue} * {Observed Uplift %} * 12` |
| Created Month | `DATETIME_FORMAT({Created time}, 'YYYY-MM')` |

---

## Views (10 total)

### Workflow Views
| View | Filter |
|------|--------|
| Step 1 - Ideation | Status = "Draft" |
| Step 2 - Ranking | Status = "Backlog", sorted by PXL desc |
| Step 3 - Grooming | Status IN (Backlog, To Do), sorted by PXL |
| Step 4 - Sprint | Status IN (To Do, In Progress) |

### Operational Views
| View | Filter |
|------|--------|
| Running | Status = "Running" |
| Results | Status = "Done" |
| Results Gallery | Status = "Done", grouped by Result |
| All Learnings | Status = "Done" + Learnings filled |
| Archive | Status = "Parked" |
| Master | No filter — all records, all fields |

---

## Sprints Table (`tblMVLckpavuWYG3Q`)

### Fields
| Field | Type |
|-------|------|
| Sprint Name | singleLineText — `Sprint NN \| WX-Y` |
| Start Date | date |
| End Date | date |
| Quarter | singleSelect — Q1-Q4 2026 |
| Experiments | multipleRecordLinks → Experiment Log |

### Sprint Record IDs (for linking)

| Sprint | Record ID | Start | End |
|--------|-----------|-------|-----|
| Sprint 01 \| W2-3 | `recQU1hnV5pEYgm6L` | 2026-01-05 | 2026-01-16 |
| Sprint 02 \| W4-5 | `recGDsBFSCu1aNIop` | 2026-01-19 | 2026-01-30 |
| Sprint 03 \| W6-7 | `recnGCQQqXBQvqKGi` | 2026-02-02 | 2026-02-13 |
| Sprint 04 \| W8-9 | `recyOSqBRwvate5ZY` | 2026-02-16 | 2026-02-27 |
| Sprint 05 \| W10-11 | `recX3K395ArlkVEHG` | 2026-03-02 | 2026-03-13 |
| Sprint 06 \| W12-13 | `recHyiWvMTDJlVg8j` | 2026-03-16 | 2026-03-27 |
| Sprint 07 \| W14-15 | `recXSlMzrNnthSrWf` | 2026-03-30 | 2026-04-10 |
| Sprint 08 \| W16-17 | `recE8v7vYGlxpO1hn` | 2026-04-13 | 2026-04-24 |
| Sprint 09 \| W18-19 | `recoqKJEaAU39mvex` | 2026-04-27 | 2026-05-08 |
| Sprint 10 \| W20-21 | `recJi6h12g4PnDtGX` | 2026-05-11 | 2026-05-22 |
| Sprint 11 \| W22-23 | `recDJcbZLXp9tXx59` | 2026-05-25 | 2026-06-05 |
| Sprint 12 \| W24-25 | `recFgf0JWWkfZjV0N` | 2026-06-08 | 2026-06-19 |
| Sprint 13 \| W26-27 | `recNX1s75vBhNQAR2` | 2026-06-22 | 2026-07-03 |
| Sprint 14 \| W28-29 | `recapVzCwMGqHj4gx` | 2026-07-06 | 2026-07-17 |
| Sprint 15 \| W30-31 | `recSyHOFU4oNQQqTD` | 2026-07-20 | 2026-07-31 |
| Sprint 16 \| W32-33 | `recw2RjNpKCfzuL8X` | 2026-08-03 | 2026-08-14 |
| Sprint 17 \| W34-35 | `recNy9eWoigbxz80s` | 2026-08-17 | 2026-08-28 |
| Sprint 18 \| W36-37 | `recj9I3Oq61ORfqTp` | 2026-08-31 | 2026-09-11 |
| Sprint 19 \| W38-39 | `recSLjdUGPPBPnZLV` | 2026-09-14 | 2026-09-25 |
| Sprint 20 \| W40-41 | `recHy5fTiLc3CWmyp` | 2026-09-28 | 2026-10-09 |
| Sprint 21 \| W42-43 | `rectxYFQnwRKG3nfC` | 2026-10-12 | 2026-10-23 |
| Sprint 22 \| W44-45 | `rechfjXs39NXZrEvy` | 2026-10-26 | 2026-11-06 |
| Sprint 23 \| W46-47 | `recFUfOxlZx1Oivag` | 2026-11-09 | 2026-11-20 |
| Sprint 24 \| W48-49 | `recjVCy6tBgTWZQ6g` | 2026-11-23 | 2026-12-04 |
| Sprint 25 \| W50-51 | `recEtxuBOAD77Gv1C` | 2026-12-07 | 2026-12-18 |
| Sprint 26 \| W52-1 | `reclxD5tlL8kxKlZG` | 2026-12-21 | 2027-01-01 |

---

## API Patterns

### Create a record
```
Tool: mcp__claude_ai_Airtable__create_record
base_id: appm8QVmsCa4UeKzK
table_id: tblQ6aHdfrZszZRy6
fields: { "Short name": "...", "Status": "Draft", ... }
```
**Limit:** 1 record per API call.

### Update record(s)
```
Tool: mcp__claude_ai_Airtable__update_records
base_id: appm8QVmsCa4UeKzK
table_id: tblQ6aHdfrZszZRy6
records: [{ "id": "recXXX", "fields": { "Status": "Running" } }]
```

### List records
```
Tool: mcp__claude_ai_Airtable__list_records
base_id: appm8QVmsCa4UeKzK
table_id: tblQ6aHdfrZszZRy6
```

### Delete records
```
Tool: mcp__claude_ai_Airtable__delete_records
base_id: appm8QVmsCa4UeKzK
table_id: tblQ6aHdfrZszZRy6
record_ids: ["recXXX", "recYYY"]
```
**Limit:** Max 10 records per call.

### Search records
```
Tool: mcp__claude_ai_Airtable__search_records
base_id: appm8QVmsCa4UeKzK
table_id: tblQ6aHdfrZszZRy6
search_term: "checkout"
```

---

## Troubleshooting

- If tools don't appear, restart Claude Code to reload MCP servers
- If connection fails, verify the server URL is reachable
- PXL fields are NUMBER type named `Above fold? (0/1)` etc. — if you get errors, check the exact field name including the `(0/1)` suffix
- Attachment fields (Control/Variant/Stakeholder screenshots) require URLs — cannot create from local files
