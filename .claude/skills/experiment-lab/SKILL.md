---
name: Experiment Lab
description: Manage the AI Experiment Lab Next.js app — prompt engineering, design, deployment, and live stage demos
user-invocable: true
allowed-tools:
  - Read
  - Write
  - Edit
  - Bash
  - Glob
  - Grep
---

# AI Experiment Lab Skill

> Manage, modify, and deploy the AI Experiment Lab — a live tool that turns vague AI initiatives into structured, killable experiments with a 30/60/90-day plan.

## Trigger Patterns

Activate when the user mentions:
- "experiment lab", "ai lab", "the lab app"
- "stage demo", "live demo", "conference demo"
- "experiment brief", "brief generator"
- "experiment app", "experiment tool"
- "update the prompt", "modify the brief sections"

## Context Loading

Before making changes, read:

| File | Path | Purpose |
|------|------|---------|
| System prompt | `ai-experiment-lab/lib/prompt.ts` | The CORE — Claude's instructions for generating briefs |
| Section types | `ai-experiment-lab/lib/types.ts` | Section metadata (icons, titles, ordering) |
| Stream parser | `ai-experiment-lab/lib/parse-stream.ts` | How streaming markdown becomes section cards |
| API route | `ai-experiment-lab/app/api/generate/route.ts` | Claude model config, streaming handler |
| Main page | `ai-experiment-lab/app/page.tsx` | App flow, gating logic, mode switching |
| Brand design | `ai-experiment-lab/app/globals.css` | Brand tokens, animations, Tailwind theme |

## Architecture

```
ai-experiment-lab/
├── app/
│   ├── layout.tsx           # Root layout, DM Sans font, metadata
│   ├── page.tsx             # Main page — form → streaming output → export
│   ├── globals.css          # Brand tokens (@theme), animations
│   └── api/generate/
│       └── route.ts         # POST — Claude streaming via Vercel AI SDK
├── components/
│   ├── Header.tsx           # App header + stage mode badge
│   ├── ExperimentForm.tsx   # Initiative input + context dropdowns
│   ├── ExperimentBrief.tsx  # Renders all section cards
│   ├── BriefSection.tsx     # Individual card with fade-in + bold formatting
│   ├── EmailCapture.tsx     # Lead gen email gate
│   └── ExportButton.tsx     # Markdown export
├── lib/
│   ├── prompt.ts            # System prompt (SEF-based) + user prompt builder
│   ├── types.ts             # BriefSection type + SECTION_META mapping
│   └── parse-stream.ts      # Splits streaming markdown by ## headers
├── .env.local               # ANTHROPIC_API_KEY (git-ignored)
└── .env.example             # Template
```

### Tech Stack

- **Framework:** Next.js 15 (App Router, Turbopack)
- **AI:** Vercel AI SDK (`ai` + `@ai-sdk/anthropic`) — streaming responses
- **Model:** Claude Sonnet (claude-sonnet-4-5-20250929)
- **Styling:** Tailwind CSS v4 with `@theme` directive
- **Font:** DM Sans (Google Fonts)

### Two Modes

| Mode | URL | Behaviour |
|------|-----|-----------|
| **Stage** | `?mode=stage` | Full output, no gates, larger text, stage badge |
| **Lead gen** | Default (no param) | Email gate after section 3, blur remaining sections |

### 9 Experiment Brief Sections

1. Experiment Name
2. Hypothesis
3. Single KPI
4. Success Criteria
5. Kill Criteria
6. 30/60/90-Day Timeline
7. Resources Required
8. Risks & Mitigations
9. First Micro-Experiment

## Common Workflows

### Modify the System Prompt

1. Read `ai-experiment-lab/lib/prompt.ts`
2. Edit the `SYSTEM_PROMPT` constant
3. Test with `npm run dev` → generate a brief → verify output quality
4. If adding sections: also update `types.ts` (SECTION_META) and `parse-stream.ts`

### Add a New Section

1. Add section header to `SYSTEM_PROMPT` in `prompt.ts`
2. Add entry to `SECTION_META` in `types.ts` (icon, display title)
3. Test streaming — new section should auto-parse via `## HEADER` detection

### Update Visual Design

1. Read `ai-experiment-lab/app/globals.css` for brand tokens and animations
2. Component styles are in individual `.tsx` files (Tailwind classes)
3. Brand tokens: `brand-dark`, `brand-cyan`, `brand-silver`, `brand-card`, `brand-card-border`

### Prepare for Stage Demo

1. Start dev server: `cd ai-experiment-lab && npm run dev`
2. Open `http://localhost:3000?mode=stage`
3. Test with a real initiative to warm up the API
4. Verify: large text, no email gate, smooth streaming animation
5. Have a backup: pre-generate one brief in case API fails on stage

### Deploy to Vercel

1. Push to GitHub
2. Connect repo in Vercel dashboard
3. Set environment variable: `ANTHROPIC_API_KEY`
4. Deploy — zero config needed for Next.js

## Development Commands

```bash
cd ai-experiment-lab
npm install          # Install dependencies (first time)
npm run dev          # Start dev server (Turbopack) → http://localhost:3000
npm run build        # Production build
npm run start        # Start production server
```

## Behavioural Rules

1. **Prompt is sacred** — The system prompt in `prompt.ts` is the core product. Changes must be deliberate.
2. **Test after changes** — Always run `npm run dev` and generate a brief after modifications.
3. **British English** — The prompt enforces British English spelling in outputs.
4. **Stage-first** — Design for projector readability (18px+ body, high contrast).
5. **Keep it simple** — No over-engineering. The streaming experience IS the product.

## Related Skills

- Strategic Alignment — For the Strategic Experimentation Framework (SEF) behind the prompt
- Experiment Designer — For experiment design methodology

---

Present output in conversation. Ask before saving anywhere.
