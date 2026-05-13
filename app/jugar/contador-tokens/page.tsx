import { TokenCounter } from "@/components/token-counter/counter";

export const metadata = { title: "Contador de tokens · IA en familia" };

export default function TokenCounterPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-32">
      <a
        href="/jugar"
        className="font-mono text-sm text-[var(--color-fg-mute)] hover:text-[var(--color-accent)] inline-flex items-center gap-2 mb-8"
      >
        <span>←</span> Volver a jugar
      </a>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-3">
        Contador de <span className="font-serif italic text-[var(--color-accent)]">tokens</span>
      </h1>
      <p className="text-lg text-[var(--color-fg-soft)] mb-12 max-w-2xl">
        Pega texto y mira cómo lo "ve" un LLM: trozos llamados tokens. Cada modelo se
        factura por aquí. Cada ventana de contexto se mide aquí.
      </p>
      <TokenCounter />
    </div>
  );
}
