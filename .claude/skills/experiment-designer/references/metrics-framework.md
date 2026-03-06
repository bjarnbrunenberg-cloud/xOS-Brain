# Metrics Framework

## Three Metric Types

### Primary Metric
The metric that directly measures the hypothesis. One per experiment. Must be:
- Directly tied to the predicted outcome
- Measurable with existing tracking
- Sensitive enough to detect the expected change
- Actionable — results lead to clear decisions

### Secondary Metrics
Support interpretation of the primary metric. Typically 2-4 per experiment.
- Help explain WHY the primary metric moved (or didn't)
- Provide context for the result
- Can reveal unexpected effects

### Guardrail Metrics
Prevent unintended harm. Typically 1-3 per experiment.
- Monitor for negative side effects
- Protect core business metrics
- Set thresholds that trigger rollback

## Common Metrics by AARRR Category

| Category | Primary Options | Secondary | Guardrail |
|----------|----------------|-----------|-----------|
| **Acquisition** | Homepage-to-PDP rate, landing page CTR, bounce rate | Pages per session, time on site, scroll depth | Page load time, error rate |
| **Activation** | Add-to-cart rate, signup rate, first action completion | Time to first action, engagement score | Bounce rate, rage clicks |
| **Revenue** | Conversion rate, AOV, revenue per visitor | Cart completion rate, payment step completion | Refund rate, CS contacts |
| **Retention** | Repeat purchase rate, LTV, 30-day return rate | Email open rate, account login frequency | Unsubscribe rate, churn |
| **Referral** | Referral rate, NPS, social share rate | Referral conversion rate, viral coefficient | Spam reports |

## Metric Selection Checklist

- [ ] Primary metric directly measures the hypothesis
- [ ] Primary metric has sufficient volume (see sample size tables)
- [ ] Secondary metrics help explain results
- [ ] At least 1 guardrail metric protects against harm
- [ ] All metrics can be accurately tracked
- [ ] No metric conflicts (e.g., optimising CTR at cost of conversion)
- [ ] Metrics align with the experiment's AARRR category

## Anti-Patterns

| Anti-Pattern | Problem | Fix |
|-------------|---------|-----|
| Too many primary metrics | Increases false positive risk | Pick ONE primary metric |
| Vanity metrics as primary | Clicks ≠ conversions | Tie to business outcome |
| No guardrails | Can't detect harm | Always protect what matters |
| Unmeasurable metrics | "Brand perception" can't be A/B tested | Choose quantifiable proxy |
| Post-hoc metric selection | Cherry-picking positive results | Define all metrics before launch |
