import Link from "next/link";
import { bloques, tagLabels, type Bloque } from "@/content/bloques";

export const metadata = { title: "Explorar · Acércate a la IA" };

export default function ExplorarPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-16 pb-32">
      <div className="font-mono text-sm text-[var(--color-accent)] uppercase tracking-wider mb-6 flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse-glow"></span>
        Modo enciclopedia · 13 bloques
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.95] tracking-[-0.04em] mb-6">
        Explora <span className="font-serif italic text-[var(--color-accent)]">lo que quieras</span>
      </h1>

      <p className="text-xl text-[var(--color-fg-soft)] font-light max-w-3xl mb-16 leading-relaxed">
        Cada bloque es independiente y se lee en 8-15 minutos. Toda la investigación
        está verificada y con fuentes. Elige por tema, por interés, o léelo entero.
      </p>

      <FiltersBar />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {bloques.map((b, i) => (
          <BloqueCard key={b.slug} bloque={b} delay={i * 50} />
        ))}
      </div>
    </div>
  );
}

function FiltersBar() {
  const counts = Object.keys(tagLabels).map((k) => ({
    key: k as Bloque["tag"],
    label: tagLabels[k as Bloque["tag"]].label,
    color: tagLabels[k as Bloque["tag"]].color,
    count: bloques.filter((b) => b.tag === (k as Bloque["tag"])).length,
  }));

  return (
    <div className="flex flex-wrap gap-3">
      <div className="font-mono text-sm text-[var(--color-fg-mute)] flex items-center mr-2">FILTRA POR:</div>
      {counts.map((c) => (
        <div
          key={c.key}
          className="font-mono text-xs px-3 py-1.5 rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border)] flex items-center gap-2"
          style={{ borderLeftColor: c.color, borderLeftWidth: 3 }}
        >
          <span>{c.label}</span>
          <span className="text-[var(--color-fg-mute)]">· {c.count}</span>
        </div>
      ))}
    </div>
  );
}

function BloqueCard({ bloque, delay }: { bloque: Bloque; delay: number }) {
  const tagInfo = tagLabels[bloque.tag];
  return (
    <Link
      href={`/explorar/${bloque.slug}`}
      className="group block p-7 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300 hover:-translate-y-1 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{bloque.emoji}</div>
        <span className="font-mono text-xs text-[var(--color-fg-mute)]">{bloque.number}</span>
      </div>

      <div
        className="font-mono text-[11px] uppercase tracking-wider mb-3 inline-block px-2 py-1 rounded"
        style={{ color: tagInfo.color, background: `${tagInfo.color}15` }}
      >
        {tagInfo.label}
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--color-accent)] transition-colors leading-tight">
        {bloque.title}
      </h3>

      <p className="text-sm text-[var(--color-fg-soft)] mb-4 leading-relaxed">{bloque.short}</p>

      <p className="text-xs text-[var(--color-fg-mute)] mb-4 leading-relaxed line-clamp-3">{bloque.long}</p>

      <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
        <span className="font-mono text-xs text-[var(--color-fg-mute)]">{bloque.duration}</span>
        <span className="font-mono text-xs text-[var(--color-accent)] group-hover:translate-x-1 transition-transform">
          Leer →
        </span>
      </div>
    </Link>
  );
}
