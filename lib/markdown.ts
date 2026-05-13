import { marked } from "marked";
import { readFile } from "node:fs/promises";
import path from "node:path";

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
