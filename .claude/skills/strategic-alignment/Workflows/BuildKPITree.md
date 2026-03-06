# Build KPI Tree Workflow

> Construct a hierarchical KPI tree from a North Star metric down through business and product KPIs, with clearly labelled relationships.

---

## Context Loading

Read these files before starting (if they exist):

1. `context/goals.md` — Client goals and KPIs
2. `context/business.md` — Business model context
3. `context/revenue.md` — Revenue model and targets

If context files are not available, ask the user for:
- Their top-level business metric
- Current metrics they track (if any)
- Data infrastructure maturity (none / basic analytics / mature)

---

## Process

### Step 1: Identify the North Star

The top-level metric must:
- Combine a **business value moment** with a **natural frequency** (e.g., "Weekly Active Subscribers" = subscription value + weekly frequency)
- Be a single metric the entire organisation rallies around
- Be measurable and trackable over time
- Be directly tied to business value

Common North Star examples by business model:

| Business Model | Typical North Star |
|---------------|-------------------|
| SaaS | Monthly/Annual Recurring Revenue (MRR/ARR) |
| Marketplace | Gross Merchandise Value (GMV) |
| E-commerce | Revenue per visitor or total revenue |
| Media/Content | Monthly Active Users (MAU) or engagement time |
| Consulting/Freelance | Monthly Recurring Revenue (MRR) |

**Output:** State the North Star metric clearly. If the user doesn't have one, help them choose.

**Declare data sophistication level:** After identifying the North Star, explicitly state: "We are at L[X]."
- **L1 (Qualitative):** No instrumentation. Correlations are directional beliefs based on experience.
- **L2 (Product Metrics):** Basic analytics in place. In-product actions are measurable. Correlations are observable but not statistically validated.
- **L3 (Statistical):** Mature data infrastructure. Regression models can validate correlative relationships.

This declaration sets expectations for the rest of the tree — especially how much trust to place in correlative relationships and what evidence will look like for assumption testing.

### Step 2: Decompose into Business KPIs (Tier 1)

Break the North Star into its **algebraic components** -- the child metrics that mathematically compose the parent.

**Method:** Ask "What can I add, multiply, or divide to get this number?"

Example for MRR:
```
MRR
├── New MRR (New Customers × Average Revenue per Customer)  [algebraic]
├── Expansion MRR (Upsells + Cross-sells)                   [algebraic]
└── Churned MRR (Lost Customers × Their Average Revenue)    [algebraic]
```

**Rules:**
- Every connection at this level should be **algebraic** (mathematically verifiable)
- Apply the **MECE principle** -- Mutually Exclusive and Collectively Exhaustive. No gaps, no overlaps.
- If you can't express the relationship as addition, multiplication, or division, it belongs at the next level
- Only include metrics that help make strategic decisions -- resist the urge to over-decompose

### Step 3: Decompose into Product KPIs (Tier 2)

For each business KPI, identify the **product metrics** that influence it. These relationships are **correlative** -- improving the child metric *likely* improves the parent, but not deterministically.

**Method:** Ask "What user behaviours or product actions drive this business metric?"

Example for New MRR:
```
New MRR
├── New Customers                                            [algebraic]
│   ├── Trial-to-Paid Conversion Rate                       [correlative]
│   │   ├── Onboarding Completion Rate                      [correlative]
│   │   └── Time-to-First-Value                             [correlative]
│   └── New Trial Signups                                    [correlative]
│       ├── Landing Page Conversion Rate                    [correlative]
│       └── Qualified Traffic Volume                        [correlative]
└── Average Revenue per Customer                             [algebraic]
    └── Plan Selection Distribution                         [correlative]
```

**Rules:**
- Mark all connections as `[correlative]` at this level
- Product metrics should be **proxy measures** for customer value realisation
- Match metrics to natural usage frequency (daily for social apps, monthly for invoicing tools)
- Apply the appropriate data sophistication level:
  - **L1:** Describe the journey step qualitatively if no instrumentation exists
  - **L2:** Name the measurable in-product action
  - **L3:** Include correlation coefficients if available

### Step 4: Validate and Prune

Review the complete tree against these checks:

- [ ] **Every metric has a designated owner** -- a person/team accountable for monitoring and responding
- [ ] **Every metric is measurable** (or has a plan to become measurable)
- [ ] **No orphan metrics** -- every child connects to a parent
- [ ] **No vanity metrics** -- every metric informs a decision
- [ ] **Algebraic relationships are MECE** -- Mutually Exclusive, Collectively Exhaustive
- [ ] **Correlative relationships are validated** (or flagged for correlation analysis)
- [ ] **Relationship types are labelled** -- algebraic or correlative
- [ ] **Input metrics are layered** -- L1 drives North Star, L2 drives L1, L3 drives L2
- [ ] **Tree depth is 3-5 levels** -- more suggests over-decomposition
- [ ] **No more than 15-20 total metrics** -- more creates confusion
- [ ] **No spaghetti testing** -- every experiment can trace back through the tree to the North Star

### Step 5: Identify Focus Areas

Not all branches of the tree deserve equal attention. Identify:

1. **Weakest links** -- Where is the biggest drop-off or underperformance?
2. **Highest leverage** -- Which metric, if improved, would have the largest cascade effect?
3. **Most measurable** -- Which branches have the best data coverage?

Recommend 1-3 focus areas for the next planning cycle.

---

## Output Format

```markdown
## KPI Tree: [Organisation/Product Name]

### North Star
**[Metric Name]:** [Current value if known] → [Target if known]

### Tree Structure

[North Star Metric]
├── [Business KPI 1]                                    [algebraic]
│   ├── [Product KPI 1a]                                [correlative]
│   │   ├── [Product KPI 1a-i]                          [correlative]
│   │   └── [Product KPI 1a-ii]                         [correlative]
│   └── [Product KPI 1b]                                [correlative]
├── [Business KPI 2]                                    [algebraic]
│   └── [Product KPI 2a]                                [correlative]
└── [Business KPI 3]                                    [algebraic]
    └── [Product KPI 3a]                                [correlative]

### Metric Definitions

| Metric | Definition | Current Value | Data Source | Owner |
|--------|-----------|---------------|-------------|-------|
| [Name] | [What it measures] | [Value or "unmeasured"] | [Source] | [Team/person] |

### Relationship Map

| Parent → Child | Type | Relationship |
|----------------|------|-------------|
| [Parent] → [Child] | Algebraic | [Formula: A × B = Parent] |
| [Parent] → [Child] | Correlative | [Expected direction: improving X likely improves Y] |

### Recommended Focus Areas

1. **[Area]:** [Why this is the highest-leverage focus]
2. **[Area]:** [Why]
3. **[Area]:** [Why]

### Data Gaps

- [Metric that needs instrumentation]
- [Relationship that needs validation]
```

---

## Quality Checklist

Before presenting the tree:

- [ ] North Star is clearly stated and measurable
- [ ] All algebraic relationships can be verified mathematically
- [ ] Correlative relationships are directionally sound
- [ ] No anti-patterns present (see SKILL.md checklist)
- [ ] Tree is actionable -- someone could use it to make decisions today
- [ ] Focus areas are identified with reasoning

---

Present output in conversation. Ask before saving anywhere.
