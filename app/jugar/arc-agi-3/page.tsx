import { DiscoveryGame } from "@/components/arc-agi-3/discovery-game";

export const metadata = { title: "ARC-AGI-3 · Acércate a la IA" };

export default function ArcAgi3Page() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-32">
      <a
        href="/jugar"
        className="font-mono text-sm text-[var(--color-fg-mute)] hover:text-[var(--color-accent)] inline-flex items-center gap-2 mb-8"
      >
        <span>←</span> Volver a jugar
      </a>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-3">
        ARC-AGI-3 <span className="font-serif italic text-[var(--color-accent)]">descubrid la regla</span>
      </h1>
      <p className="text-lg text-[var(--color-fg-soft)] mb-6 max-w-3xl">
        Cuatro niveles, cero instrucciones. Pulsa las flechas y descubrid qué hace cada
        una. Cada nivel tiene reglas distintas. Hablad antes de cada movimiento:
        <em> ¿qué creéis que va a pasar?</em>
      </p>
      <div className="p-4 rounded-xl bg-[var(--color-bg-card)] border-l-4 border-[var(--color-accent)] mb-10 max-w-3xl">
        <p className="text-sm text-[var(--color-fg-soft)] leading-relaxed">
          Esto es la esencia de ARC-AGI-3: entrar a un mundo desconocido, sin manual,
          <strong className="text-[var(--color-fg)]"> deducir las reglas jugando</strong>,
          y resolver el puzzle. Donde un niño de 7 años brilla y la mejor IA del mundo
          puntúa <strong className="text-[var(--color-fg)]">0,5%</strong>.
        </p>
      </div>
      <DiscoveryGame />
    </div>
  );
}
