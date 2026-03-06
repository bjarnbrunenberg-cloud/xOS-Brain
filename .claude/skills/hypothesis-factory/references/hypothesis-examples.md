# Hypothesis Examples

## Template

> **Because** [observation/data], **we believe that** [change] **will cause** [expected outcome] **for** [audience], **which we will measure by** [metric].

---

## Weak vs Strong Hypotheses

### Example 1: CTA Button

| | Hypothesis |
|---|-----------|
| **Weak** | "Changing the button colour might improve conversions" |
| **Strong** | "Because 40% of users abandon at the CTA (GA4 funnel data), we believe that simplifying the form to 3 fields will increase form completions by 15% for mobile users, measured by form submission rate" |

**What's wrong with the weak version:** No data backing, no specific change, no target audience, no metric, no expected magnitude.

### Example 2: Checkout Flow

| | Hypothesis |
|---|-----------|
| **Weak** | "Let's test guest checkout" |
| **Strong** | "Because 28% of cart abandoners cite forced account creation as the reason (exit survey, n=220), we believe that removing the account creation requirement and allowing email-only guest checkout will increase checkout completion rate by at least 6% for all users, measured by checkout step completion funnel" |

### Example 3: Product Page

| | Hypothesis |
|---|-----------|
| **Weak** | "Better product images should help" |
| **Strong** | "Because 4/5 user testing participants attempted to zoom on product images and expressed frustration (user testing, n=5), we believe that upgrading to 800x800px images with hover-to-zoom will increase PDP-to-cart conversion by at least 4% for all users, measured by add-to-cart rate on PDP" |

### Example 4: Pricing

| | Hypothesis |
|---|-----------|
| **Weak** | "Simplify the pricing" |
| **Strong** | "Because 38% of surveyed customers find our pricing confusing (customer survey, n=340), we believe that showing a single VAT-inclusive price with clear sale formatting will increase conversion rate by at least 3% for NL market visitors, measured by overall conversion rate" |

---

## Hypothesis Checklist

Use this to validate every hypothesis before it enters the backlog:

- [ ] **Observation present?** — Is there data or research cited? (not just "we think")
- [ ] **Change specified?** — Is the exact modification described clearly?
- [ ] **Outcome predicted?** — Is there a directional prediction with magnitude?
- [ ] **Audience defined?** — Is the target group specified?
- [ ] **Metric named?** — Is the success metric explicitly stated?

If any checkbox fails → send back for revision.

---

## From Learning Repository: Past Experiment Patterns

When generating hypotheses, always query the Experiment Repository for:
1. **Similar experiments** — same page, similar problem, overlapping category
2. **Win patterns** — what approaches tend to win in this category?
3. **Loss patterns** — what approaches consistently fail?
4. **Baseline data** — what are current conversion rates for this page/flow?

Reference past results in the hypothesis: "Similar to EXP-72 which saw +6.1% uplift with image improvements..."
