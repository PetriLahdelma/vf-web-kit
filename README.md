# vf-web-kit

Ship variable fonts safely and fast.

## Problem Statement
Shipping variable fonts is harder than it should be. This tool produces a production-ready kit with subsetting, CSS, tokens, and a QA specimen.

## Installation
```bash
npm i -D vf-web-kit
```

## Quickstart
```bash
npx vf-web-kit path/to/font.ttf --content "./content/**/*.{html,md,mdx,tsx}" --out ./dist/fontkit
```

Or:
```bash
npx vf-web-kit font.woff2 --strings "Hamburgefontsiv 0123456789" --out ./dist/fontkit
```

## CLI Help
```text
Usage: vf-web-kit [options] <font>

Options:
  --content <glob>          Content files to extract glyphs from
  --strings <text>          Explicit strings to include
  --axes <spec>             Axis clamp, e.g. "wght=300..700"
  --axes-file <path>        JSON axes file
  --preset <name>           ui | editorial
  --out <dir>               Output directory (default: ./dist/fontkit)
  --json                    Print report json to stdout
  -h, --help                Display help
```

## Screenshots
- `assets/specimen-preview.png`

## FAQ
**Requires Python?**
No. Pure Node mode only by default.

## Troubleshooting
- Missing glyphs: add `--strings` or include content.
- Complex scripts: avoid aggressive subsetting.

## How It Works
1. Extracts visible text.
2. Subsets the font.
3. Emits WOFF2 + CSS + tokens.
4. Generates a specimen.

## Shipping Variable Fonts Safely
- Use `unicode-range` for subsets.
- Clamp axes to production ranges.
- Use `font-display: swap`.

## Contributing
See `CONTRIBUTING.md`.

## License
MIT.
