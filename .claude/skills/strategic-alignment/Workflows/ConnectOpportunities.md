# Connect Opportunities Workflow

> Bridge product KPIs to customer opportunities using the Opportunity-Solution Tree methodology. Transform "what's underperforming" into "why it's underperforming."

---

## Context Loading

Read these files before starting (if they exist):

1. The KPI tree (must exist before this workflow runs -- use BuildKPITree.md first)
2. `context/sef.md` — Experimentation methodology
3. Any available customer research, interview notes, or feedback data

---

## Prerequisites

Before connecting opportunities:

- [ ] A KPI tree exists with at least North Star → Business KPIs → Product KPIs
- [ ] At least one focus area has been identified (a product KPI to improve)
- [ ] Customer evidence exists (interviews, support tickets, analytics, user research)

If customer evidence is unavailable, flag this clearly. Hypothesised opportunities must be labelled as such and validated through interviews before acting on them.

---

## Process

### Step 1: Select Target KPI

Choose the product KPI to investigate. Ideally this is:
- An underperforming metric with clear data showing the gap
- A high-leverage metric (improving it cascades upward significantly)
- A metric the team can influence directly

**State clearly:** "We are investigating why [Product KPI] is at [current level] instead of [desired level]."

### Step 2: Map the User Journey for This KPI

Describe the steps a user takes that ultimately lead to this metric changing. This creates the experience map that opportunities will attach to.

**Format:**

```
User Journey for [Product KPI]:
1. [First thing the user does] → [What should happen]
2. [Next step] → [What should happen]
3. [Key moment] → [What should happen]
4. [Completion/success] → [Metric improves]
```

Identify **top-level moments** -- the 3-5 key stages where the experience can break down.

### Step 3: Identify Opportunities Under Each Moment

For each top-level moment, list the **unmet needs, pain points, and desires** that prevent users from progressing.

**Source hierarchy (strongest first):**
1. Story-based customer interviews ("Tell me about a time when...")
2. First-party UX audits (walk the product as a real persona, record every friction point)
3. Usability tests and session recordings
4. Support tickets and customer feedback (need interview validation)
5. Analytics data showing drop-offs or friction
6. Team hypotheses (weakest -- label as "hypothesised, needs validation")

**Opportunity format:**
> "[User type] struggles with / needs / wants [specific thing] when [context/moment]"

**Test each opportunity:** "Is there more than one way to address this?" If only one solution comes to mind, you likely have a disguised solution. Ask "Why do we want this?" to find the real opportunity.

### Step 4: Structure Parent-Child Relationships

Organise opportunities hierarchically:

```
[Product KPI: e.g., Trial-to-Paid Conversion Rate]
├── Top-Level Moment: First Session Experience
│   ├── Opportunity: Users don't understand the core value proposition within first 2 minutes
│   │   ├── Sub-opportunity: Empty state provides no guidance
│   │   └── Sub-opportunity: Feature naming is confusing for non-technical users
│   └── Opportunity: Users can't connect their existing data sources easily
├── Top-Level Moment: Onboarding Completion
│   ├── Opportunity: Multi-step setup feels overwhelming
│   └── Opportunity: Users abandon when asked for team invite (perceived commitment)
└── Top-Level Moment: Aha Moment / Time-to-Value
    ├── Opportunity: Users don't know what "success" looks like in the tool
    └── Opportunity: First meaningful result takes too long to achieve
```

### Step 5: Size and Prioritise Opportunities

Assess each opportunity on four dimensions (do NOT include effort):

| Opportunity | Frequency | Reach | Severity | Differentiation |
|------------|-----------|-------|----------|-----------------|
| [Name] | How often? (daily/weekly/monthly/rarely) | What % of users? | Impact if unaddressed (low/med/high/critical) | Table stakes / Differentiator / Delight |

**Evidence strength rating for each opportunity:**
- **Strong:** Multiple interviews + supporting data, or first-party UX audit with structured notes
- **Moderate:** 1-2 interviews or strong analytics signal
- **Weak:** Hypothesis or single data point -- needs validation

**Correlative validation:** For each correlative relationship in the KPI tree that your opportunities depend on, flag whether the correlation is:
- **Validated** -- data confirms the relationship holds
- **Assumed** -- directionally sound but not yet measured
- **Unknown** -- no data either way

Schedule validation for assumed/unknown correlations before committing engineering resources to solutions. If a key correlation doesn't hold, the entire opportunity branch may need reassessment.

### Step 5b: Identify Prerequisite Fixes

Scan the opportunity list for **bugs or platform gaps that undermine all possible solutions**. These are not opportunities to explore — they are prerequisite fixes.

**Test:** "Does this need to be fixed regardless of which solution we choose?" If yes, it's a prerequisite.

- Isolate prerequisite fixes from the opportunity tree
- Label them: "Prerequisite Fix — fix before experimenting"
- Do not count them as opportunities or include in sizing
- Document the impact: which opportunities and solutions does this fix unblock?

### Step 6: Select Target Opportunity

Choose **one** opportunity to focus on. The target should score well on:

1. **Opportunity sizing** -- Many users affected, frequently, with high severity
2. **Market factors** -- Addressing it strengthens competitive position
3. **Company factors** -- Aligns with mission, vision, strategy
4. **Customer factors** -- High importance to customers, low satisfaction with current solutions

**Do not factor in effort.** That comes when evaluating solutions.

### Step 7: Set Opportunity Status

Assign status to all identified opportunities:

| Status | Meaning |
|--------|---------|
| **Now** | Actively being explored with solutions |
| **Next** | Queued for exploration after current target |
| **Later** | Important but not yet prioritised |
| **Not now** | Deprioritised with reasoning documented |
| **Identified** | Captured but not yet assessed |

**Document the reasoning for each status.** Don't just assign labels — explain why. Example logic:
- **Now:** Affects >80% of users at critical severity, strong evidence
- **Next:** Medium severity, or has workarounds, or needs more evidence before committing
- **Later:** Lower reach, weaker evidence, or dependent on other fixes landing first
- **Not now:** Contradicts current strategy or evidence doesn't support the need

---

## Output Format

```markdown
## Opportunity Map: [Product KPI Name]

### Target KPI
**[KPI Name]:** [Current value] → [Target value]
**Parent Business KPI:** [Name] ([algebraic/correlative] relationship)

### User Journey

1. **[Moment 1]:** [Description of what happens]
2. **[Moment 2]:** [Description]
3. **[Moment 3]:** [Description]
4. **[Moment 4]:** [Description]

### Opportunity Tree

[Product KPI]
├── [Moment 1]
│   ├── [Opportunity] — [evidence strength] — [status]
│   └── [Opportunity] — [evidence strength] — [status]
├── [Moment 2]
│   └── [Opportunity] — [evidence strength] — [status]
└── [Moment 3]
    ├── [Opportunity] — [evidence strength] — [status]
    └── [Opportunity] — [evidence strength] — [status]

### Opportunity Sizing

| Opportunity | Frequency | Reach | Severity | Differentiation | Evidence |
|------------|-----------|-------|----------|-----------------|----------|
| [Name] | [Value] | [Value] | [Value] | [Value] | [Strong/Moderate/Weak] |

### Target Opportunity
**Selected:** [Opportunity name]
**Rationale:** [Why this one, based on sizing + market + company + customer factors]
**Evidence:** [Key data points supporting this choice]

### Next Steps
- Proceed to solution mapping (MapSolutions workflow)
- Schedule [X] customer interviews to validate [weak-evidence opportunities]
- Instrument [metric] to track [gap in data]
```

---

## Quality Checklist

Before presenting:

- [ ] Every opportunity is phrased as a need/pain/desire, not a solution
- [ ] "More than one way to address it" test passes for each opportunity
- [ ] Evidence strength is rated honestly
- [ ] Hypothesised opportunities are clearly labelled
- [ ] Prerequisite fixes are isolated and labelled separately
- [ ] Correlative relationships flagged as validated/assumed/unknown
- [ ] One clear target opportunity is selected with reasoning
- [ ] Priority status reasoning is documented (not just labels)
- [ ] Effort is NOT factored into opportunity prioritisation

---

Present output in conversation. Ask before saving anywhere.
