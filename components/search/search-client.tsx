"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

/* Buscador de toda la web. Descarga public/search-index.json (generado en
   el build por scripts/build-search-index.ts) y filtra en memoria mientras
   se escribe. Sin dependencias externas: coincidencia por subcadena,
   insensible a acentos y mayúsculas. */

type Entry = {
  type: "explorar" | "caso" | "herramienta" | "pregunta" | "prediccion" | "glosario";
  typeLabel: string;
  title: string;
  section?: string;
  url?: string;
  text: string;
};

const TYPE_ORDER: Entry["type"][] = [
  "explorar",
  "caso",
  "herramienta",
  "pregunta",
  "prediccion",
  "glosario",
];

// Pasa a minúsculas y quita acentos. Conserva la longitud carácter a
// carácter (los acentos del español son precompuestos: 1 char → 1 char),
// así que las posiciones de coincidencia valen sobre el texto original.
function normalize(s: string): string {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

// Resalta cada palabra buscada dentro del texto original.
function Highlight({ text, words }: { text: string; words: string[] }) {
  if (!words.length) return <>{text}</>;
  const n = normalize(text);
  const ranges: Array<[number, number]> = [];
  for (const w of words) {
    let from = 0;
    let i = n.indexOf(w, from);
    while (i !== -1) {
      ranges.push([i, i + w.length]);
      from = i + w.length;
      i = n.indexOf(w, from);
    }
  }
  if (!ranges.length) return <>{text}</>;
  ranges.sort((a, b) => a[0] - b[0]);
  const merged: Array<[number, number]> = [];
  for (const r of ranges) {
    const last = merged[merged.length - 1];
    if (last && r[0] <= last[1]) last[1] = Math.max(last[1], r[1]);
    else merged.push([r[0], r[1]]);
  }
  const out: React.ReactNode[] = [];
  let cur = 0;
  merged.forEach(([s, e], idx) => {
    if (s > cur) out.push(text.slice(cur, s));
    out.push(
      <mark
        key={idx}
        className="rounded-[3px] bg-[var(--color-accent)]/25 px-0.5 text-[var(--color-fg)]"
      >
        {text.slice(s, e)}
      </mark>,
    );
    cur = e;
  });
  if (cur < text.length) out.push(text.slice(cur));
  return <>{out}</>;
}

// Devuelve un fragmento del texto centrado en la primera coincidencia.
function makeExcerpt(text: string, words: string[]): string {
  if (text.length <= 200) return text;
  const n = normalize(text);
  let pos = -1;
  for (const w of words) {
    const i = n.indexOf(w);
    if (i !== -1 && (pos === -1 || i < pos)) pos = i;
  }
  if (pos === -1) return text.slice(0, 200).trim() + "…";
  let start = Math.max(0, pos - 70);
  let end = Math.min(text.length, pos + 150);
  if (start > 0) {
    const sp = text.indexOf(" ", start);
    if (sp !== -1 && sp < pos) start = sp + 1;
  }
  if (end < text.length) {
    const sp = text.lastIndexOf(" ", end);
    if (sp > pos) end = sp;
  }
  return (start > 0 ? "…" : "") + text.slice(start, end).trim() + (end < text.length ? "…" : "");
}

export function SearchClient() {
  const [index, setIndex] = useState<Entry[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Carga del índice.
  useEffect(() => {
    fetch("/search-index.json")
      .then((r) => {
        if (!r.ok) throw new Error("no index");
        return r.json();
      })
      .then((data: Entry[]) => setIndex(data))
      .catch(() => setFailed(true));
  }, []);

  // Consulta inicial desde ?q= y autofoco.
  useEffect(() => {
    const initial = new URLSearchParams(window.location.search).get("q") || "";
    if (initial) setQ(initial);
    inputRef.current?.focus();
  }, []);

  // Refleja la consulta en la URL → búsquedas compartibles.
  useEffect(() => {
    const url = new URL(window.location.href);
    if (q) url.searchParams.set("q", q);
    else url.searchParams.delete("q");
    window.history.replaceState(null, "", url);
  }, [q]);

  const words = useMemo(
    () => normalize(q.trim()).split(/\s+/).filter(Boolean),
    [q],
  );

  const results = useMemo(() => {
    if (!index || !words.length) return [];
    const scored: Array<{ entry: Entry; score: number }> = [];
    for (const entry of index) {
      const nTitle = normalize(entry.title);
      const nSection = entry.section ? normalize(entry.section) : "";
      const nText = normalize(entry.text);
      // Versión sin espacios → "vibecoding" encuentra "vibe coding".
      const noSpace = (nTitle + " " + nSection + " " + nText).replace(/\s+/g, "");
      let score = 0;
      let matchesAll = true;
      for (const w of words) {
        if (nTitle.includes(w)) score += 100;
        else if (nSection.includes(w)) score += 12;
        else if (nText.includes(w)) score += 1;
        else if (noSpace.includes(w)) score += 1;
        else {
          matchesAll = false;
          break;
        }
      }
      if (matchesAll) scored.push({ entry, score });
    }
    scored.sort(
      (a, b) =>
        b.score - a.score ||
        TYPE_ORDER.indexOf(a.entry.type) - TYPE_ORDER.indexOf(b.entry.type),
    );
    return scored.slice(0, 80).map((s) => s.entry);
  }, [index, words]);

  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-6 pt-10 sm:pt-16 pb-24 sm:pb-32">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.03em]">
        Buscar
      </h1>
      <p className="mt-2 text-[var(--color-fg-soft)]">
        Busca en toda la web — artículos, casos, herramientas, preguntas y glosario.
      </p>

      <div className="relative mt-6">
        <span
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-fg-mute)]"
          aria-hidden
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
        <input
          ref={inputRef}
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Escribe un término — por ejemplo, vibecoding"
          aria-label="Buscar en la web"
          className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] py-3.5 pl-12 pr-4 text-base text-[var(--color-fg)] outline-none transition-colors placeholder:text-[var(--color-fg-mute)] focus:border-[var(--color-accent)]"
        />
      </div>

      <div className="mt-8">
        {failed && (
          <p className="text-[var(--color-fg-mute)]">
            No se pudo cargar el índice de búsqueda.
          </p>
        )}

        {!failed && !index && (
          <p className="font-mono text-sm text-[var(--color-fg-mute)]">
            Cargando índice…
          </p>
        )}

        {index && !words.length && (
          <p className="text-[var(--color-fg-mute)]">
            Empieza a escribir para buscar.
          </p>
        )}

        {index && words.length > 0 && results.length === 0 && (
          <p className="text-[var(--color-fg-mute)]">
            Sin resultados para <strong className="text-[var(--color-fg-soft)]">{q}</strong>.
          </p>
        )}

        {results.length > 0 && (
          <>
            <div className="mb-5 font-mono text-xs uppercase tracking-wider text-[var(--color-fg-mute)]">
              {results.length} resultado{results.length === 1 ? "" : "s"}
            </div>
            <ul className="space-y-3">
              {results.map((entry, i) => (
                <li key={i}>
                  <ResultCard entry={entry} words={words} />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

function ResultCard({ entry, words }: { entry: Entry; words: string[] }) {
  const excerpt = makeExcerpt(entry.text, words);

  const inner = (
    <>
      <div className="flex items-baseline gap-2 flex-wrap">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[var(--color-accent)]">
          {entry.typeLabel}
        </span>
        {entry.section && (
          <span className="font-mono text-[0.65rem] text-[var(--color-fg-mute)]">
            · <Highlight text={entry.section} words={words} />
          </span>
        )}
      </div>
      <div className="mt-1 text-lg font-semibold leading-snug text-[var(--color-fg)]">
        <Highlight text={entry.title} words={words} />
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-fg-soft)]">
        <Highlight text={excerpt} words={words} />
      </p>
    </>
  );

  const cardClass =
    "block rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 sm:p-5";

  if (!entry.url) {
    // Glosario: no tiene página propia, la definición es la respuesta.
    return <div className={cardClass}>{inner}</div>;
  }

  return (
    <Link
      href={entry.url}
      className={`${cardClass} transition-colors hover:border-[var(--color-accent)]`}
    >
      {inner}
    </Link>
  );
}
