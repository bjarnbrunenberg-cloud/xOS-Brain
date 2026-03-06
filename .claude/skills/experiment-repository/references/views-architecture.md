# Experiment Log — Views Architecture

## Workflow Views (4-step process)

| View | Filter | Sort | Key Columns |
|------|--------|------|-------------|
| Step 1 - Ideation | Status = "Draft" | Created (newest first) | Short Name, Problem, Solution, Category, Page |
| Step 2 - Ranking | Status = "Backlog" | PXL Score desc | + All PXL fields, PXL Score |
| Step 3 - Grooming | Status IN (Backlog, To Do) | PXL Score desc | + Hypothesis, Primary Goal, Assigned To |
| Step 4 - Sprint | Status IN (To Do, In Progress) | Sprint, Start date | + Start Date, Design, Test Doc |

## Operational Views

| View | Type | Filter | Notes |
|------|------|--------|-------|
| Running | Grid | Status = "Running" | Active experiments |
| Results | Grid | Status = "Done" | All concluded experiments |
| Results Gallery | Gallery | Status = "Done", grouped by Result | Cover: Variant design screenshot |
| All Learnings | Grid | Status = "Done" + Learnings filled | Learning extraction |
| Archive | Grid | Status = "Parked" | Deprioritised experiments |
| Master | Grid | No filter | All records, all fields visible |
