import { ContraLaIA } from "@/components/contra-la-ia/race";

export const metadata = { title: "Contra la IA · IA en familia" };

export default function ContraIaPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-32">
      <a
        href="/jugar"
        className="font-mono text-sm text-[var(--color-fg-mute)] hover:text-[var(--color-accent)] inline-flex items-center gap-2 mb-8"
      >
        <span>←</span> Volver a jugar
      </a>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-3">
        Contra <span className="font-serif italic text-[var(--color-accent)]">la IA</span>
      </h1>
      <p className="text-lg text-[var(--color-fg-soft)] mb-12 max-w-3xl">
        3 retos a contrarreloj donde la IA aplasta a un humano. Lee japonés en 30 segundos,
        encuentra un dato en un contrato denso, traduce a 6 idiomas a la vez. Sentir el
        contraste <strong className="text-[var(--color-fg)]">vale más que mil estadísticas</strong>.
      </p>
      <ContraLaIA />
    </div>
  );
}
