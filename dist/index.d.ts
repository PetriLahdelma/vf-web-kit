export declare function extractText(input: string): string;

export declare function buildTokens(font: any, axes: any[]): {
  family: string;
  axes: any[];
  presets: { ui: { wght: number }; editorial: { wght: number } };
};

export declare function buildFontKit(opts: {
  fontPath: string;
  outDir: string;
  content: string;
  axes?: string;
  axesFile?: string;
  preset?: string;
}): Promise<{ family: string; axes: any[]; missingGlyphs: string }>;
