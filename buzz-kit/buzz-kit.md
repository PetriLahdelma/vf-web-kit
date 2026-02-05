**A) Positioning**
Hooks:
- Ship variable fonts safely and fast.
- Turn one font file into a production-ready web kit.
- Subset + CSS + tokens + specimen in one command.
- Stop guessing glyph coverage with content-driven subsetting.
- Variable font shipping without the drama.
Tagline: Production-ready variable font kits in one CLI run.
One-breath: vf-web-kit takes a font file and outputs a ready-to-ship kit with subsetting, CSS, tokens, and a QA specimen.
Use-cases:
- Generate a web kit from a variable font for a marketing site.
- Subset glyphs from real app content to shrink payloads.
- Produce a specimen sheet for QA before shipping a font update.
Differentiator: It ships the whole kit, not just a subset, including CSS, tokens, and a specimen.

**B) Repo Structure**
Recommended minimal tree additions:
- `buzz-kit/` for launch assets and copy.
- `assets/` for screenshots like `specimen-preview.png`.
- `examples/` for one-font quickstart inputs.
Try in 10 seconds command flow:
1. Run `npx vf-web-kit path/to/font.ttf --content "./content/**/*.{html,md,mdx,tsx}" --out ./dist/fontkit`.
2. Open `./dist/fontkit` and review the generated CSS, tokens, and specimen.
Trust & safety notes:
- Reads local font files and content globs; writes output to `--out`.
- No network calls are documented in the README.

**C) README**
Above-the-fold block inserted:
````md
# vf-web-kit
Ship variable fonts safely and fast.

- Builds a production-ready web kit with subsetting, CSS, tokens, and a QA specimen.
- Subsets glyphs from content or explicit strings via `--content` / `--strings`.
- Supports axis clamping and presets for production ranges via `--axes` / `--preset`.

**Try in 10 seconds**
```bash
npx vf-web-kit path/to/font.ttf --content "./content/**/*.{html,md,mdx,tsx}" --out ./dist/fontkit
```

**Demo**
Record a quick run that shows the generated specimen and the output folder size before/after.

Star if this saves you time.  
→ Buzz Kit: /buzz-kit
````
Outline recommendations:
- Problem statement
- Installation
- Quickstart
- Output structure with example tree
- CLI options
- How it works
- Troubleshooting
- FAQ
- Contributing
- License

**D) Viral Artifacts**
Demo scenarios:
- Before/after payload: run with `--content` and show reduced WOFF2 size.
- Specimen reveal: open the generated specimen image and scroll.
- Axis clamping: run with `--axes` or `--preset` and show the output CSS.
What to record and framing:
- Terminal run plus a quick file tree and the specimen image.
- 15 to 20 seconds for the short, 45 to 60 seconds for the long.
- Frame as "one command to a production-ready font kit".
15 to 20 second script:
- "Shipping variable fonts is hard. This makes it one command." 
- Run `npx vf-web-kit ...`.
- "You get a subset, CSS, tokens, and a QA specimen. Done." 
45 to 60 second script:
- "I needed a production-ready variable font kit with subsetting and CSS." 
- "vf-web-kit takes a font file and your real content." 
- Run the command and show `./dist/fontkit`.
- "It outputs WOFF2, CSS, tokens, and a specimen you can QA." 
- "Perfect for shipping fonts safely without guessing glyphs." 
Captions:
- "Variable fonts to production in one CLI run."
- "Subset + CSS + tokens + specimen."
- "Ship variable fonts safely and fast." 

**E) Distribution Plan**
Targets:
- r/typography
- r/webdev
- r/frontend
- r/web_design
- r/opensource
- r/node
- Hacker News Show HN
- Lobsters
- Indie Hackers
- dev.to
- Awesome Fonts list
- Awesome Typography list
Day 1 launch package:
- Reddit post: "I built vf-web-kit to ship variable fonts safely and fast. It takes a font file and your real content, subsets glyphs, and emits WOFF2 + CSS + tokens + a QA specimen. One command, production-ready kit. Try: `npx vf-web-kit path/to/font.ttf --content \"./content/**/*.{html,md,mdx,tsx}\" --out ./dist/fontkit`. Feedback welcome."
- HN Show: "Show HN: vf-web-kit — build production-ready variable font web kits with subsetting, CSS, tokens, and a specimen"
- X thread line 1: "1/ Shipping variable fonts is harder than it should be."
- X thread line 2: "2/ vf-web-kit turns a font file + content into a production-ready kit."
- X thread line 3: "3/ Subset glyphs, emit WOFF2, CSS, tokens, and a QA specimen."
- X thread line 4: "4/ Try: `npx vf-web-kit path/to/font.ttf --content \"./content/**/*.{html,md,mdx,tsx}\" --out ./dist/fontkit`"
- X thread line 5: "5/ Repo: PetriLahdelma/vf-web-kit"
- LinkedIn post: "Just shipped vf-web-kit: a CLI that builds production-ready variable font web kits. It subsets glyphs from real content and outputs WOFF2, CSS, tokens, and a QA specimen. One command quickstart: `npx vf-web-kit path/to/font.ttf --content \"./content/**/*.{html,md,mdx,tsx}\" --out ./dist/fontkit`. If you ship variable fonts, I would love feedback."
2-week cadence plan:
- Day 1: Launch posts + demo short.
- Day 3: Share specimen screenshot + size win.
- Day 5: Post a breakdown of `--content` vs `--strings`.
- Day 7: Publish a mini guide on axis clamping.
- Day 10: Share a second demo with a different font.
- Day 14: Recap results and ask for feature requests.

**F) Curator Outreach**
Press-kit contents:
- `press-kit/one-pager.md`
- `press-kit/demo-script-15s.md`
- `press-kit/demo-script-60s.md`
- `press-kit/screenshots-plan.md`
- `posts/reddit.md`
- `posts/hn.md`
- `posts/x-thread.md`
- `posts/linkedin.md`
- `checklist-14-days.md`
120-word email pitch:
"Hi [Name], I built vf-web-kit, a CLI that ships variable fonts safely and fast. It takes a font file plus real content, subsets glyphs, and outputs a production-ready kit with WOFF2, CSS, tokens, and a QA specimen. The goal is to make variable font shipping as simple as one command, with artifacts teams can review. It is Node-based and works with any font file input. If your readers care about typography, web performance, or design systems, this might be a useful tool to feature. Happy to share screenshots, a demo clip, or any extra details."
280-char DM pitch:
"Built vf-web-kit: one command to turn a variable font into a production-ready web kit (subset WOFF2 + CSS + tokens + QA specimen). Great for teams shipping fonts. Quickstart: `npx vf-web-kit path/to/font.ttf --content \"./content/**/*.{html,md,mdx,tsx}\" --out ./dist/fontkit`."
Follow-ups:
- "Quick bump in case you missed this. Happy to send a 15s demo clip or specimen screenshot."
- "If this is not a fit, no worries. Is there someone else covering typography/dev tooling I should reach out to?"
Search queries:
- "variable font tooling newsletter"
- "typography developer tools curator"
- "web performance fonts newsletter"
- "design systems tooling roundup"
- "frontend tooling weekly"
- "CSS typography newsletter"
- "web dev tools YouTube"
- "frontend performance podcast"
- "font engineering community"
- "awesome typography maintainers"

**G) Execution Checklist**
Day 0: Prep demo font, verify quickstart command, capture baseline size.
Day 1: Ship launch posts and 15s demo clip.
Day 2: Share specimen screenshot and output tree.
Day 3: Publish a size reduction example with `--content`.
Day 4: Post a short tip on `--strings` use.
Day 5: Share an axis clamping example with `--axes`.
Day 6: Ask for feedback on missing glyphs and edge cases.
Day 7: Ship a longer 60s walkthrough.
Day 8: Share a second font example.
Day 9: Post a FAQ thread.
Day 10: Highlight CSS and token outputs.
Day 11: Request user stories and repos using it.
Day 12: Summarize learnings and open issues to prioritize.
Day 13: Post a recap with before/after sizes.
Day 14: Publish roadmap and next steps.
Metrics to track:
- GitHub stars and clones
- NPM installs
- Demo video views and completion rate
- Issues opened and feature requests
What to fix if momentum stalls:
- Tighten the demo to 10 seconds and show output files earlier.
- Add a real-world before/after size screenshot.
- Clarify the output tree in README with an example.
- Post a second demo with a different font family.
