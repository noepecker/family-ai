// Capturas de verificación del deck. Uso: node scripts/shoot.mjs
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const OUT = "scripts/.shots";
await mkdir(OUT, { recursive: true });

const shots = [
  { hash: "28", wait: 1200, name: "privacidad" },
  { hash: "29", wait: 1200, name: "arte" },
  { hash: "30", wait: 1200, name: "medioambiente" },
  { hash: "32", wait: 1200, name: "pros-vidas" },
  { hash: "33", wait: 1200, name: "pros-acceso" },
  { hash: "36", wait: 1200, name: "no-es-agi" },
  { hash: "37", wait: 1200, name: "nadie-sabe" },
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1200 } });

for (const s of shots) {
  await page.goto(`http://localhost:3000/slides/index.html#/${s.hash}`, { waitUntil: "load" });
  await page.waitForTimeout(s.wait);
  await page.screenshot({ path: `${OUT}/${s.name}.png` });
  console.log(`shot: ${s.name}`);
}

await browser.close();
console.log("done");
