// make.fun coolest-art-01 entry: copies entry.png to MAKEFUN_OUTPUT_DIR (default /output).
// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// Node 22: run with `node --experimental-strip-types main.ts` (native, no deps)
import { copyFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const src = join(dirname(fileURLToPath(import.meta.url)), "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output"; // output dir is created if missing

await mkdir(outDir, { recursive: true });
await copyFile(src, join(outDir, "entry.png"));
console.log(`copied ${src} -> ${join(outDir, "entry.png")}`);
console.log("done: entry.png copied");
