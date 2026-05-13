"use client";

import { useState } from "react";
import { questions } from "./data";

type Answer = { questionId: number; correct: boolean };

export function Quiz() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const total = questions.length;
  const finished = step >= total;

  if (finished) {
    const correctCount = answers.filter((a) => a.correct).length;
    return <Results correct={correctCount} total={total} answers={answers} onRestart={() => {
      setStep(0); setSelected(null); setRevealed(false); setAnswers([]);
    }} />;
  }

  const q = questions[step];

  const onSelect = (i: number) => {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    setAnswers((prev) => [...prev, { questionId: q.id, correct: q.options[i].correct }]);
  };

  const onNext = () => {
    setStep((s) => s + 1);
    setSelected(null);
    setRevealed(false);
  };

  return (
    <div>
      <ProgressBar current={step + 1} total={total} />

      <div className="mt-8 p-8 md:p-10 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)]">
        <div className="font-mono text-xs text-[var(--color-fg-mute)] mb-4">
          PREGUNTA {step + 1} de {total}
        </div>

        <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-8">{q.question}</h2>

        <div className="space-y-3">
          {q.options.map((opt, i) => {
            const isSelected = selected === i;
            const isCorrect = opt.correct;
            let style = "border-[var(--color-border)] hover:border-[var(--color-accent)]/50 hover:bg-white/5";
            if (revealed) {
              if (isCorrect) style = "border-[var(--color-good)] bg-[var(--color-good)]/10";
              else if (isSelected && !isCorrect) style = "border-[var(--color-bad)] bg-[var(--color-bad)]/10";
              else style = "border-[var(--color-border)] opacity-60";
            }
            return (
              <button
                key={i}
                onClick={() => onSelect(i)}
                disabled={revealed}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${style} ${revealed ? "cursor-default" : "cursor-pointer"}`}
              >
                <span className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center font-mono text-sm font-bold ${revealed && isCorrect ? "border-[var(--color-good)] bg-[var(--color-good)] text-[var(--color-bg)]" : revealed && isSelected ? "border-[var(--color-bad)] bg-[var(--color-bad)] text-[var(--color-bg)]" : "border-[var(--color-border-strong)]"}`}>
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="text-base md:text-lg">{opt.text}</span>
                {revealed && isCorrect && <span className="ml-auto text-[var(--color-good)] font-bold">✓</span>}
                {revealed && isSelected && !isCorrect && <span className="ml-auto text-[var(--color-bad)] font-bold">✗</span>}
              </button>
            );
          })}
        </div>

        {revealed && (
          <div className="mt-6 p-5 rounded-xl bg-[var(--color-bg)] border-l-4 border-[var(--color-accent)] animate-fade-up">
            <div className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-wider mb-2">
              Por qué
            </div>
            <p className="text-base text-[var(--color-fg-soft)] leading-relaxed">{q.explanation}</p>
            {q.source && (
              <div className="mt-3 font-mono text-xs text-[var(--color-fg-mute)]">
                Fuente: {q.source}
              </div>
            )}
            <button
              onClick={onNext}
              className="mt-5 px-5 py-2.5 rounded-lg bg-[var(--color-accent)] text-[var(--color-bg)] font-mono text-sm font-semibold hover:bg-[var(--color-accent-soft)] transition-colors"
            >
              {step + 1 === total ? "Ver resultados →" : "Siguiente pregunta →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-xs text-[var(--color-fg-mute)]">PROGRESO</span>
        <span className="font-mono text-xs text-[var(--color-fg-mute)]">{current}/{total}</span>
      </div>
      <div className="h-1.5 bg-[var(--color-bg-card)] rounded-full overflow-hidden">
        <div
          className="h-full bg-[var(--color-accent)] transition-all duration-500"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>
    </div>
  );
}

function Results({ correct, total, answers, onRestart }: { correct: number; total: number; answers: Answer[]; onRestart: () => void }) {
  const pct = Math.round((correct / total) * 100);
  let verdict = "Aún hay trabajo. Pero ya sabes más que la mayoría.";
  let color = "var(--color-warn)";
  if (pct >= 80) { verdict = "Eres de los que se informan. Probablemente leíste todo lo de la sección explorar."; color = "var(--color-good)"; }
  else if (pct >= 50) { verdict = "Decente. Sabes lo básico y tienes intuición."; color = "var(--color-cool)"; }
  else if (pct < 30) { verdict = "Tranquilo: las preguntas son truñosas. La mayoría falla."; color = "var(--color-bad)"; }

  return (
    <div className="animate-fade-up">
      <div className="p-10 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] text-center">
        <div className="font-mono text-sm text-[var(--color-fg-mute)] uppercase tracking-wider mb-4">Tu resultado</div>
        <div className="font-mono text-7xl md:text-9xl font-extrabold mb-2" style={{ color }}>
          {correct}<span className="text-3xl text-[var(--color-fg-mute)]">/{total}</span>
        </div>
        <div className="font-mono text-2xl text-[var(--color-fg-soft)] mb-6">{pct}%</div>
        <p className="text-lg text-[var(--color-fg)] max-w-xl mx-auto mb-8">{verdict}</p>

        <div className="grid grid-cols-10 gap-1 max-w-md mx-auto mb-8">
          {answers.map((a, i) => (
            <div
              key={i}
              className="aspect-square rounded"
              style={{ background: a.correct ? "var(--color-good)" : "var(--color-bad)" }}
              title={`Pregunta ${i + 1}: ${a.correct ? "correcta" : "fallada"}`}
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <button onClick={onRestart} className="px-6 py-3 rounded-lg bg-[var(--color-accent)] text-[var(--color-bg)] font-mono text-sm font-semibold hover:bg-[var(--color-accent-soft)] transition-colors">
            Volver a jugar
          </button>
          <a href="/jugar" className="px-6 py-3 rounded-lg border border-[var(--color-border-strong)] font-mono text-sm font-semibold hover:bg-white/5 transition-colors">
            Probar otro juego
          </a>
          <a href="/explorar" className="px-6 py-3 rounded-lg border border-[var(--color-border-strong)] font-mono text-sm font-semibold hover:bg-white/5 transition-colors">
            Profundizar
          </a>
        </div>
      </div>
    </div>
  );
}
