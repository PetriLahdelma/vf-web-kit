import fs from 'node:fs';
import { Command } from 'commander';
import fg from 'fast-glob';
import { extractText } from './lib/content-extract.js';
import { buildFontKit } from './lib/font-build.js';

const program = new Command();
program
  .name('vf-web-kit')
  .argument('<font>', 'path to font file')
  .option('--config <path>', 'config file path')
  .option('--content <glob>', 'content glob for glyph extraction')
  .option('--strings <text>', 'explicit glyph strings')
  .option('--axes <spec>', 'axis clamp, e.g. "wght=300..700"')
  .option('--axes-file <path>', 'json axes file')
  .option('--preset <name>', 'ui | editorial')
  .option('--out <dir>', 'output directory', './dist/fontkit')
  .option('--json', 'print report json to stdout')
  .action(async (font, opts) => {
    try {
      const configPath = opts.config || (fs.existsSync('vfkit.config.json') ? 'vfkit.config.json' : null);
      const config = configPath ? JSON.parse(fs.readFileSync(configPath, 'utf8')) : {};
      const merged = { ...config, ...opts };

      let contentText = '';
      if (merged.content) {
        const files = await fg(merged.content);
        for (const f of files) contentText += extractText(fs.readFileSync(f, 'utf8'));
      }
      if (merged.strings) contentText += merged.strings;
      if (!contentText) throw new Error('No content/strings provided');

      const report = await buildFontKit({
        fontPath: font,
        outDir: merged.out,
        content: contentText,
        axes: merged.axes,
        axesFile: merged.axesFile,
        preset: merged.preset
      });

      if (merged.json) console.log(JSON.stringify(report, null, 2));
    } catch (err) {
      console.error(String(err));
      process.exit(3);
    }
  });

program.parse(process.argv);
