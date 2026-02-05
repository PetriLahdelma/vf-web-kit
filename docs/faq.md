# FAQ

**Why do I need content or strings?**
Subsetting needs real text to decide which glyphs to keep.

**Are outputs byte-identical?**
The tool is deterministic, but some font toolchains embed metadata. See `docs/reproducibility.md`.

**Which preset should I use?**
`ui` is tighter for interfaces; `editorial` keeps more axis range for display type.
