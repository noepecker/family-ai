// Capturas de verificación del deck. Uso: node scripts/shoot.mjs
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const OUT = "scripts/.shots";
await mkdir(OUT, { recursive: true });

const shots = [
  { hash: "0", wait: 2500, name: "cover" },
  { hash: "4", wait: 7000, name: "como-responde" },
  { hash: "5", wait: 3200, name: "lo-que-nadie" },
  { hash: "7", wait: 1200, name: "glosario" },
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });

for (const s of shots) {
  await page.goto(`http://localhost:3000/slides/index.html#/${s.hash}`, { waitUntil: "load" });
  await page.waitForTimeout(s.wait);
  await page.screenshot({ path: `${OUT}/${s.name}.png` });
  console.log(`shot: ${s.name}`);
}

await browser.close();
console.log("done");
