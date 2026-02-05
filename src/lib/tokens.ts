export function buildTokens(font: any, axes: any[]) {
  return { family: font.familyName, axes, presets: { ui: { wght: 500 }, editorial: { wght: 700 } } };
}
