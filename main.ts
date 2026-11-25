import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Judge brief: exactly one word, the first that comes to mind — surprise, vividness and a spark of wit beat safe filler.
const WORD = "petrichor";

// Self-check: the sealed gate accepts UTF-8 text of 1 to 24 characters, not only white space; the entry must be exactly one word.
if ([...WORD].length < 1 || [...WORD].length > 24 || !/^\S+$/.test(WORD)) {
  throw new Error("entry fails the one-word 1-24 character gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
