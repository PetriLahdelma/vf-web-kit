I just shipped vf-web-kit, a CLI that builds production-ready variable font web kits. It subsets glyphs from real content and outputs WOFF2, CSS, tokens, and a QA specimen.

Quickstart:
```bash
npx vf-web-kit path/to/font.ttf --content "./content/**/*.{html,md,mdx,tsx}" --out ./dist/fontkit
```

If you ship variable fonts, I would love your feedback.
