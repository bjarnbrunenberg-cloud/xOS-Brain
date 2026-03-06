---
name: Strategic Alignment
description: Build KPI trees, connect them to customer opportunities, and map solutions with assumption testing. Integrates metric decomposition with Opportunity-Solution Tree methodology.
allowed-tools:
  - Read
  - Grep
  - Glob
  - mcp__airtable__*
  - mcp__claude_ai_Airtable__*
---

# KPI Tree & Opportunity-Solution Tree Skill

> Build KPI trees, connect them to customer opportunities, and map solutions with assumption testing. Integrates Vistaly's metric framework with Teresa Torres' Opportunity-Solution Tree methodology.

---

## Trigger Patterns

Activate this skill when the user asks about:

- KPI tree, driver tree, impact tree, value driver tree
- North star metric, metric decomposition, metric hierarchy
- Opportunity solution tree, OST, opportunity mapping
- Connect metrics to opportunities, why a metric isn't improving
- Build a metric framework, decompose a goal into metrics
- Proxy metrics, input vs output metrics
- Assumption testing for solutions, desirability/usability/feasibility/viability

---

## Context Loading

When context files exist, read from `context/` folder first:
- `context/goals.md` — Client goals and KPIs
- `context/kpis.md` — Current metric structure

When applying to a new client, ask for:
- The client's North Star metric or top-level business goal
- Their current metric structure (if any)
- Available data sources and instrumentation level

---

## Workflow Routing

| Request | Workflow |
|---------|----------|
| Build a KPI tree, decompose a metric, create a driver tree | `Workflows/BuildKPITree.md` |
| Connect opportunities, find why a metric isn't moving, bridge KPIs to customer needs | `Workflows/ConnectOpportunities.md` |
| Map solutions, test assumptions, design experiments for opportunities | `Workflows/MapSolutions.md` |

---

## Core Framework

The integrated KPI Tree + OST creates a 7-level hierarchy from vision to validated experiment:

```
Vision Statement        [2-5 year direction — diagnosis of the problem]
  └── KPI Tree          [persistent metric model — how the business works]
       └── Outcome      [time-bound Key Result targeting a specific KPI]
            └── Opportunities  [WHY the outcome isn't being achieved — customer voice]
                 └── Solutions     [HOW to address — starts as idea, Now/Next/Later]
                      └── Assumptions  [what must be true — DUFVE categories]
                           └── Experiments [de-risk with thresholds, not proof]
```

### 1. Vision Statement (North Star)

The long-term change the product aims to establish (2-5 years). A vision is NOT a metric — it's a **diagnosis** that simplifies a complex situation into a coherent idea by focusing on the critical aspects of a problem.

**A good vision statement should:**
- Simplify a problem into a coherent statement
- Inspire
- Be easy to comprehend
- Resist the urge to change frequently
- Be believable and compelling

**Good:** "Data breaches rose 70% globally in Q3 2022, tarnishing reputations and resulting in fines. Companies should be able to spend more time focusing on their product without constantly worrying about protecting data from threats."

**Bad:** "Users need to upload more pictures so our product can succeed in the marketplace." (Too tactical, no diagnosis)

**Tip:** Don't start from scratch. Reference your company homepage, mission statement, manifesto, demo/sales decks, and marketing material. How do you speak about your business to customers today?

**Tip:** Establish buy-in from the proper stakeholders before planning significant work that builds off vision statements.

### 2. KPI Tree (Persistent Metric Model)

KPIs are persistent metrics tracked and monitored over time. Nested KPIs create **KPI Trees** — models of how the business works and performs. The tree is the durable map; it doesn't change with each planning cycle.

Metrics fall on a spectrum from **lagging** to **leading**:
- **Lagging metrics** (business/performance): revenue, retention, CAC — results that take time to show progress
- **Leading metrics** (product/input): feature usage rates, onboarding completion, time-to-value — specific, actionable measurements teams can directly influence

Breaking lagging metrics into their input components creates shorter feedback loops.

A good North Star metric combines a **business value moment** with a **natural frequency**:
- Streaming service: Weekly Active Subscribers (value = subscription, frequency = weekly)
- SaaS: Monthly Recurring Revenue (value = revenue, frequency = monthly)
- Marketplace: Weekly Gross Merchandise Value (value = transaction, frequency = weekly)

### 3. Outcome (Key Result)

An Outcome is a **time-bound target** to improve a specific area of the KPI tree. While KPIs are persistent, Outcomes focus effort on what to improve NOW.

**A good outcome should be:**
- Realistic and achievable
- Verifiable (measurable success criteria)
- Within the influence of the team working on it

**Good:** "Reduce the average time from threat identification to prevention by 40%." (product metric, verifiable, team can influence)

**Good:** "Increase activation rate from 25% to 45% by Q3." (specific, time-bound, within team scope)

**Bad:** "The new image uploader workflow is intuitive and enjoyable to use." (not verifiable, subjective)

**Tip:** A well-structured vision and set of outcomes provide guidance by focusing effort and removing distracting options.

### 4. Opportunity

An opportunity is an **unaddressed pain point or desire** that presents itself as a barrier to achieving the outcome. Frame opportunities in the **voice of your customer**.

**Good:** "I have to pull up the security dashboard every 10 minutes to ensure nothing abnormal has happened." (customer voice, pain point, reveals gap)

**Good:** "I feel like I'm stuck in my job and there is no upward movement." (desire, emotional, real)

**Bad:** "Users need to be able to upload pictures to their personal albums." (this is a solution disguised as an opportunity)

**Quality check — a good opportunity should:**
- Expose a gap that reduces customer pain or increases customer desire
- Have more than one way to address it (if not, it's probably a solution)

**Tip:** Framing in the customer's voice helps identify the next question to ask, uncover deeper opportunities, and create more compelling hypotheses for solutions.

### 5. Solution

A solution is a **specific action (or set of actions)** that addresses an opportunity. It may take completing several solutions to address larger opportunities.

Each solution starts as an **idea**. Status progression: Idea → Not now → Later → Next → Now

**Good:** "Anomaly notification system to alert customers when their attention is required." (specific, addresses a clear opportunity)

**Bad:** "Fix the image upload experience to be more intuitive." (vague, no clear opportunity link)

**Quality check — a good solution should:**
- Be backed by discovery (not just brainstormed)
- Be tied to an objective (traceable to an outcome)
- Have outlined assumptions

### 6. Assumption

An assumption is something **believed to be true without proof**. Every solution carries assumptions across five categories:

| Category | Question |
|----------|----------|
| **Desirability** | Do people want it, and will they use it? |
| **Usability** | Will people know how to use it? |
| **Feasibility** | Can it be built? |
| **Viability** | Does it make sense for the rest of the business? |
| **Ethical** | Should it be built? |

**Not every assumption needs testing.** Use discernment — validate assumptions that are high-risk AND have weak evidence. Validating low-risk assumptions can be costly with little return.

**Tip:** Use assumption mapping to determine which assumptions warrant experiments. Focus on assumptions where being wrong would cause project failure.

### 7. Experiment

Experiments provide **evidence to de-risk high-risk assumptions**. They save time, money, and energy by preventing investment in solutions that give little return.

**Critical rules:**
- **Never try to prove an assumption TRUE.** Instead, agree upon **result thresholds** for testing criteria
- **Never invest in tests that outweigh the expected value** of the solution
- **Never kick off testing without setting threshold expectations first**

**Common experiment types:** Survey, Visual Prototype, Research Effort, Data Analysis, Value Testing

**Consider running experiments on assumptions that have:** weak evidence AND would run high risk of project failure if not correctly understood.

### Two Types of Metric Relationships

| Type | Description | Example | Principle |
|------|-------------|---------|-----------|
| **Algebraic** | Child KPIs mathematically compose the parent. Add, multiply, or divide to get parent value. | New Customers × ACV = New ARR | Must be **MECE** (Mutually Exclusive, Collectively Exhaustive) -- no gaps, no overlaps |
| **Correlative** | Improving the child metric *likely* improves the parent, but not deterministically. | Improving onboarding completion likely improves conversion, but won't exactly double it | Requires **correlation analysis** to validate the relationship actually holds |

Business-to-business KPI relationships are typically algebraic. Business-to-product KPI relationships are typically correlative.

### Three Levels of Data Sophistication

| Level | Description | When to use |
|-------|-------------|-------------|
| **L1: Qualitative Journey** | Describe ideal user journey steps without numbers | Pre-product, no instrumentation |
| **L2: Product Metrics** | Identify measurable in-product actions per journey step | Basic analytics in place |
| **L3: Statistical Analysis** | Correlation analysis and regression modelling | Mature data infrastructure |

Start at L1 and progress. Do not wait for L3 to begin building a KPI tree.

**Declaration requirement:** Before building the tree, explicitly state the current data sophistication level: "We are at L[X]." This sets expectations for what evidence is available. If L1, correlations are directional beliefs. If L2, in-product data is measurable. If L3, statistical regression is possible. Avoid assuming L3 capability when only L2 data exists.

### Metric Layering (L1 → L2 → L3 Input Metrics)

Within the product KPI tier, layer input metrics by proximity to the North Star:
- **L1 input metrics** directly contribute to the North Star (e.g., 7-day retention)
- **L2 input metrics** contribute to L1 metrics (e.g., iOS app retention)
- **L3 input metrics** contribute to L2 metrics (e.g., push notification opt-in rate)

This creates a clear cascade: improving L3 drives L2, which drives L1, which drives the North Star.

### Metric Ownership Rule

Every metric in the tree must have a **designated owner** -- a person or team accountable for:
- Monitoring the metric's performance
- Responding to changes and anomalies
- Identifying opportunities when the metric underperforms

If a metric has no owner, it either needs one assigned or it doesn't belong in the tree.

### Experimentation Maturity Stages

How deep you can go with KPI trees depends on your organisation's experimentation maturity:

| Stage | Focus | Metrics Tracked |
|-------|-------|-----------------|
| **Early** (prove it works) | Build the data bank, gain stakeholder buy-in | 2-3 core business metrics, simple win/loss |
| **Growth** (expand impact) | Measure business impact, not just test velocity | Revenue per experiment, journey-based metrics |
| **Advanced** (strategic driver) | Experimentation as core operational model | Compound metrics, learning velocity, resource efficiency |

### The KPI → Opportunity Bridge

This is the critical handoff:

- **KPIs tell you WHAT** is happening (or not happening)
- **Opportunities tell you WHY** it's not happening more, less, or faster

Product metrics are *proxies* for customer value realisation. Common proxies:
- Time required to complete a specific task
- Difficulty ratings for task completion
- Return frequency after first use
- Feature adoption rates at meaningful thresholds

### Opportunity Identification Rules

Opportunities must come from **customer research**, not brainstorming.

**Evidence source hierarchy (strongest first):**
1. Story-based customer interviews ("Tell me about a time when...")
2. First-party UX audits (walk the product as a real persona, record observations)
3. Usability tests and session recordings
4. Support tickets and customer feedback (need interview validation)
5. Analytics data showing drop-offs or friction
6. Team hypotheses (weakest -- label as "hypothesised, needs validation")

**First-party UX audit:** Walk through the product end-to-end as a realistic persona. Record every friction point, confusion, and delight moment. Produces Strong evidence when combined with structured note-taking. Especially powerful for uncovering issues upstream of the target KPI (e.g., signup friction when investigating activation).

**Test:** "Is there more than one way to address this?" If only one solution exists, you have a disguised solution, not an opportunity.

**Sizing dimensions:**
- **Frequency** -- How often customers experience this need
- **Reach** -- How many customers are affected
- **Severity** -- Impact if unaddressed
- **Differentiation** -- Table stakes or competitive advantage

**Deliberately exclude effort estimation** when prioritising opportunities. Any opportunity may have both simple and complex solutions.

### Prerequisite Fixes vs Solutions

During opportunity analysis, you may discover **bugs or platform gaps that undermine ALL solutions**. These are prerequisite fixes, not solution choices.

**How to identify:** If fixing this issue is required regardless of which solution you choose, it's a prerequisite — not an opportunity to explore with multiple solutions.

**Rules:**
- Isolate prerequisite fixes from the opportunity tree
- Label them clearly: "Prerequisite Fix — not a solution choice"
- Fix before running experiments on solutions — they invalidate test results otherwise
- Examples: data entered during signup not persisting to the platform, authentication failures blocking signup, broken integrations

### Solution Exploration Rules

- Explore **at least 3 distinct solutions** per target opportunity
- Compare and contrast before committing -- comparative thinking drives better decisions
- Prefer smaller solutions addressing a single opportunity over large solutions spanning multiple
- **Check existing product surfaces first:** Does the product already solve this problem in another context (e.g., mobile vs desktop, different market, different user segment)? If so, "Adopt existing approach" is a solution with the strongest possible feasibility evidence — it's already live and working

### Assumption Testing Categories

See Section 6 (Assumption) above for the full five-category framework (DUFVE). Key rule: test the riskiest assumptions first — those that would cause project failure if wrong and have weak existing evidence. Not every assumption needs testing.

---

## Anti-Patterns Checklist

| Anti-Pattern | How to Spot | Fix |
|--------------|-------------|-----|
| **Solutions disguised as opportunities** | Only one way to address it | Ask "Why do we want this?" to find the real opportunity |
| **Brainstormed opportunities** | Not traceable to customer research | Return to interviews; secondary sources need validation |
| **Too many metrics** | Tree is cluttered; no one knows what to focus on | Only include metrics that inform strategic decisions |
| **Premature effort estimation** | Dismissing opportunities because "that sounds hard" | Remove effort from opportunity assessment entirely |
| **Company-wide single tree** | Becomes unwieldy and unfocused | One tree per team, aligned with their specific outcome |
| **Skipping the bridge** | Jumping from KPI to solution without understanding why | Always identify the opportunity (the WHY) before generating solutions |
| **Perfect data waiting** | Refusing to start until analytics are perfect | Start at L1 (qualitative), progress to L2/L3 over time |
| **Spaghetti testing** | Running experiments without connecting them to the tree | Every experiment must trace back to an opportunity, which traces to a product KPI |
| **Velocity over impact** | Celebrating number of tests run instead of business outcomes | Track revenue per experiment and learning velocity, not just test count |
| **Ownerless metrics** | Metrics in the tree with no one accountable | Every metric needs a designated owner who monitors and responds |

---

## Behavioural Rules

1. **Always clarify the North Star first** -- No tree without a clear top-level metric
2. **Label relationship types** -- Mark every connection as algebraic or correlative
3. **Trace opportunities to evidence** -- Flag when an opportunity is hypothesised vs validated
4. **British English** -- optimisation, organisation, behaviour
5. **No fabrication** -- Only use documented metrics and facts from vault or provided data
6. **Be direct** -- Call out anti-patterns immediately when spotted
7. **Practical focus** -- Every tree must lead to actionable next steps

---

## Related Skills

- **hypothesis-factory** — For generating hypotheses from opportunity insights
- **experiment-designer** — For designing experiments once assumption tests are defined
- **experiment-repository** — For tracking experiments in the Airtable Learning Repository

---

## Airtable Integration

When solutions lead to experiments, create them in the Experiment Repository:
- Link the experiment to the relevant KPI and opportunity
- Set Category based on where the KPI sits in the AARRR framework
- Use the hypothesis-factory skill to generate properly formatted hypotheses

---

Present output in conversation. Ask before saving anywhere.
