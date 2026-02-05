import fs from 'node:fs';
import path from 'node:path';
import subsetFont from 'subset-font';
import fontkit from 'fontkit';
import { buildTokens } from './tokens.js';
import { buildSpecimen } from './specimen.js';
import { buildReport } from './report.js';

async function buildFontKit(opts) {
  const buf = fs.readFileSync(opts.fontPath);
  const font = fontkit.openSync(opts.fontPath);
  const axes = resolveAxes(opts.axes, opts.axesFile, opts.preset, font);

  const subset = await subsetFont(buf, opts.content, { targetFormat: 'woff2', variationAxes: axes });

  const fontsDir = path.join(opts.outDir, 'fonts');
  const cssDir = path.join(opts.outDir, 'css');
  const tokensDir = path.join(opts.outDir, 'tokens');
  const specimenDir = path.join(opts.outDir, 'specimen');
  const reportsDir = path.join(opts.outDir, 'reports');
  fs.mkdirSync(fontsDir, { recursive: true });
  fs.mkdirSync(cssDir, { recursive: true });
  fs.mkdirSync(tokensDir, { recursive: true });
  fs.mkdirSync(specimenDir, { recursive: true });
  fs.mkdirSync(reportsDir, { recursive: true });

  const fontFile = path.join(fontsDir, 'subset.woff2');
  fs.writeFileSync(fontFile, subset);

  const css = buildCss(font, axes);
  fs.writeFileSync(path.join(cssDir, 'font-face.css'), css);

  const tokens = buildTokens(font, axes);
  fs.writeFileSync(path.join(tokensDir, 'typography.tokens.json'), JSON.stringify(tokens, null, 2));

  const specimen = buildSpecimen(font, axes);
  fs.writeFileSync(path.join(specimenDir, 'index.html'), specimen);

  const report = buildReport(font, opts.content, axes);
  fs.writeFileSync(path.join(reportsDir, 'glyph-coverage.json'), JSON.stringify(report, null, 2));
  fs.writeFileSync(path.join(reportsDir, 'report.md'), `# Font Kit Report

Family: ${font.familyName}
`);

  return report;
}

function resolveAxes(axes, axesFile, preset, font) {
  if (axesFile) {
    const parsed = JSON.parse(fs.readFileSync(axesFile, 'utf8'));
    if (!parsed?.axes || !Array.isArray(parsed.axes)) {
      throw new Error('axesFile must contain { "axes": [...] }');
    }
    return parsed.axes.map((axis) => normalizeAxis(axis));
  }
  if (axes) {
    return axes.split(',').map((part) => parseAxisSpec(part));
  }
  if (preset === 'ui') return [{ tag: 'wght', min: 400, max: 700 }];
  if (preset === 'editorial') return [{ tag: 'wght', min: 300, max: 900 }];
  if (preset) throw new Error('Unknown preset (use ui or editorial)');
  return Object.keys(font.variationAxes || {}).map((tag) => normalizeAxis({ tag, ...font.variationAxes[tag] }));
}

function buildCss(font, axes) {
  const axisSettings = axes.map((a) => `'${a.tag}' ${a.min}`).join(', ');
  return `@font-face {
  font-family: '${font.familyName}';
  src: url('../fonts/subset.woff2') format('woff2');
  font-display: swap;
  font-variation-settings: ${axisSettings};
}`;
}

function parseAxisSpec(part) {
  const [tag, range] = part.split('=');
  if (!tag || !range) throw new Error(`Invalid axis spec: ${part}`);
  const [minRaw, maxRaw] = range.split('..');
  const min = Number(minRaw);
  const max = Number(maxRaw);
  return normalizeAxis({ tag, min, max });
}

function normalizeAxis(axis) {
  if (!axis?.tag || typeof axis.tag !== 'string') {
    throw new Error('Axis tag is required');
  }
  const min = Number(axis.min);
  const max = Number(axis.max);
  if (!Number.isFinite(min) || !Number.isFinite(max)) {
    throw new Error(`Invalid axis range for ${axis.tag}`);
  }
  if (min > max) {
    throw new Error(`Axis min must be <= max for ${axis.tag}`);
  }
  return { tag: axis.tag, min, max };
}

export { buildFontKit };
