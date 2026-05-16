// Genera public/search-index.json — índice de búsqueda de todo el sitio.
// Se ejecuta en predev/prebuild (ver package.json), igual que copy-slides.mjs.
//
// Reúne el contenido estructurado de content/*.ts y el texto largo de los
// artículos research/*.md, troceado por secciones (encabezados h2/h3) para
// que un resultado enlace al apartado exacto donde aparece el término.
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { bloques } from "../content/bloques";
import { casos } from "../content/casos";
import { herramientas } from "../content/herramientas";
import { preguntas } from "../content/preguntas";
import { glosario } from "../content/glosario";
import { failedReplaceX, failedNeverX, historicFailed } from "../content/predicciones";

type Entry = {
  type: "explorar" | "caso" | "herramienta" | "pregunta" | "prediccion" | "glosario";
  typeLabel: string;
  title: string;
  section?: string;
  url?: string;
  text: string;
};

// id de ancla — MISMA lógica que addHeadingIds en lib/markdown.ts, para que
// el enlace #seccion case con el ancla que genera la página de /explorar.
function headingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

// markdown → texto plano, para buscar y para los extractos.
function stripMarkdown(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, " ") // bloques de código
    .replace(/`[^`]*`/g, " ") // código inline
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ") // imágenes
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1") // enlaces → solo el texto
    .replace(/^\s*[#>\-*+]+\s*/gm, " ") // marcadores al inicio de línea
    .replace(/[*_~`#|]/g, " ") // énfasis y símbolos sueltos
    .replace(/<[^>]+>/g, " ") // html
    .replace(/\s+/g, " ")
    .trim();
}

async function main() {
  const entries: Entry[] = [];

  // ---- Explorar: research/*.md troceado por secciones h2/h3 ----
  for (const bloque of bloques) {
    const raw = await readFile(
      path.join(process.cwd(), "research", bloque.file),
      "utf-8",
    );
    const lines = raw.split(/\r?\n/);
    let section = ""; // "" = intro (antes del primer h2/h3)
    let buf: string[] = [];

    const flush = () => {
      const text = stripMarkdown(buf.join("\n"));
      if (text.length < 16) return; // ignora secciones casi vacías
      entries.push({
        type: "explorar",
        typeLabel: "Explorar",
        title: bloque.title,
        section: section || undefined,
        url: section
          ? `/explorar/${bloque.slug}#${headingId(section)}`
          : `/explorar/${bloque.slug}`,
        text,
      });
    };

    for (const line of lines) {
      const m = /^(#{2,3})\s+(.+?)\s*#*\s*$/.exec(line);
      if (m) {
        flush();
        buf = [];
        section = stripMarkdown(m[2]);
      } else {
        buf.push(line);
      }
    }
    flush();
  }

  // ---- Casos: /casos/{id} ----
  for (const c of casos) {
    const text = [c.short, c.scenario, c.tool, ...c.flow, c.prompt, c.example, c.tip, c.warning]
      .filter(Boolean)
      .join(" ");
    entries.push({
      type: "caso",
      typeLabel: "Caso",
      title: c.title,
      url: `/casos/${c.id}`,
      text,
    });
  }

  // ---- Herramientas: /herramientas ----
  for (const h of herramientas) {
    entries.push({
      type: "herramienta",
      typeLabel: "Herramienta",
      title: h.name,
      section: h.by,
      url: "/herramientas",
      text: [h.by, h.short, h.best_for, h.notable].filter(Boolean).join(" "),
    });
  }

  // ---- Preguntas: /preguntas ----
  for (const p of preguntas) {
    entries.push({
      type: "pregunta",
      typeLabel: "Pregunta",
      title: p.q,
      url: "/preguntas",
      text: p.a,
    });
  }

  // ---- Predicciones: /futuro ----
  for (const pr of [...failedReplaceX, ...failedNeverX, ...historicFailed]) {
    entries.push({
      type: "prediccion",
      typeLabel: "Predicción",
      title: `${pr.who} · ${pr.year}`,
      section: pr.role,
      url: "/futuro",
      text: [pr.prediction, pr.translation, pr.reality].filter(Boolean).join(" "),
    });
  }

  // ---- Glosario: la definición es la respuesta (sin página propia) ----
  for (const t of glosario) {
    entries.push({
      type: "glosario",
      typeLabel: "Glosario",
      title: t.term,
      text: t.def,
    });
  }

  await writeFile(
    path.join(process.cwd(), "public", "search-index.json"),
    JSON.stringify(entries),
    "utf-8",
  );
  console.log(`[search-index] ${entries.length} entradas → public/search-index.json`);
}

main().catch((err) => {
  console.error("[search-index] error:", err);
  process.exit(1);
});
