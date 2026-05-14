"use client";

import Link from "next/link";
import { useState } from "react";
import {
  casos,
  levelLabels,
  categoryLabels,
  type CasoLevel,
  type CasoCategory,
} from "@/content/casos";
import { useNivel } from "@/components/nivel-provider";
import { legacyLevelMap, type Nivel } from "@/content/niveles";

// Mapa inverso curioso → basico para sincronizar con el selector global.
const nivelToCasoLevel: Record<Nivel, CasoLevel> = {
  curioso: "basico",
  practicante: "medio",
  profundo: "avanzado",
};

const casoLevelToNivel: Record<CasoLevel, Nivel> = Object.fromEntries(
  Object.entries(legacyLevelMap).map(([legacy, n]) => [legacy, n]),
) as Record<CasoLevel, Nivel>;

export default function CasosPage() {
  const { nivel: globalNivel, setNivel: setGlobalNivel } = useNivel();
  const level: CasoLevel | "all" =
    globalNivel === "todos" ? "all" : nivelToCasoLevel[globalNivel];

  const setLevel = (l: CasoLevel | "all") => {
    if (l === "all") setGlobalNivel("todos");
    else setGlobalNivel(casoLevelToNivel[l]);
  };

  const [category, setCategory] = useState<CasoCategory | "all">("all");

  const filtered = casos.filter(
    (c) =>
      (level === "all" || c.level === level) &&
      (category === "all" || c.category === category)
  );

  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-6 pt-12 sm:pt-16 pb-24 sm:pb-32">
      <div className="font-mono text-xs sm:text-sm text-[var(--color-accent)] uppercase tracking-wider mb-5 sm:mb-6 flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse-glow"></span>
        Casos de uso · 30+ ejemplos reales
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[0.95] tracking-[-0.04em] mb-5 sm:mb-6">
        ¿Y esto <span className="font-serif italic text-[var(--color-accent)]">para qué</span> sirve?
      </h1>

      <p className="text-base sm:text-xl text-[var(--color-fg-soft)] font-light max-w-3xl mb-10 sm:mb-12 leading-relaxed">
        Casos reales con contexto, herramienta, paso a paso y ejemplo de prompt. Filtra
        por nivel y por tipo de uso. Empieza por los básicos si nunca has pagado por una IA.
      </p>

      {/* Level selector */}
      <div className="mb-6">
        <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-mute)] mb-3">¿De qué nivel eres?</div>
        <div className="flex flex-wrap gap-2">
          <FilterChip active={level === "all"} onClick={() => setLevel("all")}>
            Todos los niveles
          </FilterChip>
          {(Object.keys(levelLabels) as CasoLevel[]).map((l) => (
            <FilterChip
              key={l}
              active={level === l}
              color={levelLabels[l].color}
              onClick={() => setLevel(l)}
            >
              {levelLabels[l].label}
            </FilterChip>
          ))}
        </div>
        {level !== "all" && (
          <div className="mt-2 text-sm text-[var(--color-fg-mute)] italic">
            {levelLabels[level].description}
          </div>
        )}
      </div>

      {/* Category selector */}
      <div className="mb-10">
        <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-mute)] mb-3">¿En qué contexto?</div>
        <div className="flex flex-wrap gap-2">
          <FilterChip active={category === "all"} onClick={() => setCategory("all")}>
            Cualquier ámbito
          </FilterChip>
          {(Object.keys(categoryLabels) as CasoCategory[]).map((c) => (
            <FilterChip
              key={c}
              active={category === c}
              onClick={() => setCategory(c)}
            >
              {categoryLabels[c].emoji} {categoryLabels[c].label}
            </FilterChip>
          ))}
        </div>
      </div>

      <div className="font-mono text-sm text-[var(--color-fg-mute)] mb-4">
        {filtered.length} caso{filtered.length !== 1 ? "s" : ""}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((c, i) => {
          const lvl = levelLabels[c.level];
          return (
            <Link
              key={c.id}
              href={`/casos/${c.id}`}
              className="group block p-6 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${(i % 9) * 40}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="text-3xl">{c.icon}</div>
                <span
                  className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded"
                  style={{ background: `${lvl.color}20`, color: lvl.color }}
                >
                  {lvl.label}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2 leading-snug group-hover:text-[var(--color-accent)] transition-colors">
                {c.title}
              </h3>
              <p className="text-sm text-[var(--color-fg-soft)] mb-4 leading-relaxed">{c.short}</p>
              <div className="flex items-center justify-between pt-3 border-t border-[var(--color-border)]">
                <span className="font-mono text-xs text-[var(--color-fg-mute)]">
                  {categoryLabels[c.category].emoji} {categoryLabels[c.category].label}
                </span>
                <span className="font-mono text-xs text-[var(--color-accent)] group-hover:translate-x-1 transition-transform">
                  Ver →
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-[var(--color-fg-mute)]">
          Ningún caso con esos filtros. Prueba a relajar.
        </div>
      )}
    </div>
  );
}

function FilterChip({
  children,
  active,
  onClick,
  color,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  color?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full font-mono text-xs transition-all border ${
        active
          ? "bg-[var(--color-accent)] text-[var(--color-bg)] border-[var(--color-accent)]"
          : "bg-[var(--color-bg-card)] text-[var(--color-fg-soft)] border-[var(--color-border)] hover:border-[var(--color-accent)]/50"
      }`}
      style={active && color ? { background: color, borderColor: color } : undefined}
    >
      {children}
    </button>
  );
}
