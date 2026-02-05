**Overview**
vf-web-kit ships variable fonts safely and fast by generating a production-ready web kit with subsetting, CSS, tokens, and a QA specimen.

**Problem**
Shipping variable fonts is hard: you need correct subsetting, CSS, and a reliable way to QA the output.

**What It Does**
- Subsets glyphs from real content or explicit strings.
- Emits WOFF2, CSS, and design tokens.
- Generates a specimen for QA.

**Quickstart**
```bash
npx vf-web-kit path/to/font.ttf --content "./content/**/*.{html,md,mdx,tsx}" --out ./dist/fontkit
```

**Who It Is For**
Frontend engineers and designers who ship variable fonts and want production-ready artifacts.

**Trust & Safety**
Reads local font files and content globs and writes output to `--out`.

**Repo**
PetriLahdelma/vf-web-kit
