1/ Shipping variable fonts is harder than it should be.
2/ vf-web-kit turns a font file + real content into a production-ready web kit.
3/ It outputs WOFF2, CSS, tokens, and a QA specimen in one run.
4/ Try it: `npx vf-web-kit path/to/font.ttf --content "./content/**/*.{html,md,mdx,tsx}" --out ./dist/fontkit`
5/ Repo: PetriLahdelma/vf-web-kit
