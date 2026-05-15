import { marked } from "marked";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { glosario } from "@/content/glosario";

const renderer = new marked.Renderer();

// Customize link rendering to open external links in new tab
renderer.link = function ({ href, title, tokens }) {
  const text = this.parser.parseInline(tokens);
  const isExternal = href?.startsWith("http");
  const attrs = isExternal ? ' target="_blank" rel="noopener noreferrer"' : "";
  const titleAttr = title ? ` title="${title}"` : "";
  return `<a href="${href}"${titleAttr}${attrs}>${text}</a>`;
};

marked.use({
  renderer,
  gfm: true,
  breaks: false,
});

export async function loadMarkdown(file: string): Promise<string> {
  const fullPath = path.join(process.cwd(), "research", file);
  const raw = await readFile(fullPath, "utf-8");
  return marked.parse(raw) as string;
}

export function extractToc(html: string): { id: string; text: string; level: number }[] {
  const items: { id: string; text: string; level: number }[] = [];
  const regex = /<h([23])>([^<]+)<\/h\1>/g;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(html)) !== null) {
    const level = Number(m[1]);
    const text = m[2];
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
    items.push({ id, text, level });
  }
  return items;
}

export function addHeadingIds(html: string): string {
  return html.replace(/<h([23])>([^<]+)<\/h\1>/g, (_, level, text) => {
    const id = (text as string)
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
    return `<h${level} id="${id}">${text}</h${level}>`;
  });
}

/* ---- Glosario inline -----------------------------------------------------
   Marca la primera aparición de cada término técnico como un <button> que el
   componente GlossaryPopover convierte en un popup con la definición.
   Se salta encabezados, código y enlaces para no romper esos contextos. */

type TermForm = { id: string; form: string; re: RegExp };

const TERM_FORMS: TermForm[] = glosario
  .flatMap((t) => t.match.map((form) => ({ id: t.id, form })))
  // formas más largas primero: "ventana de contexto" gana a "contexto"
  .sort((a, b) => b.form.length - a.form.length)
  .map(({ id, form }) => {
    const esc = form.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    // Sigla en mayúsculas → distingue mayúsculas (no marca palabras corrientes)
    const acronym = /^[A-Z]{2,5}$/.test(form);
    const re = new RegExp(
      `(?<![\\p{L}\\p{N}])(${esc})(?![\\p{L}\\p{N}])`,
      acronym ? "u" : "iu",
    );
    return { id, form, re };
  });

export function linkGlossaryTerms(html: string): string {
  const used = new Set<string>();
  const parts = html.split(/(<[^>]+>)/);
  const openSkip = /^<(pre|code|h[1-6]|a|button)\b/i;
  const closeSkip = /^<\/(pre|code|h[1-6]|a|button)>/i;
  let skip = 0;

  for (let i = 0; i < parts.length; i++) {
    const p = parts[i];
    if (!p) continue;
    if (p[0] === "<") {
      if (closeSkip.test(p)) skip = Math.max(0, skip - 1);
      else if (openSkip.test(p) && !/\/>\s*$/.test(p)) skip++;
      continue;
    }
    if (skip > 0) continue;

    let text = p;
    for (const { id, re } of TERM_FORMS) {
      if (used.has(id)) continue;
      const m = re.exec(text);
      if (!m) continue;
      used.add(id);
      const start = m.index;
      const end = start + m[1].length;
      text =
        text.slice(0, start) +
        `<button type="button" class="gloss-term" data-term="${id}">${m[1]}</button>` +
        text.slice(end);
    }
    parts[i] = text;
  }
  return parts.join("");
}
