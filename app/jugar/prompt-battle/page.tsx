import { PromptBattle } from "@/components/prompt-battle/battle";

export const metadata = { title: "Prompt battle · Acércate a la IA" };

export default function PromptBattlePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-16 pb-32">
      <a href="/jugar" className="font-mono text-sm text-[var(--color-fg-mute)] hover:text-[var(--color-accent)] inline-flex items-center gap-2 mb-8">
        <span>←</span> Volver a jugar
      </a>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-3">
        Prompt <span className="font-serif italic text-[var(--color-accent)]">battle</span>
      </h1>
      <p className="text-lg text-[var(--color-fg-soft)] mb-12 max-w-3xl">
        Mismo objetivo, dos prompts. El truño y el bueno. Mira cómo cambia la respuesta de la IA
        cuando le hablas como un becario perezoso o como un compañero exigente.
      </p>
      <PromptBattle />
    </div>
  );
}
