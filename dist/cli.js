import fs from 'node:fs';
import path from 'node:path';
import { Command } from 'commander';
import fg from 'fast-glob';
import { extractText } from './lib/content-extract.js';
import { buildFontKit } from './lib/font-build.js';
const exitCode = { OK: 0, RUNTIME_ERROR: 3, INVALID_ARGS: 4 };
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
        if (opts.config && !fs.existsSync(opts.config)) {
            console.error(`Config not found: ${opts.config}`);
            process.exit(exitCode.INVALID_ARGS);
        }
        const config = configPath ? JSON.parse(fs.readFileSync(configPath, 'utf8')) : {};
        const merged = { ...config, ...opts };
        if (!fs.existsSync(font)) {
            console.error(`Font not found: ${font}`);
            process.exit(exitCode.INVALID_ARGS);
        }
        if (merged.axesFile && !fs.existsSync(merged.axesFile)) {
            console.error(`Axes file not found: ${merged.axesFile}`);
            process.exit(exitCode.INVALID_ARGS);
        }
        const validPresets = new Set(['ui', 'editorial']);
        if (merged.preset && !validPresets.has(merged.preset)) {
            console.error('Invalid --preset (use ui or editorial)');
            process.exit(exitCode.INVALID_ARGS);
        }
        let contentText = '';
        if (merged.content) {
            const files = await fg(merged.content);
            if (files.length === 0) {
                console.error('No content files matched --content');
                process.exit(exitCode.INVALID_ARGS);
            }
            for (const f of files)
                contentText += extractText(fs.readFileSync(f, 'utf8'));
        }
        if (merged.strings)
            contentText += merged.strings;
        if (!contentText) {
            console.error('No content/strings provided');
            process.exit(exitCode.INVALID_ARGS);
        }
        const report = await buildFontKit({
            fontPath: path.resolve(font),
            outDir: merged.out,
            content: contentText,
            axes: merged.axes,
            axesFile: merged.axesFile,
            preset: merged.preset
        });
        if (merged.json)
            console.log(JSON.stringify(report, null, 2));
        process.exit(exitCode.OK);
    }
    catch (err) {
        console.error(String(err));
        process.exit(exitCode.RUNTIME_ERROR);
    }
});
program.parse(process.argv);
