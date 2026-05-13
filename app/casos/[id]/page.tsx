import Link from "next/link";
import { notFound } from "next/navigation";
import {
  casos,
  getCaso,
  levelLabels,
  categoryLabels,
} from "@/content/casos";

export function generateStaticParams() {
  return casos.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const caso = getCaso(id);
  if (!caso) return { title: "Caso no encontrado" };
  return { title: `${caso.title} · Casos · IA en familia`, description: caso.short };
}

export default async function CasoDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const c = getCaso(id);
  if (!c) notFound();

  const lvl = levelLabels[c.level];
  const cat = categoryLabels[c.category];

  return (
    <article className="max-w-4xl mx-auto px-6 pt-12 pb-32">
      <Link
        href="/casos"
        className="font-mono text-sm text-[var(--color-fg-mute)] hover:text-[var(--color-accent)] inline-flex items-center gap-2 mb-10"
      >
        <span>←</span> Volver a casos
      </Link>

      <div className="flex items-center gap-3 mb-6">
        <div className="text-6xl">{c.icon}</div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span
              className="font-mono text-[11px] uppercase tracking-wider px-2 py-1 rounded"
              style={{ background: `${lvl.color}20`, color: lvl.color }}
            >
              {lvl.label}
            </span>
            <span className="font-mono text-[11px] text-[var(--color-fg-mute)]">·</span>
            <span className="font-mono text-[11px] text-[var(--color-fg-mute)]">
              {cat.emoji} {cat.label}
            </span>
          </div>
        </div>
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-4">
        {c.title}
      </h1>
      <p className="text-xl text-[var(--color-fg-soft)] font-light leading-relaxed mb-12">
        {c.short}
      </p>

      <Section title="Cuándo te pasa">
        <p className="text-lg text-[var(--color-fg)] leading-relaxed">{c.scenario}</p>
      </Section>

      <Section title="Qué usar">
        <div className="inline-block px-4 py-2 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] font-mono text-base">
          {c.tool}
        </div>
      </Section>

      <Section title="Paso a paso">
        <ol className="space-y-3">
          {c.flow.map((step, i) => (
            <li key={i} className="flex gap-4 items-start">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-accent)] text-[var(--color-bg)] font-mono text-sm font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <span className="text-base text-[var(--color-fg-soft)] leading-relaxed pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </Section>

      {c.prompt && (
        <Section title="Ejemplo de prompt">
          <div className="p-5 rounded-xl bg-[var(--color-bg-card)] border-l-4 border-[var(--color-accent)] font-mono text-sm leading-relaxed whitespace-pre-wrap text-[var(--color-fg)]">
            {c.prompt}
          </div>
          <div className="mt-2 font-mono text-xs text-[var(--color-fg-mute)]">
            Copia, adapta a tu caso y pega en tu IA favorita.
          </div>
        </Section>
      )}

      {c.example && (
        <Section title="Qué esperarías como respuesta">
          <div className="p-5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] font-mono text-sm whitespace-pre-wrap text-[var(--color-fg-soft)]">
            {c.example}
          </div>
        </Section>
      )}

      {c.tip && (
        <Section title="Truco extra" icon="💡">
          <p className="text-base text-[var(--color-fg)] leading-relaxed">{c.tip}</p>
        </Section>
      )}

      {c.warning && (
        <Section title="Cuidado con esto" icon="⚠️">
          <p className="text-base text-[var(--color-fg)] leading-relaxed bg-[var(--color-bad)]/10 border-l-4 border-[var(--color-bad)] p-4 rounded-r-xl">
            {c.warning}
          </p>
        </Section>
      )}

      {c.related && c.related.length > 0 && (
        <Section title="Casos relacionados">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {c.related.map((rid) => {
              const r = getCaso(rid);
              if (!r) return null;
              return (
                <Link
                  key={rid}
                  href={`/casos/${rid}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
                >
                  <span className="text-2xl">{r.icon}</span>
                  <span className="text-sm font-medium">{r.title}</span>
                </Link>
              );
            })}
          </div>
        </Section>
      )}
    </article>
  );
}

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-mono uppercase tracking-wider text-[var(--color-accent)] mb-4 flex items-center gap-2">
        {icon && <span>{icon}</span>} {title}
      </h2>
      {children}
    </section>
  );
}
