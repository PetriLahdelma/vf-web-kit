import { it, expect } from 'vitest';
import { extractText } from '../../src/lib/content-extract.js';

it('strips tags and code', () => {
  const input = '<h1>Hello</h1> `code`';
  expect(extractText(input)).toBe('Hello');
});
