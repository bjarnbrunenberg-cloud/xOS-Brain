---
name: Experiment Monitor
description: Monitor running experiments for SRM, anomalies, velocity tracking, and health checks
disable-model-invocation: true
---

# Experiment Monitor Skill

> xOS Module 4 — NOT YET BUILT

## Status: NOT YET BUILT

This module will provide real-time experiment monitoring capabilities.

## Planned Capabilities

- **SRM detection** — Sample Ratio Mismatch alerts for running experiments
- **Velocity tracking** — Are experiments collecting data at expected rates?
- **Anomaly detection** — Flag unusual patterns in experiment data
- **Health checks** — Automated pre-launch and running validation
- **Duration alerts** — Notify when experiments reach target sample size

## MCP Integrations Needed

- VWO or Optimizely API (for real-time experiment data)
- Google Analytics API (for traffic and conversion data)
- Airtable (for experiment metadata)

## Dependencies

- experiment-repository skill (for experiment metadata)
- Airtable MCP (already configured)
