import { Evolucion } from "@/components/evolucion/evolucion";

export const metadata = { title: "Evolución de los modelos · IA en familia" };

export default function EvolucionPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-16 pb-32">
      <a href="/jugar" className="font-mono text-sm text-[var(--color-fg-mute)] hover:text-[var(--color-accent)] inline-flex items-center gap-2 mb-8">
        <span>←</span> Volver a jugar
      </a>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-3">
        Evolución de <span className="font-serif italic text-[var(--color-accent)]">los modelos</span>
      </h1>
      <p className="text-lg text-[var(--color-fg-soft)] mb-12 max-w-3xl">
        La misma pregunta, en distintos modelos a lo largo del tiempo. Ves de un vistazo qué ha
        mejorado, qué errores han desaparecido y qué sigue costando.
      </p>
      <Evolucion />
    </div>
  );
}
