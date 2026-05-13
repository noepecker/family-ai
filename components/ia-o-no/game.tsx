"use client";

import { useState } from "react";
import { items, type Item } from "./data";

type Vote = { itemId: number; guessedAi: boolean; correct: boolean };

export function IaONoGame() {
  const [step, setStep] = useState(0);
  const [guess, setGuess] = useState<boolean | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [votes, setVotes] = useState<Vote[]>([]);

  if (step >= items.length) {
    const correctCount = votes.filter((v) => v.correct).length;
    return <Results correct={correctCount} total={items.length} votes={votes} onRestart={() => {
      setStep(0); setGuess(null); setRevealed(false); setVotes([]);
    }} />;
  }

  const item = items[step];

  const onGuess = (isAi: boolean) => {
    if (revealed) return;
    setGuess(isAi);
    setRevealed(true);
    setVotes((prev) => [...prev, { itemId: item.id, guessedAi: isAi, correct: isAi === item.isAi }]);
  };

  const onNext = () => {
    setStep((s) => s + 1);
    setGuess(null);
    setRevealed(false);
  };

  return (
    <div>
      <Progress current={step + 1} total={items.length} />

      <div className="mt-8 p-8 md:p-10 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)]">
        <div className="font-mono text-xs text-[var(--color-fg-mute)] mb-6 flex items-center justify-between">
          <span>PIEZA {step + 1} de {items.length}</span>
          <span>{labelType(item.type)}</span>
        </div>

        <ItemDisplay item={item} />

        {!revealed && (
          <div className="mt-10 grid grid-cols-2 gap-4">
            <button
              onClick={() => onGuess(false)}
              className="p-6 rounded-2xl border-2 border-[var(--color-border)] hover:border-[var(--color-good)] hover:bg-[var(--color-good)]/5 transition-all group"
            >
              <div className="text-4xl mb-2">👤</div>
              <div className="font-bold text-xl">Humano</div>
              <div className="text-sm text-[var(--color-fg-soft)] mt-1 group-hover:text-[var(--color-fg)]">Lo escribió una persona</div>
            </button>
            <button
              onClick={() => onGuess(true)}
              className="p-6 rounded-2xl border-2 border-[var(--color-border)] hover:border-[var(--color-hot)] hover:bg-[var(--color-hot)]/5 transition-all group"
            >
              <div className="text-4xl mb-2">🤖</div>
              <div className="font-bold text-xl">IA</div>
              <div className="text-sm text-[var(--color-fg-soft)] mt-1 group-hover:text-[var(--color-fg)]">Lo generó una máquina</div>
            </button>
          </div>
        )}

        {revealed && guess !== null && (
          <div className="mt-8 animate-fade-up">
            <div className={`p-5 rounded-xl border-l-4 mb-5 ${guess === item.isAi ? "border-[var(--color-good)] bg-[var(--color-good)]/10" : "border-[var(--color-bad)] bg-[var(--color-bad)]/10"}`}>
              <div className="font-mono text-sm font-bold mb-2" style={{ color: guess === item.isAi ? "var(--color-good)" : "var(--color-bad)" }}>
                {guess === item.isAi ? "¡Acertaste!" : "Fallaste."}
              </div>
              <div className="text-base">
                Era <strong>{item.isAi ? "IA" : "humano"}</strong>. {item.explanation}
              </div>
            </div>
            <button
              onClick={onNext}
              className="w-full md:w-auto px-6 py-3 rounded-lg bg-[var(--color-accent)] text-[var(--color-bg)] font-mono text-sm font-semibold hover:bg-[var(--color-accent-soft)] transition-colors"
            >
              {step + 1 === items.length ? "Ver resultado final →" : "Siguiente pieza →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ItemDisplay({ item }: { item: Item }) {
  if (item.type === "quote") {
    return (
      <blockquote className="font-serif italic text-2xl md:text-3xl text-[var(--color-fg)] leading-relaxed border-l-4 border-[var(--color-accent)] pl-6 py-3">
        "{item.content}"
      </blockquote>
    );
  }
  if (item.type === "image") {
    return (
      <div className="space-y-2">
        <div className="aspect-video bg-[var(--color-bg)] rounded-xl flex items-center justify-center border border-[var(--color-border)] text-[var(--color-fg-mute)] font-mono text-sm p-8 text-center">
          {item.imageAlt || "[Imagen a generar en /public/jugar/ia-o-no/]"}
        </div>
        {item.imageNote && <div className="text-xs text-[var(--color-fg-mute)] font-mono">{item.imageNote}</div>}
      </div>
    );
  }
  return (
    <div className="text-lg md:text-xl leading-relaxed text-[var(--color-fg)] font-light">
      {item.content}
    </div>
  );
}

function labelType(t: Item["type"]) {
  return t === "text" ? "TEXTO" : t === "quote" ? "CITA" : "IMAGEN";
}

function Progress({ current, total }: { current: number; total: number }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-xs text-[var(--color-fg-mute)]">PROGRESO</span>
        <span className="font-mono text-xs text-[var(--color-fg-mute)]">{current}/{total}</span>
      </div>
      <div className="h-1.5 bg-[var(--color-bg-card)] rounded-full overflow-hidden">
        <div className="h-full bg-[var(--color-accent)] transition-all duration-500" style={{ width: `${(current / total) * 100}%` }} />
      </div>
    </div>
  );
}

function Results({ correct, total, votes, onRestart }: { correct: number; total: number; votes: Vote[]; onRestart: () => void }) {
  const pct = Math.round((correct / total) * 100);
  let verdict = "El humano medio acierta entre el 50 y el 65%. La diferencia con tirar una moneda es pequeña.";
  if (pct >= 80) verdict = "Eres de los buenos. Aún así, los modelos van por delante: en 6 meses, fallarás más.";
  else if (pct < 40) verdict = "No te preocupes. Detectar IA está perdido como guerra. Confía en el contexto y la fuente, no en tu ojo.";

  return (
    <div className="p-10 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] text-center animate-fade-up">
      <div className="font-mono text-sm text-[var(--color-fg-mute)] uppercase tracking-wider mb-4">Tu acierto</div>
      <div className="font-mono text-7xl md:text-9xl font-extrabold mb-2 text-[var(--color-accent)]">
        {pct}<span className="text-3xl text-[var(--color-fg-mute)]">%</span>
      </div>
      <div className="text-2xl text-[var(--color-fg)] mb-6">{correct} de {total}</div>
      <p className="text-base text-[var(--color-fg-soft)] max-w-xl mx-auto mb-8">{verdict}</p>

      <div className="grid grid-cols-6 gap-2 max-w-sm mx-auto mb-8">
        {votes.map((v, i) => (
          <div key={i} className="aspect-square rounded" style={{ background: v.correct ? "var(--color-good)" : "var(--color-bad)" }} title={`Pieza ${i + 1}`} />
        ))}
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        <button onClick={onRestart} className="px-6 py-3 rounded-lg bg-[var(--color-accent)] text-[var(--color-bg)] font-mono text-sm font-semibold hover:bg-[var(--color-accent-soft)] transition-colors">Volver a jugar</button>
        <a href="/explorar/deepfakes-y-deteccion" className="px-6 py-3 rounded-lg border border-[var(--color-border-strong)] font-mono text-sm font-semibold hover:bg-white/5 transition-colors">Cómo detectar IA</a>
      </div>
    </div>
  );
}
