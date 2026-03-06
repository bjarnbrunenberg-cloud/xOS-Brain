---
name: Report Generator
description: >
  Generate branded experiment reports, executive summaries, and formatted documents.
  Uses Bjarn Brunenberg's brand design system for all visual output — PDFs, DOCX,
  HTML reports, slide decks, one-pagers, and dashboards. Trigger on: "report",
  "PDF", "executive summary", "branded document", "format this professionally".
context: fork
allowed-tools:
  - Read
  - Write
  - Bash
  - Glob
  - Grep
  - mcp__airtable__*
  - mcp__claude_ai_Airtable__*
---

# Bjarn Brunenberg — Brand Design System

This skill contains the complete brand identity system for Bjarn Brunenberg / xOS.
Every formatted output — PDFs, Word docs, presentations, spreadsheets, HTML pages,
dashboards — must follow these rules exactly. The goal: every deliverable looks
unmistakably professional, crystal clear, and cohesively branded.

---

## 1. Core Colour Palette

| Token             | Hex       | Name           | Role                                                  |
|-------------------|-----------|----------------|-------------------------------------------------------|
| `BRAND_DARK`      | `#022147` | Deep Navy      | Primary dark — backgrounds, header bars, body text    |
| `BRAND_BLUE`      | `#135BB4` | Brand Blue     | Secondary — H2 headings, callout titles, links        |
| `BRAND_HIGHLIGHT`  | `#4DE2FE` | Electric Cyan  | Accent ONLY — CTAs, accent lines, labels (max 10-15%) |
| `BRAND_SILVER`    | `#D9D9D9` | Silver         | Subtitle text on dark, borders, dividers              |
| `BRAND_WHITE`     | `#FFFFFF` | White          | Page backgrounds, text on dark backgrounds            |
| `BRAND_LIGHT`     | `#EBF4FF` | Light Blue     | Alternating table rows, callout box backgrounds       |
| `BRAND_GRAY`      | `#022147` | Body Text      | Same as Deep Navy — ensures readability on white      |

### Colour Ratio

Aim for approximately **70% Deep Navy / Brand Blue — 20% White / Silver — 10% Electric Cyan**.

### Colour Rules — Non-Negotiable

1. **Page backgrounds are ALWAYS white** (except cover pages, which are solid Deep Navy)
2. **Body text is ALWAYS Deep Navy `#022147`** on white backgrounds — never pure black `#000000`
3. **No pure black anywhere** — use Deep Navy instead
4. **No warm colours in branding** — no reds, oranges, yellows, pinks in decorative elements
5. **Electric Cyan is accent only** — never use it for large areas, body text, or backgrounds
6. **Exception: Semantic colours ARE allowed** for data visualization and decision tables:
   - Green `#D1FAE5` — Go, Low risk, Positive, Success
   - Yellow `#FEF3C7` — Pivot, Medium risk, Warning, Caution
   - Red `#FEE2E2` — Kill, High risk, Critical, Negative, Error
   - Blue `#DBEAFE` — Neutral info, informational highlights

### Colour Mapping from Source Documents

When converting from DOCX or other sources, map colours as follows:

```
Dark backgrounds (#1A1A2E, #2A2A4E, #000000, #16213E) → #022147 (Deep Navy)
Red/pink (#FEE2E2, #FFCCCC, #FF9999, #FFC7CE)         → #FEE2E2 (keep for semantic)
Yellow/amber (#FEF3C7, #FFE6A6, #FFCC80, #FFF2CC)      → #FEF3C7 (keep for semantic)
Green (#D1FAE5, #A8E6CF, #D9EAD3, #E2EFDA)             → #D1FAE5 (keep for semantic)
Blue (#DBEAFE, #B3E5FC, #CFE2F3, #D6E4F0)              → #DBEAFE (keep)
Light/white (#F5F5FA, #F2F2F2, #F5F5F5)                → remove (use white)
```

---

## 2. Typography

### Primary Font: DM Sans

The brand typeface is **DM Sans** (Google Font). If DM Sans is unavailable, use **Poppins** as the closest geometric sans-serif alternative. Both are clean, modern, and highly readable.

| Weight  | Use                              | PDF Internal Name |
|---------|----------------------------------|-------------------|
| 400     | Body text, regular content       | `Lib`             |
| 500     | H3 subheadings, meta info        | `LibM`            |
| 700     | H1, H2, table headers, bold text | `LibB`            |
| Italic  | Emphasis within body              | `LibI`            |

### Font Paths (Linux / Cowork VM)

```
/usr/share/fonts/truetype/google-fonts/Poppins-Regular.ttf
/usr/share/fonts/truetype/google-fonts/Poppins-Bold.ttf
/usr/share/fonts/truetype/google-fonts/Poppins-Italic.ttf
/usr/share/fonts/truetype/google-fonts/Poppins-BoldItalic.ttf
/usr/share/fonts/truetype/google-fonts/Poppins-Medium.ttf
/usr/share/fonts/truetype/google-fonts/Poppins-MediumItalic.ttf
```

If DM Sans TTF files become available, prefer those. Register them with the same internal names.

### Type Scale

| Element        | Font    | Size  | Leading | Colour       | Notes                             |
|----------------|---------|-------|---------|--------------|-----------------------------------|
| H1             | Bold    | 22pt  | 26pt    | Deep Navy    | Page break before (except first)  |
| H2             | Bold    | 15pt  | 19pt    | Brand Blue   | Section headers                   |
| H3             | Medium  | 12pt  | 16pt    | Deep Navy    | Subsection headers                |
| Body           | Regular | 10.5pt| 14pt    | Deep Navy    | Main content                      |
| Bullet         | Regular | 10.5pt| 14pt    | Deep Navy    | Left indent 24pt, bullet indent 12pt |
| Table cell     | Regular | 9pt   | 12pt    | Deep Navy    | Compact for data density          |
| Table header   | Bold    | 9pt   | 12pt    | White        | On Deep Navy background           |
| Code           | Courier | 8.5pt | 11pt    | Deep Navy    | Monospace for code blocks         |
| Cover title    | Bold    | 42pt  | 48pt    | White        | Centred on navy cover             |
| Cover subtitle | Regular | 18pt  | 24pt    | Silver       | Centred below title               |
| Cover tagline  | Regular | 10pt  | 15pt    | Silver       | Centred, must fit single line     |
| Cover label    | Medium  | 12pt  | 16pt    | Electric Cyan| Spaced-out uppercase label        |
| Cover meta     | Medium  | 11pt  | 14pt    | Silver       | Author, date info                 |
| Cover confid.  | Bold    | 11pt  | 14pt    | Electric Cyan| "CONFIDENTIAL" marker             |

---

## 3. Page Layout

### Page Size

A4 (595.28 x 841.89 pt) with 0.75 inch (54pt) margins on all sides.
Content width = page width - 2 margins ≈ 487pt.

### Cover Page

The cover page is a full-bleed **solid Deep Navy `#022147`** background. No gradient.

**Layout from top to bottom:**

1. **Spacer**: 2.2 inches from top
2. **Label** (if document title is uppercase or ≤4 words): Spaced-out uppercase in Electric Cyan
   - Letters within each word separated by single spaces
   - Words separated by 5 spaces (wider gap for clear word boundaries)
   - Example: `P R O D U C T     V I S I O N`
   - Font: Medium 12pt, Electric Cyan, centred
3. **Title**: Bold 42pt, White, centred
4. **Subtitle**: Regular 18pt, Silver, centred
5. **Spacer**: 20pt
6. **Taglines**: Regular 10pt, Silver, centred — one line each, must not wrap
7. **Spacer**: 24pt between taglines and meta info
8. **Meta lines**: Medium 11pt, Silver — author, date, org info
9. **"CONFIDENTIAL"**: Bold 11pt, Electric Cyan

**Cover text classification rules:**
- Text containing "bjarn", "february", "2026", "2025", "prepared for", "github" → meta line
- Text matching "CONFIDENTIAL" → confidential marker
- All other text after subtitle → tagline

**Important**: Taglines must fit on a single line. At 10pt font size, a line of ~97 characters fits within the 487pt content width. If taglines are longer, reduce font size further.

### Normal Pages

White background with:

1. **Header bar**: Full-width Deep Navy rectangle, 30pt tall at page top
   - White text (Bold 8pt): `"xOS | {Document Title}"` left-aligned at margin
   - Electric Cyan accent line (1.5pt) directly below the header bar
2. **Footer**:
   - Silver line (0.5pt) at 38pt from bottom, margin to margin
   - Deep Navy text (Regular 8pt): `"CONFIDENTIAL | Page {N}"` at 24pt from bottom

### Page Breaks

- H1 headings trigger a page break (except the very first H1)
- Cover page uses a separate page template, switching to normal template via `NextPageTemplate`

---

## 4. Component Styling

### Tables

Tables are the primary data presentation tool. They must look sharp and scannable.

**Header row:**
- Background: Deep Navy `#022147`
- Text: White, Bold 9pt
- This creates a strong visual anchor

**Data rows:**
- Alternating: White (odd rows) / Light Blue `#EBF4FF` (even rows)
- Text: Deep Navy, Regular 9pt
- Grid: Silver `#D9D9D9` lines, 0.5pt

**Cell padding:** 6pt all sides

**Cell background mapping:** Semantic colours from source documents are preserved:
- `#FEE2E2` (red) → Kill, Critical, High risk
- `#FEF3C7` (yellow) → Pivot, Medium risk
- `#D1FAE5` (green) → Go, Low risk, Success
- `#DBEAFE` (blue) → Informational
- `#022147` (navy) → Dark emphasis rows (white text)

**Column width distribution** (content width = 487pt):

| Columns | Distribution                                    |
|---------|-------------------------------------------------|
| 2       | Equal 50/50                                     |
| 3       | 35% / 30% / 35%                                |
| 4       | 28% / 24% / 24% / 24%                          |
| 5       | 8% / 27% / 15% / 25% / 25%                     |
| 6       | 6% / 22% / 12% / 12% / 24% / 24%              |
| 7       | 5% / 8% / 20% / 10% / 10% / 24% / 23%         |

First header row repeats on page splits (`repeatRows=1`).

### Code Blocks

Code blocks appear as multi-row tables (one row per line) so they can split across pages.

- Background: `#F0F4FA` (very light blue-grey)
- Font: Courier 8.5pt, Deep Navy
- Border: Silver 0.5pt on all edges
- Padding: 10pt left/right, 2pt top/bottom per line, 8pt extra on first/last line

### Callout / Accent Boxes

Used for important notes, key takeaways, and highlighted information.

- Structure: 2-column table (accent bar + content)
- Left accent bar: 4pt wide, Electric Cyan `#4DE2FE`
- Content area: Light Blue `#EBF4FF` background
- Title text: Bold 10pt, Brand Blue `#135BB4`
- Body text: Regular 10pt, Deep Navy
- Padding: 12pt horizontal, 10pt vertical on content cell
- Built as tables (not custom flowables) so they can split across pages

### Bullet Points

- Prefix: `"• "` (bullet character + space)
- Same size as body text (10.5pt)
- Left indent: 24pt, bullet indent: 12pt

---

## 5. Format-Specific Guidelines

### PDF (reportlab)

The reference implementation is in `scripts/docx_to_pdf.py`. This is the gold standard.

Key implementation patterns:
- Use `BaseDocTemplate` with separate `PageTemplate` for cover and normal pages
- Register Poppins font family with `pdfmetrics.registerFont` / `registerFontFamily`
- Use `ParagraphStyle` with a helper function `mk_style()` for DRY style definitions
- Use `NextPageTemplate('normal')` before `PageBreak()` to switch from cover
- Tables use `repeatRows=1` for header row repetition on page splits
- Code blocks as multi-row `RLTable` (one row per code line) for page-split support
- Callout boxes as 2-column `RLTable` (accent bar + content) for page-split support
- XML-escape all text for Paragraph objects
- Preserve bold/italic formatting from DOCX runs

### DOCX (python-docx)

When creating Word documents:
- Use DM Sans / Poppins as the document font
- H1: Bold 22pt, Deep Navy
- H2: Bold 15pt, Brand Blue
- H3: Medium 12pt, Deep Navy
- Body: Regular 10.5pt, Deep Navy
- Tables: Deep Navy header row, alternating Light Blue rows, Silver grid
- Page size: A4 with 0.75" margins
- Header: document title in Deep Navy, cyan accent line below
- Footer: "CONFIDENTIAL | Page X" in Deep Navy

### PPTX (python-pptx)

When creating presentations:
- Slide size: 16:9 widescreen
- Title slides: Solid Deep Navy background, White title, Silver subtitle
- Content slides: White background, Deep Navy header bar at top with cyan accent line
- Title text: Bold, White on navy / Deep Navy on white
- Body text: Regular, Deep Navy
- Accent elements: Electric Cyan sparingly (max 10-15%)
- Charts/graphs: Use Deep Navy, Brand Blue, Electric Cyan as primary series colours
- Tables in slides: Same styling as PDF tables (navy header, alternating rows)

### Google Docs / Sheets

When formatting Google documents:
- Apply the same colour palette and typography rules
- Use DM Sans if available in Google Fonts (it is a Google Font)
- Headers: Deep Navy (H1), Brand Blue (H2)
- Tables: Deep Navy header row with white text, Light Blue alternating rows
- Conditional formatting in Sheets: use semantic colours for RAG status
- Chart colours: Deep Navy → Brand Blue → Electric Cyan progression
- Avoid pure black — use Deep Navy for all text

### HTML / Web Reports

When generating HTML:
- Font family: `'DM Sans', 'Poppins', system-ui, sans-serif`
- Import DM Sans from Google Fonts: `@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap')`
- Use CSS custom properties for brand tokens:
  ```css
  :root {
    --brand-dark: #022147;
    --brand-blue: #135BB4;
    --brand-cyan: #4DE2FE;
    --brand-silver: #D9D9D9;
    --brand-white: #FFFFFF;
    --brand-light: #EBF4FF;
  }
  ```
- Background: white
- Text: Deep Navy
- Links: Brand Blue, hover → Electric Cyan
- Tables: same styling principles
- Code blocks: `#F0F4FA` background, `monospace` font

---

## 6. Design Principles

1. **Clarity over decoration** — every element serves a purpose. No gradients on content pages, no drop shadows, no unnecessary borders.
2. **High contrast** — Deep Navy on White gives excellent readability. White on Deep Navy for headers and cover pages.
3. **Consistent hierarchy** — H1 > H2 > H3 > Body is visually obvious through size, weight, and colour differences.
4. **Data-first tables** — compact 9pt text, strong header row, semantic colours for quick scanning.
5. **Whitespace is structure** — generous margins (0.75"), proper spacing between sections, clear separation between cover content zones.
6. **Professional restraint** — Electric Cyan is the "pop" colour but used sparingly. The design should feel corporate-serious, not playful.

---

## 7. Quick Reference — Do's and Don'ts

**DO:**
- Use Deep Navy for body text and H1/H3
- Use Brand Blue for H2 and callout titles
- Use Electric Cyan only for accent lines, labels, and "CONFIDENTIAL" markers
- Use White backgrounds for content pages
- Use solid Deep Navy for cover pages
- Preserve semantic green/yellow/red for data tables
- Ensure taglines fit on a single line
- Use alternating Light Blue rows in tables

**DON'T:**
- Use pure black (`#000000`) anywhere
- Use warm colours (red, orange, yellow) for decorative purposes
- Use Electric Cyan for large areas or body text
- Use gradients on cover pages (solid Deep Navy only)
- Let taglines wrap to multiple lines
- Skip the header bar on content pages
- Use more than 10-15% cyan in any composition
