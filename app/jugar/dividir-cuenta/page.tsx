import { BillSplitter } from "@/components/bill-splitter/splitter";

export const metadata = { title: "Dividir cuenta · IA en familia" };

export default function DividirCuentaPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-32">
      <a
        href="/jugar"
        className="font-mono text-sm text-[var(--color-fg-mute)] hover:text-[var(--color-accent)] inline-flex items-center gap-2 mb-8"
      >
        <span>←</span> Volver a jugar
      </a>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-3">
        Dividir <span className="font-serif italic text-[var(--color-accent)]">la cuenta</span>
      </h1>
      <p className="text-lg text-[var(--color-fg-soft)] mb-12 max-w-2xl">
        Un mock de cómo procesaría tu cuenta una IA multimodal. Asigna platos a personas
        y observa qué paga cada uno. Esto es lo que ChatGPT hace cuando le subes la foto
        del ticket.
      </p>
      <BillSplitter />
    </div>
  );
}
