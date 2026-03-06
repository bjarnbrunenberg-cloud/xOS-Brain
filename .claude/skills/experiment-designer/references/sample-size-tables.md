# Sample Size Reference Tables

## Quick Calculator

Sample size **per variant** at 80% power, 95% confidence (alpha = 0.05):

| Baseline CR | 5% MDE | 10% MDE | 15% MDE | 20% MDE |
|-------------|--------|---------|---------|---------|
| 1% | 1,500,000 | 380,000 | 170,000 | 95,000 |
| 2% | 730,000 | 185,000 | 82,000 | 46,000 |
| 3% | 480,000 | 120,000 | 54,000 | 30,000 |
| 5% | 280,000 | 70,000 | 31,000 | 18,000 |
| 8% | 170,000 | 43,000 | 19,000 | 11,000 |
| 10% | 130,000 | 33,000 | 15,000 | 8,400 |
| 15% | 83,000 | 21,000 | 9,400 | 5,300 |
| 20% | 59,000 | 15,000 | 6,700 | 3,800 |

**MDE** = Minimum Detectable Effect (relative change)
**CR** = Conversion Rate (baseline)

## Duration Formula

```
Duration (days) = (Sample size per variant × Number of variants) ÷ Daily traffic to tested page
```

**Minimum runtime:** 2 full business cycles (typically 14 days) regardless of sample size.

## Rules of Thumb

- **Set MDE realistically** — 5-10% relative lift is typical for UI changes. 20%+ requires fundamental changes.
- **Don't be hopeful** — if you need a 20% lift to reach significance, your test probably won't win.
- **More variants = more traffic** — A/B/3 needs 3x the traffic of A/B.
- **Low-traffic pages** — if estimated duration > 8 weeks, consider:
  1. Larger change (higher MDE)
  2. Different metric (higher baseline rate)
  3. Qualitative validation instead of A/B test
