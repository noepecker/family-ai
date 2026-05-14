"use client";

import { useState, useRef, useEffect } from "react";
import { getFuente, type FuenteTipo } from "@/content/fuentes";

const tipoLabel: Record<FuenteTipo, string> = {
  paper: "Paper",
  blog: "Blog",
  prensa: "Prensa",
  ley: "Doc legal",
  video: "Vídeo",
  book: "Libro",
  doc: "Informe",
  dataset: "Dataset",
};

const tipoColor: Record<FuenteTipo, string> = {
  paper: "var(--color-cool)",
  blog: "var(--color-warn)",
  prensa: "var(--color-fg-soft)",
  ley: "var(--color-bad)",
  video: "var(--color-hot)",
  book: "var(--color-good)",
  doc: "var(--color-accent)",
  dataset: "var(--color-cool)",
};

/**
 * Cita inline. Uso:
 *   El estudio dice X <Cite id="liang-2023-toefl" />.
 * Al hover/click despliega una tarjeta con autor, publicación, fecha y la
 * cita literal, con un enlace verificado a la fuente.
 */
export function Cite({ id }: { id: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const fuente = getFuente(id);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  if (!fuente) {
    return <span className="text-[var(--color-bad)] font-mono text-xs">[?{id}]</span>;
  }

  return (
    <span ref={ref} className="relative inline-block align-baseline">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        className="inline-flex items-center justify-center text-[0.7em] font-mono px-1.5 py-0.5 rounded -translate-y-[0.15em] mx-0.5 transition-all hover:scale-110"
        style={{
          background: `${tipoColor[fuente.tipo]}1f`,
          color: tipoColor[fuente.tipo],
          boxShadow: `inset 0 0 0 1px ${tipoColor[fuente.tipo]}55`,
        }}
        aria-expanded={open}
        aria-label={`Fuente: ${fuente.autor}, ${fuente.publicacion}, ${fuente.fecha}`}
      >
        ↗
      </button>
      {open && (
        <span
          className="absolute z-50 left-0 top-full mt-2 w-[min(28rem,calc(100vw-2rem))] p-4 rounded-xl bg-[var(--color-bg-card-hi)] border border-[var(--color-border-strong)] shadow-2xl text-left animate-fade-up"
          style={{ animationDuration: "0.2s" }}
          onMouseLeave={() => setOpen(false)}
        >
          <span className="flex items-center gap-2 mb-2">
            <span
              className="font-mono text-[0.65rem] uppercase tracking-wider px-1.5 py-0.5 rounded"
              style={{ background: `${tipoColor[fuente.tipo]}22`, color: tipoColor[fuente.tipo] }}
            >
              {tipoLabel[fuente.tipo]}
            </span>
            <span className="font-mono text-xs text-[var(--color-fg-mute)]">{fuente.fecha}</span>
          </span>
          <span className="block font-semibold text-sm text-[var(--color-fg)] leading-tight mb-1">
            {fuente.autor}
          </span>
          <span className="block text-xs text-[var(--color-fg-soft)] mb-3 font-mono">
            {fuente.publicacion}
          </span>
          <span className="block text-sm text-[var(--color-fg-soft)] italic leading-relaxed mb-3 font-serif">
            “{fuente.cita}”
          </span>
          <a
            href={fuente.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold"
            style={{ color: tipoColor[fuente.tipo] }}
          >
            Ir a la fuente →
          </a>
        </span>
      )}
    </span>
  );
}
