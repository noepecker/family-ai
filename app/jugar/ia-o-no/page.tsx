import { IaONoGame } from "@/components/ia-o-no/game";

export const metadata = { title: "¿IA o no? · Acércate a la IA" };

export default function IaONoPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-16 pb-32">
      <a href="/jugar" className="font-mono text-sm text-[var(--color-fg-mute)] hover:text-[var(--color-accent)] inline-flex items-center gap-2 mb-8">
        <span>←</span> Volver a jugar
      </a>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-3">
        ¿IA <span className="font-serif italic text-[var(--color-accent)]">o no</span>?
      </h1>
      <p className="text-lg text-[var(--color-fg-soft)] mb-12">
        Lee, mira, decide. Tú dices si lo creó un humano o una máquina. Spoiler: vas a fallar más de lo que crees.
      </p>
      <IaONoGame />
    </div>
  );
}
