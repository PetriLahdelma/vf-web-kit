import { expect, it } from 'vitest';
import { buildReport } from '../../src/lib/report.js';

it('uses character codes from font.characterSet values (not array indexes)', () => {
  const font = {
    familyName: 'MockVF',
    characterSet: [65, 66, 67] // A, B, C
  };

  const report = buildReport(font, 'ABZ', []);
  expect(report.missingGlyphs).toBe('Z');
});
