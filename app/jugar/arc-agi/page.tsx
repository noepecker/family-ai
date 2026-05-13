import { ArcGame } from "@/components/arc-agi/game";

export const metadata = { title: "ARC-AGI · IA en familia" };

export default function ArcPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-32">
      <a
        href="/jugar"
        className="font-mono text-sm text-[var(--color-fg-mute)] hover:text-[var(--color-accent)] inline-flex items-center gap-2 mb-8"
      >
        <span>←</span> Volver a jugar
      </a>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-3">
        ARC-AGI <span className="font-serif italic text-[var(--color-accent)]">tú contra la máquina</span>
      </h1>
      <p className="text-lg text-[var(--color-fg-soft)] mb-12 max-w-3xl">
        4 puzzles tipo ARC-AGI. La regla NUNCA está escrita: tienes que deducirla mirando
        los ejemplos. Los humanos suelen pillarlos en segundos. La mejor IA del mundo,
        en mayo 2026, puntúa <strong className="text-[var(--color-accent)]">0,5%</strong> en
        la versión real (ARC-AGI-3).
      </p>
      <ArcGame />
    </div>
  );
}
