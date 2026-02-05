export default {
  name: "vf-web-kit",
  tagline: "Ship variable fonts safely and fast.",
  value: "Subset glyphs, clamp axes, and ship production-ready kits.",
  accent: "#A855F7",
  pills: ["Subsetting","Axis clamp","Specimen"],
  demo: ["$ vf-web-kit font.ttf --content \"./content/**/*.{md,tsx}\" --out ./dist/fontkit","Subset: 1,284 glyphs","Kit size: 210 KB (woff2)","Specimen: ./dist/fontkit/specimen.html"],
  callout: "Provide representative content or strings to avoid missing glyphs in the subset.",
  quickstart: "npx vf-web-kit path/to/font.ttf --content './content/**/*.{html,md,mdx,tsx}' --out ./dist/fontkit",
  hero: { width: 1600, height: 900 },
  icon: {
    inner: `
<rect x="104" y="128" width="304" height="256" rx="28" stroke="{{accent}}" stroke-width="{{stroke}}"/>
<line x1="200" y1="168" x2="200" y2="352" stroke="{{accent}}" stroke-width="{{stroke}}" stroke-linecap="round"/>
<line x1="312" y1="168" x2="312" y2="352" stroke="{{accent}}" stroke-width="{{stroke}}" stroke-linecap="round"/>
<circle cx="200" cy="232" r="18" fill="{{accent}}"/>
<circle cx="312" cy="304" r="18" fill="{{accent}}"/>
<line x1="156" y1="352" x2="356" y2="352" stroke="{{accent}}" stroke-width="{{stroke}}" stroke-linecap="round"/>
`
  }
};
