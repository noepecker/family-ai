import { ConsumoCalc } from "@/components/calculadora-consumo/calc";

export const metadata = { title: "Calculadora de consumo · IA en familia" };

export default function CalcPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-32">
      <a
        href="/jugar"
        className="font-mono text-sm text-[var(--color-fg-mute)] hover:text-[var(--color-accent)] inline-flex items-center gap-2 mb-8"
      >
        <span>←</span> Volver a jugar
      </a>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-3">
        Calculadora de <span className="font-serif italic text-[var(--color-accent)]">consumo</span>
      </h1>
      <p className="text-lg text-[var(--color-fg-soft)] mb-12 max-w-2xl">
        Mueve los sliders. Mira en cosas que conoces (Netflix, hamburguesas, vuelos) lo que
        cuesta usar IA según el tipo de uso.
      </p>
      <ConsumoCalc />
    </div>
  );
}
