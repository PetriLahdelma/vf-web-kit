Show HN: vf-web-kit — build production-ready variable font web kits with subsetting, CSS, tokens, and a specimen

vf-web-kit takes a font file and your real content, subsets glyphs, and outputs WOFF2, CSS, tokens, and a QA specimen. Quickstart:

```bash
npx vf-web-kit path/to/font.ttf --content "./content/**/*.{html,md,mdx,tsx}" --out ./dist/fontkit
```

Happy to answer questions or add missing features.
