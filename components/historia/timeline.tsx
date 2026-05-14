"use client";

import { useMemo, useState } from "react";
import {
  eventos,
  eras,
  erasInOrder,
  categorias,
  type Era,
  type Categoria,
  type Evento,
} from "@/content/historia";

const ALL_CATS = Object.keys(categorias) as Categoria[];

export function Timeline() {
  const [activeEra, setActiveEra] = useState<Era | "todo">("todo");
  const [activeCats, setActiveCats] = useState<Set<Categoria>>(new Set(ALL_CATS));
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return eventos.filter((e) => {
      if (activeEra !== "todo" && e.era !== activeEra) return false;
      if (!activeCats.has(e.categoria)) return false;
      return true;
    });
  }, [activeEra, activeCats]);

  const toggleCat = (c: Categoria) => {
    setActiveCats((prev) => {
      const next = new Set(prev);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      if (next.size === 0) return new Set(ALL_CATS);
      return next;
    });
  };

  return (
    <div>
      {/* ============ Ribbon visual de eras ============ */}
      <div className="mb-10">
        <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-mute)] mb-3">
          Eras · clic para filtrar
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-1.5 rounded-2xl overflow-hidden border border-[var(--color-border)]">
          {erasInOrder.map((era) => {
            const e = eras[era];
            const active = activeEra === era;
            return (
              <button
                key={era}
                onClick={() => setActiveEra(active ? "todo" : era)}
                className="group relative text-left p-3 transition-all min-h-[88px] flex flex-col justify-between"
                style={{
                  background: active
                    ? `linear-gradient(135deg, ${e.color}30, ${e.color}10)`
                    : "var(--color-bg-card)",
                  borderTop: `3px solid ${e.color}`,
                  opacity: activeEra === "todo" || active ? 1 : 0.45,
                }}
              >
                <div>
                  <div
                    className="font-mono text-[10px] tracking-wider mb-1"
                    style={{ color: e.color }}
                  >
                    {e.range}
                  </div>
                  <div className="font-semibold text-sm leading-tight">
                    {e.label}
                  </div>
                </div>
                <div className="font-mono text-[10px] text-[var(--color-fg-mute)] mt-2">
                  {eventos.filter((ev) => ev.era === era).length} hitos
                </div>
              </button>
            );
          })}
        </div>

        {activeEra !== "todo" && (
          <div className="mt-4 p-4 rounded-xl bg-[var(--color-bg-card)] border-l-2" style={{ borderLeftColor: eras[activeEra].color }}>
            <p className="text-sm text-[var(--color-fg-soft)] leading-relaxed">
              {eras[activeEra].description}
            </p>
          </div>
        )}
      </div>

      {/* ============ Filtros por categoría ============ */}
      <div className="mb-10">
        <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-mute)] mb-3">
          Categorías
        </div>
        <div className="flex flex-wrap gap-2">
          {ALL_CATS.map((c) => {
            const meta = categorias[c];
            const active = activeCats.has(c);
            return (
              <button
                key={c}
                onClick={() => toggleCat(c)}
                className="px-3 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-2"
                style={{
                  background: active ? `${meta.color}20` : "var(--color-bg-card)",
                  color: active ? meta.color : "var(--color-fg-mute)",
                  border: `1px solid ${active ? meta.color : "var(--color-border)"}`,
                }}
              >
                <span className="font-bold">{meta.icon}</span>
                <span>{meta.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ============ Contador ============ */}
      <div className="mb-6 flex items-baseline justify-between flex-wrap gap-2">
        <div className="font-mono text-sm text-[var(--color-fg-mute)]">
          Mostrando <span className="text-[var(--color-accent)] font-bold">{filtered.length}</span> hitos
          {activeEra !== "todo" && ` · ${eras[activeEra].label}`}
        </div>
        <div className="font-mono text-xs text-[var(--color-fg-mute)]">
          Toca cada hito para profundizar
        </div>
      </div>

      {/* ============ Timeline vertical ============ */}
      <div className="relative">
        <div
          className="absolute left-[14px] md:left-[20px] top-0 bottom-0 w-px"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--color-border-strong) 5%, var(--color-border-strong) 95%, transparent)",
          }}
        />

        <div className="space-y-3">
          {filtered.map((evento) => (
            <TimelineCard
              key={evento.id}
              evento={evento}
              isOpen={openId === evento.id}
              onToggle={() =>
                setOpenId((cur) => (cur === evento.id ? null : evento.id))
              }
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="p-8 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] text-center text-[var(--color-fg-mute)]">
            No hay hitos con esos filtros. Activa más categorías o desactiva la era.
          </div>
        )}
      </div>
    </div>
  );
}

function TimelineCard({
  evento,
  isOpen,
  onToggle,
}: {
  evento: Evento;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const cat = categorias[evento.categoria];
  const era = eras[evento.era];

  return (
    <div className="relative pl-10 md:pl-14">
      {/* Punto del eje */}
      <button
        onClick={onToggle}
        aria-label={`Toggle ${evento.title}`}
        className="absolute left-0 top-4 w-[30px] h-[30px] md:w-[42px] md:h-[42px] rounded-full flex items-center justify-center font-mono font-bold text-sm transition-transform hover:scale-110 z-10"
        style={{
          background: "var(--color-bg)",
          color: cat.color,
          border: `2px solid ${cat.color}`,
          boxShadow: isOpen ? `0 0 0 6px ${cat.color}25` : "none",
        }}
      >
        {cat.icon}
      </button>

      <button
        onClick={onToggle}
        className="w-full text-left rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)] transition-all overflow-hidden"
        style={{
          borderLeftColor: era.color,
          borderLeftWidth: "3px",
        }}
      >
        {/* Cabecera (siempre visible) */}
        <div className="p-4 md:p-5 flex items-start gap-4">
          <div className="flex-shrink-0 min-w-[58px] md:min-w-[80px]">
            <div
              className="font-mono font-bold text-base md:text-lg leading-none"
              style={{ color: era.color }}
            >
              {evento.display}
            </div>
            <div className="font-mono text-[9px] md:text-[10px] text-[var(--color-fg-mute)] mt-1 uppercase tracking-wider">
              {era.label}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-baseline justify-between gap-3 flex-wrap mb-1">
              <h3 className="text-base md:text-lg font-bold leading-snug">
                {evento.title}
              </h3>
              <span
                className="hidden md:inline-block font-mono text-[10px] px-2 py-0.5 rounded uppercase tracking-wider whitespace-nowrap"
                style={{ background: `${cat.color}20`, color: cat.color }}
              >
                {cat.label}
              </span>
            </div>
            <p className="text-sm text-[var(--color-fg-soft)] leading-relaxed">
              {evento.tagline}
            </p>
          </div>

          <div
            className="flex-shrink-0 font-mono text-xl text-[var(--color-fg-mute)] transition-transform"
            style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
          >
            +
          </div>
        </div>

        {/* Cuerpo expandible */}
        {isOpen && (
          <div className="px-4 md:px-5 pb-5 border-t border-[var(--color-border)] animate-fade-up">
            <div className="pt-5 space-y-5">
              <Section title="Por qué importa" color={era.color}>
                <p className="text-[15px] text-[var(--color-fg)] leading-relaxed">
                  {evento.why}
                </p>
              </Section>

              <Section title="Para profundizar" color={era.color}>
                <div className="space-y-3">
                  {evento.details.map((d, i) => (
                    <p
                      key={i}
                      className="text-sm text-[var(--color-fg-soft)] leading-relaxed"
                    >
                      {d}
                    </p>
                  ))}
                </div>
              </Section>

              {evento.fun && (
                <Section title="Curiosidad" color="var(--color-warn)">
                  <p className="text-sm text-[var(--color-fg-soft)] italic leading-relaxed">
                    {evento.fun}
                  </p>
                </Section>
              )}

              {evento.sources && evento.sources.length > 0 && (
                <Section title="Fuentes" color="var(--color-fg-mute)">
                  <ul className="space-y-1.5">
                    {evento.sources.map((s, i) => (
                      <li key={i}>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-[var(--color-accent)] hover:underline inline-flex items-center gap-1.5"
                        >
                          <span>↗</span>
                          <span>{s.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </Section>
              )}

              <div className="md:hidden">
                <span
                  className="inline-block font-mono text-[10px] px-2 py-0.5 rounded uppercase tracking-wider"
                  style={{ background: `${cat.color}20`, color: cat.color }}
                >
                  {cat.label}
                </span>
              </div>
            </div>
          </div>
        )}
      </button>
    </div>
  );
}

function Section({
  title,
  color,
  children,
}: {
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div
        className="font-mono text-[10px] uppercase tracking-wider mb-2"
        style={{ color }}
      >
        {title}
      </div>
      {children}
    </div>
  );
}
