---
name: Experiment Designer
description: Design statistically valid experiments with proper test types, sample sizes, metrics selection, and implementation plans
allowed-tools:
  - Read
  - Grep
  - Glob
  - mcp__airtable__*
  - mcp__claude_ai_Airtable__*
---

# Experiment Designer Skill

> xOS Module 3 — Transform hypotheses into fully designed, implementable experiments.

---

## Trigger Patterns

Activate this skill when the user asks about:
- Designing an experiment or A/B test
- Choosing a test type (A/B vs MVT vs split URL)
- Calculating sample size requirements
- Selecting metrics (primary, secondary, guardrail)
- Creating an experiment brief
- Reviewing an experiment design

---

## Context Loading

Before designing experiments, read:
1. `${CLAUDE_SKILL_DIR}/references/sample-size-tables.md` — sample size calculator
2. `${CLAUDE_SKILL_DIR}/references/metrics-framework.md` — metric types and selection
3. `.claude/rules/experimentation-standards.md` — quality criteria

---

## Test Types

| Type | Description | When to Use | Traffic Requirement |
|------|-------------|-------------|---------------------|
| **A/B** | Control vs single variant | Default — test one change | Lowest |
| **A/B/n** | Control vs multiple variants | Testing 2-3 variations of same element | Higher (split across variants) |
| **MVT** | Multiple variables simultaneously | Only with very high traffic | Highest |
| **Split URL** | Different pages entirely | Redesigns, new page layouts | Similar to A/B |

**Default to A/B.** Only recommend A/B/n or MVT when the user has sufficient traffic and a clear reason.

---

## Sample Size Guidance

### Quick Reference

Baseline conversion rate × minimum detectable effect → sample size per variant:

| Baseline | 5% Lift | 10% Lift | 20% Lift |
|----------|---------|----------|----------|
| 1% | 1.5M | 380K | 95K |
| 3% | 480K | 120K | 30K |
| 5% | 280K | 70K | 18K |
| 10% | 130K | 33K | 8.4K |

*Based on 80% power, 95% confidence (alpha = 0.05)*

### Duration Estimate

`Required sample size per variant × number of variants ÷ daily traffic to test page`

**Minimum runtime:** 2 full business cycles (typically 2 weeks) regardless of sample size — to capture day-of-week and pay-cycle effects.

---

## Metrics Selection

### Three Metric Types

| Type | Purpose | When to Define | Examples |
|------|---------|---------------|----------|
| **Primary** | Directly measures hypothesis | Before test starts | Conversion rate, add-to-cart rate |
| **Secondary** | Supports interpretation | Before test starts | Time on page, engagement rate |
| **Guardrail** | Prevents unintended harm | Before test starts | Bounce rate, page load time, error rate |

### Selection Checklist
- [ ] Primary metric directly maps to the hypothesis
- [ ] At least 1 secondary metric for context
- [ ] At least 1 guardrail metric to catch negative side-effects
- [ ] All metrics can be tracked accurately
- [ ] Metrics align with AARRR category

---

## Implementation Checklist

### Step 1: Design
- [ ] Hypothesis passes 5-element quality check
- [ ] Test type selected with justification
- [ ] Primary, secondary, and guardrail metrics defined
- [ ] Sample size calculated per variant
- [ ] Test duration estimated (minimum 2 weeks)
- [ ] Traffic allocation decided (recommend 50/50 for A/B)

### Step 2: Build
- [ ] Variant matches hypothesis exactly (no scope creep)
- [ ] Tracking implemented for all metrics
- [ ] Segmentation configured (if needed)
- [ ] QA completed in staging

### Step 3: Launch
- [ ] Tracking verified in production (small % first)
- [ ] Start date and expected end date documented
- [ ] Ramp to full allocation after 24h validation

### Step 4: Monitor (Without Peeking)
- [ ] Check for technical issues ONLY
- [ ] Do NOT make decisions based on interim results
- [ ] Document any incidents or anomalies

### Step 5: Analyse
- [ ] Waited for predetermined sample size
- [ ] Statistical significance checked (p < 0.05)
- [ ] Confidence intervals reviewed
- [ ] Segment performance analysed
- [ ] Learnings and next steps documented

---

## Common Mistakes

| Mistake | Prevention |
|---------|-----------|
| Stopping early | Commit to sample size before starting |
| Testing too many variants | Start with A/B; add variants only with sufficient traffic |
| Vague hypothesis | Use the 5-element template |
| Ignoring guardrails | Always define what you're protecting |
| No documentation | Document everything in Airtable |
| Peeking at results | Set calendar reminder for analysis date |
| Scope creep | Variant must match hypothesis exactly |

---

## Experiment Brief Output

```
## Experiment Brief: [Short Name]

### Hypothesis
Because [observation], we believe [change] will cause [outcome] for [audience], measured by [metric].

### Test Design
- **Type:** A/B / A/B/n / MVT
- **Traffic allocation:** 50/50 (or specify)
- **Target sample size:** [per variant]
- **Estimated duration:** [days/weeks]
- **Minimum runtime:** 2 weeks

### Metrics
- **Primary:** [metric + success threshold]
- **Secondary:** [list]
- **Guardrail:** [list]

### Variants
- **Control:** [description]
- **Variant A:** [description]

### Risks and Mitigations
- [risk → mitigation]

### Airtable Fields
- Status: [To Do / In Progress]
- Sprint: [Sprint name + record ID]
- Assigned To: [name]
- Start date: [date]
```

---

## Behavioural Rules

1. **Statistical rigour is non-negotiable** — no shortcuts on sample size or duration
2. **Call out bad designs** — weak hypotheses, insufficient traffic, missing guardrails
3. **Practical focus** — connect everything to business outcomes
4. **British English** throughout
5. **Present first, create later** — show the brief and ask before writing to Airtable
