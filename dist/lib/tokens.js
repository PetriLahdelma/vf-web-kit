function buildTokens(font, axes) {
  return { family: font.familyName, axes, presets: { ui: { wght: 500 }, editorial: { wght: 700 } } };
}

export { buildTokens };
