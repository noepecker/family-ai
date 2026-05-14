"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { preguntas, bloqueLabels, type Pregunta } from "@/content/preguntas";
import { nivelMeta, nivelOrder, type Nivel } from "@/content/niveles";
import { useNivel } from "@/components/nivel-provider";
import { Cite } from "@/components/cite";

type BloqueId = Pregunta["bloque"];

export default function PreguntasPage() {
  const { nivel: globalNivel, setNivel: setGlobalNivel } = useNivel();
  const nivel = globalNivel;
  const setNivel = (n: Nivel | "todos") => setGlobalNivel(n);
  const [bloque, setBloque] = useState<BloqueId | "todos">("todos");
  const [open, setOpen] = useState<string | null>(null);

  const filtradas = useMemo(() => {
    return preguntas.filter(
      (p) =>
        (nivel === "todos" || p.nivel === nivel) &&
        (bloque === "todos" || p.bloque === bloque),
    );
  }, [nivel, bloque]);

  const bloques = Object.keys(bloqueLabels) as BloqueId[];

  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-6 pt-10 sm:pt-16 pb-20 sm:pb-24">
      <div className="font-mono text-[0.65rem] sm:text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] mb-5 sm:mb-6 flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse-glow"></span>
        Preguntas que abrimos
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-[-0.03em] leading-[0.95] mb-6 sm:mb-8">
        Las preguntas que <span className="font-serif italic text-[var(--color-accent)]">no</span> vamos a cerrar.
      </h1>
      <p className="text-base sm:text-lg text-[var(--color-fg-soft)] leading-relaxed max-w-3xl mb-10 sm:mb-12">
        Lo que el público suele preguntar después de cada bloque, anticipado. Filtra por
        nivel para ver solo lo tuyo, o por bloque para profundizar en un tema. Cada
        respuesta termina con un link para tirar del hilo.
      </p>

      {/* Filtros — sticky con offset que se adapta al header (más alto en móvil con la nav debajo) */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 sm:mb-10 sticky top-[88px] sm:top-[68px] z-30 bg-[var(--color-bg)]/85 backdrop-blur-md py-3 -mx-2 px-2 border-b border-[var(--color-border)]">
        <div className="font-mono text-[0.7rem] uppercase tracking-wider text-[var(--color-fg-mute)] mr-1">
          Nivel
        </div>
        <FilterChip active={nivel === "todos"} onClick={() => setNivel("todos")} color="var(--color-fg-soft)">
          Todos
        </FilterChip>
        {nivelOrder.map((n) => (
          <FilterChip
            key={n}
            active={nivel === n}
            onClick={() => setNivel(n)}
            color={nivelMeta[n].color}
          >
            {nivelMeta[n].label}
          </FilterChip>
        ))}
        <div className="w-px h-5 bg-[var(--color-border)] mx-2"></div>
        <div className="font-mono text-[0.7rem] uppercase tracking-wider text-[var(--color-fg-mute)] mr-1">
          Bloque
        </div>
        <FilterChip active={bloque === "todos"} onClick={() => setBloque("todos")} color="var(--color-fg-soft)">
          Todos
        </FilterChip>
        {bloques.map((b) => (
          <FilterChip
            key={b}
            active={bloque === b}
            onClick={() => setBloque(b)}
            color={bloqueLabels[b].color}
          >
            {bloqueLabels[b].label}
          </FilterChip>
        ))}
      </div>

      <div className="space-y-3">
        {filtradas.length === 0 && (
          <div className="text-center py-16 text-[var(--color-fg-mute)] font-mono text-sm">
            Sin preguntas para ese filtro. Suelta uno.
          </div>
        )}
        {filtradas.map((p) => (
          <PreguntaItem
            key={p.id}
            pregunta={p}
            isOpen={open === p.id}
            onToggle={() => setOpen(open === p.id ? null : p.id)}
          />
        ))}
      </div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  color,
  children,
}: {
  active: boolean;
  onClick: () => void;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all border"
      style={{
        color: active ? "var(--color-on-accent)" : color,
        background: active ? color : "transparent",
        borderColor: active ? color : "var(--color-border)",
      }}
    >
      {children}
    </button>
  );
}

function PreguntaItem({
  pregunta,
  isOpen,
  onToggle,
}: {
  pregunta: Pregunta;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const bloqueMeta = bloqueLabels[pregunta.bloque];
  const nivelInfo = nivelMeta[pregunta.nivel];

  return (
    <div
      className="rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] overflow-hidden transition-all"
      style={isOpen ? { borderColor: bloqueMeta.color } : undefined}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full p-5 md:p-6 flex items-start gap-4 text-left hover:bg-[var(--color-hover)] transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex flex-col gap-2 shrink-0 pt-1">
          <span
            className="font-mono text-[0.65rem] uppercase tracking-wider px-2 py-0.5 rounded"
            style={{ background: `${bloqueMeta.color}22`, color: bloqueMeta.color }}
          >
            {bloqueMeta.label}
          </span>
          <span
            className="font-mono text-[0.65rem] uppercase tracking-wider px-2 py-0.5 rounded"
            style={{ background: `${nivelInfo.color}1f`, color: nivelInfo.color }}
          >
            {nivelInfo.label}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-lg md:text-xl font-semibold text-[var(--color-fg)] leading-snug">
            {pregunta.q}
          </p>
        </div>
        <span
          className="text-2xl text-[var(--color-fg-mute)] transition-transform shrink-0"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}
        >
          +
        </span>
      </button>
      {isOpen && (
        <div className="px-5 md:px-6 pb-6 pt-2 ml-0 md:ml-[7.5rem]">
          <p className="text-base text-[var(--color-fg-soft)] leading-relaxed mb-4">
            {pregunta.a}
          </p>
          {pregunta.fuentes && pregunta.fuentes.length > 0 && (
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="font-mono text-[0.65rem] uppercase tracking-wider text-[var(--color-fg-mute)]">
                Fuentes
              </span>
              {pregunta.fuentes.map((id) => (
                <Cite key={id} id={id} />
              ))}
            </div>
          )}
          {pregunta.href && (
            <Link
              href={pregunta.href}
              className="inline-flex items-center gap-2 text-sm font-mono"
              style={{ color: bloqueMeta.color }}
            >
              Profundizar en este tema →
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
