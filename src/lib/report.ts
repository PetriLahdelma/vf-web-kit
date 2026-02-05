export function buildReport(font: any, content: string, axes: any[]) {
  const glyphs = new Set(Object.keys(font.characterSet || {}).map((c) => Number(c)));
  const missing = [];
  for (const ch of content) {
    const code = ch.codePointAt(0) || 0;
    if (!glyphs.has(code)) missing.push(ch);
  }
  return { family: font.familyName, axes, missingGlyphs: Array.from(new Set(missing)).join('') };
}
