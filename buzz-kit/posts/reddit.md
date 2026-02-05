Title: Show: vf-web-kit — ship variable fonts safely and fast

Body:
I built vf-web-kit to make variable font shipping less painful. It takes a font file plus real content, subsets glyphs, and emits a production-ready kit with WOFF2, CSS, tokens, and a QA specimen.

Quickstart:
```bash
npx vf-web-kit path/to/font.ttf --content "./content/**/*.{html,md,mdx,tsx}" --out ./dist/fontkit
```

Feedback welcome. If you ship fonts, I would love to know what is missing.
