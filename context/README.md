# Context Layer — Client-Specific Data

This folder contains client-specific context that xOS skills read before generating content. The Operating Engine (skills, agents, rules) is generic — this folder makes it specific to a client engagement.

## What Goes Here

| File | Content | Used By |
|------|---------|---------|
| `goals.md` | Client OKRs, business goals, north star metric | strategic-alignment, hypothesis-factory |
| `kpis.md` | Current KPI structure, metric definitions, baselines | strategic-alignment, experiment-designer |
| `brand.md` | Brand guidelines, tone of voice, visual identity | report-generator |
| `audience.md` | Target audience segments, personas, user research | hypothesis-factory, experiment-designer |
| `tech-stack.md` | Testing tools (VWO, Optimizely), analytics setup, CMS | experiment-designer, experiment-monitor |
| `sef.md` | Strategic Experimentation Framework specifics | all skills |

## Rules

- Files in this folder are READ by skills, not written automatically
- Update these files when starting a new client engagement
- If a file doesn't exist, skills will ask the user for the information
- Keep files concise — goals and KPIs, not full strategy documents
