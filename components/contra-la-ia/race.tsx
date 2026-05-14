"use client";

import { useState, useEffect, useRef } from "react";
import { retos } from "./data";

type RetoState = "intro" | "running" | "answer" | "reveal";

export function ContraLaIA() {
  const [step, setStep] = useState(0);
  const [results, setResults] = useState<({ time: number; correct: boolean | null } | null)[]>(
    new Array(retos.length).fill(null)
  );

  if (step >= retos.length) {
    return <Final results={results} onRestart={() => { setStep(0); setResults(new Array(retos.length).fill(null)); }} />;
  }

  return (
    <RetoView
      key={step}
      reto={retos[step]}
      index={step}
      total={retos.length}
      onComplete={(r) => {
        setResults((prev) => {
          const next = [...prev];
          next[step] = r;
          return next;
        });
      }}
      onNext={() => setStep((s) => s + 1)}
    />
  );
}

function RetoView({
  reto,
  index,
  total,
  onComplete,
  onNext,
}: {
  reto: typeof retos[number];
  index: number;
  total: number;
  onComplete: (r: { time: number; correct: boolean | null }) => void;
  onNext: () => void;
}) {
  const [state, setState] = useState<RetoState>("intro");
  const [secondsLeft, setSecondsLeft] = useState<number>(reto.seconds);
  const [pickedOption, setPickedOption] = useState<number | null>(null);
  const startedAt = useRef<number>(0);

  useEffect(() => {
    if (state !== "running") return;
    if (secondsLeft <= 0) {
      setState("answer");
      return;
    }
    const t = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [state, secondsLeft]);

  const start = () => {
    setState("running");
    startedAt.current = Date.now();
  };

  const onSubmitOption = (i: number) => {
    setPickedOption(i);
    setState("reveal");
    const time = Math.round((Date.now() - startedAt.current) / 1000);
    const correct = reto.options ? reto.options[i].correct : null;
    onComplete({ time, correct });
  };

  const onJustReveal = () => {
    setState("reveal");
    const time = Math.round((Date.now() - startedAt.current) / 1000);
    onComplete({ time, correct: null });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <span className="font-mono text-xs text-[var(--color-fg-mute)]">RETO {index + 1} de {total}</span>
        {state === "running" && <CountdownChip seconds={secondsLeft} total={reto.seconds} />}
      </div>

      <div className="p-6 md:p-8 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)]">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">{reto.title}</h2>

        {state === "intro" && (
          <div>
            <p className="text-base text-[var(--color-fg-soft)] mb-6">{reto.intro}</p>
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)]">
                ⏱ {reto.seconds}s
              </span>
              <span className="font-mono text-xs text-[var(--color-fg-mute)]">
                la IA tardó <strong className="text-[var(--color-accent)]">{reto.aiTime}</strong>
              </span>
            </div>
            <button
              onClick={start}
              className="px-8 py-4 rounded-lg bg-[var(--color-accent)] text-[var(--color-bg)] font-mono text-base font-bold hover:bg-[var(--color-accent-soft)] transition-colors"
            >
              Empezar el cronómetro
            </button>
          </div>
        )}

        {state === "running" && (
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-mute)] mb-2">
              Tu tarea
            </div>
            <p className="text-xl text-[var(--color-fg)] mb-6 leading-snug">{reto.task}</p>

            <div className="p-5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] mb-6 max-h-[60vh] overflow-y-auto whitespace-pre-wrap text-[var(--color-fg)] leading-relaxed text-base">
              {reto.content as string}
            </div>

            {reto.options ? (
              <div className="grid grid-cols-1 gap-2">
                {reto.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => onSubmitOption(i)}
                    className="text-left p-4 rounded-lg border-2 border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-white/5 transition-all"
                  >
                    <span className="font-mono text-xs text-[var(--color-fg-mute)] mr-3">
                      {String.fromCharCode(65 + i)}
                    </span>
                    {opt.text}
                  </button>
                ))}
              </div>
            ) : (
              <button
                onClick={onJustReveal}
                className="px-6 py-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-accent)] text-[var(--color-accent)] font-mono text-sm font-semibold hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] transition-colors"
              >
                Me rindo, enseña qué hizo la IA
              </button>
            )}
          </div>
        )}

        {state === "answer" && (
          <div className="animate-fade-up">
            <div className="font-mono text-sm text-[var(--color-bad)] uppercase tracking-wider mb-3">
              Se acabó el tiempo
            </div>
            {reto.options ? (
              <div>
                <p className="text-base text-[var(--color-fg-soft)] mb-4">¿Cuál era la respuesta?</p>
                <div className="grid grid-cols-1 gap-2 mb-6">
                  {reto.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => onSubmitOption(i)}
                      className="text-left p-4 rounded-lg border-2 border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-white/5 transition-all"
                    >
                      <span className="font-mono text-xs text-[var(--color-fg-mute)] mr-3">
                        {String.fromCharCode(65 + i)}
                      </span>
                      {opt.text}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <button
                onClick={onJustReveal}
                className="px-6 py-3 rounded-lg bg-[var(--color-accent)] text-[var(--color-bg)] font-mono text-sm font-semibold"
              >
                Ver qué hizo la IA →
              </button>
            )}
          </div>
        )}

        {state === "reveal" && (
          <div className="animate-fade-up">
            {reto.options && pickedOption !== null && (
              <div
                className={`p-4 rounded-xl mb-6 border-l-4 ${
                  reto.options[pickedOption].correct
                    ? "border-[var(--color-good)] bg-[var(--color-good)]/10"
                    : "border-[var(--color-bad)] bg-[var(--color-bad)]/10"
                }`}
              >
                <div
                  className="font-mono text-sm font-bold mb-1"
                  style={{ color: reto.options[pickedOption].correct ? "var(--color-good)" : "var(--color-bad)" }}
                >
                  {reto.options[pickedOption].correct ? "¡Acertaste!" : "Fallaste."}
                </div>
                <p className="text-sm text-[var(--color-fg-soft)]">
                  La respuesta correcta era: <strong className="text-[var(--color-fg)]">{reto.options.find((o) => o.correct)?.text}</strong>
                </p>
              </div>
            )}

            <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--color-bg)] to-[rgba(255,87,34,0.1)] border border-[var(--color-accent)]/30 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]">
                  Lo que hizo la IA
                </div>
                <span className="font-mono text-xs px-2 py-1 rounded bg-[var(--color-accent)] text-[var(--color-bg)]">
                  ⚡ {reto.aiTime}
                </span>
              </div>
              <div className="p-4 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] whitespace-pre-wrap text-sm leading-relaxed font-mono text-[var(--color-fg)]">
                {reto.aiAnswer}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[var(--color-bg-card)] border-l-4 border-[var(--color-accent)] mb-6">
              <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-mute)] mb-2">
                Lección
              </div>
              <p className="text-base text-[var(--color-fg)] leading-relaxed">{reto.reveal}</p>
            </div>

            <button
              onClick={onNext}
              className="px-6 py-3 rounded-lg bg-[var(--color-accent)] text-[var(--color-bg)] font-mono text-sm font-semibold hover:bg-[var(--color-accent-soft)] transition-colors"
            >
              {index + 1 === total ? "Ver veredicto final →" : "Siguiente reto →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function CountdownChip({ seconds, total }: { seconds: number; total: number }) {
  const ratio = seconds / total;
  const color =
    ratio > 0.5 ? "var(--color-good)" : ratio > 0.2 ? "var(--color-warn)" : "var(--color-bad)";
  return (
    <div
      className="font-mono text-2xl font-bold px-4 py-2 rounded-lg"
      style={{
        background: `${color}20`,
        color,
        borderLeft: `3px solid ${color}`,
      }}
    >
      {seconds}s
    </div>
  );
}

function Final({ results, onRestart }: { results: any[]; onRestart: () => void }) {
  return (
    <div className="animate-fade-up">
      <div className="p-10 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)]">
        <div className="font-mono text-sm text-[var(--color-fg-mute)] uppercase tracking-wider mb-4 text-center">
          Marcador final
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-12 tracking-tight">
          IA: <span className="text-[var(--color-good)]">3</span> · Humanos: <span className="text-[var(--color-bad)]">probablemente 0</span>
        </h2>

        <div className="space-y-3 mb-10">
          {retos.map((r, i) => (
            <div
              key={r.id}
              className="flex items-center justify-between p-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)]"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[var(--color-fg-mute)]">{i + 1}</span>
                <span className="font-semibold">{r.title}</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="text-right">
                  <div className="font-mono text-xs text-[var(--color-fg-mute)]">Tú</div>
                  <div className="font-mono">
                    {results[i] ? `${results[i].time}s` : "—"}
                    {results[i] && results[i].correct !== null && (
                      <span className="ml-2" style={{ color: results[i].correct ? "var(--color-good)" : "var(--color-bad)" }}>
                        {results[i].correct ? "✓" : "✗"}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-[var(--color-fg-mute)]">vs</div>
                <div className="text-right">
                  <div className="font-mono text-xs text-[var(--color-fg-mute)]">IA</div>
                  <div className="font-mono text-[var(--color-accent)]">{r.aiTime}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--color-bg)] to-[rgba(255,87,34,0.08)] border border-[var(--color-accent)]/30">
          <div className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-wider mb-3">
            Y sin embargo…
          </div>
          <p className="text-base text-[var(--color-fg)] leading-relaxed mb-4">
            Esta misma IA, que traduce 6 idiomas en menos de un segundo y lee 800 palabras
            de legalese al instante, <strong>no consigue resolver un puzzle visual</strong> que
            un niño de 7 años saca en 5 segundos.
          </p>
          <p className="text-sm text-[var(--color-fg-soft)] mb-6">
            Esa es la paradoja de la IA en 2026: es <em>superhumana en muchas cosas</em> y
            <em> profundamente ciega en otras</em>. La parte donde sigue siendo ciega es
            la que llamamos "razonamiento abstracto novedoso", y es donde se mide cuánto
            falta para la AGI.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/jugar/arc-agi"
              className="px-6 py-3 rounded-lg bg-[var(--color-accent)] text-[var(--color-bg)] font-mono text-sm font-semibold hover:bg-[var(--color-accent-soft)] transition-colors"
            >
              Prueba ARC-AGI → donde la IA falla
            </a>
            <button
              onClick={onRestart}
              className="px-6 py-3 rounded-lg border border-[var(--color-border-strong)] font-mono text-sm font-semibold hover:bg-white/5 transition-colors"
            >
              Volver a jugar
            </button>
            <a
              href="/explorar/agi-y-benchmarks"
              className="px-6 py-3 rounded-lg border border-[var(--color-border-strong)] font-mono text-sm font-semibold hover:bg-white/5 transition-colors"
            >
              Leer sobre AGI y benchmarks
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
