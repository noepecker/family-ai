import { Quiz } from "@/components/quiz/quiz";

export const metadata = { title: "Quiz · IA en familia" };

export default function QuizPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-16 pb-32">
      <BackLink />
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-3">
        Quiz <span className="font-serif italic text-[var(--color-accent)]">de IA</span>
      </h1>
      <p className="text-lg text-[var(--color-fg-soft)] mb-12">
        10 preguntas. Sin penalizaciones. Tras cada respuesta, una explicación con la fuente real.
      </p>
      <Quiz />
    </div>
  );
}

function BackLink() {
  return (
    <a href="/jugar" className="font-mono text-sm text-[var(--color-fg-mute)] hover:text-[var(--color-accent)] inline-flex items-center gap-2 mb-8">
      <span>←</span> Volver a jugar
    </a>
  );
}
