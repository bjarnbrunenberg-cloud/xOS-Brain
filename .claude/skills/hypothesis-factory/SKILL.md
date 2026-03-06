---
name: Hypothesis Factory
description: Generate statistically valid experiment hypotheses with proper structure, PXL scoring, and Airtable-ready output
allowed-tools:
  - Read
  - Grep
  - Glob
  - mcp__airtable__*
  - mcp__claude_ai_Airtable__*
---

# Hypothesis Factory Skill

> xOS Module 2 — Transform observations and data into structured, falsifiable experiment hypotheses.

---

## Trigger Patterns

Activate this skill when the user asks about:
- Writing or generating a hypothesis
- Turning an idea/observation into a testable experiment
- Reviewing hypothesis quality
- PXL scoring an experiment idea
- Creating an experiment from a problem statement

---

## Context Loading

Before generating hypotheses, read:
1. `${CLAUDE_SKILL_DIR}/references/hypothesis-examples.md` — templates and examples
2. `.claude/rules/experimentation-standards.md` — quality criteria and PXL rules
3. `context/` folder — client goals, KPIs, audience segments (if exists)

---

## Hypothesis Framework

### The Template

> **Because** [observation/data], **we believe that** [change] **will cause** [expected outcome] **for** [audience], **which we will measure by** [metric].

### 5-Element Checklist

Every hypothesis MUST have:
- [ ] **Observation** — what data or research prompted this?
- [ ] **Change** — what specific modification are we making?
- [ ] **Expected outcome** — what will happen, directionally? (increase/decrease by X%)
- [ ] **Audience** — who is affected? (all users, mobile users, NL market, etc.)
- [ ] **Metric** — how will we measure success?

### Quality Gate

**REJECT** any hypothesis that:
- Has no data backing ("we think users might prefer...")
- Doesn't specify a measurable, directional outcome
- Doesn't define the target audience
- Doesn't name a specific, trackable metric
- Is too vague to be falsifiable

---

## Workflow: Idea → Hypothesis → Airtable Record

### Step 1: Understand the Problem
Ask for or identify:
- What page/area is affected?
- What data shows this is a problem? (analytics, user testing, surveys, heatmaps)
- What is the current metric baseline?
- Who is affected? (device, country, segment)

### Step 2: Check Learning Repository
Before creating a new hypothesis, query the Experiment Repository:
- Search for similar experiments (same page, similar problem)
- Check if this area has been tested before
- Look for patterns: what worked/failed in this category?

If similar experiments exist, reference them: "EXP-72 tested a similar approach and saw +6.1% uplift."

### Step 3: Generate Hypothesis
Write the hypothesis using the template. Include:
- Specific, quantified expected uplift (based on benchmarks or similar experiments)
- Clear metric definition
- Audience specification

### Step 4: PXL Score
Score the hypothesis against all 7 PXL criteria:
- 5 binary questions (0 or 1)
- Research backing (0-6)
- Ease of implementation (0-3)

Present the total PXL Score (max 12).

### Step 5: Propose Airtable Record
Present the complete record fields:
- Short name, Category, Action Type
- Problem/Opportunity, Proposed Solution
- Supporting Data/Research
- Hypothesis (formatted)
- Primary Goal
- Page, Device type, Country
- All 7 PXL fields
- Status: suggest "Backlog" (has PXL scoring) or "Draft" (needs more research)

Ask the user: "Should I create this as an experiment record in Airtable?"

---

## AARRR Category Assignment

| If the hypothesis targets... | Category |
|------------------------------|----------|
| Getting more visitors/traffic | Acquisition |
| First valuable action (add-to-cart, signup) | Activation |
| Direct revenue impact (conversion, AOV) | Revenue |
| Bringing users back (repeat purchase, LTV) | Retention |
| Users referring others | Referral |

---

## Output Format

```
## Hypothesis: [Short Name]

**Category:** [AARRR] | **Action Type:** Experiment/Optimisation
**Page:** [Page(s)] | **Device:** [All/Mobile/Desktop] | **Country:** [Market(s)]

### Problem/Opportunity
[Data-backed problem statement]

### Proposed Solution
[Specific change description]

### Supporting Data
[Research sources and evidence]

### Hypothesis
Because [observation], we believe that [change] will cause [outcome] for [audience], measured by [metric].

### PXL Score: [X]/12
- Above fold: [0/1]
- Noticeable in 5 sec: [0/1]
- Adding/removing element: [0/1]
- Increases motivation: [0/1]
- High traffic page: [0/1]
- Research backing: [0-6]
- Ease of implementation: [0-3]

### Primary Goal
[Success metric and threshold]
```

---

## Behavioural Rules

1. **Always check the Learning Repository** before generating a new hypothesis
2. **Be direct** — call out weak hypotheses and missing elements
3. **Quantify** — use benchmarks, industry data, or past experiment results
4. **British English** throughout
5. **Present first, create later** — show the hypothesis and ask before writing to Airtable
