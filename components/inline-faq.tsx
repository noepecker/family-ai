"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { preguntas, bloqueLabels, type Pregunta } from "@/content/preguntas";
import { useNivel } from "@/components/nivel-provider";
import { nivelMeta } from "@/content/niveles";
import { Cite } from "@/components/cite";

/** slug de /explorar/[slug] → bloque de Pregunta */
const slugToBloque: Record<string, Pregunta["bloque"]> = {
  "fundamentos-ia": "fundamentos",
  "buenas-practicas-prompting": "prompting",
  "privacidad-y-confianza": "privacidad",
  "arte-y-propiedad-intelectual": "arte",
  "impacto-ambiental": "ambiente",
  "problemas-y-dilemas": "empleo",
  "agentes-y-humanos": "agentes",
  "deepfakes-y-deteccion": "deepfakes",
  "temas-adicionales": "luminoso",
  "agi-y-benchmarks": "agi",
  "herramientas-actuales": "agentes",
  "sesgos-y-detectores": "fundamentos",
  "saturacion-y-collapse": "ambiente",
};

export function InlineFaq({ slug }: { slug: string }) {
  const bloque = slugToBloque[slug];
  const { nivel } = useNivel();
  const [open, setOpen] = useState<string | null>(null);

  const items = useMemo(() => {
    if (!bloque) return [];
    return preguntas.filter(
      (p) => p.bloque === bloque && (nivel === "todos" || p.nivel === nivel),
    );
  }, [bloque, nivel]);

  if (items.length === 0) return null;
  const bloqueMeta = bloqueLabels[bloque];

  return (
    <section className="mt-20 pt-16 border-t border-[var(--color-border)] max-w-3xl">
      <div className="flex items-center gap-3 mb-4">
        <span
          className="font-mono text-[0.65rem] uppercase tracking-wider px-2 py-0.5 rounded"
          style={{ background: `${bloqueMeta.color}22`, color: bloqueMeta.color }}
        >
          {bloqueMeta.label}
        </span>
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-fg-mute)]">
          Preguntas que abre este bloque
          {nivel !== "todos" && (
            <>
              {" "}· filtrado por nivel{" "}
              <span style={{ color: nivelMeta[nivel].color }}>
                {nivelMeta[nivel].label}
              </span>
            </>
          )}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
        Lo que la gente <span className="font-serif italic text-[var(--color-accent)]">suele preguntar.</span>
      </h2>
      <p className="text-base text-[var(--color-fg-soft)] mb-8">
        Cambia el nivel en el header para ver versiones más sencillas o más profundas
        de las mismas preguntas.
      </p>

      <div className="space-y-2">
        {items.map((p) => {
          const isOpen = open === p.id;
          const nivelInfo = nivelMeta[p.nivel];
          return (
            <div
              key={p.id}
              className="rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] overflow-hidden transition-colors"
              style={isOpen ? { borderColor: bloqueMeta.color } : undefined}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : p.id)}
                className="w-full p-4 flex items-start gap-3 text-left hover:bg-[var(--color-hover)] transition-colors"
                aria-expanded={isOpen}
              >
                <span
                  className="font-mono text-[0.6rem] uppercase tracking-wider px-1.5 py-0.5 rounded shrink-0 mt-1"
                  style={{ background: `${nivelInfo.color}1f`, color: nivelInfo.color }}
                >
                  {nivelInfo.label}
                </span>
                <span className="flex-1 text-base font-semibold text-[var(--color-fg)] leading-snug">
                  {p.q}
                </span>
                <span
                  className="text-xl text-[var(--color-fg-mute)] shrink-0 transition-transform"
                  style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <div className="px-4 pb-5 pt-1 ml-0 md:ml-[5.25rem]">
                  <p className="text-sm text-[var(--color-fg-soft)] leading-relaxed mb-3">
                    {p.a}
                  </p>
                  {p.fuentes && p.fuentes.length > 0 && (
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className="font-mono text-[0.6rem] uppercase tracking-wider text-[var(--color-fg-mute)]">
                        Fuentes
                      </span>
                      {p.fuentes.map((id) => (
                        <Cite key={id} id={id} />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Link
        href="/preguntas"
        className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors font-mono text-sm"
      >
        Ver todas las preguntas →
      </Link>
    </section>
  );
}
