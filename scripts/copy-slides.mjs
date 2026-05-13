// Copia slides/ → public/slides/ antes de dev y build.
// Permite que la presentación lineal reveal.js conviva con la app Next.js.
import { cp, mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const src = path.join(process.cwd(), "slides");
const dst = path.join(process.cwd(), "public", "slides");

if (!existsSync(src)) {
  console.log("[copy-slides] No slides/ folder, skip.");
  process.exit(0);
}

await rm(dst, { recursive: true, force: true });
await mkdir(dst, { recursive: true });
await cp(src, dst, { recursive: true });
console.log("[copy-slides] slides/ → public/slides/ copiado.");
