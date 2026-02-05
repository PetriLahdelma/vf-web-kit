import { it, expect } from 'vitest';
import { spawnSync } from 'node:child_process';

it('CLI fails on invalid font', () => {
  const res = spawnSync('node', ['dist/cli.js', 'test/fixtures/invalid-font.ttf', '--strings', 'abc']);
  expect(res.status).toBe(1);
});
