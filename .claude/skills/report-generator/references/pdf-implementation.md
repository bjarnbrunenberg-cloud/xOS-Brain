# PDF Implementation Reference

The complete reference implementation for DOCX-to-PDF conversion lives at:
`scripts/docx_to_pdf.py`

## Usage

```bash
python scripts/docx_to_pdf.py <input.docx> <output.pdf>
```

## Architecture Overview

The converter reads a DOCX file (python-docx) and generates a branded PDF (reportlab).

### Key Components

1. **Font Registration** — Poppins family registered as `Lib`, `LibB`, `LibI`, `LibBI`, `LibM`, `LibMI`
2. **Style Definitions** — `mk_style()` helper creates `ParagraphStyle` objects with brand defaults
3. **Page Templates** — Two templates: `cover` (solid navy) and `normal` (white + header/footer)
4. **Cover Page Builder** — Detects cover text before first heading, classifies into label/title/subtitle/tagline/meta
5. **Body Converter** — Iterates `doc.element.body` children to maintain paragraph/table ordering
6. **Table Builder** — `build_table()` maps DOCX tables to `RLTable` with brand styling and semantic colour preservation
7. **Code Block Handler** — 1x1 tables converted to multi-row tables (one row per line) for page-split support
8. **Callout Box Handler** — 1x2 tables (empty accent cell + content) converted to branded accent boxes
9. **Colour Mapper** — `map_color()` translates source document colours to brand palette, preserving semantic colours

### Patterns Worth Reusing

- **Multi-row tables for page splitting**: Both code blocks and callout boxes use multi-row table structures so reportlab can split them across pages (single-cell tables and custom Flowables cannot split)
- **Cover text classification**: Simple heuristic separates taglines from meta info based on keyword detection
- **Spaced-out labels**: `'     '.join(' '.join(word) for word in text.split())` creates letter-spaced labels with visible word boundaries
- **Run-level formatting preservation**: `runs_to_markup()` converts DOCX bold/italic runs to reportlab XML tags

### Dependencies

```
python-docx
reportlab
```

Both are available via pip. Poppins font files must be at `/usr/share/fonts/truetype/google-fonts/Poppins-*.ttf`.
