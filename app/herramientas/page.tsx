"use client";

import { useState } from "react";
import {
  herramientas,
  categoryLabels,
  priceLabels,
  type HerramientaCategory,
  type HerramientaPrice,
} from "@/content/herramientas";

export default function HerramientasPage() {
  const [cat, setCat] = useState<HerramientaCategory | "all">("all");
  const [price, setPrice] = useState<HerramientaPrice | "all">("all");
  const [level, setLevel] = useState<"all" | "básico" | "medio" | "avanzado">("all");

  const filtered = herramientas.filter(
    (h) =>
      (cat === "all" || h.category === cat) &&
      (price === "all" || h.price === price) &&
      (level === "all" || h.for_who.includes(level))
  );

  return (
    <div className="max-w-7xl mx-auto px-6 pt-16 pb-32">
      <div className="font-mono text-sm text-[var(--color-accent)] uppercase tracking-wider mb-6 flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse-glow"></span>
        Catálogo · {herramientas.length} herramientas curadas
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.95] tracking-[-0.04em] mb-6">
        El <span className="font-serif italic text-[var(--color-accent)]">ecosistema</span>
      </h1>

      <p className="text-xl text-[var(--color-fg-soft)] font-light max-w-3xl mb-12 leading-relaxed">
        Solo las herramientas que valen la pena en mayo de 2026. Filtra por categoría,
        precio o nivel.
      </p>

      <div className="space-y-5 mb-10">
        <FilterRow label="Categoría">
          <Chip active={cat === "all"} onClick={() => setCat("all")}>Todas</Chip>
          {(Object.keys(categoryLabels) as HerramientaCategory[]).map((c) => (
            <Chip key={c} active={cat === c} onClick={() => setCat(c)}>
              {categoryLabels[c].emoji} {categoryLabels[c].label}
            </Chip>
          ))}
        </FilterRow>
        <FilterRow label="Precio">
          <Chip active={price === "all"} onClick={() => setPrice("all")}>Cualquiera</Chip>
          {(Object.keys(priceLabels) as HerramientaPrice[]).map((p) => (
            <Chip
              key={p}
              active={price === p}
              onClick={() => setPrice(p)}
              color={priceLabels[p].color}
            >
              {priceLabels[p].label}
            </Chip>
          ))}
        </FilterRow>
        <FilterRow label="¿Para qué nivel?">
          <Chip active={level === "all"} onClick={() => setLevel("all")}>Cualquiera</Chip>
          <Chip active={level === "básico"} onClick={() => setLevel("básico")}>Básico</Chip>
          <Chip active={level === "medio"} onClick={() => setLevel("medio")}>Medio</Chip>
          <Chip active={level === "avanzado"} onClick={() => setLevel("avanzado")}>Avanzado</Chip>
        </FilterRow>
      </div>

      <div className="font-mono text-sm text-[var(--color-fg-mute)] mb-4">
        {filtered.length} herramienta{filtered.length !== 1 ? "s" : ""}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((h, i) => (
          <a
            key={h.id}
            href={h.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300 hover:-translate-y-1 animate-fade-up"
            style={{ animationDelay: `${(i % 9) * 40}ms` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-4xl">{h.icon}</div>
              <span
                className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded"
                style={{ background: `${priceLabels[h.price].color}20`, color: priceLabels[h.price].color }}
              >
                {priceLabels[h.price].label}
              </span>
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <h3 className="text-xl font-bold group-hover:text-[var(--color-accent)] transition-colors">{h.name}</h3>
              <span className="font-mono text-xs text-[var(--color-fg-mute)]">{h.by}</span>
            </div>
            <p className="text-sm text-[var(--color-fg-soft)] mb-4 leading-relaxed">{h.short}</p>
            <div className="pt-3 border-t border-[var(--color-border)]">
              <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-fg-mute)] mb-1">Mejor para</div>
              <p className="text-xs text-[var(--color-fg-soft)] leading-relaxed mb-3">{h.best_for}</p>
              {h.notable && (
                <p className="text-xs text-[var(--color-accent-soft)] italic leading-relaxed">
                  {h.notable}
                </p>
              )}
              <div className="mt-3 flex items-center justify-between">
                <div className="flex gap-1">
                  {h.for_who.map((lvl) => (
                    <span key={lvl} className="font-mono text-[10px] text-[var(--color-fg-mute)] px-1.5 py-0.5 rounded bg-white/5">
                      {lvl}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-xs text-[var(--color-accent)] group-hover:translate-x-1 transition-transform">↗</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-[var(--color-fg-mute)]">Sin resultados.</div>
      )}
    </div>
  );
}

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-mute)] mb-2">{label}</div>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Chip({
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
      style={active && color ? { background: color, borderColor: color, color: "var(--color-bg)" } : undefined}
    >
      {children}
    </button>
  );
}
