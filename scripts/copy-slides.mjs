// Copia slides/ → public/slides/ antes de dev y build.
// Permite que la presentación lineal reveal.js conviva con la app Next.js.
// Además genera public/slides/glosario.js a partir de content/glosario.json,
// para que el deck use exactamente el mismo glosario que la web.
import { cp, mkdir, rm, readFile, writeFile } from "node:fs/promises";
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

// Glosario para el deck: misma fuente de verdad que la web.
const glosarioPath = path.join(process.cwd(), "content", "glosario.json");
if (existsSync(glosarioPath)) {
  const glosario = JSON.parse(await readFile(glosarioPath, "utf-8"));
  const js = `/* Generado por scripts/copy-slides.mjs — no editar a mano. */\nwindow.GLOSARIO = ${JSON.stringify(glosario)};\n`;
  await writeFile(path.join(dst, "glosario.js"), js, "utf-8");
  console.log(`[copy-slides] glosario.js generado (${glosario.length} términos).`);
}
