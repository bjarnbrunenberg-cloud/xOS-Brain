---
name: Dashboard
description: Generate and update experimentation dashboards showing velocity, win rates, revenue attribution, and programme health
disable-model-invocation: true
---

# xOS Dashboard Skill

> xOS Module 9 — NOT YET BUILT

## Status: NOT YET BUILT

This module will generate web-based experimentation dashboards.

## Planned Capabilities

- **Velocity dashboard** — Ideas/month, launched/month, concluded/month
- **Win rate tracking** — Win rate, conclusive rate, decision rate over time
- **Revenue attribution** — Annualised impact, top winners, cumulative ROI
- **Programme health** — Quality score trends, pipeline balance, AARRR coverage
- **Client-facing reports** — Branded PDF/web reports for stakeholders

## Technical Approach

- Airtable Interface Designer for native dashboards (already spec'd)
- Web dashboard option using Next.js + Airtable API
- PDF reports via report-generator skill

## Dependencies

- experiment-repository skill (data source)
- report-generator skill (for PDF exports)
- Airtable MCP (already configured)
