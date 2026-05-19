import { it, expect } from 'vitest';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

it('CLI fails on invalid font', () => {
  const res = spawnSync('node', ['dist/cli.js', 'test/fixtures/invalid-font.ttf', '--strings', 'abc']);
  expect(res.status).toBe(3);
});

it('CLI fails with invalid args on malformed config JSON', () => {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'vf-web-kit-'));
  const configPath = path.join(tmpDir, 'vfkit.config.json');
  fs.writeFileSync(configPath, '{');

  const res = spawnSync('node', ['dist/cli.js', 'missing-font.ttf', '--config', configPath, '--strings', 'abc']);
  expect(res.status).toBe(4);
  expect(res.stderr.toString()).toContain(`Invalid config file JSON: ${configPath}`);
});

it('CLI fails with invalid args on malformed axes file JSON', () => {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'vf-web-kit-'));
  const fontPath = path.join(tmpDir, 'mock-font.ttf');
  const axesPath = path.join(tmpDir, 'axes.json');
  fs.writeFileSync(fontPath, 'not-a-real-font');
  fs.writeFileSync(axesPath, '{');

  const res = spawnSync('node', ['dist/cli.js', fontPath, '--strings', 'abc', '--axes-file', axesPath]);
  expect(res.status).toBe(4);
  expect(res.stderr.toString()).toContain(`Invalid axes file JSON: ${axesPath}`);
});
