# Map Solutions Workflow

> Generate, compare, and validate solutions for a target opportunity. Decompose solutions into assumptions and design lightweight tests to de-risk before building.

---

## Context Loading

Read these files before starting (if they exist):

1. The KPI tree and opportunity map (must exist -- use BuildKPITree.md and ConnectOpportunities.md first)
2. `context/sef.md` — Experimentation methodology
3. Any existing solution ideas or backlog items related to the target opportunity

---

## Prerequisites

Before mapping solutions:

- [ ] A target opportunity has been selected (from ConnectOpportunities workflow)
- [ ] The opportunity is phrased as a need, pain, or desire (not a solution)
- [ ] The target KPI and its position in the tree are clear

---

## Process

### Step 1: Restate the Target

Clearly frame what we're solving for:

- **Target KPI:** [Metric name and current vs target value]
- **Target Opportunity:** [The unmet need/pain/desire]
- **Evidence:** [What supports this opportunity]

### Step 2: Generate Solutions (Minimum 3)

Brainstorm at least 3 **distinct** solutions for the target opportunity. Solutions can be:

- A product feature
- A service or process change
- A workflow improvement
- Documentation or educational content
- A design change
- A communication/messaging change

**Rules:**
- Each solution should address the **same opportunity** from a different angle
- Solutions should be meaningfully different (not variations of the same idea)
- Prefer smaller solutions that address a single opportunity over large multi-opportunity solutions
- Do not dismiss ideas based on perceived effort -- that assessment comes later
- **Check existing product surfaces first:** Does the product already solve this problem elsewhere (different platform, market, or user segment)? If yes, "Adopt existing approach" is a solution with the strongest feasibility evidence — it's already live and working. This pattern is common in products with separate mobile/desktop experiences, different regions, or different user tiers

**Format:**

| # | Solution | Description | How It Addresses the Opportunity |
|---|----------|-------------|----------------------------------|
| 1 | [Name] | [2-3 sentence description] | [How this specifically addresses the user need] |
| 2 | [Name] | [2-3 sentence description] | [How this specifically addresses the user need] |
| 3 | [Name] | [2-3 sentence description] | [How this specifically addresses the user need] |

### Step 3: Decompose Into Assumptions

For each solution, identify the **underlying assumptions** -- the things that must be true for the solution to succeed.

Test across five categories (DUFVE):

| Category | Question | Risk if Wrong |
|----------|----------|---------------|
| **Desirability** | Do customers actually want this? Will it solve their problem? | Build something nobody uses |
| **Usability** | Can users figure out how to use it? | Users adopt but fail to get value |
| **Feasibility** | Can the team build this? Is it technically possible? | Can't ship or ships late/broken |
| **Viability** | Does it align with business strategy? Does it drive the KPI? | Ships but doesn't move the needle |
| **Ethical** | Should it be built? Are there unintended consequences? | Reputational damage, user harm, regulatory issues |

**Not every assumption needs testing.** Validating low-risk assumptions can be costly with little return. Focus on assumptions where being wrong would cause project failure AND evidence is weak.

**For each solution, list assumptions:**

```
Solution 1: [Name]
├── Desirability
│   ├── Users actually experience [the problem] frequently enough to care
│   └── Users would prefer [this approach] over their current workaround
├── Usability
│   └── Users can complete [the key action] without guidance
├── Feasibility
│   └── [Technical component] can be built within [timeframe]
└── Viability
    └── Improving [this metric] will actually move [parent KPI]
```

### Step 4: Prioritise Assumptions by Risk

Rate each assumption on two axes:

| Axis | Description |
|------|-------------|
| **Risk level** | How bad is it if this assumption is wrong? (Low / Medium / High / Critical) |
| **Evidence strength** | How much evidence supports this assumption? (Strong / Moderate / Weak / None) |

**Priority matrix:**

| | Weak/No Evidence | Moderate Evidence | Strong Evidence |
|---|---|---|---|
| **Critical risk** | Test immediately | Test soon | Monitor |
| **High risk** | Test soon | Validate | Accept |
| **Medium risk** | Validate | Accept | Accept |
| **Low risk** | Accept | Accept | Accept |

Focus on assumptions in the top-left quadrant: **high risk + weak evidence**.

### Step 5: Design Assumption Tests

For each high-priority assumption, design a lightweight test:

| Assumption | Test Type | Method | Success Criteria | Effort |
|-----------|-----------|--------|-------------------|--------|
| [Assumption] | [Type] | [How to run it] | [What "passing" looks like] | [Hours/days] |

**Common test types:**

| Test Type | Good For | Speed |
|-----------|----------|-------|
| **Customer interview** | Desirability assumptions | 1-2 days |
| **Prototype test** | Usability assumptions | 2-5 days |
| **Wizard of Oz** | Desirability + usability combined | 3-7 days |
| **Concierge test** | Value delivery assumptions | 1-2 weeks |
| **Smoke test / Fake door** | Demand validation | 1-3 days |
| **Data analysis** | Viability assumptions | 1-3 days |
| **Technical spike** | Feasibility assumptions | 2-5 days |

**Critical experiment rules:**
- **Never try to prove an assumption TRUE.** Instead, agree upon **result thresholds** for testing criteria
- **Never invest in tests that outweigh the expected value** of the solution being validated
- **Never kick off testing without setting threshold expectations first**

**Test across solutions, not just one.** Test the riskiest assumptions for all 3 solutions to enable informed comparison.

**Map experiment dependencies.** When running multiple waves of tests, explicitly state which later tests depend on earlier results. Format: "Exp [X] runs only if Exp [Y] passes." This prevents wasted effort and clarifies sequencing. If tests have no dependencies, state they can run in parallel.

### Step 6: Evaluate and Decide

After running assumption tests, choose one of three paths:

| Path | When | Action |
|------|------|--------|
| **Refine winner** | One solution clearly passes critical assumptions | Move to detailed design and implementation |
| **Generate new ideas** | All solutions fail critical assumptions | Return to Step 2 with new insights |
| **Select different target** | Opportunity itself was wrong | Return to ConnectOpportunities and reassess |

**Decision should be explicit and documented.**

**Define launch success metrics** for the chosen solution. Before moving to implementation, state:
- **Target metric:** Which KPI are you measuring?
- **Baseline:** What is the current value?
- **Threshold:** What counts as success? (e.g., ">20% relative lift in [metric] within [timeframe]")
- **Timeframe:** Over what period will you evaluate?

This prevents the "we shipped it but don't know if it worked" trap.

---

## Output Format

```markdown
## Solution Map: [Target Opportunity Name]

### Context
- **Target KPI:** [Name] — [Current] → [Target]
- **Target Opportunity:** [Unmet need/pain/desire]
- **Evidence:** [Key supporting data]

### Solutions Explored

| # | Solution | Description | Addresses Opportunity By |
|---|----------|-------------|--------------------------|
| 1 | [Name] | [Description] | [Mechanism] |
| 2 | [Name] | [Description] | [Mechanism] |
| 3 | [Name] | [Description] | [Mechanism] |

### Assumption Breakdown

#### Solution 1: [Name]

| Assumption | Category | Risk | Evidence | Priority |
|-----------|----------|------|----------|----------|
| [Assumption] | Desirability | [H/M/L] | [S/M/W/N] | [Test/Validate/Accept] |
| [Assumption] | Usability | [H/M/L] | [S/M/W/N] | [Test/Validate/Accept] |
| [Assumption] | Feasibility | [H/M/L] | [S/M/W/N] | [Test/Validate/Accept] |
| [Assumption] | Viability | [H/M/L] | [S/M/W/N] | [Test/Validate/Accept] |

[Repeat for Solutions 2 and 3]

### Test Plan

| # | Assumption | Solution(s) | Test Type | Method | Success Criteria | Effort |
|---|-----------|-------------|-----------|--------|-------------------|--------|
| 1 | [Assumption] | 1, 2, 3 | [Type] | [How] | [Criteria] | [Time] |
| 2 | [Assumption] | 1 | [Type] | [How] | [Criteria] | [Time] |

### Recommendation
**Recommended path:** [Refine winner / Generate new ideas / Select different target]
**Reasoning:** [Why this path, based on assumption test results]
**Next step:** [Specific action to take]
```

---

## Quality Checklist

Before presenting:

- [ ] At least 3 meaningfully different solutions are proposed
- [ ] Existing product surfaces checked for "already solved elsewhere" pattern
- [ ] Solutions address the target opportunity specifically (not generic improvements)
- [ ] Assumptions are categorised across all 5 dimensions (DUFVE)
- [ ] Risk × evidence prioritisation is applied
- [ ] Test designs are lightweight and fast (days, not weeks)
- [ ] Experiment dependencies mapped (which tests gate which)
- [ ] Tests are comparative across solutions where possible
- [ ] Launch success metrics defined (target, baseline, threshold, timeframe)
- [ ] A clear recommendation and next step are stated

---

Present output in conversation. Ask before saving anywhere.
